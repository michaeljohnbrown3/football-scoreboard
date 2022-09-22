/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Varela+Round&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hidden {\n  display: none;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\n.blur-background {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(10px);\n  height: 100vh;\n  width: 100vw;\n}\n\n.team-select {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  height: 50%;\n  width: 50%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.team-select__home, .team-select__away {\n  font-family: \"Varela Round\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  height: 8.4rem;\n  border: 2px solid #000;\n  background-color: rgb(20, 20, 20);\n}\n\n.header {\n  display: flex;\n  height: 8.4rem;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Varela Round\", sans-serif;\n  border: 2px solid #000;\n}\n.header__away, .header__home {\n  display: flex;\n}\n.header__away--name, .header__home--name {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  font-style: italic;\n  font-size: 5rem;\n  height: 8rem;\n  width: calc(50vw - 27rem);\n}\n.header__away--score, .header__home--score {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 8rem;\n}\n.header__away--logo-container, .header__home--logo-container {\n  height: 8rem;\n  width: 12rem;\n  background-color: rgb(20, 20, 20);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__away--logo, .header__home--logo {\n  max-height: 8rem;\n  max-width: 10rem;\n  background-color: transparent;\n  filter: drop-shadow(2px 2px 10px #000);\n}\n.header__away--name {\n  background-color: rgb(120, 47, 64);\n  color: #fff;\n}\n.header__home--name {\n  background-color: rgb(70, 29, 124);\n  color: #fff;\n}\n.header__away--logo-container {\n  background-color: rgb(120, 47, 64);\n}\n.header__home--logo-container {\n  background-color: rgb(70, 29, 124);\n}\n.header__score {\n  font-size: 6.5rem;\n  background-color: rgb(20, 20, 20);\n  color: #fff;\n  width: 10rem;\n}\n.header__quarter {\n  font-size: 5rem;\n  background-color: #000;\n  color: #fff;\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__rank {\n  background-color: transparent;\n  font-size: 3rem;\n  margin-right: 0.5rem;\n}\n\n.stat-container {\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  height: calc(100vh - 16.8rem);\n}\n\n.center-container {\n  background-color: rgb(20, 20, 20);\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n  width: 30rem;\n  border: 2px solid #000;\n  overflow: hidden;\n}\n\n.box-score {\n  font-size: 2rem;\n  font-family: \"Varela Round\", sans-serif;\n}\n.box-score__cell {\n  padding: 0.5rem;\n}\n\n.team-stats__cell {\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.5rem;\n  text-align: center;\n  padding: 0.2rem;\n}\n\n.away-stats {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.5rem;\n  width: calc(50vw - 15rem);\n  height: calc(100vh - 16.8rem);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.home-stats {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.5rem;\n  width: calc(50vw - 15rem);\n  height: calc(100vh - 16.8rem);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.team-stats {\n  display: flex;\n}", "",{"version":3,"sources":["webpack://./src/sass/abstracts/_utilities.scss","webpack://./src/sass/main.scss","webpack://./src/sass/base/_reset.scss","webpack://./src/sass/components/_teamselect.scss","webpack://./src/sass/abstracts/_variables.scss","webpack://./src/sass/base/_typography.scss","webpack://./src/sass/layout/_footer.scss","webpack://./src/sass/layout/_header.scss","webpack://./src/sass/layout/_stat.scss","webpack://./src/sass/layout/_teamstats.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;ACEF;;ACHA;;;EAGE,SAAA;EACA,UAAA;EACA,sBAAA;ADMF;;ACHA;EACE,gBAAA;ADMF;;AEfA;EACE,eAAA;EACA,oCAAA;EACA,2BAAA;EACA,aAAA;EACA,YAAA;AFkBF;;AEdA;EACE,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,sBCNY;EDOZ,WAAA;EACA,UAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AFiBF;AEfE;EAEE,uCErBW;EFsBX,aAAA;EACA,sBAAA;EACA,mBAAA;AFgBJ;;AK1CA;EACE,aAAA;EACA,uBAAA;EACA,WFKY;EEJZ,cAAA;EACA,sBAAA;EACA,iCFKuB;AHwCzB;;AMnDA;EACE,aAAA;EACA,cAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,uCFJa;EEKb,sBAAA;ANsDF;AMpDE;EAEE,aAAA;ANqDJ;AMnDI;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,yBAAA;ANqDN;AMlDI;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;ANoDN;AMjDI;EACE,YAAA;EACA,YAAA;EACA,iCHvBmB;EGwBnB,aAAA;EACA,mBAAA;EACA,uBAAA;ANmDN;AMhDI;EACE,gBAAA;EACA,gBAAA;EACA,6BAAA;EACA,sCAAA;ANkDN;AM9CE;EACE,kCH7CiB;EG8CjB,WH1CU;AH0Fd;AM7CE;EACE,kCHrDiB;EGsDjB,WH/CU;AH8Fd;AM5CE;EACE,kCHvDiB;AHqGrB;AM3CE;EACE,kCH9DiB;AH2GrB;AM1CE;EACE,iBAAA;EACA,iCHzDqB;EG0DrB,WH7DU;EG8DV,YAAA;AN4CJ;AMzCE;EACE,eAAA;EACA,sBHpEU;EGqEV,WHpEU;EGqEV,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AN2CJ;AMxCE;EACE,6BAAA;EACA,eAAA;EACA,oBAAA;AN0CJ;;AOjIA;EACE,aAAA;EACA,uBAAA;EACA,WJKY;EIJZ,6BAAA;APoIF;;AOjIA;EACE,iCJGuB;EIFvB,aAAA;EACA,6BAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,sBAAA;EACA,gBAAA;APoIF;;AOjIA;EACE,eAAA;EACA,uCHlBa;AJsJf;AOlIE;EACE,eAAA;APoIJ;;AO/HE;EACE,uCH3BW;EG4BX,iBAAA;EACA,kBAAA;EACA,eAAA;APkIJ;;AO9HA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,uCHtCa;EGuCb,iBAAA;EACA,yBAAA;EACA,6BAAA;EACA,wBAAA;EACA,2BAAA;EACA,4BAAA;APiIF;;AO9HA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,uCHnDa;EGoDb,iBAAA;EACA,yBAAA;EACA,6BAAA;EACA,wBAAA;EACA,2BAAA;EACA,4BAAA;APiIF;;AQ5LA;EACE,aAAA;AR+LF","sourcesContent":[".hidden {\r\n  display: none;\r\n}\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap\");\n.hidden {\n  display: none;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\n.blur-background {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(10px);\n  height: 100vh;\n  width: 100vw;\n}\n\n.team-select {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  height: 50%;\n  width: 50%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.team-select__home, .team-select__away {\n  font-family: \"Varela Round\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  height: 8.4rem;\n  border: 2px solid #000;\n  background-color: rgb(20, 20, 20);\n}\n\n.header {\n  display: flex;\n  height: 8.4rem;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Varela Round\", sans-serif;\n  border: 2px solid #000;\n}\n.header__away, .header__home {\n  display: flex;\n}\n.header__away--name, .header__home--name {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  font-style: italic;\n  font-size: 5rem;\n  height: 8rem;\n  width: calc(50vw - 27rem);\n}\n.header__away--score, .header__home--score {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 8rem;\n}\n.header__away--logo-container, .header__home--logo-container {\n  height: 8rem;\n  width: 12rem;\n  background-color: rgb(20, 20, 20);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__away--logo, .header__home--logo {\n  max-height: 8rem;\n  max-width: 10rem;\n  background-color: transparent;\n  filter: drop-shadow(2px 2px 10px #000);\n}\n.header__away--name {\n  background-color: rgb(120, 47, 64);\n  color: #fff;\n}\n.header__home--name {\n  background-color: rgb(70, 29, 124);\n  color: #fff;\n}\n.header__away--logo-container {\n  background-color: rgb(120, 47, 64);\n}\n.header__home--logo-container {\n  background-color: rgb(70, 29, 124);\n}\n.header__score {\n  font-size: 6.5rem;\n  background-color: rgb(20, 20, 20);\n  color: #fff;\n  width: 10rem;\n}\n.header__quarter {\n  font-size: 5rem;\n  background-color: #000;\n  color: #fff;\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__rank {\n  background-color: transparent;\n  font-size: 3rem;\n  margin-right: 0.5rem;\n}\n\n.stat-container {\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  height: calc(100vh - 16.8rem);\n}\n\n.center-container {\n  background-color: rgb(20, 20, 20);\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n  width: 30rem;\n  border: 2px solid #000;\n  overflow: hidden;\n}\n\n.box-score {\n  font-size: 2rem;\n  font-family: \"Varela Round\", sans-serif;\n}\n.box-score__cell {\n  padding: 0.5rem;\n}\n\n.team-stats__cell {\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.5rem;\n  text-align: center;\n  padding: 0.2rem;\n}\n\n.away-stats {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.5rem;\n  width: calc(50vw - 15rem);\n  height: calc(100vh - 16.8rem);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.home-stats {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 1.5rem;\n  width: calc(50vw - 15rem);\n  height: calc(100vh - 16.8rem);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.team-stats {\n  display: flex;\n}","*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n",".blur-background {\r\n  position: fixed;\r\n  background-color: rgba($color-black, 0.3);\r\n  backdrop-filter: blur(10px);\r\n  height: 100vh;\r\n  width: 100vw;\r\n  // display: none;\r\n}\r\n\r\n.team-select {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: $color-white;\r\n  height: 50%;\r\n  width: 50%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n\r\n  &__home,\r\n  &__away {\r\n    font-family: $primary-font;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}\r\n","// Colors\r\n$color-home-primary: rgb(70, 29, 124);\r\n$color-home-secondary: rgb(253, 208, 35);\r\n\r\n$color-away-primary: rgb(120, 47, 64);\r\n$color-away-secondary: rgb(206, 184, 136);\r\n\r\n$color-black: #000;\r\n$color-white: #fff;\r\n\r\n$color-score: $color-white;\r\n$color-score-background: rgb(20, 20, 20);\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap\");\r\n\r\n$primary-font: \"Varela Round\", sans-serif;\r\n",".button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: $color-white;\r\n  height: 8.4rem;\r\n  border: 2px solid $color-black;\r\n  background-color: $color-score-background;\r\n}\r\n",".header {\r\n  display: flex;\r\n  height: 8.4rem;\r\n  width: 100vw;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: $primary-font;\r\n  border: 2px solid $color-black;\r\n\r\n  &__away,\r\n  &__home {\r\n    display: flex;\r\n\r\n    &--name {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      text-transform: uppercase;\r\n      font-style: italic;\r\n      font-size: 5rem;\r\n      height: 8rem;\r\n      width: calc(50vw - 27rem);\r\n    }\r\n\r\n    &--score {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      height: 8rem;\r\n    }\r\n\r\n    &--logo-container {\r\n      height: 8rem;\r\n      width: 12rem;\r\n      background-color: $color-score-background;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n    }\r\n\r\n    &--logo {\r\n      max-height: 8rem;\r\n      max-width: 10rem;\r\n      background-color: transparent;\r\n      filter: drop-shadow(2px 2px 10px $color-black);\r\n    }\r\n  }\r\n\r\n  &__away--name {\r\n    background-color: $color-away-primary;\r\n    color: $color-white;\r\n  }\r\n\r\n  &__home--name {\r\n    background-color: $color-home-primary;\r\n    color: $color-white;\r\n  }\r\n\r\n  &__away--logo-container {\r\n    background-color: $color-away-primary;\r\n  }\r\n\r\n  &__home--logo-container {\r\n    background-color: $color-home-primary;\r\n  }\r\n\r\n  &__score {\r\n    font-size: 6.5rem;\r\n    background-color: $color-score-background;\r\n    color: $color-score;\r\n    width: 10rem;\r\n  }\r\n\r\n  &__quarter {\r\n    font-size: 5rem;\r\n    background-color: $color-black;\r\n    color: $color-white;\r\n    height: 100%;\r\n    width: 10rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  &__rank {\r\n    background-color: transparent;\r\n    font-size: 3rem;\r\n    margin-right: 0.5rem;\r\n  }\r\n}\r\n",".stat-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: $color-white;\r\n  height: calc(100vh - 16.8rem);\r\n}\r\n\r\n.center-container {\r\n  background-color: $color-score-background;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 30rem;\r\n  border: 2px solid $color-black;\r\n  overflow: hidden;\r\n}\r\n\r\n.box-score {\r\n  font-size: 2rem;\r\n  font-family: $primary-font;\r\n\r\n  &__cell {\r\n    padding: 0.5rem;\r\n  }\r\n}\r\n\r\n.team-stats {\r\n  &__cell {\r\n    font-family: $primary-font;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    padding: 0.2rem;\r\n  }\r\n}\r\n\r\n.away-stats {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: $primary-font;\r\n  font-size: 1.5rem;\r\n  width: calc(50vw - 15rem);\r\n  height: calc(100vh - 16.8rem);\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.home-stats {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: $primary-font;\r\n  font-size: 1.5rem;\r\n  width: calc(50vw - 15rem);\r\n  height: calc(100vh - 16.8rem);\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n",".team-stats {\r\n  display: flex;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/data/teams.json":
/*!************************************!*\
  !*** ./src/assets/data/teams.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Clemson","uniName":"Clemson University","abbName":"Clemson","initials":"CU","id":"clemson","nickname":"Tigers","primaryColor":"rgb(245, 102, 0)","secondaryColor":"rgb(82, 45, 128)"},{"name":"Duquesne","uniName":"Duquesne","abbName":"Duquesne","initials":"DU","id":"duquesne","nickname":"Dukes","primaryColor":"rgb(4, 30, 66)","secondaryColor":"rgb(186, 12, 47)"},{"name":"Florida","uniName":"University of Florida","abbName":"Florida","initials":"UF","id":"uf","nickname":"Gators","primaryColor":"rgb(0, 33, 165)","secondaryColor":"rgb(250, 70, 22)"},{"name":"Florida State","uniName":"Florida State University","abbName":"Florida St","initials":"FSU","id":"fsu","nickname":"Seminoles","primaryColor":"rgb(120, 47, 64)","secondaryColor":"rgb(206, 184, 136)"},{"name":"Louisville","uniName":"University of Louisville","abbName":"Louisville","initials":"UL","id":"ul","nickname":"Cardinals","primaryColor":"rgb(227, 27, 35)","secondaryColor":"rgb(0, 0, 0)"},{"name":"Louisana State","uniName":"Louisiana State University","abbName":"Louisiana St","initials":"LSU","id":"lsu","nickname":"Tigers","primaryColor":"rgb(70, 29, 124)","secondaryColor":"rgb(253, 208, 35)"},{"name":"Miami","uniName":"University of Miami","abbName":"Miami","initials":"MIA","id":"mia","nickname":"Hurricanes","primaryColor":"rgb(244, 115, 33)","secondaryColor":"rgb(0, 80, 48)"}]');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _assets_data_teams_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/data/teams.json */ "./src/assets/data/teams.json");


var awaySelector = document.querySelector('#away');
var homeSelector = document.querySelector('#home');
_assets_data_teams_json__WEBPACK_IMPORTED_MODULE_1__.forEach(function (team) {
  var awayOption = document.createElement('option');
  awayOption.textContent = "".concat(team.name, " ").concat(team.nickname);
  awayOption.setAttribute('value', "".concat(team.id));
  awaySelector.appendChild(awayOption);
  var homeOption = document.createElement('option');
  homeOption.textContent = "".concat(team.name, " ").concat(team.nickname);
  homeOption.setAttribute('value', "".concat(team.id));
  homeSelector.appendChild(homeOption);
});
var kickoffBtn = document.querySelector('.start-game');
var teamSelector = document.querySelector('.team-select');
var blurBackground = document.querySelector('.blur-background');
kickoffBtn.addEventListener('click', function () {
  teamSelector.setAttribute('class', 'hidden');
  blurBackground.setAttribute('class', 'hidden'); // Append teams

  var awaySelected = awaySelector.value;
  var homeSelected = homeSelector.value;
  var awayLogo = document.querySelector('.header__away--logo');
  var awayLogoContainer = document.querySelector('.header__away--logo-container');
  var homeLogo = document.querySelector('.header__home--logo');
  var homeLogoContainer = document.querySelector('.header__home--logo-container');
  var awayName = document.querySelector('.header__away--name');
  var homeName = document.querySelector('.header__home--name');
  var awayStats = document.querySelector('.away-stats');
  var homeStats = document.querySelector('.home-stats'); // For ranking, we want the inputted rank to append the data and then include ${team.rank}

  var awayRankInput = document.querySelector('#away-rank');
  var homeRankInput = document.querySelector('#home-rank');
  _assets_data_teams_json__WEBPACK_IMPORTED_MODULE_1__.forEach(function (team) {
    if (awaySelected === team.id) {
      awayLogo.setAttribute('src', "img/".concat(team.id, ".png"));
      awayLogoContainer.style.backgroundColor = "".concat(team.primaryColor);
      awayName.innerHTML = "<span class=\"header__rank\">".concat(awayRankInput.value, "</span>").concat(team.abbName);
      awayName.style.backgroundColor = "".concat(team.primaryColor);
      awayStats.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url('img/".concat(team.id, ".png')");
    }

    if (homeSelected === team.id) {
      homeLogo.setAttribute('src', "img/".concat(team.id, ".png"));
      homeLogoContainer.style.backgroundColor = "".concat(team.primaryColor);
      homeName.innerHTML = "<span class=\"header__rank\">".concat(homeRankInput.value, "</span>").concat(team.abbName);
      homeName.style.backgroundColor = "".concat(team.primaryColor);
      homeStats.style.backgroundImage = "url('img/".concat(team.id, ".png')");
      homeStats.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url('img/".concat(team.id, ".png')");
    }
  }); // Append ranking
});
})();

/******/ })()
;
//# sourceMappingURL=bundle79f72b115adac9f06404.js.map