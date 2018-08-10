(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/front/pages/Widgets/Widgets.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/front/pages/Widgets/Widgets.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widgets .refreshBtn {\n  margin-left: 20px; }\n\n.widgets .idCol {\n  width: 5%; }\n\n.widgets .colorCol {\n  width: 20%; }\n\n.widgets .sprocketsCol {\n  width: 20%;\n  text-align: right; }\n  .widgets .sprocketsCol input {\n    text-align: right; }\n\n.widgets .ownerCol {\n  width: 30%; }\n\n.widgets .buttonCol {\n  width: 25%; }\n  .widgets .buttonCol .btn {\n    margin: 0 5px; }\n\n.widgets tr.saving {\n  opacity: 0.8; }\n  .widgets tr.saving .btn[disabled] {\n    opacity: 1; }\n", ""]);

// exports


/***/ }),

/***/ "./src/front/components/WidgetForm/WidgetForm.js":
/*!*******************************************************!*\
  !*** ./src/front/components/WidgetForm/WidgetForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _widgetValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgetValidation */ "./src/front/components/WidgetForm/widgetValidation.js");
/* harmony import */ var redux_modules_widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux/modules/widgets */ "./src/front/redux/modules/widgets.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/*
@connect(
  state => ({
    saveError: state.widgets.saveError
  }),
  dispatch => bindActionCreators(widgetActions, dispatch)
)
@reduxForm({
  form: 'widget',
  fields: ['id', 'color', 'sprocketCount', 'owner'],
  validate: widgetValidation
}) */

var WidgetForm = function (_Component) {
  _inherits(WidgetForm, _Component);

  function WidgetForm() {
    _classCallCheck(this, WidgetForm);

    return _possibleConstructorReturn(this, (WidgetForm.__proto__ || Object.getPrototypeOf(WidgetForm)).apply(this, arguments));
  }

  _createClass(WidgetForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          editStop = _props.editStop,
          _props$fields = _props.fields,
          id = _props$fields.id,
          color = _props$fields.color,
          sprocketCount = _props$fields.sprocketCount,
          owner = _props$fields.owner,
          formKey = _props.formKey,
          handleSubmit = _props.handleSubmit,
          invalid = _props.invalid,
          pristine = _props.pristine,
          save = _props.save,
          submitting = _props.submitting,
          saveError = _props.saveError[formKey],
          values = _props.values;

      var styles = __webpack_require__(/*! pages/Widgets/Widgets.scss */ "./src/front/pages/Widgets/Widgets.scss");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'tr',
        { className: submitting ? styles.saving : '' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'td',
          { className: styles.idCol },
          id.value
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'td',
          { className: styles.colorCol },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'select',
            _extends({ name: 'color', className: 'form-control' }, color),
            _widgetValidation__WEBPACK_IMPORTED_MODULE_4__["colors"].map(function (valueColor) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'option',
                { value: valueColor, key: valueColor },
                valueColor
              );
            })
          ),
          color.error && color.touched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'text-danger' },
            color.error
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'td',
          { className: styles.sprocketsCol },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({ type: 'text', className: 'form-control' }, sprocketCount)),
          sprocketCount.error && sprocketCount.touched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'text-danger' },
            sprocketCount.error
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'td',
          { className: styles.ownerCol },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({ type: 'text', className: 'form-control' }, owner)),
          owner.error && owner.touched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'text-danger' },
            owner.error
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'td',
          { className: styles.buttonCol },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'button',
            {
              className: 'btn btn-default',
              onClick: function onClick() {
                return editStop(formKey);
              },
              disabled: submitting
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-ban' }),
            ' Cancel'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'button',
            {
              className: 'btn btn-success',
              onClick: handleSubmit(function () {
                return save(values).then(function (result) {
                  if (result && _typeof(result.error) === 'object') {
                    return Promise.reject(result.error);
                  }
                });
              }),
              disabled: pristine || invalid || submitting
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', {
              className: 'fa ' + (submitting ? 'fa-cog fa-spin' : 'fa-cloud')
            }),
            ' ',
            'Save'
          ),
          saveError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'text-danger' },
            saveError
          )
        )
      );
    }
  }]);

  return WidgetForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WidgetForm.propTypes = {
  fields: react__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.isRequired,
  editStop: react__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.isRequired,
  handleSubmit: react__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.isRequired,
  invalid: react__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.isRequired,
  pristine: react__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.isRequired,
  save: react__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.isRequired,
  submitting: react__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.isRequired,
  saveError: react__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object,
  formKey: react__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.isRequired,
  values: react__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WidgetForm);

/***/ }),

/***/ "./src/front/components/WidgetForm/widgetValidation.js":
/*!*************************************************************!*\
  !*** ./src/front/components/WidgetForm/widgetValidation.js ***!
  \*************************************************************/
/*! exports provided: colors, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony import */ var utils_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/validation */ "./src/front/utils/validation.js");


var colors = ['Blue', 'Fuchsia', 'Green', 'Orange', 'Red', 'Taupe'];

var widgetValidation = Object(utils_validation__WEBPACK_IMPORTED_MODULE_0__["createValidator"])({
  color: [utils_validation__WEBPACK_IMPORTED_MODULE_0__["required"], Object(utils_validation__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(colors)],
  sprocketCount: [utils_validation__WEBPACK_IMPORTED_MODULE_0__["required"], utils_validation__WEBPACK_IMPORTED_MODULE_0__["integer"]],
  owner: [utils_validation__WEBPACK_IMPORTED_MODULE_0__["required"], Object(utils_validation__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(30)]
});
/* harmony default export */ __webpack_exports__["default"] = (widgetValidation);

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

/***/ "./src/front/pages/Widgets/Widgets.js":
/*!********************************************!*\
  !*** ./src/front/pages/Widgets/Widgets.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_modules_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux/modules/widgets */ "./src/front/redux/modules/widgets.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _components_WidgetForm_WidgetForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/WidgetForm/WidgetForm */ "./src/front/components/WidgetForm/WidgetForm.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










// import { asyncConnect } from 'redux-async-connect';

/* asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isLoaded(getState())) {
      return dispatch(loadWidgets());
    }
  }
}])
connect(
  state => ({
    widgets: state.widgets.data,
    editing: state.widgets.editing,
    error: state.widgets.error,
    loading: state.widgets.loading
  }),
  {...widgetActions, initializeWithKey })*/

var Widgets = function (_Component) {
  _inherits(Widgets, _Component);

  function Widgets() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Widgets);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Widgets.__proto__ || Object.getPrototypeOf(Widgets)).call.apply(_ref, [this].concat(args))), _this), _this.renderWidgets = function () {
      var handleEdit = function handleEdit(widget) {
        var editStart = _this.props.editStart; // eslint-disable-line no-shadow

        return function () {
          return editStart(String(widget.id));
        };
      };
      var _this$props = _this.props,
          widgets = _this$props.widgets,
          error = _this$props.error,
          editing = _this$props.editing,
          loading = _this$props.loading,
          load = _this$props.load;


      if (!widgets.readyStatus || widgets.readyStatus === 'WIDGETS_INVALID' || widgets.readyStatus === 'WIDGETS_REQUESTING') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          ' Loading... '
        );
      }
      if (widgets.readyStatus === 'WIDGETS_FAILURE') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          ' Oops, Failed to load widgets list! '
        );
      }

      /* var linkList = widgets.list.data.workOrders.map(wo => {
        return (
          <li key={wo.id}>
            <Link to={`${match.url}/${wo.id}`}>{wo.name}</Link>
          </li>
        );
      });*/
      var linkList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'li',
        null,
        'list here'
      );
      if (widgets) {
        var styles = __webpack_require__(/*! ./Widgets.scss */ "./src/front/pages/Widgets/Widgets.scss");
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'table',
          { className: 'table table-striped' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'thead',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'tr',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'th',
                { className: styles.idCol },
                'ID'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'th',
                { className: styles.colorCol },
                'Color'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'th',
                { className: styles.sprocketsCol },
                'Sprockets'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'th',
                { className: styles.ownerCol },
                'Owner'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('th', { className: styles.buttonCol })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'tbody',
            null,
            widgets.map(function (widget) {
              return editing[widget.id] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WidgetForm_WidgetForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
                formKey: String(widget.id),
                key: String(widget.id),
                initialValues: widget
              }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'tr',
                { key: widget.id },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'td',
                  { className: styles.idCol },
                  widget.id
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'td',
                  { className: styles.colorCol },
                  widget.color
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'td',
                  { className: styles.sprocketsCol },
                  widget.sprocketCount
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'td',
                  { className: styles.ownerCol },
                  widget.owner
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'td',
                  { className: styles.buttonCol },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'button',
                    {
                      className: 'btn btn-primary',
                      onClick: handleEdit(widget)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-pencil' }),
                    ' Edit'
                  )
                )
              );
            })
          )
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h3',
          null,
          'widgets list'
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'ul',
          null,
          ' ',
          linkList,
          ' '
        )
      ); // <WidgetsList list={widgets.list} />;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Widgets, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var fetchWidgetsIfNeeded = this.props.fetchWidgetsIfNeeded;

      fetchWidgetsIfNeeded();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          widgets = _props.widgets,
          error = _props.error,
          editing = _props.editing,
          loading = _props.loading,
          load = _props.load;

      var refreshClassName = 'fa fa-refresh';
      if (loading) {
        refreshClassName += ' fa-spin';
      }
      var styles = __webpack_require__(/*! ./Widgets.scss */ "./src/front/pages/Widgets/Widgets.scss");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: styles.widgets + ' container' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h1',
          null,
          'Widgets',
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'button',
            {
              className: styles.refreshBtn + ' btn btn-success',
              onClick: load
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: refreshClassName }),
            ' Reload Widgets'
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, { title: 'Widgets' }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          'If you hit refresh on your browser, the data loading will take place on the server before the page is returned. If you navigated here from another page, the data was fetched from the client after the route transition. This uses the decorator method ',
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'code',
            null,
            '@asyncConnect'
          ),
          ' ',
          'with the ',
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'code',
            null,
            'deferred: true'
          ),
          ' flag. To block a route transition until some data is loaded, remove the ',
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'code',
            null,
            'deffered: true'
          ),
          ' ',
          'flag. To always render before loading data, even on the server, use',
          ' ',
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'code',
            null,
            'componentDidMount'
          ),
          '.'
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          'This widgets are stored in your session, so feel free to edit it and refresh.'
        ),
        error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: 'alert alert-danger', role: 'alert' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', {
            className: 'glyphicon glyphicon-exclamation-sign',
            'aria-hidden': 'true'
          }),
          ' ',
          error
        ),
        widgets && widgets.length && this.renderWidgets(widgets)
      );
    }
  }]);

  return Widgets;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Widgets);

/***/ }),

/***/ "./src/front/pages/Widgets/Widgets.scss":
/*!**********************************************!*\
  !*** ./src/front/pages/Widgets/Widgets.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./Widgets.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/front/pages/Widgets/Widgets.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/front/pages/Widgets/index.js":
/*!******************************************!*\
  !*** ./src/front/pages/Widgets/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Widgets */ "./src/front/pages/Widgets/Widgets.js");
/* harmony import */ var redux_modules_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux/modules/widgets */ "./src/front/redux/modules/widgets.js");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// #region imports







// #endregion
console.log('widgetActions:', redux_modules_widgets__WEBPACK_IMPORTED_MODULE_4__);
// #region redux map state and dispatch to props
var mapStateToProps = function mapStateToProps(state) {
  return { widgets: state.widgets };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(_extends({}, redux_modules_widgets__WEBPACK_IMPORTED_MODULE_4__), dispatch);
};
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps))(_Widgets__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/utils/validation.js":
/*!***************************************!*\
  !*** ./src/front/utils/validation.js ***!
  \***************************************/
/*! exports provided: email, required, minLength, maxLength, integer, oneOf, match, createValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLength", function() { return minLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return integer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOf", function() { return oneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValidator", function() { return createValidator; });
var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value === '';
};
var join = function join(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return !!error;
    })[0 /* first error */];
  };
};

function email(value) {
  // Let's not start a debate on email regex. This is just for an example app!
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
}

function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
}

function minLength(min) {
  return function (value) {
    if (!isEmpty(value) && value.length < min) {
      return 'Must be at least ' + min + ' characters';
    }
  };
}

function maxLength(max) {
  return function (value) {
    if (!isEmpty(value) && value.length > max) {
      return 'Must be no more than ' + max + ' characters';
    }
  };
}

function integer(value) {
  if (!Number.isInteger(Number(value))) {
    return 'Must be an integer';
  }
}

function oneOf(enumeration) {
  return function (value) {
    if (!~enumeration.indexOf(value)) {
      return 'Must be one of: ' + enumeration.join(', ');
    }
  };
}

function match(field) {
  return function (value, data) {
    if (data) {
      if (value !== data[field]) {
        return 'Do not match';
      }
    }
  };
}

function createValidator(rules) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = {};
    Object.keys(rules).forEach(function (key) {
      var rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      var error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}

/***/ })

}]);
//# sourceMappingURL=6.js.map