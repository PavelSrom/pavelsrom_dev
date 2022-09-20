import React from 'react'
import { Text } from 'ui'

export interface ToolCardProps {
  name: string
  icons?: JSX.Element[]
  caption?: string
  description?: string
}

export const ToolCard = ({
  name,
  icons,
  caption,
  description,
}: ToolCardProps) => (
  <div className="bg-lightblue rounded-3xl p-8 space-y-4 h-full">
    <div className="flex justify-between items-start">
      <div className="flex space-x-2">
        {(icons ?? []).map((icon, index) => (
          <div key={index} className="flex items-center">
            {icon}
          </div>
        ))}
      </div>
      {caption && <Text variant="caption">{caption}</Text>}
    </div>
    <Text variant="sub">{name}</Text>
    {description && <Text>{description}</Text>}
  </div>
)
