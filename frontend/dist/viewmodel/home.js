/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 561);
/******/ })
/************************************************************************/
/******/ ({

/***/ 561:
/***/ (function(module, exports) {

// import {Vue, Component} from "vue-property-decorator";
// import ListComponent from "../component/List.vue";
// import Todo from "../data/todo";
// import {HomeStore} from "../store/home";
// import {Subscription} from 'rxjs';
// @Component({
//   components: {
//     "todo-list": ListComponent
//   },
//   filters: {
//     pluralize: function(n) {
//       return n===1 ? 'item' : 'items';
//     }
//   }
// })
// class HomeViewModel extends Vue {
//   public inputText: string = "";
//   public todos: Todo[] = [];
//   public filterType: boolean = false;
//   public store: HomeStore = new HomeStore();
//   public subscription: Subscription;
//   public created(): void {
//     this.store.onTodosChanged.subscribe( todos => {
//       this.todos = todos;
//     })
//     this.store.onInputTextChanged.subscribe( text => {
//       this.inputText = text;
//     })
//   }
//   public inputTextUpdate(text: string) {
//     this.store.changeInputText(text);
//   }
//   public filterTodo(filterType: boolean) {
//     this.filterType = filterType;
//   }
//   public createTodo(text: string) {
//     this.store.addTodo(text);
//     this.store.changeInputText("");
//   }
//   public destroyTodo(index: number) {
//     const todos = this.todos.filter( todo => {
//       return todo.id != index
//     })
//     this.todos = todos;
//   }
// }
// new HomeViewModel({
//   el: "#main"
// })


/***/ })

/******/ });