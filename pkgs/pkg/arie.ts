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
    position: { x: null, y: null, angle: null },
    boundingRect: {
      left: null,
      top: null,
      width: null,
      height: null,
    },
    isHover: false,
  },
};

export const useAltArie = (
  touchEnabled = true,
  selectedElementId: string | null = null,
  selectedElementOffset = { x: 0, y: 0 }
): Cursor => {
  const [cursor, setCursor] = useState<Cursor>(initArie);
  let selectedEl: HTMLElement | null = null;

  const onCursorTouchEvent = (
    event: MouseEvent | WheelEvent | TouchEvent
  ): void => {
    const { clientX, clientY, screenX, screenY, pageX, pageY } = (
      'touches' in event ? event.touches[0] : event
    ) as MouseEvent | Touch;

    const scroll = { ...cursor.scroll };
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
      eventType: event.type as EventType,
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
    setCursor(prevState => ({
      ...prevState,
      selectedElement: { ...prevState.selectedElement, isHover: true },
    }));
  };

  const onSelectedElementLeave = (): void => {
    setCursor(prevState => ({
      ...prevState,
      selectedElement: { ...prevState.selectedElement, isHover: false },
    }));
  };

  useEffect(() => {
    let selectedEl: HTMLElement | null = null;

    if (selectedElementId) {
      selectedEl = document.getElementById(selectedElementId);

      if (!selectedEl) {
        console.error(`Element with id "${selectedElementId}" doesn't exist.`);
      } else {
        selectedEl.addEventListener('mouseenter', onSelectedElementEnter);
        selectedEl.addEventListener('mouseleave', onSelectedElementLeave);
      }
    }

    if (touchEnabled) {
      window.addEventListener('touchmove', onCursorTouchEvent);
      window.addEventListener('touchstart', onCursorTouchEvent);
      window.addEventListener('touchend', onLeave);
    }

    const eventListeners = [
      { eventType: 'mousemove', target: document },
      { eventType: 'mousedown', target: document },
      { eventType: 'mouseup', target: document },
      { eventType: 'wheel', target: document },
      { eventType: 'mouseleave', target: document },
      { eventType: 'touchmove', target: window },
      { eventType: 'touchstart', target: window },
      { eventType: 'touchend', target: window },
    ].map(({ eventType, target }) => {
      // target.addEventListener(eventType, onCursorTouchEvent);
      target.addEventListener(eventType, onCursorTouchEvent as EventListener);

      return { eventType, target };
    });

    return (): void => {
      eventListeners.forEach(({ eventType, target }) => {
        // target.removeEventListener(eventType, onCursorTouchEvent);

        target.addEventListener(
          eventType,
          onCursorTouchEvent as EventListener | EventListenerObject
        );
      });

      if (selectedEl) {
        selectedEl.removeEventListener('mouseenter', onSelectedElementEnter);
        selectedEl.removeEventListener('mouseleave', onSelectedElementLeave);
      }
    };
  }, []);

  return cursor;
};

/**
 *
 * @description
 * Renders a string of numbers displaying
 * CURSOR and SCROLL information/data.
 *
 * @author = Chandler Chappell <@chvndler>
 * @license = This package is provided "as is," without warranty of any kind, expressed or implied.
 * In no event shall the author be held liable for any damages arising in any way from the use of this package.
 *
 * https://github.com/chvndler
 * Copyright © 2022. CDC® All rights reserved.
 *
 * LICENSE MIT 2022
 *
 * Have fun.
 *
 **/

/**
 * @param {boolean} touchEnabled - Enables touch events.
 * @param {string} selectedElementId - The id of the element you want to track.
 * @param {object} selectedElementOffset - The offset of the element you want to track.
 *
 * @returns {object} - Returns an object with the following properties:
 *
 *
 */

/*
// Example Usage

import { useArie } from 'arie';

const useArie: (touchEnabled?: boolean, selectedElementId?: string | null, selectedElementOffset?: {
    x: number;
    y: number;
}) => Cursor

const App = () => {
  const cursor = useArie(true, 'elementId', { x: 0, y: 0 });

  return (
    <div>
      <p>clientX: {cursor.position.client.x}</p>
      <p>clientY: {cursor.position.client.y}</p>
      <p>screenX: {cursor.position.screen.x}</p>
      <p>screenY: {cursor.position.screen.y}</p>
      <p>pageX: {cursor.position.page.x}</p>
      <p>pageY: {cursor.position.page.y}</p>
      <p>eventType: {cursor.eventType}</p>
      <p>selectedElementPositionX: {cursor.selectedElement.position.x}</p>
      <p>selectedElementPositionY: {cursor.selectedElement.position.y}</p>
      <p>selectedElementPositionAngle: {cursor.selectedElement.position.angle}</p>
      <p>selectedElementBoundingRectLeft: {cursor.selectedElement.boundingRect.left}</p>
      <p>selectedElementBoundingRectTop: {cursor.selectedElement.boundingRect.top}</p>
      <p>selectedElementBoundingRectWidth: {cursor.selectedElement.boundingRect.width}</p>
      <p>selectedElementBoundingRectHeight: {cursor.selectedElement.boundingRect.height}</p>
      <p>selectedElementIsHover: {cursor.selectedElement.isHover ? 'true' : 'false'}</p>
      <p>scrollX: {cursor.scroll.x}</p>
      <p>scrollY: {cursor.scroll.y}</p>
    </div>
  );
};

*/
