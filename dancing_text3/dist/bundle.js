/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict"


	import {docReady} from './core/core.js'
	import {stopball} from './controlers/stop.js'
	// let myApp
	// let stateApp = "stop"

	let inicia = function (ball, stateApp) {
	  console.log(stateApp)

	  let speed = 1; //1 to 100

	  let incX = speed * (Math.round(Math.random()) ? 1 : -1);
	  let incY = speed * (Math.round(Math.random()) ? 1 : -1);

	  //cambiar flecha x
	  direction_X(incX)

	  //cambiar flecha xy
	  direction_Y(incY)

	  //cambiar flecha texto

	  let direction = [incX, incY]
	  direction_text(direction)

	  return function dW() {


	    let x = ball.style.left ? parseInt(ball.style.left, 10) : 0;
	    let y = ball.style.top ? parseInt(ball.style.top, 10) : 0;

	    document.getElementById("px_x").innerHTML=x ;
	    document.getElementById("px_y").innerHTML=y;


	    ball.style.left = (x + incX) + "px";
	    ball.style.top = (y + incY) + "px";



	    //Detect if we reach X coordinates limits
	    if (((x + incX) > (window.innerWidth - 40)) || ((x + incX) <= 0)) {
	      incX = (-1) * incX

	      //cambiar flecha x
	      direction_X(incX)

	      //cambiar flecha texto
	      let direction = [incX, incY]
	      direction_text(direction)


	    }


	    //Detect if we reach Y coordinates limits
	    if (((y + incY) > (window.innerHeight - 40)) || ((y + incY) <= 0)) {
	      incY = (-1) * incY

	      //cambiar flecha y
	      direction_Y(incY)

	      //cambiar flecha texto
	      let direction = [incX, incY]
	      direction_text(direction)
	    }

	  }


	}

	// console.log(inicia()())

	export let start = function (stateApp) {
	  console.log(stateApp)
	  if (stateApp!="pause"){
	     stateApp = "stop"
	  }
	  let myApp = setInterval(inicia(document.getElementById("ball"),stateApp), 1);
	  stateApp = "run"
	  let global_vars = { "stateapp": stateApp, "myapp": myApp }

	  // console.log(global_vars)
	  // console.log(global_vars.stateapp)
	  // console.log(global_vars.myapp)

	  stopball(global_vars)
	}

	function direction_X(incX) {

	  if (incX == 1) {
	    document.getElementById('d_x').style.transform = 'rotate(' + 45 + 'deg)';
	  } else {
	    document.getElementById('d_x').style.transform = 'rotate(' + 225 + 'deg)';
	  }
	}

	function direction_Y(incY) {
	  if (incY == 1) {
	    document.getElementById('d_y').style.transform = 'rotate(' + 135 + 'deg)';
	  } else {
	    document.getElementById('d_y').style.transform = 'rotate(' + 315 + 'deg)';
	  }
	}

	function direction_text(direction) {
	  let incX
	  let incY
	  incX = direction[0]
	  incY = direction[1]



	  if ((incX == 1) && (incY == 1)) {
	    document.getElementById('d_t').style.transform = 'rotate(' + 90 + 'deg)';
	  } else if ((incX == -1) && (incY == 1)) {
	    document.getElementById('d_t').style.transform = 'rotate(' + 180 + 'deg)';
	  } else if ((incX == -1) && (incY == -1)) {
	    document.getElementById('d_t').style.transform = 'rotate(' + 270 + 'deg)';
	  } else {
	    document.getElementById('d_t').style.transform = 'rotate(' + 360 + 'deg)';
	  }

	}

	docReady(start);


/***/ })
/******/ ]);