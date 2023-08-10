import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@ignite-ui-lbl/react'
import { useEffect, useRef, useState } from 'react'

function DemoToast(props: ToastProps) {
  const [isOpen, setOpen] = useState(false)
  const timeRef = useRef(0)

  function handleShowToast() {
    setOpen(false)
    window.clearTimeout(timeRef.current)
    timeRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  }, [])

  return (
    <div>
      <Button onClick={handleShowToast}>Agendar</Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Data display/Toast',
  component: Toast,
  tags: ['autodocs'],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Hello World',
    description: 'Lorem ipsum lorem...',
  },
}

export const Action: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  render: (args) => <DemoToast {...args} />,
}
