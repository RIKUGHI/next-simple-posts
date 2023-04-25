import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'

const page = ({
  params,
}: {
  params: {
    id: string
  }
}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <span className="font-bold">Detail Update {params.id}</span>
      <Input name="Title" />
      <Input name="Content" />
      <Button name="Submit" />
    </div>
  )
}

export default page
