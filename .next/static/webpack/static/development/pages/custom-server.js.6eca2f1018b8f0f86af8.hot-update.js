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
    className: "jsx-3655591644"
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-3655591644"
  }, __jsx("h2", {
    className: "jsx-3655591644"
  }, "User List"), state.msg && __jsx("p", {
    className: "jsx-3655591644"
  }, state.msg), __jsx("label", {
    htmlFor: "name",
    className: "jsx-3655591644"
  }, "Name: "), __jsx("input", {
    type: "text",
    id: "name",
    name: "name",
    value: state.name,
    onChange: handleChange,
    placeholder: "No ingresar datos validos ahre!!",
    className: "jsx-3655591644"
  }), __jsx("label", {
    htmlFor: "email",
    className: "jsx-3655591644"
  }, "Email: "), __jsx("input", {
    type: "email",
    id: "email",
    name: "email",
    value: state.email,
    onChange: handleChange,
    className: "jsx-3655591644"
  }), __jsx("button", {
    type: "submit",
    className: "jsx-3655591644"
  }, "Save data")), __jsx("table", {
    border: "1",
    className: "jsx-3655591644"
  }, __jsx("thead", {
    className: "jsx-3655591644"
  }, __jsx("tr", {
    className: "jsx-3655591644"
  }, __jsx("th", {
    className: "jsx-3655591644"
  }, "USERS"), __jsx("th", {
    className: "jsx-3655591644"
  }, "@"))), __jsx("tbody", {
    className: "jsx-3655591644"
  }, data && data.map(function (user) {
    return __jsx("tr", {
      key: user._id,
      className: "jsx-3655591644"
    }, __jsx("td", {
      className: "jsx-3655591644"
    }, user.name), __jsx("td", {
      className: "jsx-3655591644"
    }, user.email, __jsx("span", {
      onClick: function onClick() {
        return deletedUser(user._id);
      },
      className: "jsx-3655591644" + " " + "delete"
    }, "X")));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3655591644"
  }, "main.jsx-3655591644{width:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(370px,1fr));grid-gap:1rem;font-family:sans-serif;}@media (max-width:720px){main.jsx-3655591644{font-size:14px;}}h2.jsx-3655591644{color:#555;margin-bottom:1rem;}table.jsx-3655591644{grid-column-end:span 1.5;}table.jsx-3655591644,form.jsx-3655591644{width:100%;margin:2rem auto;background:#dedede;padding:1rem;border:none;border-radius:5px;box-shadow:0 0 7px rgba(0,0,0,0.3);}thead.jsx-3655591644{background:#000;color:#fff;}tbody.jsx-3655591644{background:#efefef;color:#333;}th.jsx-3655591644,td.jsx-3655591644{padding:0.7rem 1rem;border:5px solid #dedede;border-radius:5px;}form.jsx-3655591644{width:100%;margin:2rem auto;background:#dedede;padding:2rem;}input.jsx-3655591644{width:100%;padding:0.7rem 1rem;border:none;border-radius:5px;margin:0.5rem 0;}p.jsx-3655591644{color:green;text-transform:uppercase;font-size:1rem;margin:0.5rem;text-align:center;}button.jsx-3655591644{padding:0.7rem 1rem;background:black;border:none;color:white;}.delete.jsx-3655591644{float:right;color:#C01D3A;cursor:pointer;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2UvRGVza3RvcC9sZWFybmluZy9uZXh0anMtdGVzdC9wYWdlcy9jdXN0b20tc2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHVyxBQUcwQixBQVFNLEFBSU4sQUFJYyxBQUlkLEFBU0ssQUFJRyxBQUtDLEFBS1QsQUFNQSxBQU9DLEFBT1EsQUFNUixXQXBFQyxBQVlNLEFBUUYsQUF1QkEsQUFNRyxDQU9LLEFBYVgsR0E3RGQsQ0FxQlcsR0FJQSxDQUtjLEFBeUJSLElBOUQyQyxDQWU5RCxDQXNEaUIsQ0F4Q2pCLENBVHFCLEFBdUJBLEVBL0JyQixBQXFCQSxDQWdCYyxNQU9HLEFBT0gsSUFPSyxFQXBCQyxFQVpBLEVBakJMLEFBdUJBLEVBb0JELEdBUEUsTUFjaEIsRUFqRGMsQUF1QmQsQ0FNa0IsQUFjbEIsRUExQkEsR0FtQm9CLE1BbkNBLEtBNkJwQixLQW5EZ0IsRUEwRGhCLE1BbkN3QyxNQXRCZix1QkFDekIsTUFzQkEiLCJmaWxlIjoiL2hvbWUvbWlrZS9EZXNrdG9wL2xlYXJuaW5nL25leHRqcy10ZXN0L3BhZ2VzL2N1c3RvbS1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEN1c3RvbVNlcnZlciA9ICgpID0+IHtcblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgbXNnOiBudWxsLFxuICB9KTtcblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5VUkx9L2FwaS9hdXRoYCk7XG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSBzZXREYXRhKHVzZXJzKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFVzZXJzKCk7XG5cbiAgICBpZiAoc3RhdGUubXNnKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoeyBtc2c6ICcnIH0pO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuICB9LCBbc3RhdGUubXNnXSk7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwgfSA9IHN0YXRlO1xuICAgIGlmICghc3RhdGUubmFtZSB8fCAhc3RhdGUuZW1haWwpIHJldHVybjtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5VUkx9L2FwaS9hdXRoYCwgeyBuYW1lLCBlbWFpbCB9KTtcbiAgICBzZXRTdGF0ZSh7IG1zZzogcmVzcG9uc2UuZGF0YS5tZXNzYWdlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZWRVc2VyID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke3Byb2Nlc3MuZW52LlVSTH0vYXBpL2F1dGgvJHtpZH1gKTtcbiAgICBnZXRVc2VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmV0Y2hEYXRhKCk7XG4gICAgc2V0U3RhdGUoeyBuYW1lOiAnJywgZW1haWw6ICcnIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DdXN0b20gc2VydmVyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInRoaXMgaXMgYSB0diByb3V0ZVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxoMj5Vc2VyIExpc3Q8L2gyPlxuICAgICAgICAgICAge3N0YXRlLm1zZyAmJiA8cD57c3RhdGUubXNnfTwvcD59XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lOiA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJObyBpbmdyZXNhciBkYXRvcyB2YWxpZG9zIGFocmUhIVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsOiA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBkYXRhPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDx0YWJsZSBib3JkZXI9XCIxXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+VVNFUlM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5APC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKHVzZXIpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3VzZXIuX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLmVtYWlsfSBcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVkVXNlcih1c2VyLl9pZCl9Plg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzcwcHgsIDFmcikpO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMXJlbTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMS41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGUsXG4gICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI2RlZGVkZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RlZGVkZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVsZXRlIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICBjb2xvcjogI0MwMUQzQTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21TZXJ2ZXI7XG4iXX0= */\n/*@ sourceURL=/home/mike/Desktop/learning/nextjs-test/pages/custom-server.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomServer);

/***/ })

})
//# sourceMappingURL=custom-server.js.6eca2f1018b8f0f86af8.hot-update.js.map