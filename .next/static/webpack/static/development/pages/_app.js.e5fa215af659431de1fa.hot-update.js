webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/redux/reducers/reducer.ts":
/*!***************************************!*\
  !*** ./src/redux/reducers/reducer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/types */ "./src/redux/types/types.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  posts: [],
  title: "",
  body: "",
  comment: "",
  isLoading: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_types__WEBPACK_IMPORTED_MODULE_2__["POSTS_LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: !state.isLoading
      });

    case _types_types__WEBPACK_IMPORTED_MODULE_2__["POSTS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(action.payload)
      });

    case _types_types__WEBPACK_IMPORTED_MODULE_2__["POSTS_FAIL"]:
      return state;

    case _types_types__WEBPACK_IMPORTED_MODULE_2__["POST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        post: action.post
      });

    case _types_types__WEBPACK_IMPORTED_MODULE_2__["POST_ADD_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        title: "",
        body: ""
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVkdWNlci50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJwb3N0cyIsInRpdGxlIiwiYm9keSIsImNvbW1lbnQiLCJpc0xvYWRpbmciLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiUE9TVFNfTE9BRElORyIsIlBPU1RTX1NVQ0NFU1MiLCJwYXlsb2FkIiwiUE9TVFNfRkFJTCIsIlBPU1RfU1VDQ0VTUyIsInBvc3QiLCJQT1NUX0FERF9TVUNDRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRCQSxJQUFNQSxZQUEyQixHQUFHO0FBQ2xDQyxPQUFLLEVBQUUsRUFEMkI7QUFFbENDLE9BQUssRUFBRSxFQUYyQjtBQUdsQ0MsTUFBSSxFQUFFLEVBSDRCO0FBSWxDQyxTQUFPLEVBQUUsRUFKeUI7QUFLbENDLFdBQVMsRUFBRTtBQUx1QixDQUFwQzs7QUFRQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFzRDtBQUFBLE1BQXJEQyxLQUFxRCx1RUFBOUJQLFlBQThCO0FBQUEsTUFBaEJRLE1BQWdCOztBQUNwRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQywwREFBTDtBQUNFLDZDQUFZSCxLQUFaO0FBQW1CRixpQkFBUyxFQUFFLENBQUNFLEtBQUssQ0FBQ0Y7QUFBckM7O0FBRUYsU0FBS00sMERBQUw7QUFDRSw2Q0FBWUosS0FBWjtBQUFtQk4sYUFBSyxFQUFFLDZGQUFJTyxNQUFNLENBQUNJLE9BQWI7QUFBeEI7O0FBRUYsU0FBS0MsdURBQUw7QUFDRSxhQUFPTixLQUFQOztBQUVGLFNBQUtPLHlEQUFMO0FBQ0UsNkNBQVlQLEtBQVo7QUFBbUJRLFlBQUksRUFBRVAsTUFBTSxDQUFDTztBQUFoQzs7QUFFRixTQUFLQyw2REFBTDtBQUNFLDZDQUFZVCxLQUFaO0FBQW1CTCxhQUFLLEVBQUUsRUFBMUI7QUFBOEJDLFlBQUksRUFBRTtBQUFwQzs7QUFFRjtBQUNFLGFBQU9JLEtBQVA7QUFqQko7QUFtQkQsQ0FwQkQ7O0FBc0JlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5lNWZhMjE1YWY2NTk0MzFkZTFmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBQT1NUU19GQUlMLFxyXG4gIFBPU1RTX0xPQURJTkcsXHJcbiAgUE9TVFNfU1VDQ0VTUyxcclxuICBQT1NUX1NVQ0NFU1MsXHJcbiAgUE9TVF9BRERfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vdHlwZXMvdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWVudEkge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgcG9zdElkOiBudW1iZXI7XHJcbiAgYm9keTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgcG9zdCB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGJvZHk6IHN0cmluZztcclxuICBjb21tZW50cz86IEFycmF5PENvbW1lbnRJPjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEluaXRpYWxTdGF0ZUkge1xyXG4gIHBvc3RzOiBBcnJheTxwb3N0PjtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgY29tbWVudDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYm9keTogc3RyaW5nO1xyXG4gIHBvc3Q/OiBwb3N0O1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaXRpYWxTdGF0ZUkgPSB7XHJcbiAgcG9zdHM6IFtdLFxyXG4gIHRpdGxlOiBcIlwiLFxyXG4gIGJvZHk6IFwiXCIsXHJcbiAgY29tbWVudDogXCJcIixcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogSW5pdGlhbFN0YXRlSSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFBPU1RTX0xPQURJTkc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvYWRpbmc6ICFzdGF0ZS5pc0xvYWRpbmcgfTtcclxuXHJcbiAgICBjYXNlIFBPU1RTX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogWy4uLmFjdGlvbi5wYXlsb2FkXSB9O1xyXG5cclxuICAgIGNhc2UgUE9TVFNfRkFJTDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG5cclxuICAgIGNhc2UgUE9TVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdDogYWN0aW9uLnBvc3QgfTtcclxuXHJcbiAgICBjYXNlIFBPU1RfQUREX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0aXRsZTogXCJcIiwgYm9keTogXCJcIiB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9