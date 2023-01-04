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
interface scrollProps {
    /**
     * The window object.
     */
    window: Window;
    /**
     * The document object.
     */
    document: Document;
    /**
     * className for custom styling..
     */
    className?: string;
}
declare type component = JSX.Element;
declare const useArieScroll: ({ ...props }: scrollProps) => component;
export { useArieScroll };
