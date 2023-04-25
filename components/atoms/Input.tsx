import { ChangeEvent } from 'react'

interface Props {
  name: string
  onChange?: (value: string) => void
}

const Input = ({ name, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <div className="w-56">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {name}
      </label>
      <input
        type="text"
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={handleChange}
      />
    </div>
  )
}

export default Input
