import { Button, ButtonProps } from '@mantine/core'
import Link from 'next/link'

export interface ButtonLinkProps extends ButtonProps {
  href: `${'/' | '#'}${string}`
}

export const ButtonLink = ({ href, ...buttonProps }: ButtonLinkProps) => (
  <Link href={href} passHref>
    <Button component="a" {...buttonProps} />
  </Link>
)
