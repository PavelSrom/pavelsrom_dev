import { Container, Text } from 'ui'

export interface IconItem {
  icon: JSX.Element
  title: string
  text: string
}

interface FeatureGridProps {
  title: string
  items: IconItem[]
}

export const FeatureGrid = ({ title, items }: FeatureGridProps) => (
  <section className="flex flex-col">
    <Container>
      <Text variant="h1" className="mb-8">
        {title}
      </Text>
      <div className="grid grid-cols-12 gap-y-8 lg:gap-x-8">
        {items.map(({ icon, title, text }) => (
          <div className="col-span-12 lg:col-span-6 bg-lightblue p-8 rounded-3xl">
            {icon}
            <Text variant="h2" className="mt-2">
              {title}
            </Text>
            <Text className="mt-4">{text}</Text>
          </div>
        ))}
      </div>
    </Container>
  </section>
)
