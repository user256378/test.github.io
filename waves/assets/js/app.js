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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/alfrid/build/alfrid.js":
/*!*********************************************!*\
  !*** ./node_modules/alfrid/build/alfrid.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(root,factory){ true?module.exports=factory():undefined}("undefined"!=typeof self?self:this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=35)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_glMatrix=__webpack_require__(2),_getAndApplyExtension=__webpack_require__(40),_getAndApplyExtension2=_interopRequireDefault(_getAndApplyExtension),_exposeAttributes=__webpack_require__(41),_exposeAttributes2=_interopRequireDefault(_exposeAttributes),_getFloat=__webpack_require__(43),_getFloat2=_interopRequireDefault(_getFloat),_getHalfFloat=__webpack_require__(44),_getHalfFloat2=_interopRequireDefault(_getHalfFloat),_getAttribLoc=__webpack_require__(22),_ExtensionsList=(_interopRequireDefault(_getAttribLoc),__webpack_require__(45)),_ExtensionsList2=_interopRequireDefault(_ExtensionsList),gl=void 0,GLTool=function(){function GLTool(){_classCallCheck(this,GLTool),this._viewport=[0,0,0,0],this._enabledVertexAttribute=[],this.identityMatrix=_glMatrix.mat4.create(),this._normalMatrix=_glMatrix.mat3.create(),this._inverseModelViewMatrix=_glMatrix.mat3.create(),this._modelMatrix=_glMatrix.mat4.create(),this._matrix=_glMatrix.mat4.create(),this._matrixStacks=[],this._lastMesh=null,this._useWebGL2=!1,this._hasArrayInstance=!1,this._extArrayInstance=!1,this._hasCheckedExt=!1,_glMatrix.mat4.identity(this.identityMatrix,this.identityMatrix),this.isMobile=!1,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(this.isMobile=!0)}return _createClass(GLTool,[{key:"init",value:function(mCanvas){var mParameters=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===mCanvas||void 0===mCanvas)return void console.error("Canvas not exist");void 0!==this.canvas&&null!==this.canvas&&this.destroy(),this.canvas=mCanvas,this.setSize(window.innerWidth,window.innerHeight),mParameters.useWebgl2=mParameters.useWebgl2||!1;var ctx=void 0;mParameters.useWebgl2?(ctx=this.canvas.getContext("experimental-webgl2",mParameters)||this.canvas.getContext("webgl2",mParameters),ctx?(this._useWebGL2=!0,console.log("Using WebGL 2 : ",ctx)):(ctx=this.canvas.getContext("webgl",mParameters)||this.canvas.getContext("experimental-webgl",mParameters),this._useWebGL2=!1)):(ctx=this.canvas.getContext("webgl",mParameters)||this.canvas.getContext("experimental-webgl",mParameters),this._useWebGL2=!1),this.initWithGL(ctx)}},{key:"initWithGL",value:function(ctx){this.canvas||(this.canvas=ctx.canvas),gl=this.gl=ctx,this.extensions={};for(var i=0;i<_ExtensionsList2.default.length;i++)this.extensions[_ExtensionsList2.default[i]]=gl.getExtension(_ExtensionsList2.default[i]);(0,_exposeAttributes2.default)(),(0,_getAndApplyExtension2.default)(gl,"OES_vertex_array_object"),(0,_getAndApplyExtension2.default)(gl,"ANGLE_instanced_arrays"),(0,_getAndApplyExtension2.default)(gl,"WEBGL_draw_buffers"),this.enable(this.DEPTH_TEST),this.enable(this.CULL_FACE),this.enable(this.BLEND),this.enableAlphaBlending()}},{key:"setViewport",value:function(x,y,w,h){var hasChanged=!1;x!==this._viewport[0]&&(hasChanged=!0),y!==this._viewport[1]&&(hasChanged=!0),w!==this._viewport[2]&&(hasChanged=!0),h!==this._viewport[3]&&(hasChanged=!0),hasChanged&&(gl.viewport(x,y,w,h),this._viewport=[x,y,w,h])}},{key:"scissor",value:function(x,y,w,h){gl.scissor(x,y,w,h)}},{key:"clear",value:function(r,g,b,a){gl.clearColor(r,g,b,a),gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT)}},{key:"cullFace",value:function(mValue){gl.cullFace(mValue)}},{key:"setMatrices",value:function(mCamera){this.camera=mCamera,this.rotate(this.identityMatrix)}},{key:"useShader",value:function(mShader){this.shader=mShader,this.shaderProgram=this.shader.shaderProgram}},{key:"rotate",value:function(mRotation){_glMatrix.mat4.copy(this._modelMatrix,mRotation),_glMatrix.mat4.multiply(this._matrix,this.camera.matrix,this._modelMatrix),_glMatrix.mat3.fromMat4(this._normalMatrix,this._matrix),_glMatrix.mat3.invert(this._normalMatrix,this._normalMatrix),_glMatrix.mat3.transpose(this._normalMatrix,this._normalMatrix),_glMatrix.mat3.fromMat4(this._inverseModelViewMatrix,this._matrix),_glMatrix.mat3.invert(this._inverseModelViewMatrix,this._inverseModelViewMatrix)}},{key:"draw",value:function(mMesh,mDrawingType){if(mMesh.length)for(var i=0;i<mMesh.length;i++)this.draw(mMesh[i]);else{mMesh.bind(this.shaderProgram),void 0!==this.camera&&(this.shader.uniform("uProjectionMatrix","mat4",this.camera.projection),this.shader.uniform("uViewMatrix","mat4",this.camera.matrix)),this.shader.uniform("uModelMatrix","mat4",this._modelMatrix),this.shader.uniform("uNormalMatrix","mat3",this._normalMatrix),this.shader.uniform("uModelViewMatrixInverse","mat3",this._inverseModelViewMatrix);var drawType=mMesh.drawType;void 0!==mDrawingType&&(drawType=mDrawingType),mMesh.isInstanced?gl.drawElementsInstanced(mMesh.drawType,mMesh.iBuffer.numItems,gl.UNSIGNED_SHORT,0,mMesh.numInstance):drawType===gl.POINTS?gl.drawArrays(drawType,0,mMesh.vertexSize):gl.drawElements(drawType,mMesh.iBuffer.numItems,gl.UNSIGNED_SHORT,0),mMesh.unbind()}}},{key:"drawTransformFeedback",value:function(mTransformObject){var meshSource=mTransformObject.meshSource,meshDestination=mTransformObject.meshDestination,numPoints=mTransformObject.numPoints,transformFeedback=mTransformObject.transformFeedback;meshSource.bind(this.shaderProgram),meshDestination.generateBuffers(this.shaderProgram),gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK,transformFeedback),meshDestination.attributes.forEach(function(attr,i){gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER,i,attr.buffer)}),gl.enable(gl.RASTERIZER_DISCARD),gl.beginTransformFeedback(gl.POINTS),gl.drawArrays(gl.POINTS,0,numPoints),gl.endTransformFeedback(),gl.disable(gl.RASTERIZER_DISCARD),gl.useProgram(null),gl.bindBuffer(gl.ARRAY_BUFFER,null),meshDestination.attributes.forEach(function(attr,i){gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER,i,null)}),gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK,null),meshSource.unbind()}},{key:"setSize",value:function(mWidth,mHeight){this._width=mWidth,this._height=mHeight,this.canvas.width=this._width,this.canvas.height=this._height,this._aspectRatio=this._width/this._height,gl&&this.viewport(0,0,this._width,this._height)}},{key:"showExtensions",value:function(){console.log("Extensions : ",this.extensions);for(var ext in this.extensions)this.extensions[ext]&&console.log(ext,":",this.extensions[ext])}},{key:"checkExtension",value:function(mExtension){return!!this.extensions[mExtension]}},{key:"getExtension",value:function(mExtension){return this.extensions[mExtension]}},{key:"enableAlphaBlending",value:function(){gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA)}},{key:"enableAdditiveBlending",value:function(){gl.blendFunc(gl.ONE,gl.ONE)}},{key:"pushMatrix",value:function(){var mtx=_glMatrix.mat4.clone(this._modelMatrix);this._matrixStacks.push(mtx)}},{key:"popMatrix",value:function(){if(0==this._matrixStacks.length)return null;var mtx=this._matrixStacks.pop();this.rotate(mtx)}},{key:"enable",value:function(mParameter){gl.enable(mParameter)}},{key:"disable",value:function(mParameter){gl.disable(mParameter)}},{key:"viewport",value:function(x,y,w,h){this.setViewport(x,y,w,h)}},{key:"destroy",value:function(){if(this.canvas.parentNode)try{this.canvas.parentNode.removeChild(this.canvas)}catch(e){console.log("Error : ",e)}this.canvas=null}},{key:"FLOAT",get:function(){return(0,_getFloat2.default)()}},{key:"HALF_FLOAT",get:function(){return(0,_getHalfFloat2.default)()}},{key:"width",get:function(){return this._width}},{key:"height",get:function(){return this._height}},{key:"aspectRatio",get:function(){return this._aspectRatio}},{key:"webgl2",get:function(){return this._useWebGL2}}]),GLTool}(),GL=new GLTool;exports.default=GL},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_GLTool=__webpack_require__(0),_GLTool2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_GLTool),isSame=(__webpack_require__(46),function(array1,array2){if(array1.length!==array2.length)return!1;for(var i=0;i<array1.length;i++)if(array1[i]!==array2[i])return!1;return!0}),addLineNumbers=function(string){for(var lines=string.split("\n"),i=0;i<lines.length;i++)lines[i]=i+1+": "+lines[i];return lines.join("\n")},cloneArray=function(mArray){return mArray.slice?mArray.slice(0):new Float32Array(mArray)},gl=void 0,defaultVertexShader=__webpack_require__(9),defaultFragmentShader=__webpack_require__(47),uniformMapping={float:"uniform1f",vec2:"uniform2fv",vec3:"uniform3fv",vec4:"uniform4fv",int:"uniform1i",mat3:"uniformMatrix3fv",mat4:"uniformMatrix4fv"},GLShader=function(){function GLShader(){var strVertexShader=arguments.length>0&&void 0!==arguments[0]?arguments[0]:defaultVertexShader,strFragmentShader=arguments.length>1&&void 0!==arguments[1]?arguments[1]:defaultFragmentShader,mVaryings=arguments[2];_classCallCheck(this,GLShader),gl=_GLTool2.default.gl,this.parameters=[],this.uniformTextures=[],this._varyings=mVaryings,strVertexShader||(strVertexShader=defaultVertexShader),strFragmentShader||(strFragmentShader=defaultVertexShader);var vsShader=this._createShaderProgram(strVertexShader,!0),fsShader=this._createShaderProgram(strFragmentShader,!1);this._attachShaderProgram(vsShader,fsShader)}return _createClass(GLShader,[{key:"bind",value:function(){_GLTool2.default.shader!==this&&(gl.useProgram(this.shaderProgram),_GLTool2.default.useShader(this),this.uniformTextures=[])}},{key:"uniform",value:function(mName,mType,mValue){if("object"===(void 0===mName?"undefined":_typeof(mName)))return void this.uniformObject(mName);for(var uniformType=uniformMapping[mType]||mType,hasUniform=!1,oUniform=void 0,parameterIndex=-1,i=0;i<this.parameters.length;i++)if(oUniform=this.parameters[i],oUniform.name===mName){hasUniform=!0,parameterIndex=i;break}var isNumber=!1;if(hasUniform?(this.shaderProgram[mName]=oUniform.uniformLoc,isNumber=oUniform.isNumber):(isNumber="uniform1i"===uniformType||"uniform1f"===uniformType,this.shaderProgram[mName]=gl.getUniformLocation(this.shaderProgram,mName),isNumber?this.parameters.push({name:mName,type:uniformType,value:mValue,uniformLoc:this.shaderProgram[mName],isNumber:isNumber}):this.parameters.push({name:mName,type:uniformType,value:cloneArray(mValue),uniformLoc:this.shaderProgram[mName],isNumber:isNumber}),parameterIndex=this.parameters.length-1),this.parameters[parameterIndex].uniformLoc)if(-1===uniformType.indexOf("Matrix"))if(isNumber){var needUpdate=this.parameters[parameterIndex].value!==mValue||!hasUniform;needUpdate&&(gl[uniformType](this.shaderProgram[mName],mValue),this.parameters[parameterIndex].value=mValue)}else isSame(this.parameters[parameterIndex].value,mValue)&&hasUniform||(gl[uniformType](this.shaderProgram[mName],mValue),this.parameters[parameterIndex].value=cloneArray(mValue));else isSame(this.parameters[parameterIndex].value,mValue)&&hasUniform||(gl[uniformType](this.shaderProgram[mName],!1,mValue),this.parameters[parameterIndex].value=cloneArray(mValue))}},{key:"uniformObject",value:function(mUniformObj){for(var uniformName in mUniformObj){var uniformValue=mUniformObj[uniformName],uniformType=GLShader.getUniformType(uniformValue);if(uniformValue.concat&&uniformValue[0].concat){for(var tmp=[],i=0;i<uniformValue.length;i++)tmp=tmp.concat(uniformValue[i]);uniformValue=tmp}this.uniform(uniformName,uniformType,uniformValue)}}},{key:"_createShaderProgram",value:function(mShaderStr,isVertexShader){var shaderType=isVertexShader?_GLTool2.default.VERTEX_SHADER:_GLTool2.default.FRAGMENT_SHADER,shader=gl.createShader(shaderType);return gl.shaderSource(shader,mShaderStr),gl.compileShader(shader),gl.getShaderParameter(shader,gl.COMPILE_STATUS)?shader:(console.warn("Error in Shader : ",gl.getShaderInfoLog(shader)),console.log(addLineNumbers(mShaderStr)),null)}},{key:"_attachShaderProgram",value:function(mVertexShader,mFragmentShader){this.shaderProgram=gl.createProgram(),gl.attachShader(this.shaderProgram,mVertexShader),gl.attachShader(this.shaderProgram,mFragmentShader),gl.deleteShader(mVertexShader),gl.deleteShader(mFragmentShader),this._varyings&&(console.log("Transform feedback setup : ",this._varyings),gl.transformFeedbackVaryings(this.shaderProgram,this._varyings,gl.SEPARATE_ATTRIBS)),gl.linkProgram(this.shaderProgram)}}]),GLShader}();GLShader.getUniformType=function(mValue){var isArray=!!mValue.concat,getArrayUniformType=function(mValue){return 9===mValue.length?"uniformMatrix3fv":16===mValue.length?"uniformMatrix4fv":"vec"+mValue.length};return isArray?getArrayUniformType(mValue[0].concat?mValue[0]:mValue):"float"},exports.default=GLShader},function(module,exports,__webpack_require__){"use strict";function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}Object.defineProperty(exports,"__esModule",{value:!0}),exports.vec4=exports.vec3=exports.vec2=exports.quat2=exports.quat=exports.mat4=exports.mat3=exports.mat2d=exports.mat2=exports.glMatrix=void 0;var _common=__webpack_require__(3),glMatrix=_interopRequireWildcard(_common),_mat=__webpack_require__(36),mat2=_interopRequireWildcard(_mat),_mat2d=__webpack_require__(37),mat2d=_interopRequireWildcard(_mat2d),_mat2=__webpack_require__(17),mat3=_interopRequireWildcard(_mat2),_mat3=__webpack_require__(18),mat4=_interopRequireWildcard(_mat3),_quat=__webpack_require__(19),quat=_interopRequireWildcard(_quat),_quat2=__webpack_require__(38),quat2=_interopRequireWildcard(_quat2),_vec=__webpack_require__(39),vec2=_interopRequireWildcard(_vec),_vec2=__webpack_require__(20),vec3=_interopRequireWildcard(_vec2),_vec3=__webpack_require__(21),vec4=_interopRequireWildcard(_vec3);exports.glMatrix=glMatrix,exports.mat2=mat2,exports.mat2d=mat2d,exports.mat3=mat3,exports.mat4=mat4,exports.quat=quat,exports.quat2=quat2,exports.vec2=vec2,exports.vec3=vec3,exports.vec4=vec4},function(module,exports,__webpack_require__){"use strict";function setMatrixArrayType(type){exports.ARRAY_TYPE=ARRAY_TYPE=type}function toRadian(a){return a*degree}function equals(a,b){return Math.abs(a-b)<=EPSILON*Math.max(1,Math.abs(a),Math.abs(b))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.setMatrixArrayType=setMatrixArrayType,exports.toRadian=toRadian,exports.equals=equals;var EPSILON=exports.EPSILON=1e-6,ARRAY_TYPE=exports.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,degree=(exports.RANDOM=Math.random,Math.PI/180)},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Scheduler=function(){function Scheduler(){_classCallCheck(this,Scheduler),this._delayTasks=[],this._nextTasks=[],this._deferTasks=[],this._highTasks=[],this._usurpTask=[],this._enterframeTasks=[],this._idTable=0,this._startTime=(new Date).getTime(),this._deltaTime=0,this._internalTime=0,this._isPaused=!1,this._loop()}return _createClass(Scheduler,[{key:"addEF",value:function(func,params){params=params||[];var id=this._idTable;return this._enterframeTasks[id]={func:func,params:params},this._idTable++,id}},{key:"removeEF",value:function(id){return void 0!==this._enterframeTasks[id]&&(this._enterframeTasks[id]=null),-1}},{key:"delay",value:function(func,params,_delay){var time=(new Date).getTime(),t={func:func,params:params,delay:_delay,time:time};this._delayTasks.push(t)}},{key:"defer",value:function(func,params){var t={func:func,params:params};this._deferTasks.push(t)}},{key:"next",value:function(func,params){var t={func:func,params:params};this._nextTasks.push(t)}},{key:"usurp",value:function(func,params){var t={func:func,params:params};this._usurpTask.push(t)}},{key:"pause",value:function(){this._isPaused=!0}},{key:"advance",value:function(){this._internalTime+=1/60}},{key:"resume",value:function(){this._isPaused=!1}},{key:"_process",value:function(){var i=0,task=void 0,interval=void 0;for(i=0;i<this._enterframeTasks.length;i++)null!==(task=this._enterframeTasks[i])&&void 0!==task&&task.func(task.params);for(;this._highTasks.length>0;)task=this._highTasks.pop(),task.func(task.params);var startTime=(new Date).getTime(),_startTime=this._deltaTime;for(this._deltaTime=(startTime-this._startTime)/1e3,i=0;i<this._delayTasks.length;i++)task=this._delayTasks[i],startTime-task.time>task.delay&&(task.func(task.params),this._delayTasks.splice(i,1));for(startTime=(new Date).getTime(),this._deltaTime=(startTime-this._startTime)/1e3,interval=1e3/60;this._deferTasks.length>0;){if(task=this._deferTasks.shift(),!((new Date).getTime()-startTime<interval)){this._deferTasks.unshift(task);break}task.func(task.params)}for(startTime=(new Date).getTime(),this._deltaTime=(startTime-this._startTime)/1e3,interval=1e3/60;this._usurpTask.length>0;)task=this._usurpTask.shift(),(new Date).getTime()-startTime<interval&&task.func(task.params);this._highTasks=this._highTasks.concat(this._nextTasks),this._nextTasks=[],this._usurpTask=[],this._isPaused||(this._internalTime+=this._deltaTime-_startTime)}},{key:"_loop",value:function(){var _this=this;this._process(),window.requestAnimationFrame(function(){return _this._loop()})}},{key:"intervalTime",get:function(){return this._internalTime}},{key:"deltaTime",get:function(){return this._deltaTime}}]),Scheduler}(),scheduler=new Scheduler;exports.default=scheduler},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_glMatrix=__webpack_require__(2),_getAttribLoc=__webpack_require__(22),_getAttribLoc2=_interopRequireDefault(_getAttribLoc),gl=void 0,getBuffer=function(attr){var buffer=void 0;return void 0!==attr.buffer?buffer=attr.buffer:(buffer=gl.createBuffer(),attr.buffer=buffer),buffer},formBuffer=function(mData,mNum){for(var ary=[],i=0;i<mData.length;i+=mNum){for(var o=[],j=0;j<mNum;j++)o.push(mData[i+j]);ary.push(o)}return ary},Mesh=function(){function Mesh(){var mDrawingType=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,mUseVao=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];_classCallCheck(this,Mesh),gl=_GLTool2.default.gl,this.drawType=mDrawingType,this._attributes=[],this._numInstance=-1,this._enabledVertexAttribute=[],this._indices=[],this._faces=[],this._bufferChanged=[],this._hasIndexBufferChanged=!1,this._hasVAO=!1,this._isInstanced=!1,this._extVAO=!!_GLTool2.default.gl.createVertexArray,this._useVAO=!!this._extVAO&&mUseVao}return _createClass(Mesh,[{key:"bufferVertex",value:function(mArrayVertices){var mDrawType=arguments.length>1&&void 0!==arguments[1]?arguments[1]:35044;return this.bufferData(mArrayVertices,"aVertexPosition",3,mDrawType),this.normals.length<this.vertices.length&&this.bufferNormal(mArrayVertices,mDrawType),this}},{key:"bufferTexCoord",value:function(mArrayTexCoords){var mDrawType=arguments.length>1&&void 0!==arguments[1]?arguments[1]:35044;return this.bufferData(mArrayTexCoords,"aTextureCoord",2,mDrawType),this}},{key:"bufferNormal",value:function(mNormals){var mDrawType=arguments.length>1&&void 0!==arguments[1]?arguments[1]:35044;return this.bufferData(mNormals,"aNormal",3,mDrawType),this}},{key:"bufferIndex",value:function(mArrayIndices){var isDynamic=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._drawType=isDynamic?gl.DYNAMIC_DRAW:gl.STATIC_DRAW,this._indices=new Uint16Array(mArrayIndices),this._numItems=this._indices.length,this}},{key:"bufferFlattenData",value:function(mData,mName,mItemSize){var data=(arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments.length>4&&void 0!==arguments[4]&&arguments[4],formBuffer(mData,mItemSize));return this.bufferData(data,mName,mItemSize,35044,!1),this}},{key:"bufferData",value:function(mData,mName,mItemSize){var mDrawType=arguments.length>3&&void 0!==arguments[3]?arguments[3]:35044,isInstanced=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=0,drawType=mDrawType,bufferData=[];for(mItemSize||(mItemSize=mData[0].length),this._isInstanced=isInstanced||this._isInstanced,i=0;i<mData.length;i++)for(var j=0;j<mData[i].length;j++)bufferData.push(mData[i][j]);var dataArray=new Float32Array(bufferData),attribute=this.getAttribute(mName);return attribute?(attribute.itemSize=mItemSize,attribute.dataArray=dataArray,attribute.source=mData):this._attributes.push({name:mName,source:mData,itemSize:mItemSize,drawType:drawType,dataArray:dataArray,isInstanced:isInstanced}),this._bufferChanged.push(mName),this}},{key:"bufferInstance",value:function(mData,mName){if(!_GLTool2.default.gl.vertexAttribDivisor)return void console.error("Extension : ANGLE_instanced_arrays is not supported with this device !");var itemSize=mData[0].length;this._numInstance=mData.length,this.bufferData(mData,mName,itemSize,35044,!0)}},{key:"bind",value:function(mShaderProgram){this.generateBuffers(mShaderProgram),this.hasVAO?gl.bindVertexArray(this.vao):(this.attributes.forEach(function(attribute){gl.bindBuffer(gl.ARRAY_BUFFER,attribute.buffer);var attrPosition=attribute.attrPosition;gl.vertexAttribPointer(attrPosition,attribute.itemSize,gl.FLOAT,!1,0,0),attribute.isInstanced&&gl.vertexAttribDivisor(attrPosition,1)}),gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.iBuffer))}},{key:"generateBuffers",value:function(mShaderProgram){var _this=this;0!=this._bufferChanged.length&&(this._useVAO?(this._vao||(this._vao=gl.createVertexArray()),gl.bindVertexArray(this._vao),this._attributes.forEach(function(attrObj){if(-1!==_this._bufferChanged.indexOf(attrObj.name)){var buffer=getBuffer(attrObj);gl.bindBuffer(gl.ARRAY_BUFFER,buffer),gl.bufferData(gl.ARRAY_BUFFER,attrObj.dataArray,attrObj.drawType);var attrPosition=(0,_getAttribLoc2.default)(gl,mShaderProgram,attrObj.name);gl.enableVertexAttribArray(attrPosition),gl.vertexAttribPointer(attrPosition,attrObj.itemSize,gl.FLOAT,!1,0,0),attrObj.attrPosition=attrPosition,attrObj.isInstanced&&gl.vertexAttribDivisor(attrPosition,1)}}),this._updateIndexBuffer(),gl.bindVertexArray(null),this._hasVAO=!0):(this._attributes.forEach(function(attrObj){if(-1!==_this._bufferChanged.indexOf(attrObj.name)){var buffer=getBuffer(attrObj);gl.bindBuffer(gl.ARRAY_BUFFER,buffer),gl.bufferData(gl.ARRAY_BUFFER,attrObj.dataArray,attrObj.drawType);var attrPosition=(0,_getAttribLoc2.default)(gl,mShaderProgram,attrObj.name);gl.enableVertexAttribArray(attrPosition),gl.vertexAttribPointer(attrPosition,attrObj.itemSize,gl.FLOAT,!1,0,0),attrObj.attrPosition=attrPosition,attrObj.isInstanced&&gl.vertexAttribDivisor(attrPosition,1)}}),this._updateIndexBuffer()),this._hasIndexBufferChanged=!1,this._bufferChanged=[])}},{key:"unbind",value:function(){this._useVAO&&gl.bindVertexArray(null),this._attributes.forEach(function(attribute){attribute.isInstanced&&gl.vertexAttribDivisor(attribute.attrPosition,0)})}},{key:"_updateIndexBuffer",value:function(){this._hasIndexBufferChanged||(this.iBuffer||(this.iBuffer=gl.createBuffer()),gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.iBuffer),gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,this._indices,this._drawType),this.iBuffer.itemSize=1,this.iBuffer.numItems=this._numItems)}},{key:"computeNormals",value:function(){var usingFaceNormals=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.generateFaces(),usingFaceNormals?this._computeFaceNormals():this._computeVertexNormals()}},{key:"_computeFaceNormals",value:function(){for(var faceIndex=void 0,face=void 0,normals=[],i=0;i<this._indices.length;i+=3){faceIndex=i/3,face=this._faces[faceIndex];var N=face.normal;normals[face.indices[0]]=N,normals[face.indices[1]]=N,normals[face.indices[2]]=N}this.bufferNormal(normals)}},{key:"_computeVertexNormals",value:function(){for(var face=void 0,sumNormal=_glMatrix.vec3.create(),normals=[],vertices=this.vertices,i=0;i<vertices.length;i++){_glMatrix.vec3.set(sumNormal,0,0,0);for(var j=0;j<this._faces.length;j++)face=this._faces[j],face.indices.indexOf(i)>=0&&(sumNormal[0]+=face.normal[0],sumNormal[1]+=face.normal[1],sumNormal[2]+=face.normal[2]);_glMatrix.vec3.normalize(sumNormal,sumNormal),normals.push([sumNormal[0],sumNormal[1],sumNormal[2]])}this.bufferNormal(normals)}},{key:"generateFaces",value:function(){for(var ia=void 0,ib=void 0,ic=void 0,a=void 0,b=void 0,c=void 0,vertices=(_glMatrix.vec3.create(),_glMatrix.vec3.create(),_glMatrix.vec3.create(),this.vertices),i=0;i<this._indices.length;i+=3){ia=this._indices[i],ib=this._indices[i+1],ic=this._indices[i+2],a=vertices[ia],b=vertices[ib],c=vertices[ic];var face={indices:[ia,ib,ic],vertices:[a,b,c]};this._faces.push(face)}}},{key:"getAttribute",value:function(mName){return this._attributes.find(function(a){return a.name===mName})}},{key:"getSource",value:function(mName){var attr=this.getAttribute(mName);return attr?attr.source:[]}},{key:"vertices",get:function(){return this.getSource("aVertexPosition")}},{key:"normals",get:function(){return this.getSource("aNormal")}},{key:"coords",get:function(){return this.getSource("aTextureCoord")}},{key:"indices",get:function(){return this._indices}},{key:"vertexSize",get:function(){return this.vertices.length}},{key:"faces",get:function(){return this._faces}},{key:"attributes",get:function(){return this._attributes}},{key:"hasVAO",get:function(){return this._hasVAO}},{key:"vao",get:function(){return this._vao}},{key:"numInstance",get:function(){return this._numInstance}},{key:"isInstanced",get:function(){return this._isInstanced}}]),Mesh}();exports.default=Mesh},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_GLTool=__webpack_require__(0),_GLTool2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_GLTool),Batch=function(){function Batch(mMesh,mShader){_classCallCheck(this,Batch),this._mesh=mMesh,this._shader=mShader}return _createClass(Batch,[{key:"draw",value:function(){this._shader.bind(),_GLTool2.default.draw(this.mesh)}},{key:"mesh",get:function(){return this._mesh}},{key:"shader",get:function(){return this._shader}}]),Batch}();exports.default=Batch},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Mesh=__webpack_require__(5),_Mesh2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_Mesh),Geom={},meshTri=void 0;Geom.plane=function(width,height,numSegments){for(var axis=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"xy",drawType=arguments.length>4&&void 0!==arguments[4]?arguments[4]:4,positions=[],coords=[],indices=[],normals=[],gapX=width/numSegments,gapY=height/numSegments,gapUV=1/numSegments,sx=.5*-width,sy=.5*-height,index=0,i=0;i<numSegments;i++)for(var j=0;j<numSegments;j++){var tx=gapX*i+sx,ty=gapY*j+sy,u=i/numSegments,v=j/numSegments;"xz"===axis?(positions.push([tx,0,ty+gapY]),positions.push([tx+gapX,0,ty+gapY]),positions.push([tx+gapX,0,ty]),positions.push([tx,0,ty]),coords.push([u,1-(v+gapUV)]),coords.push([u+gapUV,1-(v+gapUV)]),coords.push([u+gapUV,1-v]),coords.push([u,1-v]),normals.push([0,1,0]),normals.push([0,1,0]),normals.push([0,1,0]),normals.push([0,1,0])):"yz"===axis?(positions.push([0,ty,tx]),positions.push([0,ty,tx+gapX]),positions.push([0,ty+gapY,tx+gapX]),positions.push([0,ty+gapY,tx]),coords.push([u,v]),coords.push([u+gapUV,v]),coords.push([u+gapUV,v+gapUV]),coords.push([u,v+gapUV]),normals.push([1,0,0]),normals.push([1,0,0]),normals.push([1,0,0]),normals.push([1,0,0])):(positions.push([tx,ty,0]),positions.push([tx+gapX,ty,0]),positions.push([tx+gapX,ty+gapY,0]),positions.push([tx,ty+gapY,0]),coords.push([u,v]),coords.push([u+gapUV,v]),coords.push([u+gapUV,v+gapUV]),coords.push([u,v+gapUV]),normals.push([0,0,1]),normals.push([0,0,1]),normals.push([0,0,1]),normals.push([0,0,1])),indices.push(4*index+0),indices.push(4*index+1),indices.push(4*index+2),indices.push(4*index+0),indices.push(4*index+2),indices.push(4*index+3),index++}var mesh=new _Mesh2.default(drawType);return mesh.bufferVertex(positions),mesh.bufferTexCoord(coords),mesh.bufferIndex(indices),mesh.bufferNormal(normals),mesh},Geom.sphere=function(size,numSegments){function getPosition(i,j){var isNormal=arguments.length>2&&void 0!==arguments[2]&&arguments[2],rx=i/numSegments*Math.PI-.5*Math.PI,ry=j/numSegments*Math.PI*2,r=isNormal?1:size,pos=[];pos[1]=Math.sin(rx)*r;var t=Math.cos(rx)*r;pos[0]=Math.cos(ry)*t,pos[2]=Math.sin(ry)*t;return pos[0]=Math.floor(1e4*pos[0])/1e4,pos[1]=Math.floor(1e4*pos[1])/1e4,pos[2]=Math.floor(1e4*pos[2])/1e4,pos}for(var isInvert=arguments.length>2&&void 0!==arguments[2]&&arguments[2],drawType=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,positions=[],coords=[],indices=[],normals=[],gapUV=1/numSegments,index=0,i=0;i<numSegments;i++)for(var j=0;j<numSegments;j++){positions.push(getPosition(i,j)),positions.push(getPosition(i+1,j)),positions.push(getPosition(i+1,j+1)),positions.push(getPosition(i,j+1)),normals.push(getPosition(i,j,!0)),normals.push(getPosition(i+1,j,!0)),normals.push(getPosition(i+1,j+1,!0)),normals.push(getPosition(i,j+1,!0));var u=j/numSegments,v=i/numSegments;coords.push([1-u,v]),coords.push([1-u,v+gapUV]),coords.push([1-u-gapUV,v+gapUV]),coords.push([1-u-gapUV,v]),indices.push(4*index+0),indices.push(4*index+1),indices.push(4*index+2),indices.push(4*index+0),indices.push(4*index+2),indices.push(4*index+3),index++}isInvert&&indices.reverse();var mesh=new _Mesh2.default(drawType);return mesh.bufferVertex(positions),mesh.bufferTexCoord(coords),mesh.bufferIndex(indices),mesh.bufferNormal(normals),mesh},Geom.cube=function(w,h,d){var drawType=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4;h=h||w,d=d||w;var x=w/2,y=h/2,z=d/2,positions=[],coords=[],indices=[],normals=[],count=0;positions.push([-x,y,-z]),positions.push([x,y,-z]),positions.push([x,-y,-z]),positions.push([-x,-y,-z]),normals.push([0,0,-1]),normals.push([0,0,-1]),normals.push([0,0,-1]),normals.push([0,0,-1]),coords.push([0,0]),coords.push([1,0]),coords.push([1,1]),coords.push([0,1]),indices.push(4*count+0),indices.push(4*count+1),indices.push(4*count+2),indices.push(4*count+0),indices.push(4*count+2),indices.push(4*count+3),count++,positions.push([x,y,-z]),positions.push([x,y,z]),positions.push([x,-y,z]),positions.push([x,-y,-z]),normals.push([1,0,0]),normals.push([1,0,0]),normals.push([1,0,0]),normals.push([1,0,0]),coords.push([0,0]),coords.push([1,0]),coords.push([1,1]),coords.push([0,1]),indices.push(4*count+0),indices.push(4*count+1),indices.push(4*count+2),indices.push(4*count+0),indices.push(4*count+2),indices.push(4*count+3),count++,positions.push([x,y,z]),positions.push([-x,y,z]),positions.push([-x,-y,z]),positions.push([x,-y,z]),normals.push([0,0,1]),normals.push([0,0,1]),normals.push([0,0,1]),normals.push([0,0,1]),coords.push([0,0]),coords.push([1,0]),coords.push([1,1]),coords.push([0,1]),indices.push(4*count+0),indices.push(4*count+1),indices.push(4*count+2),indices.push(4*count+0),indices.push(4*count+2),indices.push(4*count+3),count++,positions.push([-x,y,z]),positions.push([-x,y,-z]),positions.push([-x,-y,-z]),positions.push([-x,-y,z]),normals.push([-1,0,0]),normals.push([-1,0,0]),normals.push([-1,0,0]),normals.push([-1,0,0]),coords.push([0,0]),coords.push([1,0]),coords.push([1,1]),coords.push([0,1]),indices.push(4*count+0),indices.push(4*count+1),indices.push(4*count+2),indices.push(4*count+0),indices.push(4*count+2),indices.push(4*count+3),count++,positions.push([x,y,-z]),positions.push([-x,y,-z]),positions.push([-x,y,z]),positions.push([x,y,z]),normals.push([0,1,0]),normals.push([0,1,0]),normals.push([0,1,0]),normals.push([0,1,0]),coords.push([0,0]),coords.push([1,0]),coords.push([1,1]),coords.push([0,1]),indices.push(4*count+0),indices.push(4*count+1),indices.push(4*count+2),indices.push(4*count+0),indices.push(4*count+2),indices.push(4*count+3),count++,positions.push([x,-y,z]),positions.push([-x,-y,z]),positions.push([-x,-y,-z]),positions.push([x,-y,-z]),normals.push([0,-1,0]),normals.push([0,-1,0]),normals.push([0,-1,0]),normals.push([0,-1,0]),coords.push([0,0]),coords.push([1,0]),coords.push([1,1]),coords.push([0,1]),indices.push(4*count+0),indices.push(4*count+1),indices.push(4*count+2),indices.push(4*count+0),indices.push(4*count+2),indices.push(4*count+3),count++;var mesh=new _Mesh2.default(drawType);return mesh.bufferVertex(positions),mesh.bufferTexCoord(coords),mesh.bufferIndex(indices),mesh.bufferNormal(normals),mesh},Geom.skybox=function(size){var drawType=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,positions=[],coords=[],indices=[],normals=[],count=0;positions.push([size,size,-size]),positions.push([-size,size,-size]),positions.push([-size,-size,-size]),positions.push([size,-size,-size]),normals.push([0,0,-1]),normals.push([0,0,-1]),normals.push([0,0,-1]),normals.push([0,0,-1]),coords.push([0,0]),coords.push([1,0]),coords.push([1,1]),coords.push([0,1]),indices.push(4*count+0),indices.push(4*count+1),indices.push(4*count+2),indices.push(4*count+0),indices.push(4*count+2),indices.push(4*count+3),count++,positions.push([size,-size,-size]),positions.push([size,-size,size]),positions.push([size,size,size]),positions.push([size,size,-size]),normals.push([1,0,0]),normals.push([1,0,0]),normals.push([1,0,0]),normals.push([1,0,0]),coords.push([0,0]),coords.push([1,0]),coords.push([1,1]),coords.push([0,1]),indices.push(4*count+0),indices.push(4*count+1),indices.push(4*count+2),indices.push(4*count+0),indices.push(4*count+2),indices.push(4*count+3),count++,positions.push([-size,size,size]),positions.push([size,size,size]),positions.push([size,-size,size]),positions.push([-size,-size,size]),normals.push([0,0,1]),normals.push([0,0,1]),normals.push([0,0,1]),normals.push([0,0,1]),coords.push([0,0]),coords.push([1,0]),coords.push([1,1]),coords.push([0,1]),indices.push(4*count+0),indices.push(4*count+1),indices.push(4*count+2),indices.push(4*count+0),indices.push(4*count+2),indices.push(4*count+3),count++,positions.push([-size,-size,size]),positions.push([-size,-size,-size]),positions.push([-size,size,-size]),positions.push([-size,size,size]),normals.push([-1,0,0]),normals.push([-1,0,0]),normals.push([-1,0,0]),normals.push([-1,0,0]),coords.push([0,0]),coords.push([1,0]),coords.push([1,1]),coords.push([0,1]),indices.push(4*count+0),indices.push(4*count+1),indices.push(4*count+2),indices.push(4*count+0),indices.push(4*count+2),indices.push(4*count+3),count++,positions.push([size,size,size]),positions.push([-size,size,size]),positions.push([-size,size,-size]),positions.push([size,size,-size]),normals.push([0,1,0]),normals.push([0,1,0]),normals.push([0,1,0]),normals.push([0,1,0]),coords.push([0,0]),coords.push([1,0]),coords.push([1,1]),coords.push([0,1]),indices.push(4*count+0),indices.push(4*count+1),indices.push(4*count+2),indices.push(4*count+0),indices.push(4*count+2),indices.push(4*count+3),count++,positions.push([size,-size,-size]),positions.push([-size,-size,-size]),positions.push([-size,-size,size]),positions.push([size,-size,size]),normals.push([0,-1,0]),normals.push([0,-1,0]),normals.push([0,-1,0]),normals.push([0,-1,0]),coords.push([0,0]),coords.push([1,0]),coords.push([1,1]),coords.push([0,1]),indices.push(4*count+0),indices.push(4*count+1),indices.push(4*count+2),indices.push(4*count+0),indices.push(4*count+2),indices.push(4*count+3);var mesh=new _Mesh2.default(drawType);return mesh.bufferVertex(positions),mesh.bufferTexCoord(coords),mesh.bufferIndex(indices),mesh.bufferNormal(normals),mesh},Geom.bigTriangle=function(){if(!meshTri){var indices=[2,1,0],positions=[[-1,-1],[-1,4],[4,-1]];meshTri=new _Mesh2.default,meshTri.bufferData(positions,"aPosition",2),meshTri.bufferIndex(indices)}return meshTri},exports.default=Geom},function(module,exports,__webpack_require__){"use strict";module.exports={0:"NONE",1:"ONE",2:"LINE_LOOP",3:"LINE_STRIP",4:"TRIANGLES",5:"TRIANGLE_STRIP",6:"TRIANGLE_FAN",256:"DEPTH_BUFFER_BIT",512:"NEVER",513:"LESS",514:"EQUAL",515:"LEQUAL",516:"GREATER",517:"NOTEQUAL",518:"GEQUAL",519:"ALWAYS",768:"SRC_COLOR",769:"ONE_MINUS_SRC_COLOR",770:"SRC_ALPHA",771:"ONE_MINUS_SRC_ALPHA",772:"DST_ALPHA",773:"ONE_MINUS_DST_ALPHA",774:"DST_COLOR",775:"ONE_MINUS_DST_COLOR",776:"SRC_ALPHA_SATURATE",1024:"STENCIL_BUFFER_BIT",1028:"FRONT",1029:"BACK",1032:"FRONT_AND_BACK",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",2304:"CW",2305:"CCW",2849:"LINE_WIDTH",2884:"CULL_FACE",2885:"CULL_FACE_MODE",2886:"FRONT_FACE",2928:"DEPTH_RANGE",2929:"DEPTH_TEST",2930:"DEPTH_WRITEMASK",2931:"DEPTH_CLEAR_VALUE",2932:"DEPTH_FUNC",2960:"STENCIL_TEST",2961:"STENCIL_CLEAR_VALUE",2962:"STENCIL_FUNC",2963:"STENCIL_VALUE_MASK",2964:"STENCIL_FAIL",2965:"STENCIL_PASS_DEPTH_FAIL",2966:"STENCIL_PASS_DEPTH_PASS",2967:"STENCIL_REF",2968:"STENCIL_WRITEMASK",2978:"VIEWPORT",3024:"DITHER",3042:"BLEND",3088:"SCISSOR_BOX",3089:"SCISSOR_TEST",3106:"COLOR_CLEAR_VALUE",3107:"COLOR_WRITEMASK",3317:"UNPACK_ALIGNMENT",3333:"PACK_ALIGNMENT",3379:"MAX_TEXTURE_SIZE",3386:"MAX_VIEWPORT_DIMS",3408:"SUBPIXEL_BITS",3410:"RED_BITS",3411:"GREEN_BITS",3412:"BLUE_BITS",3413:"ALPHA_BITS",3414:"DEPTH_BITS",3415:"STENCIL_BITS",3553:"TEXTURE_2D",4352:"DONT_CARE",4353:"FASTEST",4354:"NICEST",5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5124:"INT",5125:"UNSIGNED_INT",5126:"FLOAT",5386:"INVERT",5890:"TEXTURE",6401:"STENCIL_INDEX",6402:"DEPTH_COMPONENT",6403:"RED",6406:"ALPHA",6407:"RGB",6408:"RGBA",6409:"LUMINANCE",6410:"LUMINANCE_ALPHA",7680:"KEEP",7681:"REPLACE",7682:"INCR",7683:"DECR",7936:"VENDOR",7937:"RENDERER",7938:"VERSION",9728:"NEAREST",9729:"LINEAR",9984:"NEAREST_MIPMAP_NEAREST",9985:"LINEAR_MIPMAP_NEAREST",9986:"NEAREST_MIPMAP_LINEAR",9987:"LINEAR_MIPMAP_LINEAR",10240:"TEXTURE_MAG_FILTER",10241:"TEXTURE_MIN_FILTER",10242:"TEXTURE_WRAP_S",10243:"TEXTURE_WRAP_T",10497:"REPEAT",10752:"POLYGON_OFFSET_UNITS",16384:"COLOR_BUFFER_BIT",32769:"CONSTANT_COLOR",32770:"ONE_MINUS_CONSTANT_COLOR",32771:"CONSTANT_ALPHA",32772:"ONE_MINUS_CONSTANT_ALPHA",32773:"BLEND_COLOR",32774:"FUNC_ADD",32777:"BLEND_EQUATION_RGB",32778:"FUNC_SUBTRACT",32779:"FUNC_REVERSE_SUBTRACT",32819:"UNSIGNED_SHORT_4_4_4_4",32820:"UNSIGNED_SHORT_5_5_5_1",32823:"POLYGON_OFFSET_FILL",32824:"POLYGON_OFFSET_FACTOR",32854:"RGBA4",32855:"RGB5_A1",32873:"TEXTURE_BINDING_2D",32926:"SAMPLE_ALPHA_TO_COVERAGE",32928:"SAMPLE_COVERAGE",32936:"SAMPLE_BUFFERS",32937:"SAMPLES",32938:"SAMPLE_COVERAGE_VALUE",32939:"SAMPLE_COVERAGE_INVERT",32968:"BLEND_DST_RGB",32969:"BLEND_SRC_RGB",32970:"BLEND_DST_ALPHA",32971:"BLEND_SRC_ALPHA",33071:"CLAMP_TO_EDGE",33170:"GENERATE_MIPMAP_HINT",33189:"DEPTH_COMPONENT16",33306:"DEPTH_STENCIL_ATTACHMENT",33321:"R8",33635:"UNSIGNED_SHORT_5_6_5",33648:"MIRRORED_REPEAT",33901:"ALIASED_POINT_SIZE_RANGE",33902:"ALIASED_LINE_WIDTH_RANGE",33984:"TEXTURE0",33985:"TEXTURE1",33986:"TEXTURE2",33987:"TEXTURE3",33988:"TEXTURE4",33989:"TEXTURE5",33990:"TEXTURE6",33991:"TEXTURE7",33992:"TEXTURE8",33993:"TEXTURE9",33994:"TEXTURE10",33995:"TEXTURE11",33996:"TEXTURE12",33997:"TEXTURE13",33998:"TEXTURE14",33999:"TEXTURE15",34e3:"TEXTURE16",34001:"TEXTURE17",34002:"TEXTURE18",34003:"TEXTURE19",34004:"TEXTURE20",34005:"TEXTURE21",34006:"TEXTURE22",34007:"TEXTURE23",34008:"TEXTURE24",34009:"TEXTURE25",34010:"TEXTURE26",34011:"TEXTURE27",34012:"TEXTURE28",34013:"TEXTURE29",34014:"TEXTURE30",34015:"TEXTURE31",34016:"ACTIVE_TEXTURE",34024:"MAX_RENDERBUFFER_SIZE",34041:"DEPTH_STENCIL",34055:"INCR_WRAP",34056:"DECR_WRAP",34067:"TEXTURE_CUBE_MAP",34068:"TEXTURE_BINDING_CUBE_MAP",34069:"TEXTURE_CUBE_MAP_POSITIVE_X",34070:"TEXTURE_CUBE_MAP_NEGATIVE_X",34071:"TEXTURE_CUBE_MAP_POSITIVE_Y",34072:"TEXTURE_CUBE_MAP_NEGATIVE_Y",34073:"TEXTURE_CUBE_MAP_POSITIVE_Z",34074:"TEXTURE_CUBE_MAP_NEGATIVE_Z",34076:"MAX_CUBE_MAP_TEXTURE_SIZE",34338:"VERTEX_ATTRIB_ARRAY_ENABLED",34339:"VERTEX_ATTRIB_ARRAY_SIZE",34340:"VERTEX_ATTRIB_ARRAY_STRIDE",34341:"VERTEX_ATTRIB_ARRAY_TYPE",34342:"CURRENT_VERTEX_ATTRIB",34373:"VERTEX_ATTRIB_ARRAY_POINTER",34466:"NUM_COMPRESSED_TEXTURE_FORMATS",34467:"COMPRESSED_TEXTURE_FORMATS",34660:"BUFFER_SIZE",34661:"BUFFER_USAGE",34816:"STENCIL_BACK_FUNC",34817:"STENCIL_BACK_FAIL",34818:"STENCIL_BACK_PASS_DEPTH_FAIL",34819:"STENCIL_BACK_PASS_DEPTH_PASS",34877:"BLEND_EQUATION_ALPHA",34921:"MAX_VERTEX_ATTRIBS",34922:"VERTEX_ATTRIB_ARRAY_NORMALIZED",34930:"MAX_TEXTURE_IMAGE_UNITS",34962:"ARRAY_BUFFER",34963:"ELEMENT_ARRAY_BUFFER",34964:"ARRAY_BUFFER_BINDING",34965:"ELEMENT_ARRAY_BUFFER_BINDING",34975:"VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",35040:"STREAM_DRAW",35044:"STATIC_DRAW",35048:"DYNAMIC_DRAW",35632:"FRAGMENT_SHADER",35633:"VERTEX_SHADER",35660:"MAX_VERTEX_TEXTURE_IMAGE_UNITS",35661:"MAX_COMBINED_TEXTURE_IMAGE_UNITS",35663:"SHADER_TYPE",35664:"FLOAT_VEC2",35665:"FLOAT_VEC3",35666:"FLOAT_VEC4",35667:"INT_VEC2",35668:"INT_VEC3",35669:"INT_VEC4",35670:"BOOL",35671:"BOOL_VEC2",35672:"BOOL_VEC3",35673:"BOOL_VEC4",35674:"FLOAT_MAT2",35675:"FLOAT_MAT3",35676:"FLOAT_MAT4",35678:"SAMPLER_2D",35680:"SAMPLER_CUBE",35712:"DELETE_STATUS",35713:"COMPILE_STATUS",35714:"LINK_STATUS",35715:"VALIDATE_STATUS",35716:"INFO_LOG_LENGTH",35717:"ATTACHED_SHADERS",35718:"ACTIVE_UNIFORMS",35719:"ACTIVE_UNIFORM_MAX_LENGTH",35720:"SHADER_SOURCE_LENGTH",35721:"ACTIVE_ATTRIBUTES",35722:"ACTIVE_ATTRIBUTE_MAX_LENGTH",35724:"SHADING_LANGUAGE_VERSION",35725:"CURRENT_PROGRAM",36003:"STENCIL_BACK_REF",36004:"STENCIL_BACK_VALUE_MASK",36005:"STENCIL_BACK_WRITEMASK",36006:"FRAMEBUFFER_BINDING",36007:"RENDERBUFFER_BINDING",36048:"FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",36049:"FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",36050:"FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",36051:"FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",36053:"FRAMEBUFFER_COMPLETE",36054:"FRAMEBUFFER_INCOMPLETE_ATTACHMENT",36055:"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",36057:"FRAMEBUFFER_INCOMPLETE_DIMENSIONS",36061:"FRAMEBUFFER_UNSUPPORTED",36064:"COLOR_ATTACHMENT0",36096:"DEPTH_ATTACHMENT",36128:"STENCIL_ATTACHMENT",36160:"FRAMEBUFFER",36161:"RENDERBUFFER",36162:"RENDERBUFFER_WIDTH",36163:"RENDERBUFFER_HEIGHT",36164:"RENDERBUFFER_INTERNAL_FORMAT",36168:"STENCIL_INDEX8",36176:"RENDERBUFFER_RED_SIZE",36177:"RENDERBUFFER_GREEN_SIZE",36178:"RENDERBUFFER_BLUE_SIZE",36179:"RENDERBUFFER_ALPHA_SIZE",36180:"RENDERBUFFER_DEPTH_SIZE",36181:"RENDERBUFFER_STENCIL_SIZE",36194:"RGB565",36336:"LOW_FLOAT",36337:"MEDIUM_FLOAT",36338:"HIGH_FLOAT",36339:"LOW_INT",36340:"MEDIUM_INT",36341:"HIGH_INT",36346:"SHADER_COMPILER",36347:"MAX_VERTEX_UNIFORM_VECTORS",36348:"MAX_VARYING_VECTORS",36349:"MAX_FRAGMENT_UNIFORM_VECTORS",37440:"UNPACK_FLIP_Y_WEBGL",37441:"UNPACK_PREMULTIPLY_ALPHA_WEBGL",37442:"CONTEXT_LOST_WEBGL",37443:"UNPACK_COLORSPACE_CONVERSION_WEBGL",37444:"BROWSER_DEFAULT_WEBGL"}},function(module,exports){module.exports="// basic.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}"},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_scheduling=__webpack_require__(4),_scheduling2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_scheduling),EaseNumber=function(){function EaseNumber(mValue){var _this=this,mEasing=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;_classCallCheck(this,EaseNumber),this.easing=mEasing,this._value=mValue,this._targetValue=mValue,this._efIndex=_scheduling2.default.addEF(function(){return _this._update()})}return _createClass(EaseNumber,[{key:"_update",value:function(){this._checkLimit(),this._value+=(this._targetValue-this._value)*this.easing,Math.abs(this._targetValue-this._value)<1e-4&&(this._value=this._targetValue)}},{key:"setTo",value:function(mValue){this._targetValue=this._value=mValue}},{key:"add",value:function(mAdd){this._targetValue+=mAdd}},{key:"limit",value:function(mMin,mMax){if(mMin>mMax)return void this.limit(mMax,mMin);this._min=mMin,this._max=mMax,this._checkLimit()}},{key:"_checkLimit",value:function(){void 0!==this._min&&this._targetValue<this._min&&(this._targetValue=this._min),void 0!==this._max&&this._targetValue>this._max&&(this._targetValue=this._max)}},{key:"destroy",value:function(){_scheduling2.default.removeEF(this._efIndex)}},{key:"value",set:function(mValue){this._targetValue=mValue},get:function(){return this._value}},{key:"targetValue",get:function(){return this._targetValue}}]),EaseNumber}();exports.default=EaseNumber},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_glMatrix=__webpack_require__(2),a=_glMatrix.vec3.create(),b=_glMatrix.vec3.create(),c=_glMatrix.vec3.create(),target=_glMatrix.vec3.create(),edge1=_glMatrix.vec3.create(),edge2=_glMatrix.vec3.create(),normal=_glMatrix.vec3.create(),diff=_glMatrix.vec3.create(),Ray=function(){function Ray(mOrigin,mDirection){_classCallCheck(this,Ray),this.origin=_glMatrix.vec3.clone(mOrigin),this.direction=_glMatrix.vec3.clone(mDirection)}return _createClass(Ray,[{key:"at",value:function(t){return _glMatrix.vec3.copy(target,this.direction),_glMatrix.vec3.scale(target,target,t),_glMatrix.vec3.add(target,target,this.origin),target}},{key:"lookAt",value:function(mTarget){_glMatrix.vec3.sub(this.direction,mTarget,this.origin),_glMatrix.vec3.normalize(this.origin,this.origin)}},{key:"closestPointToPoint",value:function(mPoint){var result=_glMatrix.vec3.create();_glMatrix.vec3.sub(mPoint,this.origin);var directionDistance=_glMatrix.vec3.dot(result,this.direction);return directionDistance<0?_glMatrix.vec3.clone(this.origin):(_glMatrix.vec3.copy(result,this.direction),_glMatrix.vec3.scale(result,result,directionDistance),_glMatrix.vec3.add(result,result,this.origin),result)}},{key:"distanceToPoint",value:function(mPoint){return Math.sqrt(this.distanceSqToPoint(mPoint))}},{key:"distanceSqToPoint",value:function(mPoint){var v1=_glMatrix.vec3.create();_glMatrix.vec3.sub(v1,mPoint,this.origin);var directionDistance=_glMatrix.vec3.dot(v1,this.direction);return directionDistance<0?_glMatrix.vec3.squaredDistance(this.origin,mPoint):(_glMatrix.vec3.copy(v1,this.direction),_glMatrix.vec3.scale(v1,v1,directionDistance),_glMatrix.vec3.add(v1,v1,this.origin),_glMatrix.vec3.squaredDistance(v1,mPoint))}},{key:"intersectsSphere",value:function(mCenter,mRadius){return this.distanceToPoint(mCenter)<=mRadius}},{key:"intersectSphere",value:function(mCenter,mRadius){var v1=_glMatrix.vec3.create();_glMatrix.vec3.sub(v1,mCenter,this.origin);var tca=_glMatrix.vec3.dot(v1,this.direction),d2=_glMatrix.vec3.dot(v1,v1)-tca*tca,radius2=mRadius*mRadius;if(d2>radius2)return null;var thc=Math.sqrt(radius2-d2),t0=tca-thc,t1=tca+thc;return t0<0&&t1<0?null:t0<0?this.at(t1):this.at(t0)}},{key:"distanceToPlane",value:function(mPlaneCenter,mNormal){_glMatrix.vec3.dot(mNormal,this.direction)}},{key:"intersectTriangle",value:function(mPA,mPB,mPC){var backfaceCulling=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];_glMatrix.vec3.copy(a,mPA),_glMatrix.vec3.copy(b,mPB),_glMatrix.vec3.copy(c,mPC),_glMatrix.vec3.sub(edge1,b,a),_glMatrix.vec3.sub(edge2,c,a),_glMatrix.vec3.cross(normal,edge1,edge2);var DdN=_glMatrix.vec3.dot(this.direction,normal),sign=void 0;if(DdN>0){if(backfaceCulling)return null;sign=1}else{if(!(DdN<0))return null;sign=-1,DdN=-DdN}_glMatrix.vec3.sub(diff,this.origin,a),_glMatrix.vec3.cross(edge2,diff,edge2);var DdQxE2=sign*_glMatrix.vec3.dot(this.direction,edge2);if(DdQxE2<0)return null;_glMatrix.vec3.cross(edge1,edge1,diff);var DdE1xQ=sign*_glMatrix.vec3.dot(this.direction,edge1);if(DdE1xQ<0)return null;if(DdQxE2+DdE1xQ>DdN)return null;var Qdn=-sign*_glMatrix.vec3.dot(diff,normal);return Qdn<0?null:this.at(Qdn/DdN)}}]),Ray}();exports.default=Ray},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_glMatrix=__webpack_require__(2),Camera=function(){function Camera(){_classCallCheck(this,Camera),this._matrix=_glMatrix.mat4.create(),this._quat=_glMatrix.quat.create(),this._orientation=_glMatrix.mat4.create(),this._projection=_glMatrix.mat4.create(),this.position=vec3.create()}return _createClass(Camera,[{key:"lookAt",value:function(aEye,aCenter){var aUp=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,1,0];this._eye=vec3.clone(aEye),this._center=vec3.clone(aCenter),vec3.copy(this.position,aEye),_glMatrix.mat4.identity(this._matrix),_glMatrix.mat4.lookAt(this._matrix,aEye,aCenter,aUp)}},{key:"setFromOrientation",value:function(x,y,z,w){_glMatrix.quat.set(this._quat,x,y,z,w),_glMatrix.mat4.fromQuat(this._orientation,this._quat),_glMatrix.mat4.translate(this._matrix,this._orientation,this.positionOffset)}},{key:"setProjection",value:function(mProj){this._projection=_glMatrix.mat4.clone(mProj)}},{key:"setView",value:function(mView){this._matrix=_glMatrix.mat4.clone(mView)}},{key:"setFromViewProj",value:function(mView,mProj){this.setView(mView),this.setProjection(mProj)}},{key:"matrix",get:function(){return this._matrix}},{key:"viewMatrix",get:function(){return this._matrix}},{key:"projection",get:function(){return this._projection}},{key:"projectionMatrix",get:function(){return this._projection}},{key:"eye",get:function(){return this._eye}},{key:"center",get:function(){return this._center}}]),Camera}();exports.default=Camera},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Camera2=__webpack_require__(12),_Camera3=_interopRequireDefault(_Camera2),_Ray=__webpack_require__(11),_Ray2=_interopRequireDefault(_Ray),_glMatrix=__webpack_require__(2),mInverseViewProj=_glMatrix.mat4.create(),cameraDir=_glMatrix.vec3.create(),CameraPerspective=function(_Camera){function CameraPerspective(mFov,mAspectRatio,mNear,mFar){_classCallCheck(this,CameraPerspective);var _this=_possibleConstructorReturn(this,(CameraPerspective.__proto__||Object.getPrototypeOf(CameraPerspective)).call(this));return mFov&&_this.setPerspective(mFov,mAspectRatio,mNear,mFar),_this}return _inherits(CameraPerspective,_Camera),_createClass(CameraPerspective,[{key:"setPerspective",value:function(mFov,mAspectRatio,mNear,mFar){this._fov=mFov,this._near=mNear,this._far=mFar,this._aspectRatio=mAspectRatio,_glMatrix.mat4.perspective(this._projection,mFov,mAspectRatio,mNear,mFar)}},{key:"setAspectRatio",value:function(mAspectRatio){this._aspectRatio=mAspectRatio,_glMatrix.mat4.perspective(this.projection,this._fov,mAspectRatio,this._near,this._far)}},{key:"generateRay",value:function(mScreenPosition,mRay){var proj=this.projectionMatrix,view=this.viewMatrix;return _glMatrix.mat4.multiply(mInverseViewProj,proj,view),_glMatrix.mat4.invert(mInverseViewProj,mInverseViewProj),_glMatrix.vec3.transformMat4(cameraDir,mScreenPosition,mInverseViewProj),_glMatrix.vec3.sub(cameraDir,cameraDir,this.position),_glMatrix.vec3.normalize(cameraDir,cameraDir),mRay?(mRay.origin=this.position,mRay.direction=cameraDir):mRay=new _Ray2.default(this.position,cameraDir),mRay}}]),CameraPerspective}(_Camera3.default);exports.default=CameraPerspective},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),BinaryLoader=function(){function BinaryLoader(){var _this=this,isArrayBuffer=arguments.length>0&&void 0!==arguments[0]&&arguments[0];_classCallCheck(this,BinaryLoader),this._req=new XMLHttpRequest,this._req.addEventListener("load",function(e){return _this._onLoaded(e)}),this._req.addEventListener("progress",function(e){return _this._onProgress(e)}),isArrayBuffer&&(this._req.responseType="arraybuffer")}return _createClass(BinaryLoader,[{key:"load",value:function(url,callback){console.log("Loading : ",url),this._callback=callback,this._req.open("GET",url),this._req.send()}},{key:"_onLoaded",value:function(){this._callback(this._req.response)}},{key:"_onProgress",value:function(){}}]),BinaryLoader}();exports.default=BinaryLoader},function(module,exports){module.exports="// copy.frag\n\n#define SHADER_NAME COPY_FRAGMENT\n\nprecision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}"},function(module,exports){module.exports="// simpleColor.frag\n\n#define SHADER_NAME SIMPLE_COLOR\n\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}"},function(module,exports,__webpack_require__){"use strict";function create(){var out=new glMatrix.ARRAY_TYPE(9);return glMatrix.ARRAY_TYPE!=Float32Array&&(out[1]=0,out[2]=0,out[3]=0,out[5]=0,out[6]=0,out[7]=0),out[0]=1,out[4]=1,out[8]=1,out}function fromMat4(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[4],out[4]=a[5],out[5]=a[6],out[6]=a[8],out[7]=a[9],out[8]=a[10],out}function clone(a){var out=new glMatrix.ARRAY_TYPE(9);return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[4]=a[4],out[5]=a[5],out[6]=a[6],out[7]=a[7],out[8]=a[8],out}function copy(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[4]=a[4],out[5]=a[5],out[6]=a[6],out[7]=a[7],out[8]=a[8],out}function fromValues(m00,m01,m02,m10,m11,m12,m20,m21,m22){var out=new glMatrix.ARRAY_TYPE(9);return out[0]=m00,out[1]=m01,out[2]=m02,out[3]=m10,out[4]=m11,out[5]=m12,out[6]=m20,out[7]=m21,out[8]=m22,out}function set(out,m00,m01,m02,m10,m11,m12,m20,m21,m22){return out[0]=m00,out[1]=m01,out[2]=m02,out[3]=m10,out[4]=m11,out[5]=m12,out[6]=m20,out[7]=m21,out[8]=m22,out}function identity(out){return out[0]=1,out[1]=0,out[2]=0,out[3]=0,out[4]=1,out[5]=0,out[6]=0,out[7]=0,out[8]=1,out}function transpose(out,a){if(out===a){var a01=a[1],a02=a[2],a12=a[5];out[1]=a[3],out[2]=a[6],out[3]=a01,out[5]=a[7],out[6]=a02,out[7]=a12}else out[0]=a[0],out[1]=a[3],out[2]=a[6],out[3]=a[1],out[4]=a[4],out[5]=a[7],out[6]=a[2],out[7]=a[5],out[8]=a[8];return out}function invert(out,a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],b01=a22*a11-a12*a21,b11=-a22*a10+a12*a20,b21=a21*a10-a11*a20,det=a00*b01+a01*b11+a02*b21;return det?(det=1/det,out[0]=b01*det,out[1]=(-a22*a01+a02*a21)*det,out[2]=(a12*a01-a02*a11)*det,out[3]=b11*det,out[4]=(a22*a00-a02*a20)*det,out[5]=(-a12*a00+a02*a10)*det,out[6]=b21*det,out[7]=(-a21*a00+a01*a20)*det,out[8]=(a11*a00-a01*a10)*det,out):null}function adjoint(out,a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8];return out[0]=a11*a22-a12*a21,out[1]=a02*a21-a01*a22,out[2]=a01*a12-a02*a11,out[3]=a12*a20-a10*a22,out[4]=a00*a22-a02*a20,out[5]=a02*a10-a00*a12,out[6]=a10*a21-a11*a20,out[7]=a01*a20-a00*a21,out[8]=a00*a11-a01*a10,out}function determinant(a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8];return a00*(a22*a11-a12*a21)+a01*(-a22*a10+a12*a20)+a02*(a21*a10-a11*a20)}function multiply(out,a,b){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],b00=b[0],b01=b[1],b02=b[2],b10=b[3],b11=b[4],b12=b[5],b20=b[6],b21=b[7],b22=b[8];return out[0]=b00*a00+b01*a10+b02*a20,out[1]=b00*a01+b01*a11+b02*a21,out[2]=b00*a02+b01*a12+b02*a22,out[3]=b10*a00+b11*a10+b12*a20,out[4]=b10*a01+b11*a11+b12*a21,out[5]=b10*a02+b11*a12+b12*a22,out[6]=b20*a00+b21*a10+b22*a20,out[7]=b20*a01+b21*a11+b22*a21,out[8]=b20*a02+b21*a12+b22*a22,out}function translate(out,a,v){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],x=v[0],y=v[1];return out[0]=a00,out[1]=a01,out[2]=a02,out[3]=a10,out[4]=a11,out[5]=a12,out[6]=x*a00+y*a10+a20,out[7]=x*a01+y*a11+a21,out[8]=x*a02+y*a12+a22,out}function rotate(out,a,rad){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],s=Math.sin(rad),c=Math.cos(rad);return out[0]=c*a00+s*a10,out[1]=c*a01+s*a11,out[2]=c*a02+s*a12,out[3]=c*a10-s*a00,out[4]=c*a11-s*a01,out[5]=c*a12-s*a02,out[6]=a20,out[7]=a21,out[8]=a22,out}function scale(out,a,v){var x=v[0],y=v[1];return out[0]=x*a[0],out[1]=x*a[1],out[2]=x*a[2],out[3]=y*a[3],out[4]=y*a[4],out[5]=y*a[5],out[6]=a[6],out[7]=a[7],out[8]=a[8],out}function fromTranslation(out,v){return out[0]=1,out[1]=0,out[2]=0,out[3]=0,out[4]=1,out[5]=0,out[6]=v[0],out[7]=v[1],out[8]=1,out}function fromRotation(out,rad){var s=Math.sin(rad),c=Math.cos(rad);return out[0]=c,out[1]=s,out[2]=0,out[3]=-s,out[4]=c,out[5]=0,out[6]=0,out[7]=0,out[8]=1,out}function fromScaling(out,v){return out[0]=v[0],out[1]=0,out[2]=0,out[3]=0,out[4]=v[1],out[5]=0,out[6]=0,out[7]=0,out[8]=1,out}function fromMat2d(out,a){return out[0]=a[0],out[1]=a[1],out[2]=0,out[3]=a[2],out[4]=a[3],out[5]=0,out[6]=a[4],out[7]=a[5],out[8]=1,out}function fromQuat(out,q){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,yx=y*x2,yy=y*y2,zx=z*x2,zy=z*y2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2;return out[0]=1-yy-zz,out[3]=yx-wz,out[6]=zx+wy,out[1]=yx+wz,out[4]=1-xx-zz,out[7]=zy-wx,out[2]=zx-wy,out[5]=zy+wx,out[8]=1-xx-yy,out}function normalFromMat4(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32,det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;return det?(det=1/det,out[0]=(a11*b11-a12*b10+a13*b09)*det,out[1]=(a12*b08-a10*b11-a13*b07)*det,out[2]=(a10*b10-a11*b08+a13*b06)*det,out[3]=(a02*b10-a01*b11-a03*b09)*det,out[4]=(a00*b11-a02*b08+a03*b07)*det,out[5]=(a01*b08-a00*b10-a03*b06)*det,out[6]=(a31*b05-a32*b04+a33*b03)*det,out[7]=(a32*b02-a30*b05-a33*b01)*det,out[8]=(a30*b04-a31*b02+a33*b00)*det,out):null}function projection(out,width,height){return out[0]=2/width,out[1]=0,out[2]=0,out[3]=0,out[4]=-2/height,out[5]=0,out[6]=-1,out[7]=1,out[8]=1,out}function str(a){return"mat3("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+")"}function frob(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2))}function add(out,a,b){return out[0]=a[0]+b[0],out[1]=a[1]+b[1],out[2]=a[2]+b[2],out[3]=a[3]+b[3],out[4]=a[4]+b[4],out[5]=a[5]+b[5],out[6]=a[6]+b[6],out[7]=a[7]+b[7],out[8]=a[8]+b[8],out}function subtract(out,a,b){return out[0]=a[0]-b[0],out[1]=a[1]-b[1],out[2]=a[2]-b[2],out[3]=a[3]-b[3],out[4]=a[4]-b[4],out[5]=a[5]-b[5],out[6]=a[6]-b[6],out[7]=a[7]-b[7],out[8]=a[8]-b[8],out}function multiplyScalar(out,a,b){return out[0]=a[0]*b,out[1]=a[1]*b,out[2]=a[2]*b,out[3]=a[3]*b,out[4]=a[4]*b,out[5]=a[5]*b,out[6]=a[6]*b,out[7]=a[7]*b,out[8]=a[8]*b,out}function multiplyScalarAndAdd(out,a,b,scale){return out[0]=a[0]+b[0]*scale,out[1]=a[1]+b[1]*scale,out[2]=a[2]+b[2]*scale,out[3]=a[3]+b[3]*scale,out[4]=a[4]+b[4]*scale,out[5]=a[5]+b[5]*scale,out[6]=a[6]+b[6]*scale,out[7]=a[7]+b[7]*scale,out[8]=a[8]+b[8]*scale,out}function exactEquals(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]}function equals(a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],a6=a[6],a7=a[7],a8=a[8],b0=b[0],b1=b[1],b2=b[2],b3=b[3],b4=b[4],b5=b[5],b6=b[6],b7=b[7],b8=b[8];return Math.abs(a0-b0)<=glMatrix.EPSILON*Math.max(1,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix.EPSILON*Math.max(1,Math.abs(a1),Math.abs(b1))&&Math.abs(a2-b2)<=glMatrix.EPSILON*Math.max(1,Math.abs(a2),Math.abs(b2))&&Math.abs(a3-b3)<=glMatrix.EPSILON*Math.max(1,Math.abs(a3),Math.abs(b3))&&Math.abs(a4-b4)<=glMatrix.EPSILON*Math.max(1,Math.abs(a4),Math.abs(b4))&&Math.abs(a5-b5)<=glMatrix.EPSILON*Math.max(1,Math.abs(a5),Math.abs(b5))&&Math.abs(a6-b6)<=glMatrix.EPSILON*Math.max(1,Math.abs(a6),Math.abs(b6))&&Math.abs(a7-b7)<=glMatrix.EPSILON*Math.max(1,Math.abs(a7),Math.abs(b7))&&Math.abs(a8-b8)<=glMatrix.EPSILON*Math.max(1,Math.abs(a8),Math.abs(b8))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sub=exports.mul=void 0,exports.create=create,exports.fromMat4=fromMat4,exports.clone=clone,exports.copy=copy,exports.fromValues=fromValues,exports.set=set,exports.identity=identity,exports.transpose=transpose,exports.invert=invert,exports.adjoint=adjoint,exports.determinant=determinant,exports.multiply=multiply,exports.translate=translate,exports.rotate=rotate,exports.scale=scale,exports.fromTranslation=fromTranslation,exports.fromRotation=fromRotation,exports.fromScaling=fromScaling,exports.fromMat2d=fromMat2d,exports.fromQuat=fromQuat,exports.normalFromMat4=normalFromMat4,exports.projection=projection,exports.str=str,exports.frob=frob,exports.add=add,exports.subtract=subtract,exports.multiplyScalar=multiplyScalar,exports.multiplyScalarAndAdd=multiplyScalarAndAdd,exports.exactEquals=exactEquals,exports.equals=equals;var _common=__webpack_require__(3),glMatrix=function(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}(_common);exports.mul=multiply,exports.sub=subtract},function(module,exports,__webpack_require__){"use strict";function create(){var out=new glMatrix.ARRAY_TYPE(16);return glMatrix.ARRAY_TYPE!=Float32Array&&(out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[6]=0,out[7]=0,out[8]=0,out[9]=0,out[11]=0,out[12]=0,out[13]=0,out[14]=0),out[0]=1,out[5]=1,out[10]=1,out[15]=1,out}function clone(a){var out=new glMatrix.ARRAY_TYPE(16);return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[4]=a[4],out[5]=a[5],out[6]=a[6],out[7]=a[7],out[8]=a[8],out[9]=a[9],out[10]=a[10],out[11]=a[11],out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15],out}function copy(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[4]=a[4],out[5]=a[5],out[6]=a[6],out[7]=a[7],out[8]=a[8],out[9]=a[9],out[10]=a[10],out[11]=a[11],out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15],out}function fromValues(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){var out=new glMatrix.ARRAY_TYPE(16);return out[0]=m00,out[1]=m01,out[2]=m02,out[3]=m03,out[4]=m10,out[5]=m11,out[6]=m12,out[7]=m13,out[8]=m20,out[9]=m21,out[10]=m22,out[11]=m23,out[12]=m30,out[13]=m31,out[14]=m32,out[15]=m33,out}function set(out,m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){return out[0]=m00,out[1]=m01,out[2]=m02,out[3]=m03,out[4]=m10,out[5]=m11,out[6]=m12,out[7]=m13,out[8]=m20,out[9]=m21,out[10]=m22,out[11]=m23,out[12]=m30,out[13]=m31,out[14]=m32,out[15]=m33,out}function identity(out){return out[0]=1,out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[5]=1,out[6]=0,out[7]=0,out[8]=0,out[9]=0,out[10]=1,out[11]=0,out[12]=0,out[13]=0,out[14]=0,out[15]=1,out}function transpose(out,a){if(out===a){var a01=a[1],a02=a[2],a03=a[3],a12=a[6],a13=a[7],a23=a[11];out[1]=a[4],out[2]=a[8],out[3]=a[12],out[4]=a01,out[6]=a[9],out[7]=a[13],out[8]=a02,out[9]=a12,out[11]=a[14],out[12]=a03,out[13]=a13,out[14]=a23}else out[0]=a[0],out[1]=a[4],out[2]=a[8],out[3]=a[12],out[4]=a[1],out[5]=a[5],out[6]=a[9],out[7]=a[13],out[8]=a[2],out[9]=a[6],out[10]=a[10],out[11]=a[14],out[12]=a[3],out[13]=a[7],out[14]=a[11],out[15]=a[15];return out}function invert(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32,det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;return det?(det=1/det,out[0]=(a11*b11-a12*b10+a13*b09)*det,out[1]=(a02*b10-a01*b11-a03*b09)*det,out[2]=(a31*b05-a32*b04+a33*b03)*det,out[3]=(a22*b04-a21*b05-a23*b03)*det,out[4]=(a12*b08-a10*b11-a13*b07)*det,out[5]=(a00*b11-a02*b08+a03*b07)*det,out[6]=(a32*b02-a30*b05-a33*b01)*det,out[7]=(a20*b05-a22*b02+a23*b01)*det,out[8]=(a10*b10-a11*b08+a13*b06)*det,out[9]=(a01*b08-a00*b10-a03*b06)*det,out[10]=(a30*b04-a31*b02+a33*b00)*det,out[11]=(a21*b02-a20*b04-a23*b00)*det,out[12]=(a11*b07-a10*b09-a12*b06)*det,out[13]=(a00*b09-a01*b07+a02*b06)*det,out[14]=(a31*b01-a30*b03-a32*b00)*det,out[15]=(a20*b03-a21*b01+a22*b00)*det,out):null}function adjoint(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15];return out[0]=a11*(a22*a33-a23*a32)-a21*(a12*a33-a13*a32)+a31*(a12*a23-a13*a22),out[1]=-(a01*(a22*a33-a23*a32)-a21*(a02*a33-a03*a32)+a31*(a02*a23-a03*a22)),out[2]=a01*(a12*a33-a13*a32)-a11*(a02*a33-a03*a32)+a31*(a02*a13-a03*a12),out[3]=-(a01*(a12*a23-a13*a22)-a11*(a02*a23-a03*a22)+a21*(a02*a13-a03*a12)),out[4]=-(a10*(a22*a33-a23*a32)-a20*(a12*a33-a13*a32)+a30*(a12*a23-a13*a22)),out[5]=a00*(a22*a33-a23*a32)-a20*(a02*a33-a03*a32)+a30*(a02*a23-a03*a22),out[6]=-(a00*(a12*a33-a13*a32)-a10*(a02*a33-a03*a32)+a30*(a02*a13-a03*a12)),out[7]=a00*(a12*a23-a13*a22)-a10*(a02*a23-a03*a22)+a20*(a02*a13-a03*a12),out[8]=a10*(a21*a33-a23*a31)-a20*(a11*a33-a13*a31)+a30*(a11*a23-a13*a21),out[9]=-(a00*(a21*a33-a23*a31)-a20*(a01*a33-a03*a31)+a30*(a01*a23-a03*a21)),out[10]=a00*(a11*a33-a13*a31)-a10*(a01*a33-a03*a31)+a30*(a01*a13-a03*a11),out[11]=-(a00*(a11*a23-a13*a21)-a10*(a01*a23-a03*a21)+a20*(a01*a13-a03*a11)),out[12]=-(a10*(a21*a32-a22*a31)-a20*(a11*a32-a12*a31)+a30*(a11*a22-a12*a21)),out[13]=a00*(a21*a32-a22*a31)-a20*(a01*a32-a02*a31)+a30*(a01*a22-a02*a21),out[14]=-(a00*(a11*a32-a12*a31)-a10*(a01*a32-a02*a31)+a30*(a01*a12-a02*a11)),out[15]=a00*(a11*a22-a12*a21)-a10*(a01*a22-a02*a21)+a20*(a01*a12-a02*a11),out}function determinant(a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15];return(a00*a11-a01*a10)*(a22*a33-a23*a32)-(a00*a12-a02*a10)*(a21*a33-a23*a31)+(a00*a13-a03*a10)*(a21*a32-a22*a31)+(a01*a12-a02*a11)*(a20*a33-a23*a30)-(a01*a13-a03*a11)*(a20*a32-a22*a30)+(a02*a13-a03*a12)*(a20*a31-a21*a30)}function multiply(out,a,b){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b0=b[0],b1=b[1],b2=b[2],b3=b[3];return out[0]=b0*a00+b1*a10+b2*a20+b3*a30,out[1]=b0*a01+b1*a11+b2*a21+b3*a31,out[2]=b0*a02+b1*a12+b2*a22+b3*a32,out[3]=b0*a03+b1*a13+b2*a23+b3*a33,b0=b[4],b1=b[5],b2=b[6],b3=b[7],out[4]=b0*a00+b1*a10+b2*a20+b3*a30,out[5]=b0*a01+b1*a11+b2*a21+b3*a31,out[6]=b0*a02+b1*a12+b2*a22+b3*a32,out[7]=b0*a03+b1*a13+b2*a23+b3*a33,b0=b[8],b1=b[9],b2=b[10],b3=b[11],out[8]=b0*a00+b1*a10+b2*a20+b3*a30,out[9]=b0*a01+b1*a11+b2*a21+b3*a31,out[10]=b0*a02+b1*a12+b2*a22+b3*a32,out[11]=b0*a03+b1*a13+b2*a23+b3*a33,b0=b[12],b1=b[13],b2=b[14],b3=b[15],out[12]=b0*a00+b1*a10+b2*a20+b3*a30,out[13]=b0*a01+b1*a11+b2*a21+b3*a31,out[14]=b0*a02+b1*a12+b2*a22+b3*a32,out[15]=b0*a03+b1*a13+b2*a23+b3*a33,out}function translate(out,a,v){var x=v[0],y=v[1],z=v[2],a00=void 0,a01=void 0,a02=void 0,a03=void 0,a10=void 0,a11=void 0,a12=void 0,a13=void 0,a20=void 0,a21=void 0,a22=void 0,a23=void 0;return a===out?(out[12]=a[0]*x+a[4]*y+a[8]*z+a[12],out[13]=a[1]*x+a[5]*y+a[9]*z+a[13],out[14]=a[2]*x+a[6]*y+a[10]*z+a[14],out[15]=a[3]*x+a[7]*y+a[11]*z+a[15]):(a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],out[0]=a00,out[1]=a01,out[2]=a02,out[3]=a03,out[4]=a10,out[5]=a11,out[6]=a12,out[7]=a13,out[8]=a20,out[9]=a21,out[10]=a22,out[11]=a23,out[12]=a00*x+a10*y+a20*z+a[12],out[13]=a01*x+a11*y+a21*z+a[13],out[14]=a02*x+a12*y+a22*z+a[14],out[15]=a03*x+a13*y+a23*z+a[15]),out}function scale(out,a,v){var x=v[0],y=v[1],z=v[2];return out[0]=a[0]*x,out[1]=a[1]*x,out[2]=a[2]*x,out[3]=a[3]*x,out[4]=a[4]*y,out[5]=a[5]*y,out[6]=a[6]*y,out[7]=a[7]*y,out[8]=a[8]*z,out[9]=a[9]*z,out[10]=a[10]*z,out[11]=a[11]*z,out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15],out}function rotate(out,a,rad,axis){var x=axis[0],y=axis[1],z=axis[2],len=Math.sqrt(x*x+y*y+z*z),s=void 0,c=void 0,t=void 0,a00=void 0,a01=void 0,a02=void 0,a03=void 0,a10=void 0,a11=void 0,a12=void 0,a13=void 0,a20=void 0,a21=void 0,a22=void 0,a23=void 0,b00=void 0,b01=void 0,b02=void 0,b10=void 0,b11=void 0,b12=void 0,b20=void 0,b21=void 0,b22=void 0;return len<glMatrix.EPSILON?null:(len=1/len,x*=len,y*=len,z*=len,s=Math.sin(rad),c=Math.cos(rad),t=1-c,a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],b00=x*x*t+c,b01=y*x*t+z*s,b02=z*x*t-y*s,b10=x*y*t-z*s,b11=y*y*t+c,b12=z*y*t+x*s,b20=x*z*t+y*s,b21=y*z*t-x*s,b22=z*z*t+c,out[0]=a00*b00+a10*b01+a20*b02,out[1]=a01*b00+a11*b01+a21*b02,out[2]=a02*b00+a12*b01+a22*b02,out[3]=a03*b00+a13*b01+a23*b02,out[4]=a00*b10+a10*b11+a20*b12,out[5]=a01*b10+a11*b11+a21*b12,out[6]=a02*b10+a12*b11+a22*b12,out[7]=a03*b10+a13*b11+a23*b12,out[8]=a00*b20+a10*b21+a20*b22,out[9]=a01*b20+a11*b21+a21*b22,out[10]=a02*b20+a12*b21+a22*b22,out[11]=a03*b20+a13*b21+a23*b22,a!==out&&(out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15]),out)}function rotateX(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11];return a!==out&&(out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15]),out[4]=a10*c+a20*s,out[5]=a11*c+a21*s,out[6]=a12*c+a22*s,out[7]=a13*c+a23*s,out[8]=a20*c-a10*s,out[9]=a21*c-a11*s,out[10]=a22*c-a12*s,out[11]=a23*c-a13*s,out}function rotateY(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a00=a[0],a01=a[1],a02=a[2],a03=a[3],a20=a[8],a21=a[9],a22=a[10],a23=a[11];return a!==out&&(out[4]=a[4],out[5]=a[5],out[6]=a[6],out[7]=a[7],out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15]),out[0]=a00*c-a20*s,out[1]=a01*c-a21*s,out[2]=a02*c-a22*s,out[3]=a03*c-a23*s,out[8]=a00*s+a20*c,out[9]=a01*s+a21*c,out[10]=a02*s+a22*c,out[11]=a03*s+a23*c,out}function rotateZ(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7];return a!==out&&(out[8]=a[8],out[9]=a[9],out[10]=a[10],out[11]=a[11],out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15]),out[0]=a00*c+a10*s,out[1]=a01*c+a11*s,out[2]=a02*c+a12*s,out[3]=a03*c+a13*s,out[4]=a10*c-a00*s,out[5]=a11*c-a01*s,out[6]=a12*c-a02*s,out[7]=a13*c-a03*s,out}function fromTranslation(out,v){return out[0]=1,out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[5]=1,out[6]=0,out[7]=0,out[8]=0,out[9]=0,out[10]=1,out[11]=0,out[12]=v[0],out[13]=v[1],out[14]=v[2],out[15]=1,out}function fromScaling(out,v){return out[0]=v[0],out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[5]=v[1],out[6]=0,out[7]=0,out[8]=0,out[9]=0,out[10]=v[2],out[11]=0,out[12]=0,out[13]=0,out[14]=0,out[15]=1,out}function fromRotation(out,rad,axis){var x=axis[0],y=axis[1],z=axis[2],len=Math.sqrt(x*x+y*y+z*z),s=void 0,c=void 0,t=void 0;return len<glMatrix.EPSILON?null:(len=1/len,x*=len,y*=len,z*=len,s=Math.sin(rad),c=Math.cos(rad),t=1-c,out[0]=x*x*t+c,out[1]=y*x*t+z*s,out[2]=z*x*t-y*s,out[3]=0,out[4]=x*y*t-z*s,out[5]=y*y*t+c,out[6]=z*y*t+x*s,out[7]=0,out[8]=x*z*t+y*s,out[9]=y*z*t-x*s,out[10]=z*z*t+c,out[11]=0,out[12]=0,out[13]=0,out[14]=0,out[15]=1,out)}function fromXRotation(out,rad){var s=Math.sin(rad),c=Math.cos(rad);return out[0]=1,out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[5]=c,out[6]=s,out[7]=0,out[8]=0,out[9]=-s,out[10]=c,out[11]=0,out[12]=0,out[13]=0,out[14]=0,out[15]=1,out}function fromYRotation(out,rad){var s=Math.sin(rad),c=Math.cos(rad);return out[0]=c,out[1]=0,out[2]=-s,out[3]=0,out[4]=0,out[5]=1,out[6]=0,out[7]=0,out[8]=s,out[9]=0,out[10]=c,out[11]=0,out[12]=0,out[13]=0,out[14]=0,out[15]=1,out}function fromZRotation(out,rad){var s=Math.sin(rad),c=Math.cos(rad);return out[0]=c,out[1]=s,out[2]=0,out[3]=0,out[4]=-s,out[5]=c,out[6]=0,out[7]=0,out[8]=0,out[9]=0,out[10]=1,out[11]=0,out[12]=0,out[13]=0,out[14]=0,out[15]=1,out}function fromRotationTranslation(out,q,v){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2;return out[0]=1-(yy+zz),out[1]=xy+wz,out[2]=xz-wy,out[3]=0,out[4]=xy-wz,out[5]=1-(xx+zz),out[6]=yz+wx,out[7]=0,out[8]=xz+wy,out[9]=yz-wx,out[10]=1-(xx+yy),out[11]=0,out[12]=v[0],out[13]=v[1],out[14]=v[2],out[15]=1,out}function fromQuat2(out,a){var translation=new glMatrix.ARRAY_TYPE(3),bx=-a[0],by=-a[1],bz=-a[2],bw=a[3],ax=a[4],ay=a[5],az=a[6],aw=a[7],magnitude=bx*bx+by*by+bz*bz+bw*bw;return magnitude>0?(translation[0]=2*(ax*bw+aw*bx+ay*bz-az*by)/magnitude,translation[1]=2*(ay*bw+aw*by+az*bx-ax*bz)/magnitude,translation[2]=2*(az*bw+aw*bz+ax*by-ay*bx)/magnitude):(translation[0]=2*(ax*bw+aw*bx+ay*bz-az*by),translation[1]=2*(ay*bw+aw*by+az*bx-ax*bz),translation[2]=2*(az*bw+aw*bz+ax*by-ay*bx)),fromRotationTranslation(out,a,translation),out}function getTranslation(out,mat){return out[0]=mat[12],out[1]=mat[13],out[2]=mat[14],out}function getScaling(out,mat){var m11=mat[0],m12=mat[1],m13=mat[2],m21=mat[4],m22=mat[5],m23=mat[6],m31=mat[8],m32=mat[9],m33=mat[10];return out[0]=Math.sqrt(m11*m11+m12*m12+m13*m13),out[1]=Math.sqrt(m21*m21+m22*m22+m23*m23),out[2]=Math.sqrt(m31*m31+m32*m32+m33*m33),out}function getRotation(out,mat){var trace=mat[0]+mat[5]+mat[10],S=0;return trace>0?(S=2*Math.sqrt(trace+1),out[3]=.25*S,out[0]=(mat[6]-mat[9])/S,out[1]=(mat[8]-mat[2])/S,out[2]=(mat[1]-mat[4])/S):mat[0]>mat[5]&&mat[0]>mat[10]?(S=2*Math.sqrt(1+mat[0]-mat[5]-mat[10]),out[3]=(mat[6]-mat[9])/S,out[0]=.25*S,out[1]=(mat[1]+mat[4])/S,out[2]=(mat[8]+mat[2])/S):mat[5]>mat[10]?(S=2*Math.sqrt(1+mat[5]-mat[0]-mat[10]),out[3]=(mat[8]-mat[2])/S,out[0]=(mat[1]+mat[4])/S,out[1]=.25*S,out[2]=(mat[6]+mat[9])/S):(S=2*Math.sqrt(1+mat[10]-mat[0]-mat[5]),out[3]=(mat[1]-mat[4])/S,out[0]=(mat[8]+mat[2])/S,out[1]=(mat[6]+mat[9])/S,out[2]=.25*S),out}function fromRotationTranslationScale(out,q,v,s){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2,sx=s[0],sy=s[1],sz=s[2];return out[0]=(1-(yy+zz))*sx,out[1]=(xy+wz)*sx,out[2]=(xz-wy)*sx,out[3]=0,out[4]=(xy-wz)*sy,out[5]=(1-(xx+zz))*sy,out[6]=(yz+wx)*sy,out[7]=0,out[8]=(xz+wy)*sz,out[9]=(yz-wx)*sz,out[10]=(1-(xx+yy))*sz,out[11]=0,out[12]=v[0],out[13]=v[1],out[14]=v[2],out[15]=1,out}function fromRotationTranslationScaleOrigin(out,q,v,s,o){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2,sx=s[0],sy=s[1],sz=s[2],ox=o[0],oy=o[1],oz=o[2],out0=(1-(yy+zz))*sx,out1=(xy+wz)*sx,out2=(xz-wy)*sx,out4=(xy-wz)*sy,out5=(1-(xx+zz))*sy,out6=(yz+wx)*sy,out8=(xz+wy)*sz,out9=(yz-wx)*sz,out10=(1-(xx+yy))*sz;return out[0]=out0,out[1]=out1,out[2]=out2,out[3]=0,out[4]=out4,out[5]=out5,out[6]=out6,out[7]=0,out[8]=out8,out[9]=out9,out[10]=out10,out[11]=0,out[12]=v[0]+ox-(out0*ox+out4*oy+out8*oz),out[13]=v[1]+oy-(out1*ox+out5*oy+out9*oz),out[14]=v[2]+oz-(out2*ox+out6*oy+out10*oz),out[15]=1,out}function fromQuat(out,q){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,yx=y*x2,yy=y*y2,zx=z*x2,zy=z*y2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2;return out[0]=1-yy-zz,out[1]=yx+wz,out[2]=zx-wy,out[3]=0,out[4]=yx-wz,out[5]=1-xx-zz,out[6]=zy+wx,out[7]=0,out[8]=zx+wy,out[9]=zy-wx,out[10]=1-xx-yy,out[11]=0,out[12]=0,out[13]=0,out[14]=0,out[15]=1,out}function frustum(out,left,right,bottom,top,near,far){var rl=1/(right-left),tb=1/(top-bottom),nf=1/(near-far);return out[0]=2*near*rl,out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[5]=2*near*tb,out[6]=0,out[7]=0,out[8]=(right+left)*rl,out[9]=(top+bottom)*tb,out[10]=(far+near)*nf,out[11]=-1,out[12]=0,out[13]=0,out[14]=far*near*2*nf,out[15]=0,out}function perspective(out,fovy,aspect,near,far){var f=1/Math.tan(fovy/2),nf=void 0;return out[0]=f/aspect,out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[5]=f,out[6]=0,out[7]=0,out[8]=0,out[9]=0,out[11]=-1,out[12]=0,out[13]=0,out[15]=0,null!=far&&far!==1/0?(nf=1/(near-far),out[10]=(far+near)*nf,out[14]=2*far*near*nf):(out[10]=-1,out[14]=-2*near),out}function perspectiveFromFieldOfView(out,fov,near,far){var upTan=Math.tan(fov.upDegrees*Math.PI/180),downTan=Math.tan(fov.downDegrees*Math.PI/180),leftTan=Math.tan(fov.leftDegrees*Math.PI/180),rightTan=Math.tan(fov.rightDegrees*Math.PI/180),xScale=2/(leftTan+rightTan),yScale=2/(upTan+downTan);return out[0]=xScale,out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[5]=yScale,out[6]=0,out[7]=0,out[8]=-(leftTan-rightTan)*xScale*.5,out[9]=(upTan-downTan)*yScale*.5,out[10]=far/(near-far),out[11]=-1,out[12]=0,out[13]=0,out[14]=far*near/(near-far),out[15]=0,out}function ortho(out,left,right,bottom,top,near,far){var lr=1/(left-right),bt=1/(bottom-top),nf=1/(near-far);return out[0]=-2*lr,out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[5]=-2*bt,out[6]=0,out[7]=0,out[8]=0,out[9]=0,out[10]=2*nf,out[11]=0,out[12]=(left+right)*lr,out[13]=(top+bottom)*bt,out[14]=(far+near)*nf,out[15]=1,out}function lookAt(out,eye,center,up){var x0=void 0,x1=void 0,x2=void 0,y0=void 0,y1=void 0,y2=void 0,z0=void 0,z1=void 0,z2=void 0,len=void 0,eyex=eye[0],eyey=eye[1],eyez=eye[2],upx=up[0],upy=up[1],upz=up[2],centerx=center[0],centery=center[1],centerz=center[2];return Math.abs(eyex-centerx)<glMatrix.EPSILON&&Math.abs(eyey-centery)<glMatrix.EPSILON&&Math.abs(eyez-centerz)<glMatrix.EPSILON?identity(out):(z0=eyex-centerx,z1=eyey-centery,z2=eyez-centerz,len=1/Math.sqrt(z0*z0+z1*z1+z2*z2),z0*=len,z1*=len,z2*=len,x0=upy*z2-upz*z1,x1=upz*z0-upx*z2,x2=upx*z1-upy*z0,len=Math.sqrt(x0*x0+x1*x1+x2*x2),len?(len=1/len,x0*=len,x1*=len,x2*=len):(x0=0,x1=0,x2=0),y0=z1*x2-z2*x1,y1=z2*x0-z0*x2,y2=z0*x1-z1*x0,len=Math.sqrt(y0*y0+y1*y1+y2*y2),len?(len=1/len,y0*=len,y1*=len,y2*=len):(y0=0,y1=0,y2=0),out[0]=x0,out[1]=y0,out[2]=z0,out[3]=0,out[4]=x1,out[5]=y1,out[6]=z1,out[7]=0,out[8]=x2,out[9]=y2,out[10]=z2,out[11]=0,out[12]=-(x0*eyex+x1*eyey+x2*eyez),out[13]=-(y0*eyex+y1*eyey+y2*eyez),out[14]=-(z0*eyex+z1*eyey+z2*eyez),out[15]=1,out)}function targetTo(out,eye,target,up){var eyex=eye[0],eyey=eye[1],eyez=eye[2],upx=up[0],upy=up[1],upz=up[2],z0=eyex-target[0],z1=eyey-target[1],z2=eyez-target[2],len=z0*z0+z1*z1+z2*z2;len>0&&(len=1/Math.sqrt(len),z0*=len,z1*=len,z2*=len);var x0=upy*z2-upz*z1,x1=upz*z0-upx*z2,x2=upx*z1-upy*z0;return len=x0*x0+x1*x1+x2*x2,len>0&&(len=1/Math.sqrt(len),x0*=len,x1*=len,x2*=len),out[0]=x0,out[1]=x1,out[2]=x2,out[3]=0,out[4]=z1*x2-z2*x1,out[5]=z2*x0-z0*x2,out[6]=z0*x1-z1*x0,out[7]=0,out[8]=z0,out[9]=z1,out[10]=z2,out[11]=0,out[12]=eyex,out[13]=eyey,out[14]=eyez,out[15]=1,out}function str(a){return"mat4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+")"}function frob(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2)+Math.pow(a[9],2)+Math.pow(a[10],2)+Math.pow(a[11],2)+Math.pow(a[12],2)+Math.pow(a[13],2)+Math.pow(a[14],2)+Math.pow(a[15],2))}function add(out,a,b){return out[0]=a[0]+b[0],out[1]=a[1]+b[1],out[2]=a[2]+b[2],out[3]=a[3]+b[3],out[4]=a[4]+b[4],out[5]=a[5]+b[5],out[6]=a[6]+b[6],out[7]=a[7]+b[7],out[8]=a[8]+b[8],out[9]=a[9]+b[9],out[10]=a[10]+b[10],out[11]=a[11]+b[11],out[12]=a[12]+b[12],out[13]=a[13]+b[13],out[14]=a[14]+b[14],out[15]=a[15]+b[15],out}function subtract(out,a,b){return out[0]=a[0]-b[0],out[1]=a[1]-b[1],out[2]=a[2]-b[2],out[3]=a[3]-b[3],out[4]=a[4]-b[4],out[5]=a[5]-b[5],out[6]=a[6]-b[6],out[7]=a[7]-b[7],out[8]=a[8]-b[8],out[9]=a[9]-b[9],out[10]=a[10]-b[10],out[11]=a[11]-b[11],out[12]=a[12]-b[12],out[13]=a[13]-b[13],out[14]=a[14]-b[14],out[15]=a[15]-b[15],out}function multiplyScalar(out,a,b){return out[0]=a[0]*b,out[1]=a[1]*b,out[2]=a[2]*b,out[3]=a[3]*b,out[4]=a[4]*b,out[5]=a[5]*b,out[6]=a[6]*b,out[7]=a[7]*b,out[8]=a[8]*b,out[9]=a[9]*b,out[10]=a[10]*b,out[11]=a[11]*b,out[12]=a[12]*b,out[13]=a[13]*b,out[14]=a[14]*b,out[15]=a[15]*b,out}function multiplyScalarAndAdd(out,a,b,scale){return out[0]=a[0]+b[0]*scale,out[1]=a[1]+b[1]*scale,out[2]=a[2]+b[2]*scale,out[3]=a[3]+b[3]*scale,out[4]=a[4]+b[4]*scale,out[5]=a[5]+b[5]*scale,out[6]=a[6]+b[6]*scale,out[7]=a[7]+b[7]*scale,out[8]=a[8]+b[8]*scale,out[9]=a[9]+b[9]*scale,out[10]=a[10]+b[10]*scale,out[11]=a[11]+b[11]*scale,out[12]=a[12]+b[12]*scale,out[13]=a[13]+b[13]*scale,out[14]=a[14]+b[14]*scale,out[15]=a[15]+b[15]*scale,out}function exactEquals(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]&&a[9]===b[9]&&a[10]===b[10]&&a[11]===b[11]&&a[12]===b[12]&&a[13]===b[13]&&a[14]===b[14]&&a[15]===b[15]}function equals(a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],a6=a[6],a7=a[7],a8=a[8],a9=a[9],a10=a[10],a11=a[11],a12=a[12],a13=a[13],a14=a[14],a15=a[15],b0=b[0],b1=b[1],b2=b[2],b3=b[3],b4=b[4],b5=b[5],b6=b[6],b7=b[7],b8=b[8],b9=b[9],b10=b[10],b11=b[11],b12=b[12],b13=b[13],b14=b[14],b15=b[15];return Math.abs(a0-b0)<=glMatrix.EPSILON*Math.max(1,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix.EPSILON*Math.max(1,Math.abs(a1),Math.abs(b1))&&Math.abs(a2-b2)<=glMatrix.EPSILON*Math.max(1,Math.abs(a2),Math.abs(b2))&&Math.abs(a3-b3)<=glMatrix.EPSILON*Math.max(1,Math.abs(a3),Math.abs(b3))&&Math.abs(a4-b4)<=glMatrix.EPSILON*Math.max(1,Math.abs(a4),Math.abs(b4))&&Math.abs(a5-b5)<=glMatrix.EPSILON*Math.max(1,Math.abs(a5),Math.abs(b5))&&Math.abs(a6-b6)<=glMatrix.EPSILON*Math.max(1,Math.abs(a6),Math.abs(b6))&&Math.abs(a7-b7)<=glMatrix.EPSILON*Math.max(1,Math.abs(a7),Math.abs(b7))&&Math.abs(a8-b8)<=glMatrix.EPSILON*Math.max(1,Math.abs(a8),Math.abs(b8))&&Math.abs(a9-b9)<=glMatrix.EPSILON*Math.max(1,Math.abs(a9),Math.abs(b9))&&Math.abs(a10-b10)<=glMatrix.EPSILON*Math.max(1,Math.abs(a10),Math.abs(b10))&&Math.abs(a11-b11)<=glMatrix.EPSILON*Math.max(1,Math.abs(a11),Math.abs(b11))&&Math.abs(a12-b12)<=glMatrix.EPSILON*Math.max(1,Math.abs(a12),Math.abs(b12))&&Math.abs(a13-b13)<=glMatrix.EPSILON*Math.max(1,Math.abs(a13),Math.abs(b13))&&Math.abs(a14-b14)<=glMatrix.EPSILON*Math.max(1,Math.abs(a14),Math.abs(b14))&&Math.abs(a15-b15)<=glMatrix.EPSILON*Math.max(1,Math.abs(a15),Math.abs(b15))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sub=exports.mul=void 0,exports.create=create,exports.clone=clone,exports.copy=copy,exports.fromValues=fromValues,exports.set=set,exports.identity=identity,exports.transpose=transpose,exports.invert=invert,exports.adjoint=adjoint,exports.determinant=determinant,exports.multiply=multiply,exports.translate=translate,exports.scale=scale,exports.rotate=rotate,exports.rotateX=rotateX,exports.rotateY=rotateY,exports.rotateZ=rotateZ,exports.fromTranslation=fromTranslation,exports.fromScaling=fromScaling,exports.fromRotation=fromRotation,exports.fromXRotation=fromXRotation,exports.fromYRotation=fromYRotation,exports.fromZRotation=fromZRotation,exports.fromRotationTranslation=fromRotationTranslation,exports.fromQuat2=fromQuat2,exports.getTranslation=getTranslation,exports.getScaling=getScaling,exports.getRotation=getRotation,exports.fromRotationTranslationScale=fromRotationTranslationScale,exports.fromRotationTranslationScaleOrigin=fromRotationTranslationScaleOrigin,exports.fromQuat=fromQuat,exports.frustum=frustum,exports.perspective=perspective,exports.perspectiveFromFieldOfView=perspectiveFromFieldOfView,exports.ortho=ortho,exports.lookAt=lookAt,exports.targetTo=targetTo,exports.str=str,exports.frob=frob,exports.add=add,exports.subtract=subtract,exports.multiplyScalar=multiplyScalar,exports.multiplyScalarAndAdd=multiplyScalarAndAdd,exports.exactEquals=exactEquals,exports.equals=equals;var _common=__webpack_require__(3),glMatrix=function(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}(_common);exports.mul=multiply,exports.sub=subtract},function(module,exports,__webpack_require__){"use strict";function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}function create(){var out=new glMatrix.ARRAY_TYPE(4);return glMatrix.ARRAY_TYPE!=Float32Array&&(out[0]=0,out[1]=0,out[2]=0),out[3]=1,out}function identity(out){return out[0]=0,out[1]=0,out[2]=0,out[3]=1,out}function setAxisAngle(out,axis,rad){rad*=.5;var s=Math.sin(rad);return out[0]=s*axis[0],out[1]=s*axis[1],out[2]=s*axis[2],out[3]=Math.cos(rad),out}function getAxisAngle(out_axis,q){var rad=2*Math.acos(q[3]),s=Math.sin(rad/2);return s>glMatrix.EPSILON?(out_axis[0]=q[0]/s,out_axis[1]=q[1]/s,out_axis[2]=q[2]/s):(out_axis[0]=1,out_axis[1]=0,out_axis[2]=0),rad}function multiply(out,a,b){var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3];return out[0]=ax*bw+aw*bx+ay*bz-az*by,out[1]=ay*bw+aw*by+az*bx-ax*bz,out[2]=az*bw+aw*bz+ax*by-ay*bx,out[3]=aw*bw-ax*bx-ay*by-az*bz,out}function rotateX(out,a,rad){rad*=.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=Math.sin(rad),bw=Math.cos(rad);return out[0]=ax*bw+aw*bx,out[1]=ay*bw+az*bx,out[2]=az*bw-ay*bx,out[3]=aw*bw-ax*bx,out}function rotateY(out,a,rad){rad*=.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],by=Math.sin(rad),bw=Math.cos(rad);return out[0]=ax*bw-az*by,out[1]=ay*bw+aw*by,out[2]=az*bw+ax*by,out[3]=aw*bw-ay*by,out}function rotateZ(out,a,rad){rad*=.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],bz=Math.sin(rad),bw=Math.cos(rad);return out[0]=ax*bw+ay*bz,out[1]=ay*bw-ax*bz,out[2]=az*bw+aw*bz,out[3]=aw*bw-az*bz,out}function calculateW(out,a){var x=a[0],y=a[1],z=a[2];return out[0]=x,out[1]=y,out[2]=z,out[3]=Math.sqrt(Math.abs(1-x*x-y*y-z*z)),out}function slerp(out,a,b,t){var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3],omega=void 0,cosom=void 0,sinom=void 0,scale0=void 0,scale1=void 0;return cosom=ax*bx+ay*by+az*bz+aw*bw,cosom<0&&(cosom=-cosom,bx=-bx,by=-by,bz=-bz,bw=-bw),1-cosom>glMatrix.EPSILON?(omega=Math.acos(cosom),sinom=Math.sin(omega),scale0=Math.sin((1-t)*omega)/sinom,scale1=Math.sin(t*omega)/sinom):(scale0=1-t,scale1=t),out[0]=scale0*ax+scale1*bx,out[1]=scale0*ay+scale1*by,out[2]=scale0*az+scale1*bz,out[3]=scale0*aw+scale1*bw,out}function random(out){var u1=glMatrix.RANDOM(),u2=glMatrix.RANDOM(),u3=glMatrix.RANDOM(),sqrt1MinusU1=Math.sqrt(1-u1),sqrtU1=Math.sqrt(u1);return out[0]=sqrt1MinusU1*Math.sin(2*Math.PI*u2),out[1]=sqrt1MinusU1*Math.cos(2*Math.PI*u2),out[2]=sqrtU1*Math.sin(2*Math.PI*u3),out[3]=sqrtU1*Math.cos(2*Math.PI*u3),out}function invert(out,a){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],dot=a0*a0+a1*a1+a2*a2+a3*a3,invDot=dot?1/dot:0;return out[0]=-a0*invDot,out[1]=-a1*invDot,out[2]=-a2*invDot,out[3]=a3*invDot,out}function conjugate(out,a){return out[0]=-a[0],out[1]=-a[1],out[2]=-a[2],out[3]=a[3],out}function fromMat3(out,m){var fTrace=m[0]+m[4]+m[8],fRoot=void 0;if(fTrace>0)fRoot=Math.sqrt(fTrace+1),out[3]=.5*fRoot,fRoot=.5/fRoot,out[0]=(m[5]-m[7])*fRoot,out[1]=(m[6]-m[2])*fRoot,out[2]=(m[1]-m[3])*fRoot;else{var i=0;m[4]>m[0]&&(i=1),m[8]>m[3*i+i]&&(i=2);var j=(i+1)%3,k=(i+2)%3;fRoot=Math.sqrt(m[3*i+i]-m[3*j+j]-m[3*k+k]+1),out[i]=.5*fRoot,fRoot=.5/fRoot,out[3]=(m[3*j+k]-m[3*k+j])*fRoot,out[j]=(m[3*j+i]+m[3*i+j])*fRoot,out[k]=(m[3*k+i]+m[3*i+k])*fRoot}return out}function fromEuler(out,x,y,z){var halfToRad=.5*Math.PI/180;x*=halfToRad,y*=halfToRad,z*=halfToRad;var sx=Math.sin(x),cx=Math.cos(x),sy=Math.sin(y),cy=Math.cos(y),sz=Math.sin(z),cz=Math.cos(z);return out[0]=sx*cy*cz-cx*sy*sz,out[1]=cx*sy*cz+sx*cy*sz,out[2]=cx*cy*sz-sx*sy*cz,out[3]=cx*cy*cz+sx*sy*sz,out}function str(a){return"quat("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"}Object.defineProperty(exports,"__esModule",{value:!0}),exports.setAxes=exports.sqlerp=exports.rotationTo=exports.equals=exports.exactEquals=exports.normalize=exports.sqrLen=exports.squaredLength=exports.len=exports.length=exports.lerp=exports.dot=exports.scale=exports.mul=exports.add=exports.set=exports.copy=exports.fromValues=exports.clone=void 0,exports.create=create,exports.identity=identity,exports.setAxisAngle=setAxisAngle,exports.getAxisAngle=getAxisAngle,exports.multiply=multiply,exports.rotateX=rotateX,exports.rotateY=rotateY,exports.rotateZ=rotateZ,exports.calculateW=calculateW,exports.slerp=slerp,exports.random=random,exports.invert=invert,exports.conjugate=conjugate,exports.fromMat3=fromMat3,exports.fromEuler=fromEuler,exports.str=str;var _common=__webpack_require__(3),glMatrix=_interopRequireWildcard(_common),_mat=__webpack_require__(17),mat3=_interopRequireWildcard(_mat),_vec=__webpack_require__(20),vec3=_interopRequireWildcard(_vec),_vec2=__webpack_require__(21),vec4=_interopRequireWildcard(_vec2),length=(exports.clone=vec4.clone,exports.fromValues=vec4.fromValues,exports.copy=vec4.copy,exports.set=vec4.set,exports.add=vec4.add,exports.mul=multiply,exports.scale=vec4.scale,exports.dot=vec4.dot,exports.lerp=vec4.lerp,exports.length=vec4.length),squaredLength=(exports.len=length,exports.squaredLength=vec4.squaredLength),normalize=(exports.sqrLen=squaredLength,exports.normalize=vec4.normalize);exports.exactEquals=vec4.exactEquals,exports.equals=vec4.equals,exports.rotationTo=function(){var tmpvec3=vec3.create(),xUnitVec3=vec3.fromValues(1,0,0),yUnitVec3=vec3.fromValues(0,1,0);return function(out,a,b){var dot=vec3.dot(a,b);return dot<-.999999?(vec3.cross(tmpvec3,xUnitVec3,a),vec3.len(tmpvec3)<1e-6&&vec3.cross(tmpvec3,yUnitVec3,a),vec3.normalize(tmpvec3,tmpvec3),setAxisAngle(out,tmpvec3,Math.PI),out):dot>.999999?(out[0]=0,out[1]=0,out[2]=0,out[3]=1,out):(vec3.cross(tmpvec3,a,b),out[0]=tmpvec3[0],out[1]=tmpvec3[1],out[2]=tmpvec3[2],out[3]=1+dot,normalize(out,out))}}(),exports.sqlerp=function(){var temp1=create(),temp2=create();return function(out,a,b,c,d,t){return slerp(temp1,a,d,t),slerp(temp2,b,c,t),slerp(out,temp1,temp2,2*t*(1-t)),out}}(),exports.setAxes=function(){var matr=mat3.create();return function(out,view,right,up){return matr[0]=right[0],matr[3]=right[1],matr[6]=right[2],matr[1]=up[0],matr[4]=up[1],matr[7]=up[2],matr[2]=-view[0],matr[5]=-view[1],matr[8]=-view[2],normalize(out,fromMat3(out,matr))}}()},function(module,exports,__webpack_require__){"use strict";function create(){var out=new glMatrix.ARRAY_TYPE(3);return glMatrix.ARRAY_TYPE!=Float32Array&&(out[0]=0,out[1]=0,out[2]=0),out}function clone(a){var out=new glMatrix.ARRAY_TYPE(3);return out[0]=a[0],out[1]=a[1],out[2]=a[2],out}function length(a){var x=a[0],y=a[1],z=a[2];return Math.sqrt(x*x+y*y+z*z)}function fromValues(x,y,z){var out=new glMatrix.ARRAY_TYPE(3);return out[0]=x,out[1]=y,out[2]=z,out}function copy(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out}function set(out,x,y,z){return out[0]=x,out[1]=y,out[2]=z,out}function add(out,a,b){return out[0]=a[0]+b[0],out[1]=a[1]+b[1],out[2]=a[2]+b[2],out}function subtract(out,a,b){return out[0]=a[0]-b[0],out[1]=a[1]-b[1],out[2]=a[2]-b[2],out}function multiply(out,a,b){return out[0]=a[0]*b[0],out[1]=a[1]*b[1],out[2]=a[2]*b[2],out}function divide(out,a,b){return out[0]=a[0]/b[0],out[1]=a[1]/b[1],out[2]=a[2]/b[2],out}function ceil(out,a){return out[0]=Math.ceil(a[0]),out[1]=Math.ceil(a[1]),out[2]=Math.ceil(a[2]),out}function floor(out,a){return out[0]=Math.floor(a[0]),out[1]=Math.floor(a[1]),out[2]=Math.floor(a[2]),out}function min(out,a,b){return out[0]=Math.min(a[0],b[0]),out[1]=Math.min(a[1],b[1]),out[2]=Math.min(a[2],b[2]),out}function max(out,a,b){return out[0]=Math.max(a[0],b[0]),out[1]=Math.max(a[1],b[1]),out[2]=Math.max(a[2],b[2]),out}function round(out,a){return out[0]=Math.round(a[0]),out[1]=Math.round(a[1]),out[2]=Math.round(a[2]),out}function scale(out,a,b){return out[0]=a[0]*b,out[1]=a[1]*b,out[2]=a[2]*b,out}function scaleAndAdd(out,a,b,scale){return out[0]=a[0]+b[0]*scale,out[1]=a[1]+b[1]*scale,out[2]=a[2]+b[2]*scale,out}function distance(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2];return Math.sqrt(x*x+y*y+z*z)}function squaredDistance(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2];return x*x+y*y+z*z}function squaredLength(a){var x=a[0],y=a[1],z=a[2];return x*x+y*y+z*z}function negate(out,a){return out[0]=-a[0],out[1]=-a[1],out[2]=-a[2],out}function inverse(out,a){return out[0]=1/a[0],out[1]=1/a[1],out[2]=1/a[2],out}function normalize(out,a){var x=a[0],y=a[1],z=a[2],len=x*x+y*y+z*z;return len>0&&(len=1/Math.sqrt(len),out[0]=a[0]*len,out[1]=a[1]*len,out[2]=a[2]*len),out}function dot(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}function cross(out,a,b){var ax=a[0],ay=a[1],az=a[2],bx=b[0],by=b[1],bz=b[2];return out[0]=ay*bz-az*by,out[1]=az*bx-ax*bz,out[2]=ax*by-ay*bx,out}function lerp(out,a,b,t){var ax=a[0],ay=a[1],az=a[2];return out[0]=ax+t*(b[0]-ax),out[1]=ay+t*(b[1]-ay),out[2]=az+t*(b[2]-az),out}function hermite(out,a,b,c,d,t){var factorTimes2=t*t,factor1=factorTimes2*(2*t-3)+1,factor2=factorTimes2*(t-2)+t,factor3=factorTimes2*(t-1),factor4=factorTimes2*(3-2*t);return out[0]=a[0]*factor1+b[0]*factor2+c[0]*factor3+d[0]*factor4,out[1]=a[1]*factor1+b[1]*factor2+c[1]*factor3+d[1]*factor4,out[2]=a[2]*factor1+b[2]*factor2+c[2]*factor3+d[2]*factor4,out}function bezier(out,a,b,c,d,t){var inverseFactor=1-t,inverseFactorTimesTwo=inverseFactor*inverseFactor,factorTimes2=t*t,factor1=inverseFactorTimesTwo*inverseFactor,factor2=3*t*inverseFactorTimesTwo,factor3=3*factorTimes2*inverseFactor,factor4=factorTimes2*t;return out[0]=a[0]*factor1+b[0]*factor2+c[0]*factor3+d[0]*factor4,out[1]=a[1]*factor1+b[1]*factor2+c[1]*factor3+d[1]*factor4,out[2]=a[2]*factor1+b[2]*factor2+c[2]*factor3+d[2]*factor4,out}function random(out,scale){scale=scale||1;var r=2*glMatrix.RANDOM()*Math.PI,z=2*glMatrix.RANDOM()-1,zScale=Math.sqrt(1-z*z)*scale;return out[0]=Math.cos(r)*zScale,out[1]=Math.sin(r)*zScale,out[2]=z*scale,out}function transformMat4(out,a,m){var x=a[0],y=a[1],z=a[2],w=m[3]*x+m[7]*y+m[11]*z+m[15];return w=w||1,out[0]=(m[0]*x+m[4]*y+m[8]*z+m[12])/w,out[1]=(m[1]*x+m[5]*y+m[9]*z+m[13])/w,out[2]=(m[2]*x+m[6]*y+m[10]*z+m[14])/w,out}function transformMat3(out,a,m){var x=a[0],y=a[1],z=a[2];return out[0]=x*m[0]+y*m[3]+z*m[6],out[1]=x*m[1]+y*m[4]+z*m[7],out[2]=x*m[2]+y*m[5]+z*m[8],out}function transformQuat(out,a,q){var qx=q[0],qy=q[1],qz=q[2],qw=q[3],x=a[0],y=a[1],z=a[2],uvx=qy*z-qz*y,uvy=qz*x-qx*z,uvz=qx*y-qy*x,uuvx=qy*uvz-qz*uvy,uuvy=qz*uvx-qx*uvz,uuvz=qx*uvy-qy*uvx,w2=2*qw;return uvx*=w2,uvy*=w2,uvz*=w2,uuvx*=2,uuvy*=2,uuvz*=2,out[0]=x+uvx+uuvx,out[1]=y+uvy+uuvy,out[2]=z+uvz+uuvz,out}function rotateX(out,a,b,c){var p=[],r=[];return p[0]=a[0]-b[0],p[1]=a[1]-b[1],p[2]=a[2]-b[2],r[0]=p[0],r[1]=p[1]*Math.cos(c)-p[2]*Math.sin(c),r[2]=p[1]*Math.sin(c)+p[2]*Math.cos(c),out[0]=r[0]+b[0],out[1]=r[1]+b[1],out[2]=r[2]+b[2],out}function rotateY(out,a,b,c){var p=[],r=[];return p[0]=a[0]-b[0],p[1]=a[1]-b[1],p[2]=a[2]-b[2],r[0]=p[2]*Math.sin(c)+p[0]*Math.cos(c),r[1]=p[1],r[2]=p[2]*Math.cos(c)-p[0]*Math.sin(c),out[0]=r[0]+b[0],out[1]=r[1]+b[1],out[2]=r[2]+b[2],out}function rotateZ(out,a,b,c){var p=[],r=[];return p[0]=a[0]-b[0],p[1]=a[1]-b[1],p[2]=a[2]-b[2],r[0]=p[0]*Math.cos(c)-p[1]*Math.sin(c),r[1]=p[0]*Math.sin(c)+p[1]*Math.cos(c),r[2]=p[2],out[0]=r[0]+b[0],out[1]=r[1]+b[1],out[2]=r[2]+b[2],out}function angle(a,b){var tempA=fromValues(a[0],a[1],a[2]),tempB=fromValues(b[0],b[1],b[2]);normalize(tempA,tempA),normalize(tempB,tempB);var cosine=dot(tempA,tempB);return cosine>1?0:cosine<-1?Math.PI:Math.acos(cosine)}function str(a){return"vec3("+a[0]+", "+a[1]+", "+a[2]+")"}function exactEquals(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]}function equals(a,b){var a0=a[0],a1=a[1],a2=a[2],b0=b[0],b1=b[1],b2=b[2];return Math.abs(a0-b0)<=glMatrix.EPSILON*Math.max(1,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix.EPSILON*Math.max(1,Math.abs(a1),Math.abs(b1))&&Math.abs(a2-b2)<=glMatrix.EPSILON*Math.max(1,Math.abs(a2),Math.abs(b2))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.forEach=exports.sqrLen=exports.len=exports.sqrDist=exports.dist=exports.div=exports.mul=exports.sub=void 0,exports.create=create,exports.clone=clone,exports.length=length,exports.fromValues=fromValues,exports.copy=copy,exports.set=set,exports.add=add,exports.subtract=subtract,exports.multiply=multiply,exports.divide=divide,exports.ceil=ceil,exports.floor=floor,exports.min=min,exports.max=max,exports.round=round,exports.scale=scale,exports.scaleAndAdd=scaleAndAdd,exports.distance=distance,exports.squaredDistance=squaredDistance,exports.squaredLength=squaredLength,exports.negate=negate,exports.inverse=inverse,exports.normalize=normalize,exports.dot=dot,exports.cross=cross,exports.lerp=lerp,exports.hermite=hermite,exports.bezier=bezier,exports.random=random,exports.transformMat4=transformMat4,exports.transformMat3=transformMat3,exports.transformQuat=transformQuat,exports.rotateX=rotateX,exports.rotateY=rotateY,exports.rotateZ=rotateZ,exports.angle=angle,exports.str=str,exports.exactEquals=exactEquals,exports.equals=equals;var _common=__webpack_require__(3),glMatrix=function(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}(_common);exports.sub=subtract,exports.mul=multiply,exports.div=divide,exports.dist=distance,exports.sqrDist=squaredDistance,exports.len=length,exports.sqrLen=squaredLength,exports.forEach=function(){var vec=create();return function(a,stride,offset,count,fn,arg){var i=void 0,l=void 0;for(stride||(stride=3),offset||(offset=0),l=count?Math.min(count*stride+offset,a.length):a.length,i=offset;i<l;i+=stride)vec[0]=a[i],vec[1]=a[i+1],vec[2]=a[i+2],fn(vec,vec,arg),a[i]=vec[0],a[i+1]=vec[1],a[i+2]=vec[2];return a}}()},function(module,exports,__webpack_require__){"use strict";function create(){var out=new glMatrix.ARRAY_TYPE(4);return glMatrix.ARRAY_TYPE!=Float32Array&&(out[0]=0,out[1]=0,out[2]=0,out[3]=0),out}function clone(a){var out=new glMatrix.ARRAY_TYPE(4);return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out}function fromValues(x,y,z,w){var out=new glMatrix.ARRAY_TYPE(4);return out[0]=x,out[1]=y,out[2]=z,out[3]=w,out}function copy(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out}function set(out,x,y,z,w){return out[0]=x,out[1]=y,out[2]=z,out[3]=w,out}function add(out,a,b){return out[0]=a[0]+b[0],out[1]=a[1]+b[1],out[2]=a[2]+b[2],out[3]=a[3]+b[3],out}function subtract(out,a,b){return out[0]=a[0]-b[0],out[1]=a[1]-b[1],out[2]=a[2]-b[2],out[3]=a[3]-b[3],out}function multiply(out,a,b){return out[0]=a[0]*b[0],out[1]=a[1]*b[1],out[2]=a[2]*b[2],out[3]=a[3]*b[3],out}function divide(out,a,b){return out[0]=a[0]/b[0],out[1]=a[1]/b[1],out[2]=a[2]/b[2],out[3]=a[3]/b[3],out}function ceil(out,a){return out[0]=Math.ceil(a[0]),out[1]=Math.ceil(a[1]),out[2]=Math.ceil(a[2]),out[3]=Math.ceil(a[3]),out}function floor(out,a){return out[0]=Math.floor(a[0]),out[1]=Math.floor(a[1]),out[2]=Math.floor(a[2]),out[3]=Math.floor(a[3]),out}function min(out,a,b){return out[0]=Math.min(a[0],b[0]),out[1]=Math.min(a[1],b[1]),out[2]=Math.min(a[2],b[2]),out[3]=Math.min(a[3],b[3]),out}function max(out,a,b){return out[0]=Math.max(a[0],b[0]),out[1]=Math.max(a[1],b[1]),out[2]=Math.max(a[2],b[2]),out[3]=Math.max(a[3],b[3]),out}function round(out,a){return out[0]=Math.round(a[0]),out[1]=Math.round(a[1]),out[2]=Math.round(a[2]),out[3]=Math.round(a[3]),out}function scale(out,a,b){return out[0]=a[0]*b,out[1]=a[1]*b,out[2]=a[2]*b,out[3]=a[3]*b,out}function scaleAndAdd(out,a,b,scale){return out[0]=a[0]+b[0]*scale,out[1]=a[1]+b[1]*scale,out[2]=a[2]+b[2]*scale,out[3]=a[3]+b[3]*scale,out}function distance(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2],w=b[3]-a[3];return Math.sqrt(x*x+y*y+z*z+w*w)}function squaredDistance(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2],w=b[3]-a[3];return x*x+y*y+z*z+w*w}function length(a){var x=a[0],y=a[1],z=a[2],w=a[3];return Math.sqrt(x*x+y*y+z*z+w*w)}function squaredLength(a){var x=a[0],y=a[1],z=a[2],w=a[3];return x*x+y*y+z*z+w*w}function negate(out,a){return out[0]=-a[0],out[1]=-a[1],out[2]=-a[2],out[3]=-a[3],out}function inverse(out,a){return out[0]=1/a[0],out[1]=1/a[1],out[2]=1/a[2],out[3]=1/a[3],out}function normalize(out,a){var x=a[0],y=a[1],z=a[2],w=a[3],len=x*x+y*y+z*z+w*w;return len>0&&(len=1/Math.sqrt(len),out[0]=x*len,out[1]=y*len,out[2]=z*len,out[3]=w*len),out}function dot(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]}function lerp(out,a,b,t){var ax=a[0],ay=a[1],az=a[2],aw=a[3];return out[0]=ax+t*(b[0]-ax),out[1]=ay+t*(b[1]-ay),out[2]=az+t*(b[2]-az),out[3]=aw+t*(b[3]-aw),out}function random(out,scale){scale=scale||1;var v1,v2,v3,v4,s1,s2;do{v1=2*glMatrix.RANDOM()-1,v2=2*glMatrix.RANDOM()-1,s1=v1*v1+v2*v2}while(s1>=1);do{v3=2*glMatrix.RANDOM()-1,v4=2*glMatrix.RANDOM()-1,s2=v3*v3+v4*v4}while(s2>=1);var d=Math.sqrt((1-s1)/s2);return out[0]=scale*v1,out[1]=scale*v2,out[2]=scale*v3*d,out[3]=scale*v4*d,out}function transformMat4(out,a,m){var x=a[0],y=a[1],z=a[2],w=a[3];return out[0]=m[0]*x+m[4]*y+m[8]*z+m[12]*w,out[1]=m[1]*x+m[5]*y+m[9]*z+m[13]*w,out[2]=m[2]*x+m[6]*y+m[10]*z+m[14]*w,out[3]=m[3]*x+m[7]*y+m[11]*z+m[15]*w,out}function transformQuat(out,a,q){var x=a[0],y=a[1],z=a[2],qx=q[0],qy=q[1],qz=q[2],qw=q[3],ix=qw*x+qy*z-qz*y,iy=qw*y+qz*x-qx*z,iz=qw*z+qx*y-qy*x,iw=-qx*x-qy*y-qz*z;return out[0]=ix*qw+iw*-qx+iy*-qz-iz*-qy,out[1]=iy*qw+iw*-qy+iz*-qx-ix*-qz,out[2]=iz*qw+iw*-qz+ix*-qy-iy*-qx,out[3]=a[3],out}function str(a){return"vec4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"}function exactEquals(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]}function equals(a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],b0=b[0],b1=b[1],b2=b[2],b3=b[3];return Math.abs(a0-b0)<=glMatrix.EPSILON*Math.max(1,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix.EPSILON*Math.max(1,Math.abs(a1),Math.abs(b1))&&Math.abs(a2-b2)<=glMatrix.EPSILON*Math.max(1,Math.abs(a2),Math.abs(b2))&&Math.abs(a3-b3)<=glMatrix.EPSILON*Math.max(1,Math.abs(a3),Math.abs(b3))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.forEach=exports.sqrLen=exports.len=exports.sqrDist=exports.dist=exports.div=exports.mul=exports.sub=void 0,exports.create=create,exports.clone=clone,exports.fromValues=fromValues,exports.copy=copy,exports.set=set,exports.add=add,exports.subtract=subtract,exports.multiply=multiply,exports.divide=divide,exports.ceil=ceil,exports.floor=floor,exports.min=min,exports.max=max,exports.round=round,exports.scale=scale,exports.scaleAndAdd=scaleAndAdd,exports.distance=distance,exports.squaredDistance=squaredDistance,exports.length=length,exports.squaredLength=squaredLength,exports.negate=negate,exports.inverse=inverse,exports.normalize=normalize,exports.dot=dot,exports.lerp=lerp,exports.random=random,exports.transformMat4=transformMat4,exports.transformQuat=transformQuat,exports.str=str,exports.exactEquals=exactEquals,exports.equals=equals;var _common=__webpack_require__(3),glMatrix=function(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}(_common);exports.sub=subtract,exports.mul=multiply,exports.div=divide,exports.dist=distance,exports.sqrDist=squaredDistance,exports.len=length,exports.sqrLen=squaredLength,exports.forEach=function(){var vec=create();return function(a,stride,offset,count,fn,arg){var i=void 0,l=void 0;for(stride||(stride=4),offset||(offset=0),l=count?Math.min(count*stride+offset,a.length):a.length,i=offset;i<l;i+=stride)vec[0]=a[i],vec[1]=a[i+1],vec[2]=a[i+2],vec[3]=a[i+3],fn(vec,vec,arg),a[i]=vec[0],a[i+1]=vec[1],a[i+2]=vec[2],a[i+3]=vec[3];return a}}()},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(gl,shaderProgram,name){return void 0===shaderProgram.cacheAttribLoc&&(shaderProgram.cacheAttribLoc={}),void 0===shaderProgram.cacheAttribLoc[name]&&(shaderProgram.cacheAttribLoc[name]=gl.getAttribLocation(shaderProgram,name)),shaderProgram.cacheAttribLoc[name]}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function isPowerOfTwo(x){return 0!==x&&!(x&x-1)}function getSourceType(mSource){var type=_GLTool2.default.UNSIGNED_BYTE;return mSource instanceof Array?type=_GLTool2.default.UNSIGNED_BYTE:mSource instanceof Uint8Array?type=_GLTool2.default.UNSIGNED_BYTE:mSource instanceof Float32Array?type=_GLTool2.default.FLOAT:mSource instanceof HTMLImageElement?type="image":mSource instanceof HTMLCanvasElement?type="canvas":mSource instanceof HTMLVideoElement&&(type="video"),type}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_getTextureParameters=__webpack_require__(48),_getTextureParameters2=_interopRequireDefault(_getTextureParameters),_WebglNumber=__webpack_require__(8),_WebglNumber2=_interopRequireDefault(_WebglNumber),_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_scheduling=__webpack_require__(4),_scheduling2=_interopRequireDefault(_scheduling),gl=void 0,GLTexture=function(){function GLTexture(mSource){var mParam=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_this=this,mWidth=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,mHeight=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;_classCallCheck(this,GLTexture),gl=_GLTool2.default.gl,this._source=mSource,this._getDimension(mSource,mWidth,mHeight),this._sourceType=mParam.type||getSourceType(mSource),this._checkSource(),this._texelType=this._getTexelType(),this._isTextureReady=!0,this._params=(0,_getTextureParameters2.default)(mParam,mSource,this._width,this._height),this._checkMipmap(),this._checkWrapping(),this._texture=gl.createTexture(),"video"===this._sourceType?(this._isTextureReady=!1,_scheduling2.default.addEF(function(){return _this._loop()})):this._uploadTexture()}return _createClass(GLTexture,[{key:"_loop",value:function(){4===this._source.readyState&&(this._isTextureReady=!0,this._uploadTexture())}},{key:"_uploadTexture",value:function(){gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,!0),this._isSourceHtmlElement()?gl.texImage2D(gl.TEXTURE_2D,0,this._params.internalFormat,this._params.format,this._texelType,this._source):gl.texImage2D(gl.TEXTURE_2D,0,this._params.internalFormat,this._width,this._height,0,this._params.format,this._texelType,this._source),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,this._params.magFilter),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,this._params.minFilter),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,this._params.wrapS),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,this._params.wrapT),gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this._premultiplyAlpha),this._generateMipmap&&gl.generateMipmap(gl.TEXTURE_2D),gl.bindTexture(gl.TEXTURE_2D,null)}},{key:"bind",value:function(index){void 0===index&&(index=0),_GLTool2.default.shader&&(gl.activeTexture(gl.TEXTURE0+index),this._isTextureReady?gl.bindTexture(gl.TEXTURE_2D,this._texture):gl.bindTexture(gl.TEXTURE_2D,GLTexture.blackTexture().texture),this._bindIndex=index)}},{key:"updateTexture",value:function(mSource){this._source=mSource,this._checkSource(),this._uploadTexture()}},{key:"generateMipmap",value:function(){this._generateMipmap&&(gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.generateMipmap(gl.TEXTURE_2D),gl.bindTexture(gl.TEXTURE_2D,null))}},{key:"showParameters",value:function(){console.log("Source type : ",_WebglNumber2.default[this._sourceType]||this._sourceType),console.log("Texel type:",_WebglNumber2.default[this.texelType]),console.log("Dimension :",this._width,this._height);for(var s in this._params)console.log(s,_WebglNumber2.default[this._params[s]]||this._params[s]);console.log("Mipmapping :",this._generateMipmap)}},{key:"_getDimension",value:function(mSource,mWidth,mHeight){mSource?(this._width=mSource.width||mSource.videoWidth,this._height=mSource.height||mSource.videoWidth,this._width=this._width||mWidth,this._height=this._height||mHeight,this._width&&this._height||(this._width=this._height=Math.sqrt(mSource.length/4))):(this._width=mWidth,this._height=mHeight)}},{key:"_checkSource",value:function(){this._source&&(this._sourceType===_GLTool2.default.UNSIGNED_BYTE?this._source instanceof Uint8Array||(this._source=new Uint8Array(this._source)):this._sourceType===_GLTool2.default.FLOAT&&(this._source instanceof Float32Array||(this._source=new Float32Array(this._source))))}},{key:"_getTexelType",value:function(){return this._isSourceHtmlElement()?_GLTool2.default.UNSIGNED_BYTE:_GLTool2.default[_WebglNumber2.default[this._sourceType]]}},{key:"_checkMipmap",value:function(){this._generateMipmap=this._params.mipmap,isPowerOfTwo(this._width)&&isPowerOfTwo(this._height)||(this._generateMipmap=!1),-1===_WebglNumber2.default[this._params.minFilter].indexOf("MIPMAP")&&(this._generateMipmap=!1)}},{key:"_checkWrapping",value:function(){this._generateMipmap||(this._params.wrapS=_GLTool2.default.CLAMP_TO_EDGE,this._params.wrapT=_GLTool2.default.CLAMP_TO_EDGE)}},{key:"_isSourceHtmlElement",value:function(){return"image"===this._sourceType||"video"===this._sourceType||"canvas"===this._sourceType}},{key:"minFilter",get:function(){return this._params.minFilter},set:function(mValue){this._params.minFilter=mValue,this._checkMipmap(),gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,this._params.minFilter),gl.bindTexture(gl.TEXTURE_2D,null),this.generateMipmap()}},{key:"magFilter",get:function(){return this._params.minFilter},set:function(mValue){this._params.magFilter=mValue,gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,this._params.magFilter),gl.bindTexture(gl.TEXTURE_2D,null)}},{key:"wrapS",get:function(){return this._params.wrapS},set:function(mValue){this._params.wrapS=mValue,this._checkWrapping(),gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,this._params.wrapS),gl.bindTexture(gl.TEXTURE_2D,null)}},{key:"wrapT",get:function(){return this._params.wrapT},set:function(mValue){this._params.wrapT=mValue,this._checkWrapping(),gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,this._params.wrapT),gl.bindTexture(gl.TEXTURE_2D,null)}},{key:"texelType",get:function(){return this._texelType}},{key:"width",get:function(){return this._width}},{key:"height",get:function(){return this._height}},{key:"texture",get:function(){return this._texture}},{key:"isTextureReady",get:function(){return this._isTextureReady}}]),GLTexture}(),_whiteTexture=void 0,_greyTexture=void 0,_blackTexture=void 0;GLTexture.whiteTexture=function(){if(void 0===_whiteTexture){var canvas=document.createElement("canvas");canvas.width=canvas.height=2;var ctx=canvas.getContext("2d");ctx.fillStyle="#fff",ctx.fillRect(0,0,2,2),_whiteTexture=new GLTexture(canvas)}return _whiteTexture},GLTexture.greyTexture=function(){if(void 0===_greyTexture){var canvas=document.createElement("canvas");canvas.width=canvas.height=2;var ctx=canvas.getContext("2d");ctx.fillStyle="rgb(127, 127, 127)",ctx.fillRect(0,0,2,2),_greyTexture=new GLTexture(canvas)}return _greyTexture},GLTexture.blackTexture=function(){if(void 0===_blackTexture){var canvas=document.createElement("canvas");canvas.width=canvas.height=2;var ctx=canvas.getContext("2d");ctx.fillStyle="rgb(0, 0, 0)",ctx.fillRect(0,0,2,2),_blackTexture=new GLTexture(canvas)}return _blackTexture},exports.default=GLTexture},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_parseDds=__webpack_require__(49),_parseDds2=_interopRequireDefault(_parseDds),gl=void 0,GLCubeTexture=function(){function GLCubeTexture(mSource){var mParameters=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},isCubeTexture=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(_classCallCheck(this,GLCubeTexture),gl=_GLTool2.default.gl,isCubeTexture)return void(this.texture=mSource);var hasMipmaps=mSource.length>6;mSource[0].mipmapCount&&(hasMipmaps=mSource[0].mipmapCount>1),this.texture=gl.createTexture(),this.magFilter=mParameters.magFilter||gl.LINEAR,this.minFilter=mParameters.minFilter||gl.LINEAR_MIPMAP_LINEAR,this.wrapS=mParameters.wrapS||gl.CLAMP_TO_EDGE,this.wrapT=mParameters.wrapT||gl.CLAMP_TO_EDGE,hasMipmaps||this.minFilter!=gl.LINEAR_MIPMAP_LINEAR||(this.minFilter=gl.LINEAR),gl.bindTexture(gl.TEXTURE_CUBE_MAP,this.texture);var targets=[gl.TEXTURE_CUBE_MAP_POSITIVE_X,gl.TEXTURE_CUBE_MAP_NEGATIVE_X,gl.TEXTURE_CUBE_MAP_POSITIVE_Y,gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,gl.TEXTURE_CUBE_MAP_POSITIVE_Z,gl.TEXTURE_CUBE_MAP_NEGATIVE_Z],numLevels=1,index=0;if(numLevels=mSource.length/6,this.numLevels=numLevels,hasMipmaps)for(var j=0;j<6;j++)for(var i=0;i<numLevels;i++)gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,!1),index=j*numLevels+i,mSource[index].shape?gl.texImage2D(targets[j],i,gl.RGBA,mSource[index].shape[0],mSource[index].shape[1],0,gl.RGBA,gl.FLOAT,mSource[index].data):gl.texImage2D(targets[j],i,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,mSource[index]),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_S,this.wrapS),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_T,this.wrapT),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MAG_FILTER,this.magFilter),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MIN_FILTER,this.minFilter);else{for(var _index=0,_j=0;_j<6;_j++)_index=_j*numLevels,gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,!1),mSource[_index].shape?gl.texImage2D(targets[_j],0,gl.RGBA,mSource[_index].shape[0],mSource[_index].shape[1],0,gl.RGBA,gl.FLOAT,mSource[_index].data):gl.texImage2D(targets[_j],0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,mSource[_index]),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_S,this.wrapS),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_T,this.wrapT),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MAG_FILTER,this.magFilter),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MIN_FILTER,this.minFilter);gl.generateMipmap(gl.TEXTURE_CUBE_MAP)}gl.bindTexture(gl.TEXTURE_CUBE_MAP,null)}return _createClass(GLCubeTexture,[{key:"bind",value:function(){var index=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;_GLTool2.default.shader&&(gl.activeTexture(gl.TEXTURE0+index),gl.bindTexture(gl.TEXTURE_CUBE_MAP,this.texture),gl.uniform1i(_GLTool2.default.shader.uniformTextures[index],index),this._bindIndex=index)}},{key:"unbind",value:function(){gl.bindTexture(gl.TEXTURE_CUBE_MAP,null)}}]),GLCubeTexture}();GLCubeTexture.parseDDS=function(mArrayBuffer){var ddsInfos=(0,_parseDds2.default)(mArrayBuffer),flags=ddsInfos.flags,header=new Int32Array(mArrayBuffer,0,31),mipmapCount=1;131072&flags&&(mipmapCount=Math.max(1,header[7]));var sources=ddsInfos.images.map(function(img){return{data:new Float32Array(mArrayBuffer.slice(img.offset,img.offset+img.length)),shape:img.shape,mipmapCount:mipmapCount}});return new GLCubeTexture(sources)},exports.default=GLCubeTexture},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_GLTexture=__webpack_require__(23),_GLTexture2=_interopRequireDefault(_GLTexture),_WebglNumber=__webpack_require__(8),gl=(_interopRequireDefault(_WebglNumber),void 0),webglDepthTexture=void 0,hasCheckedMultiRenderSupport=!1,extDrawBuffer=void 0,checkMultiRender=function(){return!!_GLTool2.default.webgl2||!!(extDrawBuffer=_GLTool2.default.getExtension("WEBGL_draw_buffers"))},FrameBuffer=function(){function FrameBuffer(mWidth,mHeight){var mParameters=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},mNumTargets=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;_classCallCheck(this,FrameBuffer),gl=_GLTool2.default.gl,webglDepthTexture=_GLTool2.default.checkExtension("WEBGL_depth_texture")||_GLTool2.default.webgl2,this.width=mWidth,this.height=mHeight,this._numTargets=mNumTargets,this._multipleTargets=mNumTargets>1,this._parameters=mParameters,hasCheckedMultiRenderSupport||checkMultiRender(),this._multipleTargets&&this._checkMaxNumRenderTarget(),this._init()}return _createClass(FrameBuffer,[{key:"_init",value:function(){if(this._initTextures(),this.frameBuffer=gl.createFramebuffer(),gl.bindFramebuffer(gl.FRAMEBUFFER,this.frameBuffer),_GLTool2.default.webgl2){for(var buffers=[],i=0;i<this._numTargets;i++)gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER,gl.COLOR_ATTACHMENT0+i,gl.TEXTURE_2D,this._textures[i].texture,0),buffers.push(gl["COLOR_ATTACHMENT"+i]);gl.drawBuffers(buffers),gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.TEXTURE_2D,this.glDepthTexture.texture,0)}else{for(var _i=0;_i<this._numTargets;_i++)gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0+_i,gl.TEXTURE_2D,this._textures[_i].texture,0);if(this._multipleTargets){for(var drawBuffers=[],_i2=0;_i2<this._numTargets;_i2++)drawBuffers.push(extDrawBuffer["COLOR_ATTACHMENT"+_i2+"_WEBGL"]);extDrawBuffer.drawBuffersWEBGL(drawBuffers)}webglDepthTexture&&gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.TEXTURE_2D,this.glDepthTexture.texture,0)}var FBOstatus=gl.checkFramebufferStatus(gl.FRAMEBUFFER);FBOstatus!=gl.FRAMEBUFFER_COMPLETE&&(console.error("FBOstatus",FBOstatus),console.error("GL_FRAMEBUFFER_COMPLETE failed, CANNOT use Framebuffer")),gl.bindTexture(gl.TEXTURE_2D,null),gl.bindRenderbuffer(gl.RENDERBUFFER,null),gl.bindFramebuffer(gl.FRAMEBUFFER,null),this.clear()}},{key:"_checkMaxNumRenderTarget",value:function(){var maxNumDrawBuffers=_GLTool2.default.gl.getParameter(extDrawBuffer.MAX_DRAW_BUFFERS_WEBGL);this._numTargets>maxNumDrawBuffers&&(console.error("Over max number of draw buffers supported : ",maxNumDrawBuffers),this._numTargets=maxNumDrawBuffers)}},{key:"_initTextures",value:function(){this._textures=[];for(var i=0;i<this._numTargets;i++){var glt=this._createTexture();this._textures.push(glt)}_GLTool2.default.webgl2?this.glDepthTexture=this._createTexture(gl.DEPTH_COMPONENT16,gl.UNSIGNED_SHORT,gl.DEPTH_COMPONENT,{minFilter:_GLTool2.default.NEAREST,magFilter:_GLTool2.default.NEAREST,mipmap:!1}):this.glDepthTexture=this._createTexture(gl.DEPTH_COMPONENT,gl.UNSIGNED_SHORT,gl.DEPTH_COMPONENT,{minFilter:_GLTool2.default.LINEAR})}},{key:"_createTexture",value:function(mInternalformat,mTexelType,mFormat){var mParameters=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},parameters=Object.assign({},this._parameters);mFormat||(mFormat=mInternalformat),parameters.internalFormat=mInternalformat||gl.RGBA,parameters.format=mFormat,parameters.type=parameters.type||mTexelType||_GLTool2.default.UNSIGNED_BYTE,mTexelType===gl.UNSIGNED_SHORT&&(parameters.type=mTexelType);for(var s in mParameters)parameters[s]=mParameters[s];return new _GLTexture2.default(null,parameters,this.width,this.height)}},{key:"bind",value:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&_GLTool2.default.viewport(0,0,this.width,this.height),gl.bindFramebuffer(gl.FRAMEBUFFER,this.frameBuffer)}},{key:"unbind",value:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&_GLTool2.default.viewport(0,0,_GLTool2.default.width,_GLTool2.default.height),gl.bindFramebuffer(gl.FRAMEBUFFER,null),this._textures.forEach(function(texture){texture.generateMipmap()})}},{key:"clear",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,g=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,b=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this.bind(),_GLTool2.default.clear(r,g,b,a),this.unbind()}},{key:"getTexture",value:function(){var mIndex=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this._textures[mIndex]}},{key:"getDepthTexture",value:function(){return this.glDepthTexture}},{key:"showParameters",value:function(){this._textures[0].showParameters()}},{key:"texture",get:function(){return this._textures[0]}},{key:"depthTexture",get:function(){return this.glDepthTexture}},{key:"minFilter",get:function(){return this._textures[0].minFilter},set:function(mValue){this._textures.forEach(function(texture){texture.minFilter=mValue})}},{key:"magFilter",get:function(){return this._textures[0].magFilter},set:function(mValue){this._textures.forEach(function(texture){texture.magFilter=mValue})}},{key:"wrapS",get:function(){return this._textures[0].wrapS},set:function(mValue){this._textures.forEach(function(texture){texture.wrapS=mValue})}},{key:"wrapT",get:function(){return this._textures[0].wrapT},set:function(mValue){this._textures.forEach(function(texture){texture.wrapT=mValue})}},{key:"numTargets",get:function(){return this._numTargets}}]),FrameBuffer}();exports.default=FrameBuffer},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),supportsCustomEvents=!0;try{document.createEvent("CustomEvent");null}catch(e){supportsCustomEvents=!1}var EventDispatcher=function(){function EventDispatcher(){_classCallCheck(this,EventDispatcher),this._eventListeners={}}return _createClass(EventDispatcher,[{key:"addEventListener",value:function(aEventType,aFunction){return null!==this._eventListeners&&void 0!==this._eventListeners||(this._eventListeners={}),this._eventListeners[aEventType]||(this._eventListeners[aEventType]=[]),this._eventListeners[aEventType].push(aFunction),this}},{key:"on",value:function(aEventType,aFunction){return this.addEventListener(aEventType,aFunction)}},{key:"removeEventListener",value:function(aEventType,aFunction){null!==this._eventListeners&&void 0!==this._eventListeners||(this._eventListeners={});var currentArray=this._eventListeners[aEventType];if(void 0===currentArray)return this;for(var currentArrayLength=currentArray.length,i=0;i<currentArrayLength;i++)currentArray[i]===aFunction&&(currentArray.splice(i,1),i--,currentArrayLength--);return this}},{key:"off",value:function(aEventType,aFunction){return this.removeEventListener(aEventType,aFunction)}},{key:"dispatchEvent",value:function(aEvent){null!==this._eventListeners&&void 0!==this._eventListeners||(this._eventListeners={});var eventType=aEvent.type;try{null===aEvent.target&&(aEvent.target=this),aEvent.currentTarget=this}catch(theError){var newEvent={type:eventType,detail:aEvent.detail,dispatcher:this};return this.dispatchEvent(newEvent)}var currentEventListeners=this._eventListeners[eventType];if(null!==currentEventListeners&&void 0!==currentEventListeners)for(var currentArray=this._copyArray(currentEventListeners),currentArrayLength=currentArray.length,i=0;i<currentArrayLength;i++){var currentFunction=currentArray[i];currentFunction.call(this,aEvent)}return this}},{key:"dispatchCustomEvent",value:function(aEventType,aDetail){var newEvent=void 0;return supportsCustomEvents?(newEvent=document.createEvent("CustomEvent"),newEvent.dispatcher=this,newEvent.initCustomEvent(aEventType,!1,!1,aDetail)):newEvent={type:aEventType,detail:aDetail,dispatcher:this},this.dispatchEvent(newEvent)}},{key:"trigger",value:function(aEventType,aDetail){return this.dispatchCustomEvent(aEventType,aDetail)}},{key:"_destroy",value:function(){if(null!==this._eventListeners){for(var objectName in this._eventListeners)if(this._eventListeners.hasOwnProperty(objectName)){for(var currentArray=this._eventListeners[objectName],currentArrayLength=currentArray.length,i=0;i<currentArrayLength;i++)currentArray[i]=null;delete this._eventListeners[objectName]}this._eventListeners=null}}},{key:"_copyArray",value:function(aArray){for(var currentArray=new Array(aArray.length),currentArrayLength=currentArray.length,i=0;i<currentArrayLength;i++)currentArray[i]=aArray[i];return currentArray}}]),EventDispatcher}();exports.default=EventDispatcher},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_EaseNumber=__webpack_require__(10),_EaseNumber2=_interopRequireDefault(_EaseNumber),_scheduling=__webpack_require__(4),_scheduling2=_interopRequireDefault(_scheduling),_glMatrix=__webpack_require__(2),getMouse=function(mEvent,mTarget){var o=mTarget||{};return mEvent.touches?(o.x=mEvent.touches[0].pageX,o.y=mEvent.touches[0].pageY):(o.x=mEvent.clientX,o.y=mEvent.clientY),o},OrbitalControl=function(){function OrbitalControl(mTarget){var _this=this,mListenerTarget=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,mRadius=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500;_classCallCheck(this,OrbitalControl),this._target=mTarget,this._listenerTarget=mListenerTarget,this._mouse={},this._preMouse={},this.center=_glMatrix.vec3.create(),this._up=_glMatrix.vec3.fromValues(0,1,0),this.radius=new _EaseNumber2.default(mRadius),this.position=_glMatrix.vec3.fromValues(0,0,this.radius.value),this.positionOffset=_glMatrix.vec3.create(),this._rx=new _EaseNumber2.default(0),this._rx.limit(-Math.PI/2,Math.PI/2),this._ry=new _EaseNumber2.default(0),this._preRX=0,this._preRY=0,this._isLockZoom=!1,this._isLockRotation=!1,this._isInvert=!1,this.sensitivity=1,this._wheelBind=function(e){return _this._onWheel(e)},this._downBind=function(e){return _this._onDown(e)},this._moveBind=function(e){return _this._onMove(e)},this._upBind=function(){return _this._onUp()},this.connect(),_scheduling2.default.addEF(function(){return _this._loop()})}return _createClass(OrbitalControl,[{key:"connect",value:function(){this.disconnect(),this._listenerTarget.addEventListener("mousewheel",this._wheelBind),this._listenerTarget.addEventListener("DOMMouseScroll",this._wheelBind),this._listenerTarget.addEventListener("mousedown",this._downBind),this._listenerTarget.addEventListener("touchstart",this._downBind),this._listenerTarget.addEventListener("mousemove",this._moveBind),this._listenerTarget.addEventListener("touchmove",this._moveBind),window.addEventListener("touchend",this._upBind),window.addEventListener("mouseup",this._upBind)}},{key:"disconnect",value:function(){this._listenerTarget.removeEventListener("mousewheel",this._wheelBind),this._listenerTarget.removeEventListener("DOMMouseScroll",this._wheelBind),this._listenerTarget.removeEventListener("mousedown",this._downBind),this._listenerTarget.removeEventListener("touchstart",this._downBind),this._listenerTarget.removeEventListener("mousemove",this._moveBind),this._listenerTarget.removeEventListener("touchmove",this._moveBind),window.removeEventListener("touchend",this._upBind),window.removeEventListener("mouseup",this._upBind)}},{key:"lock",value:function(){var mValue=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._isLockZoom=mValue,this._isLockRotation=mValue,this._isMouseDown=!1}},{key:"lockZoom",value:function(){var mValue=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._isLockZoom=mValue}},{key:"lockRotation",value:function(){var mValue=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._isLockRotation=mValue}},{key:"inverseControl",value:function(){var isInvert=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._isInvert=isInvert}},{key:"_onDown",value:function(mEvent){this._isLockRotation||(this._isMouseDown=!0,getMouse(mEvent,this._mouse),getMouse(mEvent,this._preMouse),this._preRX=this._rx.targetValue,this._preRY=this._ry.targetValue)}},{key:"_onMove",value:function(mEvent){if(!this._isLockRotation&&(getMouse(mEvent,this._mouse),mEvent.touches&&mEvent.preventDefault(),this._isMouseDown)){var diffX=-(this._mouse.x-this._preMouse.x);this._isInvert&&(diffX*=-1),this._ry.value=this._preRY-.01*diffX*this.sensitivity;var diffY=-(this._mouse.y-this._preMouse.y);this._isInvert&&(diffY*=-1),this._rx.value=this._preRX-.01*diffY*this.sensitivity}}},{key:"_onUp",value:function(){this._isLockRotation||(this._isMouseDown=!1)}},{key:"_onWheel",value:function(mEvent){if(!this._isLockZoom){var w=mEvent.wheelDelta,d=mEvent.detail,value=0;value=d?w?w/d/40*d>0?1:-1:-d/3:w/120,this.radius.add(2*-value)}}},{key:"_loop",value:function(){this._updatePosition(),this._target&&this._updateCamera()}},{key:"_updatePosition",value:function(){this.position[1]=Math.sin(this._rx.value)*this.radius.value;var tr=Math.cos(this._rx.value)*this.radius.value;this.position[0]=Math.cos(this._ry.value+.5*Math.PI)*tr,this.position[2]=Math.sin(this._ry.value+.5*Math.PI)*tr,_glMatrix.vec3.add(this.position,this.position,this.positionOffset)}},{key:"_updateCamera",value:function(){this._target.lookAt(this.position,this.center,this._up)}},{key:"rx",get:function(){return this._rx}},{key:"ry",get:function(){return this._ry}}]),OrbitalControl}();exports.default=OrbitalControl},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Camera2=__webpack_require__(12),_Camera3=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_Camera2),_glMatrix=__webpack_require__(2),CameraOrtho=function(_Camera){function CameraOrtho(){_classCallCheck(this,CameraOrtho);var _this=_possibleConstructorReturn(this,(CameraOrtho.__proto__||Object.getPrototypeOf(CameraOrtho)).call(this)),eye=_glMatrix.vec3.clone([0,0,5]),center=_glMatrix.vec3.create(),up=_glMatrix.vec3.clone([0,1,0]);return _this.lookAt(eye,center,up),_this.ortho(-1,1,1,-1),_this}return _inherits(CameraOrtho,_Camera),_createClass(CameraOrtho,[{key:"setBoundary",value:function(left,right,top,bottom){var near=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.1,far=arguments.length>5&&void 0!==arguments[5]?arguments[5]:100;this.ortho(left,right,top,bottom,near,far)}},{key:"ortho",value:function(left,right,top,bottom){var near=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.1,far=arguments.length>5&&void 0!==arguments[5]?arguments[5]:100;this.left=left,this.right=right,this.top=top,this.bottom=bottom,mat4.ortho(this._projection,left,right,bottom,top,near,far)}}]),CameraOrtho}(_Camera3.default);exports.default=CameraOrtho},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_glMatrix=__webpack_require__(2),_scheduling=__webpack_require__(4),_scheduling2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_scheduling),Object3D=function(){function Object3D(){_classCallCheck(this,Object3D),this._needUpdate=!0,this._x=0,this._y=0,this._z=0,this._sx=1,this._sy=1,this._sz=1,this._rx=0,this._ry=0,this._rz=0,this._position=_glMatrix.vec3.create(),this._scale=_glMatrix.vec3.fromValues(1,1,1),this._rotation=_glMatrix.vec3.create(),this._matrix=_glMatrix.mat4.create(),this._matrixParent=_glMatrix.mat4.create(),this._matrixRotation=_glMatrix.mat4.create(),this._matrixScale=_glMatrix.mat4.create(),this._matrixTranslation=_glMatrix.mat4.create(),this._matrixQuaternion=_glMatrix.mat4.create(),this._quat=_glMatrix.quat.create(),this._children=[]}return _createClass(Object3D,[{key:"addChild",value:function(mChild){this._children.push(mChild)}},{key:"removeChild",value:function(mChild){var index=this._children.indexOf(mChild);if(-1==index)return void console.warn("Child no exist");this._children.splice(index,1)}},{key:"_update",value:function(){this._needUpdate&&(_glMatrix.vec3.set(this._scale,this._sx,this._sy,this._sz),_glMatrix.vec3.set(this._rotation,this._rx,this._ry,this._rz),_glMatrix.vec3.set(this._position,this._x,this._y,this._z),_glMatrix.mat4.identity(this._matrixTranslation,this._matrixTranslation),_glMatrix.mat4.identity(this._matrixScale,this._matrixScale),_glMatrix.mat4.identity(this._matrixRotation,this._matrixRotation),_glMatrix.mat4.rotateX(this._matrixRotation,this._matrixRotation,this._rx),_glMatrix.mat4.rotateY(this._matrixRotation,this._matrixRotation,this._ry),_glMatrix.mat4.rotateZ(this._matrixRotation,this._matrixRotation,this._rz),_glMatrix.mat4.fromQuat(this._matrixQuaternion,this._quat),_glMatrix.mat4.mul(this._matrixRotation,this._matrixQuaternion,this._matrixRotation),_glMatrix.mat4.scale(this._matrixScale,this._matrixScale,this._scale),_glMatrix.mat4.translate(this._matrixTranslation,this._matrixTranslation,this._position),_glMatrix.mat4.mul(this._matrix,this._matrixTranslation,this._matrixRotation),_glMatrix.mat4.mul(this._matrix,this._matrix,this._matrixScale),_glMatrix.mat4.mul(this._matrix,this._matrixParent,this._matrix),this.updateMatrix(),this._needUpdate=!1)}},{key:"updateMatrix",value:function(mParentMatrix){var _this=this;mParentMatrix&&(this._needUpdate=!0,_glMatrix.mat4.copy(this._matrixParent,mParentMatrix)),this._needUpdate&&this._children.forEach(function(child){child.updateMatrix(_this._matrix)})}},{key:"setRotationFromQuaternion",value:function(mQuat){var _this2=this;_glMatrix.quat.copy(this._quat,mQuat),this._needUpdate=!0,_scheduling2.default.next(function(){return _this2._update()})}},{key:"matrix",get:function(){return this._needUpdate&&this._update(),this._matrix}},{key:"x",get:function(){return this._x},set:function(mValue){var _this3=this;this._needUpdate=!0,this._x=mValue,_scheduling2.default.next(function(){return _this3._update()})}},{key:"y",get:function(){return this._y},set:function(mValue){var _this4=this;this._needUpdate=!0,this._y=mValue,_scheduling2.default.next(function(){return _this4._update()})}},{key:"z",get:function(){return this._z},set:function(mValue){var _this5=this;this._needUpdate=!0,this._z=mValue,_scheduling2.default.next(function(){return _this5._update()})}},{key:"scaleX",get:function(){return this._sx},set:function(mValue){var _this6=this;this._needUpdate=!0,this._sx=mValue,_scheduling2.default.next(function(){return _this6._update()})}},{key:"scaleY",get:function(){return this._sy},set:function(mValue){var _this7=this;this._needUpdate=!0,this._sy=mValue,_scheduling2.default.next(function(){return _this7._update()})}},{key:"scaleZ",get:function(){return this._sz},set:function(mValue){var _this8=this;this._needUpdate=!0,this._sz=mValue,_scheduling2.default.next(function(){return _this8._update()})}},{key:"rotationX",get:function(){return this._rx},set:function(mValue){var _this9=this;this._needUpdate=!0,this._rx=mValue,_scheduling2.default.next(function(){return _this9._update()})}},{key:"rotationY",get:function(){return this._ry},set:function(mValue){var _this10=this;this._needUpdate=!0,this._ry=mValue,_scheduling2.default.next(function(){return _this10._update()})}},{key:"rotationZ",get:function(){return this._rz},set:function(mValue){var _this11=this;this._needUpdate=!0,this._rz=mValue,_scheduling2.default.next(function(){return _this11._update()})}},{key:"children",get:function(){return this._children}}]),Object3D}();exports.default=Object3D},function(module,exports){module.exports="// bigTriangle.vert\n\n#define SHADER_NAME BIG_TRIANGLE_VERTEX\n\nprecision mediump float;\n#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vTextureCoord = aPosition * .5 + .5;\n}"},function(module,exports){module.exports="// generalWithNormal.vert\n\n#define SHADER_NAME GENERAL_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tvec3 pos      = aVertexPosition * scale;\n\tpos           += position;\n\tgl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n\t\n\tvTextureCoord = aTextureCoord;\n\tvNormal       = normalize(uNormalMatrix * aNormal);\n}"},function(module,exports){module.exports="// basic.vert\n\n#define SHADER_NAME SKYBOX_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tmat4 matView = uViewMatrix;\n\tmatView[3][0] = 0.0;\n\tmatView[3][1] = 0.0;\n\tmatView[3][2] = 0.0;\n\t\n\tgl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n\tvTextureCoord = aTextureCoord;\n\t\n\tvVertex = aVertexPosition;\n\tvNormal = aNormal;\n}"},function(module,exports){module.exports="// basic.frag\n\n#define SHADER_NAME SKYBOX_FRAGMENT\n\nprecision mediump float;\n#define GLSLIFY 1\nuniform samplerCube texture;\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\n\nvoid main(void) {\n    gl_FragColor = textureCube(texture, vVertex);\n}"},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_FrameBuffer=__webpack_require__(25),_FrameBuffer2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_FrameBuffer),FboArray=function(){function FboArray(mNum,width,height){var params=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},mNumTargets=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;_classCallCheck(this,FboArray),this._fbos=[];for(var i=0;i<mNum;i++){var fbo=new _FrameBuffer2.default(width,height,params,mNumTargets);this._fbos.push(fbo)}}return _createClass(FboArray,[{key:"swap",value:function(){var a=this._fbos.shift();this._fbos.push(a)}},{key:"read",get:function(){return this._fbos[this._fbos.length-1]}},{key:"write",get:function(){return this._fbos[0]}},{key:"all",get:function(){return this._fbos}}]),FboArray}();exports.default=FboArray},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.FboPingPong=exports.FboArray=exports.ShaderLibs=exports.Draw=exports.View3D=exports.View=exports.Scene=exports.BatchSky=exports.BatchSkybox=exports.BatchLine=exports.BatchDotsPlane=exports.BatchBall=exports.BatchAxis=exports.BatchCopy=exports.GLTFParser=exports.HDRLoader=exports.ObjLoader=exports.BinaryLoader=exports.Object3D=exports.Ray=exports.CameraCube=exports.CameraPerspective=exports.CameraOrtho=exports.Camera=exports.TouchDetector=exports.QuatRotation=exports.WebglNumber=exports.OrbitalControl=exports.TweenNumber=exports.SpringNumber=exports.EaseNumber=exports.EventDispatcher=exports.Scheduler=exports.TransformFeedbackObject=exports.MultisampleFrameBuffer=exports.CubeFrameBuffer=exports.FrameBuffer=exports.Batch=exports.Geom=exports.Mesh=exports.GLCubeTexture=exports.GLTexture=exports.GLShader=exports.GL=void 0;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_glMatrix=__webpack_require__(2),GLM=function(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}(_glMatrix),_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_GLShader=__webpack_require__(1),_GLShader2=_interopRequireDefault(_GLShader),_GLTexture=__webpack_require__(23),_GLTexture2=_interopRequireDefault(_GLTexture),_GLCubeTexture=__webpack_require__(24),_GLCubeTexture2=_interopRequireDefault(_GLCubeTexture),_Mesh=__webpack_require__(5),_Mesh2=_interopRequireDefault(_Mesh),_Geom=__webpack_require__(7),_Geom2=_interopRequireDefault(_Geom),_Batch=__webpack_require__(6),_Batch2=_interopRequireDefault(_Batch),_FrameBuffer=__webpack_require__(25),_FrameBuffer2=_interopRequireDefault(_FrameBuffer),_CubeFrameBuffer=__webpack_require__(50),_CubeFrameBuffer2=_interopRequireDefault(_CubeFrameBuffer),_MultisampleFrameBuffer=__webpack_require__(51),_MultisampleFrameBuffer2=_interopRequireDefault(_MultisampleFrameBuffer),_TransformFeedbackObject=__webpack_require__(53),_TransformFeedbackObject2=_interopRequireDefault(_TransformFeedbackObject),_scheduling=__webpack_require__(4),_scheduling2=_interopRequireDefault(_scheduling),_EventDispatcher=__webpack_require__(26),_EventDispatcher2=_interopRequireDefault(_EventDispatcher),_EaseNumber=__webpack_require__(10),_EaseNumber2=_interopRequireDefault(_EaseNumber),_SpringNumber=__webpack_require__(54),_SpringNumber2=_interopRequireDefault(_SpringNumber),_TweenNumber=__webpack_require__(55),_TweenNumber2=_interopRequireDefault(_TweenNumber),_OrbitalControl=__webpack_require__(27),_OrbitalControl2=_interopRequireDefault(_OrbitalControl),_QuatRotation=__webpack_require__(56),_QuatRotation2=_interopRequireDefault(_QuatRotation),_TouchDetector=__webpack_require__(57),_TouchDetector2=_interopRequireDefault(_TouchDetector),_WebglNumber=__webpack_require__(8),_WebglNumber2=_interopRequireDefault(_WebglNumber),_Camera=__webpack_require__(12),_Camera2=_interopRequireDefault(_Camera),_CameraOrtho=__webpack_require__(28),_CameraOrtho2=_interopRequireDefault(_CameraOrtho),_CameraPerspective=__webpack_require__(13),_CameraPerspective2=_interopRequireDefault(_CameraPerspective),_CameraCube=__webpack_require__(59),_CameraCube2=_interopRequireDefault(_CameraCube),_Ray=__webpack_require__(11),_Ray2=_interopRequireDefault(_Ray),_Object3D=__webpack_require__(29),_Object3D2=_interopRequireDefault(_Object3D),_BinaryLoader=__webpack_require__(14),_BinaryLoader2=_interopRequireDefault(_BinaryLoader),_ObjLoader=__webpack_require__(60),_ObjLoader2=_interopRequireDefault(_ObjLoader),_HDRLoader=__webpack_require__(61),_HDRLoader2=_interopRequireDefault(_HDRLoader),_GLTFParser=__webpack_require__(63),_GLTFParser2=_interopRequireDefault(_GLTFParser),_BatchCopy=__webpack_require__(64),_BatchCopy2=_interopRequireDefault(_BatchCopy),_BatchAxis=__webpack_require__(65),_BatchAxis2=_interopRequireDefault(_BatchAxis),_BatchBall=__webpack_require__(68),_BatchBall2=_interopRequireDefault(_BatchBall),_BatchDotsPlane=__webpack_require__(69),_BatchDotsPlane2=_interopRequireDefault(_BatchDotsPlane),_BatchLine=__webpack_require__(72),_BatchLine2=_interopRequireDefault(_BatchLine),_BatchSkybox=__webpack_require__(73),_BatchSkybox2=_interopRequireDefault(_BatchSkybox),_BatchSky=__webpack_require__(74),_BatchSky2=_interopRequireDefault(_BatchSky),_Scene=__webpack_require__(76),_Scene2=_interopRequireDefault(_Scene),_View=__webpack_require__(77),_View2=_interopRequireDefault(_View),_View3D=__webpack_require__(78),_View3D2=_interopRequireDefault(_View3D),_Draw=__webpack_require__(79),_Draw2=_interopRequireDefault(_Draw),_ShaderLibs=__webpack_require__(80),_ShaderLibs2=_interopRequireDefault(_ShaderLibs),_FboArray=__webpack_require__(34),_FboArray2=_interopRequireDefault(_FboArray),_FboPingPong=__webpack_require__(81),_FboPingPong2=_interopRequireDefault(_FboPingPong),Alfrid=function(){function Alfrid(){_classCallCheck(this,Alfrid),this.glm=GLM,this.GL=_GLTool2.default,this.GLTool=_GLTool2.default,this.GLShader=_GLShader2.default,this.GLTexture=_GLTexture2.default,this.GLCubeTexture=_GLCubeTexture2.default,this.Mesh=_Mesh2.default,this.Geom=_Geom2.default,this.Batch=_Batch2.default,this.FrameBuffer=_FrameBuffer2.default,this.CubeFrameBuffer=_CubeFrameBuffer2.default,this.Scheduler=_scheduling2.default,this.EventDispatcher=_EventDispatcher2.default,this.EaseNumber=_EaseNumber2.default,this.SpringNumber=_SpringNumber2.default,this.TweenNumber=_TweenNumber2.default,this.Camera=_Camera2.default,this.CameraOrtho=_CameraOrtho2.default,this.CameraPerspective=_CameraPerspective2.default,this.Ray=_Ray2.default,this.CameraCube=_CameraCube2.default,this.OrbitalControl=_OrbitalControl2.default,this.QuatRotation=_QuatRotation2.default,this.BinaryLoader=_BinaryLoader2.default,this.ObjLoader=_ObjLoader2.default,this.GLTFParser=_GLTFParser2.default,this.HDRLoader=_HDRLoader2.default,this.BatchCopy=_BatchCopy2.default,this.BatchAxis=_BatchAxis2.default,this.BatchBall=_BatchBall2.default,this.BatchBall=_BatchBall2.default,this.BatchLine=_BatchLine2.default,this.BatchSkybox=_BatchSkybox2.default,this.BatchSky=_BatchSky2.default,this.BatchDotsPlane=_BatchDotsPlane2.default,this.Scene=_Scene2.default,this.View=_View2.default,this.View3D=_View3D2.default,this.Draw=_Draw2.default,this.Object3D=_Object3D2.default,this.ShaderLibs=_ShaderLibs2.default,this.WebglNumber=_WebglNumber2.default,this.FboArray=_FboArray2.default,this.FboPingPong=_FboPingPong2.default,this.MultisampleFrameBuffer=_MultisampleFrameBuffer2.default,this.TransformFeedbackObject=_TransformFeedbackObject2.default;for(var s in GLM)GLM[s]&&(window[s]=GLM[s])}return _createClass(Alfrid,[{key:"log",value:function(){navigator.userAgent.indexOf("Chrome")>-1?console.log("%clib alfrid : VERSION 0.3.9","background: #193441; color: #FCFFF5"):console.log("lib alfrid : VERSION ","0.3.9"),console.log("%cClasses : ","color: #193441");for(var s in this)this[s]&&console.log("%c - "+s,"color: #3E606F")}}]),Alfrid}(),al=new Alfrid;exports.default=al,exports.GL=_GLTool2.default,exports.GLShader=_GLShader2.default,exports.GLTexture=_GLTexture2.default,exports.GLCubeTexture=_GLCubeTexture2.default,exports.Mesh=_Mesh2.default,exports.Geom=_Geom2.default,exports.Batch=_Batch2.default,exports.FrameBuffer=_FrameBuffer2.default,exports.CubeFrameBuffer=_CubeFrameBuffer2.default,exports.MultisampleFrameBuffer=_MultisampleFrameBuffer2.default,exports.TransformFeedbackObject=_TransformFeedbackObject2.default,exports.Scheduler=_scheduling2.default,exports.EventDispatcher=_EventDispatcher2.default,exports.EaseNumber=_EaseNumber2.default,exports.SpringNumber=_SpringNumber2.default,exports.TweenNumber=_TweenNumber2.default,exports.OrbitalControl=_OrbitalControl2.default,exports.WebglNumber=_WebglNumber2.default,exports.QuatRotation=_QuatRotation2.default,exports.TouchDetector=_TouchDetector2.default,exports.Camera=_Camera2.default,exports.CameraOrtho=_CameraOrtho2.default,exports.CameraPerspective=_CameraPerspective2.default,exports.CameraCube=_CameraCube2.default,exports.Ray=_Ray2.default,exports.Object3D=_Object3D2.default,exports.BinaryLoader=_BinaryLoader2.default,exports.ObjLoader=_ObjLoader2.default,exports.HDRLoader=_HDRLoader2.default,exports.GLTFParser=_GLTFParser2.default,exports.BatchCopy=_BatchCopy2.default,exports.BatchAxis=_BatchAxis2.default,exports.BatchBall=_BatchBall2.default,exports.BatchDotsPlane=_BatchDotsPlane2.default,exports.BatchLine=_BatchLine2.default,exports.BatchSkybox=_BatchSkybox2.default,exports.BatchSky=_BatchSky2.default,exports.Scene=_Scene2.default,exports.View=_View2.default,exports.View3D=_View3D2.default,exports.Draw=_Draw2.default,exports.ShaderLibs=_ShaderLibs2.default,exports.FboArray=_FboArray2.default,exports.FboPingPong=_FboPingPong2.default},function(module,exports,__webpack_require__){"use strict";function create(){var out=new glMatrix.ARRAY_TYPE(4);return glMatrix.ARRAY_TYPE!=Float32Array&&(out[1]=0,out[2]=0),out[0]=1,out[3]=1,out}function clone(a){var out=new glMatrix.ARRAY_TYPE(4);return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out}function copy(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out}function identity(out){return out[0]=1,out[1]=0,out[2]=0,out[3]=1,out}function fromValues(m00,m01,m10,m11){var out=new glMatrix.ARRAY_TYPE(4);return out[0]=m00,out[1]=m01,out[2]=m10,out[3]=m11,out}function set(out,m00,m01,m10,m11){return out[0]=m00,out[1]=m01,out[2]=m10,out[3]=m11,out}function transpose(out,a){if(out===a){var a1=a[1];out[1]=a[2],out[2]=a1}else out[0]=a[0],out[1]=a[2],out[2]=a[1],out[3]=a[3];return out}function invert(out,a){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],det=a0*a3-a2*a1;return det?(det=1/det,out[0]=a3*det,out[1]=-a1*det,out[2]=-a2*det,out[3]=a0*det,out):null}function adjoint(out,a){var a0=a[0];return out[0]=a[3],out[1]=-a[1],out[2]=-a[2],out[3]=a0,out}function determinant(a){return a[0]*a[3]-a[2]*a[1]}function multiply(out,a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],b0=b[0],b1=b[1],b2=b[2],b3=b[3];return out[0]=a0*b0+a2*b1,out[1]=a1*b0+a3*b1,out[2]=a0*b2+a2*b3,out[3]=a1*b2+a3*b3,out}function rotate(out,a,rad){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],s=Math.sin(rad),c=Math.cos(rad);return out[0]=a0*c+a2*s,out[1]=a1*c+a3*s,out[2]=a0*-s+a2*c,out[3]=a1*-s+a3*c,out}function scale(out,a,v){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],v0=v[0],v1=v[1];return out[0]=a0*v0,out[1]=a1*v0,out[2]=a2*v1,out[3]=a3*v1,out}function fromRotation(out,rad){var s=Math.sin(rad),c=Math.cos(rad);return out[0]=c,out[1]=s,out[2]=-s,out[3]=c,out}function fromScaling(out,v){return out[0]=v[0],out[1]=0,out[2]=0,out[3]=v[1],out}function str(a){return"mat2("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"}function frob(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2))}function LDU(L,D,U,a){return L[2]=a[2]/a[0],U[0]=a[0],U[1]=a[1],U[3]=a[3]-L[2]*U[1],[L,D,U]}function add(out,a,b){return out[0]=a[0]+b[0],out[1]=a[1]+b[1],out[2]=a[2]+b[2],out[3]=a[3]+b[3],out}function subtract(out,a,b){return out[0]=a[0]-b[0],out[1]=a[1]-b[1],out[2]=a[2]-b[2],out[3]=a[3]-b[3],out}function exactEquals(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]}function equals(a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],b0=b[0],b1=b[1],b2=b[2],b3=b[3];return Math.abs(a0-b0)<=glMatrix.EPSILON*Math.max(1,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix.EPSILON*Math.max(1,Math.abs(a1),Math.abs(b1))&&Math.abs(a2-b2)<=glMatrix.EPSILON*Math.max(1,Math.abs(a2),Math.abs(b2))&&Math.abs(a3-b3)<=glMatrix.EPSILON*Math.max(1,Math.abs(a3),Math.abs(b3))}function multiplyScalar(out,a,b){return out[0]=a[0]*b,out[1]=a[1]*b,out[2]=a[2]*b,out[3]=a[3]*b,out}function multiplyScalarAndAdd(out,a,b,scale){return out[0]=a[0]+b[0]*scale,out[1]=a[1]+b[1]*scale,out[2]=a[2]+b[2]*scale,out[3]=a[3]+b[3]*scale,out}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sub=exports.mul=void 0,exports.create=create,exports.clone=clone,exports.copy=copy,exports.identity=identity,exports.fromValues=fromValues,exports.set=set,exports.transpose=transpose,exports.invert=invert,exports.adjoint=adjoint,exports.determinant=determinant,exports.multiply=multiply,exports.rotate=rotate,exports.scale=scale,exports.fromRotation=fromRotation,exports.fromScaling=fromScaling,exports.str=str,exports.frob=frob,exports.LDU=LDU,exports.add=add,exports.subtract=subtract,exports.exactEquals=exactEquals,exports.equals=equals,exports.multiplyScalar=multiplyScalar,exports.multiplyScalarAndAdd=multiplyScalarAndAdd;var _common=__webpack_require__(3),glMatrix=function(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}(_common);exports.mul=multiply,exports.sub=subtract},function(module,exports,__webpack_require__){"use strict";function create(){var out=new glMatrix.ARRAY_TYPE(6);return glMatrix.ARRAY_TYPE!=Float32Array&&(out[1]=0,out[2]=0,out[4]=0,out[5]=0),out[0]=1,out[3]=1,out}function clone(a){var out=new glMatrix.ARRAY_TYPE(6);return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[4]=a[4],out[5]=a[5],out}function copy(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[4]=a[4],out[5]=a[5],out}function identity(out){return out[0]=1,out[1]=0,out[2]=0,out[3]=1,out[4]=0,out[5]=0,out}function fromValues(a,b,c,d,tx,ty){var out=new glMatrix.ARRAY_TYPE(6);return out[0]=a,out[1]=b,out[2]=c,out[3]=d,out[4]=tx,out[5]=ty,out}function set(out,a,b,c,d,tx,ty){return out[0]=a,out[1]=b,out[2]=c,out[3]=d,out[4]=tx,out[5]=ty,out}function invert(out,a){var aa=a[0],ab=a[1],ac=a[2],ad=a[3],atx=a[4],aty=a[5],det=aa*ad-ab*ac;return det?(det=1/det,out[0]=ad*det,out[1]=-ab*det,out[2]=-ac*det,out[3]=aa*det,out[4]=(ac*aty-ad*atx)*det,out[5]=(ab*atx-aa*aty)*det,out):null}function determinant(a){return a[0]*a[3]-a[1]*a[2]}function multiply(out,a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],b0=b[0],b1=b[1],b2=b[2],b3=b[3],b4=b[4],b5=b[5];return out[0]=a0*b0+a2*b1,out[1]=a1*b0+a3*b1,out[2]=a0*b2+a2*b3,out[3]=a1*b2+a3*b3,out[4]=a0*b4+a2*b5+a4,out[5]=a1*b4+a3*b5+a5,out}function rotate(out,a,rad){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],s=Math.sin(rad),c=Math.cos(rad);return out[0]=a0*c+a2*s,out[1]=a1*c+a3*s,out[2]=a0*-s+a2*c,out[3]=a1*-s+a3*c,out[4]=a4,out[5]=a5,out}function scale(out,a,v){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],v0=v[0],v1=v[1];return out[0]=a0*v0,out[1]=a1*v0,out[2]=a2*v1,out[3]=a3*v1,out[4]=a4,out[5]=a5,out}function translate(out,a,v){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],v0=v[0],v1=v[1];return out[0]=a0,out[1]=a1,out[2]=a2,out[3]=a3,out[4]=a0*v0+a2*v1+a4,out[5]=a1*v0+a3*v1+a5,out}function fromRotation(out,rad){var s=Math.sin(rad),c=Math.cos(rad);return out[0]=c,out[1]=s,out[2]=-s,out[3]=c,out[4]=0,out[5]=0,out}function fromScaling(out,v){return out[0]=v[0],out[1]=0,out[2]=0,out[3]=v[1],out[4]=0,out[5]=0,out}function fromTranslation(out,v){return out[0]=1,out[1]=0,out[2]=0,out[3]=1,out[4]=v[0],out[5]=v[1],out}function str(a){return"mat2d("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+")"}function frob(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+1)}function add(out,a,b){return out[0]=a[0]+b[0],out[1]=a[1]+b[1],out[2]=a[2]+b[2],out[3]=a[3]+b[3],out[4]=a[4]+b[4],out[5]=a[5]+b[5],out}function subtract(out,a,b){return out[0]=a[0]-b[0],out[1]=a[1]-b[1],out[2]=a[2]-b[2],out[3]=a[3]-b[3],out[4]=a[4]-b[4],out[5]=a[5]-b[5],out}function multiplyScalar(out,a,b){return out[0]=a[0]*b,out[1]=a[1]*b,out[2]=a[2]*b,out[3]=a[3]*b,out[4]=a[4]*b,out[5]=a[5]*b,out}function multiplyScalarAndAdd(out,a,b,scale){return out[0]=a[0]+b[0]*scale,out[1]=a[1]+b[1]*scale,out[2]=a[2]+b[2]*scale,out[3]=a[3]+b[3]*scale,out[4]=a[4]+b[4]*scale,out[5]=a[5]+b[5]*scale,out}function exactEquals(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]}function equals(a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],b0=b[0],b1=b[1],b2=b[2],b3=b[3],b4=b[4],b5=b[5];return Math.abs(a0-b0)<=glMatrix.EPSILON*Math.max(1,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix.EPSILON*Math.max(1,Math.abs(a1),Math.abs(b1))&&Math.abs(a2-b2)<=glMatrix.EPSILON*Math.max(1,Math.abs(a2),Math.abs(b2))&&Math.abs(a3-b3)<=glMatrix.EPSILON*Math.max(1,Math.abs(a3),Math.abs(b3))&&Math.abs(a4-b4)<=glMatrix.EPSILON*Math.max(1,Math.abs(a4),Math.abs(b4))&&Math.abs(a5-b5)<=glMatrix.EPSILON*Math.max(1,Math.abs(a5),Math.abs(b5))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sub=exports.mul=void 0,exports.create=create,exports.clone=clone,exports.copy=copy,exports.identity=identity,exports.fromValues=fromValues,exports.set=set,exports.invert=invert,exports.determinant=determinant,exports.multiply=multiply,exports.rotate=rotate,exports.scale=scale,exports.translate=translate,exports.fromRotation=fromRotation,exports.fromScaling=fromScaling,exports.fromTranslation=fromTranslation,exports.str=str,exports.frob=frob,exports.add=add,exports.subtract=subtract,exports.multiplyScalar=multiplyScalar,exports.multiplyScalarAndAdd=multiplyScalarAndAdd,exports.exactEquals=exactEquals,exports.equals=equals;var _common=__webpack_require__(3),glMatrix=function(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}(_common);exports.mul=multiply,exports.sub=subtract},function(module,exports,__webpack_require__){"use strict";function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}function create(){var dq=new glMatrix.ARRAY_TYPE(8);return glMatrix.ARRAY_TYPE!=Float32Array&&(dq[0]=0,dq[1]=0,dq[2]=0,dq[4]=0,dq[5]=0,dq[6]=0,dq[7]=0),dq[3]=1,dq}function clone(a){var dq=new glMatrix.ARRAY_TYPE(8);return dq[0]=a[0],dq[1]=a[1],dq[2]=a[2],dq[3]=a[3],dq[4]=a[4],dq[5]=a[5],dq[6]=a[6],dq[7]=a[7],dq}function fromValues(x1,y1,z1,w1,x2,y2,z2,w2){var dq=new glMatrix.ARRAY_TYPE(8);return dq[0]=x1,dq[1]=y1,dq[2]=z1,dq[3]=w1,dq[4]=x2,dq[5]=y2,dq[6]=z2,dq[7]=w2,dq}function fromRotationTranslationValues(x1,y1,z1,w1,x2,y2,z2){var dq=new glMatrix.ARRAY_TYPE(8);dq[0]=x1,dq[1]=y1,dq[2]=z1,dq[3]=w1;var ax=.5*x2,ay=.5*y2,az=.5*z2;return dq[4]=ax*w1+ay*z1-az*y1,dq[5]=ay*w1+az*x1-ax*z1,dq[6]=az*w1+ax*y1-ay*x1,dq[7]=-ax*x1-ay*y1-az*z1,dq}function fromRotationTranslation(out,q,t){var ax=.5*t[0],ay=.5*t[1],az=.5*t[2],bx=q[0],by=q[1],bz=q[2],bw=q[3];return out[0]=bx,out[1]=by,out[2]=bz,out[3]=bw,out[4]=ax*bw+ay*bz-az*by,out[5]=ay*bw+az*bx-ax*bz,out[6]=az*bw+ax*by-ay*bx,out[7]=-ax*bx-ay*by-az*bz,out}function fromTranslation(out,t){return out[0]=0,out[1]=0,out[2]=0,out[3]=1,out[4]=.5*t[0],out[5]=.5*t[1],out[6]=.5*t[2],out[7]=0,out}function fromRotation(out,q){return out[0]=q[0],out[1]=q[1],out[2]=q[2],out[3]=q[3],out[4]=0,out[5]=0,out[6]=0,out[7]=0,out}function fromMat4(out,a){var outer=quat.create();mat4.getRotation(outer,a);var t=new glMatrix.ARRAY_TYPE(3);return mat4.getTranslation(t,a),fromRotationTranslation(out,outer,t),out}function copy(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[4]=a[4],out[5]=a[5],out[6]=a[6],out[7]=a[7],out}function identity(out){return out[0]=0,out[1]=0,out[2]=0,out[3]=1,out[4]=0,out[5]=0,out[6]=0,out[7]=0,out}function set(out,x1,y1,z1,w1,x2,y2,z2,w2){return out[0]=x1,out[1]=y1,out[2]=z1,out[3]=w1,out[4]=x2,out[5]=y2,out[6]=z2,out[7]=w2,out}function getDual(out,a){return out[0]=a[4],out[1]=a[5],out[2]=a[6],out[3]=a[7],out}function setDual(out,q){return out[4]=q[0],out[5]=q[1],out[6]=q[2],out[7]=q[3],out}function getTranslation(out,a){var ax=a[4],ay=a[5],az=a[6],aw=a[7],bx=-a[0],by=-a[1],bz=-a[2],bw=a[3];return out[0]=2*(ax*bw+aw*bx+ay*bz-az*by),out[1]=2*(ay*bw+aw*by+az*bx-ax*bz),out[2]=2*(az*bw+aw*bz+ax*by-ay*bx),out}function translate(out,a,v){var ax1=a[0],ay1=a[1],az1=a[2],aw1=a[3],bx1=.5*v[0],by1=.5*v[1],bz1=.5*v[2],ax2=a[4],ay2=a[5],az2=a[6],aw2=a[7];return out[0]=ax1,out[1]=ay1,out[2]=az1,out[3]=aw1,out[4]=aw1*bx1+ay1*bz1-az1*by1+ax2,out[5]=aw1*by1+az1*bx1-ax1*bz1+ay2,out[6]=aw1*bz1+ax1*by1-ay1*bx1+az2,out[7]=-ax1*bx1-ay1*by1-az1*bz1+aw2,out}function rotateX(out,a,rad){var bx=-a[0],by=-a[1],bz=-a[2],bw=a[3],ax=a[4],ay=a[5],az=a[6],aw=a[7],ax1=ax*bw+aw*bx+ay*bz-az*by,ay1=ay*bw+aw*by+az*bx-ax*bz,az1=az*bw+aw*bz+ax*by-ay*bx,aw1=aw*bw-ax*bx-ay*by-az*bz;return quat.rotateX(out,a,rad),bx=out[0],by=out[1],bz=out[2],bw=out[3],out[4]=ax1*bw+aw1*bx+ay1*bz-az1*by,out[5]=ay1*bw+aw1*by+az1*bx-ax1*bz,out[6]=az1*bw+aw1*bz+ax1*by-ay1*bx,out[7]=aw1*bw-ax1*bx-ay1*by-az1*bz,out}function rotateY(out,a,rad){var bx=-a[0],by=-a[1],bz=-a[2],bw=a[3],ax=a[4],ay=a[5],az=a[6],aw=a[7],ax1=ax*bw+aw*bx+ay*bz-az*by,ay1=ay*bw+aw*by+az*bx-ax*bz,az1=az*bw+aw*bz+ax*by-ay*bx,aw1=aw*bw-ax*bx-ay*by-az*bz;return quat.rotateY(out,a,rad),bx=out[0],by=out[1],bz=out[2],bw=out[3],out[4]=ax1*bw+aw1*bx+ay1*bz-az1*by,out[5]=ay1*bw+aw1*by+az1*bx-ax1*bz,out[6]=az1*bw+aw1*bz+ax1*by-ay1*bx,out[7]=aw1*bw-ax1*bx-ay1*by-az1*bz,out}function rotateZ(out,a,rad){var bx=-a[0],by=-a[1],bz=-a[2],bw=a[3],ax=a[4],ay=a[5],az=a[6],aw=a[7],ax1=ax*bw+aw*bx+ay*bz-az*by,ay1=ay*bw+aw*by+az*bx-ax*bz,az1=az*bw+aw*bz+ax*by-ay*bx,aw1=aw*bw-ax*bx-ay*by-az*bz;return quat.rotateZ(out,a,rad),bx=out[0],by=out[1],bz=out[2],bw=out[3],out[4]=ax1*bw+aw1*bx+ay1*bz-az1*by,out[5]=ay1*bw+aw1*by+az1*bx-ax1*bz,out[6]=az1*bw+aw1*bz+ax1*by-ay1*bx,out[7]=aw1*bw-ax1*bx-ay1*by-az1*bz,out}function rotateByQuatAppend(out,a,q){var qx=q[0],qy=q[1],qz=q[2],qw=q[3],ax=a[0],ay=a[1],az=a[2],aw=a[3];return out[0]=ax*qw+aw*qx+ay*qz-az*qy,out[1]=ay*qw+aw*qy+az*qx-ax*qz,out[2]=az*qw+aw*qz+ax*qy-ay*qx,out[3]=aw*qw-ax*qx-ay*qy-az*qz,ax=a[4],ay=a[5],az=a[6],aw=a[7],out[4]=ax*qw+aw*qx+ay*qz-az*qy,out[5]=ay*qw+aw*qy+az*qx-ax*qz,out[6]=az*qw+aw*qz+ax*qy-ay*qx,out[7]=aw*qw-ax*qx-ay*qy-az*qz,out}function rotateByQuatPrepend(out,q,a){var qx=q[0],qy=q[1],qz=q[2],qw=q[3],bx=a[0],by=a[1],bz=a[2],bw=a[3];return out[0]=qx*bw+qw*bx+qy*bz-qz*by,out[1]=qy*bw+qw*by+qz*bx-qx*bz,out[2]=qz*bw+qw*bz+qx*by-qy*bx,out[3]=qw*bw-qx*bx-qy*by-qz*bz,bx=a[4],by=a[5],bz=a[6],bw=a[7],out[4]=qx*bw+qw*bx+qy*bz-qz*by,out[5]=qy*bw+qw*by+qz*bx-qx*bz,out[6]=qz*bw+qw*bz+qx*by-qy*bx,out[7]=qw*bw-qx*bx-qy*by-qz*bz,out}function rotateAroundAxis(out,a,axis,rad){if(Math.abs(rad)<glMatrix.EPSILON)return copy(out,a);var axisLength=Math.sqrt(axis[0]*axis[0]+axis[1]*axis[1]+axis[2]*axis[2]);rad*=.5;var s=Math.sin(rad),bx=s*axis[0]/axisLength,by=s*axis[1]/axisLength,bz=s*axis[2]/axisLength,bw=Math.cos(rad),ax1=a[0],ay1=a[1],az1=a[2],aw1=a[3];out[0]=ax1*bw+aw1*bx+ay1*bz-az1*by,out[1]=ay1*bw+aw1*by+az1*bx-ax1*bz,out[2]=az1*bw+aw1*bz+ax1*by-ay1*bx,out[3]=aw1*bw-ax1*bx-ay1*by-az1*bz;var ax=a[4],ay=a[5],az=a[6],aw=a[7];return out[4]=ax*bw+aw*bx+ay*bz-az*by,out[5]=ay*bw+aw*by+az*bx-ax*bz,out[6]=az*bw+aw*bz+ax*by-ay*bx,out[7]=aw*bw-ax*bx-ay*by-az*bz,out}function add(out,a,b){return out[0]=a[0]+b[0],out[1]=a[1]+b[1],out[2]=a[2]+b[2],out[3]=a[3]+b[3],out[4]=a[4]+b[4],out[5]=a[5]+b[5],out[6]=a[6]+b[6],out[7]=a[7]+b[7],out}function multiply(out,a,b){var ax0=a[0],ay0=a[1],az0=a[2],aw0=a[3],bx1=b[4],by1=b[5],bz1=b[6],bw1=b[7],ax1=a[4],ay1=a[5],az1=a[6],aw1=a[7],bx0=b[0],by0=b[1],bz0=b[2],bw0=b[3];return out[0]=ax0*bw0+aw0*bx0+ay0*bz0-az0*by0,out[1]=ay0*bw0+aw0*by0+az0*bx0-ax0*bz0,out[2]=az0*bw0+aw0*bz0+ax0*by0-ay0*bx0,out[3]=aw0*bw0-ax0*bx0-ay0*by0-az0*bz0,out[4]=ax0*bw1+aw0*bx1+ay0*bz1-az0*by1+ax1*bw0+aw1*bx0+ay1*bz0-az1*by0,out[5]=ay0*bw1+aw0*by1+az0*bx1-ax0*bz1+ay1*bw0+aw1*by0+az1*bx0-ax1*bz0,out[6]=az0*bw1+aw0*bz1+ax0*by1-ay0*bx1+az1*bw0+aw1*bz0+ax1*by0-ay1*bx0,out[7]=aw0*bw1-ax0*bx1-ay0*by1-az0*bz1+aw1*bw0-ax1*bx0-ay1*by0-az1*bz0,out}function scale(out,a,b){return out[0]=a[0]*b,out[1]=a[1]*b,out[2]=a[2]*b,out[3]=a[3]*b,out[4]=a[4]*b,out[5]=a[5]*b,out[6]=a[6]*b,out[7]=a[7]*b,out}function lerp(out,a,b,t){var mt=1-t;return dot(a,b)<0&&(t=-t),out[0]=a[0]*mt+b[0]*t,out[1]=a[1]*mt+b[1]*t,out[2]=a[2]*mt+b[2]*t,out[3]=a[3]*mt+b[3]*t,out[4]=a[4]*mt+b[4]*t,out[5]=a[5]*mt+b[5]*t,out[6]=a[6]*mt+b[6]*t,out[7]=a[7]*mt+b[7]*t,out}function invert(out,a){var sqlen=squaredLength(a);return out[0]=-a[0]/sqlen,out[1]=-a[1]/sqlen,out[2]=-a[2]/sqlen,out[3]=a[3]/sqlen,out[4]=-a[4]/sqlen,out[5]=-a[5]/sqlen,out[6]=-a[6]/sqlen,out[7]=a[7]/sqlen,out}function conjugate(out,a){return out[0]=-a[0],out[1]=-a[1],out[2]=-a[2],out[3]=a[3],out[4]=-a[4],out[5]=-a[5],out[6]=-a[6],out[7]=a[7],out}function normalize(out,a){var magnitude=squaredLength(a);if(magnitude>0){magnitude=Math.sqrt(magnitude);var a0=a[0]/magnitude,a1=a[1]/magnitude,a2=a[2]/magnitude,a3=a[3]/magnitude,b0=a[4],b1=a[5],b2=a[6],b3=a[7],a_dot_b=a0*b0+a1*b1+a2*b2+a3*b3;out[0]=a0,out[1]=a1,out[2]=a2,out[3]=a3,out[4]=(b0-a0*a_dot_b)/magnitude,out[5]=(b1-a1*a_dot_b)/magnitude,out[6]=(b2-a2*a_dot_b)/magnitude,out[7]=(b3-a3*a_dot_b)/magnitude}return out}function str(a){return"quat2("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+")"}function exactEquals(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]}function equals(a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],a6=a[6],a7=a[7],b0=b[0],b1=b[1],b2=b[2],b3=b[3],b4=b[4],b5=b[5],b6=b[6],b7=b[7];return Math.abs(a0-b0)<=glMatrix.EPSILON*Math.max(1,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix.EPSILON*Math.max(1,Math.abs(a1),Math.abs(b1))&&Math.abs(a2-b2)<=glMatrix.EPSILON*Math.max(1,Math.abs(a2),Math.abs(b2))&&Math.abs(a3-b3)<=glMatrix.EPSILON*Math.max(1,Math.abs(a3),Math.abs(b3))&&Math.abs(a4-b4)<=glMatrix.EPSILON*Math.max(1,Math.abs(a4),Math.abs(b4))&&Math.abs(a5-b5)<=glMatrix.EPSILON*Math.max(1,Math.abs(a5),Math.abs(b5))&&Math.abs(a6-b6)<=glMatrix.EPSILON*Math.max(1,Math.abs(a6),Math.abs(b6))&&Math.abs(a7-b7)<=glMatrix.EPSILON*Math.max(1,Math.abs(a7),Math.abs(b7))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sqrLen=exports.squaredLength=exports.len=exports.length=exports.dot=exports.mul=exports.setReal=exports.getReal=void 0,exports.create=create,exports.clone=clone,exports.fromValues=fromValues,exports.fromRotationTranslationValues=fromRotationTranslationValues,exports.fromRotationTranslation=fromRotationTranslation,exports.fromTranslation=fromTranslation,exports.fromRotation=fromRotation,exports.fromMat4=fromMat4,exports.copy=copy,exports.identity=identity,exports.set=set,exports.getDual=getDual,exports.setDual=setDual,exports.getTranslation=getTranslation,exports.translate=translate,exports.rotateX=rotateX,exports.rotateY=rotateY,exports.rotateZ=rotateZ,exports.rotateByQuatAppend=rotateByQuatAppend,exports.rotateByQuatPrepend=rotateByQuatPrepend,exports.rotateAroundAxis=rotateAroundAxis,exports.add=add,exports.multiply=multiply,exports.scale=scale,exports.lerp=lerp,exports.invert=invert,exports.conjugate=conjugate,exports.normalize=normalize,exports.str=str,exports.exactEquals=exactEquals,exports.equals=equals;var _common=__webpack_require__(3),glMatrix=_interopRequireWildcard(_common),_quat=__webpack_require__(19),quat=_interopRequireWildcard(_quat),_mat=__webpack_require__(18),mat4=_interopRequireWildcard(_mat),dot=(exports.getReal=quat.copy,exports.setReal=quat.copy,exports.mul=multiply,exports.dot=quat.dot),length=exports.length=quat.length,squaredLength=(exports.len=length,exports.squaredLength=quat.squaredLength);exports.sqrLen=squaredLength},function(module,exports,__webpack_require__){"use strict";function create(){var out=new glMatrix.ARRAY_TYPE(2);return glMatrix.ARRAY_TYPE!=Float32Array&&(out[0]=0,out[1]=0),out}function clone(a){var out=new glMatrix.ARRAY_TYPE(2);return out[0]=a[0],out[1]=a[1],out}function fromValues(x,y){var out=new glMatrix.ARRAY_TYPE(2);return out[0]=x,out[1]=y,out}function copy(out,a){return out[0]=a[0],out[1]=a[1],out}function set(out,x,y){return out[0]=x,out[1]=y,out}function add(out,a,b){return out[0]=a[0]+b[0],out[1]=a[1]+b[1],out}function subtract(out,a,b){return out[0]=a[0]-b[0],out[1]=a[1]-b[1],out}function multiply(out,a,b){return out[0]=a[0]*b[0],out[1]=a[1]*b[1],out}function divide(out,a,b){return out[0]=a[0]/b[0],out[1]=a[1]/b[1],out}function ceil(out,a){return out[0]=Math.ceil(a[0]),out[1]=Math.ceil(a[1]),out}function floor(out,a){return out[0]=Math.floor(a[0]),out[1]=Math.floor(a[1]),out}function min(out,a,b){return out[0]=Math.min(a[0],b[0]),out[1]=Math.min(a[1],b[1]),out}function max(out,a,b){return out[0]=Math.max(a[0],b[0]),out[1]=Math.max(a[1],b[1]),out}function round(out,a){return out[0]=Math.round(a[0]),out[1]=Math.round(a[1]),out}function scale(out,a,b){return out[0]=a[0]*b,out[1]=a[1]*b,out}function scaleAndAdd(out,a,b,scale){return out[0]=a[0]+b[0]*scale,out[1]=a[1]+b[1]*scale,out}function distance(a,b){var x=b[0]-a[0],y=b[1]-a[1];return Math.sqrt(x*x+y*y)}function squaredDistance(a,b){var x=b[0]-a[0],y=b[1]-a[1];return x*x+y*y}function length(a){var x=a[0],y=a[1];return Math.sqrt(x*x+y*y)}function squaredLength(a){var x=a[0],y=a[1];return x*x+y*y}function negate(out,a){return out[0]=-a[0],out[1]=-a[1],out}function inverse(out,a){return out[0]=1/a[0],out[1]=1/a[1],out}function normalize(out,a){var x=a[0],y=a[1],len=x*x+y*y;return len>0&&(len=1/Math.sqrt(len),out[0]=a[0]*len,out[1]=a[1]*len),out}function dot(a,b){return a[0]*b[0]+a[1]*b[1]}function cross(out,a,b){var z=a[0]*b[1]-a[1]*b[0];return out[0]=out[1]=0,out[2]=z,out}function lerp(out,a,b,t){var ax=a[0],ay=a[1];return out[0]=ax+t*(b[0]-ax),out[1]=ay+t*(b[1]-ay),out}function random(out,scale){scale=scale||1;var r=2*glMatrix.RANDOM()*Math.PI;return out[0]=Math.cos(r)*scale,out[1]=Math.sin(r)*scale,out}function transformMat2(out,a,m){var x=a[0],y=a[1];return out[0]=m[0]*x+m[2]*y,out[1]=m[1]*x+m[3]*y,out}function transformMat2d(out,a,m){var x=a[0],y=a[1];return out[0]=m[0]*x+m[2]*y+m[4],out[1]=m[1]*x+m[3]*y+m[5],out}function transformMat3(out,a,m){var x=a[0],y=a[1];return out[0]=m[0]*x+m[3]*y+m[6],out[1]=m[1]*x+m[4]*y+m[7],out}function transformMat4(out,a,m){var x=a[0],y=a[1];return out[0]=m[0]*x+m[4]*y+m[12],out[1]=m[1]*x+m[5]*y+m[13],out}function rotate(out,a,b,c){var p0=a[0]-b[0],p1=a[1]-b[1],sinC=Math.sin(c),cosC=Math.cos(c);return out[0]=p0*cosC-p1*sinC+b[0],out[1]=p0*sinC+p1*cosC+b[1],out}function angle(a,b){var x1=a[0],y1=a[1],x2=b[0],y2=b[1],len1=x1*x1+y1*y1;len1>0&&(len1=1/Math.sqrt(len1));var len2=x2*x2+y2*y2;len2>0&&(len2=1/Math.sqrt(len2));var cosine=(x1*x2+y1*y2)*len1*len2;return cosine>1?0:cosine<-1?Math.PI:Math.acos(cosine)}function str(a){return"vec2("+a[0]+", "+a[1]+")"}function exactEquals(a,b){return a[0]===b[0]&&a[1]===b[1]}function equals(a,b){var a0=a[0],a1=a[1],b0=b[0],b1=b[1];return Math.abs(a0-b0)<=glMatrix.EPSILON*Math.max(1,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix.EPSILON*Math.max(1,Math.abs(a1),Math.abs(b1))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.forEach=exports.sqrLen=exports.sqrDist=exports.dist=exports.div=exports.mul=exports.sub=exports.len=void 0,exports.create=create,exports.clone=clone,exports.fromValues=fromValues,exports.copy=copy,exports.set=set,exports.add=add,exports.subtract=subtract,exports.multiply=multiply,exports.divide=divide,exports.ceil=ceil,exports.floor=floor,exports.min=min,exports.max=max,exports.round=round,exports.scale=scale,exports.scaleAndAdd=scaleAndAdd,exports.distance=distance,exports.squaredDistance=squaredDistance,exports.length=length,exports.squaredLength=squaredLength,exports.negate=negate,exports.inverse=inverse,exports.normalize=normalize,exports.dot=dot,exports.cross=cross,exports.lerp=lerp,exports.random=random,exports.transformMat2=transformMat2,exports.transformMat2d=transformMat2d,exports.transformMat3=transformMat3,exports.transformMat4=transformMat4,exports.rotate=rotate,exports.angle=angle,exports.str=str,exports.exactEquals=exactEquals,exports.equals=equals;var _common=__webpack_require__(3),glMatrix=function(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}(_common);exports.len=length,exports.sub=subtract,exports.mul=multiply,exports.div=divide,exports.dist=distance,exports.sqrDist=squaredDistance,exports.sqrLen=squaredLength,exports.forEach=function(){var vec=create();return function(a,stride,offset,count,fn,arg){var i=void 0,l=void 0;for(stride||(stride=2),offset||(offset=0),l=count?Math.min(count*stride+offset,a.length):a.length,i=offset;i<l;i+=stride)vec[0]=a[i],vec[1]=a[i+1],fn(vec,vec,arg),a[i]=vec[0],a[i+1]=vec[1];return a}}()},function(module,exports,__webpack_require__){"use strict";function getAndApplyExtension(gl,name){var ext=gl.getExtension(name);if(!ext)return!1;var suffix=name.split("_")[0],suffixRE=new RegExp(suffix+"$");for(var key in ext){if("function"==typeof ext[key]){var unsuffixedKey=key.replace(suffixRE,"");key.substring&&(gl[unsuffixedKey]=ext[key].bind(ext))}}return!0}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=getAndApplyExtension},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_WebglConst=__webpack_require__(42),_WebglConst2=_interopRequireDefault(_WebglConst),exposeAttributes=function(){for(var s in _WebglConst2.default)_GLTool2.default[s]?"FLOAT"!==s&&console.log("already exist : ",s):_GLTool2.default[s]=_WebglConst2.default[s]};exports.default=exposeAttributes},function(module,exports,__webpack_require__){"use strict";module.exports={ACTIVE_ATTRIBUTES:35721,ACTIVE_ATTRIBUTE_MAX_LENGTH:35722,ACTIVE_TEXTURE:34016,ACTIVE_UNIFORMS:35718,ACTIVE_UNIFORM_MAX_LENGTH:35719,ALIASED_LINE_WIDTH_RANGE:33902,ALIASED_POINT_SIZE_RANGE:33901,ALPHA:6406,ALPHA_BITS:3413,ALWAYS:519,ARRAY_BUFFER:34962,ARRAY_BUFFER_BINDING:34964,ATTACHED_SHADERS:35717,BACK:1029,BLEND:3042,BLEND_COLOR:32773,BLEND_DST_ALPHA:32970,BLEND_DST_RGB:32968,BLEND_EQUATION:32777,BLEND_EQUATION_ALPHA:34877,BLEND_EQUATION_RGB:32777,BLEND_SRC_ALPHA:32971,BLEND_SRC_RGB:32969,BLUE_BITS:3412,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,BROWSER_DEFAULT_WEBGL:37444,BUFFER_SIZE:34660,BUFFER_USAGE:34661,BYTE:5120,CCW:2305,CLAMP_TO_EDGE:33071,COLOR_ATTACHMENT0:36064,COLOR_BUFFER_BIT:16384,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,COMPILE_STATUS:35713,COMPRESSED_TEXTURE_FORMATS:34467,CONSTANT_ALPHA:32771,CONSTANT_COLOR:32769,CONTEXT_LOST_WEBGL:37442,CULL_FACE:2884,CULL_FACE_MODE:2885,CURRENT_PROGRAM:35725,CURRENT_VERTEX_ATTRIB:34342,CW:2304,DECR:7683,DECR_WRAP:34056,DELETE_STATUS:35712,DEPTH_ATTACHMENT:36096,DEPTH_BITS:3414,DEPTH_BUFFER_BIT:256,DEPTH_CLEAR_VALUE:2931,DEPTH_COMPONENT:6402,RED:6403,DEPTH_COMPONENT16:33189,DEPTH_FUNC:2932,DEPTH_RANGE:2928,DEPTH_STENCIL:34041,DEPTH_STENCIL_ATTACHMENT:33306,DEPTH_TEST:2929,DEPTH_WRITEMASK:2930,DITHER:3024,DONT_CARE:4352,DST_ALPHA:772,DST_COLOR:774,DYNAMIC_DRAW:35048,ELEMENT_ARRAY_BUFFER:34963,ELEMENT_ARRAY_BUFFER_BINDING:34965,EQUAL:514,FASTEST:4353,FLOAT:5126,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,FRAGMENT_SHADER:35632,FRAMEBUFFER:36160,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_BINDING:36006,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_UNSUPPORTED:36061,FRONT:1028,FRONT_AND_BACK:1032,FRONT_FACE:2886,FUNC_ADD:32774,FUNC_REVERSE_SUBTRACT:32779,FUNC_SUBTRACT:32778,GENERATE_MIPMAP_HINT:33170,GEQUAL:518,GREATER:516,GREEN_BITS:3411,HIGH_FLOAT:36338,HIGH_INT:36341,INCR:7682,INCR_WRAP:34055,INFO_LOG_LENGTH:35716,INT:5124,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,INVALID_ENUM:1280,INVALID_FRAMEBUFFER_OPERATION:1286,INVALID_OPERATION:1282,INVALID_VALUE:1281,INVERT:5386,KEEP:7680,LEQUAL:515,LESS:513,LINEAR:9729,LINEAR_MIPMAP_LINEAR:9987,LINEAR_MIPMAP_NEAREST:9985,LINES:1,LINE_LOOP:2,LINE_STRIP:3,LINE_WIDTH:2849,LINK_STATUS:35714,LOW_FLOAT:36336,LOW_INT:36339,LUMINANCE:6409,LUMINANCE_ALPHA:6410,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_CUBE_MAP_TEXTURE_SIZE:34076,MAX_FRAGMENT_UNIFORM_VECTORS:36349,MAX_RENDERBUFFER_SIZE:34024,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_TEXTURE_SIZE:3379,MAX_VARYING_VECTORS:36348,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VIEWPORT_DIMS:3386,MEDIUM_FLOAT:36337,MEDIUM_INT:36340,MIRRORED_REPEAT:33648,NEAREST:9728,NEAREST_MIPMAP_LINEAR:9986,NEAREST_MIPMAP_NEAREST:9984,NEVER:512,NICEST:4354,NONE:0,NOTEQUAL:517,NO_ERROR:0,NUM_COMPRESSED_TEXTURE_FORMATS:34466,ONE:1,ONE_MINUS_CONSTANT_ALPHA:32772,ONE_MINUS_CONSTANT_COLOR:32770,ONE_MINUS_DST_ALPHA:773,ONE_MINUS_DST_COLOR:775,ONE_MINUS_SRC_ALPHA:771,ONE_MINUS_SRC_COLOR:769,OUT_OF_MEMORY:1285,PACK_ALIGNMENT:3333,POINTS:0,POLYGON_OFFSET_FACTOR:32824,POLYGON_OFFSET_FILL:32823,POLYGON_OFFSET_UNITS:10752,RED_BITS:3410,RENDERBUFFER:36161,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_BINDING:36007,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_STENCIL_SIZE:36181,RENDERBUFFER_WIDTH:36162,RENDERER:7937,REPEAT:10497,REPLACE:7681,RGB:6407,RGB5_A1:32855,RGB565:36194,RGBA:6408,RGBA4:32854,SAMPLER_2D:35678,SAMPLER_CUBE:35680,SAMPLES:32937,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_BUFFERS:32936,SAMPLE_COVERAGE:32928,SAMPLE_COVERAGE_INVERT:32939,SAMPLE_COVERAGE_VALUE:32938,SCISSOR_BOX:3088,SCISSOR_TEST:3089,SHADER_COMPILER:36346,SHADER_SOURCE_LENGTH:35720,SHADER_TYPE:35663,SHADING_LANGUAGE_VERSION:35724,SHORT:5122,SRC_ALPHA:770,SRC_ALPHA_SATURATE:776,SRC_COLOR:768,STATIC_DRAW:35044,STENCIL_ATTACHMENT:36128,STENCIL_BACK_FAIL:34817,STENCIL_BACK_FUNC:34816,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,STENCIL_BITS:3415,STENCIL_BUFFER_BIT:1024,STENCIL_CLEAR_VALUE:2961,STENCIL_FAIL:2964,STENCIL_FUNC:2962,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_TEST:2960,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STREAM_DRAW:35040,SUBPIXEL_BITS:3408,TEXTURE:5890,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,TEXTURE_2D:3553,TEXTURE_BINDING_2D:32873,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP:34067,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TRIANGLES:4,TRIANGLE_FAN:6,TRIANGLE_STRIP:5,UNPACK_ALIGNMENT:3317,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,UNSIGNED_BYTE:5121,UNSIGNED_INT:5125,UNSIGNED_SHORT:5123,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,VALIDATE_STATUS:35715,VENDOR:7936,VERSION:7938,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_SHADER:35633,VIEWPORT:2978,ZERO:0,R8:33321}},function(module,exports,__webpack_require__){"use strict";function checkFloat(){return _GLTool2.default.webgl2?_GLTool2.default.gl.FLOAT:_GLTool2.default.getExtension("OES_texture_float")?_GLTool2.default.gl.FLOAT:(console.warn("USING FLOAT BUT OES_texture_float NOT SUPPORTED"),_GLTool2.default.gl.UNSIGNED_BYTE)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){return hasChecked||(_float=checkFloat()),_float};var _GLTool=__webpack_require__(0),_GLTool2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_GLTool),hasChecked=!1,_float=void 0},function(module,exports,__webpack_require__){"use strict";function checkHalfFloat(){if(_GLTool2.default.webgl2)return _GLTool2.default.gl.HALF_FLOAT;var extHalfFloat=_GLTool2.default.getExtension("OES_texture_half_float");return extHalfFloat?extHalfFloat.HALF_FLOAT_OES:(console.warn("USING HALF FLOAT BUT OES_texture_half_float NOT SUPPORTED"),_GLTool2.default.gl.UNSIGNED_BYTE)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){return hasChecked||(halfFloat=checkHalfFloat()),halfFloat};var _GLTool=__webpack_require__(0),_GLTool2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_GLTool),hasChecked=!1,halfFloat=void 0},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=["EXT_shader_texture_lod","EXT_sRGB","EXT_frag_depth","OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","WEBGL_depth_texture","EXT_texture_filter_anisotropic","OES_vertex_array_object","ANGLE_instanced_arrays","WEBGL_draw_buffers"]},function(module,exports,__webpack_require__){"use strict";module.exports=function(strings){"string"==typeof strings&&(strings=[strings]);for(var exprs=[].slice.call(arguments,1),parts=[],i=0;i<strings.length-1;i++)parts.push(strings[i],exprs[i]||"");return parts.push(strings[i]),parts.join("")}},function(module,exports){module.exports="// basic.frag\n\n#define SHADER_NAME BASIC_FRAGMENT\n\nprecision lowp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform float time;\n// uniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = vec4(vTextureCoord, sin(time) * .5 + .5, 1.0);\n}"},function(module,exports,__webpack_require__){"use strict";function isPowerOfTwo(x){return 0!==x&&!(x&x-1)}Object.defineProperty(exports,"__esModule",{value:!0});var _GLTool=__webpack_require__(0),_GLTool2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_GLTool),getTextureParameters=function(mParams,mSource,mWidth,mHeight){if(!mParams.minFilter){var minFilter=_GLTool2.default.LINEAR;mWidth&&mWidth&&isPowerOfTwo(mWidth)&&isPowerOfTwo(mHeight)&&(minFilter=_GLTool2.default.NEAREST_MIPMAP_LINEAR),mParams.minFilter=minFilter}return mParams.mipmap=void 0===mParams.mipmap||mParams.mipmap,mParams.magFilter=mParams.magFilter||_GLTool2.default.LINEAR,mParams.wrapS=mParams.wrapS||_GLTool2.default.CLAMP_TO_EDGE,mParams.wrapT=mParams.wrapT||_GLTool2.default.CLAMP_TO_EDGE,mParams.internalFormat=mParams.internalFormat||_GLTool2.default.RGBA,mParams.format=mParams.format||_GLTool2.default.RGBA,mParams.premultiplyAlpha=void 0!==mParams.premultiplyAlpha&&mParams.premultiplyAlpha,mParams.level=mParams.level||0,mParams};exports.default=getTextureParameters},function(module,exports,__webpack_require__){"use strict";function parseHeaders(arrayBuffer){var header=new Int32Array(arrayBuffer,0,headerLengthInt);if(header[off_magic]!==DDS_MAGIC)throw new Error("Invalid magic number in DDS header");if(!header[off_pfFlags]&DDPF_FOURCC)throw new Error("Unsupported format, must contain a FourCC code");var blockBytes,format,fourCC=header[off_pfFourCC];switch(fourCC){case FOURCC_DXT1:blockBytes=8,format="dxt1";break;case FOURCC_DXT3:blockBytes=16,format="dxt3";break;case FOURCC_DXT5:blockBytes=16,format="dxt5";break;case FOURCC_FP32F:format="rgba32f";break;case FOURCC_DX10:var dx10Header=new Uint32Array(arrayBuffer.slice(128,148));format=dx10Header[0];var resourceDimension=dx10Header[1];dx10Header[2],dx10Header[3],dx10Header[4];if(resourceDimension!==D3D10_RESOURCE_DIMENSION_TEXTURE2D||format!==DXGI_FORMAT_R32G32B32A32_FLOAT)throw new Error("Unsupported DX10 texture format "+format);format="rgba32f";break;default:throw new Error("Unsupported FourCC code: "+int32ToFourCC(fourCC))}var flags=header[off_flags],mipmapCount=1;flags&DDSD_MIPMAPCOUNT&&(mipmapCount=Math.max(1,header[off_mipmapCount]));var cubemap=!1;header[off_caps2]&DDSCAPS2_CUBEMAP&&(cubemap=!0);var dataLength,width=header[off_width],height=header[off_height],dataOffset=header[off_size]+4,texWidth=width,texHeight=height,images=[];if(fourCC===FOURCC_DX10&&(dataOffset+=20),cubemap)for(var f=0;f<6;f++){if("rgba32f"!==format)throw new Error("Only RGBA32f cubemaps are supported");width=texWidth,height=texHeight;for(var requiredMipLevels=Math.log(width)/Math.log(2)+1,i=0;i<requiredMipLevels;i++)dataLength=width*height*16,images.push({offset:dataOffset,length:dataLength,shape:[width,height]}),i<mipmapCount&&(dataOffset+=dataLength),width=Math.floor(width/2),height=Math.floor(height/2)}else for(var i=0;i<mipmapCount;i++)dataLength=Math.max(4,width)/4*Math.max(4,height)/4*blockBytes,images.push({offset:dataOffset,length:dataLength,shape:[width,height]}),dataOffset+=dataLength,width=Math.floor(width/2),height=Math.floor(height/2);return{shape:[texWidth,texHeight],images:images,format:format,flags:flags,cubemap:cubemap}}function fourCCToInt32(value){return value.charCodeAt(0)+(value.charCodeAt(1)<<8)+(value.charCodeAt(2)<<16)+(value.charCodeAt(3)<<24)}function int32ToFourCC(value){return String.fromCharCode(255&value,value>>8&255,value>>16&255,value>>24&255)}var DDS_MAGIC=542327876,DDSD_MIPMAPCOUNT=131072,DDPF_FOURCC=4,FOURCC_DXT1=fourCCToInt32("DXT1"),FOURCC_DXT3=fourCCToInt32("DXT3"),FOURCC_DXT5=fourCCToInt32("DXT5"),FOURCC_DX10=fourCCToInt32("DX10"),FOURCC_FP32F=116,DDSCAPS2_CUBEMAP=512,D3D10_RESOURCE_DIMENSION_TEXTURE2D=3,DXGI_FORMAT_R32G32B32A32_FLOAT=2,headerLengthInt=31,off_magic=0,off_size=1,off_flags=2,off_height=3,off_width=4,off_mipmapCount=7,off_pfFlags=20,off_pfFourCC=21,off_caps2=28;module.exports=parseHeaders},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_GLCubeTexture=__webpack_require__(24),_GLCubeTexture2=_interopRequireDefault(_GLCubeTexture),gl=void 0,CubeFrameBuffer=function(){function CubeFrameBuffer(size){var mParameters=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,CubeFrameBuffer),gl=_GLTool2.default.gl,this._size=size,this.magFilter=mParameters.magFilter||gl.LINEAR,this.minFilter=mParameters.minFilter||gl.LINEAR,this.wrapS=mParameters.wrapS||gl.CLAMP_TO_EDGE,this.wrapT=mParameters.wrapT||gl.CLAMP_TO_EDGE,this._init()}return _createClass(CubeFrameBuffer,[{key:"_init",value:function(){this.texture=gl.createTexture(),this.glTexture=new _GLCubeTexture2.default(this.texture,{},!0),gl.bindTexture(gl.TEXTURE_CUBE_MAP,this.texture),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MAG_FILTER,this.magFilter),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MIN_FILTER,this.minFilter),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_S,this.wrapS),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_T,this.wrapT);for(var targets=[gl.TEXTURE_CUBE_MAP_POSITIVE_X,gl.TEXTURE_CUBE_MAP_NEGATIVE_X,gl.TEXTURE_CUBE_MAP_POSITIVE_Y,gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,gl.TEXTURE_CUBE_MAP_POSITIVE_Z,gl.TEXTURE_CUBE_MAP_NEGATIVE_Z],i=0;i<targets.length;i++)gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,!1),gl.texImage2D(targets[i],0,gl.RGBA,this.width,this.height,0,gl.RGBA,gl.FLOAT,null);this._frameBuffers=[];for(var _i=0;_i<targets.length;_i++){var frameBuffer=gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,frameBuffer),gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,targets[_i],this.texture,0);var status=gl.checkFramebufferStatus(gl.FRAMEBUFFER);status!==gl.FRAMEBUFFER_COMPLETE&&console.log("'gl.checkFramebufferStatus() returned '"+status),this._frameBuffers.push(frameBuffer)}gl.bindFramebuffer(gl.FRAMEBUFFER,null),gl.bindRenderbuffer(gl.RENDERBUFFER,null),gl.bindTexture(gl.TEXTURE_CUBE_MAP,null)}},{key:"bind",value:function(mTargetIndex){_GLTool2.default.viewport(0,0,this.width,this.height),gl.bindFramebuffer(gl.FRAMEBUFFER,this._frameBuffers[mTargetIndex])}},{key:"unbind",value:function(){gl.bindFramebuffer(gl.FRAMEBUFFER,null),_GLTool2.default.viewport(0,0,_GLTool2.default.width,_GLTool2.default.height)}},{key:"getTexture",value:function(){return this.glTexture}},{key:"width",get:function(){return this._size}},{key:"height",get:function(){return this._size}}]),CubeFrameBuffer}();exports.default=CubeFrameBuffer},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function isPowerOfTwo(x){return 0!==x&&!(x&x-1)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_GLTexture=__webpack_require__(52),_GLTexture2=_interopRequireDefault(_GLTexture),gl=void 0,MultisampleFrameBuffer=function(){function MultisampleFrameBuffer(mWidth,mHeight){var mParameters=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};_classCallCheck(this,MultisampleFrameBuffer),gl=_GLTool2.default.gl,this.width=mWidth,this.height=mHeight,this.magFilter=mParameters.magFilter||gl.LINEAR,this.minFilter=mParameters.minFilter||gl.LINEAR,this.wrapS=mParameters.wrapS||gl.CLAMP_TO_EDGE,this.wrapT=mParameters.wrapT||gl.CLAMP_TO_EDGE,this.useDepth=mParameters.useDepth||!0,this.useStencil=mParameters.useStencil||!1,this.texelType=mParameters.type,this._numSample=mParameters.numSample||8,isPowerOfTwo(this.width)&&isPowerOfTwo(this.height)||(this.wrapS=this.wrapT=gl.CLAMP_TO_EDGE,this.minFilter===gl.LINEAR_MIPMAP_NEAREST&&(this.minFilter=gl.LINEAR)),this._init()}return _createClass(MultisampleFrameBuffer,[{key:"_init",value:function(){var texelType=gl.UNSIGNED_BYTE;this.texelType&&(texelType=this.texelType),this.texelType=texelType,this.frameBuffer=gl.createFramebuffer(),this.frameBufferColor=gl.createFramebuffer(),this.renderBufferColor=gl.createRenderbuffer(),this.renderBufferDepth=gl.createRenderbuffer(),this.glTexture=this._createTexture(),this.glDepthTexture=this._createTexture(gl.DEPTH_COMPONENT16,gl.UNSIGNED_SHORT,gl.DEPTH_COMPONENT,!0),gl.bindRenderbuffer(gl.RENDERBUFFER,this.renderBufferColor),gl.renderbufferStorageMultisample(gl.RENDERBUFFER,this._numSample,gl.RGBA8,this.width,this.height),gl.bindRenderbuffer(gl.RENDERBUFFER,this.renderBufferDepth),gl.renderbufferStorageMultisample(gl.RENDERBUFFER,this._numSample,gl.DEPTH_COMPONENT16,this.width,this.height),gl.bindFramebuffer(gl.FRAMEBUFFER,this.frameBuffer),gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.RENDERBUFFER,this.renderBufferColor),gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,this.renderBufferDepth),gl.bindFramebuffer(gl.FRAMEBUFFER,null),gl.bindFramebuffer(gl.FRAMEBUFFER,this.frameBufferColor),gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.glTexture.texture,0),gl.bindFramebuffer(gl.FRAMEBUFFER,null)}},{key:"_createTexture",value:function(mInternalformat,mTexelType,mFormat){var forceNearest=arguments.length>3&&void 0!==arguments[3]&&arguments[3];void 0===mInternalformat&&(mInternalformat=gl.RGBA),void 0===mTexelType&&(mTexelType=this.texelType),mFormat||(mFormat=mInternalformat);var t=gl.createTexture(),glt=new _GLTexture2.default(t,!0),magFilter=forceNearest?_GLTool2.default.NEAREST:this.magFilter,minFilter=forceNearest?_GLTool2.default.NEAREST:this.minFilter;return gl.bindTexture(gl.TEXTURE_2D,t),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,magFilter),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,minFilter),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,this.wrapS),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,this.wrapT),gl.texImage2D(gl.TEXTURE_2D,0,mInternalformat,this.width,this.height,0,mFormat,mTexelType,null),gl.bindTexture(gl.TEXTURE_2D,null),glt}},{key:"bind",value:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&_GLTool2.default.viewport(0,0,this.width,this.height),gl.bindFramebuffer(gl.FRAMEBUFFER,this.frameBuffer)}},{key:"unbind",value:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&_GLTool2.default.viewport(0,0,_GLTool2.default.width,_GLTool2.default.height);var width=this.width,height=this.height;gl.bindFramebuffer(gl.FRAMEBUFFER,null),gl.bindFramebuffer(gl.READ_FRAMEBUFFER,this.frameBuffer),gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER,this.frameBufferColor),gl.clearBufferfv(gl.COLOR,0,[0,0,0,0]),gl.blitFramebuffer(0,0,width,height,0,0,width,height,gl.COLOR_BUFFER_BIT,_GLTool2.default.NEAREST),gl.bindFramebuffer(gl.FRAMEBUFFER,null)}},{key:"getTexture",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.glTexture}},{key:"getDepthTexture",value:function(){return this.glDepthTexture}}]),MultisampleFrameBuffer}();exports.default=MultisampleFrameBuffer},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function isPowerOfTwo(x){return 0!==x&&!(x&x-1)}function isSourcePowerOfTwo(obj){var w=obj.width||obj.videoWidth,h=obj.height||obj.videoHeight;return!(!w||!h)&&(isPowerOfTwo(w)&&isPowerOfTwo(h))}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_WebglNumber=__webpack_require__(8),gl=(_interopRequireDefault(_WebglNumber),void 0),GLTexture=function(){function GLTexture(mSource){var isTexture=arguments.length>1&&void 0!==arguments[1]&&arguments[1],mParameters=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(_classCallCheck(this,GLTexture),gl=_GLTool2.default.gl,isTexture)this._texture=mSource;else{this._mSource=mSource,this._texture=gl.createTexture(),this._isVideo="VIDEO"===mSource.tagName,this._premultiplyAlpha=!0,this._magFilter=mParameters.magFilter||gl.LINEAR,this._minFilter=mParameters.minFilter||gl.NEAREST_MIPMAP_LINEAR,this._wrapS=mParameters.wrapS||gl.MIRRORED_REPEAT,this._wrapT=mParameters.wrapT||gl.MIRRORED_REPEAT;mSource.width||mSource.videoWidth?isSourcePowerOfTwo(mSource)||(this._wrapS=this._wrapT=gl.CLAMP_TO_EDGE,this._minFilter===gl.NEAREST_MIPMAP_LINEAR&&(this._minFilter=gl.LINEAR)):(this._wrapS=this._wrapT=gl.CLAMP_TO_EDGE,this._minFilter===gl.NEAREST_MIPMAP_LINEAR&&(this._minFilter=gl.LINEAR)),gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,!0),mSource.exposure?gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,mSource.shape[0],mSource.shape[1],0,gl.RGBA,gl.FLOAT,mSource.data):gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,mSource),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,this._magFilter),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,this._minFilter),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,this._wrapS),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,this._wrapT);var ext=_GLTool2.default.getExtension("EXT_texture_filter_anisotropic");if(ext){var max=gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);gl.texParameterf(gl.TEXTURE_2D,ext.TEXTURE_MAX_ANISOTROPY_EXT,max)}this._canGenerateMipmap()&&gl.generateMipmap(gl.TEXTURE_2D),gl.bindTexture(gl.TEXTURE_2D,null)}}return _createClass(GLTexture,[{key:"generateMipmap",value:function(){this._canGenerateMipmap()&&(gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.generateMipmap(gl.TEXTURE_2D),gl.bindTexture(gl.TEXTURE_2D,null))}},{key:"updateTexture",value:function(mSource){mSource&&(this._mSource=mSource),gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,!0),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,this._mSource),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,this._magFilter),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,this._minFilter),this._canGenerateMipmap()&&gl.generateMipmap(gl.TEXTURE_2D),gl.bindTexture(gl.TEXTURE_2D,null)}},{key:"bind",value:function(index){void 0===index&&(index=0),_GLTool2.default.shader&&(gl.activeTexture(gl.TEXTURE0+index),gl.bindTexture(gl.TEXTURE_2D,this._texture),this._bindIndex=index)}},{key:"_canGenerateMipmap",value:function(){return this._minFilter===gl.LINEAR_MIPMAP_NEAREST||this._minFilter===gl.NEAREST_MIPMAP_LINEAR||this._minFilter===gl.LINEAR_MIPMAP_LINEAR||this._minFilter===gl.NEAREST_MIPMAP_NEAREST}},{key:"minFilter",set:function(mValue){if(mValue!==gl.LINEAR&&mValue!==gl.NEAREST&&mValue!==gl.NEAREST_MIPMAP_LINEAR&&mValue!==gl.NEAREST_MIPMAP_LINEAR&&mValue!==gl.LINEAR_MIPMAP_LINEAR&&mValue!==gl.NEAREST_MIPMAP_NEAREST)return this;this._minFilter=mValue,gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,this._minFilter),gl.bindTexture(gl.TEXTURE_2D,null)},get:function(){return this._minFilter}},{key:"magFilter",set:function(mValue){if(mValue!==gl.LINEAR&&mValue!==gl.NEAREST)return this;this._magFilter=mValue,gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,this._magFilter),gl.bindTexture(gl.TEXTURE_2D,null)},get:function(){return this._magFilter}},{key:"wrapS",set:function(mValue){if(mValue!==gl.CLAMP_TO_EDGE&&mValue!==gl.REPEAT&&mValue!==gl.MIRRORED_REPEAT)return this;this._wrapS=mValue,gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,this._wrapS),gl.bindTexture(gl.TEXTURE_2D,null)},get:function(){return this._wrapS}},{key:"wrapT",set:function(mValue){if(mValue!==gl.CLAMP_TO_EDGE&&mValue!==gl.REPEAT&&mValue!==gl.MIRRORED_REPEAT)return this;this._wrapT=mValue,gl.bindTexture(gl.TEXTURE_2D,this._texture),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,this._wrapT),gl.bindTexture(gl.TEXTURE_2D,null)},get:function(){return this._wrapT}},{key:"premultiplyAlpha",set:function(mValue){this._premultiplyAlpha=mValue,gl.bindTexture(gl.TEXTURE_2D,this._texture),console.log("premultiplyAlpha:",mValue),gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this._premultiplyAlpha),gl.bindTexture(gl.TEXTURE_2D,null)},get:function(){return this._premultiplyAlpha}},{key:"texture",get:function(){return this._texture}}]),GLTexture}(),_whiteTexture=void 0,_greyTexture=void 0,_blackTexture=void 0;GLTexture.whiteTexture=function(){if(void 0===_whiteTexture){var canvas=document.createElement("canvas");canvas.width=canvas.height=4;var ctx=canvas.getContext("2d");ctx.fillStyle="#fff",ctx.fillRect(0,0,4,4),_whiteTexture=new GLTexture(canvas)}return _whiteTexture},GLTexture.greyTexture=function(){if(void 0===_greyTexture){var canvas=document.createElement("canvas");canvas.width=canvas.height=4;var ctx=canvas.getContext("2d");ctx.fillStyle="rgb(127, 127, 127)",ctx.fillRect(0,0,4,4),_greyTexture=new GLTexture(canvas)}return _greyTexture},GLTexture.blackTexture=function(){if(void 0===_blackTexture){var canvas=document.createElement("canvas");canvas.width=canvas.height=4;var ctx=canvas.getContext("2d");ctx.fillStyle="rgb(127, 127, 127)",ctx.fillRect(0,0,4,4),_blackTexture=new GLTexture(canvas)}return _blackTexture},exports.default=GLTexture},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_GLShader=__webpack_require__(1),_GLShader2=_interopRequireDefault(_GLShader),_Mesh=__webpack_require__(5),_Mesh2=_interopRequireDefault(_Mesh),gl=void 0,TransformFeedbackObject=function(){function TransformFeedbackObject(strVertexShader,strFragmentShader){_classCallCheck(this,TransformFeedbackObject),gl=_GLTool2.default.gl,this._vs=strVertexShader,this._fs=strFragmentShader,this._init()}return _createClass(TransformFeedbackObject,[{key:"_init",value:function(){this._meshCurrent=new _Mesh2.default,this._meshTarget=new _Mesh2.default,this._numPoints=-1,this._varyings=[],this.transformFeedback=gl.createTransformFeedback()}},{key:"bufferData",value:function(mData,mName,mVaryingName){var isTransformFeedback=!!mVaryingName;console.log("is Transform feedback ?",mName,isTransformFeedback),this._meshCurrent.bufferData(mData,mName,null,gl.STREAM_COPY,!1),this._meshTarget.bufferData(mData,mName,null,gl.STREAM_COPY,!1),isTransformFeedback&&(this._varyings.push(mVaryingName),this._numPoints<0&&(this._numPoints=mData.length))}},{key:"bufferIndex",value:function(mArrayIndices){this._meshCurrent.bufferIndex(mArrayIndices),this._meshTarget.bufferIndex(mArrayIndices)}},{key:"uniform",value:function(mName,mType,mValue){this.shader&&this.shader.uniform(mName,mType,mValue)}},{key:"generate",value:function(){this.shader=new _GLShader2.default(this._vs,this._fs,this._varyings)}},{key:"render",value:function(){this.shader||this.generate(),this.shader.bind(),_GLTool2.default.drawTransformFeedback(this),this._swap()}},{key:"_swap",value:function(){var tmp=this._meshCurrent;this._meshCurrent=this._meshTarget,this._meshTarget=tmp}},{key:"numPoints",get:function(){return this._numPoints}},{key:"meshCurrent",get:function(){return this._meshCurrent}},{key:"meshTarget",get:function(){return this._meshTarget}},{key:"meshSource",get:function(){return this._meshCurrent}},{key:"meshDestination",get:function(){return this._meshTarget}}]),TransformFeedbackObject}();exports.default=TransformFeedbackObject},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_scheduling=__webpack_require__(4),_scheduling2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_scheduling),SpringNumber=function(){function SpringNumber(mValue){var _this=this,mSpeed=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,mDecreaseRate=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.9;_classCallCheck(this,SpringNumber),this._value=mValue,this._targetValue=mValue,this.speed=mSpeed,this.decreaseRate=mDecreaseRate,this._velocity=0,this._efIndex=_scheduling2.default.addEF(function(){return _this._update()})}return _createClass(SpringNumber,[{key:"_update",value:function(){if(this._checkLimit(),Math.abs(this._targetValue-this._value)<1e-4)return void(this._value=this._targetValue);this._velocity+=(this._targetValue-this._value)*this.speed,this._value+=this._velocity,this._velocity*=this.decreaseRate,Math.abs(this._targetValue-this._value)<1e-4&&(this._value=this._targetValue)}},{key:"limit",value:function(mMin,mMax){if(mMin>mMax)return void this.limit(mMax,mMin);this._min=mMin,this._max=mMax,this._checkLimit()}},{key:"_checkLimit",value:function(){void 0!==this._min&&this._targetValue<this._min&&(this._targetValue=this._min),void 0!==this._max&&this._targetValue>this._max&&(this._targetValue=this._max)}},{key:"destroy",value:function(){_scheduling2.default.removeEF(this._efIndex)}},{key:"value",set:function(mValue){this._targetValue=mValue},get:function(){return this._value}}]),SpringNumber}();exports.default=SpringNumber},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function getFunc(mEasing){switch(mEasing){default:case"linear":return Easing.Linear.None;case"expIn":return Easing.Exponential.In;case"expOut":return Easing.Exponential.Out;case"expInOut":return Easing.Exponential.InOut;case"cubicIn":return Easing.Cubic.In;case"cubicOut":return Easing.Cubic.Out;case"cubicInOut":return Easing.Cubic.InOut;case"quarticIn":return Easing.Quartic.In;case"quarticOut":return Easing.Quartic.Out;case"quarticInOut":return Easing.Quartic.InOut;case"quinticIn":return Easing.Quintic.In;case"quinticOut":return Easing.Quintic.Out;case"quinticInOut":return Easing.Quintic.InOut;case"sinusoidalIn":return Easing.Sinusoidal.In;case"sinusoidalOut":return Easing.Sinusoidal.Out;case"sinusoidalInOut":return Easing.Sinusoidal.InOut;case"circularIn":return Easing.Circular.In;case"circularOut":return Easing.Circular.Out;case"circularInOut":return Easing.Circular.InOut;case"elasticIn":return Easing.Elastic.In;case"elasticOut":return Easing.Elastic.Out;case"elasticInOut":return Easing.Elastic.InOut;case"backIn":return Easing.Back.In;case"backOut":return Easing.Back.Out;case"backInOut":return Easing.Back.InOut;case"bounceIn":return Easing.Bounce.in;case"bounceOut":return Easing.Bounce.out;case"bounceInOut":return Easing.Bounce.inOut}}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_scheduling=__webpack_require__(4),_scheduling2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_scheduling),Easing={Linear:{None:function(k){return k}},Quadratic:{In:function(k){return k*k},Out:function(k){return k*(2-k)},InOut:function(k){return(k*=2)<1?.5*k*k:-.5*(--k*(k-2)-1)}},Cubic:{In:function(k){return k*k*k},Out:function(k){return--k*k*k+1},InOut:function(k){return(k*=2)<1?.5*k*k*k:.5*((k-=2)*k*k+2)}},Quartic:{In:function(k){return k*k*k*k},Out:function(k){return 1- --k*k*k*k},InOut:function(k){return(k*=2)<1?.5*k*k*k*k:-.5*((k-=2)*k*k*k-2)}},Quintic:{In:function(k){return k*k*k*k*k},Out:function(k){return--k*k*k*k*k+1},InOut:function(k){return(k*=2)<1?.5*k*k*k*k*k:.5*((k-=2)*k*k*k*k+2)}},Sinusoidal:{In:function(k){return 1-Math.cos(k*Math.PI/2)},Out:function(k){return Math.sin(k*Math.PI/2)},InOut:function(k){return.5*(1-Math.cos(Math.PI*k))}},Exponential:{In:function(k){return 0===k?0:Math.pow(1024,k-1)},Out:function(k){return 1===k?1:1-Math.pow(2,-10*k)},InOut:function(k){return 0===k?0:1===k?1:(k*=2)<1?.5*Math.pow(1024,k-1):.5*(2-Math.pow(2,-10*(k-1)))}},Circular:{In:function(k){return 1-Math.sqrt(1-k*k)},Out:function(k){return Math.sqrt(1- --k*k)},InOut:function(k){return(k*=2)<1?-.5*(Math.sqrt(1-k*k)-1):.5*(Math.sqrt(1-(k-=2)*k)+1)}},Elastic:{In:function(k){var s=void 0,a=.1;return 0===k?0:1===k?1:(!a||a<1?(a=1,s=.1):s=.4*Math.asin(1/a)/(2*Math.PI),-a*Math.pow(2,10*(k-=1))*Math.sin((k-s)*(2*Math.PI)/.4))},Out:function(k){var s=void 0,a=.1;return 0===k?0:1===k?1:(!a||a<1?(a=1,s=.1):s=.4*Math.asin(1/a)/(2*Math.PI),a*Math.pow(2,-10*k)*Math.sin((k-s)*(2*Math.PI)/.4)+1)},InOut:function(k){var s=void 0,a=.1;return 0===k?0:1===k?1:(!a||a<1?(a=1,s=.1):s=.4*Math.asin(1/a)/(2*Math.PI),(k*=2)<1?a*Math.pow(2,10*(k-=1))*Math.sin((k-s)*(2*Math.PI)/.4)*-.5:a*Math.pow(2,-10*(k-=1))*Math.sin((k-s)*(2*Math.PI)/.4)*.5+1)}},Back:{In:function(k){var s=1.70158;return k*k*((s+1)*k-s)},Out:function(k){var s=1.70158;return--k*k*((s+1)*k+s)+1},InOut:function(k){var s=2.5949095;return(k*=2)<1?k*k*((s+1)*k-s)*.5:.5*((k-=2)*k*((s+1)*k+s)+2)}},Bounce:{in:function(k){return 1-Easing.Bounce.out(1-k)},out:function(k){return k<1/2.75?7.5625*k*k:k<2/2.75?7.5625*(k-=1.5/2.75)*k+.75:k<2.5/2.75?7.5625*(k-=2.25/2.75)*k+.9375:7.5625*(k-=2.625/2.75)*k+.984375},inOut:function(k){return k<.5?.5*Easing.Bounce.in(2*k):.5*Easing.Bounce.out(2*k-1)+.5}}},TweenNumber=function(){function TweenNumber(mValue){var _this=this,mEasing=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expOut",mSpeed=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;_classCallCheck(this,TweenNumber),this._value=mValue,this._startValue=mValue,this._targetValue=mValue,this._counter=1,this.speed=mSpeed,this.easing=mEasing,this._needUpdate=!0,this._efIndex=_scheduling2.default.addEF(function(){return _this._update()})}return _createClass(TweenNumber,[{key:"_update",value:function(){var newCounter=this._counter+this.speed;if(newCounter>1&&(newCounter=1),this._counter===newCounter)return void(this._needUpdate=!1);this._counter=newCounter,this._needUpdate=!0}},{key:"limit",value:function(mMin,mMax){if(mMin>mMax)return void this.limit(mMax,mMin);this._min=mMin,this._max=mMax,this._checkLimit()}},{key:"setTo",value:function(mValue){this._value=mValue,this._targetValue=mValue,this._counter=1}},{key:"_checkLimit",value:function(){void 0!==this._min&&this._targetValue<this._min&&(this._targetValue=this._min),void 0!==this._max&&this._targetValue>this._max&&(this._targetValue=this._max)}},{key:"destroy",value:function(){_scheduling2.default.removeEF(this._efIndex)}},{key:"value",set:function(mValue){this._startValue=this._value,this._targetValue=mValue,this._checkLimit(),this._counter=0},get:function(){if(this._needUpdate){var f=getFunc(this.easing),p=f(this._counter);this._value=this._startValue+p*(this._targetValue-this._startValue),this._needUpdate=!1}return this._value}},{key:"targetValue",get:function(){return this._targetValue}}]),TweenNumber}();exports.default=TweenNumber},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_glMatrix=__webpack_require__(2),_EaseNumber=__webpack_require__(10),_EaseNumber2=_interopRequireDefault(_EaseNumber),_scheduling=__webpack_require__(4),_scheduling2=_interopRequireDefault(_scheduling),getMouse=function(mEvent,mTarget){var o=mTarget||{};return mEvent.touches?(o.x=mEvent.touches[0].pageX,o.y=mEvent.touches[0].pageY):(o.x=mEvent.clientX,o.y=mEvent.clientY),o},QuatRotation=function(){function QuatRotation(mTarget){var _this=this,mListenerTarget=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,mEasing=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1;_classCallCheck(this,QuatRotation),this._target=mTarget,this._listenerTarget=mListenerTarget,this.matrix=_glMatrix.mat4.create(),this.m=_glMatrix.mat4.create(),this._vZaxis=_glMatrix.vec3.clone([0,0,0]),this._zAxis=_glMatrix.vec3.clone([0,0,1]),this.preMouse={x:0,y:0},this.mouse={x:0,y:0},this._isMouseDown=!1,this._rotation=_glMatrix.quat.create(),this.tempRotation=_glMatrix.quat.create(),this._rotateZMargin=0,this._offset=.004,this._slerp=-1,this._isLocked=!1,this._diffX=new _EaseNumber2.default(0,mEasing),this._diffY=new _EaseNumber2.default(0,mEasing),this._listenerTarget.addEventListener("mousedown",function(e){return _this._onDown(e)}),this._listenerTarget.addEventListener("touchstart",function(e){return _this._onDown(e)}),this._listenerTarget.addEventListener("mousemove",function(e){return _this._onMove(e)}),this._listenerTarget.addEventListener("touchmove",function(e){return _this._onMove(e)}),window.addEventListener("touchend",function(){return _this._onUp()}),window.addEventListener("mouseup",function(){return _this._onUp()}),_scheduling2.default.addEF(function(){return _this._loop()})}return _createClass(QuatRotation,[{key:"inverseControl",value:function(){var isInvert=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._isInvert=isInvert}},{key:"lock",value:function(){var mValue=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._isLocked=mValue}},{key:"setCameraPos",value:function(mQuat){var speed=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;if(this.easing=speed,!(this._slerp>0)){var tempRotation=_glMatrix.quat.clone(this._rotation);this._updateRotation(tempRotation),this._rotation=_glMatrix.quat.clone(tempRotation),this._currDiffX=this.diffX=0,this._currDiffY=this.diffY=0,this._isMouseDown=!1,this._isRotateZ=0,this._targetQuat=_glMatrix.quat.clone(mQuat),this._slerp=1}}},{key:"resetQuat",value:function(){this._rotation=_glMatrix.quat.clone([0,0,1,0]),this.tempRotation=_glMatrix.quat.clone([0,0,0,0]),this._targetQuat=void 0,this._slerp=-1}},{key:"_onDown",value:function(mEvent){if(!this._isLocked){var mouse=getMouse(mEvent),tempRotation=_glMatrix.quat.clone(this._rotation);this._updateRotation(tempRotation),this._rotation=tempRotation,this._isMouseDown=!0,this._isRotateZ=0,this.preMouse={x:mouse.x,y:mouse.y},mouse.y<this._rotateZMargin||mouse.y>window.innerHeight-this._rotateZMargin?this._isRotateZ=1:(mouse.x<this._rotateZMargin||mouse.x>window.innerWidth-this._rotateZMargin)&&(this._isRotateZ=2),this._diffX.setTo(0),this._diffY.setTo(0)}}},{key:"_onMove",value:function(mEvent){this._isLocked||getMouse(mEvent,this.mouse)}},{key:"_onUp",value:function(){this._isLocked||(this._isMouseDown=!1)}},{key:"_updateRotation",value:function(mTempRotation){this._isMouseDown&&!this._isLocked&&(this._diffX.value=-(this.mouse.x-this.preMouse.x),this._diffY.value=this.mouse.y-this.preMouse.y,this._isInvert&&(this._diffX.value=-this._diffX.targetValue,this._diffY.value=-this._diffY.targetValue));var angle=void 0,_quat=void 0;if(this._isRotateZ>0)1===this._isRotateZ?(angle=-this._diffX.value*this._offset,angle*=this.preMouse.y<this._rotateZMargin?-1:1,_quat=_glMatrix.quat.clone([0,0,Math.sin(angle),Math.cos(angle)]),_glMatrix.quat.multiply(_quat,mTempRotation,_quat)):(angle=-this._diffY.value*this._offset,angle*=this.preMouse.x<this._rotateZMargin?1:-1,_quat=_glMatrix.quat.clone([0,0,Math.sin(angle),Math.cos(angle)]),_glMatrix.quat.multiply(_quat,mTempRotation,_quat));else{var v=_glMatrix.vec3.clone([this._diffX.value,this._diffY.value,0]),axis=_glMatrix.vec3.create();_glMatrix.vec3.cross(axis,v,this._zAxis),_glMatrix.vec3.normalize(axis,axis),angle=_glMatrix.vec3.length(v)*this._offset,_quat=_glMatrix.quat.clone([Math.sin(angle)*axis[0],Math.sin(angle)*axis[1],Math.sin(angle)*axis[2],Math.cos(angle)]),_glMatrix.quat.multiply(mTempRotation,_quat,mTempRotation)}}},{key:"_loop",value:function(){_glMatrix.mat4.identity(this.m),void 0===this._targetQuat?(_glMatrix.quat.set(this.tempRotation,this._rotation[0],this._rotation[1],this._rotation[2],this._rotation[3]),this._updateRotation(this.tempRotation)):(this._slerp+=.1*(0-this._slerp),this._slerp<5e-4?(_glMatrix.quat.copy(this._rotation,this._targetQuat),_glMatrix.quat.copy(this.tempRotation,this._targetQuat),this._targetQuat=void 0,this._diffX.setTo(0),this._diffY.setTo(0),this._slerp=-1):(_glMatrix.quat.set(this.tempRotation,0,0,0,0),_glMatrix.quat.slerp(this.tempRotation,this._targetQuat,this._rotation,this._slerp))),_glMatrix.vec3.transformQuat(this._vZaxis,this._vZaxis,this.tempRotation),_glMatrix.mat4.fromQuat(this.matrix,this.tempRotation)}},{key:"easing",set:function(mValue){this._diffX.easing=mValue,this._diffY.easing=mValue},get:function(){return this._diffX.easing}}]),QuatRotation}();exports.default=QuatRotation},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}function distance(a,b){var dx=a.x-b.x,dy=a.y-b.y;return Math.sqrt(dx*dx+dy*dy)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_EventDispatcher2=__webpack_require__(26),_EventDispatcher3=_interopRequireDefault(_EventDispatcher2),_Ray=__webpack_require__(11),_Ray2=_interopRequireDefault(_Ray),_getMouse=__webpack_require__(58),_getMouse2=_interopRequireDefault(_getMouse),TouchDetector=function(_EventDispatcher){function TouchDetector(mMesh,mCamera){var mSkipMoveCheck=arguments.length>2&&void 0!==arguments[2]&&arguments[2],mListenerTarget=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window;_classCallCheck(this,TouchDetector);var _this=_possibleConstructorReturn(this,(TouchDetector.__proto__||Object.getPrototypeOf(TouchDetector)).call(this));return _this._mesh=mMesh,_this._mesh.generateFaces(),_this._camera=mCamera,_this.faceVertices=mMesh.faces.map(function(face){return face.vertices}),_this.clickTolerance=8,_this._ray=new _Ray2.default([0,0,0],[0,0,-1]),_this._hit=vec3.fromValues(-999,-999,-999),_this._lastPos,_this._firstPos,_this.mtxModel=mat4.create(),_this._listenerTarget=mListenerTarget,_this._skippingMove=mSkipMoveCheck,_this._onMoveBind=function(e){return _this._onMove(e)},_this._onDownBind=function(e){return _this._onDown(e)},_this._onUpBind=function(){return _this._onUp()},_this.connect(),_this}return _inherits(TouchDetector,_EventDispatcher),_createClass(TouchDetector,[{key:"connect",value:function(){this._listenerTarget.addEventListener("mousedown",this._onDownBind),this._listenerTarget.addEventListener("mousemove",this._onMoveBind),this._listenerTarget.addEventListener("mouseup",this._onUpBind)}},{key:"disconnect",value:function(){this._listenerTarget.removeEventListener("mousedown",this._onDownBind),this._listenerTarget.removeEventListener("mousemove",this._onMoveBind),this._listenerTarget.removeEventListener("mouseup",this._onUpBind)}},{key:"_checkHit",value:function(){var _this2=this,mType=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"onHit",camera=this._camera;if(camera){var mx=this._lastPos.x/_GLTool2.default.width*2-1,my=-this._lastPos.y/_GLTool2.default.height*2+1;camera.generateRay([mx,my,0],this._ray);for(var hit=void 0,v0=vec3.create(),v1=vec3.create(),v2=vec3.create(),dist=0,getVector=function(v,target){vec3.transformMat4(target,v,_this2.mtxModel)},i=0;i<this.faceVertices.length;i++){var vertices=this.faceVertices[i];getVector(vertices[0],v0),getVector(vertices[1],v1),getVector(vertices[2],v2);var t=this._ray.intersectTriangle(v0,v1,v2);if(t)if(hit){var distToCam=vec3.dist(t,camera.position);distToCam<dist&&(hit=vec3.clone(t),dist=distToCam)}else hit=vec3.clone(t),dist=vec3.dist(hit,camera.position)}hit?(this._hit=vec3.clone(hit),this.dispatchCustomEvent(mType,{hit:hit})):this.dispatchCustomEvent("onUp")}}},{key:"_onDown",value:function(e){this._firstPos=(0,_getMouse2.default)(e),this._lastPos=(0,_getMouse2.default)(e),this._checkHit("onDown")}},{key:"_onMove",value:function(e){this._lastPos=(0,_getMouse2.default)(e),this._skippingMove||this._checkHit()}},{key:"_onUp",value:function(){distance(this._firstPos,this._lastPos)<this.clickTolerance&&this._checkHit()}}]),TouchDetector}(_EventDispatcher3.default);exports.default=TouchDetector},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(e){var x=void 0,y=void 0;return e.touches?(x=e.touches[0].pageX,y=e.touches[0].pageY):(x=e.clientX,y=e.clientY),{x:x,y:y}}},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_CameraPerspective2=__webpack_require__(13),_CameraPerspective3=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_CameraPerspective2),_glMatrix=__webpack_require__(2),CAMERA_SETTINGS=[[_glMatrix.vec3.fromValues(0,0,0),_glMatrix.vec3.fromValues(1,0,0),_glMatrix.vec3.fromValues(0,-1,0)],[_glMatrix.vec3.fromValues(0,0,0),_glMatrix.vec3.fromValues(-1,0,0),_glMatrix.vec3.fromValues(0,-1,0)],[_glMatrix.vec3.fromValues(0,0,0),_glMatrix.vec3.fromValues(0,1,0),_glMatrix.vec3.fromValues(0,0,1)],[_glMatrix.vec3.fromValues(0,0,0),_glMatrix.vec3.fromValues(0,-1,0),_glMatrix.vec3.fromValues(0,0,-1)],[_glMatrix.vec3.fromValues(0,0,0),_glMatrix.vec3.fromValues(0,0,1),_glMatrix.vec3.fromValues(0,-1,0)],[_glMatrix.vec3.fromValues(0,0,0),_glMatrix.vec3.fromValues(0,0,-1),_glMatrix.vec3.fromValues(0,-1,0)]],CameraCube=function(_CameraPerspective){function CameraCube(){_classCallCheck(this,CameraCube);var _this=_possibleConstructorReturn(this,(CameraCube.__proto__||Object.getPrototypeOf(CameraCube)).call(this));return _this.setPerspective(Math.PI/2,1,.1,1e3),_this}return _inherits(CameraCube,_CameraPerspective),_createClass(CameraCube,[{key:"face",value:function(mIndex){var o=CAMERA_SETTINGS[mIndex];this.lookAt(o[0],o[1],o[2])}}]),CameraCube}(_CameraPerspective3.default);exports.default=CameraCube},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_BinaryLoader2=__webpack_require__(14),_BinaryLoader3=_interopRequireDefault(_BinaryLoader2),_Mesh=__webpack_require__(5),_Mesh2=_interopRequireDefault(_Mesh),ObjLoader=function(_BinaryLoader){function ObjLoader(){return _classCallCheck(this,ObjLoader),_possibleConstructorReturn(this,(ObjLoader.__proto__||Object.getPrototypeOf(ObjLoader)).apply(this,arguments))}return _inherits(ObjLoader,_BinaryLoader),_createClass(ObjLoader,[{key:"load",value:function(url,callback){var drawType=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;this._drawType=drawType,_get(ObjLoader.prototype.__proto__||Object.getPrototypeOf(ObjLoader.prototype),"load",this).call(this,url,callback)}},{key:"_onLoaded",value:function(){this.parseObj(this._req.response)}},{key:"parseObj",value:function(objStr){function parseVertexIndex(value){var index=parseInt(value);return 3*(index>=0?index-1:index+vertices.length/3)}function parseNormalIndex(value){var index=parseInt(value);return 3*(index>=0?index-1:index+normals.length/3)}function parseUVIndex(value){var index=parseInt(value);return 2*(index>=0?index-1:index+uvs.length/2)}function addVertex(a,b,c){positions.push([vertices[a],vertices[a+1],vertices[a+2]]),positions.push([vertices[b],vertices[b+1],vertices[b+2]]),positions.push([vertices[c],vertices[c+1],vertices[c+2]]),indices.push(3*count+0),indices.push(3*count+1),indices.push(3*count+2),count++}function addUV(a,b,c){coords.push([uvs[a],uvs[a+1]]),coords.push([uvs[b],uvs[b+1]]),coords.push([uvs[c],uvs[c+1]])}function addNormal(a,b,c){finalNormals.push([normals[a],normals[a+1],normals[a+2]]),finalNormals.push([normals[b],normals[b+1],normals[b+2]]),finalNormals.push([normals[c],normals[c+1],normals[c+2]])}function addFace(a,b,c,d,ua,ub,uc,ud,na,nb,nc,nd){var ia=parseVertexIndex(a),ib=parseVertexIndex(b),ic=parseVertexIndex(c),id=void 0;void 0===d?addVertex(ia,ib,ic):(id=parseVertexIndex(d),addVertex(ia,ib,id),addVertex(ib,ic,id)),void 0!==ua&&(ia=parseUVIndex(ua),ib=parseUVIndex(ub),ic=parseUVIndex(uc),void 0===d?addUV(ia,ib,ic):(id=parseUVIndex(ud),addUV(ia,ib,id),addUV(ib,ic,id))),void 0!==na&&(ia=parseNormalIndex(na),ib=parseNormalIndex(nb),ic=parseNormalIndex(nc),void 0===d?addNormal(ia,ib,ic):(id=parseNormalIndex(nd),addNormal(ia,ib,id),addNormal(ib,ic,id)))}for(var lines=objStr.split("\n"),positions=[],coords=[],finalNormals=[],vertices=[],normals=[],uvs=[],indices=[],count=0,result=void 0,vertexPattern=/v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,normalPattern=/vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,uvPattern=/vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,facePattern1=/f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/,facePattern2=/f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/,facePattern3=/f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/,facePattern4=/f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/,i=0;i<lines.length;i++){var line=lines[i];line=line.trim(),0!==line.length&&"#"!==line.charAt(0)&&(null!==(result=vertexPattern.exec(line))?vertices.push(parseFloat(result[1]),parseFloat(result[2]),parseFloat(result[3])):null!==(result=normalPattern.exec(line))?normals.push(parseFloat(result[1]),parseFloat(result[2]),parseFloat(result[3])):null!==(result=uvPattern.exec(line))?uvs.push(parseFloat(result[1]),parseFloat(result[2])):null!==(result=facePattern1.exec(line))?addFace(result[1],result[2],result[3],result[4]):null!==(result=facePattern2.exec(line))?addFace(result[2],result[5],result[8],result[11],result[3],result[6],result[9],result[12]):null!==(result=facePattern3.exec(line))?addFace(result[2],result[6],result[10],result[14],result[3],result[7],result[11],result[15],result[4],result[8],result[12],result[16]):null!==(result=facePattern4.exec(line))&&addFace(result[2],result[5],result[8],result[11],void 0,void 0,void 0,void 0,result[3],result[6],result[9],result[12]))}return this._generateMeshes({positions:positions,coords:coords,normals:finalNormals,indices:indices})}},{key:"_generateMeshes",value:function(o){var hasNormals=o.normals.length>0,hasUVs=o.coords.length>0,mesh=void 0;if(o.positions.length>65535){var meshes=[],lastIndex=0,oCopy={};for(oCopy.positions=o.positions.concat(),oCopy.coords=o.coords.concat(),oCopy.indices=o.indices.concat(),oCopy.normals=o.normals.concat();o.indices.length>0;){for(var sliceNum=Math.min(65535,o.positions.length),indices=o.indices.splice(0,sliceNum),positions=[],coords=[],normals=[],index=void 0,tmpIndex=0,i=0;i<indices.length;i++)indices[i]>tmpIndex&&(tmpIndex=indices[i]),index=indices[i],positions.push(oCopy.positions[index]),hasUVs&&coords.push(oCopy.coords[index]),hasNormals&&normals.push(oCopy.normals[index]),indices[i]-=lastIndex;lastIndex=tmpIndex+1,mesh=new _Mesh2.default(this._drawType),mesh.bufferVertex(positions),hasUVs&&mesh.bufferTexCoord(coords),mesh.bufferIndex(indices),hasNormals&&mesh.bufferNormal(normals),meshes.push(mesh)}return this._callback&&this._callback(meshes,oCopy),meshes}return mesh=new _Mesh2.default(this._drawType),mesh.bufferVertex(o.positions),hasUVs&&mesh.bufferTexCoord(o.coords),mesh.bufferIndex(o.indices),hasNormals&&mesh.bufferNormal(o.normals),this._callback&&this._callback(mesh,o),mesh}}]),ObjLoader}(_BinaryLoader3.default);ObjLoader.parse=function(objStr){return(new ObjLoader).parseObj(objStr)},exports.default=ObjLoader},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_BinaryLoader2=__webpack_require__(14),_BinaryLoader3=_interopRequireDefault(_BinaryLoader2),_HDRParser=__webpack_require__(62),_HDRParser2=_interopRequireDefault(_HDRParser),HDRLoader=function(_BinaryLoader){function HDRLoader(){return _classCallCheck(this,HDRLoader),_possibleConstructorReturn(this,(HDRLoader.__proto__||Object.getPrototypeOf(HDRLoader)).call(this,!0))}return _inherits(HDRLoader,_BinaryLoader),_createClass(HDRLoader,[{key:"parse",value:function(mArrayBuffer){return(0,_HDRParser2.default)(mArrayBuffer)}},{key:"_onLoaded",value:function(){var o=this.parse(this._req.response);this._callback&&this._callback(o)}}]),HDRLoader}(_BinaryLoader3.default);HDRLoader.parse=function(mArrayBuffer){return(0,_HDRParser2.default)(mArrayBuffer)},exports.default=HDRLoader},function(module,exports,__webpack_require__){"use strict";function readPixelsRawRLE(buffer,data,offset,fileOffset,scanlineWidth,numScanlines){function readBuf(buf){var bytesRead=0;do{buf[bytesRead++]=buffer[fileOffset]}while(++fileOffset<bufferLength&&bytesRead<buf.length);return bytesRead}function readBufOffset(buf,offset,length){var bytesRead=0;do{buf[offset+bytesRead++]=buffer[fileOffset]}while(++fileOffset<bufferLength&&bytesRead<length);return bytesRead}for(var rgbe=new Array(4),scanlineBuffer=null,ptr=void 0,ptrEnd=void 0,count=void 0,buf=new Array(2),bufferLength=buffer.length;numScanlines>0;){if(readBuf(rgbe)<rgbe.length)throw new Error("Error reading bytes: expected "+rgbe.length);if(2!==rgbe[0]||2!==rgbe[1]||0!=(128&rgbe[2]))return data[offset++]=rgbe[0],data[offset++]=rgbe[1],data[offset++]=rgbe[2],data[offset++]=rgbe[3],void function(buffer,data,offset,numpixels){var numExpected=4*numpixels,numRead=readBufOffset(data,offset,numExpected);if(numRead<numExpected)throw new Error("Error reading raw pixels: got "+numRead+" bytes, expected "+numExpected)}(0,data,offset,scanlineWidth*numScanlines-1);if(((255&rgbe[2])<<8|255&rgbe[3])!==scanlineWidth)throw new Error("Wrong scanline width "+((255&rgbe[2])<<8|255&rgbe[3])+", expected "+scanlineWidth);null===scanlineBuffer&&(scanlineBuffer=new Array(4*scanlineWidth)),ptr=0;for(var i=0;i<4;i++)for(ptrEnd=(i+1)*scanlineWidth;ptr<ptrEnd;){if(readBuf(buf)<buf.length)throw new Error("Error reading 2-byte buffer");if((255&buf[0])>128){if(0===(count=(255&buf[0])-128)||count>ptrEnd-ptr)throw new Error("Bad scanline data");for(;count-- >0;)scanlineBuffer[ptr++]=buf[1]}else{if(0===(count=255&buf[0])||count>ptrEnd-ptr)throw new Error("Bad scanline data");if(scanlineBuffer[ptr++]=buf[1],--count>0){if(readBufOffset(scanlineBuffer,ptr,count)<count)throw new Error("Error reading non-run data");ptr+=count}}}for(var _i=0;_i<scanlineWidth;_i++)data[offset+0]=scanlineBuffer[_i],data[offset+1]=scanlineBuffer[_i+scanlineWidth],data[offset+2]=scanlineBuffer[_i+2*scanlineWidth],data[offset+3]=scanlineBuffer[_i+3*scanlineWidth],offset+=4;numScanlines--}}function parseHdr(buffer){buffer instanceof ArrayBuffer&&(buffer=new Uint8Array(buffer));for(var fileOffset=0,bufferLength=buffer.length,NEW_LINE=10,width=0,height=0,exposure=1,rle=!1,i=0;i<20;i++){var line=function(){var buf="";do{var b=buffer[fileOffset];if(b===NEW_LINE){++fileOffset;break}buf+=String.fromCharCode(b)}while(++fileOffset<bufferLength);return buf}(),match=void 0;if(match=line.match(radiancePattern));else if(match=line.match(formatPattern))rle=!0;else if(match=line.match(exposurePattern))exposure=Number(match[1]);else if(match=line.match(commentPattern));else if(match=line.match(widthHeightPattern)){height=Number(match[1]),width=Number(match[2]);break}}if(!rle)throw new Error("File is not run length encoded!");var data=new Uint8Array(width*height*4);readPixelsRawRLE(buffer,data,0,fileOffset,width,height);for(var floatData=new Float32Array(width*height*4),offset=0;offset<data.length;offset+=4){var r=data[offset+0]/255,g=data[offset+1]/255,b=data[offset+2]/255,e=data[offset+3],f=Math.pow(2,e-128);r*=f,g*=f,b*=f;var floatOffset=offset;floatData[floatOffset+0]=r,floatData[floatOffset+1]=g,floatData[floatOffset+2]=b,floatData[floatOffset+3]=1}return{shape:[width,height],exposure:exposure,gamma:1,data:floatData}}Object.defineProperty(exports,"__esModule",{value:!0});var radiancePattern="#\\?RADIANCE",commentPattern="#.*",exposurePattern="EXPOSURE=\\s*([0-9]*[.][0-9]*)",formatPattern="FORMAT=32-bit_rle_rgbe",widthHeightPattern="-Y ([0-9]+) \\+X ([0-9]+)";exports.default=parseHdr},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Mesh=__webpack_require__(5),_Mesh2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_Mesh),ARRAY_CTOR_MAP={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},SIZE_MAP={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},semanticAttributeMap={NORMAL:"aNormal",POSITION:"aVertexPosition",TEXCOORD_0:"aTextureCoord",WEIGHTS_0:"aWeight",JOINTS_0:"aJoint",COLOR:"aColor"},parse=function(gltf,bin){return new Promise(function(resolve,reject){gltf.output={meshes:[],scenes:[],textures:[]},_getBufferViewData(gltf,bin).then(_parseMesh).then(function(gltfInfo){resolve(gltfInfo)}).catch(function(e){console.log("Error:",e)})})},_getBufferViewData=function(gltfInfo,bin){return new Promise(function(resolve,reject){var bufferViews=gltfInfo.bufferViews;gltfInfo.buffers;bufferViews.forEach(function(bufferViewInfo,i){var buffer=bin;bufferViewInfo.data=buffer.slice(bufferViewInfo.byteOffset||0,(bufferViewInfo.byteOffset||0)+(bufferViewInfo.byteLength||0))}),resolve(gltfInfo)})},_parseMesh=function(gltf){return new Promise(function(resolve,reject){var meshes=gltf.meshes;gltf.geometries=[],meshes.forEach(function(mesh,i){var primitives=mesh.primitives,geometry={};primitives.forEach(function(primitiveInfo,i){var semantics=Object.keys(primitiveInfo.attributes),defines={};if(semantics.forEach(function(semantic,i){var accessorIdx=primitiveInfo.attributes[semantic],attributeInfo=gltf.accessors[accessorIdx],attributeName=semanticAttributeMap[semantic];if(attributeName){"NORMAL"===semantic&&(defines.HAS_NORMALS=1),semantic.indexOf("TEXCOORD")>-1&&(defines.HAS_UV=1);var size=SIZE_MAP[attributeInfo.type],attributeArray=_getAccessorData(gltf,accessorIdx);attributeArray instanceof Uint32Array&&(attributeArray=new Float32Array(attributeArray)),"TEXCOORD_1"===semantic&&console.log(size,attributeArray),geometry[attributeName]={value:attributeArray,size:size}}}),null!=primitiveInfo.indices){var attributeArray=_getAccessorData(gltf,primitiveInfo.indices,!0);geometry.indices={value:attributeArray,size:1}}var m=new _Mesh2.default;for(var s in geometry){var data=geometry[s];"indices"!==s?m.bufferFlattenData(data.value,s,data.size):m.bufferIndex(data.value)}if(gltf.output.meshes.push(m),primitiveInfo.material){console.log("gltf.output",gltf.output,primitiveInfo.material);var material=gltf.output.materials[primitiveInfo.material];m.material=material,defines=objectAssign(defines,m.material.defines),m.defines=defines;var shader=Shaders.get(ShaderLibs.gltfVert,ShaderLibs.gltfFrag,defines),emissiveFacotr=material.emissiveFacotr,normalTexture=material.normalTexture,occlusionTexture=material.occlusionTexture,pbrMetallicRoughness=material.pbrMetallicRoughness,baseColorTexture=pbrMetallicRoughness.baseColorTexture,metallicRoughnessTexture=pbrMetallicRoughness.metallicRoughnessTexture,uniforms={uEmissiveFactor:emissiveFacotr||[0,0,0],uBaseColor:pbrMetallicRoughness.baseColorFactor||[1,1,1,1],uRoughness:pbrMetallicRoughness.roughnessFactor||1,uMetallic:pbrMetallicRoughness.metallicFactor||1,uScaleDiffBaseMR:[0,0,0,0],uScaleFGDSpec:[0,0,0,0],uScaleIBLAmbient:[1,1,1,1],uLightDirection:[1,1,1],uLightColor:[1,1,1],uGamma:1};baseColorTexture&&(uniforms.uColorMap=baseColorTexture.glTexture),metallicRoughnessTexture&&(uniforms.uMetallicRoughnessMap=metallicRoughnessTexture.glTexture),normalTexture&&(uniforms.uNormalScale=normalTexture.scale||1,uniforms.uNormalMap=normalTexture.glTexture),occlusionTexture&&(uniforms.uAoMap=occlusionTexture.glTexture,uniforms.uOcclusionStrength=occlusionTexture.strength||1),shader.bind(),shader.uniform(uniforms),m.material.shader=shader,m.material.uniforms=uniforms}gltf.geometries.push(geometry)})}),resolve(gltf)})},_getAccessorData=function(gltf,accessorIdx){var isIndices=arguments.length>2&&void 0!==arguments[2]&&arguments[2],accessorInfo=gltf.accessors[accessorIdx],buffer=gltf.bufferViews[accessorInfo.bufferView].data,byteOffset=accessorInfo.byteOffset||0,ArrayCtor=ARRAY_CTOR_MAP[accessorInfo.componentType]||Float32Array,size=SIZE_MAP[accessorInfo.type];null==size&&isIndices&&(size=1);var arr=new ArrayCtor(buffer,byteOffset,size*accessorInfo.count),quantizeExtension=accessorInfo.extensions&&accessorInfo.extensions.WEB3D_quantized_attributes;if(quantizeExtension){for(var decodedArr=new Float32Array(size*accessorInfo.count),decodeMatrix=quantizeExtension.decodeMatrix,decodeOffset=new Array(size),decodeScale=new Array(size),k=0;k<size;k++)decodeOffset[k]=decodeMatrix[size*(size+1)+k],decodeScale[k]=decodeMatrix[k*(size+1)+k];for(var i=0;i<accessorInfo.count;i++)for(var _k=0;_k<size;_k++)decodedArr[i*size+_k]=arr[i*size+_k]*decodeScale[_k]+decodeOffset[_k];arr=decodedArr}return arr};exports.default={parse:parse}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_Geom=__webpack_require__(7),_Geom2=_interopRequireDefault(_Geom),_GLShader=__webpack_require__(1),_GLShader2=_interopRequireDefault(_GLShader),_Batch2=__webpack_require__(6),_Batch3=_interopRequireDefault(_Batch2),_bigTriangle=__webpack_require__(30),_bigTriangle2=_interopRequireDefault(_bigTriangle),_copy=__webpack_require__(15),_copy2=_interopRequireDefault(_copy),BatchCopy=function(_Batch){function BatchCopy(){_classCallCheck(this,BatchCopy);var mesh=_Geom2.default.bigTriangle(),shader=new _GLShader2.default(_bigTriangle2.default,_copy2.default),_this=_possibleConstructorReturn(this,(BatchCopy.__proto__||Object.getPrototypeOf(BatchCopy)).call(this,mesh,shader));return shader.bind(),shader.uniform("texture","uniform1i",0),_this}return _inherits(BatchCopy,_Batch),_createClass(BatchCopy,[{key:"draw",value:function(texture){this.shader.bind(),texture.bind(0),_get(BatchCopy.prototype.__proto__||Object.getPrototypeOf(BatchCopy.prototype),"draw",this).call(this)}}]),BatchCopy}(_Batch3.default);exports.default=BatchCopy},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_Mesh=__webpack_require__(5),_Mesh2=_interopRequireDefault(_Mesh),_GLShader=__webpack_require__(1),_GLShader2=_interopRequireDefault(_GLShader),_Batch2=__webpack_require__(6),_Batch3=_interopRequireDefault(_Batch2),_axis=__webpack_require__(66),_axis2=_interopRequireDefault(_axis),_axis3=__webpack_require__(67),_axis4=_interopRequireDefault(_axis3),BatchAxis=function(_Batch){function BatchAxis(){_classCallCheck(this,BatchAxis);var positions=[],colors=[],indices=[0,1,2,3,4,5],r=9999;positions.push([-r,0,0]),positions.push([r,0,0]),positions.push([0,-r,0]),positions.push([0,r,0]),positions.push([0,0,-r]),positions.push([0,0,r]),colors.push([1,0,0]),colors.push([1,0,0]),colors.push([0,1,0]),colors.push([0,1,0]),colors.push([0,0,1]),colors.push([0,0,1]);var mesh=new _Mesh2.default(_GLTool2.default.LINES);mesh.bufferVertex(positions),mesh.bufferIndex(indices),mesh.bufferData(colors,"aColor",3);var shader=new _GLShader2.default(_axis2.default,_axis4.default);return _possibleConstructorReturn(this,(BatchAxis.__proto__||Object.getPrototypeOf(BatchAxis)).call(this,mesh,shader))}return _inherits(BatchAxis,_Batch),BatchAxis}(_Batch3.default);exports.default=BatchAxis},function(module,exports){module.exports="// axis.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aColor;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vColor = aColor;\n    vNormal = aNormal;\n}"},function(module,exports){module.exports="// axis.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision lowp float;\n#define GLSLIFY 1\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\t// vec3 color = vNormal;\n\tvec3 color = vColor + vNormal * 0.0001;\n    gl_FragColor = vec4(color, 1.0);\n}"},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_Geom=__webpack_require__(7),_Geom2=_interopRequireDefault(_Geom),_GLShader=__webpack_require__(1),_GLShader2=_interopRequireDefault(_GLShader),_Batch2=__webpack_require__(6),_Batch3=_interopRequireDefault(_Batch2),_general=__webpack_require__(31),_general2=_interopRequireDefault(_general),_simpleColor=__webpack_require__(16),_simpleColor2=_interopRequireDefault(_simpleColor),BatchBall=function(_Batch){function BatchBall(){_classCallCheck(this,BatchBall);var mesh=_Geom2.default.sphere(1,24),shader=new _GLShader2.default(_general2.default,_simpleColor2.default);return _possibleConstructorReturn(this,(BatchBall.__proto__||Object.getPrototypeOf(BatchBall)).call(this,mesh,shader))}return _inherits(BatchBall,_Batch),_createClass(BatchBall,[{key:"draw",value:function(){var position=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0,0],scale=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[1,1,1],color=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[1,1,1],opacity=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;this.shader.bind(),this.shader.uniform("position","uniform3fv",position),this.shader.uniform("scale","uniform3fv",scale),this.shader.uniform("color","uniform3fv",color),this.shader.uniform("opacity","uniform1f",opacity),_get(BatchBall.prototype.__proto__||Object.getPrototypeOf(BatchBall.prototype),"draw",this).call(this)}}]),BatchBall}(_Batch3.default);exports.default=BatchBall},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_Mesh=__webpack_require__(5),_Mesh2=_interopRequireDefault(_Mesh),_GLShader=__webpack_require__(1),_GLShader2=_interopRequireDefault(_GLShader),_Batch2=__webpack_require__(6),_Batch3=_interopRequireDefault(_Batch2),_dotsPlane=__webpack_require__(70),_dotsPlane2=_interopRequireDefault(_dotsPlane),_dotsPlane3=__webpack_require__(71),_dotsPlane4=_interopRequireDefault(_dotsPlane3),BatchDotsPlane=function(_Batch){function BatchDotsPlane(){_classCallCheck(this,BatchDotsPlane);var positions=[],indices=[],index=0,i=void 0,j=void 0;for(i=-100;i<100;i+=1)for(j=-100;j<100;j+=1)positions.push([i,j,0]),indices.push(index),index++,positions.push([i,0,j]),indices.push(index),index++;var mesh=new _Mesh2.default(_GLTool2.default.POINTS);mesh.bufferVertex(positions),mesh.bufferIndex(indices);var shader=new _GLShader2.default(_dotsPlane2.default,_dotsPlane4.default),_this=_possibleConstructorReturn(this,(BatchDotsPlane.__proto__||Object.getPrototypeOf(BatchDotsPlane)).call(this,mesh,shader));return _this.color=[1,1,1],_this.opacity=.65,_this}return _inherits(BatchDotsPlane,_Batch),_createClass(BatchDotsPlane,[{key:"draw",value:function(){this.shader.bind(),this.shader.uniform("color","uniform3fv",this.color),this.shader.uniform("opacity","uniform1f",this.opacity),this.shader.uniform("viewport","vec2",[_GLTool2.default.width,_GLTool2.default.height]),_get(BatchDotsPlane.prototype.__proto__||Object.getPrototypeOf(BatchDotsPlane.prototype),"draw",this).call(this)}}]),BatchDotsPlane}(_Batch3.default);exports.default=BatchDotsPlane},function(module,exports){module.exports="// basic.vert\n\n#define SHADER_NAME DOTS_PLANE_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec2 viewport;\n\nvarying vec3 vNormal;\n\nconst float radius = 0.008;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition + aNormal * 0.000001, 1.0);\n    // gl_PointSize = 1.0;\n    vNormal = aNormal;\n\n\tfloat distOffset = viewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;\n    gl_PointSize = distOffset;\n}"},function(module,exports){module.exports="// dotsPlane.frag\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n\tif(distance(gl_PointCoord, vec2(.5)) > .5) {\n\t\tdiscard;\n\t}\n    gl_FragColor = vec4(color, opacity);\n}"},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_Mesh=__webpack_require__(5),_Mesh2=_interopRequireDefault(_Mesh),_GLShader=__webpack_require__(1),_GLShader2=_interopRequireDefault(_GLShader),_Batch2=__webpack_require__(6),_Batch3=_interopRequireDefault(_Batch2),vs=__webpack_require__(9),fs=__webpack_require__(16),BatchAxis=function(_Batch){function BatchAxis(){_classCallCheck(this,BatchAxis);var positions=[],indices=[0,1],coords=[[0,0],[1,1]];positions.push([0,0,0]),positions.push([0,0,0]);var mesh=new _Mesh2.default(_GLTool2.default.LINES);mesh.bufferVertex(positions),mesh.bufferTexCoord(coords),mesh.bufferIndex(indices);var shader=new _GLShader2.default(vs,fs);return _possibleConstructorReturn(this,(BatchAxis.__proto__||Object.getPrototypeOf(BatchAxis)).call(this,mesh,shader))}return _inherits(BatchAxis,_Batch),_createClass(BatchAxis,[{key:"draw",value:function(mPositionA,mPositionB){var color=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[1,1,1],opacity=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;this._mesh.bufferVertex([mPositionA,mPositionB]),this._shader.bind(),this._shader.uniform("color","vec3",color),this._shader.uniform("opacity","float",opacity),_get(BatchAxis.prototype.__proto__||Object.getPrototypeOf(BatchAxis.prototype),"draw",this).call(this)}}]),BatchAxis}(_Batch3.default);exports.default=BatchAxis},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_Geom=__webpack_require__(7),_Geom2=_interopRequireDefault(_Geom),_GLShader=__webpack_require__(1),_GLShader2=_interopRequireDefault(_GLShader),_Batch2=__webpack_require__(6),_Batch3=_interopRequireDefault(_Batch2),vs=__webpack_require__(32),fs=__webpack_require__(33),BatchSkybox=function(_Batch){function BatchSkybox(){var size=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;_classCallCheck(this,BatchSkybox);var mesh=_Geom2.default.skybox(size),shader=new _GLShader2.default(vs,fs);return _possibleConstructorReturn(this,(BatchSkybox.__proto__||Object.getPrototypeOf(BatchSkybox)).call(this,mesh,shader))}return _inherits(BatchSkybox,_Batch),_createClass(BatchSkybox,[{key:"draw",value:function(texture){this.shader.bind(),texture.bind(0),_get(BatchSkybox.prototype.__proto__||Object.getPrototypeOf(BatchSkybox.prototype),"draw",this).call(this)}}]),BatchSkybox}(_Batch3.default);exports.default=BatchSkybox},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_Geom=__webpack_require__(7),_Geom2=_interopRequireDefault(_Geom),_GLShader=__webpack_require__(1),_GLShader2=_interopRequireDefault(_GLShader),_Batch2=__webpack_require__(6),_Batch3=_interopRequireDefault(_Batch2),vs=__webpack_require__(75),fs=__webpack_require__(15),BatchSky=function(_Batch){function BatchSky(){var size=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,seg=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24;_classCallCheck(this,BatchSky);var mesh=_Geom2.default.sphere(size,seg,!0),shader=new _GLShader2.default(vs,fs);return _possibleConstructorReturn(this,(BatchSky.__proto__||Object.getPrototypeOf(BatchSky)).call(this,mesh,shader))}return _inherits(BatchSky,_Batch),_createClass(BatchSky,[{key:"draw",value:function(texture){this.shader.bind(),texture.bind(0),_get(BatchSky.prototype.__proto__||Object.getPrototypeOf(BatchSky.prototype),"draw",this).call(this)}}]),BatchSky}(_Batch3.default);exports.default=BatchSky},function(module,exports){module.exports="// sky.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tmat4 matView = uViewMatrix;\n\tmatView[3][0] = 0.0;\n\tmatView[3][1] = 0.0;\n\tmatView[3][2] = 0.0;\n\t\n    gl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}"},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_scheduling=__webpack_require__(4),_scheduling2=_interopRequireDefault(_scheduling),_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_CameraPerspective=__webpack_require__(13),_CameraPerspective2=_interopRequireDefault(_CameraPerspective),_CameraOrtho=__webpack_require__(28),_CameraOrtho2=_interopRequireDefault(_CameraOrtho),_OrbitalControl=__webpack_require__(27),_OrbitalControl2=_interopRequireDefault(_OrbitalControl),Scene=function(){function Scene(){var _this=this;_classCallCheck(this,Scene),this._children=[],this._matrixIdentity=mat4.create(),_GLTool2.default.enableAlphaBlending(),this._init(),this._initTextures(),this._initViews(),this._efIndex=_scheduling2.default.addEF(function(){return _this._loop()}),window.addEventListener("resize",function(){return _this.resize()})}return _createClass(Scene,[{key:"update",value:function(){}},{key:"render",value:function(){}},{key:"stop",value:function(){-1!==this._efIndex&&(this._efIndex=_scheduling2.default.removeEF(this._efIndex))}},{key:"start",value:function(){var _this2=this;-1===this._efIndex&&(this._efIndex=_scheduling2.default.addEF(function(){return _this2._loop()}))}},{key:"resize",value:function(){_GLTool2.default.setSize(window.innerWidth,window.innerHeight),this.camera.setAspectRatio(_GLTool2.default.aspectRatio)}},{key:"addChild",value:function(mChild){this._children.push(mChild)}},{key:"removeChild",value:function(mChild){var index=this._children.indexOf(mChild);if(-1==index)return void console.warn("Child no exist");this._children.splice(index,1)}},{key:"_initTextures",value:function(){}},{key:"_initViews",value:function(){}},{key:"_renderChildren",value:function(){for(var child=void 0,i=0;i<this._children.length;i++)child=this._children[i],child.toRender();_GLTool2.default.rotate(this._matrixIdentity)}},{key:"_init",value:function(){this.camera=new _CameraPerspective2.default,this.camera.setPerspective(45*Math.PI/180,_GLTool2.default.aspectRatio,.1,100),this.orbitalControl=new _OrbitalControl2.default(this.camera,window,15),this.orbitalControl.radius.value=10,this.cameraOrtho=new _CameraOrtho2.default}},{key:"_loop",value:function(){_GLTool2.default.viewport(0,0,_GLTool2.default.width,_GLTool2.default.height),_GLTool2.default.setMatrices(this.camera),this.update(),this._renderChildren(),this.render()}}]),Scene}();exports.default=Scene},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_GLShader=__webpack_require__(1),_GLShader2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_GLShader),View=function(){function View(mStrVertex,mStrFrag){_classCallCheck(this,View),this.shader=new _GLShader2.default(mStrVertex,mStrFrag),this._init()}return _createClass(View,[{key:"_init",value:function(){}},{key:"render",value:function(){}}]),View}();exports.default=View},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Object3D2=__webpack_require__(29),_Object3D3=_interopRequireDefault(_Object3D2),_GLShader=__webpack_require__(1),_GLShader2=_interopRequireDefault(_GLShader),_GLTool=__webpack_require__(0),View3D=(_interopRequireDefault(_GLTool),function(_Object3D){function View3D(mStrVertex,mStrFrag){_classCallCheck(this,View3D);var _this=_possibleConstructorReturn(this,(View3D.__proto__||Object.getPrototypeOf(View3D)).call(this));return _this._children=[],_this.shader=new _GLShader2.default(mStrVertex,mStrFrag),_this._init(),_this}return _inherits(View3D,_Object3D),_createClass(View3D,[{key:"_init",value:function(){}},{key:"render",value:function(){}}]),View3D}(_Object3D3.default));exports.default=View3D},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_GLTool=__webpack_require__(0),_GLTool2=_interopRequireDefault(_GLTool),_Mesh=__webpack_require__(5),_Mesh2=_interopRequireDefault(_Mesh),_GLShader=__webpack_require__(1),_GLShader2=_interopRequireDefault(_GLShader),Draw=function(){function Draw(){return _classCallCheck(this,Draw),this._uniforms={},this._uniformTextures=[],this._fbo,this._clearColor={r:0,g:0,b:0,a:0},this}return _createClass(Draw,[{key:"setClearColor",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,g=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,b=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return this._clearColor.r=r,this._clearColor.g=g,this._clearColor.b=b,this._clearColor.a=a,this}},{key:"useProgram",value:function(vs,fs){return vs instanceof _GLShader2.default?this._shader=vs:this._shader=new _GLShader2.default(vs,fs),this}},{key:"setMesh",value:function(mMesh){return this._mesh=mMesh,this}},{key:"createMesh",value:function(mType){return this._mesh=new _Mesh2.default(mType),this}},{key:"bufferVertex",value:function(mArrayVertices){return this._mesh||(this._mesh=new _Mesh2.default),this._mesh.bufferVertex(mArrayVertices),this}},{key:"bufferTexCoord",value:function(mArrayTexCoords){return this._mesh||(this._mesh=new _Mesh2.default),this._mesh.bufferTexCoord(mArrayTexCoords),this}},{key:"bufferNormal",value:function(mArrayNormals){return this._mesh||(this._mesh=new _Mesh2.default),this._mesh.bufferNormal(mArrayNormals),this}},{key:"bufferIndex",value:function(mIndices){return this._mesh||(this._mesh=new _Mesh2.default),this._mesh.bufferIndex(mIndices),this}},{key:"bufferInstance",value:function(mData,mName){return this._mesh?(this._mesh.bufferInstance(mData,mName),this):(console.warn("Need to create mesh first"),this)}},{key:"bufferData",value:function(mArrayData,mName){return this._mesh||(this._mesh=new _Mesh2.default),this._mesh.bufferData(mArrayData,mName),this}},{key:"uniform",value:function(name,type,value){return this._uniforms[name]={type:type,value:value},this}},{key:"uniformTexture",value:function(name,texture,index){return void 0!==index?this._uniformTextures[index]={name:name,texture:texture}:this._uniformTextures.push({name:name,texture:texture}),this}},{key:"bindFrameBuffer",value:function(fbo){return this._fbo=fbo,this}},{key:"draw",value:function(){var _this=this;if(this._shader&&this._mesh){if(this._fbo){var _clearColor=this._clearColor,r=_clearColor.r,g=_clearColor.g,b=_clearColor.b,a=_clearColor.a;this._fbo.bind(),_GLTool2.default.clear(r,g,b,a)}this._shader.bind();for(var s in this._uniforms){var o=this._uniforms[s];this._shader.uniform(s,o.type,o.value)}return this._uniformTextures.forEach(function(o,i){void 0!==o&&(_this._shader.uniform(o.name,"uniform1i",i),o.texture.bind(i))}),_GLTool2.default.draw(this._mesh),this._fbo&&this._fbo.unbind(),this}}},{key:"shader",get:function(){return this._shader}},{key:"framebuffer",get:function(){return this._fbo}}]),Draw}();exports.default=Draw},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _simpleColor=__webpack_require__(16),_simpleColor2=_interopRequireDefault(_simpleColor),_bigTriangle=__webpack_require__(30),_bigTriangle2=_interopRequireDefault(_bigTriangle),_general=__webpack_require__(31),_general2=_interopRequireDefault(_general),_copy=__webpack_require__(15),_copy2=_interopRequireDefault(_copy),_basic=__webpack_require__(9),_basic2=_interopRequireDefault(_basic),_skybox=__webpack_require__(32),_skybox2=_interopRequireDefault(_skybox),_skybox3=__webpack_require__(33),_skybox4=_interopRequireDefault(_skybox3),ShaderLibs={simpleColorFrag:_simpleColor2.default,bigTriangleVert:_bigTriangle2.default,generalVert:_general2.default,copyFrag:_copy2.default,basicVert:_basic2.default,skyboxVert:_skybox2.default,skyboxFrag:_skybox4.default};exports.default=ShaderLibs},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _FboArray=__webpack_require__(34),_FboArray2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_FboArray),FboPingPong=function(_FboFarray){function FboPingPong(width,height){var params=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},mNumTargets=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return _classCallCheck(this,FboPingPong),_possibleConstructorReturn(this,(FboPingPong.__proto__||Object.getPrototypeOf(FboPingPong)).call(this,2,width,height,params,mNumTargets))}return _inherits(FboPingPong,_FboFarray),FboPingPong}(_FboArray2.default);exports.default=FboPingPong}])});

/***/ }),

/***/ "./node_modules/assets-loader/src/browser-has-blob.js":
/*!************************************************************!*\
  !*** ./node_modules/assets-loader/src/browser-has-blob.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (function() {
    try {
        return !!new Blob();
    } catch (e) {
        return false;
    }
}());


/***/ }),

/***/ "./node_modules/assets-loader/src/emitter.js":
/*!***************************************************!*\
  !*** ./node_modules/assets-loader/src/emitter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EventEmitter = __webpack_require__(/*! events */ "./node_modules/node-libs-browser/node_modules/events/events.js").EventEmitter;

function Emitter() {
    EventEmitter.call(this);
    this.setMaxListeners(20);
}

Emitter.prototype = Object.create(EventEmitter.prototype);
Emitter.prototype.constructor = Emitter;

Emitter.prototype.off = function(type, listener) {
    if (listener) {
        return this.removeListener(type, listener);
    }
    if (type) {
        return this.removeAllListeners(type);
    }
    return this.removeAllListeners();
};

module.exports = Emitter;


/***/ }),

/***/ "./node_modules/assets-loader/src/group.js":
/*!*************************************************!*\
  !*** ./node_modules/assets-loader/src/group.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Emitter = __webpack_require__(/*! ./emitter.js */ "./node_modules/assets-loader/src/emitter.js");
var createLoader = __webpack_require__(/*! ./loader */ "./node_modules/assets-loader/src/loader.js");
var autoId = 0;

module.exports = function createGroup(config) {
    var group;
    var map = {};
    var assets = [];
    var queue = [];
    var numLoaded = 0;
    var numTotal = 0;
    var loaders = {};

    var add = function(options) {
        // console.debug('add', options);
        if (Array.isArray(options)) {
            options.forEach(add);
            return group;
        }
        var isGroup = !!options.assets && Array.isArray(options.assets);
        // console.debug('isGroup', isGroup);
        var loader;
        if (isGroup) {
            loader = createGroup(configure(options, config));
        } else {
            loader = createLoader(configure(options, config));
        }
        loader.once('destroy', destroyHandler);
        queue.push(loader);
        loaders[loader.id] = loader;
        return group;
    };

    var get = function(id) {
        if (!arguments.length) {
            return assets;
        }
        if (map[id]) {
            return map[id];
        }
        return loaders[id];
    };

    var find = function(id) {
        if (get(id)) {
            return get(id);
        }
        var found = null;
        Object.keys(loaders).some(function(key) {
            found = loaders[key].find && loaders[key].find(id);
            return !!found;
        });
        return found;
    };

    var getExtension = function(url) {
        return url && url.split('?')[0].split('.').pop().toLowerCase();
    };

    var configure = function(options, defaults) {
        if (typeof options === 'string') {
            var url = options;
            options = {
                url: url
            };
        }

        if (options.isTouchLocked === undefined) {
            options.isTouchLocked = defaults.isTouchLocked;
        }

        if (options.blob === undefined) {
            options.blob = defaults.blob;
        }

        if (options.basePath === undefined) {
            options.basePath = defaults.basePath;
        }

        options.id = options.id || options.url || String(++autoId);
        options.type = options.type || getExtension(options.url);
        options.crossOrigin = options.crossOrigin || defaults.crossOrigin;
        options.webAudioContext = options.webAudioContext || defaults.webAudioContext;
        options.log = defaults.log;

        return options;
    };

    var start = function() {
        numTotal = queue.length;

        queue.forEach(function(loader) {
            loader
                .on('progress', progressHandler)
                .once('complete', completeHandler)
                .once('error', errorHandler)
                .start();
        });

        queue = [];

        return group;
    };

    var progressHandler = function(progress) {
        var loaded = numLoaded + progress;
        group.emit('progress', loaded / numTotal);
    };

    var completeHandler = function(asset, id, type) {
        if (Array.isArray(asset)) {
            asset = { id: id, file: asset, type: type };
        }
        numLoaded++;
        group.emit('progress', numLoaded / numTotal);
        map[asset.id] = asset.file;
        assets.push(asset);
        group.emit('childcomplete', asset);
        checkComplete();
    };

    var errorHandler = function(err) {
        numTotal--;
        if (group.listeners('error').length) {
            group.emit('error', err);
        } else {
            console.error(err);
        }
        checkComplete();
    };

    var destroyHandler = function(id) {
        loaders[id] = null;
        delete loaders[id];

        map[id] = null;
        delete map[id];

        assets.some(function(asset, i) {
            if (asset.id === id) {
                assets.splice(i, 1);
                return true;
            }
        });
    };

    var checkComplete = function() {
        if (numLoaded >= numTotal) {
            group.emit('complete', assets, map, config.id, 'group');
        }
    };

    var destroy = function() {
        while (queue.length) {
            queue.pop().destroy();
        }
        group.off('error');
        group.off('progress');
        group.off('complete');
        assets = [];
        map = {};
        config.webAudioContext = null;
        numTotal = 0;
        numLoaded = 0;

        Object.keys(loaders).forEach(function(key) {
            loaders[key].destroy();
        });
        loaders = {};

        group.emit('destroy', group.id);

        return group;
    };

    // emits: progress, error, complete, destroy

    group = Object.create(Emitter.prototype, {
        _events: {
            value: {}
        },
        id: {
            get: function() {
                return config.id;
            }
        },
        add: {
            value: add
        },
        start: {
            value: start
        },
        get: {
            value: get
        },
        find: {
            value: find
        },
        getLoader: {
            value: function(id) {
                return loaders[id];
            }
        },
        loaded: {
            get: function() {
                return numLoaded >= numTotal;
            }
        },
        file: {
            get: function() {
                return assets;
            }
        },
        destroy: {
            value: destroy
        }
    });

    config = configure(config || {}, {
        basePath: '',
        blob: false,
        touchLocked: false,
        crossOrigin: null,
        webAudioContext: null,
        log: false
    });

    if (Array.isArray(config.assets)) {
        add(config.assets);
    }

    return group;
};


/***/ }),

/***/ "./node_modules/assets-loader/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/assets-loader/src/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assetsLoader = __webpack_require__(/*! ./group */ "./node_modules/assets-loader/src/group.js");
assetsLoader.stats = __webpack_require__(/*! ./stats */ "./node_modules/assets-loader/src/stats.js");

module.exports = assetsLoader;


/***/ }),

/***/ "./node_modules/assets-loader/src/loader.js":
/*!**************************************************!*\
  !*** ./node_modules/assets-loader/src/loader.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Emitter = __webpack_require__(/*! ./emitter.js */ "./node_modules/assets-loader/src/emitter.js");
var browserHasBlob = __webpack_require__(/*! ./browser-has-blob.js */ "./node_modules/assets-loader/src/browser-has-blob.js");
var stats = __webpack_require__(/*! ./stats */ "./node_modules/assets-loader/src/stats.js");

module.exports = function(options) {
    var id = options.id;
    var basePath = options.basePath || '';
    var url = options.url;
    var type = options.type;
    var crossOrigin = options.crossOrigin;
    var isTouchLocked = options.isTouchLocked;
    var blob = options.blob && browserHasBlob;
    var webAudioContext = options.webAudioContext;
    var log = options.log;

    var loader;
    var loadHandler;
    var request;
    var startTime;
    var timeout;
    var file;

    var start = function() {
        startTime = Date.now();

        switch (type) {
            case 'json':
                loadJSON();
                break;
            case 'jpg':
            case 'png':
            case 'gif':
            case 'webp':
            case 'svg':
                loadImage();
                break;
            case 'mp3':
            case 'ogg':
            case 'opus':
            case 'wav':
            case 'm4a':
                loadAudio();
                break;
            case 'ogv':
            case 'mp4':
            case 'webm':
            case 'hls':
                loadVideo();
                break;
            case 'bin':
            case 'binary':
                loadXHR('arraybuffer');
                break;
            case 'txt':
            case 'text':
                loadXHR('text');
                break;
            default:
                throw 'AssetsLoader ERROR: Unknown type for file with URL: ' + basePath + url + ' (' + type + ')';
        }
    };

    var dispatchComplete = function(data) {
        if (!data) {
            return;
        }
        file = {id: id, file: data, type: type};
        loader.emit('progress', 1);
        loader.emit('complete', file, id, type);
        removeListeners();
    };

    var loadXHR = function(responseType, customLoadHandler) {
        loadHandler = customLoadHandler || completeHandler;

        request = new XMLHttpRequest();
        request.open('GET', basePath + url, true);
        request.responseType = responseType;
        request.addEventListener('progress', progressHandler);
        request.addEventListener('load', loadHandler);
        request.addEventListener('error', errorHandler);
        request.send();
    };

    var progressHandler = function(event) {
        if (event.lengthComputable) {
            loader.emit('progress', event.loaded / event.total);
        }
    };

    var completeHandler = function() {
        if (success()) {
            dispatchComplete(request.response);
        }
    };

    var success = function() {
        // console.log('success', url, request.status);
        if (request && request.status < 400) {
            stats.update(request, startTime, url, log);
            return true;
        }
        errorHandler(request && request.statusText);
        return false;
    };

    // json

    var loadJSON = function() {
        loadXHR('json', function() {
            if (success()) {
                var data = request.response;
                if (typeof data === 'string') {
                    data = JSON.parse(data);
                }
                dispatchComplete(data);
            }
        });
    };

    // image

    var loadImage = function() {
        if (blob) {
            loadImageBlob();
        } else {
            loadImageElement();
        }
    };

    var loadImageElement = function() {
        request = new Image();
        if (crossOrigin) {
            request.crossOrigin = 'anonymous';
        }
        request.addEventListener('error', errorHandler, false);
        request.addEventListener('load', elementLoadHandler, false);
        request.src = basePath + url;
    };

    var elementLoadHandler = function(event) {
        window.clearTimeout(timeout);
        if (!event && (request.error || !request.readyState)) {
            errorHandler();
            return;
        }
        dispatchComplete(request);
    };

    var loadImageBlob = function() {
        loadXHR('blob', function() {
            if (success()) {
                request = new Image();
                request.addEventListener('error', errorHandler, false);
                request.addEventListener('load', imageBlobHandler, false);
                request.src = window.URL.createObjectURL(request.response);
            }
        });
    };

    var imageBlobHandler = function() {
        window.URL.revokeObjectURL(request.src);
        dispatchComplete(request);
    };

    // audio

    var loadAudio = function() {
        if (webAudioContext) {
            loadAudioBuffer();
        } else {
            loadMediaElement('audio');
        }
    };

    // video

    var loadVideo = function() {
        if (blob) {
            loadXHR('blob');
        } else {
            loadMediaElement('video');
        }
    };

    // audio buffer

    var loadAudioBuffer = function() {
        loadXHR('arraybuffer', function() {
            if (success()) {
                webAudioContext.decodeAudioData(
                    request.response,
                    function(buffer) {
                        request = null;
                        dispatchComplete(buffer);
                    },
                    function(e) {
                        errorHandler(e);
                    }
                );
            }
        });
    };

    // media element

    var loadMediaElement = function(tagName) {
        request = document.createElement(tagName);

        if (!isTouchLocked) {
            // timeout because sometimes canplaythrough doesn't fire
            window.clearTimeout(timeout);
            timeout = window.setTimeout(elementLoadHandler, 2000);
            request.addEventListener('canplaythrough', elementLoadHandler, false);
        }

        request.addEventListener('error', errorHandler, false);
        request.preload = 'auto';
        request.src = basePath + url;
        request.load();

        if (isTouchLocked) {
            dispatchComplete(request);
        }
    };

    // error

    var errorHandler = function(err) {
        // console.log('errorHandler', url, err);
        window.clearTimeout(timeout);

        var message = err;

        if (request && request.tagName && request.error) {
            var ERROR_STATE = ['', 'ABORTED', 'NETWORK', 'DECODE', 'SRC_NOT_SUPPORTED'];
            message = 'MediaError: ' + ERROR_STATE[request.error.code] + ' ' + request.src;
        } else if (request && request.statusText) {
            message = request.statusText;
        } else if (err && err.message) {
            message = err.message;
        } else if (err && err.type) {
            message = err.type;
        }

        loader.emit('error', 'Error loading "' + basePath + url + '" ' + message);

        destroy();
    };

    // clean up

    var removeListeners = function() {
        loader.off('error');
        loader.off('progress');
        loader.off('complete');

        if (request) {
            request.removeEventListener('progress', progressHandler);
            request.removeEventListener('load', loadHandler);
            request.removeEventListener('error', errorHandler);
            request.removeEventListener('load', elementLoadHandler);
            request.removeEventListener('canplaythrough', elementLoadHandler);
            request.removeEventListener('load', imageBlobHandler);
        }
    };

    var destroy = function() {
        removeListeners();

        if (request && request.abort && request.readyState < 4) {
            request.abort();
        }

        request = null;
        webAudioContext = null;
        file = null;

        window.clearTimeout(timeout);

        loader.emit('destroy', id);
    };

    // emits: progress, error, complete

    loader = Object.create(Emitter.prototype, {
        _events: {
            value: {}
        },
        id: {
            value: options.id
        },
        start: {
            value: start
        },
        loaded: {
            get: function() {
                return !!file;
            }
        },
        file: {
            get: function() {
                return file;
            }
        },
        destroy: {
            value: destroy
        }
    });

    return loader;
};


/***/ }),

/***/ "./node_modules/assets-loader/src/stats.js":
/*!*************************************************!*\
  !*** ./node_modules/assets-loader/src/stats.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    mbs: 0,
    secs: 0,
    update: function(request, startTime, url, log) {
        var length;
        var headers = request.getAllResponseHeaders();
        if (headers) {
            var match = headers.match(/content-length: (\d+)/i);
            if (match && match.length) {
                length = match[1];
            }
        }
        // var length = request.getResponseHeader('Content-Length');
        if (length) {
            length = parseInt(length, 10);
            var mbs = length / 1024 / 1024;
            var secs = (Date.now() - startTime) / 1000;
            this.secs += secs;
            this.mbs += mbs;
            if (log) {
                this.log(url, mbs, secs);
            }
        } else if(log) {
            console.warn.call(console, 'Can\'t get Content-Length:', url);
        }
    },
    log: function(url, mbs, secs) {
        if (url) {
            var file = 'File loaded: ' +
                url.substr(url.lastIndexOf('/') + 1) +
                ' size:' + mbs.toFixed(2) + 'mb' +
                ' time:' + secs.toFixed(2) + 's' +
                ' speed:' + (mbs / secs).toFixed(2) + 'mbps';

            console.log.call(console, file);
        }
        var total = 'Total loaded: ' + this.mbs.toFixed(2) + 'mb' +
            ' time:' + this.secs.toFixed(2) + 's' +
            ' speed:' + this.getMbps().toFixed(2) + 'mbps';
        console.log.call(console, total);
    },
    getMbps: function() {
        return this.mbs / this.secs;
    }
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/global.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/global.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  position: fixed;\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#6d6d6d+0,000000+100 */\n  background: #333333;\n  /* Old browsers */\n  background: -moz-radial-gradient(center, ellipse cover, #333333 0%, #000000 100%);\n  /* FF3.6-15 */\n  background: -webkit-radial-gradient(center, ellipse cover, #333333 0%, #000000 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: radial-gradient(ellipse at center, #333333 0%, #000000 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ }\n\nhtml {\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  text-size-adjust: none; }\n\nh1, h2, h3, h4, text, p {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-webkit-font-smoothing: antialiased;\n  font-family: 'Open Sans', sans-serif; }\n\n.Main-Canvas {\n  user-select: none;\n  opacity: 1;\n  transition: opacity .5s ease-out .25s; }\n  .isLoading .Main-Canvas {\n    opacity: 0; }\n\n.container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.Message {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  top: calc(50% - 50px);\n  text-align: center;\n  letter-spacing: 11px;\n  color: white;\n  opacity: 0;\n  transition: opacity .5s ease-out, letter-spacing .5s ease-out; }\n  .isLoading .Message {\n    letter-spacing: 10px;\n    opacity: 1; }\n\n.Loading-Bar {\n  position: absolute;\n  z-index: 998;\n  width: 0%;\n  height: 1px;\n  top: 50%;\n  background: rgba(255, 255, 255, 0.5);\n  opacity: 0;\n  transition: width .5s ease-out, opacity .5s ease-out; }\n  .isLoading .Loading-Bar {\n    opacity: 1; }\n\n.env {\n  position: fixed;\n  width: 100%;\n  z-index: 9999;\n  color: white;\n  top: 100px;\n  font-size: 24px;\n  padding: 20px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/fast-url-parser/src/urlparser.js":
/*!*******************************************************!*\
  !*** ./node_modules/fast-url-parser/src/urlparser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
Copyright (c) 2014 Petka Antonov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
function Url() {
    //For more efficient internal representation and laziness.
    //The non-underscore versions of these properties are accessor functions
    //defined on the prototype.
    this._protocol = null;
    this._href = "";
    this._port = -1;
    this._query = null;

    this.auth = null;
    this.slashes = null;
    this.host = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.pathname = null;

    this._prependSlash = false;
}

var querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

Url.queryString = querystring;

Url.prototype.parse =
function Url$parse(str, parseQueryString, hostDenotesSlash, disableAutoEscapeChars) {
    if (typeof str !== "string") {
        throw new TypeError("Parameter 'url' must be a string, not " +
            typeof str);
    }
    var start = 0;
    var end = str.length - 1;

    //Trim leading and trailing ws
    while (str.charCodeAt(start) <= 0x20 /*' '*/) start++;
    while (str.charCodeAt(end) <= 0x20 /*' '*/) end--;

    start = this._parseProtocol(str, start, end);

    //Javascript doesn't have host
    if (this._protocol !== "javascript") {
        start = this._parseHost(str, start, end, hostDenotesSlash);
        var proto = this._protocol;
        if (!this.hostname &&
            (this.slashes || (proto && !slashProtocols[proto]))) {
            this.hostname = this.host = "";
        }
    }

    if (start <= end) {
        var ch = str.charCodeAt(start);

        if (ch === 0x2F /*'/'*/ || ch === 0x5C /*'\'*/) {
            this._parsePath(str, start, end, disableAutoEscapeChars);
        }
        else if (ch === 0x3F /*'?'*/) {
            this._parseQuery(str, start, end, disableAutoEscapeChars);
        }
        else if (ch === 0x23 /*'#'*/) {
          this._parseHash(str, start, end, disableAutoEscapeChars);
        }
        else if (this._protocol !== "javascript") {
            this._parsePath(str, start, end, disableAutoEscapeChars);
        }
        else { //For javascript the pathname is just the rest of it
            this.pathname = str.slice(start, end + 1 );
        }

    }

    if (!this.pathname && this.hostname &&
        this._slashProtocols[this._protocol]) {
        this.pathname = "/";
    }

    if (parseQueryString) {
        var search = this.search;
        if (search == null) {
            search = this.search = "";
        }
        if (search.charCodeAt(0) === 0x3F /*'?'*/) {
            search = search.slice(1);
        }
        //This calls a setter function, there is no .query data property
        this.query = Url.queryString.parse(search);
    }
};

Url.prototype.resolve = function Url$resolve(relative) {
    return this.resolveObject(Url.parse(relative, false, true)).format();
};

Url.prototype.format = function Url$format() {
    var auth = this.auth || "";

    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ":");
        auth += "@";
    }

    var protocol = this.protocol || "";
    var pathname = this.pathname || "";
    var hash = this.hash || "";
    var search = this.search || "";
    var query = "";
    var hostname = this.hostname || "";
    var port = this.port || "";
    var host = false;
    var scheme = "";

    //Cache the result of the getter function
    var q = this.query;
    if (q && typeof q === "object") {
        query = Url.queryString.stringify(q);
    }

    if (!search) {
        search = query ? "?" + query : "";
    }

    if (protocol && protocol.charCodeAt(protocol.length - 1) !== 0x3A /*':'*/)
        protocol += ":";

    if (this.host) {
        host = auth + this.host;
    }
    else if (hostname) {
        var ip6 = hostname.indexOf(":") > -1;
        if (ip6) hostname = "[" + hostname + "]";
        host = auth + hostname + (port ? ":" + port : "");
    }

    var slashes = this.slashes ||
        ((!protocol ||
        slashProtocols[protocol]) && host !== false);


    if (protocol) scheme = protocol + (slashes ? "//" : "");
    else if (slashes) scheme = "//";

    if (slashes && pathname && pathname.charCodeAt(0) !== 0x2F /*'/'*/) {
        pathname = "/" + pathname;
    }
    if (search && search.charCodeAt(0) !== 0x3F /*'?'*/)
        search = "?" + search;
    if (hash && hash.charCodeAt(0) !== 0x23 /*'#'*/)
        hash = "#" + hash;

    pathname = escapePathName(pathname);
    search = escapeSearch(search);

    return scheme + (host === false ? "" : host) + pathname + search + hash;
};

Url.prototype.resolveObject = function Url$resolveObject(relative) {
    if (typeof relative === "string")
        relative = Url.parse(relative, false, true);

    var result = this._clone();

    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;

    // if the relative url is empty, then there"s nothing left to do here.
    if (!relative.href) {
        result._href = "";
        return result;
    }

    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative._protocol) {
        relative._copyPropsTo(result, true);

        if (slashProtocols[result._protocol] &&
            result.hostname && !result.pathname) {
            result.pathname = "/";
        }
        result._href = "";
        return result;
    }

    if (relative._protocol && relative._protocol !== result._protocol) {
        // if it"s a known url protocol, then changing
        // the protocol does weird things
        // first, if it"s not file:, then we MUST have a host,
        // and if there was a path
        // to begin with, then we MUST have a path.
        // if it is file:, then the host is dropped,
        // because that"s known to be hostless.
        // anything else is assumed to be absolute.
        if (!slashProtocols[relative._protocol]) {
            relative._copyPropsTo(result, false);
            result._href = "";
            return result;
        }

        result._protocol = relative._protocol;
        if (!relative.host && relative._protocol !== "javascript") {
            var relPath = (relative.pathname || "").split("/");
            while (relPath.length && !(relative.host = relPath.shift()));
            if (!relative.host) relative.host = "";
            if (!relative.hostname) relative.hostname = "";
            if (relPath[0] !== "") relPath.unshift("");
            if (relPath.length < 2) relPath.unshift("");
            result.pathname = relPath.join("/");
        } else {
            result.pathname = relative.pathname;
        }

        result.search = relative.search;
        result.host = relative.host || "";
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result._port = relative._port;
        result.slashes = result.slashes || relative.slashes;
        result._href = "";
        return result;
    }

    var isSourceAbs =
        (result.pathname && result.pathname.charCodeAt(0) === 0x2F /*'/'*/);
    var isRelAbs = (
            relative.host ||
            (relative.pathname &&
            relative.pathname.charCodeAt(0) === 0x2F /*'/'*/)
        );
    var mustEndAbs = (isRelAbs || isSourceAbs ||
                        (result.host && relative.pathname));

    var removeAllDots = mustEndAbs;

    var srcPath = result.pathname && result.pathname.split("/") || [];
    var relPath = relative.pathname && relative.pathname.split("/") || [];
    var psychotic = result._protocol && !slashProtocols[result._protocol];

    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
        result.hostname = "";
        result._port = -1;
        if (result.host) {
            if (srcPath[0] === "") srcPath[0] = result.host;
            else srcPath.unshift(result.host);
        }
        result.host = "";
        if (relative._protocol) {
            relative.hostname = "";
            relative._port = -1;
            if (relative.host) {
                if (relPath[0] === "") relPath[0] = relative.host;
                else relPath.unshift(relative.host);
            }
            relative.host = "";
        }
        mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
    }

    if (isRelAbs) {
        // it"s absolute.
        result.host = relative.host ?
            relative.host : result.host;
        result.hostname = relative.hostname ?
            relative.hostname : result.hostname;
        result.search = relative.search;
        srcPath = relPath;
        // fall through to the dot-handling below.
    } else if (relPath.length) {
        // it"s relative
        // throw away the existing file, and take the new path instead.
        if (!srcPath) srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
    } else if (relative.search) {
        // just pull out the search.
        // like href="?foo".
        // Put this after the other two cases because it simplifies the booleans
        if (psychotic) {
            result.hostname = result.host = srcPath.shift();
            //occationaly the auth can get stuck only in host
            //this especialy happens in cases like
            //url.resolveObject("mailto:local1@domain1", "local2@domain2")
            var authInHost = result.host && result.host.indexOf("@") > 0 ?
                result.host.split("@") : false;
            if (authInHost) {
                result.auth = authInHost.shift();
                result.host = result.hostname = authInHost.shift();
            }
        }
        result.search = relative.search;
        result._href = "";
        return result;
    }

    if (!srcPath.length) {
        // no path at all.  easy.
        // we"ve already handled the other stuff above.
        result.pathname = null;
        result._href = "";
        return result;
    }

    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (
        (result.host || relative.host) && (last === "." || last === "..") ||
        last === "");

    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
        last = srcPath[i];
        if (last === ".") {
            srcPath.splice(i, 1);
        } else if (last === "..") {
            srcPath.splice(i, 1);
            up++;
        } else if (up) {
            srcPath.splice(i, 1);
            up--;
        }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) {
        for (; up--; up) {
            srcPath.unshift("..");
        }
    }

    if (mustEndAbs && srcPath[0] !== "" &&
        (!srcPath[0] || srcPath[0].charCodeAt(0) !== 0x2F /*'/'*/)) {
        srcPath.unshift("");
    }

    if (hasTrailingSlash && (srcPath.join("/").substr(-1) !== "/")) {
        srcPath.push("");
    }

    var isAbsolute = srcPath[0] === "" ||
        (srcPath[0] && srcPath[0].charCodeAt(0) === 0x2F /*'/'*/);

    // put the host back
    if (psychotic) {
        result.hostname = result.host = isAbsolute ? "" :
            srcPath.length ? srcPath.shift() : "";
        //occationaly the auth can get stuck only in host
        //this especialy happens in cases like
        //url.resolveObject("mailto:local1@domain1", "local2@domain2")
        var authInHost = result.host && result.host.indexOf("@") > 0 ?
            result.host.split("@") : false;
        if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
        }
    }

    mustEndAbs = mustEndAbs || (result.host && srcPath.length);

    if (mustEndAbs && !isAbsolute) {
        srcPath.unshift("");
    }

    result.pathname = srcPath.length === 0 ? null : srcPath.join("/");
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result._href = "";
    return result;
};

var punycode = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.js");
Url.prototype._hostIdna = function Url$_hostIdna(hostname) {
    // IDNA Support: Returns a punycoded representation of "domain".
    // It only converts parts of the domain name that
    // have non-ASCII characters, i.e. it doesn't matter if
    // you call it with a domain that already is ASCII-only.
    return punycode.toASCII(hostname);
};

var escapePathName = Url.prototype._escapePathName =
function Url$_escapePathName(pathname) {
    if (!containsCharacter2(pathname, 0x23 /*'#'*/, 0x3F /*'?'*/)) {
        return pathname;
    }
    //Avoid closure creation to keep this inlinable
    return _escapePath(pathname);
};

var escapeSearch = Url.prototype._escapeSearch =
function Url$_escapeSearch(search) {
    if (!containsCharacter2(search, 0x23 /*'#'*/, -1)) return search;
    //Avoid closure creation to keep this inlinable
    return _escapeSearch(search);
};

Url.prototype._parseProtocol = function Url$_parseProtocol(str, start, end) {
    var doLowerCase = false;
    var protocolCharacters = this._protocolCharacters;

    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);

        if (ch === 0x3A /*':'*/) {
            var protocol = str.slice(start, i);
            if (doLowerCase) protocol = protocol.toLowerCase();
            this._protocol = protocol;
            return i + 1;
        }
        else if (protocolCharacters[ch] === 1) {
            if (ch < 0x61 /*'a'*/)
                doLowerCase = true;
        }
        else {
            return start;
        }

    }
    return start;
};

Url.prototype._parseAuth = function Url$_parseAuth(str, start, end, decode) {
    var auth = str.slice(start, end + 1);
    if (decode) {
        auth = decodeURIComponent(auth);
    }
    this.auth = auth;
};

Url.prototype._parsePort = function Url$_parsePort(str, start, end) {
    //Internal format is integer for more efficient parsing
    //and for efficient trimming of leading zeros
    var port = 0;
    //Distinguish between :0 and : (no port number at all)
    var hadChars = false;
    var validPort = true;

    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);

        if (0x30 /*'0'*/ <= ch && ch <= 0x39 /*'9'*/) {
            port = (10 * port) + (ch - 0x30 /*'0'*/);
            hadChars = true;
        }
        else {
            validPort = false;
            if (ch === 0x5C/*'\'*/ || ch === 0x2F/*'/'*/) {
                validPort = true;
            }
            break;
        }

    }
    if ((port === 0 && !hadChars) || !validPort) {
        if (!validPort) {
            this._port = -2;
        }
        return 0;
    }

    this._port = port;
    return i - start;
};

Url.prototype._parseHost =
function Url$_parseHost(str, start, end, slashesDenoteHost) {
    var hostEndingCharacters = this._hostEndingCharacters;
    var first = str.charCodeAt(start);
    var second = str.charCodeAt(start + 1);
    if ((first === 0x2F /*'/'*/ || first === 0x5C /*'\'*/) &&
        (second === 0x2F /*'/'*/ || second === 0x5C /*'\'*/)) {
        this.slashes = true;

        //The string starts with //
        if (start === 0) {
            //The string is just "//"
            if (end < 2) return start;
            //If slashes do not denote host and there is no auth,
            //there is no host when the string starts with //
            var hasAuth =
                containsCharacter(str, 0x40 /*'@'*/, 2, hostEndingCharacters);
            if (!hasAuth && !slashesDenoteHost) {
                this.slashes = null;
                return start;
            }
        }
        //There is a host that starts after the //
        start += 2;
    }
    //If there is no slashes, there is no hostname if
    //1. there was no protocol at all
    else if (!this._protocol ||
        //2. there was a protocol that requires slashes
        //e.g. in 'http:asd' 'asd' is not a hostname
        slashProtocols[this._protocol]
    ) {
        return start;
    }

    var doLowerCase = false;
    var idna = false;
    var hostNameStart = start;
    var hostNameEnd = end;
    var lastCh = -1;
    var portLength = 0;
    var charsAfterDot = 0;
    var authNeedsDecoding = false;

    var j = -1;

    //Find the last occurrence of an @-sign until hostending character is met
    //also mark if decoding is needed for the auth portion
    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);

        if (ch === 0x40 /*'@'*/) {
            j = i;
        }
        //This check is very, very cheap. Unneeded decodeURIComponent is very
        //very expensive
        else if (ch === 0x25 /*'%'*/) {
            authNeedsDecoding = true;
        }
        else if (hostEndingCharacters[ch] === 1) {
            break;
        }
    }

    //@-sign was found at index j, everything to the left from it
    //is auth part
    if (j > -1) {
        this._parseAuth(str, start, j - 1, authNeedsDecoding);
        //hostname starts after the last @-sign
        start = hostNameStart = j + 1;
    }

    //Host name is starting with a [
    if (str.charCodeAt(start) === 0x5B /*'['*/) {
        for (var i = start + 1; i <= end; ++i) {
            var ch = str.charCodeAt(i);

            //Assume valid IP6 is between the brackets
            if (ch === 0x5D /*']'*/) {
                if (str.charCodeAt(i + 1) === 0x3A /*':'*/) {
                    portLength = this._parsePort(str, i + 2, end) + 1;
                }
                var hostname = str.slice(start + 1, i).toLowerCase();
                this.hostname = hostname;
                this.host = this._port > 0 ?
                    "[" + hostname + "]:" + this._port :
                    "[" + hostname + "]";
                this.pathname = "/";
                return i + portLength + 1;
            }
        }
        //Empty hostname, [ starts a path
        return start;
    }

    for (var i = start; i <= end; ++i) {
        if (charsAfterDot > 62) {
            this.hostname = this.host = str.slice(start, i);
            return i;
        }
        var ch = str.charCodeAt(i);

        if (ch === 0x3A /*':'*/) {
            portLength = this._parsePort(str, i + 1, end) + 1;
            hostNameEnd = i - 1;
            break;
        }
        else if (ch < 0x61 /*'a'*/) {
            if (ch === 0x2E /*'.'*/) {
                //Node.js ignores this error
                /*
                if (lastCh === DOT || lastCh === -1) {
                    this.hostname = this.host = "";
                    return start;
                }
                */
                charsAfterDot = -1;
            }
            else if (0x41 /*'A'*/ <= ch && ch <= 0x5A /*'Z'*/) {
                doLowerCase = true;
            }
            //Valid characters other than ASCII letters -, _, +, 0-9
            else if (!(ch === 0x2D /*'-'*/ ||
                       ch === 0x5F /*'_'*/ ||
                       ch === 0x2B /*'+'*/ ||
                       (0x30 /*'0'*/ <= ch && ch <= 0x39 /*'9'*/))
                ) {
                if (hostEndingCharacters[ch] === 0 &&
                    this._noPrependSlashHostEnders[ch] === 0) {
                    this._prependSlash = true;
                }
                hostNameEnd = i - 1;
                break;
            }
        }
        else if (ch >= 0x7B /*'{'*/) {
            if (ch <= 0x7E /*'~'*/) {
                if (this._noPrependSlashHostEnders[ch] === 0) {
                    this._prependSlash = true;
                }
                hostNameEnd = i - 1;
                break;
            }
            idna = true;
        }
        lastCh = ch;
        charsAfterDot++;
    }

    //Node.js ignores this error
    /*
    if (lastCh === DOT) {
        hostNameEnd--;
    }
    */

    if (hostNameEnd + 1 !== start &&
        hostNameEnd - hostNameStart <= 256) {
        var hostname = str.slice(hostNameStart, hostNameEnd + 1);
        if (doLowerCase) hostname = hostname.toLowerCase();
        if (idna) hostname = this._hostIdna(hostname);
        this.hostname = hostname;
        this.host = this._port > 0 ? hostname + ":" + this._port : hostname;
    }

    return hostNameEnd + 1 + portLength;

};

Url.prototype._copyPropsTo = function Url$_copyPropsTo(input, noProtocol) {
    if (!noProtocol) {
        input._protocol = this._protocol;
    }
    input._href = this._href;
    input._port = this._port;
    input._prependSlash = this._prependSlash;
    input.auth = this.auth;
    input.slashes = this.slashes;
    input.host = this.host;
    input.hostname = this.hostname;
    input.hash = this.hash;
    input.search = this.search;
    input.pathname = this.pathname;
};

Url.prototype._clone = function Url$_clone() {
    var ret = new Url();
    ret._protocol = this._protocol;
    ret._href = this._href;
    ret._port = this._port;
    ret._prependSlash = this._prependSlash;
    ret.auth = this.auth;
    ret.slashes = this.slashes;
    ret.host = this.host;
    ret.hostname = this.hostname;
    ret.hash = this.hash;
    ret.search = this.search;
    ret.pathname = this.pathname;
    return ret;
};

Url.prototype._getComponentEscaped =
function Url$_getComponentEscaped(str, start, end, isAfterQuery) {
    var cur = start;
    var i = start;
    var ret = "";
    var autoEscapeMap = isAfterQuery ?
        this._afterQueryAutoEscapeMap : this._autoEscapeMap;
    for (; i <= end; ++i) {
        var ch = str.charCodeAt(i);
        var escaped = autoEscapeMap[ch];

        if (escaped !== "" && escaped !== undefined) {
            if (cur < i) ret += str.slice(cur, i);
            ret += escaped;
            cur = i + 1;
        }
    }
    if (cur < i + 1) ret += str.slice(cur, i);
    return ret;
};

Url.prototype._parsePath =
function Url$_parsePath(str, start, end, disableAutoEscapeChars) {
    var pathStart = start;
    var pathEnd = end;
    var escape = false;
    var autoEscapeCharacters = this._autoEscapeCharacters;
    var prePath = this._port === -2 ? "/:" : "";

    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);
        if (ch === 0x23 /*'#'*/) {
          this._parseHash(str, i, end, disableAutoEscapeChars);
            pathEnd = i - 1;
            break;
        }
        else if (ch === 0x3F /*'?'*/) {
            this._parseQuery(str, i, end, disableAutoEscapeChars);
            pathEnd = i - 1;
            break;
        }
        else if (!disableAutoEscapeChars && !escape && autoEscapeCharacters[ch] === 1) {
            escape = true;
        }
    }

    if (pathStart > pathEnd) {
        this.pathname = prePath === "" ? "/" : prePath;
        return;
    }

    var path;
    if (escape) {
        path = this._getComponentEscaped(str, pathStart, pathEnd, false);
    }
    else {
        path = str.slice(pathStart, pathEnd + 1);
    }
    this.pathname = prePath === ""
        ? (this._prependSlash ? "/" + path : path)
        : prePath + path;
};

Url.prototype._parseQuery = function Url$_parseQuery(str, start, end, disableAutoEscapeChars) {
    var queryStart = start;
    var queryEnd = end;
    var escape = false;
    var autoEscapeCharacters = this._autoEscapeCharacters;

    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);

        if (ch === 0x23 /*'#'*/) {
            this._parseHash(str, i, end, disableAutoEscapeChars);
            queryEnd = i - 1;
            break;
        }
        else if (!disableAutoEscapeChars && !escape && autoEscapeCharacters[ch] === 1) {
            escape = true;
        }
    }

    if (queryStart > queryEnd) {
        this.search = "";
        return;
    }

    var query;
    if (escape) {
        query = this._getComponentEscaped(str, queryStart, queryEnd, true);
    }
    else {
        query = str.slice(queryStart, queryEnd + 1);
    }
    this.search = query;
};

Url.prototype._parseHash = function Url$_parseHash(str, start, end, disableAutoEscapeChars) {
    if (start > end) {
        this.hash = "";
        return;
    }

    this.hash = disableAutoEscapeChars ?
        str.slice(start, end + 1) : this._getComponentEscaped(str, start, end, true);
};

Object.defineProperty(Url.prototype, "port", {
    get: function() {
        if (this._port >= 0) {
            return ("" + this._port);
        }
        return null;
    },
    set: function(v) {
        if (v == null) {
            this._port = -1;
        }
        else {
            this._port = parseInt(v, 10);
        }
    }
});

Object.defineProperty(Url.prototype, "query", {
    get: function() {
        var query = this._query;
        if (query != null) {
            return query;
        }
        var search = this.search;

        if (search) {
            if (search.charCodeAt(0) === 0x3F /*'?'*/) {
                search = search.slice(1);
            }
            if (search !== "") {
                this._query = search;
                return search;
            }
        }
        return search;
    },
    set: function(v) {
        this._query = v;
    }
});

Object.defineProperty(Url.prototype, "path", {
    get: function() {
        var p = this.pathname || "";
        var s = this.search || "";
        if (p || s) {
            return p + s;
        }
        return (p == null && s) ? ("/" + s) : null;
    },
    set: function() {}
});

Object.defineProperty(Url.prototype, "protocol", {
    get: function() {
        var proto = this._protocol;
        return proto ? proto + ":" : proto;
    },
    set: function(v) {
        if (typeof v === "string") {
            var end = v.length - 1;
            if (v.charCodeAt(end) === 0x3A /*':'*/) {
                this._protocol = v.slice(0, end);
            }
            else {
                this._protocol = v;
            }
        }
        else if (v == null) {
            this._protocol = null;
        }
    }
});

Object.defineProperty(Url.prototype, "href", {
    get: function() {
        var href = this._href;
        if (!href) {
            href = this._href = this.format();
        }
        return href;
    },
    set: function(v) {
        this._href = v;
    }
});

Url.parse = function Url$Parse(str, parseQueryString, hostDenotesSlash, disableAutoEscapeChars) {
    if (str instanceof Url) return str;
    var ret = new Url();
    ret.parse(str, !!parseQueryString, !!hostDenotesSlash, !!disableAutoEscapeChars);
    return ret;
};

Url.format = function Url$Format(obj) {
    if (typeof obj === "string") {
        obj = Url.parse(obj);
    }
    if (!(obj instanceof Url)) {
        return Url.prototype.format.call(obj);
    }
    return obj.format();
};

Url.resolve = function Url$Resolve(source, relative) {
    return Url.parse(source, false, true).resolve(relative);
};

Url.resolveObject = function Url$ResolveObject(source, relative) {
    if (!source) return relative;
    return Url.parse(source, false, true).resolveObject(relative);
};

function _escapePath(pathname) {
    return pathname.replace(/[?#]/g, function(match) {
        return encodeURIComponent(match);
    });
}

function _escapeSearch(search) {
    return search.replace(/#/g, function(match) {
        return encodeURIComponent(match);
    });
}

//Search `char1` (integer code for a character) in `string`
//starting from `fromIndex` and ending at `string.length - 1`
//or when a stop character is found
function containsCharacter(string, char1, fromIndex, stopCharacterTable) {
    var len = string.length;
    for (var i = fromIndex; i < len; ++i) {
        var ch = string.charCodeAt(i);

        if (ch === char1) {
            return true;
        }
        else if (stopCharacterTable[ch] === 1) {
            return false;
        }
    }
    return false;
}

//See if `char1` or `char2` (integer codes for characters)
//is contained in `string`
function containsCharacter2(string, char1, char2) {
    for (var i = 0, len = string.length; i < len; ++i) {
        var ch = string.charCodeAt(i);
        if (ch === char1 || ch === char2) return true;
    }
    return false;
}

//Makes an array of 128 uint8's which represent boolean values.
//Spec is an array of ascii code points or ascii code point ranges
//ranges are expressed as [start, end]

//Create a table with the characters 0x30-0x39 (decimals '0' - '9') and
//0x7A (lowercaseletter 'z') as `true`:
//
//var a = makeAsciiTable([[0x30, 0x39], 0x7A]);
//a[0x30]; //1
//a[0x15]; //0
//a[0x35]; //1
function makeAsciiTable(spec) {
    var ret = new Uint8Array(128);
    spec.forEach(function(item){
        if (typeof item === "number") {
            ret[item] = 1;
        }
        else {
            var start = item[0];
            var end = item[1];
            for (var j = start; j <= end; ++j) {
                ret[j] = 1;
            }
        }
    });

    return ret;
}


var autoEscape = ["<", ">", "\"", "`", " ", "\r", "\n",
    "\t", "{", "}", "|", "\\", "^", "`", "'"];

var autoEscapeMap = new Array(128);



for (var i = 0, len = autoEscapeMap.length; i < len; ++i) {
    autoEscapeMap[i] = "";
}

for (var i = 0, len = autoEscape.length; i < len; ++i) {
    var c = autoEscape[i];
    var esc = encodeURIComponent(c);
    if (esc === c) {
        esc = escape(c);
    }
    autoEscapeMap[c.charCodeAt(0)] = esc;
}
var afterQueryAutoEscapeMap = autoEscapeMap.slice();
autoEscapeMap[0x5C /*'\'*/] = "/";

var slashProtocols = Url.prototype._slashProtocols = {
    http: true,
    https: true,
    gopher: true,
    file: true,
    ftp: true,

    "http:": true,
    "https:": true,
    "gopher:": true,
    "file:": true,
    "ftp:": true
};

//Optimize back from normalized object caused by non-identifier keys
function f(){}
f.prototype = slashProtocols;

Url.prototype._protocolCharacters = makeAsciiTable([
    [0x61 /*'a'*/, 0x7A /*'z'*/],
    [0x41 /*'A'*/, 0x5A /*'Z'*/],
    0x2E /*'.'*/, 0x2B /*'+'*/, 0x2D /*'-'*/
]);

Url.prototype._hostEndingCharacters = makeAsciiTable([
    0x23 /*'#'*/, 0x3F /*'?'*/, 0x2F /*'/'*/, 0x5C /*'\'*/
]);

Url.prototype._autoEscapeCharacters = makeAsciiTable(
    autoEscape.map(function(v) {
        return v.charCodeAt(0);
    })
);

//If these characters end a host name, the path will not be prepended a /
Url.prototype._noPrependSlashHostEnders = makeAsciiTable(
    [
        "<", ">", "'", "`", " ", "\r",
        "\n", "\t", "{", "}", "|",
        "^", "`", "\"", "%", ";"
    ].map(function(v) {
        return v.charCodeAt(0);
    })
);

Url.prototype._autoEscapeMap = autoEscapeMap;
Url.prototype._afterQueryAutoEscapeMap = afterQueryAutoEscapeMap;

module.exports = Url;

Url.replace = function Url$Replace() {
    __webpack_require__.c.url = {
        exports: Url
    };
};


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/events/events.js":
/*!**********************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/events/events.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/punycode/punycode.js":
/*!*******************************************!*\
  !*** ./node_modules/punycode/punycode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/querystringparser/js/querystringparser.js":
/*!****************************************************************!*\
  !*** ./node_modules/querystringparser/js/querystringparser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var QueryStringSerializer = __webpack_require__(/*! ./querystringserializer.js */ "./node_modules/querystringparser/js/querystringserializer.js");
module.exports = QueryStringParser;

var rplus = /\+/g;
var rint = /^[0-9]+$/;
var isArray = Array.isArray;
var haveProp = {}.hasOwnProperty;

function QueryStringParser() {
    this.containsSparse = false;
    this.cacheKey = "";
    this.cacheVal = null;
}

QueryStringParser.maxLength = 32768;
QueryStringParser.maxDepth = 4;
QueryStringParser.maxKeys = 256;

QueryStringParser.parse = function QueryStringParser$Parse(str) {
    if (typeof str === "string") {
        var maxLength = QueryStringParser.maxLength;
        if (str.length > maxLength) {
            throw new RangeError(
                "str is too large (" +
                "QueryStringParser.maxLength=" + maxLength + ")"
            );
        }
        var parser = new QueryStringParser();
        return parser.parseString(str, false);
    }
    else if (str !== null && typeof str === "object") {
        var parser = new QueryStringParser();
        return parser.parseObject(str);
    }
    return {};
};

QueryStringParser.stringify =
function QueryStringParser$Stringify(value) {
    var serializer = new QueryStringSerializer();
    return serializer.serialize(value);
};

QueryStringParser.prototype.decode =
function QueryStringParser$decode(str, shouldDecode, containsPlus) {
    if (shouldDecode === false) return str;
    if (containsPlus === true) str = str.replace(rplus, " ");
    try {
        return decodeURIComponent(str);
    }
    catch (e) {
        return str;
    }
};

QueryStringParser.prototype.maybeArrayIndex =
function QueryStringParser$maybeArrayIndex(str, arrayLength) {
    var len = str.length;
    if (len === 0) {
        return arrayLength;
    }
    var ch = str.charCodeAt(0);

    if (ch === 48) {
        return len > 1 ? -1 : 0;
    }
    else if (48 <= ch && ch <= 57) {
        if (len === 1) {
            return ch - 48;
        }
        else if (rint.test(str)) {
            var v = parseInt(str, 10);
            if (0 < v && v <= 1073741822) {
                return v;
            }
        }
    }
    return -1;
};

QueryStringParser.prototype.getSlot =
function QueryStringParser$getSlot(dictionary, prevKey, curKey) {
    var slot;
    if (!(haveProp.call(dictionary, prevKey))) {
        var index = this.maybeArrayIndex(curKey, 0);
        if (index > -1) {
            slot = [];
        }
        else {
            slot = {};
        }
        dictionary[prevKey] = slot;
    }
    else {
        slot = dictionary[prevKey];
    }
    return slot;
};

QueryStringParser.prototype.placeNestedValue =
function QueryStringParser$placeNestedValue
(dictionary, key, value, i, prevKey, curKey) {
    var slot = this.getSlot(dictionary, prevKey, curKey);
    var index = -1;

    if (isArray(slot)) {
        index = this.maybeArrayIndex(curKey, slot.length);
    }

    var len = key.length;
    var depth = 2;
    var maxDepth = QueryStringParser.maxDepth;
    var start = -1;
    for (; i < len; ++i) {
        var ch = key.charCodeAt(i);
        if (ch === 91) {
            start = i + 1;
        }
        else if (ch === 93 &&
                start > -1) {
            prevKey = curKey;
            curKey = start === i ? "" : key.substring(start, i);
            start = -1;
            depth++;
            if (depth > maxDepth) {
                throw new RangeError("Nesting depth of keys is too large " +
                    "(QueryStringParser.maxDepth="+maxDepth+")" );
            }
            slot = this.getSlot(slot, prevKey, curKey);

            index = isArray(slot)
                ? this.maybeArrayIndex(curKey, slot.length)
                : -1;
        }
    }

    if(index > -1) {
        if (value !== "") {
            if (index === slot.length) {
                slot.push(value);
            }
            else {
                this.containsSparse = true;
                slot[index] = value;
            }
        }
    }
    else {
        this.insert(slot, curKey, value);
    }
};

QueryStringParser.prototype.insert =
function QueryStringParser$insert(dictionary, key, value) {
    var ret = null;
    if (haveProp.call(dictionary, key)) {
        var prev = dictionary[key];
        if( isArray(prev) ) {
            prev.push(value);
            ret = prev;
        }
        else {
            ret = [prev, value];
            dictionary[key] = ret;
        }
    }
    else {
        dictionary[key] = value;
    }
    return ret;
};

QueryStringParser.prototype.push =
function QueryStringParser$push(dictionary, key, value) {
    var ret = null;
    if (haveProp.call(dictionary, key)) {
        var prev = dictionary[key];
        prev.push(value);
        ret = prev;
    }
    else {
        ret = [value];
        dictionary[key] = ret;
    }
    return ret;
};

QueryStringParser.prototype.maybePlaceNestedValue =
function QueryStringParser$maybePlaceNestedValue(dictionary, key, value) {
    var len = key.length;
    if (key.charCodeAt(len - 1) !== 93) {
        this.placeValue(dictionary, key, value, false);
        return;
    }
    var start = -1;

    var i = 0;
    var curKey;
    var prevKey;

    for (; i < len; ++i) {
        var ch = key.charCodeAt(i);

        if (ch === 91) {
            start = i + 1;
            prevKey = key.slice(0, i);
        }
        else if (ch === 93) {
            if (start < 0) {
                this.placeValue(dictionary, key, value, false);
                return;
            }
            curKey = start === i ? "" : key.slice(start, i);
            i++;
            break;
        }
    }

    if (curKey === void 0) {
        this.placeValue(dictionary, key, value, false);
        return;
    }

    if (curKey === "" && value !== "" && i === len) {
        if (key === this.cacheKey) {
            this.cacheVal.push(value);
        }
        else {
            this.cacheKey = key;
            this.cacheVal = this.push(dictionary, prevKey, value);
        }
    }
    else {
        this.placeNestedValue(dictionary, key, value, i, prevKey, curKey);
    }
};

QueryStringParser.prototype.placeValue =
function QueryStringParser$placeValue(dictionary, key, value, possiblyNested) {
    if (possiblyNested === true) {
        this.maybePlaceNestedValue(dictionary, key, value);
        return;
    }
    if (key === this.cacheKey) {
        this.cacheVal.push(value);
        return;
    }
    var cache = this.insert(dictionary, key, value);
    if (cache !== null) {
        this.cacheKey = key;
        this.cacheVal = cache;
    }
};

QueryStringParser.prototype.compact =
function QueryStringParser$compact(obj) {
    if (isArray(obj)) {
        var ret = [];
        var keys = Object.keys(obj);
        for( var i = 0, len = keys.length; i < len; ++i ) {
            ret.push(obj[keys[i]]);
        }
        return ret;
    }
    else if (typeof obj === "object") {
        var keys = Object.keys(obj);
        for( var i = 0, len = keys.length; i < len; ++i ) {
            var key = keys[i];
            obj[key] = this.compact(obj[key]);
        }
    }
    else {
        return obj;
    }
};

QueryStringParser.prototype.parseObject =
function QueryStringParser$parseObject(obj) {
    var keys = Object.keys(obj);
    var len = keys.length;
    if (len === 0) {
        return {};
    }
    len--;
    var ret = "";
    var key;
    for( var i = 0; i < len; ++i ) {
        key = keys[i];
        ret += key + "=" + obj[key] + "&";
    }
    key = keys[i];
    ret += key + "=" + obj[key];
    return this.parseString(ret, true);
};

QueryStringParser.prototype.parseString =
function QueryStringParser$parseString(str, noDecode) {
    var maxKeys = QueryStringParser.maxKeys;
    var keys = 0;
    var decodeKey = false;
    var decodeValue = false;
    var possiblyNested = false;
    var len = str.length;
    var i = 0;
    var dictionary = {};
    var keyStart = 0;
    var keyEnd = 0;
    var valueStart = 0;
    var valueEnd = 0;
    var left = 0;
    var lastIndex = len - 1;
    var containsPlus = false;


    for (; i < len; ++i) {
        var ch = str.charCodeAt(i);

        if (ch === 91) {
            left++;
        }
        else if (left > 0 && ch === 93) {
            possiblyNested = true;
            left--;
        }
        else if (left === 0 && ch === 61) {
            var j = i + 1;

            keyEnd = i - 1;
            valueEnd = valueStart = j;
            var key = str.slice(keyStart, keyEnd + 1);
            key = this.decode(key, decodeKey, containsPlus);
            decodeKey = false;

            for (; j < len; ++j) {
                ch = str.charCodeAt(j);
                if ((ch === 43 || ch === 37) && !noDecode) {
                    if (ch === 43) containsPlus = true;
                    decodeValue = true;
                }
                if (ch === 38 || j === lastIndex) {
                    valueEnd = j;
                    i = j;

                    if (ch === 38) {
                        valueEnd--;
                    }

                    var value = str.slice(valueStart, valueEnd + 1);
                    value = this.decode(value, decodeValue, containsPlus);

                    this.placeValue(dictionary, key, value, possiblyNested);

                    containsPlus = decodeValue = false;
                    possiblyNested = false;

                    keyStart = j + 1;
                    keys++;
                    if (keys > maxKeys) {
                        throw new RangeError("Amount of keys is too large " +
                            "(QueryStringParser.maxKeys=" + maxKeys + ")");
                    }
                    break;
                }
            }
        }
        else if ((ch === 43 || ch === 37) && !noDecode) {
            if (ch === 43) containsPlus = true;
            decodeKey = true;
        }
    }
    if (keyStart !== len) {
        var value = "";
        var key = str.slice(keyStart, len);
        key = this.decode(key, decodeKey, containsPlus);
        this.placeValue(dictionary, key, value, possiblyNested);
    }


    if (this.containsSparse) {
        this.compact(dictionary);
    }

    return dictionary;
};


/***/ }),

/***/ "./node_modules/querystringparser/js/querystringserializer.js":
/*!********************************************************************!*\
  !*** ./node_modules/querystringparser/js/querystringserializer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

module.exports = QueryStringSerializer;
var enc = encodeURIComponent;
var ARRAY = [];
var isArray = Array.isArray;
var getProto = Object.getPrototypeOf;
var oProto = getProto({});

function isObject(obj) {
    if (isArray(obj)) {
        return true;
    }
    if (obj === null || typeof obj !== "object") {
        return false;
    }
    var proto = getProto(obj);

    return proto === oProto || proto === null;
}

function QueryStringSerializer() {

}

QueryStringSerializer.prototype.serialize =
function QueryStringSerializer$serialize(obj) {
    if (obj === null ||
        typeof obj !== "object") {
        throw new TypeError("the obj to stringify must be an object");
    }
    var keys = Object.keys(obj);
    var len = keys.length;
    var array = ARRAY;
    var stack = [];
    var ret = [];
    var cur = obj;
    var keyPrefix = "";

    for (var i = 0; i < len; ++i) {
        var key = keys === array ? i : keys[i];
        var value = cur[key];
        if (isObject(value)) {
            stack.push(keyPrefix, cur, keys, len, i);

            if (keyPrefix === "") {
                keyPrefix = key;
            }
            else {
                keyPrefix = keyPrefix + "[" + enc(key) + "]";
            }

            if (isArray(value)) {
                keys = array;
                len = value.length;
            }
            else {
                keys = Object.keys(value);
                len = keys.length;
            }
            i = -1;
            cur = value;
        }
        else {
            if (typeof value !== "string") {
                value = "" + value;
            }

            var serializedKey = keyPrefix === ""
                                ? enc(key)
                                : keyPrefix + "[" + enc(key) + "]";
            ret.push(serializedKey + "=" + enc(value));
        }

        if(i === len - 1 && stack.length > 0) {
            i = stack.pop();
            len = stack.pop();
            keys = stack.pop();
            cur = stack.pop();
            keyPrefix = stack.pop();
        }
    }

    return ret.join("&");
};


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/js/Assets.js":
/*!**************************!*\
  !*** ./src/js/Assets.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asset_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset-list */ "./src/js/asset-list.js");
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/build/alfrid.js");
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alfrid__WEBPACK_IMPORTED_MODULE_1__);
// Assets.js


const Assets = {};
let _assets = [];
let assets;

const getAsset = function (id) {
  return assets.find(a => a.id === id).file;
};

const getExtension = function (mFile) {
  const ary = mFile.split('.');
  return ary[ary.length - 1];
};

Assets.init = function (mAssets) {
  assets = mAssets;
  let hdrCubemaps = {};
  _assets = _asset_list__WEBPACK_IMPORTED_MODULE_0__["default"].map(o => {
    const ext = getExtension(o.url);
    const file = getAsset(o.id);
    let texture;

    switch (ext) {
      case 'jpg':
      case 'png':
        texture = new alfrid__WEBPACK_IMPORTED_MODULE_1__["GLTexture"](file);
        return {
          id: o.id,
          file: texture
        };
        break;

      case 'hdr':
        let cubemapName = o.id.split('_')[0];
        texture = alfrid__WEBPACK_IMPORTED_MODULE_1___default.a.HDRLoader.parse(file);
        const oAsset = {
          id: o.id,
          file: texture
        };

        if (!hdrCubemaps[cubemapName]) {
          hdrCubemaps[cubemapName] = [];
        }

        hdrCubemaps[cubemapName].push(oAsset);
        return oAsset;
        break;

      case 'dds':
        texture = alfrid__WEBPACK_IMPORTED_MODULE_1__["GLCubeTexture"].parseDDS(file);
        return {
          id: o.id,
          file: texture
        };
        break;

      case 'obj':
        const mesh = alfrid__WEBPACK_IMPORTED_MODULE_1__["ObjLoader"].parse(file);
        return {
          id: o.id,
          file: mesh
        };
        break;
    }
  });

  for (let s in hdrCubemaps) {
    if (hdrCubemaps[s].length == 6) {
      console.log('Generate Cubemap :', s);
      const ary = [Assets.get(`${s}_posx`), Assets.get(`${s}_negx`), Assets.get(`${s}_posy`), Assets.get(`${s}_negy`), Assets.get(`${s}_posz`), Assets.get(`${s}_negz`)];
      const texture = new alfrid__WEBPACK_IMPORTED_MODULE_1___default.a.GLCubeTexture(ary);

      _assets.push({
        id: s,
        file: texture
      });
    }
  }

  if (_assets.length > 0) {
    console.debug('ASSETS:');
    console.table(_assets);
  }
};

Assets.get = function (mId) {
  return _assets.find(a => {
    return a.id === mId;
  }).file;
};

/* harmony default export */ __webpack_exports__["default"] = (Assets);

/***/ }),

/***/ "./src/js/Config.js":
/*!**************************!*\
  !*** ./src/js/Config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Config.js
/* harmony default export */ __webpack_exports__["default"] = ({
  waves: [{
    scale: [0, 0],
    speed: 1,
    waveLength: 4.6,
    steepness: 0.31,
    directionX: 0.1,
    directionY: 0
  }, {
    scale: [0, 0],
    speed: 1,
    waveLength: 3.8,
    steepness: 0.1,
    directionX: 0.6,
    directionY: 1
  }, {
    scale: [0, 0],
    speed: 1,
    waveLength: 2.2,
    steepness: 0.39,
    directionX: 0.36,
    directionY: 0.1
  }]
});

/***/ }),

/***/ "./src/js/SceneApp.js":
/*!****************************!*\
  !*** ./src/js/SceneApp.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/build/alfrid.js");
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alfrid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets */ "./src/js/Assets.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./src/js/Config.js");
/* harmony import */ var _ViewPlane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewPlane */ "./src/js/ViewPlane.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/js/utils/index.js");
// SceneApp.js






class SceneApp extends alfrid__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
  constructor() {
    super();
    alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].enableAlphaBlending();
    this.orbitalControl.rx.value = this.orbitalControl.ry.value = 0.3;
    this.orbitalControl.radius.value = 12;
    this.resize();
  }

  _initTextures() {
    console.log("init textures");
  }

  _initViews() {
    console.log("init views");
    this._bCopy = new alfrid__WEBPACK_IMPORTED_MODULE_0___default.a.BatchCopy();
    this._bAxis = new alfrid__WEBPACK_IMPORTED_MODULE_0___default.a.BatchAxis();
    this._bDots = new alfrid__WEBPACK_IMPORTED_MODULE_0___default.a.BatchDotsPlane();
    this._bBall = new alfrid__WEBPACK_IMPORTED_MODULE_0___default.a.BatchBall();
    this._vModel = new _ViewPlane__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }

  render() {
    alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].clear(0, 0, 0, 0); // this._bAxis.draw();
    // this._bDots.draw();

    alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].disable(alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].CULL_FACE);

    this._vModel.render();
  }

  resize(w, h) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["resize"])(w, h);
    this.camera.setAspectRatio(alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].aspectRatio);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SceneApp);

/***/ }),

/***/ "./src/js/Settings.js":
/*!****************************!*\
  !*** ./src/js/Settings.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/js/Config.js");
/* harmony import */ var fast_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-url-parser */ "./node_modules/fast-url-parser/src/urlparser.js");
/* harmony import */ var fast_url_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_url_parser__WEBPACK_IMPORTED_MODULE_1__);
// Settings.js


fast_url_parser__WEBPACK_IMPORTED_MODULE_1___default.a.queryString = __webpack_require__(/*! querystringparser */ "./node_modules/querystringparser/js/querystringparser.js");
let enabled = true;

const reload = () => {
  if (!enabled) {
    return;
  }

  window.location.href = window.location.origin + window.location.pathname + '?config=' + JSON.stringify(_Config__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

const refresh = () => {
  if (!enabled) {
    return;
  }

  window.history.pushState('experiment', 'Title', window.location.origin + window.location.pathname + '?config=' + JSON.stringify(_Config__WEBPACK_IMPORTED_MODULE_0__["default"]));
};

const reset = () => {
  window.location.href = window.location.origin + window.location.pathname;
};

let delayIndex = -1;

const delayReload = () => {
  if (!enabled) {
    return;
  }

  window.clearTimeout(delayIndex);
  delayIndex = window.setTimeout(() => {
    window.location.href = window.location.origin + window.location.pathname + '?config=' + JSON.stringify(_Config__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }, 500);
};

const init = (mEnabled = true) => {
  enabled = mEnabled;
  const parsed = fast_url_parser__WEBPACK_IMPORTED_MODULE_1___default.a.parse(window.location.search, true);
  let parsedJson = {};

  if (parsed.query.config) {
    parsedJson = JSON.parse(parsed.query.config);
  }

  Object.assign(_Config__WEBPACK_IMPORTED_MODULE_0__["default"], parsedJson);
  refresh();
};

/* harmony default export */ __webpack_exports__["default"] = ({
  enabled,
  reload,
  reset,
  refresh,
  delayReload,
  init
});

/***/ }),

/***/ "./src/js/ViewPlane.js":
/*!*****************************!*\
  !*** ./src/js/ViewPlane.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/build/alfrid.js");
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alfrid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets */ "./src/js/Assets.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./src/js/Config.js");
/* harmony import */ var _shaders_plane_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shaders/plane.frag */ "./src/shaders/plane.frag");
/* harmony import */ var _shaders_plane_vert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shaders/plane.vert */ "./src/shaders/plane.vert");
// ViewObjModel.js






class ViewPlane extends alfrid__WEBPACK_IMPORTED_MODULE_0___default.a.View {
  constructor() {
    super(_shaders_plane_vert__WEBPACK_IMPORTED_MODULE_4__["default"], _shaders_plane_frag__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }

  _init() {
    this.time = 0;
    this.mesh = alfrid__WEBPACK_IMPORTED_MODULE_0___default.a.Geom.plane(10, 10, 80, 'xz');
    const extra = [];
    const val = 0.5;

    for (let i = 0; i < this.mesh.vertices.length; i++) {
      const x = Math.random() * val - val / 2;
      const y = Math.random() * val - val / 2;
      const z = Math.random() * val - val / 2;
      extra.push([x, y, z]);
    }

    this.mesh.bufferData(extra, 'aExtra', 3);
  }

  render() {
    this.shader.bind();
    this.time += 0.05;
    this.shader.uniform("uTime", "float", this.time);
    const speeds = [0, 0, 0, 0];

    for (let i = 0; i < _Config__WEBPACK_IMPORTED_MODULE_2__["default"].waves.length; i++) {
      const wave = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].waves[i];
      speeds[i] = wave.speed;
      this.shader.uniform(`uWave${i + 1}`, "vec4", [wave.directionX, wave.directionY, wave.steepness, wave.waveLength]);
    }

    this.shader.uniform("uSpeed", "vec4", speeds);
    this.shader.uniform("uLightWorldPosition", "vec3", [2, 4, 0]);
    alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].draw(this.mesh);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ViewPlane);

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/global.scss */ "./src/scss/global.scss");
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_global_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SceneApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SceneApp */ "./src/js/SceneApp.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings */ "./src/js/Settings.js");
/* harmony import */ var _utils_preload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/preload */ "./src/js/utils/preload.js");
/* harmony import */ var _debug_addControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./debug/addControls */ "./src/js/debug/addControls.js");






if (document.body) {
  _init();
} else {
  window.addEventListener('DOMContentLoaded', _init);
}

function _init() {
  Object(_utils_preload__WEBPACK_IMPORTED_MODULE_3__["default"])().then(init3D, logError);
}

function logError(e) {
  console.log('Error', e);
}

function init3D() {
  console.log('IS_DEVELOPMENT', "development" === 'development');

  if (true) {
    _Settings__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  } // CREATE SCENE


  const scene = new _SceneApp__WEBPACK_IMPORTED_MODULE_1__["default"]();

  if (true) {
    Object(_debug_addControls__WEBPACK_IMPORTED_MODULE_4__["default"])(scene);
  }
}

/***/ }),

/***/ "./src/js/asset-list.js":
/*!******************************!*\
  !*** ./src/js/asset-list.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const assetsToLoad = [];
/* harmony default export */ __webpack_exports__["default"] = (assetsToLoad);

/***/ }),

/***/ "./src/js/debug/addControls.js":
/*!*************************************!*\
  !*** ./src/js/debug/addControls.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/js/Config.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Settings */ "./src/js/Settings.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
// addControls.js




const addControls = scene => {
  const oControl = {
    save: () => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["saveJson"])(_Config__WEBPACK_IMPORTED_MODULE_0__["default"], 'Settings');
    }
  };
  setTimeout(() => {
    _Config__WEBPACK_IMPORTED_MODULE_0__["default"].waves.forEach((w, i) => {
      const folder = gui.addFolder('wave' + (i + 1));
      folder.add(w, 'speed', -1, 2).onChange(_Settings__WEBPACK_IMPORTED_MODULE_1__["default"].refresh);
      folder.add(w, 'waveLength', 0, 50).onChange(_Settings__WEBPACK_IMPORTED_MODULE_1__["default"].refresh);
      folder.add(w, 'steepness', 0, 10).onChange(_Settings__WEBPACK_IMPORTED_MODULE_1__["default"].refresh);
      folder.add(w, 'directionX', 0, 1).onChange(_Settings__WEBPACK_IMPORTED_MODULE_1__["default"].refresh);
      folder.add(w, 'directionY', 0, 1).onChange(_Settings__WEBPACK_IMPORTED_MODULE_1__["default"].refresh);
    });
    gui.add(oControl, 'save').name('Save Settings');
    gui.add(_Settings__WEBPACK_IMPORTED_MODULE_1__["default"], 'reset').name('Reset Default');
  }, 200);
};

/* harmony default export */ __webpack_exports__["default"] = (addControls);

/***/ }),

/***/ "./src/js/debug/debugPolyfill.js":
/*!***************************************!*\
  !*** ./src/js/debug/debugPolyfill.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// debugPolyfill.js
window.gui = {
  add: () => {}
};

/***/ }),

/***/ "./src/js/utils/Capture.js":
/*!*********************************!*\
  !*** ./src/js/utils/Capture.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/build/alfrid.js");
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alfrid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/js/utils/index.js");
// Capture.js



String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

const capture = () => {
  window.addEventListener('keydown', e => {
    if (e.keyCode === 83 && e.metaKey) {
      e.preventDefault();
      const date = new Date();
      let strDate = `${date.getFullYear()}.` + `${date.getMonth() + 1}.` + `${date.getDate()}-` + `${date.getHours()}.` + `${date.getMinutes()}.` + `${date.getSeconds()}`;
      Object(___WEBPACK_IMPORTED_MODULE_1__["saveImage"])(alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].canvas, strDate);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (capture());

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/*! exports provided: saveImage, saveJson, resize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saveImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveImage */ "./src/js/utils/saveImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return _saveImage__WEBPACK_IMPORTED_MODULE_0__["saveImage"]; });

/* harmony import */ var _saveJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveJson */ "./src/js/utils/saveJson.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveJson", function() { return _saveJson__WEBPACK_IMPORTED_MODULE_1__["saveJson"]; });

/* harmony import */ var _resizeCanavs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resizeCanavs */ "./src/js/utils/resizeCanavs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return _resizeCanavs__WEBPACK_IMPORTED_MODULE_2__["resize"]; });

// index.js




/***/ }),

/***/ "./src/js/utils/preload.js":
/*!*********************************!*\
  !*** ./src/js/utils/preload.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _debug_debugPolyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../debug/debugPolyfill */ "./src/js/debug/debugPolyfill.js");
/* harmony import */ var _debug_debugPolyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_debug_debugPolyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Capture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Capture */ "./src/js/utils/Capture.js");
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/build/alfrid.js");
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alfrid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _asset_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset-list */ "./src/js/asset-list.js");
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Assets */ "./src/js/Assets.js");
/* harmony import */ var assets_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets-loader */ "./node_modules/assets-loader/src/index.js");
/* harmony import */ var assets_loader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_loader__WEBPACK_IMPORTED_MODULE_5__);
// preload.js







const getLoadingImage = () => new Promise((resolve, reject) => {
  const img = document.createElement('img');

  img.onload = () => {
    console.log('img loaded', img);
    resolve(img);
  };

  img.src = 'assets/css-img/loading.png';
});

const initAlfrid = () => new Promise((resolve, reject) => {
  // CREATE CANVAS
  const canvas = document.createElement('canvas');
  const container = document.body.querySelector('.container');
  canvas.className = 'Main-Canvas';
  container.appendChild(canvas); // INIT 3D TOOL

  alfrid__WEBPACK_IMPORTED_MODULE_2__["GL"].init(canvas, {
    ignoreWebgl2: false,
    preserveDrawingBuffer: true
  });
  resolve();
});

const createLoadingAnim = () => new Promise((resolve, reject) => {
  console.log('create loading animation');
  resolve();
});

const loadAssets = () => new Promise((resolve, reject) => {
  console.log('Load Assets');

  if (_asset_list__WEBPACK_IMPORTED_MODULE_3__["default"].length > 0) {
    document.body.classList.add('isLoading');
    new assets_loader__WEBPACK_IMPORTED_MODULE_5___default.a({
      assets: _asset_list__WEBPACK_IMPORTED_MODULE_3__["default"]
    }).on('error', error => {
      console.log('Error :', error);
    }).on('progress', p => {
      // console.log('Progress : ', p);
      const loader = document.body.querySelector('.Loading-Bar');
      if (loader) loader.style.width = `${p * 100}%`;
    }).on('complete', o => {
      resolve(o);
    }).start();
  } else {
    resolve([]);
  }
});

const initAssets = mAssets => new Promise((resolve, reject) => {
  console.log('Init Assets', mAssets);
  const loader = document.body.querySelector('.Loading-Bar');
  loader.style.width = '100%'; // INIT ASSETS

  _Assets__WEBPACK_IMPORTED_MODULE_4__["default"].init(mAssets);
  resolve();
});

const closeLoadingAnim = () => new Promise((resolve, reject) => {
  console.log('Close loading animation');
  setTimeout(() => {
    document.body.classList.remove('isLoading');
  }, 250);
  setTimeout(() => {
    resolve();
  }, 500);
});

const preload = () => new Promise((resolve, reject) => {
  initAlfrid().then(getLoadingImage).then(createLoadingAnim).then(loadAssets).then(initAssets).then(closeLoadingAnim).then(() => {
    resolve();
  }).catch(e => {
    console.log('Error', e);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (preload);

/***/ }),

/***/ "./src/js/utils/resizeCanavs.js":
/*!**************************************!*\
  !*** ./src/js/utils/resizeCanavs.js ***!
  \**************************************/
/*! exports provided: resize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alfrid */ "./node_modules/alfrid/build/alfrid.js");
/* harmony import */ var alfrid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alfrid__WEBPACK_IMPORTED_MODULE_0__);
// resizeCanavs.js


const resize = (w, h) => {
  const {
    innerWidth,
    innerHeight
  } = window;
  w = w || innerWidth;
  h = h || innerHeight;
  alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].setSize(w, h);
  let tw = Math.min(w, innerWidth);
  let th = Math.min(h, innerHeight);
  const sx = innerWidth / w;
  const sy = innerHeight / h;
  const scale = Math.min(sx, sy);
  tw = w * scale;
  th = h * scale;
  alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].canvas.style.width = `${tw}px`;
  alfrid__WEBPACK_IMPORTED_MODULE_0__["GL"].canvas.style.height = `${th}px`;
};



/***/ }),

/***/ "./src/js/utils/saveImage.js":
/*!***********************************!*\
  !*** ./src/js/utils/saveImage.js ***!
  \***********************************/
/*! exports provided: saveImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return saveImage; });
// saveImage.js
const FILE_EXTENTION = 'jpg';
const MIME_TYPE = "image/jpeg";

const dataURLtoBlob = dataurl => {
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], {
    type: mime
  });
};

const saveImage = (canvas, filename) => {
  var link = document.createElement("a");
  var imgData = canvas.toDataURL({
    format: 'png',
    multiplier: 4
  }); // var strDataURI = imgData.substr(22, imgData.length);

  var blob = dataURLtoBlob(imgData);
  var objurl = URL.createObjectURL(blob);
  link.download = `${filename}.png`;
  link.href = objurl;
  link.click();
};



/***/ }),

/***/ "./src/js/utils/saveJson.js":
/*!**********************************!*\
  !*** ./src/js/utils/saveJson.js ***!
  \**********************************/
/*! exports provided: saveJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveJson", function() { return saveJson; });
// saveJson.js
const saveJson = (obj, mName = 'dagta', mPretty = true) => {
  var str = mPretty ? JSON.stringify(obj, null, 4) : JSON.stringify(obj);
  var data = encode(str);
  var blob = new Blob([data], {
    type: 'application/octet-stream'
  });
  var url = URL.createObjectURL(blob);
  var link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${mName}.json`);
  var event = document.createEvent('MouseEvents');
  event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
  link.dispatchEvent(event);
};

const encode = s => {
  var out = [];

  for (var i = 0; i < s.length; i++) {
    out[i] = s.charCodeAt(i);
  }

  return new Uint8Array(out);
};



/***/ }),

/***/ "./src/scss/global.scss":
/*!******************************!*\
  !*** ./src/scss/global.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./global.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/shaders/plane.frag":
/*!********************************!*\
  !*** ./src/shaders/plane.frag ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec3 vSurfaceToLight;\n\nfloat diffuse(vec3 n, vec3 l) {\n  float d = dot(normalize(n), normalize(l));\n  return max(d, 0.0);\n}\n\nfloat diffuse(vec3 n, vec3 l, float t) {\n  float d = dot(normalize(n), normalize(l));\n  return mix(1.0, max(d, 0.0), t);\n}\n\nvoid main(void) {\n    // float d = diffuse(vNormal, vec3(-2., 1., 0.), .5);\n\n    vec3 surfaceToLightDirection = normalize(vSurfaceToLight);\n\n    float light = dot(vNormal, surfaceToLightDirection);\n\n    gl_FragColor = vec4(1.);\n    gl_FragColor.rgb *= pow(light, 2.);\n}");

/***/ }),

/***/ "./src/shaders/plane.vert":
/*!********************************!*\
  !*** ./src/shaders/plane.vert ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\nattribute vec3 aExtra;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec4 uSpeed;\nuniform float uTime;\nuniform float uWaveLength;\nuniform vec4 uWave1;\nuniform vec4 uWave2;\nuniform vec4 uWave3;\n\nuniform vec3 uLightWorldPosition;\nuniform float uAmplitude;\nuniform float uSteepness;\nuniform vec2 uDirection;\n\nvarying float vColor;\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec3 vSurfaceToLight;\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\nfloat snoise(vec3 v){\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n    \n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 = v - i + dot(i, C.xxx) ;\n    \n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n    \n    vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n    vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n    vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n    \n    i = mod(i, 289.0 );\n    vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n    \n    float n_ = 1.0/7.0;\n    vec3  ns = n_ * D.wyz - D.xzx;\n    \n    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);\n    \n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );\n    \n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n    \n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n    \n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n    \n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n    \n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n    \n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    \n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );\n}\n\nfloat snoise(float x, float y, float z){\n    return snoise(vec3(x, y, z));\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\n// float f( vec3 p ) {\n\n//     return sin(p.x);\n//     // return pnoise( vec3( p ), vec3( 1.0, 1.0, 1.0 ) );\n//     // float scale = 0.1;\n//     // return snoise( vec3( p )) * 0.1;\n// }\n\nvec3 GerstnerWave (vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal, float speed) {\n  float steepness = wave.z;\n  float waveLength = wave.w;\n  \n  float k = (2. * 3.14) / waveLength;\n  vec2 d = normalize(wave.xy);\n\n  float f = k * (dot(d, p.xz) - uTime * speed);\n  float a = steepness / k;\n\n  tangent += vec3(\n    - d.x * d.x * (steepness * sin(f)) * 1., \n    d.x * (steepness * cos(f)), \n    -d.x * d.y * (steepness * sin(f))\n  );\n\n  binormal += vec3(\n    -d.x * d.y * (steepness * sin(f)) * 1.,\n    d.y * (steepness * cos(f)),\n    - d.y * d.y * (steepness * sin(f))\n  );\n\n  return vec3(\n    d.x * (a * cos(f)) * 1.,\n    a * sin(f),\n    d.y * (a * cos(f))\n  );\n}\n\nvoid main(void) {\n\n    vec3 position = aVertexPosition;\n\n    // position.y += sin(aVertexPosition.x / 10. * 3.14 * 2.) * 2.;\n\n    // float time = uTime * 0.1;\n    // float time = 1.;\n    // float ox = (time) * 0.2;\n    // float oy = (time) * 0.83245789;\n\n    // vec3 anim = vec3(position.z, 1., 1.) * 1. + vec3(ox, oy, time);\n    // float k = \n    // vec3 anim = position * 4.;\n    \n\n    vec3 newPosition = position;\n    vec3 tangent = vec3(1., 0., 0.);\n    vec3 binormal = vec3(0., 0., 1.);\n    \n    newPosition += GerstnerWave(uWave1, position, tangent, binormal, uSpeed.x);\n    newPosition += GerstnerWave(uWave2, position, tangent, binormal, uSpeed.y);\n    newPosition += GerstnerWave(uWave3, position, tangent, binormal, uSpeed.z);\n\n    vec3 modifiedNormal = normalize(cross(binormal, tangent));\n    \n    \n    \n    // vec3 modifiedNormal = aNormal;\n\n    // float f0 = f(anim);\n\n    // float fx = 1. * f( anim + vec3( .01, 0.0, 0.0 ) );\n    // float fy = 1. * f( anim + vec3( 0.0, .01, 0.0 ) );\n    // float fz = 1. * f( anim + vec3( 0.0, 0.0, .01 ) );\n    \n    // vec3 modifiedNormal = aNormal;//normalize( aNormal - vec3( (fx - f0) / .01, (fy - f0) / .01, (fz - f0) / .01 ) );\n    // position *= 1.0 + f0 * 0.1 * 1.;\n\n    // float f0 =  0.01 * f( aniNormal );\n\n    // vec3 newPosition = position;\n    // newPosition.z += f0;\n    // newPosition.y += f0 * 0.2;\n\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(newPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = modifiedNormal;\n\n    // compute the world position of the surface\n    vec3 surfaceWorldPosition = (uModelMatrix * vec4(newPosition, 1.0)).xyz;\n    \n    // compute the vector of the surface to the light\n    // and pass it to the fragment shader\n    vSurfaceToLight = uLightWorldPosition - surfaceWorldPosition;\n}");

/***/ })

/******/ });