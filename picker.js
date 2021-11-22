!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t() }(0, function () { "use strict"; function e(e) { var t = this.constructor; return this.then(function (n) { return t.resolve(e()).then(function () { return n }) }, function (n) { return t.resolve(e()).then(function () { return t.reject(n) }) }) } function t(e) { return new this(function (t, n) { function o(e, n) { if (n && ("object" == typeof n || "function" == typeof n)) { var f = n.then; if ("function" == typeof f) return void f.call(n, function (t) { o(e, t) }, function (n) { r[e] = { status: "rejected", reason: n }, 0 == --i && t(r) }) } r[e] = { status: "fulfilled", value: n }, 0 == --i && t(r) } if (!e || "undefined" == typeof e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))")); var r = Array.prototype.slice.call(e); if (0 === r.length) return t([]); for (var i = r.length, f = 0; r.length > f; f++)o(f, r[f]) }) } function n(e) { return !(!e || "undefined" == typeof e.length) } function o() { } function r(e) { if (!(this instanceof r)) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof e) throw new TypeError("not a function"); this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], l(e, this) } function i(e, t) { for (; 3 === e._state;)e = e._value; 0 !== e._state ? (e._handled = !0, r._immediateFn(function () { var n = 1 === e._state ? t.onFulfilled : t.onRejected; if (null !== n) { var o; try { o = n(e._value) } catch (r) { return void u(t.promise, r) } f(t.promise, o) } else (1 === e._state ? f : u)(t.promise, e._value) })) : e._deferreds.push(t) } function f(e, t) { try { if (t === e) throw new TypeError("A promise cannot be resolved with itself."); if (t && ("object" == typeof t || "function" == typeof t)) { var n = t.then; if (t instanceof r) return e._state = 3, e._value = t, void c(e); if ("function" == typeof n) return void l(function (e, t) { return function () { e.apply(t, arguments) } }(n, t), e) } e._state = 1, e._value = t, c(e) } catch (o) { u(e, o) } } function u(e, t) { e._state = 2, e._value = t, c(e) } function c(e) { 2 === e._state && 0 === e._deferreds.length && r._immediateFn(function () { e._handled || r._unhandledRejectionFn(e._value) }); for (var t = 0, n = e._deferreds.length; n > t; t++)i(e, e._deferreds[t]); e._deferreds = null } function l(e, t) { var n = !1; try { e(function (e) { n || (n = !0, f(t, e)) }, function (e) { n || (n = !0, u(t, e)) }) } catch (o) { if (n) return; n = !0, u(t, o) } } var a = setTimeout; r.prototype["catch"] = function (e) { return this.then(null, e) }, r.prototype.then = function (e, t) { var n = new this.constructor(o); return i(this, new function (e, t, n) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n }(e, t, n)), n }, r.prototype["finally"] = e, r.all = function (e) { return new r(function (t, o) { function r(e, n) { try { if (n && ("object" == typeof n || "function" == typeof n)) { var u = n.then; if ("function" == typeof u) return void u.call(n, function (t) { r(e, t) }, o) } i[e] = n, 0 == --f && t(i) } catch (c) { o(c) } } if (!n(e)) return o(new TypeError("Promise.all accepts an array")); var i = Array.prototype.slice.call(e); if (0 === i.length) return t([]); for (var f = i.length, u = 0; i.length > u; u++)r(u, i[u]) }) }, r.allSettled = t, r.resolve = function (e) { return e && "object" == typeof e && e.constructor === r ? e : new r(function (t) { t(e) }) }, r.reject = function (e) { return new r(function (t, n) { n(e) }) }, r.race = function (e) { return new r(function (t, o) { if (!n(e)) return o(new TypeError("Promise.race accepts an array")); for (var i = 0, f = e.length; f > i; i++)r.resolve(e[i]).then(t, o) }) }, r._immediateFn = "function" == typeof setImmediate && function (e) { setImmediate(e) } || function (e) { a(e, 0) }, r._unhandledRejectionFn = function (e) { void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e) }; var s = function () { if ("undefined" != typeof self) return self; if ("undefined" != typeof window) return window; if ("undefined" != typeof global) return global; throw Error("unable to locate global object") }(); "function" != typeof s.Promise ? s.Promise = r : s.Promise.prototype["finally"] ? s.Promise.allSettled || (s.Promise.allSettled = t) : s.Promise.prototype["finally"] = e });
"function" != typeof Object.assign && Object.defineProperty(Object, "assign", { value: function (e, t) { "use strict"; if (null == e) throw new TypeError("Cannot convert undefined or null to object"); for (var n = Object(e), r = 1; r < arguments.length; r++) { var o = arguments[r]; if (null != o) for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (n[c] = o[c]) } return n }, writable: !0, configurable: !0 });
"NodeList" in window && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (o, i) { i = i || window; for (var t = 0; t < this.length; t++)o.call(i, this[t], t, this) });
var IosSelector = function (options) {
  init.bind(this)(options);
  function init() {
    this.defaults = {
      el: '', // dom 
      type: 'infinite', // infinite 无限滚动，normal 非无限 
      count: 20, // 圆环规格，圆环上选项个数，必须设置 4 的倍数
      sensitivity: 0.8, // 灵敏度
      wheelSensitivity: 0.2,
      wheelSpeed: 10,
      wheelDelayAuto: 50,
      source: [], // 选项 {value: xx, text: xx}
      value: null,
      onChange: null
    };
    let defaults = this.defaults;

    this.options = Object.assign({}, defaults, options);
    this.options.count = this.options.count - this.options.count % 4;
    Object.assign(this, this.options);

    this.halfCount = this.options.count / 2;
    this.quarterCount = this.options.count / 4;
    this.quarterLength = this.source.length / 4;
    this.a = this.options.sensitivity * 10; // 滚动减速度
    this.minV = Math.sqrt(1 / this.a); // 最小初速度
    this.selected = this.source[0];

    this.exceedA = 10; // 超出减速 
    this.moveT = 0; // 滚动 tick
    this.wheelT = 0; // wheel tick
    this.moving = false;
    this.draging = false;

    this.elems = {
      el: document.querySelector(this.options.el),
      circleList: null,
      circleItems: null, // list

      highlight: null,
      highlightList: null,
      highListItems: null // list
    };
    this.events = {
      touchstart: null,
      touchmove: null,
      touchend: null,
      wheel: null
    };

    this.itemHeight = Math.ceil(this.elems.el.offsetHeight * 3 / this.options.count); // 每项高度
    this.itemAngle = 360 / this.options.count; // 每项之间旋转度数
    this.radius = this.itemHeight / Math.tan(this.itemAngle * Math.PI / 180); // 圆环半径 

    this.scroll = 0; // 单位为一个 item 的高度（度数）
    this._lastScroll = 0; // 单位为一个 item 的高度（度数）
    this._lastWheel = new Date().getTime();

    this._init = _init;
    this._touchstart = _touchstart;
    this._easeOutQuart = _easeOutQuart;
    this._easeOutCubic = _easeOutCubic;
    this._normalizeWheelDelta = _normalizeWheelDelta;
    this._wheel = _wheel;
    this._touchmove = _touchmove;
    this._touchend = _touchend;
    this._create = _create;
    this._normalizeScroll = _normalizeScroll;
    this._moveTo = _moveTo;
    this._animateMoveByInitV = _animateMoveByInitV;
    this._animateToScroll = _animateToScroll;
    this._stop = _stop;
    this._selectByScroll = _selectByScroll;
    this.updateSource = updateSource;
    this.select = select;
    this.destroy = destroy;
    this._init();
  }
  function _init() {
    var _this = this;
    this._create(this.options.source);

    let touchData = {
      startY: 0,
      yArr: []
    };

    for (let eventName in this.events) {
      this.events[eventName] = (function (eventName) {
        return (function (e) {
          if (this.draging && (e.type == "mouseup" || e.type == "mousemove")) {
            if (e.cancelable) {
              e.preventDefault();
            }
            if (this.source.length) {
              this['_' + eventName](e, touchData);
            }
          } else if (this.elems.el.contains(e.target) || e.target === this.elems.el) {
            if (e.cancelable) {
              e.preventDefault();
            }
            if (this.source.length) {
              this['_' + eventName](e, touchData);
            }
          }
        }).bind(this);
      }).bind(this)(eventName);
    }

    this.elems.el.addEventListener('touchstart', this.events.touchstart);
    document.addEventListener('mousedown', this.events.touchstart);
    this.elems.el.addEventListener('touchend', this.events.touchend);
    document.addEventListener('mouseup', this.events.touchend);
    this.elems.el.addEventListener('wheel', this.events.wheel);
    // this.elems.el.addEventListener('mousewheel', this.events.wheel)
    // this.elems.el.addEventListener('DOMMouseScroll', this.events.wheel)
    if (this.source.length) {
      this.value = this.value !== null ? this.value : this.source[0].value;
      this.select(this.value, true);
    }
    // this.wheelWrapper = new SmoothScroll(this.elems.el, 1, 1, this, function () {});
  }
  function _touchstart(e, touchData) {
    this.draging = true;
    this.elems.el.addEventListener('touchmove', this.events.touchmove);
    document.addEventListener('mousemove', this.events.touchmove);
    let eventY = e.clientY || e.touches[0].clientY;
    touchData.startY = eventY;
    touchData.yArr = [[eventY, new Date().getTime()]];
    touchData.touchScroll = this.scroll;
    this._stop();
  }
  function _easeOutQuart(p) {
    return -(Math.pow((p - 1), 4) - 1);
  }
  function _easeOutCubic(p) {
    return (Math.pow((p - 1), 3) + 1);
  }
  function _normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
      else
        return -e.detail / 3 // Firefox
    } else
      return e.wheelDelta / 120 // IE,Safari,Chrome
  }
  function _wheel(e) {
    e.preventDefault();
    var cur = new Date().getTime(),
      sign = 0;
    if (cur - this._lastWheel < 150) {
      return;
    }
    if (e.deltaY > 0) {
      sign = 1;
    } else if (e.deltaY < 0) {
      sign = -1;
    }
    this._selectByScroll(this.scroll + sign);
    this._lastWheel = new Date().getTime();
  }
  function _touchmove(e, touchData, eventY) {
    eventY = eventY || e.clientY || (e.touches && e.touches[0].clientY) || 0;
    touchData.yArr.push([eventY, new Date().getTime()]);
    if (touchData.length > 5) {
      touchData.unshift();
    }

    let scrollAdd = (touchData.startY - eventY) / this.itemHeight;
    let moveToScroll = scrollAdd + this.scroll;

    // 非无限滚动时，超出范围使滚动变得困难
    if (this.type === 'normal') {
      if (moveToScroll < 0) {
        moveToScroll *= 0.3;
      } else if (moveToScroll > this.source.length) {
        moveToScroll = this.source.length + (moveToScroll - this.source.length) * 0.3;
      }
      // console.log(moveToScroll);
    } else {
      moveToScroll = this._normalizeScroll(moveToScroll);
    }

    touchData.touchScroll = this._moveTo(moveToScroll);
  }
  function _touchend(e, touchData, isMouseWheel) {
    // console.log(e);
    this.elems.el.removeEventListener('touchmove', this.events.touchmove);
    document.removeEventListener('mousemove', this.events.touchmove);

    let v;

    if (touchData.yArr.length === 1) {
      v = 0;
    } else {
      let startTime = touchData.yArr[touchData.yArr.length - 2][1];
      let endTime = touchData.yArr[touchData.yArr.length - 1][1];
      let startY = touchData.yArr[touchData.yArr.length - 2][0];
      let endY = touchData.yArr[touchData.yArr.length - 1][0];

      // 计算速度
      v = ((startY - endY) / this.itemHeight) * 1000 / (endTime - startTime);
      let sign = v > 0 ? 1 : -1;

      v = Math.abs(v) > 30 ? 30 * sign : v;
    }
    if (isMouseWheel) {
      v -= parseInt(v);
    }
    this.scroll = touchData.touchScroll;
    this._animateMoveByInitV(v);
    this.draging = false;

    // console.log('end');
  }
  function _create(source) {

    if (!source.length) {
      return;
    }

    let template = '<div class="select-wrap">' +
      '<ul class="select-options" style="transform: translate3d(0, 0, ${-this.radius}px) rotateX(0deg);">' +
      '{{circleListHTML}}' +
      '<!-- <li class="select-option">a0</li> -->' +
      '</ul>' +
      '<div class="highlight">' +
      '<ul class="highlight-list">' +
      '<!-- <li class="highlight-item"></li> -->' +
      '{{highListHTML}}' +
      '</ul>' +
      '</div>' +
      '</div>';

    // source 处理
    if (this.options.type === 'infinite') {
      let concatSource = [].concat(source);
      while (concatSource.length < this.halfCount) {
        concatSource = concatSource.concat(source);
      }
      source = concatSource;
    }
    this.source = source;
    let sourceLength = source.length;

    // 圆环 HTML
    let circleListHTML = '';
    for (let i = 0; i < source.length; i++) {
      circleListHTML += '<li class="select-option"' +
        'style="' +
        'top: ' + this.itemHeight * -0.5 + 'px;' +
        'height: ' + this.itemHeight + 'px;' +
        'line-height: ' + this.itemHeight + 'px;' +
        'transform: rotateX(' + -this.itemAngle * i + 'deg) translateZ(' + this.radius + 'px);' +
        '"' +
        'data-index="' + i + '"' +
        'data-rotatex="' + -this.itemAngle * i + '"' +
        'data-translatez="' + this.radius + '"' +
        '>' + source[i].text + '</li>';
    }

    // 中间高亮 HTML
    let highListHTML = '';
    for (let i = 0; i < source.length; i++) {
      highListHTML += '<li class="highlight-item" style="height: ' + this.itemHeight + 'px;">' +
        source[i].text +
        '</li>'
    }


    if (this.options.type === 'infinite') {

      // 圆环头尾
      for (let i = 0; i < this.quarterCount; i++) {
        // 头
        circleListHTML = '<li class="select-option"' +
          'style="' +
          'top: ' + this.itemHeight * -0.5 + 'px;' +
          'height: ' + this.itemHeight + 'px;' +
          'line-height: ' + this.itemHeight + 'px;' +
          'transform: rotateX(' + this.itemAngle * (i + 1) + 'deg) translateZ(' + this.radius + 'px);' +
          '"' +
          'data-index="' + (-i - 1) + '"' +
          'data-rotatex="' + this.itemAngle * (i + 1) + '"' +
          'data-translatez="' + this.radius + '"' +
          '>' + source[sourceLength - i - 1].text + '</li>' + circleListHTML;
        // 尾
        circleListHTML += '<li class="select-option"' +
          'style="' +
          'top: ' + this.itemHeight * -0.5 + 'px;' +
          'height: ' + this.itemHeight + 'px;' +
          'line-height: ' + this.itemHeight + 'px;' +
          'transform: rotateX(' + -this.itemAngle * (i + sourceLength) + 'deg) translateZ(' + this.radius + 'px);' +
          '"' +
          'data-index="' + (i + sourceLength) + '"' +
          'data-rotatex="' + -this.itemAngle * (i + sourceLength) + '"' +
          'data-translatez="' + this.radius + '"' +
          '>' + source[i].text + '</li>';
      }

      // 高亮头尾
      highListHTML = '<li class="highlight-item" style="height: ${this.itemHeight}px;">' +
        source[sourceLength - 1].text +
        '</li>' + highListHTML;
      highListHTML += '<li class="highlight-item" style="height: ' + this.itemHeight + 'px;">' + source[0].text + '</li>';
    }

    this.elems.el.innerHTML = template
      .replace('{{circleListHTML}}', circleListHTML)
      .replace('{{highListHTML}}', highListHTML);
    this.elems.circleList = this.elems.el.querySelector('.select-options');
    this.elems.circleItems = this.elems.el.querySelectorAll('.select-option');


    this.elems.highlight = this.elems.el.querySelector('.highlight');
    this.elems.highlightList = this.elems.el.querySelector('.highlight-list');
    this.elems.highlightitems = this.elems.el.querySelectorAll('.highlight-item');

    if (this.type === 'infinite') {
      this.elems.highlightList.style.top = -this.itemHeight + 'px';
    }

    this.elems.highlight.style.height = this.itemHeight + 'px';
    this.elems.highlight.style.lineHeight = this.itemHeight + 'px';

  }
  function _normalizeScroll(scroll) {
    let normalizedScroll = scroll;

    while (normalizedScroll < 0) {
      normalizedScroll += this.source.length;
    }
    normalizedScroll = normalizedScroll % this.source.length;
    return normalizedScroll;
  }
  function _moveTo(scroll) {
    if (this.type === 'infinite') {
      scroll = this._normalizeScroll(scroll);
    }
    this.elems.circleList.style.transform = 'translateZ(' + -this.radius + 'px) rotateX(' + this.itemAngle * scroll + 'deg)';
    this.elems.circleList.style.msTransform = 'none';
    this.elems.highlightList.style.transform = 'translateY(' + -(scroll) * this.itemHeight + 'px)';
    for (var i = 0, e = null, l = this.elems.circleList.children.length; i < l; i++) {
      e = this.elems.circleList.children[i];
      e.style.msTransform = 'translateZ(' + -this.radius + 'px) rotateX(' + this.itemAngle * scroll + 'deg) rotateX(' + e.dataset.rotatex + 'deg) translateZ(' + e.dataset.translatez + 'px)';
    }
    var _this = this;
    this.elems.circleItems.forEach(function (itemElem) {
      if (Math.abs(itemElem.dataset.index - scroll) > _this.quarterCount) {
        itemElem.style.visibility = 'hidden';
      } else {
        itemElem.style.visibility = 'visible';
      }
    });
    (function () {
      var dif = scroll - this._lastScroll,
        isCycle = this.source.length - Math.ceil(Math.abs(dif)) < this.quarterLength;
      if (!isCycle) {
        return;
      }
      this.onCycle && this.onCycle(dif < 0 ? "up" : "down");
    }).bind(this)()
    this._lastScroll = scroll;
    return scroll;
  }
  function _animateMoveByInitV(initV) {

    // console.log(initV);

    let initScroll;
    let finalScroll;
    let finalV;

    let totalScrollLen;
    let a;
    let t;

    if (this.type === 'normal') {
      if (this.scroll < 0 || this.scroll > this.source.length - 1) {
        a = this.exceedA;
        initScroll = this.scroll;
        finalScroll = this.scroll < 0 ? 0 : this.source.length - 1;
        totalScrollLen = initScroll - finalScroll;

        t = Math.sqrt(Math.abs(totalScrollLen / a));
        initV = a * t;
        initV = this.scroll > 0 ? -initV : initV;
        finalV = 0;
        // await this._animateToScroll(initScroll, finalScroll, t);
        this._animateToScroll(this.scroll, finalScroll, t, function () {
          this._selectByScroll(this.scroll, totalScrollLen);
        });
      } else {
        initScroll = this.scroll;
        a = initV > 0 ? -this.a : this.a; // 减速加速度
        t = Math.abs(initV / a); // 速度减到 0 花费时间
        totalScrollLen = initV * t + a * t * t / 2; // 总滚动长度
        finalScroll = Math.round(this.scroll + totalScrollLen); // 取整，确保准确最终 scroll 为整数
        finalScroll = finalScroll < 0 ? 0 : (finalScroll > this.source.length - 1 ? this.source.length - 1 : finalScroll);

        totalScrollLen = finalScroll - initScroll;
        t = Math.sqrt(Math.abs(totalScrollLen / a));
        // await this._animateToScroll(this.scroll, finalScroll, t);
        this._animateToScroll(this.scroll, finalScroll, t, function () {
          this._selectByScroll(this.scroll, totalScrollLen);
        });
      }

    } else {
      initScroll = this.scroll;

      a = initV > 0 ? -this.a : this.a; // 减速加速度
      t = Math.abs(initV / a); // 速度减到 0 花费时间
      totalScrollLen = initV * t + a * t * t / 2; // 总滚动长度
      finalScroll = Math.round(this.scroll + totalScrollLen); // 取整，确保准确最终 scroll 为整数
      // await this._animateToScroll(this.scroll, finalScroll, t);
      this._animateToScroll(this.scroll, finalScroll, t, function () {
        this._selectByScroll(this.scroll, totalScrollLen);
      });
    }

    // await this._animateToScroll(this.scroll, finalScroll, initV, 0);

    this._selectByScroll(this.scroll, totalScrollLen);
  }
  function _animateToScroll(initScroll, finalScroll, t, callback) {
    var direction = initScroll > finalScroll ? -1 : 1;
    if (initScroll === finalScroll || t === 0) {
      this._moveTo(initScroll, direction);
      return;
    }

    let start = new Date().getTime() / 1000;
    let pass = 0;
    let totalScrollLen = finalScroll - initScroll;

    // console.log(initScroll, finalScroll, initV, finalV, a);
    let totalScroll = initScroll + totalScrollLen;
    // let cycles = Math.floor(totalScroll / this.source.length);
    let selected = this.source[Math.abs(totalScroll % this.source.length)];
    // console.log(totalScroll, initScroll)
    // this.onAnimationStart && this.onAnimationStart(selected, cycles);
    this.onAnimationStart && this.onAnimationStart(selected);
    var _this = this;
    return new Promise(function (resolve, reject) {
      _this.moving = true;
      let tick = function () {
        pass = new Date().getTime() / 1000 - start;

        if (pass < t) {
          _this.scroll = _this._moveTo(initScroll + _this._easeOutCubic(pass / t) * totalScrollLen, direction);
          _this.moveT = requestAnimationFrame(tick);
        } else {
          resolve();
          _this._stop();
          _this.scroll = _this._moveTo(initScroll + totalScrollLen, direction);
          callback && callback.bind(_this)();
        }
      };
      tick();
    });
  }
  function _stop() {
    this.moving = false;
    this.wheelDelayAuto = this.defaults.wheelDelayAuto;
    cancelAnimationFrame(this.moveT);
    cancelAnimationFrame(this.wheelT);
  }
  function _selectByScroll(scroll, totalScrollLen) {
    var oscroll = scroll;
    scroll = this._normalizeScroll(scroll) | 0;
    if (this.type === 'normal' && scroll != oscroll) {
      return;
    }
    if (scroll > this.source.length - 1) {
      scroll = this.source.length - 1;
      this._moveTo(scroll);
    }
    this._moveTo(scroll);
    this.scroll = scroll;
    this.selected = this.source[scroll];
    this.value = this.selected.value;
    this.onChange && this.onChange(this.selected);
  }
  function updateSource(source) {
    this._create(source);

    if (!this.moving) {
      this._selectByScroll(this.scroll);
    }
  }
  function select(value, noAnim, dir) {
    if (value === null && dir) {
      value = this.scroll + (dir == "next" ? 1 : -1);
      value = value < 0 ? this.source.length - 1 : value % (this.source.length);
      value = this.source[value].value;
    }
    for (let i = 0; i < this.source.length; i++) {
      if (this.source[i].value === value) {
        window.cancelAnimationFrame(this.moveT);
        // this.scroll = this._moveTo(i);
        let initScroll = this._normalizeScroll(this.scroll);
        let finalScroll = i;
        let t = 0;
        // if (Math.abs(initScroll - finalScroll) == this.source.length - 1) {
        //   t = Math.sqrt(1 / this.a);
        // } else {
        t = Math.sqrt(Math.abs((finalScroll - initScroll) / this.a));
        // }
        if (!noAnim) {
          this._animateToScroll(initScroll, finalScroll, t);
        }
        var _this = this;
        setTimeout(function () { _this._selectByScroll(i) });
        return;
      }
    }
    throw new Error('can not select value: ' + value + ', ' + value + ' match nothing in current source');
  }
  function destroy() {
    this._stop();
    // document 事件解绑
    for (let eventName in this.events) {
      this.elems.el.removeEventListener('eventName', this.events[eventName]);
    }
    document.removeEventListener('mousedown', this.events['touchstart']);
    document.removeEventListener('mousemove', this.events['touchmove']);
    document.removeEventListener('mouseup', this.events['touchend']);
    // 元素移除
    this.elems.el.innerHTML = '';
    this.elems = null;
  }
}