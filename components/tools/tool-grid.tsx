import { Container, Text } from 'ui'
import { ToolCard } from './tool-card'
import { useTranslation } from 'lib/translation'
import { removeInvalidLocale } from 'lib/utils'

interface ToolGridProps {
  section: string
  size: number
  icons?: JSX.Element[][]
}

export const ToolGrid = ({ section, size, icons }: ToolGridProps) => {
  const { t } = useTranslation('tools')

  return (
    <Container>
      <Text variant="h1" className="mb-8">
        {t(`${section}.name`)}
      </Text>
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
        {[...new Array(size).fill(size)].map((_item, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
            <ToolCard
              icons={icons?.[index] ?? undefined}
              name={t(`${section}.${index}.title`)}
              description={removeInvalidLocale(
                t(`${section}.${index}.description`)
              )}
              caption={removeInvalidLocale(t(`${section}.${index}.caption`))}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}
