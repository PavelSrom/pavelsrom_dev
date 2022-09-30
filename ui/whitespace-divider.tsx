export interface WhitespaceDividerProps {
  tight?: boolean
}

const classnames = {
  standard: 'h-56',
  tight: 'h-28',
} as const

export const WhitespaceDivider = ({ tight }: WhitespaceDividerProps) => (
  <div className={classnames[tight ? 'tight' : 'standard']} />
)
