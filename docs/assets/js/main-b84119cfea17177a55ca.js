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
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
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
/******/ 	deferredModules.push(["./src/scripts/main.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/all-daisies-ds-cropped.png":
/*!***********************************************!*\
  !*** ./src/images/all-daisies-ds-cropped.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/images/all-daisies-ds-cropped-0b25bce04a811807b798edb026e9d0ea.png\";\n\n//# sourceURL=webpack:///./src/images/all-daisies-ds-cropped.png?");

/***/ }),

/***/ "./src/images/corner-daisy-ds.png":
/*!****************************************!*\
  !*** ./src/images/corner-daisy-ds.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/images/corner-daisy-ds-02293bb74ab661ea4cf51a6b1dd366fe.png\";\n\n//# sourceURL=webpack:///./src/images/corner-daisy-ds.png?");

/***/ }),

/***/ "./src/images/daisy-2-ds.png":
/*!***********************************!*\
  !*** ./src/images/daisy-2-ds.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/images/daisy-2-ds-152ce7d1f83d335e7f4d13a3932313ad.png\";\n\n//# sourceURL=webpack:///./src/images/daisy-2-ds.png?");

/***/ }),

/***/ "./src/images/daisy-chain-ds-h.png":
/*!*****************************************!*\
  !*** ./src/images/daisy-chain-ds-h.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/images/daisy-chain-ds-h-37036cbe3a37a4d6a1335c9ed02c5a41.png\";\n\n//# sourceURL=webpack:///./src/images/daisy-chain-ds-h.png?");

/***/ }),

/***/ "./src/images/long-stem-and-leaves-ds-h.png":
/*!**************************************************!*\
  !*** ./src/images/long-stem-and-leaves-ds-h.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/images/long-stem-and-leaves-ds-h-9839500912a38a8ac15c174c2b3afb72.png\";\n\n//# sourceURL=webpack:///./src/images/long-stem-and-leaves-ds-h.png?");

/***/ }),

/***/ "./src/scripts/components/food-menus-page.tsx":
/*!****************************************************!*\
  !*** ./src/scripts/components/food-menus-page.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar pescetarian_1 = __webpack_require__(/*! ./shared/pescetarian */ \"./src/scripts/components/shared/pescetarian.tsx\");\r\nvar vegetarian_1 = __webpack_require__(/*! ./shared/vegetarian */ \"./src/scripts/components/shared/vegetarian.tsx\");\r\nvar daisy_2_ds_png_1 = __importDefault(__webpack_require__(/*! ../../images/daisy-2-ds.png */ \"./src/images/daisy-2-ds.png\"));\r\nfunction FoodMenusPage() {\r\n    return (react_1.default.createElement(\"div\", { id: \"food-menus-page\" },\r\n        react_1.default.createElement(\"h1\", null, \"Wedding Breakfast Menu\"),\r\n        react_1.default.createElement(\"div\", { id: \"wedding-breakfast-menus\" },\r\n            react_1.default.createElement(\"div\", { id: \"food-menu-adult\" },\r\n                react_1.default.createElement(\"h2\", null, \"Adult's Menu\"),\r\n                react_1.default.createElement(\"h3\", null, \"Starter\"),\r\n                react_1.default.createElement(\"p\", null,\r\n                    \"Prawn cocktail served with Marie Rose sauce\\u00A0\",\r\n                    react_1.default.createElement(pescetarian_1.Pescetarian, null)),\r\n                react_1.default.createElement(\"p\", null, \"Mini asparagus wrapped with Parma ham\"),\r\n                react_1.default.createElement(\"h3\", null, \"Main Course\"),\r\n                react_1.default.createElement(\"p\", null,\r\n                    \"Beer battered cod served with lemon wedge, hand cut chips & peas\\u00A0\",\r\n                    react_1.default.createElement(pescetarian_1.Pescetarian, null)),\r\n                react_1.default.createElement(\"p\", null, \"Hunters chicken - chicken breast wrapped in bacon filled with mature cheese & topped with BBQ sauce served with hand cut chips & peas\"),\r\n                react_1.default.createElement(\"p\", null,\r\n                    \"Stuffed courgette with sweet pepper, aubergine & tomatoes topped with Mozzarella served with a tomato salsa\\u00A0\",\r\n                    react_1.default.createElement(vegetarian_1.Vegetarian, null)),\r\n                react_1.default.createElement(\"h3\", null, \"Dessert\"),\r\n                react_1.default.createElement(\"p\", null,\r\n                    \"Eton mess\\u00A0\",\r\n                    react_1.default.createElement(vegetarian_1.Vegetarian, null)),\r\n                react_1.default.createElement(\"p\", null,\r\n                    \"Chocolate brownie served with warm chocolate sauce & vanilla ice cream\\u00A0\",\r\n                    react_1.default.createElement(vegetarian_1.Vegetarian, null))),\r\n            react_1.default.createElement(\"div\", { id: \"food-menu-separator\" },\r\n                react_1.default.createElement(\"img\", { src: daisy_2_ds_png_1.default })),\r\n            react_1.default.createElement(\"div\", { id: \"food-menu-child\" },\r\n                react_1.default.createElement(\"h2\", null, \"Child's Set Menu\"),\r\n                react_1.default.createElement(\"h3\", null, \"Starter\"),\r\n                react_1.default.createElement(\"p\", null,\r\n                    \"Cheesy bread\\u00A0\",\r\n                    react_1.default.createElement(vegetarian_1.Vegetarian, null)),\r\n                react_1.default.createElement(\"h3\", null, \"Main Course\"),\r\n                react_1.default.createElement(\"p\", null, \"Chicken goujons served with potato wedges\"),\r\n                react_1.default.createElement(\"h3\", null, \"Dessert\"),\r\n                react_1.default.createElement(\"p\", null,\r\n                    \"Homemade ice cream with wafer\\u00A0\",\r\n                    react_1.default.createElement(vegetarian_1.Vegetarian, null))))));\r\n}\r\nexports.FoodMenusPage = FoodMenusPage;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/food-menus-page.tsx?");

/***/ }),

/***/ "./src/scripts/components/home-page.tsx":
/*!**********************************************!*\
  !*** ./src/scripts/components/home-page.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar invite_id_form_1 = __webpack_require__(/*! ./home-page/invite-id-form */ \"./src/scripts/components/home-page/invite-id-form.tsx\");\r\nvar all_daisies_ds_cropped_png_1 = __importDefault(__webpack_require__(/*! ../../images/all-daisies-ds-cropped.png */ \"./src/images/all-daisies-ds-cropped.png\"));\r\nfunction HomePage() {\r\n    return (react_1.default.createElement(\"div\", { id: \"home-page\" },\r\n        react_1.default.createElement(\"img\", { id: \"home-banner-img\", src: all_daisies_ds_cropped_png_1.default }),\r\n        react_1.default.createElement(\"div\", { id: \"invite-id-form-wrapper\" },\r\n            react_1.default.createElement(invite_id_form_1.InviteIdForm, null))));\r\n}\r\nexports.HomePage = HomePage;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/home-page.tsx?");

/***/ }),

/***/ "./src/scripts/components/home-page/invite-id-form.tsx":
/*!*************************************************************!*\
  !*** ./src/scripts/components/home-page/invite-id-form.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\r\nvar react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\r\nvar local_storage_1 = __webpack_require__(/*! ../../utilities/local-storage */ \"./src/scripts/utilities/local-storage.ts\");\r\nvar service_1 = __webpack_require__(/*! ../../utilities/service */ \"./src/scripts/utilities/service.ts\");\r\nvar InviteIdForm = (function (_super) {\r\n    __extends(InviteIdForm, _super);\r\n    function InviteIdForm(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.handleSubmit = _this.handleSubmit.bind(_this);\r\n        _this.handleChange = _this.handleChange.bind(_this);\r\n        _this.state = {\r\n            inviteId: \"\",\r\n            failed: false,\r\n            saving: false,\r\n            saved: false,\r\n        };\r\n        return _this;\r\n    }\r\n    InviteIdForm.prototype.componentDidMount = function () {\r\n        var inviteId = local_storage_1.getInviteId();\r\n        this.setState({\r\n            inviteId: inviteId,\r\n        });\r\n    };\r\n    InviteIdForm.prototype.render = function () {\r\n        if (this.state.saved) {\r\n            return (react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/rsvp\" }));\r\n        }\r\n        else {\r\n            return (react_1.default.createElement(\"form\", { id: \"invite-id-form\", onSubmit: this.handleSubmit },\r\n                react_1.default.createElement(\"header\", { id: \"invite-id-header\" }, \"Send RSVP\"),\r\n                react_1.default.createElement(\"div\", { hidden: !this.state.failed, id: \"invite-id-error\" },\r\n                    \"Sorry, we couldn't find that RSVP code\",\r\n                    react_1.default.createElement(\"br\", null),\r\n                    \"Please try again\"),\r\n                react_1.default.createElement(\"input\", { id: \"invite-id-input\", value: this.state.inviteId, name: \"inviteId\", type: \"text\", placeholder: \"Enter your RSVP code here...\", required: true, onChange: this.handleChange, \"data-lpignore\": \"true\" }),\r\n                react_1.default.createElement(\"button\", { id: \"invite-id-button\", type: \"submit\", disabled: this.state.saving }, this.state.saving\r\n                    ? react_1.default.createElement(react_1.default.Fragment, null,\r\n                        \"Loading\\u00A0\",\r\n                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: \"spinner\", pulse: true }))\r\n                    : react_1.default.createElement(react_1.default.Fragment, null,\r\n                        \"Continue\\u00A0\",\r\n                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: \"arrow-right\" })))));\r\n        }\r\n    };\r\n    InviteIdForm.prototype.handleChange = function (event) {\r\n        this.setState({\r\n            inviteId: event.target.value,\r\n        });\r\n    };\r\n    InviteIdForm.prototype.handleSubmit = function (event) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var inviteId, isValid;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        event.preventDefault();\r\n                        this.setState({\r\n                            failed: false,\r\n                            saving: true,\r\n                            saved: false,\r\n                        });\r\n                        inviteId = this.state.inviteId.replace(/\\s/, \"\").toLocaleUpperCase();\r\n                        return [4, service_1.validateInviteId(inviteId)];\r\n                    case 1:\r\n                        isValid = _a.sent();\r\n                        if (isValid) {\r\n                            local_storage_1.storeInviteId(inviteId);\r\n                            this.setState({\r\n                                failed: false,\r\n                                saving: false,\r\n                                saved: true,\r\n                            });\r\n                        }\r\n                        else {\r\n                            this.setState({\r\n                                failed: true,\r\n                                saving: false,\r\n                                saved: false,\r\n                            });\r\n                        }\r\n                        return [2];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return InviteIdForm;\r\n}(react_1.Component));\r\nexports.InviteIdForm = InviteIdForm;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/home-page/invite-id-form.tsx?");

/***/ }),

/***/ "./src/scripts/components/location-page.tsx":
/*!**************************************************!*\
  !*** ./src/scripts/components/location-page.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar daisy_chain_ds_h_png_1 = __importDefault(__webpack_require__(/*! ../../images/daisy-chain-ds-h.png */ \"./src/images/daisy-chain-ds-h.png\"));\r\nfunction LocationPage() {\r\n    return (react_1.default.createElement(\"div\", { id: \"location-page\" },\r\n        react_1.default.createElement(\"h1\", null, \"Location\"),\r\n        react_1.default.createElement(\"p\", null, \"More information coming soon\"),\r\n        react_1.default.createElement(\"img\", { src: daisy_chain_ds_h_png_1.default })));\r\n}\r\nexports.LocationPage = LocationPage;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/location-page.tsx?");

/***/ }),

/***/ "./src/scripts/components/order-of-the-day-page.tsx":
/*!**********************************************************!*\
  !*** ./src/scripts/components/order-of-the-day-page.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar daisy_chain_ds_h_png_1 = __importDefault(__webpack_require__(/*! ../../images/daisy-chain-ds-h.png */ \"./src/images/daisy-chain-ds-h.png\"));\r\nfunction OrderOfTheDayPage() {\r\n    return (react_1.default.createElement(\"div\", { id: \"order-of-the-day-page\" },\r\n        react_1.default.createElement(\"h1\", null, \"Order Of The Day\"),\r\n        react_1.default.createElement(\"p\", null, \"More information coming soon\"),\r\n        react_1.default.createElement(\"img\", { src: daisy_chain_ds_h_png_1.default })));\r\n}\r\nexports.OrderOfTheDayPage = OrderOfTheDayPage;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/order-of-the-day-page.tsx?");

/***/ }),

/***/ "./src/scripts/components/root.tsx":
/*!*****************************************!*\
  !*** ./src/scripts/components/root.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\r\nvar food_menus_page_1 = __webpack_require__(/*! ./food-menus-page */ \"./src/scripts/components/food-menus-page.tsx\");\r\nvar home_page_1 = __webpack_require__(/*! ./home-page */ \"./src/scripts/components/home-page.tsx\");\r\nvar location_page_1 = __webpack_require__(/*! ./location-page */ \"./src/scripts/components/location-page.tsx\");\r\nvar order_of_the_day_page_1 = __webpack_require__(/*! ./order-of-the-day-page */ \"./src/scripts/components/order-of-the-day-page.tsx\");\r\nvar rsvp_page_1 = __webpack_require__(/*! ./rsvp-page */ \"./src/scripts/components/rsvp-page.tsx\");\r\nvar nav_1 = __webpack_require__(/*! ./shared/nav */ \"./src/scripts/components/shared/nav.tsx\");\r\nfunction Root() {\r\n    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n        react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(nav_1.Nav, null),\r\n            react_1.default.createElement(\"main\", { id: \"site-content\" },\r\n                react_1.default.createElement(react_router_dom_1.Switch, null,\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", exact: true, component: home_page_1.HomePage }),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/rsvp\", component: rsvp_page_1.RsvpPage }),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/order-of-the-day\", component: order_of_the_day_page_1.OrderOfTheDayPage }),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/food-menus\", component: food_menus_page_1.FoodMenusPage }),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/location\", component: location_page_1.LocationPage }),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { component: home_page_1.HomePage }))))));\r\n}\r\nexports.Root = Root;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/root.tsx?");

/***/ }),

/***/ "./src/scripts/components/rsvp-page.tsx":
/*!**********************************************!*\
  !*** ./src/scripts/components/rsvp-page.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar rsvp_form_1 = __webpack_require__(/*! ./rsvp-page/rsvp-form */ \"./src/scripts/components/rsvp-page/rsvp-form.tsx\");\r\nfunction RsvpPage() {\r\n    return (react_1.default.createElement(\"div\", { id: \"rsvp-page\" },\r\n        react_1.default.createElement(rsvp_form_1.RsvpForm, null)));\r\n}\r\nexports.RsvpPage = RsvpPage;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/rsvp-page.tsx?");

/***/ }),

/***/ "./src/scripts/components/rsvp-page/attending-field.tsx":
/*!**************************************************************!*\
  !*** ./src/scripts/components/rsvp-page/attending-field.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar radios_1 = __webpack_require__(/*! ./radios */ \"./src/scripts/components/rsvp-page/radios.tsx\");\r\nfunction AttendingField(_a) {\r\n    var firstName = _a.firstName, inviteType = _a.inviteType, value = _a.value, onChange = _a.onChange;\r\n    var message = inviteType === \"Day\"\r\n        ? \"You are invited to join us on our special day\"\r\n        : \"You are invited to join us on our special day at the evening reception\";\r\n    var radios = inviteType === \"Day\"\r\n        ?\r\n            [\r\n                { label: \"Attending day & evening\", value: \"Day\" },\r\n                { label: \"Attending evening only\", value: \"Evening\" },\r\n                { label: \"Not attending\", value: \"NotAttending\" },\r\n            ]\r\n        :\r\n            [\r\n                { label: \"Attending\", value: \"Evening\" },\r\n                { label: \"Not attending\", value: \"NotAttending\" },\r\n            ];\r\n    return (react_1.default.createElement(radios_1.Radios, { name: firstName + \"-attending\", mainLabel: message, radios: radios, value: value, onChange: onChange }));\r\n}\r\nexports.AttendingField = AttendingField;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/rsvp-page/attending-field.tsx?");

/***/ }),

/***/ "./src/scripts/components/rsvp-page/dessert-field.tsx":
/*!************************************************************!*\
  !*** ./src/scripts/components/rsvp-page/dessert-field.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar vegetarian_1 = __webpack_require__(/*! ../shared/vegetarian */ \"./src/scripts/components/shared/vegetarian.tsx\");\r\nvar radios_1 = __webpack_require__(/*! ./radios */ \"./src/scripts/components/rsvp-page/radios.tsx\");\r\nfunction DessertField(_a) {\r\n    var value = _a.value, onChange = _a.onChange, firstName = _a.firstName, _b = _a.disabled, disabled = _b === void 0 ? false : _b;\r\n    var radios = [\r\n        {\r\n            label: (react_1.default.createElement(react_1.default.Fragment, null,\r\n                \"Eton mess\\u00A0\",\r\n                react_1.default.createElement(vegetarian_1.Vegetarian, null))),\r\n            value: \"EtonMess\",\r\n        },\r\n        {\r\n            label: (react_1.default.createElement(react_1.default.Fragment, null,\r\n                \"Chocolate brownie\\u00A0\",\r\n                react_1.default.createElement(vegetarian_1.Vegetarian, null))),\r\n            value: \"ChocolateBrownie\",\r\n        },\r\n    ];\r\n    return (react_1.default.createElement(radios_1.Radios, { name: firstName + \"-dessert\", mainLabel: \"Dessert\", disabled: disabled, radios: radios, value: value, onChange: onChange }));\r\n}\r\nexports.DessertField = DessertField;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/rsvp-page/dessert-field.tsx?");

/***/ }),

/***/ "./src/scripts/components/rsvp-page/dietary-requirement-field.tsx":
/*!************************************************************************!*\
  !*** ./src/scripts/components/rsvp-page/dietary-requirement-field.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction DietaryRequirementField(_a) {\r\n    var age = _a.age, attending = _a.attending, value = _a.value, onChange = _a.onChange;\r\n    console.dir(attending);\r\n    if (attending === null || attending === \"NotAttending\" || age === \"Infant\") {\r\n        return react_1.default.createElement(react_1.default.Fragment, null);\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: \"guest-field\" },\r\n        react_1.default.createElement(\"label\", null,\r\n            \"Dietary requirements\",\r\n            react_1.default.createElement(\"input\", { type: \"text\", maxLength: 280, value: value, onChange: function (e) { return onChange(e.target.value); }, \"data-lpignore\": \"true\" }))));\r\n}\r\nexports.DietaryRequirementField = DietaryRequirementField;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/rsvp-page/dietary-requirement-field.tsx?");

/***/ }),

/***/ "./src/scripts/components/rsvp-page/drinks-preference.tsx":
/*!****************************************************************!*\
  !*** ./src/scripts/components/rsvp-page/drinks-preference.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction DrinksPreferenceFields(_a) {\r\n    var firstName = _a.firstName, age = _a.age, attending = _a.attending, inviteType = _a.inviteType, drinkPreferenceRed = _a.drinkPreferenceRed, drinkPreferenceWhite = _a.drinkPreferenceWhite, drinkPreferenceRose = _a.drinkPreferenceRose, onDrinkPreferenceWhiteChange = _a.onDrinkPreferenceWhiteChange, onDrinkPreferenceRoseChange = _a.onDrinkPreferenceRoseChange, onDrinkPreferenceRedChange = _a.onDrinkPreferenceRedChange;\r\n    if (attending !== \"Day\" || inviteType === \"Evening\" || age !== \"Adult\") {\r\n        return react_1.default.createElement(react_1.default.Fragment, null);\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: \"guest-field\" },\r\n        react_1.default.createElement(\"label\", null, \"Drinks preference\"),\r\n        react_1.default.createElement(\"div\", { className: \"guest-field-check-boxes\" },\r\n            react_1.default.createElement(\"label\", { className: \"checkbox-label\" },\r\n                react_1.default.createElement(\"input\", { name: firstName + \"-drinks-preference\", type: \"checkbox\", checked: drinkPreferenceRed, onChange: function (e) { return onDrinkPreferenceRedChange(e.target.checked); } }),\r\n                \"Red wine\"),\r\n            react_1.default.createElement(\"label\", { className: \"checkbox-label\" },\r\n                react_1.default.createElement(\"input\", { name: firstName + \"-drinks-preference\", type: \"checkbox\", checked: drinkPreferenceWhite, onChange: function (e) { return onDrinkPreferenceWhiteChange(e.target.checked); } }),\r\n                \"White wine\"),\r\n            react_1.default.createElement(\"label\", { className: \"checkbox-label\" },\r\n                react_1.default.createElement(\"input\", { name: firstName + \"-drinks-preference\", type: \"checkbox\", checked: drinkPreferenceRose, onChange: function (e) { return onDrinkPreferenceRoseChange(e.target.checked); } }),\r\n                \"Rose wine\"))));\r\n}\r\nexports.DrinksPreferenceFields = DrinksPreferenceFields;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/rsvp-page/drinks-preference.tsx?");

/***/ }),

/***/ "./src/scripts/components/rsvp-page/guest-fields.tsx":
/*!***********************************************************!*\
  !*** ./src/scripts/components/rsvp-page/guest-fields.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\r\nvar attending_field_1 = __webpack_require__(/*! ./attending-field */ \"./src/scripts/components/rsvp-page/attending-field.tsx\");\r\nvar dietary_requirement_field_1 = __webpack_require__(/*! ./dietary-requirement-field */ \"./src/scripts/components/rsvp-page/dietary-requirement-field.tsx\");\r\nvar drinks_preference_1 = __webpack_require__(/*! ./drinks-preference */ \"./src/scripts/components/rsvp-page/drinks-preference.tsx\");\r\nvar meal_fields_1 = __webpack_require__(/*! ./meal-fields */ \"./src/scripts/components/rsvp-page/meal-fields.tsx\");\r\nvar song_request_field_1 = __webpack_require__(/*! ./song-request-field */ \"./src/scripts/components/rsvp-page/song-request-field.tsx\");\r\nfunction GuestFields(_a) {\r\n    var values = _a.guest, onChange = _a.onChange;\r\n    return (react_1.default.createElement(\"div\", { className: \"guest\" },\r\n        react_1.default.createElement(\"header\", { className: \"guest-header\" },\r\n            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: \"user\" }),\r\n            \"\\u00A0\",\r\n            values.firstName),\r\n        react_1.default.createElement(\"div\", { className: \"guest-fields\" },\r\n            react_1.default.createElement(attending_field_1.AttendingField, { firstName: values.firstName, inviteType: values.inviteType, value: values.attending, onChange: function (attending) { return onChange(__assign({}, values, { attending: attending })); } }),\r\n            react_1.default.createElement(meal_fields_1.MealFields, { firstName: values.firstName, age: values.age, attending: values.attending, inviteType: values.inviteType, isChildSetMenu: values.isChildSetMenu, starter: values.starter, main: values.main, dessert: values.dessert, onStarterChange: function (starter) { return onChange(__assign({}, values, { starter: starter })); }, onMainChange: function (main) { return onChange(__assign({}, values, { main: main })); }, onDessertChange: function (dessert) { return onChange(__assign({}, values, { dessert: dessert })); }, onIsChildSetMenuChange: function (isChildSetMenu) { return onChange(__assign({}, values, { isChildSetMenu: isChildSetMenu })); } }),\r\n            react_1.default.createElement(drinks_preference_1.DrinksPreferenceFields, { firstName: values.firstName, age: values.age, attending: values.attending, inviteType: values.inviteType, drinkPreferenceRed: values.drinkPreferenceRed, drinkPreferenceWhite: values.drinkPreferenceWhite, drinkPreferenceRose: values.drinkPreferenceRose, onDrinkPreferenceRedChange: function (drinkPreferenceRed) {\r\n                    return onChange(__assign({}, values, { drinkPreferenceRed: drinkPreferenceRed }));\r\n                }, onDrinkPreferenceWhiteChange: function (drinkPreferenceWhite) {\r\n                    return onChange(__assign({}, values, { drinkPreferenceWhite: drinkPreferenceWhite }));\r\n                }, onDrinkPreferenceRoseChange: function (drinkPreferenceRose) {\r\n                    return onChange(__assign({}, values, { drinkPreferenceRose: drinkPreferenceRose }));\r\n                } }),\r\n            react_1.default.createElement(dietary_requirement_field_1.DietaryRequirementField, { age: values.age, attending: values.attending, value: values.dietaryRequirements, onChange: function (dietaryRequirements) { return onChange(__assign({}, values, { dietaryRequirements: dietaryRequirements })); } }),\r\n            react_1.default.createElement(song_request_field_1.SongRequestField, { age: values.age, attending: values.attending, value: values.songRequest, onChange: function (songRequest) { return onChange(__assign({}, values, { songRequest: songRequest })); } }))));\r\n}\r\nexports.GuestFields = GuestFields;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/rsvp-page/guest-fields.tsx?");

/***/ }),

/***/ "./src/scripts/components/rsvp-page/main-field.tsx":
/*!*********************************************************!*\
  !*** ./src/scripts/components/rsvp-page/main-field.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar vegetarian_1 = __webpack_require__(/*! ../shared/vegetarian */ \"./src/scripts/components/shared/vegetarian.tsx\");\r\nvar radios_1 = __webpack_require__(/*! ./radios */ \"./src/scripts/components/rsvp-page/radios.tsx\");\r\nfunction MainField(_a) {\r\n    var value = _a.value, onChange = _a.onChange, firstName = _a.firstName, _b = _a.disabled, disabled = _b === void 0 ? false : _b;\r\n    var radios = [\r\n        { label: \"Cod and chips\", value: \"CodAndChips\" },\r\n        { label: \"Hunter's chicken\", value: \"HuntersChicken\" },\r\n        {\r\n            label: (react_1.default.createElement(react_1.default.Fragment, null,\r\n                \"Stuffed courgette\\u00A0\",\r\n                react_1.default.createElement(vegetarian_1.Vegetarian, null))),\r\n            value: \"StuffedCourgette\",\r\n        },\r\n    ];\r\n    return (react_1.default.createElement(radios_1.Radios, { name: firstName + \"-main\", mainLabel: \"Main\", disabled: disabled, value: value, radios: radios, onChange: onChange }));\r\n}\r\nexports.MainField = MainField;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/rsvp-page/main-field.tsx?");

/***/ }),

/***/ "./src/scripts/components/rsvp-page/meal-fields.tsx":
/*!**********************************************************!*\
  !*** ./src/scripts/components/rsvp-page/meal-fields.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\r\nvar vegetarian_1 = __webpack_require__(/*! ../shared/vegetarian */ \"./src/scripts/components/shared/vegetarian.tsx\");\r\nvar dessert_field_1 = __webpack_require__(/*! ./dessert-field */ \"./src/scripts/components/rsvp-page/dessert-field.tsx\");\r\nvar main_field_1 = __webpack_require__(/*! ./main-field */ \"./src/scripts/components/rsvp-page/main-field.tsx\");\r\nvar starter_field_1 = __webpack_require__(/*! ./starter-field */ \"./src/scripts/components/rsvp-page/starter-field.tsx\");\r\nfunction MealFields(_a) {\r\n    var firstName = _a.firstName, age = _a.age, attending = _a.attending, inviteType = _a.inviteType, isChildSetMenu = _a.isChildSetMenu, starter = _a.starter, main = _a.main, dessert = _a.dessert, onStarterChange = _a.onStarterChange, onMainChange = _a.onMainChange, onDessertChange = _a.onDessertChange, onIsChildSetMenuChange = _a.onIsChildSetMenuChange;\r\n    if (attending !== \"Day\" || inviteType === \"Evening\" || age === \"Infant\") {\r\n        return react_1.default.createElement(react_1.default.Fragment, null);\r\n    }\r\n    var handleIsChildSetMenuChangeTrue = function (e) {\r\n        if (!isChildSetMenu) {\r\n            e.preventDefault();\r\n            onIsChildSetMenuChange(true);\r\n        }\r\n    };\r\n    var handleIsChildSetMenuChangeFalse = function (e) {\r\n        if (isChildSetMenu) {\r\n            e.preventDefault();\r\n            onIsChildSetMenuChange(false);\r\n        }\r\n    };\r\n    var adultMenuClass = !isChildSetMenu\r\n        ? \"guest-meal-menu-selected\"\r\n        : \"guest-meal-menu-unselected\";\r\n    var childMenuClass = isChildSetMenu\r\n        ? \"guest-meal-menu-selected\"\r\n        : \"guest-meal-menu-unselected\";\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: \"guest-field\" },\r\n            react_1.default.createElement(\"label\", { className: \"hint\" },\r\n                \"You can order either from the adult menu, or you can order the child set menu. Click \",\r\n                react_1.default.createElement(react_router_dom_1.Link, { to: \"/food-menu\", target: \"_BLANK\" },\r\n                    \"here\\u00A0\",\r\n                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: \"external-link-alt\" })),\r\n                \" to see the menus in full.\")),\r\n        react_1.default.createElement(\"div\", { className: \"guest-meal-menus\" },\r\n            react_1.default.createElement(\"div\", { className: \"guest-meal-menu \" + adultMenuClass, onClick: handleIsChildSetMenuChangeFalse },\r\n                react_1.default.createElement(\"header\", { className: \"guest-meal-menu-header\" },\r\n                    \"Adult's Menu\\u00A0\",\r\n                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: \"check-circle\" })),\r\n                react_1.default.createElement(\"div\", { className: \"guest-meal-menu-selected-indicator\" },\r\n                    react_1.default.createElement(\"div\", { className: \"chevron\" })),\r\n                react_1.default.createElement(\"div\", { className: \"guest-meal-menu-fields\" },\r\n                    react_1.default.createElement(\"label\", { className: \"hint\" }, \"Children can still order from this menu and they will get child sized portions\"),\r\n                    react_1.default.createElement(starter_field_1.StarterField, { value: starter, firstName: firstName, disabled: isChildSetMenu, onChange: onStarterChange }),\r\n                    react_1.default.createElement(main_field_1.MainField, { value: main, firstName: firstName, disabled: isChildSetMenu, onChange: onMainChange }),\r\n                    react_1.default.createElement(dessert_field_1.DessertField, { value: dessert, firstName: firstName, disabled: isChildSetMenu, onChange: onDessertChange }))),\r\n            react_1.default.createElement(\"div\", { className: \"guest-meal-menu \" + childMenuClass, onClick: handleIsChildSetMenuChangeTrue },\r\n                react_1.default.createElement(\"header\", { className: \"guest-meal-menu-header\" },\r\n                    \"Child's Menu\\u00A0\",\r\n                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: \"check-circle\" })),\r\n                react_1.default.createElement(\"div\", { className: \"guest-meal-menu-selected-indicator\" },\r\n                    react_1.default.createElement(\"div\", { className: \"chevron\" })),\r\n                react_1.default.createElement(\"div\", { className: \"guest-meal-menu-fields\" },\r\n                    react_1.default.createElement(\"label\", { className: \"hint\" }, \"Adults can still order from this menu and they will get adult sized portions\"),\r\n                    react_1.default.createElement(\"div\", { className: \"guest-meal-menu-child-field\" },\r\n                        react_1.default.createElement(\"div\", { className: \"guest-meal-menu-child-field-label\" }, \"Starter\"),\r\n                        react_1.default.createElement(\"div\", { className: \"guest-meal-menu-child-field-value\" },\r\n                            \"Cheesey bread\\u00A0\",\r\n                            react_1.default.createElement(vegetarian_1.Vegetarian, null))),\r\n                    react_1.default.createElement(\"div\", { className: \"guest-meal-menu-child-field\" },\r\n                        react_1.default.createElement(\"div\", { className: \"guest-meal-menu-child-field-label\" }, \"Main\"),\r\n                        react_1.default.createElement(\"div\", { className: \"guest-meal-menu-child-field-value\" }, \"Chicken goujons\")),\r\n                    react_1.default.createElement(\"div\", { className: \"guest-meal-menu-child-field\" },\r\n                        react_1.default.createElement(\"div\", { className: \"guest-meal-menu-child-field-label\" }, \"Dessert\"),\r\n                        react_1.default.createElement(\"div\", { className: \"guest-meal-menu-child-field-value\" },\r\n                            \"Ice cream\\u00A0\",\r\n                            react_1.default.createElement(vegetarian_1.Vegetarian, null))))))));\r\n}\r\nexports.MealFields = MealFields;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/rsvp-page/meal-fields.tsx?");

/***/ }),

/***/ "./src/scripts/components/rsvp-page/radios.tsx":
/*!*****************************************************!*\
  !*** ./src/scripts/components/rsvp-page/radios.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Radios = (function (_super) {\r\n    __extends(Radios, _super);\r\n    function Radios(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.handleChange = _this.handleChange.bind(_this);\r\n        return _this;\r\n    }\r\n    Radios.prototype.render = function () {\r\n        var _this = this;\r\n        return (react_1.default.createElement(\"div\", { className: \"guest-field\" },\r\n            react_1.default.createElement(\"label\", null, this.props.mainLabel),\r\n            react_1.default.createElement(\"div\", { className: \"guest-field-radios\" }, this.props.radios.map(function (_a) {\r\n                var label = _a.label, value = _a.value;\r\n                return (react_1.default.createElement(\"label\", { key: value },\r\n                    react_1.default.createElement(\"input\", { name: _this.props.name, type: \"radio\", disabled: _this.props.disabled === true, required: _this.props.required !== false, value: value, checked: _this.props.value === value, onChange: _this.handleChange }),\r\n                    label));\r\n            }))));\r\n    };\r\n    Radios.prototype.handleChange = function (event) {\r\n        var newValue = event.target.value;\r\n        this.props.onChange(newValue);\r\n    };\r\n    return Radios;\r\n}(react_1.Component));\r\nexports.Radios = Radios;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/rsvp-page/radios.tsx?");

/***/ }),

/***/ "./src/scripts/components/rsvp-page/rsvp-form.tsx":
/*!********************************************************!*\
  !*** ./src/scripts/components/rsvp-page/rsvp-form.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\r\nvar local_storage_1 = __webpack_require__(/*! ../../utilities/local-storage */ \"./src/scripts/utilities/local-storage.ts\");\r\nvar mapper_1 = __webpack_require__(/*! ../../utilities/mapper */ \"./src/scripts/utilities/mapper.ts\");\r\nvar service_1 = __webpack_require__(/*! ../../utilities/service */ \"./src/scripts/utilities/service.ts\");\r\nvar guest_fields_1 = __webpack_require__(/*! ./guest-fields */ \"./src/scripts/components/rsvp-page/guest-fields.tsx\");\r\nvar daisy_chain_ds_h_png_1 = __importDefault(__webpack_require__(/*! ../../../images/daisy-chain-ds-h.png */ \"./src/images/daisy-chain-ds-h.png\"));\r\nvar long_stem_and_leaves_ds_h_png_1 = __importDefault(__webpack_require__(/*! ../../../images/long-stem-and-leaves-ds-h.png */ \"./src/images/long-stem-and-leaves-ds-h.png\"));\r\nvar RsvpForm = (function (_super) {\r\n    __extends(RsvpForm, _super);\r\n    function RsvpForm(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.handleGuestChange = _this.handleGuestChange.bind(_this);\r\n        _this.handleSubmit = _this.handleSubmit.bind(_this);\r\n        _this.state = {\r\n            rsvp: null,\r\n            loading: true,\r\n            saving: false,\r\n            saved: false,\r\n        };\r\n        return _this;\r\n    }\r\n    RsvpForm.prototype.componentDidMount = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var inviteId, inviteDto, rsvp;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        inviteId = local_storage_1.getInviteId();\r\n                        return [4, service_1.getInvite(inviteId)];\r\n                    case 1:\r\n                        inviteDto = _a.sent();\r\n                        rsvp = mapper_1.mapDto(inviteDto);\r\n                        this.setState({\r\n                            rsvp: rsvp,\r\n                            loading: false,\r\n                            saving: false,\r\n                            saved: false,\r\n                        });\r\n                        return [2];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    RsvpForm.prototype.render = function () {\r\n        var _this = this;\r\n        if (this.state.saved) {\r\n            return (react_1.default.createElement(\"div\", { id: \"rsvp-form-finished\" },\r\n                react_1.default.createElement(\"img\", { src: daisy_chain_ds_h_png_1.default }),\r\n                react_1.default.createElement(\"p\", null, \"Thanks for sending us your reply.\"),\r\n                react_1.default.createElement(\"p\", null,\r\n                    \"Click \",\r\n                    react_1.default.createElement(react_router_dom_1.Link, { to: \"/\" }, \" here\"),\r\n                    \" to go back to the home page.\"),\r\n                react_1.default.createElement(\"img\", { src: daisy_chain_ds_h_png_1.default })));\r\n        }\r\n        else if (this.state.loading) {\r\n            return (react_1.default.createElement(\"div\", { id: \"rsvp-form-loading\" },\r\n                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: \"spinner\", pulse: true })));\r\n        }\r\n        else {\r\n            return (react_1.default.createElement(\"form\", { id: \"rsvp-form\", onSubmit: this.handleSubmit },\r\n                this.state.rsvp.guests.map(function (guest) {\r\n                    return react_1.default.createElement(\"div\", { key: guest.firstName },\r\n                        react_1.default.createElement(\"img\", { className: \"guest-separator\", src: long_stem_and_leaves_ds_h_png_1.default }),\r\n                        react_1.default.createElement(guest_fields_1.GuestFields, { guest: guest, onChange: _this.handleGuestChange }));\r\n                }),\r\n                react_1.default.createElement(\"img\", { className: \"guest-separator\", src: long_stem_and_leaves_ds_h_png_1.default }),\r\n                react_1.default.createElement(\"div\", { id: \"rsvp-form-submit\" },\r\n                    react_1.default.createElement(\"button\", { id: \"rsvp-form-submit-button\", type: \"submit\", disabled: this.state.saving }, this.state.saving ? \"Loading\" : \"Submit\"))));\r\n        }\r\n    };\r\n    RsvpForm.prototype.handleGuestChange = function (newGuestModel) {\r\n        var guestsCopy = this.state.rsvp.guests.slice();\r\n        var indexToReplace = guestsCopy.findIndex(function (guestModel) {\r\n            return guestModel.firstName === newGuestModel.firstName;\r\n        });\r\n        guestsCopy[indexToReplace] = newGuestModel;\r\n        this.setState({\r\n            rsvp: {\r\n                guests: guestsCopy,\r\n            },\r\n        });\r\n    };\r\n    RsvpForm.prototype.handleSubmit = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var rsvpDto;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        this.setState({\r\n                            saving: true,\r\n                        });\r\n                        rsvpDto = mapper_1.mapForm(this.state.rsvp);\r\n                        return [4, service_1.sendRsvp(rsvpDto)];\r\n                    case 1:\r\n                        _a.sent();\r\n                        this.setState({\r\n                            saving: false,\r\n                            saved: true,\r\n                        });\r\n                        return [2];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return RsvpForm;\r\n}(react_1.Component));\r\nexports.RsvpForm = RsvpForm;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/rsvp-page/rsvp-form.tsx?");

/***/ }),

/***/ "./src/scripts/components/rsvp-page/song-request-field.tsx":
/*!*****************************************************************!*\
  !*** ./src/scripts/components/rsvp-page/song-request-field.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction SongRequestField(_a) {\r\n    var age = _a.age, attending = _a.attending, value = _a.value, onChange = _a.onChange;\r\n    if (attending === null || attending === \"NotAttending\" || age === \"Infant\") {\r\n        return react_1.default.createElement(react_1.default.Fragment, null);\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: \"guest-field\" },\r\n        react_1.default.createElement(\"label\", null,\r\n            \"Song request\",\r\n            react_1.default.createElement(\"input\", { type: \"text\", maxLength: 280, value: value, onChange: function (e) { return onChange(e.target.value); }, \"data-lpignore\": \"true\" }))));\r\n}\r\nexports.SongRequestField = SongRequestField;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/rsvp-page/song-request-field.tsx?");

/***/ }),

/***/ "./src/scripts/components/rsvp-page/starter-field.tsx":
/*!************************************************************!*\
  !*** ./src/scripts/components/rsvp-page/starter-field.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar radios_1 = __webpack_require__(/*! ./radios */ \"./src/scripts/components/rsvp-page/radios.tsx\");\r\nfunction StarterField(_a) {\r\n    var value = _a.value, onChange = _a.onChange, firstName = _a.firstName, _b = _a.disabled, disabled = _b === void 0 ? false : _b;\r\n    var radios = [\r\n        { label: \"Prawn cocktail\", value: \"PrawnCocktail\" },\r\n        { label: \"Asparagus in Parma ham\", value: \"Asparagus\" },\r\n    ];\r\n    return (react_1.default.createElement(radios_1.Radios, { name: firstName + \"-starter\", mainLabel: \"Starter\", disabled: disabled, value: value, radios: radios, onChange: onChange }));\r\n}\r\nexports.StarterField = StarterField;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/rsvp-page/starter-field.tsx?");

/***/ }),

/***/ "./src/scripts/components/shared/nav.tsx":
/*!***********************************************!*\
  !*** ./src/scripts/components/shared/nav.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\r\nvar corner_daisy_ds_png_1 = __importDefault(__webpack_require__(/*! ../../../images/corner-daisy-ds.png */ \"./src/images/corner-daisy-ds.png\"));\r\nvar Nav = (function (_super) {\r\n    __extends(Nav, _super);\r\n    function Nav(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.handleMobileToggle = _this.handleMobileToggle.bind(_this);\r\n        _this.handleMobileNavClickToggle = _this.handleMobileNavClickToggle.bind(_this);\r\n        _this.state = {\r\n            isMobileMenuOpen: false,\r\n        };\r\n        return _this;\r\n    }\r\n    Nav.prototype.render = function () {\r\n        return (react_1.default.createElement(\"header\", { id: \"site-header\" },\r\n            react_1.default.createElement(\"div\", { id: \"site-title\" },\r\n                react_1.default.createElement(react_router_dom_1.Link, { onClick: this.handleMobileNavClickToggle, id: \"site-title-link\", to: \"/\" },\r\n                    react_1.default.createElement(\"img\", { id: \"site-title-link-img\", src: corner_daisy_ds_png_1.default }),\r\n                    react_1.default.createElement(\"div\", { id: \"site-title-link-text\" }, \"Fowler Hooley Wedding\")),\r\n                react_1.default.createElement(\"div\", { id: \"site-nav-button-wrapper\" },\r\n                    react_1.default.createElement(\"button\", { id: \"site-nav-button\", type: \"button\", onClick: this.handleMobileToggle },\r\n                        react_1.default.createElement(\"span\", { className: \"site-nav-item-text\" },\r\n                            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: \"bars\" }))))),\r\n            react_1.default.createElement(\"nav\", { id: \"site-nav\", className: this.state.isMobileMenuOpen ? \"site-nav-open\" : \"\" },\r\n                react_1.default.createElement(react_router_dom_1.NavLink, { onClick: this.handleMobileNavClickToggle, className: \"site-nav-item\", activeClassName: \"site-nav-item-active\", to: \"/order-of-the-day\" },\r\n                    react_1.default.createElement(\"span\", { className: \"site-nav-item-text\" }, \"Order of the day\")),\r\n                react_1.default.createElement(react_router_dom_1.NavLink, { onClick: this.handleMobileNavClickToggle, className: \"site-nav-item\", activeClassName: \"site-nav-item-active\", to: \"/food-menus\" },\r\n                    react_1.default.createElement(\"span\", { className: \"site-nav-item-text\" }, \"Food menu\")),\r\n                react_1.default.createElement(react_router_dom_1.NavLink, { onClick: this.handleMobileNavClickToggle, className: \"site-nav-item\", activeClassName: \"site-nav-item-active\", to: \"/location\" },\r\n                    react_1.default.createElement(\"span\", { className: \"site-nav-item-text\" }, \"Location\")))));\r\n    };\r\n    Nav.prototype.handleMobileToggle = function () {\r\n        this.setState({\r\n            isMobileMenuOpen: !this.state.isMobileMenuOpen,\r\n        });\r\n    };\r\n    Nav.prototype.handleMobileNavClickToggle = function () {\r\n        if (this.state.isMobileMenuOpen) {\r\n            this.setState({\r\n                isMobileMenuOpen: false,\r\n            });\r\n        }\r\n    };\r\n    return Nav;\r\n}(react_1.Component));\r\nexports.Nav = Nav;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/shared/nav.tsx?");

/***/ }),

/***/ "./src/scripts/components/shared/pescetarian.tsx":
/*!*******************************************************!*\
  !*** ./src/scripts/components/shared/pescetarian.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction Pescetarian() {\r\n    return (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { title: \"Suitable for pescetarians\", className: \"pescetarian\", icon: [\"fas\", \"fish\"] }));\r\n}\r\nexports.Pescetarian = Pescetarian;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/shared/pescetarian.tsx?");

/***/ }),

/***/ "./src/scripts/components/shared/vegetarian.tsx":
/*!******************************************************!*\
  !*** ./src/scripts/components/shared/vegetarian.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction Vegetarian() {\r\n    return (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { title: \"Suitable for vegetarians\", className: \"vegetarian\", icon: [\"fab\", \"vimeo-v\"] }));\r\n}\r\nexports.Vegetarian = Vegetarian;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/shared/vegetarian.tsx?");

/***/ }),

/***/ "./src/scripts/main.tsx":
/*!******************************!*\
  !*** ./src/scripts/main.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! ../styles/main */ \"./src/styles/main.scss\");\r\n__webpack_require__(/*! es6-shim */ \"./node_modules/es6-shim/es6-shim.js\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));\r\nvar root_1 = __webpack_require__(/*! ./components/root */ \"./src/scripts/components/root.tsx\");\r\nvar icons_1 = __webpack_require__(/*! ./utilities/icons */ \"./src/scripts/utilities/icons.ts\");\r\nicons_1.loadIcons();\r\nreact_dom_1.default.render(react_1.default.createElement(root_1.Root, null), document.getElementById(\"root\"));\r\n\n\n//# sourceURL=webpack:///./src/scripts/main.tsx?");

/***/ }),

/***/ "./src/scripts/utilities/config.ts":
/*!*****************************************!*\
  !*** ./src/scripts/utilities/config.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction getConfig() {\r\n    if (false) {}\r\n    else {\r\n        return {\r\n            serviceBaseUrl: \"http://localhost:7071\",\r\n            serviceGetInviteToken: \"\",\r\n            serviceSendRsvpToken: \"\",\r\n            serviceValidateInviteIdToken: \"\",\r\n        };\r\n    }\r\n}\r\nexports.getConfig = getConfig;\r\n\n\n//# sourceURL=webpack:///./src/scripts/utilities/config.ts?");

/***/ }),

/***/ "./src/scripts/utilities/icons.ts":
/*!****************************************!*\
  !*** ./src/scripts/utilities/icons.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar fontawesome_svg_core_1 = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\r\nvar free_brands_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\r\nvar free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\r\nfunction loadIcons() {\r\n    fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faArrowRight, free_solid_svg_icons_1.faBars, free_solid_svg_icons_1.faCheckCircle, free_solid_svg_icons_1.faExternalLinkAlt, free_solid_svg_icons_1.faFish, free_solid_svg_icons_1.faSpinner, free_solid_svg_icons_1.faUser, free_brands_svg_icons_1.faVimeoV);\r\n}\r\nexports.loadIcons = loadIcons;\r\n\n\n//# sourceURL=webpack:///./src/scripts/utilities/icons.ts?");

/***/ }),

/***/ "./src/scripts/utilities/local-storage.ts":
/*!************************************************!*\
  !*** ./src/scripts/utilities/local-storage.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar key = \"inviteId\";\r\nfunction getInviteId() {\r\n    return localStorage.getItem(key);\r\n}\r\nexports.getInviteId = getInviteId;\r\nfunction storeInviteId(inviteId) {\r\n    localStorage.setItem(key, inviteId);\r\n}\r\nexports.storeInviteId = storeInviteId;\r\n\n\n//# sourceURL=webpack:///./src/scripts/utilities/local-storage.ts?");

/***/ }),

/***/ "./src/scripts/utilities/mapper.ts":
/*!*****************************************!*\
  !*** ./src/scripts/utilities/mapper.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction mapDto(invite) {\r\n    var mapIsChildSetMenu = function (g) {\r\n        return g.starter === \"ChildSetMenu\" ||\r\n            g.main === \"ChildSetMenu\" ||\r\n            g.dessert === \"ChildSetMenu\";\r\n    };\r\n    var mapStarter = function (g) {\r\n        return g.starter === \"ChildSetMenu\" ? undefined : g.starter;\r\n    };\r\n    var mapMain = function (g) {\r\n        return g.main === \"ChildSetMenu\" ? undefined : g.main;\r\n    };\r\n    var mapDessert = function (g) {\r\n        return g.dessert === \"ChildSetMenu\" ? undefined : g.dessert;\r\n    };\r\n    return {\r\n        guests: invite.guests\r\n            .map(function (g) { return (__assign({}, g, { isChildSetMenu: mapIsChildSetMenu(g), starter: mapStarter(g), main: mapMain(g), dessert: mapDessert(g) })); })\r\n            .sort(function (a, b) {\r\n            if (a.firstName < b.firstName) {\r\n                return -1;\r\n            }\r\n            if (a.firstName > b.firstName) {\r\n                return 1;\r\n            }\r\n            return 0;\r\n        })\r\n            .sort(function (a, b) {\r\n            function mapAgeToInt(age) {\r\n                if (age === \"Infant\") {\r\n                    return 3;\r\n                }\r\n                if (age === \"Child\") {\r\n                    return 2;\r\n                }\r\n                if (age === \"YoungAdult\") {\r\n                    return 1;\r\n                }\r\n                if (age === \"Adult\") {\r\n                    return 0;\r\n                }\r\n            }\r\n            return mapAgeToInt(a.age) - mapAgeToInt(b.age);\r\n        }),\r\n    };\r\n}\r\nexports.mapDto = mapDto;\r\nfunction mapForm(form) {\r\n    var mapStarter = function (g) {\r\n        return g.isChildSetMenu ? \"ChildSetMenu\" : g.starter;\r\n    };\r\n    var mapMain = function (g) {\r\n        return g.isChildSetMenu ? \"ChildSetMenu\" : g.main;\r\n    };\r\n    var mapDessert = function (g) {\r\n        return g.isChildSetMenu ? \"ChildSetMenu\" : g.dessert;\r\n    };\r\n    var mapDrinkPreferenceRed = function (g) {\r\n        return g.drinkPreferenceRed === null || g.drinkPreferenceRed === undefined\r\n            ? false\r\n            : g.drinkPreferenceRed;\r\n    };\r\n    var mapDrinkPreferenceWhite = function (g) {\r\n        return g.drinkPreferenceWhite === null || g.drinkPreferenceWhite === undefined\r\n            ? false\r\n            : g.drinkPreferenceWhite;\r\n    };\r\n    var mapDrinkPreferenceRose = function (g) {\r\n        return g.drinkPreferenceRose === null || g.drinkPreferenceRose === undefined\r\n            ? false\r\n            : g.drinkPreferenceRose;\r\n    };\r\n    return {\r\n        rsvps: form.guests.map(function (g) { return ({\r\n            inviteId: g.inviteId,\r\n            firstName: g.firstName,\r\n            attending: g.attending,\r\n            starter: mapStarter(g),\r\n            main: mapMain(g),\r\n            dessert: mapDessert(g),\r\n            dietaryRequirements: g.dietaryRequirements,\r\n            drinkPreferenceRed: mapDrinkPreferenceRed(g),\r\n            drinkPreferenceWhite: mapDrinkPreferenceWhite(g),\r\n            drinkPreferenceRose: mapDrinkPreferenceRose(g),\r\n            songRequest: g.songRequest,\r\n        }); }),\r\n    };\r\n}\r\nexports.mapForm = mapForm;\r\n\n\n//# sourceURL=webpack:///./src/scripts/utilities/mapper.ts?");

/***/ }),

/***/ "./src/scripts/utilities/service.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar config_1 = __webpack_require__(/*! ./config */ \"./src/scripts/utilities/config.ts\");\r\nfunction getInvite(inviteId) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var _a, serviceBaseUrl, serviceGetInviteToken, url, method, res;\r\n        return __generator(this, function (_b) {\r\n            switch (_b.label) {\r\n                case 0:\r\n                    _a = config_1.getConfig(), serviceBaseUrl = _a.serviceBaseUrl, serviceGetInviteToken = _a.serviceGetInviteToken;\r\n                    url = serviceBaseUrl + \"/api/invite?inviteId=\" + inviteId + \"&code=\" + serviceGetInviteToken;\r\n                    method = \"GET\";\r\n                    return [4, fetch(new Request(url, { method: method }))];\r\n                case 1:\r\n                    res = _b.sent();\r\n                    if (!res.ok) return [3, 3];\r\n                    return [4, res.json()];\r\n                case 2: return [2, _b.sent()];\r\n                case 3: throw new Error(\"Service call failed\");\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.getInvite = getInvite;\r\nfunction validateInviteId(inviteId) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var _a, serviceBaseUrl, serviceValidateInviteIdToken, url, method, res, _b, _c, _d;\r\n        return __generator(this, function (_e) {\r\n            switch (_e.label) {\r\n                case 0:\r\n                    _a = config_1.getConfig(), serviceBaseUrl = _a.serviceBaseUrl, serviceValidateInviteIdToken = _a.serviceValidateInviteIdToken;\r\n                    url = serviceBaseUrl + \"/api/invite-id?inviteId=\" + inviteId + \"&code=\" + serviceValidateInviteIdToken;\r\n                    method = \"GET\";\r\n                    return [4, fetch(new Request(url, { method: method }))];\r\n                case 1:\r\n                    res = _e.sent();\r\n                    _b = res.ok;\r\n                    if (!_b) return [3, 3];\r\n                    _d = (_c = JSON).parse;\r\n                    return [4, res.json()];\r\n                case 2:\r\n                    _b = _d.apply(_c, [_e.sent()]);\r\n                    _e.label = 3;\r\n                case 3: return [2, _b];\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.validateInviteId = validateInviteId;\r\nfunction sendRsvp(rsvp) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var _a, serviceBaseUrl, serviceSendRsvpToken, url, method, body, res;\r\n        return __generator(this, function (_b) {\r\n            switch (_b.label) {\r\n                case 0:\r\n                    _a = config_1.getConfig(), serviceBaseUrl = _a.serviceBaseUrl, serviceSendRsvpToken = _a.serviceSendRsvpToken;\r\n                    url = serviceBaseUrl + \"/api/invite?code=\" + serviceSendRsvpToken;\r\n                    method = \"PUT\";\r\n                    body = JSON.stringify(rsvp);\r\n                    return [4, fetch(new Request(url, { method: method, body: body }))];\r\n                case 1:\r\n                    res = _b.sent();\r\n                    if (!res.ok) {\r\n                        throw new Error(\"Service call failed\");\r\n                    }\r\n                    return [2];\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.sendRsvp = sendRsvp;\r\n\n\n//# sourceURL=webpack:///./src/scripts/utilities/service.ts?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ })

/******/ });