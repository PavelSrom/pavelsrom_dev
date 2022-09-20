import { Container, Text } from 'ui'
import { ToolCard } from './tool-card'
import { useTranslation } from 'lib/translation'

interface ToolGridProps {
  section: string
  size: number
}

export const ToolGrid = ({ section, size }: ToolGridProps) => {
  const { t } = useTranslation('tools')

  return (
    <Container>
      <Text variant="h1" className="mb-8">
        {t(`${section}.name`)}
      </Text>
      <div className="grid grid-cols-12 gap-8">
        {[...new Array(size).fill(size)].map((_item, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
            <ToolCard
              name={t(`${section}.${index}.title`)}
              description={t(`${section}.${index}.description`)}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}