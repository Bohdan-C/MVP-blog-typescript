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

var su;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbInBvc3RzTG9hZGluZyIsInR5cGUiLCJQT1NUU19MT0FESU5HIiwic3VjY2Vzc0RhdGEiLCJkYXRhIiwiUE9TVFNfU1VDQ0VTUyIsInBheWxvYWQiLCJlcnJvckRhdGEiLCJlcnJvciIsIlBPU1RTX0ZBSUwiLCJzdWNjZXNzUG9zdCIsIlBPU1RfU1VDQ0VTUyIsInN1IiwiZ2V0UG9zdHMiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImdldFBvc3RzQnlJZCIsImlkIiwiYWRkUG9zdCIsIm5ld1Bvc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCQyxRQUFJLEVBQUVDLDBEQUFhQTtBQURPLEdBQVA7QUFBQSxDQUFyQjs7QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFEO0FBQUEsU0FBVztBQUM3QkgsUUFBSSxFQUFFSSwwREFEdUI7QUFFN0JDLFdBQU8sRUFBRUY7QUFGb0IsR0FBWDtBQUFBLENBQXBCOztBQUtBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzVCUCxRQUFJLEVBQUVRLHVEQURzQjtBQUU1QkgsV0FBTyxFQUFFRTtBQUZtQixHQUFaO0FBQUEsQ0FBbEI7O0FBS0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ04sSUFBRDtBQUFBLFNBQVc7QUFDM0JILFFBQUksRUFBRVUseURBRHFCO0FBRTNCTCxXQUFPLEVBQUVGO0FBRmtCLEdBQVg7QUFBQSxDQUFwQjs7QUFLQSxJQUFNUSxFQUFOOztBQUdBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsU0FBTSxVQUFDQyxRQUFELEVBQWM7QUFDbkNkLGdCQUFZO0FBQ1plLGdEQUFLLENBQ0ZDLEdBREgsQ0FDTyx3Q0FEUCxFQUVHQyxJQUZILENBRVEsVUFBQ0MsR0FBRDtBQUFBLGFBQVNKLFFBQVEsQ0FBQ1gsV0FBVyxDQUFDZSxHQUFHLENBQUNkLElBQUwsQ0FBWixDQUFqQjtBQUFBLEtBRlIsV0FHUyxVQUFDSSxLQUFEO0FBQUEsYUFBV00sUUFBUSxDQUFDUCxTQUFTLENBQUNDLEtBQUQsQ0FBVixDQUFuQjtBQUFBLEtBSFQsYUFJVztBQUFBLGFBQU1SLFlBQVksRUFBbEI7QUFBQSxLQUpYO0FBS0QsR0FQZ0I7QUFBQSxDQUFqQjs7QUFTQSxJQUFNbUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRDtBQUFBLFNBQTJCLFVBQUNOLFFBQUQsRUFBd0I7QUFDdEVkLGdCQUFZO0FBQ1plLGdEQUFLLENBQ0ZDLEdBREgsa0RBQ2lESSxFQURqRCx1QkFFR0gsSUFGSCxDQUVRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTSixRQUFRLENBQUNKLFdBQVcsQ0FBQ1EsR0FBRyxDQUFDZCxJQUFMLENBQVosQ0FBakI7QUFBQSxLQUZSO0FBR0QsR0FMb0I7QUFBQSxDQUFyQjs7QUFVQzs7QUFFRCxJQUFNaUIsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsT0FBRCxFQUFtQlIsUUFBbkI7QUFBQSxTQUEwQyxVQUFDQSxRQUFELEVBQXdCO0FBQzlFQyxnREFBSyxDQUFDO0FBQ0pRLFlBQU0sRUFBRSxNQURKO0FBRUpDLGFBQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQixPQUZMO0FBR0pwQixVQUFJLEVBQUVxQixJQUFJLENBQUNDLFNBQUwsQ0FBZUosT0FBZixDQUhGO0FBSUpLLFNBQUcsRUFBRTtBQUpELEtBQUQsQ0FBTCxDQU1EVixJQU5DLENBTUksVUFBQ0MsR0FBRDtBQUFBLGFBQVNKLFFBQVEsQ0FBQ0osV0FBVyxDQUFDUSxHQUFHLENBQUNkLElBQUwsQ0FBWixDQUFqQjtBQUFBLEtBTko7QUFPSCxHQVJlO0FBQUEsQ0FBaEIsQyxDQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjEzYWM4NzRkNDhlYzYzYWNhYjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBQT1NUU19GQUlMLCBQT1NUU19MT0FESU5HLCBQT1NUU19TVUNDRVNTLCBQT1NUX1NVQ0NFU1MgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XHJcblxyXG5jb25zdCBwb3N0c0xvYWRpbmcgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFBPU1RTX0xPQURJTkcsXHJcbn0pO1xyXG5cclxuY29uc3Qgc3VjY2Vzc0RhdGEgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBQT1NUU19TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZXJyb3JEYXRhID0gKGVycm9yKSA9PiAoe1xyXG4gIHR5cGU6IFBPU1RTX0ZBSUwsXHJcbiAgcGF5bG9hZDogZXJyb3IsXHJcbn0pO1xyXG5cclxuY29uc3Qgc3VjY2Vzc1Bvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFBPU1RfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IGRhdGEsXHJcbn0pXHJcblxyXG5jb25zdCBzdVxyXG5cclxuXHJcbmNvbnN0IGdldFBvc3RzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcG9zdHNMb2FkaW5nKCk7XHJcbiAgYXhpb3NcclxuICAgIC5nZXQoJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzJylcclxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKHN1Y2Nlc3NEYXRhKHJlcy5kYXRhKSkpXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBkaXNwYXRjaChlcnJvckRhdGEoZXJyb3IpKSlcclxuICAgIC5maW5hbGx5KCgpID0+IHBvc3RzTG9hZGluZygpKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBvc3RzQnlJZCA9IChpZDogc3RyaW5nIHwgc3RyaW5nW10pID0+IChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICBwb3N0c0xvYWRpbmcoKTtcclxuICBheGlvc1xyXG4gICAgLmdldChgaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvJHtpZH0/X2VtYmVkPWNvbW1lbnRzYClcclxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKHN1Y2Nlc3NQb3N0KHJlcy5kYXRhKSkpXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgbmV3UG9zdCB7XHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICBib2R5OiBzdHJpbmdcclxufTtcclxuXHJcbmNvbnN0IGFkZFBvc3QgPSAobmV3UG9zdDogbmV3UG9zdCwgZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobmV3UG9zdCksXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzJ1xyXG4gIH0pXHJcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goc3VjY2Vzc1Bvc3QocmVzLmRhdGEpKSlcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFkZFBvc3QobmV3UG9zdDogbmV3UG9zdCwgZGlzcGF0Y2g6IEZ1bmN0aW9uKSB7XHJcbi8vICAgYXhpb3Moe1xyXG4vLyAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuLy8gICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbi8vICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld1Bvc3QpLFxyXG4vLyAgICAgICB1cmw6ICdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cydcclxuLy8gICB9KVxyXG4vLyAgICAgICAudGhlbihyZXMgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIkFERFBPU1RcIiB9KSk7XHJcbi8vIH07XHJcblxyXG5cclxuZXhwb3J0IHsgZ2V0UG9zdHMsIGdldFBvc3RzQnlJZCB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9