import { Landing } from 'components/landing'
import type { NextPage } from 'next'
import { ButtonLink, Text, WhitespaceDivider } from 'ui'
import { useTranslation } from 'lib/translation'
import { JobListing } from 'components/experience/job-listing'
import { Seo } from 'components/seo'

const Experience: NextPage = () => {
  const { t } = useTranslation('experience')

  return (
    <>
      <Seo page="experience" />
      <Landing
        illustration="feeling_proud"
        textContent={
          <>
            <Text variant="leading">{t('landing.title')}</Text>
            <Text variant="sub" className="font-light mt-8">
              {t('landing.description')}
            </Text>
            <ButtonLink href="#copyright-agent" size="xl" className="mt-16">
              {t('landing.cta')}
            </ButtonLink>
          </>
        }
      />
      <WhitespaceDivider tight />

      <JobListing
        abbreviation="sg"
        logoSrc="data:image/jpeg;base64,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"
        id="shape-games"
      />
      <WhitespaceDivider />
      <JobListing
        abbreviation="ca"
        logoSrc="https://assets-global.website-files.com/607d41b888d1c8313d91fb0e/64b92e9c3d2721b99e560135_Icon%20dark.png"
        id="copyright-agent"
      />
      <WhitespaceDivider tight />
    </>
  )
}

export default Experience
