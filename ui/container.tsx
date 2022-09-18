export interface ContainerProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => (
  <div className="max-w-full h-full mx-3 sm:mx-screen-adaptive flex flex-col flex-1">
    <div
      className={`flex-1 w-full h-full max-w-container mx-auto px-3 lg:px-8 xl:px-16 ${className}`}
    >
      {children}
    </div>
  </div>
)
