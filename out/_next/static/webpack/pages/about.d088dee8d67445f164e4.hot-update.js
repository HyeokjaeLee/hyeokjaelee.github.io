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
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
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
  }, "Javascript Fullstack \uAC1C\uBC1C\uC790\uB97C \uAFC8\uAFB8\uB294 \uC774\uD601\uC7AC\uC785\uB2C8\uB2E4.")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQudHN4Il0sIm5hbWVzIjpbInNpbmNlIiwiRGF0ZSIsInRvZGF5IiwidGVzdCIsIk1hdGgiLCJjZWlsIiwiZ2V0VGltZSIsIkFib3V0IiwiVGl0bGUiLCJzdHlsZXMiLCJJbnRyb2R1Y2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFJQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTLFVBQVQsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJRCxJQUFKLEVBQWQ7QUFDQSxJQUFNRSxJQUFJLEdBQ1JDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQUNILEtBQUssQ0FBQ0ksT0FBTixLQUFrQk4sS0FBSyxDQUFDTSxPQUFOLEVBQW5CLEtBQXVDLE9BQU8sSUFBUCxHQUFjLEVBQXJELENBQVYsSUFBc0UsR0FEeEU7QUFFZSxTQUFTQyxLQUFULEdBQWlCO0FBQzlCLFNBQ0UscUVBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1EO0tBUHVCQSxLOztBQVN4QixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQ1o7QUFBUyxhQUFTLEVBQUVDLHVFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVBLHNFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLFdBRkYsQ0FERixFQVNFO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsYUFBUyxFQUFFQSxxRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBRFk7QUFBQSxDQUFkOztNQUFNRCxLOztBQWNOLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FDaEI7QUFBUyxhQUFTLEVBQUVELHVFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVBLHVFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsaUJBQVQ7QUFBMkIsYUFBUyxFQUFFQSx5RUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4R0FGRixDQURGLENBRGdCO0FBQUEsQ0FBbEI7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O01BOUJNQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LmQwODhkZWU4ZDY3NDQ1ZjE2NGU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9pbmRleC50c3hcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9hYm91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFRvYkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Ub3BiYXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBiYXNlIGZyb20gXCIuLi9zdHlsZXMvYmFzZS5tb2R1bGUuY3NzXCI7XHJcbmNvbnN0IHNpbmNlID0gbmV3IERhdGUoXCIyMDA4LTItOVwiKTtcclxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5jb25zdCB0ZXN0ID1cclxuICBNYXRoLmNlaWwoKHRvZGF5LmdldFRpbWUoKSAtIHNpbmNlLmdldFRpbWUoKSkgLyAoMTAwMCAqIDM2MDAgKiAyNCkpICUgMzY1O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRpdGxlIC8+XHJcbiAgICAgIDxJbnRyb2R1Y2UgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFRpdGxlID0gKCkgPT4gKFxyXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgIEhZRU9LSkFFIExFRVxyXG4gICAgICA8aDE+XHJcbiAgICAgICAgSSdtIExhenlcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICBDb2RlcjtcclxuICAgICAgPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGltZyBzcmM9XCJpbWcvZGVuby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IC8+XHJcbiAgPC9zZWN0aW9uPlxyXG4pO1xyXG5cclxuY29uc3QgSW50cm9kdWNlID0gKCkgPT4gKFxyXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmludHJvfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICA8aW1nIHNyYz1cImltZy9wcm9maWxlLmpwZ1wiIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9IC8+XHJcbiAgICAgIDxoMj5KYXZhc2NyaXB0IEZ1bGxzdGFjayDqsJzrsJzsnpDrpbwg6r+I6r6464qUIOydtO2YgeyerOyeheuLiOuLpC48L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9zZWN0aW9uPlxyXG4pO1xyXG5cclxuLyo8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGNEUzO1xyXG4gICAgICAgICAgPGJyIC8+IEFib3V0IE1lXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgJiN4MUY1Mjg7IDxiciAvPlxyXG4gICAgICAgICAgU2tpbGxzXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgJiN4MUY0QUQ7IDxiciAvPlxyXG4gICAgICAgICAgRXhwZXJpZW5jZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGNENCO1xyXG4gICAgICAgICAgPGJyIC8+IFByb2plY3RcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjM5MzsgPGJyIC8+XHJcbiAgICAgICAgICBFZHVjYXRpb25cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9CdXR0b25Hcm91cD4qL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9