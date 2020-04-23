webpackHotUpdate("static/development/pages/custom-server.js",{

/***/ "./pages/custom-server.js":
/*!********************************!*\
  !*** ./pages/custom-server.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var CustomServer = function CustomServer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: '',
    email: '',
    msg: null
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      data = _useState2[0],
      setData = _useState2[1];

  var getUsers = function getUsers() {
    var response, users;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getUsers$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat("http://localhost:3000", "/api/auth")));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(response.json());

          case 5:
            users = _context.sent;
            if (response.status === 200) setData(users);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getUsers();

    if (state.msg) {
      setTimeout(function () {
        setState({
          msg: ''
        });
      }, 3000);
    }
  }, [state.msg]);

  var fetchData = function fetchData() {
    var name, email, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = state.name, email = state.email;

            if (!(!state.name || !state.email)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            _context2.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("".concat("http://localhost:3000", "/api/auth"), {
              name: name,
              email: email
            }));

          case 5:
            response = _context2.sent;
            setState({
              msg: response.data.message
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var deletedUser = function deletedUser(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function deletedUser$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a["delete"]("".concat("http://localhost:3000", "/api/auth/").concat(id)));

          case 2:
            getUsers();

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
    setState({
      name: '',
      email: ''
    });
  }

  function handleChange(e) {
    setState(_objectSpread({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("title", null, "Custom server"), __jsx("meta", {
    name: "description",
    content: "this is a tv route"
  })), __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx("main", {
    className: "jsx-1793490432"
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1793490432"
  }, __jsx("h2", {
    className: "jsx-1793490432"
  }, "User List"), state.msg && __jsx("p", {
    className: "jsx-1793490432"
  }, state.msg), __jsx("label", {
    htmlFor: "name",
    className: "jsx-1793490432"
  }, "Name: "), __jsx("input", {
    type: "text",
    id: "name",
    name: "name",
    value: state.name,
    onChange: handleChange,
    placeholder: "No ingresar datos validos ahre!!",
    className: "jsx-1793490432"
  }), __jsx("label", {
    htmlFor: "email",
    className: "jsx-1793490432"
  }, "Email: "), __jsx("input", {
    type: "email",
    id: "email",
    name: "email",
    value: state.email,
    onChange: handleChange,
    className: "jsx-1793490432"
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1793490432"
  }, "Save data")), __jsx("table", {
    border: "1",
    className: "jsx-1793490432"
  }, __jsx("thead", {
    className: "jsx-1793490432"
  }, __jsx("tr", {
    className: "jsx-1793490432"
  }, __jsx("th", {
    className: "jsx-1793490432"
  }, "USERS"), __jsx("th", {
    className: "jsx-1793490432"
  }, "@"))), __jsx("tbody", {
    className: "jsx-1793490432"
  }, data && data.map(function (user) {
    return __jsx("tr", {
      key: user._id,
      className: "jsx-1793490432"
    }, __jsx("td", {
      className: "jsx-1793490432"
    }, user.name), __jsx("td", {
      className: "jsx-1793490432"
    }, user.email, __jsx("span", {
      onClick: function onClick() {
        return deletedUser(user._id);
      },
      className: "jsx-1793490432" + " " + "delete"
    }, "X")));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1793490432"
  }, "main.jsx-1793490432{width:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(370px,1fr));grid-gap:1rem;font-family:sans-serif;}@media (max-width:720px){main.jsx-1793490432{font-size:14px;}}h2.jsx-1793490432{color:#555;margin-bottom:1rem;}table.jsx-1793490432{grid-column-end:span 1.5;}table.jsx-1793490432,form.jsx-1793490432{width:100%;margin:2rem auto;background:#dedede;padding:1rem;border:none;border-radius:5px;box-shadow:0 0 7px rgba(0,0,0,0.3);}thead.jsx-1793490432{background:#000;color:#fff;}tbody.jsx-1793490432{background:#eee;color:#333;}th.jsx-1793490432,td.jsx-1793490432{padding:0.7rem 1rem;border:2px solid #dedede;}form.jsx-1793490432{width:100%;margin:2rem auto;background:#dedede;padding:2rem;}input.jsx-1793490432{width:100%;padding:0.7rem 1rem;border:none;border-radius:5px;margin:0.5rem 0;}p.jsx-1793490432{color:green;text-transform:uppercase;font-size:1rem;margin:0.5rem;text-align:center;}button.jsx-1793490432{padding:0.7rem 1rem;background:black;border:none;color:white;}.delete.jsx-1793490432{float:right;color:#C01D3A;cursor:pointer;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2UvRGVza3RvcC9sZWFybmluZy9uZXh0anMtdGVzdC9wYWdlcy9jdXN0b20tc2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHVyxBQUcwQixBQVFNLEFBSU4sQUFJYyxBQUlkLEFBU0ssQUFJQSxBQUtJLEFBSVQsQUFNQSxBQU9DLEFBT1EsQUFNUixXQW5FQyxBQVlNLEFBUUYsQUFzQkEsQUFNRyxDQU9LLEFBYVgsR0E1RGQsQ0FxQlcsQUFJQSxJQUtjLEFBd0JSLElBN0QyQyxDQWU5RCxDQXFEaUIsQ0F2Q2pCLEFBSUEsQ0FicUIsQUFzQkEsRUE5QnJCLENBb0NjLE1BT0csQUFPSCxJQU9LLEVBcEJDLEVBWHBCLEVBakJlLEFBc0JBLEVBb0JELEdBUEUsTUFjaEIsRUFoRGMsQUFzQmQsQ0FNa0IsQUFjbEIsS0FQb0IsTUFsQ0EsS0E0QnBCLEtBbERnQixFQXlEaEIsTUFsQ3dDLE1BdEJmLHVCQUN6QixNQXNCQSIsImZpbGUiOiIvaG9tZS9taWtlL0Rlc2t0b3AvbGVhcm5pbmcvbmV4dGpzLXRlc3QvcGFnZXMvY3VzdG9tLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQ3VzdG9tU2VydmVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBtc2c6IG51bGwsXG4gIH0pO1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBnZXRVc2VycyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlVSTH0vYXBpL2F1dGhgKTtcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHNldERhdGEodXNlcnMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXNlcnMoKTtcblxuICAgIGlmIChzdGF0ZS5tc2cpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh7IG1zZzogJycgfSk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gIH0sIFtzdGF0ZS5tc2ddKTtcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCB9ID0gc3RhdGU7XG4gICAgaWYgKCFzdGF0ZS5uYW1lIHx8ICFzdGF0ZS5lbWFpbCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LlVSTH0vYXBpL2F1dGhgLCB7IG5hbWUsIGVtYWlsIH0pO1xuICAgIHNldFN0YXRlKHsgbXNnOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UgfSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlZFVzZXIgPSBhc3luYyAoaWQpID0+IHtcbiAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7cHJvY2Vzcy5lbnYuVVJMfS9hcGkvYXV0aC8ke2lkfWApO1xuICAgIGdldFVzZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmZXRjaERhdGEoKTtcbiAgICBzZXRTdGF0ZSh7IG5hbWU6ICcnLCBlbWFpbDogJycgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkN1c3RvbSBzZXJ2ZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwidGhpcyBpcyBhIHR2IHJvdXRlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGgyPlVzZXIgTGlzdDwvaDI+XG4gICAgICAgICAgICB7c3RhdGUubXNnICYmIDxwPntzdGF0ZS5tc2d9PC9wPn1cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vIGluZ3Jlc2FyIGRhdG9zIHZhbGlkb3MgYWhyZSEhXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6IDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIGRhdGE8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPHRhYmxlIGJvcmRlcj1cIjFcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5VU0VSUzwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICAgICAgICBkYXRhLm1hcCgodXNlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17dXNlci5faWR9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuZW1haWx9IFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IGRlbGV0ZWRVc2VyKHVzZXIuX2lkKX0+WDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNzBweCwgMWZyKSk7XG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAxcmVtO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogc3BhbiAxLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZSxcbiAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RlZGVkZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVsZXRlIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICBjb2xvcjogI0MwMUQzQTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21TZXJ2ZXI7XG4iXX0= */\n/*@ sourceURL=/home/mike/Desktop/learning/nextjs-test/pages/custom-server.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomServer);

/***/ })

})
//# sourceMappingURL=custom-server.js.7bf4976812f03fb65a2d.hot-update.js.map