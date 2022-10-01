import { Landing } from 'components/landing'
import type { NextPage } from 'next'
import { ButtonLink, Text, WhitespaceDivider } from 'ui'
import { useTranslation } from 'lib/translation'
import { Button } from '@mantine/core'
import { ToolGrid } from 'components/tools/tool-grid'
import {
  AppleIcon,
  CalendarIcon,
  ChromeIcon,
  EarbudsIcon,
  GithubIcon,
  IcloudIcon,
  KeyboardIcon,
  LaptopIcon,
  MailIcon,
  MouseIcon,
  PencilIcon,
  PhoneIcon,
  TodoIcon,
  VscIcon,
  WatchIcon,
} from 'ui/icons'
import { Seo } from 'components/seo'

const Experience: NextPage = () => {
  const { t } = useTranslation('tools')

  const appsIcons = [
    [<GithubIcon size="large" />],
    [<VscIcon size="large" />],
    [<GithubIcon size="large" />],
    [<ChromeIcon size="large" />],
    [<CalendarIcon size="large" />],
    [<MailIcon size="large" />],
    [<TodoIcon size="large" />],
    [<PencilIcon size="large" />],
    [<IcloudIcon size="large" />],
  ]

  const gearIcons = [
    [<AppleIcon size="large" />, <LaptopIcon size="large" />],
    [<AppleIcon size="large" />, <PhoneIcon size="large" />],
    [<AppleIcon size="large" />, <WatchIcon size="large" />],
    [<AppleIcon size="large" />, <EarbudsIcon size="large" />],
    [<AppleIcon size="large" />, <KeyboardIcon size="large" />],
    [<AppleIcon size="large" />, <MouseIcon size="large" />],
    [<KeyboardIcon size="large" />, <MouseIcon size="large" />],
  ]

  return (
    <>
      <Seo page="tools" />
      <Landing
        illustration="static_website"
        textContent={
          <>
            <Text variant="leading">{t('landing.title')}</Text>
            <Text variant="sub" className="font-light mt-8">
              {t('landing.description')}
            </Text>
            <ButtonLink href="#web-development" size="xl" className="mt-16">
              {t('landing.cta')}
            </ButtonLink>
          </>
        }
      />
      <WhitespaceDivider tight />
      <ToolGrid section="webdev" size={10} id="web-development" />
      <WhitespaceDivider />
      <ToolGrid section="apps" size={9} icons={appsIcons} />
      <WhitespaceDivider />
      <ToolGrid section="gear" size={7} icons={gearIcons} />
      <WhitespaceDivider tight />
    </>
  )
}

export default Experience
