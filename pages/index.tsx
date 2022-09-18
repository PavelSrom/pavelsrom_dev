import type { NextPage } from 'next'
import { Button } from '@mantine/core'

const Home: NextPage = () => {
  return (
    <>
      <p className="text-red-500 mt-8">Hello world</p>
      <Button size="xl" className="ml-4">
        hello
      </Button>
    </>
  )
}

export default Home
