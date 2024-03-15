import { Container, Text } from 'ui'
import { GithubIcon, LinkedinIcon } from 'ui/icons'
import { useTranslation } from 'lib/translation'
import Link from 'next/link'

export const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <footer className="bg-gray-800 text-white">
      <Container className="py-8 md:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div className="space-x-4">
            <a
              href="https://github.com/PavelSrom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon color="#ffffff" size="medium" />
            </a>
            <a
              href="https://www.linkedin.com/in/pavel-srom-3011a8171/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon color="#ffffff" size="medium" />
            </a>
          </div>
          <div className="mt-8 sm:mt-0 sm:space-x-6 flex flex-col sm:flex-row items-start sm:items-center">
            {['blog', 'about', 'experience', 'tools'].map(link => (
              <Link href={`/${link}`} key={link}>
                <a className="text-white no-underline">
                  <Text key={link} className="text-white">
                    {t(`navigation.${link}`)}
                  </Text>
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Text variant="caption" className="text-white">
            Country flags provided by{' '}
            <span>
              <a
                href="https://www.flaticon.com/packs/countrys-flags"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary no-underline"
              >
                Flaticon.com
              </a>
            </span>
          </Text>
          <Text variant="caption" className="text-white mt-4">
            © Pavel Srom 2024
          </Text>
        </div>
      </Container>
    </footer>
  )
}
