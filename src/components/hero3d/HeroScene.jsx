import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 56

function Network() {
  const group = useRef()
  const nodes = useRef()
  const edges = useRef()
  const pointer = useRef([0, 0])
  const points = useMemo(() => Array.from({ length: COUNT }, (_, i) => ({
    phase: (i / COUNT) * Math.PI * 2,
    radius: 1.32 + (i % 5) * 0.075,
    tilt: (i % 2 ? 1 : -1) * (0.32 + (i % 7) * 0.07),
    speed: 0.05 + (i % 6) * 0.006,
  })), [])
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const positions = useMemo(() => new Float32Array(COUNT * 6), [])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (group.current) {
      group.current.rotation.y += delta * 0.045
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.current[1] * 0.12, 2, delta)
      group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, -pointer.current[0] * 0.12, 2, delta)
    }
    if (nodes.current && edges.current) {
      const arr = edges.current.geometry.attributes.position.array
      points.forEach((p, i) => {
        const a = t * p.speed + p.phase
        const x = Math.cos(a) * p.radius
        const y = Math.sin(a) * Math.sin(p.tilt) * p.radius
        const z = Math.sin(a) * Math.cos(p.tilt) * p.radius
        dummy.position.set(x, y, z)
        dummy.scale.setScalar(i % 8 === 0 ? 0.075 : 0.045)
        dummy.updateMatrix()
        nodes.current.setMatrixAt(i, dummy.matrix)
        const near = (i + 1) % COUNT
        const b = t * points[near].speed + points[near].phase
        const q = points[near]
        arr.set([x, y, z, Math.cos(b) * q.radius, Math.sin(b) * Math.sin(q.tilt) * q.radius, Math.sin(b) * Math.cos(q.tilt) * q.radius], i * 6)
      })
      nodes.current.instanceMatrix.needsUpdate = true
      edges.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return <group ref={group} onPointerMove={(event) => { pointer.current = [event.pointer.x, event.pointer.y] }}>
    <mesh><icosahedronGeometry args={[0.69, 2]}/><meshPhysicalMaterial color="#c8f169" roughness={0.2} metalness={0.28} clearcoat={1} clearcoatRoughness={0.15}/></mesh>
    <mesh rotation={[0.7, 0.2, 0.1]}><torusGeometry args={[1.15, 0.006, 8, 120]}/><meshBasicMaterial color="#c8f169" transparent opacity={0.36}/></mesh>
    <mesh rotation={[1.18, 0.8, -0.2]}><torusGeometry args={[1.31, 0.004, 8, 120]}/><meshBasicMaterial color="#8da95e" transparent opacity={0.28}/></mesh>
    <instancedMesh ref={nodes} args={[undefined, undefined, COUNT]}><sphereGeometry args={[1, 8, 8]}/><meshBasicMaterial color="#d9f99d"/></instancedMesh>
    <lineSegments ref={edges}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]}/></bufferGeometry><lineBasicMaterial color="#9abb61" transparent opacity={0.24}/></lineSegments>
  </group>
}

function SceneContents() {
  return <><ambientLight intensity={0.75}/><pointLight position={[3, 4, 4]} intensity={18} color="#d6f69d"/><pointLight position={[-3, -2, -1]} intensity={7} color="#63853f"/><Network/></>
}

export default function HeroScene() {
  const [supported, setSupported] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const host = useRef(null)
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const weakDevice = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || (navigator.deviceMemory && navigator.deviceMemory <= 4)
    const hasWebGL = (() => { try { const canvas = document.createElement('canvas'); return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl')) } catch { return false } })()
    if (reduced || weakDevice || !hasWebGL) return
    setSupported(true)
    let visible = true
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; setEnabled(visible && !document.hidden) }, { threshold: 0.05 })
    observer.observe(host.current)
    const visibility = () => setEnabled(visible && !document.hidden)
    document.addEventListener('visibilitychange', visibility)
    setEnabled(true)
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility) }
  }, [])
  return <div className="webgl-scene" ref={host} aria-hidden="true">{supported && <><Canvas dpr={[1, 1.5]} frameloop={enabled ? 'always' : 'never'} camera={{ position: [0, 0, 4.8], fov: 42 }} gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}><SceneContents/></Canvas><span className="three-letter">H</span></>}</div>
}
