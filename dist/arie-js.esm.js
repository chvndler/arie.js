import { useState, useEffect, createElement } from 'react';
import styled from 'styled-components';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

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
 * ----------------------------------------------------------------------------------*
 * ------------------------------ initArie_CURSOR ----------------------------------------------*
 * ------------------------------------------------------------------------*
 **/
var initArie = {
  position: {
    client: {
      x: null,
      y: null
    },
    screen: {
      x: null,
      y: null
    },
    page: {
      x: null,
      y: null
    }
  },
  scroll: {
    wheelDown: null,
    wheelUp: null
  },
  eventType: null,
  selectedElement: {
    position: {
      x: null,
      y: null,
      angle: null
    },
    boundingRect: {
      left: null,
      top: null,
      width: null,
      height: null
    },
    isHover: false
  }
};
var useArieCursor = function useArieCursor(touchEnabled, selectedElementId, selectedElementOffset) {
  if (touchEnabled === void 0) {
    touchEnabled = true;
  }
  if (selectedElementId === void 0) {
    selectedElementId = null;
  }
  if (selectedElementOffset === void 0) {
    selectedElementOffset = {
      x: 0,
      y: 0
    };
  }
  var _useState = useState(initArie),
    cursor = _useState[0],
    setCursor = _useState[1];
  var selectedEl = null;
  var onCursorTouchEvent = function onCursorTouchEvent(event) {
    var clientX;
    var clientY;
    var screenX;
    var screenY;
    var pageX;
    var pageY;
    var scroll = _extends({}, cursor.scroll);
    switch (event.type) {
      case 'mousemove':
      case 'mousedown':
      case 'mouseup':
      case 'wheel':
        var cursorEvent = event;
        clientX = cursorEvent.clientX;
        clientY = cursorEvent.clientY;
        screenX = cursorEvent.screenX;
        screenY = cursorEvent.screenY;
        pageX = cursorEvent.pageX;
        pageY = cursorEvent.pageY;
        scroll.wheelDown = event.deltaY > 0;
        scroll.wheelUp = event.deltaY < 0;
        break;
      case 'touchmove':
      case 'touchstart':
        var touches = event.touches;
        var touchEvent = touches[0];
        clientX = touchEvent.clientX;
        clientY = touchEvent.clientY;
        screenX = touchEvent.screenX;
        screenY = touchEvent.screenY;
        pageX = touchEvent.pageX;
        pageY = touchEvent.pageY;
        break;
      default:
        throw new Error("Unknown event triggered \"" + event.type + "\"");
    }
    var selectedElPosition = _extends({}, cursor.selectedElement.position);
    var selectedElBoundingRect = _extends({}, cursor.selectedElement.boundingRect);
    if (selectedEl) {
      var _selectedEl$getBoundi = selectedEl.getBoundingClientRect(),
        left = _selectedEl$getBoundi.left,
        top = _selectedEl$getBoundi.top,
        width = _selectedEl$getBoundi.width,
        height = _selectedEl$getBoundi.height;
      selectedElPosition.x = clientX - left - selectedElementOffset.x;
      selectedElPosition.y = clientY - top - selectedElementOffset.y;
      var rad2Deg = 180 / Math.PI;
      var angleOffset = 180;
      selectedElPosition.angle = Math.atan2(selectedElPosition.y, -selectedElPosition.x) * rad2Deg + angleOffset;
      selectedElBoundingRect.left = left;
      selectedElBoundingRect.top = top;
      selectedElBoundingRect.width = width;
      selectedElBoundingRect.height = height;
    }
    setCursor(function (prevState) {
      return _extends({}, prevState, {
        position: {
          client: {
            x: clientX,
            y: clientY
          },
          screen: {
            x: screenX,
            y: screenY
          },
          page: {
            x: pageX,
            y: pageY
          }
        },
        scroll: scroll,
        eventType: event.type,
        selectedElement: _extends({}, prevState.selectedElement, {
          position: selectedElPosition,
          boundingRect: selectedElBoundingRect
        })
      });
    });
  };
  var onLeave = function onLeave() {
    setCursor(initArie);
  };
  var onSelectedElementEnter = function onSelectedElementEnter() {
    var selectedElement = _extends({}, cursor.selectedElement);
    selectedElement.isHover = true;
    setCursor(function (prevState) {
      return _extends({}, prevState, {
        selectedElement: selectedElement
      });
    });
  };
  var onSelectedElementLeave = function onSelectedElementLeave() {
    var selectedElement = _extends({}, cursor.selectedElement);
    selectedElement.isHover = false;
    setCursor(function (prevState) {
      return _extends({}, prevState, {
        selectedElement: selectedElement
      });
    });
  };
  useEffect(function () {
    if (selectedElementId) {
      selectedEl = document.getElementById(selectedElementId);
      if (!selectedEl) {
        throw new Error("Element with id=\"" + selectedElementId + "\" doesn't exists");
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
    return function () {
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
/**
 * ----------------------------------------------------------------------------------*
 * ------------------------------ EXPORT ----------------------------------------------*
 * ------------------------------------------------------------------------*
 **/
var useArie = useArieCursor;

var _templateObject;
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
/* -------------------------------------------------------------------------------------------------
 * PointerValue
 * -----------------------------------------------------------------------------------------------*/
var PointerValue = function PointerValue() {
  var _useState = useState('traxx©'),
    value = _useState[0],
    setValue = _useState[1];
  useEffect(function () {
    var format = function format(num, pad) {
      if (pad === void 0) {
        pad = 4;
      }
      return num.toString().padStart(pad, '0');
    };
    var setFromEvent = function setFromEvent(event) {
      var x = format(event.clientX, 5);
      var y = format(event.clientY, 5);
      setValue("X: " + x + ", Y: " + y);
    };
    window.addEventListener('mousemove', setFromEvent);
    return function () {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);
  /**
   *
   * @returns {value}. - A decimal value for each X and Y axis.
   * This component renders a string of numbers displaying
   * pointer coordinates and event data.
   *
   */
  return createElement(DataString, null, createElement("span", null, value));
};
/**
 *
 * @returns {component}.
 * <span> - A decimal value for each X and Y axis.
 *
 * Pass this component to a parent for styling.
 *
 */
var PointerData = function PointerData() {
  return createElement("div", {
    className: '--traxx-pointer-value'
  }, createElement(PointerValue, null));
};
var scrollFraction = function scrollFraction(_ref) {
  var window = _ref.window,
    document = _ref.document;
  /**
   * i dont know what this does.
   */
  return Math.min(window.scrollY / (document.body.offsetHeight - 770), 0.999);
};
var ScrollValue = function ScrollValue() {
  /**
   * useState (can be used to set the initial value of the state)
   * default is 'traxx©'
   */
  var _useState2 = useState('traxx©'),
    value = _useState2[0],
    setValue = _useState2[1];
  useEffect(function () {
    /**
     *
     * @param num
     * @param pad
     * @returns a string of numbers and leading zeros.
     */
    var format = function format(num, pad) {
      if (pad === void 0) {
        pad = 4;
      }
      return num.toString().padStart(pad, '0');
    };
    var setFromScroll = function setFromScroll() {
      var y = scrollFraction({
        window: window,
        document: document
      });
      /**
       * @returns `SCROLL: 0.000`
       */
      setValue("SCROLL: 0." + format(y.toFixed(3), 2));
    };
    window.addEventListener('scroll', setFromScroll);
    return function () {
      window.removeEventListener('scroll', setFromScroll);
    };
  }, []);
  /**
   *
   * @returns {value}.
   * This component renders a string of numbers displaying
   * scroll position on the page.
   *
   */
  return createElement(DataString, null, createElement("span", null, value));
};
/**
 *
 * @returns {component}.
 * <span> - A decimal value for each X and Y axis.
 *
 * Pass this component to a parent for styling.
 *
 */
var ScrollData = function ScrollData() {
  return createElement("div", {
    className: '--traxx-scroll-value'
  }, createElement(ScrollValue, null));
};
var StyledString = /*#__PURE__*/styled.p(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-family: monospace;\n  font-size: 1rem;\n  font-weight: 600;\n"])));
var DataString = StyledString;
////////////////////////////////////////
var ArieCursor = PointerData;
var ArieScroll = ScrollData;

export { ArieCursor, ArieScroll, useArie };
//# sourceMappingURL=arie-js.esm.js.map
