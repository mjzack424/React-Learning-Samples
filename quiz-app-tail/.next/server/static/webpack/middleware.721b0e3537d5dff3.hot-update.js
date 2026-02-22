"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    // return NextResponse.redirect(new URL(\"/quiz\", request.url));\n    //   return NextResponse.rewrite(new URL(\"/under-construction\", request.url)); //باز نویسی\n    if (request.nextUrl.pathname.startsWith(\"/about\")) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/quiz\", request.url));\n    }\n}\nconst config = {\n    matcher: \"/about/:path*\"\n}; // export const config = {\n //   matcher: \"/((?!api|_next/static|_next/image|favicon.ico).*)\",\n // };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFcEMsU0FBU0MsV0FBV0MsT0FBTztJQUNoQywrREFBK0Q7SUFDL0QsMEZBQTBGO0lBQzFGLElBQUlBLFFBQVFDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsV0FBVztRQUNqRCxPQUFPTCxrRkFBWUEsQ0FBQ00sUUFBUSxDQUFDLElBQUlDLElBQUksU0FBU0wsUUFBUU0sR0FBRztJQUMzRDtBQUNGO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztBQUNYLEVBQUUsQ0FFRiwwQkFBMEI7Q0FDMUIsa0VBQWtFO0NBQ2xFLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS5qcz8zYmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdCkge1xyXG4gIC8vIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9xdWl6XCIsIHJlcXVlc3QudXJsKSk7XHJcbiAgLy8gICByZXR1cm4gTmV4dFJlc3BvbnNlLnJld3JpdGUobmV3IFVSTChcIi91bmRlci1jb25zdHJ1Y3Rpb25cIiwgcmVxdWVzdC51cmwpKTsgLy/YqNin2LIg2YbZiNuM2LPbjFxyXG4gIGlmIChyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9hYm91dFwiKSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL3F1aXpcIiwgcmVxdWVzdC51cmwpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogXCIvYWJvdXQvOnBhdGgqXCIsXHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4vLyAgIG1hdGNoZXI6IFwiLygoPyFhcGl8X25leHQvc3RhdGljfF9uZXh0L2ltYWdlfGZhdmljb24uaWNvKS4qKVwiLFxyXG4vLyB9O1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});