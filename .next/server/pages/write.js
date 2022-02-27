"use strict";
(() => {
var exports = {};
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 6611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Write)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function Write({
  user
}) {
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: description,
    1: setDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const handleSubmit = e => {
    e.preventDefault();
    const reqData = {
      title,
      description,
      text: text.replace(/\n/g, "<br />"),
      user
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/create-article", reqData).then(res => {
      swal("Article Submitted", "", "success");
      location.href = "/";
    }).catch(err => {
      return swal("Sorry", `Article name is not unique`, "error");
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
    onSubmit: e => handleSubmit(e),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
      htmlFor: "title",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
        style: {
          color: "#cc2b5e",
          fontWeight: "bold"
        },
        children: "Title"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
      className: "browser-default",
      style: {
        height: "100%",
        width: "100%",
        padding: "10px",
        border: "2px #eee solid",
        borderRadius: "8px",
        color: "#33539E"
      },
      required: true,
      id: "title",
      type: "text",
      placeholder: "Give a suitable title ...",
      onChange: e => setTitle(e.target.value.trim())
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
      style: {
        marginTop: "1em"
      },
      htmlFor: "description",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
        style: {
          color: "#cc2b5e",
          fontWeight: "bold"
        },
        children: "Description"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
      className: "browser-default",
      style: {
        height: "100%",
        width: "100%",
        padding: "10px",
        border: "2px #eee solid",
        borderRadius: "8px",
        color: "#33539E"
      },
      required: true,
      id: "description",
      type: "text",
      placeholder: "Write a suitable description in one or two sentences ...",
      onChange: e => setDescription(e.target.value.trim())
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
      style: {
        marginTop: "1em"
      },
      htmlFor: "article",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
        style: {
          color: "#cc2b5e",
          fontWeight: "bold"
        },
        children: "Article"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("textarea", {
      rows: "10",
      className: "browser-default",
      style: {
        height: "100%",
        width: "100%",
        padding: "10px",
        border: "2px #eee solid",
        borderRadius: "8px",
        color: "#33539E",
        backgroundColor: "white"
      },
      required: true,
      id: "article",
      placeholder: "Write the Article Body ...",
      onChange: e => setText(e.target.value.trim())
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
      style: {
        marginTop: "1em",
        borderRadius: "8px",
        backgroundColor: "#47CACC",
        color: "white",
        border: "none",
        fontWeight: "bold"
      },
      type: "submit",
      children: "Submit"
    })]
  });
}

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__(6611));
module.exports = __webpack_exports__;

})();