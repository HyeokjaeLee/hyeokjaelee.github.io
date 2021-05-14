self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/common/Topbar.tsx":
/*!**************************************!*\
  !*** ./components/common/Topbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TobBar": function() { return /* binding */ TobBar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Topbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Topbar.module.css */ "./styles/Topbar.module.css");
/* harmony import */ var _styles_Topbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Topbar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Workspace\\blog\\components\\common\\Topbar.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




var TobBar = function TobBar(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
    dark: true,
    expand: "md",
    style: {
      width: "100%",
      backgroundColor: "black",
      padding: "10px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarBrand, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "reactstrap"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarToggler, {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
    className: "mr-auto",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    href: "/components/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "Components")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    href: "https://github.com/reactstrap/reactstrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "GitHub")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.UncontrolledDropdown, {
    nav: true,
    inNavbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.DropdownToggle, {
    nav: true,
    caret: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "Options"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {
    right: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Option 1"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "Option 2"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, {
    divider: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Reset")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Simple Text"))), __jsx("div", {
    className: (_styles_Topbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().gradient),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }));
};

_s(TobBar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = TobBar;

var _c;

$RefreshReg$(_c, "TobBar");

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

/***/ "./styles/Topbar.module.css":
/*!**********************************!*\
  !*** ./styles/Topbar.module.css ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Topbar.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/Topbar.module.css");

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
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Topbar.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/Topbar.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Topbar.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/Topbar.module.css");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/Topbar.module.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/Topbar.module.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Topbar_footer__3I9ID {\r\n  padding-top: 5vh;\r\n  font-size: 1vh;\r\n  width: 100%;\r\n  height: auto;\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  -moz-box-orient: vertical;\r\n  -moz-box-direction: normal;\r\n       flex-direction: column;\r\n  background: -webkit-gradient(\r\n    linear,\r\n    left top, left bottom,\r\n    color-stop(20%, rgb(2, 52, 63)),\r\n    color-stop(40%, rgba(240, 237, 204, 1))\r\n  );\r\n  background: -webkit-linear-gradient(\r\n    top,\r\n    rgb(2, 52, 63) 20%,\r\n    rgba(240, 237, 204, 1) 40%\r\n  );\r\n  background: -moz-linear-gradient(\r\n    top,\r\n    rgb(2, 52, 63) 20%,\r\n    rgba(240, 237, 204, 1) 40%\r\n  );\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(2, 52, 63) 20%,\r\n    rgba(240, 237, 204, 1) 40%\r\n  );\r\n}\r\n.Topbar_gradient__1da_L {\r\n  background: -webkit-gradient(\r\n    linear,\r\n    left top, left bottom,\r\n    color-stop(20%, rgb(2, 52, 63)),\r\n    color-stop(40%, rgba(240, 237, 204, 1))\r\n  );\r\n  background: -webkit-linear-gradient(\r\n    top,\r\n    rgb(2, 52, 63) 20%,\r\n    rgba(240, 237, 204, 1) 40%\r\n  );\r\n  background: -moz-linear-gradient(\r\n    top,\r\n    rgb(2, 52, 63) 20%,\r\n    rgba(240, 237, 204, 1) 40%\r\n  );\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(2, 52, 63) 20%,\r\n    rgba(240, 237, 204, 1) 40%\r\n  );\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/Topbar.module.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,YAAY;EACZ,iBAAa;EAAb,aAAa;EACb,qBAAuB;OAAvB,uBAAuB;EACvB,sBAAmB;OAAnB,mBAAmB;EACnB,yBAAsB;EAAtB,0BAAsB;OAAtB,sBAAsB;EACtB;;;;;GAIC;EAJD;;;;GAIC;EAJD;;;;GAIC;EAJD;;;;GAIC;AACH;AACA;EACE;;;;;GAIC;EAJD;;;;GAIC;EAJD;;;;GAIC;EAJD;;;;GAIC;AACH","sourcesContent":[".footer {\r\n  padding-top: 5vh;\r\n  font-size: 1vh;\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(2, 52, 63) 20%,\r\n    rgba(240, 237, 204, 1) 40%\r\n  );\r\n}\r\n.gradient {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(2, 52, 63) 20%,\r\n    rgba(240, 237, 204, 1) 40%\r\n  );\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footer": "Topbar_footer__3I9ID",
	"gradient": "Topbar_gradient__1da_L"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vVG9wYmFyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1RvcGJhci5tb2R1bGUuY3NzP2RiNzAiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9Ub3BiYXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJUb2JCYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFjQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0hDLCtDQUFRLENBQUMsS0FBRCxDQURMO0FBQUEsTUFDeEJDLE1BRHdCO0FBQUEsTUFDaEJDLFNBRGdCOztBQUcvQixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU1ELFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxHQUFmOztBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFDRSxRQUFJLEVBQUUsSUFEUjtBQUVFLFVBQU0sRUFBQyxJQUZUO0FBR0UsU0FBSyxFQUFFO0FBQUVHLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxxQkFBZSxFQUFFLE9BQWxDO0FBQTJDQyxhQUFPLEVBQUU7QUFBcEQsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxtREFBRDtBQUFhLFFBQUksRUFBQyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLEVBTUUsTUFBQyxxREFBRDtBQUFlLFdBQU8sRUFBRUgsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFB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bUIsd0JBQXdCLG9CQUFvQiw0QkFBNEIsbUNBQW1DLDZCQUE2QiwrQkFBK0IsZ0NBQWdDLGlDQUFpQyxrQ0FBa0MsK0tBQStLLDJIQUEySCx3SEFBd0gseUhBQXlILEtBQUssNkJBQTZCLCtLQUErSywySEFBMkgsd0hBQXdILHlIQUF5SCxLQUFLLFdBQVcseUZBQXlGLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsVUFBVSxLQUFLLFFBQVEsS0FBSyxRQUFRLEtBQUssUUFBUSxLQUFLLEtBQUssS0FBSyxTQUFTLEtBQUssUUFBUSxLQUFLLFFBQVEsS0FBSyxRQUFRLEtBQUssa0NBQWtDLHVCQUF1QixxQkFBcUIsa0JBQWtCLG1CQUFtQixvQkFBb0IsOEJBQThCLDBCQUEwQiw2QkFBNkIseUhBQXlILEtBQUssZUFBZSx5SEFBeUgsS0FBSyx1QkFBdUI7QUFDMTJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNzUyYTEzNWFiMjBhMzgwMTgwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ29sbGFwc2UsXHJcbiAgTmF2YmFyLFxyXG4gIE5hdmJhclRvZ2dsZXIsXHJcbiAgTmF2YmFyQnJhbmQsXHJcbiAgTmF2LFxyXG4gIE5hdkl0ZW0sXHJcbiAgTmF2TGluayxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25JdGVtLFxyXG4gIE5hdmJhclRleHQsXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ub3BiYXIubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvYkJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXJcclxuICAgICAgICBkYXJrPXt0cnVlfVxyXG4gICAgICAgIGV4cGFuZD1cIm1kXCJcclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9XCIvXCI+cmVhY3RzdHJhcDwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2NvbXBvbmVudHMvXCI+Q29tcG9uZW50czwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0c3RyYXAvcmVhY3RzdHJhcFwiPlxyXG4gICAgICAgICAgICAgICAgR2l0SHViXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxVbmNvbnRyb2xsZWREcm9wZG93biBuYXYgaW5OYXZiYXI+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIG5hdiBjYXJldD5cclxuICAgICAgICAgICAgICAgIE9wdGlvbnNcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgcmlnaHQ+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPk9wdGlvbiAxPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPk9wdGlvbiAyPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+UmVzZXQ8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPE5hdmJhclRleHQ+U2ltcGxlIFRleHQ8L05hdmJhclRleHQ+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JhZGllbnR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vVG9wYmFyLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vVG9wYmFyLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL1RvcGJhci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Ub3BiYXJfZm9vdGVyX18zSTlJRCB7XFxyXFxuICBwYWRkaW5nLXRvcDogNXZoO1xcclxcbiAgZm9udC1zaXplOiAxdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXHJcXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcclxcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChcXHJcXG4gICAgbGluZWFyLFxcclxcbiAgICBsZWZ0IHRvcCwgbGVmdCBib3R0b20sXFxyXFxuICAgIGNvbG9yLXN0b3AoMjAlLCByZ2IoMiwgNTIsIDYzKSksXFxyXFxuICAgIGNvbG9yLXN0b3AoNDAlLCByZ2JhKDI0MCwgMjM3LCAyMDQsIDEpKVxcclxcbiAgKTtcXHJcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0b3AsXFxyXFxuICAgIHJnYigyLCA1MiwgNjMpIDIwJSxcXHJcXG4gICAgcmdiYSgyNDAsIDIzNywgMjA0LCAxKSA0MCVcXHJcXG4gICk7XFxyXFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG9wLFxcclxcbiAgICByZ2IoMiwgNTIsIDYzKSAyMCUsXFxyXFxuICAgIHJnYmEoMjQwLCAyMzcsIDIwNCwgMSkgNDAlXFxyXFxuICApO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byBib3R0b20sXFxyXFxuICAgIHJnYigyLCA1MiwgNjMpIDIwJSxcXHJcXG4gICAgcmdiYSgyNDAsIDIzNywgMjA0LCAxKSA0MCVcXHJcXG4gICk7XFxyXFxufVxcclxcbi5Ub3BiYXJfZ3JhZGllbnRfXzFkYV9MIHtcXHJcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXFxyXFxuICAgIGxpbmVhcixcXHJcXG4gICAgbGVmdCB0b3AsIGxlZnQgYm90dG9tLFxcclxcbiAgICBjb2xvci1zdG9wKDIwJSwgcmdiKDIsIDUyLCA2MykpLFxcclxcbiAgICBjb2xvci1zdG9wKDQwJSwgcmdiYSgyNDAsIDIzNywgMjA0LCAxKSlcXHJcXG4gICk7XFxyXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG9wLFxcclxcbiAgICByZ2IoMiwgNTIsIDYzKSAyMCUsXFxyXFxuICAgIHJnYmEoMjQwLCAyMzcsIDIwNCwgMSkgNDAlXFxyXFxuICApO1xcclxcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvcCxcXHJcXG4gICAgcmdiKDIsIDUyLCA2MykgMjAlLFxcclxcbiAgICByZ2JhKDI0MCwgMjM3LCAyMDQsIDEpIDQwJVxcclxcbiAgKTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICByZ2IoMiwgNTIsIDYzKSAyMCUsXFxyXFxuICAgIHJnYmEoMjQwLCAyMzcsIDIwNCwgMSkgNDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL1RvcGJhci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUF1QjtPQUF2Qix1QkFBdUI7RUFDdkIsc0JBQW1CO09BQW5CLG1CQUFtQjtFQUNuQix5QkFBc0I7RUFBdEIsMEJBQXNCO09BQXRCLHNCQUFzQjtFQUN0Qjs7Ozs7R0FJQztFQUpEOzs7O0dBSUM7RUFKRDs7OztHQUlDO0VBSkQ7Ozs7R0FJQztBQUNIO0FBQ0E7RUFDRTs7Ozs7R0FJQztFQUpEOzs7O0dBSUM7RUFKRDs7OztHQUlDO0VBSkQ7Ozs7R0FJQztBQUNIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXIge1xcclxcbiAgcGFkZGluZy10b3A6IDV2aDtcXHJcXG4gIGZvbnQtc2l6ZTogMXZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICByZ2IoMiwgNTIsIDYzKSAyMCUsXFxyXFxuICAgIHJnYmEoMjQwLCAyMzcsIDIwNCwgMSkgNDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG4uZ3JhZGllbnQge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byBib3R0b20sXFxyXFxuICAgIHJnYigyLCA1MiwgNjMpIDIwJSxcXHJcXG4gICAgcmdiYSgyNDAsIDIzNywgMjA0LCAxKSA0MCVcXHJcXG4gICk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImZvb3RlclwiOiBcIlRvcGJhcl9mb290ZXJfXzNJOUlEXCIsXG5cdFwiZ3JhZGllbnRcIjogXCJUb3BiYXJfZ3JhZGllbnRfXzFkYV9MXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==