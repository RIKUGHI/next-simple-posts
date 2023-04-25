import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'

const page = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Input name="Email" />
      <Input name="Password" />
      <Button name="Daftar" />
    </div>
  )
}

export default page
