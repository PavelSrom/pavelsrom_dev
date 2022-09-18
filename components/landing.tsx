import { Container } from 'ui'

interface LandingProps {
  illustration: string
  textContent: React.ReactNode
}

export const Landing = ({ illustration, textContent }: LandingProps) => (
  <main
    className="flex flex-col py-16"
    style={{ minHeight: 'calc(100vh - 64px)' }}
  >
    <Container className="flex items-center h-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16">
        <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 mt-8 lg:mt-0">
          {textContent}
        </div>
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <img
            src={`/assets/${illustration}.svg`}
            alt={illustration}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </Container>
  </main>
)
