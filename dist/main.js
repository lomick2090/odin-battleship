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
  let ships = [];
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
  function checkShipPlacement(ship, coordinates, orientation) {
    let space = returnSpace(coordinates);
    let answer = true;
    for (let i = 1; i < ship.shipLength; i++) {
      if (space.contents != null) {
        answer = false;
      }
      if (orientation == 'horizontal') {
        coordinates[0] = coordinates[0] + 1;
        space = returnSpace(coordinates);
      } else {
        coordinates[1] = coordinates[1] + 1;
        space = returnSpace(coordinates);
      }
    }
    ;
    return answer;
  }
  function placeShip(ship, coordinates, orientation) {
    let space = returnSpace(coordinates);
    space.contents = ship;
    ships.push(ship);
    for (let i = 1; i < ship.shipLength; i++) {
      if (orientation == 'horizontal') {
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
      space.hit = true;
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
  function checkGameEnd() {
    let answer = true;
    ships.forEach(ship => {
      if (ship.isSunk == false) {
        answer = false;
      }
    });
    return answer;
  }
  return {
    board,
    ships,
    returnSpace,
    placeShip,
    receiveAttack,
    checkShipPlacement,
    checkGameEnd
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


let player = name => {
  let playerName = '';
  let playerboard;
  function attack(coordinates, board) {
    if (this.playerboard = board) {
      console.log('cannot attack own board');
    } else {
      board.recieveAttack(coordinates);
    }
  }
  return {
    attack,
    playerboard,
    get name() {
      return playerName;
    },
    set name(prompt) {
      if (typeof prompt != 'string' || prompt == '') {
        throw "Name format incorrect";
      } else {
        playerName = prompt;
      }
    }
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



const game = document.querySelector('.game');
let gameb1;
let gameb2;
function gameSetUpPage() {
  let nameInput = document.createElement('input');
  let nameLabel = document.createElement('label');
  let submit = document.createElement('button');
  nameLabel.innerHTML = 'Name:';
  game.appendChild(nameLabel);
  game.appendChild(nameInput);
  submit.addEventListener('click', () => startGame(nameInput.value));
  submit.innerHTML = 'Start Game!';
  game.appendChild(submit);
  game.classList.add('setup');
}
function gamePage() {
  while (game.firstChild) {
    game.firstChild.remove();
  }
  game.classList.remove('setup');
  gameb1 = document.createElement('div');
  gameb2 = document.createElement('div');
  gameb1.className = 'gameboard';
  gameb2.className = 'gameboard';
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let newsquare = document.createElement('div');
      newsquare.x = i;
      newsquare.y = j;
      newsquare.className = 'square';
      gameb1.appendChild(newsquare);
    }
  }
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let newsquare = document.createElement('div');
      newsquare.x = i;
      newsquare.y = j;
      newsquare.className = 'square';
      gameb2.appendChild(newsquare);
    }
  }
  game.appendChild(gameb1);
  game.appendChild(gameb2);
}
function startGame(name) {
  let player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)(name);
  let computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)('Computer');
  let gameboard1 = (0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();
  let gameboard2 = (0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();
  player1.playerboard = gameboard1;
  computer.playerboard = gameboard2;
  gamePage(name);
}
gameSetUpPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OEIsVUFBVTtFQUNoQ0QsUUFBUSxDQUFDN0IsV0FBVyxHQUFHK0IsVUFBVTtFQUVqQ1IsUUFBUSxDQUFDekIsSUFBSSxDQUFDO0FBQ2xCO0FBRUFhLGFBQWEsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgbGV0IGJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpPD0gMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDk3OyBqIDw9IDEwNjsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwYWNlID0ge1xuICAgICAgICAgICAgICAgICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgeDogU3RyaW5nLmZyb21DaGFyQ29kZShqKSxcbiAgICAgICAgICAgICAgICAgICAgeTogaVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKHNwYWNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cblxuICAgIGxldCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZCxcbiAgICB9XG59O1xuXG5leHBvcnQgeyBnYW1lYm9hcmQgfSIsImltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuXG5sZXQgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGk8PSAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwYWNlID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50czogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgeDogaSxcbiAgICAgICAgICAgICAgICAgICAgeTogalxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKHNwYWNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9O1xuXG4gICAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1sxXTtcbiAgICAgICAgbGV0IGFuc3dlcjtcblxuXG4gICAgICAgIGJvYXJkLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3BhY2UueCA9PSB4ICYmIHNwYWNlLnkgPT0geSkge1xuICAgICAgICAgICAgICAgIGFuc3dlciA9IHNwYWNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIGxldCBhbnN3ZXIgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzcGFjZS5jb250ZW50cyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMF0gPSBjb29yZGluYXRlc1swXSArIDE7XG4gICAgICAgICAgICAgICAgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWzFdID0gY29vcmRpbmF0ZXNbMV0gKyAxO1xuICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pIHtcbiAgICAgICAgbGV0IHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICBzcGFjZS5jb250ZW50cyA9IHNoaXA7XG4gICAgICAgIHNoaXBzLnB1c2goc2hpcClcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMF0gPSBjb29yZGluYXRlc1swXSArIDE7XG4gICAgICAgICAgICAgICAgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgc3BhY2UuY29udGVudHMgPSBzaGlwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc1sxXSA9IGNvb3JkaW5hdGVzWzFdICsgMTtcbiAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBzcGFjZS5jb250ZW50cyA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIGlmIChzcGFjZS5oaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNwYWNlLmhpdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLCBzcGFjZSBhbHJlYWR5IGF0dGFja2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzcGFjZS5jb250ZW50cykge1xuICAgICAgICAgICAgc3BhY2UuY29udGVudHMuaGl0KCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrR2FtZUVuZCgpIHtcbiAgICAgICAgbGV0IGFuc3dlciA9IHRydWU7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgcmV0dXJuU3BhY2UsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tTaGlwUGxhY2VtZW50LFxuICAgICAgICBjaGVja0dhbWVFbmRcbiAgICB9XG59O1xuXG5leHBvcnQgeyBnYW1lYm9hcmQgfSIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuXG5sZXQgcGxheWVyID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcGxheWVyTmFtZSA9ICcnO1xuICAgIGxldCBwbGF5ZXJib2FyZDtcblxuICAgIGZ1bmN0aW9uIGF0dGFjayhjb29yZGluYXRlcywgYm9hcmQpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyYm9hcmQgPSBib2FyZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nhbm5vdCBhdHRhY2sgb3duIGJvYXJkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2FyZC5yZWNpZXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFjayxcbiAgICAgICAgcGxheWVyYm9hcmQsXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllck5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBuYW1lKHByb21wdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9tcHQgIT0gJ3N0cmluZycgfHwgcHJvbXB0ID09ICcnKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBcIk5hbWUgZm9ybWF0IGluY29ycmVjdFwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllck5hbWUgPSBwcm9tcHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgeyBwbGF5ZXIgfSIsImxldCBzaGlwID0gKGxlbmd0aCkgPT4ge1xuXG4gICAgbGV0IHNoaXBMZW5ndGggPSBsZW5ndGhcbiAgICBsZXQgc2hpcEhpdHMgPSAwXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgc2hpcExlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwTGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgc2hpcEhpdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcEhpdHM7XG4gICAgICAgIH0sXG4gICAgICAgIGhpdDogKCkgPT4ge1xuICAgICAgICAgICAgc2hpcEhpdHMrK1xuICAgICAgICB9LFxuICAgICAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIChzaGlwSGl0cyA+PSBzaGlwTGVuZ3RoKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmV4cG9ydCB7IHNoaXAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWJvYXJkJztcbmltcG9ydCB7IHBsYXllciB9IGZyb20gJy4vcGxheWVyJztcblxuXG5jb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbmxldCBnYW1lYjE7XG5sZXQgZ2FtZWIyO1xuXG5mdW5jdGlvbiBnYW1lU2V0VXBQYWdlKCkge1xuICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSAnTmFtZTonO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBnYW1lLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3RhcnRHYW1lKG5hbWVJbnB1dC52YWx1ZSkpXG4gICAgc3VibWl0LmlubmVySFRNTCA9ICdTdGFydCBHYW1lISc7XG4gICAgXG4gICAgZ2FtZS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIGdhbWUuY2xhc3NMaXN0LmFkZCgnc2V0dXAnKTtcbn1cblxuZnVuY3Rpb24gZ2FtZVBhZ2UoKSB7XG4gICAgd2hpbGUgKGdhbWUuZmlyc3RDaGlsZCkge1xuICAgICAgICBnYW1lLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZ2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cCcpO1xuXG4gICAgZ2FtZWIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZWIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBnYW1lYjEuY2xhc3NOYW1lID0gJ2dhbWVib2FyZCc7XG4gICAgZ2FtZWIyLmNsYXNzTmFtZSA9ICdnYW1lYm9hcmQnO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGk8PSAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS54ID0gaTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS55ID0gajtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJ1xuICAgICAgICAgICAgZ2FtZWIxLmFwcGVuZENoaWxkKG5ld3NxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaTw9IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IG5ld3NxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnggPSBpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnkgPSBqO1xuICAgICAgICAgICAgbmV3c3F1YXJlLmNsYXNzTmFtZSA9ICdzcXVhcmUnXG4gICAgICAgICAgICBnYW1lYjIuYXBwZW5kQ2hpbGQobmV3c3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZWIxKTtcbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWViMik7XG4gICAgXG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShuYW1lKSB7XG4gICAgbGV0IHBsYXllcjEgPSBwbGF5ZXIobmFtZSk7XG4gICAgbGV0IGNvbXB1dGVyID0gcGxheWVyKCdDb21wdXRlcicpXG4gICAgbGV0IGdhbWVib2FyZDEgPSBnYW1lYm9hcmQoKTtcbiAgICBsZXQgZ2FtZWJvYXJkMiA9IGdhbWVib2FyZCgpO1xuXG4gICAgcGxheWVyMS5wbGF5ZXJib2FyZCA9IGdhbWVib2FyZDE7XG4gICAgY29tcHV0ZXIucGxheWVyYm9hcmQgPSBnYW1lYm9hcmQyO1xuXG4gICAgZ2FtZVBhZ2UobmFtZSk7XG59XG5cbmdhbWVTZXRVcFBhZ2UoKTsiXSwibmFtZXMiOlsiZ2FtZWJvYXJkIiwiY3JlYXRlQm9hcmQiLCJib2FyZCIsImkiLCJqIiwic3BhY2UiLCJlbXB0eSIsImhpdCIsIngiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ5IiwicHVzaCIsInNoaXAiLCJjb250ZW50cyIsInNoaXBzIiwicmV0dXJuU3BhY2UiLCJjb29yZGluYXRlcyIsImFuc3dlciIsImZvckVhY2giLCJjaGVja1NoaXBQbGFjZW1lbnQiLCJvcmllbnRhdGlvbiIsInNoaXBMZW5ndGgiLCJwbGFjZVNoaXAiLCJyZWNlaXZlQXR0YWNrIiwiY29uc29sZSIsImxvZyIsImNoZWNrR2FtZUVuZCIsImlzU3VuayIsInBsYXllciIsIm5hbWUiLCJwbGF5ZXJOYW1lIiwicGxheWVyYm9hcmQiLCJhdHRhY2siLCJyZWNpZXZlQXR0YWNrIiwicHJvbXB0IiwibGVuZ3RoIiwic2hpcEhpdHMiLCJnYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FtZWIxIiwiZ2FtZWIyIiwiZ2FtZVNldFVwUGFnZSIsIm5hbWVJbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lTGFiZWwiLCJzdWJtaXQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWUiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsImdhbWVQYWdlIiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsImNsYXNzTmFtZSIsIm5ld3NxdWFyZSIsInBsYXllcjEiLCJjb21wdXRlciIsImdhbWVib2FyZDEiLCJnYW1lYm9hcmQyIl0sInNvdXJjZVJvb3QiOiIifQ==