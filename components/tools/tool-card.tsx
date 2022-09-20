import { Text } from 'ui'

export interface ToolCardProps {
  name: string
  caption?: string
  description?: string
}

export const ToolCard = ({ name, caption, description }: ToolCardProps) => (
  <div className="bg-lightblue rounded-3xl p-8 space-y-4">
    <div className="flex justify-between items-start">
      <div className="w-12 h-12 bg-red-500" />
      {caption && <Text variant="caption">{caption}</Text>}
    </div>
    <Text variant="sub">{name}</Text>
    <Text>{description}</Text>
  </div>
)
