(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/front/components/CatalogList/index.js":
/*!***************************************************!*\
  !*** ./src/front/components/CatalogList/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





// import styles from './styles.scss';
//           /* {`${match.url}/5b54302457a3bd602420c8fd`} */

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var list = _ref.list;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'h3',
      null,
      'Catalog list'
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('pre', null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'ul',
      null,
      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(list.data.workOrders, function (_ref2) {
        var _id = _ref2._id,
            name = _ref2.name,
            catalogLabel = _ref2.catalogLabel;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'li',
          { key: _id },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
            { to: '/catalog/' + _id },
            catalogLabel
          )
        );
      })
    )
  );
});

/* export default ({ list }: Props) => (
  <div>
    <h4>Catalog List</h4>
    <ul>
      {_.map(list, ({ id, name }) => (
        <li key={id}>
          <Link to={`/Catalog/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);
*/

/***/ }),

/***/ "./src/front/pages/catalog/Catalog.js":
/*!********************************************!*\
  !*** ./src/front/pages/catalog/Catalog.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_CatalogList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CatalogList */ "./src/front/components/CatalogList/index.js");
/* harmony import */ var _wo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wo */ "./src/front/pages/wo/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports







// #endregion

// #region flow types

// #endregion
var woMock = function woMock() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'h3',
      null,
      'wo'
    )
  );
};
// Export this for unit testing more easily

var CatalogPage = function (_PureComponent) {
  _inherits(CatalogPage, _PureComponent);

  function CatalogPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CatalogPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CatalogPage.__proto__ || Object.getPrototypeOf(CatalogPage)).call.apply(_ref, [this].concat(args))), _this), _this.renderCatalogList = function () {
      var catalog = _this.props.catalog;


      if (!catalog.readyStatus || catalog.readyStatus === 'CATALOG_INVALID' || catalog.readyStatus === 'CATALOG_REQUESTING') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          ' Loading... '
        );
      }
      if (catalog.readyStatus === 'CATALOG_FAILURE') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          ' Oops, Failed to load catalog list! '
        );
      }

      /* var linkList = catalog.list.data.workOrders.map(wo => {
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
      if (catalog.list.data.workOrders) {
        var _match = _this.props.match;

        linkList = catalog.list.data.workOrders.map(function (data) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'li',
            { key: data._id },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
              { to: _match.url + '/' + data._id },
              data.name
            )
          );
        });
      }
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h3',
          null,
          'catalog list'
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'ul',
          null,
          ' ',
          linkList,
          ' '
        )
      ); // <CatalogList list={catalog.list} />;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CatalogPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var fetchCatalogIfNeeded = this.props.fetchCatalogIfNeeded;

      fetchCatalogIfNeeded();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          catalog = _props.catalog;


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h4',
          null,
          'catalogList...'
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          null,
          this.renderCatalogList(),
          ' '
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: match.url + '/:catalogId',
          render: function render(props) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wo__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({ data: catalog }, props));
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: match.url,
          render: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              null,
              'Please select a Catalog Item.'
            );
          }
        })
      );
    }
  }]);

  return CatalogPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (CatalogPage);

/***/ }),

/***/ "./src/front/pages/catalog/index.js":
/*!******************************************!*\
  !*** ./src/front/pages/catalog/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Catalog */ "./src/front/pages/catalog/Catalog.js");
/* harmony import */ var _redux_modules_catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/modules/catalog */ "./src/front/redux/modules/catalog/index.js");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// #region imports






// #endregion
console.log('catalogActions:', _redux_modules_catalog__WEBPACK_IMPORTED_MODULE_4__["catalogActions"]);
// #region redux map state and dispatch to props
var mapStateToProps = function mapStateToProps(state) {
  return { catalog: state.catalog };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(_extends({}, _redux_modules_catalog__WEBPACK_IMPORTED_MODULE_4__["catalogActions"]), dispatch);
};
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps))(_Catalog__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ })

}]);
//# sourceMappingURL=1.js.map