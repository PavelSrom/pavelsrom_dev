import { getPostBySlug, getPostSlugs } from 'lib/blog'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Blockquote } from '@mantine/core'
import { Prism } from '@mantine/prism'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import format from 'date-fns/format'
import readingTime from 'reading-time'
import { Container, Highlight, Text, WhitespaceDivider } from 'ui'
import { BlogImage } from 'components/blog/blog-image'
import { PostMeta } from 'types/blog'

interface BlogPostProps {
  source: MDXRemoteSerializeResult
  meta: PostMeta
}

const BlogPost: NextPage<BlogPostProps> = props => {
  return (
    <Container>
      <main className="max-w-3xl mx-auto blog_content">
        <WhitespaceDivider tight />
        <Text variant="caption" className="text-right">
          {format(new Date(props.meta.date), 'MMMM dd, yyyy')} -{' '}
          {props.meta.readingTime}
        </Text>
        <Text variant="h1" id="__title">
          {props.meta.title}
        </Text>
        <Text variant="sub" className="mt-4 mb-8">
          {props.meta.description}
        </Text>
        <img
          src={props.meta.thumbnailUrl}
          alt={props.meta.title}
          className="max-h-blog-image w-full object-cover rounded-xl"
        />
        <a
          href={props.meta.thumbnailUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text variant="caption" className="mt-2 mb-8 underline">
            Photo by {props.meta.thumbnailReference} on{' '}
            {props.meta.thumbnailSource}
          </Text>
        </a>

        <MDXRemote
          {...props.source}
          components={{ Blockquote, BlogImage, Highlight, Prism }}
        />

        <WhitespaceDivider tight />
      </main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string)
  const mdxSource = await serialize(post!.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    },
  })

  return {
    props: {
      source: mdxSource,
      meta: {
        ...post!.meta,
        readingTime: readingTime(post!.content).text,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const localizedPaths = getPostSlugs().map(slug =>
    (locales ?? []).map(locale => ({
      params: { slug: slug.replace('/', '') },
      locale,
    }))
  )

  return {
    paths: localizedPaths.flat(),
    fallback: false,
  }
}

export default BlogPost
