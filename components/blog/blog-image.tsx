import { Text } from 'ui'

interface BlogImageProps {
  src: string
  alt: string
}

export const BlogImage = ({ src, alt }: BlogImageProps) => (
  <>
    <img
      src={src}
      alt={alt}
      className="w-auto h-auto max-w-full max-h-blog-image rounded-xl block mx-auto"
    />
    <Text variant="caption" className="mt-2">
      {alt}
    </Text>
  </>
)
