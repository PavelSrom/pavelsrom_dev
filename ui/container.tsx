import clsx from 'clsx'

export interface ContainerProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  noPadding?: boolean
}

export const Container = ({
  children,
  className,
  noPadding,
}: ContainerProps) => (
  <div className="max-w-full h-full mx-3 sm:mx-screen-adaptive flex flex-col flex-1">
    <div
      className={clsx('flex-1 w-full h-full max-w-container mx-auto', {
        [className!]: !!className,
        'px-3 lg:px-8 xl:px-16': !noPadding,
      })}
    >
      {children}
    </div>
  </div>
)
