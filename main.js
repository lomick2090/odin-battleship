/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
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
  gameboard1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();
  gameboard2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();
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
  function addShip() {
    if (i < ships.length) {
      if (gameboard1.checkShipPlacement(ships[i], [this.getAttribute('x'), this.getAttribute('y')], orientation)) {
        gameboard1.placeShip(ships[i], [this.getAttribute('x'), this.getAttribute('y')], orientation);
        i++;
        if (i == ships.length) {
          gamePage();
        }
      }
    }
  }
  ;
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let newsquare = document.createElement('div');
      newsquare.setAttribute('x', j);
      newsquare.setAttribute('y', i);
      newsquare.className = 'square';
      newsquare.addEventListener('click', () => addShip);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO01BQzlCNEQsU0FBUyxDQUFDSCxTQUFTLEdBQUcsUUFBUTtNQUM5QkcsU0FBUyxDQUFDWCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTWMsT0FBTyxDQUFDO01BQ2xEN0IsTUFBTSxDQUFDYyxXQUFXLENBQUNZLFNBQVMsQ0FBQztJQUNqQztFQUNKO0VBR0F4QixhQUFhLEdBQUdGLE1BQU0sQ0FBQzRCLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztFQUVsRCxJQUFJRyxZQUFZLEdBQUdqQyxRQUFRLENBQUNZLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDaERxQixZQUFZLENBQUNsQixTQUFTLEdBQUcsbUJBQW1CO0VBQzVDa0IsWUFBWSxDQUFDYixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFFMUN0QixJQUFJLENBQUNpQixXQUFXLENBQUNpQixZQUFZLENBQUM7RUFDOUJsQyxJQUFJLENBQUNpQixXQUFXLENBQUNkLE1BQU0sQ0FBQztBQUU1QjtBQUVBUSxhQUFhLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vc2hpcCc7XG5cbmxldCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaTw9IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BhY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBoaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB4OiBpLFxuICAgICAgICAgICAgICAgICAgICB5OiBqXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvYXJkLnB1c2goc3BhY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH07XG5cbiAgICBsZXQgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuXG4gICAgbGV0IHNoaXBzID0gW107XG5cbiAgICBmdW5jdGlvbiByZXR1cm5TcGFjZShjb29yZGluYXRlcykge1xuICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVzWzFdO1xuICAgICAgICBsZXQgYW5zd2VyO1xuXG5cbiAgICAgICAgYm9hcmQuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzcGFjZS54ID09IHggJiYgc3BhY2UueSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyID0gc3BhY2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGxldCBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgbGV0IGFuc3dlciA9IHRydWU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNwYWNlLmNvbnRlbnRzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc1swXSA9IGNvb3JkaW5hdGVzWzBdICsgMTtcbiAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMV0gPSBjb29yZGluYXRlc1sxXSArIDE7XG4gICAgICAgICAgICAgICAgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc1swXSA9IGNvb3JkaW5hdGVzWzBdICsgMTtcbiAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBzcGFjZS5jb250ZW50cyA9IHNoaXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWzFdID0gY29vcmRpbmF0ZXNbMV0gKyAxO1xuICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgaWYgKHNwYWNlLmhpdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgc3BhY2UuaGl0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IsIHNwYWNlIGFscmVhZHkgYXR0YWNrZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNwYWNlLmNvbnRlbnRzKSB7XG4gICAgICAgICAgICBzcGFjZS5jb250ZW50cy5oaXQoKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tHYW1lRW5kKCkge1xuICAgICAgICBsZXQgYW5zd2VyID0gdHJ1ZTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuayA9PSBmYWxzZSkge1xuICAgICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICByZXR1cm5TcGFjZSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBjaGVja1NoaXBQbGFjZW1lbnQsXG4gICAgICAgIGNoZWNrR2FtZUVuZFxuICAgIH1cbn07XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9IiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vc2hpcCc7XG5cbmxldCBwbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIGxldCBwbGF5ZXJOYW1lID0gbmFtZTtcbiAgICBsZXQgcGxheWVyYm9hcmQ7XG5cbiAgICBmdW5jdGlvbiBhdHRhY2soY29vcmRpbmF0ZXMsIGJvYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcmJvYXJkID0gYm9hcmQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW5ub3QgYXR0YWNrIG93biBib2FyZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2ssXG4gICAgICAgIHBsYXllcmJvYXJkLFxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgbmFtZShwcm9tcHQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvbXB0ICE9ICdzdHJpbmcnIHx8IHByb21wdCA9PSAnJyl7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJOYW1lIGZvcm1hdCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJOYW1lID0gcHJvbXB0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHsgcGxheWVyIH0iLCJsZXQgc2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGxldCBzaGlwTGVuZ3RoID0gbGVuZ3RoXG4gICAgbGV0IHNoaXBIaXRzID0gMFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHNoaXBMZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcExlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHNoaXBIaXRzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBIaXRzO1xuICAgICAgICB9LFxuICAgICAgICBoaXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHNoaXBIaXRzKytcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiAoc2hpcEhpdHMgPj0gc2hpcExlbmd0aCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgeyBzaGlwIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG5cbmNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xubGV0IGdhbWViMTtcbmxldCBnYW1lYjI7XG5sZXQgZ2FtZWIxc3F1YXJlcztcbmxldCBnYW1lYjJzcXVhcmVzO1xubGV0IHBsYXllcjE7XG5sZXQgY29tcHV0ZXI7XG5sZXQgZ2FtZWJvYXJkMTtcbmxldCBnYW1lYm9hcmQyO1xuXG5mdW5jdGlvbiBnYW1lU2V0VXBQYWdlKCkge1xuICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSAnTmFtZTonO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBnYW1lLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3RhcnRHYW1lKG5hbWVJbnB1dC52YWx1ZSkpXG4gICAgc3VibWl0LmlubmVySFRNTCA9ICdTdGFydCBHYW1lISc7XG4gICAgXG4gICAgZ2FtZS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIGdhbWUuY2xhc3NMaXN0LmFkZCgnc2V0dXAnKTtcbn1cblxuZnVuY3Rpb24gZ2FtZVBhZ2UoKSB7XG4gICAgd2hpbGUgKGdhbWUuZmlyc3RDaGlsZCkge1xuICAgICAgICBnYW1lLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZ2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwc2V0dXAnKTtcblxuICAgXG4gICAgZ2FtZWIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZWIyLmNsYXNzTmFtZSA9ICdnYW1lYm9hcmQnO1xuXG5cbiAgICBsZXQgbmFtZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lMS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgbmFtZTIuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuXG4gICAgbmFtZTEuaW5uZXJIVE1MID0gcGxheWVyMS5uYW1lO1xuICAgIG5hbWUyLmlubmVySFRNTCA9IGNvbXB1dGVyLm5hbWU7XG5cbiAgICBnYW1lYjEuYXBwZW5kQ2hpbGQobmFtZTEpO1xuICAgIGdhbWViMi5hcHBlbmRDaGlsZChuYW1lMik7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaTw9IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IG5ld3NxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnNldEF0dHJpYnV0ZSgneCcsIGopO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnNldEF0dHJpYnV0ZSgneScsIGkpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICAgICAgICAgICAgZ2FtZWIyLmFwcGVuZENoaWxkKG5ld3NxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWViMSk7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChnYW1lYjIpO1xuXG4gICAgZ2FtZWIyc3F1YXJlcyA9IGdhbWViMi5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShuYW1lKSB7XG4gICAgcGxheWVyMSA9IHBsYXllcihuYW1lKTtcbiAgICBjb21wdXRlciA9IHBsYXllcignQ29tcHV0ZXInKVxuICAgIGdhbWVib2FyZDEgPSBnYW1lYm9hcmQoKTtcbiAgICBnYW1lYm9hcmQyID0gZ2FtZWJvYXJkKCk7XG4gICAgbGV0IHNoaXBzID0gW3NoaXAoMiksIHNoaXAoMiksIHNoaXAoMyksIHNoaXAoNCksIHNoaXAoNSldO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuXG4gICAgcGxheWVyMS5wbGF5ZXJib2FyZCA9IGdhbWVib2FyZDE7XG4gICAgY29tcHV0ZXIucGxheWVyYm9hcmQgPSBnYW1lYm9hcmQyO1xuXG4gICAgd2hpbGUgKGdhbWUuZmlyc3RDaGlsZCkge1xuICAgICAgICBnYW1lLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZ2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cCcpO1xuICAgIGdhbWUuY2xhc3NMaXN0LmFkZCgnc2hpcHBsYWNlbWVudCcpXG5cbiAgICBnYW1lYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYjEuY2xhc3NOYW1lID0gJ2dhbWVib2FyZCc7XG5cbiAgICBmdW5jdGlvbiBhZGRTaGlwKCkgIHtcbiAgICAgICAgaWYgKGkgPCBzaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQxLmNoZWNrU2hpcFBsYWNlbWVudChzaGlwc1tpXSwgW3RoaXMuZ2V0QXR0cmlidXRlKCd4JyksIHRoaXMuZ2V0QXR0cmlidXRlKCd5JyldLCBvcmllbnRhdGlvbikpIHtcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmQxLnBsYWNlU2hpcChzaGlwc1tpXSwgW3RoaXMuZ2V0QXR0cmlidXRlKCd4JyksIHRoaXMuZ2V0QXR0cmlidXRlKCd5JyldLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGlmIChpID09IHNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBnYW1lUGFnZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgZm9yIChsZXQgaSA9IDE7IGk8PSAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5zZXRBdHRyaWJ1dGUoJ3gnLCBqKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5zZXRBdHRyaWJ1dGUoJ3knLCBpKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICAgICAgICAgIG5ld3NxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZFNoaXApXG4gICAgICAgICAgICBnYW1lYjEuYXBwZW5kQ2hpbGQobmV3c3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIGdhbWViMXNxdWFyZXMgPSBnYW1lYjEucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xuXG4gICAgbGV0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluc3RydWN0aW9ucy5pbm5lckhUTUwgPSBcIlBsYWNlIHlvdXIgc2hpcHMhXCI7XG4gICAgaW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2luc3RydWN0aW9ucycpO1xuXG4gICAgZ2FtZS5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnMpO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZWIxKTtcblxufVxuXG5nYW1lU2V0VXBQYWdlKCk7Il0sIm5hbWVzIjpbInNoaXAiLCJnYW1lYm9hcmQiLCJjcmVhdGVCb2FyZCIsImJvYXJkIiwiaSIsImoiLCJzcGFjZSIsImNvbnRlbnRzIiwiaGl0IiwieCIsInkiLCJwdXNoIiwic2hpcHMiLCJyZXR1cm5TcGFjZSIsImNvb3JkaW5hdGVzIiwiYW5zd2VyIiwiZm9yRWFjaCIsImNoZWNrU2hpcFBsYWNlbWVudCIsIm9yaWVudGF0aW9uIiwic2hpcExlbmd0aCIsInBsYWNlU2hpcCIsInJlY2VpdmVBdHRhY2siLCJjb25zb2xlIiwibG9nIiwiY2hlY2tHYW1lRW5kIiwiaXNTdW5rIiwicGxheWVyIiwibmFtZSIsInBsYXllck5hbWUiLCJwbGF5ZXJib2FyZCIsImF0dGFjayIsInJlY2lldmVBdHRhY2siLCJwcm9tcHQiLCJsZW5ndGgiLCJzaGlwSGl0cyIsImdhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lYjEiLCJnYW1lYjIiLCJnYW1lYjFzcXVhcmVzIiwiZ2FtZWIyc3F1YXJlcyIsInBsYXllcjEiLCJjb21wdXRlciIsImdhbWVib2FyZDEiLCJnYW1lYm9hcmQyIiwiZ2FtZVNldFVwUGFnZSIsIm5hbWVJbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lTGFiZWwiLCJzdWJtaXQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWUiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsImdhbWVQYWdlIiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsImNsYXNzTmFtZSIsIm5hbWUxIiwibmFtZTIiLCJuZXdzcXVhcmUiLCJzZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkU2hpcCIsImdldEF0dHJpYnV0ZSIsImluc3RydWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=