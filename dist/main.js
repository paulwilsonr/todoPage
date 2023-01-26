/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    box-sizing: border-box;\\n    --blue: #1AB7EF;\\n    --off-white: #FFFFF2;\\n    --black: #393D3F;\\n    --red: #FE4A49;\\n    --white: #FFF;\\n    --green: #139A43;\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\n.hidden {\\n    display: none;\\n}\\n\\n.icon {\\n    width: 30px;\\n    height: 30px;\\n}\\n\\n.smallIcon {\\n    width: 20px;\\n    height: 20px;\\n}\\n\\n.whiteIcon {\\n    filter: invert(100%);\\n}\\n\\nbody {\\n    display: grid;\\n    grid-template-rows: 42px 1fr;\\n    height: 100vh;\\n    \\n}\\n\\n.menuHeader {\\n    background-color: var(--blue);\\n    border-top-left-radius: 10px;\\n    border-top-right-radius: 10px;\\n    text-align: center;\\n    margin-bottom: 10px;\\n    color: var(--white);\\n}\\n\\n.menuHeaderText {\\n    display: inline;\\n}\\n\\n.pointer {\\n    cursor: pointer;\\n}\\n\\n.end {\\n    float: right;\\n    margin: 4px 5px 0 0;\\n}\\n\\nnav {\\n    display: flex;\\n    height: 100%;\\n    justify-content: space-between;\\n    align-items: center;\\n    background-color: var(--blue);\\n    border-radius: 8px;\\n    box-shadow: 5px 3px 3px var(--black);\\n    z-index: 9;\\n}\\n\\n.newItemMenu {\\n    position: absolute;\\n    border: solid var(--black) 1px;\\n    top: 40px;\\n    right: 15px;\\n    background-color: var(--white);\\n    padding: 10px;\\n    border-radius: 8px;\\n    box-shadow: 5px 3px 3px var(--black);\\n    z-index: 20;\\n}\\n\\nmain {\\n    display: grid;\\n    grid-template-columns: 1fr 4fr;\\n    grid-template-rows: 1fr;\\n    height: 100%;\\n    background-color: var(--off-white);\\n}\\n\\n\\n/*Side Menu Styles*/\\n.sideMenu {\\n    background-color: var(--white);\\n    border-radius: 10px;\\n    border: solid var(--black) 1px;\\n    box-shadow: 5px 3px 3px var(--black);\\n    z-index: 10;\\n}\\n\\n.sideMenuOption {\\n    display: flex;\\n    justify-content: space-between;\\n    margin: 10px;\\n}\\n\\n\\n.taskContainer {\\n    overflow: scroll;\\n    background-color: var(--off-white);\\n    grid-column: 1 / 3;\\n}\\n\\n\\n/*New Task Maker*/\\n.newTask {\\n    position: absolute;\\n    background-color: var(--white);\\n    border-radius: 10px;\\n    border: solid var(--black) 1px;\\n    box-shadow: 5px 3px 3px var(--black);\\n    z-index: 15;\\n    top: 25%;\\n    right: 33%;\\n    width: 33%;\\n}\\n\\n.newTask>form {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: repeat(1fr, 5);\\n    grid-gap: 5px;\\n}\\n\\n\\n/*Task Card Styles*/\\n.taskCard{\\n    background-color: var(--white);\\n    border-radius: 10px;\\n    border: solid var(--black) 1px;\\n    box-shadow: 5px 3px 3px var(--black);\\n    width: 99%;\\n    height: auto;\\n    margin: 10px auto;\\n    display: grid;\\n    grid-template-columns: 3fr 1fr 1fr;\\n    padding: 5px 0 0 10px;\\n}\\n\\n.taskCard.closed {\\n    grid-template-rows: 1fr 20px;\\n}\\n\\n.taskCard.closed>.notes, .taskCard.closed>.checklist, .taskCard.closed>.edit,\\n.taskCard.closed>.delete {\\n    display: none;\\n}\\n\\n.title {\\n    justify-self: center;\\n    grid-area: 1/1/2/2;\\n}\\n\\n.taskDueDate {\\n    grid-area: 1/2/2/3;\\n}\\n\\n.completedCheck {\\n    justify-self: end;\\n    margin-right: 20px;\\n    grid-area: 1/3/2/4;\\n}\\n\\n.notes {\\n    grid-area: 2/1/3/4;\\n}\\n\\n.checklist {\\n    grid-column: 1 / 4;\\n}\\n\\n.checklistItem>label {\\n    margin-left: 6px;\\n}\\n\\n.edit {\\n    grid-area: 4 / 2 / 5 / 3;\\n}\\n\\n.delete {\\n    grid-area: 4 / 3 / 5 / 4;\\n}\\n\\n.minimizeCard {\\n    grid-column: 1 / 4;\\n    justify-self: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todopage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todopage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todopage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todopage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todopage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todopage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todopage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todopage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todopage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todopage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _taskCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskCreator */ \"./src/taskCreator.js\");\n\n\n\nconst openMenuButton = document.querySelector(\".openMenuButton\");\nconst sideMenu = document.querySelector(\".sideMenu\");\nconst taskContainer = document.querySelector(\".taskContainer\");\nconst openNewItemMenu = document.querySelector(\".openNewItemMenu\");\nconst newItemMenu = document.querySelector(\".newItemMenu\");\nconst createTask = document.querySelector('#createTask');\nconst taskMenu = document.querySelector('.newTask');\nconst openNewTaskMenu = document.querySelector('#openNewTaskMenu');\nconst closeNewTaskMenu = document.querySelector('#closeNewTaskMenu');\n\nopenMenuButton.addEventListener(\"click\", toggleSideMenu);\nopenNewItemMenu.addEventListener(\"click\", function () {\n    toggleHidden(newItemMenu);\n});\n\ncreateTask.addEventListener(\"submit\", createNewTask);\nopenNewTaskMenu.addEventListener(\"click\", function() {\n    toggleHidden(newItemMenu);\n    toggleHidden(taskMenu);\n    \n})\ncloseNewTaskMenu.addEventListener(\"click\", function() {\n    toggleHidden(taskMenu);\n})\n\nfunction toggleSideMenu() {\n    toggleHidden(sideMenu);\n    if (sideMenu.classList.contains('hidden')) {\n        taskContainer.style.gridColumn = \"1 / 3\";\n    } else {\n        taskContainer.style.gridColumn = \"2 / 3\";\n    }\n};\n\n\n//switches between hidden and not hidden for elements\n\nfunction toggleHidden(hiddenElement) { \n    if (hiddenElement.classList.contains('hidden')) {\n        hiddenElement.classList.remove('hidden');\n    } else {\n        hiddenElement.classList.add('hidden');\n    }\n}\n\nfunction toggleCard(button) {\n    const taskCard = button.parentElement;\n\n    if (taskCard.classList.contains('closed')) {\n        taskCard.querySelector('.minimizeCard').src = \"../src/assets/contract.png\";\n        taskCard.classList.remove('closed');\n        taskCard.classList.add('opened');\n    } else {\n        taskCard.querySelector('.minimizeCard').src = \"../src/assets/expand.png\";\n        taskCard.classList.remove('opened');\n        taskCard.classList.add('closed');\n    } \n\n}\n\nclass taskInfoHolder {\n    constructor(obj) {\n        this.title = obj.title;\n        this.date = obj.date;\n        this.description = obj.description;\n        this.priority = obj.priority;\n        this.checklist = obj.checklist;\n        this.repeat = obj.repeat;\n    }\n}\n    \nfunction createNewTask() {\n   let newTask = Array.from(document.querySelectorAll('#createTask input')\n   ).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});\n   console.log(newTask); \n};\n\n\n\nlet testClassObj = {\n    title: 'Sample Task',\n    date: '1/29/23',\n    description: 'Sample Descriptoin',\n    priority: '1',\n    checklist: ['subtask 1', 'subtask 2'],\n    repeat: 'n',\n}\n\ntoggleSideMenu();\n\nconst testTask = new taskInfoHolder(testClassObj);\n\n(0,_taskCreator__WEBPACK_IMPORTED_MODULE_1__.cardCreator)(testTask);\n(0,_taskCreator__WEBPACK_IMPORTED_MODULE_1__.cardCreator)(testTask);\n(0,_taskCreator__WEBPACK_IMPORTED_MODULE_1__.cardCreator)(testTask);\n(0,_taskCreator__WEBPACK_IMPORTED_MODULE_1__.cardCreator)(testTask);\n\ndocument.querySelectorAll('.minimizeCard').forEach(item => {\n    item.addEventListener('click', event =>{\n        toggleCard(item);\n    })\n});\n\n//# sourceURL=webpack://todopage/./src/index.js?");

/***/ }),

/***/ "./src/taskCreator.js":
/*!****************************!*\
  !*** ./src/taskCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardCreator\": () => (/* binding */ cardCreator)\n/* harmony export */ });\n\n\nfunction cardCreator(newCardInfo) {\n    const newCard = document.createElement('div');\n    newCard.setAttribute('class', 'taskCard opened');\n    const newTitle = document.createElement('h3');\n    newTitle.classList.add('title');\n    newTitle.innerText = newCardInfo.title;\n    newCard.appendChild(newTitle);\n    \n    const newDueDate = document.createElement('h3');\n    newDueDate.classList.add('taskDueDate');\n    newDueDate.innerText = newCardInfo.date;\n    newCard.appendChild(newDueDate);\n    \n    const completedCheck = document.createElement('div');\n    completedCheck.classList.add('completedCheck');\n    const completedLabel = document.createElement('label');\n    completedLabel.setAttribute('for', 'completed');\n    completedLabel.innerText = 'Completed?';\n    completedCheck.appendChild(completedLabel);\n    const completedCheckbox = document.createElement('input');\n    completedCheckbox.setAttribute('type', 'checkbox');\n    completedCheckbox.setAttribute('name', 'Completed');\n    completedCheckbox.setAttribute('id', 'completed');\n    completedCheck.appendChild(completedCheckbox);\n    newCard.appendChild(completedCheck);\n\n    const newDescription = document.createElement('p');\n    const descriptionText = document.createElement('h4');\n    const descriptionDiv = document.createElement('div');\n    descriptionDiv.setAttribute('class', 'notes');\n    descriptionText.innerText = 'Description:';\n    newDescription.classList.add('taskDueDate');\n    newDescription.innerText = newCardInfo.description;\n    descriptionDiv.appendChild(descriptionText);\n    descriptionDiv.appendChild(newDescription);\n    newCard.appendChild(descriptionDiv);\n\n    const checklistDiv = document.createElement('div');\n    checklistDiv.classList.add('checklist');\n    const checklistText = document.createElement('h4');\n    checklistText.innerText = 'Checklist:'\n    checklistDiv.appendChild(checklistText);\n    newCard.appendChild(checklistDiv);\n\n    // checklist loop here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n    for (let i = 0; i < newCardInfo.checklist.length; i++) {\n        const checkName = checklist + i;\n        const checklistItemDiv = document.createElement('div');\n        const checklistItem = document.createElement('input');\n        checklistItemDiv.classList.add('checklistItem');\n        checklistItem.setAttribute('type', 'checkbox');\n        checklistItem.setAttribute('name', checkName);\n        checklistItem.setAttribute('id', checkName);\n        checklistItemDiv.appendChild(checklistItem);\n\n        const checklistLabel = document.createElement('label');\n        checklistLabel.setAttribute('for', checkName);\n        checklistLabel.innerText = newCardInfo.checklist[i];\n        checklistItemDiv.appendChild(checklistLabel);\n\n        checklistDiv.appendChild(checklistItemDiv);\n    }\n\n    const editText = document.createElement('p');\n    editText.classList.add('edit');\n    editText.innerText = 'edit';\n    newCard.appendChild(editText);\n\n    const deleteText = document.createElement('p');\n    deleteText.classList.add('delete');\n    deleteText.innerText = 'delete';\n    newCard.appendChild(deleteText);\n\n    \n    const minIcon = document.createElement('img');\n    minIcon.setAttribute('class', 'smallIcon minimizeCard pointer');\n    minIcon.setAttribute('src', '../src/assets/contract.png');\n    minIcon.setAttribute('alt', 'Minimize task');\n    newCard.appendChild(minIcon);\n\n    document.querySelector('.taskContainer').appendChild(newCard);\n\n}\n\n//# sourceURL=webpack://todopage/./src/taskCreator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;