import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { readFile, writeFile } from 'node:fs/promises'

const server = await createServer({ configFile: './vite.config.js', server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const appHtml = renderToString(React.createElement(App))
  const html = await readFile('dist/index.html', 'utf8')
  const prerendered = html.replace('<div id="root"></div>', `<div id="root" data-prerendered="true">${appHtml}</div>`)
  if (prerendered === html) throw new Error('Could not find the application root in dist/index.html')
  await writeFile('dist/index.html', prerendered)
} finally {
  await server.close()
}
