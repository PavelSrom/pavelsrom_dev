export interface WhitespaceDividerProps {
  tight?: boolean
}

const classnames = {
  standard: 'h-32 md:h-48',
  tight: 'h-16 md:h-24',
} as const

export const WhitespaceDivider = ({ tight }: WhitespaceDividerProps) => (
  <div className={classnames[tight ? 'tight' : 'standard']} />
)
