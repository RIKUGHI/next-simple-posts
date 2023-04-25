import SimplePost from '@/components/atoms/SimplePost'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4">
      <SimplePost />
    </main>
  )
}
