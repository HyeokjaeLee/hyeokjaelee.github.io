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
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
// pages/index.tsx


var since = new Date("2008-2-9");
var today = new Date();
var test = Math.ceil((today.getTime() - since.getTime()) / (1000 * 3600 * 24)) % 365;
function About() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      dDay = _useState[0],
      setDday = _useState[1];

  if (dDay < test) setTimeout(function () {
    setDday(dDay + 1);
  }, 10);
  return __jsx("section", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().color),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("svg", {
    viewBox: "0 0 960 300",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().svg_t),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("symbol", {
    id: "s-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("text", {
    "text-anchor": "middle",
    x: "50%",
    y: "80%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Montserrat")), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("use", {
    xlinkHref: "#s-text",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().text_copy),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx("use", {
    xlinkHref: "#s-text",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().text_copy),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("use", {
    xlinkHref: "#s-text",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().text_copy),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("use", {
    xlinkHref: "#s-text",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().text_copy),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("use", {
    xlinkHref: "#s-text",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().text_copy),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().text_container),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "HYEOKJAE LEE", __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "I'm Lazy", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), "Coder ;")), __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().clock),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "\uAC1C\uBC1C\uC790\uB97C \uAFC8\uAFBC\uC9C0", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), "D+", dDay), __jsx("img", {
    src: "img/dev.png",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().img),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }));
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

_s(About, "9vU7EKNwuJkTTtcrctwjN+Nfsbg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQudHN4Il0sIm5hbWVzIjpbInNpbmNlIiwiRGF0ZSIsInRvZGF5IiwidGVzdCIsIk1hdGgiLCJjZWlsIiwiZ2V0VGltZSIsIkFib3V0IiwidXNlU3RhdGUiLCJkRGF5Iiwic2V0RGRheSIsInNldFRpbWVvdXQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFJQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTLFVBQVQsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJRCxJQUFKLEVBQWQ7QUFDQSxJQUFNRSxJQUFJLEdBQ1JDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQUNILEtBQUssQ0FBQ0ksT0FBTixLQUFrQk4sS0FBSyxDQUFDTSxPQUFOLEVBQW5CLEtBQXVDLE9BQU8sSUFBUCxHQUFjLEVBQXJELENBQVYsSUFBc0UsR0FEeEU7QUFFZSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ05DLCtDQUFRLENBQUMsQ0FBRCxDQURGO0FBQUEsTUFDdkJDLElBRHVCO0FBQUEsTUFDakJDLE9BRGlCOztBQUU5QixNQUFJRCxJQUFJLEdBQUdOLElBQVgsRUFDRVEsVUFBVSxDQUFDLFlBQU07QUFDZkQsV0FBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFQO0FBQ0QsR0FGUyxFQUVQLEVBRk8sQ0FBVjtBQUlGLFNBQ0U7QUFBUyxhQUFTLEVBQUVHLHVFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxXQUFPLEVBQUMsYUFBYjtBQUEyQixhQUFTLEVBQUVBLHVFQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxNQUFFLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxtQkFBWSxRQUFsQjtBQUEyQixLQUFDLEVBQUMsS0FBN0I7QUFBbUMsS0FBQyxFQUFDLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLGFBQVMsRUFBRUEsMkVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsYUFBUyxFQUFFQSwyRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUF5QixhQUFTLEVBQUVBLDJFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLGFBQVMsRUFBRUEsMkVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsYUFBUyxFQUFFQSwyRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBTkYsQ0FERixFQWVFO0FBQUssYUFBUyxFQUFFQSxnRkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFRTtBQUFLLGFBQVMsRUFBRUEsdUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLFlBRkYsQ0FmRixFQXVCRTtBQUFLLGFBQVMsRUFBRUEsdUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLFFBR0tILElBSEwsQ0F2QkYsRUE0QkU7QUFBSyxPQUFHLEVBQUMsYUFBVDtBQUF1QixhQUFTLEVBQUVHLHFFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUJGLENBREY7QUFnQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0E3RHdCTCxLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjVkNzg3OTdkNzE4YTgxZmZmZDliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9pbmRleC50c3hcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9hYm91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFRvYkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Ub3BiYXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBiYXNlIGZyb20gXCIuLi9zdHlsZXMvYmFzZS5tb2R1bGUuY3NzXCI7XHJcbmNvbnN0IHNpbmNlID0gbmV3IERhdGUoXCIyMDA4LTItOVwiKTtcclxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5jb25zdCB0ZXN0ID1cclxuICBNYXRoLmNlaWwoKHRvZGF5LmdldFRpbWUoKSAtIHNpbmNlLmdldFRpbWUoKSkgLyAoMTAwMCAqIDM2MDAgKiAyNCkpICUgMzY1O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICBjb25zdCBbZERheSwgc2V0RGRheV0gPSB1c2VTdGF0ZSgwKTtcclxuICBpZiAoZERheSA8IHRlc3QpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RGRheShkRGF5ICsgMSk7XHJcbiAgICB9LCAxMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xvcn0+XHJcbiAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA5NjAgMzAwXCIgY2xhc3NOYW1lPXtzdHlsZXMuc3ZnX3R9PlxyXG4gICAgICAgIDxzeW1ib2wgaWQ9XCJzLXRleHRcIj5cclxuICAgICAgICAgIDx0ZXh0IHRleHQtYW5jaG9yPVwibWlkZGxlXCIgeD1cIjUwJVwiIHk9XCI4MCVcIj5cclxuICAgICAgICAgICAgTW9udHNlcnJhdFxyXG4gICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgIDwvc3ltYm9sPlxyXG4gICAgICAgIDxnPlxyXG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjcy10ZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jb3B5fT48L3VzZT5cclxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI3MtdGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzLnRleHRfY29weX0+PC91c2U+XHJcbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiNzLXRleHRcIiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NvcHl9PjwvdXNlPlxyXG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjcy10ZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jb3B5fT48L3VzZT5cclxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI3MtdGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzLnRleHRfY29weX0+PC91c2U+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgSFlFT0tKQUUgTEVFXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICBJJ20gTGF6eVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBDb2RlciA7XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsb2NrfT5cclxuICAgICAgICDqsJzrsJzsnpDrpbwg6r+I6r687KeAXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgRCt7ZERheX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbWcgc3JjPVwiaW1nL2Rldi5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4vKjxCdXR0b25Hcm91cCBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Hcm91cH0+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgJiN4MUY0RTM7XHJcbiAgICAgICAgICA8YnIgLz4gQWJvdXQgTWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjUyODsgPGJyIC8+XHJcbiAgICAgICAgICBTa2lsbHNcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjRBRDsgPGJyIC8+XHJcbiAgICAgICAgICBFeHBlcmllbmNlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgJiN4MUY0Q0I7XHJcbiAgICAgICAgICA8YnIgLz4gUHJvamVjdFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGMzkzOyA8YnIgLz5cclxuICAgICAgICAgIEVkdWNhdGlvblxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0J1dHRvbkdyb3VwPiovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=