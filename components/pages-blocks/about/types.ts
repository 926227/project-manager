import { ElementType } from 'react'

export type CardProps = {
  component: ElementType
  reverse?: boolean
  src: string
  text: string
}

export enum Order {
  first = 1,
  last = 2,
}
