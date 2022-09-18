export interface WhitespaceDividerProps {
  tight?: boolean
}

const classnames = {
  standard: 'h-64',
  tight: 'h-32',
} as const

export const WhitespaceDivider = ({ tight }: WhitespaceDividerProps) => (
  <div className={classnames[tight ? 'tight' : 'standard']} />
)
