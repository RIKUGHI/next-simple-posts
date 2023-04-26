'use client'
import { Post, User } from '@prisma/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { MouseEvent } from 'react'

interface Props {
  post: Post & {
    author: User
  }
  onEdit?: () => void
  onDelete?: () => void
}

const SimplePost = ({ post, onEdit, onDelete }: Props) => {
  const router = useRouter()

  const handleDelete = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    await fetch('/api/posts?id=' + post.id, {
      method: 'DELETE',
    })
    router.refresh()
  }

  return (
    <div className="border border-black rounded-lg p-2 flex flex-col">
      <Link href={`/${post.id}`}>
        <h2 className="font-bold text-lg">{post.title}</h2>
      </Link>
      <p>{post.content}</p>
      <span className="text-sm text-gray-500">{post.author.name}</span>
      <div className="mt-2 flex justify-end space-x-2">
        {onEdit && (
          <button className="text-sm text-blue-600" onClick={onEdit}>
            Edit
          </button>
        )}
        <button
          className="text-sm text-red-600 border border-black p-1"
          onClick={handleDelete}
        >
          Hapus
        </button>
      </div>
    </div>
  )
}

export default SimplePost
