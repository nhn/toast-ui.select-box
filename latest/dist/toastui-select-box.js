/*!
 * TOAST UI Select Box
 * @version 1.1.0 | Mon Apr 04 2022
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SelectBox"] = factory();
	else
		root["tui"] = root["tui"] || {}, root["tui"]["SelectBox"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "9f3f258f1e6d7de0fdaf";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/js/index.js")(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tui-code-snippet/array/inArray.js":
/*!********************************************************!*\
  !*** ./node_modules/tui-code-snippet/array/inArray.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable complexity */
/**
 * @fileoverview Returns the first index at which a given element can be found in the array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isArray = __webpack_require__(/*! ../type/isArray */ "./node_modules/tui-code-snippet/type/isArray.js");

/**
 * @module array
 */

/**
 * Returns the first index at which a given element can be found in the array
 * from start index(default 0), or -1 if it is not present.
 * It compares searchElement to elements of the Array using strict equality
 * (the same method used by the ===, or triple-equals, operator).
 * @param {*} searchElement Element to locate in the array
 * @param {Array} array Array that will be traversed.
 * @param {number} startIndex Start index in array for searching (default 0)
 * @returns {number} the First index at which a given element, or -1 if it is not present
 * @memberof module:array
 * @example
 * var inArray = require('tui-code-snippet/array/inArray'); // node, commonjs
 *
 * var arr = ['one', 'two', 'three', 'four'];
 * var idx1 = inArray('one', arr, 3); // -1
 * var idx2 = inArray('one', arr); // 0
 */
function inArray(searchElement, array, startIndex) {
  var i;
  var length;
  startIndex = startIndex || 0;

  if (!isArray(array)) {
    return -1;
  }

  if (Array.prototype.indexOf) {
    return Array.prototype.indexOf.call(array, searchElement, startIndex);
  }

  length = array.length;
  for (i = startIndex; startIndex >= 0 && i < length; i += 1) {
    if (array[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

module.exports = inArray;


/***/ }),

/***/ "./node_modules/tui-code-snippet/collection/forEach.js":
/*!*************************************************************!*\
  !*** ./node_modules/tui-code-snippet/collection/forEach.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isArray = __webpack_require__(/*! ../type/isArray */ "./node_modules/tui-code-snippet/type/isArray.js");
var forEachArray = __webpack_require__(/*! ../collection/forEachArray */ "./node_modules/tui-code-snippet/collection/forEachArray.js");
var forEachOwnProperties = __webpack_require__(/*! ../collection/forEachOwnProperties */ "./node_modules/tui-code-snippet/collection/forEachOwnProperties.js");

/**
 * @module collection
 */

/**
 * Execute the provided callback once for each property of object(or element of array) which actually exist.
 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property(or The value of the element)
 *  2) The name of the property(or The index of the element)
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEach = require('tui-code-snippet/collection/forEach'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEach([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 *
 * // In case of Array-like object
 * var array = Array.prototype.slice.call(arrayLike); // change to array
 * forEach(array, function(value){
 *     sum += value;
 * });
 */
function forEach(obj, iteratee, context) {
  if (isArray(obj)) {
    forEachArray(obj, iteratee, context);
  } else {
    forEachOwnProperties(obj, iteratee, context);
  }
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/tui-code-snippet/collection/forEachArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/tui-code-snippet/collection/forEachArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Execute the provided callback once for each element present
 * in the array(or Array-like object) in ascending order.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the element
 *  2) The index of the element
 *  3) The array(or Array-like object) being traversed
 * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachArray = require('tui-code-snippet/collection/forEachArray'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachArray([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */
function forEachArray(arr, iteratee, context) {
  var index = 0;
  var len = arr.length;

  context = context || null;

  for (; index < len; index += 1) {
    if (iteratee.call(context, arr[index], index, arr) === false) {
      break;
    }
  }
}

module.exports = forEachArray;


/***/ }),

/***/ "./node_modules/tui-code-snippet/collection/forEachOwnProperties.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tui-code-snippet/collection/forEachOwnProperties.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Execute the provided callback once for each property of object which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Execute the provided callback once for each property of object which actually exist.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property
 *  2) The name of the property
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee  Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachOwnProperties({a:1,b:2,c:3}, function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */
function forEachOwnProperties(obj, iteratee, context) {
  var key;

  context = context || null;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (iteratee.call(context, obj[key], key, obj) === false) {
        break;
      }
    }
  }
}

module.exports = forEachOwnProperties;


/***/ }),

/***/ "./node_modules/tui-code-snippet/collection/toArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/tui-code-snippet/collection/toArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Transform the Array-like object to Array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var forEachArray = __webpack_require__(/*! ./forEachArray */ "./node_modules/tui-code-snippet/collection/forEachArray.js");

/**
 * Transform the Array-like object to Array.
 * In low IE (below 8), Array.prototype.slice.call is not perfect. So, try-catch statement is used.
 * @param {*} arrayLike Array-like object
 * @returns {Array} Array
 * @memberof module:collection
 * @example
 * var toArray = require('tui-code-snippet/collection/toArray'); // node, commonjs
 *
 * var arrayLike = {
 *     0: 'one',
 *     1: 'two',
 *     2: 'three',
 *     3: 'four',
 *     length: 4
 * };
 * var result = toArray(arrayLike);
 *
 * alert(result instanceof Array); // true
 * alert(result); // one,two,three,four
 */
function toArray(arrayLike) {
  var arr;
  try {
    arr = Array.prototype.slice.call(arrayLike);
  } catch (e) {
    arr = [];
    forEachArray(arrayLike, function(value) {
      arr.push(value);
    });
  }

  return arr;
}

module.exports = toArray;


/***/ }),

/***/ "./node_modules/tui-code-snippet/customEvents/customEvents.js":
/*!********************************************************************!*\
  !*** ./node_modules/tui-code-snippet/customEvents/customEvents.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview This module provides some functions for custom events. And it is implemented in the observer design pattern.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var extend = __webpack_require__(/*! ../object/extend */ "./node_modules/tui-code-snippet/object/extend.js");
var isExisty = __webpack_require__(/*! ../type/isExisty */ "./node_modules/tui-code-snippet/type/isExisty.js");
var isString = __webpack_require__(/*! ../type/isString */ "./node_modules/tui-code-snippet/type/isString.js");
var isObject = __webpack_require__(/*! ../type/isObject */ "./node_modules/tui-code-snippet/type/isObject.js");
var isArray = __webpack_require__(/*! ../type/isArray */ "./node_modules/tui-code-snippet/type/isArray.js");
var isFunction = __webpack_require__(/*! ../type/isFunction */ "./node_modules/tui-code-snippet/type/isFunction.js");
var forEach = __webpack_require__(/*! ../collection/forEach */ "./node_modules/tui-code-snippet/collection/forEach.js");

var R_EVENTNAME_SPLIT = /\s+/g;

/**
 * @class
 * @example
 * // node, commonjs
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents');
 */
function CustomEvents() {
  /**
     * @type {HandlerItem[]}
     */
  this.events = null;

  /**
     * only for checking specific context event was binded
     * @type {object[]}
     */
  this.contexts = null;
}

/**
 * Mixin custom events feature to specific constructor
 * @param {function} func - constructor
 * @example
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * var model;
 * function Model() {
 *     this.name = '';
 * }
 * CustomEvents.mixin(Model);
 *
 * model = new Model();
 * model.on('change', function() { this.name = 'model'; }, this);
 * model.fire('change');
 * alert(model.name); // 'model';
 */
CustomEvents.mixin = function(func) {
  extend(func.prototype, CustomEvents.prototype);
};

/**
 * Get HandlerItem object
 * @param {function} handler - handler function
 * @param {object} [context] - context for handler
 * @returns {HandlerItem} HandlerItem object
 * @private
 */
CustomEvents.prototype._getHandlerItem = function(handler, context) {
  var item = {handler: handler};

  if (context) {
    item.context = context;
  }

  return item;
};

/**
 * Get event object safely
 * @param {string} [eventName] - create sub event map if not exist.
 * @returns {(object|array)} event object. if you supplied `eventName`
 *  parameter then make new array and return it
 * @private
 */
CustomEvents.prototype._safeEvent = function(eventName) {
  var events = this.events;
  var byName;

  if (!events) {
    events = this.events = {};
  }

  if (eventName) {
    byName = events[eventName];

    if (!byName) {
      byName = [];
      events[eventName] = byName;
    }

    events = byName;
  }

  return events;
};

/**
 * Get context array safely
 * @returns {array} context array
 * @private
 */
CustomEvents.prototype._safeContext = function() {
  var context = this.contexts;

  if (!context) {
    context = this.contexts = [];
  }

  return context;
};

/**
 * Get index of context
 * @param {object} ctx - context that used for bind custom event
 * @returns {number} index of context
 * @private
 */
CustomEvents.prototype._indexOfContext = function(ctx) {
  var context = this._safeContext();
  var index = 0;

  while (context[index]) {
    if (ctx === context[index][0]) {
      return index;
    }

    index += 1;
  }

  return -1;
};

/**
 * Memorize supplied context for recognize supplied object is context or
 *  name: handler pair object when off()
 * @param {object} ctx - context object to memorize
 * @private
 */
CustomEvents.prototype._memorizeContext = function(ctx) {
  var context, index;

  if (!isExisty(ctx)) {
    return;
  }

  context = this._safeContext();
  index = this._indexOfContext(ctx);

  if (index > -1) {
    context[index][1] += 1;
  } else {
    context.push([ctx, 1]);
  }
};

/**
 * Forget supplied context object
 * @param {object} ctx - context object to forget
 * @private
 */
CustomEvents.prototype._forgetContext = function(ctx) {
  var context, contextIndex;

  if (!isExisty(ctx)) {
    return;
  }

  context = this._safeContext();
  contextIndex = this._indexOfContext(ctx);

  if (contextIndex > -1) {
    context[contextIndex][1] -= 1;

    if (context[contextIndex][1] <= 0) {
      context.splice(contextIndex, 1);
    }
  }
};

/**
 * Bind event handler
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * @private
 */
CustomEvents.prototype._bindEvent = function(eventName, handler, context) {
  var events = this._safeEvent(eventName);
  this._memorizeContext(context);
  events.push(this._getHandlerItem(handler, context));
};

/**
 * Bind event handlers
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 Basic Usage
 * CustomEvents.on('onload', handler);
 *
 * // # 2.2 With context
 * CustomEvents.on('onload', handler, myObj);
 *
 * // # 2.3 Bind by object that name, handler pairs
 * CustomEvents.on({
 *     'play': handler,
 *     'pause': handler2
 * });
 *
 * // # 2.4 Bind by object that name, handler pairs with context object
 * CustomEvents.on({
 *     'play': handler
 * }, myObj);
 */
CustomEvents.prototype.on = function(eventName, handler, context) {
  var self = this;

  if (isString(eventName)) {
    // [syntax 1, 2]
    eventName = eventName.split(R_EVENTNAME_SPLIT);
    forEach(eventName, function(name) {
      self._bindEvent(name, handler, context);
    });
  } else if (isObject(eventName)) {
    // [syntax 3, 4]
    context = handler;
    forEach(eventName, function(func, name) {
      self.on(name, func, context);
    });
  }
};

/**
 * Bind one-shot event handlers
 * @param {(string|{name:string,handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {function|object} [handler] - handler function or context
 * @param {object} [context] - context for binding
 */
CustomEvents.prototype.once = function(eventName, handler, context) {
  var self = this;

  if (isObject(eventName)) {
    context = handler;
    forEach(eventName, function(func, name) {
      self.once(name, func, context);
    });

    return;
  }

  function onceHandler() { // eslint-disable-line require-jsdoc
    handler.apply(context, arguments);
    self.off(eventName, onceHandler, context);
  }

  this.on(eventName, onceHandler, context);
};

/**
 * Splice supplied array by callback result
 * @param {array} arr - array to splice
 * @param {function} predicate - function return boolean
 * @private
 */
CustomEvents.prototype._spliceMatches = function(arr, predicate) {
  var i = 0;
  var len;

  if (!isArray(arr)) {
    return;
  }

  for (len = arr.length; i < len; i += 1) {
    if (predicate(arr[i]) === true) {
      arr.splice(i, 1);
      len -= 1;
      i -= 1;
    }
  }
};

/**
 * Get matcher for unbind specific handler events
 * @param {function} handler - handler function
 * @returns {function} handler matcher
 * @private
 */
CustomEvents.prototype._matchHandler = function(handler) {
  var self = this;

  return function(item) {
    var needRemove = handler === item.handler;

    if (needRemove) {
      self._forgetContext(item.context);
    }

    return needRemove;
  };
};

/**
 * Get matcher for unbind specific context events
 * @param {object} context - context
 * @returns {function} object matcher
 * @private
 */
CustomEvents.prototype._matchContext = function(context) {
  var self = this;

  return function(item) {
    var needRemove = context === item.context;

    if (needRemove) {
      self._forgetContext(item.context);
    }

    return needRemove;
  };
};

/**
 * Get matcher for unbind specific hander, context pair events
 * @param {function} handler - handler function
 * @param {object} context - context
 * @returns {function} handler, context matcher
 * @private
 */
CustomEvents.prototype._matchHandlerAndContext = function(handler, context) {
  var self = this;

  return function(item) {
    var matchHandler = (handler === item.handler);
    var matchContext = (context === item.context);
    var needRemove = (matchHandler && matchContext);

    if (needRemove) {
      self._forgetContext(item.context);
    }

    return needRemove;
  };
};

/**
 * Unbind event by event name
 * @param {string} eventName - custom event name to unbind
 * @param {function} [handler] - handler function
 * @private
 */
CustomEvents.prototype._offByEventName = function(eventName, handler) {
  var self = this;
  var andByHandler = isFunction(handler);
  var matchHandler = self._matchHandler(handler);

  eventName = eventName.split(R_EVENTNAME_SPLIT);

  forEach(eventName, function(name) {
    var handlerItems = self._safeEvent(name);

    if (andByHandler) {
      self._spliceMatches(handlerItems, matchHandler);
    } else {
      forEach(handlerItems, function(item) {
        self._forgetContext(item.context);
      });

      self.events[name] = [];
    }
  });
};

/**
 * Unbind event by handler function
 * @param {function} handler - handler function
 * @private
 */
CustomEvents.prototype._offByHandler = function(handler) {
  var self = this;
  var matchHandler = this._matchHandler(handler);

  forEach(this._safeEvent(), function(handlerItems) {
    self._spliceMatches(handlerItems, matchHandler);
  });
};

/**
 * Unbind event by object(name: handler pair object or context object)
 * @param {object} obj - context or {name: handler} pair object
 * @param {function} handler - handler function
 * @private
 */
CustomEvents.prototype._offByObject = function(obj, handler) {
  var self = this;
  var matchFunc;

  if (this._indexOfContext(obj) < 0) {
    forEach(obj, function(func, name) {
      self.off(name, func);
    });
  } else if (isString(handler)) {
    matchFunc = this._matchContext(obj);

    self._spliceMatches(this._safeEvent(handler), matchFunc);
  } else if (isFunction(handler)) {
    matchFunc = this._matchHandlerAndContext(handler, obj);

    forEach(this._safeEvent(), function(handlerItems) {
      self._spliceMatches(handlerItems, matchFunc);
    });
  } else {
    matchFunc = this._matchContext(obj);

    forEach(this._safeEvent(), function(handlerItems) {
      self._spliceMatches(handlerItems, matchFunc);
    });
  }
};

/**
 * Unbind custom events
 * @param {(string|object|function)} eventName - event name or context or
 *  {name: handler} pair object or handler function
 * @param {(function)} handler - handler function
 * @example
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 off by event name
 * CustomEvents.off('onload');
 *
 * // # 2.2 off by event name and handler
 * CustomEvents.off('play', handler);
 *
 * // # 2.3 off by handler
 * CustomEvents.off(handler);
 *
 * // # 2.4 off by context
 * CustomEvents.off(myObj);
 *
 * // # 2.5 off by context and handler
 * CustomEvents.off(myObj, handler);
 *
 * // # 2.6 off by context and event name
 * CustomEvents.off(myObj, 'onload');
 *
 * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
 * CustomEvents.off({
 *   'play': handler,
 *   'pause': handler2
 * });
 *
 * // # 2.8 off the all events
 * CustomEvents.off();
 */
CustomEvents.prototype.off = function(eventName, handler) {
  if (isString(eventName)) {
    // [syntax 1, 2]
    this._offByEventName(eventName, handler);
  } else if (!arguments.length) {
    // [syntax 8]
    this.events = {};
    this.contexts = [];
  } else if (isFunction(eventName)) {
    // [syntax 3]
    this._offByHandler(eventName);
  } else if (isObject(eventName)) {
    // [syntax 4, 5, 6]
    this._offByObject(eventName, handler);
  }
};

/**
 * Fire custom event
 * @param {string} eventName - name of custom event
 */
CustomEvents.prototype.fire = function(eventName) {  // eslint-disable-line
  this.invoke.apply(this, arguments);
};

/**
 * Fire a event and returns the result of operation 'boolean AND' with all
 *  listener's results.
 *
 * So, It is different from {@link CustomEvents#fire}.
 *
 * In service code, use this as a before event in component level usually
 *  for notifying that the event is cancelable.
 * @param {string} eventName - Custom event name
 * @param {...*} data - Data for event
 * @returns {boolean} The result of operation 'boolean AND'
 * @example
 * var map = new Map();
 * map.on({
 *     'beforeZoom': function() {
 *         // It should cancel the 'zoom' event by some conditions.
 *         if (that.disabled && this.getState()) {
 *             return false;
 *         }
 *         return true;
 *     }
 * });
 *
 * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
 *     // if true,
 *     // doSomething
 * }
 */
CustomEvents.prototype.invoke = function(eventName) {
  var events, args, index, item;

  if (!this.hasListener(eventName)) {
    return true;
  }

  events = this._safeEvent(eventName);
  args = Array.prototype.slice.call(arguments, 1);
  index = 0;

  while (events[index]) {
    item = events[index];

    if (item.handler.apply(item.context, args) === false) {
      return false;
    }

    index += 1;
  }

  return true;
};

/**
 * Return whether at least one of the handlers is registered in the given
 *  event name.
 * @param {string} eventName - Custom event name
 * @returns {boolean} Is there at least one handler in event name?
 */
CustomEvents.prototype.hasListener = function(eventName) {
  return this.getListenerLength(eventName) > 0;
};

/**
 * Return a count of events registered.
 * @param {string} eventName - Custom event name
 * @returns {number} number of event
 */
CustomEvents.prototype.getListenerLength = function(eventName) {
  var events = this._safeEvent(eventName);

  return events.length;
};

module.exports = CustomEvents;


/***/ }),

/***/ "./node_modules/tui-code-snippet/domEvent/_safeEvent.js":
/*!**************************************************************!*\
  !*** ./node_modules/tui-code-snippet/domEvent/_safeEvent.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Get event collection for specific HTML element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var EVENT_KEY = '_feEventKey';

/**
 * Get event collection for specific HTML element
 * @param {HTMLElement} element - HTML element
 * @param {string} type - event type
 * @returns {array}
 * @private
 */
function safeEvent(element, type) {
  var events = element[EVENT_KEY];
  var handlers;

  if (!events) {
    events = element[EVENT_KEY] = {};
  }

  handlers = events[type];
  if (!handlers) {
    handlers = events[type] = [];
  }

  return handlers;
}

module.exports = safeEvent;


/***/ }),

/***/ "./node_modules/tui-code-snippet/domEvent/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/tui-code-snippet/domEvent/getTarget.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Get a target element from an event object.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Get a target element from an event object.
 * @param {Event} e - event object
 * @returns {HTMLElement} - target element
 * @memberof module:domEvent
 */
function getTarget(e) {
  return e.target || e.srcElement;
}

module.exports = getTarget;


/***/ }),

/***/ "./node_modules/tui-code-snippet/domEvent/off.js":
/*!*******************************************************!*\
  !*** ./node_modules/tui-code-snippet/domEvent/off.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Unbind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isString = __webpack_require__(/*! ../type/isString */ "./node_modules/tui-code-snippet/type/isString.js");
var forEach = __webpack_require__(/*! ../collection/forEach */ "./node_modules/tui-code-snippet/collection/forEach.js");

var safeEvent = __webpack_require__(/*! ./_safeEvent */ "./node_modules/tui-code-snippet/domEvent/_safeEvent.js");

/**
 * Unbind DOM events
 * If a handler function is not passed, remove all events of that type.
 * @param {HTMLElement} element - element to unbind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {function} [handler] - handler function
 * @memberof module:domEvent
 * @example
 * // Following the example of domEvent#on
 * 
 * // Unbind one event from an element.
 * off(div, 'click', toggle);
 * 
 * // Unbind multiple events with a same handler from multiple elements at once.
 * // Use event names splitted by a space.
 * off(element, 'mouseenter mouseleave', changeColor);
 * 
 * // Unbind multiple events with different handlers from an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * off(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Unbind events without handlers.
 * off(div, 'drag');
 */
function off(element, types, handler) {
  if (isString(types)) {
    forEach(types.split(/\s+/g), function(type) {
      unbindEvent(element, type, handler);
    });

    return;
  }

  forEach(types, function(func, type) {
    unbindEvent(element, type, func);
  });
}

/**
 * Unbind DOM events
 * If a handler function is not passed, remove all events of that type.
 * @param {HTMLElement} element - element to unbind events
 * @param {string} type - events name
 * @param {function} [handler] - handler function
 * @private
 */
function unbindEvent(element, type, handler) {
  var events = safeEvent(element, type);
  var index;

  if (!handler) {
    forEach(events, function(item) {
      removeHandler(element, type, item.wrappedHandler);
    });
    events.splice(0, events.length);
  } else {
    forEach(events, function(item, idx) {
      if (handler === item.handler) {
        removeHandler(element, type, item.wrappedHandler);
        index = idx;

        return false;
      }

      return true;
    });
    events.splice(index, 1);
  }
}

/**
 * Remove an event handler
 * @param {HTMLElement} element - An element to remove an event
 * @param {string} type - event type
 * @param {function} handler - event handler
 * @private
 */
function removeHandler(element, type, handler) {
  if ('removeEventListener' in element) {
    element.removeEventListener(type, handler);
  } else if ('detachEvent' in element) {
    element.detachEvent('on' + type, handler);
  }
}

module.exports = off;


/***/ }),

/***/ "./node_modules/tui-code-snippet/domEvent/on.js":
/*!******************************************************!*\
  !*** ./node_modules/tui-code-snippet/domEvent/on.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isString = __webpack_require__(/*! ../type/isString */ "./node_modules/tui-code-snippet/type/isString.js");
var forEach = __webpack_require__(/*! ../collection/forEach */ "./node_modules/tui-code-snippet/collection/forEach.js");

var safeEvent = __webpack_require__(/*! ./_safeEvent */ "./node_modules/tui-code-snippet/domEvent/_safeEvent.js");

/**
 * Bind DOM events.
 * @param {HTMLElement} element - element to bind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {(function|object)} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @memberof module:domEvent
 * @example
 * var div = document.querySelector('div');
 * 
 * // Bind one event to an element.
 * on(div, 'click', toggle);
 * 
 * // Bind multiple events with a same handler to multiple elements at once.
 * // Use event names splitted by a space.
 * on(div, 'mouseenter mouseleave', changeColor);
 * 
 * // Bind multiple events with different handlers to an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * on(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Set a context for handler method.
 * var name = 'global';
 * var repository = {name: 'CodeSnippet'};
 * on(div, 'drag', function() {
 *  console.log(this.name);
 * }, repository);
 * // Result when you drag a div: "CodeSnippet"
 */
function on(element, types, handler, context) {
  if (isString(types)) {
    forEach(types.split(/\s+/g), function(type) {
      bindEvent(element, type, handler, context);
    });

    return;
  }

  forEach(types, function(func, type) {
    bindEvent(element, type, func, handler);
  });
}

/**
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @private
 */
function bindEvent(element, type, handler, context) {
  /**
     * Event handler
     * @param {Event} e - event object
     */
  function eventHandler(e) {
    handler.call(context || element, e || window.event);
  }

  if ('addEventListener' in element) {
    element.addEventListener(type, eventHandler);
  } else if ('attachEvent' in element) {
    element.attachEvent('on' + type, eventHandler);
  }
  memorizeHandler(element, type, handler, eventHandler);
}

/**
 * Memorize DOM event handler for unbinding.
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function that user passed at on() use
 * @param {function} wrappedHandler - handler function that wrapped by domevent for implementing some features
 * @private
 */
function memorizeHandler(element, type, handler, wrappedHandler) {
  var events = safeEvent(element, type);
  var existInEvents = false;

  forEach(events, function(obj) {
    if (obj.handler === handler) {
      existInEvents = true;

      return false;
    }

    return true;
  });

  if (!existInEvents) {
    events.push({
      handler: handler,
      wrappedHandler: wrappedHandler
    });
  }
}

module.exports = on;


/***/ }),

/***/ "./node_modules/tui-code-snippet/domEvent/preventDefault.js":
/*!******************************************************************!*\
  !*** ./node_modules/tui-code-snippet/domEvent/preventDefault.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Prevent default action
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Prevent default action
 * @param {Event} e - event object
 * @memberof module:domEvent
 */
function preventDefault(e) {
  if (e.preventDefault) {
    e.preventDefault();

    return;
  }

  e.returnValue = false;
}

module.exports = preventDefault;


/***/ }),

/***/ "./node_modules/tui-code-snippet/domUtil/_setClassName.js":
/*!****************************************************************!*\
  !*** ./node_modules/tui-code-snippet/domUtil/_setClassName.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Set className value
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isArray = __webpack_require__(/*! ../type/isArray */ "./node_modules/tui-code-snippet/type/isArray.js");
var isUndefined = __webpack_require__(/*! ../type/isUndefined */ "./node_modules/tui-code-snippet/type/isUndefined.js");

/**
 * Set className value
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {(string|string[])} cssClass - class names
 * @private
 */
function setClassName(element, cssClass) {
  cssClass = isArray(cssClass) ? cssClass.join(' ') : cssClass;

  cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

  if (isUndefined(element.className.baseVal)) {
    element.className = cssClass;

    return;
  }

  element.className.baseVal = cssClass;
}

module.exports = setClassName;


/***/ }),

/***/ "./node_modules/tui-code-snippet/domUtil/addClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/tui-code-snippet/domUtil/addClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Add css class to element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var forEach = __webpack_require__(/*! ../collection/forEach */ "./node_modules/tui-code-snippet/collection/forEach.js");
var inArray = __webpack_require__(/*! ../array/inArray */ "./node_modules/tui-code-snippet/array/inArray.js");
var getClass = __webpack_require__(/*! ./getClass */ "./node_modules/tui-code-snippet/domUtil/getClass.js");
var setClassName = __webpack_require__(/*! ./_setClassName */ "./node_modules/tui-code-snippet/domUtil/_setClassName.js");

/**
 * domUtil module
 * @module domUtil
 */

/**
 * Add css class to element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to add
 * @memberof module:domUtil
 */
function addClass(element) {
  var cssClass = Array.prototype.slice.call(arguments, 1);
  var classList = element.classList;
  var newClass = [];
  var origin;

  if (classList) {
    forEach(cssClass, function(name) {
      element.classList.add(name);
    });

    return;
  }

  origin = getClass(element);

  if (origin) {
    cssClass = [].concat(origin.split(/\s+/), cssClass);
  }

  forEach(cssClass, function(cls) {
    if (inArray(cls, newClass) < 0) {
      newClass.push(cls);
    }
  });

  setClassName(element, newClass);
}

module.exports = addClass;


/***/ }),

/***/ "./node_modules/tui-code-snippet/domUtil/closest.js":
/*!**********************************************************!*\
  !*** ./node_modules/tui-code-snippet/domUtil/closest.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Find parent element recursively
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var matches = __webpack_require__(/*! ./matches */ "./node_modules/tui-code-snippet/domUtil/matches.js");

/**
 * Find parent element recursively
 * @param {HTMLElement} element - base element to start find
 * @param {string} selector - selector string for find
 * @returns {HTMLElement} - element finded or null
 * @memberof module:domUtil
 */
function closest(element, selector) {
  var parent = element.parentNode;

  if (matches(element, selector)) {
    return element;
  }

  while (parent && parent !== document) {
    if (matches(parent, selector)) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return null;
}

module.exports = closest;


/***/ }),

/***/ "./node_modules/tui-code-snippet/domUtil/getClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/tui-code-snippet/domUtil/getClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Get HTML element's design classes.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isUndefined = __webpack_require__(/*! ../type/isUndefined */ "./node_modules/tui-code-snippet/type/isUndefined.js");

/**
 * Get HTML element's design classes.
 * @param {(HTMLElement|SVGElement)} element target element
 * @returns {string} element css class name
 * @memberof module:domUtil
 */
function getClass(element) {
  if (!element || !element.className) {
    return '';
  }

  if (isUndefined(element.className.baseVal)) {
    return element.className;
  }

  return element.className.baseVal;
}

module.exports = getClass;


/***/ }),

/***/ "./node_modules/tui-code-snippet/domUtil/matches.js":
/*!**********************************************************!*\
  !*** ./node_modules/tui-code-snippet/domUtil/matches.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check element match selector
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var inArray = __webpack_require__(/*! ../array/inArray */ "./node_modules/tui-code-snippet/array/inArray.js");
var toArray = __webpack_require__(/*! ../collection/toArray */ "./node_modules/tui-code-snippet/collection/toArray.js");

var elProto = Element.prototype;
var matchSelector = elProto.matches ||
    elProto.webkitMatchesSelector ||
    elProto.mozMatchesSelector ||
    elProto.msMatchesSelector ||
    function(selector) {
      var doc = this.document || this.ownerDocument;

      return inArray(this, toArray(doc.querySelectorAll(selector))) > -1;
    };

/**
 * Check element match selector
 * @param {HTMLElement} element - element to check
 * @param {string} selector - selector to check
 * @returns {boolean} is selector matched to element?
 * @memberof module:domUtil
 */
function matches(element, selector) {
  return matchSelector.call(element, selector);
}

module.exports = matches;


/***/ }),

/***/ "./node_modules/tui-code-snippet/domUtil/removeClass.js":
/*!**************************************************************!*\
  !*** ./node_modules/tui-code-snippet/domUtil/removeClass.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Remove css class from element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var forEachArray = __webpack_require__(/*! ../collection/forEachArray */ "./node_modules/tui-code-snippet/collection/forEachArray.js");
var inArray = __webpack_require__(/*! ../array/inArray */ "./node_modules/tui-code-snippet/array/inArray.js");
var getClass = __webpack_require__(/*! ./getClass */ "./node_modules/tui-code-snippet/domUtil/getClass.js");
var setClassName = __webpack_require__(/*! ./_setClassName */ "./node_modules/tui-code-snippet/domUtil/_setClassName.js");

/**
 * Remove css class from element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to remove
 * @memberof module:domUtil
 */
function removeClass(element) {
  var cssClass = Array.prototype.slice.call(arguments, 1);
  var classList = element.classList;
  var origin, newClass;

  if (classList) {
    forEachArray(cssClass, function(name) {
      classList.remove(name);
    });

    return;
  }

  origin = getClass(element).split(/\s+/);
  newClass = [];
  forEachArray(origin, function(name) {
    if (inArray(name, cssClass) < 0) {
      newClass.push(name);
    }
  });

  setClassName(element, newClass);
}

module.exports = removeClass;


/***/ }),

/***/ "./node_modules/tui-code-snippet/domUtil/removeElement.js":
/*!****************************************************************!*\
  !*** ./node_modules/tui-code-snippet/domUtil/removeElement.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Remove element from parent node.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Remove element from parent node.
 * @param {HTMLElement} element - element to remove.
 * @memberof module:domUtil
 */
function removeElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

module.exports = removeElement;


/***/ }),

/***/ "./node_modules/tui-code-snippet/object/extend.js":
/*!********************************************************!*\
  !*** ./node_modules/tui-code-snippet/object/extend.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Extend the target object from other objects.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * @module object
 */

/**
 * Extend the target object from other objects.
 * @param {object} target - Object that will be extended
 * @param {...object} objects - Objects as sources
 * @returns {object} Extended object
 * @memberof module:object
 */
function extend(target, objects) { // eslint-disable-line no-unused-vars
  var hasOwnProp = Object.prototype.hasOwnProperty;
  var source, prop, i, len;

  for (i = 1, len = arguments.length; i < len; i += 1) {
    source = arguments[i];
    for (prop in source) {
      if (hasOwnProp.call(source, prop)) {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}

module.exports = extend;


/***/ }),

/***/ "./node_modules/tui-code-snippet/request/imagePing.js":
/*!************************************************************!*\
  !*** ./node_modules/tui-code-snippet/request/imagePing.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Request image ping.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var forEachOwnProperties = __webpack_require__(/*! ../collection/forEachOwnProperties */ "./node_modules/tui-code-snippet/collection/forEachOwnProperties.js");

/**
 * @module request
 */

/**
 * Request image ping.
 * @param {String} url url for ping request
 * @param {Object} trackingInfo infos for make query string
 * @returns {HTMLElement}
 * @memberof module:request
 * @example
 * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
 *
 * imagePing('https://www.google-analytics.com/collect', {
 *     v: 1,
 *     t: 'event',
 *     tid: 'trackingid',
 *     cid: 'cid',
 *     dp: 'dp',
 *     dh: 'dh'
 * });
 */
function imagePing(url, trackingInfo) {
  var trackingElement = document.createElement('img');
  var queryString = '';
  forEachOwnProperties(trackingInfo, function(value, key) {
    queryString += '&' + key + '=' + value;
  });
  queryString = queryString.substring(1);

  trackingElement.src = url + '?' + queryString;

  trackingElement.style.display = 'none';
  document.body.appendChild(trackingElement);
  document.body.removeChild(trackingElement);

  return trackingElement;
}

module.exports = imagePing;


/***/ }),

/***/ "./node_modules/tui-code-snippet/request/sendHostname.js":
/*!***************************************************************!*\
  !*** ./node_modules/tui-code-snippet/request/sendHostname.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Send hostname on DOMContentLoaded.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isUndefined = __webpack_require__(/*! ../type/isUndefined */ "./node_modules/tui-code-snippet/type/isUndefined.js");
var imagePing = __webpack_require__(/*! ./imagePing */ "./node_modules/tui-code-snippet/request/imagePing.js");

var ms7days = 7 * 24 * 60 * 60 * 1000;

/**
 * Check if the date has passed 7 days
 * @param {number} date - milliseconds
 * @returns {boolean}
 * @private
 */
function isExpired(date) {
  var now = new Date().getTime();

  return now - date > ms7days;
}

/**
 * Send hostname on DOMContentLoaded.
 * To prevent hostname set tui.usageStatistics to false.
 * @param {string} appName - application name
 * @param {string} trackingId - GA tracking ID
 * @ignore
 */
function sendHostname(appName, trackingId) {
  var url = 'https://www.google-analytics.com/collect';
  var hostname = location.hostname;
  var hitType = 'event';
  var eventCategory = 'use';
  var applicationKeyForStorage = 'TOAST UI ' + appName + ' for ' + hostname + ': Statistics';
  var date = window.localStorage.getItem(applicationKeyForStorage);

  // skip if the flag is defined and is set to false explicitly
  if (!isUndefined(window.tui) && window.tui.usageStatistics === false) {
    return;
  }

  // skip if not pass seven days old
  if (date && !isExpired(date)) {
    return;
  }

  window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());

  setTimeout(function() {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      imagePing(url, {
        v: 1,
        t: hitType,
        tid: trackingId,
        cid: hostname,
        dp: hostname,
        dh: appName,
        el: appName,
        ec: eventCategory
      });
    }
  }, 1000);
}

module.exports = sendHostname;


/***/ }),

/***/ "./node_modules/tui-code-snippet/type/isArray.js":
/*!*******************************************************!*\
  !*** ./node_modules/tui-code-snippet/type/isArray.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is an instance of Array or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is an instance of Array or not.
 * If the given variable is an instance of Array, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is array instance?
 * @memberof module:type
 */
function isArray(obj) {
  return obj instanceof Array;
}

module.exports = isArray;


/***/ }),

/***/ "./node_modules/tui-code-snippet/type/isBoolean.js":
/*!*********************************************************!*\
  !*** ./node_modules/tui-code-snippet/type/isBoolean.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a boolean or not.
 *  If the given variable is a boolean, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is boolean?
 * @memberof module:type
 */
function isBoolean(obj) {
  return typeof obj === 'boolean' || obj instanceof Boolean;
}

module.exports = isBoolean;


/***/ }),

/***/ "./node_modules/tui-code-snippet/type/isExisty.js":
/*!********************************************************!*\
  !*** ./node_modules/tui-code-snippet/type/isExisty.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is existing or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isUndefined = __webpack_require__(/*! ./isUndefined */ "./node_modules/tui-code-snippet/type/isUndefined.js");
var isNull = __webpack_require__(/*! ./isNull */ "./node_modules/tui-code-snippet/type/isNull.js");

/**
 * Check whether the given variable is existing or not.
 * If the given variable is not null and not undefined, returns true.
 * @param {*} param - Target for checking
 * @returns {boolean} Is existy?
 * @memberof module:type
 * @example
 * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
 *
 * isExisty(''); //true
 * isExisty(0); //true
 * isExisty([]); //true
 * isExisty({}); //true
 * isExisty(null); //false
 * isExisty(undefined); //false
*/
function isExisty(param) {
  return !isUndefined(param) && !isNull(param);
}

module.exports = isExisty;


/***/ }),

/***/ "./node_modules/tui-code-snippet/type/isFunction.js":
/*!**********************************************************!*\
  !*** ./node_modules/tui-code-snippet/type/isFunction.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is a function or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a function or not.
 * If the given variable is a function, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is function?
 * @memberof module:type
 */
function isFunction(obj) {
  return obj instanceof Function;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/tui-code-snippet/type/isHTMLNode.js":
/*!**********************************************************!*\
  !*** ./node_modules/tui-code-snippet/type/isHTMLNode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is a instance of HTMLNode or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a instance of HTMLNode or not.
 * If the given variables is a instance of HTMLNode, return true.
 * @param {*} html - Target for checking
 * @returns {boolean} Is HTMLNode ?
 * @memberof module:type
 */
function isHTMLNode(html) {
  if (typeof HTMLElement === 'object') {
    return (html && (html instanceof HTMLElement || !!html.nodeType));
  }

  return !!(html && html.nodeType);
}

module.exports = isHTMLNode;


/***/ }),

/***/ "./node_modules/tui-code-snippet/type/isNull.js":
/*!******************************************************!*\
  !*** ./node_modules/tui-code-snippet/type/isNull.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is null or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is null or not.
 * If the given variable(arguments[0]) is null, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is null?
 * @memberof module:type
 */
function isNull(obj) {
  return obj === null;
}

module.exports = isNull;


/***/ }),

/***/ "./node_modules/tui-code-snippet/type/isNumber.js":
/*!********************************************************!*\
  !*** ./node_modules/tui-code-snippet/type/isNumber.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is a number or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a number or not.
 * If the given variable is a number, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is number?
 * @memberof module:type
 */
function isNumber(obj) {
  return typeof obj === 'number' || obj instanceof Number;
}

module.exports = isNumber;


/***/ }),

/***/ "./node_modules/tui-code-snippet/type/isObject.js":
/*!********************************************************!*\
  !*** ./node_modules/tui-code-snippet/type/isObject.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is an object or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is an object or not.
 * If the given variable is an object, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is object?
 * @memberof module:type
 */
function isObject(obj) {
  return obj === Object(obj);
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/tui-code-snippet/type/isString.js":
/*!********************************************************!*\
  !*** ./node_modules/tui-code-snippet/type/isString.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a string or not.
 * If the given variable is a string, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is string?
 * @memberof module:type
 */
function isString(obj) {
  return typeof obj === 'string' || obj instanceof String;
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/tui-code-snippet/type/isUndefined.js":
/*!***********************************************************!*\
  !*** ./node_modules/tui-code-snippet/type/isUndefined.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is undefined or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is undefined or not.
 * If the given variable is undefined, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is undefined?
 * @memberof module:type
 */
function isUndefined(obj) {
  return obj === undefined; // eslint-disable-line no-undefined
}

module.exports = isUndefined;


/***/ }),

/***/ "./src/css/selectBox.css":
/*!*******************************!*\
  !*** ./src/css/selectBox.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! tui-code-snippet/collection/forEachOwnProperties */ "./node_modules/tui-code-snippet/collection/forEachOwnProperties.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _forEachOwnProperties) {
  "use strict";

  _exports.__esModule = true;
  _exports.cls = void 0;
  _forEachOwnProperties = _interopRequireDefault(_forEachOwnProperties);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * @fileoverview The static values
   */
  var CSS_PREFIX = 'tui-select-box';
  var classNames = {
    SELECT_BOX: '',
    ITEM: 'item',
    ITEM_GROUP: 'item-group',
    ITEM_GROUP_LABEL: 'item-group-label',
    DROPDOWN: 'dropdown',
    INPUT: 'input',
    PLACEHOLDER: 'placeholder',
    ICON: 'icon',
    OPEN: 'open',
    HIDDEN: 'hidden',
    DISABLED: 'disabled',
    SELECTED: 'selected',
    HIGHLIGHT: 'highlight'
  };

  var cls = function () {
    (0, _forEachOwnProperties["default"])(classNames, function (value, key) {
      if (value) {
        classNames[key] = CSS_PREFIX + "-" + value;
      } else {
        classNames[key] = CSS_PREFIX;
      }
    });
    return classNames;
  }();

  _exports.cls = cls;
});

/***/ }),

/***/ "./src/js/dropdown.js":
/*!****************************!*\
  !*** ./src/js/dropdown.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! tui-code-snippet/collection/forEachArray */ "./node_modules/tui-code-snippet/collection/forEachArray.js"), __webpack_require__(/*! tui-code-snippet/type/isExisty */ "./node_modules/tui-code-snippet/type/isExisty.js"), __webpack_require__(/*! tui-code-snippet/type/isNumber */ "./node_modules/tui-code-snippet/type/isNumber.js"), __webpack_require__(/*! tui-code-snippet/domUtil/addClass */ "./node_modules/tui-code-snippet/domUtil/addClass.js"), __webpack_require__(/*! tui-code-snippet/domUtil/removeClass */ "./node_modules/tui-code-snippet/domUtil/removeClass.js"), __webpack_require__(/*! tui-code-snippet/domUtil/removeElement */ "./node_modules/tui-code-snippet/domUtil/removeElement.js"), __webpack_require__(/*! ./utils */ "./src/js/utils.js"), __webpack_require__(/*! ./constants */ "./src/js/constants.js"), __webpack_require__(/*! ./itemGroup */ "./src/js/itemGroup.js"), __webpack_require__(/*! ./item */ "./src/js/item.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _forEachArray, _isExisty, _isNumber, _addClass, _removeClass, _removeElement, _utils, _constants, _itemGroup, _item) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _forEachArray = _interopRequireDefault(_forEachArray);
  _isExisty = _interopRequireDefault(_isExisty);
  _isNumber = _interopRequireDefault(_isNumber);
  _addClass = _interopRequireDefault(_addClass);
  _removeClass = _interopRequireDefault(_removeClass);
  _removeElement = _interopRequireDefault(_removeElement);
  _itemGroup = _interopRequireDefault(_itemGroup);
  _item = _interopRequireDefault(_item);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  /**
   * @class
   * @ignore
   * @param {object} options - options
   *   @param {string} [options.placeholder] - placeholder for an input
   *   @param {array<itemData|itemGroupData>} options.data - data for ItemGroups and Items
   *   @param {boolean} [options.disabled=false] - whether a dropdown should be disabled or not
   */
  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(_ref) {
      var placeholder = _ref.placeholder,
          data = _ref.data,
          _ref$disabled = _ref.disabled,
          disabled = _ref$disabled === void 0 ? false : _ref$disabled;

      /**
       * @type {HTMLElement}
       * @private
       */
      this.el = (0, _utils.createElement)('ul', '', {
        className: _constants.cls.DROPDOWN + " " + _constants.cls.HIDDEN
      });
      /**
       * @type {HTMLElement}
       * @private
       */

      this.nativeEl = (0, _utils.createElement)('select', '', {
        className: _constants.cls.HIDDEN,
        tabIndex: -1
      });
      /**
       * Items and ItemGroups
       * @type {Array.<Item|ItemGroup>}
       * @private
       */

      this.items = [];
      /**
       * the number of Item
       * @type {number}
       * @private
       */

      this.itemLength = 0;
      /**
       * @type {Item}
       * @private
       */

      this.selectedItem = null;
      /**
       * @type {Item}
       * @private
       */

      this.highlightedItem = null;
      this.initialize(data, disabled, placeholder);
    }
    /**
     * Create Items and ItemGroups and calculate the number of Items
     * @return {array<Item|ItemGroup>}
     * @private
     */


    var _proto = Dropdown.prototype;

    _proto.initializeItems = function initializeItems(data) {
      var _this = this;

      var item;
      var itemIndex = 0;
      var itemGroupIndex = 0;
      data.forEach(function (datum) {
        if (datum.data) {
          item = new _itemGroup["default"](_objectSpread({
            index: itemIndex,
            itemGroupIndex: itemGroupIndex
          }, datum));
          itemIndex += datum.data.length - 1;
          itemGroupIndex += 1;
        } else {
          item = new _item["default"](_objectSpread({
            index: itemIndex
          }, datum));
        }

        _this.items.push(item);

        item.appendToContainer(_this.el, _this.nativeEl);
        itemIndex += 1;
      });
      this.itemLength = itemIndex;
    }
    /**
     * Initialize
     * @private
     */
    ;

    _proto.initialize = function initialize(data, disabled, placeholder) {
      var _this2 = this;

      if (placeholder) {
        (0, _utils.createElement)('option', '', {
          label: placeholder,
          value: ''
        }, this.nativeEl);
      }

      this.initializeItems(data);
      this.iterateItems(function (item) {
        if (!_this2.selectedItem && item.isSelected()) {
          _this2.selectedItem = item;
        } else if (_this2.selectedItem && item.isSelected()) {
          item.deselect();
        }
      });

      if (disabled) {
        this.disable();
      }
    }
    /**
     * Execute a function while iterating items
     * @param {function} callback - function to execute
     * @param  {...any} args - arguments
     * @private
     */
    ;

    _proto.iterateItems = function iterateItems(callback) {
      var _this3 = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var index = 0;
      (0, _forEachArray["default"])(this.items, function (item) {
        var result = true;

        if (item instanceof _itemGroup["default"]) {
          (0, _forEachArray["default"])(item.getItems(), function (itemInGroup) {
            result = callback.apply(_this3, [itemInGroup, index].concat(args)) || false;
            index += 1;
            return result;
          });
          return result;
        }

        result = callback.apply(_this3, [item, index].concat(args));
        index += 1;
        return result;
      });
    }
    /**
     * Open a dropdown list
     */
    ;

    _proto.open = function open() {
      (0, _removeClass["default"])(this.el, _constants.cls.HIDDEN);
      var highlightedItem = !this.selectedItem || this.selectedItem.isDisabled() ? this.getItems(function (item) {
        return !item.isDisabled();
      })[0] : this.selectedItem;
      this.highlight(highlightedItem);
    }
    /**
     * Close a dropdown list
     */
    ;

    _proto.close = function close() {
      (0, _addClass["default"])(this.el, _constants.cls.HIDDEN);
      this.dehighlight();
    }
    /**
     * Disable an dropdown
     */
    ;

    _proto.disable = function disable() {
      this.nativeEl.disabled = true;
      (0, _addClass["default"])(this.el, _constants.cls.DISABLED);
    }
    /**
     * Enable an dropdown
     */
    ;

    _proto.enable = function enable() {
      this.nativeEl.disabled = false;
      (0, _removeClass["default"])(this.el, _constants.cls.DISABLED);
    }
    /**
     * Select an Item
     * @param {string|number|Item} value - if string, find an Item by its value. if number, find an Item by its index.
     * @return {Item} result of selection
     */
    ;

    _proto.select = function select(value) {
      var selectedItem = value instanceof _item["default"] ? value : this.getItem(value);
      this.deselect();

      if (!selectedItem || selectedItem && selectedItem.isDisabled()) {
        return null;
      }

      selectedItem.select();
      this.selectedItem = selectedItem;
      return selectedItem;
    }
    /**
     * Deselect an Item
     */
    ;

    _proto.deselect = function deselect() {
      if (this.selectedItem) {
        this.selectedItem.deselect();
        this.selectedItem = null;
      }
    }
    /**
     * Highlight an Item
     * @param {number|string|Item} value - if string, find an Item by its value. if number, find an Item by its index.
     */
    ;

    _proto.highlight = function highlight(value) {
      var highlightedItem;

      if (value instanceof _item["default"]) {
        highlightedItem = value;
      } else if ((0, _isExisty["default"])(value)) {
        highlightedItem = this.getItem(value);
      }

      if (highlightedItem && highlightedItem !== this.highlightedItem) {
        this.dehighlight();
        highlightedItem.highlight();
        this.highlightedItem = highlightedItem;
      }
    }
    /**
     * Dehighlight an Item
     */
    ;

    _proto.dehighlight = function dehighlight() {
      if (this.highlightedItem) {
        this.highlightedItem.dehighlight();
        this.highlightedItem = null;
      }
    }
    /**
     * Move a highlighted Item
     * @param {number} direction - direction to move
     */
    ;

    _proto.moveHighlightedItem = function moveHighlightedItem(direction) {
      var highlightedItem = this.getHighlightedItem();
      var items = this.getItems();
      var length = items.length;
      var index = items.indexOf(highlightedItem);

      if (index > -1) {
        index = this.getItemIndex(index, length, direction);

        while (index < length) {
          if (!items[index].isDisabled()) {
            this.highlight(items[index]);
            break;
          }

          index = this.getItemIndex(index, length, direction);
        }
      }
    };

    _proto.getItemIndex = function getItemIndex(index, length, direction) {
      return (index + direction + length) % length;
    }
    /**
     * Get all Items that pass the test implemented by the provided function
     * If filter function is not passed, it returns all Items
     * @param {function} callback - callback function to filter items
     * @param {number} number - the number of items to find. -1 means all items.
     * @return {array<Item>}
     */
    ;

    _proto.getItems = function getItems(callback, number) {
      if (callback === void 0) {
        callback = function callback() {
          return true;
        };
      }

      if (number === void 0) {
        number = -1;
      }

      var items = [];
      this.iterateItems(function (item) {
        if (callback(item)) {
          items.push(item);
          number -= 1;
          return number !== 0;
        }

        return true;
      });
      return items;
    }
    /**
     * Get an Item by its index or value
     * @param {number|string} value - if string, the Item's value. if number, the Item's index.
     * @return {Item}
     */
    ;

    _proto.getItem = function getItem(value) {
      var isValidItem = (0, _isNumber["default"])(value) ? function (comparedItem) {
        return comparedItem.getIndex() === value;
      } : function (comparedItem) {
        return comparedItem.getValue() === value;
      };
      return this.getItems(isValidItem, 1)[0];
    }
    /**
     * Get all ItemGroups that pass the test implemented by the provided function
     * If filter function is not passed, it returns all ItemGroups
     * @param {function} callback - callback function to filter item groups
     * @param {number} number - the number of item groups to find. -1 means all item groups.
     * @return {array<ItemGroup>}
     */
    ;

    _proto.getItemGroups = function getItemGroups(callback, number) {
      if (callback === void 0) {
        callback = function callback() {
          return true;
        };
      }

      if (number === void 0) {
        number = -1;
      }

      var itemGroups = [];
      (0, _forEachArray["default"])(this.items, function (itemGroup) {
        if (itemGroup instanceof _itemGroup["default"] && callback(itemGroup)) {
          itemGroups.push(itemGroup);
          number -= 1;
          return number !== 0;
        }

        return true;
      });
      return itemGroups;
    }
    /**
     * Get an ItemGroup by its index
     * @param {number} index - groupIndex of the ItemGroup
     * @return {ItemGroup}
     */
    ;

    _proto.getItemGroup = function getItemGroup(index) {
      return this.getItemGroups(function (itemGroup) {
        return itemGroup.getIndex() === index;
      }, 1)[0];
    }
    /**
     * Return the number of Items
     * @return {number}
     */
    ;

    _proto.getItemLength = function getItemLength() {
      return this.itemLength;
    }
    /**
     * Return the selected Item
     * @return {Item}
     */
    ;

    _proto.getSelectedItem = function getSelectedItem() {
      return this.selectedItem;
    }
    /**
     * Return the highlighted Item
     * @return {Item}
     */
    ;

    _proto.getHighlightedItem = function getHighlightedItem() {
      return this.highlightedItem;
    }
    /**
     * Append the element and native element to the container
     * @param {HTMLElement} container - container element
     */
    ;

    _proto.appendToContainer = function appendToContainer(container) {
      container.appendChild(this.el);
      container.appendChild(this.nativeEl);
    }
    /**
     * Destory a dropdown
     */
    ;

    _proto.destroy = function destroy() {
      this.items.forEach(function (item) {
        return item.destroy();
      });
      (0, _removeElement["default"])(this.el);
      (0, _removeElement["default"])(this.nativeEl);
      this.el = this.nativeEl = this.items = this.selectedItem = this.highlightedItem = null;
    };

    return Dropdown;
  }();

  _exports["default"] = Dropdown;
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./selectBox */ "./src/js/selectBox.js"), __webpack_require__(/*! ../css/selectBox.css */ "./src/css/selectBox.css")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _selectBox, _selectBox2) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _selectBox = _interopRequireDefault(_selectBox);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * @fileoverview
   */
  var _default = _selectBox["default"];
  _exports["default"] = _default;
});

/***/ }),

/***/ "./src/js/input.js":
/*!*************************!*\
  !*** ./src/js/input.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! tui-code-snippet/domUtil/addClass */ "./node_modules/tui-code-snippet/domUtil/addClass.js"), __webpack_require__(/*! tui-code-snippet/domUtil/removeClass */ "./node_modules/tui-code-snippet/domUtil/removeClass.js"), __webpack_require__(/*! tui-code-snippet/domUtil/removeElement */ "./node_modules/tui-code-snippet/domUtil/removeElement.js"), __webpack_require__(/*! ./utils */ "./src/js/utils.js"), __webpack_require__(/*! ./constants */ "./src/js/constants.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _addClass, _removeClass, _removeElement, _utils, _constants) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _addClass = _interopRequireDefault(_addClass);
  _removeClass = _interopRequireDefault(_removeClass);
  _removeElement = _interopRequireDefault(_removeElement);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * @fileoverview Input
   */

  /**
   * @class
   * @ignore
   * @param {object} options - options
   *   @param {string} [options.placeholder] - placeholder for a select box
   *   @param {string} [options.disabled] - whether an input should be disabled or not
   *   @param {boolean} [options.showIcon] - whether an arrow icon in the input should be shown
   */
  var Input = /*#__PURE__*/function () {
    function Input(_ref) {
      var placeholder = _ref.placeholder,
          disabled = _ref.disabled,
          showIcon = _ref.showIcon;

      /**
       * text for a placeholder
       * @type {string}
       * @private
       */
      this.placeholderText = placeholder;
      /**
       * @type {HTMLElement}
       * @private
       */

      this.el = (0, _utils.createElement)('div', '', {
        className: _constants.cls.INPUT,
        tabIndex: 0
      });
      /**
       * @type {HTMLElement}
       * @private
       */

      this.placeholderEl = (0, _utils.createElement)('p', this.placeholderText, {
        className: _constants.cls.PLACEHOLDER
      }, this.el);
      this.initialize(disabled, showIcon);
    }
    /**
     * Initialize
     * @private
     */


    var _proto = Input.prototype;

    _proto.initialize = function initialize(disabled, showIcon) {
      if (showIcon) {
        (0, _utils.createElement)('span', 'select', {
          className: _constants.cls.ICON
        }, this.el);
      } else {
        this.placeholderEl.width = '100%';
      }

      if (disabled) {
        this.disable();
      }
    }
    /**
     * Disable an input
     */
    ;

    _proto.disable = function disable() {
      (0, _addClass["default"])(this.el, _constants.cls.DISABLED);
    }
    /**
     * Enable an input
     */
    ;

    _proto.enable = function enable() {
      (0, _removeClass["default"])(this.el, _constants.cls.DISABLED);
    }
    /**
     * Open an input
     */
    ;

    _proto.open = function open() {
      (0, _addClass["default"])(this.el, _constants.cls.OPEN);
    }
    /**
     * Close an input
     */
    ;

    _proto.close = function close() {
      (0, _removeClass["default"])(this.el, _constants.cls.OPEN);
    }
    /**
     * Focus
     */
    ;

    _proto.focus = function focus() {
      this.el.focus();
    }
    /**
     * Change the text in the placeholder
     * @param {Item} item - selected Item
     */
    ;

    _proto.changeText = function changeText(item) {
      if (item) {
        this.placeholderEl.textContent = item.getLabel();
      } else {
        this.placeholderEl.textContent = this.placeholderText;
      }
    }
    /**
     * Append the element to the container
     * @param {HTMLElement} container - container element
     */
    ;

    _proto.appendToContainer = function appendToContainer(container) {
      container.appendChild(this.el);
    }
    /**
     * Destroy an input
     */
    ;

    _proto.destroy = function destroy() {
      (0, _removeElement["default"])(this.el);
      this.el = this.placeholderEl = null;
    };

    return Input;
  }();

  _exports["default"] = Input;
});

/***/ }),

/***/ "./src/js/item.js":
/*!************************!*\
  !*** ./src/js/item.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! tui-code-snippet/domUtil/addClass */ "./node_modules/tui-code-snippet/domUtil/addClass.js"), __webpack_require__(/*! tui-code-snippet/domUtil/removeClass */ "./node_modules/tui-code-snippet/domUtil/removeClass.js"), __webpack_require__(/*! tui-code-snippet/domUtil/removeElement */ "./node_modules/tui-code-snippet/domUtil/removeElement.js"), __webpack_require__(/*! ./utils */ "./src/js/utils.js"), __webpack_require__(/*! ./constants */ "./src/js/constants.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _addClass, _removeClass, _removeElement, _utils, _constants) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _addClass = _interopRequireDefault(_addClass);
  _removeClass = _interopRequireDefault(_removeClass);
  _removeElement = _interopRequireDefault(_removeElement);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * @fileoverview Item
   */

  /**
   * @class
   * @description
   * An item.
   * You can get Item by {@link SelectBox#getItem SelectBox.getItem()} and {@link SelectBox#getItems SelectBox.getItems()}.
   */
  var Item = /*#__PURE__*/function () {
    /**
     * @hideconstructor
     * @param {object} options - options
     *   @param {string} [options.label] - label to be displayed in the drop-down list
     *   @param {string} options.value - value of an item
     *   @param {boolean} [options.disabled=false] - whether an Item should be disabled or not
     *   @param {boolean} [options.selected=false] - whether an Item should be pre-selected or not
     *   @param {number} options.index - Item's index
     */
    function Item(_ref) {
      var value = _ref.value,
          label = _ref.label,
          disabled = _ref.disabled,
          selected = _ref.selected,
          index = _ref.index;

      /**
       * value of an item
       * @type {string}
       * @private
       */
      this.value = "" + value;
      /**
       * label to be displayed in the drop-down list
       * if label is an empty string, it should be same as its value
       * @type {string}
       * @private
       */

      this.label = label || this.value;
      /**
       * @type {number}
       * @private
       */

      this.index = index;
      /**
       * whether an ItemGroup of the Item is disabled or not
       * @type {boolean}
       * @private
       */

      this.itemGroupDisabled = false;
      /**
       * whether an Item is disabled or not
       * @type {boolean}
       * @private
       */

      this.itemDisabled = false;
      /**
       * @type {boolean}
       * @private
       */

      this.selected = false;
      /**
       * <li> element for a custom dropdown item
       * @type {HTMLElement}
       * @private
       */

      this.el = (0, _utils.createElement)('li', this.label, {
        className: _constants.cls.ITEM,
        tabIndex: -1,
        'data-value': this.value,
        'data-index': this.index
      });
      /**
       * <option> element for a select element
       * @type {HTMLElement}
       * @private
       */

      this.nativeEl = (0, _utils.createElement)('option', '', {
        value: this.value,
        label: this.label
      });
      this.initialize(disabled, selected);
    }
    /**
     * Initialize
     * @private
     */


    var _proto = Item.prototype;

    _proto.initialize = function initialize(disabled, selected) {
      if (selected) {
        this.select();
      }

      if (disabled) {
        this.disable();
      }
    }
    /**
     * Make an Item disable
     * @private
     */
    ;

    _proto.makeDisable = function makeDisable() {
      this.nativeEl.disabled = true;
      (0, _addClass["default"])(this.el, _constants.cls.DISABLED);
    }
    /**
     * Make an Item enable
     * @private
     */
    ;

    _proto.makeEnable = function makeEnable() {
      this.nativeEl.disabled = false;
      (0, _removeClass["default"])(this.el, _constants.cls.DISABLED);
    }
    /**
     * Disable an Item due to an ItemGroup
     * @ignore
     */
    ;

    _proto.disableItemGroup = function disableItemGroup() {
      this.itemGroupDisabled = true;
      this.makeDisable();
    }
    /**
     * Enable an Item due to an ItemGroup
     * @ignore
     */
    ;

    _proto.enableItemGroup = function enableItemGroup() {
      this.itemGroupDisabled = false;

      if (!this.isDisabled()) {
        this.makeEnable();
      }
    }
    /**
     * Disable an Item
     * @ignore
     */
    ;

    _proto.disable = function disable() {
      this.itemDisabled = true;
      this.makeDisable();
    }
    /**
     * Enable an Item
     * @ignore
     */
    ;

    _proto.enable = function enable() {
      this.itemDisabled = false;

      if (!this.isDisabled()) {
        this.makeEnable();
      }
    }
    /**
     * Select an Item
     * @ignore
     */
    ;

    _proto.select = function select() {
      if (!this.isDisabled()) {
        this.selected = this.nativeEl.selected = true;
        (0, _addClass["default"])(this.el, _constants.cls.SELECTED);
      }
    }
    /**
     * Deselect an Item
     * @ignore
     */
    ;

    _proto.deselect = function deselect() {
      this.selected = this.nativeEl.selected = false;
      (0, _removeClass["default"])(this.el, _constants.cls.SELECTED);
    }
    /**
     * Highlight an Item
     * @ignore
     */
    ;

    _proto.highlight = function highlight() {
      if (!this.isDisabled()) {
        (0, _addClass["default"])(this.el, _constants.cls.HIGHLIGHT);
        this.el.focus();
      }
    }
    /**
     * Remove a highlight from an Item
     * @ignore
     */
    ;

    _proto.dehighlight = function dehighlight() {
      (0, _removeClass["default"])(this.el, _constants.cls.HIGHLIGHT);
      this.el.blur();
    }
    /**
     * Return an item's value.
     * @return {string}
     */
    ;

    _proto.getValue = function getValue() {
      return this.value;
    }
    /**
     * Return an item's label.
     * @return {string}
     */
    ;

    _proto.getLabel = function getLabel() {
      return this.label;
    }
    /**
     * Return an item's index.
     * @return {number}
     */
    ;

    _proto.getIndex = function getIndex() {
      return this.index;
    }
    /**
     * Return whether an item is selected or not.
     * @return {boolean}
     */
    ;

    _proto.isSelected = function isSelected() {
      return this.selected;
    }
    /**
     * Return whether an item is disabled or not.
     * The result is true if any of the items and item groups are disabled.
     * @return {boolean}
     */
    ;

    _proto.isDisabled = function isDisabled() {
      return this.itemDisabled || this.itemGroupDisabled;
    }
    /**
     * Append the element and native element to the containers
     * @param {HTMLElement} container - container element
     * @param {HTMLElement} nativeContainer - native container element
     * @ignore
     */
    ;

    _proto.appendToContainer = function appendToContainer(container, nativeContainer) {
      container.appendChild(this.el);
      nativeContainer.appendChild(this.nativeEl);
    }
    /**
     * Destroy an Item
     * @ignore
     */
    ;

    _proto.destroy = function destroy() {
      (0, _removeElement["default"])(this.el);
      (0, _removeElement["default"])(this.nativeEl);
      this.el = this.nativeEl = null;
    };

    return Item;
  }();

  _exports["default"] = Item;
});

/***/ }),

/***/ "./src/js/itemGroup.js":
/*!*****************************!*\
  !*** ./src/js/itemGroup.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! tui-code-snippet/domUtil/addClass */ "./node_modules/tui-code-snippet/domUtil/addClass.js"), __webpack_require__(/*! tui-code-snippet/domUtil/removeClass */ "./node_modules/tui-code-snippet/domUtil/removeClass.js"), __webpack_require__(/*! tui-code-snippet/domUtil/removeElement */ "./node_modules/tui-code-snippet/domUtil/removeElement.js"), __webpack_require__(/*! ./utils */ "./src/js/utils.js"), __webpack_require__(/*! ./constants */ "./src/js/constants.js"), __webpack_require__(/*! ./item */ "./src/js/item.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _addClass, _removeClass, _removeElement, _utils, _constants, _item) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _addClass = _interopRequireDefault(_addClass);
  _removeClass = _interopRequireDefault(_removeClass);
  _removeElement = _interopRequireDefault(_removeElement);
  _item = _interopRequireDefault(_item);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  /**
   * @class
   * @description
   * A group of items.
   * You can get ItemGroup by {@link SelectBox#getItemGroup SelectBox.getItemGroup()} and {@link SelectBox#getItemGroups SelectBox.getItemGroups()}.
   */
  var ItemGroup = /*#__PURE__*/function () {
    /**
     * @hideconstructor
     * @param {object} options - options
     *   @param {string} [options.label] - label to be displayed in the dropdown list
     *   @param {array<itemData>} options.data - data for Items to be included in the ItemGroup
     *   @param {boolean} [options.disabled=false] - whether an ItemGroup should be disabled or not
     *   @param {number} options.index - index of the first Item in the ItemGroup
     *   @param {number} options.itemGroupIndex - index of the ItemGroup
     */
    function ItemGroup(_ref) {
      var _ref$label = _ref.label,
          label = _ref$label === void 0 ? '' : _ref$label,
          data = _ref.data,
          _ref$disabled = _ref.disabled,
          disabled = _ref$disabled === void 0 ? false : _ref$disabled,
          index = _ref.index,
          itemGroupIndex = _ref.itemGroupIndex;

      /**
       * @type {HTMLElement}
       * @private
       */
      this.el = (0, _utils.createElement)('li', '', {
        'data-group-index': itemGroupIndex
      });
      /**
       * @type {HTMLElement}
       * @private
       */

      this.labelEl = (0, _utils.createElement)('span', label, {
        className: _constants.cls.ITEM_GROUP_LABEL
      }, this.el);
      /**
       * @type {HTMLElement}
       * @private
       */

      this.itemContainerEl = (0, _utils.createElement)('ul', '', {
        className: _constants.cls.ITEM_GROUP
      }, this.el);
      /**
       * @type {HTMLElement}
       * @private
       */

      this.nativeEl = (0, _utils.createElement)('optgroup', label);
      /**
       * @type {array<Item>}
       * @private
       */

      this.items = this.createItems(data, index);
      /**
       * @type {number}
       * @private
       */

      this.index = itemGroupIndex;
      /**
       * @type {string}
       * @private
       */

      this.label = label;
      /**
       * whether an ItemGroup is disabled or not
       * @type {boolean}
       * @private
       */

      this.disabled = false;
      this.initialize(disabled);
    }
    /**
     * Create Items to be included in the ItemGroup
     * @return {array<Item>}
     * @private
     */


    var _proto = ItemGroup.prototype;

    _proto.createItems = function createItems(data, index) {
      var _this = this;

      return data.map(function (datum, itemIndex) {
        var item = new _item["default"](_objectSpread({
          index: index + itemIndex
        }, datum));
        item.appendToContainer(_this.itemContainerEl, _this.nativeEl);
        return item;
      });
    }
    /**
     * Initialize
     * @private
     */
    ;

    _proto.initialize = function initialize(disabled) {
      if (disabled) {
        this.disable();
      }
    }
    /**
     * Disable an ItemGroup
     * @ignore
     */
    ;

    _proto.disable = function disable() {
      this.disabled = this.nativeEl.disabled = true;
      (0, _addClass["default"])(this.labelEl, _constants.cls.DISABLED);
      this.items.forEach(function (item) {
        return item.disableItemGroup();
      });
    }
    /**
     * Enable an ItemGroup
     * @ignore
     */
    ;

    _proto.enable = function enable() {
      this.disabled = this.nativeEl.disabled = false;
      (0, _removeClass["default"])(this.labelEl, _constants.cls.DISABLED);
      this.items.forEach(function (item) {
        return item.enableItemGroup();
      });
    }
    /**
     * Get {@link Item items} in the item group.
     * @return {array<Item>}
     * @example
     * const items = itemGroup.getItems();
     * console.log(items[0]); // first item in the item group
     * console.log(items.length); // the number of items in the item group
     */
    ;

    _proto.getItems = function getItems() {
      return this.items;
    }
    /**
     * Return an item group's index.
     * @return {number}
     */
    ;

    _proto.getIndex = function getIndex() {
      return this.index;
    }
    /**
     * Return an item group's label.
     * @return {string}
     */
    ;

    _proto.getLabel = function getLabel() {
      return this.label;
    }
    /**
     * Return whether an ItemGroup is disabled or not.
     * @return {boolean}
     */
    ;

    _proto.isDisabled = function isDisabled() {
      return this.disabled;
    }
    /**
     * Append the element and native element to the containers
     * @param {HTMLElement} container - container element
     * @param {HTMLElement} nativeContainer - native container element
     * @ignore
     */
    ;

    _proto.appendToContainer = function appendToContainer(container, nativeContainer) {
      container.appendChild(this.el);
      nativeContainer.appendChild(this.nativeEl);
    }
    /**
     * Destory an ItemGroup
     * @ignore
     */
    ;

    _proto.destroy = function destroy() {
      this.items.forEach(function (item) {
        return item.destroy();
      });
      (0, _removeElement["default"])(this.el);
      (0, _removeElement["default"])(this.nativeEl);
      this.el = this.labelEl = this.itemContainerEl = this.nativeEl = this.items = null;
    };

    return ItemGroup;
  }();

  _exports["default"] = ItemGroup;
});

/***/ }),

/***/ "./src/js/keyEventUtils.js":
/*!*********************************!*\
  !*** ./src/js/keyEventUtils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.identifyKey = void 0;

  /**
   * @fileoverview Utility functions related to key events
   */
  var keyCodeMap = {
    38: 'arrowUp',
    40: 'arrowDown',
    32: 'space',
    13: 'enter',
    27: 'escape',
    61: 'tab'
  };
  var keyMap = {
    ArrowUp: 'arrowUp',
    Up: 'arrowUp',
    ArrowDown: 'arrowDown',
    Down: 'arrowDown',
    ' ': 'space',
    Spacebar: 'space',
    Enter: 'enter',
    Escape: 'escape',
    Esc: 'escape',
    Tab: 'tab'
  };
  /**
   * Identify the key (polyfill for IE)
   * @param {string} ev - keyboard event
   * @return {string} - key
   */

  var identifyKey = function identifyKey(ev) {
    var key = ev.key,
        keyCode = ev.keyCode;

    if (key) {
      return keyMap[key] || key;
    }

    return keyCodeMap[keyCode] || keyCode;
  };

  _exports.identifyKey = identifyKey;
});

/***/ }),

/***/ "./src/js/selectBox.js":
/*!*****************************!*\
  !*** ./src/js/selectBox.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! tui-code-snippet/customEvents/customEvents */ "./node_modules/tui-code-snippet/customEvents/customEvents.js"), __webpack_require__(/*! tui-code-snippet/domEvent/on */ "./node_modules/tui-code-snippet/domEvent/on.js"), __webpack_require__(/*! tui-code-snippet/domEvent/off */ "./node_modules/tui-code-snippet/domEvent/off.js"), __webpack_require__(/*! tui-code-snippet/domEvent/preventDefault */ "./node_modules/tui-code-snippet/domEvent/preventDefault.js"), __webpack_require__(/*! tui-code-snippet/domEvent/getTarget */ "./node_modules/tui-code-snippet/domEvent/getTarget.js"), __webpack_require__(/*! tui-code-snippet/domUtil/closest */ "./node_modules/tui-code-snippet/domUtil/closest.js"), __webpack_require__(/*! tui-code-snippet/domUtil/removeElement */ "./node_modules/tui-code-snippet/domUtil/removeElement.js"), __webpack_require__(/*! tui-code-snippet/type/isObject */ "./node_modules/tui-code-snippet/type/isObject.js"), __webpack_require__(/*! tui-code-snippet/type/isExisty */ "./node_modules/tui-code-snippet/type/isExisty.js"), __webpack_require__(/*! tui-code-snippet/type/isHTMLNode */ "./node_modules/tui-code-snippet/type/isHTMLNode.js"), __webpack_require__(/*! tui-code-snippet/request/sendHostname */ "./node_modules/tui-code-snippet/request/sendHostname.js"), __webpack_require__(/*! ./utils */ "./src/js/utils.js"), __webpack_require__(/*! ./keyEventUtils */ "./src/js/keyEventUtils.js"), __webpack_require__(/*! ./constants */ "./src/js/constants.js"), __webpack_require__(/*! ./input */ "./src/js/input.js"), __webpack_require__(/*! ./dropdown */ "./src/js/dropdown.js"), __webpack_require__(/*! ./itemGroup */ "./src/js/itemGroup.js"), __webpack_require__(/*! ./item */ "./src/js/item.js"), __webpack_require__(/*! ./theme */ "./src/js/theme.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _customEvents, _on, _off, _preventDefault, _getTarget, _closest, _removeElement, _isObject, _isExisty, _isHTMLNode, _sendHostname, _utils, _keyEventUtils, _constants, _input, _dropdown, _itemGroup, _item, _theme) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _customEvents = _interopRequireDefault(_customEvents);
  _on = _interopRequireDefault(_on);
  _off = _interopRequireDefault(_off);
  _preventDefault = _interopRequireDefault(_preventDefault);
  _getTarget = _interopRequireDefault(_getTarget);
  _closest = _interopRequireDefault(_closest);
  _removeElement = _interopRequireDefault(_removeElement);
  _isObject = _interopRequireDefault(_isObject);
  _isExisty = _interopRequireDefault(_isExisty);
  _isHTMLNode = _interopRequireDefault(_isHTMLNode);
  _sendHostname = _interopRequireDefault(_sendHostname);
  _input = _interopRequireDefault(_input);
  _dropdown = _interopRequireDefault(_dropdown);
  _itemGroup = _interopRequireDefault(_itemGroup);
  _item = _interopRequireDefault(_item);
  _theme = _interopRequireDefault(_theme);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * @fileoverview SelectBox
   */

  /**
   * @class
   * @param {HTMLElement|string} container - container element or selector
   * @mixes CustomEvents
   * @param {object} options
   *   @param {array<itemData|itemGroupData>} options.data - array of {@link itemData} and {@link itemGroupData}
   *   @param {string} [options.placeholder] - placeholder for an input
   *   @param {boolean} [options.disabled] - whether an Item should be disabled or not
   *   @param {boolean} [options.autofocus] - whether a selectbox should get focus when the select box appends to the container
   *   @param {boolean} [options.autoclose] - whether a selectbox should close after selection
   *   @param {boolean} [options.showIcon] - whether an arrow icon in the input should be shown
   *   @param {object} [options.theme] - {@link themeConfig} for custom style
   *   @param {boolean} [options.usageStatistics] - whether send hostname to google analytics. If you don't want to send the hostname, please set to false.
   * @example
   * import SelectBox from '@toast-ui/select-box';
   * // or const SelectBox = require('@toast-ui/select-box');
   * // or const SelectBox = tui.SelectBox;
   *
   * const selectBox = new SelectBox('#select-box', {
   *   placeholder: 'Please select an option.',
   *   data: [
   *     {
   *       label: 'Fruits',
   *       data: [ { label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' } ]
   *     },
   *     { label: 'The quick brown fox jumps over the lazy dog.', value: 'none' },
   *     {
   *       label: 'Colors',
   *       data: [
   *         { label: 'Red', value: 'red' },
   *         { label: 'Yellow', value: 'yellow' },
   *         { label: 'Green', value: 'green', disabled: true },
   *         { label: 'Blue', value: 'blue', disabled: true },
   *         { label: 'Purple', value: 'purple' }
   *       ]
   *     }
   *   ],
   *   autofocus: true,
   *   showIcon: false,
   *   theme: {
   *     'common.border': '1px solid black',
   *     'common.color': 'black',
   *     'item.highlighted.background': 'yellow'
   *   }
   * });
   */

  /**
   * SelectBox provides some custom events: ({@link SelectBox#event-open open}, {@link SelectBox#event-close close}, {@link SelectBox#event-disable disable}, {@link SelectBox#event-enable enable}, {@link SelectBox#event-change change}).
   * You can bind event handlers by {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#on selectBox.on(eventName, handler)} and unbind by {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#off selectBox.off(eventName, handler)}.
   * Refer to the {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents CustomEvents} document at {@link https://github.com/nhn/tui.code-snippet tui-code-snippet} to know how to bind, and unbind custom events.
   * The example using custom events can be found {@link tutorial-example03-custom-events here}.
   * @typedef {class} CustomEvents
   * @example
   * // bind 'change' event
   * selectBox.on('change', ev => {
   *   console.log(`selected item is changed from ${ev.prev.getLabel()} to ${ev.curr.getLabel()}.`);
   * });
   *
   * // bind 'disable' and enable event
   * const print = ev => {
   *   let target = '';
   *   if (ev.target instanceof SelectBox) {
   *     target = 'Select box';
   *   } else {
   *     target = ev.target.getLabel();
   *   }
   *   console.log(`${target} is ${ev.type}.`);
   * }
   * selectBox.on({
   *   disable: print,
   *   enable: print
   * });
   *
   * // unbind change event
   * selectBox.off('change');
   *
   * // unbind disable event
   * selectBox.off(disable, print);
   *
   * // unbind all events
   * selectBox.off();
   */

  /**
   * Data of an {@link Item item}.
   * It is used for creating a {@link SelectBox}.
   * @typedef {object} itemData - data for {@link Item item}
   * @property {string} label - label to be displayed
   * @property {string} value - value of an item
   * @property {boolean} [disabled=false] - whether an item should be disabled or not
   * @property {boolean} [selected=false] - whether an item should be pre-selected or not
   * @example
   * const itemData = {
   *   label: 'disabled item',
   *   value: '0',
   *   disabled: true,
   *   selected: false
   * };
   */

  /**
   * Data of an {@link ItemGroup item group}.
   * It is used for creating a {@link SelectBox}.
   * ItemGroup supports only 1 level choices, so it does not work to add item groups in the item group.
   * The example using item groups can be found {@link tutorial-example01-basic here}.
   * @typedef {object} itemGroupData - data for {@link ItemGroup item group}
   * @property {string} label - label to be displayed
   * @property {array} data - {@link itemData data for item}
   * @property {boolean} [disabled=false] - whether an item group should be disabled or not
   * @example
   * const itemGroupData = {
   *   label: 'disabled items',
   *   data: [
   *     { label: 'disable', value: 'disable' },
   *     { label: 'none', value: '0' }
   *   ],
   *   disabled: true
   * };
   */
  var SelectBox = /*#__PURE__*/function () {
    function SelectBox(container, _ref) {
      var data = _ref.data,
          _ref$placeholder = _ref.placeholder,
          placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
          _ref$disabled = _ref.disabled,
          disabled = _ref$disabled === void 0 ? false : _ref$disabled,
          _ref$autofocus = _ref.autofocus,
          autofocus = _ref$autofocus === void 0 ? false : _ref$autofocus,
          _ref$autoclose = _ref.autoclose,
          autoclose = _ref$autoclose === void 0 ? true : _ref$autoclose,
          _ref$showIcon = _ref.showIcon,
          showIcon = _ref$showIcon === void 0 ? true : _ref$showIcon,
          theme = _ref.theme,
          _ref$usageStatistics = _ref.usageStatistics,
          usageStatistics = _ref$usageStatistics === void 0 ? true : _ref$usageStatistics;

      /**
       * @type {HTMLElement}
       * @private
       */
      this.el = (0, _utils.createElement)('div', '', {
        className: _constants.cls.SELECT_BOX
      });
      /**
       * @type {Input}
       * @private
       */

      this.input = new _input["default"]({
        placeholder: placeholder,
        disabled: disabled,
        showIcon: showIcon
      });
      /**
       * @type {Dropdown}
       * @private
       */

      this.dropdown = new _dropdown["default"]({
        placeholder: placeholder,
        disabled: disabled,
        data: data
      });
      /**
       * @type {boolean}
       * @private
       */

      this.opened = false;
      /**
       * @type {boolean}
       * @private
       */

      this.diabled = false;
      /**
       * @type {boolean}
       */

      this.autoclose = autoclose;
      /**
       * @type {Theme}
       * @private
       */

      this.theme = (0, _isObject["default"])(theme) ? new _theme["default"](theme, container) : null;
      this.initialize({
        placeholder: placeholder,
        disabled: disabled
      });
      this.appendToContainer(container);

      if (autofocus) {
        this.focus();
      }

      if (usageStatistics) {
        (0, _sendHostname["default"])('select-box', 'UA-129987462-1');
      }
    }
    /**
     * Append the select box element to the container
     * @param {HTMLElement|string} container - container element or selector
     * @private
     */


    var _proto = SelectBox.prototype;

    _proto.appendToContainer = function appendToContainer(container) {
      var containerEl = (0, _isHTMLNode["default"])(container) ? container : document.querySelector(container);
      containerEl.appendChild(this.el);
    }
    /**
     * Initialize
     * @param {object} options - options
     * @private
     */
    ;

    _proto.initialize = function initialize(options) {
      var selectedItem = this.getSelectedItem();

      if (selectedItem) {
        this.input.changeText(selectedItem);
      } else if (!options.placeholder) {
        this.select(0);
      }

      if (options.disabled) {
        this.disable();
      }

      this.bindEvents();
      this.input.appendToContainer(this.el);
      this.dropdown.appendToContainer(this.el);
    }
    /**
     * Bind events
     * @private
     */
    ;

    _proto.bindEvents = function bindEvents() {
      var _this = this;

      (0, _on["default"])(document, 'click', function (ev) {
        var target = (0, _getTarget["default"])(ev);

        if (!(0, _closest["default"])(target, "." + _constants.cls.SELECT_BOX) && _this.opened) {
          _this.close();
        }
      }, this);
      (0, _on["default"])(this.el, 'click', function (ev) {
        return _this.handleClick(ev, _constants.cls);
      });
      (0, _on["default"])(this.el, 'mouseover', function (ev) {
        return _this.handleMouseover(ev, _constants.cls);
      });
      (0, _on["default"])(this.el, 'keydown', function (ev) {
        return _this.handleKeydown(ev, _constants.cls);
      });
    }
    /**
     * Unbind events
     * @private
     */
    ;

    _proto.unbindEvents = function unbindEvents() {
      (0, _off["default"])(document, 'click');
      (0, _off["default"])(this.el, 'click mouseover keydown');
    }
    /**
     * Handle click events
     * @param {Event} ev - an event
     * @param {object} cls - cls
     * @private
     */
    ;

    _proto.handleClick = function handleClick(ev, _ref2) {
      var INPUT = _ref2.INPUT,
          ITEM = _ref2.ITEM;
      var target = (0, _getTarget["default"])(ev);
      var itemEl = (0, _closest["default"])(target, "." + ITEM);

      if (itemEl) {
        this.select(itemEl.getAttribute('data-value'));
      } else if ((0, _closest["default"])(target, "." + INPUT)) {
        this.toggle();
      }

      this.focus();
    }
    /**
     * Handle mouseover events
     * @param {Event} ev - an event
     * @param {object} cls - cls
     * @private
     */
    ;

    _proto.handleMouseover = function handleMouseover(ev, _ref3) {
      var ITEM = _ref3.ITEM;

      if (this.checkMousemove(ev.clientX, ev.clientY)) {
        var target = (0, _getTarget["default"])(ev);
        var itemEl = (0, _closest["default"])(target, "." + ITEM);

        if (itemEl) {
          this.dropdown.highlight(itemEl.getAttribute('data-value'));
        }
      }
    }
    /**
     * Check if a pointer is moved
     * @param {number} x - mouseEvent.clientX
     * @param {number} y - mouseEvent.clientY
     * @return {boolean}
     * @private
     */
    ;

    _proto.checkMousemove = function checkMousemove(x, y) {
      if (this.prevX !== x || this.prevY !== y) {
        this.prevX = x;
        this.prevY = y;
        return true;
      }

      return false;
    }
    /**
     * Handle keydown events
     * @param {Event} ev - an event
     * @param {object} classNames - cls
     * @private
     */
    ;

    _proto.handleKeydown = function handleKeydown(ev, classNames) {
      var key = (0, _keyEventUtils.identifyKey)(ev);
      var closeKeys = ['tab', 'escape'];
      var activeKeys = ['arrowUp', 'arrowDown', 'space', 'enter'];

      if (closeKeys.indexOf(key) > -1 && this.opened) {
        this.close();

        if (key === 'escape') {
          this.focus();
        }
      } else if (activeKeys.indexOf(key) > -1) {
        (0, _preventDefault["default"])(ev);
        this.activateKeydown(ev, key, classNames);
      }
    }
    /**
     * Activate keydown events
     * @param {Event} ev - an event
     * @param {string} key - key pressed
     * @param {object} classNames - cls
     * @private
     */
    ;

    _proto.activateKeydown = function activateKeydown(ev, key, _ref4) {
      var ITEM = _ref4.ITEM,
          INPUT = _ref4.INPUT;
      var target = (0, _getTarget["default"])(ev);
      var itemEl = (0, _closest["default"])(target, "." + ITEM);

      if (key === 'escape' && this.opened) {
        this.close();
        this.focus();
      } else if (itemEl) {
        this.pressKeyOnItem(key, itemEl);
      } else if ((0, _closest["default"])(target, "." + INPUT)) {
        this.pressKeyOnInput(key);
      }
    }
    /**
     * Handle keydown events when it occurs on the Input
     * @param {string} key - key
     * @private
     */
    ;

    _proto.pressKeyOnInput = function pressKeyOnInput(key) {
      if (!this.opened) {
        this.open();
      } else if (key === 'arrowUp' || key === 'arrowDown') {
        this.dropdown.moveHighlightedItem(key === 'arrowUp' ? -1 : 1);
      }
    }
    /**
     * Handle keydown events when it occurs on the Item
     * @param {string} key - key
     * @param {HTMLElement} itemEl - Item.el
     * @private
     */
    ;

    _proto.pressKeyOnItem = function pressKeyOnItem(key, itemEl) {
      if (key === 'enter' || key === 'space') {
        this.selectByKeydown(itemEl);
      } else if (key === 'arrowUp' || key === 'arrowDown') {
        this.dropdown.moveHighlightedItem(key === 'arrowUp' ? -1 : 1);
      }
    }
    /**
     * Select an Item by space or enter
     * @param {HTMLElement} itemEl - Item.el
     * @private
     */
    ;

    _proto.selectByKeydown = function selectByKeydown(itemEl) {
      this.select(itemEl.getAttribute('data-value'));
      this.close();
      this.focus();
    }
    /**
     * Disable a select box, {@link ItemGroup item group} or {@link Item item}.
     * If it takes no arguments, a select box is disabled.
     * If it takes string, an item with the same value as the argument is disabled.
     * If it takes number, an item with the same index as the argument is disabled.
     * If it takes Item or ItemGroup, an argument itself is disabled.
     * @param {string|number|Item|ItemGroup} value - if string, find an Item by its value. if number, find an Item by its index.
     * @example
     * selectBox.disable(); // select box is disabled.
     * selectBox.disable(1); // second item is disabled.
     * selectBox.disable('value') // item which of value is 'value' is disabled.
     * selectBox.disable(selectBox.getSelectedItem()); // selected item is disabled.
     */
    ;

    _proto.disable = function disable(value) {
      if (!(0, _isExisty["default"])(value)) {
        this.disabled = true;
        this.input.disable();
        this.dropdown.disable();
        /**
         * Occurs when a select box, {@link ItemGroup item group} or {@link Item item} is disabled.
         * @event SelectBox#disable
         * @type {object} ev
         * @property {string} type - event name ('disable')
         * @property {SelectBox|ItemGroup|Item} target - disabled target
         * @example
         * selectBox.on('disable', ev => {
         *   console.log(ev.target);
         * });
         */

        this.fire('disable', {
          type: 'disable',
          target: this
        });
      } else if (value instanceof _item["default"] || value instanceof _itemGroup["default"]) {
        value.disable();
        this.fire('disable', {
          type: 'disable',
          target: value
        });
      } else {
        var disabledItem = this.dropdown.getItem(value);

        if (disabledItem) {
          disabledItem.disable();
          this.fire('disable', {
            type: 'disable',
            target: disabledItem
          });
        }
      }
    }
    /**
     * Enable a select box, {@link ItemGroup item group} or {@link Item item}.
     * If it takes no arguments, a select box is enabled.
     * If it takes string, an item with the same value as the argument is enabled.
     * If it takes number, an item with the same index as the argument is enabled.
     * If it takes Item or ItemGroup, an argument itself is enabled.
     * @param {string|number|Item|ItemGroup} value - if string, find an Item by its value. if number, find an Item by its index.
     * @example
     * selectBox.enable(); // select box is enabled.
     * selectBox.enable(1); // second item is enabled.
     * selectBox.enable('value') // item which of value is 'value' is enabled.
     * selectBox.enable(selectBox.getSelectedItem()); // selected item is enabled.
     */
    ;

    _proto.enable = function enable(value) {
      if (!(0, _isExisty["default"])(value)) {
        this.disabled = false;
        this.input.enable();
        this.dropdown.enable();
        /**
         * Occurs when a select box, {@link ItemGroup item group} or {@link Item item} is enabled.
         * @event SelectBox#enable
         * @type {object} ev
         * @property {string} type - event name ('enable')
         * @property {SelectBox|ItemGroup|Item} target - enable target
         * @example
         * selectBox.on('enable', ev => {
         *   console.log(ev.target);
         * });
         */

        this.fire('enable', {
          type: 'enable',
          target: this
        });
      } else if (value instanceof _item["default"] || value instanceof _itemGroup["default"]) {
        value.enable();
        this.fire('enable', {
          type: 'enable',
          target: value
        });
      } else {
        var disabledItem = this.dropdown.getItem(value);

        if (disabledItem) {
          disabledItem.enable();
          this.fire('enable', {
            type: 'enable',
            target: disabledItem
          });
        }
      }
    }
    /**
     * Open a dropdown list.
     * @example
     * selectBox.open();
     */
    ;

    _proto.open = function open() {
      if (!this.disabled) {
        this.opened = true;
        this.dropdown.open();
        this.input.open();
        /**
         * Occurs when a select box opens.
         * @event SelectBox#open
         * @property {string} type - event name ('open')
         * @example
         * selectBox.on('open', ev => {
         *   console.log('open');
         * });
         */

        this.fire('open', {
          type: 'open'
        });
      }
    }
    /**
     * Close a dropdown list.
     * @example
     * selectBox.close();
     */
    ;

    _proto.close = function close() {
      this.opened = false;
      this.dropdown.close();
      this.input.close();
      /**
       * Occurs when a select box closes.
       * @event SelectBox#close
       * @property {string} type - event name ('close')
       * @example
       * selectBox.on('close', ev => {
       *   console.log('close');
       * });
       */

      this.fire('close', {
        type: 'close'
      });
    }
    /**
     * Toggle a dropdown list.
     * @example
     * selectBox.toggle();
     */
    ;

    _proto.toggle = function toggle() {
      if (this.opened) {
        this.close();
      } else {
        this.open();
      }
    }
    /**
     * Focus to select box.
     * @example
     * selectBox.focus();
     */
    ;

    _proto.focus = function focus() {
      this.input.focus();
    }
    /**
     * Select an {@link Item item}.
     * If it takes string, an item with the same value as the argument is selected.
     * If it takes number, an item with the same index as the argument is selected.
     * If it takes Item, an argument itself is selected.
     * @param {string|number|Item} value - if string, find an Item by its value. if number, find an Item by its index.
     * @return {Item} - selected Item.
     * @example
     * selectBox.select(1); // second item is selected.
     * selectBox.select('value') // item which of value is 'value' is selected.
     */
    ;

    _proto.select = function select(value) {
      var selectedItem = null;
      var prevSelectedItem = this.getSelectedItem();

      if (!this.disabled) {
        selectedItem = this.dropdown.select(value);

        if (selectedItem) {
          this.input.changeText(selectedItem);
          /**
           * Occurs when an {@link Item item} is selected.
           * @event SelectBox#select
           * @type {object} ev
           * @property {string} type - event name ('select')
           * @property {Item} target - selected item
           * @ignore
           * @example
           * selectBox.on('select', ev => {
           *   console.log(`${ev.target.getLabel()} is selected.`);
           * });
           */

          this.fire('select', {
            type: 'select',
            target: selectedItem
          });

          if (prevSelectedItem !== selectedItem) {
            /**
             * Occurs when a selected {@link Item item} is changed.
             * @event SelectBox#change
             * @type {object} ev
             * @property {string} type - event name ('change')
             * @property {Item} prev - previous selected item
             * @property {Item} curr - current selected item
             * @example
             * selectBox.on('change', ev => {
             *   console.log(`selected item is changed from ${ev.prev.getLabel()} to ${ev.curr.getLabel()}.`);
             * });
             */
            this.fire('change', {
              type: 'change',
              prev: prevSelectedItem,
              curr: selectedItem
            });
          }

          if (this.autoclose && this.opened) {
            this.close();
          }
        }
      }

      return selectedItem;
    }
    /**
     * Deselect an item.
     * If selectBox has a placeholder, the input's text is a placeholder.
     * If no placeholder, ths input is empty.
     * @example
     * selectBox.deselect();
     */
    ;

    _proto.deselect = function deselect() {
      if (!this.disabled) {
        this.dropdown.deselect();
        this.input.changeText();
      }
    }
    /**
     * Return the selected {@link Item item}.
     * @return {Item}
     */
    ;

    _proto.getSelectedItem = function getSelectedItem() {
      return this.dropdown.getSelectedItem();
    }
    /**
     * Get all {@link Item items} that pass the test implemented by the provided function.
     * If filter function is not passed, it returns all items.
     * @param {function} callback - callback function to filter items
     * @param {number} number - the number of items to find. If it is not passed, iterate all items.
     * @return {array<Item>}
     * @example
     * selectBox.getItems(); // all items
     * selectBox.getItems(item => {
     *  return !item.isDisabled();
     * }); // all enabled items
     */
    ;

    _proto.getItems = function getItems(callback, number) {
      return this.dropdown.getItems(callback, number);
    }
    /**
     * Get an {@link Item item} by its index or value.
     * @param {number|string} value - if string, the Item's value. if number, the Item's index.
     * @return {Item}
     * @example
     * selectBox.getItem(0); // first item
     * selectBox.getItem('value') // item which of value is 'value'
     */
    ;

    _proto.getItem = function getItem(value) {
      return this.dropdown.getItem(value);
    }
    /**
     * Get all {@link ItemGroup item groups} that pass the test implemented by the provided function.
     * If filter function is not passed, it returns all item groups.
     * @param {function} callback - callback function to filter item groups
     * @param {number} number - the number of items to find. If it is not passed, iterate all item groups.
     * @return {array<ItemGroup>}
     * @example
     * selectBox.getItemGroups(); // all item groups
     * selectBox.getItemGroups(itemGroup => {
     *  return !itemGroup.isDisabled();
     * }); // all enabled item groups
     */
    ;

    _proto.getItemGroups = function getItemGroups(callback, number) {
      return this.dropdown.getItemGroups(callback, number);
    }
    /**
     * Get an {@link ItemGroup item group} by its index.
     * @param {number} index - groupIndex of the ItemGroup
     * @return {ItemGroup}
     * @example
     * selectBox.getItemGroup(0); // first item group
     */
    ;

    _proto.getItemGroup = function getItemGroup(index) {
      return this.dropdown.getItemGroup(index);
    }
    /**
     * Destory a select box.
     * @example
     * selectBox.destroy();
     */
    ;

    _proto.destroy = function destroy() {
      this.unbindEvents();
      this.input.destroy();
      this.dropdown.destroy();

      if (this.theme) {
        this.theme.destroy();
      }

      (0, _removeElement["default"])(this.el);
      this.container = this.el = this.input = this.dropdown = this.theme = null;
    };

    return SelectBox;
  }();

  _customEvents["default"].mixin(SelectBox);

  var _default = SelectBox;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! tui-code-snippet/collection/forEachOwnProperties */ "./node_modules/tui-code-snippet/collection/forEachOwnProperties.js"), __webpack_require__(/*! tui-code-snippet/domUtil/removeElement */ "./node_modules/tui-code-snippet/domUtil/removeElement.js"), __webpack_require__(/*! tui-code-snippet/type/isArray */ "./node_modules/tui-code-snippet/type/isArray.js"), __webpack_require__(/*! tui-code-snippet/type/isBoolean */ "./node_modules/tui-code-snippet/type/isBoolean.js"), __webpack_require__(/*! tui-code-snippet/type/isString */ "./node_modules/tui-code-snippet/type/isString.js"), __webpack_require__(/*! ./utils */ "./src/js/utils.js"), __webpack_require__(/*! ./constants */ "./src/js/constants.js"), __webpack_require__(/*! ./themeConfig */ "./src/js/themeConfig.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _forEachOwnProperties, _removeElement, _isArray, _isBoolean, _isString, _utils, _constants, _themeConfig) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _forEachOwnProperties = _interopRequireDefault(_forEachOwnProperties);
  _removeElement = _interopRequireDefault(_removeElement);
  _isArray = _interopRequireDefault(_isArray);
  _isBoolean = _interopRequireDefault(_isBoolean);
  _isString = _interopRequireDefault(_isString);
  _themeConfig = _interopRequireDefault(_themeConfig);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  /**
   * @class
   * @ignore
   * @param {object} customTheme - theme object for custom style
   * @param {HTMLElement|string} container - container element or selector
   */
  var Theme = /*#__PURE__*/function () {
    function Theme(customTheme, container) {
      this.containerSelector = (0, _utils.getSelector)(container);
      this.cssString = this.buildAll((0, _utils.transform)(customTheme));
      this.styleEl = this.createStyleElement();
      document.getElementsByTagName('head')[0].appendChild(this.styleEl);
    }
    /**
     * Create a style element
     * @return {HTMLElement}
     * @private
     */


    var _proto = Theme.prototype;

    _proto.createStyleElement = function createStyleElement() {
      var styleEl = document.createElement('style');
      styleEl.type = 'text/css';

      if (styleEl.styleSheet) {
        styleEl.styleSheet.cssText = this.cssString;
      } else {
        styleEl.appendChild(document.createTextNode(this.cssString));
      }

      return styleEl;
    }
    /**
     * Build css strings for Input, Dropdown, ItemGroup, and Item.
     * @param {object} theme - theme object
     * @return {string}
     * @private
     */
    ;

    _proto.buildAll = function buildAll(theme) {
      var exclude = {
        border: '',
        background: ''
      };
      return this.buildInput(_objectSpread(_objectSpread({}, theme.common), theme.input)) + this.buildDropdown(_objectSpread(_objectSpread(_objectSpread({}, theme.common), {}, {
        borderTop: '0'
      }, theme.dropdown), {}, {
        height: ''
      })) + this.buildItemGroup(theme.itemGroup ? _objectSpread(_objectSpread(_objectSpread({}, theme.common), exclude), theme.itemGroup.label) : _objectSpread(_objectSpread({}, theme.common), exclude)) + this.buildItem(theme.itemGroup ? _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, theme.common), exclude), theme.item), {}, {
        inItemGroup: theme.itemGroup.items
      }) : _objectSpread(_objectSpread(_objectSpread({}, theme.common), exclude), theme.item));
    }
    /**
     * Build css strings for Input
     * @param {object} theme - theme object
     * @return {string}
     * @private
     */
    ;

    _proto.buildInput = function buildInput(theme) {
      theme.placeholder = {};

      if (theme.height) {
        theme.placeholder.lineHeight = theme.height;
      }

      if ((0, _isBoolean["default"])(theme.showIcon) && !theme.showIcon) {
        theme.icon = {
          display: 'none'
        };
        theme.placeholder.width = '100%';
      }

      return this.buildCssString(_constants.cls.INPUT, theme) + this.buildCssString([_constants.cls.INPUT, _constants.cls.OPEN], theme.open) + this.buildCssString([_constants.cls.INPUT, _constants.cls.DISABLED], theme.disabled) + this.buildCssString(_constants.cls.PLACEHOLDER, theme.placeholder) + this.buildCssString(_constants.cls.ICON, theme.icon);
    }
    /**
     * Build css strings for Dropdown
     * @param {object} theme - theme object
     * @return {string}
     * @private
     */
    ;

    _proto.buildDropdown = function buildDropdown(theme) {
      return this.buildCssString(_constants.cls.DROPDOWN, theme);
    }
    /**
     * Build css strings for ItemGroup
     * @param {object} theme - theme object
     * @return {string}
     * @private
     */
    ;

    _proto.buildItemGroup = function buildItemGroup(theme) {
      if (theme.height) {
        theme.lineHeight = theme.height;
      }

      return this.buildCssString(_constants.cls.ITEM_GROUP_LABEL, theme) + this.buildCssString([_constants.cls.ITEM_GROUP_LABEL, _constants.cls.DISABLED], theme.disabled);
    }
    /**
     * Build css strings for Item
     * @param {object} theme - theme object
     * @return {string}
     * @private
     */
    ;

    _proto.buildItem = function buildItem(theme) {
      if (theme.height) {
        theme.lineHeight = theme.height;
      }

      if (theme.selected) {
        var base = (0, _utils.transform)(_themeConfig["default"]);
        theme.selected = _objectSpread(_objectSpread({}, base.item.selected), theme.selected);
        theme.disabled = _objectSpread(_objectSpread({}, base.item.disabled), theme.disabled);
        theme.highlighted = _objectSpread(_objectSpread({}, base.item.highlighted), theme.highlighted);
      }

      return this.buildCssString(_constants.cls.ITEM, theme) + this.buildCssString([_constants.cls.ITEM, _constants.cls.SELECTED], theme.selected) + this.buildCssString([_constants.cls.ITEM, _constants.cls.DISABLED], theme.disabled) + this.buildCssString([_constants.cls.ITEM, _constants.cls.HIGHLIGHT], theme.highlighted) + this.buildCssString(_constants.cls.ITEM_GROUP + ">." + _constants.cls.ITEM, theme.inItemGroup);
    }
    /**
     * Build css strings
     * @param {string} className - className
     * @param {object} theme - theme object
     * @return {string}
     * @private
     */
    ;

    _proto.buildCssString = function buildCssString(className, theme) {
      if ((0, _isArray["default"])(className)) {
        className = className.join('.');
      }

      className = "." + className;
      var cssString = '';
      (0, _forEachOwnProperties["default"])(theme, function (value, key) {
        if ((0, _isString["default"])(value) && value) {
          key = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
          cssString += key + ":" + value + ";";
        }
      });
      return cssString ? this.containerSelector + " " + className + "{" + cssString + "}" : '';
    }
    /**
     * Destory a theme
     */
    ;

    _proto.destroy = function destroy() {
      (0, _removeElement["default"])(this.styleEl);
      this.styleEl = null;
    };

    return Theme;
  }();

  _exports["default"] = Theme;
});

/***/ }),

/***/ "./src/js/themeConfig.js":
/*!*******************************!*\
  !*** ./src/js/themeConfig.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;

  /**
   * @fileoverview Theme configuration
   */

  /**
   * Theme configuration.
   * "common" prefix is for the entire select box. Its properties are overriden by "input", "dropdown", "itemGroup", and "item".
   * The example using theme can be found {@link tutorial-example02-theme here}.
   * @typedef {object} themeConfig
   * @example
   * const themeConfig = {
   *   'common.border': '1px solid #ddd', // border for input and dropdown (not itemGroup and item)
   *   'common.background': '#fff',
   *   'common.color': '#333',
   *   'common.width': '100%',
   *   'common.height': '29px', // height for item and itemGroup label (not entire select box)
   *
   *   'common.disabled.background': '#f9f9f9',
   *   'common.disabled.color': 'c8c8c8',
   *
   *   // Input
   *   'input.border': '1px solid #ddd',
   *   'input.borderBottom': '',
   *   'input.background': 'inherit',
   *   'input.color': '#333',
   *   'input.width': '100%',
   *   'input.height': '29px',
   *
   *   // Input when dropdown is open
   *   'input.open.border': '1px solid #aaa',
   *   'input.open.background': 'inherit',
   *   'input.open.color': '#333',
   *
   *   // Input when selectbox is disabled
   *   'input.disabled.border': '1px solid #aaa',
   *   'input.disabled.background': '#f9f9f9',
   *   'input.disabled.color': '#c8c8c8',
   *
   *   // Dropdown
   *   'dropdown.border': '1px solid #aaa',
   *   'dropdown.borderTop': '0',
   *   'dropdown.background': 'inherit',
   *   'dropdown.width': '100%',
   *   'dropdown.maxHeight': '',
   *
   *   // ItemGroup's items
   *   // if you want to set the same padding value as the itemGroup.label, set to '8px'.
   *   'itemGroup.items.paddingLeft': '20px',
   *
   *   // ItemGroup's label
   *   'itemGroup.label.border': '0',
   *   'itemGroup.label.background': 'inherit',
   *   'itemGroup.label.color': '#333',
   *   'itemGroup.label.fontWeight': 'bold',
   *   'itemGroup.label.height': '29px',
   *
   *   // disabled ItemGroup's label
   *   'itemGroup.label.disabled.border': '0',
   *   'itemGroup.label.disabled.background': 'inherit',
   *   'itemGroup.label.disabled.color': '#333',
   *
   *   // Item
   *   'item.border': '0',
   *   'item.background': 'inherit',
   *   'item.color': '#333',
   *   'item.height': '29px',
   *
   *   // selected Item
   *   'item.selected.border': '0',
   *   'item.selected.background': '#f4f4f4',
   *   'item.selected.color': '#333',
   *
   *   // disabled Item
   *   'item.disabled.border': '0',
   *   'item.disabled.background': '#f9f9f9',
   *   'item.disabled.color': '#c8c8c8',
   *
   *   // highlighted Item
   *   'item.highlighted.border': '0',
   *   'item.highlighted.background': '#e5f6ff',
   *   'item.highlighted.color': '#333'
   * };
   */
  var _default = {
    'common.border': '1px solid #ddd',
    // border for input and dropdown (not itemGroup and item)
    'common.background': '#fff',
    'common.color': '#333',
    'common.width': '100%',
    'common.height': '29px',
    // height for item and itemGroup label (not entire select box)
    'common.disabled.background': '#f9f9f9',
    'common.disabled.color': 'c8c8c8',
    // Input
    'input.border': '1px solid #ddd',
    'input.borderBottom': '',
    'input.background': 'inherit',
    'input.color': '#333',
    'input.width': '100%',
    'input.height': '29px',
    // Input when dropdown is open
    'input.open.border': '1px solid #aaa',
    'input.open.background': 'inherit',
    'input.open.color': '#333',
    // Input when selectbox is disabled
    'input.disabled.border': '1px solid #aaa',
    'input.disabled.background': '#f9f9f9',
    'input.disabled.color': '#c8c8c8',
    // Dropdown
    'dropdown.border': '1px solid #aaa',
    'dropdown.borderTop': '0',
    'dropdown.background': 'inherit',
    'dropdown.width': '100%',
    'dropdown.maxHeight': '',
    // ItemGroup's items
    'itemGroup.items.paddingLeft': '20px',
    // ItemGroup's label
    'itemGroup.label.border': '0',
    'itemGroup.label.background': 'inherit',
    'itemGroup.label.color': '#333',
    'itemGroup.label.fontWeight': 'bold',
    'itemGroup.label.height': '29px',
    // disabled ItemGroup's label
    'itemGroup.label.disabled.border': '0',
    'itemGroup.label.disabled.background': 'inherit',
    'itemGroup.label.disabled.color': '#333',
    // Item
    'item.border': '0',
    'item.background': 'inherit',
    'item.color': '#333',
    'item.height': '29px',
    // selected Item
    'item.selected.border': '0',
    'item.selected.background': '#f4f4f4',
    'item.selected.color': '#333',
    // disabled Item
    'item.disabled.border': '0',
    'item.disabled.background': '#f9f9f9',
    'item.disabled.color': '#c8c8c8',
    // highlighted Item
    'item.highlighted.border': '0',
    'item.highlighted.background': '#e5f6ff',
    'item.highlighted.color': '#333'
  };
  _exports["default"] = _default;
});

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! tui-code-snippet/collection/forEachOwnProperties */ "./node_modules/tui-code-snippet/collection/forEachOwnProperties.js"), __webpack_require__(/*! tui-code-snippet/type/isString */ "./node_modules/tui-code-snippet/type/isString.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _forEachOwnProperties, _isString) {
  "use strict";

  _exports.__esModule = true;
  _exports.getSelector = _exports.createElement = _exports.transform = void 0;
  _forEachOwnProperties = _interopRequireDefault(_forEachOwnProperties);
  _isString = _interopRequireDefault(_isString);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * @fileoverview Utility functions
   */

  /**
   * Transform an object using dot notation
   * @param {object} obj - object to transform
   * @return {object}
   */
  var transform = function transform(obj) {
    var result = {};
    (0, _forEachOwnProperties["default"])(obj, function (value, prop) {
      var keys = prop.split('.');
      var curr = result;
      keys.forEach(function (key, index) {
        if (index === keys.length - 1) {
          curr[key] = value;
        } else if (!curr[key]) {
          curr[key] = {};
        }

        curr = curr[key];
      });
    });
    return result;
  };
  /**
   * Create a HTML element
   * @param {string} tagName - tag name
   * @param {string} content - content in the element
   * @param {object} options - other properties for the element
   * @param {HTMLElement} container - parent element for the element
   * @return {HTMLElement}
   */


  _exports.transform = transform;

  var createElement = function createElement(tagName, content, options, container) {
    var el = document.createElement(tagName);

    if (content) {
      el.textContent = content;
    }

    (0, _forEachOwnProperties["default"])(options, function (value, key) {
      if (key.indexOf('data-') > -1) {
        el.setAttribute(key, value);
      } else {
        el[key] = value;
      }
    });

    if (container) {
      container.appendChild(el);
    }

    return el;
  };
  /**
   * Get selectors for an element
   * @param {HTMLElement} el - element
   * @return {string}
   */


  _exports.createElement = createElement;

  var getSelector = function getSelector(el) {
    if ((0, _isString["default"])(el)) {
      return el;
    }

    if (el.id) {
      return "#" + el.id;
    }

    var className = "." + el.className.replace(/\s+/g, '.');

    if (className) {
      var elems = document.querySelectorAll(className);

      if (elems.length === 1) {
        return className;
      }
    }

    var tagName = el.tagName.toLowerCase();
    return "" + tagName + className;
  };

  _exports.getSelector = getSelector;
});

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9hcnJheS9pbkFycmF5LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2guanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vZm9yRWFjaEFycmF5LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL3RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2N1c3RvbUV2ZW50cy9jdXN0b21FdmVudHMuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L19zYWZlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvb2ZmLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9kb21FdmVudC9vbi5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvcHJldmVudERlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvX3NldENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9jbG9zZXN0LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9kb21VdGlsL2dldENsYXNzLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9kb21VdGlsL21hdGNoZXMuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvb2JqZWN0L2V4dGVuZC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvcmVxdWVzdC9pbWFnZVBpbmcuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3JlcXVlc3Qvc2VuZEhvc3RuYW1lLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC90eXBlL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNCb29sZWFuLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC90eXBlL2lzRXhpc3R5LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC90eXBlL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNIVE1MTm9kZS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc051bGwuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9jc3Mvc2VsZWN0Qm94LmNzcz83ZWJkIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL2lucHV0LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvaXRlbS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL2l0ZW1Hcm91cC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL2tleUV2ZW50VXRpbHMuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9qcy9zZWxlY3RCb3guanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL3RoZW1lQ29uZmlnLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOlsiQ1NTX1BSRUZJWCIsImNsYXNzTmFtZXMiLCJTRUxFQ1RfQk9YIiwiSVRFTSIsIklURU1fR1JPVVAiLCJJVEVNX0dST1VQX0xBQkVMIiwiRFJPUERPV04iLCJJTlBVVCIsIlBMQUNFSE9MREVSIiwiSUNPTiIsIk9QRU4iLCJISURERU4iLCJESVNBQkxFRCIsIlNFTEVDVEVEIiwiSElHSExJR0hUIiwiY2xzIiwidmFsdWUiLCJrZXkiLCJEcm9wZG93biIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImRpc2FibGVkIiwiZWwiLCJjbGFzc05hbWUiLCJuYXRpdmVFbCIsInRhYkluZGV4IiwiaXRlbXMiLCJpdGVtTGVuZ3RoIiwic2VsZWN0ZWRJdGVtIiwiaGlnaGxpZ2h0ZWRJdGVtIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVJdGVtcyIsIml0ZW0iLCJpdGVtSW5kZXgiLCJpdGVtR3JvdXBJbmRleCIsImZvckVhY2giLCJkYXR1bSIsIkl0ZW1Hcm91cCIsImluZGV4IiwibGVuZ3RoIiwiSXRlbSIsInB1c2giLCJhcHBlbmRUb0NvbnRhaW5lciIsImxhYmVsIiwiaXRlcmF0ZUl0ZW1zIiwiaXNTZWxlY3RlZCIsImRlc2VsZWN0IiwiZGlzYWJsZSIsImNhbGxiYWNrIiwiYXJncyIsInJlc3VsdCIsImdldEl0ZW1zIiwiaXRlbUluR3JvdXAiLCJhcHBseSIsIm9wZW4iLCJpc0Rpc2FibGVkIiwiaGlnaGxpZ2h0IiwiY2xvc2UiLCJkZWhpZ2hsaWdodCIsImVuYWJsZSIsInNlbGVjdCIsImdldEl0ZW0iLCJtb3ZlSGlnaGxpZ2h0ZWRJdGVtIiwiZGlyZWN0aW9uIiwiZ2V0SGlnaGxpZ2h0ZWRJdGVtIiwiaW5kZXhPZiIsImdldEl0ZW1JbmRleCIsIm51bWJlciIsImlzVmFsaWRJdGVtIiwiY29tcGFyZWRJdGVtIiwiZ2V0SW5kZXgiLCJnZXRWYWx1ZSIsImdldEl0ZW1Hcm91cHMiLCJpdGVtR3JvdXBzIiwiaXRlbUdyb3VwIiwiZ2V0SXRlbUdyb3VwIiwiZ2V0SXRlbUxlbmd0aCIsImdldFNlbGVjdGVkSXRlbSIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiZGVzdHJveSIsIlNlbGVjdEJveCIsIklucHV0Iiwic2hvd0ljb24iLCJwbGFjZWhvbGRlclRleHQiLCJwbGFjZWhvbGRlckVsIiwid2lkdGgiLCJmb2N1cyIsImNoYW5nZVRleHQiLCJ0ZXh0Q29udGVudCIsImdldExhYmVsIiwic2VsZWN0ZWQiLCJpdGVtR3JvdXBEaXNhYmxlZCIsIml0ZW1EaXNhYmxlZCIsIm1ha2VEaXNhYmxlIiwibWFrZUVuYWJsZSIsImRpc2FibGVJdGVtR3JvdXAiLCJlbmFibGVJdGVtR3JvdXAiLCJibHVyIiwibmF0aXZlQ29udGFpbmVyIiwibGFiZWxFbCIsIml0ZW1Db250YWluZXJFbCIsImNyZWF0ZUl0ZW1zIiwibWFwIiwia2V5Q29kZU1hcCIsImtleU1hcCIsIkFycm93VXAiLCJVcCIsIkFycm93RG93biIsIkRvd24iLCJTcGFjZWJhciIsIkVudGVyIiwiRXNjYXBlIiwiRXNjIiwiVGFiIiwiaWRlbnRpZnlLZXkiLCJldiIsImtleUNvZGUiLCJhdXRvZm9jdXMiLCJhdXRvY2xvc2UiLCJ0aGVtZSIsInVzYWdlU3RhdGlzdGljcyIsImlucHV0IiwiZHJvcGRvd24iLCJvcGVuZWQiLCJkaWFibGVkIiwiVGhlbWUiLCJjb250YWluZXJFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9wdGlvbnMiLCJiaW5kRXZlbnRzIiwidGFyZ2V0IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVNb3VzZW92ZXIiLCJoYW5kbGVLZXlkb3duIiwidW5iaW5kRXZlbnRzIiwiaXRlbUVsIiwiZ2V0QXR0cmlidXRlIiwidG9nZ2xlIiwiY2hlY2tNb3VzZW1vdmUiLCJjbGllbnRYIiwiY2xpZW50WSIsIngiLCJ5IiwicHJldlgiLCJwcmV2WSIsImNsb3NlS2V5cyIsImFjdGl2ZUtleXMiLCJhY3RpdmF0ZUtleWRvd24iLCJwcmVzc0tleU9uSXRlbSIsInByZXNzS2V5T25JbnB1dCIsInNlbGVjdEJ5S2V5ZG93biIsImZpcmUiLCJ0eXBlIiwiZGlzYWJsZWRJdGVtIiwicHJldlNlbGVjdGVkSXRlbSIsInByZXYiLCJjdXJyIiwiQ3VzdG9tRXZlbnRzIiwibWl4aW4iLCJjdXN0b21UaGVtZSIsImNvbnRhaW5lclNlbGVjdG9yIiwiY3NzU3RyaW5nIiwiYnVpbGRBbGwiLCJzdHlsZUVsIiwiY3JlYXRlU3R5bGVFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImV4Y2x1ZGUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiYnVpbGRJbnB1dCIsImNvbW1vbiIsImJ1aWxkRHJvcGRvd24iLCJib3JkZXJUb3AiLCJoZWlnaHQiLCJidWlsZEl0ZW1Hcm91cCIsImJ1aWxkSXRlbSIsImluSXRlbUdyb3VwIiwibGluZUhlaWdodCIsImljb24iLCJkaXNwbGF5IiwiYnVpbGRDc3NTdHJpbmciLCJiYXNlIiwiYmFzZVRoZW1lIiwiaGlnaGxpZ2h0ZWQiLCJqb2luIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwidHJhbnNmb3JtIiwib2JqIiwicHJvcCIsImtleXMiLCJzcGxpdCIsInRhZ05hbWUiLCJjb250ZW50Iiwic2V0QXR0cmlidXRlIiwiZ2V0U2VsZWN0b3IiLCJpZCIsImVsZW1zIiwicXVlcnlTZWxlY3RvckFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxHQUFHOztRQUVIO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxrQkFBa0IsOEJBQThCO1FBQ2hEO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLG9CQUFvQiwyQkFBMkI7UUFDL0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0EsbUJBQW1CLGNBQWM7UUFDakM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQixLQUFLO1FBQ3JCO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLFlBQVk7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxjQUFjLDRCQUE0QjtRQUMxQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7O1FBRUo7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7UUFDQSxlQUFlLDRCQUE0QjtRQUMzQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsdUNBQXVDO1FBQ3hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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QUFFLENBQUNnTCxPQUFILENBQVdOLFdBQVgsRUFBaEI7QUFFQSxnQkFBVU0sT0FBVixHQUFvQi9LLFNBQXBCO0FBQ0QsR0FyQk0iLCJmaWxlIjoidG9hc3R1aS1zZWxlY3QtYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU2VsZWN0Qm94XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInR1aVwiXSA9IHJvb3RbXCJ0dWlcIl0gfHwge30sIHJvb3RbXCJ0dWlcIl1bXCJTZWxlY3RCb3hcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjlmM2YyNThmMWU2ZDdkZTBmZGFmXCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcbiBcdFx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG4gXHRcdFx0XHRzd2l0Y2ggKGhvdFN0YXR1cykge1xuIFx0XHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG4gXHRcdFx0XHRcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcbiBcdFx0XHRcdFx0XHQoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID1cbiBcdFx0XHRcdFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoLCBob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gXCJtYWluXCI7XG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiBcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucyk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykge1xuIFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdCFtb2R1bGUgfHxcbiBcdFx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuIFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4gXHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG4gXHRcdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuIFx0XHRcdFx0IWluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkludmFsaWRhdGVkXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdHBhcmVudHM6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLnBhcmVudHMuc2xpY2UoKSxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aWYgKGhvdFVwZGF0ZU5ld0hhc2ggIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdW5kZWZpbmVkO1xuIFx0XHR9XG4gXHRcdGhvdFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gaXRlbS5wYXJlbnRzO1xuIFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IG1vZHVsZUlkO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykudGhlbihmdW5jdGlvbihsaXN0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuIFx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHJldHVybiBsaXN0O1xuIFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdGlmICghaG90VXBkYXRlKSBob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG4gXHRcdFx0cmV0dXJuIHRydWU7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIG1vZHVsZUlkKSlcbiBcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3RcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKFwiLi9zcmMvanMvaW5kZXguanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBSZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBhdCB3aGljaCBhIGdpdmVuIGVsZW1lbnQgY2FuIGJlIGZvdW5kIGluIHRoZSBhcnJheS5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi90eXBlL2lzQXJyYXknKTtcblxuLyoqXG4gKiBAbW9kdWxlIGFycmF5XG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBhdCB3aGljaCBhIGdpdmVuIGVsZW1lbnQgY2FuIGJlIGZvdW5kIGluIHRoZSBhcnJheVxuICogZnJvbSBzdGFydCBpbmRleChkZWZhdWx0IDApLCBvciAtMSBpZiBpdCBpcyBub3QgcHJlc2VudC5cbiAqIEl0IGNvbXBhcmVzIHNlYXJjaEVsZW1lbnQgdG8gZWxlbWVudHMgb2YgdGhlIEFycmF5IHVzaW5nIHN0cmljdCBlcXVhbGl0eVxuICogKHRoZSBzYW1lIG1ldGhvZCB1c2VkIGJ5IHRoZSA9PT0sIG9yIHRyaXBsZS1lcXVhbHMsIG9wZXJhdG9yKS5cbiAqIEBwYXJhbSB7Kn0gc2VhcmNoRWxlbWVudCBFbGVtZW50IHRvIGxvY2F0ZSBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHRoYXQgd2lsbCBiZSB0cmF2ZXJzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnRJbmRleCBTdGFydCBpbmRleCBpbiBhcnJheSBmb3Igc2VhcmNoaW5nIChkZWZhdWx0IDApXG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgRmlyc3QgaW5kZXggYXQgd2hpY2ggYSBnaXZlbiBlbGVtZW50LCBvciAtMSBpZiBpdCBpcyBub3QgcHJlc2VudFxuICogQG1lbWJlcm9mIG1vZHVsZTphcnJheVxuICogQGV4YW1wbGVcbiAqIHZhciBpbkFycmF5ID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9hcnJheS9pbkFycmF5Jyk7IC8vIG5vZGUsIGNvbW1vbmpzXG4gKlxuICogdmFyIGFyciA9IFsnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJ107XG4gKiB2YXIgaWR4MSA9IGluQXJyYXkoJ29uZScsIGFyciwgMyk7IC8vIC0xXG4gKiB2YXIgaWR4MiA9IGluQXJyYXkoJ29uZScsIGFycik7IC8vIDBcbiAqL1xuZnVuY3Rpb24gaW5BcnJheShzZWFyY2hFbGVtZW50LCBhcnJheSwgc3RhcnRJbmRleCkge1xuICB2YXIgaTtcbiAgdmFyIGxlbmd0aDtcbiAgc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXggfHwgMDtcblxuICBpZiAoIWlzQXJyYXkoYXJyYXkpKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYXJyYXksIHNlYXJjaEVsZW1lbnQsIHN0YXJ0SW5kZXgpO1xuICB9XG5cbiAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICBmb3IgKGkgPSBzdGFydEluZGV4OyBzdGFydEluZGV4ID49IDAgJiYgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSBzZWFyY2hFbGVtZW50KSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5BcnJheTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBFeGVjdXRlIHRoZSBwcm92aWRlZCBjYWxsYmFjayBvbmNlIGZvciBlYWNoIHByb3BlcnR5IG9mIG9iamVjdChvciBlbGVtZW50IG9mIGFycmF5KSB3aGljaCBhY3R1YWxseSBleGlzdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi90eXBlL2lzQXJyYXknKTtcbnZhciBmb3JFYWNoQXJyYXkgPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL2ZvckVhY2hBcnJheScpO1xudmFyIGZvckVhY2hPd25Qcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoT3duUHJvcGVydGllcycpO1xuXG4vKipcbiAqIEBtb2R1bGUgY29sbGVjdGlvblxuICovXG5cbi8qKlxuICogRXhlY3V0ZSB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgb25jZSBmb3IgZWFjaCBwcm9wZXJ0eSBvZiBvYmplY3Qob3IgZWxlbWVudCBvZiBhcnJheSkgd2hpY2ggYWN0dWFsbHkgZXhpc3QuXG4gKiBJZiB0aGUgb2JqZWN0IGlzIEFycmF5LWxpa2Ugb2JqZWN0KGV4LWFyZ3VtZW50cyBvYmplY3QpLCBJdCBuZWVkcyB0byB0cmFuc2Zvcm0gdG8gQXJyYXkuKHNlZSAnZXgyJyBvZiBleGFtcGxlKS5cbiAqIElmIHRoZSBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGZhbHNlLCB0aGUgbG9vcCB3aWxsIGJlIHN0b3BwZWQuXG4gKiBDYWxsYmFjayBmdW5jdGlvbihpdGVyYXRlZSkgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAqICAxKSBUaGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5KG9yIFRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudClcbiAqICAyKSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkob3IgVGhlIGluZGV4IG9mIHRoZSBlbGVtZW50KVxuICogIDMpIFRoZSBvYmplY3QgYmVpbmcgdHJhdmVyc2VkXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHRyYXZlcnNlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaXRlcmF0ZWUgQ2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gQ29udGV4dCh0aGlzKSBvZiBjYWxsYmFjayBmdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogdmFyIGZvckVhY2ggPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vZm9yRWFjaCcpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIHZhciBzdW0gPSAwO1xuICpcbiAqIGZvckVhY2goWzEsMiwzXSwgZnVuY3Rpb24odmFsdWUpe1xuICogICAgIHN1bSArPSB2YWx1ZTtcbiAqIH0pO1xuICogYWxlcnQoc3VtKTsgLy8gNlxuICpcbiAqIC8vIEluIGNhc2Ugb2YgQXJyYXktbGlrZSBvYmplY3RcbiAqIHZhciBhcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5TGlrZSk7IC8vIGNoYW5nZSB0byBhcnJheVxuICogZm9yRWFjaChhcnJheSwgZnVuY3Rpb24odmFsdWUpe1xuICogICAgIHN1bSArPSB2YWx1ZTtcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIGZvckVhY2hBcnJheShvYmosIGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBmb3JFYWNoT3duUHJvcGVydGllcyhvYmosIGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2g7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgRXhlY3V0ZSB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5KG9yIEFycmF5LWxpa2Ugb2JqZWN0KSBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRXhlY3V0ZSB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnRcbiAqIGluIHRoZSBhcnJheShvciBBcnJheS1saWtlIG9iamVjdCkgaW4gYXNjZW5kaW5nIG9yZGVyLlxuICogSWYgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgZmFsc2UsIHRoZSBsb29wIHdpbGwgYmUgc3RvcHBlZC5cbiAqIENhbGxiYWNrIGZ1bmN0aW9uKGl0ZXJhdGVlKSBpcyBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICogIDEpIFRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudFxuICogIDIpIFRoZSBpbmRleCBvZiB0aGUgZWxlbWVudFxuICogIDMpIFRoZSBhcnJheShvciBBcnJheS1saWtlIG9iamVjdCkgYmVpbmcgdHJhdmVyc2VkXG4gKiBAcGFyYW0ge0FycmF5fEFyZ3VtZW50c3xOb2RlTGlzdH0gYXJyIFRoZSBhcnJheShvciBBcnJheS1saWtlIG9iamVjdCkgdGhhdCB3aWxsIGJlIHRyYXZlcnNlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaXRlcmF0ZWUgQ2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gQ29udGV4dCh0aGlzKSBvZiBjYWxsYmFjayBmdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogdmFyIGZvckVhY2hBcnJheSA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvY29sbGVjdGlvbi9mb3JFYWNoQXJyYXknKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiB2YXIgc3VtID0gMDtcbiAqXG4gKiBmb3JFYWNoQXJyYXkoWzEsMiwzXSwgZnVuY3Rpb24odmFsdWUpe1xuICogICAgIHN1bSArPSB2YWx1ZTtcbiAqIH0pO1xuICogYWxlcnQoc3VtKTsgLy8gNlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQXJyYXkoYXJyLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcblxuICBjb250ZXh0ID0gY29udGV4dCB8fCBudWxsO1xuXG4gIGZvciAoOyBpbmRleCA8IGxlbjsgaW5kZXggKz0gMSkge1xuICAgIGlmIChpdGVyYXRlZS5jYWxsKGNvbnRleHQsIGFycltpbmRleF0sIGluZGV4LCBhcnIpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaEFycmF5O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEV4ZWN1dGUgdGhlIHByb3ZpZGVkIGNhbGxiYWNrIG9uY2UgZm9yIGVhY2ggcHJvcGVydHkgb2Ygb2JqZWN0IHdoaWNoIGFjdHVhbGx5IGV4aXN0LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEV4ZWN1dGUgdGhlIHByb3ZpZGVkIGNhbGxiYWNrIG9uY2UgZm9yIGVhY2ggcHJvcGVydHkgb2Ygb2JqZWN0IHdoaWNoIGFjdHVhbGx5IGV4aXN0LlxuICogSWYgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgZmFsc2UsIHRoZSBsb29wIHdpbGwgYmUgc3RvcHBlZC5cbiAqIENhbGxiYWNrIGZ1bmN0aW9uKGl0ZXJhdGVlKSBpcyBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICogIDEpIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqICAyKSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqICAzKSBUaGUgb2JqZWN0IGJlaW5nIHRyYXZlcnNlZFxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRoYXQgd2lsbCBiZSB0cmF2ZXJzZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGl0ZXJhdGVlICBDYWxsYmFjayBmdW5jdGlvblxuICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XSBDb250ZXh0KHRoaXMpIG9mIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbGxlY3Rpb25cbiAqIEBleGFtcGxlXG4gKiB2YXIgZm9yRWFjaE93blByb3BlcnRpZXMgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vZm9yRWFjaE93blByb3BlcnRpZXMnKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiB2YXIgc3VtID0gMDtcbiAqXG4gKiBmb3JFYWNoT3duUHJvcGVydGllcyh7YToxLGI6MixjOjN9LCBmdW5jdGlvbih2YWx1ZSl7XG4gKiAgICAgc3VtICs9IHZhbHVlO1xuICogfSk7XG4gKiBhbGVydChzdW0pOyAvLyA2XG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hPd25Qcm9wZXJ0aWVzKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgdmFyIGtleTtcblxuICBjb250ZXh0ID0gY29udGV4dCB8fCBudWxsO1xuXG4gIGZvciAoa2V5IGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKGl0ZXJhdGVlLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaE93blByb3BlcnRpZXM7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVHJhbnNmb3JtIHRoZSBBcnJheS1saWtlIG9iamVjdCB0byBBcnJheS5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGZvckVhY2hBcnJheSA9IHJlcXVpcmUoJy4vZm9yRWFjaEFycmF5Jyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBBcnJheS1saWtlIG9iamVjdCB0byBBcnJheS5cbiAqIEluIGxvdyBJRSAoYmVsb3cgOCksIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsIGlzIG5vdCBwZXJmZWN0LiBTbywgdHJ5LWNhdGNoIHN0YXRlbWVudCBpcyB1c2VkLlxuICogQHBhcmFtIHsqfSBhcnJheUxpa2UgQXJyYXktbGlrZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXlcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqIHZhciB0b0FycmF5ID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL3RvQXJyYXknKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiB2YXIgYXJyYXlMaWtlID0ge1xuICogICAgIDA6ICdvbmUnLFxuICogICAgIDE6ICd0d28nLFxuICogICAgIDI6ICd0aHJlZScsXG4gKiAgICAgMzogJ2ZvdXInLFxuICogICAgIGxlbmd0aDogNFxuICogfTtcbiAqIHZhciByZXN1bHQgPSB0b0FycmF5KGFycmF5TGlrZSk7XG4gKlxuICogYWxlcnQocmVzdWx0IGluc3RhbmNlb2YgQXJyYXkpOyAvLyB0cnVlXG4gKiBhbGVydChyZXN1bHQpOyAvLyBvbmUsdHdvLHRocmVlLGZvdXJcbiAqL1xuZnVuY3Rpb24gdG9BcnJheShhcnJheUxpa2UpIHtcbiAgdmFyIGFycjtcbiAgdHJ5IHtcbiAgICBhcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgYXJyID0gW107XG4gICAgZm9yRWFjaEFycmF5KGFycmF5TGlrZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGFyci5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9BcnJheTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGlzIG1vZHVsZSBwcm92aWRlcyBzb21lIGZ1bmN0aW9ucyBmb3IgY3VzdG9tIGV2ZW50cy4gQW5kIGl0IGlzIGltcGxlbWVudGVkIGluIHRoZSBvYnNlcnZlciBkZXNpZ24gcGF0dGVybi5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4dGVuZCA9IHJlcXVpcmUoJy4uL29iamVjdC9leHRlbmQnKTtcbnZhciBpc0V4aXN0eSA9IHJlcXVpcmUoJy4uL3R5cGUvaXNFeGlzdHknKTtcbnZhciBpc1N0cmluZyA9IHJlcXVpcmUoJy4uL3R5cGUvaXNTdHJpbmcnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL3R5cGUvaXNPYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vdHlwZS9pc0FycmF5Jyk7XG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL3R5cGUvaXNGdW5jdGlvbicpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL2ZvckVhY2gnKTtcblxudmFyIFJfRVZFTlROQU1FX1NQTElUID0gL1xccysvZztcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBleGFtcGxlXG4gKiAvLyBub2RlLCBjb21tb25qc1xuICogdmFyIEN1c3RvbUV2ZW50cyA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvY3VzdG9tRXZlbnRzL2N1c3RvbUV2ZW50cycpO1xuICovXG5mdW5jdGlvbiBDdXN0b21FdmVudHMoKSB7XG4gIC8qKlxuICAgICAqIEB0eXBlIHtIYW5kbGVySXRlbVtdfVxuICAgICAqL1xuICB0aGlzLmV2ZW50cyA9IG51bGw7XG5cbiAgLyoqXG4gICAgICogb25seSBmb3IgY2hlY2tpbmcgc3BlY2lmaWMgY29udGV4dCBldmVudCB3YXMgYmluZGVkXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqL1xuICB0aGlzLmNvbnRleHRzID0gbnVsbDtcbn1cblxuLyoqXG4gKiBNaXhpbiBjdXN0b20gZXZlbnRzIGZlYXR1cmUgdG8gc3BlY2lmaWMgY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgLSBjb25zdHJ1Y3RvclxuICogQGV4YW1wbGVcbiAqIHZhciBDdXN0b21FdmVudHMgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2N1c3RvbUV2ZW50cy9jdXN0b21FdmVudHMnKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiB2YXIgbW9kZWw7XG4gKiBmdW5jdGlvbiBNb2RlbCgpIHtcbiAqICAgICB0aGlzLm5hbWUgPSAnJztcbiAqIH1cbiAqIEN1c3RvbUV2ZW50cy5taXhpbihNb2RlbCk7XG4gKlxuICogbW9kZWwgPSBuZXcgTW9kZWwoKTtcbiAqIG1vZGVsLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgdGhpcy5uYW1lID0gJ21vZGVsJzsgfSwgdGhpcyk7XG4gKiBtb2RlbC5maXJlKCdjaGFuZ2UnKTtcbiAqIGFsZXJ0KG1vZGVsLm5hbWUpOyAvLyAnbW9kZWwnO1xuICovXG5DdXN0b21FdmVudHMubWl4aW4gPSBmdW5jdGlvbihmdW5jKSB7XG4gIGV4dGVuZChmdW5jLnByb3RvdHlwZSwgQ3VzdG9tRXZlbnRzLnByb3RvdHlwZSk7XG59O1xuXG4vKipcbiAqIEdldCBIYW5kbGVySXRlbSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdIC0gY29udGV4dCBmb3IgaGFuZGxlclxuICogQHJldHVybnMge0hhbmRsZXJJdGVtfSBIYW5kbGVySXRlbSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX2dldEhhbmRsZXJJdGVtID0gZnVuY3Rpb24oaGFuZGxlciwgY29udGV4dCkge1xuICB2YXIgaXRlbSA9IHtoYW5kbGVyOiBoYW5kbGVyfTtcblxuICBpZiAoY29udGV4dCkge1xuICAgIGl0ZW0uY29udGV4dCA9IGNvbnRleHQ7XG4gIH1cblxuICByZXR1cm4gaXRlbTtcbn07XG5cbi8qKlxuICogR2V0IGV2ZW50IG9iamVjdCBzYWZlbHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZXZlbnROYW1lXSAtIGNyZWF0ZSBzdWIgZXZlbnQgbWFwIGlmIG5vdCBleGlzdC5cbiAqIEByZXR1cm5zIHsob2JqZWN0fGFycmF5KX0gZXZlbnQgb2JqZWN0LiBpZiB5b3Ugc3VwcGxpZWQgYGV2ZW50TmFtZWBcbiAqICBwYXJhbWV0ZXIgdGhlbiBtYWtlIG5ldyBhcnJheSBhbmQgcmV0dXJuIGl0XG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9zYWZlRXZlbnQgPSBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuZXZlbnRzO1xuICB2YXIgYnlOYW1lO1xuXG4gIGlmICghZXZlbnRzKSB7XG4gICAgZXZlbnRzID0gdGhpcy5ldmVudHMgPSB7fTtcbiAgfVxuXG4gIGlmIChldmVudE5hbWUpIHtcbiAgICBieU5hbWUgPSBldmVudHNbZXZlbnROYW1lXTtcblxuICAgIGlmICghYnlOYW1lKSB7XG4gICAgICBieU5hbWUgPSBbXTtcbiAgICAgIGV2ZW50c1tldmVudE5hbWVdID0gYnlOYW1lO1xuICAgIH1cblxuICAgIGV2ZW50cyA9IGJ5TmFtZTtcbiAgfVxuXG4gIHJldHVybiBldmVudHM7XG59O1xuXG4vKipcbiAqIEdldCBjb250ZXh0IGFycmF5IHNhZmVseVxuICogQHJldHVybnMge2FycmF5fSBjb250ZXh0IGFycmF5XG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9zYWZlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dHM7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IHRoaXMuY29udGV4dHMgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuLyoqXG4gKiBHZXQgaW5kZXggb2YgY29udGV4dFxuICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIGNvbnRleHQgdGhhdCB1c2VkIGZvciBiaW5kIGN1c3RvbSBldmVudFxuICogQHJldHVybnMge251bWJlcn0gaW5kZXggb2YgY29udGV4dFxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5faW5kZXhPZkNvbnRleHQgPSBmdW5jdGlvbihjdHgpIHtcbiAgdmFyIGNvbnRleHQgPSB0aGlzLl9zYWZlQ29udGV4dCgpO1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIHdoaWxlIChjb250ZXh0W2luZGV4XSkge1xuICAgIGlmIChjdHggPT09IGNvbnRleHRbaW5kZXhdWzBdKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgaW5kZXggKz0gMTtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn07XG5cbi8qKlxuICogTWVtb3JpemUgc3VwcGxpZWQgY29udGV4dCBmb3IgcmVjb2duaXplIHN1cHBsaWVkIG9iamVjdCBpcyBjb250ZXh0IG9yXG4gKiAgbmFtZTogaGFuZGxlciBwYWlyIG9iamVjdCB3aGVuIG9mZigpXG4gKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gY29udGV4dCBvYmplY3QgdG8gbWVtb3JpemVcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX21lbW9yaXplQ29udGV4dCA9IGZ1bmN0aW9uKGN0eCkge1xuICB2YXIgY29udGV4dCwgaW5kZXg7XG5cbiAgaWYgKCFpc0V4aXN0eShjdHgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29udGV4dCA9IHRoaXMuX3NhZmVDb250ZXh0KCk7XG4gIGluZGV4ID0gdGhpcy5faW5kZXhPZkNvbnRleHQoY3R4KTtcblxuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIGNvbnRleHRbaW5kZXhdWzFdICs9IDE7XG4gIH0gZWxzZSB7XG4gICAgY29udGV4dC5wdXNoKFtjdHgsIDFdKTtcbiAgfVxufTtcblxuLyoqXG4gKiBGb3JnZXQgc3VwcGxpZWQgY29udGV4dCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBjdHggLSBjb250ZXh0IG9iamVjdCB0byBmb3JnZXRcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX2ZvcmdldENvbnRleHQgPSBmdW5jdGlvbihjdHgpIHtcbiAgdmFyIGNvbnRleHQsIGNvbnRleHRJbmRleDtcblxuICBpZiAoIWlzRXhpc3R5KGN0eCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb250ZXh0ID0gdGhpcy5fc2FmZUNvbnRleHQoKTtcbiAgY29udGV4dEluZGV4ID0gdGhpcy5faW5kZXhPZkNvbnRleHQoY3R4KTtcblxuICBpZiAoY29udGV4dEluZGV4ID4gLTEpIHtcbiAgICBjb250ZXh0W2NvbnRleHRJbmRleF1bMV0gLT0gMTtcblxuICAgIGlmIChjb250ZXh0W2NvbnRleHRJbmRleF1bMV0gPD0gMCkge1xuICAgICAgY29udGV4dC5zcGxpY2UoY29udGV4dEluZGV4LCAxKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQmluZCBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0geyhzdHJpbmd8e25hbWU6c3RyaW5nLCBoYW5kbGVyOmZ1bmN0aW9ufSl9IGV2ZW50TmFtZSAtIGN1c3RvbVxuICogIGV2ZW50IG5hbWUgb3IgYW4gb2JqZWN0IHtldmVudE5hbWU6IGhhbmRsZXJ9XG4gKiBAcGFyYW0geyhmdW5jdGlvbnxvYmplY3QpfSBbaGFuZGxlcl0gLSBoYW5kbGVyIGZ1bmN0aW9uIG9yIGNvbnRleHRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF0gLSBjb250ZXh0IGZvciBiaW5kaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9iaW5kRXZlbnQgPSBmdW5jdGlvbihldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX3NhZmVFdmVudChldmVudE5hbWUpO1xuICB0aGlzLl9tZW1vcml6ZUNvbnRleHQoY29udGV4dCk7XG4gIGV2ZW50cy5wdXNoKHRoaXMuX2dldEhhbmRsZXJJdGVtKGhhbmRsZXIsIGNvbnRleHQpKTtcbn07XG5cbi8qKlxuICogQmluZCBldmVudCBoYW5kbGVyc1xuICogQHBhcmFtIHsoc3RyaW5nfHtuYW1lOnN0cmluZywgaGFuZGxlcjpmdW5jdGlvbn0pfSBldmVudE5hbWUgLSBjdXN0b21cbiAqICBldmVudCBuYW1lIG9yIGFuIG9iamVjdCB7ZXZlbnROYW1lOiBoYW5kbGVyfVxuICogQHBhcmFtIHsoZnVuY3Rpb258b2JqZWN0KX0gW2hhbmRsZXJdIC0gaGFuZGxlciBmdW5jdGlvbiBvciBjb250ZXh0XG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdIC0gY29udGV4dCBmb3IgYmluZGluZ1xuICogLy8tLSAjMS4gR2V0IE1vZHVsZSAtLS8vXG4gKiB2YXIgQ3VzdG9tRXZlbnRzID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9jdXN0b21FdmVudHMvY3VzdG9tRXZlbnRzJyk7IC8vIG5vZGUsIGNvbW1vbmpzXG4gKlxuICogLy8tLSAjMi4gVXNlIG1ldGhvZCAtLS8vXG4gKiAvLyAjIDIuMSBCYXNpYyBVc2FnZVxuICogQ3VzdG9tRXZlbnRzLm9uKCdvbmxvYWQnLCBoYW5kbGVyKTtcbiAqXG4gKiAvLyAjIDIuMiBXaXRoIGNvbnRleHRcbiAqIEN1c3RvbUV2ZW50cy5vbignb25sb2FkJywgaGFuZGxlciwgbXlPYmopO1xuICpcbiAqIC8vICMgMi4zIEJpbmQgYnkgb2JqZWN0IHRoYXQgbmFtZSwgaGFuZGxlciBwYWlyc1xuICogQ3VzdG9tRXZlbnRzLm9uKHtcbiAqICAgICAncGxheSc6IGhhbmRsZXIsXG4gKiAgICAgJ3BhdXNlJzogaGFuZGxlcjJcbiAqIH0pO1xuICpcbiAqIC8vICMgMi40IEJpbmQgYnkgb2JqZWN0IHRoYXQgbmFtZSwgaGFuZGxlciBwYWlycyB3aXRoIGNvbnRleHQgb2JqZWN0XG4gKiBDdXN0b21FdmVudHMub24oe1xuICogICAgICdwbGF5JzogaGFuZGxlclxuICogfSwgbXlPYmopO1xuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoaXNTdHJpbmcoZXZlbnROYW1lKSkge1xuICAgIC8vIFtzeW50YXggMSwgMl1cbiAgICBldmVudE5hbWUgPSBldmVudE5hbWUuc3BsaXQoUl9FVkVOVE5BTUVfU1BMSVQpO1xuICAgIGZvckVhY2goZXZlbnROYW1lLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBzZWxmLl9iaW5kRXZlbnQobmFtZSwgaGFuZGxlciwgY29udGV4dCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoZXZlbnROYW1lKSkge1xuICAgIC8vIFtzeW50YXggMywgNF1cbiAgICBjb250ZXh0ID0gaGFuZGxlcjtcbiAgICBmb3JFYWNoKGV2ZW50TmFtZSwgZnVuY3Rpb24oZnVuYywgbmFtZSkge1xuICAgICAgc2VsZi5vbihuYW1lLCBmdW5jLCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBCaW5kIG9uZS1zaG90IGV2ZW50IGhhbmRsZXJzXG4gKiBAcGFyYW0geyhzdHJpbmd8e25hbWU6c3RyaW5nLGhhbmRsZXI6ZnVuY3Rpb259KX0gZXZlbnROYW1lIC0gY3VzdG9tXG4gKiAgZXZlbnQgbmFtZSBvciBhbiBvYmplY3Qge2V2ZW50TmFtZTogaGFuZGxlcn1cbiAqIEBwYXJhbSB7ZnVuY3Rpb258b2JqZWN0fSBbaGFuZGxlcl0gLSBoYW5kbGVyIGZ1bmN0aW9uIG9yIGNvbnRleHRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF0gLSBjb250ZXh0IGZvciBiaW5kaW5nXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKGlzT2JqZWN0KGV2ZW50TmFtZSkpIHtcbiAgICBjb250ZXh0ID0gaGFuZGxlcjtcbiAgICBmb3JFYWNoKGV2ZW50TmFtZSwgZnVuY3Rpb24oZnVuYywgbmFtZSkge1xuICAgICAgc2VsZi5vbmNlKG5hbWUsIGZ1bmMsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZnVuY3Rpb24gb25jZUhhbmRsZXIoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVxdWlyZS1qc2RvY1xuICAgIGhhbmRsZXIuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICBzZWxmLm9mZihldmVudE5hbWUsIG9uY2VIYW5kbGVyLCBjb250ZXh0KTtcbiAgfVxuXG4gIHRoaXMub24oZXZlbnROYW1lLCBvbmNlSGFuZGxlciwgY29udGV4dCk7XG59O1xuXG4vKipcbiAqIFNwbGljZSBzdXBwbGllZCBhcnJheSBieSBjYWxsYmFjayByZXN1bHRcbiAqIEBwYXJhbSB7YXJyYXl9IGFyciAtIGFycmF5IHRvIHNwbGljZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gcHJlZGljYXRlIC0gZnVuY3Rpb24gcmV0dXJuIGJvb2xlYW5cbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX3NwbGljZU1hdGNoZXMgPSBmdW5jdGlvbihhcnIsIHByZWRpY2F0ZSkge1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW47XG5cbiAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyW2ldKSA9PT0gdHJ1ZSkge1xuICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgIGxlbiAtPSAxO1xuICAgICAgaSAtPSAxO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgbWF0Y2hlciBmb3IgdW5iaW5kIHNwZWNpZmljIGhhbmRsZXIgZXZlbnRzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gaGFuZGxlciBmdW5jdGlvblxuICogQHJldHVybnMge2Z1bmN0aW9ufSBoYW5kbGVyIG1hdGNoZXJcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX21hdGNoSGFuZGxlciA9IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHJldHVybiBmdW5jdGlvbihpdGVtKSB7XG4gICAgdmFyIG5lZWRSZW1vdmUgPSBoYW5kbGVyID09PSBpdGVtLmhhbmRsZXI7XG5cbiAgICBpZiAobmVlZFJlbW92ZSkge1xuICAgICAgc2VsZi5fZm9yZ2V0Q29udGV4dChpdGVtLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZWVkUmVtb3ZlO1xuICB9O1xufTtcblxuLyoqXG4gKiBHZXQgbWF0Y2hlciBmb3IgdW5iaW5kIHNwZWNpZmljIGNvbnRleHQgZXZlbnRzXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIGNvbnRleHRcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gb2JqZWN0IG1hdGNoZXJcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX21hdGNoQ29udGV4dCA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHJldHVybiBmdW5jdGlvbihpdGVtKSB7XG4gICAgdmFyIG5lZWRSZW1vdmUgPSBjb250ZXh0ID09PSBpdGVtLmNvbnRleHQ7XG5cbiAgICBpZiAobmVlZFJlbW92ZSkge1xuICAgICAgc2VsZi5fZm9yZ2V0Q29udGV4dChpdGVtLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZWVkUmVtb3ZlO1xuICB9O1xufTtcblxuLyoqXG4gKiBHZXQgbWF0Y2hlciBmb3IgdW5iaW5kIHNwZWNpZmljIGhhbmRlciwgY29udGV4dCBwYWlyIGV2ZW50c1xuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gY29udGV4dFxuICogQHJldHVybnMge2Z1bmN0aW9ufSBoYW5kbGVyLCBjb250ZXh0IG1hdGNoZXJcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX21hdGNoSGFuZGxlckFuZENvbnRleHQgPSBmdW5jdGlvbihoYW5kbGVyLCBjb250ZXh0KSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICByZXR1cm4gZnVuY3Rpb24oaXRlbSkge1xuICAgIHZhciBtYXRjaEhhbmRsZXIgPSAoaGFuZGxlciA9PT0gaXRlbS5oYW5kbGVyKTtcbiAgICB2YXIgbWF0Y2hDb250ZXh0ID0gKGNvbnRleHQgPT09IGl0ZW0uY29udGV4dCk7XG4gICAgdmFyIG5lZWRSZW1vdmUgPSAobWF0Y2hIYW5kbGVyICYmIG1hdGNoQ29udGV4dCk7XG5cbiAgICBpZiAobmVlZFJlbW92ZSkge1xuICAgICAgc2VsZi5fZm9yZ2V0Q29udGV4dChpdGVtLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZWVkUmVtb3ZlO1xuICB9O1xufTtcblxuLyoqXG4gKiBVbmJpbmQgZXZlbnQgYnkgZXZlbnQgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIGN1c3RvbSBldmVudCBuYW1lIHRvIHVuYmluZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXJdIC0gaGFuZGxlciBmdW5jdGlvblxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fb2ZmQnlFdmVudE5hbWUgPSBmdW5jdGlvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgYW5kQnlIYW5kbGVyID0gaXNGdW5jdGlvbihoYW5kbGVyKTtcbiAgdmFyIG1hdGNoSGFuZGxlciA9IHNlbGYuX21hdGNoSGFuZGxlcihoYW5kbGVyKTtcblxuICBldmVudE5hbWUgPSBldmVudE5hbWUuc3BsaXQoUl9FVkVOVE5BTUVfU1BMSVQpO1xuXG4gIGZvckVhY2goZXZlbnROYW1lLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGhhbmRsZXJJdGVtcyA9IHNlbGYuX3NhZmVFdmVudChuYW1lKTtcblxuICAgIGlmIChhbmRCeUhhbmRsZXIpIHtcbiAgICAgIHNlbGYuX3NwbGljZU1hdGNoZXMoaGFuZGxlckl0ZW1zLCBtYXRjaEhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JFYWNoKGhhbmRsZXJJdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBzZWxmLl9mb3JnZXRDb250ZXh0KGl0ZW0uY29udGV4dCk7XG4gICAgICB9KTtcblxuICAgICAgc2VsZi5ldmVudHNbbmFtZV0gPSBbXTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBVbmJpbmQgZXZlbnQgYnkgaGFuZGxlciBmdW5jdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX29mZkJ5SGFuZGxlciA9IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgbWF0Y2hIYW5kbGVyID0gdGhpcy5fbWF0Y2hIYW5kbGVyKGhhbmRsZXIpO1xuXG4gIGZvckVhY2godGhpcy5fc2FmZUV2ZW50KCksIGZ1bmN0aW9uKGhhbmRsZXJJdGVtcykge1xuICAgIHNlbGYuX3NwbGljZU1hdGNoZXMoaGFuZGxlckl0ZW1zLCBtYXRjaEhhbmRsZXIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogVW5iaW5kIGV2ZW50IGJ5IG9iamVjdChuYW1lOiBoYW5kbGVyIHBhaXIgb2JqZWN0IG9yIGNvbnRleHQgb2JqZWN0KVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIGNvbnRleHQgb3Ige25hbWU6IGhhbmRsZXJ9IHBhaXIgb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gaGFuZGxlciBmdW5jdGlvblxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fb2ZmQnlPYmplY3QgPSBmdW5jdGlvbihvYmosIGhhbmRsZXIpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgbWF0Y2hGdW5jO1xuXG4gIGlmICh0aGlzLl9pbmRleE9mQ29udGV4dChvYmopIDwgMCkge1xuICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbihmdW5jLCBuYW1lKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBmdW5jKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhoYW5kbGVyKSkge1xuICAgIG1hdGNoRnVuYyA9IHRoaXMuX21hdGNoQ29udGV4dChvYmopO1xuXG4gICAgc2VsZi5fc3BsaWNlTWF0Y2hlcyh0aGlzLl9zYWZlRXZlbnQoaGFuZGxlciksIG1hdGNoRnVuYyk7XG4gIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIG1hdGNoRnVuYyA9IHRoaXMuX21hdGNoSGFuZGxlckFuZENvbnRleHQoaGFuZGxlciwgb2JqKTtcblxuICAgIGZvckVhY2godGhpcy5fc2FmZUV2ZW50KCksIGZ1bmN0aW9uKGhhbmRsZXJJdGVtcykge1xuICAgICAgc2VsZi5fc3BsaWNlTWF0Y2hlcyhoYW5kbGVySXRlbXMsIG1hdGNoRnVuYyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbWF0Y2hGdW5jID0gdGhpcy5fbWF0Y2hDb250ZXh0KG9iaik7XG5cbiAgICBmb3JFYWNoKHRoaXMuX3NhZmVFdmVudCgpLCBmdW5jdGlvbihoYW5kbGVySXRlbXMpIHtcbiAgICAgIHNlbGYuX3NwbGljZU1hdGNoZXMoaGFuZGxlckl0ZW1zLCBtYXRjaEZ1bmMpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIFVuYmluZCBjdXN0b20gZXZlbnRzXG4gKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0fGZ1bmN0aW9uKX0gZXZlbnROYW1lIC0gZXZlbnQgbmFtZSBvciBjb250ZXh0IG9yXG4gKiAge25hbWU6IGhhbmRsZXJ9IHBhaXIgb2JqZWN0IG9yIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBwYXJhbSB7KGZ1bmN0aW9uKX0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBleGFtcGxlXG4gKiAvLy0tICMxLiBHZXQgTW9kdWxlIC0tLy9cbiAqIHZhciBDdXN0b21FdmVudHMgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2N1c3RvbUV2ZW50cy9jdXN0b21FdmVudHMnKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiAvLy0tICMyLiBVc2UgbWV0aG9kIC0tLy9cbiAqIC8vICMgMi4xIG9mZiBieSBldmVudCBuYW1lXG4gKiBDdXN0b21FdmVudHMub2ZmKCdvbmxvYWQnKTtcbiAqXG4gKiAvLyAjIDIuMiBvZmYgYnkgZXZlbnQgbmFtZSBhbmQgaGFuZGxlclxuICogQ3VzdG9tRXZlbnRzLm9mZigncGxheScsIGhhbmRsZXIpO1xuICpcbiAqIC8vICMgMi4zIG9mZiBieSBoYW5kbGVyXG4gKiBDdXN0b21FdmVudHMub2ZmKGhhbmRsZXIpO1xuICpcbiAqIC8vICMgMi40IG9mZiBieSBjb250ZXh0XG4gKiBDdXN0b21FdmVudHMub2ZmKG15T2JqKTtcbiAqXG4gKiAvLyAjIDIuNSBvZmYgYnkgY29udGV4dCBhbmQgaGFuZGxlclxuICogQ3VzdG9tRXZlbnRzLm9mZihteU9iaiwgaGFuZGxlcik7XG4gKlxuICogLy8gIyAyLjYgb2ZmIGJ5IGNvbnRleHQgYW5kIGV2ZW50IG5hbWVcbiAqIEN1c3RvbUV2ZW50cy5vZmYobXlPYmosICdvbmxvYWQnKTtcbiAqXG4gKiAvLyAjIDIuNyBvZmYgYnkgYW4gT2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPiB0aGF0IGlzIHtldmVudE5hbWU6IGhhbmRsZXJ9XG4gKiBDdXN0b21FdmVudHMub2ZmKHtcbiAqICAgJ3BsYXknOiBoYW5kbGVyLFxuICogICAncGF1c2UnOiBoYW5kbGVyMlxuICogfSk7XG4gKlxuICogLy8gIyAyLjggb2ZmIHRoZSBhbGwgZXZlbnRzXG4gKiBDdXN0b21FdmVudHMub2ZmKCk7XG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIGlmIChpc1N0cmluZyhldmVudE5hbWUpKSB7XG4gICAgLy8gW3N5bnRheCAxLCAyXVxuICAgIHRoaXMuX29mZkJ5RXZlbnROYW1lKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gIH0gZWxzZSBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAvLyBbc3ludGF4IDhdXG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB0aGlzLmNvbnRleHRzID0gW107XG4gIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihldmVudE5hbWUpKSB7XG4gICAgLy8gW3N5bnRheCAzXVxuICAgIHRoaXMuX29mZkJ5SGFuZGxlcihldmVudE5hbWUpO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGV2ZW50TmFtZSkpIHtcbiAgICAvLyBbc3ludGF4IDQsIDUsIDZdXG4gICAgdGhpcy5fb2ZmQnlPYmplY3QoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfVxufTtcblxuLyoqXG4gKiBGaXJlIGN1c3RvbSBldmVudFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIG5hbWUgb2YgY3VzdG9tIGV2ZW50XG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSkgeyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB0aGlzLmludm9rZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBGaXJlIGEgZXZlbnQgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiBvcGVyYXRpb24gJ2Jvb2xlYW4gQU5EJyB3aXRoIGFsbFxuICogIGxpc3RlbmVyJ3MgcmVzdWx0cy5cbiAqXG4gKiBTbywgSXQgaXMgZGlmZmVyZW50IGZyb20ge0BsaW5rIEN1c3RvbUV2ZW50cyNmaXJlfS5cbiAqXG4gKiBJbiBzZXJ2aWNlIGNvZGUsIHVzZSB0aGlzIGFzIGEgYmVmb3JlIGV2ZW50IGluIGNvbXBvbmVudCBsZXZlbCB1c3VhbGx5XG4gKiAgZm9yIG5vdGlmeWluZyB0aGF0IHRoZSBldmVudCBpcyBjYW5jZWxhYmxlLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIEN1c3RvbSBldmVudCBuYW1lXG4gKiBAcGFyYW0gey4uLip9IGRhdGEgLSBEYXRhIGZvciBldmVudFxuICogQHJldHVybnMge2Jvb2xlYW59IFRoZSByZXN1bHQgb2Ygb3BlcmF0aW9uICdib29sZWFuIEFORCdcbiAqIEBleGFtcGxlXG4gKiB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICogbWFwLm9uKHtcbiAqICAgICAnYmVmb3JlWm9vbSc6IGZ1bmN0aW9uKCkge1xuICogICAgICAgICAvLyBJdCBzaG91bGQgY2FuY2VsIHRoZSAnem9vbScgZXZlbnQgYnkgc29tZSBjb25kaXRpb25zLlxuICogICAgICAgICBpZiAodGhhdC5kaXNhYmxlZCAmJiB0aGlzLmdldFN0YXRlKCkpIHtcbiAqICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAqICAgICAgICAgfVxuICogICAgICAgICByZXR1cm4gdHJ1ZTtcbiAqICAgICB9XG4gKiB9KTtcbiAqXG4gKiBpZiAodGhpcy5pbnZva2UoJ2JlZm9yZVpvb20nKSkgeyAgICAvLyBjaGVjayB0aGUgcmVzdWx0IG9mICdiZWZvcmVab29tJ1xuICogICAgIC8vIGlmIHRydWUsXG4gKiAgICAgLy8gZG9Tb21ldGhpbmdcbiAqIH1cbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgdmFyIGV2ZW50cywgYXJncywgaW5kZXgsIGl0ZW07XG5cbiAgaWYgKCF0aGlzLmhhc0xpc3RlbmVyKGV2ZW50TmFtZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGV2ZW50cyA9IHRoaXMuX3NhZmVFdmVudChldmVudE5hbWUpO1xuICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgaW5kZXggPSAwO1xuXG4gIHdoaWxlIChldmVudHNbaW5kZXhdKSB7XG4gICAgaXRlbSA9IGV2ZW50c1tpbmRleF07XG5cbiAgICBpZiAoaXRlbS5oYW5kbGVyLmFwcGx5KGl0ZW0uY29udGV4dCwgYXJncykgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaW5kZXggKz0gMTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gd2hldGhlciBhdCBsZWFzdCBvbmUgb2YgdGhlIGhhbmRsZXJzIGlzIHJlZ2lzdGVyZWQgaW4gdGhlIGdpdmVuXG4gKiAgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBDdXN0b20gZXZlbnQgbmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59IElzIHRoZXJlIGF0IGxlYXN0IG9uZSBoYW5kbGVyIGluIGV2ZW50IG5hbWU/XG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuaGFzTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0TGlzdGVuZXJMZW5ndGgoZXZlbnROYW1lKSA+IDA7XG59O1xuXG4vKipcbiAqIFJldHVybiBhIGNvdW50IG9mIGV2ZW50cyByZWdpc3RlcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIEN1c3RvbSBldmVudCBuYW1lXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBudW1iZXIgb2YgZXZlbnRcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5nZXRMaXN0ZW5lckxlbmd0aCA9IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fc2FmZUV2ZW50KGV2ZW50TmFtZSk7XG5cbiAgcmV0dXJuIGV2ZW50cy5sZW5ndGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUV2ZW50cztcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBHZXQgZXZlbnQgY29sbGVjdGlvbiBmb3Igc3BlY2lmaWMgSFRNTCBlbGVtZW50XG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFVkVOVF9LRVkgPSAnX2ZlRXZlbnRLZXknO1xuXG4vKipcbiAqIEdldCBldmVudCBjb2xsZWN0aW9uIGZvciBzcGVjaWZpYyBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgdHlwZVxuICogQHJldHVybnMge2FycmF5fVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2FmZUV2ZW50KGVsZW1lbnQsIHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IGVsZW1lbnRbRVZFTlRfS0VZXTtcbiAgdmFyIGhhbmRsZXJzO1xuXG4gIGlmICghZXZlbnRzKSB7XG4gICAgZXZlbnRzID0gZWxlbWVudFtFVkVOVF9LRVldID0ge307XG4gIH1cblxuICBoYW5kbGVycyA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKCFoYW5kbGVycykge1xuICAgIGhhbmRsZXJzID0gZXZlbnRzW3R5cGVdID0gW107XG4gIH1cblxuICByZXR1cm4gaGFuZGxlcnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2FmZUV2ZW50O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEdldCBhIHRhcmdldCBlbGVtZW50IGZyb20gYW4gZXZlbnQgb2JqZWN0LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEdldCBhIHRhcmdldCBlbGVtZW50IGZyb20gYW4gZXZlbnQgb2JqZWN0LlxuICogQHBhcmFtIHtFdmVudH0gZSAtIGV2ZW50IG9iamVjdFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIHRhcmdldCBlbGVtZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbUV2ZW50XG4gKi9cbmZ1bmN0aW9uIGdldFRhcmdldChlKSB7XG4gIHJldHVybiBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFVuYmluZCBET00gZXZlbnRzXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1N0cmluZyA9IHJlcXVpcmUoJy4uL3R5cGUvaXNTdHJpbmcnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoJyk7XG5cbnZhciBzYWZlRXZlbnQgPSByZXF1aXJlKCcuL19zYWZlRXZlbnQnKTtcblxuLyoqXG4gKiBVbmJpbmQgRE9NIGV2ZW50c1xuICogSWYgYSBoYW5kbGVyIGZ1bmN0aW9uIGlzIG5vdCBwYXNzZWQsIHJlbW92ZSBhbGwgZXZlbnRzIG9mIHRoYXQgdHlwZS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IHRvIHVuYmluZCBldmVudHNcbiAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3QpfSB0eXBlcyAtIFNwYWNlIHNwbGl0dGVkIGV2ZW50cyBuYW1lcyBvciBldmVudE5hbWU6aGFuZGxlciBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyXSAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZG9tRXZlbnRcbiAqIEBleGFtcGxlXG4gKiAvLyBGb2xsb3dpbmcgdGhlIGV4YW1wbGUgb2YgZG9tRXZlbnQjb25cbiAqIFxuICogLy8gVW5iaW5kIG9uZSBldmVudCBmcm9tIGFuIGVsZW1lbnQuXG4gKiBvZmYoZGl2LCAnY2xpY2snLCB0b2dnbGUpO1xuICogXG4gKiAvLyBVbmJpbmQgbXVsdGlwbGUgZXZlbnRzIHdpdGggYSBzYW1lIGhhbmRsZXIgZnJvbSBtdWx0aXBsZSBlbGVtZW50cyBhdCBvbmNlLlxuICogLy8gVXNlIGV2ZW50IG5hbWVzIHNwbGl0dGVkIGJ5IGEgc3BhY2UuXG4gKiBvZmYoZWxlbWVudCwgJ21vdXNlZW50ZXIgbW91c2VsZWF2ZScsIGNoYW5nZUNvbG9yKTtcbiAqIFxuICogLy8gVW5iaW5kIG11bHRpcGxlIGV2ZW50cyB3aXRoIGRpZmZlcmVudCBoYW5kbGVycyBmcm9tIGFuIGVsZW1lbnQgYXQgb25jZS5cbiAqIC8vIFVzZSBhbiBvYmplY3Qgd2hpY2ggb2Yga2V5IGlzIGFuIGV2ZW50IG5hbWUgYW5kIHZhbHVlIGlzIGEgaGFuZGxlciBmdW5jdGlvbi5cbiAqIG9mZihkaXYsIHtcbiAqICAga2V5ZG93bjogaGlnaGxpZ2h0LFxuICogICBrZXl1cDogZGVoaWdobGlnaHRcbiAqIH0pO1xuICogXG4gKiAvLyBVbmJpbmQgZXZlbnRzIHdpdGhvdXQgaGFuZGxlcnMuXG4gKiBvZmYoZGl2LCAnZHJhZycpO1xuICovXG5mdW5jdGlvbiBvZmYoZWxlbWVudCwgdHlwZXMsIGhhbmRsZXIpIHtcbiAgaWYgKGlzU3RyaW5nKHR5cGVzKSkge1xuICAgIGZvckVhY2godHlwZXMuc3BsaXQoL1xccysvZyksIGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgIHVuYmluZEV2ZW50KGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yRWFjaCh0eXBlcywgZnVuY3Rpb24oZnVuYywgdHlwZSkge1xuICAgIHVuYmluZEV2ZW50KGVsZW1lbnQsIHR5cGUsIGZ1bmMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBVbmJpbmQgRE9NIGV2ZW50c1xuICogSWYgYSBoYW5kbGVyIGZ1bmN0aW9uIGlzIG5vdCBwYXNzZWQsIHJlbW92ZSBhbGwgZXZlbnRzIG9mIHRoYXQgdHlwZS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IHRvIHVuYmluZCBldmVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gZXZlbnRzIG5hbWVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyXSAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHVuYmluZEV2ZW50KGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcbiAgdmFyIGV2ZW50cyA9IHNhZmVFdmVudChlbGVtZW50LCB0eXBlKTtcbiAgdmFyIGluZGV4O1xuXG4gIGlmICghaGFuZGxlcikge1xuICAgIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIHR5cGUsIGl0ZW0ud3JhcHBlZEhhbmRsZXIpO1xuICAgIH0pO1xuICAgIGV2ZW50cy5zcGxpY2UoMCwgZXZlbnRzLmxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgZm9yRWFjaChldmVudHMsIGZ1bmN0aW9uKGl0ZW0sIGlkeCkge1xuICAgICAgaWYgKGhhbmRsZXIgPT09IGl0ZW0uaGFuZGxlcikge1xuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIHR5cGUsIGl0ZW0ud3JhcHBlZEhhbmRsZXIpO1xuICAgICAgICBpbmRleCA9IGlkeDtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIGV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBBbiBlbGVtZW50IHRvIHJlbW92ZSBhbiBldmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBldmVudCB0eXBlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gZXZlbnQgaGFuZGxlclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICgncmVtb3ZlRXZlbnRMaXN0ZW5lcicgaW4gZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKTtcbiAgfSBlbHNlIGlmICgnZGV0YWNoRXZlbnQnIGluIGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmRldGFjaEV2ZW50KCdvbicgKyB0eXBlLCBoYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9mZjtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBCaW5kIERPTSBldmVudHNcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3RyaW5nID0gcmVxdWlyZSgnLi4vdHlwZS9pc1N0cmluZycpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL2ZvckVhY2gnKTtcblxudmFyIHNhZmVFdmVudCA9IHJlcXVpcmUoJy4vX3NhZmVFdmVudCcpO1xuXG4vKipcbiAqIEJpbmQgRE9NIGV2ZW50cy5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IHRvIGJpbmQgZXZlbnRzXG4gKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gdHlwZXMgLSBTcGFjZSBzcGxpdHRlZCBldmVudHMgbmFtZXMgb3IgZXZlbnROYW1lOmhhbmRsZXIgb2JqZWN0XG4gKiBAcGFyYW0geyhmdW5jdGlvbnxvYmplY3QpfSBoYW5kbGVyIC0gaGFuZGxlciBmdW5jdGlvbiBvciBjb250ZXh0IGZvciBoYW5kbGVyIG1ldGhvZFxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XSBjb250ZXh0IC0gY29udGV4dCBmb3IgaGFuZGxlciBtZXRob2QuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbUV2ZW50XG4gKiBAZXhhbXBsZVxuICogdmFyIGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICogXG4gKiAvLyBCaW5kIG9uZSBldmVudCB0byBhbiBlbGVtZW50LlxuICogb24oZGl2LCAnY2xpY2snLCB0b2dnbGUpO1xuICogXG4gKiAvLyBCaW5kIG11bHRpcGxlIGV2ZW50cyB3aXRoIGEgc2FtZSBoYW5kbGVyIHRvIG11bHRpcGxlIGVsZW1lbnRzIGF0IG9uY2UuXG4gKiAvLyBVc2UgZXZlbnQgbmFtZXMgc3BsaXR0ZWQgYnkgYSBzcGFjZS5cbiAqIG9uKGRpdiwgJ21vdXNlZW50ZXIgbW91c2VsZWF2ZScsIGNoYW5nZUNvbG9yKTtcbiAqIFxuICogLy8gQmluZCBtdWx0aXBsZSBldmVudHMgd2l0aCBkaWZmZXJlbnQgaGFuZGxlcnMgdG8gYW4gZWxlbWVudCBhdCBvbmNlLlxuICogLy8gVXNlIGFuIG9iamVjdCB3aGljaCBvZiBrZXkgaXMgYW4gZXZlbnQgbmFtZSBhbmQgdmFsdWUgaXMgYSBoYW5kbGVyIGZ1bmN0aW9uLlxuICogb24oZGl2LCB7XG4gKiAgIGtleWRvd246IGhpZ2hsaWdodCxcbiAqICAga2V5dXA6IGRlaGlnaGxpZ2h0XG4gKiB9KTtcbiAqIFxuICogLy8gU2V0IGEgY29udGV4dCBmb3IgaGFuZGxlciBtZXRob2QuXG4gKiB2YXIgbmFtZSA9ICdnbG9iYWwnO1xuICogdmFyIHJlcG9zaXRvcnkgPSB7bmFtZTogJ0NvZGVTbmlwcGV0J307XG4gKiBvbihkaXYsICdkcmFnJywgZnVuY3Rpb24oKSB7XG4gKiAgY29uc29sZS5sb2codGhpcy5uYW1lKTtcbiAqIH0sIHJlcG9zaXRvcnkpO1xuICogLy8gUmVzdWx0IHdoZW4geW91IGRyYWcgYSBkaXY6IFwiQ29kZVNuaXBwZXRcIlxuICovXG5mdW5jdGlvbiBvbihlbGVtZW50LCB0eXBlcywgaGFuZGxlciwgY29udGV4dCkge1xuICBpZiAoaXNTdHJpbmcodHlwZXMpKSB7XG4gICAgZm9yRWFjaCh0eXBlcy5zcGxpdCgvXFxzKy9nKSwgZnVuY3Rpb24odHlwZSkge1xuICAgICAgYmluZEV2ZW50KGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yRWFjaCh0eXBlcywgZnVuY3Rpb24oZnVuYywgdHlwZSkge1xuICAgIGJpbmRFdmVudChlbGVtZW50LCB0eXBlLCBmdW5jLCBoYW5kbGVyKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQmluZCBET00gZXZlbnRzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kIGV2ZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBldmVudHMgbmFtZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb24gb3IgY29udGV4dCBmb3IgaGFuZGxlciBtZXRob2RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF0gY29udGV4dCAtIGNvbnRleHQgZm9yIGhhbmRsZXIgbWV0aG9kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYmluZEV2ZW50KGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBldmVudCBvYmplY3RcbiAgICAgKi9cbiAgZnVuY3Rpb24gZXZlbnRIYW5kbGVyKGUpIHtcbiAgICBoYW5kbGVyLmNhbGwoY29udGV4dCB8fCBlbGVtZW50LCBlIHx8IHdpbmRvdy5ldmVudCk7XG4gIH1cblxuICBpZiAoJ2FkZEV2ZW50TGlzdGVuZXInIGluIGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZXZlbnRIYW5kbGVyKTtcbiAgfSBlbHNlIGlmICgnYXR0YWNoRXZlbnQnIGluIGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmF0dGFjaEV2ZW50KCdvbicgKyB0eXBlLCBldmVudEhhbmRsZXIpO1xuICB9XG4gIG1lbW9yaXplSGFuZGxlcihlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBldmVudEhhbmRsZXIpO1xufVxuXG4vKipcbiAqIE1lbW9yaXplIERPTSBldmVudCBoYW5kbGVyIGZvciB1bmJpbmRpbmcuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kIGV2ZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBldmVudHMgbmFtZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb24gdGhhdCB1c2VyIHBhc3NlZCBhdCBvbigpIHVzZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlZEhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uIHRoYXQgd3JhcHBlZCBieSBkb21ldmVudCBmb3IgaW1wbGVtZW50aW5nIHNvbWUgZmVhdHVyZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1lbW9yaXplSGFuZGxlcihlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCB3cmFwcGVkSGFuZGxlcikge1xuICB2YXIgZXZlbnRzID0gc2FmZUV2ZW50KGVsZW1lbnQsIHR5cGUpO1xuICB2YXIgZXhpc3RJbkV2ZW50cyA9IGZhbHNlO1xuXG4gIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqLmhhbmRsZXIgPT09IGhhbmRsZXIpIHtcbiAgICAgIGV4aXN0SW5FdmVudHMgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIGlmICghZXhpc3RJbkV2ZW50cykge1xuICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICB3cmFwcGVkSGFuZGxlcjogd3JhcHBlZEhhbmRsZXJcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9uO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFByZXZlbnQgZGVmYXVsdCBhY3Rpb25cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBQcmV2ZW50IGRlZmF1bHQgYWN0aW9uXG4gKiBAcGFyYW0ge0V2ZW50fSBlIC0gZXZlbnQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbUV2ZW50XG4gKi9cbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJldmVudERlZmF1bHQ7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgU2V0IGNsYXNzTmFtZSB2YWx1ZVxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL3R5cGUvaXNBcnJheScpO1xudmFyIGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vdHlwZS9pc1VuZGVmaW5lZCcpO1xuXG4vKipcbiAqIFNldCBjbGFzc05hbWUgdmFsdWVcbiAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fFNWR0VsZW1lbnQpfSBlbGVtZW50IC0gdGFyZ2V0IGVsZW1lbnRcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNzc0NsYXNzIC0gY2xhc3MgbmFtZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldENsYXNzTmFtZShlbGVtZW50LCBjc3NDbGFzcykge1xuICBjc3NDbGFzcyA9IGlzQXJyYXkoY3NzQ2xhc3MpID8gY3NzQ2xhc3Muam9pbignICcpIDogY3NzQ2xhc3M7XG5cbiAgY3NzQ2xhc3MgPSBjc3NDbGFzcy5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xuXG4gIGlmIChpc1VuZGVmaW5lZChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ2xhc3M7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsID0gY3NzQ2xhc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2xhc3NOYW1lO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEFkZCBjc3MgY2xhc3MgdG8gZWxlbWVudFxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb24vZm9yRWFjaCcpO1xudmFyIGluQXJyYXkgPSByZXF1aXJlKCcuLi9hcnJheS9pbkFycmF5Jyk7XG52YXIgZ2V0Q2xhc3MgPSByZXF1aXJlKCcuL2dldENsYXNzJyk7XG52YXIgc2V0Q2xhc3NOYW1lID0gcmVxdWlyZSgnLi9fc2V0Q2xhc3NOYW1lJyk7XG5cbi8qKlxuICogZG9tVXRpbCBtb2R1bGVcbiAqIEBtb2R1bGUgZG9tVXRpbFxuICovXG5cbi8qKlxuICogQWRkIGNzcyBjbGFzcyB0byBlbGVtZW50XG4gKiBAcGFyYW0geyhIVE1MRWxlbWVudHxTVkdFbGVtZW50KX0gZWxlbWVudCAtIHRhcmdldCBlbGVtZW50XG4gKiBAcGFyYW0gey4uLnN0cmluZ30gY3NzQ2xhc3MgLSBjc3MgY2xhc3NlcyB0byBhZGRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZG9tVXRpbFxuICovXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50KSB7XG4gIHZhciBjc3NDbGFzcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHZhciBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgdmFyIG5ld0NsYXNzID0gW107XG4gIHZhciBvcmlnaW47XG5cbiAgaWYgKGNsYXNzTGlzdCkge1xuICAgIGZvckVhY2goY3NzQ2xhc3MsIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgICB9KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIG9yaWdpbiA9IGdldENsYXNzKGVsZW1lbnQpO1xuXG4gIGlmIChvcmlnaW4pIHtcbiAgICBjc3NDbGFzcyA9IFtdLmNvbmNhdChvcmlnaW4uc3BsaXQoL1xccysvKSwgY3NzQ2xhc3MpO1xuICB9XG5cbiAgZm9yRWFjaChjc3NDbGFzcywgZnVuY3Rpb24oY2xzKSB7XG4gICAgaWYgKGluQXJyYXkoY2xzLCBuZXdDbGFzcykgPCAwKSB7XG4gICAgICBuZXdDbGFzcy5wdXNoKGNscyk7XG4gICAgfVxuICB9KTtcblxuICBzZXRDbGFzc05hbWUoZWxlbWVudCwgbmV3Q2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZENsYXNzO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEZpbmQgcGFyZW50IGVsZW1lbnQgcmVjdXJzaXZlbHlcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIG1hdGNoZXMgPSByZXF1aXJlKCcuL21hdGNoZXMnKTtcblxuLyoqXG4gKiBGaW5kIHBhcmVudCBlbGVtZW50IHJlY3Vyc2l2ZWx5XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gYmFzZSBlbGVtZW50IHRvIHN0YXJ0IGZpbmRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIHNlbGVjdG9yIHN0cmluZyBmb3IgZmluZFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIGVsZW1lbnQgZmluZGVkIG9yIG51bGxcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZG9tVXRpbFxuICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIHZhciBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgaWYgKG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB3aGlsZSAocGFyZW50ICYmIHBhcmVudCAhPT0gZG9jdW1lbnQpIHtcbiAgICBpZiAobWF0Y2hlcyhwYXJlbnQsIHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb3Nlc3Q7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgR2V0IEhUTUwgZWxlbWVudCdzIGRlc2lnbiBjbGFzc2VzLlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNVbmRlZmluZWQgPSByZXF1aXJlKCcuLi90eXBlL2lzVW5kZWZpbmVkJyk7XG5cbi8qKlxuICogR2V0IEhUTUwgZWxlbWVudCdzIGRlc2lnbiBjbGFzc2VzLlxuICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8U1ZHRWxlbWVudCl9IGVsZW1lbnQgdGFyZ2V0IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGVsZW1lbnQgY3NzIGNsYXNzIG5hbWVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZG9tVXRpbFxuICovXG5mdW5jdGlvbiBnZXRDbGFzcyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5jbGFzc05hbWUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoaXNVbmRlZmluZWQoZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRDbGFzcztcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayBlbGVtZW50IG1hdGNoIHNlbGVjdG9yXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpbkFycmF5ID0gcmVxdWlyZSgnLi4vYXJyYXkvaW5BcnJheScpO1xudmFyIHRvQXJyYXkgPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL3RvQXJyYXknKTtcblxudmFyIGVsUHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcbnZhciBtYXRjaFNlbGVjdG9yID0gZWxQcm90by5tYXRjaGVzIHx8XG4gICAgZWxQcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBlbFByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIGVsUHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgdmFyIGRvYyA9IHRoaXMuZG9jdW1lbnQgfHwgdGhpcy5vd25lckRvY3VtZW50O1xuXG4gICAgICByZXR1cm4gaW5BcnJheSh0aGlzLCB0b0FycmF5KGRvYy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpID4gLTE7XG4gICAgfTtcblxuLyoqXG4gKiBDaGVjayBlbGVtZW50IG1hdGNoIHNlbGVjdG9yXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byBjaGVja1xuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gc2VsZWN0b3IgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSBpcyBzZWxlY3RvciBtYXRjaGVkIHRvIGVsZW1lbnQ/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbVV0aWxcbiAqL1xuZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gbWF0Y2hTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFJlbW92ZSBjc3MgY2xhc3MgZnJvbSBlbGVtZW50XG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoQXJyYXkgPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL2ZvckVhY2hBcnJheScpO1xudmFyIGluQXJyYXkgPSByZXF1aXJlKCcuLi9hcnJheS9pbkFycmF5Jyk7XG52YXIgZ2V0Q2xhc3MgPSByZXF1aXJlKCcuL2dldENsYXNzJyk7XG52YXIgc2V0Q2xhc3NOYW1lID0gcmVxdWlyZSgnLi9fc2V0Q2xhc3NOYW1lJyk7XG5cbi8qKlxuICogUmVtb3ZlIGNzcyBjbGFzcyBmcm9tIGVsZW1lbnRcbiAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fFNWR0VsZW1lbnQpfSBlbGVtZW50IC0gdGFyZ2V0IGVsZW1lbnRcbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBjc3NDbGFzcyAtIGNzcyBjbGFzc2VzIHRvIHJlbW92ZVxuICogQG1lbWJlcm9mIG1vZHVsZTpkb21VdGlsXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQpIHtcbiAgdmFyIGNzc0NsYXNzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICB2YXIgb3JpZ2luLCBuZXdDbGFzcztcblxuICBpZiAoY2xhc3NMaXN0KSB7XG4gICAgZm9yRWFjaEFycmF5KGNzc0NsYXNzLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3JpZ2luID0gZ2V0Q2xhc3MoZWxlbWVudCkuc3BsaXQoL1xccysvKTtcbiAgbmV3Q2xhc3MgPSBbXTtcbiAgZm9yRWFjaEFycmF5KG9yaWdpbiwgZnVuY3Rpb24obmFtZSkge1xuICAgIGlmIChpbkFycmF5KG5hbWUsIGNzc0NsYXNzKSA8IDApIHtcbiAgICAgIG5ld0NsYXNzLnB1c2gobmFtZSk7XG4gICAgfVxuICB9KTtcblxuICBzZXRDbGFzc05hbWUoZWxlbWVudCwgbmV3Q2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbW92ZUNsYXNzO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFJlbW92ZSBlbGVtZW50IGZyb20gcGFyZW50IG5vZGUuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmVtb3ZlIGVsZW1lbnQgZnJvbSBwYXJlbnQgbm9kZS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IHRvIHJlbW92ZS5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZG9tVXRpbFxuICovXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVtb3ZlRWxlbWVudDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBFeHRlbmQgdGhlIHRhcmdldCBvYmplY3QgZnJvbSBvdGhlciBvYmplY3RzLlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBtb2R1bGUgb2JqZWN0XG4gKi9cblxuLyoqXG4gKiBFeHRlbmQgdGhlIHRhcmdldCBvYmplY3QgZnJvbSBvdGhlciBvYmplY3RzLlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIE9iamVjdCB0aGF0IHdpbGwgYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7Li4ub2JqZWN0fSBvYmplY3RzIC0gT2JqZWN0cyBhcyBzb3VyY2VzXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBFeHRlbmRlZCBvYmplY3RcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIG9iamVjdHMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgaGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciBzb3VyY2UsIHByb3AsIGksIGxlbjtcblxuICBmb3IgKGkgPSAxLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgZm9yIChwcm9wIGluIHNvdXJjZSkge1xuICAgICAgaWYgKGhhc093blByb3AuY2FsbChzb3VyY2UsIHByb3ApKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4dGVuZDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBSZXF1ZXN0IGltYWdlIHBpbmcuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoT3duUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb24vZm9yRWFjaE93blByb3BlcnRpZXMnKTtcblxuLyoqXG4gKiBAbW9kdWxlIHJlcXVlc3RcbiAqL1xuXG4vKipcbiAqIFJlcXVlc3QgaW1hZ2UgcGluZy5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgdXJsIGZvciBwaW5nIHJlcXVlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSB0cmFja2luZ0luZm8gaW5mb3MgZm9yIG1ha2UgcXVlcnkgc3RyaW5nXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnJlcXVlc3RcbiAqIEBleGFtcGxlXG4gKiB2YXIgaW1hZ2VQaW5nID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9yZXF1ZXN0L2ltYWdlUGluZycpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIGltYWdlUGluZygnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vY29sbGVjdCcsIHtcbiAqICAgICB2OiAxLFxuICogICAgIHQ6ICdldmVudCcsXG4gKiAgICAgdGlkOiAndHJhY2tpbmdpZCcsXG4gKiAgICAgY2lkOiAnY2lkJyxcbiAqICAgICBkcDogJ2RwJyxcbiAqICAgICBkaDogJ2RoJ1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGltYWdlUGluZyh1cmwsIHRyYWNraW5nSW5mbykge1xuICB2YXIgdHJhY2tpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHZhciBxdWVyeVN0cmluZyA9ICcnO1xuICBmb3JFYWNoT3duUHJvcGVydGllcyh0cmFja2luZ0luZm8sIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICBxdWVyeVN0cmluZyArPSAnJicgKyBrZXkgKyAnPScgKyB2YWx1ZTtcbiAgfSk7XG4gIHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcuc3Vic3RyaW5nKDEpO1xuXG4gIHRyYWNraW5nRWxlbWVudC5zcmMgPSB1cmwgKyAnPycgKyBxdWVyeVN0cmluZztcblxuICB0cmFja2luZ0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0cmFja2luZ0VsZW1lbnQpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRyYWNraW5nRWxlbWVudCk7XG5cbiAgcmV0dXJuIHRyYWNraW5nRWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbWFnZVBpbmc7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgU2VuZCBob3N0bmFtZSBvbiBET01Db250ZW50TG9hZGVkLlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNVbmRlZmluZWQgPSByZXF1aXJlKCcuLi90eXBlL2lzVW5kZWZpbmVkJyk7XG52YXIgaW1hZ2VQaW5nID0gcmVxdWlyZSgnLi9pbWFnZVBpbmcnKTtcblxudmFyIG1zN2RheXMgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZGF0ZSBoYXMgcGFzc2VkIDcgZGF5c1xuICogQHBhcmFtIHtudW1iZXJ9IGRhdGUgLSBtaWxsaXNlY29uZHNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNFeHBpcmVkKGRhdGUpIHtcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIHJldHVybiBub3cgLSBkYXRlID4gbXM3ZGF5cztcbn1cblxuLyoqXG4gKiBTZW5kIGhvc3RuYW1lIG9uIERPTUNvbnRlbnRMb2FkZWQuXG4gKiBUbyBwcmV2ZW50IGhvc3RuYW1lIHNldCB0dWkudXNhZ2VTdGF0aXN0aWNzIHRvIGZhbHNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcE5hbWUgLSBhcHBsaWNhdGlvbiBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gdHJhY2tpbmdJZCAtIEdBIHRyYWNraW5nIElEXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIHNlbmRIb3N0bmFtZShhcHBOYW1lLCB0cmFja2luZ0lkKSB7XG4gIHZhciB1cmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vY29sbGVjdCc7XG4gIHZhciBob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lO1xuICB2YXIgaGl0VHlwZSA9ICdldmVudCc7XG4gIHZhciBldmVudENhdGVnb3J5ID0gJ3VzZSc7XG4gIHZhciBhcHBsaWNhdGlvbktleUZvclN0b3JhZ2UgPSAnVE9BU1QgVUkgJyArIGFwcE5hbWUgKyAnIGZvciAnICsgaG9zdG5hbWUgKyAnOiBTdGF0aXN0aWNzJztcbiAgdmFyIGRhdGUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYXBwbGljYXRpb25LZXlGb3JTdG9yYWdlKTtcblxuICAvLyBza2lwIGlmIHRoZSBmbGFnIGlzIGRlZmluZWQgYW5kIGlzIHNldCB0byBmYWxzZSBleHBsaWNpdGx5XG4gIGlmICghaXNVbmRlZmluZWQod2luZG93LnR1aSkgJiYgd2luZG93LnR1aS51c2FnZVN0YXRpc3RpY3MgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gc2tpcCBpZiBub3QgcGFzcyBzZXZlbiBkYXlzIG9sZFxuICBpZiAoZGF0ZSAmJiAhaXNFeHBpcmVkKGRhdGUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGFwcGxpY2F0aW9uS2V5Rm9yU3RvcmFnZSwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgaW1hZ2VQaW5nKHVybCwge1xuICAgICAgICB2OiAxLFxuICAgICAgICB0OiBoaXRUeXBlLFxuICAgICAgICB0aWQ6IHRyYWNraW5nSWQsXG4gICAgICAgIGNpZDogaG9zdG5hbWUsXG4gICAgICAgIGRwOiBob3N0bmFtZSxcbiAgICAgICAgZGg6IGFwcE5hbWUsXG4gICAgICAgIGVsOiBhcHBOYW1lLFxuICAgICAgICBlYzogZXZlbnRDYXRlZ29yeVxuICAgICAgfSk7XG4gICAgfVxuICB9LCAxMDAwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZW5kSG9zdG5hbWU7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYW4gaW5zdGFuY2Ugb2YgQXJyYXkgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGFuIGluc3RhbmNlIG9mIEFycmF5IG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhbiBpbnN0YW5jZSBvZiBBcnJheSwgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBhcnJheSBpbnN0YW5jZT9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIHN0cmluZyBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBib29sZWFuIG9yIG5vdC5cbiAqICBJZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBib29sZWFuLCByZXR1cm4gdHJ1ZS5cbiAqIEBwYXJhbSB7Kn0gb2JqIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIGJvb2xlYW4/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNCb29sZWFuKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nIHx8IG9iaiBpbnN0YW5jZW9mIEJvb2xlYW47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCb29sZWFuO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGV4aXN0aW5nIG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnLi9pc1VuZGVmaW5lZCcpO1xudmFyIGlzTnVsbCA9IHJlcXVpcmUoJy4vaXNOdWxsJyk7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgZXhpc3Rpbmcgb3Igbm90LlxuICogSWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIG5vdCBudWxsIGFuZCBub3QgdW5kZWZpbmVkLCByZXR1cm5zIHRydWUuXG4gKiBAcGFyYW0geyp9IHBhcmFtIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIGV4aXN0eT9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICogQGV4YW1wbGVcbiAqIHZhciBpc0V4aXN0eSA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc0V4aXN0eScpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIGlzRXhpc3R5KCcnKTsgLy90cnVlXG4gKiBpc0V4aXN0eSgwKTsgLy90cnVlXG4gKiBpc0V4aXN0eShbXSk7IC8vdHJ1ZVxuICogaXNFeGlzdHkoe30pOyAvL3RydWVcbiAqIGlzRXhpc3R5KG51bGwpOyAvL2ZhbHNlXG4gKiBpc0V4aXN0eSh1bmRlZmluZWQpOyAvL2ZhbHNlXG4qL1xuZnVuY3Rpb24gaXNFeGlzdHkocGFyYW0pIHtcbiAgcmV0dXJuICFpc1VuZGVmaW5lZChwYXJhbSkgJiYgIWlzTnVsbChwYXJhbSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFeGlzdHk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBmdW5jdGlvbiBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBmdW5jdGlvbiBvciBub3QuXG4gKiBJZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBmdW5jdGlvbiwgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBmdW5jdGlvbj9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRnVuY3Rpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGluc3RhbmNlIG9mIEhUTUxOb2RlIG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGluc3RhbmNlIG9mIEhUTUxOb2RlIG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZXMgaXMgYSBpbnN0YW5jZSBvZiBIVE1MTm9kZSwgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IGh0bWwgLSBUYXJnZXQgZm9yIGNoZWNraW5nXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gSXMgSFRNTE5vZGUgP1xuICogQG1lbWJlcm9mIG1vZHVsZTp0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzSFRNTE5vZGUoaHRtbCkge1xuICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAoaHRtbCAmJiAoaHRtbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8ICEhaHRtbC5ub2RlVHlwZSkpO1xuICB9XG5cbiAgcmV0dXJuICEhKGh0bWwgJiYgaHRtbC5ub2RlVHlwZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNIVE1MTm9kZTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBudWxsIG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBudWxsIG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZShhcmd1bWVudHNbMF0pIGlzIG51bGwsIHJldHVybnMgdHJ1ZS5cbiAqIEBwYXJhbSB7Kn0gb2JqIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIG51bGw/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICByZXR1cm4gb2JqID09PSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTnVsbDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIG51bWJlciBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBudW1iZXIgb3Igbm90LlxuICogSWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgbnVtYmVyLCByZXR1cm4gdHJ1ZS5cbiAqIEBwYXJhbSB7Kn0gb2JqIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIG51bWJlcj9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc051bWJlcihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdudW1iZXInIHx8IG9iaiBpbnN0YW5jZW9mIE51bWJlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc051bWJlcjtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhbiBvYmplY3Qgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGFuIG9iamVjdCBvciBub3QuXG4gKiBJZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYW4gb2JqZWN0LCByZXR1cm4gdHJ1ZS5cbiAqIEBwYXJhbSB7Kn0gb2JqIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIG9iamVjdD9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBzdHJpbmcgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgc3RyaW5nIG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIHN0cmluZywgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBzdHJpbmc/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyB8fCBvYmogaW5zdGFuY2VvZiBTdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpbmc7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgdW5kZWZpbmVkIG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyB1bmRlZmluZWQgb3Igbm90LlxuICogSWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIHVuZGVmaW5lZCwgcmV0dXJucyB0cnVlLlxuICogQHBhcmFtIHsqfSBvYmogLSBUYXJnZXQgZm9yIGNoZWNraW5nXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gSXMgdW5kZWZpbmVkP1xuICogQG1lbWJlcm9mIG1vZHVsZTp0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZpbmVkXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNVbmRlZmluZWQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlIHN0YXRpYyB2YWx1ZXNcbiAqL1xuXG5pbXBvcnQgZm9yRWFjaE93blByb3BlcnRpZXMgZnJvbSAndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzJztcblxuY29uc3QgQ1NTX1BSRUZJWCA9ICd0dWktc2VsZWN0LWJveCc7XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSB7XG4gIFNFTEVDVF9CT1g6ICcnLFxuICBJVEVNOiAnaXRlbScsXG4gIElURU1fR1JPVVA6ICdpdGVtLWdyb3VwJyxcbiAgSVRFTV9HUk9VUF9MQUJFTDogJ2l0ZW0tZ3JvdXAtbGFiZWwnLFxuICBEUk9QRE9XTjogJ2Ryb3Bkb3duJyxcbiAgSU5QVVQ6ICdpbnB1dCcsXG4gIFBMQUNFSE9MREVSOiAncGxhY2Vob2xkZXInLFxuICBJQ09OOiAnaWNvbicsXG4gIE9QRU46ICdvcGVuJyxcbiAgSElEREVOOiAnaGlkZGVuJyxcbiAgRElTQUJMRUQ6ICdkaXNhYmxlZCcsXG4gIFNFTEVDVEVEOiAnc2VsZWN0ZWQnLFxuICBISUdITElHSFQ6ICdoaWdobGlnaHQnXG59O1xuXG5leHBvcnQgY29uc3QgY2xzID0gKGZ1bmN0aW9uKCkge1xuICBmb3JFYWNoT3duUHJvcGVydGllcyhjbGFzc05hbWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY2xhc3NOYW1lc1trZXldID0gYCR7Q1NTX1BSRUZJWH0tJHt2YWx1ZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc05hbWVzW2tleV0gPSBDU1NfUFJFRklYO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNsYXNzTmFtZXM7XG59KSgpO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IERyb3Bkb3duXG4gKi9cblxuaW1wb3J0IGZvckVhY2hBcnJheSBmcm9tICd0dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vZm9yRWFjaEFycmF5JztcbmltcG9ydCBpc0V4aXN0eSBmcm9tICd0dWktY29kZS1zbmlwcGV0L3R5cGUvaXNFeGlzdHknO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc051bWJlcic7XG5pbXBvcnQgYWRkQ2xhc3MgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL2FkZENsYXNzJztcbmltcG9ydCByZW1vdmVDbGFzcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZUVsZW1lbnQgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL3JlbW92ZUVsZW1lbnQnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgY2xzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEl0ZW1Hcm91cCBmcm9tICcuL2l0ZW1Hcm91cCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL2l0ZW0nO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQGlnbm9yZVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zXG4gKiAgIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wbGFjZWhvbGRlcl0gLSBwbGFjZWhvbGRlciBmb3IgYW4gaW5wdXRcbiAqICAgQHBhcmFtIHthcnJheTxpdGVtRGF0YXxpdGVtR3JvdXBEYXRhPn0gb3B0aW9ucy5kYXRhIC0gZGF0YSBmb3IgSXRlbUdyb3VwcyBhbmQgSXRlbXNcbiAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kaXNhYmxlZD1mYWxzZV0gLSB3aGV0aGVyIGEgZHJvcGRvd24gc2hvdWxkIGJlIGRpc2FibGVkIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKHsgcGxhY2Vob2xkZXIsIGRhdGEsIGRpc2FibGVkID0gZmFsc2UgfSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZWwgPSBjcmVhdGVFbGVtZW50KCd1bCcsICcnLCB7IGNsYXNzTmFtZTogYCR7Y2xzLkRST1BET1dOfSAke2Nscy5ISURERU59YCB9KTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubmF0aXZlRWwgPSBjcmVhdGVFbGVtZW50KCdzZWxlY3QnLCAnJywgeyBjbGFzc05hbWU6IGNscy5ISURERU4sIHRhYkluZGV4OiAtMSB9KTtcblxuICAgIC8qKlxuICAgICAqIEl0ZW1zIGFuZCBJdGVtR3JvdXBzXG4gICAgICogQHR5cGUge0FycmF5LjxJdGVtfEl0ZW1Hcm91cD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLml0ZW1zID0gW107XG5cbiAgICAvKipcbiAgICAgKiB0aGUgbnVtYmVyIG9mIEl0ZW1cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pdGVtTGVuZ3RoID0gMDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtJdGVtfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0l0ZW19XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IG51bGw7XG5cbiAgICB0aGlzLmluaXRpYWxpemUoZGF0YSwgZGlzYWJsZWQsIHBsYWNlaG9sZGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgSXRlbXMgYW5kIEl0ZW1Hcm91cHMgYW5kIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIEl0ZW1zXG4gICAqIEByZXR1cm4ge2FycmF5PEl0ZW18SXRlbUdyb3VwPn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXRpYWxpemVJdGVtcyhkYXRhKSB7XG4gICAgbGV0IGl0ZW07XG4gICAgbGV0IGl0ZW1JbmRleCA9IDA7XG4gICAgbGV0IGl0ZW1Hcm91cEluZGV4ID0gMDtcbiAgICBkYXRhLmZvckVhY2goZGF0dW0gPT4ge1xuICAgICAgaWYgKGRhdHVtLmRhdGEpIHtcbiAgICAgICAgaXRlbSA9IG5ldyBJdGVtR3JvdXAoeyBpbmRleDogaXRlbUluZGV4LCBpdGVtR3JvdXBJbmRleCwgLi4uZGF0dW0gfSk7XG4gICAgICAgIGl0ZW1JbmRleCArPSBkYXR1bS5kYXRhLmxlbmd0aCAtIDE7XG4gICAgICAgIGl0ZW1Hcm91cEluZGV4ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtID0gbmV3IEl0ZW0oeyBpbmRleDogaXRlbUluZGV4LCAuLi5kYXR1bSB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgaXRlbS5hcHBlbmRUb0NvbnRhaW5lcih0aGlzLmVsLCB0aGlzLm5hdGl2ZUVsKTtcbiAgICAgIGl0ZW1JbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pdGVtTGVuZ3RoID0gaXRlbUluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXRpYWxpemUoZGF0YSwgZGlzYWJsZWQsIHBsYWNlaG9sZGVyKSB7XG4gICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCAnJywgeyBsYWJlbDogcGxhY2Vob2xkZXIsIHZhbHVlOiAnJyB9LCB0aGlzLm5hdGl2ZUVsKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYWxpemVJdGVtcyhkYXRhKTtcblxuICAgIHRoaXMuaXRlcmF0ZUl0ZW1zKGl0ZW0gPT4ge1xuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSAmJiBpdGVtLmlzU2VsZWN0ZWQoKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtICYmIGl0ZW0uaXNTZWxlY3RlZCgpKSB7XG4gICAgICAgIGl0ZW0uZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgYSBmdW5jdGlvbiB3aGlsZSBpdGVyYXRpbmcgaXRlbXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBleGVjdXRlXG4gICAqIEBwYXJhbSAgey4uLmFueX0gYXJncyAtIGFyZ3VtZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXRlcmF0ZUl0ZW1zKGNhbGxiYWNrLCAuLi5hcmdzKSB7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvckVhY2hBcnJheSh0aGlzLml0ZW1zLCBpdGVtID0+IHtcbiAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBJdGVtR3JvdXApIHtcbiAgICAgICAgZm9yRWFjaEFycmF5KGl0ZW0uZ2V0SXRlbXMoKSwgaXRlbUluR3JvdXAgPT4ge1xuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KHRoaXMsIFtpdGVtSW5Hcm91cCwgaW5kZXgsIC4uLmFyZ3NdKSB8fCBmYWxzZTtcbiAgICAgICAgICBpbmRleCArPSAxO1xuXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2suYXBwbHkodGhpcywgW2l0ZW0sIGluZGV4LCAuLi5hcmdzXSk7XG4gICAgICBpbmRleCArPSAxO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gYSBkcm9wZG93biBsaXN0XG4gICAqL1xuICBvcGVuKCkge1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIGNscy5ISURERU4pO1xuICAgIGNvbnN0IGhpZ2hsaWdodGVkSXRlbSA9XG4gICAgICAhdGhpcy5zZWxlY3RlZEl0ZW0gfHwgdGhpcy5zZWxlY3RlZEl0ZW0uaXNEaXNhYmxlZCgpXG4gICAgICAgID8gdGhpcy5nZXRJdGVtcyhpdGVtID0+ICFpdGVtLmlzRGlzYWJsZWQoKSlbMF1cbiAgICAgICAgOiB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICB0aGlzLmhpZ2hsaWdodChoaWdobGlnaHRlZEl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIGEgZHJvcGRvd24gbGlzdFxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgYWRkQ2xhc3ModGhpcy5lbCwgY2xzLkhJRERFTik7XG4gICAgdGhpcy5kZWhpZ2hsaWdodCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYW4gZHJvcGRvd25cbiAgICovXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5uYXRpdmVFbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgYWRkQ2xhc3ModGhpcy5lbCwgY2xzLkRJU0FCTEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYW4gZHJvcGRvd25cbiAgICovXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLm5hdGl2ZUVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLkRJU0FCTEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgYW4gSXRlbVxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8SXRlbX0gdmFsdWUgLSBpZiBzdHJpbmcsIGZpbmQgYW4gSXRlbSBieSBpdHMgdmFsdWUuIGlmIG51bWJlciwgZmluZCBhbiBJdGVtIGJ5IGl0cyBpbmRleC5cbiAgICogQHJldHVybiB7SXRlbX0gcmVzdWx0IG9mIHNlbGVjdGlvblxuICAgKi9cbiAgc2VsZWN0KHZhbHVlKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdmFsdWUgaW5zdGFuY2VvZiBJdGVtID8gdmFsdWUgOiB0aGlzLmdldEl0ZW0odmFsdWUpO1xuICAgIHRoaXMuZGVzZWxlY3QoKTtcblxuICAgIGlmICghc2VsZWN0ZWRJdGVtIHx8IChzZWxlY3RlZEl0ZW0gJiYgc2VsZWN0ZWRJdGVtLmlzRGlzYWJsZWQoKSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNlbGVjdGVkSXRlbS5zZWxlY3QoKTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHNlbGVjdGVkSXRlbTtcblxuICAgIHJldHVybiBzZWxlY3RlZEl0ZW07XG4gIH1cblxuICAvKipcbiAgICogRGVzZWxlY3QgYW4gSXRlbVxuICAgKi9cbiAgZGVzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbS5kZXNlbGVjdCgpO1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIaWdobGlnaHQgYW4gSXRlbVxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8SXRlbX0gdmFsdWUgLSBpZiBzdHJpbmcsIGZpbmQgYW4gSXRlbSBieSBpdHMgdmFsdWUuIGlmIG51bWJlciwgZmluZCBhbiBJdGVtIGJ5IGl0cyBpbmRleC5cbiAgICovXG4gIGhpZ2hsaWdodCh2YWx1ZSkge1xuICAgIGxldCBoaWdobGlnaHRlZEl0ZW07XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSXRlbSkge1xuICAgICAgaGlnaGxpZ2h0ZWRJdGVtID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChpc0V4aXN0eSh2YWx1ZSkpIHtcbiAgICAgIGhpZ2hsaWdodGVkSXRlbSA9IHRoaXMuZ2V0SXRlbSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGhpZ2hsaWdodGVkSXRlbSAmJiBoaWdobGlnaHRlZEl0ZW0gIT09IHRoaXMuaGlnaGxpZ2h0ZWRJdGVtKSB7XG4gICAgICB0aGlzLmRlaGlnaGxpZ2h0KCk7XG4gICAgICBoaWdobGlnaHRlZEl0ZW0uaGlnaGxpZ2h0KCk7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IGhpZ2hsaWdodGVkSXRlbTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVoaWdobGlnaHQgYW4gSXRlbVxuICAgKi9cbiAgZGVoaWdobGlnaHQoKSB7XG4gICAgaWYgKHRoaXMuaGlnaGxpZ2h0ZWRJdGVtKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbS5kZWhpZ2hsaWdodCgpO1xuICAgICAgdGhpcy5oaWdobGlnaHRlZEl0ZW0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIGEgaGlnaGxpZ2h0ZWQgSXRlbVxuICAgKiBAcGFyYW0ge251bWJlcn0gZGlyZWN0aW9uIC0gZGlyZWN0aW9uIHRvIG1vdmVcbiAgICovXG4gIG1vdmVIaWdobGlnaHRlZEl0ZW0oZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgaGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5nZXRIaWdobGlnaHRlZEl0ZW0oKTtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gaXRlbXM7XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGhpZ2hsaWdodGVkSXRlbSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgoaW5kZXgsIGxlbmd0aCwgZGlyZWN0aW9uKTtcblxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICghaXRlbXNbaW5kZXhdLmlzRGlzYWJsZWQoKSkge1xuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KGl0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KGluZGV4LCBsZW5ndGgsIGRpcmVjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0SXRlbUluZGV4KGluZGV4LCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIHJldHVybiAoaW5kZXggKyBkaXJlY3Rpb24gKyBsZW5ndGgpICUgbGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgSXRlbXMgdGhhdCBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICAgKiBJZiBmaWx0ZXIgZnVuY3Rpb24gaXMgbm90IHBhc3NlZCwgaXQgcmV0dXJucyBhbGwgSXRlbXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBmaWx0ZXIgaXRlbXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gZmluZC4gLTEgbWVhbnMgYWxsIGl0ZW1zLlxuICAgKiBAcmV0dXJuIHthcnJheTxJdGVtPn1cbiAgICovXG4gIGdldEl0ZW1zKGNhbGxiYWNrID0gKCkgPT4gdHJ1ZSwgbnVtYmVyID0gLTEpIHtcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgIHRoaXMuaXRlcmF0ZUl0ZW1zKGl0ZW0gPT4ge1xuICAgICAgaWYgKGNhbGxiYWNrKGl0ZW0pKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIG51bWJlciAtPSAxO1xuXG4gICAgICAgIHJldHVybiBudW1iZXIgIT09IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBJdGVtIGJ5IGl0cyBpbmRleCBvciB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHZhbHVlIC0gaWYgc3RyaW5nLCB0aGUgSXRlbSdzIHZhbHVlLiBpZiBudW1iZXIsIHRoZSBJdGVtJ3MgaW5kZXguXG4gICAqIEByZXR1cm4ge0l0ZW19XG4gICAqL1xuICBnZXRJdGVtKHZhbHVlKSB7XG4gICAgY29uc3QgaXNWYWxpZEl0ZW0gPSBpc051bWJlcih2YWx1ZSlcbiAgICAgID8gY29tcGFyZWRJdGVtID0+IGNvbXBhcmVkSXRlbS5nZXRJbmRleCgpID09PSB2YWx1ZVxuICAgICAgOiBjb21wYXJlZEl0ZW0gPT4gY29tcGFyZWRJdGVtLmdldFZhbHVlKCkgPT09IHZhbHVlO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoaXNWYWxpZEl0ZW0sIDEpWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgSXRlbUdyb3VwcyB0aGF0IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gICAqIElmIGZpbHRlciBmdW5jdGlvbiBpcyBub3QgcGFzc2VkLCBpdCByZXR1cm5zIGFsbCBJdGVtR3JvdXBzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZmlsdGVyIGl0ZW0gZ3JvdXBzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSB0aGUgbnVtYmVyIG9mIGl0ZW0gZ3JvdXBzIHRvIGZpbmQuIC0xIG1lYW5zIGFsbCBpdGVtIGdyb3Vwcy5cbiAgICogQHJldHVybiB7YXJyYXk8SXRlbUdyb3VwPn1cbiAgICovXG4gIGdldEl0ZW1Hcm91cHMoY2FsbGJhY2sgPSAoKSA9PiB0cnVlLCBudW1iZXIgPSAtMSkge1xuICAgIGNvbnN0IGl0ZW1Hcm91cHMgPSBbXTtcbiAgICBmb3JFYWNoQXJyYXkodGhpcy5pdGVtcywgaXRlbUdyb3VwID0+IHtcbiAgICAgIGlmIChpdGVtR3JvdXAgaW5zdGFuY2VvZiBJdGVtR3JvdXAgJiYgY2FsbGJhY2soaXRlbUdyb3VwKSkge1xuICAgICAgICBpdGVtR3JvdXBzLnB1c2goaXRlbUdyb3VwKTtcbiAgICAgICAgbnVtYmVyIC09IDE7XG5cbiAgICAgICAgcmV0dXJuIG51bWJlciAhPT0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbUdyb3VwcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gSXRlbUdyb3VwIGJ5IGl0cyBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBncm91cEluZGV4IG9mIHRoZSBJdGVtR3JvdXBcbiAgICogQHJldHVybiB7SXRlbUdyb3VwfVxuICAgKi9cbiAgZ2V0SXRlbUdyb3VwKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SXRlbUdyb3VwcyhpdGVtR3JvdXAgPT4gaXRlbUdyb3VwLmdldEluZGV4KCkgPT09IGluZGV4LCAxKVswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG51bWJlciBvZiBJdGVtc1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRJdGVtTGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1MZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzZWxlY3RlZCBJdGVtXG4gICAqIEByZXR1cm4ge0l0ZW19XG4gICAqL1xuICBnZXRTZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgaGlnaGxpZ2h0ZWQgSXRlbVxuICAgKiBAcmV0dXJuIHtJdGVtfVxuICAgKi9cbiAgZ2V0SGlnaGxpZ2h0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodGVkSXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmQgdGhlIGVsZW1lbnQgYW5kIG5hdGl2ZSBlbGVtZW50IHRvIHRoZSBjb250YWluZXJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gY29udGFpbmVyIGVsZW1lbnRcbiAgICovXG4gIGFwcGVuZFRvQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5uYXRpdmVFbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdG9yeSBhIGRyb3Bkb3duXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uZGVzdHJveSgpKTtcbiAgICByZW1vdmVFbGVtZW50KHRoaXMuZWwpO1xuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5uYXRpdmVFbCk7XG4gICAgdGhpcy5lbCA9IHRoaXMubmF0aXZlRWwgPSB0aGlzLml0ZW1zID0gdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlld1xuICovXG5cbmltcG9ydCBTZWxlY3RCb3ggZnJvbSAnLi9zZWxlY3RCb3gnO1xuaW1wb3J0ICcuLi9jc3Mvc2VsZWN0Qm94LmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEJveDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBJbnB1dFxuICovXG5cbmltcG9ydCBhZGRDbGFzcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlRWxlbWVudCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnNcbiAqICAgQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBsYWNlaG9sZGVyXSAtIHBsYWNlaG9sZGVyIGZvciBhIHNlbGVjdCBib3hcbiAqICAgQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmRpc2FibGVkXSAtIHdoZXRoZXIgYW4gaW5wdXQgc2hvdWxkIGJlIGRpc2FibGVkIG9yIG5vdFxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNob3dJY29uXSAtIHdoZXRoZXIgYW4gYXJyb3cgaWNvbiBpbiB0aGUgaW5wdXQgc2hvdWxkIGJlIHNob3duXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcbiAgY29uc3RydWN0b3IoeyBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIHNob3dJY29uIH0pIHtcbiAgICAvKipcbiAgICAgKiB0ZXh0IGZvciBhIHBsYWNlaG9sZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGxhY2Vob2xkZXJUZXh0ID0gcGxhY2Vob2xkZXI7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsIHsgY2xhc3NOYW1lOiBjbHMuSU5QVVQsIHRhYkluZGV4OiAwIH0pO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wbGFjZWhvbGRlckVsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJUZXh0LFxuICAgICAgeyBjbGFzc05hbWU6IGNscy5QTEFDRUhPTERFUiB9LFxuICAgICAgdGhpcy5lbFxuICAgICk7XG5cbiAgICB0aGlzLmluaXRpYWxpemUoZGlzYWJsZWQsIHNob3dJY29uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0aWFsaXplKGRpc2FibGVkLCBzaG93SWNvbikge1xuICAgIGlmIChzaG93SWNvbikge1xuICAgICAgY3JlYXRlRWxlbWVudCgnc3BhbicsICdzZWxlY3QnLCB7IGNsYXNzTmFtZTogY2xzLklDT04gfSwgdGhpcy5lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJFbC53aWR0aCA9ICcxMDAlJztcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFuIGlucHV0XG4gICAqL1xuICBkaXNhYmxlKCkge1xuICAgIGFkZENsYXNzKHRoaXMuZWwsIGNscy5ESVNBQkxFRCk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGFuIGlucHV0XG4gICAqL1xuICBlbmFibGUoKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLkRJU0FCTEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGFuIGlucHV0XG4gICAqL1xuICBvcGVuKCkge1xuICAgIGFkZENsYXNzKHRoaXMuZWwsIGNscy5PUEVOKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhbiBpbnB1dFxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLk9QRU4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzXG4gICAqL1xuICBmb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSB0ZXh0IGluIHRoZSBwbGFjZWhvbGRlclxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gLSBzZWxlY3RlZCBJdGVtXG4gICAqL1xuICBjaGFuZ2VUZXh0KGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlckVsLnRleHRDb250ZW50ID0gaXRlbS5nZXRMYWJlbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyRWwudGV4dENvbnRlbnQgPSB0aGlzLnBsYWNlaG9sZGVyVGV4dDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBlbGVtZW50IHRvIHRoZSBjb250YWluZXJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gY29udGFpbmVyIGVsZW1lbnRcbiAgICovXG4gIGFwcGVuZFRvQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGFuIGlucHV0XG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgdGhpcy5lbCA9IHRoaXMucGxhY2Vob2xkZXJFbCA9IG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBJdGVtXG4gKi9cblxuaW1wb3J0IGFkZENsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9hZGRDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlQ2xhc3MgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL3JlbW92ZUNsYXNzJztcbmltcG9ydCByZW1vdmVFbGVtZW50IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVFbGVtZW50JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNscyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBkZXNjcmlwdGlvblxuICogQW4gaXRlbS5cbiAqIFlvdSBjYW4gZ2V0IEl0ZW0gYnkge0BsaW5rIFNlbGVjdEJveCNnZXRJdGVtIFNlbGVjdEJveC5nZXRJdGVtKCl9IGFuZCB7QGxpbmsgU2VsZWN0Qm94I2dldEl0ZW1zIFNlbGVjdEJveC5nZXRJdGVtcygpfS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XG4gIC8qKlxuICAgKiBAaGlkZWNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gb3B0aW9uc1xuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sYWJlbF0gLSBsYWJlbCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRyb3AtZG93biBsaXN0XG4gICAqICAgQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudmFsdWUgLSB2YWx1ZSBvZiBhbiBpdGVtXG4gICAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kaXNhYmxlZD1mYWxzZV0gLSB3aGV0aGVyIGFuIEl0ZW0gc2hvdWxkIGJlIGRpc2FibGVkIG9yIG5vdFxuICAgKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuc2VsZWN0ZWQ9ZmFsc2VdIC0gd2hldGhlciBhbiBJdGVtIHNob3VsZCBiZSBwcmUtc2VsZWN0ZWQgb3Igbm90XG4gICAqICAgQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuaW5kZXggLSBJdGVtJ3MgaW5kZXhcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmFsdWUsIGxhYmVsLCBkaXNhYmxlZCwgc2VsZWN0ZWQsIGluZGV4IH0pIHtcbiAgICAvKipcbiAgICAgKiB2YWx1ZSBvZiBhbiBpdGVtXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsdWUgPSBgJHt2YWx1ZX1gO1xuXG4gICAgLyoqXG4gICAgICogbGFiZWwgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkcm9wLWRvd24gbGlzdFxuICAgICAqIGlmIGxhYmVsIGlzIGFuIGVtcHR5IHN0cmluZywgaXQgc2hvdWxkIGJlIHNhbWUgYXMgaXRzIHZhbHVlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbCB8fCB0aGlzLnZhbHVlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcblxuICAgIC8qKlxuICAgICAqIHdoZXRoZXIgYW4gSXRlbUdyb3VwIG9mIHRoZSBJdGVtIGlzIGRpc2FibGVkIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pdGVtR3JvdXBEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogd2hldGhlciBhbiBJdGVtIGlzIGRpc2FibGVkIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pdGVtRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogPGxpPiBlbGVtZW50IGZvciBhIGN1c3RvbSBkcm9wZG93biBpdGVtXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5lbCA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgdGhpcy5sYWJlbCwge1xuICAgICAgY2xhc3NOYW1lOiBjbHMuSVRFTSxcbiAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICdkYXRhLXZhbHVlJzogdGhpcy52YWx1ZSxcbiAgICAgICdkYXRhLWluZGV4JzogdGhpcy5pbmRleFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogPG9wdGlvbj4gZWxlbWVudCBmb3IgYSBzZWxlY3QgZWxlbWVudFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubmF0aXZlRWwgPSBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCAnJywge1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbFxuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0aWFsaXplKGRpc2FibGVkLCBzZWxlY3RlZCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZShkaXNhYmxlZCwgc2VsZWN0ZWQpIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBJdGVtIGRpc2FibGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG1ha2VEaXNhYmxlKCkge1xuICAgIHRoaXMubmF0aXZlRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGFkZENsYXNzKHRoaXMuZWwsIGNscy5ESVNBQkxFRCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBJdGVtIGVuYWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgbWFrZUVuYWJsZSgpIHtcbiAgICB0aGlzLm5hdGl2ZUVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLkRJU0FCTEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFuIEl0ZW0gZHVlIHRvIGFuIEl0ZW1Hcm91cFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBkaXNhYmxlSXRlbUdyb3VwKCkge1xuICAgIHRoaXMuaXRlbUdyb3VwRGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubWFrZURpc2FibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYW4gSXRlbSBkdWUgdG8gYW4gSXRlbUdyb3VwXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGVuYWJsZUl0ZW1Hcm91cCgpIHtcbiAgICB0aGlzLml0ZW1Hcm91cERpc2FibGVkID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgdGhpcy5tYWtlRW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYW4gSXRlbVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuaXRlbURpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLm1ha2VEaXNhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGFuIEl0ZW1cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuaXRlbURpc2FibGVkID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgdGhpcy5tYWtlRW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhbiBJdGVtXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCgpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5uYXRpdmVFbC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsLCBjbHMuU0VMRUNURUQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlbGVjdCBhbiBJdGVtXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm5hdGl2ZUVsLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLlNFTEVDVEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWdobGlnaHQgYW4gSXRlbVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBoaWdobGlnaHQoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgY2xzLkhJR0hMSUdIVCk7XG4gICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGhpZ2hsaWdodCBmcm9tIGFuIEl0ZW1cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZGVoaWdobGlnaHQoKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLkhJR0hMSUdIVCk7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGl0ZW0ncyB2YWx1ZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGl0ZW0ncyBsYWJlbC5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGl0ZW0ncyBpbmRleC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgYW4gaXRlbSBpcyBzZWxlY3RlZCBvciBub3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc1NlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIGFuIGl0ZW0gaXMgZGlzYWJsZWQgb3Igbm90LlxuICAgKiBUaGUgcmVzdWx0IGlzIHRydWUgaWYgYW55IG9mIHRoZSBpdGVtcyBhbmQgaXRlbSBncm91cHMgYXJlIGRpc2FibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtRGlzYWJsZWQgfHwgdGhpcy5pdGVtR3JvdXBEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmQgdGhlIGVsZW1lbnQgYW5kIG5hdGl2ZSBlbGVtZW50IHRvIHRoZSBjb250YWluZXJzXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIGNvbnRhaW5lciBlbGVtZW50XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5hdGl2ZUNvbnRhaW5lciAtIG5hdGl2ZSBjb250YWluZXIgZWxlbWVudFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBhcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIsIG5hdGl2ZUNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICBuYXRpdmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5uYXRpdmVFbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSBhbiBJdGVtXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgcmVtb3ZlRWxlbWVudCh0aGlzLmVsKTtcbiAgICByZW1vdmVFbGVtZW50KHRoaXMubmF0aXZlRWwpO1xuICAgIHRoaXMuZWwgPSB0aGlzLm5hdGl2ZUVsID0gbnVsbDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEl0ZW1Hcm91cFxuICovXG5cbmltcG9ydCBhZGRDbGFzcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlRWxlbWVudCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL2l0ZW0nO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQGRlc2NyaXB0aW9uXG4gKiBBIGdyb3VwIG9mIGl0ZW1zLlxuICogWW91IGNhbiBnZXQgSXRlbUdyb3VwIGJ5IHtAbGluayBTZWxlY3RCb3gjZ2V0SXRlbUdyb3VwIFNlbGVjdEJveC5nZXRJdGVtR3JvdXAoKX0gYW5kIHtAbGluayBTZWxlY3RCb3gjZ2V0SXRlbUdyb3VwcyBTZWxlY3RCb3guZ2V0SXRlbUdyb3VwcygpfS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUdyb3VwIHtcbiAgLyoqXG4gICAqIEBoaWRlY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zXG4gICAqICAgQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxhYmVsXSAtIGxhYmVsIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgZHJvcGRvd24gbGlzdFxuICAgKiAgIEBwYXJhbSB7YXJyYXk8aXRlbURhdGE+fSBvcHRpb25zLmRhdGEgLSBkYXRhIGZvciBJdGVtcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgSXRlbUdyb3VwXG4gICAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kaXNhYmxlZD1mYWxzZV0gLSB3aGV0aGVyIGFuIEl0ZW1Hcm91cCBzaG91bGQgYmUgZGlzYWJsZWQgb3Igbm90XG4gICAqICAgQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuaW5kZXggLSBpbmRleCBvZiB0aGUgZmlyc3QgSXRlbSBpbiB0aGUgSXRlbUdyb3VwXG4gICAqICAgQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuaXRlbUdyb3VwSW5kZXggLSBpbmRleCBvZiB0aGUgSXRlbUdyb3VwXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IGxhYmVsID0gJycsIGRhdGEsIGRpc2FibGVkID0gZmFsc2UsIGluZGV4LCBpdGVtR3JvdXBJbmRleCB9KSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5lbCA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJycsIHsgJ2RhdGEtZ3JvdXAtaW5kZXgnOiBpdGVtR3JvdXBJbmRleCB9KTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubGFiZWxFbCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBsYWJlbCwgeyBjbGFzc05hbWU6IGNscy5JVEVNX0dST1VQX0xBQkVMIH0sIHRoaXMuZWwpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pdGVtQ29udGFpbmVyRWwgPSBjcmVhdGVFbGVtZW50KCd1bCcsICcnLCB7IGNsYXNzTmFtZTogY2xzLklURU1fR1JPVVAgfSwgdGhpcy5lbCk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm5hdGl2ZUVsID0gY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnLCBsYWJlbCk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7YXJyYXk8SXRlbT59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLml0ZW1zID0gdGhpcy5jcmVhdGVJdGVtcyhkYXRhLCBpbmRleCk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbmRleCA9IGl0ZW1Hcm91cEluZGV4O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcblxuICAgIC8qKlxuICAgICAqIHdoZXRoZXIgYW4gSXRlbUdyb3VwIGlzIGRpc2FibGVkIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5pbml0aWFsaXplKGRpc2FibGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgSXRlbXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIEl0ZW1Hcm91cFxuICAgKiBAcmV0dXJuIHthcnJheTxJdGVtPn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZUl0ZW1zKGRhdGEsIGluZGV4KSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKChkYXR1bSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW0oeyBpbmRleDogaW5kZXggKyBpdGVtSW5kZXgsIC4uLmRhdHVtIH0pO1xuICAgICAgaXRlbS5hcHBlbmRUb0NvbnRhaW5lcih0aGlzLml0ZW1Db250YWluZXJFbCwgdGhpcy5uYXRpdmVFbCk7XG5cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXRpYWxpemUoZGlzYWJsZWQpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFuIEl0ZW1Hcm91cFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLm5hdGl2ZUVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBhZGRDbGFzcyh0aGlzLmxhYmVsRWwsIGNscy5ESVNBQkxFRCk7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kaXNhYmxlSXRlbUdyb3VwKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhbiBJdGVtR3JvdXBcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLm5hdGl2ZUVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5sYWJlbEVsLCBjbHMuRElTQUJMRUQpO1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uZW5hYmxlSXRlbUdyb3VwKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB7QGxpbmsgSXRlbSBpdGVtc30gaW4gdGhlIGl0ZW0gZ3JvdXAuXG4gICAqIEByZXR1cm4ge2FycmF5PEl0ZW0+fVxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBpdGVtcyA9IGl0ZW1Hcm91cC5nZXRJdGVtcygpO1xuICAgKiBjb25zb2xlLmxvZyhpdGVtc1swXSk7IC8vIGZpcnN0IGl0ZW0gaW4gdGhlIGl0ZW0gZ3JvdXBcbiAgICogY29uc29sZS5sb2coaXRlbXMubGVuZ3RoKTsgLy8gdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgaXRlbSBncm91cFxuICAgKi9cbiAgZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGl0ZW0gZ3JvdXAncyBpbmRleC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGl0ZW0gZ3JvdXAncyBsYWJlbC5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgYW4gSXRlbUdyb3VwIGlzIGRpc2FibGVkIG9yIG5vdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBlbGVtZW50IGFuZCBuYXRpdmUgZWxlbWVudCB0byB0aGUgY29udGFpbmVyc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBjb250YWluZXIgZWxlbWVudFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBuYXRpdmVDb250YWluZXIgLSBuYXRpdmUgY29udGFpbmVyIGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyLCBuYXRpdmVDb250YWluZXIpIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgbmF0aXZlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubmF0aXZlRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3RvcnkgYW4gSXRlbUdyb3VwXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kZXN0cm95KCkpO1xuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgcmVtb3ZlRWxlbWVudCh0aGlzLm5hdGl2ZUVsKTtcbiAgICB0aGlzLmVsID0gdGhpcy5sYWJlbEVsID0gdGhpcy5pdGVtQ29udGFpbmVyRWwgPSB0aGlzLm5hdGl2ZUVsID0gdGhpcy5pdGVtcyA9IG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBVdGlsaXR5IGZ1bmN0aW9ucyByZWxhdGVkIHRvIGtleSBldmVudHNcbiAqL1xuXG5jb25zdCBrZXlDb2RlTWFwID0ge1xuICAzODogJ2Fycm93VXAnLFxuICA0MDogJ2Fycm93RG93bicsXG4gIDMyOiAnc3BhY2UnLFxuICAxMzogJ2VudGVyJyxcbiAgMjc6ICdlc2NhcGUnLFxuICA2MTogJ3RhYidcbn07XG5cbmNvbnN0IGtleU1hcCA9IHtcbiAgQXJyb3dVcDogJ2Fycm93VXAnLFxuICBVcDogJ2Fycm93VXAnLFxuICBBcnJvd0Rvd246ICdhcnJvd0Rvd24nLFxuICBEb3duOiAnYXJyb3dEb3duJyxcbiAgJyAnOiAnc3BhY2UnLFxuICBTcGFjZWJhcjogJ3NwYWNlJyxcbiAgRW50ZXI6ICdlbnRlcicsXG4gIEVzY2FwZTogJ2VzY2FwZScsXG4gIEVzYzogJ2VzY2FwZScsXG4gIFRhYjogJ3RhYidcbn07XG5cbi8qKlxuICogSWRlbnRpZnkgdGhlIGtleSAocG9seWZpbGwgZm9yIElFKVxuICogQHBhcmFtIHtzdHJpbmd9IGV2IC0ga2V5Ym9hcmQgZXZlbnRcbiAqIEByZXR1cm4ge3N0cmluZ30gLSBrZXlcbiAqL1xuZXhwb3J0IGNvbnN0IGlkZW50aWZ5S2V5ID0gZXYgPT4ge1xuICBjb25zdCB7IGtleSwga2V5Q29kZSB9ID0gZXY7XG5cbiAgaWYgKGtleSkge1xuICAgIHJldHVybiBrZXlNYXBba2V5XSB8fCBrZXk7XG4gIH1cblxuICByZXR1cm4ga2V5Q29kZU1hcFtrZXlDb2RlXSB8fCBrZXlDb2RlO1xufTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBTZWxlY3RCb3hcbiAqL1xuXG5pbXBvcnQgQ3VzdG9tRXZlbnRzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvY3VzdG9tRXZlbnRzL2N1c3RvbUV2ZW50cyc7XG5pbXBvcnQgb24gZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21FdmVudC9vbic7XG5pbXBvcnQgb2ZmIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvb2ZmJztcbmltcG9ydCBwcmV2ZW50RGVmYXVsdCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L3ByZXZlbnREZWZhdWx0JztcbmltcG9ydCBnZXRUYXJnZXQgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21FdmVudC9nZXRUYXJnZXQnO1xuaW1wb3J0IGNsb3Nlc3QgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL2Nsb3Nlc3QnO1xuaW1wb3J0IHJlbW92ZUVsZW1lbnQgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL3JlbW92ZUVsZW1lbnQnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc09iamVjdCc7XG5pbXBvcnQgaXNFeGlzdHkgZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzRXhpc3R5JztcbmltcG9ydCBpc0hUTUxOb2RlIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc0hUTUxOb2RlJztcbmltcG9ydCBzZW5kSG9zdG5hbWUgZnJvbSAndHVpLWNvZGUtc25pcHBldC9yZXF1ZXN0L3NlbmRIb3N0bmFtZSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBpZGVudGlmeUtleSB9IGZyb20gJy4va2V5RXZlbnRVdGlscyc7XG5pbXBvcnQgeyBjbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bic7XG5pbXBvcnQgSXRlbUdyb3VwIGZyb20gJy4vaXRlbUdyb3VwJztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSc7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fHN0cmluZ30gY29udGFpbmVyIC0gY29udGFpbmVyIGVsZW1lbnQgb3Igc2VsZWN0b3JcbiAqIEBtaXhlcyBDdXN0b21FdmVudHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiAgIEBwYXJhbSB7YXJyYXk8aXRlbURhdGF8aXRlbUdyb3VwRGF0YT59IG9wdGlvbnMuZGF0YSAtIGFycmF5IG9mIHtAbGluayBpdGVtRGF0YX0gYW5kIHtAbGluayBpdGVtR3JvdXBEYXRhfVxuICogICBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucGxhY2Vob2xkZXJdIC0gcGxhY2Vob2xkZXIgZm9yIGFuIGlucHV0XG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGlzYWJsZWRdIC0gd2hldGhlciBhbiBJdGVtIHNob3VsZCBiZSBkaXNhYmxlZCBvciBub3RcbiAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvZm9jdXNdIC0gd2hldGhlciBhIHNlbGVjdGJveCBzaG91bGQgZ2V0IGZvY3VzIHdoZW4gdGhlIHNlbGVjdCBib3ggYXBwZW5kcyB0byB0aGUgY29udGFpbmVyXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b2Nsb3NlXSAtIHdoZXRoZXIgYSBzZWxlY3Rib3ggc2hvdWxkIGNsb3NlIGFmdGVyIHNlbGVjdGlvblxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNob3dJY29uXSAtIHdoZXRoZXIgYW4gYXJyb3cgaWNvbiBpbiB0aGUgaW5wdXQgc2hvdWxkIGJlIHNob3duXG4gKiAgIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy50aGVtZV0gLSB7QGxpbmsgdGhlbWVDb25maWd9IGZvciBjdXN0b20gc3R5bGVcbiAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy51c2FnZVN0YXRpc3RpY3NdIC0gd2hldGhlciBzZW5kIGhvc3RuYW1lIHRvIGdvb2dsZSBhbmFseXRpY3MuIElmIHlvdSBkb24ndCB3YW50IHRvIHNlbmQgdGhlIGhvc3RuYW1lLCBwbGVhc2Ugc2V0IHRvIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCBTZWxlY3RCb3ggZnJvbSAnQHRvYXN0LXVpL3NlbGVjdC1ib3gnO1xuICogLy8gb3IgY29uc3QgU2VsZWN0Qm94ID0gcmVxdWlyZSgnQHRvYXN0LXVpL3NlbGVjdC1ib3gnKTtcbiAqIC8vIG9yIGNvbnN0IFNlbGVjdEJveCA9IHR1aS5TZWxlY3RCb3g7XG4gKlxuICogY29uc3Qgc2VsZWN0Qm94ID0gbmV3IFNlbGVjdEJveCgnI3NlbGVjdC1ib3gnLCB7XG4gKiAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIHNlbGVjdCBhbiBvcHRpb24uJyxcbiAqICAgZGF0YTogW1xuICogICAgIHtcbiAqICAgICAgIGxhYmVsOiAnRnJ1aXRzJyxcbiAqICAgICAgIGRhdGE6IFsgeyBsYWJlbDogJ0FwcGxlJywgdmFsdWU6ICdhcHBsZScgfSwgeyBsYWJlbDogJ0JhbmFuYScsIHZhbHVlOiAnYmFuYW5hJyB9IF1cbiAqICAgICB9LFxuICogICAgIHsgbGFiZWw6ICdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nLicsIHZhbHVlOiAnbm9uZScgfSxcbiAqICAgICB7XG4gKiAgICAgICBsYWJlbDogJ0NvbG9ycycsXG4gKiAgICAgICBkYXRhOiBbXG4gKiAgICAgICAgIHsgbGFiZWw6ICdSZWQnLCB2YWx1ZTogJ3JlZCcgfSxcbiAqICAgICAgICAgeyBsYWJlbDogJ1llbGxvdycsIHZhbHVlOiAneWVsbG93JyB9LFxuICogICAgICAgICB7IGxhYmVsOiAnR3JlZW4nLCB2YWx1ZTogJ2dyZWVuJywgZGlzYWJsZWQ6IHRydWUgfSxcbiAqICAgICAgICAgeyBsYWJlbDogJ0JsdWUnLCB2YWx1ZTogJ2JsdWUnLCBkaXNhYmxlZDogdHJ1ZSB9LFxuICogICAgICAgICB7IGxhYmVsOiAnUHVycGxlJywgdmFsdWU6ICdwdXJwbGUnIH1cbiAqICAgICAgIF1cbiAqICAgICB9XG4gKiAgIF0sXG4gKiAgIGF1dG9mb2N1czogdHJ1ZSxcbiAqICAgc2hvd0ljb246IGZhbHNlLFxuICogICB0aGVtZToge1xuICogICAgICdjb21tb24uYm9yZGVyJzogJzFweCBzb2xpZCBibGFjaycsXG4gKiAgICAgJ2NvbW1vbi5jb2xvcic6ICdibGFjaycsXG4gKiAgICAgJ2l0ZW0uaGlnaGxpZ2h0ZWQuYmFja2dyb3VuZCc6ICd5ZWxsb3cnXG4gKiAgIH1cbiAqIH0pO1xuICovXG5cbi8qKlxuICogU2VsZWN0Qm94IHByb3ZpZGVzIHNvbWUgY3VzdG9tIGV2ZW50czogKHtAbGluayBTZWxlY3RCb3gjZXZlbnQtb3BlbiBvcGVufSwge0BsaW5rIFNlbGVjdEJveCNldmVudC1jbG9zZSBjbG9zZX0sIHtAbGluayBTZWxlY3RCb3gjZXZlbnQtZGlzYWJsZSBkaXNhYmxlfSwge0BsaW5rIFNlbGVjdEJveCNldmVudC1lbmFibGUgZW5hYmxlfSwge0BsaW5rIFNlbGVjdEJveCNldmVudC1jaGFuZ2UgY2hhbmdlfSkuXG4gKiBZb3UgY2FuIGJpbmQgZXZlbnQgaGFuZGxlcnMgYnkge0BsaW5rIGh0dHBzOi8vbmhuLmdpdGh1Yi5pby90dWkuY29kZS1zbmlwcGV0L2xhdGVzdC9DdXN0b21FdmVudHMjb24gc2VsZWN0Qm94Lm9uKGV2ZW50TmFtZSwgaGFuZGxlcil9IGFuZCB1bmJpbmQgYnkge0BsaW5rIGh0dHBzOi8vbmhuLmdpdGh1Yi5pby90dWkuY29kZS1zbmlwcGV0L2xhdGVzdC9DdXN0b21FdmVudHMjb2ZmIHNlbGVjdEJveC5vZmYoZXZlbnROYW1lLCBoYW5kbGVyKX0uXG4gKiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vbmhuLmdpdGh1Yi5pby90dWkuY29kZS1zbmlwcGV0L2xhdGVzdC9DdXN0b21FdmVudHMgQ3VzdG9tRXZlbnRzfSBkb2N1bWVudCBhdCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL25obi90dWkuY29kZS1zbmlwcGV0IHR1aS1jb2RlLXNuaXBwZXR9IHRvIGtub3cgaG93IHRvIGJpbmQsIGFuZCB1bmJpbmQgY3VzdG9tIGV2ZW50cy5cbiAqIFRoZSBleGFtcGxlIHVzaW5nIGN1c3RvbSBldmVudHMgY2FuIGJlIGZvdW5kIHtAbGluayB0dXRvcmlhbC1leGFtcGxlMDMtY3VzdG9tLWV2ZW50cyBoZXJlfS5cbiAqIEB0eXBlZGVmIHtjbGFzc30gQ3VzdG9tRXZlbnRzXG4gKiBAZXhhbXBsZVxuICogLy8gYmluZCAnY2hhbmdlJyBldmVudFxuICogc2VsZWN0Qm94Lm9uKCdjaGFuZ2UnLCBldiA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCBpdGVtIGlzIGNoYW5nZWQgZnJvbSAke2V2LnByZXYuZ2V0TGFiZWwoKX0gdG8gJHtldi5jdXJyLmdldExhYmVsKCl9LmApO1xuICogfSk7XG4gKlxuICogLy8gYmluZCAnZGlzYWJsZScgYW5kIGVuYWJsZSBldmVudFxuICogY29uc3QgcHJpbnQgPSBldiA9PiB7XG4gKiAgIGxldCB0YXJnZXQgPSAnJztcbiAqICAgaWYgKGV2LnRhcmdldCBpbnN0YW5jZW9mIFNlbGVjdEJveCkge1xuICogICAgIHRhcmdldCA9ICdTZWxlY3QgYm94JztcbiAqICAgfSBlbHNlIHtcbiAqICAgICB0YXJnZXQgPSBldi50YXJnZXQuZ2V0TGFiZWwoKTtcbiAqICAgfVxuICogICBjb25zb2xlLmxvZyhgJHt0YXJnZXR9IGlzICR7ZXYudHlwZX0uYCk7XG4gKiB9XG4gKiBzZWxlY3RCb3gub24oe1xuICogICBkaXNhYmxlOiBwcmludCxcbiAqICAgZW5hYmxlOiBwcmludFxuICogfSk7XG4gKlxuICogLy8gdW5iaW5kIGNoYW5nZSBldmVudFxuICogc2VsZWN0Qm94Lm9mZignY2hhbmdlJyk7XG4gKlxuICogLy8gdW5iaW5kIGRpc2FibGUgZXZlbnRcbiAqIHNlbGVjdEJveC5vZmYoZGlzYWJsZSwgcHJpbnQpO1xuICpcbiAqIC8vIHVuYmluZCBhbGwgZXZlbnRzXG4gKiBzZWxlY3RCb3gub2ZmKCk7XG4gKi9cblxuLyoqXG4gKiBEYXRhIG9mIGFuIHtAbGluayBJdGVtIGl0ZW19LlxuICogSXQgaXMgdXNlZCBmb3IgY3JlYXRpbmcgYSB7QGxpbmsgU2VsZWN0Qm94fS5cbiAqIEB0eXBlZGVmIHtvYmplY3R9IGl0ZW1EYXRhIC0gZGF0YSBmb3Ige0BsaW5rIEl0ZW0gaXRlbX1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCAtIGxhYmVsIHRvIGJlIGRpc3BsYXllZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHZhbHVlIC0gdmFsdWUgb2YgYW4gaXRlbVxuICogQHByb3BlcnR5IHtib29sZWFufSBbZGlzYWJsZWQ9ZmFsc2VdIC0gd2hldGhlciBhbiBpdGVtIHNob3VsZCBiZSBkaXNhYmxlZCBvciBub3RcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3NlbGVjdGVkPWZhbHNlXSAtIHdoZXRoZXIgYW4gaXRlbSBzaG91bGQgYmUgcHJlLXNlbGVjdGVkIG9yIG5vdFxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGl0ZW1EYXRhID0ge1xuICogICBsYWJlbDogJ2Rpc2FibGVkIGl0ZW0nLFxuICogICB2YWx1ZTogJzAnLFxuICogICBkaXNhYmxlZDogdHJ1ZSxcbiAqICAgc2VsZWN0ZWQ6IGZhbHNlXG4gKiB9O1xuICovXG5cbi8qKlxuICogRGF0YSBvZiBhbiB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXB9LlxuICogSXQgaXMgdXNlZCBmb3IgY3JlYXRpbmcgYSB7QGxpbmsgU2VsZWN0Qm94fS5cbiAqIEl0ZW1Hcm91cCBzdXBwb3J0cyBvbmx5IDEgbGV2ZWwgY2hvaWNlcywgc28gaXQgZG9lcyBub3Qgd29yayB0byBhZGQgaXRlbSBncm91cHMgaW4gdGhlIGl0ZW0gZ3JvdXAuXG4gKiBUaGUgZXhhbXBsZSB1c2luZyBpdGVtIGdyb3VwcyBjYW4gYmUgZm91bmQge0BsaW5rIHR1dG9yaWFsLWV4YW1wbGUwMS1iYXNpYyBoZXJlfS5cbiAqIEB0eXBlZGVmIHtvYmplY3R9IGl0ZW1Hcm91cERhdGEgLSBkYXRhIGZvciB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXB9XG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgLSBsYWJlbCB0byBiZSBkaXNwbGF5ZWRcbiAqIEBwcm9wZXJ0eSB7YXJyYXl9IGRhdGEgLSB7QGxpbmsgaXRlbURhdGEgZGF0YSBmb3IgaXRlbX1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2Rpc2FibGVkPWZhbHNlXSAtIHdoZXRoZXIgYW4gaXRlbSBncm91cCBzaG91bGQgYmUgZGlzYWJsZWQgb3Igbm90XG4gKiBAZXhhbXBsZVxuICogY29uc3QgaXRlbUdyb3VwRGF0YSA9IHtcbiAqICAgbGFiZWw6ICdkaXNhYmxlZCBpdGVtcycsXG4gKiAgIGRhdGE6IFtcbiAqICAgICB7IGxhYmVsOiAnZGlzYWJsZScsIHZhbHVlOiAnZGlzYWJsZScgfSxcbiAqICAgICB7IGxhYmVsOiAnbm9uZScsIHZhbHVlOiAnMCcgfVxuICogICBdLFxuICogICBkaXNhYmxlZDogdHJ1ZVxuICogfTtcbiAqL1xuY2xhc3MgU2VsZWN0Qm94IHtcbiAgY29uc3RydWN0b3IoXG4gICAgY29udGFpbmVyLFxuICAgIHtcbiAgICAgIGRhdGEsXG4gICAgICBwbGFjZWhvbGRlciA9ICcnLFxuICAgICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgIGF1dG9mb2N1cyA9IGZhbHNlLFxuICAgICAgYXV0b2Nsb3NlID0gdHJ1ZSxcbiAgICAgIHNob3dJY29uID0gdHJ1ZSxcbiAgICAgIHRoZW1lLFxuICAgICAgdXNhZ2VTdGF0aXN0aWNzID0gdHJ1ZVxuICAgIH1cbiAgKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5lbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCB7IGNsYXNzTmFtZTogY2xzLlNFTEVDVF9CT1ggfSk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SW5wdXR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0KHsgcGxhY2Vob2xkZXIsIGRpc2FibGVkLCBzaG93SWNvbiB9KTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtEcm9wZG93bn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZHJvcGRvd24gPSBuZXcgRHJvcGRvd24oeyBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIGRhdGEgfSk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZGlhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvY2xvc2UgPSBhdXRvY2xvc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7VGhlbWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRoZW1lID0gaXNPYmplY3QodGhlbWUpID8gbmV3IFRoZW1lKHRoZW1lLCBjb250YWluZXIpIDogbnVsbDtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZSh7IHBsYWNlaG9sZGVyLCBkaXNhYmxlZCB9KTtcbiAgICB0aGlzLmFwcGVuZFRvQ29udGFpbmVyKGNvbnRhaW5lcik7XG5cbiAgICBpZiAoYXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKHVzYWdlU3RhdGlzdGljcykge1xuICAgICAgc2VuZEhvc3RuYW1lKCdzZWxlY3QtYm94JywgJ1VBLTEyOTk4NzQ2Mi0xJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgc2VsZWN0IGJveCBlbGVtZW50IHRvIHRoZSBjb250YWluZXJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IGNvbnRhaW5lciAtIGNvbnRhaW5lciBlbGVtZW50IG9yIHNlbGVjdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICBjb25zdCBjb250YWluZXJFbCA9IGlzSFRNTE5vZGUoY29udGFpbmVyKSA/IGNvbnRhaW5lciA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKTtcbiAgICBjb250YWluZXJFbC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZShvcHRpb25zKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW0oKTtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB0aGlzLmlucHV0LmNoYW5nZVRleHQoc2VsZWN0ZWRJdGVtKTtcbiAgICB9IGVsc2UgaWYgKCFvcHRpb25zLnBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLnNlbGVjdCgwKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICB0aGlzLmlucHV0LmFwcGVuZFRvQ29udGFpbmVyKHRoaXMuZWwpO1xuICAgIHRoaXMuZHJvcGRvd24uYXBwZW5kVG9Db250YWluZXIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBldmVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgb24oXG4gICAgICBkb2N1bWVudCxcbiAgICAgICdjbGljaycsXG4gICAgICBldiA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldChldik7XG4gICAgICAgIGlmICghY2xvc2VzdCh0YXJnZXQsIGAuJHtjbHMuU0VMRUNUX0JPWH1gKSAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIG9uKHRoaXMuZWwsICdjbGljaycsIGV2ID0+IHRoaXMuaGFuZGxlQ2xpY2soZXYsIGNscykpO1xuICAgIG9uKHRoaXMuZWwsICdtb3VzZW92ZXInLCBldiA9PiB0aGlzLmhhbmRsZU1vdXNlb3ZlcihldiwgY2xzKSk7XG4gICAgb24odGhpcy5lbCwgJ2tleWRvd24nLCBldiA9PiB0aGlzLmhhbmRsZUtleWRvd24oZXYsIGNscykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBldmVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVuYmluZEV2ZW50cygpIHtcbiAgICBvZmYoZG9jdW1lbnQsICdjbGljaycpO1xuICAgIG9mZih0aGlzLmVsLCAnY2xpY2sgbW91c2VvdmVyIGtleWRvd24nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2xpY2sgZXZlbnRzXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IGNscyAtIGNsc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlQ2xpY2soZXYsIHsgSU5QVVQsIElURU0gfSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldChldik7XG4gICAgY29uc3QgaXRlbUVsID0gY2xvc2VzdCh0YXJnZXQsIGAuJHtJVEVNfWApO1xuXG4gICAgaWYgKGl0ZW1FbCkge1xuICAgICAgdGhpcy5zZWxlY3QoaXRlbUVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcbiAgICB9IGVsc2UgaWYgKGNsb3Nlc3QodGFyZ2V0LCBgLiR7SU5QVVR9YCkpIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICAgIHRoaXMuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgbW91c2VvdmVyIGV2ZW50c1xuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjbHMgLSBjbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZU1vdXNlb3ZlcihldiwgeyBJVEVNIH0pIHtcbiAgICBpZiAodGhpcy5jaGVja01vdXNlbW92ZShldi5jbGllbnRYLCBldi5jbGllbnRZKSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGV2KTtcbiAgICAgIGNvbnN0IGl0ZW1FbCA9IGNsb3Nlc3QodGFyZ2V0LCBgLiR7SVRFTX1gKTtcblxuICAgICAgaWYgKGl0ZW1FbCkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZ2hsaWdodChpdGVtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHBvaW50ZXIgaXMgbW92ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBtb3VzZUV2ZW50LmNsaWVudFhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBtb3VzZUV2ZW50LmNsaWVudFlcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNoZWNrTW91c2Vtb3ZlKHgsIHkpIHtcbiAgICBpZiAodGhpcy5wcmV2WCAhPT0geCB8fCB0aGlzLnByZXZZICE9PSB5KSB7XG4gICAgICB0aGlzLnByZXZYID0geDtcbiAgICAgIHRoaXMucHJldlkgPSB5O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGtleWRvd24gZXZlbnRzXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IGNsYXNzTmFtZXMgLSBjbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZUtleWRvd24oZXYsIGNsYXNzTmFtZXMpIHtcbiAgICBjb25zdCBrZXkgPSBpZGVudGlmeUtleShldik7XG4gICAgY29uc3QgY2xvc2VLZXlzID0gWyd0YWInLCAnZXNjYXBlJ107XG4gICAgY29uc3QgYWN0aXZlS2V5cyA9IFsnYXJyb3dVcCcsICdhcnJvd0Rvd24nLCAnc3BhY2UnLCAnZW50ZXInXTtcblxuICAgIGlmIChjbG9zZUtleXMuaW5kZXhPZihrZXkpID4gLTEgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIGlmIChrZXkgPT09ICdlc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjdGl2ZUtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgIHByZXZlbnREZWZhdWx0KGV2KTtcbiAgICAgIHRoaXMuYWN0aXZhdGVLZXlkb3duKGV2LCBrZXksIGNsYXNzTmFtZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSBrZXlkb3duIGV2ZW50c1xuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBrZXkgcHJlc3NlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gY2xhc3NOYW1lcyAtIGNsc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWN0aXZhdGVLZXlkb3duKGV2LCBrZXksIHsgSVRFTSwgSU5QVVQgfSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldChldik7XG4gICAgY29uc3QgaXRlbUVsID0gY2xvc2VzdCh0YXJnZXQsIGAuJHtJVEVNfWApO1xuXG4gICAgaWYgKGtleSA9PT0gJ2VzY2FwZScgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW1FbCkge1xuICAgICAgdGhpcy5wcmVzc0tleU9uSXRlbShrZXksIGl0ZW1FbCk7XG4gICAgfSBlbHNlIGlmIChjbG9zZXN0KHRhcmdldCwgYC4ke0lOUFVUfWApKSB7XG4gICAgICB0aGlzLnByZXNzS2V5T25JbnB1dChrZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUga2V5ZG93biBldmVudHMgd2hlbiBpdCBvY2N1cnMgb24gdGhlIElucHV0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBrZXlcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByZXNzS2V5T25JbnB1dChrZXkpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2Fycm93VXAnIHx8IGtleSA9PT0gJ2Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuZHJvcGRvd24ubW92ZUhpZ2hsaWdodGVkSXRlbShrZXkgPT09ICdhcnJvd1VwJyA/IC0xIDogMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBrZXlkb3duIGV2ZW50cyB3aGVuIGl0IG9jY3VycyBvbiB0aGUgSXRlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0ga2V5XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW1FbCAtIEl0ZW0uZWxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByZXNzS2V5T25JdGVtKGtleSwgaXRlbUVsKSB7XG4gICAgaWYgKGtleSA9PT0gJ2VudGVyJyB8fCBrZXkgPT09ICdzcGFjZScpIHtcbiAgICAgIHRoaXMuc2VsZWN0QnlLZXlkb3duKGl0ZW1FbCk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdhcnJvd1VwJyB8fCBrZXkgPT09ICdhcnJvd0Rvd24nKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLm1vdmVIaWdobGlnaHRlZEl0ZW0oa2V5ID09PSAnYXJyb3dVcCcgPyAtMSA6IDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgYW4gSXRlbSBieSBzcGFjZSBvciBlbnRlclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtRWwgLSBJdGVtLmVsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZWxlY3RCeUtleWRvd24oaXRlbUVsKSB7XG4gICAgdGhpcy5zZWxlY3QoaXRlbUVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYSBzZWxlY3QgYm94LCB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXB9IG9yIHtAbGluayBJdGVtIGl0ZW19LlxuICAgKiBJZiBpdCB0YWtlcyBubyBhcmd1bWVudHMsIGEgc2VsZWN0IGJveCBpcyBkaXNhYmxlZC5cbiAgICogSWYgaXQgdGFrZXMgc3RyaW5nLCBhbiBpdGVtIHdpdGggdGhlIHNhbWUgdmFsdWUgYXMgdGhlIGFyZ3VtZW50IGlzIGRpc2FibGVkLlxuICAgKiBJZiBpdCB0YWtlcyBudW1iZXIsIGFuIGl0ZW0gd2l0aCB0aGUgc2FtZSBpbmRleCBhcyB0aGUgYXJndW1lbnQgaXMgZGlzYWJsZWQuXG4gICAqIElmIGl0IHRha2VzIEl0ZW0gb3IgSXRlbUdyb3VwLCBhbiBhcmd1bWVudCBpdHNlbGYgaXMgZGlzYWJsZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxJdGVtfEl0ZW1Hcm91cH0gdmFsdWUgLSBpZiBzdHJpbmcsIGZpbmQgYW4gSXRlbSBieSBpdHMgdmFsdWUuIGlmIG51bWJlciwgZmluZCBhbiBJdGVtIGJ5IGl0cyBpbmRleC5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmRpc2FibGUoKTsgLy8gc2VsZWN0IGJveCBpcyBkaXNhYmxlZC5cbiAgICogc2VsZWN0Qm94LmRpc2FibGUoMSk7IC8vIHNlY29uZCBpdGVtIGlzIGRpc2FibGVkLlxuICAgKiBzZWxlY3RCb3guZGlzYWJsZSgndmFsdWUnKSAvLyBpdGVtIHdoaWNoIG9mIHZhbHVlIGlzICd2YWx1ZScgaXMgZGlzYWJsZWQuXG4gICAqIHNlbGVjdEJveC5kaXNhYmxlKHNlbGVjdEJveC5nZXRTZWxlY3RlZEl0ZW0oKSk7IC8vIHNlbGVjdGVkIGl0ZW0gaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlKHZhbHVlKSB7XG4gICAgaWYgKCFpc0V4aXN0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbnB1dC5kaXNhYmxlKCk7XG4gICAgICB0aGlzLmRyb3Bkb3duLmRpc2FibGUoKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPY2N1cnMgd2hlbiBhIHNlbGVjdCBib3gsIHtAbGluayBJdGVtR3JvdXAgaXRlbSBncm91cH0gb3Ige0BsaW5rIEl0ZW0gaXRlbX0gaXMgZGlzYWJsZWQuXG4gICAgICAgKiBAZXZlbnQgU2VsZWN0Qm94I2Rpc2FibGVcbiAgICAgICAqIEB0eXBlIHtvYmplY3R9IGV2XG4gICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSAtIGV2ZW50IG5hbWUgKCdkaXNhYmxlJylcbiAgICAgICAqIEBwcm9wZXJ0eSB7U2VsZWN0Qm94fEl0ZW1Hcm91cHxJdGVtfSB0YXJnZXQgLSBkaXNhYmxlZCB0YXJnZXRcbiAgICAgICAqIEBleGFtcGxlXG4gICAgICAgKiBzZWxlY3RCb3gub24oJ2Rpc2FibGUnLCBldiA9PiB7XG4gICAgICAgKiAgIGNvbnNvbGUubG9nKGV2LnRhcmdldCk7XG4gICAgICAgKiB9KTtcbiAgICAgICAqL1xuICAgICAgdGhpcy5maXJlKCdkaXNhYmxlJywgeyB0eXBlOiAnZGlzYWJsZScsIHRhcmdldDogdGhpcyB9KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgSXRlbSB8fCB2YWx1ZSBpbnN0YW5jZW9mIEl0ZW1Hcm91cCkge1xuICAgICAgdmFsdWUuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5maXJlKCdkaXNhYmxlJywgeyB0eXBlOiAnZGlzYWJsZScsIHRhcmdldDogdmFsdWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkSXRlbSA9IHRoaXMuZHJvcGRvd24uZ2V0SXRlbSh2YWx1ZSk7XG4gICAgICBpZiAoZGlzYWJsZWRJdGVtKSB7XG4gICAgICAgIGRpc2FibGVkSXRlbS5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMuZmlyZSgnZGlzYWJsZScsIHsgdHlwZTogJ2Rpc2FibGUnLCB0YXJnZXQ6IGRpc2FibGVkSXRlbSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGEgc2VsZWN0IGJveCwge0BsaW5rIEl0ZW1Hcm91cCBpdGVtIGdyb3VwfSBvciB7QGxpbmsgSXRlbSBpdGVtfS5cbiAgICogSWYgaXQgdGFrZXMgbm8gYXJndW1lbnRzLCBhIHNlbGVjdCBib3ggaXMgZW5hYmxlZC5cbiAgICogSWYgaXQgdGFrZXMgc3RyaW5nLCBhbiBpdGVtIHdpdGggdGhlIHNhbWUgdmFsdWUgYXMgdGhlIGFyZ3VtZW50IGlzIGVuYWJsZWQuXG4gICAqIElmIGl0IHRha2VzIG51bWJlciwgYW4gaXRlbSB3aXRoIHRoZSBzYW1lIGluZGV4IGFzIHRoZSBhcmd1bWVudCBpcyBlbmFibGVkLlxuICAgKiBJZiBpdCB0YWtlcyBJdGVtIG9yIEl0ZW1Hcm91cCwgYW4gYXJndW1lbnQgaXRzZWxmIGlzIGVuYWJsZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxJdGVtfEl0ZW1Hcm91cH0gdmFsdWUgLSBpZiBzdHJpbmcsIGZpbmQgYW4gSXRlbSBieSBpdHMgdmFsdWUuIGlmIG51bWJlciwgZmluZCBhbiBJdGVtIGJ5IGl0cyBpbmRleC5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmVuYWJsZSgpOyAvLyBzZWxlY3QgYm94IGlzIGVuYWJsZWQuXG4gICAqIHNlbGVjdEJveC5lbmFibGUoMSk7IC8vIHNlY29uZCBpdGVtIGlzIGVuYWJsZWQuXG4gICAqIHNlbGVjdEJveC5lbmFibGUoJ3ZhbHVlJykgLy8gaXRlbSB3aGljaCBvZiB2YWx1ZSBpcyAndmFsdWUnIGlzIGVuYWJsZWQuXG4gICAqIHNlbGVjdEJveC5lbmFibGUoc2VsZWN0Qm94LmdldFNlbGVjdGVkSXRlbSgpKTsgLy8gc2VsZWN0ZWQgaXRlbSBpcyBlbmFibGVkLlxuICAgKi9cbiAgZW5hYmxlKHZhbHVlKSB7XG4gICAgaWYgKCFpc0V4aXN0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5wdXQuZW5hYmxlKCk7XG4gICAgICB0aGlzLmRyb3Bkb3duLmVuYWJsZSgpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9jY3VycyB3aGVuIGEgc2VsZWN0IGJveCwge0BsaW5rIEl0ZW1Hcm91cCBpdGVtIGdyb3VwfSBvciB7QGxpbmsgSXRlbSBpdGVtfSBpcyBlbmFibGVkLlxuICAgICAgICogQGV2ZW50IFNlbGVjdEJveCNlbmFibGVcbiAgICAgICAqIEB0eXBlIHtvYmplY3R9IGV2XG4gICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSAtIGV2ZW50IG5hbWUgKCdlbmFibGUnKVxuICAgICAgICogQHByb3BlcnR5IHtTZWxlY3RCb3h8SXRlbUdyb3VwfEl0ZW19IHRhcmdldCAtIGVuYWJsZSB0YXJnZXRcbiAgICAgICAqIEBleGFtcGxlXG4gICAgICAgKiBzZWxlY3RCb3gub24oJ2VuYWJsZScsIGV2ID0+IHtcbiAgICAgICAqICAgY29uc29sZS5sb2coZXYudGFyZ2V0KTtcbiAgICAgICAqIH0pO1xuICAgICAgICovXG4gICAgICB0aGlzLmZpcmUoJ2VuYWJsZScsIHsgdHlwZTogJ2VuYWJsZScsIHRhcmdldDogdGhpcyB9KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgSXRlbSB8fCB2YWx1ZSBpbnN0YW5jZW9mIEl0ZW1Hcm91cCkge1xuICAgICAgdmFsdWUuZW5hYmxlKCk7XG4gICAgICB0aGlzLmZpcmUoJ2VuYWJsZScsIHsgdHlwZTogJ2VuYWJsZScsIHRhcmdldDogdmFsdWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkSXRlbSA9IHRoaXMuZHJvcGRvd24uZ2V0SXRlbSh2YWx1ZSk7XG4gICAgICBpZiAoZGlzYWJsZWRJdGVtKSB7XG4gICAgICAgIGRpc2FibGVkSXRlbS5lbmFibGUoKTtcbiAgICAgICAgdGhpcy5maXJlKCdlbmFibGUnLCB7IHR5cGU6ICdlbmFibGUnLCB0YXJnZXQ6IGRpc2FibGVkSXRlbSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBhIGRyb3Bkb3duIGxpc3QuXG4gICAqIEBleGFtcGxlXG4gICAqIHNlbGVjdEJveC5vcGVuKCk7XG4gICAqL1xuICBvcGVuKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgdGhpcy5kcm9wZG93bi5vcGVuKCk7XG4gICAgICB0aGlzLmlucHV0Lm9wZW4oKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPY2N1cnMgd2hlbiBhIHNlbGVjdCBib3ggb3BlbnMuXG4gICAgICAgKiBAZXZlbnQgU2VsZWN0Qm94I29wZW5cbiAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgbmFtZSAoJ29wZW4nKVxuICAgICAgICogQGV4YW1wbGVcbiAgICAgICAqIHNlbGVjdEJveC5vbignb3BlbicsIGV2ID0+IHtcbiAgICAgICAqICAgY29uc29sZS5sb2coJ29wZW4nKTtcbiAgICAgICAqIH0pO1xuICAgICAgICovXG4gICAgICB0aGlzLmZpcmUoJ29wZW4nLCB7IHR5cGU6ICdvcGVuJyB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgYSBkcm9wZG93biBsaXN0LlxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guY2xvc2UoKTtcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5kcm9wZG93bi5jbG9zZSgpO1xuICAgIHRoaXMuaW5wdXQuY2xvc2UoKTtcblxuICAgIC8qKlxuICAgICAqIE9jY3VycyB3aGVuIGEgc2VsZWN0IGJveCBjbG9zZXMuXG4gICAgICogQGV2ZW50IFNlbGVjdEJveCNjbG9zZVxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgbmFtZSAoJ2Nsb3NlJylcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHNlbGVjdEJveC5vbignY2xvc2UnLCBldiA9PiB7XG4gICAgICogICBjb25zb2xlLmxvZygnY2xvc2UnKTtcbiAgICAgKiB9KTtcbiAgICAgKi9cbiAgICB0aGlzLmZpcmUoJ2Nsb3NlJywgeyB0eXBlOiAnY2xvc2UnIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBhIGRyb3Bkb3duIGxpc3QuXG4gICAqIEBleGFtcGxlXG4gICAqIHNlbGVjdEJveC50b2dnbGUoKTtcbiAgICovXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzIHRvIHNlbGVjdCBib3guXG4gICAqIEBleGFtcGxlXG4gICAqIHNlbGVjdEJveC5mb2N1cygpO1xuICAgKi9cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhbiB7QGxpbmsgSXRlbSBpdGVtfS5cbiAgICogSWYgaXQgdGFrZXMgc3RyaW5nLCBhbiBpdGVtIHdpdGggdGhlIHNhbWUgdmFsdWUgYXMgdGhlIGFyZ3VtZW50IGlzIHNlbGVjdGVkLlxuICAgKiBJZiBpdCB0YWtlcyBudW1iZXIsIGFuIGl0ZW0gd2l0aCB0aGUgc2FtZSBpbmRleCBhcyB0aGUgYXJndW1lbnQgaXMgc2VsZWN0ZWQuXG4gICAqIElmIGl0IHRha2VzIEl0ZW0sIGFuIGFyZ3VtZW50IGl0c2VsZiBpcyBzZWxlY3RlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfEl0ZW19IHZhbHVlIC0gaWYgc3RyaW5nLCBmaW5kIGFuIEl0ZW0gYnkgaXRzIHZhbHVlLiBpZiBudW1iZXIsIGZpbmQgYW4gSXRlbSBieSBpdHMgaW5kZXguXG4gICAqIEByZXR1cm4ge0l0ZW19IC0gc2VsZWN0ZWQgSXRlbS5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LnNlbGVjdCgxKTsgLy8gc2Vjb25kIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAqIHNlbGVjdEJveC5zZWxlY3QoJ3ZhbHVlJykgLy8gaXRlbSB3aGljaCBvZiB2YWx1ZSBpcyAndmFsdWUnIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgc2VsZWN0KHZhbHVlKSB7XG4gICAgbGV0IHNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgY29uc3QgcHJldlNlbGVjdGVkSXRlbSA9IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtKCk7XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHNlbGVjdGVkSXRlbSA9IHRoaXMuZHJvcGRvd24uc2VsZWN0KHZhbHVlKTtcblxuICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICB0aGlzLmlucHV0LmNoYW5nZVRleHQoc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2NjdXJzIHdoZW4gYW4ge0BsaW5rIEl0ZW0gaXRlbX0gaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqIEBldmVudCBTZWxlY3RCb3gjc2VsZWN0XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9IGV2XG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgbmFtZSAoJ3NlbGVjdCcpXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7SXRlbX0gdGFyZ2V0IC0gc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgKiBAaWdub3JlXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHNlbGVjdEJveC5vbignc2VsZWN0JywgZXYgPT4ge1xuICAgICAgICAgKiAgIGNvbnNvbGUubG9nKGAke2V2LnRhcmdldC5nZXRMYWJlbCgpfSBpcyBzZWxlY3RlZC5gKTtcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZpcmUoJ3NlbGVjdCcsIHsgdHlwZTogJ3NlbGVjdCcsIHRhcmdldDogc2VsZWN0ZWRJdGVtIH0pO1xuXG4gICAgICAgIGlmIChwcmV2U2VsZWN0ZWRJdGVtICE9PSBzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBPY2N1cnMgd2hlbiBhIHNlbGVjdGVkIHtAbGluayBJdGVtIGl0ZW19IGlzIGNoYW5nZWQuXG4gICAgICAgICAgICogQGV2ZW50IFNlbGVjdEJveCNjaGFuZ2VcbiAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBldlxuICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgbmFtZSAoJ2NoYW5nZScpXG4gICAgICAgICAgICogQHByb3BlcnR5IHtJdGVtfSBwcmV2IC0gcHJldmlvdXMgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgICAqIEBwcm9wZXJ0eSB7SXRlbX0gY3VyciAtIGN1cnJlbnQgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAgICogc2VsZWN0Qm94Lm9uKCdjaGFuZ2UnLCBldiA9PiB7XG4gICAgICAgICAgICogICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgaXRlbSBpcyBjaGFuZ2VkIGZyb20gJHtldi5wcmV2LmdldExhYmVsKCl9IHRvICR7ZXYuY3Vyci5nZXRMYWJlbCgpfS5gKTtcbiAgICAgICAgICAgKiB9KTtcbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0aGlzLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjaGFuZ2UnLFxuICAgICAgICAgICAgcHJldjogcHJldlNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgIGN1cnI6IHNlbGVjdGVkSXRlbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b2Nsb3NlICYmIHRoaXMub3BlbmVkKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkSXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlbGVjdCBhbiBpdGVtLlxuICAgKiBJZiBzZWxlY3RCb3ggaGFzIGEgcGxhY2Vob2xkZXIsIHRoZSBpbnB1dCdzIHRleHQgaXMgYSBwbGFjZWhvbGRlci5cbiAgICogSWYgbm8gcGxhY2Vob2xkZXIsIHRocyBpbnB1dCBpcyBlbXB0eS5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmRlc2VsZWN0KCk7XG4gICAqL1xuICBkZXNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZHJvcGRvd24uZGVzZWxlY3QoKTtcbiAgICAgIHRoaXMuaW5wdXQuY2hhbmdlVGV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHNlbGVjdGVkIHtAbGluayBJdGVtIGl0ZW19LlxuICAgKiBAcmV0dXJuIHtJdGVtfVxuICAgKi9cbiAgZ2V0U2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLmdldFNlbGVjdGVkSXRlbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwge0BsaW5rIEl0ZW0gaXRlbXN9IHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gICAqIElmIGZpbHRlciBmdW5jdGlvbiBpcyBub3QgcGFzc2VkLCBpdCByZXR1cm5zIGFsbCBpdGVtcy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBmaWx0ZXIgaXRlbXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gZmluZC4gSWYgaXQgaXMgbm90IHBhc3NlZCwgaXRlcmF0ZSBhbGwgaXRlbXMuXG4gICAqIEByZXR1cm4ge2FycmF5PEl0ZW0+fVxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZ2V0SXRlbXMoKTsgLy8gYWxsIGl0ZW1zXG4gICAqIHNlbGVjdEJveC5nZXRJdGVtcyhpdGVtID0+IHtcbiAgICogIHJldHVybiAhaXRlbS5pc0Rpc2FibGVkKCk7XG4gICAqIH0pOyAvLyBhbGwgZW5hYmxlZCBpdGVtc1xuICAgKi9cbiAgZ2V0SXRlbXMoY2FsbGJhY2ssIG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLmdldEl0ZW1zKGNhbGxiYWNrLCBudW1iZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiB7QGxpbmsgSXRlbSBpdGVtfSBieSBpdHMgaW5kZXggb3IgdmFsdWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdmFsdWUgLSBpZiBzdHJpbmcsIHRoZSBJdGVtJ3MgdmFsdWUuIGlmIG51bWJlciwgdGhlIEl0ZW0ncyBpbmRleC5cbiAgICogQHJldHVybiB7SXRlbX1cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmdldEl0ZW0oMCk7IC8vIGZpcnN0IGl0ZW1cbiAgICogc2VsZWN0Qm94LmdldEl0ZW0oJ3ZhbHVlJykgLy8gaXRlbSB3aGljaCBvZiB2YWx1ZSBpcyAndmFsdWUnXG4gICAqL1xuICBnZXRJdGVtKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24uZ2V0SXRlbSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXBzfSB0aGF0IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICAgKiBJZiBmaWx0ZXIgZnVuY3Rpb24gaXMgbm90IHBhc3NlZCwgaXQgcmV0dXJucyBhbGwgaXRlbSBncm91cHMuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZmlsdGVyIGl0ZW0gZ3JvdXBzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIGZpbmQuIElmIGl0IGlzIG5vdCBwYXNzZWQsIGl0ZXJhdGUgYWxsIGl0ZW0gZ3JvdXBzLlxuICAgKiBAcmV0dXJuIHthcnJheTxJdGVtR3JvdXA+fVxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZ2V0SXRlbUdyb3VwcygpOyAvLyBhbGwgaXRlbSBncm91cHNcbiAgICogc2VsZWN0Qm94LmdldEl0ZW1Hcm91cHMoaXRlbUdyb3VwID0+IHtcbiAgICogIHJldHVybiAhaXRlbUdyb3VwLmlzRGlzYWJsZWQoKTtcbiAgICogfSk7IC8vIGFsbCBlbmFibGVkIGl0ZW0gZ3JvdXBzXG4gICAqL1xuICBnZXRJdGVtR3JvdXBzKGNhbGxiYWNrLCBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5nZXRJdGVtR3JvdXBzKGNhbGxiYWNrLCBudW1iZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXB9IGJ5IGl0cyBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gZ3JvdXBJbmRleCBvZiB0aGUgSXRlbUdyb3VwXG4gICAqIEByZXR1cm4ge0l0ZW1Hcm91cH1cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmdldEl0ZW1Hcm91cCgwKTsgLy8gZmlyc3QgaXRlbSBncm91cFxuICAgKi9cbiAgZ2V0SXRlbUdyb3VwKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24uZ2V0SXRlbUdyb3VwKGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IGEgc2VsZWN0IGJveC5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmRlc3Ryb3koKTtcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgIHRoaXMuaW5wdXQuZGVzdHJveSgpO1xuICAgIHRoaXMuZHJvcGRvd24uZGVzdHJveSgpO1xuICAgIGlmICh0aGlzLnRoZW1lKSB7XG4gICAgICB0aGlzLnRoZW1lLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICByZW1vdmVFbGVtZW50KHRoaXMuZWwpO1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5lbCA9IHRoaXMuaW5wdXQgPSB0aGlzLmRyb3Bkb3duID0gdGhpcy50aGVtZSA9IG51bGw7XG4gIH1cbn1cblxuQ3VzdG9tRXZlbnRzLm1peGluKFNlbGVjdEJveCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEJveDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGVtZVxuICovXG5cbmltcG9ydCBmb3JFYWNoT3duUHJvcGVydGllcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vZm9yRWFjaE93blByb3BlcnRpZXMnO1xuaW1wb3J0IHJlbW92ZUVsZW1lbnQgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL3JlbW92ZUVsZW1lbnQnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzQXJyYXknO1xuaW1wb3J0IGlzQm9vbGVhbiBmcm9tICd0dWktY29kZS1zbmlwcGV0L3R5cGUvaXNCb29sZWFuJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICd0dWktY29kZS1zbmlwcGV0L3R5cGUvaXNTdHJpbmcnO1xuaW1wb3J0IHsgdHJhbnNmb3JtLCBnZXRTZWxlY3RvciB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgY2xzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IGJhc2VUaGVtZSBmcm9tICcuL3RoZW1lQ29uZmlnJztcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjdXN0b21UaGVtZSAtIHRoZW1lIG9iamVjdCBmb3IgY3VzdG9tIHN0eWxlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fHN0cmluZ30gY29udGFpbmVyIC0gY29udGFpbmVyIGVsZW1lbnQgb3Igc2VsZWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWUge1xuICBjb25zdHJ1Y3RvcihjdXN0b21UaGVtZSwgY29udGFpbmVyKSB7XG4gICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9IGdldFNlbGVjdG9yKGNvbnRhaW5lcik7XG4gICAgdGhpcy5jc3NTdHJpbmcgPSB0aGlzLmJ1aWxkQWxsKHRyYW5zZm9ybShjdXN0b21UaGVtZSkpO1xuICAgIHRoaXMuc3R5bGVFbCA9IHRoaXMuY3JlYXRlU3R5bGVFbGVtZW50KCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHRoaXMuc3R5bGVFbCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3R5bGUgZWxlbWVudFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZVN0eWxlRWxlbWVudCgpIHtcbiAgICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gICAgaWYgKHN0eWxlRWwuc3R5bGVTaGVldCkge1xuICAgICAgc3R5bGVFbC5zdHlsZVNoZWV0LmNzc1RleHQgPSB0aGlzLmNzc1N0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmNzc1N0cmluZykpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZUVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNzcyBzdHJpbmdzIGZvciBJbnB1dCwgRHJvcGRvd24sIEl0ZW1Hcm91cCwgYW5kIEl0ZW0uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0aGVtZSAtIHRoZW1lIG9iamVjdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZEFsbCh0aGVtZSkge1xuICAgIGNvbnN0IGV4Y2x1ZGUgPSB7IGJvcmRlcjogJycsIGJhY2tncm91bmQ6ICcnIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5idWlsZElucHV0KHsgLi4udGhlbWUuY29tbW9uLCAuLi50aGVtZS5pbnB1dCB9KSArXG4gICAgICB0aGlzLmJ1aWxkRHJvcGRvd24oeyAuLi50aGVtZS5jb21tb24sIGJvcmRlclRvcDogJzAnLCAuLi50aGVtZS5kcm9wZG93biwgaGVpZ2h0OiAnJyB9KSArXG4gICAgICB0aGlzLmJ1aWxkSXRlbUdyb3VwKFxuICAgICAgICB0aGVtZS5pdGVtR3JvdXBcbiAgICAgICAgICA/IHsgLi4udGhlbWUuY29tbW9uLCAuLi5leGNsdWRlLCAuLi50aGVtZS5pdGVtR3JvdXAubGFiZWwgfVxuICAgICAgICAgIDogeyAuLi50aGVtZS5jb21tb24sIC4uLmV4Y2x1ZGUgfVxuICAgICAgKSArXG4gICAgICB0aGlzLmJ1aWxkSXRlbShcbiAgICAgICAgdGhlbWUuaXRlbUdyb3VwXG4gICAgICAgICAgPyB7IC4uLnRoZW1lLmNvbW1vbiwgLi4uZXhjbHVkZSwgLi4udGhlbWUuaXRlbSwgaW5JdGVtR3JvdXA6IHRoZW1lLml0ZW1Hcm91cC5pdGVtcyB9XG4gICAgICAgICAgOiB7IC4uLnRoZW1lLmNvbW1vbiwgLi4uZXhjbHVkZSwgLi4udGhlbWUuaXRlbSB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBjc3Mgc3RyaW5ncyBmb3IgSW5wdXRcbiAgICogQHBhcmFtIHtvYmplY3R9IHRoZW1lIC0gdGhlbWUgb2JqZWN0XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkSW5wdXQodGhlbWUpIHtcbiAgICB0aGVtZS5wbGFjZWhvbGRlciA9IHt9O1xuICAgIGlmICh0aGVtZS5oZWlnaHQpIHtcbiAgICAgIHRoZW1lLnBsYWNlaG9sZGVyLmxpbmVIZWlnaHQgPSB0aGVtZS5oZWlnaHQ7XG4gICAgfVxuICAgIGlmIChpc0Jvb2xlYW4odGhlbWUuc2hvd0ljb24pICYmICF0aGVtZS5zaG93SWNvbikge1xuICAgICAgdGhlbWUuaWNvbiA9IHsgZGlzcGxheTogJ25vbmUnIH07XG4gICAgICB0aGVtZS5wbGFjZWhvbGRlci53aWR0aCA9ICcxMDAlJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhjbHMuSU5QVVQsIHRoZW1lKSArXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKFtjbHMuSU5QVVQsIGNscy5PUEVOXSwgdGhlbWUub3BlbikgK1xuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhbY2xzLklOUFVULCBjbHMuRElTQUJMRURdLCB0aGVtZS5kaXNhYmxlZCkgK1xuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhjbHMuUExBQ0VIT0xERVIsIHRoZW1lLnBsYWNlaG9sZGVyKSArXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKGNscy5JQ09OLCB0aGVtZS5pY29uKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgY3NzIHN0cmluZ3MgZm9yIERyb3Bkb3duXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0aGVtZSAtIHRoZW1lIG9iamVjdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZERyb3Bkb3duKHRoZW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRDc3NTdHJpbmcoY2xzLkRST1BET1dOLCB0aGVtZSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgY3NzIHN0cmluZ3MgZm9yIEl0ZW1Hcm91cFxuICAgKiBAcGFyYW0ge29iamVjdH0gdGhlbWUgLSB0aGVtZSBvYmplY3RcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGRJdGVtR3JvdXAodGhlbWUpIHtcbiAgICBpZiAodGhlbWUuaGVpZ2h0KSB7XG4gICAgICB0aGVtZS5saW5lSGVpZ2h0ID0gdGhlbWUuaGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKGNscy5JVEVNX0dST1VQX0xBQkVMLCB0aGVtZSkgK1xuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhbY2xzLklURU1fR1JPVVBfTEFCRUwsIGNscy5ESVNBQkxFRF0sIHRoZW1lLmRpc2FibGVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgY3NzIHN0cmluZ3MgZm9yIEl0ZW1cbiAgICogQHBhcmFtIHtvYmplY3R9IHRoZW1lIC0gdGhlbWUgb2JqZWN0XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkSXRlbSh0aGVtZSkge1xuICAgIGlmICh0aGVtZS5oZWlnaHQpIHtcbiAgICAgIHRoZW1lLmxpbmVIZWlnaHQgPSB0aGVtZS5oZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGVtZS5zZWxlY3RlZCkge1xuICAgICAgY29uc3QgYmFzZSA9IHRyYW5zZm9ybShiYXNlVGhlbWUpO1xuXG4gICAgICB0aGVtZS5zZWxlY3RlZCA9IHsgLi4uYmFzZS5pdGVtLnNlbGVjdGVkLCAuLi50aGVtZS5zZWxlY3RlZCB9O1xuICAgICAgdGhlbWUuZGlzYWJsZWQgPSB7IC4uLmJhc2UuaXRlbS5kaXNhYmxlZCwgLi4udGhlbWUuZGlzYWJsZWQgfTtcbiAgICAgIHRoZW1lLmhpZ2hsaWdodGVkID0geyAuLi5iYXNlLml0ZW0uaGlnaGxpZ2h0ZWQsIC4uLnRoZW1lLmhpZ2hsaWdodGVkIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoY2xzLklURU0sIHRoZW1lKSArXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKFtjbHMuSVRFTSwgY2xzLlNFTEVDVEVEXSwgdGhlbWUuc2VsZWN0ZWQpICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoW2Nscy5JVEVNLCBjbHMuRElTQUJMRURdLCB0aGVtZS5kaXNhYmxlZCkgK1xuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhbY2xzLklURU0sIGNscy5ISUdITElHSFRdLCB0aGVtZS5oaWdobGlnaHRlZCkgK1xuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhgJHtjbHMuSVRFTV9HUk9VUH0+LiR7Y2xzLklURU19YCwgdGhlbWUuaW5JdGVtR3JvdXApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBjc3Mgc3RyaW5nc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gY2xhc3NOYW1lXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0aGVtZSAtIHRoZW1lIG9iamVjdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZENzc1N0cmluZyhjbGFzc05hbWUsIHRoZW1lKSB7XG4gICAgaWYgKGlzQXJyYXkoY2xhc3NOYW1lKSkge1xuICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLmpvaW4oJy4nKTtcbiAgICB9XG4gICAgY2xhc3NOYW1lID0gYC4ke2NsYXNzTmFtZX1gO1xuXG4gICAgbGV0IGNzc1N0cmluZyA9ICcnO1xuICAgIGZvckVhY2hPd25Qcm9wZXJ0aWVzKHRoZW1lLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiB2YWx1ZSkge1xuICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY3NzU3RyaW5nICs9IGAke2tleX06JHt2YWx1ZX07YDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjc3NTdHJpbmcgPyBgJHt0aGlzLmNvbnRhaW5lclNlbGVjdG9yfSAke2NsYXNzTmFtZX17JHtjc3NTdHJpbmd9fWAgOiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IGEgdGhlbWVcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgcmVtb3ZlRWxlbWVudCh0aGlzLnN0eWxlRWwpO1xuICAgIHRoaXMuc3R5bGVFbCA9IG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGVtZSBjb25maWd1cmF0aW9uXG4gKi9cblxuLyoqXG4gKiBUaGVtZSBjb25maWd1cmF0aW9uLlxuICogXCJjb21tb25cIiBwcmVmaXggaXMgZm9yIHRoZSBlbnRpcmUgc2VsZWN0IGJveC4gSXRzIHByb3BlcnRpZXMgYXJlIG92ZXJyaWRlbiBieSBcImlucHV0XCIsIFwiZHJvcGRvd25cIiwgXCJpdGVtR3JvdXBcIiwgYW5kIFwiaXRlbVwiLlxuICogVGhlIGV4YW1wbGUgdXNpbmcgdGhlbWUgY2FuIGJlIGZvdW5kIHtAbGluayB0dXRvcmlhbC1leGFtcGxlMDItdGhlbWUgaGVyZX0uXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSB0aGVtZUNvbmZpZ1xuICogQGV4YW1wbGVcbiAqIGNvbnN0IHRoZW1lQ29uZmlnID0ge1xuICogICAnY29tbW9uLmJvcmRlcic6ICcxcHggc29saWQgI2RkZCcsIC8vIGJvcmRlciBmb3IgaW5wdXQgYW5kIGRyb3Bkb3duIChub3QgaXRlbUdyb3VwIGFuZCBpdGVtKVxuICogICAnY29tbW9uLmJhY2tncm91bmQnOiAnI2ZmZicsXG4gKiAgICdjb21tb24uY29sb3InOiAnIzMzMycsXG4gKiAgICdjb21tb24ud2lkdGgnOiAnMTAwJScsXG4gKiAgICdjb21tb24uaGVpZ2h0JzogJzI5cHgnLCAvLyBoZWlnaHQgZm9yIGl0ZW0gYW5kIGl0ZW1Hcm91cCBsYWJlbCAobm90IGVudGlyZSBzZWxlY3QgYm94KVxuICpcbiAqICAgJ2NvbW1vbi5kaXNhYmxlZC5iYWNrZ3JvdW5kJzogJyNmOWY5ZjknLFxuICogICAnY29tbW9uLmRpc2FibGVkLmNvbG9yJzogJ2M4YzhjOCcsXG4gKlxuICogICAvLyBJbnB1dFxuICogICAnaW5wdXQuYm9yZGVyJzogJzFweCBzb2xpZCAjZGRkJyxcbiAqICAgJ2lucHV0LmJvcmRlckJvdHRvbSc6ICcnLFxuICogICAnaW5wdXQuYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2lucHV0LmNvbG9yJzogJyMzMzMnLFxuICogICAnaW5wdXQud2lkdGgnOiAnMTAwJScsXG4gKiAgICdpbnB1dC5oZWlnaHQnOiAnMjlweCcsXG4gKlxuICogICAvLyBJbnB1dCB3aGVuIGRyb3Bkb3duIGlzIG9wZW5cbiAqICAgJ2lucHV0Lm9wZW4uYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAqICAgJ2lucHV0Lm9wZW4uYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2lucHV0Lm9wZW4uY29sb3InOiAnIzMzMycsXG4gKlxuICogICAvLyBJbnB1dCB3aGVuIHNlbGVjdGJveCBpcyBkaXNhYmxlZFxuICogICAnaW5wdXQuZGlzYWJsZWQuYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAqICAgJ2lucHV0LmRpc2FibGVkLmJhY2tncm91bmQnOiAnI2Y5ZjlmOScsXG4gKiAgICdpbnB1dC5kaXNhYmxlZC5jb2xvcic6ICcjYzhjOGM4JyxcbiAqXG4gKiAgIC8vIERyb3Bkb3duXG4gKiAgICdkcm9wZG93bi5ib3JkZXInOiAnMXB4IHNvbGlkICNhYWEnLFxuICogICAnZHJvcGRvd24uYm9yZGVyVG9wJzogJzAnLFxuICogICAnZHJvcGRvd24uYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2Ryb3Bkb3duLndpZHRoJzogJzEwMCUnLFxuICogICAnZHJvcGRvd24ubWF4SGVpZ2h0JzogJycsXG4gKlxuICogICAvLyBJdGVtR3JvdXAncyBpdGVtc1xuICogICAvLyBpZiB5b3Ugd2FudCB0byBzZXQgdGhlIHNhbWUgcGFkZGluZyB2YWx1ZSBhcyB0aGUgaXRlbUdyb3VwLmxhYmVsLCBzZXQgdG8gJzhweCcuXG4gKiAgICdpdGVtR3JvdXAuaXRlbXMucGFkZGluZ0xlZnQnOiAnMjBweCcsXG4gKlxuICogICAvLyBJdGVtR3JvdXAncyBsYWJlbFxuICogICAnaXRlbUdyb3VwLmxhYmVsLmJvcmRlcic6ICcwJyxcbiAqICAgJ2l0ZW1Hcm91cC5sYWJlbC5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICogICAnaXRlbUdyb3VwLmxhYmVsLmNvbG9yJzogJyMzMzMnLFxuICogICAnaXRlbUdyb3VwLmxhYmVsLmZvbnRXZWlnaHQnOiAnYm9sZCcsXG4gKiAgICdpdGVtR3JvdXAubGFiZWwuaGVpZ2h0JzogJzI5cHgnLFxuICpcbiAqICAgLy8gZGlzYWJsZWQgSXRlbUdyb3VwJ3MgbGFiZWxcbiAqICAgJ2l0ZW1Hcm91cC5sYWJlbC5kaXNhYmxlZC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtR3JvdXAubGFiZWwuZGlzYWJsZWQuYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2l0ZW1Hcm91cC5sYWJlbC5kaXNhYmxlZC5jb2xvcic6ICcjMzMzJyxcbiAqXG4gKiAgIC8vIEl0ZW1cbiAqICAgJ2l0ZW0uYm9yZGVyJzogJzAnLFxuICogICAnaXRlbS5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICogICAnaXRlbS5jb2xvcic6ICcjMzMzJyxcbiAqICAgJ2l0ZW0uaGVpZ2h0JzogJzI5cHgnLFxuICpcbiAqICAgLy8gc2VsZWN0ZWQgSXRlbVxuICogICAnaXRlbS5zZWxlY3RlZC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtLnNlbGVjdGVkLmJhY2tncm91bmQnOiAnI2Y0ZjRmNCcsXG4gKiAgICdpdGVtLnNlbGVjdGVkLmNvbG9yJzogJyMzMzMnLFxuICpcbiAqICAgLy8gZGlzYWJsZWQgSXRlbVxuICogICAnaXRlbS5kaXNhYmxlZC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtLmRpc2FibGVkLmJhY2tncm91bmQnOiAnI2Y5ZjlmOScsXG4gKiAgICdpdGVtLmRpc2FibGVkLmNvbG9yJzogJyNjOGM4YzgnLFxuICpcbiAqICAgLy8gaGlnaGxpZ2h0ZWQgSXRlbVxuICogICAnaXRlbS5oaWdobGlnaHRlZC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtLmhpZ2hsaWdodGVkLmJhY2tncm91bmQnOiAnI2U1ZjZmZicsXG4gKiAgICdpdGVtLmhpZ2hsaWdodGVkLmNvbG9yJzogJyMzMzMnXG4gKiB9O1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICdjb21tb24uYm9yZGVyJzogJzFweCBzb2xpZCAjZGRkJywgLy8gYm9yZGVyIGZvciBpbnB1dCBhbmQgZHJvcGRvd24gKG5vdCBpdGVtR3JvdXAgYW5kIGl0ZW0pXG4gICdjb21tb24uYmFja2dyb3VuZCc6ICcjZmZmJyxcbiAgJ2NvbW1vbi5jb2xvcic6ICcjMzMzJyxcbiAgJ2NvbW1vbi53aWR0aCc6ICcxMDAlJyxcbiAgJ2NvbW1vbi5oZWlnaHQnOiAnMjlweCcsIC8vIGhlaWdodCBmb3IgaXRlbSBhbmQgaXRlbUdyb3VwIGxhYmVsIChub3QgZW50aXJlIHNlbGVjdCBib3gpXG5cbiAgJ2NvbW1vbi5kaXNhYmxlZC5iYWNrZ3JvdW5kJzogJyNmOWY5ZjknLFxuICAnY29tbW9uLmRpc2FibGVkLmNvbG9yJzogJ2M4YzhjOCcsXG5cbiAgLy8gSW5wdXRcbiAgJ2lucHV0LmJvcmRlcic6ICcxcHggc29saWQgI2RkZCcsXG4gICdpbnB1dC5ib3JkZXJCb3R0b20nOiAnJyxcbiAgJ2lucHV0LmJhY2tncm91bmQnOiAnaW5oZXJpdCcsXG4gICdpbnB1dC5jb2xvcic6ICcjMzMzJyxcbiAgJ2lucHV0LndpZHRoJzogJzEwMCUnLFxuICAnaW5wdXQuaGVpZ2h0JzogJzI5cHgnLFxuXG4gIC8vIElucHV0IHdoZW4gZHJvcGRvd24gaXMgb3BlblxuICAnaW5wdXQub3Blbi5ib3JkZXInOiAnMXB4IHNvbGlkICNhYWEnLFxuICAnaW5wdXQub3Blbi5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICAnaW5wdXQub3Blbi5jb2xvcic6ICcjMzMzJyxcblxuICAvLyBJbnB1dCB3aGVuIHNlbGVjdGJveCBpcyBkaXNhYmxlZFxuICAnaW5wdXQuZGlzYWJsZWQuYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAgJ2lucHV0LmRpc2FibGVkLmJhY2tncm91bmQnOiAnI2Y5ZjlmOScsXG4gICdpbnB1dC5kaXNhYmxlZC5jb2xvcic6ICcjYzhjOGM4JyxcblxuICAvLyBEcm9wZG93blxuICAnZHJvcGRvd24uYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAgJ2Ryb3Bkb3duLmJvcmRlclRvcCc6ICcwJyxcbiAgJ2Ryb3Bkb3duLmJhY2tncm91bmQnOiAnaW5oZXJpdCcsXG4gICdkcm9wZG93bi53aWR0aCc6ICcxMDAlJyxcbiAgJ2Ryb3Bkb3duLm1heEhlaWdodCc6ICcnLFxuXG4gIC8vIEl0ZW1Hcm91cCdzIGl0ZW1zXG4gICdpdGVtR3JvdXAuaXRlbXMucGFkZGluZ0xlZnQnOiAnMjBweCcsXG5cbiAgLy8gSXRlbUdyb3VwJ3MgbGFiZWxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5ib3JkZXInOiAnMCcsXG4gICdpdGVtR3JvdXAubGFiZWwuYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5jb2xvcic6ICcjMzMzJyxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5mb250V2VpZ2h0JzogJ2JvbGQnLFxuICAnaXRlbUdyb3VwLmxhYmVsLmhlaWdodCc6ICcyOXB4JyxcblxuICAvLyBkaXNhYmxlZCBJdGVtR3JvdXAncyBsYWJlbFxuICAnaXRlbUdyb3VwLmxhYmVsLmRpc2FibGVkLmJvcmRlcic6ICcwJyxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5kaXNhYmxlZC5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICAnaXRlbUdyb3VwLmxhYmVsLmRpc2FibGVkLmNvbG9yJzogJyMzMzMnLFxuXG4gIC8vIEl0ZW1cbiAgJ2l0ZW0uYm9yZGVyJzogJzAnLFxuICAnaXRlbS5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICAnaXRlbS5jb2xvcic6ICcjMzMzJyxcbiAgJ2l0ZW0uaGVpZ2h0JzogJzI5cHgnLFxuXG4gIC8vIHNlbGVjdGVkIEl0ZW1cbiAgJ2l0ZW0uc2VsZWN0ZWQuYm9yZGVyJzogJzAnLFxuICAnaXRlbS5zZWxlY3RlZC5iYWNrZ3JvdW5kJzogJyNmNGY0ZjQnLFxuICAnaXRlbS5zZWxlY3RlZC5jb2xvcic6ICcjMzMzJyxcblxuICAvLyBkaXNhYmxlZCBJdGVtXG4gICdpdGVtLmRpc2FibGVkLmJvcmRlcic6ICcwJyxcbiAgJ2l0ZW0uZGlzYWJsZWQuYmFja2dyb3VuZCc6ICcjZjlmOWY5JyxcbiAgJ2l0ZW0uZGlzYWJsZWQuY29sb3InOiAnI2M4YzhjOCcsXG5cbiAgLy8gaGlnaGxpZ2h0ZWQgSXRlbVxuICAnaXRlbS5oaWdobGlnaHRlZC5ib3JkZXInOiAnMCcsXG4gICdpdGVtLmhpZ2hsaWdodGVkLmJhY2tncm91bmQnOiAnI2U1ZjZmZicsXG4gICdpdGVtLmhpZ2hsaWdodGVkLmNvbG9yJzogJyMzMzMnXG59O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cblxuaW1wb3J0IGZvckVhY2hPd25Qcm9wZXJ0aWVzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvY29sbGVjdGlvbi9mb3JFYWNoT3duUHJvcGVydGllcyc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzU3RyaW5nJztcblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gb2JqZWN0IHVzaW5nIGRvdCBub3RhdGlvblxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIG9iamVjdCB0byB0cmFuc2Zvcm1cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybSA9IG9iaiA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIGZvckVhY2hPd25Qcm9wZXJ0aWVzKG9iaiwgKHZhbHVlLCBwcm9wKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IHByb3Auc3BsaXQoJy4nKTtcbiAgICBsZXQgY3VyciA9IHJlc3VsdDtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY3VycltrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKCFjdXJyW2tleV0pIHtcbiAgICAgICAgY3VycltrZXldID0ge307XG4gICAgICB9XG4gICAgICBjdXJyID0gY3VycltrZXldO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIC0gdGFnIG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gY29udGVudCBpbiB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBvdGhlciBwcm9wZXJ0aWVzIGZvciB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gcGFyZW50IGVsZW1lbnQgZm9yIHRoZSBlbGVtZW50XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnTmFtZSwgY29udGVudCwgb3B0aW9ucywgY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBpZiAoY29udGVudCkge1xuICAgIGVsLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGZvckVhY2hPd25Qcm9wZXJ0aWVzKG9wdGlvbnMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKGtleS5pbmRleE9mKCdkYXRhLScpID4gLTEpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG4gIH1cblxuICByZXR1cm4gZWw7XG59O1xuXG4vKipcbiAqIEdldCBzZWxlY3RvcnMgZm9yIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIC0gZWxlbWVudFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0b3IgPSBlbCA9PiB7XG4gIGlmIChpc1N0cmluZyhlbCkpIHtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBpZiAoZWwuaWQpIHtcbiAgICByZXR1cm4gYCMke2VsLmlkfWA7XG4gIH1cblxuICBjb25zdCBjbGFzc05hbWUgPSBgLiR7ZWwuY2xhc3NOYW1lLnJlcGxhY2UoL1xccysvZywgJy4nKX1gO1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XG5cbiAgICBpZiAoZWxlbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRhZ05hbWUgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIGAke3RhZ05hbWV9JHtjbGFzc05hbWV9YDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9