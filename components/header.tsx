import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import { Container } from 'ui/container'

export const Header = () => {
  const { t, lang } = useTranslation('common')

  return (
    <header className="h-16 bg-teal-100">
      <Container className="flex justify-between items-center">
        <p>{t('hello')}</p>
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
