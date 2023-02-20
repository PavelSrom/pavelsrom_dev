import { useEffect, useRef, useState } from 'react'
import { Text } from 'ui'

interface BlogImageProps {
  src: string
  alt: string
}

export const BlogImage = ({ src, alt }: BlogImageProps) => {
  const [textWidth, setTextWidth] = useState<number>(0)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (imageRef.current) {
      setTextWidth(imageRef.current.width)
    }
  }, [imageRef.current?.width])

  return (
    <>
      <img
        src={src}
        alt={alt}
        ref={imageRef}
        className="w-auto h-auto max-w-full max-h-blog-image rounded-xl block mx-auto"
      />
      <div style={{ maxWidth: textWidth }} className="text-left mx-auto">
        <Text variant="caption" className="mt-2">
          {alt}
        </Text>
      </div>
    </>
  )
}
