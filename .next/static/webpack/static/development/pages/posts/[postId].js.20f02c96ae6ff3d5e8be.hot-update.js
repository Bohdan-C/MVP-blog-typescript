webpackHotUpdate("static\\development\\pages\\posts\\[postId].js",{

/***/ "./src/components/Comments.tsx":
/*!*************************************!*\
  !*** ./src/components/Comments.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/actions */ "./src/redux/actions/actions.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\mvp-blog-typescript\\src\\components\\Comments.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import styled from "styled-components";
// import { InitialStateI } from "../redux/reducers/reducer";

/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      commentsArr = _useState[0],
      setCommentsArr = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query.id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_3__["getPostsById"]);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://simple-blog-api.crew.red/posts/".concat(postId, "?_embed=comments")).then(function (data) {
      setCommentsArr(data.data.comments);
    })["catch"](function (err) {
      console.log("Error!", err);
    });
  }, [postId]);
  return __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, commentsArr.map(function (comment) {
    return __jsx("li", {
      key: comment.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }, comment.body));
  }));
}, "K4DB+yq1ngfm8gF86HfJgCoBJ9g=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21tZW50cy50c3giXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjb21tZW50c0FyciIsInNldENvbW1lbnRzQXJyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJnZXRQb3N0c0J5SWQiLCJheGlvcyIsImdldCIsInBvc3RJZCIsInRoZW4iLCJkYXRhIiwiY29tbWVudHMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiY29tbWVudCIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFHZSw4RUFBTTtBQUFBOztBQUFBLGtCQUNtQkEsc0RBQVEsQ0FBQyxFQUFELENBRDNCO0FBQUEsTUFDWkMsV0FEWTtBQUFBLE1BQ0NDLGNBREQ7O0FBR25CLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSm1CLE1BS1hDLEVBTFcsR0FLSkYsTUFBTSxDQUFDRyxLQUxILENBS1hELEVBTFc7QUFPbkJFLHlEQUFTLENBQUMsWUFBTTtBQUNkTixZQUFRLENBQUNPLG1FQUFELENBQVI7QUFDQUMsZ0RBQUssQ0FDRkMsR0FESCxrREFDaURDLE1BRGpELHVCQUVHQyxJQUZILENBRVEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2RiLG9CQUFjLENBQUNhLElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxRQUFYLENBQWQ7QUFDRCxLQUpILFdBS1MsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLEdBQXRCO0FBQ0QsS0FQSDtBQVFELEdBVlEsRUFVTixDQUFDSixNQUFELENBVk0sQ0FBVDtBQVdBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWixXQUFXLENBQUNtQixHQUFaLENBQWdCLFVBQUNDLE9BQUQ7QUFBQSxXQUNmO0FBQUksU0FBRyxFQUFFQSxPQUFPLENBQUNkLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUljLE9BQU8sQ0FBQ0MsSUFBWixDQURGLENBRGU7QUFBQSxHQUFoQixDQURILENBREY7QUFTRCxDQTNCRDtBQUFBLFVBR21CbEIsdURBSG5CLEVBSWlCRSxxREFKakI7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXFtwb3N0SWRdLmpzLjIwZjAyYzk2YWU2ZmYzZDVlOGJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBnZXRQb3N0c0J5SWQgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG4vLyBpbXBvcnQgeyBJbml0aWFsU3RhdGVJIH0gZnJvbSBcIi4uL3JlZHV4L3JlZHVjZXJzL3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgQ29tbWVudEkgfSBmcm9tIFwiLi4vcmVkdXgvcmVkdWNlcnMvcmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IFtjb21tZW50c0Fyciwgc2V0Q29tbWVudHNBcnJdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0UG9zdHNCeUlkKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYGh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzLyR7cG9zdElkfT9fZW1iZWQ9Y29tbWVudHNgKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldENvbW1lbnRzQXJyKGRhdGEuZGF0YS5jb21tZW50cyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciFcIiwgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW3Bvc3RJZF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtjb21tZW50c0Fyci5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICA8bGkga2V5PXtjb21tZW50LmlkfT5cclxuICAgICAgICAgIDxwPntjb21tZW50LmJvZHl9PC9wPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9