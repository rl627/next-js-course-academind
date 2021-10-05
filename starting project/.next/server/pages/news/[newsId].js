"use strict";
(() => {
var exports = {};
exports.id = "pages/news/[newsId]";
exports.ids = ["pages/news/[newsId]"];
exports.modules = {

/***/ "./pages/news/[newsId].js":
/*!********************************!*\
  !*** ./pages/news/[newsId].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ranli\\Desktop\\Git local\\Examples\\learn-next-js-academind\\next-js-course-academind\\pages\\news\\[newsId].js";
 // our-domain.com/[newsId]



function DetailPage() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const newsId = router.query.newsId;
  console.log(newsId); // send a request to a backend API to fetch news item with newsId

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    children: "The Detail Page"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailPage);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/news/[newsId].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbmV3cy9bbmV3c0lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7Ozs7QUFFQSxTQUFTQyxVQUFULEdBQXNCO0FBQ3BCLFFBQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBeEI7QUFDQSxRQUFNRyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRCxNQUE1QjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWixFQUhvQixDQUtwQjs7QUFFQSxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsaUVBQWVGLFVBQWY7Ozs7Ozs7Ozs7QUNkQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1qcy1jb3Vyc2UtYWNhZGVtaW5kLy4vcGFnZXMvbmV3cy9bbmV3c0lkXS5qcyIsIndlYnBhY2s6Ly9uZXh0LWpzLWNvdXJzZS1hY2FkZW1pbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHQtanMtY291cnNlLWFjYWRlbWluZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vIG91ci1kb21haW4uY29tL1tuZXdzSWRdXHJcblxyXG5mdW5jdGlvbiBEZXRhaWxQYWdlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG5ld3NJZCA9IHJvdXRlci5xdWVyeS5uZXdzSWQ7XHJcbiAgY29uc29sZS5sb2cobmV3c0lkKTtcclxuXHJcbiAgLy8gc2VuZCBhIHJlcXVlc3QgdG8gYSBiYWNrZW5kIEFQSSB0byBmZXRjaCBuZXdzIGl0ZW0gd2l0aCBuZXdzSWRcclxuXHJcbiAgcmV0dXJuIDxoMT5UaGUgRGV0YWlsIFBhZ2U8L2gxPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJEZXRhaWxQYWdlIiwicm91dGVyIiwibmV3c0lkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==