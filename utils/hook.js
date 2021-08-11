function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
    return module = {exports: {}}, fn(module, module.exports), module.exports;
}

const arrayLikeToArray = createCommonjsModule(function(module) {
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
        }

        return arr2;
    }

    module.exports = _arrayLikeToArray;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayLikeToArray);

const arrayWithoutHoles = createCommonjsModule(function(module) {
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return arrayLikeToArray(arr);
    }

    module.exports = _arrayWithoutHoles;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithoutHoles);

const iterableToArray = createCommonjsModule(function(module) {
    function _iterableToArray(iter) {
        if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter);
    }

    module.exports = _iterableToArray;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArray);

const unsupportedIterableToArray = createCommonjsModule(function(module) {
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === 'string') return arrayLikeToArray(o, minLen);
        let n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === 'Object' && o.constructor) n = o.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(o);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
    }

    module.exports = _unsupportedIterableToArray;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

unwrapExports(unsupportedIterableToArray);

const nonIterableSpread = createCommonjsModule(function(module) {
    function _nonIterableSpread() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }

    module.exports = _nonIterableSpread;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableSpread);

const toConsumableArray = createCommonjsModule(function(module) {
    function _toConsumableArray(arr) {
        return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
    }

    module.exports = _toConsumableArray;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

const _toConsumableArray = unwrapExports(toConsumableArray);

const defineProperty = createCommonjsModule(function(module) {
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    module.exports = _defineProperty;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

const _defineProperty = unwrapExports(defineProperty);

const arrayWithHoles = createCommonjsModule(function(module) {
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }

    module.exports = _arrayWithHoles;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithHoles);

const iterableToArrayLimit = createCommonjsModule(function(module) {
    function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return;
        const _arr = [];
        let _n = true;
        let _d = false;
        let _e = undefined;

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
                if (!_n && _i['return'] != null) _i['return']();
            } finally {
                if (_d) throw _e;
            }
        }

        return _arr;
    }

    module.exports = _iterableToArrayLimit;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArrayLimit);

const nonIterableRest = createCommonjsModule(function(module) {
    function _nonIterableRest() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }

    module.exports = _nonIterableRest;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableRest);

const slicedToArray = createCommonjsModule(function(module) {
    function _slicedToArray(arr, i) {
        return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
    }

    module.exports = _slicedToArray;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

const _slicedToArray = unwrapExports(slicedToArray);

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

    for (let i = 0, len = deps.length; i < len; i++) {
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
    Promise.resolve().then(function() {
        fn && fn();
    });
}

function ownKeys$1(object, enumerableOnly) {
    const keys = Object.keys(object); if (Object.getOwnPropertySymbols) {
        let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        } keys.push.apply(keys, symbols);
    } return keys;
}

function _objectSpread$1(target) {
    for (let i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) {
            ownKeys$1(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys$1(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    } return target;
}
const storedPageOptions = {
    onLoad: [],
    onPullDownRefresh: [],
    onReachBottom: [],
    onShareAppMessage: [],
    onShareTimeline: [],
    onAddToFavorites: [],
    onPageScroll: [],
    onTabItemTap: [],
}; // 放入pageLifetimes中

const storedBothOptions = {
    show: [],
    hide: [],
    resize: [],
};
const storedComponentOptions = {
    moved: [],
};

let storedOptions = _objectSpread$1(_objectSpread$1(_objectSpread$1({}, storedPageOptions), storedComponentOptions), storedBothOptions);

let storagedRelations = {};

function useConstructor() {
    const useFn = {};

    const _loop = function _loop() {
        const key = _Object$keys[_i];
        let fnName = '';

        if (key.startsWith('on')) {
            fnName = key.replace('on', 'use');
        } else {
            fnName = 'use' + firstUpperLetter(key);
        }

        useFn[fnName] = function(cb) {
            checkInstance();

            if (typeof cb === 'function') {
                if ((key === 'onShareAppMessage' || key === 'onShareTimeline') && storedOptions[key].length >= 1) {
                    throw new Error(''.concat(key, ' only need one'));
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
    for (let _i2 = 0, _Object$keys2 = Object.keys(storedPageOptions); _i2 < _Object$keys2.length; _i2++) {
        const key = _Object$keys2[_i2];
        storedPageOptions[key] = [];
    }

    for (let _i3 = 0, _Object$keys3 = Object.keys(storedComponentOptions); _i3 < _Object$keys3.length; _i3++) {
        const _key = _Object$keys3[_i3];
        storedComponentOptions[_key] = [];
    }

    for (let _i4 = 0, _Object$keys4 = Object.keys(storedBothOptions); _i4 < _Object$keys4.length; _i4++) {
        const _key2 = _Object$keys4[_i4];
        storedBothOptions[_key2] = [];
    }

    storedOptions = _objectSpread$1(_objectSpread$1(_objectSpread$1({}, storedPageOptions), storedComponentOptions), storedBothOptions);
}

function useRelations(relations) {
    for (let _i5 = 0, _Object$keys5 = Object.keys(relations); _i5 < _Object$keys5.length; _i5++) {
        const key = _Object$keys5[_i5];
        const linked = relations[key].linked;
        const linkChanged = relations[key].linkChanged;
        const unlinked = relations[key].unlinked;

        if (!storagedRelations[key] || storagedRelations[key].type !== relations[key].type) {
            storagedRelations[key] = {
                type: relations[key].type,
                linked: [],
                linkChanged: [],
                unlinked: [],
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

const _useConstructor = useConstructor();
const useLoad = _useConstructor.useLoad;
const useShow = _useConstructor.useShow;
const useHide = _useConstructor.useHide;
const usePullDownRefresh = _useConstructor.usePullDownRefresh;
const useReachBottom = _useConstructor.useReachBottom;
const useShareAppMessage = _useConstructor.useShareAppMessage;
const useShareTimeline = _useConstructor.useShareTimeline;
const useAddToFavorites = _useConstructor.useAddToFavorites;
const usePageScroll = _useConstructor.usePageScroll;
const useTabItemTap = _useConstructor.useTabItemTap;
const useResize = _useConstructor.useResize;
const useMoved = _useConstructor.useMoved;

const classCallCheck = createCommonjsModule(function(module) {
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    module.exports = _classCallCheck;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

const _classCallCheck = unwrapExports(classCallCheck);

const createClass = createCommonjsModule(function(module) {
    function _defineProperties(target, props) {
        for (let i = 0; i < props.length; i++) {
            const descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    module.exports = _createClass;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

const _createClass = unwrapExports(createClass);

const log = function log() {
    let _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    (_console = console).log.apply(_console, ['[WXA hooks]'].concat(args));
};

const warn = function warn() {
    let _console2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    (_console2 = console).warn.apply(_console2, ['[WXA hooks]'].concat(args));
};

const error = function error() {
    let _console3;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
    }

    (_console3 = console).error.apply(_console3, ['[WXA hooks]'].concat(args));
};

const throwError = function throwError(message) {
    throw new Error('[WXA hooks] '.concat(message));
};

function handleError(_ref) {
    const instance = _ref.instance;
    const des = _ref.des;
    const level = _ref.level;
    let message = '';

    if (instance) {
        message = ''.concat(instance.route ? '页面 ' : '组件 ').concat(instance.is, ' - ');
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
function handleErrorDeps(instance) {
    handleError({
        instance: instance,
        des: 'hook 的依赖需要是一个数组',
        level: 'throwError',
    });
}

// 在组件 created 时收集实例，attached 时用收集的实例建立树
// 同一批 created 收集的实例一定是属于同一页面
// 即使在 created 时跳转页面，也会等当前页面所以组件 created attached 完毕才跳转

let newHookNodes = {};
const hookNodes = {};
const hookTrees = {}; // 保存各个页面下，需要渲染的组件id

const renderTasks = new Map();
let isRendering = false;
const effects = new Set();
const renderedJobs = [];
const updateDataPromises = [];
let renderPaths = [];
const MAX_RENDER_DURATION = 30;
const MAX_CYCLE_UPDATE_TIMES = 5;

function flushRenderedJobs() {
    const promises = [].concat(updateDataPromises);
    updateDataPromises.length = 0;
    Promise.all(promises).then(function() {
        while (renderedJobs.length) {
            const jobs = [].concat(renderedJobs);
            renderedJobs.length = 0;
            jobs.forEach(function(fn) {
                return fn();
            });
        }
    });
}

function _buildHookNode(instacne) {
    const id = instacne._$id;
    const hookNode = {
        type: 'hook',
        id: id,
        is: instacne.is,
        wxInstance: instacne,
        children: [],
    };
    hookNodes[id] = hookNode;
    return hookNode;
}

function findPage(instacne) {
    const parent = instacne.selectOwnerComponent();

    if (!parent) {
        return instacne;
    }

    return findPage(parent);
} // 劫持页面 onLoad，在 onLoad 时执行第一次 effects


function hijackPage(page) {
    const originOnload = page.onLoad;

    page.onLoad = function() {
    // 当页面是hook组件时，存在 _$routerParams 属性
        if (this._$routerParams) {
            Object.assign(this._$routerParams, this.options);
        }

        flushRenderedJobs();
        runEffects();
        originOnload.apply(void 0, arguments);
    };

    const originOnUnload = page.onUnload;

    page.onUnload = function() {
    // 在 onUnload 时删除对应 hooktree，并删除对页面实例的引用
    // 如果当前正在遍历树渲染，但 onUnload 是异步触发的，当触发时已经遍历完毕，不会再有对页面实例的引用
        delete hookTrees[page._$id];
        renderTasks.delete(page._$id);
        originOnUnload.apply(void 0, arguments);
    };
}

function setRenderTask(rootId, id) {
    const ids = renderTasks.get(rootId) || new Set();
    ids.add(id);
    renderTasks.set(rootId, ids);
}

function deleteRenderTask(rootId, id) {
    const ids = renderTasks.get(rootId);
    ids && ids.delete(id);
}

function render() {
    let times = 0;

    const _render = function _render() {
        if (isRendering) {
            return;
        }

        isRendering = true;
        nextTick(function() {
            // rootId 渲染的页面
            // ids 渲染的组件
            // console.time('update');
            let rendered = false;
            const pages = getCurrentPages();
            const shownPage = pages[pages.length - 1];
            const shownPageIds = renderTasks.get(shownPage._$id);
            const canRenderShownPage = Boolean(shownPageIds && shownPageIds.size);
            const startTime = Date.now();
            let renderedHiddenPage = false; // 优先更新显示的页面

            if (canRenderShownPage) {
                hookTrees[shownPage._$id].renderHookTree();

                flushRenderedJobs();
                runEffects();
                rendered = true;
            } else {
                renderTasks.forEach(function(ids, rootId) {
                    // 组件已销毁，但存在引用而未被垃圾回收，警告内存泄漏
                    const validIds = [];
                    ids.forEach(function(id) {
                        if (hookNodes[id]) {
                            validIds.push(id);
                        } else {
                            handleError({
                                des: '\u7EC4\u4EF6 '.concat(id, ' - \u672A\u88AB\u6B63\u5E38\u9500\u6BC1\uFF0C\u5B58\u5728\u5185\u5B58\u6CC4\u6F0F'),
                                level: 'warn',
                            });
                        }
                    });

                    if (validIds.length) {
                        // 页面已销毁，但存在引用而未被垃圾回收，警告内存泄漏
                        if (!hookTrees[rootId]) {
                            handleError({
                                des: '\u9875\u9762 '.concat(rootId, ' - \u672A\u88AB\u6B63\u5E38\u9500\u6BC1\uFF0C\u5B58\u5728\u5185\u5B58\u6CC4\u6F0F'),
                                level: 'warn',
                            });
                            return;
                        }

                        hookTrees[rootId].renderHookTree();
                        flushRenderedJobs();
                        runEffects();
                        rendered = true;
                        renderedHiddenPage = true;
                    }
                });
            }

            const endTime = Date.now();
            const duration = endTime - startTime;

            if (duration > MAX_RENDER_DURATION && canRenderShownPage) {
                handleError({
                    instance: hookTrees[shownPage._$id].page,
                    des: '\u66F4\u65B0\u65F6\u95F4'.concat(duration, 'ms\uFF0C\u53EF\u80FD\u9020\u6210\u6027\u80FD\u5F71\u54CD'),
                    level: 'warn',
                });
            }

            if (renderedHiddenPage) {
                handleError({
                    des: '\u66F4\u65B0\u4E86\u9690\u85CF\u7684\u9875\u9762\uFF0C\u53EF\u80FD\u9020\u6210\u4E0D\u5FC5\u8981\u7684\u6027\u80FD\u5F00\u9500',
                    level: 'warn',
                });

                if (duration > MAX_RENDER_DURATION) {
                    handleError({
                        des: '\u66F4\u65B0\u9690\u85CF\u9875\u9762\u65F6\u95F4'.concat(duration, 'ms\uFF0C\u53EF\u80FD\u9020\u6210\u6027\u80FD\u5F71\u54CD'),
                        level: 'error',
                    });
                }
            }

            isRendering = false; // console.timeEnd('update');

            if (rendered) {
                times++;

                if (times > MAX_CYCLE_UPDATE_TIMES) {
                    handleError({
                        des: '\u8FC7\u591A\u5B50\u7EC4\u4EF6\u6539\u53D8\u5DF2\u7ECF\u66F4\u65B0\u5B8C\u6210\u7684\u7236\u8282\u70B9\u573A\u666F\uFF0C\u8BF7\u4F18\u5316',
                        level: 'warn',
                    });
                }

                _render();
            }
        });
    };

    _render();
}

function runEffects() {
    effects.forEach(function(effect) {
        return effect();
    });
    effects.clear();
} // Todo，修剪掉无用的节点
// function pruneHookTree() {
// }


const HookTree = /* #__PURE__*/function() {
    // TODO, 使用 fiber 结构
    function HookTree(instance) {
        _classCallCheck(this, HookTree);

        _defineProperty(this, 'hookNodes', {});

        _defineProperty(this, 'wxNodes', {});

        _defineProperty(this, 'hookTree', null);

        _defineProperty(this, 'route', '');

        _defineProperty(this, 'id', '');

        _defineProperty(this, 'page', null);

        this.route = instance.route;
        this.id = instance._$id;
        this.page = instance;
    }

    _createClass(HookTree, [{
        key: 'buildWXNode',
        value: function buildWXNode(instacne) {
            const id = instacne._$id;

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
                children: [],
            };
            return this.wxNodes[id];
        },
    }, {
        key: 'getWXNode',
        value: function getWXNode(id) {
            return this.wxNodes[id];
        },
    }, {
        key: 'buildHookNode',
        value: function buildHookNode(instacne) {
            const hookNode = _buildHookNode(instacne);

            hookNode.page = hookNode.wxInstance._$route = this.route;
            hookNode.pageId = hookNode.wxInstance._$rootId = this.id;
            this.hookNodes[hookNode.id] = hookNode;
            return hookNode;
        },
    }, {
        key: 'addHookNode',
        value: function addHookNode(hookNode) {
            hookNode.page = hookNode.wxInstance._$route = this.route;
            hookNode.pageId = hookNode.wxInstance._$rootId = this.id;
            this.hookNodes[hookNode.id] = hookNode;
        },
    }, {
        key: 'getHookNode',
        value: function getHookNode(id) {
            return this.hookNodes[id];
        },
    }, {
        key: 'buildHookTree',
        value: function buildHookTree(newHookNodes) {
            const _this = this;

            const pushChildren = function pushChildren(wxInstance, node) {
                const pInstance = wxInstance.selectOwnerComponent();

                if (!pInstance) {
                    if (!_this.hookTree) {
                        _this.hookTree = node;
                    } else if (_this.hookTree !== node) {
                        // 应该不会有这种情况
                        handleError({
                            instance: wxInstance,
                            des: '未能找到父节点',
                            level: 'throwError',
                        });
                    }

                    return;
                }

                const pid = pInstance._$id;
                const ptype = pInstance._$type;

                const phookNode = _this.getHookNode(pid);

                if (phookNode) {
                    phookNode.children.push(node);
                    return;
                }

                const pWXNode = _this.getWXNode(pid);

                if (pWXNode) {
                    pWXNode.children.push(node);
                    return;
                }

                let pNode = null;

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

            Object.values(newHookNodes).forEach(function(hookNode) {
                const id = hookNode.id;

                if (_this.getHookNode(id)) {
                    return;
                }

                _this.addHookNode(hookNode);

                const wxInstance = hookNode.wxInstance;
                pushChildren(wxInstance, hookNode);
            });
            return this.hookTree;
        },
    }, {
        key: 'renderNodeDeep',
        value: function renderNodeDeep(node) {
            const _this2 = this;

            const wxInstance = node.wxInstance;
            const children = node.children;

            if (wxInstance) {
                updateComponent(wxInstance);
                deleteRenderTask(wxInstance._$rootId, wxInstance._$id);
            }

            children.forEach(function(childNode) {
                _this2.renderNodeDeep(childNode);
            });
        },
    }, {
        key: 'renderHookTree',
        value: function renderHookTree() {
            const _this3 = this;

            renderPaths = [];
            this.page.groupSetData(function() {
                _this3.renderNodeDeep(_this3.hookTree);
            });
        },
    }]);

    return HookTree;
}();

function buildHookNode(instacne) {
    const hookNode = _buildHookNode(instacne);

    newHookNodes[hookNode.id] = hookNode;
    return hookNode;
}
function buildHookTree() {
    const nodeAry = Object.values(newHookNodes);

    if (!nodeAry.length) {
        return;
    } // TODO, 使用 getPageId 来判断组件是否在一个页面内，预防可能出现的意外情况


    const last = nodeAry[nodeAry.length - 1];
    const page = findPage(last.wxInstance);
    let id = page._$id;

    if (!id) {
        page._$id = generateComponentUid(page.route, page.__wxExparserNodeId__);
        id = page._$id;
    }

    let hookTree = hookTrees[id]; // console.time('build tree');

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
    const rootId = instance._$rootId;
    const id = instance._$id;
    setRenderTask(rootId, id);
    render();
}
function dispatchDestory(instance) {
    const id = instance._$id;
    hookNodes[id].wxInstance = null;
    delete hookNodes[id];
    deleteRenderTask(instance._$rootId, instance._$id);
}
function dispatchEffect(effect) {
    effects.add(effect);
}
function updateComponent(instance) {
    let hasSetup = false;

    while (instance._$willSetup) {
        hasSetup = true;
        instance._$willSetup = false;

        instance._$setup();

        renderPaths.push({
            is: instance.is,
            id: instance._$id,
        });
    }

    if (hasSetup) {
        const promise = instance._$updateData();

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

const _typeof_1 = createCommonjsModule(function(module) {
    function _typeof(obj) {
        '@babel/helpers - typeof';

        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
            module.exports = _typeof = function _typeof(obj) {
                return typeof obj;
            };

            module.exports['default'] = module.exports, module.exports.__esModule = true;
        } else {
            module.exports = _typeof = function _typeof(obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };

            module.exports['default'] = module.exports, module.exports.__esModule = true;
        }

        return _typeof(obj);
    }

    module.exports = _typeof;
    module.exports['default'] = module.exports, module.exports.__esModule = true;
});

const _typeof = unwrapExports(_typeof_1);

const isObject = function isObject(o) {
    return o != null && _typeof(o) === 'object';
};

const diffShallow = function diffShallow(lhs, rhs) {
    if (!isObject(lhs) || !isObject(rhs)) {
        return rhs;
    }

    const l = lhs;
    const r = rhs;
    return Object.keys(r).reduce(function(acc, key) {
        if (!Object.is(r[key], l[key])) {
            acc[key] = r[key];
        }

        return acc;
    }, {});
};

function ownKeys(object, enumerableOnly) {
    const keys = Object.keys(object); if (Object.getOwnPropertySymbols) {
        let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        } keys.push.apply(keys, symbols);
    } return keys;
}

function _objectSpread(target) {
    for (let i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    } return target;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
    let it; if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === 'number') {
            if (it) o = it; let i = 0; const F = function F() {}; return {s: F, n: function n() {
                if (i >= o.length) return {done: true}; return {done: false, value: o[i++]};
            }, e: function e(_e) {
                throw _e;
            }, f: F};
        } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    } let normalCompletion = true; let didErr = false; let err; return {s: function s() {
        it = o[Symbol.iterator]();
    }, n: function n() {
        const step = it.next(); normalCompletion = step.done; return step;
    }, e: function e(_e2) {
        didErr = true; err = _e2;
    }, f: function f() {
        try {
            if (!normalCompletion && it.return != null) it.return();
        } finally {
            if (didErr) throw err;
        }
    }};
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    } return arr2;
}
let currentComInstance = null;
let callIndex = 0;

var checkInstance = function checkInstance() {
    if (!currentComInstance) {
        handleError({
            des: '不能在实例外运行 effect',
            level: 'throwError',
        });
    }
};

const MapPageLifetimes = {
    show: 'onShow',
    hide: 'onHide',
    resize: 'onResize',
}; // Component的选项只能在创建前添加

function setOptionBeforeCreate(config, preDeclareField) {
    config.lifetimes = config.lifetimes || {};

    const _loop = function _loop() {
        const key = _Object$keys[_i];
        const originFn = config.lifetimes[key] || config[key];

        config.lifetimes[key] = function(params) {
            originFn && originFn.call(this, params);

            this._$storedOptions[key].forEach(function(cb) {
                if (cb) cb();
            });
        };
    };

    for (var _i = 0, _Object$keys = Object.keys(storedComponentOptions); _i < _Object$keys.length; _i++) {
        _loop();
    }

    config.pageLifetimes = config.pageLifetimes || {};

    const _loop2 = function _loop2() {
        const key = _Object$keys2[_i2];
        const originFn = config.pageLifetimes[key] || config[MapPageLifetimes[key]];

        config.pageLifetimes[key] = function(params) {
            originFn && originFn.call(this, params);

            this._$storedOptions[key].forEach(function(cb) {
                if (cb) cb();
            });
        };
    };

    for (var _i2 = 0, _Object$keys2 = Object.keys(storedBothOptions); _i2 < _Object$keys2.length; _i2++) {
        _loop2();
    }

    if (preDeclareField && preDeclareField.relations) {
        const names = ['linked', 'linkChanged', 'unlinked'];

        if (Array.isArray(preDeclareField.relations)) {
            const _iterator = _createForOfIteratorHelper(preDeclareField.relations);
            let _step;

            try {
                const _loop3 = function _loop3() {
                    const _step$value = _slicedToArray(_step.value, 2);
                    const key = _step$value[0];
                    const kind = _step$value[1];

                    const relation = {
                        type: kind,
                    };
                    names.forEach(function(name) {
                        relation[name] = function(target) {
                            this._$storagedRelations[key][name].forEach(function(cb) {
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
                level: 'error',
            });
        }
    }
} // Page 的选项可以在创建后动态添加


function setOptionAfterCreate(vm) {
    const _loop4 = function _loop4() {
        const _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2);
        const key = _Object$entries$_i[0];
        const cbs = _Object$entries$_i[1];

        if (cbs.length) {
            const originFn = vm[key];

            vm[key] = function(params) {
                let res;
                typeof originFn === 'function' && originFn.call(this, params);

                this._$storedOptions[key].forEach(function(cb) {
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

let currentComponentOptions = null;

function defineComponent(setup, options) {
    setup = typeof setup === 'function' ? setup : function() {
        return {};
    };

    const config = _objectSpread(_objectSpread(_objectSpread({}, currentComponentOptions), options), {}, {
        created: function created() {
            const _this = this;

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
            this._$routerParams = {};

            const _$updateData = function _$updateData() {
                const sourceData = _this._$sourceData;

                if (isObj(sourceData)) {
                    // console.time('[diffedData]');
                    // 只比较第一层属性是否变化，使用 Object.is 比较
                    // 深度比较是一个代价昂贵的行为
                    const diffedData = diffShallow(_this.data, sourceData); // console.timeEnd('[diffedData]');

                    if (Object.keys(diffedData || {}).length === 0) {
                        return;
                    } // console.log('[diffedData]', diffedData);


                    return new Promise(function(resolve) {
                        // console.time('[setData]');
                        // console.time('[render duration]');
                        _this.setData(diffedData, function() {
                            // console.timeEnd('[render duration]');
                            resolve();
                        }); // console.timeEnd('[setData]');
                    });
                } else {
                    handleError({
                        instance: _this,
                        des: '返回的 Data 不是一个对象',
                        level: 'throwError',
                    });
                }
            };

            _$updateData.id = this._$id;
            _$updateData.instance = this;
            this._$updateData = _$updateData;
            let cansetOptionAfter = true;

            const _$setup = function _$setup() {
                callIndex = 0; // console.time('setup');

                currentComInstance = _this;

                const _ref = setup.call(null, _this._$getPropsValue()) || {};
                const _ref$data = _ref.data;
                const data = _ref$data === void 0 ? {} : _ref$data;
                const _ref$methods = _ref.methods;
                const methods = _ref$methods === void 0 ? {} : _ref$methods;

                currentComInstance = null;

                if (cansetOptionAfter) {
                    setOptionAfterCreate(_this);
                    cansetOptionAfter = false;
                }

                _this._$storedOptions = Object.assign({}, storedOptions);
                clearStoredOptions();
                _this._$storagedRelations = Object.assign({}, storagedRelations);
                clearStoragedRelations();
                Object.keys(methods).forEach(function(key) {
                    _this[key] = methods[key];
                }); // console.timeEnd('setup');

                _this._$sourceData = data; // console.log('[data]', data);
                // console.log(`[${this._$id}]`, this);

                _this._$firstRender = false; // console.timeEnd('setup');
            };

            _$setup.id = this._$id;
            this._$setup = _$setup;

            this._$getPropsValue = function() {
                const props = {};

                _this._$propertiesKeys.forEach(function(element) {
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
            const _this2 = this;

            Object.keys(this._$effect).forEach(function(key) {
                const effect = _this2._$effect[key];
                const destroy = effect.destroy;

                if (typeof destroy !== 'function') {
                    destroy && handleError({
                        instance: currentComInstance,
                        des: 'useEffect 没有返回一个函数',
                        level: 'warn',
                    });
                } else {
                    destroy.call(null);
                }
            });
            dispatchDestory(this);
        },
    });

    config.observers = config.observers || {};
    config.properties = config.properties || {};
    var propertiesKeys = [];
    var propertiesKeysWithEffect = [];
    Object.keys(config.properties).forEach(function(key) {
        propertiesKeys.push(key);

        if (config.properties[key].effect !== false) {
            propertiesKeysWithEffect.push(key);
        }
    });

    if (propertiesKeysWithEffect.length) {
        config.observers[propertiesKeysWithEffect.join(',')] = function() {
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
        relations: config.relations,
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
    const index = callIndex++;
    const instance = currentComInstance;
    let state = instance._$state[index]; // initialState;

    if (state === undefined) {
        const initState = function initState() {
            state = {
                value: undefined,
                tracks: [init],
                get: function get() {
                    state.tracks.forEach(function(track) {
                        dispatch(state, track);
                    });
                    state.tracks.length = 0;
                },
            };

            if (typeof init === 'function') {
                state.initFn = init;
            }

            instance._$state[index] = state;
        };

        initState();
    }

    const setState = function setState(value) {
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
            level: 'throwError',
        });
    }

    const index = callIndex++;
    const instance = currentComInstance;
    let state = instance._$reducer[index];

    if (state === undefined) {
        const initState = function initState() {
            state = {
                value: undefined,
                initialArg: initialArg,
                reducer: reducer,
                actions: [],
                get: function get() {
                    state.actions.forEach(function(action) {
                        dispatch(state, state.reducer, action);
                    });
                    state.actions.length = 0;
                },
            };

            if (typeof init === 'function') {
                state.initFn = init;
            }

            const initValue = function initValue() {
                const tracks = [initialArg];

                if (typeof init === 'function') {
                    tracks.push(init);
                }

                tracks.forEach(function(track) {
                    dispatch(state, track);
                });
            };

            initValue();
            instance._$reducer[index] = state;
        };

        initState();
    }

    const _dispatch = function _dispatch(action) {
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
            level: 'throwError',
        });
    }

    if (!Array.isArray(deps)) {
        handleErrorDeps(currentComInstance);
    }

    const index = callIndex++;
    const instance = currentComInstance;
    let effect = instance._$effect[index];

    const setEffect = function setEffect() {
        effect.lastDeps = deps === undefined ? undefined : _toConsumableArray(deps);
        effect.cb = effectFn;
    };

    if (effect === undefined) {
        const initEffect = function initEffect() {
            const runEffect = function runEffect() {
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
                lastDeps: undefined,
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
            level: 'throwError',
        });
    }

    if (!Array.isArray(deps)) {
        handleErrorDeps(currentComInstance);
    }

    const index = callIndex++;
    const instance = currentComInstance;
    const memo = instance._$useMemo[index];

    const runCallback = function runCallback() {
        instance._$useMemo[index] = {
            lastDeps: deps === undefined ? undefined : _toConsumableArray(deps),
            value: memoFn(),
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
            level: 'throwError',
        });
    }

    if (!Array.isArray(deps)) {
        handleErrorDeps(currentComInstance);
    }

    return useMemo(function() {
        return callbackFn;
    }, deps);
}

function useInstance() {
    checkInstance();
    return currentComInstance;
}

function useRef(initialVal) {
    checkInstance();
    const obj = {
        current: initialVal,
    };
    const instance = currentComInstance;
    const index = callIndex++;

    if (instance._$refs[index] === undefined) {
        instance._$refs[index] = obj;
    }

    return instance._$refs[index];
}

function usePrevious(value) {
    const ref = useRef();
    useEffect(function() {
        ref.current = value;
    });
    return ref.current;
}

function useParams() {
    const instance = useInstance();
    return instance._$routerParams;
}

function useEvent(name) {
    const instance = useInstance();
    return function(value) {
        instance.triggerEvent(name, value);
    };
}

export {defineComponent, onRendered, useAddToFavorites, useCallback, useEffect, useEvent, useHide, useInstance, useLoad, useMemo, useMoved, usePageScroll, useParams, usePrevious, usePullDownRefresh, useReachBottom, useReducer, useRef, useRelations, useResize, useShareAppMessage, useShareTimeline, useShow, useState, useTabItemTap};
