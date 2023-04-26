import SimplePost from '@/components/atoms/SimplePost'
import { Post, User } from '@prisma/client'
import { Inter } from 'next/font/google'
import Link from 'next/link'

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
    <>
      <Link
        href="/create"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Create
      </Link>
      <main className="grid grid-cols-4 gap-4 mt-4">
        {posts.map((post, i) => (
          <Link href={`/${post.id}`}>
            <SimplePost key={i} post={post} />
          </Link>
        ))}
      </main>
    </>
  )
}
