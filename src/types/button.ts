export interface LinkProps {
  as: 'link'
  name: string
}

export interface ButtonProps {
  as?: 'button'
  onClick: () => void
}

export type DynamicButtonProps = LinkProps | ButtonProps
