import { Container, Text } from 'ui'
import { useTranslation } from 'lib/translation'
import { Button, Textarea, TextInput } from '@mantine/core'

export const ContactForm = () => {
  const { t } = useTranslation('home')

  return (
    <Container noPadding>
      <section className="bg-lightblue rounded-3xl">
        <div className="px-3 sm:px-8 py-8 md:py-12 lg:px-8 xl:px-16 grid grid-cols-12 lg:gap-16">
          <div className="col-span-12 lg:col-span-6">
            <Text variant="h1">{t('contact.title')}</Text>
            <Text variant="sub" className="mt-8">
              {t('contact.text')}
            </Text>
          </div>
          <div className="col-span-12 lg:col-span-6 space-y-12 mt-16 lg:mt-0">
            <TextInput placeholder={t('contact.placeholders.email')} />
            <Textarea
              placeholder={t('contact.placeholders.message')}
              minRows={4}
            />
            <Button size="lg" fullWidth>
              {t('contact.cta')}
            </Button>
          </div>
        </div>
      </section>
    </Container>
  )
}
