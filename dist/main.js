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
        console.log(space);
        space.contents = ship;
        console.log(space);
      } else {
        coordinates[1]++;
        space = returnSpace(coordinates);
        console.log(space);
        space.contents = ship;
        console.log(space);
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
gameSetUpPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSSxFQUFFLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzFCLElBQUk0RCxTQUFTLEdBQUc1QixRQUFRLENBQUNZLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDN0NnQixTQUFTLENBQUNDLFlBQVksQ0FBQyxHQUFHLEVBQUU3RCxDQUFDLENBQUM7TUFDOUI0RCxTQUFTLENBQUNDLFlBQVksQ0FBQyxHQUFHLEVBQUU5RCxDQUFDLENBQUM7TUFDOUI2RCxTQUFTLENBQUNILFNBQVMsR0FBRyxRQUFRO01BQzlCRyxTQUFTLENBQUNYLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNOEIsT0FBTyxDQUFDbkIsU0FBUyxDQUFDLENBQUM7TUFDN0QxQixNQUFNLENBQUNjLFdBQVcsQ0FBQ1ksU0FBUyxDQUFDO0lBQ2pDO0VBQ0o7RUFHQXhCLGFBQWEsR0FBR0YsTUFBTSxDQUFDNEIsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0VBRWxELElBQUlTLFlBQVksR0FBR3ZDLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNqRDtFQUNDMkIsWUFBWSxDQUFDbkIsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBRTFDdEIsSUFBSSxDQUFDaUIsV0FBVyxDQUFDdUIsWUFBWSxDQUFDO0VBQzlCeEMsSUFBSSxDQUFDaUIsV0FBVyxDQUFDZCxNQUFNLENBQUM7RUFDeEJvQyxXQUFXLEVBQUU7QUFFakI7QUFFQTVCLGFBQWEsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi9zaGlwJztcblxubGV0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgbGV0IGJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpPD0gMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcGFjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudHM6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHg6IHBhcnNlSW50KGkpLFxuICAgICAgICAgICAgICAgICAgICB5OiBwYXJzZUludChqKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKHNwYWNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9O1xuXG4gICAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1sxXTtcbiAgICAgICAgbGV0IGFuc3dlcjtcblxuXG4gICAgICAgIGJvYXJkLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3BhY2UueCA9PSB4ICYmIHNwYWNlLnkgPT0geSkge1xuICAgICAgICAgICAgICAgIGFuc3dlciA9IHNwYWNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIGxldCBhbnN3ZXIgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb29yZGluYXRlc1swXSA+IDEwIHx8IGNvb3JkaW5hdGVzWzFdID4gMTApIHtcbiAgICAgICAgICAgICAgICBhbnN3ZXIgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BhY2UuY29udGVudHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1swXSsrO1xuICAgICAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1sxXSsrO1xuICAgICAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc1swXSsrO1xuICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwYWNlKVxuICAgICAgICAgICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzcGFjZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMV0rKztcbiAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzcGFjZSlcbiAgICAgICAgICAgICAgICBzcGFjZS5jb250ZW50cyA9IHNoaXA7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3BhY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgICBsZXQgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG4gICAgICAgIGlmIChzcGFjZS5oaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNwYWNlLmhpdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLCBzcGFjZSBhbHJlYWR5IGF0dGFja2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzcGFjZS5jb250ZW50cykge1xuICAgICAgICAgICAgc3BhY2UuY29udGVudHMuaGl0KCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrR2FtZUVuZCgpIHtcbiAgICAgICAgbGV0IGFuc3dlciA9IHRydWU7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgcmV0dXJuU3BhY2UsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tTaGlwUGxhY2VtZW50LFxuICAgICAgICBjaGVja0dhbWVFbmRcbiAgICB9XG59O1xuXG5leHBvcnQgeyBnYW1lYm9hcmQgfSIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuXG5sZXQgcGxheWVyID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcGxheWVyTmFtZSA9IG5hbWU7XG4gICAgbGV0IHBsYXllcmJvYXJkO1xuXG4gICAgZnVuY3Rpb24gYXR0YWNrKGNvb3JkaW5hdGVzLCBib2FyZCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJib2FyZCA9IGJvYXJkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2Fubm90IGF0dGFjayBvd24gYm9hcmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXR0YWNrLFxuICAgICAgICBwbGF5ZXJib2FyZCxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG5hbWUocHJvbXB0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb21wdCAhPSAnc3RyaW5nJyB8fCBwcm9tcHQgPT0gJycpe1xuICAgICAgICAgICAgICAgIHRocm93IFwiTmFtZSBmb3JtYXQgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyTmFtZSA9IHByb21wdFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7IHBsYXllciB9IiwibGV0IHNoaXAgPSAobGVuZ3RoKSA9PiB7XG5cbiAgICBsZXQgc2hpcExlbmd0aCA9IGxlbmd0aFxuICAgIGxldCBzaGlwSGl0cyA9IDBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBzaGlwTGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBMZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBzaGlwSGl0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwSGl0cztcbiAgICAgICAgfSxcbiAgICAgICAgaGl0OiAoKSA9PiB7XG4gICAgICAgICAgICBzaGlwSGl0cysrXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBpc1N1bmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHNoaXBIaXRzID49IHNoaXBMZW5ndGgpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuZXhwb3J0IHsgc2hpcCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IHBsYXllciB9IGZyb20gJy4vcGxheWVyJztcblxuXG5jb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbmxldCBnYW1lYjE7XG5sZXQgZ2FtZWIyO1xubGV0IGdhbWViMXNxdWFyZXM7XG5sZXQgZ2FtZWIyc3F1YXJlcztcbmxldCBwbGF5ZXIxO1xubGV0IGNvbXB1dGVyO1xubGV0IGdhbWVib2FyZDE7XG5sZXQgZ2FtZWJvYXJkMjtcbmxldCBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcblxuZnVuY3Rpb24gZ2FtZVNldFVwUGFnZSgpIHtcbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gJ05hbWU6JztcbiAgICBnYW1lLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgIFxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN0YXJ0R2FtZShuYW1lSW5wdXQudmFsdWUpKVxuICAgIHN1Ym1pdC5pbm5lckhUTUwgPSAnU3RhcnQgR2FtZSEnO1xuICAgIFxuICAgIGdhbWUuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICBnYW1lLmNsYXNzTGlzdC5hZGQoJ3NldHVwJyk7XG59XG5cbmZ1bmN0aW9uIGdhbWVQYWdlKCkge1xuICAgIHdoaWxlIChnYW1lLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZ2FtZS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGdhbWUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcHBsYWNlbWVudCcpO1xuXG4gICBcbiAgICBnYW1lYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYjIuY2xhc3NOYW1lID0gJ2dhbWVib2FyZCc7XG5cblxuICAgIGxldCBuYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBuYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUxLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICBuYW1lMi5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG5cbiAgICBuYW1lMS5pbm5lckhUTUwgPSBwbGF5ZXIxLm5hbWU7XG4gICAgbmFtZTIuaW5uZXJIVE1MID0gY29tcHV0ZXIubmFtZTtcblxuICAgIGdhbWViMS5hcHBlbmRDaGlsZChuYW1lMSk7XG4gICAgZ2FtZWIyLmFwcGVuZENoaWxkKG5hbWUyKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpPD0gMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbmV3c3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuZXdzcXVhcmUuc2V0QXR0cmlidXRlKCd4Jywgaik7XG4gICAgICAgICAgICBuZXdzcXVhcmUuc2V0QXR0cmlidXRlKCd5JywgaSk7XG4gICAgICAgICAgICBuZXdzcXVhcmUuY2xhc3NOYW1lID0gJ3NxdWFyZSc7XG4gICAgICAgICAgICBnYW1lYjIuYXBwZW5kQ2hpbGQobmV3c3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZWIxKTtcbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWViMik7XG5cbiAgICBnYW1lYjJzcXVhcmVzID0gZ2FtZWIyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKG5hbWUpIHtcbiAgICBwbGF5ZXIxID0gcGxheWVyKG5hbWUpO1xuICAgIGNvbXB1dGVyID0gcGxheWVyKCdDb21wdXRlcicpXG4gICAgZ2FtZWJvYXJkMSA9IGdhbWVib2FyZCgpO1xuICAgIGdhbWVib2FyZDIgPSBnYW1lYm9hcmQoKTtcbiAgICBsZXQgc2hpcHMgPSBbc2hpcCgyKSwgc2hpcCgyKSwgc2hpcCgzKSwgc2hpcCg0KSwgc2hpcCg1KV07XG4gICAgXG4gICAgbGV0IGNydWlzZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY3J1aXNlcjEuaWQgPSAnY3J1aXNlcjEnO1xuICAgIGxldCBjcnVpc2VyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNydWlzZXIyLmlkID0gJ2NydWlzZXIyJztcbiAgICBsZXQgc3VibWFyaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3VibWFyaW5lLmlkID0gJ3N1Ym1hcmluZSc7XG4gICAgbGV0IGNhcnJpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYXJyaWVyLmlkID0gJ2NhcnJpZXInO1xuICAgIGxldCBiYXR0bGVzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYmF0dGxlc2hpcC5pZCA9ICdiYXR0bGVzaGlwJztcblxuICAgIGxldCBzaGlwaW1hZ2VzID0gW2NydWlzZXIxLCBjcnVpc2VyMiwgc3VibWFyaW5lLCBjYXJyaWVyLCBiYXR0bGVzaGlwXVxuICAgIFxuXG4gICAgcGxheWVyMS5wbGF5ZXJib2FyZCA9IGdhbWVib2FyZDE7XG4gICAgY29tcHV0ZXIucGxheWVyYm9hcmQgPSBnYW1lYm9hcmQyO1xuXG4gICAgd2hpbGUgKGdhbWUuZmlyc3RDaGlsZCkge1xuICAgICAgICBnYW1lLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZ2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cCcpO1xuICAgIGdhbWUuY2xhc3NMaXN0LmFkZCgnc2hpcHBsYWNlbWVudCcpXG5cbiAgICBnYW1lYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYjEuY2xhc3NOYW1lID0gJ2dhbWVib2FyZCc7XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5U2hpcCgpIHtcbiAgICAgICAgd2hpbGUgKGluc3RydWN0aW9ucy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBpbnN0cnVjdGlvbnMuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZCgnc2hpcGRpdicpO1xuXG4gICAgICAgIGxldCBzaGlwVmlzdWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBWaXN1YWwuY2xhc3NMaXN0LmFkZCgnc2hpcHZpc3VhbCcpXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBzaGlwaW1hZ2VzWzBdLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVkoLTM5cHgpJztcbiAgICAgICAgICAgIHNoaXBpbWFnZXNbMF0uc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ3RvcCBsZWZ0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBpbWFnZXNbMF0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcFZpc3VhbC5hcHBlbmRDaGlsZChzaGlwaW1hZ2VzWzBdKTtcblxuICAgICAgICBsZXQgc2hpcERpcmVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHNoaXBPcmllbnRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzaGlwT3JpZW50YXRpb24uaW5uZXJIVE1MID0gb3JpZW50YXRpb247XG5cbiAgICAgICAgc2hpcERpcmVjdGlvbnMuaW5uZXJIVE1MID0gJ0NsaWNrIG9uIHRoZSBib2FyZCB0byBwbGFjZSB0aGlzIHNoaXAnO1xuICAgICAgICBzaGlwT3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlTaGlwKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgICAgICBkaXNwbGF5U2hpcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHNoaXBEaXJlY3Rpb25zKTtcbiAgICAgICAgc2hpcERpdi5hcHBlbmRDaGlsZChzaGlwVmlzdWFsKTtcbiAgICAgICAgc2hpcERpdi5hcHBlbmRDaGlsZChzaGlwT3JpZW50YXRpb24pO1xuICAgICAgICBpbnN0cnVjdGlvbnMuYXBwZW5kQ2hpbGQoc2hpcERpdilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTaGlwKG5ld3NxdWFyZSkgIHtcbiAgICAgICAgaWYgKHNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQxLmNoZWNrU2hpcFBsYWNlbWVudChzaGlwc1swXSwgW25ld3NxdWFyZS5nZXRBdHRyaWJ1dGUoJ3gnKSwgbmV3c3F1YXJlLmdldEF0dHJpYnV0ZSgneScpXSwgb3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkMS5wbGFjZVNoaXAoc2hpcHNbMF0sIFtuZXdzcXVhcmUuZ2V0QXR0cmlidXRlKCd4JyksIG5ld3NxdWFyZS5nZXRBdHRyaWJ1dGUoJ3knKV0sIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICBuZXdzcXVhcmUuYXBwZW5kQ2hpbGQoc2hpcGltYWdlc1swXSk7XG4gICAgICAgICAgICAgICAgc2hpcGltYWdlcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHNoaXBzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVQYWdlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNoaXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBmb3IgKGxldCBpID0gMTsgaTw9IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IG5ld3NxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnNldEF0dHJpYnV0ZSgneCcsIGopO1xuICAgICAgICAgICAgbmV3c3F1YXJlLnNldEF0dHJpYnV0ZSgneScsIGkpO1xuICAgICAgICAgICAgbmV3c3F1YXJlLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICAgICAgICAgICAgbmV3c3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkU2hpcChuZXdzcXVhcmUpKVxuICAgICAgICAgICAgZ2FtZWIxLmFwcGVuZENoaWxkKG5ld3NxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBnYW1lYjFzcXVhcmVzID0gZ2FtZWIxLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcblxuICAgIGxldCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIC8vIGluc3RydWN0aW9ucy5pbm5lckhUTUwgPSBcIlBsYWNlIHlvdXIgc2hpcHMhXCI7XG4gICAgaW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2luc3RydWN0aW9ucycpO1xuXG4gICAgZ2FtZS5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnMpO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZWIxKTtcbiAgICBkaXNwbGF5U2hpcCgpO1xuXG59XG5cbmdhbWVTZXRVcFBhZ2UoKTsiXSwibmFtZXMiOlsic2hpcCIsImdhbWVib2FyZCIsImNyZWF0ZUJvYXJkIiwiYm9hcmQiLCJpIiwiaiIsInNwYWNlIiwiY29udGVudHMiLCJoaXQiLCJ4IiwicGFyc2VJbnQiLCJ5IiwicHVzaCIsInNoaXBzIiwicmV0dXJuU3BhY2UiLCJjb29yZGluYXRlcyIsImFuc3dlciIsImZvckVhY2giLCJjaGVja1NoaXBQbGFjZW1lbnQiLCJvcmllbnRhdGlvbiIsInNoaXBMZW5ndGgiLCJwbGFjZVNoaXAiLCJjb25zb2xlIiwibG9nIiwicmVjZWl2ZUF0dGFjayIsImNoZWNrR2FtZUVuZCIsImlzU3VuayIsInBsYXllciIsIm5hbWUiLCJwbGF5ZXJOYW1lIiwicGxheWVyYm9hcmQiLCJhdHRhY2siLCJyZWNpZXZlQXR0YWNrIiwicHJvbXB0IiwibGVuZ3RoIiwic2hpcEhpdHMiLCJnYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FtZWIxIiwiZ2FtZWIyIiwiZ2FtZWIxc3F1YXJlcyIsImdhbWViMnNxdWFyZXMiLCJwbGF5ZXIxIiwiY29tcHV0ZXIiLCJnYW1lYm9hcmQxIiwiZ2FtZWJvYXJkMiIsImdhbWVTZXRVcFBhZ2UiLCJuYW1lSW5wdXQiLCJjcmVhdGVFbGVtZW50IiwibmFtZUxhYmVsIiwic3VibWl0IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lIiwidmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJnYW1lUGFnZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJjbGFzc05hbWUiLCJuYW1lMSIsIm5hbWUyIiwibmV3c3F1YXJlIiwic2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvckFsbCIsImNydWlzZXIxIiwiaWQiLCJjcnVpc2VyMiIsInN1Ym1hcmluZSIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwic2hpcGltYWdlcyIsImRpc3BsYXlTaGlwIiwiaW5zdHJ1Y3Rpb25zIiwic2hpcERpdiIsInNoaXBWaXN1YWwiLCJzdHlsZSIsInRyYW5zZm9ybSIsInRyYW5zZm9ybU9yaWdpbiIsInNoaXBEaXJlY3Rpb25zIiwic2hpcE9yaWVudGF0aW9uIiwiYWRkU2hpcCIsImdldEF0dHJpYnV0ZSIsInNoaWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==