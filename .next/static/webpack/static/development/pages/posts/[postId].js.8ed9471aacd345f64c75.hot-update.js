webpackHotUpdate("static\\development\\pages\\posts\\[postId].js",{

/***/ "./pages/posts/[postId]/index.tsx":
/*!****************************************!*\
  !*** ./pages/posts/[postId]/index.tsx ***!
  \****************************************/
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
    _jsxFileName = "C:\\mvp-blog-typescript\\pages\\posts\\[postId]\\index.tsx",
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
  }, [postId]);
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
  displayName: "postId__Container",
  componentId: "fi6hc3-0"
})(["display:flex;flex-direction:column;align-items:center;margin:0 auto;margin-top:70px;width:1040px;"]);
_c = Container;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "postId__Title",
  componentId: "fi6hc3-1"
})(["width:700px;font-size:50px;margin-bottom:40px;"]);
_c2 = Title;
var Description = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "postId__Description",
  componentId: "fi6hc3-2"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9bcG9zdElkXS9pbmRleC50c3giXSwibmFtZXMiOlsidXNlU3RhdGUiLCJwb3N0Iiwic2V0UG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwiZ2V0UG9zdHNCeUlkIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwb3N0SWQiLCJ0aXRsZSIsImJvZHkiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJUaXRsZSIsImgyIiwiRGVzY3JpcHRpb24iLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVlLDhFQUFNO0FBQUE7O0FBQUEsa0JBQ0tBLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDWkMsSUFEWTtBQUFBLE1BQ05DLE9BRE07O0FBR25CLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSm1CLE1BS1hDLEVBTFcsR0FLSkYsTUFBTSxDQUFDRyxLQUxILENBS1hELEVBTFc7QUFPbkJFLHlEQUFTLENBQUMsWUFBTTtBQUNkTixZQUFRLENBQUNPLHVFQUFELENBQVI7QUFDQUMsZ0RBQUssQ0FDRkMsR0FESCxrREFDaURMLEVBRGpELHVCQUVHTSxJQUZILENBRVEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2RaLGFBQU8sQ0FBQ1ksSUFBSSxDQUFDQSxJQUFOLENBQVA7QUFDRCxLQUpILFdBS1MsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLEdBQXRCO0FBQ0QsS0FQSDtBQVFELEdBVlEsRUFVTixDQUFDRyxNQUFELENBVk0sQ0FBVDtBQVlBLFNBQ0UsbUVBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFqQixJQUFJLENBQUNrQixLQUFiLENBREYsRUFFRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjbEIsSUFBSSxDQUFDbUIsSUFBbkIsQ0FGRixFQUdFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBRkYsQ0FERjtBQVVELENBN0JEO0FBQUEsVUFHbUJoQix1REFIbkIsRUFJaUJFLHFEQUpqQjtBQUFBO0FBK0JBLElBQU1lLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5R0FBZjtLQUFNRixTO0FBU04sSUFBTUcsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLHNEQUFYO01BQU1ELEs7QUFNTixJQUFNRSxXQUFXLEdBQUdKLHlEQUFNLENBQUNLLENBQVY7QUFBQTtBQUFBO0FBQUEsa0hBQWpCO01BQU1ELFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxbcG9zdElkXS5qcy44ZWQ5NDcxYWFjZDM0NWY2NGM3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdHNCeUlkIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbW1lbnRzXCI7XHJcbi8vIGltcG9ydCB7SW5pdGlhbFN0YXRlSX0gZnJvbSBcIi4uLy4uLy4uL3NyYy9yZWR1eC9yZWR1Y2Vycy9yZWR1Y2VyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRQb3N0c0J5SWQpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvJHtpZH0/X2VtYmVkPWNvbW1lbnRzYClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRQb3N0KGRhdGEuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciFcIiwgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW3Bvc3RJZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxUaXRsZT57cG9zdC50aXRsZX08L1RpdGxlPlxyXG4gICAgICAgIDxEZXNjcmlwdGlvbj57cG9zdC5ib2R5fTwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPENvbW1lbnRzIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxuICB3aWR0aDogMTA0MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICAmOmFmdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgfVxyXG4gIHdpZHRoOiA3MDBweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=