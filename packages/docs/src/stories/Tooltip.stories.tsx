import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps, Box } from '@ignite-ui-lbl/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a tooltip.',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$20',
            background: '$gray500',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  tags: ['autodocs'],
} as Meta<TooltipProps>

export const Primary: StoryObj = {}
