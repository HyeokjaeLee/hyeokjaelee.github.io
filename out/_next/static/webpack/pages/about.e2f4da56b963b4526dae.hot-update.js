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
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(Introduce, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}
_c = About;

var Title = function Title() {
  return __jsx("section", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().text),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, "HYEOKJAE LEE", __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "I'm Lazy", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), "Coder;")), __jsx("img", {
    src: "img/deno.png",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().img),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }));
};

_c2 = Title;

var Introduce = function Introduce() {
  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().title2),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "img/profile.jpg",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().profile),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Javascript Fullstack \uAC1C\uBC1C\uC790\uB97C \uAFC8\uAFB8\uB294 \uC774\uD601\uC7AC\uC785\uB2C8\uB2E4.")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "\uB0B4\uC6A9")));
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


_c3 = Introduce;

var _c, _c2, _c3;

$RefreshReg$(_c, "About");
$RefreshReg$(_c2, "Title");
$RefreshReg$(_c3, "Introduce");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQudHN4Il0sIm5hbWVzIjpbInNpbmNlIiwiRGF0ZSIsInRvZGF5IiwidGVzdCIsIk1hdGgiLCJjZWlsIiwiZ2V0VGltZSIsIkFib3V0IiwiVGl0bGUiLCJzdHlsZXMiLCJJbnRyb2R1Y2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFJQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTLFVBQVQsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJRCxJQUFKLEVBQWQ7QUFDQSxJQUFNRSxJQUFJLEdBQ1JDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQUNILEtBQUssQ0FBQ0ksT0FBTixLQUFrQk4sS0FBSyxDQUFDTSxPQUFOLEVBQW5CLEtBQXVDLE9BQU8sSUFBUCxHQUFjLEVBQXJELENBQVYsSUFBc0UsR0FEeEU7QUFFZSxTQUFTQyxLQUFULEdBQWlCO0FBQzlCLFNBQ0UscUVBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1EO0tBUHVCQSxLOztBQVN4QixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQ1o7QUFBUyxhQUFTLEVBQUVDLHVFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVBLHNFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLFdBRkYsQ0FERixFQVNFO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsYUFBUyxFQUFFQSxxRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBRFk7QUFBQSxDQUFkOztNQUFNRCxLOztBQWNOLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FDaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsd0VBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxpQkFBVDtBQUEyQixhQUFTLEVBQUVBLHlFQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhHQUZGLENBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLENBREYsQ0FEZ0I7QUFBQSxDQUFsQjtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7TUFqQ01DLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZTJmNGRhNTZiOTYzYjQ1MjZkYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LnRzeFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Fib3V0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgVG9iQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL1RvcGJhclwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGJhc2UgZnJvbSBcIi4uL3N0eWxlcy9iYXNlLm1vZHVsZS5jc3NcIjtcclxuY29uc3Qgc2luY2UgPSBuZXcgRGF0ZShcIjIwMDgtMi05XCIpO1xyXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbmNvbnN0IHRlc3QgPVxyXG4gIE1hdGguY2VpbCgodG9kYXkuZ2V0VGltZSgpIC0gc2luY2UuZ2V0VGltZSgpKSAvICgxMDAwICogMzYwMCAqIDI0KSkgJSAzNjU7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGl0bGUgLz5cclxuICAgICAgPEludHJvZHVjZSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgVGl0bGUgPSAoKSA9PiAoXHJcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgSFlFT0tKQUUgTEVFXHJcbiAgICAgIDxoMT5cclxuICAgICAgICBJJ20gTGF6eVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIENvZGVyO1xyXG4gICAgICA8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aW1nIHNyYz1cImltZy9kZW5vLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz5cclxuICA8L3NlY3Rpb24+XHJcbik7XHJcblxyXG5jb25zdCBJbnRyb2R1Y2UgPSAoKSA9PiAoXHJcbiAgPHNlY3Rpb24+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlMn0+XHJcbiAgICAgICAgPGltZyBzcmM9XCJpbWcvcHJvZmlsZS5qcGdcIiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfSAvPlxyXG4gICAgICAgIDxoMj5KYXZhc2NyaXB0IEZ1bGxzdGFjayDqsJzrsJzsnpDrpbwg6r+I6r6464qUIOydtO2YgeyerOyeheuLiOuLpC48L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj7rgrTsmqk8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvc2VjdGlvbj5cclxuKTtcclxuXHJcbi8qPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjRFMztcclxuICAgICAgICAgIDxiciAvPiBBYm91dCBNZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGNTI4OyA8YnIgLz5cclxuICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGNEFEOyA8YnIgLz5cclxuICAgICAgICAgIEV4cGVyaWVuY2VcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjRDQjtcclxuICAgICAgICAgIDxiciAvPiBQcm9qZWN0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgJiN4MUYzOTM7IDxiciAvPlxyXG4gICAgICAgICAgRWR1Y2F0aW9uXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQnV0dG9uR3JvdXA+Ki9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==