import clsx from 'clsx'

type TextVariant = 'h1' | 'h2' | 'body' | 'caption' | 'leading'

const elements: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  body: 'p',
  caption: 'p',
  leading: 'h1',
}

const classnames: Record<TextVariant, string> = {
  h1: 'text-4xl lg:text-5xl font-bold',
  h2: 'text-2xl lg:text-3xl font-bold',
  body: 'text-lg lg:text-xl font-light',
  caption: 'text-sm lg:text-base font-light',
  leading: 'text-3xl lg:text-6xl font-bold',
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
        [className]: !!className,
      })}
    >
      {children}
    </Element>
  )
}
