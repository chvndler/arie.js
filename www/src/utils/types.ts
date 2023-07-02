import type {AppProps} from 'next/app'
import type {NextComponentType, NextPageContext} from 'next'

import type * as React from 'react'

export type GetLayoutFn<P = Record<string, unknown>> = (
  props: Omit<AppProps<P>, 'pageProps'> & {pageProps: P}
) => React.ReactNode

export type Page<P = Record<string, unknown>> = NextComponentType<NextPageContext, Record<string, unknown>, P> & {
  getLayout?: GetLayoutFn<P>
}

export type PageVariant = 'Production' | 'Article' | 'Standard'
export interface PageProps {
  children: React.ReactNode
  type?: PageVariant
}

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



export interface SVGLogoProps extends React.SVGAttributes<SVGElement> {
  children?: never
  color?: string
  width?: string
  height?: string
}
