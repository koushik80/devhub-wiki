"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-bootstrap/Col"
const Col_namespaceObject = require("react-bootstrap/Col");
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Row"
const Row_namespaceObject = require("react-bootstrap/Row");
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Card"
const Card_namespaceObject = require("react-bootstrap/Card");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Article.js



function Article({
  article
}) {
  return /*#__PURE__*/jsx_runtime_.jsx((Card_default()), {
    bg: "grey",
    text: "black",
    style: {
      marginTop: "15px"
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Card_default()).Body, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((Card_default()).Title, {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: `/article?id=${article._id}`,
          style: {
            textDecoration: "none",
            color: "#C73866"
          },
          children: article.title
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((Card_default()).Text, {
        children: article.description
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Articles.js





function Articles(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Row_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx((Col_default()), {
      xs: 12,
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        style: {
          fontWeight: "bold",
          color: "#cc2b5e"
        },
        children: "Latest Articles"
      })
    }), props.articles && props.articles.map(article => /*#__PURE__*/jsx_runtime_.jsx((Col_default()), {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      children: /*#__PURE__*/jsx_runtime_.jsx(Article, {
        article: article
      })
    }, article._id)), !props.articles && /*#__PURE__*/jsx_runtime_.jsx((Col_default()), {
      xs: 12,
      children: "Loading..."
    })]
  });
}
;// CONCATENATED MODULE: ./pages/index.jsx



const axios = __webpack_require__(2167);




function Index() {
  const {
    0: articles,
    1: setArticles
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    axios.get("/api/articles").then(res => setArticles(res.data));
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
    children: /*#__PURE__*/jsx_runtime_.jsx(Articles, {
      articles: articles
    })
  });
}

/* harmony default export */ const pages = (Index);

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = (__webpack_exec__(9060));
module.exports = __webpack_exports__;

})();