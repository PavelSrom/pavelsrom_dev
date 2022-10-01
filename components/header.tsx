import { Container } from 'ui/container'
import { useRouter } from 'next/router'
import { useTranslation, setLanguage } from 'lib/translation'
import { ButtonLink, Text } from 'ui'
import { ActionIcon, Drawer, Menu } from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { MenuIcon } from 'ui/icons'
import Link from 'next/link'

export const Header = () => {
  const router = useRouter()
  const { t, lang } = useTranslation('common')
  const [menuOpen, setMenuOpen] = useState(false)

  const reroute = useDebouncedCallback((link: string) => router.push(link), 250)

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
        <Link href="/">
          <a className="no-underline text-gray9 hover:text-primary font-extrabold">
            <p className="mr-auto lg:mr-0 text-2xl lg:text-3xl font-normal font-noto">
              Pavel Srom
            </p>
          </a>
        </Link>
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

        <div className="space-x-4 flex items-center">
          <Menu transition="skew-up" transitionDuration={250} radius="md">
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
                  onClick={() => {
                    setLanguage(value)
                    localStorage.setItem('lang', value)
                  }}
                >
                  <Text>{label}</Text>
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>

          <nav className="relative block lg:hidden">
            <ActionIcon
              variant="filled"
              color="blue"
              onClick={() => setMenuOpen(prev => !prev)}
            >
              <MenuIcon size="large" color="#fff" />
            </ActionIcon>

            <Drawer
              opened={menuOpen}
              onClose={() => setMenuOpen(false)}
              position="top"
              overlayColor="#fafafa"
              overlayOpacity={0.5}
              overlayBlur={3}
              transition="skew-up"
              transitionDuration={250}
              withCloseButton={false}
              title={<Text variant="h2">Menu</Text>}
              padding="xl"
            >
              {['blog', 'about', 'experience', 'tools'].map(link => (
                <ButtonLink
                  href={`/${link}`}
                  key={link}
                  variant={router.pathname === `/${link}` ? 'light' : 'subtle'}
                  size="xl"
                  fullWidth
                  classNames={{ label: 'text-left' }}
                  // @ts-ignore
                  onClick={() => {
                    setMenuOpen(false)
                    reroute(`/${link}`)
                  }}
                >
                  {t(`navigation.${link}`)}
                </ButtonLink>
              ))}
            </Drawer>
          </nav>
        </div>
      </Container>
    </header>
  )
}
