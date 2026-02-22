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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    // return NextResponse.redirect(new URL(\"/quiz\", request.url));\n    //   return NextResponse.rewrite(new URL(\"/under-construction\", request.url)); //باز نویسی\n    if (request.nextUrl.pathname.startWith(\"/about\")) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/quiz\", request.url));\n    }\n}\nconst config = {\n    matcher: \"/about/:path*\"\n}; // export const config = {\n //   matcher: \"/((?!api|_next/static|_next/image|favicon.ico).*)\",\n // };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFcEMsU0FBU0MsV0FBV0MsT0FBTztJQUNoQywrREFBK0Q7SUFDL0QsMEZBQTBGO0lBQzFGLElBQUlBLFFBQVFDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxTQUFTLENBQUMsV0FBVztRQUNoRCxPQUFPTCxrRkFBWUEsQ0FBQ00sUUFBUSxDQUFDLElBQUlDLElBQUksU0FBU0wsUUFBUU0sR0FBRztJQUMzRDtBQUNGO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztBQUNYLEVBQUUsQ0FFRiwwQkFBMEI7Q0FDMUIsa0VBQWtFO0NBQ2xFLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS5qcz8zYmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdCkge1xyXG4gIC8vIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9xdWl6XCIsIHJlcXVlc3QudXJsKSk7XHJcbiAgLy8gICByZXR1cm4gTmV4dFJlc3BvbnNlLnJld3JpdGUobmV3IFVSTChcIi91bmRlci1jb25zdHJ1Y3Rpb25cIiwgcmVxdWVzdC51cmwpKTsgLy/YqNin2LIg2YbZiNuM2LPbjFxyXG4gIGlmIChyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRXaXRoKFwiL2Fib3V0XCIpKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvcXVpelwiLCByZXF1ZXN0LnVybCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBcIi9hYm91dC86cGF0aCpcIixcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbi8vICAgbWF0Y2hlcjogXCIvKCg/IWFwaXxfbmV4dC9zdGF0aWN8X25leHQvaW1hZ2V8ZmF2aWNvbi5pY28pLiopXCIsXHJcbi8vIH07XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0V2l0aCIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});