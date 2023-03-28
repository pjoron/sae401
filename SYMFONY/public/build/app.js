(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/script.js */ "./assets/js/script.js");
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"], {
  /***/"./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
  /*!****************************************************************************************************************!*\
    !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
    \****************************************************************************************************************/
  /***/
  function assetsControllersSyncRecursiveNode_modulesSymfonyStimulusBridgeLazyControllerLoaderJsJtSx$(module, __unused_webpack_exports, __nested_webpack_require_1774__) {
    var map = {
      "./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
    };
    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __nested_webpack_require_1774__(id);
    }
    function webpackContextResolve(req) {
      if (!__nested_webpack_require_1774__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }
      return map[req];
    }
    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };
    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

    /***/
  },

  /***/"./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
  /*!************************************************************************************************!*\
    !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
    \************************************************************************************************/
  /***/
  function node_modulesSymfonyStimulusBridgeDistWebpackLoaderJsAssetsControllersJson(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_3217__) {
    "use strict";

    __nested_webpack_require_3217__.r(__webpack_exports__);
    /* harmony export */
    __nested_webpack_require_3217__.d(__webpack_exports__, {
      /* harmony export */"default": function _default() {
        return __WEBPACK_DEFAULT_EXPORT__;
      }
      /* harmony export */
    });
    /* harmony default export */
    var __WEBPACK_DEFAULT_EXPORT__ = {};

    /***/
  },

  /***/"./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
    \******************************************************************************************************************/
  /***/
  function node_modulesSymfonyStimulusBridgeLazyControllerLoaderJsAssetsControllersHello_controllerJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_4255__) {
    "use strict";

    __nested_webpack_require_4255__.r(__webpack_exports__);
    /* harmony export */
    __nested_webpack_require_4255__.d(__webpack_exports__, {
      /* harmony export */"default": function _default() {
        return (/* binding */_default2
        );
      }
      /* harmony export */
    });
    /* harmony import */
    var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_4255__( /*! core-js/modules/es.object.set-prototype-of.js */"./node_modules/core-js/modules/es.object.set-prototype-of.js");
    /* harmony import */
    var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_4255__( /*! core-js/modules/es.function.bind.js */"./node_modules/core-js/modules/es.function.bind.js");
    /* harmony import */
    var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_4255__( /*! core-js/modules/es.object.get-prototype-of.js */"./node_modules/core-js/modules/es.object.get-prototype-of.js");
    /* harmony import */
    var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_4255__( /*! core-js/modules/es.object.to-string.js */"./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */
    var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_4255__( /*! core-js/modules/es.reflect.to-string-tag.js */"./node_modules/core-js/modules/es.reflect.to-string-tag.js");
    /* harmony import */
    var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */
    var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_4255__( /*! core-js/modules/es.reflect.construct.js */"./node_modules/core-js/modules/es.reflect.construct.js");
    /* harmony import */
    var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */
    var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_4255__( /*! core-js/modules/es.error.cause.js */"./node_modules/core-js/modules/es.error.cause.js");
    /* harmony import */
    var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */
    var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_4255__( /*! core-js/modules/es.error.to-string.js */"./node_modules/core-js/modules/es.error.to-string.js");
    /* harmony import */
    var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */
    var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_4255__( /*! core-js/modules/es.object.create.js */"./node_modules/core-js/modules/es.object.create.js");
    /* harmony import */
    var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */
    var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_4255__( /*! core-js/modules/es.object.define-property.js */"./node_modules/core-js/modules/es.object.define-property.js");
    /* harmony import */
    var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */
    var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_4255__( /*! core-js/modules/es.symbol.to-primitive.js */"./node_modules/core-js/modules/es.symbol.to-primitive.js");
    /* harmony import */
    var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */
    var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_4255__( /*! core-js/modules/es.date.to-primitive.js */"./node_modules/core-js/modules/es.date.to-primitive.js");
    /* harmony import */
    var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */
    var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_4255__( /*! core-js/modules/es.symbol.js */"./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */
    var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */
    var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_4255__( /*! core-js/modules/es.symbol.description.js */"./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */
    var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */
    var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_4255__( /*! core-js/modules/es.number.constructor.js */"./node_modules/core-js/modules/es.number.constructor.js");
    /* harmony import */
    var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */
    var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_4255__( /*! core-js/modules/es.symbol.iterator.js */"./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */
    var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */
    var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_4255__( /*! core-js/modules/es.array.iterator.js */"./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */
    var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */
    var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_4255__( /*! core-js/modules/es.string.iterator.js */"./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */
    var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */
    var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_4255__( /*! core-js/modules/web.dom-collections.iterator.js */"./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */
    var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__nested_webpack_require_4255__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */
    var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_4255__( /*! @hotwired/stimulus */"./node_modules/@hotwired/stimulus/dist/stimulus.js");
    function _typeof(obj) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
          result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    /*
     * This is an example Stimulus controller!
     *
     * Any element with a data-controller="hello" attribute will cause
     * this controller to be executed. The name "hello" comes from the filename:
     * hello_controller.js -> "hello"
     *
     * Delete this file or adapt it for your use!
     */
    var _default2 = /*#__PURE__*/function (_Controller) {
      _inherits(_default, _Controller);
      var _super = _createSuper(_default);
      function _default() {
        _classCallCheck(this, _default);
        return _super.apply(this, arguments);
      }
      _createClass(_default, [{
        key: "connect",
        value: function connect() {
          this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
        }
      }]);
      return _default;
    }(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);

    /***/
  },

  /***/"./assets/app.js":
  /*!***********************!*\
    !*** ./assets/app.js ***!
    \***********************/
  /***/
  function assetsAppJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_18795__) {
    "use strict";

    __nested_webpack_require_18795__.r(__webpack_exports__);
    /* harmony import */
    var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_18795__( /*! ./styles/app.scss */"./assets/styles/app.scss");
    /* harmony import */
    var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_18795__( /*! ./bootstrap */"./assets/bootstrap.js");
    /*
     * Welcome to your app's main JavaScript file!
     *
     * We recommend including the built version of this JavaScript file
     * (and its CSS file) in your base layout (base.html.twig).
     */

    // any CSS you import will output into a single css file (app.css in this case)

    // start the Stimulus application

    /***/
  },

  /***/"./assets/bootstrap.js":
  /*!*****************************!*\
    !*** ./assets/bootstrap.js ***!
    \*****************************/
  /***/
  function assetsBootstrapJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_19755__) {
    "use strict";

    __nested_webpack_require_19755__.r(__webpack_exports__);
    /* harmony export */
    __nested_webpack_require_19755__.d(__webpack_exports__, {
      /* harmony export */"app": function app() {
        return (/* binding */_app
        );
      }
      /* harmony export */
    });
    /* harmony import */
    var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_19755__( /*! @symfony/stimulus-bridge */"./node_modules/@symfony/stimulus-bridge/dist/index.js");

    // Registers Stimulus controllers from controllers.json and in the controllers/ directory
    var _app = (0, _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__nested_webpack_require_19755__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

    // register any custom, 3rd party controllers here
    // app.register('some_controller_name', SomeImportedController);

    /***/
  },

  /***/"./assets/styles/app.scss":
  /*!********************************!*\
    !*** ./assets/styles/app.scss ***!
    \********************************/
  /***/
  function assetsStylesAppScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_20963__) {
    "use strict";

    __nested_webpack_require_20963__.r(__webpack_exports__);
    // extracted by mini-css-extract-plugin

    /***/
  }
}, /******/function (__nested_webpack_require_21133__) {
  // webpackRuntimeModules
  /******/
  var __webpack_exec__ = function __webpack_exec__(moduleId) {
    return __nested_webpack_require_21133__(__nested_webpack_require_21133__.s = moduleId);
  };
  /******/
  __nested_webpack_require_21133__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_da-03e5c3"], function () {
    return __webpack_exec__("./assets/app.js");
  });
  /******/
  var __webpack_exports__ = __nested_webpack_require_21133__.O();
  /******/
}]);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-1d0e49"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJQyxRQUFRO0lBQUEsT0FBTWhJLGdDQUFtQixDQUFDQSxnQ0FBbUIsQ0FBQ2lJLENBQUMsR0FBR0QsUUFBUSxDQUFDO0VBQUEsQ0FBQztFQUNyRztFQUFTaEksZ0NBQW1CLENBQUNrSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsc0dBQXNHLENBQUMsRUFBRTtJQUFBLE9BQU9ILGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0VBQUEsQ0FBQyxDQUFDO0VBQ3hMO0VBQVMsSUFBSTlHLG1CQUFtQixHQUFHakIsZ0NBQW1CLENBQUNrSSxDQUFDLEVBQUU7RUFDMUQ7QUFBUyxDQUFDLENBQ1QsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcE9OIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0ICcuL2pzL3NjcmlwdC5qcyc7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiKHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gPSBzZWxmW1wid2VicGFja0NodW5rXCJdIHx8IFtdKS5wdXNoKFtbXCJhcHBcIl0se1xuXG4gICAgLyoqKi8gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOlxuICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAhKioqIC4vYXNzZXRzL2NvbnRyb2xsZXJzLyBzeW5jIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXC5banRdc3g/JCAqKiohXG4gICAgICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqKi8gKChtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuICAgIFxuICAgIHZhciBtYXAgPSB7XG4gICAgICAgIFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG4gICAgfTtcbiAgICBcbiAgICBcbiAgICBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcbiAgICAgICAgdmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG4gICAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuICAgICAgICBpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuICAgICAgICAgICAgZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwW3JlcV07XG4gICAgfVxuICAgIHdlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xuICAgIH07XG4gICAgd2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xuICAgIHdlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiO1xuICAgIFxuICAgIC8qKiovIH0pLFxuICAgIFxuICAgIC8qKiovIFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2Rpc3Qvd2VicGFjay9sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMuanNvblwiOlxuICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgICAgICEqKiogLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2Rpc3Qvd2VicGFjay9sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiAqKiohXG4gICAgICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG4gICAgXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgIC8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4gICAgLyogaGFybW9ueSBleHBvcnQgKi8gICBcImRlZmF1bHRcIjogKCkgPT4gKF9fV0VCUEFDS19ERUZBVUxUX0VYUE9SVF9fKVxuICAgIC8qIGhhcm1vbnkgZXhwb3J0ICovIH0pO1xuICAgIC8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgX19XRUJQQUNLX0RFRkFVTFRfRVhQT1JUX18gPSAoe1xuICAgIH0pO1xuICAgIFxuICAgIC8qKiovIH0pLFxuICAgIFxuICAgIC8qKiovIFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiOlxuICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgICAgICEqKiogLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyAqKiohXG4gICAgICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG4gICAgXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgIC8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4gICAgLyogaGFybW9ueSBleHBvcnQgKi8gICBcImRlZmF1bHRcIjogKCkgPT4gKC8qIGJpbmRpbmcgKi8gX2RlZmF1bHQpXG4gICAgLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lc19vYmplY3Rfc2V0X3Byb3RvdHlwZV9vZl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXCIpO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X3NldF9wcm90b3R5cGVfb2ZfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X3NldF9wcm90b3R5cGVfb2ZfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lc19mdW5jdGlvbl9iaW5kX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24uYmluZC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5iaW5kLmpzXCIpO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfZnVuY3Rpb25fYmluZF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lc19mdW5jdGlvbl9iaW5kX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X2dldF9wcm90b3R5cGVfb2ZfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1wiKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX29iamVjdF9nZXRfcHJvdG90eXBlX29mX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX2VzX29iamVjdF9nZXRfcHJvdG90eXBlX29mX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18pO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X3RvX3N0cmluZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX29iamVjdF90b19zdHJpbmdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X3RvX3N0cmluZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX3JlZmxlY3RfdG9fc3RyaW5nX3RhZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29yZS1qcy9tb2R1bGVzL2VzLnJlZmxlY3QudG8tc3RyaW5nLXRhZy5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWZsZWN0LnRvLXN0cmluZy10YWcuanNcIik7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lc19yZWZsZWN0X3RvX3N0cmluZ190YWdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXNfcmVmbGVjdF90b19zdHJpbmdfdGFnX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X18pO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfcmVmbGVjdF9jb25zdHJ1Y3RfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvcmUtanMvbW9kdWxlcy9lcy5yZWZsZWN0LmNvbnN0cnVjdC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWZsZWN0LmNvbnN0cnVjdC5qc1wiKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX3JlZmxlY3RfY29uc3RydWN0X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX2VzX3JlZmxlY3RfY29uc3RydWN0X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X18pO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfZXJyb3JfY2F1c2VfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvcmUtanMvbW9kdWxlcy9lcy5lcnJvci5jYXVzZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5lcnJvci5jYXVzZS5qc1wiKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX2Vycm9yX2NhdXNlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV82X19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX2VzX2Vycm9yX2NhdXNlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV82X18pO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfZXJyb3JfdG9fc3RyaW5nX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb3JlLWpzL21vZHVsZXMvZXMuZXJyb3IudG8tc3RyaW5nLmpzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmVycm9yLnRvLXN0cmluZy5qc1wiKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX2Vycm9yX3RvX3N0cmluZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfN19fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lc19lcnJvcl90b19zdHJpbmdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzdfXyk7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lc19vYmplY3RfY3JlYXRlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV84X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmNyZWF0ZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuY3JlYXRlLmpzXCIpO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X2NyZWF0ZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lc19vYmplY3RfY3JlYXRlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV84X18pO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X2RlZmluZV9wcm9wZXJ0eV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1wiKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX29iamVjdF9kZWZpbmVfcHJvcGVydHlfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzlfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X2RlZmluZV9wcm9wZXJ0eV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX3N5bWJvbF90b19wcmltaXRpdmVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzEwX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLnRvLXByaW1pdGl2ZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wudG8tcHJpbWl0aXZlLmpzXCIpO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfc3ltYm9sX3RvX3ByaW1pdGl2ZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXNfc3ltYm9sX3RvX3ByaW1pdGl2ZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTBfXyk7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lc19kYXRlX3RvX3ByaW1pdGl2ZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXByaW1pdGl2ZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXByaW1pdGl2ZS5qc1wiKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX2RhdGVfdG9fcHJpbWl0aXZlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lc19kYXRlX3RvX3ByaW1pdGl2ZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTFfXyk7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lc19zeW1ib2xfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzEyX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5qc1wiKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX3N5bWJvbF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTJfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXNfc3ltYm9sX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xMl9fKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX3N5bWJvbF9kZXNjcmlwdGlvbl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzXCIpO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfc3ltYm9sX2Rlc2NyaXB0aW9uX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xM19fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lc19zeW1ib2xfZGVzY3JpcHRpb25fanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzEzX18pO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfbnVtYmVyX2NvbnN0cnVjdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xNF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci5jb25zdHJ1Y3Rvci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuY29uc3RydWN0b3IuanNcIik7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lc19udW1iZXJfY29uc3RydWN0b3JfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzE0X19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX2VzX251bWJlcl9jb25zdHJ1Y3Rvcl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTRfXyk7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lc19zeW1ib2xfaXRlcmF0b3JfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzE1X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvci5qc1wiKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX3N5bWJvbF9pdGVyYXRvcl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTVfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXNfc3ltYm9sX2l0ZXJhdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xNV9fKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX2FycmF5X2l0ZXJhdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xNl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzXCIpO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfYXJyYXlfaXRlcmF0b3JfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzE2X19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX2VzX2FycmF5X2l0ZXJhdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xNl9fKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzX3N0cmluZ19pdGVyYXRvcl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTdfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzXCIpO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXNfc3RyaW5nX2l0ZXJhdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xN19fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lc19zdHJpbmdfaXRlcmF0b3JfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzE3X18pO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfd2ViX2RvbV9jb2xsZWN0aW9uc19pdGVyYXRvcl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMThfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIik7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc193ZWJfZG9tX2NvbGxlY3Rpb25zX2l0ZXJhdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xOF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc193ZWJfZG9tX2NvbGxlY3Rpb25zX2l0ZXJhdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xOF9fKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2hvdHdpcmVkX3N0aW11bHVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xOV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGhvdHdpcmVkL3N0aW11bHVzICovIFwiLi9ub2RlX21vZHVsZXMvQGhvdHdpcmVkL3N0aW11bHVzL2Rpc3Qvc3RpbXVsdXMuanNcIik7XG4gICAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG4gICAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbiAgICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuICAgIGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuICAgIGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbiAgICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuICAgIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG4gICAgZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbiAgICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbiAgICBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbiAgICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbiAgICBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gICAgICpcbiAgICAgKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICAgICAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICAgICAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gICAgICpcbiAgICAgKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAgICAgKi9cbiAgICB2YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gICAgICBfaW5oZXJpdHMoX2RlZmF1bHQsIF9Db250cm9sbGVyKTtcbiAgICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoX2RlZmF1bHQpO1xuICAgICAgZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG4gICAgICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICAgICAga2V5OiBcImNvbm5lY3RcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICAgICAgfVxuICAgICAgfV0pO1xuICAgICAgcmV0dXJuIF9kZWZhdWx0O1xuICAgIH0oX2hvdHdpcmVkX3N0aW11bHVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xOV9fLkNvbnRyb2xsZXIpO1xuICAgIFxuICAgIFxuICAgIC8qKiovIH0pLFxuICAgIFxuICAgIC8qKiovIFwiLi9hc3NldHMvYXBwLmpzXCI6XG4gICAgLyohKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAhKioqIC4vYXNzZXRzL2FwcC5qcyAqKiohXG4gICAgICBcXCoqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIC8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcbiAgICBcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zdHlsZXNfYXBwX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3R5bGVzL2FwcC5zY3NzICovIFwiLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzXCIpO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfYm9vdHN0cmFwX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jvb3RzdHJhcCAqLyBcIi4vYXNzZXRzL2Jvb3RzdHJhcC5qc1wiKTtcbiAgICAvKlxuICAgICAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAgICAgKlxuICAgICAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAgICAgKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICAgICAqL1xuICAgIFxuICAgIC8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbiAgICBcbiAgICBcbiAgICAvLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbiAgICBcbiAgICBcbiAgICAvKioqLyB9KSxcbiAgICBcbiAgICAvKioqLyBcIi4vYXNzZXRzL2Jvb3RzdHJhcC5qc1wiOlxuICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICAgISoqKiAuL2Fzc2V0cy9ib290c3RyYXAuanMgKioqIVxuICAgICAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG4gICAgXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgIC8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4gICAgLyogaGFybW9ueSBleHBvcnQgKi8gICBcImFwcFwiOiAoKSA9PiAoLyogYmluZGluZyAqLyBhcHApXG4gICAgLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zeW1mb255X3N0aW11bHVzX2JyaWRnZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlICovIFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2Rpc3QvaW5kZXguanNcIik7XG4gICAgXG4gICAgXG4gICAgLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbiAgICB2YXIgYXBwID0gKDAsX3N5bWZvbnlfc3RpbXVsdXNfYnJpZGdlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18uc3RhcnRTdGltdWx1c0FwcCkoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCIpKTtcbiAgICBcbiAgICAvLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuICAgIC8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiAgICBcbiAgICAvKioqLyB9KSxcbiAgICBcbiAgICAvKioqLyBcIi4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzc1wiOlxuICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICAgISoqKiAuL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MgKioqIVxuICAgICAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG4gICAgXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgIC8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIFxuICAgIFxuICAgIC8qKiovIH0pXG4gICAgXG4gICAgfSxcbiAgICAvKioqKioqLyBfX3dlYnBhY2tfcmVxdWlyZV9fID0+IHsgLy8gd2VicGFja1J1bnRpbWVNb2R1bGVzXG4gICAgLyoqKioqKi8gdmFyIF9fd2VicGFja19leGVjX18gPSAobW9kdWxlSWQpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IG1vZHVsZUlkKSlcbiAgICAvKioqKioqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oMCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfc3ltZm9ueV9zdGltdWx1cy1icmlkZ2VfZGlzdF9pbmRleF9qcy1ub2RlX21vZHVsZXNfY29yZS1qc19tb2R1bGVzX2VzX2RhLTAzZTVjM1wiXSwgKCkgPT4gKF9fd2VicGFja19leGVjX18oXCIuL2Fzc2V0cy9hcHAuanNcIikpKTtcbiAgICAvKioqKioqLyB2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTygpO1xuICAgIC8qKioqKiovIH1cbiAgICBdKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiZGVmYXVsdCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsInNlbGYiLCJwdXNoIiwiYXNzZXRzQ29udHJvbGxlcnNTeW5jUmVjdXJzaXZlTm9kZV9tb2R1bGVzU3ltZm9ueVN0aW11bHVzQnJpZGdlTGF6eUNvbnRyb2xsZXJMb2FkZXJKc0p0U3gkIiwibW9kdWxlIiwiX191bnVzZWRfd2VicGFja19leHBvcnRzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1hcCIsIndlYnBhY2tDb250ZXh0IiwicmVxIiwiaWQiLCJ3ZWJwYWNrQ29udGV4dFJlc29sdmUiLCJvIiwiZSIsIkVycm9yIiwiY29kZSIsImtleXMiLCJ3ZWJwYWNrQ29udGV4dEtleXMiLCJPYmplY3QiLCJyZXNvbHZlIiwiZXhwb3J0cyIsIm5vZGVfbW9kdWxlc1N5bWZvbnlTdGltdWx1c0JyaWRnZURpc3RXZWJwYWNrTG9hZGVySnNBc3NldHNDb250cm9sbGVyc0pzb24iLCJfX3VudXNlZF93ZWJwYWNrX21vZHVsZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJyIiwiZCIsIl9fV0VCUEFDS19ERUZBVUxUX0VYUE9SVF9fIiwibm9kZV9tb2R1bGVzU3ltZm9ueVN0aW11bHVzQnJpZGdlTGF6eUNvbnRyb2xsZXJMb2FkZXJKc0Fzc2V0c0NvbnRyb2xsZXJzSGVsbG9fY29udHJvbGxlckpzIiwiY29yZV9qc19tb2R1bGVzX2VzX29iamVjdF9zZXRfcHJvdG90eXBlX29mX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X3NldF9wcm90b3R5cGVfb2ZfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0IiwibiIsImNvcmVfanNfbW9kdWxlc19lc19mdW5jdGlvbl9iaW5kX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18iLCJjb3JlX2pzX21vZHVsZXNfZXNfZnVuY3Rpb25fYmluZF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQiLCJjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X2dldF9wcm90b3R5cGVfb2ZfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyIsImNvcmVfanNfbW9kdWxlc19lc19vYmplY3RfZ2V0X3Byb3RvdHlwZV9vZl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQiLCJjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X3RvX3N0cmluZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fIiwiY29yZV9qc19tb2R1bGVzX2VzX29iamVjdF90b19zdHJpbmdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0IiwiY29yZV9qc19tb2R1bGVzX2VzX3JlZmxlY3RfdG9fc3RyaW5nX3RhZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fIiwiY29yZV9qc19tb2R1bGVzX2VzX3JlZmxlY3RfdG9fc3RyaW5nX3RhZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fX2RlZmF1bHQiLCJjb3JlX2pzX21vZHVsZXNfZXNfcmVmbGVjdF9jb25zdHJ1Y3RfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfXyIsImNvcmVfanNfbW9kdWxlc19lc19yZWZsZWN0X2NvbnN0cnVjdF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fX2RlZmF1bHQiLCJjb3JlX2pzX21vZHVsZXNfZXNfZXJyb3JfY2F1c2VfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfXyIsImNvcmVfanNfbW9kdWxlc19lc19lcnJvcl9jYXVzZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fX2RlZmF1bHQiLCJjb3JlX2pzX21vZHVsZXNfZXNfZXJyb3JfdG9fc3RyaW5nX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X18iLCJjb3JlX2pzX21vZHVsZXNfZXNfZXJyb3JfdG9fc3RyaW5nX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X19fZGVmYXVsdCIsImNvcmVfanNfbW9kdWxlc19lc19vYmplY3RfY3JlYXRlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV84X18iLCJjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X2NyZWF0ZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9fX2RlZmF1bHQiLCJjb3JlX2pzX21vZHVsZXNfZXNfb2JqZWN0X2RlZmluZV9wcm9wZXJ0eV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fIiwiY29yZV9qc19tb2R1bGVzX2VzX29iamVjdF9kZWZpbmVfcHJvcGVydHlfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzlfX19kZWZhdWx0IiwiY29yZV9qc19tb2R1bGVzX2VzX3N5bWJvbF90b19wcmltaXRpdmVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzEwX18iLCJjb3JlX2pzX21vZHVsZXNfZXNfc3ltYm9sX3RvX3ByaW1pdGl2ZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTBfX19kZWZhdWx0IiwiY29yZV9qc19tb2R1bGVzX2VzX2RhdGVfdG9fcHJpbWl0aXZlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xMV9fIiwiY29yZV9qc19tb2R1bGVzX2VzX2RhdGVfdG9fcHJpbWl0aXZlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xMV9fX2RlZmF1bHQiLCJjb3JlX2pzX21vZHVsZXNfZXNfc3ltYm9sX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xMl9fIiwiY29yZV9qc19tb2R1bGVzX2VzX3N5bWJvbF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTJfX19kZWZhdWx0IiwiY29yZV9qc19tb2R1bGVzX2VzX3N5bWJvbF9kZXNjcmlwdGlvbl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTNfXyIsImNvcmVfanNfbW9kdWxlc19lc19zeW1ib2xfZGVzY3JpcHRpb25fanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzEzX19fZGVmYXVsdCIsImNvcmVfanNfbW9kdWxlc19lc19udW1iZXJfY29uc3RydWN0b3JfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzE0X18iLCJjb3JlX2pzX21vZHVsZXNfZXNfbnVtYmVyX2NvbnN0cnVjdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xNF9fX2RlZmF1bHQiLCJjb3JlX2pzX21vZHVsZXNfZXNfc3ltYm9sX2l0ZXJhdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xNV9fIiwiY29yZV9qc19tb2R1bGVzX2VzX3N5bWJvbF9pdGVyYXRvcl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTVfX19kZWZhdWx0IiwiY29yZV9qc19tb2R1bGVzX2VzX2FycmF5X2l0ZXJhdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xNl9fIiwiY29yZV9qc19tb2R1bGVzX2VzX2FycmF5X2l0ZXJhdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xNl9fX2RlZmF1bHQiLCJjb3JlX2pzX21vZHVsZXNfZXNfc3RyaW5nX2l0ZXJhdG9yX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xN19fIiwiY29yZV9qc19tb2R1bGVzX2VzX3N0cmluZ19pdGVyYXRvcl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTdfX19kZWZhdWx0IiwiY29yZV9qc19tb2R1bGVzX3dlYl9kb21fY29sbGVjdGlvbnNfaXRlcmF0b3JfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzE4X18iLCJjb3JlX2pzX21vZHVsZXNfd2ViX2RvbV9jb2xsZWN0aW9uc19pdGVyYXRvcl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMThfX19kZWZhdWx0IiwiX2hvdHdpcmVkX3N0aW11bHVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xOV9fIiwiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsImFyZyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInVuZGVmaW5lZCIsInJlcyIsImNhbGwiLCJOdW1iZXIiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJfc2V0UHJvdG90eXBlT2YiLCJwIiwic2V0UHJvdG90eXBlT2YiLCJiaW5kIiwiX19wcm90b19fIiwiRGVyaXZlZCIsImhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2NyZWF0ZVN1cGVySW50ZXJuYWwiLCJTdXBlciIsIl9nZXRQcm90b3R5cGVPZiIsInJlc3VsdCIsIk5ld1RhcmdldCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJhc3NldHNBcHBKcyIsIl9zdHlsZXNfYXBwX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIl9ib290c3RyYXBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyIsImFzc2V0c0Jvb3RzdHJhcEpzIiwiX3N5bWZvbnlfc3RpbXVsdXNfYnJpZGdlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJhc3NldHNTdHlsZXNBcHBTY3NzIiwiX193ZWJwYWNrX2V4ZWNfXyIsIm1vZHVsZUlkIiwicyIsIk8iXSwic291cmNlUm9vdCI6IiJ9