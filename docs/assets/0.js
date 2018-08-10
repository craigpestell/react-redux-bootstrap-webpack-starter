(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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

/***/ "./src/front/pages/wo/Wo.js":
/*!**********************************!*\
  !*** ./src/front/pages/wo/Wo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _redux_modules_wo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/wo */ "./src/front/redux/modules/wo/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/*
const Wo = ({ match, data }) => {
  return (
    <div>
      {' '}
      <h3>Work order form here</h3>
      <Route
        path={`${match.path}`}
        render={({ match }) => (
          <div>
            {' '}
            <h3> {match.params.id} </h3>
          </div>
        )}
      />
    </div>
  );
};
export default Wo;
*/

// Export this for unit testing more easily
// #region flow types


var getParams = function getParams(pathname) {
  var matchProfile = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["matchPath"])(pathname, {
    path: '/catalog/:catalogId'
  });
  return matchProfile && matchProfile.params || {};
};

var WoPage = function (_React$PureComponent) {
  _inherits(WoPage, _React$PureComponent);

  function WoPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WoPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WoPage.__proto__ || Object.getPrototypeOf(WoPage)).call.apply(_ref, [this].concat(args))), _this), _this.renderWo = function () {
      var wo = _this.props.wo;


      if (!wo.readyStatus || wo.readyStatus === 'WO_INVALID' || wo.readyStatus === 'WO_REQUESTING') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          ' Loading... '
        );
      }
      if (wo.readyStatus === 'WO_FAILURE') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          ' Oops, Failed to load wo list! '
        );
      }
      var data = wo.wo.data;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h3',
          null,
          'Work order form'
        ),
        Object.entries(data).map(function (f) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { key: f[0] },
            f[0],
            ': ',
            f[1]
          );
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WoPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          fetchWoIfNeeded = _props.fetchWoIfNeeded,
          catalogId = _props.catalogId;

      fetchWoIfNeeded(catalogId);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var pathname = this.props.location.pathname;
      var prevPathname = prevProps.location.pathname;


      var currentParams = getParams(pathname);
      var prevParams = getParams(prevPathname);

      if (currentParams.catalogId && currentParams.catalogId !== prevParams.catalogId) {
        var _fetchWoIfNeeded = this.props.fetchWoIfNeeded;

        _fetchWoIfNeeded(currentParams.catalogId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h4',
          null,
          'wo...'
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          null,
          this.renderWo(),
          ' '
        )
      );
    }
  }]);

  return WoPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (WoPage);

/***/ }),

/***/ "./src/front/pages/wo/index.js":
/*!*************************************!*\
  !*** ./src/front/pages/wo/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Wo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Wo */ "./src/front/pages/wo/Wo.js");
/* harmony import */ var _redux_modules_wo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/modules/wo */ "./src/front/redux/modules/wo/index.js");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// #region imports






// #endregion
// #region redux map state and dispatch to props
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    catalogId: ownProps.match.params.catalogId,
    wo: state.wo
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(_extends({}, _redux_modules_wo__WEBPACK_IMPORTED_MODULE_4__["woActions"]), dispatch);
};
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps))(_Wo__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ })

}]);
//# sourceMappingURL=0.js.map