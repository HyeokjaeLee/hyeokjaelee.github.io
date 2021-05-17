self["webpackHotUpdate_N_E"]("pages/_app",{

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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      collapsed = _useState[0],
      setCollapsed = _useState[1];

  var toggleNavbar = function toggleNavbar() {
    return setCollapsed(!collapsed);
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
    className: (_styles_Topbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarBrand, {
    href: "/",
    className: "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "reactstrap"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    onClick: toggleNavbar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Menu"), __jsx("div", {
    onClick: toggleNavbar,
    style: {
      width: "100px",
      height: "100px",
      backgroundColor: "white"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
    isOpen: !collapsed,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    href: "/components/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Components")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    href: "https://github.com/reactstrap/reactstrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "GitHub"))))));
};
/*  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark={true} expand="md" className={styles.navbar}>
      <NavbarBrand className={styles.brand} href="/">
        HYEOKJAE.
      </NavbarBrand>
      <Nav className="mr-auto" navbar={true} justified={true}>
        <NavItem>
          <NavLink href="/components/">Posts</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/HyeokjaeLee">GitHub</NavLink>
        </NavItem>
        <NavLink href="https://github.com/HyeokjaeLee">About</NavLink>
      </Nav>
    </Navbar>
  ); */

_s(TobBar, "v9q8u3mX6e8FrJZVev9WfYlHYUo=");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vVG9wYmFyLnRzeCJdLCJuYW1lcyI6WyJUb2JCYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwidG9nZ2xlTmF2YmFyIiwic3R5bGVzIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDR0MsK0NBQVEsQ0FBQyxJQUFELENBRFg7QUFBQSxNQUN4QkMsU0FEd0I7QUFBQSxNQUNiQyxZQURhOztBQUcvQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1ELFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQWxCO0FBQUEsR0FBckI7O0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFRLFFBQUksTUFBWjtBQUFhLGFBQVMsRUFBRUcseUVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQWEsUUFBSSxFQUFDLEdBQWxCO0FBQXNCLGFBQVMsRUFBQyxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBSUUsTUFBQywrQ0FBRDtBQUFTLFdBQU8sRUFBRUQsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBS0U7QUFDRSxXQUFPLEVBQUVBLFlBRFg7QUFFRSxTQUFLLEVBQUU7QUFBRUUsV0FBSyxFQUFFLE9BQVQ7QUFBa0JDLFlBQU0sRUFBRSxPQUExQjtBQUFtQ0MscUJBQWUsRUFBRTtBQUFwRCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQVNFLE1BQUMsZ0RBQUQ7QUFBVSxVQUFNLEVBQUUsQ0FBQ04sU0FBbkI7QUFBOEIsVUFBTSxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFLLFVBQU0sTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFTLFFBQUksRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FERixFQUlFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBUyxRQUFJLEVBQUMsMENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBSkYsQ0FERixDQVRGLENBREYsQ0FERjtBQTBCRCxDQS9CTTtBQWdDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQW5EYUgsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjYwNjk3NGUwY2RhNDY1OGMwNDY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDb2xsYXBzZSxcclxuICBOYXZiYXIsXHJcbiAgTmF2YmFyVG9nZ2xlcixcclxuICBOYXZiYXJCcmFuZCxcclxuICBOYXYsXHJcbiAgTmF2SXRlbSxcclxuICBOYXZMaW5rLFxyXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgTmF2YmFyVGV4dCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1RvcGJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVG9iQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCB0b2dnbGVOYXZiYXIgPSAoKSA9PiBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIGRhcmsgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cclxuICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICByZWFjdHN0cmFwXHJcbiAgICAgICAgPC9OYXZiYXJCcmFuZD5cclxuICAgICAgICA8TmF2TGluayBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9Pk1lbnU8L05hdkxpbms+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlTmF2YmFyfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjEwMHB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXshY29sbGFwc2VkfSBuYXZiYXI+XHJcbiAgICAgICAgICA8TmF2IG5hdmJhcj5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9jb21wb25lbnRzL1wiPkNvbXBvbmVudHM8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdHN0cmFwL3JlYWN0c3RyYXBcIj5cclxuICAgICAgICAgICAgICAgIEdpdEh1YlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4vKiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5hdmJhciBkYXJrPXt0cnVlfSBleHBhbmQ9XCJtZFwiIGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgIDxOYXZiYXJCcmFuZCBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH0gaHJlZj1cIi9cIj5cclxuICAgICAgICBIWUVPS0pBRS5cclxuICAgICAgPC9OYXZiYXJCcmFuZD5cclxuICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgbmF2YmFyPXt0cnVlfSBqdXN0aWZpZWQ9e3RydWV9PlxyXG4gICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9jb21wb25lbnRzL1wiPlBvc3RzPC9OYXZMaW5rPlxyXG4gICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSHllb2tqYWVMZWVcIj5HaXRIdWI8L05hdkxpbms+XHJcbiAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgIDxOYXZMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSHllb2tqYWVMZWVcIj5BYm91dDwvTmF2TGluaz5cclxuICAgICAgPC9OYXY+XHJcbiAgICA8L05hdmJhcj5cclxuICApOyAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9