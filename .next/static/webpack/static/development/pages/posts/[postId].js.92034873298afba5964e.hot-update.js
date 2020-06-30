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

var successAddData = data;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbInBvc3RzTG9hZGluZyIsInR5cGUiLCJQT1NUU19MT0FESU5HIiwic3VjY2Vzc0RhdGEiLCJkYXRhIiwiUE9TVFNfU1VDQ0VTUyIsInBheWxvYWQiLCJlcnJvckRhdGEiLCJlcnJvciIsIlBPU1RTX0ZBSUwiLCJzdWNjZXNzUG9zdCIsIlBPU1RfU1VDQ0VTUyIsInN1Y2Nlc3NBZGREYXRhIiwiZ2V0UG9zdHMiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImdldFBvc3RzQnlJZCIsImlkIiwiYWRkUG9zdCIsIm5ld1Bvc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCQyxRQUFJLEVBQUVDLDBEQUFhQTtBQURPLEdBQVA7QUFBQSxDQUFyQjs7QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFEO0FBQUEsU0FBVztBQUM3QkgsUUFBSSxFQUFFSSwwREFEdUI7QUFFN0JDLFdBQU8sRUFBRUY7QUFGb0IsR0FBWDtBQUFBLENBQXBCOztBQUtBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzVCUCxRQUFJLEVBQUVRLHVEQURzQjtBQUU1QkgsV0FBTyxFQUFFRTtBQUZtQixHQUFaO0FBQUEsQ0FBbEI7O0FBS0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ04sSUFBRDtBQUFBLFNBQVc7QUFDM0JILFFBQUksRUFBRVUseURBRHFCO0FBRTNCTCxXQUFPLEVBQUVGO0FBRmtCLEdBQVg7QUFBQSxDQUFwQjs7QUFLQSxJQUFNUSxjQUFjLEdBQUlSLElBQXhCOztBQUdBLElBQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsU0FBTSxVQUFDQyxRQUFELEVBQWM7QUFDbkNkLGdCQUFZO0FBQ1plLGdEQUFLLENBQ0ZDLEdBREgsQ0FDTyx3Q0FEUCxFQUVHQyxJQUZILENBRVEsVUFBQ0MsR0FBRDtBQUFBLGFBQVNKLFFBQVEsQ0FBQ1gsV0FBVyxDQUFDZSxHQUFHLENBQUNkLElBQUwsQ0FBWixDQUFqQjtBQUFBLEtBRlIsV0FHUyxVQUFDSSxLQUFEO0FBQUEsYUFBV00sUUFBUSxDQUFDUCxTQUFTLENBQUNDLEtBQUQsQ0FBVixDQUFuQjtBQUFBLEtBSFQsYUFJVztBQUFBLGFBQU1SLFlBQVksRUFBbEI7QUFBQSxLQUpYO0FBS0QsR0FQZ0I7QUFBQSxDQUFqQjs7QUFTQSxJQUFNbUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRDtBQUFBLFNBQTJCLFVBQUNOLFFBQUQsRUFBd0I7QUFDdEVkLGdCQUFZO0FBQ1plLGdEQUFLLENBQ0ZDLEdBREgsa0RBQ2lESSxFQURqRCx1QkFFR0gsSUFGSCxDQUVRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTSixRQUFRLENBQUNKLFdBQVcsQ0FBQ1EsR0FBRyxDQUFDZCxJQUFMLENBQVosQ0FBakI7QUFBQSxLQUZSO0FBR0QsR0FMb0I7QUFBQSxDQUFyQjs7QUFVQzs7QUFFRCxJQUFNaUIsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsT0FBRCxFQUFtQlIsUUFBbkI7QUFBQSxTQUEwQyxVQUFDQSxRQUFELEVBQXdCO0FBQzlFQyxnREFBSyxDQUFDO0FBQ0pRLFlBQU0sRUFBRSxNQURKO0FBRUpDLGFBQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQixPQUZMO0FBR0pwQixVQUFJLEVBQUVxQixJQUFJLENBQUNDLFNBQUwsQ0FBZUosT0FBZixDQUhGO0FBSUpLLFNBQUcsRUFBRTtBQUpELEtBQUQsQ0FBTCxDQU1EVixJQU5DLENBTUksVUFBQ0MsR0FBRDtBQUFBLGFBQVNKLFFBQVEsQ0FBQ0osV0FBVyxDQUFDUSxHQUFHLENBQUNkLElBQUwsQ0FBWixDQUFqQjtBQUFBLEtBTko7QUFPSCxHQVJlO0FBQUEsQ0FBaEIsQyxDQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxbcG9zdElkXS5qcy45MjAzNDg3MzI5OGFmYmE1OTY0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgUE9TVFNfRkFJTCwgUE9TVFNfTE9BRElORywgUE9TVFNfU1VDQ0VTUywgUE9TVF9TVUNDRVNTIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xyXG5cclxuY29uc3QgcG9zdHNMb2FkaW5nID0gKCkgPT4gKHtcclxuICB0eXBlOiBQT1NUU19MT0FESU5HLFxyXG59KTtcclxuXHJcbmNvbnN0IHN1Y2Nlc3NEYXRhID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogUE9TVFNfU1VDQ0VTUyxcclxuICBwYXlsb2FkOiBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGVycm9yRGF0YSA9IChlcnJvcikgPT4gKHtcclxuICB0eXBlOiBQT1NUU19GQUlMLFxyXG4gIHBheWxvYWQ6IGVycm9yLFxyXG59KTtcclxuXHJcbmNvbnN0IHN1Y2Nlc3NQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBQT1NUX1NVQ0NFU1MsXHJcbiAgICBwYXlsb2FkOiBkYXRhLFxyXG59KVxyXG5cclxuY29uc3Qgc3VjY2Vzc0FkZERhdGEgPSAoZGF0YSlcclxuXHJcblxyXG5jb25zdCBnZXRQb3N0cyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIHBvc3RzTG9hZGluZygpO1xyXG4gIGF4aW9zXHJcbiAgICAuZ2V0KCdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cycpXHJcbiAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChzdWNjZXNzRGF0YShyZXMuZGF0YSkpKVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gZGlzcGF0Y2goZXJyb3JEYXRhKGVycm9yKSkpXHJcbiAgICAuZmluYWxseSgoKSA9PiBwb3N0c0xvYWRpbmcoKSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQb3N0c0J5SWQgPSAoaWQ6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgcG9zdHNMb2FkaW5nKCk7XHJcbiAgYXhpb3NcclxuICAgIC5nZXQoYGh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzLyR7aWR9P19lbWJlZD1jb21tZW50c2ApXHJcbiAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChzdWNjZXNzUG9zdChyZXMuZGF0YSkpKVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIG5ld1Bvc3Qge1xyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgYm9keTogc3RyaW5nXHJcbn07XHJcblxyXG5jb25zdCBhZGRQb3N0ID0gKG5ld1Bvc3Q6IG5ld1Bvc3QsIGRpc3BhdGNoOiBGdW5jdGlvbikgPT4gKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld1Bvc3QpLFxyXG4gICAgICB1cmw6ICdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cydcclxuICB9KVxyXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKHN1Y2Nlc3NQb3N0KHJlcy5kYXRhKSkpXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBhZGRQb3N0KG5ld1Bvc3Q6IG5ld1Bvc3QsIGRpc3BhdGNoOiBGdW5jdGlvbikge1xyXG4vLyAgIGF4aW9zKHtcclxuLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbi8vICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4vLyAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShuZXdQb3N0KSxcclxuLy8gICAgICAgdXJsOiAnaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMnXHJcbi8vICAgfSlcclxuLy8gICAgICAgLnRoZW4ocmVzID0+IGRpc3BhdGNoKHsgdHlwZTogXCJBRERQT1NUXCIgfSkpO1xyXG4vLyB9O1xyXG5cclxuXHJcbmV4cG9ydCB7IGdldFBvc3RzLCBnZXRQb3N0c0J5SWQgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==