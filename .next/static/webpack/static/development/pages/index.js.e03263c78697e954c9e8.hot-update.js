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

var successAPo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbInBvc3RzTG9hZGluZyIsInR5cGUiLCJQT1NUU19MT0FESU5HIiwic3VjY2Vzc0RhdGEiLCJkYXRhIiwiUE9TVFNfU1VDQ0VTUyIsInBheWxvYWQiLCJlcnJvckRhdGEiLCJlcnJvciIsIlBPU1RTX0ZBSUwiLCJzdWNjZXNzUG9zdCIsIlBPU1RfU1VDQ0VTUyIsInN1Y2Nlc3NBUG8iLCJnZXRQb3N0cyIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZ2V0UG9zdHNCeUlkIiwiaWQiLCJhZGRQb3N0IiwibmV3UG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFNBQU87QUFDMUJDLFFBQUksRUFBRUMsMERBQWFBO0FBRE8sR0FBUDtBQUFBLENBQXJCOztBQUlBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQ7QUFBQSxTQUFXO0FBQzdCSCxRQUFJLEVBQUVJLDBEQUR1QjtBQUU3QkMsV0FBTyxFQUFFRjtBQUZvQixHQUFYO0FBQUEsQ0FBcEI7O0FBS0EsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDNUJQLFFBQUksRUFBRVEsdURBRHNCO0FBRTVCSCxXQUFPLEVBQUVFO0FBRm1CLEdBQVo7QUFBQSxDQUFsQjs7QUFLQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDTixJQUFEO0FBQUEsU0FBVztBQUMzQkgsUUFBSSxFQUFFVSx5REFEcUI7QUFFM0JMLFdBQU8sRUFBRUY7QUFGa0IsR0FBWDtBQUFBLENBQXBCOztBQUtBLElBQU1RLFVBQU47O0FBR0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxTQUFNLFVBQUNDLFFBQUQsRUFBYztBQUNuQ2QsZ0JBQVk7QUFDWmUsZ0RBQUssQ0FDRkMsR0FESCxDQUNPLHdDQURQLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0osUUFBUSxDQUFDWCxXQUFXLENBQUNlLEdBQUcsQ0FBQ2QsSUFBTCxDQUFaLENBQWpCO0FBQUEsS0FGUixXQUdTLFVBQUNJLEtBQUQ7QUFBQSxhQUFXTSxRQUFRLENBQUNQLFNBQVMsQ0FBQ0MsS0FBRCxDQUFWLENBQW5CO0FBQUEsS0FIVCxhQUlXO0FBQUEsYUFBTVIsWUFBWSxFQUFsQjtBQUFBLEtBSlg7QUFLRCxHQVBnQjtBQUFBLENBQWpCOztBQVNBLElBQU1tQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxFQUFEO0FBQUEsU0FBMkIsVUFBQ04sUUFBRCxFQUF3QjtBQUN0RWQsZ0JBQVk7QUFDWmUsZ0RBQUssQ0FDRkMsR0FESCxrREFDaURJLEVBRGpELHVCQUVHSCxJQUZILENBRVEsVUFBQ0MsR0FBRDtBQUFBLGFBQVNKLFFBQVEsQ0FBQ0osV0FBVyxDQUFDUSxHQUFHLENBQUNkLElBQUwsQ0FBWixDQUFqQjtBQUFBLEtBRlI7QUFHRCxHQUxvQjtBQUFBLENBQXJCOztBQVVDOztBQUVELElBQU1pQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxPQUFELEVBQW1CUixRQUFuQjtBQUFBLFNBQTBDLFVBQUNBLFFBQUQsRUFBd0I7QUFDOUVDLGdEQUFLLENBQUM7QUFDSlEsWUFBTSxFQUFFLE1BREo7QUFFSkMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRkw7QUFHSnBCLFVBQUksRUFBRXFCLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixPQUFmLENBSEY7QUFJSkssU0FBRyxFQUFFO0FBSkQsS0FBRCxDQUFMLENBTURWLElBTkMsQ0FNSSxVQUFDQyxHQUFEO0FBQUEsYUFBU0osUUFBUSxDQUFDSixXQUFXLENBQUNRLEdBQUcsQ0FBQ2QsSUFBTCxDQUFaLENBQWpCO0FBQUEsS0FOSjtBQU9ILEdBUmU7QUFBQSxDQUFoQixDLENBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTAzMjYzYzc4Njk3ZTk1NGM5ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFBPU1RTX0ZBSUwsIFBPU1RTX0xPQURJTkcsIFBPU1RTX1NVQ0NFU1MsIFBPU1RfU1VDQ0VTUyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcclxuXHJcbmNvbnN0IHBvc3RzTG9hZGluZyA9ICgpID0+ICh7XHJcbiAgdHlwZTogUE9TVFNfTE9BRElORyxcclxufSk7XHJcblxyXG5jb25zdCBzdWNjZXNzRGF0YSA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFBPU1RTX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBlcnJvckRhdGEgPSAoZXJyb3IpID0+ICh7XHJcbiAgdHlwZTogUE9TVFNfRkFJTCxcclxuICBwYXlsb2FkOiBlcnJvcixcclxufSk7XHJcblxyXG5jb25zdCBzdWNjZXNzUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogUE9TVF9TVUNDRVNTLFxyXG4gICAgcGF5bG9hZDogZGF0YSxcclxufSlcclxuXHJcbmNvbnN0IHN1Y2Nlc3NBUG9cclxuXHJcblxyXG5jb25zdCBnZXRQb3N0cyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIHBvc3RzTG9hZGluZygpO1xyXG4gIGF4aW9zXHJcbiAgICAuZ2V0KCdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cycpXHJcbiAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChzdWNjZXNzRGF0YShyZXMuZGF0YSkpKVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gZGlzcGF0Y2goZXJyb3JEYXRhKGVycm9yKSkpXHJcbiAgICAuZmluYWxseSgoKSA9PiBwb3N0c0xvYWRpbmcoKSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQb3N0c0J5SWQgPSAoaWQ6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgcG9zdHNMb2FkaW5nKCk7XHJcbiAgYXhpb3NcclxuICAgIC5nZXQoYGh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzLyR7aWR9P19lbWJlZD1jb21tZW50c2ApXHJcbiAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChzdWNjZXNzUG9zdChyZXMuZGF0YSkpKVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIG5ld1Bvc3Qge1xyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgYm9keTogc3RyaW5nXHJcbn07XHJcblxyXG5jb25zdCBhZGRQb3N0ID0gKG5ld1Bvc3Q6IG5ld1Bvc3QsIGRpc3BhdGNoOiBGdW5jdGlvbikgPT4gKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld1Bvc3QpLFxyXG4gICAgICB1cmw6ICdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cydcclxuICB9KVxyXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKHN1Y2Nlc3NQb3N0KHJlcy5kYXRhKSkpXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBhZGRQb3N0KG5ld1Bvc3Q6IG5ld1Bvc3QsIGRpc3BhdGNoOiBGdW5jdGlvbikge1xyXG4vLyAgIGF4aW9zKHtcclxuLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbi8vICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4vLyAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShuZXdQb3N0KSxcclxuLy8gICAgICAgdXJsOiAnaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMnXHJcbi8vICAgfSlcclxuLy8gICAgICAgLnRoZW4ocmVzID0+IGRpc3BhdGNoKHsgdHlwZTogXCJBRERQT1NUXCIgfSkpO1xyXG4vLyB9O1xyXG5cclxuXHJcbmV4cG9ydCB7IGdldFBvc3RzLCBnZXRQb3N0c0J5SWQgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==