import type { NextPage } from 'next'
import { Landing } from 'components/landing'
import { Text } from 'ui'
import { useTranslation } from 'lib/translation'
import { Button } from '@mantine/core'

const Home: NextPage = () => {
  const { t } = useTranslation('home')

  return (
    <>
      <Landing
        illustration="web_devices"
        textContent={
          <>
            <Text variant="leading">
              {t('landing.title')}
              <span className="text-primary"> {t('landing.highlighted')}</span>
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

export default Home
