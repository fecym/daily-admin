/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	const installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
		/******/ 		// Check if module is in cache
		/******/ 		if (installedModules[moduleId])
		/******/ 			{ return installedModules[moduleId].exports; }

		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		const module = installedModules[moduleId] = {
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
	/******/ 	__webpack_require__.p = '';

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {
		module.exports = __webpack_require__(1);
		/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(2);

		const _vue = __webpack_require__(331);

		const _vue2 = _interopRequireDefault(_vue);

		const _upload = __webpack_require__(333);

		const _upload2 = _interopRequireDefault(_upload);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		new _vue2.default({
			el: '#app',
			data: {
				show1: false,
				show2: false,
				show3: false,
				avatarUrl1: null,
				avatarUrl2: null,
				avatarUrl3: null,
				otherParams: {
					token: '123456798',
					name: 'img'
				}
			},
			components: {
				'my-upload': _upload2.default
			},
			methods: {
				toggleShow1: function toggleShow1() {
					const show1 = this.show1;

					this.show1 = !show1;
				},
				toggleShow2: function toggleShow2() {
					const show2 = this.show2;

					this.show2 = !show2;
				},
				toggleShow3: function toggleShow3() {
					const show3 = this.show3;

					this.show3 = !show3;
				}
			},
			events: {
				cropSuccess: function cropSuccess(data, field, key) {
					if (field == 'avatar1') {
						this.avatarUrl1 = data;
					} else if (field == 'avatar2') {
						this.avatarUrl2 = data;
					} else {
						this.avatarUrl3 = data;
					}
					console.log('-------- 裁剪成功 --------');
					console.log(field);
				},
				cropUploadSuccess: function cropUploadSuccess(data, field, key) {
					console.log('-------- 上传成功 --------');
					console.log(data);
					console.log('field: ' + field);
					console.log('key: ' + key);
				},
				cropUploadFail: function cropUploadFail(status, field, key) {
					console.log('-------- 上传失败 --------');
					console.log(status);
					console.log('field: ' + field);
					console.log('key: ' + key);
				}
			}
		});
		/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
		/* WEBPACK VAR INJECTION */(function(global) {
			'use strict';

			__webpack_require__(3);

			__webpack_require__(326);

			__webpack_require__(328);

			if (global._babelPolyfill) {
	  throw new Error('only one instance of babel-polyfill is allowed');
			}
			global._babelPolyfill = true;

			const DEFINE_PROPERTY = 'defineProperty';
			function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
			}

			define(String.prototype, 'padLeft', ''.padStart);
			define(String.prototype, 'padRight', ''.padEnd);

			'pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill'.split(',').forEach(function(key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
			});
			/* WEBPACK VAR INJECTION */ }.call(exports, (function() { return this; }())));
		/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(4);
		__webpack_require__(53);
		__webpack_require__(54);
		__webpack_require__(55);
		__webpack_require__(56);
		__webpack_require__(58);
		__webpack_require__(61);
		__webpack_require__(62);
		__webpack_require__(63);
		__webpack_require__(64);
		__webpack_require__(65);
		__webpack_require__(66);
		__webpack_require__(67);
		__webpack_require__(68);
		__webpack_require__(69);
		__webpack_require__(71);
		__webpack_require__(73);
		__webpack_require__(75);
		__webpack_require__(77);
		__webpack_require__(80);
		__webpack_require__(81);
		__webpack_require__(82);
		__webpack_require__(86);
		__webpack_require__(88);
		__webpack_require__(90);
		__webpack_require__(93);
		__webpack_require__(94);
		__webpack_require__(95);
		__webpack_require__(96);
		__webpack_require__(98);
		__webpack_require__(99);
		__webpack_require__(100);
		__webpack_require__(101);
		__webpack_require__(102);
		__webpack_require__(103);
		__webpack_require__(104);
		__webpack_require__(106);
		__webpack_require__(107);
		__webpack_require__(108);
		__webpack_require__(110);
		__webpack_require__(111);
		__webpack_require__(112);
		__webpack_require__(114);
		__webpack_require__(116);
		__webpack_require__(117);
		__webpack_require__(118);
		__webpack_require__(119);
		__webpack_require__(120);
		__webpack_require__(121);
		__webpack_require__(122);
		__webpack_require__(123);
		__webpack_require__(124);
		__webpack_require__(125);
		__webpack_require__(126);
		__webpack_require__(127);
		__webpack_require__(128);
		__webpack_require__(133);
		__webpack_require__(134);
		__webpack_require__(138);
		__webpack_require__(139);
		__webpack_require__(140);
		__webpack_require__(141);
		__webpack_require__(143);
		__webpack_require__(144);
		__webpack_require__(145);
		__webpack_require__(146);
		__webpack_require__(147);
		__webpack_require__(148);
		__webpack_require__(149);
		__webpack_require__(150);
		__webpack_require__(151);
		__webpack_require__(152);
		__webpack_require__(153);
		__webpack_require__(154);
		__webpack_require__(155);
		__webpack_require__(156);
		__webpack_require__(157);
		__webpack_require__(159);
		__webpack_require__(160);
		__webpack_require__(162);
		__webpack_require__(163);
		__webpack_require__(169);
		__webpack_require__(170);
		__webpack_require__(172);
		__webpack_require__(173);
		__webpack_require__(174);
		__webpack_require__(178);
		__webpack_require__(179);
		__webpack_require__(180);
		__webpack_require__(181);
		__webpack_require__(182);
		__webpack_require__(184);
		__webpack_require__(185);
		__webpack_require__(186);
		__webpack_require__(187);
		__webpack_require__(190);
		__webpack_require__(192);
		__webpack_require__(193);
		__webpack_require__(194);
		__webpack_require__(196);
		__webpack_require__(198);
		__webpack_require__(200);
		__webpack_require__(201);
		__webpack_require__(202);
		__webpack_require__(204);
		__webpack_require__(205);
		__webpack_require__(206);
		__webpack_require__(207);
		__webpack_require__(217);
		__webpack_require__(221);
		__webpack_require__(222);
		__webpack_require__(224);
		__webpack_require__(225);
		__webpack_require__(229);
		__webpack_require__(230);
		__webpack_require__(232);
		__webpack_require__(233);
		__webpack_require__(234);
		__webpack_require__(235);
		__webpack_require__(236);
		__webpack_require__(237);
		__webpack_require__(238);
		__webpack_require__(239);
		__webpack_require__(240);
		__webpack_require__(241);
		__webpack_require__(242);
		__webpack_require__(243);
		__webpack_require__(244);
		__webpack_require__(245);
		__webpack_require__(246);
		__webpack_require__(247);
		__webpack_require__(248);
		__webpack_require__(249);
		__webpack_require__(250);
		__webpack_require__(252);
		__webpack_require__(253);
		__webpack_require__(254);
		__webpack_require__(255);
		__webpack_require__(256);
		__webpack_require__(258);
		__webpack_require__(259);
		__webpack_require__(260);
		__webpack_require__(262);
		__webpack_require__(263);
		__webpack_require__(264);
		__webpack_require__(265);
		__webpack_require__(266);
		__webpack_require__(267);
		__webpack_require__(268);
		__webpack_require__(269);
		__webpack_require__(271);
		__webpack_require__(272);
		__webpack_require__(274);
		__webpack_require__(275);
		__webpack_require__(276);
		__webpack_require__(277);
		__webpack_require__(280);
		__webpack_require__(281);
		__webpack_require__(283);
		__webpack_require__(284);
		__webpack_require__(285);
		__webpack_require__(286);
		__webpack_require__(288);
		__webpack_require__(289);
		__webpack_require__(290);
		__webpack_require__(291);
		__webpack_require__(292);
		__webpack_require__(293);
		__webpack_require__(294);
		__webpack_require__(295);
		__webpack_require__(296);
		__webpack_require__(297);
		__webpack_require__(299);
		__webpack_require__(300);
		__webpack_require__(301);
		__webpack_require__(302);
		__webpack_require__(303);
		__webpack_require__(304);
		__webpack_require__(305);
		__webpack_require__(306);
		__webpack_require__(307);
		__webpack_require__(308);
		__webpack_require__(309);
		__webpack_require__(311);
		__webpack_require__(312);
		__webpack_require__(313);
		__webpack_require__(314);
		__webpack_require__(315);
		__webpack_require__(316);
		__webpack_require__(317);
		__webpack_require__(318);
		__webpack_require__(319);
		__webpack_require__(320);
		__webpack_require__(321);
		__webpack_require__(324);
		__webpack_require__(325);
		module.exports = __webpack_require__(10);
		/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// ECMAScript 6 symbols shim

		const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

		const global = __webpack_require__(5);
		const has = __webpack_require__(6);
		const DESCRIPTORS = __webpack_require__(7);
		const $export = __webpack_require__(9);
		const redefine = __webpack_require__(19);
		const META = __webpack_require__(23).KEY;
		const $fails = __webpack_require__(8);
		const shared = __webpack_require__(24);
		const setToStringTag = __webpack_require__(25);
		const uid = __webpack_require__(20);
		const wks = __webpack_require__(26);
		const wksExt = __webpack_require__(27);
		const wksDefine = __webpack_require__(28);
		const keyOf = __webpack_require__(30);
		const enumKeys = __webpack_require__(43);
		const isArray = __webpack_require__(46);
		const anObject = __webpack_require__(13);
		const toIObject = __webpack_require__(33);
		const toPrimitive = __webpack_require__(17);
		const createDesc = __webpack_require__(18);
		const _create = __webpack_require__(47);
		const gOPNExt = __webpack_require__(50);
		const $GOPD = __webpack_require__(52);
		const $DP = __webpack_require__(12);
		const $keys = __webpack_require__(31);
		const gOPD = $GOPD.f;
		const dP = $DP.f;
		const gOPN = gOPNExt.f;
		let $Symbol = global.Symbol;
		const $JSON = global.JSON;
		const _stringify = $JSON && $JSON.stringify;
		const PROTOTYPE = 'prototype';
		const HIDDEN = wks('_hidden');
		const TO_PRIMITIVE = wks('toPrimitive');
		const isEnum = {}.propertyIsEnumerable;
		const SymbolRegistry = shared('symbol-registry');
		const AllSymbols = shared('symbols');
		const OPSymbols = shared('op-symbols');
		const ObjectProto = Object[PROTOTYPE];
		const USE_NATIVE = typeof $Symbol === 'function';
		const QObject = global.QObject;
		// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
		let setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

		// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
		const setSymbolDesc = DESCRIPTORS && $fails(function() {
	  return _create(dP({}, 'a', {
	    get: function get() {
	      return dP(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
		}) ? function(it, key, D) {
	  const protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
			} : dP;

		const wrap = function wrap(tag) {
	  const sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
		};

		const isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function(it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
		} : function(it) {
	  return it instanceof $Symbol;
		};

		var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
		};
		const $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  const keys = enumKeys(P = toIObject(P));
	  let i = 0;
	  const l = keys.length;
	  let key;
	  while (l > i) {
	    $defineProperty(it, key = keys[i++], P[key]);
	  } return it;
		};
		const $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
		};
		const $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  const E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
		};
		const $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  const D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
		};
		const $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  const names = gOPN(toIObject(it));
	  const result = [];
	  let i = 0;
	  let key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
		};
		const $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  const IS_OP = it === ObjectProto;
	  const names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  const result = [];
	  let i = 0;
	  let key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
		};

		// 19.4.1.1 Symbol([description])
		if (!USE_NATIVE) {
	  $Symbol = function _Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    const tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    const $set = function $set(value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(51).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(45).f = $propertyIsEnumerable;
	  __webpack_require__(44).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(29)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name) {
	    return wrap(wks(name));
	  };
		}

		$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

		for (let es6Symbols =
	// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
	  wks(es6Symbols[j++]);
		} for (let wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
	  wksDefine(wellKnownSymbols[k++]);
		}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  for: function _for(key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function useSetter() {
	    setter = true;
	  },
	  useSimple: function useSimple() {
	    setter = false;
	  }
		});

		$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
		});

		// 24.3.2 JSON.stringify(value [, replacer [, space]])
		$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
	  const S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
		})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    const args = [it];
	    let i = 1;
	    let replacer, $replacer;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }replacer = args[1];
	    if (typeof replacer === 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) {
					replacer = function replacer(key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
				}
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
		});

		// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
		$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
		// 19.4.3.5 Symbol.prototype[@@toStringTag]
		setToStringTag($Symbol, 'Symbol');
		// 20.2.1.9 Math[@@toStringTag]
		setToStringTag(Math, 'Math', true);
		// 24.3.3 JSON[@@toStringTag]
		setToStringTag(global.JSON, 'JSON', true);
		/***/ },
	/* 5 */
	/***/ function(module, exports) {
		'use strict';

		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		const global = module.exports = typeof window !== 'undefined' && window.Math == Math ? window : typeof self !== 'undefined' && self.Math == Math ? self
		// eslint-disable-next-line no-new-func
			: Function('return this')();
		if (typeof __g === 'number') __g = global; // eslint-disable-line no-undef
		/***/ },
	/* 6 */
	/***/ function(module, exports) {
		'use strict';

		const hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key) {
	  return hasOwnProperty.call(it, key);
		};
		/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(8)(function() {
	  return Object.defineProperty({}, 'a', {
				get: function get() {
	      return 7;
	    }
			}).a != 7;
		});
		/***/ },
	/* 8 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
		};
		/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(5);
		const core = __webpack_require__(10);
		const hide = __webpack_require__(11);
		const redefine = __webpack_require__(19);
		const ctx = __webpack_require__(21);
		const PROTOTYPE = 'prototype';

		const $export = function $export(type, name, source) {
	  const IS_FORCED = type & $export.F;
	  const IS_GLOBAL = type & $export.G;
	  const IS_STATIC = type & $export.S;
	  const IS_PROTO = type & $export.P;
	  const IS_BIND = type & $export.B;
	  const target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
	  const exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  const expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  let key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
		};
		global.core = core;
		// type bitmap
		$export.F = 1; // forced
		$export.G = 2; // global
		$export.S = 4; // static
		$export.P = 8; // proto
		$export.B = 16; // bind
		$export.W = 32; // wrap
		$export.U = 64; // safe
		$export.R = 128; // real proto method for `library`
		module.exports = $export;
		/***/ },
	/* 10 */
	/***/ function(module, exports) {
		'use strict';

		const core = module.exports = { version: '2.5.0' };
		if (typeof __e === 'number') __e = core; // eslint-disable-line no-undef
		/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const dP = __webpack_require__(12);
		const createDesc = __webpack_require__(18);
		module.exports = __webpack_require__(7) ? function(object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
		} : function(object, key, value) {
	  object[key] = value;
	  return object;
		};
		/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const anObject = __webpack_require__(13);
		const IE8_DOM_DEFINE = __webpack_require__(15);
		const toPrimitive = __webpack_require__(17);
		const dP = Object.defineProperty;

		exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) {
				try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
			}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
		};
		/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const isObject = __webpack_require__(14);
		module.exports = function(it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
		};
		/***/ },
	/* 14 */
	/***/ function(module, exports) {
		'use strict';

		const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

		module.exports = function(it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
		};
		/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		module.exports = !__webpack_require__(7) && !__webpack_require__(8)(function() {
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', {
				get: function get() {
	      return 7;
	    }
			}).a != 7;
		});
		/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const isObject = __webpack_require__(14);
		const document = __webpack_require__(5).document;
		// typeof document.createElement is 'object' in old IE
		const is = isObject(document) && isObject(document.createElement);
		module.exports = function(it) {
	  return is ? document.createElement(it) : {};
		};
		/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 7.1.1 ToPrimitive(input [, PreferredType])
		const isObject = __webpack_require__(14);
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function(it, S) {
	  if (!isObject(it)) return it;
	  let fn, val;
	  if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError('Can\'t convert object to primitive value');
		};
		/***/ },
	/* 18 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
		};
		/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(5);
		const hide = __webpack_require__(11);
		const has = __webpack_require__(6);
		const SRC = __webpack_require__(20)('src');
		const TO_STRING = 'toString';
		const $toString = Function[TO_STRING];
		const TPL = ('' + $toString).split(TO_STRING);

		__webpack_require__(10).inspectSource = function(it) {
	  return $toString.call(it);
		};

		(module.exports = function(O, key, val, safe) {
	  const isFunction = typeof val === 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    hide(O, key, val);
	  }
	  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
		})(Function.prototype, TO_STRING, function toString() {
	  return typeof this === 'function' && this[SRC] || $toString.call(this);
		});
		/***/ },
	/* 20 */
	/***/ function(module, exports) {
		'use strict';

		let id = 0;
		const px = Math.random();
		module.exports = function(key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};
		/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// optional / simple context binding
		const aFunction = __webpack_require__(22);
		module.exports = function(fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function(a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function(a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function(a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function() /* ...args */{
	    return fn.apply(that, arguments);
	  };
		};
		/***/ },
	/* 22 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(it) {
	  if (typeof it !== 'function') throw TypeError(it + ' is not a function!');
	  return it;
		};
		/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

		const META = __webpack_require__(20)('meta');
		const isObject = __webpack_require__(14);
		const has = __webpack_require__(6);
		const setDesc = __webpack_require__(12).f;
		let id = 0;
		const isExtensible = Object.isExtensible || function() {
	  return true;
		};
		const FREEZE = !__webpack_require__(8)(function() {
	  return isExtensible(Object.preventExtensions({}));
		});
		const setMeta = function setMeta(it) {
	  setDesc(it, META, {
				value: {
	      i: 'O' + ++id, // object ID
	      w: {} // weak collections IDs
	    }
			});
		};
		const fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it === 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	    // return object ID
	  } return it[META].i;
		};
		const getWeak = function getWeak(it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	    // return hash weak collections IDs
	  } return it[META].w;
		};
		// add metadata on freeze-family methods calling
		const onFreeze = function onFreeze(it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
		};
		var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
		};
		/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(5);
		const SHARED = '__core-js_shared__';
		const store = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key) {
	  return store[key] || (store[key] = {});
		};
		/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const def = __webpack_require__(12).f;
		const has = __webpack_require__(6);
		const TAG = __webpack_require__(26)('toStringTag');

		module.exports = function(it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
		};
		/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const store = __webpack_require__(24)('wks');
		const uid = __webpack_require__(20);
		const _Symbol = __webpack_require__(5).Symbol;
		const USE_SYMBOL = typeof _Symbol === 'function';

		const $exports = module.exports = function(name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
		};

		$exports.store = store;
		/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		exports.f = __webpack_require__(26);
		/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(5);
		const core = __webpack_require__(10);
		const LIBRARY = __webpack_require__(29);
		const wksExt = __webpack_require__(27);
		const defineProperty = __webpack_require__(12).f;
		module.exports = function(name) {
	  const $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
		};
		/***/ },
	/* 29 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = false;
		/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const getKeys = __webpack_require__(31);
		const toIObject = __webpack_require__(33);
		module.exports = function(object, el) {
	  const O = toIObject(object);
	  const keys = getKeys(O);
	  const length = keys.length;
	  let index = 0;
	  let key;
	  while (length > index) {
	    if (O[key = keys[index++]] === el) return key;
	  }
		};
		/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.14 / 15.2.3.14 Object.keys(O)
		const $keys = __webpack_require__(32);
		const enumBugKeys = __webpack_require__(42);

		module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
		};
		/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const has = __webpack_require__(6);
		const toIObject = __webpack_require__(33);
		const arrayIndexOf = __webpack_require__(37)(false);
		const IE_PROTO = __webpack_require__(41)('IE_PROTO');

		module.exports = function(object, names) {
	  const O = toIObject(object);
	  let i = 0;
	  const result = [];
	  let key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  } return result;
		};
		/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// to indexed object, toObject with fallback for non-array-like ES3 strings
		const IObject = __webpack_require__(34);
		const defined = __webpack_require__(36);
		module.exports = function(it) {
	  return IObject(defined(it));
		};
		/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		const cof = __webpack_require__(35);
		// eslint-disable-next-line no-prototype-builtins
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
		};
		/***/ },
	/* 35 */
	/***/ function(module, exports) {
		'use strict';

		const toString = {}.toString;

		module.exports = function(it) {
	  return toString.call(it).slice(8, -1);
		};
		/***/ },
	/* 36 */
	/***/ function(module, exports) {
		'use strict';

		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it) {
	  if (it == undefined) throw TypeError('Can\'t call method on  ' + it);
	  return it;
		};
		/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// false -> Array#indexOf
		// true  -> Array#includes
		const toIObject = __webpack_require__(33);
		const toLength = __webpack_require__(38);
		const toAbsoluteIndex = __webpack_require__(40);
		module.exports = function(IS_INCLUDES) {
	  return function($this, el, fromIndex) {
	    const O = toIObject($this);
	    const length = toLength(O.length);
	    let index = toAbsoluteIndex(fromIndex, length);
	    let value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) {
					while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	      // Array#indexOf ignores holes, Array#includes - not
	    }
				} else {
					for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }
				} return !IS_INCLUDES && -1;
	  };
		};
		/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 7.1.15 ToLength
		const toInteger = __webpack_require__(39);
		const min = Math.min;
		module.exports = function(it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
		};
		/***/ },
	/* 39 */
	/***/ function(module, exports) {
		'use strict';

		// 7.1.4 ToInteger
		const ceil = Math.ceil;
		const floor = Math.floor;
		module.exports = function(it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};
		/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const toInteger = __webpack_require__(39);
		const max = Math.max;
		const min = Math.min;
		module.exports = function(index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
		};
		/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const shared = __webpack_require__(24)('keys');
		const uid = __webpack_require__(20);
		module.exports = function(key) {
	  return shared[key] || (shared[key] = uid(key));
		};
		/***/ },
	/* 42 */
	/***/ function(module, exports) {
		'use strict';

		// IE 8- don't enum bug keys
		module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
		/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// all enumerable object keys, includes symbols
		const getKeys = __webpack_require__(31);
		const gOPS = __webpack_require__(44);
		const pIE = __webpack_require__(45);
		module.exports = function(it) {
	  const result = getKeys(it);
	  const getSymbols = gOPS.f;
	  if (getSymbols) {
	    const symbols = getSymbols(it);
	    const isEnum = pIE.f;
	    let i = 0;
	    let key;
	    while (symbols.length > i) {
	      if (isEnum.call(it, key = symbols[i++])) result.push(key);
	    }
	  } return result;
		};
		/***/ },
	/* 44 */
	/***/ function(module, exports) {
		'use strict';

		exports.f = Object.getOwnPropertySymbols;
		/***/ },
	/* 45 */
	/***/ function(module, exports) {
		'use strict';

		exports.f = {}.propertyIsEnumerable;
		/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 7.2.2 IsArray(argument)
		const cof = __webpack_require__(35);
		module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
		};
		/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		const anObject = __webpack_require__(13);
		const dPs = __webpack_require__(48);
		const enumBugKeys = __webpack_require__(42);
		const IE_PROTO = __webpack_require__(41)('IE_PROTO');
		const Empty = function Empty() { /* empty */ };
		const PROTOTYPE = 'prototype';

		// Create object with fake `null` prototype: use iframe Object with cleared prototype
		var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  const iframe = __webpack_require__(16)('iframe');
	  let i = enumBugKeys.length;
	  const lt = '<';
	  const gt = '>';
	  let iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(49).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  } return _createDict();
		};

		module.exports = Object.create || function create(O, Properties) {
	  let result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
		};
		/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const dP = __webpack_require__(12);
		const anObject = __webpack_require__(13);
		const getKeys = __webpack_require__(31);

		module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  const keys = getKeys(Properties);
	  const length = keys.length;
	  let i = 0;
	  let P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  } return O;
		};
		/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const document = __webpack_require__(5).document;
		module.exports = document && document.documentElement;
		/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

		// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
		const toIObject = __webpack_require__(33);
		const gOPN = __webpack_require__(51).f;
		const toString = {}.toString;

		const windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

		const getWindowNames = function getWindowNames(it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
		};

		module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
		};
		/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
		const $keys = __webpack_require__(32);
		const hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

		exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
		};
		/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const pIE = __webpack_require__(45);
		const createDesc = __webpack_require__(18);
		const toIObject = __webpack_require__(33);
		const toPrimitive = __webpack_require__(17);
		const has = __webpack_require__(6);
		const IE8_DOM_DEFINE = __webpack_require__(15);
		const gOPD = Object.getOwnPropertyDescriptor;

		exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) {
				try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
			}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
		};
		/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		$export($export.S, 'Object', { create: __webpack_require__(47) });
		/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
		$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(12).f });
		/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
		$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperties: __webpack_require__(48) });
		/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
		const toIObject = __webpack_require__(33);
		const $getOwnPropertyDescriptor = __webpack_require__(52).f;

		__webpack_require__(57)('getOwnPropertyDescriptor', function() {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
		});
		/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// most Object methods by ES6 should accept primitives
		const $export = __webpack_require__(9);
		const core = __webpack_require__(10);
		const fails = __webpack_require__(8);
		module.exports = function(KEY, exec) {
	  const fn = (core.Object || {})[KEY] || Object[KEY];
	  const exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function() {
	    fn(1);
	  }), 'Object', exp);
		};
		/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.9 Object.getPrototypeOf(O)
		const toObject = __webpack_require__(59);
		const $getPrototypeOf = __webpack_require__(60);

		__webpack_require__(57)('getPrototypeOf', function() {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
		});
		/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 7.1.13 ToObject(argument)
		const defined = __webpack_require__(36);
		module.exports = function(it) {
	  return Object(defined(it));
		};
		/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
		const has = __webpack_require__(6);
		const toObject = __webpack_require__(59);
		const IE_PROTO = __webpack_require__(41)('IE_PROTO');
		const ObjectProto = Object.prototype;

		module.exports = Object.getPrototypeOf || function(O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor === 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
		};
		/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.14 Object.keys(O)
		const toObject = __webpack_require__(59);
		const $keys = __webpack_require__(31);

		__webpack_require__(57)('keys', function() {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
		});
		/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.7 Object.getOwnPropertyNames(O)
		__webpack_require__(57)('getOwnPropertyNames', function() {
	  return __webpack_require__(50).f;
		});
		/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.5 Object.freeze(O)
		const isObject = __webpack_require__(14);
		const meta = __webpack_require__(23).onFreeze;

		__webpack_require__(57)('freeze', function($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
		});
		/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.17 Object.seal(O)
		const isObject = __webpack_require__(14);
		const meta = __webpack_require__(23).onFreeze;

		__webpack_require__(57)('seal', function($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
		});
		/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.15 Object.preventExtensions(O)
		const isObject = __webpack_require__(14);
		const meta = __webpack_require__(23).onFreeze;

		__webpack_require__(57)('preventExtensions', function($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
		});
		/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.12 Object.isFrozen(O)
		const isObject = __webpack_require__(14);

		__webpack_require__(57)('isFrozen', function($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
		});
		/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.13 Object.isSealed(O)
		const isObject = __webpack_require__(14);

		__webpack_require__(57)('isSealed', function($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
		});
		/***/ },
	/* 68 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.11 Object.isExtensible(O)
		const isObject = __webpack_require__(14);

		__webpack_require__(57)('isExtensible', function($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
		});
		/***/ },
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.3.1 Object.assign(target, source)
		const $export = __webpack_require__(9);

		$export($export.S + $export.F, 'Object', { assign: __webpack_require__(70) });
		/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// 19.1.2.1 Object.assign(target, source, ...)

		const getKeys = __webpack_require__(31);
		const gOPS = __webpack_require__(44);
		const pIE = __webpack_require__(45);
		const toObject = __webpack_require__(59);
		const IObject = __webpack_require__(34);
		const $assign = Object.assign;

		// should work with symbols and should have deterministic property order (V8 bug)
		module.exports = !$assign || __webpack_require__(8)(function() {
	  const A = {};
	  const B = {};
	  // eslint-disable-next-line no-undef
	  const S = Symbol();
	  const K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
		}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  const T = toObject(target);
	  const aLen = arguments.length;
	  let index = 1;
	  const getSymbols = gOPS.f;
	  const isEnum = pIE.f;
	  while (aLen > index) {
	    const S = IObject(arguments[index++]);
	    const keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    const length = keys.length;
	    let j = 0;
	    var key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  } return T;
			} : $assign;
		/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.3.10 Object.is(value1, value2)
		const $export = __webpack_require__(9);
		$export($export.S, 'Object', { is: __webpack_require__(72) });
		/***/ },
	/* 72 */
	/***/ function(module, exports) {
		'use strict';

		// 7.2.9 SameValue(x, y)
		module.exports = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
		};
		/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.3.19 Object.setPrototypeOf(O, proto)
		const $export = __webpack_require__(9);
		$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(74).set });
		/***/ },
	/* 74 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// Works with __proto__ only. Old v8 can't work with null proto objects.
		/* eslint-disable no-proto */
		const isObject = __webpack_require__(14);
		const anObject = __webpack_require__(13);
		const check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ': can\'t set as prototype!');
		};
		module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  (function(test, buggy, set) {
	    try {
	      set = __webpack_require__(21)(Function.call, __webpack_require__(52).f(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto; else set(O, proto);
	      return O;
	    };
	  }({}, false)) : undefined),
	  check: check
		};
		/***/ },
	/* 75 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// 19.1.3.6 Object.prototype.toString()

		const classof = __webpack_require__(76);
		const test = {};
		test[__webpack_require__(26)('toStringTag')] = 'z';
		if (test + '' != '[object z]') {
	  __webpack_require__(19)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
		}
		/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// getting tag from 19.1.3.6 Object.prototype.toString()
		const cof = __webpack_require__(35);
		const TAG = __webpack_require__(26)('toStringTag');
		// ES3 wrong here
		const ARG = cof(function() {
	  return arguments;
		}()) == 'Arguments';

		// fallback for IE11 Script Access Denied error
		const tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
		};

		module.exports = function(it) {
	  let O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) === 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee === 'function' ? 'Arguments' : B;
		};
		/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
		const $export = __webpack_require__(9);

		$export($export.P, 'Function', { bind: __webpack_require__(78) });
		/***/ },
	/* 78 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const aFunction = __webpack_require__(22);
		const isObject = __webpack_require__(14);
		const invoke = __webpack_require__(79);
		const arraySlice = [].slice;
		const factories = {};

		const construct = function construct(F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) {
	      n[i] = 'a[' + i + ']';
	    } // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
		};

		module.exports = Function.bind || function bind(that /* , ...args */) {
	  const fn = aFunction(this);
	  const partArgs = arraySlice.call(arguments, 1);
	  const bound = function bound() /* args... */{
	    const args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
		};
		/***/ },
	/* 79 */
	/***/ function(module, exports) {
		'use strict';

		// fast apply, http://jsperf.lnkit.com/fast-apply/5
		module.exports = function(fn, args, that) {
	                  const un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  } return fn.apply(that, args);
		};
		/***/ },
	/* 80 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const dP = __webpack_require__(12).f;
		const FProto = Function.prototype;
		const nameRE = /^\s*function ([^ (]*)/;
		const NAME = 'name';

		// 19.2.4.2 name
		NAME in FProto || __webpack_require__(7) && dP(FProto, NAME, {
	  configurable: true,
	  get: function get() {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
		});
		/***/ },
	/* 81 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const isObject = __webpack_require__(14);
		const getPrototypeOf = __webpack_require__(60);
		const HAS_INSTANCE = __webpack_require__(26)('hasInstance');
		const FunctionProto = Function.prototype;
		// 19.2.3.6 Function.prototype[@@hasInstance](V)
		if (!(HAS_INSTANCE in FunctionProto)) {
			__webpack_require__(12).f(FunctionProto, HAS_INSTANCE, {
				value: function value(O) {
	    if (typeof this !== 'function' || !isObject(O)) return false;
	    if (!isObject(this.prototype)) return O instanceof this;
	    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	    while (O = getPrototypeOf(O)) {
	      if (this.prototype === O) return true;
	    } return false;
	  }
			});
		}
		/***/ },
	/* 82 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $parseInt = __webpack_require__(83);
		// 18.2.5 parseInt(string, radix)
		$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });
		/***/ },
	/* 83 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $parseInt = __webpack_require__(5).parseInt;
		const $trim = __webpack_require__(84).trim;
		const ws = __webpack_require__(85);
		const hex = /^[-+]?0[xX]/;

		module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  const string = $trim(String(str), 3);
	  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
		} : $parseInt;
		/***/ },
	/* 84 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const defined = __webpack_require__(36);
		const fails = __webpack_require__(8);
		const spaces = __webpack_require__(85);
		const space = '[' + spaces + ']';
		const non = '\u200B\x85';
		const ltrim = RegExp('^' + space + space + '*');
		const rtrim = RegExp(space + space + '*$');

		const exporter = function exporter(KEY, exec, ALIAS) {
	  const exp = {};
	  const FORCE = fails(function() {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  const fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
		};

		// 1 -> String#trimLeft
		// 2 -> String#trimRight
		// 3 -> String#trim
		var trim = exporter.trim = function(string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
		};

		module.exports = exporter;
		/***/ },
	/* 85 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
		/***/ },
	/* 86 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $parseFloat = __webpack_require__(87);
		// 18.2.4 parseFloat(string)
		$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });
		/***/ },
	/* 87 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $parseFloat = __webpack_require__(5).parseFloat;
		const $trim = __webpack_require__(84).trim;

		module.exports = 1 / $parseFloat(__webpack_require__(85) + '-0') !== -Infinity ? function parseFloat(str) {
	  const string = $trim(String(str), 3);
	  const result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
		} : $parseFloat;
		/***/ },
	/* 88 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(5);
		const has = __webpack_require__(6);
		const cof = __webpack_require__(35);
		const inheritIfRequired = __webpack_require__(89);
		const toPrimitive = __webpack_require__(17);
		const fails = __webpack_require__(8);
		const gOPN = __webpack_require__(51).f;
		const gOPD = __webpack_require__(52).f;
		const dP = __webpack_require__(12).f;
		const $trim = __webpack_require__(84).trim;
		const NUMBER = 'Number';
		let $Number = global[NUMBER];
		const Base = $Number;
		const proto = $Number.prototype;
		// Opera ~12 has broken Object#toString
		const BROKEN_COF = cof(__webpack_require__(47)(proto)) == NUMBER;
		const TRIM = 'trim' in String.prototype;

		// 7.1.3 ToNumber(argument)
		const toNumber = function toNumber(argument) {
	  let it = toPrimitive(argument, false);
	  if (typeof it === 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    const first = it.charCodeAt(0);
	    let third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66:case 98:
	          radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79:case 111:
	          radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default:
	          return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
		};

		if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    const it = arguments.length < 1 ? 0 : value;
	    const that = this;
	    return that instanceof $Number &&
	    // check on 1..constructor(foo) case
	    (BROKEN_COF ? fails(function() {
	      proto.valueOf.call(that);
	    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(7) ? gOPN(Base) : (
	  // ES3:
	  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	  // ES6 (in case, if modules with ES6 Number statics required before):
	  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(19)(global, NUMBER, $Number);
		}
		/***/ },
	/* 89 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const isObject = __webpack_require__(14);
		const setPrototypeOf = __webpack_require__(74).set;
		module.exports = function(that, target, C) {
	  const S = target.constructor;
	  let P;
	  if (S !== C && typeof S === 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
		};
		/***/ },
	/* 90 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const toInteger = __webpack_require__(39);
		const aNumberValue = __webpack_require__(91);
		const repeat = __webpack_require__(92);
		const $toFixed = 1.0.toFixed;
		const floor = Math.floor;
		const data = [0, 0, 0, 0, 0, 0];
		const ERROR = 'Number.toFixed: incorrect invocation!';
		const ZERO = '0';

		const multiply = function multiply(n, c) {
	  let i = -1;
	  let c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
		};
		const divide = function divide(n) {
	  let i = 6;
	  let c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = c % n * 1e7;
	  }
		};
		const numToString = function numToString() {
	  let i = 6;
	  let s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      const t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
		};
		const pow = function pow(x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
		};
		const log = function log(x) {
	  let n = 0;
	  let x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
		};

		$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !__webpack_require__(8)(function() {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
		})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    let x = aNumberValue(this, ERROR);
	    const f = toInteger(fractionDigits);
	    let s = '';
	    let m = ZERO;
	    let e, z, j, k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    // eslint-disable-next-line no-self-compare
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
		});
		/***/ },
	/* 91 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const cof = __webpack_require__(35);
		module.exports = function(it, msg) {
	  if (typeof it !== 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
		};
		/***/ },
	/* 92 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const toInteger = __webpack_require__(39);
		const defined = __webpack_require__(36);

		module.exports = function repeat(count) {
	  let str = String(defined(this));
	  let res = '';
	  let n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError('Count can\'t be negative');
	  for (; n > 0; (n >>>= 1) && (str += str)) {
	    if (n & 1) res += str;
	  } return res;
		};
		/***/ },
	/* 93 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $fails = __webpack_require__(8);
		const aNumberValue = __webpack_require__(91);
		const $toPrecision = 1.0.toPrecision;

		$export($export.P + $export.F * ($fails(function() {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
		}) || !$fails(function() {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
		})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    const that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
		});
		/***/ },
	/* 94 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.1.2.1 Number.EPSILON
		const $export = __webpack_require__(9);

		$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });
		/***/ },
	/* 95 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.1.2.2 Number.isFinite(number)
		const $export = __webpack_require__(9);
		const _isFinite = __webpack_require__(5).isFinite;

		$export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it === 'number' && _isFinite(it);
	  }
		});
		/***/ },
	/* 96 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.1.2.3 Number.isInteger(number)
		const $export = __webpack_require__(9);

		$export($export.S, 'Number', { isInteger: __webpack_require__(97) });
		/***/ },
	/* 97 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.1.2.3 Number.isInteger(number)
		const isObject = __webpack_require__(14);
		const floor = Math.floor;
		module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
		};
		/***/ },
	/* 98 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.1.2.4 Number.isNaN(number)
		const $export = __webpack_require__(9);

		$export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
		});
		/***/ },
	/* 99 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.1.2.5 Number.isSafeInteger(number)
		const $export = __webpack_require__(9);
		const isInteger = __webpack_require__(97);
		const abs = Math.abs;

		$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
		});
		/***/ },
	/* 100 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.1.2.6 Number.MAX_SAFE_INTEGER
		const $export = __webpack_require__(9);

		$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });
		/***/ },
	/* 101 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.1.2.10 Number.MIN_SAFE_INTEGER
		const $export = __webpack_require__(9);

		$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });
		/***/ },
	/* 102 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $parseFloat = __webpack_require__(87);
		// 20.1.2.12 Number.parseFloat(string)
		$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });
		/***/ },
	/* 103 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $parseInt = __webpack_require__(83);
		// 20.1.2.13 Number.parseInt(string, radix)
		$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });
		/***/ },
	/* 104 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.3 Math.acosh(x)
		const $export = __webpack_require__(9);
		const log1p = __webpack_require__(105);
		const sqrt = Math.sqrt;
		const $acosh = Math.acosh;

		$export($export.S + $export.F * !($acosh &&
	// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	Math.floor($acosh(Number.MAX_VALUE)) == 710 &&
	// Tor Browser bug: Math.acosh(Infinity) -> NaN
	$acosh(Infinity) == Infinity), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
		});
		/***/ },
	/* 105 */
	/***/ function(module, exports) {
		'use strict';

		// 20.2.2.20 Math.log1p(x)
		module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
		};
		/***/ },
	/* 106 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.5 Math.asinh(x)
		const $export = __webpack_require__(9);
		const $asinh = Math.asinh;

		function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
		}

		// Tor Browser bug: Math.asinh(0) -> -0
		$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });
		/***/ },
	/* 107 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.7 Math.atanh(x)
		const $export = __webpack_require__(9);
		const $atanh = Math.atanh;

		// Tor Browser bug: Math.atanh(-0) -> 0
		$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
		});
		/***/ },
	/* 108 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.9 Math.cbrt(x)
		const $export = __webpack_require__(9);
		const sign = __webpack_require__(109);

		$export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
		});
		/***/ },
	/* 109 */
	/***/ function(module, exports) {
		'use strict';

		// 20.2.2.28 Math.sign(x)
		module.exports = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
		};
		/***/ },
	/* 110 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.11 Math.clz32(x)
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
		});
		/***/ },
	/* 111 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.12 Math.cosh(x)
		const $export = __webpack_require__(9);
		const exp = Math.exp;

		$export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
		});
		/***/ },
	/* 112 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.14 Math.expm1(x)
		const $export = __webpack_require__(9);
		const $expm1 = __webpack_require__(113);

		$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });
		/***/ },
	/* 113 */
	/***/ function(module, exports) {
		'use strict';

		// 20.2.2.14 Math.expm1(x)
		const $expm1 = Math.expm1;
		module.exports = !$expm1 ||
	// Old FF bug
	$expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 ||
	// Tor Browser bug
	$expm1(-2e-17) != -2e-17 ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
			} : $expm1;
		/***/ },
	/* 114 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.16 Math.fround(x)
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', { fround: __webpack_require__(115) });
		/***/ },
	/* 115 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.16 Math.fround(x)
		const sign = __webpack_require__(109);
		const pow = Math.pow;
		const EPSILON = pow(2, -52);
		const EPSILON32 = pow(2, -23);
		const MAX32 = pow(2, 127) * (2 - EPSILON32);
		const MIN32 = pow(2, -126);

		const roundTiesToEven = function roundTiesToEven(n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
		};

		module.exports = Math.fround || function fround(x) {
	  const $abs = Math.abs(x);
	  const $sign = sign(x);
	  let a, result;
	  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	  a = (1 + EPSILON32 / EPSILON) * $abs;
	  result = a - (a - $abs);
	  // eslint-disable-next-line no-self-compare
	  if (result > MAX32 || result != result) return $sign * Infinity;
	  return $sign * result;
		};
		/***/ },
	/* 116 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
		const $export = __webpack_require__(9);
		const abs = Math.abs;

		$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) {
	    // eslint-disable-line no-unused-vars
	    let sum = 0;
	    let i = 0;
	    const aLen = arguments.length;
	    let larg = 0;
	    let arg, div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
		});
		/***/ },
	/* 117 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.18 Math.imul(x, y)
		const $export = __webpack_require__(9);
		const $imul = Math.imul;

		// some WebKit versions fails with big numbers, some has wrong arity
		$export($export.S + $export.F * __webpack_require__(8)(function() {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
		}), 'Math', {
	  imul: function imul(x, y) {
	    const UINT16 = 0xffff;
	    const xn = +x;
	    const yn = +y;
	    const xl = UINT16 & xn;
	    const yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
		});
		/***/ },
	/* 118 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.21 Math.log10(x)
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) * Math.LOG10E;
	  }
		});
		/***/ },
	/* 119 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.20 Math.log1p(x)
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', { log1p: __webpack_require__(105) });
		/***/ },
	/* 120 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.22 Math.log2(x)
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
		});
		/***/ },
	/* 121 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.28 Math.sign(x)
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', { sign: __webpack_require__(109) });
		/***/ },
	/* 122 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.30 Math.sinh(x)
		const $export = __webpack_require__(9);
		const expm1 = __webpack_require__(113);
		const exp = Math.exp;

		// V8 near Chromium 38 has a problem with very small numbers
		$export($export.S + $export.F * __webpack_require__(8)(function() {
	  return !Math.sinh(-2e-17) != -2e-17;
		}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
		});
		/***/ },
	/* 123 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.33 Math.tanh(x)
		const $export = __webpack_require__(9);
		const expm1 = __webpack_require__(113);
		const exp = Math.exp;

		$export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    const a = expm1(x = +x);
	    const b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
		});
		/***/ },
	/* 124 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.2.2.34 Math.trunc(x)
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
		});
		/***/ },
	/* 125 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const toAbsoluteIndex = __webpack_require__(40);
		const fromCharCode = String.fromCharCode;
		const $fromCodePoint = String.fromCodePoint;

		// length should be 1, old FF problem
		$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) {
	    // eslint-disable-line no-unused-vars
	    const res = [];
	    const aLen = arguments.length;
	    let i = 0;
	    let code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
	    } return res.join('');
	  }
		});
		/***/ },
	/* 126 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const toIObject = __webpack_require__(33);
		const toLength = __webpack_require__(38);

		$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    const tpl = toIObject(callSite.raw);
	    const len = toLength(tpl.length);
	    const aLen = arguments.length;
	    const res = [];
	    let i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    } return res.join('');
	  }
		});
		/***/ },
	/* 127 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// 21.1.3.25 String.prototype.trim()

		__webpack_require__(84)('trim', function($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
		});
		/***/ },
	/* 128 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $at = __webpack_require__(129)(true);

		// 21.1.3.27 String.prototype[@@iterator]()
		__webpack_require__(130)(String, 'String', function(iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
		}, function() {
	  const O = this._t;
	  const index = this._i;
	  let point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
		});
		/***/ },
	/* 129 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const toInteger = __webpack_require__(39);
		const defined = __webpack_require__(36);
		// true  -> String#at
		// false -> String#codePointAt
		module.exports = function(TO_STRING) {
	  return function(that, pos) {
	    const s = String(defined(that));
	    const i = toInteger(pos);
	    const l = s.length;
	    let a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
		};
		/***/ },
	/* 130 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const LIBRARY = __webpack_require__(29);
		const $export = __webpack_require__(9);
		const redefine = __webpack_require__(19);
		const hide = __webpack_require__(11);
		const has = __webpack_require__(6);
		const Iterators = __webpack_require__(131);
		const $iterCreate = __webpack_require__(132);
		const setToStringTag = __webpack_require__(25);
		const getPrototypeOf = __webpack_require__(60);
		const ITERATOR = __webpack_require__(26)('iterator');
		const BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
		const FF_ITERATOR = '@@iterator';
		const KEYS = 'keys';
		const VALUES = 'values';

		const returnThis = function returnThis() {
	  return this;
		};

		module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  const getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    } return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  const TAG = NAME + ' Iterator';
	  const DEF_VALUES = DEFAULT == VALUES;
	  let VALUES_BUG = false;
	  var proto = Base.prototype;
	  const $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  let $default = $native || getMethod(DEFAULT);
	  const $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  const $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  let methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) {
					for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    }
				} else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
		};
		/***/ },
	/* 131 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = {};
		/***/ },
	/* 132 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const create = __webpack_require__(47);
		const descriptor = __webpack_require__(18);
		const setToStringTag = __webpack_require__(25);
		const IteratorPrototype = {};

		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		__webpack_require__(11)(IteratorPrototype, __webpack_require__(26)('iterator'), function() {
	  return this;
		});

		module.exports = function(Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
		};
		/***/ },
	/* 133 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $at = __webpack_require__(129)(false);
		$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
		});
		/***/ },
	/* 134 */
	/***/ function(module, exports, __webpack_require__) {
		// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
		'use strict';

		const $export = __webpack_require__(9);
		const toLength = __webpack_require__(38);
		const context = __webpack_require__(135);
		const ENDS_WITH = 'endsWith';
		const $endsWith = ''[ENDS_WITH];

		$export($export.P + $export.F * __webpack_require__(137)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    const that = context(this, searchString, ENDS_WITH);
	    const endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    const len = toLength(that.length);
	    const end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
	    const search = String(searchString);
	    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
	  }
		});
		/***/ },
	/* 135 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// helper for String#{startsWith, endsWith, includes}
		const isRegExp = __webpack_require__(136);
		const defined = __webpack_require__(36);

		module.exports = function(that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + ' doesn\'t accept regex!');
	  return String(defined(that));
		};
		/***/ },
	/* 136 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 7.2.8 IsRegExp(argument)
		const isObject = __webpack_require__(14);
		const cof = __webpack_require__(35);
		const MATCH = __webpack_require__(26)('match');
		module.exports = function(it) {
	  let isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
		};
		/***/ },
	/* 137 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const MATCH = __webpack_require__(26)('match');
		module.exports = function(KEY) {
	  const re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
		};
		/***/ },
	/* 138 */
	/***/ function(module, exports, __webpack_require__) {
		// 21.1.3.7 String.prototype.includes(searchString, position = 0)
		'use strict';

		const $export = __webpack_require__(9);
		const context = __webpack_require__(135);
		const INCLUDES = 'includes';

		$export($export.P + $export.F * __webpack_require__(137)(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
		});
		/***/ },
	/* 139 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);

		$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(92)
		});
		/***/ },
	/* 140 */
	/***/ function(module, exports, __webpack_require__) {
		// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
		'use strict';

		const $export = __webpack_require__(9);
		const toLength = __webpack_require__(38);
		const context = __webpack_require__(135);
		const STARTS_WITH = 'startsWith';
		const $startsWith = ''[STARTS_WITH];

		$export($export.P + $export.F * __webpack_require__(137)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    const that = context(this, searchString, STARTS_WITH);
	    const index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    const search = String(searchString);
	    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
	  }
		});
		/***/ },
	/* 141 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.2 String.prototype.anchor(name)

		__webpack_require__(142)('anchor', function(createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
		});
		/***/ },
	/* 142 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const fails = __webpack_require__(8);
		const defined = __webpack_require__(36);
		const quot = /"/g;
		// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
		const createHTML = function createHTML(string, tag, attribute, value) {
	  const S = String(defined(string));
	  let p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
		};
		module.exports = function(NAME, exec) {
	  const O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function() {
	    const test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
		};
		/***/ },
	/* 143 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.3 String.prototype.big()

		__webpack_require__(142)('big', function(createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
		});
		/***/ },
	/* 144 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.4 String.prototype.blink()

		__webpack_require__(142)('blink', function(createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
		});
		/***/ },
	/* 145 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.5 String.prototype.bold()

		__webpack_require__(142)('bold', function(createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
		});
		/***/ },
	/* 146 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.6 String.prototype.fixed()

		__webpack_require__(142)('fixed', function(createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
		});
		/***/ },
	/* 147 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.7 String.prototype.fontcolor(color)

		__webpack_require__(142)('fontcolor', function(createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
		});
		/***/ },
	/* 148 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.8 String.prototype.fontsize(size)

		__webpack_require__(142)('fontsize', function(createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
		});
		/***/ },
	/* 149 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.9 String.prototype.italics()

		__webpack_require__(142)('italics', function(createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
		});
		/***/ },
	/* 150 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.10 String.prototype.link(url)

		__webpack_require__(142)('link', function(createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
		});
		/***/ },
	/* 151 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.11 String.prototype.small()

		__webpack_require__(142)('small', function(createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
		});
		/***/ },
	/* 152 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.12 String.prototype.strike()

		__webpack_require__(142)('strike', function(createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
		});
		/***/ },
	/* 153 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.13 String.prototype.sub()

		__webpack_require__(142)('sub', function(createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
		});
		/***/ },
	/* 154 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// B.2.3.14 String.prototype.sup()

		__webpack_require__(142)('sup', function(createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
		});
		/***/ },
	/* 155 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.3.3.1 / 15.9.4.4 Date.now()
		const $export = __webpack_require__(9);

		$export($export.S, 'Date', {
			now: function now() {
	    return new Date().getTime();
	  }
		});
		/***/ },
	/* 156 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const toObject = __webpack_require__(59);
		const toPrimitive = __webpack_require__(17);

		$export($export.P + $export.F * __webpack_require__(8)(function() {
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
				toISOString: function toISOString() {
	      return 1;
	    }
			}) !== 1;
		}), 'Date', {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    const O = toObject(this);
	    const pv = toPrimitive(O);
	    return typeof pv === 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
		});
		/***/ },
	/* 157 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
		const $export = __webpack_require__(9);
		const toISOString = __webpack_require__(158);

		// PhantomJS / old WebKit has a broken implementations
		$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
	  toISOString: toISOString
		});
		/***/ },
	/* 158 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

		const fails = __webpack_require__(8);
		const getTime = Date.prototype.getTime;
		const $toISOString = Date.prototype.toISOString;

		const lz = function lz(num) {
	  return num > 9 ? num : '0' + num;
		};

		// PhantomJS / old WebKit has a broken implementations
		module.exports = fails(function() {
	  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
		}) || !fails(function() {
	  $toISOString.call(new Date(NaN));
		}) ? function toISOString() {
	  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	  const d = this;
	  const y = d.getUTCFullYear();
	  const m = d.getUTCMilliseconds();
	  const s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
			} : $toISOString;
		/***/ },
	/* 159 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const DateProto = Date.prototype;
		const INVALID_DATE = 'Invalid Date';
		const TO_STRING = 'toString';
		const $toString = DateProto[TO_STRING];
		const getTime = DateProto.getTime;
		if (new Date(NaN) + '' != INVALID_DATE) {
	  __webpack_require__(19)(DateProto, TO_STRING, function toString() {
	    const value = getTime.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
		}
		/***/ },
	/* 160 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const TO_PRIMITIVE = __webpack_require__(26)('toPrimitive');
		const proto = Date.prototype;

		if (!(TO_PRIMITIVE in proto)) __webpack_require__(11)(proto, TO_PRIMITIVE, __webpack_require__(161));
		/***/ },
	/* 161 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const anObject = __webpack_require__(13);
		const toPrimitive = __webpack_require__(17);
		const NUMBER = 'number';

		module.exports = function(hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
		};
		/***/ },
	/* 162 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
		const $export = __webpack_require__(9);

		$export($export.S, 'Array', { isArray: __webpack_require__(46) });
		/***/ },
	/* 163 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const ctx = __webpack_require__(21);
		const $export = __webpack_require__(9);
		const toObject = __webpack_require__(59);
		const call = __webpack_require__(164);
		const isArrayIter = __webpack_require__(165);
		const toLength = __webpack_require__(38);
		const createProperty = __webpack_require__(166);
		const getIterFn = __webpack_require__(167);

		$export($export.S + $export.F * !__webpack_require__(168)(function(iter) {
	  Array.from(iter);
		}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    const O = toObject(arrayLike);
	    const C = typeof this === 'function' ? this : Array;
	    const aLen = arguments.length;
	    let mapfn = aLen > 1 ? arguments[1] : undefined;
	    const mapping = mapfn !== undefined;
	    let index = 0;
	    const iterFn = getIterFn(O);
	    let length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
		});
		/***/ },
	/* 164 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// call something on iterator step with safe closing on error
		const anObject = __webpack_require__(13);
		module.exports = function(iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    const ret = iterator.return;
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
		};
		/***/ },
	/* 165 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// check on default Array iterator
		const Iterators = __webpack_require__(131);
		const ITERATOR = __webpack_require__(26)('iterator');
		const ArrayProto = Array.prototype;

		module.exports = function(it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
		};
		/***/ },
	/* 166 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $defineProperty = __webpack_require__(12);
		const createDesc = __webpack_require__(18);

		module.exports = function(object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value)); else object[index] = value;
		};
		/***/ },
	/* 167 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const classof = __webpack_require__(76);
		const ITERATOR = __webpack_require__(26)('iterator');
		const Iterators = __webpack_require__(131);
		module.exports = __webpack_require__(10).getIteratorMethod = function(it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
		};
		/***/ },
	/* 168 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const ITERATOR = __webpack_require__(26)('iterator');
		let SAFE_CLOSING = false;

		try {
	  const riter = [7][ITERATOR]();
	  riter.return = function() {
	    SAFE_CLOSING = true;
	  };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function() {
	    throw 2;
	  });
		} catch (e) { /* empty */ }

		module.exports = function(exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  let safe = false;
	  try {
	    const arr = [7];
	    const iter = arr[ITERATOR]();
	    iter.next = function() {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function() {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
		};
		/***/ },
	/* 169 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const createProperty = __webpack_require__(166);

		// WebKit Array.of isn't generic
		$export($export.S + $export.F * __webpack_require__(8)(function() {
	  function F() { /* empty */ }
	  return !(Array.of.call(F) instanceof F);
		}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of() /* ...args */{
	    let index = 0;
	    const aLen = arguments.length;
	    const result = new (typeof this === 'function' ? this : Array)(aLen);
	    while (aLen > index) {
	      createProperty(result, index, arguments[index++]);
	    }result.length = aLen;
	    return result;
	  }
		});
		/***/ },
	/* 170 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// 22.1.3.13 Array.prototype.join(separator)

		const $export = __webpack_require__(9);
		const toIObject = __webpack_require__(33);
		const arrayJoin = [].join;

		// fallback for not array-like strings
		$export($export.P + $export.F * (__webpack_require__(34) != Object || !__webpack_require__(171)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
		});
		/***/ },
	/* 171 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const fails = __webpack_require__(8);

		module.exports = function(method, arg) {
	  return !!method && fails(function() {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function() { /* empty */ }, 1) : method.call(null);
	  });
		};
		/***/ },
	/* 172 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const html = __webpack_require__(49);
		const cof = __webpack_require__(35);
		const toAbsoluteIndex = __webpack_require__(40);
		const toLength = __webpack_require__(38);
		const arraySlice = [].slice;

		// fallback for not array-like ES3 strings and DOM objects
		$export($export.P + $export.F * __webpack_require__(8)(function() {
	  if (html) arraySlice.call(html);
		}), 'Array', {
	  slice: function slice(begin, end) {
	    const len = toLength(this.length);
	    const klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    const start = toAbsoluteIndex(begin, len);
	    const upTo = toAbsoluteIndex(end, len);
	    const size = toLength(upTo - start);
	    const cloned = Array(size);
	    let i = 0;
	    for (; i < size; i++) {
	      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
	    } return cloned;
	  }
		});
		/***/ },
	/* 173 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const aFunction = __webpack_require__(22);
		const toObject = __webpack_require__(59);
		const fails = __webpack_require__(8);
		const $sort = [].sort;
		const test = [1, 2, 3];

		$export($export.P + $export.F * (fails(function() {
	  // IE8-
	  test.sort(undefined);
		}) || !fails(function() {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
		}) || !__webpack_require__(171)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
	  }
		});
		/***/ },
	/* 174 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $forEach = __webpack_require__(175)(0);
		const STRICT = __webpack_require__(171)([].forEach, true);

		$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
		});
		/***/ },
	/* 175 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 0 -> Array#forEach
		// 1 -> Array#map
		// 2 -> Array#filter
		// 3 -> Array#some
		// 4 -> Array#every
		// 5 -> Array#find
		// 6 -> Array#findIndex
		const ctx = __webpack_require__(21);
		const IObject = __webpack_require__(34);
		const toObject = __webpack_require__(59);
		const toLength = __webpack_require__(38);
		const asc = __webpack_require__(176);
		module.exports = function(TYPE, $create) {
	  const IS_MAP = TYPE == 1;
	  const IS_FILTER = TYPE == 2;
	  const IS_SOME = TYPE == 3;
	  const IS_EVERY = TYPE == 4;
	  const IS_FIND_INDEX = TYPE == 6;
	  const NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  const create = $create || asc;
	  return function($this, callbackfn, that) {
	    const O = toObject($this);
	    const self = IObject(O);
	    const f = ctx(callbackfn, that, 3);
	    const length = toLength(self.length);
	    let index = 0;
	    const result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    let val, res;
	    for (; length > index; index++) {
	      if (NO_HOLES || index in self) {
	        val = self[index];
	        res = f(val, index, O);
	        if (TYPE) {
	          if (IS_MAP) result[index] = res; // map
	          else if (res) {
								switch (TYPE) {
	              case 3:
	                return true; // some
	              case 5:
	                return val; // find
	              case 6:
	                return index; // findIndex
	              case 2:
	                result.push(val); // filter
	            }
							} else if (IS_EVERY) return false; // every
	        }
	      }
	    } return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
		};
		/***/ },
	/* 176 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
		const speciesConstructor = __webpack_require__(177);

		module.exports = function(original, length) {
	  return new (speciesConstructor(original))(length);
		};
		/***/ },
	/* 177 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const isObject = __webpack_require__(14);
		const isArray = __webpack_require__(46);
		const SPECIES = __webpack_require__(26)('species');

		module.exports = function(original) {
	  let C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C === 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
		};
		/***/ },
	/* 178 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $map = __webpack_require__(175)(1);

		$export($export.P + $export.F * !__webpack_require__(171)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
		});
		/***/ },
	/* 179 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $filter = __webpack_require__(175)(2);

		$export($export.P + $export.F * !__webpack_require__(171)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
		});
		/***/ },
	/* 180 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $some = __webpack_require__(175)(3);

		$export($export.P + $export.F * !__webpack_require__(171)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
		});
		/***/ },
	/* 181 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $every = __webpack_require__(175)(4);

		$export($export.P + $export.F * !__webpack_require__(171)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
		});
		/***/ },
	/* 182 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $reduce = __webpack_require__(183);

		$export($export.P + $export.F * !__webpack_require__(171)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
		});
		/***/ },
	/* 183 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const aFunction = __webpack_require__(22);
		const toObject = __webpack_require__(59);
		const IObject = __webpack_require__(34);
		const toLength = __webpack_require__(38);

		module.exports = function(that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  const O = toObject(that);
	  const self = IObject(O);
	  const length = toLength(O.length);
	  let index = isRight ? length - 1 : 0;
	  const i = isRight ? -1 : 1;
	  if (aLen < 2) {
				for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
			}
	  for (; isRight ? index >= 0 : length > index; index += i) {
	    if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	  } return memo;
		};
		/***/ },
	/* 184 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $reduce = __webpack_require__(183);

		$export($export.P + $export.F * !__webpack_require__(171)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
		});
		/***/ },
	/* 185 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $indexOf = __webpack_require__(37)(false);
		const $native = [].indexOf;
		const NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

		$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(171)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	    // convert -0 to +0
	    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
	  }
		});
		/***/ },
	/* 186 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const toIObject = __webpack_require__(33);
		const toInteger = __webpack_require__(39);
		const toLength = __webpack_require__(38);
		const $native = [].lastIndexOf;
		const NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

		$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(171)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    const O = toIObject(this);
	    const length = toLength(O.length);
	    let index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (; index >= 0; index--) {
	      if (index in O) if (O[index] === searchElement) return index || 0;
	    } return -1;
	  }
		});
		/***/ },
	/* 187 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
		const $export = __webpack_require__(9);

		$export($export.P, 'Array', { copyWithin: __webpack_require__(188) });

		__webpack_require__(189)('copyWithin');
		/***/ },
	/* 188 */
	/***/ function(module, exports, __webpack_require__) {
		// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
		'use strict';

		const toObject = __webpack_require__(59);
		const toAbsoluteIndex = __webpack_require__(40);
		const toLength = __webpack_require__(38);

		module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  const O = toObject(this);
	  const len = toLength(O.length);
	  let to = toAbsoluteIndex(target, len);
	  let from = toAbsoluteIndex(start, len);
	  const end = arguments.length > 2 ? arguments[2] : undefined;
	  let count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
	  let inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from]; else delete O[to];
	    to += inc;
	    from += inc;
	  } return O;
		};
		/***/ },
	/* 189 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 22.1.3.31 Array.prototype[@@unscopables]
		const UNSCOPABLES = __webpack_require__(26)('unscopables');
		const ArrayProto = Array.prototype;
		if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
		module.exports = function(key) {
	  ArrayProto[UNSCOPABLES][key] = true;
		};
		/***/ },
	/* 190 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
		const $export = __webpack_require__(9);

		$export($export.P, 'Array', { fill: __webpack_require__(191) });

		__webpack_require__(189)('fill');
		/***/ },
	/* 191 */
	/***/ function(module, exports, __webpack_require__) {
		// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
		'use strict';

		const toObject = __webpack_require__(59);
		const toAbsoluteIndex = __webpack_require__(40);
		const toLength = __webpack_require__(38);
		module.exports = function fill(value /* , start = 0, end = @length */) {
	  const O = toObject(this);
	  const length = toLength(O.length);
	  const aLen = arguments.length;
	  let index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
	  const end = aLen > 2 ? arguments[2] : undefined;
	  const endPos = end === undefined ? length : toAbsoluteIndex(end, length);
	  while (endPos > index) {
	    O[index++] = value;
	  } return O;
		};
		/***/ },
	/* 192 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

		const $export = __webpack_require__(9);
		const $find = __webpack_require__(175)(5);
		const KEY = 'find';
		let forced = true;
		// Shouldn't skip holes
		if (KEY in []) {
			Array(1)[KEY](function() {
	  forced = false;
			});
		}
		$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
		});
		__webpack_require__(189)(KEY);
		/***/ },
	/* 193 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

		const $export = __webpack_require__(9);
		const $find = __webpack_require__(175)(6);
		const KEY = 'findIndex';
		let forced = true;
		// Shouldn't skip holes
		if (KEY in []) {
			Array(1)[KEY](function() {
	  forced = false;
			});
		}
		$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
		});
		__webpack_require__(189)(KEY);
		/***/ },
	/* 194 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(195)('Array');
		/***/ },
	/* 195 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(5);
		const dP = __webpack_require__(12);
		const DESCRIPTORS = __webpack_require__(7);
		const SPECIES = __webpack_require__(26)('species');

		module.exports = function(KEY) {
	  const C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) {
				dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
			}
		};
		/***/ },
	/* 196 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const addToUnscopables = __webpack_require__(189);
		const step = __webpack_require__(197);
		const Iterators = __webpack_require__(131);
		const toIObject = __webpack_require__(33);

		// 22.1.3.4 Array.prototype.entries()
		// 22.1.3.13 Array.prototype.keys()
		// 22.1.3.29 Array.prototype.values()
		// 22.1.3.30 Array.prototype[@@iterator]()
		module.exports = __webpack_require__(130)(Array, 'Array', function(iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		}, function() {
	  const O = this._t;
	  const kind = this._k;
	  const index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
		}, 'values');

		// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		Iterators.Arguments = Iterators.Array;

		addToUnscopables('keys');
		addToUnscopables('values');
		addToUnscopables('entries');
		/***/ },
	/* 197 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(done, value) {
	  return { value: value, done: !!done };
		};
		/***/ },
	/* 198 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(5);
		const inheritIfRequired = __webpack_require__(89);
		const dP = __webpack_require__(12).f;
		const gOPN = __webpack_require__(51).f;
		const isRegExp = __webpack_require__(136);
		const $flags = __webpack_require__(199);
		let $RegExp = global.RegExp;
		const Base = $RegExp;
		const proto = $RegExp.prototype;
		const re1 = /a/g;
		const re2 = /a/g;
		// "new" creates a new object, old webkit buggy here
		const CORRECT_NEW = new $RegExp(re1) !== re1;

		if (__webpack_require__(7) && (!CORRECT_NEW || __webpack_require__(8)(function() {
	  re2[__webpack_require__(26)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
		}))) {
	  $RegExp = function RegExp(p, f) {
	    const tiRE = this instanceof $RegExp;
	    let piRE = isRegExp(p);
	    const fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
	  };
	  const proxy = function proxy(key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function get() {
	        return Base[key];
	      },
	      set: function set(it) {
	        Base[key] = it;
	      }
	    });
	  };
	  for (let keys = gOPN(Base), i = 0; keys.length > i;) {
	    proxy(keys[i++]);
	  }proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(19)(global, 'RegExp', $RegExp);
		}

		__webpack_require__(195)('RegExp');
		/***/ },
	/* 199 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// 21.2.5.3 get RegExp.prototype.flags

		const anObject = __webpack_require__(13);
		module.exports = function() {
	  const that = anObject(this);
	  let result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
		};
		/***/ },
	/* 200 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(201);
		const anObject = __webpack_require__(13);
		const $flags = __webpack_require__(199);
		const DESCRIPTORS = __webpack_require__(7);
		const TO_STRING = 'toString';
		const $toString = /./[TO_STRING];

		const define = function define(fn) {
	  __webpack_require__(19)(RegExp.prototype, TO_STRING, fn, true);
		};

		// 21.2.5.14 RegExp.prototype.toString()
		if (__webpack_require__(8)(function() {
	  return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
		})) {
	  define(function toString() {
	    const R = anObject(this);
	    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	  // FF44- RegExp#toString has a wrong name
		} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
		}
		/***/ },
	/* 201 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 21.2.5.3 get RegExp.prototype.flags()
		if (__webpack_require__(7) && /./g.flags != 'g') {
			__webpack_require__(12).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(199)
			});
		}
		/***/ },
	/* 202 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// @@match logic
		__webpack_require__(203)('match', 1, function(defined, MATCH, $match) {
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp) {
	    'use strict';

	    const O = defined(this);
	    const fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
		});
		/***/ },
	/* 203 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const hide = __webpack_require__(11);
		const redefine = __webpack_require__(19);
		const fails = __webpack_require__(8);
		const defined = __webpack_require__(36);
		const wks = __webpack_require__(26);

		module.exports = function(KEY, length, exec) {
	  const SYMBOL = wks(KEY);
	  const fns = exec(defined, SYMBOL, ''[KEY]);
	  const strfn = fns[0];
	  const rxfn = fns[1];
	  if (fails(function() {
	    const O = {};
	    O[SYMBOL] = function() {
	      return 7;
	    };
	    return ''[KEY](O) != 7;
	  })) {
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	    ? function(string, arg) {
	      return rxfn.call(string, this, arg);
	    }
	    // 21.2.5.6 RegExp.prototype[@@match](string)
	    // 21.2.5.9 RegExp.prototype[@@search](string)
	    : function(string) {
	      return rxfn.call(string, this);
	    });
	  }
		};
		/***/ },
	/* 204 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// @@replace logic
		__webpack_require__(203)('replace', 2, function(defined, REPLACE, $replace) {
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue) {
	    'use strict';

	    const O = defined(this);
	    const fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
		});
		/***/ },
	/* 205 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// @@search logic
		__webpack_require__(203)('search', 1, function(defined, SEARCH, $search) {
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp) {
	    'use strict';

	    const O = defined(this);
	    const fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
		});
		/***/ },
	/* 206 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// @@split logic
		__webpack_require__(203)('split', 2, function(defined, SPLIT, $split) {
	  'use strict';

	  const isRegExp = __webpack_require__(136);
	  const _split = $split;
	  const $push = [].push;
	  const $SPLIT = 'split';
	  const LENGTH = 'length';
	  const LAST_INDEX = 'lastIndex';
	  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
	    const NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function $split(separator, limit) {
	      const string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      const output = [];
	      const flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
	      let lastLastIndex = 0;
	      const splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      const separatorCopy = new RegExp(separator.source, flags + 'g');
	      let separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          // eslint-disable-next-line no-loop-func
	          if (!NPCG && match[LENGTH] > 1) {
								match[0].replace(separator2, function() {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) {
	              if (arguments[i] === undefined) match[i] = undefined;
	            }
	          });
							}
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	    // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function $split(separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    const O = defined(this);
	    const fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
		});
		/***/ },
	/* 207 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const LIBRARY = __webpack_require__(29);
		const global = __webpack_require__(5);
		const ctx = __webpack_require__(21);
		const classof = __webpack_require__(76);
		const $export = __webpack_require__(9);
		const isObject = __webpack_require__(14);
		const aFunction = __webpack_require__(22);
		const anInstance = __webpack_require__(208);
		const forOf = __webpack_require__(209);
		const speciesConstructor = __webpack_require__(210);
		const task = __webpack_require__(211).set;
		const microtask = __webpack_require__(212)();
		const newPromiseCapabilityModule = __webpack_require__(213);
		const perform = __webpack_require__(214);
		const promiseResolve = __webpack_require__(215);
		const PROMISE = 'Promise';
		const TypeError = global.TypeError;
		const process = global.process;
		let $Promise = global[PROMISE];
		const isNode = classof(process) == 'process';
		const empty = function empty() { /* empty */ };
		let Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
		let newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

		const USE_NATIVE = !!(function() {
	  try {
	    // correct subclassing with @@species support
	    const promise = $Promise.resolve(1);
	    const FakePromise = (promise.constructor = {})[__webpack_require__(26)('species')] = function(exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent === 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
		}());

		// helpers
		const sameConstructor = LIBRARY ? function(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
		} : function(a, b) {
	  return a === b;
		};
		const isThenable = function isThenable(it) {
	  let then;
	  return isObject(it) && typeof (then = it.then) === 'function' ? then : false;
		};
		const notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  const chain = promise._c;
	  microtask(function() {
	    const value = promise._v;
	    const ok = promise._s == 1;
	    let i = 0;
	    const run = function run(reaction) {
	      const handler = ok ? reaction.ok : reaction.fail;
	      const resolve = reaction.resolve;
	      const reject = reaction.reject;
	      const domain = reaction.domain;
	      let result, then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value; else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
		};
		var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function() {
	    const value = promise._v;
	    const unhandled = isUnhandled(promise);
	    let result, handler, console;
	    if (unhandled) {
	      result = perform(function() {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
		};
		var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  const chain = promise._a || promise._c;
	  let i = 0;
	  let reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  } return true;
		};
		var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function() {
	    let handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
		};
		const $reject = function $reject(value) {
	  let promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
		};
		const $resolve = function $resolve(value) {
	  let promise = this;
	  let then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError('Promise can\'t be resolved itself');
	    if (then = isThenable(value)) {
	      microtask(function() {
	        const wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
		};

		// constructor polyfill
		if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(216)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      const reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled === 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected === 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    catch: function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function OwnPromiseCapability() {
	    const promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
	    return sameConstructor($Promise, C) ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
	  };
		}

		$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
		__webpack_require__(25)($Promise, PROMISE);
		__webpack_require__(195)(PROMISE);
		Wrapper = __webpack_require__(10)[PROMISE];

		// statics
		$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    const capability = newPromiseCapability(this);
	    const $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
		});
		$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    return promiseResolve(this, x);
	  }
		});
		$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(168)(function(iter) {
	  $Promise.all(iter).catch(empty);
		})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    const C = this;
	    const capability = newPromiseCapability(C);
	    const resolve = capability.resolve;
	    const reject = capability.reject;
	    const result = perform(function() {
	      const values = [];
	      let index = 0;
	      let remaining = 1;
	      forOf(iterable, false, function(promise) {
	        const $index = index++;
	        let alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    const C = this;
	    const capability = newPromiseCapability(C);
	    const reject = capability.reject;
	    const result = perform(function() {
	      forOf(iterable, false, function(promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
		});
		/***/ },
	/* 208 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
		};
		/***/ },
	/* 209 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const ctx = __webpack_require__(21);
		const call = __webpack_require__(164);
		const isArrayIter = __webpack_require__(165);
		const anObject = __webpack_require__(13);
		const toLength = __webpack_require__(38);
		const getIterFn = __webpack_require__(167);
		const BREAK = {};
		const RETURN = {};
		const _exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
	  const iterFn = ITERATOR ? function() {
	    return iterable;
	  } : getIterFn(iterable);
	  const f = ctx(fn, that, entries ? 2 : 1);
	  let index = 0;
	  let length, step, iterator, result;
	  if (typeof iterFn !== 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) {
				for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  }
			} else {
				for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
			}
		};
		_exports.BREAK = BREAK;
		_exports.RETURN = RETURN;
		/***/ },
	/* 210 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 7.3.20 SpeciesConstructor(O, defaultConstructor)
		const anObject = __webpack_require__(13);
		const aFunction = __webpack_require__(22);
		const SPECIES = __webpack_require__(26)('species');
		module.exports = function(O, D) {
	  const C = anObject(O).constructor;
	  let S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
		};
		/***/ },
	/* 211 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const ctx = __webpack_require__(21);
		const invoke = __webpack_require__(79);
		const html = __webpack_require__(49);
		const cel = __webpack_require__(16);
		const global = __webpack_require__(5);
		const process = global.process;
		let setTask = global.setImmediate;
		let clearTask = global.clearImmediate;
		const MessageChannel = global.MessageChannel;
		const Dispatch = global.Dispatch;
		let counter = 0;
		const queue = {};
		const ONREADYSTATECHANGE = 'onreadystatechange';
		let defer, channel, port;
		const run = function run() {
	  const id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    const fn = queue[id];
	    delete queue[id];
	    fn();
	  }
		};
		const listener = function listener(event) {
	  run.call(event.data);
		};
		// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
		if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    const args = [];
	    let i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function() {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn === 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(35)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function defer(id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage === 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
		}
		module.exports = {
	  set: setTask,
	  clear: clearTask
		};
		/***/ },
	/* 212 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(5);
		const macrotask = __webpack_require__(211).set;
		const Observer = global.MutationObserver || global.WebKitMutationObserver;
		const process = global.process;
		const Promise = global.Promise;
		const isNode = __webpack_require__(35)(process) == 'process';

		module.exports = function() {
	  let head, last, notify;

	  const flush = function flush() {
	    let parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify(); else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    let toggle = true;
	    const node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    const promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn) {
	    const task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
		};
		/***/ },
	/* 213 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// 25.4.1.5 NewPromiseCapability(C)

		const aFunction = __webpack_require__(22);

		function PromiseCapability(C) {
	  let resolve, reject;
	  this.promise = new C(function($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
		}

		module.exports.f = function(C) {
	  return new PromiseCapability(C);
		};
		/***/ },
	/* 214 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
		};
		/***/ },
	/* 215 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const newPromiseCapability = __webpack_require__(213);

		module.exports = function(C, x) {
	  const promiseCapability = newPromiseCapability.f(C);
	  const resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
		};
		/***/ },
	/* 216 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const redefine = __webpack_require__(19);
		module.exports = function(target, src, safe) {
	  for (const key in src) {
	    redefine(target, key, src[key], safe);
	  } return target;
		};
		/***/ },
	/* 217 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const strong = __webpack_require__(218);
		const validate = __webpack_require__(219);
		const MAP = 'Map';

		// 23.1 Map Objects
		module.exports = __webpack_require__(220)(MAP, function(get) {
	  return function Map() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
		}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    const entry = strong.getEntry(validate(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
	  }
		}, strong, true);
		/***/ },
	/* 218 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const dP = __webpack_require__(12).f;
		const create = __webpack_require__(47);
		const redefineAll = __webpack_require__(216);
		const ctx = __webpack_require__(21);
		const anInstance = __webpack_require__(208);
		const forOf = __webpack_require__(209);
		const $iterDefine = __webpack_require__(130);
		const step = __webpack_require__(197);
		const setSpecies = __webpack_require__(195);
		const DESCRIPTORS = __webpack_require__(7);
		const fastKey = __webpack_require__(23).fastKey;
		const validate = __webpack_require__(219);
		const SIZE = DESCRIPTORS ? '_s' : 'size';

		const getEntry = function getEntry(that, key) {
	  // fast case
	  const index = fastKey(key);
	  let entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
		};

		module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function(that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME; // collection type
	      that._i = create(null); // index
	      that._f = undefined; // first entry
	      that._l = undefined; // last entry
	      that[SIZE] = 0; // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      delete: function _delete(key) {
	        const that = validate(this, NAME);
	        const entry = getEntry(that, key);
	        if (entry) {
	          const next = entry.n;
	          const prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate(this, NAME);
	        const f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        let entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) {
	            entry = entry.p;
	          }
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS) {
					dP(C.prototype, 'size', {
	      get: function get() {
	        return validate(this, NAME)[SIZE];
	      }
	    });
				}
	    return C;
	  },
	  def: function def(that, key, value) {
	    let entry = getEntry(that, key);
	    let prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	      // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key, // <- key
	        v: value, // <- value
	        p: prev = that._l, // <- previous entry
	        n: undefined, // <- next entry
	        r: false // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function setStrong(C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind) {
	      this._t = validate(iterated, NAME); // target
	      this._k = kind; // kind
	      this._l = undefined; // previous
	    }, function() {
	      const that = this;
	      const kind = that._k;
	      let entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) {
	        entry = entry.p;
	      } // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
		};
		/***/ },
	/* 219 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const isObject = __webpack_require__(14);
		module.exports = function(it, TYPE) {
	  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
		};
		/***/ },
	/* 220 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(5);
		const $export = __webpack_require__(9);
		const redefine = __webpack_require__(19);
		const redefineAll = __webpack_require__(216);
		const meta = __webpack_require__(23);
		const forOf = __webpack_require__(209);
		const anInstance = __webpack_require__(208);
		const isObject = __webpack_require__(14);
		const fails = __webpack_require__(8);
		const $iterDetect = __webpack_require__(168);
		const setToStringTag = __webpack_require__(25);
		const inheritIfRequired = __webpack_require__(89);

		module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  const Base = global[NAME];
	  let C = Base;
	  const ADDER = IS_MAP ? 'set' : 'add';
	  const proto = C && C.prototype;
	  const O = {};
	  const fixMethod = function fixMethod(KEY) {
	    const fn = proto[KEY];
	    redefine(proto, KEY, KEY == 'delete' ? function(a) {
	      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'has' ? function has(a) {
	      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'get' ? function get(a) {
	      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'add' ? function add(a) {
	      fn.call(this, a === 0 ? 0 : a); return this;
	    } : function set(a, b) {
	      fn.call(this, a === 0 ? 0 : a, b); return this;
	    });
	  };
	  if (typeof C !== 'function' || !(IS_WEAK || proto.forEach && !fails(function() {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    const instance = new C();
	    // early implementations not supports chaining
	    const HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    const THROWS_ON_PRIMITIVES = fails(function() {
	      instance.has(1);
	    });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    const ACCEPT_ITERABLES = $iterDetect(function(iter) {
	      new C(iter);
	    }); // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    const BUGGY_ZERO = !IS_WEAK && fails(function() {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      const $instance = new C();
	      let index = 5;
	      while (index--) {
	        $instance[ADDER](index, index);
	      } return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function(target, iterable) {
	        anInstance(target, C, NAME);
	        const that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	  return C;
		};
		/***/ },
	/* 221 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const strong = __webpack_require__(218);
		const validate = __webpack_require__(219);
		const SET = 'Set';

		// 23.2 Set Objects
		module.exports = __webpack_require__(220)(SET, function(get) {
	  return function Set() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
		}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
	  }
		}, strong);
		/***/ },
	/* 222 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const each = __webpack_require__(175)(0);
		const redefine = __webpack_require__(19);
		const meta = __webpack_require__(23);
		const assign = __webpack_require__(70);
		const weak = __webpack_require__(223);
		const isObject = __webpack_require__(14);
		const fails = __webpack_require__(8);
		const validate = __webpack_require__(219);
		const WEAK_MAP = 'WeakMap';
		const getWeak = meta.getWeak;
		const isExtensible = Object.isExtensible;
		const uncaughtFrozenStore = weak.ufstore;
		const tmp = {};
		let InternalMap;

		const wrapper = function wrapper(get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
		};

		const methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      const data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(validate(this, WEAK_MAP), key, value);
	  }
		};

		// 23.3 WeakMap Objects
		const $WeakMap = module.exports = __webpack_require__(220)(WEAK_MAP, wrapper, methods, weak, true, true);

		// IE11 WeakMap frozen keys fix
		if (fails(function() {
	  return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
		})) {
	  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key) {
	    const proto = $WeakMap.prototype;
	    const method = proto[key];
	    redefine(proto, key, function(a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        const result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	        // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
		}
		/***/ },
	/* 223 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const redefineAll = __webpack_require__(216);
		const getWeak = __webpack_require__(23).getWeak;
		const anObject = __webpack_require__(13);
		const isObject = __webpack_require__(14);
		const anInstance = __webpack_require__(208);
		const forOf = __webpack_require__(209);
		const createArrayMethod = __webpack_require__(175);
		const $has = __webpack_require__(6);
		const validate = __webpack_require__(219);
		const arrayFind = createArrayMethod(5);
		const arrayFindIndex = createArrayMethod(6);
		let id = 0;

		// fallback for uncaught frozen keys
		const uncaughtFrozenStore = function uncaughtFrozenStore(that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
		};
		var UncaughtFrozenStore = function UncaughtFrozenStore() {
	  this.a = [];
		};
		const findUncaughtFrozen = function findUncaughtFrozen(store, key) {
	  return arrayFind(store.a, function(it) {
	    return it[0] === key;
	  });
		};
		UncaughtFrozenStore.prototype = {
	  get: function get(key) {
	    const entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function has(key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function set(key, value) {
	    const entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value; else this.a.push([key, value]);
	  },
	  delete: function _delete(key) {
	    const index = arrayFindIndex(this.a, function(it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
		};

		module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function(that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME; // collection type
	      that._i = id++; // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      delete: function _delete(key) {
	        if (!isObject(key)) return false;
	        const data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).delete(key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        const data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    const data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value); else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
		};
		/***/ },
	/* 224 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const weak = __webpack_require__(223);
		const validate = __webpack_require__(219);
		const WEAK_SET = 'WeakSet';

		// 23.4 WeakSet Objects
		__webpack_require__(220)(WEAK_SET, function(get) {
	  return function WeakSet() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
		}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(validate(this, WEAK_SET), value, true);
	  }
		}, weak, false, true);
		/***/ },
	/* 225 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $typed = __webpack_require__(226);
		const buffer = __webpack_require__(227);
		const anObject = __webpack_require__(13);
		const toAbsoluteIndex = __webpack_require__(40);
		const toLength = __webpack_require__(38);
		const isObject = __webpack_require__(14);
		const ArrayBuffer = __webpack_require__(5).ArrayBuffer;
		const speciesConstructor = __webpack_require__(210);
		const $ArrayBuffer = buffer.ArrayBuffer;
		const $DataView = buffer.DataView;
		const $isView = $typed.ABV && ArrayBuffer.isView;
		const $slice = $ArrayBuffer.prototype.slice;
		const VIEW = $typed.VIEW;
		const ARRAY_BUFFER = 'ArrayBuffer';

		$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

		$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
		});

		$export($export.P + $export.U + $export.F * __webpack_require__(8)(function() {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
		}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    const len = anObject(this).byteLength;
	    let first = toAbsoluteIndex(start, len);
	    const final = toAbsoluteIndex(end === undefined ? len : end, len);
	    const result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
	    const viewS = new $DataView(this);
	    const viewT = new $DataView(result);
	    let index = 0;
	    while (first < final) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
		});

		__webpack_require__(195)(ARRAY_BUFFER);
		/***/ },
	/* 226 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(5);
		const hide = __webpack_require__(11);
		const uid = __webpack_require__(20);
		const TYPED = uid('typed_array');
		const VIEW = uid('view');
		const ABV = !!(global.ArrayBuffer && global.DataView);
		let CONSTR = ABV;
		let i = 0;
		const l = 9;
		let Typed;

		const TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

		while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
		}

		module.exports = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
		};
		/***/ },
	/* 227 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(5);
		const DESCRIPTORS = __webpack_require__(7);
		const LIBRARY = __webpack_require__(29);
		const $typed = __webpack_require__(226);
		const hide = __webpack_require__(11);
		const redefineAll = __webpack_require__(216);
		const fails = __webpack_require__(8);
		const anInstance = __webpack_require__(208);
		const toInteger = __webpack_require__(39);
		const toLength = __webpack_require__(38);
		const toIndex = __webpack_require__(228);
		const gOPN = __webpack_require__(51).f;
		const dP = __webpack_require__(12).f;
		const arrayFill = __webpack_require__(191);
		const setToStringTag = __webpack_require__(25);
		const ARRAY_BUFFER = 'ArrayBuffer';
		const DATA_VIEW = 'DataView';
		const PROTOTYPE = 'prototype';
		const WRONG_LENGTH = 'Wrong length!';
		const WRONG_INDEX = 'Wrong index!';
		let $ArrayBuffer = global[ARRAY_BUFFER];
		let $DataView = global[DATA_VIEW];
		const Math = global.Math;
		const RangeError = global.RangeError;
		// eslint-disable-next-line no-shadow-restricted-names
		const Infinity = global.Infinity;
		const BaseBuffer = $ArrayBuffer;
		const abs = Math.abs;
		const pow = Math.pow;
		const floor = Math.floor;
		const log = Math.log;
		const LN2 = Math.LN2;
		const BUFFER = 'buffer';
		const BYTE_LENGTH = 'byteLength';
		const BYTE_OFFSET = 'byteOffset';
		const $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
		const $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
		const $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

		// IEEE754 conversions based on https://github.com/feross/ieee754
		function packIEEE754(value, mLen, nBytes) {
	  const buffer = Array(nBytes);
	  let eLen = nBytes * 8 - mLen - 1;
	  const eMax = (1 << eLen) - 1;
	  const eBias = eMax >> 1;
	  const rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
	  let i = 0;
	  const s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	  let e, m, c;
	  value = abs(value);
	  // eslint-disable-next-line no-self-compare
	  if (value != value || value === Infinity) {
	    // eslint-disable-next-line no-self-compare
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}
	  buffer[--i] |= s * 128;
	  return buffer;
		}
		function unpackIEEE754(buffer, mLen, nBytes) {
	  const eLen = nBytes * 8 - mLen - 1;
	  const eMax = (1 << eLen) - 1;
	  const eBias = eMax >> 1;
	  let nBits = eLen - 7;
	  let i = nBytes - 1;
	  let s = buffer[i--];
	  let e = s & 127;
	  let m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
		}

		function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
		}
		function packI8(it) {
	  return [it & 0xff];
		}
		function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
		}
		function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
		}
		function packF64(it) {
	  return packIEEE754(it, 52, 8);
		}
		function packF32(it) {
	  return packIEEE754(it, 23, 4);
		}

		function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, {
				get: function get() {
	      return this[internal];
	    }
			});
		}

		function get(view, bytes, index, isLittleEndian) {
	  const numIndex = +index;
	  const intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  const store = view[$BUFFER]._b;
	  const start = intIndex + view[$OFFSET];
	  const pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
		}
		function set(view, bytes, index, conversion, value, isLittleEndian) {
	  const numIndex = +index;
	  const intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  const store = view[$BUFFER]._b;
	  const start = intIndex + view[$OFFSET];
	  const pack = conversion(+value);
	  for (let i = 0; i < bytes; i++) {
	    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	  }
		}

		if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
	    const byteLength = toIndex(length);
	    this._b = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    const bufferLength = buffer[$LENGTH];
	    const offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /* , littleEndian */) {
	      const bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /* , littleEndian */) {
	      const bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
		} else {
	  if (!fails(function() {
	    $ArrayBuffer(1);
	  }) || !fails(function() {
	    new $ArrayBuffer(-1); // eslint-disable-line no-new
	  }) || fails(function() {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	    new $ArrayBuffer(1.5); // eslint-disable-line no-new
	    new $ArrayBuffer(NaN); // eslint-disable-line no-new
	    return $ArrayBuffer.name != ARRAY_BUFFER;
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      anInstance(this, $ArrayBuffer);
	      return new BaseBuffer(toIndex(length));
	    };
	    const ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    }
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  const view = new $DataView(new $ArrayBuffer(2));
	  const $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) {
				redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
			}
		}
		setToStringTag($ArrayBuffer, ARRAY_BUFFER);
		setToStringTag($DataView, DATA_VIEW);
		hide($DataView[PROTOTYPE], $typed.VIEW, true);
		exports[ARRAY_BUFFER] = $ArrayBuffer;
		exports[DATA_VIEW] = $DataView;
		/***/ },
	/* 228 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://tc39.github.io/ecma262/#sec-toindex
		const toInteger = __webpack_require__(39);
		const toLength = __webpack_require__(38);
		module.exports = function(it) {
	  if (it === undefined) return 0;
	  const number = toInteger(it);
	  const length = toLength(number);
	  if (number !== length) throw RangeError('Wrong length!');
	  return length;
		};
		/***/ },
	/* 229 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		$export($export.G + $export.W + $export.F * !__webpack_require__(226).ABV, {
	  DataView: __webpack_require__(227).DataView
		});
		/***/ },
	/* 230 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(231)('Int8', 1, function(init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
		});
		/***/ },
	/* 231 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

		if (__webpack_require__(7)) {
	  const LIBRARY = __webpack_require__(29);
	  const global = __webpack_require__(5);
	  const fails = __webpack_require__(8);
	  const $export = __webpack_require__(9);
	  const $typed = __webpack_require__(226);
	  const $buffer = __webpack_require__(227);
	  const ctx = __webpack_require__(21);
	  const anInstance = __webpack_require__(208);
	  const propertyDesc = __webpack_require__(18);
	  const hide = __webpack_require__(11);
	  const redefineAll = __webpack_require__(216);
	  const toInteger = __webpack_require__(39);
	  const toLength = __webpack_require__(38);
	  const toIndex = __webpack_require__(228);
	  const toAbsoluteIndex = __webpack_require__(40);
	  const toPrimitive = __webpack_require__(17);
	  const has = __webpack_require__(6);
	  const classof = __webpack_require__(76);
	  const isObject = __webpack_require__(14);
	  const toObject = __webpack_require__(59);
	  const isArrayIter = __webpack_require__(165);
	  const create = __webpack_require__(47);
	  const getPrototypeOf = __webpack_require__(60);
	  const gOPN = __webpack_require__(51).f;
	  const getIterFn = __webpack_require__(167);
	  const uid = __webpack_require__(20);
	  const wks = __webpack_require__(26);
	  const createArrayMethod = __webpack_require__(175);
	  const createArrayIncludes = __webpack_require__(37);
	  const speciesConstructor = __webpack_require__(210);
	  const ArrayIterators = __webpack_require__(196);
	  const Iterators = __webpack_require__(131);
	  const $iterDetect = __webpack_require__(168);
	  const setSpecies = __webpack_require__(195);
	  const arrayFill = __webpack_require__(191);
	  const arrayCopyWithin = __webpack_require__(188);
	  const $DP = __webpack_require__(12);
	  const $GOPD = __webpack_require__(52);
	  const dP = $DP.f;
	  const gOPD = $GOPD.f;
	  const RangeError = global.RangeError;
	  const TypeError = global.TypeError;
	  const Uint8Array = global.Uint8Array;
	  const ARRAY_BUFFER = 'ArrayBuffer';
	  const SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
	  const BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	  const PROTOTYPE = 'prototype';
	  const ArrayProto = Array[PROTOTYPE];
	  const $ArrayBuffer = $buffer.ArrayBuffer;
	  const $DataView = $buffer.DataView;
	  const arrayForEach = createArrayMethod(0);
	  const arrayFilter = createArrayMethod(2);
	  const arraySome = createArrayMethod(3);
	  const arrayEvery = createArrayMethod(4);
	  const arrayFind = createArrayMethod(5);
	  const arrayFindIndex = createArrayMethod(6);
	  const arrayIncludes = createArrayIncludes(true);
	  const arrayIndexOf = createArrayIncludes(false);
	  const arrayValues = ArrayIterators.values;
	  const arrayKeys = ArrayIterators.keys;
	  const arrayEntries = ArrayIterators.entries;
	  const arrayLastIndexOf = ArrayProto.lastIndexOf;
	  const arrayReduce = ArrayProto.reduce;
	  const arrayReduceRight = ArrayProto.reduceRight;
	  const arrayJoin = ArrayProto.join;
	  const arraySort = ArrayProto.sort;
	  const arraySlice = ArrayProto.slice;
	  let arrayToString = ArrayProto.toString;
	  let arrayToLocaleString = ArrayProto.toLocaleString;
	  const ITERATOR = wks('iterator');
	  const TAG = wks('toStringTag');
	  const TYPED_CONSTRUCTOR = uid('typed_constructor');
	  const DEF_CONSTRUCTOR = uid('def_constructor');
	  const ALL_CONSTRUCTORS = $typed.CONSTR;
	  const TYPED_ARRAY = $typed.TYPED;
	  const VIEW = $typed.VIEW;
	  const WRONG_LENGTH = 'Wrong length!';

	  const $map = createArrayMethod(1, function(O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  const LITTLE_ENDIAN = fails(function() {
	    // eslint-disable-next-line no-undef
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  const FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function() {
	    new Uint8Array(1).set({});
	  });

	  const toOffset = function toOffset(it, BYTES) {
	    const offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };

	  const validate = function validate(it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function allocate(C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  const speciesFromList = function speciesFromList(O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function fromList(C, list) {
	    let index = 0;
	    const length = list.length;
	    const result = allocate(C, length);
	    while (length > index) {
	      result[index] = list[index++];
	    } return result;
	  };

	  const addGetter = function addGetter(it, key, internal) {
	    dP(it, key, {
					get: function get() {
	        return this._d[internal];
	      }
				});
	  };

	  const $from = function from(source /* , mapfn, thisArg */) {
	    let O = toObject(source);
	    const aLen = arguments.length;
	    let mapfn = aLen > 1 ? arguments[1] : undefined;
	    const mapping = mapfn !== undefined;
	    const iterFn = getIterFn(O);
	    let i, length, values, result, step, iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      }O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  const $of = function of() /* ...items */{
	    let index = 0;
	    const length = arguments.length;
	    const result = allocate(this, length);
	    while (length > index) {
	      result[index] = arguments[index++];
	    } return result;
	  };

	  // iOS Safari 6.x fails here
	  const TO_LOCALE_BUG = !!Uint8Array && fails(function() {
	    arrayToLocaleString.call(new Uint8Array(1));
	  });

	  const $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  const proto = {
	    copyWithin: function copyWithin(target, start /* , end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /* , thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /* , start, end */) {
	      // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /* , thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /* , thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /* , thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /* , thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /* , fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /* , fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) {
	      // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) {
	      // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /* , thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /* , initialValue */) {
	      // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	      // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      const that = this;
	      let length = validate(that).length;
	      const middle = Math.floor(length / 2);
	      let index = 0;
	      let value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      } return that;
	    },
	    some: function some(callbackfn /* , thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      const O = validate(this);
	      const length = O.length;
	      const $begin = toAbsoluteIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
	    }
	  };

	  const $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  const $set = function set(arrayLike /* , offset */) {
	    validate(this);
	    const offset = toOffset(arguments[1], 1);
	    const length = this.length;
	    const src = toObject(arrayLike);
	    const len = toLength(src.length);
	    let index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) {
	      this[offset + index] = src[index++];
	    }
	  };

	  const $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };

	  const isTAIndex = function isTAIndex(target, key) {
	    return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
	  };
	  const $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
	  };
	  const $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') &&
	    // TODO: add validation descriptor w/o calling accessors
	    !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
	      target[key] = desc.value;
	      return target;
	    } return dP(target, key, desc);
	  };

	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });

	  if (fails(function() {
	    arrayToString.call({});
	  })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }

	  const $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function constructor() { /* noop */ },
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function get() {
	      return this[TYPED_ARRAY];
	    }
	  });

	  // eslint-disable-next-line max-statements
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    const NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
	    const GETTER = 'get' + KEY;
	    const SETTER = 'set' + KEY;
	    let TypedArray = global[NAME];
	    const Base = TypedArray || {};
	    const TAC = TypedArray && getPrototypeOf(TypedArray);
	    const FORCED = !TypedArray || !$typed.ABV;
	    const O = {};
	    let TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    const getter = function getter(that, index) {
	      const data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    const setter = function setter(that, index, value) {
	      const data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    const addElement = function addElement(that, index) {
	      dP(that, index, {
	        get: function get() {
	          return getter(this, index);
	        },
	        set: function set(value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function(that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        let index = 0;
	        let offset = 0;
	        let buffer, byteLength, length, klass;
	        if (!isObject(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          const $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) {
	          addElement(that, index++);
	        }
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!fails(function() {
	      TypedArray(1);
	    }) || !fails(function() {
	      new TypedArray(-1); // eslint-disable-line no-new
	    }) || !$iterDetect(function(iter) {
	      new TypedArray(); // eslint-disable-line no-new
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(1.5); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function(that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        let klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(toIndex(data));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    const $nativeIterator = TypedArrayPrototype[ITERATOR];
	    const CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
	    const $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function get() {
	          return NAME;
	        }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES
	    });

	    $export($export.S + $export.F * fails(function() {
	      Base.of.call(TypedArray, 1);
	    }), NAME, {
	      from: $from,
	      of: $of
	    });

	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

	    $export($export.P + $export.F * fails(function() {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });

	    $export($export.P + $export.F * (fails(function() {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function() {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
		} else module.exports = function() { /* empty */ };
		/***/ },
	/* 232 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(231)('Uint8', 1, function(init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
		});
		/***/ },
	/* 233 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(231)('Uint8', 1, function(init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
		}, true);
		/***/ },
	/* 234 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(231)('Int16', 2, function(init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
		});
		/***/ },
	/* 235 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(231)('Uint16', 2, function(init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
		});
		/***/ },
	/* 236 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(231)('Int32', 4, function(init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
		});
		/***/ },
	/* 237 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(231)('Uint32', 4, function(init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
		});
		/***/ },
	/* 238 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(231)('Float32', 4, function(init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
		});
		/***/ },
	/* 239 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(231)('Float64', 8, function(init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
		});
		/***/ },
	/* 240 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
		const $export = __webpack_require__(9);
		const aFunction = __webpack_require__(22);
		const anObject = __webpack_require__(13);
		const rApply = (__webpack_require__(5).Reflect || {}).apply;
		const fApply = Function.apply;
		// MS Edge argumentsList argument is optional
		$export($export.S + $export.F * !__webpack_require__(8)(function() {
	  rApply(function() { /* empty */ });
		}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    const T = aFunction(target);
	    const L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
		});
		/***/ },
	/* 241 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
		const $export = __webpack_require__(9);
		const create = __webpack_require__(47);
		const aFunction = __webpack_require__(22);
		const anObject = __webpack_require__(13);
		const isObject = __webpack_require__(14);
		const fails = __webpack_require__(8);
		const bind = __webpack_require__(78);
		const rConstruct = (__webpack_require__(5).Reflect || {}).construct;

		// MS Edge supports only 2 arguments and argumentsList argument is optional
		// FF Nightly sets third argument as `new.target`, but does not create `this` from it
		const NEW_TARGET_BUG = fails(function() {
	  function F() { /* empty */ }
	  return !(rConstruct(function() { /* empty */ }, [], F) instanceof F);
		});
		const ARGS_BUG = !fails(function() {
	  rConstruct(function() { /* empty */ });
		});

		$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /* , newTarget */) {
	    aFunction(Target);
	    anObject(args);
	    const newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0:
	          return new Target();
	        case 1:
	          return new Target(args[0]);
	        case 2:
	          return new Target(args[0], args[1]);
	        case 3:
	          return new Target(args[0], args[1], args[2]);
	        case 4:
	          return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      const $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    const proto = newTarget.prototype;
	    const instance = create(isObject(proto) ? proto : Object.prototype);
	    const result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
		});
		/***/ },
	/* 242 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
		const dP = __webpack_require__(12);
		const $export = __webpack_require__(9);
		const anObject = __webpack_require__(13);
		const toPrimitive = __webpack_require__(17);

		// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
		$export($export.S + $export.F * __webpack_require__(8)(function() {
	  // eslint-disable-next-line no-undef
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
		}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
		});
		/***/ },
	/* 243 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.4 Reflect.deleteProperty(target, propertyKey)
		const $export = __webpack_require__(9);
		const gOPD = __webpack_require__(52).f;
		const anObject = __webpack_require__(13);

		$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    const desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
		});
		/***/ },
	/* 244 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// 26.1.5 Reflect.enumerate(target)

		const $export = __webpack_require__(9);
		const anObject = __webpack_require__(13);
		const Enumerate = function Enumerate(iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0; // next index
	  const keys = this._k = []; // keys
	  let key;
	  for (key in iterated) {
	    keys.push(key);
	  }
		};
		__webpack_require__(132)(Enumerate, 'Object', function() {
	  const that = this;
	  const keys = that._k;
	  let key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
		});

		$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
		});
		/***/ },
	/* 245 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.6 Reflect.get(target, propertyKey [, receiver])
		const gOPD = __webpack_require__(52);
		const getPrototypeOf = __webpack_require__(60);
		const has = __webpack_require__(6);
		const $export = __webpack_require__(9);
		const isObject = __webpack_require__(14);
		const anObject = __webpack_require__(13);

		function get(target, propertyKey /* , receiver */) {
	  const receiver = arguments.length < 3 ? target : arguments[2];
	  let desc, proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
		}

		$export($export.S, 'Reflect', { get: get });
		/***/ },
	/* 246 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
		const gOPD = __webpack_require__(52);
		const $export = __webpack_require__(9);
		const anObject = __webpack_require__(13);

		$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
		});
		/***/ },
	/* 247 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.8 Reflect.getPrototypeOf(target)
		const $export = __webpack_require__(9);
		const getProto = __webpack_require__(60);
		const anObject = __webpack_require__(13);

		$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
		});
		/***/ },
	/* 248 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.9 Reflect.has(target, propertyKey)
		const $export = __webpack_require__(9);

		$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
		});
		/***/ },
	/* 249 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.10 Reflect.isExtensible(target)
		const $export = __webpack_require__(9);
		const anObject = __webpack_require__(13);
		const $isExtensible = Object.isExtensible;

		$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
		});
		/***/ },
	/* 250 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.11 Reflect.ownKeys(target)
		const $export = __webpack_require__(9);

		$export($export.S, 'Reflect', { ownKeys: __webpack_require__(251) });
		/***/ },
	/* 251 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// all object keys, includes non-enumerable and symbols
		const gOPN = __webpack_require__(51);
		const gOPS = __webpack_require__(44);
		const anObject = __webpack_require__(13);
		const Reflect = __webpack_require__(5).Reflect;
		module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  const keys = gOPN.f(anObject(it));
	  const getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
		};
		/***/ },
	/* 252 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.12 Reflect.preventExtensions(target)
		const $export = __webpack_require__(9);
		const anObject = __webpack_require__(13);
		const $preventExtensions = Object.preventExtensions;

		$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
		});
		/***/ },
	/* 253 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
		const dP = __webpack_require__(12);
		const gOPD = __webpack_require__(52);
		const getPrototypeOf = __webpack_require__(60);
		const has = __webpack_require__(6);
		const $export = __webpack_require__(9);
		const createDesc = __webpack_require__(18);
		const anObject = __webpack_require__(13);
		const isObject = __webpack_require__(14);

		function set(target, propertyKey, V /* , receiver */) {
	  const receiver = arguments.length < 4 ? target : arguments[3];
	  let ownDesc = gOPD.f(anObject(target), propertyKey);
	  let existingDescriptor, proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
		}

		$export($export.S, 'Reflect', { set: set });
		/***/ },
	/* 254 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 26.1.14 Reflect.setPrototypeOf(target, proto)
		const $export = __webpack_require__(9);
		const setProto = __webpack_require__(74);

		if (setProto) {
			$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
			});
		}
		/***/ },
	/* 255 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://github.com/tc39/Array.prototype.includes

		const $export = __webpack_require__(9);
		const $includes = __webpack_require__(37)(true);

		$export($export.P, 'Array', {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
		});

		__webpack_require__(189)('includes');
		/***/ },
	/* 256 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap

		const $export = __webpack_require__(9);
		const flattenIntoArray = __webpack_require__(257);
		const toObject = __webpack_require__(59);
		const toLength = __webpack_require__(38);
		const aFunction = __webpack_require__(22);
		const arraySpeciesCreate = __webpack_require__(176);

		$export($export.P, 'Array', {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    const O = toObject(this);
	    let sourceLen, A;
	    aFunction(callbackfn);
	    sourceLen = toLength(O.length);
	    A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
	    return A;
	  }
		});

		__webpack_require__(189)('flatMap');
		/***/ },
	/* 257 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

		const isArray = __webpack_require__(46);
		const isObject = __webpack_require__(14);
		const toLength = __webpack_require__(38);
		const ctx = __webpack_require__(21);
		const IS_CONCAT_SPREADABLE = __webpack_require__(26)('isConcatSpreadable');

		function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  let targetIndex = start;
	  let sourceIndex = 0;
	  const mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
	  let element, spreadable;

	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

	      spreadable = false;
	      if (isObject(element)) {
	        spreadable = element[IS_CONCAT_SPREADABLE];
	        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
	      }

	      if (spreadable && depth > 0) {
	        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
	        target[targetIndex] = element;
	      }

	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
		}

		module.exports = flattenIntoArray;
		/***/ },
	/* 258 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten

		const $export = __webpack_require__(9);
		const flattenIntoArray = __webpack_require__(257);
		const toObject = __webpack_require__(59);
		const toLength = __webpack_require__(38);
		const toInteger = __webpack_require__(39);
		const arraySpeciesCreate = __webpack_require__(176);

		$export($export.P, 'Array', {
	  flatten: function flatten() /* depthArg = 1 */{
	    const depthArg = arguments[0];
	    const O = toObject(this);
	    const sourceLen = toLength(O.length);
	    const A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
	    return A;
	  }
		});

		__webpack_require__(189)('flatten');
		/***/ },
	/* 259 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://github.com/mathiasbynens/String.prototype.at

		const $export = __webpack_require__(9);
		const $at = __webpack_require__(129)(true);

		$export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
		});
		/***/ },
	/* 260 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://github.com/tc39/proposal-string-pad-start-end

		const $export = __webpack_require__(9);
		const $pad = __webpack_require__(261);

		$export($export.P, 'String', {
	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
		});
		/***/ },
	/* 261 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://github.com/tc39/proposal-string-pad-start-end
		const toLength = __webpack_require__(38);
		const repeat = __webpack_require__(92);
		const defined = __webpack_require__(36);

		module.exports = function(that, maxLength, fillString, left) {
	  const S = String(defined(that));
	  const stringLength = S.length;
	  const fillStr = fillString === undefined ? ' ' : String(fillString);
	  const intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  const fillLen = intMaxLength - stringLength;
	  let stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
		};
		/***/ },
	/* 262 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://github.com/tc39/proposal-string-pad-start-end

		const $export = __webpack_require__(9);
		const $pad = __webpack_require__(261);

		$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
		});
		/***/ },
	/* 263 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://github.com/sebmarkbage/ecmascript-string-left-right-trim

		__webpack_require__(84)('trimLeft', function($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
		}, 'trimStart');
		/***/ },
	/* 264 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://github.com/sebmarkbage/ecmascript-string-left-right-trim

		__webpack_require__(84)('trimRight', function($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
		}, 'trimEnd');
		/***/ },
	/* 265 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://tc39.github.io/String.prototype.matchAll/

		const $export = __webpack_require__(9);
		const defined = __webpack_require__(36);
		const toLength = __webpack_require__(38);
		const isRegExp = __webpack_require__(136);
		const getFlags = __webpack_require__(199);
		const RegExpProto = RegExp.prototype;

		const $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
	  this._r = regexp;
	  this._s = string;
		};

		__webpack_require__(132)($RegExpStringIterator, 'RegExp String', function next() {
	  const match = this._r.exec(this._s);
	  return { value: match, done: match === null };
		});

		$export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	    const S = String(this);
	    const flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
	    const rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
		});
		/***/ },
	/* 266 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(28)('asyncIterator');
		/***/ },
	/* 267 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(28)('observable');
		/***/ },
	/* 268 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://github.com/tc39/proposal-object-getownpropertydescriptors
		const $export = __webpack_require__(9);
		const ownKeys = __webpack_require__(251);
		const toIObject = __webpack_require__(33);
		const gOPD = __webpack_require__(52);
		const createProperty = __webpack_require__(166);

		$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    const O = toIObject(object);
	    const getDesc = gOPD.f;
	    const keys = ownKeys(O);
	    const result = {};
	    let i = 0;
	    let key, desc;
	    while (keys.length > i) {
	      desc = getDesc(O, key = keys[i++]);
	      if (desc !== undefined) createProperty(result, key, desc);
	    }
	    return result;
	  }
		});
		/***/ },
	/* 269 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://github.com/tc39/proposal-object-values-entries
		const $export = __webpack_require__(9);
		const $values = __webpack_require__(270)(false);

		$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
		});
		/***/ },
	/* 270 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const getKeys = __webpack_require__(31);
		const toIObject = __webpack_require__(33);
		const isEnum = __webpack_require__(45).f;
		module.exports = function(isEntries) {
	  return function(it) {
	    const O = toIObject(it);
	    const keys = getKeys(O);
	    const length = keys.length;
	    let i = 0;
	    const result = [];
	    let key;
	    while (length > i) {
	      if (isEnum.call(O, key = keys[i++])) {
	        result.push(isEntries ? [key, O[key]] : O[key]);
	      }
	    } return result;
	  };
		};
		/***/ },
	/* 271 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://github.com/tc39/proposal-object-values-entries
		const $export = __webpack_require__(9);
		const $entries = __webpack_require__(270)(true);

		$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
		});
		/***/ },
	/* 272 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const toObject = __webpack_require__(59);
		const aFunction = __webpack_require__(22);
		const $defineProperty = __webpack_require__(12);

		// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
		__webpack_require__(7) && $export($export.P + __webpack_require__(273), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
		});
		/***/ },
	/* 273 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// Forced replacement prototype accessors methods

		module.exports = __webpack_require__(29) || !__webpack_require__(8)(function() {
	  const K = Math.random();
	  // In FF throws only define methods
	  // eslint-disable-next-line no-undef, no-useless-call
	  __defineSetter__.call(null, K, function() { /* empty */ });
	  delete __webpack_require__(5)[K];
		});
		/***/ },
	/* 274 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const toObject = __webpack_require__(59);
		const aFunction = __webpack_require__(22);
		const $defineProperty = __webpack_require__(12);

		// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
		__webpack_require__(7) && $export($export.P + __webpack_require__(273), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
		});
		/***/ },
	/* 275 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const toObject = __webpack_require__(59);
		const toPrimitive = __webpack_require__(17);
		const getPrototypeOf = __webpack_require__(60);
		const getOwnPropertyDescriptor = __webpack_require__(52).f;

		// B.2.2.4 Object.prototype.__lookupGetter__(P)
		__webpack_require__(7) && $export($export.P + __webpack_require__(273), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    let O = toObject(this);
	    const K = toPrimitive(P, true);
	    let D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
		});
		/***/ },
	/* 276 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const toObject = __webpack_require__(59);
		const toPrimitive = __webpack_require__(17);
		const getPrototypeOf = __webpack_require__(60);
		const getOwnPropertyDescriptor = __webpack_require__(52).f;

		// B.2.2.5 Object.prototype.__lookupSetter__(P)
		__webpack_require__(7) && $export($export.P + __webpack_require__(273), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    let O = toObject(this);
	    const K = toPrimitive(P, true);
	    let D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
		});
		/***/ },
	/* 277 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://github.com/DavidBruant/Map-Set.prototype.toJSON
		const $export = __webpack_require__(9);

		$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(278)('Map') });
		/***/ },
	/* 278 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://github.com/DavidBruant/Map-Set.prototype.toJSON
		const classof = __webpack_require__(76);
		const from = __webpack_require__(279);
		module.exports = function(NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + '#toJSON isn\'t generic');
	    return from(this);
	  };
		};
		/***/ },
	/* 279 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const forOf = __webpack_require__(209);

		module.exports = function(iter, ITERATOR) {
	  const result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
		};
		/***/ },
	/* 280 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://github.com/DavidBruant/Map-Set.prototype.toJSON
		const $export = __webpack_require__(9);

		$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(278)('Set') });
		/***/ },
	/* 281 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
		__webpack_require__(282)('Map');
		/***/ },
	/* 282 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://tc39.github.io/proposal-setmap-offrom/

		const $export = __webpack_require__(9);

		module.exports = function(COLLECTION) {
	  $export($export.S, COLLECTION, {
				of: function of() {
	      let length = arguments.length;
	      const A = Array(length);
	      while (length--) {
	        A[length] = arguments[length];
	      } return new this(A);
	    }
			});
		};
		/***/ },
	/* 283 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
		__webpack_require__(282)('Set');
		/***/ },
	/* 284 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
		__webpack_require__(282)('WeakMap');
		/***/ },
	/* 285 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
		__webpack_require__(282)('WeakSet');
		/***/ },
	/* 286 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
		__webpack_require__(287)('Map');
		/***/ },
	/* 287 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://tc39.github.io/proposal-setmap-offrom/

		const $export = __webpack_require__(9);
		const aFunction = __webpack_require__(22);
		const ctx = __webpack_require__(21);
		const forOf = __webpack_require__(209);

		module.exports = function(COLLECTION) {
	  $export($export.S, COLLECTION, {
				from: function from(source /* , mapFn, thisArg */) {
	      const mapFn = arguments[1];
	      let mapping, A, n, cb;
	      aFunction(this);
	      mapping = mapFn !== undefined;
	      if (mapping) aFunction(mapFn);
	      if (source == undefined) return new this();
	      A = [];
	      if (mapping) {
	        n = 0;
	        cb = ctx(mapFn, arguments[2], 2);
	        forOf(source, false, function(nextItem) {
	          A.push(cb(nextItem, n++));
	        });
	      } else {
	        forOf(source, false, A.push, A);
	      }
	      return new this(A);
	    }
			});
		};
		/***/ },
	/* 288 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
		__webpack_require__(287)('Set');
		/***/ },
	/* 289 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
		__webpack_require__(287)('WeakMap');
		/***/ },
	/* 290 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
		__webpack_require__(287)('WeakSet');
		/***/ },
	/* 291 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://github.com/tc39/proposal-global
		const $export = __webpack_require__(9);

		$export($export.G, { global: __webpack_require__(5) });
		/***/ },
	/* 292 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://github.com/tc39/proposal-global
		const $export = __webpack_require__(9);

		$export($export.S, 'System', { global: __webpack_require__(5) });
		/***/ },
	/* 293 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://github.com/ljharb/proposal-is-error
		const $export = __webpack_require__(9);
		const cof = __webpack_require__(35);

		$export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
		});
		/***/ },
	/* 294 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://rwaldron.github.io/proposal-math-extensions/
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', {
	  clamp: function clamp(x, lower, upper) {
	    return Math.min(upper, Math.max(lower, x));
	  }
		});
		/***/ },
	/* 295 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://rwaldron.github.io/proposal-math-extensions/
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });
		/***/ },
	/* 296 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://rwaldron.github.io/proposal-math-extensions/
		const $export = __webpack_require__(9);
		const RAD_PER_DEG = 180 / Math.PI;

		$export($export.S, 'Math', {
	  degrees: function degrees(radians) {
	    return radians * RAD_PER_DEG;
	  }
		});
		/***/ },
	/* 297 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://rwaldron.github.io/proposal-math-extensions/
		const $export = __webpack_require__(9);
		const scale = __webpack_require__(298);
		const fround = __webpack_require__(115);

		$export($export.S, 'Math', {
	  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
	    return fround(scale(x, inLow, inHigh, outLow, outHigh));
	  }
		});
		/***/ },
	/* 298 */
	/***/ function(module, exports) {
		'use strict';

		// https://rwaldron.github.io/proposal-math-extensions/
		module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
	  if (arguments.length === 0 ||
	  // eslint-disable-next-line no-self-compare
	  x != x ||
	  // eslint-disable-next-line no-self-compare
	  inLow != inLow ||
	  // eslint-disable-next-line no-self-compare
	  inHigh != inHigh ||
	  // eslint-disable-next-line no-self-compare
	  outLow != outLow ||
	  // eslint-disable-next-line no-self-compare
	  outHigh != outHigh) return NaN;
	  if (x === Infinity || x === -Infinity) return x;
	  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
		};
		/***/ },
	/* 299 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    const $x0 = x0 >>> 0;
	    const $x1 = x1 >>> 0;
	    const $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
		});
		/***/ },
	/* 300 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    const $x0 = x0 >>> 0;
	    const $x1 = x1 >>> 0;
	    const $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
		});
		/***/ },
	/* 301 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    const UINT16 = 0xffff;
	    const $u = +u;
	    const $v = +v;
	    const u0 = $u & UINT16;
	    const v0 = $v & UINT16;
	    const u1 = $u >> 16;
	    const v1 = $v >> 16;
	    const t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
		});
		/***/ },
	/* 302 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://rwaldron.github.io/proposal-math-extensions/
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });
		/***/ },
	/* 303 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://rwaldron.github.io/proposal-math-extensions/
		const $export = __webpack_require__(9);
		const DEG_PER_RAD = Math.PI / 180;

		$export($export.S, 'Math', {
	  radians: function radians(degrees) {
	    return degrees * DEG_PER_RAD;
	  }
		});
		/***/ },
	/* 304 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://rwaldron.github.io/proposal-math-extensions/
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', { scale: __webpack_require__(298) });
		/***/ },
	/* 305 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    const UINT16 = 0xffff;
	    const $u = +u;
	    const $v = +v;
	    const u0 = $u & UINT16;
	    const v0 = $v & UINT16;
	    const u1 = $u >>> 16;
	    const v1 = $v >>> 16;
	    const t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
		});
		/***/ },
	/* 306 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// http://jfbastien.github.io/papers/Math.signbit.html
		const $export = __webpack_require__(9);

		$export($export.S, 'Math', {
			signbit: function signbit(x) {
	    // eslint-disable-next-line no-self-compare
	    return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
	  }
		});
		/***/ },
	/* 307 */
	/***/ function(module, exports, __webpack_require__) {
		// https://github.com/tc39/proposal-promise-finally
		'use strict';

		const $export = __webpack_require__(9);
		const core = __webpack_require__(10);
		const global = __webpack_require__(5);
		const speciesConstructor = __webpack_require__(210);
		const promiseResolve = __webpack_require__(215);

		$export($export.P + $export.R, 'Promise', {
			finally: function _finally(onFinally) {
	    const C = speciesConstructor(this, core.Promise || global.Promise);
	    const isFunction = typeof onFinally === 'function';
	    return this.then(isFunction ? function(x) {
	      return promiseResolve(C, onFinally()).then(function() {
	        return x;
	      });
	    } : onFinally, isFunction ? function(e) {
	      return promiseResolve(C, onFinally()).then(function() {
	        throw e;
	      });
	    } : onFinally);
	  }
		});
		/***/ },
	/* 308 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://github.com/tc39/proposal-promise-try

		const $export = __webpack_require__(9);
		const newPromiseCapability = __webpack_require__(213);
		const perform = __webpack_require__(214);

		$export($export.S, 'Promise', {
			try: function _try(callbackfn) {
	    const promiseCapability = newPromiseCapability.f(this);
	    const result = perform(callbackfn);
	    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	    return promiseCapability.promise;
	  }
		});
		/***/ },
	/* 309 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const metadata = __webpack_require__(310);
		const anObject = __webpack_require__(13);
		const toMetaKey = metadata.key;
		const ordinaryDefineOwnMetadata = metadata.set;

		metadata.exp({
			defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	  }
		});
		/***/ },
	/* 310 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

		const Map = __webpack_require__(217);
		const $export = __webpack_require__(9);
		const shared = __webpack_require__(24)('metadata');
		const store = shared.store || (shared.store = new (__webpack_require__(222))());

		const getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
	  let targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  let keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  } return keyMetadata;
		};
		const ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
	  const metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
		};
		const ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
	  const metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
		};
		const ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
		};
		const ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
	  const metadataMap = getOrCreateMetadataMap(target, targetKey, false);
	  const keys = [];
	  if (metadataMap) {
				metadataMap.forEach(function(_, key) {
	    keys.push(key);
	  });
			}
	  return keys;
		};
		const toMetaKey = function toMetaKey(it) {
	  return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);
		};
		const exp = function exp(O) {
	  $export($export.S, 'Reflect', O);
		};

		module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
		};
		/***/ },
	/* 311 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const metadata = __webpack_require__(310);
		const anObject = __webpack_require__(13);
		const toMetaKey = metadata.key;
		const getOrCreateMetadataMap = metadata.map;
		const store = metadata.store;

		metadata.exp({
			deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
	    const targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
	    const metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	    if (metadataMap === undefined || !metadataMap.delete(metadataKey)) return false;
	    if (metadataMap.size) return true;
	    const targetMetadata = store.get(target);
	    targetMetadata.delete(targetKey);
	    return !!targetMetadata.size || store.delete(target);
	  }
		});
		/***/ },
	/* 312 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const metadata = __webpack_require__(310);
		const anObject = __webpack_require__(13);
		const getPrototypeOf = __webpack_require__(60);
		const ordinaryHasOwnMetadata = metadata.has;
		const ordinaryGetOwnMetadata = metadata.get;
		const toMetaKey = metadata.key;

		const ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
	  const hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  const parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
		};

		metadata.exp({
			getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
	    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  }
		});
		/***/ },
	/* 313 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const Set = __webpack_require__(221);
		const from = __webpack_require__(279);
		const metadata = __webpack_require__(310);
		const anObject = __webpack_require__(13);
		const getPrototypeOf = __webpack_require__(60);
		const ordinaryOwnMetadataKeys = metadata.keys;
		const toMetaKey = metadata.key;

		const ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
	  const oKeys = ordinaryOwnMetadataKeys(O, P);
	  const parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  const pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
		};

		metadata.exp({
			getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
	    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	  }
		});
		/***/ },
	/* 314 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const metadata = __webpack_require__(310);
		const anObject = __webpack_require__(13);
		const ordinaryGetOwnMetadata = metadata.get;
		const toMetaKey = metadata.key;

		metadata.exp({
			getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
	    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  }
		});
		/***/ },
	/* 315 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const metadata = __webpack_require__(310);
		const anObject = __webpack_require__(13);
		const ordinaryOwnMetadataKeys = metadata.keys;
		const toMetaKey = metadata.key;

		metadata.exp({
			getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
	    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	  }
		});
		/***/ },
	/* 316 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const metadata = __webpack_require__(310);
		const anObject = __webpack_require__(13);
		const getPrototypeOf = __webpack_require__(60);
		const ordinaryHasOwnMetadata = metadata.has;
		const toMetaKey = metadata.key;

		const ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
	  const hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  const parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
		};

		metadata.exp({
			hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
	    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  }
		});
		/***/ },
	/* 317 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const metadata = __webpack_require__(310);
		const anObject = __webpack_require__(13);
		const ordinaryHasOwnMetadata = metadata.has;
		const toMetaKey = metadata.key;

		metadata.exp({
			hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
	    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  }
		});
		/***/ },
	/* 318 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $metadata = __webpack_require__(310);
		const anObject = __webpack_require__(13);
		const aFunction = __webpack_require__(22);
		const toMetaKey = $metadata.key;
		const ordinaryDefineOwnMetadata = $metadata.set;

		$metadata.exp({
			metadata: function metadata(metadataKey, metadataValue) {
	    return function decorator(target, targetKey) {
	      ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
	    };
	  }
		});
		/***/ },
	/* 319 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
		const $export = __webpack_require__(9);
		const microtask = __webpack_require__(212)();
		const process = __webpack_require__(5).process;
		const isNode = __webpack_require__(35)(process) == 'process';

		$export($export.G, {
	  asap: function asap(fn) {
	    const domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
		});
		/***/ },
	/* 320 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://github.com/zenparsing/es-observable

		const $export = __webpack_require__(9);
		const global = __webpack_require__(5);
		const core = __webpack_require__(10);
		const microtask = __webpack_require__(212)();
		const OBSERVABLE = __webpack_require__(26)('observable');
		const aFunction = __webpack_require__(22);
		const anObject = __webpack_require__(13);
		const anInstance = __webpack_require__(208);
		const redefineAll = __webpack_require__(216);
		const hide = __webpack_require__(11);
		const forOf = __webpack_require__(209);
		const RETURN = forOf.RETURN;

		const getMethod = function getMethod(fn) {
	  return fn == null ? undefined : aFunction(fn);
		};

		const cleanupSubscription = function cleanupSubscription(subscription) {
	  const cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
		};

		const subscriptionClosed = function subscriptionClosed(subscription) {
	  return subscription._o === undefined;
		};

		const closeSubscription = function closeSubscription(subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
		};

		const Subscription = function Subscription(observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    let cleanup = subscriber(observer);
	    const subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') {
						cleanup = function cleanup() {
	        subscription.unsubscribe();
	      };
					} else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  } if (subscriptionClosed(this)) cleanupSubscription(this);
		};

		Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() {
	    closeSubscription(this);
	  }
		});

		var SubscriptionObserver = function SubscriptionObserver(subscription) {
	  this._s = subscription;
		};

		SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    const subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      const observer = subscription._o;
	      try {
	        const m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    const subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    const observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      const m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    }cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    const subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      const observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        const m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }cleanupSubscription(subscription);
	      return value;
	    }
	  }
		});

		var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
		};

		redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    const that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject) {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next: function next(value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
		});

		redefineAll($Observable, {
	  from: function from(x) {
	    const C = typeof this === 'function' ? this : $Observable;
	    const method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      const observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer) {
	      let done = false;
	      microtask(function() {
	        if (!done) {
	          try {
	            if (forOf(x, false, function(it) {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          }observer.complete();
	        }
	      });
	      return function() {
	        done = true;
	      };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = Array(l); i < l;) {
	      items[i] = arguments[i++];
	    } return new (typeof this === 'function' ? this : $Observable)(function(observer) {
	      let done = false;
	      microtask(function() {
	        if (!done) {
	          for (let j = 0; j < items.length; ++j) {
	            observer.next(items[j]);
	            if (done) return;
	          }observer.complete();
	        }
	      });
	      return function() {
	        done = true;
	      };
	    });
	  }
		});

		hide($Observable.prototype, OBSERVABLE, function() {
	  return this;
		});

		$export($export.G, { Observable: $Observable });

		__webpack_require__(195)('Observable');
		/***/ },
	/* 321 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// ie9- setTimeout & setInterval additional parameters fix
		const global = __webpack_require__(5);
		const $export = __webpack_require__(9);
		const invoke = __webpack_require__(79);
		const partial = __webpack_require__(322);
		const navigator = global.navigator;
		const MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
		const wrap = function wrap(set) {
	  return MSIE ? function(fn, time /* , ...args */) {
	    return set(invoke(partial, [].slice.call(arguments, 2),
	    // eslint-disable-next-line no-new-func
	    typeof fn === 'function' ? fn : Function(fn)), time);
	  } : set;
		};
		$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
		});
		/***/ },
	/* 322 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const path = __webpack_require__(323);
		const invoke = __webpack_require__(79);
		const aFunction = __webpack_require__(22);
		module.exports = function() /* ...pargs */{
	  const fn = aFunction(this);
	  const length = arguments.length;
	  const pargs = Array(length);
	  let i = 0;
	  const _ = path._;
	  let holder = false;
	  while (length > i) {
	    if ((pargs[i] = arguments[i++]) === _) holder = true;
	  } return function() /* ...args */{
	    const that = this;
	    const aLen = arguments.length;
	    let j = 0;
	    let k = 0;
	    let args;
	    if (!holder && !aLen) return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if (holder) {
					for (; length > j; j++) {
	      if (args[j] === _) args[j] = arguments[k++];
	    }
				} while (aLen > k) {
	      args.push(arguments[k++]);
	    } return invoke(fn, args, that);
	  };
		};
		/***/ },
	/* 323 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		module.exports = __webpack_require__(5);
		/***/ },
	/* 324 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $export = __webpack_require__(9);
		const $task = __webpack_require__(211);
		$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
		});
		/***/ },
	/* 325 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $iterators = __webpack_require__(196);
		const getKeys = __webpack_require__(31);
		const redefine = __webpack_require__(19);
		const global = __webpack_require__(5);
		const hide = __webpack_require__(11);
		const Iterators = __webpack_require__(131);
		const wks = __webpack_require__(26);
		const ITERATOR = wks('iterator');
		const TO_STRING_TAG = wks('toStringTag');
		const ArrayValues = Iterators.Array;

		const DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
		};

		for (let collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  const NAME = collections[i];
	  const explicit = DOMIterables[NAME];
	  const Collection = global[NAME];
	  const proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    if (explicit) {
					for (key in $iterators) {
	      if (!proto[key]) redefine(proto, key, $iterators[key], true);
	    }
				}
	  }
		}
		/***/ },
	/* 326 */
	/***/ function(module, exports, __webpack_require__) {
		/* WEBPACK VAR INJECTION */(function(global, module) {
			'use strict';

			const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

			/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

			!(function(global) {
	  'use strict';

	  const Op = Object.prototype;
	  const hasOwn = Op.hasOwnProperty;
	  let undefined; // More compressible than void 0.
	  const $Symbol = typeof Symbol === 'function' ? Symbol : {};
	  const iteratorSymbol = $Symbol.iterator || '@@iterator';
	  const asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
	  const toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

	  const inModule = (false ? 'undefined' : _typeof(module)) === 'object';
	  let runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    const protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    const generator = Object.create(protoGenerator.prototype);
	    const context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: 'normal', arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: 'throw', arg: err };
	    }
	  }

	  const GenStateSuspendedStart = 'suspendedStart';
	  const GenStateSuspendedYield = 'suspendedYield';
	  const GenStateExecuting = 'executing';
	  const GenStateCompleted = 'completed';

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  const ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  let IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function() {
	    return this;
	  };

	  const getProto = Object.getPrototypeOf;
	  const NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  const Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = 'GeneratorFunction';

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ['next', 'throw', 'return'].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    const ctor = typeof genFun === 'function' && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === 'GeneratorFunction' : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = 'GeneratorFunction';
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      const record = tryCatch(generator[method], generator, arg);
	      if (record.type === 'throw') {
	        reject(record.arg);
	      } else {
	        const result = record.arg;
	        const value = result.value;
	        if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && hasOwn.call(value, '__await')) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke('next', value, resolve, reject);
	          }, function(err) {
	            invoke('throw', err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (_typeof(global.process) === 'object' && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }

	    let previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function() {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    const iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function(result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    let state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error('Generator is already running');
	      }

	      if (state === GenStateCompleted) {
	        if (method === 'throw') {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        const delegate = context.delegate;
	        if (delegate) {
	          const delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === 'next') {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	        } else if (context.method === 'throw') {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);
	        } else if (context.method === 'return') {
	          context.abrupt('return', context.arg);
	        }

	        state = GenStateExecuting;

	        const record = tryCatch(innerFn, self, context);
	        if (record.type === 'normal') {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };
	        } else if (record.type === 'throw') {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = 'throw';
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    const method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === 'throw') {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = 'return';
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === 'throw') {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = 'throw';
	        context.arg = new TypeError('The iterator does not provide a \'throw\' method');
	      }

	      return ContinueSentinel;
	    }

	    const record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === 'throw') {
	      context.method = 'throw';
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    const info = record.arg;

	    if (!info) {
	      context.method = 'throw';
	      context.arg = new TypeError('iterator result is not an object');
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== 'return') {
	        context.method = 'next';
	        context.arg = undefined;
	      }
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = 'Generator';

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return '[object Generator]';
	  };

	  function pushTryEntry(locs) {
	    const entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    const record = entry.completion || {};
	    record.type = 'normal';
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: 'root' }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    const keys = [];
	    for (const key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        const key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      const iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === 'function') {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        let i = -1;
	            const next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = 'next';
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (const name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === 't' && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      const rootEntry = this.tryEntries[0];
	      const rootRecord = rootEntry.completion;
	      if (rootRecord.type === 'throw') {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      const context = this;
	      function handle(loc, caught) {
	        record.type = 'throw';
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = 'next';
	          context.arg = undefined;
	        }

	        return !!caught;
	      }

	      for (let i = this.tryEntries.length - 1; i >= 0; --i) {
	        const entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === 'root') {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle('end');
	        }

	        if (entry.tryLoc <= this.prev) {
	          const hasCatch = hasOwn.call(entry, 'catchLoc');
	          const hasFinally = hasOwn.call(entry, 'finallyLoc');

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error('try statement without catch or finally');
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (let i = this.tryEntries.length - 1; i >= 0; --i) {
	        const entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, 'finallyLoc') && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === 'break' || type === 'continue') && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      const record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = 'next';
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === 'throw') {
	        throw record.arg;
	      }

	      if (record.type === 'break' || record.type === 'continue') {
	        this.next = record.arg;
	      } else if (record.type === 'return') {
	        this.rval = this.arg = record.arg;
	        this.method = 'return';
	        this.next = 'end';
	      } else if (record.type === 'normal' && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function finish(finallyLoc) {
	      for (let i = this.tryEntries.length - 1; i >= 0; --i) {
	        const entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    catch: function _catch(tryLoc) {
	      for (let i = this.tryEntries.length - 1; i >= 0; --i) {
	        const entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          const record = entry.completion;
	          if (record.type === 'throw') {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error('illegal catch attempt');
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === 'next') {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
			}(
				// Among the various tricks for obtaining a reference to the global
				// object, this seems to be the most reliable technique that does not
				// use indirect eval (which violates Content Security Policy).
				(typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' ? global : (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' ? window : (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' ? self : undefined));
			/* WEBPACK VAR INJECTION */ }.call(exports, (function() { return this; }()), __webpack_require__(327)(module)));
		/***/ },
	/* 327 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(module) {
			if (!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		};
		/***/ },
	/* 328 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(329);
		module.exports = __webpack_require__(10).RegExp.escape;
		/***/ },
	/* 329 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// https://github.com/benjamingr/RexExp.escape
		const $export = __webpack_require__(9);
		const $re = __webpack_require__(330)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

		$export($export.S, 'RegExp', {
			escape: function escape(it) {
	    return $re(it);
	  }
		});
		/***/ },
	/* 330 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(regExp, replace) {
	  const replacer = replace === Object(replace) ? function(part) {
	    return replace[part];
	  } : replace;
	  return function(it) {
	    return String(it).replace(regExp, replacer);
	  };
		};
		/***/ },
	/* 331 */
	/***/ function(module, exports, __webpack_require__) {
		/* WEBPACK VAR INJECTION */(function(process) { /*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
			'use strict';

			const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

			function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  const ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    let i = ob.vms.length;
	    while (i--) {
	      const vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
			}

			/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

			function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  const ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    let i = ob.vms.length;
	    while (i--) {
	      const vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
			}

			const hasOwnProperty = Object.prototype.hasOwnProperty;
			/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

			function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
			}

			/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

			const literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

			function isLiteral(exp) {
	  return literalValueRE.test(exp);
			}

			/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

			function isReserved(str) {
	  const c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
			}

			/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

			function _toString(value) {
	  return value == null ? '' : value.toString();
			}

			/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

			function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    const parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
			}

			/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

			function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
			}

			/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

			function stripQuotes(str) {
	  const a = str.charCodeAt(0);
	  const b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
			}

			/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

			const camelizeRE = /-(\w)/g;

			function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
			}

			function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
			}

			/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

			const hyphenateRE = /([^-])([A-Z])/g;

			function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
			}

			/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

			const classifyRE = /(?:^|[-_\/])(\w)/g;

			function classify(str) {
	  return str.replace(classifyRE, toUpper);
			}

			/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

			function bind(fn, ctx) {
	  return function(a) {
	    const l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
			}

			/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
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
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

			function extend(to, from) {
	  const keys = Object.keys(from);
	  let i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
			}

			/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

			function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
			}

			/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

			const toString = Object.prototype.toString;
			const OBJECT_STRING = '[object Object]';

			function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
			}

			/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

			const isArray = Array.isArray;

			/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
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
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

			function _debounce(func, wait) {
	  let timeout, args, context, timestamp, result;
	  const later = function later() {
	    const last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function() {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
			}

			/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

			function indexOf(arr, obj) {
	  let i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
			}

			/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

			function cancellable(fn) {
	  const cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function() {
	    cb.cancelled = true;
	  };
	  return cb;
			}

			/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

			function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
			}

			const hasProto = '__proto__' in {};

			// Browser environment sniffing
			const inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

			// detect devtools
			const devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

			// UA sniffing for working around browser-specific quirks
			const UA = inBrowser && window.navigator.userAgent.toLowerCase();
			const isIE = UA && UA.indexOf('trident') > 0;
			const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
			const isAndroid = UA && UA.indexOf('android') > 0;
			const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

			let transitionProp;
			let transitionEndEvent;
			let animationProp;
			let animationEndEvent;

			// Transition property/event sniffing
			if (inBrowser && !isIE9) {
	  const isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  const isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
			}

			/* istanbul ignore next */
			function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
			}

			/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
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
	    const noop = function noop() {};
	    timerFunc = function timerFunc() {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) setTimeout(noop);
	    };
	  } else if (typeof MutationObserver !== 'undefined') {
	    // use MutationObserver where native Promise is not available,
	    // e.g. IE11, iOS7, Android 4.4
	    let counter = 1;
	    const observer = new MutationObserver(nextTickHandler);
	    const textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function timerFunc() {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = setTimeout;
	  }

	  return function(cb, ctx) {
	    const func = ctx ? function() {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
			}());

			let _Set;
			/* istanbul ignore if */
			if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
			} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function _Set() {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function(key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function(key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function() {
	    this.set = Object.create(null);
	  };
			}

			function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
			}

			const p = Cache.prototype;

			/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

			p.put = function(key, value) {
	  let removed;

	  let entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
			};

			/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

			p.shift = function() {
	  const entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
			};

			/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

			p.get = function(key, returnEntry) {
	  const entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
			};

			const cache$1 = new Cache(1000);
			const reservedArgRE = /^in$|^-?\d+/;

			/**
	 * Parser state
	 */

			let str;
			let dir;
			let len;
			let index;
			let chr;
			let state;
			const startState = 0;
			const filterState = 1;
			const filterNameState = 2;
			const filterArgState = 3;

			const doubleChr = 0x22;
			const singleChr = 0x27;
			const pipeChr = 0x7C;
			const escapeChr = 0x5C;
			const spaceChr = 0x20;

			const expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
			const expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

			function peek() {
	  return str.charCodeAt(index + 1);
			}

			function next() {
	  return str.charCodeAt(++index);
			}

			function eof() {
	  return index >= len;
			}

			function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
			}

			function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
			}

			function isExpStart(chr) {
	  return expStartChr[chr];
			}

			function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
			}

			function parseString() {
	  const stringQuote = next();
	  let chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
			}

			function parseSpecialExp(chr) {
	  let inExp = 0;
	  const startChr = chr;

	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }

	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }

	    next();

	    if (inExp === 0) {
	      break;
	    }
	  }
			}

			/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */

			function parseExpression() {
	  const start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }

	  return str.slice(start + 1, index) || null;
			}

			function parseFilterList() {
	  const filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
			}

			function parseFilter() {
	  const filter = {};
	  let args;

	  state = filterState;
	  filter.name = parseExpression().trim();

	  state = filterArgState;
	  args = parseFilterArguments();

	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
			}

			function parseFilterArguments() {
	  const args = [];
	  while (!eof() && state !== filterState) {
	    const arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }

	  return args;
			}

			/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

			function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    const stripped = stripQuotes(arg);
	    const dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
			}

			/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

			function parseDirective(s) {
	  const hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;

	  let filters;

	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }

	  cache$1.put(s, dir);
	  return dir;
			}

			const directive = Object.freeze({
	  parseDirective: parseDirective
			});

			const regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
			let cache;
			let tagRE;
			let htmlRE;
			/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

			function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
			}

			function compileRegex() {
	  const open = escapeRegex(config.delimiters[0]);
	  const close = escapeRegex(config.delimiters[1]);
	  const unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  const unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
			}

			/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

			function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  const hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  const tokens = [];
	  let lastIndex = tagRE.lastIndex = 0;
	  let match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
			}

			/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

			function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function(token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
			}

			/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

			function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
			}

			/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

			const filterRE = /[^|]\|[^|]/;
			function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    const dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
			}

			const text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
			});

			let delimiters = ['{{', '}}'];
			let unsafeDelimiters = ['{{{', '}}}'];

			var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

			}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
			});

			let warn;
			let formatComponentName;

			if (process.env.NODE_ENV !== 'production') {
	  (function() {
	    const hasConsole = typeof console !== 'undefined';

	    warn = function warn(msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function formatComponentName(vm) {
	      const name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
			}

			/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

			function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function() {
	    target.appendChild(el);
	  }, vm, cb);
			}

			/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

			function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function() {
	    before(el, target);
	  }, vm, cb);
			}

			/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

			function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function() {
	    remove(el);
	  }, vm, cb);
			}

			/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

			function applyTransition(el, direction, op, vm, cb) {
	  const transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  const action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
			}

			const transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
			});

			/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

			function query(el) {
	  if (typeof el === 'string') {
	    const selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
			}

			/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

			function inDoc(node) {
	  if (!node) return false;
	  const doc = node.ownerDocument.documentElement;
	  const parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
			}

			/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

			function getAttr(node, _attr) {
	  const val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
			}

			/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

			function getBindAttr(node, name) {
	  let val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
			}

			/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

			function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
			}

			/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

			function before(el, target) {
	  target.parentNode.insertBefore(el, target);
			}

			/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

			function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
			}

			/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

			function remove(el) {
	  el.parentNode.removeChild(el);
			}

			/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

			function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
			}

			/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

			function replace(target, el) {
	  const parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
			}

			/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

			function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
			}

			/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

			function off(el, event, cb) {
	  el.removeEventListener(event, cb);
			}

			/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

			function getClass(el) {
	  let classname = el.className;
	  if ((typeof classname === 'undefined' ? 'undefined' : _typeof(classname)) === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
			}

			/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

			function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
			}

			/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

			function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    const cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
			}

			/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

			function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    let cur = ' ' + getClass(el) + ' ';
	    const tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
			}

			/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

			function extractContent(el, asFragment) {
	  let child;
	  let rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
			}

			/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

			function trimNode(node) {
	  let child;
	  /* eslint-disable no-sequences */
	  while (child = node.firstChild, isTrimmable(child)) {
	    node.removeChild(child);
	  }
	  while (child = node.lastChild, isTrimmable(child)) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
			}

			function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
			}

			/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

			function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
			}

			/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

			function createAnchor(content, persist) {
	  const anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
			}

			/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

			const refRE = /^v-ref:/;

			function findRef(node) {
	  if (node.hasAttributes()) {
	    const attrs = node.attributes;
	    for (let i = 0, l = attrs.length; i < l; i++) {
	      const name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
			}

			/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

			function mapNodeRange(node, end, op) {
	  let next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
			}

			/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

			function removeNodeRange(start, end, vm, frag, cb) {
	  let done = false;
	  let removed = 0;
	  const nodes = [];
	  mapNodeRange(start, end, function(node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (let i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
			}

			/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

			function isFragment(node) {
	  return node && node.nodeType === 11;
			}

			/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
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

			const commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
			const reservedTagRE = /^(slot|partial|component)$/i;

			let isUnknownElement;
			if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function isUnknownElement(el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
			}

			/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

			function checkComponentAttr(el, options) {
	  const tag = el.tagName.toLowerCase();
	  const hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      const is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        const expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
			}

			/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

			function getIsBinding(el, options) {
	  // dynamic syntax
	  let exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
			}

			/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

			const strats = config.optionMergeStrategies = Object.create(null);

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

			strats.data = function(parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
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
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      const instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      const defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
			};

			/**
	 * El
	 */

			strats.el = function(parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  const ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
			};

			/**
	 * Hooks and param attributes are merged as arrays.
	 */

			strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function(parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
			};

			/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

			function mergeAssets(parentVal, childVal) {
	  const res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
			}

			config._assetTypes.forEach(function(type) {
	  strats[type + 's'] = mergeAssets;
			});

			/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

			strats.watch = strats.events = function(parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  const ret = {};
	  extend(ret, parentVal);
	  for (const key in childVal) {
	    let parent = ret[key];
	    const child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
			};

			/**
	 * Other object hashes.
	 */

			strats.props = strats.methods = strats.computed = function(parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  const ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
			};

			/**
	 * Default strategy.
	 */

			const defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
			};

			/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

			function guardComponents(options) {
	  if (options.components) {
	    const components = options.components = guardArrayAssets(options.components);
	    const ids = Object.keys(components);
	    let def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (let i = 0, l = ids.length; i < l; i++) {
	      const key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
			}

			/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

			function guardProps(options) {
	  const props = options.props;
	  let i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    const keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
			}

			/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

			function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    const res = {};
	    let i = assets.length;
	    let asset;
	    while (i--) {
	      asset = assets[i];
	      const id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
			}

			/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

			function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  const options = {};
	  let key;
	  if (child.extends) {
	    parent = typeof child.extends === 'function' ? mergeOptions(parent, child.extends.options, vm) : mergeOptions(parent, child.extends, vm);
	  }
	  if (child.mixins) {
	    for (let i = 0, l = child.mixins.length; i < l; i++) {
	      const mixin = child.mixins[i];
	      const mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
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
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

			function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  const assets = options[type];
	  let camelizedId;
	  const res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
			}

			let uid$1 = 0;

			/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
			function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
			}

			// the current target watcher being evaluated.
			// this is globally unique because there could be only one
			// watcher being evaluated at any time.
			Dep.target = null;

			/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

			Dep.prototype.addSub = function(sub) {
	  this.subs.push(sub);
			};

			/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

			Dep.prototype.removeSub = function(sub) {
	  this.subs.$remove(sub);
			};

			/**
	 * Add self as a dependency to the target watcher.
	 */

			Dep.prototype.depend = function() {
	  Dep.target.addDep(this);
			};

			/**
	 * Notify all subscribers of a new value.
	 */

			Dep.prototype.notify = function() {
	  // stablize the subscriber list first
	  const subs = toArray(this.subs);
	  for (let i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
			};

			const arrayProto = Array.prototype;
			const arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function(method) {
	  // cache original method
	  const original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    let i = arguments.length;
	    const args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
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
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
			});

			/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

			def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
			});

			/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

			def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  const index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
			});

			const arrayKeys = Object.getOwnPropertyNames(arrayMethods);

			/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

			let shouldConvert = true;

			function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
			}

			/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

			function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    const augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
			}

			// Instance methods

			/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

			Observer.prototype.walk = function(obj) {
	  const keys = Object.keys(obj);
	  for (let i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
			};

			/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

			Observer.prototype.observeArray = function(items) {
	  for (let i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
			};

			/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

			Observer.prototype.convert = function(key, val) {
	  defineReactive(this.value, key, val);
			};

			/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

			Observer.prototype.addVm = function(vm) {
	  (this.vms || (this.vms = [])).push(vm);
			};

			/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

			Observer.prototype.removeVm = function(vm) {
	  this.vms.$remove(vm);
			};

			// helpers

			/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
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
	 * @param {Object|Array} target
	 * @param {Object} proto
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
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

			function observe(value, vm) {
	  if (!value || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
	    return;
	  }
	  let ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
			}

			/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

			function defineReactive(obj, key, val) {
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
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      const value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
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

			const util = Object.freeze({
	  defineReactive: defineReactive,
	  set: set,
	  del: del,
	  hasOwn: hasOwn,
	  isLiteral: isLiteral,
	  isReserved: isReserved,
	  _toString: _toString,
	  toNumber: toNumber,
	  toBoolean: toBoolean,
	  stripQuotes: stripQuotes,
	  camelize: camelize,
	  hyphenate: hyphenate,
	  classify: classify,
	  bind: bind,
	  toArray: toArray,
	  extend: extend,
	  isObject: isObject,
	  isPlainObject: isPlainObject,
	  def: def,
	  debounce: _debounce,
	  indexOf: indexOf,
	  cancellable: cancellable,
	  looseEqual: looseEqual,
	  isArray: isArray,
	  hasProto: hasProto,
	  inBrowser: inBrowser,
	  devtools: devtools,
	  isIE: isIE,
	  isIE9: isIE9,
	  isAndroid: isAndroid,
	  isIOS: isIOS,
	  get transitionProp() {
	    return transitionProp;
	  },
	  get transitionEndEvent() {
	    return transitionEndEvent;
	  },
	  get animationProp() {
	    return animationProp;
	  },
	  get animationEndEvent() {
	    return animationEndEvent;
	  },
	  nextTick: nextTick,
	  get _Set() {
	    return _Set;
	  },
	  query: query,
	  inDoc: inDoc,
	  getAttr: getAttr,
	  getBindAttr: getBindAttr,
	  hasBindAttr: hasBindAttr,
	  before: before,
	  after: after,
	  remove: remove,
	  prepend: prepend,
	  replace: replace,
	  on: on,
	  off: off,
	  setClass: setClass,
	  addClass: addClass,
	  removeClass: removeClass,
	  extractContent: extractContent,
	  trimNode: trimNode,
	  isTemplate: isTemplate,
	  createAnchor: createAnchor,
	  findRef: findRef,
	  mapNodeRange: mapNodeRange,
	  removeNodeRange: removeNodeRange,
	  isFragment: isFragment,
	  getOuterHTML: getOuterHTML,
	  mergeOptions: mergeOptions,
	  resolveAsset: resolveAsset,
	  checkComponentAttr: checkComponentAttr,
	  commonTagRE: commonTagRE,
	  reservedTagRE: reservedTagRE,
	  get warn() {
	    return warn;
	  }
			});

			let uid = 0;

			function initMixin(Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function(options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
			}

			const pathCache = new Cache(1000);

			// actions
			const APPEND = 0;
			const PUSH = 1;
			const INC_SUB_PATH_DEPTH = 2;
			const PUSH_SUB_PATH = 3;

			// states
			const BEFORE_PATH = 0;
			const IN_PATH = 1;
			const BEFORE_IDENT = 2;
			const IN_IDENT = 3;
			const IN_SUB_PATH = 4;
			const IN_SINGLE_QUOTE = 5;
			const IN_DOUBLE_QUOTE = 6;
			const AFTER_PATH = 7;
			const ERROR = 8;

			const pathStateMachine = [];

			pathStateMachine[BEFORE_PATH] = {
	  ws: [BEFORE_PATH],
	  ident: [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  eof: [AFTER_PATH]
			};

			pathStateMachine[IN_PATH] = {
	  ws: [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  eof: [AFTER_PATH]
			};

			pathStateMachine[BEFORE_IDENT] = {
	  ws: [BEFORE_IDENT],
	  ident: [IN_IDENT, APPEND]
			};

			pathStateMachine[IN_IDENT] = {
	  ident: [IN_IDENT, APPEND],
	  0: [IN_IDENT, APPEND],
	  number: [IN_IDENT, APPEND],
	  ws: [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  eof: [AFTER_PATH, PUSH]
			};

			pathStateMachine[IN_SUB_PATH] = {
	  '\'': [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  eof: ERROR,
	  else: [IN_SUB_PATH, APPEND]
			};

			pathStateMachine[IN_SINGLE_QUOTE] = {
	  '\'': [IN_SUB_PATH, APPEND],
	  eof: ERROR,
	  else: [IN_SINGLE_QUOTE, APPEND]
			};

			pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  eof: ERROR,
	  else: [IN_DOUBLE_QUOTE, APPEND]
			};

			/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

			function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  const code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
			}

			/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

			function formatSubPath(path) {
	  const trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
			}

			/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

			function parse(path) {
	  const keys = [];
	  let index = -1;
	  let mode = BEFORE_PATH;
	  let subPathDepth = 0;
	  let c, newChar, key, type, transition, action, typeMap;

	  const actions = [];

	  actions[PUSH] = function() {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function() {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function() {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function() {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    const nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === '\'' || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap.else || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
			}

			/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

			function parsePath(path) {
	  let hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
			}

			/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

			function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
			}

			/**
	 * Warn against setting non-existent root path on a vm.
	 */

			let warnNonExistent;
			if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function warnNonExistent(path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
			}

			/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

			function setPath(obj, path, val) {
	  const original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  let last, key;
	  for (let i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
			}

			const path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
			});

			const expressionCache = new Cache(1000);

			const allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
			const allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

			// keywords that don't make sense inside expressions
			const improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
			const improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

			const wsRE = /\s/g;
			const newlineRE = /\n/g;
			const saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
			const restoreRE = /"(\d+)"/g;
			const pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
			const identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
			const literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

			function noop() {}

			/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

			const saved = [];

			/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

			function save(str, isString) {
	  const i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
			}

			/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

			function rewrite(raw) {
	  const c = raw.charAt(0);
	  let path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
			}

			/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

			function restore(str, i) {
	  return saved[i];
			}

			/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

			function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  let body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
			}

			/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

			function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
			}

			/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

			function compileSetter(exp) {
	  const path = parsePath(exp);
	  if (path) {
	    return function(scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
			}

			/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

			function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  const hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  const res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
			}

			/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

			function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
			}

			const expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
			});

			// we have two separate queues: one for directive updates
			// and one for user watcher registered via $watch().
			// we want to guarantee directive updates to be called
			// before user watchers so that when user watchers are
			// triggered, the DOM would have already been in updated
			// state.

			const queue = [];
			const userQueue = [];
			let has = {};
			let circular = {};
			let waiting = false;

			/**
	 * Reset the batcher's state.
	 */

			function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
			}

			/**
	 * Flush both queues and run the watchers.
	 */

			function flushBatcherQueue() {
	  let _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
			}

			/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

			function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (let i = 0; i < queue.length; i++) {
	    const watcher = queue[i];
	    const id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
			}

			/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

			function pushWatcher(watcher) {
	  const id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    const q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
			}

			let uid$2 = 0;

			/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
			function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  const isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    const res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
			}

			/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

			Watcher.prototype.get = function() {
	  this.beforeGet();
	  const scope = this.scope || this.vm;
	  let value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
			};

			/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

			Watcher.prototype.set = function(value) {
	  const scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  const forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function() {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
			};

			/**
	 * Prepare for dependency collection.
	 */

			Watcher.prototype.beforeGet = function() {
	  Dep.target = this;
			};

			/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

			Watcher.prototype.addDep = function(dep) {
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

			Watcher.prototype.afterGet = function() {
	  Dep.target = null;
	  let i = this.deps.length;
	  while (i--) {
	    const dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
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
	 *
	 * @param {Boolean} shallow
	 */

			Watcher.prototype.update = function(shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
			};

			/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

			Watcher.prototype.run = function() {
	  if (this.active) {
	    const value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      const oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      const prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function() {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
			};

			/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

			Watcher.prototype.evaluate = function() {
	  // avoid overwriting another watcher that is being
	  // collected.
	  const current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
			};

			/**
	 * Depend on all deps collected by this watcher.
	 */

			Watcher.prototype.depend = function() {
	  let i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
			};

			/**
	 * Remove self from all dependencies' subcriber list.
	 */

			Watcher.prototype.teardown = function() {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    let i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
			};

			/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

			const seenObjects = new _Set();
			function traverse(val, seen) {
	  let i;
	      let keys;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  const isA = isArray(val);
	  const isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      const depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) {
	        traverse(val[i], seen);
	      }
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) {
	        traverse(val[keys[i]], seen);
	      }
	    }
	  }
			}

			const text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
			};

			const templateCache = new Cache(1000);
			const idSelectorCache = new Cache(1000);

			const map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
			};

			map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

			map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

			map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

			map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

			/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

			function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
			}

			const tagRE$1 = /<([\w:-]+)/;
			const entityRE = /&#?\w+?;/;
			const commentRE = /<!--/;

			/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

			function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  const cacheKey = raw ? templateString : templateString.trim();
	  const hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  const frag = document.createDocumentFragment();
	  const tagMatch = templateString.match(tagRE$1);
	  const entityMatch = entityRE.test(templateString);
	  const commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    const tag = tagMatch && tagMatch[1];
	    const wrap = map[tag] || map.efault;
	    let depth = wrap[0];
	    const prefix = wrap[1];
	    const suffix = wrap[2];
	    let node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    let child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
			}

			/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

			function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  const clonedNode = cloneNode(node);
	  const frag = document.createDocumentFragment();
	  let child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
			}

			// Test for the presence of the Safari template cloning bug
			// https://bugs.webkit.org/showug.cgi?id=137755
			const hasBrokenTemplate = (function() {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    const a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
			}());

			// Test for IE10/11 textarea placeholder clone bug
			const hasTextareaCloneBug = (function() {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    const t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
			}());

			/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

			function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  const res = node.cloneNode(true);
	  let i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    let tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
			}

			/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

			function parseTemplate(template, shouldClone, raw) {
	  let node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
			}

			const template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
			});

			const html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    let i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    const frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
			};

			/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
			function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  const single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
			}

			/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

			Fragment.prototype.callHook = function(hook) {
	  let i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
			};

			/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

			function singleBefore(target, withTransition) {
	  this.inserted = true;
	  const method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
			}

			/**
	 * Remove fragment, single node version
	 */

			function singleRemove() {
	  this.inserted = false;
	  const shouldCallRemove = inDoc(this.node);
	  const self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function() {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
			}

			/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

			function multiBefore(target, withTransition) {
	  this.inserted = true;
	  const vm = this.vm;
	  const method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function(node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
			}

			/**
	 * Remove fragment, multi-nodes version
	 */

			function multiRemove() {
	  this.inserted = false;
	  const self = this;
	  const shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function() {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
			}

			/**
	 * Prepare the fragment for removal.
	 */

			Fragment.prototype.beforeRemove = function() {
	  let i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  const dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
			};

			/**
	 * Destroy the fragment.
	 */

			Fragment.prototype.destroy = function() {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
			};

			/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

			function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
			}

			/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

			function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
			}

			const linkerCache = new Cache(5000);

			/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
			function FragmentFactory(vm, el) {
	  this.vm = vm;
	  let template;
	  const isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  let linker;
	  const cid = vm.constructor.cid;
	  if (cid > 0) {
	    const cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
			}

			/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

			FragmentFactory.prototype.create = function(host, scope, parentFrag) {
	  const frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
			};

			const ON = 700;
			const MODEL = 800;
			const BIND = 850;
			const TRANSITION = 1100;
			const EL = 1500;
			const COMPONENT = 1500;
			const PARTIAL = 1750;
			const IF = 2100;
			const FOR = 2200;
			const SLOT = 2300;

			let uid$3 = 0;

			const vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('v-if')) {
	      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
	    }

	    // support "item in/of items" syntax
	    const inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      const itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    const tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    let item = data[0];
	    const convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    const trackByKey = this.params.trackBy;
	    const oldFrags = this.frags;
	    const frags = this.frags = new Array(data.length);
	    const alias = this.alias;
	    const iterator = this.iterator;
	    const start = this.start;
	    const end = this.end;
	    const inDocument = inDoc(start);
	    const init = !oldFrags;
	    let i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function() {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    let removalIndex = 0;
	    const totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function(w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    let targetPrev, prevEl, currentPrev;
	    let insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    const host = this._host;
	    // create iteration scope
	    const parentScope = this._scope || this.vm;
	    const scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function() {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    const frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    const ref = this.descriptor.ref;
	    if (!ref) return;
	    const hash = (this._scope || this.vm).$refs;
	    let refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function(frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      const parent = this.start.parentNode;
	      const model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    const staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      let anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      const op = frag.staggerCb = cancellable(function() {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      let target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    const staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      const op = frag.staggerCb = cancellable(function() {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    const trackByKey = this.params.trackBy;
	    const cache = this.cache;
	    const primitive = !isObject(value);
	    let id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    const trackByKey = this.params.trackBy;
	    const primitive = !isObject(value);
	    let frag;
	    if (key || trackByKey || primitive) {
	      const id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    const value = frag.raw;
	    const trackByKey = this.params.trackBy;
	    const scope = frag.scope;
	    const index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    const key = hasOwn(scope, '$key') && scope.$key;
	    const primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      const id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    const trans = frag.node.__v_trans;
	    const hooks = trans && trans.hooks;
	    const hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      const keys = Object.keys(value);
	      let i = keys.length;
	      const res = new Array(i);
	      let key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      let i = this.frags.length;
	      let frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
			};

			/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

			function findPrevFrag(frag, anchor, id) {
	  let el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
			}

			/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

			function range(n) {
	  let i = -1;
	  const ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
			}

			/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

			function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
			}

			if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function(value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
			}

			/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

			function findVmFromFrag(frag) {
	  let node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
			}

			const vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    const el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      const next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
			};

			const show = {

	  bind: function bind() {
	    // check else block
	    const next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
			};

			const text$2 = {

	  bind: function bind() {
	    const self = this;
	    const el = this.el;
	    const isRange = el.type === 'range';
	    const lazy = this.params.lazy;
	    const number = this.params.number;
	    const debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    let composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function() {
	        composing = true;
	      });
	      this.on('compositionend', function() {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function() {
	        self.focused = true;
	      });
	      this.on('blur', function() {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function() {
	      if (composing || !self._bound) {
	        return;
	      }
	      const val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function() {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      const method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function() {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function(e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    const el = this.el;
	    if (this.hasjQuery) {
	      const method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
			};

			const radio = {

	  bind: function bind() {
	    const self = this;
	    const el = this.el;

	    this.getValue = function() {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      let val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function() {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
			};

			const select = {

	  bind: function bind() {
	    const _this = this;

	    const self = this;
	    const el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function() {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    const multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function() {
	      let value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    const initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function() {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    const el = this.el;
	    el.selectedIndex = -1;
	    const multi = this.multiple && isArray(value);
	    const options = el.options;
	    let i = options.length;
	    let op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
			};

			/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

			function getValue(el, multi, init) {
	  const res = multi ? [] : null;
	  let op, val, selected;
	  for (let i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
			}

			/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

			function indexOf$1(arr, val) {
	  let i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
			}

			const checkbox = {

	  bind: function bind() {
	    const self = this;
	    const el = this.el;

	    this.getValue = function() {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      const val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function() {
	      const model = self._watcher.get();
	      if (isArray(model)) {
	        const val = self.getValue();
	        const i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    const el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
			};

			const handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
			};

			const model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    const el = this.el;
	    const tag = el.tagName;
	    let handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    const filters = this.filters;
	    if (!filters) return;
	    let i = filters.length;
	    while (i--) {
	      const filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
			};

			// keyCode aliases
			const keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  delete: [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
			};

			function keyFilter(handler, keys) {
	  let codes = keys.map(function(key) {
	    let charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
			}

			function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
			}

			function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
			}

			function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
			}

			const on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      const self = this;
	      this.iframeBind = function() {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function handler() {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    const keys = Object.keys(this.modifiers).filter(function(key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    const el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
			};

			const prefixes = ['-webkit-', '-moz-', '-ms-'];
			const camelPrefixes = ['Webkit', 'Moz', 'ms'];
			const importantRE = /!important;?$/;
			const propCache = Object.create(null);

			let testEl = null;

			const style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    const cache = this.cache || (this.cache = {});
	    let name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      const isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

			};

			/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

			function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  const res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
			}

			/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

			function prefix(prop) {
	  prop = hyphenate(prop);
	  const camel = camelize(prop);
	  const upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  let i = prefixes.length;
	  let prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
			}

			// xlink
			const xlinkNS = 'http://www.w3.org/1999/xlink';
			const xlinkRE = /^xlink:/;

			// check for attributes that prohibit interpolations
			const disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
			// these attributes should also set their corresponding properties
			// because they only affect the initial state of the element
			const attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
			// these attributes expect enumrated values of "true" or "false"
			// but are not boolean attributes
			const enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

			// these attributes should set a hidden property for
			// binding v-model to object values
			const modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
			};

			const bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    const attr = this.arg;
	    const tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    const descriptor = this.descriptor;
	    const tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        const raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    const attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    const el = this.el;
	    const interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      const attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    const modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      const model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
			};

			const el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    const id = this.id = camelize(this.arg);
	    const refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    const refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
			};

			const ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
			};

			const cloak = {
	  bind: function bind() {
	    const el = this.el;
	    this.vm.$once('pre-hook:compiled', function() {
	      el.removeAttribute('v-cloak');
	    });
	  }
			};

			// logic control
			// two-way binding
			// event handling
			// attributes
			// ref & el
			// cloak
			// must export plain object
			const directives = {
	  text: text$1,
	  html: html,
	  for: vFor,
	  if: vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
			};

			const vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (let i = 0, l = value.length; i < l; i++) {
	      const val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    const prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    let i = prevKeys.length;
	    while (i--) {
	      const key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
			};

			/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

			function normalize$1(value) {
	  const res = [];
	  if (isArray(value)) {
	    for (let i = 0, l = value.length; i < l; i++) {
	      const _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (const k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (const key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
			}

			/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

			function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  const keys = key.split(/\s+/);
	  for (let i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
			}

			const component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      const self = this;
	      this.resolveComponent(value, function() {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    const self = this;
	    this.pendingComponentCb = cancellable(function(Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    const self = this;
	    const activateHooks = this.Component.options.activate;
	    const cached = this.getCached();
	    const newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function() {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    const cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      const options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      const child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    const child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    const keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      const self = this;
	      child.$remove(function() {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    const self = this;
	    const current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function() {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function() {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (const key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
			};

			/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

			function callActivateHooks(hooks, vm, cb) {
	  const total = hooks.length;
	  let called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
			}

			const propBindingModes = config._propBindingModes;
			const empty = {};

			// regexes
			const identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
			const settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

			/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

			function compileProps(el, propOptions, vm) {
	  const props = [];
	  const propsData = vm.$options.propsData;
	  const names = Object.keys(propOptions);
	  let i = names.length;
	  let options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      const lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
			}

			/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

			function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    const inlineProps = vm.$options.propsData;
	    let i = props.length;
	    let prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      } if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	            // root instance
	            initProp(vm, prop, vm.$get(prop.parentPath));
	          }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        const stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
			}

			/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

			function processPropValue(vm, prop, rawValue, fn) {
	  const isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  let value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  const coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function() {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
			}

			/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

			function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function(value) {
	    defineReactive(vm, prop.path, value);
	  });
			}

			/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

			function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function(value) {
	    vm[prop.path] = value;
	  });
			}

			/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

			function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  const options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  const def = options.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
			}

			/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

			function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  const options = prop.options;
	  let type = options.type;
	  let valid = !type;
	  const expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (let i = 0; i < type.length && !valid; i++) {
	      const assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  const validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
			}

			/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

			function coerceProp(prop, value, vm) {
	  const coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + (typeof coerce === 'undefined' ? 'undefined' : _typeof(coerce)) + '.', vm);
	    return value;
	  }
			}

			/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

			function assertType(value, type) {
	  let valid;
	  let expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
			}

			/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

			function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
			}

			/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

			function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
			}

			const bindingModes = config._propBindingModes;

			var propDef = {

	  bind: function bind() {
	    const child = this.vm;
	    const parent = child._context;
	    // passed in from compiler directly
	    const prop = this.descriptor.prop;
	    const childKey = prop.path;
	    const parentKey = prop.parentPath;
	    const twoWay = prop.mode === bindingModes.TWO_WAY;

	    const parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function(val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      const self = this;
	      child.$once('pre-hook:created', function() {
	        self.childWatcher = new Watcher(child, childKey, function(val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
			};

			let queue$1 = [];
			let queued = false;

			/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

			function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
			}

			/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

			function flush() {
	  // Force layout
	  const f = document.documentElement.offsetHeight;
	  for (let i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
			}

			const TYPE_TRANSITION = 'transition';
			const TYPE_ANIMATION = 'animation';
			const transDurationProp = transitionProp + 'Duration';
			const animDurationProp = animationProp + 'Duration';

			/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

			const raf = inBrowser && window.requestAnimationFrame;
			const waitForTransitionStart = raf
			/* istanbul ignore next */
				? function(fn) {
	  raf(function() {
	    raf(fn);
	  });
				} : function(fn) {
	  setTimeout(fn, 50);
				};

			/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
			function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  const self = this; ['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function(m) {
	    self[m] = bind(self[m], self);
	  });
			}

			const p$1 = Transition.prototype;

			/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

			p$1.enter = function(op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
			};

			/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

			p$1.enterNextTick = function() {
	  const _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function() {
	    _this.justEntered = false;
	  });
	  const enterDone = this.enterDone;
	  const type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
			};

			/**
	 * The "cleanup" phase of an entering transition.
	 */

			p$1.enterDone = function() {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
			};

			/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

			p$1.leave = function(op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
			};

			/**
	 * The "nextTick" phase of a leaving transition.
	 */

			p$1.leaveNextTick = function() {
	  const type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    const event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
			};

			/**
	 * The "cleanup" phase of a leaving transition.
	 */

			p$1.leaveDone = function() {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
			};

			/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

			p$1.cancelPending = function() {
	  this.op = this.cb = null;
	  let hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
			};

			/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

			p$1.callHook = function(type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
			};

			/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

			p$1.callHookWithCb = function(type) {
	  const hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
			};

			/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

			p$1.getCssTransitionType = function(className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  let type = this.type || this.typeCache[className];
	  if (type) return type;
	  const inlineStyles = this.el.style;
	  const computedStyles = window.getComputedStyle(this.el);
	  const transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    const animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
			};

			/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

			p$1.setupCssCb = function(event, cb) {
	  this.pendingCssEvent = event;
	  const self = this;
	  const el = this.el;
	  var onEnd = this.pendingCssCb = function(e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
			};

			/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

			function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    const rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
			}

			const transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    const el = this.el;
	    // resolve on owner vm
	    const hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
			};

			const internalDirectives = {
	  style: style,
	  class: vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
			};

			// special binding prefixes
			const bindRE = /^v-bind:|^:/;
			const onRE = /^v-on:|^@/;
			const dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
			const modifierRE = /\.[^\.]+/g;
			const transitionRE = /^(v-bind:|:)?transition$/;

			// default directive priority
			const DEFAULT_PRIORITY = 1000;
			const DEFAULT_TERMINAL_PRIORITY = 2000;

			/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

			function compile(el, options, partial) {
	  // link function for the node itself.
	  const nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  const childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    const childNodes = toArray(el.childNodes);
	    // link
	    const dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
			}

			/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

			function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  const originalDirCount = vm._directives.length;
	  linker();
	  const dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (let i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
			}

			/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
			function sortDirectives(dirs) {
	  if (dirs.length === 0) return;

	  const groupedMap = {};
	  let i, j, k, l;
	  let index = 0;
	  const priorities = [];
	  for (i = 0, j = dirs.length; i < j; i++) {
	    const dir = dirs[i];
	    const priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    let array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	      priorities.push(priority);
	    }
	    array.push(dir);
	  }

	  priorities.sort(function(a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    const group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
			}

			/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

			function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
			}

			/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

			function teardownDirs(vm, dirs, destroying) {
	  let i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
			}

			/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

			function compileAndLinkProps(vm, el, props, scope) {
	  const propsLinkFn = compileProps(el, props, vm);
	  const propDirs = linkAndCapture(function() {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
			}

			/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

			function compileRoot(el, options, contextOptions) {
	  const containerAttrs = options._containerAttrs;
	  const replacerAttrs = options._replacerAttrs;
	  let contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    const names = containerAttrs.filter(function(attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function(attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      const plural = names.length > 1;

	      let componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }

	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    const context = vm._context;
	    let contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function() {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    const selfDirs = linkAndCapture(function() {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
			}

			/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

			function compileNode(node, options) {
	  const type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
			}

			/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

			function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    const tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  let linkFn;
	  const hasAttrs = el.hasAttributes();
	  const attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
			}

			/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

			function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  const tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  let next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  const frag = document.createDocumentFragment();
	  let el, token;
	  for (let i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
			}

			/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

			function removeText(vm, node) {
	  remove(node);
			}

			/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

			function processTextToken(token, options) {
	  let el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    const parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
			}

			/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

			function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    const fragClone = frag.cloneNode(true);
	    const childNodes = toArray(fragClone.childNodes);
	    let token, value, node;
	    for (let i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
			}

			/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

			function compileNodeList(nodeList, options) {
	  const linkFns = [];
	  let nodeLinkFn, childLinkFn, node;
	  for (let i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
			}

			/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

			function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    let node, nodeLinkFn, childrenLinkFn;
	    for (let i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      const childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
			}

			/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

			function checkElementDirectives(el, options) {
	  const tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  const def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
			}

			/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

			function checkComponent(el, options) {
	  const component = checkComponentAttr(el, options);
	  if (component) {
	    const ref = findRef(el);
	    const descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    const componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
			}

			/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

			function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    const prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  let attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (let i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
			}

			function skip() {}
			skip.terminal = true;

			/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

			function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  const parsed = parseDirective(value);
	  const descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  const fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
			}

			/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

			function compileDirectives(attrs, options) {
	  let i = attrs.length;
	  const dirs = [];
	  let attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function(attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    const hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    const parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
			}

			/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

			function parseModifiers(name) {
	  const res = Object.create(null);
	  const match = name.match(modifierRE);
	  if (match) {
	    let i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
			}

			/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

			function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    let i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
			}

			/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

			function hasOneTime(tokens) {
	  let i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
			}

			function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
			}

			const specialCharRE = /[^\w\-:\.]/;

			/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

			function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
			}

			/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

			function transcludeTemplate(el, options) {
	  const template = options.template;
	  const frag = parseTemplate(template, true);
	  if (frag) {
	    const replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    const tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
			}

			/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

			function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
			}

			/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

			function mergeAttrs(from, to) {
	  const attrs = from.attributes;
	  let i = attrs.length;
	  let name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function(cls) {
	        addClass(to, cls);
	      });
	    }
	  }
			}

			/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

			function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  const contents = vm._slotContents = Object.create(null);
	  let el, name;
	  for (let i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    const nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents.default = extractFragment(content.childNodes, content);
	  }
			}

			/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

			function extractFragment(nodes, parent) {
	  const frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (let i = 0, l = nodes.length; i < l; i++) {
	    let node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
			}

			const compiler = Object.freeze({
	  compile: compile,
	  compileAndLinkProps: compileAndLinkProps,
	  compileRoot: compileRoot,
	  transclude: transclude,
	  resolveSlots: resolveSlots
			});

			function stateMixin(Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function() {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function() {
	    const options = this.$options;
	    let el = options.el;
	    const props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function() {
	    const dataFn = this.$options.data;
	    let data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    const props = this._props;
	    // proxy data on instance
	    const keys = Object.keys(data);
	    let i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function(newData) {
	    newData = newData || {};
	    const oldData = this._data;
	    this._data = newData;
	    let keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function(key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      const self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function(key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function() {
	    for (let i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function() {
	    const computed = this.$options.computed;
	    if (computed) {
	      for (const key in computed) {
	        const userDef = computed[key];
	        const def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    const watcher = new Watcher(owner, getter, null, {
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

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function() {
	    const methods = this.$options.methods;
	    if (methods) {
	      for (const key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function() {
	    const metas = this.$options._meta;
	    if (metas) {
	      for (const key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
			}

			const eventRE = /^v-on:|^@/;

			function eventsMixin(Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function() {
	    const options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    const attrs = el.attributes;
	    let name, value, handler;
	    for (let i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    let handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    const type = typeof handler === 'undefined' ? 'undefined' : _typeof(handler);
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      const methods = vm.$options.methods;
	      const method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function() {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function(hook) {
	    this.$emit('pre-hook:' + hook);
	    const handlers = this.$options[hook];
	    if (handlers) {
	      for (let i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
			}

			function noop$1() {}

			/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
			function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
			}

			/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

			Directive.prototype._bind = function() {
	  const name = this.name;
	  const descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    const attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  const def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    const dir = this;
	    if (this.update) {
	      this._update = function(val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    const preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    const postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    const watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
			};

			/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

			Directive.prototype._setupParams = function() {
	  if (!this.params) {
	    return;
	  }
	  const params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  let i = params.length;
	  let key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
			};

			/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

			Directive.prototype._setupParamWatcher = function(key, expression) {
	  const self = this;
	  let called = false;
	  const unwatch = (this._scope || this.vm).$watch(expression, function(val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      const cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  }); (this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
			};

			/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

			Directive.prototype._checkStatement = function() {
	  const expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    const fn = parseExpression$1(expression).get;
	    const scope = this._scope || this.vm;
	    let handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
			};

			/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

			Directive.prototype.set = function(value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function() {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
			};

			/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

			Directive.prototype._withLock = function(fn) {
	  const self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function() {
	    self._locked = false;
	  });
			};

			/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

			Directive.prototype.on = function(event, handler, useCapture) {
	  on(this.el, event, handler, useCapture); (this._listeners || (this._listeners = [])).push([event, handler]);
			};

			/**
	 * Teardown the watcher and call unbind.
	 */

			Directive.prototype._teardown = function() {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    const listeners = this._listeners;
	    let i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    const unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
			};

			function lifecycleMixin(Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function(remove) {
	    const ref = this.$options._ref;
	    if (ref) {
	      const refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function(el) {
	    const options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    const original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    const contextOptions = this._context && this._context.$options;
	    const rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    let contentLinkFn;
	    const ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    const rootUnlinkFn = rootLinker(this, el, this._scope);
	    const contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function() {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function(el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function(descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function(remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    let destroyReady;
	    let pendingRemoval;

	    const self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    const cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function() {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    let i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    const parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function() {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
			}

			function miscMixin(Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function(value, oldValue, filters, write) {
	    let filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function(value, cb) {
	    let factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        const cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (let i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
			}

			const filterRE$1 = /[^|]\|[^|]/;

			function dataAPI(Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function(exp, asStatement) {
	    const res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        const self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          const result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function(exp, val) {
	    const res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function(key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function(expOrFn, cb, options) {
	    const vm = this;
	    let parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    const watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function(text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      const dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      const val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function(text) {
	    const tokens = parseText(text);
	    const vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function(token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function(path) {
	    let data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      let key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
			}

			function domAPI(Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function(fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function(target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function(target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function(target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function(target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function(cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    const inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    const self = this;
	    const realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      const op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    const targetIsDetached = !inDoc(target);
	    const op = withTransition === false || targetIsDetached ? op1 : op2;
	    const shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function(node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
			}

			function eventsAPI(Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function(event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function(event, fn) {
	    const self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function(event, fn) {
	    let cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    let cb;
	    let i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function(event) {
	    const isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    let cbs = this._events[event];
	    let shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      const hasParentCbs = isSource && cbs.some(function(cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      const args = toArray(arguments, 1);
	      for (let i = 0, l = cbs.length; i < l; i++) {
	        const cb = cbs[i];
	        const res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function(event) {
	    const isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    const children = this.$children;
	    const args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (let i = 0, l = children.length; i < l; i++) {
	      const child = children[i];
	      const shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function(event) {
	    let shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    let parent = this.$parent;
	    const args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  const hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    let parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
			}

			function lifecycleAPI(Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function(el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function(remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function(el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
			}

			/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

			function Vue(options) {
	  this._init(options);
			}

			// install internals
			initMixin(Vue);
			stateMixin(Vue);
			eventsMixin(Vue);
			lifecycleMixin(Vue);
			miscMixin(Vue);

			// install instance APIs
			dataAPI(Vue);
			domAPI(Vue);
			eventsAPI(Vue);
			lifecycleAPI(Vue);

			const slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    const name = this.params.name || 'default';
	    const content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        const elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      const scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
			};

			const partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    const partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
			};

			const elementDirectives = {
	  slot: slot,
	  partial: partial
			};

			const convertArray = vFor._postProcess;

			/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

			function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
			}

			/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

			function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  const n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  const keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  const res = [];
	  let item, key, val, j;
	  for (let i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
			}

			/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

			function orderBy(arr) {
	  let _comparator = null;
	  let sortKeys;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  let args = toArray(arguments, 1);
	  let order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  const firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    _comparator = function comparator(a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    _comparator = function comparator(a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || _comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    const sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(_comparator);
			}

			/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

			function contains(val, search) {
	  let i;
	  if (isPlainObject(val)) {
	    const keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
			}

			const digitsRE = /(\d{3})(?=\d)/g;

			// asset collections must be a plain object.
			const filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    const stringified = Math.abs(value).toFixed(decimals);
	    const _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    const i = _int.length % 3;
	    const head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    const _float = decimals ? stringified.slice(-1 - decimals) : '';
	    const sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    const args = toArray(arguments, 1);
	    const length = args.length;
	    if (length > 1) {
	      const index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
			};

			function installGlobalAPI(Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  let cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function(extendOptions) {
	    extendOptions = extendOptions || {};
	    const Super = this;
	    const isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    let name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    const Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
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
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

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

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function(mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function(type) {
	    Vue[type] = function(id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
			}

			installGlobalAPI(Vue);

			Vue.version = '1.0.28';

			// devtools global hook
			/* istanbul ignore next */
			setTimeout(function() {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
			}, 0);

			module.exports = Vue;
			/* WEBPACK VAR INJECTION */ }.call(exports, __webpack_require__(332)));
		/***/ },
	/* 332 */
	/***/ function(module, exports) {
		'use strict';

		// shim for using process in browser
		const process = module.exports = {};

		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.

		let cachedSetTimeout;
		let cachedClearTimeout;

		function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
		}
		function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
		}
		(function() {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
		})();
		function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        // normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
		}
		function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        // normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
		}
		let queue = [];
		let draining = false;
		let currentQueue;
		let queueIndex = -1;

		function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
		}

		function drainQueue() {
	    if (draining) {
	        return;
	    }
	    const timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    let len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
		}

		process.nextTick = function(fun) {
	    const args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (let i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
		};

		// v8 likes predictible objects
		function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
		}
		Item.prototype.run = function() {
	    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};

		function noop() {}

		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;
		process.prependListener = noop;
		process.prependOnceListener = noop;

		process.listeners = function(name) {
	    return [];
		};

		process.binding = function(name) {
	    throw new Error('process.binding is not supported');
		};

		process.cwd = function() {
	    return '/';
		};
		process.chdir = function(dir) {
	    throw new Error('process.chdir is not supported');
		};
		process.umask = function() {
	    return 0;
		};
		/***/ },
	/* 333 */
	/***/ function(module, exports, __webpack_require__) {
		let __vue_script__, __vue_template__;
		const __vue_styles__ = {};
		__webpack_require__(334);
		__vue_script__ = __webpack_require__(338);
		if (Object.keys(__vue_script__).some(function(key) { return key !== 'default' && key !== '__esModule'; })) {
	  console.warn('[vue-loader] upload-1.vue: named exports in *.vue files are ignored.');
		}
		__vue_template__ = __webpack_require__(440);
		module.exports = __vue_script__ || {};
		if (module.exports.__esModule) module.exports = module.exports.default;
		const __vue_options__ = typeof module.exports === 'function' ? (module.exports.options || (module.exports.options = {})) : module.exports;
		if (__vue_template__) {
			__vue_options__.template = __vue_template__;
		}
		if (!__vue_options__.computed) __vue_options__.computed = {};
		Object.keys(__vue_styles__).forEach(function(key) {
			const module = __vue_styles__[key];
			__vue_options__.computed[key] = function() { return module; };
		});
		if (false) {
			(function() {
				module.hot.accept();
	  const hotAPI = require('vue-hot-reload-api');
	  hotAPI.install(require('vue'), false);
	  if (!hotAPI.compatible) return;
	  const id = '_v-24ae8f89/upload-1.vue';
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports);
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__);
	  }
			})();
		}
		/***/ },
	/* 334 */
	/***/ function(module, exports, __webpack_require__) {
		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		let content = __webpack_require__(335);
		if (typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		const update = __webpack_require__(337)(content, {});
		if (content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if (false) {
		// When the styles change, update the <style> tags
			if (!content.locals) {
				module.hot.accept('!!./node_modules/_css-loader@0.23.1@css-loader/index.js!./node_modules/_vue-loader@8.7.0@vue-loader/lib/style-rewriter.js!./node_modules/_vue-loader@8.7.0@vue-loader/lib/selector.js?type=style&index=0!./upload-1.vue', function() {
					let newContent = require('!!./node_modules/_css-loader@0.23.1@css-loader/index.js!./node_modules/_vue-loader@8.7.0@vue-loader/lib/style-rewriter.js!./node_modules/_vue-loader@8.7.0@vue-loader/lib/selector.js?type=style&index=0!./upload-1.vue');
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
		/***/ },
	/* 335 */
	/***/ function(module, exports, __webpack_require__) {
		exports = module.exports = __webpack_require__(336)();
		// imports

		// module
		exports.push([module.id, '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n@charset "UTF-8";\r\n@-webkit-keyframes vicp_progress {\r\n  0% {\r\n    background-position-y: 0; }\r\n  100% {\r\n    background-position-y: 40px; } }\r\n@keyframes vicp_progress {\r\n  0% {\r\n    background-position-y: 0; }\r\n  100% {\r\n    background-position-y: 40px; } }\r\n\r\n@-webkit-keyframes vicp {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0) translatey(-60px);\r\n            transform: scale(0) translatey(-60px); }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1) translatey(0);\r\n            transform: scale(1) translatey(0); } }\r\n\r\n@keyframes vicp {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0) translatey(-60px);\r\n            transform: scale(0) translatey(-60px); }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1) translatey(0);\r\n            transform: scale(1) translatey(0); } }\r\n\r\n.vue-image-crop-upload {\r\n  position: fixed;\r\n  display: block;\r\n  box-sizing: border-box;\r\n  z-index: 10000;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.65);\r\n  -webkit-tap-highlight-color: transparent;\r\n  -moz-tap-highlight-color: transparent; }\r\n  .vue-image-crop-upload .vicp-wrap {\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n    position: fixed;\r\n    display: block;\r\n    box-sizing: border-box;\r\n    z-index: 10000;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    width: 600px;\r\n    height: 330px;\r\n    padding: 25px;\r\n    background-color: #fff;\r\n    border-radius: 2px;\r\n    -webkit-animation: vicp 0.12s ease-in;\r\n            animation: vicp 0.12s ease-in; }\r\n    .vue-image-crop-upload .vicp-wrap .vicp-close {\r\n      position: absolute;\r\n      right: -30px;\r\n      top: -30px; }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4 {\r\n        position: relative;\r\n        display: block;\r\n        width: 30px;\r\n        height: 30px;\r\n        cursor: pointer;\r\n        transition: -webkit-transform 0.18s;\r\n        transition: transform 0.18s;\r\n        transition: transform 0.18s, -webkit-transform 0.18s;\r\n        -webkit-transform: rotate(0);\r\n                transform: rotate(0); }\r\n        .vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4::after, .vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4::before {\r\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n          content: \'\';\r\n          position: absolute;\r\n          top: 12px;\r\n          left: 4px;\r\n          width: 20px;\r\n          height: 3px;\r\n          -webkit-transform: rotate(45deg);\r\n                  transform: rotate(45deg);\r\n          background-color: #fff; }\r\n        .vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4::after {\r\n          -webkit-transform: rotate(-45deg);\r\n                  transform: rotate(-45deg); }\r\n        .vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4:hover {\r\n          -webkit-transform: rotate(90deg);\r\n                  transform: rotate(90deg); }\r\n    .vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area {\r\n      position: relative;\r\n      box-sizing: border-box;\r\n      padding: 35px;\r\n      height: 170px;\r\n      background-color: rgba(0, 0, 0, 0.03);\r\n      text-align: center;\r\n      border: 1px dashed rgba(0, 0, 0, 0.08);\r\n      overflow: hidden; }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 {\r\n        display: block;\r\n        margin: 0 auto 6px;\r\n        width: 42px;\r\n        height: 42px;\r\n        overflow: hidden; }\r\n        .vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-arrow {\r\n          display: block;\r\n          margin: 0 auto;\r\n          width: 0;\r\n          height: 0;\r\n          border-bottom: 14.7px solid rgba(0, 0, 0, 0.3);\r\n          border-left: 14.7px solid transparent;\r\n          border-right: 14.7px solid transparent; }\r\n        .vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-body {\r\n          display: block;\r\n          width: 12.6px;\r\n          height: 14.7px;\r\n          margin: 0 auto;\r\n          background-color: rgba(0, 0, 0, 0.3); }\r\n        .vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-bottom {\r\n          box-sizing: border-box;\r\n          display: block;\r\n          height: 12.6px;\r\n          border: 6px solid rgba(0, 0, 0, 0.3);\r\n          border-top: none; }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-hint {\r\n        display: block;\r\n        padding: 15px;\r\n        font-size: 14px;\r\n        color: #666;\r\n        line-height: 30px; }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-no-supported-hint {\r\n        display: block;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        padding: 30px;\r\n        width: 100%;\r\n        height: 60px;\r\n        line-height: 30px;\r\n        background-color: #eee;\r\n        text-align: center;\r\n        color: #666;\r\n        font-size: 14px; }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area:hover {\r\n        cursor: pointer;\r\n        border-color: rgba(0, 0, 0, 0.1);\r\n        background-color: rgba(0, 0, 0, 0.05); }\r\n    .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop {\r\n      overflow: hidden; }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left {\r\n        float: left; }\r\n        .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container {\r\n          position: relative;\r\n          display: block;\r\n          width: 240px;\r\n          height: 180px;\r\n          background-color: #e5e5e0;\r\n          overflow: hidden; }\r\n          .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img {\r\n            position: absolute;\r\n            display: block;\r\n            cursor: move;\r\n            -webkit-user-select: none;\r\n               -moz-user-select: none;\r\n                -ms-user-select: none;\r\n                    user-select: none; }\r\n          .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade {\r\n            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n            position: absolute;\r\n            background-color: rgba(241, 242, 243, 0.8); }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade.vicp-img-shade-1 {\r\n              top: 0;\r\n              left: 0; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade.vicp-img-shade-2 {\r\n              bottom: 0;\r\n              right: 0; }\r\n        .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate {\r\n          position: relative;\r\n          width: 240px;\r\n          height: 18px; }\r\n          .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i {\r\n            display: block;\r\n            width: 18px;\r\n            height: 18px;\r\n            border-radius: 100%;\r\n            line-height: 18px;\r\n            text-align: center;\r\n            font-size: 12px;\r\n            font-weight: bold;\r\n            background-color: rgba(0, 0, 0, 0.08);\r\n            color: #fff;\r\n            overflow: hidden; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i:hover {\r\n              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n              cursor: pointer;\r\n              background-color: rgba(0, 0, 0, 0.14); }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i:first-child {\r\n              float: left; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i:last-child {\r\n              float: right; }\r\n        .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range {\r\n          position: relative;\r\n          margin: 30px 0 10px 0;\r\n          width: 240px;\r\n          height: 18px; }\r\n          .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5,\r\n          .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6 {\r\n            position: absolute;\r\n            top: 0;\r\n            width: 18px;\r\n            height: 18px;\r\n            border-radius: 100%;\r\n            background-color: rgba(0, 0, 0, 0.08); }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5:hover,\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6:hover {\r\n              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n              cursor: pointer;\r\n              background-color: rgba(0, 0, 0, 0.14); }\r\n          .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5 {\r\n            left: 0; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5::before {\r\n              position: absolute;\r\n              content: \'\';\r\n              display: block;\r\n              left: 3px;\r\n              top: 8px;\r\n              width: 12px;\r\n              height: 2px;\r\n              background-color: #fff; }\r\n          .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6 {\r\n            right: 0; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6::before {\r\n              position: absolute;\r\n              content: \'\';\r\n              display: block;\r\n              left: 3px;\r\n              top: 8px;\r\n              width: 12px;\r\n              height: 2px;\r\n              background-color: #fff; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6::after {\r\n              position: absolute;\r\n              content: \'\';\r\n              display: block;\r\n              top: 3px;\r\n              left: 8px;\r\n              width: 2px;\r\n              height: 12px;\r\n              background-color: #fff; }\r\n          .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range] {\r\n            display: block;\r\n            padding-top: 5px;\r\n            margin: 0 auto;\r\n            width: 180px;\r\n            height: 8px;\r\n            vertical-align: top;\r\n            background: transparent;\r\n            -webkit-appearance: none;\r\n               -moz-appearance: none;\r\n                    appearance: none;\r\n            cursor: pointer;\r\n            /* 滑块\r\n\t\t\t\t\t\t\t ---------------------------------------------------------------*/\r\n            /* 轨道\r\n\t\t\t\t\t\t\t ---------------------------------------------------------------*/ }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus {\r\n              outline: none; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-webkit-slider-thumb {\r\n              box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n              -webkit-appearance: none;\r\n                      appearance: none;\r\n              margin-top: -3px;\r\n              width: 12px;\r\n              height: 12px;\r\n              background-color: #61c091;\r\n              border-radius: 100%;\r\n              border: none;\r\n              transition: 0.2s; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-moz-range-thumb {\r\n              box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n              -moz-appearance: none;\r\n                   appearance: none;\r\n              width: 12px;\r\n              height: 12px;\r\n              background-color: #61c091;\r\n              border-radius: 100%;\r\n              border: none;\r\n              transition: 0.2s; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-thumb {\r\n              box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n              appearance: none;\r\n              width: 12px;\r\n              height: 12px;\r\n              background-color: #61c091;\r\n              border: none;\r\n              border-radius: 100%;\r\n              transition: 0.2s; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:active::-moz-range-thumb {\r\n              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n              width: 14px;\r\n              height: 14px; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:active::-ms-thumb {\r\n              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n              width: 14px;\r\n              height: 14px; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:active::-webkit-slider-thumb {\r\n              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n              margin-top: -4px;\r\n              width: 14px;\r\n              height: 14px; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-webkit-slider-runnable-track {\r\n              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n              width: 100%;\r\n              height: 6px;\r\n              cursor: pointer;\r\n              border-radius: 2px;\r\n              border: none;\r\n              background-color: rgba(68, 170, 119, 0.3); }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-moz-range-track {\r\n              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n              width: 100%;\r\n              height: 6px;\r\n              cursor: pointer;\r\n              border-radius: 2px;\r\n              border: none;\r\n              background-color: rgba(68, 170, 119, 0.3); }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-track {\r\n              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n              width: 100%;\r\n              cursor: pointer;\r\n              background: transparent;\r\n              border-color: transparent;\r\n              color: transparent;\r\n              height: 6px;\r\n              border-radius: 2px;\r\n              border: none; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-fill-lower {\r\n              background-color: rgba(68, 170, 119, 0.3); }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-fill-upper {\r\n              background-color: rgba(68, 170, 119, 0.15); }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-webkit-slider-runnable-track {\r\n              background-color: rgba(68, 170, 119, 0.5); }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-moz-range-track {\r\n              background-color: rgba(68, 170, 119, 0.5); }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-ms-fill-lower {\r\n              background-color: rgba(68, 170, 119, 0.45); }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-ms-fill-upper {\r\n              background-color: rgba(68, 170, 119, 0.25); }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right {\r\n        float: right; }\r\n        .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview {\r\n          height: 150px;\r\n          overflow: hidden; }\r\n          .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item {\r\n            position: relative;\r\n            padding: 5px;\r\n            width: 100px;\r\n            height: 100px;\r\n            float: left;\r\n            margin-right: 16px; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item span {\r\n              position: absolute;\r\n              bottom: -30px;\r\n              width: 100%;\r\n              font-size: 14px;\r\n              color: #bbb;\r\n              display: block;\r\n              text-align: center; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item img {\r\n              position: absolute;\r\n              display: block;\r\n              top: 0;\r\n              bottom: 0;\r\n              left: 0;\r\n              right: 0;\r\n              margin: auto;\r\n              padding: 3px;\r\n              background-color: #fff;\r\n              border: 1px solid rgba(0, 0, 0, 0.15);\r\n              overflow: hidden;\r\n              -webkit-user-select: none;\r\n                 -moz-user-select: none;\r\n                  -ms-user-select: none;\r\n                      user-select: none; }\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item.vicp-preview-item-circle {\r\n              margin-right: 0; }\r\n              .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item.vicp-preview-item-circle img {\r\n                border-radius: 100%; }\r\n    .vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload {\r\n      position: relative;\r\n      box-sizing: border-box;\r\n      padding: 35px;\r\n      height: 170px;\r\n      background-color: rgba(0, 0, 0, 0.03);\r\n      text-align: center;\r\n      border: 1px dashed #ddd; }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-loading {\r\n        display: block;\r\n        padding: 15px;\r\n        font-size: 16px;\r\n        color: #999;\r\n        line-height: 30px; }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap {\r\n        margin-top: 12px;\r\n        background-color: rgba(0, 0, 0, 0.08);\r\n        border-radius: 3px; }\r\n        .vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap .vicp-progress {\r\n          position: relative;\r\n          display: block;\r\n          height: 5px;\r\n          border-radius: 3px;\r\n          background-color: #4a7;\r\n          box-shadow: 0 2px 6px 0 rgba(68, 170, 119, 0.3);\r\n          transition: width 0.15s linear;\r\n          background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\r\n          background-size: 40px 40px;\r\n          -webkit-animation: vicp_progress 0.5s linear infinite;\r\n                  animation: vicp_progress 0.5s linear infinite; }\r\n          .vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap .vicp-progress::after {\r\n            content: \'\';\r\n            position: absolute;\r\n            display: block;\r\n            top: -3px;\r\n            right: -3px;\r\n            width: 9px;\r\n            height: 9px;\r\n            border: 1px solid rgba(245, 246, 247, 0.7);\r\n            box-shadow: 0 1px 4px 0 rgba(68, 170, 119, 0.7);\r\n            border-radius: 100%;\r\n            background-color: #4a7; }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-error,\r\n      .vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-success {\r\n        height: 100px;\r\n        line-height: 100px; }\r\n    .vue-image-crop-upload .vicp-wrap .vicp-operate {\r\n      position: absolute;\r\n      right: 20px;\r\n      bottom: 20px; }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-operate a {\r\n        position: relative;\r\n        float: left;\r\n        display: block;\r\n        margin-left: 10px;\r\n        width: 100px;\r\n        height: 36px;\r\n        line-height: 36px;\r\n        text-align: center;\r\n        cursor: pointer;\r\n        font-size: 14px;\r\n        color: #4a7;\r\n        border-radius: 2px;\r\n        overflow: hidden;\r\n        -webkit-user-select: none;\r\n           -moz-user-select: none;\r\n            -ms-user-select: none;\r\n                user-select: none; }\r\n        .vue-image-crop-upload .vicp-wrap .vicp-operate a:hover {\r\n          background-color: rgba(0, 0, 0, 0.03); }\r\n    .vue-image-crop-upload .vicp-wrap .vicp-error,\r\n    .vue-image-crop-upload .vicp-wrap .vicp-success {\r\n      display: block;\r\n      font-size: 14px;\r\n      line-height: 24px;\r\n      height: 24px;\r\n      color: #d10;\r\n      text-align: center;\r\n      vertical-align: top; }\r\n    .vue-image-crop-upload .vicp-wrap .vicp-success {\r\n      color: #4a7; }\r\n    .vue-image-crop-upload .vicp-wrap .vicp-icon3 {\r\n      position: relative;\r\n      display: inline-block;\r\n      width: 20px;\r\n      height: 20px;\r\n      top: 4px; }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-icon3::after {\r\n        position: absolute;\r\n        top: 3px;\r\n        left: 6px;\r\n        width: 6px;\r\n        height: 10px;\r\n        border-width: 0 2px 2px 0;\r\n        border-color: #4a7;\r\n        border-style: solid;\r\n        -webkit-transform: rotate(45deg);\r\n                transform: rotate(45deg);\r\n        content: \'\'; }\r\n    .vue-image-crop-upload .vicp-wrap .vicp-icon2 {\r\n      position: relative;\r\n      display: inline-block;\r\n      width: 20px;\r\n      height: 20px;\r\n      top: 4px; }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-icon2::after, .vue-image-crop-upload .vicp-wrap .vicp-icon2::before {\r\n        content: \'\';\r\n        position: absolute;\r\n        top: 9px;\r\n        left: 4px;\r\n        width: 13px;\r\n        height: 2px;\r\n        background-color: #d10;\r\n        -webkit-transform: rotate(45deg);\r\n                transform: rotate(45deg); }\r\n      .vue-image-crop-upload .vicp-wrap .vicp-icon2::after {\r\n        -webkit-transform: rotate(-45deg);\r\n                transform: rotate(-45deg); }\r\n\r\n.e-ripple {\r\n  position: absolute;\r\n  border-radius: 100%;\r\n  background-color: rgba(0, 0, 0, 0.15);\r\n  background-clip: padding-box;\r\n  pointer-events: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n  opacity: 1; }\r\n  .e-ripple.z-active {\r\n    opacity: 0;\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\r\n    transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out, -webkit-transform 0.6s ease-out; }\r\n\r\n', '']);

		// exports
		/***/ },
	/* 336 */
	/***/ function(module, exports) {
		'use strict';

		/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
		// css base code, injected by the css-loader
		module.exports = function() {
			const list = [];

			// return the list of modules as css string
			list.toString = function toString() {
				const result = [];
				for (let i = 0; i < this.length; i++) {
					const item = this[i];
					if (item[2]) {
						result.push('@media ' + item[2] + '{' + item[1] + '}');
					} else {
						result.push(item[1]);
					}
				}
				return result.join('');
			};

			// import a list of modules into the list
			list.i = function(modules, mediaQuery) {
				if (typeof modules === 'string') modules = [[null, modules, '']];
				const alreadyImportedModules = {};
				for (var i = 0; i < this.length; i++) {
					const id = this[i][0];
					if (typeof id === 'number') alreadyImportedModules[id] = true;
				}
				for (i = 0; i < modules.length; i++) {
					const item = modules[i];
					// skip already imported module
					// this implementation is not 100% perfect for weird media query combinations
					//  when a module is imported multiple times with different media queries.
					//  I hope this will never occur (Hey this way we have smaller bundles)
					if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {
						if (mediaQuery && !item[2]) {
							item[2] = mediaQuery;
						} else if (mediaQuery) {
							item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
						}
						list.push(item);
					}
				}
			};
			return list;
		};
		/***/ },
	/* 337 */
	/***/ function(module, exports, __webpack_require__) {
		/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
		const stylesInDom = {};
		const memoize = function(fn) {
			let memo;
			return function() {
				if (typeof memo === 'undefined') memo = fn.apply(this, arguments);
				return memo;
			};
		};
		const isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		});
		const getHeadElement = memoize(function() {
			return document.head || document.getElementsByTagName('head')[0];
		});
		let singletonElement = null;
		let singletonCounter = 0;
		const styleElementsInsertedAtTop = [];

		module.exports = function(list, options) {
			if (false) {
				if (typeof document !== 'object') throw new Error('The style-loader cannot be used in a non-browser environment');
			}

			options = options || {};
			// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
			// tags it will allow on a page
			if (typeof options.singleton === 'undefined') options.singleton = isOldIE();

			// By default, add <style> tags to the bottom of <head>.
			if (typeof options.insertAt === 'undefined') options.insertAt = 'bottom';

			const styles = listToStyles(list);
			addStylesToDom(styles, options);

			return function update(newList) {
				const mayRemove = [];
				for (var i = 0; i < styles.length; i++) {
					const item = styles[i];
					var domStyle = stylesInDom[item.id];
					domStyle.refs--;
					mayRemove.push(domStyle);
				}
				if (newList) {
					const newStyles = listToStyles(newList);
					addStylesToDom(newStyles, options);
				}
				for (var i = 0; i < mayRemove.length; i++) {
					var domStyle = mayRemove[i];
					if (domStyle.refs === 0) {
						for (let j = 0; j < domStyle.parts.length; j++) { domStyle.parts[j](); }
						delete stylesInDom[domStyle.id];
					}
				}
			};
		};

		function addStylesToDom(styles, options) {
			for (let i = 0; i < styles.length; i++) {
				const item = styles[i];
				const domStyle = stylesInDom[item.id];
				if (domStyle) {
					domStyle.refs++;
					for (var j = 0; j < domStyle.parts.length; j++) {
						domStyle.parts[j](item.parts[j]);
					}
					for (; j < item.parts.length; j++) {
						domStyle.parts.push(addStyle(item.parts[j], options));
					}
				} else {
					const parts = [];
					for (var j = 0; j < item.parts.length; j++) {
						parts.push(addStyle(item.parts[j], options));
					}
					stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
				}
			}
		}

		function listToStyles(list) {
			const styles = [];
			const newStyles = {};
			for (let i = 0; i < list.length; i++) {
				const item = list[i];
				const id = item[0];
				const css = item[1];
				const media = item[2];
				const sourceMap = item[3];
				const part = { css: css, media: media, sourceMap: sourceMap };
				if (!newStyles[id]) { styles.push(newStyles[id] = { id: id, parts: [part] }); } else { newStyles[id].parts.push(part); }
			}
			return styles;
		}

		function insertStyleElement(options, styleElement) {
			const head = getHeadElement();
			const lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
			if (options.insertAt === 'top') {
				if (!lastStyleElementInsertedAtTop) {
					head.insertBefore(styleElement, head.firstChild);
				} else if (lastStyleElementInsertedAtTop.nextSibling) {
					head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
				} else {
					head.appendChild(styleElement);
				}
				styleElementsInsertedAtTop.push(styleElement);
			} else if (options.insertAt === 'bottom') {
				head.appendChild(styleElement);
			} else {
				throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
			}
		}

		function removeStyleElement(styleElement) {
			styleElement.parentNode.removeChild(styleElement);
			const idx = styleElementsInsertedAtTop.indexOf(styleElement);
			if (idx >= 0) {
				styleElementsInsertedAtTop.splice(idx, 1);
			}
		}

		function createStyleElement(options) {
			const styleElement = document.createElement('style');
			styleElement.type = 'text/css';
			insertStyleElement(options, styleElement);
			return styleElement;
		}

		function addStyle(obj, options) {
			let styleElement, update, remove;

			if (options.singleton) {
				const styleIndex = singletonCounter++;
				styleElement = singletonElement || (singletonElement = createStyleElement(options));
				update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
				remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
			} else {
				styleElement = createStyleElement(options);
				update = applyToTag.bind(null, styleElement);
				remove = function() {
					removeStyleElement(styleElement);
				};
			}

			update(obj);

			return function updateStyle(newObj) {
				if (newObj) {
					if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) { return; }
					update(obj = newObj);
				} else {
					remove();
				}
			};
		}

		const replaceText = (function() {
			const textStore = [];

			return function(index, replacement) {
				textStore[index] = replacement;
				return textStore.filter(Boolean).join('\n');
			};
		})();

		function applyToSingletonTag(styleElement, index, remove, obj) {
			const css = remove ? '' : obj.css;

			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = replaceText(index, css);
			} else {
				const cssNode = document.createTextNode(css);
				const childNodes = styleElement.childNodes;
				if (childNodes[index]) styleElement.removeChild(childNodes[index]);
				if (childNodes.length) {
					styleElement.insertBefore(cssNode, childNodes[index]);
				} else {
					styleElement.appendChild(cssNode);
				}
			}
		}

		function applyToTag(styleElement, obj) {
			let css = obj.css;
			const media = obj.media;
			const sourceMap = obj.sourceMap;

			if (media) {
				styleElement.setAttribute('media', media);
			}

			if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
				css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
				// http://stackoverflow.com/a/26603875
				css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
			}

			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = css;
			} else {
				while (styleElement.firstChild) {
					styleElement.removeChild(styleElement.firstChild);
				}
				styleElement.appendChild(document.createTextNode(css));
			}
		}
		/***/ },
	/* 338 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		Object.defineProperty(exports, '__esModule', {
	    value: true
		});

		const _promise = __webpack_require__(339);

		const _promise2 = _interopRequireDefault(_promise);

		const _keys = __webpack_require__(409);

		const _keys2 = _interopRequireDefault(_keys);

		const _typeof2 = __webpack_require__(413);

		const _typeof3 = _interopRequireDefault(_typeof2);

		const _assign = __webpack_require__(432);

		const _assign2 = _interopRequireDefault(_assign);

		const _language = __webpack_require__(436);

		const _language2 = _interopRequireDefault(_language);

		const _mimes = __webpack_require__(437);

		const _mimes2 = _interopRequireDefault(_mimes);

		const _data2blob = __webpack_require__(438);

		const _data2blob2 = _interopRequireDefault(_data2blob);

		const _effectRipple = __webpack_require__(439);

		const _effectRipple2 = _interopRequireDefault(_effectRipple);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = {
	    props: {
	        field: {
	            type: String,
	            default: 'avatar'
	        },

	        ki: {
	            default: 0
	        },

	        value: {
	            twoWay: true,
	            default: true
	        },

	        url: {
	            type: String,
	            default: ''
	        },

	        params: {
	            type: Object,
	            default: null
	        },

	        headers: {
	            type: Object,
	            default: null
	        },

	        width: {
	            type: Number,
	            default: 200
	        },

	        height: {
	            type: Number,
	            default: 200
	        },

	        noRotate: {
	            type: Boolean,
	            default: true
	        },

	        noCircle: {
	            type: Boolean,
	            default: false
	        },

	        noSquare: {
	            type: Boolean,
	            default: false
	        },

	        maxSize: {
	            type: Number,
	            default: 10240
	        },

	        langType: {
	            type: String,
	            default: 'zh'
	        },

	        langExt: {
	            type: Object,
	            default: null
	        },

	        imgFormat: {
	            type: String,
	            default: 'png'
	        },

	        imgBgc: {
	            type: String,
	            default: '#fff'
	        },

	        withCredentials: {
	            type: Boolean,
	            default: false
	        },
	        method: {
	            type: String,
	            default: 'POST'
	        }
	    },
	    data: function data() {
	        const that = this;
	            const imgFormat = that.imgFormat;
	            const langType = that.langType;
	            const langExt = that.langExt;
	            const width = that.width;
	            const height = that.height;
	            let isSupported = true;
	            const allowImgFormat = ['jpg', 'png'];
	            const tempImgFormat = allowImgFormat.indexOf(imgFormat) === -1 ? 'jpg' : imgFormat;
	            const lang = _language2.default[langType] ? _language2.default[langType] : _language2.default.en;
	            const mime = _mimes2.default[tempImgFormat];

	        that.imgFormat = tempImgFormat;

	        if (langExt) {
	            (0, _assign2.default)(lang, langExt);
	        }
	        if (typeof FormData !== 'function') {
	            isSupported = false;
	        }
	        return {
	            mime: mime,

	            lang: lang,

	            isSupported: isSupported,

	            isSupportTouch: document.hasOwnProperty('ontouchstart'),

	            step: 1,
	            loading: 0,
	            progress: 0,

	            hasError: false,
	            errorMsg: '',

	            ratio: width / height,

	            sourceImg: null,
	            sourceImgUrl: '',
	            createImgUrl: '',

	            sourceImgMouseDown: {
	                on: false,
	                mX: 0,
	                mY: 0,
	                x: 0,
	                y: 0
	            },

	            previewContainer: {
	                width: 100,
	                height: 100
	            },

	            sourceImgContainer: {
	                width: 240,
	                height: 184
					},

	            scale: {
	                zoomAddOn: false,
	                zoomSubOn: false,
	                range: 1,

	                x: 0,
	                y: 0,
	                width: 0,
	                height: 0,
	                maxWidth: 0,
	                maxHeight: 0,
	                minWidth: 0,
	                minHeight: 0,
	                naturalWidth: 0,
	                naturalHeight: 0
	            }
	        };
	    },

	    computed: {
	        progressStyle: function progressStyle() {
	            const progress = this.progress;

	            return {
	                width: progress + '%'
	            };
	        },
	        sourceImgStyle: function sourceImgStyle() {
	            const scale = this.scale;
	                const sourceImgMasking = this.sourceImgMasking;

	            return {
	                top: scale.y + sourceImgMasking.y + 'px',
	                left: scale.x + sourceImgMasking.x + 'px',
	                width: scale.width + 'px',
	                height: scale.height + 'px'
	            };
	        },
	        sourceImgMasking: function sourceImgMasking() {
	            const width = this.width;
	                const height = this.height;
	                const ratio = this.ratio;
	                const sourceImgContainer = this.sourceImgContainer;
	                const sic = sourceImgContainer;
	                const sicRatio = sic.width / sic.height;
	                let x = 0;
	                let y = 0;
	                let w = sic.width;
	                let h = sic.height;
	                let scale = 1;

	            if (ratio < sicRatio) {
	                scale = sic.height / height;
	                w = sic.height * ratio;
	                x = (sic.width - w) / 2;
	            }
	            if (ratio > sicRatio) {
	                scale = sic.width / width;
	                h = sic.width / ratio;
	                y = (sic.height - h) / 2;
	            }
	            return {
	                scale: scale,
	                x: x,
	                y: y,
	                width: w,
	                height: h
	            };
	        },
	        sourceImgShadeStyle: function sourceImgShadeStyle() {
	            const sourceImgMasking = this.sourceImgMasking;
	                const sourceImgContainer = this.sourceImgContainer;
	                const sic = sourceImgContainer;
	                const sim = sourceImgMasking;
	                const w = sim.width == sic.width ? sim.width : (sic.width - sim.width) / 2;
	                const h = sim.height == sic.height ? sim.height : (sic.height - sim.height) / 2;

	            return {
	                width: w + 'px',
	                height: h + 'px'
	            };
	        },
	        previewStyle: function previewStyle() {
	            const width = this.width;
	                const height = this.height;
	                const ratio = this.ratio;
	                const previewContainer = this.previewContainer;
	                const pc = previewContainer;
	                let w = pc.width;
	                let h = pc.height;
	                const pcRatio = w / h;

	            if (ratio < pcRatio) {
	                w = pc.height * ratio;
	            }
	            if (ratio > pcRatio) {
	                h = pc.width / ratio;
	            }
	            return {
	                width: w + 'px',
	                height: h + 'px'
	            };
	        }
	    },
	    watch: {
	        value: function value(newValue) {
	            if (newValue && this.loading != 1) {
	                this.reset();
	            }
	        }
	    },
	    methods: {
	        ripple: function ripple(e) {
	            (0, _effectRipple2.default)(e);
	        },
	        off: function off() {
	            const _this = this;

	            setTimeout(function() {
	                _this.value = false;
	                if (_this.step == 3 && _this.loading == 2) {
	                    _this.setStep(1);
	                }
	            }, 200);
	        },
	        setStep: function setStep(no) {
	            const _this2 = this;

	            setTimeout(function() {
	                _this2.step = no;
	            }, 200);
	        },
	        preventDefault: function preventDefault(e) {
	            e.preventDefault();
	            return false;
	        },
	        handleClick: function handleClick(e) {
	            if (this.loading !== 1) {
	                if (e.target !== this.$els.fileinput) {
	                    e.preventDefault();
	                    if (document.activeElement !== this.$els) {
	                        this.$els.fileinput.click();
	                    }
	                }
	            }
	        },
	        handleChange: function handleChange(e) {
	            e.preventDefault();
	            if (this.loading !== 1) {
	                const files = e.target.files || e.dataTransfer.files;
	                this.reset();
	                if (this.checkFile(files[0])) {
	                    this.setSourceImg(files[0]);
	                }
	            }
	        },
	        checkFile: function checkFile(file) {
	            const that = this;
	                const lang = that.lang;
	                const maxSize = that.maxSize;

	            if (file.type.indexOf('image') === -1) {
	                that.hasError = true;
	                that.errorMsg = lang.error.onlyImg;
	                return false;
	            }

	            if (file.size / 1024 > maxSize) {
	                that.hasError = true;
	                that.errorMsg = lang.error.outOfSize + maxSize + 'kb';
	                return false;
	            }
	            return true;
	        },
	        reset: function reset() {
	            this.loading = 0;
	            this.progress = 0;
	            this.hasError = false;
	            this.errorMsg = '';
	        },
	        setSourceImg: function setSourceImg(file) {
	            this.$dispatch('srcFileSet', file.name, file.type, file.size);
	            const that = this;
	                const fr = new FileReader();
	            fr.onload = function(e) {
	                that.sourceImgUrl = fr.result;
	                that.startCrop();
	            };
	            fr.readAsDataURL(file);
	        },
	        startCrop: function startCrop() {
	            const that = this;
	                const width = that.width;
	                const height = that.height;
	                const ratio = that.ratio;
	                const scale = that.scale;
	                const sourceImgUrl = that.sourceImgUrl;
	                const sourceImgMasking = that.sourceImgMasking;
	                const lang = that.lang;
	                const sim = sourceImgMasking;
	                const img = new Image();

	            img.src = sourceImgUrl;
	            img.onload = function() {
	                const nWidth = img.naturalWidth;
	                    const nHeight = img.naturalHeight;
	                    const nRatio = nWidth / nHeight;
	                    let w = sim.width;
	                    let h = sim.height;
	                    let x = 0;
	                    let y = 0;

	                if (nWidth < width || nHeight < height) {
	                    that.hasError = true;
	                    that.errorMsg = lang.error.lowestPx + width + '*' + height;
	                    return false;
	                }
	                if (ratio > nRatio) {
	                    h = w / nRatio;
	                    y = (sim.height - h) / 2;
	                }
	                if (ratio < nRatio) {
	                    w = h * nRatio;
	                    x = (sim.width - w) / 2;
	                }
	                scale.range = 0;
	                scale.x = x;
	                scale.y = y;
	                scale.width = w;
	                scale.height = h;
	                scale.minWidth = w;
	                scale.minHeight = h;
	                scale.maxWidth = nWidth * sim.scale;
	                scale.maxHeight = nHeight * sim.scale;
	                scale.naturalWidth = nWidth;
	                scale.naturalHeight = nHeight;
	                that.sourceImg = img;
	                that.createImg();
	                that.setStep(2);
	            };
	        },
	        imgStartMove: function imgStartMove(e) {
	            e.preventDefault();

	            if (this.isSupportTouch && !e.targetTouches) {
	                return false;
	            }
	            const et = e.targetTouches ? e.targetTouches[0] : e;
	                const sourceImgMouseDown = this.sourceImgMouseDown;
	                const scale = this.scale;
	                const simd = sourceImgMouseDown;

	            simd.mX = et.screenX;
	            simd.mY = et.screenY;
	            simd.x = scale.x;
	            simd.y = scale.y;
	            simd.on = true;
	        },
	        imgMove: function imgMove(e) {
	            e.preventDefault();

	            if (this.isSupportTouch && !e.targetTouches) {
	                return false;
	            }
	            const et = e.targetTouches ? e.targetTouches[0] : e;
	                const _sourceImgMouseDown = this.sourceImgMouseDown;
	                const on = _sourceImgMouseDown.on;
	                const mX = _sourceImgMouseDown.mX;
	                const mY = _sourceImgMouseDown.mY;
	                const x = _sourceImgMouseDown.x;
	                const y = _sourceImgMouseDown.y;
	                const scale = this.scale;
	                const sourceImgMasking = this.sourceImgMasking;
	                const sim = sourceImgMasking;
	                const nX = et.screenX;
	                const nY = et.screenY;
	                const dX = nX - mX;
	                const dY = nY - mY;
	                let rX = x + dX;
	                let rY = y + dY;

	            if (!on) return;
	            if (rX > 0) {
	                rX = 0;
	            }
	            if (rY > 0) {
	                rY = 0;
	            }
	            if (rX < sim.width - scale.width) {
	                rX = sim.width - scale.width;
	            }
	            if (rY < sim.height - scale.height) {
	                rY = sim.height - scale.height;
	            }
	            scale.x = rX;
	            scale.y = rY;
	        },
	        rotateImg: function rotateImg(e) {
	            const sourceImg = this.sourceImg;
	                const _scale = this.scale;
	                const naturalWidth = _scale.naturalWidth;
	                const naturalHeight = _scale.naturalHeight;
	                const width = naturalHeight;
	                const height = naturalWidth;
	                const canvas = this.$els.canvas;
	                const ctx = canvas.getContext('2d');

	            canvas.width = width;
	            canvas.height = height;
	            ctx.clearRect(0, 0, width, height);

	            ctx.fillStyle = 'rgba(0,0,0,0)';
	            ctx.fillRect(0, 0, width, height);

	            ctx.translate(width, 0);
	            ctx.rotate(Math.PI * 90 / 180);

	            ctx.drawImage(sourceImg, 0, 0, naturalWidth, naturalHeight);
	            const imgUrl = canvas.toDataURL(_mimes2.default.png);

	            this.sourceImgUrl = imgUrl;
	            this.startCrop();
	        },
	        startZoomAdd: function startZoomAdd(e) {
	            const that = this;
	                const scale = that.scale;

	            scale.zoomAddOn = true;

	            function zoom() {
	                if (scale.zoomAddOn) {
	                    const range = scale.range >= 100 ? 100 : ++scale.range;
	                    that.zoomImg(range);
	                    setTimeout(function() {
	                        zoom();
	                    }, 60);
	                }
	            }
	            zoom();
	        },
	        endZoomAdd: function endZoomAdd(e) {
	            this.scale.zoomAddOn = false;
	        },
	        startZoomSub: function startZoomSub(e) {
	            const that = this;
	                const scale = that.scale;

	            scale.zoomSubOn = true;

	            function zoom() {
	                if (scale.zoomSubOn) {
	                    const range = scale.range <= 0 ? 0 : --scale.range;
	                    that.zoomImg(range);
	                    setTimeout(function() {
	                        zoom();
	                    }, 60);
	                }
	            }
	            zoom();
	        },
	        endZoomSub: function endZoomSub(e) {
	            const scale = this.scale;

	            scale.zoomSubOn = false;
	        },
	        zoomChange: function zoomChange(e) {
	            this.zoomImg(e.target.value);
	        },
	        zoomImg: function zoomImg(newRange) {
	            const that = this;
	                const sourceImgMasking = this.sourceImgMasking;
	                const sourceImgMouseDown = this.sourceImgMouseDown;
	                const scale = this.scale;
	                const maxWidth = scale.maxWidth;
	                const maxHeight = scale.maxHeight;
	                const minWidth = scale.minWidth;
	                const minHeight = scale.minHeight;
	                const width = scale.width;
	                const height = scale.height;
	                const x = scale.x;
	                const y = scale.y;
	                const range = scale.range;
	                const sim = sourceImgMasking;
	                const sWidth = sim.width;
	                const sHeight = sim.height;
	                const nWidth = minWidth + (maxWidth - minWidth) * newRange / 100;
	                const nHeight = minHeight + (maxHeight - minHeight) * newRange / 100;
	                let nX = sWidth / 2 - nWidth / width * (sWidth / 2 - x);
	                let nY = sHeight / 2 - nHeight / height * (sHeight / 2 - y);

	            if (nX > 0) {
	                nX = 0;
	            }
	            if (nY > 0) {
	                nY = 0;
	            }
	            if (nX < sWidth - nWidth) {
	                nX = sWidth - nWidth;
	            }
	            if (nY < sHeight - nHeight) {
	                nY = sHeight - nHeight;
	            }

	            scale.x = nX;
	            scale.y = nY;
	            scale.width = nWidth;
	            scale.height = nHeight;
	            scale.range = newRange;
	            setTimeout(function() {
	                if (scale.range == newRange) {
	                    that.createImg();
	                }
	            }, 300);
	        },
	        createImg: function createImg(e) {
	            const that = this;
	                const imgFormat = that.imgFormat;
	                const imgBgc = that.imgBgc;
	                const mime = that.mime;
	                const sourceImg = that.sourceImg;
	                const _that$scale = that.scale;
	                const x = _that$scale.x;
	                const y = _that$scale.y;
	                const width = _that$scale.width;
	                const height = _that$scale.height;
	                const scale = that.sourceImgMasking.scale;
	                const canvas = that.$els.canvas;
	                const ctx = canvas.getContext('2d');

	            if (e) {
	                that.sourceImgMouseDown.on = false;
	            }
	            canvas.width = that.width;
	            canvas.height = that.height;
	            ctx.clearRect(0, 0, that.width, that.height);

	            if (imgFormat == 'png') {
	                ctx.fillStyle = 'rgba(0,0,0,0)';
	            } else {
	                ctx.fillStyle = imgBgc;
	            }
	            ctx.fillRect(0, 0, that.width, that.height);

	            ctx.drawImage(sourceImg, x / scale, y / scale, width / scale, height / scale);
	            that.createImgUrl = canvas.toDataURL(mime);
	        },
	        prepareUpload: function prepareUpload() {
	            const url = this.url;
	                const createImgUrl = this.createImgUrl;
	                const field = this.field;
	                const ki = this.ki;

	            this.$dispatch('cropSuccess', createImgUrl, field, ki);
	            if (typeof url === 'string' && url) {
	                this.upload();
	            } else {
	                this.off();
	            }
	        },
	        upload: function upload() {
	            const that = this;
	                const lang = this.lang;
	                const imgFormat = this.imgFormat;
	                const mime = this.mime;
	                const url = this.url;
	                const params = this.params;
	                const field = this.field;
	                const ki = this.ki;
	                const createImgUrl = this.createImgUrl;
	                const withCredentials = this.withCredentials;
	                const method = this.method;
	                const fmData = new FormData();

	            fmData.append(field, (0, _data2blob2.default)(createImgUrl, mime), field + '.' + imgFormat);

	            if ((typeof params === 'undefined' ? 'undefined' : (0, _typeof3.default)(params)) == 'object' && params) {
	                (0, _keys2.default)(params).forEach(function(k) {
	                    fmData.append(k, params[k]);
	                });
	            }

	            const uploadProgress = function uploadProgress(event) {
	                if (event.lengthComputable) {
	                    that.progress = 100 * Math.round(event.loaded) / event.total;
	                }
	            };

	            that.reset();
	            that.loading = 1;
	            that.setStep(3);
	            new _promise2.default(function(resolve, reject) {
	                const client = new XMLHttpRequest();
	                client.open(method, url, true);
	                client.withCredentials = withCredentials;
	                client.onreadystatechange = function() {
	                    if (this.readyState !== 4) {
	                        return;
	                    }
	                    if (this.status === 200 || this.status === 201) {
	                        resolve(JSON.parse(this.responseText));
	                    } else {
	                        reject(this.status);
	                    }
	                };
	                client.upload.addEventListener('progress', uploadProgress, false);
	                if ((typeof headers === 'undefined' ? 'undefined' : (0, _typeof3.default)(headers)) == 'object' && headers) {
	                    (0, _keys2.default)(headers).forEach(function(k) {
	                        client.setRequestHeader(k, headers[k]);
	                    });
	                }
	                client.send(fmData);
	            }).then(function(resData) {
	                if (that.value) {
	                    that.loading = 2;
	                    that.$dispatch('cropUploadSuccess', resData, field, ki);
	                }
	            }, function(sts) {
	                if (that.value) {
	                    that.loading = 3;
	                    that.hasError = true;
	                    that.errorMsg = lang.fail;
	                    that.$dispatch('cropUploadFail', sts, field, ki);
	                }
	            });
	        }
	    },
	    created: function created() {
	        const _this3 = this;

	        document.addEventListener('keyup', function(e) {
	            if (_this3.value && (e.key == 'Escape' || e.keyCode == 27)) {
	                _this3.off();
	            }
	        });
	    }
		};
		/***/ },
	/* 339 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		module.exports = { default: __webpack_require__(340), __esModule: true };
		/***/ },
	/* 340 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(341);
		__webpack_require__(342);
		__webpack_require__(386);
		__webpack_require__(390);
		__webpack_require__(407);
		__webpack_require__(408);
		module.exports = __webpack_require__(350).Promise;
		/***/ },
	/* 341 */
	/***/ function(module, exports) {
		'use strict';
		/***/ },
	/* 342 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const $at = __webpack_require__(343)(true);

		// 21.1.3.27 String.prototype[@@iterator]()
		__webpack_require__(346)(String, 'String', function(iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
		}, function() {
	  const O = this._t;
	  const index = this._i;
	  let point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
		});
		/***/ },
	/* 343 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const toInteger = __webpack_require__(344);
		const defined = __webpack_require__(345);
		// true  -> String#at
		// false -> String#codePointAt
		module.exports = function(TO_STRING) {
	  return function(that, pos) {
	    const s = String(defined(that));
	    const i = toInteger(pos);
	    const l = s.length;
	    let a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
		};
		/***/ },
	/* 344 */
	/***/ function(module, exports) {
		'use strict';

		// 7.1.4 ToInteger
		const ceil = Math.ceil;
		const floor = Math.floor;
		module.exports = function(it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};
		/***/ },
	/* 345 */
	/***/ function(module, exports) {
		'use strict';

		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it) {
	  if (it == undefined) throw TypeError('Can\'t call method on  ' + it);
	  return it;
		};
		/***/ },
	/* 346 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const LIBRARY = __webpack_require__(347);
		const $export = __webpack_require__(348);
		const redefine = __webpack_require__(363);
		const hide = __webpack_require__(353);
		const has = __webpack_require__(364);
		const Iterators = __webpack_require__(365);
		const $iterCreate = __webpack_require__(366);
		const setToStringTag = __webpack_require__(382);
		const getPrototypeOf = __webpack_require__(384);
		const ITERATOR = __webpack_require__(383)('iterator');
		const BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
		const FF_ITERATOR = '@@iterator';
		const KEYS = 'keys';
		const VALUES = 'values';

		const returnThis = function returnThis() {
	  return this;
		};

		module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  const getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    } return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  const TAG = NAME + ' Iterator';
	  const DEF_VALUES = DEFAULT == VALUES;
	  let VALUES_BUG = false;
	  var proto = Base.prototype;
	  const $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  let $default = $native || getMethod(DEFAULT);
	  const $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  const $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  let methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) {
					for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    }
				} else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
		};
		/***/ },
	/* 347 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = true;
		/***/ },
	/* 348 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(349);
		const core = __webpack_require__(350);
		const ctx = __webpack_require__(351);
		const hide = __webpack_require__(353);
		const PROTOTYPE = 'prototype';

		const $export = function $export(type, name, source) {
	  const IS_FORCED = type & $export.F;
	  const IS_GLOBAL = type & $export.G;
	  const IS_STATIC = type & $export.S;
	  const IS_PROTO = type & $export.P;
	  const IS_BIND = type & $export.B;
	  const IS_WRAP = type & $export.W;
	  const exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  const expProto = exports[PROTOTYPE];
	  const target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  let key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] !== 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C) {
	      const F = function F(a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0:
	              return new C();
	            case 1:
	              return new C(a);
	            case 2:
	              return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	      // make static versions for prototype methods
	    }(out)) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
		};
		// type bitmap
		$export.F = 1; // forced
		$export.G = 2; // global
		$export.S = 4; // static
		$export.P = 8; // proto
		$export.B = 16; // bind
		$export.W = 32; // wrap
		$export.U = 64; // safe
		$export.R = 128; // real proto method for `library`
		module.exports = $export;
		/***/ },
	/* 349 */
	/***/ function(module, exports) {
		'use strict';

		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		const global = module.exports = typeof window !== 'undefined' && window.Math == Math ? window : typeof self !== 'undefined' && self.Math == Math ? self
		// eslint-disable-next-line no-new-func
			: Function('return this')();
		if (typeof __g === 'number') __g = global; // eslint-disable-line no-undef
		/***/ },
	/* 350 */
	/***/ function(module, exports) {
		'use strict';

		const core = module.exports = { version: '2.5.0' };
		if (typeof __e === 'number') __e = core; // eslint-disable-line no-undef
		/***/ },
	/* 351 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// optional / simple context binding
		const aFunction = __webpack_require__(352);
		module.exports = function(fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function(a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function(a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function(a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function() /* ...args */{
	    return fn.apply(that, arguments);
	  };
		};
		/***/ },
	/* 352 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(it) {
	  if (typeof it !== 'function') throw TypeError(it + ' is not a function!');
	  return it;
		};
		/***/ },
	/* 353 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const dP = __webpack_require__(354);
		const createDesc = __webpack_require__(362);
		module.exports = __webpack_require__(358) ? function(object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
		} : function(object, key, value) {
	  object[key] = value;
	  return object;
		};
		/***/ },
	/* 354 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const anObject = __webpack_require__(355);
		const IE8_DOM_DEFINE = __webpack_require__(357);
		const toPrimitive = __webpack_require__(361);
		const dP = Object.defineProperty;

		exports.f = __webpack_require__(358) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) {
				try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
			}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
		};
		/***/ },
	/* 355 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const isObject = __webpack_require__(356);
		module.exports = function(it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
		};
		/***/ },
	/* 356 */
	/***/ function(module, exports) {
		'use strict';

		const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

		module.exports = function(it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
		};
		/***/ },
	/* 357 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		module.exports = !__webpack_require__(358) && !__webpack_require__(359)(function() {
	  return Object.defineProperty(__webpack_require__(360)('div'), 'a', {
				get: function get() {
	      return 7;
	    }
			}).a != 7;
		});
		/***/ },
	/* 358 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(359)(function() {
	  return Object.defineProperty({}, 'a', {
				get: function get() {
	      return 7;
	    }
			}).a != 7;
		});
		/***/ },
	/* 359 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
		};
		/***/ },
	/* 360 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const isObject = __webpack_require__(356);
		const document = __webpack_require__(349).document;
		// typeof document.createElement is 'object' in old IE
		const is = isObject(document) && isObject(document.createElement);
		module.exports = function(it) {
	  return is ? document.createElement(it) : {};
		};
		/***/ },
	/* 361 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 7.1.1 ToPrimitive(input [, PreferredType])
		const isObject = __webpack_require__(356);
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function(it, S) {
	  if (!isObject(it)) return it;
	  let fn, val;
	  if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError('Can\'t convert object to primitive value');
		};
		/***/ },
	/* 362 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
		};
		/***/ },
	/* 363 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		module.exports = __webpack_require__(353);
		/***/ },
	/* 364 */
	/***/ function(module, exports) {
		'use strict';

		const hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key) {
	  return hasOwnProperty.call(it, key);
		};
		/***/ },
	/* 365 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = {};
		/***/ },
	/* 366 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const create = __webpack_require__(367);
		const descriptor = __webpack_require__(362);
		const setToStringTag = __webpack_require__(382);
		const IteratorPrototype = {};

		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		__webpack_require__(353)(IteratorPrototype, __webpack_require__(383)('iterator'), function() {
	  return this;
		});

		module.exports = function(Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
		};
		/***/ },
	/* 367 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		const anObject = __webpack_require__(355);
		const dPs = __webpack_require__(368);
		const enumBugKeys = __webpack_require__(380);
		const IE_PROTO = __webpack_require__(377)('IE_PROTO');
		const Empty = function Empty() { /* empty */ };
		const PROTOTYPE = 'prototype';

		// Create object with fake `null` prototype: use iframe Object with cleared prototype
		var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  const iframe = __webpack_require__(360)('iframe');
	  let i = enumBugKeys.length;
	  const lt = '<';
	  const gt = '>';
	  let iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(381).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  } return _createDict();
		};

		module.exports = Object.create || function create(O, Properties) {
	  let result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
		};
		/***/ },
	/* 368 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const dP = __webpack_require__(354);
		const anObject = __webpack_require__(355);
		const getKeys = __webpack_require__(369);

		module.exports = __webpack_require__(358) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  const keys = getKeys(Properties);
	  const length = keys.length;
	  let i = 0;
	  let P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  } return O;
		};
		/***/ },
	/* 369 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.14 / 15.2.3.14 Object.keys(O)
		const $keys = __webpack_require__(370);
		const enumBugKeys = __webpack_require__(380);

		module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
		};
		/***/ },
	/* 370 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const has = __webpack_require__(364);
		const toIObject = __webpack_require__(371);
		const arrayIndexOf = __webpack_require__(374)(false);
		const IE_PROTO = __webpack_require__(377)('IE_PROTO');

		module.exports = function(object, names) {
	  const O = toIObject(object);
	  let i = 0;
	  const result = [];
	  let key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  } return result;
		};
		/***/ },
	/* 371 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// to indexed object, toObject with fallback for non-array-like ES3 strings
		const IObject = __webpack_require__(372);
		const defined = __webpack_require__(345);
		module.exports = function(it) {
	  return IObject(defined(it));
		};
		/***/ },
	/* 372 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		const cof = __webpack_require__(373);
		// eslint-disable-next-line no-prototype-builtins
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
		};
		/***/ },
	/* 373 */
	/***/ function(module, exports) {
		'use strict';

		const toString = {}.toString;

		module.exports = function(it) {
	  return toString.call(it).slice(8, -1);
		};
		/***/ },
	/* 374 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// false -> Array#indexOf
		// true  -> Array#includes
		const toIObject = __webpack_require__(371);
		const toLength = __webpack_require__(375);
		const toAbsoluteIndex = __webpack_require__(376);
		module.exports = function(IS_INCLUDES) {
	  return function($this, el, fromIndex) {
	    const O = toIObject($this);
	    const length = toLength(O.length);
	    let index = toAbsoluteIndex(fromIndex, length);
	    let value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) {
					while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	      // Array#indexOf ignores holes, Array#includes - not
	    }
				} else {
					for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }
				} return !IS_INCLUDES && -1;
	  };
		};
		/***/ },
	/* 375 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 7.1.15 ToLength
		const toInteger = __webpack_require__(344);
		const min = Math.min;
		module.exports = function(it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
		};
		/***/ },
	/* 376 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const toInteger = __webpack_require__(344);
		const max = Math.max;
		const min = Math.min;
		module.exports = function(index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
		};
		/***/ },
	/* 377 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const shared = __webpack_require__(378)('keys');
		const uid = __webpack_require__(379);
		module.exports = function(key) {
	  return shared[key] || (shared[key] = uid(key));
		};
		/***/ },
	/* 378 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(349);
		const SHARED = '__core-js_shared__';
		const store = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key) {
	  return store[key] || (store[key] = {});
		};
		/***/ },
	/* 379 */
	/***/ function(module, exports) {
		'use strict';

		let id = 0;
		const px = Math.random();
		module.exports = function(key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};
		/***/ },
	/* 380 */
	/***/ function(module, exports) {
		'use strict';

		// IE 8- don't enum bug keys
		module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
		/***/ },
	/* 381 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const document = __webpack_require__(349).document;
		module.exports = document && document.documentElement;
		/***/ },
	/* 382 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const def = __webpack_require__(354).f;
		const has = __webpack_require__(364);
		const TAG = __webpack_require__(383)('toStringTag');

		module.exports = function(it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
		};
		/***/ },
	/* 383 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const store = __webpack_require__(378)('wks');
		const uid = __webpack_require__(379);
		const _Symbol = __webpack_require__(349).Symbol;
		const USE_SYMBOL = typeof _Symbol === 'function';

		const $exports = module.exports = function(name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
		};

		$exports.store = store;
		/***/ },
	/* 384 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
		const has = __webpack_require__(364);
		const toObject = __webpack_require__(385);
		const IE_PROTO = __webpack_require__(377)('IE_PROTO');
		const ObjectProto = Object.prototype;

		module.exports = Object.getPrototypeOf || function(O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor === 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
		};
		/***/ },
	/* 385 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 7.1.13 ToObject(argument)
		const defined = __webpack_require__(345);
		module.exports = function(it) {
	  return Object(defined(it));
		};
		/***/ },
	/* 386 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(387);
		const global = __webpack_require__(349);
		const hide = __webpack_require__(353);
		const Iterators = __webpack_require__(365);
		const TO_STRING_TAG = __webpack_require__(383)('toStringTag');

		const DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

		for (let i = 0; i < DOMIterables.length; i++) {
	  const NAME = DOMIterables[i];
	  const Collection = global[NAME];
	  const proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
		}
		/***/ },
	/* 387 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const addToUnscopables = __webpack_require__(388);
		const step = __webpack_require__(389);
		const Iterators = __webpack_require__(365);
		const toIObject = __webpack_require__(371);

		// 22.1.3.4 Array.prototype.entries()
		// 22.1.3.13 Array.prototype.keys()
		// 22.1.3.29 Array.prototype.values()
		// 22.1.3.30 Array.prototype[@@iterator]()
		module.exports = __webpack_require__(346)(Array, 'Array', function(iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		}, function() {
	  const O = this._t;
	  const kind = this._k;
	  const index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
		}, 'values');

		// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		Iterators.Arguments = Iterators.Array;

		addToUnscopables('keys');
		addToUnscopables('values');
		addToUnscopables('entries');
		/***/ },
	/* 388 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function() { /* empty */ };
		/***/ },
	/* 389 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(done, value) {
	  return { value: value, done: !!done };
		};
		/***/ },
	/* 390 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const LIBRARY = __webpack_require__(347);
		const global = __webpack_require__(349);
		const ctx = __webpack_require__(351);
		const classof = __webpack_require__(391);
		const $export = __webpack_require__(348);
		const isObject = __webpack_require__(356);
		const aFunction = __webpack_require__(352);
		const anInstance = __webpack_require__(392);
		const forOf = __webpack_require__(393);
		const speciesConstructor = __webpack_require__(397);
		const task = __webpack_require__(398).set;
		const microtask = __webpack_require__(400)();
		const newPromiseCapabilityModule = __webpack_require__(401);
		const perform = __webpack_require__(402);
		const promiseResolve = __webpack_require__(403);
		const PROMISE = 'Promise';
		const TypeError = global.TypeError;
		const process = global.process;
		let $Promise = global[PROMISE];
		const isNode = classof(process) == 'process';
		const empty = function empty() { /* empty */ };
		let Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
		let newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

		const USE_NATIVE = !!(function() {
	  try {
	    // correct subclassing with @@species support
	    const promise = $Promise.resolve(1);
	    const FakePromise = (promise.constructor = {})[__webpack_require__(383)('species')] = function(exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent === 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
		}());

		// helpers
		const sameConstructor = LIBRARY ? function(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
		} : function(a, b) {
	  return a === b;
		};
		const isThenable = function isThenable(it) {
	  let then;
	  return isObject(it) && typeof (then = it.then) === 'function' ? then : false;
		};
		const notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  const chain = promise._c;
	  microtask(function() {
	    const value = promise._v;
	    const ok = promise._s == 1;
	    let i = 0;
	    const run = function run(reaction) {
	      const handler = ok ? reaction.ok : reaction.fail;
	      const resolve = reaction.resolve;
	      const reject = reaction.reject;
	      const domain = reaction.domain;
	      let result, then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value; else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
		};
		var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function() {
	    const value = promise._v;
	    const unhandled = isUnhandled(promise);
	    let result, handler, console;
	    if (unhandled) {
	      result = perform(function() {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
		};
		var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  const chain = promise._a || promise._c;
	  let i = 0;
	  let reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  } return true;
		};
		var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function() {
	    let handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
		};
		const $reject = function $reject(value) {
	  let promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
		};
		const $resolve = function $resolve(value) {
	  let promise = this;
	  let then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError('Promise can\'t be resolved itself');
	    if (then = isThenable(value)) {
	      microtask(function() {
	        const wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
		};

		// constructor polyfill
		if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(404)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      const reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled === 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected === 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    catch: function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function OwnPromiseCapability() {
	    const promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
	    return sameConstructor($Promise, C) ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
	  };
		}

		$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
		__webpack_require__(382)($Promise, PROMISE);
		__webpack_require__(405)(PROMISE);
		Wrapper = __webpack_require__(350)[PROMISE];

		// statics
		$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    const capability = newPromiseCapability(this);
	    const $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
		});
		$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    return promiseResolve(this, x);
	  }
		});
		$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(406)(function(iter) {
	  $Promise.all(iter).catch(empty);
		})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    const C = this;
	    const capability = newPromiseCapability(C);
	    const resolve = capability.resolve;
	    const reject = capability.reject;
	    const result = perform(function() {
	      const values = [];
	      let index = 0;
	      let remaining = 1;
	      forOf(iterable, false, function(promise) {
	        const $index = index++;
	        let alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    const C = this;
	    const capability = newPromiseCapability(C);
	    const reject = capability.reject;
	    const result = perform(function() {
	      forOf(iterable, false, function(promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
		});
		/***/ },
	/* 391 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// getting tag from 19.1.3.6 Object.prototype.toString()
		const cof = __webpack_require__(373);
		const TAG = __webpack_require__(383)('toStringTag');
		// ES3 wrong here
		const ARG = cof(function() {
	  return arguments;
		}()) == 'Arguments';

		// fallback for IE11 Script Access Denied error
		const tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
		};

		module.exports = function(it) {
	  let O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) === 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee === 'function' ? 'Arguments' : B;
		};
		/***/ },
	/* 392 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
		};
		/***/ },
	/* 393 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const ctx = __webpack_require__(351);
		const call = __webpack_require__(394);
		const isArrayIter = __webpack_require__(395);
		const anObject = __webpack_require__(355);
		const toLength = __webpack_require__(375);
		const getIterFn = __webpack_require__(396);
		const BREAK = {};
		const RETURN = {};
		const _exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
	  const iterFn = ITERATOR ? function() {
	    return iterable;
	  } : getIterFn(iterable);
	  const f = ctx(fn, that, entries ? 2 : 1);
	  let index = 0;
	  let length, step, iterator, result;
	  if (typeof iterFn !== 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) {
				for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  }
			} else {
				for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
			}
		};
		_exports.BREAK = BREAK;
		_exports.RETURN = RETURN;
		/***/ },
	/* 394 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// call something on iterator step with safe closing on error
		const anObject = __webpack_require__(355);
		module.exports = function(iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    const ret = iterator.return;
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
		};
		/***/ },
	/* 395 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// check on default Array iterator
		const Iterators = __webpack_require__(365);
		const ITERATOR = __webpack_require__(383)('iterator');
		const ArrayProto = Array.prototype;

		module.exports = function(it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
		};
		/***/ },
	/* 396 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const classof = __webpack_require__(391);
		const ITERATOR = __webpack_require__(383)('iterator');
		const Iterators = __webpack_require__(365);
		module.exports = __webpack_require__(350).getIteratorMethod = function(it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
		};
		/***/ },
	/* 397 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 7.3.20 SpeciesConstructor(O, defaultConstructor)
		const anObject = __webpack_require__(355);
		const aFunction = __webpack_require__(352);
		const SPECIES = __webpack_require__(383)('species');
		module.exports = function(O, D) {
	  const C = anObject(O).constructor;
	  let S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
		};
		/***/ },
	/* 398 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const ctx = __webpack_require__(351);
		const invoke = __webpack_require__(399);
		const html = __webpack_require__(381);
		const cel = __webpack_require__(360);
		const global = __webpack_require__(349);
		const process = global.process;
		let setTask = global.setImmediate;
		let clearTask = global.clearImmediate;
		const MessageChannel = global.MessageChannel;
		const Dispatch = global.Dispatch;
		let counter = 0;
		const queue = {};
		const ONREADYSTATECHANGE = 'onreadystatechange';
		let defer, channel, port;
		const run = function run() {
	  const id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    const fn = queue[id];
	    delete queue[id];
	    fn();
	  }
		};
		const listener = function listener(event) {
	  run.call(event.data);
		};
		// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
		if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    const args = [];
	    let i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function() {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn === 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(373)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function defer(id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage === 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
		}
		module.exports = {
	  set: setTask,
	  clear: clearTask
		};
		/***/ },
	/* 399 */
	/***/ function(module, exports) {
		'use strict';

		// fast apply, http://jsperf.lnkit.com/fast-apply/5
		module.exports = function(fn, args, that) {
	                  const un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  } return fn.apply(that, args);
		};
		/***/ },
	/* 400 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(349);
		const macrotask = __webpack_require__(398).set;
		const Observer = global.MutationObserver || global.WebKitMutationObserver;
		const process = global.process;
		const Promise = global.Promise;
		const isNode = __webpack_require__(373)(process) == 'process';

		module.exports = function() {
	  let head, last, notify;

	  const flush = function flush() {
	    let parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify(); else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    let toggle = true;
	    const node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    const promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn) {
	    const task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
		};
		/***/ },
	/* 401 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// 25.4.1.5 NewPromiseCapability(C)

		const aFunction = __webpack_require__(352);

		function PromiseCapability(C) {
	  let resolve, reject;
	  this.promise = new C(function($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
		}

		module.exports.f = function(C) {
	  return new PromiseCapability(C);
		};
		/***/ },
	/* 402 */
	/***/ function(module, exports) {
		'use strict';

		module.exports = function(exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
		};
		/***/ },
	/* 403 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const newPromiseCapability = __webpack_require__(401);

		module.exports = function(C, x) {
	  const promiseCapability = newPromiseCapability.f(C);
	  const resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
		};
		/***/ },
	/* 404 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const hide = __webpack_require__(353);
		module.exports = function(target, src, safe) {
	  for (const key in src) {
	    if (safe && target[key]) target[key] = src[key]; else hide(target, key, src[key]);
	  } return target;
		};
		/***/ },
	/* 405 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(349);
		const core = __webpack_require__(350);
		const dP = __webpack_require__(354);
		const DESCRIPTORS = __webpack_require__(358);
		const SPECIES = __webpack_require__(383)('species');

		module.exports = function(KEY) {
	  const C = typeof core[KEY] === 'function' ? core[KEY] : global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) {
				dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
			}
		};
		/***/ },
	/* 406 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const ITERATOR = __webpack_require__(383)('iterator');
		let SAFE_CLOSING = false;

		try {
	  const riter = [7][ITERATOR]();
	  riter.return = function() {
	    SAFE_CLOSING = true;
	  };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function() {
	    throw 2;
	  });
		} catch (e) { /* empty */ }

		module.exports = function(exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  let safe = false;
	  try {
	    const arr = [7];
	    const iter = arr[ITERATOR]();
	    iter.next = function() {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function() {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
		};
		/***/ },
	/* 407 */
	/***/ function(module, exports, __webpack_require__) {
		// https://github.com/tc39/proposal-promise-finally
		'use strict';

		const $export = __webpack_require__(348);
		const core = __webpack_require__(350);
		const global = __webpack_require__(349);
		const speciesConstructor = __webpack_require__(397);
		const promiseResolve = __webpack_require__(403);

		$export($export.P + $export.R, 'Promise', {
			finally: function _finally(onFinally) {
	    const C = speciesConstructor(this, core.Promise || global.Promise);
	    const isFunction = typeof onFinally === 'function';
	    return this.then(isFunction ? function(x) {
	      return promiseResolve(C, onFinally()).then(function() {
	        return x;
	      });
	    } : onFinally, isFunction ? function(e) {
	      return promiseResolve(C, onFinally()).then(function() {
	        throw e;
	      });
	    } : onFinally);
	  }
		});
		/***/ },
	/* 408 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// https://github.com/tc39/proposal-promise-try

		const $export = __webpack_require__(348);
		const newPromiseCapability = __webpack_require__(401);
		const perform = __webpack_require__(402);

		$export($export.S, 'Promise', {
			try: function _try(callbackfn) {
	    const promiseCapability = newPromiseCapability.f(this);
	    const result = perform(callbackfn);
	    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	    return promiseCapability.promise;
	  }
		});
		/***/ },
	/* 409 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		module.exports = { default: __webpack_require__(410), __esModule: true };
		/***/ },
	/* 410 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(411);
		module.exports = __webpack_require__(350).Object.keys;
		/***/ },
	/* 411 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.14 Object.keys(O)
		const toObject = __webpack_require__(385);
		const $keys = __webpack_require__(369);

		__webpack_require__(412)('keys', function() {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
		});
		/***/ },
	/* 412 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// most Object methods by ES6 should accept primitives
		const $export = __webpack_require__(348);
		const core = __webpack_require__(350);
		const fails = __webpack_require__(359);
		module.exports = function(KEY, exec) {
	  const fn = (core.Object || {})[KEY] || Object[KEY];
	  const exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function() {
	    fn(1);
	  }), 'Object', exp);
		};
		/***/ },
	/* 413 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const _typeof2 = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

		exports.__esModule = true;

		const _iterator = __webpack_require__(414);

		const _iterator2 = _interopRequireDefault(_iterator);

		const _symbol = __webpack_require__(417);

		const _symbol2 = _interopRequireDefault(_symbol);

		const _typeof = typeof _symbol2.default === 'function' && _typeof2(_iterator2.default) === 'symbol' ? function(obj) {
	  return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
		} : function(obj) {
	  return obj && typeof _symbol2.default === 'function' && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? 'symbol' : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
		};

		function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = typeof _symbol2.default === 'function' && _typeof(_iterator2.default) === 'symbol' ? function(obj) {
	  return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
		} : function(obj) {
	  return obj && typeof _symbol2.default === 'function' && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? 'symbol' : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
		};
		/***/ },
	/* 414 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		module.exports = { default: __webpack_require__(415), __esModule: true };
		/***/ },
	/* 415 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(342);
		__webpack_require__(386);
		module.exports = __webpack_require__(416).f('iterator');
		/***/ },
	/* 416 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		exports.f = __webpack_require__(383);
		/***/ },
	/* 417 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		module.exports = { default: __webpack_require__(418), __esModule: true };
		/***/ },
	/* 418 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(419);
		__webpack_require__(341);
		__webpack_require__(430);
		__webpack_require__(431);
		module.exports = __webpack_require__(350).Symbol;
		/***/ },
	/* 419 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// ECMAScript 6 symbols shim

		const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

		const global = __webpack_require__(349);
		const has = __webpack_require__(364);
		const DESCRIPTORS = __webpack_require__(358);
		const $export = __webpack_require__(348);
		const redefine = __webpack_require__(363);
		const META = __webpack_require__(420).KEY;
		const $fails = __webpack_require__(359);
		const shared = __webpack_require__(378);
		const setToStringTag = __webpack_require__(382);
		const uid = __webpack_require__(379);
		const wks = __webpack_require__(383);
		const wksExt = __webpack_require__(416);
		const wksDefine = __webpack_require__(421);
		const keyOf = __webpack_require__(422);
		const enumKeys = __webpack_require__(423);
		const isArray = __webpack_require__(426);
		const anObject = __webpack_require__(355);
		const toIObject = __webpack_require__(371);
		const toPrimitive = __webpack_require__(361);
		const createDesc = __webpack_require__(362);
		const _create = __webpack_require__(367);
		const gOPNExt = __webpack_require__(427);
		const $GOPD = __webpack_require__(429);
		const $DP = __webpack_require__(354);
		const $keys = __webpack_require__(369);
		const gOPD = $GOPD.f;
		const dP = $DP.f;
		const gOPN = gOPNExt.f;
		let $Symbol = global.Symbol;
		const $JSON = global.JSON;
		const _stringify = $JSON && $JSON.stringify;
		const PROTOTYPE = 'prototype';
		const HIDDEN = wks('_hidden');
		const TO_PRIMITIVE = wks('toPrimitive');
		const isEnum = {}.propertyIsEnumerable;
		const SymbolRegistry = shared('symbol-registry');
		const AllSymbols = shared('symbols');
		const OPSymbols = shared('op-symbols');
		const ObjectProto = Object[PROTOTYPE];
		const USE_NATIVE = typeof $Symbol === 'function';
		const QObject = global.QObject;
		// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
		let setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

		// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
		const setSymbolDesc = DESCRIPTORS && $fails(function() {
	  return _create(dP({}, 'a', {
	    get: function get() {
	      return dP(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
		}) ? function(it, key, D) {
	  const protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
			} : dP;

		const wrap = function wrap(tag) {
	  const sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
		};

		const isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function(it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
		} : function(it) {
	  return it instanceof $Symbol;
		};

		var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
		};
		const $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  const keys = enumKeys(P = toIObject(P));
	  let i = 0;
	  const l = keys.length;
	  let key;
	  while (l > i) {
	    $defineProperty(it, key = keys[i++], P[key]);
	  } return it;
		};
		const $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
		};
		const $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  const E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
		};
		const $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  const D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
		};
		const $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  const names = gOPN(toIObject(it));
	  const result = [];
	  let i = 0;
	  let key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
		};
		const $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  const IS_OP = it === ObjectProto;
	  const names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  const result = [];
	  let i = 0;
	  let key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
		};

		// 19.4.1.1 Symbol([description])
		if (!USE_NATIVE) {
	  $Symbol = function _Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    const tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    const $set = function $set(value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(428).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(425).f = $propertyIsEnumerable;
	  __webpack_require__(424).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(347)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name) {
	    return wrap(wks(name));
	  };
		}

		$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

		for (let es6Symbols =
	// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
	  wks(es6Symbols[j++]);
		} for (let wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
	  wksDefine(wellKnownSymbols[k++]);
		}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  for: function _for(key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function useSetter() {
	    setter = true;
	  },
	  useSimple: function useSimple() {
	    setter = false;
	  }
		});

		$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
		});

		// 24.3.2 JSON.stringify(value [, replacer [, space]])
		$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
	  const S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
		})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    const args = [it];
	    let i = 1;
	    let replacer, $replacer;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }replacer = args[1];
	    if (typeof replacer === 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) {
					replacer = function replacer(key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
				}
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
		});

		// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
		$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(353)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
		// 19.4.3.5 Symbol.prototype[@@toStringTag]
		setToStringTag($Symbol, 'Symbol');
		// 20.2.1.9 Math[@@toStringTag]
		setToStringTag(Math, 'Math', true);
		// 24.3.3 JSON[@@toStringTag]
		setToStringTag(global.JSON, 'JSON', true);
		/***/ },
	/* 420 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

		const META = __webpack_require__(379)('meta');
		const isObject = __webpack_require__(356);
		const has = __webpack_require__(364);
		const setDesc = __webpack_require__(354).f;
		let id = 0;
		const isExtensible = Object.isExtensible || function() {
	  return true;
		};
		const FREEZE = !__webpack_require__(359)(function() {
	  return isExtensible(Object.preventExtensions({}));
		});
		const setMeta = function setMeta(it) {
	  setDesc(it, META, {
				value: {
	      i: 'O' + ++id, // object ID
	      w: {} // weak collections IDs
	    }
			});
		};
		const fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it === 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	    // return object ID
	  } return it[META].i;
		};
		const getWeak = function getWeak(it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	    // return hash weak collections IDs
	  } return it[META].w;
		};
		// add metadata on freeze-family methods calling
		const onFreeze = function onFreeze(it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
		};
		var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
		};
		/***/ },
	/* 421 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const global = __webpack_require__(349);
		const core = __webpack_require__(350);
		const LIBRARY = __webpack_require__(347);
		const wksExt = __webpack_require__(416);
		const defineProperty = __webpack_require__(354).f;
		module.exports = function(name) {
	  const $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
		};
		/***/ },
	/* 422 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const getKeys = __webpack_require__(369);
		const toIObject = __webpack_require__(371);
		module.exports = function(object, el) {
	  const O = toIObject(object);
	  const keys = getKeys(O);
	  const length = keys.length;
	  let index = 0;
	  let key;
	  while (length > index) {
	    if (O[key = keys[index++]] === el) return key;
	  }
		};
		/***/ },
	/* 423 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// all enumerable object keys, includes symbols
		const getKeys = __webpack_require__(369);
		const gOPS = __webpack_require__(424);
		const pIE = __webpack_require__(425);
		module.exports = function(it) {
	  const result = getKeys(it);
	  const getSymbols = gOPS.f;
	  if (getSymbols) {
	    const symbols = getSymbols(it);
	    const isEnum = pIE.f;
	    let i = 0;
	    let key;
	    while (symbols.length > i) {
	      if (isEnum.call(it, key = symbols[i++])) result.push(key);
	    }
	  } return result;
		};
		/***/ },
	/* 424 */
	/***/ function(module, exports) {
		'use strict';

		exports.f = Object.getOwnPropertySymbols;
		/***/ },
	/* 425 */
	/***/ function(module, exports) {
		'use strict';

		exports.f = {}.propertyIsEnumerable;
		/***/ },
	/* 426 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 7.2.2 IsArray(argument)
		const cof = __webpack_require__(373);
		module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
		};
		/***/ },
	/* 427 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

		// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
		const toIObject = __webpack_require__(371);
		const gOPN = __webpack_require__(428).f;
		const toString = {}.toString;

		const windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

		const getWindowNames = function getWindowNames(it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
		};

		module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
		};
		/***/ },
	/* 428 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
		const $keys = __webpack_require__(370);
		const hiddenKeys = __webpack_require__(380).concat('length', 'prototype');

		exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
		};
		/***/ },
	/* 429 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		const pIE = __webpack_require__(425);
		const createDesc = __webpack_require__(362);
		const toIObject = __webpack_require__(371);
		const toPrimitive = __webpack_require__(361);
		const has = __webpack_require__(364);
		const IE8_DOM_DEFINE = __webpack_require__(357);
		const gOPD = Object.getOwnPropertyDescriptor;

		exports.f = __webpack_require__(358) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) {
				try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
			}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
		};
		/***/ },
	/* 430 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(421)('asyncIterator');
		/***/ },
	/* 431 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(421)('observable');
		/***/ },
	/* 432 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		module.exports = { default: __webpack_require__(433), __esModule: true };
		/***/ },
	/* 433 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		__webpack_require__(434);
		module.exports = __webpack_require__(350).Object.assign;
		/***/ },
	/* 434 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';

		// 19.1.3.1 Object.assign(target, source)
		const $export = __webpack_require__(348);

		$export($export.S + $export.F, 'Object', { assign: __webpack_require__(435) });
		/***/ },
	/* 435 */
	/***/ function(module, exports, __webpack_require__) {
		'use strict';
		// 19.1.2.1 Object.assign(target, source, ...)

		const getKeys = __webpack_require__(369);
		const gOPS = __webpack_require__(424);
		const pIE = __webpack_require__(425);
		const toObject = __webpack_require__(385);
		const IObject = __webpack_require__(372);
		const $assign = Object.assign;

		// should work with symbols and should have deterministic property order (V8 bug)
		module.exports = !$assign || __webpack_require__(359)(function() {
	  const A = {};
	  const B = {};
	  // eslint-disable-next-line no-undef
	  const S = Symbol();
	  const K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
		}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  const T = toObject(target);
	  const aLen = arguments.length;
	  let index = 1;
	  const getSymbols = gOPS.f;
	  const isEnum = pIE.f;
	  while (aLen > index) {
	    const S = IObject(arguments[index++]);
	    const keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    const length = keys.length;
	    let j = 0;
	    var key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  } return T;
			} : $assign;
		/***/ },
	/* 436 */
	/***/ function(module, exports) {
		'use strict';

		Object.defineProperty(exports, '__esModule', {
			value: true
		});
		exports.default = {
			zh: {
				hint: '点击，或拖动图片至此处',
				loading: '正在上传……',
				noSupported: '浏览器不支持该功能，请使用IE10以上或其他现在浏览器！',
				success: '上传成功',
				fail: '图片上传失败',
				preview: '头像预览',
				btn: {
					off: '取消',
					close: '关闭',
					back: '上一步',
					save: '保存'
				},
				error: {
					onlyImg: '仅限图片格式',
					outOfSize: '单文件大小不能超过 ',
					lowestPx: '图片最低像素为（宽*高）：'
				}
			},
			'zh-tw': {
				hint: '點擊，或拖動圖片至此處',
				loading: '正在上傳……',
				noSupported: '瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！',
				success: '上傳成功',
				fail: '圖片上傳失敗',
				preview: '頭像預覽',
				btn: {
					off: '取消',
					close: '關閉',
					back: '上一步',
					save: '保存'
				},
				error: {
					onlyImg: '僅限圖片格式',
					outOfSize: '單文件大小不能超過 ',
					lowestPx: '圖片最低像素為（寬*高）：'
				}
			},
			en: {
				hint: 'Click or drag the file here to upload',
				loading: 'Uploading…',
				noSupported: 'Browser is not supported, please use IE10+ or other browsers',
				success: 'Upload success',
				fail: 'Upload failed',
				preview: 'Preview',
				btn: {
					off: 'Cancel',
					close: 'Close',
					back: 'Back',
					save: 'Save'
				},
				error: {
					onlyImg: 'Image only',
					outOfSize: 'Image exceeds size limit: ',
					lowestPx: 'Image\'s size is too low. Expected at least: '
				}
			},
			ro: {
				hint: 'Atinge sau trage fișierul aici',
				loading: 'Se încarcă',
				noSupported: 'Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.',
				success: 'S-a încărcat cu succes',
				fail: 'A apărut o problemă la încărcare',
				preview: 'Previzualizează',

				btn: {
					off: 'Anulează',
					close: 'Închide',
					back: 'Înapoi',
					save: 'Salvează'
				},

				error: {
					onlyImg: 'Doar imagini',
					outOfSize: 'Imaginea depășește limita de: ',
					loewstPx: 'Imaginea este prea mică; Minim: '
				}
			},
			ru: {
				hint: 'Нажмите, или перетащите файл в это окно',
				loading: 'Загружаю……',
				noSupported: 'Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры',
				success: 'Загрузка выполнена успешно',
				fail: 'Ошибка загрузки',
				preview: 'Предпросмотр',
				btn: {
					off: 'Отменить',
					close: 'Закрыть',
					back: 'Назад',
					save: 'Сохранить'
				},
				error: {
					onlyImg: 'Только изображения',
					outOfSize: 'Изображение превышает предельный размер: ',
					lowestPx: 'Минимальный размер изображения: '
				}
			},
			'pt-br': {
				hint: 'Clique ou arraste o arquivo aqui para carregar',
				loading: 'Carregando…',
				noSupported: 'Browser não suportado, use o IE10+ ou outro browser',
				success: 'Sucesso ao carregar imagem',
				fail: 'Falha ao carregar imagem',
				preview: 'Pré-visualizar',
				btn: {
					off: 'Cancelar',
					close: 'Fechar',
					back: 'Voltar',
					save: 'Salvar'
				},
				error: {
					onlyImg: 'Apenas imagens',
					outOfSize: 'A imagem excede o limite de tamanho: ',
					lowestPx: 'O tamanho da imagem é muito pequeno. Tamanho mínimo: '
				}
			},
			fr: {
				hint: 'Cliquez ou glissez le fichier ici.',
				loading: 'Téléchargement…',
				noSupported: 'Votre navigateur n\'est pas supporté. Utilisez IE10 + ou un autre navigateur s\'il vous plaît.',
				success: 'Téléchargement réussit',
				fail: 'Téléchargement echoué',
				preview: 'Aperçu',
				btn: {
					off: 'Annuler',
					close: 'Fermer',
					back: 'Retour',
					save: 'Enregistrer'
				},
				error: {
					onlyImg: 'Image uniquement',
					outOfSize: 'L\'image sélectionnée dépasse la taille maximum: ',
					lowestPx: 'L\'image sélectionnée est trop petite. Dimensions attendues: '
				}
			},
			nl: {
				hint: 'Klik hier of sleep een afbeelding in dit vlak',
				loading: 'Uploaden…',
				noSupported: 'Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.',
				success: 'Upload succesvol',
				fail: 'Upload mislukt',
				preview: 'Voorbeeld',
				btn: {
					off: 'Annuleren',
					close: 'Sluiten',
					back: 'Terug',
					save: 'Opslaan'
				},
				error: {
					onlyImg: 'Alleen afbeeldingen',
					outOfSize: 'De afbeelding is groter dan: ',
					lowestPx: 'De afbeelding is te klein! Minimale afmetingen: '
				}
			},
			tr: {
				hint: 'Tıkla veya yüklemek istediğini buraya sürükle',
				loading: 'Yükleniyor…',
				noSupported: 'Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın',
				success: 'Yükleme başarılı',
				fail: 'Yüklemede hata oluştu',
				preview: 'Önizle',
				btn: {
					off: 'İptal',
					close: 'Kapat',
					back: 'Geri',
					save: 'Kaydet'
				},
				error: {
					onlyImg: 'Sadece resim',
					outOfSize: 'Resim yükleme limitini aşıyor: ',
					lowestPx: 'Resmin boyutu çok küçük. En az olması gereken: '
				}
			},
			'es-MX': {
				hint: 'Selecciona o arrastra una imagen',
				loading: 'Subiendo...',
				noSupported: 'Tu navegador no es soportado, por favor usa IE10+ u otros navegadores más recientes',
				success: 'Subido exitosamente',
				fail: 'Sucedió un error',
				preview: 'Vista previa',
				btn: {
					off: 'Cancelar',
					close: 'Cerrar',
					back: 'Atrás',
					save: 'Guardar'
				},
				error: {
					onlyImg: 'Únicamente imágenes',
					outOfSize: 'La imagen excede el tamaño maximo:',
					lowestPx: 'La imagen es demasiado pequeña. Se espera por lo menos:'
				}
			},
			de: {
				hint: 'Klick hier oder zieh eine Datei hier rein zum Hochladen',
				loading: 'Hochladen…',
				noSupported: 'Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser',
				success: 'Upload erfolgreich',
				fail: 'Upload fehlgeschlagen',
				preview: 'Vorschau',
				btn: {
					off: 'Abbrechen',
					close: 'Schließen',
					back: 'Zurück',
					save: 'Speichern'
				},
				error: {
					onlyImg: 'Nur Bilder',
					outOfSize: 'Das Bild ist zu groß: ',
					lowestPx: 'Das Bild ist zu klein. Mindestens: '
				}
			},
			ja: {
				hint: 'クリック・ドラッグしてファイルをアップロード',
				loading: 'アップロード中...',
				noSupported: 'このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。',
				success: 'アップロード成功',
				fail: 'アップロード失敗',
				preview: 'プレビュー',
				btn: {
					off: 'キャンセル',
					close: '閉じる',
					back: '戻る',
					save: '保存'
				},
				error: {
					onlyImg: '画像のみ',
					outOfSize: '画像サイズが上限を超えています。上限: ',
					lowestPx: '画像が小さすぎます。最小サイズ: '
				}
			},
			ua: {
				hint: 'Натисніть, або перетягніть файл в це вікно',
				loading: 'Завантажую……',
				noSupported: 'Ваш браузер не підтримується, будь ласка скористайтесь IE10 + або іншими браузерами',
				success: 'Завантаження виконано успішно',
				fail: 'Помилка завантаження',
				preview: 'Попередній перегляд',
				btn: {
					off: 'Відмінити',
					close: 'Закрити',
					back: 'Назад',
					save: 'Зберегти'
				},
				error: {
					onlyImg: 'Тільки зображення',
					outOfSize: 'Зображення перевищує граничний розмір: ',
					lowestPx: 'Мінімальний розмір зображення: '
				}
			},
			it: {
				hint: 'Clicca o trascina qui il file per caricarlo',
				loading: 'Caricamento del file…',
				noSupported: 'Browser non supportato, per favore usa IE10+ o un altro browser',
				success: 'Caricamento completato',
				fail: 'Caricamento fallito',
				preview: 'Anteprima',
				btn: {
					off: 'Annulla',
					close: 'Chiudi',
					back: 'Indietro',
					save: 'Salva'
				},
				error: {
					onlyImg: 'Sono accettate solo immagini',
					outOfSize: 'L\'immagine eccede i limiti di dimensione: ',
					lowestPx: 'L\'immagine è troppo piccola. Il requisito minimo è: '
				}
			},
			ar: {
				hint: 'اضغط أو اسحب الملف هنا للتحميل',
				loading: 'جاري التحميل...',
				noSupported: 'المتصفح غير مدعوم ، يرجى استخدام IE10 + أو متصفح أخر',
				success: 'تم التحميل بنجاح',
				fail: 'فشل التحميل',
				preview: 'معاينه',
				btn: {
					off: 'إلغاء',
					close: 'إغلاق',
					back: 'رجوع',
					save: 'حفظ'
				},
				error: {
					onlyImg: 'صور فقط',
					outOfSize: 'تتجاوز الصوره الحجم المحدد: ',
					lowestPx: 'حجم الصورة صغير جدا. من المتوقع على الأقل: '
				}
			},
			ug: {
				hint: 'مەزكۇر دائىرىنى چىكىپ رەسىم تاللاڭ ياكى رەسىمنى سۆرەپ ئەكىرىڭ',
				loading: 'يوللىنىۋاتىدۇ...',
				noSupported: 'تور كۆرگۈچ بۇ ئىقتىدارنى قوللىمايدۇ ، يۇقىرى نەشىردىكى تور كۆرگۈچنى ئىشلىتىڭ',
				success: 'غەلبىلىك بولدى',
				fail: 'مەغلۇب بولدى',
				preview: 'ئۈنۈم رەسىم',
				btn: {
					off: 'بولدى قىلىش',
					close: 'تاقاش',
					back: 'ئالدىنقى قەدەم',
					save: 'ساقلاش'
				},
				error: {
					onlyImg: 'پەقەت رەسىم فورماتىنىلا قوللايدۇ',
					outOfSize: 'رەسىم چوڭ - كىچىكلىكى چەكتىن ئىشىپ كەتتى',
					lowestPx: 'رەسىمنىڭ ئەڭ كىچىك ئۆلچىمى :'
				}
			},
			th: {
				hint: 'คลิ๊กหรือลากรูปมาที่นี่',
				loading: 'กำลังอัพโหลด…',
				noSupported: 'เบราเซอร์ไม่รองรับ, กรุณาใช้ IE เวอร์ชั่น 10 ขึ้นไป หรือใช้เบราเซอร์ตัวอื่น',
				success: 'อัพโหลดสำเร็จ',
				fail: 'อัพโหลดล้มเหลว',
				preview: 'ตัวอย่าง',
				btn: {
					off: 'ยกเลิก',
					close: 'ปิด',
					back: 'กลับ',
					save: 'บันทึก'
				},
				error: {
					onlyImg: 'ไฟล์ภาพเท่านั้น',
					outOfSize: 'ไฟล์ใหญ่เกินกำหนด: ',
					lowestPx: 'ไฟล์เล็กเกินไป. อย่างน้อยต้องมีขนาด: '
				}
			},
			mm: {
				hint: 'ဖိုင်ကို ဤနေရာတွင် နှိပ်၍ (သို့) ဆွဲထည့်၍ တင်ပါ',
				loading: 'တင်နေသည်…',
				noSupported: 'ဤဘရောက်ဇာကို အထောက်အပံ့ မပေးပါ၊ ကျေးဇူးပြု၍ IE10+ သို့မဟုတ် အခြား ဘရောက်ဇာ ကို အသုံးပြုပါ',
				success: 'ဖိုင်တင်နေမှု မပြီးမြောက်ပါ',
				fail: 'ဖိုင်တင်နေမှု မအောင်မြင်ပါ',
				preview: 'အစမ်းကြည့်',
				btn: {
					off: 'မလုပ်တော့ပါ',
					close: 'ပိတ်မည်',
					back: 'နောက်သို့',
					save: 'သိမ်းမည်'
				},
				error: {
					onlyImg: 'ဓာတ်ပုံ သီးသန့်သာ',
					outOfSize: 'ဓာတ်ပုံဆိုဒ် ကြီးလွန်းသည် ။ အများဆုံး ဆိုဒ် : ',
					lowestPx: 'ဓာတ်ပုံဆိုဒ် သေးလွန်းသည်။ အနည်းဆုံး ဆိုဒ် : '
				}
			},
			se: {
				hint: 'Klicka eller dra en fil hit för att ladda upp den',
				loading: 'Laddar upp…',
				noSupported: 'Din webbläsare stöds inte, vänligen använd IE10+ eller andra webbläsare',
				success: 'Uppladdning lyckades',
				fail: 'Uppladdning misslyckades',
				preview: 'Förhandsgranska',
				btn: {
					off: 'Avbryt',
					close: 'Stäng',
					back: 'Tillbaka',
					save: 'Spara'
				},
				error: {
					onlyImg: 'Endast bilder',
					outOfSize: 'Bilden är större än max-gränsen: ',
					lowestPx: 'Bilden är för liten. Minimum är: '
				}
			}
		};
		/***/ },
	/* 437 */
	/***/ function(module, exports) {
		'use strict';

		Object.defineProperty(exports, '__esModule', {
	    value: true
		});
		exports.default = {
	    jpg: 'image/jpeg',
	    png: 'image/png',
	    gif: 'image/gif',
	    svg: 'image/svg+xml',
	    psd: 'image/photoshop'
		};
		/***/ },
	/* 438 */
	/***/ function(module, exports) {
		'use strict';

		Object.defineProperty(exports, '__esModule', {
			value: true
		});

		exports.default = function(data, mime) {
			data = data.split(',')[1];
			data = window.atob(data);
			const ia = new Uint8Array(data.length);
			for (let i = 0; i < data.length; i++) {
				ia[i] = data.charCodeAt(i);
			}
			// canvas.toDataURL 返回的默认格式就是 image/png
			return new Blob([ia], {
				type: mime
			});
		};

	 /**
	   * database64文件格式转换为2进制
	   *
	   * @param  {[String]} data dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
	   * @param  {[String]} mime [description]
	   * @return {[blob]}      [description]
	   */
		/***/ },
	/* 439 */
	/***/ function(module, exports) {
		'use strict';

		Object.defineProperty(exports, '__esModule', {
			value: true
		});

		exports.default = function(e, arg_opts) {
			const opts = Object.assign({
				ele: e.target, // 波纹作用元素
				type: 'hit', // hit点击位置扩散　center中心点扩展
				bgc: 'rgba(0, 0, 0, 0.15)' // 波纹颜色
			}, arg_opts);
		    const target = opts.ele;
			if (target) {
				const rect = target.getBoundingClientRect();
			    let ripple = target.querySelector('.e-ripple');
				if (!ripple) {
					ripple = document.createElement('span');
					ripple.className = 'e-ripple';
					ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
					target.appendChild(ripple);
				} else {
					ripple.className = 'e-ripple';
				}
				switch (opts.type) {
				case 'center':
					ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px';
					ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px';
					break;
				default:
					ripple.style.top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop + 'px';
					ripple.style.left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft + 'px';
				}
				ripple.style.backgroundColor = opts.bgc;
				ripple.className = 'e-ripple z-active';
				return false;
			}
		};

	 /**
	   * 点击波纹效果
	   *
	   * @param  {[event]} e        [description]
	   * @param  {[Object]} arg_opts [description]
	   * @return {[bollean]}          [description]
	   */
		/***/ },
	/* 440 */
	/***/ function(module, exports) {
		module.exports = '\r\n<div class="vue-image-crop-upload" v-show="value">\r\n    <div class="vicp-wrap">\r\n        <div class="vicp-close" @click="off">\r\n            <i class="vicp-icon4"></i>\r\n        </div>\r\n\r\n        <div class="vicp-step1" v-show="step == 1">\r\n            <div class="vicp-drop-area"\r\n\t\t\t\t@dragleave="preventDefault"\r\n\t\t\t\t@dragover="preventDefault"\r\n\t\t\t\t@dragenter="preventDefault"\r\n\t\t\t\t@click="handleClick"\r\n\t\t\t\t@drop="handleChange">\r\n                <i class="vicp-icon1" v-show="loading != 1">\r\n\t\t\t\t\t<i class="vicp-icon1-arrow"></i>\r\n\t                <i class="vicp-icon1-body"></i>\r\n\t                <i class="vicp-icon1-bottom"></i>\r\n                </i>\r\n                <span class="vicp-hint" v-show="loading !== 1">{{ lang.hint }}</span>\r\n                <span class="vicp-no-supported-hint" v-show="!isSupported">{{ lang.noSupported }}</span>\r\n                <input type="file" v-show="false" v-if="step == 1" @change="handleChange" v-el:fileinput>\r\n            </div>\r\n            <div class="vicp-error" v-show="hasError">\r\n                <i class="vicp-icon2"></i> {{ errorMsg }}\r\n            </div>\r\n            <div class="vicp-operate">\r\n                <a @click="off" @mousedown="ripple">{{ lang.btn.off }}</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="vicp-step2" v-if="step == 2">\r\n            <div class="vicp-crop">\r\n                <div class="vicp-crop-left">\r\n                    <div class="vicp-img-container">\r\n                        <img :src="sourceImgUrl"\r\n\t\t\t\t\t\t\t:style="sourceImgStyle"\r\n\t\t\t\t\t\t\tclass="vicp-img"\r\n\t\t\t\t\t\t\tdraggable="false"\r\n                            @drag="preventDefault"\r\n                            @dragstart="preventDefault"\r\n                            @dragend="preventDefault"\r\n                            @dragleave="preventDefault"\r\n                            @dragover="preventDefault"\r\n                            @dragenter="preventDefault"\r\n                            @drop="preventDefault"\r\n                            @touchstart="imgStartMove"\r\n                            @touchmove="imgMove"\r\n                            @touchend="createImg"\r\n                            @touchcancel="createImg"\r\n                            @mousedown="imgStartMove"\r\n\t\t\t\t\t\t\t@mousemove="imgMove"\r\n\t\t\t\t\t\t\t@mouseup="createImg"\r\n\t\t\t\t\t\t\t@mouseout="createImg"\r\n\t\t\t\t\t\t\tv-el:img>\r\n                        <div class="vicp-img-shade vicp-img-shade-1" :style="sourceImgShadeStyle"></div>\r\n                        <div class="vicp-img-shade vicp-img-shade-2" :style="sourceImgShadeStyle"></div>\r\n                    </div>\r\n\r\n                    <div class="vicp-range">\r\n                        <input type="range" :value="scale.range" step="1" min="0" max="100" @input="zoomChange">\r\n                        <i @mousedown="startZoomSub" @mouseout="endZoomSub" @mouseup="endZoomSub" class="vicp-icon5"></i>\r\n                        <i @mousedown="startZoomAdd" @mouseout="endZoomAdd" @mouseup="endZoomAdd" class="vicp-icon6"></i>\r\n                    </div>\r\n\r\n\t\t\t\t\t<div class="vicp-rotate" v-if="!noRotate">\r\n\t\t\t\t\t\t<i @click="rotateImg">↺</i>\r\n\t\t\t\t\t</div>\r\n                </div>\r\n                <div class="vicp-crop-right">\r\n                    <div class="vicp-preview">\r\n\t\t\t\t\t\t<div class="vicp-preview-item" v-if="!noSquare">\r\n\t\t\t\t\t\t\t<img :src="createImgUrl" :style="previewStyle">\r\n\t\t\t\t\t\t\t<span>{{ lang.preview }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="vicp-preview-item vicp-preview-item-circle" v-if="!noCircle">\r\n\t\t\t\t\t\t\t<img :src="createImgUrl" :style="previewStyle">\r\n\t\t\t\t\t\t\t<span>{{ lang.preview }}</span>\r\n\t\t\t\t\t\t</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="vicp-operate">\r\n                <a @click="setStep(1)" @mousedown="ripple">{{ lang.btn.back }}</a>\r\n                <a class="vicp-operate-btn" @click="prepareUpload" @mousedown="ripple">{{ lang.btn.save }}</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="vicp-step3" v-if="step == 3">\r\n            <div class="vicp-upload">\r\n                <span class="vicp-loading" v-show="loading === 1">{{ lang.loading }}</span>\r\n                <div class="vicp-progress-wrap">\r\n                    <span class="vicp-progress" v-show="loading === 1" :style="progressStyle"></span>\r\n                </div>\r\n                <div class="vicp-error" v-show="hasError">\r\n                    <i class="vicp-icon2"></i> {{ errorMsg }}\r\n                </div>\r\n                <div class="vicp-success" v-show="loading === 2">\r\n                    <i class="vicp-icon3"></i> {{ lang.success }}\r\n                </div>\r\n            </div>\r\n            <div class="vicp-operate">\r\n                <a @click="setStep(2)" @mousedown="ripple">{{ lang.btn.back }}</a>\r\n                <a @click="off" @mousedown="ripple">{{ lang.btn.close }}</a>\r\n            </div>\r\n        </div>\r\n        <canvas v-show="false" :width="width" :height="height" v-el:canvas></canvas>\r\n    </div>\r\n</div>\r\n';
		/***/ }
/******/ ]);
