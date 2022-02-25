(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <!-- <button mat-icon-button (click)=\"drawer.toggle()\"><mat-icon>menu</mat-icon></button> -->\r\n    <h1>Room Layout</h1>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-drawer-container hasBackdrop=\"false\">\r\n  <mat-drawer #drawer mode=\"side\" opened>\r\n    <mat-accordion class=\"rl-object-options\">\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Rooms\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <mat-list>\r\n          <mat-divider></mat-divider>\r\n          <ng-container *ngFor=\"let room of furnishings.rooms\">\r\n            <mat-list-item (click)=\"insert(room, 'ROOM')\">\r\n              {{room.title}}\r\n            </mat-list-item>\r\n            <mat-divider></mat-divider>\r\n          </ng-container>\r\n        </mat-list>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Doors\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"preview-layout\">\r\n          <div class=\"preview-item\" *ngFor=\"let door of furnishings.doors\">\r\n            <div (click)=\"insert(door, 'DOOR')\">\r\n              <app-preview-furniture [type]=\"'DOOR'\" [furniture]=\"door\"></app-preview-furniture>\r\n              <div class=\"preview-title\">{{door.title}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Windows\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"preview-layout\">\r\n          <div class=\"preview-item\" *ngFor=\"let window of furnishings.windows\">\r\n            <div (click)=\"insert(window, 'WINDOW')\">\r\n              <app-preview-furniture [type]=\"'WINDOW'\" [furniture]=\"window\"></app-preview-furniture>\r\n              <div class=\"preview-title\">{{window.title}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Tables\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-form-field>\r\n          <mat-label>Default Chair</mat-label>\r\n          <mat-select [value]=\"defaultChairIndex\" (valueChange)=\"defaultChairChanged($event)\">\r\n            <mat-option *ngFor=\"let chair of furnishings.chairs; let i=index;\" [value]=\"i\">{{chair.title}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"preview-layout\">\r\n          <div class=\"preview-item\" *ngFor=\"let table of furnishings.tables\">\r\n            <div (click)=\"insert(table, 'TABLE')\">\r\n              <app-preview-furniture [type]=\"'TABLE'\" [furniture]=\"table\"></app-preview-furniture>\r\n              <div class=\"preview-title\">{{table.title}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Chairs\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"preview-layout\">\r\n          <div class=\"preview-item\" *ngFor=\"let chair of furnishings.chairs\">\r\n            <div (click)=\"insert(chair, 'CHAIR')\">\r\n              <app-preview-furniture [type]=\"'CHAIR'\" [furniture]=\"chair\"></app-preview-furniture>\r\n              <div class=\"preview-title\">{{chair.title}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Miscellaneous\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"preview-layout\">\r\n          <div class=\"preview-item\" *ngFor=\"let m of furnishings.miscellaneous\">\r\n            <div (click)=\"insert(m, 'MISCELLANEOUS')\">\r\n              <app-preview-furniture [type]=\"'MISCELLANEOUS'\" [furniture]=\"m\"></app-preview-furniture>\r\n              <div class=\"preview-title\">{{m.title}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Text\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <mat-divider></mat-divider>\r\n        <form [formGroup]=\"textForm\" class=\"new-text\" (ngSubmit)=\"insertNewText()\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Input text\" formControlName=\"text\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" placeholder=\"Font Size\" min=\"1\" max=\"200\" formControlName=\"font_size\">\r\n          </mat-form-field>\r\n          <div style=\"margin: 1rem 0\">\r\n            <mat-radio-group formControlName=\"direction\">\r\n              <mat-radio-button value=\"HORIZONTAL\">Horizontal</mat-radio-button>\r\n              <mat-radio-button value=\"VERTICAL\">Vertical</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <div style=\"margin: 2rem 12px\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\">Add text</button>\r\n          </div>\r\n        </form>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Advanced\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <mat-divider></mat-divider>\r\n        <div style=\"padding: 2rem\">\r\n          <button mat-raised-button color=\"primary\" style=\"width: 100%\" (click)=\"layoutChairs()\">Layout chairs</button>\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n      <div class=\"export-btns\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"download('PNG')\">Download as Image</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"download('SVG')\">Download as SVG</button>\r\n      </div>\r\n    </mat-accordion>\r\n  </mat-drawer>\r\n\r\n  <mat-drawer-content>\r\n    <mat-toolbar>\r\n      <mat-toolbar-row>\r\n        <div *ngIf=\"init\">\r\n          <ng-container *ngIf=\"!app.roomEdit\">\r\n            <button mat-icon-button matTooltip=\"Undo (Ctrl + Z)\" (click)=\"app.undo()\"\r\n              [disabled]=\"app.states.length === 1\">\r\n              <fa-icon [icon]=\"['fas', 'reply']\"></fa-icon>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Redo (Ctrl + Shift + Z)\" (click)=\"app.redo()\"\r\n              [disabled]=\"app.redoStates.length === 0\">\r\n              <fa-icon [icon]=\"['fas', 'share']\"></fa-icon>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Clone (Ctrl + D)\" [disabled]=\"app.selections.length === 0\"\r\n              (click)=\"app.clone()\">\r\n              <fa-icon [icon]=\"['fas', 'clone']\"></fa-icon>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Delete (Delete)\" [disabled]=\"app.selections.length === 0\"\r\n              (click)=\"app.delete()\">\r\n              <fa-icon [icon]=\"['fas', 'trash']\"></fa-icon>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Rotate Anti-Clockwise (Ctrl + Left Arrow)\"\r\n              [disabled]=\"app.selections.length === 0\" (click)=\"app.rotateAntiClockWise()\">\r\n              <fa-icon [icon]=\"['fas', 'undo']\"></fa-icon>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Rotate Clockwise (Ctrl + Right Arrow)\"\r\n              [disabled]=\"app.selections.length === 0\" (click)=\"app.rotateClockWise()\">\r\n              <fa-icon [icon]=\"['fas', 'redo']\"></fa-icon>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Group (Ctrl + G)\" [disabled]=\"app.selections.length < 2\"\r\n              (click)=\"app.group()\">\r\n              <fa-icon [icon]=\"['fas', 'object-group']\"></fa-icon>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Ungroup (Ctrl + E)\" [disabled]=\"!app.ungroupable\"\r\n              (click)=\"app.ungroup()\">\r\n              <fa-icon [icon]=\"['fas', 'object-ungroup']\"></fa-icon>\r\n            </button>\r\n            <button mat-button matTooltip=\"Arrange\" [matMenuTriggerFor]=\"arrange\">Arrange</button>\r\n            <button mat-raised-button matTooltip=\"Switch Edition Mode\" color=\"primary\" (click)=\"app.editRoom()\">Edit\r\n              Room</button>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"app.roomEdit\">\r\n            <button mat-icon-button matTooltip=\"Undo (Ctrl + Z)\" (click)=\"app.undo()\"\r\n              [disabled]=\"app.roomEditStates.length === 1\">\r\n              <fa-icon [icon]=\"['fas', 'reply']\"></fa-icon>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Redo (Ctrl + Shift + Z)\" (click)=\"app.redo()\"\r\n              [disabled]=\"app.roomEditRedoStates.length === 0\">\r\n              <fa-icon [icon]=\"['fas', 'share']\"></fa-icon>\r\n            </button>\r\n            <button mat-button matTooltip=\"Switch Edition Mode\" color=\"primary\" *ngIf=\"app.roomEdit\"\r\n              (click)=\"app.endEditRoom()\">End Room Edition</button>\r\n          </ng-container>\r\n        </div>\r\n        <mat-menu #arrange=\"matMenu\">\r\n          <ng-template matMenuContent>\r\n            <button mat-menu-item (click)=\"app.arrange('LEFT')\" [disabled]=\"app.selections.length < 2\">Arrange Left</button>\r\n            <button mat-menu-item (click)=\"app.arrange('CENTER')\" [disabled]=\"app.selections.length < 2\">Arrange Center</button>\r\n            <button mat-menu-item (click)=\"app.arrange('RIGHT')\" [disabled]=\"app.selections.length < 2\">Arrange Right</button>\r\n            <button mat-menu-item (click)=\"app.arrange('TOP')\" [disabled]=\"app.selections.length < 2\">Arrange Top</button>\r\n            <button mat-menu-item (click)=\"app.arrange('MIDDLE')\" [disabled]=\"app.selections.length < 2\">Arrange Middle</button>\r\n            <button mat-menu-item (click)=\"app.arrange('BOTTOM')\" [disabled]=\"app.selections.length < 2\">Arrange Bottom</button>\r\n            <button mat-menu-item (click)=\"app.placeInCenter('HORIZONTAL')\">Center Horizontally</button>\r\n            <button mat-menu-item (click)=\"app.placeInCenter('VERTICAL')\">Center Vertically</button>\r\n          </ng-template>\r\n        </mat-menu>\r\n        <app-zoom (zoomChange)=\"onZoom($event)\" [zoom]=\"app.zoom\"></app-zoom>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <app-view></app-view>\r\n    <table class=\"status-bar\">\r\n      <tbody>\r\n        <tr class=\"status-bar-item\">\r\n          <td>Type</td>\r\n          <td>Name</td>\r\n          <td>Left</td>\r\n          <td>Top</td>\r\n          <td>Rotation</td>\r\n          <td>Width</td>\r\n          <td>Height</td>\r\n          <td></td>\r\n        </tr>\r\n        <tr class=\"status-bar-item\" *ngFor=\"let selected of app.selections\">\r\n          <td><strong *ngIf=\"selected.name\">{{selected.name.split(':')[0] | titlecase}}</strong></td>\r\n          <td><strong *ngIf=\"selected.name\">{{selected.name.split(':')[1]}}</strong></td>\r\n          <td><strong>{{selected.left}}</strong></td>\r\n          <td><strong>{{selected.top}}</strong></td>\r\n          <td><strong>{{selected.angle}}'</strong></td>\r\n          <td><strong>{{selected.width}}</strong></td>\r\n          <td><strong>{{selected.height}}</strong></td>\r\n          <td>\r\n            <strong *ngIf=\"selected.name.split(':')[0] == 'TABLE'\">\r\n              {{selected._objects.length - 1}} Chairs\r\n            </strong>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </mat-drawer-content>\r\n</mat-drawer-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chairs-layout/chairs-layout.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chairs-layout/chairs-layout.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"layout-chairs\">\r\n  <div>\r\n    <div class=\"layout-type\" fxLayout fxLayoutAlign=\"space-between center\">\r\n      <mat-radio-group aria-label=\"Select an layout\" [ngModel]=\"layoutOption\"\r\n        (ngModelChange)=\"layoutOptionChanged($event)\">\r\n        <mat-radio-button value=\"NORMAL\">Normal</mat-radio-button>\r\n        <mat-radio-button value=\"CURVED\">Curved</mat-radio-button>\r\n      </mat-radio-group>\r\n      <app-zoom (zoomChange)=\"onZoom($event)\" [zoom]=\"zoom\"></app-zoom>\r\n    </div>\r\n    <form *ngIf=\"layoutOption === 'CURVED'\" [formGroup]=\"curvedBlock\" fxLayout=\"column\">\r\n      <div>\r\n        <mat-form-field>\r\n          <mat-label>Select Chair</mat-label>\r\n          <mat-select formControlName=\"chair\">\r\n            <mat-option *ngFor=\"let chair of chairs; let i=index;\" [value]=\"i\">{{chair.title}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayout fxLayoutGap=\"20px\">\r\n        <div class=\"layout-option\">\r\n          <mat-form-field>\r\n            <input type=\"number\" min=\"1\" max=\"5\" formControlName=\"rows\" matInput placeholder=\"Number of Rounds\">\r\n            <mat-hint>Between 1 to 5</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"layout-option\">\r\n          <mat-form-field>\r\n            <input type=\"number\" min=\"50\" max=\"500\" formControlName=\"radius\" matInput placeholder=\"Radius(px)\">\r\n            <mat-hint>Between 50 to 500</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"layout-option\">\r\n          <mat-form-field>\r\n            <input type=\"number\" min=\"10\" max=\"360\" formControlName=\"angle\" matInput placeholder=\"Angle\">\r\n            <mat-hint>Between 10 to 360</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"layout-option\">\r\n          <mat-form-field>\r\n            <input type=\"number\" min=\"10\" max=\"50\" formControlName=\"spacing_row\" matInput\r\n              placeholder=\"Spacing between Rounds\">\r\n            <mat-hint>Between 10 to 50</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <p>Number of chairs in rows</p>\r\n        <form formArrayName=\"chairs\" fxLayout fxLayoutGap=\"20px\">\r\n          <div class=\"layout-option\" *ngFor=\"let n of curved_chairs | slice:0:curved_rows; let i=index\">\r\n            <mat-form-field>\r\n              <input matInput [formControlName]=\"i\" type=\"number\">\r\n            </mat-form-field>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </form>\r\n    <form *ngIf=\"layoutOption === 'NORMAL'\" [formGroup]=\"rectBlock\" fxLayout=\"column\">\r\n      <div>\r\n        <mat-form-field>\r\n          <mat-label>Select Chair</mat-label>\r\n          <mat-select formControlName=\"chair\">\r\n            <mat-option *ngFor=\"let chair of chairs; let i=index;\" [value]=\"i\">{{chair.title}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayout fxLayoutGap=\"20px\">\r\n        <div class=\"layout-option\">\r\n          <mat-form-field>\r\n            <mat-label>Sections</mat-label>\r\n            <mat-select formControlName=\"sections\">\r\n              <mat-option *ngFor=\"let opt of [1, 2, 3, 4]; let i=index;\" [value]=\"opt\">{{opt}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"layout-option\">\r\n          <mat-form-field>\r\n            <input type=\"number\" min=\"1\" max=\"50\" formControlName=\"rows\" matInput placeholder=\"Rows\">\r\n            <mat-hint>Between 1 to 50</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"layout-option\">\r\n          <mat-form-field>\r\n            <input type=\"number\" formControlName=\"chairs\" min=\"1\" matInput placeholder=\"Chairs in a row\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"layout-option\">\r\n          <mat-form-field>\r\n            <input type=\"number\" min=\"0\" max=\"6\" formControlName=\"spacing_chair\" matInput\r\n              placeholder=\"Spacing between chairs(px)\">\r\n            <mat-hint>Between 0 to 6</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div>\r\n          <mat-form-field>\r\n            <input type=\"number\" min=\"0\" formControlName=\"spacing_row\" matInput placeholder=\"Spacing between rows(px)\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"sections > 1\">\r\n        <p>Spacing between sections</p>\r\n        <form formArrayName=\"spacing_sections\" fxLayout fxLayoutGap=\"20px\">\r\n          <div class=\"layout-option\" *ngFor=\"let sec of spacing_sections | slice:0:sections-1; let i=index\">\r\n            <mat-form-field>\r\n              <input matInput [formControlName]=\"i\" type=\"number\">\r\n            </mat-form-field>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div>\r\n    <canvas id=\"layout_chairs\"></canvas>\r\n  </div>\r\n  <div style=\"margin-top: 1rem\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"create()\">Create</button>\r\n    <button style=\"margin-left: 1rem\" mat-button color=\"primary\" (click)=\"cancel()\">Cancel</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/preview-furniture/preview-furniture.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/preview-furniture/preview-furniture.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <canvas [id]=\"id\"></canvas>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view/view.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view/view.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\">\r\n  <canvas id=\"main\"></canvas>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/zoom/zoom.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/zoom/zoom.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout fxLayoutAlign=\"center center\" class=\"zoom-widget\">\r\n  <button mat-icon-button matTooltip=\"Zoom Out\" (click)=\"zoomOut()\">\r\n    <fa-icon [icon]=\"['fas', 'minus']\"></fa-icon>\r\n  </button>\r\n  <span style=\"padding: 0 10px; font-size: 16px\">{{ zoom }}%</span>\r\n  <button mat-icon-button matTooltip=\"Zoom In\" (click)=\"zoomIn()\">\r\n    <fa-icon [icon]=\"['fas', 'plus']\"></fa-icon>\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-drawer {\n  width: 350px;\n}\n\nmat-drawer-container {\n  height: calc(100% - 64px);\n}\n\n.preview-layout {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 8px;\n}\n\n.preview-layout .preview-item {\n  padding: 8px;\n  cursor: pointer;\n}\n\n.preview-layout .preview-item:hover {\n  background: white;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.preview-layout .preview-title {\n  margin-top: 8px;\n  text-align: center;\n}\n\n.status-bar {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  background: #ececec;\n  min-height: 79px;\n  width: 100%;\n}\n\n.status-bar .status-bar-item td {\n  padding: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.status-bar .status-bar-item span {\n  margin-right: 15px;\n}\n\n.new-text mat-radio-group {\n  padding-left: 12px;\n}\n\n.new-text mat-radio-group mat-radio-button {\n  margin-right: 16px;\n}\n\n.export-btns {\n  padding: 24px;\n}\n\n.export-btns button {\n  width: 100%;\n}\n\n.export-btns button:first-of-type {\n  margin-bottom: 24px;\n}\n\nmat-toolbar-row {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFNodWphYXRcXFNlbGZMZWFybmluZ1xcZmxvb3JwbGFuLWFuZ3VsYXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDSTtFQUNFLGlCQUFBO0VBQ0EsK0dBQ0U7QUNBUjs7QURNRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRFFBO0VBQ0UseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRFFJO0VBQ0UsYUFBQTtFQUNBLDRDQUFBO0FDTk47O0FEU0k7RUFDRSxrQkFBQTtBQ1BOOztBRGFFO0VBQ0Usa0JBQUE7QUNWSjs7QURZSTtFQUNFLGtCQUFBO0FDVk47O0FEZUE7RUFDRSxhQUFBO0FDWkY7O0FEY0U7RUFDRSxXQUFBO0FDWko7O0FEYUk7RUFDRSxtQkFBQTtBQ1hOOztBRGdCQTtFQUNFLHlCQUFBO1VBQUEsOEJBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kcmF3ZXIge1xyXG4gIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweClcclxufVxyXG5cclxuLnByZXZpZXctbGF5b3V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxuICAucHJldmlldy1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAuMiksXHJcbiAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLFxyXG4gICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcmV2aWV3LXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gIH1cclxufVxyXG5cclxuLnN0YXR1cy1iYXIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICBtaW4taGVpZ2h0OiA3OXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuc3RhdHVzLWJhci1pdGVtIHtcclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5ldy10ZXh0IHtcclxuICBtYXQtcmFkaW8tZ3JvdXAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG5cclxuICAgIG1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZXhwb3J0LWJ0bnMge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtdG9vbGJhci1yb3d7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbn1cclxuIiwibWF0LWRyYXdlciB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xufVxuXG4ucHJldmlldy1sYXlvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogOHB4O1xufVxuLnByZXZpZXctbGF5b3V0IC5wcmV2aWV3LWl0ZW0ge1xuICBwYWRkaW5nOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcmV2aWV3LWxheW91dCAucHJldmlldy1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5wcmV2aWV3LWxheW91dCAucHJldmlldy10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhdHVzLWJhciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBtaW4taGVpZ2h0OiA3OXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGF0dXMtYmFyIC5zdGF0dXMtYmFyLWl0ZW0gdGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5zdGF0dXMtYmFyIC5zdGF0dXMtYmFyLWl0ZW0gc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm5ldy10ZXh0IG1hdC1yYWRpby1ncm91cCB7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbn1cbi5uZXctdGV4dCBtYXQtcmFkaW8tZ3JvdXAgbWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmV4cG9ydC1idG5zIHtcbiAgcGFkZGluZzogMjRweDtcbn1cbi5leHBvcnQtYnRucyBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5leHBvcnQtYnRucyBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbm1hdC10b29sYmFyLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_furnishings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/furnishings */ "./src/app/models/furnishings.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _components_chairs_layout_chairs_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chairs-layout/chairs-layout.component */ "./src/app/components/chairs-layout/chairs-layout.component.ts");









_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faReply"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faShare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faClone"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUndo"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faRedo"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faObjectGroup"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faObjectUngroup"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMinus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"]);
let AppComponent = class AppComponent {
    constructor(app, dialog) {
        this.app = app;
        this.dialog = dialog;
        this.title = 'room-layout';
        this.init = false;
        this.furnishings = _models_furnishings__WEBPACK_IMPORTED_MODULE_6__["FURNISHINGS"];
        this.defaultChairIndex = 0;
        this.previewItem = null;
        this.previewType = null;
    }
    ngOnInit() {
        const defaultChair = _models_furnishings__WEBPACK_IMPORTED_MODULE_6__["FURNISHINGS"].chairs[0];
        setTimeout(() => {
            this.app.defaultChair.next(defaultChair);
            this.init = true;
        }, 100);
        this.initTextForm();
    }
    insert(object, type) {
        if (this.app.roomEdit) {
            return;
        }
        this.app.insertObject.next({ type, object });
    }
    defaultChairChanged(index) {
        this.defaultChairIndex = index;
        this.app.defaultChair.next(_models_furnishings__WEBPACK_IMPORTED_MODULE_6__["FURNISHINGS"].chairs[index]);
    }
    initTextForm() {
        this.textForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('New Text'),
            font_size: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](16),
            direction: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('HORIZONTAL')
        });
    }
    insertNewText() {
        this.insert(Object.assign({}, this.textForm.value, { name: 'TEXT:Text' }), 'TEXT');
    }
    layoutChairs() {
        const ref = this.dialog.open(_components_chairs_layout_chairs_layout_component__WEBPACK_IMPORTED_MODULE_8__["ChairsLayoutComponent"]);
        ref.afterClosed().subscribe(res => {
            if (!res) {
                return;
            }
            this.insert(res, 'LAYOUT');
        });
    }
    download(format) {
        this.app.performOperation.next(format);
    }
    onZoom(value) {
        this.app.zoom = value;
        this.app.performOperation.next('ZOOM');
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/view/view.component */ "./src/app/components/view/view.component.ts");
/* harmony import */ var _components_preview_furniture_preview_furniture_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/preview-furniture/preview-furniture.component */ "./src/app/components/preview-furniture/preview-furniture.component.ts");
/* harmony import */ var _components_chairs_layout_chairs_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chairs-layout/chairs-layout.component */ "./src/app/components/chairs-layout/chairs-layout.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"],
            _components_preview_furniture_preview_furniture_component__WEBPACK_IMPORTED_MODULE_8__["PreviewFurnitureComponent"],
            _components_chairs_layout_chairs_layout_component__WEBPACK_IMPORTED_MODULE_9__["ChairsLayoutComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [_components_chairs_layout_chairs_layout_component__WEBPACK_IMPORTED_MODULE_9__["ChairsLayoutComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AppService = class AppService {
    constructor() {
        this.roomEdit = false;
        this.states = [];
        this.redoStates = [];
        this.roomEditOperate = 'CORNER';
        this.roomEditStates = [];
        this.roomEditRedoStates = [];
        this.selections = [];
        this.ungroupable = false;
        this.insertObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultChair = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.performOperation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.roomEdition = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.saveState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.zoom = 100;
        this.saveState.subscribe(res => {
            if (this.roomEdit) {
                this.roomEditStates.push(res);
                this.roomEditRedoStates = [];
                return;
            }
            this.states.push(res);
            this.redoStates = [];
        });
    }
    editRoom() {
        this.roomEdit = true;
        this.roomEdition.next(true);
    }
    endEditRoom() {
        this.roomEdit = false;
        this.roomEdition.next(false);
    }
    undo() {
        if ((this.states.length === 1 && !this.roomEdit) || (this.roomEditStates.length === 1 && this.roomEdit)) {
            return;
        }
        this.performOperation.next('UNDO');
    }
    redo() {
        if ((this.redoStates.length === 0 && !this.roomEdit) || (this.roomEditRedoStates.length === 0 && this.roomEdit)) {
            return;
        }
        this.performOperation.next('REDO');
    }
    clone() {
        this.copy(true);
    }
    copy(doClone = false) {
        this.performOperation.next('COPY');
        if (doClone) {
            setTimeout(() => this.paste(), 100);
        }
    }
    paste() {
        this.performOperation.next('PASTE');
    }
    delete() {
        if (!this.selections.length) {
            return;
        }
        this.performOperation.next('DELETE');
    }
    rotateAntiClockWise() {
        this.performOperation.next('ROTATE_ANTI');
    }
    rotateClockWise() {
        this.performOperation.next('ROTATE');
    }
    group() {
        this.performOperation.next('GROUP');
    }
    ungroup() {
        this.performOperation.next('UNGROUP');
    }
    placeInCenter(direction) {
        this.performOperation.next(direction);
    }
    arrange(side) {
        this.performOperation.next(side);
    }
    zoomIn() {
        if (this.zoom >= 150) {
            return;
        }
        this.zoom += 10;
        this.performOperation.next('ZOOM');
    }
    zoomOut() {
        if (this.zoom <= 20) {
            return;
        }
        this.zoom -= 10;
        this.performOperation.next('ZOOM');
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppService);



/***/ }),

/***/ "./src/app/components/chairs-layout/chairs-layout.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/chairs-layout/chairs-layout.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".layout-chairs .layout-type {\n  padding: 24px 0;\n}\n.layout-chairs .layout-type mat-radio-button {\n  margin-right: 24px;\n}\n.layout-chairs label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 16px;\n}\n.layout-chairs span {\n  display: block;\n  font-size: 12px;\n  color: #555;\n}\n.layout-chairs .layout-option {\n  margin-bottom: 1rem;\n}\n.layout-chairs canvas {\n  border: 1px solid #ececec;\n  border-radius: 3px;\n}\n.layout-chairs p {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFpcnMtbGF5b3V0L0M6XFxTaHVqYWF0XFxTZWxmTGVhcm5pbmdcXGZsb29ycGxhbi1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGFpcnMtbGF5b3V0XFxjaGFpcnMtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYWlycy1sYXlvdXQvY2hhaXJzLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGVBQUE7QUNGSjtBREdJO0VBQ0Usa0JBQUE7QUNETjtBREtFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hKO0FETUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNKSjtBRFlFO0VBQ0UsbUJBQUE7QUNWSjtBRGFFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ1hKO0FEY0U7RUFDRSxnQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGFpcnMtbGF5b3V0L2NoYWlycy1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LWNoYWlycyB7XHJcbiAgLy8gbWluLXdpZHRoOiA3MDBweDtcclxuXHJcbiAgLmxheW91dC10eXBlIHtcclxuICAgIHBhZGRpbmc6IDI0cHggMDtcclxuICAgIG1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICB9XHJcblxyXG4gIC8vIGlucHV0IHtcclxuICAvLyAgIHdpZHRoOiA4MHB4O1xyXG4gIC8vICAgcGFkZGluZzogNnB4IDJweDtcclxuICAvLyB9XHJcblxyXG4gIC5sYXlvdXQtb3B0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBjYW52YXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuIiwiLmxheW91dC1jaGFpcnMgLmxheW91dC10eXBlIHtcbiAgcGFkZGluZzogMjRweCAwO1xufVxuLmxheW91dC1jaGFpcnMgLmxheW91dC10eXBlIG1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4ubGF5b3V0LWNoYWlycyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5sYXlvdXQtY2hhaXJzIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzU1NTtcbn1cbi5sYXlvdXQtY2hhaXJzIC5sYXlvdXQtb3B0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5sYXlvdXQtY2hhaXJzIGNhbnZhcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VjZWM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5sYXlvdXQtY2hhaXJzIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/chairs-layout/chairs-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/chairs-layout/chairs-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChairsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChairsLayoutComponent", function() { return ChairsLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _models_furnishings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/furnishings */ "./src/app/models/furnishings.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers */ "./src/app/helpers.ts");







const WIDTH = 1100, HEIGHT = 400;
let ChairsLayoutComponent = class ChairsLayoutComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.layoutOption = 'NORMAL';
        this.chairs = [];
        this.zoom = 100;
    }
    ngOnInit() {
        this.chairs = _models_furnishings__WEBPACK_IMPORTED_MODULE_5__["FURNISHINGS"].chairs;
        this.rectBlock = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            chair: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            rows: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1),
            sections: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1),
            chairs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](12),
            spacing_chair: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            spacing_row: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](22),
            spacing_sections: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([1, 2, 3, 4].map(() => new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](5)))
        });
        const array = [];
        for (let i = 0; i < 20; i++) {
            array.push(i);
        }
        this.curvedBlock = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            chair: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            radius: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](200),
            angle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](180),
            rows: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1),
            spacing_row: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](40),
            chairs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](new Array(10).fill(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](10))),
        });
        this.view = new fabric__WEBPACK_IMPORTED_MODULE_3__["fabric"].Canvas('layout_chairs');
        this.view.setWidth(WIDTH);
        this.view.setHeight(HEIGHT);
        this.rectBlock.valueChanges.subscribe(() => this.changeLayout());
        this.curvedBlock.valueChanges.subscribe(() => this.changeLayout());
        this.changeLayout();
    }
    layoutOptionChanged(value) {
        this.layoutOption = value;
        this.changeLayout();
    }
    changeLayout() {
        debugger;
        const chrs = [];
        if (this.layoutOption === 'CURVED') {
            const { radius, angle, rows, chair, spacing_row, chairs } = this.curvedBlock.value;
            const start = -(angle / 2);
            for (let r = 0; r < rows; r++) {
                const N = chairs[r], A = angle / N;
                const rad = radius + r * spacing_row;
                for (let i = 0; i <= N; i += 1) {
                    const ca = start + i * A;
                    const chr = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["createShape"])(this.chairs[chair], _helpers__WEBPACK_IMPORTED_MODULE_6__["RL_STROKE"], _helpers__WEBPACK_IMPORTED_MODULE_6__["RL_FILL"]);
                    chr.angle = ca;
                    const x = Math.sin(this.toRadians(ca)) * rad;
                    const y = Math.cos(this.toRadians(ca)) * rad;
                    chr.left = x;
                    chr.top = -y;
                    chr.angle += 180;
                    chrs.push(chr);
                }
            }
        }
        else {
            const { rows, sections, chairs, spacing_chair, spacing_row, chair } = this.rectBlock.value;
            const total = rows * chairs;
            const cps = Math.floor(chairs / sections); // Chairs per section
            let x = 0, y = 0;
            for (let i = 1; i <= total; i++) {
                const chr = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["createShape"])(this.chairs[chair], _helpers__WEBPACK_IMPORTED_MODULE_6__["RL_STROKE"], _helpers__WEBPACK_IMPORTED_MODULE_6__["RL_FILL"]);
                chr.left = x, chr.top = y;
                if (i % chairs === 0) {
                    y += (spacing_row + chr.height);
                    x = 0;
                }
                else {
                    x += (chr.width + spacing_chair);
                    const s = Math.floor(i % chairs / cps);
                    if (i % chairs % cps === 0 && s + 1 <= this.sections) {
                        x += this.rectBlock.value.spacing_sections[s - 1];
                    }
                }
                chrs.push(chr);
            }
        }
        this.view.clear();
        this.layout = new fabric__WEBPACK_IMPORTED_MODULE_3__["fabric"].Group(chrs, {
            originX: 'center',
            originY: 'center',
            left: WIDTH / 2,
            top: HEIGHT / 2,
            selectable: false,
            name: 'BLOCK:Chairs',
            hasControls: false,
        });
        this.layout.scale(this.zoom / 100);
        this.view.add(this.layout);
        this.view.renderAll();
    }
    onZoom(value) {
        this.zoom = value;
        this.layout.scale(value / 100);
        this.view.renderAll();
    }
    get spacing_sections() {
        debugger;
        const c = this.rectBlock.get('spacing_sections');
        return c.controls;
    }
    get sections() {
        return this.rectBlock.value.sections;
    }
    get curved_chairs() {
        const c = this.curvedBlock.get('chairs');
        return c.controls;
    }
    get curved_rows() {
        return this.curvedBlock.value.rows;
    }
    create() {
        this.layout.selectable = true;
        this.layout.scale(1);
        this.dialogRef.close(this.layout);
    }
    cancel() {
        this.dialogRef.close();
    }
    toRadians(angle) {
        return angle * (Math.PI / 180);
    }
    toDegrees(radian) {
        return radian * (180 / Math.PI);
    }
};
ChairsLayoutComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
];
ChairsLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chairs-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chairs-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chairs-layout/chairs-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chairs-layout.component.scss */ "./src/app/components/chairs-layout/chairs-layout.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
], ChairsLayoutComponent);



/***/ }),

/***/ "./src/app/components/preview-furniture/preview-furniture.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/preview-furniture/preview-furniture.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas {\n  border: 1px solid #ececec;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmV2aWV3LWZ1cm5pdHVyZS9DOlxcU2h1amFhdFxcU2VsZkxlYXJuaW5nXFxmbG9vcnBsYW4tYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJldmlldy1mdXJuaXR1cmVcXHByZXZpZXctZnVybml0dXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ByZXZpZXctZnVybml0dXJlL3ByZXZpZXctZnVybml0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJldmlldy1mdXJuaXR1cmUvcHJldmlldy1mdXJuaXR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VjZWM7XHJcbn0iLCJjYW52YXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/preview-furniture/preview-furniture.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/preview-furniture/preview-furniture.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PreviewFurnitureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewFurnitureComponent", function() { return PreviewFurnitureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./src/app/helpers.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");






let RL_DEFAULT_CHAIR = null;
let PreviewFurnitureComponent = class PreviewFurnitureComponent {
    constructor(app) {
        this.app = app;
    }
    ngOnInit() {
        this.id = uuid__WEBPACK_IMPORTED_MODULE_3__["v4"]();
        this.app.defaultChair.subscribe(res => {
            this.canvas.clear();
            RL_DEFAULT_CHAIR = res;
            const type = this.type, object = this.furniture;
            this.handleObjectInsertion({ type, object });
            this.canvas.renderAll();
        });
    }
    ngAfterViewInit() {
        const canvas = new fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Canvas(this.id);
        canvas.setWidth(_helpers__WEBPACK_IMPORTED_MODULE_4__["RL_PREVIEW_WIDTH"]);
        canvas.setHeight(_helpers__WEBPACK_IMPORTED_MODULE_4__["RL_PREVIEW_HEIGHT"]);
        this.canvas = canvas;
    }
    handleObjectInsertion({ type, object }) {
        const group = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["createFurniture"])(type, object, RL_DEFAULT_CHAIR);
        group.left = _helpers__WEBPACK_IMPORTED_MODULE_4__["RL_PREVIEW_WIDTH"] / 2;
        group.top = _helpers__WEBPACK_IMPORTED_MODULE_4__["RL_PREVIEW_HEIGHT"] / 2;
        group.selectable = false;
        group.hoverCursor = 'pointer';
        this.canvas.add(group);
    }
};
PreviewFurnitureComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PreviewFurnitureComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PreviewFurnitureComponent.prototype, "furniture", void 0);
PreviewFurnitureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preview-furniture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./preview-furniture.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/preview-furniture/preview-furniture.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./preview-furniture.component.scss */ "./src/app/components/preview-furniture/preview-furniture.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]])
], PreviewFurnitureComponent);



/***/ }),

/***/ "./src/app/components/view/view.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/view/view.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-container {\n  padding: 24px;\n  overflow: auto;\n  height: calc(100% - 199px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3L0M6XFxTaHVqYWF0XFxTZWxmTGVhcm5pbmdcXGZsb29ycGxhbi1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx2aWV3XFx2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ZpZXcvdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTk5cHgpXHJcbn1cclxuIiwiLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTk5cHgpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/view/view.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/view/view.component.ts ***!
  \***************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers */ "./src/app/helpers.ts");







const { RL_VIEW_WIDTH, RL_VIEW_HEIGHT, RL_FOOT, RL_AISLEGAP, RL_ROOM_OUTER_SPACING, RL_ROOM_INNER_SPACING, RL_ROOM_STROKE, RL_CORNER_FILL, RL_UNGROUPABLES, RL_CREDIT_TEXT, RL_CREDIT_TEXT_PARAMS } = _helpers__WEBPACK_IMPORTED_MODULE_6__;
const { Line, Point } = fabric__WEBPACK_IMPORTED_MODULE_3__["fabric"];
const HORIZONTAL = 'HORIZONTAL', VERTICAL = 'VERTICAL', OFFSET = RL_ROOM_INNER_SPACING / 2;
const Left = (wall) => wall.x1 < wall.x2 ? wall.x1 : wall.x2;
const Top = (wall) => wall.y1 < wall.y2 ? wall.y1 : wall.y2;
const Right = (wall) => wall.x1 > wall.x2 ? wall.x1 : wall.x2;
const Bottom = (wall) => wall.y1 > wall.y2 ? wall.y1 : wall.y2;
let ViewComponent = class ViewComponent {
    constructor(app) {
        this.app = app;
        this.corners = [];
        this.walls = [];
        this.lastObjectDefinition = null;
        this.lastObject = null;
        this.CTRL_KEY_DOWN = false;
        this.MOVE_WALL_ID = -1;
        this.ROOM_SIZE = { width: 960, height: 480 };
        this.DEFAULT_CHAIR = null;
        this.REMOVE_DW = false;
    }
    ngOnInit() {
        this.app.roomEdition.subscribe(doEdit => {
            this.corners.forEach(c => this.setCornerStyle(c));
            this.drawRoom();
            if (doEdit) {
                this.editRoom();
            }
            else {
                this.cancelRoomEdition();
            }
        });
        this.app.insertObject.subscribe(res => {
            this.handleObjectInsertion(res);
            this.saveState();
        });
        this.app.defaultChair.subscribe(res => this.DEFAULT_CHAIR = res);
        this.app.performOperation.subscribe(operation => {
            switch (operation) {
                case 'UNDO':
                    this.undo();
                    break;
                case 'REDO':
                    this.redo();
                    break;
                case 'COPY':
                    this.copy();
                    break;
                case 'PASTE':
                    this.paste();
                    break;
                case 'DELETE':
                    this.delete();
                    break;
                case 'ROTATE':
                    this.rotate();
                    break;
                case 'ROTATE_ANTI':
                    this.rotate(false);
                    break;
                case 'GROUP':
                    this.group();
                    break;
                case 'UNGROUP':
                    this.ungroup();
                    break;
                case 'HORIZONTAL':
                case 'VERTICAL':
                    this.placeInCenter(operation);
                    break;
                case 'ROOM_OPERATION':
                    this.drawRoom();
                    break;
                case 'PNG':
                case 'SVG':
                    this.saveAs(operation);
                    break;
                case 'ZOOM':
                    this.setZoom();
                    break;
                case 'LEFT':
                case 'CENTER':
                case 'RIGHT':
                case 'TOP':
                case 'MIDDLE':
                case 'BOTTOM':
                    this.arrange(operation);
                    break;
            }
        });
    }
    ngAfterViewInit() {
        /** Initialize canvas */
        this.setCanvasView();
        /** Add room */
        this.setRoom(this.ROOM_SIZE);
        this.saveState();
    }
    get room_origin() {
        return RL_ROOM_OUTER_SPACING + RL_ROOM_INNER_SPACING;
    }
    onKeyDown(event) {
        const code = event.key || event.keyCode;
        // Ctrl Key is down
        if (event.ctrlKey) {
            this.CTRL_KEY_DOWN = true;
            // Ctrl + Shift + Z
            if (event.shiftKey && code === 90)
                this.app.redo();
            else if (code === 90)
                this.app.undo();
            else if (code === 67)
                this.app.copy();
            else if (code === 86)
                this.paste();
            else if (code === 37)
                this.rotate();
            else if (code === 39)
                this.rotate(false);
            else if (code === 71)
                this.group();
        }
        else if (code === 46)
            this.delete();
        else if (code === 37)
            this.move('LEFT');
        else if (code === 38)
            this.move('UP');
        else if (code === 39)
            this.move('RIGHT');
        else if (code === 40)
            this.move('DOWN');
    }
    onKeyUp(event) {
        if (event.key === 'Control') {
            this.CTRL_KEY_DOWN = false;
        }
    }
    onScroll(event) { }
    setGroupableState() {
        if (this.app.selections.length > 1) {
            this.app.ungroupable = false;
            return;
        }
        const obj = this.view.getActiveObject();
        const type = obj.name ? obj.name.split(':')[0] : '';
        if (RL_UNGROUPABLES.indexOf(type) > -1) {
            this.app.ungroupable = false;
        }
        else {
            this.app.ungroupable = true;
        }
    }
    onSelected() {
        const active = this.view.getActiveObject();
        active.lockScalingX = true, active.lockScalingY = true;
        if (!active.name) {
            active.name = 'GROUP';
        }
        this.app.selections = this.view.getActiveObjects();
        this.setGroupableState();
    }
    /**********************************************************************************************************
     * init the canvas view & bind events
     * -------------------------------------------------------------------------------------------------------
     */
    setCanvasView() {
        const canvas = new fabric__WEBPACK_IMPORTED_MODULE_3__["fabric"].Canvas('main');
        canvas.setWidth(RL_VIEW_WIDTH * RL_FOOT);
        canvas.setHeight(RL_VIEW_HEIGHT * RL_FOOT);
        this.view = canvas;
        const cornersOfWall = (obj) => {
            const id = Number(obj.name.split(':')[1]);
            const v1Id = id;
            const v1 = this.corners[v1Id];
            const v2Id = (id + 1) % this.walls.length;
            const v2 = this.corners[v2Id];
            return { v1, v1Id, v2, v2Id };
        };
        this.view.on('selection:created', (e) => {
            if (this.app.roomEdit) {
                return;
            }
            this.onSelected();
        });
        this.view.on('selection:updated', (e) => {
            if (this.app.roomEdit) {
                return;
            }
            this.onSelected();
        });
        this.view.on('selection:cleared', (e) => {
            if (this.app.roomEdit) {
                return;
            }
            this.app.selections = [];
            this.app.ungroupable = false;
        });
        this.view.on('object:moved', () => {
            if (this.MOVE_WALL_ID !== -1) {
                this.MOVE_WALL_ID = -1;
            }
            this.saveState();
        });
        this.view.on('object:rotated', () => this.saveState());
        this.view.on('mouse:down:before', (e) => {
            const obj = e.target;
            if (this.app.roomEdit && obj && obj.name.indexOf('WALL') > -1 && obj instanceof Line) {
                let { v1, v2, v1Id, v2Id } = cornersOfWall(obj);
                const v0Id = (v1Id === 0) ? this.corners.length - 1 : v1Id - 1;
                const v3Id = (v2Id === this.corners.length - 1) ? 0 : v2Id + 1;
                const v0 = this.corners[v0Id];
                const v3 = this.corners[v3Id];
                this.MOVE_WALL_ID = v1Id;
                if ((v0.top === v1.top && v1.top === v2.top) || (v0.left === v1.left && v1.left === v2.left)) {
                    this.corners.splice(v1Id, 0, this.drawCorner(new Point(v1.left, v1.top)));
                    this.MOVE_WALL_ID = v1Id + 1;
                    v2Id += 1;
                }
                if ((v1.top === v2.top && v2.top === v3.top) || (v1.left === v2.left && v2.left === v3.left)) {
                    this.corners.splice(v2Id + 1, 0, this.drawCorner(new Point(v2.left, v2.top)));
                }
                this.drawRoom();
                this.saveState();
            }
        });
        this.view.on('object:moving', (e) => {
            if (this.MOVE_WALL_ID !== -1) {
                const p = e['pointer'];
                const v1 = this.corners[this.MOVE_WALL_ID];
                const v2 = this.corners[(this.MOVE_WALL_ID + 1) % this.corners.length];
                const direction = v1.left === v2.left ? 'HORIZONTAL' : 'VERTICAL';
                if (p.y < RL_ROOM_OUTER_SPACING) {
                    p.y = RL_ROOM_OUTER_SPACING;
                }
                if (p.x < RL_ROOM_OUTER_SPACING) {
                    p.x = RL_ROOM_OUTER_SPACING;
                }
                if (direction === 'VERTICAL') {
                    v1.top = v2.top = p.y;
                }
                else {
                    v1.left = v2.left = p.x;
                }
                this.drawRoom();
            }
            const obj = e.target;
            const point = e['pointer'];
            if (obj && this.isDW(obj) && obj instanceof fabric__WEBPACK_IMPORTED_MODULE_3__["fabric"].Group) {
                let wall, distance = 999;
                const dist2 = (v, w) => (v.x - w.x) * (v.x - w.x) + (v.y - w.y) * (v.y - w.y);
                const point_to_line = (p, v, w) => Math.sqrt(distToSegmentSquared(p, v, w));
                const distToSegmentSquared = (p, v, w) => {
                    const l2 = dist2(v, w);
                    if (l2 == 0)
                        return dist2(p, v);
                    const t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
                    if (t < 0)
                        return dist2(p, v);
                    if (t > 1)
                        return dist2(p, w);
                    return dist2(p, { x: v.x + t * (w.x - v.x), y: v.y + t * (w.y - v.y) });
                };
                this.walls.forEach(w => {
                    const d = point_to_line(point, { x: w.x1, y: w.y1 }, { x: w.x2, y: w.y2 });
                    if (d < distance) {
                        distance = d, wall = w;
                    }
                });
                if (distance > 20) {
                    this.REMOVE_DW = true;
                }
                else {
                    this.REMOVE_DW = false;
                    const direction = this.directionOfWall(wall);
                    if (direction === HORIZONTAL) {
                        this.locateDW(obj, wall, point.x, Top(wall));
                    }
                    else {
                        this.locateDW(obj, wall, Left(wall), point.y);
                    }
                }
            }
        });
        this.view.on('mouse:up', (e) => {
            const obj = e.target;
            if (this.REMOVE_DW) {
                this.view.remove(obj);
                this.REMOVE_DW = false;
            }
        });
        this.view.on('mouse:dblclick', (e) => {
            const obj = e.target;
            if (this.app.roomEdit && this.app.roomEditOperate === 'CORNER' && obj && obj.name.indexOf('WALL') > -1 && obj instanceof Line) {
                const p = e['pointer'];
                const { v1, v1Id, v2, v2Id } = cornersOfWall(obj);
                const ind = v1Id < v2Id ? v1Id : v2Id;
                if (v1.left === v2.left) {
                    p.x = v1.left;
                }
                else if (v1.top === v2.top) {
                    p.y = v1.top;
                }
                const newCorner = this.drawCorner(new Point(p.x, p.y));
                if (Math.abs(v1Id - v2Id) != 1) {
                    this.corners.push(newCorner);
                }
                else {
                    this.corners.splice(ind + 1, 0, newCorner);
                }
                this.drawRoom();
                this.saveState();
            }
        });
    }
    /**********************************************************************************************************
     * draw Rooms defined in Model
     * -------------------------------------------------------------------------------------------------------
     */
    setRoom({ width, height }) {
        if (this.walls.length) {
            this.view.remove(...this.walls);
            this.view.renderAll();
        }
        const LT = new Point(RL_ROOM_OUTER_SPACING, RL_ROOM_OUTER_SPACING);
        const RT = new Point(LT.x + width, LT.y);
        const LB = new Point(LT.x, LT.y + height);
        const RB = new Point(RT.x, LB.y);
        this.corners = [LT, RT, RB, LB].map(p => this.drawCorner(p));
        this.drawRoom();
    }
    /**********************************************************************************************************
     * set corner according to current edition status
     * -------------------------------------------------------------------------------------------------------
     */
    setCornerStyle(c) {
        c.moveCursor = this.view.freeDrawingCursor;
        c.hoverCursor = this.view.freeDrawingCursor;
        c.selectable = false;
        c.evented = false;
        c.width = c.height = (RL_ROOM_INNER_SPACING / (this.app.roomEdit ? 1.5 : 2)) * 2;
        c.set('fill', this.app.roomEdit ? RL_CORNER_FILL : RL_ROOM_STROKE);
    }
    /**********************************************************************************************************
     * draw corner
     * -------------------------------------------------------------------------------------------------------
     */
    drawCorner(p) {
        const c = new fabric__WEBPACK_IMPORTED_MODULE_3__["fabric"].Rect({
            left: p.x,
            top: p.y,
            strokeWidth: 0,
            hasControls: false,
            originX: 'center',
            originY: 'center',
            name: 'CORNER'
        });
        this.setCornerStyle(c);
        return c;
    }
    /**********************************************************************************************************
     * draw room
     * -------------------------------------------------------------------------------------------------------
     */
    drawRoom() {
        const exists = this.view.getObjects().filter(obj => obj.name.indexOf('WALL') > -1 || obj.name === 'CORNER');
        this.view.remove(...exists);
        this.view.add(...this.corners);
        const wall = (coords, index) => new Line(coords, {
            stroke: RL_ROOM_STROKE,
            strokeWidth: RL_ROOM_INNER_SPACING,
            name: `WALL:${index}`,
            originX: 'center',
            originY: 'center',
            hoverCursor: this.app.roomEdit ? this.view.moveCursor : this.view.defaultCursor,
            hasControls: false,
            hasBorders: false,
            selectable: this.app.roomEdit,
            evented: this.app.roomEdit,
            cornerStyle: 'rect'
        });
        let LT = new Point(9999, 9999), RB = new Point(0, 0);
        this.walls = this.corners.map((corner, i) => {
            const start = corner;
            const end = (i === this.corners.length - 1) ? this.corners[0] : this.corners[i + 1];
            if (corner.top < LT.x && corner.left < LT.y)
                LT = new Point(corner.left, corner.top);
            if (corner.top > RB.y && corner.left > RB.y)
                RB = new Point(corner.left, corner.top);
            const w = wall([start.left, start.top, end.left, end.top], i);
            return w;
        });
        this.view.add(...this.walls);
        this.walls.forEach(w => w.sendToBack());
        this.ROOM_SIZE = { width: RB.x - LT.x, height: RB.y - LT.y };
    }
    locateDW(dw, wall, x, y) {
        const dWall = this.directionOfWall(wall);
        const dDW = dw.angle % 180 === 0 ? HORIZONTAL : VERTICAL;
        if (dWall != dDW) {
            dw.angle = (dw.angle + 90) % 360;
        }
        dw.top = y, dw.left = x;
        const center = dw.getCenterPoint();
        if (dWall === HORIZONTAL)
            center.y < dw.top ? dw.top += OFFSET : dw.top -= OFFSET;
        else
            center.x < dw.left ? dw.left += OFFSET : dw.left -= OFFSET;
        return dw;
    }
    setDWOrigin(dw) {
        if (!dw.flipX && !dw.flipY)
            dw.originX = 'left', dw.originY = 'top';
        else if (dw.flipX && !dw.flipY)
            dw.originX = 'right', dw.originY = 'top';
        else if (!dw.flipX && dw.flipY)
            dw.originX = 'left', dw.originY = 'bottom';
        else if (dw.flipX && dw.flipY)
            dw.originX = 'right', dw.originY = 'bottom';
        return dw;
    }
    /**********************************************************************************************************/
    editRoom() {
        this.view.getObjects().forEach(r => {
            if (r.name.indexOf('WALL') !== -1) {
                r.selectable = true;
                r.evented = true;
            }
            else {
                r.selectable = false;
                r.evented = false;
            }
        });
        if (this.app.roomEditStates.length === 0)
            this.saveState();
    }
    cancelRoomEdition() {
        this.view.getObjects().forEach(r => {
            if (r.name.indexOf('WALL') !== -1 || r.name.indexOf('CORNER') !== -1) {
                r.selectable = false;
                r.evented = false;
            }
            else {
                r.selectable = true;
                r.evented = true;
            }
        });
    }
    handleObjectInsertion({ type, object }) {
        if (type === 'ROOM') {
            this.setRoom(object);
            return;
        }
        const group = _helpers__WEBPACK_IMPORTED_MODULE_6__["createFurniture"](type, object, this.DEFAULT_CHAIR);
        if (type === 'DOOR' || type === 'WINDOW') {
            group.originX = 'center';
            group.originY = 'top';
            const dws = this.filterObjects(['DOOR', 'WINDOW']);
            const dw = dws.length ? dws[dws.length - 1] : null;
            let wall, x, y;
            if (!dw) {
                wall = this.walls[0];
                x = Left(wall) + RL_AISLEGAP;
                y = Top(wall);
            }
            else {
                const od = dw.angle % 180 === 0 ? HORIZONTAL : VERTICAL;
                let placeOnNextWall = false;
                wall = this.wallOfDW(dw);
                if (od === HORIZONTAL) {
                    x = dw.left + dw.width + RL_AISLEGAP;
                    y = Top(wall);
                    if (x + group.width > Right(wall)) {
                        placeOnNextWall = true;
                    }
                }
                else {
                    y = dw.top + dw.width + RL_AISLEGAP;
                    x = Left(wall);
                    if (y + group.width > Bottom(wall)) {
                        placeOnNextWall = true;
                    }
                }
                if (placeOnNextWall) {
                    wall = this.walls[(Number(wall.name.split(':')[1]) + 1) % this.walls.length];
                    const nd = this.directionOfWall(wall);
                    if (nd === HORIZONTAL) {
                        x = Left(wall) + RL_AISLEGAP, y = Top(wall);
                    }
                    else {
                        x = Left(wall), y = Top(wall) + RL_AISLEGAP;
                    }
                }
            }
            this.locateDW(group, wall, x, y);
            group.hasBorders = false;
            this.view.add(group);
            return;
        }
        // retrieve spacing from object, use rlAisleGap if not specified
        const newLR = object.lrSpacing || RL_AISLEGAP;
        const newTB = object.tbSpacing || RL_AISLEGAP;
        // object groups use center as origin, so add half width and height of their reported
        // width and size; note that this will not account for chairs around tables, which is
        // intentional; they go in the specified gaps
        group.left = newLR + (group.width / 2) + this.room_origin;
        group.top = newTB + (group.height / 2) + this.room_origin;
        if (this.lastObject) {
            // retrieve spacing from object, use rlAisleGap if not specified
            const lastLR = this.lastObjectDefinition.lrSpacing || RL_AISLEGAP;
            const lastTB = this.lastObjectDefinition.tbSpacing || RL_AISLEGAP;
            // calculate maximum gap required by last and this object
            // Note: this isn't smart enough to get new row gap right when
            // object above had a much bigger gap, etc. We aren't fitting yet.
            const useLR = Math.max(newLR, lastLR), useTB = Math.max(newTB, lastTB);
            // using left/top vocab, though all objects are now centered
            const lastWidth = this.lastObjectDefinition.width || 100;
            const lastHeight = this.lastObjectDefinition.height || 40;
            let newLeft = this.lastObject.left + lastWidth + useLR;
            let newTop = this.lastObject.top;
            // make sure we fit left to right, including our required right spacing
            if (newLeft + group.width + newLR > this.ROOM_SIZE.width) {
                newLeft = newLR + (group.width / 2);
                newTop += lastHeight + useTB;
            }
            group.left = newLeft;
            group.top = newTop;
            if ((group.left - group.width / 2) < this.room_origin) {
                group.left += this.room_origin;
            }
            if ((group.top - group.height / 2) < this.room_origin) {
                group.top += this.room_origin;
            }
        }
        this.view.add(group);
        this.view.setActiveObject(group);
        this.lastObject = group;
        this.lastObjectDefinition = object;
    }
    /** Save current state */
    saveState() {
        const state = this.view.toDatalessJSON(['name', 'hasControls', 'selectable', 'hasBorders', 'evented', 'hoverCursor', 'moveCursor']);
        this.app.saveState.next(JSON.stringify(state));
    }
    undo() {
        let current = null;
        if (this.app.roomEdit) {
            const state = this.app.roomEditStates.pop();
            this.app.roomEditRedoStates.push(state);
            current = this.app.roomEditStates[this.app.roomEditStates.length - 1];
        }
        else {
            const state = this.app.states.pop();
            this.app.redoStates.push(state);
            current = this.app.states[this.app.states.length - 1];
        }
        this.view.clear();
        this.view.loadFromDatalessJSON(current, () => {
            this.view.renderAll();
            this.corners = this.view.getObjects().filter(obj => obj.name === 'CORNER');
            this.drawRoom();
        });
    }
    /** Redo operation */
    redo() {
        let current = null;
        if (this.app.roomEdit) {
            current = this.app.roomEditRedoStates.pop();
            this.app.roomEditStates.push(current);
        }
        else {
            current = this.app.redoStates.pop();
            this.app.states.push(current);
        }
        this.view.clear();
        this.view.loadFromDatalessJSON(current, () => {
            this.view.renderAll();
            this.corners = this.view.getObjects().filter(obj => obj.name === 'CORNER');
            this.drawRoom();
        });
    }
    /** Copy operation */
    copy() {
        if (this.app.roomEdit) {
            return;
        }
        const active = this.view.getActiveObject();
        if (!active) {
            return;
        }
        active.clone(cloned => this.app.copied = cloned, ['name', 'hasControls']);
    }
    /** Paste operation */
    paste() {
        if (!this.app.copied || this.app.roomEdit) {
            return;
        }
        this.app.copied.clone((cloned) => {
            this.view.discardActiveObject();
            cloned.set({
                left: cloned.left + RL_AISLEGAP,
                top: cloned.top + RL_AISLEGAP
            });
            if (cloned.type === 'activeSelection') {
                cloned.canvas = this.view;
                cloned.forEachObject(obj => this.view.add(obj));
                cloned.setCoords();
            }
            else {
                this.view.add(cloned);
            }
            this.app.copied.top += RL_AISLEGAP;
            this.app.copied.left += RL_AISLEGAP;
            this.view.setActiveObject(cloned);
            this.view.requestRenderAll();
            this.saveState();
        }, ['name', 'hasControls']);
    }
    /** Delete operation */
    delete() {
        if (this.app.roomEdit) {
            return;
        }
        this.app.selections.forEach(selection => this.view.remove(selection));
        this.view.discardActiveObject();
        this.view.requestRenderAll();
        this.saveState();
    }
    /** Rotate Operation */
    rotate(clockwise = true) {
        if (this.app.roomEdit) {
            return;
        }
        let angle = this.CTRL_KEY_DOWN ? 90 : 15;
        const obj = this.view.getActiveObject();
        if (!obj) {
            return;
        }
        if ((obj.originX !== 'center' || obj.originY !== 'center') && obj.centeredRotation) {
            obj.originX = 'center';
            obj.originY = 'center';
            obj.left += obj.width / 2;
            obj.top += obj.height / 2;
        }
        if (this.isDW(obj)) {
            angle = obj.angle + (clockwise ? 180 : -180);
        }
        else {
            angle = obj.angle + (clockwise ? angle : -angle);
        }
        if (angle > 360) {
            angle -= 360;
        }
        else if (angle < 0) {
            angle += 360;
        }
        obj.angle = angle;
        this.view.requestRenderAll();
    }
    /** Group */
    group() {
        if (this.app.roomEdit) {
            return;
        }
        const active = this.view.getActiveObject();
        if (!(this.app.selections.length > 1 && active instanceof fabric__WEBPACK_IMPORTED_MODULE_3__["fabric"].ActiveSelection)) {
            return;
        }
        active.toGroup();
        active.lockScalingX = true, active.lockScalingY = true;
        this.onSelected();
        this.view.renderAll();
        this.saveState();
    }
    ungroup() {
        if (this.app.roomEdit) {
            return;
        }
        const active = this.view.getActiveObject();
        if (!(active && active instanceof fabric__WEBPACK_IMPORTED_MODULE_3__["fabric"].Group)) {
            return;
        }
        active.toActiveSelection();
        active.lockScalingX = true, active.lockScalingY = true;
        this.onSelected();
        this.view.renderAll();
        this.saveState();
    }
    move(direction, increament = 6) {
        if (this.app.roomEdit) {
            return;
        }
        const active = this.view.getActiveObject();
        if (!active) {
            return;
        }
        switch (direction) {
            case 'LEFT':
                active.left -= increament;
                break;
            case 'UP':
                active.top -= increament;
                break;
            case 'RIGHT':
                active.left += increament;
                break;
            case 'DOWN':
                active.top += increament;
                break;
        }
        this.view.requestRenderAll();
        this.saveState();
    }
    setZoom() {
        this.view.setZoom(this.app.zoom / 100);
        this.view.renderAll();
    }
    placeInCenter(direction) {
        const active = this.view.getActiveObject();
        if (!active) {
            return;
        }
        if (direction === 'HORIZONTAL') {
            active.left = this.ROOM_SIZE.width / 2 - (active.originX === 'center' ? 0 : active.width / 2);
        }
        else {
            active.top = this.ROOM_SIZE.height / 2 - (active.originX === 'center' ? 0 : active.height / 2);
        }
        active.setCoords();
        this.view.requestRenderAll();
        this.saveState();
    }
    arrange(action) {
        const rect = this.getBoundingRect(this.app.selections);
        action = action.toLowerCase();
        this.app.selections.forEach(s => {
            if (action === 'left' || action === 'right' || action === 'center') {
                s.left = rect[action];
            }
            else {
                s.top = rect[action];
            }
        });
        this.view.renderAll();
        this.saveState();
    }
    filterObjects(names) {
        return this.view.getObjects().filter(obj => names.some(n => obj.name.indexOf(n) > -1));
    }
    wallOfDW(dw) {
        const d = dw.angle % 180 === 0 ? HORIZONTAL : VERTICAL;
        return this.walls.find(w => Math.abs(d === HORIZONTAL ? w.top - dw.top : w.left - dw.left) === OFFSET);
    }
    directionOfWall(wall) {
        if (wall.x1 === wall.x2) {
            return VERTICAL;
        }
        else {
            return HORIZONTAL;
        }
    }
    isDW(object) {
        return object.name.indexOf('DOOR') > -1 || object.name.indexOf('WINDOW') > -1;
    }
    getBoundingRect(objects) {
        let top = 9999, left = 9999, right = 0, bottom = 0;
        objects.forEach(obj => {
            if (obj.left < top) {
                top = obj.top;
            }
            if (obj.left < left) {
                left = obj.left;
            }
            if (obj.top > bottom) {
                bottom = obj.top;
            }
            if (obj.left > right) {
                right = obj.left;
            }
        });
        const center = (left + right) / 2;
        const middle = (top + bottom) / 2;
        return { left, top, right, bottom, center, middle };
    }
    saveAs(format) {
        const { right, bottom } = this.getBoundingRect(this.corners);
        const width = this.view.getWidth();
        const height = this.view.getHeight();
        this.view.setWidth(right + RL_ROOM_OUTER_SPACING);
        this.view.setHeight(bottom + RL_ROOM_OUTER_SPACING + 12);
        this.view.setBackgroundColor('white', () => { });
        const credit = new fabric__WEBPACK_IMPORTED_MODULE_3__["fabric"].Text(RL_CREDIT_TEXT, Object.assign({}, RL_CREDIT_TEXT_PARAMS, { left: RL_ROOM_OUTER_SPACING, top: bottom + RL_ROOM_OUTER_SPACING - RL_CREDIT_TEXT_PARAMS.fontSize }));
        this.view.add(credit);
        this.view.discardActiveObject();
        this.view.renderAll();
        const restore = () => {
            this.view.remove(credit);
            this.view.setBackgroundColor('transparent', () => { });
            this.view.setWidth(width);
            this.view.setHeight(height);
            this.view.renderAll();
        };
        if (format === 'PNG') {
            const canvas = document.getElementById('main');
            canvas.toBlob((blob) => {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, `room_layout_${Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy-MM-dd-hh-mm-ss', 'en')}.png`);
                restore();
            });
        }
        else if (format === 'SVG') {
            const svg = this.view.toSVG();
            const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, `room_layout_${Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy-MM-dd-hh-mm-ss', 'en')}.svg`);
            restore();
        }
    }
};
ViewComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
];
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view/view.component.html")).default,
        host: {
            '(document:keydown)': 'onKeyDown($event)',
            '(document:keyup)': 'onKeyUp($event)'
        },
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.component.scss */ "./src/app/components/view/view.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]])
], ViewComponent);



/***/ }),

/***/ "./src/app/helpers.ts":
/*!****************************!*\
  !*** ./src/app/helpers.ts ***!
  \****************************/
/*! exports provided: createBasicShape, createTable, createShape, createText, createFurniture, RL_FILL, RL_STROKE, RL_CHAIR_STROKE, RL_CHAIR_FILL, RL_CHAIR_TUCK, RL_PREVIEW_HEIGHT, RL_PREVIEW_WIDTH, RL_VIEW_WIDTH, RL_VIEW_HEIGHT, RL_FOOT, RL_AISLEGAP, RL_ROOM_OUTER_SPACING, RL_ROOM_INNER_SPACING, RL_ROOM_STROKE, RL_CORNER_FILL, RL_UNGROUPABLES, RL_CREDIT_TEXT, RL_CREDIT_TEXT_PARAMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBasicShape", function() { return createBasicShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTable", function() { return createTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShape", function() { return createShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createText", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFurniture", function() { return createFurniture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_FILL", function() { return RL_FILL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_STROKE", function() { return RL_STROKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_CHAIR_STROKE", function() { return RL_CHAIR_STROKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_CHAIR_FILL", function() { return RL_CHAIR_FILL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_CHAIR_TUCK", function() { return RL_CHAIR_TUCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_PREVIEW_HEIGHT", function() { return RL_PREVIEW_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_PREVIEW_WIDTH", function() { return RL_PREVIEW_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_VIEW_WIDTH", function() { return RL_VIEW_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_VIEW_HEIGHT", function() { return RL_VIEW_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_FOOT", function() { return RL_FOOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_AISLEGAP", function() { return RL_AISLEGAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_ROOM_OUTER_SPACING", function() { return RL_ROOM_OUTER_SPACING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_ROOM_INNER_SPACING", function() { return RL_ROOM_INNER_SPACING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_ROOM_STROKE", function() { return RL_ROOM_STROKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_CORNER_FILL", function() { return RL_CORNER_FILL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_UNGROUPABLES", function() { return RL_UNGROUPABLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_CREDIT_TEXT", function() { return RL_CREDIT_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RL_CREDIT_TEXT_PARAMS", function() { return RL_CREDIT_TEXT_PARAMS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);


const { Group, Rect, Line, Circle, Ellipse, Path, Polygon, Polyline, Triangle } = fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"];
const RL_FILL = '#FFF', RL_STROKE = '#000', RL_PREVIEW_WIDTH = 140, RL_PREVIEW_HEIGHT = 120, RL_CHAIR_STROKE = '#999', RL_CHAIR_FILL = '#FFF', RL_CHAIR_TUCK = 6, RL_VIEW_WIDTH = 120, RL_VIEW_HEIGHT = 56, RL_FOOT = 12, RL_AISLEGAP = 12 * 3, RL_ROOM_OUTER_SPACING = 48, RL_ROOM_INNER_SPACING = 4, RL_ROOM_STROKE = '#000', RL_CORNER_FILL = '#88f', RL_UNGROUPABLES = ['CHAIR', 'MISCELLANEOUS', 'DOOR'], RL_CREDIT_TEXT = 'Created By https://github.com/ilhccc', RL_CREDIT_TEXT_PARAMS = { fontSize: 12, fontFamily: 'Arial', fill: '#999', left: 12 };
const createText = (properties) => {
    let { text } = properties;
    if (properties.direction === 'VERTICAL') {
        const chars = [];
        for (const char of text) {
            chars.push(char);
        }
        text = chars.join('\n');
    }
    return new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].IText(text, {
        fontSize: properties.font_size,
        lineHeight: 0.8,
        name: properties.name,
        hasControls: false
    });
};
/** Create Basic Shape  */
const createBasicShape = (part, stroke = '#aaaaaa', fill = 'white') => {
    debugger;
    if (part.definition.fill == null)
        part.definition.fill = fill;
    if (part.definition.stroke == null)
        part.definition.stroke = stroke;
    else if (part.definition.stroke == 'chair')
        part.definition.stroke = RL_CHAIR_STROKE;
    let fObj;
    switch (part.type) {
        case 'circle':
            fObj = new Circle(part.definition);
            break;
        case 'ellipse':
            fObj = new Ellipse(part.definition);
            break;
        case 'line':
            fObj = new Line(part.line, part.definition);
            break;
        case 'path':
            fObj = new Path(part.path, part.definition);
            break;
        case 'polygon':
            fObj = new Polygon(part.definition);
            break;
        case 'polyline':
            fObj = new Polyline(part.definition);
            break;
        case 'rect':
            fObj = new Rect(part.definition);
            break;
        case 'triangle':
            fObj = new Triangle(part.definition);
            break;
    }
    return (fObj);
};
const createFurniture = (type, object, chair = {}) => {
    if (type === 'TABLE') {
        return createTable(object, chair);
    }
    else if (type === 'TEXT') {
        return createText(object);
    }
    else if (type === 'LAYOUT') {
        return object;
    }
    else {
        return createShape(object, RL_STROKE, RL_FILL, type);
    }
};
/** Adding Chairs */
const createShape = (object, stroke = RL_CHAIR_STROKE, fill = RL_CHAIR_FILL, type = 'CHAIR') => {
    const parts = object.parts.map(obj => createBasicShape(obj, stroke, fill));
    const group = new Group(parts, {
        name: `${type}:${object.title}`,
        hasControls: false,
        originX: 'center',
        originY: 'center'
    });
    return group;
};
// All Create[Name]Object() functions should return a group
const createTable = (def, RL_DEFAULT_CHAIR, type = 'TABLE') => {
    // tables with chairs have the chairs full-height around the table
    const components = [];
    let index = 0;
    // Note that we're using the provided width and height for table placement
    // Issues may arise if rendered shape is larger/smaller, since it's positioned from center point
    const chairWidth = RL_DEFAULT_CHAIR.width;
    const chairHeight = RL_DEFAULT_CHAIR.height;
    const tableLeft = def.leftChairs > 0 ? (chairHeight - RL_CHAIR_TUCK) : 0;
    const tableTop = (chairHeight - RL_CHAIR_TUCK);
    if (def.shape == 'circle') {
        const origin_x = def.width / 2 + chairHeight - RL_CHAIR_TUCK;
        const origin_y = def.width / 2 + chairHeight - RL_CHAIR_TUCK;
        const x2 = origin_x;
        const y2 = 0 + chairHeight / 2;
        const rotation_origin = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Point(origin_x, origin_y);
        const tableRadius = def.width / 2;
        const radius = def.width / 2 + chairHeight; // outer radius of whole shape unit
        let angle = 0;
        const angleIncrement = 360 / (def.chairs > 0 ? def.chairs : 1);
        for (let x = 0; x < def.chairs; ++x) {
            // Note that width and height are the same for circle tables
            // width of whole area when done
            const width = def.width + chairHeight - (RL_CHAIR_TUCK * 2);
            components[index] = createShape(RL_DEFAULT_CHAIR, RL_CHAIR_STROKE, RL_CHAIR_FILL);
            const angle_radians = fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].util.degreesToRadians(angle);
            const end = fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].util.rotatePoint(new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Point(x2, y2), rotation_origin, angle_radians);
            components[index].left = end.x;
            components[index].top = end.y;
            components[index].angle = (angle + 180 > 360) ? (angle - 180) : (angle + 180);
            index++;
            angle += angleIncrement;
        }
        const tableCircle = {
            left: origin_x,
            top: origin_y,
            radius: tableRadius,
            fill: RL_FILL,
            stroke: RL_STROKE,
            originX: 'center',
            originY: 'center',
            name: 'DESK'
        };
        components[index] = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Circle(tableCircle);
    }
    else if (def.shape == 'rect') {
        const tableRect = {
            width: def.width,
            height: def.height,
            fill: RL_FILL,
            stroke: RL_STROKE,
            name: 'DESK'
        };
        // calculate gap between chairs, with extra for gap to end of table
        let gap = 0, firstOffset = 0, leftOffset = 0, topOffset = 0;
        // top chair row
        // Note that chairs 'look up' by default, so the bottom row isn't rotated
        // and the top row is.
        gap = (def.width - (def.topChairs * chairWidth)) / (def.topChairs + 1);
        firstOffset = gap + tableLeft;
        leftOffset = firstOffset;
        topOffset = 0;
        for (let x = 0; x < 0; x++) {
            components[index] = createShape(RL_DEFAULT_CHAIR, RL_CHAIR_STROKE, RL_CHAIR_FILL);
            components[index].angle = -180;
            components[index].left = leftOffset + chairWidth / 2;
            components[index].top = topOffset + chairHeight / 2;
            index++;
            leftOffset += (chairWidth + gap);
        }
        // bottom chair row
        gap = (def.width - (def.bottomChairs * chairWidth)) / (def.bottomChairs + 1);
        firstOffset = gap + tableLeft;
        leftOffset = firstOffset;
        topOffset = tableRect.height + chairHeight - (RL_CHAIR_TUCK * 2);
        for (let x = 0; x < def.bottomChairs; x++) {
            components[index] = createShape(RL_DEFAULT_CHAIR, RL_CHAIR_STROKE, RL_CHAIR_FILL);
            components[index].left = leftOffset + chairWidth / 2;
            components[index].top = topOffset + chairWidth / 2;
            ++index;
            leftOffset += (chairWidth + gap);
        }
        // left chair row
        gap = (def.height - (def.leftChairs * chairWidth)) / (def.leftChairs + 1);
        leftOffset = chairWidth / 2;
        topOffset = tableTop + gap + chairWidth / 2; // top of table plus first gap, then to center
        for (let x = 0; x < def.leftChairs; x++) {
            components[index] = createShape(RL_DEFAULT_CHAIR, RL_CHAIR_STROKE, RL_CHAIR_FILL);
            components[index].angle = 90;
            components[index].left = leftOffset;
            components[index].top = topOffset;
            ++index;
            topOffset += (chairWidth + gap);
        }
        // right chair row
        gap = (def.height - (def.rightChairs * chairWidth)) / (def.rightChairs + 1);
        leftOffset = tableRect.width + chairWidth / 2;
        topOffset = tableTop + gap + chairWidth / 2; // top of table plus first gap, then to center
        for (let x = 0; x < def.rightChairs; x++) {
            components[index] = createShape(RL_DEFAULT_CHAIR, RL_CHAIR_STROKE, RL_CHAIR_FILL);
            components[index].angle = -90;
            components[index].left = leftOffset + chairHeight - (RL_CHAIR_TUCK * 2);
            components[index].top = topOffset;
            ++index;
            topOffset += (chairWidth + gap);
        }
        // add table on top of chairs
        components[index] = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect(tableRect);
        components[index].left = tableLeft;
        components[index].top = tableTop;
    }
    const tableGroup = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Group(components, {
        left: 0,
        top: 0,
        hasControls: false,
        // set origin for all groups to center
        originX: 'center',
        originY: 'center',
        name: `${type}:${def.title}`
    });
    return tableGroup;
};



/***/ }),

/***/ "./src/app/models/furnishings.ts":
/*!***************************************!*\
  !*** ./src/app/models/furnishings.ts ***!
  \***************************************/
/*! exports provided: FURNISHINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FURNISHINGS", function() { return FURNISHINGS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");

 // WT = Wall Thickness
const FURNISHINGS = {
    'title': 'Faithlife Room Layout Furniture Library',
    'rooms': [
        {
            'title': '13\' x 17\' Small Conference Room',
            'width': 156,
            'height': 204
        },
        {
            'title': '15\' x 26\' Medium Conference Room',
            'width': 180,
            'height': 312
        },
        {
            'title': '18\' x 21\' Medium Conference Room',
            'width': 216,
            'height': 252
        },
        {
            'title': '20\' x 10\'',
            'width': 240,
            'height': 120
        },
        {
            'title': '16\' x 12\'',
            'width': 192,
            'height': 144
        },
        {
            'title': 'Gym (Regulation)',
            'width': 1320,
            'height': 720
        },
        {
            'title': 'Gym (High School)',
            'width': 1008,
            'height': 600
        },
        {
            'title': '40\' x 20\'',
            'width': 480,
            'height': 240
        }
    ],
    'tables': [
        {
            'title': '54" Round Folding',
            'width': 54,
            'height': 54,
            'lrSpacing': 54,
            'tbSpacing': 54,
            'shape': 'circle',
            'chairs': 6
        },
        {
            'title': '60" Round Folding',
            'width': 60,
            'height': 60,
            'lrSpacing': 60,
            'tbSpacing': 60,
            'shape': 'circle',
            'chairs': 8
        },
        {
            'title': '72" Round Folding',
            'width': 72,
            'height': 72,
            'lrSpacing': 72,
            'tbSpacing': 72,
            'shape': 'circle',
            'chairs': 8
        },
        {
            'title': '6\' x 30" Folding',
            'width': 72,
            'height': 30,
            'lrSpacing': 24,
            'tbSpacing': 60,
            'shape': 'rect',
            'topChairs': 3,
            'bottomChairs': 3,
            'leftChairs': 0,
            'rightChairs': 0
        },
        {
            'title': '8\' x 30" Folding',
            'width': 96,
            'height': 30,
            'lrSpacing': 24,
            'tbSpacing': 60,
            'shape': 'rect',
            'topChairs': 4,
            'bottomChairs': 4,
            'leftChairs': 0,
            'rightChairs': 0
        },
        {
            'title': '8\' x 40" Family',
            'width': 96,
            'height': 40,
            'lrSpacing': 60,
            'tbSpacing': 60,
            'shape': 'rect',
            'topChairs': 4,
            'bottomChairs': 3,
            'leftChairs': 1,
            'rightChairs': 1
        },
        {
            'title': '8\' x 18" Classroom',
            'width': 96,
            'height': 18,
            'lrSpacing': 24,
            'tbSpacing': 36,
            'shape': 'rect',
            'topChairs': 0,
            'bottomChairs': 4,
            'leftChairs': 0,
            'rightChairs': 0
        },
        {
            'title': '6\' x 18" Classroom',
            'width': 72,
            'height': 18,
            'lrSpacing': 24,
            'tbSpacing': 36,
            'shape': 'rect',
            'topChairs': 0,
            'bottomChairs': 3,
            'leftChairs': 0,
            'rightChairs': 0
        }
    ],
    'chairs': [
        {
            'title': 'Generic',
            'width': 18,
            'height': 20,
            'lrSpacing': 2,
            'tbSpacing': 12,
            'parts': [
                { 'type': 'rect', 'definition': { left: 0, top: 0, width: 18, height: 20 } },
                { 'type': 'rect', 'definition': { left: 0, top: 18, width: 18, height: 2 } }
            ]
        },
        {
            'title': '14" Children\'s',
            'width': 14,
            'height': 14,
            'lrSpacing': 2,
            'tbSpacing': 12,
            'parts': [
                { 'type': 'circle', 'definition': { originX: 'center', originY: 'center', radius: 7 } },
                { 'type': 'circle', 'definition': { originX: 'center', originY: 'center', radius: 4 } }
            ]
        },
        {
            'title': '18" Folding',
            'width': 18,
            'height': 18,
            'lrSpacing': 2,
            'tbSpacing': 12,
            'parts': [
                { 'type': 'rect', 'definition': { left: 0, top: 0, width: 18, height: 18 } },
                { 'type': 'rect', 'definition': { left: 0, top: 16, width: 18, height: 2 } }
            ]
        },
        {
            'title': '18" Stacking',
            'width': 18.375,
            'height': 23.25,
            'lrSpacing': 2,
            'tbSpacing': 12.75,
            'parts': [
                { 'type': 'rect', 'definition': { width: 18.375, height: 23.25 } },
                { 'type': 'rect', 'definition': { width: 18.375, height: 4, top: 19.25 } },
                { 'type': 'rect', 'definition': { width: 18.375, height: 2, top: 21.25 } }
            ]
        },
        {
            'title': '20" Pew Stacker',
            'source': 'http://sanctuaryseating.com/church-chairs/impressions-series/model-7027/',
            'width': 20.25,
            'height': 26.3,
            'lrSpacing': 1,
            'tbSpacing': 12,
            'parts': [
                { 'type': 'rect', 'definition': { width: 20.25, height: 26.3 } },
                { 'type': 'rect', 'definition': { width: 20.25, height: 8, top: 18.3 } },
                { 'type': 'rect', 'definition': { width: 20.25, height: 6, top: 20.3 } }
            ]
        },
        {
            'title': '22" Pew Stacker',
            'source': 'http://sanctuaryseating.com/church-chairs/impressions-series/model-7227/',
            'width': 22,
            'height': 26.3,
            'lrSpacing': 1,
            'tbSpacing': 12,
            'parts': [
                { 'type': 'rect', 'definition': { width: 22, height: 26.3 } },
                { 'type': 'rect', 'definition': { width: 22, height: 8, top: 18.3 } },
                { 'type': 'rect', 'definition': { width: 22, height: 6, top: 20.3 } }
            ]
        },
        {
            'title': '22" Square',
            'width': 22,
            'height': 22,
            'lrSpacing': 2,
            'tbSpacing': 12,
            'parts': [
                { 'type': 'rect', 'definition': { width: 22, height: 22 } },
                { 'type': 'rect', 'definition': { width: 22, height: 6, top: 16 } }
            ]
        }
    ],
    'miscellaneous': [
        {
            'title': 'Rectangle',
            'width': 36,
            'height': 12,
            'flexible': true,
            'parts': [
                { 'type': 'rect', 'definition': { left: 0, top: 0, width: 36, height: 12 } }
            ]
        },
        {
            'title': '5\' x 23" Upright Piano',
            'width': 60,
            'height': 23,
            'parts': [
                { 'type': 'rect', 'definition': { left: 15, top: 16, width: 30, height: 14, stroke: 'chair' } },
                { 'type': 'rect', 'definition': { left: 0, top: 0, width: 60, height: 23 } },
                { 'type': 'rect', 'definition': { left: 0, top: 0, width: 6, height: 23 } },
                { 'type': 'rect', 'definition': { left: 54, top: 0, width: 6, height: 23 } },
                { 'type': 'rect', 'definition': { left: 0, top: 0, width: 60, height: 13 } } // top
            ]
        },
        {
            'title': '6\' Grand Piano',
            'width': 58,
            'height': 84,
            'parts': [
                { 'type': 'rect', 'definition': { left: 11, top: 77, width: 36, height: 14, stroke: 'chair' } },
                { 'type': 'path', 'path': 'M 0,84 L 0,36 C 0,2 42,2 42,32 S 58,50 58,72 L 58,84 z', 'definition': {} },
                { 'type': 'rect', 'definition': { left: 0, top: 74, width: 58, height: 10 } },
                { 'type': 'rect', 'definition': { left: 0, top: 74, width: 6, height: 10 } },
                { 'type': 'rect', 'definition': { left: 52, top: 74, width: 6, height: 10 } } // side pillar
            ]
        },
        {
            'title': '7\' Grand Piano',
            'width': 62,
            'height': 84,
            'parts': [
                // { "type": "rect", "definition": { left: 13, top: 77, width: 36, height: 14, stroke: "chair" } },  // bench
                { 'type': 'path', 'path': 'M 0,84 L 0,24 C 0,-10 46,-10 46,26 S 62,50 62,72 L 62,84 z', 'definition': {} },
                { 'type': 'rect', 'definition': { left: 0, top: 74, width: 62, height: 10 } },
            ]
        },
        {
            'title': '8\' Grand Piano',
            'width': 62,
            'height': 94,
            'parts': [
                { 'type': 'rect', 'definition': { left: 13, top: 87, width: 36, height: 14, stroke: 'chair' } },
                { 'type': 'path', 'path': 'M 0,94 L 0,24 C 0,-10 46,-10 46,28 S 62,62 62,78 L 62,94 z', 'definition': {} },
                { 'type': 'rect', 'definition': { left: 0, top: 84, width: 62, height: 10 } },
                { 'type': 'rect', 'definition': { left: 0, top: 84, width: 6, height: 10 } },
                { 'type': 'rect', 'definition': { left: 56, top: 84, width: 6, height: 10 } } // side pillar
            ]
        },
        {
            'title': 'Awana Game Square',
            'width': 200,
            'height': 200,
            'parts': [
                { 'type': 'circle', 'definition': { left: 240, top: 240, strokeWidth: 2, stroke: '#aaaaaa', originX: 'center', originY: 'center', radius: 180 } },
                // blue
                { 'type': 'path', 'path': 'M329.8,82.32L340.41,71.71', 'definition': { strokeWidth: 2, stroke: '#aaaaaa' } },
                { 'type': 'path', 'path': 'M480,0L480,480M480,0L240,240M299.4,180.6L299.4,299.4M278.19,193.33L286.67,201.81M273.94,138.18L341.82,206.06M312.13,159.39L320.61,167.87M320.61,150.91L329.09,159.39M329.1,142.42L337.58,150.9M337.58,133.94L346.06,142.42M346.07,125.45L354.55,133.93', 'definition': { stroke: 'blue', strokeWidth: 2 } },
                // green
                { 'type': 'path', 'path': 'M408.29,340.41L397.68,329.8', 'definition': { strokeWidth: 2, stroke: '#aaaaaa' } },
                { 'type': 'path', 'path': 'M0,480L480,480M240,240L480,480M180.6,299.4L299.4,299.4M278.19,286.67L286.67,278.19M273.94,341.82L341.82,273.94M312.13,320.61L320.61,312.13M320.61,329.09L329.09,320.61M329.1,337.58L337.58,329.1M337.58,346.06L346.06,337.58M346.07,354.55L354.55,346.07', 'definition': { stroke: 'green', strokeWidth: 2 } },
                // yellow
                { 'type': 'path', 'path': 'M150.2,397.68L139.59,408.29', 'definition': { strokeWidth: 2, stroke: '#aaaaaa' } },
                { 'type': 'path', 'path': 'M0,480L0,0M0,480L240,240M180.6,299.4L180.6,180.6M201.81,286.67L193.33,278.19M206.06,341.82L138.18,273.94M167.87,320.61L159.39,312.13M159.39,329.09L150.91,320.61M150.9,337.58L142.42,329.1M142.42,346.06L133.94,337.58M133.93,354.55L125.45,346.07', 'definition': { stroke: 'yellow', strokeWidth: 2 } },
                // draw red last because it's stronger and on top, and it'll capture corners this way
                // red
                { 'type': 'path', 'path': 'M82.32,150.2L71.71,139.59', 'definition': { strokeWidth: 2, stroke: '#aaaaaa' } },
                { 'type': 'path', 'path': 'M0,0L480,0M0,0L240,240M180.6,180.6L299.4,180.6M193.33,201.81L201.81,193.33M138.18,206.06L206.06,138.18M159.39,167.87L167.87,159.39M150.91,159.39L159.39,150.91M142.42,150.9L150.9,142.42M133.94,142.42L142.42,133.94M125.45,133.93L133.93,125.45', 'definition': { stroke: 'red', strokeWidth: 2 } }
                // { "type": "line", "line": [ 0,0,100,0 ], "definition": { stroke: "#ffff00", strokeWidth: "2" } },
                // { "type": "line", "line": [ 0,0,100,100 ], "definition": { stroke: "#00ffff", strokeWidth: "2" } }
            ]
        }
    ],
    doors: [
        {
            title: 'Narrow Door (28" wide)',
            parts: [
                { type: 'rect', definition: { left: 0, width: 28, top: 0, height: _helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"], fill: 'white', strokeWidth: 0, originX: 'left', originY: 'top' } },
                { type: 'line', line: [0, 0, 0, `${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 28}`], definition: { stroke: 'black', strokeWidth: 1 } },
                { type: 'path', path: `M 0 ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 28} Q 28, ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 28}, 28, ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"]}`, definition: { stroke: '#ddd', strokeWidth: 1, fill: 'transparent' } },
            ]
        }, {
            title: 'Normal Door (32" wide)',
            parts: [
                { type: 'rect', definition: { left: 0, width: 32, top: 0, height: _helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"], fill: 'white', strokeWidth: 0, originX: 'left', originY: 'top' } },
                { type: 'line', line: [0, 0, 0, `${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 32}`], definition: { stroke: 'black', strokeWidth: 1 } },
                { type: 'path', path: `M 0 ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 32} Q 32, ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 32}, 32, ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"]}`, definition: { stroke: '#ddd', strokeWidth: 1, fill: 'transparent' } },
            ]
        }, {
            title: 'Wide Door (36" wide)',
            parts: [
                { type: 'rect', definition: { left: 0, width: 36, top: 0, height: _helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"], fill: 'white', strokeWidth: 0, originX: 'left', originY: 'top' } },
                { type: 'line', line: [0, 0, 0, `${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 36}`], definition: { stroke: 'black', strokeWidth: 1 } },
                { type: 'path', path: `M 0 ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 36} Q 36, ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 36}, 36, ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"]}`, definition: { stroke: '#ddd', strokeWidth: 1, fill: 'transparent' } },
            ]
        }, {
            title: 'Double Doors (64" wide)',
            parts: [
                { type: 'rect', definition: { left: 0, width: 64, top: 0, height: _helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"], fill: 'white', strokeWidth: 0, originX: 'left', originY: 'top' } },
                { type: 'line', line: [0, 0, 0, `${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 32}`], definition: { stroke: 'black', strokeWidth: 1 } },
                { type: 'path', path: `M 0 ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 32} Q 32, ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 32}, 32, ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"]}`, definition: { stroke: '#ddd', strokeWidth: 1, fill: 'transparent' } },
                { type: 'line', line: [64, 0, 64, `${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 32}`], definition: { stroke: 'black', strokeWidth: 1 } },
                { type: 'path', path: `M 32 ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"]} Q 32, ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 32}, 64, ${_helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] + 32}`, definition: { stroke: '#ddd', strokeWidth: 1, fill: 'transparent' } },
            ]
        }
    ],
    windows: [
        {
            title: '2’ Window (24” wide)',
            parts: [
                { type: 'rect', definition: { left: 0, width: 24, top: 0, height: _helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] - 1, fill: 'white', strokeWidth: 1, originX: 'left', originY: 'top' } },
            ]
        },
        {
            title: '3’ Window (36” wide)',
            parts: [
                { type: 'rect', definition: { left: 0, width: 36, top: 0, height: _helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] - 1, fill: 'white', strokeWidth: 1, originX: 'left', originY: 'top' } },
            ]
        },
        {
            title: '4’ Window (48” wide)',
            parts: [
                { type: 'rect', definition: { left: 0, width: 48, top: 0, height: _helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] - 1, fill: 'white', strokeWidth: 1, originX: 'left', originY: 'top' } },
            ]
        },
        {
            title: '6’ Window (72” wide)',
            parts: [
                { type: 'rect', definition: { left: 0, width: 72, top: 0, height: _helpers__WEBPACK_IMPORTED_MODULE_1__["RL_ROOM_INNER_SPACING"] - 1, fill: 'white', strokeWidth: 1, originX: 'left', originY: 'top' } },
            ]
        }
    ]
};



/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: ZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _zoom_zoom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zoom/zoom.component */ "./src/app/shared/components/zoom/zoom.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomComponent", function() { return _zoom_zoom_component__WEBPACK_IMPORTED_MODULE_1__["ZoomComponent"]; });





/***/ }),

/***/ "./src/app/shared/components/zoom/zoom.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/zoom/zoom.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".zoom-widget {\n  border: 1px solid #ddd;\n  background: white;\n  border-radius: 8px;\n}\n.zoom-widget fa-icon {\n  font-size: 9px;\n}\n.zoom-widget button {\n  line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvem9vbS9DOlxcU2h1amFhdFxcU2VsZkxlYXJuaW5nXFxmbG9vcnBsYW4tYW5ndWxhci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFx6b29tXFx6b29tLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy96b29tL3pvb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UsY0FBQTtBQ0VKO0FEQUU7RUFDRSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvem9vbS96b29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnpvb20td2lkZ2V0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmYS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi56b29tLXdpZGdldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uem9vbS13aWRnZXQgZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuLnpvb20td2lkZ2V0IGJ1dHRvbiB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/zoom/zoom.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/zoom/zoom.component.ts ***!
  \**********************************************************/
/*! exports provided: ZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomComponent", function() { return ZoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ZoomComponent = class ZoomComponent {
    constructor() {
        this.zoom = 100;
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    zoomIn() {
        if (this.zoom >= 150) {
            return;
        }
        this.zoom += 10;
        this.zoomChange.emit(this.zoom);
    }
    zoomOut() {
        if (this.zoom <= 20) {
            return;
        }
        this.zoom -= 10;
        this.zoomChange.emit(this.zoom);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ZoomComponent.prototype, "zoom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ZoomComponent.prototype, "zoomChange", void 0);
ZoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-zoom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./zoom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/zoom/zoom.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./zoom.component.scss */ "./src/app/shared/components/zoom/zoom.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ZoomComponent);



/***/ }),

/***/ "./src/app/shared/modules/design.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modules/design.module.ts ***!
  \*************************************************/
/*! exports provided: DesignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignModule", function() { return DesignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");




let DesignModule = class DesignModule {
};
DesignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
        ],
        exports: [
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
        ]
    })
], DesignModule);



/***/ }),

/***/ "./src/app/shared/modules/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/modules/index.ts ***!
  \*****************************************/
/*! exports provided: DesignModule, MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _design_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./design.module */ "./src/app/shared/modules/design.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesignModule", function() { return _design_module__WEBPACK_IMPORTED_MODULE_1__["DesignModule"]; });

/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/modules/material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]; });






/***/ }),

/***/ "./src/app/shared/modules/material.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/modules/material.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");

















let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ "./src/app/shared/modules/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");


// Modules

// Components

let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _modules__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _modules__WEBPACK_IMPORTED_MODULE_2__["DesignModule"]
        ],
        exports: [
            _modules__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _modules__WEBPACK_IMPORTED_MODULE_2__["DesignModule"],
            _components__WEBPACK_IMPORTED_MODULE_3__["ZoomComponent"]
        ],
        providers: [],
        declarations: [_components__WEBPACK_IMPORTED_MODULE_3__["ZoomComponent"]]
    })
], SharedModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Shujaat\SelfLearning\floorplan-angular\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** xmldom (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map