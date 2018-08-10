/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/front/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/front/Root.js":
/*!***************************!*\
  !*** ./src/front/Root.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store/configureStore */ "./src/front/redux/store/configureStore.js");
/* harmony import */ var _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/scrollToTop/ScrollToTop */ "./src/front/components/scrollToTop/ScrollToTop.js");
/* harmony import */ var _hoc_withMainLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hoc/withMainLayout */ "./src/front/hoc/withMainLayout/index.js");
/* harmony import */ var _routes_MainRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/MainRoutes */ "./src/front/routes/MainRoutes.js");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/routes */ "./src/front/routes/routes.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports











// #endregion

// #region flow types

// #endregion

// #region constants
var MainApp = recompose_compose__WEBPACK_IMPORTED_MODULE_4___default()(Object(_hoc_withMainLayout__WEBPACK_IMPORTED_MODULE_7__["default"])())(_routes_MainRoutes__WEBPACK_IMPORTED_MODULE_8__["default"]);
var store = _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_5___default()();
// #endregion

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"],
        { store: store },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_router_redux__WEBPACK_IMPORTED_MODULE_1__["ConnectedRouter"],
          { history: _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["history"] },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_6__["default"],
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"],
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainApp, null),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '*', component: _routes_routes__WEBPACK_IMPORTED_MODULE_9__["PageNotFound"] })
            )
          )
        )
      );
    }
  }]);

  return Root;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Root.propTypes = {};


/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./src/front/components/backToTop/BackToTop.js":
/*!*****************************************************!*\
  !*** ./src/front/components/backToTop/BackToTop.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backToTopButton_BackToTopButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backToTopButton/BackToTopButton */ "./src/front/components/backToTop/backToTopButton/BackToTopButton.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-undefined */

// #region imports



// #endregion

// #region flow types

// #endregion

var BackToTop = function (_Component) {
  _inherits(BackToTop, _Component);

  function BackToTop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BackToTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BackToTop.__proto__ || Object.getPrototypeOf(BackToTop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      windowScrollY: 0,
      showBackButton: false,
      tickingScollObserve: false
    }, _this.handleWindowScroll = function () {
      if (window) {
        var _this$state = _this.state,
            _windowScrollY = _this$state.windowScrollY,
            _tickingScollObserve = _this$state.tickingScollObserve;
        var _minScrollY = _this.props.minScrollY;

        /* eslint-disable no-undefined */

        var currentWindowScrollY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        /* eslint-enable no-undefined */

        // scroll event fires to often, using window.requestAnimationFrame to limit computations
        if (!_tickingScollObserve) {
          window.requestAnimationFrame(function () {
            if (_windowScrollY !== currentWindowScrollY) {
              var shouldShowBackButton = currentWindowScrollY >= _minScrollY ? true : false;

              _this.setState({
                windowScrollY: currentWindowScrollY,
                showBackButton: shouldShowBackButton
              });
            }
            _this.setState({ tickingScollObserve: false });
          });
        }

        _this.setState({ tickingScollObserve: true });
      }
    }, _this.handlesOnBackButtonClick = function (event) {
      if (event) {
        event.preventDefault();
      }
      var minScrollY = _this.props.minScrollY;
      var windowScrollY = _this.state.windowScrollY;


      if (window && windowScrollY && windowScrollY > minScrollY) {
        // using here smoothscroll-polyfill
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        // smoothScroll.scrollTo(scrollTo, this.scrollDone);
      }
    }, _this.scrollDone = function () {
      var onScrollDone = _this.props.onScrollDone;

      if (onScrollDone) {
        onScrollDone();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BackToTop, [{
    key: 'componentWillMount',


    // #region lifecycle methods
    value: function componentWillMount() {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', this.handleWindowScroll);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', this.handleWindowScroll);
      }
    }
  }, {
    key: 'render',

    // #endregion
    value: function render() {
      var _this2 = this;

      var showBackButton = this.state.showBackButton;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"],
        { style: { x: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(showBackButton ? 0 : 120, react_motion__WEBPACK_IMPORTED_MODULE_2__["presets"].stiff) } },
        function (_ref2) {
          var x = _ref2.x;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_backToTopButton_BackToTopButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
            position: 'bottom-right',
            onClick: _this2.handlesOnBackButtonClick,
            motionStyle: {
              WebkitTransform: 'translate3d(' + x + 'px, 0, 0)',
              transform: 'translate3d(' + x + 'px, 0, 0)'
            }
          });
        }
      );
    }
    // #endregion

    // #region on windows scroll callback

    // #endregion

    // #region on button click (smooth scroll)

  }]);

  return BackToTop;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BackToTop.defaultProps = {
  minScrollY: 120,
  onScrollDone: function onScrollDone() {}
};


/* harmony default export */ __webpack_exports__["default"] = (BackToTop);

/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/BackToTopButton.js":
/*!***************************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/BackToTopButton.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UpIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpIcon */ "./src/front/components/backToTop/backToTopButton/UpIcon.js");
/* harmony import */ var _styled_WithRightMargin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled/WithRightMargin */ "./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// #region imports




// #endregion

// #region flow types

// #endregion

// #region constants
var defaultBackGroundColor = '#4A4A4A';
var sideOffset = '-10px';
var bottomOffset = '40px';
var defaultWidth = '100px';
var defaultZindex = 10;
var defaultOpacity = 0.5;
var defaultStyle = {
  position: 'fixed',
  right: sideOffset,
  left: '',
  bottom: bottomOffset,
  width: defaultWidth,
  zIndex: defaultZindex,
  opacity: defaultOpacity,
  backgroundColor: defaultBackGroundColor
};
// #endregion

var BackToTopButton = function BackToTopButton(_ref) {
  var onClick = _ref.onClick,
      position = _ref.position,
      children = _ref.children,
      motionStyle = _ref.motionStyle;

  var buttonStyle = setPosition(position, _extends({}, motionStyle, defaultStyle));

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'button',
    {
      style: buttonStyle,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        btn: true
      }),
      onClick: onClick
    },
    !children && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _styled_WithRightMargin__WEBPACK_IMPORTED_MODULE_3__["default"],
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpIcon__WEBPACK_IMPORTED_MODULE_2__["default"], { color: '#F1F1F1' })
    ),
    !!children && children
  );
};

// #region statics
BackToTopButton.defaultProps = {
  position: 'bottom-right'
};

BackToTopButton.displayName = 'BackToTopButton';
// #endregion

// #region helpers
function setPosition() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bottom-right';
  var refStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultStyle;

  var style = _extends({}, refStyle);

  switch (position) {
    case 'bottom-right':
      style.right = sideOffset;
      style.left = '';
      return style;

    case 'bottom-left':
      style.right = '';
      style.left = sideOffset;
      return style;

    default:
      return refStyle;
  }
}
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (BackToTopButton);

/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/UpIcon.js":
/*!******************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/UpIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// #region imports

// #endregion

// #region flow types

// #endregion

var UpIcon = function UpIcon(_ref) {
  var color = _ref.color;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "svg",
    { width: "24px", height: "24px", viewBox: "0 0 512 512", fill: "" + color },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1 c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z"
    })
  );
};

// #region statics
UpIcon.defaultProps = {
  color: '#F1F1F1'
};

UpIcon.displayName = 'UpIcon';
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (UpIcon);

/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.js":
/*!**********************************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject = _taggedTemplateLiteral(['\n  margin-right: 10px;\n'], ['\n  margin-right: 10px;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports

// #endregion

var WithRightMargin = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject);

/* harmony default export */ __webpack_exports__["default"] = (WithRightMargin);

/***/ }),

/***/ "./src/front/components/logoutRoute/LogoutRoute.js":
/*!*********************************************************!*\
  !*** ./src/front/components/logoutRoute/LogoutRoute.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _this = undefined;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports




// #endregion

var handleLogin = function handleLogin() {
  _services_auth__WEBPACK_IMPORTED_MODULE_2__["login"]();
  _this.props.loginRequest();
};

var handleLogout = function handleLogout() {
  _this.props.logoutSuccess();
  _services_auth__WEBPACK_IMPORTED_MODULE_2__["logout"](); // careful, this is a static method
  _this.props.history.push({ pathname: '/' });
};

// #region flow types

// #endregion

var LogoutRoute = function (_PureComponent) {
  _inherits(LogoutRoute, _PureComponent);

  function LogoutRoute() {
    _classCallCheck(this, LogoutRoute);

    return _possibleConstructorReturn(this, (LogoutRoute.__proto__ || Object.getPrototypeOf(LogoutRoute)).apply(this, arguments));
  }

  _createClass(LogoutRoute, [{
    key: 'componentDidMount',

    // #region lifecycle
    value: function componentDidMount() {
      // auth.clearAllAppStorage();
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: { pathname: '/login' } })
      );
    }
    // #endregion

  }]);

  return LogoutRoute;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(LogoutRoute));

/***/ }),

/***/ "./src/front/components/navigation/NavigationBar.js":
/*!**********************************************************!*\
  !*** ./src/front/components/navigation/NavigationBar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");
/* harmony import */ var _humburger_Humburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./humburger/Humburger */ "./src/front/components/navigation/humburger/Humburger.js");
/* harmony import */ var _leftNav_LeftNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leftNav/LeftNav */ "./src/front/components/navigation/leftNav/LeftNav.js");
/* harmony import */ var _rightNav_RightNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rightNav/RightNav */ "./src/front/components/navigation/rightNav/RightNav.js");
/* harmony import */ var _services_auth_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth/type */ "./src/front/services/auth/type.js");
/* harmony import */ var _services_auth_type__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_services_auth_type__WEBPACK_IMPORTED_MODULE_5__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports







// #endregion

// #region flow types

// #endregion

var NavigationBar = function (_PureComponent) {
  _inherits(NavigationBar, _PureComponent);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));
  }

  _createClass(NavigationBar, [{
    key: 'render',


    // #region life cycle
    value: function render() {
      var _props = this.props,
          authService = _props.authService,
          brand = _props.brand,
          navModel = _props.navModel,
          handleLeftNavItemClick = _props.handleLeftNavItemClick,
          handleRightNavItemClick = _props.handleRightNavItemClick;


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'nav',
        { className: 'navbar navbar-default' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: 'containersCustom' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'navbar-header' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_humburger_Humburger__WEBPACK_IMPORTED_MODULE_2__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              { className: 'navbar-brand' },
              brand
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'collapse navbar-collapse',
              id: 'bs-example-navbar-collapse-1'
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'ul',
              { className: 'nav navbar-nav' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_leftNav_LeftNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
                leftLinks: navModel.leftLinks,
                onLeftNavButtonClick: handleLeftNavItemClick
              })
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rightNav_RightNav__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
              rightLinks: navModel.rightLinks,
              onRightNavButtonClick: handleRightNavItemClick,
              AuthService: authService
            }, this.props))
          )
        )
      );
    }
    // #endregion

  }]);

  return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

NavigationBar.defaultProps = { brand: 'brand', authService: _services_auth__WEBPACK_IMPORTED_MODULE_1__ };


/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ }),

/***/ "./src/front/components/navigation/humburger/Humburger.js":
/*!****************************************************************!*\
  !*** ./src/front/components/navigation/humburger/Humburger.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// #region imports

// #endregion

var Humburger = function Humburger() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "button",
    {
      className: "navbar-toggle collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#bs-example-navbar-collapse-1"
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "span",
      { className: "sr-only" },
      "Toggle navigation"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "icon-bar" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "icon-bar" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "icon-bar" })
  );
};

// #region statics
Humburger.displayName = 'Humburger';
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (Humburger);

/***/ }),

/***/ "./src/front/components/navigation/leftNav/LeftNav.js":
/*!************************************************************!*\
  !*** ./src/front/components/navigation/leftNav/LeftNav.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _leftNavButton_LeftNavButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leftNavButton/LeftNavButton */ "./src/front/components/navigation/leftNav/leftNavButton/LeftNavButton.js");


// #region imports


// #endregion

// #region flow types

// #endregion

var LeftNav = function LeftNav(_ref) {
  var leftLinks = _ref.leftLinks,
      onLeftNavButtonClick = _ref.onLeftNavButtonClick;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'ul',
    { className: 'nav navbar-nav' },
    leftLinks.map(function (_ref2, index) {
      var link = _ref2.link,
          label = _ref2.label,
          viewName = _ref2.viewName;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_leftNavButton_LeftNavButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: index,
        link: link,
        label: label,
        viewName: viewName,
        onClick: onLeftNavButtonClick
      });
    })
  );
};

// #region statics
LeftNav.defaultProps = { leftLinks: [] };
LeftNav.displayName = 'LeftNav';
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (LeftNav);

/***/ }),

/***/ "./src/front/components/navigation/leftNav/leftNavButton/LeftNavButton.js":
/*!********************************************************************************!*\
  !*** ./src/front/components/navigation/leftNav/leftNavButton/LeftNavButton.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports


// #endregion

// #region flow types

// #endregion

var LeftNavButton = function (_PureComponent) {
  _inherits(LeftNavButton, _PureComponent);

  function LeftNavButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LeftNavButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LeftNavButton.__proto__ || Object.getPrototypeOf(LeftNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleLeftNavItemClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          viewName = _this$props.viewName;

      onClick(event, viewName);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LeftNavButton, [{
    key: 'render',

    // #region lifecycle
    value: function render() {
      var _props = this.props,
          link = _props.link,
          label = _props.label;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'li',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
          { to: link, onClick: this.handleLeftNavItemClick },
          label
        )
      );
    }
    // #endregion

  }]);

  return LeftNavButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (LeftNavButton);

/***/ }),

/***/ "./src/front/components/navigation/rightNav/RightNav.js":
/*!**************************************************************!*\
  !*** ./src/front/components/navigation/rightNav/RightNav.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rightNavButton_RightNavButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rightNavButton/RightNavButton */ "./src/front/components/navigation/rightNav/rightNavButton/RightNavButton.js");
/* harmony import */ var _redux_modules_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/modules/auth */ "./src/front/redux/modules/auth/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// import * as AuthService from '../../../services/auth';

// #region imports




// #endregion

// #region flow types

// #endregion

var RightNav = function (_React$Component) {
  _inherits(RightNav, _React$Component);

  function RightNav(props) {
    _classCallCheck(this, RightNav);

    var _this = _possibleConstructorReturn(this, (RightNav.__proto__ || Object.getPrototypeOf(RightNav)).call(this, props));

    _this.handleLogin = function () {
      _this.AuthService.login();
      _this.props.loginRequest();
    };

    _this.handleLogout = function () {
      _this.props.logoutSuccess();
      _this.AuthService.logout(); // careful, this is a static method
    };

    var AuthService = _this.props.AuthService;

    _this.AuthService = AuthService;
    return _this;
  }

  _createClass(RightNav, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          rightLinks = _props.rightLinks,
          AuthService = _props.AuthService,
          onRightNavButtonClick = _props.onRightNavButtonClick;

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        'ul',
        { className: 'nav navbar-nav navbar-right' },
        rightLinks.filter(function (obj) {
          // console.log('AuthService:', AuthService.isAuthenticated);
          // console.log('obj:', obj);

          return true;
        }).map(function (_ref, index) {
          var link = _ref.link,
              label = _ref.label,
              viewName = _ref.viewName,
              props = _objectWithoutProperties(_ref, ['link', 'label', 'viewName']);

          // (viewName === this.props)
          var testLabel = label + ' - ' + index;
          var navItem = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_rightNavButton_RightNavButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: index,
            link: link,
            label: testLabel,
            viewName: viewName,
            onClick: onRightNavButtonClick
          });
          if (label === 'login') {
            navItem = !AuthService.isTokenExpired() ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'li',
              { key: index },
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                'button',
                { onClick: _this2.handleLogout },
                'Logout'
              )
            ) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'li',
              { key: index },
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                'button',
                { onClick: _this2.handleLogin },
                'Login'
              )
            );
            /* if (auth.error) {
            <p>{JSON.stringify(AuthService.error)}</p>;
            }*/
          }
          return navItem;
        })
      );
    }
  }]);

  return RightNav;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

// #region statics


RightNav.propTypes = {
  AuthService: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  onRightNavButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  loginRequest: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  logoutSuccess: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
RightNav.defaultProps = { rightLinks: [] };
RightNav.displayName = 'RightNav';
// #endregion

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    auth: auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loginRequest: function loginRequest() {
      return dispatch(_redux_modules_auth__WEBPACK_IMPORTED_MODULE_5__["authActions"].loginRequest());
    },
    logoutSuccess: function logoutSuccess() {
      return dispatch(_redux_modules_auth__WEBPACK_IMPORTED_MODULE_5__["authActions"].logoutSuccess());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(RightNav)));

// export default RightNav;

/***/ }),

/***/ "./src/front/components/navigation/rightNav/rightNavButton/RightNavButton.js":
/*!***********************************************************************************!*\
  !*** ./src/front/components/navigation/rightNav/rightNavButton/RightNavButton.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports


// #endregion

// #region flow types

// #endregion

var RightNavButton = function (_PureComponent) {
  _inherits(RightNavButton, _PureComponent);

  function RightNavButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RightNavButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RightNavButton.__proto__ || Object.getPrototypeOf(RightNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleRightNavItemClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          viewName = _this$props.viewName;

      onClick(event, viewName);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RightNavButton, [{
    key: 'render',

    // #region lifecycle
    value: function render() {
      var _props = this.props,
          link = _props.link,
          label = _props.label;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'li',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
          { to: link, onClick: this.handleRightNavItemClick },
          label
        )
      );
    }
    // #endregion

  }]);

  return RightNavButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (RightNavButton);

/***/ }),

/***/ "./src/front/components/privateRoute/PrivateRoute.js":
/*!***********************************************************!*\
  !*** ./src/front/components/privateRoute/PrivateRoute.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports




// #endregion

// #region flow types

// #endregion

var PrivateRoute = function (_Component) {
  _inherits(PrivateRoute, _Component);

  function PrivateRoute() {
    _classCallCheck(this, PrivateRoute);

    return _possibleConstructorReturn(this, (PrivateRoute.__proto__ || Object.getPrototypeOf(PrivateRoute)).apply(this, arguments));
  }

  _createClass(PrivateRoute, [{
    key: 'render',

    // #region lifecycle
    value: function render() {
      var _props = this.props,
          InnerComponent = _props.component,
          rest = _objectWithoutProperties(_props, ['component']);

      var location = this.props.location;


      var isUserAuthenticated = this.isAuthenticated();
      var isTokenExpired = false; // this.isExpired();

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {
        render: function render(props) {
          return !isTokenExpired && isUserAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerComponent, props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: { pathname: '/login', state: { from: location } } });
        }
      }));
    }
    // #endregion

  }, {
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      // const checkUserHasId = user => user && user.id;
      // const user = auth.getUserInfo() ? auth.getUserInfo() : null;
      // return auth.isAuthenticated();
      return true;
    }
  }, {
    key: 'isExpired',
    value: function isExpired() {
      return _services_auth__WEBPACK_IMPORTED_MODULE_2__["isExpiredToken"](_services_auth__WEBPACK_IMPORTED_MODULE_2__["getToken"]());
    }
  }]);

  return PrivateRoute;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(PrivateRoute));

/***/ }),

/***/ "./src/front/components/scrollToTop/ScrollToTop.js":
/*!*********************************************************!*\
  !*** ./src/front/components/scrollToTop/ScrollToTop.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports



// #endregion

// #region flow types

// #endregion

var ScrollToTop = function (_Component) {
  _inherits(ScrollToTop, _Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, (ScrollToTop.__proto__ || Object.getPrototypeOf(ScrollToTop)).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: 'componentDidUpdate',

    // #region lifecycle
    value: function componentDidUpdate(prevProps) {
      if (window) {
        var prevLocation = prevProps.location;
        var nextLocation = this.props.location;


        if (prevLocation !== nextLocation) {
          window.scrollTo(0, 0);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children;
    }
    // #endregion

  }]);

  return ScrollToTop;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ScrollToTop));

/***/ }),

/***/ "./src/front/config/appConfig.js":
/*!***************************************!*\
  !*** ./src/front/config/appConfig.js ***!
  \***************************************/
/*! exports provided: appConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
var appConfig = {
    DEV_MODE: true, // block fetch

    // api endpoints:
    api: {
        fakeEndPoint: 'api/somewhere',
        users: 'api/someusersapi'
    },

    // sw path
    sw: {
        path: 'assets/sw.js'
    }
};

/* harmony default export */ __webpack_exports__["default"] = (appConfig);

/***/ }),

/***/ "./src/front/config/navigation.js":
/*!****************************************!*\
  !*** ./src/front/config/navigation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// #endregion

// #flow types
var navigation = {
  brand: 'React Redux Bootstrap Starter',
  leftLinks: [],
  rightLinks: [{
    label: 'Home',
    link: '/'
  }, {
    label: 'Catalog',
    link: '/catalog',
    // view: 'protected',
    isRouteBtn: true
  }, {
    label: 'Protected',
    link: '/protected',
    view: 'protected',
    isRouteBtn: true
  }, {
    label: 'About',
    link: '/about',
    view: 'about',
    isRouteBtn: true
  }, {
    label: 'Widgets',
    link: '/widgets',
    // view: 'Widgets',
    isRouteBtn: true
  }, {
    label: 'login',
    link: '/login',
    // view: 'login',
    isRouteBtn: true
  }]
};

/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ }),

/***/ "./src/front/hoc/withMainLayout/index.js":
/*!***********************************************!*\
  !*** ./src/front/hoc/withMainLayout/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withMainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withMainLayout */ "./src/front/hoc/withMainLayout/withMainLayout.js");


/* harmony default export */ __webpack_exports__["default"] = (_withMainLayout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/front/hoc/withMainLayout/withMainLayout.js":
/*!********************************************************!*\
  !*** ./src/front/hoc/withMainLayout/withMainLayout.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js");
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");
/* harmony import */ var _components_navigation_NavigationBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/navigation/NavigationBar */ "./src/front/components/navigation/NavigationBar.js");
/* harmony import */ var _components_backToTop_BackToTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/backToTop/BackToTop */ "./src/front/components/backToTop/BackToTop.js");
/* harmony import */ var _config_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/navigation */ "./src/front/config/navigation.js");
/* harmony import */ var _services_sw_registerServiceWorker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/sw/registerServiceWorker */ "./src/front/services/sw/registerServiceWorker.js");
/* harmony import */ var _redux_modules_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/modules/auth */ "./src/front/redux/modules/auth/index.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports













// #endregion

// #region flow types

// #endregion

// #region withMainLayout HOC
function withMainLayout() /* no args option yet, but could pass them here */{
  return function (BaseComponent) {
    // #region returned Component
    var WithMainLayout = function (_Component) {
      _inherits(WithMainLayout, _Component);

      function WithMainLayout() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WithMainLayout);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithMainLayout.__proto__ || Object.getPrototypeOf(WithMainLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = { navModel: _config_navigation__WEBPACK_IMPORTED_MODULE_8__["default"] }, _this.handleLeftNavItemClick = function (event, viewName) {
          // something to do here?
        }, _this.handleRightNavItemClick = function (event, viewName) {
          // something to do here?
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(WithMainLayout, [{
        key: 'componentDidMount',


        // #region lifecycle
        value: function componentDidMount() {
          if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {
            // register service worker (no worry about multiple attempts to register, browser will ignore when already registered)
            Object(_services_sw_registerServiceWorker__WEBPACK_IMPORTED_MODULE_9__["default"])();
          }
        }
      }, {
        key: 'UNSAFE_componentWillMount',
        value: function UNSAFE_componentWillMount() {
          var _props = this.props,
              history = _props.history,
              loginError = _props.loginError,
              loginSuccess = _props.loginSuccess;
          // Add callback for lock's `authenticated` event

          _services_auth__WEBPACK_IMPORTED_MODULE_5__["lock"].on('authenticated', function (authResult) {
            _services_auth__WEBPACK_IMPORTED_MODULE_5__["lock"].getUserInfo(authResult.accessToken, function (error, profile) {
              if (error) {
                return loginError(error);
              }
              _services_auth__WEBPACK_IMPORTED_MODULE_5__["setToken"](authResult.idToken); // static method
              _services_auth__WEBPACK_IMPORTED_MODULE_5__["setProfile"](profile); // static method
              loginSuccess(profile);
              history.push({ pathname: '/' });
              _services_auth__WEBPACK_IMPORTED_MODULE_5__["lock"].hide();
            });
          });
          // Add callback for lock's `authorization_error` event
          _services_auth__WEBPACK_IMPORTED_MODULE_5__["lock"].on('authorization_error', function (error) {
            loginError(error);
            history.push({ pathname: '/' });
          });
        }
      }, {
        key: 'render',

        /* eslint-enable no-unused-vars*/
        value: function render() {
          /* eslint-disable no-unused-vars */
          var _props2 = this.props,
              history = _props2.history,
              location = _props2.location,
              match = _props2.match,
              passProps = _objectWithoutProperties(_props2, ['history', 'location', 'match']);
          /* eslint-enable no-unused-vars */


          var navModel = this.state.navModel;


          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { id: 'appContainer' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navigation_NavigationBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
              brand: navModel.brand,
              navModel: navModel,
              handleLeftNavItemClick: this.handleLeftNavItemClick,
              handleRightNavItemClick: this.handleRightNavItemClick
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'container-fluid' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, passProps)
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_backToTop_BackToTop__WEBPACK_IMPORTED_MODULE_7__["default"], { minScrollY: 40, scrollTo: 'appContainer' })
          );
        }
        // #endregion

        /* eslint-disable no-unused-vars*/

      }]);

      return WithMainLayout;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    // #region add static displayName for dev
    /* eslint-disable no-process-env */


    if (true) {
      // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
      WithMainLayout.displayName = recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_2___default()(BaseComponent, 'withMainLayout');
    }
    /* eslint-enable no-process-env */
    // #endregion
    var mapStateToProps = function mapStateToProps(_ref2) {
      var auth = _ref2.auth;
      return {
        auth: auth
      };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
      return {
        loginSuccess: function loginSuccess() {
          return dispatch(_redux_modules_auth__WEBPACK_IMPORTED_MODULE_10__["authActions"].loginSuccess());
        },
        loginError: function loginError() {
          return dispatch(_redux_modules_auth__WEBPACK_IMPORTED_MODULE_10__["authActions"].loginError());
        }
      };
    };

    return recompose_compose__WEBPACK_IMPORTED_MODULE_3___default()(Object(react_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(WithMainLayout)));
  };
}
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (withMainLayout);

/***/ }),

/***/ "./src/front/index.js":
/*!****************************!*\
  !*** ./src/front/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tap-event-plugin */ "./node_modules/react-tap-event-plugin/src/injectTapEventPlugin.js");
/* harmony import */ var react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js");
/* harmony import */ var _style_injectGlobalStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/injectGlobalStyles */ "./src/front/style/injectGlobalStyles.js");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Root */ "./src/front/Root.js");


// #region imports
 // NOTE: REALLY important to avoid "regeneratorRuntime is not defined"








// import { getLocationOrigin } from './services/API/fetchTools';
// #endregion

// #region constants
var ELEMENT_TO_BOOTSTRAP = 'root';
var bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// #endregion

// #region globals (styles, polyfill ...)
// smoothscroll polyfill
smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5___default.a.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;
window.snapSaveState = function () {
  return Object(loadable_components__WEBPACK_IMPORTED_MODULE_6__["getState"])();
};

Object(_style_injectGlobalStyles__WEBPACK_IMPORTED_MODULE_7__["default"])();
react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_3___default()();
// #endregion

// #region render (with hot reload if dev)
var renderApp = function renderApp(RootComponent) {
  var Application = function Application() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      react_hot_loader__WEBPACK_IMPORTED_MODULE_4__["AppContainer"],
      null,
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RootComponent, null)
    );
  };

  // needed for react-snap:
  if (bootstrapedElement.hasChildNodes()) {
    // avoid 1st load flickering due to async component loading:
    Object(loadable_components__WEBPACK_IMPORTED_MODULE_6__["loadComponents"])().then(function () {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["hydrate"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Application, null), bootstrapedElement);
    });
  } else {
    Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Application, null), bootstrapedElement);
  }
};

renderApp(_Root__WEBPACK_IMPORTED_MODULE_8__["default"]);

if (false) {}
// #endregion

/***/ }),

/***/ "./src/front/mock/fakeAPI.json":
/*!*************************************!*\
  !*** ./src/front/mock/fakeAPI.json ***!
  \*************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = [{"id":1,"label":"item 1"},{"id":2,"label":"item 2"}];

/***/ }),

/***/ "./src/front/mock/userInfosMock.json":
/*!*******************************************!*\
  !*** ./src/front/mock/userInfosMock.json ***!
  \*******************************************/
/*! exports provided: token, user, default */
/***/ (function(module) {

module.exports = {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ","user":{"id":111,"login":"john.doe@fake.mail","firstname":"John","lastname":"Doe","isAdmin":true}};

/***/ }),

/***/ "./src/front/redux/middleware/fetchMiddleware.js":
/*!*******************************************************!*\
  !*** ./src/front/redux/middleware/fetchMiddleware.js ***!
  \*******************************************************/
/*! exports provided: FETCH_MOCK, FETCH, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MOCK", function() { return FETCH_MOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH", function() { return FETCH; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// #region imports

// #endregion

// #region constants
var FETCH_MOCK = 'FETCH_MOCK';
var FETCH = 'FETCH';
// #endregion

//
// FETCH_MOCK mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH_MOCK',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    mockResult: any
//  }
// }
//

// FETCH mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    url: 'an url',
//    method: 'get',  // lower case, one of 'get', 'post'...
//    headers: {}     // OPTIONAL CONTENT like: data: { someprop: 'value ...}
//    options: {}     // OPTIONAL CONTENT like: Authorization: 'Bearer _A_TOKEN_'
//  }
// }
//
//
//
//
var fetchMiddleware = function fetchMiddleware(store) {
  return function (next) {
    return function (action) {
      if (!action.fetch) {
        return next(action);
      }

      if (!action.fetch.type || !action.fetch.type === FETCH_MOCK || !action.fetch.type === FETCH) {
        return next(action);
      }

      if (!action.fetch.actionTypes) {
        return next(action);
      }

      /**
       * fetch mock
       * @type {[type]}
       */
      if (action.fetch.type === FETCH_MOCK) {
        if (!action.fetch.mockResult) {
          throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');
        }

        var _action$fetch = action.fetch,
            _action$fetch$actionT = _action$fetch.actionTypes,
            request = _action$fetch$actionT.request,
            success = _action$fetch$actionT.success,
            mockResult = _action$fetch.mockResult;

        // request

        store.dispatch({ type: request });

        // received successful for mock
        return Promise.resolve(store.dispatch({
          type: success,
          payload: {
            status: 200,
            data: mockResult
          }
        }));
      }

      if (action.fetch.type === FETCH) {
        var _action$fetch2 = action.fetch,
            _action$fetch2$action = _action$fetch2.actionTypes,
            _request = _action$fetch2$action.request,
            _success = _action$fetch2$action.success,
            fail = _action$fetch2$action.fail,
            url = _action$fetch2.url,
            method = _action$fetch2.method,
            headers = _action$fetch2.headers,
            options = _action$fetch2.options;

        // request

        store.dispatch({ type: _request });

        // fetch server (success or fail)
        // returns a Promise
        return axios__WEBPACK_IMPORTED_MODULE_0___default.a.request(_extends({
          method: method,
          url: url,
          withCredentials: true,
          headers: _extends({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Acces-Control-Allow-Origin': '*'
          }, headers)
        }, options)).then(function (data) {
          return store.dispatch({ type: _success, payload: data });
        }).catch(function (err) {
          store.dispatch({ type: fail, error: err.response });
          return Promise.reject(err.response);
        });
      }
      return next(action);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (fetchMiddleware);

/***/ }),

/***/ "./src/front/redux/modules/auth/actions.js":
/*!*************************************************!*\
  !*** ./src/front/redux/modules/auth/actions.js ***!
  \*************************************************/
/*! exports provided: loginRequest, loginSuccess, loginError, logoutSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequest", function() { return loginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginError", function() { return loginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccess", function() { return logoutSuccess; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/front/redux/modules/auth/types.js");


var loginRequest = function loginRequest() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUEST"]
  };
};

var loginSuccess = function loginSuccess(profile) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"],
    payload: { profile: profile }
  };
};

var loginError = function loginError(error) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_ERROR"],
    error: error
  };
};

var logoutSuccess = function logoutSuccess() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESS"]
  };
};

/***/ }),

/***/ "./src/front/redux/modules/auth/index.js":
/*!***********************************************!*\
  !*** ./src/front/redux/modules/auth/index.js ***!
  \***********************************************/
/*! exports provided: authTypes, authActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/front/redux/modules/auth/reducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/front/redux/modules/auth/types.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "authTypes", function() { return _types__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/front/redux/modules/auth/actions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "authActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__; });






/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/front/redux/modules/auth/reducer.js":
/*!*************************************************!*\
  !*** ./src/front/redux/modules/auth/reducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/front/redux/modules/auth/types.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth */ "./src/front/services/auth/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isAuthenticated: !_services_auth__WEBPACK_IMPORTED_MODULE_1__["isTokenExpired"](),
    isFetching: false,
    profile: _services_auth__WEBPACK_IMPORTED_MODULE_1__["getProfile"](),
    error: null
  };
  var action = arguments[1];

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUEST"]:
      return _extends({}, state, {
        isFetching: true,
        error: null
      });
    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]:
      return _extends({}, state, {
        isFetching: false,
        isAuthenticated: true,
        profile: action.payload.profile
      });
    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_ERROR"]:
      return _extends({}, state, {
        isFetching: false,
        isAuthenticated: false,
        profile: {},
        error: action.error
      });
    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESS"]:
      return _extends({}, state, {
        isAuthenticated: false,
        profile: {}
      });
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

/***/ "./src/front/redux/modules/auth/types.js":
/*!***********************************************!*\
  !*** ./src/front/redux/modules/auth/types.js ***!
  \***********************************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
var LOGIN_REQUEST = 'ReactReduxAuth0Kit/auth/LOGIN_REQUEST';
var LOGIN_SUCCESS = 'ReactReduxAuth0Kit/auth/LOGIN_SUCCESS';
var LOGIN_ERROR = 'ReactReduxAuth0Kit/auth/LOGIN_ERROR';
var LOGOUT_SUCCESS = 'ReactReduxAuth0Kit/auth/LOGOUT_SUCCESS';

/***/ }),

/***/ "./src/front/redux/modules/catalog/actions.js":
/*!****************************************************!*\
  !*** ./src/front/redux/modules/catalog/actions.js ***!
  \****************************************************/
/*! exports provided: fetchCatalog, fetchCatalogIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCatalog", function() { return fetchCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCatalogIfNeeded", function() { return fetchCatalogIfNeeded; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var API_URL = 'http://localhost:3300/api/catalog?clientid=5a699f8c7107831a97566d4f';

// Export this for unit testing more easily
/* istanbul ignore next */
var fetchCatalog = function fetchCatalog() {
  var URL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : API_URL;
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({ type: 'CATALOG_REQUESTING' });

              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(URL);

            case 4:
              _ref2 = _context.sent;
              data = _ref2.data;


              /* istanbul ignore next */
              dispatch({ type: 'CATALOG_SUCCESS', data: data });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](1);

              /* istanbul ignore next */
              dispatch({ type: 'CATALOG_FAILURE', err: _context.t0.message });

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[1, 9]]);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

/* istanbul ignore next */
var shouldFetchCatalog = function shouldFetchCatalog(state) {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  // if (__DEV__) {
  //  return true;
  // }

  // Fetching data once in production
  if (state.catalog.readyStatus === 'CATALOG_SUCCESS') {
    return false;
  }

  return true;
};

/* istanbul ignore next */
var fetchCatalogIfNeeded = function fetchCatalogIfNeeded() {
  return function (dispatch, getState) {
    /* istanbul ignore next */
    if (shouldFetchCatalog(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchCatalog());
    }

    /* istanbul ignore next */
    return null;
  };
};

/***/ }),

/***/ "./src/front/redux/modules/catalog/index.js":
/*!**************************************************!*\
  !*** ./src/front/redux/modules/catalog/index.js ***!
  \**************************************************/
/*! exports provided: catalogTypes, catalogActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/front/redux/modules/catalog/reducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/front/redux/modules/catalog/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "catalogTypes", function() { return _types__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/front/redux/modules/catalog/actions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "catalogActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__; });






/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/front/redux/modules/catalog/reducer.js":
/*!****************************************************!*\
  !*** ./src/front/redux/modules/catalog/reducer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


var initialState = {
  readyStatus: 'CATALOG_INVALID',
  err: null,
  list: []
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'CATALOG_REQUESTING':
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign({}, state, {
        readyStatus: 'CATALOG_REQUESTING'
      });
    case 'CATALOG_FAILURE':
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign({}, state, {
        readyStatus: 'CATALOG_FAILURE',
        err: action.err
      });
    case 'CATALOG_SUCCESS':
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign({}, state, {
        readyStatus: 'CATALOG_SUCCESS',
        list: action.data
      });
    default:
      return state;
  }
});

/***/ }),

/***/ "./src/front/redux/modules/catalog/types.js":
/*!**************************************************!*\
  !*** ./src/front/redux/modules/catalog/types.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/front/redux/modules/fakeModuleWithFetch/fakeModuleWithFetch.types.js":
/*!**********************************************************************************!*\
  !*** ./src/front/redux/modules/fakeModuleWithFetch/fakeModuleWithFetch.types.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/front/redux/modules/fakeModuleWithFetch/index.js":
/*!**************************************************************!*\
  !*** ./src/front/redux/modules/fakeModuleWithFetch/index.js ***!
  \**************************************************************/
/*! exports provided: default, fakeFetchIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeFetchIfNeeded", function() { return fakeFetchIfNeeded; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _mock_fakeAPI_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mock/fakeAPI.json */ "./src/front/mock/fakeAPI.json");
var _mock_fakeAPI_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../mock/fakeAPI.json */ "./src/front/mock/fakeAPI.json", 1);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/appConfig */ "./src/front/config/appConfig.js");
/* harmony import */ var _services_API_fetchTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/API/fetchTools */ "./src/front/services/API/fetchTools.js");
/* harmony import */ var _fakeModuleWithFetch_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fakeModuleWithFetch.types */ "./src/front/redux/modules/fakeModuleWithFetch/fakeModuleWithFetch.types.js");
/* harmony import */ var _fakeModuleWithFetch_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fakeModuleWithFetch_types__WEBPACK_IMPORTED_MODULE_5__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// #region imports






// #endregion

// #region CONSTANTS
var REQUEST_FAKE_FETCH = 'REQUEST_FAKE_FETCH';
var RECEIVED_FAKE_FETCH = 'RECEIVED_FAKE_FETCH';
var ERROR_FAKE_FETCH = 'ERROR_FAKE_FETCH';
// #endregion

// #region flow types

// #endregion

// #region REDUCER

// #region initial state
var initialState = {
  isFetching: false,
  actionTime: '',
  data: [],
  error: {}
};
// #endregion

// #region reducer
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var currentTime = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date());

  switch (action.type) {
    // #region request (fake)
    case REQUEST_FAKE_FETCH:
      {
        return _extends({}, state, {
          actionTime: currentTime,
          isFetching: true
        });
      }

    case RECEIVED_FAKE_FETCH:
      {
        return _extends({}, state, {
          actionTime: currentTime,
          isFetching: false,
          data: [].concat(_toConsumableArray(action.payload))
        });
      }

    case ERROR_FAKE_FETCH:
      {
        return _extends({}, state, {
          actionTime: currentTime,
          isFetching: false,
          error: action.error ? _extends({}, action.error) : {}
        });
      }
    // #endregion

    default:
      return state;
  }
});
// #endregion

// #endregion

// #region ACTIONS CREATORS

// #region fetch example
function fakeFetch() {
  return function (dispatch) {
    var shouldFetchMock = _config_appConfig__WEBPACK_IMPORTED_MODULE_3__["default"].DEV_MODE;
    var fetchType = shouldFetchMock ? 'FETCH_MOCK' : 'FETCH';
    var mockResult = _mock_fakeAPI_json__WEBPACK_IMPORTED_MODULE_2__;

    var url = Object(_services_API_fetchTools__WEBPACK_IMPORTED_MODULE_4__["getLocationOrigin"])() + '/' + _config_appConfig__WEBPACK_IMPORTED_MODULE_3__["default"].api.fakeEndPoint;
    var method = 'get';
    var options = {};

    // fetch middleware
    // -> you handles pure front or with back-end asyncs just by disaptching a single object
    //   -> just change config: appConfig.DEV_MODE
    return Promise.resolve(dispatch({
      // type name is not important here since fetchMiddleware will intercept this action:
      type: 'FETCH_MIDDLEWARE',
      // here are fetch middleware props:
      fetch: {
        type: fetchType,
        actionTypes: {
          request: REQUEST_FAKE_FETCH,
          success: RECEIVED_FAKE_FETCH,
          fail: ERROR_FAKE_FETCH
        },
        // props only used when type = FETCH_MOCK:
        mockResult: mockResult,
        // props only used when type = FETCH:
        url: url,
        method: method,
        options: options
      }
    }));
  };
}

function fakeFetchIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFakeFetch(getState())) {
      return dispatch(fakeFetch());
    }
    return Promise.resolve();
  };
}

function shouldFakeFetch(state) {
  var isFetching = state.fakeModuleWithFetch.isFetching;


  if (isFetching) {
    return false;
  }
  return true;
}
// #endregion

// #endregion

/***/ }),

/***/ "./src/front/redux/modules/reducers.js":
/*!*********************************************!*\
  !*** ./src/front/redux/modules/reducers.js ***!
  \*********************************************/
/*! exports provided: reducers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _fakeModuleWithFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fakeModuleWithFetch */ "./src/front/redux/modules/fakeModuleWithFetch/index.js");
/* harmony import */ var _userAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userAuth */ "./src/front/redux/modules/userAuth/index.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalog */ "./src/front/redux/modules/catalog/index.js");
/* harmony import */ var _wo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wo */ "./src/front/redux/modules/wo/index.js");
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets */ "./src/front/redux/modules/widgets.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// #region imports







// #endregion

var reducers = {
  widgets: _widgets__WEBPACK_IMPORTED_MODULE_6__["default"],
  wo: _wo__WEBPACK_IMPORTED_MODULE_5__["default"],
  catalog: _catalog__WEBPACK_IMPORTED_MODULE_4__["default"],
  fakeModuleWithFetch: _fakeModuleWithFetch__WEBPACK_IMPORTED_MODULE_2__["default"],
  userAuth: _userAuth__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_extends({}, reducers, {
  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_0__["routerReducer"]
})));

/***/ }),

/***/ "./src/front/redux/modules/userAuth/index.js":
/*!***************************************************!*\
  !*** ./src/front/redux/modules/userAuth/index.js ***!
  \***************************************************/
/*! exports provided: default, disconnectUser, checkUserIsConnected, logUserIfNeeded, fetchUserInfoDataIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectUser", function() { return disconnectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserIsConnected", function() { return checkUserIsConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logUserIfNeeded", function() { return logUserIfNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfoDataIfNeeded", function() { return fetchUserInfoDataIfNeeded; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/appConfig */ "./src/front/config/appConfig.js");
/* harmony import */ var _mock_userInfosMock_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mock/userInfosMock.json */ "./src/front/mock/userInfosMock.json");
var _mock_userInfosMock_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../mock/userInfosMock.json */ "./src/front/mock/userInfosMock.json", 1);
/* harmony import */ var _services_API_fetchTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/API/fetchTools */ "./src/front/services/API/fetchTools.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth */ "./src/front/services/auth/index.js");
/* harmony import */ var _userAuth_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userAuth.types */ "./src/front/redux/modules/userAuth/userAuth.types.js");
/* harmony import */ var _userAuth_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_userAuth_types__WEBPACK_IMPORTED_MODULE_6__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// #region imports







// #endregion

// #region CONSTANTS
var REQUEST_USER_INFOS_DATA = 'REQUEST_USER_INFOS_DATA';
var RECEIVED_USER_INFOS_DATA = 'RECEIVED_USER_INFOS_DATA';
var ERROR_USER_INFOS_DATA = 'ERROR_USER_INFOS_DATA';

var REQUEST_LOG_USER = 'REQUEST_LOG_USER';
var RECEIVED_LOG_USER = 'RECEIVED_LOG_USER';
var ERROR_LOG_USER = 'ERROR_LOG_USER';

var CHECK_IF_USER_IS_AUTHENTICATED = 'CHECK_IF_USER_IS_AUTHENTICATED';

var DISCONNECT_USER = 'DISCONNECT_USER';
// #endregion

// #region flow types

// #endregion

// #region REDUCER

// #region initial State
var initialState = {
  // actions details
  isFetching: false,
  isLogging: false,
  time: '',

  // userInfos
  id: '',
  login: '',
  firstname: '',
  lastname: '',

  token: null,
  isAuthenticated: false // authentication status (token based auth)
};
// #endregion

// #region reducer
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var currentTime = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date());

  switch (action.type) {
    case CHECK_IF_USER_IS_AUTHENTICATED:
      return _extends({}, state, {
        actionTime: currentTime,
        isAuthenticated: action.isAuthenticated,
        token: action.token || initialState.token,
        id: action.user && action.user.id ? action.user.id : initialState.id,
        login: action.user && action.user.login ? action.user.login : initialState.login,
        firstname: action.user && action.user.firstname ? action.user.firstname : initialState.firstname,
        lastname: action.user && action.user.lastname ? action.user.lastname : initialState.firstname
      });

    case DISCONNECT_USER:
      return _extends({}, state, {
        actionTime: currentTime,
        isAuthenticated: false,
        token: initialState.token,
        id: initialState.id,
        login: initialState.login,
        firstname: initialState.firstname,
        lastname: initialState.lastname
      });

    // user login (get token and userInfo)
    case REQUEST_LOG_USER:
      return _extends({}, state, {
        actionTime: currentTime,
        isLogging: true
      });

    case RECEIVED_LOG_USER:
      var userLogged = action.payload.data;

      return _extends({}, state, {
        actionTime: currentTime,
        isAuthenticated: true,
        token: userLogged.token,
        id: userLogged.id,
        login: userLogged.login,
        firstname: userLogged.firstname,
        lastname: userLogged.lastname,
        isLogging: false
      });

    case ERROR_LOG_USER:
      return _extends({}, state, {
        actionTime: currentTime,
        isAuthenticated: false,
        isLogging: false
      });

    // not used right now:
    case REQUEST_USER_INFOS_DATA:
      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: true
      });

    case RECEIVED_USER_INFOS_DATA:
      var userInfos = action.payload.data;

      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: false,
        id: userInfos.id,
        login: userInfos.login,
        firstname: userInfos.firstname,
        lastname: userInfos.lastname
      });

    case ERROR_USER_INFOS_DATA:
      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: false
      });

    default:
      return state;
  }
});
// #endregion

// #endregion

// #region ACTIONS CREATORS

// #region disconnect user
function disconnectUser() {
  // auth.clearAllAppStorage();
  return { type: DISCONNECT_USER };
}
// #endregion

// #region check if user is connected
function checkUserIsConnected() {
  var token = _services_auth__WEBPACK_IMPORTED_MODULE_5__["default"].getToken();
  var user = _services_auth__WEBPACK_IMPORTED_MODULE_5__["default"].getUserInfo();
  var checkUserHasId = function checkUserHasId(obj) {
    return obj && obj._id;
  };
  var isAuthenticated = token && checkUserHasId(user) ? true : false;

  return _extends({
    type: CHECK_IF_USER_IS_AUTHENTICATED,
    token: token
  }, user, {
    isAuthenticated: isAuthenticated
  });
}
// #endregion

// #region loguser
function logUser(login, password) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var FETCH_TYPE, __SOME_LOGIN_API__, mockResult, url, method, headers, options;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              FETCH_TYPE = _config_appConfig__WEBPACK_IMPORTED_MODULE_2__["default"].DEV_MODE ? 'FETCH_MOCK' : 'FETCH';
              __SOME_LOGIN_API__ = 'login';
              mockResult = _mock_userInfosMock_json__WEBPACK_IMPORTED_MODULE_3__; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)

              url = Object(_services_API_fetchTools__WEBPACK_IMPORTED_MODULE_4__["getLocationOrigin"])() + '/' + __SOME_LOGIN_API__;
              method = 'post';
              headers = {};
              options = {
                credentials: 'same-origin',
                data: {
                  login: login,
                  password: password
                }
              };

              // fetchMiddleware (does: fetch mock, real fetch, dispatch 3 actions... for a minimum code on action creator!)

              return _context.abrupt('return', dispatch({
                type: 'FETCH_MIDDLEWARE',
                fetch: {
                  // common props:
                  type: FETCH_TYPE,
                  actionTypes: {
                    request: REQUEST_LOG_USER,
                    success: RECEIVED_LOG_USER,
                    fail: ERROR_LOG_USER
                  },
                  // mock fetch props:
                  mockResult: mockResult,
                  // real fetch props:
                  url: url,
                  method: method,
                  headers: headers,
                  options: options
                }
              }));

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }();
}

function logUserIfNeeded(email, password) {
  return function (dispatch, getState) {
    if (shouldLogUser(getState())) {
      return dispatch(logUser(email, password));
    }
    return Promise.resolve();
  };
}
function shouldLogUser(state) {
  var isLogging = state.userAuth.isLogging;


  if (isLogging) {
    return false;
  }
  return true;
}

function fetchUserInfosData() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return function (dispatch) {
    var token = _services_auth__WEBPACK_IMPORTED_MODULE_5__["default"].getToken();
    var DEV_MODE = _config_appConfig__WEBPACK_IMPORTED_MODULE_2__["default"].DEV_MODE,
        users = _config_appConfig__WEBPACK_IMPORTED_MODULE_2__["default"].api.users;

    var FETCH_TYPE = DEV_MODE ? 'FETCH_MOCK' : 'FETCH';

    var mockResult = _mock_userInfosMock_json__WEBPACK_IMPORTED_MODULE_3__; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)
    var url = Object(_services_API_fetchTools__WEBPACK_IMPORTED_MODULE_4__["getLocationOrigin"])() + '/' + users + '/' + id;
    var method = 'get';
    var headers = { authorization: 'Bearer ' + token };
    var options = { credentials: 'same-origin' }; // put options here (see axios options)

    return dispatch({
      type: 'FETCH_MIDDLEWARE',
      fetch: {
        // common props:
        type: FETCH_TYPE,
        actionTypes: {
          request: REQUEST_USER_INFOS_DATA,
          success: RECEIVED_USER_INFOS_DATA,
          fail: ERROR_USER_INFOS_DATA
        },
        // mock fetch props:
        mockResult: mockResult,
        // real fetch props:
        url: url,
        method: method,
        headers: headers,
        options: options
      }
    });
  };
}

function fetchUserInfoDataIfNeeded() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return function (dispatch, getState) {
    if (shouldFetchUserInfoData(getState())) {
      return dispatch(fetchUserInfosData(id));
    }
    return Promise.resolve();
  };
}

function shouldFetchUserInfoData(state) {
  var isFetching = state.userAuth.isFetching;


  if (isFetching) {
    return false;
  }
  return true;
}

/***/ }),

/***/ "./src/front/redux/modules/userAuth/userAuth.types.js":
/*!************************************************************!*\
  !*** ./src/front/redux/modules/userAuth/userAuth.types.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/front/redux/modules/widgets.js":
/*!********************************************!*\
  !*** ./src/front/redux/modules/widgets.js ***!
  \********************************************/
/*! exports provided: default, isLoaded, load, fetchWidgetsIfNeeded, save, editStart, editStop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoaded", function() { return isLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWidgetsIfNeeded", function() { return fetchWidgetsIfNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editStart", function() { return editStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editStop", function() { return editStop; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOAD = 'redux-example/widgets/LOAD';
var LOAD_SUCCESS = 'redux-example/widgets/LOAD_SUCCESS';
var LOAD_FAIL = 'redux-example/widgets/LOAD_FAIL';
var EDIT_START = 'redux-example/widgets/EDIT_START';
var EDIT_STOP = 'redux-example/widgets/EDIT_STOP';
var SAVE = 'redux-example/widgets/SAVE';
var SAVE_SUCCESS = 'redux-example/widgets/SAVE_SUCCESS';
var SAVE_FAIL = 'redux-example/widgets/SAVE_FAIL';

var initialState = {
  loaded: false,
  editing: {},
  saveError: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case LOAD:
      return _extends({}, state, {
        loading: true
      });
    case LOAD_SUCCESS:
      return _extends({}, state, {
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      });
    case LOAD_FAIL:
      return _extends({}, state, {
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      });
    case EDIT_START:
      return _extends({}, state, {
        editing: _extends({}, state.editing, _defineProperty({}, action.id, true))
      });
    case EDIT_STOP:
      return _extends({}, state, {
        editing: _extends({}, state.editing, _defineProperty({}, action.id, false))
      });
    case SAVE:
      return state; // 'saving' flag handled by redux-form
    case SAVE_SUCCESS:
      var data = [].concat(_toConsumableArray(state.data));
      data[action.result.id - 1] = action.result;
      return _extends({}, state, {
        data: data,
        editing: _extends({}, state.editing, _defineProperty({}, action.id, false)),
        saveError: _extends({}, state.saveError, _defineProperty({}, action.id, null))
      });
    case SAVE_FAIL:
      return typeof action.error === 'string' ? _extends({}, state, {
        saveError: _extends({}, state.saveError, _defineProperty({}, action.id, action.error))
      }) : state;
    default:
      return state;
  }
}

function isLoaded(globalState) {
  return globalState.widgets && globalState.widgets.loaded;
}

function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: function promise(client) {
      return client.get('/widget/load/param1/param2');
    } // params not used, just shown as demonstration
  };
}
function fetchWidgetsIfNeeded(state) {
  if (!isLoaded(state)) {
    return load();
  }
}
function save(widget) {
  return {
    types: [SAVE, SAVE_SUCCESS, SAVE_FAIL],
    id: widget.id,
    promise: function promise(client) {
      return client.post('/widget/update', {
        data: widget
      });
    }
  };
}

function editStart(id) {
  return { type: EDIT_START, id: id };
}

function editStop(id) {
  return { type: EDIT_STOP, id: id };
}

/***/ }),

/***/ "./src/front/redux/modules/wo/actions.js":
/*!***********************************************!*\
  !*** ./src/front/redux/modules/wo/actions.js ***!
  \***********************************************/
/*! exports provided: fetchWo, fetchWoIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWo", function() { return fetchWo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWoIfNeeded", function() { return fetchWoIfNeeded; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var API_URL = 'http://localhost:3300/api/catalog/';

// Export this for unit testing more easily
/* istanbul ignore next */
var fetchWo = function fetchWo(catalogId) {
  var URL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : API_URL;
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({ type: 'WO_REQUESTING' });
              if (catalogId) {
                URL = 'http://localhost:3300/api/catalog/' + catalogId + '/?clientid=5a699f8c7107831a97566d4f';
              }
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(URL);

            case 5:
              _ref2 = _context.sent;
              data = _ref2.data;


              /* istanbul ignore next */
              dispatch({ type: 'WO_SUCCESS', data: data });
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](2);

              /* istanbul ignore next */
              dispatch({ type: 'WO_FAILURE', err: _context.t0.message });

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[2, 10]]);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

/* istanbul ignore next */
var shouldFetchWo = function shouldFetchWo(state) {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  // if (__DEV__) {

  return true;
  // }

  // Fetching data once in production
  if (state.wo.readyStatus === 'WO_SUCCESS') {
    return false;
  }

  return true;
};

/* istanbul ignore next */
var fetchWoIfNeeded = function fetchWoIfNeeded(catalogId) {
  return function (dispatch, getState) {
    /* istanbul ignore next */
    if (shouldFetchWo(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchWo(catalogId));
    }

    /* istanbul ignore next */
    return null;
  };
};

/***/ }),

/***/ "./src/front/redux/modules/wo/index.js":
/*!*********************************************!*\
  !*** ./src/front/redux/modules/wo/index.js ***!
  \*********************************************/
/*! exports provided: woTypes, woActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/front/redux/modules/wo/reducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/front/redux/modules/wo/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "woTypes", function() { return _types__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/front/redux/modules/wo/actions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "woActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__; });





/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/front/redux/modules/wo/reducer.js":
/*!***********************************************!*\
  !*** ./src/front/redux/modules/wo/reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


var initialState = {
  readyStatus: 'WO_INVALID',
  err: null,
  wo: { name: 'empty' }
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'WO_REQUESTING':
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign({}, state, {
        readyStatus: 'WO_REQUESTING'
      });
    case 'WO_FAILURE':
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign({}, state, {
        readyStatus: 'WO_FAILURE',
        err: action.err
      });
    case 'WO_SUCCESS':
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign({}, state, {
        readyStatus: 'WO_SUCCESS',
        wo: action.data
      });
    default:
      return state;
  }
});

/***/ }),

/***/ "./src/front/redux/modules/wo/types.js":
/*!*********************************************!*\
  !*** ./src/front/redux/modules/wo/types.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/front/redux/store/configureStore.dev.js":
/*!*****************************************************!*\
  !*** ./src/front/redux/store/configureStore.dev.js ***!
  \*****************************************************/
/*! exports provided: history, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _modules_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/reducers */ "./src/front/redux/modules/reducers.js");
/* harmony import */ var _middleware_fetchMiddleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../middleware/fetchMiddleware */ "./src/front/redux/middleware/fetchMiddleware.js");


// #region imports




// #region import createHistory from hashHistory or BrowserHistory:
// import createHistory from 'history/createHashHistory';

// #endregion



// #endregion

// #region constants
var history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default()();
// #endregion

// #region createStore : enhancer

// #region logger middleware (dev only)
var loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])({
  level: 'info',
  collapsed: true
});
// #endregion

var enhancer = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_5__["default"], Object(react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history), _middleware_fetchMiddleware__WEBPACK_IMPORTED_MODULE_7__["default"], loggerMiddleware // logger at the end
));
// #endregion

function configureStore(initialState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_modules_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], initialState, enhancer);
  if (false) {}
  return store;
}

/***/ }),

/***/ "./src/front/redux/store/configureStore.js":
/*!*************************************************!*\
  !*** ./src/front/redux/store/configureStore.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {



/* eslint no-process-env:0 */
if (false) {} else {
  module.exports = __webpack_require__(/*! ./configureStore.dev */ "./src/front/redux/store/configureStore.dev.js");
}

/***/ }),

/***/ "./src/front/routes/MainRoutes.js":
/*!****************************************!*\
  !*** ./src/front/routes/MainRoutes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth */ "./src/front/services/auth/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/front/routes/routes.js");
/* harmony import */ var _components_logoutRoute_LogoutRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/logoutRoute/LogoutRoute */ "./src/front/components/logoutRoute/LogoutRoute.js");
/* harmony import */ var _components_privateRoute_PrivateRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/privateRoute/PrivateRoute */ "./src/front/components/privateRoute/PrivateRoute.js");


// #region imports





// #endregion

var MainRoutes = function MainRoutes() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"],
    null,
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: '/', component: _routes__WEBPACK_IMPORTED_MODULE_3__["Home"] }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/catalog', component: _routes__WEBPACK_IMPORTED_MODULE_3__["Catalog"] }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/about', component: _routes__WEBPACK_IMPORTED_MODULE_3__["About"] }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/widgets', component: _routes__WEBPACK_IMPORTED_MODULE_3__["Widgets"] }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_privateRoute_PrivateRoute__WEBPACK_IMPORTED_MODULE_5__["default"], { path: '/protected', component: _routes__WEBPACK_IMPORTED_MODULE_3__["Protected"] }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_logoutRoute_LogoutRoute__WEBPACK_IMPORTED_MODULE_4__["default"], { path: '/logout' })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (MainRoutes);

/***/ }),

/***/ "./src/front/routes/routes.js":
/*!************************************!*\
  !*** ./src/front/routes/routes.js ***!
  \************************************/
/*! exports provided: Catalog, Wo, Home, About, Protected, PageNotFound, PrivateRoute, Widgets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catalog", function() { return Catalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wo", function() { return Wo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Protected", function() { return Protected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return PageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoute", function() { return PrivateRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widgets", function() { return Widgets; });
/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js");


// #region imports

// #endregion
var Catalog = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../pages/catalog */ "./src/front/pages/catalog/index.js"));
}, {
  modules: ['../pages/catalog']
});
var Wo = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../pages/wo */ "./src/front/pages/wo/index.js"));
}, {
  modules: ['../pages/wo']
});
var Home = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../pages/home */ "./src/front/pages/home/index.js"));
}, {
  modules: ['../pages/home']
});
var About = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../pages/about */ "./src/front/pages/about/index.js"));
}, {
  modules: ['../pages/about']
});
var Protected = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../pages/protected */ "./src/front/pages/protected/index.js"));
}, {
  modules: ['../pages/protected']
});
var PageNotFound = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../pages/pageNotFound */ "./src/front/pages/pageNotFound/index.js"));
}, {
  modules: ['../pages/pageNotFound']
});
var PrivateRoute = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../components/privateRoute/PrivateRoute */ "./src/front/components/privateRoute/PrivateRoute.js"));
}, {
  modules: ['../components/privateRoute/PrivateRoute']
});
var Widgets = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ../pages/Widgets */ "./src/front/pages/Widgets/index.js"));
}, {
  modules: ['../pages/Widgets']
});

/***/ }),

/***/ "./src/front/services/API/fetchTools.js":
/*!**********************************************!*\
  !*** ./src/front/services/API/fetchTools.js ***!
  \**********************************************/
/*! exports provided: getLocationOrigin, getMethod, postMethod, defaultOptions, jsonHeader, encodeBase64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationOrigin", function() { return getLocationOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMethod", function() { return getMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postMethod", function() { return postMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonHeader", function() { return jsonHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeBase64", function() { return encodeBase64; });
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_0__);


// #region imports

// #endregion

// #region  window.location.origin polyfill
var getLocationOrigin = function getLocationOrigin() {
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }
  return window.location.origin;
};
// #endregion

// #region query options:
var getMethod = {
  method: 'get'
};

var postMethod = {
  method: 'post'
};

var defaultOptions = {
  credentials: 'same-origin'
};

var jsonHeader = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    // 'Access-control-Allow-Origin': '*'
  }
};
// #endregion

// #region general helpers
var encodeBase64 = function encodeBase64() {
  var stringToEncode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return js_base64__WEBPACK_IMPORTED_MODULE_0__["Base64"].encode(stringToEncode);
};
// #endregion

/***/ }),

/***/ "./src/front/services/auth/config.js":
/*!*******************************************!*\
  !*** ./src/front/services/auth/config.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  AUTH0_CLIENT_ID: '82tW7PsRsGq3rDhxa5lM0W58KFoiwbH6',
  AUTH0_DOMAIN: 'zusa.auth0.com',
  REDIRECT_URL: 'http://localhost:3001/callback'
});

/***/ }),

/***/ "./src/front/services/auth/index.js":
/*!******************************************!*\
  !*** ./src/front/services/auth/index.js ***!
  \******************************************/
/*! exports provided: lock, login, loggedIn, logout, getProfile, setProfile, setToken, getToken, getTokenExpirationDate, isTokenExpired */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lock", function() { return lock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggedIn", function() { return loggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfile", function() { return setProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenExpirationDate", function() { return getTokenExpirationDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTokenExpired", function() { return isTokenExpired; });
/* harmony import */ var auth0_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0-lock */ "./node_modules/auth0-lock/lib/index.js");
/* harmony import */ var auth0_lock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0_lock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/front/services/auth/config.js");





// Configure Auth0 lock
var lock = new auth0_lock__WEBPACK_IMPORTED_MODULE_0___default.a(_config__WEBPACK_IMPORTED_MODULE_2__["default"].AUTH0_CLIENT_ID, _config__WEBPACK_IMPORTED_MODULE_2__["default"].AUTH0_DOMAIN, {
  auth: {
    redirectUrl: _config__WEBPACK_IMPORTED_MODULE_2__["default"].REDIRECT_URL,
    responseType: 'token id_token'
  },
  theme: {
    primaryColor: '#b81b1c'
  },
  languageDictionary: {
    title: 'React Redux Auth0 Kit'
  }
});

var login = function login() {
  // Call the show method to display the widget.
  lock.show();
};

var loggedIn = function loggedIn() {
  // Checks if there is a saved token and it's still valid
  var token = getToken();
  return !!token && !isTokenExpired(token);
};

var logout = function logout() {
  // Clear user token and profile data from window.localStorage
  window.localStorage.removeItem('id_token');
  window.localStorage.removeItem('profile');
};

var getProfile = function getProfile() {
  // Retrieves the profile data from window.localStorage
  var profile = window.localStorage.getItem('profile');
  return profile ? JSON.parse(window.localStorage.profile) : {};
};

var setProfile = function setProfile(profile) {
  // Saves profile data to window.localStorage
  window.localStorage.setItem('profile', JSON.stringify(profile));
  // Triggers profile_updated event to update the UI
};

var setToken = function setToken(idToken) {
  // Saves user token to window.localStorage
  window.localStorage.setItem('id_token', idToken);
};

var getToken = function getToken() {
  // Retrieves the user token from window.localStorage
  return window.localStorage.getItem('id_token');
};

var getTokenExpirationDate = function getTokenExpirationDate() {
  var token = getToken();
  var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
  if (!decoded.exp) {
    return null;
  }

  var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
  date.setUTCSeconds(decoded.exp);
  return date;
};

var isTokenExpired = function isTokenExpired() {
  var token = getToken();
  if (!token) {
    return true;
  }
  var date = getTokenExpirationDate();
  var offsetSeconds = 0;
  if (date === null) {
    return false;
  }
  return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
};

/***/ }),

/***/ "./src/front/services/auth/type.js":
/*!*****************************************!*\
  !*** ./src/front/services/auth/type.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/front/services/sw/registerServiceWorker.js":
/*!********************************************************!*\
  !*** ./src/front/services/sw/registerServiceWorker.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/appConfig */ "./src/front/config/appConfig.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// #region  imports

// #endregion

// #region constants
var swPath = _config_appConfig__WEBPACK_IMPORTED_MODULE_0__["default"].sw.path;
// #endregion

function registerServiceWorker() {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        // $FlowIgnore
        navigator.serviceWorker.register(swPath).then(function (registration) {
          console.log('SW registered: ', registration);
        }).catch(function (registrationError) {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (registerServiceWorker);

/***/ }),

/***/ "./src/front/style/injectGlobalStyles.js":
/*!***********************************************!*\
  !*** ./src/front/style/injectGlobalStyles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject = _taggedTemplateLiteral(['\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n'], ['\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports

// #endregion

var injectGlobalStyle = function injectGlobalStyle() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["injectGlobal"])(_templateObject);
};

/* harmony default export */ __webpack_exports__["default"] = (injectGlobalStyle);

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=app.js.map