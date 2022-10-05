import { Landing } from 'components/landing'
import type { GetStaticProps, NextPage } from 'next'
import { Container, Text, WhitespaceDivider } from 'ui'
import { useTranslation } from 'lib/translation'
import { Badge, Button, Card, Divider } from '@mantine/core'
import format from 'date-fns/format'
import readingTime from 'reading-time'
import { Seo } from 'components/seo'
import { getPosts } from 'lib/blog'
import { useRouter } from 'next/router'

const Blog: NextPage = (props: any) => {
  const { t } = useTranslation('blog')
  const router = useRouter()

  console.log('props', props)

  return (
    <>
      <Seo page="blog" />
      <Landing
        illustration="online_articles"
        textContent={
          <>
            <Text variant="leading">{t('landing.title')}</Text>
            <Text variant="sub" className="font-light mt-8">
              {t('landing.descriptionTemp')}
            </Text>
            {/* <Button size="xl" className="mt-16">
              Read the blog
            </Button> */}
          </>
        }
      />
      <WhitespaceDivider tight />
      <Container noPadding>
        <div className="px-3 sm:px-8 py-8 md:py-12 lg:px-8 xl:px-8 grid grid-cols-12 lg:gap-8 bg-lightblue">
          {props.posts.map((post: any) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <Card p="lg" radius="lg" withBorder className="h-full">
                <Card.Section
                  className="cursor-pointer"
                  onClick={() => router.push(`/blog/${post.meta.slug}`)}
                >
                  <div
                    className="bg-center bg-cover h-80 w-full"
                    style={{
                      backgroundImage: `url(${post.meta.thumbnail})`,
                    }}
                  />
                </Card.Section>
                <Card.Section>
                  <div className="bg-white px-8 pb-8">
                    <div className="mt-6 mb-4">
                      {post.meta.tags.map((tag: any) => (
                        <Badge key={tag} className="mr-2">
                          {tag.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                    <Text variant="h2">{post.meta.title}</Text>
                    <Text className="mt-2">{post.meta.description}</Text>
                  </div>
                  <Divider className="mt-auto" />
                  <div className="flex justify-between items-center px-8 py-2">
                    <Text variant="caption">
                      {format(new Date(post.meta.date), 'MMM d, yyyy')}
                    </Text>
                    <Text variant="caption">
                      {readingTime(post.content).text}
                    </Text>
                  </div>
                </Card.Section>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = ctx => {
  console.log('context', ctx)

  const posts = getPosts()
  console.log('posts', posts)

  return {
    props: {
      posts,
    },
  }
}

export default Blog
