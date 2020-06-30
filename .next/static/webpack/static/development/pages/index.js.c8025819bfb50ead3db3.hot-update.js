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
      return dispatch(successAddData());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbInBvc3RzTG9hZGluZyIsInR5cGUiLCJQT1NUU19MT0FESU5HIiwic3VjY2Vzc0RhdGEiLCJkYXRhIiwiUE9TVFNfU1VDQ0VTUyIsInBheWxvYWQiLCJlcnJvckRhdGEiLCJlcnJvciIsIlBPU1RTX0ZBSUwiLCJzdWNjZXNzUG9zdCIsIlBPU1RfU1VDQ0VTUyIsInN1Y2Nlc3NBZGREYXRhIiwiUE9TVF9BRERfU1VDQ0VTUyIsImdldFBvc3RzIiwiZGlzcGF0Y2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJnZXRQb3N0c0J5SWQiLCJpZCIsImFkZFBvc3QiLCJuZXdQb3N0IiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FBTztBQUMxQkMsUUFBSSxFQUFFQywwREFBYUE7QUFETyxHQUFQO0FBQUEsQ0FBckI7O0FBSUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRDtBQUFBLFNBQVc7QUFDN0JILFFBQUksRUFBRUksMERBRHVCO0FBRTdCQyxXQUFPLEVBQUVGO0FBRm9CLEdBQVg7QUFBQSxDQUFwQjs7QUFLQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUM1QlAsUUFBSSxFQUFFUSx1REFEc0I7QUFFNUJILFdBQU8sRUFBRUU7QUFGbUIsR0FBWjtBQUFBLENBQWxCOztBQUtBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNOLElBQUQ7QUFBQSxTQUFXO0FBQzNCSCxRQUFJLEVBQUVVLHlEQURxQjtBQUUzQkwsV0FBTyxFQUFFRjtBQUZrQixHQUFYO0FBQUEsQ0FBcEI7O0FBS0EsSUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLFNBQU87QUFDNUJYLFFBQUksRUFBRVksNkRBQWdCQTtBQURNLEdBQVA7QUFBQSxDQUF2Qjs7QUFLQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFNBQU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ25DZixnQkFBWTtBQUNaZ0IsZ0RBQUssQ0FDRkMsR0FESCxDQUNPLHdDQURQLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0osUUFBUSxDQUFDWixXQUFXLENBQUNnQixHQUFHLENBQUNmLElBQUwsQ0FBWixDQUFqQjtBQUFBLEtBRlIsV0FHUyxVQUFDSSxLQUFEO0FBQUEsYUFBV08sUUFBUSxDQUFDUixTQUFTLENBQUNDLEtBQUQsQ0FBVixDQUFuQjtBQUFBLEtBSFQsYUFJVztBQUFBLGFBQU1SLFlBQVksRUFBbEI7QUFBQSxLQUpYO0FBS0QsR0FQZ0I7QUFBQSxDQUFqQjs7QUFTQSxJQUFNb0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRDtBQUFBLFNBQTJCLFVBQUNOLFFBQUQsRUFBd0I7QUFDdEVmLGdCQUFZO0FBQ1pnQixnREFBSyxDQUNGQyxHQURILGtEQUNpREksRUFEakQsdUJBRUdILElBRkgsQ0FFUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0osUUFBUSxDQUFDTCxXQUFXLENBQUNTLEdBQUcsQ0FBQ2YsSUFBTCxDQUFaLENBQWpCO0FBQUEsS0FGUjtBQUdELEdBTG9CO0FBQUEsQ0FBckI7O0FBVUM7O0FBRUQsSUFBTWtCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE9BQUQsRUFBbUJSLFFBQW5CO0FBQUEsU0FBMEMsVUFBQ0EsUUFBRCxFQUF3QjtBQUM5RUMsZ0RBQUssQ0FBQztBQUNKUSxZQUFNLEVBQUUsTUFESjtBQUVKQyxhQUFPLEVBQUU7QUFBRSx3QkFBZ0I7QUFBbEIsT0FGTDtBQUdKckIsVUFBSSxFQUFFc0IsSUFBSSxDQUFDQyxTQUFMLENBQWVKLE9BQWYsQ0FIRjtBQUlKSyxTQUFHLEVBQUU7QUFKRCxLQUFELENBQUwsQ0FNRFYsSUFOQyxDQU1JLFVBQUNDLEdBQUQ7QUFBQSxhQUFTSixRQUFRLENBQUNILGNBQWMsRUFBZixDQUFqQjtBQUFBLEtBTko7QUFPSCxHQVJlO0FBQUEsQ0FBaEIsQyxDQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmM4MDI1ODE5YmZiNTBlYWQzZGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBQT1NUU19GQUlMLCBQT1NUU19MT0FESU5HLCBQT1NUU19TVUNDRVNTLCBQT1NUX1NVQ0NFU1MsIFBPU1RfQUREX1NVQ0NFU1MgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XHJcblxyXG5jb25zdCBwb3N0c0xvYWRpbmcgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFBPU1RTX0xPQURJTkcsXHJcbn0pO1xyXG5cclxuY29uc3Qgc3VjY2Vzc0RhdGEgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBQT1NUU19TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZXJyb3JEYXRhID0gKGVycm9yKSA9PiAoe1xyXG4gIHR5cGU6IFBPU1RTX0ZBSUwsXHJcbiAgcGF5bG9hZDogZXJyb3IsXHJcbn0pO1xyXG5cclxuY29uc3Qgc3VjY2Vzc1Bvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFBPU1RfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IGRhdGEsXHJcbn0pXHJcblxyXG5jb25zdCBzdWNjZXNzQWRkRGF0YSA9ICgpID0+ICh7XHJcbiAgdHlwZTogUE9TVF9BRERfU1VDQ0VTUyxcclxufSlcclxuXHJcblxyXG5jb25zdCBnZXRQb3N0cyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIHBvc3RzTG9hZGluZygpO1xyXG4gIGF4aW9zXHJcbiAgICAuZ2V0KCdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cycpXHJcbiAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChzdWNjZXNzRGF0YShyZXMuZGF0YSkpKVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gZGlzcGF0Y2goZXJyb3JEYXRhKGVycm9yKSkpXHJcbiAgICAuZmluYWxseSgoKSA9PiBwb3N0c0xvYWRpbmcoKSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQb3N0c0J5SWQgPSAoaWQ6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgcG9zdHNMb2FkaW5nKCk7XHJcbiAgYXhpb3NcclxuICAgIC5nZXQoYGh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzLyR7aWR9P19lbWJlZD1jb21tZW50c2ApXHJcbiAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChzdWNjZXNzUG9zdChyZXMuZGF0YSkpKVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIG5ld1Bvc3Qge1xyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgYm9keTogc3RyaW5nXHJcbn07XHJcblxyXG5jb25zdCBhZGRQb3N0ID0gKG5ld1Bvc3Q6IG5ld1Bvc3QsIGRpc3BhdGNoOiBGdW5jdGlvbikgPT4gKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld1Bvc3QpLFxyXG4gICAgICB1cmw6ICdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cydcclxuICB9KVxyXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKHN1Y2Nlc3NBZGREYXRhKCkpKVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gYWRkUG9zdChuZXdQb3N0OiBuZXdQb3N0LCBkaXNwYXRjaDogRnVuY3Rpb24pIHtcclxuLy8gICBheGlvcyh7XHJcbi8vICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4vLyAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuLy8gICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobmV3UG9zdCksXHJcbi8vICAgICAgIHVybDogJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzJ1xyXG4vLyAgIH0pXHJcbi8vICAgICAgIC50aGVuKHJlcyA9PiBkaXNwYXRjaCh7IHR5cGU6IFwiQUREUE9TVFwiIH0pKTtcclxuLy8gfTtcclxuXHJcblxyXG5leHBvcnQgeyBnZXRQb3N0cywgZ2V0UG9zdHNCeUlkIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=