import { Accordion } from '@mantine/core'
import { useTranslation } from 'lib/translation'
import { Container, Text } from 'ui'

export const Story = () => {
  const { t } = useTranslation('about')

  return (
    <section className="flex flex-col">
      <Container>
        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-16 2xl:gap-x-24">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
            <Accordion variant="contained" radius={8}>
              {[...new Array(4).fill(4)].map((_, index) => (
                <Accordion.Item value={index.toString()}>
                  <Accordion.Control>
                    <Text variant="sub">{t(`story.${index}.title`)}</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    {[...new Array(2).fill(2)].map((_, i) => (
                      <Text key={i} className="mb-4">
                        {t(`story.${index}.paragraphs.${i}`)}
                      </Text>
                    ))}
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
            <Text variant="h1">{t('story.title')}</Text>
            <Text variant="sub" className="mt-8">
              {t('story.text')}
            </Text>
          </div>
        </div>
      </Container>
    </section>
  )
}
