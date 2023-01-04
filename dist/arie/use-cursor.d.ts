/// <reference types="react" />
/**
 *
 * @description
 * Render a string of text displaying
 * pointer coordinates and scroll data.
 *
 * @author: Chandler Chappell <@chvndler>
 * @license This package is provided "as is," without warranty of any kind, expressed or implied.
 * In no event shall the author be held liable for any damages arising in any way from the use of this package.
 *
 * https://github.com/chvndler
 * Copyright © 2022. CDC® All rights reserved.
 *
 **/
declare type CursorProps = {
    /**
     * The window object.
     */
    window?: Window;
    document?: Document;
    className?: string;
};
declare type component = JSX.Element;
declare const useArieCursor: ({ ...props }: CursorProps) => component;
export { useArieCursor };
