webpackHotUpdate(5,{

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(184);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(66);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(32);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(33);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(67);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(68);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(637);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(684);

var _link2 = _interopRequireDefault(_link);

var _react3 = __webpack_require__(30);

var _react4 = _interopRequireDefault(_react3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jaketrent/dev/roboto2/packages/site/src/ui/common/link.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleLocationChange = _this.handleLocationChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'handleLocationChange',
    value: function handleLocationChange(evt) {
      console.log('evt', evt);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // TODO: handle active links, waiting for real deal https://github.com/zeit/next.js/pull/2352
      if (window) {
        window.addEventListener('pushstate', this.handleLocationChange);
        window.addEventListener('popstate', this.handleLocationChange);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(evt) {
      if (document) document.body.scrollTop = document.documentElement.scrollTop = 0;
      if (this.props.onClick) this.props.onClick(evt);
    }
  }, {
    key: 'render',
    value: function render() {
      return (/^http/.test(this.props.href) ? _react4.default.createElement(_react2.default, (0, _extends3.default)({}, this.props, { onClick: this.handleClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }), _react4.default.createElement('a', { href: this.props.href, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, this.props.children)) : _react4.default.createElement(_link2.default, { href: this.props.href, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, _react4.default.createElement(_react2.default, (0, _extends3.default)({}, this.props, { onClick: this.handleClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }), _react4.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, this.props.children)))
      );
    }
  }]);

  return _class;
}(_react4.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jaketrent/dev/roboto2/packages/site/src/ui/common/link.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jaketrent/dev/roboto2/packages/site/src/ui/common/link.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mNmY2NTlhNmFhZDQ0MDY1M2U4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbW1vbi9saW5rLmpzP2IwNTFmMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnQHBsdXJhbHNpZ2h0L3BzLWRlc2lnbi1zeXN0ZW0tbGluay9yZWFjdCdcbmltcG9ydCBOYXZMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUxvY2F0aW9uQ2hhbmdlID0gdGhpcy5oYW5kbGVMb2NhdGlvbkNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cbiAgaGFuZGxlTG9jYXRpb25DaGFuZ2UoZXZ0KSB7XG4gICAgY29uc29sZS5sb2coJ2V2dCcsIGV2dClcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBUT0RPOiBoYW5kbGUgYWN0aXZlIGxpbmtzLCB3YWl0aW5nIGZvciByZWFsIGRlYWwgaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9wdWxsLzIzNTJcbiAgICBpZiAod2luZG93KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncHVzaHN0YXRlJywgdGhpcy5oYW5kbGVMb2NhdGlvbkNoYW5nZSlcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuaGFuZGxlTG9jYXRpb25DaGFuZ2UpXG4gICAgfVxuICB9XG4gIGhhbmRsZUNsaWNrKGV2dCkge1xuICAgIGlmIChkb2N1bWVudClcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDBcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB0aGlzLnByb3BzLm9uQ2xpY2soZXZ0KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gL15odHRwLy50ZXN0KHRoaXMucHJvcHMuaHJlZilcbiAgICAgID8gPExpbmsgey4uLnRoaXMucHJvcHN9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIDxhIGhyZWY9e3RoaXMucHJvcHMuaHJlZn0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA6IDxOYXZMaW5rIGhyZWY9e3RoaXMucHJvcHMuaHJlZn0+XG4gICAgICAgICAgPExpbmsgey4uLnRoaXMucHJvcHN9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgPGE+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZMaW5rPlxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdWkvY29tbW9uL2xpbmsuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQTVCQTtBQUNBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=