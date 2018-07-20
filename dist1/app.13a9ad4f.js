webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(7);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = document.createElement('div');
document.body.appendChild(root);

new _vue2.default({
    render: function render(h) {
        return h(_app2.default);
    }
}).$mount(root);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(8)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(27),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0d720761",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = __webpack_require__(10);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(13);

var _footer2 = _interopRequireDefault(_footer);

var _todo = __webpack_require__(15);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      text: 'abvc12',
      title: '大家好'
    };
  },

  computed: {
    titleall: function titleall() {
      return this.text + '-' + this.title;
    }
  },
  components: {
    Header: _header2.default,
    Footer: _footer2.default,
    Todo: _todo2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(11)
}
var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(12),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-28c0c05c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "main-header"
  }, [_c('h1', [_vm._v("JTodo")])])
}]}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(14);

exports.default = {
	data: function data() {
		return {
			author: 'GUO'
		};
	},
	render: function render() {
		var h = arguments[0];

		return h(
			'div',
			{
				attrs: { id: 'footer' }
			},
			[h('span', ['Written by ', this.author])]
		);
	}
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(16)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(26),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-417c0cce",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _item = __webpack_require__(18);

var _item2 = _interopRequireDefault(_item);

var _tabs = __webpack_require__(22);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var id = 0;

exports.default = {
	data: function data() {
		return {
			todos: [],
			filter: 'all'
		};
	},

	methods: {
		addTodo: function addTodo(e) {
			// console.log(e.target.value.trim());
			this.todos.unshift({
				id: id++,
				content: e.target.value.trim(),
				completed: false
			});
			e.target.value = '';
		},
		deleteTodo: function deleteTodo(id) {
			console.log(id);
			this.todos.splice(this.todos.findIndex(function (todo) {
				return todo.id === id;
			}), 1);
		},
		toggleFilter: function toggleFilter(state) {
			console.log(state);
			this.filter = state;
		},
		clearAllCompleted: function clearAllCompleted() {
			this.todos = this.todos.filter(function (todo) {
				return !todo.completed;
			});
		}
	},
	components: {
		Item: _item2.default,
		Tabs: _tabs2.default
	},
	computed: {
		filteredTodos: function filteredTodos() {
			if (this.filter === 'all') {
				return this.todos;
			}
			var completed = this.filter === 'completed';
			return this.todos.filter(function (todo) {
				return completed === todo.completed;
			});
		}
	}
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(19)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(21),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-56321dca",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	props: {
		todo: {
			type: Object,
			required: true
		}
	},
	methods: {
		deleteTodo: function deleteTodo() {
			this.$emit('del', this.todo.id);
		}
	}
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['todo-item', _vm.todo.completed ? 'completed' : '']
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.todo.completed),
      expression: "todo.completed"
    }],
    staticClass: "toggle",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.todo.completed) ? _vm._i(_vm.todo.completed, null) > -1 : (_vm.todo.completed)
    },
    on: {
      "change": function($event) {
        var $$a = _vm.todo.completed,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.$set(_vm.todo, "completed", $$a.concat([$$v])))
          } else {
            $$i > -1 && (_vm.$set(_vm.todo, "completed", $$a.slice(0, $$i).concat($$a.slice($$i + 1))))
          }
        } else {
          _vm.$set(_vm.todo, "completed", $$c)
        }
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.todo.content))]), _vm._v(" "), _c('button', {
    staticClass: "destroy",
    on: {
      "click": _vm.deleteTodo
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(23)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(25),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	props: {
		filter: {
			type: String,
			required: true
		},
		todos: {
			type: Array,
			required: true
		}
	},
	data: function data() {
		return {
			states: ['all', 'active', 'completed']
		};
	},

	computed: {
		unFinishedTodoLength: function unFinishedTodoLength() {
			// console.log(this.todos);
			return this.todos.filter(function (todo) {
				return !todo.completed;
			}).length;
		}
	},
	methods: {
		toggleFilter: function toggleFilter(state) {
			this.$emit('toggle', state);
		},
		clearAllCompleted: function clearAllCompleted() {
			this.$emit('clearAllCompleted');
		}
	}
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "helper"
  }, [_c('span', {
    staticClass: "left"
  }, [_vm._v(_vm._s(_vm.unFinishedTodoLength) + " items left")]), _vm._v(" "), _c('span', {
    staticClass: "tabs"
  }, _vm._l((_vm.states), function(state) {
    return _c('span', {
      key: state,
      class: [state, _vm.filter === state ? 'actived' : ''],
      on: {
        "click": function($event) {
          _vm.toggleFilter(state)
        }
      }
    }, [_vm._v("\n\t\t\t" + _vm._s(state) + "\n\t\t")])
  })), _vm._v(" "), _c('span', {
    staticClass: "clear",
    on: {
      "click": _vm.clearAllCompleted
    }
  }, [_vm._v("Clear Completed")])])
},staticRenderFns: []}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "real-app"
  }, [_c('input', {
    staticClass: "add-input",
    attrs: {
      "type": "text",
      "autofocus": "autofocus",
      "placeholder": "接下去要做什么"
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.addTodo($event)
      }
    }
  }), _vm._v(" "), _vm._l((_vm.filteredTodos), function(todo) {
    return _c('item', {
      key: todo.id,
      attrs: {
        "todo": todo
      },
      on: {
        "del": _vm.deleteTodo
      }
    })
  }), _vm._v(" "), _c('tabs', {
    attrs: {
      "filter": _vm.filter,
      "todos": _vm.todos
    },
    on: {
      "toggle": _vm.toggleFilter,
      "clearAllCompleted": _vm.clearAllCompleted
    }
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    attrs: {
      "id": "cover"
    }
  }), _vm._v(" "), _c('Header'), _vm._v(" "), _c('Footer'), _vm._v(" "), _c('Todo')], 1)
},staticRenderFns: []}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[3]);