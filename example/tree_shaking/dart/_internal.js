dart_library.library('dart/_internal', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
  'dart/_interceptors',
  'dart/_js_primitives'
], function(exports, dart, core, _interceptors, _js_primitives) {
  'use strict';
  let dartx = dart.dartx;
  class EfficientLength extends core.Object {}
  const _Transformation$ = dart.generic(function(S, T) {
    const _Transformation = dart.typedef('_Transformation', () => dart.functionType(T, [S]));
    return _Transformation;
  });
  let _Transformation = _Transformation$();
  const _ElementPredicate$ = dart.generic(function(E) {
    const _ElementPredicate = dart.typedef('_ElementPredicate', () => dart.functionType(core.bool, [E]));
    return _ElementPredicate;
  });
  let _ElementPredicate = _ElementPredicate$();
  const _ExpandFunction$ = dart.generic(function(S, T) {
    const _ExpandFunction = dart.typedef('_ExpandFunction', () => dart.functionType(core.Iterable$(T), [S]));
    return _ExpandFunction;
  });
  let _ExpandFunction = _ExpandFunction$();
  const __CastType0$ = dart.generic(function(S, T) {
    const __CastType0 = dart.typedef('__CastType0', () => dart.functionType(core.Iterable$(T), [S]));
    return __CastType0;
  });
  let __CastType0 = __CastType0$();
  const __CastType2$ = dart.generic(function(T) {
    const __CastType2 = dart.typedef('__CastType2', () => dart.functionType(core.bool, [T]));
    return __CastType2;
  });
  let __CastType2 = __CastType2$();
  function makeListFixedLength(growableList) {
    _interceptors.JSArray.markFixedList(growableList);
    return growableList;
  }
  dart.fn(makeListFixedLength, core.List, [core.List]);
  exports.printToZone = null;
  function printToConsole(line) {
    _js_primitives.printString(`${line}`);
  }
  dart.fn(printToConsole, dart.void, [core.String]);
  const _name = dart.JsSymbol('_name');
  class Symbol extends core.Object {
    Symbol(name) {
      this[_name] = name;
    }
    get hashCode() {
      let arbitraryPrime = 664597;
      return 536870911 & arbitraryPrime * dart.notNull(dart.hashCode(this[_name]));
    }
    toString() {
      return `Symbol("${this[_name]}")`;
    }
    static getName(symbol) {
      return symbol[_name];
    }
  }
  Symbol[dart.implements] = () => [core.Symbol];
  dart.setSignature(Symbol, {
    constructors: () => ({Symbol: [Symbol, [core.String]]}),
    statics: () => ({getName: [core.String, [Symbol]]}),
    names: ['getName']
  });
  // Exports:
  exports.EfficientLength = EfficientLength;
  exports.makeListFixedLength = makeListFixedLength;
  exports.printToConsole = printToConsole;
  exports.Symbol = Symbol;
});
