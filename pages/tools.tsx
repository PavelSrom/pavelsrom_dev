import { Landing } from 'components/landing'
import type { NextPage } from 'next'
import { Text } from 'ui'
import { useTranslation } from 'lib/translation'
import { Button } from '@mantine/core'

const Experience: NextPage = () => {
  const { t } = useTranslation('tools')

  return (
    <>
      <Landing
        illustration="static_website"
        textContent={
          <>
            <Text variant="leading">{t('landing.title')}</Text>
            <Text variant="sub" className="font-light mt-8">
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

export default Experience
