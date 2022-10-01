import { motion } from 'framer-motion'
import { popVariants } from 'lib/animation-variants'
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
          <motion.div
            key={title}
            className="col-span-12 lg:col-span-6 bg-lightblue p-8 rounded-3xl"
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.3 }}
            variants={popVariants}
            initial="hidden"
            whileInView="visible"
          >
            {icon}
            <Text variant="h2" className="mt-2">
              {title}
            </Text>
            <Text className="mt-4">{text}</Text>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
)
