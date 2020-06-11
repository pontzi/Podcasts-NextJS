module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ChannelGrid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelGrid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_slug__ = __webpack_require__("./helpers/slug.js");
var _jsxFileName = "C:\\Users\\carlo\\Desktop\\podcasts\\components\\ChannelGrid.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ChannelGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChannelGrid, _React$Component);

  function ChannelGrid() {
    _classCallCheck(this, ChannelGrid);

    return _possibleConstructorReturn(this, (ChannelGrid.__proto__ || Object.getPrototypeOf(ChannelGrid)).apply(this, arguments));
  }

  _createClass(ChannelGrid, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        className: "jsx-2651314924" + " " + "channels"
      }, channels.map(function (channel) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
          route: "channel",
          params: {
            slug: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_slug__["a" /* default */])(channel.title),
            id: channel.id
          },
          prefetch: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          key: channel.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          className: "jsx-2651314924" + " " + "channel"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: channel.urls.logo_image.original,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          className: "jsx-2651314924"
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          className: "jsx-2651314924"
        }, channel.title)));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2651314924",
        css: ".channels.jsx-2651314924{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}a.channel.jsx-2651314924{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-2651314924 img.jsx-2651314924{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h2.jsx-2651314924{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENoYW5uZWxHcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCb0IsQUFJd0IsQUFNQyxBQU1JLEFBS04sWUFDSSxDQWpCRixDQU1NLElBTW9CLFNBWDNCLENBaUJHLE1BWEwsTUFMaUQsSUFpQm5ELENBWFksUUFZSCxLQVBQLFdBQ2IsRUFPQSx3QkFaQSxHQU5BIiwiZmlsZSI6ImNvbXBvbmVudHNcXENoYW5uZWxHcmlkLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcY2FybG9cXERlc2t0b3BcXHBvZGNhc3RzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcydcclxuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy9zbHVnJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFubmVsR3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbHNcIj5cclxuICAgICAgICB7IGNoYW5uZWxzLm1hcCgoY2hhbm5lbCkgPT4gKFxyXG4gICAgICAgICAgPExpbmsgcm91dGU9J2NoYW5uZWwnIHBhcmFtcz17e1xyXG4gICAgICAgICAgICBzbHVnOiBzbHVnKGNoYW5uZWwudGl0bGUpLFxyXG4gICAgICAgICAgICBpZDogY2hhbm5lbC5pZFxyXG4gICAgICAgICAgfX0gcHJlZmV0Y2g+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNoYW5uZWxcIiBrZXk9eyBjaGFubmVsLmlkIH0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9eyBjaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCB9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICA8aDI+eyBjaGFubmVsLnRpdGxlIH08L2gyPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSkgfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBcclxuICAgICAgICAuY2hhbm5lbHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYS5jaGFubmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoYW5uZWwgaW1nIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=components\\ChannelGrid.js */"
      }));
    }
  }]);

  return ChannelGrid;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
var _jsxFileName = "C:\\Users\\carlo\\Desktop\\podcasts\\components\\Layout.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeStart = function (url) {
  __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeComplete = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

__WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeError = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-302219873"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-302219873"
      }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-302219873"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-302219873"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-302219873"
      }, "Podcasts"))), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "692669389",
        css: "header.jsx-302219873{color:#fff;background:#8756ca;padding:15px;text-align:center;}header.jsx-302219873 a.jsx-302219873{color:#fff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBR3NCLEFBTUEsV0FMUSxBQU1FLG1CQUxSLGFBQ0ssa0JBQ3BCLEFBSUEiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcY2FybG9cXERlc2t0b3BcXHBvZGNhc3RzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiB7XHJcbiAgTlByb2dyZXNzLnN0YXJ0KClcclxufVxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8aGVhZGVyPjxMaW5rIGhyZWY9XCIvXCI+PGE+UG9kY2FzdHM8L2E+PC9MaW5rPjwvaGVhZGVyPlxyXG5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlYWRlciBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIE1ha2UgY2xpY2tzIHBhc3MtdGhyb3VnaCAqL1xyXG4gICAgICAgICNucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbnByb2dyZXNzIC5iYXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI5ZDtcclxuXHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDMxO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogRmFuY3kgYmx1ciBlZmZlY3QgKi9cclxuICAgICAgICAjbnByb2dyZXNzIC5wZWcge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzI5ZCwgMCAwIDVweCAjMjlkO1xyXG4gICAgICAgICAgb3BhY2l0eTogMS4wO1xyXG5cclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIFJlbW92ZSB0aGVzZSB0byBnZXQgcmlkIG9mIHRoZSBzcGlubmVyICovXHJcbiAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMzE7XHJcbiAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNucHJvZ3Jlc3MgLnNwaW5uZXItaWNvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMjlkO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMyOWQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQge1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5zcGlubmVyLFxyXG4gICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5iYXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcclxuICAgICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=components\\Layout.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3670687205",
        css: "body{margin:0;font-family:system-ui;background:white;}#nprogress{pointer-events:none;}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3lCLEFBR29CLEFBT1csQUFJSixBQWFGLEFBZUEsQUFRSCxBQWNLLEFBTUUsQUFJbUIsQUFDRSxBQUdWLEFBQ0UsU0EzRVQsRUErQ1YsR0F2Qk0sQUFlSCxFQTNCQSxBQWlERyxFQU1wQixFQTVEQSxHQXlDd0IsTUFSVCxFQXZDSSxBQVlKLEFBeUR5QixDQTdDNUIsQ0E4QzhCLENBVDFDLFFBcENjLEFBZUgsRUEzQkgsQ0FvQ3VCLEdBaEQvQixFQWFTLENBMkJJLEdBZkMsR0FWRCxLQTBCYixJQWZ5QyxFQVY1QixNQWlDVyxLQWhDeEIsRUF1RGdDLE1BQ0UsU0F2QlQsUUF2QlgsWUFFd0MsR0FzQmxDLGtCQUV3Qyw4QkF2Qk4sNEJBd0JNLG1CQXZCTix5RkF3QnRELG9EQXZCQSIsImZpbGUiOiJjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxjYXJsb1xcRGVza3RvcFxccG9kY2FzdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICh1cmwpID0+IHtcclxuICBOUHJvZ3Jlc3Muc3RhcnQoKVxyXG59XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxoZWFkZXI+PExpbmsgaHJlZj1cIi9cIj48YT5Qb2RjYXN0czwvYT48L0xpbms+PC9oZWFkZXI+XHJcblxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVhZGVyIGEge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogTWFrZSBjbGlja3MgcGFzcy10aHJvdWdoICovXHJcbiAgICAgICAgI25wcm9ncmVzcyB7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNucHJvZ3Jlc3MgLmJhciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjlkO1xyXG5cclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMzE7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xyXG4gICAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjlkLCAwIDAgNXB4ICMyOWQ7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxLjA7XHJcblxyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogUmVtb3ZlIHRoZXNlIHRvIGdldCByaWQgb2YgdGhlIHNwaW5uZXIgKi9cclxuICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgei1pbmRleDogMTAzMTtcclxuICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcclxuICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMyOWQ7XHJcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzI5ZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLnNwaW5uZXIsXHJcbiAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgICAgICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=components\\Layout.js */"
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./helpers/slug.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = slug;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slugify__ = __webpack_require__("slugify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_slugify__);

function slug(name) {
  return __WEBPACK_IMPORTED_MODULE_0_slugify___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, ''); //todo lo que pongamos lo hará a minusculas y pondrá un guion a los espacios y lo que no sea palabra
}

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ChannelGrid__ = __webpack_require__("./components/ChannelGrid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_error__ = __webpack_require__("next/error");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_error__);

var _jsxFileName = "C:\\Users\\carlo\\Desktop\\podcasts\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          channels = _props.channels,
          statusCode = _props.statusCode;

      if (statusCode !== 200) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_error___default.a, {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        title: "Podcasts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ChannelGrid__["a" /* default */], {
        channels: channels,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var res, req, _ref2, channels;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = _ref.res;
                _context.prev = 1;
                _context.next = 4;
                return fetch('https://api.audioboom.com/channels/recommended');

              case 4:
                req = _context.sent;
                _context.next = 7;
                return req.json();

              case 7:
                _ref2 = _context.sent;
                channels = _ref2.body;
                return _context.abrupt("return", {
                  channels: channels,
                  statusCode: 200
                });

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                res.statusCode = 503;
                return _context.abrupt("return", {
                  channels: null,
                  statusCode: 503
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 12]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes"); // .add(nombre, url, archivo.js)      


module.exports = routes().add('index').add('channel', '/:slug.:id', 'channel').add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast');

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/error":
/***/ (function(module, exports) {

module.exports = require("next/error");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "slugify":
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map