import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Container, Text } from 'ui'

const textVariants = {
  hidden: {
    opacity: 0,
    y: 64,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const imageVariants = (textPosition: 'left' | 'right') => ({
  hidden: {
    opacity: 0,
    x: textPosition === 'left' ? 64 : -64,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
})

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
      variants={textVariants}
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
      variants={imageVariants(textPosition)}
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
