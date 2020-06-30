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
    }, post.body), __jsx(BtnContainer, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnRzeCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImdldFBvc3RzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJMaXN0Iiwic3R5bGVkIiwidWwiLCJQb3N0TGluayIsImEiLCJJdGVtIiwibGkiLCJUaXRsZSIsImgyIiwiRGVzY3JpcHRpb24iLCJwIiwiQnRuQ29udGFpbmVyIiwiZGl2IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxFQUFELENBRFA7QUFBQSxNQUNwQkMsS0FEb0I7QUFBQSxNQUNiQyxRQURhOztBQUFBLG1CQUVPRixzREFBUSxDQUFDLElBQUQsQ0FGZjtBQUFBLE1BRXBCRyxTQUZvQjtBQUFBLE1BRVRDLFlBRlMsa0JBSTNCOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixZQUFRLENBQUNHLCtEQUFELENBQVI7QUFDQUMsZ0RBQUssQ0FDRkMsR0FESCxDQUNPLHdDQURQLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxJQUFELEVBQVU7QUFDZFYsY0FBUSxDQUFDVSxJQUFJLENBQUNBLElBQU4sQ0FBUjtBQUNBUixrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEtBTEgsV0FNUyxVQUFDUyxHQUFELEVBQVM7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsR0FBdEI7QUFDRCxLQVJIO0FBU0QsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBLFNBQ0UsbUVBQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1osS0FBSyxDQUFDZSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1QsTUFBQyxnREFBRDtBQUFNLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFoQjtBQUFvQixVQUFJLG1CQUFZRCxJQUFJLENBQUNDLEVBQWpCLENBQXhCO0FBQStDLFFBQUUsbUJBQVlELElBQUksQ0FBQ0MsRUFBakIsQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsSUFBRDtBQUFNLFNBQUcsRUFBRUQsSUFBSSxDQUFDQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFRRCxJQUFJLENBQUNFLEtBQWIsQ0FERixFQUVFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWNGLElBQUksQ0FBQ0csSUFBbkIsQ0FGRixFQUdFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQUhGLENBREYsQ0FERixDQURTO0FBQUEsR0FBVixDQURILENBREYsQ0FERjtBQW1CRCxDQXZDRDs7R0FBTXJCLEk7VUFLYU8sdUQ7OztLQUxiUCxJO0FBeUNOLElBQU1zQixJQUFJLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEseUVBQVY7TUFBTUYsSTtBQVFOLElBQU1HLFFBQVEsR0FBR0YseURBQU0sQ0FBQ0csQ0FBVjtBQUFBO0FBQUE7QUFBQSxrREFBZDtNQUFNRCxRO0FBTU4sSUFBTUUsSUFBSSxHQUFHSix5REFBTSxDQUFDSyxFQUFWO0FBQUE7QUFBQTtBQUFBLGlIQUFWO01BQU1ELEk7QUFRTixJQUFNRSxLQUFLLEdBQUdOLHlEQUFNLENBQUNPLEVBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBQVg7TUFBTUQsSztBQVFOLElBQU1FLFdBQVcsR0FBR1IseURBQU0sQ0FBQ1MsQ0FBVjtBQUFBO0FBQUE7QUFBQSxpRkFBakI7TUFBTUQsVztBQU9OLElBQU1FLFlBQVksR0FBR1YseURBQU0sQ0FBQ1csR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFsQjtNQUFNRCxZO0FBRVNFLDBIQUFPLENBQUMsSUFBRCxFQUFPO0FBQUUxQixVQUFRLEVBQVJBLCtEQUFRQTtBQUFWLENBQVAsQ0FBUCxDQUE0QlQsSUFBNUIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTdjNDAwZDZjNzBkMjRjNTg2OTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy9HZXQgYWxsIHBvc3RzXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0UG9zdHMpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzXCIpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zdHMoZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhXCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgIDxMaW5rIGtleT17cG9zdC5pZH0gaHJlZj17YC9wb3N0cy8ke3Bvc3QuaWR9YH0gYXM9e2AvcG9zdHMvJHtwb3N0LmlkfWB9PlxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgICAgIDxQb3N0TGluaz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZT57cG9zdC50aXRsZX08L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uPntwb3N0LmJvZHl9PC9EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxCdG5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkNvbW1lbnRzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9CdG5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9Qb3N0TGluaz5cclxuICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogMTA0MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0TGluayA9IHN0eWxlZC5hYFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJsaW5rZXJcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBmb250LWZhbWlseTogXCJCbGlua2VyXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuYDtcclxuXHJcbmNvbnN0IEJ0bkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyBnZXRQb3N0cyB9KShIb21lKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==