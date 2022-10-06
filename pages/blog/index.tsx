import { Landing } from 'components/landing'
import type { GetStaticProps, NextPage } from 'next'
import { ButtonLink, Container, Text, WhitespaceDivider } from 'ui'
import { useTranslation } from 'lib/translation'
import { Seo } from 'components/seo'
import { getPosts } from 'lib/blog'
import { useRouter } from 'next/router'
import { PostCard } from 'components/blog/post-card'
import { useMemo, useState } from 'react'
import { Badge, TextInput } from '@mantine/core'

const Blog: NextPage = (props: any) => {
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const { t } = useTranslation('blog')
  const router = useRouter()

  const allTags = useMemo((): string[] => {
    const tags = new Set()

    props.posts.forEach((post: any) => {
      post.meta.tags.forEach((tag: string) => tags.add(tag))
    })

    return Array.from(tags as unknown as string[]).sort()
  }, [props.posts])

  const postsToRender = useMemo(() => {
    if (!search && !tags.length) {
      return props.posts
    }

    return props.posts.filter((post: any) => {
      if (
        search &&
        !post.meta.title.toLowerCase().includes(search.toLowerCase())
      ) {
        return false
      }

      if (tags.length && !tags.every(tag => post.meta.tags.includes(tag))) {
        return false
      }

      return true
    })
  }, [search, tags, props.posts])

  return (
    <>
      <Seo page="blog" />
      <Landing
        illustration="online_articles"
        textContent={
          <>
            <Text variant="leading">{t('landing.title')}</Text>
            <Text variant="sub" className="font-light mt-8">
              {t('landing.description')}
            </Text>
            <ButtonLink href="#search" size="xl" className="mt-16">
              {t('landing.cta')}
            </ButtonLink>
          </>
        }
      />
      <WhitespaceDivider tight />

      <section className="flex flex-col" id="search">
        <Container className="mb-8">
          <div className="grid grid-cols-12 gap-y-16 lg:gap-x-16 2xl:gap-x-24">
            <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 mt-auto">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  size="xl"
                  variant={tags.includes(tag) ? 'filled' : 'light'}
                  className="cursor-pointer mr-2 mb-2"
                  onClick={() =>
                    setTags(prev => {
                      if (prev.includes(tag)) return prev.filter(t => t !== tag)

                      return [...prev, tag]
                    })
                  }
                >
                  {tag}
                </Badge>
              ))}

              <TextInput
                placeholder={t('search.placeholder')}
                value={search}
                onChange={e => setSearch(e.currentTarget.value)}
                className="mt-8"
              />
            </div>
            <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
              <Text variant="h1">{t('search.title')}</Text>
              <Text variant="sub" className="mt-8">
                {t('search.description')}
              </Text>
            </div>
          </div>
        </Container>
      </section>

      <Container noPadding>
        <section className="bg-lightblue rounded-3xl">
          <div className="px-3 sm:px-8 py-8 md:py-12 lg:px-8 xl:px-16">
            {postsToRender.length === 0 && <Text>({t('search.none')})</Text>}
            {postsToRender.length > 0 && (
              <div className="grid grid-cols-12 gap-8">
                {postsToRender.map((post: any) => (
                  <div
                    key={post.meta.slug}
                    className="col-span-12 md:col-span-6 xl:col-span-4"
                  >
                    <PostCard
                      post={post}
                      onNavigate={() => router.push(`/blog/${post.meta.slug}`)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </Container>

      <WhitespaceDivider tight />
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getPosts()

  return {
    props: {
      posts,
    },
  }
}

export default Blog
