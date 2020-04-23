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
    className: "jsx-1492744835"
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1492744835"
  }, __jsx("h2", {
    className: "jsx-1492744835"
  }, "User List"), state.msg && __jsx("p", {
    className: "jsx-1492744835"
  }, state.msg), __jsx("label", {
    htmlFor: "name",
    className: "jsx-1492744835"
  }, "Name: "), __jsx("input", {
    type: "text",
    id: "name",
    name: "name",
    value: state.name,
    onChange: handleChange,
    placeholder: "No ingresar datos validos ahre!!",
    className: "jsx-1492744835"
  }), __jsx("label", {
    htmlFor: "email",
    className: "jsx-1492744835"
  }, "Email: "), __jsx("input", {
    type: "email",
    id: "email",
    name: "email",
    value: state.email,
    onChange: handleChange,
    className: "jsx-1492744835"
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1492744835"
  }, "Save data")), __jsx("table", {
    border: "1",
    className: "jsx-1492744835"
  }, __jsx("thead", {
    className: "jsx-1492744835"
  }, __jsx("tr", {
    className: "jsx-1492744835"
  }, __jsx("th", {
    className: "jsx-1492744835"
  }, "USERS"), __jsx("th", {
    className: "jsx-1492744835"
  }, "@"))), __jsx("tbody", {
    className: "jsx-1492744835"
  }, data && data.map(function (user) {
    return __jsx("tr", {
      key: user._id,
      className: "jsx-1492744835"
    }, __jsx("td", {
      className: "jsx-1492744835"
    }, user.name), __jsx("td", {
      className: "jsx-1492744835"
    }, user.email, __jsx("span", {
      onClick: function onClick() {
        return deletedUser(user._id);
      },
      className: "jsx-1492744835" + " " + "delete"
    }, "X")));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1492744835"
  }, "main.jsx-1492744835{width:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(370px,1fr));grid-gap:1rem;font-family:sans-serif;}@media (max-width:720px){main.jsx-1492744835{font-size:14px;}}h2.jsx-1492744835{color:#555;margin-bottom:1rem;}table.jsx-1492744835{grid-column-end:span 1.5;}table.jsx-1492744835,form.jsx-1492744835{width:100%;margin:2rem auto;background:#dedede;padding:1rem;border:none;border-radius:5px;box-shadow:0 0 7px rgba(0,0,0,0.3);}thead.jsx-1492744835{background:#000;color:#fff;}tbody.jsx-1492744835{background:#efefef;color:#333;}th.jsx-1492744835,td.jsx-1492744835{border-radius:2px;padding:0.7rem 1rem;border:10px solid transparent;}form.jsx-1492744835{width:100%;margin:2rem auto;background:#dedede;padding:2rem;}input.jsx-1492744835{width:100%;padding:0.7rem 1rem;border:none;border-radius:5px;margin:0.5rem 0;}p.jsx-1492744835{color:green;text-transform:uppercase;font-size:1rem;margin:0.5rem;text-align:center;}button.jsx-1492744835{padding:0.7rem 1rem;background:black;border:none;color:white;}.delete.jsx-1492744835{float:right;color:#C01D3A;cursor:pointer;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2UvRGVza3RvcC9sZWFybmluZy9uZXh0anMtdGVzdC9wYWdlcy9jdXN0b20tc2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHVyxBQUcwQixBQVFNLEFBSU4sQUFJYyxBQUlkLEFBU0ssQUFJRyxBQUtELEFBTVAsQUFNQSxBQU9DLEFBT1EsQUFNUixXQXJFQyxBQVlNLEFBUUYsQUF3QkEsQUFNRyxDQU9LLEFBYVgsR0E5RGQsQ0FxQlcsRUFTUyxDQUxULENBK0JNLElBL0QyQyxDQWU5RCxDQXVEaUIsQ0F6Q2pCLENBVHFCLEFBd0JBLEVBaENyQixBQXFCQSxDQWlCYyxNQU9HLEFBT0gsQ0F6QmtCLEdBZ0NiLEVBcEJDLElBOUJMLEFBd0JBLEVBb0JELEdBUEUsTUFjaEIsRUFsRGMsQUF3QmQsQ0FNa0IsQUFjbEIsS0FQb0IsRUFuQnBCLElBakJvQixLQThCcEIsS0FwRGdCLEVBMkRoQixNQXBDd0MsTUF0QmYsdUJBQ3pCLE1Bc0JBIiwiZmlsZSI6Ii9ob21lL21pa2UvRGVza3RvcC9sZWFybmluZy9uZXh0anMtdGVzdC9wYWdlcy9jdXN0b20tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBDdXN0b21TZXJ2ZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIG1zZzogbnVsbCxcbiAgfSk7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuVVJMfS9hcGkvYXV0aGApO1xuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkgc2V0RGF0YSh1c2Vycyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRVc2VycygpO1xuXG4gICAgaWYgKHN0YXRlLm1zZykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKHsgbXNnOiAnJyB9KTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgfSwgW3N0YXRlLm1zZ10pO1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSBzdGF0ZTtcbiAgICBpZiAoIXN0YXRlLm5hbWUgfHwgIXN0YXRlLmVtYWlsKSByZXR1cm47XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuVVJMfS9hcGkvYXV0aGAsIHsgbmFtZSwgZW1haWwgfSk7XG4gICAgc2V0U3RhdGUoeyBtc2c6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSB9KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVkVXNlciA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtwcm9jZXNzLmVudi5VUkx9L2FwaS9hdXRoLyR7aWR9YCk7XG4gICAgZ2V0VXNlcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoRGF0YSgpO1xuICAgIHNldFN0YXRlKHsgbmFtZTogJycsIGVtYWlsOiAnJyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3VzdG9tIHNlcnZlcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJ0aGlzIGlzIGEgdHYgcm91dGVcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aDI+VXNlciBMaXN0PC9oMj5cbiAgICAgICAgICAgIHtzdGF0ZS5tc2cgJiYgPHA+e3N0YXRlLm1zZ308L3A+fVxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTogPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm8gaW5ncmVzYXIgZGF0b3MgdmFsaWRvcyBhaHJlISFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDogPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgZGF0YTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8dGFibGUgYm9yZGVyPVwiMVwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlVTRVJTPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+QDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgICAgICAgIGRhdGEubWFwKCh1c2VyKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXt1c2VyLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5lbWFpbH0gXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gZGVsZXRlZFVzZXIodXNlci5faWQpfT5YPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM3MHB4LCAxZnIpKTtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDFyZW07XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDEuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYmxlLFxuICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RlZGVkZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgICAgICAgICAgICAgLy8gYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDFyZW07XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDFyZW07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZWxldGUge1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjQzAxRDNBO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlcnZlcjtcbiJdfQ== */\n/*@ sourceURL=/home/mike/Desktop/learning/nextjs-test/pages/custom-server.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomServer);

/***/ })

})
//# sourceMappingURL=custom-server.js.3408baf928719364355f.hot-update.js.map