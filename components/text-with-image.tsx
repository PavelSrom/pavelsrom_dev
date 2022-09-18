import clsx from 'clsx'
import { Container, Text } from 'ui'

interface TextWithImage {
  image: string
  imageAlt: string
  title: string
  text: string
  cta?: React.ReactNode
  caption?: string
  textPosition?: 'left' | 'right'
}

export const TextWithImage = ({
  image,
  imageAlt,
  title,
  text,
  cta,
  caption,
  textPosition = 'right',
}: TextWithImage) => {
  const textHalf = (
    <div
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
    </div>
  )

  const imageHalf = (
    <div
      className={clsx('col-span-12 lg:col-span-6 order-1', {
        'lg:order-2': textPosition === 'left',
        'lg:order-1': textPosition === 'right',
      })}
    >
      <img
        src={`/assets/${image}`}
        alt={imageAlt}
        className="max-w-2xl w-full h-auto rounded-3xl"
      />
      {caption && (
        <Text variant="caption" className="mt-2">
          {caption}
        </Text>
      )}
    </div>
  )

  return (
    <section className="flex flex-col">
      <Container className="flex items-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          {textHalf}
          {imageHalf}
        </div>
      </Container>
    </section>
  )
}
