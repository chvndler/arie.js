import { isClient } from './const';

export const isApiSupported = (api: string) => isClient && api in window;
export const formatError = (
  error: unknown,
): { message: string; name?: string } => {
  try {
    if (error instanceof Error) {
      return { message: error.message, name: error.name };
    }
    return { message: String(error) };
  } catch (error) {
    return { message: 'An unknown error ocurred.' };
  }
};
