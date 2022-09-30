import clsx from 'clsx'

type TextVariant = 'h1' | 'h2' | 'sub' | 'body' | 'caption' | 'leading'

const elements: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  sub: 'p',
  body: 'p',
  caption: 'p',
  leading: 'h1',
}

const classnames: Record<TextVariant, string> = {
  h1: 'text-4xl lg:text-5xl font-bold font-noto',
  h2: 'text-2xl lg:text-3xl font-normal font-noto',
  sub: 'text-2xl lg:text-3xl font-light md:leading-normal font-noto',
  body: 'text-lg lg:text-xl font-light md:leading-normal font-noto',
  caption: 'text-sm lg:text-base font-light md:leading-normal font-noto',
  leading: 'text-4xl md:text-5xl xl:text-6xl font-bold font-noto',
}

const textColors: Record<TextVariant, string> = {
  h1: 'text-gray9',
  h2: 'text-gray9',
  sub: 'text-dark3',
  body: 'text-dark3',
  caption: 'text-dark3',
  leading: 'text-gray9',
}

export interface TextProps {
  children: React.ReactNode | React.ReactNode[]
  variant?: TextVariant
  className?: string
}

export const Text = ({
  children,
  variant = 'body',
  className = '',
}: TextProps) => {
  const Element = elements[variant]

  return (
    <Element
      className={clsx(classnames[variant], {
        [textColors[variant]]: !className.includes('text-'),
        [className!]: !!className,
      })}
    >
      {children}
    </Element>
  )
}
