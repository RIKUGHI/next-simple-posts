'use client'

import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { Post } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

const page = ({
  params,
}: {
  params: {
    id: string
  }
}) => {
  useEffect(() => {
    getPost(params.id)
  }, [])

  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const getPost = async (id: string) => {
    const res = await fetch(`/api/posts/${id}`, {
      next: {
        revalidate: 0,
      },
    })
    let json = await res.json()

    setTitle(json.post.title)
    setContent(json.post.content)
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await fetch('/api/posts', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, id: params.id }),
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e))

    router.push('/')
  }

  return (
    <div className="flex flex-col items-center space-y-2">
      <span className="font-bold">Detail {params.id}</span>
      <form
        className="flex flex-col items-center space-y-2"
        onSubmit={onSubmit}
      >
        <Input name="Title" value={title} onChange={(v) => setTitle(v)} />
        <Input name="Content" value={content} onChange={(v) => setContent(v)} />
        <Button name="Update" />
      </form>
    </div>
  )
}

export default page
