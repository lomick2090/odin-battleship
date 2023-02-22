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
          x: parseInt(i),
          y: parseInt(j)
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
    for (let i = 0; i < ship.shipLength; i++) {
      if (coordinates[0] > 10 || coordinates[1] > 10) {
        answer = false;
      } else {
        if (space.contents != null) {
          answer = false;
        }
        if (orientation == 'horizontal') {
          coordinates[0]++;
          space = returnSpace(coordinates);
        } else {
          coordinates[1]++;
          space = returnSpace(coordinates);
        }
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
        coordinates[0]++;
        space = returnSpace(coordinates);
        space.contents = ship;
      } else {
        coordinates[1]++;
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
      alert("Space already attacked!");
      return;
    }
    ;
    if (space.contents) {
      space.contents.hit();
      return true;
    } else {
      return false;
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
let orientation = 'horizontal';
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
function startGame(name) {
  player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)(name);
  computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)('Computer');
  gameboard1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();
  gameboard2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();
  let ships = [(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(4), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(5)];
  let cruiser1 = document.createElement('img');
  cruiser1.id = 'cruiser1';
  let cruiser2 = document.createElement('img');
  cruiser2.id = 'cruiser2';
  let submarine = document.createElement('img');
  submarine.id = 'submarine';
  let carrier = document.createElement('img');
  carrier.id = 'carrier';
  let battleship = document.createElement('img');
  battleship.id = 'battleship';
  let shipimages = [cruiser1, cruiser2, submarine, carrier, battleship];
  player1.playerboard = gameboard1;
  computer.playerboard = gameboard2;
  while (game.firstChild) {
    game.firstChild.remove();
  }
  game.classList.remove('setup');
  game.classList.add('shipplacement');
  gameb1 = document.createElement('div');
  gameb1.className = 'gameboard';
  function displayShip() {
    while (instructions.firstChild) {
      instructions.firstChild.remove();
    }
    let shipDiv = document.createElement('div');
    shipDiv.classList.add('shipdiv');
    let shipVisual = document.createElement('div');
    shipVisual.classList.add('shipvisual');
    if (orientation == 'vertical') {
      shipimages[0].style.transform = 'rotate(90deg) translateY(-39px)';
      shipimages[0].style.transformOrigin = 'top left';
    } else {
      shipimages[0].style.transform = 'rotate(0deg)';
    }
    shipVisual.appendChild(shipimages[0]);
    let shipDirections = document.createElement('div');
    let shipOrientation = document.createElement('button');
    shipOrientation.innerHTML = orientation;
    shipDirections.innerHTML = 'Click on the board to place this ship';
    shipOrientation.addEventListener('click', () => {
      if (orientation == 'vertical') {
        orientation = 'horizontal';
        displayShip();
      } else {
        orientation = 'vertical';
        displayShip();
      }
    });
    shipDiv.appendChild(shipDirections);
    shipDiv.appendChild(shipVisual);
    shipDiv.appendChild(shipOrientation);
    instructions.appendChild(shipDiv);
  }
  function addShip(newsquare) {
    if (ships.length > 0) {
      if (gameboard1.checkShipPlacement(ships[0], [newsquare.getAttribute('x'), newsquare.getAttribute('y')], orientation)) {
        gameboard1.placeShip(ships[0], [newsquare.getAttribute('x'), newsquare.getAttribute('y')], orientation);
        newsquare.appendChild(shipimages[0]);
        shipimages.shift();
        ships.shift();
        if (ships.length == 0) {
          gamePage();
        } else {
          displayShip();
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
  // instructions.innerHTML = "Place your ships!";
  instructions.classList.add('instructions');
  game.appendChild(instructions);
  game.appendChild(gameb1);
  displayShip();
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
  function computerAttacks() {
    let x = Math.round(Math.random() * 10) + 1;
    let y = Math.round(Math.random() * 10) + 1;
    while (gameboard1.returnSpace([x, y]).hit) {
      console.log([x, y]);
      x = Math.round(Math.random() * 10) + 1;
      y = Math.round(Math.random() * 10) + 1;
    }
    let boardSquare = gameboard1.returnSpace([x, y]);
    let newsquare;
    gameb1squares.forEach(square => {
      if (square.getAttribute('x') == x && square.getAttribute('y') == y) {
        newsquare = square;
      }
    });
    let icon = document.createElement('img');
    newsquare.appendChild(icon);
    if (gameboard1.receiveAttack([x, y])) {
      icon.id = 'hitmarker';
      if (boardSquare.contents.isSunk) {
        switch (boardSquare.contents.shipLength) {
          case 2:
            alert('The computer sunk your Cruiser!');
            break;
          case 3:
            alert('The computer sunk your Submarine!');
            break;
          case 4:
            alert('The computer sunk your Carrier!');
            break;
          case 5:
            alert('The computer sunk your Battleship!');
            break;
        }
      }
      if (gameboard1.checkGameEnd()) {
        alert('The computer wins .......');
      }
    } else {
      icon.id = 'missmarker';
    }
  }
  function userAttacks(newsquare) {
    let x = newsquare.getAttribute('x');
    let y = newsquare.getAttribute('y');
    let boardSquare = gameboard2.returnSpace([x, y]);
    if (boardSquare.hit == true) {
      alert('Square has already been hit!');
    } else {
      let icon = document.createElement('img');
      newsquare.appendChild(icon);
      if (gameboard2.receiveAttack([x, y])) {
        icon.id = 'hitmarker';
        if (boardSquare.contents.isSunk) {
          switch (boardSquare.contents.shipLength) {
            case 2:
              alert('You sunk their Cruiser!');
              break;
            case 3:
              alert('You sunk their Submarine!');
              break;
            case 4:
              alert('You sunk their Carrier!');
              break;
            case 5:
              alert('You sunk their Battleship!');
              break;
          }
        }
        if (gameboard2.checkGameEnd()) {
          alert('You Win!');
        } else {
          computerAttacks();
        }
      } else {
        icon.id = 'missmarker';
        computerAttacks();
      }
    }
  }
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let newsquare = document.createElement('div');
      newsquare.setAttribute('x', j);
      newsquare.setAttribute('y', i);
      newsquare.className = 'square';
      newsquare.addEventListener('click', () => userAttacks(newsquare));
      gameb2.appendChild(newsquare);
    }
  }
  function createComputerBoard() {
    let computerShips = [(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(4), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(5)];
    while (computerShips.length > 0) {
      let x = Math.floor(Math.random() * 10) + 1;
      let y = Math.floor(Math.random() * 10) + 1;
      let randoOrient = () => {
        return Math.round(Math.random()) > 0 ? 'vertical' : 'horizontal';
      };
      let computerOrient = randoOrient();
      while (!gameboard2.checkShipPlacement(computerShips[0], [x, y], computerOrient)) {
        x = Math.floor(Math.random() * 10) + 1;
        y = Math.floor(Math.random() * 10) + 1;
        computerOrient = randoOrient();
      }
      console.log(computerShips[0], [x, y], computerOrient);
      gameboard2.placeShip(computerShips[0], [x, y], computerOrient);
      computerShips.shift();
    }
  }
  createComputerBoard();
  game.appendChild(gameb1);
  game.appendChild(gameb2);
  gameb2squares = gameb2.querySelectorAll('.square');
}
gameSetUpPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlFM0YsQ0FBQyxHQUFHZ0YsSUFBSSxDQUFDUyxLQUFLLENBQUNULElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNwQ2hGLENBQUMsR0FBRzhFLElBQUksQ0FBQ1MsS0FBSyxDQUFDVCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDcENTLGNBQWMsR0FBR0QsV0FBVyxFQUFFO01BQ2xDO01BQ0FwRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2lFLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDeEYsQ0FBQyxFQUFDRSxDQUFDLENBQUMsRUFBQ3lGLGNBQWMsQ0FBQztNQUNsRHJELFVBQVUsQ0FBQzFCLFNBQVMsQ0FBQzRFLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDeEYsQ0FBQyxFQUFDRSxDQUFDLENBQUMsRUFBRXlGLGNBQWMsQ0FBQztNQUM3REgsYUFBYSxDQUFDZixLQUFLLEVBQUU7SUFDekI7RUFFSjtFQUVBYyxtQkFBbUIsRUFBRTtFQUVyQjNELElBQUksQ0FBQ2lCLFdBQVcsQ0FBQ2QsTUFBTSxDQUFDO0VBQ3hCSCxJQUFJLENBQUNpQixXQUFXLENBQUNiLE1BQU0sQ0FBQztFQUV4QkUsYUFBYSxHQUFHRixNQUFNLENBQUM0QyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7QUFDdEQ7QUFHQXJDLGFBQWEsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi9zaGlwJztcblxubGV0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgbGV0IGJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpPD0gMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcGFjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudHM6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHg6IHBhcnNlSW50KGkpLFxuICAgICAgICAgICAgICAgICAgICB5OiBwYXJzZUludChqKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKHNwYWNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9O1xuXG4gICAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1sxXTtcbiAgICAgICAgbGV0IGFuc3dlcjtcblxuXG4gICAgICAgIGJvYXJkLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3BhY2UueCA9PSB4ICYmIHNwYWNlLnkgPT0geSkge1xuICAgICAgICAgICAgICAgIGFuc3dlciA9IHNwYWNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIGxldCBhbnN3ZXIgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb29yZGluYXRlc1swXSA+IDEwIHx8IGNvb3JkaW5hdGVzWzFdID4gMTApIHtcbiAgICAgICAgICAgICAgICBhbnN3ZXIgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BhY2UuY29udGVudHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1swXSsrO1xuICAgICAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1sxXSsrO1xuICAgICAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc1swXSsrO1xuICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuXG4gICAgICAgICAgICAgICAgc3BhY2UuY29udGVudHMgPSBzaGlwO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWzFdKys7XG4gICAgICAgICAgICAgICAgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG5cbiAgICAgICAgICAgICAgICBzcGFjZS5jb250ZW50cyA9IHNoaXA7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgaWYgKHNwYWNlLmhpdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgc3BhY2UuaGl0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiU3BhY2UgYWxyZWFkeSBhdHRhY2tlZCFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNwYWNlLmNvbnRlbnRzKSB7XG4gICAgICAgICAgICBzcGFjZS5jb250ZW50cy5oaXQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjaGVja0dhbWVFbmQoKSB7XG4gICAgICAgIGxldCBhbnN3ZXIgPSB0cnVlO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuaXNTdW5rID09IGZhbHNlKSB7XG4gICAgICAgICAgICBhbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZCxcbiAgICAgICAgc2hpcHMsXG4gICAgICAgIHJldHVyblNwYWNlLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGNoZWNrU2hpcFBsYWNlbWVudCxcbiAgICAgICAgY2hlY2tHYW1lRW5kXG4gICAgfVxufTtcblxuZXhwb3J0IHsgZ2FtZWJvYXJkIH0iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi9zaGlwJztcblxubGV0IHBsYXllciA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHBsYXllck5hbWUgPSBuYW1lO1xuICAgIGxldCBwbGF5ZXJib2FyZDtcblxuICAgIGZ1bmN0aW9uIGF0dGFjayhjb29yZGluYXRlcywgYm9hcmQpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyYm9hcmQgPSBib2FyZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nhbm5vdCBhdHRhY2sgb3duIGJvYXJkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2FyZC5yZWNpZXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFjayxcbiAgICAgICAgcGxheWVyYm9hcmQsXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllck5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBuYW1lKHByb21wdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9tcHQgIT0gJ3N0cmluZycgfHwgcHJvbXB0ID09ICcnKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBcIk5hbWUgZm9ybWF0IGluY29ycmVjdFwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllck5hbWUgPSBwcm9tcHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgeyBwbGF5ZXIgfSIsImxldCBzaGlwID0gKGxlbmd0aCkgPT4ge1xuXG4gICAgbGV0IHNoaXBMZW5ndGggPSBsZW5ndGhcbiAgICBsZXQgc2hpcEhpdHMgPSAwXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgc2hpcExlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwTGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgc2hpcEhpdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcEhpdHM7XG4gICAgICAgIH0sXG4gICAgICAgIGhpdDogKCkgPT4ge1xuICAgICAgICAgICAgc2hpcEhpdHMrK1xuICAgICAgICB9LFxuICAgICAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIChzaGlwSGl0cyA+PSBzaGlwTGVuZ3RoKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmV4cG9ydCB7IHNoaXAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xubGV0IGdhbWViMTtcbmxldCBnYW1lYjI7XG5sZXQgZ2FtZWIxc3F1YXJlcztcbmxldCBnYW1lYjJzcXVhcmVzO1xubGV0IHBsYXllcjE7XG5sZXQgY29tcHV0ZXI7XG5sZXQgZ2FtZWJvYXJkMTtcbmxldCBnYW1lYm9hcmQyO1xubGV0IG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuXG5mdW5jdGlvbiBnYW1lU2V0VXBQYWdlKCkge1xuICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSAnTmFtZTonO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBnYW1lLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3RhcnRHYW1lKG5hbWVJbnB1dC52YWx1ZSkpXG4gICAgc3VibWl0LmlubmVySFRNTCA9ICdTdGFydCBHYW1lISc7XG4gICAgXG4gICAgZ2FtZS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIGdhbWUuY2xhc3NMaXN0LmFkZCgnc2V0dXAnKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKG5hbWUpIHtcbiAgICBwbGF5ZXIxID0gcGxheWVyKG5hbWUpO1xuICAgIGNvbXB1dGVyID0gcGxheWVyKCdDb21wdXRlcicpXG4gICAgZ2FtZWJvYXJkMSA9IGdhbWVib2FyZCgpO1xuICAgIGdhbWVib2FyZDIgPSBnYW1lYm9hcmQoKTtcbiAgICBsZXQgc2hpcHMgPSBbc2hpcCgyKSwgc2hpcCgyKSwgc2hpcCgzKSwgc2hpcCg0KSwgc2hpcCg1KV07XG4gICAgXG4gICAgbGV0IGNydWlzZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY3J1aXNlcjEuaWQgPSAnY3J1aXNlcjEnO1xuICAgIGxldCBjcnVpc2VyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNydWlzZXIyLmlkID0gJ2NydWlzZXIyJztcbiAgICBsZXQgc3VibWFyaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3VibWFyaW5lLmlkID0gJ3N1Ym1hcmluZSc7XG4gICAgbGV0IGNhcnJpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYXJyaWVyLmlkID0gJ2NhcnJpZXInO1xuICAgIGxldCBiYXR0bGVzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYmF0dGxlc2hpcC5pZCA9ICdiYXR0bGVzaGlwJztcblxuICAgIGxldCBzaGlwaW1hZ2VzID0gW2NydWlzZXIxLCBjcnVpc2VyMiwgc3VibWFyaW5lLCBjYXJyaWVyLCBiYXR0bGVzaGlwXVxuICAgIFxuXG4gICAgcGxheWVyMS5wbGF5ZXJib2FyZCA9IGdhbWVib2FyZDE7XG4gICAgY29tcHV0ZXIucGxheWVyYm9hcmQgPSBnYW1lYm9hcmQyO1xuXG4gICAgd2hpbGUgKGdhbWUuZmlyc3RDaGlsZCkge1xuICAgICAgICBnYW1lLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZ2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cCcpO1xuICAgIGdhbWUuY2xhc3NMaXN0LmFkZCgnc2hpcHBsYWNlbWVudCcpXG5cbiAgICBnYW1lYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYjEuY2xhc3NOYW1lID0gJ2dhbWVib2FyZCc7XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5U2hpcCgpIHtcbiAgICAgICAgd2hpbGUgKGluc3RydWN0aW9ucy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBpbnN0cnVjdGlvbnMuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZCgnc2hpcGRpdicpO1xuXG4gICAgICAgIGxldCBzaGlwVmlzdWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBWaXN1YWwuY2xhc3NMaXN0LmFkZCgnc2hpcHZpc3VhbCcpXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBzaGlwaW1hZ2VzWzBdLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVkoLTM5cHgpJztcbiAgICAgICAgICAgIHNoaXBpbWFnZXNbMF0uc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ3RvcCBsZWZ0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBpbWFnZXNbMF0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcFZpc3VhbC5hcHBlbmRDaGlsZChzaGlwaW1hZ2VzWzBdKTtcblxuICAgICAgICBsZXQgc2hpcERpcmVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHNoaXBPcmllbnRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzaGlwT3JpZW50YXRpb24uaW5uZXJIVE1MID0gb3JpZW50YXRpb247XG5cbiAgICAgICAgc2hpcERpcmVjdGlvbnMuaW5uZXJIVE1MID0gJ0NsaWNrIG9uIHRoZSBib2FyZCB0byBwbGFjZSB0aGlzIHNoaXAnO1xuICAgICAgICBzaGlwT3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlTaGlwKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgICAgICBkaXNwbGF5U2hpcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHNoaXBEaXJlY3Rpb25zKTtcbiAgICAgICAgc2hpcERpdi5hcHBlbmRDaGlsZChzaGlwVmlzdWFsKTtcbiAgICAgICAgc2hpcERpdi5hcHBlbmRDaGlsZChzaGlwT3JpZW50YXRpb24pO1xuICAgICAgICBpbnN0cnVjdGlvbnMuYXBwZW5kQ2hpbGQoc2hpcERpdilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTaGlwKG5ld3NxdWFyZSkgIHtcbiAgICAgICAgaWYgKHNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQxLmNoZWNrU2hpcFBsYWNlbWVudChzaGlwc1swXSwgW25ld3NxdWFyZS5nZXRBdHRyaWJ1dGUoJ3gnKSwgbmV3c3F1YXJlLmdldEF0dHJpYnV0ZSgneScpXSwgb3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkMS5wbGFjZVNoaXAoc2hpcHNbMF0sIFtuZXdzcXVhcmUuZ2V0QXR0cmlidXRlKCd4JyksIG5ld3NxdWFyZS5nZXRBdHRyaWJ1dGUoJ3knKV0sIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICBuZXdzcXVhcmUuYXBwZW5kQ2hpbGQoc2hpcGltYWdlc1swXSk7XG4gICAgICAgICAgICAgICAgc2hpcGltYWdlcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHNoaXBzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVQYWdlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNoaXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBmb3IgKGxldCBpID0gMTsgaTw9IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IG5ld3NxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnNldEF0dHJpYnV0ZSgneCcsIGopO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnNldEF0dHJpYnV0ZSgneScsIGkpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICAgICAgICAgICAgbmV3c3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkU2hpcChuZXdzcXVhcmUpKVxuICAgICAgICAgICAgZ2FtZWIxLmFwcGVuZENoaWxkKG5ld3NxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBnYW1lYjFzcXVhcmVzID0gZ2FtZWIxLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcblxuICAgIGxldCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIC8vIGluc3RydWN0aW9ucy5pbm5lckhUTUwgPSBcIlBsYWNlIHlvdXIgc2hpcHMhXCI7XG4gICAgaW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2luc3RydWN0aW9ucycpO1xuXG4gICAgZ2FtZS5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnMpO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZWIxKTtcbiAgICBkaXNwbGF5U2hpcCgpO1xuXG59XG5cbmZ1bmN0aW9uIGdhbWVQYWdlKCkge1xuICAgIHdoaWxlIChnYW1lLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZ2FtZS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGdhbWUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcHBsYWNlbWVudCcpO1xuXG4gICBcbiAgICBnYW1lYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYjIuY2xhc3NOYW1lID0gJ2dhbWVib2FyZCc7XG5cblxuICAgIGxldCBuYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBuYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUxLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICBuYW1lMi5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG5cbiAgICBuYW1lMS5pbm5lckhUTUwgPSBwbGF5ZXIxLm5hbWU7XG4gICAgbmFtZTIuaW5uZXJIVE1MID0gY29tcHV0ZXIubmFtZTtcblxuICAgIGdhbWViMS5hcHBlbmRDaGlsZChuYW1lMSk7XG4gICAgZ2FtZWIyLmFwcGVuZENoaWxkKG5hbWUyKTtcblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrcygpIHtcbiAgICAgICAgbGV0IHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxXG4gICAgICAgIGxldCB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgMVxuICAgICAgICBcbiAgICAgICAgd2hpbGUgKGdhbWVib2FyZDEucmV0dXJuU3BhY2UoW3gseV0pLmhpdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coW3gseV0pXG4gICAgICAgICAgICB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgMVxuICAgICAgICAgICAgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSArIDFcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBib2FyZFNxdWFyZSA9IGdhbWVib2FyZDEucmV0dXJuU3BhY2UoW3gseV0pXG4gICAgICAgIGxldCBuZXdzcXVhcmU7XG5cbiAgICAgICAgZ2FtZWIxc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLmdldEF0dHJpYnV0ZSgneCcpID09IHggJiYgc3F1YXJlLmdldEF0dHJpYnV0ZSgneScpID09IHkpIHtcbiAgICAgICAgICAgICAgICBuZXdzcXVhcmUgPSBzcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIG5ld3NxdWFyZS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgaWYoZ2FtZWJvYXJkMS5yZWNlaXZlQXR0YWNrKFt4LHldKSkge1xuICAgICAgICAgICAgaWNvbi5pZCA9ICgnaGl0bWFya2VyJyk7XG4gICAgICAgICAgICBpZiAoYm9hcmRTcXVhcmUuY29udGVudHMuaXNTdW5rKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChib2FyZFNxdWFyZS5jb250ZW50cy5zaGlwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdUaGUgY29tcHV0ZXIgc3VuayB5b3VyIENydWlzZXIhJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnVGhlIGNvbXB1dGVyIHN1bmsgeW91ciBTdWJtYXJpbmUhJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnVGhlIGNvbXB1dGVyIHN1bmsgeW91ciBDYXJyaWVyIScpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoZSBjb21wdXRlciBzdW5rIHlvdXIgQmF0dGxlc2hpcCEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZ2FtZWJvYXJkMS5jaGVja0dhbWVFbmQoKSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdUaGUgY29tcHV0ZXIgd2lucyAuLi4uLi4uJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGljb24uaWQgPSAoJ21pc3NtYXJrZXInKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXNlckF0dGFja3MobmV3c3F1YXJlKSB7XG4gICAgICAgIGxldCB4ID0gbmV3c3F1YXJlLmdldEF0dHJpYnV0ZSgneCcpO1xuICAgICAgICBsZXQgeSA9IG5ld3NxdWFyZS5nZXRBdHRyaWJ1dGUoJ3knKTtcblxuICAgICAgICBsZXQgYm9hcmRTcXVhcmUgPSBnYW1lYm9hcmQyLnJldHVyblNwYWNlKFt4LHldKVxuICAgICAgICBpZiAoYm9hcmRTcXVhcmUuaGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdTcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBoaXQhJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBuZXdzcXVhcmUuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICBpZihnYW1lYm9hcmQyLnJlY2VpdmVBdHRhY2soW3gseV0pKSB7XG4gICAgICAgICAgICAgICAgaWNvbi5pZCA9ICgnaGl0bWFya2VyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkU3F1YXJlLmNvbnRlbnRzLmlzU3Vuaykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGJvYXJkU3F1YXJlLmNvbnRlbnRzLnNoaXBMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91IHN1bmsgdGhlaXIgQ3J1aXNlciEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3Ugc3VuayB0aGVpciBTdWJtYXJpbmUhJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91IHN1bmsgdGhlaXIgQ2FycmllciEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3Ugc3VuayB0aGVpciBCYXR0bGVzaGlwIScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkMi5jaGVja0dhbWVFbmQoKSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91IFdpbiEnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWNvbi5pZCA9ICgnbWlzc21hcmtlcicpO1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDE7IGk8PSAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5zZXRBdHRyaWJ1dGUoJ3gnLCBqKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5zZXRBdHRyaWJ1dGUoJ3knLCBpKTtcbiAgICAgICAgICAgIG5ld3NxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICAgICAgICAgIG5ld3NxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVzZXJBdHRhY2tzKG5ld3NxdWFyZSkpO1xuICAgICAgICAgICAgZ2FtZWIyLmFwcGVuZENoaWxkKG5ld3NxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb21wdXRlckJvYXJkKCkge1xuICAgICAgICBsZXQgY29tcHV0ZXJTaGlwcyA9IFtzaGlwKDIpLCBzaGlwKDIpLCBzaGlwKDMpLCBzaGlwKDQpLCBzaGlwKDUpXTtcblxuICAgICAgICB3aGlsZSAoY29tcHV0ZXJTaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCkgKyAxXG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCkgKyAxXG4gICAgICAgICAgICBsZXQgcmFuZG9PcmllbnQgPSAoKSA9PiB7IHJldHVybiAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSA+IDApID8gICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCd9O1xuICAgICAgICAgICAgbGV0IGNvbXB1dGVyT3JpZW50ID0gcmFuZG9PcmllbnQoKTtcbiAgICAgICAgICAgIHdoaWxlICghKGdhbWVib2FyZDIuY2hlY2tTaGlwUGxhY2VtZW50KGNvbXB1dGVyU2hpcHNbMF0sIFt4LHldLCBjb21wdXRlck9yaWVudCkpKSB7XG4gICAgICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCkgKyAxO1xuICAgICAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApICsgMTtcbiAgICAgICAgICAgICAgICBjb21wdXRlck9yaWVudCA9IHJhbmRvT3JpZW50KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyU2hpcHNbMF0sW3gseV0sY29tcHV0ZXJPcmllbnQpXG4gICAgICAgICAgICBnYW1lYm9hcmQyLnBsYWNlU2hpcChjb21wdXRlclNoaXBzWzBdLCBbeCx5XSwgY29tcHV0ZXJPcmllbnQpO1xuICAgICAgICAgICAgY29tcHV0ZXJTaGlwcy5zaGlmdCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjcmVhdGVDb21wdXRlckJvYXJkKCk7XG5cbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWViMSk7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChnYW1lYjIpO1xuXG4gICAgZ2FtZWIyc3F1YXJlcyA9IGdhbWViMi5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG59XG5cblxuZ2FtZVNldFVwUGFnZSgpOyJdLCJuYW1lcyI6WyJzaGlwIiwiZ2FtZWJvYXJkIiwiY3JlYXRlQm9hcmQiLCJib2FyZCIsImkiLCJqIiwic3BhY2UiLCJjb250ZW50cyIsImhpdCIsIngiLCJwYXJzZUludCIsInkiLCJwdXNoIiwic2hpcHMiLCJyZXR1cm5TcGFjZSIsImNvb3JkaW5hdGVzIiwiYW5zd2VyIiwiZm9yRWFjaCIsImNoZWNrU2hpcFBsYWNlbWVudCIsIm9yaWVudGF0aW9uIiwic2hpcExlbmd0aCIsInBsYWNlU2hpcCIsInJlY2VpdmVBdHRhY2siLCJhbGVydCIsImNoZWNrR2FtZUVuZCIsImlzU3VuayIsInBsYXllciIsIm5hbWUiLCJwbGF5ZXJOYW1lIiwicGxheWVyYm9hcmQiLCJhdHRhY2siLCJjb25zb2xlIiwibG9nIiwicmVjaWV2ZUF0dGFjayIsInByb21wdCIsImxlbmd0aCIsInNoaXBIaXRzIiwiZ2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbWViMSIsImdhbWViMiIsImdhbWViMXNxdWFyZXMiLCJnYW1lYjJzcXVhcmVzIiwicGxheWVyMSIsImNvbXB1dGVyIiwiZ2FtZWJvYXJkMSIsImdhbWVib2FyZDIiLCJnYW1lU2V0VXBQYWdlIiwibmFtZUlucHV0IiwiY3JlYXRlRWxlbWVudCIsIm5hbWVMYWJlbCIsInN1Ym1pdCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3J1aXNlcjEiLCJpZCIsImNydWlzZXIyIiwic3VibWFyaW5lIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJzaGlwaW1hZ2VzIiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsImNsYXNzTmFtZSIsImRpc3BsYXlTaGlwIiwiaW5zdHJ1Y3Rpb25zIiwic2hpcERpdiIsInNoaXBWaXN1YWwiLCJzdHlsZSIsInRyYW5zZm9ybSIsInRyYW5zZm9ybU9yaWdpbiIsInNoaXBEaXJlY3Rpb25zIiwic2hpcE9yaWVudGF0aW9uIiwiYWRkU2hpcCIsIm5ld3NxdWFyZSIsImdldEF0dHJpYnV0ZSIsInNoaWZ0IiwiZ2FtZVBhZ2UiLCJzZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmFtZTEiLCJuYW1lMiIsImNvbXB1dGVyQXR0YWNrcyIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImJvYXJkU3F1YXJlIiwic3F1YXJlIiwiaWNvbiIsInVzZXJBdHRhY2tzIiwiY3JlYXRlQ29tcHV0ZXJCb2FyZCIsImNvbXB1dGVyU2hpcHMiLCJmbG9vciIsInJhbmRvT3JpZW50IiwiY29tcHV0ZXJPcmllbnQiXSwic291cmNlUm9vdCI6IiJ9