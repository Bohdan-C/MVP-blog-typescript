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
      return dispatch(successPost(res.data));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbInBvc3RzTG9hZGluZyIsInR5cGUiLCJQT1NUU19MT0FESU5HIiwic3VjY2Vzc0RhdGEiLCJkYXRhIiwiUE9TVFNfU1VDQ0VTUyIsInBheWxvYWQiLCJlcnJvckRhdGEiLCJlcnJvciIsIlBPU1RTX0ZBSUwiLCJzdWNjZXNzUG9zdCIsIlBPU1RfU1VDQ0VTUyIsImdldFBvc3RzIiwiZGlzcGF0Y2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJnZXRQb3N0c0J5SWQiLCJpZCIsImFkZFBvc3QiLCJuZXdQb3N0IiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FBTztBQUMxQkMsUUFBSSxFQUFFQywwREFBYUE7QUFETyxHQUFQO0FBQUEsQ0FBckI7O0FBSUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRDtBQUFBLFNBQVc7QUFDN0JILFFBQUksRUFBRUksMERBRHVCO0FBRTdCQyxXQUFPLEVBQUVGO0FBRm9CLEdBQVg7QUFBQSxDQUFwQjs7QUFLQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUM1QlAsUUFBSSxFQUFFUSx1REFEc0I7QUFFNUJILFdBQU8sRUFBRUU7QUFGbUIsR0FBWjtBQUFBLENBQWxCOztBQUtBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNOLElBQUQ7QUFBQSxTQUFXO0FBQzNCSCxRQUFJLEVBQUVVLHlEQURxQjtBQUUzQkwsV0FBTyxFQUFFRjtBQUZrQixHQUFYO0FBQUEsQ0FBcEI7O0FBTUEsSUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxTQUFNLFVBQUNDLFFBQUQsRUFBYztBQUNuQ2IsZ0JBQVk7QUFDWmMsZ0RBQUssQ0FDRkMsR0FESCxDQUNPLHdDQURQLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0osUUFBUSxDQUFDVixXQUFXLENBQUNjLEdBQUcsQ0FBQ2IsSUFBTCxDQUFaLENBQWpCO0FBQUEsS0FGUixXQUdTLFVBQUNJLEtBQUQ7QUFBQSxhQUFXSyxRQUFRLENBQUNOLFNBQVMsQ0FBQ0MsS0FBRCxDQUFWLENBQW5CO0FBQUEsS0FIVCxhQUlXO0FBQUEsYUFBTVIsWUFBWSxFQUFsQjtBQUFBLEtBSlg7QUFLRCxHQVBnQjtBQUFBLENBQWpCOztBQVNBLElBQU1rQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxFQUFEO0FBQUEsU0FBMkIsVUFBQ04sUUFBRCxFQUF3QjtBQUN0RWIsZ0JBQVk7QUFDWmMsZ0RBQUssQ0FDRkMsR0FESCxrREFDaURJLEVBRGpELHVCQUVHSCxJQUZILENBRVEsVUFBQ0MsR0FBRDtBQUFBLGFBQVNKLFFBQVEsQ0FBQ0gsV0FBVyxDQUFDTyxHQUFHLENBQUNiLElBQUwsQ0FBWixDQUFqQjtBQUFBLEtBRlI7QUFHRCxHQUxvQjtBQUFBLENBQXJCOztBQVVDOztBQUVELElBQU1nQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxPQUFELEVBQW1CUixRQUFuQjtBQUFBLFNBQTBDLFVBQUNBLFFBQUQsRUFBd0I7QUFDOUVDLGdEQUFLLENBQUM7QUFDSlEsWUFBTSxFQUFFLE1BREo7QUFFSkMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRkw7QUFHSm5CLFVBQUksRUFBRW9CLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixPQUFmLENBSEY7QUFJSkssU0FBRyxFQUFFO0FBSkQsS0FBRCxDQUFMLENBTURWLElBTkMsQ0FNSSxVQUFDQyxHQUFEO0FBQUEsYUFBU0osUUFBUSxDQUFDSCxXQUFXLENBQUNPLEdBQUcsQ0FBQ2IsSUFBTCxDQUFaLENBQWpCO0FBQUEsS0FOSjtBQU9ILEdBUmU7QUFBQSxDQUFoQixDLENBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXFtwb3N0SWRdLmpzLjE0ZmZhMjQ5OGNiNDBjNmIzNTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBQT1NUU19GQUlMLCBQT1NUU19MT0FESU5HLCBQT1NUU19TVUNDRVNTLCBQT1NUX1NVQ0NFU1MgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XHJcblxyXG5jb25zdCBwb3N0c0xvYWRpbmcgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFBPU1RTX0xPQURJTkcsXHJcbn0pO1xyXG5cclxuY29uc3Qgc3VjY2Vzc0RhdGEgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBQT1NUU19TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZXJyb3JEYXRhID0gKGVycm9yKSA9PiAoe1xyXG4gIHR5cGU6IFBPU1RTX0ZBSUwsXHJcbiAgcGF5bG9hZDogZXJyb3IsXHJcbn0pO1xyXG5cclxuY29uc3Qgc3VjY2Vzc1Bvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFBPU1RfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IGRhdGEsXHJcbn0pXHJcblxyXG5cclxuY29uc3QgZ2V0UG9zdHMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBwb3N0c0xvYWRpbmcoKTtcclxuICBheGlvc1xyXG4gICAgLmdldCgnaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMnKVxyXG4gICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goc3VjY2Vzc0RhdGEocmVzLmRhdGEpKSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGRpc3BhdGNoKGVycm9yRGF0YShlcnJvcikpKVxyXG4gICAgLmZpbmFsbHkoKCkgPT4gcG9zdHNMb2FkaW5nKCkpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UG9zdHNCeUlkID0gKGlkOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gIHBvc3RzTG9hZGluZygpO1xyXG4gIGF4aW9zXHJcbiAgICAuZ2V0KGBodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cy8ke2lkfT9fZW1iZWQ9Y29tbWVudHNgKVxyXG4gICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goc3VjY2Vzc1Bvc3QocmVzLmRhdGEpKSlcclxufTtcclxuXHJcbmludGVyZmFjZSBuZXdQb3N0IHtcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIGJvZHk6IHN0cmluZ1xyXG59O1xyXG5cclxuY29uc3QgYWRkUG9zdCA9IChuZXdQb3N0OiBuZXdQb3N0LCBkaXNwYXRjaDogRnVuY3Rpb24pID0+IChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShuZXdQb3N0KSxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMnXHJcbiAgfSlcclxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChzdWNjZXNzUG9zdChyZXMuZGF0YSkpKVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gYWRkUG9zdChuZXdQb3N0OiBuZXdQb3N0LCBkaXNwYXRjaDogRnVuY3Rpb24pIHtcclxuLy8gICBheGlvcyh7XHJcbi8vICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4vLyAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuLy8gICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobmV3UG9zdCksXHJcbi8vICAgICAgIHVybDogJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzJ1xyXG4vLyAgIH0pXHJcbi8vICAgICAgIC50aGVuKHJlcyA9PiBkaXNwYXRjaCh7IHR5cGU6IFwiQUREUE9TVFwiIH0pKTtcclxuLy8gfTtcclxuXHJcblxyXG5leHBvcnQgeyBnZXRQb3N0cywgZ2V0UG9zdHNCeUlkIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=