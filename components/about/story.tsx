import { Accordion } from '@mantine/core'
import { Container, Text } from 'ui'

export const Story = () => {
  return (
    <section className="flex flex-col">
      <Container>
        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-16 2xl:gap-x-24">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
            <Accordion variant="contained" radius={8}>
              <Accordion.Item value="0">
                <Accordion.Control>
                  <Text variant="sub">Before high school</Text>
                </Accordion.Control>
                <Accordion.Panel>collapsed content</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="1">
                <Accordion.Control>
                  <Text variant="sub">High school</Text>
                </Accordion.Control>
                <Accordion.Panel>collapsed content</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="2">
                <Accordion.Control>
                  <Text variant="sub">Denmark</Text>
                </Accordion.Control>
                <Accordion.Panel>collapsed content</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="3">
                <Accordion.Control>
                  <Text variant="sub">Moving forward</Text>
                </Accordion.Control>
                <Accordion.Panel>collapsed content</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
            <Text variant="h1">So you want to know everything?</Text>
            <Text variant="sub" className="mt-8">
              Okay, then. May your wish come true!
            </Text>
          </div>
        </div>
      </Container>
    </section>
  )
}
