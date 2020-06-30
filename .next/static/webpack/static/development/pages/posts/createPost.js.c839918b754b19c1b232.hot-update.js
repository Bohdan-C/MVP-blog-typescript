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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "C:\\mvp-blog-typescript\\pages\\posts\\createPost\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import { addPost } from "../../../src/redux/actions/actions";

var IDS = {
  TITLE: "title",
  BODY: "body"
};
;
/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  var _useState2;

  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_useState2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState2, IDS.TITLE, ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState2, IDS.BODY, ""), _useState2)),
      state = _useState[0],
      setState = _useState[1];

  var onChange = function onChange(e) {
    var _e$target = e.target,
        id = _e$target.id,
        value = _e$target.value;
    setState(function (currentState) {
      return _objectSpread(_objectSpread({}, currentState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, id, value));
    });
  };

  var addPost = function addPost() {
    return function (dispatch) {
      axios__WEBPACK_IMPORTED_MODULE_3___default()({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(newPost),
        url: 'https://simple-blog-api.crew.red/posts'
      }).then(function (res) {
        return console.log(res);
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_src_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }
      }), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }
      }, __jsx("form", {
        onSubmit: addPost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx("input", {
        id: IDS.TITLE,
        value: state[IDS.TITLE],
        onChange: onChange,
        placeholder: "Title...",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }), __jsx("input", {
        id: IDS.BODY,
        value: state[IDS.BODY],
        onChange: onChange,
        placeholder: "Post...",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }), __jsx("button", {
        type: "submit",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, "Submit"))));
    };
  };
}, "FYmXhCWLriIyGmEDFodCuFmDP78="));

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

/***/ }),

/***/ "./src/redux/actions/actions.ts":
false,

/***/ "./src/redux/types/types.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9jcmVhdGVQb3N0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJRFMiLCJUSVRMRSIsIkJPRFkiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiY3VycmVudFN0YXRlIiwiYWRkUG9zdCIsImRpc3BhdGNoIiwiYXhpb3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdQb3N0IiwidXJsIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUlBOztBQUVBLElBQU1BLEdBQUcsR0FBRztBQUNWQyxPQUFLLEVBQUUsT0FERztBQUVWQyxNQUFJLEVBQUU7QUFGSSxDQUFaO0FBUUc7QUFFWSw4RUFBTTtBQUFBOztBQUFBOztBQUFBLGtCQUNPQyxzREFBUSx5SEFDL0JILEdBQUcsQ0FBQ0MsS0FEMkIsRUFDbkIsRUFEbUIseUdBRS9CRCxHQUFHLENBQUNFLElBRjJCLEVBRXBCLEVBRm9CLGVBRGY7QUFBQSxNQUNaRSxLQURZO0FBQUEsTUFDTEMsUUFESzs7QUFNbkIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUE0QztBQUFBLG9CQUNyQ0EsQ0FBQyxDQUFDQyxNQURtQztBQUFBLFFBQ25EQyxFQURtRCxhQUNuREEsRUFEbUQ7QUFBQSxRQUMvQ0MsS0FEK0MsYUFDL0NBLEtBRCtDO0FBRzNETCxZQUFRLENBQUMsVUFBQ00sWUFBRDtBQUFBLDZDQUNKQSxZQURJLHFHQUVORixFQUZNLEVBRURDLEtBRkM7QUFBQSxLQUFELENBQVI7QUFJRCxHQVBEOztBQVNBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsV0FBTSxVQUFDQyxRQUFELEVBQXdCO0FBQzVDQyxrREFBSyxDQUFDO0FBQ0pDLGNBQU0sRUFBRSxNQURKO0FBRUpDLGVBQU8sRUFBRTtBQUFFLDBCQUFnQjtBQUFsQixTQUZMO0FBR0pDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVDLE9BQWYsQ0FIRjtBQUlKQyxXQUFHLEVBQUU7QUFKRCxPQUFELENBQUwsQ0FNREMsSUFOQyxDQU1JLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsT0FOSjtBQVFGLGFBQ0UsbUVBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTSxnQkFBUSxFQUFFWCxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxVQUFFLEVBQUVaLEdBQUcsQ0FBQ0MsS0FEVjtBQUVFLGFBQUssRUFBRUcsS0FBSyxDQUFDSixHQUFHLENBQUNDLEtBQUwsQ0FGZDtBQUdFLGdCQUFRLEVBQUVLLFFBSFo7QUFJRSxtQkFBVyxFQUFDLFVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBT0U7QUFDRSxVQUFFLEVBQUVOLEdBQUcsQ0FBQ0UsSUFEVjtBQUVFLGFBQUssRUFBRUUsS0FBSyxDQUFDSixHQUFHLENBQUNFLElBQUwsQ0FGZDtBQUdFLGdCQUFRLEVBQUVJLFFBSFo7QUFJRSxtQkFBVyxFQUFDLFNBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBGLEVBYUU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGLENBREYsQ0FGRixDQURGO0FBc0JELEtBL0JpQjtBQUFBLEdBQWhCO0FBK0JBLENBOUNGIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0c1xcY3JlYXRlUG9zdC5qcy5jODM5OTE4Yjc1NGIxOWMxYjIzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuLy8gaW1wb3J0IHsgYWRkUG9zdCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCBJRFMgPSB7XHJcbiAgVElUTEU6IFwidGl0bGVcIixcclxuICBCT0RZOiBcImJvZHlcIixcclxufTtcclxuXHJcbmludGVyZmFjZSBuZXdQb3N0IHtcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBib2R5OiBzdHJpbmdcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgW0lEUy5USVRMRV06IFwiXCIsXHJcbiAgICBbSURTLkJPRFldOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc3QgeyBpZCwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIHNldFN0YXRlKChjdXJyZW50U3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmN1cnJlbnRTdGF0ZSxcclxuICAgICAgW2lkXTogdmFsdWUsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkUG9zdCA9ICgpID0+IChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShuZXdQb3N0KSxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMnXHJcbiAgfSlcclxuICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17YWRkUG9zdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9e0lEUy5USVRMRX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlW0lEUy5USVRMRV19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZS4uLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPXtJRFMuQk9EWX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlW0lEUy5CT0RZXX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvc3QuLi5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59fVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==