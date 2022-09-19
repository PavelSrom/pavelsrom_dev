import { Landing } from 'components/landing'
import type { NextPage } from 'next'
import { Text, WhitespaceDivider } from 'ui'
import { useTranslation } from 'lib/translation'
import { Button } from '@mantine/core'
import { JobListing } from 'components/job-listing'

const Experience: NextPage = () => {
  const { t } = useTranslation('experience')

  return (
    <>
      <Landing
        illustration="feeling_proud"
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
      <WhitespaceDivider />
      <JobListing
        abbreviation="ca"
        logoSrc="https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/224207945_3899265770202660_1681929673866814512_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=35kENndZquEAX_DHfU1&_nc_ht=scontent-cph2-1.xx&oh=00_AT_SmcvjcG20MjUe-SLYeyqegUVyjvYTPKfKTXQOec7yzg&oe=632DD489"
      />
      <WhitespaceDivider />
      <JobListing
        abbreviation="dt"
        logoSrc="https://app.designerstrust.com/images/DT_logo_circle.svg"
      />
      <WhitespaceDivider tight />
    </>
  )
}

export default Experience
