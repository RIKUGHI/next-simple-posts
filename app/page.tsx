import SimplePost from '@/components/atoms/SimplePost'
import { Post, User } from '@prisma/client'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const getPosts = async () => {
  const res = await fetch(process.env.BASE_URL + '/api/posts', {
    next: {
      revalidate: 0,
    },
  })
  const json = await res.json()
  return json.posts as (Post & {
    author: User
  })[]
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <main className="grid grid-cols-4 gap-4">
      {posts.map((post, i) => (
        <SimplePost key={i} post={post} />
      ))}
    </main>
  )
}
