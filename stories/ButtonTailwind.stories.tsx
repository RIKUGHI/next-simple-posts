import Button from '../components/atoms/Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

interface Props {
  name: string
  loading: boolean
  onClick?: () => void
}
const Template = (args: Props) => <Button {...args} />

export const Medrep: Story = {
  args: {
    name: 'Mengsapi',
  },
}
