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
  var leon, canvas, ctx;
  var sw = 800;
  var sh = 600;
  var pixelRatio = 2;

  function init() {
    canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + "px";
    canvas.style.height = sh + "px";
    ctx.scale(pixelRatio, pixelRatio);
    leon = new LeonSans({
      text: "The quick brown\nfox jumps over\nthe lazy dog",
      color: ["#000000"],
      size: 80,
      weight: 200
    });
    requestAnimationFrame(animate);
  }

  function animate(t) {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, sw, sh);
    var x = (sw - leon.rect.w) / 2;
    var y = (sh - leon.rect.h) / 2;
    leon.position(x, y);
    leon.draw(ctx);
  }

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("script", {
    src: "js/leon.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx("section", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().color),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().text_container),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "HYEOKJAE LEE", __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "I'm Lazy", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), "Coder ;")), __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().clock),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "\uAC1C\uBC1C\uC790\uB97C \uAFC8\uAFBC\uC9C0", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), "D+", dDay), __jsx("img", {
    src: "img/dev.png",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().img),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  })), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQudHN4Il0sIm5hbWVzIjpbInNpbmNlIiwiRGF0ZSIsInRvZGF5IiwidGVzdCIsIk1hdGgiLCJjZWlsIiwiZ2V0VGltZSIsIkFib3V0IiwidXNlU3RhdGUiLCJkRGF5Iiwic2V0RGRheSIsInNldFRpbWVvdXQiLCJsZW9uIiwiY2FudmFzIiwiY3R4Iiwic3ciLCJzaCIsInBpeGVsUmF0aW8iLCJpbml0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJzY2FsZSIsIkxlb25TYW5zIiwidGV4dCIsImNvbG9yIiwic2l6ZSIsIndlaWdodCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJ0IiwiY2xlYXJSZWN0IiwieCIsInJlY3QiLCJ3IiwieSIsImgiLCJwb3NpdGlvbiIsImRyYXciLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFJQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTLFVBQVQsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJRCxJQUFKLEVBQWQ7QUFDQSxJQUFNRSxJQUFJLEdBQ1JDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQUNILEtBQUssQ0FBQ0ksT0FBTixLQUFrQk4sS0FBSyxDQUFDTSxPQUFOLEVBQW5CLEtBQXVDLE9BQU8sSUFBUCxHQUFjLEVBQXJELENBQVYsSUFBc0UsR0FEeEU7QUFFZSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ05DLCtDQUFRLENBQUMsQ0FBRCxDQURGO0FBQUEsTUFDdkJDLElBRHVCO0FBQUEsTUFDakJDLE9BRGlCOztBQUU5QixNQUFJRCxJQUFJLEdBQUdOLElBQVgsRUFDRVEsVUFBVSxDQUFDLFlBQU07QUFDZkQsV0FBTyxDQUFDRCxJQUFJ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBeEZ3QnJDLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuNTcyMDBiOGMyNmZlMDgyNzhhOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LnRzeFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Fib3V0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgVG9iQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL1RvcGJhclwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGJhc2UgZnJvbSBcIi4uL3N0eWxlcy9iYXNlLm1vZHVsZS5jc3NcIjtcclxuY29uc3Qgc2luY2UgPSBuZXcgRGF0ZShcIjIwMDgtMi05XCIpO1xyXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbmNvbnN0IHRlc3QgPVxyXG4gIE1hdGguY2VpbCgodG9kYXkuZ2V0VGltZSgpIC0gc2luY2UuZ2V0VGltZSgpKSAvICgxMDAwICogMzYwMCAqIDI0KSkgJSAzNjU7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gIGNvbnN0IFtkRGF5LCBzZXREZGF5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGlmIChkRGF5IDwgdGVzdClcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXREZGF5KGREYXkgKyAxKTtcclxuICAgIH0sIDEwKTtcclxuICBsZXQgbGVvbiwgY2FudmFzLCBjdHg7XHJcblxyXG4gIGNvbnN0IHN3ID0gODAwO1xyXG4gIGNvbnN0IHNoID0gNjAwO1xyXG4gIGNvbnN0IHBpeGVsUmF0aW8gPSAyO1xyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjYW52YXMud2lkdGggPSBzdyAqIHBpeGVsUmF0aW87XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gc2ggKiBwaXhlbFJhdGlvO1xyXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gc3cgKyBcInB4XCI7XHJcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gc2ggKyBcInB4XCI7XHJcbiAgICBjdHguc2NhbGUocGl4ZWxSYXRpbywgcGl4ZWxSYXRpbyk7XHJcblxyXG4gICAgbGVvbiA9IG5ldyBMZW9uU2Fucyh7XHJcbiAgICAgIHRleHQ6IFwiVGhlIHF1aWNrIGJyb3duXFxuZm94IGp1bXBzIG92ZXJcXG50aGUgbGF6eSBkb2dcIixcclxuICAgICAgY29sb3I6IFtcIiMwMDAwMDBcIl0sXHJcbiAgICAgIHNpemU6IDgwLFxyXG4gICAgICB3ZWlnaHQ6IDIwMCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFuaW1hdGUodCkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgc3csIHNoKTtcclxuXHJcbiAgICBjb25zdCB4ID0gKHN3IC0gbGVvbi5yZWN0LncpIC8gMjtcclxuICAgIGNvbnN0IHkgPSAoc2ggLSBsZW9uLnJlY3QuaCkgLyAyO1xyXG4gICAgbGVvbi5wb3NpdGlvbih4LCB5KTtcclxuXHJcbiAgICBsZW9uLmRyYXcoY3R4KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwianMvbGVvbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xvcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICBIWUVPS0pBRSBMRUVcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBJJ20gTGF6eVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgQ29kZXIgO1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbG9ja30+XHJcbiAgICAgICAgICDqsJzrsJzsnpDrpbwg6r+I6r687KeAXHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIEQre2REYXl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCJpbWcvZGV2LnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbj48L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbi8qPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjRFMztcclxuICAgICAgICAgIDxiciAvPiBBYm91dCBNZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGNTI4OyA8YnIgLz5cclxuICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGNEFEOyA8YnIgLz5cclxuICAgICAgICAgIEV4cGVyaWVuY2VcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjRDQjtcclxuICAgICAgICAgIDxiciAvPiBQcm9qZWN0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgJiN4MUYzOTM7IDxiciAvPlxyXG4gICAgICAgICAgRWR1Y2F0aW9uXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQnV0dG9uR3JvdXA+Ki9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==