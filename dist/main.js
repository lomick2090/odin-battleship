/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gamboard.js":
/*!*************************!*\
  !*** ./src/gamboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard)
/* harmony export */ });
let gameboard = () => {
  function createBoard() {
    let board = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 97; j <= 106; j++) {
        let space = {
          empty: true,
          hit: false,
          x: String.fromCharCode(j),
          y: i
        };
        board.push(space);
      }
    }
    return board;
  }
  let board = createBoard();
  return {
    board
  };
};


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");

let gameboard = () => {
  function createBoard() {
    let board = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        let space = {
          contents: null,
          hit: false,
          x: i,
          y: j
        };
        board.push(space);
      }
    }
    return board;
  }
  ;
  let board = createBoard();
  function returnSpace(coordinates) {
    let x = coordinates[0];
    let y = coordinates[1];
    let answer;
    board.forEach(space => {
      if (space.x == x && space.y == y) {
        answer = space;
        return;
      }
    });
    return answer;
  }
  ;
  function placeShip(ship, coordinates, orientation) {
    let space = returnSpace(coordinates);
    space.contents = ship;
    for (let i = 0; i < ship.shipLength; i++) {
      if (orientation = 'horizontal') {
        coordinates[0] = coordinates[0] + 1;
        space = returnSpace(coordinates);
        space.contents = ship;
      } else {
        coordinates[1] = coordinates[1] + 1;
        space = returnSpace(coordinates);
        space.contents = ship;
      }
    }
  }
  ;
  function receiveAttack(coordinates) {
    let space = returnSpace(coordinates);
    if (space.hit == false) {
      space.hit == true;
    } else {
      console.log("error, space already attacked");
      return;
    }
    ;
    if (space.contents) {
      space.contents.hit();
    }
    ;
  }
  ;
  return {
    board,
    returnSpace,
    placeShip,
    receiveAttack
  };
};


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


let player = () => {
  function attack(coordinates) {}
  return {
    attack
  };
};


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
let ship = length => {
  let shipLength = length;
  let shipHits = 0;
  return {
    get shipLength() {
      return shipLength;
    },
    get shipHits() {
      return shipHits;
    },
    hit: () => {
      shipHits++;
    },
    get isSunk() {
      return shipHits >= shipLength ? true : false;
    }
  };
};


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gamboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamboard */ "./src/gamboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRztNQUNULE9BQVFELFFBQVEsSUFBSVAsVUFBVSxHQUFJLElBQUksR0FBRyxLQUFLO0lBQ2xEO0VBQ0osQ0FBQztBQUNMLENBQUM7Ozs7Ozs7VUNuQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGk8PSAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gOTc7IGogPD0gMTA2OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BhY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBoaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB4OiBTdHJpbmcuZnJvbUNoYXJDb2RlKGopLFxuICAgICAgICAgICAgICAgICAgICB5OiBpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvYXJkLnB1c2goc3BhY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cblxuXG4gICAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgIH1cbn07XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9IiwiaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vc2hpcCc7XG5cbmxldCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaTw9IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BhY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBoaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB4OiBpLFxuICAgICAgICAgICAgICAgICAgICB5OiBqXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvYXJkLnB1c2goc3BhY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH07XG5cbiAgICBsZXQgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuXG4gICAgZnVuY3Rpb24gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1sxXTtcbiAgICAgICAgbGV0IGFuc3dlcjtcblxuXG4gICAgICAgIGJvYXJkLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3BhY2UueCA9PSB4ICYmIHNwYWNlLnkgPT0geSkge1xuICAgICAgICAgICAgICAgIGFuc3dlciA9IHNwYWNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG5cbiAgICAgICAgc3BhY2UuY29udGVudHMgPSBzaGlwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWzBdID0gY29vcmRpbmF0ZXNbMF0gKyAxO1xuICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMV0gPSBjb29yZGluYXRlc1sxXSArIDE7XG4gICAgICAgICAgICAgICAgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgc3BhY2UuY29udGVudHMgPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIGlmIChzcGFjZS5oaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNwYWNlLmhpdCA9PSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciwgc3BhY2UgYWxyZWFkeSBhdHRhY2tlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc3BhY2UuY29udGVudHMpIHtcbiAgICAgICAgICAgIHNwYWNlLmNvbnRlbnRzLmhpdCgpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZCxcbiAgICAgICAgcmV0dXJuU3BhY2UsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICB9XG59O1xuXG5leHBvcnQgeyBnYW1lYm9hcmQgfSIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuXG5sZXQgcGxheWVyID0gKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGF0dGFjayhjb29yZGluYXRlcykge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXR0YWNrXG4gICAgfVxufVxuXG5leHBvcnQgeyBwbGF5ZXIgfSIsImxldCBzaGlwID0gKGxlbmd0aCkgPT4ge1xuXG4gICAgbGV0IHNoaXBMZW5ndGggPSBsZW5ndGhcbiAgICBsZXQgc2hpcEhpdHMgPSAwXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgc2hpcExlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwTGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgc2hpcEhpdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcEhpdHM7XG4gICAgICAgIH0sXG4gICAgICAgIGhpdDogKCkgPT4ge1xuICAgICAgICAgICAgc2hpcEhpdHMrK1xuICAgICAgICB9LFxuICAgICAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIChzaGlwSGl0cyA+PSBzaGlwTGVuZ3RoKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmV4cG9ydCB7IHNoaXAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWJvYXJkJztcbmltcG9ydCB7IHBsYXllciB9IGZyb20gJy4vcGxheWVyJyJdLCJuYW1lcyI6WyJnYW1lYm9hcmQiLCJjcmVhdGVCb2FyZCIsImJvYXJkIiwiaSIsImoiLCJzcGFjZSIsImVtcHR5IiwiaGl0IiwieCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInkiLCJwdXNoIiwic2hpcCIsImNvbnRlbnRzIiwicmV0dXJuU3BhY2UiLCJjb29yZGluYXRlcyIsImFuc3dlciIsImZvckVhY2giLCJwbGFjZVNoaXAiLCJvcmllbnRhdGlvbiIsInNoaXBMZW5ndGgiLCJyZWNlaXZlQXR0YWNrIiwiY29uc29sZSIsImxvZyIsInBsYXllciIsImF0dGFjayIsImxlbmd0aCIsInNoaXBIaXRzIiwiaXNTdW5rIl0sInNvdXJjZVJvb3QiOiIifQ==