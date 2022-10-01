import Head from 'next/head'
import { useTranslation } from 'lib/translation'

interface SeoProps {
  page: 'home' | 'blog' | 'about' | 'experience' | 'tools'
}

export const Seo = ({ page }: SeoProps) => {
  const { t } = useTranslation('common')

  return (
    <Head>
      <title>{t(`navigation.${page}`)} | Pavel Srom</title>
      <meta name="description" content={t(`seo.${page}`)} />
      <meta name="keywords" content={t(`seo.keywords`)} />
      <meta property="og:url" content="https://pavelsrom.dev" />
      <meta property="og:title" content={t(`navigation.${page}`)} />
      <meta property="og:description" content={t(`seo.${page}`)} />
    </Head>
  )
}
