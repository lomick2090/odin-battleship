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
        coordinates[0] = coordinates[0]++;
        space = returnSpace(coordinates);
      } else {
        coordinates[1] = coordinates[1]++;
        space = returnSpace(coordinates);
      }
    }
    ;
    return answer;
  }
  function placeShip(ship, coordinates, orientation) {
    let space = returnSpace(coordinates);
    space.contents = ship;
    console.log(space.contents);
    ships.push(ship);
    for (let i = 1; i < ship.shipLength; i++) {
      if (orientation == 'horizontal') {
        coordinates[0] = coordinates[0]++;
        space = returnSpace(coordinates);
        space.contents = ship;
      } else {
        console.log(space);
        console.log(coordinates);
        coordinates[1] = coordinates[1]++;
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
let orientation = 'vertical';
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
  game.classList.remove('shipplacement');
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
  player1.playerboard = gameboard1;
  computer.playerboard = gameboard2;
  while (game.firstChild) {
    game.firstChild.remove();
  }
  game.classList.remove('setup');
  game.classList.add('shipplacement');
  gameb1 = document.createElement('div');
  gameb1.className = 'gameboard';
  function addShip(newsquare) {
    if (ships.length > 0) {
      console.log(ships);
      console.log(newsquare);
      if (gameboard1.checkShipPlacement(ships[0], [newsquare.getAttribute('x'), newsquare.getAttribute('y')], orientation)) {
        gameboard1.placeShip(ships[0], [newsquare.getAttribute('x'), newsquare.getAttribute('y')], orientation);
        ships.shift();
        if (ships.length == 0) {
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
      newsquare.addEventListener('click', () => addShip(newsquare));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFDLElBQUksRUFBRSxFQUFFQSxDQUFDLEVBQUUsRUFBRTtNQUMxQixJQUFJMkQsU0FBUyxHQUFHNUIsUUFBUSxDQUFDWSxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzdDZ0IsU0FBUyxDQUFDQyxZQUFZLENBQUMsR0FBRyxFQUFFNUQsQ0FBQyxDQUFDO01BQzlCMkQsU0FBUyxDQUFDQyxZQUFZLENBQUMsR0FBRyxFQUFFN0QsQ0FBQyxDQUFDO01BQzlCNEQsU0FBUyxDQUFDSCxTQUFTLEdBQUcsUUFBUTtNQUM5QkcsU0FBUyxDQUFDWCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTWMsT0FBTyxDQUFDSCxTQUFTLENBQUMsQ0FBQztNQUM3RDFCLE1BQU0sQ0FBQ2MsV0FBVyxDQUFDWSxTQUFTLENBQUM7SUFDakM7RUFDSjtFQUdBeEIsYUFBYSxHQUFHRixNQUFNLENBQUM0QixnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7RUFFbEQsSUFBSUksWUFBWSxHQUFHbEMsUUFBUSxDQUFDWSxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2hEc0IsWUFBWSxDQUFDbkIsU0FBUyxHQUFHLG1CQUFtQjtFQUM1Q21CLFlBQVksQ0FBQ2QsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBRTFDdEIsSUFBSSxDQUFDaUIsV0FBVyxDQUFDa0IsWUFBWSxDQUFDO0VBQzlCbkMsSUFBSSxDQUFDaUIsV0FBVyxDQUFDZCxNQUFNLENBQUM7QUFFNUI7QUFFQVEsYUFBYSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuXG5sZXQgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGk8PSAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwYWNlID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50czogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgeDogaSxcbiAgICAgICAgICAgICAgICAgICAgeTogalxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKHNwYWNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9O1xuXG4gICAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1sxXTtcbiAgICAgICAgbGV0IGFuc3dlcjtcblxuXG4gICAgICAgIGJvYXJkLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3BhY2UueCA9PSB4ICYmIHNwYWNlLnkgPT0geSkge1xuICAgICAgICAgICAgICAgIGFuc3dlciA9IHNwYWNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIGxldCBhbnN3ZXIgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzcGFjZS5jb250ZW50cyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMF0gPSBjb29yZGluYXRlc1swXSsrO1xuICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc1sxXSA9IGNvb3JkaW5hdGVzWzFdKys7XG4gICAgICAgICAgICAgICAgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcbiAgICAgICAgY29uc29sZS5sb2coc3BhY2UuY29udGVudHMpXG4gICAgICAgIHNoaXBzLnB1c2goc2hpcClcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMF0gPSBjb29yZGluYXRlc1swXSsrO1xuICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3BhY2UpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMV0gPSBjb29yZGluYXRlc1sxXSsrO1xuICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgaWYgKHNwYWNlLmhpdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgc3BhY2UuaGl0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IsIHNwYWNlIGFscmVhZHkgYXR0YWNrZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNwYWNlLmNvbnRlbnRzKSB7XG4gICAgICAgICAgICBzcGFjZS5jb250ZW50cy5oaXQoKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tHYW1lRW5kKCkge1xuICAgICAgICBsZXQgYW5zd2VyID0gdHJ1ZTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuayA9PSBmYWxzZSkge1xuICAgICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICByZXR1cm5TcGFjZSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBjaGVja1NoaXBQbGFjZW1lbnQsXG4gICAgICAgIGNoZWNrR2FtZUVuZFxuICAgIH1cbn07XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9IiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vc2hpcCc7XG5cbmxldCBwbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIGxldCBwbGF5ZXJOYW1lID0gbmFtZTtcbiAgICBsZXQgcGxheWVyYm9hcmQ7XG5cbiAgICBmdW5jdGlvbiBhdHRhY2soY29vcmRpbmF0ZXMsIGJvYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcmJvYXJkID0gYm9hcmQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW5ub3QgYXR0YWNrIG93biBib2FyZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2ssXG4gICAgICAgIHBsYXllcmJvYXJkLFxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgbmFtZShwcm9tcHQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvbXB0ICE9ICdzdHJpbmcnIHx8IHByb21wdCA9PSAnJyl7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJOYW1lIGZvcm1hdCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJOYW1lID0gcHJvbXB0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHsgcGxheWVyIH0iLCJsZXQgc2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGxldCBzaGlwTGVuZ3RoID0gbGVuZ3RoXG4gICAgbGV0IHNoaXBIaXRzID0gMFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHNoaXBMZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcExlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHNoaXBIaXRzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBIaXRzO1xuICAgICAgICB9LFxuICAgICAgICBoaXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHNoaXBIaXRzKytcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiAoc2hpcEhpdHMgPj0gc2hpcExlbmd0aCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgeyBzaGlwIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG5cbmNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xubGV0IGdhbWViMTtcbmxldCBnYW1lYjI7XG5sZXQgZ2FtZWIxc3F1YXJlcztcbmxldCBnYW1lYjJzcXVhcmVzO1xubGV0IHBsYXllcjE7XG5sZXQgY29tcHV0ZXI7XG5sZXQgZ2FtZWJvYXJkMTtcbmxldCBnYW1lYm9hcmQyO1xubGV0IG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcblxuZnVuY3Rpb24gZ2FtZVNldFVwUGFnZSgpIHtcbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gJ05hbWU6JztcbiAgICBnYW1lLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgIFxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN0YXJ0R2FtZShuYW1lSW5wdXQudmFsdWUpKVxuICAgIHN1Ym1pdC5pbm5lckhUTUwgPSAnU3RhcnQgR2FtZSEnO1xuICAgIFxuICAgIGdhbWUuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICBnYW1lLmNsYXNzTGlzdC5hZGQoJ3NldHVwJyk7XG59XG5cbmZ1bmN0aW9uIGdhbWVQYWdlKCkge1xuICAgIHdoaWxlIChnYW1lLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZ2FtZS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGdhbWUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcHBsYWNlbWVudCcpO1xuXG4gICBcbiAgICBnYW1lYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYjIuY2xhc3NOYW1lID0gJ2dhbWVib2FyZCc7XG5cblxuICAgIGxldCBuYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBuYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUxLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICBuYW1lMi5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG5cbiAgICBuYW1lMS5pbm5lckhUTUwgPSBwbGF5ZXIxLm5hbWU7XG4gICAgbmFtZTIuaW5uZXJIVE1MID0gY29tcHV0ZXIubmFtZTtcblxuICAgIGdhbWViMS5hcHBlbmRDaGlsZChuYW1lMSk7XG4gICAgZ2FtZWIyLmFwcGVuZENoaWxkKG5hbWUyKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpPD0gMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbmV3c3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuZXdzcXVhcmUuc2V0QXR0cmlidXRlKCd4Jywgaik7XG4gICAgICAgICAgICBuZXdzcXVhcmUuc2V0QXR0cmlidXRlKCd5JywgaSk7XG4gICAgICAgICAgICBuZXdzcXVhcmUuY2xhc3NOYW1lID0gJ3NxdWFyZSc7XG4gICAgICAgICAgICBnYW1lYjIuYXBwZW5kQ2hpbGQobmV3c3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZWIxKTtcbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWViMik7XG5cbiAgICBnYW1lYjJzcXVhcmVzID0gZ2FtZWIyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKG5hbWUpIHtcbiAgICBwbGF5ZXIxID0gcGxheWVyKG5hbWUpO1xuICAgIGNvbXB1dGVyID0gcGxheWVyKCdDb21wdXRlcicpXG4gICAgZ2FtZWJvYXJkMSA9IGdhbWVib2FyZCgpO1xuICAgIGdhbWVib2FyZDIgPSBnYW1lYm9hcmQoKTtcbiAgICBsZXQgc2hpcHMgPSBbc2hpcCgyKSwgc2hpcCgyKSwgc2hpcCgzKSwgc2hpcCg0KSwgc2hpcCg1KV07XG4gICAgXG5cbiAgICBwbGF5ZXIxLnBsYXllcmJvYXJkID0gZ2FtZWJvYXJkMTtcbiAgICBjb21wdXRlci5wbGF5ZXJib2FyZCA9IGdhbWVib2FyZDI7XG5cbiAgICB3aGlsZSAoZ2FtZS5maXJzdENoaWxkKSB7XG4gICAgICAgIGdhbWUuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBnYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ3NldHVwJyk7XG4gICAgZ2FtZS5jbGFzc0xpc3QuYWRkKCdzaGlwcGxhY2VtZW50JylcblxuICAgIGdhbWViMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWViMS5jbGFzc05hbWUgPSAnZ2FtZWJvYXJkJztcblxuICAgIGZ1bmN0aW9uIGFkZFNoaXAobmV3c3F1YXJlKSAge1xuICAgICAgICBpZiAoc2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2hpcHMpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdzcXVhcmUpXG4gICAgICAgICAgICBpZiAoZ2FtZWJvYXJkMS5jaGVja1NoaXBQbGFjZW1lbnQoc2hpcHNbMF0sIFtuZXdzcXVhcmUuZ2V0QXR0cmlidXRlKCd4JyksIG5ld3NxdWFyZS5nZXRBdHRyaWJ1dGUoJ3knKV0sIG9yaWVudGF0aW9uKSkge1xuICAgICAgICAgICAgICAgIGdhbWVib2FyZDEucGxhY2VTaGlwKHNoaXBzWzBdLCBbbmV3c3F1YXJlLmdldEF0dHJpYnV0ZSgneCcpLCBuZXdzcXVhcmUuZ2V0QXR0cmlidXRlKCd5JyldLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgc2hpcHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVBhZ2UoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIGZvciAobGV0IGkgPSAxOyBpPD0gMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbmV3c3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuZXdzcXVhcmUuc2V0QXR0cmlidXRlKCd4Jywgaik7XG4gICAgICAgICAgICBuZXdzcXVhcmUuc2V0QXR0cmlidXRlKCd5JywgaSk7XG4gICAgICAgICAgICBuZXdzcXVhcmUuY2xhc3NOYW1lID0gJ3NxdWFyZSc7XG4gICAgICAgICAgICBuZXdzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRTaGlwKG5ld3NxdWFyZSkpXG4gICAgICAgICAgICBnYW1lYjEuYXBwZW5kQ2hpbGQobmV3c3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIGdhbWViMXNxdWFyZXMgPSBnYW1lYjEucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xuXG4gICAgbGV0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluc3RydWN0aW9ucy5pbm5lckhUTUwgPSBcIlBsYWNlIHlvdXIgc2hpcHMhXCI7XG4gICAgaW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2luc3RydWN0aW9ucycpO1xuXG4gICAgZ2FtZS5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnMpO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZWIxKTtcblxufVxuXG5nYW1lU2V0VXBQYWdlKCk7Il0sIm5hbWVzIjpbInNoaXAiLCJnYW1lYm9hcmQiLCJjcmVhdGVCb2FyZCIsImJvYXJkIiwiaSIsImoiLCJzcGFjZSIsImNvbnRlbnRzIiwiaGl0IiwieCIsInkiLCJwdXNoIiwic2hpcHMiLCJyZXR1cm5TcGFjZSIsImNvb3JkaW5hdGVzIiwiYW5zd2VyIiwiZm9yRWFjaCIsImNoZWNrU2hpcFBsYWNlbWVudCIsIm9yaWVudGF0aW9uIiwic2hpcExlbmd0aCIsInBsYWNlU2hpcCIsImNvbnNvbGUiLCJsb2ciLCJyZWNlaXZlQXR0YWNrIiwiY2hlY2tHYW1lRW5kIiwiaXNTdW5rIiwicGxheWVyIiwibmFtZSIsInBsYXllck5hbWUiLCJwbGF5ZXJib2FyZCIsImF0dGFjayIsInJlY2lldmVBdHRhY2siLCJwcm9tcHQiLCJsZW5ndGgiLCJzaGlwSGl0cyIsImdhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lYjEiLCJnYW1lYjIiLCJnYW1lYjFzcXVhcmVzIiwiZ2FtZWIyc3F1YXJlcyIsInBsYXllcjEiLCJjb21wdXRlciIsImdhbWVib2FyZDEiLCJnYW1lYm9hcmQyIiwiZ2FtZVNldFVwUGFnZSIsIm5hbWVJbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lTGFiZWwiLCJzdWJtaXQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWUiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsImdhbWVQYWdlIiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsImNsYXNzTmFtZSIsIm5hbWUxIiwibmFtZTIiLCJuZXdzcXVhcmUiLCJzZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkU2hpcCIsImdldEF0dHJpYnV0ZSIsInNoaWZ0IiwiaW5zdHJ1Y3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==