! function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: !1
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = !0, module.exports
    }
    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "/dist/", __webpack_require__(0)
}(function(modules) {
    for (var i in modules)
        if (Object.prototype.hasOwnProperty.call(modules, i)) switch (typeof modules[i]) {
            case "function":
                break;
            case "object":
                modules[i] = function(_m) {
                    var args = _m.slice(1),
                        fn = modules[_m[0]];
                    return function(a, b, c) {
                        fn.apply(this, [a, b, c].concat(args))
                    }
                }(modules[i]);
                break;
            default:
                modules[i] = modules[modules[i]]
        }
    return modules
}([function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj)
            for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }
    var _App = __webpack_require__(29),
        _App2 = _interopRequireDefault(_App),
        _Poly = __webpack_require__(1),
        App = (_interopRequireWildcard(_Poly), void 0),
        _init = function() {
            App = new _App2.default, window.addEventListener("resize", resize), resize()
        },
        resize = function() {
            App.resize()
        };
    _init()
}, function(module, exports, __webpack_require__) {
    (function(global) {
        "use strict";

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj)
                for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.loaders = exports.helpers = exports.FrameBuffer = exports.geometry = exports.core = exports.State = exports.control = exports.cameras = exports.CONST = exports.DataTexture = exports.Texture = exports.utils = exports.GLExtensions = exports.GL = exports.Program = exports.init = void 0;
        var _Program = __webpack_require__(22),
            _Program2 = _interopRequireDefault(_Program),
            _loaders = __webpack_require__(67),
            _loaders2 = _interopRequireDefault(_loaders),
            _geometry = __webpack_require__(55),
            _geometry2 = _interopRequireDefault(_geometry),
            _FrameBuffer = __webpack_require__(46),
            _FrameBuffer2 = _interopRequireDefault(_FrameBuffer),
            _GLTool = __webpack_require__(47),
            _GLTool2 = _interopRequireDefault(_GLTool),
            _Texture = __webpack_require__(69),
            _Texture2 = _interopRequireDefault(_Texture),
            _DataTexture = __webpack_require__(68),
            _DataTexture2 = _interopRequireDefault(_DataTexture),
            _camera = __webpack_require__(50),
            _camera2 = _interopRequireDefault(_camera),
            _core = __webpack_require__(25),
            _core2 = _interopRequireDefault(_core),
            _control = __webpack_require__(52),
            _control2 = _interopRequireDefault(_control),
            _State = __webpack_require__(6),
            _State2 = _interopRequireDefault(_State),
            _const = __webpack_require__(23),
            _const2 = _interopRequireDefault(_const),
            _helpers = __webpack_require__(64),
            _helpers2 = _interopRequireDefault(_helpers),
            _utils = __webpack_require__(71),
            utils = _interopRequireWildcard(_utils),
            _GLExtensions = __webpack_require__(5),
            _GLExtensions2 = _interopRequireDefault(_GLExtensions),
            init = function(canvas, forceWebGL1) {
                var gl = void 0;
                try {
                    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl"), POLY.gl = gl, POLY.GL.init(gl)
                } catch (e) {}
            };
        exports.init = init, exports.Program = _Program2.default, exports.GL = _GLTool2.default, exports.GLExtensions = _GLExtensions2.default, exports.utils = utils, exports.Texture = _Texture2.default, exports.DataTexture = _DataTexture2.default, exports.CONST = _const2.default, exports.cameras = _camera2.default, exports.control = _control2.default, exports.State = _State2.default, exports.core = _core2.default, exports.geometry = _geometry2.default, exports.FrameBuffer = _FrameBuffer2.default, exports.helpers = _helpers2.default, exports.loaders = _loaders2.default, global.POLY = exports
    }).call(exports, function() {
        return this
    }())
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _State = __webpack_require__(6),
        _State2 = _interopRequireDefault(_State),
        _Object3D2 = __webpack_require__(54),
        _Object3D3 = _interopRequireDefault(_Object3D2),
        _glMatrix = __webpack_require__(3),
        Mesh = function(_Object3D) {
            function Mesh(program, state) {
                var drawType = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
                _classCallCheck(this, Mesh);
                var _this = _possibleConstructorReturn(this, (Mesh.__proto__ || Object.getPrototypeOf(Mesh)).call(this));
                return _this.uvs = [], _this.normals = [], _this.program = program, _this.state = state || new _State2.default(_this.program.gl), state || (_this.state.depthTest = !0), _this.instanceCount = 0, _this.drawType = drawType, _this._attributes = [], _this._vertices = [], _this._indices = [], _this.matrix = _glMatrix.mat4.create(), _this._vertexSize = 0, _this._numItems = 0, _this.indexBuffer = null, _this
            }
            return _inherits(Mesh, _Object3D), _createClass(Mesh, [{
                key: "addIndices",
                value: function(indices, dynamic) {
                    var gl = this.program.gl,
                        drawType = dynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
                    this._indices = indices, this.indexBuffer || (this.indexBuffer = gl.createBuffer()), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer), gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), drawType)
                }
            }, {
                key: "addPosition",
                value: function(data) {
                    var name = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "aPosition",
                        itemSize = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
                    this._vertices = data, this._vertexSize = this._vertices.length, this._numItems = this._vertexSize / itemSize, this.addAttribute(data, name, itemSize)
                }
            }, {
                key: "updatePosition",
                value: function() {
                    var name = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "aPosition",
                        data = arguments[1],
                        itemSize = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
                    this._vertices = data, this._vertexSize = this._vertices.length, this._numItems = this._vertexSize / itemSize, this.updateAttribute(name, data)
                }
            }, {
                key: "addAttribute",
                value: function(data, name) {
                    var itemSize = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
                        instance = arguments[3],
                        gl = this.program.gl,
                        buffer = gl.createBuffer();
                    gl.bindBuffer(gl.ARRAY_BUFFER, buffer), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW), this._attributes.push({
                        name: name,
                        data: data,
                        itemSize: itemSize,
                        numItems: this._numItems,
                        buffer: buffer,
                        instance: instance
                    }), this.program.addAttributeLocation(name)
                }
            }, {
                key: "updateAttribute",
                value: function(name, data) {
                    for (var gl = this.program.gl, i = 0; i < this._attributes.length; i++) {
                        var attr = this._attributes[i];
                        if (attr.name === name) {
                            var buffer = attr.buffer;
                            gl.bindBuffer(gl.ARRAY_BUFFER, buffer), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW), attr.data = data;
                            break
                        }
                    }
                }
            }]), Mesh
        }(_Object3D3.default);
    exports.default = Mesh, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    ! function(root, factory) {
        module.exports = factory()
    }(this, function() {
        return function(modules) {
            function __webpack_require__(moduleId) {
                if (installedModules[moduleId]) return installedModules[moduleId].exports;
                var module = installedModules[moduleId] = {
                    i: moduleId,
                    l: !1,
                    exports: {}
                };
                return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports
            }
            var installedModules = {};
            return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
                __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                    configurable: !1,
                    enumerable: !0,
                    get: getter
                })
            }, __webpack_require__.n = function(module) {
                var getter = module && module.__esModule ? function() {
                    return module.default
                } : function() {
                    return module
                };
                return __webpack_require__.d(getter, "a", getter), getter
            }, __webpack_require__.o = function(object, property) {
                return Object.prototype.hasOwnProperty.call(object, property)
            }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 4)
        }([function(module, exports, __webpack_require__) {
            "use strict";

            function setMatrixArrayType(type) {
                exports.ARRAY_TYPE = ARRAY_TYPE = type
            }

            function toRadian(a) {
                return a * degree
            }

            function equals(a, b) {
                return Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b))
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.setMatrixArrayType = setMatrixArrayType, exports.toRadian = toRadian, exports.equals = equals;
            var EPSILON = exports.EPSILON = 1e-6,
                ARRAY_TYPE = exports.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array,
                degree = (exports.RANDOM = Math.random, Math.PI / 180)
        }, function(module, exports, __webpack_require__) {
            "use strict";

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj)
                    for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj
            }

            function create() {
                var out = new glMatrix.ARRAY_TYPE(9);
                return out[0] = 1, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 1, out[5] = 0, out[6] = 0, out[7] = 0, out[8] = 1, out
            }

            function fromMat4(out, a) {
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[4], out[4] = a[5], out[5] = a[6], out[6] = a[8], out[7] = a[9], out[8] = a[10], out
            }

            function clone(a) {
                var out = new glMatrix.ARRAY_TYPE(9);
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[3], out[4] = a[4], out[5] = a[5], out[6] = a[6], out[7] = a[7], out[8] = a[8], out
            }

            function copy(out, a) {
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[3], out[4] = a[4], out[5] = a[5], out[6] = a[6], out[7] = a[7], out[8] = a[8], out
            }

            function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
                var out = new glMatrix.ARRAY_TYPE(9);
                return out[0] = m00, out[1] = m01, out[2] = m02, out[3] = m10, out[4] = m11, out[5] = m12, out[6] = m20, out[7] = m21, out[8] = m22, out
            }

            function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
                return out[0] = m00, out[1] = m01, out[2] = m02, out[3] = m10, out[4] = m11, out[5] = m12, out[6] = m20, out[7] = m21, out[8] = m22, out
            }

            function identity(out) {
                return out[0] = 1, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 1, out[5] = 0, out[6] = 0, out[7] = 0, out[8] = 1, out
            }

            function transpose(out, a) {
                if (out === a) {
                    var a01 = a[1],
                        a02 = a[2],
                        a12 = a[5];
                    out[1] = a[3], out[2] = a[6], out[3] = a01, out[5] = a[7], out[6] = a02, out[7] = a12
                } else out[0] = a[0], out[1] = a[3], out[2] = a[6], out[3] = a[1], out[4] = a[4], out[5] = a[7], out[6] = a[2], out[7] = a[5], out[8] = a[8];
                return out
            }

            function invert(out, a) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a10 = a[3],
                    a11 = a[4],
                    a12 = a[5],
                    a20 = a[6],
                    a21 = a[7],
                    a22 = a[8],
                    b01 = a22 * a11 - a12 * a21,
                    b11 = -a22 * a10 + a12 * a20,
                    b21 = a21 * a10 - a11 * a20,
                    det = a00 * b01 + a01 * b11 + a02 * b21;
                return det ? (det = 1 / det, out[0] = b01 * det, out[1] = (-a22 * a01 + a02 * a21) * det, out[2] = (a12 * a01 - a02 * a11) * det, out[3] = b11 * det, out[4] = (a22 * a00 - a02 * a20) * det, out[5] = (-a12 * a00 + a02 * a10) * det, out[6] = b21 * det, out[7] = (-a21 * a00 + a01 * a20) * det, out[8] = (a11 * a00 - a01 * a10) * det, out) : null
            }

            function adjoint(out, a) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a10 = a[3],
                    a11 = a[4],
                    a12 = a[5],
                    a20 = a[6],
                    a21 = a[7],
                    a22 = a[8];
                return out[0] = a11 * a22 - a12 * a21, out[1] = a02 * a21 - a01 * a22, out[2] = a01 * a12 - a02 * a11, out[3] = a12 * a20 - a10 * a22, out[4] = a00 * a22 - a02 * a20, out[5] = a02 * a10 - a00 * a12, out[6] = a10 * a21 - a11 * a20, out[7] = a01 * a20 - a00 * a21, out[8] = a00 * a11 - a01 * a10, out
            }

            function determinant(a) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a10 = a[3],
                    a11 = a[4],
                    a12 = a[5],
                    a20 = a[6],
                    a21 = a[7],
                    a22 = a[8];
                return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20)
            }

            function multiply(out, a, b) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a10 = a[3],
                    a11 = a[4],
                    a12 = a[5],
                    a20 = a[6],
                    a21 = a[7],
                    a22 = a[8],
                    b00 = b[0],
                    b01 = b[1],
                    b02 = b[2],
                    b10 = b[3],
                    b11 = b[4],
                    b12 = b[5],
                    b20 = b[6],
                    b21 = b[7],
                    b22 = b[8];
                return out[0] = b00 * a00 + b01 * a10 + b02 * a20, out[1] = b00 * a01 + b01 * a11 + b02 * a21, out[2] = b00 * a02 + b01 * a12 + b02 * a22, out[3] = b10 * a00 + b11 * a10 + b12 * a20, out[4] = b10 * a01 + b11 * a11 + b12 * a21, out[5] = b10 * a02 + b11 * a12 + b12 * a22, out[6] = b20 * a00 + b21 * a10 + b22 * a20, out[7] = b20 * a01 + b21 * a11 + b22 * a21, out[8] = b20 * a02 + b21 * a12 + b22 * a22, out
            }

            function translate(out, a, v) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a10 = a[3],
                    a11 = a[4],
                    a12 = a[5],
                    a20 = a[6],
                    a21 = a[7],
                    a22 = a[8],
                    x = v[0],
                    y = v[1];
                return out[0] = a00, out[1] = a01, out[2] = a02, out[3] = a10, out[4] = a11, out[5] = a12, out[6] = x * a00 + y * a10 + a20, out[7] = x * a01 + y * a11 + a21, out[8] = x * a02 + y * a12 + a22, out
            }

            function rotate(out, a, rad) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a10 = a[3],
                    a11 = a[4],
                    a12 = a[5],
                    a20 = a[6],
                    a21 = a[7],
                    a22 = a[8],
                    s = Math.sin(rad),
                    c = Math.cos(rad);
                return out[0] = c * a00 + s * a10, out[1] = c * a01 + s * a11, out[2] = c * a02 + s * a12, out[3] = c * a10 - s * a00, out[4] = c * a11 - s * a01, out[5] = c * a12 - s * a02, out[6] = a20, out[7] = a21, out[8] = a22, out
            }

            function scale(out, a, v) {
                var x = v[0],
                    y = v[1];
                return out[0] = x * a[0], out[1] = x * a[1], out[2] = x * a[2], out[3] = y * a[3], out[4] = y * a[4], out[5] = y * a[5], out[6] = a[6], out[7] = a[7], out[8] = a[8], out
            }

            function fromTranslation(out, v) {
                return out[0] = 1, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 1, out[5] = 0, out[6] = v[0], out[7] = v[1], out[8] = 1, out
            }

            function fromRotation(out, rad) {
                var s = Math.sin(rad),
                    c = Math.cos(rad);
                return out[0] = c, out[1] = s, out[2] = 0, out[3] = -s, out[4] = c, out[5] = 0, out[6] = 0, out[7] = 0, out[8] = 1, out
            }

            function fromScaling(out, v) {
                return out[0] = v[0], out[1] = 0, out[2] = 0, out[3] = 0, out[4] = v[1], out[5] = 0, out[6] = 0, out[7] = 0, out[8] = 1, out
            }

            function fromMat2d(out, a) {
                return out[0] = a[0], out[1] = a[1], out[2] = 0, out[3] = a[2], out[4] = a[3], out[5] = 0, out[6] = a[4], out[7] = a[5], out[8] = 1, out
            }

            function fromQuat(out, q) {
                var x = q[0],
                    y = q[1],
                    z = q[2],
                    w = q[3],
                    x2 = x + x,
                    y2 = y + y,
                    z2 = z + z,
                    xx = x * x2,
                    yx = y * x2,
                    yy = y * y2,
                    zx = z * x2,
                    zy = z * y2,
                    zz = z * z2,
                    wx = w * x2,
                    wy = w * y2,
                    wz = w * z2;
                return out[0] = 1 - yy - zz, out[3] = yx - wz, out[6] = zx + wy, out[1] = yx + wz, out[4] = 1 - xx - zz, out[7] = zy - wx, out[2] = zx - wy, out[5] = zy + wx, out[8] = 1 - xx - yy, out
            }

            function normalFromMat4(out, a) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a03 = a[3],
                    a10 = a[4],
                    a11 = a[5],
                    a12 = a[6],
                    a13 = a[7],
                    a20 = a[8],
                    a21 = a[9],
                    a22 = a[10],
                    a23 = a[11],
                    a30 = a[12],
                    a31 = a[13],
                    a32 = a[14],
                    a33 = a[15],
                    b00 = a00 * a11 - a01 * a10,
                    b01 = a00 * a12 - a02 * a10,
                    b02 = a00 * a13 - a03 * a10,
                    b03 = a01 * a12 - a02 * a11,
                    b04 = a01 * a13 - a03 * a11,
                    b05 = a02 * a13 - a03 * a12,
                    b06 = a20 * a31 - a21 * a30,
                    b07 = a20 * a32 - a22 * a30,
                    b08 = a20 * a33 - a23 * a30,
                    b09 = a21 * a32 - a22 * a31,
                    b10 = a21 * a33 - a23 * a31,
                    b11 = a22 * a33 - a23 * a32,
                    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
                return det ? (det = 1 / det, out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det, out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det, out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det, out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det, out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det, out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det, out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det, out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det, out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det, out) : null
            }

            function projection(out, width, height) {
                return out[0] = 2 / width, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = -2 / height, out[5] = 0, out[6] = -1, out[7] = 1, out[8] = 1, out
            }

            function str(a) {
                return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")"
            }

            function frob(a) {
                return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2))
            }

            function add(out, a, b) {
                return out[0] = a[0] + b[0], out[1] = a[1] + b[1], out[2] = a[2] + b[2], out[3] = a[3] + b[3], out[4] = a[4] + b[4], out[5] = a[5] + b[5], out[6] = a[6] + b[6], out[7] = a[7] + b[7], out[8] = a[8] + b[8], out
            }

            function subtract(out, a, b) {
                return out[0] = a[0] - b[0], out[1] = a[1] - b[1], out[2] = a[2] - b[2], out[3] = a[3] - b[3], out[4] = a[4] - b[4], out[5] = a[5] - b[5], out[6] = a[6] - b[6], out[7] = a[7] - b[7], out[8] = a[8] - b[8], out
            }

            function multiplyScalar(out, a, b) {
                return out[0] = a[0] * b, out[1] = a[1] * b, out[2] = a[2] * b, out[3] = a[3] * b, out[4] = a[4] * b, out[5] = a[5] * b, out[6] = a[6] * b, out[7] = a[7] * b, out[8] = a[8] * b, out
            }

            function multiplyScalarAndAdd(out, a, b, scale) {
                return out[0] = a[0] + b[0] * scale, out[1] = a[1] + b[1] * scale, out[2] = a[2] + b[2] * scale, out[3] = a[3] + b[3] * scale, out[4] = a[4] + b[4] * scale, out[5] = a[5] + b[5] * scale, out[6] = a[6] + b[6] * scale, out[7] = a[7] + b[7] * scale, out[8] = a[8] + b[8] * scale, out
            }

            function exactEquals(a, b) {
                return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8]
            }

            function equals(a, b) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    a4 = a[4],
                    a5 = a[5],
                    a6 = a[6],
                    a7 = a[7],
                    a8 = a[8],
                    b0 = b[0],
                    b1 = b[1],
                    b2 = b[2],
                    b3 = b[3],
                    b4 = b[4],
                    b5 = b[5],
                    b6 = b[6],
                    b7 = b[7],
                    b8 = b[8];
                return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8))
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.sub = exports.mul = void 0, exports.create = create, exports.fromMat4 = fromMat4, exports.clone = clone, exports.copy = copy, exports.fromValues = fromValues, exports.set = set, exports.identity = identity, exports.transpose = transpose, exports.invert = invert, exports.adjoint = adjoint, exports.determinant = determinant, exports.multiply = multiply, exports.translate = translate, exports.rotate = rotate, exports.scale = scale, exports.fromTranslation = fromTranslation, exports.fromRotation = fromRotation, exports.fromScaling = fromScaling, exports.fromMat2d = fromMat2d, exports.fromQuat = fromQuat, exports.normalFromMat4 = normalFromMat4, exports.projection = projection, exports.str = str, exports.frob = frob, exports.add = add, exports.subtract = subtract, exports.multiplyScalar = multiplyScalar, exports.multiplyScalarAndAdd = multiplyScalarAndAdd, exports.exactEquals = exactEquals, exports.equals = equals;
            var _common = __webpack_require__(0),
                glMatrix = _interopRequireWildcard(_common);
            exports.mul = multiply, exports.sub = subtract
        }, function(module, exports, __webpack_require__) {
            "use strict";

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj)
                    for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj
            }

            function create() {
                var out = new glMatrix.ARRAY_TYPE(3);
                return out[0] = 0, out[1] = 0, out[2] = 0, out
            }

            function clone(a) {
                var out = new glMatrix.ARRAY_TYPE(3);
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out
            }

            function length(a) {
                var x = a[0],
                    y = a[1],
                    z = a[2];
                return Math.sqrt(x * x + y * y + z * z)
            }

            function fromValues(x, y, z) {
                var out = new glMatrix.ARRAY_TYPE(3);
                return out[0] = x, out[1] = y, out[2] = z, out
            }

            function copy(out, a) {
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out
            }

            function set(out, x, y, z) {
                return out[0] = x, out[1] = y, out[2] = z, out
            }

            function add(out, a, b) {
                return out[0] = a[0] + b[0], out[1] = a[1] + b[1], out[2] = a[2] + b[2], out
            }

            function subtract(out, a, b) {
                return out[0] = a[0] - b[0], out[1] = a[1] - b[1], out[2] = a[2] - b[2], out
            }

            function multiply(out, a, b) {
                return out[0] = a[0] * b[0], out[1] = a[1] * b[1], out[2] = a[2] * b[2], out
            }

            function divide(out, a, b) {
                return out[0] = a[0] / b[0], out[1] = a[1] / b[1], out[2] = a[2] / b[2], out
            }

            function ceil(out, a) {
                return out[0] = Math.ceil(a[0]), out[1] = Math.ceil(a[1]), out[2] = Math.ceil(a[2]), out
            }

            function floor(out, a) {
                return out[0] = Math.floor(a[0]), out[1] = Math.floor(a[1]), out[2] = Math.floor(a[2]), out
            }

            function min(out, a, b) {
                return out[0] = Math.min(a[0], b[0]), out[1] = Math.min(a[1], b[1]), out[2] = Math.min(a[2], b[2]), out
            }

            function max(out, a, b) {
                return out[0] = Math.max(a[0], b[0]), out[1] = Math.max(a[1], b[1]), out[2] = Math.max(a[2], b[2]), out
            }

            function round(out, a) {
                return out[0] = Math.round(a[0]), out[1] = Math.round(a[1]), out[2] = Math.round(a[2]), out
            }

            function scale(out, a, b) {
                return out[0] = a[0] * b, out[1] = a[1] * b, out[2] = a[2] * b, out
            }

            function scaleAndAdd(out, a, b, scale) {
                return out[0] = a[0] + b[0] * scale, out[1] = a[1] + b[1] * scale, out[2] = a[2] + b[2] * scale, out
            }

            function distance(a, b) {
                var x = b[0] - a[0],
                    y = b[1] - a[1],
                    z = b[2] - a[2];
                return Math.sqrt(x * x + y * y + z * z)
            }

            function squaredDistance(a, b) {
                var x = b[0] - a[0],
                    y = b[1] - a[1],
                    z = b[2] - a[2];
                return x * x + y * y + z * z
            }

            function squaredLength(a) {
                var x = a[0],
                    y = a[1],
                    z = a[2];
                return x * x + y * y + z * z
            }

            function negate(out, a) {
                return out[0] = -a[0], out[1] = -a[1], out[2] = -a[2], out
            }

            function inverse(out, a) {
                return out[0] = 1 / a[0], out[1] = 1 / a[1], out[2] = 1 / a[2], out
            }

            function normalize(out, a) {
                var x = a[0],
                    y = a[1],
                    z = a[2],
                    len = x * x + y * y + z * z;
                return len > 0 && (len = 1 / Math.sqrt(len), out[0] = a[0] * len, out[1] = a[1] * len, out[2] = a[2] * len), out
            }

            function dot(a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
            }

            function cross(out, a, b) {
                var ax = a[0],
                    ay = a[1],
                    az = a[2],
                    bx = b[0],
                    by = b[1],
                    bz = b[2];
                return out[0] = ay * bz - az * by, out[1] = az * bx - ax * bz, out[2] = ax * by - ay * bx, out
            }

            function lerp(out, a, b, t) {
                var ax = a[0],
                    ay = a[1],
                    az = a[2];
                return out[0] = ax + t * (b[0] - ax), out[1] = ay + t * (b[1] - ay), out[2] = az + t * (b[2] - az), out
            }

            function hermite(out, a, b, c, d, t) {
                var factorTimes2 = t * t,
                    factor1 = factorTimes2 * (2 * t - 3) + 1,
                    factor2 = factorTimes2 * (t - 2) + t,
                    factor3 = factorTimes2 * (t - 1),
                    factor4 = factorTimes2 * (3 - 2 * t);
                return out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4, out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4, out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4, out
            }

            function bezier(out, a, b, c, d, t) {
                var inverseFactor = 1 - t,
                    inverseFactorTimesTwo = inverseFactor * inverseFactor,
                    factorTimes2 = t * t,
                    factor1 = inverseFactorTimesTwo * inverseFactor,
                    factor2 = 3 * t * inverseFactorTimesTwo,
                    factor3 = 3 * factorTimes2 * inverseFactor,
                    factor4 = factorTimes2 * t;
                return out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4, out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4, out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4, out
            }

            function random(out, scale) {
                scale = scale || 1;
                var r = 2 * glMatrix.RANDOM() * Math.PI,
                    z = 2 * glMatrix.RANDOM() - 1,
                    zScale = Math.sqrt(1 - z * z) * scale;
                return out[0] = Math.cos(r) * zScale, out[1] = Math.sin(r) * zScale, out[2] = z * scale, out
            }

            function transformMat4(out, a, m) {
                var x = a[0],
                    y = a[1],
                    z = a[2],
                    w = m[3] * x + m[7] * y + m[11] * z + m[15];
                return w = w || 1, out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w, out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w, out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w, out
            }

            function transformMat3(out, a, m) {
                var x = a[0],
                    y = a[1],
                    z = a[2];
                return out[0] = x * m[0] + y * m[3] + z * m[6], out[1] = x * m[1] + y * m[4] + z * m[7], out[2] = x * m[2] + y * m[5] + z * m[8], out
            }

            function transformQuat(out, a, q) {
                var x = a[0],
                    y = a[1],
                    z = a[2],
                    qx = q[0],
                    qy = q[1],
                    qz = q[2],
                    qw = q[3],
                    ix = qw * x + qy * z - qz * y,
                    iy = qw * y + qz * x - qx * z,
                    iz = qw * z + qx * y - qy * x,
                    iw = -qx * x - qy * y - qz * z;
                return out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy, out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz, out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx, out
            }

            function rotateX(out, a, b, c) {
                var p = [],
                    r = [];
                return p[0] = a[0] - b[0], p[1] = a[1] - b[1], p[2] = a[2] - b[2], r[0] = p[0], r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c), r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c), out[0] = r[0] + b[0], out[1] = r[1] + b[1], out[2] = r[2] + b[2], out
            }

            function rotateY(out, a, b, c) {
                var p = [],
                    r = [];
                return p[0] = a[0] - b[0], p[1] = a[1] - b[1], p[2] = a[2] - b[2], r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c), r[1] = p[1], r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c), out[0] = r[0] + b[0], out[1] = r[1] + b[1], out[2] = r[2] + b[2], out
            }

            function rotateZ(out, a, b, c) {
                var p = [],
                    r = [];
                return p[0] = a[0] - b[0], p[1] = a[1] - b[1], p[2] = a[2] - b[2], r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c), r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c), r[2] = p[2], out[0] = r[0] + b[0], out[1] = r[1] + b[1], out[2] = r[2] + b[2], out
            }

            function angle(a, b) {
                var tempA = fromValues(a[0], a[1], a[2]),
                    tempB = fromValues(b[0], b[1], b[2]);
                normalize(tempA, tempA), normalize(tempB, tempB);
                var cosine = dot(tempA, tempB);
                return cosine > 1 ? 0 : cosine < -1 ? Math.PI : Math.acos(cosine)
            }

            function str(a) {
                return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")"
            }

            function exactEquals(a, b) {
                return a[0] === b[0] && a[1] === b[1] && a[2] === b[2]
            }

            function equals(a, b) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    b0 = b[0],
                    b1 = b[1],
                    b2 = b[2];
                return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2))
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = void 0, exports.create = create, exports.clone = clone, exports.length = length, exports.fromValues = fromValues, exports.copy = copy, exports.set = set, exports.add = add, exports.subtract = subtract, exports.multiply = multiply, exports.divide = divide, exports.ceil = ceil, exports.floor = floor, exports.min = min, exports.max = max, exports.round = round, exports.scale = scale, exports.scaleAndAdd = scaleAndAdd, exports.distance = distance, exports.squaredDistance = squaredDistance, exports.squaredLength = squaredLength, exports.negate = negate, exports.inverse = inverse, exports.normalize = normalize, exports.dot = dot, exports.cross = cross, exports.lerp = lerp, exports.hermite = hermite, exports.bezier = bezier, exports.random = random, exports.transformMat4 = transformMat4, exports.transformMat3 = transformMat3, exports.transformQuat = transformQuat, exports.rotateX = rotateX, exports.rotateY = rotateY, exports.rotateZ = rotateZ, exports.angle = angle, exports.str = str, exports.exactEquals = exactEquals, exports.equals = equals;
            var _common = __webpack_require__(0),
                glMatrix = _interopRequireWildcard(_common);
            exports.sub = subtract, exports.mul = multiply, exports.div = divide, exports.dist = distance, exports.sqrDist = squaredDistance, exports.len = length, exports.sqrLen = squaredLength, exports.forEach = function() {
                var vec = create();
                return function(a, stride, offset, count, fn, arg) {
                    var i = void 0,
                        l = void 0;
                    for (stride || (stride = 3), offset || (offset = 0), l = count ? Math.min(count * stride + offset, a.length) : a.length, i = offset; i < l; i += stride) vec[0] = a[i], vec[1] = a[i + 1], vec[2] = a[i + 2], fn(vec, vec, arg), a[i] = vec[0], a[i + 1] = vec[1], a[i + 2] = vec[2];
                    return a
                }
            }()
        }, function(module, exports, __webpack_require__) {
            "use strict";

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj)
                    for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj
            }

            function create() {
                var out = new glMatrix.ARRAY_TYPE(4);
                return out[0] = 0, out[1] = 0, out[2] = 0, out[3] = 0, out
            }

            function clone(a) {
                var out = new glMatrix.ARRAY_TYPE(4);
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[3], out
            }

            function fromValues(x, y, z, w) {
                var out = new glMatrix.ARRAY_TYPE(4);
                return out[0] = x, out[1] = y, out[2] = z, out[3] = w, out
            }

            function copy(out, a) {
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[3], out
            }

            function set(out, x, y, z, w) {
                return out[0] = x, out[1] = y, out[2] = z, out[3] = w, out
            }

            function add(out, a, b) {
                return out[0] = a[0] + b[0], out[1] = a[1] + b[1], out[2] = a[2] + b[2], out[3] = a[3] + b[3], out
            }

            function subtract(out, a, b) {
                return out[0] = a[0] - b[0], out[1] = a[1] - b[1], out[2] = a[2] - b[2], out[3] = a[3] - b[3], out
            }

            function multiply(out, a, b) {
                return out[0] = a[0] * b[0], out[1] = a[1] * b[1], out[2] = a[2] * b[2], out[3] = a[3] * b[3], out
            }

            function divide(out, a, b) {
                return out[0] = a[0] / b[0], out[1] = a[1] / b[1], out[2] = a[2] / b[2], out[3] = a[3] / b[3], out
            }

            function ceil(out, a) {
                return out[0] = Math.ceil(a[0]), out[1] = Math.ceil(a[1]), out[2] = Math.ceil(a[2]), out[3] = Math.ceil(a[3]), out
            }

            function floor(out, a) {
                return out[0] = Math.floor(a[0]), out[1] = Math.floor(a[1]), out[2] = Math.floor(a[2]), out[3] = Math.floor(a[3]), out
            }

            function min(out, a, b) {
                return out[0] = Math.min(a[0], b[0]), out[1] = Math.min(a[1], b[1]), out[2] = Math.min(a[2], b[2]), out[3] = Math.min(a[3], b[3]), out
            }

            function max(out, a, b) {
                return out[0] = Math.max(a[0], b[0]), out[1] = Math.max(a[1], b[1]), out[2] = Math.max(a[2], b[2]), out[3] = Math.max(a[3], b[3]), out
            }

            function round(out, a) {
                return out[0] = Math.round(a[0]), out[1] = Math.round(a[1]), out[2] = Math.round(a[2]), out[3] = Math.round(a[3]), out
            }

            function scale(out, a, b) {
                return out[0] = a[0] * b, out[1] = a[1] * b, out[2] = a[2] * b, out[3] = a[3] * b, out
            }

            function scaleAndAdd(out, a, b, scale) {
                return out[0] = a[0] + b[0] * scale, out[1] = a[1] + b[1] * scale, out[2] = a[2] + b[2] * scale, out[3] = a[3] + b[3] * scale, out
            }

            function distance(a, b) {
                var x = b[0] - a[0],
                    y = b[1] - a[1],
                    z = b[2] - a[2],
                    w = b[3] - a[3];
                return Math.sqrt(x * x + y * y + z * z + w * w)
            }

            function squaredDistance(a, b) {
                var x = b[0] - a[0],
                    y = b[1] - a[1],
                    z = b[2] - a[2],
                    w = b[3] - a[3];
                return x * x + y * y + z * z + w * w
            }

            function length(a) {
                var x = a[0],
                    y = a[1],
                    z = a[2],
                    w = a[3];
                return Math.sqrt(x * x + y * y + z * z + w * w)
            }

            function squaredLength(a) {
                var x = a[0],
                    y = a[1],
                    z = a[2],
                    w = a[3];
                return x * x + y * y + z * z + w * w
            }

            function negate(out, a) {
                return out[0] = -a[0], out[1] = -a[1], out[2] = -a[2], out[3] = -a[3], out
            }

            function inverse(out, a) {
                return out[0] = 1 / a[0], out[1] = 1 / a[1], out[2] = 1 / a[2], out[3] = 1 / a[3], out
            }

            function normalize(out, a) {
                var x = a[0],
                    y = a[1],
                    z = a[2],
                    w = a[3],
                    len = x * x + y * y + z * z + w * w;
                return len > 0 && (len = 1 / Math.sqrt(len), out[0] = x * len, out[1] = y * len, out[2] = z * len, out[3] = w * len), out
            }

            function dot(a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
            }

            function lerp(out, a, b, t) {
                var ax = a[0],
                    ay = a[1],
                    az = a[2],
                    aw = a[3];
                return out[0] = ax + t * (b[0] - ax), out[1] = ay + t * (b[1] - ay), out[2] = az + t * (b[2] - az), out[3] = aw + t * (b[3] - aw), out
            }

            function random(out, vectorScale) {
                return vectorScale = vectorScale || 1, out[0] = glMatrix.RANDOM(), out[1] = glMatrix.RANDOM(), out[2] = glMatrix.RANDOM(), out[3] = glMatrix.RANDOM(), normalize(out, out), scale(out, out, vectorScale), out
            }

            function transformMat4(out, a, m) {
                var x = a[0],
                    y = a[1],
                    z = a[2],
                    w = a[3];
                return out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w, out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w, out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w, out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w, out
            }

            function transformQuat(out, a, q) {
                var x = a[0],
                    y = a[1],
                    z = a[2],
                    qx = q[0],
                    qy = q[1],
                    qz = q[2],
                    qw = q[3],
                    ix = qw * x + qy * z - qz * y,
                    iy = qw * y + qz * x - qx * z,
                    iz = qw * z + qx * y - qy * x,
                    iw = -qx * x - qy * y - qz * z;
                return out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy, out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz, out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx, out[3] = a[3], out
            }

            function str(a) {
                return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
            }

            function exactEquals(a, b) {
                return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3]
            }

            function equals(a, b) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    b0 = b[0],
                    b1 = b[1],
                    b2 = b[2],
                    b3 = b[3];
                return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3))
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = void 0, exports.create = create, exports.clone = clone, exports.fromValues = fromValues, exports.copy = copy, exports.set = set, exports.add = add, exports.subtract = subtract, exports.multiply = multiply, exports.divide = divide, exports.ceil = ceil, exports.floor = floor, exports.min = min, exports.max = max, exports.round = round, exports.scale = scale, exports.scaleAndAdd = scaleAndAdd, exports.distance = distance, exports.squaredDistance = squaredDistance, exports.length = length, exports.squaredLength = squaredLength, exports.negate = negate, exports.inverse = inverse, exports.normalize = normalize, exports.dot = dot, exports.lerp = lerp, exports.random = random, exports.transformMat4 = transformMat4, exports.transformQuat = transformQuat, exports.str = str, exports.exactEquals = exactEquals, exports.equals = equals;
            var _common = __webpack_require__(0),
                glMatrix = _interopRequireWildcard(_common);
            exports.sub = subtract, exports.mul = multiply, exports.div = divide, exports.dist = distance, exports.sqrDist = squaredDistance, exports.len = length, exports.sqrLen = squaredLength, exports.forEach = function() {
                var vec = create();
                return function(a, stride, offset, count, fn, arg) {
                    var i = void 0,
                        l = void 0;
                    for (stride || (stride = 4), offset || (offset = 0), l = count ? Math.min(count * stride + offset, a.length) : a.length, i = offset; i < l; i += stride) vec[0] = a[i], vec[1] = a[i + 1], vec[2] = a[i + 2], vec[3] = a[i + 3], fn(vec, vec, arg), a[i] = vec[0], a[i + 1] = vec[1], a[i + 2] = vec[2], a[i + 3] = vec[3];
                    return a
                }
            }()
        }, function(module, exports, __webpack_require__) {
            "use strict";

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj)
                    for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.vec4 = exports.vec3 = exports.vec2 = exports.quat = exports.mat4 = exports.mat3 = exports.mat2d = exports.mat2 = exports.glMatrix = void 0;
            var _common = __webpack_require__(0),
                glMatrix = _interopRequireWildcard(_common),
                _mat = __webpack_require__(5),
                mat2 = _interopRequireWildcard(_mat),
                _mat2d = __webpack_require__(6),
                mat2d = _interopRequireWildcard(_mat2d),
                _mat2 = __webpack_require__(1),
                mat3 = _interopRequireWildcard(_mat2),
                _mat3 = __webpack_require__(7),
                mat4 = _interopRequireWildcard(_mat3),
                _quat = __webpack_require__(8),
                quat = _interopRequireWildcard(_quat),
                _vec = __webpack_require__(9),
                vec2 = _interopRequireWildcard(_vec),
                _vec2 = __webpack_require__(2),
                vec3 = _interopRequireWildcard(_vec2),
                _vec3 = __webpack_require__(3),
                vec4 = _interopRequireWildcard(_vec3);
            exports.glMatrix = glMatrix, exports.mat2 = mat2, exports.mat2d = mat2d, exports.mat3 = mat3, exports.mat4 = mat4, exports.quat = quat, exports.vec2 = vec2, exports.vec3 = vec3, exports.vec4 = vec4
        }, function(module, exports, __webpack_require__) {
            "use strict";

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj)
                    for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj
            }

            function create() {
                var out = new glMatrix.ARRAY_TYPE(4);
                return out[0] = 1, out[1] = 0, out[2] = 0, out[3] = 1, out
            }

            function clone(a) {
                var out = new glMatrix.ARRAY_TYPE(4);
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[3], out
            }

            function copy(out, a) {
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[3], out
            }

            function identity(out) {
                return out[0] = 1, out[1] = 0, out[2] = 0, out[3] = 1, out
            }

            function fromValues(m00, m01, m10, m11) {
                var out = new glMatrix.ARRAY_TYPE(4);
                return out[0] = m00, out[1] = m01, out[2] = m10, out[3] = m11, out
            }

            function set(out, m00, m01, m10, m11) {
                return out[0] = m00, out[1] = m01, out[2] = m10, out[3] = m11, out
            }

            function transpose(out, a) {
                if (out === a) {
                    var a1 = a[1];
                    out[1] = a[2], out[2] = a1
                } else out[0] = a[0], out[1] = a[2], out[2] = a[1], out[3] = a[3];
                return out
            }

            function invert(out, a) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    det = a0 * a3 - a2 * a1;
                return det ? (det = 1 / det, out[0] = a3 * det, out[1] = -a1 * det, out[2] = -a2 * det, out[3] = a0 * det, out) : null
            }

            function adjoint(out, a) {
                var a0 = a[0];
                return out[0] = a[3], out[1] = -a[1], out[2] = -a[2], out[3] = a0, out
            }

            function determinant(a) {
                return a[0] * a[3] - a[2] * a[1]
            }

            function multiply(out, a, b) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    b0 = b[0],
                    b1 = b[1],
                    b2 = b[2],
                    b3 = b[3];
                return out[0] = a0 * b0 + a2 * b1, out[1] = a1 * b0 + a3 * b1, out[2] = a0 * b2 + a2 * b3, out[3] = a1 * b2 + a3 * b3, out
            }

            function rotate(out, a, rad) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    s = Math.sin(rad),
                    c = Math.cos(rad);
                return out[0] = a0 * c + a2 * s, out[1] = a1 * c + a3 * s, out[2] = a0 * -s + a2 * c, out[3] = a1 * -s + a3 * c, out
            }

            function scale(out, a, v) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    v0 = v[0],
                    v1 = v[1];
                return out[0] = a0 * v0, out[1] = a1 * v0, out[2] = a2 * v1, out[3] = a3 * v1, out
            }

            function fromRotation(out, rad) {
                var s = Math.sin(rad),
                    c = Math.cos(rad);
                return out[0] = c, out[1] = s, out[2] = -s, out[3] = c, out
            }

            function fromScaling(out, v) {
                return out[0] = v[0], out[1] = 0, out[2] = 0, out[3] = v[1], out
            }

            function str(a) {
                return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
            }

            function frob(a) {
                return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2))
            }

            function LDU(L, D, U, a) {
                return L[2] = a[2] / a[0], U[0] = a[0], U[1] = a[1], U[3] = a[3] - L[2] * U[1], [L, D, U]
            }

            function add(out, a, b) {
                return out[0] = a[0] + b[0], out[1] = a[1] + b[1], out[2] = a[2] + b[2], out[3] = a[3] + b[3], out
            }

            function subtract(out, a, b) {
                return out[0] = a[0] - b[0], out[1] = a[1] - b[1], out[2] = a[2] - b[2], out[3] = a[3] - b[3], out
            }

            function exactEquals(a, b) {
                return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3]
            }

            function equals(a, b) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    b0 = b[0],
                    b1 = b[1],
                    b2 = b[2],
                    b3 = b[3];
                return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3))
            }

            function multiplyScalar(out, a, b) {
                return out[0] = a[0] * b, out[1] = a[1] * b, out[2] = a[2] * b, out[3] = a[3] * b, out
            }

            function multiplyScalarAndAdd(out, a, b, scale) {
                return out[0] = a[0] + b[0] * scale, out[1] = a[1] + b[1] * scale, out[2] = a[2] + b[2] * scale, out[3] = a[3] + b[3] * scale, out
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.sub = exports.mul = void 0, exports.create = create, exports.clone = clone, exports.copy = copy, exports.identity = identity, exports.fromValues = fromValues, exports.set = set, exports.transpose = transpose, exports.invert = invert, exports.adjoint = adjoint, exports.determinant = determinant, exports.multiply = multiply, exports.rotate = rotate, exports.scale = scale, exports.fromRotation = fromRotation, exports.fromScaling = fromScaling, exports.str = str, exports.frob = frob, exports.LDU = LDU, exports.add = add, exports.subtract = subtract, exports.exactEquals = exactEquals, exports.equals = equals, exports.multiplyScalar = multiplyScalar, exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
            var _common = __webpack_require__(0),
                glMatrix = _interopRequireWildcard(_common);
            exports.mul = multiply, exports.sub = subtract
        }, function(module, exports, __webpack_require__) {
            "use strict";

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj)
                    for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj
            }

            function create() {
                var out = new glMatrix.ARRAY_TYPE(6);
                return out[0] = 1, out[1] = 0, out[2] = 0, out[3] = 1, out[4] = 0, out[5] = 0, out
            }

            function clone(a) {
                var out = new glMatrix.ARRAY_TYPE(6);
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[3], out[4] = a[4], out[5] = a[5], out
            }

            function copy(out, a) {
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[3], out[4] = a[4], out[5] = a[5], out
            }

            function identity(out) {
                return out[0] = 1, out[1] = 0, out[2] = 0, out[3] = 1, out[4] = 0, out[5] = 0, out
            }

            function fromValues(a, b, c, d, tx, ty) {
                var out = new glMatrix.ARRAY_TYPE(6);
                return out[0] = a, out[1] = b, out[2] = c, out[3] = d, out[4] = tx, out[5] = ty, out
            }

            function set(out, a, b, c, d, tx, ty) {
                return out[0] = a, out[1] = b, out[2] = c, out[3] = d, out[4] = tx, out[5] = ty, out
            }

            function invert(out, a) {
                var aa = a[0],
                    ab = a[1],
                    ac = a[2],
                    ad = a[3],
                    atx = a[4],
                    aty = a[5],
                    det = aa * ad - ab * ac;
                return det ? (det = 1 / det, out[0] = ad * det, out[1] = -ab * det, out[2] = -ac * det, out[3] = aa * det, out[4] = (ac * aty - ad * atx) * det, out[5] = (ab * atx - aa * aty) * det, out) : null
            }

            function determinant(a) {
                return a[0] * a[3] - a[1] * a[2]
            }

            function multiply(out, a, b) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    a4 = a[4],
                    a5 = a[5],
                    b0 = b[0],
                    b1 = b[1],
                    b2 = b[2],
                    b3 = b[3],
                    b4 = b[4],
                    b5 = b[5];
                return out[0] = a0 * b0 + a2 * b1, out[1] = a1 * b0 + a3 * b1, out[2] = a0 * b2 + a2 * b3, out[3] = a1 * b2 + a3 * b3, out[4] = a0 * b4 + a2 * b5 + a4, out[5] = a1 * b4 + a3 * b5 + a5, out
            }

            function rotate(out, a, rad) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    a4 = a[4],
                    a5 = a[5],
                    s = Math.sin(rad),
                    c = Math.cos(rad);
                return out[0] = a0 * c + a2 * s, out[1] = a1 * c + a3 * s, out[2] = a0 * -s + a2 * c, out[3] = a1 * -s + a3 * c, out[4] = a4, out[5] = a5, out
            }

            function scale(out, a, v) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    a4 = a[4],
                    a5 = a[5],
                    v0 = v[0],
                    v1 = v[1];
                return out[0] = a0 * v0, out[1] = a1 * v0, out[2] = a2 * v1, out[3] = a3 * v1, out[4] = a4, out[5] = a5, out
            }

            function translate(out, a, v) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    a4 = a[4],
                    a5 = a[5],
                    v0 = v[0],
                    v1 = v[1];
                return out[0] = a0, out[1] = a1, out[2] = a2, out[3] = a3, out[4] = a0 * v0 + a2 * v1 + a4, out[5] = a1 * v0 + a3 * v1 + a5, out
            }

            function fromRotation(out, rad) {
                var s = Math.sin(rad),
                    c = Math.cos(rad);
                return out[0] = c, out[1] = s, out[2] = -s, out[3] = c, out[4] = 0, out[5] = 0, out
            }

            function fromScaling(out, v) {
                return out[0] = v[0], out[1] = 0, out[2] = 0, out[3] = v[1], out[4] = 0, out[5] = 0, out
            }

            function fromTranslation(out, v) {
                return out[0] = 1, out[1] = 0, out[2] = 0, out[3] = 1, out[4] = v[0], out[5] = v[1], out
            }

            function str(a) {
                return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")"
            }

            function frob(a) {
                return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1)
            }

            function add(out, a, b) {
                return out[0] = a[0] + b[0], out[1] = a[1] + b[1], out[2] = a[2] + b[2], out[3] = a[3] + b[3], out[4] = a[4] + b[4], out[5] = a[5] + b[5], out
            }

            function subtract(out, a, b) {
                return out[0] = a[0] - b[0], out[1] = a[1] - b[1], out[2] = a[2] - b[2], out[3] = a[3] - b[3], out[4] = a[4] - b[4], out[5] = a[5] - b[5], out
            }

            function multiplyScalar(out, a, b) {
                return out[0] = a[0] * b, out[1] = a[1] * b, out[2] = a[2] * b, out[3] = a[3] * b, out[4] = a[4] * b, out[5] = a[5] * b, out
            }

            function multiplyScalarAndAdd(out, a, b, scale) {
                return out[0] = a[0] + b[0] * scale, out[1] = a[1] + b[1] * scale, out[2] = a[2] + b[2] * scale, out[3] = a[3] + b[3] * scale, out[4] = a[4] + b[4] * scale, out[5] = a[5] + b[5] * scale, out
            }

            function exactEquals(a, b) {
                return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5]
            }

            function equals(a, b) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    a4 = a[4],
                    a5 = a[5],
                    b0 = b[0],
                    b1 = b[1],
                    b2 = b[2],
                    b3 = b[3],
                    b4 = b[4],
                    b5 = b[5];
                return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5))
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.sub = exports.mul = void 0, exports.create = create, exports.clone = clone, exports.copy = copy, exports.identity = identity, exports.fromValues = fromValues, exports.set = set, exports.invert = invert, exports.determinant = determinant, exports.multiply = multiply, exports.rotate = rotate, exports.scale = scale, exports.translate = translate, exports.fromRotation = fromRotation, exports.fromScaling = fromScaling, exports.fromTranslation = fromTranslation, exports.str = str, exports.frob = frob, exports.add = add, exports.subtract = subtract, exports.multiplyScalar = multiplyScalar, exports.multiplyScalarAndAdd = multiplyScalarAndAdd, exports.exactEquals = exactEquals, exports.equals = equals;
            var _common = __webpack_require__(0),
                glMatrix = _interopRequireWildcard(_common);
            exports.mul = multiply, exports.sub = subtract
        }, function(module, exports, __webpack_require__) {
            "use strict";

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj)
                    for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj
            }

            function create() {
                var out = new glMatrix.ARRAY_TYPE(16);
                return out[0] = 1, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = 1, out[6] = 0, out[7] = 0, out[8] = 0, out[9] = 0, out[10] = 1, out[11] = 0, out[12] = 0, out[13] = 0, out[14] = 0, out[15] = 1, out
            }

            function clone(a) {
                var out = new glMatrix.ARRAY_TYPE(16);
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[3], out[4] = a[4], out[5] = a[5], out[6] = a[6], out[7] = a[7], out[8] = a[8], out[9] = a[9], out[10] = a[10], out[11] = a[11], out[12] = a[12], out[13] = a[13], out[14] = a[14], out[15] = a[15], out
            }

            function copy(out, a) {
                return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[3], out[4] = a[4], out[5] = a[5], out[6] = a[6], out[7] = a[7], out[8] = a[8], out[9] = a[9], out[10] = a[10], out[11] = a[11], out[12] = a[12], out[13] = a[13], out[14] = a[14], out[15] = a[15], out
            }

            function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
                var out = new glMatrix.ARRAY_TYPE(16);
                return out[0] = m00, out[1] = m01, out[2] = m02, out[3] = m03, out[4] = m10, out[5] = m11, out[6] = m12, out[7] = m13, out[8] = m20, out[9] = m21, out[10] = m22, out[11] = m23, out[12] = m30, out[13] = m31, out[14] = m32, out[15] = m33, out
            }

            function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
                return out[0] = m00, out[1] = m01, out[2] = m02, out[3] = m03, out[4] = m10, out[5] = m11, out[6] = m12, out[7] = m13, out[8] = m20, out[9] = m21, out[10] = m22, out[11] = m23, out[12] = m30, out[13] = m31, out[14] = m32, out[15] = m33, out
            }

            function identity(out) {
                return out[0] = 1, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = 1, out[6] = 0, out[7] = 0, out[8] = 0, out[9] = 0, out[10] = 1, out[11] = 0, out[12] = 0, out[13] = 0, out[14] = 0, out[15] = 1, out
            }

            function transpose(out, a) {
                if (out === a) {
                    var a01 = a[1],
                        a02 = a[2],
                        a03 = a[3],
                        a12 = a[6],
                        a13 = a[7],
                        a23 = a[11];
                    out[1] = a[4], out[2] = a[8], out[3] = a[12], out[4] = a01, out[6] = a[9], out[7] = a[13], out[8] = a02, out[9] = a12, out[11] = a[14], out[12] = a03, out[13] = a13, out[14] = a23
                } else out[0] = a[0], out[1] = a[4], out[2] = a[8], out[3] = a[12], out[4] = a[1], out[5] = a[5], out[6] = a[9], out[7] = a[13], out[8] = a[2], out[9] = a[6], out[10] = a[10], out[11] = a[14], out[12] = a[3], out[13] = a[7], out[14] = a[11], out[15] = a[15];
                return out
            }

            function invert(out, a) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a03 = a[3],
                    a10 = a[4],
                    a11 = a[5],
                    a12 = a[6],
                    a13 = a[7],
                    a20 = a[8],
                    a21 = a[9],
                    a22 = a[10],
                    a23 = a[11],
                    a30 = a[12],
                    a31 = a[13],
                    a32 = a[14],
                    a33 = a[15],
                    b00 = a00 * a11 - a01 * a10,
                    b01 = a00 * a12 - a02 * a10,
                    b02 = a00 * a13 - a03 * a10,
                    b03 = a01 * a12 - a02 * a11,
                    b04 = a01 * a13 - a03 * a11,
                    b05 = a02 * a13 - a03 * a12,
                    b06 = a20 * a31 - a21 * a30,
                    b07 = a20 * a32 - a22 * a30,
                    b08 = a20 * a33 - a23 * a30,
                    b09 = a21 * a32 - a22 * a31,
                    b10 = a21 * a33 - a23 * a31,
                    b11 = a22 * a33 - a23 * a32,
                    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
                return det ? (det = 1 / det, out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det, out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det, out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det, out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det, out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det, out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det, out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det, out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det, out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det, out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det, out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det, out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det, out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det, out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det, out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det, out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det, out) : null
            }

            function adjoint(out, a) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a03 = a[3],
                    a10 = a[4],
                    a11 = a[5],
                    a12 = a[6],
                    a13 = a[7],
                    a20 = a[8],
                    a21 = a[9],
                    a22 = a[10],
                    a23 = a[11],
                    a30 = a[12],
                    a31 = a[13],
                    a32 = a[14],
                    a33 = a[15];
                return out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22), out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22)), out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12), out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12)), out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22)), out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22), out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12)), out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12), out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21), out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21)), out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11), out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11)), out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21)), out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21), out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11)), out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11), out
            }

            function determinant(a) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a03 = a[3],
                    a10 = a[4],
                    a11 = a[5],
                    a12 = a[6],
                    a13 = a[7],
                    a20 = a[8],
                    a21 = a[9],
                    a22 = a[10],
                    a23 = a[11],
                    a30 = a[12],
                    a31 = a[13],
                    a32 = a[14],
                    a33 = a[15],
                    b00 = a00 * a11 - a01 * a10,
                    b01 = a00 * a12 - a02 * a10,
                    b02 = a00 * a13 - a03 * a10,
                    b03 = a01 * a12 - a02 * a11,
                    b04 = a01 * a13 - a03 * a11,
                    b05 = a02 * a13 - a03 * a12,
                    b06 = a20 * a31 - a21 * a30,
                    b07 = a20 * a32 - a22 * a30,
                    b08 = a20 * a33 - a23 * a30,
                    b09 = a21 * a32 - a22 * a31,
                    b10 = a21 * a33 - a23 * a31,
                    b11 = a22 * a33 - a23 * a32;
                return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06
            }

            function multiply(out, a, b) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a03 = a[3],
                    a10 = a[4],
                    a11 = a[5],
                    a12 = a[6],
                    a13 = a[7],
                    a20 = a[8],
                    a21 = a[9],
                    a22 = a[10],
                    a23 = a[11],
                    a30 = a[12],
                    a31 = a[13],
                    a32 = a[14],
                    a33 = a[15],
                    b0 = b[0],
                    b1 = b[1],
                    b2 = b[2],
                    b3 = b[3];
                return out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30, out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31, out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32, out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33, b0 = b[4], b1 = b[5], b2 = b[6], b3 = b[7], out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30, out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31, out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32, out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33, b0 = b[8], b1 = b[9], b2 = b[10], b3 = b[11], out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30, out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31, out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32, out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33, b0 = b[12], b1 = b[13], b2 = b[14], b3 = b[15], out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30, out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31, out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32, out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33, out
            }

            function translate(out, a, v) {
                var x = v[0],
                    y = v[1],
                    z = v[2],
                    a00 = void 0,
                    a01 = void 0,
                    a02 = void 0,
                    a03 = void 0,
                    a10 = void 0,
                    a11 = void 0,
                    a12 = void 0,
                    a13 = void 0,
                    a20 = void 0,
                    a21 = void 0,
                    a22 = void 0,
                    a23 = void 0;
                return a === out ? (out[12] = a[0] * x + a[4] * y + a[8] * z + a[12], out[13] = a[1] * x + a[5] * y + a[9] * z + a[13], out[14] = a[2] * x + a[6] * y + a[10] * z + a[14], out[15] = a[3] * x + a[7] * y + a[11] * z + a[15]) : (a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7], a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], out[0] = a00, out[1] = a01, out[2] = a02, out[3] = a03, out[4] = a10, out[5] = a11, out[6] = a12, out[7] = a13, out[8] = a20, out[9] = a21, out[10] = a22, out[11] = a23, out[12] = a00 * x + a10 * y + a20 * z + a[12], out[13] = a01 * x + a11 * y + a21 * z + a[13], out[14] = a02 * x + a12 * y + a22 * z + a[14], out[15] = a03 * x + a13 * y + a23 * z + a[15]), out
            }

            function scale(out, a, v) {
                var x = v[0],
                    y = v[1],
                    z = v[2];
                return out[0] = a[0] * x, out[1] = a[1] * x, out[2] = a[2] * x, out[3] = a[3] * x, out[4] = a[4] * y, out[5] = a[5] * y, out[6] = a[6] * y, out[7] = a[7] * y, out[8] = a[8] * z, out[9] = a[9] * z, out[10] = a[10] * z, out[11] = a[11] * z, out[12] = a[12], out[13] = a[13], out[14] = a[14], out[15] = a[15], out
            }

            function rotate(out, a, rad, axis) {
                var x = axis[0],
                    y = axis[1],
                    z = axis[2],
                    len = Math.sqrt(x * x + y * y + z * z),
                    s = void 0,
                    c = void 0,
                    t = void 0,
                    a00 = void 0,
                    a01 = void 0,
                    a02 = void 0,
                    a03 = void 0,
                    a10 = void 0,
                    a11 = void 0,
                    a12 = void 0,
                    a13 = void 0,
                    a20 = void 0,
                    a21 = void 0,
                    a22 = void 0,
                    a23 = void 0,
                    b00 = void 0,
                    b01 = void 0,
                    b02 = void 0,
                    b10 = void 0,
                    b11 = void 0,
                    b12 = void 0,
                    b20 = void 0,
                    b21 = void 0,
                    b22 = void 0;
                return Math.abs(len) < glMatrix.EPSILON ? null : (len = 1 / len, x *= len, y *= len, z *= len, s = Math.sin(rad), c = Math.cos(rad), t = 1 - c, a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7], a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c, out[0] = a00 * b00 + a10 * b01 + a20 * b02, out[1] = a01 * b00 + a11 * b01 + a21 * b02, out[2] = a02 * b00 + a12 * b01 + a22 * b02, out[3] = a03 * b00 + a13 * b01 + a23 * b02, out[4] = a00 * b10 + a10 * b11 + a20 * b12, out[5] = a01 * b10 + a11 * b11 + a21 * b12, out[6] = a02 * b10 + a12 * b11 + a22 * b12, out[7] = a03 * b10 + a13 * b11 + a23 * b12, out[8] = a00 * b20 + a10 * b21 + a20 * b22, out[9] = a01 * b20 + a11 * b21 + a21 * b22, out[10] = a02 * b20 + a12 * b21 + a22 * b22, out[11] = a03 * b20 + a13 * b21 + a23 * b22, a !== out && (out[12] = a[12], out[13] = a[13], out[14] = a[14], out[15] = a[15]), out)
            }

            function rotateX(out, a, rad) {
                var s = Math.sin(rad),
                    c = Math.cos(rad),
                    a10 = a[4],
                    a11 = a[5],
                    a12 = a[6],
                    a13 = a[7],
                    a20 = a[8],
                    a21 = a[9],
                    a22 = a[10],
                    a23 = a[11];
                return a !== out && (out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[3], out[12] = a[12], out[13] = a[13], out[14] = a[14], out[15] = a[15]), out[4] = a10 * c + a20 * s, out[5] = a11 * c + a21 * s, out[6] = a12 * c + a22 * s, out[7] = a13 * c + a23 * s, out[8] = a20 * c - a10 * s, out[9] = a21 * c - a11 * s, out[10] = a22 * c - a12 * s, out[11] = a23 * c - a13 * s, out
            }

            function rotateY(out, a, rad) {
                var s = Math.sin(rad),
                    c = Math.cos(rad),
                    a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a03 = a[3],
                    a20 = a[8],
                    a21 = a[9],
                    a22 = a[10],
                    a23 = a[11];
                return a !== out && (out[4] = a[4], out[5] = a[5], out[6] = a[6], out[7] = a[7], out[12] = a[12], out[13] = a[13], out[14] = a[14], out[15] = a[15]), out[0] = a00 * c - a20 * s, out[1] = a01 * c - a21 * s, out[2] = a02 * c - a22 * s, out[3] = a03 * c - a23 * s, out[8] = a00 * s + a20 * c, out[9] = a01 * s + a21 * c, out[10] = a02 * s + a22 * c, out[11] = a03 * s + a23 * c, out
            }

            function rotateZ(out, a, rad) {
                var s = Math.sin(rad),
                    c = Math.cos(rad),
                    a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a03 = a[3],
                    a10 = a[4],
                    a11 = a[5],
                    a12 = a[6],
                    a13 = a[7];
                return a !== out && (out[8] = a[8], out[9] = a[9], out[10] = a[10], out[11] = a[11], out[12] = a[12], out[13] = a[13], out[14] = a[14], out[15] = a[15]), out[0] = a00 * c + a10 * s, out[1] = a01 * c + a11 * s, out[2] = a02 * c + a12 * s, out[3] = a03 * c + a13 * s, out[4] = a10 * c - a00 * s, out[5] = a11 * c - a01 * s, out[6] = a12 * c - a02 * s, out[7] = a13 * c - a03 * s, out
            }

            function fromTranslation(out, v) {
                return out[0] = 1, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = 1, out[6] = 0, out[7] = 0, out[8] = 0, out[9] = 0, out[10] = 1, out[11] = 0, out[12] = v[0], out[13] = v[1], out[14] = v[2], out[15] = 1, out
            }

            function fromScaling(out, v) {
                return out[0] = v[0], out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = v[1], out[6] = 0, out[7] = 0, out[8] = 0, out[9] = 0, out[10] = v[2], out[11] = 0, out[12] = 0, out[13] = 0, out[14] = 0, out[15] = 1, out
            }

            function fromRotation(out, rad, axis) {
                var x = axis[0],
                    y = axis[1],
                    z = axis[2],
                    len = Math.sqrt(x * x + y * y + z * z),
                    s = void 0,
                    c = void 0,
                    t = void 0;
                return Math.abs(len) < glMatrix.EPSILON ? null : (len = 1 / len, x *= len, y *= len, z *= len, s = Math.sin(rad), c = Math.cos(rad), t = 1 - c, out[0] = x * x * t + c, out[1] = y * x * t + z * s, out[2] = z * x * t - y * s, out[3] = 0, out[4] = x * y * t - z * s, out[5] = y * y * t + c, out[6] = z * y * t + x * s, out[7] = 0, out[8] = x * z * t + y * s, out[9] = y * z * t - x * s, out[10] = z * z * t + c, out[11] = 0, out[12] = 0, out[13] = 0, out[14] = 0, out[15] = 1, out)
            }

            function fromXRotation(out, rad) {
                var s = Math.sin(rad),
                    c = Math.cos(rad);
                return out[0] = 1, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = c, out[6] = s, out[7] = 0, out[8] = 0, out[9] = -s, out[10] = c, out[11] = 0, out[12] = 0, out[13] = 0, out[14] = 0, out[15] = 1, out
            }

            function fromYRotation(out, rad) {
                var s = Math.sin(rad),
                    c = Math.cos(rad);
                return out[0] = c, out[1] = 0, out[2] = -s, out[3] = 0, out[4] = 0, out[5] = 1, out[6] = 0, out[7] = 0, out[8] = s, out[9] = 0, out[10] = c, out[11] = 0, out[12] = 0, out[13] = 0, out[14] = 0, out[15] = 1, out
            }

            function fromZRotation(out, rad) {
                var s = Math.sin(rad),
                    c = Math.cos(rad);
                return out[0] = c, out[1] = s, out[2] = 0, out[3] = 0, out[4] = -s, out[5] = c, out[6] = 0, out[7] = 0, out[8] = 0, out[9] = 0, out[10] = 1, out[11] = 0, out[12] = 0, out[13] = 0, out[14] = 0, out[15] = 1, out
            }

            function fromRotationTranslation(out, q, v) {
                var x = q[0],
                    y = q[1],
                    z = q[2],
                    w = q[3],
                    x2 = x + x,
                    y2 = y + y,
                    z2 = z + z,
                    xx = x * x2,
                    xy = x * y2,
                    xz = x * z2,
                    yy = y * y2,
                    yz = y * z2,
                    zz = z * z2,
                    wx = w * x2,
                    wy = w * y2,
                    wz = w * z2;
                return out[0] = 1 - (yy + zz), out[1] = xy + wz, out[2] = xz - wy, out[3] = 0, out[4] = xy - wz, out[5] = 1 - (xx + zz), out[6] = yz + wx, out[7] = 0, out[8] = xz + wy, out[9] = yz - wx, out[10] = 1 - (xx + yy), out[11] = 0, out[12] = v[0], out[13] = v[1], out[14] = v[2], out[15] = 1, out
            }

            function getTranslation(out, mat) {
                return out[0] = mat[12], out[1] = mat[13], out[2] = mat[14], out
            }

            function getScaling(out, mat) {
                var m11 = mat[0],
                    m12 = mat[1],
                    m13 = mat[2],
                    m21 = mat[4],
                    m22 = mat[5],
                    m23 = mat[6],
                    m31 = mat[8],
                    m32 = mat[9],
                    m33 = mat[10];
                return out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13), out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23), out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33), out
            }

            function getRotation(out, mat) {
                var trace = mat[0] + mat[5] + mat[10],
                    S = 0;
                return trace > 0 ? (S = 2 * Math.sqrt(trace + 1), out[3] = .25 * S, out[0] = (mat[6] - mat[9]) / S, out[1] = (mat[8] - mat[2]) / S, out[2] = (mat[1] - mat[4]) / S) : mat[0] > mat[5] & mat[0] > mat[10] ? (S = 2 * Math.sqrt(1 + mat[0] - mat[5] - mat[10]), out[3] = (mat[6] - mat[9]) / S, out[0] = .25 * S, out[1] = (mat[1] + mat[4]) / S, out[2] = (mat[8] + mat[2]) / S) : mat[5] > mat[10] ? (S = 2 * Math.sqrt(1 + mat[5] - mat[0] - mat[10]), out[3] = (mat[8] - mat[2]) / S, out[0] = (mat[1] + mat[4]) / S, out[1] = .25 * S, out[2] = (mat[6] + mat[9]) / S) : (S = 2 * Math.sqrt(1 + mat[10] - mat[0] - mat[5]), out[3] = (mat[1] - mat[4]) / S, out[0] = (mat[8] + mat[2]) / S, out[1] = (mat[6] + mat[9]) / S, out[2] = .25 * S), out
            }

            function fromRotationTranslationScale(out, q, v, s) {
                var x = q[0],
                    y = q[1],
                    z = q[2],
                    w = q[3],
                    x2 = x + x,
                    y2 = y + y,
                    z2 = z + z,
                    xx = x * x2,
                    xy = x * y2,
                    xz = x * z2,
                    yy = y * y2,
                    yz = y * z2,
                    zz = z * z2,
                    wx = w * x2,
                    wy = w * y2,
                    wz = w * z2,
                    sx = s[0],
                    sy = s[1],
                    sz = s[2];
                return out[0] = (1 - (yy + zz)) * sx, out[1] = (xy + wz) * sx, out[2] = (xz - wy) * sx, out[3] = 0, out[4] = (xy - wz) * sy, out[5] = (1 - (xx + zz)) * sy, out[6] = (yz + wx) * sy, out[7] = 0, out[8] = (xz + wy) * sz, out[9] = (yz - wx) * sz, out[10] = (1 - (xx + yy)) * sz, out[11] = 0, out[12] = v[0], out[13] = v[1], out[14] = v[2], out[15] = 1, out
            }

            function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
                var x = q[0],
                    y = q[1],
                    z = q[2],
                    w = q[3],
                    x2 = x + x,
                    y2 = y + y,
                    z2 = z + z,
                    xx = x * x2,
                    xy = x * y2,
                    xz = x * z2,
                    yy = y * y2,
                    yz = y * z2,
                    zz = z * z2,
                    wx = w * x2,
                    wy = w * y2,
                    wz = w * z2,
                    sx = s[0],
                    sy = s[1],
                    sz = s[2],
                    ox = o[0],
                    oy = o[1],
                    oz = o[2];
                return out[0] = (1 - (yy + zz)) * sx, out[1] = (xy + wz) * sx, out[2] = (xz - wy) * sx, out[3] = 0, out[4] = (xy - wz) * sy, out[5] = (1 - (xx + zz)) * sy, out[6] = (yz + wx) * sy, out[7] = 0, out[8] = (xz + wy) * sz, out[9] = (yz - wx) * sz, out[10] = (1 - (xx + yy)) * sz, out[11] = 0, out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz), out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz), out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz), out[15] = 1, out
            }

            function fromQuat(out, q) {
                var x = q[0],
                    y = q[1],
                    z = q[2],
                    w = q[3],
                    x2 = x + x,
                    y2 = y + y,
                    z2 = z + z,
                    xx = x * x2,
                    yx = y * x2,
                    yy = y * y2,
                    zx = z * x2,
                    zy = z * y2,
                    zz = z * z2,
                    wx = w * x2,
                    wy = w * y2,
                    wz = w * z2;
                return out[0] = 1 - yy - zz, out[1] = yx + wz, out[2] = zx - wy, out[3] = 0, out[4] = yx - wz, out[5] = 1 - xx - zz, out[6] = zy + wx, out[7] = 0, out[8] = zx + wy, out[9] = zy - wx, out[10] = 1 - xx - yy, out[11] = 0, out[12] = 0, out[13] = 0, out[14] = 0, out[15] = 1, out
            }

            function frustum(out, left, right, bottom, top, near, far) {
                var rl = 1 / (right - left),
                    tb = 1 / (top - bottom),
                    nf = 1 / (near - far);
                return out[0] = 2 * near * rl, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = 2 * near * tb, out[6] = 0, out[7] = 0, out[8] = (right + left) * rl, out[9] = (top + bottom) * tb, out[10] = (far + near) * nf, out[11] = -1, out[12] = 0, out[13] = 0, out[14] = far * near * 2 * nf, out[15] = 0, out
            }

            function perspective(out, fovy, aspect, near, far) {
                var f = 1 / Math.tan(fovy / 2),
                    nf = 1 / (near - far);
                return out[0] = f / aspect, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = f, out[6] = 0, out[7] = 0, out[8] = 0, out[9] = 0, out[10] = (far + near) * nf, out[11] = -1, out[12] = 0, out[13] = 0, out[14] = 2 * far * near * nf, out[15] = 0, out
            }

            function perspectiveFromFieldOfView(out, fov, near, far) {
                var upTan = Math.tan(fov.upDegrees * Math.PI / 180),
                    downTan = Math.tan(fov.downDegrees * Math.PI / 180),
                    leftTan = Math.tan(fov.leftDegrees * Math.PI / 180),
                    rightTan = Math.tan(fov.rightDegrees * Math.PI / 180),
                    xScale = 2 / (leftTan + rightTan),
                    yScale = 2 / (upTan + downTan);
                return out[0] = xScale, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = yScale, out[6] = 0, out[7] = 0, out[8] = -((leftTan - rightTan) * xScale * .5), out[9] = (upTan - downTan) * yScale * .5, out[10] = far / (near - far), out[11] = -1, out[12] = 0, out[13] = 0, out[14] = far * near / (near - far), out[15] = 0, out
            }

            function ortho(out, left, right, bottom, top, near, far) {
                var lr = 1 / (left - right),
                    bt = 1 / (bottom - top),
                    nf = 1 / (near - far);
                return out[0] = -2 * lr, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = -2 * bt, out[6] = 0, out[7] = 0, out[8] = 0, out[9] = 0, out[10] = 2 * nf, out[11] = 0, out[12] = (left + right) * lr, out[13] = (top + bottom) * bt, out[14] = (far + near) * nf, out[15] = 1, out
            }

            function lookAt(out, eye, center, up) {
                var x0 = void 0,
                    x1 = void 0,
                    x2 = void 0,
                    y0 = void 0,
                    y1 = void 0,
                    y2 = void 0,
                    z0 = void 0,
                    z1 = void 0,
                    z2 = void 0,
                    len = void 0,
                    eyex = eye[0],
                    eyey = eye[1],
                    eyez = eye[2],
                    upx = up[0],
                    upy = up[1],
                    upz = up[2],
                    centerx = center[0],
                    centery = center[1],
                    centerz = center[2];
                return Math.abs(eyex - centerx) < glMatrix.EPSILON && Math.abs(eyey - centery) < glMatrix.EPSILON && Math.abs(eyez - centerz) < glMatrix.EPSILON ? mat4.identity(out) : (z0 = eyex - centerx, z1 = eyey - centery, z2 = eyez - centerz, len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2), z0 *= len, z1 *= len, z2 *= len, x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0, len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2), len ? (len = 1 / len, x0 *= len, x1 *= len, x2 *= len) : (x0 = 0, x1 = 0, x2 = 0), y0 = z1 * x2 - z2 * x1, y1 = z2 * x0 - z0 * x2, y2 = z0 * x1 - z1 * x0, len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2), len ? (len = 1 / len, y0 *= len, y1 *= len, y2 *= len) : (y0 = 0, y1 = 0, y2 = 0), out[0] = x0, out[1] = y0, out[2] = z0, out[3] = 0, out[4] = x1, out[5] = y1, out[6] = z1, out[7] = 0, out[8] = x2, out[9] = y2, out[10] = z2, out[11] = 0, out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez), out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez), out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez), out[15] = 1, out)
            }

            function targetTo(out, eye, target, up) {
                var eyex = eye[0],
                    eyey = eye[1],
                    eyez = eye[2],
                    upx = up[0],
                    upy = up[1],
                    upz = up[2],
                    z0 = eyex - target[0],
                    z1 = eyey - target[1],
                    z2 = eyez - target[2],
                    len = z0 * z0 + z1 * z1 + z2 * z2;
                len > 0 && (len = 1 / Math.sqrt(len), z0 *= len, z1 *= len, z2 *= len);
                var x0 = upy * z2 - upz * z1,
                    x1 = upz * z0 - upx * z2,
                    x2 = upx * z1 - upy * z0;
                return out[0] = x0, out[1] = x1, out[2] = x2, out[3] = 0, out[4] = z1 * x2 - z2 * x1, out[5] = z2 * x0 - z0 * x2, out[6] = z0 * x1 - z1 * x0, out[7] = 0, out[8] = z0, out[9] = z1, out[10] = z2, out[11] = 0, out[12] = eyex, out[13] = eyey, out[14] = eyez, out[15] = 1, out
            }

            function str(a) {
                return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")"
            }

            function frob(a) {
                return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2))
            }

            function add(out, a, b) {
                return out[0] = a[0] + b[0], out[1] = a[1] + b[1], out[2] = a[2] + b[2], out[3] = a[3] + b[3], out[4] = a[4] + b[4], out[5] = a[5] + b[5], out[6] = a[6] + b[6], out[7] = a[7] + b[7], out[8] = a[8] + b[8], out[9] = a[9] + b[9], out[10] = a[10] + b[10], out[11] = a[11] + b[11], out[12] = a[12] + b[12], out[13] = a[13] + b[13], out[14] = a[14] + b[14], out[15] = a[15] + b[15], out
            }

            function subtract(out, a, b) {
                return out[0] = a[0] - b[0], out[1] = a[1] - b[1], out[2] = a[2] - b[2], out[3] = a[3] - b[3], out[4] = a[4] - b[4], out[5] = a[5] - b[5], out[6] = a[6] - b[6], out[7] = a[7] - b[7], out[8] = a[8] - b[8], out[9] = a[9] - b[9], out[10] = a[10] - b[10], out[11] = a[11] - b[11], out[12] = a[12] - b[12], out[13] = a[13] - b[13], out[14] = a[14] - b[14], out[15] = a[15] - b[15], out
            }

            function multiplyScalar(out, a, b) {
                return out[0] = a[0] * b, out[1] = a[1] * b, out[2] = a[2] * b, out[3] = a[3] * b, out[4] = a[4] * b, out[5] = a[5] * b, out[6] = a[6] * b, out[7] = a[7] * b, out[8] = a[8] * b, out[9] = a[9] * b, out[10] = a[10] * b, out[11] = a[11] * b, out[12] = a[12] * b, out[13] = a[13] * b, out[14] = a[14] * b, out[15] = a[15] * b, out
            }

            function multiplyScalarAndAdd(out, a, b, scale) {
                return out[0] = a[0] + b[0] * scale, out[1] = a[1] + b[1] * scale, out[2] = a[2] + b[2] * scale, out[3] = a[3] + b[3] * scale, out[4] = a[4] + b[4] * scale, out[5] = a[5] + b[5] * scale, out[6] = a[6] + b[6] * scale, out[7] = a[7] + b[7] * scale, out[8] = a[8] + b[8] * scale, out[9] = a[9] + b[9] * scale, out[10] = a[10] + b[10] * scale, out[11] = a[11] + b[11] * scale, out[12] = a[12] + b[12] * scale, out[13] = a[13] + b[13] * scale, out[14] = a[14] + b[14] * scale, out[15] = a[15] + b[15] * scale, out
            }

            function exactEquals(a, b) {
                return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15]
            }

            function equals(a, b) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    a4 = a[4],
                    a5 = a[5],
                    a6 = a[6],
                    a7 = a[7],
                    a8 = a[8],
                    a9 = a[9],
                    a10 = a[10],
                    a11 = a[11],
                    a12 = a[12],
                    a13 = a[13],
                    a14 = a[14],
                    a15 = a[15],
                    b0 = b[0],
                    b1 = b[1],
                    b2 = b[2],
                    b3 = b[3],
                    b4 = b[4],
                    b5 = b[5],
                    b6 = b[6],
                    b7 = b[7],
                    b8 = b[8],
                    b9 = b[9],
                    b10 = b[10],
                    b11 = b[11],
                    b12 = b[12],
                    b13 = b[13],
                    b14 = b[14],
                    b15 = b[15];
                return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= glMatrix.EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= glMatrix.EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= glMatrix.EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= glMatrix.EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= glMatrix.EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= glMatrix.EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= glMatrix.EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15))
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.sub = exports.mul = void 0, exports.create = create, exports.clone = clone, exports.copy = copy, exports.fromValues = fromValues, exports.set = set, exports.identity = identity, exports.transpose = transpose, exports.invert = invert, exports.adjoint = adjoint, exports.determinant = determinant, exports.multiply = multiply, exports.translate = translate, exports.scale = scale, exports.rotate = rotate, exports.rotateX = rotateX, exports.rotateY = rotateY, exports.rotateZ = rotateZ, exports.fromTranslation = fromTranslation, exports.fromScaling = fromScaling, exports.fromRotation = fromRotation, exports.fromXRotation = fromXRotation, exports.fromYRotation = fromYRotation, exports.fromZRotation = fromZRotation, exports.fromRotationTranslation = fromRotationTranslation, exports.getTranslation = getTranslation, exports.getScaling = getScaling, exports.getRotation = getRotation, exports.fromRotationTranslationScale = fromRotationTranslationScale, exports.fromRotationTranslationScaleOrigin = fromRotationTranslationScaleOrigin, exports.fromQuat = fromQuat, exports.frustum = frustum, exports.perspective = perspective, exports.perspectiveFromFieldOfView = perspectiveFromFieldOfView, exports.ortho = ortho, exports.lookAt = lookAt, exports.targetTo = targetTo, exports.str = str, exports.frob = frob, exports.add = add, exports.subtract = subtract, exports.multiplyScalar = multiplyScalar, exports.multiplyScalarAndAdd = multiplyScalarAndAdd, exports.exactEquals = exactEquals, exports.equals = equals;
            var _common = __webpack_require__(0),
                glMatrix = _interopRequireWildcard(_common);
            exports.mul = multiply, exports.sub = subtract
        }, function(module, exports, __webpack_require__) {
            "use strict";

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj)
                    for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj,
                    newObj
            }

            function create() {
                var out = new glMatrix.ARRAY_TYPE(4);
                return out[0] = 0, out[1] = 0, out[2] = 0, out[3] = 1, out
            }

            function identity(out) {
                return out[0] = 0, out[1] = 0, out[2] = 0, out[3] = 1, out
            }

            function setAxisAngle(out, axis, rad) {
                rad *= .5;
                var s = Math.sin(rad);
                return out[0] = s * axis[0], out[1] = s * axis[1], out[2] = s * axis[2], out[3] = Math.cos(rad), out
            }

            function getAxisAngle(out_axis, q) {
                var rad = 2 * Math.acos(q[3]),
                    s = Math.sin(rad / 2);
                return 0 != s ? (out_axis[0] = q[0] / s, out_axis[1] = q[1] / s, out_axis[2] = q[2] / s) : (out_axis[0] = 1, out_axis[1] = 0, out_axis[2] = 0), rad
            }

            function multiply(out, a, b) {
                var ax = a[0],
                    ay = a[1],
                    az = a[2],
                    aw = a[3],
                    bx = b[0],
                    by = b[1],
                    bz = b[2],
                    bw = b[3];
                return out[0] = ax * bw + aw * bx + ay * bz - az * by, out[1] = ay * bw + aw * by + az * bx - ax * bz, out[2] = az * bw + aw * bz + ax * by - ay * bx, out[3] = aw * bw - ax * bx - ay * by - az * bz, out
            }

            function rotateX(out, a, rad) {
                rad *= .5;
                var ax = a[0],
                    ay = a[1],
                    az = a[2],
                    aw = a[3],
                    bx = Math.sin(rad),
                    bw = Math.cos(rad);
                return out[0] = ax * bw + aw * bx, out[1] = ay * bw + az * bx, out[2] = az * bw - ay * bx, out[3] = aw * bw - ax * bx, out
            }

            function rotateY(out, a, rad) {
                rad *= .5;
                var ax = a[0],
                    ay = a[1],
                    az = a[2],
                    aw = a[3],
                    by = Math.sin(rad),
                    bw = Math.cos(rad);
                return out[0] = ax * bw - az * by, out[1] = ay * bw + aw * by, out[2] = az * bw + ax * by, out[3] = aw * bw - ay * by, out
            }

            function rotateZ(out, a, rad) {
                rad *= .5;
                var ax = a[0],
                    ay = a[1],
                    az = a[2],
                    aw = a[3],
                    bz = Math.sin(rad),
                    bw = Math.cos(rad);
                return out[0] = ax * bw + ay * bz, out[1] = ay * bw - ax * bz, out[2] = az * bw + aw * bz, out[3] = aw * bw - az * bz, out
            }

            function calculateW(out, a) {
                var x = a[0],
                    y = a[1],
                    z = a[2];
                return out[0] = x, out[1] = y, out[2] = z, out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z)), out
            }

            function slerp(out, a, b, t) {
                var ax = a[0],
                    ay = a[1],
                    az = a[2],
                    aw = a[3],
                    bx = b[0],
                    by = b[1],
                    bz = b[2],
                    bw = b[3],
                    omega = void 0,
                    cosom = void 0,
                    sinom = void 0,
                    scale0 = void 0,
                    scale1 = void 0;
                return cosom = ax * bx + ay * by + az * bz + aw * bw, cosom < 0 && (cosom = -cosom, bx = -bx, by = -by, bz = -bz, bw = -bw), 1 - cosom > 1e-6 ? (omega = Math.acos(cosom), sinom = Math.sin(omega), scale0 = Math.sin((1 - t) * omega) / sinom, scale1 = Math.sin(t * omega) / sinom) : (scale0 = 1 - t, scale1 = t), out[0] = scale0 * ax + scale1 * bx, out[1] = scale0 * ay + scale1 * by, out[2] = scale0 * az + scale1 * bz, out[3] = scale0 * aw + scale1 * bw, out
            }

            function invert(out, a) {
                var a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,
                    invDot = dot ? 1 / dot : 0;
                return out[0] = -a0 * invDot, out[1] = -a1 * invDot, out[2] = -a2 * invDot, out[3] = a3 * invDot, out
            }

            function conjugate(out, a) {
                return out[0] = -a[0], out[1] = -a[1], out[2] = -a[2], out[3] = a[3], out
            }

            function fromMat3(out, m) {
                var fTrace = m[0] + m[4] + m[8],
                    fRoot = void 0;
                if (fTrace > 0) fRoot = Math.sqrt(fTrace + 1), out[3] = .5 * fRoot, fRoot = .5 / fRoot, out[0] = (m[5] - m[7]) * fRoot, out[1] = (m[6] - m[2]) * fRoot, out[2] = (m[1] - m[3]) * fRoot;
                else {
                    var i = 0;
                    m[4] > m[0] && (i = 1), m[8] > m[3 * i + i] && (i = 2);
                    var j = (i + 1) % 3,
                        k = (i + 2) % 3;
                    fRoot = Math.sqrt(m[3 * i + i] - m[3 * j + j] - m[3 * k + k] + 1), out[i] = .5 * fRoot, fRoot = .5 / fRoot, out[3] = (m[3 * j + k] - m[3 * k + j]) * fRoot, out[j] = (m[3 * j + i] + m[3 * i + j]) * fRoot, out[k] = (m[3 * k + i] + m[3 * i + k]) * fRoot
                }
                return out
            }

            function fromEuler(out, x, y, z) {
                var halfToRad = .5 * Math.PI / 180;
                x *= halfToRad, y *= halfToRad, z *= halfToRad;
                var sx = Math.sin(x),
                    cx = Math.cos(x),
                    sy = Math.sin(y),
                    cy = Math.cos(y),
                    sz = Math.sin(z),
                    cz = Math.cos(z);
                return out[0] = sx * cy * cz - cx * sy * sz, out[1] = cx * sy * cz + sx * cy * sz, out[2] = cx * cy * sz - sx * sy * cz, out[3] = cx * cy * cz + sx * sy * sz, out
            }

            function str(a) {
                return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.setAxes = exports.sqlerp = exports.rotationTo = exports.equals = exports.exactEquals = exports.normalize = exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.lerp = exports.dot = exports.scale = exports.mul = exports.add = exports.set = exports.copy = exports.fromValues = exports.clone = void 0, exports.create = create, exports.identity = identity, exports.setAxisAngle = setAxisAngle, exports.getAxisAngle = getAxisAngle, exports.multiply = multiply, exports.rotateX = rotateX, exports.rotateY = rotateY, exports.rotateZ = rotateZ, exports.calculateW = calculateW, exports.slerp = slerp, exports.invert = invert, exports.conjugate = conjugate, exports.fromMat3 = fromMat3, exports.fromEuler = fromEuler, exports.str = str;
            var _common = __webpack_require__(0),
                glMatrix = _interopRequireWildcard(_common),
                _mat = __webpack_require__(1),
                mat3 = _interopRequireWildcard(_mat),
                _vec = __webpack_require__(2),
                vec3 = _interopRequireWildcard(_vec),
                _vec2 = __webpack_require__(3),
                vec4 = _interopRequireWildcard(_vec2),
                length = (exports.clone = vec4.clone, exports.fromValues = vec4.fromValues, exports.copy = vec4.copy, exports.set = vec4.set, exports.add = vec4.add, exports.mul = multiply, exports.scale = vec4.scale, exports.dot = vec4.dot, exports.lerp = vec4.lerp, exports.length = vec4.length),
                squaredLength = (exports.len = length, exports.squaredLength = vec4.squaredLength),
                normalize = (exports.sqrLen = squaredLength, exports.normalize = vec4.normalize);
            exports.exactEquals = vec4.exactEquals, exports.equals = vec4.equals, exports.rotationTo = function() {
                var tmpvec3 = vec3.create(),
                    xUnitVec3 = vec3.fromValues(1, 0, 0),
                    yUnitVec3 = vec3.fromValues(0, 1, 0);
                return function(out, a, b) {
                    var dot = vec3.dot(a, b);
                    return dot < -.999999 ? (vec3.cross(tmpvec3, xUnitVec3, a), vec3.len(tmpvec3) < 1e-6 && vec3.cross(tmpvec3, yUnitVec3, a), vec3.normalize(tmpvec3, tmpvec3), setAxisAngle(out, tmpvec3, Math.PI), out) : dot > .999999 ? (out[0] = 0, out[1] = 0, out[2] = 0, out[3] = 1, out) : (vec3.cross(tmpvec3, a, b), out[0] = tmpvec3[0], out[1] = tmpvec3[1], out[2] = tmpvec3[2], out[3] = 1 + dot, normalize(out, out))
                }
            }(), exports.sqlerp = function() {
                var temp1 = create(),
                    temp2 = create();
                return function(out, a, b, c, d, t) {
                    return slerp(temp1, a, d, t), slerp(temp2, b, c, t), slerp(out, temp1, temp2, 2 * t * (1 - t)), out
                }
            }(), exports.setAxes = function() {
                var matr = mat3.create();
                return function(out, view, right, up) {
                    return matr[0] = right[0], matr[3] = right[1], matr[6] = right[2], matr[1] = up[0], matr[4] = up[1], matr[7] = up[2], matr[2] = -view[0], matr[5] = -view[1], matr[8] = -view[2], normalize(out, fromMat3(out, matr))
                }
            }()
        }, function(module, exports, __webpack_require__) {
            "use strict";

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj)
                    for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj
            }

            function create() {
                var out = new glMatrix.ARRAY_TYPE(2);
                return out[0] = 0, out[1] = 0, out
            }

            function clone(a) {
                var out = new glMatrix.ARRAY_TYPE(2);
                return out[0] = a[0], out[1] = a[1], out
            }

            function fromValues(x, y) {
                var out = new glMatrix.ARRAY_TYPE(2);
                return out[0] = x, out[1] = y, out
            }

            function copy(out, a) {
                return out[0] = a[0], out[1] = a[1], out
            }

            function set(out, x, y) {
                return out[0] = x, out[1] = y, out
            }

            function add(out, a, b) {
                return out[0] = a[0] + b[0], out[1] = a[1] + b[1], out
            }

            function subtract(out, a, b) {
                return out[0] = a[0] - b[0], out[1] = a[1] - b[1], out
            }

            function multiply(out, a, b) {
                return out[0] = a[0] * b[0], out[1] = a[1] * b[1], out
            }

            function divide(out, a, b) {
                return out[0] = a[0] / b[0], out[1] = a[1] / b[1], out
            }

            function ceil(out, a) {
                return out[0] = Math.ceil(a[0]), out[1] = Math.ceil(a[1]), out
            }

            function floor(out, a) {
                return out[0] = Math.floor(a[0]), out[1] = Math.floor(a[1]), out
            }

            function min(out, a, b) {
                return out[0] = Math.min(a[0], b[0]), out[1] = Math.min(a[1], b[1]), out
            }

            function max(out, a, b) {
                return out[0] = Math.max(a[0], b[0]), out[1] = Math.max(a[1], b[1]), out
            }

            function round(out, a) {
                return out[0] = Math.round(a[0]), out[1] = Math.round(a[1]), out
            }

            function scale(out, a, b) {
                return out[0] = a[0] * b, out[1] = a[1] * b, out
            }

            function scaleAndAdd(out, a, b, scale) {
                return out[0] = a[0] + b[0] * scale, out[1] = a[1] + b[1] * scale, out
            }

            function distance(a, b) {
                var x = b[0] - a[0],
                    y = b[1] - a[1];
                return Math.sqrt(x * x + y * y)
            }

            function squaredDistance(a, b) {
                var x = b[0] - a[0],
                    y = b[1] - a[1];
                return x * x + y * y
            }

            function length(a) {
                var x = a[0],
                    y = a[1];
                return Math.sqrt(x * x + y * y)
            }

            function squaredLength(a) {
                var x = a[0],
                    y = a[1];
                return x * x + y * y
            }

            function negate(out, a) {
                return out[0] = -a[0], out[1] = -a[1], out
            }

            function inverse(out, a) {
                return out[0] = 1 / a[0], out[1] = 1 / a[1], out
            }

            function normalize(out, a) {
                var x = a[0],
                    y = a[1],
                    len = x * x + y * y;
                return len > 0 && (len = 1 / Math.sqrt(len), out[0] = a[0] * len, out[1] = a[1] * len), out
            }

            function dot(a, b) {
                return a[0] * b[0] + a[1] * b[1]
            }

            function cross(out, a, b) {
                var z = a[0] * b[1] - a[1] * b[0];
                return out[0] = out[1] = 0, out[2] = z, out
            }

            function lerp(out, a, b, t) {
                var ax = a[0],
                    ay = a[1];
                return out[0] = ax + t * (b[0] - ax), out[1] = ay + t * (b[1] - ay), out
            }

            function random(out, scale) {
                scale = scale || 1;
                var r = 2 * glMatrix.RANDOM() * Math.PI;
                return out[0] = Math.cos(r) * scale, out[1] = Math.sin(r) * scale, out
            }

            function transformMat2(out, a, m) {
                var x = a[0],
                    y = a[1];
                return out[0] = m[0] * x + m[2] * y, out[1] = m[1] * x + m[3] * y, out
            }

            function transformMat2d(out, a, m) {
                var x = a[0],
                    y = a[1];
                return out[0] = m[0] * x + m[2] * y + m[4], out[1] = m[1] * x + m[3] * y + m[5], out
            }

            function transformMat3(out, a, m) {
                var x = a[0],
                    y = a[1];
                return out[0] = m[0] * x + m[3] * y + m[6], out[1] = m[1] * x + m[4] * y + m[7], out
            }

            function transformMat4(out, a, m) {
                var x = a[0],
                    y = a[1];
                return out[0] = m[0] * x + m[4] * y + m[12], out[1] = m[1] * x + m[5] * y + m[13], out
            }

            function str(a) {
                return "vec2(" + a[0] + ", " + a[1] + ")"
            }

            function exactEquals(a, b) {
                return a[0] === b[0] && a[1] === b[1]
            }

            function equals(a, b) {
                var a0 = a[0],
                    a1 = a[1],
                    b0 = b[0],
                    b1 = b[1];
                return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1))
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.forEach = exports.sqrLen = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = exports.len = void 0, exports.create = create, exports.clone = clone, exports.fromValues = fromValues, exports.copy = copy, exports.set = set, exports.add = add, exports.subtract = subtract, exports.multiply = multiply, exports.divide = divide, exports.ceil = ceil, exports.floor = floor, exports.min = min, exports.max = max, exports.round = round, exports.scale = scale, exports.scaleAndAdd = scaleAndAdd, exports.distance = distance, exports.squaredDistance = squaredDistance, exports.length = length, exports.squaredLength = squaredLength, exports.negate = negate, exports.inverse = inverse, exports.normalize = normalize, exports.dot = dot, exports.cross = cross, exports.lerp = lerp, exports.random = random, exports.transformMat2 = transformMat2, exports.transformMat2d = transformMat2d, exports.transformMat3 = transformMat3, exports.transformMat4 = transformMat4, exports.str = str, exports.exactEquals = exactEquals, exports.equals = equals;
            var _common = __webpack_require__(0),
                glMatrix = _interopRequireWildcard(_common);
            exports.len = length, exports.sub = subtract, exports.mul = multiply, exports.div = divide, exports.dist = distance, exports.sqrDist = squaredDistance, exports.sqrLen = squaredLength, exports.forEach = function() {
                var vec = create();
                return function(a, stride, offset, count, fn, arg) {
                    var i = void 0,
                        l = void 0;
                    for (stride || (stride = 2), offset || (offset = 0), l = count ? Math.min(count * stride + offset, a.length) : a.length, i = offset; i < l; i += stride) vec[0] = a[i], vec[1] = a[i + 1], fn(vec, vec, arg), a[i] = vec[0], a[i + 1] = vec[1];
                    return a
                }
            }()
        }])
    })
}, function(module, exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        Device = function() {
            function Device() {
                _classCallCheck(this, Device), this.arora = !1, this.chrome = !1, this.epiphany = !1, this.firefox = !1, this.mobileSafari = !1, this.ie = !1, this.ieVersion = 0, this.trident = !1, this.tridentVersion = 0, this.midori = !1, this.opera = !1, this.safari = !1, this.silk = !1, this.webApp = !1, this.cocoonJS = !1, this.android = !1, this.chromeOS = !1, this.iOS = !1, this.linux = !1, this.macOS = !1, this.windows = !1, this.desktop = !1, this.pixelRatio = 0, this.iPhone = !1, this.iPhone4 = !1, this.iPad = !1, this.blob = !1, this.canvas = !1, this.localStorage = !1, this.file = !1, this.fileSystem = !1, this.webGL = !1, this.worker = !1, this.audioData = !1, this.webAudio = !1, this.ogg = !1, this.opus = !1, this.mp3 = !1, this.wav = !1, this.m4a = !1, this.webm = !1;
                var ua = navigator.userAgent;
                this._checkBrowser(ua), this._checkOS(ua), this._checkDevice(ua), this._checkAudio(), this._checkFeatures(), this._checkIsMobile(), this._checkIsTouch()
            }
            return Device.prototype._checkBrowser = function(ua) {
                /Arora/.test(ua) ? this.arora = !0 : /Opera|OPR|op/.test(ua) ? (this.opera = !0, this.chrome = !1) : /MSIE (\d+\.\d+);/.test(ua) || navigator.userAgent.match(/Trident.*rv[ :]*11\./) || window.navigator.userAgent.indexOf("Edge") > -1 ? (this.ie = !0, this.ieVersion = parseInt(RegExp.$1, 10)) : /Chrome/.test(ua) ? this.chrome = !0 : /Epiphany/.test(ua) ? this.epiphany = !0 : /Firefox/.test(ua) ? this.firefox = !0 : /Mobile Safari/.test(ua) ? this.mobileSafari = !0 : /Midori/.test(ua) ? this.midori = !0 : /Safari/.test(ua) ? this.safari = !0 : /\bSilk\b/.test(ua) ? this.silk = !0 : /Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(ua) && (this.ie = !0, this.trident = !0, this.tridentVersion = parseInt(RegExp.$1, 10), this.ieVersion = parseInt(RegExp.$3, 10)), navigator.standalone && (this.webApp = !0), navigator.isCocoonJS && (this.cocoonJS = !0)
            }, Device.prototype._checkOS = function(ua) {
                if (/Android/.test(ua)) this.android = !0;
                else if (/CrOS/.test(ua)) this.chromeOS = !0;
                else if (/iP[ao]d|iPhone/i.test(ua)) {
                    this.iOS = !0;
                    var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                    this.iOS_version = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)]
                } else /Linux/.test(ua) ? this.linux = !0 : /Mac OS/.test(ua) ? this.macOS = !0 : /Windows/.test(ua) && (this.windows = !0);
                (this.windows || this.macOS || this.linux || this.chromeOS) && (this.desktop = !0)
            }, Device.prototype._checkDevice = function() {
                this.pixelRatio = window.devicePixelRatio || 1, this.iPhone = navigator.userAgent.toLowerCase().indexOf("iphone") !== -1, this.iPhone4 = 2 === this.pixelRatio && this.iPhone, this.iPhone4 && (this.iPhone4 = 480 == window.screen.height && 320 == window.screen.width || 480 == window.screen.width && 320 == window.screen.height), this.iPad = navigator.userAgent.toLowerCase().indexOf("ipad") !== -1
            }, Device.prototype._checkFeatures = function() {
                "undefined" != typeof window.Blob && (this.blob = !0), this.canvas = !!window.CanvasRenderingContext2D;
                try {
                    this.localStorage = !!localStorage.getItem
                } catch (error) {
                    this.localStorage = !1
                }
                this.file = !!(window.File && window.FileReader && window.FileList && window.Blob), this.fileSystem = !!window.requestFileSystem, this.webGL = function() {
                    try {
                        var canvas = document.createElement("canvas");
                        return !!window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
                    } catch (e) {
                        return !1
                    }
                }(), (this.android || this.ie) && (this.webGL = !1), this.worker = !!window.Worker, ("ontouchstart" in document.documentElement || window.navigator.msPointerEnabled) && (this.touch = !0)
            }, Device.prototype._checkAudio = function() {
                this.audioData = !!window.Audio, this.webaudio = !(!window.AudioContext && !window.webkitAudioContext);
                var audioElement = document.createElement("audio"),
                    result = !1;
                try {
                    result == !!audioElement.canPlayType && (audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (this.ogg = !0), audioElement.canPlayType("audio/mpeg;").replace(/^no$/, "") && (this.mp3 = !0), audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") && (this.wav = !0), (audioElement.canPlayType("audio/x-m4a;") || audioElement.canPlayType("audio/aac;").replace(/^no$/, "")) && (this.m4a = !0))
                } catch (e) {}
            }, Device.prototype._checkIsMobile = function() {
                var check = !1;
                ! function(a) {
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) && (check = !0)
                }(navigator.userAgent || navigator.vendor || window.opera), this.isMobile = check, this.mobile = check
            }, Device.prototype._checkIsTouch = function() {
                this.isTouch = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
            }, Device.prototype.is_touch_device = function() {}, Device.prototype.getInfo = function() {
                var output = "DEVICE OUTPUT\n\n";
                return output += "---\n", output += "Browser Info :: \n", output += "Arora : " + this.arora + "\n", output += "Chrome : " + this.chrome + "\n", output += "Epiphany : " + this.epiphany + "\n", output += "Firefox : " + this.firefox + "\n", output += "Mobile Safari : " + this.mobileSafari + "\n", output += "IE : " + this.ie, output += this.ie ? " (Version " + this.ieVersion + ")\n" : "\n", output += "Midori : " + this.midori + "\n", output += "Opera : " + this.opera + "\n", output += "Safari : " + this.safari + "\n", output += "Web App : " + this.webApp + "\n", output += "CocoonJS : " + this.cocoonJS + "\n", output += "Android : " + this.android + "\n", output += "---\n", output += "Operating System :: \n", output += "Chrome OS : " + this.chromeOS + "\n", output += "iOS : " + this.iOS + "\n", output += "Linux : " + this.linux + "\n", output += "Mac OS : " + this.macOS + "\n", output += "Windows : " + this.windows + "\n", output += "Desktop : " + this.desktop + "\n", output += "---\n", output += "Device Type : \n", output += "Pixel Ratio : " + this.pixelRatio + "\n", output += "iPhone : " + this.iPhone + "\n", output += "iPhone 4 : " + this.iPhone4 + "\n", output += "iPad : " + this.iPad + "\n", output += "---\n", output += "Features :: \n", output += "Blob : " + this.blob + "\n", output += "Canvas : " + this.canvas + "\n", output += "LocalStorage : " + this.localStorage + "\n", output += "File : " + this.file + "\n", output += "File System : " + this.fileSystem + "\n", output += "WebGL : " + this.webGL + "\n", output += "Workers : " + this.worker + "\n", output += "---\n", output += "Audio :: \n", output += "AudioData : " + this.audioData + "\n", output += "WebAudio : " + this.webAudio + "\n", output += "Supports .ogg : " + this.ogg + "\n", output += "Supports Opus : " + this.opus + "\n", output += "Supports .mp3 : " + this.mp3 + "\n", output += "Supports .wav : " + this.wav + "\n", output += "Supports .m4a : " + this.m4a + "\n", output += "Supports .webm : " + this.webm
            }, _createClass(Device, [{
                key: "ie9",
                get: function() {
                    return this.ie && 9 === this.ieVersion
                }
            }, {
                key: "useSM2",
                get: function() {
                    return this.ie || this.opera
                }
            }]), Device
        }();
    exports.default = new Device, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _const = __webpack_require__(23);
    exports.default = new(function() {
        function GLExtensions() {
            _classCallCheck(this, GLExtensions), this.extensions = {}
        }
        return _createClass(GLExtensions, [{
            key: "init",
            value: function() {
                for (var gl = POLY.gl, i = 0; i < _const.extensions.length; i++) this.extensions[_const.extensions[i]] = gl.getExtension(_const.extensions[i])
            }
        }, {
            key: "checkExtension",
            value: function(id) {
                return !!this.extensions[id]
            }
        }, {
            key: "getExtension",
            value: function(id) {
                return this.extensions[id]
            }
        }]), GLExtensions
    }()), module.exports = exports.default
}, function(module, exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        BLEND = 0,
        DEPTH_TEST = 1,
        FRONT_FACE = 2,
        CULL_FACE = 3,
        BLEND_FUNC = 4,
        State = function() {
            function State(gl) {
                _classCallCheck(this, State), this.gl = gl, this.activeState = new Uint8Array(16), this.defaultState = new Uint8Array(16), this.data = 0, this.blendMode = 0, this.blendModes = {
                    source: {
                        alpha: this.gl.SRC_ALPHA
                    },
                    dest: {
                        one: this.gl.ONE
                    }
                }
            }
            return _createClass(State, [{
                key: "setState",
                value: function(state) {
                    this.setBlend(state.activeState[BLEND]), this.setDepthTest(state.activeState[DEPTH_TEST]), this.setFrontFace(state.activeState[FRONT_FACE]), this.setCullFace(state.activeState[CULL_FACE]), this.setBlendMode(state.activeState[BLEND_FUNC])
                }
            }, {
                key: "setBlend",
                value: function(value) {
                    value = value ? 1 : 0, this.activeState[BLEND] !== value && (this.activeState[BLEND] = value, this.gl[value ? "enable" : "disable"](this.gl.BLEND))
                }
            }, {
                key: "setBlendMode",
                value: function(value) {
                    var source = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "alpha",
                        dest = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "one";
                    value !== this.activeState[BLEND_FUNC] && (this.activeState[BLEND_FUNC] = value, this.gl.blendFunc(this.blendModes.source[source], this.blendModes.dest[dest]))
                }
            }, {
                key: "setDepthTest",
                value: function(value) {
                    value = value ? 1 : 0, this.activeState[DEPTH_TEST] !== value && (this.activeState[DEPTH_TEST] = value, this.gl[value ? "enable" : "disable"](this.gl.DEPTH_TEST))
                }
            }, {
                key: "setCullFace",
                value: function(value) {
                    value = value ? 1 : 0, this.activeState[CULL_FACE] !== value && (this.activeState[CULL_FACE] = value, this.gl[value ? "enable" : "disable"](this.gl.CULL_FACE))
                }
            }, {
                key: "setFrontFace",
                value: function(value) {
                    value = value ? 1 : 0, this.activeState[FRONT_FACE] !== value && (this.activeState[FRONT_FACE] = value, this.gl.frontFace(this.gl[value ? "CW" : "CCW"]))
                }
            }, {
                key: "blend",
                get: function() {
                    return this.activeState[BLEND]
                },
                set: function(value) {
                    this.activeState[BLEND] = value
                }
            }, {
                key: "culling",
                get: function() {
                    return this.activeState[CULLING]
                },
                set: function(value) {
                    this.activeState[CULLING] = value
                }
            }, {
                key: "depthTest",
                get: function() {
                    return this.activeState[DEPTH_TEST]
                },
                set: function(value) {
                    this.activeState[DEPTH_TEST] = value
                }
            }, {
                key: "clockwiseFrontFace",
                get: function() {
                    return this.activeState[FRONT_FACE]
                },
                set: function(value) {
                    this.activeState[FRONT_FACE] = value
                }
            }, {
                key: "blendMode",
                get: function() {
                    return this.activeState[BLEND_FUNC]
                },
                set: function(value) {
                    this.activeState[BLEND_FUNC] = value
                }
            }]), State
        }();
    exports.default = State, module.exports = exports.default
}, function(module, exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        FacesMultiplicator = function() {
            function FacesMultiplicator() {
                _classCallCheck(this, FacesMultiplicator), this.indexUniq = 0, this.middlePointIndexCache = {}, this.vertices = [], this.isNormalised = !0
            }
            return _createClass(FacesMultiplicator, [{
                key: "multiplyTriangles",
                value: function(n, indices, vertices) {
                    this.indexUniq = vertices.length, this.vertices = vertices;
                    var faces = indices.slice();
                    this.isNormalised = !0;
                    for (var i = 0; i < this.vertices.length && this.isNormalised; i++)
                        for (var k = 0; k < this.vertices[i].length; k++) Math.abs(this.vertices[i][k]) > 1 && (this.isNormalised = !1);
                    for (var i = 0; i < n; i++) {
                        for (var faces2 = [], k = 0; k < faces.length; k++) {
                            var tri = faces[k],
                                a = this.getMiddlePoint(tri[0], tri[1]),
                                b = this.getMiddlePoint(tri[1], tri[2]),
                                c = this.getMiddlePoint(tri[2], tri[0]);
                            faces2.push([tri[0], a, c]), faces2.push([tri[1], b, a]), faces2.push([tri[2], b, c]), faces2.push([a, b, c])
                        }
                        faces = faces2.slice()
                    }
                    return faces
                }
            }, {
                key: "addVertex",
                value: function(position) {
                    var length = this.isNormalised ? Math.sqrt(position[0] * position[0] + position[1] * position[1] + position[2] * position[2]) : 1;
                    return this.vertices.push([position[0] / length, position[1] / length, position[2] / length]), this.indexUniq++
                }
            }, {
                key: "getMiddlePoint",
                value: function(p1, p2) {
                    var firstPointIsSmaller = p1 < p2,
                        smallerIndex = firstPointIsSmaller ? p1 : p2,
                        greaterIndex = firstPointIsSmaller ? p2 : p1,
                        key = (smallerIndex << 32) + greaterIndex,
                        point1 = this.vertices[p1],
                        point2 = this.vertices[p2],
                        middle = [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2, (point1[2] + point2[2]) / 2],
                        i = this.addVertex(middle);
                    return this.middlePointIndexCache[key] = i, i
                }
            }]), FacesMultiplicator
        }();
    exports.default = new FacesMultiplicator, module.exports = exports.default
}, function(module, exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        FacesSeparator = function() {
            function FacesSeparator() {
                _classCallCheck(this, FacesSeparator)
            }
            return _createClass(FacesSeparator, [{
                key: "separate",
                value: function(faces, vertices) {
                    for (var triangles = [], ind = [], i = 0; i < faces.length; i++) triangles.push(faces[i][0], faces[i][1], faces[i][2]), ind.push(faces[i][0], faces[i][1], faces[i][2]);
                    for (var oldVerts = vertices.slice(), newVertices = [], _i = 0; _i < triangles.length; _i++) newVertices[_i] = oldVerts[triangles[_i]].slice(), triangles[_i] = _i;
                    return {
                        faces: triangles,
                        vertices: newVertices
                    }
                }
            }]), FacesSeparator
        }();
    exports.default = new FacesSeparator, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function Resource(name, url, options) {
        if (EventEmitter.call(this), options = options || {}, "string" != typeof name || "string" != typeof url) throw new Error("Both name and url are required for constructing a resource.");
        this.name = name, this.url = url, this.isDataUrl = 0 === this.url.indexOf("data:"), this.data = null, this.crossOrigin = options.crossOrigin === !0 ? "anonymous" : options.crossOrigin, this.loadType = options.loadType || this._determineLoadType(), this.xhrType = options.xhrType, this.metadata = options.metadata || {}, this.error = null, this.xhr = null, this.isJson = !1, this.isXml = !1, this.isImage = !1, this.isAudio = !1, this.isVideo = !1, this.isComplete = !1, this.isLoading = !1, this._dequeue = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this)
    }

    function reqType(xhr) {
        return xhr.toString().replace("object ", "")
    }

    function setExtMap(map, extname, val) {
        extname && 0 === extname.indexOf(".") && (extname = extname.substring(1)), extname && (map[extname] = val)
    }
    var EventEmitter = __webpack_require__(20),
        parseUri = __webpack_require__(21),
        useXdr = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
        tempAnchor = null,
        STATUS_NONE = 0,
        STATUS_OK = 200,
        STATUS_EMPTY = 204;
    Resource.prototype = Object.create(EventEmitter.prototype), Resource.prototype.constructor = Resource, module.exports = Resource, Resource.prototype.complete = function() {
        if (this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
        this.isComplete = !0, this.isLoading = !1, this.emit("complete", this)
    }, Resource.prototype.abort = function(message) {
        if (!this.error) {
            if (this.error = new Error(message), this.xhr) this.xhr.abort();
            else if (this.xdr) this.xdr.abort();
            else if (this.data)
                if ("undefined" != typeof this.data.src) this.data.src = "";
                else
                    for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
            this.complete()
        }
    }, Resource.prototype.load = function(cb) {
        if (!this.isLoading)
            if (this.isComplete) {
                if (cb) {
                    var self = this;
                    setTimeout(function() {
                        cb(self)
                    }, 1)
                }
            } else switch (cb && this.once("complete", cb), this.isLoading = !0, this.emit("start", this), this.crossOrigin !== !1 && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                case Resource.LOAD_TYPE.IMAGE:
                    this._loadElement("image");
                    break;
                case Resource.LOAD_TYPE.AUDIO:
                    this._loadSourceElement("audio");
                    break;
                case Resource.LOAD_TYPE.VIDEO:
                    this._loadSourceElement("video");
                    break;
                case Resource.LOAD_TYPE.XHR:
                default:
                    useXdr && this.crossOrigin ? this._loadXdr() : this._loadXhr()
            }
    }, Resource.prototype._loadElement = function(type) {
        this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === type && "undefined" != typeof window.Image ? this.data = new Image : this.data = document.createElement(type), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url);
        var typeName = "is" + type[0].toUpperCase() + type.substring(1);
        this[typeName] === !1 && (this[typeName] = !0), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1)
    }, Resource.prototype._loadSourceElement = function(type) {
        if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === type && "undefined" != typeof window.Audio ? this.data = new Audio : this.data = document.createElement(type), null === this.data) return void this.abort("Unsupported element " + type);
        if (!this.metadata.skipSource)
            if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
            else if (Array.isArray(this.url))
            for (var i = 0; i < this.url.length; ++i) this.data.appendChild(this._createSource(type, this.url[i]));
        else this.data.appendChild(this._createSource(type, this.url));
        this["is" + type[0].toUpperCase() + type.substring(1)] = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1),
            this.data.load()
    }, Resource.prototype._loadXhr = function() {
        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
        var xhr = this.xhr = new XMLHttpRequest;
        xhr.open("GET", this.url, !0), this.xhrType === Resource.XHR_RESPONSE_TYPE.JSON || this.xhrType === Resource.XHR_RESPONSE_TYPE.DOCUMENT ? xhr.responseType = Resource.XHR_RESPONSE_TYPE.TEXT : xhr.responseType = this.xhrType, xhr.addEventListener("error", this._boundXhrOnError, !1), xhr.addEventListener("abort", this._boundXhrOnAbort, !1), xhr.addEventListener("progress", this._boundOnProgress, !1), xhr.addEventListener("load", this._boundXhrOnLoad, !1), xhr.send()
    }, Resource.prototype._loadXdr = function() {
        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
        var xdr = this.xhr = new XDomainRequest;
        xdr.timeout = 5e3, xdr.onerror = this._boundXhrOnError, xdr.ontimeout = this._boundXdrOnTimeout, xdr.onprogress = this._boundOnProgress, xdr.onload = this._boundXhrOnLoad, xdr.open("GET", this.url, !0), setTimeout(function() {
            xdr.send()
        }, 0)
    }, Resource.prototype._createSource = function(type, url, mime) {
        mime || (mime = type + "/" + url.substr(url.lastIndexOf(".") + 1));
        var source = document.createElement("source");
        return source.src = url, source.type = mime, source
    }, Resource.prototype._onError = function(event) {
        this.abort("Failed to load element using " + event.target.nodeName)
    }, Resource.prototype._onProgress = function(event) {
        event && event.lengthComputable && this.emit("progress", this, event.loaded / event.total)
    }, Resource.prototype._xhrOnError = function() {
        var xhr = this.xhr;
        this.abort(reqType(xhr) + " Request failed. Status: " + xhr.status + ', text: "' + xhr.statusText + '"')
    }, Resource.prototype._xhrOnAbort = function() {
        this.abort(reqType(this.xhr) + " Request was aborted by the user.")
    }, Resource.prototype._xdrOnTimeout = function() {
        this.abort(reqType(this.xhr) + " Request timed out.")
    }, Resource.prototype._xhrOnLoad = function() {
        var xhr = this.xhr,
            status = "undefined" == typeof xhr.status ? xhr.status : STATUS_OK;
        if (!(status === STATUS_OK || status === STATUS_EMPTY || status === STATUS_NONE && xhr.responseText.length > 0)) return void this.abort("[" + xhr.status + "]" + xhr.statusText + ":" + xhr.responseURL);
        if (this.xhrType === Resource.XHR_RESPONSE_TYPE.TEXT) this.data = xhr.responseText;
        else if (this.xhrType === Resource.XHR_RESPONSE_TYPE.JSON) try {
            this.data = JSON.parse(xhr.responseText), this.isJson = !0
        } catch (e) {
            return void this.abort("Error trying to parse loaded json:", e)
        } else if (this.xhrType === Resource.XHR_RESPONSE_TYPE.DOCUMENT) try {
            if (window.DOMParser) {
                var domparser = new DOMParser;
                this.data = domparser.parseFromString(xhr.responseText, "text/xml")
            } else {
                var div = document.createElement("div");
                div.innerHTML = xhr.responseText, this.data = div
            }
            this.isXml = !0
        } catch (e) {
            return void this.abort("Error trying to parse loaded xml:", e)
        } else this.data = xhr.response || xhr.responseText;
        this.complete()
    }, Resource.prototype._determineCrossOrigin = function(url, loc) {
        if (0 === url.indexOf("data:")) return "";
        loc = loc || window.location, tempAnchor || (tempAnchor = document.createElement("a")), tempAnchor.href = url, url = parseUri(tempAnchor.href, {
            strictMode: !0
        });
        var samePort = !url.port && "" === loc.port || url.port === loc.port,
            protocol = url.protocol ? url.protocol + ":" : "";
        return url.host === loc.hostname && samePort && protocol === loc.protocol ? "" : "anonymous"
    }, Resource.prototype._determineXhrType = function() {
        return Resource._xhrTypeMap[this._getExtension()] || Resource.XHR_RESPONSE_TYPE.TEXT
    }, Resource.prototype._determineLoadType = function() {
        return Resource._loadTypeMap[this._getExtension()] || Resource.LOAD_TYPE.XHR
    }, Resource.prototype._getExtension = function() {
        var url = this.url,
            ext = "";
        if (this.isDataUrl) {
            var slashIndex = url.indexOf("/");
            ext = url.substring(slashIndex + 1, url.indexOf(";", slashIndex))
        } else {
            var queryStart = url.indexOf("?");
            queryStart !== -1 && (url = url.substring(0, queryStart)), ext = url.substring(url.lastIndexOf(".") + 1)
        }
        return ext.toLowerCase()
    }, Resource.prototype._getMimeFromXhrType = function(type) {
        switch (type) {
            case Resource.XHR_RESPONSE_TYPE.BUFFER:
                return "application/octet-binary";
            case Resource.XHR_RESPONSE_TYPE.BLOB:
                return "application/blob";
            case Resource.XHR_RESPONSE_TYPE.DOCUMENT:
                return "application/xml";
            case Resource.XHR_RESPONSE_TYPE.JSON:
                return "application/json";
            case Resource.XHR_RESPONSE_TYPE.DEFAULT:
            case Resource.XHR_RESPONSE_TYPE.TEXT:
            default:
                return "text/plain"
        }
    }, Resource.LOAD_TYPE = {
        XHR: 1,
        IMAGE: 2,
        AUDIO: 3,
        VIDEO: 4
    }, Resource.XHR_RESPONSE_TYPE = {
        DEFAULT: "text",
        BUFFER: "arraybuffer",
        BLOB: "blob",
        DOCUMENT: "document",
        JSON: "json",
        TEXT: "text"
    }, Resource._loadTypeMap = {
        gif: Resource.LOAD_TYPE.IMAGE,
        png: Resource.LOAD_TYPE.IMAGE,
        bmp: Resource.LOAD_TYPE.IMAGE,
        jpg: Resource.LOAD_TYPE.IMAGE,
        jpeg: Resource.LOAD_TYPE.IMAGE,
        tif: Resource.LOAD_TYPE.IMAGE,
        tiff: Resource.LOAD_TYPE.IMAGE,
        webp: Resource.LOAD_TYPE.IMAGE,
        tga: Resource.LOAD_TYPE.IMAGE,
        "svg+xml": Resource.LOAD_TYPE.IMAGE
    }, Resource._xhrTypeMap = {
        xhtml: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
        html: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
        htm: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
        xml: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
        tmx: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
        tsx: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
        svg: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
        gif: Resource.XHR_RESPONSE_TYPE.BLOB,
        png: Resource.XHR_RESPONSE_TYPE.BLOB,
        bmp: Resource.XHR_RESPONSE_TYPE.BLOB,
        jpg: Resource.XHR_RESPONSE_TYPE.BLOB,
        jpeg: Resource.XHR_RESPONSE_TYPE.BLOB,
        tif: Resource.XHR_RESPONSE_TYPE.BLOB,
        tiff: Resource.XHR_RESPONSE_TYPE.BLOB,
        webp: Resource.XHR_RESPONSE_TYPE.BLOB,
        tga: Resource.XHR_RESPONSE_TYPE.BLOB,
        json: Resource.XHR_RESPONSE_TYPE.JSON,
        text: Resource.XHR_RESPONSE_TYPE.TEXT,
        txt: Resource.XHR_RESPONSE_TYPE.TEXT
    }, Resource.setExtensionLoadType = function(extname, loadType) {
        setExtMap(Resource._loadTypeMap, extname, loadType)
    }, Resource.setExtensionXhrType = function(extname, xhrType) {
        setExtMap(Resource._xhrTypeMap, extname, xhrType)
    }
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /** @license
     * JS Signals <http://millermedeiros.github.com/js-signals/>
     * Released under the MIT license
     * Author: Miller Medeiros
     * Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
     */
    ! function(global) {
        function SignalBinding(signal, listener, isOnce, listenerContext, priority) {
            this._listener = listener, this._isOnce = isOnce, this.context = listenerContext, this._signal = signal, this._priority = priority || 0
        }

        function validateListener(listener, fnName) {
            if ("function" != typeof listener) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", fnName))
        }

        function Signal() {
            this._bindings = [], this._prevParams = null;
            var self = this;
            this.dispatch = function() {
                Signal.prototype.dispatch.apply(self, arguments)
            }
        }
        SignalBinding.prototype = {
            active: !0,
            params: null,
            execute: function(paramsArr) {
                var handlerReturn, params;
                return this.active && this._listener && (params = this.params ? this.params.concat(paramsArr) : paramsArr, handlerReturn = this._listener.apply(this.context, params), this._isOnce && this.detach()), handlerReturn
            },
            detach: function() {
                return this.isBound() ? this._signal.remove(this._listener, this.context) : null
            },
            isBound: function() {
                return !!this._signal && !!this._listener
            },
            isOnce: function() {
                return this._isOnce
            },
            getListener: function() {
                return this._listener
            },
            getSignal: function() {
                return this._signal
            },
            _destroy: function() {
                delete this._signal, delete this._listener, delete this.context
            },
            toString: function() {
                return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
            }
        }, Signal.prototype = {
            VERSION: "1.0.0",
            memorize: !1,
            _shouldPropagate: !0,
            active: !0,
            _registerListener: function(listener, isOnce, listenerContext, priority) {
                var binding, prevIndex = this._indexOfListener(listener, listenerContext);
                if (prevIndex !== -1) {
                    if (binding = this._bindings[prevIndex], binding.isOnce() !== isOnce) throw new Error("You cannot add" + (isOnce ? "" : "Once") + "() then add" + (isOnce ? "Once" : "") + "() the same listener without removing the relationship first.")
                } else binding = new SignalBinding(this, listener, isOnce, listenerContext, priority), this._addBinding(binding);
                return this.memorize && this._prevParams && binding.execute(this._prevParams), binding
            },
            _addBinding: function(binding) {
                var n = this._bindings.length;
                do --n; while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
                this._bindings.splice(n + 1, 0, binding)
            },
            _indexOfListener: function(listener, context) {
                for (var cur, n = this._bindings.length; n--;)
                    if (cur = this._bindings[n], cur._listener === listener && cur.context === context) return n;
                return -1
            },
            has: function(listener, context) {
                return this._indexOfListener(listener, context) !== -1
            },
            add: function(listener, listenerContext, priority) {
                return validateListener(listener, "add"), this._registerListener(listener, !1, listenerContext, priority)
            },
            addOnce: function(listener, listenerContext, priority) {
                return validateListener(listener, "addOnce"), this._registerListener(listener, !0, listenerContext, priority)
            },
            remove: function(listener, context) {
                validateListener(listener, "remove");
                var i = this._indexOfListener(listener, context);
                return i !== -1 && (this._bindings[i]._destroy(), this._bindings.splice(i, 1)), listener
            },
            removeAll: function() {
                for (var n = this._bindings.length; n--;) this._bindings[n]._destroy();
                this._bindings.length = 0
            },
            getNumListeners: function() {
                return this._bindings.length
            },
            halt: function() {
                this._shouldPropagate = !1
            },
            dispatch: function(params) {
                if (this.active) {
                    var bindings, paramsArr = Array.prototype.slice.call(arguments),
                        n = this._bindings.length;
                    if (this.memorize && (this._prevParams = paramsArr), n) {
                        bindings = this._bindings.slice(), this._shouldPropagate = !0;
                        do n--; while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== !1)
                    }
                }
            },
            forget: function() {
                this._prevParams = null
            },
            dispose: function() {
                this.removeAll(), delete this._bindings, delete this._prevParams
            },
            toString: function() {
                return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
            }
        };
        var signals = Signal;
        signals.Signal = Signal, __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return signals
        }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }(this)
}, function(module, exports) {
    module.exports = "precision highp float;\n\nuniform vec3 color;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, 1.0);\n}\n"
}, function(module, exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var Physics = function() {
        function Physics() {
            _classCallCheck(this, Physics), this.circles = [], this.previousTime = 0, this.currentTime = 0, this.fixedDeltaTime = 4, this.fixedDeltaTimeSeconds = this.fixedDeltaTime / 1e3, this.leftOverDeltaTime = 0, this.constraintAccuracy = 10
        }
        return Physics.prototype.update = function(pointmasses) {
            this.currentTime = Date.now();
            var deltaTimeMS = this.currentTime - this.previousTime;
            this.previousTime = this.currentTime;
            var timeStepAmt = (deltaTimeMS + this.leftOverDeltaTime) / this.fixedDeltaTime;
            timeStepAmt = Math.min(timeStepAmt, 5), this.leftOverDeltaTime = deltaTimeMS - timeStepAmt * this.fixedDeltaTime;
            for (var iteration = 1; iteration <= timeStepAmt; iteration++) {
                for (var x = 0; x < this.constraintAccuracy; x++)
                    for (var i = 0; i < pointmasses.length; i++) {
                        var pointmass = pointmasses[i];
                        pointmass.solveConstraints()
                    }
                for (var _i = 0; _i < pointmasses.length; _i++) {
                    var _pointmass = pointmasses[_i];
                    _pointmass.updatePhysics(this.fixedDeltaTimeSeconds)
                }
            }
        }, Physics
    }();
    exports.default = Physics, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj)
            for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _Poly = __webpack_require__(1),
        POLY = _interopRequireWildcard(_Poly),
        _signals = __webpack_require__(10);
    _interopRequireDefault(_signals);
    exports.default = new(function() {
        function TextureManager() {
            _classCallCheck(this, TextureManager), this.textures = {}, this.currentTextureToLoad = null
        }
        return TextureManager.prototype.getTexture = function(id) {
            return this.textures[id]
        }, TextureManager.prototype.addTextures = function(arrayTextures, cb) {
            this.idFunc = POLY.utils.loop.add(this.update.bind(this)), this.indexImageLoaded = 0, this.arrayTextures = arrayTextures, this.loadNext(), this.cb = cb
        }, TextureManager.prototype.loadNext = function() {
            this.arrayTextures[this.indexImageLoaded] ? (this.textures[this.arrayTextures[this.indexImageLoaded]] = new POLY.Texture(this.arrayTextures[this.indexImageLoaded]), this.currentTextureToLoad = this.textures[this.arrayTextures[this.indexImageLoaded]]) : (POLY.utils.loop.remove(this.idFunc), this.cb && (this.cb(), this.cb = null))
        }, TextureManager.prototype.update = function() {
            this.currentTextureToLoad && this.currentTextureToLoad._loaded && (this.currentTextureToLoad.bind(), this.indexImageLoaded++, this.loadNext())
        }, TextureManager
    }()), module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }
    exports.__esModule = !0;
    var _Device = __webpack_require__(4),
        _Device2 = _interopRequireDefault(_Device);
    exports.default = {
        layout: {
            main: {
                size: [7, 7],
                grid: ["icon_boss", "starwars_fighter3", "icon_catch", "starwars_rebels", "icon_deer", "lego_walker", "icon_twitter", "technosquid", "icon_mom", "starwars_arcade", "icon_movie", "danger_mouse", "icon_rugby", "spotbots", "icon_glasses", "starwars_fighter2", "icon_github", "cooking", "icon_movie", "dreamy2", "icon_julien", "gumble", "icon_saxo", "sheriff_callie", "icon_dog", "trunk_santa", "dennis_and_gnasher", "icon_contact", "trump", "confettis", "icon_address", "plane_to_sphere", "sleigher3000", "night_eyes", "starwars_fighter3", "starwars_fighter1", "icon_catch", "dennis_and_gnasher", "night_eyes", "lego", "handsup", "music_maker", "particles_stream", "icon_julien", "icosphere", "handsup", "ddd", "icon_tinder", "dreamy"]
            },
            pro: {
                size: [4, 5],
                grid: ["cooking", "starwars_fighter2", "lego", "gumble", "sheriff_callie", "handsup", "dreamy2", "lego_walker", "starwars_rebels", "dennis_and_gnasher", "danger_mouse", "starwars_fighter1", "spotbots", "starwars_fighter3", "starwars_arcade", "worst_witch", "music_maker", "dennis_and_gnasher", "handsup", "dreamy"]
            },
            lab: {
                size: [4, 4],
                grid: ["ddd", "night_eyes", "icosphere", "dreamy", "trunk_santa", "plane_to_sphere", "sleigher3000", "technosquid", "trump", "dreamy2", "line_animation", "confettis", "night_eyes", "ddd", "trump", "particles_stream"]
            },
            about: {
                size: [3, 5],
                grid: ["icon_boss", "icon_catch", "icon_deer", "icon_dog", "icon_glasses", "icon_mom", "icon_movie", "icon_twitter", "icon_julien", "icon_address", "icon_contact", "icon_github", "icon_tinder", "icon_saxo", "icon_rugby"]
            }
        },
        data: {
            music_maker: {
                id: "music_maker",
                title: "Music Maker 🎶",
                images: ["paw_patrol_music_maker.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [0, 0, 0],
                team: {
                    art: ["<a href='http://www.tomjennings.me/' target='_blank'> Tom Jennings </a>"],
                    dev: []
                },
                description: "We created three music toys for Nickelodeon and their leading pre-school brands. In addition to that we made a 'grey box' version so that Nick's editorial teams could easily produce new versions for other brands with a minimum of technical experience required. <br><br><div class='center'>TECH: WebGL, Pixi.js, Sono.js</div>",
                client: "Nickelodeon",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2017",
                link: "http://www.nickjr.co.uk/paw-patrol/games/paw-patrol-music-maker/",
                type: "photo"
            },
            worst_witch: {
                id: "worst_witch",
                title: "The Worst Witch",
                images: ["worst-witch.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [0, 0, 0],
                team: {
                    art: ["Many"],
                    dev: ["<a href='https://twitter.com/yiwen_lin' target='_blank'>Wen </a> (lead)", "<a href='https://twitter.com/xvi_jojo' target='_blank'Jordan Machado</a>"]
                },
                description: "<div class='center'>Read the complete case study <a href='https://www.goodboydigital.com/case-study/the-worst-witch-magic-adventure' target='_blank'> here (by Goodboy) </a> :)  <br><br>TECH: 3D World, Pixi.js, WebGL</div>",
                client: "CBBC",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2017",
                link: "https://www.bbc.co.uk/cbbc/games/the-worst-witch-magic-adventure-game",
                type: "photo"
            },
            spotbots: {
                id: "spotbots",
                title: "Spotbots",
                images: ["spotbots_switched_on.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [0, 0, 0],
                team: {
                    art: ["Toby Sperring"],
                    dev: []
                },
                description: "<div class='center'>Let's get switched on! We developed 3 mini games for the pre-school brand Spotbots. <br><br>TECHS: Accessibility, Hexagonal Grid, HTML5, WebGL </div>",
                client: "CBEEBIES",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2016",
                link: "https://www.bbc.co.uk/cbeebies/games/spot-bots-switched-on",
                type: "photo"
            },
            lego_walker: {
                id: "lego_walker",
                title: "Out of Step",
                images: ["lego_out_step.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [75 / 255, 218 / 255, 254 / 255],
                team: {
                    art: ['<a href="https://twitter.com/juannacho" target="_blank"> John Denton </a>', '<a href="https://suardjulien.com" target="_blank">Julien suard</a>'],
                    dev: ['<a href="https://twitter.com/Doormat23" target="_blank">Mat Groves </a> (lead)']
                },
                description: "<div class='center'>Read the complete case study <a href='https://www.goodboydigital.com/case-study/out-of-step' target='_blank'> here (by Goodboy) </a> :)  <br><br><div class='center'>TECH: Pixi.js, WebGL </div></div>",
                client: "LEGO",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2017",
                link: "https://www.lego.com/assets/FranchiseSites/Portal/Out-Of-Step/v2/index.html",
                type: "photo"
            },
            ddd: {
                id: "ddd",
                title: "DDD 2018",
                images: ["ddd-2018.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [194 / 255, 82 / 255, 56 / 255],
                team: {
                    art: ['<a href="https://suardjulien.com" target="_blank">Julien suard</a>'],
                    dev: []
                },
                description: "Experiment for Design Digital Days 2018: Monolithic. A great opportunity to explore reflection's methods and water effect! <br><br><div class='center'>TECH: 3D, Poly.js, WebGL</div>",
                client: "DDD",
                producer: "Experiment",
                date: "2018",
                link: "https://madclem.github.io/ddd-2018/",
                type: "photo"
            },
            particles_stream: {
                id: "particles_stream",
                title: "Particles stream",
                images: ["particles_stream.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [0, 0, 0],
                team: {
                    art: [],
                    dev: []
                },
                description: "First particles using FBO \"ping pong\" and multitextures. Based on Wen's particles <a href='http://blog.bongiovi.tw/webgl-gpu-particle-stream/' target='_blank'>blog post</a> <br><br><div class='center'>TECH: Poly.js, WebGL</div>",
                client: "Experiment",
                producer: "particles",
                date: "2018",
                link: "http://work.goodboydigital.com/experiments/clem/particles-stream/",
                type: "photo"
            },
            handsup: {
                id: "handsup",
                title: "HANDS'UP",
                images: ["handsup_001.jpg", "handsup_002.jpg", "handsup_003.jpg", "handsup_004.jpg", "handsup_005.jpg", "handsup_006.jpg", "handsup_007.jpg", "handsup_008.jpg", "handsup_009.jpg", "handsup_010.jpg", "handsup_011.jpg", "handsup_012.jpg", "handsup_013.jpg", "handsup_014.jpg", "handsup_015.jpg", "handsup_016.jpg", "handsup_017.jpg", "handsup_018.jpg", "handsup_019.jpg", "handsup_020.jpg", "handsup_021.jpg", "handsup_022.jpg", "handsup_023.jpg", "handsup_024.jpg", "handsup_025.jpg", "handsup_026.jpg", "handsup_027.jpg", "handsup_028.jpg", "handsup_029.jpg", "handsup_030.jpg", "handsup_031.jpg", "handsup_032.jpg", "handsup_033.jpg", "handsup_034.jpg", "handsup_035.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [113 / 255, 126 / 255, 172 / 255],
                team: {
                    art: ['<a href="https://twitter.com/juannacho" target="_blank"> John Denton </a>'],
                    dev: ['<a href="https://twitter.com/Doormat23" target="_blank">Mat Groves </a>']
                },
                description: "\"Liberty Global Appathon\" multiplayer game that we had the chance to develop for the Metrological TV boxes. Hands down the funniest game we ever did at Goodboy! <br><br><div class='center'>TECH: Websocket, Raspberry PI, Node.js, Pixi.js, WebGL.</div>",
                client: "Metrological",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2017",
                link: "http://work.goodboydigital.com/handsup/game/",
                type: "photo"
            },
            technosquid: {
                id: "technosquid",
                title: "TECHNOSQUID",
                images: ["img001.jpg", "img002.jpg", "img003.jpg", "img004.jpg", "img005.jpg", "img006.jpg", "img007.jpg", "img008.jpg", "img009.jpg", "img010.jpg", "img011.jpg", "img012.jpg", "img013.jpg", "img014.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [0, 0, 0],
                team: {
                    art: [],
                    dev: []
                },
                description: "Musical Experiment (probably broken since the latest Chrome updates) <br><br><div class='center'>TECH: HTML5, WebGL</div>",
                client: "EXPERIMENT",
                producer: "particles",
                date: "2017",
                link: "http://work.goodboydigital.com/experiments/clem/technosquid/",
                type: "photo"
            },
            night_eyes: {
                id: "night_eyes",
                title: "NIGHT EYE",
                images: ["night-eye.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ["Bert"],
                    dev: ['<a href="https://twitter.com/yiwen_lin" target="_blank">Wen</a>']
                },
                description: 'Opening of the Christmas Experiment (2016 edition) with my friend Wen! Explore the night forest, manipulate the elements and frolic with the light creatures.  Check out our <a href="http://blog.bongiovi.tw/case-study-night-eye/">VR and reflection (Wen)</a> and <a href="https://medium.com/@mad_clem/night-eyes-case-study-19eb54068379">line drawing and animation (me)</a> case studies. <br><br><div class=\'center\'>TECH: 3D, VR, Alfrid.js (Wen\'s WebGL tool).</div>',
                client: "EXPERIMENT",
                producer: "CHRISTMASEXP",
                date: "2016",
                link: "http://work.goodboydigital.com/night-eyes/",
                type: "photo"
            },
            icosphere: {
                id: "icosphere",
                title: "ICOSPHERE",
                images: ["blob_001.jpg", "blob_002.jpg", "blob_003.jpg", "blob_004.jpg", "blob_005.jpg", "blob_006.jpg", "blob_007.jpg", "blob_008.jpg", "blob_009.jpg", "blob_010.jpg", "blob_011.jpg", "blob_012.jpg", "blob_013.jpg", "blob_014.jpg", "blob_015.jpg", "blob_016.jpg", "blob_017.jpg", "blob_018.jpg", "blob_019.jpg", "blob_020.jpg", "blob_021.jpg", "blob_022.jpg", "blob_023.jpg", "blob_024.jpg", "blob_025.jpg", "blob_026.jpg", "blob_027.jpg", "blob_028.jpg", "blob_029.jpg", "blob_030.jpg", "blob_031.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "Icosphere geometry, a nice different way to draw a sphere! (see <a href=\"http://blog.andreaskahler.com/2009/06/creating-icosphere-mesh-in-code.html\"> article</a>). <br><br><div class='center'>TECH: WebGL</div>",
                client: "EXPERIMENT",
                producer: "icosphere",
                date: "2017",
                link: "http://work.goodboydigital.com/experiments/clem/icosphere/",
                type: "photo"
            },
            plane_to_sphere: {
                id: "plane_to_sphere",
                title: "PLANE TO SPHERE",
                images: ["plane_to_sphere.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "Transform a plane geometry into a sphere geometry. An idea from Wen to teach me WebGL basics. <br><br><div class='center'>TECH: WebGL</div>",
                client: "EXPERIMENT",
                producer: "BUFFERS TRANSITIONS",
                date: "2017",
                link: "http://work.goodboydigital.com/codevember/clem/02/",
                type: "photo"
            },
            starwars_arcade: {
                id: "starwars_arcade",
                title: "STARWARS ARCADE",
                images: ["arcade.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ["many people"],
                    dev: ["many people"]
                },
                description: "Read the complete case study <a href='https://www.goodboydigital.com/case-study/star-wars-arcade' target='_blank'> here (by Goodboy) </a> :)  <br><br><div class='center'>TECH: Pixi.js, WebGL</div>",
                client: "Disney",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2017",
                link: "https://www.goodboydigital.com/case-study/star-wars-arcade",
                type: "photo"
            },
            cooking: {
                id: "cooking",
                title: "DISNEY CAFE",
                images: ["cooking.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [91 / 255, 133 / 255, 88 / 255],
                team: {
                    art: ["<a href='http://www.tomjennings.me/' target='_blank'> Tom Jennings </a>"],
                    dev: ["Tom Slezakovski"]
                },
                description: "Vanilla Panna Cotta, Flatbread with Hummus and Figs, Diva's Calzone... You name it you got it! (do not try this at home 🔪) <br><br><div class='center'>TECH: Pixi.js, WebGL, p2.js, serious cooking skills</div>",
                client: "Disney",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2016",
                link: "http://work.goodboydigital.com/star-cafe/",
                type: "photo"
            },
            trunk_santa: {
                id: "trunk_santa",
                title: "Trunk santa",
                images: ["trunk_trunk001.jpg", "trunk_trunk002.jpg", "trunk_trunk003.jpg", "trunk_trunk004.jpg", "trunk_trunk005.jpg", "trunk_trunk006.jpg", "trunk_trunk007.jpg", "trunk_trunk008.jpg", "trunk_trunk009.jpg", "trunk_trunk010.jpg", "trunk_trunk011.jpg", "trunk_trunk012.jpg", "trunk_trunk013.jpg", "trunk_trunk014.jpg", "trunk_trunk015.jpg", "trunk_trunk016.jpg", "trunk_trunk017.jpg", "trunk_trunk018.jpg", "trunk_trunk019.jpg", "trunk_trunk020.jpg", "trunk_trunk021.jpg", "trunk_trunk022.jpg", "trunk_trunk023.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ['<a href="https://suardjulien.com" target="_blank">Julien suard</a>'],
                    dev: []
                },
                description: "Christmas experiment, 2015 edition! Tight collaboration with my friend Julien Suard! Chop some wood and get that fire going! 🔥 <br><br><div class='center'>TECH: 2D slicing, Pixi.js, WebGL, p2.js</div>",
                client: "EXPERIMENT",
                producer: "CHRISTMASEXP",
                date: "2015",
                link: "http://work.goodboydigital.com/trunks-santa/",
                type: "photo"
            },
            sleigher3000: {
                id: "sleigher3000",
                title: "sleigher3000",
                images: ["sleigher3000.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ['<a href="https://twitter.com/juannacho" target="_blank"> John Denton </a>', '<a href="https://suardjulien.com" target="_blank">Julien suard</a>'],
                    dev: ['<a href="https://twitter.com/Doormat23" target="_blank">Mat Groves </a>']
                },
                description: "<div class'center'>Christmas Experiment, 2017 edition! Starfox meets Mario Kart! 🌟 <br><br>TECH: Pixi.js, 3D, WebGL</div>",
                client: "EXPERIMENT",
                producer: "CHRISTMASEXP",
                date: "2017",
                link: "http://work.goodboydigital.com/sleigher-3000/",
                type: "photo"
            },
            danger_mouse: {
                id: "danger_mouse",
                title: "DANGER MOUSE",
                images: ["dangermouse.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ["Many people"],
                    dev: ["Many people"]
                },
                description: "<div class='center'>Read the complete case study <a href='https://www.goodboydigital.com/case-study/danger-mouse-game' target='_blank'> here (by Goodboy) </a> :)  <br><br>TECH: Pixi.js, WebGL</div>",
                client: "CBBC",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2016-18",
                link: "https://www.bbc.co.uk/cbbc/games/danger-mouse-game",
                type: "photo"
            },
            dennis_and_gnasher: {
                id: "dennis_and_gnasher",
                title: "DENNIS AND GNASHER",
                images: ["denis.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [194 / 255, 82 / 255, 56 / 255],
                team: {
                    art: ['<a href="https://suardjulien.com" target="_blank">Julien suard</a>', '<a href="https://twitter.com/juannacho" target="_blank"> John Denton </a>', "Kim Le"],
                    dev: ['<a href="https://twitter.com/Doormat23" target="_blank">Mat Groves </a>']
                },
                description: 'Leg It through Beano town, slime your enemies, play as your favourite characters from the Dennis & Gnasher, Unleashed TV show and run, jump, slide and grind your way to the finish line. Download the app on <a href="https://itunes.apple.com/gb/app/cbbc-dennis-gnasher/id1375959196?mt=8" target="_blank">iOS</a> or <a href="https://play.google.com/store/apps/details?id=uk.co.bbc.cbbc.dennisandgnasher.legit" target="_blank">Android</a> (Web version coming soon!) <br><br><div class=\'center\'>TECH: HTML5, 3D, App, Pixi.js, WebGL</div>',
                client: "CBBC",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2018",
                link: _Device2.default.desktop ? "" : _Device2.default.android ? "https://play.google.com/store/apps/details?id=uk.co.bbc.cbbc.dennisandgnasher.legit" : "https://itunes.apple.com/gb/app/cbbc-dennis-gnasher/id1375959196?mt=8",
                type: "photo"
            },
            dreamy: {
                id: "dreamy",
                title: "DREAMY",
                images: ["dreamy1.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ["JULIEN SUAVE", "THOMAS 2 CHICOS"],
                    dev: ["GRALEX", "CHENEBOLOSS"]
                },
                description: 'Dreamy is a game on tablet aiming to enchant the kid\'s routine at the hospital. Immersed into a super hero universe, the player can choose and play with his super power to fight the battle against the "Dark Force". See full description <a href="https://suardjulien.com/9/" target="_blank">here</a>. <br><br><div class=\'center\'>TECH: Objective-C, iBeacon, Connected Objects</div>',
                client: "GOBELINS",
                producer: "STUDENT PROJECT",
                date: "2014",
                link: "",
                type: "photo"
            },
            dreamy2: {
                id: "dreamy2",
                title: "DREAMY",
                images: ["dreamy2.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ["JULIEN SUAVE", "THOMAS 2 CHICOS"],
                    dev: ["GRALEX", "CHENEBOLOSS"]
                },
                description: 'Dreamy is a game on tablet aiming to enchant the kid\'s routine at the hospital. Immersed into a super hero universe, the player can choose and play with his super power to fight the battle against the "Dark Force". See full description <a href="https://suardjulien.com/9/" target="_blank">here</a>. <br><br><div class=\'center\'>TECH: Objective-C, iBeacon, Connected Objects</div>',
                client: "GOBELINS",
                producer: "STUDENT PROJECT",
                date: "2014",
                link: "https://suardjulien.com/9/",
                type: "photo"
            },
            starwars_fighter1: {
                id: "starwars_fighter1",
                title: "STARWARS FIGHTER",
                images: ["fighter1.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ['<a href="https://suardjulien.com" target="_blank">Julien suard</a>'],
                    dev: []
                },
                description: '"Shoot\'em up" game developped for the release of the Starwars Awakens in the cinemas. Welcome to the resistance, and the May the force be with you. Read more about the art <a href="https://suardjulien.com/3/" target="_blank">here</a><br><br> U: goodboy    P: disney  <br><br><div class=\'center\'>TECH: Pixi.js, WebGL</div>',
                client: "Disney",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2016",
                link: "http://work.goodboydigital.com/starwars/fighter/",
                type: "photo"
            },
            starwars_fighter2: {
                id: "starwars_fighter2",
                title: "STARWARS FIGHTER",
                images: ["fighter2.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ['<a href="https://suardjulien.com" target="_blank">Julien suard</a>'],
                    dev: []
                },
                description: '"Shoot\'em up" game developped for the release of the Starwars Awakens in the cinemas. Welcome to the resistance, and the May the force be with you. Read more about the art <a href="https://suardjulien.com/3/" target="_blank">here</a><br><br> U: goodboy    P: disney  <br><br><div class=\'center\'>TECH: Pixi.js, WebGL</div>',
                client: "Disney",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2016",
                link: "http://work.goodboydigital.com/starwars/fighter/",
                type: "photo"
            },
            starwars_fighter3: {
                id: "starwars_fighter3",
                title: "STARWARS FIGHTER",
                images: ["fighter3.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ['<a href="https://suardjulien.com" target="_blank">Julien suard</a>'],
                    dev: []
                },
                description: '"Shoot\'em up" game developped for the release of the Starwars Awakens in the cinemas. Welcome to the resistance, and the May the force be with you. Read more about the art <a href="https://suardjulien.com/3/" target="_blank">here</a><br><br> U: goodboy    P: disney  <br><br><div class=\'center\'>TECH: Pixi.js, WebGL</div>',
                client: "Disney",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2016",
                link: "http://work.goodboydigital.com/starwars/fighter/",
                type: "photo"
            },
            gumble: {
                id: "gumble",
                title: "ORIGINS OF DARWIN",
                images: ["gumble.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ['<a href="https://suardjulien.com" target="_blank">Julien suard</a>'],
                    dev: []
                },
                description: "Silly fish generator for Cartoon Network.",
                client: "CN",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2016",
                link: "http://work.goodboydigital.com/gumble-origins-of-darwin/",
                type: "photo"
            },
            lego: {
                id: "lego",
                title: "STACKY STACK",
                images: ["lego.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [75 / 255, 218 / 255, 254 / 255],
                team: {
                    art: ['<a href="https://twitter.com/juannacho" target="_blank"> John Denton </a>', '<a href="https://suardjulien.com" target="_blank">Julien suard</a>'],
                    dev: ['<a href="https://twitter.com/Doormat23" target="_blank">Mat Groves </a>']
                },
                description: "<div class='center'>As simple as Legos can be.</div>",
                client: "LEGO",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2017",
                link: "https://www.lego.com/assets/FranchiseSites/Portal/Stacky-Stack/v3/index.html",
                type: "photo"
            },
            sheriff_callie: {
                id: "sheriff_callie",
                title: "SHERIFF CALLIE",
                images: ["sherrifcali.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [197 / 255, 179 / 255, 80 / 255],
                team: {
                    art: ["Matt Allan"],
                    dev: ["TOM Slezakovski", "Alvin Ourrad"]
                },
                description: "Howdie'! <br><br>First game I had the chance to work on at Goodboy. This will always have a special taste <3",
                client: "Disney",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2015",
                link: "http://work.goodboydigital.com/sheriff-callie/",
                type: "photo"
            },
            line_animation: {
                id: "line_animation",
                title: "LINE ANIMATION",
                images: ["line_animation.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "Line experiment, using different motions to move them around.  <br><br><div class='center'>TECH: WebGL, 3D</div>",
                client: "Experiment",
                producer: "WEBGL LINES",
                date: "2017",
                link: "http://work.goodboydigital.com/codevember/clem/04/",
                type: "photo"
            },
            confettis: {
                id: "confettis",
                title: "INSTANCING IMPLEMENTATION",
                images: ["confettis.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "Instancing implementation with Poly.js (WebGL tool). <br><br><div class='center'>TECH: Poly.js, WebGL</div>",
                client: "Experiment",
                producer: "Instancing",
                date: "2017",
                link: "http://work.goodboydigital.com/experiments/clem/confettis/",
                type: "photo"
            },
            trump: {
                id: "trump",
                title: "ROGUE NEWS",
                images: ["rogue_news.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ['<a href="https://suardjulien.com" target="_blank">Julien suard</a>'],
                    dev: []
                },
                description: "Draw what you you feel like and make it appear in a D.Trump gif! A good opportunity to create a drawing tool using low level WebGL (lines) and homographic 2D quad (creates a 3D perspective feel from four 2D points). <br><br><div class='center'>TECH: Pixi.js, WebGL</div>",
                client: "2D HOMOGRAPHY",
                producer: "Experiment",
                date: "2017",
                link: "http://rogue-news.com/",
                type: "photo"
            },
            starwars_rebels: {
                id: "starwars_rebels",
                title: "STARWARS TEAM TACTICS",
                images: ["starwars_rebels.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [205 / 255, 175 / 255, 57 / 255],
                team: {
                    art: ['<a href="https://twitter.com/juannacho" target="_blank"> John Denton </a>', '<a href="http://tomjennings.me">tom portfolio</a>'],
                    dev: ['<a href="https://twitter.com/Doormat23" target="_blank">Mat Groves </a> (lead)']
                },
                description: "Read the complete case study <a href='https://www.goodboydigital.com/case-study/star-wars-arcade' target='_blank'> here (by Goodboy) </a> :) <br><br> U: goodboy    P: disney  <br><br><div class='center'>TECH: Pixi.js, WebGL </div>",
                client: "DISNEY",
                producer: "<a href='http://goodboydigital.com' target='_blank'>GOODBOY DIGITAL</a>",
                date: "2016",
                link: "http://work.goodboydigital.com/starwars/rebels/",
                type: "photo"
            },
            icon_boss: {
                id: "icon_boss",
                icon: !0,
                images_hidden: ["favourite_boss_revealed.jpg"],
                title: "MY FAVOURITE BOSS",
                images: ["icon_boss.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                colorAbout: "#3f98d0",
                description: "<div class='quote font32'>\"Would I rather be feared or loved? <br> Easy. Both. I want people to be afraid of how much they love me.\" <br><br> <div class='font16'> Michael Scott <br> The office </div> </div>",
                client: "",
                producer: "The Office",
                date: "",
                link: "",
                type: "photo"
            },
            icon_catch: {
                id: "icon_catch",
                icon: !0,
                images_hidden: ["wrestler_revealed.jpg"],
                title: "FOOSBALL CHAMPION",
                images: ["icon_catch.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                colorAbout: "#e33632",
                description: "<div class='quote font40'>\"Show me a good loser, and I'll show you a loser.\" <br><br> <div class='font16'>Clement <br> Goodboy player of the year (2017-18)</div></div>",
                client: "",
                producer: "EL MACHO",
                date: "",
                link: "",
                type: "photo"
            },
            icon_deer: {
                id: "icon_deer",
                icon: !0,
                images_hidden: ["king_of_elks_revealed.jpg"],
                title: "King behind the wall",
                images: ["icon_deer.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "",
                client: "NORWAY",
                producer: "TREKKING",
                date: "2018",
                link: "",
                type: "photo"
            },
            icon_dog: {
                id: "icon_dog",
                icon: !0,
                images_hidden: ["giugiu.jpg"],
                title: "MY ONE TRUE LOVE",
                images: ["icon_dog.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "",
                client: "",
                producer: "our family dog",
                date: "",
                link: "",
                type: "photo"
            },
            icon_glasses: {
                id: "icon_glasses",
                icon: !0,
                images_hidden: ["shades_revealed.jpg"],
                title: "veni vidi vici",
                images: ["icon_glasses.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: ["JOHN DENTON"],
                    dev: ["MAT GROVES"]
                },
                colorAbout: "#c14790",
                description: '"Liberty Global Appathon" multiplayer game that we had the chance to develop for the Metrological TV boxes. Hands down the funniest game we ever did at Goodboy! 🎉 <br><br>TECH: Websocket, Raspberry PI, Node.js, Pixi.js, WebGL.',
                client: "",
                producer: "APPATHON LIBERTY GLOBAL",
                date: "",
                link: "http://work.goodboydigital.com/handsup/game/",
                type: "photo"
            },
            icon_mom: {
                id: "icon_mom",
                icon: !0,
                images_hidden: ["maman.jpg"],
                title: "MY FAVOURITE MUM",
                images: ["icon_mom.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [207 / 255, 175 / 255, 63 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "",
                client: "",
                producer: "1992",
                date: "",
                link: "",
                type: "photo"
            },
            icon_movie: {
                id: "icon_movie",
                icon: !0,
                images_hidden: ["favourite_movie_revealed.jpg"],
                title: "J'aime ce film.",
                images: ["icon_movie.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                colorAbout: "#5363a0",
                description: "<div class='quote font32'>\"Not just a coward, but a traitor, as your size leads one to expect.\" <br><br> <div class='font16'> Hubert Bonisseur de La Bath <br> OSS 117 </div> </div>",
                client: "",
                producer: "OSS117",
                date: "",
                link: "",
                type: "photo"
            },
            icon_contact: {
                id: "icon_contact",
                icon: "true",
                images_hidden: ["email_revealed.jpg"],
                title: "Pop me an email",
                images: ["icon_contact.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                colorAbout: "#edc903",
                description: "",
                client: "",
                producer: "organisation freak",
                date: "",
                link: "",
                email: "clem.chenebault@gmail.com",
                type: "photo"
            },
            icon_julien: {
                id: "icon_julien",
                icon: "true",
                images_hidden: ["julien_revealed.jpg"],
                title: "My first [designer] crush",
                images: ["icon_pen.jpg"],
                color: !1,
                colorAbout: "#0a9b9e",
                codeColor: [],
                colorGradient: [249 / 255, 226 / 255, 118 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "<div class='quote font32'> \"F'EST PAS MAL MAIS F'EST PAS PARFAIT\" <br><br> <div class='font16'> Julien Suard </div></div>",
                client: "",
                producer: "Julien Suard",
                date: "",
                link: "http://suardjulien.com/",
                type: "photo"
            },
            icon_rugby: {
                id: "icon_rugby",
                icon: !0,
                images_hidden: ["rugby_revealed.jpg"],
                title: "",
                images: ["icon_rugby.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "",
                client: "",
                producer: "number 16th",
                date: "",
                link: "",
                type: "photo"
            },
            icon_saxo: {
                id: "icon_saxo",
                icon: !0,
                images_hidden: ["saxo_revealed.jpg"],
                title: "",
                images: ["icon_saxo.jpg"],
                color: !1,
                codeColor: [],
                colorAbout: "#e1ca26",
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "<div class='quote font32'> ON TOUR: <br><br> JAN-2020 - BOUZAC <br> MARS-2020 - LA TRIMOUILLE <br> MAY-2020 - FENIOUX <br> SUMMER 2020 - PEZOU </div>",
                client: "",
                producer: "I ALSO PLAY SAXOPHONE",
                date: "",
                link: "",
                type: "photo"
            },
            icon_address: {
                id: "icon_address",
                icon: !0,
                images_hidden: ["address_revealed.jpg"],
                title: "LONDON BASED",
                images: ["icon_location.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "",
                client: "",
                producer: "E14 8JY",
                date: "",
                link: "",
                type: "photo"
            },
            icon_twitter: {
                id: "icon_twitter",
                icon: !1,
                images_hidden: ["starwars_rebels.jpg"],
                title: "@mad_clem",
                images: ["icon_twitter.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [53 / 255, 80 / 255, 181 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "",
                client: "",
                producer: "TWITTER",
                date: "",
                link: "https://twitter.com/mad_clem",
                type: "photo"
            },
            icon_boss2: {
                id: "icon_boss2",
                icon: !0,
                images_hidden: ["starwars_rebels.jpg"],
                title: "BOSS 2",
                images: ["icon_rugby.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "",
                client: "",
                producer: "",
                date: "",
                link: "",
                type: "photo"
            },
            icon_github: {
                id: "icon_github",
                icon: !1,
                images_hidden: ["icon_github.jpg"],
                title: "GITHUB",
                images: ["icon_github.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [20 / 255, 48 / 255, 82 / 255],
                team: {
                    art: [],
                    dev: []
                },
                description: "",
                client: "",
                producer: "",
                date: "",
                link: "https://github.com/madclem",
                type: "photo"
            },
            icon_tinder: {
                id: "icon_tinder",
                icon: !0,
                images_hidden: ["tinder_revealed.jpg"],
                title: "",
                images: ["icon_tinder.jpg"],
                color: !1,
                codeColor: [],
                colorGradient: [201 / 255, 61 / 255, 45 / 255],
                team: {
                    art: [],
                    dev: []
                },
                colorAbout: "#e9536c",
                description: "<div class='quote font28'>\"Μy love affairs don't play out over time. Τhey're... <br>Short, compact, passionate. <br>Some HAVE adventures. <br>I AM an adventure.\" <br><br> <div class='font16'> Clement Chenebogoss <br> +44 772732 3122 </div> </div>",
                client: "",
                producer: "<span class='font14'>Is it hot in here, or is it just you?</span>",
                date: "",
                link: "",
                type: "photo"
            }
        }
    }, module.exports = exports.default
}, function(module, exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var Link = function() {
        function Link(which1, which2, restingDist, stiff, tearSensitivity, drawMe) {
            _classCallCheck(this, Link), this.restingDistance = restingDist, this.stiffness = stiff, this.tearSensitivity = tearSensitivity, this.p1 = which1, this.p2 = which2
        }
        return Link.prototype.solve = function() {
            var diffX = this.p1.x - this.p2.x,
                diffY = this.p1.y - this.p2.y,
                diffZ = this.p1.z - this.p2.z,
                d = Math.sqrt(diffX * diffX + diffY * diffY + diffZ * diffZ),
                difference = (this.restingDistance - d) / d,
                im1 = 1 / this.p1.mass,
                im2 = 1 / this.p2.mass,
                scalarP1 = im1 / (im1 + im2) * this.stiffness,
                scalarP2 = this.stiffness - scalarP1;
            this.p1.x += diffX * scalarP1 * difference, this.p1.y += diffY * scalarP1 * difference, this.p1.z += diffZ * scalarP1 * difference, this.p2.x -= diffX * scalarP2 * difference, this.p2.y -= diffY * scalarP2 * difference, this.p2.z -= diffZ * scalarP2 * difference
        }, Link
    }();
    exports.default = Link, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj)
            for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _Poly = __webpack_require__(1),
        POLY = _interopRequireWildcard(_Poly),
        _background = __webpack_require__(87),
        _background2 = _interopRequireDefault(_background),
        _background3 = __webpack_require__(86),
        _background4 = _interopRequireDefault(_background3),
        ViewBg = function() {
            function ViewBg(texture) {
                _classCallCheck(this, ViewBg), this.program = new POLY.Program(_background2.default, _background4.default);
                var state = new POLY.State(this.program.gl);
                state.depthTest = !1, this.geom = new POLY.geometry.Quad(this.program, null, state), this.texture = new POLY.Texture(texture)
            }
            return ViewBg.prototype.render = function() {
                this.program.bind(), this.texture.bind(0), POLY.GL.draw(this.geom)
            }, ViewBg
        }();
    exports.default = ViewBg, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj)
            for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _Poly = __webpack_require__(1),
        POLY = _interopRequireWildcard(_Poly),
        _Link = __webpack_require__(15),
        _Link2 = _interopRequireDefault(_Link),
        _pointColor = __webpack_require__(11),
        _pointColor2 = _interopRequireDefault(_pointColor),
        ViewPointMass = function() {
            function ViewPointMass(xPos, yPos) {
                _classCallCheck(this, ViewPointMass), this.x = xPos, this.y = yPos, this.z = 0, this.id = Math.floor(2e3 * Math.random()), this.lastX = this.x, this.lastY = this.y, this.lastZ = this.z, this.accX = 0, this.accY = 0, this.accZ = 0, this.mass = 1, this.damping = 20, this.links = [], this.quads = [], this.pinned = !1, this.pinX = 0, this.pinY = 0, this.velZ = 0, this.program = new POLY.Program(null, _pointColor2.default, {
                    color: {
                        value: [1, 1, 1],
                        type: "vec3"
                    }
                }), this.view = new POLY.geometry.Cube(this.program), this.view.state.depthTest = !1, this.view.position.x = 1, this.view.scale.set(.05)
            }
            return ViewPointMass.prototype.setColor = function(r, g, b) {
                this.program.bind(), this.program.uniforms.color = [r, g, b]
            }, ViewPointMass.prototype.updatePhysics = function() {
                var velX = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, this.x - this.lastX),
                    velY = this.y - this.lastY,
                    velZ = this.z - this.lastZ + this.accZ;
                this.velZ += .6 * (velZ - this.velZ), velX *= .99, velY *= .99, this.velZ *= .99;
                var nextX = this.x + velX,
                    nextY = this.y + velY,
                    nextZ = this.z + this.velZ;
                this.lastX = this.x, this.lastY = this.y, this.lastZ = this.z, this.x = nextX, this.y = nextY, this.z = nextZ, this.z > 0 && (this.z = 0)
            }, ViewPointMass.prototype.resetLinks = function() {
                this.links.length = 0
            }, ViewPointMass.prototype.solveConstraints = function() {
                for (var i = 0; i < this.links.length; i++) {
                    var currentLink = this.links[i];
                    currentLink.solve()
                }
                this.pinned && (this.x = this.pinX, this.y = this.pinY, this.z = this.pinZ)
            }, ViewPointMass.prototype.attachTo = function(P, restingDist, stiff) {
                this.attachTo(P, restingDist, stiff, 30, !0)
            }, ViewPointMass.prototype.attachTo = function(P, restingDist, stiff, drawLink) {
                this.attachTo(P, restingDist, stiff, 30, drawLink)
            }, ViewPointMass.prototype.attachTo = function(P, restingDist, stiff, tearSensitivity) {
                this.attachTo(P, restingDist, stiff, tearSensitivity, !0)
            }, ViewPointMass.prototype.attachTo = function(P, restingDist, stiff, tearSensitivity, drawLink) {
                var lnk = new _Link2.default(this, P, restingDist, stiff, tearSensitivity, drawLink);
                this.links.push(lnk)
            }, ViewPointMass.prototype.removeLink = function(lnk) {}, ViewPointMass.prototype.unpin = function() {
                this.forever || (this.pinned = !1)
            }, ViewPointMass.prototype.pinTo = function(pX, pY) {
                var pZ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    forever = arguments[3];
                this.forever || (this.pinned = !0, this.pinX = pX || this.x, this.pinY = pY || this.y, this.pinZ = pZ, forever && (this.forever = !0))
            }, ViewPointMass.prototype.getPoint = function() {
                return this
            }, ViewPointMass.prototype.map = function(val, inputMin, inputMax, outputMin, outputMax) {
                return (outputMax - outputMin) * ((val - inputMin) / (inputMax - inputMin)) + outputMin
            }, ViewPointMass.prototype.render = function(debug) {
                this.program.bind(), this.view.position.x = this.x, this.view.position.y = this.y, this.view.position.z = this.z, POLY.GL.draw(this.view)
            }, ViewPointMass
        }();
    exports.default = ViewPointMass, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj)
            for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _Poly = __webpack_require__(1),
        _Link = (_interopRequireWildcard(_Poly), __webpack_require__(15)),
        _pointColor = (_interopRequireDefault(_Link), __webpack_require__(11)),
        ViewPointQuad = (_interopRequireDefault(_pointColor), function() {
            function ViewPointQuad(xPos, yPos) {
                _classCallCheck(this, ViewPointQuad), this.origin = {
                    x: xPos,
                    y: yPos
                }, this.gridPos = {
                    x: 0,
                    y: 0
                }, this.x = xPos, this.y = yPos, this.z = 0, this.easeZ = 0, this.targetSpeedX = 0, this.speedX = 0, this.speedY = 0, this.id = Math.floor(2e3 * Math.random())
            }
            return ViewPointQuad.prototype.setSpeed = function(speedX, speedY) {
                this.speedX = speedX, this.speedY = speedY
            }, ViewPointQuad.prototype.getPoint = function() {
                return this
            }, ViewPointQuad.prototype.setZ = function(value, force) {
                this.donotupdate || (this.easeZ = value, force && (this.z = value))
            }, ViewPointQuad.prototype.render = function(debug) {
                this.z += .3 * (this.easeZ - this.z)
            }, ViewPointQuad
        }());
    exports.default = ViewPointQuad, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj)
            for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _Poly = __webpack_require__(1),
        POLY = _interopRequireWildcard(_Poly),
        _quadColor = __webpack_require__(88),
        _quadColor2 = _interopRequireDefault(_quadColor),
        _quadImage = __webpack_require__(89),
        _quadImage2 = _interopRequireDefault(_quadImage),
        _TextureManager = __webpack_require__(13),
        _TextureManager2 = _interopRequireDefault(_TextureManager),
        _Device = __webpack_require__(4),
        _Device2 = _interopRequireDefault(_Device),
        ViewQuad = function() {
            function ViewQuad(index) {
                _classCallCheck(this, ViewQuad), this.pointsRef = [], this.id = Math.floor(2e3 * Math.random()), this.zoom = 1, this.x = 0, this.y = 0, this.idTween = null, this.active = 0, this.percentage = 0, this.percentageBlack = 0, this.percentageTransition = 0, this.percentageX = 0, this.percentageY = 0, this.percentageLogoMenu = 0, this.percentageLogoMenuHover = 0, this.TtoBorRtoL = 0, this.speed = .2, this.count = .3, this.isHover = !1, this.cbMenu = null, this.beenHere = 0, this.dataId = null, this.colorMenuTop = [1, 0, 0], this.colorMenuBottom = [1, 0, 0], this.isIcon = 1, this.points = [], this.positions = [], this.dragSpeeds = {
                    x: [],
                    y: []
                }, this.program = new POLY.Program(_quadColor2.default, _quadImage2.default, {
                    color: {
                        type: "vec3",
                        value: [Math.random(), Math.random(), Math.random()]
                    },
                    colorMenuTop: {
                        type: "vec3",
                        value: [1, 0, 0]
                    },
                    colorMenuBottom: {
                        type: "vec3",
                        value: [1, 0, 0]
                    },
                    colorGradient: {
                        type: "vec3",
                        value: [Math.random(), Math.random(), Math.random()]
                    },
                    uDefaultImage: {
                        type: "texture",
                        value: 0
                    },
                    uRevealImage: {
                        type: "texture",
                        value: 1
                    },
                    uTransitionImage: {
                        type: "texture",
                        value: 2
                    },
                    isIcon: {
                        type: "float",
                        value: this.isIcon
                    },
                    percentage: {
                        type: "float",
                        value: this.percentage
                    },
                    percentageX: {
                        type: "float",
                        value: 0
                    },
                    percentageY: {
                        type: "float",
                        value: 0
                    },
                    percentageBlack: {
                        type: "float",
                        value: this.percentageBlack
                    },
                    percentageTransition: {
                        type: "float",
                        value: this.percentageTransition
                    },
                    percentageLogoMenu: {
                        type: "float",
                        value: 0
                    },
                    percentageLogoMenuHover: {
                        type: "float",
                        value: 0
                    },
                    active: {
                        type: "float",
                        value: this.active
                    },
                    TtoBorRtoL: {
                        type: "float",
                        value: 0
                    },
                    zoom: {
                        type: "float",
                        value: 1
                    }
                });
                var uvs = [0, 0, 1, 0, 1, 1, 0, 1];
                this.quad = new POLY.geometry.Quad(this.program), this.quad.addAttribute(uvs, "aUv", 2), this.transitionImage = new POLY.Texture(window.ASSET_URL + "image/transition/dechire_00000.jpg"), this.defaultRevealTexture = new POLY.Texture(window.ASSET_URL + "image/transition/dechire_00000.jpg"), this.iconTexture = null, this.iconTextureRevealed = null
            }
            return ViewQuad.prototype.setActive = function() {
                var _this = this,
                    value = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    snap = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return snap ? (this.idTweenActive && Easings.killTweensWithId(this.idTweenActive), this.active = value, void(this.needsUpdate = !0)) : void(this.idTweenActive = Easings.to(this, .4, {
                    delay: .4,
                    active: value,
                    onUpdate: function() {
                        _this.needsUpdate = !0
                    },
                    ease: Easings.easeOutCirc
                }))
            }, ViewQuad.prototype.showMenuIcon = function() {
                var x = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    y = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    TtoBorRtoL = arguments[2],
                    delay = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    _this2 = this,
                    data = arguments[4],
                    cb = arguments[5];
                this.TtoBorRtoL = TtoBorRtoL ? 1 : 0, this.cbMenu = cb, this.colorMenuTop = data.colorMenuTop, this.colorMenuBottom = data.colorMenuBottom, this.isMenuIcon = !0, this.needsUpdate = !0, Easings.to(this, .3, {
                    delay: delay,
                    percentageX: x,
                    percentageY: y,
                    isIcon: 0,
                    ease: Easings.easeInCirc,
                    onUpdate: function() {
                        _this2.needsUpdate = !0
                    },
                    onComplete: function() {
                        _this2.iconTexture = _TextureManager2.default.getTexture(window.ASSET_URL + "image/" + data.icon), _Device2.default.desktop && (_this2.iconTextureRevealed = _TextureManager2.default.getTexture(window.ASSET_URL + "image/" + data.icon_hover)), Easings.to(_this2, .3, {
                            percentageLogoMenu: 1,
                            ease: Easings.easeOutCirc,
                            onUpdate: function() {
                                _this2.needsUpdate = !0
                            }
                        })
                    }
                })
            }, ViewQuad.prototype.removeMenuIcon = function() {
                var _this3 = this;
                this.TtoBorRtoL *= -1, this.TtoBorRtoL < 0 && (this.TtoBorRtoL = 0), Easings.to(this, .4, {
                    percentageLogoMenu: 0,
                    ease: Easings.easeOutCirc,
                    onUpdate: function() {
                        _this3.needsUpdate = !0
                    },
                    onComplete: function() {
                        _this3.isMenuIcon = !1, _this3.iconTexture = null, _this3.iconTextureRevealed = null, _this3.needsUpdate = !0, Easings.to(_this3, .6, {
                            percentageX: 0,
                            percentageY: 0,
                            isIcon: 1,
                            ease: Easings.easeOutCirc,
                            onUpdate: function() {
                                _this3.needsUpdate = !0
                            }
                        })
                    }
                })
            }, ViewQuad.prototype.reveal = function(show) {
                var _this4 = this;
                this.isSupriseIcon && Easings.to(this, .5, {
                    delay: show ? .2 : 0,
                    percentageTransition: show ? 1 : 0,
                    onUpdate: function(obj, percentage) {
                        var frame = Math.floor(20 * _this4.percentageTransition),
                            id = frame < 10 ? "0" + frame : frame;
                        _this4.transitionImage = _TextureManager2.default.getTexture(window.ASSET_URL + "image/transition/dechire_000" + id + ".jpg"), _this4.needsUpdate = !0
                    }
                })
            }, ViewQuad.prototype.fade = function() {
                var _this5 = this,
                    value = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1.1;
                Easings.to(this, 2, {
                    percentage: value,
                    ease: Easings.elasticOut,
                    onUpdate: function() {
                        _this5.needsUpdate = !0
                    }
                })
            }, ViewQuad.prototype.shut = function() {
                var _this6 = this,
                    close = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    delay = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                Easings.to(this, .8, {
                    percentageBlack: close ? 1 : 0,
                    delay: delay,
                    ease: Easings.easeOutCirc,
                    onUpdate: function() {
                        _this6.needsUpdate = !0
                    }
                })
            }, ViewQuad.prototype.onPress = function() {
                this.cbMenu && this.isMenuIcon && this.cbMenu()
            }, ViewQuad.prototype.onHover = function() {
                var _this7 = this;
                if (!this.isHover)
                    if (this.isHover = !0, null !== this.idTween && (Easings.killTweensWithId(this.idTween), this.idTween = null), this.isMenuIcon) {
                        if (!_Device2.default.desktop) return;
                        this.needsUpdate = !0, Easings.to(this, .3, {
                            percentageLogoMenuHover: 1,
                            ease: Easings.easeInCirc,
                            onUpdate: function() {
                                _this7.needsUpdate = !0
                            }
                        })
                    } else this.idTween = Easings.to(this, 2, {
                        zoom: .8,
                        ease: Easings.easeOutSine,
                        onUpdate: function() {
                            _this7.program.bind(), _this7.program.uniforms.zoom = _this7.zoom
                        }
                    })
            }, ViewQuad.prototype.onOut = function() {
                var _this8 = this;
                if (this.isHover)
                    if (this.isHover = !1, null !== this.idTween && (Easings.killTweensWithId(this.idTween), this.idTween = null), this.isMenuIcon) {
                        if (!_Device2.default.desktop) return;
                        this.needsUpdate = !0, Easings.to(this, .3, {
                            percentageLogoMenuHover: 0,
                            ease: Easings.easeOutCirc,
                            onUpdate: function() {
                                _this8.needsUpdate = !0
                            }
                        })
                    } else this.idTween = Easings.to(this, 2, {
                        zoom: 1,
                        ease: Easings.easeOutSine,
                        onUpdate: function() {
                            _this8.program.bind(), _this8.program.uniforms.zoom = _this8.zoom
                        }
                    })
            }, ViewQuad.prototype.attachPointRef = function(pts) {
                this.pointsRef = [];
                for (var i = 0; i < pts.length; i++) this.pointsRef.push(pts[i])
            }, ViewQuad.prototype.setColor = function(r, g, b) {
                this.program.bind(), this.program.uniforms.color = [r, g, b]
            }, ViewQuad.prototype.setData = function(data) {
                if (data.id !== this.dataId) {
                    this.data = Object.assign({}, data), this.dataId = data.id, this.textures = [];
                    for (var i = 0; i < data.images.length; i++) this.textures.push(_TextureManager2.default.getTexture(window.ASSET_URL + "image/" + data.images[i]));
                    this.program.bind(), this.program.uniforms.colorGradient = data.colorGradient, this.isSupriseIcon = data.icon, this.revealTexture = this.defaultRevealTexture, data.icon && (this.revealTexture = _TextureManager2.default.getTexture(window.ASSET_URL + "image/" + data.images_hidden[0])), data.codeColor && data.codeColor.length > 0 && (this.program.uniforms.color = data.codeColor)
                }
            }, ViewQuad.prototype.render = function() {
                if (this.textures[0] && this.pointsRef.length > 0) {
                    var texture = void 0;
                    if (1 === this.textures.length) texture = this.textures[0];
                    else {
                        this.count += this.speed;
                        var frame = Math.floor(this.count);
                        texture = this.textures[frame % this.textures.length]
                    }
                    null !== this.iconTexture && (texture = this.iconTexture), texture.bind(0), null !== this.iconTextureRevealed ? this.iconTextureRevealed.bind(1) : this.revealTexture.bind(1), this.transitionImage.bind(2), this.program.bind(), this.points[0] = this.pointsRef[0].getPoint(), this.points[1] = this.pointsRef[1].getPoint(), this.points[2] = this.pointsRef[2].getPoint(), this.points[3] = this.pointsRef[3].getPoint();
                    for (var ind = 0, i = 0; i < this.points.length; i++) this.positions[ind] = this.points[i].x, this.positions[ind + 1] = this.points[i].y, this.positions[ind + 2] = this.points[i].z, this.dragSpeeds.x[i] = this.points[i].speedX, this.dragSpeeds.y[i] = this.points[i].speedY, ind += 3;
                    for (var minY = 1e11, minX = 1e11, maxX = -1e11, maxY = -1e11, i = 0; i < this.positions.length; i += 3) {
                        var dragSpeedX = this.dragSpeeds.x[i / 3],
                            dragSpeedY = this.dragSpeeds.y[i / 3],
                            x = this.positions[i] - dragSpeedX;
                        x < minX ? minX = x : x > maxX && (maxX = x);
                        var y = this.positions[i + 1] - dragSpeedY;
                        y < minY ? minY = y : y > maxY && (maxY = y)
                    }
                    this.x = minX + (maxX - minX) / 2, this.y = minY + (maxY - minY) / 2, this.needsUpdate && (this.program.uniforms.percentage = this.percentage, this.program.uniforms.percentageBlack = this.percentageBlack, this.program.uniforms.active = this.active, this.program.uniforms.colorMenuTop = this.colorMenuTop, this.program.uniforms.colorMenuBottom = this.colorMenuBottom, this.program.uniforms.percentageX = this.percentageX, this.program.uniforms.percentageY = this.percentageY, this.program.uniforms.TtoBorRtoL = this.TtoBorRtoL, this.program.uniforms.isIcon = this.isIcon, this.program.uniforms.percentageLogoMenu = this.percentageLogoMenu, this.program.uniforms.percentageLogoMenuHover = this.percentageLogoMenuHover, this.isIcon && (this.program.uniforms.percentageTransition = this.percentageTransition)), this.quad.updatePosition("aPosition", this.positions), POLY.GL.draw(this.quad), this.needsUpdate = !1
                }
            }, ViewQuad
        }();
    exports.default = ViewQuad, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function Events() {}

    function EE(fn, context, once) {
        this.fn = fn, this.context = context, this.once = once || !1
    }

    function EventEmitter() {
        this._events = new Events, this._eventsCount = 0
    }
    var has = Object.prototype.hasOwnProperty,
        prefix = "~";
    Object.create && (Events.prototype = Object.create(null), (new Events).__proto__ || (prefix = !1)), EventEmitter.prototype.eventNames = function() {
        var events, name, names = [];
        if (0 === this._eventsCount) return names;
        for (name in events = this._events) has.call(events, name) && names.push(prefix ? name.slice(1) : name);
        return Object.getOwnPropertySymbols ? names.concat(Object.getOwnPropertySymbols(events)) : names
    }, EventEmitter.prototype.listeners = function(event, exists) {
        var evt = prefix ? prefix + event : event,
            available = this._events[evt];
        if (exists) return !!available;
        if (!available) return [];
        if (available.fn) return [available.fn];
        for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) ee[i] = available[i].fn;
        return ee
    }, EventEmitter.prototype.emit = function(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return !1;
        var args, i, listeners = this._events[evt],
            len = arguments.length;
        if (listeners.fn) {
            switch (listeners.once && this.removeListener(event, listeners.fn, void 0, !0), len) {
                case 1:
                    return listeners.fn.call(listeners.context), !0;
                case 2:
                    return listeners.fn.call(listeners.context, a1), !0;
                case 3:
                    return listeners.fn.call(listeners.context, a1, a2), !0;
                case 4:
                    return listeners.fn.call(listeners.context, a1, a2, a3), !0;
                case 5:
                    return listeners.fn.call(listeners.context, a1, a2, a3, a4), !0;
                case 6:
                    return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), !0
            }
            for (i = 1, args = new Array(len - 1); i < len; i++) args[i - 1] = arguments[i];
            listeners.fn.apply(listeners.context, args)
        } else {
            var j, length = listeners.length;
            for (i = 0; i < length; i++) switch (listeners[i].once && this.removeListener(event, listeners[i].fn, void 0, !0), len) {
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args)
                        for (j = 1, args = new Array(len - 1); j < len; j++) args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args)
            }
        }
        return !0
    }, EventEmitter.prototype.on = function(event, fn, context) {
        var listener = new EE(fn, context || this),
            evt = prefix ? prefix + event : event;
        return this._events[evt] ? this._events[evt].fn ? this._events[evt] = [this._events[evt], listener] : this._events[evt].push(listener) : (this._events[evt] = listener, this._eventsCount++), this
    }, EventEmitter.prototype.once = function(event, fn, context) {
        var listener = new EE(fn, context || this, !0),
            evt = prefix ? prefix + event : event;
        return this._events[evt] ? this._events[evt].fn ? this._events[evt] = [this._events[evt], listener] : this._events[evt].push(listener) : (this._events[evt] = listener, this._eventsCount++), this
    }, EventEmitter.prototype.removeListener = function(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return this;
        if (!fn) return 0 === --this._eventsCount ? this._events = new Events : delete this._events[evt], this;
        var listeners = this._events[evt];
        if (listeners.fn) listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context || (0 === --this._eventsCount ? this._events = new Events : delete this._events[evt]);
        else {
            for (var i = 0, events = [], length = listeners.length; i < length; i++)(listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) && events.push(listeners[i]);
            events.length ? this._events[evt] = 1 === events.length ? events[0] : events : 0 === --this._eventsCount ? this._events = new Events : delete this._events[evt]
        }
        return this
    }, EventEmitter.prototype.removeAllListeners = function(event) {
        var evt;
        return event ? (evt = prefix ? prefix + event : event, this._events[evt] && (0 === --this._eventsCount ? this._events = new Events : delete this._events[evt])) : (this._events = new Events, this._eventsCount = 0), this
    }, EventEmitter.prototype.off = EventEmitter.prototype.removeListener, EventEmitter.prototype.addListener = EventEmitter.prototype.on, EventEmitter.prototype.setMaxListeners = function() {
        return this
    }, EventEmitter.prefixed = prefix, EventEmitter.EventEmitter = EventEmitter, module.exports = EventEmitter
}, function(module, exports) {
    "use strict";
    module.exports = function(str, opts) {
        opts = opts || {};
        for (var o = {
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            }, m = o.parser[opts.strictMode ? "strict" : "loose"].exec(str), uri = {}, i = 14; i--;) uri[o.key[i]] = m[i] || "";
        return uri[o.q.name] = {}, uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
            $1 && (uri[o.q.name][$1] = $2)
        }), uri
    }
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _glMatrix = __webpack_require__(3),
        _UniformGroup = __webpack_require__(48),
        _UniformGroup2 = _interopRequireDefault(_UniformGroup),
        _basic = __webpack_require__(83),
        _basic2 = _interopRequireDefault(_basic),
        _basic3 = __webpack_require__(82),
        _basic4 = _interopRequireDefault(_basic3),
        Program = function() {
            function Program(vertShader, fragShader) {
                var uniforms = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                _classCallCheck(this, Program), vertShader = vertShader || _basic2.default, fragShader = fragShader || _basic4.default;
                var gl = POLY.gl;
                this.gl = gl, this.cacheAttributesLocation = {}, this.cacheUniformsLocation = {}, this.program = gl.createProgram();
                var vertS = this._createShader(vertShader, !0),
                    fragS = this._createShader(fragShader, !1);
                if (this._attachShaders(vertS, fragS), gl.linkProgram(this.program), !gl.getProgramParameter(this.program, gl.LINK_STATUS)) throw "Couldn't initialise program";
                gl.useProgram(this.program), this._checkIfBasicMatrices(uniforms), this.uniforms = new _UniformGroup2.default(uniforms, this);
                for (var uniform in uniforms) {
                    this.addUniformLocation(uniform);
                    var v = uniforms[uniform].value;
                    this.uniforms[uniform] = v
                }
                this.bind()
            }
            return _createClass(Program, [{
                key: "bind",
                value: function() {
                    this.gl.useProgram(this.program)
                }
            }, {
                key: "addUniformLocation",
                value: function(name) {
                    this.cacheUniformsLocation[name] = this.gl.getUniformLocation(this.program, name)
                }
            }, {
                key: "getUniformLocation",
                value: function(name) {
                    return void 0 !== this.cacheUniformsLocation[name] ? this.cacheUniformsLocation[name] : (this.addUniformLocation(name), this.getUniformLocation(name))
                }
            }, {
                key: "_checkIfBasicMatrices",
                value: function(uniforms) {
                    for (var matrices = ["projectionMatrix", "modelMatrix", "viewMatrix"], i = 0; i < matrices.length; i++) uniforms[matrices[i]] || (uniforms[matrices[i]] = {
                        value: _glMatrix.mat4.create(),
                        type: "mat4"
                    })
                }
            }, {
                key: "_createGetterSetterUniforms",
                value: function(uniforms) {
                    var self = (this.gl, this.program, this);
                    this.uniforms = uniforms;
                    for (var p in self.uniforms) self.uniforms[p] = uniforms[p],
                        function(field_name) {
                            Object.defineProperty(self, field_name, {
                                get: function() {
                                    return self.uniforms[field_name]
                                },
                                set: function(new_value) {
                                    self.uniforms[field_name].value = new_value
                                }
                            })
                        }(p)
                }
            }, {
                key: "addAttributeLocation",
                value: function(name) {
                    void 0 === this.cacheAttributesLocation[name] && (this.cacheAttributesLocation[name] = this.gl.getAttribLocation(this.program, name))
                }
            }, {
                key: "getAttributeLocation",
                value: function(name) {
                    return void 0 !== this.cacheAttributesLocation[name] ? this.cacheAttributesLocation[name] : (this.addAttributeLocation(name), this.getAttributeLocation(name))
                }
            }, {
                key: "_attachShaders",
                value: function(vert, frag) {
                    this.gl.attachShader(this.program, vert), this.gl.attachShader(this.program, frag)
                }
            }, {
                key: "_createShader",
                value: function(src, isVertex) {
                    var gl = this.gl,
                        shader = void 0;
                    if (shader = isVertex ? gl.createShader(gl.VERTEX_SHADER) : gl.createShader(gl.FRAGMENT_SHADER), this.gl.shaderSource(shader, src), this.gl.compileShader(shader), !gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(shader);
                    return shader
                }
            }]), Program
        }();
    exports.default = Program, module.exports = exports.default
}, function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = {
        uniformTypes: {
            float: "uniform1f",
            vec2: "uniform2fv",
            vec3: "uniform3fv",
            vec4: "uniform4fv",
            int: "uniform1i",
            texture: "uniform1i",
            mat3: "uniformMatrix3fv",
            mat4: "uniformMatrix4fv"
        },
        extensions: ["EXT_shader_texture_lod", "EXT_sRGB", "EXT_frag_depth", "OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear", "OES_standard_derivatives", "WEBGL_depth_texture", "EXT_texture_filter_anisotropic", "ANGLE_instanced_arrays", "WEBGL_draw_buffers"]
    }, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _glMatrix = __webpack_require__(3),
        a = _glMatrix.vec3.create(),
        b = _glMatrix.vec3.create(),
        c = _glMatrix.vec3.create(),
        target = _glMatrix.vec3.create(),
        edge1 = _glMatrix.vec3.create(),
        edge2 = _glMatrix.vec3.create(),
        normal = _glMatrix.vec3.create(),
        diff = _glMatrix.vec3.create(),
        Ray = function() {
            function Ray(origin, direction) {
                _classCallCheck(this, Ray), this.origin = origin ? _glMatrix.vec3.clone(origin) : _glMatrix.vec3.create(), this.direction = direction ? _glMatrix.vec3.clone(direction) : _glMatrix.vec3.create()
            }
            return _createClass(Ray, [{
                key: "at",
                value: function(t) {
                    return _glMatrix.vec3.copy(target, this.direction), _glMatrix.vec3.scale(target, target, t), _glMatrix.vec3.add(target, target, this.origin), target
                }
            }, {
                key: "lookAt",
                value: function(mTarget) {
                    _glMatrix.vec3.sub(this.direction, mTarget, this.origin), _glMatrix.vec3.normalize(this.origin, this.origin)
                }
            }, {
                key: "closestPointToPoint",
                value: function(mPoint) {
                    var result = _glMatrix.vec3.create();
                    _glMatrix.vec3.sub(mPoint, this.origin);
                    var directionDistance = _glMatrix.vec3.dot(result, this.direction);
                    return directionDistance < 0 ? _glMatrix.vec3.clone(this.origin) : (_glMatrix.vec3.copy(result, this.direction), _glMatrix.vec3.scale(result, result, directionDistance), _glMatrix.vec3.add(result, result, this.origin), result)
                }
            }, {
                key: "distanceToPoint",
                value: function(mPoint) {
                    return Math.sqrt(this.distanceSqToPoint(mPoint))
                }
            }, {
                key: "distanceSqToPoint",
                value: function(mPoint) {
                    var v1 = _glMatrix.vec3.create();
                    _glMatrix.vec3.sub(v1, mPoint, this.origin);
                    var directionDistance = _glMatrix.vec3.dot(v1, this.direction);
                    return directionDistance < 0 ? _glMatrix.vec3.squaredDistance(this.origin, mPoint) : (_glMatrix.vec3.copy(v1, this.direction), _glMatrix.vec3.scale(v1, v1, directionDistance),
                        _glMatrix.vec3.add(v1, v1, this.origin), _glMatrix.vec3.squaredDistance(v1, mPoint))
                }
            }, {
                key: "intersectsSphere",
                value: function(mCenter, mRadius) {
                    return this.distanceToPoint(mCenter) <= mRadius
                }
            }, {
                key: "intersectSphere",
                value: function(mCenter, mRadius) {
                    var v1 = _glMatrix.vec3.create();
                    _glMatrix.vec3.sub(v1, mCenter, this.origin);
                    var tca = _glMatrix.vec3.dot(v1, this.direction),
                        d2 = _glMatrix.vec3.dot(v1, v1) - tca * tca,
                        radius2 = mRadius * mRadius;
                    if (d2 > radius2) return null;
                    var thc = Math.sqrt(radius2 - d2),
                        t0 = tca - thc,
                        t1 = tca + thc;
                    return t0 < 0 && t1 < 0 ? null : t0 < 0 ? this.at(t1) : this.at(t0)
                }
            }, {
                key: "distanceToPlane",
                value: function(mPlaneCenter, mNormal) {
                    _glMatrix.vec3.dot(mNormal, this.direction)
                }
            }, {
                key: "intersectTriangle",
                value: function(mPA, mPB, mPC) {
                    var backfaceCulling = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    _glMatrix.vec3.copy(a, mPA), _glMatrix.vec3.copy(b, mPB), _glMatrix.vec3.copy(c, mPC), _glMatrix.vec3.sub(edge1, b, a), _glMatrix.vec3.sub(edge2, c, a), _glMatrix.vec3.cross(normal, edge1, edge2);
                    var DdN = _glMatrix.vec3.dot(this.direction, normal),
                        sign = void 0;
                    if (DdN > 0) {
                        if (backfaceCulling) return null;
                        sign = 1
                    } else {
                        if (!(DdN < 0)) return null;
                        sign = -1, DdN = -DdN
                    }
                    _glMatrix.vec3.sub(diff, this.origin, a), _glMatrix.vec3.cross(edge2, diff, edge2);
                    var DdQxE2 = sign * _glMatrix.vec3.dot(this.direction, edge2);
                    if (DdQxE2 < 0) return null;
                    _glMatrix.vec3.cross(edge1, edge1, diff);
                    var DdE1xQ = sign * _glMatrix.vec3.dot(this.direction, edge1);
                    if (DdE1xQ < 0) return null;
                    if (DdQxE2 + DdE1xQ > DdN) return null;
                    var Qdn = -sign * _glMatrix.vec3.dot(diff, normal);
                    return Qdn < 0 ? null : this.at(Qdn / DdN)
                }
            }]), Ray
        }();
    exports.default = Ray, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _Vector = __webpack_require__(53),
        _Vector2 = _interopRequireDefault(_Vector),
        _Ray = __webpack_require__(24),
        _Ray2 = _interopRequireDefault(_Ray);
    exports.default = {
        Vector: _Vector2.default,
        Ray: _Ray2.default
    }, module.exports = exports.default
}, function(module, exports) {
    "use strict";

    function getAndApplyExtension(gl, name) {
        var ext = gl.getExtension(name);
        if (!ext) return !1;
        var suffix = name.split("_")[0],
            suffixRE = new RegExp(suffix + "$");
        for (var key in ext) {
            var val = ext[key];
            if ("function" == typeof val) {
                var unsuffixedKey = key.replace(suffixRE, "");
                key.substring && (gl[unsuffixedKey] = ext[key].bind(ext))
            }
        }
        return !0
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = getAndApplyExtension, module.exports = exports.default
}, function(module, exports) {
    function defaultSetTimout() {
        throw new Error("setTimeout has not been defined")
    }

    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined")
    }

    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, setTimeout(fun, 0);
        try {
            return cachedSetTimeout(fun, 0)
        } catch (e) {
            try {
                return cachedSetTimeout.call(null, fun, 0)
            } catch (e) {
                return cachedSetTimeout.call(this, fun, 0)
            }
        }
    }

    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, clearTimeout(marker);
        try {
            return cachedClearTimeout(marker)
        } catch (e) {
            try {
                return cachedClearTimeout.call(null, marker)
            } catch (e) {
                return cachedClearTimeout.call(this, marker)
            }
        }
    }

    function cleanUpNextTick() {
        draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue())
    }

    function drainQueue() {
        if (!draining) {
            var timeout = runTimeout(cleanUpNextTick);
            draining = !0;
            for (var len = queue.length; len;) {
                for (currentQueue = queue, queue = []; ++queueIndex < len;) currentQueue && currentQueue[queueIndex].run();
                queueIndex = -1, len = queue.length
            }
            currentQueue = null, draining = !1, runClearTimeout(timeout)
        }
    }

    function Item(fun, array) {
        this.fun = fun, this.array = array
    }

    function noop() {}
    var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
    ! function() {
        try {
            cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
        } catch (e) {
            cachedSetTimeout = defaultSetTimout
        }
        try {
            cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout
        }
    }();
    var currentQueue, queue = [],
        draining = !1,
        queueIndex = -1;
    process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
        queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue)
    }, Item.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, process.listeners = function(name) {
        return []
    }, process.binding = function(name) {
        throw new Error("process.binding is not supported")
    }, process.cwd = function() {
        return "/"
    }, process.chdir = function(dir) {
        throw new Error("process.chdir is not supported")
    }, process.umask = function() {
        return 0
    }
}, function(module, exports) {
    "use strict";

    function _noop() {}

    function asyncEachSeries(array, iterator, callback) {
        var i = 0,
            len = array.length;
        ! function next(err) {
            return err || i === len ? void(callback && callback(err)) : void iterator(array[i++], next)
        }()
    }

    function onlyOnce(fn) {
        return function() {
            if (null === fn) throw new Error("Callback was already called.");
            var callFn = fn;
            fn = null, callFn.apply(this, arguments)
        }
    }

    function asyncQueue(worker, concurrency) {
        function _insert(data, insertAtFront, callback) {
            if (null != callback && "function" != typeof callback) throw new Error("task callback must be a function");
            if (q.started = !0, null == data && q.idle()) return void setTimeout(function() {
                q.drain()
            }, 1);
            var item = {
                data: data,
                callback: "function" == typeof callback ? callback : _noop
            };
            insertAtFront ? q._tasks.unshift(item) : q._tasks.push(item), setTimeout(function() {
                q.process()
            }, 1)
        }

        function _next(task) {
            return function() {
                workers -= 1, task.callback.apply(task, arguments), null != arguments[0] && q.error(arguments[0], task.data), workers <= q.concurrency - q.buffer && q.unsaturated(), q.idle() && q.drain(), q.process()
            }
        }
        if (null == concurrency) concurrency = 1;
        else if (0 === concurrency) throw new Error("Concurrency must not be zero");
        var workers = 0,
            q = {
                _tasks: [],
                concurrency: concurrency,
                saturated: _noop,
                unsaturated: _noop,
                buffer: concurrency / 4,
                empty: _noop,
                drain: _noop,
                error: _noop,
                started: !1,
                paused: !1,
                push: function(data, callback) {
                    _insert(data, !1, callback)
                },
                kill: function() {
                    q.drain = _noop, q._tasks = []
                },
                unshift: function(data, callback) {
                    _insert(data, !0, callback)
                },
                process: function() {
                    for (; !q.paused && workers < q.concurrency && q._tasks.length;) {
                        var task = q._tasks.shift();
                        0 === q._tasks.length && q.empty(), workers += 1, workers === q.concurrency && q.saturated(), worker(task.data, onlyOnce(_next(task)))
                    }
                },
                length: function() {
                    return q._tasks.length
                },
                running: function() {
                    return workers
                },
                idle: function() {
                    return q._tasks.length + workers === 0
                },
                pause: function() {
                    q.paused !== !0 && (q.paused = !0)
                },
                resume: function() {
                    if (q.paused !== !1) {
                        q.paused = !1;
                        for (var w = 1; w <= q.concurrency; w++) q.process()
                    }
                }
            };
        return q
    }
    module.exports = {
        eachSeries: asyncEachSeries,
        queue: asyncQueue
    }
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj)
            for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _Poly = __webpack_require__(1),
        POLY = _interopRequireWildcard(_Poly),
        _Device = __webpack_require__(4),
        _Device2 = _interopRequireDefault(_Device),
        _TextureManager = __webpack_require__(13),
        _TextureManager2 = _interopRequireDefault(_TextureManager),
        _MainScene = __webpack_require__(33),
        _MainScene2 = _interopRequireDefault(_MainScene),
        _Easings = __webpack_require__(36),
        _Easings2 = _interopRequireDefault(_Easings),
        _PointCollisionScene = __webpack_require__(34),
        _utils = (_interopRequireDefault(_PointCollisionScene), __webpack_require__(39)),
        _datGui = __webpack_require__(40);
    _interopRequireDefault(_datGui), __webpack_require__(44), __webpack_require__(81);
    window.ASSET_URL = "./assets/";
    var App = function() {
        function App() {
            _classCallCheck(this, App), window.Easings = _Easings2.default.instance;
            var canvas = document.getElementById("canvas");
            POLY.init(canvas), this.gl = POLY.gl, this.loader = new _utils.Loader, this._textures = [window.ASSET_URL + "image/img001.jpg", window.ASSET_URL + "image/img002.jpg", window.ASSET_URL + "image/img003.jpg", window.ASSET_URL + "image/img004.jpg", window.ASSET_URL + "image/img005.jpg", window.ASSET_URL + "image/img006.jpg", window.ASSET_URL + "image/img007.jpg", window.ASSET_URL + "image/img008.jpg", window.ASSET_URL + "image/img009.jpg", window.ASSET_URL + "image/img010.jpg", window.ASSET_URL + "image/img011.jpg", window.ASSET_URL + "image/img012.jpg", window.ASSET_URL + "image/img013.jpg", window.ASSET_URL + "image/img014.jpg", window.ASSET_URL + "image/trunk_trunk001.jpg", window.ASSET_URL + "image/trunk_trunk002.jpg", window.ASSET_URL + "image/trunk_trunk003.jpg", window.ASSET_URL + "image/trunk_trunk004.jpg", window.ASSET_URL + "image/trunk_trunk005.jpg", window.ASSET_URL + "image/trunk_trunk006.jpg", window.ASSET_URL + "image/trunk_trunk007.jpg", window.ASSET_URL + "image/trunk_trunk008.jpg", window.ASSET_URL + "image/trunk_trunk009.jpg", window.ASSET_URL + "image/trunk_trunk010.jpg", window.ASSET_URL + "image/trunk_trunk011.jpg", window.ASSET_URL + "image/trunk_trunk012.jpg", window.ASSET_URL + "image/trunk_trunk013.jpg", window.ASSET_URL + "image/trunk_trunk014.jpg", window.ASSET_URL + "image/trunk_trunk015.jpg", window.ASSET_URL + "image/trunk_trunk016.jpg", window.ASSET_URL + "image/trunk_trunk017.jpg", window.ASSET_URL + "image/trunk_trunk018.jpg", window.ASSET_URL + "image/trunk_trunk019.jpg", window.ASSET_URL + "image/trunk_trunk020.jpg", window.ASSET_URL + "image/trunk_trunk021.jpg", window.ASSET_URL + "image/trunk_trunk022.jpg", window.ASSET_URL + "image/trunk_trunk023.jpg", window.ASSET_URL + "image/transition/dechire_00000.jpg", window.ASSET_URL + "image/transition/dechire_00001.jpg", window.ASSET_URL + "image/transition/dechire_00002.jpg", window.ASSET_URL + "image/transition/dechire_00003.jpg", window.ASSET_URL + "image/transition/dechire_00004.jpg", window.ASSET_URL + "image/transition/dechire_00005.jpg", window.ASSET_URL + "image/transition/dechire_00006.jpg", window.ASSET_URL + "image/transition/dechire_00007.jpg", window.ASSET_URL + "image/transition/dechire_00008.jpg", window.ASSET_URL + "image/transition/dechire_00009.jpg", window.ASSET_URL + "image/transition/dechire_00010.jpg", window.ASSET_URL + "image/transition/dechire_00011.jpg", window.ASSET_URL + "image/transition/dechire_00012.jpg", window.ASSET_URL + "image/transition/dechire_00013.jpg", window.ASSET_URL + "image/transition/dechire_00014.jpg", window.ASSET_URL + "image/transition/dechire_00015.jpg", window.ASSET_URL + "image/transition/dechire_00016.jpg", window.ASSET_URL + "image/transition/dechire_00017.jpg", window.ASSET_URL + "image/transition/dechire_00018.jpg", window.ASSET_URL + "image/transition/dechire_00019.jpg", window.ASSET_URL + "image/transition/dechire_00020.jpg", window.ASSET_URL + "image/arcade.jpg", window.ASSET_URL + "image/christmas_experiment1.jpg", window.ASSET_URL + "image/christmas_experiment2.jpg", window.ASSET_URL + "image/cooking.jpg", window.ASSET_URL + "image/dangermouse.jpg", window.ASSET_URL + "image/ddd-2018.jpg", window.ASSET_URL + "image/particles_stream.jpg", window.ASSET_URL + "image/denis.jpg", window.ASSET_URL + "image/dreamy1.jpg", window.ASSET_URL + "image/dreamy2.jpg", window.ASSET_URL + "image/fighter1.jpg", window.ASSET_URL + "image/fighter2.jpg", window.ASSET_URL + "image/fighter3.jpg", window.ASSET_URL + "image/giugiu.jpg", window.ASSET_URL + "image/gumble.jpg", window.ASSET_URL + "image/icon_boss.jpg", window.ASSET_URL + "image/icon_catch.jpg", window.ASSET_URL + "image/icon_deer.jpg", window.ASSET_URL + "image/icon_dog.jpg", window.ASSET_URL + "image/icon_glasses.jpg", window.ASSET_URL + "image/icon_mom.jpg", window.ASSET_URL + "image/icon_movie.jpg", window.ASSET_URL + "image/icon_contact.jpg", window.ASSET_URL + "image/icon_pen.jpg", window.ASSET_URL + "image/icon_rugby.jpg", window.ASSET_URL + "image/icon_saxo.jpg", window.ASSET_URL + "image/icon_github.jpg", window.ASSET_URL + "image/icon_tinder.jpg", window.ASSET_URL + "image/icon_twitter.jpg", window.ASSET_URL + "image/icon_location.jpg", window.ASSET_URL + "image/lego.jpg", window.ASSET_URL + "image/night-eye.jpg", window.ASSET_URL + "image/sherrifcali.jpg", window.ASSET_URL + "image/sleigher3000.jpg", window.ASSET_URL + "image/starwars_rebels.jpg", window.ASSET_URL + "image/paw_patrol_music_maker.jpg", window.ASSET_URL + "image/lego_out_step.jpg", window.ASSET_URL + "image/spotbots_switched_on.jpg", window.ASSET_URL + "image/worst-witch.jpg", window.ASSET_URL + "image/plane_to_sphere.jpg", window.ASSET_URL + "image/test-icon.png", window.ASSET_URL + "image/blob_001.jpg", window.ASSET_URL + "image/blob_002.jpg", window.ASSET_URL + "image/blob_003.jpg", window.ASSET_URL + "image/blob_004.jpg", window.ASSET_URL + "image/blob_005.jpg", window.ASSET_URL + "image/blob_006.jpg", window.ASSET_URL + "image/blob_007.jpg", window.ASSET_URL + "image/blob_008.jpg", window.ASSET_URL + "image/blob_009.jpg", window.ASSET_URL + "image/blob_010.jpg", window.ASSET_URL + "image/blob_011.jpg", window.ASSET_URL + "image/blob_012.jpg", window.ASSET_URL + "image/blob_013.jpg", window.ASSET_URL + "image/blob_014.jpg", window.ASSET_URL + "image/blob_015.jpg", window.ASSET_URL + "image/blob_016.jpg", window.ASSET_URL + "image/blob_017.jpg", window.ASSET_URL + "image/blob_018.jpg", window.ASSET_URL + "image/blob_019.jpg", window.ASSET_URL + "image/blob_020.jpg", window.ASSET_URL + "image/blob_021.jpg", window.ASSET_URL + "image/blob_022.jpg", window.ASSET_URL + "image/blob_023.jpg", window.ASSET_URL + "image/blob_024.jpg", window.ASSET_URL + "image/blob_025.jpg", window.ASSET_URL + "image/blob_026.jpg", window.ASSET_URL + "image/blob_027.jpg", window.ASSET_URL + "image/blob_028.jpg", window.ASSET_URL + "image/blob_029.jpg", window.ASSET_URL + "image/blob_030.jpg", window.ASSET_URL + "image/blob_031.jpg", window.ASSET_URL + "image/line_animation.jpg", window.ASSET_URL + "image/confettis.jpg", window.ASSET_URL + "image/rogue_news.jpg", window.ASSET_URL + "image/handsup_001.jpg", window.ASSET_URL + "image/handsup_002.jpg", window.ASSET_URL + "image/handsup_003.jpg", window.ASSET_URL + "image/handsup_004.jpg", window.ASSET_URL + "image/handsup_005.jpg", window.ASSET_URL + "image/handsup_006.jpg", window.ASSET_URL + "image/handsup_007.jpg", window.ASSET_URL + "image/handsup_008.jpg", window.ASSET_URL + "image/handsup_009.jpg", window.ASSET_URL + "image/handsup_010.jpg", window.ASSET_URL + "image/handsup_011.jpg", window.ASSET_URL + "image/handsup_012.jpg", window.ASSET_URL + "image/handsup_013.jpg", window.ASSET_URL + "image/handsup_014.jpg", window.ASSET_URL + "image/handsup_015.jpg", window.ASSET_URL + "image/handsup_016.jpg", window.ASSET_URL + "image/handsup_017.jpg", window.ASSET_URL + "image/handsup_018.jpg", window.ASSET_URL + "image/handsup_019.jpg", window.ASSET_URL + "image/handsup_020.jpg", window.ASSET_URL + "image/handsup_021.jpg", window.ASSET_URL + "image/handsup_022.jpg", window.ASSET_URL + "image/handsup_023.jpg", window.ASSET_URL + "image/handsup_024.jpg", window.ASSET_URL + "image/handsup_025.jpg", window.ASSET_URL + "image/handsup_026.jpg", window.ASSET_URL + "image/handsup_027.jpg", window.ASSET_URL + "image/handsup_028.jpg", window.ASSET_URL + "image/handsup_029.jpg", window.ASSET_URL + "image/handsup_030.jpg", window.ASSET_URL + "image/handsup_031.jpg", window.ASSET_URL + "image/handsup_032.jpg", window.ASSET_URL + "image/handsup_033.jpg", window.ASSET_URL + "image/handsup_034.jpg", window.ASSET_URL + "image/handsup_035.jpg", window.ASSET_URL + "image/favourite_boss_revealed.jpg", window.ASSET_URL + "image/favourite_movie_revealed.jpg", window.ASSET_URL + "image/king_of_elks_revealed.jpg", window.ASSET_URL + "image/address_revealed.jpg", window.ASSET_URL + "image/email_revealed.jpg", window.ASSET_URL + "image/wrestler_revealed.jpg", window.ASSET_URL + "image/rugby_revealed.jpg", window.ASSET_URL + "image/saxo_revealed.jpg", window.ASSET_URL + "image/tinder_revealed.jpg", window.ASSET_URL + "image/julien_revealed.jpg", window.ASSET_URL + "image/shades_revealed.jpg", window.ASSET_URL + "image/maman.jpg"], _Device2.default.desktop ? this._textures.push(window.ASSET_URL + "image/icon_aboutme_text.png", window.ASSET_URL + "image/icon_experiment_text.png", window.ASSET_URL + "image/icon_viewall_text.png", window.ASSET_URL + "image/icon_work_text.png", window.ASSET_URL + "image/icon_aboutme.png", window.ASSET_URL + "image/icon_experiment.png", window.ASSET_URL + "image/icon_viewall.png", window.ASSET_URL + "image/icon_work.png") : this._textures.push(window.ASSET_URL + "image/icon_aboutme_mobile.png", window.ASSET_URL + "image/icon_experiment_mobile.png", window.ASSET_URL + "image/icon_viewall_mobile.png", window.ASSET_URL + "image/icon_work_mobile.png"), this.loader.addAssets(this._textures), this.loader.onComplete.add(this._loadComplete, this), this.loader.load()
        }
        return App.prototype._loadComplete = function(resources) {
            var _this = this;
            POLY.loadedResources = resources;
            var loader = document.getElementById("loader"),
                header = document.getElementById("header"),
                gif = document.getElementById("imageLoader");
            header.style.top = "-100px", _TextureManager2.default.addTextures(this._textures, function() {
                TweenLite.to("#loader", .4, {
                    delay: 1,
                    top: "-100%",
                    ease: Circ.easeIn,
                    onComplete: function() {
                        loader.style.display = "none", document.getElementById("loader").removeChild(gif), TweenLite.to("#header", .6, {
                            top: 0,
                            ease: Back.easeOut
                        })
                    }
                }), _this.scene = new _MainScene2.default, _this.scene.resize()
            }), POLY.utils.loop.add(this._update.bind(this))
        }, App.prototype.resize = function() {
            POLY.GL.resize(this.gl.canvas.clientWidth, this.gl.canvas.clientHeight), this.scene && this.scene.resize(), !_Device2.default.desktop && this.gl.canvas.clientWidth < this.gl.canvas.clientHeight ? document.getElementById("landscape").style.display = "block" : document.getElementById("landscape").style.display = "none"
        }, App.prototype._update = function() {
            this.gl.clearColor(0, 0, 0, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT), this.scene && this.scene.render()
        }, App
    }();
    exports.default = App, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _signals = __webpack_require__(10),
        _signals2 = _interopRequireDefault(_signals),
        _Device = __webpack_require__(4),
        _Device2 = _interopRequireDefault(_Device),
        UIManager = function() {
            function UIManager() {
                var _this = this;
                _classCallCheck(this, UIManager), this.currentLink = null, this.onMenu = new _signals2.default, this.buttonLinkIcon = document.getElementById("buttonLinkIcon"), this.menu = document.getElementById("menu"), this.teamSection = document.getElementById("teamSection"), this.art = document.getElementById("art"), this.dev = document.getElementById("dev"), this.titleAboutIt = document.getElementById("titleAboutIt"), this.titleTeam = document.getElementById("titleTeam"), this.description = document.getElementById("description"), this.listArtists = document.getElementById("listArtists"), this.listDevs = document.getElementById("listDevs"), this.container = document.getElementById("overlay"), this.aboutScreen = document.getElementById("aboutScreen"), this.aboutSlideIn = document.getElementById("aboutSlideIn"), this.scrollable = document.getElementById("scrollable"), this.inner = document.getElementById("inner"), this.about = document.getElementById("buttonAbout"), this.title = document.getElementById("titleProject"), this.buttonProject = document.getElementById("insideButtonProject"), this.top = document.getElementsByClassName("top")[0], this.date = document.getElementById("date"), this.producerName = document.getElementById("producerName"), this.client = document.getElementById("client"), this.aboutLink = document.getElementById("link"), this.aboutBack = document.getElementById("aboutBack"), this.aboutLink.addEventListener("click", function() {
                    _this.showAbout()
                }), this.aboutLink.addEventListener("touchend", function() {
                    _this.showAbout()
                }), this.buttonProject.addEventListener("click", function() {
                    _this.currentLink ? window.open(_this.currentLink, "_blank") : _this.currentEmail && (location.href = "mailto:" + _this.currentEmail)
                }), this.buttonProject.addEventListener("touchend", function() {
                    _this.currentLink ? window.open(_this.currentLink, "_blank") : _this.currentEmail && (location.href = "mailto:" + _this.currentEmail)
                }), this.aboutBack.addEventListener("click", function() {
                    _this.hideAbout()
                }), this.aboutBack.addEventListener("touchend", function() {
                    _this.hideAbout()
                }), _Device2.default.desktop && this.menu.addEventListener("click", function() {
                    _this.onClickMenu()
                }), this.menu.addEventListener("touchend", function() {
                    _this.onClickMenu()
                }), this.container.addEventListener("mouseenter", function() {
                    _this.onHover()
                }), this.container.addEventListener("mouseleave", function() {
                    _this.onOut()
                }), this.menuDisplayed = !1, this.hideTitle(!0)
            }
            return UIManager.prototype.onClickMenu = function() {
                var _this2 = this;
                this.isWaiting || (this.isWaiting = !0, setTimeout(function() {
                    _this2.isWaiting = !1
                }, 1e3), this.onMenu.dispatch())
            }, UIManager.prototype.changeMenuIcon = function(menuDisplayed) {
                var goTop = "icon_menu",
                    goRight = "icon_close";
                menuDisplayed || (goTop = "icon_close", goRight = "icon_menu");
                var goRightEl = document.getElementById(goRight);
                goRightEl.style.left = "-50px", goRightEl.style.top = "50%", TweenLite.to("#" + goTop, .4, {
                    top: -100
                }), TweenLite.to("#" + goRight, .4, {
                    left: 0
                })
            }, UIManager.prototype.hideAbout = function() {
                var _this3 = this;
                this.aboutDisplayed && (this.aboutDisplayed = !1, TweenLite.to("#aboutSlideIn", .4, {
                    top: "100%",
                    ease: Circ.easeOut,
                    onComplete: function() {
                        _this3.aboutScreen.style.display = "none"
                    }
                }), TweenLite.to("#link", .2, {
                    opacity: 1
                }), TweenLite.to("#buttonAbout", .4, {
                    delay: .2,
                    top: 0,
                    ease: Circ.easeOut
                }))
            }, UIManager.prototype.slide = function(element, id, from, to, duration, delay, cb) {
                element.style.opacity = 0, element.style.top = from + "px", TweenLite.to(id, duration, {
                    delay: delay,
                    top: to,
                    ease: Sine.easeInOut
                }), TweenLite.to(id, duration / 2, {
                    scaleY: 3,
                    delay: delay,
                    ease: Circ.easeIn,
                    onComplete: function() {
                        TweenLite.to(id, duration / 2, {
                            scaleY: 1,
                            ease: Circ.easeOut
                        })
                    }
                }), TweenLite.to(id, duration / 2, {
                    delay: duration / 3 + delay,
                    opacity: 1,
                    ease: Circ.easeOut,
                    onComplete: function() {
                        cb && cb()
                    }
                })
            }, UIManager.prototype.showAbout = function() {
                this.aboutDisplayed || (setTimeout(function() {
                    window.document.getElementById("inner").scrollTo(0, 0)
                }, 2), this.art.style.opacity = 0, this.dev.style.opacity = 0, this.description.style.opacity = 0, this.slide(this.titleAboutIt, "#titleAboutIt", 60, 0, .4, .1, function() {
                    TweenLite.to("#description", .3, {
                        opacity: 1
                    })
                }), this.slide(this.titleTeam, "#titleTeam", 60, 0, .4, .4, function() {
                    TweenLite.to(["#dev", "#art"], .3, {
                        opacity: 1
                    })
                }), this.aboutScreen.style.display = "block", this.aboutDisplayed = !0, TweenLite.to("#aboutSlideIn", .4, {
                    top: "0%",
                    ease: Circ.easeInOut
                }), TweenLite.to("#link", .2, {
                    opacity: 0
                }), TweenLite.to("#buttonAbout", .4, {
                    delay: .2,
                    top: -40,
                    ease: Circ.easeOut
                }))
            }, UIManager.prototype.setData = function(data) {
                this.title.innerHTML = data.title, this.date.innerHTML = data.date, this.producerName.innerHTML = data.producer, this.client.innerHTML = data.client, this.aboutSlideIn.style.backgroundColor = data.colorAbout || "#000000", this.titleAboutIt.style.display = data.icon ? "none" : "block", this.description.innerHTML = data.description;
                var team = data.team;
                if ("" === data.client && "" === data.date && "" === data.producer ? this.top.style.display = "none" : this.top.style.display = "block", this.currentLink = null, this.currentEmail = null, this.buttonProject.style.display = "inline-block", "" !== data.link ? (this.buttonLinkIcon.src = "./assets/image/link-icon.png", this.currentLink = data.link) : data.email && "" !== data.email ? (this.buttonLinkIcon.src = "./assets/image/email-icon.png", this.currentEmail = data.email) : this.buttonProject.style.display = "none", this.aboutLink.style.display = "block", 0 === team.art.length && 0 === team.dev.length) this.teamSection.style.display = "none", "" === data.description && (this.aboutLink.style.display = "none");
                else {
                    this.teamSection.style.display = "block";
                    for (var ulContentArt = "", i = 0; i < team.art.length; i++) ulContentArt += "<li>" + team.art[i] + "</li>";
                    0 === team.art.length && (ulContentArt = "<li>N/A</li>");
                    for (var ulContentDev = "", i = 0; i < team.dev.length; i++) ulContentDev += "<li>" + team.dev[i] + "</li>";
                    0 === team.dev.length && (ulContentDev = "<li>N/A</li>"), this.listArtists.innerHTML = ulContentArt, this.listDevs.innerHTML = ulContentDev
                }
            }, UIManager.prototype.showTitle = function(title) {
                this.container.style.display = "block", this.top.style.width = 0, this.container.style.opacity = 1, this.producerName.style.opacity = 0, this.title.style.opacity = 0, this.title.style.top = "-60px", this.date.style.left = "-150px", this.client.style.right = "-150px", this.about.style.top = "-80px", this.aboutLink.style.opacity = 1, this.buttonProject.style.opacity = 0, setTimeout(function() {
                    TweenLite.to(".top", .4, {
                        width: "90%",
                        ease: Circ.easeOut
                    }), TweenLite.to("#producerName", .4, {
                        delay: .4,
                        opacity: 1
                    }), TweenLite.to("#date", .6, {
                        delay: .4,
                        left: 0,
                        ease: Back.easeOut.config(2)
                    }), TweenLite.to("#client", .6, {
                        delay: .4,
                        right: 0,
                        ease: Back.easeOut.config(2)
                    }), TweenLite.to("#titleProject", .8, {
                        delay: .1,
                        top: 20,
                        ease: Circ.easeInOut
                    }), TweenLite.to("#titleProject", .4, {
                        delay: .1,
                        scaleY: 3,
                        ease: Circ.easeIn,
                        onComplete: function() {
                            TweenLite.to("#titleProject", .4, {
                                scaleY: 1,
                                ease: Circ.easeOut
                            })
                        }
                    }), TweenLite.to("#titleProject", .4, {
                        delay: .5,
                        opacity: 1,
                        ease: Circ.easeOut
                    }), TweenLite.to("#buttonAbout", .4, {
                        delay: .2,
                        top: 0,
                        ease: Circ.easeOut
                    }), TweenLite.to("#insideButtonProject", .2, {
                        delay: .3,
                        opacity: 1
                    })
                }, 500)
            }, UIManager.prototype.hideTitle = function(snap) {
                var _this4 = this;
                snap && (this.container.style.opacity = 0, this.producerName.style.opacity = 0, this.container.style.display = "none"), this.buttonProject.style.opacity = 0, this.hideAbout(), this.container.style.opacity = 0, TweenLite.to("#overlay", .2, {
                    opacity: 0,
                    ease: Circ.easeOut,
                    onComplete: function() {
                        _this4.container.style.display = "none"
                    }
                })
            }, UIManager.prototype.onHover = function() {}, UIManager.prototype.onOut = function() {}, UIManager
        }();
    exports.default = UIManager, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _Device = __webpack_require__(4),
        _Device2 = _interopRequireDefault(_Device),
        SpeedController = function() {
            function SpeedController() {
                _classCallCheck(this, SpeedController), this.tick = 0, this.previousPos = {
                    x: 0,
                    y: 0
                }, this.previousTime = !1, this.pos = {
                    x: 0,
                    y: 0
                }, this.pos = {
                    x: 0,
                    y: 0
                }, this.lastSpeed = 0, this.speed = 0, this.speedX = 0, this.speedY = 0, this.targetSpeed = 0
            }
            return SpeedController.prototype.onUp = function() {
                this.isDown = !1
            }, SpeedController.prototype.onDown = function(pt) {
                this.isDown = !0, this.previousPos.x = this.pos.x = pt.x, this.previousPos.y = this.pos.y = pt.y, this.speed = this.lastSpeed = 0
            }, SpeedController.prototype.calculateSpeed = function() {
                var new_x, new_y, new_t, x_dist, y_dist, interval, vx, vy, t, negX, negY, velocity, x = this.pos.x,
                    y = this.pos.y;
                if (!this.previousTime) return 0;
                t = this.previousTime, new_x = this.previousPos.x, new_y = this.previousPos.y, new_t = _Device2.default.safari ? this.tick : Date.now(), x_dist = new_x - x, y_dist = new_y - y, interval = new_t - t, negX = x_dist < 0 ? 1 : -1, negY = y_dist < 0 ? 1 : -1;
                var minInterval = .1;
                return _Device2.default.ie && (minInterval = 4), interval <= minInterval && (interval = minInterval), _Device2.default.safari ? (vx = negX * Math.sqrt(x_dist * x_dist) / (interval / 6), vy = negY * Math.sqrt(y_dist * y_dist) / (interval / 6)) : (vx = negX * Math.sqrt(x_dist * x_dist) / (interval / 50), vy = negY * Math.sqrt(y_dist * y_dist) / (interval / 50)), x = new_x, y = new_y, isNaN(vx) && (vx = 0), isNaN(vy) && (vy = 0), this.speedX = vx, this.speedY = vy, velocity = Math.sqrt(x_dist * x_dist + y_dist * y_dist) / (interval / 20), isNaN(velocity) && (velocity = 0), velocity
            }, SpeedController.prototype.onMove = function(pt) {
                if (this.tick++, this.isDown) {
                    this.pos.x = pt.x, this.pos.y = pt.y;
                    var speed = Math.abs(this.calculateSpeed());
                    speed > 60 && (speed = 60), speed /= 60, speed = this.easeInOutSine(speed, 0, 1, 1), this.speed += .1 * (speed - this.lastSpeed), this.tickMove++, this.lastSpeed = this.speed, _Device2.default.safari ? this.previousTime = this.tick : this.previousTime = Date.now(), this.previousPos.x = this.pos.x, this.previousPos.y = this.pos.y
                }
            }, SpeedController.prototype.update = function() {
                this.tick++, this.speedX *= .9, this.speedY *= .9
            }, SpeedController.prototype.easeInOutSine = function(t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
            }, SpeedController.prototype.easeOutSine = function(t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b
            }, SpeedController
        }();
    exports.default = new SpeedController, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _data = __webpack_require__(14),
        _data2 = _interopRequireDefault(_data),
        DataManager = function() {
            function DataManager() {
                _classCallCheck(this, DataManager), this.data = [], this.debug = !1
            }
            return DataManager.prototype.fillGrid = function(layout) {
                this.data.length = 0, this.size = {
                    width: layout.size[0],
                    height: layout.size[1]
                };
                for (var id = 0, x = 0; x < this.size.width; x++)
                    for (var y = 0; y < this.size.height; y++) {
                        var indexData = this.getIndexat(x, y),
                            d = _data2.default.data[layout.grid[indexData]];
                        this.debug, this.data[indexData] = d, id++
                    }
                this.debug
            }, DataManager.prototype.getIndexat = function(x, y) {
                return x + this.size.width * y
            }, DataManager.prototype.getDataAt = function(x, y) {
                var index = this.getIndexat(x, y);
                return this.debug, this.data[index]
            }, DataManager
        }();
    exports.default = DataManager, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj)
            for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _Poly = __webpack_require__(1),
        POLY = _interopRequireWildcard(_Poly),
        _ViewBg = __webpack_require__(16),
        _Physics = (_interopRequireDefault(_ViewBg), __webpack_require__(12)),
        _Physics2 = _interopRequireDefault(_Physics),
        _ViewPointMass = __webpack_require__(17),
        _ViewPointMass2 = _interopRequireDefault(_ViewPointMass),
        _ViewPointQuad = __webpack_require__(18),
        _ViewPointQuad2 = _interopRequireDefault(_ViewPointQuad),
        _ViewQuad = __webpack_require__(19),
        _ViewQuad2 = _interopRequireDefault(_ViewQuad),
        _glMatrix = __webpack_require__(3),
        _Math = __webpack_require__(38),
        _Math2 = _interopRequireDefault(_Math),
        _SpeedController = __webpack_require__(31),
        _SpeedController2 = _interopRequireDefault(_SpeedController),
        _DataManager = __webpack_require__(32),
        _DataManager2 = _interopRequireDefault(_DataManager),
        _UIManager = __webpack_require__(30),
        _UIManager2 = _interopRequireDefault(_UIManager),
        _Device = __webpack_require__(4),
        _Device2 = _interopRequireDefault(_Device),
        _data = __webpack_require__(14),
        _data2 = _interopRequireDefault(_data),
        target = _glMatrix.vec3.create(),
        pointsOrdered = [],
        scale = POLY.GL.scale;
    scale > 2 && (scale = 2), scale = 1;
    var getCursorPos = function(e) {
            return e.touches && e.touches.length > 0 ? {
                x: e.touches[0].pageX * scale,
                y: e.touches[0].pageY * scale
            } : e.changedTouches && e.changedTouches.length > 0 ? {
                x: e.changedTouches[0].pageX * scale,
                y: e.changedTouches[0].pageY * scale
            } : {
                x: e.clientX * scale,
                y: e.clientY * scale
            }
        },
        MainScene = function() {
            function MainScene() {
                _classCallCheck(this, MainScene), this.debug = !1, this.gl = null, this.tick = 0, this.gl = POLY.gl, this.objects = [], this.camera = new POLY.cameras.PerspectiveCamera, this.camera.perspective(45, POLY.GL.aspectRatio, .1, 100), this.overlay = document.getElementById("overlay"), this.easingValueX = 0, this.easingValueY = 0, this.orbitalControl = new POLY.control.OrbitalControl(this.camera.matrix, 2.5),
                    this.orbitalControl.lock(!0), this.orbitalControl.lockZoom(!0), this.orbitalControl.update(), POLY.GL.setCamera(this.camera), this.projectionMatrix = _glMatrix.mat4.create(), this.gridHeight = 8, this.gridWidth = 12, this.gridQuadsHeight = 8, this.gridQuadsWidth = 12, this.restingDistancesVerlet = 1, this.restingDistances = 1, this.stiffnesses = .01, this.menuQuads = [], this.intersection = {
                        x: -1e4,
                        y: -1e4
                    }, this.pointsGrid = [], this.pointsQuad = [], this.views = [], this.viewsVerlet = [], this.easeSpeedWheel = {
                        x: 0,
                        y: 0
                    }, this.speedWheel = {
                        x: 0,
                        y: 0
                    }, this.pos = {
                        x: 0,
                        y: 0
                    }, this.previousPos = {
                        x: 0,
                        y: 0
                    }, this.speedX = 0, this.speedY = 0, this.dragSpeed = {
                        x: 0,
                        y: 0
                    }, this.cameraX = 0, this.cameraY = 0, this.menuActive = !1, this.waitingForMenu = !1, this.menuImpactVerlet = !1, this.physics = new _Physics2.default, this.createGridPoints(), this.createQuadsPoints(this.gridQuadsWidth, this.gridQuadsHeight), this.createQuads(), this.limitMinY = -(this.gridQuadsHeight * this.restingDistances) / 2 + this.restingDistances / 2, this.limitMinX = -(this.gridQuadsWidth * this.restingDistances) / 2 + this.restingDistances / 2, this.dataManager = new _DataManager2.default, this.dataManager.fillGrid(_data2.default.layout.main), this.uiManager = new _UIManager2.default, this.uiManager.onMenu.add(this.toggleMenu, this), this.program = new POLY.Program, this.sphereIntersection = new POLY.geometry.Sphere(this.program), this.sphereIntersection.scale.set(.05), this.rayCamera = new POLY.core.Ray, this.mouse = {
                        x: 0,
                        y: 0
                    }, this.plane = [
                        [0, 0, 0],
                        [1, 1, 0],
                        [0, -1, 0]
                    ], this.addEvents(), this.pinnedPoints = []
            }
            return MainScene.prototype.getQuadAtPos = function(ptx, pty) {
                for (var nbColumns = this.gridQuadsWidth - 1, nbLines = this.gridQuadsHeight - 1, totalWidth = nbColumns * this.restingDistances + this.restingDistances, totalHeight = nbLines * this.restingDistances, col = Math.floor((ptx + totalWidth / 2) / this.restingDistances) - 1, line = Math.floor((pty + totalHeight / 2) / this.restingDistances), x = col - 2; x < col + 2; x++)
                    for (var y = line - 2; y < line + 2; y++) {
                        var indexView = this.getViewAtCoordinates(x, y),
                            quad = this.views[indexView];
                        if (quad && Math.abs(ptx - quad.x) <= this.restingDistances / 2 && Math.abs(pty - quad.y) <= this.restingDistances / 2) return {
                            quad: quad,
                            x: x,
                            y: y
                        }
                    }
            }, MainScene.prototype.hideMenu = function() {
                var _this = this;
                if (this.menuActive) {
                    this.menuImpactVerlet = !1, this.menuQuads.length = 0, Easings.to(this.orbitalControl, 1.2, {
                        _targetRadius: 3,
                        ease: Easings.easeInOutCirc,
                        onUpdate: function() {
                            _this.orbitalControl._targetRadius > 2.5 && (_this.orbitalControl._targetRadius = 2.5), _this.orbitalControl.update()
                        },
                        onComplete: function() {
                            _this.menuActive = !1, _this.orbitalControl._targetRadius = 2.5, _this.orbitalControl._radius = 2.5, _this.orbitalControl.update()
                        }
                    });
                    for (var i = 0; i < this.views.length; i++) {
                        var q = this.views[i];
                        q.isMenuIcon ? q.removeMenuIcon() : q.shut(!1, Math.random())
                    }
                }
            }, MainScene.prototype.toggleMenu = function() {
                var _this2 = this;
                if (!this.waitingForMenu) {
                    if (this.activeQuad) return this.waitingForMenu = !0, void this.removeActiveQuad(function() {
                        _this2.waitingForMenu = !1, _this2.toggleMenu()
                    });
                    if (this.menuActive) return this.hideMenu(), void this.uiManager.changeMenuIcon(!1);
                    this.uiManager.changeMenuIcon(!0), this.menuActive = !0;
                    var data = this.getQuadAtPos(0, 0),
                        quad = data.quad;
                    if (quad) {
                        var x = data.x,
                            y = data.y,
                            topLeftQuad = void 0,
                            topRightQuad = void 0,
                            bottomRightQuad = void 0,
                            bottomLeftQuad = void 0;
                        quad.x > 0 && quad.y > 0 ? (topLeftQuad = this.views[this.getViewAtCoordinates(x - 1, y)], topRightQuad = quad, bottomRightQuad = this.views[this.getViewAtCoordinates(x, y - 1)], bottomLeftQuad = this.views[this.getViewAtCoordinates(x - 1, y - 1)]) : quad.x > 0 ? (topLeftQuad = this.views[this.getViewAtCoordinates(x - 1, y + 1)], topRightQuad = this.views[this.getViewAtCoordinates(x, y + 1)], bottomRightQuad = quad, bottomLeftQuad = this.views[this.getViewAtCoordinates(x - 1, y)]) : quad.x <= 0 && quad.y > 0 ? (topLeftQuad = this.views[this.getViewAtCoordinates(x, y + 1)], topRightQuad = this.views[this.getViewAtCoordinates(x + 1, y + 1)], bottomRightQuad = this.views[this.getViewAtCoordinates(x + 1, y)], bottomLeftQuad = quad) : (topLeftQuad = quad, topRightQuad = this.views[this.getViewAtCoordinates(x + 1, y)], bottomRightQuad = this.views[this.getViewAtCoordinates(x + 1, y - 1)], bottomLeftQuad = this.views[this.getViewAtCoordinates(x, y - 1)]);
                        var speed = .8,
                            ext = _Device2.default.desktop ? "" : "_mobile";
                        topLeftQuad.showMenuIcon(1, 0, !1, .2 * speed, {
                            colorMenuTop: [8 / 255, 151 / 255, 160 / 255],
                            colorMenuBottom: [22 / 255, 191 / 255, 149 / 255],
                            icon: "icon_viewall" + ext + ".png",
                            icon_hover: "icon_viewall_text.png"
                        }, function() {
                            _this2.dataManager.fillGrid(_data2.default.layout.main), _this2.toggleMenu()
                        }), topRightQuad.showMenuIcon(0, 1, !1, .95 * speed, {
                            colorMenuTop: [1, 63 / 255, 63 / 255],
                            colorMenuBottom: [208 / 255, 79 / 255, 103 / 255],
                            icon: "icon_experiment" + ext + ".png",
                            icon_hover: "icon_experiment_text.png"
                        }, function() {
                            _this2.dataManager.fillGrid(_data2.default.layout.lab), _this2.toggleMenu()
                        }), bottomLeftQuad.showMenuIcon(0, 1, !0, .45 * speed, {
                            colorMenuTop: [55 / 255, 148 / 255, 254 / 255],
                            colorMenuBottom: [124 / 255, 76 / 255, 201 / 255],
                            icon: "icon_work" + ext + ".png",
                            icon_hover: "icon_work_text.png"
                        }, function() {
                            _this2.dataManager.fillGrid(_data2.default.layout.pro), _this2.toggleMenu()
                        }), bottomRightQuad.showMenuIcon(1, 0, !1, .7 * speed, {
                            colorMenuTop: [212 / 255, 131 / 255, 15 / 255],
                            colorMenuBottom: [228 / 255, 201 / 255, 26 / 255],
                            icon: "icon_aboutme" + ext + ".png",
                            icon_hover: "icon_aboutme_text.png"
                        }, function() {
                            _this2.dataManager.fillGrid(_data2.default.layout.about), _this2.toggleMenu()
                        }), topLeftQuad.onOut(), topRightQuad.onOut(), bottomLeftQuad.onOut(), bottomRightQuad.onOut();
                        for (var i = 0; i < this.views.length; i++) {
                            var q = this.views[i];
                            q.isMenuIcon || q.shut(!0, .8 * Math.random())
                        }
                        Easings.to(this, .8, {
                            cameraX: this.cameraX - topLeftQuad.x - this.restingDistances / 2,
                            ease: Easings.easeInOutCirc
                        }), Easings.to(this, .8, {
                            cameraY: this.cameraY - topLeftQuad.y + this.restingDistances / 2,
                            ease: Easings.easeInOutCirc
                        }), Easings.to(this.orbitalControl, 1.2, {
                            _targetRadius: 2.2,
                            delay: .4,
                            ease: Easings.easeInOutCirc,
                            onUpdate: function() {
                                _this2.orbitalControl.update()
                            },
                            onComplete: function() {
                                _this2.menuImpactVerlet = !0
                            }
                        })
                    }
                }
            }, MainScene.prototype.onTraceRay = function(debug) {
                this.rayCamera = this.camera.getRay([this.mouse.x, this.mouse.y, 1], this.rayCamera);
                var origin = this.orbitalControl._position,
                    direction = this.rayCamera.direction;
                _glMatrix.vec3.copy(target, direction), _glMatrix.vec3.scale(target, target, this.orbitalControl._radius), _glMatrix.vec3.add(target, target, origin);
                var intersection = _Math2.default.intersectionLinePlane([origin, target], this.plane);
                return this.sphereIntersection.position.set(intersection.x, intersection.y, intersection.z), this.intersection = intersection, {
                    x: intersection.x,
                    y: intersection.y
                }
            }, MainScene.prototype.impactVerlet = function(pt) {
                for (var minDist = this.restingDistancesVerlet, y = 0; y < this.gridHeight; y++)
                    for (var x = 0; x < this.gridWidth; x++) {
                        var index = this.getPointsAtCoordinates(x, y),
                            pG = this.pointsGrid[index],
                            dist = Math.pow(this.pos.x - pG.x, 2) + Math.pow(this.pos.y - pG.y, 2);
                        if (dist <= minDist) {
                            var depth = _Math2.default.map(dist, 0, minDist, -.012, 0);
                            depth < -.012 && (depth = -.012), this.menuActive && (depth *= .05), pG.accZ = depth
                        } else pG.accZ = 0
                    }
            }, MainScene.prototype.addEvents = function() {
                var _this3 = this,
                    mainContainer = document.getElementById("canvas");
                mainContainer.addEventListener("mousedown", function(e) {
                    return _this3._onDown(e)
                }), _Device2.default.desktop && window.addEventListener("mouseup", function(e) {
                    return _this3._onUp(e)
                }), window.addEventListener("mousemove", function(e) {
                    return _this3._onMove(e)
                }), mainContainer.addEventListener("touchstart", function(e) {
                    return _this3._onDown(e)
                }), window.addEventListener("touchend", function(e) {
                    return _this3._onUp(e)
                }), mainContainer.addEventListener("touchmove", function(e) {
                    return _this3._onMove(e)
                }), document.addEventListener("keydown", function(event) {
                    _this3._onKeyDown(event.keyCode)
                }), mainContainer.addEventListener("mousewheel", this._onMouseWheel.bind(this))
            }, MainScene.prototype.cancelEvent = function(e) {
                return e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), e.cancelBubble = !0, e.returnValue = !1, !1
            }, MainScene.prototype._onKeyDown = function(key) {
                var _this4 = this;
                this.activeQuad && key > 36 && key < 41 && this.removeActiveQuad(function() {
                    var x = 0,
                        y = 0;
                    switch (key) {
                        case 37:
                            x = -1, y = 0;
                            break;
                        case 38:
                            x = 0, y = 1;
                            break;
                        case 39:
                            x = 1, y = 0;
                            break;
                        case 40:
                            x = 0, y = -1
                    }
                    var quad = _this4.getQuadAtPos(x, y).quad;
                    _this4.selectQuad(quad)
                }, !0)
            }, MainScene.prototype._onMouseWheel = function(e) {
                this.activeQuad && this.removeActiveQuad(), this.easeSpeedWheel.x = 1e-4 * e.wheelDeltaX, this.easeSpeedWheel.y = 1e-4 * e.wheelDeltaY, this.easeSpeedWheel.y > .05 ? this.easeSpeedWheel.y = .05 : this.easeSpeedWheel.y < -.05 && (this.easeSpeedWheel.y = -.05)
            }, MainScene.prototype._onKeydown = function() {}, MainScene.prototype._onDown = function(e) {
                var fullscreen = window.fullScreen || window.innerWidth == screen.width && window.innerHeight == screen.height;
                if (_Device2.default.android && !fullscreen && (document.body.mozRequestFullScreen ? document.body.mozRequestFullScreen() : document.body.webkitRequestFullScreen && document.body.webkitRequestFullScreen()), !this._isDown) {
                    this.onTraceRay(), this._isDown = !0;
                    var pt = getCursorPos(e);
                    _SpeedController2.default.onDown(pt);
                    pt.x / (POLY.gl.viewportWidth / POLY.GL.scale) * 2 - 1, 2 * -(pt.y / (POLY.gl.viewportHeight / POLY.GL.scale)) + 1;
                    this.firstPos = {
                        x: pt.x,
                        y: pt.y
                    }, this.speed = this.lastSpeed = 0, this.activeQuad || this.cancelEvent(e)
                }
            }, MainScene.prototype.removeActiveQuad = function(cb) {
                var _this5 = this;
                if (this.activeQuad) {
                    for (var k = 0; k < this.views.length; k++) this.views[k].fade(0);
                    this.isOnActiveQuad = !1, this.uiManager.hideTitle(), this.activeQuad.removeMenuIcon(), this.activeQuad.reveal(!1), this.activeQuad.setActive(0, !0), setTimeout(function() {
                        cb && cb(), cb = null
                    }, 600);
                    for (var _loop = function() {
                            var pt = _this5.activeQuad.points[i];
                            Easings.to(pt, .2 + .1 * i, {
                                onCompleteParams: {
                                    pt: pt,
                                    i: i
                                },
                                onComplete: function(data) {
                                    pt.donotupdate = !1, 3 === data.i
                                },
                                easeZ: 0,
                                ease: Easings.easeOutCirc
                            })
                        }, i = 0; i < this.activeQuad.points.length; i++) _loop()
                }
                this.activeQuad = null
            }, MainScene.prototype.onClick = function(ptx, pty) {
                if (this.activeQuad) return void(this.isOnActiveQuad || this.removeActiveQuad(function() {}));
                var quad = this.getQuadAtPos(ptx, pty).quad;
                return !!quad && (this.menuActive && !quad.isMenuIcon ? void this.toggleMenu() : this.menuActive ? void quad.onPress() : (this.selectQuad(quad), !0))
            }, MainScene.prototype.selectQuad = function(quad) {
                var _this6 = this;
                this.activeQuad = quad, this.uiManager.setData(quad.data), this.uiManager.showTitle(), quad.reveal(!0), quad.setActive();
                for (var i = 0; i < quad.points.length; i++) {
                    var _pt = quad.points[i];
                    Easings.to(_pt, .6 + .15 * i, {
                        onStartParams: _pt,
                        onStart: function(pt) {
                            pt.donotupdate = !0
                        },
                        easeZ: 1,
                        delay: .2 + .02 * i,
                        onUpdateParams: _pt,
                        ease: Easings.elasticOutSoft
                    })
                }
                Easings.to(this, .5, {
                    cameraX: this.cameraX - quad.x,
                    ease: Easings.easeOutSine,
                    onUpdate: function() {
                        _this6.overlay.style.width = POLY.gl.viewportHeight / POLY.GL.scale * .601 + "px", _this6.overlay.style.height = POLY.gl.viewportHeight / POLY.GL.scale * .602 + "px";
                        var top = -(POLY.gl.viewportHeight / POLY.GL.scale * .602 / 2),
                            left = -(POLY.gl.viewportHeight / POLY.GL.scale * .601 / 2);
                        _this6.activeQuad && (left += _this6.activeQuad.x * (POLY.gl.viewportHeight / POLY.GL.scale) * .601, top -= _this6.activeQuad.y * (POLY.gl.viewportHeight / POLY.GL.scale) * .602), _this6.overlay.style.marginLeft = left + "px", _this6.overlay.style.marginTop = top + "px"
                    },
                    onComplete: function() {}
                }), Easings.to(this, .5, {
                    cameraY: this.cameraY - quad.y,
                    ease: Easings.easeOutSine
                });
                for (var k = 0; k < this.views.length; k++) this.views[k].fade(1)
            }, MainScene.prototype._onMove = function(e) {
                var pt = getCursorPos(e);
                _SpeedController2.default.onMove(pt);
                var x = pt.x / (POLY.gl.viewportWidth / POLY.GL.scale) * 2 - 1,
                    y = 2 * -(pt.y / (POLY.gl.viewportHeight / POLY.GL.scale)) + 1;
                this.mouse.x = x, this.mouse.y = y, this._isDown && this.activeQuad && (Math.abs(this.firstPos.x - pt.x) > 2 || Math.abs(this.firstPos.y - pt.y) > 2.5) && this.removeActiveQuad();
                var ptIntersection = this.onTraceRay();
                this.menuActive ? this.onMenuQuad(ptIntersection.x, ptIntersection.y) : this.activeQuad && this.onActiveQuad(), this.activeQuad || this.cancelEvent(e)
            }, MainScene.prototype.onMenuQuad = function(x, y) {
                var quad = this.getQuadAtPos(x, y);
                quad && quad.quad !== this.lastQuadMenuOn && (this.lastQuadMenuOn && this.lastQuadMenuOn.onOut(), quad.quad.onHover(), this.lastQuadMenuOn = quad.quad)
            }, MainScene.prototype.onActiveQuad = function() {
                var origin = this.orbitalControl._position,
                    plane = [
                        [0, 0, this.activeQuad.points[0].z],
                        [1, 1, this.activeQuad.points[0].z],
                        [0, -1, this.activeQuad.points[0].z]
                    ],
                    intersection = _Math2.default.intersectionLinePlane([origin, target], plane);
                Math.abs(intersection.x - this.activeQuad.x) <= this.restingDistances / 2 && Math.abs(intersection.y - this.activeQuad.y) <= this.restingDistances / 2 + .1 ? this.isOnActiveQuad || (this.uiManager.onHover(), this.activeQuad.onHover(), this.isOnActiveQuad = !0) : this.isOnActiveQuad && (this.activeQuad.onOut(), this.uiManager.onOut(), this.isOnActiveQuad = !1)
            }, MainScene.prototype._onUp = function(e) {
                var _this7 = this;
                if (_Device2.default.desktop || e.touches) {
                    this._isDown = !1;
                    var pt = getCursorPos(e),
                        x = pt.x / (POLY.gl.viewportWidth / POLY.GL.scale) * 2 - 1,
                        y = 2 * -(pt.y / (POLY.gl.viewportHeight / POLY.GL.scale)) + 1;
                    this.mouse.x = x, this.mouse.y = y;
                    this.onTraceRay(!0);
                    this.firstPos && Math.abs(this.firstPos.x - pt.x) < 2 && Math.abs(this.firstPos.y - pt.y) < 2 && setTimeout(function() {
                        _this7.onClick(_this7.intersection.x, _this7.intersection.y)
                    }, 100), _SpeedController2.default.onUp(), this.activeQuad || this.cancelEvent(e)
                }
            }, MainScene.prototype.createGridPoints = function() {
                for (var y = 0; y < this.gridHeight; y++)
                    for (var x = 0; x < this.gridWidth; x++) {
                        var pointmass = new _ViewPointMass2.default(-(this.gridWidth - 1) / 2 * this.restingDistancesVerlet + x * this.restingDistancesVerlet, -(this.gridHeight - 1) / 2 * this.restingDistancesVerlet + y * this.restingDistancesVerlet);
                        pointmass.setColor(1, 0, 0), 0 != x && pointmass.attachTo(this.pointsGrid[this.pointsGrid.length - 1], this.restingDistancesVerlet, 2 * this.stiffnesses), 0 != y && pointmass.attachTo(this.pointsGrid[(y - 1) * this.gridWidth + x], this.restingDistancesVerlet, 2 * this.stiffnesses), 0 != x && 0 != y && x != this.gridWidth - 1 && y != this.gridHeight - 1 || pointmass.pinTo(pointmass.x, pointmass.y, 0, !0), this.pointsGrid.push(pointmass)
                    }
            }, MainScene.prototype.createQuadsPoints = function(w, h) {
                for (var y = 0; y < h; y++)
                    for (var x = 0; x < w; x++) {
                        var pointquad = new _ViewPointQuad2.default(-(w - 1) / 2 * this.restingDistances + x * this.restingDistances, -(h - 1) / 2 * this.restingDistances + y * this.restingDistances);
                        this.pointsQuad.push(pointquad)
                    }
            }, MainScene.prototype.getCenterPoint = function(p1, p2) {
                var x = p1.x + (p2.x - p1.x) / 2,
                    y = p1.y + (p2.y - p1.y) / 2,
                    z = p1.z + (p2.z - p1.z) / 2;
                return {
                    x: x,
                    y: y,
                    z: z
                }
            }, MainScene.prototype.findNeighbours = function(p1, debug) {
                if (!p1.donotupdate) {
                    for (var points = [], x = 0; x < this.gridWidth - 1; x++)
                        for (var y = 0; y < this.gridHeight - 1; y++) {
                            var indexBL = this.getPointsAtCoordinates(x, y),
                                indexBR = this.getPointsAtCoordinates(x + 1, y),
                                indexTR = this.getPointsAtCoordinates(x + 1, y + 1),
                                indexTL = this.getPointsAtCoordinates(x, y + 1),
                                pBL = this.pointsGrid[indexBL],
                                pBR = this.pointsGrid[indexBR],
                                pTR = this.pointsGrid[indexTR],
                                pTL = this.pointsGrid[indexTL],
                                inTriangle1 = _Math2.default.isPointInTriangle(p1, pTL, pTR, pBR),
                                inTriangle2 = _Math2.default.isPointInTriangle(p1, pBL, pTL, pBR);
                            if (inTriangle1 || inTriangle2) {
                                points.push(pTL), points.push(pTR), points.push(pBL), points.push(pBR);
                                break
                            }
                        }
                    if (0 !== points.length) {
                        var centroid = void 0;
                        if (points.length > 3 && (centroid = _Math2.default.findCentroid(points)), !(points.length < 4)) {
                            if (points[0].x < points[1].x ? (pointsOrdered[0] = points[0], pointsOrdered[1] = points[1]) : (pointsOrdered[1] = points[0], pointsOrdered[0] = points[1]), points[2].x < points[3].x ? (pointsOrdered[3] = points[2], pointsOrdered[2] = points[3]) : (pointsOrdered[2] = points[2], pointsOrdered[3] = points[3]), p1.x > centroid.x) {
                                if (p1.y > centroid.y) {
                                    var _inTriangle = _Math2.default.isPointInTriangle(p1, centroid, pointsOrdered[0], pointsOrdered[1]);
                                    _inTriangle ? (points[0] = pointsOrdered[0], points[1] = pointsOrdered[1]) : (points[0] = pointsOrdered[1], points[1] = pointsOrdered[2])
                                } else if (p1.y < centroid.y) {
                                    var _inTriangle2 = _Math2.default.isPointInTriangle(p1, centroid, pointsOrdered[1], pointsOrdered[2]);
                                    _inTriangle2 ? (points[0] = pointsOrdered[1], points[1] = pointsOrdered[2]) : (points[0] = pointsOrdered[2], points[1] = pointsOrdered[3])
                                }
                            } else if (p1.x < centroid.x)
                                if (p1.y > centroid.y) {
                                    var _inTriangle3 = _Math2.default.isPointInTriangle(p1, centroid, pointsOrdered[0], pointsOrdered[3]);
                                    _inTriangle3 ? (points[0] = pointsOrdered[0], points[1] = pointsOrdered[3]) : (points[0] = pointsOrdered[0], points[1] = pointsOrdered[1])
                                } else if (p1.y < centroid.y) {
                                var _inTriangle4 = _Math2.default.isPointInTriangle(p1, centroid, pointsOrdered[0], pointsOrdered[3]);
                                _inTriangle4 ? (points[0] = pointsOrdered[0], points[1] = pointsOrdered[3]) : (points[0] = pointsOrdered[3], points[1] = pointsOrdered[2])
                            }
                            if (points.length >= 3) {
                                var p1P = points[0],
                                    p2P = points[1],
                                    p3P = centroid,
                                    x0 = p2P.x,
                                    y0 = p2P.y,
                                    z0 = p2P.z,
                                    _x = p1.x,
                                    _y = p1.y,
                                    v1 = [p2P.x - p1P.x, p2P.y - p1P.y, p2P.z - p1P.z],
                                    v2 = [p2P.x - p3P.x, p2P.y - p3P.y, p2P.z - p3P.z],
                                    abc = _glMatrix.vec3.create();
                                _glMatrix.vec3.cross(abc, v1, v2);
                                var z = (abc[0] * _x - abc[0] * x0 + abc[1] * _y - abc[1] * y0 - abc[2] * z0) / -abc[2];
                                p1.setZ && p1.setZ(z)
                            }
                        }
                    }
                }
            }, MainScene.prototype.createQuads = function() {
                for (var nbColumns = this.gridQuadsWidth - 1, nbLines = this.gridQuadsHeight - 1, i = 0; i < nbLines * nbColumns; i++) {
                    var viewQuad = new _ViewQuad2.default(2 * i);
                    this.views.push(viewQuad)
                }
            }, MainScene.prototype.getPointsAtCoordinates = function(x, y) {
                var index = x + this.gridWidth * y;
                return index
            }, MainScene.prototype.getPointsQuadAtCoordinates = function(x, y) {
                var index = x + this.gridQuadsWidth * y;
                return index
            }, MainScene.prototype.getViewAtCoordinates = function(x, y) {
                var index = x + (this.gridQuadsWidth - 1) * y;
                return index
            }, MainScene.prototype.render = function() {
                if (_SpeedController2.default.update(), this.physics.update(this.pointsGrid), this.pos.x = this.sphereIntersection.position.x, this.pos.y = this.sphereIntersection.position.y, this.intersection && (this.findNeighbours(this.intersection, !0), this.impactVerlet(this.intersection)), !isNaN(_SpeedController2.default.speedX) && !isNaN(_SpeedController2.default.speedY)) {
                    var newx = .05 * (3 * _SpeedController2.default.speedX / (POLY.gl.viewportWidth / POLY.GL.scale) - this.speedX),
                        newy = .05 * (2 * -_SpeedController2.default.speedY / (POLY.gl.viewportHeight / POLY.GL.scale) - this.speedY);
                    this.speedX += newx, this.speedY += newy, this.dragSpeed.x += .04 * (_SpeedController2.default.speedX / (POLY.gl.viewportWidth / POLY.GL.scale) - this.dragSpeed.x), this.dragSpeed.y += .04 * (_SpeedController2.default.speedY / (POLY.gl.viewportHeight / POLY.GL.scale) - this.dragSpeed.y)
                }
                this.easeSpeedWheel.x *= .3, this.easeSpeedWheel.y *= .3;
                var newWheelX = .3 * (this.easeSpeedWheel.x - this.speedWheel.x),
                    newWheelY = .3 * (this.easeSpeedWheel.y - this.speedWheel.y);
                newWheelX > .04 && (newWheelX = .04), newWheelX < -.04 && (newWheelX = -.04), newWheelY > .04 && (newWheelY = .04), newWheelY < -.04 && (newWheelY = -.04), this.speedWheel.x += newWheelX, this.speedWheel.y += newWheelY, this.speedX += this.speedWheel.x, this.speedY -= this.speedWheel.y, this.dragSpeed.x += this.speedWheel.x / 3, this.dragSpeed.y += this.speedWheel.y / 3, this.previousPos.x = this.pos.x, this.previousPos.y = this.pos.y;
                var nbColumns = this.gridQuadsWidth - 1,
                    nbLines = this.gridQuadsHeight - 1;
                this.activeQuad || this.menuActive || (this.cameraX += this.speedX, this.cameraY += this.speedY);
                for (var reappearLeft = !1, reappearRight = !1, reappearTop = !1, reappearBottom = !1, _y2 = 0; _y2 < this.gridQuadsHeight; _y2++)
                    for (var _x2 = 0; _x2 < this.gridQuadsWidth; _x2++) {
                        var index = this.getPointsQuadAtCoordinates(_x2, _y2),
                            pointquad = this.pointsQuad[index],
                            distY = Math.abs(this.intersection.y - pointquad.y),
                            distX = Math.abs(this.intersection.x - pointquad.x);
                        distY > 4 && (distY = 4);
                        var sx = 0;
                        if (this.dragSpeed.x && !isNaN(this.dragSpeed.x) && distX < 4) {
                            var s = this.dragSpeed.x;
                            s > 2 && (s = 2), s < -2 && (s = -2), sx = 15 * s * 2 * (1 - distY / 4) * (1 - distX / 4)
                        }
                        var distY2 = Math.abs(this.intersection.y - pointquad.y),
                            distX2 = Math.abs(this.intersection.x - pointquad.x);
                        distX2 > 3 && (distX2 = 3);
                        var sy = 0;
                        if (this.dragSpeed.y && !isNaN(this.dragSpeed.y) && distY2 < 4) {
                            var _s = -this.dragSpeed.y;
                            _s > 1 && (_s = 1), _s < -1 && (_s = -1), sy = 15 * _s * (1 - distY2 / 4) * (1 - distX2 / 3)
                        }
                        this.menuActive || pointquad.setSpeed(sx, sy), pointquad.x = (this.cameraX + pointquad.origin.x + pointquad.gridPos.x + pointquad.speedX) % (2 * Math.abs(this.limitMinX)), pointquad.y = (this.cameraY + pointquad.origin.y + pointquad.gridPos.y + pointquad.speedY) % (2 * Math.abs(this.limitMinY)), pointquad.y <= this.limitMinY ? reappearTop = !0 : pointquad.y > this.limitMinY + this.gridQuadsHeight && (reappearBottom = !0), pointquad.x - sx < this.limitMinX ? reappearRight = !0 : pointquad.x > this.limitMinX + this.gridQuadsWidth && (reappearLeft = !0), this.findNeighbours(pointquad), pointquad.render()
                    }
                if (reappearBottom) {
                    for (var i = 0; i < this.gridQuadsWidth; i++) {
                        var _pt2 = this.pointsQuad.pop();
                        _pt2.gridPos.y -= 2 * Math.abs(this.limitMinY) + this.restingDistances, this.pointsQuad.unshift(_pt2)
                    }
                    for (var xView = 0; xView < nbColumns; xView++) {
                        var quad = this.views.pop();
                        quad.skipRender = !0, this.views.splice(0, 0, quad)
                    }
                } else if (reappearTop) {
                    for (var i = 0; i < this.gridQuadsWidth; i++) {
                        var _pt3 = this.pointsQuad.shift();
                        _pt3.gridPos.y += 2 * Math.abs(this.limitMinY) + this.restingDistances, this.pointsQuad.push(_pt3)
                    }
                    for (var xView = 0; xView < nbColumns; xView++) {
                        var _quad = this.views.shift();
                        _quad.skipRender = !0, this.views.push(_quad)
                    }
                }
                if (reappearRight) {
                    for (var y = 0; y < this.gridQuadsHeight; y++) {
                        var indexPt = this.getPointsQuadAtCoordinates(0, y),
                            _pt4 = this.pointsQuad[indexPt];
                        _pt4.gridPos.x += 2 * Math.abs(this.limitMinX) + this.restingDistances, this.pointsQuad.splice(indexPt, 1), this.pointsQuad.splice(indexPt + this.gridQuadsWidth - 1, 0, _pt4)
                    }
                    for (var yView = 0; yView < nbLines; yView++) {
                        var _index = this.getViewAtCoordinates(0, yView),
                            _quad2 = this.views[_index];
                        _quad2.skipRender = !0, this.views.splice(_index, 1), this.views.splice(_index + this.gridQuadsWidth - 2, 0, _quad2)
                    }
                } else if (reappearLeft) {
                    for (var y = 0; y < this.gridQuadsHeight; y++) {
                        var _indexPt = this.getPointsQuadAtCoordinates(this.gridQuadsWidth - 1, y),
                            _pt5 = this.pointsQuad[_indexPt];
                        _pt5.gridPos.x -= 2 * Math.abs(this.limitMinX) + this.restingDistances, this.pointsQuad.splice(_indexPt, 1), this.pointsQuad.splice(_indexPt - this.gridQuadsWidth + 1, 0, _pt5)
                    }
                    for (var yView = 0; yView < nbLines; yView++) {
                        var _index2 = this.getViewAtCoordinates(nbColumns - 1, yView),
                            _quad3 = this.views[_index2];
                        _quad3.skipRender = !0, this.views.splice(_index2, 1), this.views.splice(_index2 - nbColumns + 1, 0, _quad3)
                    }
                }
                for (var y = 0; y < nbLines; y++)
                    for (var x = 0; x < nbColumns; x++) {
                        var pts = [];
                        pts.push(this.pointsQuad[this.getPointsQuadAtCoordinates(x, y)]), pts.push(this.pointsQuad[this.getPointsQuadAtCoordinates(x + 1, y)]), pts.push(this.pointsQuad[this.getPointsQuadAtCoordinates(x + 1, y + 1)]), pts.push(this.pointsQuad[this.getPointsQuadAtCoordinates(x, y + 1)]);
                        var indexView = (this.getPointsQuadAtCoordinates(x, y), this.getViewAtCoordinates(x, y)),
                            _quad4 = this.views[indexView];
                        _quad4.attachPointRef(pts);
                        var totalWidth = this.dataManager.size.width,
                            totalHeight = this.dataManager.size.height,
                            gridSize = 1,
                            xid = (-this.cameraX + _quad4.x - this.restingDistances / 2 + this.gridWidth / 2) / gridSize;
                        xid %= totalWidth, xid < 0 && (xid += totalWidth);
                        var yid = (-this.cameraY + _quad4.y - this.restingDistances / 2 + this.gridHeight / 2) / gridSize;
                        yid %= totalHeight, yid < 0 && (yid += totalHeight), xid = Math.floor(xid), yid = Math.floor(yid);
                        var data = this.dataManager.getDataAt(xid, yid);
                        if (!data) return;
                        _quad4.setData(data), _quad4.skipRender || _quad4.render(), _quad4.skipRender = !1
                    }
                if (!this.menuImpactVerlet)
                    for (var i = 0; i < this.pointsGrid.length; i++) this._isDown || (this.pointsGrid[i].accZ = 0), this.debug && this.pointsGrid[i].render()
            }, MainScene.prototype.resize = function() {
                this.camera.setAspectRatio(POLY.GL.aspectRatio)
            }, MainScene
        }();
    exports.default = MainScene, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj)
            for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _Poly = __webpack_require__(1),
        POLY = _interopRequireWildcard(_Poly),
        _ViewBg = __webpack_require__(16),
        _Physics = (_interopRequireDefault(_ViewBg), __webpack_require__(12)),
        _ViewPointMass = (_interopRequireDefault(_Physics), __webpack_require__(17)),
        _ViewPointQuad = (_interopRequireDefault(_ViewPointMass), __webpack_require__(18)),
        _ViewQuad = (_interopRequireDefault(_ViewPointQuad), __webpack_require__(19)),
        _glMatrix = (_interopRequireDefault(_ViewQuad), __webpack_require__(3)),
        _pointColor = __webpack_require__(11),
        _pointColor2 = _interopRequireDefault(_pointColor),
        target = _glMatrix.vec3.create(),
        getCursorPos = function(e) {
            return e.touches ? {
                x: e.touches[0].pageX,
                y: e.touches[0].pageY
            } : {
                x: e.clientX,
                y: e.clientY
            }
        },
        PointCollisionScene = function() {
            function PointCollisionScene() {
                _classCallCheck(this, PointCollisionScene), this.debug = !0, this.gl = null, this.tick = 0, this.gl = POLY.gl, this.objects = [], this.gridWidth = 3, this.gridHeight = 3, this.camera = new POLY.cameras.PerspectiveCamera, this.camera.perspective(45, POLY.GL.aspectRatio, .1, 100), this.orbitalControl = new POLY.control.OrbitalControl(this.camera.matrix, 1.4), POLY.GL.setCamera(this.camera), this.projectionMatrix = _glMatrix.mat4.create(), this._bPlanes = new POLY.helpers.BatchPlanes, this.pointsGrid = [], this.program = new POLY.Program(null, _pointColor2.default, {
                    color: {
                        type: "vec3",
                        value: [1, 1, 1]
                    }
                }), this.sphereIntersection = new POLY.geometry.Sphere(this.program), this.sphereIntersection.scale.set(.05), this.cubeTest = new POLY.geometry.Cube(this.program), this.cubeTest.scale.set(.05), this.cubeTest.rotation.x = Math.PI / 4, this.cubeTest.rotation.y = Math.PI / 4, this.rayCamera = new POLY.core.Ray, this.mouse = {
                    x: 0,
                    y: 0
                }, this.planeP1 = [0, 0, 0], this.planeP2 = [1, 1, 0], this.planeP3 = [0, -1, 0], this.createGridPoints(), this.addEvents(), this.cubeTests = [];
                for (var i = 0; i < 10; i++) {
                    var cubeTest = new POLY.geometry.Cube(this.program);
                    cubeTest.tickX = 100 * Math.random(), cubeTest.tickY = 100 * Math.random(), cubeTest.speedX = .2 * Math.random() + 1, cubeTest.speedY = .2 * Math.random() + 1, cubeTest.scale.set(.05), cubeTest.rotation.x = Math.PI / 4, cubeTest.rotation.y = Math.PI / 4, this.cubeTests.push(cubeTest)
                }
            }
            return PointCollisionScene.prototype.setColor = function(cube, r, g, b) {
                cube.program.bind(), cube.program.uniforms.color = [r, g, b]
            }, PointCollisionScene.prototype.onTraceRay = function() {
                this.rayCamera = this.camera.getRay([this.mouse.x, this.mouse.y, 1], this.rayCamera);
                var origin = this.orbitalControl._position,
                    direction = this.rayCamera.direction;
                _glMatrix.vec3.copy(target, direction), _glMatrix.vec3.scale(target, target, this.orbitalControl._radius), _glMatrix.vec3.add(target, target, origin);
                var intersection = this.findIntersection(origin, target);
                this.intersection = intersection
            }, PointCollisionScene.prototype.findIntersection = function(pt1, pt2) {
                var p1 = this.planeP1,
                    p2 = this.planeP2,
                    p3 = this.planeP3,
                    x0 = p1[0],
                    y0 = p1[1],
                    z0 = p1[2],
                    v1 = [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]],
                    v2 = [p3[0] - p2[0], p3[1] - p2[1], p3[2] - p2[2]],
                    abc = [v1[1] * v2[2] + v1[2] * v2[1], -(v1[0] * v2[2] + v1[2] * v2[0]), -(v1[0] * v2[1] + v1[1] * v2[0])],
                    t = (abc[0] * x0 + abc[1] * y0 + abc[2] * z0 - abc[0] * pt1[0] - abc[1] * pt1[1] - abc[2] * pt1[2]) / (abc[0] * (pt2[0] - pt1[0]) + abc[1] * (pt2[1] - pt1[1]) + abc[2] * (pt2[2] - pt1[2])),
                    newx = t * (pt2[0] - pt1[0]) + pt1[0],
                    newy = t * (pt2[1] - pt1[1]) + pt1[1],
                    newz = t * (pt2[2] - pt1[2]) + pt1[2];
                return this.sphereIntersection.position.set(newx, newy, newz), {
                    x: newx,
                    y: newy,
                    z: newz
                }
            }, PointCollisionScene.prototype.addEvents = function() {
                var _this = this;
                window.addEventListener("mousedown", function(e) {
                    return _this._onDown(e)
                }), window.addEventListener("mouseup", function() {
                    return _this._onUp()
                }), window.addEventListener("mousemove", function(e) {
                    return _this._onMove(e)
                }), window.addEventListener("touchstart", function(e) {
                    return _this._onDown(e)
                }), window.addEventListener("touchend", function() {
                    return _this._onUp()
                }), window.addEventListener("touchmove", function(e) {
                    return _this._onMove(e)
                }), window.addEventListener("keydown", function(e) {
                    return _this._onKeydown(e)
                })
            }, PointCollisionScene.prototype._onKeydown = function() {}, PointCollisionScene.prototype._onDown = function(e) {
                if (!this._isDown) {
                    this._isDown = !0;
                    var pt = getCursorPos(e);
                    pt.x / POLY.gl.viewportWidth * 2 - 1, 2 * -(pt.y / POLY.gl.viewportHeight) + 1
                }
            }, PointCollisionScene.prototype._onMove = function(e) {
                var pt = getCursorPos(e),
                    x = pt.x / POLY.gl.viewportWidth * 2 - 1,
                    y = 2 * -(pt.y / POLY.gl.viewportHeight) + 1;
                this.mouse.x = x, this.mouse.y = y, this.onTraceRay()
            }, PointCollisionScene.prototype._onUp = function(e) {
                this._isDown = !1
            }, PointCollisionScene.prototype.createGridPoints = function() {
                for (var y = 0; y < 3; y++)
                    for (var x = 0; x < 3; x++) {
                        var program = new POLY.Program(null, _pointColor2.default, {
                                color: {
                                    type: "vec3",
                                    value: [1, 1, 1]
                                }
                            }),
                            p = new POLY.geometry.Cube(program);
                        p.program = program, p.position.set(-1 + x + .5 * Math.random() - .25, -1 + y, Math.random() * -2), p.scale.set(.05), this.pointsGrid.push(p)
                    }
            }, PointCollisionScene.prototype.getPointsAtCoordinates = function(x, y) {
                var index = x + 3 * y;
                return index
            }, PointCollisionScene.prototype.getCenterPoint = function(p1, p2) {
                var x = p1.x + (p2.x - p1.x) / 2,
                    y = p1.y + (p2.y - p1.y) / 2,
                    z = p1.z + (p2.z - p1.z) / 2;
                return {
                    x: x,
                    y: y,
                    z: z
                }
            }, PointCollisionScene.prototype.getCentroid = function(triangle, debug) {
                var x = (triangle[0].x + triangle[1].x + triangle[2].x) / 3,
                    y = (triangle[0].y + triangle[1].y + triangle[2].y) / 3,
                    z = (triangle[0].z + triangle[1].z + triangle[2].z) / 3;
                return {
                    x: x,
                    y: y,
                    z: z
                }
            }, PointCollisionScene.prototype.findCentroid = function(points) {
                var tri1 = [points[0].p.position, points[1].p.position, points[3].p.position],
                    centroid1 = this.getCentroid(tri1),
                    tri2 = [points[0].p.position, points[2].p.position, points[3].p.position],
                    centroid2 = this.getCentroid(tri2, !0),
                    tri3 = (points[1].p.position, points[2].p.position, [points[1].p.position, points[0].p.position, points[2].p.position]),
                    centroid3 = this.getCentroid(tri3),
                    tri4 = [points[1].p.position, points[3].p.position, points[2].p.position],
                    centroid4 = this.getCentroid(tri4);
                this.objects = [];
                var c1c2 = {
                        x: centroid2.x - centroid1.x,
                        y: centroid2.y - centroid1.y,
                        z: centroid2.z - centroid1.z
                    },
                    c3c4 = {
                        x: centroid4.x - centroid3.x,
                        y: centroid4.y - centroid3.y,
                        z: centroid4.z - centroid3.z
                    },
                    k2 = (centroid3.x / c1c2.x - centroid1.x / c1c2.x - centroid3.y / c1c2.y + centroid1.y / c1c2.y) / (c3c4.x / c1c2.x - c3c4.y / c1c2.y),
                    k = (c3c4.y * k2 - centroid3.y + centroid1.y) / c1c2.y,
                    ptIntersection = (c1c2.z * k - centroid1.z, c3c4.z * k2 - centroid3.z, {
                        x: -(c1c2.x * k - centroid1.x),
                        y: -(c1c2.y * k - centroid1.y),
                        z: -(c1c2.z * k - centroid1.z)
                    });
                this.objects = [];
                var c5 = new POLY.geometry.Cube(this.program);
                return c5.position.set(ptIntersection.x, ptIntersection.y, ptIntersection.z), c5.scale.set(.05), this.objects.push(c5), ptIntersection
            }, PointCollisionScene.prototype.findNeighbours = function(p1, debug) {
                function ptInTriangle(p, p0, p1, p2) {
                    var A = .5 * (-p1.y * p2.x + p0.y * (-p1.x + p2.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y),
                        sign = A < 0 ? -1 : 1,
                        s = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y) * sign,
                        t = (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y) * sign;
                    return s > 0 && t > 0 && s + t < 2 * A * sign
                }
                for (var i = 0; i < this.pointsGrid.length; i++);
                for (var points = [], x = 0; x < this.gridWidth - 1; x++)
                    for (var y = 0; y < this.gridHeight - 1; y++) {
                        var indexBL = this.getPointsAtCoordinates(x, y),
                            indexBR = this.getPointsAtCoordinates(x + 1, y),
                            indexTR = this.getPointsAtCoordinates(x + 1, y + 1),
                            indexTL = this.getPointsAtCoordinates(x, y + 1),
                            pBL = this.pointsGrid[indexBL],
                            pBR = this.pointsGrid[indexBR],
                            pTR = this.pointsGrid[indexTR],
                            pTL = this.pointsGrid[indexTL],
                            inTriangle1 = ptInTriangle(p1, pTL.position, pTR.position, pBR.position),
                            inTriangle2 = ptInTriangle(p1, pBL.position, pTL.position, pBR.position);
                        if (inTriangle1 || inTriangle2) {
                            points.push({
                                p: pTL
                            }), points.push({
                                p: pTR
                            }), points.push({
                                p: pBL
                            }), points.push({
                                p: pBR
                            });
                            break
                        }
                    }
                if (0 !== points.length) {
                    this.setColor(points[0].p, 1, 1, 1), this.setColor(points[1].p, 1, 1, 1), this.setColor(points[2].p, 1, 1, 1), this.setColor(points[3].p, 1, 1, 1);
                    var ptIntersection = void 0;
                    points.length > 3 && (ptIntersection = this.findCentroid(points));
                    for (var pointsTop = [], pointsBottom = [], pointsOrdered = [], i = 0; i < points.length; i++) points[i].p.position.y > ptIntersection.y ? pointsTop.push(points[i]) : pointsBottom.push(points[i]);
                    pointsTop[0].p.position.x < pointsTop[1].p.position.x ? (pointsOrdered[0] = pointsTop[0], pointsOrdered[1] = pointsTop[1]) : (pointsOrdered[1] = pointsTop[0], pointsOrdered[0] = pointsTop[1]), pointsBottom[0].p.position.x < pointsBottom[1].p.position.x ? (pointsOrdered[3] = pointsBottom[0], pointsOrdered[2] = pointsBottom[1]) : (pointsOrdered[2] = pointsBottom[0], pointsOrdered[3] = pointsBottom[1]);
                    var p1x = p1.position ? p1.position.x : p1.x,
                        p1y = p1.position ? p1.position.y : p1.y;
                    if (p1x > ptIntersection.x) {
                        if (p1y > ptIntersection.y) {
                            var _inTriangle = ptInTriangle(p1, ptIntersection, pointsOrdered[0].p.position, pointsOrdered[1].p.position);
                            if (_inTriangle) points[0] = pointsOrdered[0], points[1] = pointsOrdered[1];
                            else {
                                ptInTriangle(p1, ptIntersection, pointsOrdered[1].p.position, pointsOrdered[2].p.position);
                                points[0] = pointsOrdered[1], points[1] = pointsOrdered[2]
                            }
                            this.setColor(points[0].p, 1, 0, 0),
                                this.setColor(points[1].p, 0, 1, 0)
                        } else if (p1y < ptIntersection.y) {
                            var _inTriangle3 = ptInTriangle(p1, ptIntersection, pointsOrdered[1].p.position, pointsOrdered[2].p.position);
                            if (_inTriangle3) points[0] = pointsOrdered[1], points[1] = pointsOrdered[2];
                            else {
                                ptInTriangle(p1, ptIntersection, pointsOrdered[2].p.position, pointsOrdered[3].p.position);
                                points[0] = pointsOrdered[2], points[1] = pointsOrdered[3]
                            }
                        }
                    } else if (p1x < ptIntersection.x)
                        if (p1y > ptIntersection.y) {
                            var _inTriangle5 = ptInTriangle(p1, ptIntersection, pointsOrdered[0].p.position, pointsOrdered[3].p.position);
                            if (_inTriangle5) points[0] = pointsOrdered[0], points[1] = pointsOrdered[3];
                            else {
                                ptInTriangle(p1, ptIntersection, pointsOrdered[0].p.position, pointsOrdered[1].p.position);
                                points[0] = pointsOrdered[0], points[1] = pointsOrdered[1]
                            }
                        } else if (p1y < ptIntersection.y) {
                        var _inTriangle7 = ptInTriangle(p1, ptIntersection, pointsOrdered[0].p.position, pointsOrdered[3].p.position);
                        if (_inTriangle7) points[0] = pointsOrdered[0], points[1] = pointsOrdered[3];
                        else {
                            ptInTriangle(p1, ptIntersection, pointsOrdered[3].p.position, pointsOrdered[2].p.position);
                            points[0] = pointsOrdered[3], points[1] = pointsOrdered[2]
                        }
                    }
                    if (this.setColor(points[0].p, 1, 0, 0), this.setColor(points[1].p, 0, 1, 0), points.length >= 3) {
                        var p1P = points[0].p,
                            p2P = points[1].p,
                            p3P = ptIntersection,
                            x0 = p2P.position.x,
                            y0 = p2P.position.y,
                            z0 = p2P.position.z,
                            _x = p1.position ? p1.position.x : p1.x,
                            _y = p1.position ? p1.position.y : p1.y,
                            v1 = [p2P.position.x - p1P.position.x, p2P.position.y - p1P.position.y, p2P.position.z - p1P.position.z],
                            v2 = [p3P.x - p2P.position.x, p3P.y - p2P.position.y, p3P.z - p2P.position.z],
                            abc = _glMatrix.vec3.create();
                        _glMatrix.vec3.cross(abc, v1, v2), _glMatrix.vec3.normalize(abc, abc);
                        var z = (abc[0] * x0 + abc[1] * y0 + abc[2] * z0 - abc[0] * _x - abc[1] * _y) / abc[2];
                        p1.position ? p1.position.z = z : p1.z = z, p1.setZ && p1.setZ(z)
                    }
                }
            }, PointCollisionScene.prototype.render = function() {
                this.intersection && this.findNeighbours(this.intersection, !0), this.orbitalControl.update(), this._bPlanes.draw(), this.program.bind(), this.cubeTest.position.x = this.sphereIntersection.position.x, this.cubeTest.position.y = this.sphereIntersection.position.y, POLY.GL.draw(this.cubeTest);
                for (var i = 0; i < this.objects.length; i++) POLY.GL.draw(this.objects[i]);
                for (var i = 0; i < this.pointsGrid.length; i++) this.pointsGrid[i].program.bind(), POLY.GL.draw(this.pointsGrid[i])
            }, PointCollisionScene.prototype.resize = function() {
                this.camera.setAspectRatio(POLY.GL.aspectRatio)
            }, PointCollisionScene
        }();
    exports.default = PointCollisionScene, module.exports = exports.default
}, function(module, exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var Cache = function() {
        function Cache() {
            _classCallCheck(this, Cache), this._json = {}, this._text = {}
        }
        return Cache.prototype.addJson = function(json, id) {
            this._json[id] = json
        }, Cache.prototype.getJson = function(id) {
            return this._json[id] ? this._json[id] : null
        }, Cache
    }();
    exports.default = Cache, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj)
            for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _Poly = __webpack_require__(1),
        POLY = _interopRequireWildcard(_Poly),
        countTween = 0,
        Easings = function() {
            function Easings() {
                _classCallCheck(this, Easings), this.updating = !1, this.iterationCount = 0, this.loop = POLY.utils.loop, this.loop.add(this.update.bind(this), this), this.tweens = []
            }
            return Easings.prototype.killTweensOf = function(obj) {
                for (var i = 0; i < this.tweens.length; i++) {
                    var t = this.tweens[i];
                    t.obj === obj && t.obj.id === obj.id && (t = null, this.tweens.splice(i, 1), i--)
                }
            }, Easings.prototype.to = function(obj, duration, vars, test) {
                countTween++;
                var tween = {
                    delete: !1,
                    currentIteration: 0,
                    isArray: !1,
                    obj: obj,
                    vars: vars,
                    delay: 60 * vars.delay || 0,
                    isDelayed: !!(vars.delay && vars.delay > 0),
                    duration: 60 * duration,
                    ease: vars.ease || this.easeLinear
                };
                if (obj instanceof Array) {
                    tween.isArray = !0;
                    var varToTween = [];
                    for (var v in vars)
                        if ("delay" !== v && "duration" !== v && !this.isFunction(vars[v])) {
                            for (var object = {
                                    var: v,
                                    toValue: vars[v]
                                }, values = [], i = 0; i < obj.length; i++) values.push(obj[i]);
                            object.value = values, varToTween.push(object)
                        }
                } else {
                    varToTween = [];
                    for (v in vars)
                        if ("delay" !== v && "duration" !== v && !this.isFunction(vars[v]) && "forceTween" !== v) {
                            for (i = 0; i < this.tweens.length; i++) {
                                var t = this.tweens[i];
                                if (t.obj === obj)
                                    for (var k = 0; k < t.props.length; k++) {
                                        var variableToTween = t.props[k];
                                        variableToTween.var !== v || 0 !== tween.delay && !tween.vars.forceTween || (t.delete = !0, this.tweens.splice(i, 1), i--)
                                    }
                            }
                            varToTween.push({
                                var: v,
                                value: obj[v],
                                toValue: vars[v]
                            })
                        }
                }
                return tween.props = varToTween, tween.id = countTween, this.tweens.push(tween), this.updating || (this.updating = !0), countTween
            }, Easings.prototype.killTweensWithId = function(id) {
                for (var i = 0; i < this.tweens.length; i++) {
                    var t = this.tweens[i];
                    if (t.id === id) {
                        t = null, this.tweens.splice(i, 1), i--;
                        break
                    }
                }
            }, Easings.prototype.isFunction = function(obj) {
                return !!(obj && obj.constructor && obj.call && obj.apply)
            }, Easings.prototype.updateArray = function(tween) {
                var o = tween;
                if (o.delay > 0) o.delay--;
                else {
                    for (var i = 0; i < o.obj.length; i++) {
                        o.obj[i];
                        o.obj[i] = o.ease(o.currentIteration, o.props[0].value[i], o.props[0].toValue[i] - o.props[0].value[i], o.duration)
                    }
                    o.currentIteration++, o.currentIteration > o.duration && (o.vars.onComplete && o.vars.onComplete(), o.delete = !0)
                }
            }, Easings.prototype.update = function() {
                if (this.updating) {
                    for (var i = 0; i < this.tweens.length; i++) {
                        var o = this.tweens[i];
                        if (o.isArray) this.updateArray(o);
                        else if (o.isDelayed) {
                            if (o.delay > 0) o.delay -= 1;
                            else if (o.delay <= 0) {
                                o.isDelayed && o.vars.onStart && o.vars.onStart(o.vars.onStartParams), o.isDelayed = !1;
                                for (var k = 0; k < o.props.length; k++) {
                                    var e = o.props[k];
                                    e.value = o.obj[e.var]
                                }
                            }
                        } else {
                            for (k = 0; k < o.props.length; k++) e = o.props[k], o.obj[e.var] = o.ease(o.currentIteration, e.value, e.toValue - e.value, o.duration);
                            o.vars.onUpdate && o.vars.onUpdate(o.vars.onUpdateParams, o.currentIteration / o.duration), o.currentIteration += 1, o.currentIteration > o.duration && (o.vars.onComplete && o.vars.onComplete(o.vars.onCompleteParams), o.delete = !0)
                        }
                    }
                    for (i = 0; i < this.tweens.length; i++) o = this.tweens[i], o.delete && (o = null, this.tweens.splice(i, 1), i--);
                    0 === this.tweens.length && (this.updating = !1)
                }
            }, Easings.prototype.pause = function() {
                this.updating = !1
            }, Easings.prototype.resume = function() {
                this.updating = !0
            }, Easings.prototype.easeLinear = function(t, b, c, d) {
                return t /= d, c * t + b
            }, Easings.prototype.easeInSine = function(t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
            }, Easings.prototype.easeOutSine = function(t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b
            }, Easings.prototype.easeOutSine2 = function(t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) * .5 + b
            }, Easings.prototype.easeInExpo = function(t, b, c, d) {
                return c * Math.pow(2, 10 * (t / d - 1)) + b
            }, Easings.prototype.elasticOutSoft = function(t, b, c, d) {
                var s = 1.0158,
                    p = 0,
                    a = c;
                return 0 == t ? b : 1 == (t /= d) ? b + c : (p || (p = .3 * d), a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a), a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b)
            }, Easings.prototype.easeOutBack = function(t, b, c, d) {
                var s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
            }, Easings.prototype.easeOutBackSoft = function(t, b, c, d) {
                var s = 1.30158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
            }, Easings.prototype.elasticOut = function(t, b, c, d) {
                var s = 1.70158,
                    p = 0,
                    a = c;
                return 0 == t ? b : 1 == (t /= d) ? b + c : (p || (p = .3 * d), a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a), a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b)
            }, Easings.prototype.easeInCubic = function(t, b, c, d) {
                return t /= d, c * t * t * t + b
            }, Easings.prototype.easeOutCubic = function(t, b, c, d) {
                return t /= d, t--, c * (t * t * t + 1) + b
            }, Easings.prototype.easeInOutSine = function(t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
            }, Easings.prototype.easeInBack = function(x, t, b, c, d, s) {
                return void 0 == s && (s = 1.70158), c * (t /= d) * t * ((s + 1) * t - s) + b
            }, Easings.prototype.easeOutExpo = function(t, b, c, d) {
                return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
            }, Easings.prototype.easeInOutExpo = function(t, b, c, d) {
                return t /= d / 2, t < 1 ? c / 2 * Math.pow(2, 10 * (t - 1)) + b : (t--, c / 2 * (-Math.pow(2, -10 * t) + 2) + b)
            }, Easings.prototype.easeInOutQuint = function(t, b, c, d) {
                return t /= d / 2, t < 1 ? c / 2 * t * t * t * t * t + b : (t -= 2, c / 2 * (t * t * t * t * t + 2) + b)
            }, Easings.prototype.easeInOutCirc = function(t, b, c, d) {
                return t /= d / 2, t < 1 ? -c / 2 * (Math.sqrt(1 - t * t) - 1) + b : (t -= 2, c / 2 * (Math.sqrt(1 - t * t) + 1) + b)
            }, Easings.prototype.easeInCirc = function(t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
            }, Easings.prototype.easeOutCirc = function(t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
            }, Easings
        }();
    exports.default = Easings, Easings.instance = new Easings, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    exports.__esModule = !0;
    var _signals = __webpack_require__(10),
        _signals2 = _interopRequireDefault(_signals),
        _path = __webpack_require__(45),
        _path2 = _interopRequireDefault(_path),
        _Cache = __webpack_require__(35),
        _Cache2 = _interopRequireDefault(_Cache),
        _resourceLoader = __webpack_require__(75),
        _resourceLoader2 = _interopRequireDefault(_resourceLoader),
        _fontfaceobserver = __webpack_require__(43),
        _fontfaceobserver2 = _interopRequireDefault(_fontfaceobserver),
        Loader = function() {
            function Loader() {
                _classCallCheck(this, Loader), this.crossdomain = !1, this.assetsToLoad = [], window.XDomainRequest && this.crossdomain ? (this.ajaxRequest = new window.XDomainRequest, this.ajaxRequest.timeout = 3e3, this.ajaxRequest.onerror = function() {}, this.ajaxRequest.ontimeout = function() {}, this.ajaxRequest.onprogress = function() {}) : window.XMLHttpRequest && (this.ajaxRequest = new window.XMLHttpRequest), this.ajaxRequest.onload = this._onFileLoaded.bind(this), this.ajaxRequest.onreadystatechange = function(e) {}, this.fileCount = 0, this.filesToLoad = [], this.fontsToLoad = [], this.soundsToLoad = [], this.customToLoad = [], this.onComplete = new _signals2.default, this.onProgress = new _signals2.default
            }
            return Loader.prototype.addFonts = function(fonts) {
                return this.fontsToLoad = this.fontsToLoad.concat(fonts), this
            }, Loader.prototype.addJson = function(url, id) {
                var id = id || _path2.default.basename(url, _path2.default.extname(url)),
                    fileData = {
                        url: url,
                        id: id,
                        type: Loader.JSON
                    };
                return this.filesToLoad.push(fileData), this
            }, Loader.prototype.addAssets = function(assets) {
                return this.assetsToLoad = this.assetsToLoad.concat(assets), this
            }, Loader.prototype.addCSS = function(url) {
                var link = document.createElement("link");
                return link.type = "text/css", link.rel = "stylesheet", link.href = url, document.getElementsByTagName("head")[0].appendChild(link), this
            }, Loader.prototype.load = function() {
                this._loadFonts()
            }, Loader.prototype._loadFiles = function() {
                this.fileCount = 0, this.filesToLoad.length ? this._loadNextFile() : this._loadAssets()
            }, Loader.prototype._loadNextFile = function() {
                var fileData = this.filesToLoad[this.fileCount];
                fileData.type === Loader.CUSTOM ? (fileData.object.onLoaded.addOnce(this._onFileLoaded, this), fileData.object.load()) : (this.ajaxRequest.open("GET", fileData.url, !0), this.ajaxRequest.send())
            }, Loader.prototype._onFileLoaded = function() {
                var fileData = this.filesToLoad[this.fileCount];
                if (fileData.type === Loader.CUSTOM);
                else if (0 === this.ajaxRequest.status || 200 === this.ajaxRequest.status) switch (fileData.type) {
                    case Loader.TEXT:
                        var text = this.ajaxRequest.responseText;
                        _Cache2.default.addText(text, fileData.id);
                        break;
                    case Loader.JSON:
                        var jsonObject = JSON.parse(this.ajaxRequest.responseText);
                        _Cache2.default.addJson(jsonObject, fileData.id)
                }
                this.fileCount++, this._onProgress(), this.fileCount === this.filesToLoad.length ? this._loadAssets() : this._loadNextFile()
            }, Loader.prototype._getFonts = function(fonts) {
                for (var a = [], i = 0; i < fonts.length; i++) a.push(fonts[i].load());
                return a
            }, Loader.prototype._loadFonts = function() {
                var _this = this;
                if (0 === this.fontsToLoad.length) return void this._loadFiles();
                for (var fonts = [], i = 0; i < this.fontsToLoad.length; i++) {
                    var f = new _fontfaceobserver2.default(this.fontsToLoad[i]);
                    fonts.push(f)
                }
                Promise.all(this._getFonts(fonts)).then(function(fonts) {
                    _this._loadFiles()
                }, function() {
                    _this._loadFiles()
                })
            }, Loader.prototype.addManifest = function(manifest, prefix) {
                var assetsManifest = manifest.map(function(path) {
                    return prefix + path
                });
                return this.addAssets(assetsManifest), this
            }, Loader.prototype._loadAssets = function() {
                return 0 === this.assetsToLoad.length ? void this._onComplete() : (this.assetLoader = new _resourceLoader2.default, this.assetLoader.add(this.assetsToLoad), this.assetLoader.on("progress", this._onProgress, this), void this.assetLoader.load(this._onComplete.bind(this)))
            }, Loader.prototype._onComplete = function(l, r) {
                this.onProgress.dispatch(1), this.onComplete.dispatch(r)
            }, Loader.prototype._onProgress = function() {
                var loaded = (this.filesToLoad.length + this.assetsToLoad.length, this.fileCount);
                this.assetLoader && (loaded = this.assetLoader.progress), this.onProgress.dispatch(.01 * loaded)
            }, Loader
        }();
    Loader.TEXT = 0, Loader.JSON = 1, Loader.CUSTOM = 2, exports.default = Loader, module.exports = exports.default
}, function(module, exports) {
    "use strict";
    exports.__esModule = !0;
    var Math2 = {};
    Math2.map = function(val, inputMin, inputMax, outputMin, outputMax) {
        return (outputMax - outputMin) * ((val - inputMin) / (inputMax - inputMin)) + outputMin
    }, Math2.intersectionLinePlane = function(line, plane) {
        var pt1 = line[0],
            pt2 = line[1],
            p1 = plane[0],
            p2 = plane[1],
            p3 = plane[2],
            x0 = p1[0],
            y0 = p1[1],
            z0 = p1[2],
            v1 = [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]],
            v2 = [p3[0] - p2[0], p3[1] - p2[1], p3[2] - p2[2]],
            abc = [v1[1] * v2[2] + v1[2] * v2[1], -(v1[0] * v2[2] + v1[2] * v2[0]), -(v1[0] * v2[1] + v1[1] * v2[0])],
            t = (abc[0] * x0 + abc[1] * y0 + abc[2] * z0 - abc[0] * pt1[0] - abc[1] * pt1[1] - abc[2] * pt1[2]) / (abc[0] * (pt2[0] - pt1[0]) + abc[1] * (pt2[1] - pt1[1]) + abc[2] * (pt2[2] - pt1[2])),
            newx = t * (pt2[0] - pt1[0]) + pt1[0],
            newy = t * (pt2[1] - pt1[1]) + pt1[1],
            newz = t * (pt2[2] - pt1[2]) + pt1[2];
        return {
            x: newx,
            y: newy,
            z: newz
        }
    }, Math2.cross = function(v1, v2) {
        return [v1[1] * v2[2] - v2[1] * v1[2], -(v1[0] * v2[2] - v1[2] * v2[0]), v1[0] * v2[1] - v1[1] * v2[0]]
    }, Math2.getCentroid = function(triangle) {
        var x = (triangle[0].x + triangle[1].x + triangle[2].x) / 3,
            y = (triangle[0].y + triangle[1].y + triangle[2].y) / 3,
            z = (triangle[0].z + triangle[1].z + triangle[2].z) / 3;
        return {
            x: x,
            y: y,
            z: z
        }
    }, Math2.findCentroid = function(points) {
        var tri1 = [points[0], points[1], points[3]],
            centroid1 = Math2.getCentroid(tri1),
            tri2 = [points[0], points[2], points[3]],
            centroid2 = Math2.getCentroid(tri2, !0),
            tri3 = [points[1], points[0], points[2]],
            centroid3 = Math2.getCentroid(tri3),
            tri4 = [points[1], points[3], points[2]],
            centroid4 = Math2.getCentroid(tri4),
            c1c2 = {
                x: centroid2.x - centroid1.x,
                y: centroid2.y - centroid1.y,
                z: centroid2.z - centroid1.z
            },
            c3c4 = {
                x: centroid4.x - centroid3.x,
                y: centroid4.y - centroid3.y,
                z: centroid4.z - centroid3.z
            },
            k2 = (centroid3.x / c1c2.x - centroid1.x / c1c2.x - centroid3.y / c1c2.y + centroid1.y / c1c2.y) / (c3c4.x / c1c2.x - c3c4.y / c1c2.y),
            k = (c3c4.y * k2 - centroid3.y + centroid1.y) / c1c2.y,
            centroid = (c1c2.z * k - centroid1.z, c3c4.z * k2 - centroid3.z, {
                x: -(c1c2.x * k - centroid1.x),
                y: -(c1c2.y * k - centroid1.y),
                z: -(c1c2.z * k - centroid1.z)
            });
        return centroid
    }, Math2.isPointInTriangle = function(p, p0, p1, p2) {
        var A = .5 * (-p1.y * p2.x + p0.y * (-p1.x + p2.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y),
            sign = A < 0 ? -1 : 1,
            s = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y) * sign,
            t = (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y) * sign;
        return s > 0 && t > 0 && s + t < 2 * A * sign
    }, Math2.smallestAngle = function(angle, targetAngle) {
        angle %= 2 * Math.PI, angle < 0 && (angle += 2 * Math.PI);
        var difference1 = targetAngle - angle,
            difference2 = targetAngle + 2 * Math.PI - angle,
            difference3 = targetAngle - 2 * Math.PI - angle,
            absDifference1 = Math.abs(difference1),
            absDifference2 = Math.abs(difference2),
            absDifference3 = Math.abs(difference3),
            difference = difference1;
        return absDifference2 < absDifference1 && absDifference2 < absDifference3 ? difference = difference2 : absDifference3 < absDifference1 && absDifference3 < absDifference2 && (difference = difference3), difference
    }, exports.default = Math2, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }
    exports.__esModule = !0, exports.Loader = void 0;
    var _Loader = __webpack_require__(37),
        _Loader2 = _interopRequireDefault(_Loader);
    exports.Loader = _Loader2.default
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(42), module.exports.color = __webpack_require__(41)
}, function(module, exports) {
    var dat = module.exports = dat || {};
    dat.color = dat.color || {}, dat.utils = dat.utils || {}, dat.utils.common = function() {
        var ARR_EACH = Array.prototype.forEach,
            ARR_SLICE = Array.prototype.slice;
        return {
            BREAK: {},
            extend: function(target) {
                return this.each(ARR_SLICE.call(arguments, 1), function(obj) {
                    for (var key in obj) this.isUndefined(obj[key]) || (target[key] = obj[key])
                }, this), target
            },
            defaults: function(target) {
                return this.each(ARR_SLICE.call(arguments, 1), function(obj) {
                    for (var key in obj) this.isUndefined(target[key]) && (target[key] = obj[key])
                }, this), target
            },
            compose: function() {
                var toCall = ARR_SLICE.call(arguments);
                return function() {
                    for (var args = ARR_SLICE.call(arguments), i = toCall.length - 1; i >= 0; i--) args = [toCall[i].apply(this, args)];
                    return args[0]
                }
            },
            each: function(obj, itr, scope) {
                if (ARR_EACH && obj.forEach === ARR_EACH) obj.forEach(itr, scope);
                else if (obj.length === obj.length + 0) {
                    for (var key = 0, l = obj.length; key < l; key++)
                        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) return
                } else
                    for (var key in obj)
                        if (itr.call(scope, obj[key], key) === this.BREAK) return
            },
            defer: function(fnc) {
                setTimeout(fnc, 0)
            },
            toArray: function(obj) {
                return obj.toArray ? obj.toArray() : ARR_SLICE.call(obj)
            },
            isUndefined: function(obj) {
                return void 0 === obj
            },
            isNull: function(obj) {
                return null === obj
            },
            isNaN: function(obj) {
                return obj !== obj
            },
            isArray: Array.isArray || function(obj) {
                return obj.constructor === Array
            },
            isObject: function(obj) {
                return obj === Object(obj)
            },
            isNumber: function(obj) {
                return obj === obj + 0
            },
            isString: function(obj) {
                return obj === obj + ""
            },
            isBoolean: function(obj) {
                return obj === !1 || obj === !0
            },
            isFunction: function(obj) {
                return "[object Function]" === Object.prototype.toString.call(obj)
            }
        }
    }(), dat.color.toString = function(common) {
        return function(color) {
            if (1 == color.a || common.isUndefined(color.a)) {
                for (var s = color.hex.toString(16); s.length < 6;) s = "0" + s;
                return "#" + s
            }
            return "rgba(" + Math.round(color.r) + "," + Math.round(color.g) + "," + Math.round(color.b) + "," + color.a + ")"
        }
    }(dat.utils.common), dat.Color = dat.color.Color = function(interpret, math, toString, common) {
        function defineRGBComponent(target, component, componentHexIndex) {
            Object.defineProperty(target, component, {
                get: function() {
                    return "RGB" === this.__state.space ? this.__state[component] : (recalculateRGB(this, component, componentHexIndex), this.__state[component])
                },
                set: function(v) {
                    "RGB" !== this.__state.space && (recalculateRGB(this, component, componentHexIndex), this.__state.space = "RGB"), this.__state[component] = v
                }
            })
        }

        function defineHSVComponent(target, component) {
            Object.defineProperty(target, component, {
                get: function() {
                    return "HSV" === this.__state.space ? this.__state[component] : (recalculateHSV(this), this.__state[component])
                },
                set: function(v) {
                    "HSV" !== this.__state.space && (recalculateHSV(this), this.__state.space = "HSV"), this.__state[component] = v
                }
            })
        }

        function recalculateRGB(color, component, componentHexIndex) {
            if ("HEX" === color.__state.space) color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);
            else {
                if ("HSV" !== color.__state.space) throw "Corrupted color state";
                common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v))
            }
        }

        function recalculateHSV(color) {
            var result = math.rgb_to_hsv(color.r, color.g, color.b);
            common.extend(color.__state, {
                s: result.s,
                v: result.v
            }), common.isNaN(result.h) ? common.isUndefined(color.__state.h) && (color.__state.h = 0) : color.__state.h = result.h
        }
        var Color = function() {
            if (this.__state = interpret.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
            this.__state.a = this.__state.a || 1
        };
        return Color.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], common.extend(Color.prototype, {
            toString: function() {
                return toString(this)
            },
            toOriginal: function() {
                return this.__state.conversion.write(this)
            }
        }), defineRGBComponent(Color.prototype, "r", 2), defineRGBComponent(Color.prototype, "g", 1), defineRGBComponent(Color.prototype, "b", 0), defineHSVComponent(Color.prototype, "h"), defineHSVComponent(Color.prototype, "s"), defineHSVComponent(Color.prototype, "v"), Object.defineProperty(Color.prototype, "a", {
            get: function() {
                return this.__state.a
            },
            set: function(v) {
                this.__state.a = v
            }
        }), Object.defineProperty(Color.prototype, "hex", {
            get: function() {
                return "HEX" !== !this.__state.space && (this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
            },
            set: function(v) {
                this.__state.space = "HEX", this.__state.hex = v
            }
        }), Color
    }(dat.color.interpret = function(toString, common) {
        var result, toReturn, interpret = function() {
                toReturn = !1;
                var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];
                return common.each(INTERPRETATIONS, function(family) {
                    if (family.litmus(original)) return common.each(family.conversions, function(conversion, conversionName) {
                        if (result = conversion.read(original), toReturn === !1 && result !== !1) return toReturn = result, result.conversionName = conversionName, result.conversion = conversion, common.BREAK
                    }), common.BREAK
                }), toReturn
            },
            INTERPRETATIONS = [{
                litmus: common.isString,
                conversions: {
                    THREE_CHAR_HEX: {
                        read: function(original) {
                            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                            return null !== test && {
                                space: "HEX",
                                hex: parseInt("0x" + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString())
                            }
                        },
                        write: toString
                    },
                    SIX_CHAR_HEX: {
                        read: function(original) {
                            var test = original.match(/^#([A-F0-9]{6})$/i);
                            return null !== test && {
                                space: "HEX",
                                hex: parseInt("0x" + test[1].toString())
                            }
                        },
                        write: toString
                    },
                    CSS_RGB: {
                        read: function(original) {
                            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== test && {
                                space: "RGB",
                                r: parseFloat(test[1]),
                                g: parseFloat(test[2]),
                                b: parseFloat(test[3])
                            }
                        },
                        write: toString
                    },
                    CSS_RGBA: {
                        read: function(original) {
                            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                            return null !== test && {
                                space: "RGB",
                                r: parseFloat(test[1]),
                                g: parseFloat(test[2]),
                                b: parseFloat(test[3]),
                                a: parseFloat(test[4])
                            }
                        },
                        write: toString
                    }
                }
            }, {
                litmus: common.isNumber,
                conversions: {
                    HEX: {
                        read: function(original) {
                            return {
                                space: "HEX",
                                hex: original,
                                conversionName: "HEX"
                            }
                        },
                        write: function(color) {
                            return color.hex
                        }
                    }
                }
            }, {
                litmus: common.isArray,
                conversions: {
                    RGB_ARRAY: {
                        read: function(original) {
                            return 3 == original.length && {
                                space: "RGB",
                                r: original[0],
                                g: original[1],
                                b: original[2]
                            }
                        },
                        write: function(color) {
                            return [color.r, color.g, color.b]
                        }
                    },
                    RGBA_ARRAY: {
                        read: function(original) {
                            return 4 == original.length && {
                                space: "RGB",
                                r: original[0],
                                g: original[1],
                                b: original[2],
                                a: original[3]
                            }
                        },
                        write: function(color) {
                            return [color.r, color.g, color.b, color.a]
                        }
                    }
                }
            }, {
                litmus: common.isObject,
                conversions: {
                    RGBA_OBJ: {
                        read: function(original) {
                            return !!(common.isNumber(original.r) && common.isNumber(original.g) && common.isNumber(original.b) && common.isNumber(original.a)) && {
                                space: "RGB",
                                r: original.r,
                                g: original.g,
                                b: original.b,
                                a: original.a
                            }
                        },
                        write: function(color) {
                            return {
                                r: color.r,
                                g: color.g,
                                b: color.b,
                                a: color.a
                            }
                        }
                    },
                    RGB_OBJ: {
                        read: function(original) {
                            return !!(common.isNumber(original.r) && common.isNumber(original.g) && common.isNumber(original.b)) && {
                                space: "RGB",
                                r: original.r,
                                g: original.g,
                                b: original.b
                            }
                        },
                        write: function(color) {
                            return {
                                r: color.r,
                                g: color.g,
                                b: color.b
                            }
                        }
                    },
                    HSVA_OBJ: {
                        read: function(original) {
                            return !!(common.isNumber(original.h) && common.isNumber(original.s) && common.isNumber(original.v) && common.isNumber(original.a)) && {
                                space: "HSV",
                                h: original.h,
                                s: original.s,
                                v: original.v,
                                a: original.a
                            }
                        },
                        write: function(color) {
                            return {
                                h: color.h,
                                s: color.s,
                                v: color.v,
                                a: color.a
                            }
                        }
                    },
                    HSV_OBJ: {
                        read: function(original) {
                            return !!(common.isNumber(original.h) && common.isNumber(original.s) && common.isNumber(original.v)) && {
                                space: "HSV",
                                h: original.h,
                                s: original.s,
                                v: original.v
                            }
                        },
                        write: function(color) {
                            return {
                                h: color.h,
                                s: color.s,
                                v: color.v
                            }
                        }
                    }
                }
            }];
        return interpret
    }(dat.color.toString, dat.utils.common), dat.color.math = function() {
        var tmpComponent;
        return {
            hsv_to_rgb: function(h, s, v) {
                var hi = Math.floor(h / 60) % 6,
                    f = h / 60 - Math.floor(h / 60),
                    p = v * (1 - s),
                    q = v * (1 - f * s),
                    t = v * (1 - (1 - f) * s),
                    c = [
                        [v, t, p],
                        [q, v, p],
                        [p, v, t],
                        [p, q, v],
                        [t, p, v],
                        [v, p, q]
                    ][hi];
                return {
                    r: 255 * c[0],
                    g: 255 * c[1],
                    b: 255 * c[2]
                }
            },
            rgb_to_hsv: function(r, g, b) {
                var h, s, min = Math.min(r, g, b),
                    max = Math.max(r, g, b),
                    delta = max - min;
                return 0 == max ? {
                    h: NaN,
                    s: 0,
                    v: 0
                } : (s = delta / max, h = r == max ? (g - b) / delta : g == max ? 2 + (b - r) / delta : 4 + (r - g) / delta, h /= 6, h < 0 && (h += 1), {
                    h: 360 * h,
                    s: s,
                    v: max / 255
                })
            },
            rgb_to_hex: function(r, g, b) {
                var hex = this.hex_with_component(0, 2, r);
                return hex = this.hex_with_component(hex, 1, g), hex = this.hex_with_component(hex, 0, b)
            },
            component_from_hex: function(hex, componentIndex) {
                return hex >> 8 * componentIndex & 255
            },
            hex_with_component: function(hex, componentIndex, value) {
                return value << (tmpComponent = 8 * componentIndex) | hex & ~(255 << tmpComponent)
            }
        }
    }(), dat.color.toString, dat.utils.common)
}, function(module, exports) {
    var dat = module.exports = dat || {};
    dat.gui = dat.gui || {}, dat.utils = dat.utils || {}, dat.controllers = dat.controllers || {}, dat.dom = dat.dom || {}, dat.color = dat.color || {}, dat.utils.css = function() {
        return {
            load: function(url, doc) {
                doc = doc || document;
                var link = doc.createElement("link");
                link.type = "text/css", link.rel = "stylesheet", link.href = url, doc.getElementsByTagName("head")[0].appendChild(link)
            },
            inject: function(css, doc) {
                doc = doc || document;
                var injected = document.createElement("style");
                injected.type = "text/css", injected.innerHTML = css, doc.getElementsByTagName("head")[0].appendChild(injected)
            }
        }
    }(), dat.utils.common = function() {
        var ARR_EACH = Array.prototype.forEach,
            ARR_SLICE = Array.prototype.slice;
        return {
            BREAK: {},
            extend: function(target) {
                return this.each(ARR_SLICE.call(arguments, 1), function(obj) {
                    for (var key in obj) this.isUndefined(obj[key]) || (target[key] = obj[key])
                }, this), target
            },
            defaults: function(target) {
                return this.each(ARR_SLICE.call(arguments, 1), function(obj) {
                    for (var key in obj) this.isUndefined(target[key]) && (target[key] = obj[key])
                }, this), target
            },
            compose: function() {
                var toCall = ARR_SLICE.call(arguments);
                return function() {
                    for (var args = ARR_SLICE.call(arguments), i = toCall.length - 1; i >= 0; i--) args = [toCall[i].apply(this, args)];
                    return args[0]
                }
            },
            each: function(obj, itr, scope) {
                if (ARR_EACH && obj.forEach === ARR_EACH) obj.forEach(itr, scope);
                else if (obj.length === obj.length + 0) {
                    for (var key = 0, l = obj.length; key < l; key++)
                        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) return
                } else
                    for (var key in obj)
                        if (itr.call(scope, obj[key], key) === this.BREAK) return
            },
            defer: function(fnc) {
                setTimeout(fnc, 0)
            },
            toArray: function(obj) {
                return obj.toArray ? obj.toArray() : ARR_SLICE.call(obj)
            },
            isUndefined: function(obj) {
                return void 0 === obj
            },
            isNull: function(obj) {
                return null === obj
            },
            isNaN: function(obj) {
                return obj !== obj
            },
            isArray: Array.isArray || function(obj) {
                return obj.constructor === Array
            },
            isObject: function(obj) {
                return obj === Object(obj)
            },
            isNumber: function(obj) {
                return obj === obj + 0
            },
            isString: function(obj) {
                return obj === obj + ""
            },
            isBoolean: function(obj) {
                return obj === !1 || obj === !0
            },
            isFunction: function(obj) {
                return "[object Function]" === Object.prototype.toString.call(obj)
            }
        }
    }(), dat.controllers.Controller = function(common) {
        var Controller = function(object, property) {
            this.initialValue = object[property], this.domElement = document.createElement("div"), this.object = object, this.property = property, this.__onChange = void 0, this.__onFinishChange = void 0
        };
        return common.extend(Controller.prototype, {
            onChange: function(fnc) {
                return this.__onChange = fnc, this
            },
            onFinishChange: function(fnc) {
                return this.__onFinishChange = fnc, this
            },
            setValue: function(newValue) {
                return this.object[this.property] = newValue, this.__onChange && this.__onChange.call(this, newValue), this.updateDisplay(), this
            },
            getValue: function() {
                return this.object[this.property]
            },
            updateDisplay: function() {
                return this
            },
            isModified: function() {
                return this.initialValue !== this.getValue()
            }
        }), Controller
    }(dat.utils.common), dat.dom.dom = function(common) {
        function cssValueToPixels(val) {
            if ("0" === val || common.isUndefined(val)) return 0;
            var match = val.match(CSS_VALUE_PIXELS);
            return common.isNull(match) ? 0 : parseFloat(match[1])
        }
        var EVENT_MAP = {
                HTMLEvents: ["change"],
                MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
                KeyboardEvents: ["keydown"]
            },
            EVENT_MAP_INV = {};
        common.each(EVENT_MAP, function(v, k) {
            common.each(v, function(e) {
                EVENT_MAP_INV[e] = k
            })
        });
        var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/,
            dom = {
                makeSelectable: function(elem, selectable) {
                    void 0 !== elem && void 0 !== elem.style && (elem.onselectstart = selectable ? function() {
                        return !1
                    } : function() {}, elem.style.MozUserSelect = selectable ? "auto" : "none", elem.style.KhtmlUserSelect = selectable ? "auto" : "none", elem.unselectable = selectable ? "on" : "off")
                },
                makeFullscreen: function(elem, horizontal, vertical) {
                    common.isUndefined(horizontal) && (horizontal = !0), common.isUndefined(vertical) && (vertical = !0), elem.style.position = "absolute", horizontal && (elem.style.left = 0, elem.style.right = 0), vertical && (elem.style.top = 0, elem.style.bottom = 0)
                },
                fakeEvent: function(elem, eventType, params, aux) {
                    params = params || {};
                    var className = EVENT_MAP_INV[eventType];
                    if (!className) throw new Error("Event type " + eventType + " not supported.");
                    var evt = document.createEvent(className);
                    switch (className) {
                        case "MouseEvents":
                            var clientX = params.x || params.clientX || 0,
                                clientY = params.y || params.clientY || 0;
                            evt.initMouseEvent(eventType, params.bubbles || !1, params.cancelable || !0, window, params.clickCount || 1, 0, 0, clientX, clientY, !1, !1, !1, !1, 0, null);
                            break;
                        case "KeyboardEvents":
                            var init = evt.initKeyboardEvent || evt.initKeyEvent;
                            common.defaults(params, {
                                cancelable: !0,
                                ctrlKey: !1,
                                altKey: !1,
                                shiftKey: !1,
                                metaKey: !1,
                                keyCode: void 0,
                                charCode: void 0
                            }), init(eventType, params.bubbles || !1, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
                            break;
                        default:
                            evt.initEvent(eventType, params.bubbles || !1, params.cancelable || !0)
                    }
                    common.defaults(evt, aux), elem.dispatchEvent(evt)
                },
                bind: function(elem, event, func, bool) {
                    return bool = bool || !1, elem.addEventListener ? elem.addEventListener(event, func, bool) : elem.attachEvent && elem.attachEvent("on" + event, func), dom
                },
                unbind: function(elem, event, func, bool) {
                    return bool = bool || !1, elem.removeEventListener ? elem.removeEventListener(event, func, bool) : elem.detachEvent && elem.detachEvent("on" + event, func), dom
                },
                addClass: function(elem, className) {
                    if (void 0 === elem.className) elem.className = className;
                    else if (elem.className !== className) {
                        var classes = elem.className.split(/ +/);
                        classes.indexOf(className) == -1 && (classes.push(className), elem.className = classes.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                    }
                    return dom
                },
                removeClass: function(elem, className) {
                    if (className)
                        if (void 0 === elem.className);
                        else if (elem.className === className) elem.removeAttribute("class");
                    else {
                        var classes = elem.className.split(/ +/),
                            index = classes.indexOf(className);
                        index != -1 && (classes.splice(index, 1), elem.className = classes.join(" "))
                    } else elem.className = void 0;
                    return dom
                },
                hasClass: function(elem, className) {
                    return new RegExp("(?:^|\\s+)" + className + "(?:\\s+|$)").test(elem.className) || !1
                },
                getWidth: function(elem) {
                    var style = getComputedStyle(elem);
                    return cssValueToPixels(style["border-left-width"]) + cssValueToPixels(style["border-right-width"]) + cssValueToPixels(style["padding-left"]) + cssValueToPixels(style["padding-right"]) + cssValueToPixels(style.width)
                },
                getHeight: function(elem) {
                    var style = getComputedStyle(elem);
                    return cssValueToPixels(style["border-top-width"]) + cssValueToPixels(style["border-bottom-width"]) + cssValueToPixels(style["padding-top"]) + cssValueToPixels(style["padding-bottom"]) + cssValueToPixels(style.height)
                },
                getOffset: function(elem) {
                    var offset = {
                        left: 0,
                        top: 0
                    };
                    if (elem.offsetParent)
                        do offset.left += elem.offsetLeft, offset.top += elem.offsetTop; while (elem = elem.offsetParent);
                    return offset
                },
                isActive: function(elem) {
                    return elem === document.activeElement && (elem.type || elem.href)
                }
            };
        return dom
    }(dat.utils.common), dat.controllers.OptionController = function(Controller, dom, common) {
        var OptionController = function(object, property, options) {
            OptionController.superclass.call(this, object, property);
            var _this = this;
            if (this.__select = document.createElement("select"), common.isArray(options)) {
                var map = {};
                common.each(options, function(element) {
                    map[element] = element
                }), options = map
            }
            common.each(options, function(value, key) {
                var opt = document.createElement("option");
                opt.innerHTML = key, opt.setAttribute("value", value), _this.__select.appendChild(opt)
            }), this.updateDisplay(), dom.bind(this.__select, "change", function() {
                var desiredValue = this.options[this.selectedIndex].value;
                _this.setValue(desiredValue)
            }), this.domElement.appendChild(this.__select)
        };
        return OptionController.superclass = Controller, common.extend(OptionController.prototype, Controller.prototype, {
            setValue: function(v) {
                var toReturn = OptionController.superclass.prototype.setValue.call(this, v);
                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), toReturn
            },
            updateDisplay: function() {
                return this.__select.value = this.getValue(), OptionController.superclass.prototype.updateDisplay.call(this)
            }
        }), OptionController
    }(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.NumberController = function(Controller, common) {
        function numDecimals(x) {
            return x = x.toString(), x.indexOf(".") > -1 ? x.length - x.indexOf(".") - 1 : 0
        }
        var NumberController = function(object, property, params) {
            NumberController.superclass.call(this, object, property), params = params || {}, this.__min = params.min, this.__max = params.max, this.__step = params.step, common.isUndefined(this.__step) ? 0 == this.initialValue ? this.__impliedStep = 1 : this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step, this.__precision = numDecimals(this.__impliedStep)
        };
        return NumberController.superclass = Controller, common.extend(NumberController.prototype, Controller.prototype, {
            setValue: function(v) {
                return void 0 !== this.__min && v < this.__min ? v = this.__min : void 0 !== this.__max && v > this.__max && (v = this.__max), void 0 !== this.__step && v % this.__step != 0 && (v = Math.round(v / this.__step) * this.__step), NumberController.superclass.prototype.setValue.call(this, v)
            },
            min: function(v) {
                return this.__min = v, this
            },
            max: function(v) {
                return this.__max = v, this
            },
            step: function(v) {
                return this.__step = v, this
            }
        }), NumberController
    }(dat.controllers.Controller, dat.utils.common), dat.controllers.NumberControllerBox = function(NumberController, dom, common) {
        function roundToDecimal(value, decimals) {
            var tenTo = Math.pow(10, decimals);
            return Math.round(value * tenTo) / tenTo
        }
        var NumberControllerBox = function(object, property, params) {
            function onChange() {
                var attempted = parseFloat(_this.__input.value);
                common.isNaN(attempted) || _this.setValue(attempted)
            }

            function onBlur() {
                onChange(), _this.__onFinishChange && _this.__onFinishChange.call(_this, _this.getValue())
            }

            function onMouseDown(e) {
                dom.bind(window, "mousemove", onMouseDrag), dom.bind(window, "mouseup", onMouseUp), prev_y = e.clientY
            }

            function onMouseDrag(e) {
                var diff = prev_y - e.clientY;
                _this.setValue(_this.getValue() + diff * _this.__impliedStep), prev_y = e.clientY
            }

            function onMouseUp() {
                dom.unbind(window, "mousemove", onMouseDrag), dom.unbind(window, "mouseup", onMouseUp)
            }
            this.__truncationSuspended = !1, NumberControllerBox.superclass.call(this, object, property, params);
            var prev_y, _this = this;
            this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), dom.bind(this.__input, "change", onChange), dom.bind(this.__input, "blur", onBlur), dom.bind(this.__input, "mousedown", onMouseDown), dom.bind(this.__input, "keydown", function(e) {
                13 === e.keyCode && (_this.__truncationSuspended = !0, this.blur(), _this.__truncationSuspended = !1)
            }), this.updateDisplay(), this.domElement.appendChild(this.__input)
        };
        return NumberControllerBox.superclass = NumberController, common.extend(NumberControllerBox.prototype, NumberController.prototype, {
            updateDisplay: function() {
                return this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision), NumberControllerBox.superclass.prototype.updateDisplay.call(this)
            }
        }), NumberControllerBox
    }(dat.controllers.NumberController, dat.dom.dom, dat.utils.common), dat.controllers.NumberControllerSlider = function(NumberController, dom, css, common, styleSheet) {
        function map(v, i1, i2, o1, o2) {
            return o1 + (o2 - o1) * ((v - i1) / (i2 - i1))
        }
        var NumberControllerSlider = function(object, property, min, max, step) {
            function onMouseDown(e) {
                dom.bind(window, "mousemove", onMouseDrag), dom.bind(window, "mouseup", onMouseUp), onMouseDrag(e)
            }

            function onMouseDrag(e) {
                e.preventDefault();
                var offset = dom.getOffset(_this.__background),
                    width = dom.getWidth(_this.__background);
                return _this.setValue(map(e.clientX, offset.left, offset.left + width, _this.__min, _this.__max)), !1
            }

            function onMouseUp() {
                dom.unbind(window, "mousemove", onMouseDrag), dom.unbind(window, "mouseup", onMouseUp), _this.__onFinishChange && _this.__onFinishChange.call(_this, _this.getValue())
            }
            NumberControllerSlider.superclass.call(this, object, property, {
                min: min,
                max: max,
                step: step
            });
            var _this = this;
            this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), dom.bind(this.__background, "mousedown", onMouseDown), dom.addClass(this.__background, "slider"), dom.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
        };
        return NumberControllerSlider.superclass = NumberController, NumberControllerSlider.useDefaultStyles = function() {
            css.inject(styleSheet)
        }, common.extend(NumberControllerSlider.prototype, NumberController.prototype, {
            updateDisplay: function() {
                var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
                return this.__foreground.style.width = 100 * pct + "%", NumberControllerSlider.superclass.prototype.updateDisplay.call(this)
            }
        }), NumberControllerSlider
    }(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"), dat.controllers.FunctionController = function(Controller, dom, common) {
        var FunctionController = function(object, property, text) {
            FunctionController.superclass.call(this, object, property);
            var _this = this;
            this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === text ? "Fire" : text, dom.bind(this.__button, "click", function(e) {
                return e.preventDefault(), _this.fire(), !1
            }), dom.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
        };
        return FunctionController.superclass = Controller, common.extend(FunctionController.prototype, Controller.prototype, {
            fire: function() {
                this.__onChange && this.__onChange.call(this), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.getValue().call(this.object)
            }
        }), FunctionController
    }(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.BooleanController = function(Controller, dom, common) {
        var BooleanController = function(object, property) {
            function onChange() {
                _this.setValue(!_this.__prev)
            }
            BooleanController.superclass.call(this, object, property);
            var _this = this;
            this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), dom.bind(this.__checkbox, "change", onChange, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
        };
        return BooleanController.superclass = Controller, common.extend(BooleanController.prototype, Controller.prototype, {
            setValue: function(v) {
                var toReturn = BooleanController.superclass.prototype.setValue.call(this, v);
                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), toReturn
            },
            updateDisplay: function() {
                return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, BooleanController.superclass.prototype.updateDisplay.call(this)
            }
        }), BooleanController
    }(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.color.toString = function(common) {
        return function(color) {
            if (1 == color.a || common.isUndefined(color.a)) {
                for (var s = color.hex.toString(16); s.length < 6;) s = "0" + s;
                return "#" + s
            }
            return "rgba(" + Math.round(color.r) + "," + Math.round(color.g) + "," + Math.round(color.b) + "," + color.a + ")"
        }
    }(dat.utils.common), dat.color.interpret = function(toString, common) {
        var result, toReturn, interpret = function() {
                toReturn = !1;
                var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];
                return common.each(INTERPRETATIONS, function(family) {
                    if (family.litmus(original)) return common.each(family.conversions, function(conversion, conversionName) {
                        if (result = conversion.read(original), toReturn === !1 && result !== !1) return toReturn = result, result.conversionName = conversionName, result.conversion = conversion, common.BREAK
                    }), common.BREAK
                }), toReturn
            },
            INTERPRETATIONS = [{
                litmus: common.isString,
                conversions: {
                    THREE_CHAR_HEX: {
                        read: function(original) {
                            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                            return null !== test && {
                                space: "HEX",
                                hex: parseInt("0x" + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString())
                            }
                        },
                        write: toString
                    },
                    SIX_CHAR_HEX: {
                        read: function(original) {
                            var test = original.match(/^#([A-F0-9]{6})$/i);
                            return null !== test && {
                                space: "HEX",
                                hex: parseInt("0x" + test[1].toString())
                            }
                        },
                        write: toString
                    },
                    CSS_RGB: {
                        read: function(original) {
                            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== test && {
                                space: "RGB",
                                r: parseFloat(test[1]),
                                g: parseFloat(test[2]),
                                b: parseFloat(test[3])
                            }
                        },
                        write: toString
                    },
                    CSS_RGBA: {
                        read: function(original) {
                            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                            return null !== test && {
                                space: "RGB",
                                r: parseFloat(test[1]),
                                g: parseFloat(test[2]),
                                b: parseFloat(test[3]),
                                a: parseFloat(test[4])
                            }
                        },
                        write: toString
                    }
                }
            }, {
                litmus: common.isNumber,
                conversions: {
                    HEX: {
                        read: function(original) {
                            return {
                                space: "HEX",
                                hex: original,
                                conversionName: "HEX"
                            }
                        },
                        write: function(color) {
                            return color.hex
                        }
                    }
                }
            }, {
                litmus: common.isArray,
                conversions: {
                    RGB_ARRAY: {
                        read: function(original) {
                            return 3 == original.length && {
                                space: "RGB",
                                r: original[0],
                                g: original[1],
                                b: original[2]
                            }
                        },
                        write: function(color) {
                            return [color.r, color.g, color.b]
                        }
                    },
                    RGBA_ARRAY: {
                        read: function(original) {
                            return 4 == original.length && {
                                space: "RGB",
                                r: original[0],
                                g: original[1],
                                b: original[2],
                                a: original[3]
                            }
                        },
                        write: function(color) {
                            return [color.r, color.g, color.b, color.a]
                        }
                    }
                }
            }, {
                litmus: common.isObject,
                conversions: {
                    RGBA_OBJ: {
                        read: function(original) {
                            return !!(common.isNumber(original.r) && common.isNumber(original.g) && common.isNumber(original.b) && common.isNumber(original.a)) && {
                                space: "RGB",
                                r: original.r,
                                g: original.g,
                                b: original.b,
                                a: original.a
                            }
                        },
                        write: function(color) {
                            return {
                                r: color.r,
                                g: color.g,
                                b: color.b,
                                a: color.a
                            }
                        }
                    },
                    RGB_OBJ: {
                        read: function(original) {
                            return !!(common.isNumber(original.r) && common.isNumber(original.g) && common.isNumber(original.b)) && {
                                space: "RGB",
                                r: original.r,
                                g: original.g,
                                b: original.b
                            }
                        },
                        write: function(color) {
                            return {
                                r: color.r,
                                g: color.g,
                                b: color.b
                            }
                        }
                    },
                    HSVA_OBJ: {
                        read: function(original) {
                            return !!(common.isNumber(original.h) && common.isNumber(original.s) && common.isNumber(original.v) && common.isNumber(original.a)) && {
                                space: "HSV",
                                h: original.h,
                                s: original.s,
                                v: original.v,
                                a: original.a
                            }
                        },
                        write: function(color) {
                            return {
                                h: color.h,
                                s: color.s,
                                v: color.v,
                                a: color.a
                            }
                        }
                    },
                    HSV_OBJ: {
                        read: function(original) {
                            return !!(common.isNumber(original.h) && common.isNumber(original.s) && common.isNumber(original.v)) && {
                                space: "HSV",
                                h: original.h,
                                s: original.s,
                                v: original.v
                            }
                        },
                        write: function(color) {
                            return {
                                h: color.h,
                                s: color.s,
                                v: color.v
                            }
                        }
                    }
                }
            }];
        return interpret
    }(dat.color.toString, dat.utils.common), dat.GUI = dat.gui.GUI = function(css, saveDialogueContents, styleSheet, controllerFactory, Controller, BooleanController, FunctionController, NumberControllerBox, NumberControllerSlider, OptionController, ColorController, requestAnimationFrame, CenteredDiv, dom, common) {
        function add(gui, object, property, params) {
            if (void 0 === object[property]) throw new Error("Object " + object + ' has no property "' + property + '"');
            var controller;
            if (params.color) controller = new ColorController(object, property);
            else {
                var factoryArgs = [object, property].concat(params.factoryArgs);
                controller = controllerFactory.apply(gui, factoryArgs)
            }
            params.before instanceof Controller && (params.before = params.before.__li), recallSavedValue(gui, controller), dom.addClass(controller.domElement, "c");
            var name = document.createElement("span");
            dom.addClass(name, "property-name"), name.innerHTML = controller.property;
            var container = document.createElement("div");
            container.appendChild(name), container.appendChild(controller.domElement);
            var li = addRow(gui, container, params.before);
            return dom.addClass(li, GUI.CLASS_CONTROLLER_ROW), dom.addClass(li, typeof controller.getValue()), augmentController(gui, li, controller), gui.__controllers.push(controller), controller
        }

        function addRow(gui, dom, liBefore) {
            var li = document.createElement("li");
            return dom && li.appendChild(dom), liBefore ? gui.__ul.insertBefore(li, params.before) : gui.__ul.appendChild(li), gui.onResize(), li
        }

        function augmentController(gui, li, controller) {
            if (controller.__li = li, controller.__gui = gui, common.extend(controller, {
                    options: function(options) {
                        return arguments.length > 1 ? (controller.remove(), add(gui, controller.object, controller.property, {
                            before: controller.__li.nextElementSibling,
                            factoryArgs: [common.toArray(arguments)]
                        })) : common.isArray(options) || common.isObject(options) ? (controller.remove(), add(gui, controller.object, controller.property, {
                            before: controller.__li.nextElementSibling,
                            factoryArgs: [options]
                        })) : void 0
                    },
                    name: function(v) {
                        return controller.__li.firstElementChild.firstElementChild.innerHTML = v, controller
                    },
                    listen: function() {
                        return controller.__gui.listen(controller), controller
                    },
                    remove: function() {
                        return controller.__gui.remove(controller), controller
                    }
                }), controller instanceof NumberControllerSlider) {
                var box = new NumberControllerBox(controller.object, controller.property, {
                    min: controller.__min,
                    max: controller.__max,
                    step: controller.__step
                });
                common.each(["updateDisplay", "onChange", "onFinishChange"], function(method) {
                    var pc = controller[method],
                        pb = box[method];
                    controller[method] = box[method] = function() {
                        var args = Array.prototype.slice.call(arguments);
                        return pc.apply(controller, args), pb.apply(box, args)
                    }
                }), dom.addClass(li, "has-slider"), controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild)
            } else if (controller instanceof NumberControllerBox) {
                var r = function(returned) {
                    return common.isNumber(controller.__min) && common.isNumber(controller.__max) ? (controller.remove(), add(gui, controller.object, controller.property, {
                        before: controller.__li.nextElementSibling,
                        factoryArgs: [controller.__min, controller.__max, controller.__step]
                    })) : returned
                };
                controller.min = common.compose(r, controller.min), controller.max = common.compose(r, controller.max)
            } else controller instanceof BooleanController ? (dom.bind(li, "click", function() {
                dom.fakeEvent(controller.__checkbox, "click")
            }), dom.bind(controller.__checkbox, "click", function(e) {
                e.stopPropagation()
            })) : controller instanceof FunctionController ? (dom.bind(li, "click", function() {
                dom.fakeEvent(controller.__button, "click")
            }), dom.bind(li, "mouseover", function() {
                dom.addClass(controller.__button, "hover")
            }), dom.bind(li, "mouseout", function() {
                dom.removeClass(controller.__button, "hover")
            })) : controller instanceof ColorController && (dom.addClass(li, "color"), controller.updateDisplay = common.compose(function(r) {
                return li.style.borderLeftColor = controller.__color.toString(), r
            }, controller.updateDisplay), controller.updateDisplay());
            controller.setValue = common.compose(function(r) {
                return gui.getRoot().__preset_select && controller.isModified() && markPresetModified(gui.getRoot(), !0), r
            }, controller.setValue)
        }

        function recallSavedValue(gui, controller) {
            var root = gui.getRoot(),
                matched_index = root.__rememberedObjects.indexOf(controller.object);
            if (matched_index != -1) {
                var controller_map = root.__rememberedObjectIndecesToControllers[matched_index];
                if (void 0 === controller_map && (controller_map = {}, root.__rememberedObjectIndecesToControllers[matched_index] = controller_map), controller_map[controller.property] = controller, root.load && root.load.remembered) {
                    var preset, preset_map = root.load.remembered;
                    if (preset_map[gui.preset]) preset = preset_map[gui.preset];
                    else {
                        if (!preset_map[DEFAULT_DEFAULT_PRESET_NAME]) return;
                        preset = preset_map[DEFAULT_DEFAULT_PRESET_NAME]
                    }
                    if (preset[matched_index] && void 0 !== preset[matched_index][controller.property]) {
                        var value = preset[matched_index][controller.property];
                        controller.initialValue = value, controller.setValue(value)
                    }
                }
            }
        }

        function getLocalStorageHash(gui, key) {
            return document.location.href + "." + key
        }

        function addSaveMenu(gui) {
            function showHideExplain() {
                explain.style.display = gui.useLocalStorage ? "block" : "none"
            }
            var div = gui.__save_row = document.createElement("li");
            dom.addClass(gui.domElement, "has-save"), gui.__ul.insertBefore(div, gui.__ul.firstChild), dom.addClass(div, "save-row");
            var gears = document.createElement("span");
            gears.innerHTML = "&nbsp;", dom.addClass(gears, "button gears");
            var button = document.createElement("span");
            button.innerHTML = "Save", dom.addClass(button, "button"), dom.addClass(button, "save");
            var button2 = document.createElement("span");
            button2.innerHTML = "New", dom.addClass(button2, "button"), dom.addClass(button2, "save-as");
            var button3 = document.createElement("span");
            button3.innerHTML = "Revert", dom.addClass(button3, "button"), dom.addClass(button3, "revert");
            var select = gui.__preset_select = document.createElement("select");
            if (gui.load && gui.load.remembered ? common.each(gui.load.remembered, function(value, key) {
                    addPresetOption(gui, key, key == gui.preset)
                }) : addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, !1), dom.bind(select, "change", function() {
                    for (var index = 0; index < gui.__preset_select.length; index++) gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
                    gui.preset = this.value
                }), div.appendChild(select), div.appendChild(gears), div.appendChild(button), div.appendChild(button2), div.appendChild(button3), SUPPORTS_LOCAL_STORAGE) {
                var saveLocally = document.getElementById("dg-save-locally"),
                    explain = document.getElementById("dg-local-explain");
                saveLocally.style.display = "block";
                var localStorageCheckBox = document.getElementById("dg-local-storage");
                "true" === localStorage.getItem(getLocalStorageHash(gui, "isLocal")) && localStorageCheckBox.setAttribute("checked", "checked"), showHideExplain(), dom.bind(localStorageCheckBox, "change", function() {
                    gui.useLocalStorage = !gui.useLocalStorage, showHideExplain()
                })
            }
            var newConstructorTextArea = document.getElementById("dg-new-constructor");
            dom.bind(newConstructorTextArea, "keydown", function(e) {
                !e.metaKey || 67 !== e.which && 67 != e.keyCode || SAVE_DIALOGUE.hide()
            }), dom.bind(gears, "click", function() {
                newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), void 0, 2), SAVE_DIALOGUE.show(), newConstructorTextArea.focus(), newConstructorTextArea.select()
            }), dom.bind(button, "click", function() {
                gui.save()
            }), dom.bind(button2, "click", function() {
                var presetName = prompt("Enter a new preset name.");
                presetName && gui.saveAs(presetName)
            }), dom.bind(button3, "click", function() {
                gui.revert()
            })
        }

        function addResizeHandle(gui) {
            function dragStart(e) {
                return e.preventDefault(), pmouseX = e.clientX, dom.addClass(gui.__closeButton, GUI.CLASS_DRAG), dom.bind(window, "mousemove", drag), dom.bind(window, "mouseup", dragStop), !1
            }

            function drag(e) {
                return e.preventDefault(), gui.width += pmouseX - e.clientX, gui.onResize(), pmouseX = e.clientX, !1
            }

            function dragStop() {
                dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG), dom.unbind(window, "mousemove", drag), dom.unbind(window, "mouseup", dragStop)
            }
            gui.__resize_handle = document.createElement("div"), common.extend(gui.__resize_handle.style, {
                width: "6px",
                marginLeft: "-3px",
                height: "200px",
                cursor: "ew-resize",
                position: "absolute"
            });
            var pmouseX;
            dom.bind(gui.__resize_handle, "mousedown", dragStart), dom.bind(gui.__closeButton, "mousedown", dragStart), gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild)
        }

        function setWidth(gui, w) {
            gui.domElement.style.width = w + "px", gui.__save_row && gui.autoPlace && (gui.__save_row.style.width = w + "px"), gui.__closeButton && (gui.__closeButton.style.width = w + "px")
        }

        function getCurrentPreset(gui, useInitialValues) {
            var toReturn = {};
            return common.each(gui.__rememberedObjects, function(val, index) {
                var saved_values = {},
                    controller_map = gui.__rememberedObjectIndecesToControllers[index];
                common.each(controller_map, function(controller, property) {
                    saved_values[property] = useInitialValues ? controller.initialValue : controller.getValue()
                }), toReturn[index] = saved_values
            }), toReturn
        }

        function addPresetOption(gui, name, setSelected) {
            var opt = document.createElement("option");
            opt.innerHTML = name, opt.value = name, gui.__preset_select.appendChild(opt), setSelected && (gui.__preset_select.selectedIndex = gui.__preset_select.length - 1)
        }

        function setPresetSelectIndex(gui) {
            for (var index = 0; index < gui.__preset_select.length; index++) gui.__preset_select[index].value == gui.preset && (gui.__preset_select.selectedIndex = index)
        }

        function markPresetModified(gui, modified) {
            var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
            modified ? opt.innerHTML = opt.value + "*" : opt.innerHTML = opt.value
        }

        function updateDisplays(controllerArray) {
            0 != controllerArray.length && requestAnimationFrame(function() {
                updateDisplays(controllerArray)
            }), common.each(controllerArray, function(c) {
                c.updateDisplay()
            })
        }
        css.inject(styleSheet);
        var SAVE_DIALOGUE, auto_place_container, CSS_NAMESPACE = "dg",
            HIDE_KEY_CODE = 72,
            CLOSE_BUTTON_HEIGHT = 20,
            DEFAULT_DEFAULT_PRESET_NAME = "Default",
            SUPPORTS_LOCAL_STORAGE = function() {
                try {
                    return "localStorage" in window && null !== window.localStorage
                } catch (e) {
                    return !1
                }
            }(),
            auto_place_virgin = !0,
            hide = !1,
            hideable_guis = [],
            GUI = function(params) {
                function saveToLocalStorage() {
                    localStorage.setItem(getLocalStorageHash(_this, "gui"), JSON.stringify(_this.getSaveObject()))
                }

                function resetWidth() {
                    var root = _this.getRoot();
                    root.width += 1, common.defer(function() {
                        root.width -= 1
                    })
                }
                var _this = this;
                this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), dom.addClass(this.domElement, CSS_NAMESPACE), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], params = params || {}, params = common.defaults(params, {
                    autoPlace: !0,
                    width: GUI.DEFAULT_WIDTH
                }), params = common.defaults(params, {
                    resizable: params.autoPlace,
                    hideable: params.autoPlace
                }), common.isUndefined(params.load) ? params.load = {
                    preset: DEFAULT_DEFAULT_PRESET_NAME
                } : params.preset && (params.load.preset = params.preset), common.isUndefined(params.parent) && params.hideable && hideable_guis.push(this), params.resizable = common.isUndefined(params.parent) && params.resizable, params.autoPlace && common.isUndefined(params.scrollable) && (params.scrollable = !0);
                var use_local_storage = SUPPORTS_LOCAL_STORAGE && "true" === localStorage.getItem(getLocalStorageHash(this, "isLocal"));
                if (Object.defineProperties(this, {
                        parent: {
                            get: function() {
                                return params.parent
                            }
                        },
                        scrollable: {
                            get: function() {
                                return params.scrollable
                            }
                        },
                        autoPlace: {
                            get: function() {
                                return params.autoPlace
                            }
                        },
                        preset: {
                            get: function() {
                                return _this.parent ? _this.getRoot().preset : params.load.preset
                            },
                            set: function(v) {
                                _this.parent ? _this.getRoot().preset = v : params.load.preset = v, setPresetSelectIndex(this), _this.revert()
                            }
                        },
                        width: {
                            get: function() {
                                return params.width
                            },
                            set: function(v) {
                                params.width = v, setWidth(_this, v)
                            }
                        },
                        name: {
                            get: function() {
                                return params.name
                            },
                            set: function(v) {
                                params.name = v, title_row_name && (title_row_name.innerHTML = params.name)
                            }
                        },
                        closed: {
                            get: function() {
                                return params.closed
                            },
                            set: function(v) {
                                params.closed = v, params.closed ? dom.addClass(_this.__ul, GUI.CLASS_CLOSED) : dom.removeClass(_this.__ul, GUI.CLASS_CLOSED), this.onResize(), _this.__closeButton && (_this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED)
                            }
                        },
                        load: {
                            get: function() {
                                return params.load
                            }
                        },
                        useLocalStorage: {
                            get: function() {
                                return use_local_storage
                            },
                            set: function(bool) {
                                SUPPORTS_LOCAL_STORAGE && (use_local_storage = bool, bool ? dom.bind(window, "unload", saveToLocalStorage) : dom.unbind(window, "unload", saveToLocalStorage), localStorage.setItem(getLocalStorageHash(_this, "isLocal"), bool))
                            }
                        }
                    }), common.isUndefined(params.parent)) {
                    if (params.closed = !1, dom.addClass(this.domElement, GUI.CLASS_MAIN), dom.makeSelectable(this.domElement, !1), SUPPORTS_LOCAL_STORAGE && use_local_storage) {
                        _this.useLocalStorage = !0;
                        var saved_gui = localStorage.getItem(getLocalStorageHash(this, "gui"));
                        saved_gui && (params.load = JSON.parse(saved_gui))
                    }
                    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = GUI.TEXT_CLOSED, dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), dom.bind(this.__closeButton, "click", function() {
                        _this.closed = !_this.closed
                    })
                } else {
                    void 0 === params.closed && (params.closed = !0);
                    var title_row_name = document.createTextNode(params.name);
                    dom.addClass(title_row_name, "controller-name");
                    var title_row = addRow(_this, title_row_name),
                        on_click_title = function(e) {
                            return e.preventDefault(), _this.closed = !_this.closed, !1
                        };
                    dom.addClass(this.__ul, GUI.CLASS_CLOSED), dom.addClass(title_row, "title"), dom.bind(title_row, "click", on_click_title), params.closed || (this.closed = !1)
                }
                params.autoPlace && (common.isUndefined(params.parent) && (auto_place_virgin && (auto_place_container = document.createElement("div"), dom.addClass(auto_place_container, CSS_NAMESPACE), dom.addClass(auto_place_container, GUI.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(auto_place_container), auto_place_virgin = !1), auto_place_container.appendChild(this.domElement), dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE)), this.parent || setWidth(_this, params.width)), dom.bind(window, "resize", function() {
                    _this.onResize()
                }), dom.bind(this.__ul, "webkitTransitionEnd", function() {
                    _this.onResize()
                }), dom.bind(this.__ul, "transitionend", function() {
                    _this.onResize()
                }), dom.bind(this.__ul, "oTransitionEnd", function() {
                    _this.onResize()
                }), this.onResize(), params.resizable && addResizeHandle(this);
                _this.getRoot();
                params.parent || resetWidth()
            };
        return GUI.toggleHide = function() {
            hide = !hide, common.each(hideable_guis, function(gui) {
                gui.domElement.style.zIndex = hide ? -999 : 999, gui.domElement.style.opacity = hide ? 0 : 1
            })
        }, GUI.CLASS_AUTO_PLACE = "a", GUI.CLASS_AUTO_PLACE_CONTAINER = "ac", GUI.CLASS_MAIN = "main", GUI.CLASS_CONTROLLER_ROW = "cr", GUI.CLASS_TOO_TALL = "taller-than-window", GUI.CLASS_CLOSED = "closed", GUI.CLASS_CLOSE_BUTTON = "close-button", GUI.CLASS_DRAG = "drag", GUI.DEFAULT_WIDTH = 245, GUI.TEXT_CLOSED = "Close Controls", GUI.TEXT_OPEN = "Open Controls", dom.bind(window, "keydown", function(e) {
            "text" === document.activeElement.type || e.which !== HIDE_KEY_CODE && e.keyCode != HIDE_KEY_CODE || GUI.toggleHide()
        }, !1), common.extend(GUI.prototype, {
            add: function(object, property) {
                return add(this, object, property, {
                    factoryArgs: Array.prototype.slice.call(arguments, 2)
                })
            },
            addColor: function(object, property) {
                return add(this, object, property, {
                    color: !0
                })
            },
            remove: function(controller) {
                this.__ul.removeChild(controller.__li), this.__controllers.slice(this.__controllers.indexOf(controller), 1);
                var _this = this;
                common.defer(function() {
                    _this.onResize()
                })
            },
            destroy: function() {
                this.autoPlace && auto_place_container.removeChild(this.domElement)
            },
            addFolder: function(name) {
                if (void 0 !== this.__folders[name]) throw new Error('You already have a folder in this GUI by the name "' + name + '"');
                var new_gui_params = {
                    name: name,
                    parent: this
                };
                new_gui_params.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[name] && (new_gui_params.closed = this.load.folders[name].closed, new_gui_params.load = this.load.folders[name]);
                var gui = new GUI(new_gui_params);
                this.__folders[name] = gui;
                var li = addRow(this, gui.domElement);
                return dom.addClass(li, "folder"), gui
            },
            open: function() {
                this.closed = !1
            },
            close: function() {
                this.closed = !0
            },
            onResize: function() {
                var root = this.getRoot();
                if (root.scrollable) {
                    var top = dom.getOffset(root.__ul).top,
                        h = 0;
                    common.each(root.__ul.childNodes, function(node) {
                        root.autoPlace && node === root.__save_row || (h += dom.getHeight(node))
                    }), window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h ? (dom.addClass(root.domElement, GUI.CLASS_TOO_TALL), root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + "px") : (dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL), root.__ul.style.height = "auto")
                }
                root.__resize_handle && common.defer(function() {
                    root.__resize_handle.style.height = root.__ul.offsetHeight + "px"
                }), root.__closeButton && (root.__closeButton.style.width = root.width + "px")
            },
            remember: function() {
                if (common.isUndefined(SAVE_DIALOGUE) && (SAVE_DIALOGUE = new CenteredDiv, SAVE_DIALOGUE.domElement.innerHTML = saveDialogueContents), this.parent) throw new Error("You can only call remember on a top level GUI.");
                var _this = this;
                common.each(Array.prototype.slice.call(arguments), function(object) {
                    0 == _this.__rememberedObjects.length && addSaveMenu(_this), _this.__rememberedObjects.indexOf(object) == -1 && _this.__rememberedObjects.push(object)
                }), this.autoPlace && setWidth(this, this.width)
            },
            getRoot: function() {
                for (var gui = this; gui.parent;) gui = gui.parent;
                return gui
            },
            getSaveObject: function() {
                var toReturn = this.load;
                return toReturn.closed = this.closed, this.__rememberedObjects.length > 0 && (toReturn.preset = this.preset, toReturn.remembered || (toReturn.remembered = {}), toReturn.remembered[this.preset] = getCurrentPreset(this)), toReturn.folders = {}, common.each(this.__folders, function(element, key) {
                    toReturn.folders[key] = element.getSaveObject()
                }), toReturn
            },
            save: function() {
                this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = getCurrentPreset(this), markPresetModified(this, !1)
            },
            saveAs: function(presetName) {
                this.load.remembered || (this.load.remembered = {}, this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, !0)), this.load.remembered[presetName] = getCurrentPreset(this), this.preset = presetName, addPresetOption(this, presetName, !0)
            },
            revert: function(gui) {
                common.each(this.__controllers, function(controller) {
                    this.getRoot().load.remembered ? recallSavedValue(gui || this.getRoot(), controller) : controller.setValue(controller.initialValue)
                }, this), common.each(this.__folders, function(folder) {
                    folder.revert(folder)
                }), gui || markPresetModified(this.getRoot(), !1)
            },
            listen: function(controller) {
                var init = 0 == this.__listening.length;
                this.__listening.push(controller), init && updateDisplays(this.__listening)
            }
        }), GUI
    }(dat.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n", dat.controllers.factory = function(OptionController, NumberControllerBox, NumberControllerSlider, StringController, FunctionController, BooleanController, common) {
        return function(object, property) {
            var initialValue = object[property];
            return common.isArray(arguments[2]) || common.isObject(arguments[2]) ? new OptionController(object, property, arguments[2]) : common.isNumber(initialValue) ? common.isNumber(arguments[2]) && common.isNumber(arguments[3]) ? new NumberControllerSlider(object, property, arguments[2], arguments[3]) : new NumberControllerBox(object, property, {
                min: arguments[2],
                max: arguments[3]
            }) : common.isString(initialValue) ? new StringController(object, property) : common.isFunction(initialValue) ? new FunctionController(object, property, "") : common.isBoolean(initialValue) ? new BooleanController(object, property) : void 0
        }
    }(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = function(Controller, dom, common) {
        var StringController = function(object, property) {
            function onChange() {
                _this.setValue(_this.__input.value)
            }

            function onBlur() {
                _this.__onFinishChange && _this.__onFinishChange.call(_this, _this.getValue())
            }
            StringController.superclass.call(this, object, property);
            var _this = this;
            this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), dom.bind(this.__input, "keyup", onChange), dom.bind(this.__input, "change", onChange), dom.bind(this.__input, "blur", onBlur), dom.bind(this.__input, "keydown", function(e) {
                13 === e.keyCode && this.blur()
            }), this.updateDisplay(), this.domElement.appendChild(this.__input)
        };
        return StringController.superclass = Controller, common.extend(StringController.prototype, Controller.prototype, {
            updateDisplay: function() {
                return dom.isActive(this.__input) || (this.__input.value = this.getValue()), StringController.superclass.prototype.updateDisplay.call(this)
            }
        }), StringController
    }(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController, dat.controllers.ColorController = function(Controller, dom, Color, interpret, common) {
        function linearGradient(elem, x, a, b) {
            elem.style.background = "", common.each(vendors, function(vendor) {
                elem.style.cssText += "background: " + vendor + "linear-gradient(" + x + ", " + a + " 0%, " + b + " 100%); "
            })
        }

        function hueGradient(elem) {
            elem.style.background = "", elem.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", elem.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", elem.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", elem.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", elem.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
        }
        var ColorController = function(object, property) {
            function fieldDown(e) {
                setSV(e), dom.bind(window, "mousemove", setSV), dom.bind(window, "mouseup", unbindSV)
            }

            function unbindSV() {
                dom.unbind(window, "mousemove", setSV), dom.unbind(window, "mouseup", unbindSV)
            }

            function onBlur() {
                var i = interpret(this.value);
                i !== !1 ? (_this.__color.__state = i, _this.setValue(_this.__color.toOriginal())) : this.value = _this.__color.toString()
            }

            function unbindH() {
                dom.unbind(window, "mousemove", setH), dom.unbind(window, "mouseup", unbindH)
            }

            function setSV(e) {
                e.preventDefault();
                var w = dom.getWidth(_this.__saturation_field),
                    o = dom.getOffset(_this.__saturation_field),
                    s = (e.clientX - o.left + document.body.scrollLeft) / w,
                    v = 1 - (e.clientY - o.top + document.body.scrollTop) / w;
                return v > 1 ? v = 1 : v < 0 && (v = 0), s > 1 ? s = 1 : s < 0 && (s = 0), _this.__color.v = v, _this.__color.s = s, _this.setValue(_this.__color.toOriginal()), !1
            }

            function setH(e) {
                e.preventDefault();
                var s = dom.getHeight(_this.__hue_field),
                    o = dom.getOffset(_this.__hue_field),
                    h = 1 - (e.clientY - o.top + document.body.scrollTop) / s;
                return h > 1 ? h = 1 : h < 0 && (h = 0), _this.__color.h = 360 * h, _this.setValue(_this.__color.toOriginal()), !1
            }
            ColorController.superclass.call(this, object, property), this.__color = new Color(this.getValue()), this.__temp = new Color(0);
            var _this = this;
            this.domElement = document.createElement("div"), dom.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", dom.bind(this.__input, "keydown", function(e) {
                13 === e.keyCode && onBlur.call(this)
            }), dom.bind(this.__input, "blur", onBlur), dom.bind(this.__selector, "mousedown", function(e) {
                dom.addClass(this, "drag").bind(window, "mouseup", function(e) {
                    dom.removeClass(_this.__selector, "drag")
                })
            });
            var value_field = document.createElement("div");
            common.extend(this.__selector.style, {
                width: "122px",
                height: "102px",
                padding: "3px",
                backgroundColor: "#222",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
            }), common.extend(this.__field_knob.style, {
                position: "absolute",
                width: "12px",
                height: "12px",
                border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
                boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                borderRadius: "12px",
                zIndex: 1
            }), common.extend(this.__hue_knob.style, {
                position: "absolute",
                width: "15px",
                height: "2px",
                borderRight: "4px solid #fff",
                zIndex: 1
            }), common.extend(this.__saturation_field.style, {
                width: "100px",
                height: "100px",
                border: "1px solid #555",
                marginRight: "3px",
                display: "inline-block",
                cursor: "pointer"
            }), common.extend(value_field.style, {
                width: "100%",
                height: "100%",
                background: "none"
            }), linearGradient(value_field, "top", "rgba(0,0,0,0)", "#000"), common.extend(this.__hue_field.style, {
                width: "15px",
                height: "100px",
                display: "inline-block",
                border: "1px solid #555",
                cursor: "ns-resize"
            }), hueGradient(this.__hue_field), common.extend(this.__input.style, {
                outline: "none",
                textAlign: "center",
                color: "#fff",
                border: 0,
                fontWeight: "bold",
                textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
            }), dom.bind(this.__saturation_field, "mousedown", fieldDown), dom.bind(this.__field_knob, "mousedown", fieldDown), dom.bind(this.__hue_field, "mousedown", function(e) {
                setH(e), dom.bind(window, "mousemove", setH), dom.bind(window, "mouseup", unbindH)
            }), this.__saturation_field.appendChild(value_field), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
        };
        ColorController.superclass = Controller, common.extend(ColorController.prototype, Controller.prototype, {
            updateDisplay: function() {
                var i = interpret(this.getValue());
                if (i !== !1) {
                    var mismatch = !1;
                    common.each(Color.COMPONENTS, function(component) {
                        if (!common.isUndefined(i[component]) && !common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) return mismatch = !0, {}
                    }, this), mismatch && common.extend(this.__color.__state, i)
                }
                common.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                var flip = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                    _flip = 255 - flip;
                common.extend(this.__field_knob.style, {
                    marginLeft: 100 * this.__color.s - 7 + "px",
                    marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                    backgroundColor: this.__temp.toString(),
                    border: this.__field_knob_border + "rgb(" + flip + "," + flip + "," + flip + ")"
                }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, linearGradient(this.__saturation_field, "left", "#fff", this.__temp.toString()), common.extend(this.__input.style, {
                    backgroundColor: this.__input.value = this.__color.toString(),
                    color: "rgb(" + flip + "," + flip + "," + flip + ")",
                    textShadow: this.__input_textShadow + "rgba(" + _flip + "," + _flip + "," + _flip + ",.7)"
                })
            }
        });
        var vendors = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
        return ColorController
    }(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function(interpret, math, toString, common) {
        function defineRGBComponent(target, component, componentHexIndex) {
            Object.defineProperty(target, component, {
                get: function() {
                    return "RGB" === this.__state.space ? this.__state[component] : (recalculateRGB(this, component, componentHexIndex), this.__state[component])
                },
                set: function(v) {
                    "RGB" !== this.__state.space && (recalculateRGB(this, component, componentHexIndex), this.__state.space = "RGB"), this.__state[component] = v
                }
            })
        }

        function defineHSVComponent(target, component) {
            Object.defineProperty(target, component, {
                get: function() {
                    return "HSV" === this.__state.space ? this.__state[component] : (recalculateHSV(this), this.__state[component])
                },
                set: function(v) {
                    "HSV" !== this.__state.space && (recalculateHSV(this), this.__state.space = "HSV"), this.__state[component] = v
                }
            })
        }

        function recalculateRGB(color, component, componentHexIndex) {
            if ("HEX" === color.__state.space) color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);
            else {
                if ("HSV" !== color.__state.space) throw "Corrupted color state";
                common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v))
            }
        }

        function recalculateHSV(color) {
            var result = math.rgb_to_hsv(color.r, color.g, color.b);
            common.extend(color.__state, {
                s: result.s,
                v: result.v
            }), common.isNaN(result.h) ? common.isUndefined(color.__state.h) && (color.__state.h = 0) : color.__state.h = result.h
        }
        var Color = function() {
            if (this.__state = interpret.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
            this.__state.a = this.__state.a || 1
        };
        return Color.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], common.extend(Color.prototype, {
            toString: function() {
                return toString(this)
            },
            toOriginal: function() {
                return this.__state.conversion.write(this)
            }
        }), defineRGBComponent(Color.prototype, "r", 2), defineRGBComponent(Color.prototype, "g", 1), defineRGBComponent(Color.prototype, "b", 0), defineHSVComponent(Color.prototype, "h"), defineHSVComponent(Color.prototype, "s"), defineHSVComponent(Color.prototype, "v"), Object.defineProperty(Color.prototype, "a", {
            get: function() {
                return this.__state.a
            },
            set: function(v) {
                this.__state.a = v
            }
        }), Object.defineProperty(Color.prototype, "hex", {
            get: function() {
                return "HEX" !== !this.__state.space && (this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
            },
            set: function(v) {
                this.__state.space = "HEX", this.__state.hex = v
            }
        }), Color
    }(dat.color.interpret, dat.color.math = function() {
        var tmpComponent;
        return {
            hsv_to_rgb: function(h, s, v) {
                var hi = Math.floor(h / 60) % 6,
                    f = h / 60 - Math.floor(h / 60),
                    p = v * (1 - s),
                    q = v * (1 - f * s),
                    t = v * (1 - (1 - f) * s),
                    c = [
                        [v, t, p],
                        [q, v, p],
                        [p, v, t],
                        [p, q, v],
                        [t, p, v],
                        [v, p, q]
                    ][hi];
                return {
                    r: 255 * c[0],
                    g: 255 * c[1],
                    b: 255 * c[2]
                }
            },
            rgb_to_hsv: function(r, g, b) {
                var h, s, min = Math.min(r, g, b),
                    max = Math.max(r, g, b),
                    delta = max - min;
                return 0 == max ? {
                    h: NaN,
                    s: 0,
                    v: 0
                } : (s = delta / max, h = r == max ? (g - b) / delta : g == max ? 2 + (b - r) / delta : 4 + (r - g) / delta, h /= 6, h < 0 && (h += 1), {
                    h: 360 * h,
                    s: s,
                    v: max / 255
                })
            },
            rgb_to_hex: function(r, g, b) {
                var hex = this.hex_with_component(0, 2, r);
                return hex = this.hex_with_component(hex, 1, g), hex = this.hex_with_component(hex, 0, b)
            },
            component_from_hex: function(hex, componentIndex) {
                return hex >> 8 * componentIndex & 255
            },
            hex_with_component: function(hex, componentIndex, value) {
                return value << (tmpComponent = 8 * componentIndex) | hex & ~(255 << tmpComponent)
            }
        }
    }(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = function() {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
            window.setTimeout(callback, 1e3 / 60)
        }
    }(), dat.dom.CenteredDiv = function(dom, common) {
        var CenteredDiv = function() {
            this.backgroundElement = document.createElement("div"), common.extend(this.backgroundElement.style, {
                backgroundColor: "rgba(0,0,0,0.8)",
                top: 0,
                left: 0,
                display: "none",
                zIndex: "1000",
                opacity: 0,
                WebkitTransition: "opacity 0.2s linear"
            }), dom.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), common.extend(this.domElement.style, {
                position: "fixed",
                display: "none",
                zIndex: "1001",
                opacity: 0,
                WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
            }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
            var _this = this;
            dom.bind(this.backgroundElement, "click", function() {
                _this.hide()
            })
        };
        return CenteredDiv.prototype.show = function() {
            var _this = this;
            this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), common.defer(function() {
                _this.backgroundElement.style.opacity = 1, _this.domElement.style.opacity = 1, _this.domElement.style.webkitTransform = "scale(1)"
            })
        }, CenteredDiv.prototype.hide = function() {
            var _this = this,
                hide = function() {
                    _this.domElement.style.display = "none", _this.backgroundElement.style.display = "none", dom.unbind(_this.domElement, "webkitTransitionEnd", hide), dom.unbind(_this.domElement, "transitionend", hide), dom.unbind(_this.domElement, "oTransitionEnd", hide)
                };
            dom.bind(this.domElement, "webkitTransitionEnd", hide), dom.bind(this.domElement, "transitionend", hide), dom.bind(this.domElement, "oTransitionEnd", hide), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
        }, CenteredDiv.prototype.layout = function() {
            this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + "px"
        }, CenteredDiv
    }(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common)
}, function(module, exports, __webpack_require__) {
    ! function() {
        function m(a, b) {
            document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b)
        }

        function n(a) {
            document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
                document.removeEventListener("DOMContentLoaded", c), a()
            }) : document.attachEvent("onreadystatechange", function l() {
                "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", l), a())
            })
        }

        function t(a) {
            this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(a)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
        }

        function x(a, b) {
            a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:" + b + ";"
        }

        function y(a) {
            var b = a.a.offsetWidth,
                c = b + 100;
            return a.f.style.width = c + "px", a.c.scrollLeft = c, a.b.scrollLeft = a.b.scrollWidth + 100, a.g !== b && (a.g = b, !0)
        }

        function z(a, b) {
            function c() {
                var a = l;
                y(a) && a.a.parentNode && b(a.g)
            }
            var l = a;
            m(a.b, c), m(a.c, c), y(a)
        }

        function A(a, b) {
            var c = b || {};
            this.family = a, this.style = c.style || "normal", this.weight = c.weight || "normal", this.stretch = c.stretch || "normal"
        }

        function I() {
            if (null === E) {
                var a = document.createElement("div");
                try {
                    a.style.font = "condensed 100px sans-serif"
                } catch (b) {}
                E = "" !== a.style.font
            }
            return E
        }

        function J(a, b) {
            return [a.style, a.weight, I() ? a.stretch : "", "100px", b].join(" ")
        }
        var B = null,
            C = null,
            E = null,
            F = null;
        A.prototype.load = function(a, b) {
            var c = this,
                l = a || "BESbswy",
                r = 0,
                D = b || 3e3,
                G = (new Date).getTime();
            return new Promise(function(a, b) {
                var e;
                if (null === F && (F = !!document.fonts), (e = F) && (null === C && (C = /OS X.*Version\/10\..*Safari/.test(navigator.userAgent) && /Apple/.test(navigator.vendor)), e = !C), e) {
                    e = new Promise(function(a, b) {
                        function f() {
                            (new Date).getTime() - G >= D ? b() : document.fonts.load(J(c, '"' + c.family + '"'), l).then(function(c) {
                                1 <= c.length ? a() : setTimeout(f, 25)
                            }, function() {
                                b()
                            })
                        }
                        f()
                    });
                    var K = new Promise(function(a, c) {
                        r = setTimeout(c, D)
                    });
                    Promise.race([K, e]).then(function() {
                        clearTimeout(r), a(c)
                    }, function() {
                        b(c)
                    })
                } else n(function() {
                    function e() {
                        var b;
                        (b = -1 != g && -1 != h || -1 != g && -1 != k || -1 != h && -1 != k) && ((b = g != h && g != k && h != k) || (null === B && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), B = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = B && (g == u && h == u && k == u || g == v && h == v && k == v || g == w && h == w && k == w)), b = !b), b && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(r), a(c))
                    }

                    function H() {
                        if ((new Date).getTime() - G >= D) d.parentNode && d.parentNode.removeChild(d), b(c);
                        else {
                            var a = document.hidden;
                            !0 !== a && void 0 !== a || (g = f.a.offsetWidth, h = p.a.offsetWidth, k = q.a.offsetWidth, e()), r = setTimeout(H, 50)
                        }
                    }
                    var f = new t(l),
                        p = new t(l),
                        q = new t(l),
                        g = -1,
                        h = -1,
                        k = -1,
                        u = -1,
                        v = -1,
                        w = -1,
                        d = document.createElement("div");
                    d.dir = "ltr", x(f, J(c, "sans-serif")), x(p, J(c, "serif")), x(q, J(c, "monospace")), d.appendChild(f.a), d.appendChild(p.a), d.appendChild(q.a), document.body.appendChild(d), u = f.a.offsetWidth, v = p.a.offsetWidth, w = q.a.offsetWidth, H(), z(f, function(a) {
                        g = a, e()
                    }), x(f, J(c, '"' + c.family + '",sans-serif')), z(p, function(a) {
                        h = a, e()
                    }), x(p, J(c, '"' + c.family + '",serif')), z(q, function(a) {
                        k = a, e()
                    }), x(q, J(c, '"' + c.family + '",monospace'))
                })
            })
        }, module.exports = A
    }()
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(global) {
        /*!
         * VERSION: 1.20.4
         * DATE: 2018-02-15
         * UPDATES AND DOCS AT: http://greensock.com
         * 
         * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
         *
         * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
        (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
                "use strict";
                _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(Animation, SimpleTimeline, TweenLite) {
                        var _slice = function(a) {
                                var i, b = [],
                                    l = a.length;
                                for (i = 0; i !== l; b.push(a[i++]));
                                return b
                            },
                            _applyCycle = function(vars, targets, i) {
                                var p, val, alt = vars.cycle;
                                for (p in alt) val = alt[p], vars[p] = "function" == typeof val ? val(i, targets[i]) : val[i % val.length];
                                delete vars.cycle
                            },
                            TweenMax = function(target, duration, vars) {
                                TweenLite.call(this, target, duration, vars), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = TweenMax.prototype.render
                            },
                            _tinyNum = 1e-10,
                            TweenLiteInternals = TweenLite._internals,
                            _isSelector = TweenLiteInternals.isSelector,
                            _isArray = TweenLiteInternals.isArray,
                            p = TweenMax.prototype = TweenLite.to({}, .1, {}),
                            _blankArray = [];
                        TweenMax.version = "1.20.4", p.constructor = TweenMax, p.kill()._gc = !1, TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = TweenLite.killTweensOf, TweenMax.getTweensOf = TweenLite.getTweensOf, TweenMax.lagSmoothing = TweenLite.lagSmoothing, TweenMax.ticker = TweenLite.ticker, TweenMax.render = TweenLite.render, p.invalidate = function() {
                            return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), TweenLite.prototype.invalidate.call(this)
                        }, p.updateTo = function(vars, resetDuration) {
                            var p, curRatio = this.ratio,
                                immediate = this.vars.immediateRender || vars.immediateRender;
                            resetDuration && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                            for (p in vars) this.vars[p] = vars[p];
                            if (this._initted || immediate)
                                if (resetDuration) this._initted = !1, immediate && this.render(0, !0, !0);
                                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && TweenLite._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                                var prevTime = this._totalTime;
                                this.render(0, !0, !1), this._initted = !1, this.render(prevTime, !0, !1)
                            } else if (this._initted = !1, this._init(), this._time > 0 || immediate)
                                for (var endValue, inv = 1 / (1 - curRatio), pt = this._firstPT; pt;) endValue = pt.s + pt.c, pt.c *= inv, pt.s = endValue - pt.c, pt = pt._next;
                            return this
                        }, p.render = function(time, suppressEvents, force) {
                            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                            var isComplete, callback, pt, cycleDuration, r, type, pow, rawPrevTime, yoyoEase, totalDur = this._dirty ? this.totalDuration() : this._totalDuration,
                                prevTime = this._time,
                                prevTotalTime = this._totalTime,
                                prevCycle = this._cycle,
                                duration = this._duration,
                                prevRawPrevTime = this._rawPrevTime;
                            if (time >= totalDur - 1e-7 && time >= 0 ? (this._totalTime = totalDur, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (isComplete = !0, callback = "onComplete", force = force || this._timeline.autoRemoveChildren), 0 === duration && (this._initted || !this.vars.lazy || force) && (this._startTime === this._timeline._duration && (time = 0), (prevRawPrevTime < 0 || time <= 0 && time >= -1e-7 || prevRawPrevTime === _tinyNum && "isPause" !== this.data) && prevRawPrevTime !== time && (force = !0, prevRawPrevTime > _tinyNum && (callback = "onReverseComplete")), this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum)) : time < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== prevTotalTime || 0 === duration && prevRawPrevTime > 0) && (callback = "onReverseComplete", isComplete = this._reversed), time < 0 && (this._active = !1, 0 === duration && (this._initted || !this.vars.lazy || force) && (prevRawPrevTime >= 0 && (force = !0), this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum)), this._initted || (force = !0)) : (this._totalTime = this._time = time, 0 !== this._repeat && (cycleDuration = duration + this._repeatDelay, this._cycle = this._totalTime / cycleDuration >> 0, 0 !== this._cycle && this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time && this._cycle--, this._time = this._totalTime - this._cycle * cycleDuration, this._yoyo && 0 !== (1 & this._cycle) && (this._time = duration - this._time, yoyoEase = this._yoyoEase || this.vars.yoyoEase, yoyoEase && (this._yoyoEase || (yoyoEase !== !0 || this._initted ? this._yoyoEase = yoyoEase = yoyoEase === !0 ? this._ease : yoyoEase instanceof Ease ? yoyoEase : Ease.map[yoyoEase] : (yoyoEase = this.vars.ease, this._yoyoEase = yoyoEase = yoyoEase ? yoyoEase instanceof Ease ? yoyoEase : "function" == typeof yoyoEase ? new Ease(yoyoEase, this.vars.easeParams) : Ease.map[yoyoEase] || TweenLite.defaultEase : TweenLite.defaultEase)), this.ratio = yoyoEase ? 1 - yoyoEase.getRatio((duration - this._time) / duration) : 0)), this._time > duration ? this._time = duration : this._time < 0 && (this._time = 0)), this._easeType && !yoyoEase ? (r = this._time / duration, type = this._easeType, pow = this._easePower, (1 === type || 3 === type && r >= .5) && (r = 1 - r), 3 === type && (r *= 2), 1 === pow ? r *= r : 2 === pow ? r *= r * r : 3 === pow ? r *= r * r * r : 4 === pow && (r *= r * r * r * r), 1 === type ? this.ratio = 1 - r : 2 === type ? this.ratio = r : this._time / duration < .5 ? this.ratio = r / 2 : this.ratio = 1 - r / 2) : yoyoEase || (this.ratio = this._ease.getRatio(this._time / duration))), prevTime === this._time && !force && prevCycle === this._cycle) return void(prevTotalTime !== this._totalTime && this._onUpdate && (suppressEvents || this._callback("onUpdate")));
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!force && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = prevTime, this._totalTime = prevTotalTime, this._rawPrevTime = prevRawPrevTime, this._cycle = prevCycle, TweenLiteInternals.lazyTweens.push(this), void(this._lazy = [time, suppressEvents]);
                                !this._time || isComplete || yoyoEase ? isComplete && this._ease._calcEnd && !yoyoEase && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / duration)
                            }
                            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== prevTime && time >= 0 && (this._active = !0), 0 === prevTotalTime && (2 === this._initted && time > 0 && this._init(), this._startAt && (time >= 0 ? this._startAt.render(time, !0, force) : callback || (callback = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== duration || suppressEvents || this._callback("onStart"))), pt = this._firstPT; pt;) pt.f ? pt.t[pt.p](pt.c * this.ratio + pt.s) : pt.t[pt.p] = pt.c * this.ratio + pt.s, pt = pt._next;
                            this._onUpdate && (time < 0 && this._startAt && this._startTime && this._startAt.render(time, !0, force), suppressEvents || (this._totalTime !== prevTotalTime || callback) && this._callback("onUpdate")), this._cycle !== prevCycle && (suppressEvents || this._gc || this.vars.onRepeat && this._callback("onRepeat")), callback && (this._gc && !force || (time < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(time, !0, force), isComplete && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !suppressEvents && this.vars[callback] && this._callback(callback), 0 === duration && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum && (this._rawPrevTime = 0)))
                        }, TweenMax.to = function(target, duration, vars) {
                            return new TweenMax(target, duration, vars)
                        }, TweenMax.from = function(target, duration, vars) {
                            return vars.runBackwards = !0, vars.immediateRender = 0 != vars.immediateRender, new TweenMax(target, duration, vars)
                        }, TweenMax.fromTo = function(target, duration, fromVars, toVars) {
                            return toVars.startAt = fromVars, toVars.immediateRender = 0 != toVars.immediateRender && 0 != fromVars.immediateRender, new TweenMax(target, duration, toVars)
                        }, TweenMax.staggerTo = TweenMax.allTo = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
                            stagger = stagger || 0;
                            var l, copy, i, p, delay = 0,
                                a = [],
                                finalComplete = function() {
                                    vars.onComplete && vars.onComplete.apply(vars.onCompleteScope || this, arguments), onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray)
                                },
                                cycle = vars.cycle,
                                fromCycle = vars.startAt && vars.startAt.cycle;
                            for (_isArray(targets) || ("string" == typeof targets && (targets = TweenLite.selector(targets) || targets), _isSelector(targets) && (targets = _slice(targets))), targets = targets || [], stagger < 0 && (targets = _slice(targets), targets.reverse(), stagger *= -1), l = targets.length - 1, i = 0; i <= l; i++) {
                                copy = {};
                                for (p in vars) copy[p] = vars[p];
                                if (cycle && (_applyCycle(copy, targets, i), null != copy.duration && (duration = copy.duration, delete copy.duration)), fromCycle) {
                                    fromCycle = copy.startAt = {};
                                    for (p in vars.startAt) fromCycle[p] = vars.startAt[p];
                                    _applyCycle(copy.startAt, targets, i)
                                }
                                copy.delay = delay + (copy.delay || 0), i === l && onCompleteAll && (copy.onComplete = finalComplete), a[i] = new TweenMax(targets[i], duration, copy), delay += stagger
                            }
                            return a
                        }, TweenMax.staggerFrom = TweenMax.allFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
                            return vars.runBackwards = !0, vars.immediateRender = 0 != vars.immediateRender, TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope)
                        }, TweenMax.staggerFromTo = TweenMax.allFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
                            return toVars.startAt = fromVars, toVars.immediateRender = 0 != toVars.immediateRender && 0 != fromVars.immediateRender, TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope)
                        }, TweenMax.delayedCall = function(delay, callback, params, scope, useFrames) {
                            return new TweenMax(callback, 0, {
                                delay: delay,
                                onComplete: callback,
                                onCompleteParams: params,
                                callbackScope: scope,
                                onReverseComplete: callback,
                                onReverseCompleteParams: params,
                                immediateRender: !1,
                                useFrames: useFrames,
                                overwrite: 0
                            })
                        }, TweenMax.set = function(target, vars) {
                            return new TweenMax(target, 0, vars)
                        }, TweenMax.isTweening = function(target) {
                            return TweenLite.getTweensOf(target, !0).length > 0
                        };
                        var _getChildrenOf = function(timeline, includeTimelines) {
                                for (var a = [], cnt = 0, tween = timeline._first; tween;) tween instanceof TweenLite ? a[cnt++] = tween : (includeTimelines && (a[cnt++] = tween), a = a.concat(_getChildrenOf(tween, includeTimelines)), cnt = a.length), tween = tween._next;
                                return a
                            },
                            getAllTweens = TweenMax.getAllTweens = function(includeTimelines) {
                                return _getChildrenOf(Animation._rootTimeline, includeTimelines).concat(_getChildrenOf(Animation._rootFramesTimeline, includeTimelines))
                            };
                        TweenMax.killAll = function(complete, tweens, delayedCalls, timelines) {
                            null == tweens && (tweens = !0), null == delayedCalls && (delayedCalls = !0);
                            var isDC, tween, i, a = getAllTweens(0 != timelines),
                                l = a.length,
                                allTrue = tweens && delayedCalls && timelines;
                            for (i = 0; i < l; i++) tween = a[i], (allTrue || tween instanceof SimpleTimeline || (isDC = tween.target === tween.vars.onComplete) && delayedCalls || tweens && !isDC) && (complete ? tween.totalTime(tween._reversed ? 0 : tween.totalDuration()) : tween._enabled(!1, !1))
                        }, TweenMax.killChildTweensOf = function(parent, complete) {
                            if (null != parent) {
                                var a, curParent, p, i, l, tl = TweenLiteInternals.tweenLookup;
                                if ("string" == typeof parent && (parent = TweenLite.selector(parent) || parent), _isSelector(parent) && (parent = _slice(parent)), _isArray(parent))
                                    for (i = parent.length; --i > -1;) TweenMax.killChildTweensOf(parent[i], complete);
                                else {
                                    a = [];
                                    for (p in tl)
                                        for (curParent = tl[p].target.parentNode; curParent;) curParent === parent && (a = a.concat(tl[p].tweens)), curParent = curParent.parentNode;
                                    for (l = a.length, i = 0; i < l; i++) complete && a[i].totalTime(a[i].totalDuration()), a[i]._enabled(!1, !1)
                                }
                            }
                        };
                        var _changePause = function(pause, tweens, delayedCalls, timelines) {
                            tweens = tweens !== !1, delayedCalls = delayedCalls !== !1, timelines = timelines !== !1;
                            for (var isDC, tween, a = getAllTweens(timelines), allTrue = tweens && delayedCalls && timelines, i = a.length; --i > -1;) tween = a[i], (allTrue || tween instanceof SimpleTimeline || (isDC = tween.target === tween.vars.onComplete) && delayedCalls || tweens && !isDC) && tween.paused(pause)
                        };
                        return TweenMax.pauseAll = function(tweens, delayedCalls, timelines) {
                            _changePause(!0, tweens, delayedCalls, timelines)
                        }, TweenMax.resumeAll = function(tweens, delayedCalls, timelines) {
                            _changePause(!1, tweens, delayedCalls, timelines)
                        }, TweenMax.globalTimeScale = function(value) {
                            var tl = Animation._rootTimeline,
                                t = TweenLite.ticker.time;
                            return arguments.length ? (value = value || _tinyNum, tl._startTime = t - (t - tl._startTime) * tl._timeScale / value, tl = Animation._rootFramesTimeline, t = TweenLite.ticker.frame, tl._startTime = t - (t - tl._startTime) * tl._timeScale / value, tl._timeScale = Animation._rootTimeline._timeScale = value, value) : tl._timeScale
                        }, p.progress = function(value, suppressEvents) {
                            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), suppressEvents) : this._time / this.duration()
                        }, p.totalProgress = function(value, suppressEvents) {
                            return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this._totalTime / this.totalDuration()
                        }, p.time = function(value, suppressEvents) {
                            return arguments.length ? (this._dirty && this.totalDuration(), value > this._duration && (value = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? value = this._duration - value + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (value += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(value, suppressEvents)) : this._time
                        }, p.duration = function(value) {
                            return arguments.length ? Animation.prototype.duration.call(this, value) : this._duration
                        }, p.totalDuration = function(value) {
                            return arguments.length ? this._repeat === -1 ? this : this.duration((value - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                        }, p.repeat = function(value) {
                            return arguments.length ? (this._repeat = value, this._uncache(!0)) : this._repeat
                        }, p.repeatDelay = function(value) {
                            return arguments.length ? (this._repeatDelay = value, this._uncache(!0)) : this._repeatDelay
                        }, p.yoyo = function(value) {
                            return arguments.length ? (this._yoyo = value, this) : this._yoyo
                        }, TweenMax
                    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(Animation, SimpleTimeline, TweenLite) {
                        var TimelineLite = function(vars) {
                                SimpleTimeline.call(this, vars), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                                var val, p, v = this.vars;
                                for (p in v) val = v[p], _isArray(val) && val.join("").indexOf("{self}") !== -1 && (v[p] = this._swapSelfInParams(val));
                                _isArray(v.tweens) && this.add(v.tweens, 0, v.align, v.stagger)
                            },
                            _tinyNum = 1e-10,
                            TweenLiteInternals = TweenLite._internals,
                            _internals = TimelineLite._internals = {},
                            _isSelector = TweenLiteInternals.isSelector,
                            _isArray = TweenLiteInternals.isArray,
                            _lazyTweens = TweenLiteInternals.lazyTweens,
                            _lazyRender = TweenLiteInternals.lazyRender,
                            _globals = _gsScope._gsDefine.globals,
                            _copy = function(vars) {
                                var p, copy = {};
                                for (p in vars) copy[p] = vars[p];
                                return copy
                            },
                            _applyCycle = function(vars, targets, i) {
                                var p, val, alt = vars.cycle;
                                for (p in alt) val = alt[p], vars[p] = "function" == typeof val ? val(i, targets[i]) : val[i % val.length];
                                delete vars.cycle
                            },
                            _pauseCallback = _internals.pauseCallback = function() {},
                            _slice = function(a) {
                                var i, b = [],
                                    l = a.length;
                                for (i = 0; i !== l; b.push(a[i++]));
                                return b
                            },
                            p = TimelineLite.prototype = new SimpleTimeline;
                        return TimelineLite.version = "1.20.4", p.constructor = TimelineLite, p.kill()._gc = p._forcingPlayhead = p._hasPause = !1, p.to = function(target, duration, vars, position) {
                            var Engine = vars.repeat && _globals.TweenMax || TweenLite;
                            return duration ? this.add(new Engine(target, duration, vars), position) : this.set(target, vars, position)
                        }, p.from = function(target, duration, vars, position) {
                            return this.add((vars.repeat && _globals.TweenMax || TweenLite).from(target, duration, vars), position)
                        }, p.fromTo = function(target, duration, fromVars, toVars, position) {
                            var Engine = toVars.repeat && _globals.TweenMax || TweenLite;
                            return duration ? this.add(Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position)
                        }, p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
                            var copy, i, tl = new TimelineLite({
                                    onComplete: onCompleteAll,
                                    onCompleteParams: onCompleteAllParams,
                                    callbackScope: onCompleteAllScope,
                                    smoothChildTiming: this.smoothChildTiming
                                }),
                                cycle = vars.cycle;
                            for ("string" == typeof targets && (targets = TweenLite.selector(targets) || targets), targets = targets || [], _isSelector(targets) && (targets = _slice(targets)), stagger = stagger || 0, stagger < 0 && (targets = _slice(targets), targets.reverse(), stagger *= -1), i = 0; i < targets.length; i++) copy = _copy(vars), copy.startAt && (copy.startAt = _copy(copy.startAt), copy.startAt.cycle && _applyCycle(copy.startAt, targets, i)), cycle && (_applyCycle(copy, targets, i), null != copy.duration && (duration = copy.duration, delete copy.duration)), tl.to(targets[i], duration, copy, i * stagger);
                            return this.add(tl, position)
                        }, p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
                            return vars.immediateRender = 0 != vars.immediateRender, vars.runBackwards = !0, this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope)
                        }, p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
                            return toVars.startAt = fromVars, toVars.immediateRender = 0 != toVars.immediateRender && 0 != fromVars.immediateRender, this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope)
                        }, p.call = function(callback, params, scope, position) {
                            return this.add(TweenLite.delayedCall(0, callback, params, scope), position)
                        }, p.set = function(target, vars, position) {
                            return position = this._parseTimeOrLabel(position, 0, !0), null == vars.immediateRender && (vars.immediateRender = position === this._time && !this._paused), this.add(new TweenLite(target, 0, vars), position)
                        }, TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
                            vars = vars || {}, null == vars.smoothChildTiming && (vars.smoothChildTiming = !0);
                            var hasNegativeStart, time, tween, next, tl = new TimelineLite(vars),
                                root = tl._timeline;
                            for (null == ignoreDelayedCalls && (ignoreDelayedCalls = !0), root._remove(tl, !0), tl._startTime = 0, tl._rawPrevTime = tl._time = tl._totalTime = root._time, tween = root._first; tween;) next = tween._next, ignoreDelayedCalls && tween instanceof TweenLite && tween.target === tween.vars.onComplete || (time = tween._startTime - tween._delay, time < 0 && (hasNegativeStart = 1), tl.add(tween, time)), tween = next;
                            return root.add(tl, 0), hasNegativeStart && tl.totalDuration(), tl
                        }, p.add = function(value, position, align, stagger) {
                            var curTime, l, i, child, tl, beforeRawTime;
                            if ("number" != typeof position && (position = this._parseTimeOrLabel(position, 0, !0, value)), !(value instanceof Animation)) {
                                if (value instanceof Array || value && value.push && _isArray(value)) {
                                    for (align = align || "normal", stagger = stagger || 0, curTime = position, l = value.length, i = 0; i < l; i++) _isArray(child = value[i]) && (child = new TimelineLite({
                                        tweens: child
                                    })), this.add(child, curTime), "string" != typeof child && "function" != typeof child && ("sequence" === align ? curTime = child._startTime + child.totalDuration() / child._timeScale : "start" === align && (child._startTime -= child.delay())), curTime += stagger;
                                    return this._uncache(!0)
                                }
                                if ("string" == typeof value) return this.addLabel(value, position);
                                if ("function" != typeof value) throw "Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.";
                                value = TweenLite.delayedCall(0, value)
                            }
                            if (SimpleTimeline.prototype.add.call(this, value, position), value._time && value.render((this.rawTime() - value._startTime) * value._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                                for (tl = this, beforeRawTime = tl.rawTime() > value._startTime; tl._timeline;) beforeRawTime && tl._timeline.smoothChildTiming ? tl.totalTime(tl._totalTime, !0) : tl._gc && tl._enabled(!0, !1), tl = tl._timeline;
                            return this
                        }, p.remove = function(value) {
                            if (value instanceof Animation) {
                                this._remove(value, !1);
                                var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline;
                                return value._startTime = (value._paused ? value._pauseTime : tl._time) - (value._reversed ? value.totalDuration() - value._totalTime : value._totalTime) / value._timeScale, this
                            }
                            if (value instanceof Array || value && value.push && _isArray(value)) {
                                for (var i = value.length; --i > -1;) this.remove(value[i]);
                                return this
                            }
                            return "string" == typeof value ? this.removeLabel(value) : this.kill(null, value)
                        }, p._remove = function(tween, skipDisable) {
                            SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
                            var last = this._last;
                            return last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                        }, p.append = function(value, offsetOrLabel) {
                            return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, !0, value))
                        }, p.insert = p.insertMultiple = function(value, position, align, stagger) {
                            return this.add(value, position || 0, align, stagger)
                        }, p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
                            return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, !0, tweens), align, stagger)
                        }, p.addLabel = function(label, position) {
                            return this._labels[label] = this._parseTimeOrLabel(position), this
                        }, p.addPause = function(position, callback, params, scope) {
                            var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
                            return t.vars.onComplete = t.vars.onReverseComplete = callback, t.data = "isPause", this._hasPause = !0, this.add(t, position)
                        }, p.removeLabel = function(label) {
                            return delete this._labels[label], this
                        }, p.getLabelTime = function(label) {
                            return null != this._labels[label] ? this._labels[label] : -1
                        }, p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
                            var clippedDuration, i;
                            if (ignore instanceof Animation && ignore.timeline === this) this.remove(ignore);
                            else if (ignore && (ignore instanceof Array || ignore.push && _isArray(ignore)))
                                for (i = ignore.length; --i > -1;) ignore[i] instanceof Animation && ignore[i].timeline === this && this.remove(ignore[i]);
                            if (clippedDuration = "number" != typeof timeOrLabel || offsetOrLabel ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof offsetOrLabel) return this._parseTimeOrLabel(offsetOrLabel, appendIfAbsent && "number" == typeof timeOrLabel && null == this._labels[offsetOrLabel] ? timeOrLabel - clippedDuration : 0, appendIfAbsent);
                            if (offsetOrLabel = offsetOrLabel || 0, "string" != typeof timeOrLabel || !isNaN(timeOrLabel) && null == this._labels[timeOrLabel]) null == timeOrLabel && (timeOrLabel = clippedDuration);
                            else {
                                if (i = timeOrLabel.indexOf("="), i === -1) return null == this._labels[timeOrLabel] ? appendIfAbsent ? this._labels[timeOrLabel] = clippedDuration + offsetOrLabel : offsetOrLabel : this._labels[timeOrLabel] + offsetOrLabel;
                                offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1)), timeOrLabel = i > 1 ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, appendIfAbsent) : clippedDuration
                            }
                            return Number(timeOrLabel) + offsetOrLabel
                        }, p.seek = function(position, suppressEvents) {
                            return this.totalTime("number" == typeof position ? position : this._parseTimeOrLabel(position), suppressEvents !== !1)
                        }, p.stop = function() {
                            return this.paused(!0)
                        }, p.gotoAndPlay = function(position, suppressEvents) {
                            return this.play(position, suppressEvents)
                        }, p.gotoAndStop = function(position, suppressEvents) {
                            return this.pause(position, suppressEvents)
                        }, p.render = function(time, suppressEvents, force) {
                            this._gc && this._enabled(!0, !1);
                            var tween, isComplete, next, callback, internalForce, pauseTween, curTime, prevTime = this._time,
                                totalDur = this._dirty ? this.totalDuration() : this._totalDuration,
                                prevStart = this._startTime,
                                prevTimeScale = this._timeScale,
                                prevPaused = this._paused;
                            if (prevTime !== this._time && (time += this._time - prevTime), time >= totalDur - 1e-7 && time >= 0) this._totalTime = this._time = totalDur, this._reversed || this._hasPausedChild() || (isComplete = !0, callback = "onComplete", internalForce = !!this._timeline.autoRemoveChildren, 0 === this._duration && (time <= 0 && time >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) && this._rawPrevTime !== time && this._first && (internalForce = !0, this._rawPrevTime > _tinyNum && (callback = "onReverseComplete"))), this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum, time = totalDur + 1e-4;
                            else if (time < 1e-7)
                                if (this._totalTime = this._time = 0, (0 !== prevTime || 0 === this._duration && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || time < 0 && this._rawPrevTime >= 0)) && (callback = "onReverseComplete", isComplete = this._reversed), time < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (internalForce = isComplete = !0, callback = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (internalForce = !0), this._rawPrevTime = time;
                                else {
                                    if (this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum, 0 === time && isComplete)
                                        for (tween = this._first; tween && 0 === tween._startTime;) tween._duration || (isComplete = !1), tween = tween._next;
                                    time = 0, this._initted || (internalForce = !0)
                                }
                            else {
                                if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
                                    if (time >= prevTime)
                                        for (tween = this._first; tween && tween._startTime <= time && !pauseTween;) tween._duration || "isPause" !== tween.data || tween.ratio || 0 === tween._startTime && 0 === this._rawPrevTime || (pauseTween = tween), tween = tween._next;
                                    else
                                        for (tween = this._last; tween && tween._startTime >= time && !pauseTween;) tween._duration || "isPause" === tween.data && tween._rawPrevTime > 0 && (pauseTween = tween), tween = tween._prev;
                                    pauseTween && (this._time = time = pauseTween._startTime, this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay))
                                }
                                this._totalTime = this._time = this._rawPrevTime = time
                            }
                            if (this._time !== prevTime && this._first || force || internalForce || pauseTween) {
                                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== prevTime && time > 0 && (this._active = !0), 0 === prevTime && this.vars.onStart && (0 === this._time && this._duration || suppressEvents || this._callback("onStart")), curTime = this._time, curTime >= prevTime)
                                    for (tween = this._first; tween && (next = tween._next, curTime === this._time && (!this._paused || prevPaused));)(tween._active || tween._startTime <= curTime && !tween._paused && !tween._gc) && (pauseTween === tween && this.pause(), tween._reversed ? tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, suppressEvents, force) : tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force)), tween = next;
                                else
                                    for (tween = this._last; tween && (next = tween._prev, curTime === this._time && (!this._paused || prevPaused));) {
                                        if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
                                            if (pauseTween === tween) {
                                                for (pauseTween = tween._prev; pauseTween && pauseTween.endTime() > this._time;) pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force), pauseTween = pauseTween._prev;
                                                pauseTween = null, this.pause()
                                            }
                                            tween._reversed ? tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, suppressEvents, force) : tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force)
                                        }
                                        tween = next
                                    }
                                this._onUpdate && (suppressEvents || (_lazyTweens.length && _lazyRender(), this._callback("onUpdate"))), callback && (this._gc || prevStart !== this._startTime && prevTimeScale === this._timeScale || (0 === this._time || totalDur >= this.totalDuration()) && (isComplete && (_lazyTweens.length && _lazyRender(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !suppressEvents && this.vars[callback] && this._callback(callback)))
                            }
                        }, p._hasPausedChild = function() {
                            for (var tween = this._first; tween;) {
                                if (tween._paused || tween instanceof TimelineLite && tween._hasPausedChild()) return !0;
                                tween = tween._next
                            }
                            return !1
                        }, p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
                            ignoreBeforeTime = ignoreBeforeTime || -9999999999;
                            for (var a = [], tween = this._first, cnt = 0; tween;) tween._startTime < ignoreBeforeTime || (tween instanceof TweenLite ? tweens !== !1 && (a[cnt++] = tween) : (timelines !== !1 && (a[cnt++] = tween), nested !== !1 && (a = a.concat(tween.getChildren(!0, tweens, timelines)), cnt = a.length))), tween = tween._next;
                            return a
                        }, p.getTweensOf = function(target, nested) {
                            var tweens, i, disabled = this._gc,
                                a = [],
                                cnt = 0;
                            for (disabled && this._enabled(!0, !0), tweens = TweenLite.getTweensOf(target), i = tweens.length; --i > -1;)(tweens[i].timeline === this || nested && this._contains(tweens[i])) && (a[cnt++] = tweens[i]);
                            return disabled && this._enabled(!1, !0), a
                        }, p.recent = function() {
                            return this._recent
                        }, p._contains = function(tween) {
                            for (var tl = tween.timeline; tl;) {
                                if (tl === this) return !0;
                                tl = tl.timeline
                            }
                            return !1
                        }, p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
                            ignoreBeforeTime = ignoreBeforeTime || 0;
                            for (var p, tween = this._first, labels = this._labels; tween;) tween._startTime >= ignoreBeforeTime && (tween._startTime += amount), tween = tween._next;
                            if (adjustLabels)
                                for (p in labels) labels[p] >= ignoreBeforeTime && (labels[p] += amount);
                            return this._uncache(!0)
                        }, p._kill = function(vars, target) {
                            if (!vars && !target) return this._enabled(!1, !1);
                            for (var tweens = target ? this.getTweensOf(target) : this.getChildren(!0, !0, !1), i = tweens.length, changed = !1; --i > -1;) tweens[i]._kill(vars, target) && (changed = !0);
                            return changed
                        }, p.clear = function(labels) {
                            var tweens = this.getChildren(!1, !0, !0),
                                i = tweens.length;
                            for (this._time = this._totalTime = 0; --i > -1;) tweens[i]._enabled(!1, !1);
                            return labels !== !1 && (this._labels = {}), this._uncache(!0)
                        }, p.invalidate = function() {
                            for (var tween = this._first; tween;) tween.invalidate(), tween = tween._next;
                            return Animation.prototype.invalidate.call(this)
                        }, p._enabled = function(enabled, ignoreTimeline) {
                            if (enabled === this._gc)
                                for (var tween = this._first; tween;) tween._enabled(enabled, !0), tween = tween._next;
                            return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline)
                        }, p.totalTime = function(time, suppressEvents, uncapped) {
                            this._forcingPlayhead = !0;
                            var val = Animation.prototype.totalTime.apply(this, arguments);
                            return this._forcingPlayhead = !1, val
                        }, p.duration = function(value) {
                            return arguments.length ? (0 !== this.duration() && 0 !== value && this.timeScale(this._duration / value), this) : (this._dirty && this.totalDuration(), this._duration)
                        }, p.totalDuration = function(value) {
                            if (!arguments.length) {
                                if (this._dirty) {
                                    for (var prev, end, max = 0, tween = this._last, prevStart = 999999999999; tween;) prev = tween._prev, tween._dirty && tween.totalDuration(), tween._startTime > prevStart && this._sortChildren && !tween._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(tween, tween._startTime - tween._delay), this._calculatingDuration = 0) : prevStart = tween._startTime, tween._startTime < 0 && !tween._paused && (max -= tween._startTime, this._timeline.smoothChildTiming && (this._startTime += tween._startTime / this._timeScale, this._time -= tween._startTime, this._totalTime -= tween._startTime, this._rawPrevTime -= tween._startTime), this.shiftChildren(-tween._startTime, !1, -9999999999), prevStart = 0), end = tween._startTime + tween._totalDuration / tween._timeScale, end > max && (max = end), tween = prev;
                                    this._duration = this._totalDuration = max, this._dirty = !1
                                }
                                return this._totalDuration
                            }
                            return value && this.totalDuration() ? this.timeScale(this._totalDuration / value) : this
                        }, p.paused = function(value) {
                            if (!value)
                                for (var tween = this._first, time = this._time; tween;) tween._startTime === time && "isPause" === tween.data && (tween._rawPrevTime = 0), tween = tween._next;
                            return Animation.prototype.paused.apply(this, arguments)
                        }, p.usesFrames = function() {
                            for (var tl = this._timeline; tl._timeline;) tl = tl._timeline;
                            return tl === Animation._rootFramesTimeline
                        }, p.rawTime = function(wrapRepeats) {
                            return wrapRepeats && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale
                        }, TimelineLite
                    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(TimelineLite, TweenLite, Ease) {
                        var TimelineMax = function(vars) {
                                TimelineLite.call(this, vars), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                            },
                            _tinyNum = 1e-10,
                            TweenLiteInternals = TweenLite._internals,
                            _lazyTweens = TweenLiteInternals.lazyTweens,
                            _lazyRender = TweenLiteInternals.lazyRender,
                            _globals = _gsScope._gsDefine.globals,
                            _easeNone = new Ease(null, null, 1, 0),
                            p = TimelineMax.prototype = new TimelineLite;
                        return p.constructor = TimelineMax, p.kill()._gc = !1,
                            TimelineMax.version = "1.20.4", p.invalidate = function() {
                                return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), TimelineLite.prototype.invalidate.call(this)
                            }, p.addCallback = function(callback, position, params, scope) {
                                return this.add(TweenLite.delayedCall(0, callback, params, scope), position)
                            }, p.removeCallback = function(callback, position) {
                                if (callback)
                                    if (null == position) this._kill(null, callback);
                                    else
                                        for (var a = this.getTweensOf(callback, !1), i = a.length, time = this._parseTimeOrLabel(position); --i > -1;) a[i]._startTime === time && a[i]._enabled(!1, !1);
                                return this
                            }, p.removePause = function(position) {
                                return this.removeCallback(TimelineLite._internals.pauseCallback, position)
                            }, p.tweenTo = function(position, vars) {
                                vars = vars || {};
                                var duration, p, t, copy = {
                                        ease: _easeNone,
                                        useFrames: this.usesFrames(),
                                        immediateRender: !1,
                                        lazy: !1
                                    },
                                    Engine = vars.repeat && _globals.TweenMax || TweenLite;
                                for (p in vars) copy[p] = vars[p];
                                return copy.time = this._parseTimeOrLabel(position), duration = Math.abs(Number(copy.time) - this._time) / this._timeScale || .001, t = new Engine(this, duration, copy), copy.onStart = function() {
                                    t.target.paused(!0), t.vars.time === t.target.time() || duration !== t.duration() || t.isFromTo || t.duration(Math.abs(t.vars.time - t.target.time()) / t.target._timeScale).render(t.time(), !0, !0), vars.onStart && vars.onStart.apply(vars.onStartScope || vars.callbackScope || t, vars.onStartParams || [])
                                }, t
                            }, p.tweenFromTo = function(fromPosition, toPosition, vars) {
                                vars = vars || {}, fromPosition = this._parseTimeOrLabel(fromPosition), vars.startAt = {
                                    onComplete: this.seek,
                                    onCompleteParams: [fromPosition],
                                    callbackScope: this
                                }, vars.immediateRender = vars.immediateRender !== !1;
                                var t = this.tweenTo(toPosition, vars);
                                return t.isFromTo = 1, t.duration(Math.abs(t.vars.time - fromPosition) / this._timeScale || .001)
                            }, p.render = function(time, suppressEvents, force) {
                                this._gc && this._enabled(!0, !1);
                                var tween, isComplete, next, callback, internalForce, cycleDuration, pauseTween, curTime, prevTime = this._time,
                                    totalDur = this._dirty ? this.totalDuration() : this._totalDuration,
                                    dur = this._duration,
                                    prevTotalTime = this._totalTime,
                                    prevStart = this._startTime,
                                    prevTimeScale = this._timeScale,
                                    prevRawPrevTime = this._rawPrevTime,
                                    prevPaused = this._paused,
                                    prevCycle = this._cycle;
                                if (prevTime !== this._time && (time += this._time - prevTime), time >= totalDur - 1e-7 && time >= 0) this._locked || (this._totalTime = totalDur, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (isComplete = !0, callback = "onComplete", internalForce = !!this._timeline.autoRemoveChildren, 0 === this._duration && (time <= 0 && time >= -1e-7 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) && prevRawPrevTime !== time && this._first && (internalForce = !0, prevRawPrevTime > _tinyNum && (callback = "onReverseComplete"))), this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum, this._yoyo && 0 !== (1 & this._cycle) ? this._time = time = 0 : (this._time = dur, time = dur + 1e-4);
                                else if (time < 1e-7)
                                    if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== prevTime || 0 === dur && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || time < 0 && prevRawPrevTime >= 0) && !this._locked) && (callback = "onReverseComplete", isComplete = this._reversed), time < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (internalForce = isComplete = !0, callback = "onReverseComplete") : prevRawPrevTime >= 0 && this._first && (internalForce = !0), this._rawPrevTime = time;
                                    else {
                                        if (this._rawPrevTime = dur || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum, 0 === time && isComplete)
                                            for (tween = this._first; tween && 0 === tween._startTime;) tween._duration || (isComplete = !1), tween = tween._next;
                                        time = 0, this._initted || (internalForce = !0)
                                    }
                                else if (0 === dur && prevRawPrevTime < 0 && (internalForce = !0), this._time = this._rawPrevTime = time, this._locked || (this._totalTime = time, 0 !== this._repeat && (cycleDuration = dur + this._repeatDelay, this._cycle = this._totalTime / cycleDuration >> 0, 0 !== this._cycle && this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time && this._cycle--, this._time = this._totalTime - this._cycle * cycleDuration, this._yoyo && 0 !== (1 & this._cycle) && (this._time = dur - this._time), this._time > dur ? (this._time = dur, time = dur + 1e-4) : this._time < 0 ? this._time = time = 0 : time = this._time)), this._hasPause && !this._forcingPlayhead && !suppressEvents) {
                                    if (time = this._time, time >= prevTime || this._repeat && prevCycle !== this._cycle)
                                        for (tween = this._first; tween && tween._startTime <= time && !pauseTween;) tween._duration || "isPause" !== tween.data || tween.ratio || 0 === tween._startTime && 0 === this._rawPrevTime || (pauseTween = tween), tween = tween._next;
                                    else
                                        for (tween = this._last; tween && tween._startTime >= time && !pauseTween;) tween._duration || "isPause" === tween.data && tween._rawPrevTime > 0 && (pauseTween = tween), tween = tween._prev;
                                    pauseTween && pauseTween._startTime < dur && (this._time = time = pauseTween._startTime, this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay))
                                }
                                if (this._cycle !== prevCycle && !this._locked) {
                                    var backwards = this._yoyo && 0 !== (1 & prevCycle),
                                        wrap = backwards === (this._yoyo && 0 !== (1 & this._cycle)),
                                        recTotalTime = this._totalTime,
                                        recCycle = this._cycle,
                                        recRawPrevTime = this._rawPrevTime,
                                        recTime = this._time;
                                    if (this._totalTime = prevCycle * dur, this._cycle < prevCycle ? backwards = !backwards : this._totalTime += dur, this._time = prevTime, this._rawPrevTime = 0 === dur ? prevRawPrevTime - 1e-4 : prevRawPrevTime, this._cycle = prevCycle, this._locked = !0, prevTime = backwards ? 0 : dur, this.render(prevTime, suppressEvents, 0 === dur), suppressEvents || this._gc || this.vars.onRepeat && (this._cycle = recCycle, this._locked = !1, this._callback("onRepeat")), prevTime !== this._time) return;
                                    if (wrap && (this._cycle = prevCycle, this._locked = !0, prevTime = backwards ? dur + 1e-4 : -1e-4, this.render(prevTime, !0, !1)), this._locked = !1, this._paused && !prevPaused) return;
                                    this._time = recTime, this._totalTime = recTotalTime, this._cycle = recCycle, this._rawPrevTime = recRawPrevTime
                                }
                                if (!(this._time !== prevTime && this._first || force || internalForce || pauseTween)) return void(prevTotalTime !== this._totalTime && this._onUpdate && (suppressEvents || this._callback("onUpdate")));
                                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== prevTotalTime && time > 0 && (this._active = !0), 0 === prevTotalTime && this.vars.onStart && (0 === this._totalTime && this._totalDuration || suppressEvents || this._callback("onStart")), curTime = this._time, curTime >= prevTime)
                                    for (tween = this._first; tween && (next = tween._next, curTime === this._time && (!this._paused || prevPaused));)(tween._active || tween._startTime <= this._time && !tween._paused && !tween._gc) && (pauseTween === tween && this.pause(), tween._reversed ? tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, suppressEvents, force) : tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force)), tween = next;
                                else
                                    for (tween = this._last; tween && (next = tween._prev, curTime === this._time && (!this._paused || prevPaused));) {
                                        if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
                                            if (pauseTween === tween) {
                                                for (pauseTween = tween._prev; pauseTween && pauseTween.endTime() > this._time;) pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force), pauseTween = pauseTween._prev;
                                                pauseTween = null, this.pause()
                                            }
                                            tween._reversed ? tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, suppressEvents, force) : tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force)
                                        }
                                        tween = next
                                    }
                                this._onUpdate && (suppressEvents || (_lazyTweens.length && _lazyRender(), this._callback("onUpdate"))), callback && (this._locked || this._gc || prevStart !== this._startTime && prevTimeScale === this._timeScale || (0 === this._time || totalDur >= this.totalDuration()) && (isComplete && (_lazyTweens.length && _lazyRender(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !suppressEvents && this.vars[callback] && this._callback(callback)))
                            }, p.getActive = function(nested, tweens, timelines) {
                                null == nested && (nested = !0), null == tweens && (tweens = !0), null == timelines && (timelines = !1);
                                var i, tween, a = [],
                                    all = this.getChildren(nested, tweens, timelines),
                                    cnt = 0,
                                    l = all.length;
                                for (i = 0; i < l; i++) tween = all[i], tween.isActive() && (a[cnt++] = tween);
                                return a
                            }, p.getLabelAfter = function(time) {
                                time || 0 !== time && (time = this._time);
                                var i, labels = this.getLabelsArray(),
                                    l = labels.length;
                                for (i = 0; i < l; i++)
                                    if (labels[i].time > time) return labels[i].name;
                                return null
                            }, p.getLabelBefore = function(time) {
                                null == time && (time = this._time);
                                for (var labels = this.getLabelsArray(), i = labels.length; --i > -1;)
                                    if (labels[i].time < time) return labels[i].name;
                                return null
                            }, p.getLabelsArray = function() {
                                var p, a = [],
                                    cnt = 0;
                                for (p in this._labels) a[cnt++] = {
                                    time: this._labels[p],
                                    name: p
                                };
                                return a.sort(function(a, b) {
                                    return a.time - b.time
                                }), a
                            }, p.invalidate = function() {
                                return this._locked = !1, TimelineLite.prototype.invalidate.call(this)
                            }, p.progress = function(value, suppressEvents) {
                                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), suppressEvents) : this._time / this.duration() || 0
                            }, p.totalProgress = function(value, suppressEvents) {
                                return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this._totalTime / this.totalDuration() || 0
                            }, p.totalDuration = function(value) {
                                return arguments.length ? this._repeat !== -1 && value ? this.timeScale(this.totalDuration() / value) : this : (this._dirty && (TimelineLite.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                            }, p.time = function(value, suppressEvents) {
                                return arguments.length ? (this._dirty && this.totalDuration(), value > this._duration && (value = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? value = this._duration - value + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (value += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(value, suppressEvents)) : this._time
                            }, p.repeat = function(value) {
                                return arguments.length ? (this._repeat = value, this._uncache(!0)) : this._repeat
                            }, p.repeatDelay = function(value) {
                                return arguments.length ? (this._repeatDelay = value, this._uncache(!0)) : this._repeatDelay
                            }, p.yoyo = function(value) {
                                return arguments.length ? (this._yoyo = value, this) : this._yoyo
                            }, p.currentLabel = function(value) {
                                return arguments.length ? this.seek(value, !0) : this.getLabelBefore(this._time + 1e-8)
                            }, TimelineMax
                    }, !0),
                    function() {
                        var _RAD2DEG = 180 / Math.PI,
                            _r1 = [],
                            _r2 = [],
                            _r3 = [],
                            _corProps = {},
                            _globals = _gsScope._gsDefine.globals,
                            Segment = function(a, b, c, d) {
                                c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                            },
                            _correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                            cubicToQuadratic = function(a, b, c, d) {
                                var q1 = {
                                        a: a
                                    },
                                    q2 = {},
                                    q3 = {},
                                    q4 = {
                                        c: d
                                    },
                                    mab = (a + b) / 2,
                                    mbc = (b + c) / 2,
                                    mcd = (c + d) / 2,
                                    mabc = (mab + mbc) / 2,
                                    mbcd = (mbc + mcd) / 2,
                                    m8 = (mbcd - mabc) / 8;
                                return q1.b = mab + (a - mab) / 4, q2.b = mabc + m8, q1.c = q2.a = (q1.b + q2.b) / 2, q2.c = q3.a = (mabc + mbcd) / 2, q3.b = mbcd - m8, q4.b = mcd + (d - mcd) / 4, q3.c = q4.a = (q3.b + q4.b) / 2, [q1, q2, q3, q4]
                            },
                            _calculateControlPoints = function(a, curviness, quad, basic, correlate) {
                                var i, p1, p2, p3, seg, m1, m2, mm, cp2, qb, r1, r2, tl, l = a.length - 1,
                                    ii = 0,
                                    cp1 = a[0].a;
                                for (i = 0; i < l; i++) seg = a[ii], p1 = seg.a, p2 = seg.d, p3 = a[ii + 1].d, correlate ? (r1 = _r1[i], r2 = _r2[i], tl = (r2 + r1) * curviness * .25 / (basic ? .5 : _r3[i] || .5), m1 = p2 - (p2 - p1) * (basic ? .5 * curviness : 0 !== r1 ? tl / r1 : 0), m2 = p2 + (p3 - p2) * (basic ? .5 * curviness : 0 !== r2 ? tl / r2 : 0), mm = p2 - (m1 + ((m2 - m1) * (3 * r1 / (r1 + r2) + .5) / 4 || 0))) : (m1 = p2 - (p2 - p1) * curviness * .5, m2 = p2 + (p3 - p2) * curviness * .5, mm = p2 - (m1 + m2) / 2), m1 += mm, m2 += mm, seg.c = cp2 = m1, 0 !== i ? seg.b = cp1 : seg.b = cp1 = seg.a + .6 * (seg.c - seg.a), seg.da = p2 - p1, seg.ca = cp2 - p1, seg.ba = cp1 - p1, quad ? (qb = cubicToQuadratic(p1, cp1, cp2, p2), a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]), ii += 4) : ii++, cp1 = m2;
                                seg = a[ii], seg.b = cp1, seg.c = cp1 + .4 * (seg.d - cp1), seg.da = seg.d - seg.a, seg.ca = seg.c - seg.a, seg.ba = cp1 - seg.a, quad && (qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d), a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]))
                            },
                            _parseAnchors = function(values, p, correlate, prepend) {
                                var l, i, p1, p2, p3, tmp, a = [];
                                if (prepend)
                                    for (values = [prepend].concat(values), i = values.length; --i > -1;) "string" == typeof(tmp = values[i][p]) && "=" === tmp.charAt(1) && (values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)));
                                if (l = values.length - 2, l < 0) return a[0] = new Segment(values[0][p], 0, 0, values[0][p]), a;
                                for (i = 0; i < l; i++) p1 = values[i][p], p2 = values[i + 1][p], a[i] = new Segment(p1, 0, 0, p2), correlate && (p3 = values[i + 2][p], _r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1), _r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2));
                                return a[i] = new Segment(values[i][p], 0, 0, values[i + 1][p]), a
                            },
                            bezierThrough = function(values, curviness, quadratic, basic, correlate, prepend) {
                                var i, p, a, j, r, l, seamless, last, obj = {},
                                    props = [],
                                    first = prepend || values[0];
                                correlate = "string" == typeof correlate ? "," + correlate + "," : _correlate, null == curviness && (curviness = 1);
                                for (p in values[0]) props.push(p);
                                if (values.length > 1) {
                                    for (last = values[values.length - 1], seamless = !0, i = props.length; --i > -1;)
                                        if (p = props[i], Math.abs(first[p] - last[p]) > .05) {
                                            seamless = !1;
                                            break
                                        } seamless && (values = values.concat(), prepend && values.unshift(prepend), values.push(values[1]), prepend = values[values.length - 3])
                                }
                                for (_r1.length = _r2.length = _r3.length = 0, i = props.length; --i > -1;) p = props[i], _corProps[p] = correlate.indexOf("," + p + ",") !== -1, obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
                                for (i = _r1.length; --i > -1;) _r1[i] = Math.sqrt(_r1[i]), _r2[i] = Math.sqrt(_r2[i]);
                                if (!basic) {
                                    for (i = props.length; --i > -1;)
                                        if (_corProps[p])
                                            for (a = obj[props[i]], l = a.length - 1, j = 0; j < l; j++) r = a[j + 1].da / _r2[j] + a[j].da / _r1[j] || 0, _r3[j] = (_r3[j] || 0) + r * r;
                                    for (i = _r3.length; --i > -1;) _r3[i] = Math.sqrt(_r3[i])
                                }
                                for (i = props.length, j = quadratic ? 4 : 1; --i > -1;) p = props[i], a = obj[p], _calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]), seamless && (a.splice(0, j), a.splice(a.length - j, j));
                                return obj
                            },
                            _parseBezierData = function(values, type, prepend) {
                                type = type || "soft";
                                var a, b, c, d, cur, i, j, l, p, cnt, tmp, obj = {},
                                    inc = "cubic" === type ? 3 : 2,
                                    soft = "soft" === type,
                                    props = [];
                                if (soft && prepend && (values = [prepend].concat(values)), null == values || values.length < inc + 1) throw "invalid Bezier data";
                                for (p in values[0]) props.push(p);
                                for (i = props.length; --i > -1;) {
                                    for (p = props[i], obj[p] = cur = [], cnt = 0, l = values.length, j = 0; j < l; j++) a = null == prepend ? values[j][p] : "string" == typeof(tmp = values[j][p]) && "=" === tmp.charAt(1) ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp), soft && j > 1 && j < l - 1 && (cur[cnt++] = (a + cur[cnt - 2]) / 2), cur[cnt++] = a;
                                    for (l = cnt - inc + 1, cnt = 0, j = 0; j < l; j += inc) a = cur[j], b = cur[j + 1], c = cur[j + 2], d = 2 === inc ? 0 : cur[j + 3], cur[cnt++] = tmp = 3 === inc ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
                                    cur.length = cnt
                                }
                                return obj
                            },
                            _addCubicLengths = function(a, steps, resolution) {
                                for (var d, d1, s, da, ca, ba, p, i, inv, bez, index, inc = 1 / resolution, j = a.length; --j > -1;)
                                    for (bez = a[j], s = bez.a, da = bez.d - s, ca = bez.c - s, ba = bez.b - s, d = d1 = 0, i = 1; i <= resolution; i++) p = inc * i, inv = 1 - p, d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p), index = j * resolution + i - 1, steps[index] = (steps[index] || 0) + d * d
                            },
                            _parseLengthData = function(obj, resolution) {
                                resolution = resolution >> 0 || 6;
                                var p, i, l, index, a = [],
                                    lengths = [],
                                    d = 0,
                                    total = 0,
                                    threshold = resolution - 1,
                                    segments = [],
                                    curLS = [];
                                for (p in obj) _addCubicLengths(obj[p], a, resolution);
                                for (l = a.length, i = 0; i < l; i++) d += Math.sqrt(a[i]), index = i % resolution, curLS[index] = d, index === threshold && (total += d, index = i / resolution >> 0, segments[index] = curLS, lengths[index] = total, d = 0, curLS = []);
                                return {
                                    length: total,
                                    lengths: lengths,
                                    segments: segments
                                }
                            },
                            BezierPlugin = _gsScope._gsDefine.plugin({
                                propName: "bezier",
                                priority: -1,
                                version: "1.3.8",
                                API: 2,
                                global: !0,
                                init: function(target, vars, tween) {
                                    this._target = target, vars instanceof Array && (vars = {
                                        values: vars
                                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == vars.timeResolution ? 6 : parseInt(vars.timeResolution, 10);
                                    var p, isFunc, i, j, prepend, values = vars.values || [],
                                        first = {},
                                        second = values[0],
                                        autoRotate = vars.autoRotate || tween.vars.orientToBezier;
                                    this._autoRotate = autoRotate ? autoRotate instanceof Array ? autoRotate : [
                                        ["x", "y", "rotation", autoRotate === !0 ? 0 : Number(autoRotate) || 0]
                                    ] : null;
                                    for (p in second) this._props.push(p);
                                    for (i = this._props.length; --i > -1;) p = this._props[i], this._overwriteProps.push(p), isFunc = this._func[p] = "function" == typeof target[p], first[p] = isFunc ? target[p.indexOf("set") || "function" != typeof target["get" + p.substr(3)] ? p : "get" + p.substr(3)]() : parseFloat(target[p]), prepend || first[p] !== values[0][p] && (prepend = first);
                                    if (this._beziers = "cubic" !== vars.type && "quadratic" !== vars.type && "soft" !== vars.type ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, !1, "thruBasic" === vars.type, vars.correlate, prepend) : _parseBezierData(values, vars.type, first), this._segCount = this._beziers[p].length, this._timeRes) {
                                        var ld = _parseLengthData(this._beziers, this._timeRes);
                                        this._length = ld.length, this._lengths = ld.lengths, this._segments = ld.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                    }
                                    if (autoRotate = this._autoRotate)
                                        for (this._initialRotations = [], autoRotate[0] instanceof Array || (this._autoRotate = autoRotate = [autoRotate]), i = autoRotate.length; --i > -1;) {
                                            for (j = 0; j < 3; j++) p = autoRotate[i][j], this._func[p] = "function" == typeof target[p] && target[p.indexOf("set") || "function" != typeof target["get" + p.substr(3)] ? p : "get" + p.substr(3)];
                                            p = autoRotate[i][2], this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0, this._overwriteProps.push(p)
                                        }
                                    return this._startRatio = tween.vars.runBackwards ? 1 : 0, !0
                                },
                                set: function(v) {
                                    var curIndex, inv, i, p, b, t, val, l, lengths, curSeg, segments = this._segCount,
                                        func = this._func,
                                        target = this._target,
                                        notStart = v !== this._startRatio;
                                    if (this._timeRes) {
                                        if (lengths = this._lengths, curSeg = this._curSeg, v *= this._length, i = this._li, v > this._l2 && i < segments - 1) {
                                            for (l = segments - 1; i < l && (this._l2 = lengths[++i]) <= v;);
                                            this._l1 = lengths[i - 1], this._li = i, this._curSeg = curSeg = this._segments[i], this._s2 = curSeg[this._s1 = this._si = 0]
                                        } else if (v < this._l1 && i > 0) {
                                            for (; i > 0 && (this._l1 = lengths[--i]) >= v;);
                                            0 === i && v < this._l1 ? this._l1 = 0 : i++, this._l2 = lengths[i], this._li = i, this._curSeg = curSeg = this._segments[i], this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0, this._s2 = curSeg[this._si]
                                        }
                                        if (curIndex = i, v -= this._l1, i = this._si, v > this._s2 && i < curSeg.length - 1) {
                                            for (l = curSeg.length - 1; i < l && (this._s2 = curSeg[++i]) <= v;);
                                            this._s1 = curSeg[i - 1], this._si = i
                                        } else if (v < this._s1 && i > 0) {
                                            for (; i > 0 && (this._s1 = curSeg[--i]) >= v;);
                                            0 === i && v < this._s1 ? this._s1 = 0 : i++, this._s2 = curSeg[i], this._si = i
                                        }
                                        t = (i + (v - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                                    } else curIndex = v < 0 ? 0 : v >= 1 ? segments - 1 : segments * v >> 0, t = (v - curIndex * (1 / segments)) * segments;
                                    for (inv = 1 - t, i = this._props.length; --i > -1;) p = this._props[i], b = this._beziers[p][curIndex], val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a, this._mod[p] && (val = this._mod[p](val, target)), func[p] ? target[p](val) : target[p] = val;
                                    if (this._autoRotate) {
                                        var b2, x1, y1, x2, y2, add, conv, ar = this._autoRotate;
                                        for (i = ar.length; --i > -1;) p = ar[i][2], add = ar[i][3] || 0, conv = ar[i][4] === !0 ? 1 : _RAD2DEG, b = this._beziers[ar[i][0]], b2 = this._beziers[ar[i][1]], b && b2 && (b = b[curIndex], b2 = b2[curIndex], x1 = b.a + (b.b - b.a) * t, x2 = b.b + (b.c - b.b) * t, x1 += (x2 - x1) * t, x2 += (b.c + (b.d - b.c) * t - x2) * t, y1 = b2.a + (b2.b - b2.a) * t, y2 = b2.b + (b2.c - b2.b) * t, y1 += (y2 - y1) * t, y2 += (b2.c + (b2.d - b2.c) * t - y2) * t, val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i], this._mod[p] && (val = this._mod[p](val, target)), func[p] ? target[p](val) : target[p] = val)
                                    }
                                }
                            }),
                            p = BezierPlugin.prototype;
                        BezierPlugin.bezierThrough = bezierThrough, BezierPlugin.cubicToQuadratic = cubicToQuadratic, BezierPlugin._autoCSS = !0, BezierPlugin.quadraticToCubic = function(a, b, c) {
                            return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                        }, BezierPlugin._cssRegister = function() {
                            var CSSPlugin = _globals.CSSPlugin;
                            if (CSSPlugin) {
                                var _internals = CSSPlugin._internals,
                                    _parseToProxy = _internals._parseToProxy,
                                    _setPluginRatio = _internals._setPluginRatio,
                                    CSSPropTween = _internals.CSSPropTween;
                                _internals._registerComplexSpecialProp("bezier", {
                                    parser: function(t, e, prop, cssp, pt, plugin) {
                                        e instanceof Array && (e = {
                                            values: e
                                        }), plugin = new BezierPlugin;
                                        var i, p, data, values = e.values,
                                            l = values.length - 1,
                                            pluginValues = [],
                                            v = {};
                                        if (l < 0) return pt;
                                        for (i = 0; i <= l; i++) data = _parseToProxy(t, values[i], cssp, pt, plugin, l !== i), pluginValues[i] = data.end;
                                        for (p in e) v[p] = e[p];
                                        return v.values = pluginValues, pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2), pt.data = data, pt.plugin = plugin, pt.setRatio = _setPluginRatio, 0 === v.autoRotate && (v.autoRotate = !0), !v.autoRotate || v.autoRotate instanceof Array || (i = v.autoRotate === !0 ? 0 : Number(v.autoRotate), v.autoRotate = null != data.end.left ? [
                                            ["left", "top", "rotation", i, !1]
                                        ] : null != data.end.x && [
                                            ["x", "y", "rotation", i, !1]
                                        ]), v.autoRotate && (cssp._transform || cssp._enableTransforms(!1), data.autoRotate = cssp._target._gsTransform, data.proxy.rotation = data.autoRotate.rotation || 0, cssp._overwriteProps.push("rotation")), plugin._onInitTween(data.proxy, v, cssp._tween), pt
                                    }
                                })
                            }
                        }, p._mod = function(lookup) {
                            for (var val, op = this._overwriteProps, i = op.length; --i > -1;) val = lookup[op[i]], val && "function" == typeof val && (this._mod[op[i]] = val)
                        }, p._kill = function(lookup) {
                            var p, i, a = this._props;
                            for (p in this._beziers)
                                if (p in lookup)
                                    for (delete this._beziers[p], delete this._func[p], i = a.length; --i > -1;) a[i] === p && a.splice(i, 1);
                            if (a = this._autoRotate)
                                for (i = a.length; --i > -1;) lookup[a[i][2]] && a.splice(i, 1);
                            return this._super._kill.call(this, lookup)
                        }
                    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(TweenPlugin, TweenLite) {
                        var _hasPriority, _suffixMap, _cs, _overwriteProps, CSSPlugin = function() {
                                TweenPlugin.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = CSSPlugin.prototype.setRatio
                            },
                            _globals = _gsScope._gsDefine.globals,
                            _specialProps = {},
                            p = CSSPlugin.prototype = new TweenPlugin("css");
                        p.constructor = CSSPlugin, CSSPlugin.version = "1.20.4", CSSPlugin.API = 2, CSSPlugin.defaultTransformPerspective = 0, CSSPlugin.defaultSkewType = "compensated", CSSPlugin.defaultSmoothOrigin = !0, p = "px", CSSPlugin.suffixMap = {
                            top: p,
                            right: p,
                            bottom: p,
                            left: p,
                            width: p,
                            height: p,
                            fontSize: p,
                            padding: p,
                            margin: p,
                            perspective: p,
                            lineHeight: ""
                        };
                        var _autoRound, _reqSafariFix, _isSafari, _isFirefox, _isSafariLT6, _ieVers, _target, _index, _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                            _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                            _valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                            _NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                            _suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
                            _opacityExp = /opacity *= *([^)]*)/i,
                            _opacityValExp = /opacity:([^;]*)/i,
                            _alphaFilterExp = /alpha\(opacity *=.+?\)/i,
                            _rgbhslExp = /^(rgb|hsl)/,
                            _capsExp = /([A-Z])/g,
                            _camelExp = /-([a-z])/gi,
                            _urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                            _camelFunc = function(s, g) {
                                return g.toUpperCase()
                            },
                            _horizExp = /(?:Left|Right|Width)/i,
                            _ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                            _ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                            _commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi,
                            _complexExp = /[\s,\(]/i,
                            _DEG2RAD = Math.PI / 180,
                            _RAD2DEG = 180 / Math.PI,
                            _forcePT = {},
                            _dummyElement = {
                                style: {}
                            },
                            _doc = _gsScope.document || {
                                createElement: function() {
                                    return _dummyElement
                                }
                            },
                            _createElement = function(type, ns) {
                                return _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type)
                            },
                            _tempDiv = _createElement("div"),
                            _tempImg = _createElement("img"),
                            _internals = CSSPlugin._internals = {
                                _specialProps: _specialProps
                            },
                            _agent = (_gsScope.navigator || {}).userAgent || "",
                            _supportsOpacity = function() {
                                var i = _agent.indexOf("Android"),
                                    a = _createElement("a");
                                return _isSafari = _agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i + 8, 2)) > 3), _isSafariLT6 = _isSafari && parseFloat(_agent.substr(_agent.indexOf("Version/") + 8, 2)) < 6, _isFirefox = _agent.indexOf("Firefox") !== -1, (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_agent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_agent)) && (_ieVers = parseFloat(RegExp.$1)), !!a && (a.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(a.style.opacity))
                            }(),
                            _getIEOpacity = function(v) {
                                return _opacityExp.test("string" == typeof v ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                            },
                            _log = function(s) {
                                _gsScope.console
                            },
                            _prefixCSS = "",
                            _prefix = "",
                            _checkPropPrefix = function(p, e) {
                                e = e || _tempDiv;
                                var a, i, s = e.style;
                                if (void 0 !== s[p]) return p;
                                for (p = p.charAt(0).toUpperCase() + p.substr(1), a = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === s[a[i] + p];);
                                return i >= 0 ? (_prefix = 3 === i ? "ms" : a[i], _prefixCSS = "-" + _prefix.toLowerCase() + "-", _prefix + p) : null
                            },
                            _getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {},
                            _getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
                                var rv;
                                return _supportsOpacity || "opacity" !== p ? (!calc && t.style[p] ? rv = t.style[p] : (cs = cs || _getComputedStyle(t)) ? rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase()) : t.currentStyle && (rv = t.currentStyle[p]), null == dflt || rv && "none" !== rv && "auto" !== rv && "auto auto" !== rv ? rv : dflt) : _getIEOpacity(t)
                            },
                            _convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
                                if ("px" === sfx || !sfx && "lineHeight" !== p) return v;
                                if ("auto" === sfx || !v) return 0;
                                var pix, cache, time, horiz = _horizExp.test(p),
                                    node = t,
                                    style = _tempDiv.style,
                                    neg = v < 0,
                                    precise = 1 === v;
                                if (neg && (v = -v), precise && (v *= 100), "lineHeight" !== p || sfx)
                                    if ("%" === sfx && p.indexOf("border") !== -1) pix = v / 100 * (horiz ? t.clientWidth : t.clientHeight);
                                    else {
                                        if (style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;", "%" !== sfx && node.appendChild && "v" !== sfx.charAt(0) && "rem" !== sfx) style[horiz ? "borderLeftWidth" : "borderTopWidth"] = v + sfx;
                                        else {
                                            if (node = t.parentNode || _doc.body, _getStyle(node, "display").indexOf("flex") !== -1 && (style.position = "absolute"), cache = node._gsCache, time = TweenLite.ticker.frame, cache && horiz && cache.time === time) return cache.width * v / 100;
                                            style[horiz ? "width" : "height"] = v + sfx
                                        }
                                        node.appendChild(_tempDiv), pix = parseFloat(_tempDiv[horiz ? "offsetWidth" : "offsetHeight"]), node.removeChild(_tempDiv), horiz && "%" === sfx && CSSPlugin.cacheWidths !== !1 && (cache = node._gsCache = node._gsCache || {}, cache.time = time, cache.width = pix / v * 100), 0 !== pix || recurse || (pix = _convertToPixels(t, p, v, sfx, !0))
                                    }
                                else cache = _getComputedStyle(t).lineHeight, t.style.lineHeight = v, pix = parseFloat(_getComputedStyle(t).lineHeight), t.style.lineHeight = cache;
                                return precise && (pix /= 100), neg ? -pix : pix
                            },
                            _calculateOffset = _internals.calculateOffset = function(t, p, cs) {
                                if ("absolute" !== _getStyle(t, "position", cs)) return 0;
                                var dim = "left" === p ? "Left" : "Top",
                                    v = _getStyle(t, "margin" + dim, cs);
                                return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0)
                            },
                            _getAllStyles = function(t, cs) {
                                var i, tr, p, s = {};
                                if (cs = cs || _getComputedStyle(t, null))
                                    if (i = cs.length)
                                        for (; --i > -1;) p = cs[i], p.indexOf("-transform") !== -1 && _transformPropCSS !== p || (s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p));
                                    else
                                        for (i in cs) i.indexOf("Transform") !== -1 && _transformProp !== i || (s[i] = cs[i]);
                                else if (cs = t.currentStyle || t.style)
                                    for (i in cs) "string" == typeof i && void 0 === s[i] && (s[i.replace(_camelExp, _camelFunc)] = cs[i]);
                                return _supportsOpacity || (s.opacity = _getIEOpacity(t)), tr = _getTransform(t, cs, !1), s.rotation = tr.rotation, s.skewX = tr.skewX, s.scaleX = tr.scaleX, s.scaleY = tr.scaleY, s.x = tr.x, s.y = tr.y, _supports3D && (s.z = tr.z, s.rotationX = tr.rotationX, s.rotationY = tr.rotationY, s.scaleZ = tr.scaleZ), s.filters && delete s.filters, s
                            },
                            _cssDif = function(t, s1, s2, vars, forceLookup) {
                                var val, p, mpt, difs = {},
                                    style = t.style;
                                for (p in s2) "cssText" !== p && "length" !== p && isNaN(p) && (s1[p] !== (val = s2[p]) || forceLookup && forceLookup[p]) && p.indexOf("Origin") === -1 && ("number" != typeof val && "string" != typeof val || (difs[p] = "auto" !== val || "left" !== p && "top" !== p ? "" !== val && "auto" !== val && "none" !== val || "string" != typeof s1[p] || "" === s1[p].replace(_NaNExp, "") ? val : 0 : _calculateOffset(t, p), void 0 !== style[p] && (mpt = new MiniPropTween(style, p, style[p], mpt))));
                                if (vars)
                                    for (p in vars) "className" !== p && (difs[p] = vars[p]);
                                return {
                                    difs: difs,
                                    firstMPT: mpt
                                }
                            },
                            _dimensions = {
                                width: ["Left", "Right"],
                                height: ["Top", "Bottom"]
                            },
                            _margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                            _getDimension = function(t, p, cs) {
                                if ("svg" === (t.nodeName + "").toLowerCase()) return (cs || _getComputedStyle(t))[p] || 0;
                                if (t.getCTM && _isSVG(t)) return t.getBBox()[p] || 0;
                                var v = parseFloat("width" === p ? t.offsetWidth : t.offsetHeight),
                                    a = _dimensions[p],
                                    i = a.length;
                                for (cs = cs || _getComputedStyle(t, null); --i > -1;) v -= parseFloat(_getStyle(t, "padding" + a[i], cs, !0)) || 0, v -= parseFloat(_getStyle(t, "border" + a[i] + "Width", cs, !0)) || 0;
                                return v
                            },
                            _parsePosition = function(v, recObj) {
                                if ("contain" === v || "auto" === v || "auto auto" === v) return v + " ";
                                null != v && "" !== v || (v = "0 0");
                                var i, a = v.split(" "),
                                    x = v.indexOf("left") !== -1 ? "0%" : v.indexOf("right") !== -1 ? "100%" : a[0],
                                    y = v.indexOf("top") !== -1 ? "0%" : v.indexOf("bottom") !== -1 ? "100%" : a[1];
                                if (a.length > 3 && !recObj) {
                                    for (a = v.split(", ").join(",").split(","), v = [], i = 0; i < a.length; i++) v.push(_parsePosition(a[i]));
                                    return v.join(",")
                                }
                                return null == y ? y = "center" === x ? "50%" : "0" : "center" === y && (y = "50%"), ("center" === x || isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1) && (x = "50%"), v = x + " " + y + (a.length > 2 ? " " + a[2] : ""), recObj && (recObj.oxp = x.indexOf("%") !== -1, recObj.oyp = y.indexOf("%") !== -1, recObj.oxr = "=" === x.charAt(1), recObj.oyr = "=" === y.charAt(1), recObj.ox = parseFloat(x.replace(_NaNExp, "")), recObj.oy = parseFloat(y.replace(_NaNExp, "")), recObj.v = v), recObj || v
                            },
                            _parseChange = function(e, b) {
                                return "function" == typeof e && (e = e(_index, _target)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b) || 0
                            },
                            _parseVal = function(v, d) {
                                return "function" == typeof v && (v = v(_index, _target)), null == v ? d : "string" == typeof v && "=" === v.charAt(1) ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0
                            },
                            _parseAngle = function(v, d, p, directionalEnd) {
                                var cap, split, dif, result, isRelative, min = 1e-6;
                                return "function" == typeof v && (v = v(_index, _target)), null == v ? result = d : "number" == typeof v ? result = v : (cap = 360, split = v.split("_"), isRelative = "=" === v.charAt(1), dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * (v.indexOf("rad") === -1 ? 1 : _RAD2DEG) - (isRelative ? 0 : d), split.length && (directionalEnd && (directionalEnd[p] = d + dif), v.indexOf("short") !== -1 && (dif %= cap, dif !== dif % (cap / 2) && (dif = dif < 0 ? dif + cap : dif - cap)), v.indexOf("_cw") !== -1 && dif < 0 ? dif = (dif + 9999999999 * cap) % cap - (dif / cap | 0) * cap : v.indexOf("ccw") !== -1 && dif > 0 && (dif = (dif - 9999999999 * cap) % cap - (dif / cap | 0) * cap)), result = d + dif), result < min && result > -min && (result = 0), result
                            },
                            _colorLookup = {
                                aqua: [0, 255, 255],
                                lime: [0, 255, 0],
                                silver: [192, 192, 192],
                                black: [0, 0, 0],
                                maroon: [128, 0, 0],
                                teal: [0, 128, 128],
                                blue: [0, 0, 255],
                                navy: [0, 0, 128],
                                white: [255, 255, 255],
                                fuchsia: [255, 0, 255],
                                olive: [128, 128, 0],
                                yellow: [255, 255, 0],
                                orange: [255, 165, 0],
                                gray: [128, 128, 128],
                                purple: [128, 0, 128],
                                green: [0, 128, 0],
                                red: [255, 0, 0],
                                pink: [255, 192, 203],
                                cyan: [0, 255, 255],
                                transparent: [255, 255, 255, 0]
                            },
                            _hue = function(h, m1, m2) {
                                return h = h < 0 ? h + 1 : h > 1 ? h - 1 : h, 255 * (6 * h < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : 3 * h < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) + .5 | 0
                            },
                            _parseColor = CSSPlugin.parseColor = function(v, toHSL) {
                                var a, r, g, b, h, s, l, max, min, d, wasHSL;
                                if (v)
                                    if ("number" == typeof v) a = [v >> 16, v >> 8 & 255, 255 & v];
                                    else {
                                        if ("," === v.charAt(v.length - 1) && (v = v.substr(0, v.length - 1)), _colorLookup[v]) a = _colorLookup[v];
                                        else if ("#" === v.charAt(0)) 4 === v.length && (r = v.charAt(1), g = v.charAt(2), b = v.charAt(3), v = "#" + r + r + g + g + b + b), v = parseInt(v.substr(1), 16), a = [v >> 16, v >> 8 & 255, 255 & v];
                                        else if ("hsl" === v.substr(0, 3))
                                            if (a = wasHSL = v.match(_numExp), toHSL) {
                                                if (v.indexOf("=") !== -1) return v.match(_relNumExp)
                                            } else h = Number(a[0]) % 360 / 360, s = Number(a[1]) / 100, l = Number(a[2]) / 100, g = l <= .5 ? l * (s + 1) : l + s - l * s, r = 2 * l - g, a.length > 3 && (a[3] = Number(a[3])), a[0] = _hue(h + 1 / 3, r, g), a[1] = _hue(h, r, g), a[2] = _hue(h - 1 / 3, r, g);
                                        else a = v.match(_numExp) || _colorLookup.transparent;
                                        a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), a.length > 3 && (a[3] = Number(a[3]))
                                    }
                                else a = _colorLookup.black;
                                return toHSL && !wasHSL && (r = a[0] / 255, g = a[1] / 255, b = a[2] / 255, max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, max === min ? h = s = 0 : (d = max - min, s = l > .5 ? d / (2 - max - min) : d / (max + min), h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4, h *= 60), a[0] = h + .5 | 0, a[1] = 100 * s + .5 | 0, a[2] = 100 * l + .5 | 0), a
                            },
                            _formatColors = function(s, toHSL) {
                                var i, color, temp, colors = s.match(_colorExp) || [],
                                    charIndex = 0,
                                    parsed = "";
                                if (!colors.length) return s;
                                for (i = 0; i < colors.length; i++) color = colors[i], temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex), charIndex += temp.length + color.length, color = _parseColor(color, toHSL), 3 === color.length && color.push(1), parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
                                return parsed + s.substr(charIndex)
                            },
                            _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                        for (p in _colorLookup) _colorExp += "|" + p + "\\b";
                        _colorExp = new RegExp(_colorExp + ")", "gi"), CSSPlugin.colorStringFilter = function(a) {
                            var toHSL, combined = a[0] + " " + a[1];
                            _colorExp.test(combined) && (toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1, a[0] = _formatColors(a[0], toHSL), a[1] = _formatColors(a[1], toHSL)), _colorExp.lastIndex = 0
                        }, TweenLite.defaultStringFilter || (TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter);
                        var _getFormatter = function(dflt, clr, collapsible, multi) {
                                if (null == dflt) return function(v) {
                                    return v
                                };
                                var formatter, dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
                                    dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
                                    pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
                                    sfx = ")" === dflt.charAt(dflt.length - 1) ? ")" : "",
                                    delim = dflt.indexOf(" ") !== -1 ? " " : ",",
                                    numVals = dVals.length,
                                    dSfx = numVals > 0 ? dVals[0].replace(_numExp, "") : "";
                                return numVals ? formatter = clr ? function(v) {
                                    var color, vals, i, a;
                                    if ("number" == typeof v) v += dSfx;
                                    else if (multi && _commasOutsideParenExp.test(v)) {
                                        for (a = v.replace(_commasOutsideParenExp, "|").split("|"), i = 0; i < a.length; i++) a[i] = formatter(a[i]);
                                        return a.join(",")
                                    }
                                    if (color = (v.match(_colorExp) || [dColor])[0], vals = v.split(color).join("").match(_valuesExp) || [], i = vals.length, numVals > i--)
                                        for (; ++i < numVals;) vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
                                    return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "")
                                } : function(v) {
                                    var vals, a, i;
                                    if ("number" == typeof v) v += dSfx;
                                    else if (multi && _commasOutsideParenExp.test(v)) {
                                        for (a = v.replace(_commasOutsideParenExp, "|").split("|"), i = 0; i < a.length; i++) a[i] = formatter(a[i]);
                                        return a.join(",")
                                    }
                                    if (vals = v.match(_valuesExp) || [], i = vals.length, numVals > i--)
                                        for (; ++i < numVals;) vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
                                    return pfx + vals.join(delim) + sfx
                                } : function(v) {
                                    return v
                                }
                            },
                            _getEdgeParser = function(props) {
                                return props = props.split(","),
                                    function(t, e, p, cssp, pt, plugin, vars) {
                                        var i, a = (e + "").split(" ");
                                        for (vars = {}, i = 0; i < 4; i++) vars[props[i]] = a[i] = a[i] || a[(i - 1) / 2 >> 0];
                                        return cssp.parse(t, vars, pt, plugin)
                                    }
                            },
                            MiniPropTween = (_internals._setPluginRatio = function(v) {
                                this.plugin.setRatio(v);
                                for (var val, pt, i, str, p, d = this.data, proxy = d.proxy, mpt = d.firstMPT, min = 1e-6; mpt;) val = proxy[mpt.v], mpt.r ? val = Math.round(val) : val < min && val > -min && (val = 0), mpt.t[mpt.p] = val, mpt = mpt._next;
                                if (d.autoRotate && (d.autoRotate.rotation = d.mod ? d.mod(proxy.rotation, this.t) : proxy.rotation), 1 === v || 0 === v)
                                    for (mpt = d.firstMPT, p = 1 === v ? "e" : "b"; mpt;) {
                                        if (pt = mpt.t, pt.type) {
                                            if (1 === pt.type) {
                                                for (str = pt.xs0 + pt.s + pt.xs1, i = 1; i < pt.l; i++) str += pt["xn" + i] + pt["xs" + (i + 1)];
                                                pt[p] = str
                                            }
                                        } else pt[p] = pt.s + pt.xs0;
                                        mpt = mpt._next
                                    }
                            }, function(t, p, v, next, r) {
                                this.t = t, this.p = p, this.v = v, this.r = r, next && (next._prev = this, this._next = next)
                            }),
                            CSSPropTween = (_internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
                                var i, p, xp, mpt, firstPT, bpt = pt,
                                    start = {},
                                    end = {},
                                    transform = cssp._transform,
                                    oldForce = _forcePT;
                                for (cssp._transform = null, _forcePT = vars, pt = firstPT = cssp.parse(t, vars, pt, plugin), _forcePT = oldForce, shallow && (cssp._transform = transform, bpt && (bpt._prev = null, bpt._prev && (bpt._prev._next = null))); pt && pt !== bpt;) {
                                    if (pt.type <= 1 && (p = pt.p, end[p] = pt.s + pt.c, start[p] = pt.s, shallow || (mpt = new MiniPropTween(pt, "s", p, mpt, pt.r), pt.c = 0), 1 === pt.type))
                                        for (i = pt.l; --i > 0;) xp = "xn" + i, p = pt.p + "_" + xp, end[p] = pt.data[xp], start[p] = pt[xp], shallow || (mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]));
                                    pt = pt._next
                                }
                                return {
                                    proxy: start,
                                    end: end,
                                    firstMPT: mpt,
                                    pt: firstPT
                                }
                            }, _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
                                this.t = t, this.p = p, this.s = s, this.c = c, this.n = n || p, t instanceof CSSPropTween || _overwriteProps.push(this.n), this.r = r, this.type = type || 0, pr && (this.pr = pr, _hasPriority = !0), this.b = void 0 === b ? s : b, this.e = void 0 === e ? s + c : e, next && (this._next = next, next._prev = this)
                            }),
                            _addNonTweeningNumericPT = function(target, prop, start, end, next, overwriteProp) {
                                var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
                                return pt.b = start, pt.e = pt.xs0 = end, pt
                            },
                            _parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
                                b = b || dflt || "", "function" == typeof e && (e = e(_index, _target)), pt = new CSSPropTween(t, p, 0, 0, pt, setRatio ? 2 : 1, null, !1, pr, b, e), e += "", clrs && _colorExp.test(e + b) && (e = [b, e], CSSPlugin.colorStringFilter(e), b = e[0], e = e[1]);
                                var i, xi, ni, bv, ev, bnums, enums, bn, hasAlpha, temp, cv, str, useHSL, ba = b.split(", ").join(",").split(" "),
                                    ea = e.split(", ").join(",").split(" "),
                                    l = ba.length,
                                    autoRound = _autoRound !== !1;
                                for (e.indexOf(",") === -1 && b.indexOf(",") === -1 || ((e + b).indexOf("rgb") !== -1 || (e + b).indexOf("hsl") !== -1 ? (ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" "), ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ")) : (ba = ba.join(" ").split(",").join(", ").split(" "), ea = ea.join(" ").split(",").join(", ").split(" ")), l = ba.length), l !== ea.length && (ba = (dflt || "").split(" "), l = ba.length), pt.plugin = plugin, pt.setRatio = setRatio, _colorExp.lastIndex = 0, i = 0; i < l; i++)
                                    if (bv = ba[i], ev = ea[i], bn = parseFloat(bv), bn || 0 === bn) pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), autoRound && ev.indexOf("px") !== -1, !0);
                                    else if (clrs && _colorExp.test(bv)) str = ev.indexOf(")") + 1, str = ")" + (str ? ev.substr(str) : ""), useHSL = ev.indexOf("hsl") !== -1 && _supportsOpacity, temp = ev, bv = _parseColor(bv, useHSL), ev = _parseColor(ev, useHSL), hasAlpha = bv.length + ev.length > 6, hasAlpha && !_supportsOpacity && 0 === ev[3] ? (pt["xs" + pt.l] += pt.l ? " transparent" : "transparent", pt.e = pt.e.split(ea[i]).join("transparent")) : (_supportsOpacity || (hasAlpha = !1), useHSL ? pt.appendXtra(temp.substr(0, temp.indexOf("hsl")) + (hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", !1, !0).appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", !1).appendXtra("", bv[2], _parseChange(ev[2], bv[2]), hasAlpha ? "%," : "%" + str, !1) : pt.appendXtra(temp.substr(0, temp.indexOf("rgb")) + (hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", !0, !0).appendXtra("", bv[1], ev[1] - bv[1], ",", !0).appendXtra("", bv[2], ev[2] - bv[2], hasAlpha ? "," : str, !0), hasAlpha && (bv = bv.length < 4 ? 1 : bv[3], pt.appendXtra("", bv, (ev.length < 4 ? 1 : ev[3]) - bv, str, !1))), _colorExp.lastIndex = 0;
                                else if (bnums = bv.match(_numExp)) {
                                    if (enums = ev.match(_relNumExp), !enums || enums.length !== bnums.length) return pt;
                                    for (ni = 0, xi = 0; xi < bnums.length; xi++) cv = bnums[xi], temp = bv.indexOf(cv, ni), pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", autoRound && "px" === bv.substr(temp + cv.length, 2), 0 === xi), ni = temp + cv.length;
                                    pt["xs" + pt.l] += bv.substr(ni)
                                } else pt["xs" + pt.l] += pt.l || pt["xs" + pt.l] ? " " + ev : ev;
                                if (e.indexOf("=") !== -1 && pt.data) {
                                    for (str = pt.xs0 + pt.data.s, i = 1; i < pt.l; i++) str += pt["xs" + i] + pt.data["xn" + i];
                                    pt.e = str + pt["xs" + i]
                                }
                                return pt.l || (pt.type = -1, pt.xs0 = pt.e), pt.xfirst || pt
                            },
                            i = 9;
                        for (p = CSSPropTween.prototype, p.l = p.pr = 0; --i > 0;) p["xn" + i] = 0, p["xs" + i] = "";
                        p.xs0 = "", p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null, p.appendXtra = function(pfx, s, c, sfx, r, pad) {
                            var pt = this,
                                l = pt.l;
                            return pt["xs" + l] += pad && (l || pt["xs" + l]) ? " " + pfx : pfx || "", c || 0 === l || pt.plugin ? (pt.l++, pt.type = pt.setRatio ? 2 : 1, pt["xs" + pt.l] = sfx || "", l > 0 ? (pt.data["xn" + l] = s + c, pt.rxp["xn" + l] = r, pt["xn" + l] = s, pt.plugin || (pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr), pt.xfirst.xs0 = 0), pt) : (pt.data = {
                                s: s + c
                            }, pt.rxp = {}, pt.s = s, pt.c = c, pt.r = r, pt)) : (pt["xs" + l] += s + (sfx || ""), pt)
                        };
                        var SpecialProp = function(p, options) {
                                options = options || {}, this.p = options.prefix ? _checkPropPrefix(p) || p : p, _specialProps[p] = _specialProps[this.p] = this, this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi), options.parser && (this.parse = options.parser), this.clrs = options.color, this.multi = options.multi, this.keyword = options.keyword, this.dflt = options.defaultValue, this.pr = options.priority || 0
                            },
                            _registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
                                "object" != typeof options && (options = {
                                    parser: defaults
                                });
                                var i, temp, a = p.split(","),
                                    d = options.defaultValue;
                                for (defaults = defaults || [d], i = 0; i < a.length; i++) options.prefix = 0 === i && options.prefix, options.defaultValue = defaults[i] || d, temp = new SpecialProp(a[i], options)
                            },
                            _registerPluginProp = _internals._registerPluginProp = function(p) {
                                if (!_specialProps[p]) {
                                    var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
                                    _registerComplexSpecialProp(p, {
                                        parser: function(t, e, p, cssp, pt, plugin, vars) {
                                            var pluginClass = _globals.com.greensock.plugins[pluginName];
                                            return pluginClass ? (pluginClass._cssRegister(), _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars)) : (_log("Error: " + pluginName + " js file not loaded."), pt)
                                        }
                                    })
                                }
                            };
                        p = SpecialProp.prototype, p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
                            var i, ba, ea, l, bi, ei, kwd = this.keyword;
                            if (this.multi && (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b) ? (ba = b.replace(_commasOutsideParenExp, "|").split("|"), ea = e.replace(_commasOutsideParenExp, "|").split("|")) : kwd && (ba = [b], ea = [e])), ea) {
                                for (l = ea.length > ba.length ? ea.length : ba.length, i = 0; i < l; i++) b = ba[i] = ba[i] || this.dflt, e = ea[i] = ea[i] || this.dflt, kwd && (bi = b.indexOf(kwd), ei = e.indexOf(kwd), bi !== ei && (ei === -1 ? ba[i] = ba[i].split(kwd).join("") : bi === -1 && (ba[i] += " " + kwd)));
                                b = ba.join(", "), e = ea.join(", ")
                            }
                            return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio)
                        }, p.parse = function(t, e, p, cssp, pt, plugin, vars) {
                            return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, !1, this.dflt)), this.format(e), pt, plugin)
                        }, CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
                            _registerComplexSpecialProp(name, {
                                parser: function(t, e, p, cssp, pt, plugin, vars) {
                                    var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, !1, priority);
                                    return rv.plugin = plugin, rv.setRatio = onInitTween(t, e, cssp._tween, p), rv
                                },
                                priority: priority
                            })
                        }, CSSPlugin.useSVGTransformAttr = !0;
                        var _useSVGTransformAttr, _transformProps = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                            _transformProp = _checkPropPrefix("transform"),
                            _transformPropCSS = _prefixCSS + "transform",
                            _transformOriginProp = _checkPropPrefix("transformOrigin"),
                            _supports3D = null !== _checkPropPrefix("perspective"),
                            Transform = _internals.Transform = function() {
                                this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0, this.force3D = !(CSSPlugin.defaultForce3D === !1 || !_supports3D) && (CSSPlugin.defaultForce3D || "auto")
                            },
                            _SVGElement = _gsScope.SVGElement,
                            _createSVG = function(type, container, attributes) {
                                var p, element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
                                    reg = /([a-z])([A-Z])/g;
                                for (p in attributes) element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
                                return container.appendChild(element), element
                            },
                            _docElement = _doc.documentElement || {},
                            _forceSVGTransformAttr = function() {
                                var svg, rect, width, force = _ieVers || /Android/i.test(_agent) && !_gsScope.chrome;
                                return _doc.createElementNS && !force && (svg = _createSVG("svg", _docElement), rect = _createSVG("rect", svg, {
                                    width: 100,
                                    height: 50,
                                    x: 100
                                }), width = rect.getBoundingClientRect().width, rect.style[_transformOriginProp] = "50% 50%", rect.style[_transformProp] = "scaleX(0.5)", force = width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D), _docElement.removeChild(svg)), force
                            }(),
                            _parseSVGOrigin = function(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
                                var v, x, y, xOrigin, yOrigin, a, b, c, d, tx, ty, determinant, xOriginOld, yOriginOld, tm = e._gsTransform,
                                    m = _getMatrix(e, !0);
                                tm && (xOriginOld = tm.xOrigin, yOriginOld = tm.yOrigin), (!absolute || (v = absolute.split(" ")).length < 2) && (b = e.getBBox(), 0 === b.x && 0 === b.y && b.width + b.height === 0 && (b = {
                                    x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                                    y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                                    width: 0,
                                    height: 0
                                }), local = _parsePosition(local).split(" "), v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x, (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y]), decoratee.xOrigin = xOrigin = parseFloat(v[0]), decoratee.yOrigin = yOrigin = parseFloat(v[1]), absolute && m !== _identity2DMatrix && (a = m[0], b = m[1], c = m[2], d = m[3], tx = m[4], ty = m[5], determinant = a * d - b * c, determinant && (x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant, y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant, xOrigin = decoratee.xOrigin = v[0] = x, yOrigin = decoratee.yOrigin = v[1] = y)), tm && (skipRecord && (decoratee.xOffset = tm.xOffset, decoratee.yOffset = tm.yOffset, tm = decoratee), smoothOrigin || smoothOrigin !== !1 && CSSPlugin.defaultSmoothOrigin !== !1 ? (x = xOrigin - xOriginOld, y = yOrigin - yOriginOld, tm.xOffset += x * m[0] + y * m[2] - x, tm.yOffset += x * m[1] + y * m[3] - y) : tm.xOffset = tm.yOffset = 0), skipRecord || e.setAttribute("data-svg-origin", v.join(" "))
                            },
                            _getBBoxHack = function(swapIfPossible) {
                                var bbox, svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                    oldParent = this.parentNode,
                                    oldSibling = this.nextSibling,
                                    oldCSS = this.style.cssText;
                                if (_docElement.appendChild(svg), svg.appendChild(this), this.style.display = "block", swapIfPossible) try {
                                    bbox = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = _getBBoxHack
                                } catch (e) {} else this._originalGetBBox && (bbox = this._originalGetBBox());
                                return oldSibling ? oldParent.insertBefore(this, oldSibling) : oldParent.appendChild(this), _docElement.removeChild(svg), this.style.cssText = oldCSS, bbox
                            },
                            _getBBox = function(e) {
                                try {
                                    return e.getBBox()
                                } catch (error) {
                                    return _getBBoxHack.call(e, !0)
                                }
                            },
                            _isSVG = function(e) {
                                return !(!_SVGElement || !e.getCTM || e.parentNode && !e.ownerSVGElement || !_getBBox(e))
                            },
                            _identity2DMatrix = [1, 0, 0, 1, 0, 0],
                            _getMatrix = function(e, force2D) {
                                var isDefault, s, m, n, dec, none, tm = e._gsTransform || new Transform,
                                    rnd = 1e5,
                                    style = e.style;
                                if (_transformProp ? s = _getStyle(e, _transformPropCSS, null, !0) : e.currentStyle && (s = e.currentStyle.filter.match(_ieGetMatrixExp), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), tm.x || 0, tm.y || 0].join(",") : ""), isDefault = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, !_transformProp || !(none = !_getComputedStyle(e) || "none" === _getComputedStyle(e).display) && e.parentNode || (none && (n = style.display, style.display = "block"), e.parentNode || (dec = 1, _docElement.appendChild(e)), s = _getStyle(e, _transformPropCSS, null, !0), isDefault = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, n ? style.display = n : none && _removeProp(style, "display"), dec && _docElement.removeChild(e)), (tm.svg || e.getCTM && _isSVG(e)) && (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1 && (s = style[_transformProp], isDefault = 0), m = e.getAttribute("transform"), isDefault && m && (m = e.transform.baseVal.consolidate().matrix, s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")", isDefault = 0)), isDefault) return _identity2DMatrix;
                                for (m = (s || "").match(_numExp) || [], i = m.length; --i > -1;) n = Number(m[i]), m[i] = (dec = n - (n |= 0)) ? (dec * rnd + (dec < 0 ? -.5 : .5) | 0) / rnd + n : n;
                                return force2D && m.length > 6 ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m
                            },
                            _getTransform = _internals.getTransform = function(t, cs, rec, parse) {
                                if (t._gsTransform && rec && !parse) return t._gsTransform;
                                var m, i, scaleX, scaleY, rotation, skewX, tm = rec ? t._gsTransform || new Transform : new Transform,
                                    invX = tm.scaleX < 0,
                                    min = 2e-5,
                                    rnd = 1e5,
                                    zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, !1, "0 0 0").split(" ")[2]) || tm.zOrigin || 0 : 0,
                                    defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
                                if (tm.svg = !(!t.getCTM || !_isSVG(t)), tm.svg && (_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, !1, "50% 50%") + "", tm, t.getAttribute("data-svg-origin")), _useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr), m = _getMatrix(t), m !== _identity2DMatrix) {
                                    if (16 === m.length) {
                                        var t1, t2, t3, cos, sin, a11 = m[0],
                                            a21 = m[1],
                                            a31 = m[2],
                                            a41 = m[3],
                                            a12 = m[4],
                                            a22 = m[5],
                                            a32 = m[6],
                                            a42 = m[7],
                                            a13 = m[8],
                                            a23 = m[9],
                                            a33 = m[10],
                                            a14 = m[12],
                                            a24 = m[13],
                                            a34 = m[14],
                                            a43 = m[11],
                                            angle = Math.atan2(a32, a33);
                                        tm.zOrigin && (a34 = -tm.zOrigin, a14 = a13 * a34 - m[12], a24 = a23 * a34 - m[13], a34 = a33 * a34 + tm.zOrigin - m[14]), tm.rotationX = angle * _RAD2DEG, angle && (cos = Math.cos(-angle), sin = Math.sin(-angle), t1 = a12 * cos + a13 * sin, t2 = a22 * cos + a23 * sin, t3 = a32 * cos + a33 * sin, a13 = a12 * -sin + a13 * cos, a23 = a22 * -sin + a23 * cos, a33 = a32 * -sin + a33 * cos, a43 = a42 * -sin + a43 * cos, a12 = t1, a22 = t2, a32 = t3), angle = Math.atan2(-a31, a33), tm.rotationY = angle * _RAD2DEG, angle && (cos = Math.cos(-angle), sin = Math.sin(-angle), t1 = a11 * cos - a13 * sin, t2 = a21 * cos - a23 * sin, t3 = a31 * cos - a33 * sin, a23 = a21 * sin + a23 * cos, a33 = a31 * sin + a33 * cos, a43 = a41 * sin + a43 * cos, a11 = t1, a21 = t2, a31 = t3), angle = Math.atan2(a21, a11), tm.rotation = angle * _RAD2DEG, angle && (cos = Math.cos(angle), sin = Math.sin(angle), t1 = a11 * cos + a21 * sin, t2 = a12 * cos + a22 * sin, t3 = a13 * cos + a23 * sin, a21 = a21 * cos - a11 * sin, a22 = a22 * cos - a12 * sin, a23 = a23 * cos - a13 * sin, a11 = t1, a12 = t2, a13 = t3), tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9 && (tm.rotationX = tm.rotation = 0, tm.rotationY = 180 - tm.rotationY), angle = Math.atan2(a12, a22), tm.scaleX = (Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31) * rnd + .5 | 0) / rnd, tm.scaleY = (Math.sqrt(a22 * a22 + a32 * a32) * rnd + .5 | 0) / rnd, tm.scaleZ = (Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33) * rnd + .5 | 0) / rnd, a11 /= tm.scaleX, a12 /= tm.scaleY, a21 /= tm.scaleX, a22 /= tm.scaleY, Math.abs(angle) > min ? (tm.skewX = angle * _RAD2DEG, a12 = 0, "simple" !== tm.skewType && (tm.scaleY *= 1 / Math.cos(angle))) : tm.skewX = 0, tm.perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0, tm.x = a14, tm.y = a24, tm.z = a34, tm.svg && (tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12), tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22))
                                    } else if (!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || !tm.rotationX && !tm.rotationY) {
                                        var k = m.length >= 6,
                                            a = k ? m[0] : 1,
                                            b = m[1] || 0,
                                            c = m[2] || 0,
                                            d = k ? m[3] : 1;
                                        tm.x = m[4] || 0, tm.y = m[5] || 0, scaleX = Math.sqrt(a * a + b * b), scaleY = Math.sqrt(d * d + c * c), rotation = a || b ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0, skewX = c || d ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0, tm.scaleX = scaleX, tm.scaleY = scaleY, tm.rotation = rotation, tm.skewX = skewX, _supports3D && (tm.rotationX = tm.rotationY = tm.z = 0, tm.perspective = defaultTransformPerspective, tm.scaleZ = 1), tm.svg && (tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c), tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d))
                                    }
                                    Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270 && (invX ? (tm.scaleX *= -1, tm.skewX += tm.rotation <= 0 ? 180 : -180, tm.rotation += tm.rotation <= 0 ? 180 : -180) : (tm.scaleY *= -1, tm.skewX += tm.skewX <= 0 ? 180 : -180)), tm.zOrigin = zOrigin;
                                    for (i in tm) tm[i] < min && tm[i] > -min && (tm[i] = 0)
                                }
                                return rec && (t._gsTransform = tm, tm.svg && (_useSVGTransformAttr && t.style[_transformProp] ? TweenLite.delayedCall(.001, function() {
                                    _removeProp(t.style, _transformProp)
                                }) : !_useSVGTransformAttr && t.getAttribute("transform") && TweenLite.delayedCall(.001, function() {
                                    t.removeAttribute("transform")
                                }))), tm
                            },
                            _setIETransformRatio = function(v) {
                                var filters, val, t = this.data,
                                    ang = -t.rotation * _DEG2RAD,
                                    skew = ang + t.skewX * _DEG2RAD,
                                    rnd = 1e5,
                                    a = (Math.cos(ang) * t.scaleX * rnd | 0) / rnd,
                                    b = (Math.sin(ang) * t.scaleX * rnd | 0) / rnd,
                                    c = (Math.sin(skew) * -t.scaleY * rnd | 0) / rnd,
                                    d = (Math.cos(skew) * t.scaleY * rnd | 0) / rnd,
                                    style = this.t.style,
                                    cs = this.t.currentStyle;
                                if (cs) {
                                    val = b, b = -c, c = -val, filters = cs.filter, style.filter = "";
                                    var dx, dy, w = this.t.offsetWidth,
                                        h = this.t.offsetHeight,
                                        clip = "absolute" !== cs.position,
                                        m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
                                        ox = t.x + w * t.xPercent / 100,
                                        oy = t.y + h * t.yPercent / 100;
                                    if (null != t.ox && (dx = (t.oxp ? w * t.ox * .01 : t.ox) - w / 2, dy = (t.oyp ? h * t.oy * .01 : t.oy) - h / 2, ox += dx - (dx * a + dy * b), oy += dy - (dx * c + dy * d)), clip ? (dx = w / 2, dy = h / 2, m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")") : m += ", sizingMethod='auto expand')", filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? style.filter = filters.replace(_ieSetMatrixExp, m) : style.filter = m + " " + filters, 0 !== v && 1 !== v || 1 === a && 0 === b && 0 === c && 1 === d && (clip && m.indexOf("Dx=0, Dy=0") === -1 || _opacityExp.test(filters) && 100 !== parseFloat(RegExp.$1) || filters.indexOf(filters.indexOf("Alpha")) === -1 && style.removeAttribute("filter")), !clip) {
                                        var marg, prop, dif, mult = _ieVers < 8 ? 1 : -1;
                                        for (dx = t.ieOffsetX || 0, dy = t.ieOffsetY || 0, t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox), t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy), i = 0; i < 4; i++) prop = _margins[i], marg = cs[prop], val = marg.indexOf("px") !== -1 ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0, dif = val !== t[prop] ? i < 2 ? -t.ieOffsetX : -t.ieOffsetY : i < 2 ? dx - t.ieOffsetX : dy - t.ieOffsetY, style[prop] = (t[prop] = Math.round(val - dif * (0 === i || 2 === i ? 1 : mult))) + "px"
                                    }
                                }
                            },
                            _setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
                                var t1, a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43, zOrigin, min, cos, sin, t2, transform, comma, zero, skew, rnd, t = this.data,
                                    style = this.t.style,
                                    angle = t.rotation,
                                    rotationX = t.rotationX,
                                    rotationY = t.rotationY,
                                    sx = t.scaleX,
                                    sy = t.scaleY,
                                    sz = t.scaleZ,
                                    x = t.x,
                                    y = t.y,
                                    z = t.z,
                                    isSVG = t.svg,
                                    perspective = t.perspective,
                                    force3D = t.force3D,
                                    skewY = t.skewY,
                                    skewX = t.skewX;
                                if (skewY && (skewX += skewY, angle += skewY), ((1 === v || 0 === v) && "auto" === force3D && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !force3D) && !z && !perspective && !rotationY && !rotationX && 1 === sz || _useSVGTransformAttr && isSVG || !_supports3D) return void(angle || skewX || isSVG ? (angle *= _DEG2RAD, skew = skewX * _DEG2RAD, rnd = 1e5, a11 = Math.cos(angle) * sx, a21 = Math.sin(angle) * sx, a12 = Math.sin(angle - skew) * -sy, a22 = Math.cos(angle - skew) * sy, skew && "simple" === t.skewType && (t1 = Math.tan(skew - skewY * _DEG2RAD), t1 = Math.sqrt(1 + t1 * t1), a12 *= t1, a22 *= t1, skewY && (t1 = Math.tan(skewY * _DEG2RAD), t1 = Math.sqrt(1 + t1 * t1), a11 *= t1, a21 *= t1)), isSVG && (x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset, y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset, _useSVGTransformAttr && (t.xPercent || t.yPercent) && (min = this.t.getBBox(), x += .01 * t.xPercent * min.width, y += .01 * t.yPercent * min.height), min = 1e-6, x < min && x > -min && (x = 0), y < min && y > -min && (y = 0)), transform = (a11 * rnd | 0) / rnd + "," + (a21 * rnd | 0) / rnd + "," + (a12 * rnd | 0) / rnd + "," + (a22 * rnd | 0) / rnd + "," + x + "," + y + ")", isSVG && _useSVGTransformAttr ? this.t.setAttribute("transform", "matrix(" + transform) : style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform) : style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")");
                                if (_isFirefox && (min = 1e-4, sx < min && sx > -min && (sx = sz = 2e-5), sy < min && sy > -min && (sy = sz = 2e-5), !perspective || t.z || t.rotationX || t.rotationY || (perspective = 0)), angle || skewX) angle *= _DEG2RAD, cos = a11 = Math.cos(angle), sin = a21 = Math.sin(angle), skewX && (angle -= skewX * _DEG2RAD, cos = Math.cos(angle), sin = Math.sin(angle), "simple" === t.skewType && (t1 = Math.tan((skewX - skewY) * _DEG2RAD), t1 = Math.sqrt(1 + t1 * t1), cos *= t1, sin *= t1, t.skewY && (t1 = Math.tan(skewY * _DEG2RAD), t1 = Math.sqrt(1 + t1 * t1), a11 *= t1, a21 *= t1))), a12 = -sin, a22 = cos;
                                else {
                                    if (!(rotationY || rotationX || 1 !== sz || perspective || isSVG)) return void(style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z + "px)" + (1 !== sx || 1 !== sy ? " scale(" + sx + "," + sy + ")" : ""));
                                    a11 = a22 = 1, a12 = a21 = 0
                                }
                                a33 = 1, a13 = a23 = a31 = a32 = a41 = a42 = 0, a43 = perspective ? -1 / perspective : 0, zOrigin = t.zOrigin, min = 1e-6, comma = ",", zero = "0", angle = rotationY * _DEG2RAD, angle && (cos = Math.cos(angle), sin = Math.sin(angle), a31 = -sin, a41 = a43 * -sin, a13 = a11 * sin, a23 = a21 * sin, a33 = cos, a43 *= cos, a11 *= cos, a21 *= cos), angle = rotationX * _DEG2RAD, angle && (cos = Math.cos(angle), sin = Math.sin(angle), t1 = a12 * cos + a13 * sin, t2 = a22 * cos + a23 * sin, a32 = a33 * sin, a42 = a43 * sin, a13 = a12 * -sin + a13 * cos, a23 = a22 * -sin + a23 * cos, a33 *= cos, a43 *= cos, a12 = t1, a22 = t2), 1 !== sz && (a13 *= sz, a23 *= sz, a33 *= sz, a43 *= sz), 1 !== sy && (a12 *= sy, a22 *= sy, a32 *= sy, a42 *= sy), 1 !== sx && (a11 *= sx, a21 *= sx, a31 *= sx, a41 *= sx), (zOrigin || isSVG) && (zOrigin && (x += a13 * -zOrigin, y += a23 * -zOrigin, z += a33 * -zOrigin + zOrigin), isSVG && (x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset, y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset), x < min && x > -min && (x = zero), y < min && y > -min && (y = zero), z < min && z > -min && (z = 0)), transform = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(", transform += (a11 < min && a11 > -min ? zero : a11) + comma + (a21 < min && a21 > -min ? zero : a21) + comma + (a31 < min && a31 > -min ? zero : a31), transform += comma + (a41 < min && a41 > -min ? zero : a41) + comma + (a12 < min && a12 > -min ? zero : a12) + comma + (a22 < min && a22 > -min ? zero : a22), rotationX || rotationY || 1 !== sz ? (transform += comma + (a32 < min && a32 > -min ? zero : a32) + comma + (a42 < min && a42 > -min ? zero : a42) + comma + (a13 < min && a13 > -min ? zero : a13), transform += comma + (a23 < min && a23 > -min ? zero : a23) + comma + (a33 < min && a33 > -min ? zero : a33) + comma + (a43 < min && a43 > -min ? zero : a43) + comma) : transform += ",0,0,0,0,1,0,", transform += x + comma + y + comma + z + comma + (perspective ? 1 + -z / perspective : 1) + ")", style[_transformProp] = transform
                            };
                        p = Transform.prototype, p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0, p.scaleX = p.scaleY = p.scaleZ = 1, _registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                            parser: function(t, e, parsingProp, cssp, pt, plugin, vars) {
                                if (cssp._lastParsedTransform === vars) return pt;
                                cssp._lastParsedTransform = vars;
                                var swapFunc, scaleFunc = vars.scale && "function" == typeof vars.scale ? vars.scale : 0;
                                "function" == typeof vars[parsingProp] && (swapFunc = vars[parsingProp], vars[parsingProp] = e), scaleFunc && (vars.scale = scaleFunc(_index, t));
                                var m2, copy, has3D, hasChange, dr, x, y, matrix, p, originalGSTransform = t._gsTransform,
                                    style = t.style,
                                    min = 1e-6,
                                    i = _transformProps.length,
                                    v = vars,
                                    endRotations = {},
                                    transformOriginString = "transformOrigin",
                                    m1 = _getTransform(t, _cs, !0, v.parseTransform),
                                    orig = v.transform && ("function" == typeof v.transform ? v.transform(_index, _target) : v.transform);
                                if (m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType, cssp._transform = m1, orig && "string" == typeof orig && _transformProp) copy = _tempDiv.style, copy[_transformProp] = orig, copy.display = "block", copy.position = "absolute", _doc.body.appendChild(_tempDiv), m2 = _getTransform(_tempDiv, null, !1), "simple" === m1.skewType && (m2.scaleY *= Math.cos(m2.skewX * _DEG2RAD)), m1.svg && (x = m1.xOrigin, y = m1.yOrigin, m2.x -= m1.xOffset, m2.y -= m1.yOffset, (v.transformOrigin || v.svgOrigin) && (orig = {}, _parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, !0), x = orig.xOrigin, y = orig.yOrigin, m2.x -= orig.xOffset - m1.xOffset, m2.y -= orig.yOffset - m1.yOffset), (x || y) && (matrix = _getMatrix(_tempDiv, !0), m2.x -= x - (x * matrix[0] + y * matrix[2]), m2.y -= y - (x * matrix[1] + y * matrix[3]))), _doc.body.removeChild(_tempDiv), m2.perspective || (m2.perspective = m1.perspective), null != v.xPercent && (m2.xPercent = _parseVal(v.xPercent, m1.xPercent)), null != v.yPercent && (m2.yPercent = _parseVal(v.yPercent, m1.yPercent));
                                else if ("object" == typeof v) {
                                    if (m2 = {
                                            scaleX: _parseVal(null != v.scaleX ? v.scaleX : v.scale, m1.scaleX),
                                            scaleY: _parseVal(null != v.scaleY ? v.scaleY : v.scale, m1.scaleY),
                                            scaleZ: _parseVal(v.scaleZ, m1.scaleZ),
                                            x: _parseVal(v.x, m1.x),
                                            y: _parseVal(v.y, m1.y),
                                            z: _parseVal(v.z, m1.z),
                                            xPercent: _parseVal(v.xPercent, m1.xPercent),
                                            yPercent: _parseVal(v.yPercent, m1.yPercent),
                                            perspective: _parseVal(v.transformPerspective, m1.perspective)
                                        }, dr = v.directionalRotation, null != dr)
                                        if ("object" == typeof dr)
                                            for (copy in dr) v[copy] = dr[copy];
                                        else v.rotation = dr;
                                    "string" == typeof v.x && v.x.indexOf("%") !== -1 && (m2.x = 0, m2.xPercent = _parseVal(v.x, m1.xPercent)), "string" == typeof v.y && v.y.indexOf("%") !== -1 && (m2.y = 0, m2.yPercent = _parseVal(v.y, m1.yPercent)), m2.rotation = _parseAngle("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations), _supports3D && (m2.rotationX = _parseAngle("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations), m2.rotationY = _parseAngle("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations)), m2.skewX = _parseAngle(v.skewX, m1.skewX), m2.skewY = _parseAngle(v.skewY, m1.skewY)
                                }
                                for (_supports3D && null != v.force3D && (m1.force3D = v.force3D, hasChange = !0), has3D = m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective, has3D || null == v.scale || (m2.scaleZ = 1); --i > -1;) p = _transformProps[i], orig = m2[p] - m1[p], (orig > min || orig < -min || null != v[p] || null != _forcePT[p]) && (hasChange = !0, pt = new CSSPropTween(m1, p, m1[p], orig, pt), p in endRotations && (pt.e = endRotations[p]), pt.xs0 = 0, pt.plugin = plugin, cssp._overwriteProps.push(pt.n));
                                return orig = v.transformOrigin, m1.svg && (orig || v.svgOrigin) && (x = m1.xOffset, y = m1.yOffset, _parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin), pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString), pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString), x === m1.xOffset && y === m1.yOffset || (pt = _addNonTweeningNumericPT(m1, "xOffset", originalGSTransform ? x : m1.xOffset, m1.xOffset, pt, transformOriginString), pt = _addNonTweeningNumericPT(m1, "yOffset", originalGSTransform ? y : m1.yOffset, m1.yOffset, pt, transformOriginString)), orig = "0px 0px"), (orig || _supports3D && has3D && m1.zOrigin) && (_transformProp ? (hasChange = !0, p = _transformOriginProp, orig = (orig || _getStyle(t, p, _cs, !1, "50% 50%")) + "", pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString), pt.b = style[p], pt.plugin = plugin, _supports3D ? (copy = m1.zOrigin, orig = orig.split(" "), m1.zOrigin = (orig.length > 2 && (0 === copy || "0px" !== orig[2]) ? parseFloat(orig[2]) : copy) || 0, pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px", pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n), pt.b = copy, pt.xs0 = pt.e = m1.zOrigin) : pt.xs0 = pt.e = orig) : _parsePosition(orig + "", m1)), hasChange && (cssp._transformType = m1.svg && _useSVGTransformAttr || !has3D && 3 !== this._transformType ? 2 : 3), swapFunc && (vars[parsingProp] = swapFunc), scaleFunc && (vars.scale = scaleFunc), pt
                            },
                            prefix: !0
                        }), _registerComplexSpecialProp("boxShadow", {
                            defaultValue: "0px 0px 0px 0px #999",
                            prefix: !0,
                            color: !0,
                            multi: !0,
                            keyword: "inset"
                        }), _registerComplexSpecialProp("borderRadius", {
                            defaultValue: "0px",
                            parser: function(t, e, p, cssp, pt, plugin) {
                                e = this.format(e);
                                var ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em, props = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                    style = t.style;
                                for (w = parseFloat(t.offsetWidth), h = parseFloat(t.offsetHeight), ea1 = e.split(" "), i = 0; i < props.length; i++) this.p.indexOf("border") && (props[i] = _checkPropPrefix(props[i])), bs = bs2 = _getStyle(t, props[i], _cs, !1, "0px"), bs.indexOf(" ") !== -1 && (bs2 = bs.split(" "), bs = bs2[0], bs2 = bs2[1]), es = es2 = ea1[i], bn = parseFloat(bs), bsfx = bs.substr((bn + "").length), rel = "=" === es.charAt(1), rel ? (en = parseInt(es.charAt(0) + "1", 10), es = es.substr(2), en *= parseFloat(es), esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "") : (en = parseFloat(es), esfx = es.substr((en + "").length)), "" === esfx && (esfx = _suffixMap[p] || bsfx), esfx !== bsfx && (hn = _convertToPixels(t, "borderLeft", bn, bsfx), vn = _convertToPixels(t, "borderTop", bn, bsfx), "%" === esfx ? (bs = hn / w * 100 + "%", bs2 = vn / h * 100 + "%") : "em" === esfx ? (em = _convertToPixels(t, "borderLeft", 1, "em"), bs = hn / em + "em", bs2 = vn / em + "em") : (bs = hn + "px", bs2 = vn + "px"), rel && (es = parseFloat(bs) + en + esfx, es2 = parseFloat(bs2) + en + esfx)), pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, !1, "0px", pt);
                                return pt
                            },
                            prefix: !0,
                            formatter: _getFormatter("0px 0px 0px 0px", !1, !0)
                        }), _registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                            defaultValue: "0px",
                            parser: function(t, e, p, cssp, pt, plugin) {
                                return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, !1, "0px 0px")), this.format(e), !1, "0px", pt)
                            },
                            prefix: !0,
                            formatter: _getFormatter("0px 0px", !1, !0)
                        }), _registerComplexSpecialProp("backgroundPosition", {
                            defaultValue: "0 0",
                            parser: function(t, e, p, cssp, pt, plugin) {
                                var ba, ea, i, pct, overlap, src, bp = "background-position",
                                    cs = _cs || _getComputedStyle(t, null),
                                    bs = this.format((cs ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                    es = this.format(e);
                                if (bs.indexOf("%") !== -1 != (es.indexOf("%") !== -1) && es.split(",").length < 2 && (src = _getStyle(t, "backgroundImage").replace(_urlExp, ""), src && "none" !== src)) {
                                    for (ba = bs.split(" "), ea = es.split(" "), _tempImg.setAttribute("src", src), i = 2; --i > -1;) bs = ba[i], pct = bs.indexOf("%") !== -1, pct !== (ea[i].indexOf("%") !== -1) && (overlap = 0 === i ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height, ba[i] = pct ? parseFloat(bs) / 100 * overlap + "px" : parseFloat(bs) / overlap * 100 + "%");
                                    bs = ba.join(" ")
                                }
                                return this.parseComplex(t.style, bs, es, pt, plugin)
                            },
                            formatter: _parsePosition
                        }), _registerComplexSpecialProp("backgroundSize", {
                            defaultValue: "0 0",
                            formatter: function(v) {
                                return v += "", _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v)
                            }
                        }), _registerComplexSpecialProp("perspective", {
                            defaultValue: "0px",
                            prefix: !0
                        }), _registerComplexSpecialProp("perspectiveOrigin", {
                            defaultValue: "50% 50%",
                            prefix: !0
                        }), _registerComplexSpecialProp("transformStyle", {
                            prefix: !0
                        }), _registerComplexSpecialProp("backfaceVisibility", {
                            prefix: !0
                        }), _registerComplexSpecialProp("userSelect", {
                            prefix: !0
                        }), _registerComplexSpecialProp("margin", {
                            parser: _getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")
                        }), _registerComplexSpecialProp("padding", {
                            parser: _getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")
                        }), _registerComplexSpecialProp("clip", {
                            defaultValue: "rect(0px,0px,0px,0px)",
                            parser: function(t, e, p, cssp, pt, plugin) {
                                var b, cs, delim;
                                return _ieVers < 9 ? (cs = t.currentStyle, delim = _ieVers < 8 ? " " : ",", b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")", e = this.format(e).split(",").join(delim)) : (b = this.format(_getStyle(t, this.p, _cs, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, b, e, pt, plugin)
                            }
                        }), _registerComplexSpecialProp("textShadow", {
                            defaultValue: "0px 0px 0px #999",
                            color: !0,
                            multi: !0
                        }), _registerComplexSpecialProp("autoRound,strictUnits", {
                            parser: function(t, e, p, cssp, pt) {
                                return pt
                            }
                        }), _registerComplexSpecialProp("border", {
                            defaultValue: "0px solid #000",
                            parser: function(t, e, p, cssp, pt, plugin) {
                                var bw = _getStyle(t, "borderTopWidth", _cs, !1, "0px"),
                                    end = this.format(e).split(" "),
                                    esfx = end[0].replace(_suffixExp, "");
                                return "px" !== esfx && (bw = parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx) + esfx), this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, !1, "solid") + " " + _getStyle(t, "borderTopColor", _cs, !1, "#000")), end.join(" "), pt, plugin)
                            },
                            color: !0,
                            formatter: function(v) {
                                var a = v.split(" ");
                                return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0]
                            }
                        }), _registerComplexSpecialProp("borderWidth", {
                            parser: _getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                        }), _registerComplexSpecialProp("float,cssFloat,styleFloat", {
                            parser: function(t, e, p, cssp, pt, plugin) {
                                var s = t.style,
                                    prop = "cssFloat" in s ? "cssFloat" : "styleFloat";
                                return new CSSPropTween(s, prop, 0, 0, pt, -1, p, !1, 0, s[prop], e)
                            }
                        });
                        var _setIEOpacityRatio = function(v) {
                            var skip, t = this.t,
                                filters = t.filter || _getStyle(this.data, "filter") || "",
                                val = this.s + this.c * v | 0;
                            100 === val && (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1 ? (t.removeAttribute("filter"), skip = !_getStyle(this.data, "filter")) : (t.filter = filters.replace(_alphaFilterExp, ""), skip = !0)), skip || (this.xn1 && (t.filter = filters = filters || "alpha(opacity=" + val + ")"), filters.indexOf("pacity") === -1 ? 0 === val && this.xn1 || (t.filter = filters + " alpha(opacity=" + val + ")") : t.filter = filters.replace(_opacityExp, "opacity=" + val))
                        };
                        _registerComplexSpecialProp("opacity,alpha,autoAlpha", {
                            defaultValue: "1",
                            parser: function(t, e, p, cssp, pt, plugin) {
                                var b = parseFloat(_getStyle(t, "opacity", _cs, !1, "1")),
                                    style = t.style,
                                    isAutoAlpha = "autoAlpha" === p;
                                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + b), isAutoAlpha && 1 === b && "hidden" === _getStyle(t, "visibility", _cs) && 0 !== e && (b = 0), _supportsOpacity ? pt = new CSSPropTween(style, "opacity", b, e - b, pt) : (pt = new CSSPropTween(style, "opacity", 100 * b, 100 * (e - b), pt), pt.xn1 = isAutoAlpha ? 1 : 0, style.zoom = 1, pt.type = 2, pt.b = "alpha(opacity=" + pt.s + ")", pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")", pt.data = t, pt.plugin = plugin, pt.setRatio = _setIEOpacityRatio), isAutoAlpha && (pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, !1, 0, 0 !== b ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), pt.xs0 = "inherit", cssp._overwriteProps.push(pt.n), cssp._overwriteProps.push(p)), pt
                            }
                        });
                        var _removeProp = function(s, p) {
                                p && (s.removeProperty ? ("ms" !== p.substr(0, 2) && "webkit" !== p.substr(0, 6) || (p = "-" + p), s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase())) : s.removeAttribute(p))
                            },
                            _setClassNameRatio = function(v) {
                                if (this.t._gsClassPT = this, 1 === v || 0 === v) {
                                    this.t.setAttribute("class", 0 === v ? this.b : this.e);
                                    for (var mpt = this.data, s = this.t.style; mpt;) mpt.v ? s[mpt.p] = mpt.v : _removeProp(s, mpt.p), mpt = mpt._next;
                                    1 === v && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                            };
                        _registerComplexSpecialProp("className", {
                            parser: function(t, e, p, cssp, pt, plugin, vars) {
                                var difData, bs, cnpt, cnptLookup, mpt, b = t.getAttribute("class") || "",
                                    cssText = t.style.cssText;
                                if (pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2), pt.setRatio = _setClassNameRatio, pt.pr = -11, _hasPriority = !0, pt.b = b, bs = _getAllStyles(t, _cs), cnpt = t._gsClassPT) {
                                    for (cnptLookup = {}, mpt = cnpt.data; mpt;) cnptLookup[mpt.p] = 1, mpt = mpt._next;
                                    cnpt.setRatio(1)
                                }
                                return t._gsClassPT = pt, pt.e = "=" !== e.charAt(1) ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", pt.e), difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup), t.setAttribute("class", b), pt.data = difData.firstMPT, t.style.cssText = cssText, pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin)
                            }
                        });
                        var _setClearPropsRatio = function(v) {
                            if ((1 === v || 0 === v) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                                var a, p, i, clearTransform, transform, s = this.t.style,
                                    transformParse = _specialProps.transform.parse;
                                if ("all" === this.e) s.cssText = "", clearTransform = !0;
                                else
                                    for (a = this.e.split(" ").join("").split(","), i = a.length; --i > -1;) p = a[i], _specialProps[p] && (_specialProps[p].parse === transformParse ? clearTransform = !0 : p = "transformOrigin" === p ? _transformOriginProp : _specialProps[p].p), _removeProp(s, p);
                                clearTransform && (_removeProp(s, _transformProp), transform = this.t._gsTransform, transform && (transform.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                            }
                        };
                        for (_registerComplexSpecialProp("clearProps", {
                                parser: function(t, e, p, cssp, pt) {
                                    return pt = new CSSPropTween(t, p, 0, 0, pt, 2), pt.setRatio = _setClearPropsRatio, pt.e = e, pt.pr = -10, pt.data = cssp._tween, _hasPriority = !0, pt
                                }
                            }), p = "bezier,throwProps,physicsProps,physics2D".split(","), i = p.length; i--;) _registerPluginProp(p[i]);
                        p = CSSPlugin.prototype, p._firstPT = p._lastParsedTransform = p._transform = null, p._onInitTween = function(target, vars, tween, index) {
                            if (!target.nodeType) return !1;
                            this._target = _target = target, this._tween = tween, this._vars = vars, _index = index, _autoRound = vars.autoRound, _hasPriority = !1, _suffixMap = vars.suffixMap || CSSPlugin.suffixMap, _cs = _getComputedStyle(target, ""), _overwriteProps = this._overwriteProps;
                            var v, pt, pt2, first, last, next, zIndex, tpt, threeD, style = target.style;
                            if (_reqSafariFix && "" === style.zIndex && (v = _getStyle(target, "zIndex", _cs), "auto" !== v && "" !== v || this._addLazySet(style, "zIndex", 0)), "string" == typeof vars && (first = style.cssText, v = _getAllStyles(target, _cs), style.cssText = first + ";" + vars, v = _cssDif(target, v, _getAllStyles(target)).difs, !_supportsOpacity && _opacityValExp.test(vars) && (v.opacity = parseFloat(RegExp.$1)), vars = v, style.cssText = first), vars.className ? this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars) : this._firstPT = pt = this.parse(target, vars, null), this._transformType) {
                                for (threeD = 3 === this._transformType, _transformProp ? _isSafari && (_reqSafariFix = !0, "" === style.zIndex && (zIndex = _getStyle(target, "zIndex", _cs), "auto" !== zIndex && "" !== zIndex || this._addLazySet(style, "zIndex", 0)), _isSafariLT6 && this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"))) : style.zoom = 1, pt2 = pt; pt2 && pt2._next;) pt2 = pt2._next;
                                tpt = new CSSPropTween(target, "transform", 0, 0, null, 2), this._linkCSSP(tpt, null, pt2), tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio, tpt.data = this._transform || _getTransform(target, _cs, !0), tpt.tween = tween, tpt.pr = -1, _overwriteProps.pop()
                            }
                            if (_hasPriority) {
                                for (; pt;) {
                                    for (next = pt._next, pt2 = first; pt2 && pt2.pr > pt.pr;) pt2 = pt2._next;
                                    (pt._prev = pt2 ? pt2._prev : last) ? pt._prev._next = pt: first = pt, (pt._next = pt2) ? pt2._prev = pt : last = pt, pt = next
                                }
                                this._firstPT = first
                            }
                            return !0
                        }, p.parse = function(target, vars, pt, plugin) {
                            var p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel, style = target.style;
                            for (p in vars) {
                                if (es = vars[p], "function" == typeof es && (es = es(_index, _target)), sp = _specialProps[p]) pt = sp.parse(target, es, p, this, pt, plugin, vars);
                                else {
                                    if ("--" === p.substr(0, 2)) {
                                        this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, !1, p);
                                        continue
                                    }
                                    bs = _getStyle(target, p, _cs) + "", isStr = "string" == typeof es, "color" === p || "fill" === p || "stroke" === p || p.indexOf("Color") !== -1 || isStr && _rgbhslExp.test(es) ? (isStr || (es = _parseColor(es), es = (es.length > 3 ? "rgba(" : "rgb(") + es.join(",") + ")"), pt = _parseComplex(style, p, bs, es, !0, "transparent", pt, 0, plugin)) : isStr && _complexExp.test(es) ? pt = _parseComplex(style, p, bs, es, !0, null, pt, 0, plugin) : (bn = parseFloat(bs), bsfx = bn || 0 === bn ? bs.substr((bn + "").length) : "", "" !== bs && "auto" !== bs || ("width" === p || "height" === p ? (bn = _getDimension(target, p, _cs), bsfx = "px") : "left" === p || "top" === p ? (bn = _calculateOffset(target, p, _cs), bsfx = "px") : (bn = "opacity" !== p ? 0 : 1, bsfx = "")), rel = isStr && "=" === es.charAt(1), rel ? (en = parseInt(es.charAt(0) + "1", 10), es = es.substr(2), en *= parseFloat(es), esfx = es.replace(_suffixExp, "")) : (en = parseFloat(es), esfx = isStr ? es.replace(_suffixExp, "") : ""), "" === esfx && (esfx = p in _suffixMap ? _suffixMap[p] : bsfx), es = en || 0 === en ? (rel ? en + bn : en) + esfx : vars[p], bsfx !== esfx && ("" === esfx && "lineHeight" !== p || (en || 0 === en) && bn && (bn = _convertToPixels(target, p, bn, bsfx), "%" === esfx ? (bn /= _convertToPixels(target, p, 100, "%") / 100, vars.strictUnits !== !0 && (bs = bn + "%")) : "em" === esfx || "rem" === esfx || "vw" === esfx || "vh" === esfx ? bn /= _convertToPixels(target, p, 1, esfx) : "px" !== esfx && (en = _convertToPixels(target, p, en, esfx), esfx = "px"), rel && (en || 0 === en) && (es = en + bn + esfx))), rel && (en += bn), !bn && 0 !== bn || !en && 0 !== en ? void 0 !== style[p] && (es || es + "" != "NaN" && null != es) ? (pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, !1, 0, bs, es), pt.xs0 = "none" !== es || "display" !== p && p.indexOf("Style") === -1 ? es : bs) : _log("invalid " + p + " tween value: " + vars[p]) : (pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, _autoRound !== !1 && ("px" === esfx || "zIndex" === p), 0, bs, es), pt.xs0 = esfx))
                                }
                                plugin && pt && !pt.plugin && (pt.plugin = plugin)
                            }
                            return pt
                        }, p.setRatio = function(v) {
                            var val, str, i, pt = this._firstPT,
                                min = 1e-6;
                            if (1 !== v || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                                if (v || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                                    for (; pt;) {
                                        if (val = pt.c * v + pt.s, pt.r ? val = Math.round(val) : val < min && val > -min && (val = 0), pt.type)
                                            if (1 === pt.type)
                                                if (i = pt.l, 2 === i) pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
                                                else if (3 === i) pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
                                        else if (4 === i) pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
                                        else if (5 === i) pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
                                        else {
                                            for (str = pt.xs0 + val + pt.xs1, i = 1; i < pt.l; i++) str += pt["xn" + i] + pt["xs" + (i + 1)];
                                            pt.t[pt.p] = str
                                        } else pt.type === -1 ? pt.t[pt.p] = pt.xs0 : pt.setRatio && pt.setRatio(v);
                                        else pt.t[pt.p] = val + pt.xs0;
                                        pt = pt._next
                                    } else
                                        for (; pt;) 2 !== pt.type ? pt.t[pt.p] = pt.b : pt.setRatio(v), pt = pt._next;
                                else
                                    for (; pt;) {
                                        if (2 !== pt.type)
                                            if (pt.r && pt.type !== -1)
                                                if (val = Math.round(pt.s + pt.c), pt.type) {
                                                    if (1 === pt.type) {
                                                        for (i = pt.l, str = pt.xs0 + val + pt.xs1, i = 1; i < pt.l; i++) str += pt["xn" + i] + pt["xs" + (i + 1)];
                                                        pt.t[pt.p] = str
                                                    }
                                                } else pt.t[pt.p] = val + pt.xs0;
                                        else pt.t[pt.p] = pt.e;
                                        else pt.setRatio(v);
                                        pt = pt._next
                                    }
                        }, p._enableTransforms = function(threeD) {
                            this._transform = this._transform || _getTransform(this._target, _cs, !0), this._transformType = this._transform.svg && _useSVGTransformAttr || !threeD && 3 !== this._transformType ? 2 : 3
                        };
                        var lazySet = function(v) {
                            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                        };
                        p._addLazySet = function(t, p, v) {
                            var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
                            pt.e = v, pt.setRatio = lazySet, pt.data = this
                        }, p._linkCSSP = function(pt, next, prev, remove) {
                            return pt && (next && (next._prev = pt), pt._next && (pt._next._prev = pt._prev), pt._prev ? pt._prev._next = pt._next : this._firstPT === pt && (this._firstPT = pt._next, remove = !0), prev ? prev._next = pt : remove || null !== this._firstPT || (this._firstPT = pt), pt._next = next, pt._prev = prev), pt
                        }, p._mod = function(lookup) {
                            for (var pt = this._firstPT; pt;) "function" == typeof lookup[pt.p] && lookup[pt.p] === Math.round && (pt.r = 1), pt = pt._next
                        }, p._kill = function(lookup) {
                            var pt, p, xfirst, copy = lookup;
                            if (lookup.autoAlpha || lookup.alpha) {
                                copy = {};
                                for (p in lookup) copy[p] = lookup[p];
                                copy.opacity = 1, copy.autoAlpha && (copy.visibility = 1)
                            }
                            for (lookup.className && (pt = this._classNamePT) && (xfirst = pt.xfirst, xfirst && xfirst._prev ? this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev) : xfirst === this._firstPT && (this._firstPT = pt._next), pt._next && this._linkCSSP(pt._next, pt._next._next, xfirst._prev), this._classNamePT = null), pt = this._firstPT; pt;) pt.plugin && pt.plugin !== p && pt.plugin._kill && (pt.plugin._kill(lookup), p = pt.plugin), pt = pt._next;
                            return TweenPlugin.prototype._kill.call(this, copy)
                        };
                        var _getChildStyles = function(e, props, targets) {
                            var children, i, child, type;
                            if (e.slice)
                                for (i = e.length; --i > -1;) _getChildStyles(e[i], props, targets);
                            else
                                for (children = e.childNodes, i = children.length; --i > -1;) child = children[i], type = child.type, child.style && (props.push(_getAllStyles(child)), targets && targets.push(child)), 1 !== type && 9 !== type && 11 !== type || !child.childNodes.length || _getChildStyles(child, props, targets)
                        };
                        return CSSPlugin.cascadeTo = function(target, duration, vars) {
                            var i, difs, p, from, tween = TweenLite.to(target, duration, vars),
                                results = [tween],
                                b = [],
                                e = [],
                                targets = [],
                                _reservedProps = TweenLite._internals.reservedProps;
                            for (target = tween._targets || tween.target, _getChildStyles(target, b, targets), tween.render(duration, !0, !0), _getChildStyles(target, e), tween.render(0, !0, !0), tween._enabled(!0), i = targets.length; --i > -1;)
                                if (difs = _cssDif(targets[i], b[i], e[i]), difs.firstMPT) {
                                    difs = difs.difs;
                                    for (p in vars) _reservedProps[p] && (difs[p] = vars[p]);
                                    from = {};
                                    for (p in difs) from[p] = b[i][p];
                                    results.push(TweenLite.fromTo(targets[i], duration, from, difs))
                                } return results
                        }, TweenPlugin.activate([CSSPlugin]), CSSPlugin
                    }, !0),
                    function() {
                        var RoundPropsPlugin = _gsScope._gsDefine.plugin({
                                propName: "roundProps",
                                version: "1.6.0",
                                priority: -1,
                                API: 2,
                                init: function(target, value, tween) {
                                    return this._tween = tween, !0
                                }
                            }),
                            _roundLinkedList = function(node) {
                                for (; node;) node.f || node.blob || (node.m = Math.round), node = node._next
                            },
                            p = RoundPropsPlugin.prototype;
                        p._onInitAllProps = function() {
                            for (var prop, pt, next, tween = this._tween, rp = tween.vars.roundProps.join ? tween.vars.roundProps : tween.vars.roundProps.split(","), i = rp.length, lookup = {}, rpt = tween._propLookup.roundProps; --i > -1;) lookup[rp[i]] = Math.round;
                            for (i = rp.length; --i > -1;)
                                for (prop = rp[i], pt = tween._firstPT; pt;) next = pt._next, pt.pg ? pt.t._mod(lookup) : pt.n === prop && (2 === pt.f && pt.t ? _roundLinkedList(pt.t._firstPT) : (this._add(pt.t, prop, pt.s, pt.c), next && (next._prev = pt._prev), pt._prev ? pt._prev._next = next : tween._firstPT === pt && (tween._firstPT = next), pt._next = pt._prev = null, tween._propLookup[prop] = rpt)), pt = next;
                            return !1
                        }, p._add = function(target, p, s, c) {
                            this._addTween(target, p, s, s + c, p, Math.round), this._overwriteProps.push(p)
                        }
                    }(),
                    function() {
                        _gsScope._gsDefine.plugin({
                            propName: "attr",
                            API: 2,
                            version: "0.6.1",
                            init: function(target, value, tween, index) {
                                var p, end;
                                if ("function" != typeof target.setAttribute) return !1;
                                for (p in value) end = value[p], "function" == typeof end && (end = end(index, target)), this._addTween(target, "setAttribute", target.getAttribute(p) + "", end + "", p, !1, p), this._overwriteProps.push(p);
                                return !0
                            }
                        })
                    }(), _gsScope._gsDefine.plugin({
                        propName: "directionalRotation",
                        version: "0.3.1",
                        API: 2,
                        init: function(target, value, tween, index) {
                            "object" != typeof value && (value = {
                                rotation: value
                            }), this.finals = {};
                            var p, v, start, end, dif, split, cap = value.useRadians === !0 ? 2 * Math.PI : 360,
                                min = 1e-6;
                            for (p in value) "useRadians" !== p && (end = value[p], "function" == typeof end && (end = end(index, target)), split = (end + "").split("_"), v = split[0], start = parseFloat("function" != typeof target[p] ? target[p] : target[p.indexOf("set") || "function" != typeof target["get" + p.substr(3)] ? p : "get" + p.substr(3)]()), end = this.finals[p] = "string" == typeof v && "=" === v.charAt(1) ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0, dif = end - start, split.length && (v = split.join("_"), v.indexOf("short") !== -1 && (dif %= cap, dif !== dif % (cap / 2) && (dif = dif < 0 ? dif + cap : dif - cap)), v.indexOf("_cw") !== -1 && dif < 0 ? dif = (dif + 9999999999 * cap) % cap - (dif / cap | 0) * cap : v.indexOf("ccw") !== -1 && dif > 0 && (dif = (dif - 9999999999 * cap) % cap - (dif / cap | 0) * cap)), (dif > min || dif < -min) && (this._addTween(target, p, start, start + dif, p), this._overwriteProps.push(p)));
                            return !0
                        },
                        set: function(ratio) {
                            var pt;
                            if (1 !== ratio) this._super.setRatio.call(this, ratio);
                            else
                                for (pt = this._firstPT; pt;) pt.f ? pt.t[pt.p](this.finals[pt.p]) : pt.t[pt.p] = this.finals[pt.p], pt = pt._next
                        }
                    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(Ease) {
                        var SteppedEase, ExpoScaleEase, RoughEase, _createElastic, w = _gsScope.GreenSockGlobals || _gsScope,
                            gs = w.com.greensock,
                            _2PI = 2 * Math.PI,
                            _HALF_PI = Math.PI / 2,
                            _class = gs._class,
                            _create = function(n, f) {
                                var C = _class("easing." + n, function() {}, !0),
                                    p = C.prototype = new Ease;
                                return p.constructor = C, p.getRatio = f, C
                            },
                            _easeReg = Ease.register || function() {},
                            _wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
                                var C = _class("easing." + name, {
                                    easeOut: new EaseOut,
                                    easeIn: new EaseIn,
                                    easeInOut: new EaseInOut
                                }, !0);
                                return _easeReg(C, name), C
                            },
                            EasePoint = function(time, value, next) {
                                this.t = time, this.v = value, next && (this.next = next, next.prev = this, this.c = next.v - value, this.gap = next.t - time)
                            },
                            _createBack = function(n, f) {
                                var C = _class("easing." + n, function(overshoot) {
                                        this._p1 = overshoot || 0 === overshoot ? overshoot : 1.70158, this._p2 = 1.525 * this._p1
                                    }, !0),
                                    p = C.prototype = new Ease;
                                return p.constructor = C, p.getRatio = f, p.config = function(overshoot) {
                                    return new C(overshoot)
                                }, C
                            },
                            Back = _wrap("Back", _createBack("BackOut", function(p) {
                                return (p -= 1) * p * ((this._p1 + 1) * p + this._p1) + 1
                            }), _createBack("BackIn", function(p) {
                                return p * p * ((this._p1 + 1) * p - this._p1)
                            }), _createBack("BackInOut", function(p) {
                                return (p *= 2) < 1 ? .5 * p * p * ((this._p2 + 1) * p - this._p2) : .5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2)
                            })),
                            SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
                                power = power || 0 === power ? power : .7, null == linearRatio ? linearRatio = .7 : linearRatio > 1 && (linearRatio = 1), this._p = 1 !== linearRatio ? power : 0, this._p1 = (1 - linearRatio) / 2, this._p2 = linearRatio, this._p3 = this._p1 + this._p2, this._calcEnd = yoyoMode === !0
                            }, !0),
                            p = SlowMo.prototype = new Ease;
                        return p.constructor = SlowMo, p.getRatio = function(p) {
                            var r = p + (.5 - p) * this._p;
                            return p < this._p1 ? this._calcEnd ? 1 - (p = 1 - p / this._p1) * p : r - (p = 1 - p / this._p1) * p * p * p * r : p > this._p3 ? this._calcEnd ? 1 === p ? 0 : 1 - (p = (p - this._p3) / this._p1) * p : r + (p - r) * (p = (p - this._p3) / this._p1) * p * p * p : this._calcEnd ? 1 : r
                        }, SlowMo.ease = new SlowMo(.7, .7), p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
                            return new SlowMo(linearRatio, power, yoyoMode)
                        }, SteppedEase = _class("easing.SteppedEase", function(steps, immediateStart) {
                            steps = steps || 1, this._p1 = 1 / steps, this._p2 = steps + (immediateStart ? 0 : 1), this._p3 = immediateStart ? 1 : 0
                        }, !0), p = SteppedEase.prototype = new Ease, p.constructor = SteppedEase, p.getRatio = function(p) {
                            return p < 0 ? p = 0 : p >= 1 && (p = .999999999), ((this._p2 * p | 0) + this._p3) * this._p1
                        }, p.config = SteppedEase.config = function(steps, immediateStart) {
                            return new SteppedEase(steps, immediateStart)
                        }, ExpoScaleEase = _class("easing.ExpoScaleEase", function(start, end, ease) {
                            this._p1 = Math.log(end / start), this._p2 = end - start, this._p3 = start, this._ease = ease
                        }, !0), p = ExpoScaleEase.prototype = new Ease, p.constructor = ExpoScaleEase, p.getRatio = function(p) {
                            return this._ease && (p = this._ease.getRatio(p)), (this._p3 * Math.exp(this._p1 * p) - this._p3) / this._p2
                        }, p.config = ExpoScaleEase.config = function(start, end, ease) {
                            return new ExpoScaleEase(start, end, ease)
                        }, RoughEase = _class("easing.RoughEase", function(vars) {
                            vars = vars || {};
                            for (var x, y, bump, invX, obj, pnt, taper = vars.taper || "none", a = [], cnt = 0, points = 0 | (vars.points || 20), i = points, randomize = vars.randomize !== !1, clamp = vars.clamp === !0, template = vars.template instanceof Ease ? vars.template : null, strength = "number" == typeof vars.strength ? .4 * vars.strength : .4; --i > -1;) x = randomize ? Math.random() : 1 / points * i, y = template ? template.getRatio(x) : x, "none" === taper ? bump = strength : "out" === taper ? (invX = 1 - x, bump = invX * invX * strength) : "in" === taper ? bump = x * x * strength : x < .5 ? (invX = 2 * x, bump = invX * invX * .5 * strength) : (invX = 2 * (1 - x), bump = invX * invX * .5 * strength), randomize ? y += Math.random() * bump - .5 * bump : i % 2 ? y += .5 * bump : y -= .5 * bump, clamp && (y > 1 ? y = 1 : y < 0 && (y = 0)), a[cnt++] = {
                                x: x,
                                y: y
                            };
                            for (a.sort(function(a, b) {
                                    return a.x - b.x
                                }), pnt = new EasePoint(1, 1, null), i = points; --i > -1;) obj = a[i], pnt = new EasePoint(obj.x, obj.y, pnt);
                            this._prev = new EasePoint(0, 0, 0 !== pnt.t ? pnt : pnt.next)
                        }, !0), p = RoughEase.prototype = new Ease, p.constructor = RoughEase, p.getRatio = function(p) {
                            var pnt = this._prev;
                            if (p > pnt.t) {
                                for (; pnt.next && p >= pnt.t;) pnt = pnt.next;
                                pnt = pnt.prev
                            } else
                                for (; pnt.prev && p <= pnt.t;) pnt = pnt.prev;
                            return this._prev = pnt, pnt.v + (p - pnt.t) / pnt.gap * pnt.c
                        }, p.config = function(vars) {
                            return new RoughEase(vars)
                        }, RoughEase.ease = new RoughEase, _wrap("Bounce", _create("BounceOut", function(p) {
                            return p < 1 / 2.75 ? 7.5625 * p * p : p < 2 / 2.75 ? 7.5625 * (p -= 1.5 / 2.75) * p + .75 : p < 2.5 / 2.75 ? 7.5625 * (p -= 2.25 / 2.75) * p + .9375 : 7.5625 * (p -= 2.625 / 2.75) * p + .984375
                        }), _create("BounceIn", function(p) {
                            return (p = 1 - p) < 1 / 2.75 ? 1 - 7.5625 * p * p : p < 2 / 2.75 ? 1 - (7.5625 * (p -= 1.5 / 2.75) * p + .75) : p < 2.5 / 2.75 ? 1 - (7.5625 * (p -= 2.25 / 2.75) * p + .9375) : 1 - (7.5625 * (p -= 2.625 / 2.75) * p + .984375)
                        }), _create("BounceInOut", function(p) {
                            var invert = p < .5;
                            return p = invert ? 1 - 2 * p : 2 * p - 1, p < 1 / 2.75 ? p *= 7.5625 * p : p = p < 2 / 2.75 ? 7.5625 * (p -= 1.5 / 2.75) * p + .75 : p < 2.5 / 2.75 ? 7.5625 * (p -= 2.25 / 2.75) * p + .9375 : 7.5625 * (p -= 2.625 / 2.75) * p + .984375, invert ? .5 * (1 - p) : .5 * p + .5
                        })), _wrap("Circ", _create("CircOut", function(p) {
                            return Math.sqrt(1 - (p -= 1) * p)
                        }), _create("CircIn", function(p) {
                            return -(Math.sqrt(1 - p * p) - 1)
                        }), _create("CircInOut", function(p) {
                            return (p *= 2) < 1 ? -.5 * (Math.sqrt(1 - p * p) - 1) : .5 * (Math.sqrt(1 - (p -= 2) * p) + 1)
                        })), _createElastic = function(n, f, def) {
                            var C = _class("easing." + n, function(amplitude, period) {
                                    this._p1 = amplitude >= 1 ? amplitude : 1, this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1), this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0), this._p2 = _2PI / this._p2
                                }, !0),
                                p = C.prototype = new Ease;
                            return p.constructor = C, p.getRatio = f, p.config = function(amplitude, period) {
                                return new C(amplitude, period)
                            }, C
                        }, _wrap("Elastic", _createElastic("ElasticOut", function(p) {
                            return this._p1 * Math.pow(2, -10 * p) * Math.sin((p - this._p3) * this._p2) + 1
                        }, .3), _createElastic("ElasticIn", function(p) {
                            return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2))
                        }, .3), _createElastic("ElasticInOut", function(p) {
                            return (p *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2) * .5 + 1
                        }, .45)), _wrap("Expo", _create("ExpoOut", function(p) {
                            return 1 - Math.pow(2, -10 * p)
                        }), _create("ExpoIn", function(p) {
                            return Math.pow(2, 10 * (p - 1)) - .001
                        }), _create("ExpoInOut", function(p) {
                            return (p *= 2) < 1 ? .5 * Math.pow(2, 10 * (p - 1)) : .5 * (2 - Math.pow(2, -10 * (p - 1)))
                        })), _wrap("Sine", _create("SineOut", function(p) {
                            return Math.sin(p * _HALF_PI)
                        }), _create("SineIn", function(p) {
                            return -Math.cos(p * _HALF_PI) + 1
                        }), _create("SineInOut", function(p) {
                            return -.5 * (Math.cos(Math.PI * p) - 1)
                        })), _class("easing.EaseLookup", {
                            find: function(s) {
                                return Ease.map[s]
                            }
                        }, !0), _easeReg(w.SlowMo, "SlowMo", "ease,"), _easeReg(RoughEase, "RoughEase", "ease,"), _easeReg(SteppedEase, "SteppedEase", "ease,"), Back
                    }, !0)
            }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
            function(window, moduleName) {
                "use strict";
                var _exports = {},
                    _doc = window.document,
                    _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
                if (!_globals.TweenLite) {
                    var a, i, p, _ticker, _tickerActive, _namespace = function(ns) {
                            var i, a = ns.split("."),
                                p = _globals;
                            for (i = 0; i < a.length; i++) p[a[i]] = p = p[a[i]] || {};
                            return p
                        },
                        gs = _namespace("com.greensock"),
                        _tinyNum = 1e-10,
                        _slice = function(a) {
                            var i, b = [],
                                l = a.length;
                            for (i = 0; i !== l; b.push(a[i++]));
                            return b
                        },
                        _emptyFunc = function() {},
                        _isArray = function() {
                            var toString = Object.prototype.toString,
                                array = toString.call([]);
                            return function(obj) {
                                return null != obj && (obj instanceof Array || "object" == typeof obj && !!obj.push && toString.call(obj) === array)
                            }
                        }(),
                        _defLookup = {},
                        Definition = function(ns, dependencies, func, global) {
                            this.sc = _defLookup[ns] ? _defLookup[ns].sc : [], _defLookup[ns] = this, this.gsClass = null, this.func = func;
                            var _classes = [];
                            this.check = function(init) {
                                for (var cur, a, n, cl, i = dependencies.length, missing = i; --i > -1;)(cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass ? (_classes[i] = cur.gsClass, missing--) : init && cur.sc.push(this);
                                if (0 === missing && func) {
                                    if (a = ("com.greensock." + ns).split("."), n = a.pop(), cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes), global)
                                        if (_globals[n] = _exports[n] = cl, "undefined" != typeof module && module.exports)
                                            if (ns === moduleName) {
                                                module.exports = _exports[moduleName] = cl;
                                                for (i in _exports) cl[i] = _exports[i]
                                            } else _exports[moduleName] && (_exports[moduleName][n] = cl);
                                    else __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                                        return cl
                                    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                                    for (i = 0; i < this.sc.length; i++) this.sc[i].check()
                                }
                            }, this.check(!0)
                        },
                        _gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
                            return new Definition(ns, dependencies, func, global)
                        },
                        _class = gs._class = function(ns, func, global) {
                            return func = func || function() {}, _gsDefine(ns, [], function() {
                                return func
                            }, global), func
                        };
                    _gsDefine.globals = _globals;
                    var _baseParams = [0, 0, 1, 1],
                        Ease = _class("easing.Ease", function(func, extraParams, type, power) {
                            this._func = func, this._type = type || 0, this._power = power || 0, this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams
                        }, !0),
                        _easeMap = Ease.map = {},
                        _easeReg = Ease.register = function(ease, names, types, create) {
                            for (var e, name, j, type, na = names.split(","), i = na.length, ta = (types || "easeIn,easeOut,easeInOut").split(","); --i > -1;)
                                for (name = na[i], e = create ? _class("easing." + name, null, !0) : gs.easing[name] || {}, j = ta.length; --j > -1;) type = ta[j], _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease
                        };
                    for (p = Ease.prototype, p._calcEnd = !1, p.getRatio = function(p) {
                            if (this._func) return this._params[0] = p, this._func.apply(null, this._params);
                            var t = this._type,
                                pw = this._power,
                                r = 1 === t ? 1 - p : 2 === t ? p : p < .5 ? 2 * p : 2 * (1 - p);
                            return 1 === pw ? r *= r : 2 === pw ? r *= r * r : 3 === pw ? r *= r * r * r : 4 === pw && (r *= r * r * r * r), 1 === t ? 1 - r : 2 === t ? r : p < .5 ? r / 2 : 1 - r / 2
                        }, a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], i = a.length; --i > -1;) p = a[i] + ",Power" + i, _easeReg(new Ease(null, null, 1, i), p, "easeOut", !0), _easeReg(new Ease(null, null, 2, i), p, "easeIn" + (0 === i ? ",easeNone" : "")), _easeReg(new Ease(null, null, 3, i), p, "easeInOut");
                    _easeMap.linear = gs.easing.Linear.easeIn, _easeMap.swing = gs.easing.Quad.easeInOut;
                    var EventDispatcher = _class("events.EventDispatcher", function(target) {
                        this._listeners = {}, this._eventTarget = target || this
                    });
                    p = EventDispatcher.prototype, p.addEventListener = function(type, callback, scope, useParam, priority) {
                        priority = priority || 0;
                        var listener, i, list = this._listeners[type],
                            index = 0;
                        for (this !== _ticker || _tickerActive || _ticker.wake(), null == list && (this._listeners[type] = list = []), i = list.length; --i > -1;) listener = list[i], listener.c === callback && listener.s === scope ? list.splice(i, 1) : 0 === index && listener.pr < priority && (index = i + 1);
                        list.splice(index, 0, {
                            c: callback,
                            s: scope,
                            up: useParam,
                            pr: priority
                        })
                    }, p.removeEventListener = function(type, callback) {
                        var i, list = this._listeners[type];
                        if (list)
                            for (i = list.length; --i > -1;)
                                if (list[i].c === callback) return void list.splice(i, 1)
                    }, p.dispatchEvent = function(type) {
                        var i, t, listener, list = this._listeners[type];
                        if (list)
                            for (i = list.length, i > 1 && (list = list.slice(0)), t = this._eventTarget; --i > -1;) listener = list[i], listener && (listener.up ? listener.c.call(listener.s || t, {
                                type: type,
                                target: t
                            }) : listener.c.call(listener.s || t))
                    };
                    var _reqAnimFrame = window.requestAnimationFrame,
                        _cancelAnimFrame = window.cancelAnimationFrame,
                        _getTime = Date.now || function() {
                            return (new Date).getTime()
                        },
                        _lastUpdate = _getTime();
                    for (a = ["ms", "moz", "webkit", "o"], i = a.length; --i > -1 && !_reqAnimFrame;) _reqAnimFrame = window[a[i] + "RequestAnimationFrame"], _cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
                    _class("Ticker", function(fps, useRAF) {
                        var _fps, _req, _id, _gap, _nextTime, _self = this,
                            _startTime = _getTime(),
                            _useRAF = !(useRAF === !1 || !_reqAnimFrame) && "auto",
                            _lagThreshold = 500,
                            _adjustedLag = 33,
                            _tickWord = "tick",
                            _tick = function(manual) {
                                var overlap, dispatch, elapsed = _getTime() - _lastUpdate;
                                elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag), _lastUpdate += elapsed, _self.time = (_lastUpdate - _startTime) / 1e3, overlap = _self.time - _nextTime, (!_fps || overlap > 0 || manual === !0) && (_self.frame++, _nextTime += overlap + (overlap >= _gap ? .004 : _gap - overlap), dispatch = !0), manual !== !0 && (_id = _req(_tick)), dispatch && _self.dispatchEvent(_tickWord)
                            };
                        EventDispatcher.call(_self), _self.time = _self.frame = 0, _self.tick = function() {
                            _tick(!0)
                        }, _self.lagSmoothing = function(threshold, adjustedLag) {
                            return arguments.length ? (_lagThreshold = threshold || 1 / _tinyNum, void(_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0))) : _lagThreshold < 1 / _tinyNum
                        }, _self.sleep = function() {
                            null != _id && (_useRAF && _cancelAnimFrame ? _cancelAnimFrame(_id) : clearTimeout(_id), _req = _emptyFunc, _id = null, _self === _ticker && (_tickerActive = !1))
                        }, _self.wake = function(seamless) {
                            null !== _id ? _self.sleep() : seamless ? _startTime += -_lastUpdate + (_lastUpdate = _getTime()) : _self.frame > 10 && (_lastUpdate = _getTime() - _lagThreshold + 5), _req = 0 === _fps ? _emptyFunc : _useRAF && _reqAnimFrame ? _reqAnimFrame : function(f) {
                                return setTimeout(f, 1e3 * (_nextTime - _self.time) + 1 | 0)
                            }, _self === _ticker && (_tickerActive = !0), _tick(2)
                        }, _self.fps = function(value) {
                            return arguments.length ? (_fps = value, _gap = 1 / (_fps || 60), _nextTime = this.time + _gap, void _self.wake()) : _fps
                        }, _self.useRAF = function(value) {
                            return arguments.length ? (_self.sleep(), _useRAF = value, void _self.fps(_fps)) : _useRAF
                        }, _self.fps(fps), setTimeout(function() {
                            "auto" === _useRAF && _self.frame < 5 && "hidden" !== (_doc || {}).visibilityState && _self.useRAF(!1)
                        }, 1500)
                    }), p = gs.Ticker.prototype = new gs.events.EventDispatcher, p.constructor = gs.Ticker;
                    var Animation = _class("core.Animation", function(duration, vars) {
                        if (this.vars = vars = vars || {}, this._duration = this._totalDuration = duration || 0, this._delay = Number(vars.delay) || 0, this._timeScale = 1, this._active = vars.immediateRender === !0, this.data = vars.data, this._reversed = vars.reversed === !0, _rootTimeline) {
                            _tickerActive || _ticker.wake();
                            var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
                            tl.add(this, tl._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    _ticker = Animation.ticker = new gs.Ticker, p = Animation.prototype, p._dirty = p._gc = p._initted = p._paused = !1, p._totalTime = p._time = 0, p._rawPrevTime = -1, p._next = p._last = p._onUpdate = p._timeline = p.timeline = null, p._paused = !1;
                    var _checkTimeout = function() {
                        _tickerActive && _getTime() - _lastUpdate > 2e3 && ("hidden" !== (_doc || {}).visibilityState || !_ticker.lagSmoothing()) && _ticker.wake();
                        var t = setTimeout(_checkTimeout, 2e3);
                        t.unref && t.unref()
                    };
                    _checkTimeout(), p.play = function(from, suppressEvents) {
                        return null != from && this.seek(from, suppressEvents), this.reversed(!1).paused(!1)
                    }, p.pause = function(atTime, suppressEvents) {
                        return null != atTime && this.seek(atTime, suppressEvents), this.paused(!0)
                    }, p.resume = function(from, suppressEvents) {
                        return null != from && this.seek(from, suppressEvents), this.paused(!1)
                    }, p.seek = function(time, suppressEvents) {
                        return this.totalTime(Number(time), suppressEvents !== !1)
                    }, p.restart = function(includeDelay, suppressEvents) {
                        return this.reversed(!1).paused(!1).totalTime(includeDelay ? -this._delay : 0, suppressEvents !== !1, !0)
                    }, p.reverse = function(from, suppressEvents) {
                        return null != from && this.seek(from || this.totalDuration(), suppressEvents), this.reversed(!0).paused(!1)
                    }, p.render = function(time, suppressEvents, force) {}, p.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, p.isActive = function() {
                        var rawTime, tl = this._timeline,
                            startTime = this._startTime;
                        return !tl || !this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(!0)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - 1e-7
                    }, p._enabled = function(enabled, ignoreTimeline) {
                        return _tickerActive || _ticker.wake(), this._gc = !enabled, this._active = this.isActive(), ignoreTimeline !== !0 && (enabled && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !enabled && this.timeline && this._timeline._remove(this, !0)), !1
                    }, p._kill = function(vars, target) {
                        return this._enabled(!1, !1)
                    }, p.kill = function(vars, target) {
                        return this._kill(vars, target),
                            this
                    }, p._uncache = function(includeSelf) {
                        for (var tween = includeSelf ? this : this.timeline; tween;) tween._dirty = !0, tween = tween.timeline;
                        return this
                    }, p._swapSelfInParams = function(params) {
                        for (var i = params.length, copy = params.concat(); --i > -1;) "{self}" === params[i] && (copy[i] = this);
                        return copy
                    }, p._callback = function(type) {
                        var v = this.vars,
                            callback = v[type],
                            params = v[type + "Params"],
                            scope = v[type + "Scope"] || v.callbackScope || this,
                            l = params ? params.length : 0;
                        switch (l) {
                            case 0:
                                callback.call(scope);
                                break;
                            case 1:
                                callback.call(scope, params[0]);
                                break;
                            case 2:
                                callback.call(scope, params[0], params[1]);
                                break;
                            default:
                                callback.apply(scope, params)
                        }
                    }, p.eventCallback = function(type, callback, params, scope) {
                        if ("on" === (type || "").substr(0, 2)) {
                            var v = this.vars;
                            if (1 === arguments.length) return v[type];
                            null == callback ? delete v[type] : (v[type] = callback, v[type + "Params"] = _isArray(params) && params.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(params) : params, v[type + "Scope"] = scope), "onUpdate" === type && (this._onUpdate = callback)
                        }
                        return this
                    }, p.delay = function(value) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + value - this._delay), this._delay = value, this) : this._delay
                    }, p.duration = function(value) {
                        return arguments.length ? (this._duration = this._totalDuration = value, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== value && this.totalTime(this._totalTime * (value / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, p.totalDuration = function(value) {
                        return this._dirty = !1, arguments.length ? this.duration(value) : this._totalDuration
                    }, p.time = function(value, suppressEvents) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(value > this._duration ? this._duration : value, suppressEvents)) : this._time
                    }, p.totalTime = function(time, suppressEvents, uncapped) {
                        if (_tickerActive || _ticker.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (time < 0 && !uncapped && (time += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var totalDuration = this._totalDuration,
                                    tl = this._timeline;
                                if (time > totalDuration && !uncapped && (time = totalDuration), this._startTime = (this._paused ? this._pauseTime : tl._time) - (this._reversed ? totalDuration - time : time) / this._timeScale, tl._dirty || this._uncache(!1), tl._timeline)
                                    for (; tl._timeline;) tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale && tl.totalTime(tl._totalTime, !0), tl = tl._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === time && 0 !== this._duration || (_lazyTweens.length && _lazyRender(), this.render(time, suppressEvents, !1), _lazyTweens.length && _lazyRender())
                        }
                        return this
                    }, p.progress = p.totalProgress = function(value, suppressEvents) {
                        var duration = this.duration();
                        return arguments.length ? this.totalTime(duration * value, suppressEvents) : duration ? this._time / duration : this.ratio
                    }, p.startTime = function(value) {
                        return arguments.length ? (value !== this._startTime && (this._startTime = value, this.timeline && this.timeline._sortChildren && this.timeline.add(this, value - this._delay)), this) : this._startTime
                    }, p.endTime = function(includeRepeats) {
                        return this._startTime + (0 != includeRepeats ? this.totalDuration() : this.duration()) / this._timeScale
                    }, p.timeScale = function(value) {
                        if (!arguments.length) return this._timeScale;
                        var pauseTime, t;
                        for (value = value || _tinyNum, this._timeline && this._timeline.smoothChildTiming && (pauseTime = this._pauseTime, t = pauseTime || 0 === pauseTime ? pauseTime : this._timeline.totalTime(), this._startTime = t - (t - this._startTime) * this._timeScale / value), this._timeScale = value, t = this.timeline; t && t.timeline;) t._dirty = !0, t.totalDuration(), t = t.timeline;
                        return this
                    }, p.reversed = function(value) {
                        return arguments.length ? (value != this._reversed && (this._reversed = value, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, p.paused = function(value) {
                        if (!arguments.length) return this._paused;
                        var raw, elapsed, tl = this._timeline;
                        return value != this._paused && tl && (_tickerActive || value || _ticker.wake(), raw = tl.rawTime(), elapsed = raw - this._pauseTime, !value && tl.smoothChildTiming && (this._startTime += elapsed, this._uncache(!1)), this._pauseTime = value ? raw : null, this._paused = value, this._active = this.isActive(), !value && 0 !== elapsed && this._initted && this.duration() && (raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale, this.render(raw, raw === this._totalTime, !0))), this._gc && !value && this._enabled(!0, !1), this
                    };
                    var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
                        Animation.call(this, 0, vars), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    p = SimpleTimeline.prototype = new Animation, p.constructor = SimpleTimeline, p.kill()._gc = !1, p._first = p._last = p._recent = null, p._sortChildren = !1, p.add = p.insert = function(child, position, align, stagger) {
                        var prevTween, st;
                        if (child._startTime = Number(position || 0) + child._delay, child._paused && this !== child._timeline && (child._pauseTime = child._startTime + (this.rawTime() - child._startTime) / child._timeScale), child.timeline && child.timeline._remove(child, !0), child.timeline = child._timeline = this, child._gc && child._enabled(!0, !0), prevTween = this._last, this._sortChildren)
                            for (st = child._startTime; prevTween && prevTween._startTime > st;) prevTween = prevTween._prev;
                        return prevTween ? (child._next = prevTween._next, prevTween._next = child) : (child._next = this._first, this._first = child), child._next ? child._next._prev = child : this._last = child, child._prev = prevTween, this._recent = child, this._timeline && this._uncache(!0), this
                    }, p._remove = function(tween, skipDisable) {
                        return tween.timeline === this && (skipDisable || tween._enabled(!1, !0), tween._prev ? tween._prev._next = tween._next : this._first === tween && (this._first = tween._next), tween._next ? tween._next._prev = tween._prev : this._last === tween && (this._last = tween._prev), tween._next = tween._prev = tween.timeline = null, tween === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, p.render = function(time, suppressEvents, force) {
                        var next, tween = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = time; tween;) next = tween._next, (tween._active || time >= tween._startTime && !tween._paused && !tween._gc) && (tween._reversed ? tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, suppressEvents, force) : tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force)), tween = next
                    }, p.rawTime = function() {
                        return _tickerActive || _ticker.wake(), this._totalTime
                    };
                    var TweenLite = _class("TweenLite", function(target, duration, vars) {
                            if (Animation.call(this, duration, vars), this.render = TweenLite.prototype.render, null == target) throw "Cannot tween a null target.";
                            this.target = target = "string" != typeof target ? target : TweenLite.selector(target) || target;
                            var i, targ, targets, isSelector = target.jquery || target.length && target !== window && target[0] && (target[0] === window || target[0].nodeType && target[0].style && !target.nodeType),
                                overwrite = this.vars.overwrite;
                            if (this._overwrite = overwrite = null == overwrite ? _overwriteLookup[TweenLite.defaultOverwrite] : "number" == typeof overwrite ? overwrite >> 0 : _overwriteLookup[overwrite], (isSelector || target instanceof Array || target.push && _isArray(target)) && "number" != typeof target[0])
                                for (this._targets = targets = _slice(target), this._propLookup = [], this._siblings = [], i = 0; i < targets.length; i++) targ = targets[i], targ ? "string" != typeof targ ? targ.length && targ !== window && targ[0] && (targ[0] === window || targ[0].nodeType && targ[0].style && !targ.nodeType) ? (targets.splice(i--, 1), this._targets = targets = targets.concat(_slice(targ))) : (this._siblings[i] = _register(targ, this, !1), 1 === overwrite && this._siblings[i].length > 1 && _applyOverwrite(targ, this, null, 1, this._siblings[i])) : (targ = targets[i--] = TweenLite.selector(targ), "string" == typeof targ && targets.splice(i + 1, 1)) : targets.splice(i--, 1);
                            else this._propLookup = {}, this._siblings = _register(target, this, !1), 1 === overwrite && this._siblings.length > 1 && _applyOverwrite(target, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === duration && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_tinyNum, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        _isSelector = function(v) {
                            return v && v.length && v !== window && v[0] && (v[0] === window || v[0].nodeType && v[0].style && !v.nodeType)
                        },
                        _autoCSS = function(vars, target) {
                            var p, css = {};
                            for (p in vars) _reservedProps[p] || p in target && "transform" !== p && "x" !== p && "y" !== p && "width" !== p && "height" !== p && "className" !== p && "border" !== p || !(!_plugins[p] || _plugins[p] && _plugins[p]._autoCSS) || (css[p] = vars[p], delete vars[p]);
                            vars.css = css
                        };
                    p = TweenLite.prototype = new Animation, p.constructor = TweenLite, p.kill()._gc = !1, p.ratio = 0, p._firstPT = p._targets = p._overwrittenProps = p._startAt = null, p._notifyPluginsOfEnabled = p._lazy = !1, TweenLite.version = "1.20.4", TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1), TweenLite.defaultOverwrite = "auto", TweenLite.ticker = _ticker, TweenLite.autoSleep = 120, TweenLite.lagSmoothing = function(threshold, adjustedLag) {
                        _ticker.lagSmoothing(threshold, adjustedLag)
                    }, TweenLite.selector = window.$ || window.jQuery || function(e) {
                        var selector = window.$ || window.jQuery;
                        return selector ? (TweenLite.selector = selector, selector(e)) : "undefined" == typeof _doc ? e : _doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                    };
                    var _lazyTweens = [],
                        _lazyLookup = {},
                        _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        _relExp = /[\+-]=-?[\.\d]/,
                        _setRatio = function(v) {
                            for (var val, pt = this._firstPT, min = 1e-6; pt;) val = pt.blob ? 1 === v && null != this.end ? this.end : v ? this.join("") : this.start : pt.c * v + pt.s, pt.m ? val = pt.m(val, this._target || pt.t) : val < min && val > -min && !pt.blob && (val = 0), pt.f ? pt.fp ? pt.t[pt.p](pt.fp, val) : pt.t[pt.p](val) : pt.t[pt.p] = val, pt = pt._next
                        },
                        _blobDif = function(start, end, filter, pt) {
                            var startNums, endNums, num, i, l, nonNumbers, currentNum, a = [],
                                charIndex = 0,
                                s = "",
                                color = 0;
                            for (a.start = start, a.end = end, start = a[0] = start + "", end = a[1] = end + "", filter && (filter(a), start = a[0], end = a[1]), a.length = 0, startNums = start.match(_numbersExp) || [], endNums = end.match(_numbersExp) || [], pt && (pt._next = null, pt.blob = 1, a._firstPT = a._applyPT = pt), l = endNums.length, i = 0; i < l; i++) currentNum = endNums[i], nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex) - charIndex), s += nonNumbers || !i ? nonNumbers : ",", charIndex += nonNumbers.length, color ? color = (color + 1) % 5 : "rgba(" === nonNumbers.substr(-5) && (color = 1), currentNum === startNums[i] || startNums.length <= i ? s += currentNum : (s && (a.push(s), s = ""), num = parseFloat(startNums[i]), a.push(num), a._firstPT = {
                                _next: a._firstPT,
                                t: a,
                                p: a.length - 1,
                                s: num,
                                c: ("=" === currentNum.charAt(1) ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : parseFloat(currentNum) - num) || 0,
                                f: 0,
                                m: color && color < 4 ? Math.round : 0
                            }), charIndex += currentNum.length;
                            return s += end.substr(charIndex), s && a.push(s), a.setRatio = _setRatio, _relExp.test(end) && (a.end = null), a
                        },
                        _addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
                            "function" == typeof end && (end = end(index || 0, target));
                            var blob, type = typeof target[prop],
                                getterName = "function" !== type ? "" : prop.indexOf("set") || "function" != typeof target["get" + prop.substr(3)] ? prop : "get" + prop.substr(3),
                                s = "get" !== start ? start : getterName ? funcParam ? target[getterName](funcParam) : target[getterName]() : target[prop],
                                isRelative = "string" == typeof end && "=" === end.charAt(1),
                                pt = {
                                    t: target,
                                    p: prop,
                                    s: s,
                                    f: "function" === type,
                                    pg: 0,
                                    n: overwriteProp || prop,
                                    m: mod ? "function" == typeof mod ? mod : Math.round : 0,
                                    pr: 0,
                                    c: isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : parseFloat(end) - s || 0
                                };
                            if (("number" != typeof s || "number" != typeof end && !isRelative) && (funcParam || isNaN(s) || !isRelative && isNaN(end) || "boolean" == typeof s || "boolean" == typeof end ? (pt.fp = funcParam, blob = _blobDif(s, isRelative ? parseFloat(pt.s) + pt.c + (pt.s + "").replace(/[0-9\-\.]/g, "") : end, stringFilter || TweenLite.defaultStringFilter, pt), pt = {
                                    t: blob,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: overwriteProp || prop,
                                    pr: 0,
                                    m: 0
                                }) : (pt.s = parseFloat(s), isRelative || (pt.c = parseFloat(end) - pt.s || 0))), pt.c) return (pt._next = this._firstPT) && (pt._next._prev = pt), this._firstPT = pt, pt
                        },
                        _internals = TweenLite._internals = {
                            isArray: _isArray,
                            isSelector: _isSelector,
                            lazyTweens: _lazyTweens,
                            blobDif: _blobDif
                        },
                        _plugins = TweenLite._plugins = {},
                        _tweenLookup = _internals.tweenLookup = {},
                        _tweenLookupNum = 0,
                        _reservedProps = _internals.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1
                        },
                        _overwriteLookup = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline,
                        _rootTimeline = Animation._rootTimeline = new SimpleTimeline,
                        _nextGCFrame = 30,
                        _lazyRender = _internals.lazyRender = function() {
                            var tween, i = _lazyTweens.length;
                            for (_lazyLookup = {}; --i > -1;) tween = _lazyTweens[i], tween && tween._lazy !== !1 && (tween.render(tween._lazy[0], tween._lazy[1], !0), tween._lazy = !1);
                            _lazyTweens.length = 0
                        };
                    _rootTimeline._startTime = _ticker.time, _rootFramesTimeline._startTime = _ticker.frame, _rootTimeline._active = _rootFramesTimeline._active = !0, setTimeout(_lazyRender, 1), Animation._updateRoot = TweenLite.render = function() {
                        var i, a, p;
                        if (_lazyTweens.length && _lazyRender(), _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, !1, !1), _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, !1, !1), _lazyTweens.length && _lazyRender(), _ticker.frame >= _nextGCFrame) {
                            _nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
                            for (p in _tweenLookup) {
                                for (a = _tweenLookup[p].tweens, i = a.length; --i > -1;) a[i]._gc && a.splice(i, 1);
                                0 === a.length && delete _tweenLookup[p]
                            }
                            if (p = _rootTimeline._first, (!p || p._paused) && TweenLite.autoSleep && !_rootFramesTimeline._first && 1 === _ticker._listeners.tick.length) {
                                for (; p && p._paused;) p = p._next;
                                p || _ticker.sleep()
                            }
                        }
                    }, _ticker.addEventListener("tick", Animation._updateRoot);
                    var _register = function(target, tween, scrub) {
                            var a, i, id = target._gsTweenID;
                            if (_tweenLookup[id || (target._gsTweenID = id = "t" + _tweenLookupNum++)] || (_tweenLookup[id] = {
                                    target: target,
                                    tweens: []
                                }), tween && (a = _tweenLookup[id].tweens, a[i = a.length] = tween, scrub))
                                for (; --i > -1;) a[i] === tween && a.splice(i, 1);
                            return _tweenLookup[id].tweens
                        },
                        _onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
                            var r1, r2, func = overwrittenTween.vars.onOverwrite;
                            return func && (r1 = func(overwrittenTween, overwritingTween, target, killedProps)), func = TweenLite.onOverwrite, func && (r2 = func(overwrittenTween, overwritingTween, target, killedProps)), r1 !== !1 && r2 !== !1
                        },
                        _applyOverwrite = function(target, tween, props, mode, siblings) {
                            var i, changed, curTween, l;
                            if (1 === mode || mode >= 4) {
                                for (l = siblings.length, i = 0; i < l; i++)
                                    if ((curTween = siblings[i]) !== tween) curTween._gc || curTween._kill(null, target, tween) && (changed = !0);
                                    else if (5 === mode) break;
                                return changed
                            }
                            var globalStart, startTime = tween._startTime + _tinyNum,
                                overlaps = [],
                                oCount = 0,
                                zeroDur = 0 === tween._duration;
                            for (i = siblings.length; --i > -1;)(curTween = siblings[i]) === tween || curTween._gc || curTween._paused || (curTween._timeline !== tween._timeline ? (globalStart = globalStart || _checkOverlap(tween, 0, zeroDur), 0 === _checkOverlap(curTween, globalStart, zeroDur) && (overlaps[oCount++] = curTween)) : curTween._startTime <= startTime && curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime && ((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 2e-10 || (overlaps[oCount++] = curTween)));
                            for (i = oCount; --i > -1;)
                                if (curTween = overlaps[i], 2 === mode && curTween._kill(props, target, tween) && (changed = !0), 2 !== mode || !curTween._firstPT && curTween._initted) {
                                    if (2 !== mode && !_onOverwrite(curTween, tween)) continue;
                                    curTween._enabled(!1, !1) && (changed = !0)
                                } return changed
                        },
                        _checkOverlap = function(tween, reference, zeroDur) {
                            for (var tl = tween._timeline, ts = tl._timeScale, t = tween._startTime; tl._timeline;) {
                                if (t += tl._startTime, ts *= tl._timeScale, tl._paused) return -100;
                                tl = tl._timeline
                            }
                            return t /= ts, t > reference ? t - reference : zeroDur && t === reference || !tween._initted && t - reference < 2 * _tinyNum ? _tinyNum : (t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum ? 0 : t - reference - _tinyNum
                        };
                    p._init = function() {
                        var i, initPlugins, pt, p, startVars, l, v = this.vars,
                            op = this._overwrittenProps,
                            dur = this._duration,
                            immediate = !!v.immediateRender,
                            ease = v.ease;
                        if (v.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), startVars = {};
                            for (p in v.startAt) startVars[p] = v.startAt[p];
                            if (startVars.data = "isStart", startVars.overwrite = !1, startVars.immediateRender = !0, startVars.lazy = immediate && v.lazy !== !1, startVars.startAt = startVars.delay = null, startVars.onUpdate = v.onUpdate, startVars.onUpdateParams = v.onUpdateParams, startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this, this._startAt = TweenLite.to(this.target, 0, startVars), immediate)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== dur) return
                        } else if (v.runBackwards && 0 !== dur)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                0 !== this._time && (immediate = !1), pt = {};
                                for (p in v) _reservedProps[p] && "autoCSS" !== p || (pt[p] = v[p]);
                                if (pt.overwrite = 0, pt.data = "isFromStart", pt.lazy = immediate && v.lazy !== !1, pt.immediateRender = immediate, this._startAt = TweenLite.to(this.target, 0, pt), immediate) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            } if (this._ease = ease = ease ? ease instanceof Ease ? ease : "function" == typeof ease ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase : TweenLite.defaultEase, v.easeParams instanceof Array && ease.config && (this._ease = ease.config.apply(ease, v.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (l = this._targets.length, i = 0; i < l; i++) this._initProps(this._targets[i], this._propLookup[i] = {}, this._siblings[i], op ? op[i] : null, i) && (initPlugins = !0);
                        else initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
                        if (initPlugins && TweenLite._onPluginEvent("_onInitAllProps", this), op && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), v.runBackwards)
                            for (pt = this._firstPT; pt;) pt.s += pt.c, pt.c = -pt.c, pt = pt._next;
                        this._onUpdate = v.onUpdate, this._initted = !0
                    }, p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
                        var p, i, initPlugins, plugin, pt, v;
                        if (null == target) return !1;
                        _lazyLookup[target._gsTweenID] && _lazyRender(), this.vars.css || target.style && target !== window && target.nodeType && _plugins.css && this.vars.autoCSS !== !1 && _autoCSS(this.vars, target);
                        for (p in this.vars)
                            if (v = this.vars[p], _reservedProps[p]) v && (v instanceof Array || v.push && _isArray(v)) && v.join("").indexOf("{self}") !== -1 && (this.vars[p] = v = this._swapSelfInParams(v, this));
                            else if (_plugins[p] && (plugin = new _plugins[p])._onInitTween(target, this.vars[p], this, index)) {
                            for (this._firstPT = pt = {
                                    _next: this._firstPT,
                                    t: plugin,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: p,
                                    pg: 1,
                                    pr: plugin._priority,
                                    m: 0
                                }, i = plugin._overwriteProps.length; --i > -1;) propLookup[plugin._overwriteProps[i]] = this._firstPT;
                            (plugin._priority || plugin._onInitAllProps) && (initPlugins = !0), (plugin._onDisable || plugin._onEnable) && (this._notifyPluginsOfEnabled = !0), pt._next && (pt._next._prev = pt)
                        } else propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
                        return overwrittenProps && this._kill(overwrittenProps, target) ? this._initProps(target, propLookup, siblings, overwrittenProps, index) : this._overwrite > 1 && this._firstPT && siblings.length > 1 && _applyOverwrite(target, this, propLookup, this._overwrite, siblings) ? (this._kill(propLookup, target), this._initProps(target, propLookup, siblings, overwrittenProps, index)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (_lazyLookup[target._gsTweenID] = !0), initPlugins)
                    }, p.render = function(time, suppressEvents, force) {
                        var isComplete, callback, pt, rawPrevTime, prevTime = this._time,
                            duration = this._duration,
                            prevRawPrevTime = this._rawPrevTime;
                        if (time >= duration - 1e-7 && time >= 0) this._totalTime = this._time = duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (isComplete = !0, callback = "onComplete", force = force || this._timeline.autoRemoveChildren), 0 === duration && (this._initted || !this.vars.lazy || force) && (this._startTime === this._timeline._duration && (time = 0), (prevRawPrevTime < 0 || time <= 0 && time >= -1e-7 || prevRawPrevTime === _tinyNum && "isPause" !== this.data) && prevRawPrevTime !== time && (force = !0, prevRawPrevTime > _tinyNum && (callback = "onReverseComplete")), this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum);
                        else if (time < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== prevTime || 0 === duration && prevRawPrevTime > 0) && (callback = "onReverseComplete", isComplete = this._reversed), time < 0 && (this._active = !1, 0 === duration && (this._initted || !this.vars.lazy || force) && (prevRawPrevTime >= 0 && (prevRawPrevTime !== _tinyNum || "isPause" !== this.data) && (force = !0), this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum)), (!this._initted || this._startAt && this._startAt.progress()) && (force = !0);
                        else if (this._totalTime = this._time = time, this._easeType) {
                            var r = time / duration,
                                type = this._easeType,
                                pow = this._easePower;
                            (1 === type || 3 === type && r >= .5) && (r = 1 - r), 3 === type && (r *= 2), 1 === pow ? r *= r : 2 === pow ? r *= r * r : 3 === pow ? r *= r * r * r : 4 === pow && (r *= r * r * r * r), 1 === type ? this.ratio = 1 - r : 2 === type ? this.ratio = r : time / duration < .5 ? this.ratio = r / 2 : this.ratio = 1 - r / 2
                        } else this.ratio = this._ease.getRatio(time / duration);
                        if (this._time !== prevTime || force) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!force && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = prevTime, this._rawPrevTime = prevRawPrevTime, _lazyTweens.push(this), void(this._lazy = [time, suppressEvents]);
                                this._time && !isComplete ? this.ratio = this._ease.getRatio(this._time / duration) : isComplete && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== prevTime && time >= 0 && (this._active = !0), 0 === prevTime && (this._startAt && (time >= 0 ? this._startAt.render(time, !0, force) : callback || (callback = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== duration || suppressEvents || this._callback("onStart"))), pt = this._firstPT; pt;) pt.f ? pt.t[pt.p](pt.c * this.ratio + pt.s) : pt.t[pt.p] = pt.c * this.ratio + pt.s, pt = pt._next;
                            this._onUpdate && (time < 0 && this._startAt && time !== -1e-4 && this._startAt.render(time, !0, force), suppressEvents || (this._time !== prevTime || isComplete || force) && this._callback("onUpdate")), callback && (this._gc && !force || (time < 0 && this._startAt && !this._onUpdate && time !== -1e-4 && this._startAt.render(time, !0, force), isComplete && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !suppressEvents && this.vars[callback] && this._callback(callback), 0 === duration && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum && (this._rawPrevTime = 0)))
                        }
                    }, p._kill = function(vars, target, overwritingTween) {
                        if ("all" === vars && (vars = null), null == vars && (null == target || target === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        target = "string" != typeof target ? target || this._targets || this.target : TweenLite.selector(target) || target;
                        var i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed, simultaneousOverwrite = overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline;
                        if ((_isArray(target) || _isSelector(target)) && "number" != typeof target[0])
                            for (i = target.length; --i > -1;) this._kill(vars, target[i], overwritingTween) && (changed = !0);
                        else {
                            if (this._targets) {
                                for (i = this._targets.length; --i > -1;)
                                    if (target === this._targets[i]) {
                                        propLookup = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
                                        break
                                    }
                            } else {
                                if (target !== this.target) return !1;
                                propLookup = this._propLookup, overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all"
                            }
                            if (propLookup) {
                                if (killProps = vars || propLookup, record = vars !== overwrittenProps && "all" !== overwrittenProps && vars !== propLookup && ("object" != typeof vars || !vars._tempKill), overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
                                    for (p in killProps) propLookup[p] && (killed || (killed = []), killed.push(p));
                                    if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) return !1
                                }
                                for (p in killProps)(pt = propLookup[p]) && (simultaneousOverwrite && (pt.f ? pt.t[pt.p](pt.s) : pt.t[pt.p] = pt.s, changed = !0), pt.pg && pt.t._kill(killProps) && (changed = !0), pt.pg && 0 !== pt.t._overwriteProps.length || (pt._prev ? pt._prev._next = pt._next : pt === this._firstPT && (this._firstPT = pt._next), pt._next && (pt._next._prev = pt._prev), pt._next = pt._prev = null), delete propLookup[p]), record && (overwrittenProps[p] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return changed
                    }, p.invalidate = function() {
                        return this._notifyPluginsOfEnabled && TweenLite._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], Animation.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_tinyNum, this.render(Math.min(0, -this._delay))), this
                    }, p._enabled = function(enabled, ignoreTimeline) {
                        if (_tickerActive || _ticker.wake(), enabled && this._gc) {
                            var i, targets = this._targets;
                            if (targets)
                                for (i = targets.length; --i > -1;) this._siblings[i] = _register(targets[i], this, !0);
                            else this._siblings = _register(this.target, this, !0)
                        }
                        return Animation.prototype._enabled.call(this, enabled, ignoreTimeline), !(!this._notifyPluginsOfEnabled || !this._firstPT) && TweenLite._onPluginEvent(enabled ? "_onEnable" : "_onDisable", this)
                    }, TweenLite.to = function(target, duration, vars) {
                        return new TweenLite(target, duration, vars)
                    }, TweenLite.from = function(target, duration, vars) {
                        return vars.runBackwards = !0, vars.immediateRender = 0 != vars.immediateRender, new TweenLite(target, duration, vars)
                    }, TweenLite.fromTo = function(target, duration, fromVars, toVars) {
                        return toVars.startAt = fromVars, toVars.immediateRender = 0 != toVars.immediateRender && 0 != fromVars.immediateRender, new TweenLite(target, duration, toVars)
                    }, TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
                        return new TweenLite(callback, 0, {
                            delay: delay,
                            onComplete: callback,
                            onCompleteParams: params,
                            callbackScope: scope,
                            onReverseComplete: callback,
                            onReverseCompleteParams: params,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: useFrames,
                            overwrite: 0
                        })
                    }, TweenLite.set = function(target, vars) {
                        return new TweenLite(target, 0, vars)
                    }, TweenLite.getTweensOf = function(target, onlyActive) {
                        if (null == target) return [];
                        target = "string" != typeof target ? target : TweenLite.selector(target) || target;
                        var i, a, j, t;
                        if ((_isArray(target) || _isSelector(target)) && "number" != typeof target[0]) {
                            for (i = target.length, a = []; --i > -1;) a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
                            for (i = a.length; --i > -1;)
                                for (t = a[i], j = i; --j > -1;) t === a[j] && a.splice(i, 1)
                        } else if (target._gsTweenID)
                            for (a = _register(target).concat(), i = a.length; --i > -1;)(a[i]._gc || onlyActive && !a[i].isActive()) && a.splice(i, 1);
                        return a || []
                    }, TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
                        "object" == typeof onlyActive && (vars = onlyActive, onlyActive = !1);
                        for (var a = TweenLite.getTweensOf(target, onlyActive), i = a.length; --i > -1;) a[i]._kill(vars, target)
                    };
                    var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
                        this._overwriteProps = (props || "").split(","), this._propName = this._overwriteProps[0], this._priority = priority || 0, this._super = TweenPlugin.prototype
                    }, !0);
                    if (p = TweenPlugin.prototype, TweenPlugin.version = "1.19.0", TweenPlugin.API = 2, p._firstPT = null, p._addTween = _addPropTween, p.setRatio = _setRatio, p._kill = function(lookup) {
                            var i, a = this._overwriteProps,
                                pt = this._firstPT;
                            if (null != lookup[this._propName]) this._overwriteProps = [];
                            else
                                for (i = a.length; --i > -1;) null != lookup[a[i]] && a.splice(i, 1);
                            for (; pt;) null != lookup[pt.n] && (pt._next && (pt._next._prev = pt._prev), pt._prev ? (pt._prev._next = pt._next, pt._prev = null) : this._firstPT === pt && (this._firstPT = pt._next)), pt = pt._next;
                            return !1
                        }, p._mod = p._roundProps = function(lookup) {
                            for (var val, pt = this._firstPT; pt;) val = lookup[this._propName] || null != pt.n && lookup[pt.n.split(this._propName + "_").join("")], val && "function" == typeof val && (2 === pt.f ? pt.t._applyPT.m = val : pt.m = val), pt = pt._next
                        }, TweenLite._onPluginEvent = function(type, tween) {
                            var changed, pt2, first, last, next, pt = tween._firstPT;
                            if ("_onInitAllProps" === type) {
                                for (; pt;) {
                                    for (next = pt._next, pt2 = first; pt2 && pt2.pr > pt.pr;) pt2 = pt2._next;
                                    (pt._prev = pt2 ? pt2._prev : last) ? pt._prev._next = pt: first = pt, (pt._next = pt2) ? pt2._prev = pt : last = pt, pt = next
                                }
                                pt = tween._firstPT = first
                            }
                            for (; pt;) pt.pg && "function" == typeof pt.t[type] && pt.t[type]() && (changed = !0), pt = pt._next;
                            return changed
                        }, TweenPlugin.activate = function(plugins) {
                            for (var i = plugins.length; --i > -1;) plugins[i].API === TweenPlugin.API && (_plugins[(new plugins[i])._propName] = plugins[i]);
                            return !0
                        }, _gsDefine.plugin = function(config) {
                            if (!(config && config.propName && config.init && config.API)) throw "illegal plugin definition.";
                            var prop, propName = config.propName,
                                priority = config.priority || 0,
                                overwriteProps = config.overwriteProps,
                                map = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin", function() {
                                    TweenPlugin.call(this, propName, priority), this._overwriteProps = overwriteProps || []
                                }, config.global === !0),
                                p = Plugin.prototype = new TweenPlugin(propName);
                            p.constructor = Plugin, Plugin.API = config.API;
                            for (prop in map) "function" == typeof config[prop] && (p[map[prop]] = config[prop]);
                            return Plugin.version = config.version, TweenPlugin.activate([Plugin]), Plugin
                        }, a = window._gsQueue) {
                        for (i = 0; i < a.length; i++) a[i]();
                        for (p in _defLookup) _defLookup[p].func || window.console.log("GSAP encountered missing dependency: " + p)
                    }
                    _tickerActive = !1
                }
            }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax")
    }).call(exports, function() {
        return this
    }())
}, function(module, exports, __webpack_require__) {
    (function(process) {
        "use strict";

        function normalizeArray(parts, allowAboveRoot) {
            for (var res = [], i = 0; i < parts.length; i++) {
                var p = parts[i];
                p && "." !== p && (".." === p ? res.length && ".." !== res[res.length - 1] ? res.pop() : allowAboveRoot && res.push("..") : res.push(p))
            }
            return res
        }

        function trimArray(arr) {
            for (var lastIndex = arr.length - 1, start = 0; start <= lastIndex && !arr[start]; start++);
            for (var end = lastIndex; end >= 0 && !arr[end]; end--);
            return 0 === start && end === lastIndex ? arr : start > end ? [] : arr.slice(start, end + 1)
        }

        function win32SplitPath(filename) {
            var result = splitDeviceRe.exec(filename),
                device = (result[1] || "") + (result[2] || ""),
                tail = result[3] || "",
                result2 = splitTailRe.exec(tail),
                dir = result2[1],
                basename = result2[2],
                ext = result2[3];
            return [device, dir, basename, ext]
        }

        function win32StatPath(path) {
            var result = splitDeviceRe.exec(path),
                device = result[1] || "",
                isUnc = !!device && ":" !== device[1];
            return {
                device: device,
                isUnc: isUnc,
                isAbsolute: isUnc || !!result[2],
                tail: result[3]
            }
        }

        function normalizeUNCRoot(device) {
            return "\\\\" + device.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\")
        }

        function posixSplitPath(filename) {
            return splitPathRe.exec(filename).slice(1)
        }
        var isWindows = "win32" === process.platform,
            util = __webpack_require__(80),
            splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
            splitTailRe = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,
            win32 = {};
        win32.resolve = function() {
            for (var resolvedDevice = "", resolvedTail = "", resolvedAbsolute = !1, i = arguments.length - 1; i >= -1; i--) {
                var path;
                if (i >= 0 ? path = arguments[i] : resolvedDevice ? (path = process.env["=" + resolvedDevice], path && path.substr(0, 3).toLowerCase() === resolvedDevice.toLowerCase() + "\\" || (path = resolvedDevice + "\\")) : path = process.cwd(), !util.isString(path)) throw new TypeError("Arguments to path.resolve must be strings");
                if (path) {
                    var result = win32StatPath(path),
                        device = result.device,
                        isUnc = result.isUnc,
                        isAbsolute = result.isAbsolute,
                        tail = result.tail;
                    if ((!device || !resolvedDevice || device.toLowerCase() === resolvedDevice.toLowerCase()) && (resolvedDevice || (resolvedDevice = device), resolvedAbsolute || (resolvedTail = tail + "\\" + resolvedTail, resolvedAbsolute = isAbsolute), resolvedDevice && resolvedAbsolute)) break;
                }
            }
            return isUnc && (resolvedDevice = normalizeUNCRoot(resolvedDevice)), resolvedTail = normalizeArray(resolvedTail.split(/[\\\/]+/), !resolvedAbsolute).join("\\"), resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || "."
        }, win32.normalize = function(path) {
            var result = win32StatPath(path),
                device = result.device,
                isUnc = result.isUnc,
                isAbsolute = result.isAbsolute,
                tail = result.tail,
                trailingSlash = /[\\\/]$/.test(tail);
            return tail = normalizeArray(tail.split(/[\\\/]+/), !isAbsolute).join("\\"), tail || isAbsolute || (tail = "."), tail && trailingSlash && (tail += "\\"), isUnc && (device = normalizeUNCRoot(device)), device + (isAbsolute ? "\\" : "") + tail
        }, win32.isAbsolute = function(path) {
            return win32StatPath(path).isAbsolute
        }, win32.join = function() {
            for (var paths = [], i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (!util.isString(arg)) throw new TypeError("Arguments to path.join must be strings");
                arg && paths.push(arg)
            }
            var joined = paths.join("\\");
            return /^[\\\/]{2}[^\\\/]/.test(paths[0]) || (joined = joined.replace(/^[\\\/]{2,}/, "\\")), win32.normalize(joined)
        }, win32.relative = function(from, to) {
            from = win32.resolve(from), to = win32.resolve(to);
            for (var lowerFrom = from.toLowerCase(), lowerTo = to.toLowerCase(), toParts = trimArray(to.split("\\")), lowerFromParts = trimArray(lowerFrom.split("\\")), lowerToParts = trimArray(lowerTo.split("\\")), length = Math.min(lowerFromParts.length, lowerToParts.length), samePartsLength = length, i = 0; i < length; i++)
                if (lowerFromParts[i] !== lowerToParts[i]) {
                    samePartsLength = i;
                    break
                } if (0 == samePartsLength) return to;
            for (var outputParts = [], i = samePartsLength; i < lowerFromParts.length; i++) outputParts.push("..");
            return outputParts = outputParts.concat(toParts.slice(samePartsLength)), outputParts.join("\\")
        }, win32._makeLong = function(path) {
            if (!util.isString(path)) return path;
            if (!path) return "";
            var resolvedPath = win32.resolve(path);
            return /^[a-zA-Z]\:\\/.test(resolvedPath) ? "\\\\?\\" + resolvedPath : /^\\\\[^?.]/.test(resolvedPath) ? "\\\\?\\UNC\\" + resolvedPath.substring(2) : path
        }, win32.dirname = function(path) {
            var result = win32SplitPath(path),
                root = result[0],
                dir = result[1];
            return root || dir ? (dir && (dir = dir.substr(0, dir.length - 1)), root + dir) : "."
        }, win32.basename = function(path, ext) {
            var f = win32SplitPath(path)[2];
            return ext && f.substr(-1 * ext.length) === ext && (f = f.substr(0, f.length - ext.length)), f
        }, win32.extname = function(path) {
            return win32SplitPath(path)[3]
        }, win32.format = function(pathObject) {
            if (!util.isObject(pathObject)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof pathObject);
            var root = pathObject.root || "";
            if (!util.isString(root)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof pathObject.root);
            var dir = pathObject.dir,
                base = pathObject.base || "";
            return dir ? dir[dir.length - 1] === win32.sep ? dir + base : dir + win32.sep + base : base
        }, win32.parse = function(pathString) {
            if (!util.isString(pathString)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof pathString);
            var allParts = win32SplitPath(pathString);
            if (!allParts || 4 !== allParts.length) throw new TypeError("Invalid path '" + pathString + "'");
            return {
                root: allParts[0],
                dir: allParts[0] + allParts[1].slice(0, -1),
                base: allParts[2],
                ext: allParts[3],
                name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
            }
        }, win32.sep = "\\", win32.delimiter = ";";
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            posix = {};
        posix.resolve = function() {
            for (var resolvedPath = "", resolvedAbsolute = !1, i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                var path = i >= 0 ? arguments[i] : process.cwd();
                if (!util.isString(path)) throw new TypeError("Arguments to path.resolve must be strings");
                path && (resolvedPath = path + "/" + resolvedPath, resolvedAbsolute = "/" === path[0])
            }
            return resolvedPath = normalizeArray(resolvedPath.split("/"), !resolvedAbsolute).join("/"), (resolvedAbsolute ? "/" : "") + resolvedPath || "."
        }, posix.normalize = function(path) {
            var isAbsolute = posix.isAbsolute(path),
                trailingSlash = path && "/" === path[path.length - 1];
            return path = normalizeArray(path.split("/"), !isAbsolute).join("/"), path || isAbsolute || (path = "."), path && trailingSlash && (path += "/"), (isAbsolute ? "/" : "") + path
        }, posix.isAbsolute = function(path) {
            return "/" === path.charAt(0)
        }, posix.join = function() {
            for (var path = "", i = 0; i < arguments.length; i++) {
                var segment = arguments[i];
                if (!util.isString(segment)) throw new TypeError("Arguments to path.join must be strings");
                segment && (path += path ? "/" + segment : segment)
            }
            return posix.normalize(path)
        }, posix.relative = function(from, to) {
            from = posix.resolve(from).substr(1), to = posix.resolve(to).substr(1);
            for (var fromParts = trimArray(from.split("/")), toParts = trimArray(to.split("/")), length = Math.min(fromParts.length, toParts.length), samePartsLength = length, i = 0; i < length; i++)
                if (fromParts[i] !== toParts[i]) {
                    samePartsLength = i;
                    break
                } for (var outputParts = [], i = samePartsLength; i < fromParts.length; i++) outputParts.push("..");
            return outputParts = outputParts.concat(toParts.slice(samePartsLength)), outputParts.join("/")
        }, posix._makeLong = function(path) {
            return path
        }, posix.dirname = function(path) {
            var result = posixSplitPath(path),
                root = result[0],
                dir = result[1];
            return root || dir ? (dir && (dir = dir.substr(0, dir.length - 1)), root + dir) : "."
        }, posix.basename = function(path, ext) {
            var f = posixSplitPath(path)[2];
            return ext && f.substr(-1 * ext.length) === ext && (f = f.substr(0, f.length - ext.length)), f
        }, posix.extname = function(path) {
            return posixSplitPath(path)[3]
        }, posix.format = function(pathObject) {
            if (!util.isObject(pathObject)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof pathObject);
            var root = pathObject.root || "";
            if (!util.isString(root)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof pathObject.root);
            var dir = pathObject.dir ? pathObject.dir + posix.sep : "",
                base = pathObject.base || "";
            return dir + base
        }, posix.parse = function(pathString) {
            if (!util.isString(pathString)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof pathString);
            var allParts = posixSplitPath(pathString);
            if (!allParts || 4 !== allParts.length) throw new TypeError("Invalid path '" + pathString + "'");
            return allParts[1] = allParts[1] || "", allParts[2] = allParts[2] || "", allParts[3] = allParts[3] || "", {
                root: allParts[0],
                dir: allParts[0] + allParts[1].slice(0, -1),
                base: allParts[2],
                ext: allParts[3],
                name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
            }
        }, posix.sep = "/", posix.delimiter = ":", isWindows ? module.exports = win32 : module.exports = posix, module.exports.posix = posix, module.exports.win32 = win32
    }).call(exports, __webpack_require__(27))
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _GLExtensions = __webpack_require__(5),
        _GLExtensions2 = _interopRequireDefault(_GLExtensions),
        FrameBuffer = function() {
            function FrameBuffer() {
                var width = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 512,
                    height = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                    multiTargets = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                _classCallCheck(this, FrameBuffer), this.gl = POLY.gl;
                var gl = this.gl;
                this.width = width, this.height = height, this._multiTargets = multiTargets, _GLExtensions2.default.getExtension("OES_texture_float_linear");
                var extHalfFloat = _GLExtensions2.default.getExtension("OES_texture_half_float"),
                    type = gl.UNSIGNED_BYTE;
                if (_GLExtensions2.default.checkExtension("OES_texture_float") ? type = gl.FLOAT : extHalfFloat && (type = extHalfFloat.HALF_FLOAT_OES), this.depthTexture = null, this.textures = [], this._initTextures(type), this.framebuffer = gl.createFramebuffer(), gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer), POLY.webgl2) {
                    for (var buffers = [], i = 0; i < this.textures.length; i++) gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gl.TEXTURE_2D, this.textures[i]._texture, 0), buffers.push(gl["COLOR_ATTACHMENT" + i]);
                    gl.drawBuffers(buffers), gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture._texture, 0)
                } else if (this._multiTargets) {
                    for (var extDrawBuffer = _GLExtensions2.default.getExtension("WEBGL_draw_buffers"), _i = 0; _i < this.textures.length; _i++) gl.framebufferTexture2D(gl.FRAMEBUFFER, extDrawBuffer["COLOR_ATTACHMENT" + _i + "_WEBGL"], gl.TEXTURE_2D, this.textures[_i]._texture, 0);
                    gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE, extDrawBuffer.drawBuffersWEBGL([extDrawBuffer.COLOR_ATTACHMENT0_WEBGL, extDrawBuffer.COLOR_ATTACHMENT1_WEBGL, extDrawBuffer.COLOR_ATTACHMENT2_WEBGL, extDrawBuffer.COLOR_ATTACHMENT3_WEBGL]), this.depthTexture
                } else {
                    var renderBufferDepth = gl.createRenderbuffer();
                    gl.bindRenderbuffer(gl.RENDERBUFFER, renderBufferDepth), gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height), gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.textures[0]._texture, 0), gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderBufferDepth)
                }
                this.clean()
            }
            return _createClass(FrameBuffer, [{
                key: "_initTextures",
                value: function(type) {
                    for (var gl = this.gl, numTextures = this._multiTargets ? 4 : 1, i = 0; i < numTextures; i++) {
                        var texture = this._createTexture(gl.RGBA, gl.RGBA, type);
                        this.textures.push(texture)
                    }
                    this.gltexture = this.textures[0], POLY.webgl2 && (this.depthTexture = this._createTexture(gl.DEPTH_COMPONENT24, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT))
                }
            }, {
                key: "_createTexture",
                value: function(internalFormat, format, type, data) {
                    var gl = this.gl;
                    internalFormat = internalFormat || gl.RGBA, format = format || gl.RGBA, type = type || gl.UNSIGNED_BYTE, data = data || null;
                    var texture = gl.createTexture(),
                        glt = new POLY.Texture(texture, !0);
                    return gl.bindTexture(gl.TEXTURE_2D, texture), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST), gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, this.width, this.height, 0, format, type, data), gl.bindTexture(gl.TEXTURE_2D, null), glt
                }
            }, {
                key: "getTexture",
                value: function(index) {
                    return this.textures[index]
                }
            }, {
                key: "bind",
                value: function() {
                    var gl = this.gl;
                    gl.viewport(0, 0, this.width, this.height), gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer), gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
                }
            }, {
                key: "unbind",
                value: function() {
                    var gl = this.gl;
                    gl.bindFramebuffer(gl.FRAMEBUFFER, null), gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
                }
            }, {
                key: "clean",
                value: function() {
                    var gl = this.gl;
                    gl.bindTexture(gl.TEXTURE_2D, null), gl.bindRenderbuffer(gl.RENDERBUFFER, null), gl.bindFramebuffer(gl.FRAMEBUFFER, null)
                }
            }, {
                key: "clear",
                value: function() {
                    this.bind(), this.gl.clear(0, 0, 0, 0), this.unbind()
                }
            }]), FrameBuffer
        }();
    exports.default = FrameBuffer, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _State = __webpack_require__(6),
        _State2 = _interopRequireDefault(_State),
        _GLExtensions = __webpack_require__(5),
        _GLExtensions2 = _interopRequireDefault(_GLExtensions),
        _getAndApplyExtension = __webpack_require__(26),
        _getAndApplyExtension2 = _interopRequireDefault(_getAndApplyExtension);
    exports.default = new(function() {
        function GLTool() {
            _classCallCheck(this, GLTool), this._lastMesh = null, this._lastProgram = null, this.aspectRatio = 0, this.state = null, this.enabledVertexAttributes = [], this.scale = 1, this.instancedAttributes = []
        }
        return _createClass(GLTool, [{
            key: "init",
            value: function(gl) {
                this.state = new _State2.default(gl), _GLExtensions2.default.init(), this._hasInstance = _GLExtensions2.default.checkExtension("ANGLE_instanced_arrays"), this._instanceExt = _GLExtensions2.default.getExtension("ANGLE_instanced_arrays"), (0, _getAndApplyExtension2.default)(gl, "WEBGL_draw_buffers")
            }
        }, {
            key: "_bindBuffers",
            value: function(mesh) {
                for (var gl = mesh.program.gl, i = 0; i < mesh._attributes.length; i++) {
                    var attrib = mesh._attributes[i];
                    gl.bindBuffer(gl.ARRAY_BUFFER, attrib.buffer);
                    var attribLocation = mesh.program.getAttributeLocation(attrib.name);
                    gl.vertexAttribPointer(attribLocation, attrib.itemSize, gl.FLOAT, !1, 0, 0), mesh.instanceCount > 0 && attrib.instance && this._hasInstance && (this._instanceExt.vertexAttribDivisorANGLE(attribLocation, 1), this.instancedAttributes.push(attribLocation)), this.enabledVertexAttributes.indexOf(attribLocation) === -1 && (this.enabledVertexAttributes.push(attribLocation), gl.enableVertexAttribArray(attribLocation))
                }
                mesh.indexBuffer && gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.indexBuffer)
            }
        }, {
            key: "setCamera",
            value: function(camera) {
                this._camera = camera
            }
        }, {
            key: "_updateMatrices",
            value: function(mesh) {
                var program = mesh.program;
                program.uniforms.projectionMatrix = this._camera.projectionMatrix, program.uniforms.viewMatrix = this._camera.matrix, program.uniforms.modelMatrix = mesh._matrix
            }
        }, {
            key: "draw",
            value: function(mesh) {
                this._lastMesh !== mesh && (this.resetInstancedAttribute(), this._bindBuffers(mesh), this._lastMesh = mesh), this._lastProgram !== mesh.program && (this._lastProgram = mesh.program), mesh.update();
                var gl = mesh.program.gl;
                mesh.state && this.state.setState(mesh.state), this._camera && this._updateMatrices(mesh), mesh.instanceCount > 0 && this._hasInstance ? mesh.indexBuffer ? this._instanceExt.drawElementsInstancedANGLE(mesh.drawType, mesh._indices.length, gl.UNSIGNED_SHORT, 0, mesh.instanceCount) : this._instanceExt.drawArraysInstancedANGLE(mesh.drawType, 0, mesh._numItems, mesh.instanceCount) : mesh.indexBuffer ? gl.drawElements(mesh.drawType, mesh._indices.length, gl.UNSIGNED_SHORT, 0) : gl.drawArrays(mesh.drawType, 0, mesh._numItems)
            }
        }, {
            key: "resetInstancedAttribute",
            value: function() {
                if (this.instancedAttributes.length > 0 && this._hasInstance) {
                    for (var i = 0; i < this.instancedAttributes.length; i++) {
                        var attribLocation = this.instancedAttributes[i];
                        this._instanceExt.vertexAttribDivisorANGLE(attribLocation, 0)
                    }
                    this.instancedAttributes = []
                }
            }
        }, {
            key: "resize",
            value: function(w, h) {
                var gl = POLY.gl,
                    scale = window.devicePixelRatio;
                scale > 2 && (scale = 2), w *= scale, h *= scale, gl.canvas.width = w, gl.canvas.height = h, gl.viewportWidth = w, gl.viewportHeight = h, gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight), this.aspectRatio = w / h, this.scale = scale
            }
        }]), GLTool
    }()), module.exports = exports.default
}, function(module, exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var UniformGroup = function UniformGroup(data, program) {
        _classCallCheck(this, UniformGroup);
        for (var p in data) this[p] = data[p];
        this.__data = {};
        var self = this;
        for (var p in self) {
            if ("__data" === p) return;
            self.__data[p] = self[p],
                function(name) {
                    Object.defineProperty(self, name, {
                        get: function() {
                            return self.__data[name].value
                        },
                        set: function(value) {
                            self.__data[name].value = value;
                            var type = self.__data[name].type,
                                glFunction = POLY.CONST.uniformTypes[type],
                                gl = program.gl;
                            type.indexOf("mat") === -1 ? "texture" === type ? gl[glFunction](program.getUniformLocation(name), value, self.__data[name].index) : gl[glFunction](program.getUniformLocation(name), value) : gl[glFunction](program.getUniformLocation(name), !1, value)
                        }
                    })
                }(p)
        }
    };
    exports.default = UniformGroup, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _glMatrix = __webpack_require__(3),
        _Ray = __webpack_require__(24),
        _Ray2 = _interopRequireDefault(_Ray),
        Camera = function() {
            function Camera() {
                _classCallCheck(this, Camera), this.aspectRatio = _glMatrix.mat4.create(), this.matrix = _glMatrix.mat4.create(), this.projectionMatrix = _glMatrix.mat4.create(), this.mRX = _glMatrix.mat4.create(), this.mRY = _glMatrix.mat4.create(), this.mRZ = _glMatrix.mat4.create(), this.mT = _glMatrix.mat4.create(), this.inverseViewProj = _glMatrix.mat4.create(), this.cameraDir = _glMatrix.vec3.create(), this.position = _glMatrix.vec3.create()
            }
            return _createClass(Camera, [{
                key: "getRay",
                value: function(pos, ray) {
                    var proj = this.projectionMatrix,
                        view = this.matrix;
                    return _glMatrix.mat4.multiply(this.inverseViewProj, proj, view), _glMatrix.mat4.invert(this.inverseViewProj, this.inverseViewProj), _glMatrix.vec3.transformMat4(this.cameraDir, pos, this.inverseViewProj), _glMatrix.vec3.sub(this.cameraDir, this.cameraDir, this.position), _glMatrix.vec3.normalize(this.cameraDir, this.cameraDir), ray ? (ray.origin = this.position, ray.direction = this.cameraDir) : ray = new _Ray2.default(this.position, this.cameraDir), ray
                }
            }, {
                key: "lookAt",
                value: function(target) {
                    var up = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 1, 0];
                    _glMatrix.mat4.lookAt(this.matrix, this.position, target, up)
                }
            }, {
                key: "rotateY",
                value: function(angle) {
                    _glMatrix.mat4.fromYRotation(this.mRY, angle)
                }
            }, {
                key: "rotateX",
                value: function(angle) {
                    _glMatrix.mat4.identity(this.mRX), _glMatrix.mat4.fromXRotation(this.mRX, angle)
                }
            }, {
                key: "rotateZ",
                value: function(angle) {
                    _glMatrix.mat4.identity(this.mRZ), _glMatrix.mat4.fromXRotation(this.mRZ, angle)
                }
            }, {
                key: "setRotation",
                value: function(x, y, z) {}
            }, {
                key: "setPosition",
                value: function(x, y, z) {
                    this.position = [x, y, z], _glMatrix.mat4.identity(this.mT, this.mT), _glMatrix.mat4.translate(this.mT, this.mT, [x, y, z])
                }
            }, {
                key: "setAspectRatio",
                value: function(aspectRatio) {
                    this.aspectRatio = aspectRatio, this.perspective(this.fov, aspectRatio, this.near, this.far)
                }
            }, {
                key: "perspective",
                value: function(fov, aspect, near, far) {
                    _glMatrix.mat4.perspective(this.projectionMatrix, fov, aspect, near, far), this.fov = fov, this.near = near, this.far = far, this.aspect = aspect
                }
            }, {
                key: "orthographic",
                value: function(left, right, bottom, top, near, far, dst) {
                    return dst = dst || new Float32Array(16), dst[0] = 2 / (right - left), dst[1] = 0, dst[2] = 0, dst[3] = 0, dst[4] = 0, dst[5] = 2 / (top - bottom), dst[6] = 0, dst[7] = 0, dst[8] = 0, dst[9] = 0, dst[10] = 2 / (near - far), dst[11] = 0, dst[12] = (left + right) / (left - right), dst[13] = (bottom + top) / (bottom - top), dst[14] = (near + far) / (near - far), dst[15] = 1, dst
                }
            }]), Camera
        }();
    exports.default = Camera, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _Camera = __webpack_require__(49),
        _Camera2 = _interopRequireDefault(_Camera);
    exports.default = {
        PerspectiveCamera: _Camera2.default
    }, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _glMatrix = __webpack_require__(3),
        getCursorPos = function(e) {
            return e.touches ? {
                x: e.touches[0].pageX,
                y: e.touches[0].pageY
            } : {
                x: e.clientX,
                y: e.clientY
            }
        },
        UP = _glMatrix.vec3.fromValues(0, 1, 0),
        OrbitalCameraControl = (Math.PI / 2 - .01, function() {
            function OrbitalCameraControl(mViewMatrix) {
                var mRadius = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                    mListenerTarget = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
                _classCallCheck(this, OrbitalCameraControl), this._mtxTarget = mViewMatrix, this._radius = mRadius, this._targetRadius = mRadius, this._listenerTarget = mListenerTarget, this._isDown = !1, this._rotation = _glMatrix.mat4.create(), this.center = _glMatrix.vec3.create(), this.easing = .1, this.senstivity = 1, this.senstivityRotation = 1, this._isLocked = !1, this._isZoomLocked = !1, this._rx = 0, this._trx = 0, this._prevx = 0, this._ry = 0, this._try = 0, this._prevy = 0, this._quat = _glMatrix.quat.create(), this._vec = _glMatrix.vec3.create(), this._position = _glMatrix.vec3.create(), this._mtx = _glMatrix.mat4.create(), this._mouseDown = {
                    x: 0,
                    y: 0
                }, this._mouse = {
                    x: 0,
                    y: 0
                }
            }
            return _createClass(OrbitalCameraControl, [{
                key: "_init",
                value: function() {
                    var _this = this;
                    this._listenerTarget.addEventListener("mousedown", function(e) {
                        return _this._onDown(e)
                    }), this._listenerTarget.addEventListener("mouseup", function() {
                        return _this._onUp()
                    }), this._listenerTarget.addEventListener("mousemove", function(e) {
                        return _this._onMove(e)
                    }), this._listenerTarget.addEventListener("touchstart", function(e) {
                        return _this._onDown(e)
                    }), this._listenerTarget.addEventListener("touchend", function() {
                        return _this._onUp()
                    }), this._listenerTarget.addEventListener("touchmove", function(e) {
                        return _this._onMove(e)
                    }), this._listenerTarget.addEventListener("mousewheel", function(e) {
                        return _this._onWheel(e)
                    }), this._listenerTarget.addEventListener("DOMMouseScroll", function(e) {
                        return _this._onWheel(e)
                    })
                }
            }, {
                key: "lock",
                value: function(mValue) {
                    this._isLocked = mValue
                }
            }, {
                key: "lockZoom",
                value: function(mValue) {
                    this._isZoomLocked = mValue
                }
            }, {
                key: "_onWheel",
                value: function(e) {
                    if (!this._isZoomLocked) {
                        var w = e.wheelDelta,
                            d = e.detail,
                            value = 0;
                        value = d ? w ? w / d / 40 * d > 0 ? 1 : -1 : -d / 3 : w / 120, this._targetRadius += 2 * -value * this.senstivity, this._targetRadius < .01 && (this._targetRadius = .01)
                    }
                }
            }, {
                key: "_onDown",
                value: function(e) {
                    this._isLocked || (this._isDown = !0, this._mouseDown = getCursorPos(e), this._mouse = getCursorPos(e), this._prevx = this._trx = this._rx, this._prevy = this._try = this._ry)
                }
            }, {
                key: "_onMove",
                value: function(e) {
                    this._isLocked || this._isDown && (this._mouse = getCursorPos(e))
                }
            }, {
                key: "_onUp",
                value: function() {
                    this._isLocked || (this._isDown = !1)
                }
            }, {
                key: "update",
                value: function() {
                    var dx = this._mouse.x - this._mouseDown.x,
                        dy = this._mouse.y - this._mouseDown.y,
                        senstivity = .02 * this.senstivityRotation;
                    this._try = this._prevy - dx * senstivity, this._trx = this._prevx - dy * senstivity, this._trx < -Math.PI / 2 + .01 ? this._trx = -Math.PI / 2 + .01 : this._trx > Math.PI / 2 - .01 && (this._trx = Math.PI / 2 - .01), this._rx += (this._trx - this._rx) * this.easing, this._ry += (this._try - this._ry) * this.easing, this._radius += (this._targetRadius - this._radius) * this.easing, _glMatrix.quat.identity(this._quat), _glMatrix.quat.rotateY(this._quat, this._quat, this._ry), _glMatrix.quat.rotateX(this._quat, this._quat, this._rx), _glMatrix.vec3.set(this._vec, 0, 0, this._radius), _glMatrix.vec3.transformQuat(this._vec, this._vec, this._quat), _glMatrix.mat4.identity(this._mtx), _glMatrix.mat4.lookAt(this._mtx, this._vec, this.center, UP), this._mtxTarget && _glMatrix.mat4.copy(this._mtxTarget, this._mtx), this._position[1] = -Math.sin(this._rx) * this._radius;
                    var tr = Math.cos(this._rx) * this._radius;
                    this._position[2] = Math.cos(this._ry + 2 * Math.PI) * tr, this._position[0] = Math.sin(this._ry + 2 * Math.PI) * tr
                }
            }]), OrbitalCameraControl
        }());
    exports.default = OrbitalCameraControl, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _OrbitalControl = __webpack_require__(51),
        _OrbitalControl2 = _interopRequireDefault(_OrbitalControl);
    exports.default = {
        OrbitalControl: _OrbitalControl2.default
    }, module.exports = exports.default
}, function(module, exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        Vector = function() {
            function Vector(cb) {
                return _classCallCheck(this, Vector), this.cb = cb, this._x = 0, this._y = 0, this._z = 0, this
            }
            return _createClass(Vector, [{
                key: "set",
                value: function(x, y, z) {
                    x || (x = 0), void 0 === y && (y = z = x), this._x = x, this._y = y, this._z = z, this.cb && this.cb()
                }
            }, {
                key: "x",
                get: function() {
                    return this._x
                },
                set: function(value) {
                    this._x = value, this.cb && this.cb()
                }
            }, {
                key: "y",
                get: function() {
                    return this._y
                },
                set: function(value) {
                    this._y = value, this.cb && this.cb()
                }
            }, {
                key: "z",
                get: function() {
                    return this._z
                },
                set: function(value) {
                    this._z = value, this.cb && this.cb()
                }
            }]), Vector
        }();
    exports.default = Vector, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _glMatrix = __webpack_require__(3),
        _core = __webpack_require__(25),
        _core2 = _interopRequireDefault(_core),
        Object3D = function() {
            function Object3D() {
                _classCallCheck(this, Object3D), this._matrix = _glMatrix.mat4.create(), this._needsUpdate = !1, this.position = new _core2.default.Vector(this._onPropertyUpdate.bind(this)), this.scale = new _core2.default.Vector(this._onPropertyUpdate.bind(this)), this.scale.set(1, 1, 1), this.rotation = new _core2.default.Vector(this._onPropertyUpdate.bind(this)), this._rotation = _glMatrix.vec3.create(), this._scale = _glMatrix.vec3.fromValues(1, 1, 1), this._position = _glMatrix.vec3.create()
            }
            return _createClass(Object3D, [{
                key: "_onPropertyUpdate",
                value: function() {
                    this._needsUpdate = !0
                }
            }, {
                key: "_updateMatrix",
                value: function() {
                    _glMatrix.vec3.set(this._scale, this.scale.x, this.scale.y, this.scale.z), _glMatrix.vec3.set(this._position, this.position.x, this.position.y, this.position.z), _glMatrix.vec3.set(this._rotation, this.rotation.x, this.rotation.y, this.rotation.z), _glMatrix.mat4.identity(this._matrix, this._matrix), _glMatrix.mat4.translate(this._matrix, this._matrix, this._position), _glMatrix.mat4.rotateX(this._matrix, this._matrix, this._rotation[0]), _glMatrix.mat4.rotateY(this._matrix, this._matrix, this._rotation[1]), _glMatrix.mat4.rotateZ(this._matrix, this._matrix, this._rotation[2]), _glMatrix.mat4.scale(this._matrix, this._matrix, this._scale)
                }
            }, {
                key: "update",
                value: function() {
                    this._needsUpdate && this._updateMatrix()
                }
            }]), Object3D
        }();
    exports.default = Object3D, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _Mesh = __webpack_require__(2),
        _Mesh2 = _interopRequireDefault(_Mesh),
        _Cube = __webpack_require__(57),
        _Cube2 = _interopRequireDefault(_Cube),
        _Sphere = __webpack_require__(62),
        _Sphere2 = _interopRequireDefault(_Sphere),
        _IcoSphere = __webpack_require__(58),
        _IcoSphere2 = _interopRequireDefault(_IcoSphere),
        _Plane = __webpack_require__(60),
        _Plane2 = _interopRequireDefault(_Plane),
        _BigTriangle = __webpack_require__(56),
        _BigTriangle2 = _interopRequireDefault(_BigTriangle),
        _Quad = __webpack_require__(61),
        _Quad2 = _interopRequireDefault(_Quad),
        _Line = __webpack_require__(59),
        _Line2 = _interopRequireDefault(_Line);
    exports.default = {
        Mesh: _Mesh2.default,
        Cube: _Cube2.default,
        Sphere: _Sphere2.default,
        IcoSphere: _IcoSphere2.default,
        BigTriangle: _BigTriangle2.default,
        Quad: _Quad2.default,
        Plane: _Plane2.default,
        Line: _Line2.default
    }, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _Mesh2 = __webpack_require__(2),
        _Mesh3 = _interopRequireDefault(_Mesh2),
        _FacesMultiplicator = __webpack_require__(7),
        _FacesSeparator = (_interopRequireDefault(_FacesMultiplicator), __webpack_require__(8)),
        BigTriangle = (_interopRequireDefault(_FacesSeparator), function(_Mesh) {
            function BigTriangle(program) {
                var state = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, arguments[2]),
                    drawType = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4;
                _classCallCheck(this, BigTriangle);
                var _this = _possibleConstructorReturn(this, (BigTriangle.__proto__ || Object.getPrototypeOf(BigTriangle)).call(this, program, state, drawType)),
                    indices = [2, 1, 0],
                    positions = [-1, -1, -1, 4, 4, -1];
                return _this.addPosition(positions, "aPosition", 2), _this.addIndices(indices, !1), _this
            }
            return _inherits(BigTriangle, _Mesh), BigTriangle
        }(_Mesh3.default));
    exports.default = BigTriangle, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _Mesh2 = __webpack_require__(2),
        _Mesh3 = _interopRequireDefault(_Mesh2),
        _FacesMultiplicator = __webpack_require__(7),
        _FacesMultiplicator2 = _interopRequireDefault(_FacesMultiplicator),
        _FacesSeparator = __webpack_require__(8),
        Cube = (_interopRequireDefault(_FacesSeparator), function(_Mesh) {
            function Cube(program) {
                var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    state = arguments[2],
                    drawType = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4;
                _classCallCheck(this, Cube);
                var _this = _possibleConstructorReturn(this, (Cube.__proto__ || Object.getPrototypeOf(Cube)).call(this, program, state, drawType));
                return data = data || {}, _this.options = {
                    w: data.w || 1,
                    h: data.h || 1,
                    d: data.d || 1,
                    multiFace: data.multiFace,
                    subdivision: data.subdivision || 0,
                    positionAttributeName: data.positionAttributeName || "aPosition"
                }, _this.multiFace = _this.options.multiFace, _this.subdivision = _this.options.subdivision, _this.width = _this.options.w, _this.height = _this.options.h, _this.depth = _this.options.d, _this.cube(), _this
            }
            return _inherits(Cube, _Mesh), _createClass(Cube, [{
                key: "cube",
                value: function() {
                    var x = this.width / 2,
                        y = this.height / 2,
                        z = this.depth / 2,
                        positions = [],
                        coords = [],
                        indices = [],
                        normals = [],
                        count = 0;
                    positions.push(-x, y, -z), positions.push(x, y, -z), positions.push(x, -y, -z), positions.push(-x, -y, -z), normals.push(0, 0, -1), normals.push(0, 0, -1), normals.push(0, 0, -1), normals.push(0, 0, -1), this.multiFace ? (coords.push(0, 0), coords.push(.25, 0), coords.push(.25, .5), coords.push(0, .5)) : (coords.push(0, 0), coords.push(1, 0), coords.push(1, 1), coords.push(0, 1)), indices.push(4 * count + 0), indices.push(4 * count + 1), indices.push(4 * count + 2), indices.push(4 * count + 0), indices.push(4 * count + 2), indices.push(4 * count + 3), count++, positions.push(x, y, -z), positions.push(x, y, z), positions.push(x, -y, z), positions.push(x, -y, -z), normals.push(1, 0, 0), normals.push(1, 0, 0), normals.push(1, 0, 0), normals.push(1, 0, 0), this.multiFace ? (coords.push(.25, 0), coords.push(.5, 0), coords.push(.5, .5), coords.push(.25, .5)) : (coords.push(0, 0), coords.push(1, 0), coords.push(1, 1), coords.push(0, 1)), indices.push(4 * count + 0), indices.push(4 * count + 1), indices.push(4 * count + 2), indices.push(4 * count + 0), indices.push(4 * count + 2), indices.push(4 * count + 3), count++, positions.push(x, y, z), positions.push(-x, y, z), positions.push(-x, -y, z), positions.push(x, -y, z), normals.push(0, 0, 1), normals.push(0, 0, 1), normals.push(0, 0, 1), normals.push(0, 0, 1), this.multiFace ? (coords.push(.5, 0), coords.push(.75, 0), coords.push(.75, .5), coords.push(.5, .5)) : (coords.push(0, 0), coords.push(1, 0), coords.push(1, 1), coords.push(0, 1)), indices.push(4 * count + 0), indices.push(4 * count + 1), indices.push(4 * count + 2), indices.push(4 * count + 0), indices.push(4 * count + 2), indices.push(4 * count + 3), count++, positions.push(-x, y, z), positions.push(-x, y, -z), positions.push(-x, -y, -z), positions.push(-x, -y, z), normals.push(-1, 0, 0), normals.push(-1, 0, 0), normals.push(-1, 0, 0), normals.push(-1, 0, 0), this.multiFace ? (coords.push(0, .5), coords.push(.25, .5), coords.push(.25, 1), coords.push(0, 1)) : (coords.push(0, 0), coords.push(1, 0), coords.push(1, 1), coords.push(0, 1)), indices.push(4 * count + 0), indices.push(4 * count + 1), indices.push(4 * count + 2), indices.push(4 * count + 0), indices.push(4 * count + 2), indices.push(4 * count + 3), count++, positions.push(-x, y, z), positions.push(x, y, z), positions.push(x, y, -z), positions.push(-x, y, -z), normals.push(0, 1, 0), normals.push(0, 1, 0), normals.push(0, 1, 0), normals.push(0, 1, 0), this.multiFace ? (coords.push(.25, .5), coords.push(.5, .5), coords.push(.5, 1), coords.push(.25, 1)) : (coords.push(0, 0), coords.push(1, 0), coords.push(1, 1), coords.push(0, 1)), indices.push(4 * count + 0), indices.push(4 * count + 1), indices.push(4 * count + 2), indices.push(4 * count + 0), indices.push(4 * count + 2), indices.push(4 * count + 3), count++, positions.push(-x, -y, -z), positions.push(x, -y, -z), positions.push(x, -y, z), positions.push(-x, -y, z), normals.push(0, -1, 0), normals.push(0, -1, 0), normals.push(0, -1, 0), normals.push(0, -1, 0), this.multiFace ? (coords.push(.5, .5), coords.push(.75, .5), coords.push(.75, 1), coords.push(.5, 1)) : (coords.push(0, 0), coords.push(1, 0), coords.push(1, 1), coords.push(0, 1)), indices.push(4 * count + 0), indices.push(4 * count + 1), indices.push(4 * count + 2), indices.push(4 * count + 0), indices.push(4 * count + 2), indices.push(4 * count + 3);
                    for (var ind = [], i = 0; i < indices.length; i += 3) ind.push(indices[i], indices[i + 1], indices[i + 2]);
                    for (var faces = _FacesMultiplicator2.default.multiplyTriangles(this.subdivision, ind, positions), l = positions.length - coords.length, i = 0; i < l; i++) coords.push(0, 0), normals.push(0, -1, 0);
                    this.uvs = coords, this.normals = normals, this.addPosition(positions, this.options.positionAttributeName), this.addIndices(faces, !1)
                }
            }]), Cube
        }(_Mesh3.default));
    exports.default = Cube, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _Mesh2 = __webpack_require__(2),
        _Mesh3 = _interopRequireDefault(_Mesh2),
        _FacesSeparator = __webpack_require__(8),
        _FacesSeparator2 = _interopRequireDefault(_FacesSeparator),
        _FacesMultiplicator = __webpack_require__(7),
        _FacesMultiplicator2 = _interopRequireDefault(_FacesMultiplicator),
        IcoSphere = function(_Mesh) {
            function IcoSphere(program) {
                var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    state = arguments[2],
                    drawType = arguments[3];
                _classCallCheck(this, IcoSphere);
                var _this = _possibleConstructorReturn(this, (IcoSphere.__proto__ || Object.getPrototypeOf(IcoSphere)).call(this, program, state, drawType));
                return data = data || {}, _this.options = {
                    subdivision: data.subdivision || 1,
                    radius: data.radius || 1,
                    positionAttributeName: data.positionAttributeName || "aPosition"
                }, _this.icosphere(), _this
            }
            return _inherits(IcoSphere, _Mesh), _createClass(IcoSphere, [{
                key: "icosphere",
                value: function() {
                    var vertices = [],
                        faces = [],
                        radius = 1,
                        t = (1 + Math.sqrt(5)) / 2 * radius;
                    this.positions = [], this.addVertex([-1 * radius, t, 0], vertices), this.addVertex([1 * radius, t, 0], vertices), this.addVertex([-1 * radius, -t, 0], vertices), this.addVertex([1 * radius, -t, 0], vertices), this.addVertex([0, -1 * radius, t], vertices), this.addVertex([0, 1 * radius, t], vertices), this.addVertex([0, -1 * radius, -t], vertices), this.addVertex([0, 1 * radius, -t], vertices), this.addVertex([t, 0, -1 * radius], vertices), this.addVertex([t, 0, 1 * radius], vertices), this.addVertex([-t, 0, -1 * radius], vertices), this.addVertex([-t, 0, 1 * radius], vertices), faces.push([0, 11, 5]), faces.push([0, 5, 1]), faces.push([0, 1, 7]), faces.push([0, 7, 10]), faces.push([0, 10, 11]), faces.push([1, 5, 9]), faces.push([5, 11, 4]), faces.push([11, 10, 2]), faces.push([10, 7, 6]), faces.push([7, 1, 8]), faces.push([3, 9, 4]), faces.push([3, 4, 2]), faces.push([3, 2, 6]), faces.push([3, 6, 8]), faces.push([3, 8, 9]), faces.push([4, 9, 5]), faces.push([2, 4, 11]), faces.push([6, 2, 10]), faces.push([8, 6, 7]), faces.push([9, 8, 1]), faces = _FacesMultiplicator2.default.multiplyTriangles(this.options.subdivision, faces, vertices);
                    for (var data = _FacesSeparator2.default.separate(faces, vertices), newVertices = data.vertices, triangles = data.faces, finalPositions = [], i = 0; i < newVertices.length; i++) {
                        var v = newVertices[i];
                        v[0] *= this.options.radius, v[1] *= this.options.radius, v[2] *= this.options.radius, finalPositions.push(v[0], v[1], v[2])
                    }
                    this.addPosition(finalPositions, this.options.positionAttributeName), this.addIndices(triangles, !1)
                }
            }, {
                key: "addVertex",
                value: function(position, out) {
                    var length = Math.sqrt(position[0] * position[0] + position[1] * position[1] + position[2] * position[2]);
                    out.push([position[0] / length, position[1] / length, position[2] / length])
                }
            }, {
                key: "render",
                value: function() {}
            }]), IcoSphere
        }(_Mesh3.default);
    exports.default = IcoSphere, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _Mesh2 = __webpack_require__(2),
        _Mesh3 = _interopRequireDefault(_Mesh2),
        tempArray1 = [],
        tempArray2 = [],
        Line = function(_Mesh) {
            function Line(program) {
                var points = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    state = arguments[2],
                    drawType = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4;
                _classCallCheck(this, Line);
                var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, program, state, drawType));
                return points.length <= 0 && (points = [
                    [0, 0, 0],
                    [.5, 1.25, 0],
                    [.25, 1, 0],
                    [0, 1, 0],
                    [-.5, 1.1, 0],
                    [-.35, 1.5, 0]
                ]), _this.positions = [], _this.directions = [], _this.indicesArray = [], _this.counters = [], _this.width = [], _this.uvs = [], _this.previous = [], _this.next = [], _this.points = points, _this.line(), _this
            }
            return _inherits(Line, _Mesh), _createClass(Line, [{
                key: "line",
                value: function() {
                    var needsUpdate = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        v = this.points;
                    this.positions.length = 2 * v.length, this.counters.length = 2 * v.length;
                    var index = 0,
                        indexC = 0;
                    this.previous.length = this.positions.length, this.next.length = this.positions.length;
                    for (var i = 0; i < v.length; i++) {
                        if (needsUpdate) {
                            var c = i / v.length;
                            this.counters[indexC++] = [c], this.counters[indexC++] = [c]
                        }
                        this.positions[index++] = v[i][0], this.positions[index++] = v[i][1], this.positions[index++] = v[i][2], this.positions[index++] = v[i][0], this.positions[index++] = v[i][1], this.positions[index++] = v[i][2]
                    }
                    this.process(needsUpdate)
                }
            }, {
                key: "compareV3",
                value: function(a, b) {
                    var aa = 6 * a,
                        ab = 6 * b;
                    return this.positions[aa] === this.positions[ab] && this.positions[aa + 1] === this.positions[ab + 1] && this.positions[aa + 2] === this.positions[ab + 2]
                }
            }, {
                key: "copyV3",
                value: function(a, out) {
                    out || (out = tempArray1);
                    var aa = 6 * a;
                    out[0] = this.positions[aa], out[1] = this.positions[aa + 1], out[2] = this.positions[aa + 2]
                }
            }, {
                key: "process",
                value: function(needsUpdate) {
                    var l = this.positions.length / 6,
                        index = 0,
                        indexN = 0;
                    this.compareV3(0, l - 1) ? this.copyV3(l - 2) : this.copyV3(0), this.previous[index++] = tempArray1[0], this.previous[index++] = tempArray1[1], this.previous[index++] = tempArray1[2], this.previous[index++] = tempArray1[0], this.previous[index++] = tempArray1[1], this.previous[index++] = tempArray1[2];
                    for (var i = 0; i < l; i++) this.copyV3(i, tempArray1), i > 0 && (this.next[indexN++] = tempArray1[0], this.next[indexN++] = tempArray1[1], this.next[indexN++] = tempArray1[2], this.next[indexN++] = tempArray1[0], this.next[indexN++] = tempArray1[1], this.next[indexN++] = tempArray1[2], this.previous[index++] = tempArray2[0], this.previous[index++] = tempArray2[1], this.previous[index++] = tempArray2[2], this.previous[index++] = tempArray2[0], this.previous[index++] = tempArray2[1], this.previous[index++] = tempArray2[2]), tempArray2[0] = tempArray1[0], tempArray2[1] = tempArray1[1], tempArray2[2] = tempArray1[2];
                    if (this.compareV3(l - 1, 0) ? this.copyV3(1, tempArray1) : this.copyV3(l - 1, tempArray1), this.next[indexN++] = tempArray1[0], this.next[indexN++] = tempArray1[1], this.next[indexN++] = tempArray1[2], this.next[indexN++] = tempArray1[0], this.next[indexN++] = tempArray1[1], this.next[indexN++] = tempArray1[2], index = 0, this.addPosition(this.positions, "position"), this.addAttribute(this.next, "aNext"), this.addAttribute(this.previous, "aPrevious"), needsUpdate) {
                        index = 0, this.uvs = [];
                        for (var w = void 0, j = 0; j < l; j++) w = this.widthCallback ? this.widthCallback(j / (l - 1)) : .1, this.width[index++] = w, this.width[index++] = w, this.uvs.push(j / (l - 1), 0), this.uvs.push(j / (l - 1), 1);
                        index = 0, this.indicesArray = [];
                        for (var _j = 0; _j < l - 1; _j++) {
                            var n = 2 * _j;
                            this.indicesArray[index++] = n, this.indicesArray[index++] = n + 1, this.indicesArray[index++] = n + 2, this.indicesArray[index++] = n + 2, this.indicesArray[index++] = n + 1, this.indicesArray[index++] = n + 3
                        }
                        index = 0, this.directions = [];
                        for (var _i = 0; _i < this.positions.length; _i++) _i % 2 === 0 ? this.directions[index++] = 1 : this.directions[index++] = -1;
                        this.addIndices(this.indicesArray, !1), this.addAttribute(this.directions, "direction", 1), this.addAttribute(this.uvs, "aUv", 2), this.addAttribute(this.counters, "aCounters", 1)
                    }
                }
            }, {
                key: "update",
                value: function(points) {
                    var needsUpdate = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.points = points || this.points, this.line(needsUpdate)
                }
            }]), Line
        }(_Mesh3.default);
    exports.default = Line, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _Mesh2 = __webpack_require__(2),
        _Mesh3 = _interopRequireDefault(_Mesh2),
        Plane = function(_Mesh) {
            function Plane(program) {
                var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    state = arguments[2],
                    drawType = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4;
                _classCallCheck(this, Plane);
                var _this = _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this, program, state, drawType));
                return data = data || {}, _this.options = {
                    w: data.w || 1,
                    h: data.h || 1,
                    d: data.d || 1,
                    axis: data.axis || "xy",
                    positionAttributeName: data.positionAttributeName || "aPosition",
                    subdivision: data.subdivision || 10
                }, _this.pivotX = -_this.options.w / 2, _this.pivotY = -_this.options.h / 2, _this.plane(_this.options.w, _this.options.h, _this.options.subdivision, _this.options.axis), _this
            }
            return _inherits(Plane, _Mesh), _createClass(Plane, [{
                key: "plane",
                value: function(w, h, subdivision, axis) {
                    for (var positions = [], indices = [], index = 0, pos = void 0, u = void 0, v = void 0, i = 0; i < subdivision; i++) {
                        u = i / subdivision;
                        for (var j = 0; j < subdivision; j++) v = j / subdivision, pos = this.getPos(i, j), positions.push(pos[0], pos[1], pos[2]), pos = this.getPos(i + 1, j), positions.push(pos[0], pos[1], pos[2]), pos = this.getPos(i + 1, j + 1), positions.push(pos[0], pos[1], pos[2]), pos = this.getPos(i, j + 1), positions.push(pos[0], pos[1], pos[2]), indices.push(4 * index + 0), indices.push(4 * index + 1), indices.push(4 * index + 2), indices.push(4 * index + 0), indices.push(4 * index + 2), indices.push(4 * index + 3), index++, this.uvs.push(u, v, u, v, u, v, u, v)
                    }
                    this.addPosition(positions, this.options.positionAttributeName), this.addIndices(indices, !1)
                }
            }, {
                key: "getPos",
                value: function(i, j) {
                    var x = this.options.w / this.options.subdivision * i + this.pivotX,
                        y = this.options.h / this.options.subdivision * j + this.pivotY,
                        z = 0;
                    return "xy" === this.options.axis ? [x, y, z] : [x, 0, y]
                }
            }]), Plane
        }(_Mesh3.default);
    exports.default = Plane, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _Mesh2 = __webpack_require__(2),
        _Mesh3 = _interopRequireDefault(_Mesh2),
        Quad = function(_Mesh) {
            function Quad(program) {
                var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    state = arguments[2],
                    drawType = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4;
                _classCallCheck(this, Quad);
                var _this = _possibleConstructorReturn(this, (Quad.__proto__ || Object.getPrototypeOf(Quad)).call(this, program, state, drawType));
                data = data || {};
                var pos = new Float32Array(new Float32Array([-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0]));
                return _this.addPosition(pos, data.positionAttributeName || "aPosition"), _this.addIndices([0, 1, 2, 0, 2, 3]), _this.uvs = [1, 0, 1, 1, 0, 1, 0, 0], _this
            }
            return _inherits(Quad, _Mesh), Quad
        }(_Mesh3.default);
    exports.default = Quad, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _Mesh2 = __webpack_require__(2),
        _Mesh3 = _interopRequireDefault(_Mesh2),
        Sphere = function(_Mesh) {
            function Sphere(program) {
                var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    state = arguments[2],
                    drawType = arguments[3];
                _classCallCheck(this, Sphere);
                var _this = _possibleConstructorReturn(this, (Sphere.__proto__ || Object.getPrototypeOf(Sphere)).call(this, program, state, drawType));
                return data = data || {}, _this.options = {
                    nbVert: data.nbVert || 10,
                    radius: data.radius || 1,
                    positionAttributeName: data.positionAttributeName || "aPosition"
                }, _this.sphere(), _this
            }
            return _inherits(Sphere, _Mesh), _createClass(Sphere, [{
                key: "sphere",
                value: function() {
                    for (var positions = [], indices = [], index = 0, uv = [], dTex = 1 / this.options.nbVert, angle = void 0, i = 0; i < this.options.nbVert; i++)
                        for (var j = 0; j < this.options.nbVert; j++) {
                            angle = this.getAngle(i, j), positions.push(angle[0], angle[1], angle[2]), angle = this.getAngle(i + 1, j), positions.push(angle[0], angle[1], angle[2]), angle = this.getAngle(i + 1, j + 1), positions.push(angle[0], angle[1], angle[2]), angle = this.getAngle(i, j + 1), positions.push(angle[0], angle[1], angle[2]);
                            var u = j / this.options.nbVert,
                                v = i / this.options.nbVert;
                            uv.push(1 - u, v), uv.push(1 - u, v + dTex), uv.push(1 - u - dTex, v + dTex), uv.push(1 - u - dTex, v), indices.push(4 * index + 0), indices.push(4 * index + 1), indices.push(4 * index + 2), indices.push(4 * index + 0), indices.push(4 * index + 2), indices.push(4 * index + 3), index++
                        }
                    this.uvs = uv, this.addPosition(positions, this.options.positionAttributeName), this.addIndices(indices, !1)
                }
            }, {
                key: "getAngle",
                value: function(i, j) {
                    var ry = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], j / this.options.nbVert * Math.PI * 2 - Math.PI),
                        rx = i / this.options.nbVert * Math.PI - .5 * Math.PI,
                        r = this.options.radius,
                        pos = [];
                    pos[1] = Math.sin(rx) * r;
                    var t = Math.cos(rx) * r;
                    return pos[0] = Math.cos(ry) * t, pos[2] = Math.sin(ry) * t, [pos[0], pos[1], pos[2]]
                }
            }, {
                key: "render",
                value: function() {}
            }]), Sphere
        }(_Mesh3.default);
    exports.default = Sphere, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _Mesh2 = __webpack_require__(2),
        _Mesh3 = _interopRequireDefault(_Mesh2),
        _Program = __webpack_require__(22),
        _Program2 = _interopRequireDefault(_Program),
        _State = __webpack_require__(6),
        _State2 = _interopRequireDefault(_State),
        _planesDot = __webpack_require__(84),
        _planesDot2 = _interopRequireDefault(_planesDot),
        _simpleColor = __webpack_require__(85),
        _simpleColor2 = _interopRequireDefault(_simpleColor),
        BatchPlanes = function(_Mesh) {
            function BatchPlanes() {
                var size = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
                _classCallCheck(this, BatchPlanes);
                var program = new _Program2.default(_planesDot2.default, _simpleColor2.default, {
                        color: {
                            type: "vec3",
                            value: [1, 1, 1]
                        },
                        opacity: {
                            type: "float",
                            value: .6
                        }
                    }),
                    state = new _State2.default(POLY.gl);
                state.depthTest = !0;
                for (var _this = _possibleConstructorReturn(this, (BatchPlanes.__proto__ || Object.getPrototypeOf(BatchPlanes)).call(this, program, state, 0)), index = 0, positions = [], indices = [], i = -size; i < size; i++)
                    for (var j = -size; j < size; j++) positions.push(i, j, 0), indices.push(index), index++, positions.push(i, 0, j), indices.push(index), index++;
                return _this.addPosition(positions, "aPosition"), _this.addIndices(indices), _this
            }
            return _inherits(BatchPlanes, _Mesh), _createClass(BatchPlanes, [{
                key: "draw",
                value: function() {
                    this.program.bind(), POLY.GL.draw(this)
                }
            }]), BatchPlanes
        }(_Mesh3.default);
    exports.default = BatchPlanes, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _BatchPlanes = __webpack_require__(63),
        _BatchPlanes2 = _interopRequireDefault(_BatchPlanes);
    exports.default = {
        BatchPlanes: _BatchPlanes2.default
    }, module.exports = exports.default
}, function(module, exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        BinaryLoader = function() {
            function BinaryLoader() {
                var _this = this,
                    isArrayBuffer = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                _classCallCheck(this, BinaryLoader), this._req = new XMLHttpRequest, this._req.addEventListener("load", function(e) {
                    return _this._onLoaded(e)
                }), this._req.addEventListener("progress", function(e) {
                    return _this._onProgress(e)
                }), isArrayBuffer && (this._req.responseType = "arraybuffer")
            }
            return _createClass(BinaryLoader, [{
                key: "load",
                value: function(url, callback) {
                    this._callback = callback, this._req.open("GET", url), this._req.send()
                }
            }, {
                key: "_onLoaded",
                value: function() {
                    this._callback(this._req.response)
                }
            }, {
                key: "_onProgress",
                value: function() {}
            }]), BinaryLoader
        }();
    exports.default = BinaryLoader, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
                var parent = Object.getPrototypeOf(object);
                return null === parent ? void 0 : get(parent, property, receiver)
            }
            if ("value" in desc) return desc.value;
            var getter = desc.get;
            if (void 0 !== getter) return getter.call(receiver)
        },
        _BinaryLoader2 = __webpack_require__(65),
        _BinaryLoader3 = _interopRequireDefault(_BinaryLoader2),
        ObjLoader = function(_BinaryLoader) {
            function ObjLoader() {
                return _classCallCheck(this, ObjLoader), _possibleConstructorReturn(this, (ObjLoader.__proto__ || Object.getPrototypeOf(ObjLoader)).apply(this, arguments))
            }
            return _inherits(ObjLoader, _BinaryLoader), _createClass(ObjLoader, [{
                key: "load",
                value: function(url, callback) {
                    var drawType = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
                    this._drawType = drawType, _get(ObjLoader.prototype.__proto__ || Object.getPrototypeOf(ObjLoader.prototype), "load", this).call(this, url, callback)
                }
            }, {
                key: "_onLoaded",
                value: function() {
                    this.parseObj(this._req.response)
                }
            }, {
                key: "parseObj",
                value: function(objStr) {
                    function parseVertexIndex(value) {
                        var index = parseInt(value);
                        return 3 * (index >= 0 ? index - 1 : index + vertices.length / 3)
                    }

                    function parseNormalIndex(value) {
                        var index = parseInt(value);
                        return 3 * (index >= 0 ? index - 1 : index + normals.length / 3)
                    }

                    function parseUVIndex(value) {
                        var index = parseInt(value);
                        return 2 * (index >= 0 ? index - 1 : index + uvs.length / 2)
                    }

                    function addVertex(a, b, c) {
                        positions.push(vertices[a], vertices[a + 1], vertices[a + 2]), positions.push(vertices[b], vertices[b + 1], vertices[b + 2]), positions.push(vertices[c], vertices[c + 1], vertices[c + 2]), indices.push(3 * count + 0), indices.push(3 * count + 1), indices.push(3 * count + 2), count++
                    }

                    function addUV(a, b, c) {
                        coords.push(uvs[a], uvs[a + 1]), coords.push(uvs[b], uvs[b + 1]), coords.push(uvs[c], uvs[c + 1])
                    }

                    function addNormal(a, b, c) {
                        finalNormals.push(normals[a], normals[a + 1], normals[a + 2]), finalNormals.push(normals[b], normals[b + 1], normals[b + 2]), finalNormals.push(normals[c], normals[c + 1], normals[c + 2])
                    }

                    function addFace(a, b, c, d, ua, ub, uc, ud, na, nb, nc, nd) {
                        var ia = parseVertexIndex(a),
                            ib = parseVertexIndex(b),
                            ic = parseVertexIndex(c),
                            id = void 0;
                        void 0 === d ? addVertex(ia, ib, ic) : (id = parseVertexIndex(d), addVertex(ia, ib, id), addVertex(ib, ic, id)), void 0 !== ua && (ia = parseUVIndex(ua), ib = parseUVIndex(ub), ic = parseUVIndex(uc), void 0 === d ? addUV(ia, ib, ic) : (id = parseUVIndex(ud), addUV(ia, ib, id), addUV(ib, ic, id))), void 0 !== na && (ia = parseNormalIndex(na),
                            ib = parseNormalIndex(nb), ic = parseNormalIndex(nc), void 0 === d ? addNormal(ia, ib, ic) : (id = parseNormalIndex(nd), addNormal(ia, ib, id), addNormal(ib, ic, id)))
                    }
                    for (var lines = objStr.split("\n"), positions = [], coords = [], finalNormals = [], vertices = [], normals = [], uvs = [], indices = [], count = 0, result = void 0, vertexPattern = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, normalPattern = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, uvPattern = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, facePattern1 = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/, facePattern2 = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/, facePattern3 = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/, facePattern4 = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/, i = 0; i < lines.length; i++) {
                        var line = lines[i];
                        line = line.trim(), 0 !== line.length && "#" !== line.charAt(0) && (null !== (result = vertexPattern.exec(line)) ? vertices.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])) : null !== (result = normalPattern.exec(line)) ? normals.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])) : null !== (result = uvPattern.exec(line)) ? uvs.push(parseFloat(result[1]), parseFloat(result[2])) : null !== (result = facePattern1.exec(line)) ? addFace(result[1], result[2], result[3], result[4]) : null !== (result = facePattern2.exec(line)) ? addFace(result[2], result[5], result[8], result[11], result[3], result[6], result[9], result[12]) : null !== (result = facePattern3.exec(line)) ? addFace(result[2], result[6], result[10], result[14], result[3], result[7], result[11], result[15], result[4], result[8], result[12], result[16]) : null !== (result = facePattern4.exec(line)) && addFace(result[2], result[5], result[8], result[11], void 0, void 0, void 0, void 0, result[3], result[6], result[9], result[12]))
                    }
                    return this._generateMeshes({
                        positions: positions,
                        coords: coords,
                        normals: finalNormals,
                        indices: indices
                    })
                }
            }, {
                key: "_generateMeshes",
                value: function(o) {
                    var maxNumVertices = 65535,
                        hasNormals = o.normals.length > 0,
                        hasUVs = o.coords.length > 0;
                    if (o.positions.length > maxNumVertices) {
                        var meshes = [],
                            lastIndex = 0,
                            oCopy = {};
                        for (oCopy.positions = o.positions.concat(), oCopy.coords = o.coords.concat(), oCopy.indices = o.indices.concat(), oCopy.normals = o.normals.concat(); o.indices.length > 0;) {
                            for (var sliceNum = Math.min(maxNumVertices, o.positions.length), indices = o.indices.splice(0, sliceNum), positions = [], coords = [], normals = [], index = void 0, tmpIndex = 0, i = 0; i < indices.length; i++) indices[i] > tmpIndex && (tmpIndex = indices[i]), index = indices[i], positions.push(oCopy.positions[index]), hasUVs && coords.push(oCopy.coords[index]), hasNormals && normals.push(oCopy.normals[index]), indices[i] -= lastIndex;
                            lastIndex = tmpIndex + 1
                        }
                        return this._callback && this._callback(meshes, oCopy), meshes
                    }
                    return this._callback, o
                }
            }]), ObjLoader
        }(_BinaryLoader3.default);
    ObjLoader.parse = function(objStr) {
        var loader = new ObjLoader;
        return loader.parseObj(objStr)
    }, exports.default = ObjLoader, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _OBJLoader = __webpack_require__(66),
        _OBJLoader2 = _interopRequireDefault(_OBJLoader);
    exports.default = {
        OBJLoader: _OBJLoader2.default
    }, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        _GLExtensions = __webpack_require__(5),
        _GLExtensions2 = _interopRequireDefault(_GLExtensions),
        DataTexture = function() {
            function DataTexture(data) {
                var width = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 256,
                    height = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 256,
                    format = arguments[3];
                _classCallCheck(this, DataTexture), this.gl = POLY.gl;
                var gl = this.gl;
                format = format || gl.RGBA;
                _GLExtensions2.default.getExtension("OES_texture_float");
                if (!_GLExtensions2.default.getExtension("OES_texture_float")) throw new Error("float textures not supported");
                var type = (_GLExtensions2.default.getExtension("OES_texture_half_float"), gl.UNSIGNED_BYTE),
                    extHalfFloat = _GLExtensions2.default.getExtension("OES_texture_half_float");
                _GLExtensions2.default.getExtension("OES_texture_float_linear"), _GLExtensions2.default.checkExtension("OES_texture_float") ? type = gl.FLOAT : extHalfFloat && (type = extHalfFloat.HALF_FLOAT_OES), this._texture = gl.createTexture(), gl.bindTexture(gl.TEXTURE_2D, this._texture);
                var alignment = 1;
                gl.pixelStorei(gl.UNPACK_ALIGNMENT, alignment), gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, 0, format, type, data), POLY.utils.isPowerOfTwo(width) && POLY.utils.isPowerOfTwo(height), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
            }
            return _createClass(DataTexture, [{
                key: "bind",
                value: function() {
                    var index = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        gl = this.gl;
                    gl.activeTexture(gl.TEXTURE0 + index), gl.bindTexture(gl.TEXTURE_2D, this._texture)
                }
            }]), DataTexture
        }();
    exports.default = DataTexture, module.exports = exports.default
}, function(module, exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        Texture = function() {
            function Texture(image, isTexture) {
                _classCallCheck(this, Texture), this.gl = POLY.gl;
                var gl = this.gl;
                this._loaded = !1, isTexture ? (this._texture = image, this._loaded = !0) : (this._texture = gl.createTexture(), this.image = new Image, this.image.src = image, this.image.addEventListener("load", this.onImageLoaded.bind(this, this.image)))
            }
            return _createClass(Texture, [{
                key: "onImageLoaded",
                value: function(image) {
                    this._loaded = !0;
                    var gl = this.gl;
                    gl.bindTexture(gl.TEXTURE_2D, this._texture), gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !0), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image), POLY.utils.isPowerOfTwo(image.width) && POLY.utils.isPowerOfTwo(image.height) && gl.generateMipmap(gl.TEXTURE_2D), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT), gl.bindTexture(gl.TEXTURE_2D, null)
                }
            }, {
                key: "updateTexture",
                value: function(image) {
                    var gl = this.gl;
                    gl.bindTexture(gl.TEXTURE_2D, this._texture), gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, image), gl.bindTexture(gl.TEXTURE_2D, null)
                }
            }, {
                key: "bind",
                value: function() {
                    var index = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        gl = this.gl;
                    gl.activeTexture(gl.TEXTURE0 + index), gl.bindTexture(gl.TEXTURE_2D, this._texture)
                }
            }]), Texture
        }();
    exports.default = Texture, module.exports = exports.default
}, function(module, exports) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }();
    exports.default = new(function() {
        function Loop() {
            _classCallCheck(this, Loop), this._loops = [], this._idLoop = 1, this._active = !1
        }
        return _createClass(Loop, [{
            key: "add",
            value: function(func, scope) {
                var id = this._idLoop;
                return this._loops.push({
                    func: func,
                    id: id,
                    scope: scope
                }), this._active || (window.requestAnimationFrame(this._update.bind(this)), this.start()), this._idLoop++, id
            }
        }, {
            key: "remove",
            value: function(id) {
                for (var i = 0; i < this._loops.length; i++)
                    if (this._loops[i].id === id) {
                        this._loops.splice(i, 1);
                        break
                    }
            }
        }, {
            key: "clear",
            value: function() {
                this._loops = [], this.stop()
            }
        }, {
            key: "start",
            value: function() {
                this._active = !0
            }
        }, {
            key: "stop",
            value: function() {
                this._active = !1
            }
        }, {
            key: "_update",
            value: function() {
                if (this._active)
                    if (window.requestAnimationFrame(this._update.bind(this)), this._loops.length > 0)
                        for (var i = 0; i < this._loops.length; i++) this._loops[i].func(this._loops[i]);
                    else this.stop()
            }
        }]), Loop
    }()), module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.getAndApplyExtension = exports.FacesMultiplicator = exports.FacesSeparator = exports.isPowerOfTwo = exports.loop = void 0;
    var _Loop = __webpack_require__(70),
        _Loop2 = _interopRequireDefault(_Loop),
        _isPowerOfTwo = __webpack_require__(72),
        _isPowerOfTwo2 = _interopRequireDefault(_isPowerOfTwo),
        _getAndApplyExtension = __webpack_require__(26),
        _getAndApplyExtension2 = _interopRequireDefault(_getAndApplyExtension),
        _FacesSeparator = __webpack_require__(8),
        _FacesSeparator2 = _interopRequireDefault(_FacesSeparator),
        _FacesMultiplicator = __webpack_require__(7),
        _FacesMultiplicator2 = _interopRequireDefault(_FacesMultiplicator);
    exports.loop = _Loop2.default, exports.isPowerOfTwo = _isPowerOfTwo2.default, exports.FacesSeparator = _FacesSeparator2.default, exports.FacesMultiplicator = _FacesMultiplicator2.default, exports.getAndApplyExtension = _getAndApplyExtension2.default
}, function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var isPowerOfTwo = function(value) {
        return !(value & value - 1)
    };
    exports.default = isPowerOfTwo, module.exports = exports.default
}, function(module, exports, __webpack_require__) {
    "use strict";

    function Loader(baseUrl, concurrency) {
        EventEmitter.call(this), concurrency = concurrency || DEFAULT_CONCURRENCY, this.baseUrl = baseUrl || "", this.progress = 0, this.loading = !1, this._progressChunk = 0, this._beforeMiddleware = [], this._afterMiddleware = [], this._boundLoadResource = this._loadResource.bind(this), this._buffer = [], this._numToLoad = 0, this._queue = async.queue(this._boundLoadResource, concurrency), this.resources = {}
    }
    var parseUri = __webpack_require__(21),
        async = __webpack_require__(28), Resource = __webpack_require__(9), EventEmitter = __webpack_require__(20), DEFAULT_CONCURRENCY = 10, MAX_PROGRESS = 100;
    Loader.prototype = Object.create(EventEmitter.prototype), Loader.prototype.constructor = Loader, module.exports = Loader, Loader.prototype.add = Loader.prototype.enqueue = function(name, url, options, cb) {
        if (Array.isArray(name)) {
            for (var i = 0; i < name.length; ++i) this.add(name[i]);
            return this
        }
        if ("object" == typeof name && (cb = url || name.callback || name.onComplete, options = name, url = name.url, name = name.name || name.key || name.url), "string" != typeof url && (cb = options, options = url, url = name), "string" != typeof url) throw new Error("No url passed to add resource to loader.");
        if ("function" == typeof options && (cb = options, options = null), this.resources[name]) throw new Error('Resource with name "' + name + '" already exists.');
        return url = this._prepareUrl(url), this.resources[name] = new Resource(name, url, options), "function" == typeof cb && this.resources[name].once("afterMiddleware", cb), this._numToLoad++, this._queue.started ? (this._queue.push(this.resources[name]), this._progressChunk = (MAX_PROGRESS - this.progress) / (this._queue.length() + this._queue.running())) : (this._buffer.push(this.resources[name]), this._progressChunk = MAX_PROGRESS / this._buffer.length), this
    }, Loader.prototype.before = Loader.prototype.pre = function(fn) {
        return this._beforeMiddleware.push(fn), this
    }, Loader.prototype.after = Loader.prototype.use = function(fn) {
        return this._afterMiddleware.push(fn), this
    }, Loader.prototype.reset = function() {
        this.progress = 0, this.loading = !1, this._progressChunk = 0, this._buffer.length = 0, this._numToLoad = 0, this._queue.kill(), this._queue.started = !1;
        for (var k in this.resources) {
            var res = this.resources[k];
            res.off("complete", this._onLoad, this), res.isLoading && res.abort()
        }
        return this.resources = {}, this
    }, Loader.prototype.load = function(cb) {
        if ("function" == typeof cb && this.once("complete", cb), this._queue.started) return this;
        this.emit("start", this), this.loading = !0;
        for (var i = 0; i < this._buffer.length; ++i) this._queue.push(this._buffer[i]);
        return this._buffer.length = 0, this
    }, Loader.prototype._prepareUrl = function(url) {
        var parsedUrl = parseUri(url, {
            strictMode: !0
        });
        return parsedUrl.protocol || !parsedUrl.path || 0 === parsedUrl.path.indexOf("//") ? url : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== url.charAt(0) ? this.baseUrl + "/" + url : this.baseUrl + url
    }, Loader.prototype._loadResource = function(resource, dequeue) {
        var self = this;
        resource._dequeue = dequeue, async.eachSeries(this._beforeMiddleware, function(fn, next) {
            fn.call(self, resource, function() {
                next(resource.isComplete ? {} : null)
            })
        }, function() {
            resource.isComplete ? self._onLoad(resource) : (resource.once("complete", self._onLoad, self), resource.load())
        })
    }, Loader.prototype._onComplete = function() {
        this.loading = !1, this.emit("complete", this, this.resources)
    }, Loader.prototype._onLoad = function(resource) {
        var self = this;
        async.eachSeries(this._afterMiddleware, function(fn, next) {
            fn.call(self, resource, next)
        }, function() {
            resource.emit("afterMiddleware", resource), self._numToLoad--, self.progress += self._progressChunk, self.emit("progress", self, resource), resource.error ? self.emit("error", resource.error, self, resource) : self.emit("load", self, resource), 0 === self._numToLoad && (self.progress = 100, self._onComplete())
        }), resource._dequeue()
    }, Loader.LOAD_TYPE = Resource.LOAD_TYPE, Loader.XHR_RESPONSE_TYPE = Resource.XHR_RESPONSE_TYPE
}, function(module, exports) {
    "use strict";
    module.exports = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encodeBinary: function(input) {
            for (var bytebuffer, output = "", encodedCharIndexes = new Array(4), inx = 0, jnx = 0, paddingBytes = 0; inx < input.length;) {
                for (bytebuffer = new Array(3), jnx = 0; jnx < bytebuffer.length; jnx++) inx < input.length ? bytebuffer[jnx] = 255 & input.charCodeAt(inx++) : bytebuffer[jnx] = 0;
                switch (encodedCharIndexes[0] = bytebuffer[0] >> 2, encodedCharIndexes[1] = (3 & bytebuffer[0]) << 4 | bytebuffer[1] >> 4, encodedCharIndexes[2] = (15 & bytebuffer[1]) << 2 | bytebuffer[2] >> 6, encodedCharIndexes[3] = 63 & bytebuffer[2], paddingBytes = inx - (input.length - 1)) {
                    case 2:
                        encodedCharIndexes[3] = 64, encodedCharIndexes[2] = 64;
                        break;
                    case 1:
                        encodedCharIndexes[3] = 64
                }
                for (jnx = 0; jnx < encodedCharIndexes.length; jnx++) output += this._keyStr.charAt(encodedCharIndexes[jnx])
            }
            return output
        }
    }
}, function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = __webpack_require__(73), module.exports.Resource = __webpack_require__(9), module.exports.middleware = {
        caching: {
            memory: __webpack_require__(76)
        },
        parsing: {
            blob: __webpack_require__(77)
        }
    }, module.exports.async = __webpack_require__(28)
}, function(module, exports) {
    "use strict";
    var cache = {};
    module.exports = function() {
        return function(resource, next) {
            cache[resource.url] ? (resource.data = cache[resource.url], resource.complete()) : resource.once("complete", function() {
                cache[this.url] = this.data
            }), next()
        }
    }
}, function(module, exports, __webpack_require__) {
    "use strict";
    var Resource = __webpack_require__(9),
        b64 = __webpack_require__(74),
        Url = window.URL || window.webkitURL;
    module.exports = function() {
        return function(resource, next) {
            if (!resource.data) return void next();
            if (resource.xhr && resource.xhrType === Resource.XHR_RESPONSE_TYPE.BLOB)
                if (window.Blob && "string" != typeof resource.data) {
                    if (0 === resource.data.type.indexOf("image")) {
                        var src = Url.createObjectURL(resource.data);
                        return resource.blob = resource.data, resource.data = new Image, resource.data.src = src, resource.isImage = !0, void(resource.data.onload = function() {
                            Url.revokeObjectURL(src), resource.data.onload = null, next()
                        })
                    }
                } else {
                    var type = resource.xhr.getResponseHeader("content-type");
                    if (type && 0 === type.indexOf("image")) return resource.data = new Image, resource.data.src = "data:" + type + ";base64," + b64.encodeBinary(resource.xhr.responseText), resource.isImage = !0, void(resource.data.onload = function() {
                        resource.data.onload = null, next()
                    })
                } next()
        }
    }
}, function(module, exports) {
    "function" == typeof Object.create ? module.exports = function(ctor, superCtor) {
        ctor.super_ = superCtor, ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : module.exports = function(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype, ctor.prototype = new TempCtor, ctor.prototype.constructor = ctor
    }
}, function(module, exports) {
    module.exports = function(arg) {
        return arg && "object" == typeof arg && "function" == typeof arg.copy && "function" == typeof arg.fill && "function" == typeof arg.readUInt8
    }
}, function(module, exports, __webpack_require__) {
    (function(global, process) {
        function inspect(obj, opts) {
            var ctx = {
                seen: [],
                stylize: stylizeNoColor
            };
            return arguments.length >= 3 && (ctx.depth = arguments[2]), arguments.length >= 4 && (ctx.colors = arguments[3]), isBoolean(opts) ? ctx.showHidden = opts : opts && exports._extend(ctx, opts), isUndefined(ctx.showHidden) && (ctx.showHidden = !1), isUndefined(ctx.depth) && (ctx.depth = 2), isUndefined(ctx.colors) && (ctx.colors = !1), isUndefined(ctx.customInspect) && (ctx.customInspect = !0), ctx.colors && (ctx.stylize = stylizeWithColor), formatValue(ctx, obj, ctx.depth)
        }

        function stylizeWithColor(str, styleType) {
            var style = inspect.styles[styleType];
            return style ? "[" + inspect.colors[style][0] + "m" + str + "[" + inspect.colors[style][1] + "m" : str
        }

        function stylizeNoColor(str, styleType) {
            return str
        }

        function arrayToHash(array) {
            var hash = {};
            return array.forEach(function(val, idx) {
                hash[val] = !0
            }), hash
        }

        function formatValue(ctx, value, recurseTimes) {
            if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && (!value.constructor || value.constructor.prototype !== value)) {
                var ret = value.inspect(recurseTimes, ctx);
                return isString(ret) || (ret = formatValue(ctx, ret, recurseTimes)), ret
            }
            var primitive = formatPrimitive(ctx, value);
            if (primitive) return primitive;
            var keys = Object.keys(value),
                visibleKeys = arrayToHash(keys);
            if (ctx.showHidden && (keys = Object.getOwnPropertyNames(value)), isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return formatError(value);
            if (0 === keys.length) {
                if (isFunction(value)) {
                    var name = value.name ? ": " + value.name : "";
                    return ctx.stylize("[Function" + name + "]", "special")
                }
                if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
                if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), "date");
                if (isError(value)) return formatError(value)
            }
            var base = "",
                array = !1,
                braces = ["{", "}"];
            if (isArray(value) && (array = !0, braces = ["[", "]"]), isFunction(value)) {
                var n = value.name ? ": " + value.name : "";
                base = " [Function" + n + "]"
            }
            if (isRegExp(value) && (base = " " + RegExp.prototype.toString.call(value)), isDate(value) && (base = " " + Date.prototype.toUTCString.call(value)), isError(value) && (base = " " + formatError(value)), 0 === keys.length && (!array || 0 == value.length)) return braces[0] + base + braces[1];
            if (recurseTimes < 0) return isRegExp(value) ? ctx.stylize(RegExp.prototype.toString.call(value), "regexp") : ctx.stylize("[Object]", "special");
            ctx.seen.push(value);
            var output;
            return output = array ? formatArray(ctx, value, recurseTimes, visibleKeys, keys) : keys.map(function(key) {
                return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array)
            }), ctx.seen.pop(), reduceToSingleString(output, base, braces)
        }

        function formatPrimitive(ctx, value) {
            if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
            if (isString(value)) {
                var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return ctx.stylize(simple, "string")
            }
            return isNumber(value) ? ctx.stylize("" + value, "number") : isBoolean(value) ? ctx.stylize("" + value, "boolean") : isNull(value) ? ctx.stylize("null", "null") : void 0
        }

        function formatError(value) {
            return "[" + Error.prototype.toString.call(value) + "]"
        }

        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
            for (var output = [], i = 0, l = value.length; i < l; ++i) hasOwnProperty(value, String(i)) ? output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), !0)) : output.push("");
            return keys.forEach(function(key) {
                key.match(/^\d+$/) || output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, !0))
            }), output
        }

        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
            var name, str, desc;
            if (desc = Object.getOwnPropertyDescriptor(value, key) || {
                    value: value[key]
                }, desc.get ? str = desc.set ? ctx.stylize("[Getter/Setter]", "special") : ctx.stylize("[Getter]", "special") : desc.set && (str = ctx.stylize("[Setter]", "special")), hasOwnProperty(visibleKeys, key) || (name = "[" + key + "]"), str || (ctx.seen.indexOf(desc.value) < 0 ? (str = isNull(recurseTimes) ? formatValue(ctx, desc.value, null) : formatValue(ctx, desc.value, recurseTimes - 1), str.indexOf("\n") > -1 && (str = array ? str.split("\n").map(function(line) {
                    return "  " + line
                }).join("\n").substr(2) : "\n" + str.split("\n").map(function(line) {
                    return "   " + line
                }).join("\n"))) : str = ctx.stylize("[Circular]", "special")), isUndefined(name)) {
                if (array && key.match(/^\d+$/)) return str;
                name = JSON.stringify("" + key), name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (name = name.substr(1, name.length - 2), name = ctx.stylize(name, "name")) : (name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), name = ctx.stylize(name, "string"))
            }
            return name + ": " + str
        }

        function reduceToSingleString(output, base, braces) {
            var numLinesEst = 0,
                length = output.reduce(function(prev, cur) {
                    return numLinesEst++, cur.indexOf("\n") >= 0 && numLinesEst++, prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0);
            return length > 60 ? braces[0] + ("" === base ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1] : braces[0] + base + " " + output.join(", ") + " " + braces[1]
        }

        function isArray(ar) {
            return Array.isArray(ar)
        }

        function isBoolean(arg) {
            return "boolean" == typeof arg
        }

        function isNull(arg) {
            return null === arg
        }

        function isNullOrUndefined(arg) {
            return null == arg
        }

        function isNumber(arg) {
            return "number" == typeof arg
        }

        function isString(arg) {
            return "string" == typeof arg
        }

        function isSymbol(arg) {
            return "symbol" == typeof arg
        }

        function isUndefined(arg) {
            return void 0 === arg
        }

        function isRegExp(re) {
            return isObject(re) && "[object RegExp]" === objectToString(re)
        }

        function isObject(arg) {
            return "object" == typeof arg && null !== arg
        }

        function isDate(d) {
            return isObject(d) && "[object Date]" === objectToString(d)
        }

        function isError(e) {
            return isObject(e) && ("[object Error]" === objectToString(e) || e instanceof Error)
        }

        function isFunction(arg) {
            return "function" == typeof arg
        }

        function isPrimitive(arg) {
            return null === arg || "boolean" == typeof arg || "number" == typeof arg || "string" == typeof arg || "symbol" == typeof arg || "undefined" == typeof arg
        }

        function objectToString(o) {
            return Object.prototype.toString.call(o)
        }

        function hasOwnProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop)
        }
        var formatRegExp = /%[sdj%]/g;
        exports.format = function(f) {
            if (!isString(f)) {
                for (var objects = [], i = 0; i < arguments.length; i++) objects.push(inspect(arguments[i]));
                return objects.join(" ")
            }
            for (var i = 1, args = arguments, len = args.length, str = String(f).replace(formatRegExp, function(x) {
                    if ("%%" === x) return "%";
                    if (i >= len) return x;
                    switch (x) {
                        case "%s":
                            return String(args[i++]);
                        case "%d":
                            return Number(args[i++]);
                        case "%j":
                            try {
                                return JSON.stringify(args[i++])
                            } catch (_) {
                                return "[Circular]"
                            }
                        default:
                            return x
                    }
                }), x = args[i]; i < len; x = args[++i]) str += isNull(x) || !isObject(x) ? " " + x : " " + inspect(x);
            return str
        }, exports.deprecate = function(fn, msg) {
            function deprecated() {
                if (!warned) {
                    if (process.throwDeprecation) throw new Error(msg);
                    process.traceDeprecation, warned = !0
                }
                return fn.apply(this, arguments)
            }
            if (isUndefined(global.process)) return function() {
                return exports.deprecate(fn, msg).apply(this, arguments)
            };
            if (process.noDeprecation === !0) return fn;
            var warned = !1;
            return deprecated
        };
        var debugEnviron, debugs = {};
        exports.debuglog = function(set) {
            if (isUndefined(debugEnviron) && (debugEnviron = process.env.NODE_DEBUG || ""), set = set.toUpperCase(), !debugs[set])
                if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
                    process.pid;
                    debugs[set] = function() {
                        exports.format.apply(exports, arguments)
                    }
                } else debugs[set] = function() {};
            return debugs[set]
        }, exports.inspect = inspect, inspect.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, inspect.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, exports.isArray = isArray, exports.isBoolean = isBoolean, exports.isNull = isNull, exports.isNullOrUndefined = isNullOrUndefined, exports.isNumber = isNumber, exports.isString = isString, exports.isSymbol = isSymbol, exports.isUndefined = isUndefined, exports.isRegExp = isRegExp, exports.isObject = isObject, exports.isDate = isDate, exports.isError = isError, exports.isFunction = isFunction, exports.isPrimitive = isPrimitive, exports.isBuffer = __webpack_require__(79);
        exports.log = function() {}, exports.inherits = __webpack_require__(78), exports._extend = function(origin, add) {
            if (!add || !isObject(add)) return origin;
            for (var keys = Object.keys(add), i = keys.length; i--;) origin[keys[i]] = add[keys[i]];
            return origin
        }
    }).call(exports, function() {
        return this
    }(), __webpack_require__(27))
}, function(module, exports) {
    module.exports = {
        default: ["image/./address_revealed.jpg", "image/./arcade.jpg", "image/./blob_001.jpg", "image/./blob_002.jpg", "image/./blob_003.jpg", "image/./blob_004.jpg", "image/./blob_005.jpg", "image/./blob_006.jpg", "image/./blob_007.jpg", "image/./blob_008.jpg", "image/./blob_009.jpg", "image/./blob_010.jpg", "image/./blob_011.jpg", "image/./blob_012.jpg", "image/./blob_013.jpg", "image/./blob_014.jpg", "image/./blob_015.jpg", "image/./blob_016.jpg", "image/./blob_017.jpg", "image/./blob_018.jpg", "image/./blob_019.jpg", "image/./blob_020.jpg", "image/./blob_021.jpg", "image/./blob_022.jpg", "image/./blob_023.jpg", "image/./blob_024.jpg", "image/./blob_025.jpg", "image/./blob_026.jpg", "image/./blob_027.jpg", "image/./blob_028.jpg", "image/./blob_029.jpg", "image/./blob_030.jpg", "image/./blob_031.jpg", "image/./christmas_experiment1.jpg", "image/./christmas_experiment2.jpg", "image/./close.png", "image/./confettis.jpg", "image/./cooking.jpg", "image/./dangermouse.jpg", "image/./ddd-2018.jpg", "image/./denis.jpg", "image/./dreamy1.jpg", "image/./dreamy2.jpg", "image/./email_revealed.jpg", "image/./favourite_boss_revealed.jpg", "image/./favourite_movie_revealed.jpg", "image/./fighter1.jpg", "image/./fighter2.jpg", "image/./fighter3.jpg", "image/./github-icon.png", "image/./github.png", "image/./giugiu.jpg", "image/./gumble.jpg", "image/./handsup_001.jpg", "image/./handsup_002.jpg", "image/./handsup_003.jpg", "image/./handsup_004.jpg", "image/./handsup_005.jpg", "image/./handsup_006.jpg", "image/./handsup_007.jpg", "image/./handsup_008.jpg", "image/./handsup_009.jpg", "image/./handsup_010.jpg", "image/./handsup_011.jpg", "image/./handsup_012.jpg", "image/./handsup_013.jpg", "image/./handsup_014.jpg", "image/./handsup_015.jpg", "image/./handsup_016.jpg", "image/./handsup_017.jpg", "image/./handsup_018.jpg", "image/./handsup_019.jpg", "image/./handsup_020.jpg", "image/./handsup_021.jpg", "image/./handsup_022.jpg", "image/./handsup_023.jpg", "image/./handsup_024.jpg", "image/./handsup_025.jpg", "image/./handsup_026.jpg", "image/./handsup_027.jpg", "image/./handsup_028.jpg", "image/./handsup_029.jpg", "image/./handsup_030.jpg", "image/./handsup_031.jpg", "image/./handsup_032.jpg", "image/./handsup_033.jpg", "image/./handsup_034.jpg", "image/./handsup_035.jpg", "image/./icon-arrow.png", "image/./icon_aboutme.png", "image/./icon_aboutme_mobile.png", "image/./icon_aboutme_text.png", "image/./icon_boss.jpg", "image/./icon_catch.jpg", "image/./icon_contact.jpg", "image/./icon_deer.jpg", "image/./icon_dog.jpg", "image/./icon_experiment.png", "image/./icon_experiment_mobile.png", "image/./icon_experiment_text.png", "image/./icon_github.jpg", "image/./icon_glasses.jpg", "image/./icon_mom.jpg", "image/./icon_movie.jpg", "image/./icon_pen.jpg", "image/./icon_rugby.jpg", "image/./icon_saxo.jpg", "image/./icon_tinder.jpg", "image/./icon_trumpet.jpg", "image/./icon_twitter.jpg", "image/./icon_viewall.png", "image/./icon_viewall_mobile.png", "image/./icon_viewall_text.png", "image/./icon_work.png", "image/./icon_work_mobile.png", "image/./icon_work_text.png", "image/./img001.jpg", "image/./img002.jpg", "image/./img003.jpg", "image/./img004.jpg", "image/./img005.jpg", "image/./img006.jpg", "image/./img007.jpg", "image/./img008.jpg", "image/./img009.jpg", "image/./img010.jpg", "image/./img011.jpg", "image/./img012.jpg", "image/./img013.jpg", "image/./img014.jpg", "image/./king_of_elks_revealed.jpg", "image/./lego.jpg", "image/./lego_out_step.jpg", "image/./line_animation.jpg", "image/./link-icon.png", "image/./loading.gif", "image/./maman.jpg", "image/./menu_icon.png", "image/./night-eye.jpg", "image/./particles_stream.jpg", "image/./paw_patrol_music_maker.jpg", "image/./plane_to_sphere.jpg", "image/./rogue_news.jpg", "image/./shades_revealed.jpg", "image/./sherrifcali.jpg", "image/./sleigher3000.jpg", "image/./spotbots_switched_on.jpg", "image/./starwars_rebels.jpg", "image/./test-icon.png", "image/./trunk_trunk001.jpg", "image/./trunk_trunk002.jpg", "image/./trunk_trunk003.jpg", "image/./trunk_trunk004.jpg", "image/./trunk_trunk005.jpg", "image/./trunk_trunk006.jpg", "image/./trunk_trunk007.jpg", "image/./trunk_trunk008.jpg", "image/./trunk_trunk009.jpg", "image/./trunk_trunk010.jpg", "image/./trunk_trunk011.jpg", "image/./trunk_trunk012.jpg", "image/./trunk_trunk013.jpg", "image/./trunk_trunk014.jpg", "image/./trunk_trunk015.jpg", "image/./trunk_trunk016.jpg", "image/./trunk_trunk017.jpg", "image/./trunk_trunk018.jpg", "image/./trunk_trunk019.jpg", "image/./trunk_trunk020.jpg", "image/./trunk_trunk021.jpg", "image/./trunk_trunk022.jpg", "image/./trunk_trunk023.jpg", "image/./twitter-icon.png", "image/./twitter.png", "image/./worst-witch.jpg", "image/./wrestler_revealed.jpg", "image/transition/dechire_00000.jpg", "image/transition/dechire_00001.jpg", "image/transition/dechire_00002.jpg", "image/transition/dechire_00003.jpg", "image/transition/dechire_00004.jpg", "image/transition/dechire_00005.jpg", "image/transition/dechire_00006.jpg", "image/transition/dechire_00007.jpg", "image/transition/dechire_00008.jpg", "image/transition/dechire_00009.jpg", "image/transition/dechire_00010.jpg", "image/transition/dechire_00011.jpg", "image/transition/dechire_00012.jpg", "image/transition/dechire_00013.jpg", "image/transition/dechire_00014.jpg", "image/transition/dechire_00015.jpg", "image/transition/dechire_00016.jpg", "image/transition/dechire_00017.jpg", "image/transition/dechire_00018.jpg", "image/transition/dechire_00019.jpg", "image/transition/dechire_00020.jpg"]
    }
}, function(module, exports) {
    module.exports = "precision highp float;\n\nvoid main(void) {\n    gl_FragColor = vec4(1.0);\n}\n"
}, function(module, exports) {
    module.exports = "precision highp float;\n\nattribute vec3 aPosition;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\n\nvoid main(void) {\n    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(aPosition, 1.0);\n    gl_PointSize = 1.0;\n}\n"
}, 83, function(module, exports) {
    module.exports = "precision mediump float;\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(vec3(1., .2, 1.), opacity);\n    gl_FragColor.rgb *= opacity;\n}\n"
}, function(module, exports) {
    module.exports = "\nprecision highp float;\n\nvarying vec2 vUv;\nuniform sampler2D texture;\n\nvoid main(void)\n{\n    vec4 color = texture2D(texture, vUv);\n    gl_FragColor = vec4(color.rgb, 1.);\n}\n"
}, function(module, exports) {
    module.exports = "\nattribute vec3 aPosition;\nattribute vec2 aUv;\n\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec3 vPos;\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\n\nvoid main(void) {\n\tvPos = aPosition;\n\tvUv = aUv;\n    gl_Position =  vec4(aPosition, 1.0);\n}\n"
}, function(module, exports) {
    module.exports = "precision highp float;\n\nattribute vec3 aPosition;\nattribute vec2 aUv;\n\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float active;\nuniform float zoom;\n\n\nvarying vec3 vPos;\nvarying vec2 vUv;\nvarying float shadow;\n\nvoid main(void) {\n\n    vec2 scaleCenter = vec2(0.5, 0.5);\n\n    vUv = (aUv - scaleCenter) * zoom + scaleCenter;\n\n\n\n\n    // vUv = aUv;\n    vec4 pos = projectionMatrix * viewMatrix * modelMatrix * vec4(aPosition, 1.0);\n    vPos = aPosition;\n    // vPos = pos.rgb;\n    shadow = 0.0;\n    if(active < 1.0)\n    {\n        shadow =  pow(-vPos.z/2.5, 2.);\n    }\n    gl_Position = pos;\n\n}\n"
}, function(module, exports) {
    module.exports = "precision highp float;\n\nuniform vec3 color;\nuniform vec3 colorMenuTop;\nuniform vec3 colorMenuBottom;\nuniform sampler2D uDefaultImage;\nuniform sampler2D uRevealImage;\nuniform sampler2D uTransitionImage;\nuniform float active;\nuniform float percentage;\nuniform float percentageBlack;\nuniform float percentageTransition;\nuniform float TtoBorRtoL;\nuniform float percentageLogoMenu;\nuniform float percentageLogoMenuHover;\n\n// for transition (MENU)\n// isIcon = in order to not have weird black border, we need to add + .002 or -.002 depending if we're showing the menu or not...\nuniform float isIcon; // - 1 or 1\nuniform float percentageX;\nuniform float percentageY;\n\nuniform vec3 colorGradient;\n\nvarying vec3 vPos;\nvarying vec2 vUv;\nvarying float shadow;\n\nvoid main(void) {\n    float overlayThickness = .6;\n    // TEXTURE COLOR, IF PNG WITH TRANSPARENCY, GET DEFAULT COLOR\n    vec4 texel = texture2D(uDefaultImage, vUv.xy);\n    vec3 outColor = mix(color, texel.rgb, texel.a);\n\n    // IF TRANSITION (ICON -> IMAGE), then blend the colors\n    vec4 texelTransition = texture2D(uTransitionImage, vUv.xy);\n    vec4 texelRevealImage = texture2D(uRevealImage, vUv.xy);\n    outColor = mix(outColor, texelRevealImage.rgb, texelTransition.r);\n\n    // COLOR GRADIENT, WHEN QUAD IS ACTIVE!\n    float x = pow(vUv.y, 2.);\n    vec3 colorAfterGradient = mix(outColor, colorGradient, x * active * percentage);\n\n    // APPLY THE SHADOW PASSED FROM VERTEXT SHADER\n    vec3 colorAfterShadow = mix(colorAfterGradient, vec3(0.0), shadow);\n\n    // ADD A DARK OVERLAY IF NON ACTIVE AND IF THERE IS AN ACTIVE QUAD SOMEWHERE\n    colorAfterShadow = mix(colorAfterShadow, vec3(0.0), percentage * overlayThickness * (1.0 - active));\n\n    // ADD A FADE TO COMPLETE BLACK FOR WHEN CLICK ON MENU\n    vec3 colorAfterBlackPercentage = mix(colorAfterShadow, vec3(0.0), percentageBlack);\n\n    // ADD A TRANSITION FROM R TO L OR T TO B OR INVERSED\n    float topToBottom0or1 = 0. + TtoBorRtoL * 1.;\n    float topToBottom = -1. + TtoBorRtoL * 2.;\n\n    vec2 v1 = vec2(percentageX, percentageY);\n    vec2 v2 = vec2(topToBottom0or1 - (vUv.x) * topToBottom + isIcon * .01, topToBottom0or1 - vUv.y * topToBottom + isIcon * .01);\n\n    vec2 mask = vec2(greaterThanEqual(v1, v2));\n\n    vec3 colorMenu = mix(colorMenuTop, colorMenuBottom, x);\n    vec3 colorAfterTransitionMenu = mix(colorAfterBlackPercentage, colorMenu, mask.x + mask.y);\n\n    // THEN: show the main logo (at the point it's up to the dev to have swap the texture\n    // (after PercentageX or percentageY = 1.0) so the image is hidden\n    // vec4 logo1 = mix(texel, texelRevealImage, percentageLogoMenuHover);\n\n    vec4 whichLogo = texelRevealImage;\n    if(vUv.x > percentageLogoMenuHover)\n    {\n        whichLogo = texel;\n    }\n\n    vec3 lastColor = mix(colorAfterTransitionMenu, whichLogo.rgb, percentageLogoMenu * whichLogo.a);\n\n\n    // lastColor = vec3(vec3(1.), vec3(0.), perce)\n\n    // lastColor = color;\n    // gl_FragColor = vec4(vec3(mask.x), 1.0);\n    gl_FragColor = vec4(lastColor, 1.0);\n}\n"
}]));
//# sourceMappingURL=main.js.map