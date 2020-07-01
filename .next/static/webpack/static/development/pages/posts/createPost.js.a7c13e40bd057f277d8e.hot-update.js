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

      console.log('object :>> ');
      setState((_setState = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_setState, IDS.TITLE, ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_setState, IDS.BODY, ""), _setState));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_src_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(Form, {
    onSubmit: addPost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 44,
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
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx(Btn, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9jcmVhdGVQb3N0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJRFMiLCJUSVRMRSIsIkJPRFkiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImN1cnJlbnRTdGF0ZSIsImFkZFBvc3QiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIklucHV0IiwiaW5wdXQiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwiQnRuIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRztBQUNWQyxPQUFLLEVBQUUsT0FERztBQUVWQyxNQUFJLEVBQUU7QUFGSSxDQUFaO0FBS2UsOEVBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEseUhBQy9CSCxHQUFHLENBQUNDLEtBRDJCLEVBQ25CLEVBRG1CLHlHQUUvQkQsR0FBRyxDQUFDRSxJQUYyQixFQUVwQixFQUZvQixlQURmO0FBQUEsTUFDWkUsS0FEWTtBQUFBLE1BQ0xDLFFBREssaUJBTW5COzs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQSx3QkFDSkEsS0FBSyxDQUFDQyxNQURGO0FBQUEsUUFDbEJDLEVBRGtCLGlCQUNsQkEsRUFEa0I7QUFBQSxRQUNkQyxLQURjLGlCQUNkQSxLQURjO0FBRzFCTCxZQUFRLENBQUMsVUFBQ00sWUFBRDtBQUFBLDZDQUNKQSxZQURJLHFHQUVORixFQUZNLEVBRURDLEtBRkM7QUFBQSxLQUFELENBQVI7QUFJRCxHQVBEOztBQVNBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNMLEtBQUQsRUFBVztBQUN6QkEsU0FBSyxDQUFDTSxjQUFOO0FBQ0FDLGdEQUFLLENBQUM7QUFDSkMsWUFBTSxFQUFFLE1BREo7QUFFSkMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRkw7QUFHSkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWYsS0FBZixDQUhGO0FBSUpnQixTQUFHLEVBQUU7QUFKRCxLQUFELENBQUwsQ0FLR0MsSUFMSCxDQUtRLFVBQUNDLEdBQUQsRUFBUztBQUFBOztBQUFDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQTRCbkIsY0FBUSx1SEFBSUwsR0FBRyxDQUFDQyxLQUFSLEVBQWdCLEVBQWhCLHdHQUFxQkQsR0FBRyxDQUFDRSxJQUF6QixFQUFnQyxFQUFoQyxjQUFSO0FBQThDLEtBTDVGO0FBT0QsR0FURDs7QUFXQSxTQUNFLG1FQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBTSxZQUFRLEVBQUVVLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFDRSxNQUFFLEVBQUVaLEdBQUcsQ0FBQ0MsS0FEVjtBQUVFLFNBQUssRUFBRUcsS0FBSyxDQUFDSixHQUFHLENBQUNDLEtBQUwsQ0FGZDtBQUdFLFlBQVEsRUFBRUssUUFIWjtBQUlFLGVBQVcsRUFBQyxVQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FLE1BQUMsUUFBRDtBQUNFLE1BQUUsRUFBRU4sR0FBRyxDQUFDRSxJQURWO0FBRUUsU0FBSyxFQUFFRSxLQUFLLENBQUNKLEdBQUcsQ0FBQ0UsSUFBTCxDQUZkO0FBR0UsWUFBUSxFQUFFSSxRQUhaO0FBSUUsZUFBVyxFQUFDLFNBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBYUUsTUFBQyxHQUFEO0FBQUssUUFBSSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLENBREYsQ0FGRixDQURGO0FBc0JELENBbEREO0FBb0RBLElBQU1tQixTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNENBQWY7S0FBTUYsUztBQUtOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtBQUFBO0FBQUE7QUFBQSwyQ0FBVjtNQUFNRCxJO0FBS04sSUFBTUUsS0FBSyxHQUFHSix5REFBTSxDQUFDSyxLQUFWO0FBQUE7QUFBQTtBQUFBLHlKQUFYO01BQU1ELEs7QUFXTixJQUFNRSxRQUFRLEdBQUdOLHlEQUFNLENBQUNPLFFBQVY7QUFBQTtBQUFBO0FBQUEsOExBQWQ7TUFBTUQsUTtBQWFOLElBQU1FLEdBQUcsR0FBR1IseURBQU0sQ0FBQ1MsTUFBVjtBQUFBO0FBQUE7QUFBQSxvTEFBVDtNQUFNRCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0c1xcY3JlYXRlUG9zdC5qcy5hN2MxM2U0MGJkMDU3ZjI3N2Q4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgSURTID0ge1xyXG4gIFRJVExFOiBcInRpdGxlXCIsXHJcbiAgQk9EWTogXCJib2R5XCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBbSURTLlRJVExFXTogXCJcIixcclxuICAgIFtJRFMuQk9EWV06IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIC8vICAgOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICBzZXRTdGF0ZSgoY3VycmVudFN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5jdXJyZW50U3RhdGUsXHJcbiAgICAgIFtpZF06IHZhbHVlLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFBvc3QgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoc3RhdGUpLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHNcIixcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge2NvbnNvbGUubG9nKCdvYmplY3QgOj4+ICcpOyBzZXRTdGF0ZSh7IFtJRFMuVElUTEVdOiBcIlwiLCBbSURTLkJPRFldOiBcIlwiIH0pfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXthZGRQb3N0fT5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBpZD17SURTLlRJVExFfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGVbSURTLlRJVExFXX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlLi4uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dGFyZWFcclxuICAgICAgICAgICAgaWQ9e0lEUy5CT0RZfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGVbSURTLkJPRFldfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zdC4uLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ0biB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdG4+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0YXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWluLXdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuYDtcclxuXHJcbmNvbnN0IEJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgJjpob3ZlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gIH1cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9