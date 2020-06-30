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
      lineNumber: 30,
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
        lineNumber: 32,
        columnNumber: 11
      }
    }, __jsx(Item, {
      key: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx(PostLink, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, __jsx(Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, post.title), __jsx(Description, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, post.body))));
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
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  getPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_3__["getPosts"]
})(Home));

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "List");
$RefreshReg$(_c3, "PostLink");
$RefreshReg$(_c4, "Item");
$RefreshReg$(_c5, "Title");
$RefreshReg$(_c6, "Description");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnRzeCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImdldFBvc3RzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJMaXN0Iiwic3R5bGVkIiwidWwiLCJQb3N0TGluayIsImEiLCJJdGVtIiwibGkiLCJUaXRsZSIsImgyIiwiRGVzY3JpcHRpb24iLCJwIiwiQnRuQ29udGFpbmVyIiwiZGl2IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxFQUFELENBRFA7QUFBQSxNQUNwQkMsS0FEb0I7QUFBQSxNQUNiQyxRQURhOztBQUFBLG1CQUVPRixzREFBUSxDQUFDLElBQUQsQ0FGZjtBQUFBLE1BRXBCRyxTQUZvQjtBQUFBLE1BRVRDLFlBRlMsa0JBSTNCOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixZQUFRLENBQUNHLCtEQUFELENBQVI7QUFDQUMsZ0RBQUssQ0FDRkMsR0FESCxDQUNPLHdDQURQLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxJQUFELEVBQVU7QUFDZFYsY0FBUSxDQUFDVSxJQUFJLENBQUNBLElBQU4sQ0FBUjtBQUNBUixrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEtBTEgsV0FNUyxVQUFDUyxHQUFELEVBQVM7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsR0FBdEI7QUFDRCxLQVJIO0FBU0QsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBLFNBQ0UsbUVBQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1osS0FBSyxDQUFDZSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1QsTUFBQyxnREFBRDtBQUFNLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFoQjtBQUFvQixVQUFJLG1CQUFZRCxJQUFJLENBQUNDLEVBQWpCLENBQXhCO0FBQStDLFFBQUUsbUJBQVlELElBQUksQ0FBQ0MsRUFBakIsQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsSUFBRDtBQUFNLFNBQUcsRUFBRUQsSUFBSSxDQUFDQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFRRCxJQUFJLENBQUNFLEtBQWIsQ0FERixFQUVFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWNGLElBQUksQ0FBQ0csSUFBbkIsQ0FGRixDQURGLENBREYsQ0FEUztBQUFBLEdBQVYsQ0FESCxDQURGLENBREY7QUFnQkQsQ0FwQ0Q7O0dBQU1yQixJO1VBS2FPLHVEOzs7S0FMYlAsSTtBQXNDTixJQUFNc0IsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLHlFQUFWO01BQU1GLEk7QUFRTixJQUFNRyxRQUFRLEdBQUdGLHlEQUFNLENBQUNHLENBQVY7QUFBQTtBQUFBO0FBQUEsa0RBQWQ7TUFBTUQsUTtBQU1OLElBQU1FLElBQUksR0FBR0oseURBQU0sQ0FBQ0ssRUFBVjtBQUFBO0FBQUE7QUFBQSxpSEFBVjtNQUFNRCxJO0FBUU4sSUFBTUUsS0FBSyxHQUFHTix5REFBTSxDQUFDTyxFQUFWO0FBQUE7QUFBQTtBQUFBLGdHQUFYO01BQU1ELEs7QUFRTixJQUFNRSxXQUFXLEdBQUdSLHlEQUFNLENBQUNTLENBQVY7QUFBQTtBQUFBO0FBQUEsaUZBQWpCO01BQU1ELFc7QUFPTixJQUFNRSxZQUFZLEdBQUdWLHlEQUFNLENBQUNXLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBbEI7QUFFZUMsMEhBQU8sQ0FBQyxJQUFELEVBQU87QUFBRTFCLFVBQVEsRUFBUkEsK0RBQVFBO0FBQVYsQ0FBUCxDQUFQLENBQTRCVCxJQUE1QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mNDUwZGI3NjhlNjQ4NmEzZDc3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9hY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvL0dldCBhbGwgcG9zdHNcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRQb3N0cyk7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHNcIilcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRQb3N0cyhkYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciFcIiwgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgPExpbmsga2V5PXtwb3N0LmlkfSBocmVmPXtgL3Bvc3RzLyR7cG9zdC5pZH1gfSBhcz17YC9wb3N0cy8ke3Bvc3QuaWR9YH0+XHJcbiAgICAgICAgICAgIDxJdGVtIGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgPFBvc3RMaW5rPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlPntwb3N0LnRpdGxlfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+e3Bvc3QuYm9keX08L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDwvUG9zdExpbms+XHJcbiAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwNDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdExpbmsgPSBzdHlsZWQuYWBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgyYFxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LWZhbWlseTogXCJCbGlua2VyXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQmxpbmtlclwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbmA7XHJcblxyXG5jb25zdCBCdG5Db250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgZ2V0UG9zdHMgfSkoSG9tZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=