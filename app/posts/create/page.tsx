import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'

const page = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Input name="Title" />
      <Input name="Content" />
      <Button name="Submit" />
    </div>
  )
}

export default page
