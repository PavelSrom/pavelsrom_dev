import { Container } from 'ui/container'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation, setLanguage } from 'lib/translation'

export const Header = () => {
  const router = useRouter()
  const { t, lang } = useTranslation('common')

  return (
    <header className="h-16 bg-teal-100">
      <Container className="flex justify-between items-center">
        <p onClick={() => router.push('/')}>{t('hello')}</p>
        <nav className="space-x-6">
          {['blog', 'about', 'experience', 'tools'].map(link => (
            <Link href={`/${link}`} key={link}>
              <a>{t(`navigation.${link}`)}</a>
            </Link>
          ))}
        </nav>
        <button
          onClick={() =>
            setLanguage(lang === 'en' ? 'da' : lang === 'da' ? 'cs' : 'en')
          }
        >
          change language
        </button>
      </Container>
    </header>
  )
}
