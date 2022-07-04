import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h2>Hello</h2>
      <p>My name is Rendra</p>
      <img src="/lazar.png" alt="" />

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
