export declare type Cursor = {
    position: {
        client: {
            x: number | null;
            y: number | null;
        };
        screen: {
            x: number | null;
            y: number | null;
        };
        page: {
            x: number | null;
            y: number | null;
        };
    };
    scroll: {
        wheelDown: boolean | null;
        wheelUp: boolean | null;
    };
    eventType: string | null;
    selectedElement: SelectedElement;
};
declare type SelectedElement = {
    position: {
        angle: number | null;
        x: number | null;
        y: number | null;
    };
    boundingRect: {
        left: number | null;
        top: number | null;
        width: number | null;
        height: number | null;
    };
    isHover: boolean;
};
export declare type EventType = 'mousemove' | 'mousedown' | 'mouseup' | 'touchmove' | 'touchstart' | 'wheel';
export {};
