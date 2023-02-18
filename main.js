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
  function userAttacks(newsquare) {
    let x = newsquare.getAttribute('x');
    let y = newsquare.getAttribute('y');
    let icon = document.createElement('img');
    newsquare.appendChild(icon);
    let boardSquare = gameboard2.returnSpace([x, y]);
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
      }
    } else {
      icon.id = 'missmarker';
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
  gameboard2.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3), [3, 3], 'vertical');
  game.appendChild(gameb1);
  game.appendChild(gameb2);
  gameb2squares = gameb2.querySelectorAll('.square');
}
gameSetUpPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFFO0lBQ3pCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDMUIsSUFBSTJFLFNBQVMsR0FBRzFDLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLEtBQUssQ0FBQztNQUM3QzhCLFNBQVMsQ0FBQ0ksWUFBWSxDQUFDLEdBQUcsRUFBRS9FLENBQUMsQ0FBQztNQUM5QjJFLFNBQVMsQ0FBQ0ksWUFBWSxDQUFDLEdBQUcsRUFBRWhGLENBQUMsQ0FBQztNQUM5QjRFLFNBQVMsQ0FBQ1gsU0FBUyxHQUFHLFFBQVE7TUFDOUJXLFNBQVMsQ0FBQ3pCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNaUMsV0FBVyxDQUFDUixTQUFTLENBQUMsQ0FBQztNQUNqRXZDLE1BQU0sQ0FBQ2EsV0FBVyxDQUFDMEIsU0FBUyxDQUFDO0lBQ2pDO0VBQ0o7RUFFQWpDLFVBQVUsQ0FBQzFCLFNBQVMsQ0FBQ3JCLDJDQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDO0VBRWhEcUMsSUFBSSxDQUFDaUIsV0FBVyxDQUFDZCxNQUFNLENBQUM7RUFDeEJILElBQUksQ0FBQ2lCLFdBQVcsQ0FBQ2IsTUFBTSxDQUFDO0VBRXhCRSxhQUFhLEdBQUdGLE1BQU0sQ0FBQzRDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztBQUN0RDtBQUdBckMsYUFBYSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuXG5sZXQgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGk8PSAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwYWNlID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50czogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgeDogcGFyc2VJbnQoaSksXG4gICAgICAgICAgICAgICAgICAgIHk6IHBhcnNlSW50KGopXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvYXJkLnB1c2goc3BhY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH07XG5cbiAgICBsZXQgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuXG4gICAgbGV0IHNoaXBzID0gW107XG5cbiAgICBmdW5jdGlvbiByZXR1cm5TcGFjZShjb29yZGluYXRlcykge1xuICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVzWzFdO1xuICAgICAgICBsZXQgYW5zd2VyO1xuXG5cbiAgICAgICAgYm9hcmQuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzcGFjZS54ID09IHggJiYgc3BhY2UueSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyID0gc3BhY2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGxldCBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgbGV0IGFuc3dlciA9IHRydWU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVzWzBdID4gMTAgfHwgY29vcmRpbmF0ZXNbMV0gPiAxMCkge1xuICAgICAgICAgICAgICAgIGFuc3dlciA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzcGFjZS5jb250ZW50cyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWzBdKys7XG4gICAgICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWzFdKys7XG4gICAgICAgICAgICAgICAgICAgIHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGxldCBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgc3BhY2UuY29udGVudHMgPSBzaGlwO1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWzBdKys7XG4gICAgICAgICAgICAgICAgc3BhY2UgPSByZXR1cm5TcGFjZShjb29yZGluYXRlcyk7XG5cbiAgICAgICAgICAgICAgICBzcGFjZS5jb250ZW50cyA9IHNoaXA7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMV0rKztcbiAgICAgICAgICAgICAgICBzcGFjZSA9IHJldHVyblNwYWNlKGNvb3JkaW5hdGVzKTtcblxuICAgICAgICAgICAgICAgIHNwYWNlLmNvbnRlbnRzID0gc2hpcDtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgbGV0IHNwYWNlID0gcmV0dXJuU3BhY2UoY29vcmRpbmF0ZXMpO1xuICAgICAgICBpZiAoc3BhY2UuaGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICBzcGFjZS5oaXQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJTcGFjZSBhbHJlYWR5IGF0dGFja2VkIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc3BhY2UuY29udGVudHMpIHtcbiAgICAgICAgICAgIHNwYWNlLmNvbnRlbnRzLmhpdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrR2FtZUVuZCgpIHtcbiAgICAgICAgbGV0IGFuc3dlciA9IHRydWU7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgcmV0dXJuU3BhY2UsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tTaGlwUGxhY2VtZW50LFxuICAgICAgICBjaGVja0dhbWVFbmRcbiAgICB9XG59O1xuXG5leHBvcnQgeyBnYW1lYm9hcmQgfSIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAnO1xuXG5sZXQgcGxheWVyID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcGxheWVyTmFtZSA9IG5hbWU7XG4gICAgbGV0IHBsYXllcmJvYXJkO1xuXG4gICAgZnVuY3Rpb24gYXR0YWNrKGNvb3JkaW5hdGVzLCBib2FyZCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJib2FyZCA9IGJvYXJkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2Fubm90IGF0dGFjayBvd24gYm9hcmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXR0YWNrLFxuICAgICAgICBwbGF5ZXJib2FyZCxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG5hbWUocHJvbXB0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb21wdCAhPSAnc3RyaW5nJyB8fCBwcm9tcHQgPT0gJycpe1xuICAgICAgICAgICAgICAgIHRocm93IFwiTmFtZSBmb3JtYXQgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyTmFtZSA9IHByb21wdFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7IHBsYXllciB9IiwibGV0IHNoaXAgPSAobGVuZ3RoKSA9PiB7XG5cbiAgICBsZXQgc2hpcExlbmd0aCA9IGxlbmd0aFxuICAgIGxldCBzaGlwSGl0cyA9IDBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBzaGlwTGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBMZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBzaGlwSGl0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwSGl0cztcbiAgICAgICAgfSxcbiAgICAgICAgaGl0OiAoKSA9PiB7XG4gICAgICAgICAgICBzaGlwSGl0cysrXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBpc1N1bmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHNoaXBIaXRzID49IHNoaXBMZW5ndGgpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuZXhwb3J0IHsgc2hpcCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IHBsYXllciB9IGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG5sZXQgZ2FtZWIxO1xubGV0IGdhbWViMjtcbmxldCBnYW1lYjFzcXVhcmVzO1xubGV0IGdhbWViMnNxdWFyZXM7XG5sZXQgcGxheWVyMTtcbmxldCBjb21wdXRlcjtcbmxldCBnYW1lYm9hcmQxO1xubGV0IGdhbWVib2FyZDI7XG5sZXQgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG5cbmZ1bmN0aW9uIGdhbWVTZXRVcFBhZ2UoKSB7XG4gICAgbGV0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGV0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbmFtZUxhYmVsLmlubmVySFRNTCA9ICdOYW1lOic7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICBcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdGFydEdhbWUobmFtZUlucHV0LnZhbHVlKSlcbiAgICBzdWJtaXQuaW5uZXJIVE1MID0gJ1N0YXJ0IEdhbWUhJztcbiAgICBcbiAgICBnYW1lLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgZ2FtZS5jbGFzc0xpc3QuYWRkKCdzZXR1cCcpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUobmFtZSkge1xuICAgIHBsYXllcjEgPSBwbGF5ZXIobmFtZSk7XG4gICAgY29tcHV0ZXIgPSBwbGF5ZXIoJ0NvbXB1dGVyJylcbiAgICBnYW1lYm9hcmQxID0gZ2FtZWJvYXJkKCk7XG4gICAgZ2FtZWJvYXJkMiA9IGdhbWVib2FyZCgpO1xuICAgIGxldCBzaGlwcyA9IFtzaGlwKDIpLCBzaGlwKDIpLCBzaGlwKDMpLCBzaGlwKDQpLCBzaGlwKDUpXTtcbiAgICBcbiAgICBsZXQgY3J1aXNlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjcnVpc2VyMS5pZCA9ICdjcnVpc2VyMSc7XG4gICAgbGV0IGNydWlzZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY3J1aXNlcjIuaWQgPSAnY3J1aXNlcjInO1xuICAgIGxldCBzdWJtYXJpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzdWJtYXJpbmUuaWQgPSAnc3VibWFyaW5lJztcbiAgICBsZXQgY2FycmllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNhcnJpZXIuaWQgPSAnY2Fycmllcic7XG4gICAgbGV0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBiYXR0bGVzaGlwLmlkID0gJ2JhdHRsZXNoaXAnO1xuXG4gICAgbGV0IHNoaXBpbWFnZXMgPSBbY3J1aXNlcjEsIGNydWlzZXIyLCBzdWJtYXJpbmUsIGNhcnJpZXIsIGJhdHRsZXNoaXBdXG4gICAgXG5cbiAgICBwbGF5ZXIxLnBsYXllcmJvYXJkID0gZ2FtZWJvYXJkMTtcbiAgICBjb21wdXRlci5wbGF5ZXJib2FyZCA9IGdhbWVib2FyZDI7XG5cbiAgICB3aGlsZSAoZ2FtZS5maXJzdENoaWxkKSB7XG4gICAgICAgIGdhbWUuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBnYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ3NldHVwJyk7XG4gICAgZ2FtZS5jbGFzc0xpc3QuYWRkKCdzaGlwcGxhY2VtZW50JylcblxuICAgIGdhbWViMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWViMS5jbGFzc05hbWUgPSAnZ2FtZWJvYXJkJztcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlTaGlwKCkge1xuICAgICAgICB3aGlsZSAoaW5zdHJ1Y3Rpb25zLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGluc3RydWN0aW9ucy5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKCdzaGlwZGl2Jyk7XG5cbiAgICAgICAgbGV0IHNoaXBWaXN1YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcFZpc3VhbC5jbGFzc0xpc3QuYWRkKCdzaGlwdmlzdWFsJylcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHNoaXBpbWFnZXNbMF0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWSgtMzlweCknO1xuICAgICAgICAgICAgc2hpcGltYWdlc1swXS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAndG9wIGxlZnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcGltYWdlc1swXS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgfVxuICAgICAgICBzaGlwVmlzdWFsLmFwcGVuZENoaWxkKHNoaXBpbWFnZXNbMF0pO1xuXG4gICAgICAgIGxldCBzaGlwRGlyZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgc2hpcE9yaWVudGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNoaXBPcmllbnRhdGlvbi5pbm5lckhUTUwgPSBvcmllbnRhdGlvbjtcblxuICAgICAgICBzaGlwRGlyZWN0aW9ucy5pbm5lckhUTUwgPSAnQ2xpY2sgb24gdGhlIGJvYXJkIHRvIHBsYWNlIHRoaXMgc2hpcCc7XG4gICAgICAgIHNoaXBPcmllbnRhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICAgICAgZGlzcGxheVNoaXAoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlTaGlwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQoc2hpcERpcmVjdGlvbnMpO1xuICAgICAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHNoaXBWaXN1YWwpO1xuICAgICAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHNoaXBPcmllbnRhdGlvbik7XG4gICAgICAgIGluc3RydWN0aW9ucy5hcHBlbmRDaGlsZChzaGlwRGl2KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFNoaXAobmV3c3F1YXJlKSAge1xuICAgICAgICBpZiAoc2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKGdhbWVib2FyZDEuY2hlY2tTaGlwUGxhY2VtZW50KHNoaXBzWzBdLCBbbmV3c3F1YXJlLmdldEF0dHJpYnV0ZSgneCcpLCBuZXdzcXVhcmUuZ2V0QXR0cmlidXRlKCd5JyldLCBvcmllbnRhdGlvbikpIHtcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmQxLnBsYWNlU2hpcChzaGlwc1swXSwgW25ld3NxdWFyZS5nZXRBdHRyaWJ1dGUoJ3gnKSwgbmV3c3F1YXJlLmdldEF0dHJpYnV0ZSgneScpXSwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgIG5ld3NxdWFyZS5hcHBlbmRDaGlsZChzaGlwaW1hZ2VzWzBdKTtcbiAgICAgICAgICAgICAgICBzaGlwaW1hZ2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgc2hpcHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVBhZ2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2hpcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIGZvciAobGV0IGkgPSAxOyBpPD0gMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbmV3c3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuZXdzcXVhcmUuc2V0QXR0cmlidXRlKCd4Jywgaik7XG4gICAgICAgICAgICBuZXdzcXVhcmUuc2V0QXR0cmlidXRlKCd5JywgaSk7XG4gICAgICAgICAgICBuZXdzcXVhcmUuY2xhc3NOYW1lID0gJ3NxdWFyZSc7XG4gICAgICAgICAgICBuZXdzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRTaGlwKG5ld3NxdWFyZSkpXG4gICAgICAgICAgICBnYW1lYjEuYXBwZW5kQ2hpbGQobmV3c3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIGdhbWViMXNxdWFyZXMgPSBnYW1lYjEucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xuXG4gICAgbGV0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgLy8gaW5zdHJ1Y3Rpb25zLmlubmVySFRNTCA9IFwiUGxhY2UgeW91ciBzaGlwcyFcIjtcbiAgICBpbnN0cnVjdGlvbnMuY2xhc3NMaXN0LmFkZCgnaW5zdHJ1Y3Rpb25zJyk7XG5cbiAgICBnYW1lLmFwcGVuZENoaWxkKGluc3RydWN0aW9ucyk7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChnYW1lYjEpO1xuICAgIGRpc3BsYXlTaGlwKCk7XG5cbn1cblxuZnVuY3Rpb24gZ2FtZVBhZ2UoKSB7XG4gICAgd2hpbGUgKGdhbWUuZmlyc3RDaGlsZCkge1xuICAgICAgICBnYW1lLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZ2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwcGxhY2VtZW50Jyk7XG5cbiAgIFxuICAgIGdhbWViMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWViMi5jbGFzc05hbWUgPSAnZ2FtZWJvYXJkJztcblxuXG4gICAgbGV0IG5hbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IG5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZTEuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgIG5hbWUyLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcblxuICAgIG5hbWUxLmlubmVySFRNTCA9IHBsYXllcjEubmFtZTtcbiAgICBuYW1lMi5pbm5lckhUTUwgPSBjb21wdXRlci5uYW1lO1xuXG4gICAgZ2FtZWIxLmFwcGVuZENoaWxkKG5hbWUxKTtcbiAgICBnYW1lYjIuYXBwZW5kQ2hpbGQobmFtZTIpO1xuXG4gICAgZnVuY3Rpb24gdXNlckF0dGFja3MobmV3c3F1YXJlKSB7XG4gICAgICAgIGxldCB4ID0gbmV3c3F1YXJlLmdldEF0dHJpYnV0ZSgneCcpO1xuICAgICAgICBsZXQgeSA9IG5ld3NxdWFyZS5nZXRBdHRyaWJ1dGUoJ3knKTtcbiAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbmV3c3F1YXJlLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICBsZXQgYm9hcmRTcXVhcmUgPSBnYW1lYm9hcmQyLnJldHVyblNwYWNlKFt4LHldKVxuXG4gICAgICAgIGlmKGdhbWVib2FyZDIucmVjZWl2ZUF0dGFjayhbeCx5XSkpIHtcbiAgICAgICAgICAgIGljb24uaWQgPSAoJ2hpdG1hcmtlcicpO1xuICAgICAgICAgICAgaWYgKGJvYXJkU3F1YXJlLmNvbnRlbnRzLmlzU3Vuaykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYm9hcmRTcXVhcmUuY29udGVudHMuc2hpcExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91IHN1bmsgdGhlaXIgQ3J1aXNlciEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3Ugc3VuayB0aGVpciBTdWJtYXJpbmUhJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91IHN1bmsgdGhlaXIgQ2FycmllciEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3Ugc3VuayB0aGVpciBCYXR0bGVzaGlwIScpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQyLmNoZWNrR2FtZUVuZCgpKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1lvdSBXaW4hJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGljb24uaWQgPSAoJ21pc3NtYXJrZXInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAxOyBpPD0gMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbmV3c3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuZXdzcXVhcmUuc2V0QXR0cmlidXRlKCd4Jywgaik7XG4gICAgICAgICAgICBuZXdzcXVhcmUuc2V0QXR0cmlidXRlKCd5JywgaSk7XG4gICAgICAgICAgICBuZXdzcXVhcmUuY2xhc3NOYW1lID0gJ3NxdWFyZSc7XG4gICAgICAgICAgICBuZXdzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB1c2VyQXR0YWNrcyhuZXdzcXVhcmUpKVxuICAgICAgICAgICAgZ2FtZWIyLmFwcGVuZENoaWxkKG5ld3NxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lYm9hcmQyLnBsYWNlU2hpcChzaGlwKDMpLCBbMywzXSwgJ3ZlcnRpY2FsJyk7XG5cbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWViMSk7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChnYW1lYjIpO1xuXG4gICAgZ2FtZWIyc3F1YXJlcyA9IGdhbWViMi5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG59XG5cblxuZ2FtZVNldFVwUGFnZSgpOyJdLCJuYW1lcyI6WyJzaGlwIiwiZ2FtZWJvYXJkIiwiY3JlYXRlQm9hcmQiLCJib2FyZCIsImkiLCJqIiwic3BhY2UiLCJjb250ZW50cyIsImhpdCIsIngiLCJwYXJzZUludCIsInkiLCJwdXNoIiwic2hpcHMiLCJyZXR1cm5TcGFjZSIsImNvb3JkaW5hdGVzIiwiYW5zd2VyIiwiZm9yRWFjaCIsImNoZWNrU2hpcFBsYWNlbWVudCIsIm9yaWVudGF0aW9uIiwic2hpcExlbmd0aCIsInBsYWNlU2hpcCIsInJlY2VpdmVBdHRhY2siLCJhbGVydCIsImNoZWNrR2FtZUVuZCIsImlzU3VuayIsInBsYXllciIsIm5hbWUiLCJwbGF5ZXJOYW1lIiwicGxheWVyYm9hcmQiLCJhdHRhY2siLCJjb25zb2xlIiwibG9nIiwicmVjaWV2ZUF0dGFjayIsInByb21wdCIsImxlbmd0aCIsInNoaXBIaXRzIiwiZ2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbWViMSIsImdhbWViMiIsImdhbWViMXNxdWFyZXMiLCJnYW1lYjJzcXVhcmVzIiwicGxheWVyMSIsImNvbXB1dGVyIiwiZ2FtZWJvYXJkMSIsImdhbWVib2FyZDIiLCJnYW1lU2V0VXBQYWdlIiwibmFtZUlucHV0IiwiY3JlYXRlRWxlbWVudCIsIm5hbWVMYWJlbCIsInN1Ym1pdCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3J1aXNlcjEiLCJpZCIsImNydWlzZXIyIiwic3VibWFyaW5lIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJzaGlwaW1hZ2VzIiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsImNsYXNzTmFtZSIsImRpc3BsYXlTaGlwIiwiaW5zdHJ1Y3Rpb25zIiwic2hpcERpdiIsInNoaXBWaXN1YWwiLCJzdHlsZSIsInRyYW5zZm9ybSIsInRyYW5zZm9ybU9yaWdpbiIsInNoaXBEaXJlY3Rpb25zIiwic2hpcE9yaWVudGF0aW9uIiwiYWRkU2hpcCIsIm5ld3NxdWFyZSIsImdldEF0dHJpYnV0ZSIsInNoaWZ0IiwiZ2FtZVBhZ2UiLCJzZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmFtZTEiLCJuYW1lMiIsInVzZXJBdHRhY2tzIiwiaWNvbiIsImJvYXJkU3F1YXJlIl0sInNvdXJjZVJvb3QiOiIifQ==