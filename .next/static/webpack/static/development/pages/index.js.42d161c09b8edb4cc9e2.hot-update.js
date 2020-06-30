webpackHotUpdate("static\\development\\pages\\index.js",{

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

var successAddData = function successAddData() {
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_1__["POST_ADD_SUCCESS"]
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

var addPost = function addPost(newPost, dispatch) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(newPost),
      url: 'https://simple-blog-api.crew.red/posts'
    }).then(function (res) {
      return dispatch(successAddData(res));
    });
  };
}; // export function addPost(newPost: newPost, dispatch: Function) {
//   axios({
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       data: JSON.stringify(newPost),
//       url: 'https://simple-blog-api.crew.red/posts'
//   })
//       .then(res => dispatch({ type: "ADDPOST" }));
// };




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbInBvc3RzTG9hZGluZyIsInR5cGUiLCJQT1NUU19MT0FESU5HIiwic3VjY2Vzc0RhdGEiLCJkYXRhIiwiUE9TVFNfU1VDQ0VTUyIsInBheWxvYWQiLCJlcnJvckRhdGEiLCJlcnJvciIsIlBPU1RTX0ZBSUwiLCJzdWNjZXNzUG9zdCIsIlBPU1RfU1VDQ0VTUyIsInN1Y2Nlc3NBZGREYXRhIiwiUE9TVF9BRERfU1VDQ0VTUyIsImdldFBvc3RzIiwiZGlzcGF0Y2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJnZXRQb3N0c0J5SWQiLCJpZCIsImFkZFBvc3QiLCJuZXdQb3N0IiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FBTztBQUMxQkMsUUFBSSxFQUFFQywwREFBYUE7QUFETyxHQUFQO0FBQUEsQ0FBckI7O0FBSUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRDtBQUFBLFNBQVc7QUFDN0JILFFBQUksRUFBRUksMERBRHVCO0FBRTdCQyxXQUFPLEVBQUVGO0FBRm9CLEdBQVg7QUFBQSxDQUFwQjs7QUFLQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUM1QlAsUUFBSSxFQUFFUSx1REFEc0I7QUFFNUJILFdBQU8sRUFBRUU7QUFGbUIsR0FBWjtBQUFBLENBQWxCOztBQUtBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNOLElBQUQ7QUFBQSxTQUFXO0FBQzNCSCxRQUFJLEVBQUVVLHlEQURxQjtBQUUzQkwsV0FBTyxFQUFFRjtBQUZrQixHQUFYO0FBQUEsQ0FBcEI7O0FBS0EsSUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLFNBQU87QUFDNUJYLFFBQUksRUFBRVksNkRBQWdCQTtBQURNLEdBQVA7QUFBQSxDQUF2Qjs7QUFLQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFNBQU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ25DZixnQkFBWTtBQUNaZ0IsZ0RBQUssQ0FDRkMsR0FESCxDQUNPLHdDQURQLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0osUUFBUSxDQUFDWixXQUFXLENBQUNnQixHQUFHLENBQUNmLElBQUwsQ0FBWixDQUFqQjtBQUFBLEtBRlIsV0FHUyxVQUFDSSxLQUFEO0FBQUEsYUFBV08sUUFBUSxDQUFDUixTQUFTLENBQUNDLEtBQUQsQ0FBVixDQUFuQjtBQUFBLEtBSFQsYUFJVztBQUFBLGFBQU1SLFlBQVksRUFBbEI7QUFBQSxLQUpYO0FBS0QsR0FQZ0I7QUFBQSxDQUFqQjs7QUFTQSxJQUFNb0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRDtBQUFBLFNBQTJCLFVBQUNOLFFBQUQsRUFBd0I7QUFDdEVmLGdCQUFZO0FBQ1pnQixnREFBSyxDQUNGQyxHQURILGtEQUNpREksRUFEakQsdUJBRUdILElBRkgsQ0FFUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0osUUFBUSxDQUFDTCxXQUFXLENBQUNTLEdBQUcsQ0FBQ2YsSUFBTCxDQUFaLENBQWpCO0FBQUEsS0FGUjtBQUdELEdBTG9CO0FBQUEsQ0FBckI7O0FBVUM7O0FBRUQsSUFBTWtCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE9BQUQsRUFBbUJSLFFBQW5CO0FBQUEsU0FBMEMsVUFBQ0EsUUFBRCxFQUF3QjtBQUM5RUMsZ0RBQUssQ0FBQztBQUNKUSxZQUFNLEVBQUUsTUFESjtBQUVKQyxhQUFPLEVBQUU7QUFBRSx3QkFBZ0I7QUFBbEIsT0FGTDtBQUdKckIsVUFBSSxFQUFFc0IsSUFBSSxDQUFDQyxTQUFMLENBQWVKLE9BQWYsQ0FIRjtBQUlKSyxTQUFHLEVBQUU7QUFKRCxLQUFELENBQUwsQ0FNRFYsSUFOQyxDQU1JLFVBQUNDLEdBQUQ7QUFBQSxhQUFTSixRQUFRLENBQUNILGNBQWMsQ0FBQ08sR0FBRCxDQUFmLENBQWpCO0FBQUEsS0FOSjtBQU9ILEdBUmU7QUFBQSxDQUFoQixDLENBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDJkMTYxYzA5YjhlZGI0Y2M5ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFBPU1RTX0ZBSUwsIFBPU1RTX0xPQURJTkcsIFBPU1RTX1NVQ0NFU1MsIFBPU1RfU1VDQ0VTUywgUE9TVF9BRERfU1VDQ0VTUyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcclxuXHJcbmNvbnN0IHBvc3RzTG9hZGluZyA9ICgpID0+ICh7XHJcbiAgdHlwZTogUE9TVFNfTE9BRElORyxcclxufSk7XHJcblxyXG5jb25zdCBzdWNjZXNzRGF0YSA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFBPU1RTX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBlcnJvckRhdGEgPSAoZXJyb3IpID0+ICh7XHJcbiAgdHlwZTogUE9TVFNfRkFJTCxcclxuICBwYXlsb2FkOiBlcnJvcixcclxufSk7XHJcblxyXG5jb25zdCBzdWNjZXNzUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogUE9TVF9TVUNDRVNTLFxyXG4gICAgcGF5bG9hZDogZGF0YSxcclxufSlcclxuXHJcbmNvbnN0IHN1Y2Nlc3NBZGREYXRhID0gKCkgPT4gKHtcclxuICB0eXBlOiBQT1NUX0FERF9TVUNDRVNTLFxyXG59KVxyXG5cclxuXHJcbmNvbnN0IGdldFBvc3RzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcG9zdHNMb2FkaW5nKCk7XHJcbiAgYXhpb3NcclxuICAgIC5nZXQoJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzJylcclxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKHN1Y2Nlc3NEYXRhKHJlcy5kYXRhKSkpXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBkaXNwYXRjaChlcnJvckRhdGEoZXJyb3IpKSlcclxuICAgIC5maW5hbGx5KCgpID0+IHBvc3RzTG9hZGluZygpKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBvc3RzQnlJZCA9IChpZDogc3RyaW5nIHwgc3RyaW5nW10pID0+IChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICBwb3N0c0xvYWRpbmcoKTtcclxuICBheGlvc1xyXG4gICAgLmdldChgaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvJHtpZH0/X2VtYmVkPWNvbW1lbnRzYClcclxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKHN1Y2Nlc3NQb3N0KHJlcy5kYXRhKSkpXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgbmV3UG9zdCB7XHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICBib2R5OiBzdHJpbmdcclxufTtcclxuXHJcbmNvbnN0IGFkZFBvc3QgPSAobmV3UG9zdDogbmV3UG9zdCwgZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobmV3UG9zdCksXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzJ1xyXG4gIH0pXHJcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goc3VjY2Vzc0FkZERhdGEocmVzKSkpXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBhZGRQb3N0KG5ld1Bvc3Q6IG5ld1Bvc3QsIGRpc3BhdGNoOiBGdW5jdGlvbikge1xyXG4vLyAgIGF4aW9zKHtcclxuLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbi8vICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4vLyAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShuZXdQb3N0KSxcclxuLy8gICAgICAgdXJsOiAnaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMnXHJcbi8vICAgfSlcclxuLy8gICAgICAgLnRoZW4ocmVzID0+IGRpc3BhdGNoKHsgdHlwZTogXCJBRERQT1NUXCIgfSkpO1xyXG4vLyB9O1xyXG5cclxuXHJcbmV4cG9ydCB7IGdldFBvc3RzLCBnZXRQb3N0c0J5SWQgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==