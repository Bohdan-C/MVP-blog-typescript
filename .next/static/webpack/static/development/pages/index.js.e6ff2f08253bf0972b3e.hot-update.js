webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/redux/actions/actions.ts":
/*!**************************************!*\
  !*** ./src/redux/actions/actions.ts ***!
  \**************************************/
/*! exports provided: addPost, getPosts, getPostsById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
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

function addPost(newPost, dispatch) {
  axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(newPost),
    url: 'https://simple-blog-api.crew.red/posts'
  }).then(function (res) {
    return dispatch({
      type: "ADDPOST"
    });
  });
}
;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbInBvc3RzTG9hZGluZyIsInR5cGUiLCJQT1NUU19MT0FESU5HIiwic3VjY2Vzc0RhdGEiLCJkYXRhIiwiUE9TVFNfU1VDQ0VTUyIsInBheWxvYWQiLCJlcnJvckRhdGEiLCJlcnJvciIsIlBPU1RTX0ZBSUwiLCJzdWNjZXNzUG9zdCIsIlBPU1RfU1VDQ0VTUyIsImdldFBvc3RzIiwiZGlzcGF0Y2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJnZXRQb3N0c0J5SWQiLCJpZCIsImFkZFBvc3QiLCJuZXdQb3N0IiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCQyxRQUFJLEVBQUVDLDBEQUFhQTtBQURPLEdBQVA7QUFBQSxDQUFyQjs7QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFEO0FBQUEsU0FBVztBQUM3QkgsUUFBSSxFQUFFSSwwREFEdUI7QUFFN0JDLFdBQU8sRUFBRUY7QUFGb0IsR0FBWDtBQUFBLENBQXBCOztBQUtBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzVCUCxRQUFJLEVBQUVRLHVEQURzQjtBQUU1QkgsV0FBTyxFQUFFRTtBQUZtQixHQUFaO0FBQUEsQ0FBbEI7O0FBS0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ04sSUFBRDtBQUFBLFNBQVc7QUFDM0JILFFBQUksRUFBRVUseURBRHFCO0FBRTNCTCxXQUFPLEVBQUVGO0FBRmtCLEdBQVg7QUFBQSxDQUFwQjs7QUFNQSxJQUFNUSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFNBQU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ25DYixnQkFBWTtBQUNaYyxnREFBSyxDQUNGQyxHQURILENBQ08sd0NBRFAsRUFFR0MsSUFGSCxDQUVRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTSixRQUFRLENBQUNWLFdBQVcsQ0FBQ2MsR0FBRyxDQUFDYixJQUFMLENBQVosQ0FBakI7QUFBQSxLQUZSLFdBR1MsVUFBQ0ksS0FBRDtBQUFBLGFBQVdLLFFBQVEsQ0FBQ04sU0FBUyxDQUFDQyxLQUFELENBQVYsQ0FBbkI7QUFBQSxLQUhULGFBSVc7QUFBQSxhQUFNUixZQUFZLEVBQWxCO0FBQUEsS0FKWDtBQUtELEdBUGdCO0FBQUEsQ0FBakI7O0FBU0EsSUFBTWtCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQ7QUFBQSxTQUEyQixVQUFDTixRQUFELEVBQXdCO0FBQ3RFYixnQkFBWTtBQUNaYyxnREFBSyxDQUNGQyxHQURILGtEQUNpREksRUFEakQsdUJBRUdILElBRkgsQ0FFUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0osUUFBUSxDQUFDSCxXQUFXLENBQUNPLEdBQUcsQ0FBQ2IsSUFBTCxDQUFaLENBQWpCO0FBQUEsS0FGUjtBQUdELEdBTG9CO0FBQUEsQ0FBckI7O0FBT08sU0FBU2dCLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQW1DUixRQUFuQyxFQUF1RDtBQUM1REMsOENBQUssQ0FBQztBQUNGUSxVQUFNLEVBQUUsTUFETjtBQUVGQyxXQUFPLEVBQUU7QUFBRSxzQkFBZ0I7QUFBbEIsS0FGUDtBQUdGbkIsUUFBSSxFQUFFb0IsSUFBSSxDQUFDQyxTQUFMLENBQWVKLE9BQWYsQ0FISjtBQUlGSyxPQUFHLEVBQUU7QUFKSCxHQUFELENBQUwsQ0FNS1YsSUFOTCxDQU1VLFVBQUFDLEdBQUc7QUFBQSxXQUFJSixRQUFRLENBQUM7QUFBRVosVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFaO0FBQUEsR0FOYjtBQU9EO0FBQUE7QUFHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTZmZjJmMDgyNTNiZjA5NzJiM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFBPU1RTX0ZBSUwsIFBPU1RTX0xPQURJTkcsIFBPU1RTX1NVQ0NFU1MsIFBPU1RfU1VDQ0VTUyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcclxuXHJcbmNvbnN0IHBvc3RzTG9hZGluZyA9ICgpID0+ICh7XHJcbiAgdHlwZTogUE9TVFNfTE9BRElORyxcclxufSk7XHJcblxyXG5jb25zdCBzdWNjZXNzRGF0YSA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFBPU1RTX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBlcnJvckRhdGEgPSAoZXJyb3IpID0+ICh7XHJcbiAgdHlwZTogUE9TVFNfRkFJTCxcclxuICBwYXlsb2FkOiBlcnJvcixcclxufSk7XHJcblxyXG5jb25zdCBzdWNjZXNzUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogUE9TVF9TVUNDRVNTLFxyXG4gICAgcGF5bG9hZDogZGF0YSxcclxufSlcclxuXHJcblxyXG5jb25zdCBnZXRQb3N0cyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIHBvc3RzTG9hZGluZygpO1xyXG4gIGF4aW9zXHJcbiAgICAuZ2V0KCdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cycpXHJcbiAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChzdWNjZXNzRGF0YShyZXMuZGF0YSkpKVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gZGlzcGF0Y2goZXJyb3JEYXRhKGVycm9yKSkpXHJcbiAgICAuZmluYWxseSgoKSA9PiBwb3N0c0xvYWRpbmcoKSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQb3N0c0J5SWQgPSAoaWQ6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgcG9zdHNMb2FkaW5nKCk7XHJcbiAgYXhpb3NcclxuICAgIC5nZXQoYGh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzLyR7aWR9P19lbWJlZD1jb21tZW50c2ApXHJcbiAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChzdWNjZXNzUG9zdChyZXMuZGF0YSkpKVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvc3QobmV3UG9zdDogbmV3UG9zdCwgZGlzcGF0Y2g6IEZ1bmN0aW9uKSB7XHJcbiAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld1Bvc3QpLFxyXG4gICAgICB1cmw6ICdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cydcclxuICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIkFERFBPU1RcIiB9KSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgZ2V0UG9zdHMsIGdldFBvc3RzQnlJZCB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9