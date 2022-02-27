"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Navbar.js







function AppNavbar({
  user
}) {
  return /*#__PURE__*/jsx_runtime_.jsx((Navbar_default()), {
    bg: "black",
    expand: "lg",
    style: {
      marginBottom: "25px",
      borderRadius: "5px"
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx((Navbar_default()).Brand, {
        style: {
          color: "#cc2b5e",
          fontWeight: "bold"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: "/",
          style: {
            textDecoration: "none"
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "logo",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "images/logo.png",
              width: "40",
              height: "35",
              class: "d-inline-block align-center",
              alt: ""
            }), "  devHu\xDF-Wiki"]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((Navbar_default()).Toggle, {
        "aria-controls": "basic-navbar-nav"
      }), /*#__PURE__*/jsx_runtime_.jsx((Navbar_default()).Collapse, {
        id: "basic-navbar-nav",
        className: "justify-content-end",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Nav_default()), {
          className: "justify-content-end",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link",
              style: {
                color: "#47CACC",
                fontWeight: "bold"
              },
              children: "Home"
            })
          }), user && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/write",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "nav-link",
                style: {
                  color: "#47CACC",
                  fontWeight: "bold"
                },
                children: "New Article"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/logout",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "nav-link",
                style: {
                  color: "#47CACC",
                  fontWeight: "bold"
                },
                children: "Log Out"
              })
            })]
          }), !user && /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/login",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link",
              style: {
                color: "#47CACC",
                fontWeight: "bold"
              },
              children: "Log In to Write"
            })
          })]
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/footer/Footer.jsx



function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "footer",
    children: /*#__PURE__*/jsx_runtime_.jsx("footer", {
      class: "py-5 bg-dark fixed-bottom",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          class: "m-0 text-center text-white",
          children: "Copyright \xA9 devHu\xDF 2022"
        })
      })
    })
  });
}

/* harmony default export */ const footer_Footer = (Footer);
;// CONCATENATED MODULE: ./pages/_app.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class MyApp extends app["default"] {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (ctx.req && ctx.req.session.passport) {
      pageProps.user = ctx.req.session.passport.user;
    }

    return {
      pageProps
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      user: props.pageProps.user
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;

    const props = _objectSpread(_objectSpread({}, pageProps), {}, {
      user: this.state.user
    });

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "devHu\xDF-Wiki"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(AppNavbar, {
        user: this.state.user
      }), /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jumbotron",
          style: {
            color: "#33539E",
            backgroundColor: "#ECF0F1",
            borderRadius: "7px"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, props))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(footer_Footer, {})]
    });
  }

}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,791], () => (__webpack_exec__(5231)));
module.exports = __webpack_exports__;

})();