import * as ToastPrimitive from '@radix-ui/react-toast'

import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewPort,
} from './styles'
import { ComponentProps } from 'react'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewPort />
    </ToastPrimitive.Provider>
  )
}
