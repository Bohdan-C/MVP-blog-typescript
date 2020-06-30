webpackHotUpdate("static\\development\\pages\\posts\\[id].js",{

/***/ "./pages/posts/[id]/index.tsx":
/*!************************************!*\
  !*** ./pages/posts/[id]/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/redux/actions/actions */ "./src/redux/actions/actions.ts");
/* harmony import */ var _src_components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/components/Navbar */ "./src/components/Navbar.tsx");
/* harmony import */ var _src_components_Comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/components/Comments */ "./src/components/Comments.tsx");
var _this = undefined,
    _jsxFileName = "C:\\mvp-blog-typescript\\pages\\posts\\[id]\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 // import {InitialStateI} from "../../../src/redux/reducers/reducer"

/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      post = _useState[0],
      setPost = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(_src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_5__["getPostsById"]);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://simple-blog-api.crew.red/posts/".concat(id, "?_embed=comments")).then(function (data) {
      setPost(data.data);
    })["catch"](function (err) {
      console.log("Error!", err);
    });
  }, [id]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_src_components_Navbar__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, post.title), __jsx(Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, post.body), __jsx(_src_components_Comments__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })));
}, "T6JdjPKYacF35KjGB/uY4KsH2G4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
}));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "id__Container",
  componentId: "sc-1kc1xxg-0"
})(["display:flex;flex-direction:column;align-items:center;margin:0 auto;margin-top:70px;width:1040px;"]);
_c = Container;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "id__Title",
  componentId: "sc-1kc1xxg-1"
})(["width:700px;font-size:50px;margin-bottom:40px;"]);
_c2 = Title;
var Description = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "id__Description",
  componentId: "sc-1kc1xxg-2"
})(["&:after{margin-top:40px;display:block;content:\"\";background:#000;height:2px;}width:700px;font-size:22px;"]);
_c3 = Description;

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Title");
$RefreshReg$(_c3, "Description");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy8vaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwicG9zdCIsInNldFBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsImdldFBvc3RzQnlJZCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJib2R5IiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiVGl0bGUiLCJoMiIsIkRlc2NyaXB0aW9uIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFZSw4RUFBTTtBQUFBOztBQUFBLGtCQUNLQSxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ1pDLElBRFk7QUFBQSxNQUNOQyxPQURNOztBQUduQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUptQixNQUtYQyxFQUxXLEdBS0pGLE1BQU0sQ0FBQ0csS0FMSCxDQUtYRCxFQUxXO0FBT25CRSx5REFBUyxDQUFDLFlBQU07QUFDZE4sWUFBUSxDQUFDTyx1RUFBRCxDQUFSO0FBQ0FDLGdEQUFLLENBQ0ZDLEdBREgsa0RBQ2lETCxFQURqRCx1QkFFR00sSUFGSCxDQUVRLFVBQUNDLElBQUQsRUFBVTtBQUNkWixhQUFPLENBQUNZLElBQUksQ0FBQ0EsSUFBTixDQUFQO0FBQ0QsS0FKSCxXQUtTLFVBQUNDLEdBQUQsRUFBUztBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixHQUF0QjtBQUNELEtBUEg7QUFRRCxHQVZRLEVBVU4sQ0FBQ1IsRUFBRCxDQVZNLENBQVQ7QUFZQSxTQUNFLG1FQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRTixJQUFJLENBQUNpQixLQUFiLENBREYsRUFFRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjakIsSUFBSSxDQUFDa0IsSUFBbkIsQ0FGRixFQUdFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBRkYsQ0FERjtBQVVELENBN0JEO0FBQUEsVUFHbUJmLHVEQUhuQixFQUlpQkUscURBSmpCO0FBQUE7QUErQkEsSUFBTWMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlHQUFmO0tBQU1GLFM7QUFTTixJQUFNRyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEVBQVY7QUFBQTtBQUFBO0FBQUEsc0RBQVg7TUFBTUQsSztBQU1OLElBQU1FLFdBQVcsR0FBR0oseURBQU0sQ0FBQ0ssQ0FBVjtBQUFBO0FBQUE7QUFBQSxrSEFBakI7TUFBTUQsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXFtpZF0uanMuODUxMjNhODg1MjUzNzZiZGMxOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldFBvc3RzQnlJZCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IENvbW1lbnRzIGZyb20gXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Db21tZW50c1wiO1xyXG4vLyBpbXBvcnQge0luaXRpYWxTdGF0ZUl9IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVkdWNlclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0UG9zdHNCeUlkKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYGh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzLyR7aWR9P19lbWJlZD1jb21tZW50c2ApXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zdChkYXRhLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhXCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxUaXRsZT57cG9zdC50aXRsZX08L1RpdGxlPlxyXG4gICAgICAgIDxEZXNjcmlwdGlvbj57cG9zdC5ib2R5fTwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPENvbW1lbnRzIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxuICB3aWR0aDogMTA0MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICAmOmFmdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgfVxyXG4gIHdpZHRoOiA3MDBweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==