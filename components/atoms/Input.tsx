interface Props {
  name: string
}

const Input = ({ name }: Props) => {
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
      />
    </div>
  )
}

export default Input
