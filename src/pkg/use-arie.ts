import { useState, useEffect } from 'react';
import type { Cursor, EventType } from '../types';

const initArie: Cursor = {
  position: {
    client: { x: null, y: null },
    screen: { x: null, y: null },
    page: { x: null, y: null },
  },
  scroll: {
    wheelDown: null,
    wheelUp: null,
  },
  eventType: null,
  selectedElement: {
    position: {
      x: null,
      y: null,
      angle: null,
    },
    boundingRect: {
      left: null,
      top: null,
      width: null,
      height: null,
    },
    isHover: false,
  },
};

export const useArie = (
  touchEnabled: boolean = true,
  selectedElementId: string | null = null,
  selectedElementOffset: { x: number; y: number } = { x: 0, y: 0 }
): Cursor => {
  const [cursor, setCursor] = useState<Cursor>(initArie);
  let selectedEl: HTMLElement | null = null;

  const onCursorTouchEvent = (event: Event): void => {
    let clientX: number;
    let clientY: number;
    let screenX: number;
    let screenY: number;
    let pageX: number;
    let pageY: number;
    const scroll = { ...cursor.scroll };

    switch (event.type as EventType) {
      case 'mousemove':
      case 'mousedown':
      case 'mouseup':
      case 'wheel':
        const cursorEvent = event as MouseEvent;

        clientX = cursorEvent.clientX;
        clientY = cursorEvent.clientY;
        screenX = cursorEvent.screenX;
        screenY = cursorEvent.screenY;
        pageX = cursorEvent.pageX;
        pageY = cursorEvent.pageY;
        scroll.wheelDown = (event as WheelEvent).deltaY > 0;
        scroll.wheelUp = (event as WheelEvent).deltaY < 0;

        break;
      case 'touchmove':
      case 'touchstart':
        const { touches } = event as TouchEvent;
        const touchEvent = touches[0];

        clientX = touchEvent.clientX;
        clientY = touchEvent.clientY;
        screenX = touchEvent.screenX;
        screenY = touchEvent.screenY;
        pageX = touchEvent.pageX;
        pageY = touchEvent.pageY;

        break;
      default:
        throw new Error(`Unknown event triggered "${event.type}"`);
    }

    const selectedElPosition = { ...cursor.selectedElement.position };
    const selectedElBoundingRect = { ...cursor.selectedElement.boundingRect };
    if (selectedEl) {
      const { left, top, width, height } = selectedEl.getBoundingClientRect();
      selectedElPosition.x = clientX - left - selectedElementOffset.x;
      selectedElPosition.y = clientY - top - selectedElementOffset.y;
      const rad2Deg = 180 / Math.PI;
      const angleOffset = 180;
      selectedElPosition.angle =
        Math.atan2(selectedElPosition.y, -selectedElPosition.x) * rad2Deg +
        angleOffset;
      selectedElBoundingRect.left = left;
      selectedElBoundingRect.top = top;
      selectedElBoundingRect.width = width;
      selectedElBoundingRect.height = height;
    }

    setCursor(prevState => ({
      ...prevState,
      position: {
        client: { x: clientX, y: clientY },
        screen: { x: screenX, y: screenY },
        page: { x: pageX, y: pageY },
      },
      scroll,
      eventType: event.type,
      selectedElement: {
        ...prevState.selectedElement,
        position: selectedElPosition,
        boundingRect: selectedElBoundingRect,
      },
    }));
  };

  const onLeave = (): void => {
    setCursor(initArie);
  };

  const onSelectedElementEnter = (): void => {
    const selectedElement = { ...cursor.selectedElement };
    selectedElement.isHover = true;
    setCursor(prevState => ({
      ...prevState,
      selectedElement,
    }));
  };

  const onSelectedElementLeave = (): void => {
    const selectedElement = { ...cursor.selectedElement };
    selectedElement.isHover = false;
    setCursor(prevState => ({
      ...prevState,
      selectedElement,
    }));
  };

  useEffect(() => {
    if (selectedElementId) {
      selectedEl = document.getElementById(selectedElementId);
      if (!selectedEl) {
        throw new Error(
          `Element with id="${selectedElementId}" doesn't exists`
        );
      }
      selectedEl.addEventListener('mouseenter', onSelectedElementEnter);
      selectedEl.addEventListener('mouseleave', onSelectedElementLeave);
    }
    document.addEventListener('mousemove', onCursorTouchEvent);
    document.addEventListener('mousedown', onCursorTouchEvent);
    document.addEventListener('mouseup', onCursorTouchEvent);
    document.addEventListener('wheel', onCursorTouchEvent);
    document.addEventListener('mouseleave', onLeave);
    if (touchEnabled) {
      window.addEventListener('touchmove', onCursorTouchEvent);
      window.addEventListener('touchstart', onCursorTouchEvent);
      window.addEventListener('touchend', onLeave);
    }

    return (): void => {
      document.removeEventListener('mousemove', onCursorTouchEvent);
      document.removeEventListener('mousedown', onCursorTouchEvent);
      document.removeEventListener('mouseup', onCursorTouchEvent);
      document.removeEventListener('wheel', onCursorTouchEvent);
      document.removeEventListener('mouseleave', onLeave);
      if (touchEnabled) {
        window.removeEventListener('touchmove', onCursorTouchEvent);
        window.removeEventListener('touchstart', onCursorTouchEvent);
        window.removeEventListener('touchend', onLeave);
      }
    };
  }, []);

  return cursor;
};
