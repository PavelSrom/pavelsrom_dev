import { Landing } from 'components/landing'
import type { NextPage } from 'next'
import { Text } from 'ui'
import { useTranslation } from 'lib/translation'
import { Button } from '@mantine/core'
import { Seo } from 'components/seo'

const Experience: NextPage = () => {
  const { t } = useTranslation('blog')

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
    </>
  )
}

export default Experience
