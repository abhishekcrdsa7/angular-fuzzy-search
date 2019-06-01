(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Constants.ts":
/*!******************************!*\
  !*** ./src/app/Constants.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var constants = {
    serverURL: 'https://angular-search-as.herokuapp.com/api'
};
/* harmony default export */ __webpack_exports__["default"] = (constants);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n  padding: 10px;\r\n}\r\n\r\n.heading {\r\n  text-align: right;\r\n  margin: 0;\r\n  padding: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <h3 class=\"heading\">Search Movies</h3>\n    </div>\n    <div class=\"col-md-9\">\n      <app-search-bar (refreshList)=\"onRefreshList()\"></app-search-bar>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"movies.length > 0\">\n    <div class=\"col-xs-6\">\n      <strong>Movie Name</strong>\n    </div>\n    <div class=\"col-xs-2\">\n      <strong>IMDb Rating</strong>\n    </div>\n    <div class=\"col-xs-2\">\n      <strong>Year</strong>\n    </div>\n    <div class=\"col-xs-2\">\n      <strong>Language</strong>\n    </div>\n  </div>\n  <div class=\"row\">\n    <h4 *ngIf=\"showMessage\">{{message}}</h4>\n    <app-moviecard *ngFor=\"let movie of movies\" [movie]=\"movie\"></app-moviecard>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.service */ "./src/app/movies.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(movieService) {
        this.movieService = movieService;
        this.movies = [];
        this.showMessage = false;
    }
    AppComponent.prototype.onRefreshList = function () {
        this.showMessage = false;
        if (this.movieService.getMovies()) {
            this.movies = this.movieService.getMovies();
            if (this.movies.length <= 0) {
                this.showMessage = true;
                this.message = 'Sorry! No movies were found matching your query.';
            }
        }
        else {
            this.showMessage = true;
            this.message = 'Sorry! There was an error. Please try again.';
        }
        this.movieService.error = '';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movies_service__WEBPACK_IMPORTED_MODULE_2__["default"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _moviecard_moviecard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./moviecard/moviecard.component */ "./src/app/moviecard/moviecard.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"],
                _moviecard_moviecard_component__WEBPACK_IMPORTED_MODULE_7__["MoviecardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/moviecard/moviecard.component.css":
/*!***************************************************!*\
  !*** ./src/app/moviecard/moviecard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllY2FyZC9tb3ZpZWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/moviecard/moviecard.component.html":
/*!****************************************************!*\
  !*** ./src/app/moviecard/moviecard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"col-xs-6 movieData\">\r\n    {{name}}\r\n  </div>\r\n  <div class=\"col-xs-2 movieData\">\r\n    {{rating}}\r\n  </div>\r\n  <div class=\"col-xs-2 movieData\">\r\n    {{year}}\r\n  </div>\r\n  <div class=\"col-xs-2 movieData\">\r\n    {{language}}\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/moviecard/moviecard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/moviecard/moviecard.component.ts ***!
  \**************************************************/
/*! exports provided: MoviecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviecardComponent", function() { return MoviecardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoviecardComponent = /** @class */ (function () {
    function MoviecardComponent() {
        this.name = '';
        this.language = '';
        this.year = '';
        this.rating = '';
    }
    MoviecardComponent.prototype.ngOnInit = function () {
        this.name = this.movie.MovieName;
        this.year = this.movie.Year;
        this.rating = this.movie.IMDbRating;
        this.language = this.movie.Language;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoviecardComponent.prototype, "movie", void 0);
    MoviecardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-moviecard',
            template: __webpack_require__(/*! ./moviecard.component.html */ "./src/app/moviecard/moviecard.component.html"),
            styles: [__webpack_require__(/*! ./moviecard.component.css */ "./src/app/moviecard/moviecard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoviecardComponent);
    return MoviecardComponent;
}());



/***/ }),

/***/ "./src/app/movies.service.ts":
/*!***********************************!*\
  !*** ./src/app/movies.service.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoviesService = /** @class */ (function () {
    function MoviesService() {
    }
    MoviesService.prototype.setMovies = function (movies) {
        this.movies = movies;
    };
    MoviesService.prototype.getMovies = function () {
        return this.movies;
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], MoviesService);
    return MoviesService;
}());
/* harmony default export */ __webpack_exports__["default"] = (MoviesService);


/***/ }),

/***/ "./src/app/search-bar/getmovies.service.ts":
/*!*************************************************!*\
  !*** ./src/app/search-bar/getmovies.service.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants */ "./src/app/Constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var GetmoviesService = /** @class */ (function () {
    function GetmoviesService(http) {
        this.http = http;
    }
    GetmoviesService.prototype.getMovies = function (query) {
        var searchParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        searchParams = searchParams.append('term', query);
        return this.http
            .get(_Constants__WEBPACK_IMPORTED_MODULE_2__["default"].serverURL, {
            params: searchParams
        });
    };
    GetmoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GetmoviesService);
    return GetmoviesService;
}());
/* harmony default export */ __webpack_exports__["default"] = (GetmoviesService);


/***/ }),

/***/ "./src/app/search-bar/search-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group {\r\n  position: absolute;\r\n  z-index: 999;\r\n}\r\n\r\n.list-group-item:hover {\r\n  cursor: pointer;\r\n  background-color: #f9fafc;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZjO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(i.value)\">\n      <div class=\"input-group\">\n        <input\n          #i=\"ngModel\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Search Movies...\"\n          name=\"searchquery\"\n          (keydown)=\"autoCmp(i.value)\"\n          value={{inp}}\n          autocomplete=\"off\"\n          required\n          [ngModel]>\n        <span class=\"input-group-btn\">\n        <button\n          class=\"btn btn-default\"\n          type=\"submit\"\n          [disabled]=\"!i.valid\"\n        >Go!</button>\n      </span>\n      </div>\n      <ul class=\"list-group col-xs-12\" *ngIf=\"showList\">\n        <li class=\"list-group-item\" #l (click)=\"onSubmit(l.innerText)\" *ngFor=\"let movie of autoCmpList\">{{movie[\"MovieName\"]}}</li>\n      </ul>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _getmovies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getmovies.service */ "./src/app/search-bar/getmovies.service.ts");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");





var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(getMoviesService, moviesService) {
        this.getMoviesService = getMoviesService;
        this.moviesService = moviesService;
        this.refreshList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showList = false;
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.onSubmit = function (q) {
        var _this = this;
        var query = q.trim();
        this.showList = false;
        this.inp = q;
        if (query !== '') {
            this.searchMovies(query)
                .subscribe(function (responseData) {
                if (responseData.error) {
                    _this.moviesService.error = responseData.error;
                }
                else {
                    _this.moviesService.setMovies(responseData.resp);
                }
                _this.refreshList.emit();
            });
        }
    };
    SearchBarComponent.prototype.autoCmp = function (val) {
        var _this = this;
        if (val && val.trim().length > 1) {
            this.showList = true;
            this.searchMovies(val)
                .subscribe(function (responseData) {
                _this.autoCmpList = responseData.resp;
            });
        }
        else {
            this.showList = false;
            this.autoCmpList = [];
        }
    };
    SearchBarComponent.prototype.searchMovies = function (query) {
        return this.getMoviesService.getMovies(query);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], SearchBarComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchBarComponent.prototype, "refreshList", void 0);
    SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/search-bar/search-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_getmovies_service__WEBPACK_IMPORTED_MODULE_3__["default"], _movies_service__WEBPACK_IMPORTED_MODULE_4__["default"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angularSearch\searchMovies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map