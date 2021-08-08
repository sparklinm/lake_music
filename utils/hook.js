function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayLikeToArray);

var arrayWithoutHoles = createCommonjsModule(function (module) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(unsupportedIterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _toConsumableArray = unwrapExports(toConsumableArray);

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _defineProperty = unwrapExports(defineProperty);

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithHoles);

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArrayLimit);

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableRest);

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _slicedToArray = unwrapExports(slicedToArray);

function firstUpperLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function isObj(e) {
  return '[object Object]' === Object.prototype.toString.call(e);
}
function isPromise(e) {
  return '[object Promise]' === Object.prototype.toString.call(e);
}
function depsChanged(deps, lastDeps) {
  if (!deps || !lastDeps) {
    return true;
  }

  for (var i = 0, len = deps.length; i < len; i++) {
    if (!Object.is(lastDeps[i], deps[i])) {
      // 依赖发生变化
      return true;
    }
  }

  return false;
}
function generateComponentUid(is, id) {
  return is + '-' + (id ? id : '') + Math.floor(Math.random() * 0xffffff) + Date.now().toString(32);
}
function nextTick(fn) {
  Promise.resolve().then(function () {
    fn && fn();
  });
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var storedPageOptions = {
  onLoad: [],
  onPullDownRefresh: [],
  onReachBottom: [],
  onShareAppMessage: [],
  onShareTimeline: [],
  onAddToFavorites: [],
  onPageScroll: [],
  onTabItemTap: []
}; // 放入pageLifetimes中

var storedBothOptions = {
  show: [],
  hide: [],
  resize: []
};
var storedComponentOptions = {
  moved: []
};

var storedOptions = _objectSpread$1(_objectSpread$1(_objectSpread$1({}, storedPageOptions), storedComponentOptions), storedBothOptions);

var storagedRelations = {};

function useConstructor() {
  var useFn = {};

  var _loop = function _loop() {
    var key = _Object$keys[_i];
    var fnName = '';

    if (key.startsWith('on')) {
      fnName = key.replace('on', 'use');
    } else {
      fnName = 'use' + firstUpperLetter(key);
    }

    useFn[fnName] = function (cb) {
      checkInstance();

      if (typeof cb === 'function') {
        if ((key === 'onShareAppMessage' || key === 'onShareTimeline') && storedOptions[key].length >= 1) {
          throw new Error("".concat(key, " only need one"));
        }

        storedOptions[key].push(cb);
      }
    };
  };

  for (var _i = 0, _Object$keys = Object.keys(storedOptions); _i < _Object$keys.length; _i++) {
    _loop();
  }

  return useFn;
}

function clearStoredOptions() {
  for (var _i2 = 0, _Object$keys2 = Object.keys(storedPageOptions); _i2 < _Object$keys2.length; _i2++) {
    var key = _Object$keys2[_i2];
    storedPageOptions[key] = [];
  }

  for (var _i3 = 0, _Object$keys3 = Object.keys(storedComponentOptions); _i3 < _Object$keys3.length; _i3++) {
    var _key = _Object$keys3[_i3];
    storedComponentOptions[_key] = [];
  }

  for (var _i4 = 0, _Object$keys4 = Object.keys(storedBothOptions); _i4 < _Object$keys4.length; _i4++) {
    var _key2 = _Object$keys4[_i4];
    storedBothOptions[_key2] = [];
  }

  storedOptions = _objectSpread$1(_objectSpread$1(_objectSpread$1({}, storedPageOptions), storedComponentOptions), storedBothOptions);
}

function useRelations(relations) {
  for (var _i5 = 0, _Object$keys5 = Object.keys(relations); _i5 < _Object$keys5.length; _i5++) {
    var key = _Object$keys5[_i5];
    var linked = relations[key].linked;
    var linkChanged = relations[key].linkChanged;
    var unlinked = relations[key].unlinked;

    if (!storagedRelations[key] || storagedRelations[key].type !== relations[key].type) {
      storagedRelations[key] = {
        type: relations[key].type,
        linked: [],
        linkChanged: [],
        unlinked: []
      };
    }

    linked && storagedRelations[key].linked.push(linked);
    linkChanged && storagedRelations[key].linkChanged.push(linkChanged);
    unlinked && storagedRelations[key].unlinked.push(unlinked);
  }
}

function clearStoragedRelations() {
  storagedRelations = {};
}

var _useConstructor = useConstructor(),
    useLoad = _useConstructor.useLoad,
    useShow = _useConstructor.useShow,
    useHide = _useConstructor.useHide,
    usePullDownRefresh = _useConstructor.usePullDownRefresh,
    useReachBottom = _useConstructor.useReachBottom,
    useShareAppMessage = _useConstructor.useShareAppMessage,
    useShareTimeline = _useConstructor.useShareTimeline,
    useAddToFavorites = _useConstructor.useAddToFavorites,
    usePageScroll = _useConstructor.usePageScroll,
    useTabItemTap = _useConstructor.useTabItemTap,
    useResize = _useConstructor.useResize,
    useMoved = _useConstructor.useMoved;

var classCallCheck = createCommonjsModule(function (module) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _classCallCheck = unwrapExports(classCallCheck);

var createClass = createCommonjsModule(function (module) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _createClass = unwrapExports(createClass);

var log = function log() {
  var _console;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  (_console = console).log.apply(_console, ['[WXA hooks]'].concat(args));
};

var warn = function warn() {
  var _console2;

  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  (_console2 = console).warn.apply(_console2, ['[WXA hooks]'].concat(args));
};

var error = function error() {
  var _console3;

  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  (_console3 = console).error.apply(_console3, ['[WXA hooks]'].concat(args));
};

var throwError = function throwError(message) {
  throw new Error("[WXA hooks] ".concat(message));
};

function handleError(_ref) {
  var instance = _ref.instance,
      des = _ref.des,
      level = _ref.level;
  var message = '';

  if (instance) {
    message = "".concat(instance.route ? '页面 ' : '组件 ').concat(instance.is, " - ");
  }

  message += des;

  switch (level) {
    case 'log':
      log(message);
      break;

    case 'warn':
      warn(message);
      break;

    case 'error':
      error(message);
      break;

    case 'throwError':
      throwError(message);
      break;
  }
}

// 在组件 created 时收集实例，attached 时用收集的实例建立树
// 同一批 created 收集的实例一定是属于同一页面
// 即使在 created 时跳转页面，也会等当前页面所以组件 created attached 完毕才跳转

var newHookNodes = {};
var hookNodes = {};
var hookTrees = {}; // 保存各个页面下，需要渲染的组件id

var renderTasks = new Map();
var isRendering = false;
var effects = new Set();
var renderedJobs = [];
var updateDataPromises = [];
var renderPaths = [];
var MAX_RENDER_DURATION = 30;
var MAX_CYCLE_UPDATE_TIMES = 5;

function flushRenderedJobs() {
  var promises = [].concat(updateDataPromises);
  updateDataPromises.length = 0;
  Promise.all(promises).then(function () {
    while (renderedJobs.length) {
      var jobs = [].concat(renderedJobs);
      renderedJobs.length = 0;
      jobs.forEach(function (fn) {
        return fn();
      });
    }
  });
}

function _buildHookNode(instacne) {
  var id = instacne._$id;
  var hookNode = {
    type: 'hook',
    id: id,
    is: instacne.is,
    wxInstance: instacne,
    children: []
  };
  hookNodes[id] = hookNode;
  return hookNode;
}

function findPage(instacne) {
  var parent = instacne.selectOwnerComponent();

  if (!parent) {
    return instacne;
  }

  return findPage(parent);
} // 劫持页面 onLoad，在 onLoad 时执行第一次 effects


function hijackPage(page) {
  var originOnload = page.onLoad;

  page.onLoad = function () {
    flushRenderedJobs();
    runEffects();
    originOnload.apply(void 0, arguments);
  };

  var originOnUnload = page.onUnload;

  page.onUnload = function () {
    // 在 onUnload 时删除对应 hooktree，并删除对页面实例的引用
    // 如果当前正在遍历树渲染，但 onUnload 是异步触发的，当触发时已经遍历完毕，不会再有对页面实例的引用
    delete hookTrees[page._$id];
    renderTasks.delete(page._$id);
    originOnUnload.apply(void 0, arguments);
  };
}

function setRenderTask(rootId, id) {
  var ids = renderTasks.get(rootId) || new Set();
  ids.add(id);
  renderTasks.set(rootId, ids);
}

function deleteRenderTask(rootId, id) {
  var ids = renderTasks.get(rootId);
  ids && ids.delete(id);
}

function render() {
  var times = 0;

  var _render = function _render() {
    if (isRendering) {
      return;
    }

    isRendering = true;
    nextTick(function () {
      // rootId 渲染的页面
      // ids 渲染的组件
      // console.time('update');
      var rendered = false;
      var pages = getCurrentPages();
      var shownPage = pages[pages.length - 1];
      var shownPageIds = renderTasks.get(shownPage._$id);
      var canRenderShownPage = Boolean(shownPageIds && shownPageIds.size);
      var startTime = Date.now();
      var renderedHiddenPage = false; // 优先更新显示的页面

      if (canRenderShownPage) {
        hookTrees[shownPage._$id].renderHookTree();

        flushRenderedJobs();
        runEffects();
        rendered = true;
      } else {
        renderTasks.forEach(function (ids, rootId) {
          if (ids.size) {
            hookTrees[rootId].renderHookTree();
            flushRenderedJobs();
            runEffects();
            rendered = true;
            renderedHiddenPage = true;
          }
        });
      }

      var endTime = Date.now();
      var duration = endTime - startTime;

      if (duration > MAX_RENDER_DURATION && canRenderShownPage) {
        handleError({
          instance: hookTrees[shownPage._$id].page,
          des: "\u66F4\u65B0\u65F6\u95F4".concat(duration, "ms\uFF0C\u53EF\u80FD\u9020\u6210\u6027\u80FD\u5F71\u54CD"),
          level: 'warn'
        });
      }

      if (renderedHiddenPage) {
        handleError({
          des: "\u66F4\u65B0\u4E86\u9690\u85CF\u7684\u9875\u9762\uFF0C\u53EF\u80FD\u9020\u6210\u4E0D\u5FC5\u8981\u7684\u6027\u80FD\u5F00\u9500",
          level: 'warn'
        });

        if (duration > MAX_RENDER_DURATION) {
          handleError({
            des: "\u66F4\u65B0\u9690\u85CF\u9875\u9762\u65F6\u95F4".concat(duration, "ms\uFF0C\u53EF\u80FD\u9020\u6210\u6027\u80FD\u5F71\u54CD"),
            level: 'error'
          });
        }
      }

      isRendering = false; // console.timeEnd('update');

      if (rendered) {
        times++;

        if (times > MAX_CYCLE_UPDATE_TIMES) {
          handleError({
            des: "\u8FC7\u591A\u5B50\u7EC4\u4EF6\u6539\u53D8\u5DF2\u7ECF\u66F4\u65B0\u5B8C\u6210\u7684\u7236\u8282\u70B9\u573A\u666F\uFF0C\u8BF7\u4F18\u5316",
            level: 'warn'
          });
        }

        _render();
      }
    });
  };

  _render();
}

function runEffects() {
  effects.forEach(function (effect) {
    return effect();
  });
  effects.clear();
} // Todo，修剪掉无用的节点
// function pruneHookTree() {
// }


var HookTree = /*#__PURE__*/function () {
  // TODO, 使用 fiber 结构
  function HookTree(instance) {
    _classCallCheck(this, HookTree);

    _defineProperty(this, "hookNodes", {});

    _defineProperty(this, "wxNodes", {});

    _defineProperty(this, "hookTree", null);

    _defineProperty(this, "route", '');

    _defineProperty(this, "id", '');

    _defineProperty(this, "page", null);

    this.route = instance.route;
    this.id = instance._$id;
    this.page = instance;
  }

  _createClass(HookTree, [{
    key: "buildWXNode",
    value: function buildWXNode(instacne) {
      var id = instacne._$id;

      if (id) {
        return this.wxNodes[id];
      }

      instacne._$id = generateComponentUid(instacne.is, instacne.__wxExparserNodeId__);
      instacne._$type = 'origin';
      this.wxNodes[id] = {
        type: 'origin',
        id: id,
        is: instacne.is,
        wxInstance: null,
        children: []
      };
      return this.wxNodes[id];
    }
  }, {
    key: "getWXNode",
    value: function getWXNode(id) {
      return this.wxNodes[id];
    }
  }, {
    key: "buildHookNode",
    value: function buildHookNode(instacne) {
      var hookNode = _buildHookNode(instacne);

      hookNode.page = hookNode.wxInstance._$route = this.route;
      hookNode.pageId = hookNode.wxInstance._$rootId = this.id;
      this.hookNodes[hookNode.id] = hookNode;
      return hookNode;
    }
  }, {
    key: "addHookNode",
    value: function addHookNode(hookNode) {
      hookNode.page = hookNode.wxInstance._$route = this.route;
      hookNode.pageId = hookNode.wxInstance._$rootId = this.id;
      this.hookNodes[hookNode.id] = hookNode;
    }
  }, {
    key: "getHookNode",
    value: function getHookNode(id) {
      return this.hookNodes[id];
    }
  }, {
    key: "buildHookTree",
    value: function buildHookTree(newHookNodes) {
      var _this = this;

      var pushChildren = function pushChildren(wxInstance, node) {
        var pInstance = wxInstance.selectOwnerComponent();

        if (!pInstance) {
          if (!_this.hookTree) {
            _this.hookTree = node;
          } else if (_this.hookTree !== node) {
            // 应该不会有这种情况
            handleError({
              instance: wxInstance,
              des: '未能找到父节点',
              level: 'throwError'
            });
          }

          return;
        }

        var pid = pInstance._$id,
            ptype = pInstance._$type;

        var phookNode = _this.getHookNode(pid);

        if (phookNode) {
          phookNode.children.push(node);
          return;
        }

        var pWXNode = _this.getWXNode(pid);

        if (pWXNode) {
          pWXNode.children.push(node);
          return;
        }

        var pNode = null;

        if (ptype === 'hook') {
          if (newHookNodes[pid]) {
            pNode = newHookNodes[pid];
            pNode.children.push(node);

            _this.addHookNode(pNode);
          } else {
            pNode = _this.buildHookNode(pInstance);
            pNode.children.push(node);
          }
        } else {
          pNode = _this.buildWXNode(pInstance);
          pNode.children.push(node);
        }

        pushChildren(pInstance, pNode);
      };

      Object.values(newHookNodes).forEach(function (hookNode) {
        var id = hookNode.id;

        if (_this.getHookNode(id)) {
          return;
        }

        _this.addHookNode(hookNode);

        var wxInstance = hookNode.wxInstance;
        pushChildren(wxInstance, hookNode);
      });
      return this.hookTree;
    }
  }, {
    key: "renderNodeDeep",
    value: function renderNodeDeep(node) {
      var _this2 = this;

      var wxInstance = node.wxInstance,
          children = node.children;

      if (wxInstance) {
        updateComponent(wxInstance);
        deleteRenderTask(wxInstance._$rootId, wxInstance._$id);
      }

      children.forEach(function (childNode) {
        _this2.renderNodeDeep(childNode);
      });
    }
  }, {
    key: "renderHookTree",
    value: function renderHookTree() {
      var _this3 = this;

      renderPaths = [];
      this.page.groupSetData(function () {
        _this3.renderNodeDeep(_this3.hookTree);
      });
    }
  }]);

  return HookTree;
}();

function buildHookNode(instacne) {
  var hookNode = _buildHookNode(instacne);

  newHookNodes[hookNode.id] = hookNode;
  return hookNode;
}
function buildHookTree() {
  var nodeAry = Object.values(newHookNodes);

  if (!nodeAry.length) {
    return;
  }

  var last = nodeAry[nodeAry.length - 1];
  var page = findPage(last.wxInstance);
  var id = page._$id;

  if (!id) {
    page._$id = generateComponentUid(page.route, page.__wxExparserNodeId__);
    id = page._$id;
  }

  var hookTree = hookTrees[id]; // console.time('build tree');

  if (hookTree) {
    hookTree.buildHookTree(newHookNodes);
  } else {
    hijackPage(page);
    hookTree = new HookTree(page);
    hookTree.buildHookTree(newHookNodes);
    hookTrees[hookTree.id] = hookTree;
  } // console.log(hookTree.hookTree);
  // console.timeEnd('build tree');


  newHookNodes = {};
}
function dispatchRender(instance) {
  var rootId = instance._$rootId,
      id = instance._$id;
  setRenderTask(rootId, id);
  render();
}
function dispatchDestory(instance) {
  var id = instance._$id;
  hookNodes[id].wxInstance = null;
  delete hookNodes[id];
  deleteRenderTask(instance._$rootId, instance._$id);
}
function dispatchEffect(effect) {
  effects.add(effect);
}
function updateComponent(instance) {
  var hasSetup = false;

  while (instance._$willSetup) {
    hasSetup = true;
    instance._$willSetup = false;

    instance._$setup();

    renderPaths.push({
      is: instance.is,
      id: instance._$id
    });
  }

  if (hasSetup) {
    var promise = instance._$updateData();

    if (isPromise(promise)) {
      updateDataPromises.push(promise);
    }
  }
}
function onRendered(fn) {
  if (typeof fn === 'function') {
    renderedJobs.push(fn);
  }
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _typeof = unwrapExports(_typeof_1);

var isObject = function isObject(o) {
  return o != null && _typeof(o) === 'object';
};

var diffShallow = function diffShallow(lhs, rhs) {
  if (!isObject(lhs) || !isObject(rhs)) {
    return rhs;
  }

  var l = lhs;
  var r = rhs;
  return Object.keys(r).reduce(function (acc, key) {
    if (!Object.is(r[key], l[key])) {
      acc[key] = r[key];
    }

    return acc;
  }, {});
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var currentComInstance = null;
var callIndex = 0;

var checkInstance = function checkInstance() {
  if (!currentComInstance) {
    handleError({
      des: '不能在实例外运行 effect',
      level: 'throwError'
    });
  }
};

var MapPageLifetimes = {
  show: 'onShow',
  hide: 'onHide',
  resize: 'onResize'
}; // Component的选项只能在创建前添加

function setOptionBeforeCreate(config, preDeclareField) {
  config.lifetimes = config.lifetimes || {};

  var _loop = function _loop() {
    var key = _Object$keys[_i];
    var originFn = config.lifetimes[key] || config[key];

    config.lifetimes[key] = function (params) {
      originFn && originFn.call(this, params);

      this._$storedOptions[key].forEach(function (cb) {
        if (cb) cb();
      });
    };
  };

  for (var _i = 0, _Object$keys = Object.keys(storedComponentOptions); _i < _Object$keys.length; _i++) {
    _loop();
  }

  config.pageLifetimes = config.pageLifetimes || {};

  var _loop2 = function _loop2() {
    var key = _Object$keys2[_i2];
    var originFn = config.pageLifetimes[key] || config[MapPageLifetimes[key]];

    config.pageLifetimes[key] = function (params) {
      originFn && originFn.call(this, params);

      this._$storedOptions[key].forEach(function (cb) {
        if (cb) cb();
      });
    };
  };

  for (var _i2 = 0, _Object$keys2 = Object.keys(storedBothOptions); _i2 < _Object$keys2.length; _i2++) {
    _loop2();
  }

  if (preDeclareField && preDeclareField.relations) {
    var names = ['linked', 'linkChanged', 'unlinked'];

    if (Array.isArray(preDeclareField.relations)) {
      var _iterator = _createForOfIteratorHelper(preDeclareField.relations),
          _step;

      try {
        var _loop3 = function _loop3() {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              kind = _step$value[1];

          var relation = {
            type: kind
          };
          names.forEach(function (name) {
            relation[name] = function (target) {
              this._$storagedRelations[key][name].forEach(function (cb) {
                cb && cb(target);
              });
            };
          });
          config.relations = config.relations || {};
          config.relations[key] = relation;
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      // TODOS 需要支持原生的relation写法
      handleError({
        des: '暂不支持原生的 relation 写法， 请参考文档使用 useRelation',
        level: 'error'
      });
    }
  }
} // Page 的选项可以在创建后动态添加


function setOptionAfterCreate(vm) {
  var _loop4 = function _loop4() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
        key = _Object$entries$_i[0],
        cbs = _Object$entries$_i[1];

    if (cbs.length) {
      var originFn = vm[key];

      vm[key] = function (params) {
        var res;
        typeof originFn === 'function' && originFn.call(this, params);

        this._$storedOptions[key].forEach(function (cb) {
          res = cb && cb(params);
        });

        if (key === 'onShareAppMessage' || key === 'onShareTimeline') {
          return res;
        }
      };
    }
  };

  for (var _i3 = 0, _Object$entries = Object.entries(storedPageOptions); _i3 < _Object$entries.length; _i3++) {
    _loop4();
  }
}

var currentComponentOptions = null;

function defineComponent(setup, options) {
  setup = typeof setup === 'function' ? setup : function () {
    return {};
  };

  var config = _objectSpread(_objectSpread(_objectSpread({}, currentComponentOptions), options), {}, {
    created: function created() {
      var _this = this;

      // if (first) {
      //     console.time('from-first-component-created-to-page-onload');
      //     console.time('from-first-component-created-to-page-ready');
      //     first = false;
      // }
      // 这里取不到__wxExparserNodeId__
      this._$id = generateComponentUid(this.is, this.__wxExparserNodeId__);
      this._$type = 'hook';
      buildHookNode(this);
      this._$state = {};
      this._$reducer = {};
      this._$effect = {};
      this._$useMemo = {};
      this._$refs = {};
      this._$dom = new Map();
      this._$propertiesKeys = propertiesKeys;
      this._$propertiesKeysWithEffect = propertiesKeysWithEffect; // 初始渲染，即第一次执行_$setup

      this._$firstRender = true;
      this._$isSetting = false;
      this._$willSetup = true;

      var _$updateData = function _$updateData() {
        var sourceData = _this._$sourceData;

        if (isObj(sourceData)) {
          // console.time('[diffedData]');
          // 只比较第一层属性是否变化，使用 Object.is 比较
          // 深度比较是一个代价昂贵的行为
          var diffedData = diffShallow(_this.data, sourceData); // console.timeEnd('[diffedData]');

          if (Object.keys(diffedData || {}).length === 0) {
            return;
          } // console.log('[diffedData]', diffedData);


          return new Promise(function (resolve) {
            // console.time('[setData]');
            // console.time('[render duration]');
            _this.setData(diffedData, function () {
              // console.timeEnd('[render duration]');
              resolve();
            }); // console.timeEnd('[setData]');

          });
        } else {
          handleError({
            instance: _this,
            des: '返回的 Data 不是一个对象',
            level: 'throwError'
          });
        }
      };

      _$updateData.id = this._$id;
      _$updateData.instance = this;
      this._$updateData = _$updateData;
      var cansetOptionAfter = true;

      var _$setup = function _$setup() {
        callIndex = 0; // console.time('setup');

        currentComInstance = _this;

        var _ref = setup.call(null, _this._$getPropsValue()) || {},
            _ref$data = _ref.data,
            data = _ref$data === void 0 ? {} : _ref$data,
            _ref$methods = _ref.methods,
            methods = _ref$methods === void 0 ? {} : _ref$methods;

        currentComInstance = null;

        if (cansetOptionAfter) {
          setOptionAfterCreate(_this);
          cansetOptionAfter = false;
        }

        _this._$storedOptions = Object.assign({}, storedOptions);
        clearStoredOptions();
        _this._$storagedRelations = Object.assign({}, storagedRelations);
        clearStoragedRelations();
        Object.keys(methods).forEach(function (key) {
          _this[key] = methods[key];
        }); // console.timeEnd('setup');

        _this._$sourceData = data; // console.log('[data]', data);
        // console.log(`[${this._$id}]`, this);

        _this._$firstRender = false; // console.timeEnd('setup');
      };

      _$setup.id = this._$id;
      this._$setup = _$setup;

      this._$getPropsValue = function () {
        var props = {};

        _this._$propertiesKeys.forEach(function (element) {
          props[element] = _this.data[element];
        });

        return props;
      };
    },
    // onLoad() {
    //     console.timeEnd('from-first-component-created-to-page-onload');
    // },
    // onReady() {
    //     console.timeEnd('from-first-component-created-to-page-ready');
    // },
    attached: function attached() {
      buildHookTree();
      updateComponent(this);
    },
    detached: function detached() {
      var _this2 = this;

      Object.keys(this._$effect).forEach(function (key) {
        var effect = _this2._$effect[key];
        var destroy = effect.destroy;
        if (typeof destroy === 'function') destroy.call(null);
      });
      dispatchDestory(this);
    }
  });

  config.observers = config.observers || {};
  config.properties = config.properties || {};
  var propertiesKeys = [];
  var propertiesKeysWithEffect = [];
  Object.keys(config.properties).forEach(function (key) {
    propertiesKeys.push(key);

    if (config.properties[key].effect !== false) {
      propertiesKeysWithEffect.push(key);
    }
  });

  if (propertiesKeysWithEffect.length) {
    config.observers[propertiesKeysWithEffect.join(',')] = function () {
      // 在第一次渲染前，也会观察到properties的变化
      // 并且会早于父组件的第一次渲染前
      // 此时传递过来的数据全为空，所以舍弃
      // 另外第一次是在attached中同步setData
      // 父组件会先于子组件setData
      // 此时观察到的变化也舍弃，所以第一次setup一定是在attached由组件自己触发。
      if (this._$firstRender) {
        return;
      } // log('observer change', Object.keys(config.properties).join(','));


      this._$willSetup = true;
    };
  }

  setOptionBeforeCreate(config, {
    // TODOS: 兼容原生写法
    relations: config.relations
  });
  currentComponentOptions = null;
  return Component(config);
}

function dispatch(state, reducer, action) {
  if (typeof reducer !== 'function') {
    state.value = reducer;
  } else {
    state.value = reducer(state.value, action);
  }
}

function useState(init) {
  checkInstance();
  var index = callIndex++;
  var instance = currentComInstance;
  var state = instance._$state[index]; // initialState;

  if (state === undefined) {
    var initState = function initState() {
      state = {
        value: undefined,
        tracks: [init],
        get: function get() {
          state.tracks.forEach(function (track) {
            dispatch(state, track);
          });
          state.tracks.length = 0;
        }
      };

      if (typeof init === 'function') {
        state.initFn = init;
      }

      instance._$state[index] = state;
    };

    initState();
  }

  var setState = function setState(value) {
    if (Object.is(value, state.value)) {
      return;
    }

    state.tracks.push(value);
    instance._$willSetup = true;
    dispatchRender(instance);
  };

  state.get();
  return [state.value, setState];
}

function useReducer(reducer, initialArg, init) {
  checkInstance();

  if (typeof reducer !== 'function') {
    handleError({
      instance: currentComInstance,
      des: 'useReducer 没有传入一个 reducer 函数',
      level: 'throwError'
    });
  }

  var index = callIndex++;
  var instance = currentComInstance;
  var state = instance._$reducer[index];

  if (state === undefined) {
    var initState = function initState() {
      state = {
        value: undefined,
        initialArg: initialArg,
        reducer: reducer,
        actions: [],
        get: function get() {
          state.actions.forEach(function (action) {
            dispatch(state, state.reducer, action);
          });
          state.actions.length = 0;
        }
      };

      if (typeof init === 'function') {
        state.initFn = init;
      }

      var initValue = function initValue() {
        var tracks = [initialArg];

        if (typeof init === 'function') {
          tracks.push(init);
        }

        tracks.forEach(function (track) {
          dispatch(state, track);
        });
      };

      initValue();
      instance._$reducer[index] = state;
    };

    initState();
  }

  var _dispatch = function _dispatch(action) {
    state.actions.push(action);
    instance._$willSetup = true;
    dispatchRender(instance);
  };

  state.get();
  return [state.value, _dispatch];
}

function useEffect(effectFn, deps) {
  checkInstance();

  if (typeof effectFn !== 'function') {
    handleError({
      instance: currentComInstance,
      des: 'useEffect 没有传入一个 effect 函数',
      level: 'throwError'
    });
  }

  var index = callIndex++;
  var instance = currentComInstance;
  var effect = instance._$effect[index];

  var setEffect = function setEffect() {
    effect.lastDeps = deps === undefined ? undefined : _toConsumableArray(deps);
    effect.cb = effectFn;
  };

  if (effect === undefined) {
    var initEffect = function initEffect() {
      var runEffect = function runEffect() {
        // 清除上一次的 effecct
        if (typeof effect.destroy === 'function') {
          effect.destroy();
          effect.destroy = null;
        } // 调用下一次的 effect;


        if (effect.cb) {
          effect.destroy = effect.cb.call(null);
        }
      };

      runEffect.id = instance._$id;
      effect = {
        run: runEffect,
        cb: undefined,
        lastDeps: undefined
      };
      setEffect();
      instance._$effect[index] = effect;
    };

    initEffect();
    dispatchEffect(effect.run);
    return;
  }

  if (depsChanged(deps, effect.lastDeps)) {
    setEffect();
    dispatchEffect(effect.run);
  }
}

function useMemo(memoFn, deps) {
  checkInstance();

  if (typeof useMemo !== 'function') {
    handleError({
      instance: currentComInstance,
      des: 'useMemo 没有传入一个 memo 函数',
      level: 'throwError'
    });
  }

  var index = callIndex++;
  var instance = currentComInstance;
  var memo = instance._$useMemo[index];

  var runCallback = function runCallback() {
    instance._$useMemo[index] = {
      lastDeps: deps === undefined ? undefined : _toConsumableArray(deps),
      value: memoFn()
    };
    return instance._$useMemo[index].value;
  };

  if (memo === undefined) {
    return runCallback();
  }

  if (depsChanged(deps, memo.lastDeps)) {
    return runCallback();
  }

  return instance._$useMemo[index].value;
}

function useCallback(callbackFn, deps) {
  if (typeof callbackFn !== 'function') {
    handleError({
      instance: currentComInstance,
      des: 'useCallback 没有传入一个函数',
      level: 'throwError'
    });
  }

  return useMemo(function () {
    return callbackFn;
  }, deps);
}

function useInstance() {
  checkInstance();
  return currentComInstance;
}

function useRef(initialVal) {
  checkInstance();
  var obj = {
    current: initialVal
  };
  var instance = currentComInstance;
  var index = callIndex++;

  if (instance._$refs[index] === undefined) {
    instance._$refs[index] = obj;
  }

  return instance._$refs[index];
}

function usePrevious(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

function useParams() {
  var instance = useInstance();
  return instance.options || {};
}

function useEvent(name) {
  var instance = useInstance();
  return function (value) {
    instance.triggerEvent(name, value);
  };
}

export { defineComponent, onRendered, useAddToFavorites, useCallback, useEffect, useEvent, useHide, useInstance, useLoad, useMemo, useMoved, usePageScroll, useParams, usePrevious, usePullDownRefresh, useReachBottom, useReducer, useRef, useRelations, useResize, useShareAppMessage, useShareTimeline, useShow, useState, useTabItemTap };
