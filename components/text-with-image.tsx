import clsx from 'clsx'
import { motion } from 'framer-motion'
import {
  slideHorizontalVariants,
  slideUpVariants,
} from 'lib/animation-variants'
import { Container, Text } from 'ui'

interface TextWithImage {
  image: string
  imageAlt: string
  title: string
  text: string
  cta?: React.ReactNode
  caption?: string
  textPosition?: 'left' | 'right'
  id?: string
}

export const TextWithImage = ({
  image,
  imageAlt,
  title,
  text,
  cta,
  caption,
  textPosition = 'right',
  id,
}: TextWithImage) => {
  const textHalf = (
    <motion.div
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.7 }}
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      className={clsx(
        'col-span-12 lg:col-span-6 order-2 flex flex-col items-start lg:justify-center',
        {
          'lg:order-1': textPosition === 'left',
          'lg:order-2': textPosition === 'right',
        }
      )}
    >
      <Text variant="h1" className="mt-12 lg:mt-0">
        {title}
      </Text>
      <Text variant="sub" className="mt-8">
        {text}
      </Text>
      {cta && cta}
    </motion.div>
  )

  const imageHalf = (
    <motion.div
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.7 }}
      variants={slideHorizontalVariants(textPosition)}
      initial="hidden"
      whileInView="visible"
      className={clsx('col-span-12 lg:col-span-6 order-1', {
        'lg:order-2': textPosition === 'left',
        'lg:order-1': textPosition === 'right',
      })}
    >
      <motion.img
        src={`/assets/${image}`}
        alt={imageAlt}
        className="max-w-2xl w-full h-auto rounded-3xl"
      />
      {caption && (
        <Text variant="caption" className="mt-2">
          {caption}
        </Text>
      )}
    </motion.div>
  )

  return (
    <section className="flex flex-col" id={id}>
      <Container className="flex items-center h-full">
        <div className="grid grid-cols-12 lg:gap-16 2xl:gap-24">
          {textHalf}
          {imageHalf}
        </div>
      </Container>
    </section>
  )
}
