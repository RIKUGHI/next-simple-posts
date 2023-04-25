import React from 'react'

const SimplePost = () => {
  return (
    <div className="border border-black rounded-lg p-2 flex flex-col">
      <h2 className="font-bold text-lg">Title</h2>
      <p>Content</p>
      <span className="text-sm text-gray-500">Bambang</span>
      <div className="mt-2 flex justify-end space-x-2">
        <button className="text-sm text-blue-600">Edit</button>
        <button className="text-sm text-red-600">Hapus</button>
      </div>
    </div>
  )
}

export default SimplePost
