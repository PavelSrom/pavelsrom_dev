import type { NextPage } from 'next'
import { Landing } from 'components/landing'
import { Container, Text, WhitespaceDivider } from 'ui'
import { useTranslation } from 'lib/translation'
import { Button } from '@mantine/core'
import { TextWithImage } from 'components/text-with-image'
import {
  ApplicationBracketsIcon,
  ArrowExpandAllIcon,
  HumanMaleBoardIcon,
  VectorCircleIcon,
} from 'ui/icons'
import { FeatureGrid, IconItem } from 'components/feature-grid'

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
      <Landing
        illustration="web_devices"
        textContent={
          <>
            <Text variant="leading">
              {t('landing.title')}
              <span className="text-primary"> {t('landing.highlighted')}</span>
            </Text>
            <Button size="xl" className="mt-24">
              Read the blog
            </Button>
          </>
        }
      />
      <WhitespaceDivider tight />
      <TextWithImage
        image="portrait.png"
        imageAlt="some alt text"
        title="Hey there!"
        text="I’m Pavel, a web developer currently living in Copenhagen, Denmark. I help people and companies build their projects by utilizing the web’s full potential."
        cta={
          <Button size="lg" variant="light" className="mt-20">
            Learn more about me
          </Button>
        }
      />
      <WhitespaceDivider />
      <Container>
        <Text variant="h1" className="mb-8">
          How can I help you?
        </Text>
        <FeatureGrid items={gridItems} />
      </Container>
      <WhitespaceDivider />
      <TextWithImage
        image="healthy_habit.svg"
        imageAlt="healthy_habit"
        title="Fitness at heart"
        text="That’s right. I’ve been doing sports essentially my whole life, but these days I practice mostly weighted calisthenics, weights and running."
        textPosition="left"
        cta={
          <Button size="lg" variant="light" className="mt-20">
            Read the blog
          </Button>
        }
      />
      <WhitespaceDivider tight />
    </>
  )
}

export default Home
