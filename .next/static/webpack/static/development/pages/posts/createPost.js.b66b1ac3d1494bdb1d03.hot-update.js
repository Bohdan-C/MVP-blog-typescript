webpackHotUpdate("static\\development\\pages\\posts\\createPost.js",{

/***/ "./pages/posts/createPost/index.tsx":
/*!******************************************!*\
  !*** ./pages/posts/createPost/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/components/Navbar */ "./src/components/Navbar.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\mvp-blog-typescript\\pages\\posts\\createPost\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var IDS = {
  TITLE: "title",
  BODY: "body"
};
/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  var _useState2;

  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_useState2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState2, IDS.TITLE, ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState2, IDS.BODY, ""), _useState2)),
      state = _useState[0],
      setState = _useState[1]; //   : React.ChangeEvent<HTMLInputElement>


  var onChange = function onChange(event) {
    var _event$target = event.target,
        id = _event$target.id,
        value = _event$target.value;
    setState(function (currentState) {
      return _objectSpread(_objectSpread({}, currentState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, id, value));
    });
  };

  var addPost = function addPost(event) {
    event.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_4___default()({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify(state),
      url: "https://simple-blog-api.crew.red/posts"
    }).then(function (res) {
      var _setState;

      alert("Your post has been added.");
      setState((_setState = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_setState, IDS.TITLE, ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_setState, IDS.BODY, ""), _setState));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_src_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(Form, {
    onSubmit: addPost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(Input, {
    id: IDS.TITLE,
    value: state[IDS.TITLE],
    onChange: onChange,
    placeholder: "Title...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx(Textarea, {
    id: IDS.BODY,
    value: state[IDS.BODY],
    onChange: onChange,
    placeholder: "Post...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx(Btn, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Submit"))));
}, "FYmXhCWLriIyGmEDFodCuFmDP78="));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "createPost__Container",
  componentId: "sc-1m784gu-0"
})(["display:flex;justify-content:center;"]);
_c = Container;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form.withConfig({
  displayName: "createPost__Form",
  componentId: "sc-1m784gu-1"
})(["display:flex;flex-direction:column;"]);
_c2 = Form;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "createPost__Input",
  componentId: "sc-1m784gu-2"
})(["padding-left:25px;font-size:16px;width:700px;height:45px;margin-top:40px;border:none;border-radius:10px;box-shadow:inset 0 0 7px rgba(0,0,0,0.2);"]);
_c3 = Input;
var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].textarea.withConfig({
  displayName: "createPost__Textarea",
  componentId: "sc-1m784gu-3"
})(["padding-left:25px;padding-top:15px;font-size:16px;max-width:700px;min-width:700px;height:45px;margin-top:40px;border:none;border-radius:10px;box-shadow:inset 0 0 7px rgba(0,0,0,0.2);"]);
_c4 = Textarea;
var Btn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "createPost__Btn",
  componentId: "sc-1m784gu-4"
})(["&:hover{margin-top:27px;}cursor:pointer;margin-top:30px;width:100px;height:30px;border:none;border-radius:10px;background:#fff;box-shadow:0px 4px 10px 0px rgba(0,0,0,0.35);"]);
_c5 = Btn;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "Input");
$RefreshReg$(_c4, "Textarea");
$RefreshReg$(_c5, "Btn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9jcmVhdGVQb3N0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJRFMiLCJUSVRMRSIsIkJPRFkiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImN1cnJlbnRTdGF0ZSIsImFkZFBvc3QiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwidGhlbiIsInJlcyIsImFsZXJ0IiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiRm9ybSIsImZvcm0iLCJJbnB1dCIsImlucHV0IiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsIkJ0biIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUc7QUFDVkMsT0FBSyxFQUFFLE9BREc7QUFFVkMsTUFBSSxFQUFFO0FBRkksQ0FBWjtBQUtlLDhFQUFNO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLHlIQUMvQkgsR0FBRyxDQUFDQyxLQUQyQixFQUNuQixFQURtQix5R0FFL0JELEdBQUcsQ0FBQ0UsSUFGMkIsRUFFcEIsRUFGb0IsZUFEZjtBQUFBLE1BQ1pFLEtBRFk7QUFBQSxNQUNMQyxRQURLLGlCQU1uQjs7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsd0JBQ0pBLEtBQUssQ0FBQ0MsTUFERjtBQUFBLFFBQ2xCQyxFQURrQixpQkFDbEJBLEVBRGtCO0FBQUEsUUFDZEMsS0FEYyxpQkFDZEEsS0FEYztBQUcxQkwsWUFBUSxDQUFDLFVBQUNNLFlBQUQ7QUFBQSw2Q0FDSkEsWUFESSxxR0FFTkYsRUFGTSxFQUVEQyxLQUZDO0FBQUEsS0FBRCxDQUFSO0FBSUQsR0FQRDs7QUFTQSxNQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDTCxLQUFELEVBQVc7QUFDekJBLFNBQUssQ0FBQ00sY0FBTjtBQUNBQyxnREFBSyxDQUFDO0FBQ0pDLFlBQU0sRUFBRSxNQURKO0FBRUpDLGFBQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQixPQUZMO0FBR0pDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVmLEtBQWYsQ0FIRjtBQUlKZ0IsU0FBRyxFQUFFO0FBSkQsS0FBRCxDQUFMLENBS0dDLElBTEgsQ0FLUSxVQUFDQyxHQUFELEVBQVM7QUFBQTs7QUFDZkMsV0FBSyxDQUFDLDJCQUFELENBQUw7QUFDQWxCLGNBQVEsdUhBQUlMLEdBQUcsQ0FBQ0MsS0FBUixFQUFnQixFQUFoQix3R0FBcUJELEdBQUcsQ0FBQ0UsSUFBekIsRUFBZ0MsRUFBaEMsY0FBUjtBQUNELEtBUkQ7QUFTRCxHQVhEOztBQWFBLFNBQ0UsbUVBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsSUFBRDtBQUFNLFlBQVEsRUFBRVUsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUNFLE1BQUUsRUFBRVosR0FBRyxDQUFDQyxLQURWO0FBRUUsU0FBSyxFQUFFRyxLQUFLLENBQUNKLEdBQUcsQ0FBQ0MsS0FBTCxDQUZkO0FBR0UsWUFBUSxFQUFFSyxRQUhaO0FBSUUsZUFBVyxFQUFDLFVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0UsTUFBQyxRQUFEO0FBQ0UsTUFBRSxFQUFFTixHQUFHLENBQUNFLElBRFY7QUFFRSxTQUFLLEVBQUVFLEtBQUssQ0FBQ0osR0FBRyxDQUFDRSxJQUFMLENBRmQ7QUFHRSxZQUFRLEVBQUVJLFFBSFo7QUFJRSxlQUFXLEVBQUMsU0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFhRSxNQUFDLEdBQUQ7QUFBSyxRQUFJLEVBQUMsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsQ0FERixDQUZGLENBREY7QUFzQkQsQ0FwREQ7QUFzREEsSUFBTWtCLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0Q0FBZjtLQUFNRixTO0FBS04sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0FBQUE7QUFBQTtBQUFBLDJDQUFWO01BQU1ELEk7QUFLTixJQUFNRSxLQUFLLEdBQUdKLHlEQUFNLENBQUNLLEtBQVY7QUFBQTtBQUFBO0FBQUEseUpBQVg7TUFBTUQsSztBQVdOLElBQU1FLFFBQVEsR0FBR04seURBQU0sQ0FBQ08sUUFBVjtBQUFBO0FBQUE7QUFBQSw4TEFBZDtNQUFNRCxRO0FBYU4sSUFBTUUsR0FBRyxHQUFHUix5REFBTSxDQUFDUyxNQUFWO0FBQUE7QUFBQTtBQUFBLG9MQUFUO01BQU1ELEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxjcmVhdGVQb3N0LmpzLmI2NmIxYWMzZDE0OTRiZGIxZDAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBJRFMgPSB7XHJcbiAgVElUTEU6IFwidGl0bGVcIixcclxuICBCT0RZOiBcImJvZHlcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIFtJRFMuVElUTEVdOiBcIlwiLFxyXG4gICAgW0lEUy5CT0RZXTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgLy8gICA6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IGlkLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIHNldFN0YXRlKChjdXJyZW50U3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmN1cnJlbnRTdGF0ZSxcclxuICAgICAgW2lkXTogdmFsdWUsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkUG9zdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShzdGF0ZSksXHJcbiAgICAgIHVybDogXCJodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0c1wiLFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGFsZXJ0KFwiWW91ciBwb3N0IGhhcyBiZWVuIGFkZGVkLlwiKVxyXG4gICAgICBzZXRTdGF0ZSh7IFtJRFMuVElUTEVdOiBcIlwiLCBbSURTLkJPRFldOiBcIlwiIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17YWRkUG9zdH0+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgaWQ9e0lEUy5USVRMRX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlW0lEUy5USVRMRV19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZS4uLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgIGlkPXtJRFMuQk9EWX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlW0lEUy5CT0RZXX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvc3QuLi5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdG4gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnRuPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA3cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5gO1xyXG5cclxuY29uc3QgVGV4dGFyZWEgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1pbi13aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbmA7XHJcblxyXG5jb25zdCBCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICY6aG92ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjdweDtcclxuICB9XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==