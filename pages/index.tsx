import type { NextPage } from 'next'
import { Landing } from 'components/landing'
import { ButtonLink, Text, WhitespaceDivider } from 'ui'
import { useTranslation } from 'lib/translation'
import { TextWithImage } from 'components/text-with-image'
import {
  ApplicationBracketsIcon,
  ArrowExpandAllIcon,
  HumanMaleBoardIcon,
  VectorCircleIcon,
} from 'ui/icons'
import { FeatureGrid, IconItem } from 'components/feature-grid'
import { ContactForm } from 'components/home/contact-form'
import { Seo } from 'components/seo'

const Home: NextPage = () => {
  const { t } = useTranslation('home')

  const gridItems: IconItem[] = [
    {
      icon: <ApplicationBracketsIcon size="xxlarge" />,
      title: t('feature_grid.0.title'),
      text: t('feature_grid.0.text'),
    },
    {
      icon: <VectorCircleIcon size="xxlarge" />,
      title: t('feature_grid.1.title'),
      text: t('feature_grid.1.text'),
    },
    {
      icon: <HumanMaleBoardIcon size="xxlarge" />,
      title: t('feature_grid.2.title'),
      text: t('feature_grid.2.text'),
    },
    {
      icon: <ArrowExpandAllIcon size="xxlarge" />,
      title: t('feature_grid.3.title'),
      text: t('feature_grid.3.text'),
    },
  ]

  return (
    <>
      <Seo page="home" />
      <Landing
        illustration="web_devices"
        textContent={
          <>
            <Text variant="leading">
              {t('landing.title')}
              <span className="text-primary"> {t('landing.highlighted')}</span>
            </Text>
            <ButtonLink href="/experience" size="xl" className="mt-24">
              {t('landing.ctaTemp')}
            </ButtonLink>
          </>
        }
      />
      <WhitespaceDivider tight />
      <TextWithImage
        image="portrait.png"
        imageAlt="Me in portrait mode"
        title={t('greeting.title')}
        text={t('greeting.text')}
        cta={
          <ButtonLink href="/tools" size="lg" variant="light" className="mt-20">
            {t('greeting.cta')}
          </ButtonLink>
        }
      />
      <WhitespaceDivider />
      <FeatureGrid title={t('feature_grid.title')} items={gridItems} />
      <WhitespaceDivider />
      <TextWithImage
        image="healthy_habit.svg"
        imageAlt="healthy_habit"
        title={t('fitness.title')}
        text={t('fitness.text')}
        textPosition="left"
        cta={
          <ButtonLink href="/about" size="lg" variant="light" className="mt-20">
            {t('fitness.cta')}
          </ButtonLink>
        }
      />
      <WhitespaceDivider />
      <ContactForm />
      <WhitespaceDivider tight />
    </>
  )
}

export default Home
