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
/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/about.module.css */ "./styles/about.module.css");
/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_Topbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/Topbar */ "./components/common/Topbar.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Workspace\\blog\\pages\\about.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
// pages/index.tsx



function About() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      height: "150vh"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_components_common_Topbar__WEBPACK_IMPORTED_MODULE_1__.TobBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().color),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().text_container),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "HYEOKJAE LEE", __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "I'm Lazy", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }), "Developer ;")), __jsx("img", {
    src: "img/dev.png",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().img),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      height: "10px",
      width: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })));
}
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

_c = About;

var _c;

$RefreshReg$(_c, "About");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQudHN4Il0sIm5hbWVzIjpbIkFib3V0IiwiaGVpZ2h0Iiwic3R5bGVzIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBR2UsU0FBU0EsS0FBVCxHQUFpQjtBQUM5QixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFFQyx1RUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFQSxnRkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFRTtBQUFLLGFBQVMsRUFBRUEsdUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLGdCQUZGLENBREYsRUFTRTtBQUFLLE9BQUcsRUFBQyxhQUFUO0FBQXVCLGFBQVMsRUFBRUEscUVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQUZGLENBREYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUQsWUFBTSxFQUFFLE1BQVY7QUFBa0JFLFdBQUssRUFBRTtBQUF6QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWZGLENBREY7QUFxQkQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0E1Q3dCSCxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LmE1OTRmNGYzZmFkZGIwODhmZjRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9pbmRleC50c3hcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9hYm91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFRvYkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Ub3BiYXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBiYXNlIGZyb20gXCIuLi9zdHlsZXMvYmFzZS5tb2R1bGUuY3NzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxNTB2aFwiIH19PlxyXG4gICAgICAgIDxUb2JCYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbG9yfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICBIWUVPS0pBRSBMRUVcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgSSdtIExhenlcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICBEZXZlbG9wZXIgO1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvZGV2LnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMTBweFwiLCB3aWR0aDogXCIyMHB4XCIgfX0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4vKjxCdXR0b25Hcm91cCBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Hcm91cH0+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgJiN4MUY0RTM7XHJcbiAgICAgICAgICA8YnIgLz4gQWJvdXQgTWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjUyODsgPGJyIC8+XHJcbiAgICAgICAgICBTa2lsbHNcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjRBRDsgPGJyIC8+XHJcbiAgICAgICAgICBFeHBlcmllbmNlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgJiN4MUY0Q0I7XHJcbiAgICAgICAgICA8YnIgLz4gUHJvamVjdFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGMzkzOyA8YnIgLz5cclxuICAgICAgICAgIEVkdWNhdGlvblxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0J1dHRvbkdyb3VwPiovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=