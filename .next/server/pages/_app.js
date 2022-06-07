module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./i18n.json":
/*!*******************!*\
  !*** ./i18n.json ***!
  \*******************/
/*! exports provided: locales, defaultLocale, pages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"locales\":[\"en\",\"th\",\"vi\"],\"defaultLocale\":\"en\",\"pages\":{\"*\":[\"common\"],\"/\":[\"home\"],\"/contact\":[\"contact\"],\"/browsing\":[\"contact\",\"browsing\"],\"/sale\":[\"products\"],\"/search\":[\"products\"],\"/category/[...slug]\":[\"products\"],\"/cart\":[\"cart\"],\"/checkout\":[\"cart\"],\"/thankyou\":[\"cart\"],\"/product/[slug]\":[\"product\"]}}");

/***/ }),

/***/ "./locales lazy recursive ^\\.\\/.*\\/.*$":
/*!****************************************************!*\
  !*** ./locales lazy ^\.\/.*\/.*$ namespace object ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en/browsing": [
		"./locales/en/browsing.json",
		0
	],
	"./en/browsing.json": [
		"./locales/en/browsing.json",
		0
	],
	"./en/cart": [
		"./locales/en/cart.json",
		1
	],
	"./en/cart.json": [
		"./locales/en/cart.json",
		1
	],
	"./en/common": [
		"./locales/en/common.json",
		2
	],
	"./en/common.json": [
		"./locales/en/common.json",
		2
	],
	"./en/contact": [
		"./locales/en/contact.json",
		3
	],
	"./en/contact.json": [
		"./locales/en/contact.json",
		3
	],
	"./en/home": [
		"./locales/en/home.json",
		4
	],
	"./en/home.json": [
		"./locales/en/home.json",
		4
	],
	"./en/product": [
		"./locales/en/product.json",
		5
	],
	"./en/product.json": [
		"./locales/en/product.json",
		5
	],
	"./en/products": [
		"./locales/en/products.json",
		6
	],
	"./en/products.json": [
		"./locales/en/products.json",
		6
	],
	"./th/browsing": [
		"./locales/th/browsing.json",
		7
	],
	"./th/browsing.json": [
		"./locales/th/browsing.json",
		7
	],
	"./th/cart": [
		"./locales/th/cart.json",
		8
	],
	"./th/cart.json": [
		"./locales/th/cart.json",
		8
	],
	"./th/common": [
		"./locales/th/common.json",
		9
	],
	"./th/common.json": [
		"./locales/th/common.json",
		9
	],
	"./th/contact": [
		"./locales/th/contact.json",
		10
	],
	"./th/contact.json": [
		"./locales/th/contact.json",
		10
	],
	"./th/home": [
		"./locales/th/home.json",
		11
	],
	"./th/home.json": [
		"./locales/th/home.json",
		11
	],
	"./th/product": [
		"./locales/th/product.json",
		12
	],
	"./th/product.json": [
		"./locales/th/product.json",
		12
	],
	"./th/products": [
		"./locales/th/products.json",
		13
	],
	"./th/products.json": [
		"./locales/th/products.json",
		13
	],
	"./vi/browsing": [
		"./locales/vi/browsing.json",
		14
	],
	"./vi/browsing.json": [
		"./locales/vi/browsing.json",
		14
	],
	"./vi/cart": [
		"./locales/vi/cart.json",
		15
	],
	"./vi/cart.json": [
		"./locales/vi/cart.json",
		15
	],
	"./vi/common": [
		"./locales/vi/common.json",
		16
	],
	"./vi/common.json": [
		"./locales/vi/common.json",
		16
	],
	"./vi/contact": [
		"./locales/vi/contact.json",
		17
	],
	"./vi/contact.json": [
		"./locales/vi/contact.json",
		17
	],
	"./vi/home": [
		"./locales/vi/home.json",
		18
	],
	"./vi/home.json": [
		"./locales/vi/home.json",
		18
	],
	"./vi/product": [
		"./locales/vi/product.json",
		19
	],
	"./vi/product.json": [
		"./locales/vi/product.json",
		19
	],
	"./vi/products": [
		"./locales/vi/products.json",
		20
	],
	"./vi/products.json": [
		"./locales/vi/products.json",
		20
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-block-ui/style.css":
/*!***********************************************!*\
  !*** ./node_modules/react-block-ui/style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ "./i18n.json");
var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @next-translate-root/i18n */ "./i18n.json", 1);
/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/appWithI18n */ "next-translate/appWithI18n");
/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_block_ui_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-block-ui/style.css */ "./node_modules/react-block-ui/style.css");
/* harmony import */ var react_block_ui_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_block_ui_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-cookie-consent */ "react-cookie-consent");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\Sohail\\Desktop\\office\\client-master\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 //nprogress module

 //styles of nprogress




 //Binding events. 

next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeComplete', () => {
  nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.done();
  window.scroll({
    top: 0
  });
});
next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.done());

function MyApp({
  Component,
  pageProps
}) {
  const store = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useStore"])();
  const {
    locale
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    0: seeMore,
    1: setSeeMore
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  axios__WEBPACK_IMPORTED_MODULE_10___default.a.interceptors.request.use(con => {
    let config = store.getState().config;

    if (!con.headers.lang && con.headers.lang) {
      if (locale === "en") {
        con.headers.lang = "";
      } else {
        con.headers.lang = locale;
      }
    }

    if (config.auth) if (config.auth.token) con.headers.Authorization = `${config.auth.token}`;
    return con;
  }, err => Promise.reject(err));
  axios__WEBPACK_IMPORTED_MODULE_10___default.a.interceptors.response.use(response => {
    return response;
  }, error => {
    return Promise.reject(error);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, minimum-scale=1, maximum-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "google-site-verification",
        content: "xvj66e2ya5woglN4ZKsFqBFeXewEgvx5jpYh0gB2r-M"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/js/jquery.min.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/js/bootstrap.min.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/js/owl.carousel.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/js/wow.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/js/scripts.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/js/Cookie.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        dangerouslySetInnerHTML: {
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NK4ZLVB');`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "/css/bootstrapv4.5.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "/css/owl.carousel.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "/css/animate.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "/css/Cookie.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "preload",
        rel: "stylesheet",
        href: "/css/minified.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("noscript", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
        src: "https://www.googletagmanager.com/ns.html?id=GTM-NK4ZLVB",
        height: "0",
        width: "0",
        style: {
          display: "none",
          visibility: "hidden"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_cookie_consent__WEBPACK_IMPORTED_MODULE_12___default.a // debug={true} 
    , {
      buttonText: "Accept All",
      declineButtonText: "Decline",
      declineButtonStyle: {
        backgroundColor: "#000",
        color: "#fff",
        fontSize: "13px",
        fontWeight: "500",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "0"
      },
      enableDeclineButton: true,
      style: {
        background: "#fff",
        color: "#696969",
        fontSize: "13px",
        border: "2px solid black"
      },
      buttonStyle: {
        backgroundColor: "#000",
        color: "#fff",
        fontSize: "13px",
        fontWeight: "500",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "0"
      },
      children: ["Gandhi Fabrics uses cookies and other technologies for the basic functionality of the website and application to improve the quality of our services and your experience. Cookies will apply to only the basic functionality of the website and the application. Other purposes of the cookies will not be used until consent is given or those cookies are enabled.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        style: {
          background: "transparent",
          border: 0,
          color: "blue",
          textDecoration: "underline"
        },
        onClick: () => setSeeMore(!seeMore),
        children: seeMore ? "See less" : "See more"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, this), seeMore ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        style: {
          color: "blue"
        },
        children: "https://www.gandhifabrics.com/privacy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

const __Page_Next_Translate__ = _redux_store__WEBPACK_IMPORTED_MODULE_5__["wrapper"].withRedux(MyApp);

/* harmony default export */ __webpack_exports__["default"] = (next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default()(__Page_Next_Translate__, _objectSpread(_objectSpread({}, _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__), {}, {
  isLoader: true,
  skipInitialProps: false,
  loadLocaleFrom: (l, n) => __webpack_require__("./locales lazy recursive ^\\.\\/.*\\/.*$")(`./${l}/${n}`).then(m => m.default)
})));

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let initState = {
  currency: {
    code: "THB",
    id: 4,
    status: 1,
    title: "THB",
    value: 1
  }
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      let nextState = _objectSpread({}, state);

      return nextState;

    case 'SET_CURRENCY':
      let nextStateup = _objectSpread(_objectSpread({}, state), {
        currency: action.payload
      });

      return nextStateup;

    case 'ADD_TO_CART':
      let cartAfterAdd = _objectSpread(_objectSpread({}, state), {
        cartId: action.payload
      });

      return cartAfterAdd;

    case 'SET_CART_ITEMS':
      let cartAfterRemove = _objectSpread(_objectSpread({}, state), {
        cartItems: action.payload
      });

      return cartAfterRemove;

    case 'USER_LOGIN':
      let afterLogin = _objectSpread(_objectSpread({}, state), {
        auth: action.payload
      });

      return afterLogin;

    case 'SET_ORDER':
      let afterOrder = _objectSpread(_objectSpread({}, state), {
        order: action.payload
      });

      return afterOrder;

    case 'CLEART_CART':
      let beforeClearCart = _objectSpread(_objectSpread({}, state), {
        cartItems: 0
      });

      delete beforeClearCart.cartId;
      return beforeClearCart;

    case 'SIGN_OUT':
      let afterLogout = _objectSpread({}, state);

      delete afterLogout.auth;
      return afterLogout;

    case 'SET_CART_DATA':
      let afterCartData = _objectSpread(_objectSpread({}, state), {
        cartData: action.payload
      });

      return afterCartData;

    case 'SET_WISH_LIST':
      let wishlistData = _objectSpread(_objectSpread({}, state), {
        wishlist: action.payload
      });

      return wishlistData;

    case 'SET_CSRF':
      let cs = _objectSpread(_objectSpread({}, state), {
        csrf: action.payload
      });

      return cs;

    default:
      return state;
  }
};

const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  config: reducer
}); // BINDING MIDDLEWARE

const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const makeStore = ({
  isServer
}) => {
  if (isServer) {
    //If it's on server side, create a store
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(combinedReducer, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a]));
  } else {
    //If it's on client side, create a store which will persist
    const {
      persistStore,
      persistReducer
    } = __webpack_require__(/*! redux-persist */ "redux-persist");

    const storage = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage").default;

    const persistConfig = {
      key: "gandhiStore",
      whitelist: ["config"],
      // only counter will be persisted, add other reducers if needed
      storage // if needed, use a safer storage

    };
    const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

    const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a])); // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store;
  }
}; // export an assembled wrapper


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(makeStore);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-translate/appWithI18n":
/*!*********************************************!*\
  !*** external "next-translate/appWithI18n" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-translate/appWithI18n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookie-consent":
/*!***************************************!*\
  !*** external "react-cookie-consent" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie-consent");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlcyBsYXp5IF5cXC5cXC8uKlxcLy4qJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL2FwcFdpdGhJMThuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvb2tpZS1jb25zZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSIsIndpbmRvdyIsInNjcm9sbCIsInRvcCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsImxvY2FsZSIsInVzZVJvdXRlciIsInNlZU1vcmUiLCJzZXRTZWVNb3JlIiwidXNlU3RhdGUiLCJheGlvcyIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb24iLCJjb25maWciLCJnZXRTdGF0ZSIsImhlYWRlcnMiLCJsYW5nIiwiYXV0aCIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsImVyciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImVycm9yIiwiX19odG1sIiwiZGlzcGxheSIsInZpc2liaWxpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwidGV4dERlY29yYXRpb24iLCJfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJfX2FwcFdpdGhJMThuIiwiX19pMThuQ29uZmlnIiwiaXNMb2FkZXIiLCJza2lwSW5pdGlhbFByb3BzIiwibG9hZExvY2FsZUZyb20iLCJsIiwibiIsInRoZW4iLCJtIiwiZGVmYXVsdCIsImluaXRTdGF0ZSIsImN1cnJlbmN5IiwiY29kZSIsImlkIiwic3RhdHVzIiwidGl0bGUiLCJ2YWx1ZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwibmV4dFN0YXRlIiwibmV4dFN0YXRldXAiLCJwYXlsb2FkIiwiY2FydEFmdGVyQWRkIiwiY2FydElkIiwiY2FydEFmdGVyUmVtb3ZlIiwiY2FydEl0ZW1zIiwiYWZ0ZXJMb2dpbiIsImFmdGVyT3JkZXIiLCJvcmRlciIsImJlZm9yZUNsZWFyQ2FydCIsImFmdGVyTG9nb3V0IiwiYWZ0ZXJDYXJ0RGF0YSIsImNhcnREYXRhIiwid2lzaGxpc3REYXRhIiwid2lzaGxpc3QiLCJjcyIsImNzcmYiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicmVxdWlyZSIsImFwcGx5TWlkZGxld2FyZSIsIm1ha2VTdG9yZSIsImlzU2VydmVyIiwiY3JlYXRlU3RvcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJwZXJzaXN0U3RvcmUiLCJwZXJzaXN0UmVkdWNlciIsInN0b3JhZ2UiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwid2hpdGVsaXN0IiwicGVyc2lzdGVkUmVkdWNlciIsIl9fcGVyc2lzdG9yIiwiY3JlYXRlV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQSxtQ0FBbUM7UUFDbkM7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGNBQWM7UUFDZCxJQUFJO1FBQ0o7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0FrQnNDOztBQUV6QyxXQUFPQSxLQUFQO0FBQ0g7QUFDSixDQTFCRCxDLENBNEJBOzs7QUFDTyxNQUFNd0MsT0FBTyxHQUFHNkQsd0VBQWEsQ0FBQ1osU0FBRCxDQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HUCxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvX2FwcFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2VuL2Jyb3dzaW5nXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9icm93c2luZy5qc29uXCIsXG5cdFx0MFxuXHRdLFxuXHRcIi4vZW4vYnJvd3NpbmcuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYnJvd3NpbmcuanNvblwiLFxuXHRcdDBcblx0XSxcblx0XCIuL2VuL2NhcnRcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2NhcnQuanNvblwiLFxuXHRcdDFcblx0XSxcblx0XCIuL2VuL2NhcnQuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vY2FydC5qc29uXCIsXG5cdFx0MVxuXHRdLFxuXHRcIi4vZW4vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdDJcblx0XSxcblx0XCIuL2VuL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdDJcblx0XSxcblx0XCIuL2VuL2NvbnRhY3RcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2NvbnRhY3QuanNvblwiLFxuXHRcdDNcblx0XSxcblx0XCIuL2VuL2NvbnRhY3QuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vY29udGFjdC5qc29uXCIsXG5cdFx0M1xuXHRdLFxuXHRcIi4vZW4vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0NFxuXHRdLFxuXHRcIi4vZW4vaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9ob21lLmpzb25cIixcblx0XHQ0XG5cdF0sXG5cdFwiLi9lbi9wcm9kdWN0XCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wcm9kdWN0Lmpzb25cIixcblx0XHQ1XG5cdF0sXG5cdFwiLi9lbi9wcm9kdWN0Lmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3Byb2R1Y3QuanNvblwiLFxuXHRcdDVcblx0XSxcblx0XCIuL2VuL3Byb2R1Y3RzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wcm9kdWN0cy5qc29uXCIsXG5cdFx0NlxuXHRdLFxuXHRcIi4vZW4vcHJvZHVjdHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJvZHVjdHMuanNvblwiLFxuXHRcdDZcblx0XSxcblx0XCIuL3RoL2Jyb3dzaW5nXCI6IFtcblx0XHRcIi4vbG9jYWxlcy90aC9icm93c2luZy5qc29uXCIsXG5cdFx0N1xuXHRdLFxuXHRcIi4vdGgvYnJvd3NpbmcuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvdGgvYnJvd3NpbmcuanNvblwiLFxuXHRcdDdcblx0XSxcblx0XCIuL3RoL2NhcnRcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3RoL2NhcnQuanNvblwiLFxuXHRcdDhcblx0XSxcblx0XCIuL3RoL2NhcnQuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvdGgvY2FydC5qc29uXCIsXG5cdFx0OFxuXHRdLFxuXHRcIi4vdGgvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy90aC9jb21tb24uanNvblwiLFxuXHRcdDlcblx0XSxcblx0XCIuL3RoL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy90aC9jb21tb24uanNvblwiLFxuXHRcdDlcblx0XSxcblx0XCIuL3RoL2NvbnRhY3RcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3RoL2NvbnRhY3QuanNvblwiLFxuXHRcdDEwXG5cdF0sXG5cdFwiLi90aC9jb250YWN0Lmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3RoL2NvbnRhY3QuanNvblwiLFxuXHRcdDEwXG5cdF0sXG5cdFwiLi90aC9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy90aC9ob21lLmpzb25cIixcblx0XHQxMVxuXHRdLFxuXHRcIi4vdGgvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy90aC9ob21lLmpzb25cIixcblx0XHQxMVxuXHRdLFxuXHRcIi4vdGgvcHJvZHVjdFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvdGgvcHJvZHVjdC5qc29uXCIsXG5cdFx0MTJcblx0XSxcblx0XCIuL3RoL3Byb2R1Y3QuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvdGgvcHJvZHVjdC5qc29uXCIsXG5cdFx0MTJcblx0XSxcblx0XCIuL3RoL3Byb2R1Y3RzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy90aC9wcm9kdWN0cy5qc29uXCIsXG5cdFx0MTNcblx0XSxcblx0XCIuL3RoL3Byb2R1Y3RzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3RoL3Byb2R1Y3RzLmpzb25cIixcblx0XHQxM1xuXHRdLFxuXHRcIi4vdmkvYnJvd3NpbmdcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3ZpL2Jyb3dzaW5nLmpzb25cIixcblx0XHQxNFxuXHRdLFxuXHRcIi4vdmkvYnJvd3NpbmcuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvdmkvYnJvd3NpbmcuanNvblwiLFxuXHRcdDE0XG5cdF0sXG5cdFwiLi92aS9jYXJ0XCI6IFtcblx0XHRcIi4vbG9jYWxlcy92aS9jYXJ0Lmpzb25cIixcblx0XHQxNVxuXHRdLFxuXHRcIi4vdmkvY2FydC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy92aS9jYXJ0Lmpzb25cIixcblx0XHQxNVxuXHRdLFxuXHRcIi4vdmkvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy92aS9jb21tb24uanNvblwiLFxuXHRcdDE2XG5cdF0sXG5cdFwiLi92aS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvdmkvY29tbW9uLmpzb25cIixcblx0XHQxNlxuXHRdLFxuXHRcIi4vdmkvY29udGFjdFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvdmkvY29udGFjdC5qc29uXCIsXG5cdFx0MTdcblx0XSxcblx0XCIuL3ZpL2NvbnRhY3QuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvdmkvY29udGFjdC5qc29uXCIsXG5cdFx0MTdcblx0XSxcblx0XCIuL3ZpL2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3ZpL2hvbWUuanNvblwiLFxuXHRcdDE4XG5cdF0sXG5cdFwiLi92aS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3ZpL2hvbWUuanNvblwiLFxuXHRcdDE4XG5cdF0sXG5cdFwiLi92aS9wcm9kdWN0XCI6IFtcblx0XHRcIi4vbG9jYWxlcy92aS9wcm9kdWN0Lmpzb25cIixcblx0XHQxOVxuXHRdLFxuXHRcIi4vdmkvcHJvZHVjdC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy92aS9wcm9kdWN0Lmpzb25cIixcblx0XHQxOVxuXHRdLFxuXHRcIi4vdmkvcHJvZHVjdHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3ZpL3Byb2R1Y3RzLmpzb25cIixcblx0XHQyMFxuXHRdLFxuXHRcIi4vdmkvcHJvZHVjdHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvdmkvcHJvZHVjdHMuanNvblwiLFxuXHRcdDIwXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDMpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL2xvY2FsZXMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuICAgIGltcG9ydCBfX2FwcFdpdGhJMThuIGZyb20gJ25leHQtdHJhbnNsYXRlL2FwcFdpdGhJMThuJ1xuICAgIFxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnOyAvL25wcm9ncmVzcyBtb2R1bGVcbmltcG9ydCAnbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnOyAvL3N0eWxlcyBvZiBucHJvZ3Jlc3NcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCAncmVhY3QtYmxvY2stdWkvc3R5bGUuY3NzJztcbmltcG9ydCBDb29raWVDb25zZW50LCB7IENvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llLWNvbnNlbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy9CaW5kaW5nIGV2ZW50cy4gXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHtcbiAgTlByb2dyZXNzLmRvbmUoKTtcbiAgd2luZG93LnNjcm9sbCh7XG4gICAgdG9wOiAwXG4gIH0pO1xufSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKCk7XG4gIGNvbnN0IHsgbG9jYWxlIH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbc2VlTW9yZSwgc2V0U2VlTW9yZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBheGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoKGNvbikgPT4ge1xuICAgIGxldCBjb25maWcgPSBzdG9yZS5nZXRTdGF0ZSgpLmNvbmZpZztcblxuICAgIGlmICghY29uLmhlYWRlcnMubGFuZyAmJiBjb24uaGVhZGVycy5sYW5nKSB7XG4gICAgICBpZiAobG9jYWxlID09PSBcImVuXCIpIHtcbiAgICAgICAgY29uLmhlYWRlcnMubGFuZyA9IFwiXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbi5oZWFkZXJzLmxhbmcgPSBsb2NhbGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5hdXRoKVxuICAgICAgaWYgKGNvbmZpZy5hdXRoLnRva2VuKVxuICAgICAgICBjb24uaGVhZGVycy5BdXRob3JpemF0aW9uID0gYCR7Y29uZmlnLmF1dGgudG9rZW59YDtcblxuICAgIHJldHVybiBjb247XG4gIH0sXG4gICAgKGVycikgPT4gUHJvbWlzZS5yZWplY3QoZXJyKVxuICApO1xuXG4gIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSxcbiAgICBlcnJvciA9PiB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgKTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgbWluaW11bS1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwieHZqNjZlMnlhNXdvZ2xONFpLc0ZxQkZlWGV3RWd2eDVqcFloMGdCMnItTVwiIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL2pxdWVyeS5taW4uanNcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9ib290c3RyYXAubWluLmpzXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvb3dsLmNhcm91c2VsLmpzXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvd293LmpzXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvc2NyaXB0cy5qc1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL0Nvb2tpZS5qc1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYChmdW5jdGlvbih3LGQscyxsLGkpe3dbbF09d1tsXXx8W107d1tsXS5wdXNoKHsnZ3RtLnN0YXJ0JzpcbiAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSxldmVudDonZ3RtLmpzJ30pO3ZhciBmPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0sXG4gICAgICAgICAgaj1kLmNyZWF0ZUVsZW1lbnQocyksZGw9bCE9J2RhdGFMYXllcic/JyZsPScrbDonJztqLmFzeW5jPXRydWU7ai5zcmM9XG4gICAgICAgICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0bS5qcz9pZD0nK2krZGw7Zi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqLGYpO1xuICAgICAgICAgIH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnZGF0YUxheWVyJywnR1RNLU5LNFpMVkInKTtgLFxuICAgICAgICB9fT5cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgIDxsaW5rIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9ib290c3RyYXB2NC41Lm1pbi5jc3NcIiAvPlxuICAgICAgICA8bGluayB0eXBlPVwidGV4dC9jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3Mvb3dsLmNhcm91c2VsLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4yLjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cbiAgICAgICAgPGxpbmsgdHlwZT1cInRleHQvY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2FuaW1hdGUubWluLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9Db29raWUuY3NzXCIgLz5cbiAgICAgICAgPGxpbmsgdHlwZT1cInRleHQvY3NzXCIgcmVsPVwicHJlbG9hZFwiIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9taW5pZmllZC5jc3NcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9sb2dvLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bm9zY3JpcHQ+XG4gICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vbnMuaHRtbD9pZD1HVE0tTks0WkxWQlwiXG4gICAgICAgICAgaGVpZ2h0PVwiMFwiIHdpZHRoPVwiMFwiIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiLCB2aXNpYmlsaXR5OiBcImhpZGRlblwiIH19PjwvaWZyYW1lPlxuICAgICAgPC9ub3NjcmlwdD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxDb29raWVDb25zZW50IFxuICAgICAgLy8gZGVidWc9e3RydWV9IFxuICAgICAgYnV0dG9uVGV4dD17XCJBY2NlcHQgQWxsXCJ9XG4gICAgICBkZWNsaW5lQnV0dG9uVGV4dD17XCJEZWNsaW5lXCJ9XG4gICAgICBkZWNsaW5lQnV0dG9uU3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjMDAwXCIsIGNvbG9yOlwiI2ZmZlwiLCBmb250U2l6ZTpcIjEzcHhcIiwgZm9udFdlaWdodDpcIjUwMFwiLCBwYWRkaW5nTGVmdDpcIjIwcHhcIiwgcGFkZGluZ1JpZ2h0OlwiMjBweFwiLCBwYWRkaW5nVG9wOlwiMTBweFwiLCBwYWRkaW5nQm90dG9tOlwiMTBweFwiLGJvcmRlclJhZGl1czpcIjBcIn19XG4gICAgICBlbmFibGVEZWNsaW5lQnV0dG9uPXt0cnVlfVxuICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiI2ZmZlwiLGNvbG9yOlwiIzY5Njk2OVwiLGZvbnRTaXplOlwiMTNweFwiLCBib3JkZXI6XCIycHggc29saWQgYmxhY2tcIn19IFxuICAgICAgYnV0dG9uU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOlwiIzAwMFwiLCBjb2xvcjpcIiNmZmZcIiwgZm9udFNpemU6XCIxM3B4XCIsIGZvbnRXZWlnaHQ6XCI1MDBcIiwgcGFkZGluZ0xlZnQ6XCIyMHB4XCIsIHBhZGRpbmdSaWdodDpcIjIwcHhcIiwgcGFkZGluZ1RvcDpcIjEwcHhcIiwgcGFkZGluZ0JvdHRvbTpcIjEwcHhcIixib3JkZXJSYWRpdXM6XCIwXCIgfX1cbiAgICAgID5cbiAgICAgIEdhbmRoaSBGYWJyaWNzIHVzZXMgY29va2llcyBhbmQgb3RoZXIgdGVjaG5vbG9naWVzIGZvciB0aGUgYmFzaWMgZnVuY3Rpb25hbGl0eSBvZiB0aGUgd2Vic2l0ZSBhbmQgYXBwbGljYXRpb24gdG8gaW1wcm92ZSB0aGUgcXVhbGl0eSBvZiBvdXIgc2VydmljZXMgYW5kIHlvdXIgZXhwZXJpZW5jZS4gQ29va2llcyB3aWxsIGFwcGx5IHRvIG9ubHkgdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHdlYnNpdGUgYW5kIHRoZSBhcHBsaWNhdGlvbi4gT3RoZXIgcHVycG9zZXMgb2YgdGhlIGNvb2tpZXMgd2lsbCBub3QgYmUgdXNlZCB1bnRpbCBjb25zZW50IGlzIGdpdmVuIG9yIHRob3NlIGNvb2tpZXMgYXJlIGVuYWJsZWQuXG4gICAgICA8YnV0dG9uIHN0eWxlPXt7YmFja2dyb3VuZDpcInRyYW5zcGFyZW50XCIsYm9yZGVyOjAsY29sb3I6XCJibHVlXCIsdGV4dERlY29yYXRpb246XCJ1bmRlcmxpbmVcIn19IG9uQ2xpY2s9eygpPT5zZXRTZWVNb3JlKCFzZWVNb3JlKX0+e3NlZU1vcmU/IFwiU2VlIGxlc3NcIjpcIlNlZSBtb3JlXCJ9PC9idXR0b24+XG4gICAgICB7c2VlTW9yZT8gPHNwYW4gc3R5bGU9e3tjb2xvcjpcImJsdWVcIn19Pmh0dHBzOi8vd3d3LmdhbmRoaWZhYnJpY3MuY29tL3ByaXZhY3k8L3NwYW4+Om51bGx9XG4gICAgICA8L0Nvb2tpZUNvbnNlbnQ+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCBfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyA9IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcblxuXG4gICAgZXhwb3J0IGRlZmF1bHQgX19hcHBXaXRoSTE4bihfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXywge1xuICAgICAgLi4uX19pMThuQ29uZmlnLFxuICAgICAgaXNMb2FkZXI6IHRydWUsXG4gICAgICBza2lwSW5pdGlhbFByb3BzOiBmYWxzZSxcbiAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuICAgIH0pO1xuICAiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyLCBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5cbmxldCBpbml0U3RhdGUgPSB7XG4gICAgY3VycmVuY3k6IHtcbiAgICAgICAgY29kZTogXCJUSEJcIixcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgdGl0bGU6IFwiVEhCXCIsXG4gICAgICAgIHZhbHVlOiAxXG4gICAgfVxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgICAgIGxldCBuZXh0U3RhdGUgPSB7IC4uLnN0YXRlIH1cbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGVcbiAgICAgICAgY2FzZSAnU0VUX0NVUlJFTkNZJzpcbiAgICAgICAgICAgIGxldCBuZXh0U3RhdGV1cCA9IHsgLi4uc3RhdGUsIC4uLnsgY3VycmVuY3k6IGFjdGlvbi5wYXlsb2FkIH0gfVxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZXVwXG4gICAgICAgIGNhc2UgJ0FERF9UT19DQVJUJzpcbiAgICAgICAgICAgIGxldCBjYXJ0QWZ0ZXJBZGQgPSB7IC4uLnN0YXRlLCAuLi57IGNhcnRJZDogYWN0aW9uLnBheWxvYWQgfSB9XG4gICAgICAgICAgICByZXR1cm4gY2FydEFmdGVyQWRkXG4gICAgICAgIGNhc2UgJ1NFVF9DQVJUX0lURU1TJzpcbiAgICAgICAgICAgIGxldCBjYXJ0QWZ0ZXJSZW1vdmUgPSB7IC4uLnN0YXRlLCAuLi57IGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQgfSB9XG4gICAgICAgICAgICByZXR1cm4gY2FydEFmdGVyUmVtb3ZlXG4gICAgICAgIGNhc2UgJ1VTRVJfTE9HSU4nOlxuICAgICAgICAgICAgbGV0IGFmdGVyTG9naW4gPSB7IC4uLnN0YXRlLCAuLi57IGF1dGg6IGFjdGlvbi5wYXlsb2FkIH0gfVxuICAgICAgICAgICAgcmV0dXJuIGFmdGVyTG9naW47XG4gICAgICAgIGNhc2UgJ1NFVF9PUkRFUic6XG4gICAgICAgICAgICBsZXQgYWZ0ZXJPcmRlciA9IHsgLi4uc3RhdGUsIC4uLnsgb3JkZXI6IGFjdGlvbi5wYXlsb2FkIH0gfTtcbiAgICAgICAgICAgIHJldHVybiBhZnRlck9yZGVyO1xuICAgICAgICBjYXNlICdDTEVBUlRfQ0FSVCc6XG4gICAgICAgICAgICBsZXQgYmVmb3JlQ2xlYXJDYXJ0ID0geyAuLi5zdGF0ZSwgLi4ueyBjYXJ0SXRlbXM6IDAgfSB9O1xuICAgICAgICAgICAgZGVsZXRlIGJlZm9yZUNsZWFyQ2FydC5jYXJ0SWQ7XG4gICAgICAgICAgICByZXR1cm4gYmVmb3JlQ2xlYXJDYXJ0O1xuICAgICAgICBjYXNlICdTSUdOX09VVCc6XG4gICAgICAgICAgICBsZXQgYWZ0ZXJMb2dvdXQgPSB7IC4uLnN0YXRlIH07XG4gICAgICAgICAgICBkZWxldGUgYWZ0ZXJMb2dvdXQuYXV0aDtcbiAgICAgICAgICAgIHJldHVybiBhZnRlckxvZ291dDtcbiAgICAgICAgY2FzZSAnU0VUX0NBUlRfREFUQSc6XG4gICAgICAgICAgICBsZXQgYWZ0ZXJDYXJ0RGF0YSA9IHsgLi4uc3RhdGUsIC4uLnsgY2FydERhdGE6IGFjdGlvbi5wYXlsb2FkIH0gfTtcbiAgICAgICAgICAgIHJldHVybiBhZnRlckNhcnREYXRhO1xuICAgICAgICBjYXNlICdTRVRfV0lTSF9MSVNUJzpcbiAgICAgICAgICAgIGxldCB3aXNobGlzdERhdGEgPSB7IC4uLnN0YXRlLCAuLi57IHdpc2hsaXN0OiBhY3Rpb24ucGF5bG9hZCB9IH07XG4gICAgICAgICAgICByZXR1cm4gd2lzaGxpc3REYXRhO1xuICAgICAgICBjYXNlICdTRVRfQ1NSRic6XG4gICAgICAgICAgICBsZXQgY3MgPSB7IC4uLnN0YXRlLCAuLi57IGNzcmY6IGFjdGlvbi5wYXlsb2FkIH0gfVxuICAgICAgICAgICAgcmV0dXJuIGNzO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY29uZmlnOiByZWR1Y2VyXG59KVxuXG5cbi8vIEJJTkRJTkcgTUlERExFV0FSRVxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSAobWlkZGxld2FyZSkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpO1xuICAgICAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpO1xuICAgIH1cbiAgICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpO1xufTtcblxuY29uc3QgbWFrZVN0b3JlID0gKHsgaXNTZXJ2ZXIgfSkgPT4ge1xuICAgIGlmIChpc1NlcnZlcikge1xuICAgICAgICAvL0lmIGl0J3Mgb24gc2VydmVyIHNpZGUsIGNyZWF0ZSBhIHN0b3JlXG4gICAgICAgIHJldHVybiBjcmVhdGVTdG9yZShjb21iaW5lZFJlZHVjZXIsIGJpbmRNaWRkbGV3YXJlKFt0aHVua01pZGRsZXdhcmVdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy9JZiBpdCdzIG9uIGNsaWVudCBzaWRlLCBjcmVhdGUgYSBzdG9yZSB3aGljaCB3aWxsIHBlcnNpc3RcbiAgICAgICAgY29uc3QgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpLmRlZmF1bHQ7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcbiAgICAgICAgICAgIGtleTogXCJnYW5kaGlTdG9yZVwiLFxuICAgICAgICAgICAgd2hpdGVsaXN0OiBbXCJjb25maWdcIl0sIC8vIG9ubHkgY291bnRlciB3aWxsIGJlIHBlcnNpc3RlZCwgYWRkIG90aGVyIHJlZHVjZXJzIGlmIG5lZWRlZFxuICAgICAgICAgICAgc3RvcmFnZSwgLy8gaWYgbmVlZGVkLCB1c2UgYSBzYWZlciBzdG9yYWdlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIGNvbWJpbmVkUmVkdWNlcik7IC8vIENyZWF0ZSBhIG5ldyByZWR1Y2VyIHdpdGggb3VyIGV4aXN0aW5nIHJlZHVjZXJcblxuICAgICAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgICAgICAgICAgcGVyc2lzdGVkUmVkdWNlcixcbiAgICAgICAgICAgIGJpbmRNaWRkbGV3YXJlKFt0aHVua01pZGRsZXdhcmVdKVxuICAgICAgICApOyAvLyBDcmVhdGluZyB0aGUgc3RvcmUgYWdhaW5cblxuICAgICAgICBzdG9yZS5fX3BlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7IC8vIFRoaXMgY3JlYXRlcyBhIHBlcnNpc3RvciBvYmplY3QgJiBwdXNoIHRoYXQgcGVyc2lzdGVkIG9iamVjdCB0byAuX19wZXJzaXN0b3IsIHNvIHRoYXQgd2UgY2FuIGF2YWlsIHRoZSBwZXJzaXN0YWJpbGl0eSBmZWF0dXJlXG5cbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH1cbn07XG5cbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL2FwcFdpdGhJMThuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llLWNvbnNlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==