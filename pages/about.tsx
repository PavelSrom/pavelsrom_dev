import { Landing } from 'components/landing'
import type { NextPage } from 'next'
import { ButtonLink, Text, WhitespaceDivider } from 'ui'
import { useTranslation } from 'lib/translation'
import { TextWithImage } from 'components/text-with-image'
import { FeatureGrid, IconItem } from 'components/feature-grid'
import { BrainIcon, CocktailIcon, DumbbellIcon, LanguageIcon } from 'ui/icons'
import { Story } from 'components/about/story'
import { Seo } from 'components/seo'

const About: NextPage = () => {
  const { t } = useTranslation('about')

  const gridItems: IconItem[] = [
    {
      icon: <DumbbellIcon size="xxlarge" />,
      title: t('feature_grid.0.title'),
      text: t('feature_grid.0.text'),
    },
    {
      icon: <BrainIcon size="xxlarge" />,
      title: t('feature_grid.1.title'),
      text: t('feature_grid.1.text'),
    },
    {
      icon: <CocktailIcon size="xxlarge" />,
      title: t('feature_grid.2.title'),
      text: t('feature_grid.2.text'),
    },
    {
      icon: <LanguageIcon size="xxlarge" />,
      title: t('feature_grid.3.title'),
      text: t('feature_grid.3.text'),
    },
  ]

  return (
    <>
      <Seo page="about" />
      <Landing
        illustration="personal_info"
        textContent={
          <>
            <Text variant="leading">{t('landing.title')}</Text>
            <Text variant="sub" className="font-light mt-8">
              {t('landing.description')}
            </Text>
            <ButtonLink href="/blog" size="xl" className="mt-16">
              {t('landing.cta')}
            </ButtonLink>
          </>
        }
      />
      <WhitespaceDivider tight />
      <TextWithImage
        image="tech_excitement.jpeg"
        imageAlt="Me working on my laptop and adjusting my watch"
        title={t('tech.title')}
        text={t('tech.text')}
        id="tech"
      />
      <WhitespaceDivider />
      <TextWithImage
        image="pulpit_rock.png"
        imageAlt="Me in Norway"
        title={t('travel.title')}
        text={t('travel.text')}
        textPosition="left"
        caption={t('travel.caption')}
      />
      <WhitespaceDivider />
      <FeatureGrid title={t('feature_grid.title')} items={gridItems} />
      <WhitespaceDivider />
      <Story />
      <WhitespaceDivider tight />
    </>
  )
}

export default About
