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
  game.appendChild(gameb2);
  gameb2squares = gameb2.querySelectorAll('.square');
}
function startGame(name) {
  player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)(name);
  computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)('Computer');
  let gameboard1 = (0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();
  let gameboard2 = (0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();
  player1.playerboard = gameboard1;
  computer.playerboard = gameboard2;
  while (game.firstChild) {
    game.firstChild.remove();
  }
  game.classList.remove('setup');
  game.classList.add('shipplacement');
  gameb1 = document.createElement('div');
  gameb1.className = 'gameboard';
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let newsquare = document.createElement('div');
      newsquare.setAttribute('x', j);
      newsquare.setAttribute('y', i);
      newsquare.className = 'square';
      gameb1.appendChild(newsquare);
    }
  }
  gameb1squares = gameb1.querySelectorAll('.square');
  instructions = document.createElement('div');
  instructions.innerHTML = "Place your ships!";
  instrunctions.classList.add('instructions');
  game.appendChild(instructions);
  game.appendChild(gameb1);

  //gamePage(name, gameboard1, gameboard2);
}

gameSetUpPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxDQUFDaUIsWUFBWSxDQUFDO0VBQzlCaEMsSUFBSSxDQUFDZSxXQUFXLENBQUNaLE1BQU0sQ0FBQzs7RUFJeEI7QUFDSjs7QUFFQU0sYUFBYSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGk8PSAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gOTc7IGogPD0gMTA2OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BhY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBoaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB4OiBTdHJpbmcuZnJvbUNoYXJDb2RlKGopLFxuICAgICAgICAgICAgICAgICAgICB5OiBpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvYXJkLnB1c2goc3BhY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cblxuXG4gICAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgIH1cbn07XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9IiwiaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vc2hpcCc7XG5cbmxldCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaTw9IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BhY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBoaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB4OiBpLFxuICAgICAgICAgICAgICAgICAgICB5OiBqXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvYXJkLnB1c2goc3BhY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH07XG5cbiAgICBsZXQgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuXG4gICAgbGV0IHNoaXBzID0gW107XG5cbiAgICBmdW5jdGlvbiByZXR1cm5TcGFjZShjb29yZGluYXRlcykge1xuICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVzWzFdO1xuICAgICAgICBsZXQgYW5zd2VyO1xuXG5cbiAgICAgICAgYm9hcmQuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzcGFjZS54ID09IHggJiYgc3BhY2UueSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyID0gc3BhY2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGxldCBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgbGV0IGFuc3dlciA9IHRydWU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNwYWNlLmNvbnRlbnRzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc1swXSA9IGNvb3JkaW5hdGVzWzBdICsgMTtcbiAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMV0gPSBjb29yZGluYXRlc1sxXSArIDE7XG4gICAgICAgICAgICAgICAgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc1swXSA9IGNvb3JkaW5hdGVzWzBdICsgMTtcbiAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBzcGFjZS5jb250ZW50cyA9IHNoaXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWzFdID0gY29vcmRpbmF0ZXNbMV0gKyAxO1xuICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgaWYgKHNwYWNlLmhpdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgc3BhY2UuaGl0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IsIHNwYWNlIGFscmVhZHkgYXR0YWNrZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNwYWNlLmNvbnRlbnRzKSB7XG4gICAgICAgICAgICBzcGFjZS5jb250ZW50cy5oaXQoKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tHYW1lRW5kKCkge1xuICAgICAgICBsZXQgYW5zd2VyID0gdHJ1ZTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuayA9PSBmYWxzZSkge1xuICAgICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICByZXR1cm5TcGFjZSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBjaGVja1NoaXBQbGFjZW1lbnQsXG4gICAgICAgIGNoZWNrR2FtZUVuZFxuICAgIH1cbn07XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9IiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vc2hpcCc7XG5cbmxldCBwbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIGxldCBwbGF5ZXJOYW1lID0gbmFtZTtcbiAgICBsZXQgcGxheWVyYm9hcmQ7XG5cbiAgICBmdW5jdGlvbiBhdHRhY2soY29vcmRpbmF0ZXMsIGJvYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcmJvYXJkID0gYm9hcmQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW5ub3QgYXR0YWNrIG93biBib2FyZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2ssXG4gICAgICAgIHBsYXllcmJvYXJkLFxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgbmFtZShwcm9tcHQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvbXB0ICE9ICdzdHJpbmcnIHx8IHByb21wdCA9PSAnJyl7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJOYW1lIGZvcm1hdCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJOYW1lID0gcHJvbXB0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHsgcGxheWVyIH0iLCJsZXQgc2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGxldCBzaGlwTGVuZ3RoID0gbGVuZ3RoXG4gICAgbGV0IHNoaXBIaXRzID0gMFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHNoaXBMZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcExlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHNoaXBIaXRzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBIaXRzO1xuICAgICAgICB9LFxuICAgICAgICBoaXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHNoaXBIaXRzKytcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiAoc2hpcEhpdHMgPj0gc2hpcExlbmd0aCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgeyBzaGlwIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1ib2FyZCc7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5cblxuY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG5sZXQgZ2FtZWIxO1xubGV0IGdhbWViMjtcbmxldCBnYW1lYjFzcXVhcmVzO1xubGV0IGdhbWViMnNxdWFyZXM7XG5sZXQgcGxheWVyMTtcbmxldCBjb21wdXRlcjtcblxuZnVuY3Rpb24gZ2FtZVNldFVwUGFnZSgpIHtcbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gJ05hbWU6JztcbiAgICBnYW1lLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgIFxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN0YXJ0R2FtZShuYW1lSW5wdXQudmFsdWUpKVxuICAgIHN1Ym1pdC5pbm5lckhUTUwgPSAnU3RhcnQgR2FtZSEnO1xuICAgIFxuICAgIGdhbWUuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICBnYW1lLmNsYXNzTGlzdC5hZGQoJ3NldHVwJyk7XG59XG5cbmZ1bmN0aW9uIGdhbWVQYWdlKCkge1xuICAgIHdoaWxlIChnYW1lLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZ2FtZS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgXG4gICAgZ2FtZWIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZWIyLmNsYXNzTmFtZSA9ICdnYW1lYm9hcmQnO1xuXG5cbiAgICBsZXQgbmFtZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lMS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgbmFtZTIuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuXG4gICAgbmFtZTEuaW5uZXJIVE1MID0gcGxheWVyMS5uYW1lO1xuICAgIG5hbWUyLmlubmVySFRNTCA9IGNvbXB1dGVyLm5hbWU7XG5cbiAgICBnYW1lYjEuYXBwZW5kQ2hpbGQobmFtZTEpO1xuICAgIGdhbWViMi5hcHBlbmRDaGlsZChuYW1lMik7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaTw9IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IG5ld3NxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnNldEF0dHJpYnV0ZSgneCcsIGopO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnNldEF0dHJpYnV0ZSgneScsIGkpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICAgICAgICAgICAgZ2FtZWIyLmFwcGVuZENoaWxkKG5ld3NxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWViMik7XG5cbiAgICBnYW1lYjJzcXVhcmVzID0gZ2FtZWIyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKG5hbWUpIHtcbiAgICBwbGF5ZXIxID0gcGxheWVyKG5hbWUpO1xuICAgIGNvbXB1dGVyID0gcGxheWVyKCdDb21wdXRlcicpXG4gICAgbGV0IGdhbWVib2FyZDEgPSBnYW1lYm9hcmQoKTtcbiAgICBsZXQgZ2FtZWJvYXJkMiA9IGdhbWVib2FyZCgpO1xuXG4gICAgcGxheWVyMS5wbGF5ZXJib2FyZCA9IGdhbWVib2FyZDE7XG4gICAgY29tcHV0ZXIucGxheWVyYm9hcmQgPSBnYW1lYm9hcmQyO1xuXG4gICAgd2hpbGUgKGdhbWUuZmlyc3RDaGlsZCkge1xuICAgICAgICBnYW1lLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZ2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cCcpO1xuICAgIGdhbWUuY2xhc3NMaXN0LmFkZCgnc2hpcHBsYWNlbWVudCcpXG5cbiAgICBnYW1lYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYjEuY2xhc3NOYW1lID0gJ2dhbWVib2FyZCc7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaTw9IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IG5ld3NxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnNldEF0dHJpYnV0ZSgneCcsIGopO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnNldEF0dHJpYnV0ZSgneScsIGkpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICAgICAgICAgICAgZ2FtZWIxLmFwcGVuZENoaWxkKG5ld3NxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBnYW1lYjFzcXVhcmVzID0gZ2FtZWIxLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcblxuICAgIGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluc3RydWN0aW9ucy5pbm5lckhUTUwgPSBcIlBsYWNlIHlvdXIgc2hpcHMhXCI7XG4gICAgaW5zdHJ1bmN0aW9ucy5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbnMnKVxuXG4gICAgZ2FtZS5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnMpO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZWIxKTtcblxuXG5cbiAgICAvL2dhbWVQYWdlKG5hbWUsIGdhbWVib2FyZDEsIGdhbWVib2FyZDIpO1xufVxuXG5nYW1lU2V0VXBQYWdlKCk7Il0sIm5hbWVzIjpbImdhbWVib2FyZCIsImNyZWF0ZUJvYXJkIiwiYm9hcmQiLCJpIiwiaiIsInNwYWNlIiwiZW1wdHkiLCJoaXQiLCJ4IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwieSIsInB1c2giLCJzaGlwIiwiY29udGVudHMiLCJzaGlwcyIsInJldHVyblNwYWNlIiwiY29vcmRpbmF0ZXMiLCJhbnN3ZXIiLCJmb3JFYWNoIiwiY2hlY2tTaGlwUGxhY2VtZW50Iiwib3JpZW50YXRpb24iLCJzaGlwTGVuZ3RoIiwicGxhY2VTaGlwIiwicmVjZWl2ZUF0dGFjayIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0dhbWVFbmQiLCJpc1N1bmsiLCJwbGF5ZXIiLCJuYW1lIiwicGxheWVyTmFtZSIsInBsYXllcmJvYXJkIiwiYXR0YWNrIiwicmVjaWV2ZUF0dGFjayIsInByb21wdCIsImxlbmd0aCIsInNoaXBIaXRzIiwiZ2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbWViMSIsImdhbWViMiIsImdhbWViMXNxdWFyZXMiLCJnYW1lYjJzcXVhcmVzIiwicGxheWVyMSIsImNvbXB1dGVyIiwiZ2FtZVNldFVwUGFnZSIsIm5hbWVJbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lTGFiZWwiLCJzdWJtaXQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWUiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsImdhbWVQYWdlIiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsImNsYXNzTmFtZSIsIm5hbWUxIiwibmFtZTIiLCJuZXdzcXVhcmUiLCJzZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2FtZWJvYXJkMSIsImdhbWVib2FyZDIiLCJpbnN0cnVjdGlvbnMiLCJpbnN0cnVuY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==