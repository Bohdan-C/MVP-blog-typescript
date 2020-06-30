webpackHotUpdate("static\\development\\pages\\posts\\[postId].js",{

/***/ "./src/redux/actions/actions.ts":
/*!**************************************!*\
  !*** ./src/redux/actions/actions.ts ***!
  \**************************************/
/*! exports provided: getPosts, getPostsById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsById", function() { return getPostsById; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/types */ "./src/redux/types/types.ts");



var postsLoading = function postsLoading() {
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_1__["POSTS_LOADING"]
  };
};

var successData = function successData(data) {
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_1__["POSTS_SUCCESS"],
    payload: data
  };
};

var errorData = function errorData(error) {
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_1__["POSTS_FAIL"],
    payload: error
  };
};

var successPost = function successPost(data) {
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_1__["POST_SUCCESS"],
    payload: data
  };
};

var getPosts = function getPosts() {
  return function (dispatch) {
    postsLoading();
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://simple-blog-api.crew.red/posts').then(function (res) {
      return dispatch(successData(res.data));
    })["catch"](function (error) {
      return dispatch(errorData(error));
    })["finally"](function () {
      return postsLoading();
    });
  };
};

var getPostsById = function getPostsById(id) {
  return function (dispatch) {
    postsLoading();
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://simple-blog-api.crew.red/posts/".concat(id, "?_embed=comments")).then(function (res) {
      return dispatch(successPost(res.data));
    });
  };
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbInBvc3RzTG9hZGluZyIsInR5cGUiLCJQT1NUU19MT0FESU5HIiwic3VjY2Vzc0RhdGEiLCJkYXRhIiwiUE9TVFNfU1VDQ0VTUyIsInBheWxvYWQiLCJlcnJvckRhdGEiLCJlcnJvciIsIlBPU1RTX0ZBSUwiLCJzdWNjZXNzUG9zdCIsIlBPU1RfU1VDQ0VTUyIsImdldFBvc3RzIiwiZGlzcGF0Y2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJnZXRQb3N0c0J5SWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCQyxRQUFJLEVBQUVDLDBEQUFhQTtBQURPLEdBQVA7QUFBQSxDQUFyQjs7QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFEO0FBQUEsU0FBVztBQUM3QkgsUUFBSSxFQUFFSSwwREFEdUI7QUFFN0JDLFdBQU8sRUFBRUY7QUFGb0IsR0FBWDtBQUFBLENBQXBCOztBQUtBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzVCUCxRQUFJLEVBQUVRLHVEQURzQjtBQUU1QkgsV0FBTyxFQUFFRTtBQUZtQixHQUFaO0FBQUEsQ0FBbEI7O0FBS0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ04sSUFBRDtBQUFBLFNBQVc7QUFDM0JILFFBQUksRUFBRVUseURBRHFCO0FBRTNCTCxXQUFPLEVBQUVGO0FBRmtCLEdBQVg7QUFBQSxDQUFwQjs7QUFNQSxJQUFNUSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFNBQU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ25DYixnQkFBWTtBQUNaYyxnREFBSyxDQUNGQyxHQURILENBQ08sd0NBRFAsRUFFR0MsSUFGSCxDQUVRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTSixRQUFRLENBQUNWLFdBQVcsQ0FBQ2MsR0FBRyxDQUFDYixJQUFMLENBQVosQ0FBakI7QUFBQSxLQUZSLFdBR1MsVUFBQ0ksS0FBRDtBQUFBLGFBQVdLLFFBQVEsQ0FBQ04sU0FBUyxDQUFDQyxLQUFELENBQVYsQ0FBbkI7QUFBQSxLQUhULGFBSVc7QUFBQSxhQUFNUixZQUFZLEVBQWxCO0FBQUEsS0FKWDtBQUtELEdBUGdCO0FBQUEsQ0FBakI7O0FBU0EsSUFBTWtCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQ7QUFBQSxTQUEyQixVQUFDTixRQUFELEVBQXdCO0FBQ3RFYixnQkFBWTtBQUNaYyxnREFBSyxDQUNGQyxHQURILGtEQUNpREksRUFEakQsdUJBRUdILElBRkgsQ0FFUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0osUUFBUSxDQUFDSCxXQUFXLENBQUNPLEdBQUcsQ0FBQ2IsSUFBTCxDQUFaLENBQWpCO0FBQUEsS0FGUjtBQUdELEdBTG9CO0FBQUEsQ0FBckI7O0FBVUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxbcG9zdElkXS5qcy44NDY0NjUzNzBiMjI5OGU4OTY4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgUE9TVFNfRkFJTCwgUE9TVFNfTE9BRElORywgUE9TVFNfU1VDQ0VTUywgUE9TVF9TVUNDRVNTIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xyXG5cclxuY29uc3QgcG9zdHNMb2FkaW5nID0gKCkgPT4gKHtcclxuICB0eXBlOiBQT1NUU19MT0FESU5HLFxyXG59KTtcclxuXHJcbmNvbnN0IHN1Y2Nlc3NEYXRhID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogUE9TVFNfU1VDQ0VTUyxcclxuICBwYXlsb2FkOiBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGVycm9yRGF0YSA9IChlcnJvcikgPT4gKHtcclxuICB0eXBlOiBQT1NUU19GQUlMLFxyXG4gIHBheWxvYWQ6IGVycm9yLFxyXG59KTtcclxuXHJcbmNvbnN0IHN1Y2Nlc3NQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBQT1NUX1NVQ0NFU1MsXHJcbiAgICBwYXlsb2FkOiBkYXRhLFxyXG59KVxyXG5cclxuXHJcbmNvbnN0IGdldFBvc3RzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcG9zdHNMb2FkaW5nKCk7XHJcbiAgYXhpb3NcclxuICAgIC5nZXQoJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzJylcclxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKHN1Y2Nlc3NEYXRhKHJlcy5kYXRhKSkpXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBkaXNwYXRjaChlcnJvckRhdGEoZXJyb3IpKSlcclxuICAgIC5maW5hbGx5KCgpID0+IHBvc3RzTG9hZGluZygpKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBvc3RzQnlJZCA9IChpZDogc3RyaW5nIHwgc3RyaW5nW10pID0+IChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICBwb3N0c0xvYWRpbmcoKTtcclxuICBheGlvc1xyXG4gICAgLmdldChgaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvJHtpZH0/X2VtYmVkPWNvbW1lbnRzYClcclxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKHN1Y2Nlc3NQb3N0KHJlcy5kYXRhKSkpXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBnZXRQb3N0cywgZ2V0UG9zdHNCeUlkIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=