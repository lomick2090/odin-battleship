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
let gameb1squares;
let gameb2squares;
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
function gamePage(name) {
  while (game.firstChild) {
    game.firstChild.remove();
  }
  game.classList.remove('setup');
  gameb1 = document.createElement('div');
  gameb2 = document.createElement('div');
  gameb1.className = 'gameboard';
  gameb2.className = 'gameboard';
  let name1 = document.createElement('div');
  let name2 = document.createElement('div');
  name1.classList.add('name');
  name2.classList.add('name');
  name1.innerHTML = name;
  name2.innerHTML = 'Computer';
  gameb1.appendChild(name1);
  gameb2.appendChild(name2);
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let newsquare = document.createElement('div');
      newsquare.setAttribute('x', j);
      newsquare.setAttribute('y', i);
      newsquare.className = 'square';
      gameb1.appendChild(newsquare);
    }
  }
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
  gameb1squares = gameb1.querySelectorAll('.square');
  gameb2squares = gameb2.querySelectorAll('.squares');
}
function startGame(name) {
  let player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)(name);
  let computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)('Computer');
  let gameboard1 = (0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();
  let gameboard2 = (0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();
  player1.playerboard = gameboard1;
  computer.playerboard = gameboard2;
  gamePage(name, gameboard1, gameboard2);
}
gameSetUpPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxFQUFFNUQsQ0FBQyxDQUFDO01BQzlCMkQsU0FBUyxDQUFDQyxZQUFZLENBQUMsR0FBRyxFQUFFN0QsQ0FBQyxDQUFDO01BQzlCNEQsU0FBUyxDQUFDSCxTQUFTLEdBQUcsUUFBUTtNQUM5QmxCLE1BQU0sQ0FBQ1MsV0FBVyxDQUFDWSxTQUFTLENBQUM7SUFDakM7RUFDSjtFQUdBekIsSUFBSSxDQUFDYSxXQUFXLENBQUNWLE1BQU0sQ0FBQztFQUN4QkgsSUFBSSxDQUFDYSxXQUFXLENBQUNULE1BQU0sQ0FBQztFQUV4QkMsYUFBYSxHQUFHRixNQUFNLENBQUN3QixnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7RUFDbERyQixhQUFhLEdBQUdGLE1BQU0sQ0FBQ3VCLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztBQUN2RDtBQUVBLFNBQVNaLFNBQVMsQ0FBQ3ZCLElBQUksRUFBRTtFQUNyQixJQUFJb0MsT0FBTyxHQUFHckMsK0NBQU0sQ0FBQ0MsSUFBSSxDQUFDO0VBQzFCLElBQUlxQyxRQUFRLEdBQUd0QywrQ0FBTSxDQUFDLFVBQVUsQ0FBQztFQUNqQyxJQUFJdUMsVUFBVSxHQUFHcEUsb0RBQVMsRUFBRTtFQUM1QixJQUFJcUUsVUFBVSxHQUFHckUsb0RBQVMsRUFBRTtFQUU1QmtFLE9BQU8sQ0FBQ2xDLFdBQVcsR0FBR29DLFVBQVU7RUFDaENELFFBQVEsQ0FBQ25DLFdBQVcsR0FBR3FDLFVBQVU7RUFFakNaLFFBQVEsQ0FBQzNCLElBQUksRUFBRXNDLFVBQVUsRUFBRUMsVUFBVSxDQUFDO0FBQzFDO0FBRUF4QixhQUFhLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1ib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaTw9IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSA5NzsgaiA8PSAxMDY7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcGFjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHg6IFN0cmluZy5mcm9tQ2hhckNvZGUoaiksXG4gICAgICAgICAgICAgICAgICAgIHk6IGlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYm9hcmQucHVzaChzcGFjZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuXG5cbiAgICBsZXQgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgfVxufTtcblxuZXhwb3J0IHsgZ2FtZWJvYXJkIH0iLCJpbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi9zaGlwJztcblxubGV0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgbGV0IGJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpPD0gMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcGFjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudHM6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHg6IGksXG4gICAgICAgICAgICAgICAgICAgIHk6IGpcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYm9hcmQucHVzaChzcGFjZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfTtcblxuICAgIGxldCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG5cbiAgICBsZXQgc2hpcHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICAgIGxldCB5ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgICAgIGxldCBhbnN3ZXI7XG5cblxuICAgICAgICBib2FyZC5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHNwYWNlLnggPT0geCAmJiBzcGFjZS55ID09IHkpIHtcbiAgICAgICAgICAgICAgICBhbnN3ZXIgPSBzcGFjZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrU2hpcFBsYWNlbWVudChzaGlwLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pIHtcbiAgICAgICAgbGV0IHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICBsZXQgYW5zd2VyID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3BhY2UuY29udGVudHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWzBdID0gY29vcmRpbmF0ZXNbMF0gKyAxO1xuICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc1sxXSA9IGNvb3JkaW5hdGVzWzFdICsgMTtcbiAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGxldCBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgc3BhY2UuY29udGVudHMgPSBzaGlwO1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWzBdID0gY29vcmRpbmF0ZXNbMF0gKyAxO1xuICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMV0gPSBjb29yZGluYXRlc1sxXSArIDE7XG4gICAgICAgICAgICAgICAgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgc3BhY2UuY29udGVudHMgPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgbGV0IHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICBpZiAoc3BhY2UuaGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICBzcGFjZS5oaXQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciwgc3BhY2UgYWxyZWFkeSBhdHRhY2tlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc3BhY2UuY29udGVudHMpIHtcbiAgICAgICAgICAgIHNwYWNlLmNvbnRlbnRzLmhpdCgpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjaGVja0dhbWVFbmQoKSB7XG4gICAgICAgIGxldCBhbnN3ZXIgPSB0cnVlO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuaXNTdW5rID09IGZhbHNlKSB7XG4gICAgICAgICAgICBhbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZCxcbiAgICAgICAgc2hpcHMsXG4gICAgICAgIHJldHVyblNwYWNlLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGNoZWNrU2hpcFBsYWNlbWVudCxcbiAgICAgICAgY2hlY2tHYW1lRW5kXG4gICAgfVxufTtcblxuZXhwb3J0IHsgZ2FtZWJvYXJkIH0iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi9zaGlwJztcblxubGV0IHBsYXllciA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHBsYXllck5hbWUgPSAnJztcbiAgICBsZXQgcGxheWVyYm9hcmQ7XG5cbiAgICBmdW5jdGlvbiBhdHRhY2soY29vcmRpbmF0ZXMsIGJvYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcmJvYXJkID0gYm9hcmQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW5ub3QgYXR0YWNrIG93biBib2FyZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2ssXG4gICAgICAgIHBsYXllcmJvYXJkLFxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgbmFtZShwcm9tcHQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvbXB0ICE9ICdzdHJpbmcnIHx8IHByb21wdCA9PSAnJyl7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJOYW1lIGZvcm1hdCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJOYW1lID0gcHJvbXB0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHsgcGxheWVyIH0iLCJsZXQgc2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGxldCBzaGlwTGVuZ3RoID0gbGVuZ3RoXG4gICAgbGV0IHNoaXBIaXRzID0gMFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHNoaXBMZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcExlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHNoaXBIaXRzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBIaXRzO1xuICAgICAgICB9LFxuICAgICAgICBoaXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHNoaXBIaXRzKytcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiAoc2hpcEhpdHMgPj0gc2hpcExlbmd0aCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgeyBzaGlwIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1ib2FyZCc7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5cblxuY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG5sZXQgZ2FtZWIxO1xubGV0IGdhbWViMjtcbmxldCBnYW1lYjFzcXVhcmVzO1xubGV0IGdhbWViMnNxdWFyZXM7XG5cbmZ1bmN0aW9uIGdhbWVTZXRVcFBhZ2UoKSB7XG4gICAgbGV0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGV0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbmFtZUxhYmVsLmlubmVySFRNTCA9ICdOYW1lOic7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICBcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdGFydEdhbWUobmFtZUlucHV0LnZhbHVlKSlcbiAgICBzdWJtaXQuaW5uZXJIVE1MID0gJ1N0YXJ0IEdhbWUhJztcbiAgICBcbiAgICBnYW1lLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgZ2FtZS5jbGFzc0xpc3QuYWRkKCdzZXR1cCcpO1xufVxuXG5mdW5jdGlvbiBnYW1lUGFnZShuYW1lKSB7XG4gICAgd2hpbGUgKGdhbWUuZmlyc3RDaGlsZCkge1xuICAgICAgICBnYW1lLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZ2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cCcpO1xuXG4gICAgZ2FtZWIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZWIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBnYW1lYjEuY2xhc3NOYW1lID0gJ2dhbWVib2FyZCc7XG4gICAgZ2FtZWIyLmNsYXNzTmFtZSA9ICdnYW1lYm9hcmQnO1xuXG5cbiAgICBsZXQgbmFtZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lMS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgbmFtZTIuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuXG4gICAgbmFtZTEuaW5uZXJIVE1MID0gbmFtZTtcbiAgICBuYW1lMi5pbm5lckhUTUwgPSAnQ29tcHV0ZXInO1xuXG4gICAgZ2FtZWIxLmFwcGVuZENoaWxkKG5hbWUxKTtcbiAgICBnYW1lYjIuYXBwZW5kQ2hpbGQobmFtZTIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGk8PSAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5zZXRBdHRyaWJ1dGUoJ3gnLCBqKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5zZXRBdHRyaWJ1dGUoJ3knLCBpKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICAgICAgICAgIGdhbWViMS5hcHBlbmRDaGlsZChuZXdzcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDE7IGk8PSAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5zZXRBdHRyaWJ1dGUoJ3gnLCBqKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5zZXRBdHRyaWJ1dGUoJ3knLCBpKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICAgICAgICAgIGdhbWViMi5hcHBlbmRDaGlsZChuZXdzcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWViMSk7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChnYW1lYjIpO1xuXG4gICAgZ2FtZWIxc3F1YXJlcyA9IGdhbWViMS5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG4gICAgZ2FtZWIyc3F1YXJlcyA9IGdhbWViMi5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlcycpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUobmFtZSkge1xuICAgIGxldCBwbGF5ZXIxID0gcGxheWVyKG5hbWUpO1xuICAgIGxldCBjb21wdXRlciA9IHBsYXllcignQ29tcHV0ZXInKVxuICAgIGxldCBnYW1lYm9hcmQxID0gZ2FtZWJvYXJkKCk7XG4gICAgbGV0IGdhbWVib2FyZDIgPSBnYW1lYm9hcmQoKTtcblxuICAgIHBsYXllcjEucGxheWVyYm9hcmQgPSBnYW1lYm9hcmQxO1xuICAgIGNvbXB1dGVyLnBsYXllcmJvYXJkID0gZ2FtZWJvYXJkMjtcblxuICAgIGdhbWVQYWdlKG5hbWUsIGdhbWVib2FyZDEsIGdhbWVib2FyZDIpO1xufVxuXG5nYW1lU2V0VXBQYWdlKCk7Il0sIm5hbWVzIjpbImdhbWVib2FyZCIsImNyZWF0ZUJvYXJkIiwiYm9hcmQiLCJpIiwiaiIsInNwYWNlIiwiZW1wdHkiLCJoaXQiLCJ4IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwieSIsInB1c2giLCJzaGlwIiwiY29udGVudHMiLCJzaGlwcyIsInJldHVyblNwYWNlIiwiY29vcmRpbmF0ZXMiLCJhbnN3ZXIiLCJmb3JFYWNoIiwiY2hlY2tTaGlwUGxhY2VtZW50Iiwib3JpZW50YXRpb24iLCJzaGlwTGVuZ3RoIiwicGxhY2VTaGlwIiwicmVjZWl2ZUF0dGFjayIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0dhbWVFbmQiLCJpc1N1bmsiLCJwbGF5ZXIiLCJuYW1lIiwicGxheWVyTmFtZSIsInBsYXllcmJvYXJkIiwiYXR0YWNrIiwicmVjaWV2ZUF0dGFjayIsInByb21wdCIsImxlbmd0aCIsInNoaXBIaXRzIiwiZ2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbWViMSIsImdhbWViMiIsImdhbWViMXNxdWFyZXMiLCJnYW1lYjJzcXVhcmVzIiwiZ2FtZVNldFVwUGFnZSIsIm5hbWVJbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lTGFiZWwiLCJzdWJtaXQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWUiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsImdhbWVQYWdlIiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsImNsYXNzTmFtZSIsIm5hbWUxIiwibmFtZTIiLCJuZXdzcXVhcmUiLCJzZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGxheWVyMSIsImNvbXB1dGVyIiwiZ2FtZWJvYXJkMSIsImdhbWVib2FyZDIiXSwic291cmNlUm9vdCI6IiJ9