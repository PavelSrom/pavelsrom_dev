import fs from 'fs'
import path from 'path'
import { sync } from 'glob'
import matter from 'gray-matter'
import { PostMeta } from 'types/blog'

const postsDirectory = path.join(process.cwd(), 'posts')

export const getPostSlugs = () => {
  const paths = sync(`${postsDirectory}/**/*.mdx`)

  return paths.map(path => {
    const slug = path.replace(postsDirectory, '').replace(/\.mdx?$/, '')
    return slug
  })
}

export const getPosts = () => {
  const slugs = getPostSlugs()

  return slugs
    .map(slug => getPostBySlug(slug))
    .filter(Boolean)
    .sort((a, b) => new Date(b!.meta.date as string) - new Date(a!.meta.date))
}

export const getPostBySlug = (slug: string) => {
  const postPath = path.join(postsDirectory, `${slug}.mdx`)
  const source = fs.readFileSync(postPath)

  const { content, data } = matter(source)
  console.log('data', data)

  if (!data.public) {
    return null
  }

  return {
    content,
    meta: {
      slug,
      ...data,
      tags: data.categories.split('__'),
      date: (data.date ?? new Date()).toString(),
    },
  }
}
