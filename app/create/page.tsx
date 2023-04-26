'use client'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const page = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tag, setTag] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, tag }),
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e))

    router.push('/')
  }

  return (
    <form className="flex flex-col items-center space-y-2" onSubmit={onSubmit}>
      <Input name="Title" onChange={(v) => setTitle(v)} />
      <Input name="Content" onChange={(v) => setContent(v)} />
      <Input name="Tags" onChange={(v) => setTag(v)} />

      <Button name="Submit" />
    </form>
  )
}

export default page
