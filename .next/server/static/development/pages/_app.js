module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_redux_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/redux/store/store */ "./src/redux/store/store.ts");
var _jsxFileName = "C:\\mvp-blog-typescript\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
  @font-face {
    font-family: 'OpenSans';
    src: url('/fonts/OpenSans-Regular.ttf');
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: "Blinker", sans-serif!important;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
function App(props) {
  const {
    Component,
    pageProps
  } = props;
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_0__["Provider"], {
    store: _src_redux_store_store__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  })));
} // import React from "react";
// import ReactDOM from "react-dom";
// import "./assets/styles/index.css";
// import App from './components/App';
// import {store} from './redux/store'
// import { Provider } from "react-redux";
// import { BrowserRouter, Route } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";
// ReactDOM.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <Route component={App} />
//     </Provider>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// import '@styles/reset.css';
// import '@styles/generalStyles.css';
// import { AppProps } from 'next/app';
// import Header from '@components/Header';
// import Footer from '@components/Footer';
// import styled from 'styled-components';
// const PageContainer = styled.div`
//   position: relative;
//   min-height: 100vh;
// `;
// const Container = styled.div`
//   padding-bottom: 150px;
// `;
// function MyApp({ Component, pageProps }: AppProps): JSX.Element {
//   return (
//     <PageContainer>
//       <Container>
//         <Header />
//         <Component {...pageProps} />
//       </Container>
//       <Footer />
//     </PageContainer>
//   );
// }
// export default MyApp;

/***/ }),

/***/ "./src/redux/reducers/reducer.ts":
/*!***************************************!*\
  !*** ./src/redux/reducers/reducer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/types */ "./src/redux/types/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  posts: [],
  title: "",
  body: "",
  comment: "",
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _types_types__WEBPACK_IMPORTED_MODULE_0__["POSTS_LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: !state.isLoading
      });

    case _types_types__WEBPACK_IMPORTED_MODULE_0__["POSTS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: [...action.payload]
      });

    case _types_types__WEBPACK_IMPORTED_MODULE_0__["POSTS_FAIL"]:
      return state;

    case _types_types__WEBPACK_IMPORTED_MODULE_0__["POST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        post: action.post
      });

    case _types_types__WEBPACK_IMPORTED_MODULE_0__["POST_ADD_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        title: "",
        body: ""
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/redux/store/store.ts":
/*!**********************************!*\
  !*** ./src/redux/store/store.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/reducer */ "./src/redux/reducers/reducer.ts");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);




const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  reducer: _reducers_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
}), Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/redux/types/types.ts":
/*!**********************************!*\
  !*** ./src/redux/types/types.ts ***!
  \**********************************/
/*! exports provided: POSTS_LOADING, POSTS_FAIL, POSTS_SUCCESS, POST_SUCCESS, POST_ADD_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTS_LOADING", function() { return POSTS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTS_FAIL", function() { return POSTS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTS_SUCCESS", function() { return POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_SUCCESS", function() { return POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ADD_SUCCESS", function() { return POST_ADD_SUCCESS; });
const POSTS_LOADING = "POSTS_LOADING";
const POSTS_FAIL = "POSTS_FAIL";
const POSTS_SUCCESS = "POSTS_SUCCESS";
const POST_SUCCESS = "POST_SUCCESS";
const POST_ADD_SUCCESS = "POST_ADD_SUCCESS"; // export interface PostsLoading {
//     type: typeof POSTS_LOADING;
//   }
//   export interface PostsFail {
//     type: typeof POSTS_FAIL;
//   }
//   export interface PostsSucces {
//     type: typeof POSTS_SUCCESS;
//   }
//   export type PostsDispatchTypes = PostsLoading | PostsFail | PostsSucces

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlL3N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC90eXBlcy90eXBlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJpbml0aWFsU3RhdGUiLCJwb3N0cyIsInRpdGxlIiwiYm9keSIsImNvbW1lbnQiLCJpc0xvYWRpbmciLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiUE9TVFNfTE9BRElORyIsIlBPU1RTX1NVQ0NFU1MiLCJwYXlsb2FkIiwiUE9TVFNfRkFJTCIsIlBPU1RfU1VDQ0VTUyIsInBvc3QiLCJQT1NUX0FERF9TVUNDRVNTIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1QLEtBQUssR0FBR2tCLHlEQUFXLENBQUNDLDZEQUFlLENBQUM7QUFBRVosb0VBQU9BO0FBQVQsQ0FBRCxDQUFoQixFQUErQmEsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUNDLGtEQUFELENBQWhCLENBQWxELENBQXpCO0FBR2V0QixvRUFBZixFOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNVyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNRyxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNRixhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNRyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNRSxnQkFBZ0IsR0FBRyxrQkFBekIsQyxDQUdQO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLDRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3NyYy9yZWR1eC9zdG9yZS9zdG9yZSc7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XHJcbiAgICBzcmM6IHVybCgnL2ZvbnRzL09wZW5TYW5zLVJlZ3VsYXIudHRmJyk7XHJcbiAgfVxyXG4gIGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbiAgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG4gIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuICBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG4gIGIsIHUsIGksIGNlbnRlcixcclxuICBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG4gIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG4gIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxyXG4gIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcclxuICBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxyXG4gIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG4gIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB9XHJcbiAgLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG4gIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxyXG4gIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJsaW5rZXJcIiwgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIG9sLCB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBibG9ja3F1b3RlLCBxIHtcclxuICAgIHF1b3Rlczogbm9uZTtcclxuICB9XHJcbiAgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbiAgcTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuLy8gaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzL2luZGV4LmNzc1wiO1xyXG4vLyBpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xyXG4vLyBpbXBvcnQge3N0b3JlfSBmcm9tICcuL3JlZHV4L3N0b3JlJ1xyXG4vLyBpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG4vLyBpbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbi8vIGltcG9ydCAqIGFzIHNlcnZpY2VXb3JrZXIgZnJvbSBcIi4vc2VydmljZVdvcmtlclwiO1xyXG5cclxuLy8gUmVhY3RET00ucmVuZGVyKFxyXG4vLyAgIDxCcm93c2VyUm91dGVyPlxyXG4vLyAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbi8vICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e0FwcH0gLz5cclxuLy8gICAgIDwvUHJvdmlkZXI+XHJcbi8vICAgPC9Ccm93c2VyUm91dGVyPixcclxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcclxuLy8gKTtcclxuXHJcbi8vIC8vIElmIHlvdSB3YW50IHlvdXIgYXBwIHRvIHdvcmsgb2ZmbGluZSBhbmQgbG9hZCBmYXN0ZXIsIHlvdSBjYW4gY2hhbmdlXHJcbi8vIC8vIHVucmVnaXN0ZXIoKSB0byByZWdpc3RlcigpIGJlbG93LiBOb3RlIHRoaXMgY29tZXMgd2l0aCBzb21lIHBpdGZhbGxzLlxyXG4vLyAvLyBMZWFybiBtb3JlIGFib3V0IHNlcnZpY2Ugd29ya2VyczogaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQVxyXG4vLyBzZXJ2aWNlV29ya2VyLnVucmVnaXN0ZXIoKTtcclxuXHJcbi8vIGltcG9ydCAnQHN0eWxlcy9yZXNldC5jc3MnO1xyXG4vLyBpbXBvcnQgJ0BzdHlsZXMvZ2VuZXJhbFN0eWxlcy5jc3MnO1xyXG4vLyBpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuLy8gaW1wb3J0IEhlYWRlciBmcm9tICdAY29tcG9uZW50cy9IZWFkZXInO1xyXG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gJ0Bjb21wb25lbnRzL0Zvb3Rlcic7XHJcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuLy8gY29uc3QgUGFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuLy8gICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XHJcbi8vIGA7XHJcblxyXG4vLyBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8UGFnZUNvbnRhaW5lcj5cclxuLy8gICAgICAgPENvbnRhaW5lcj5cclxuLy8gICAgICAgICA8SGVhZGVyIC8+XHJcbi8vICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4vLyAgICAgICA8L0NvbnRhaW5lcj5cclxuLy8gICAgICAgPEZvb3RlciAvPlxyXG4vLyAgICAgPC9QYWdlQ29udGFpbmVyPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJpbXBvcnQge1xyXG4gIFBPU1RTX0ZBSUwsXHJcbiAgUE9TVFNfTE9BRElORyxcclxuICBQT1NUU19TVUNDRVNTLFxyXG4gIFBPU1RfU1VDQ0VTUyxcclxuICBQT1NUX0FERF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi90eXBlcy90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21tZW50SSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBwb3N0SWQ6IG51bWJlcjtcclxuICBib2R5OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBwb3N0IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYm9keTogc3RyaW5nO1xyXG4gIGNvbW1lbnRzPzogQXJyYXk8Q29tbWVudEk+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5pdGlhbFN0YXRlSSB7XHJcbiAgcG9zdHM6IEFycmF5PHBvc3Q+O1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICBjb21tZW50OiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBib2R5OiBzdHJpbmc7XHJcbiAgcG9zdD86IHBvc3Q7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFN0YXRlSSA9IHtcclxuICBwb3N0czogW10sXHJcbiAgdGl0bGU6IFwiXCIsXHJcbiAgYm9keTogXCJcIixcclxuICBjb21tZW50OiBcIlwiLFxyXG4gIGlzTG9hZGluZzogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBJbml0aWFsU3RhdGVJID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgUE9TVFNfTE9BRElORzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9hZGluZzogIXN0YXRlLmlzTG9hZGluZyB9O1xyXG5cclxuICAgIGNhc2UgUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBbLi4uYWN0aW9uLnBheWxvYWRdIH07XHJcblxyXG4gICAgY2FzZSBQT1NUU19GQUlMOlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcblxyXG4gICAgY2FzZSBQT1NUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0OiBhY3Rpb24ucG9zdCB9O1xyXG5cclxuICAgIGNhc2UgUE9TVF9BRERfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRpdGxlOiBcIlwiLCBib2R5OiBcIlwiIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvcmVkdWNlcic7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lUmVkdWNlcnMoeyByZWR1Y2VyIH0pLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJleHBvcnQgY29uc3QgUE9TVFNfTE9BRElORyA9IFwiUE9TVFNfTE9BRElOR1wiO1xyXG5leHBvcnQgY29uc3QgUE9TVFNfRkFJTCA9IFwiUE9TVFNfRkFJTFwiO1xyXG5leHBvcnQgY29uc3QgUE9TVFNfU1VDQ0VTUyA9IFwiUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUE9TVF9TVUNDRVNTID0gXCJQT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFBPU1RfQUREX1NVQ0NFU1MgPSBcIlBPU1RfQUREX1NVQ0NFU1NcIjtcclxuXHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIFBvc3RzTG9hZGluZyB7XHJcbi8vICAgICB0eXBlOiB0eXBlb2YgUE9TVFNfTE9BRElORztcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgZXhwb3J0IGludGVyZmFjZSBQb3N0c0ZhaWwge1xyXG4vLyAgICAgdHlwZTogdHlwZW9mIFBPU1RTX0ZBSUw7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIGV4cG9ydCBpbnRlcmZhY2UgUG9zdHNTdWNjZXMge1xyXG4vLyAgICAgdHlwZTogdHlwZW9mIFBPU1RTX1NVQ0NFU1M7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIGV4cG9ydCB0eXBlIFBvc3RzRGlzcGF0Y2hUeXBlcyA9IFBvc3RzTG9hZGluZyB8IFBvc3RzRmFpbCB8IFBvc3RzU3VjY2VzXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9