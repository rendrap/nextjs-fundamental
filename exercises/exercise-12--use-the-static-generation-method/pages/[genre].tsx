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

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const genre = context.params?.['genre'] as string

  console.log('Fetching data in getStaticProps')

  if (!genre) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      genre
    },
    revalidate: 20
  }
}

export default Genre
