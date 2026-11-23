// Keep presentation data in one place so project and profile copy is easy to maintain.
import { content } from './content/site.ts'

export { content }
export const { profile, education, additionalProjects, certifications } = content
export const projects = content.projects.map(({ tags, theme, ...project }) => ({ ...project, theme, visual: theme, tags: tags.map(({ name }) => name) }))
export const stack = content.skills.map(({ title, items }) => ({ title, items: items.map(({ name, level }) => level ? `${name} · ${level}` : name) }))
export const milestones = content.journey.map(({ date, title, org, text, url, linkLabel }) => ({ date, title, org, text, url, sourceUrl: url, sourceLabel: linkLabel }))
