import Link from 'next/link'
import Image from 'next/image'

const TWITTER_IMG =
  'https://pbs.twimg.com/profile_images/917681456884809728/4Riby-G2_400x400.jpg'

const Home = () => {
  return (
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

      <h2>My favourite music genres:</h2>
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
  )
}

export default Home
