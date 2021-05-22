self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ About; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/about.module.css */ "./styles/about.module.css");
/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Workspace\\blog\\pages\\about.tsx",
    _this = undefined;

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
// pages/index.tsx


var since = new Date("2008-2-9");
var today = new Date();
var test = Math.ceil((today.getTime() - since.getTime()) / (1000 * 3600 * 24)) % 365;
function About() {
  return __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 10
    }
  });
}
_c = About;

var Title = function Title() {
  return __jsx("section", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().color),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().title_text_container),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "HYEOKJAE LEE"), __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "I'm Lazy", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), "Coder;"))), __jsx("img", {
    src: "img/deno.png",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().img),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }));
};
/*<ButtonGroup className={styles.buttonGroup}>
        <Button className={styles.button}>
          &#x1F4E3;
          <br /> About Me
        </Button>
        <Button className={styles.button}>
          &#x1F528; <br />
          Skills
        </Button>
        <Button className={styles.button}>
          &#x1F4AD; <br />
          Experience
        </Button>
        <Button className={styles.button}>
          &#x1F4CB;
          <br /> Project
        </Button>
        <Button className={styles.button}>
          &#x1F393; <br />
          Education
        </Button>
      </ButtonGroup>*/


_c2 = Title;

var _c, _c2;

$RefreshReg$(_c, "About");
$RefreshReg$(_c2, "Title");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQudHN4Il0sIm5hbWVzIjpbInNpbmNlIiwiRGF0ZSIsInRvZGF5IiwidGVzdCIsIk1hdGgiLCJjZWlsIiwiZ2V0VGltZSIsIkFib3V0IiwiVGl0bGUiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFJQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTLFVBQVQsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJRCxJQUFKLEVBQWQ7QUFDQSxJQUFNRSxJQUFJLEdBQ1JDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQUNILEtBQUssQ0FBQ0ksT0FBTixLQUFrQk4sS0FBSyxDQUFDTSxPQUFOLEVBQW5CLEtBQXVDLE9BQU8sSUFBUCxHQUFjLEVBQXJELENBQVYsSUFBc0UsR0FEeEU7QUFFZSxTQUFTQyxLQUFULEdBQWlCO0FBQzlCLFNBQU8sTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNEO0tBRnVCQSxLOztBQUl4QixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQ1o7QUFBUyxhQUFTLEVBQUVDLHVFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVBLHNGQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUssYUFBUyxFQUFFQSx1RUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLFdBREYsQ0FGRixDQURGLEVBV0U7QUFBSyxPQUFHLEVBQUMsY0FBVDtBQUF3QixhQUFTLEVBQUVBLHFFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FEWTtBQUFBLENBQWQ7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O01BcENNRCxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjM4N2JjYmFkZThhYTUxN2QwMDFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9pbmRleC50c3hcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9hYm91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFRvYkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Ub3BiYXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBiYXNlIGZyb20gXCIuLi9zdHlsZXMvYmFzZS5tb2R1bGUuY3NzXCI7XHJcbmNvbnN0IHNpbmNlID0gbmV3IERhdGUoXCIyMDA4LTItOVwiKTtcclxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5jb25zdCB0ZXN0ID1cclxuICBNYXRoLmNlaWwoKHRvZGF5LmdldFRpbWUoKSAtIHNpbmNlLmdldFRpbWUoKSkgLyAoMTAwMCAqIDM2MDAgKiAyNCkpICUgMzY1O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICByZXR1cm4gPFRpdGxlIC8+O1xyXG59XHJcblxyXG5jb25zdCBUaXRsZSA9ICgpID0+IChcclxuICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xvcn0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX3RleHRfY29udGFpbmVyfT5cclxuICAgICAgPGg1PkhZRU9LSkFFIExFRTwvaDU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgIEknbSBMYXp5XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIENvZGVyO1xyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aW1nIHNyYz1cImltZy9kZW5vLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz5cclxuICA8L3NlY3Rpb24+XHJcbik7XHJcbi8qPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjRFMztcclxuICAgICAgICAgIDxiciAvPiBBYm91dCBNZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGNTI4OyA8YnIgLz5cclxuICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGNEFEOyA8YnIgLz5cclxuICAgICAgICAgIEV4cGVyaWVuY2VcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjRDQjtcclxuICAgICAgICAgIDxiciAvPiBQcm9qZWN0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgJiN4MUYzOTM7IDxiciAvPlxyXG4gICAgICAgICAgRWR1Y2F0aW9uXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQnV0dG9uR3JvdXA+Ki9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==