webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Home.tsx":
/*!*********************************!*\
  !*** ./src/components/Home.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/actions */ "./src/redux/actions/actions.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\mvp-blog-typescript\\src\\components\\Home.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1]; //Get all posts


  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_3__["getPosts"]);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://simple-blog-api.crew.red/posts").then(function (data) {
      console.log('data.data :>> ', data.data);
      setPosts(data.data);
      setIsLoading(false);
    })["catch"](function (err) {
      console.log("Error!", err);
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(List, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, posts.map(function (post) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: post.id,
      href: "/posts/".concat(post.id),
      as: "/posts/".concat(post.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, __jsx(Item, {
      key: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, __jsx(PostLink, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }, __jsx(Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, post.title), __jsx(Description, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, post.body), __jsx(BtnContainer, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }
    }, "Comments")))));
  })));
};

_s(Home, "zzjPiftSFTaMvxI0DFelYx2YyOA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = Home;
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Home__List",
  componentId: "sc-1su42s3-0"
})(["display:flex;flex-wrap:wrap;width:1040px;margin:0 auto;padding:0;"]);
_c2 = List;
var PostLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Home__PostLink",
  componentId: "sc-1su42s3-1"
})(["cursor:pointer;display:block;height:300px;"]);
_c3 = PostLink;
var Item = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Home__Item",
  componentId: "sc-1su42s3-2"
})(["margin:20px;min-height:300px;width:300px;border-radius:10px;box-shadow:0px 4px 25px 0px rgba(0,0,0,0.25);"]);
_c4 = Item;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Home__Title",
  componentId: "sc-1su42s3-3"
})(["margin:0;padding:24px;font-size:22px;font-family:\"Blinker\",sans-serif;font-weight:600;"]);
_c5 = Title;
var Description = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Home__Description",
  componentId: "sc-1su42s3-4"
})(["margin:0;padding:24px;font-family:\"Blinker\",sans-serif;font-weight:100;"]);
_c6 = Description;
var BtnContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__BtnContainer",
  componentId: "sc-1su42s3-5"
})([""]);
_c7 = BtnContainer;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  getPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_3__["getPosts"]
})(Home));

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "List");
$RefreshReg$(_c3, "PostLink");
$RefreshReg$(_c4, "Item");
$RefreshReg$(_c5, "Title");
$RefreshReg$(_c6, "Description");
$RefreshReg$(_c7, "BtnContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnRzeCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImdldFBvc3RzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJtYXAiLCJwb3N0IiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJMaXN0Iiwic3R5bGVkIiwidWwiLCJQb3N0TGluayIsImEiLCJJdGVtIiwibGkiLCJUaXRsZSIsImgyIiwiRGVzY3JpcHRpb24iLCJwIiwiQnRuQ29udGFpbmVyIiwiZGl2IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxFQUFELENBRFA7QUFBQSxNQUNwQkMsS0FEb0I7QUFBQSxNQUNiQyxRQURhOztBQUFBLG1CQUVPRixzREFBUSxDQUFDLElBQUQsQ0FGZjtBQUFBLE1BRXBCRyxTQUZvQjtBQUFBLE1BRVRDLFlBRlMsa0JBSTNCOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixZQUFRLENBQUNHLCtEQUFELENBQVI7QUFDQUMsZ0RBQUssQ0FDRkMsR0FESCxDQUNPLHdDQURQLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxJQUFELEVBQVU7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLElBQUksQ0FBQ0EsSUFBbkM7QUFDQVYsY0FBUSxDQUFDVSxJQUFJLENBQUNBLElBQU4sQ0FBUjtBQUNBUixrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEtBTkgsV0FPUyxVQUFDVyxHQUFELEVBQVM7QUFDZEYsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkMsR0FBdEI7QUFDRCxLQVRIO0FBVUQsR0FaUSxFQVlOLEVBWk0sQ0FBVDtBQWNBLFNBQ0UsbUVBQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2QsS0FBSyxDQUFDZSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1QsTUFBQyxnREFBRDtBQUFNLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFoQjtBQUFvQixVQUFJLG1CQUFZRCxJQUFJLENBQUNDLEVBQWpCLENBQXhCO0FBQStDLFFBQUUsbUJBQVlELElBQUksQ0FBQ0MsRUFBakIsQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsSUFBRDtBQUFNLFNBQUcsRUFBRUQsSUFBSSxDQUFDQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFRRCxJQUFJLENBQUNFLEtBQWIsQ0FERixFQUVFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWNGLElBQUksQ0FBQ0csSUFBbkIsQ0FGRixFQUdFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQUhGLENBREYsQ0FERixDQURTO0FBQUEsR0FBVixDQURILENBREYsQ0FERjtBQW1CRCxDQXhDRDs7R0FBTXJCLEk7VUFLYU8sdUQ7OztLQUxiUCxJO0FBMENOLElBQU1zQixJQUFJLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEseUVBQVY7TUFBTUYsSTtBQVFOLElBQU1HLFFBQVEsR0FBR0YseURBQU0sQ0FBQ0csQ0FBVjtBQUFBO0FBQUE7QUFBQSxrREFBZDtNQUFNRCxRO0FBTU4sSUFBTUUsSUFBSSxHQUFHSix5REFBTSxDQUFDSyxFQUFWO0FBQUE7QUFBQTtBQUFBLGlIQUFWO01BQU1ELEk7QUFRTixJQUFNRSxLQUFLLEdBQUdOLHlEQUFNLENBQUNPLEVBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBQVg7TUFBTUQsSztBQVFOLElBQU1FLFdBQVcsR0FBR1IseURBQU0sQ0FBQ1MsQ0FBVjtBQUFBO0FBQUE7QUFBQSxpRkFBakI7TUFBTUQsVztBQU9OLElBQU1FLFlBQVksR0FBR1YseURBQU0sQ0FBQ1csR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFsQjtNQUFNRCxZO0FBRVNFLDBIQUFPLENBQUMsSUFBRCxFQUFPO0FBQUUxQixVQUFRLEVBQVJBLCtEQUFRQTtBQUFWLENBQVAsQ0FBUCxDQUE0QlQsSUFBNUIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzRlY2E2NzRkNjdmNDVhYjAzNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy9HZXQgYWxsIHBvc3RzXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0UG9zdHMpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzXCIpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEuZGF0YSA6Pj4gJywgZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRQb3N0cyhkYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciFcIiwgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgPExpbmsga2V5PXtwb3N0LmlkfSBocmVmPXtgL3Bvc3RzLyR7cG9zdC5pZH1gfSBhcz17YC9wb3N0cy8ke3Bvc3QuaWR9YH0+XHJcbiAgICAgICAgICAgIDxJdGVtIGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgPFBvc3RMaW5rPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlPntwb3N0LnRpdGxlfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+e3Bvc3QuYm9keX08L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEJ0bkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPHA+Q29tbWVudHM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0J0bkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L1Bvc3RMaW5rPlxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiAxMDQwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RMaW5rID0gc3R5bGVkLmFgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxyXG4gIG1hcmdpbjogMjBweDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQmxpbmtlclwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbmA7XHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJsaW5rZXJcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG5gO1xyXG5cclxuY29uc3QgQnRuQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGdldFBvc3RzIH0pKEhvbWUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9