webpackHotUpdate("static\\development\\pages\\posts\\[postId].js",{

/***/ "./src/components/CreateComment.tsx":
/*!******************************************!*\
  !*** ./src/components/CreateComment.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\mvp-blog-typescript\\src\\components\\CreateComment.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





;
/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  var _useState2;

  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var postId = router.query.postId;
  console.log("postId :>> ", postId);
  var IDS = {
    BODY: "body",
    POST_ID: "postId"
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_useState2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState2, IDS.BODY, ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState2, IDS.POST_ID, postId), _useState2)),
      state = _useState[0],
      setState = _useState[1];

  console.log("state :>> ", state);

  var onChange = function onChange(event) {
    var _event$target = event.target,
        id = _event$target.id,
        value = _event$target.value;
    setState(function (currentState) {
      return _objectSpread(_objectSpread({}, currentState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, id, value));
    });
  };

  var addComment = function addComment(event) {
    event.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify(state),
      url: "https://simple-blog-api.crew.red/comments"
    }).then(function (res) {
      return console.log(res);
    });
  };

  return __jsx("form", {
    onSubmit: addComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(Input, {
    id: IDS.BODY,
    value: state[IDS.BODY],
    onChange: onChange,
    placeholder: "Comment...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx(Btn, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "Send comment"));
}, "I1u+oav6yTHx1o8RiFgm94PkF3U=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
}));
var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "CreateComment__Input",
  componentId: "t6ryb5-0"
})(["padding-left:25px;font-size:16px;width:549px;height:45px;margin-top:40px;border:none;border-radius:10px;box-shadow:inset 0 0 7px rgba(0,0,0,0.2);"]);
_c = Input;
var Btn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "CreateComment__Btn",
  componentId: "t6ryb5-1"
})(["margin-left:12px;border:none;border-radius:10px;background:#fff;width:110px;height:45px;box-shadow:0px 0px 5px 0px rgba(0,0,0,0.35);"]);
_c2 = Btn;

var _c, _c2;

$RefreshReg$(_c, "Input");
$RefreshReg$(_c2, "Btn");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DcmVhdGVDb21tZW50LnRzeCJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0SWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJJRFMiLCJCT0RZIiwiUE9TVF9JRCIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiY3VycmVudFN0YXRlIiwiYWRkQ29tbWVudCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJ0aGVuIiwicmVzIiwiSW5wdXQiLCJzdHlsZWQiLCJpbnB1dCIsIkJ0biIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0c7QUFFWSw4RUFBTTtBQUFBOztBQUFBOztBQUNuQixNQUFNQSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRG1CLE1BRVhDLE1BRlcsR0FFQUYsTUFBTSxDQUFDRyxLQUZQLENBRVhELE1BRlc7QUFJbkJFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJILE1BQTNCO0FBRUEsTUFBTUksR0FBRyxHQUFHO0FBQ1ZDLFFBQUksRUFBRSxNQURJO0FBRVZDLFdBQU8sRUFBRTtBQUZDLEdBQVo7O0FBTm1CLGtCQVdPQyxzREFBUSx5SEFDL0JILEdBQUcsQ0FBQ0MsSUFEMkIsRUFDcEIsRUFEb0IseUdBRS9CRCxHQUFHLENBQUNFLE9BRjJCLEVBRWpCTixNQUZpQixlQVhmO0FBQUEsTUFXWlEsS0FYWTtBQUFBLE1BV0xDLFFBWEs7O0FBZ0JuQlAsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkssS0FBMUI7O0FBRUEsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsd0JBQ0pBLEtBQUssQ0FBQ0MsTUFERjtBQUFBLFFBQ2xCQyxFQURrQixpQkFDbEJBLEVBRGtCO0FBQUEsUUFDZEMsS0FEYyxpQkFDZEEsS0FEYztBQUcxQkwsWUFBUSxDQUFDLFVBQUNNLFlBQUQ7QUFBQSw2Q0FDSkEsWUFESSxxR0FFTkYsRUFGTSxFQUVEQyxLQUZDO0FBQUEsS0FBRCxDQUFSO0FBSUQsR0FQRDs7QUFTRSxNQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDTCxLQUFELEVBQVc7QUFDNUJBLFNBQUssQ0FBQ00sY0FBTjtBQUNBQyxnREFBSyxDQUFDO0FBQ0pDLFlBQU0sRUFBRSxNQURKO0FBRUpDLGFBQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQixPQUZMO0FBR0pDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVmLEtBQWYsQ0FIRjtBQUlKZ0IsU0FBRyxFQUFFO0FBSkQsS0FBRCxDQUFMLENBS0dDLElBTEgsQ0FLUSxVQUFDQyxHQUFEO0FBQUEsYUFBU3hCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZdUIsR0FBWixDQUFUO0FBQUEsS0FMUjtBQU1ELEdBUkQ7O0FBVUYsU0FDRTtBQUFNLFlBQVEsRUFBRVYsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUNFLE1BQUUsRUFBRVosR0FBRyxDQUFDQyxJQURWO0FBRUUsU0FBSyxFQUFFRyxLQUFLLENBQUNKLEdBQUcsQ0FBQ0MsSUFBTCxDQUZkO0FBR0UsWUFBUSxFQUFFSyxRQUhaO0FBSUUsZUFBVyxFQUFDLFlBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0UsTUFBQyxHQUFEO0FBQUssUUFBSSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRixDQURGO0FBV0QsQ0FoREQ7QUFBQSxVQUNpQlgscURBRGpCO0FBQUE7QUFrREEsSUFBTTRCLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsS0FBVjtBQUFBO0FBQUE7QUFBQSx5SkFBWDtLQUFNRixLO0FBV04sSUFBTUcsR0FBRyxHQUFHRix5REFBTSxDQUFDRyxNQUFWO0FBQUE7QUFBQTtBQUFBLDRJQUFUO01BQU1ELEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxbcG9zdElkXS5qcy44MjFmY2MyNmRlNmI4Mjc1OGM1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmludGVyZmFjZSBJY29tbWVudCB7XHJcbiAgICAvLyBQT1NUX0lEOiBudW1iZXIsXHJcbiAgICBCT0RZOiBzdHJpbmdcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcG9zdElkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwicG9zdElkIDo+PiBcIiwgcG9zdElkKTtcclxuXHJcbiAgY29uc3QgSURTID0ge1xyXG4gICAgQk9EWTogXCJib2R5XCIsXHJcbiAgICBQT1NUX0lEOiBcInBvc3RJZFwiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgW0lEUy5CT0RZXTogXCJcIixcclxuICAgIFtJRFMuUE9TVF9JRF06IHBvc3RJZCxcclxuICB9KTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJzdGF0ZSA6Pj4gXCIsIHN0YXRlKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHsgaWQsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgc2V0U3RhdGUoKGN1cnJlbnRTdGF0ZSkgPT4gKHtcclxuICAgICAgLi4uY3VycmVudFN0YXRlLFxyXG4gICAgICBbaWRdOiB2YWx1ZSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZENvbW1lbnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHN0YXRlKSxcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvY29tbWVudHNcIixcclxuICAgICAgfSkudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKTtcclxuICAgIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17YWRkQ29tbWVudH0+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIGlkPXtJRFMuQk9EWX1cclxuICAgICAgICB2YWx1ZT17c3RhdGVbSURTLkJPRFldfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbW1lbnQuLi5cIlxyXG4gICAgICAvPlxyXG4gICAgICA8QnRuIHR5cGU9XCJzdWJtaXRcIj5TZW5kIGNvbW1lbnQ8L0J0bj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogNTQ5cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbmA7XHJcblxyXG5jb25zdCBCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==