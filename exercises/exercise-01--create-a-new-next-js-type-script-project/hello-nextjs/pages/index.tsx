import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import Button from '../src/components/button/button'

const TWITTER_IMG =
  'https://pbs.twimg.com/profile_images/917681456884809728/4Riby-G2_400x400.jpg'

const Home = () => {
  return (
    <ChakraProvider>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h2>Hello</h2>
        <p>My name is Rendra</p>
        <Image src="/lazar.png" alt="lazar" width={200} height={200} />
        <Image
          src={TWITTER_IMG}
          alt="twitter img"
          width={250}
          height={250}
        ></Image>

        <Heading w="full" textAlign="center">
          This is the Homepage Content!
        </Heading>
        <ul>
          <li>
            <Link href="/rock">Rock</Link>
          </li>
          <li>
            <Link href="/country">Country</Link>
          </li>
          <li>
            <Link href="/pop">Pop</Link>
          </li>
        </ul>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '24px',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h3>My App</h3>
        <Button />
      </div>
    </ChakraProvider>
  )
}

export default Home
