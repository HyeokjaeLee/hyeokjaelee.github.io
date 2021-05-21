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
  return __jsx("section", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().color),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().hero),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().snow),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1536",
    preserveAspectRatio: "xMidYMax slice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("g", {
    fill: "#FFF",
    "fill-opacity": ".15",
    transform: "translate(55 42)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("g", {
    id: "snow-bottom-layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("ellipse", {
    cx: "6",
    cy: "1009.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "138",
    cy: "1110.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "398",
    cy: "1055.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "719",
    cy: "1284.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "760",
    cy: "1155.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "635",
    cy: "1459.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "478",
    cy: "1335.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "322",
    cy: "1414.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "247",
    cy: "1234.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "154",
    cy: "1425.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "731",
    cy: "773.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "599",
    cy: "874.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "339",
    cy: "819.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "239",
    cy: "1004.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "113",
    cy: "863.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "102",
    cy: "1223.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "395",
    cy: "1155.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "826",
    cy: "943.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "626",
    cy: "1054.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "887",
    cy: "1366.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "6",
    cy: "241.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "138",
    cy: "342.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "398",
    cy: "287.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "719",
    cy: "516.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "760",
    cy: "387.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "635",
    cy: "691.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "478",
    cy: "567.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "322",
    cy: "646.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "247",
    cy: "466.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "154",
    cy: "657.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "731",
    cy: "5.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "599",
    cy: "106.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "339",
    cy: "51.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "239",
    cy: "236.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "113",
    cy: "95.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "102",
    cy: "455.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "395",
    cy: "387.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "826",
    cy: "175.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "626",
    cy: "286.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }), __jsx("ellipse", {
    cx: "887",
    cy: "598.5",
    rx: "6",
    ry: "5.5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }))), __jsx("g", {
    fill: "#FFF",
    "fill-opacity": ".3",
    transform: "translate(65 63)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("g", {
    id: "snow-top-layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx("circle", {
    cx: "8",
    cy: "776",
    r: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "189",
    cy: "925",
    r: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "548",
    cy: "844",
    r: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "685",
    cy: "1115",
    r: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "858",
    cy: "909",
    r: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "874",
    cy: "1438",
    r: "8",
    transform: "rotate(180 874 1438)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "657",
    cy: "1256",
    r: "8",
    transform: "rotate(180 657 1256)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "443",
    cy: "1372",
    r: "8",
    transform: "rotate(180 443 1372)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "339",
    cy: "1107",
    r: "8",
    transform: "rotate(180 339 1107)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "24",
    cy: "1305",
    r: "8",
    transform: "rotate(180 24 1305)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "8",
    cy: "8",
    r: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "189",
    cy: "157",
    r: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "548",
    cy: "76",
    r: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "685",
    cy: "347",
    r: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "858",
    cy: "141",
    r: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "874",
    cy: "670",
    r: "8",
    transform: "rotate(180 874 670)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "657",
    cy: "488",
    r: "8",
    transform: "rotate(180 657 488)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "443",
    cy: "604",
    r: "8",
    transform: "rotate(180 443 604)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "339",
    cy: "339",
    r: "8",
    transform: "rotate(180 339 339)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }), __jsx("circle", {
    cx: "24",
    cy: "537",
    r: "8",
    transform: "rotate(180 24 537)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().contents),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, "SVG Snow"))), __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().text_container),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, "HYEOKJAE LEE", __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, "I'm Lazy", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }), "Coder ;")), __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().clock),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, "\uAC1C\uBC1C\uC790\uB97C \uAFC8\uAFBC\uC9C0", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }), "D+", dDay), __jsx("img", {
    src: "img/dev.png",
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_1___default().img),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/about.module.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/about.module.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".about_color__bntN- {\r\n  width: 100%;\r\n  min-height: 60vh;\r\n  -webkit-animation: about_color-change-5x__QqNJR 15s linear infinite alternate both;\r\n  -moz-animation: about_color-change-5x__QqNJR 15s linear infinite alternate both;\r\n       animation: about_color-change-5x__QqNJR 15s linear infinite alternate both;\r\n  padding: 1%;\r\n  display: -moz-box;\r\n  display: flex;\r\n  -webkit-box-shadow: 0 10px 20px -10px black;\r\n          box-shadow: 0 10px 20px -10px black;\r\n  height: 100vh;\r\n  -moz-box-orient: vertical;\r\n  -moz-box-direction: normal;\r\n       flex-direction: column;\r\n}\r\n.about_buttonGroup__o8sTG {\r\n  float: right;\r\n  -webkit-box-shadow: 0 10px 20px -10px black;\r\n          box-shadow: 0 10px 20px -10px black;\r\n  float: right;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  -webkit-animation: about_wobble-hor-bottom__Myn67 0.8s 2s both;\r\n  -moz-animation: about_wobble-hor-bottom__Myn67 0.8s 2s both;\r\n       animation: about_wobble-hor-bottom__Myn67 0.8s 2s both;\r\n  border-radius: 10vh;\r\n  overflow: hidden;\r\n}\r\n.about_button__1anlT {\r\n  font-size: 1vmax;\r\n  font-weight: 100;\r\n  padding: 1.5vmax;\r\n}\r\n@-webkit-keyframes about_color-change-5x__QqNJR {\r\n  0% {\r\n    background: #282c34;\r\n  }\r\n  25% {\r\n    background: #b22cff;\r\n  }\r\n  50% {\r\n    background: #ea2222;\r\n  }\r\n  75% {\r\n    background: #f5be10;\r\n  }\r\n  100% {\r\n    background: #82a9fb;\r\n  }\r\n}\r\n@-moz-keyframes about_color-change-5x__QqNJR {\r\n  0% {\r\n    background: #282c34;\r\n  }\r\n  25% {\r\n    background: #b22cff;\r\n  }\r\n  50% {\r\n    background: #ea2222;\r\n  }\r\n  75% {\r\n    background: #f5be10;\r\n  }\r\n  100% {\r\n    background: #82a9fb;\r\n  }\r\n}\r\n@keyframes about_color-change-5x__QqNJR {\r\n  0% {\r\n    background: #282c34;\r\n  }\r\n  25% {\r\n    background: #b22cff;\r\n  }\r\n  50% {\r\n    background: #ea2222;\r\n  }\r\n  75% {\r\n    background: #f5be10;\r\n  }\r\n  100% {\r\n    background: #82a9fb;\r\n  }\r\n}\r\n.about_text_container__3xJM7 {\r\n  -moz-box-flex: 1;\r\n       flex: 1 1;\r\n  color: white;\r\n  -webkit-animation: about_tracking-in-contract-bck__34jcp 2s\r\n    cubic-bezier(0.215, 0.61, 0.355, 1) 1s both;\r\n  -moz-animation: about_tracking-in-contract-bck__34jcp 2s cubic-bezier(0.215, 0.61, 0.355, 1) 1s\r\n    both;\r\n       animation: about_tracking-in-contract-bck__34jcp 2s cubic-bezier(0.215, 0.61, 0.355, 1) 1s\r\n    both;\r\n  font-size: 2vh;\r\n  margin: 4%;\r\n  font-weight: 600;\r\n  line-height: 2vh;\r\n  -ms-user-select: none;\r\n  -moz-user-select: -moz-none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.about_img__hggWg {\r\n  -moz-box-flex: 1;\r\n       flex: 1 1 1;\r\n  height: 30vh;\r\n  margin-left: auto;\r\n  -webkit-animation: about_fade-in__1LG7T 2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;\r\n  -moz-animation: about_fade-in__1LG7T 2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;\r\n       animation: about_fade-in__1LG7T 2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;\r\n}\r\n\r\n.about_title__3l4Kx {\r\n  margin-top: 0;\r\n  font-weight: 900;\r\n  font-size: 8vh;\r\n  line-height: 8vh;\r\n  white-space: nowrap;\r\n}\r\n\r\n@-webkit-keyframes about_tracking-in-contract-bck__34jcp {\r\n  0% {\r\n    letter-spacing: 1em;\r\n    -webkit-transform: translateZ(400px);\r\n    transform: translateZ(400px);\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0.6;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-moz-keyframes about_tracking-in-contract-bck__34jcp {\r\n  0% {\r\n    letter-spacing: 1em;\r\n    -webkit-transform: translateZ(400px);\r\n    -moz-transform: translateZ(400px);\r\n         transform: translateZ(400px);\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0.6;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateZ(0);\r\n    -moz-transform: translateZ(0);\r\n         transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes about_tracking-in-contract-bck__34jcp {\r\n  0% {\r\n    letter-spacing: 1em;\r\n    -webkit-transform: translateZ(400px);\r\n    -moz-transform: translateZ(400px);\r\n         transform: translateZ(400px);\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0.6;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateZ(0);\r\n    -moz-transform: translateZ(0);\r\n         transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.about_dev_img__trTXK {\r\n  width: 22vh;\r\n  height: 22vh;\r\n  background: url(\"/img/dev.gif\");\r\n  background-size: cover;\r\n  margin-left: 15vh;\r\n}\r\n\r\n.about_clock__3T1tn {\r\n  text-align: center;\r\n  font-size: 4vh;\r\n  font-weight: 900;\r\n  color: white;\r\n  height: 33vh;\r\n}\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2021-5-15 8:50:30\r\n * Licensed under FreeBSD License.\r\n * See http://animista.net/license for more info. \r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation fade-in\r\n * ----------------------------------------\r\n */\r\n@-webkit-keyframes about_fade-in__1LG7T {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n@-moz-keyframes about_fade-in__1LG7T {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n@keyframes about_fade-in__1LG7T {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes about_wobble-hor-bottom__Myn67 {\r\n  0%,\r\n  100% {\r\n    -webkit-transform: translateX(0%);\r\n    transform: translateX(0%);\r\n    -webkit-transform-origin: 50% 50%;\r\n    transform-origin: 50% 50%;\r\n  }\r\n  15% {\r\n    -webkit-transform: translateX(-30px) rotate(-6deg);\r\n    transform: translateX(-30px) rotate(-6deg);\r\n  }\r\n  30% {\r\n    -webkit-transform: translateX(15px) rotate(6deg);\r\n    transform: translateX(15px) rotate(6deg);\r\n  }\r\n  45% {\r\n    -webkit-transform: translateX(-15px) rotate(-3.6deg);\r\n    transform: translateX(-15px) rotate(-3.6deg);\r\n  }\r\n  60% {\r\n    -webkit-transform: translateX(9px) rotate(2.4deg);\r\n    transform: translateX(9px) rotate(2.4deg);\r\n  }\r\n  75% {\r\n    -webkit-transform: translateX(-6px) rotate(-1.2deg);\r\n    transform: translateX(-6px) rotate(-1.2deg);\r\n  }\r\n}\r\n@-moz-keyframes about_wobble-hor-bottom__Myn67 {\r\n  0%,\r\n  100% {\r\n    -webkit-transform: translateX(0%);\r\n    -moz-transform: translateX(0%);\r\n         transform: translateX(0%);\r\n    -webkit-transform-origin: 50% 50%;\r\n    -moz-transform-origin: 50% 50%;\r\n         transform-origin: 50% 50%;\r\n  }\r\n  15% {\r\n    -webkit-transform: translateX(-30px) rotate(-6deg);\r\n    -moz-transform: translateX(-30px) rotate(-6deg);\r\n         transform: translateX(-30px) rotate(-6deg);\r\n  }\r\n  30% {\r\n    -webkit-transform: translateX(15px) rotate(6deg);\r\n    -moz-transform: translateX(15px) rotate(6deg);\r\n         transform: translateX(15px) rotate(6deg);\r\n  }\r\n  45% {\r\n    -webkit-transform: translateX(-15px) rotate(-3.6deg);\r\n    -moz-transform: translateX(-15px) rotate(-3.6deg);\r\n         transform: translateX(-15px) rotate(-3.6deg);\r\n  }\r\n  60% {\r\n    -webkit-transform: translateX(9px) rotate(2.4deg);\r\n    -moz-transform: translateX(9px) rotate(2.4deg);\r\n         transform: translateX(9px) rotate(2.4deg);\r\n  }\r\n  75% {\r\n    -webkit-transform: translateX(-6px) rotate(-1.2deg);\r\n    -moz-transform: translateX(-6px) rotate(-1.2deg);\r\n         transform: translateX(-6px) rotate(-1.2deg);\r\n  }\r\n}\r\n@keyframes about_wobble-hor-bottom__Myn67 {\r\n  0%,\r\n  100% {\r\n    -webkit-transform: translateX(0%);\r\n    -moz-transform: translateX(0%);\r\n         transform: translateX(0%);\r\n    -webkit-transform-origin: 50% 50%;\r\n    -moz-transform-origin: 50% 50%;\r\n         transform-origin: 50% 50%;\r\n  }\r\n  15% {\r\n    -webkit-transform: translateX(-30px) rotate(-6deg);\r\n    -moz-transform: translateX(-30px) rotate(-6deg);\r\n         transform: translateX(-30px) rotate(-6deg);\r\n  }\r\n  30% {\r\n    -webkit-transform: translateX(15px) rotate(6deg);\r\n    -moz-transform: translateX(15px) rotate(6deg);\r\n         transform: translateX(15px) rotate(6deg);\r\n  }\r\n  45% {\r\n    -webkit-transform: translateX(-15px) rotate(-3.6deg);\r\n    -moz-transform: translateX(-15px) rotate(-3.6deg);\r\n         transform: translateX(-15px) rotate(-3.6deg);\r\n  }\r\n  60% {\r\n    -webkit-transform: translateX(9px) rotate(2.4deg);\r\n    -moz-transform: translateX(9px) rotate(2.4deg);\r\n         transform: translateX(9px) rotate(2.4deg);\r\n  }\r\n  75% {\r\n    -webkit-transform: translateX(-6px) rotate(-1.2deg);\r\n    -moz-transform: translateX(-6px) rotate(-1.2deg);\r\n         transform: translateX(-6px) rotate(-1.2deg);\r\n  }\r\n}\r\n\r\n.about_hero__2d149 {\r\n  background-image: -webkit-radial-gradient(50% 176%, #253854 80%, #061922 100%);\r\n  background-image: -moz-radial-gradient(50% 176%, #253854 80%, #061922 100%);\r\n  background-image: radial-gradient(50% 176%, #253854 80%, #061922 100%);\r\n  min-height: 100vh;\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  align-content: center;\r\n}\r\n.about_contents__2-hAl {\r\n  position: relative;\r\n  align-self: center;\r\n  padding: 3rem 0;\r\n}\r\n\r\n.about_snow__39uao {\r\n  position: absolute;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.about_snow__39uao .about_svg__2Jh4U {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#about_snow-top-layer__tOKc5 {\r\n  will-change: transform;\r\n  -webkit-transform: translateY(-768px);\r\n     -moz-transform: translateY(-768px);\r\n          transform: translateY(-768px);\r\n  -webkit-animation: about_fall__1RGLv 22.5s infinite linear;\r\n     -moz-animation: about_fall__1RGLv 22.5s infinite linear;\r\n          animation: about_fall__1RGLv 22.5s infinite linear;\r\n}\r\n\r\n#about_snow-bottom-layer__26_Rv {\r\n  will-change: transform;\r\n  -webkit-transform: translateY(-768px);\r\n     -moz-transform: translateY(-768px);\r\n          transform: translateY(-768px);\r\n  -webkit-animation: about_fall__1RGLv 45s infinite linear;\r\n     -moz-animation: about_fall__1RGLv 45s infinite linear;\r\n          animation: about_fall__1RGLv 45s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes about_fall__1RGLv {\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n}\r\n\r\n@-moz-keyframes about_fall__1RGLv {\r\n  100% {\r\n    -moz-transform: translateY(0);\r\n         transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes about_fall__1RGLv {\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n       -moz-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/about.module.css"],"names":[],"mappings":"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","sourcesContent":[".color {\r\n  width: 100%;\r\n  min-height: 60vh;\r\n  -webkit-animation: color-change-5x 15s linear infinite alternate both;\r\n  animation: color-change-5x 15s linear infinite alternate both;\r\n  padding: 1%;\r\n  display: flex;\r\n  box-shadow: 0 10px 20px -10px black;\r\n  height: 100vh;\r\n  flex-direction: column;\r\n}\r\n.buttonGroup {\r\n  float: right;\r\n  box-shadow: 0 10px 20px -10px black;\r\n  float: right;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  -webkit-animation: wobble-hor-bottom 0.8s 2s both;\r\n  animation: wobble-hor-bottom 0.8s 2s both;\r\n  border-radius: 10vh;\r\n  overflow: hidden;\r\n}\r\n.button {\r\n  font-size: 1vmax;\r\n  font-weight: 100;\r\n  padding: 1.5vmax;\r\n}\r\n@-webkit-keyframes color-change-5x {\r\n  0% {\r\n    background: #282c34;\r\n  }\r\n  25% {\r\n    background: #b22cff;\r\n  }\r\n  50% {\r\n    background: #ea2222;\r\n  }\r\n  75% {\r\n    background: #f5be10;\r\n  }\r\n  100% {\r\n    background: #82a9fb;\r\n  }\r\n}\r\n@keyframes color-change-5x {\r\n  0% {\r\n    background: #282c34;\r\n  }\r\n  25% {\r\n    background: #b22cff;\r\n  }\r\n  50% {\r\n    background: #ea2222;\r\n  }\r\n  75% {\r\n    background: #f5be10;\r\n  }\r\n  100% {\r\n    background: #82a9fb;\r\n  }\r\n}\r\n.text_container {\r\n  flex: 1 1 0;\r\n  color: white;\r\n  -webkit-animation: tracking-in-contract-bck 2s\r\n    cubic-bezier(0.215, 0.61, 0.355, 1) 1s both;\r\n  animation: tracking-in-contract-bck 2s cubic-bezier(0.215, 0.61, 0.355, 1) 1s\r\n    both;\r\n  font-size: 2vh;\r\n  margin: 4%;\r\n  font-weight: 600;\r\n  line-height: 2vh;\r\n  -ms-user-select: none;\r\n  -moz-user-select: -moz-none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.img {\r\n  flex: 1 1 1;\r\n  height: 30vh;\r\n  margin-left: auto;\r\n  -webkit-animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;\r\n  animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;\r\n}\r\n\r\n.title {\r\n  margin-top: 0;\r\n  font-weight: 900;\r\n  font-size: 8vh;\r\n  line-height: 8vh;\r\n  white-space: nowrap;\r\n}\r\n\r\n@-webkit-keyframes tracking-in-contract-bck {\r\n  0% {\r\n    letter-spacing: 1em;\r\n    -webkit-transform: translateZ(400px);\r\n    transform: translateZ(400px);\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0.6;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes tracking-in-contract-bck {\r\n  0% {\r\n    letter-spacing: 1em;\r\n    -webkit-transform: translateZ(400px);\r\n    transform: translateZ(400px);\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0.6;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.dev_img {\r\n  width: 22vh;\r\n  height: 22vh;\r\n  background: url(\"/img/dev.gif\");\r\n  background-size: cover;\r\n  margin-left: 15vh;\r\n}\r\n\r\n.clock {\r\n  text-align: center;\r\n  font-size: 4vh;\r\n  font-weight: 900;\r\n  color: white;\r\n  height: 33vh;\r\n}\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2021-5-15 8:50:30\r\n * Licensed under FreeBSD License.\r\n * See http://animista.net/license for more info. \r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation fade-in\r\n * ----------------------------------------\r\n */\r\n@-webkit-keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n@keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes wobble-hor-bottom {\r\n  0%,\r\n  100% {\r\n    -webkit-transform: translateX(0%);\r\n    transform: translateX(0%);\r\n    -webkit-transform-origin: 50% 50%;\r\n    transform-origin: 50% 50%;\r\n  }\r\n  15% {\r\n    -webkit-transform: translateX(-30px) rotate(-6deg);\r\n    transform: translateX(-30px) rotate(-6deg);\r\n  }\r\n  30% {\r\n    -webkit-transform: translateX(15px) rotate(6deg);\r\n    transform: translateX(15px) rotate(6deg);\r\n  }\r\n  45% {\r\n    -webkit-transform: translateX(-15px) rotate(-3.6deg);\r\n    transform: translateX(-15px) rotate(-3.6deg);\r\n  }\r\n  60% {\r\n    -webkit-transform: translateX(9px) rotate(2.4deg);\r\n    transform: translateX(9px) rotate(2.4deg);\r\n  }\r\n  75% {\r\n    -webkit-transform: translateX(-6px) rotate(-1.2deg);\r\n    transform: translateX(-6px) rotate(-1.2deg);\r\n  }\r\n}\r\n@keyframes wobble-hor-bottom {\r\n  0%,\r\n  100% {\r\n    -webkit-transform: translateX(0%);\r\n    transform: translateX(0%);\r\n    -webkit-transform-origin: 50% 50%;\r\n    transform-origin: 50% 50%;\r\n  }\r\n  15% {\r\n    -webkit-transform: translateX(-30px) rotate(-6deg);\r\n    transform: translateX(-30px) rotate(-6deg);\r\n  }\r\n  30% {\r\n    -webkit-transform: translateX(15px) rotate(6deg);\r\n    transform: translateX(15px) rotate(6deg);\r\n  }\r\n  45% {\r\n    -webkit-transform: translateX(-15px) rotate(-3.6deg);\r\n    transform: translateX(-15px) rotate(-3.6deg);\r\n  }\r\n  60% {\r\n    -webkit-transform: translateX(9px) rotate(2.4deg);\r\n    transform: translateX(9px) rotate(2.4deg);\r\n  }\r\n  75% {\r\n    -webkit-transform: translateX(-6px) rotate(-1.2deg);\r\n    transform: translateX(-6px) rotate(-1.2deg);\r\n  }\r\n}\r\n\r\n.hero {\r\n  background-image: radial-gradient(50% 176%, #253854 80%, #061922 100%);\r\n  min-height: 100vh;\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n.contents {\r\n  position: relative;\r\n  align-self: center;\r\n  padding: 3rem 0;\r\n}\r\n\r\n.snow {\r\n  position: absolute;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.snow .svg {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#snow-top-layer {\r\n  will-change: transform;\r\n  transform: translateY(-768px);\r\n  animation: fall 22.5s infinite linear;\r\n}\r\n\r\n#snow-bottom-layer {\r\n  will-change: transform;\r\n  transform: translateY(-768px);\r\n  animation: fall 45s infinite linear;\r\n}\r\n\r\n@keyframes fall {\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"color": "about_color__bntN-",
	"color-change-5x": "about_color-change-5x__QqNJR",
	"buttonGroup": "about_buttonGroup__o8sTG",
	"wobble-hor-bottom": "about_wobble-hor-bottom__Myn67",
	"button": "about_button__1anlT",
	"text_container": "about_text_container__3xJM7",
	"tracking-in-contract-bck": "about_tracking-in-contract-bck__34jcp",
	"img": "about_img__hggWg",
	"fade-in": "about_fade-in__1LG7T",
	"title": "about_title__3l4Kx",
	"dev_img": "about_dev_img__trTXK",
	"clock": "about_clock__3T1tn",
	"hero": "about_hero__2d149",
	"contents": "about_contents__2-hAl",
	"snow": "about_snow__39uao",
	"svg": "about_svg__2Jh4U",
	"snow-top-layer": "about_snow-top-layer__tOKc5",
	"fall": "about_fall__1RGLv",
	"snow-bottom-layer": "about_snow-bottom-layer__26_Rv"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQudHN4Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvYWJvdXQubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJzaW5jZSIsIkRhdGUiLCJ0b2RheSIsInRlc3QiLCJNYXRoIiwiY2VpbCIsImdldFRpbWUiLCJBYm91dCIsInVzZVN0YXRlIiwiZERheSIsInNldERkYXkiLCJzZXRUaW1lb3V0IiwibGVvbiIsImNhbnZhcyIsImN0eCIsInN3Iiwic2giLCJwaXhlbFJhdGlvIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBSUEsSUFBTUEsS0FBSyxHQUFHLElBQUlDLElBQUosQ0FBUyxVQUFULENBQWQ7QUFDQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUQsSUFBSixFQUFkO0FBQ0EsSUFBTUUsSUFBSSxHQUNSQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFDSCxLQUFLLENBQUNJLE9BQU4sS0FBa0JOLEtBQUssQ0FBQ00sT0FBTixFQUFuQixLQUF1QyxPQUFPLElBQVAsR0FBYyxFQUFyRCxDQUFWLElBQXNFLEdBRHhFO0FBRWUsU0FBU0MsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUNOQywrQ0FBUSxDQUFDLENBQUQsQ0FERjtBQUFBLE1BQ3ZCQyxJQUR1QjtBQUFBLE1BQ2pCQyxPQURpQjs7QUFFOUIsTUFBSUQsSUFBSSxHQUFHTixJQUFYLEVBQ0VRLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZELFdBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNELEdBRlMsRUFFUCxFQUZPLENBQVY7QUFHRixNQUFJRyxJQUFKLEVBQVVDLE1BQVYsRUFBa0JDLEdBQWxCO0FBRUEsTUFBTUMsRUFBRSxHQUFHLEdBQVg7QUFDQSxNQUFNQyxFQUFFLEdBQUcsR0FBWDtBQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUFuQjtBQUVBLFNBQ0U7QUFBUyxhQUFTLEVBQUVDLHVFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVBLHNFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVBLHNFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUMsNEJBRFI7QUFFRSxXQUFPLEVBQUMsZUFGVjtBQUdFLHVCQUFtQixFQUFDLGdCQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBRyxRQUFJLEVBQUMsTUFBUjtBQUFlLG9CQUFhLEtBQTVCO0FBQWtDLGFBQVMsRUFBQyxrQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsTUFBRSxFQUFDLG1CQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFTLE1BQUUsRUFBQyxHQUFaO0FBQWdCLE1BQUUsRUFBQyxRQUFuQjtBQUE0QixNQUFFLEVBQUMsR0FBL0I7QUFBbUMsTUFBRSxFQUFDLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLFFBQXJCO0FBQThCLE1BQUUsRUFBQyxHQUFqQztBQUFxQyxNQUFFLEVBQUMsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsUUFBckI7QUFBOEIsTUFBRSxFQUFDLEdBQWpDO0FBQXFDLE1BQUUsRUFBQyxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFTLE1BQUUsRUFBQyxLQUFaO0FBQWtCLE1BQUUsRUFBQyxRQUFyQjtBQUE4QixNQUFFLEVBQUMsR0FBakM7QUFBcUMsTUFBRSxFQUFDLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLFFBQXJCO0FBQThCLE1BQUUsRUFBQyxHQUFqQztBQUFxQyxNQUFFLEVBQUMsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsUUFBckI7QUFBOEIsTUFBRSxFQUFDLEdBQWpDO0FBQXFDLE1BQUUsRUFBQyxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRTtBQUFTLE1BQUUsRUFBQyxLQUFaO0FBQWtCLE1BQUUsRUFBQyxRQUFyQjtBQUE4QixNQUFFLEVBQUMsR0FBakM7QUFBcUMsTUFBRSxFQUFDLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLFFBQXJCO0FBQThCLE1BQUUsRUFBQyxHQUFqQztBQUFxQyxNQUFFLEVBQUMsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0U7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsUUFBckI7QUFBOEIsTUFBRSxFQUFDLEdBQWpDO0FBQXFDLE1BQUUsRUFBQyxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRTtBQUFTLE1BQUUsRUFBQyxLQUFaO0FBQWtCLE1BQUUsRUFBQyxRQUFyQjtBQUE4QixNQUFFLEVBQUMsR0FBakM7QUFBcUMsTUFBRSxFQUFDLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLE9BQXJCO0FBQTZCLE1BQUUsRUFBQyxHQUFoQztBQUFvQyxNQUFFLEVBQUMsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUU7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsT0FBckI7QUFBNkIsTUFBRSxFQUFDLEdBQWhDO0FBQW9DLE1BQUUsRUFBQyxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhRTtBQUFTLE1BQUUsRUFBQyxLQUFaO0FBQWtCLE1BQUUsRUFBQyxPQUFyQjtBQUE2QixNQUFFLEVBQUMsR0FBaEM7QUFBb0MsTUFBRSxFQUFDLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQWNFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLFFBQXJCO0FBQThCLE1BQUUsRUFBQyxHQUFqQztBQUFxQyxNQUFFLEVBQUMsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLEVBZUU7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsT0FBckI7QUFBNkIsTUFBRSxFQUFDLEdBQWhDO0FBQW9DLE1BQUUsRUFBQyxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFnQkU7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsUUFBckI7QUFBOEIsTUFBRSxFQUFDLEdBQWpDO0FBQXFDLE1BQUUsRUFBQyxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLEVBaUJFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLFFBQXJCO0FBQThCLE1BQUUsRUFBQyxHQUFqQztBQUFxQyxNQUFFLEVBQUMsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixFQWtCRTtBQUFTLE1BQUUsRUFBQyxLQUFaO0FBQWtCLE1BQUUsRUFBQyxPQUFyQjtBQUE2QixNQUFFLEVBQUMsR0FBaEM7QUFBb0MsTUFBRSxFQUFDLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkYsRUFtQkU7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsUUFBckI7QUFBOEIsTUFBRSxFQUFDLEdBQWpDO0FBQXFDLE1BQUUsRUFBQyxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLEVBb0JFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLFFBQXJCO0FBQThCLE1BQUUsRUFBQyxHQUFqQztBQUFxQyxNQUFFLEVBQUMsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCRixFQXFCRTtBQUFTLE1BQUUsRUFBQyxHQUFaO0FBQWdCLE1BQUUsRUFBQyxPQUFuQjtBQUEyQixNQUFFLEVBQUMsR0FBOUI7QUFBa0MsTUFBRSxFQUFDLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsRUFzQkU7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsT0FBckI7QUFBNkIsTUFBRSxFQUFDLEdBQWhDO0FBQW9DLE1BQUUsRUFBQyxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJGLEVBdUJFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLE9BQXJCO0FBQTZCLE1BQUUsRUFBQyxHQUFoQztBQUFvQyxNQUFFLEVBQUMsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixFQXdCRTtBQUFTLE1BQUUsRUFBQyxLQUFaO0FBQWtCLE1BQUUsRUFBQyxPQUFyQjtBQUE2QixNQUFFLEVBQUMsR0FBaEM7QUFBb0MsTUFBRSxFQUFDLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkYsRUF5QkU7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsT0FBckI7QUFBNkIsTUFBRSxFQUFDLEdBQWhDO0FBQW9DLE1BQUUsRUFBQyxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekJGLEVBMEJFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLE9BQXJCO0FBQTZCLE1BQUUsRUFBQyxHQUFoQztBQUFvQyxNQUFFLEVBQUMsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCRixFQTJCRTtBQUFTLE1BQUUsRUFBQyxLQUFaO0FBQWtCLE1BQUUsRUFBQyxPQUFyQjtBQUE2QixNQUFFLEVBQUMsR0FBaEM7QUFBb0MsTUFBRSxFQUFDLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkYsRUE0QkU7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsT0FBckI7QUFBNkIsTUFBRSxFQUFDLEdBQWhDO0FBQW9DLE1BQUUsRUFBQyxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUJGLEVBNkJFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLE9BQXJCO0FBQTZCLE1BQUUsRUFBQyxHQUFoQztBQUFvQyxNQUFFLEVBQUMsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdCRixFQThCRTtBQUFTLE1BQUUsRUFBQyxLQUFaO0FBQWtCLE1BQUUsRUFBQyxPQUFyQjtBQUE2QixNQUFFLEVBQUMsR0FBaEM7QUFBb0MsTUFBRSxFQUFDLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkYsRUErQkU7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsS0FBckI7QUFBMkIsTUFBRSxFQUFDLEdBQTlCO0FBQWtDLE1BQUUsRUFBQyxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0JGLEVBZ0NFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLE9BQXJCO0FBQTZCLE1BQUUsRUFBQyxHQUFoQztBQUFvQyxNQUFFLEVBQUMsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhDRixFQWlDRTtBQUFTLE1BQUUsRUFBQyxLQUFaO0FBQWtCLE1BQUUsRUFBQyxNQUFyQjtBQUE0QixNQUFFLEVBQUMsR0FBL0I7QUFBbUMsTUFBRSxFQUFDLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0YsRUFrQ0U7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsT0FBckI7QUFBNkIsTUFBRSxFQUFDLEdBQWhDO0FBQW9DLE1BQUUsRUFBQyxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENGLEVBbUNFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLE1BQXJCO0FBQTRCLE1BQUUsRUFBQyxHQUEvQjtBQUFtQyxNQUFFLEVBQUMsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5DRixFQW9DRTtBQUFTLE1BQUUsRUFBQyxLQUFaO0FBQWtCLE1BQUUsRUFBQyxPQUFyQjtBQUE2QixNQUFFLEVBQUMsR0FBaEM7QUFBb0MsTUFBRSxFQUFDLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQ0YsRUFxQ0U7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsT0FBckI7QUFBNkIsTUFBRSxFQUFDLEdBQWhDO0FBQW9DLE1BQUUsRUFBQyxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNGLEVBc0NFO0FBQVMsTUFBRSxFQUFDLEtBQVo7QUFBa0IsTUFBRSxFQUFDLE9BQXJCO0FBQTZCLE1BQUUsRUFBQyxHQUFoQztBQUFvQyxNQUFFLEVBQUMsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRDRixFQXVDRTtBQUFTLE1BQUUsRUFBQyxLQUFaO0FBQWtCLE1BQUUsRUFBQyxPQUFyQjtBQUE2QixNQUFFLEVBQUMsR0FBaEM7QUFBb0MsTUFBRSxFQUFDLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2Q0YsRUF3Q0U7QUFBUyxNQUFFLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsT0FBckI7QUFBNkIsTUFBRSxFQUFDLEdBQWhDO0FBQW9DLE1BQUUsRUFBQyxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeENGLENBREYsQ0FMRixFQWlERTtBQUFHLFFBQUksRUFBQyxNQUFSO0FBQWUsb0JBQWEsSUFBNUI7QUFBaUMsYUFBUyxFQUFDLGtCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxNQUFFLEVBQUMsZ0JBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsTUFBRSxFQUFDLEdBQVg7QUFBZSxNQUFFLEVBQUMsS0FBbEI7QUFBd0IsS0FBQyxFQUFDLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVEsTUFBRSxFQUFDLEtBQVg7QUFBaUIsTUFBRSxFQUFDLEtBQXBCO0FBQTBCLEtBQUMsRUFBQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFRLE1BQUUsRUFBQyxLQUFYO0FBQWlCLE1BQUUsRUFBQyxLQUFwQjtBQUEwQixLQUFDLEVBQUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBUSxNQUFFLEVBQUMsS0FBWDtBQUFpQixNQUFFLEVBQUMsTUFBcEI7QUFBMkIsS0FBQyxFQUFDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQVEsTUFBRSxFQUFDLEtBQVg7QUFBaUIsTUFBRSxFQUFDLEtBQXBCO0FBQTBCLEtBQUMsRUFBQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUNFLE1BQUUsRUFBQyxLQURMO0FBRUUsTUFBRSxFQUFDLE1BRkw7QUFHRSxLQUFDLEVBQUMsR0FISjtBQUlFLGFBQVMsRUFBQyxzQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFZRTtBQUNFLE1BQUUsRUFBQyxLQURMO0FBRUUsTUFBRSxFQUFDLE1BRkw7QUFHRSxLQUFDLEVBQUMsR0FISjtBQUlFLGFBQVMsRUFBQyxzQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFrQkU7QUFDRSxNQUFFLEVBQUMsS0FETDtBQUVFLE1BQUUsRUFBQyxNQUZMO0FBR0UsS0FBQyxFQUFDLEdBSEo7QUFJRSxhQUFTLEVBQUMsc0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixFQXdCRTtBQUNFLE1BQUUsRUFBQyxLQURMO0FBRUUsTUFBRSxFQUFDLE1BRkw7QUFHRSxLQUFDLEVBQUMsR0FISjtBQUlFLGFBQVMsRUFBQyxzQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEJGLEVBOEJFO0FBQ0UsTUFBRSxFQUFDLElBREw7QUFFRSxNQUFFLEVBQUMsTUFGTDtBQUdFLEtBQUMsRUFBQyxHQUhKO0FBSUUsYUFBUyxFQUFDLHFCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkYsRUFvQ0U7QUFBUSxNQUFFLEVBQUMsR0FBWDtBQUFlLE1BQUUsRUFBQyxHQUFsQjtBQUFzQixLQUFDLEVBQUMsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBDRixFQXFDRTtBQUFRLE1BQUUsRUFBQyxLQUFYO0FBQWlCLE1BQUUsRUFBQyxLQUFwQjtBQUEwQixLQUFDLEVBQUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJDRixFQXNDRTtBQUFRLE1BQUUsRUFBQyxLQUFYO0FBQWlCLE1BQUUsRUFBQyxJQUFwQjtBQUF5QixLQUFDLEVBQUMsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRDRixFQXVDRTtBQUFRLE1BQUUsRUFBQyxLQUFYO0FBQWlCLE1BQUUsRUFBQyxLQUFwQjtBQUEwQixLQUFDLEVBQUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDRixFQXdDRTtBQUFRLE1BQUUsRUFBQyxLQUFYO0FBQWlCLE1BQUUsRUFBQyxLQUFwQjtBQUEwQixLQUFDLEVBQUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhDRixFQXlDRTtBQUNFLE1BQUUsRUFBQyxLQURMO0FBRUUsTUFBRSxFQUFDLEtBRkw7QUFHRSxLQUFDLEVBQUMsR0FISjtBQUlFLGFBQVMsRUFBQyxxQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekNGLEVBK0NFO0FBQ0UsTUFBRSxFQUFDLEtBREw7QUFFRSxNQUFFLEVBQUMsS0FGTDtBQUdFLEtBQUMsRUFBQyxHQUhKO0FBSUUsYUFBUyxFQUFDLHFCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQ0YsRUFxREU7QUFDRSxNQUFFLEVBQUMsS0FETDtBQUVFLE1BQUUsRUFBQyxLQUZMO0FBR0UsS0FBQyxFQUFDLEdBSEo7QUFJRSxhQUFTLEVBQUMscUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJERixFQTJERTtBQUNFLE1BQUUsRUFBQyxLQURMO0FBRUUsTUFBRSxFQUFDLEtBRkw7QUFHRSxLQUFDLEVBQUMsR0FISjtBQUlFLGFBQVMsRUFBQyxxQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0RGLEVBaUVFO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsTUFBRSxFQUFDLEtBQW5CO0FBQXlCLEtBQUMsRUFBQyxHQUEzQjtBQUErQixhQUFTLEVBQUMsb0JBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqRUYsQ0FERixDQWpERixDQURGLENBREYsRUEySEU7QUFBSyxhQUFTLEVBQUVBLDBFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQTNIRixDQURGLEVBZ0lFO0FBQUssYUFBUyxFQUFFQSxnRkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFRTtBQUFLLGFBQVMsRUFBRUEsdUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLFlBRkYsQ0FoSUYsRUF3SUU7QUFBSyxhQUFTLEVBQUVBLHVFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixRQUdLVCxJQUhMLENBeElGLEVBNklFO0FBQUssT0FBRyxFQUFDLGFBQVQ7QUFBdUIsYUFBUyxFQUFFUyxxRUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdJRixDQURGO0FBaUpEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBbkx3QlgsSzs7S0FBQUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p4QjtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsK0RBQStELGtCQUFrQix1QkFBdUIseUZBQXlGLHNGQUFzRixzRkFBc0Ysa0JBQWtCLHdCQUF3QixvQkFBb0Isa0RBQWtELGtEQUFrRCxvQkFBb0IsZ0NBQWdDLGlDQUFpQyxrQ0FBa0MsS0FBSywrQkFBK0IsbUJBQW1CLGtEQUFrRCxrREFBa0QsbUJBQW1CLHdCQUF3Qix5QkFBeUIsdUJBQXVCLDBCQUEwQixxRUFBcUUsa0VBQWtFLGtFQUFrRSwwQkFBMEIsdUJBQXVCLEtBQUssMEJBQTBCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLEtBQUsscURBQXFELFVBQVUsNEJBQTRCLE9BQU8sV0FBVyw0QkFBNEIsT0FBTyxXQUFXLDRCQUE0QixPQUFPLFdBQVcsNEJBQTRCLE9BQU8sWUFBWSw0QkFBNEIsT0FBTyxLQUFLLGtEQUFrRCxVQUFVLDRCQUE0QixPQUFPLFdBQVcsNEJBQTRCLE9BQU8sV0FBVyw0QkFBNEIsT0FBTyxXQUFXLDRCQUE0QixPQUFPLFlBQVksNEJBQTRCLE9BQU8sS0FBSyw2Q0FBNkMsVUFBVSw0QkFBNEIsT0FBTyxXQUFXLDRCQUE0QixPQUFPLFdBQVcsNEJBQTRCLE9BQU8sV0FBVyw0QkFBNEIsT0FBTyxZQUFZLDRCQUE0QixPQUFPLEtBQUssa0NBQWtDLHVCQUF1QixxQkFBcUIsbUJBQW1CLHFIQUFxSCxrSEFBa0gsa0hBQWtILHFCQUFxQixpQkFBaUIsdUJBQXVCLHVCQUF1Qiw0QkFBNEIsa0NBQWtDLGdDQUFnQyx3QkFBd0IsS0FBSywyQkFBMkIsdUJBQXVCLHVCQUF1QixtQkFBbUIsd0JBQXdCLDZGQUE2RiwwRkFBMEYsMEZBQTBGLEtBQUssNkJBQTZCLG9CQUFvQix1QkFBdUIscUJBQXFCLHVCQUF1QiwwQkFBMEIsS0FBSyxrRUFBa0UsVUFBVSw0QkFBNEIsNkNBQTZDLHFDQUFxQyxtQkFBbUIsT0FBTyxXQUFXLHFCQUFxQixPQUFPLFlBQVkseUNBQXlDLGlDQUFpQyxtQkFBbUIsT0FBTyxLQUFLLDJEQUEyRCxVQUFVLDRCQUE0Qiw2Q0FBNkMsMENBQTBDLDBDQUEwQyxtQkFBbUIsT0FBTyxXQUFXLHFCQUFxQixPQUFPLFlBQVkseUNBQXlDLHNDQUFzQyxzQ0FBc0MsbUJBQW1CLE9BQU8sS0FBSyxzREFBc0QsVUFBVSw0QkFBNEIsNkNBQTZDLDBDQUEwQywwQ0FBMEMsbUJBQW1CLE9BQU8sV0FBVyxxQkFBcUIsT0FBTyxZQUFZLHlDQUF5QyxzQ0FBc0Msc0NBQXNDLG1CQUFtQixPQUFPLEtBQUssK0JBQStCLGtCQUFrQixtQkFBbUIsd0NBQXdDLDZCQUE2Qix3QkFBd0IsS0FBSyw2QkFBNkIseUJBQXlCLHFCQUFxQix1QkFBdUIsbUJBQW1CLG1CQUFtQixLQUFLLGllQUFpZSxVQUFVLG1CQUFtQixPQUFPLFlBQVkscUJBQXFCLE9BQU8sS0FBSywwQ0FBMEMsVUFBVSxtQkFBbUIsT0FBTyxZQUFZLHFCQUFxQixPQUFPLEtBQUsscUNBQXFDLFVBQVUsbUJBQW1CLE9BQU8sWUFBWSxxQkFBcUIsT0FBTyxLQUFLLDJEQUEyRCxxQkFBcUIsMENBQTBDLGtDQUFrQywwQ0FBMEMsa0NBQWtDLE9BQU8sV0FBVywyREFBMkQsbURBQW1ELE9BQU8sV0FBVyx5REFBeUQsaURBQWlELE9BQU8sV0FBVyw2REFBNkQscURBQXFELE9BQU8sV0FBVywwREFBMEQsa0RBQWtELE9BQU8sV0FBVyw0REFBNEQsb0RBQW9ELE9BQU8sS0FBSyxvREFBb0QscUJBQXFCLDBDQUEwQyx1Q0FBdUMsdUNBQXVDLDBDQUEwQyx1Q0FBdUMsdUNBQXVDLE9BQU8sV0FBVywyREFBMkQsd0RBQXdELHdEQUF3RCxPQUFPLFdBQVcseURBQXlELHNEQUFzRCxzREFBc0QsT0FBTyxXQUFXLDZEQUE2RCwwREFBMEQsMERBQTBELE9BQU8sV0FBVywwREFBMEQsdURBQXVELHVEQUF1RCxPQUFPLFdBQVcsNERBQTRELHlEQUF5RCx5REFBeUQsT0FBTyxLQUFLLCtDQUErQyxxQkFBcUIsMENBQTBDLHVDQUF1Qyx1Q0FBdUMsMENBQTBDLHVDQUF1Qyx1Q0FBdUMsT0FBTyxXQUFXLDJEQUEyRCx3REFBd0Qsd0RBQXdELE9BQU8sV0FBVyx5REFBeUQsc0RBQXNELHNEQUFzRCxPQUFPLFdBQVcsNkRBQTZELDBEQUEwRCwwREFBMEQsT0FBTyxXQUFXLDBEQUEwRCx1REFBdUQsdURBQXVELE9BQU8sV0FBVyw0REFBNEQseURBQXlELHlEQUF5RCxPQUFPLEtBQUssNEJBQTRCLHFGQUFxRixrRkFBa0YsNkVBQTZFLHdCQUF3Qix5QkFBeUIsdUJBQXVCLHdCQUF3QixvQkFBb0IsNEJBQTRCLG1DQUFtQyw0QkFBNEIsS0FBSyw0QkFBNEIseUJBQXlCLHlCQUF5QixzQkFBc0IsS0FBSyw0QkFBNEIseUJBQXlCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLGtCQUFrQixhQUFhLGNBQWMsS0FBSyw4Q0FBOEMseUJBQXlCLGtCQUFrQixtQkFBbUIsS0FBSyxzQ0FBc0MsNkJBQTZCLDRDQUE0Qyw0Q0FBNEMsNENBQTRDLGlFQUFpRSxpRUFBaUUsaUVBQWlFLEtBQUsseUNBQXlDLDZCQUE2Qiw0Q0FBNEMsNENBQTRDLDRDQUE0QywrREFBK0QsK0RBQStELCtEQUErRCxLQUFLLDhDQUE4QyxZQUFZLHlDQUF5Qyx5Q0FBeUMsT0FBTyxLQUFLLDJDQUEyQyxZQUFZLHNDQUFzQyxzQ0FBc0MsT0FBTyxLQUFLLHNDQUFzQyxZQUFZLHlDQUF5Qyx5Q0FBeUMseUNBQXlDLE9BQU8sS0FBSyxXQUFXLHdGQUF3RixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLE9BQU8sTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLFNBQVMsUUFBUSxTQUFTLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFB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QUFPLFdBQVcseURBQXlELGlEQUFpRCxPQUFPLFdBQVcsNkRBQTZELHFEQUFxRCxPQUFPLFdBQVcsMERBQTBELGtEQUFrRCxPQUFPLFdBQVcsNERBQTRELG9EQUFvRCxPQUFPLEtBQUssa0NBQWtDLHFCQUFxQiwwQ0FBMEMsa0NBQWtDLDBDQUEwQyxrQ0FBa0MsT0FBTyxXQUFXLDJEQUEyRCxtREFBbUQsT0FBTyxXQUFXLHlEQUF5RCxpREFBaUQsT0FBTyxXQUFXLDZEQUE2RCxxREFBcUQsT0FBTyxXQUFXLDBEQUEwRCxrREFBa0QsT0FBTyxXQUFXLDREQUE0RCxvREFBb0QsT0FBTyxLQUFLLGVBQWUsNkVBQTZFLHdCQUF3Qix5QkFBeUIsdUJBQXVCLG9CQUFvQiw4QkFBOEIsNEJBQTRCLEtBQUssZUFBZSx5QkFBeUIseUJBQXlCLHNCQUFzQixLQUFLLGVBQWUseUJBQXlCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLGtCQUFrQixhQUFhLGNBQWMsS0FBSyxvQkFBb0IseUJBQXlCLGtCQUFrQixtQkFBbUIsS0FBSyx5QkFBeUIsNkJBQTZCLG9DQUFvQyw0Q0FBNEMsS0FBSyw0QkFBNEIsNkJBQTZCLG9DQUFvQywwQ0FBMEMsS0FBSyx5QkFBeUIsWUFBWSxpQ0FBaUMsT0FBTyxLQUFLLHVCQUF1QjtBQUMvNHBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuM2E1NjhhMmQ3NDM3ODQ4NzlhYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LnRzeFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Fib3V0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgVG9iQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL1RvcGJhclwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGJhc2UgZnJvbSBcIi4uL3N0eWxlcy9iYXNlLm1vZHVsZS5jc3NcIjtcclxuY29uc3Qgc2luY2UgPSBuZXcgRGF0ZShcIjIwMDgtMi05XCIpO1xyXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbmNvbnN0IHRlc3QgPVxyXG4gIE1hdGguY2VpbCgodG9kYXkuZ2V0VGltZSgpIC0gc2luY2UuZ2V0VGltZSgpKSAvICgxMDAwICogMzYwMCAqIDI0KSkgJSAzNjU7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gIGNvbnN0IFtkRGF5LCBzZXREZGF5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGlmIChkRGF5IDwgdGVzdClcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXREZGF5KGREYXkgKyAxKTtcclxuICAgIH0sIDEwKTtcclxuICBsZXQgbGVvbiwgY2FudmFzLCBjdHg7XHJcblxyXG4gIGNvbnN0IHN3ID0gODAwO1xyXG4gIGNvbnN0IHNoID0gNjAwO1xyXG4gIGNvbnN0IHBpeGVsUmF0aW8gPSAyO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29sb3J9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc25vd30+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTUzNlwiXHJcbiAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1heCBzbGljZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxnIGZpbGw9XCIjRkZGXCIgZmlsbC1vcGFjaXR5PVwiLjE1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU1IDQyKVwiPlxyXG4gICAgICAgICAgICAgIDxnIGlkPVwic25vdy1ib3R0b20tbGF5ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiNlwiIGN5PVwiMTAwOS41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIxMzhcIiBjeT1cIjExMTAuNVwiIHJ4PVwiNlwiIHJ5PVwiNS41XCIgLz5cclxuICAgICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMzk4XCIgY3k9XCIxMDU1LjVcIiByeD1cIjZcIiByeT1cIjUuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjcxOVwiIGN5PVwiMTI4NC41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCI3NjBcIiBjeT1cIjExNTUuNVwiIHJ4PVwiNlwiIHJ5PVwiNS41XCIgLz5cclxuICAgICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiNjM1XCIgY3k9XCIxNDU5LjVcIiByeD1cIjZcIiByeT1cIjUuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjQ3OFwiIGN5PVwiMTMzNS41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIzMjJcIiBjeT1cIjE0MTQuNVwiIHJ4PVwiNlwiIHJ5PVwiNS41XCIgLz5cclxuICAgICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMjQ3XCIgY3k9XCIxMjM0LjVcIiByeD1cIjZcIiByeT1cIjUuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjE1NFwiIGN5PVwiMTQyNS41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCI3MzFcIiBjeT1cIjc3My41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCI1OTlcIiBjeT1cIjg3NC41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIzMzlcIiBjeT1cIjgxOS41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIyMzlcIiBjeT1cIjEwMDQuNVwiIHJ4PVwiNlwiIHJ5PVwiNS41XCIgLz5cclxuICAgICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMTEzXCIgY3k9XCI4NjMuNVwiIHJ4PVwiNlwiIHJ5PVwiNS41XCIgLz5cclxuICAgICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMTAyXCIgY3k9XCIxMjIzLjVcIiByeD1cIjZcIiByeT1cIjUuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjM5NVwiIGN5PVwiMTE1NS41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCI4MjZcIiBjeT1cIjk0My41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCI2MjZcIiBjeT1cIjEwNTQuNVwiIHJ4PVwiNlwiIHJ5PVwiNS41XCIgLz5cclxuICAgICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiODg3XCIgY3k9XCIxMzY2LjVcIiByeD1cIjZcIiByeT1cIjUuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjZcIiBjeT1cIjI0MS41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIxMzhcIiBjeT1cIjM0Mi41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIzOThcIiBjeT1cIjI4Ny41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCI3MTlcIiBjeT1cIjUxNi41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCI3NjBcIiBjeT1cIjM4Ny41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCI2MzVcIiBjeT1cIjY5MS41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCI0NzhcIiBjeT1cIjU2Ny41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIzMjJcIiBjeT1cIjY0Ni41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIyNDdcIiBjeT1cIjQ2Ni41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIxNTRcIiBjeT1cIjY1Ny41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCI3MzFcIiBjeT1cIjUuNVwiIHJ4PVwiNlwiIHJ5PVwiNS41XCIgLz5cclxuICAgICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiNTk5XCIgY3k9XCIxMDYuNVwiIHJ4PVwiNlwiIHJ5PVwiNS41XCIgLz5cclxuICAgICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMzM5XCIgY3k9XCI1MS41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIyMzlcIiBjeT1cIjIzNi41XCIgcng9XCI2XCIgcnk9XCI1LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIxMTNcIiBjeT1cIjk1LjVcIiByeD1cIjZcIiByeT1cIjUuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjEwMlwiIGN5PVwiNDU1LjVcIiByeD1cIjZcIiByeT1cIjUuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjM5NVwiIGN5PVwiMzg3LjVcIiByeD1cIjZcIiByeT1cIjUuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjgyNlwiIGN5PVwiMTc1LjVcIiByeD1cIjZcIiByeT1cIjUuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjYyNlwiIGN5PVwiMjg2LjVcIiByeD1cIjZcIiByeT1cIjUuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjg4N1wiIGN5PVwiNTk4LjVcIiByeD1cIjZcIiByeT1cIjUuNVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDxnIGZpbGw9XCIjRkZGXCIgZmlsbC1vcGFjaXR5PVwiLjNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNjUgNjMpXCI+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJzbm93LXRvcC1sYXllclwiPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjhcIiBjeT1cIjc3NlwiIHI9XCI4XCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxODlcIiBjeT1cIjkyNVwiIHI9XCI4XCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1NDhcIiBjeT1cIjg0NFwiIHI9XCI4XCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI2ODVcIiBjeT1cIjExMTVcIiByPVwiOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiODU4XCIgY3k9XCI5MDlcIiByPVwiOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgIGN4PVwiODc0XCJcclxuICAgICAgICAgICAgICAgICAgY3k9XCIxNDM4XCJcclxuICAgICAgICAgICAgICAgICAgcj1cIjhcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMTgwIDg3NCAxNDM4KVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICBjeD1cIjY1N1wiXHJcbiAgICAgICAgICAgICAgICAgIGN5PVwiMTI1NlwiXHJcbiAgICAgICAgICAgICAgICAgIHI9XCI4XCJcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDE4MCA2NTcgMTI1NilcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgY3g9XCI0NDNcIlxyXG4gICAgICAgICAgICAgICAgICBjeT1cIjEzNzJcIlxyXG4gICAgICAgICAgICAgICAgICByPVwiOFwiXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgxODAgNDQzIDEzNzIpXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgIGN4PVwiMzM5XCJcclxuICAgICAgICAgICAgICAgICAgY3k9XCIxMTA3XCJcclxuICAgICAgICAgICAgICAgICAgcj1cIjhcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMTgwIDMzOSAxMTA3KVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICBjeD1cIjI0XCJcclxuICAgICAgICAgICAgICAgICAgY3k9XCIxMzA1XCJcclxuICAgICAgICAgICAgICAgICAgcj1cIjhcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMTgwIDI0IDEzMDUpXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOFwiIGN5PVwiOFwiIHI9XCI4XCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxODlcIiBjeT1cIjE1N1wiIHI9XCI4XCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1NDhcIiBjeT1cIjc2XCIgcj1cIjhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjY4NVwiIGN5PVwiMzQ3XCIgcj1cIjhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjg1OFwiIGN5PVwiMTQxXCIgcj1cIjhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICBjeD1cIjg3NFwiXHJcbiAgICAgICAgICAgICAgICAgIGN5PVwiNjcwXCJcclxuICAgICAgICAgICAgICAgICAgcj1cIjhcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMTgwIDg3NCA2NzApXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgIGN4PVwiNjU3XCJcclxuICAgICAgICAgICAgICAgICAgY3k9XCI0ODhcIlxyXG4gICAgICAgICAgICAgICAgICByPVwiOFwiXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgxODAgNjU3IDQ4OClcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgY3g9XCI0NDNcIlxyXG4gICAgICAgICAgICAgICAgICBjeT1cIjYwNFwiXHJcbiAgICAgICAgICAgICAgICAgIHI9XCI4XCJcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDE4MCA0NDMgNjA0KVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICBjeD1cIjMzOVwiXHJcbiAgICAgICAgICAgICAgICAgIGN5PVwiMzM5XCJcclxuICAgICAgICAgICAgICAgICAgcj1cIjhcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMTgwIDMzOSAzMzkpXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjRcIiBjeT1cIjUzN1wiIHI9XCI4XCIgdHJhbnNmb3JtPVwicm90YXRlKDE4MCAyNCA1MzcpXCIgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRzfT5cclxuICAgICAgICAgIDxoMT5TVkcgU25vdzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRfY29udGFpbmVyfT5cclxuICAgICAgICBIWUVPS0pBRSBMRUVcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIEknbSBMYXp5XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIENvZGVyIDtcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xvY2t9PlxyXG4gICAgICAgIOqwnOuwnOyekOulvCDqv4jqvrzsp4BcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICBEK3tkRGF5fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGltZyBzcmM9XCJpbWcvZGV2LnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbi8qPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjRFMztcclxuICAgICAgICAgIDxiciAvPiBBYm91dCBNZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGNTI4OyA8YnIgLz5cclxuICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICYjeDFGNEFEOyA8YnIgLz5cclxuICAgICAgICAgIEV4cGVyaWVuY2VcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAmI3gxRjRDQjtcclxuICAgICAgICAgIDxiciAvPiBQcm9qZWN0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgJiN4MUYzOTM7IDxiciAvPlxyXG4gICAgICAgICAgRWR1Y2F0aW9uXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQnV0dG9uR3JvdXA+Ki9cclxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFib3V0X2NvbG9yX19ibnROLSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogYWJvdXRfY29sb3ItY2hhbmdlLTV4X19RcU5KUiAxNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZSBib3RoO1xcclxcbiAgLW1vei1hbmltYXRpb246IGFib3V0X2NvbG9yLWNoYW5nZS01eF9fUXFOSlIgMTVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGUgYm90aDtcXHJcXG4gICAgICAgYW5pbWF0aW9uOiBhYm91dF9jb2xvci1jaGFuZ2UtNXhfX1FxTkpSIDE1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlIGJvdGg7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDIwcHggLTEwcHggYmxhY2s7XFxyXFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC0xMHB4IGJsYWNrO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmFib3V0X2J1dHRvbkdyb3VwX19vOHNURyB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC0xMHB4IGJsYWNrO1xcclxcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAtMTBweCBibGFjaztcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogYWJvdXRfd29iYmxlLWhvci1ib3R0b21fX015bjY3IDAuOHMgMnMgYm90aDtcXHJcXG4gIC1tb3otYW5pbWF0aW9uOiBhYm91dF93b2JibGUtaG9yLWJvdHRvbV9fTXluNjcgMC44cyAycyBib3RoO1xcclxcbiAgICAgICBhbmltYXRpb246IGFib3V0X3dvYmJsZS1ob3ItYm90dG9tX19NeW42NyAwLjhzIDJzIGJvdGg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHZoO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmFib3V0X2J1dHRvbl9fMWFubFQge1xcclxcbiAgZm9udC1zaXplOiAxdm1heDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBwYWRkaW5nOiAxLjV2bWF4O1xcclxcbn1cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYWJvdXRfY29sb3ItY2hhbmdlLTV4X19RcU5KUiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyODJjMzQ7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjIyY2ZmO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2VhMjIyMjtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmNWJlMTA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzgyYTlmYjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQC1tb3ota2V5ZnJhbWVzIGFib3V0X2NvbG9yLWNoYW5nZS01eF9fUXFOSlIge1xcclxcbiAgMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjgyYzM0O1xcclxcbiAgfVxcclxcbiAgMjUlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2IyMmNmZjtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlYTIyMjI7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjViZTEwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM4MmE5ZmI7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYWJvdXRfY29sb3ItY2hhbmdlLTV4X19RcU5KUiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyODJjMzQ7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjIyY2ZmO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2VhMjIyMjtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmNWJlMTA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzgyYTlmYjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmFib3V0X3RleHRfY29udGFpbmVyX18zeEpNNyB7XFxyXFxuICAtbW96LWJveC1mbGV4OiAxO1xcclxcbiAgICAgICBmbGV4OiAxIDE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogYWJvdXRfdHJhY2tpbmctaW4tY29udHJhY3QtYmNrX18zNGpjcCAyc1xcclxcbiAgICBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSAxcyBib3RoO1xcclxcbiAgLW1vei1hbmltYXRpb246IGFib3V0X3RyYWNraW5nLWluLWNvbnRyYWN0LWJja19fMzRqY3AgMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSkgMXNcXHJcXG4gICAgYm90aDtcXHJcXG4gICAgICAgYW5pbWF0aW9uOiBhYm91dF90cmFja2luZy1pbi1jb250cmFjdC1iY2tfXzM0amNwIDJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpIDFzXFxyXFxuICAgIGJvdGg7XFxyXFxuICBmb250LXNpemU6IDJ2aDtcXHJcXG4gIG1hcmdpbjogNCU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDJ2aDtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0X2ltZ19faGdnV2cge1xcclxcbiAgLW1vei1ib3gtZmxleDogMTtcXHJcXG4gICAgICAgZmxleDogMSAxIDE7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhYm91dF9mYWRlLWluX18xTEc3VCAycyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSAxcyBib3RoO1xcclxcbiAgLW1vei1hbmltYXRpb246IGFib3V0X2ZhZGUtaW5fXzFMRzdUIDJzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIDFzIGJvdGg7XFxyXFxuICAgICAgIGFuaW1hdGlvbjogYWJvdXRfZmFkZS1pbl9fMUxHN1QgMnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgMXMgYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0X3RpdGxlX18zbDRLeCB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogOHZoO1xcclxcbiAgbGluZS1oZWlnaHQ6IDh2aDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBhYm91dF90cmFja2luZy1pbi1jb250cmFjdC1iY2tfXzM0amNwIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNDAwcHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNDAwcHgpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgNDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC42O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcbkAtbW96LWtleWZyYW1lcyBhYm91dF90cmFja2luZy1pbi1jb250cmFjdC1iY2tfXzM0amNwIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNDAwcHgpO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWig0MDBweCk7XFxyXFxuICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDQwMHB4KTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDQwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxyXFxuICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGFib3V0X3RyYWNraW5nLWluLWNvbnRyYWN0LWJja19fMzRqY3Age1xcclxcbiAgMCUge1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMWVtO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig0MDBweCk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDQwMHB4KTtcXHJcXG4gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNDAwcHgpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgNDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC42O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXHJcXG4gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hYm91dF9kZXZfaW1nX190clRYSyB7XFxyXFxuICB3aWR0aDogMjJ2aDtcXHJcXG4gIGhlaWdodDogMjJ2aDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiL2ltZy9kZXYuZ2lmXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1dmg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dF9jbG9ja19fM1QxdG4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiA0dmg7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiAzM3ZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtNS0xNSA4OjUwOjMwXFxyXFxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxcclxcbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby4gXFxyXFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBhbmltYXRpb24gZmFkZS1pblxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYWJvdXRfZmFkZS1pbl9fMUxHN1Qge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gIH1cXHJcXG59XFxyXFxuQC1tb3ota2V5ZnJhbWVzIGFib3V0X2ZhZGUtaW5fXzFMRzdUIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYWJvdXRfZmFkZS1pbl9fMUxHN1Qge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGFib3V0X3dvYmJsZS1ob3ItYm90dG9tX19NeW42NyB7XFxyXFxuICAwJSxcXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXHJcXG4gIH1cXHJcXG4gIDE1JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KSByb3RhdGUoLTZkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpIHJvdGF0ZSgtNmRlZyk7XFxyXFxuICB9XFxyXFxuICAzMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KSByb3RhdGUoNmRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KSByb3RhdGUoNmRlZyk7XFxyXFxuICB9XFxyXFxuICA0NSUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCkgcm90YXRlKC0zLjZkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpIHJvdGF0ZSgtMy42ZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDYwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpIHJvdGF0ZSgyLjRkZWcpO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlKC0xLjJkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlKC0xLjJkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5ALW1vei1rZXlmcmFtZXMgYWJvdXRfd29iYmxlLWhvci1ib3R0b21fX015bjY3IHtcXHJcXG4gIDAlLFxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcclxcbiAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxyXFxuICB9XFxyXFxuICAxNSUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCkgcm90YXRlKC02ZGVnKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpIHJvdGF0ZSgtNmRlZyk7XFxyXFxuICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KSByb3RhdGUoLTZkZWcpO1xcclxcbiAgfVxcclxcbiAgMzAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCkgcm90YXRlKDZkZWcpO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KSByb3RhdGUoNmRlZyk7XFxyXFxuICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSg2ZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDQ1JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KSByb3RhdGUoLTMuNmRlZyk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KSByb3RhdGUoLTMuNmRlZyk7XFxyXFxuICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KSByb3RhdGUoLTMuNmRlZyk7XFxyXFxuICB9XFxyXFxuICA2MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpIHJvdGF0ZSgyLjRkZWcpO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpIHJvdGF0ZSgyLjRkZWcpO1xcclxcbiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpIHJvdGF0ZSgyLjRkZWcpO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlKC0xLjJkZWcpO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGUoLTEuMmRlZyk7XFxyXFxuICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZSgtMS4yZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBhYm91dF93b2JibGUtaG9yLWJvdHRvbV9fTXluNjcge1xcclxcbiAgMCUsXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxyXFxuICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxyXFxuICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXHJcXG4gIH1cXHJcXG4gIDE1JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KSByb3RhdGUoLTZkZWcpO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCkgcm90YXRlKC02ZGVnKTtcXHJcXG4gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpIHJvdGF0ZSgtNmRlZyk7XFxyXFxuICB9XFxyXFxuICAzMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KSByb3RhdGUoNmRlZyk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSg2ZGVnKTtcXHJcXG4gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCkgcm90YXRlKDZkZWcpO1xcclxcbiAgfVxcclxcbiAgNDUlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpIHJvdGF0ZSgtMy42ZGVnKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpIHJvdGF0ZSgtMy42ZGVnKTtcXHJcXG4gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpIHJvdGF0ZSgtMy42ZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDYwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyk7XFxyXFxuICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyk7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGUoLTEuMmRlZyk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZSgtMS4yZGVnKTtcXHJcXG4gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlKC0xLjJkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRfaGVyb19fMmQxNDkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNTAlIDE3NiUsICMyNTM4NTQgODAlLCAjMDYxOTIyIDEwMCUpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yYWRpYWwtZ3JhZGllbnQoNTAlIDE3NiUsICMyNTM4NTQgODAlLCAjMDYxOTIyIDEwMCUpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KDUwJSAxNzYlLCAjMjUzODU0IDgwJSwgIzA2MTkyMiAxMDAlKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5hYm91dF9jb250ZW50c19fMi1oQWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRfc25vd19fMzl1YW8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRfc25vd19fMzl1YW8gLmFib3V0X3N2Z19fMkpoNFUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNhYm91dF9zbm93LXRvcC1sYXllcl9fdE9LYzUge1xcclxcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NjhweCk7XFxyXFxuICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzY4cHgpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTc2OHB4KTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhYm91dF9mYWxsX18xUkdMdiAyMi41cyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuICAgICAtbW96LWFuaW1hdGlvbjogYWJvdXRfZmFsbF9fMVJHTHYgMjIuNXMgaW5maW5pdGUgbGluZWFyO1xcclxcbiAgICAgICAgICBhbmltYXRpb246IGFib3V0X2ZhbGxfXzFSR0x2IDIyLjVzIGluZmluaXRlIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0X3Nub3ctYm90dG9tLWxheWVyX18yNl9SdiB7XFxyXFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTc2OHB4KTtcXHJcXG4gICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NjhweCk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzY4cHgpO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGFib3V0X2ZhbGxfXzFSR0x2IDQ1cyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuICAgICAtbW96LWFuaW1hdGlvbjogYWJvdXRfZmFsbF9fMVJHTHYgNDVzIGluZmluaXRlIGxpbmVhcjtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBhYm91dF9mYWxsX18xUkdMdiA0NXMgaW5maW5pdGUgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYWJvdXRfZmFsbF9fMVJHTHYge1xcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQC1tb3ota2V5ZnJhbWVzIGFib3V0X2ZhbGxfXzFSR0x2IHtcXHJcXG4gIDEwMCUge1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYWJvdXRfZmFsbF9fMVJHTHYge1xcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvYWJvdXQubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0ZBQXFFO0VBQ3JFLCtFQUE2RDtPQUE3RCwwRUFBNkQ7RUFDN0QsV0FBVztFQUNYLGlCQUFhO0VBQWIsYUFBYTtFQUNiLDJDQUFtQztVQUFuQyxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLHlCQUFzQjtFQUF0QiwwQkFBc0I7T0FBdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDhEQUFpRDtFQUNqRCwy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Q2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUNBQTZCO0tBQTdCLGtDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsMERBQXFDO0tBQXJDLHVEQUFxQztVQUFyQyxrREFBcUM7QUFDdkM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUNBQTZCO0tBQTdCLGtDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0Isd0RBQW1DO0tBQW5DLHFEQUFtQztVQUFuQyxnREFBbUM7QUFDckM7O0FBRUE7RUFDRTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsNkJBQXdCO1NBQXhCLHdCQUF3QjtFQUMxQjtBQUNGOztBQUpBO0VBQ0U7SUFDRSxnQ0FBd0I7T0FBeEIsNkJBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb2xvciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogY29sb3ItY2hhbmdlLTV4IDE1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlIGJvdGg7XFxyXFxuICBhbmltYXRpb246IGNvbG9yLWNoYW5nZS01eCAxNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZSBib3RoO1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggLTEwcHggYmxhY2s7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmJ1dHRvbkdyb3VwIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC0xMHB4IGJsYWNrO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB3b2JibGUtaG9yLWJvdHRvbSAwLjhzIDJzIGJvdGg7XFxyXFxuICBhbmltYXRpb246IHdvYmJsZS1ob3ItYm90dG9tIDAuOHMgMnMgYm90aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwdmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXZtYXg7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgcGFkZGluZzogMS41dm1heDtcXHJcXG59XFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yLWNoYW5nZS01eCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyODJjMzQ7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjIyY2ZmO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2VhMjIyMjtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmNWJlMTA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzgyYTlmYjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBjb2xvci1jaGFuZ2UtNXgge1xcclxcbiAgMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjgyYzM0O1xcclxcbiAgfVxcclxcbiAgMjUlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2IyMmNmZjtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlYTIyMjI7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjViZTEwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM4MmE5ZmI7XFxyXFxuICB9XFxyXFxufVxcclxcbi50ZXh0X2NvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAxIDEgMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0cmFja2luZy1pbi1jb250cmFjdC1iY2sgMnNcXHJcXG4gICAgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSkgMXMgYm90aDtcXHJcXG4gIGFuaW1hdGlvbjogdHJhY2tpbmctaW4tY29udHJhY3QtYmNrIDJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpIDFzXFxyXFxuICAgIGJvdGg7XFxyXFxuICBmb250LXNpemU6IDJ2aDtcXHJcXG4gIG1hcmdpbjogNCU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDJ2aDtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZyB7XFxyXFxuICBmbGV4OiAxIDEgMTtcXHJcXG4gIGhlaWdodDogMzB2aDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgMXMgYm90aDtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAycyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSAxcyBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBmb250LXNpemU6IDh2aDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA4dmg7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgdHJhY2tpbmctaW4tY29udHJhY3QtYmNrIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNDAwcHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNDAwcHgpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgNDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC42O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgdHJhY2tpbmctaW4tY29udHJhY3QtYmNrIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNDAwcHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNDAwcHgpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgNDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC42O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5kZXZfaW1nIHtcXHJcXG4gIHdpZHRoOiAyMnZoO1xcclxcbiAgaGVpZ2h0OiAyMnZoO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIvaW1nL2Rldi5naWZcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMTV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb2NrIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNHZoO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogMzN2aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTUtMTUgODo1MDozMFxcclxcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cXHJcXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxcclxcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogYW5pbWF0aW9uIGZhZGUtaW5cXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyB3b2JibGUtaG9yLWJvdHRvbSB7XFxyXFxuICAwJSxcXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXHJcXG4gIH1cXHJcXG4gIDE1JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KSByb3RhdGUoLTZkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpIHJvdGF0ZSgtNmRlZyk7XFxyXFxuICB9XFxyXFxuICAzMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KSByb3RhdGUoNmRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KSByb3RhdGUoNmRlZyk7XFxyXFxuICB9XFxyXFxuICA0NSUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCkgcm90YXRlKC0zLjZkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpIHJvdGF0ZSgtMy42ZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDYwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpIHJvdGF0ZSgyLjRkZWcpO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlKC0xLjJkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlKC0xLjJkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHdvYmJsZS1ob3ItYm90dG9tIHtcXHJcXG4gIDAlLFxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcclxcbiAgfVxcclxcbiAgMTUlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpIHJvdGF0ZSgtNmRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCkgcm90YXRlKC02ZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDMwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSg2ZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSg2ZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDQ1JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KSByb3RhdGUoLTMuNmRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCkgcm90YXRlKC0zLjZkZWcpO1xcclxcbiAgfVxcclxcbiAgNjAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXB4KSByb3RhdGUoMi40ZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyk7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGUoLTEuMmRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGUoLTEuMmRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCg1MCUgMTc2JSwgIzI1Mzg1NCA4MCUsICMwNjE5MjIgMTAwJSk7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb250ZW50cyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5zbm93IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNub3cgLnN2ZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Nub3ctdG9wLWxheWVyIHtcXHJcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTc2OHB4KTtcXHJcXG4gIGFuaW1hdGlvbjogZmFsbCAyMi41cyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbiNzbm93LWJvdHRvbS1sYXllciB7XFxyXFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NjhweCk7XFxyXFxuICBhbmltYXRpb246IGZhbGwgNDVzIGluZmluaXRlIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWxsIHtcXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbG9yXCI6IFwiYWJvdXRfY29sb3JfX2JudE4tXCIsXG5cdFwiY29sb3ItY2hhbmdlLTV4XCI6IFwiYWJvdXRfY29sb3ItY2hhbmdlLTV4X19RcU5KUlwiLFxuXHRcImJ1dHRvbkdyb3VwXCI6IFwiYWJvdXRfYnV0dG9uR3JvdXBfX284c1RHXCIsXG5cdFwid29iYmxlLWhvci1ib3R0b21cIjogXCJhYm91dF93b2JibGUtaG9yLWJvdHRvbV9fTXluNjdcIixcblx0XCJidXR0b25cIjogXCJhYm91dF9idXR0b25fXzFhbmxUXCIsXG5cdFwidGV4dF9jb250YWluZXJcIjogXCJhYm91dF90ZXh0X2NvbnRhaW5lcl9fM3hKTTdcIixcblx0XCJ0cmFja2luZy1pbi1jb250cmFjdC1iY2tcIjogXCJhYm91dF90cmFja2luZy1pbi1jb250cmFjdC1iY2tfXzM0amNwXCIsXG5cdFwiaW1nXCI6IFwiYWJvdXRfaW1nX19oZ2dXZ1wiLFxuXHRcImZhZGUtaW5cIjogXCJhYm91dF9mYWRlLWluX18xTEc3VFwiLFxuXHRcInRpdGxlXCI6IFwiYWJvdXRfdGl0bGVfXzNsNEt4XCIsXG5cdFwiZGV2X2ltZ1wiOiBcImFib3V0X2Rldl9pbWdfX3RyVFhLXCIsXG5cdFwiY2xvY2tcIjogXCJhYm91dF9jbG9ja19fM1QxdG5cIixcblx0XCJoZXJvXCI6IFwiYWJvdXRfaGVyb19fMmQxNDlcIixcblx0XCJjb250ZW50c1wiOiBcImFib3V0X2NvbnRlbnRzX18yLWhBbFwiLFxuXHRcInNub3dcIjogXCJhYm91dF9zbm93X18zOXVhb1wiLFxuXHRcInN2Z1wiOiBcImFib3V0X3N2Z19fMkpoNFVcIixcblx0XCJzbm93LXRvcC1sYXllclwiOiBcImFib3V0X3Nub3ctdG9wLWxheWVyX190T0tjNVwiLFxuXHRcImZhbGxcIjogXCJhYm91dF9mYWxsX18xUkdMdlwiLFxuXHRcInNub3ctYm90dG9tLWxheWVyXCI6IFwiYWJvdXRfc25vdy1ib3R0b20tbGF5ZXJfXzI2X1J2XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==