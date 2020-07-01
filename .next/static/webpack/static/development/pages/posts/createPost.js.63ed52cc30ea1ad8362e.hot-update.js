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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


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
    axios__WEBPACK_IMPORTED_MODULE_5___default()({
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
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_src_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(Form, {
    onSubmit: addPost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 48,
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
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx(Btn, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9jcmVhdGVQb3N0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJRFMiLCJUSVRMRSIsIkJPRFkiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImN1cnJlbnRTdGF0ZSIsImFkZFBvc3QiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwidGhlbiIsInJlcyIsImFsZXJ0IiwiUm91dGVyIiwicHVzaCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkZvcm0iLCJmb3JtIiwiSW5wdXQiLCJpbnB1dCIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJCdG4iLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRztBQUNWQyxPQUFLLEVBQUUsT0FERztBQUVWQyxNQUFJLEVBQUU7QUFGSSxDQUFaO0FBS2UsOEVBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEseUhBQy9CSCxHQUFHLENBQUNDLEtBRDJCLEVBQ25CLEVBRG1CLHlHQUUvQkQsR0FBRyxDQUFDRSxJQUYyQixFQUVwQixFQUZvQixlQURmO0FBQUEsTUFDWkUsS0FEWTtBQUFBLE1BQ0xDLFFBREssaUJBTW5COzs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQSx3QkFDSkEsS0FBSyxDQUFDQyxNQURGO0FBQUEsUUFDbEJDLEVBRGtCLGlCQUNsQkEsRUFEa0I7QUFBQSxRQUNkQyxLQURjLGlCQUNkQSxLQURjO0FBRzFCTCxZQUFRLENBQUMsVUFBQ00sWUFBRDtBQUFBLDZDQUNKQSxZQURJLHFHQUVORixFQUZNLEVBRURDLEtBRkM7QUFBQSxLQUFELENBQVI7QUFJRCxHQVBEOztBQVNBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNMLEtBQUQsRUFBVztBQUN6QkEsU0FBSyxDQUFDTSxjQUFOO0FBQ0FDLGdEQUFLLENBQUM7QUFDSkMsWUFBTSxFQUFFLE1BREo7QUFFSkMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRkw7QUFHSkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWYsS0FBZixDQUhGO0FBSUpnQixTQUFHLEVBQUU7QUFKRCxLQUFELENBQUwsQ0FLR0MsSUFMSCxDQUtRLFVBQUNDLEdBQUQsRUFBUztBQUFBOztBQUNmQyxXQUFLLENBQUMsMkJBQUQsQ0FBTDtBQUNBbEIsY0FBUSx1SEFBSUwsR0FBRyxDQUFDQyxLQUFSLEVBQWdCLEVBQWhCLHdHQUFxQkQsR0FBRyxDQUFDRSxJQUF6QixFQUFnQyxFQUFoQyxjQUFSO0FBQ0FzQix3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNELEtBVEQ7QUFVRCxHQVpEOztBQWNBLFNBQ0UsbUVBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsSUFBRDtBQUFNLFlBQVEsRUFBRWIsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUNFLE1BQUUsRUFBRVosR0FBRyxDQUFDQyxLQURWO0FBRUUsU0FBSyxFQUFFRyxLQUFLLENBQUNKLEdBQUcsQ0FBQ0MsS0FBTCxDQUZkO0FBR0UsWUFBUSxFQUFFSyxRQUhaO0FBSUUsZUFBVyxFQUFDLFVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0UsTUFBQyxRQUFEO0FBQ0UsTUFBRSxFQUFFTixHQUFHLENBQUNFLElBRFY7QUFFRSxTQUFLLEVBQUVFLEtBQUssQ0FBQ0osR0FBRyxDQUFDRSxJQUFMLENBRmQ7QUFHRSxZQUFRLEVBQUVJLFFBSFo7QUFJRSxlQUFXLEVBQUMsU0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFhRSxNQUFDLEdBQUQ7QUFBSyxRQUFJLEVBQUMsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsQ0FERixDQUZGLENBREY7QUFzQkQsQ0FyREQ7QUF1REEsSUFBTW9CLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0Q0FBZjtLQUFNRixTO0FBS04sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0FBQUE7QUFBQTtBQUFBLDJDQUFWO01BQU1ELEk7QUFLTixJQUFNRSxLQUFLLEdBQUdKLHlEQUFNLENBQUNLLEtBQVY7QUFBQTtBQUFBO0FBQUEseUpBQVg7TUFBTUQsSztBQVdOLElBQU1FLFFBQVEsR0FBR04seURBQU0sQ0FBQ08sUUFBVjtBQUFBO0FBQUE7QUFBQSw4TEFBZDtNQUFNRCxRO0FBYU4sSUFBTUUsR0FBRyxHQUFHUix5REFBTSxDQUFDUyxNQUFWO0FBQUE7QUFBQTtBQUFBLG9MQUFUO01BQU1ELEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxjcmVhdGVQb3N0LmpzLjYzZWQ1MmNjMzBlYTFhZDgzNjJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBJRFMgPSB7XHJcbiAgVElUTEU6IFwidGl0bGVcIixcclxuICBCT0RZOiBcImJvZHlcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIFtJRFMuVElUTEVdOiBcIlwiLFxyXG4gICAgW0lEUy5CT0RZXTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgLy8gICA6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IGlkLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIHNldFN0YXRlKChjdXJyZW50U3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmN1cnJlbnRTdGF0ZSxcclxuICAgICAgW2lkXTogdmFsdWUsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkUG9zdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShzdGF0ZSksXHJcbiAgICAgIHVybDogXCJodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0c1wiLFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGFsZXJ0KFwiWW91ciBwb3N0IGhhcyBiZWVuIGFkZGVkLlwiKVxyXG4gICAgICBzZXRTdGF0ZSh7IFtJRFMuVElUTEVdOiBcIlwiLCBbSURTLkJPRFldOiBcIlwiIH0pO1xyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXthZGRQb3N0fT5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBpZD17SURTLlRJVExFfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGVbSURTLlRJVExFXX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlLi4uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dGFyZWFcclxuICAgICAgICAgICAgaWQ9e0lEUy5CT0RZfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGVbSURTLkJPRFldfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zdC4uLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ0biB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdG4+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0YXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWluLXdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuYDtcclxuXHJcbmNvbnN0IEJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgJjpob3ZlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gIH1cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9