import Image from 'next/image'
import type { ImageSource } from '@/lib/media'

type Props = {
  image: ImageSource | null
  /** Responsive sizes hint so the browser downloads the right width. */
  sizes: string
  priority?: boolean
  className?: string
  /** Decorative images get an empty alt regardless of the CMS value. */
  decorative?: boolean
}

/**
 * next/image in fill mode: the parent (figure / frame) sets the aspect ratio and the image
 * covers it. Gives AVIF/WebP, responsive srcset and lazy loading without layout shift.
 */
export function CmsImage({ image, sizes, priority = false, className, decorative = false }: Props) {
  if (!image) return null
  return (
    <Image
      src={image.src}
      alt={decorative ? '' : image.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      style={{ objectFit: 'cover' }}
    />
  )
}
