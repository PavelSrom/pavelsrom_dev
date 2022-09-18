import type { NextPage } from 'next'
import { Landing } from 'components/landing'
import { Container, Text, WhitespaceDivider } from 'ui'
import { useTranslation } from 'lib/translation'
import { Button } from '@mantine/core'
import { TextWithImage } from 'components/text-with-image'
import {
  AccountMultipleIcon,
  AppleIcon,
  ApplicationBracketsIcon,
  ArrowExpandAllIcon,
  BrainIcon,
  CalendarIcon,
  ClockIcon,
  CocktailIcon,
  DumbbellIcon,
  EarbudsIcon,
  GithubIcon,
  LanguageIcon,
  LaptopIcon,
  LinkedinIcon,
  LocationIcon,
  PhoneIcon,
  SchoolIcon,
  VectorCircleIcon,
  WatchIcon,
} from 'ui/icons'

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
      <WhitespaceDivider tight />
      <TextWithImage
        image="web_devices.svg"
        imageAlt="some alt text"
        title="Hey there!"
        text="I’m Pavel, a web developer currently living in Copenhagen, Denmark. I help people and companies build their projects by utilizing the web’s full potential."
        cta={
          <Button size="lg" variant="light" className="mt-12">
            Learn more about me
          </Button>
        }
      />
      <WhitespaceDivider />
      <Container>
        <Text variant="h1" className="mb-8">
          How can I help you?
        </Text>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6 bg-lightblue p-4">
            <p>Hello world</p>
          </div>
          <div className="col-span-12 lg:col-span-6 bg-lightblue p-4">
            <p>Hello world</p>
          </div>
        </div>
      </Container>
      <WhitespaceDivider />
      <TextWithImage
        image="healthy_habit.svg"
        imageAlt="healthy_habit"
        title="Fitness at heart"
        text="That’s right. I’ve been doing sports essentially my whole life, but these days I practice mostly weighted calisthenics, weights and running."
        textPosition="left"
        cta={
          <Button size="lg" variant="light" className="mt-16">
            Read the blog
          </Button>
        }
      />
      <WhitespaceDivider tight />
      <ApplicationBracketsIcon color="#ff00ff" size="xxlarge" />
      <VectorCircleIcon color="#ff00ff" size="xxlarge" />
      <SchoolIcon color="#ff00ff" size="xxlarge" />
      <ArrowExpandAllIcon color="#ff00ff" size="xxlarge" />
      <DumbbellIcon color="#ff00ff" size="xxlarge" />
      <BrainIcon color="#ff00ff" size="xxlarge" />
      <CocktailIcon color="#ff00ff" size="xxlarge" />
      <LanguageIcon color="#ff00ff" size="xxlarge" />
      <CalendarIcon color="#ff00ff" size="xxlarge" />
      <ClockIcon color="#ff00ff" size="xxlarge" />
      <LocationIcon color="#ff00ff" size="xxlarge" />
      <AccountMultipleIcon color="#ff00ff" size="xxlarge" />
      <AppleIcon color="#ff00ff" size="xxlarge" />
      <LaptopIcon color="#ff00ff" size="xxlarge" />
      <PhoneIcon color="#ff00ff" size="xxlarge" />
      <WatchIcon color="#ff00ff" size="xxlarge" />
      <EarbudsIcon color="#ff00ff" size="xxlarge" />
      <GithubIcon color="#ff00ff" size="xxlarge" />
      <LinkedinIcon color="#ff00ff" size="xxlarge" />
    </>
  )
}

export default Home
