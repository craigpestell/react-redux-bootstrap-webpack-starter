(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/front/components/jumbotron/Jumbotron.js":
/*!*****************************************************!*\
  !*** ./src/front/components/jumbotron/Jumbotron.js ***!
  \*****************************************************/
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

var Jumbotron = function Jumbotron(_ref) {
  var children = _ref.children;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: 'jumbotron' },
    children
  );
};

// #region statics
Jumbotron.displayName = 'Jumbotron';
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (Jumbotron);

/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/index.js":
/*!***************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withEnterAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withEnterAnimation */ "./src/front/hoc/withEnterAnimation/withEnterAnimation.js");


/* harmony default export */ __webpack_exports__["default"] = (_withEnterAnimation__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js":
/*!****************************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n'], ['\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n      opacity: 0;\n      animation-name: ', ';\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    '], ['\n      opacity: 0;\n      animation-name: ', ';\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @region imports

// #endregion

var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject);

var AnimatedDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2, function (_ref) {
  var viewEnter = _ref.viewEnter;
  return viewEnter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3, fadeIn);
});

/* harmony default export */ __webpack_exports__["default"] = (AnimatedDiv);

/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/withEnterAnimation.js":
/*!****************************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/withEnterAnimation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js");
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_AnimatedDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled/AnimatedDiv */ "./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports



// #endregion

// #region flow types

// #endregion

function withEnterAnimation() {
  return function (BaseComponent) {
    var WithEnterAnimation = function (_Component) {
      _inherits(WithEnterAnimation, _Component);

      function WithEnterAnimation() {
        _classCallCheck(this, WithEnterAnimation);

        return _possibleConstructorReturn(this, (WithEnterAnimation.__proto__ || Object.getPrototypeOf(WithEnterAnimation)).apply(this, arguments));
      }

      _createClass(WithEnterAnimation, [{
        key: 'render',
        value: function render() {
          var passProps = _objectWithoutProperties(this.props, []);

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _styled_AnimatedDiv__WEBPACK_IMPORTED_MODULE_2__["default"],
            { viewEnter: true },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, passProps)
          );
        }
      }]);

      return WithEnterAnimation;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    /* eslint-disable no-process-env */


    if (true) {
      // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
      WithEnterAnimation.displayName = recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default()(BaseComponent, 'withEnterAnimation');
    }
    /* eslint-enable no-process-env */

    return WithEnterAnimation;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withEnterAnimation);

/***/ }),

/***/ "./src/front/pages/home/Home.js":
/*!**************************************!*\
  !*** ./src/front/pages/home/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_jumbotron_Jumbotron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/jumbotron/Jumbotron */ "./src/front/components/jumbotron/Jumbotron.js");
/* harmony import */ var _styled_HomeInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled/HomeInfo */ "./src/front/pages/home/styled/HomeInfo.js");
/* harmony import */ var _styled_MainTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled/MainTitle */ "./src/front/pages/home/styled/MainTitle.js");
/* harmony import */ var _styled_LightNote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled/LightNote */ "./src/front/pages/home/styled/LightNote.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");
/* harmony import */ var _services_auth_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth/type */ "./src/front/services/auth/type.js");
/* harmony import */ var _services_auth_type__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_services_auth_type__WEBPACK_IMPORTED_MODULE_7__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports







// #endregion


// #region flow types

// #endregion

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var authService = this.props.authService;

      var Profile = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        null,
        'Please login.'
      );
      /*
       */
      if (!authService.isTokenExpired()) {
        var profile = authService.getProfile();
        Profile = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h3',
            null,
            'profile...'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: profile.picture, height: '40px', alt: 'profile' }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'span',
            null,
            'Welcome, ',
            profile.nickname
          )
        );
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_jumbotron_Jumbotron__WEBPACK_IMPORTED_MODULE_2__["default"],
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _styled_HomeInfo__WEBPACK_IMPORTED_MODULE_3__["default"],
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _styled_MainTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
              null,
              'ReactJS 16.3+ Redux Bootstrap'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'h2',
              null,
              'with Hot Reload (',
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'i',
                null,
                'react-hot-loader 4+'
              ),
              ')!!!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'h2',
              null,
              'and React Router v4'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'h2',
              null,
              'and webpack 4.x'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'h2',
              null,
              'and styled-components (',
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _styled_LightNote__WEBPACK_IMPORTED_MODULE_5__["default"],
                null,
                'so keep using SCSS like styles and benefit performant css-in-js'
              ),
              ')'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'h1',
              null,
              'Starter'
            ),
            Profile,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
              { className: 'btn btn-success btn-lg', to: '/about' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-info' }),
              '\xA0 go to about'
            )
          )
        )
      );
    }
    // #endregion

  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

Home.defaultProps = { authService: _services_auth__WEBPACK_IMPORTED_MODULE_6__ };


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/front/pages/home/index.js":
/*!***************************************!*\
  !*** ./src/front/pages/home/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./src/front/pages/home/Home.js");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");
/* harmony import */ var _redux_modules_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/modules/auth */ "./src/front/redux/modules/auth/index.js");


// #region imports








// #endregion

// #region redux map state and dispatch to props
var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({ authActions: _redux_modules_auth__WEBPACK_IMPORTED_MODULE_6__["authActions"] }, dispatch);
};
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps))(_Home__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/pages/home/styled/HomeInfo.js":
/*!*************************************************!*\
  !*** ./src/front/pages/home/styled/HomeInfo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject = _taggedTemplateLiteral([''], ['']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports

// #endregion

var HomeInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject);

/* harmony default export */ __webpack_exports__["default"] = (HomeInfo);

/***/ }),

/***/ "./src/front/pages/home/styled/LightNote.js":
/*!**************************************************!*\
  !*** ./src/front/pages/home/styled/LightNote.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject = _taggedTemplateLiteral(['\n  font-size: 0.7em;\n'], ['\n  font-size: 0.7em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports

// #endregion

var LightNote = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].i(_templateObject);

/* harmony default export */ __webpack_exports__["default"] = (LightNote);

/***/ }),

/***/ "./src/front/pages/home/styled/MainTitle.js":
/*!**************************************************!*\
  !*** ./src/front/pages/home/styled/MainTitle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject = _taggedTemplateLiteral(['\n  color: #222 !important;\n  font-weight: 800;\n'], ['\n  color: #222 !important;\n  font-weight: 800;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports

// #endregion

var MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1(_templateObject);

/* harmony default export */ __webpack_exports__["default"] = (MainTitle);

/***/ })

}]);
//# sourceMappingURL=2.js.map