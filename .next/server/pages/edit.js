"use strict";
(() => {
var exports = {};
exports.id = 637;
exports.ids = [637];
exports.modules = {

/***/ 4478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "sweetalert"
const external_sweetalert_namespaceObject = require("sweetalert");
var external_sweetalert_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/edit.jsx






const Article = (0,router_.withRouter)(props => {
  const {
    0: failure,
    1: setFailure
  } = (0,external_react_.useState)("");
  const {
    0: id,
    1: setId
  } = (0,external_react_.useState)("");
  const {
    0: title,
    1: setTitle
  } = (0,external_react_.useState)("");
  const {
    0: description,
    1: setDescription
  } = (0,external_react_.useState)("");
  const {
    0: text,
    1: setText
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    // console.log(props.router.query.id);
    const id = props.router.query.id;

    if (id) {
      external_axios_default().get(`/api/article-data?id=${props.router.query.id}`).then(res => {
        const data = res.data;
        console.log(data[0]);

        if (data[0]) {
          setTimeout(() => {
            document.querySelector("#article").value = data[0].text.replace(/<br \/>/g, '\n');
          }, 500);
          setId(data[0]._id);
          setTitle(data[0].title);
          setDescription(data[0].description);
          setText(data[0].text);
        } else {
          setFailure("No article Found with that id");
        }
      });
    } else {
      location.href = "/";
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const confirmation = confirm("Are you sure you want to edit this article ?");

    if (confirmation) {
      const reqData = {
        id,
        title,
        description,
        user: props.user,
        text: text.replace(/\n/g, "<br />")
      };
      external_axios_default().post("/api/update-article", reqData).then(res => {
        external_sweetalert_default()("Article Edit", "", "success");
        location.href = "/";
      }).catch(err => {
        return external_sweetalert_default()("Sorry", `Article Editing Failed`, "error");
      });
    } else return;
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [!id && !failure && /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "Loading Article ..."
    }), id && /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: e => handleSubmit(e),
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "title",
        children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
          style: {
            color: "#cc2b5e",
            fontWeight: "bold"
          },
          children: "Title"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
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
        defaultValue: title,
        placeholder: "Give a suitable title ...",
        onChange: e => setTitle(e.target.value.trim())
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        style: {
          marginTop: "1em"
        },
        htmlFor: "description",
        children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
          style: {
            color: "#cc2b5e",
            fontWeight: "bold"
          },
          children: "Description"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
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
        defaultValue: description,
        id: "description",
        type: "text",
        placeholder: "Write a suitable description in one or two sentences ...",
        onChange: e => setDescription(e.target.value.trim())
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        style: {
          marginTop: "1em"
        },
        htmlFor: "article",
        children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
          style: {
            color: "#cc2b5e",
            fontWeight: "bold"
          },
          children: "Article"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
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
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
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
    }), failure && `${failure}`]
  });
});
/* harmony default export */ const edit = (Article);

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__(4478));
module.exports = __webpack_exports__;

})();