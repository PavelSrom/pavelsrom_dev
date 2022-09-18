import { Landing } from 'components/landing'
import type { NextPage } from 'next'
import { Text } from 'ui'
import { useTranslation } from 'lib/translation'
import { Button } from '@mantine/core'

const About: NextPage = () => {
  const { t } = useTranslation('about')

  return (
    <>
      <Landing
        illustration="personal_info"
        textContent={
          <>
            <Text variant="leading">{t('landing.title')}</Text>
            <Text variant="h2" className="font-light mt-8">
              {t('landing.description')}
            </Text>
            <Button size="xl" className="mt-16">
              Read the blog
            </Button>
          </>
        }
      />
    </>
  )
}

export default About
