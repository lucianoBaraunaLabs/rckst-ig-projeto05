import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipArrow } from './styles'
import { ComponentProps, ReactNode } from 'react'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {
  content: string | ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  // return <p>Toooltip - Hello World</p>
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent sideOffset={5}>
            <TooltipArrow />
            {content}
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
