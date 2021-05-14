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
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_components_common_Topbar__WEBPACK_IMPORTED_MODULE_1__.TobBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().color),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
}
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

/***/ "./styles/about.module.css":
/*!*********************************!*\
  !*** ./styles/about.module.css ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./about.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/about.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./about.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/about.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./about.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/about.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

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
___CSS_LOADER_EXPORT___.push([module.id, ".about_color__bntN- {\r\n  -webkit-animation: about_color-change-5x__QqNJR 8s linear infinite alternate both;\r\n  -moz-animation: about_color-change-5x__QqNJR 8s linear infinite alternate both;\r\n       animation: about_color-change-5x__QqNJR 8s linear infinite alternate both;\r\n}\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2021-5-14 20:6:50\r\n * Licensed under FreeBSD License.\r\n * See http://animista.net/license for more info. \r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation color-change-5x\r\n * ----------------------------------------\r\n */\r\n@-webkit-keyframes about_color-change-5x__QqNJR {\r\n  0% {\r\n    background: #19dcea;\r\n  }\r\n  25% {\r\n    background: #b22cff;\r\n  }\r\n  50% {\r\n    background: #ea2222;\r\n  }\r\n  75% {\r\n    background: #f5be10;\r\n  }\r\n  100% {\r\n    background: #3bd80d;\r\n  }\r\n}\r\n@-moz-keyframes about_color-change-5x__QqNJR {\r\n  0% {\r\n    background: #19dcea;\r\n  }\r\n  25% {\r\n    background: #b22cff;\r\n  }\r\n  50% {\r\n    background: #ea2222;\r\n  }\r\n  75% {\r\n    background: #f5be10;\r\n  }\r\n  100% {\r\n    background: #3bd80d;\r\n  }\r\n}\r\n@keyframes about_color-change-5x__QqNJR {\r\n  0% {\r\n    background: #19dcea;\r\n  }\r\n  25% {\r\n    background: #b22cff;\r\n  }\r\n  50% {\r\n    background: #ea2222;\r\n  }\r\n  75% {\r\n    background: #f5be10;\r\n  }\r\n  100% {\r\n    background: #3bd80d;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/about.module.css"],"names":[],"mappings":"AAAA;EACE,iFAAoE;EACpE,8EAA4D;OAA5D,yEAA4D;AAC9D;AACA;;;;;mDAKmD;;AAEnD;;;;EAIE;AACF;EACE;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;AACF;AACA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;AACF;AAhBA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;AACF","sourcesContent":[".color {\r\n  -webkit-animation: color-change-5x 8s linear infinite alternate both;\r\n  animation: color-change-5x 8s linear infinite alternate both;\r\n}\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2021-5-14 20:6:50\r\n * Licensed under FreeBSD License.\r\n * See http://animista.net/license for more info. \r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation color-change-5x\r\n * ----------------------------------------\r\n */\r\n@-webkit-keyframes color-change-5x {\r\n  0% {\r\n    background: #19dcea;\r\n  }\r\n  25% {\r\n    background: #b22cff;\r\n  }\r\n  50% {\r\n    background: #ea2222;\r\n  }\r\n  75% {\r\n    background: #f5be10;\r\n  }\r\n  100% {\r\n    background: #3bd80d;\r\n  }\r\n}\r\n@keyframes color-change-5x {\r\n  0% {\r\n    background: #19dcea;\r\n  }\r\n  25% {\r\n    background: #b22cff;\r\n  }\r\n  50% {\r\n    background: #ea2222;\r\n  }\r\n  75% {\r\n    background: #f5be10;\r\n  }\r\n  100% {\r\n    background: #3bd80d;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"color": "about_color__bntN-",
	"color-change-5x": "about_color-change-5x__QqNJR"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQudHN4Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvYWJvdXQubW9kdWxlLmNzcz85ZGUwIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvYWJvdXQubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJBYm91dCIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDZSxTQUFTQSxLQUFULEdBQWlCO0FBQzlCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVDLHVFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1EO0tBUHVCRCxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnhCLFVBQVUsbUJBQU8sQ0FBQyxvTkFBd0c7QUFDMUgsMEJBQTBCLG1CQUFPLENBQUMscWFBQThNOztBQUVoUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZCx5QkFBeUIsVUFBVTtBQUNuQyxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0scWFBQThNO0FBQ3BOO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMscWFBQThNOztBQUV4Tzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7OztBQzNEQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsK0RBQStELHdGQUF3RixxRkFBcUYscUZBQXFGLEtBQUssNmVBQTZlLFVBQVUsNEJBQTRCLE9BQU8sV0FBVyw0QkFBNEIsT0FBTyxXQUFXLDRCQUE0QixPQUFPLFdBQVcsNEJBQTRCLE9BQU8sWUFBWSw0QkFBNEIsT0FBTyxLQUFLLGtEQUFrRCxVQUFVLDRCQUE0QixPQUFPLFdBQVcsNEJBQTRCLE9BQU8sV0FBVyw0QkFBNEIsT0FBTyxXQUFXLDRCQUE0QixPQUFPLFlBQVksNEJBQTRCLE9BQU8sS0FBSyw2Q0FBNkMsVUFBVSw0QkFBNEIsT0FBTyxXQUFXLDRCQUE0QixPQUFPLFdBQVcsNEJBQTRCLE9BQU8sV0FBVyw0QkFBNEIsT0FBTyxZQUFZLDRCQUE0QixPQUFPLEtBQUssV0FBVyx3RkFBd0YsWUFBWSxhQUFhLGFBQWEsTUFBTSxTQUFTLFFBQVEsU0FBUyxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxpQ0FBaUMsMkVBQTJFLG1FQUFtRSxLQUFLLGdlQUFnZSxVQUFVLDRCQUE0QixPQUFPLFdBQVcsNEJBQTRCLE9BQU8sV0FBVyw0QkFBNEIsT0FBTyxXQUFXLDRCQUE0QixPQUFPLFlBQVksNEJBQTRCLE9BQU8sS0FBSyxnQ0FBZ0MsVUFBVSw0QkFBNEIsT0FBTyxXQUFXLDRCQUE0QixPQUFPLFdBQVcsNEJBQTRCLE9BQU8sV0FBVyw0QkFBNEIsT0FBTyxZQUFZLDRCQUE0QixPQUFPLEtBQUssdUJBQXVCO0FBQ3J4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuYTFjYWIyMmU3YjY5YmEwNWMwNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LnRzeFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Fib3V0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgVG9iQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL1RvcGJhclwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFRvYkJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbG9yfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vYWJvdXQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9hYm91dC5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9hYm91dC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hYm91dF9jb2xvcl9fYm50Ti0ge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGFib3V0X2NvbG9yLWNoYW5nZS01eF9fUXFOSlIgOHMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZSBib3RoO1xcclxcbiAgLW1vei1hbmltYXRpb246IGFib3V0X2NvbG9yLWNoYW5nZS01eF9fUXFOSlIgOHMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZSBib3RoO1xcclxcbiAgICAgICBhbmltYXRpb246IGFib3V0X2NvbG9yLWNoYW5nZS01eF9fUXFOSlIgOHMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZSBib3RoO1xcclxcbn1cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtNS0xNCAyMDo2OjUwXFxyXFxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxcclxcbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby4gXFxyXFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBhbmltYXRpb24gY29sb3ItY2hhbmdlLTV4XFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbkAtd2Via2l0LWtleWZyYW1lcyBhYm91dF9jb2xvci1jaGFuZ2UtNXhfX1FxTkpSIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzE5ZGNlYTtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNiMjJjZmY7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWEyMjIyO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2Y1YmUxMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjM2JkODBkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5ALW1vei1rZXlmcmFtZXMgYWJvdXRfY29sb3ItY2hhbmdlLTV4X19RcU5KUiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxOWRjZWE7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjIyY2ZmO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2VhMjIyMjtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmNWJlMTA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzNiZDgwZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBhYm91dF9jb2xvci1jaGFuZ2UtNXhfX1FxTkpSIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzE5ZGNlYTtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNiMjJjZmY7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWEyMjIyO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2Y1YmUxMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjM2JkODBkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2Fib3V0Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpRkFBb0U7RUFDcEUsOEVBQTREO09BQTVELHlFQUE0RDtBQUM5RDtBQUNBOzs7OzttREFLbUQ7O0FBRW5EOzs7O0VBSUU7QUFDRjtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBaEJBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb2xvciB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogY29sb3ItY2hhbmdlLTV4IDhzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGUgYm90aDtcXHJcXG4gIGFuaW1hdGlvbjogY29sb3ItY2hhbmdlLTV4IDhzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGUgYm90aDtcXHJcXG59XFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTUtMTQgMjA6Njo1MFxcclxcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cXHJcXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxcclxcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogYW5pbWF0aW9uIGNvbG9yLWNoYW5nZS01eFxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3ItY2hhbmdlLTV4IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzE5ZGNlYTtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNiMjJjZmY7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWEyMjIyO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2Y1YmUxMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjM2JkODBkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGNvbG9yLWNoYW5nZS01eCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxOWRjZWE7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjIyY2ZmO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2VhMjIyMjtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmNWJlMTA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzNiZDgwZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29sb3JcIjogXCJhYm91dF9jb2xvcl9fYm50Ti1cIixcblx0XCJjb2xvci1jaGFuZ2UtNXhcIjogXCJhYm91dF9jb2xvci1jaGFuZ2UtNXhfX1FxTkpSXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==