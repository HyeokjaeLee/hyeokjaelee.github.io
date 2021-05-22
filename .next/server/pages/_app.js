(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 186:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "reactstrap"
var external_reactstrap_namespaceObject = require("reactstrap");;
// EXTERNAL MODULE: ./styles/Topbar.module.css
var Topbar_module = __webpack_require__(151);
var Topbar_module_default = /*#__PURE__*/__webpack_require__.n(Topbar_module);
;// CONCATENATED MODULE: ./components/common/Topbar.tsx
var __jsx = (external_react_default()).createElement;




const TobBar = props => {
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,external_react_.useState)(true);
  const {
    0: menu,
    1: setMenu
  } = (0,external_react_.useState)("");

  const toggleNavbar = () => {
    setCollapsed(!collapsed);

    if (collapsed) {
      setMenu((Topbar_module_default()).menu_arrow_bottom);
    } else {
      setMenu((Topbar_module_default()).menu_arrow_right);
    }
  };

  return __jsx(external_reactstrap_namespaceObject.Navbar, {
    dark: true,
    className: (Topbar_module_default()).navbar
  }, __jsx(external_reactstrap_namespaceObject.NavbarBrand, {
    className: (Topbar_module_default()).brand,
    href: "/"
  }, "HJ."), __jsx("button", {
    onClick: toggleNavbar,
    className: (Topbar_module_default()).menu
  }, __jsx("div", {
    style: {
      float: "left",
      marginRight: "1em"
    },
    className: menu
  }, ">"), "MENU"), __jsx(external_reactstrap_namespaceObject.Collapse, {
    isOpen: !collapsed,
    navbar: true
  }, __jsx(external_reactstrap_namespaceObject.Nav, {
    navbar: true
  }, __jsx(external_reactstrap_namespaceObject.NavItem, null, __jsx(external_reactstrap_namespaceObject.NavLink, {
    href: "/Posts/"
  }, "Posts")), __jsx(external_reactstrap_namespaceObject.NavItem, null, __jsx(external_reactstrap_namespaceObject.NavLink, {
    href: "https://github.com/HyeokjaeLee"
  }, "GitHub")), __jsx(external_reactstrap_namespaceObject.NavItem, null, __jsx(external_reactstrap_namespaceObject.NavLink, {
    href: "/about/"
  }, "About")))));
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
;// CONCATENATED MODULE: ./pages/_app.tsx

var _app_jsx = (external_react_default()).createElement;



function App({
  Component,
  pageProps
}) {
  return _app_jsx((external_react_default()).Fragment, null, _app_jsx(TobBar, null), _app_jsx("div", {
    id: "container"
  }, _app_jsx(Component, pageProps)));
}

/* harmony default export */ var _app = (App);
/*body::-webkit-scrollbar {
  width: 10px;
}
body::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
}
body::-webkit-scrollbar-track {
  background-color: grey;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
} */

/***/ }),

/***/ 151:
/***/ (function(module) {

// Exports
module.exports = {
	"gradient": "Topbar_gradient__1da_L",
	"navbar": "Topbar_navbar__4jmx6",
	"brand": "Topbar_brand__3iZ2Y",
	"menu": "Topbar_menu__32hPQ",
	"menu_arrow_bottom": "Topbar_menu_arrow_bottom__3ILU4",
	"rotate-90-cw": "Topbar_rotate-90-cw__qtydt",
	"menu_arrow_right": "Topbar_menu_arrow_right__3jasb",
	"rotate-0-cw": "Topbar_rotate-0-cw__nTCuq"
};


/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(186));
module.exports = __webpack_exports__;

})();