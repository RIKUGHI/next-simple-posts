import { Post, User } from '@prisma/client'
import React from 'react'

interface Props {
  post: Post & {
    author: User
  }
  onEdit?: () => void
  onDelete?: () => void
}

const SimplePost = ({ post, onEdit, onDelete }: Props) => {
  return (
    <div className="border border-black rounded-lg p-2 flex flex-col">
      <h2 className="font-bold text-lg">{post.title}</h2>
      <p>{post.content}</p>
      <span className="text-sm text-gray-500">{post.author.name}</span>
      {onEdit && onDelete && (
        <div className="mt-2 flex justify-end space-x-2">
          {onEdit && (
            <button className="text-sm text-blue-600" onClick={onEdit}>
              Edit
            </button>
          )}
          {onDelete && (
            <button className="text-sm text-red-600" onClick={onDelete}>
              Hapus
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default SimplePost
