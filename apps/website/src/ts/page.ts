
import type { AppProps } from 'next/app';
import type { NextComponentType, NextPageContext } from 'next';

export type GetLayoutFn<P = Record<string, unknown>> = (
  props: Omit<AppProps<P>, 'pageProps'> & { pageProps: P },
) => React.ReactNode;

export type Page<P = Record<string, unknown>> = NextComponentType<
  NextPageContext,
  Record<string, unknown>,
  P
> & {
  getLayout?: GetLayoutFn<P>;
};

export type PageVariant = 'Production' | 'Article' | 'Standard';
export interface PageProps {
  children: React.ReactNode;
  type?: PageVariant;
}
