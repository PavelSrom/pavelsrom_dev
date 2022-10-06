import { Badge, Card } from '@mantine/core'
import format from 'date-fns/format'
import readingTime from 'reading-time'
import { Text } from 'ui'

export const PostCard = ({ post, onNavigate }: any) => (
  <Card p="lg" radius="lg" withBorder className="h-full">
    <Card.Section className="cursor-pointer relative" onClick={onNavigate}>
      <div
        className="bg-center bg-cover h-64 w-full"
        style={{
          backgroundImage: `url(${post.meta.thumbnailUrl})`,
        }}
      />

      <div className="absolute bottom-2 left-2">
        {post.meta.tags.map((tag: any) => (
          <Badge key={tag} className="mt-2 mr-2">
            {tag.toUpperCase()}
          </Badge>
        ))}
      </div>
    </Card.Section>
    <Card.Section>
      <div className="flex justify-between items-center px-8 pt-4 py-2">
        <Text variant="caption">
          {format(new Date(post.meta.date), 'MMM d, yyyy')}
        </Text>
        <Text variant="caption">{readingTime(post.content).text}</Text>
      </div>
      <div className="bg-white px-8 pb-4">
        <Text variant="h2">{post.meta.title}</Text>
        <Text className="mt-2">{post.meta.description}</Text>
      </div>
    </Card.Section>
  </Card>
)
