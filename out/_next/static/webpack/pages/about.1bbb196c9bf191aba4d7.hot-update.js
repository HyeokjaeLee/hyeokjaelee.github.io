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
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().intro),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().title2),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "img/profile.jpg",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().profile),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "Javascript Fullstack \uAC1C\uBC1C\uC790\uB97C \uAFC8\uAFB8\uB294 \uC774\uD601\uC7AC\uC785\uB2C8\uB2E4.")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, "\uB0B4\uC6A9"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQudHN4Il0sIm5hbWVzIjpbInNpbmNlIiwiRGF0ZSIsInRvZGF5IiwidGVzdCIsIk1hdGgiLCJjZWlsIiwiZ2V0VGltZSIsIkFib3V0IiwiVGl0bGUiLCJzdHlsZXMiLCJJbnRyb2R1Y2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFJQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTLFVBQVQsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJRCxJQUFKLEVBQWQ7QUFDQSxJQUFNRSxJQUFJLEdBQ1JDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQUNILEtBQUssQ0FBQ0ksT0FBTixLQUFrQk4sS0FBSyxDQUFDTSxPQUFOLEVBQW5CLEtBQXVDLE9BQU8sSUFBUCxHQUFjLEVBQXJELENBQVYsSUFBc0UsR0FEeEU7QUFFZSxTQUFTQyxLQUFULEdBQWlCO0FBQzlCLFNBQ0UscUVBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1EO0tBUHVCQSxLOztBQVN4QixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQ1o7QUFBUyxhQUFTLEVBQUVDLHVFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVBLHNFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLFdBRkYsQ0FERixFQVNFO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsYUFBUyxFQUFFQSxxRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBRFk7QUFBQSxDQUFkOztNQUFNRCxLOztBQWNOLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FDaEI7QUFBUyxhQUFTLEVBQUVELHVFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVBLHdFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsaUJBQVQ7QUFBMkIsYUFBUyxFQUFFQSx5RUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4R0FGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixDQURnQjtBQUFBLENBQWxCO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztNQS9CTUMsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC4xYmJiMTk2YzliZjE5MWFiYTRkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXgudHN4XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYWJvdXQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBUb2JCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vVG9wYmFyXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgYmFzZSBmcm9tIFwiLi4vc3R5bGVzL2Jhc2UubW9kdWxlLmNzc1wiO1xyXG5jb25zdCBzaW5jZSA9IG5ldyBEYXRlKFwiMjAwOC0yLTlcIik7XHJcbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuY29uc3QgdGVzdCA9XHJcbiAgTWF0aC5jZWlsKCh0b2RheS5nZXRUaW1lKCkgLSBzaW5jZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiAzNjAwICogMjQpKSAlIDM2NTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUaXRsZSAvPlxyXG4gICAgICA8SW50cm9kdWNlIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBUaXRsZSA9ICgpID0+IChcclxuICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICBIWUVPS0pBRSBMRUVcclxuICAgICAgPGgxPlxyXG4gICAgICAgIEknbSBMYXp5XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgQ29kZXI7XHJcbiAgICAgIDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxpbWcgc3JjPVwiaW1nL2Rlbm8ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSAvPlxyXG4gIDwvc2VjdGlvbj5cclxuKTtcclxuXHJcbmNvbnN0IEludHJvZHVjZSA9ICgpID0+IChcclxuICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlMn0+XHJcbiAgICAgIDxpbWcgc3JjPVwiaW1nL3Byb2ZpbGUuanBnXCIgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0gLz5cclxuICAgICAgPGgyPkphdmFzY3JpcHQgRnVsbHN0YWNrIOqwnOuwnOyekOulvCDqv4jqvrjripQg7J207ZiB7J6s7J6F64uI64ukLjwvaDI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+64K07JqpPC9kaXY+XHJcbiAgPC9zZWN0aW9uPlxyXG4pO1xyXG5cclxuLyo8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGNEUzO1xyXG4gICAgICAgICAgPGJyIC8+IEFib3V0IE1lXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgJiN4MUY1Mjg7IDxiciAvPlxyXG4gICAgICAgICAgU2tpbGxzXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgJiN4MUY0QUQ7IDxiciAvPlxyXG4gICAgICAgICAgRXhwZXJpZW5jZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGNENCO1xyXG4gICAgICAgICAgPGJyIC8+IFByb2plY3RcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjM5MzsgPGJyIC8+XHJcbiAgICAgICAgICBFZHVjYXRpb25cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9CdXR0b25Hcm91cD4qL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9