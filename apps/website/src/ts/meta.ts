/** @format */

export type BasicMeta = {
  title?: string
  description?: string
  cannonical?: string
  ogImage?: string
  noIndex?: boolean
  noFollow?: boolean
  themeColor?: string
  preload?: {href: string; as: string; type: string; crossOrigin?: string}[]
  prefetch?: {href: string; as: string; type: string; crossOrigin?: string}[]
}
