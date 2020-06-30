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


var _this = undefined,
    _jsxFileName = "C:\\mvp-blog-typescript\\pages\\posts\\createPost\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import styled from "styled-components";
// import axios from "axios";
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

  var addPost = function addPost() {
    return function (dispatch) {
      e.preventDefault();
      axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(state),
        url: "https://simple-blog-api.crew.red/posts"
      }).then(function (res) {
        return console.log(res);
      });
    };
  };

  var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    fetch("https://simple-blog-api.crew.red/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    }).then(function (res) {
      return console.log(res);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_src_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("form", {
    onSubmit: onFormSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 59,
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
      lineNumber: 65,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9jcmVhdGVQb3N0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJRFMiLCJUSVRMRSIsIkJPRFkiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImN1cnJlbnRTdGF0ZSIsImFkZFBvc3QiLCJkaXNwYXRjaCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJ0aGVuIiwicmVzIiwib25Gb3JtU3VibWl0IiwiZmV0Y2giLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUc7QUFDVkMsT0FBSyxFQUFFLE9BREc7QUFFVkMsTUFBSSxFQUFFO0FBRkksQ0FBWjtBQUtlLDhFQUFNO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLHlIQUMvQkgsR0FBRyxDQUFDQyxLQUQyQixFQUNuQixFQURtQix5R0FFL0JELEdBQUcsQ0FBQ0UsSUFGMkIsRUFFcEIsRUFGb0IsZUFEZjtBQUFBLE1BQ1pFLEtBRFk7QUFBQSxNQUNMQyxRQURLOztBQU1uQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkgsS0FBMUIsRUFObUIsQ0FRckI7O0FBRUUsTUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQUEsb0JBQ0FBLENBQUMsQ0FBQ0MsTUFERjtBQUFBLFFBQ2RDLEVBRGMsYUFDZEEsRUFEYztBQUFBLFFBQ1ZDLEtBRFUsYUFDVkEsS0FEVTtBQUd0QlAsWUFBUSxDQUFDLFVBQUNRLFlBQUQ7QUFBQSw2Q0FDSkEsWUFESSxxR0FFTkYsRUFGTSxFQUVEQyxLQUZDO0FBQUEsS0FBRCxDQUFSO0FBSUQsR0FQRDs7QUFTQSxNQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU0sVUFBQ0MsUUFBRCxFQUF3QjtBQUM1Q04sT0FBQyxDQUFDTyxjQUFGO0FBRUFDLFdBQUssQ0FBQztBQUNKQyxjQUFNLEVBQUUsTUFESjtBQUVKQyxlQUFPLEVBQUU7QUFBRSwwQkFBZ0I7QUFBbEIsU0FGTDtBQUdKQyxZQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlbEIsS0FBZixDQUhGO0FBSUptQixXQUFHLEVBQUU7QUFKRCxPQUFELENBQUwsQ0FLR0MsSUFMSCxDQUtRLFVBQUNDLEdBQUQ7QUFBQSxlQUFTbkIsT0FBTyxDQUFDQyxHQUFSLENBQVlrQixHQUFaLENBQVQ7QUFBQSxPQUxSO0FBTUQsS0FUZTtBQUFBLEdBQWhCOztBQVdGLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNqQixDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ08sY0FBRjtBQUNBVyxTQUFLLENBQUMsd0NBQUQsRUFBMkM7QUFDOUNULFlBQU0sRUFBRSxNQURzQztBQUU5Q0MsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGcUM7QUFLOUNTLFVBQUksRUFBRVAsSUFBSSxDQUFDQyxTQUFMLENBQWVsQixLQUFmO0FBTHdDLEtBQTNDLENBQUwsQ0FNR29CLElBTkgsQ0FNUSxVQUFDQyxHQUFEO0FBQUEsYUFBU25CLE9BQU8sQ0FBQ0MsR0FBUixDQUFZa0IsR0FBWixDQUFUO0FBQUEsS0FOUjtBQU9ELEdBVEg7O0FBV0UsU0FDRSxtRUFDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFlBQVEsRUFBRUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsTUFBRSxFQUFFMUIsR0FBRyxDQUFDQyxLQURWO0FBRUUsU0FBSyxFQUFFRyxLQUFLLENBQUNKLEdBQUcsQ0FBQ0MsS0FBTCxDQUZkO0FBR0UsWUFBUSxFQUFFTyxRQUhaO0FBSUUsZUFBVyxFQUFDLFVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0U7QUFDRSxNQUFFLEVBQUVSLEdBQUcsQ0FBQ0UsSUFEVjtBQUVFLFNBQUssRUFBRUUsS0FBSyxDQUFDSixHQUFHLENBQUNFLElBQUwsQ0FGZDtBQUdFLFlBQVEsRUFBRU0sUUFIWjtBQUlFLGVBQVcsRUFBQyxTQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQWFFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLENBREYsQ0FGRixDQURGO0FBc0JELENBL0REIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0c1xcY3JlYXRlUG9zdC5qcy4yYWFhYjUzMzZkNTQxYWQ4N2NmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdmJhclwiO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBhZGRQb3N0IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IElEUyA9IHtcclxuICBUSVRMRTogXCJ0aXRsZVwiLFxyXG4gIEJPRFk6IFwiYm9keVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgW0lEUy5USVRMRV06IFwiXCIsXHJcbiAgICBbSURTLkJPRFldOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZygnc3RhdGUgOj4+ICcsIHN0YXRlKTtcclxuXHJcbi8vICAgOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgc2V0U3RhdGUoKGN1cnJlbnRTdGF0ZSkgPT4gKHtcclxuICAgICAgLi4uY3VycmVudFN0YXRlLFxyXG4gICAgICBbaWRdOiB2YWx1ZSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRQb3N0ID0gKCkgPT4gKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHN0YXRlKSxcclxuICAgICAgdXJsOiBcImh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzXCIsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpO1xyXG4gIH07XHJcblxyXG5jb25zdCBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBmZXRjaChcImh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdGF0ZSksXHJcbiAgICB9KS50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9e0lEUy5USVRMRX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlW0lEUy5USVRMRV19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZS4uLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPXtJRFMuQk9EWX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlW0lEUy5CT0RZXX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvc3QuLi5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9