import { Container } from 'ui/container'
import { useRouter } from 'next/router'
import { useTranslation, setLanguage } from 'lib/translation'
import { ButtonLink, Text } from 'ui'
import { ActionIcon, Menu, Transition } from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'
import { MenuIcon } from 'ui/icons'

export const Header = () => {
  const router = useRouter()
  const { t, lang } = useTranslation('common')
  const [menuOpen, setMenuOpen] = useState(false)

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
        <p onClick={() => router.push('/')} className="mr-auto lg:mr-0">
          {t('hello')}
        </p>
        <nav className="space-x-4 hidden lg:block">
          {['blog', 'about', 'experience', 'tools'].map(link => (
            <ButtonLink
              href={`/${link}`}
              key={link}
              variant={router.pathname === `/${link}` ? 'light' : 'subtle'}
              size="xl"
            >
              {t(`navigation.${link}`)}
            </ButtonLink>
          ))}
        </nav>

        <div className="space-x-6 flex items-center">
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
                  className={
                    currLanguage?.value === value ? 'bg-lightblue' : ''
                  }
                  onClick={() => setLanguage(value)}
                >
                  <Text>{label}</Text>
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>

          <nav className="relative block lg:hidden">
            <ActionIcon onClick={() => setMenuOpen(prev => !prev)}>
              <MenuIcon size="large" />
            </ActionIcon>

            <Transition mounted={menuOpen} transition="slide-down">
              {styles => (
                <div
                  style={styles}
                  className="p-8 absolute right-6 shadow-md bg-white z-10"
                >
                  <Text variant="h2" className="mb-8">
                    Menu
                  </Text>
                  {['blog', 'about', 'experience', 'tools'].map(link => (
                    <ButtonLink
                      href={`/${link}`}
                      key={link}
                      variant={
                        router.pathname === `/${link}` ? 'light' : 'subtle'
                      }
                      size="lg"
                      className="mb-4"
                    >
                      {t(`navigation.${link}`)}
                    </ButtonLink>
                  ))}
                </div>
              )}
            </Transition>
          </nav>
        </div>
      </Container>
    </header>
  )
}
