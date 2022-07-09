import type { GetStaticProps, GetStaticPaths } from 'next'

type Props = {
  genre: string
}

const Genre = ({ genre }: Props) => {
  return <p>{genre}</p>
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: ['rock', 'country', 'pop'].map((genre) => ({ params: { genre } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      genre: 'rock'
    }
  }
}

export default Genre
