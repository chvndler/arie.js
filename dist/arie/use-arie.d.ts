import type { Cursor } from '../types';
/**
 * ----------------------------------------------------------------------------------*
 * ------------------------------ EXPORT ----------------------------------------------*
 * ------------------------------------------------------------------------*
 **/
declare const useArie: (touchEnabled?: boolean, selectedElementId?: string | null, selectedElementOffset?: {
    x: number;
    y: number;
}) => Cursor;
export { useArie };
