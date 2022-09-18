export interface ContainerProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => (
  <div className="max-w-full h-full mx-3 sm:mx-screen-adaptive">
    <div
      className={`w-full h-full max-w-container mx-auto px-3 md:px-8 lg:px-16 ${className}`}
    >
      {children}
    </div>
  </div>
)
