import { Landing } from 'components/landing'
import type { NextPage } from 'next'
import { Text, WhitespaceDivider } from 'ui'
import { useTranslation } from 'lib/translation'
import { Button } from '@mantine/core'
import { ToolGrid } from 'components/tools/tool-grid'

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
      <WhitespaceDivider tight />
      <ToolGrid section="webdev" size={10} />
      <WhitespaceDivider />
      <ToolGrid section="apps" size={9} />
      <WhitespaceDivider />
      <ToolGrid section="gear" size={7} />
      <WhitespaceDivider tight />
    </>
  )
}

export default Experience
