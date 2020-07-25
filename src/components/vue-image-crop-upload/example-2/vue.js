/*!
 * Vue.js v2.0.5
 * (c) 2014-2016 Evan You
 * Released under the MIT License.
 */
(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory()
		: typeof define === 'function' && define.amd ? define(factory)
			: (global.Vue = factory());
}(this, function() {
	'use strict';

	/*  */

	/**
 * Convert a value to a string that is actually rendered.
 */
	function _toString(val) {
		return val == null
			? ''
			: typeof val === 'object'
				? JSON.stringify(val, null, 2)
				: String(val);
	}

	/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
	function toNumber(val) {
		const n = parseFloat(val, 10);
		return (n || n === 0) ? n : val;
	}

	/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
	function makeMap(
		str,
		expectsLowerCase
	) {
		const map = Object.create(null);
		const list = str.split(',');
		for (let i = 0; i < list.length; i++) {
			map[list[i]] = true;
		}
		return expectsLowerCase
			? function(val) { return map[val.toLowerCase()]; }
			: function(val) { return map[val]; };
	}

	/**
 * Check if a tag is a built-in tag.
 */
	const isBuiltInTag = makeMap('slot,component', true);

	/**
 * Remove an item from an array
 */
	function remove$1(arr, item) {
		if (arr.length) {
			const index = arr.indexOf(item);
			if (index > -1) {
				return arr.splice(index, 1);
			}
		}
	}

	/**
 * Check whether the object has the property.
 */
	const hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(obj, key) {
		return hasOwnProperty.call(obj, key);
	}

	/**
 * Check if value is primitive
 */
	function isPrimitive(value) {
		return typeof value === 'string' || typeof value === 'number';
	}

	/**
 * Create a cached version of a pure function.
 */
	function cached(fn) {
		const cache = Object.create(null);
		return function cachedFn(str) {
			const hit = cache[str];
			return hit || (cache[str] = fn(str));
		};
	}

	/**
 * Camelize a hyphen-delmited string.
 */
	const camelizeRE = /-(\w)/g;
	const camelize = cached(function(str) {
		return str.replace(camelizeRE, function(_, c) { return c ? c.toUpperCase() : ''; });
	});

	/**
 * Capitalize a string.
 */
	const capitalize = cached(function(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	});

	/**
 * Hyphenate a camelCase string.
 */
	const hyphenateRE = /([^-])([A-Z])/g;
	const hyphenate = cached(function(str) {
		return str
			.replace(hyphenateRE, '$1-$2')
			.replace(hyphenateRE, '$1-$2')
			.toLowerCase();
	});

	/**
 * Simple bind, faster than native
 */
	function bind$1(fn, ctx) {
		function boundFn(a) {
			const l = arguments.length;
			return l
				? l > 1
					? fn.apply(ctx, arguments)
					: fn.call(ctx, a)
				: fn.call(ctx);
		}
		// record original fn length
		boundFn._length = fn.length;
		return boundFn;
	}

	/**
 * Convert an Array-like object to a real Array.
 */
	function toArray(list, start) {
		start = start || 0;
		let i = list.length - start;
		const ret = new Array(i);
		while (i--) {
			ret[i] = list[i + start];
		}
		return ret;
	}

	/**
 * Mix properties into target object.
 */
	function extend(to, _from) {
		for (const key in _from) {
			to[key] = _from[key];
		}
		return to;
	}

	/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
	function isObject(obj) {
		return obj !== null && typeof obj === 'object';
	}

	/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
	const toString = Object.prototype.toString;
	const OBJECT_STRING = '[object Object]';
	function isPlainObject(obj) {
		return toString.call(obj) === OBJECT_STRING;
	}

	/**
 * Merge an Array of Objects into a single Object.
 */
	function toObject(arr) {
		const res = {};
		for (let i = 0; i < arr.length; i++) {
			if (arr[i]) {
				extend(res, arr[i]);
			}
		}
		return res;
	}

	/**
 * Perform no operation.
 */
	function noop() {}

	/**
 * Always return false.
 */
	const no = function() { return false; };

	/**
 * Generate a static keys string from compiler modules.
 */
	function genStaticKeys(modules) {
		return modules.reduce(function(keys, m) {
			return keys.concat(m.staticKeys || []);
		}, []).join(',');
	}

	/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
	function looseEqual(a, b) {
		/* eslint-disable eqeqeq */
		return a == b || (
			isObject(a) && isObject(b)
				? JSON.stringify(a) === JSON.stringify(b)
				: false
		);
		/* eslint-enable eqeqeq */
	}

	function looseIndexOf(arr, val) {
		for (let i = 0; i < arr.length; i++) {
			if (looseEqual(arr[i], val)) { return i; }
		}
		return -1;
	}

	/*  */

	const config = {
		/**
   * Option merge strategies (used in core/util/options)
   */
		optionMergeStrategies: Object.create(null),

		/**
   * Whether to suppress warnings.
   */
		silent: false,

		/**
   * Whether to enable devtools
   */
		devtools: 'development' !== 'production',

		/**
   * Error handler for watcher errors
   */
		errorHandler: null,

		/**
   * Ignore certain custom elements
   */
		ignoredElements: null,

		/**
   * Custom user key aliases for v-on
   */
		keyCodes: Object.create(null),

		/**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
		isReservedTag: no,

		/**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
		isUnknownElement: no,

		/**
   * Get the namespace of an element
   */
		getTagNamespace: noop,

		/**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
		mustUseProp: no,

		/**
   * List of asset types that a component can own.
   */
		_assetTypes: [
			'component',
			'directive',
			'filter'
		],

		/**
   * List of lifecycle hooks.
   */
		_lifecycleHooks: [
			'beforeCreate',
			'created',
			'beforeMount',
			'mounted',
			'beforeUpdate',
			'updated',
			'beforeDestroy',
			'destroyed',
			'activated',
			'deactivated'
		],

		/**
   * Max circular updates allowed in a scheduler flush cycle.
   */
		_maxUpdateCount: 100,

		/**
   * Server rendering?
   */
		_isServer: 'client' === 'server'
	};

	/*  */

	/**
 * Check if a string starts with $ or _
 */
	function isReserved(str) {
		const c = (str + '').charCodeAt(0);
		return c === 0x24 || c === 0x5F;
	}

	/**
 * Define a property.
 */
	function def(obj, key, val, enumerable) {
		Object.defineProperty(obj, key, {
			value: val,
			enumerable: !!enumerable,
			writable: true,
			configurable: true
		});
	}

	/**
 * Parse simple path.
 */
	const bailRE = /[^\w.$]/;
	function parsePath(path) {
		if (bailRE.test(path)) {

		} else {
			const segments = path.split('.');
			return function(obj) {
				for (let i = 0; i < segments.length; i++) {
					if (!obj) { return; }
					obj = obj[segments[i]];
				}
				return obj;
			};
		}
	}

	/*  */
	/* globals MutationObserver */

	// can we use __proto__?
	const hasProto = '__proto__' in {};

	// Browser environment sniffing
	const inBrowser =
  typeof window !== 'undefined' &&
  Object.prototype.toString.call(window) !== '[object Object]';

	const UA = inBrowser && window.navigator.userAgent.toLowerCase();
	const isIE = UA && /msie|trident/.test(UA);
	const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	const isEdge = UA && UA.indexOf('edge/') > 0;
	const isAndroid = UA && UA.indexOf('android') > 0;
	const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	// detect devtools
	const devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative(Ctor) {
		return /native code/.test(Ctor.toString());
	}

	/**
 * Defer a task to execute it asynchronously.
 */
	const nextTick = (function() {
		const callbacks = [];
		let pending = false;
		let timerFunc;

		function nextTickHandler() {
			pending = false;
			const copies = callbacks.slice(0);
			callbacks.length = 0;
			for (let i = 0; i < copies.length; i++) {
				copies[i]();
			}
		}

		// the nextTick behavior leverages the microtask queue, which can be accessed
		// via either native Promise.then or MutationObserver.
		// MutationObserver has wider support, however it is seriously bugged in
		// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
		// completely stops working after triggering a few times... so, if native
		// Promise is available, we will use it:
		/* istanbul ignore if */
		if (typeof Promise !== 'undefined' && isNative(Promise)) {
			const p = Promise.resolve();
			timerFunc = function() {
				p.then(nextTickHandler);
				// in problematic UIWebViews, Promise.then doesn't completely break, but
				// it can get stuck in a weird state where callbacks are pushed into the
				// microtask queue but the queue isn't being flushed, until the browser
				// needs to do some other work, e.g. handle a timer. Therefore we can
				// "force" the microtask queue to be flushed by adding an empty timer.
				if (isIOS) { setTimeout(noop); }
			};
		} else if (typeof MutationObserver !== 'undefined' && (
			isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
		)) {
			// use MutationObserver where native Promise is not available,
			// e.g. PhantomJS IE11, iOS7, Android 4.4
			let counter = 1;
			const observer = new MutationObserver(nextTickHandler);
			const textNode = document.createTextNode(String(counter));
			observer.observe(textNode, {
				characterData: true
			});
			timerFunc = function() {
				counter = (counter + 1) % 2;
				textNode.data = String(counter);
			};
		} else {
			// fallback to setTimeout
			/* istanbul ignore next */
			timerFunc = function() {
				setTimeout(nextTickHandler, 0);
			};
		}

		return function queueNextTick(cb, ctx) {
			const func = ctx
				? function() { cb.call(ctx); }
				: cb;
			callbacks.push(func);
			if (!pending) {
				pending = true;
				timerFunc();
			}
		};
	})();

	let _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
		// use native Set when available.
		_Set = Set;
	} else {
		// a non-standard Set polyfill that only works with primitive keys.
		_Set = (function() {
			function Set() {
				this.set = Object.create(null);
			}
			Set.prototype.has = function has(key) {
				return this.set[key] !== undefined;
			};
			Set.prototype.add = function add(key) {
				this.set[key] = 1;
			};
			Set.prototype.clear = function clear() {
				this.set = Object.create(null);
			};

			return Set;
		}());
	}

	/* not type checking this file because flow doesn't play well with Proxy */

	let hasProxy;
	let proxyHandlers;
	let initProxy;

	{
		const allowedGlobals = makeMap(
			'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
		);

		hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

		proxyHandlers = {
			has: function has(target, key) {
				const has = key in target;
				const isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
				if (!has && !isAllowed) {
					warn(
						'Property or method "' + key + '" is not defined on the instance but ' +
          'referenced during render. Make sure to declare reactive data ' +
          'properties in the data option.',
						target
					);
				}
				return has || !isAllowed;
			}
		};

		initProxy = function initProxy(vm) {
			if (hasProxy) {
				vm._renderProxy = new Proxy(vm, proxyHandlers);
			} else {
				vm._renderProxy = vm;
			}
		};
	}

	/*  */

	let uid$2 = 0;

	/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
	const Dep = function Dep() {
		this.id = uid$2++;
		this.subs = [];
	};

	Dep.prototype.addSub = function addSub(sub) {
		this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub(sub) {
		remove$1(this.subs, sub);
	};

	Dep.prototype.depend = function depend() {
		if (Dep.target) {
			Dep.target.addDep(this);
		}
	};

	Dep.prototype.notify = function notify() {
		// stablize the subscriber list first
		const subs = this.subs.slice();
		for (let i = 0, l = subs.length; i < l; i++) {
			subs[i].update();
		}
	};

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	const targetStack = [];

	function pushTarget(_target) {
		if (Dep.target) { targetStack.push(Dep.target); }
		Dep.target = _target;
	}

	function popTarget() {
		Dep.target = targetStack.pop();
	}

	/*  */

	const queue = [];
	let has$1 = {};
	let circular = {};
	let waiting = false;
	let flushing = false;
	let index = 0;

	/**
 * Reset the scheduler's state.
 */
	function resetSchedulerState() {
		queue.length = 0;
		has$1 = {};
		{
			circular = {};
		}
		waiting = flushing = false;
	}

	/**
 * Flush both queues and run the watchers.
 */
	function flushSchedulerQueue() {
		flushing = true;

		// Sort queue before flush.
		// This ensures that:
		// 1. Components are updated from parent to child. (because parent is always
		//    created before the child)
		// 2. A component's user watchers are run before its render watcher (because
		//    user watchers are created before the render watcher)
		// 3. If a component is destroyed during a parent component's watcher run,
		//    its watchers can be skipped.
		queue.sort(function(a, b) { return a.id - b.id; });

		// do not cache length because more watchers might be pushed
		// as we run existing watchers
		for (index = 0; index < queue.length; index++) {
			const watcher = queue[index];
			const id = watcher.id;
			has$1[id] = null;
			watcher.run();
			// in dev build, check and stop circular updates.
			if ('development' !== 'production' && has$1[id] != null) {
				circular[id] = (circular[id] || 0) + 1;
				if (circular[id] > config._maxUpdateCount) {
					warn(
						'You may have an infinite update loop ' + (
							watcher.user
								? ('in watcher with expression "' + (watcher.expression) + '"')
								: 'in a component render function.'
						),
						watcher.vm
					);
					break;
				}
			}
		}

		// devtool hook
		/* istanbul ignore if */
		if (devtools && config.devtools) {
			devtools.emit('flush');
		}

		resetSchedulerState();
	}

	/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
	function queueWatcher(watcher) {
		const id = watcher.id;
		if (has$1[id] == null) {
			has$1[id] = true;
			if (!flushing) {
				queue.push(watcher);
			} else {
				// if already flushing, splice the watcher based on its id
				// if already past its id, it will be run next immediately.
				let i = queue.length - 1;
				while (i >= 0 && queue[i].id > watcher.id) {
					i--;
				}
				queue.splice(Math.max(i, index) + 1, 0, watcher);
			}
			// queue the flush
			if (!waiting) {
				waiting = true;
				nextTick(flushSchedulerQueue);
			}
		}
	}

	/*  */

	let uid$1 = 0;

	/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
	const Watcher = function Watcher(
		vm,
		expOrFn,
		cb,
		options
	) {
		if (options === void 0) options = {};

		this.vm = vm;
		vm._watchers.push(this);
		// options
		this.deep = !!options.deep;
		this.user = !!options.user;
		this.lazy = !!options.lazy;
		this.sync = !!options.sync;
		this.expression = expOrFn.toString();
		this.cb = cb;
		this.id = ++uid$1; // uid for batching
		this.active = true;
		this.dirty = this.lazy; // for lazy watchers
		this.deps = [];
		this.newDeps = [];
		this.depIds = new _Set();
		this.newDepIds = new _Set();
		// parse expression for getter
		if (typeof expOrFn === 'function') {
			this.getter = expOrFn;
		} else {
			this.getter = parsePath(expOrFn);
			if (!this.getter) {
				this.getter = function() {};
				'development' !== 'production' && warn(
					'Failed watching path: "' + expOrFn + '" ' +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
					vm
				);
			}
		}
		this.value = this.lazy
			? undefined
			: this.get();
	};

	/**
 * Evaluate the getter, and re-collect dependencies.
 */
	Watcher.prototype.get = function get() {
		pushTarget(this);
		const value = this.getter.call(this.vm, this.vm);
		// "touch" every property so they are all tracked as
		// dependencies for deep watching
		if (this.deep) {
			traverse(value);
		}
		popTarget();
		this.cleanupDeps();
		return value;
	};

	/**
 * Add a dependency to this directive.
 */
	Watcher.prototype.addDep = function addDep(dep) {
		const id = dep.id;
		if (!this.newDepIds.has(id)) {
			this.newDepIds.add(id);
			this.newDeps.push(dep);
			if (!this.depIds.has(id)) {
				dep.addSub(this);
			}
		}
	};

	/**
 * Clean up for dependency collection.
 */
	Watcher.prototype.cleanupDeps = function cleanupDeps() {
		const this$1 = this;

		let i = this.deps.length;
		while (i--) {
			const dep = this$1.deps[i];
			if (!this$1.newDepIds.has(dep.id)) {
				dep.removeSub(this$1);
			}
		}
		let tmp = this.depIds;
		this.depIds = this.newDepIds;
		this.newDepIds = tmp;
		this.newDepIds.clear();
		tmp = this.deps;
		this.deps = this.newDeps;
		this.newDeps = tmp;
		this.newDeps.length = 0;
	};

	/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
	Watcher.prototype.update = function update() {
		/* istanbul ignore else */
		if (this.lazy) {
			this.dirty = true;
		} else if (this.sync) {
			this.run();
		} else {
			queueWatcher(this);
		}
	};

	/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
	Watcher.prototype.run = function run() {
		if (this.active) {
			const value = this.get();
			if (
				value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
			) {
				// set new value
				const oldValue = this.value;
				this.value = value;
				if (this.user) {
					try {
						this.cb.call(this.vm, value, oldValue);
					} catch (e) {
						'development' !== 'production' && warn(
							('Error in watcher "' + (this.expression) + '"'),
							this.vm
						);
						/* istanbul ignore else */
						if (config.errorHandler) {
							config.errorHandler.call(null, e, this.vm);
						} else {
							throw e;
						}
					}
				} else {
					this.cb.call(this.vm, value, oldValue);
				}
			}
		}
	};

	/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
	Watcher.prototype.evaluate = function evaluate() {
		this.value = this.get();
		this.dirty = false;
	};

	/**
 * Depend on all deps collected by this watcher.
 */
	Watcher.prototype.depend = function depend() {
		const this$1 = this;

		let i = this.deps.length;
		while (i--) {
			this$1.deps[i].depend();
		}
	};

	/**
 * Remove self from all dependencies' subscriber list.
 */
	Watcher.prototype.teardown = function teardown() {
		const this$1 = this;

		if (this.active) {
			// remove self from vm's watcher list
			// this is a somewhat expensive operation so we skip it
			// if the vm is being destroyed or is performing a v-for
			// re-render (the watcher list is then filtered by v-for).
			if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
				remove$1(this.vm._watchers, this);
			}
			let i = this.deps.length;
			while (i--) {
				this$1.deps[i].removeSub(this$1);
			}
			this.active = false;
		}
	};

	/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
	const seenObjects = new _Set();
	function traverse(val) {
		seenObjects.clear();
		_traverse(val, seenObjects);
	}

	function _traverse(val, seen) {
		let i, keys;
		const isA = Array.isArray(val);
		if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
			return;
		}
		if (val.__ob__) {
			const depId = val.__ob__.dep.id;
			if (seen.has(depId)) {
				return;
			}
			seen.add(depId);
		}
		if (isA) {
			i = val.length;
			while (i--) { _traverse(val[i], seen); }
		} else {
			keys = Object.keys(val);
			i = keys.length;
			while (i--) { _traverse(val[keys[i]], seen); }
		}
	}

	/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

	const arrayProto = Array.prototype;
	const arrayMethods = Object.create(arrayProto); [
		'push',
		'pop',
		'shift',
		'unshift',
		'splice',
		'sort',
		'reverse'
	]
		.forEach(function(method) {
			// cache original method
			const original = arrayProto[method];
			def(arrayMethods, method, function mutator() {
				const arguments$1 = arguments;

				// avoid leaking arguments:
				// http://jsperf.com/closure-with-arguments
				let i = arguments.length;
				const args = new Array(i);
				while (i--) {
					args[i] = arguments$1[i];
				}
				const result = original.apply(this, args);
				const ob = this.__ob__;
				let inserted;
				switch (method) {
				case 'push':
					inserted = args;
					break;
				case 'unshift':
					inserted = args;
					break;
				case 'splice':
					inserted = args.slice(2);
					break;
				}
				if (inserted) { ob.observeArray(inserted); }
				// notify change
				ob.dep.notify();
				return result;
			});
		});

	/*  */

	const arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
	const observerState = {
		shouldConvert: true,
		isSettingProps: false
	};

	/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
	const Observer = function Observer(value) {
		this.value = value;
		this.dep = new Dep();
		this.vmCount = 0;
		def(value, '__ob__', this);
		if (Array.isArray(value)) {
			const augment = hasProto
				? protoAugment
				: copyAugment;
			augment(value, arrayMethods, arrayKeys);
			this.observeArray(value);
		} else {
			this.walk(value);
		}
	};

	/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
	Observer.prototype.walk = function walk(obj) {
		const keys = Object.keys(obj);
		for (let i = 0; i < keys.length; i++) {
			defineReactive$$1(obj, keys[i], obj[keys[i]]);
		}
	};

	/**
 * Observe a list of Array items.
 */
	Observer.prototype.observeArray = function observeArray(items) {
		for (let i = 0, l = items.length; i < l; i++) {
			observe(items[i]);
		}
	};

	// helpers

	/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
	function protoAugment(target, src) {
		/* eslint-disable no-proto */
		target.__proto__ = src;
		/* eslint-enable no-proto */
	}

	/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * istanbul ignore next
 */
	function copyAugment(target, src, keys) {
		for (let i = 0, l = keys.length; i < l; i++) {
			const key = keys[i];
			def(target, key, src[key]);
		}
	}

	/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
	function observe(value) {
		if (!isObject(value)) {
			return;
		}
		let ob;
		if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
			ob = value.__ob__;
		} else if (
			observerState.shouldConvert &&
    !config._isServer &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
		) {
			ob = new Observer(value);
		}
		return ob;
	}

	/**
 * Define a reactive property on an Object.
 */
	function defineReactive$$1(
		obj,
		key,
		val,
		customSetter
	) {
		const dep = new Dep();

		const property = Object.getOwnPropertyDescriptor(obj, key);
		if (property && property.configurable === false) {
			return;
		}

		// cater for pre-defined getter/setters
		const getter = property && property.get;
		const setter = property && property.set;

		let childOb = observe(val);
		Object.defineProperty(obj, key, {
			enumerable: true,
			configurable: true,
			get: function reactiveGetter() {
				const value = getter ? getter.call(obj) : val;
				if (Dep.target) {
					dep.depend();
					if (childOb) {
						childOb.dep.depend();
					}
					if (Array.isArray(value)) {
						dependArray(value);
					}
				}
				return value;
			},
			set: function reactiveSetter(newVal) {
				const value = getter ? getter.call(obj) : val;
				if (newVal === value) {
					return;
				}
				if ('development' !== 'production' && customSetter) {
					customSetter();
				}
				if (setter) {
					setter.call(obj, newVal);
				} else {
					val = newVal;
				}
				childOb = observe(newVal);
				dep.notify();
			}
		});
	}

	/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
	function set(obj, key, val) {
		if (Array.isArray(obj)) {
			obj.length = Math.max(obj.length, key);
			obj.splice(key, 1, val);
			return val;
		}
		if (hasOwn(obj, key)) {
			obj[key] = val;
			return;
		}
		const ob = obj.__ob__;
		if (obj._isVue || (ob && ob.vmCount)) {
			'development' !== 'production' && warn(
				'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
			);
			return;
		}
		if (!ob) {
			obj[key] = val;
			return;
		}
		defineReactive$$1(ob.value, key, val);
		ob.dep.notify();
		return val;
	}

	/**
 * Delete a property and trigger change if necessary.
 */
	function del(obj, key) {
		const ob = obj.__ob__;
		if (obj._isVue || (ob && ob.vmCount)) {
			'development' !== 'production' && warn(
				'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
			);
			return;
		}
		if (!hasOwn(obj, key)) {
			return;
		}
		delete obj[key];
		if (!ob) {
			return;
		}
		ob.dep.notify();
	}

	/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
	function dependArray(value) {
		for (let e = void 0, i = 0, l = value.length; i < l; i++) {
			e = value[i];
			e && e.__ob__ && e.__ob__.dep.depend();
			if (Array.isArray(e)) {
				dependArray(e);
			}
		}
	}

	/*  */

	function initState(vm) {
		vm._watchers = [];
		initProps(vm);
		initData(vm);
		initComputed(vm);
		initMethods(vm);
		initWatch(vm);
	}

	function initProps(vm) {
		const props = vm.$options.props;
		if (props) {
			const propsData = vm.$options.propsData || {};
			const keys = vm.$options._propKeys = Object.keys(props);
			const isRoot = !vm.$parent;
			// root instance props should be converted
			observerState.shouldConvert = isRoot;
			const loop = function(i) {
				const key = keys[i];
				/* istanbul ignore else */
				{
					defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function() {
						if (vm.$parent && !observerState.isSettingProps) {
							warn(
								'Avoid mutating a prop directly since the value will be ' +
              'overwritten whenever the parent component re-renders. ' +
              'Instead, use a data or computed property based on the prop\'s ' +
              'value. Prop being mutated: "' + key + '"',
								vm
							);
						}
					});
				}
			};

			for (let i = 0; i < keys.length; i++) loop(i);
			observerState.shouldConvert = true;
		}
	}

	function initData(vm) {
		let data = vm.$options.data;
		data = vm._data = typeof data === 'function'
			? data.call(vm)
			: data || {};
		if (!isPlainObject(data)) {
			data = {};
			'development' !== 'production' && warn(
				'data functions should return an object.',
				vm
			);
		}
		// proxy data on instance
		const keys = Object.keys(data);
		const props = vm.$options.props;
		let i = keys.length;
		while (i--) {
			if (props && hasOwn(props, keys[i])) {
				'development' !== 'production' && warn(
					'The data property "' + (keys[i]) + '" is already declared as a prop. ' +
        'Use prop default value instead.',
					vm
				);
			} else {
				proxy(vm, keys[i]);
			}
		}
		// observe data
		observe(data);
		data.__ob__ && data.__ob__.vmCount++;
	}

	const computedSharedDefinition = {
		enumerable: true,
		configurable: true,
		get: noop,
		set: noop
	};

	function initComputed(vm) {
		const computed = vm.$options.computed;
		if (computed) {
			for (const key in computed) {
				const userDef = computed[key];
				if (typeof userDef === 'function') {
					computedSharedDefinition.get = makeComputedGetter(userDef, vm);
					computedSharedDefinition.set = noop;
				} else {
					computedSharedDefinition.get = userDef.get
						? userDef.cache !== false
							? makeComputedGetter(userDef.get, vm)
							: bind$1(userDef.get, vm)
						: noop;
					computedSharedDefinition.set = userDef.set
						? bind$1(userDef.set, vm)
						: noop;
				}
				Object.defineProperty(vm, key, computedSharedDefinition);
			}
		}
	}

	function makeComputedGetter(getter, owner) {
		const watcher = new Watcher(owner, getter, noop, {
			lazy: true
		});
		return function computedGetter() {
			if (watcher.dirty) {
				watcher.evaluate();
			}
			if (Dep.target) {
				watcher.depend();
			}
			return watcher.value;
		};
	}

	function initMethods(vm) {
		const methods = vm.$options.methods;
		if (methods) {
			for (const key in methods) {
				vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
				{
					methods[key] == null && warn(
						'method "' + key + '" has an undefined value in the component definition. ' +
          'Did you reference the function correctly?',
						vm
					);
					hasOwn(Vue$2.prototype, key) && warn(
						('Avoid overriding Vue\'s internal method "' + key + '".'),
						vm
					);
				}
			}
		}
	}

	function initWatch(vm) {
		const watch = vm.$options.watch;
		if (watch) {
			for (const key in watch) {
				const handler = watch[key];
				if (Array.isArray(handler)) {
					for (let i = 0; i < handler.length; i++) {
						createWatcher(vm, key, handler[i]);
					}
				} else {
					createWatcher(vm, key, handler);
				}
			}
		}
	}

	function createWatcher(vm, key, handler) {
		let options;
		if (isPlainObject(handler)) {
			options = handler;
			handler = handler.handler;
		}
		if (typeof handler === 'string') {
			handler = vm[handler];
		}
		vm.$watch(key, handler, options);
	}

	function stateMixin(Vue) {
		// flow somehow has problems with directly declared definition object
		// when using Object.defineProperty, so we have to procedurally build up
		// the object here.
		const dataDef = {};
		dataDef.get = function() {
			return this._data;
		};
		{
			dataDef.set = function(newData) {
				warn(
					'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
					this
				);
			};
		}
		Object.defineProperty(Vue.prototype, '$data', dataDef);

		Vue.prototype.$set = set;
		Vue.prototype.$delete = del;

		Vue.prototype.$watch = function(
			expOrFn,
			cb,
			options
		) {
			const vm = this;
			options = options || {};
			options.user = true;
			const watcher = new Watcher(vm, expOrFn, cb, options);
			if (options.immediate) {
				cb.call(vm, watcher.value);
			}
			return function unwatchFn() {
				watcher.teardown();
			};
		};
	}

	function proxy(vm, key) {
		if (!isReserved(key)) {
			Object.defineProperty(vm, key, {
				configurable: true,
				enumerable: true,
				get: function proxyGetter() {
					return vm._data[key];
				},
				set: function proxySetter(val) {
					vm._data[key] = val;
				}
			});
		}
	}

	/*  */

	const VNode = function VNode(
		tag,
		data,
		children,
		text,
		elm,
		ns,
		context,
		componentOptions
	) {
		this.tag = tag;
		this.data = data;
		this.children = children;
		this.text = text;
		this.elm = elm;
		this.ns = ns;
		this.context = context;
		this.functionalContext = undefined;
		this.key = data && data.key;
		this.componentOptions = componentOptions;
		this.child = undefined;
		this.parent = undefined;
		this.raw = false;
		this.isStatic = false;
		this.isRootInsert = true;
		this.isComment = false;
		this.isCloned = false;
		this.isOnce = false;
	};

	const emptyVNode = function() {
		const node = new VNode();
		node.text = '';
		node.isComment = true;
		return node;
	};

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode(vnode) {
		const cloned = new VNode(
			vnode.tag,
			vnode.data,
			vnode.children,
			vnode.text,
			vnode.elm,
			vnode.ns,
			vnode.context,
			vnode.componentOptions
		);
		cloned.isStatic = vnode.isStatic;
		cloned.key = vnode.key;
		cloned.isCloned = true;
		return cloned;
	}

	function cloneVNodes(vnodes) {
		const res = new Array(vnodes.length);
		for (let i = 0; i < vnodes.length; i++) {
			res[i] = cloneVNode(vnodes[i]);
		}
		return res;
	}

	/*  */

	function mergeVNodeHook(def, hookKey, hook, key) {
		key = key + hookKey;
		const injectedHash = def.__injected || (def.__injected = {});
		if (!injectedHash[key]) {
			injectedHash[key] = true;
			const oldHook = def[hookKey];
			if (oldHook) {
				def[hookKey] = function() {
					oldHook.apply(this, arguments);
					hook.apply(this, arguments);
				};
			} else {
				def[hookKey] = hook;
			}
		}
	}

	/*  */

	function updateListeners(
		on,
		oldOn,
		add,
		remove$$1,
		vm
	) {
		let name, cur, old, fn, event, capture;
		for (name in on) {
			cur = on[name];
			old = oldOn[name];
			if (!cur) {
				'development' !== 'production' && warn(
					'Invalid handler for event "' + name + '": got ' + String(cur),
					vm
				);
			} else if (!old) {
				capture = name.charAt(0) === '!';
				event = capture ? name.slice(1) : name;
				if (Array.isArray(cur)) {
					add(event, (cur.invoker = arrInvoker(cur)), capture);
				} else {
					if (!cur.invoker) {
						fn = cur;
						cur = on[name] = {};
						cur.fn = fn;
						cur.invoker = fnInvoker(cur);
					}
					add(event, cur.invoker, capture);
				}
			} else if (cur !== old) {
				if (Array.isArray(old)) {
					old.length = cur.length;
					for (let i = 0; i < old.length; i++) { old[i] = cur[i]; }
					on[name] = old;
				} else {
					old.fn = cur;
					on[name] = old;
				}
			}
		}
		for (name in oldOn) {
			if (!on[name]) {
				event = name.charAt(0) === '!' ? name.slice(1) : name;
				remove$$1(event, oldOn[name].invoker);
			}
		}
	}

	function arrInvoker(arr) {
		return function(ev) {
			const arguments$1 = arguments;

			const single = arguments.length === 1;
			for (let i = 0; i < arr.length; i++) {
				single ? arr[i](ev) : arr[i].apply(null, arguments$1);
			}
		};
	}

	function fnInvoker(o) {
		return function(ev) {
			const single = arguments.length === 1;
			single ? o.fn(ev) : o.fn.apply(null, arguments);
		};
	}

	/*  */

	function normalizeChildren(
		children,
		ns,
		nestedIndex
	) {
		if (isPrimitive(children)) {
			return [createTextVNode(children)];
		}
		if (Array.isArray(children)) {
			const res = [];
			for (let i = 0, l = children.length; i < l; i++) {
				const c = children[i];
				const last = res[res.length - 1];
				//  nested
				if (Array.isArray(c)) {
					res.push.apply(res, normalizeChildren(c, ns, ((nestedIndex || '') + '_' + i)));
				} else if (isPrimitive(c)) {
					if (last && last.text) {
						last.text += String(c);
					} else if (c !== '') {
						// convert primitive to vnode
						res.push(createTextVNode(c));
					}
				} else if (c instanceof VNode) {
					if (c.text && last && last.text) {
						last.text += c.text;
					} else {
						// inherit parent namespace
						if (ns) {
							applyNS(c, ns);
						}
						// default key for nested array children (likely generated by v-for)
						if (c.tag && c.key == null && nestedIndex != null) {
							c.key = '__vlist' + nestedIndex + '_' + i + '__';
						}
						res.push(c);
					}
				}
			}
			return res;
		}
	}

	function createTextVNode(val) {
		return new VNode(undefined, undefined, undefined, String(val));
	}

	function applyNS(vnode, ns) {
		if (vnode.tag && !vnode.ns) {
			vnode.ns = ns;
			if (vnode.children) {
				for (let i = 0, l = vnode.children.length; i < l; i++) {
					applyNS(vnode.children[i], ns);
				}
			}
		}
	}

	/*  */

	function getFirstComponentChild(children) {
		return children && children.filter(function(c) { return c && c.componentOptions; })[0];
	}

	/*  */

	let activeInstance = null;

	function initLifecycle(vm) {
		const options = vm.$options;

		// locate first non-abstract parent
		let parent = options.parent;
		if (parent && !options.abstract) {
			while (parent.$options.abstract && parent.$parent) {
				parent = parent.$parent;
			}
			parent.$children.push(vm);
		}

		vm.$parent = parent;
		vm.$root = parent ? parent.$root : vm;

		vm.$children = [];
		vm.$refs = {};

		vm._watcher = null;
		vm._inactive = false;
		vm._isMounted = false;
		vm._isDestroyed = false;
		vm._isBeingDestroyed = false;
	}

	function lifecycleMixin(Vue) {
		Vue.prototype._mount = function(
			el,
			hydrating
		) {
			const vm = this;
			vm.$el = el;
			if (!vm.$options.render) {
				vm.$options.render = emptyVNode;
				{
					/* istanbul ignore if */
					if (vm.$options.template) {
						warn(
							'You are using the runtime-only build of Vue where the template ' +
            'option is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
							vm
						);
					} else {
						warn(
							'Failed to mount component: template or render function not defined.',
							vm
						);
					}
				}
			}
			callHook(vm, 'beforeMount');
			vm._watcher = new Watcher(vm, function() {
				vm._update(vm._render(), hydrating);
			}, noop);
			hydrating = false;
			// manually mounted instance, call mounted on self
			// mounted is called for render-created child components in its inserted hook
			if (vm.$vnode == null) {
				vm._isMounted = true;
				callHook(vm, 'mounted');
			}
			return vm;
		};

		Vue.prototype._update = function(vnode, hydrating) {
			const vm = this;
			if (vm._isMounted) {
				callHook(vm, 'beforeUpdate');
			}
			const prevEl = vm.$el;
			const prevActiveInstance = activeInstance;
			activeInstance = vm;
			const prevVnode = vm._vnode;
			vm._vnode = vnode;
			if (!prevVnode) {
				// Vue.prototype.__patch__ is injected in entry points
				// based on the rendering backend used.
				vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
			} else {
				vm.$el = vm.__patch__(prevVnode, vnode);
			}
			activeInstance = prevActiveInstance;
			// update __vue__ reference
			if (prevEl) {
				prevEl.__vue__ = null;
			}
			if (vm.$el) {
				vm.$el.__vue__ = vm;
			}
			// if parent is an HOC, update its $el as well
			if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
				vm.$parent.$el = vm.$el;
			}
			if (vm._isMounted) {
				callHook(vm, 'updated');
			}
		};

		Vue.prototype._updateFromParent = function(
			propsData,
			listeners,
			parentVnode,
			renderChildren
		) {
			const vm = this;
			const hasChildren = !!(vm.$options._renderChildren || renderChildren);
			vm.$options._parentVnode = parentVnode;
			vm.$options._renderChildren = renderChildren;
			// update props
			if (propsData && vm.$options.props) {
				observerState.shouldConvert = false;
				{
					observerState.isSettingProps = true;
				}
				const propKeys = vm.$options._propKeys || [];
				for (let i = 0; i < propKeys.length; i++) {
					const key = propKeys[i];
					vm[key] = validateProp(key, vm.$options.props, propsData, vm);
				}
				observerState.shouldConvert = true;
				{
					observerState.isSettingProps = false;
				}
				vm.$options.propsData = propsData;
			}
			// update listeners
			if (listeners) {
				const oldListeners = vm.$options._parentListeners;
				vm.$options._parentListeners = listeners;
				vm._updateListeners(listeners, oldListeners);
			}
			// resolve slots + force update if has children
			if (hasChildren) {
				vm.$slots = resolveSlots(renderChildren, vm._renderContext);
				vm.$forceUpdate();
			}
		};

		Vue.prototype.$forceUpdate = function() {
			const vm = this;
			if (vm._watcher) {
				vm._watcher.update();
			}
		};

		Vue.prototype.$destroy = function() {
			const vm = this;
			if (vm._isBeingDestroyed) {
				return;
			}
			callHook(vm, 'beforeDestroy');
			vm._isBeingDestroyed = true;
			// remove self from parent
			const parent = vm.$parent;
			if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
				remove$1(parent.$children, vm);
			}
			// teardown watchers
			if (vm._watcher) {
				vm._watcher.teardown();
			}
			let i = vm._watchers.length;
			while (i--) {
				vm._watchers[i].teardown();
			}
			// remove reference from data ob
			// frozen object may not have observer.
			if (vm._data.__ob__) {
				vm._data.__ob__.vmCount--;
			}
			// call the last hook...
			vm._isDestroyed = true;
			callHook(vm, 'destroyed');
			// turn off all instance listeners.
			vm.$off();
			// remove __vue__ reference
			if (vm.$el) {
				vm.$el.__vue__ = null;
			}
			// invoke destroy hooks on current rendered tree
			vm.__patch__(vm._vnode, null);
		};
	}

	function callHook(vm, hook) {
		const handlers = vm.$options[hook];
		if (handlers) {
			for (let i = 0, j = handlers.length; i < j; i++) {
				handlers[i].call(vm);
			}
		}
		vm.$emit('hook:' + hook);
	}

	/*  */

	const hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	const hooksToMerge = Object.keys(hooks);

	function createComponent(
		Ctor,
		data,
		context,
		children,
		tag
	) {
		if (!Ctor) {
			return;
		}

		if (isObject(Ctor)) {
			Ctor = Vue$2.extend(Ctor);
		}

		if (typeof Ctor !== 'function') {
			{
				warn(('Invalid Component definition: ' + (String(Ctor))), context);
			}
			return;
		}

		// resolve constructor options in case global mixins are applied after
		// component constructor creation
		resolveConstructorOptions(Ctor);

		// async component
		if (!Ctor.cid) {
			if (Ctor.resolved) {
				Ctor = Ctor.resolved;
			} else {
				Ctor = resolveAsyncComponent(Ctor, function() {
					// it's ok to queue this on every render because
					// $forceUpdate is buffered by the scheduler.
					context.$forceUpdate();
				});
				if (!Ctor) {
					// return nothing if this is indeed an async component
					// wait for the callback to trigger parent update.
					return;
				}
			}
		}

		data = data || {};

		// extract props
		const propsData = extractProps(data, Ctor);

		// functional component
		if (Ctor.options.functional) {
			return createFunctionalComponent(Ctor, propsData, data, context, children);
		}

		// extract listeners, since these needs to be treated as
		// child component listeners instead of DOM listeners
		const listeners = data.on;
		// replace with listeners with .native modifier
		data.on = data.nativeOn;

		if (Ctor.options.abstract) {
			// abstract components do not keep anything
			// other than props & listeners
			data = {};
		}

		// merge component management hooks onto the placeholder node
		mergeHooks(data);

		// return a placeholder vnode
		const name = Ctor.options.name || tag;
		const vnode = new VNode(
			('vue-component-' + (Ctor.cid) + (name ? ('-' + name) : '')),
			data, undefined, undefined, undefined, undefined, context,
			{ Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
		);
		return vnode;
	}

	function createFunctionalComponent(
		Ctor,
		propsData,
		data,
		context,
		children
	) {
		const props = {};
		const propOptions = Ctor.options.props;
		if (propOptions) {
			for (const key in propOptions) {
				props[key] = validateProp(key, propOptions, propsData);
			}
		}
		const vnode = Ctor.options.render.call(
			null,
			// ensure the createElement function in functional components
			// gets a unique context - this is necessary for correct named slot check
			bind$1(createElement, { _self: Object.create(context) }),
			{
				props: props,
				data: data,
				parent: context,
				children: normalizeChildren(children),
				slots: function() { return resolveSlots(children, context); }
			}
		);
		if (vnode instanceof VNode) {
			vnode.functionalContext = context;
			if (data.slot) {
				(vnode.data || (vnode.data = {})).slot = data.slot;
			}
		}
		return vnode;
	}

	function createComponentInstanceForVnode(
		vnode, // we know it's MountedComponentVNode but flow doesn't
		parent // activeInstance in lifecycle state
	) {
		const vnodeComponentOptions = vnode.componentOptions;
		const options = {
			_isComponent: true,
			parent: parent,
			propsData: vnodeComponentOptions.propsData,
			_componentTag: vnodeComponentOptions.tag,
			_parentVnode: vnode,
			_parentListeners: vnodeComponentOptions.listeners,
			_renderChildren: vnodeComponentOptions.children
		};
		// check inline-template render functions
		const inlineTemplate = vnode.data.inlineTemplate;
		if (inlineTemplate) {
			options.render = inlineTemplate.render;
			options.staticRenderFns = inlineTemplate.staticRenderFns;
		}
		return new vnodeComponentOptions.Ctor(options);
	}

	function init(vnode, hydrating) {
		if (!vnode.child || vnode.child._isDestroyed) {
			const child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance);
			child.$mount(hydrating ? vnode.elm : undefined, hydrating);
		}
	}

	function prepatch(
		oldVnode,
		vnode
	) {
		const options = vnode.componentOptions;
		const child = vnode.child = oldVnode.child;
		child._updateFromParent(
			options.propsData, // updated props
			options.listeners, // updated listeners
			vnode, // new parent vnode
			options.children // new children
		);
	}

	function insert(vnode) {
		if (!vnode.child._isMounted) {
			vnode.child._isMounted = true;
			callHook(vnode.child, 'mounted');
		}
		if (vnode.data.keepAlive) {
			vnode.child._inactive = false;
			callHook(vnode.child, 'activated');
		}
	}

	function destroy$1(vnode) {
		if (!vnode.child._isDestroyed) {
			if (!vnode.data.keepAlive) {
				vnode.child.$destroy();
			} else {
				vnode.child._inactive = true;
				callHook(vnode.child, 'deactivated');
			}
		}
	}

	function resolveAsyncComponent(
		factory,
		cb
	) {
		if (factory.requested) {
			// pool callbacks
			factory.pendingCallbacks.push(cb);
		} else {
			factory.requested = true;
			const cbs = factory.pendingCallbacks = [cb];
			let sync = true;

			const resolve = function(res) {
				if (isObject(res)) {
					res = Vue$2.extend(res);
				}
				// cache resolved
				factory.resolved = res;
				// invoke callbacks only if this is not a synchronous resolve
				// (async resolves are shimmed as synchronous during SSR)
				if (!sync) {
					for (let i = 0, l = cbs.length; i < l; i++) {
						cbs[i](res);
					}
				}
			};

			const reject = function(reason) {
				'development' !== 'production' && warn(
					'Failed to resolve async component: ' + (String(factory)) +
        (reason ? ('\nReason: ' + reason) : '')
				);
			};

			const res = factory(resolve, reject);

			// handle promise
			if (res && typeof res.then === 'function' && !factory.resolved) {
				res.then(resolve, reject);
			}

			sync = false;
			// return in case resolved synchronously
			return factory.resolved;
		}
	}

	function extractProps(data, Ctor) {
		// we are only extracting raw values here.
		// validation and default values are handled in the child
		// component itself.
		const propOptions = Ctor.options.props;
		if (!propOptions) {
			return;
		}
		const res = {};
		const attrs = data.attrs;
		const props = data.props;
		const domProps = data.domProps;
		if (attrs || props || domProps) {
			for (const key in propOptions) {
				const altKey = hyphenate(key);
				checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey) ||
      checkProp(res, domProps, key, altKey);
			}
		}
		return res;
	}

	function checkProp(
		res,
		hash,
		key,
		altKey,
		preserve
	) {
		if (hash) {
			if (hasOwn(hash, key)) {
				res[key] = hash[key];
				if (!preserve) {
					delete hash[key];
				}
				return true;
			} else if (hasOwn(hash, altKey)) {
				res[key] = hash[altKey];
				if (!preserve) {
					delete hash[altKey];
				}
				return true;
			}
		}
		return false;
	}

	function mergeHooks(data) {
		if (!data.hook) {
			data.hook = {};
		}
		for (let i = 0; i < hooksToMerge.length; i++) {
			const key = hooksToMerge[i];
			const fromParent = data.hook[key];
			const ours = hooks[key];
			data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
		}
	}

	function mergeHook$1(a, b) {
		// since all hooks have at most two args, use fixed args
		// to avoid having to use fn.apply().
		return function(_, __) {
			a(_, __);
			b(_, __);
		};
	}

	/*  */

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement(
		tag,
		data,
		children
	) {
		if (data && (Array.isArray(data) || typeof data !== 'object')) {
			children = data;
			data = undefined;
		}
		// make sure to use real instance instead of proxy as context
		return _createElement(this._self, tag, data, children);
	}

	function _createElement(
		context,
		tag,
		data,
		children
	) {
		if (data && data.__ob__) {
			'development' !== 'production' && warn(
				'Avoid using observed data object as vnode data: ' + (JSON.stringify(data)) + '\n' +
      'Always create fresh vnode data objects in each render!',
				context
			);
			return;
		}
		if (!tag) {
			// in case of component :is set to falsy value
			return emptyVNode();
		}
		if (typeof tag === 'string') {
			let Ctor;
			const ns = config.getTagNamespace(tag);
			if (config.isReservedTag(tag)) {
				// platform built-in elements
				return new VNode(
					tag, data, normalizeChildren(children, ns),
					undefined, undefined, ns, context
				);
			} else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
				// component
				return createComponent(Ctor, data, context, children, tag);
			} else {
				// unknown or unlisted namespaced elements
				// check at runtime because it may get assigned a namespace when its
				// parent normalizes children
				const childNs = tag === 'foreignObject' ? 'xhtml' : ns;
				return new VNode(
					tag, data, normalizeChildren(children, childNs),
					undefined, undefined, ns, context
				);
			}
		} else {
			// direct component options / constructor
			return createComponent(tag, data, context, children);
		}
	}

	/*  */

	function initRender(vm) {
		vm.$vnode = null; // the placeholder node in parent tree
		vm._vnode = null; // the root of the child tree
		vm._staticTrees = null;
		vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context;
		vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext);
		// bind the public createElement fn to this instance
		// so that we get proper render context inside it.
		vm.$createElement = bind$1(createElement, vm);
		if (vm.$options.el) {
			vm.$mount(vm.$options.el);
		}
	}

	function renderMixin(Vue) {
		Vue.prototype.$nextTick = function(fn) {
			nextTick(fn, this);
		};

		Vue.prototype._render = function() {
			const vm = this;
			const ref = vm.$options;
			const render = ref.render;
			const staticRenderFns = ref.staticRenderFns;
			const _parentVnode = ref._parentVnode;

			if (vm._isMounted) {
				// clone slot nodes on re-renders
				for (const key in vm.$slots) {
					vm.$slots[key] = cloneVNodes(vm.$slots[key]);
				}
			}

			if (staticRenderFns && !vm._staticTrees) {
				vm._staticTrees = [];
			}
			// set parent vnode. this allows render functions to have access
			// to the data on the placeholder node.
			vm.$vnode = _parentVnode;
			// render self
			let vnode;
			try {
				vnode = render.call(vm._renderProxy, vm.$createElement);
			} catch (e) {
				{
					warn(('Error when rendering ' + (formatComponentName(vm)) + ':'));
				}
				/* istanbul ignore else */
				if (config.errorHandler) {
					config.errorHandler.call(null, e, vm);
				} else {
					if (config._isServer) {
						throw e;
					} else {
						console.error(e);
					}
				}
				// return previous vnode to prevent render error causing blank component
				vnode = vm._vnode;
			}
			// return empty vnode in case the render function errored out
			if (!(vnode instanceof VNode)) {
				if ('development' !== 'production' && Array.isArray(vnode)) {
					warn(
						'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
						vm
					);
				}
				vnode = emptyVNode();
			}
			// set parent
			vnode.parent = _parentVnode;
			return vnode;
		};

		// shorthands used in render functions
		Vue.prototype._h = createElement;
		// toString for mustaches
		Vue.prototype._s = _toString;
		// number conversion
		Vue.prototype._n = toNumber;
		// empty vnode
		Vue.prototype._e = emptyVNode;
		// loose equal
		Vue.prototype._q = looseEqual;
		// loose indexOf
		Vue.prototype._i = looseIndexOf;

		// render static tree by index
		Vue.prototype._m = function renderStatic(
			index,
			isInFor
		) {
			let tree = this._staticTrees[index];
			// if has already-rendered static tree and not inside v-for,
			// we can reuse the same tree by doing a shallow clone.
			if (tree && !isInFor) {
				return Array.isArray(tree)
					? cloneVNodes(tree)
					: cloneVNode(tree);
			}
			// otherwise, render a fresh tree.
			tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
			markStatic(tree, ('__static__' + index), false);
			return tree;
		};

		// mark node as static (v-once)
		Vue.prototype._o = function markOnce(
			tree,
			index,
			key
		) {
			markStatic(tree, ('__once__' + index + (key ? ('_' + key) : '')), true);
			return tree;
		};

		function markStatic(tree, key, isOnce) {
			if (Array.isArray(tree)) {
				for (let i = 0; i < tree.length; i++) {
					if (tree[i] && typeof tree[i] !== 'string') {
						markStaticNode(tree[i], (key + '_' + i), isOnce);
					}
				}
			} else {
				markStaticNode(tree, key, isOnce);
			}
		}

		function markStaticNode(node, key, isOnce) {
			node.isStatic = true;
			node.key = key;
			node.isOnce = isOnce;
		}

		// filter resolution helper
		const identity = function(_) { return _; };
		Vue.prototype._f = function resolveFilter(id) {
			return resolveAsset(this.$options, 'filters', id, true) || identity;
		};

		// render v-for
		Vue.prototype._l = function renderList(
			val,
			render
		) {
			let ret, i, l, keys, key;
			if (Array.isArray(val)) {
				ret = new Array(val.length);
				for (i = 0, l = val.length; i < l; i++) {
					ret[i] = render(val[i], i);
				}
			} else if (typeof val === 'number') {
				ret = new Array(val);
				for (i = 0; i < val; i++) {
					ret[i] = render(i + 1, i);
				}
			} else if (isObject(val)) {
				keys = Object.keys(val);
				ret = new Array(keys.length);
				for (i = 0, l = keys.length; i < l; i++) {
					key = keys[i];
					ret[i] = render(val[key], key, i);
				}
			}
			return ret;
		};

		// renderSlot
		Vue.prototype._t = function(
			name,
			fallback
		) {
			const slotNodes = this.$slots[name];
			// warn duplicate slot usage
			if (slotNodes && 'development' !== 'production') {
				slotNodes._rendered && warn(
					'Duplicate presence of slot "' + name + '" found in the same render tree ' +
        '- this will likely cause render errors.',
					this
				);
				slotNodes._rendered = true;
			}
			return slotNodes || fallback;
		};

		// apply v-bind object
		Vue.prototype._b = function bindProps(
			data,
			value,
			asProp
		) {
			if (value) {
				if (!isObject(value)) {
					'development' !== 'production' && warn(
						'v-bind without argument expects an Object or Array value',
						this
					);
				} else {
					if (Array.isArray(value)) {
						value = toObject(value);
					}
					for (const key in value) {
						if (key === 'class' || key === 'style') {
							data[key] = value[key];
						} else {
							const hash = asProp || config.mustUseProp(key)
								? data.domProps || (data.domProps = {})
								: data.attrs || (data.attrs = {});
							hash[key] = value[key];
						}
					}
				}
			}
			return data;
		};

		// expose v-on keyCodes
		Vue.prototype._k = function getKeyCodes(key) {
			return config.keyCodes[key];
		};
	}

	function resolveSlots(
		renderChildren,
		context
	) {
		const slots = {};
		if (!renderChildren) {
			return slots;
		}
		const children = normalizeChildren(renderChildren) || [];
		const defaultSlot = [];
		let name, child;
		for (let i = 0, l = children.length; i < l; i++) {
			child = children[i];
			// named slots should only be respected if the vnode was rendered in the
			// same context.
			if ((child.context === context || child.functionalContext === context) &&
        child.data && (name = child.data.slot)) {
				const slot = (slots[name] || (slots[name] = []));
				if (child.tag === 'template') {
					slot.push.apply(slot, child.children);
				} else {
					slot.push(child);
				}
			} else {
				defaultSlot.push(child);
			}
		}
		// ignore single whitespace
		if (defaultSlot.length && !(
			defaultSlot.length === 1 &&
    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
		)) {
			slots.default = defaultSlot;
		}
		return slots;
	}

	/*  */

	function initEvents(vm) {
		vm._events = Object.create(null);
		// init parent attached events
		const listeners = vm.$options._parentListeners;
		const on = bind$1(vm.$on, vm);
		const off = bind$1(vm.$off, vm);
		vm._updateListeners = function(listeners, oldListeners) {
			updateListeners(listeners, oldListeners || {}, on, off, vm);
		};
		if (listeners) {
			vm._updateListeners(listeners);
		}
	}

	function eventsMixin(Vue) {
		Vue.prototype.$on = function(event, fn) {
			const vm = this; (vm._events[event] || (vm._events[event] = [])).push(fn);
			return vm;
		};

		Vue.prototype.$once = function(event, fn) {
			const vm = this;
			function on() {
				vm.$off(event, on);
				fn.apply(vm, arguments);
			}
			on.fn = fn;
			vm.$on(event, on);
			return vm;
		};

		Vue.prototype.$off = function(event, fn) {
			const vm = this;
			// all
			if (!arguments.length) {
				vm._events = Object.create(null);
				return vm;
			}
			// specific event
			const cbs = vm._events[event];
			if (!cbs) {
				return vm;
			}
			if (arguments.length === 1) {
				vm._events[event] = null;
				return vm;
			}
			// specific handler
			let cb;
			let i = cbs.length;
			while (i--) {
				cb = cbs[i];
				if (cb === fn || cb.fn === fn) {
					cbs.splice(i, 1);
					break;
				}
			}
			return vm;
		};

		Vue.prototype.$emit = function(event) {
			const vm = this;
			let cbs = vm._events[event];
			if (cbs) {
				cbs = cbs.length > 1 ? toArray(cbs) : cbs;
				const args = toArray(arguments, 1);
				for (let i = 0, l = cbs.length; i < l; i++) {
					cbs[i].apply(vm, args);
				}
			}
			return vm;
		};
	}

	/*  */

	let uid = 0;

	function initMixin(Vue) {
		Vue.prototype._init = function(options) {
			const vm = this;
			// a uid
			vm._uid = uid++;
			// a flag to avoid this being observed
			vm._isVue = true;
			// merge options
			if (options && options._isComponent) {
				// optimize internal component instantiation
				// since dynamic options merging is pretty slow, and none of the
				// internal component options needs special treatment.
				initInternalComponent(vm, options);
			} else {
				vm.$options = mergeOptions(
					resolveConstructorOptions(vm.constructor),
					options || {},
					vm
				);
			}
			/* istanbul ignore else */
			{
				initProxy(vm);
			}
			// expose real self
			vm._self = vm;
			initLifecycle(vm);
			initEvents(vm);
			callHook(vm, 'beforeCreate');
			initState(vm);
			callHook(vm, 'created');
			initRender(vm);
		};
	}

	function initInternalComponent(vm, options) {
		const opts = vm.$options = Object.create(vm.constructor.options);
		// doing this because it's faster than dynamic enumeration.
		opts.parent = options.parent;
		opts.propsData = options.propsData;
		opts._parentVnode = options._parentVnode;
		opts._parentListeners = options._parentListeners;
		opts._renderChildren = options._renderChildren;
		opts._componentTag = options._componentTag;
		if (options.render) {
			opts.render = options.render;
			opts.staticRenderFns = options.staticRenderFns;
		}
	}

	function resolveConstructorOptions(Ctor) {
		let options = Ctor.options;
		if (Ctor.super) {
			const superOptions = Ctor.super.options;
			const cachedSuperOptions = Ctor.superOptions;
			const extendOptions = Ctor.extendOptions;
			if (superOptions !== cachedSuperOptions) {
				// super option changed
				Ctor.superOptions = superOptions;
				extendOptions.render = options.render;
				extendOptions.staticRenderFns = options.staticRenderFns;
				options = Ctor.options = mergeOptions(superOptions, extendOptions);
				if (options.name) {
					options.components[options.name] = Ctor;
				}
			}
		}
		return options;
	}

	function Vue$2(options) {
		if ('development' !== 'production' &&
    !(this instanceof Vue$2)) {
			warn('Vue is a constructor and should be called with the `new` keyword');
		}
		this._init(options);
	}

	initMixin(Vue$2);
	stateMixin(Vue$2);
	eventsMixin(Vue$2);
	lifecycleMixin(Vue$2);
	renderMixin(Vue$2);

	var warn = noop;
	let formatComponentName;

	{
		const hasConsole = typeof console !== 'undefined';

		warn = function(msg, vm) {
			if (hasConsole && (!config.silent)) {
				console.error('[Vue warn]: ' + msg + ' ' + (
					vm ? formatLocation(formatComponentName(vm)) : ''
				));
			}
		};

		formatComponentName = function(vm) {
			if (vm.$root === vm) {
				return 'root instance';
			}
			const name = vm._isVue
				? vm.$options.name || vm.$options._componentTag
				: vm.name;
			return (
				(name ? ('component <' + name + '>') : 'anonymous component') +
      (vm._isVue && vm.$options.__file ? (' at ' + (vm.$options.__file)) : '')
			);
		};

		var formatLocation = function(str) {
			if (str === 'anonymous component') {
				str += ' - use the "name" option for better debugging messages.';
			}
			return ('\n(found in ' + str + ')');
		};
	}

	/*  */

	/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
	const strats = config.optionMergeStrategies;

	/**
 * Options with restrictions
 */
	{
		strats.el = strats.propsData = function(parent, child, vm, key) {
			if (!vm) {
				warn(
					'option "' + key + '" can only be used during instance ' +
        'creation with the `new` keyword.'
				);
			}
			return defaultStrat(parent, child);
		};
	}

	/**
 * Helper that recursively merges two data objects together.
 */
	function mergeData(to, from) {
		let key, toVal, fromVal;
		for (key in from) {
			toVal = to[key];
			fromVal = from[key];
			if (!hasOwn(to, key)) {
				set(to, key, fromVal);
			} else if (isObject(toVal) && isObject(fromVal)) {
				mergeData(toVal, fromVal);
			}
		}
		return to;
	}

	/**
 * Data
 */
	strats.data = function(
		parentVal,
		childVal,
		vm
	) {
		if (!vm) {
			// in a Vue.extend merge, both should be functions
			if (!childVal) {
				return parentVal;
			}
			if (typeof childVal !== 'function') {
				'development' !== 'production' && warn(
					'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
					vm
				);
				return parentVal;
			}
			if (!parentVal) {
				return childVal;
			}
			// when parentVal & childVal are both present,
			// we need to return a function that returns the
			// merged result of both functions... no need to
			// check if parentVal is a function here because
			// it has to be a function to pass previous merges.
			return function mergedDataFn() {
				return mergeData(
					childVal.call(this),
					parentVal.call(this)
				);
			};
		} else if (parentVal || childVal) {
			return function mergedInstanceDataFn() {
				// instance merge
				const instanceData = typeof childVal === 'function'
					? childVal.call(vm)
					: childVal;
				const defaultData = typeof parentVal === 'function'
					? parentVal.call(vm)
					: undefined;
				if (instanceData) {
					return mergeData(instanceData, defaultData);
				} else {
					return defaultData;
				}
			};
		}
	};

	/**
 * Hooks and param attributes are merged as arrays.
 */
	function mergeHook(
		parentVal,
		childVal
	) {
		return childVal
			? parentVal
				? parentVal.concat(childVal)
				: Array.isArray(childVal)
					? childVal
					: [childVal]
			: parentVal;
	}

	config._lifecycleHooks.forEach(function(hook) {
		strats[hook] = mergeHook;
	});

	/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
	function mergeAssets(parentVal, childVal) {
		const res = Object.create(parentVal || null);
		return childVal
			? extend(res, childVal)
			: res;
	}

	config._assetTypes.forEach(function(type) {
		strats[type + 's'] = mergeAssets;
	});

	/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
	strats.watch = function(parentVal, childVal) {
		/* istanbul ignore if */
		if (!childVal) { return parentVal; }
		if (!parentVal) { return childVal; }
		const ret = {};
		extend(ret, parentVal);
		for (const key in childVal) {
			let parent = ret[key];
			const child = childVal[key];
			if (parent && !Array.isArray(parent)) {
				parent = [parent];
			}
			ret[key] = parent
				? parent.concat(child)
				: [child];
		}
		return ret;
	};

	/**
 * Other object hashes.
 */
	strats.props =
strats.methods =
strats.computed = function(parentVal, childVal) {
	if (!childVal) { return parentVal; }
	if (!parentVal) { return childVal; }
	const ret = Object.create(null);
	extend(ret, parentVal);
	extend(ret, childVal);
	return ret;
};

	/**
 * Default strategy.
 */
	var defaultStrat = function(parentVal, childVal) {
		return childVal === undefined
			? parentVal
			: childVal;
	};

	/**
 * Validate component names
 */
	function checkComponents(options) {
		for (const key in options.components) {
			const lower = key.toLowerCase();
			if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
				warn(
					'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
				);
			}
		}
	}

	/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
	function normalizeProps(options) {
		const props = options.props;
		if (!props) { return; }
		const res = {};
		let i, val, name;
		if (Array.isArray(props)) {
			i = props.length;
			while (i--) {
				val = props[i];
				if (typeof val === 'string') {
					name = camelize(val);
					res[name] = { type: null };
				} else {
					warn('props must be strings when using array syntax.');
				}
			}
		} else if (isPlainObject(props)) {
			for (const key in props) {
				val = props[key];
				name = camelize(key);
				res[name] = isPlainObject(val)
					? val
					: { type: val };
			}
		}
		options.props = res;
	}

	/**
 * Normalize raw function directives into object format.
 */
	function normalizeDirectives(options) {
		const dirs = options.directives;
		if (dirs) {
			for (const key in dirs) {
				const def = dirs[key];
				if (typeof def === 'function') {
					dirs[key] = { bind: def, update: def };
				}
			}
		}
	}

	/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
	function mergeOptions(
		parent,
		child,
		vm
	) {
		{
			checkComponents(child);
		}
		normalizeProps(child);
		normalizeDirectives(child);
		const extendsFrom = child.extends;
		if (extendsFrom) {
			parent = typeof extendsFrom === 'function'
				? mergeOptions(parent, extendsFrom.options, vm)
				: mergeOptions(parent, extendsFrom, vm);
		}
		if (child.mixins) {
			for (let i = 0, l = child.mixins.length; i < l; i++) {
				let mixin = child.mixins[i];
				if (mixin.prototype instanceof Vue$2) {
					mixin = mixin.options;
				}
				parent = mergeOptions(parent, mixin, vm);
			}
		}
		const options = {};
		let key;
		for (key in parent) {
			mergeField(key);
		}
		for (key in child) {
			if (!hasOwn(parent, key)) {
				mergeField(key);
			}
		}
		function mergeField(key) {
			const strat = strats[key] || defaultStrat;
			options[key] = strat(parent[key], child[key], vm, key);
		}
		return options;
	}

	/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
	function resolveAsset(
		options,
		type,
		id,
		warnMissing
	) {
		/* istanbul ignore if */
		if (typeof id !== 'string') {
			return;
		}
		const assets = options[type];
		const res = assets[id] ||
    // camelCase ID
    assets[camelize(id)] ||
    // Pascal Case ID
    assets[capitalize(camelize(id))];
		if ('development' !== 'production' && warnMissing && !res) {
			warn(
				'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
				options
			);
		}
		return res;
	}

	/*  */

	function validateProp(
		key,
		propOptions,
		propsData,
		vm
	) {
		const prop = propOptions[key];
		const absent = !hasOwn(propsData, key);
		let value = propsData[key];
		// handle boolean props
		if (isBooleanType(prop.type)) {
			if (absent && !hasOwn(prop, 'default')) {
				value = false;
			} else if (value === '' || value === hyphenate(key)) {
				value = true;
			}
		}
		// check default value
		if (value === undefined) {
			value = getPropDefaultValue(vm, prop, key);
			// since the default value is a fresh copy,
			// make sure to observe it.
			const prevShouldConvert = observerState.shouldConvert;
			observerState.shouldConvert = true;
			observe(value);
			observerState.shouldConvert = prevShouldConvert;
		}
		{
			assertProp(prop, key, value, vm, absent);
		}
		return value;
	}

	/**
 * Get the default value of a prop.
 */
	function getPropDefaultValue(vm, prop, key) {
		// no default, return undefined
		if (!hasOwn(prop, 'default')) {
			return undefined;
		}
		const def = prop.default;
		// warn against non-factory defaults for Object & Array
		if (isObject(def)) {
			'development' !== 'production' && warn(
				'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
				vm
			);
		}
		// the raw prop value was also undefined from previous render,
		// return previous default value to avoid unnecessary watcher trigger
		if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm[key] !== undefined) {
			return vm[key];
		}
		// call factory function for non-Function types
		return typeof def === 'function' && prop.type !== Function
			? def.call(vm)
			: def;
	}

	/**
 * Assert whether a prop is valid.
 */
	function assertProp(
		prop,
		name,
		value,
		vm,
		absent
	) {
		if (prop.required && absent) {
			warn(
				'Missing required prop: "' + name + '"',
				vm
			);
			return;
		}
		if (value == null && !prop.required) {
			return;
		}
		let type = prop.type;
		let valid = !type || type === true;
		const expectedTypes = [];
		if (type) {
			if (!Array.isArray(type)) {
				type = [type];
			}
			for (let i = 0; i < type.length && !valid; i++) {
				const assertedType = assertType(value, type[i]);
				expectedTypes.push(assertedType.expectedType);
				valid = assertedType.valid;
			}
		}
		if (!valid) {
			warn(
				'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
				vm
			);
			return;
		}
		const validator = prop.validator;
		if (validator) {
			if (!validator(value)) {
				warn(
					'Invalid prop: custom validator check failed for prop "' + name + '".',
					vm
				);
			}
		}
	}

	/**
 * Assert the type of a value
 */
	function assertType(value, type) {
		let valid;
		let expectedType = getType(type);
		if (expectedType === 'String') {
			valid = typeof value === (expectedType = 'string');
		} else if (expectedType === 'Number') {
			valid = typeof value === (expectedType = 'number');
		} else if (expectedType === 'Boolean') {
			valid = typeof value === (expectedType = 'boolean');
		} else if (expectedType === 'Function') {
			valid = typeof value === (expectedType = 'function');
		} else if (expectedType === 'Object') {
			valid = isPlainObject(value);
		} else if (expectedType === 'Array') {
			valid = Array.isArray(value);
		} else {
			valid = value instanceof type;
		}
		return {
			valid: valid,
			expectedType: expectedType
		};
	}

	/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
	function getType(fn) {
		const match = fn && fn.toString().match(/^\s*function (\w+)/);
		return match && match[1];
	}

	function isBooleanType(fn) {
		if (!Array.isArray(fn)) {
			return getType(fn) === 'Boolean';
		}
		for (let i = 0, len = fn.length; i < len; i++) {
			if (getType(fn[i]) === 'Boolean') {
				return true;
			}
		}
		/* istanbul ignore next */
		return false;
	}

	const util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		devtools: devtools,
		nextTick: nextTick,
		get _Set() { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn() { return warn; },
		get formatComponentName() { return formatComponentName; },
		validateProp: validateProp
	});

	/*  */

	function initUse(Vue) {
		Vue.use = function(plugin) {
			/* istanbul ignore if */
			if (plugin.installed) {
				return;
			}
			// additional parameters
			const args = toArray(arguments, 1);
			args.unshift(this);
			if (typeof plugin.install === 'function') {
				plugin.install.apply(plugin, args);
			} else {
				plugin.apply(null, args);
			}
			plugin.installed = true;
			return this;
		};
	}

	/*  */

	function initMixin$1(Vue) {
		Vue.mixin = function(mixin) {
			Vue.options = mergeOptions(Vue.options, mixin);
		};
	}

	/*  */

	function initExtend(Vue) {
		/**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
		Vue.cid = 0;
		let cid = 1;

		/**
   * Class inheritance
   */
		Vue.extend = function(extendOptions) {
			extendOptions = extendOptions || {};
			const Super = this;
			const isFirstExtend = Super.cid === 0;
			if (isFirstExtend && extendOptions._Ctor) {
				return extendOptions._Ctor;
			}
			const name = extendOptions.name || Super.options.name;
			{
				if (!/^[a-zA-Z][\w-]*$/.test(name)) {
					warn(
						'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characaters and the hyphen.'
					);
				}
			}
			const Sub = function VueComponent(options) {
				this._init(options);
			};
			Sub.prototype = Object.create(Super.prototype);
			Sub.prototype.constructor = Sub;
			Sub.cid = cid++;
			Sub.options = mergeOptions(
				Super.options,
				extendOptions
			);
			Sub.super = Super;
			// allow further extension
			Sub.extend = Super.extend;
			// create asset registers, so extended classes
			// can have their private assets too.
			config._assetTypes.forEach(function(type) {
				Sub[type] = Super[type];
			});
			// enable recursive self-lookup
			if (name) {
				Sub.options.components[name] = Sub;
			}
			// keep a reference to the super options at extension time.
			// later at instantiation we can check if Super's options have
			// been updated.
			Sub.superOptions = Super.options;
			Sub.extendOptions = extendOptions;
			// cache constructor
			if (isFirstExtend) {
				extendOptions._Ctor = Sub;
			}
			return Sub;
		};
	}

	/*  */

	function initAssetRegisters(Vue) {
		/**
   * Create asset registration methods.
   */
		config._assetTypes.forEach(function(type) {
			Vue[type] = function(
				id,
				definition
			) {
				if (!definition) {
					return this.options[type + 's'][id];
				} else {
					/* istanbul ignore if */
					{
						if (type === 'component' && config.isReservedTag(id)) {
							warn(
								'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
							);
						}
					}
					if (type === 'component' && isPlainObject(definition)) {
						definition.name = definition.name || id;
						definition = Vue.extend(definition);
					}
					if (type === 'directive' && typeof definition === 'function') {
						definition = { bind: definition, update: definition };
					}
					this.options[type + 's'][id] = definition;
					return definition;
				}
			};
		});
	}

	const KeepAlive = {
		name: 'keep-alive',
		abstract: true,
		created: function created() {
			this.cache = Object.create(null);
		},
		render: function render() {
			const vnode = getFirstComponentChild(this.$slots.default);
			if (vnode && vnode.componentOptions) {
				const opts = vnode.componentOptions;
				const key = vnode.key == null
				// same constructor may get registered as different local components
				// so cid alone is not enough (#3269)
					? opts.Ctor.cid + '::' + opts.tag
					: vnode.key;
				if (this.cache[key]) {
					vnode.child = this.cache[key].child;
				} else {
					this.cache[key] = vnode;
				}
				vnode.data.keepAlive = true;
			}
			return vnode;
		},
		destroyed: function destroyed() {
			const this$1 = this;

			for (const key in this.cache) {
				const vnode = this$1.cache[key];
				callHook(vnode.child, 'deactivated');
				vnode.child.$destroy();
			}
		}
	};

	const builtInComponents = {
		KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI(Vue) {
		// config
		const configDef = {};
		configDef.get = function() { return config; };
		{
			configDef.set = function() {
				warn(
					'Do not replace the Vue.config object, set individual fields instead.'
				);
			};
		}
		Object.defineProperty(Vue, 'config', configDef);
		Vue.util = util;
		Vue.set = set;
		Vue.delete = del;
		Vue.nextTick = nextTick;

		Vue.options = Object.create(null);
		config._assetTypes.forEach(function(type) {
			Vue.options[type + 's'] = Object.create(null);
		});

		extend(Vue.options.components, builtInComponents);

		initUse(Vue);
		initMixin$1(Vue);
		initExtend(Vue);
		initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue$2);

	Object.defineProperty(Vue$2.prototype, '$isServer', {
		get: function() { return config._isServer; }
	});

	Vue$2.version = '2.0.5';

	/*  */

	// attributes that should be using props for binding
	const mustUseProp = makeMap('value,selected,checked,muted');

	const isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	const isBooleanAttr = makeMap(
		'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
	);

	const isAttr = makeMap(
		'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
  'target,title,type,usemap,value,width,wrap'
	);

	const xlinkNS = 'http://www.w3.org/1999/xlink';

	const isXlink = function(name) {
		return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
	};

	const getXlinkProp = function(name) {
		return isXlink(name) ? name.slice(6, name.length) : '';
	};

	const isFalsyAttrValue = function(val) {
		return val == null || val === false;
	};

	/*  */

	function genClassForVnode(vnode) {
		let data = vnode.data;
		let parentNode = vnode;
		let childNode = vnode;
		while (childNode.child) {
			childNode = childNode.child._vnode;
			if (childNode.data) {
				data = mergeClassData(childNode.data, data);
			}
		}
		while ((parentNode = parentNode.parent)) {
			if (parentNode.data) {
				data = mergeClassData(data, parentNode.data);
			}
		}
		return genClassFromData(data);
	}

	function mergeClassData(child, parent) {
		return {
			staticClass: concat(child.staticClass, parent.staticClass),
			class: child.class
				? [child.class, parent.class]
				: parent.class
		};
	}

	function genClassFromData(data) {
		const dynamicClass = data.class;
		const staticClass = data.staticClass;
		if (staticClass || dynamicClass) {
			return concat(staticClass, stringifyClass(dynamicClass));
		}
		/* istanbul ignore next */
		return '';
	}

	function concat(a, b) {
		return a ? b ? (a + ' ' + b) : a : (b || '');
	}

	function stringifyClass(value) {
		let res = '';
		if (!value) {
			return res;
		}
		if (typeof value === 'string') {
			return value;
		}
		if (Array.isArray(value)) {
			let stringified;
			for (let i = 0, l = value.length; i < l; i++) {
				if (value[i]) {
					if ((stringified = stringifyClass(value[i]))) {
						res += stringified + ' ';
					}
				}
			}
			return res.slice(0, -1);
		}
		if (isObject(value)) {
			for (const key in value) {
				if (value[key]) { res += key + ' '; }
			}
			return res.slice(0, -1);
		}
		/* istanbul ignore next */
		return res;
	}

	/*  */

	const namespaceMap = {
		svg: 'http://www.w3.org/2000/svg',
		math: 'http://www.w3.org/1998/Math/MathML',
		xhtml: 'http://www.w3.org/1999/xhtm'
	};

	const isHTMLTag = makeMap(
		'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
	);

	const isUnaryTag = makeMap(
		'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr',
		true
	);

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	const canBeLeftOpenTag = makeMap(
		'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
		true
	);

	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	const isNonPhrasingTag = makeMap(
		'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track',
		true
	);

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	const isSVG = makeMap(
		'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
		true
	);

	const isPreTag = function(tag) { return tag === 'pre'; };

	const isReservedTag = function(tag) {
		return isHTMLTag(tag) || isSVG(tag);
	};

	function getTagNamespace(tag) {
		if (isSVG(tag)) {
			return 'svg';
		}
		// basic support for MathML
		// note it doesn't support other MathML elements being component roots
		if (tag === 'math') {
			return 'math';
		}
	}

	const unknownElementCache = Object.create(null);
	function isUnknownElement(tag) {
		/* istanbul ignore if */
		if (!inBrowser) {
			return true;
		}
		if (isReservedTag(tag)) {
			return false;
		}
		tag = tag.toLowerCase();
		/* istanbul ignore if */
		if (unknownElementCache[tag] != null) {
			return unknownElementCache[tag];
		}
		const el = document.createElement(tag);
		if (tag.indexOf('-') > -1) {
			// http://stackoverflow.com/a/28210364/1070244
			return (unknownElementCache[tag] = (
				el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
			));
		} else {
			return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()));
		}
	}

	/*  */

	/**
 * Query an element selector if it's not an element already.
 */
	function query(el) {
		if (typeof el === 'string') {
			const selector = el;
			el = document.querySelector(el);
			if (!el) {
				'development' !== 'production' && warn(
					'Cannot find element: ' + selector
				);
				return document.createElement('div');
			}
		}
		return el;
	}

	/*  */

	function createElement$1(tagName, vnode) {
		const elm = document.createElement(tagName);
		if (tagName !== 'select') {
			return elm;
		}
		if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
			elm.setAttribute('multiple', 'multiple');
		}
		return elm;
	}

	function createElementNS(namespace, tagName) {
		return document.createElementNS(namespaceMap[namespace], tagName);
	}

	function createTextNode(text) {
		return document.createTextNode(text);
	}

	function createComment(text) {
		return document.createComment(text);
	}

	function insertBefore(parentNode, newNode, referenceNode) {
		parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild(node, child) {
		node.removeChild(child);
	}

	function appendChild(node, child) {
		node.appendChild(child);
	}

	function parentNode(node) {
		return node.parentNode;
	}

	function nextSibling(node) {
		return node.nextSibling;
	}

	function tagName(node) {
		return node.tagName;
	}

	function setTextContent(node, text) {
		node.textContent = text;
	}

	function childNodes(node) {
		return node.childNodes;
	}

	function setAttribute(node, key, val) {
		node.setAttribute(key, val);
	}

	const nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		childNodes: childNodes,
		setAttribute: setAttribute
	});

	/*  */

	const ref = {
		create: function create(_, vnode) {
			registerRef(vnode);
		},
		update: function update(oldVnode, vnode) {
			if (oldVnode.data.ref !== vnode.data.ref) {
				registerRef(oldVnode, true);
				registerRef(vnode);
			}
		},
		destroy: function destroy(vnode) {
			registerRef(vnode, true);
		}
	};

	function registerRef(vnode, isRemoval) {
		const key = vnode.data.ref;
		if (!key) { return; }

		const vm = vnode.context;
		const ref = vnode.child || vnode.elm;
		const refs = vm.$refs;
		if (isRemoval) {
			if (Array.isArray(refs[key])) {
				remove$1(refs[key], ref);
			} else if (refs[key] === ref) {
				refs[key] = undefined;
			}
		} else {
			if (vnode.data.refInFor) {
				if (Array.isArray(refs[key])) {
					refs[key].push(ref);
				} else {
					refs[key] = [ref];
				}
			} else {
				refs[key] = ref;
			}
		}
	}

	/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

	const emptyNode = new VNode('', {}, []);

	const hooks$1 = ['create', 'update', 'remove', 'destroy'];

	function isUndef(s) {
		return s == null;
	}

	function isDef(s) {
		return s != null;
	}

	function sameVnode(vnode1, vnode2) {
		return (
			vnode1.key === vnode2.key &&
    vnode1.tag === vnode2.tag &&
    vnode1.isComment === vnode2.isComment &&
    !vnode1.data === !vnode2.data
		);
	}

	function createKeyToOldIdx(children, beginIdx, endIdx) {
		let i, key;
		const map = {};
		for (i = beginIdx; i <= endIdx; ++i) {
			key = children[i].key;
			if (isDef(key)) { map[key] = i; }
		}
		return map;
	}

	function createPatchFunction(backend) {
		let i, j;
		const cbs = {};

		const modules = backend.modules;
		const nodeOps = backend.nodeOps;

		for (i = 0; i < hooks$1.length; ++i) {
			cbs[hooks$1[i]] = [];
			for (j = 0; j < modules.length; ++j) {
				if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
			}
		}

		function emptyNodeAt(elm) {
			return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
		}

		function createRmCb(childElm, listeners) {
			function remove$$1() {
				if (--remove$$1.listeners === 0) {
					removeElement(childElm);
				}
			}
			remove$$1.listeners = listeners;
			return remove$$1;
		}

		function removeElement(el) {
			const parent = nodeOps.parentNode(el);
			// element may have already been removed due to v-html
			if (parent) {
				nodeOps.removeChild(parent, el);
			}
		}

		function createElm(vnode, insertedVnodeQueue, nested) {
			let i;
			const data = vnode.data;
			vnode.isRootInsert = !nested;
			if (isDef(data)) {
				if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode); }
				// after calling the init hook, if the vnode is a child component
				// it should've created a child instance and mounted it. the child
				// component also has set the placeholder vnode's elm.
				// in that case we can just return the element and be done.
				if (isDef(i = vnode.child)) {
					initComponent(vnode, insertedVnodeQueue);
					return vnode.elm;
				}
			}
			const children = vnode.children;
			const tag = vnode.tag;
			if (isDef(tag)) {
				{
					if (
						!vnode.ns &&
          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
					) {
						warn(
							'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
							vnode.context
						);
					}
				}
				vnode.elm = vnode.ns
					? nodeOps.createElementNS(vnode.ns, tag)
					: nodeOps.createElement(tag, vnode);
				setScope(vnode);
				createChildren(vnode, children, insertedVnodeQueue);
				if (isDef(data)) {
					invokeCreateHooks(vnode, insertedVnodeQueue);
				}
			} else if (vnode.isComment) {
				vnode.elm = nodeOps.createComment(vnode.text);
			} else {
				vnode.elm = nodeOps.createTextNode(vnode.text);
			}
			return vnode.elm;
		}

		function createChildren(vnode, children, insertedVnodeQueue) {
			if (Array.isArray(children)) {
				for (let i = 0; i < children.length; ++i) {
					nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true));
				}
			} else if (isPrimitive(vnode.text)) {
				nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
			}
		}

		function isPatchable(vnode) {
			while (vnode.child) {
				vnode = vnode.child._vnode;
			}
			return isDef(vnode.tag);
		}

		function invokeCreateHooks(vnode, insertedVnodeQueue) {
			for (let i$1 = 0; i$1 < cbs.create.length; ++i$1) {
				cbs.create[i$1](emptyNode, vnode);
			}
			i = vnode.data.hook; // Reuse variable
			if (isDef(i)) {
				if (i.create) { i.create(emptyNode, vnode); }
				if (i.insert) { insertedVnodeQueue.push(vnode); }
			}
		}

		function initComponent(vnode, insertedVnodeQueue) {
			if (vnode.data.pendingInsert) {
				insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
			}
			vnode.elm = vnode.child.$el;
			if (isPatchable(vnode)) {
				invokeCreateHooks(vnode, insertedVnodeQueue);
				setScope(vnode);
			} else {
				// empty component root.
				// skip all element-related modules except for ref (#3455)
				registerRef(vnode);
				// make sure to invoke the insert hook
				insertedVnodeQueue.push(vnode);
			}
		}

		// set scope id attribute for scoped CSS.
		// this is implemented as a special case to avoid the overhead
		// of going through the normal attribute patching process.
		function setScope(vnode) {
			let i;
			if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
				nodeOps.setAttribute(vnode.elm, i, '');
			}
			if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
				nodeOps.setAttribute(vnode.elm, i, '');
			}
		}

		function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
			for (; startIdx <= endIdx; ++startIdx) {
				nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
			}
		}

		function invokeDestroyHook(vnode) {
			let i, j;
			const data = vnode.data;
			if (isDef(data)) {
				if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
				for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
			}
			if (isDef(i = vnode.children)) {
				for (j = 0; j < vnode.children.length; ++j) {
					invokeDestroyHook(vnode.children[j]);
				}
			}
		}

		function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
			for (; startIdx <= endIdx; ++startIdx) {
				const ch = vnodes[startIdx];
				if (isDef(ch)) {
					if (isDef(ch.tag)) {
						removeAndInvokeRemoveHook(ch);
						invokeDestroyHook(ch);
					} else { // Text node
						nodeOps.removeChild(parentElm, ch.elm);
					}
				}
			}
		}

		function removeAndInvokeRemoveHook(vnode, rm) {
			if (rm || isDef(vnode.data)) {
				const listeners = cbs.remove.length + 1;
				if (!rm) {
					// directly removing
					rm = createRmCb(vnode.elm, listeners);
				} else {
					// we have a recursively passed down rm callback
					// increase the listeners count
					rm.listeners += listeners;
				}
				// recursively invoke hooks on child component root node
				if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
					removeAndInvokeRemoveHook(i, rm);
				}
				for (i = 0; i < cbs.remove.length; ++i) {
					cbs.remove[i](vnode, rm);
				}
				if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
					i(vnode, rm);
				} else {
					rm();
				}
			} else {
				removeElement(vnode.elm);
			}
		}

		function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
			let oldStartIdx = 0;
			let newStartIdx = 0;
			let oldEndIdx = oldCh.length - 1;
			let oldStartVnode = oldCh[0];
			let oldEndVnode = oldCh[oldEndIdx];
			let newEndIdx = newCh.length - 1;
			let newStartVnode = newCh[0];
			let newEndVnode = newCh[newEndIdx];
			let oldKeyToIdx, idxInOld, elmToMove, before;

			// removeOnly is a special flag used only by <transition-group>
			// to ensure removed elements stay in correct relative positions
			// during leaving transitions
			const canMove = !removeOnly;

			while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
				if (isUndef(oldStartVnode)) {
					oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
				} else if (isUndef(oldEndVnode)) {
					oldEndVnode = oldCh[--oldEndIdx];
				} else if (sameVnode(oldStartVnode, newStartVnode)) {
					patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
					oldStartVnode = oldCh[++oldStartIdx];
					newStartVnode = newCh[++newStartIdx];
				} else if (sameVnode(oldEndVnode, newEndVnode)) {
					patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
					oldEndVnode = oldCh[--oldEndIdx];
					newEndVnode = newCh[--newEndIdx];
				} else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
					patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
					canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
					oldStartVnode = oldCh[++oldStartIdx];
					newEndVnode = newCh[--newEndIdx];
				} else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
					patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
					canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
					oldEndVnode = oldCh[--oldEndIdx];
					newStartVnode = newCh[++newStartIdx];
				} else {
					if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
					idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
					if (isUndef(idxInOld)) { // New element
						nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
						newStartVnode = newCh[++newStartIdx];
					} else {
						elmToMove = oldCh[idxInOld];
						/* istanbul ignore if */
						if ('development' !== 'production' && !elmToMove) {
							warn(
								'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
							);
						}
						if (elmToMove.tag !== newStartVnode.tag) {
							// same key but different element. treat as new element
							nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
							newStartVnode = newCh[++newStartIdx];
						} else {
							patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
							oldCh[idxInOld] = undefined;
							canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
							newStartVnode = newCh[++newStartIdx];
						}
					}
				}
			}
			if (oldStartIdx > oldEndIdx) {
				before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
				addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
			} else if (newStartIdx > newEndIdx) {
				removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
			}
		}

		function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
			if (oldVnode === vnode) {
				return;
			}
			// reuse element for static trees.
			// note we only do this if the vnode is cloned -
			// if the new node is not cloned it means the render functions have been
			// reset by the hot-reload-api and we need to do a proper re-render.
			if (vnode.isStatic &&
        oldVnode.isStatic &&
        vnode.key === oldVnode.key &&
        (vnode.isCloned || vnode.isOnce)) {
				vnode.elm = oldVnode.elm;
				return;
			}
			let i;
			const data = vnode.data;
			const hasData = isDef(data);
			if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
				i(oldVnode, vnode);
			}
			const elm = vnode.elm = oldVnode.elm;
			const oldCh = oldVnode.children;
			const ch = vnode.children;
			if (hasData && isPatchable(vnode)) {
				for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
				if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
			}
			if (isUndef(vnode.text)) {
				if (isDef(oldCh) && isDef(ch)) {
					if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
				} else if (isDef(ch)) {
					if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
					addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
				} else if (isDef(oldCh)) {
					removeVnodes(elm, oldCh, 0, oldCh.length - 1);
				} else if (isDef(oldVnode.text)) {
					nodeOps.setTextContent(elm, '');
				}
			} else if (oldVnode.text !== vnode.text) {
				nodeOps.setTextContent(elm, vnode.text);
			}
			if (hasData) {
				if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
			}
		}

		function invokeInsertHook(vnode, queue, initial) {
			// delay insert hooks for component root nodes, invoke them after the
			// element is really inserted
			if (initial && vnode.parent) {
				vnode.parent.data.pendingInsert = queue;
			} else {
				for (let i = 0; i < queue.length; ++i) {
					queue[i].data.hook.insert(queue[i]);
				}
			}
		}

		let bailed = false;
		function hydrate(elm, vnode, insertedVnodeQueue) {
			{
				if (!assertNodeMatch(elm, vnode)) {
					return false;
				}
			}
			vnode.elm = elm;
			const tag = vnode.tag;
			const data = vnode.data;
			const children = vnode.children;
			if (isDef(data)) {
				if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
				if (isDef(i = vnode.child)) {
					// child component. it should have hydrated its own tree.
					initComponent(vnode, insertedVnodeQueue);
					return true;
				}
			}
			if (isDef(tag)) {
				if (isDef(children)) {
					const childNodes = nodeOps.childNodes(elm);
					// empty element, allow client to pick up and populate children
					if (!childNodes.length) {
						createChildren(vnode, children, insertedVnodeQueue);
					} else {
						let childrenMatch = true;
						if (childNodes.length !== children.length) {
							childrenMatch = false;
						} else {
							for (let i$1 = 0; i$1 < children.length; i$1++) {
								if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
									childrenMatch = false;
									break;
								}
							}
						}
						if (!childrenMatch) {
							if ('development' !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed) {
								bailed = true;
								console.warn('Parent: ', elm);
								console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
							}
							return false;
						}
					}
				}
				if (isDef(data)) {
					invokeCreateHooks(vnode, insertedVnodeQueue);
				}
			}
			return true;
		}

		function assertNodeMatch(node, vnode) {
			if (vnode.tag) {
				return (
					vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag === nodeOps.tagName(node).toLowerCase()
				);
			} else {
				return _toString(vnode.text) === node.data;
			}
		}

		return function patch(oldVnode, vnode, hydrating, removeOnly) {
			if (!vnode) {
				if (oldVnode) { invokeDestroyHook(oldVnode); }
				return;
			}

			let elm, parent;
			let isInitialPatch = false;
			const insertedVnodeQueue = [];

			if (!oldVnode) {
				// empty mount, create new root element
				isInitialPatch = true;
				createElm(vnode, insertedVnodeQueue);
			} else {
				const isRealElement = isDef(oldVnode.nodeType);
				if (!isRealElement && sameVnode(oldVnode, vnode)) {
					patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
				} else {
					if (isRealElement) {
						// mounting to a real element
						// check if this is server-rendered content and if we can perform
						// a successful hydration.
						if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
							oldVnode.removeAttribute('server-rendered');
							hydrating = true;
						}
						if (hydrating) {
							if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
								invokeInsertHook(vnode, insertedVnodeQueue, true);
								return oldVnode;
							} else {
								warn(
									'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
								);
							}
						}
						// either not server-rendered, or hydration failed.
						// create an empty node and replace it
						oldVnode = emptyNodeAt(oldVnode);
					}
					elm = oldVnode.elm;
					parent = nodeOps.parentNode(elm);

					createElm(vnode, insertedVnodeQueue);

					// component root element replaced.
					// update parent placeholder node element.
					if (vnode.parent) {
						vnode.parent.elm = vnode.elm;
						if (isPatchable(vnode)) {
							for (let i = 0; i < cbs.create.length; ++i) {
								cbs.create[i](emptyNode, vnode.parent);
							}
						}
					}

					if (parent !== null) {
						nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
						removeVnodes(parent, [oldVnode], 0, 0);
					} else if (isDef(oldVnode.tag)) {
						invokeDestroyHook(oldVnode);
					}
				}
			}

			invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
			return vnode.elm;
		};
	}

	/*  */

	const directives = {
		create: updateDirectives,
		update: updateDirectives,
		destroy: function unbindDirectives(vnode) {
			updateDirectives(vnode, emptyNode);
		}
	};

	function updateDirectives(
		oldVnode,
		vnode
	) {
		if (!oldVnode.data.directives && !vnode.data.directives) {
			return;
		}
		const isCreate = oldVnode === emptyNode;
		const oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
		const newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

		const dirsWithInsert = [];
		const dirsWithPostpatch = [];

		let key, oldDir, dir;
		for (key in newDirs) {
			oldDir = oldDirs[key];
			dir = newDirs[key];
			if (!oldDir) {
				// new directive, bind
				callHook$1(dir, 'bind', vnode, oldVnode);
				if (dir.def && dir.def.inserted) {
					dirsWithInsert.push(dir);
				}
			} else {
				// existing directive, update
				dir.oldValue = oldDir.value;
				callHook$1(dir, 'update', vnode, oldVnode);
				if (dir.def && dir.def.componentUpdated) {
					dirsWithPostpatch.push(dir);
				}
			}
		}

		if (dirsWithInsert.length) {
			const callInsert = function() {
				dirsWithInsert.forEach(function(dir) {
					callHook$1(dir, 'inserted', vnode, oldVnode);
				});
			};
			if (isCreate) {
				mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
			} else {
				callInsert();
			}
		}

		if (dirsWithPostpatch.length) {
			mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function() {
				dirsWithPostpatch.forEach(function(dir) {
					callHook$1(dir, 'componentUpdated', vnode, oldVnode);
				});
			}, 'dir-postpatch');
		}

		if (!isCreate) {
			for (key in oldDirs) {
				if (!newDirs[key]) {
					// no longer present, unbind
					callHook$1(oldDirs[key], 'unbind', oldVnode);
				}
			}
		}
	}

	const emptyModifiers = Object.create(null);

	function normalizeDirectives$1(
		dirs,
		vm
	) {
		const res = Object.create(null);
		if (!dirs) {
			return res;
		}
		let i, dir;
		for (i = 0; i < dirs.length; i++) {
			dir = dirs[i];
			if (!dir.modifiers) {
				dir.modifiers = emptyModifiers;
			}
			res[getRawDirName(dir)] = dir;
			dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
		}
		return res;
	}

	function getRawDirName(dir) {
		return dir.rawName || ((dir.name) + '.' + (Object.keys(dir.modifiers || {}).join('.')));
	}

	function callHook$1(dir, hook, vnode, oldVnode) {
		const fn = dir.def && dir.def[hook];
		if (fn) {
			fn(vnode.elm, dir, vnode, oldVnode);
		}
	}

	const baseModules = [
		ref,
		directives
	];

	/*  */

	function updateAttrs(oldVnode, vnode) {
		if (!oldVnode.data.attrs && !vnode.data.attrs) {
			return;
		}
		let key, cur, old;
		const elm = vnode.elm;
		const oldAttrs = oldVnode.data.attrs || {};
		let attrs = vnode.data.attrs || {};
		// clone observed objects, as the user probably wants to mutate it
		if (attrs.__ob__) {
			attrs = vnode.data.attrs = extend({}, attrs);
		}

		for (key in attrs) {
			cur = attrs[key];
			old = oldAttrs[key];
			if (old !== cur) {
				setAttr(elm, key, cur);
			}
		}
		for (key in oldAttrs) {
			if (attrs[key] == null) {
				if (isXlink(key)) {
					elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
				} else if (!isEnumeratedAttr(key)) {
					elm.removeAttribute(key);
				}
			}
		}
	}

	function setAttr(el, key, value) {
		if (isBooleanAttr(key)) {
			// set attribute for blank value
			// e.g. <option disabled>Select one</option>
			if (isFalsyAttrValue(value)) {
				el.removeAttribute(key);
			} else {
				el.setAttribute(key, key);
			}
		} else if (isEnumeratedAttr(key)) {
			el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
		} else if (isXlink(key)) {
			if (isFalsyAttrValue(value)) {
				el.removeAttributeNS(xlinkNS, getXlinkProp(key));
			} else {
				el.setAttributeNS(xlinkNS, key, value);
			}
		} else {
			if (isFalsyAttrValue(value)) {
				el.removeAttribute(key);
			} else {
				el.setAttribute(key, value);
			}
		}
	}

	const attrs = {
		create: updateAttrs,
		update: updateAttrs
	};

	/*  */

	function updateClass(oldVnode, vnode) {
		const el = vnode.elm;
		const data = vnode.data;
		const oldData = oldVnode.data;
		if (!data.staticClass && !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))) {
			return;
		}

		let cls = genClassForVnode(vnode);

		// handle transition classes
		const transitionClass = el._transitionClasses;
		if (transitionClass) {
			cls = concat(cls, stringifyClass(transitionClass));
		}

		// set the class
		if (cls !== el._prevClass) {
			el.setAttribute('class', cls);
			el._prevClass = cls;
		}
	}

	const klass = {
		create: updateClass,
		update: updateClass
	};

	// skip type checking this file because we need to attach private properties
	// to elements

	function updateDOMListeners(oldVnode, vnode) {
		if (!oldVnode.data.on && !vnode.data.on) {
			return;
		}
		const on = vnode.data.on || {};
		const oldOn = oldVnode.data.on || {};
		const add = vnode.elm._v_add || (vnode.elm._v_add = function(event, handler, capture) {
			vnode.elm.addEventListener(event, handler, capture);
		});
		const remove = vnode.elm._v_remove || (vnode.elm._v_remove = function(event, handler) {
			vnode.elm.removeEventListener(event, handler);
		});
		updateListeners(on, oldOn, add, remove, vnode.context);
	}

	const events = {
		create: updateDOMListeners,
		update: updateDOMListeners
	};

	/*  */

	function updateDOMProps(oldVnode, vnode) {
		if (!oldVnode.data.domProps && !vnode.data.domProps) {
			return;
		}
		let key, cur;
		const elm = vnode.elm;
		const oldProps = oldVnode.data.domProps || {};
		let props = vnode.data.domProps || {};
		// clone observed objects, as the user probably wants to mutate it
		if (props.__ob__) {
			props = vnode.data.domProps = extend({}, props);
		}

		for (key in oldProps) {
			if (props[key] == null) {
				elm[key] = '';
			}
		}
		for (key in props) {
			// ignore children if the node has textContent or innerHTML,
			// as these will throw away existing DOM nodes and cause removal errors
			// on subsequent patches (#3360)
			if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
				vnode.children.length = 0;
			}
			cur = props[key];
			if (key === 'value') {
				// store value as _value as well since
				// non-string values will be stringified
				elm._value = cur;
				// avoid resetting cursor position when value is the same
				const strCur = cur == null ? '' : String(cur);
				if (elm.value !== strCur && !elm.composing) {
					elm.value = strCur;
				}
			} else {
				elm[key] = cur;
			}
		}
	}

	const domProps = {
		create: updateDOMProps,
		update: updateDOMProps
	};

	/*  */

	const cssVarRE = /^--/;
	const setProp = function(el, name, val) {
		/* istanbul ignore if */
		if (cssVarRE.test(name)) {
			el.style.setProperty(name, val);
		} else {
			el.style[normalize(name)] = val;
		}
	};

	const prefixes = ['Webkit', 'Moz', 'ms'];

	let testEl;
	var normalize = cached(function(prop) {
		testEl = testEl || document.createElement('div');
		prop = camelize(prop);
		if (prop !== 'filter' && (prop in testEl.style)) {
			return prop;
		}
		const upper = prop.charAt(0).toUpperCase() + prop.slice(1);
		for (let i = 0; i < prefixes.length; i++) {
			const prefixed = prefixes[i] + upper;
			if (prefixed in testEl.style) {
				return prefixed;
			}
		}
	});

	function updateStyle(oldVnode, vnode) {
		if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
			return;
		}
		let cur, name;
		const el = vnode.elm;
		const oldStyle = oldVnode.data.style || {};
		let style = vnode.data.style || {};

		// handle string
		if (typeof style === 'string') {
			el.style.cssText = style;
			return;
		}

		const needClone = style.__ob__;

		// handle array syntax
		if (Array.isArray(style)) {
			style = vnode.data.style = toObject(style);
		}

		// clone the style for future updates,
		// in case the user mutates the style object in-place.
		if (needClone) {
			style = vnode.data.style = extend({}, style);
		}

		for (name in oldStyle) {
			if (style[name] == null) {
				setProp(el, name, '');
			}
		}
		for (name in style) {
			cur = style[name];
			if (cur !== oldStyle[name]) {
				// ie9 setting to null has no effect, must use empty string
				setProp(el, name, cur == null ? '' : cur);
			}
		}
	}

	const style = {
		create: updateStyle,
		update: updateStyle
	};

	/*  */

	/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
	function addClass(el, cls) {
		/* istanbul ignore if */
		if (!cls || !cls.trim()) {
			return;
		}

		/* istanbul ignore else */
		if (el.classList) {
			if (cls.indexOf(' ') > -1) {
				cls.split(/\s+/).forEach(function(c) { return el.classList.add(c); });
			} else {
				el.classList.add(cls);
			}
		} else {
			const cur = ' ' + el.getAttribute('class') + ' ';
			if (cur.indexOf(' ' + cls + ' ') < 0) {
				el.setAttribute('class', (cur + cls).trim());
			}
		}
	}

	/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
	function removeClass(el, cls) {
		/* istanbul ignore if */
		if (!cls || !cls.trim()) {
			return;
		}

		/* istanbul ignore else */
		if (el.classList) {
			if (cls.indexOf(' ') > -1) {
				cls.split(/\s+/).forEach(function(c) { return el.classList.remove(c); });
			} else {
				el.classList.remove(cls);
			}
		} else {
			let cur = ' ' + el.getAttribute('class') + ' ';
			const tar = ' ' + cls + ' ';
			while (cur.indexOf(tar) >= 0) {
				cur = cur.replace(tar, ' ');
			}
			el.setAttribute('class', cur.trim());
		}
	}

	/*  */

	const hasTransition = inBrowser && !isIE9;
	const TRANSITION = 'transition';
	const ANIMATION = 'animation';

	// Transition property/event sniffing
	let transitionProp = 'transition';
	let transitionEndEvent = 'transitionend';
	let animationProp = 'animation';
	let animationEndEvent = 'animationend';
	if (hasTransition) {
		/* istanbul ignore if */
		if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined) {
			transitionProp = 'WebkitTransition';
			transitionEndEvent = 'webkitTransitionEnd';
		}
		if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined) {
			animationProp = 'WebkitAnimation';
			animationEndEvent = 'webkitAnimationEnd';
		}
	}

	const raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
	function nextFrame(fn) {
		raf(function() {
			raf(fn);
		});
	}

	function addTransitionClass(el, cls) {
		(el._transitionClasses || (el._transitionClasses = [])).push(cls);
		addClass(el, cls);
	}

	function removeTransitionClass(el, cls) {
		if (el._transitionClasses) {
			remove$1(el._transitionClasses, cls);
		}
		removeClass(el, cls);
	}

	function whenTransitionEnds(
		el,
		expectedType,
		cb
	) {
		const ref = getTransitionInfo(el, expectedType);
		const type = ref.type;
		const timeout = ref.timeout;
		const propCount = ref.propCount;
		if (!type) { return cb(); }
		const event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
		let ended = 0;
		const end = function() {
			el.removeEventListener(event, onEnd);
			cb();
		};
		var onEnd = function(e) {
			if (e.target === el) {
				if (++ended >= propCount) {
					end();
				}
			}
		};
		setTimeout(function() {
			if (ended < propCount) {
				end();
			}
		}, timeout + 1);
		el.addEventListener(event, onEnd);
	}

	const transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo(el, expectedType) {
		const styles = window.getComputedStyle(el);
		const transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
		const transitionDurations = styles[transitionProp + 'Duration'].split(', ');
		const transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
		const animationDelays = styles[animationProp + 'Delay'].split(', ');
		const animationDurations = styles[animationProp + 'Duration'].split(', ');
		const animationTimeout = getTimeout(animationDelays, animationDurations);

		let type;
		let timeout = 0;
		let propCount = 0;
		/* istanbul ignore if */
		if (expectedType === TRANSITION) {
			if (transitionTimeout > 0) {
				type = TRANSITION;
				timeout = transitionTimeout;
				propCount = transitionDurations.length;
			}
		} else if (expectedType === ANIMATION) {
			if (animationTimeout > 0) {
				type = ANIMATION;
				timeout = animationTimeout;
				propCount = animationDurations.length;
			}
		} else {
			timeout = Math.max(transitionTimeout, animationTimeout);
			type = timeout > 0
				? transitionTimeout > animationTimeout
					? TRANSITION
					: ANIMATION
				: null;
			propCount = type
				? type === TRANSITION
					? transitionDurations.length
					: animationDurations.length
				: 0;
		}
		const hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
		return {
			type: type,
			timeout: timeout,
			propCount: propCount,
			hasTransform: hasTransform
		};
	}

	function getTimeout(delays, durations) {
		/* istanbul ignore next */
		while (delays.length < durations.length) {
			delays = delays.concat(delays);
		}

		return Math.max.apply(null, durations.map(function(d, i) {
			return toMs(d) + toMs(delays[i]);
		}));
	}

	function toMs(s) {
		return Number(s.slice(0, -1)) * 1000;
	}

	/*  */

	function enter(vnode) {
		const el = vnode.elm;

		// call leave callback now
		if (el._leaveCb) {
			el._leaveCb.cancelled = true;
			el._leaveCb();
		}

		const data = resolveTransition(vnode.data.transition);
		if (!data) {
			return;
		}

		/* istanbul ignore if */
		if (el._enterCb || el.nodeType !== 1) {
			return;
		}

		const css = data.css;
		const type = data.type;
		const enterClass = data.enterClass;
		const enterActiveClass = data.enterActiveClass;
		const appearClass = data.appearClass;
		const appearActiveClass = data.appearActiveClass;
		const beforeEnter = data.beforeEnter;
		const enter = data.enter;
		const afterEnter = data.afterEnter;
		const enterCancelled = data.enterCancelled;
		const beforeAppear = data.beforeAppear;
		const appear = data.appear;
		const afterAppear = data.afterAppear;
		const appearCancelled = data.appearCancelled;

		// activeInstance will always be the <transition> component managing this
		// transition. One edge case to check is when the <transition> is placed
		// as the root node of a child component. In that case we need to check
		// <transition>'s parent for appear check.
		const transitionNode = activeInstance.$vnode;
		const context = transitionNode && transitionNode.parent
			? transitionNode.parent.context
			: activeInstance;

		const isAppear = !context._isMounted || !vnode.isRootInsert;

		if (isAppear && !appear && appear !== '') {
			return;
		}

		const startClass = isAppear ? appearClass : enterClass;
		const activeClass = isAppear ? appearActiveClass : enterActiveClass;
		const beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
		const enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
		const afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
		const enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

		const expectsCSS = css !== false && !isIE9;
		const userWantsControl =
    enterHook &&
    // enterHook may be a bound method which exposes
    // the length of original fn as _length
    (enterHook._length || enterHook.length) > 1;

		var cb = el._enterCb = once(function() {
			if (expectsCSS) {
				removeTransitionClass(el, activeClass);
			}
			if (cb.cancelled) {
				if (expectsCSS) {
					removeTransitionClass(el, startClass);
				}
				enterCancelledHook && enterCancelledHook(el);
			} else {
				afterEnterHook && afterEnterHook(el);
			}
			el._enterCb = null;
		});

		if (!vnode.data.show) {
			// remove pending leave element on enter by injecting an insert hook
			mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function() {
				const parent = el.parentNode;
				const pendingNode = parent && parent._pending && parent._pending[vnode.key];
				if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
					pendingNode.elm._leaveCb();
				}
				enterHook && enterHook(el, cb);
			}, 'transition-insert');
		}

		// start enter transition
		beforeEnterHook && beforeEnterHook(el);
		if (expectsCSS) {
			addTransitionClass(el, startClass);
			addTransitionClass(el, activeClass);
			nextFrame(function() {
				removeTransitionClass(el, startClass);
				if (!cb.cancelled && !userWantsControl) {
					whenTransitionEnds(el, type, cb);
				}
			});
		}

		if (vnode.data.show) {
			enterHook && enterHook(el, cb);
		}

		if (!expectsCSS && !userWantsControl) {
			cb();
		}
	}

	function leave(vnode, rm) {
		const el = vnode.elm;

		// call enter callback now
		if (el._enterCb) {
			el._enterCb.cancelled = true;
			el._enterCb();
		}

		const data = resolveTransition(vnode.data.transition);
		if (!data) {
			return rm();
		}

		/* istanbul ignore if */
		if (el._leaveCb || el.nodeType !== 1) {
			return;
		}

		const css = data.css;
		const type = data.type;
		const leaveClass = data.leaveClass;
		const leaveActiveClass = data.leaveActiveClass;
		const beforeLeave = data.beforeLeave;
		const leave = data.leave;
		const afterLeave = data.afterLeave;
		const leaveCancelled = data.leaveCancelled;
		const delayLeave = data.delayLeave;

		const expectsCSS = css !== false && !isIE9;
		const userWantsControl =
    leave &&
    // leave hook may be a bound method which exposes
    // the length of original fn as _length
    (leave._length || leave.length) > 1;

		var cb = el._leaveCb = once(function() {
			if (el.parentNode && el.parentNode._pending) {
				el.parentNode._pending[vnode.key] = null;
			}
			if (expectsCSS) {
				removeTransitionClass(el, leaveActiveClass);
			}
			if (cb.cancelled) {
				if (expectsCSS) {
					removeTransitionClass(el, leaveClass);
				}
				leaveCancelled && leaveCancelled(el);
			} else {
				rm();
				afterLeave && afterLeave(el);
			}
			el._leaveCb = null;
		});

		if (delayLeave) {
			delayLeave(performLeave);
		} else {
			performLeave();
		}

		function performLeave() {
			// the delayed leave may have already been cancelled
			if (cb.cancelled) {
				return;
			}
			// record leaving element
			if (!vnode.data.show) {
				(el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
			}
			beforeLeave && beforeLeave(el);
			if (expectsCSS) {
				addTransitionClass(el, leaveClass);
				addTransitionClass(el, leaveActiveClass);
				nextFrame(function() {
					removeTransitionClass(el, leaveClass);
					if (!cb.cancelled && !userWantsControl) {
						whenTransitionEnds(el, type, cb);
					}
				});
			}
			leave && leave(el, cb);
			if (!expectsCSS && !userWantsControl) {
				cb();
			}
		}
	}

	function resolveTransition(def$$1) {
		if (!def$$1) {
			return;
		}
		/* istanbul ignore else */
		if (typeof def$$1 === 'object') {
			const res = {};
			if (def$$1.css !== false) {
				extend(res, autoCssTransition(def$$1.name || 'v'));
			}
			extend(res, def$$1);
			return res;
		} else if (typeof def$$1 === 'string') {
			return autoCssTransition(def$$1);
		}
	}

	var autoCssTransition = cached(function(name) {
		return {
			enterClass: (name + '-enter'),
			leaveClass: (name + '-leave'),
			appearClass: (name + '-enter'),
			enterActiveClass: (name + '-enter-active'),
			leaveActiveClass: (name + '-leave-active'),
			appearActiveClass: (name + '-enter-active')
		};
	});

	function once(fn) {
		let called = false;
		return function() {
			if (!called) {
				called = true;
				fn();
			}
		};
	}

	const transition = inBrowser ? {
		create: function create(_, vnode) {
			if (!vnode.data.show) {
				enter(vnode);
			}
		},
		remove: function remove(vnode, rm) {
			/* istanbul ignore else */
			if (!vnode.data.show) {
				leave(vnode, rm);
			} else {
				rm();
			}
		}
	} : {};

	const platformModules = [
		attrs,
		klass,
		events,
		domProps,
		style,
		transition
	];

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	const modules = platformModules.concat(baseModules);

	const patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

	const modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

	/* istanbul ignore if */
	if (isIE9) {
		// http://www.matts411.com/post/internet-explorer-9-oninput/
		document.addEventListener('selectionchange', function() {
			const el = document.activeElement;
			if (el && el.vmodel) {
				trigger(el, 'input');
			}
		});
	}

	const model = {
		inserted: function inserted(el, binding, vnode) {
			{
				if (!modelableTagRE.test(vnode.tag)) {
					warn(
						'v-model is not supported on element type: <' + (vnode.tag) + '>. ' +
          'If you are working with contenteditable, it\'s recommended to ' +
          'wrap a library dedicated for that purpose inside a custom component.',
						vnode.context
					);
				}
			}
			if (vnode.tag === 'select') {
				const cb = function() {
					setSelected(el, binding, vnode.context);
				};
				cb();
				/* istanbul ignore if */
				if (isIE || isEdge) {
					setTimeout(cb, 0);
				}
			} else if (
				(vnode.tag === 'textarea' || el.type === 'text') &&
      !binding.modifiers.lazy
			) {
				if (!isAndroid) {
					el.addEventListener('compositionstart', onCompositionStart);
					el.addEventListener('compositionend', onCompositionEnd);
				}
				/* istanbul ignore if */
				if (isIE9) {
					el.vmodel = true;
				}
			}
		},
		componentUpdated: function componentUpdated(el, binding, vnode) {
			if (vnode.tag === 'select') {
				setSelected(el, binding, vnode.context);
				// in case the options rendered by v-for have changed,
				// it's possible that the value is out-of-sync with the rendered options.
				// detect such cases and filter out values that no longer has a matching
				// option in the DOM.
				const needReset = el.multiple
					? binding.value.some(function(v) { return hasNoMatchingOption(v, el.options); })
					: binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
				if (needReset) {
					trigger(el, 'change');
				}
			}
		}
	};

	function setSelected(el, binding, vm) {
		const value = binding.value;
		const isMultiple = el.multiple;
		if (isMultiple && !Array.isArray(value)) {
			'development' !== 'production' && warn(
				'<select multiple v-model="' + (binding.expression) + '"> ' +
      'expects an Array value for its binding, but got ' + (Object.prototype.toString.call(value).slice(8, -1)),
				vm
			);
			return;
		}
		let selected, option;
		for (let i = 0, l = el.options.length; i < l; i++) {
			option = el.options[i];
			if (isMultiple) {
				selected = looseIndexOf(value, getValue(option)) > -1;
				if (option.selected !== selected) {
					option.selected = selected;
				}
			} else {
				if (looseEqual(getValue(option), value)) {
					if (el.selectedIndex !== i) {
						el.selectedIndex = i;
					}
					return;
				}
			}
		}
		if (!isMultiple) {
			el.selectedIndex = -1;
		}
	}

	function hasNoMatchingOption(value, options) {
		for (let i = 0, l = options.length; i < l; i++) {
			if (looseEqual(getValue(options[i]), value)) {
				return false;
			}
		}
		return true;
	}

	function getValue(option) {
		return '_value' in option
			? option._value
			: option.value;
	}

	function onCompositionStart(e) {
		e.target.composing = true;
	}

	function onCompositionEnd(e) {
		e.target.composing = false;
		trigger(e.target, 'input');
	}

	function trigger(el, type) {
		const e = document.createEvent('HTMLEvents');
		e.initEvent(type, true, true);
		el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode(vnode) {
		return vnode.child && (!vnode.data || !vnode.data.transition)
			? locateNode(vnode.child._vnode)
			: vnode;
	}

	const show = {
		bind: function bind(el, ref, vnode) {
			const value = ref.value;

			vnode = locateNode(vnode);
			const transition = vnode.data && vnode.data.transition;
			if (value && transition && !isIE9) {
				enter(vnode);
			}
			const originalDisplay = el.style.display === 'none' ? '' : el.style.display;
			el.style.display = value ? originalDisplay : 'none';
			el.__vOriginalDisplay = originalDisplay;
		},
		update: function update(el, ref, vnode) {
			const value = ref.value;
			const oldValue = ref.oldValue;

			/* istanbul ignore if */
			if (value === oldValue) { return; }
			vnode = locateNode(vnode);
			const transition = vnode.data && vnode.data.transition;
			if (transition && !isIE9) {
				if (value) {
					enter(vnode);
					el.style.display = el.__vOriginalDisplay;
				} else {
					leave(vnode, function() {
						el.style.display = 'none';
					});
				}
			} else {
				el.style.display = value ? el.__vOriginalDisplay : 'none';
			}
		}
	};

	const platformDirectives = {
		model: model,
		show: show
	};

	/*  */

	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)

	const transitionProps = {
		name: String,
		appear: Boolean,
		css: Boolean,
		mode: String,
		type: String,
		enterClass: String,
		leaveClass: String,
		enterActiveClass: String,
		leaveActiveClass: String,
		appearClass: String,
		appearActiveClass: String
	};

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild(vnode) {
		const compOptions = vnode && vnode.componentOptions;
		if (compOptions && compOptions.Ctor.options.abstract) {
			return getRealChild(getFirstComponentChild(compOptions.children));
		} else {
			return vnode;
		}
	}

	function extractTransitionData(comp) {
		const data = {};
		const options = comp.$options;
		// props
		for (const key in options.propsData) {
			data[key] = comp[key];
		}
		// events.
		// extract listeners and pass them directly to the transition methods
		const listeners = options._parentListeners;
		for (const key$1 in listeners) {
			data[camelize(key$1)] = listeners[key$1].fn;
		}
		return data;
	}

	function placeholder(h, rawChild) {
		return /\d-keep-alive$/.test(rawChild.tag)
			? h('keep-alive')
			: null;
	}

	function hasParentTransition(vnode) {
		while ((vnode = vnode.parent)) {
			if (vnode.data.transition) {
				return true;
			}
		}
	}

	const Transition = {
		name: 'transition',
		props: transitionProps,
		abstract: true,
		render: function render(h) {
			const this$1 = this;

			let children = this.$slots.default;
			if (!children) {
				return;
			}

			// filter out text nodes (possible whitespaces)
			children = children.filter(function(c) { return c.tag; });
			/* istanbul ignore if */
			if (!children.length) {
				return;
			}

			// warn multiple elements
			if ('development' !== 'production' && children.length > 1) {
				warn(
					'<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
					this.$parent
				);
			}

			const mode = this.mode;

			// warn invalid mode
			if ('development' !== 'production' &&
        mode && mode !== 'in-out' && mode !== 'out-in') {
				warn(
					'invalid <transition> mode: ' + mode,
					this.$parent
				);
			}

			const rawChild = children[0];

			// if this is a component root node and the component's
			// parent container node also has transition, skip.
			if (hasParentTransition(this.$vnode)) {
				return rawChild;
			}

			// apply transition data to child
			// use getRealChild() to ignore abstract components e.g. keep-alive
			const child = getRealChild(rawChild);
			/* istanbul ignore if */
			if (!child) {
				return rawChild;
			}

			if (this._leaving) {
				return placeholder(h, rawChild);
			}

			const key = child.key = child.key == null || child.isStatic
				? ('__v' + (child.tag + this._uid) + '__')
				: child.key;
			const data = (child.data || (child.data = {})).transition = extractTransitionData(this);
			const oldRawChild = this._vnode;
			const oldChild = getRealChild(oldRawChild);

			// mark v-show
			// so that the transition module can hand over the control to the directive
			if (child.data.directives && child.data.directives.some(function(d) { return d.name === 'show'; })) {
				child.data.show = true;
			}

			if (oldChild && oldChild.data && oldChild.key !== key) {
				// replace old child transition data with fresh one
				// important for dynamic transitions!
				const oldData = oldChild.data.transition = extend({}, data);

				// handle transition mode
				if (mode === 'out-in') {
					// return placeholder node and queue update when leave finishes
					this._leaving = true;
					mergeVNodeHook(oldData, 'afterLeave', function() {
						this$1._leaving = false;
						this$1.$forceUpdate();
					}, key);
					return placeholder(h, rawChild);
				} else if (mode === 'in-out') {
					let delayedLeave;
					const performLeave = function() { delayedLeave(); };
					mergeVNodeHook(data, 'afterEnter', performLeave, key);
					mergeVNodeHook(data, 'enterCancelled', performLeave, key);
					mergeVNodeHook(oldData, 'delayLeave', function(leave) {
						delayedLeave = leave;
					}, key);
				}
			}

			return rawChild;
		}
	};

	/*  */

	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.

	const props = extend({
		tag: String,
		moveClass: String
	}, transitionProps);

	delete props.mode;

	const TransitionGroup = {
		props: props,

		render: function render(h) {
			const tag = this.tag || this.$vnode.data.tag || 'span';
			const map = Object.create(null);
			const prevChildren = this.prevChildren = this.children;
			const rawChildren = this.$slots.default || [];
			const children = this.children = [];
			const transitionData = extractTransitionData(this);

			for (let i = 0; i < rawChildren.length; i++) {
				const c = rawChildren[i];
				if (c.tag) {
					if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
						children.push(c);
						map[c.key] = c
						;(c.data || (c.data = {})).transition = transitionData;
					} else {
						const opts = c.componentOptions;
						const name = opts
							? (opts.Ctor.options.name || opts.tag)
							: c.tag;
						warn(('<transition-group> children must be keyed: <' + name + '>'));
					}
				}
			}

			if (prevChildren) {
				const kept = [];
				const removed = [];
				for (let i$1 = 0; i$1 < prevChildren.length; i$1++) {
					const c$1 = prevChildren[i$1];
					c$1.data.transition = transitionData;
					c$1.data.pos = c$1.elm.getBoundingClientRect();
					if (map[c$1.key]) {
						kept.push(c$1);
					} else {
						removed.push(c$1);
					}
				}
				this.kept = h(tag, null, kept);
				this.removed = removed;
			}

			return h(tag, null, children);
		},

		beforeUpdate: function beforeUpdate() {
			// force removing pass
			this.__patch__(
				this._vnode,
				this.kept,
				false, // hydrating
				true // removeOnly (!important, avoids unnecessary moves)
			);
			this._vnode = this.kept;
		},

		updated: function updated() {
			const children = this.prevChildren;
			const moveClass = this.moveClass || (this.name + '-move');
			if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
				return;
			}

			// we divide the work into three loops to avoid mixing DOM reads and writes
			// in each iteration - which helps prevent layout thrashing.
			children.forEach(callPendingCbs);
			children.forEach(recordPosition);
			children.forEach(applyTranslation);

			// force reflow to put everything in position
    var f = document.body.offsetHeight; // eslint-disable-line

			children.forEach(function(c) {
				if (c.data.moved) {
					const el = c.elm;
					const s = el.style;
					addTransitionClass(el, moveClass);
					s.transform = s.WebkitTransform = s.transitionDuration = '';
					el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
						if (!e || /transform$/.test(e.propertyName)) {
							el.removeEventListener(transitionEndEvent, cb);
							el._moveCb = null;
							removeTransitionClass(el, moveClass);
						}
					});
				}
			});
		},

		methods: {
			hasMove: function hasMove(el, moveClass) {
				/* istanbul ignore if */
				if (!hasTransition) {
					return false;
				}
				if (this._hasMove != null) {
					return this._hasMove;
				}
				addTransitionClass(el, moveClass);
				const info = getTransitionInfo(el);
				removeTransitionClass(el, moveClass);
				return (this._hasMove = info.hasTransform);
			}
		}
	};

	function callPendingCbs(c) {
		/* istanbul ignore if */
		if (c.elm._moveCb) {
			c.elm._moveCb();
		}
		/* istanbul ignore if */
		if (c.elm._enterCb) {
			c.elm._enterCb();
		}
	}

	function recordPosition(c) {
		c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation(c) {
		const oldPos = c.data.pos;
		const newPos = c.data.newPos;
		const dx = oldPos.left - newPos.left;
		const dy = oldPos.top - newPos.top;
		if (dx || dy) {
			c.data.moved = true;
			const s = c.elm.style;
			s.transform = s.WebkitTransform = 'translate(' + dx + 'px,' + dy + 'px)';
			s.transitionDuration = '0s';
		}
	}

	const platformComponents = {
		Transition: Transition,
		TransitionGroup: TransitionGroup
	};

	/*  */

	// install platform specific utils
	Vue$2.config.isUnknownElement = isUnknownElement;
	Vue$2.config.isReservedTag = isReservedTag;
	Vue$2.config.getTagNamespace = getTagNamespace;
	Vue$2.config.mustUseProp = mustUseProp;

	// install platform runtime directives & components
	extend(Vue$2.options.directives, platformDirectives);
	extend(Vue$2.options.components, platformComponents);

	// install platform patch function
	Vue$2.prototype.__patch__ = config._isServer ? noop : patch$1;

	// wrap mount
	Vue$2.prototype.$mount = function(
		el,
		hydrating
	) {
		el = el && !config._isServer ? query(el) : undefined;
		return this._mount(el, hydrating);
	};

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function() {
		if (config.devtools) {
			if (devtools) {
				devtools.emit('init', Vue$2);
			} else if (
				'development' !== 'production' &&
      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
			) {
				console.log(
					'Download the Vue Devtools for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
				);
			}
		}
	}, 0);

	/*  */

	// check whether current browser encodes a char inside attribute values
	function shouldDecode(content, encoded) {
		const div = document.createElement('div');
		div.innerHTML = '<div a="' + content + '">';
		return div.innerHTML.indexOf(encoded) > 0;
	}

	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	const shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

	/*  */

	const decoder = document.createElement('div');

	function decode(html) {
		decoder.innerHTML = html;
		return decoder.textContent;
	}

	/**
 * Not type-checking this file because it's mostly vendor code.
 */

	/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

	// Regular Expressions for parsing tags and attributes
	const singleAttrIdentifier = /([^\s"'<>/=]+)/;
	const singleAttrAssign = /(?:=)/;
	const singleAttrValues = [
		// attr value double quotes
		/"([^"]*)"+/.source,
		// attr value, single quotes
		/'([^']*)'+/.source,
		// attr value, no quotes
		/([^\s"'=<>`]+)/.source
	];
	const attribute = new RegExp(
		'^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
	);

	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	const ncname = '[a-zA-Z_][\\w\\-\\.]*';
	const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
	const startTagOpen = new RegExp('^<' + qnameCapture);
	const startTagClose = /^\s*(\/?)>/;
	const endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
	const doctype = /^<!DOCTYPE [^>]+>/i;
	const comment = /^<!--/;
	const conditionalComment = /^<!\[/;

	let IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function(m, g) {
		IS_REGEX_CAPTURING_BROKEN = g === '';
	});

	// Special Elements (can contain anything)
	const isScriptOrStyle = makeMap('script,style', true);
	const hasLang = function(attr) { return attr.name === 'lang' && attr.value !== 'html'; };
	const isSpecialTag = function(tag, isSFC, stack) {
		if (isScriptOrStyle(tag)) {
			return true;
		}
		// top-level template that has a pre-processor
		if (
			isSFC &&
    tag === 'template' &&
    stack.length === 1 &&
    stack[0].attrs.some(hasLang)
		) {
			return true;
		}
		return false;
	};

	const reCache = {};

	const ltRE = /&lt;/g;
	const gtRE = /&gt;/g;
	const nlRE = /&#10;/g;
	const ampRE = /&amp;/g;
	const quoteRE = /&quot;/g;

	function decodeAttr(value, shouldDecodeNewlines) {
		if (shouldDecodeNewlines) {
			value = value.replace(nlRE, '\n');
		}
		return value
			.replace(ltRE, '<')
			.replace(gtRE, '>')
			.replace(ampRE, '&')
			.replace(quoteRE, '"');
	}

	function parseHTML(html, options) {
		const stack = [];
		const expectHTML = options.expectHTML;
		const isUnaryTag$$1 = options.isUnaryTag || no;
		let index = 0;
		let last, lastTag;
		while (html) {
			last = html;
			// Make sure we're not in a script or style element
			if (!lastTag || !isSpecialTag(lastTag, options.sfc, stack)) {
				let textEnd = html.indexOf('<');
				if (textEnd === 0) {
					// Comment:
					if (comment.test(html)) {
						const commentEnd = html.indexOf('-->');

						if (commentEnd >= 0) {
							advance(commentEnd + 3);
							continue;
						}
					}

					// http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
					if (conditionalComment.test(html)) {
						const conditionalEnd = html.indexOf(']>');

						if (conditionalEnd >= 0) {
							advance(conditionalEnd + 2);
							continue;
						}
					}

					// Doctype:
					const doctypeMatch = html.match(doctype);
					if (doctypeMatch) {
						advance(doctypeMatch[0].length);
						continue;
					}

					// End tag:
					const endTagMatch = html.match(endTag);
					if (endTagMatch) {
						const curIndex = index;
						advance(endTagMatch[0].length);
						parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
						continue;
					}

					// Start tag:
					const startTagMatch = parseStartTag();
					if (startTagMatch) {
						handleStartTag(startTagMatch);
						continue;
					}
				}

				let text = void 0; let rest$1 = void 0; let next = void 0;
				if (textEnd > 0) {
					rest$1 = html.slice(textEnd);
					while (
						!endTag.test(rest$1) &&
          !startTagOpen.test(rest$1) &&
          !comment.test(rest$1) &&
          !conditionalComment.test(rest$1)
					) {
						// < in plain text, be forgiving and treat it as text
						next = rest$1.indexOf('<', 1);
						if (next < 0) { break; }
						textEnd += next;
						rest$1 = html.slice(textEnd);
					}
					text = html.substring(0, textEnd);
					advance(textEnd);
				}

				if (textEnd < 0) {
					text = html;
					html = '';
				}

				if (options.chars && text) {
					options.chars(text);
				}
			} else {
				var stackedTag = lastTag.toLowerCase();
				const reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
				var endTagLength = 0;
				const rest = html.replace(reStackedTag, function(all, text, endTag) {
					endTagLength = endTag.length;
					if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
						text = text
							.replace(/<!--([\s\S]*?)-->/g, '$1')
							.replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
					}
					if (options.chars) {
						options.chars(text);
					}
					return '';
				});
				index += html.length - rest.length;
				html = rest;
				parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
			}

			if (html === last && options.chars) {
				options.chars(html);
				break;
			}
		}

		// Clean up any remaining tags
		parseEndTag();

		function advance(n) {
			index += n;
			html = html.substring(n);
		}

		function parseStartTag() {
			const start = html.match(startTagOpen);
			if (start) {
				const match = {
					tagName: start[1],
					attrs: [],
					start: index
				};
				advance(start[0].length);
				let end, attr;
				while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
					advance(attr[0].length);
					match.attrs.push(attr);
				}
				if (end) {
					match.unarySlash = end[1];
					advance(end[0].length);
					match.end = index;
					return match;
				}
			}
		}

		function handleStartTag(match) {
			const tagName = match.tagName;
			let unarySlash = match.unarySlash;

			if (expectHTML) {
				if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
					parseEndTag('', lastTag);
				}
				if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
					parseEndTag('', tagName);
				}
			}

			const unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

			const l = match.attrs.length;
			const attrs = new Array(l);
			for (let i = 0; i < l; i++) {
				const args = match.attrs[i];
				// hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
				if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
					if (args[3] === '') { delete args[3]; }
					if (args[4] === '') { delete args[4]; }
					if (args[5] === '') { delete args[5]; }
				}
				const value = args[3] || args[4] || args[5] || '';
				attrs[i] = {
					name: args[1],
					value: decodeAttr(
						value,
						options.shouldDecodeNewlines
					)
				};
			}

			if (!unary) {
				stack.push({ tag: tagName, attrs: attrs });
				lastTag = tagName;
				unarySlash = '';
			}

			if (options.start) {
				options.start(tagName, attrs, unary, match.start, match.end);
			}
		}

		function parseEndTag(tag, tagName, start, end) {
			let pos;
			if (start == null) { start = index; }
			if (end == null) { end = index; }

			// Find the closest opened tag of the same type
			if (tagName) {
				const needle = tagName.toLowerCase();
				for (pos = stack.length - 1; pos >= 0; pos--) {
					if (stack[pos].tag.toLowerCase() === needle) {
						break;
					}
				}
			} else {
				// If no tag name is provided, clean shop
				pos = 0;
			}

			if (pos >= 0) {
				// Close all the open elements, up the stack
				for (let i = stack.length - 1; i >= pos; i--) {
					if (options.end) {
						options.end(stack[i].tag, start, end);
					}
				}

				// Remove the open elements from the stack
				stack.length = pos;
				lastTag = pos && stack[pos - 1].tag;
			} else if (tagName.toLowerCase() === 'br') {
				if (options.start) {
					options.start(tagName, [], true, start, end);
				}
			} else if (tagName.toLowerCase() === 'p') {
				if (options.start) {
					options.start(tagName, [], false, start, end);
				}
				if (options.end) {
					options.end(tagName, start, end);
				}
			}
		}
	}

	/*  */

	function parseFilters(exp) {
		let inSingle = false;
		let inDouble = false;
		let curly = 0;
		let square = 0;
		let paren = 0;
		let lastFilterIndex = 0;
		let c, prev, i, expression, filters;

		for (i = 0; i < exp.length; i++) {
			prev = c;
			c = exp.charCodeAt(i);
			if (inSingle) {
				// check single quote
				if (c === 0x27 && prev !== 0x5C) { inSingle = !inSingle; }
			} else if (inDouble) {
				// check double quote
				if (c === 0x22 && prev !== 0x5C) { inDouble = !inDouble; }
			} else if (
				c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
			) {
				if (expression === undefined) {
					// first filter, end of expression
					lastFilterIndex = i + 1;
					expression = exp.slice(0, i).trim();
				} else {
					pushFilter();
				}
			} else {
				switch (c) {
				case 0x22: inDouble = true; break; // "
				case 0x27: inSingle = true; break; // '
				case 0x28: paren++; break; // (
				case 0x29: paren--; break; // )
				case 0x5B: square++; break; // [
				case 0x5D: square--; break; // ]
				case 0x7B: curly++; break; // {
				case 0x7D: curly--; break; // }
				}
			}
		}

		if (expression === undefined) {
			expression = exp.slice(0, i).trim();
		} else if (lastFilterIndex !== 0) {
			pushFilter();
		}

		function pushFilter() {
			(filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
			lastFilterIndex = i + 1;
		}

		if (filters) {
			for (i = 0; i < filters.length; i++) {
				expression = wrapFilter(expression, filters[i]);
			}
		}

		return expression;
	}

	function wrapFilter(exp, filter) {
		const i = filter.indexOf('(');
		if (i < 0) {
			// _f: resolveFilter
			return ('_f("' + filter + '")(' + exp + ')');
		} else {
			const name = filter.slice(0, i);
			const args = filter.slice(i + 1);
			return ('_f("' + name + '")(' + exp + ',' + args);
		}
	}

	/*  */

	const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	const regexEscapeRE = /[-.*+?^${}()|[\]/\\]/g;

	const buildRegex = cached(function(delimiters) {
		const open = delimiters[0].replace(regexEscapeRE, '\\$&');
		const close = delimiters[1].replace(regexEscapeRE, '\\$&');
		return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
	});

	function parseText(
		text,
		delimiters
	) {
		const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
		if (!tagRE.test(text)) {
			return;
		}
		const tokens = [];
		let lastIndex = tagRE.lastIndex = 0;
		let match, index;
		while ((match = tagRE.exec(text))) {
			index = match.index;
			// push text token
			if (index > lastIndex) {
				tokens.push(JSON.stringify(text.slice(lastIndex, index)));
			}
			// tag token
			const exp = parseFilters(match[1].trim());
			tokens.push(('_s(' + exp + ')'));
			lastIndex = index + match[0].length;
		}
		if (lastIndex < text.length) {
			tokens.push(JSON.stringify(text.slice(lastIndex)));
		}
		return tokens.join('+');
	}

	/*  */

	function baseWarn(msg) {
		console.error(('[Vue parser]: ' + msg));
	}

	function pluckModuleFunction(
		modules,
		key
	) {
		return modules
			? modules.map(function(m) { return m[key]; }).filter(function(_) { return _; })
			: [];
	}

	function addProp(el, name, value) {
		(el.props || (el.props = [])).push({ name: name, value: value });
	}

	function addAttr(el, name, value) {
		(el.attrs || (el.attrs = [])).push({ name: name, value: value });
	}

	function addDirective(
		el,
		name,
		rawName,
		value,
		arg,
		modifiers
	) {
		(el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	}

	function addHandler(
		el,
		name,
		value,
		modifiers,
		important
	) {
		// check capture modifier
		if (modifiers && modifiers.capture) {
			delete modifiers.capture;
			name = '!' + name; // mark the event as captured
		}
		let events;
		if (modifiers && modifiers.native) {
			delete modifiers.native;
			events = el.nativeEvents || (el.nativeEvents = {});
		} else {
			events = el.events || (el.events = {});
		}
		const newHandler = { value: value, modifiers: modifiers };
		const handlers = events[name];
		/* istanbul ignore if */
		if (Array.isArray(handlers)) {
			important ? handlers.unshift(newHandler) : handlers.push(newHandler);
		} else if (handlers) {
			events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
		} else {
			events[name] = newHandler;
		}
	}

	function getBindingAttr(
		el,
		name,
		getStatic
	) {
		const dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
		if (dynamicValue != null) {
			return dynamicValue;
		} else if (getStatic !== false) {
			const staticValue = getAndRemoveAttr(el, name);
			if (staticValue != null) {
				return JSON.stringify(staticValue);
			}
		}
	}

	function getAndRemoveAttr(el, name) {
		let val;
		if ((val = el.attrsMap[name]) != null) {
			const list = el.attrsList;
			for (let i = 0, l = list.length; i < l; i++) {
				if (list[i].name === name) {
					list.splice(i, 1);
					break;
				}
			}
		}
		return val;
	}

	/*  */

	const dirRE = /^v-|^@|^:/;
	const forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	const forIteratorRE = /\(([^,]*),([^,]*)(?:,([^,]*))?\)/;
	const bindRE = /^:|^v-bind:/;
	const onRE = /^@|^v-on:/;
	const argRE = /:(.*)$/;
	const modifierRE = /\.[^.]+/g;
	const specialNewlineRE = /\u2028|\u2029/g;

	const decodeHTMLCached = cached(decode);

	// configurable state
	let warn$1;
	let platformGetTagNamespace;
	let platformMustUseProp;
	let platformIsPreTag;
	let preTransforms;
	let transforms;
	let postTransforms;
	let delimiters;

	/**
 * Convert HTML string to AST.
 */
	function parse(
		template,
		options
	) {
		warn$1 = options.warn || baseWarn;
		platformGetTagNamespace = options.getTagNamespace || no;
		platformMustUseProp = options.mustUseProp || no;
		platformIsPreTag = options.isPreTag || no;
		preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
		transforms = pluckModuleFunction(options.modules, 'transformNode');
		postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
		delimiters = options.delimiters;
		const stack = [];
		const preserveWhitespace = options.preserveWhitespace !== false;
		let root;
		let currentParent;
		let inVPre = false;
		let inPre = false;
		let warned = false;
		parseHTML(template, {
			expectHTML: options.expectHTML,
			isUnaryTag: options.isUnaryTag,
			shouldDecodeNewlines: options.shouldDecodeNewlines,
			start: function start(tag, attrs, unary) {
				// check namespace.
				// inherit parent ns if there is one
				const ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

				// handle IE svg bug
				/* istanbul ignore if */
				if (options.isIE && ns === 'svg') {
					attrs = guardIESVGBug(attrs);
				}

				const element = {
					type: 1,
					tag: tag,
					attrsList: attrs,
					attrsMap: makeAttrsMap(attrs, options.isIE),
					parent: currentParent,
					children: []
				};
				if (ns) {
					element.ns = ns;
				}

				if ('client' !== 'server' && isForbiddenTag(element)) {
					element.forbidden = true;
					'development' !== 'production' && warn$1(
						'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          '<' + tag + '>.'
					);
				}

				// apply pre-transforms
				for (let i = 0; i < preTransforms.length; i++) {
					preTransforms[i](element, options);
				}

				if (!inVPre) {
					processPre(element);
					if (element.pre) {
						inVPre = true;
					}
				}
				if (platformIsPreTag(element.tag)) {
					inPre = true;
				}
				if (inVPre) {
					processRawAttrs(element);
				} else {
					processFor(element);
					processIf(element);
					processOnce(element);
					processKey(element);

					// determine whether this is a plain element after
					// removing structural attributes
					element.plain = !element.key && !attrs.length;

					processRef(element);
					processSlot(element);
					processComponent(element);
					for (let i$1 = 0; i$1 < transforms.length; i$1++) {
						transforms[i$1](element, options);
					}
					processAttrs(element);
				}

				function checkRootConstraints(el) {
					if ('development' !== 'production' && !warned) {
						if (el.tag === 'slot' || el.tag === 'template') {
							warned = true;
							warn$1(
								'Cannot use <' + (el.tag) + '> as component root element because it may ' +
              'contain multiple nodes:\n' + template
							);
						}
						if (el.attrsMap.hasOwnProperty('v-for')) {
							warned = true;
							warn$1(
								'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements:\n' + template
							);
						}
					}
				}

				// tree management
				if (!root) {
					root = element;
					checkRootConstraints(root);
				} else if (!stack.length) {
					// allow 2 root elements with v-if and v-else
					if (root.if && element.else) {
						checkRootConstraints(element);
						root.elseBlock = element;
					} else if ('development' !== 'production' && !warned) {
						warned = true;
						warn$1(
							('Component template should contain exactly one root element:\n\n' + template)
						);
					}
				}
				if (currentParent && !element.forbidden) {
					if (element.else) {
						processElse(element, currentParent);
					} else {
						currentParent.children.push(element);
						element.parent = currentParent;
					}
				}
				if (!unary) {
					currentParent = element;
					stack.push(element);
				}
				// apply post-transforms
				for (let i$2 = 0; i$2 < postTransforms.length; i$2++) {
					postTransforms[i$2](element, options);
				}
			},

			end: function end() {
				// remove trailing whitespace
				const element = stack[stack.length - 1];
				const lastNode = element.children[element.children.length - 1];
				if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
					element.children.pop();
				}
				// pop stack
				stack.length -= 1;
				currentParent = stack[stack.length - 1];
				// check pre state
				if (element.pre) {
					inVPre = false;
				}
				if (platformIsPreTag(element.tag)) {
					inPre = false;
				}
			},

			chars: function chars(text) {
				if (!currentParent) {
					if ('development' !== 'production' && !warned && text === template) {
						warned = true;
						warn$1(
							'Component template requires a root element, rather than just text:\n\n' + template
						);
					}
					return;
				}
				text = inPre || text.trim()
					? decodeHTMLCached(text)
				// only preserve whitespace if its not right after a starting tag
					: preserveWhitespace && currentParent.children.length ? ' ' : '';
				if (text) {
					let expression;
					if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
						currentParent.children.push({
							type: 2,
							expression: expression,
							text: text
						});
					} else {
						// #3895 special character
						text = text.replace(specialNewlineRE, '');
						currentParent.children.push({
							type: 3,
							text: text
						});
					}
				}
			}
		});
		return root;
	}

	function processPre(el) {
		if (getAndRemoveAttr(el, 'v-pre') != null) {
			el.pre = true;
		}
	}

	function processRawAttrs(el) {
		const l = el.attrsList.length;
		if (l) {
			const attrs = el.attrs = new Array(l);
			for (let i = 0; i < l; i++) {
				attrs[i] = {
					name: el.attrsList[i].name,
					value: JSON.stringify(el.attrsList[i].value)
				};
			}
		} else if (!el.pre) {
			// non root node in pre blocks with no attributes
			el.plain = true;
		}
	}

	function processKey(el) {
		const exp = getBindingAttr(el, 'key');
		if (exp) {
			if ('development' !== 'production' && el.tag === 'template') {
				warn$1('<template> cannot be keyed. Place the key on real elements instead.');
			}
			el.key = exp;
		}
	}

	function processRef(el) {
		const ref = getBindingAttr(el, 'ref');
		if (ref) {
			el.ref = ref;
			el.refInFor = checkInFor(el);
		}
	}

	function processFor(el) {
		let exp;
		if ((exp = getAndRemoveAttr(el, 'v-for'))) {
			const inMatch = exp.match(forAliasRE);
			if (!inMatch) {
				'development' !== 'production' && warn$1(
					('Invalid v-for expression: ' + exp)
				);
				return;
			}
			el.for = inMatch[2].trim();
			const alias = inMatch[1].trim();
			const iteratorMatch = alias.match(forIteratorRE);
			if (iteratorMatch) {
				el.alias = iteratorMatch[1].trim();
				el.iterator1 = iteratorMatch[2].trim();
				if (iteratorMatch[3]) {
					el.iterator2 = iteratorMatch[3].trim();
				}
			} else {
				el.alias = alias;
			}
		}
	}

	function processIf(el) {
		const exp = getAndRemoveAttr(el, 'v-if');
		if (exp) {
			el.if = exp;
		}
		if (getAndRemoveAttr(el, 'v-else') != null) {
			el.else = true;
		}
	}

	function processElse(el, parent) {
		const prev = findPrevElement(parent.children);
		if (prev && prev.if) {
			prev.elseBlock = el;
		} else {
			warn$1(
				('v-else used on element <' + (el.tag) + '> without corresponding v-if.')
			);
		}
	}

	function processOnce(el) {
		const once = getAndRemoveAttr(el, 'v-once');
		if (once != null) {
			el.once = true;
		}
	}

	function processSlot(el) {
		if (el.tag === 'slot') {
			el.slotName = getBindingAttr(el, 'name');
		} else {
			const slotTarget = getBindingAttr(el, 'slot');
			if (slotTarget) {
				el.slotTarget = slotTarget;
			}
		}
	}

	function processComponent(el) {
		let binding;
		if ((binding = getBindingAttr(el, 'is'))) {
			el.component = binding;
		}
		if (getAndRemoveAttr(el, 'inline-template') != null) {
			el.inlineTemplate = true;
		}
	}

	function processAttrs(el) {
		const list = el.attrsList;
		let i, l, name, rawName, value, arg, modifiers, isProp;
		for (i = 0, l = list.length; i < l; i++) {
			name = rawName = list[i].name;
			value = list[i].value;
			if (dirRE.test(name)) {
				// mark element as dynamic
				el.hasBindings = true;
				// modifiers
				modifiers = parseModifiers(name);
				if (modifiers) {
					name = name.replace(modifierRE, '');
				}
				if (bindRE.test(name)) { // v-bind
					name = name.replace(bindRE, '');
					if (modifiers && modifiers.prop) {
						isProp = true;
						name = camelize(name);
						if (name === 'innerHtml') { name = 'innerHTML'; }
					}
					if (isProp || platformMustUseProp(name)) {
						addProp(el, name, value);
					} else {
						addAttr(el, name, value);
					}
				} else if (onRE.test(name)) { // v-on
					name = name.replace(onRE, '');
					addHandler(el, name, value, modifiers);
				} else { // normal directives
					name = name.replace(dirRE, '');
					// parse arg
					const argMatch = name.match(argRE);
					if (argMatch && (arg = argMatch[1])) {
						name = name.slice(0, -(arg.length + 1));
					}
					addDirective(el, name, rawName, value, arg, modifiers);
					if ('development' !== 'production' && name === 'model') {
						checkForAliasModel(el, value);
					}
				}
			} else {
				// literal attribute
				{
					const expression = parseText(value, delimiters);
					if (expression) {
						warn$1(
							name + '="' + value + '": ' +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
						);
					}
				}
				addAttr(el, name, JSON.stringify(value));
			}
		}
	}

	function checkInFor(el) {
		let parent = el;
		while (parent) {
			if (parent.for !== undefined) {
				return true;
			}
			parent = parent.parent;
		}
		return false;
	}

	function parseModifiers(name) {
		const match = name.match(modifierRE);
		if (match) {
			const ret = {};
			match.forEach(function(m) { ret[m.slice(1)] = true; });
			return ret;
		}
	}

	function makeAttrsMap(attrs, isIE) {
		const map = {};
		for (let i = 0, l = attrs.length; i < l; i++) {
			if ('development' !== 'production' && map[attrs[i].name] && !isIE) {
				warn$1('duplicate attribute: ' + attrs[i].name);
			}
			map[attrs[i].name] = attrs[i].value;
		}
		return map;
	}

	function findPrevElement(children) {
		let i = children.length;
		while (i--) {
			if (children[i].tag) { return children[i]; }
		}
	}

	function isForbiddenTag(el) {
		return (
			el.tag === 'style' ||
    (el.tag === 'script' && (
    	!el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
		);
	}

	const ieNSBug = /^xmlns:NS\d+/;
	const ieNSPrefix = /^NS\d+:/;

	/* istanbul ignore next */
	function guardIESVGBug(attrs) {
		const res = [];
		for (let i = 0; i < attrs.length; i++) {
			const attr = attrs[i];
			if (!ieNSBug.test(attr.name)) {
				attr.name = attr.name.replace(ieNSPrefix, '');
				res.push(attr);
			}
		}
		return res;
	}

	function checkForAliasModel(el, value) {
		let _el = el;
		while (_el) {
			if (_el.for && _el.alias === value) {
				warn$1(
					'<' + (el.tag) + ' v-model="' + value + '">: ' +
        'You are binding v-model directly to a v-for iteration alias. ' +
        'This will not be able to modify the v-for source array because ' +
        'writing to the alias is like modifying a function local variable. ' +
        'Consider using an array of objects and use v-model on an object property instead.'
				);
			}
			_el = _el.parent;
		}
	}

	/*  */

	let isStaticKey;
	let isPlatformReservedTag;

	const genStaticKeysCached = cached(genStaticKeys$1);

	/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
	function optimize(root, options) {
		if (!root) { return; }
		isStaticKey = genStaticKeysCached(options.staticKeys || '');
		isPlatformReservedTag = options.isReservedTag || function() { return false; };
		// first pass: mark all non-static nodes.
		markStatic(root);
		// second pass: mark static roots.
		markStaticRoots(root, false);
	}

	function genStaticKeys$1(keys) {
		return makeMap(
			'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
		);
	}

	function markStatic(node) {
		node.static = isStatic(node);
		if (node.type === 1) {
			for (let i = 0, l = node.children.length; i < l; i++) {
				const child = node.children[i];
				markStatic(child);
				if (!child.static) {
					node.static = false;
				}
			}
		}
	}

	function markStaticRoots(node, isInFor) {
		if (node.type === 1) {
			if (node.static || node.once) {
				node.staticInFor = isInFor;
			}
			if (node.static) {
				node.staticRoot = true;
				return;
			}
			if (node.children) {
				for (let i = 0, l = node.children.length; i < l; i++) {
					markStaticRoots(node.children[i], isInFor || !!node.for);
				}
			}
		}
	}

	function isStatic(node) {
		if (node.type === 2) { // expression
			return false;
		}
		if (node.type === 3) { // text
			return true;
		}
		return !!(node.pre || (
			!node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
		));
	}

	function isDirectChildOfTemplateFor(node) {
		while (node.parent) {
			node = node.parent;
			if (node.tag !== 'template') {
				return false;
			}
			if (node.for) {
				return true;
			}
		}
		return false;
	}

	/*  */

	const simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

	// keyCode aliases
	const keyCodes = {
		esc: 27,
		tab: 9,
		enter: 13,
		space: 32,
		up: 38,
		left: 37,
		right: 39,
		down: 40,
		delete: [8, 46]
	};

	const modifierCode = {
		stop: '$event.stopPropagation();',
		prevent: '$event.preventDefault();',
		self: 'if($event.target !== $event.currentTarget)return;'
	};

	function genHandlers(events, native) {
		let res = native ? 'nativeOn:{' : 'on:{';
		for (const name in events) {
			res += '"' + name + '":' + (genHandler(events[name])) + ',';
		}
		return res.slice(0, -1) + '}';
	}

	function genHandler(
		handler
	) {
		if (!handler) {
			return 'function(){}';
		} else if (Array.isArray(handler)) {
			return ('[' + (handler.map(genHandler).join(',')) + ']');
		} else if (!handler.modifiers) {
			return simplePathRE.test(handler.value)
				? handler.value
				: ('function($event){' + (handler.value) + '}');
		} else {
			let code = '';
			const keys = [];
			for (const key in handler.modifiers) {
				if (modifierCode[key]) {
					code += modifierCode[key];
				} else {
					keys.push(key);
				}
			}
			if (keys.length) {
				code = genKeyFilter(keys) + code;
			}
			const handlerCode = simplePathRE.test(handler.value)
				? handler.value + '($event)'
				: handler.value;
			return 'function($event){' + code + handlerCode + '}';
		}
	}

	function genKeyFilter(keys) {
		const code = keys.length === 1
			? normalizeKeyCode(keys[0])
			: Array.prototype.concat.apply([], keys.map(normalizeKeyCode));
		if (Array.isArray(code)) {
			return ('if(' + (code.map(function(c) { return ('$event.keyCode!==' + c); }).join('&&')) + ')return;');
		} else {
			return ('if($event.keyCode!==' + code + ')return;');
		}
	}

	function normalizeKeyCode(key) {
		return (
			parseInt(key, 10) || // number keyCode
    keyCodes[key] || // built-in alias
    ('_k(' + (JSON.stringify(key)) + ')') // custom alias
		);
	}

	/*  */

	function bind$2(el, dir) {
		el.wrapData = function(code) {
			return ('_b(' + code + ',' + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ')');
		};
	}

	const baseDirectives = {
		bind: bind$2,
		cloak: noop
	};

	/*  */

	// configurable state
	let warn$2;
	let transforms$1;
	let dataGenFns;
	let platformDirectives$1;
	let staticRenderFns;
	let onceCount;
	let currentOptions;

	function generate(
		ast,
		options
	) {
		// save previous staticRenderFns so generate calls can be nested
		const prevStaticRenderFns = staticRenderFns;
		const currentStaticRenderFns = staticRenderFns = [];
		const prevOnceCount = onceCount;
		onceCount = 0;
		currentOptions = options;
		warn$2 = options.warn || baseWarn;
		transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
		dataGenFns = pluckModuleFunction(options.modules, 'genData');
		platformDirectives$1 = options.directives || {};
		const code = ast ? genElement(ast) : '_h("div")';
		staticRenderFns = prevStaticRenderFns;
		onceCount = prevOnceCount;
		return {
			render: ('with(this){return ' + code + '}'),
			staticRenderFns: currentStaticRenderFns
		};
	}

	function genElement(el) {
		if (el.staticRoot && !el.staticProcessed) {
			return genStatic(el);
		} else if (el.once && !el.onceProcessed) {
			return genOnce(el);
		} else if (el.for && !el.forProcessed) {
			return genFor(el);
		} else if (el.if && !el.ifProcessed) {
			return genIf(el);
		} else if (el.tag === 'template' && !el.slotTarget) {
			return genChildren(el) || 'void 0';
		} else if (el.tag === 'slot') {
			return genSlot(el);
		} else {
			// component or element
			let code;
			if (el.component) {
				code = genComponent(el.component, el);
			} else {
				const data = el.plain ? undefined : genData(el);

				const children = el.inlineTemplate ? null : genChildren(el);
				code = '_h(\'' + (el.tag) + '\'' + (data ? (',' + data) : '') + (children ? (',' + children) : '') + ')';
			}
			// module transforms
			for (let i = 0; i < transforms$1.length; i++) {
				code = transforms$1[i](el, code);
			}
			return code;
		}
	}

	// hoist static sub-trees out
	function genStatic(el) {
		el.staticProcessed = true;
		staticRenderFns.push(('with(this){return ' + (genElement(el)) + '}'));
		return ('_m(' + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ')');
	}

	// v-once
	function genOnce(el) {
		el.onceProcessed = true;
		if (el.staticInFor) {
			let key = '';
			let parent = el.parent;
			while (parent) {
				if (parent.for) {
					key = parent.key;
					break;
				}
				parent = parent.parent;
			}
			if (!key) {
				'development' !== 'production' && warn$2(
					'v-once can only be used inside v-for that is keyed. '
				);
				return genElement(el);
			}
			return ('_o(' + (genElement(el)) + ',' + (onceCount++) + (key ? (',' + key) : '') + ')');
		} else {
			return genStatic(el);
		}
	}

	function genIf(el) {
		const exp = el.if;
		el.ifProcessed = true; // avoid recursion
		return ('(' + exp + ')?' + (genElement(el)) + ':' + (genElse(el)));
	}

	function genElse(el) {
		return el.elseBlock
			? genElement(el.elseBlock)
			: '_e()';
	}

	function genFor(el) {
		const exp = el.for;
		const alias = el.alias;
		const iterator1 = el.iterator1 ? (',' + (el.iterator1)) : '';
		const iterator2 = el.iterator2 ? (',' + (el.iterator2)) : '';
		el.forProcessed = true; // avoid recursion
		return '_l((' + exp + '),' +
    'function(' + alias + iterator1 + iterator2 + '){' +
      'return ' + (genElement(el)) +
    '})';
	}

	function genData(el) {
		let data = '{';

		// directives first.
		// directives may mutate the el's other properties before they are generated.
		const dirs = genDirectives(el);
		if (dirs) { data += dirs + ','; }

		// key
		if (el.key) {
			data += 'key:' + (el.key) + ',';
		}
		// ref
		if (el.ref) {
			data += 'ref:' + (el.ref) + ',';
		}
		if (el.refInFor) {
			data += 'refInFor:true,';
		}
		// record original tag name for components using "is" attribute
		if (el.component) {
			data += 'tag:"' + (el.tag) + '",';
		}
		// slot target
		if (el.slotTarget) {
			data += 'slot:' + (el.slotTarget) + ',';
		}
		// module data generation functions
		for (let i = 0; i < dataGenFns.length; i++) {
			data += dataGenFns[i](el);
		}
		// attributes
		if (el.attrs) {
			data += 'attrs:{' + (genProps(el.attrs)) + '},';
		}
		// DOM props
		if (el.props) {
			data += 'domProps:{' + (genProps(el.props)) + '},';
		}
		// event handlers
		if (el.events) {
			data += (genHandlers(el.events)) + ',';
		}
		if (el.nativeEvents) {
			data += (genHandlers(el.nativeEvents, true)) + ',';
		}
		// inline-template
		if (el.inlineTemplate) {
			const ast = el.children[0];
			if ('development' !== 'production' && (
				el.children.length > 1 || ast.type !== 1
			)) {
				warn$2('Inline-template components must have exactly one child element.');
			}
			if (ast.type === 1) {
				const inlineRenderFns = generate(ast, currentOptions);
				data += 'inlineTemplate:{render:function(){' + (inlineRenderFns.render) + '},staticRenderFns:[' + (inlineRenderFns.staticRenderFns.map(function(code) { return ('function(){' + code + '}'); }).join(',')) + ']}';
			}
		}
		data = data.replace(/,$/, '') + '}';
		// v-bind data wrap
		if (el.wrapData) {
			data = el.wrapData(data);
		}
		return data;
	}

	function genDirectives(el) {
		const dirs = el.directives;
		if (!dirs) { return; }
		let res = 'directives:[';
		let hasRuntime = false;
		let i, l, dir, needRuntime;
		for (i = 0, l = dirs.length; i < l; i++) {
			dir = dirs[i];
			needRuntime = true;
			const gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
			if (gen) {
				// compile-time directive that manipulates AST.
				// returns true if it also needs a runtime counterpart.
				needRuntime = !!gen(el, dir, warn$2);
			}
			if (needRuntime) {
				hasRuntime = true;
				res += '{name:"' + (dir.name) + '",rawName:"' + (dir.rawName) + '"' + (dir.value ? (',value:(' + (dir.value) + '),expression:' + (JSON.stringify(dir.value))) : '') + (dir.arg ? (',arg:"' + (dir.arg) + '"') : '') + (dir.modifiers ? (',modifiers:' + (JSON.stringify(dir.modifiers))) : '') + '},';
			}
		}
		if (hasRuntime) {
			return res.slice(0, -1) + ']';
		}
	}

	function genChildren(el) {
		if (el.children.length) {
			return '[' + el.children.map(genNode).join(',') + ']';
		}
	}

	function genNode(node) {
		if (node.type === 1) {
			return genElement(node);
		} else {
			return genText(node);
		}
	}

	function genText(text) {
		return text.type === 2
			? text.expression // no need for () because already wrapped in _s()
			: JSON.stringify(text.text);
	}

	function genSlot(el) {
		const slotName = el.slotName || '"default"';
		const children = genChildren(el);
		return ('_t(' + slotName + (children ? (',' + children) : '') + ')');
	}

	// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent(componentName, el) {
		const children = el.inlineTemplate ? null : genChildren(el);
		return ('_h(' + componentName + ',' + (genData(el)) + (children ? (',' + children) : '') + ')');
	}

	function genProps(props) {
		let res = '';
		for (let i = 0; i < props.length; i++) {
			const prop = props[i];
			res += '"' + (prop.name) + '":' + (prop.value) + ',';
		}
		return res.slice(0, -1);
	}

	/*  */

	/**
 * Compile a template.
 */
	function compile$1(
		template,
		options
	) {
		const ast = parse(template.trim(), options);
		optimize(ast, options);
		const code = generate(ast, options);
		return {
			ast: ast,
			render: code.render,
			staticRenderFns: code.staticRenderFns
		};
	}

	/*  */

	// operators like typeof, instanceof and in are allowed
	const prohibitedKeywordRE = new RegExp('\\b' + (
		'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b');
	// check valid identifier for v-for
	const identRE = /[A-Za-z_$][\w$]*/;
	// strip strings in expressions
	const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

	// detect problematic expressions in a template
	function detectErrors(ast) {
		const errors = [];
		if (ast) {
			checkNode(ast, errors);
		}
		return errors;
	}

	function checkNode(node, errors) {
		if (node.type === 1) {
			for (const name in node.attrsMap) {
				if (dirRE.test(name)) {
					const value = node.attrsMap[name];
					if (value) {
						if (name === 'v-for') {
							checkFor(node, ('v-for="' + value + '"'), errors);
						} else {
							checkExpression(value, (name + '="' + value + '"'), errors);
						}
					}
				}
			}
			if (node.children) {
				for (let i = 0; i < node.children.length; i++) {
					checkNode(node.children[i], errors);
				}
			}
		} else if (node.type === 2) {
			checkExpression(node.expression, node.text, errors);
		}
	}

	function checkFor(node, text, errors) {
		checkExpression(node.for || '', text, errors);
		checkIdentifier(node.alias, 'v-for alias', text, errors);
		checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
		checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}

	function checkIdentifier(ident, type, text, errors) {
		if (typeof ident === 'string' && !identRE.test(ident)) {
			errors.push(('- invalid ' + type + ' "' + ident + '" in expression: ' + text));
		}
	}

	function checkExpression(exp, text, errors) {
		try {
			new Function(('return ' + exp));
		} catch (e) {
			const keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
			if (keywordMatch) {
				errors.push(
					'- avoid using JavaScript keyword as property name: ' +
        '"' + (keywordMatch[0]) + '" in expression ' + text
				);
			} else {
				errors.push(('- invalid expression: ' + text));
			}
		}
	}

	/*  */

	function transformNode(el, options) {
		const warn = options.warn || baseWarn;
		const staticClass = getAndRemoveAttr(el, 'class');
		if ('development' !== 'production' && staticClass) {
			const expression = parseText(staticClass, options.delimiters);
			if (expression) {
				warn(
					'class="' + staticClass + '": ' +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
				);
			}
		}
		if (staticClass) {
			el.staticClass = JSON.stringify(staticClass);
		}
		const classBinding = getBindingAttr(el, 'class', false /* getStatic */);
		if (classBinding) {
			el.classBinding = classBinding;
		}
	}

	function genData$1(el) {
		let data = '';
		if (el.staticClass) {
			data += 'staticClass:' + (el.staticClass) + ',';
		}
		if (el.classBinding) {
			data += 'class:' + (el.classBinding) + ',';
		}
		return data;
	}

	const klass$1 = {
		staticKeys: ['staticClass'],
		transformNode: transformNode,
		genData: genData$1
	};

	/*  */

	function transformNode$1(el) {
		const styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
		if (styleBinding) {
			el.styleBinding = styleBinding;
		}
	}

	function genData$2(el) {
		return el.styleBinding
			? ('style:(' + (el.styleBinding) + '),')
			: '';
	}

	const style$1 = {
		transformNode: transformNode$1,
		genData: genData$2
	};

	const modules$1 = [
		klass$1,
		style$1
	];

	/*  */

	let len;
	let str;
	let chr;
	let index$1;
	let expressionPos;
	let expressionEndPos;

	/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

	function parseModel(val) {
		str = val;
		len = str.length;
		index$1 = expressionPos = expressionEndPos = 0;

		if (val.indexOf('[') < 0) {
			return {
				exp: val,
				idx: null
			};
		}

		while (!eof()) {
			chr = next();
			/* istanbul ignore if */
			if (isStringStart(chr)) {
				parseString(chr);
			} else if (chr === 0x5B) {
				parseBracket(chr);
			}
		}

		return {
			exp: val.substring(0, expressionPos),
			idx: val.substring(expressionPos + 1, expressionEndPos)
		};
	}

	function next() {
		return str.charCodeAt(++index$1);
	}

	function eof() {
		return index$1 >= len;
	}

	function isStringStart(chr) {
		return chr === 0x22 || chr === 0x27;
	}

	function parseBracket(chr) {
		let inBracket = 1;
		expressionPos = index$1;
		while (!eof()) {
			chr = next();
			if (isStringStart(chr)) {
				parseString(chr);
				continue;
			}
			if (chr === 0x5B) { inBracket++; }
			if (chr === 0x5D) { inBracket--; }
			if (inBracket === 0) {
				expressionEndPos = index$1;
				break;
			}
		}
	}

	function parseString(chr) {
		const stringQuote = chr;
		while (!eof()) {
			chr = next();
			if (chr === stringQuote) {
				break;
			}
		}
	}

	/*  */

	let warn$3;

	function model$1(
		el,
		dir,
		_warn
	) {
		warn$3 = _warn;
		const value = dir.value;
		const modifiers = dir.modifiers;
		const tag = el.tag;
		const type = el.attrsMap.type;
		{
			const dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
			if (tag === 'input' && dynamicType) {
				warn$3(
					'<input :type="' + dynamicType + '" v-model="' + value + '">:\n' +
        'v-model does not support dynamic input types. Use v-if branches instead.'
				);
			}
		}
		if (tag === 'select') {
			genSelect(el, value, modifiers);
		} else if (tag === 'input' && type === 'checkbox') {
			genCheckboxModel(el, value, modifiers);
		} else if (tag === 'input' && type === 'radio') {
			genRadioModel(el, value, modifiers);
		} else {
			genDefaultModel(el, value, modifiers);
		}
		// ensure runtime directive metadata
		return true;
	}

	function genCheckboxModel(
		el,
		value,
		modifiers
	) {
		if ('development' !== 'production' &&
    el.attrsMap.checked != null) {
			warn$3(
				'<' + (el.tag) + ' v-model="' + value + '" checked>:\n' +
      'inline checked attributes will be ignored when using v-model. ' +
      'Declare initial values in the component\'s data option instead.'
			);
		}
		const number = modifiers && modifiers.number;
		const valueBinding = getBindingAttr(el, 'value') || 'null';
		const trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
		const falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
		addProp(el, 'checked',
			'Array.isArray(' + value + ')' +
      '?_i(' + value + ',' + valueBinding + ')>-1' +
      ':_q(' + value + ',' + trueValueBinding + ')'
		);
		addHandler(el, 'change',
			'var $$a=' + value + ',' +
        '$$el=$event.target,' +
        '$$c=$$el.checked?(' + trueValueBinding + '):(' + falseValueBinding + ');' +
    'if(Array.isArray($$a)){' +
      'var $$v=' + (number ? '_n(' + valueBinding + ')' : valueBinding) + ',' +
          '$$i=_i($$a,$$v);' +
      'if($$c){$$i<0&&(' + value + '=$$a.concat($$v))}' +
      'else{$$i>-1&&(' + value + '=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}' +
    '}else{' + value + '=$$c}',
			null, true
		);
	}

	function genRadioModel(
		el,
		value,
		modifiers
	) {
		if ('development' !== 'production' &&
    el.attrsMap.checked != null) {
			warn$3(
				'<' + (el.tag) + ' v-model="' + value + '" checked>:\n' +
      'inline checked attributes will be ignored when using v-model. ' +
      'Declare initial values in the component\'s data option instead.'
			);
		}
		const number = modifiers && modifiers.number;
		let valueBinding = getBindingAttr(el, 'value') || 'null';
		valueBinding = number ? ('_n(' + valueBinding + ')') : valueBinding;
		addProp(el, 'checked', ('_q(' + value + ',' + valueBinding + ')'));
		addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
	}

	function genDefaultModel(
		el,
		value,
		modifiers
	) {
		{
			if (el.tag === 'input' && el.attrsMap.value) {
				warn$3(
					'<' + (el.tag) + ' v-model="' + value + '" value="' + (el.attrsMap.value) + '">:\n' +
        'inline value attributes will be ignored when using v-model. ' +
        'Declare initial values in the component\'s data option instead.'
				);
			}
			if (el.tag === 'textarea' && el.children.length) {
				warn$3(
					'<textarea v-model="' + value + '">:\n' +
        'inline content inside <textarea> will be ignored when using v-model. ' +
        'Declare initial values in the component\'s data option instead.'
				);
			}
		}

		const type = el.attrsMap.type;
		const ref = modifiers || {};
		const lazy = ref.lazy;
		const number = ref.number;
		const trim = ref.trim;
		const event = lazy || (isIE && type === 'range') ? 'change' : 'input';
		const needCompositionGuard = !lazy && type !== 'range';
		const isNative = el.tag === 'input' || el.tag === 'textarea';

		let valueExpression = isNative
			? ('$event.target.value' + (trim ? '.trim()' : ''))
			: '$event';
		valueExpression = number || type === 'number'
			? ('_n(' + valueExpression + ')')
			: valueExpression;
		let code = genAssignmentCode(value, valueExpression);
		if (isNative && needCompositionGuard) {
			code = 'if($event.target.composing)return;' + code;
		}
		// inputs with type="file" are read only and setting the input's
		// value will throw an error.
		if ('development' !== 'production' &&
      type === 'file') {
			warn$3(
				'<' + (el.tag) + ' v-model="' + value + '" type="file">:\n' +
      'File inputs are read only. Use a v-on:change listener instead.'
			);
		}
		addProp(el, 'value', isNative ? ('_s(' + value + ')') : ('(' + value + ')'));
		addHandler(el, event, code, null, true);
	}

	function genSelect(
		el,
		value,
		modifiers
	) {
		{
			el.children.some(checkOptionWarning);
		}

		const number = modifiers && modifiers.number;
		const assignment = 'Array.prototype.filter' +
    '.call($event.target.options,function(o){return o.selected})' +
    '.map(function(o){var val = "_value" in o ? o._value : o.value;' +
    'return ' + (number ? '_n(val)' : 'val') + '})' +
    (el.attrsMap.multiple == null ? '[0]' : '');

		const code = genAssignmentCode(value, assignment);
		addHandler(el, 'change', code, null, true);
	}

	function checkOptionWarning(option) {
		if (option.type === 1 &&
    option.tag === 'option' &&
    option.attrsMap.selected != null) {
			warn$3(
				'<select v-model="' + (option.parent.attrsMap['v-model']) + '">:\n' +
      'inline selected attributes on <option> will be ignored when using v-model. ' +
      'Declare initial values in the component\'s data option instead.'
			);
			return true;
		}
		return false;
	}

	function genAssignmentCode(value, assignment) {
		const modelRs = parseModel(value);
		if (modelRs.idx === null) {
			return (value + '=' + assignment);
		} else {
			return 'var $$exp = ' + (modelRs.exp) + ', $$idx = ' + (modelRs.idx) + ';' +
      'if (!Array.isArray($$exp)){' +
        value + '=' + assignment + '}' +
      'else{$$exp.splice($$idx, 1, ' + assignment + ')}';
		}
	}

	/*  */

	function text(el, dir) {
		if (dir.value) {
			addProp(el, 'textContent', ('_s(' + (dir.value) + ')'));
		}
	}

	/*  */

	function html(el, dir) {
		if (dir.value) {
			addProp(el, 'innerHTML', ('_s(' + (dir.value) + ')'));
		}
	}

	const directives$1 = {
		model: model$1,
		text: text,
		html: html
	};

	/*  */

	const cache = Object.create(null);

	const baseOptions = {
		isIE: isIE,
		expectHTML: true,
		modules: modules$1,
		staticKeys: genStaticKeys(modules$1),
		directives: directives$1,
		isReservedTag: isReservedTag,
		isUnaryTag: isUnaryTag,
		mustUseProp: mustUseProp,
		getTagNamespace: getTagNamespace,
		isPreTag: isPreTag
	};

	function compile$$1(
		template,
		options
	) {
		options = options
			? extend(extend({}, baseOptions), options)
			: baseOptions;
		return compile$1(template, options);
	}

	function compileToFunctions(
		template,
		options,
		vm
	) {
		const _warn = (options && options.warn) || warn;
		// detect possible CSP restriction
		/* istanbul ignore if */
		{
			try {
				new Function('return 1');
			} catch (e) {
				if (e.toString().match(/unsafe-eval|CSP/)) {
					_warn(
						'It seems you are using the standalone build of Vue.js in an ' +
          'environment with Content Security Policy that prohibits unsafe-eval. ' +
          'The template compiler cannot work in this environment. Consider ' +
          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
          'templates into render functions.'
					);
				}
			}
		}
		const key = options && options.delimiters
			? String(options.delimiters) + template
			: template;
		if (cache[key]) {
			return cache[key];
		}
		const res = {};
		const compiled = compile$$1(template, options);
		res.render = makeFunction(compiled.render);
		const l = compiled.staticRenderFns.length;
		res.staticRenderFns = new Array(l);
		for (let i = 0; i < l; i++) {
			res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
		}
		{
			if (res.render === noop || res.staticRenderFns.some(function(fn) { return fn === noop; })) {
				_warn(
					'failed to compile template:\n\n' + template + '\n\n' +
        detectErrors(compiled.ast).join('\n') +
        '\n\n',
					vm
				);
			}
		}
		return (cache[key] = res);
	}

	function makeFunction(code) {
		try {
			return new Function(code);
		} catch (e) {
			return noop;
		}
	}

	/*  */

	const idToTemplate = cached(function(id) {
		const el = query(id);
		return el && el.innerHTML;
	});

	const mount = Vue$2.prototype.$mount;
	Vue$2.prototype.$mount = function(
		el,
		hydrating
	) {
		el = el && query(el);

		/* istanbul ignore if */
		if (el === document.body || el === document.documentElement) {
			'development' !== 'production' && warn(
				'Do not mount Vue to <html> or <body> - mount to normal elements instead.'
			);
			return this;
		}

		const options = this.$options;
		// resolve template/el and convert to render function
		if (!options.render) {
			let template = options.template;
			if (template) {
				if (typeof template === 'string') {
					if (template.charAt(0) === '#') {
						template = idToTemplate(template);
					}
				} else if (template.nodeType) {
					template = template.innerHTML;
				} else {
					{
						warn('invalid template option:' + template, this);
					}
					return this;
				}
			} else if (el) {
				template = getOuterHTML(el);
			}
			if (template) {
				const ref = compileToFunctions(template, {
					warn: warn,
					shouldDecodeNewlines: shouldDecodeNewlines,
					delimiters: options.delimiters
				}, this);
				const render = ref.render;
				const staticRenderFns = ref.staticRenderFns;
				options.render = render;
				options.staticRenderFns = staticRenderFns;
			}
		}
		return mount.call(this, el, hydrating);
	};

	/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
	function getOuterHTML(el) {
		if (el.outerHTML) {
			return el.outerHTML;
		} else {
			const container = document.createElement('div');
			container.appendChild(el.cloneNode(true));
			return container.innerHTML;
		}
	}

	Vue$2.compile = compileToFunctions;

	return Vue$2;
}));
