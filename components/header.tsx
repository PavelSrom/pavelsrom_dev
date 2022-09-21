import { Container } from 'ui/container'
import { useRouter } from 'next/router'
import { useTranslation, setLanguage } from 'lib/translation'
import { ButtonLink, Text } from 'ui'
import { ActionIcon, Menu } from '@mantine/core'
import Image from 'next/image'

export const Header = () => {
  const router = useRouter()
  const { t, lang } = useTranslation('common')

  const languages = [
    {
      label: 'English',
      value: 'en',
      icon: '/assets/united-states.png',
    },
    {
      label: 'Dansk',
      value: 'da',
      icon: '/assets/denmark.png',
    },
    {
      label: 'Čeština',
      value: 'cs',
      icon: '/assets/czech-republic.png',
    },
  ] as const

  const currLanguage = languages.find(l => l.value === lang)

  return (
    <header className="pt-8">
      <Container className="flex justify-between items-center">
        <p onClick={() => router.push('/')}>{t('hello')}</p>
        <nav className="space-x-4">
          {['blog', 'about', 'experience', 'tools'].map(link => (
            <ButtonLink
              href={`/${link}`}
              key={link}
              variant={router.pathname === `/${link}` ? 'light' : 'subtle'}
              size="xl"
            >
              <a>{t(`navigation.${link}`)}</a>
            </ButtonLink>
          ))}
        </nav>
        <Menu transition="skew-up" radius="md">
          <Menu.Target>
            <ActionIcon size="lg">
              <Image
                src={currLanguage?.icon ?? ''}
                alt={currLanguage?.label ?? ''}
                width={24}
                height={24}
              />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            {languages.map(({ icon, label, value }) => (
              <Menu.Item
                key={value}
                icon={<Image src={icon} width={24} height={24} />}
                className={currLanguage?.value === value ? 'bg-lightblue' : ''}
                onClick={() => setLanguage(value)}
              >
                <Text>{label}</Text>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Container>
    </header>
  )
}
