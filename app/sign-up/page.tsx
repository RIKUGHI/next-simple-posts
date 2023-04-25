'use client'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const page = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
    router.push('/my-posts')
  }

  return (
    <div className="">
      <form
        className="flex flex-col items-center space-y-2"
        onSubmit={onSubmit}
      >
        <Input name="Name" onChange={(v) => setName(v)} />
        <Input name="Email" onChange={(v) => setEmail(v)} />
        <Input name="Password" onChange={(v) => setPassword(v)} />
        <Button name="Submit" />
      </form>
    </div>
  )
}

export default page
