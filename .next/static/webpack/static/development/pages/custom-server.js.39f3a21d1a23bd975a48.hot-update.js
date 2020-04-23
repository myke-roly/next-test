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
    className: "jsx-1939335273"
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1939335273"
  }, __jsx("h2", {
    className: "jsx-1939335273"
  }, "User List"), state.msg && __jsx("p", {
    className: "jsx-1939335273"
  }, state.msg), __jsx("label", {
    htmlFor: "name",
    className: "jsx-1939335273"
  }, "Name: "), __jsx("input", {
    type: "text",
    id: "name",
    name: "name",
    value: state.name,
    onChange: handleChange,
    placeholder: "No ingresar datos validos ahre!!",
    className: "jsx-1939335273"
  }), __jsx("label", {
    htmlFor: "email",
    className: "jsx-1939335273"
  }, "Email: "), __jsx("input", {
    type: "email",
    id: "email",
    name: "email",
    value: state.email,
    onChange: handleChange,
    className: "jsx-1939335273"
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1939335273"
  }, "Save data")), __jsx("table", {
    border: "1",
    className: "jsx-1939335273"
  }, __jsx("thead", {
    className: "jsx-1939335273"
  }, __jsx("tr", {
    className: "jsx-1939335273"
  }, __jsx("th", {
    className: "jsx-1939335273"
  }, "USERS"), __jsx("th", {
    className: "jsx-1939335273"
  }, "@"))), __jsx("tbody", {
    className: "jsx-1939335273"
  }, data && data.map(function (user) {
    return __jsx("tr", {
      key: user._id,
      className: "jsx-1939335273"
    }, __jsx("td", {
      contentEditable: "true",
      className: "jsx-1939335273"
    }, user.name), __jsx("td", {
      className: "jsx-1939335273"
    }, user.email, __jsx("span", {
      onClick: function onClick() {
        return deletedUser(user._id);
      },
      className: "jsx-1939335273" + " " + "delete"
    }, "X")));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1939335273"
  }, "main.jsx-1939335273{width:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(370px,1fr));grid-gap:1rem;font-family:sans-serif;}@media (max-width:720px){main.jsx-1939335273{font-size:14px;}}h2.jsx-1939335273{color:#555;margin-bottom:1rem;}table.jsx-1939335273{grid-column-end:span 1.5;}table.jsx-1939335273,form.jsx-1939335273{width:100%;margin:2rem auto;background:#dedede;padding:1rem;border:none;border-radius:5px;box-shadow:0 0 7px rgba(0,0,0,0.3);}thead.jsx-1939335273{background:#000;color:#fff;}tbody.jsx-1939335273{background:#efefef;color:#333;}th.jsx-1939335273,td.jsx-1939335273{padding:0.7rem 1rem;border:2px solid #dedede;}form.jsx-1939335273{width:100%;margin:2rem auto;background:#dedede;padding:2rem;}input.jsx-1939335273{width:100%;padding:0.7rem 1rem;border:none;border-radius:5px;margin:0.5rem 0;}p.jsx-1939335273{color:green;text-transform:uppercase;font-size:1rem;margin:0.5rem;text-align:center;}button.jsx-1939335273{padding:0.7rem 1rem;background:black;border:none;color:white;}.delete.jsx-1939335273{float:right;color:#C01D3A;cursor:pointer;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2UvRGVza3RvcC9sZWFybmluZy9uZXh0anMtdGVzdC9wYWdlcy9jdXN0b20tc2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHVyxBQUcwQixBQVFNLEFBSU4sQUFJYyxBQUlkLEFBU0ssQUFJRyxBQUtDLEFBSVQsQUFNQSxBQU9DLEFBT1EsQUFNUixXQW5FQyxBQVlNLEFBUUYsQUFzQkEsQUFNRyxDQU9LLEFBYVgsR0E1RGQsQ0FxQlcsR0FJQSxDQUtjLEFBd0JSLElBN0QyQyxDQWU5RCxDQXFEaUIsQ0F2Q2pCLENBVHFCLEFBc0JBLEVBOUJyQixBQXFCQSxDQWVjLE1BT0csQUFPSCxJQU9LLEVBcEJDLEVBWHBCLEVBakJlLEFBc0JBLEVBb0JELEdBUEUsTUFjaEIsRUFoRGMsQUFzQmQsQ0FNa0IsQUFjbEIsS0FQb0IsTUFsQ0EsS0E0QnBCLEtBbERnQixFQXlEaEIsTUFsQ3dDLE1BdEJmLHVCQUN6QixNQXNCQSIsImZpbGUiOiIvaG9tZS9taWtlL0Rlc2t0b3AvbGVhcm5pbmcvbmV4dGpzLXRlc3QvcGFnZXMvY3VzdG9tLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQ3VzdG9tU2VydmVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBtc2c6IG51bGwsXG4gIH0pO1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBnZXRVc2VycyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlVSTH0vYXBpL2F1dGhgKTtcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHNldERhdGEodXNlcnMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXNlcnMoKTtcblxuICAgIGlmIChzdGF0ZS5tc2cpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh7IG1zZzogJycgfSk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gIH0sIFtzdGF0ZS5tc2ddKTtcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCB9ID0gc3RhdGU7XG4gICAgaWYgKCFzdGF0ZS5uYW1lIHx8ICFzdGF0ZS5lbWFpbCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LlVSTH0vYXBpL2F1dGhgLCB7IG5hbWUsIGVtYWlsIH0pO1xuICAgIHNldFN0YXRlKHsgbXNnOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UgfSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlZFVzZXIgPSBhc3luYyAoaWQpID0+IHtcbiAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7cHJvY2Vzcy5lbnYuVVJMfS9hcGkvYXV0aC8ke2lkfWApO1xuICAgIGdldFVzZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmZXRjaERhdGEoKTtcbiAgICBzZXRTdGF0ZSh7IG5hbWU6ICcnLCBlbWFpbDogJycgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkN1c3RvbSBzZXJ2ZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwidGhpcyBpcyBhIHR2IHJvdXRlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGgyPlVzZXIgTGlzdDwvaDI+XG4gICAgICAgICAgICB7c3RhdGUubXNnICYmIDxwPntzdGF0ZS5tc2d9PC9wPn1cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vIGluZ3Jlc2FyIGRhdG9zIHZhbGlkb3MgYWhyZSEhXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6IDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIGRhdGE8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPHRhYmxlIGJvcmRlcj1cIjFcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5VU0VSUzwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICAgICAgICBkYXRhLm1hcCgodXNlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17dXNlci5faWR9PlxuICAgICAgICAgICAgICAgICAgICA8dGQgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiPnt1c2VyLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLmVtYWlsfSBcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVkVXNlcih1c2VyLl9pZCl9Plg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzcwcHgsIDFmcikpO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMXJlbTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMS41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGUsXG4gICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlbGV0ZSB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgY29sb3I6ICNDMDFEM0E7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tU2VydmVyO1xuIl19 */\n/*@ sourceURL=/home/mike/Desktop/learning/nextjs-test/pages/custom-server.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomServer);

/***/ })

})
//# sourceMappingURL=custom-server.js.39f3a21d1a23bd975a48.hot-update.js.map