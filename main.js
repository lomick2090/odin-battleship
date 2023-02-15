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
  let playerName = name;
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
let gameb1squares;
let gameb2squares;
let player1;
let computer;
let gameboard1;
let gameboard2;
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
  game.classList.remove('shipsetup');
  gameb2 = document.createElement('div');
  gameb2.className = 'gameboard';
  let name1 = document.createElement('div');
  let name2 = document.createElement('div');
  name1.classList.add('name');
  name2.classList.add('name');
  name1.innerHTML = player1.name;
  name2.innerHTML = computer.name;
  gameb1.appendChild(name1);
  gameb2.appendChild(name2);
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let newsquare = document.createElement('div');
      newsquare.setAttribute('x', j);
      newsquare.setAttribute('y', i);
      newsquare.className = 'square';
      gameb2.appendChild(newsquare);
    }
  }
  game.appendChild(gameb1);
  game.appendChild(gameb2);
  gameb2squares = gameb2.querySelectorAll('.square');
}
function startGame(name) {
  player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)(name);
  computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)('Computer');
  gameboard1 = (0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();
  gameboard2 = (0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();
  let ships = [(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(4), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(5)];
  let i = 0;
  let orientation = 'vertical';
  player1.playerboard = gameboard1;
  computer.playerboard = gameboard2;
  while (game.firstChild) {
    game.firstChild.remove();
  }
  game.classList.remove('setup');
  game.classList.add('shipplacement');
  gameb1 = document.createElement('div');
  gameb1.className = 'gameboard';
  console.log(gameboard1);
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let newsquare = document.createElement('div');
      newsquare.setAttribute('x', j);
      newsquare.setAttribute('y', i);
      newsquare.className = 'square';
      newsquare.addEventListener('click', () => {
        if (i < ships.length) {
          if (gameboard1.checkShipPlacement(ships[i], [newsquare.getAttribute('x'), newsquare.getAttribute('y')], orientation)) {
            gameboard1.placeShip(ships[i], [newsquare.getAttribute('x'), newsquare.getAttribute('y')], orientation);
            i++;
            if (i == ships.length) {
              gamePage();
            }
          }
        }
      });
      gameb1.appendChild(newsquare);
    }
  }
  gameb1squares = gameb1.querySelectorAll('.square');
  let instructions = document.createElement('div');
  instructions.innerHTML = "Place your ships!";
  instructions.classList.add('instructions');
  game.appendChild(instructions);
  game.appendChild(gameb1);
}
gameSetUpPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsQ0FBQ2dCLFlBQVksQ0FBQztFQUM5QmpDLElBQUksQ0FBQ2lCLFdBQVcsQ0FBQ2QsTUFBTSxDQUFDO0FBRTVCO0FBRUFRLGFBQWEsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgbGV0IGJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpPD0gMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDk3OyBqIDw9IDEwNjsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwYWNlID0ge1xuICAgICAgICAgICAgICAgICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgeDogU3RyaW5nLmZyb21DaGFyQ29kZShqKSxcbiAgICAgICAgICAgICAgICAgICAgeTogaVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKHNwYWNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cblxuICAgIGxldCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZCxcbiAgICB9XG59O1xuXG5leHBvcnQgeyBnYW1lYm9hcmQgfSIsImltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuXG5sZXQgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGk8PSAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwYWNlID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50czogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgeDogaSxcbiAgICAgICAgICAgICAgICAgICAgeTogalxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKHNwYWNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9O1xuXG4gICAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1sxXTtcbiAgICAgICAgbGV0IGFuc3dlcjtcblxuXG4gICAgICAgIGJvYXJkLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3BhY2UueCA9PSB4ICYmIHNwYWNlLnkgPT0geSkge1xuICAgICAgICAgICAgICAgIGFuc3dlciA9IHNwYWNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIGxldCBhbnN3ZXIgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzcGFjZS5jb250ZW50cyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMF0gPSBjb29yZGluYXRlc1swXSArIDE7XG4gICAgICAgICAgICAgICAgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWzFdID0gY29vcmRpbmF0ZXNbMV0gKyAxO1xuICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pIHtcbiAgICAgICAgbGV0IHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICBzcGFjZS5jb250ZW50cyA9IHNoaXA7XG4gICAgICAgIHNoaXBzLnB1c2goc2hpcClcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMF0gPSBjb29yZGluYXRlc1swXSArIDE7XG4gICAgICAgICAgICAgICAgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgc3BhY2UuY29udGVudHMgPSBzaGlwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc1sxXSA9IGNvb3JkaW5hdGVzWzFdICsgMTtcbiAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBzcGFjZS5jb250ZW50cyA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIGlmIChzcGFjZS5oaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNwYWNlLmhpdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLCBzcGFjZSBhbHJlYWR5IGF0dGFja2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzcGFjZS5jb250ZW50cykge1xuICAgICAgICAgICAgc3BhY2UuY29udGVudHMuaGl0KCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrR2FtZUVuZCgpIHtcbiAgICAgICAgbGV0IGFuc3dlciA9IHRydWU7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgcmV0dXJuU3BhY2UsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tTaGlwUGxhY2VtZW50LFxuICAgICAgICBjaGVja0dhbWVFbmRcbiAgICB9XG59O1xuXG5leHBvcnQgeyBnYW1lYm9hcmQgfSIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuXG5sZXQgcGxheWVyID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcGxheWVyTmFtZSA9IG5hbWU7XG4gICAgbGV0IHBsYXllcmJvYXJkO1xuXG4gICAgZnVuY3Rpb24gYXR0YWNrKGNvb3JkaW5hdGVzLCBib2FyZCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJib2FyZCA9IGJvYXJkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2Fubm90IGF0dGFjayBvd24gYm9hcmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXR0YWNrLFxuICAgICAgICBwbGF5ZXJib2FyZCxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG5hbWUocHJvbXB0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb21wdCAhPSAnc3RyaW5nJyB8fCBwcm9tcHQgPT0gJycpe1xuICAgICAgICAgICAgICAgIHRocm93IFwiTmFtZSBmb3JtYXQgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyTmFtZSA9IHByb21wdFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7IHBsYXllciB9IiwibGV0IHNoaXAgPSAobGVuZ3RoKSA9PiB7XG5cbiAgICBsZXQgc2hpcExlbmd0aCA9IGxlbmd0aFxuICAgIGxldCBzaGlwSGl0cyA9IDBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBzaGlwTGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBMZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBzaGlwSGl0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwSGl0cztcbiAgICAgICAgfSxcbiAgICAgICAgaGl0OiAoKSA9PiB7XG4gICAgICAgICAgICBzaGlwSGl0cysrXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBpc1N1bmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHNoaXBIaXRzID49IHNoaXBMZW5ndGgpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuZXhwb3J0IHsgc2hpcCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtYm9hcmQnO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG5cbmNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xubGV0IGdhbWViMTtcbmxldCBnYW1lYjI7XG5sZXQgZ2FtZWIxc3F1YXJlcztcbmxldCBnYW1lYjJzcXVhcmVzO1xubGV0IHBsYXllcjE7XG5sZXQgY29tcHV0ZXI7XG5sZXQgZ2FtZWJvYXJkMTtcbmxldCBnYW1lYm9hcmQyO1xuXG5mdW5jdGlvbiBnYW1lU2V0VXBQYWdlKCkge1xuICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSAnTmFtZTonO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBnYW1lLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3RhcnRHYW1lKG5hbWVJbnB1dC52YWx1ZSkpXG4gICAgc3VibWl0LmlubmVySFRNTCA9ICdTdGFydCBHYW1lISc7XG4gICAgXG4gICAgZ2FtZS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIGdhbWUuY2xhc3NMaXN0LmFkZCgnc2V0dXAnKTtcbn1cblxuZnVuY3Rpb24gZ2FtZVBhZ2UoKSB7XG4gICAgd2hpbGUgKGdhbWUuZmlyc3RDaGlsZCkge1xuICAgICAgICBnYW1lLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZ2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwc2V0dXAnKTtcblxuICAgXG4gICAgZ2FtZWIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZWIyLmNsYXNzTmFtZSA9ICdnYW1lYm9hcmQnO1xuXG5cbiAgICBsZXQgbmFtZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lMS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgbmFtZTIuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuXG4gICAgbmFtZTEuaW5uZXJIVE1MID0gcGxheWVyMS5uYW1lO1xuICAgIG5hbWUyLmlubmVySFRNTCA9IGNvbXB1dGVyLm5hbWU7XG5cbiAgICBnYW1lYjEuYXBwZW5kQ2hpbGQobmFtZTEpO1xuICAgIGdhbWViMi5hcHBlbmRDaGlsZChuYW1lMik7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaTw9IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IG5ld3NxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnNldEF0dHJpYnV0ZSgneCcsIGopO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnNldEF0dHJpYnV0ZSgneScsIGkpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICAgICAgICAgICAgZ2FtZWIyLmFwcGVuZENoaWxkKG5ld3NxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWViMSk7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChnYW1lYjIpO1xuXG4gICAgZ2FtZWIyc3F1YXJlcyA9IGdhbWViMi5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShuYW1lKSB7XG4gICAgcGxheWVyMSA9IHBsYXllcihuYW1lKTtcbiAgICBjb21wdXRlciA9IHBsYXllcignQ29tcHV0ZXInKVxuICAgIGdhbWVib2FyZDEgPSBnYW1lYm9hcmQoKTtcbiAgICBnYW1lYm9hcmQyID0gZ2FtZWJvYXJkKCk7XG4gICAgbGV0IHNoaXBzID0gW3NoaXAoMiksIHNoaXAoMiksIHNoaXAoMyksIHNoaXAoNCksIHNoaXAoNSldO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuXG4gICAgcGxheWVyMS5wbGF5ZXJib2FyZCA9IGdhbWVib2FyZDE7XG4gICAgY29tcHV0ZXIucGxheWVyYm9hcmQgPSBnYW1lYm9hcmQyO1xuXG4gICAgd2hpbGUgKGdhbWUuZmlyc3RDaGlsZCkge1xuICAgICAgICBnYW1lLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZ2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cCcpO1xuICAgIGdhbWUuY2xhc3NMaXN0LmFkZCgnc2hpcHBsYWNlbWVudCcpXG5cbiAgICBnYW1lYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYjEuY2xhc3NOYW1lID0gJ2dhbWVib2FyZCc7XG5cbiAgICBjb25zb2xlLmxvZyhnYW1lYm9hcmQxKVxuXG4gICAgZm9yIChsZXQgaSA9IDE7IGk8PSAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5zZXRBdHRyaWJ1dGUoJ3gnLCBqKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5zZXRBdHRyaWJ1dGUoJ3knLCBpKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICAgICAgICAgIG5ld3NxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkMS5jaGVja1NoaXBQbGFjZW1lbnQoc2hpcHNbaV0sIFtuZXdzcXVhcmUuZ2V0QXR0cmlidXRlKCd4JyksIG5ld3NxdWFyZS5nZXRBdHRyaWJ1dGUoJ3knKV0sIG9yaWVudGF0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkMS5wbGFjZVNoaXAoc2hpcHNbaV0sIFtuZXdzcXVhcmUuZ2V0QXR0cmlidXRlKCd4JyksIG5ld3NxdWFyZS5nZXRBdHRyaWJ1dGUoJ3knKV0sIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IHNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2FtZWIxLmFwcGVuZENoaWxkKG5ld3NxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBnYW1lYjFzcXVhcmVzID0gZ2FtZWIxLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcblxuICAgIGxldCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnN0cnVjdGlvbnMuaW5uZXJIVE1MID0gXCJQbGFjZSB5b3VyIHNoaXBzIVwiO1xuICAgIGluc3RydWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbnMnKTtcblxuICAgIGdhbWUuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zKTtcbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWViMSk7XG5cbn1cblxuZ2FtZVNldFVwUGFnZSgpOyJdLCJuYW1lcyI6WyJnYW1lYm9hcmQiLCJjcmVhdGVCb2FyZCIsImJvYXJkIiwiaSIsImoiLCJzcGFjZSIsImVtcHR5IiwiaGl0IiwieCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInkiLCJwdXNoIiwic2hpcCIsImNvbnRlbnRzIiwic2hpcHMiLCJyZXR1cm5TcGFjZSIsImNvb3JkaW5hdGVzIiwiYW5zd2VyIiwiZm9yRWFjaCIsImNoZWNrU2hpcFBsYWNlbWVudCIsIm9yaWVudGF0aW9uIiwic2hpcExlbmd0aCIsInBsYWNlU2hpcCIsInJlY2VpdmVBdHRhY2siLCJjb25zb2xlIiwibG9nIiwiY2hlY2tHYW1lRW5kIiwiaXNTdW5rIiwicGxheWVyIiwibmFtZSIsInBsYXllck5hbWUiLCJwbGF5ZXJib2FyZCIsImF0dGFjayIsInJlY2lldmVBdHRhY2siLCJwcm9tcHQiLCJsZW5ndGgiLCJzaGlwSGl0cyIsImdhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lYjEiLCJnYW1lYjIiLCJnYW1lYjFzcXVhcmVzIiwiZ2FtZWIyc3F1YXJlcyIsInBsYXllcjEiLCJjb21wdXRlciIsImdhbWVib2FyZDEiLCJnYW1lYm9hcmQyIiwiZ2FtZVNldFVwUGFnZSIsIm5hbWVJbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lTGFiZWwiLCJzdWJtaXQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWUiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsImdhbWVQYWdlIiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsImNsYXNzTmFtZSIsIm5hbWUxIiwibmFtZTIiLCJuZXdzcXVhcmUiLCJzZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0QXR0cmlidXRlIiwiaW5zdHJ1Y3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==