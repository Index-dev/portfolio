(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 234:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kq": function() { return /* binding */ setIsEnd; },
/* harmony export */   "P2": function() { return /* binding */ setCurrentComponentNo; },
/* harmony export */   "rn": function() { return /* binding */ setIsPageChanging; },
/* harmony export */   "kC": function() { return /* binding */ setInnerWidth; },
/* harmony export */   "Nq": function() { return /* binding */ setIndexSubContainerTranslateX; }
/* harmony export */ });
// init
const setIsEnd = 'setIsEnd'; // base

const setCurrentComponentNo = 'setCurrentComponentNo';
const setIsPageChanging = 'setIsPageChanging';
const setInnerWidth = 'setInnerWidth';
const setIndexSubContainerTranslateX = 'setIndexSubContainerTranslateX';

/***/ }),

/***/ 339:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
// EXTERNAL MODULE: ./modules/actionType.tsx
var actionType = __webpack_require__(234);
;// CONCATENATED MODULE: ./modules/initReducer.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  isEnd: false
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

const initReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType/* setIsEnd */.kq:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isEnd: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ var modules_initReducer = (initReducer);
;// CONCATENATED MODULE: ./modules/baseReducer.tsx
function baseReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function baseReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { baseReducer_ownKeys(Object(source), true).forEach(function (key) { baseReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { baseReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function baseReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const baseState = {
  currentComponentNo: 0,
  titleArray: ['Cover', 'Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'],
  backgroundColorArray: ['#E3D0B9', '#E1BC91', '#C19277', '#62959C', '#C19277', '#E1BC91', '#E3D0B9'],
  isPageChanging: false,
  innerWidth: 0,
  indexSubContainerTranslateX: 0
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

const baseReducer = (state = baseState, action) => {
  switch (action.type) {
    case actionType/* setCurrentComponentNo */.P2:
      {
        return baseReducer_objectSpread(baseReducer_objectSpread({}, state), {}, {
          currentComponentNo: action.payload
        });
      }

    case actionType/* setIsPageChanging */.rn:
      {
        return baseReducer_objectSpread(baseReducer_objectSpread({}, state), {}, {
          isPageChanging: action.payload
        });
      }

    case actionType/* setInnerWidth */.kC:
      {
        return baseReducer_objectSpread(baseReducer_objectSpread({}, state), {}, {
          innerWidth: action.payload
        });
      }

    case actionType/* setIndexSubContainerTranslateX */.Nq:
      {
        return baseReducer_objectSpread(baseReducer_objectSpread({}, state), {}, {
          indexSubContainerTranslateX: action.payload
        });
      }

    default:
      {
        return baseReducer_objectSpread({}, state);
      }
  }
};

/* harmony default export */ var modules_baseReducer = (baseReducer);
;// CONCATENATED MODULE: ./modules/indexReducer.tsx



const indexReducer = (0,external_redux_namespaceObject.combineReducers)({
  initReducer: modules_initReducer,
  baseReducer: modules_baseReducer
});
/* harmony default export */ var modules_indexReducer = (indexReducer);
;// CONCATENATED MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");;
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: ./pages/_app.tsx


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const store = (0,external_redux_namespaceObject.createStore)(modules_indexReducer, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)());

const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
  });
};

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(339));
module.exports = __webpack_exports__;

})();