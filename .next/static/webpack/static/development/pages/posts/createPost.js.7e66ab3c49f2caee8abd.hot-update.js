webpackHotUpdate("static\\development\\pages\\posts\\createPost.js",{

/***/ "./pages/posts/createPost/index.tsx":
/*!******************************************!*\
  !*** ./pages/posts/createPost/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/components/Navbar */ "./src/components/Navbar.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "C:\\mvp-blog-typescript\\pages\\posts\\createPost\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import styled from "styled-components";

 // import { addPost } from "../../../src/redux/actions/actions";

var IDS = {
  TITLE: "title",
  BODY: "body"
};
/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  var _useState2;

  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_useState2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState2, IDS.TITLE, ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState2, IDS.BODY, ""), _useState2)),
      state = _useState[0],
      setState = _useState[1];

  console.log('state :>> ', state); //   : React.ChangeEvent<HTMLInputElement>

  var onChange = function onChange(e) {
    var _e$target = e.target,
        id = _e$target.id,
        value = _e$target.value;
    setState(function (currentState) {
      return _objectSpread(_objectSpread({}, currentState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, id, value));
    });
  };

  var addPost = function addPost(event) {
    event.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify(state),
      url: "https://simple-blog-api.crew.red/posts"
    }).then(function (res) {
      return console.log(res);
    });
    setState();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_src_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("form", {
    onSubmit: addPost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("input", {
    id: IDS.TITLE,
    value: state[IDS.TITLE],
    onChange: onChange,
    placeholder: "Title...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx("input", {
    id: IDS.BODY,
    value: state[IDS.BODY],
    onChange: onChange,
    placeholder: "Post...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Submit"))));
}, "FYmXhCWLriIyGmEDFodCuFmDP78="));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9jcmVhdGVQb3N0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJRFMiLCJUSVRMRSIsIkJPRFkiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImN1cnJlbnRTdGF0ZSIsImFkZFBvc3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJ0aGVuIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBR0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHO0FBQ1ZDLE9BQUssRUFBRSxPQURHO0FBRVZDLE1BQUksRUFBRTtBQUZJLENBQVo7QUFLZSw4RUFBTTtBQUFBOztBQUFBOztBQUFBLGtCQUNPQyxzREFBUSx5SEFDL0JILEdBQUcsQ0FBQ0MsS0FEMkIsRUFDbkIsRUFEbUIseUdBRS9CRCxHQUFHLENBQUNFLElBRjJCLEVBRXBCLEVBRm9CLGVBRGY7QUFBQSxNQUNaRSxLQURZO0FBQUEsTUFDTEMsUUFESzs7QUFNbkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJILEtBQTFCLEVBTm1CLENBUXJCOztBQUVFLE1BQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUFBLG9CQUNBQSxDQUFDLENBQUNDLE1BREY7QUFBQSxRQUNkQyxFQURjLGFBQ2RBLEVBRGM7QUFBQSxRQUNWQyxLQURVLGFBQ1ZBLEtBRFU7QUFHdEJQLFlBQVEsQ0FBQyxVQUFDUSxZQUFEO0FBQUEsNkNBQ0pBLFlBREkscUdBRU5GLEVBRk0sRUFFREMsS0FGQztBQUFBLEtBQUQsQ0FBUjtBQUlELEdBUEQ7O0FBU0EsTUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUE2QztBQUMzREEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FDLGdEQUFLLENBQUM7QUFDSkMsWUFBTSxFQUFFLE1BREo7QUFFSkMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRkw7QUFHSkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWxCLEtBQWYsQ0FIRjtBQUlKbUIsU0FBRyxFQUFFO0FBSkQsS0FBRCxDQUFMLENBS0dDLElBTEgsQ0FLUSxVQUFDQyxHQUFEO0FBQUEsYUFBU25CLE9BQU8sQ0FBQ0MsR0FBUixDQUFZa0IsR0FBWixDQUFUO0FBQUEsS0FMUjtBQU1BcEIsWUFBUTtBQUNULEdBVEQ7O0FBV0EsU0FDRSxtRUFDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFlBQVEsRUFBRVMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsTUFBRSxFQUFFZCxHQUFHLENBQUNDLEtBRFY7QUFFRSxTQUFLLEVBQUVHLEtBQUssQ0FBQ0osR0FBRyxDQUFDQyxLQUFMLENBRmQ7QUFHRSxZQUFRLEVBQUVPLFFBSFo7QUFJRSxlQUFXLEVBQUMsVUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRTtBQUNFLE1BQUUsRUFBRVIsR0FBRyxDQUFDRSxJQURWO0FBRUUsU0FBSyxFQUFFRSxLQUFLLENBQUNKLEdBQUcsQ0FBQ0UsSUFBTCxDQUZkO0FBR0UsWUFBUSxFQUFFTSxRQUhaO0FBSUUsZUFBVyxFQUFDLFNBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBYUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsQ0FERixDQUZGLENBREY7QUFzQkQsQ0FwREQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxjcmVhdGVQb3N0LmpzLjdlNjZhYjNjNDlmMmNhZWU4YWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIGltcG9ydCB7IGFkZFBvc3QgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL3JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgSURTID0ge1xyXG4gIFRJVExFOiBcInRpdGxlXCIsXHJcbiAgQk9EWTogXCJib2R5XCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBbSURTLlRJVExFXTogXCJcIixcclxuICAgIFtJRFMuQk9EWV06IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdzdGF0ZSA6Pj4gJywgc3RhdGUpO1xyXG5cclxuLy8gICA6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgaWQsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBzZXRTdGF0ZSgoY3VycmVudFN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5jdXJyZW50U3RhdGUsXHJcbiAgICAgIFtpZF06IHZhbHVlLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFBvc3QgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoc3RhdGUpLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHNcIixcclxuICAgIH0pLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSk7XHJcbiAgICBzZXRTdGF0ZSgpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17YWRkUG9zdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9e0lEUy5USVRMRX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlW0lEUy5USVRMRV19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZS4uLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPXtJRFMuQk9EWX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlW0lEUy5CT0RZXX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvc3QuLi5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9