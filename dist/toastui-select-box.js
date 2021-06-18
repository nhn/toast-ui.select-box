/*!
 * TOAST UI Select Box
 * @version 1.1.0 | Sat Jun 19 2021
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
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
/******/ 	var hotCurrentHash = "a97d433f9d2297db2180";
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
   * @author NHN. FE dev team.<dl_javascript@nhn.com>
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
   * @author NHN FE Development Lab <dl_javascript@nhn.com>
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
   * @author NHN FE Development Lab <dl_javascript@nhn.com>
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
   * @author NHN FE Development Lab <dl_javascript@nhn.com>
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
   * @author NHN. FE dev team.<dl_javascript@nhn.com>
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
   * @author NHN FE Development Lab <dl_javascript@nhn.com>
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
   * @author NHN FE Development Lab <dl_javascript@nhn.com>
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
   * @author NHN. FE dev team.<dl_javascript@nhn.com>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9hcnJheS9pbkFycmF5LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2guanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vZm9yRWFjaEFycmF5LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL3RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2N1c3RvbUV2ZW50cy9jdXN0b21FdmVudHMuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L19zYWZlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvb2ZmLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9kb21FdmVudC9vbi5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvcHJldmVudERlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvX3NldENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9jbG9zZXN0LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9kb21VdGlsL2dldENsYXNzLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9kb21VdGlsL21hdGNoZXMuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvb2JqZWN0L2V4dGVuZC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvcmVxdWVzdC9pbWFnZVBpbmcuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3JlcXVlc3Qvc2VuZEhvc3RuYW1lLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC90eXBlL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNCb29sZWFuLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC90eXBlL2lzRXhpc3R5LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC90eXBlL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNIVE1MTm9kZS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc051bGwuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9jc3Mvc2VsZWN0Qm94LmNzcz83ZWJkIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL2lucHV0LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvaXRlbS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL2l0ZW1Hcm91cC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL2tleUV2ZW50VXRpbHMuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9qcy9zZWxlY3RCb3guanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL3RoZW1lQ29uZmlnLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOlsiQ1NTX1BSRUZJWCIsImNsYXNzTmFtZXMiLCJTRUxFQ1RfQk9YIiwiSVRFTSIsIklURU1fR1JPVVAiLCJJVEVNX0dST1VQX0xBQkVMIiwiRFJPUERPV04iLCJJTlBVVCIsIlBMQUNFSE9MREVSIiwiSUNPTiIsIk9QRU4iLCJISURERU4iLCJESVNBQkxFRCIsIlNFTEVDVEVEIiwiSElHSExJR0hUIiwiY2xzIiwidmFsdWUiLCJrZXkiLCJEcm9wZG93biIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImRpc2FibGVkIiwiZWwiLCJjbGFzc05hbWUiLCJuYXRpdmVFbCIsInRhYkluZGV4IiwiaXRlbXMiLCJpdGVtTGVuZ3RoIiwic2VsZWN0ZWRJdGVtIiwiaGlnaGxpZ2h0ZWRJdGVtIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVJdGVtcyIsIml0ZW0iLCJpdGVtSW5kZXgiLCJpdGVtR3JvdXBJbmRleCIsImZvckVhY2giLCJkYXR1bSIsIkl0ZW1Hcm91cCIsImluZGV4IiwibGVuZ3RoIiwiSXRlbSIsInB1c2giLCJhcHBlbmRUb0NvbnRhaW5lciIsImxhYmVsIiwiaXRlcmF0ZUl0ZW1zIiwiaXNTZWxlY3RlZCIsImRlc2VsZWN0IiwiZGlzYWJsZSIsImNhbGxiYWNrIiwiYXJncyIsInJlc3VsdCIsImdldEl0ZW1zIiwiaXRlbUluR3JvdXAiLCJhcHBseSIsIm9wZW4iLCJpc0Rpc2FibGVkIiwiaGlnaGxpZ2h0IiwiY2xvc2UiLCJkZWhpZ2hsaWdodCIsImVuYWJsZSIsInNlbGVjdCIsImdldEl0ZW0iLCJtb3ZlSGlnaGxpZ2h0ZWRJdGVtIiwiZGlyZWN0aW9uIiwiZ2V0SGlnaGxpZ2h0ZWRJdGVtIiwiaW5kZXhPZiIsImdldEl0ZW1JbmRleCIsIm51bWJlciIsImlzVmFsaWRJdGVtIiwiY29tcGFyZWRJdGVtIiwiZ2V0SW5kZXgiLCJnZXRWYWx1ZSIsImdldEl0ZW1Hcm91cHMiLCJpdGVtR3JvdXBzIiwiaXRlbUdyb3VwIiwiZ2V0SXRlbUdyb3VwIiwiZ2V0SXRlbUxlbmd0aCIsImdldFNlbGVjdGVkSXRlbSIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiZGVzdHJveSIsIlNlbGVjdEJveCIsIklucHV0Iiwic2hvd0ljb24iLCJwbGFjZWhvbGRlclRleHQiLCJwbGFjZWhvbGRlckVsIiwid2lkdGgiLCJmb2N1cyIsImNoYW5nZVRleHQiLCJ0ZXh0Q29udGVudCIsImdldExhYmVsIiwic2VsZWN0ZWQiLCJpdGVtR3JvdXBEaXNhYmxlZCIsIml0ZW1EaXNhYmxlZCIsIm1ha2VEaXNhYmxlIiwibWFrZUVuYWJsZSIsImRpc2FibGVJdGVtR3JvdXAiLCJlbmFibGVJdGVtR3JvdXAiLCJibHVyIiwibmF0aXZlQ29udGFpbmVyIiwibGFiZWxFbCIsIml0ZW1Db250YWluZXJFbCIsImNyZWF0ZUl0ZW1zIiwibWFwIiwia2V5Q29kZU1hcCIsImtleU1hcCIsIkFycm93VXAiLCJVcCIsIkFycm93RG93biIsIkRvd24iLCJTcGFjZWJhciIsIkVudGVyIiwiRXNjYXBlIiwiRXNjIiwiVGFiIiwiaWRlbnRpZnlLZXkiLCJldiIsImtleUNvZGUiLCJhdXRvZm9jdXMiLCJhdXRvY2xvc2UiLCJ0aGVtZSIsInVzYWdlU3RhdGlzdGljcyIsImlucHV0IiwiZHJvcGRvd24iLCJvcGVuZWQiLCJkaWFibGVkIiwiVGhlbWUiLCJjb250YWluZXJFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9wdGlvbnMiLCJiaW5kRXZlbnRzIiwidGFyZ2V0IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVNb3VzZW92ZXIiLCJoYW5kbGVLZXlkb3duIiwidW5iaW5kRXZlbnRzIiwiaXRlbUVsIiwiZ2V0QXR0cmlidXRlIiwidG9nZ2xlIiwiY2hlY2tNb3VzZW1vdmUiLCJjbGllbnRYIiwiY2xpZW50WSIsIngiLCJ5IiwicHJldlgiLCJwcmV2WSIsImNsb3NlS2V5cyIsImFjdGl2ZUtleXMiLCJhY3RpdmF0ZUtleWRvd24iLCJwcmVzc0tleU9uSXRlbSIsInByZXNzS2V5T25JbnB1dCIsInNlbGVjdEJ5S2V5ZG93biIsImZpcmUiLCJ0eXBlIiwiZGlzYWJsZWRJdGVtIiwicHJldlNlbGVjdGVkSXRlbSIsInByZXYiLCJjdXJyIiwiQ3VzdG9tRXZlbnRzIiwibWl4aW4iLCJjdXN0b21UaGVtZSIsImNvbnRhaW5lclNlbGVjdG9yIiwiY3NzU3RyaW5nIiwiYnVpbGRBbGwiLCJzdHlsZUVsIiwiY3JlYXRlU3R5bGVFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImV4Y2x1ZGUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiYnVpbGRJbnB1dCIsImNvbW1vbiIsImJ1aWxkRHJvcGRvd24iLCJib3JkZXJUb3AiLCJoZWlnaHQiLCJidWlsZEl0ZW1Hcm91cCIsImJ1aWxkSXRlbSIsImluSXRlbUdyb3VwIiwibGluZUhlaWdodCIsImljb24iLCJkaXNwbGF5IiwiYnVpbGRDc3NTdHJpbmciLCJiYXNlIiwiYmFzZVRoZW1lIiwiaGlnaGxpZ2h0ZWQiLCJqb2luIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwidHJhbnNmb3JtIiwib2JqIiwicHJvcCIsImtleXMiLCJzcGxpdCIsInRhZ05hbWUiLCJjb250ZW50Iiwic2V0QXR0cmlidXRlIiwiZ2V0U2VsZWN0b3IiLCJpZCIsImVsZW1zIiwicXVlcnlTZWxlY3RvckFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxHQUFHOztRQUVIO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLFlBQVk7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxjQUFjLDRCQUE0QjtRQUMxQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7O1FBRUo7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7UUFDQSxlQUFlLDRCQUE0QjtRQUMzQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsdUNBQXVDO1FBQ3hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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QUFQO0FBQ0Q7QUFDRjs7QUFFRCxRQUFNK0ssT0FBTyxHQUFHaEwsRUFBRSxDQUFDZ0wsT0FBSCxDQUFXTixXQUFYLEVBQWhCO0FBRUEsZ0JBQVVNLE9BQVYsR0FBb0IvSyxTQUFwQjtBQUNELEdBckJNIiwiZmlsZSI6InRvYXN0dWktc2VsZWN0LWJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlNlbGVjdEJveFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0dWlcIl0gPSByb290W1widHVpXCJdIHx8IHt9LCByb290W1widHVpXCJdW1wiU2VsZWN0Qm94XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCJhOTdkNDMzZjlkMjI5N2RiMjE4MFwiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG4gXHRcdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0c3dpdGNoIChob3RTdGF0dXMpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuIFx0XHRcdFx0XHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG4gXHRcdFx0XHRcdFx0KGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9XG4gXHRcdFx0XHRcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdH1cbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaCwgaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IFwibWFpblwiO1xuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gXHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpIHtcbiBcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHQhbW9kdWxlIHx8XG4gXHRcdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcbiBcdFx0XHRcdClcbiBcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuIFx0XHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcbiBcdFx0XHRcdCFpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRwYXJlbnRzOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5wYXJlbnRzLnNsaWNlKCksXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGlmIChob3RVcGRhdGVOZXdIYXNoICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVuZGVmaW5lZDtcbiBcdFx0fVxuIFx0XHRob3RVcGRhdGUgPSB1bmRlZmluZWQ7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IGl0ZW0ucGFyZW50cztcbiBcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSBtb2R1bGVJZDtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24obGlzdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiBcdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRyZXR1cm4gbGlzdDtcbiBcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoIWhvdFVwZGF0ZSkgaG90VXBkYXRlID0ge307XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZSk7XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuIFx0XHRcdHJldHVybiB0cnVlO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBtb2R1bGVJZCkpXG4gXHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0XCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vc3JjL2pzL2luZGV4LmpzXCIpKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgUmV0dXJucyB0aGUgZmlyc3QgaW5kZXggYXQgd2hpY2ggYSBnaXZlbiBlbGVtZW50IGNhbiBiZSBmb3VuZCBpbiB0aGUgYXJyYXkuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vdHlwZS9pc0FycmF5Jyk7XG5cbi8qKlxuICogQG1vZHVsZSBhcnJheVxuICovXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgaW5kZXggYXQgd2hpY2ggYSBnaXZlbiBlbGVtZW50IGNhbiBiZSBmb3VuZCBpbiB0aGUgYXJyYXlcbiAqIGZyb20gc3RhcnQgaW5kZXgoZGVmYXVsdCAwKSwgb3IgLTEgaWYgaXQgaXMgbm90IHByZXNlbnQuXG4gKiBJdCBjb21wYXJlcyBzZWFyY2hFbGVtZW50IHRvIGVsZW1lbnRzIG9mIHRoZSBBcnJheSB1c2luZyBzdHJpY3QgZXF1YWxpdHlcbiAqICh0aGUgc2FtZSBtZXRob2QgdXNlZCBieSB0aGUgPT09LCBvciB0cmlwbGUtZXF1YWxzLCBvcGVyYXRvcikuXG4gKiBAcGFyYW0geyp9IHNlYXJjaEVsZW1lbnQgRWxlbWVudCB0byBsb2NhdGUgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB0aGF0IHdpbGwgYmUgdHJhdmVyc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0SW5kZXggU3RhcnQgaW5kZXggaW4gYXJyYXkgZm9yIHNlYXJjaGluZyAoZGVmYXVsdCAwKVxuICogQHJldHVybnMge251bWJlcn0gdGhlIEZpcnN0IGluZGV4IGF0IHdoaWNoIGEgZ2l2ZW4gZWxlbWVudCwgb3IgLTEgaWYgaXQgaXMgbm90IHByZXNlbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6YXJyYXlcbiAqIEBleGFtcGxlXG4gKiB2YXIgaW5BcnJheSA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvYXJyYXkvaW5BcnJheScpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIHZhciBhcnIgPSBbJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91ciddO1xuICogdmFyIGlkeDEgPSBpbkFycmF5KCdvbmUnLCBhcnIsIDMpOyAvLyAtMVxuICogdmFyIGlkeDIgPSBpbkFycmF5KCdvbmUnLCBhcnIpOyAvLyAwXG4gKi9cbmZ1bmN0aW9uIGluQXJyYXkoc2VhcmNoRWxlbWVudCwgYXJyYXksIHN0YXJ0SW5kZXgpIHtcbiAgdmFyIGk7XG4gIHZhciBsZW5ndGg7XG4gIHN0YXJ0SW5kZXggPSBzdGFydEluZGV4IHx8IDA7XG5cbiAgaWYgKCFpc0FycmF5KGFycmF5KSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGlmIChBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFycmF5LCBzZWFyY2hFbGVtZW50LCBzdGFydEluZGV4KTtcbiAgfVxuXG4gIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgZm9yIChpID0gc3RhcnRJbmRleDsgc3RhcnRJbmRleCA+PSAwICYmIGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnJheVtpXSA9PT0gc2VhcmNoRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluQXJyYXk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgRXhlY3V0ZSB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgb25jZSBmb3IgZWFjaCBwcm9wZXJ0eSBvZiBvYmplY3Qob3IgZWxlbWVudCBvZiBhcnJheSkgd2hpY2ggYWN0dWFsbHkgZXhpc3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vdHlwZS9pc0FycmF5Jyk7XG52YXIgZm9yRWFjaEFycmF5ID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoQXJyYXknKTtcbnZhciBmb3JFYWNoT3duUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb24vZm9yRWFjaE93blByb3BlcnRpZXMnKTtcblxuLyoqXG4gKiBAbW9kdWxlIGNvbGxlY3Rpb25cbiAqL1xuXG4vKipcbiAqIEV4ZWN1dGUgdGhlIHByb3ZpZGVkIGNhbGxiYWNrIG9uY2UgZm9yIGVhY2ggcHJvcGVydHkgb2Ygb2JqZWN0KG9yIGVsZW1lbnQgb2YgYXJyYXkpIHdoaWNoIGFjdHVhbGx5IGV4aXN0LlxuICogSWYgdGhlIG9iamVjdCBpcyBBcnJheS1saWtlIG9iamVjdChleC1hcmd1bWVudHMgb2JqZWN0KSwgSXQgbmVlZHMgdG8gdHJhbnNmb3JtIHRvIEFycmF5LihzZWUgJ2V4Micgb2YgZXhhbXBsZSkuXG4gKiBJZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSwgdGhlIGxvb3Agd2lsbCBiZSBzdG9wcGVkLlxuICogQ2FsbGJhY2sgZnVuY3Rpb24oaXRlcmF0ZWUpIGlzIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gKiAgMSkgVGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eShvciBUaGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQpXG4gKiAgMikgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5KG9yIFRoZSBpbmRleCBvZiB0aGUgZWxlbWVudClcbiAqICAzKSBUaGUgb2JqZWN0IGJlaW5nIHRyYXZlcnNlZFxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRoYXQgd2lsbCBiZSB0cmF2ZXJzZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGl0ZXJhdGVlIENhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIENvbnRleHQodGhpcykgb2YgY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqIHZhciBmb3JFYWNoID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2gnKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiB2YXIgc3VtID0gMDtcbiAqXG4gKiBmb3JFYWNoKFsxLDIsM10sIGZ1bmN0aW9uKHZhbHVlKXtcbiAqICAgICBzdW0gKz0gdmFsdWU7XG4gKiB9KTtcbiAqIGFsZXJ0KHN1bSk7IC8vIDZcbiAqXG4gKiAvLyBJbiBjYXNlIG9mIEFycmF5LWxpa2Ugb2JqZWN0XG4gKiB2YXIgYXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UpOyAvLyBjaGFuZ2UgdG8gYXJyYXlcbiAqIGZvckVhY2goYXJyYXksIGZ1bmN0aW9uKHZhbHVlKXtcbiAqICAgICBzdW0gKz0gdmFsdWU7XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICBmb3JFYWNoQXJyYXkob2JqLCBpdGVyYXRlZSwgY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgZm9yRWFjaE93blByb3BlcnRpZXMob2JqLCBpdGVyYXRlZSwgY29udGV4dCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEV4ZWN1dGUgdGhlIHByb3ZpZGVkIGNhbGxiYWNrIG9uY2UgZm9yIGVhY2ggZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheShvciBBcnJheS1saWtlIG9iamVjdCkgaW4gYXNjZW5kaW5nIG9yZGVyLlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEV4ZWN1dGUgdGhlIHByb3ZpZGVkIGNhbGxiYWNrIG9uY2UgZm9yIGVhY2ggZWxlbWVudCBwcmVzZW50XG4gKiBpbiB0aGUgYXJyYXkob3IgQXJyYXktbGlrZSBvYmplY3QpIGluIGFzY2VuZGluZyBvcmRlci5cbiAqIElmIHRoZSBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGZhbHNlLCB0aGUgbG9vcCB3aWxsIGJlIHN0b3BwZWQuXG4gKiBDYWxsYmFjayBmdW5jdGlvbihpdGVyYXRlZSkgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAqICAxKSBUaGUgdmFsdWUgb2YgdGhlIGVsZW1lbnRcbiAqICAyKSBUaGUgaW5kZXggb2YgdGhlIGVsZW1lbnRcbiAqICAzKSBUaGUgYXJyYXkob3IgQXJyYXktbGlrZSBvYmplY3QpIGJlaW5nIHRyYXZlcnNlZFxuICogQHBhcmFtIHtBcnJheXxBcmd1bWVudHN8Tm9kZUxpc3R9IGFyciBUaGUgYXJyYXkob3IgQXJyYXktbGlrZSBvYmplY3QpIHRoYXQgd2lsbCBiZSB0cmF2ZXJzZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGl0ZXJhdGVlIENhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIENvbnRleHQodGhpcykgb2YgY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqIHZhciBmb3JFYWNoQXJyYXkgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vZm9yRWFjaEFycmF5Jyk7IC8vIG5vZGUsIGNvbW1vbmpzXG4gKlxuICogdmFyIHN1bSA9IDA7XG4gKlxuICogZm9yRWFjaEFycmF5KFsxLDIsM10sIGZ1bmN0aW9uKHZhbHVlKXtcbiAqICAgICBzdW0gKz0gdmFsdWU7XG4gKiB9KTtcbiAqIGFsZXJ0KHN1bSk7IC8vIDZcbiAqL1xuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFyciwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgY29udGV4dCA9IGNvbnRleHQgfHwgbnVsbDtcblxuICBmb3IgKDsgaW5kZXggPCBsZW47IGluZGV4ICs9IDEpIHtcbiAgICBpZiAoaXRlcmF0ZWUuY2FsbChjb250ZXh0LCBhcnJbaW5kZXhdLCBpbmRleCwgYXJyKSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hBcnJheTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBFeGVjdXRlIHRoZSBwcm92aWRlZCBjYWxsYmFjayBvbmNlIGZvciBlYWNoIHByb3BlcnR5IG9mIG9iamVjdCB3aGljaCBhY3R1YWxseSBleGlzdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBFeGVjdXRlIHRoZSBwcm92aWRlZCBjYWxsYmFjayBvbmNlIGZvciBlYWNoIHByb3BlcnR5IG9mIG9iamVjdCB3aGljaCBhY3R1YWxseSBleGlzdC5cbiAqIElmIHRoZSBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGZhbHNlLCB0aGUgbG9vcCB3aWxsIGJlIHN0b3BwZWQuXG4gKiBDYWxsYmFjayBmdW5jdGlvbihpdGVyYXRlZSkgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAqICAxKSBUaGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiAgMikgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiAgMykgVGhlIG9iamVjdCBiZWluZyB0cmF2ZXJzZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHJhdmVyc2VkXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBpdGVyYXRlZSAgQ2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gQ29udGV4dCh0aGlzKSBvZiBjYWxsYmFjayBmdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogdmFyIGZvckVhY2hPd25Qcm9wZXJ0aWVzID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzJyk7IC8vIG5vZGUsIGNvbW1vbmpzXG4gKlxuICogdmFyIHN1bSA9IDA7XG4gKlxuICogZm9yRWFjaE93blByb3BlcnRpZXMoe2E6MSxiOjIsYzozfSwgZnVuY3Rpb24odmFsdWUpe1xuICogICAgIHN1bSArPSB2YWx1ZTtcbiAqIH0pO1xuICogYWxlcnQoc3VtKTsgLy8gNlxuICovXG5mdW5jdGlvbiBmb3JFYWNoT3duUHJvcGVydGllcyhvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gIHZhciBrZXk7XG5cbiAgY29udGV4dCA9IGNvbnRleHQgfHwgbnVsbDtcblxuICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmIChpdGVyYXRlZS5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaikgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hPd25Qcm9wZXJ0aWVzO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRyYW5zZm9ybSB0aGUgQXJyYXktbGlrZSBvYmplY3QgdG8gQXJyYXkuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoQXJyYXkgPSByZXF1aXJlKCcuL2ZvckVhY2hBcnJheScpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgQXJyYXktbGlrZSBvYmplY3QgdG8gQXJyYXkuXG4gKiBJbiBsb3cgSUUgKGJlbG93IDgpLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCBpcyBub3QgcGVyZmVjdC4gU28sIHRyeS1jYXRjaCBzdGF0ZW1lbnQgaXMgdXNlZC5cbiAqIEBwYXJhbSB7Kn0gYXJyYXlMaWtlIEFycmF5LWxpa2Ugb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IEFycmF5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbGxlY3Rpb25cbiAqIEBleGFtcGxlXG4gKiB2YXIgdG9BcnJheSA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvY29sbGVjdGlvbi90b0FycmF5Jyk7IC8vIG5vZGUsIGNvbW1vbmpzXG4gKlxuICogdmFyIGFycmF5TGlrZSA9IHtcbiAqICAgICAwOiAnb25lJyxcbiAqICAgICAxOiAndHdvJyxcbiAqICAgICAyOiAndGhyZWUnLFxuICogICAgIDM6ICdmb3VyJyxcbiAqICAgICBsZW5ndGg6IDRcbiAqIH07XG4gKiB2YXIgcmVzdWx0ID0gdG9BcnJheShhcnJheUxpa2UpO1xuICpcbiAqIGFsZXJ0KHJlc3VsdCBpbnN0YW5jZW9mIEFycmF5KTsgLy8gdHJ1ZVxuICogYWxlcnQocmVzdWx0KTsgLy8gb25lLHR3byx0aHJlZSxmb3VyXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoYXJyYXlMaWtlKSB7XG4gIHZhciBhcnI7XG4gIHRyeSB7XG4gICAgYXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlMaWtlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGFyciA9IFtdO1xuICAgIGZvckVhY2hBcnJheShhcnJheUxpa2UsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBhcnIucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvQXJyYXk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBtb2R1bGUgcHJvdmlkZXMgc29tZSBmdW5jdGlvbnMgZm9yIGN1c3RvbSBldmVudHMuIEFuZCBpdCBpcyBpbXBsZW1lbnRlZCBpbiB0aGUgb2JzZXJ2ZXIgZGVzaWduIHBhdHRlcm4uXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleHRlbmQgPSByZXF1aXJlKCcuLi9vYmplY3QvZXh0ZW5kJyk7XG52YXIgaXNFeGlzdHkgPSByZXF1aXJlKCcuLi90eXBlL2lzRXhpc3R5Jyk7XG52YXIgaXNTdHJpbmcgPSByZXF1aXJlKCcuLi90eXBlL2lzU3RyaW5nJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi90eXBlL2lzT2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL3R5cGUvaXNBcnJheScpO1xudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuLi90eXBlL2lzRnVuY3Rpb24nKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoJyk7XG5cbnZhciBSX0VWRU5UTkFNRV9TUExJVCA9IC9cXHMrL2c7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAZXhhbXBsZVxuICogLy8gbm9kZSwgY29tbW9uanNcbiAqIHZhciBDdXN0b21FdmVudHMgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2N1c3RvbUV2ZW50cy9jdXN0b21FdmVudHMnKTtcbiAqL1xuZnVuY3Rpb24gQ3VzdG9tRXZlbnRzKCkge1xuICAvKipcbiAgICAgKiBAdHlwZSB7SGFuZGxlckl0ZW1bXX1cbiAgICAgKi9cbiAgdGhpcy5ldmVudHMgPSBudWxsO1xuXG4gIC8qKlxuICAgICAqIG9ubHkgZm9yIGNoZWNraW5nIHNwZWNpZmljIGNvbnRleHQgZXZlbnQgd2FzIGJpbmRlZFxuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKi9cbiAgdGhpcy5jb250ZXh0cyA9IG51bGw7XG59XG5cbi8qKlxuICogTWl4aW4gY3VzdG9tIGV2ZW50cyBmZWF0dXJlIHRvIHNwZWNpZmljIGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0gY29uc3RydWN0b3JcbiAqIEBleGFtcGxlXG4gKiB2YXIgQ3VzdG9tRXZlbnRzID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9jdXN0b21FdmVudHMvY3VzdG9tRXZlbnRzJyk7IC8vIG5vZGUsIGNvbW1vbmpzXG4gKlxuICogdmFyIG1vZGVsO1xuICogZnVuY3Rpb24gTW9kZWwoKSB7XG4gKiAgICAgdGhpcy5uYW1lID0gJyc7XG4gKiB9XG4gKiBDdXN0b21FdmVudHMubWl4aW4oTW9kZWwpO1xuICpcbiAqIG1vZGVsID0gbmV3IE1vZGVsKCk7XG4gKiBtb2RlbC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IHRoaXMubmFtZSA9ICdtb2RlbCc7IH0sIHRoaXMpO1xuICogbW9kZWwuZmlyZSgnY2hhbmdlJyk7XG4gKiBhbGVydChtb2RlbC5uYW1lKTsgLy8gJ21vZGVsJztcbiAqL1xuQ3VzdG9tRXZlbnRzLm1peGluID0gZnVuY3Rpb24oZnVuYykge1xuICBleHRlbmQoZnVuYy5wcm90b3R5cGUsIEN1c3RvbUV2ZW50cy5wcm90b3R5cGUpO1xufTtcblxuLyoqXG4gKiBHZXQgSGFuZGxlckl0ZW0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gaGFuZGxlciBmdW5jdGlvblxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XSAtIGNvbnRleHQgZm9yIGhhbmRsZXJcbiAqIEByZXR1cm5zIHtIYW5kbGVySXRlbX0gSGFuZGxlckl0ZW0gb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9nZXRIYW5kbGVySXRlbSA9IGZ1bmN0aW9uKGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgdmFyIGl0ZW0gPSB7aGFuZGxlcjogaGFuZGxlcn07XG5cbiAgaWYgKGNvbnRleHQpIHtcbiAgICBpdGVtLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgcmV0dXJuIGl0ZW07XG59O1xuXG4vKipcbiAqIEdldCBldmVudCBvYmplY3Qgc2FmZWx5XG4gKiBAcGFyYW0ge3N0cmluZ30gW2V2ZW50TmFtZV0gLSBjcmVhdGUgc3ViIGV2ZW50IG1hcCBpZiBub3QgZXhpc3QuXG4gKiBAcmV0dXJucyB7KG9iamVjdHxhcnJheSl9IGV2ZW50IG9iamVjdC4gaWYgeW91IHN1cHBsaWVkIGBldmVudE5hbWVgXG4gKiAgcGFyYW1ldGVyIHRoZW4gbWFrZSBuZXcgYXJyYXkgYW5kIHJldHVybiBpdFxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fc2FmZUV2ZW50ID0gZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLmV2ZW50cztcbiAgdmFyIGJ5TmFtZTtcblxuICBpZiAoIWV2ZW50cykge1xuICAgIGV2ZW50cyA9IHRoaXMuZXZlbnRzID0ge307XG4gIH1cblxuICBpZiAoZXZlbnROYW1lKSB7XG4gICAgYnlOYW1lID0gZXZlbnRzW2V2ZW50TmFtZV07XG5cbiAgICBpZiAoIWJ5TmFtZSkge1xuICAgICAgYnlOYW1lID0gW107XG4gICAgICBldmVudHNbZXZlbnROYW1lXSA9IGJ5TmFtZTtcbiAgICB9XG5cbiAgICBldmVudHMgPSBieU5hbWU7XG4gIH1cblxuICByZXR1cm4gZXZlbnRzO1xufTtcblxuLyoqXG4gKiBHZXQgY29udGV4dCBhcnJheSBzYWZlbHlcbiAqIEByZXR1cm5zIHthcnJheX0gY29udGV4dCBhcnJheVxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fc2FmZUNvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHRzO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHRzID0gW107XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn07XG5cbi8qKlxuICogR2V0IGluZGV4IG9mIGNvbnRleHRcbiAqIEBwYXJhbSB7b2JqZWN0fSBjdHggLSBjb250ZXh0IHRoYXQgdXNlZCBmb3IgYmluZCBjdXN0b20gZXZlbnRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGluZGV4IG9mIGNvbnRleHRcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX2luZGV4T2ZDb250ZXh0ID0gZnVuY3Rpb24oY3R4KSB7XG4gIHZhciBjb250ZXh0ID0gdGhpcy5fc2FmZUNvbnRleHQoKTtcbiAgdmFyIGluZGV4ID0gMDtcblxuICB3aGlsZSAoY29udGV4dFtpbmRleF0pIHtcbiAgICBpZiAoY3R4ID09PSBjb250ZXh0W2luZGV4XVswXSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGluZGV4ICs9IDE7XG4gIH1cblxuICByZXR1cm4gLTE7XG59O1xuXG4vKipcbiAqIE1lbW9yaXplIHN1cHBsaWVkIGNvbnRleHQgZm9yIHJlY29nbml6ZSBzdXBwbGllZCBvYmplY3QgaXMgY29udGV4dCBvclxuICogIG5hbWU6IGhhbmRsZXIgcGFpciBvYmplY3Qgd2hlbiBvZmYoKVxuICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIGNvbnRleHQgb2JqZWN0IHRvIG1lbW9yaXplXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9tZW1vcml6ZUNvbnRleHQgPSBmdW5jdGlvbihjdHgpIHtcbiAgdmFyIGNvbnRleHQsIGluZGV4O1xuXG4gIGlmICghaXNFeGlzdHkoY3R4KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnRleHQgPSB0aGlzLl9zYWZlQ29udGV4dCgpO1xuICBpbmRleCA9IHRoaXMuX2luZGV4T2ZDb250ZXh0KGN0eCk7XG5cbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBjb250ZXh0W2luZGV4XVsxXSArPSAxO1xuICB9IGVsc2Uge1xuICAgIGNvbnRleHQucHVzaChbY3R4LCAxXSk7XG4gIH1cbn07XG5cbi8qKlxuICogRm9yZ2V0IHN1cHBsaWVkIGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gY29udGV4dCBvYmplY3QgdG8gZm9yZ2V0XG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9mb3JnZXRDb250ZXh0ID0gZnVuY3Rpb24oY3R4KSB7XG4gIHZhciBjb250ZXh0LCBjb250ZXh0SW5kZXg7XG5cbiAgaWYgKCFpc0V4aXN0eShjdHgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29udGV4dCA9IHRoaXMuX3NhZmVDb250ZXh0KCk7XG4gIGNvbnRleHRJbmRleCA9IHRoaXMuX2luZGV4T2ZDb250ZXh0KGN0eCk7XG5cbiAgaWYgKGNvbnRleHRJbmRleCA+IC0xKSB7XG4gICAgY29udGV4dFtjb250ZXh0SW5kZXhdWzFdIC09IDE7XG5cbiAgICBpZiAoY29udGV4dFtjb250ZXh0SW5kZXhdWzFdIDw9IDApIHtcbiAgICAgIGNvbnRleHQuc3BsaWNlKGNvbnRleHRJbmRleCwgMSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEJpbmQgZXZlbnQgaGFuZGxlclxuICogQHBhcmFtIHsoc3RyaW5nfHtuYW1lOnN0cmluZywgaGFuZGxlcjpmdW5jdGlvbn0pfSBldmVudE5hbWUgLSBjdXN0b21cbiAqICBldmVudCBuYW1lIG9yIGFuIG9iamVjdCB7ZXZlbnROYW1lOiBoYW5kbGVyfVxuICogQHBhcmFtIHsoZnVuY3Rpb258b2JqZWN0KX0gW2hhbmRsZXJdIC0gaGFuZGxlciBmdW5jdGlvbiBvciBjb250ZXh0XG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdIC0gY29udGV4dCBmb3IgYmluZGluZ1xuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fYmluZEV2ZW50ID0gZnVuY3Rpb24oZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9zYWZlRXZlbnQoZXZlbnROYW1lKTtcbiAgdGhpcy5fbWVtb3JpemVDb250ZXh0KGNvbnRleHQpO1xuICBldmVudHMucHVzaCh0aGlzLl9nZXRIYW5kbGVySXRlbShoYW5kbGVyLCBjb250ZXh0KSk7XG59O1xuXG4vKipcbiAqIEJpbmQgZXZlbnQgaGFuZGxlcnNcbiAqIEBwYXJhbSB7KHN0cmluZ3x7bmFtZTpzdHJpbmcsIGhhbmRsZXI6ZnVuY3Rpb259KX0gZXZlbnROYW1lIC0gY3VzdG9tXG4gKiAgZXZlbnQgbmFtZSBvciBhbiBvYmplY3Qge2V2ZW50TmFtZTogaGFuZGxlcn1cbiAqIEBwYXJhbSB7KGZ1bmN0aW9ufG9iamVjdCl9IFtoYW5kbGVyXSAtIGhhbmRsZXIgZnVuY3Rpb24gb3IgY29udGV4dFxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XSAtIGNvbnRleHQgZm9yIGJpbmRpbmdcbiAqIC8vLS0gIzEuIEdldCBNb2R1bGUgLS0vL1xuICogdmFyIEN1c3RvbUV2ZW50cyA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvY3VzdG9tRXZlbnRzL2N1c3RvbUV2ZW50cycpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIC8vLS0gIzIuIFVzZSBtZXRob2QgLS0vL1xuICogLy8gIyAyLjEgQmFzaWMgVXNhZ2VcbiAqIEN1c3RvbUV2ZW50cy5vbignb25sb2FkJywgaGFuZGxlcik7XG4gKlxuICogLy8gIyAyLjIgV2l0aCBjb250ZXh0XG4gKiBDdXN0b21FdmVudHMub24oJ29ubG9hZCcsIGhhbmRsZXIsIG15T2JqKTtcbiAqXG4gKiAvLyAjIDIuMyBCaW5kIGJ5IG9iamVjdCB0aGF0IG5hbWUsIGhhbmRsZXIgcGFpcnNcbiAqIEN1c3RvbUV2ZW50cy5vbih7XG4gKiAgICAgJ3BsYXknOiBoYW5kbGVyLFxuICogICAgICdwYXVzZSc6IGhhbmRsZXIyXG4gKiB9KTtcbiAqXG4gKiAvLyAjIDIuNCBCaW5kIGJ5IG9iamVjdCB0aGF0IG5hbWUsIGhhbmRsZXIgcGFpcnMgd2l0aCBjb250ZXh0IG9iamVjdFxuICogQ3VzdG9tRXZlbnRzLm9uKHtcbiAqICAgICAncGxheSc6IGhhbmRsZXJcbiAqIH0sIG15T2JqKTtcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKGlzU3RyaW5nKGV2ZW50TmFtZSkpIHtcbiAgICAvLyBbc3ludGF4IDEsIDJdXG4gICAgZXZlbnROYW1lID0gZXZlbnROYW1lLnNwbGl0KFJfRVZFTlROQU1FX1NQTElUKTtcbiAgICBmb3JFYWNoKGV2ZW50TmFtZSwgZnVuY3Rpb24obmFtZSkge1xuICAgICAgc2VsZi5fYmluZEV2ZW50KG5hbWUsIGhhbmRsZXIsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGV2ZW50TmFtZSkpIHtcbiAgICAvLyBbc3ludGF4IDMsIDRdXG4gICAgY29udGV4dCA9IGhhbmRsZXI7XG4gICAgZm9yRWFjaChldmVudE5hbWUsIGZ1bmN0aW9uKGZ1bmMsIG5hbWUpIHtcbiAgICAgIHNlbGYub24obmFtZSwgZnVuYywgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogQmluZCBvbmUtc2hvdCBldmVudCBoYW5kbGVyc1xuICogQHBhcmFtIHsoc3RyaW5nfHtuYW1lOnN0cmluZyxoYW5kbGVyOmZ1bmN0aW9ufSl9IGV2ZW50TmFtZSAtIGN1c3RvbVxuICogIGV2ZW50IG5hbWUgb3IgYW4gb2JqZWN0IHtldmVudE5hbWU6IGhhbmRsZXJ9XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufG9iamVjdH0gW2hhbmRsZXJdIC0gaGFuZGxlciBmdW5jdGlvbiBvciBjb250ZXh0XG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdIC0gY29udGV4dCBmb3IgYmluZGluZ1xuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmIChpc09iamVjdChldmVudE5hbWUpKSB7XG4gICAgY29udGV4dCA9IGhhbmRsZXI7XG4gICAgZm9yRWFjaChldmVudE5hbWUsIGZ1bmN0aW9uKGZ1bmMsIG5hbWUpIHtcbiAgICAgIHNlbGYub25jZShuYW1lLCBmdW5jLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlcXVpcmUtanNkb2NcbiAgICBoYW5kbGVyLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgc2VsZi5vZmYoZXZlbnROYW1lLCBvbmNlSGFuZGxlciwgY29udGV4dCk7XG4gIH1cblxuICB0aGlzLm9uKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIsIGNvbnRleHQpO1xufTtcblxuLyoqXG4gKiBTcGxpY2Ugc3VwcGxpZWQgYXJyYXkgYnkgY2FsbGJhY2sgcmVzdWx0XG4gKiBAcGFyYW0ge2FycmF5fSBhcnIgLSBhcnJheSB0byBzcGxpY2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHByZWRpY2F0ZSAtIGZ1bmN0aW9uIHJldHVybiBib29sZWFuXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9zcGxpY2VNYXRjaGVzID0gZnVuY3Rpb24oYXJyLCBwcmVkaWNhdGUpIHtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuO1xuXG4gIGlmICghaXNBcnJheShhcnIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycltpXSkgPT09IHRydWUpIHtcbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICBsZW4gLT0gMTtcbiAgICAgIGkgLT0gMTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IG1hdGNoZXIgZm9yIHVuYmluZCBzcGVjaWZpYyBoYW5kbGVyIGV2ZW50c1xuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gaGFuZGxlciBtYXRjaGVyXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9tYXRjaEhhbmRsZXIgPSBmdW5jdGlvbihoYW5kbGVyKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICByZXR1cm4gZnVuY3Rpb24oaXRlbSkge1xuICAgIHZhciBuZWVkUmVtb3ZlID0gaGFuZGxlciA9PT0gaXRlbS5oYW5kbGVyO1xuXG4gICAgaWYgKG5lZWRSZW1vdmUpIHtcbiAgICAgIHNlbGYuX2ZvcmdldENvbnRleHQoaXRlbS5jb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmVlZFJlbW92ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogR2V0IG1hdGNoZXIgZm9yIHVuYmluZCBzcGVjaWZpYyBjb250ZXh0IGV2ZW50c1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBjb250ZXh0XG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IG9iamVjdCBtYXRjaGVyXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9tYXRjaENvbnRleHQgPSBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICByZXR1cm4gZnVuY3Rpb24oaXRlbSkge1xuICAgIHZhciBuZWVkUmVtb3ZlID0gY29udGV4dCA9PT0gaXRlbS5jb250ZXh0O1xuXG4gICAgaWYgKG5lZWRSZW1vdmUpIHtcbiAgICAgIHNlbGYuX2ZvcmdldENvbnRleHQoaXRlbS5jb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmVlZFJlbW92ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogR2V0IG1hdGNoZXIgZm9yIHVuYmluZCBzcGVjaWZpYyBoYW5kZXIsIGNvbnRleHQgcGFpciBldmVudHNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIGNvbnRleHRcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gaGFuZGxlciwgY29udGV4dCBtYXRjaGVyXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9tYXRjaEhhbmRsZXJBbmRDb250ZXh0ID0gZnVuY3Rpb24oaGFuZGxlciwgY29udGV4dCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICB2YXIgbWF0Y2hIYW5kbGVyID0gKGhhbmRsZXIgPT09IGl0ZW0uaGFuZGxlcik7XG4gICAgdmFyIG1hdGNoQ29udGV4dCA9IChjb250ZXh0ID09PSBpdGVtLmNvbnRleHQpO1xuICAgIHZhciBuZWVkUmVtb3ZlID0gKG1hdGNoSGFuZGxlciAmJiBtYXRjaENvbnRleHQpO1xuXG4gICAgaWYgKG5lZWRSZW1vdmUpIHtcbiAgICAgIHNlbGYuX2ZvcmdldENvbnRleHQoaXRlbS5jb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmVlZFJlbW92ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogVW5iaW5kIGV2ZW50IGJ5IGV2ZW50IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBjdXN0b20gZXZlbnQgbmFtZSB0byB1bmJpbmRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyXSAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX29mZkJ5RXZlbnROYW1lID0gZnVuY3Rpb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGFuZEJ5SGFuZGxlciA9IGlzRnVuY3Rpb24oaGFuZGxlcik7XG4gIHZhciBtYXRjaEhhbmRsZXIgPSBzZWxmLl9tYXRjaEhhbmRsZXIoaGFuZGxlcik7XG5cbiAgZXZlbnROYW1lID0gZXZlbnROYW1lLnNwbGl0KFJfRVZFTlROQU1FX1NQTElUKTtcblxuICBmb3JFYWNoKGV2ZW50TmFtZSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBoYW5kbGVySXRlbXMgPSBzZWxmLl9zYWZlRXZlbnQobmFtZSk7XG5cbiAgICBpZiAoYW5kQnlIYW5kbGVyKSB7XG4gICAgICBzZWxmLl9zcGxpY2VNYXRjaGVzKGhhbmRsZXJJdGVtcywgbWF0Y2hIYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yRWFjaChoYW5kbGVySXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgc2VsZi5fZm9yZ2V0Q29udGV4dChpdGVtLmNvbnRleHQpO1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuZXZlbnRzW25hbWVdID0gW107XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogVW5iaW5kIGV2ZW50IGJ5IGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9vZmZCeUhhbmRsZXIgPSBmdW5jdGlvbihoYW5kbGVyKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIG1hdGNoSGFuZGxlciA9IHRoaXMuX21hdGNoSGFuZGxlcihoYW5kbGVyKTtcblxuICBmb3JFYWNoKHRoaXMuX3NhZmVFdmVudCgpLCBmdW5jdGlvbihoYW5kbGVySXRlbXMpIHtcbiAgICBzZWxmLl9zcGxpY2VNYXRjaGVzKGhhbmRsZXJJdGVtcywgbWF0Y2hIYW5kbGVyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFVuYmluZCBldmVudCBieSBvYmplY3QobmFtZTogaGFuZGxlciBwYWlyIG9iamVjdCBvciBjb250ZXh0IG9iamVjdClcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBjb250ZXh0IG9yIHtuYW1lOiBoYW5kbGVyfSBwYWlyIG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX29mZkJ5T2JqZWN0ID0gZnVuY3Rpb24ob2JqLCBoYW5kbGVyKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIG1hdGNoRnVuYztcblxuICBpZiAodGhpcy5faW5kZXhPZkNvbnRleHQob2JqKSA8IDApIHtcbiAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24oZnVuYywgbmFtZSkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgZnVuYyk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcoaGFuZGxlcikpIHtcbiAgICBtYXRjaEZ1bmMgPSB0aGlzLl9tYXRjaENvbnRleHQob2JqKTtcblxuICAgIHNlbGYuX3NwbGljZU1hdGNoZXModGhpcy5fc2FmZUV2ZW50KGhhbmRsZXIpLCBtYXRjaEZ1bmMpO1xuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBtYXRjaEZ1bmMgPSB0aGlzLl9tYXRjaEhhbmRsZXJBbmRDb250ZXh0KGhhbmRsZXIsIG9iaik7XG5cbiAgICBmb3JFYWNoKHRoaXMuX3NhZmVFdmVudCgpLCBmdW5jdGlvbihoYW5kbGVySXRlbXMpIHtcbiAgICAgIHNlbGYuX3NwbGljZU1hdGNoZXMoaGFuZGxlckl0ZW1zLCBtYXRjaEZ1bmMpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG1hdGNoRnVuYyA9IHRoaXMuX21hdGNoQ29udGV4dChvYmopO1xuXG4gICAgZm9yRWFjaCh0aGlzLl9zYWZlRXZlbnQoKSwgZnVuY3Rpb24oaGFuZGxlckl0ZW1zKSB7XG4gICAgICBzZWxmLl9zcGxpY2VNYXRjaGVzKGhhbmRsZXJJdGVtcywgbWF0Y2hGdW5jKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBVbmJpbmQgY3VzdG9tIGV2ZW50c1xuICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdHxmdW5jdGlvbil9IGV2ZW50TmFtZSAtIGV2ZW50IG5hbWUgb3IgY29udGV4dCBvclxuICogIHtuYW1lOiBoYW5kbGVyfSBwYWlyIG9iamVjdCBvciBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcGFyYW0geyhmdW5jdGlvbil9IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAZXhhbXBsZVxuICogLy8tLSAjMS4gR2V0IE1vZHVsZSAtLS8vXG4gKiB2YXIgQ3VzdG9tRXZlbnRzID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9jdXN0b21FdmVudHMvY3VzdG9tRXZlbnRzJyk7IC8vIG5vZGUsIGNvbW1vbmpzXG4gKlxuICogLy8tLSAjMi4gVXNlIG1ldGhvZCAtLS8vXG4gKiAvLyAjIDIuMSBvZmYgYnkgZXZlbnQgbmFtZVxuICogQ3VzdG9tRXZlbnRzLm9mZignb25sb2FkJyk7XG4gKlxuICogLy8gIyAyLjIgb2ZmIGJ5IGV2ZW50IG5hbWUgYW5kIGhhbmRsZXJcbiAqIEN1c3RvbUV2ZW50cy5vZmYoJ3BsYXknLCBoYW5kbGVyKTtcbiAqXG4gKiAvLyAjIDIuMyBvZmYgYnkgaGFuZGxlclxuICogQ3VzdG9tRXZlbnRzLm9mZihoYW5kbGVyKTtcbiAqXG4gKiAvLyAjIDIuNCBvZmYgYnkgY29udGV4dFxuICogQ3VzdG9tRXZlbnRzLm9mZihteU9iaik7XG4gKlxuICogLy8gIyAyLjUgb2ZmIGJ5IGNvbnRleHQgYW5kIGhhbmRsZXJcbiAqIEN1c3RvbUV2ZW50cy5vZmYobXlPYmosIGhhbmRsZXIpO1xuICpcbiAqIC8vICMgMi42IG9mZiBieSBjb250ZXh0IGFuZCBldmVudCBuYW1lXG4gKiBDdXN0b21FdmVudHMub2ZmKG15T2JqLCAnb25sb2FkJyk7XG4gKlxuICogLy8gIyAyLjcgb2ZmIGJ5IGFuIE9iamVjdC48c3RyaW5nLCBmdW5jdGlvbj4gdGhhdCBpcyB7ZXZlbnROYW1lOiBoYW5kbGVyfVxuICogQ3VzdG9tRXZlbnRzLm9mZih7XG4gKiAgICdwbGF5JzogaGFuZGxlcixcbiAqICAgJ3BhdXNlJzogaGFuZGxlcjJcbiAqIH0pO1xuICpcbiAqIC8vICMgMi44IG9mZiB0aGUgYWxsIGV2ZW50c1xuICogQ3VzdG9tRXZlbnRzLm9mZigpO1xuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICBpZiAoaXNTdHJpbmcoZXZlbnROYW1lKSkge1xuICAgIC8vIFtzeW50YXggMSwgMl1cbiAgICB0aGlzLl9vZmZCeUV2ZW50TmFtZShldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgLy8gW3N5bnRheCA4XVxuICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oZXZlbnROYW1lKSkge1xuICAgIC8vIFtzeW50YXggM11cbiAgICB0aGlzLl9vZmZCeUhhbmRsZXIoZXZlbnROYW1lKTtcbiAgfSBlbHNlIGlmIChpc09iamVjdChldmVudE5hbWUpKSB7XG4gICAgLy8gW3N5bnRheCA0LCA1LCA2XVxuICAgIHRoaXMuX29mZkJ5T2JqZWN0KGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gIH1cbn07XG5cbi8qKlxuICogRmlyZSBjdXN0b20gZXZlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBuYW1lIG9mIGN1c3RvbSBldmVudFxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbihldmVudE5hbWUpIHsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgdGhpcy5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogRmlyZSBhIGV2ZW50IGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2Ygb3BlcmF0aW9uICdib29sZWFuIEFORCcgd2l0aCBhbGxcbiAqICBsaXN0ZW5lcidzIHJlc3VsdHMuXG4gKlxuICogU28sIEl0IGlzIGRpZmZlcmVudCBmcm9tIHtAbGluayBDdXN0b21FdmVudHMjZmlyZX0uXG4gKlxuICogSW4gc2VydmljZSBjb2RlLCB1c2UgdGhpcyBhcyBhIGJlZm9yZSBldmVudCBpbiBjb21wb25lbnQgbGV2ZWwgdXN1YWxseVxuICogIGZvciBub3RpZnlpbmcgdGhhdCB0aGUgZXZlbnQgaXMgY2FuY2VsYWJsZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBDdXN0b20gZXZlbnQgbmFtZVxuICogQHBhcmFtIHsuLi4qfSBkYXRhIC0gRGF0YSBmb3IgZXZlbnRcbiAqIEByZXR1cm5zIHtib29sZWFufSBUaGUgcmVzdWx0IG9mIG9wZXJhdGlvbiAnYm9vbGVhbiBBTkQnXG4gKiBAZXhhbXBsZVxuICogdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAqIG1hcC5vbih7XG4gKiAgICAgJ2JlZm9yZVpvb20nOiBmdW5jdGlvbigpIHtcbiAqICAgICAgICAgLy8gSXQgc2hvdWxkIGNhbmNlbCB0aGUgJ3pvb20nIGV2ZW50IGJ5IHNvbWUgY29uZGl0aW9ucy5cbiAqICAgICAgICAgaWYgKHRoYXQuZGlzYWJsZWQgJiYgdGhpcy5nZXRTdGF0ZSgpKSB7XG4gKiAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gKiAgICAgICAgIH1cbiAqICAgICAgICAgcmV0dXJuIHRydWU7XG4gKiAgICAgfVxuICogfSk7XG4gKlxuICogaWYgKHRoaXMuaW52b2tlKCdiZWZvcmVab29tJykpIHsgICAgLy8gY2hlY2sgdGhlIHJlc3VsdCBvZiAnYmVmb3JlWm9vbSdcbiAqICAgICAvLyBpZiB0cnVlLFxuICogICAgIC8vIGRvU29tZXRoaW5nXG4gKiB9XG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gIHZhciBldmVudHMsIGFyZ3MsIGluZGV4LCBpdGVtO1xuXG4gIGlmICghdGhpcy5oYXNMaXN0ZW5lcihldmVudE5hbWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBldmVudHMgPSB0aGlzLl9zYWZlRXZlbnQoZXZlbnROYW1lKTtcbiAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIGluZGV4ID0gMDtcblxuICB3aGlsZSAoZXZlbnRzW2luZGV4XSkge1xuICAgIGl0ZW0gPSBldmVudHNbaW5kZXhdO1xuXG4gICAgaWYgKGl0ZW0uaGFuZGxlci5hcHBseShpdGVtLmNvbnRleHQsIGFyZ3MpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGluZGV4ICs9IDE7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHdoZXRoZXIgYXQgbGVhc3Qgb25lIG9mIHRoZSBoYW5kbGVycyBpcyByZWdpc3RlcmVkIGluIHRoZSBnaXZlblxuICogIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gQ3VzdG9tIGV2ZW50IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyB0aGVyZSBhdCBsZWFzdCBvbmUgaGFuZGxlciBpbiBldmVudCBuYW1lP1xuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLmhhc0xpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gIHJldHVybiB0aGlzLmdldExpc3RlbmVyTGVuZ3RoKGV2ZW50TmFtZSkgPiAwO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBjb3VudCBvZiBldmVudHMgcmVnaXN0ZXJlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBDdXN0b20gZXZlbnQgbmFtZVxuICogQHJldHVybnMge251bWJlcn0gbnVtYmVyIG9mIGV2ZW50XG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuZ2V0TGlzdGVuZXJMZW5ndGggPSBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX3NhZmVFdmVudChldmVudE5hbWUpO1xuXG4gIHJldHVybiBldmVudHMubGVuZ3RoO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21FdmVudHM7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgR2V0IGV2ZW50IGNvbGxlY3Rpb24gZm9yIHNwZWNpZmljIEhUTUwgZWxlbWVudFxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVZFTlRfS0VZID0gJ19mZUV2ZW50S2V5JztcblxuLyoqXG4gKiBHZXQgZXZlbnQgY29sbGVjdGlvbiBmb3Igc3BlY2lmaWMgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIGV2ZW50IHR5cGVcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhZmVFdmVudChlbGVtZW50LCB0eXBlKSB7XG4gIHZhciBldmVudHMgPSBlbGVtZW50W0VWRU5UX0tFWV07XG4gIHZhciBoYW5kbGVycztcblxuICBpZiAoIWV2ZW50cykge1xuICAgIGV2ZW50cyA9IGVsZW1lbnRbRVZFTlRfS0VZXSA9IHt9O1xuICB9XG5cbiAgaGFuZGxlcnMgPSBldmVudHNbdHlwZV07XG4gIGlmICghaGFuZGxlcnMpIHtcbiAgICBoYW5kbGVycyA9IGV2ZW50c1t0eXBlXSA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIGhhbmRsZXJzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNhZmVFdmVudDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBHZXQgYSB0YXJnZXQgZWxlbWVudCBmcm9tIGFuIGV2ZW50IG9iamVjdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBHZXQgYSB0YXJnZXQgZWxlbWVudCBmcm9tIGFuIGV2ZW50IG9iamVjdC5cbiAqIEBwYXJhbSB7RXZlbnR9IGUgLSBldmVudCBvYmplY3RcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSB0YXJnZXQgZWxlbWVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpkb21FdmVudFxuICovXG5mdW5jdGlvbiBnZXRUYXJnZXQoZSkge1xuICByZXR1cm4gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBVbmJpbmQgRE9NIGV2ZW50c1xuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNTdHJpbmcgPSByZXF1aXJlKCcuLi90eXBlL2lzU3RyaW5nJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb24vZm9yRWFjaCcpO1xuXG52YXIgc2FmZUV2ZW50ID0gcmVxdWlyZSgnLi9fc2FmZUV2ZW50Jyk7XG5cbi8qKlxuICogVW5iaW5kIERPTSBldmVudHNcbiAqIElmIGEgaGFuZGxlciBmdW5jdGlvbiBpcyBub3QgcGFzc2VkLCByZW1vdmUgYWxsIGV2ZW50cyBvZiB0aGF0IHR5cGUuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byB1bmJpbmQgZXZlbnRzXG4gKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gdHlwZXMgLSBTcGFjZSBzcGxpdHRlZCBldmVudHMgbmFtZXMgb3IgZXZlbnROYW1lOmhhbmRsZXIgb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlcl0gLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbUV2ZW50XG4gKiBAZXhhbXBsZVxuICogLy8gRm9sbG93aW5nIHRoZSBleGFtcGxlIG9mIGRvbUV2ZW50I29uXG4gKiBcbiAqIC8vIFVuYmluZCBvbmUgZXZlbnQgZnJvbSBhbiBlbGVtZW50LlxuICogb2ZmKGRpdiwgJ2NsaWNrJywgdG9nZ2xlKTtcbiAqIFxuICogLy8gVW5iaW5kIG11bHRpcGxlIGV2ZW50cyB3aXRoIGEgc2FtZSBoYW5kbGVyIGZyb20gbXVsdGlwbGUgZWxlbWVudHMgYXQgb25jZS5cbiAqIC8vIFVzZSBldmVudCBuYW1lcyBzcGxpdHRlZCBieSBhIHNwYWNlLlxuICogb2ZmKGVsZW1lbnQsICdtb3VzZWVudGVyIG1vdXNlbGVhdmUnLCBjaGFuZ2VDb2xvcik7XG4gKiBcbiAqIC8vIFVuYmluZCBtdWx0aXBsZSBldmVudHMgd2l0aCBkaWZmZXJlbnQgaGFuZGxlcnMgZnJvbSBhbiBlbGVtZW50IGF0IG9uY2UuXG4gKiAvLyBVc2UgYW4gb2JqZWN0IHdoaWNoIG9mIGtleSBpcyBhbiBldmVudCBuYW1lIGFuZCB2YWx1ZSBpcyBhIGhhbmRsZXIgZnVuY3Rpb24uXG4gKiBvZmYoZGl2LCB7XG4gKiAgIGtleWRvd246IGhpZ2hsaWdodCxcbiAqICAga2V5dXA6IGRlaGlnaGxpZ2h0XG4gKiB9KTtcbiAqIFxuICogLy8gVW5iaW5kIGV2ZW50cyB3aXRob3V0IGhhbmRsZXJzLlxuICogb2ZmKGRpdiwgJ2RyYWcnKTtcbiAqL1xuZnVuY3Rpb24gb2ZmKGVsZW1lbnQsIHR5cGVzLCBoYW5kbGVyKSB7XG4gIGlmIChpc1N0cmluZyh0eXBlcykpIHtcbiAgICBmb3JFYWNoKHR5cGVzLnNwbGl0KC9cXHMrL2cpLCBmdW5jdGlvbih0eXBlKSB7XG4gICAgICB1bmJpbmRFdmVudChlbGVtZW50LCB0eXBlLCBoYW5kbGVyKTtcbiAgICB9KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvckVhY2godHlwZXMsIGZ1bmN0aW9uKGZ1bmMsIHR5cGUpIHtcbiAgICB1bmJpbmRFdmVudChlbGVtZW50LCB0eXBlLCBmdW5jKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVW5iaW5kIERPTSBldmVudHNcbiAqIElmIGEgaGFuZGxlciBmdW5jdGlvbiBpcyBub3QgcGFzc2VkLCByZW1vdmUgYWxsIGV2ZW50cyBvZiB0aGF0IHR5cGUuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byB1bmJpbmQgZXZlbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIGV2ZW50cyBuYW1lXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlcl0gLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB1bmJpbmRFdmVudChlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XG4gIHZhciBldmVudHMgPSBzYWZlRXZlbnQoZWxlbWVudCwgdHlwZSk7XG4gIHZhciBpbmRleDtcblxuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBmb3JFYWNoKGV2ZW50cywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCB0eXBlLCBpdGVtLndyYXBwZWRIYW5kbGVyKTtcbiAgICB9KTtcbiAgICBldmVudHMuc3BsaWNlKDAsIGV2ZW50cy5sZW5ndGgpO1xuICB9IGVsc2Uge1xuICAgIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbihpdGVtLCBpZHgpIHtcbiAgICAgIGlmIChoYW5kbGVyID09PSBpdGVtLmhhbmRsZXIpIHtcbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCB0eXBlLCBpdGVtLndyYXBwZWRIYW5kbGVyKTtcbiAgICAgICAgaW5kZXggPSBpZHg7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gQW4gZWxlbWVudCB0byByZW1vdmUgYW4gZXZlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgdHlwZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIGV2ZW50IGhhbmRsZXJcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xuICBpZiAoJ3JlbW92ZUV2ZW50TGlzdGVuZXInIGluIGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcik7XG4gIH0gZWxzZSBpZiAoJ2RldGFjaEV2ZW50JyBpbiBlbGVtZW50KSB7XG4gICAgZWxlbWVudC5kZXRhY2hFdmVudCgnb24nICsgdHlwZSwgaGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvZmY7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQmluZCBET00gZXZlbnRzXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1N0cmluZyA9IHJlcXVpcmUoJy4uL3R5cGUvaXNTdHJpbmcnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoJyk7XG5cbnZhciBzYWZlRXZlbnQgPSByZXF1aXJlKCcuL19zYWZlRXZlbnQnKTtcblxuLyoqXG4gKiBCaW5kIERPTSBldmVudHMuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kIGV2ZW50c1xuICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IHR5cGVzIC0gU3BhY2Ugc3BsaXR0ZWQgZXZlbnRzIG5hbWVzIG9yIGV2ZW50TmFtZTpoYW5kbGVyIG9iamVjdFxuICogQHBhcmFtIHsoZnVuY3Rpb258b2JqZWN0KX0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb24gb3IgY29udGV4dCBmb3IgaGFuZGxlciBtZXRob2RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF0gY29udGV4dCAtIGNvbnRleHQgZm9yIGhhbmRsZXIgbWV0aG9kLlxuICogQG1lbWJlcm9mIG1vZHVsZTpkb21FdmVudFxuICogQGV4YW1wbGVcbiAqIHZhciBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAqIFxuICogLy8gQmluZCBvbmUgZXZlbnQgdG8gYW4gZWxlbWVudC5cbiAqIG9uKGRpdiwgJ2NsaWNrJywgdG9nZ2xlKTtcbiAqIFxuICogLy8gQmluZCBtdWx0aXBsZSBldmVudHMgd2l0aCBhIHNhbWUgaGFuZGxlciB0byBtdWx0aXBsZSBlbGVtZW50cyBhdCBvbmNlLlxuICogLy8gVXNlIGV2ZW50IG5hbWVzIHNwbGl0dGVkIGJ5IGEgc3BhY2UuXG4gKiBvbihkaXYsICdtb3VzZWVudGVyIG1vdXNlbGVhdmUnLCBjaGFuZ2VDb2xvcik7XG4gKiBcbiAqIC8vIEJpbmQgbXVsdGlwbGUgZXZlbnRzIHdpdGggZGlmZmVyZW50IGhhbmRsZXJzIHRvIGFuIGVsZW1lbnQgYXQgb25jZS5cbiAqIC8vIFVzZSBhbiBvYmplY3Qgd2hpY2ggb2Yga2V5IGlzIGFuIGV2ZW50IG5hbWUgYW5kIHZhbHVlIGlzIGEgaGFuZGxlciBmdW5jdGlvbi5cbiAqIG9uKGRpdiwge1xuICogICBrZXlkb3duOiBoaWdobGlnaHQsXG4gKiAgIGtleXVwOiBkZWhpZ2hsaWdodFxuICogfSk7XG4gKiBcbiAqIC8vIFNldCBhIGNvbnRleHQgZm9yIGhhbmRsZXIgbWV0aG9kLlxuICogdmFyIG5hbWUgPSAnZ2xvYmFsJztcbiAqIHZhciByZXBvc2l0b3J5ID0ge25hbWU6ICdDb2RlU25pcHBldCd9O1xuICogb24oZGl2LCAnZHJhZycsIGZ1bmN0aW9uKCkge1xuICogIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XG4gKiB9LCByZXBvc2l0b3J5KTtcbiAqIC8vIFJlc3VsdCB3aGVuIHlvdSBkcmFnIGEgZGl2OiBcIkNvZGVTbmlwcGV0XCJcbiAqL1xuZnVuY3Rpb24gb24oZWxlbWVudCwgdHlwZXMsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgaWYgKGlzU3RyaW5nKHR5cGVzKSkge1xuICAgIGZvckVhY2godHlwZXMuc3BsaXQoL1xccysvZyksIGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgIGJpbmRFdmVudChlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvckVhY2godHlwZXMsIGZ1bmN0aW9uKGZ1bmMsIHR5cGUpIHtcbiAgICBiaW5kRXZlbnQoZWxlbWVudCwgdHlwZSwgZnVuYywgaGFuZGxlcik7XG4gIH0pO1xufVxuXG4vKipcbiAqIEJpbmQgRE9NIGV2ZW50c1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZCBldmVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gZXZlbnRzIG5hbWVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uIG9yIGNvbnRleHQgZm9yIGhhbmRsZXIgbWV0aG9kXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdIGNvbnRleHQgLSBjb250ZXh0IGZvciBoYW5kbGVyIG1ldGhvZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGJpbmRFdmVudChlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gIGZ1bmN0aW9uIGV2ZW50SGFuZGxlcihlKSB7XG4gICAgaGFuZGxlci5jYWxsKGNvbnRleHQgfHwgZWxlbWVudCwgZSB8fCB3aW5kb3cuZXZlbnQpO1xuICB9XG5cbiAgaWYgKCdhZGRFdmVudExpc3RlbmVyJyBpbiBlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGV2ZW50SGFuZGxlcik7XG4gIH0gZWxzZSBpZiAoJ2F0dGFjaEV2ZW50JyBpbiBlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgZXZlbnRIYW5kbGVyKTtcbiAgfVxuICBtZW1vcml6ZUhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgZXZlbnRIYW5kbGVyKTtcbn1cblxuLyoqXG4gKiBNZW1vcml6ZSBET00gZXZlbnQgaGFuZGxlciBmb3IgdW5iaW5kaW5nLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZCBldmVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gZXZlbnRzIG5hbWVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uIHRoYXQgdXNlciBwYXNzZWQgYXQgb24oKSB1c2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZWRIYW5kbGVyIC0gaGFuZGxlciBmdW5jdGlvbiB0aGF0IHdyYXBwZWQgYnkgZG9tZXZlbnQgZm9yIGltcGxlbWVudGluZyBzb21lIGZlYXR1cmVzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtZW1vcml6ZUhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgd3JhcHBlZEhhbmRsZXIpIHtcbiAgdmFyIGV2ZW50cyA9IHNhZmVFdmVudChlbGVtZW50LCB0eXBlKTtcbiAgdmFyIGV4aXN0SW5FdmVudHMgPSBmYWxzZTtcblxuICBmb3JFYWNoKGV2ZW50cywgZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iai5oYW5kbGVyID09PSBoYW5kbGVyKSB7XG4gICAgICBleGlzdEluRXZlbnRzID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICBpZiAoIWV4aXN0SW5FdmVudHMpIHtcbiAgICBldmVudHMucHVzaCh7XG4gICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgd3JhcHBlZEhhbmRsZXI6IHdyYXBwZWRIYW5kbGVyXG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvbjtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBQcmV2ZW50IGRlZmF1bHQgYWN0aW9uXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUHJldmVudCBkZWZhdWx0IGFjdGlvblxuICogQHBhcmFtIHtFdmVudH0gZSAtIGV2ZW50IG9iamVjdFxuICogQG1lbWJlcm9mIG1vZHVsZTpkb21FdmVudFxuICovXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XG4gIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByZXZlbnREZWZhdWx0O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFNldCBjbGFzc05hbWUgdmFsdWVcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi90eXBlL2lzQXJyYXknKTtcbnZhciBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL3R5cGUvaXNVbmRlZmluZWQnKTtcblxuLyoqXG4gKiBTZXQgY2xhc3NOYW1lIHZhbHVlXG4gKiBAcGFyYW0geyhIVE1MRWxlbWVudHxTVkdFbGVtZW50KX0gZWxlbWVudCAtIHRhcmdldCBlbGVtZW50XG4gKiBAcGFyYW0geyhzdHJpbmd8c3RyaW5nW10pfSBjc3NDbGFzcyAtIGNsYXNzIG5hbWVzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXRDbGFzc05hbWUoZWxlbWVudCwgY3NzQ2xhc3MpIHtcbiAgY3NzQ2xhc3MgPSBpc0FycmF5KGNzc0NsYXNzKSA/IGNzc0NsYXNzLmpvaW4oJyAnKSA6IGNzc0NsYXNzO1xuXG4gIGNzc0NsYXNzID0gY3NzQ2xhc3MucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcblxuICBpZiAoaXNVbmRlZmluZWQoZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCkpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NsYXNzO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCA9IGNzc0NsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENsYXNzTmFtZTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBBZGQgY3NzIGNsYXNzIHRvIGVsZW1lbnRcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL2ZvckVhY2gnKTtcbnZhciBpbkFycmF5ID0gcmVxdWlyZSgnLi4vYXJyYXkvaW5BcnJheScpO1xudmFyIGdldENsYXNzID0gcmVxdWlyZSgnLi9nZXRDbGFzcycpO1xudmFyIHNldENsYXNzTmFtZSA9IHJlcXVpcmUoJy4vX3NldENsYXNzTmFtZScpO1xuXG4vKipcbiAqIGRvbVV0aWwgbW9kdWxlXG4gKiBAbW9kdWxlIGRvbVV0aWxcbiAqL1xuXG4vKipcbiAqIEFkZCBjc3MgY2xhc3MgdG8gZWxlbWVudFxuICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8U1ZHRWxlbWVudCl9IGVsZW1lbnQgLSB0YXJnZXQgZWxlbWVudFxuICogQHBhcmFtIHsuLi5zdHJpbmd9IGNzc0NsYXNzIC0gY3NzIGNsYXNzZXMgdG8gYWRkXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbVV0aWxcbiAqL1xuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCkge1xuICB2YXIgY3NzQ2xhc3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB2YXIgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gIHZhciBuZXdDbGFzcyA9IFtdO1xuICB2YXIgb3JpZ2luO1xuXG4gIGlmIChjbGFzc0xpc3QpIHtcbiAgICBmb3JFYWNoKGNzc0NsYXNzLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBvcmlnaW4gPSBnZXRDbGFzcyhlbGVtZW50KTtcblxuICBpZiAob3JpZ2luKSB7XG4gICAgY3NzQ2xhc3MgPSBbXS5jb25jYXQob3JpZ2luLnNwbGl0KC9cXHMrLyksIGNzc0NsYXNzKTtcbiAgfVxuXG4gIGZvckVhY2goY3NzQ2xhc3MsIGZ1bmN0aW9uKGNscykge1xuICAgIGlmIChpbkFycmF5KGNscywgbmV3Q2xhc3MpIDwgMCkge1xuICAgICAgbmV3Q2xhc3MucHVzaChjbHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2V0Q2xhc3NOYW1lKGVsZW1lbnQsIG5ld0NsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRDbGFzcztcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBGaW5kIHBhcmVudCBlbGVtZW50IHJlY3Vyc2l2ZWx5XG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBtYXRjaGVzID0gcmVxdWlyZSgnLi9tYXRjaGVzJyk7XG5cbi8qKlxuICogRmluZCBwYXJlbnQgZWxlbWVudCByZWN1cnNpdmVseVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGJhc2UgZWxlbWVudCB0byBzdGFydCBmaW5kXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBzZWxlY3RvciBzdHJpbmcgZm9yIGZpbmRcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSBlbGVtZW50IGZpbmRlZCBvciBudWxsXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbVV0aWxcbiAqL1xuZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICB2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gIGlmIChtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQgIT09IGRvY3VtZW50KSB7XG4gICAgaWYgKG1hdGNoZXMocGFyZW50LCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEdldCBIVE1MIGVsZW1lbnQncyBkZXNpZ24gY2xhc3Nlcy5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vdHlwZS9pc1VuZGVmaW5lZCcpO1xuXG4vKipcbiAqIEdldCBIVE1MIGVsZW1lbnQncyBkZXNpZ24gY2xhc3Nlcy5cbiAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fFNWR0VsZW1lbnQpfSBlbGVtZW50IHRhcmdldCBlbGVtZW50XG4gKiBAcmV0dXJucyB7c3RyaW5nfSBlbGVtZW50IGNzcyBjbGFzcyBuYW1lXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbVV0aWxcbiAqL1xuZnVuY3Rpb24gZ2V0Q2xhc3MoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQuY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0Q2xhc3M7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgZWxlbWVudCBtYXRjaCBzZWxlY3RvclxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5BcnJheSA9IHJlcXVpcmUoJy4uL2FycmF5L2luQXJyYXknKTtcbnZhciB0b0FycmF5ID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi90b0FycmF5Jyk7XG5cbnZhciBlbFByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG52YXIgbWF0Y2hTZWxlY3RvciA9IGVsUHJvdG8ubWF0Y2hlcyB8fFxuICAgIGVsUHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgZWxQcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBlbFByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICAgIHZhciBkb2MgPSB0aGlzLmRvY3VtZW50IHx8IHRoaXMub3duZXJEb2N1bWVudDtcblxuICAgICAgcmV0dXJuIGluQXJyYXkodGhpcywgdG9BcnJheShkb2MucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKSA+IC0xO1xuICAgIH07XG5cbi8qKlxuICogQ2hlY2sgZWxlbWVudCBtYXRjaCBzZWxlY3RvclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgdG8gY2hlY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIHNlbGVjdG9yIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXMgc2VsZWN0b3IgbWF0Y2hlZCB0byBlbGVtZW50P1xuICogQG1lbWJlcm9mIG1vZHVsZTpkb21VdGlsXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIG1hdGNoU2VsZWN0b3IuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlcztcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBSZW1vdmUgY3NzIGNsYXNzIGZyb20gZWxlbWVudFxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm9yRWFjaEFycmF5ID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoQXJyYXknKTtcbnZhciBpbkFycmF5ID0gcmVxdWlyZSgnLi4vYXJyYXkvaW5BcnJheScpO1xudmFyIGdldENsYXNzID0gcmVxdWlyZSgnLi9nZXRDbGFzcycpO1xudmFyIHNldENsYXNzTmFtZSA9IHJlcXVpcmUoJy4vX3NldENsYXNzTmFtZScpO1xuXG4vKipcbiAqIFJlbW92ZSBjc3MgY2xhc3MgZnJvbSBlbGVtZW50XG4gKiBAcGFyYW0geyhIVE1MRWxlbWVudHxTVkdFbGVtZW50KX0gZWxlbWVudCAtIHRhcmdldCBlbGVtZW50XG4gKiBAcGFyYW0gey4uLnN0cmluZ30gY3NzQ2xhc3MgLSBjc3MgY2xhc3NlcyB0byByZW1vdmVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZG9tVXRpbFxuICovXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50KSB7XG4gIHZhciBjc3NDbGFzcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHZhciBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgdmFyIG9yaWdpbiwgbmV3Q2xhc3M7XG5cbiAgaWYgKGNsYXNzTGlzdCkge1xuICAgIGZvckVhY2hBcnJheShjc3NDbGFzcywgZnVuY3Rpb24obmFtZSkge1xuICAgICAgY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcbiAgICB9KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIG9yaWdpbiA9IGdldENsYXNzKGVsZW1lbnQpLnNwbGl0KC9cXHMrLyk7XG4gIG5ld0NsYXNzID0gW107XG4gIGZvckVhY2hBcnJheShvcmlnaW4sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAoaW5BcnJheShuYW1lLCBjc3NDbGFzcykgPCAwKSB7XG4gICAgICBuZXdDbGFzcy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2V0Q2xhc3NOYW1lKGVsZW1lbnQsIG5ld0NsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZW1vdmVDbGFzcztcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBSZW1vdmUgZWxlbWVudCBmcm9tIHBhcmVudCBub2RlLlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFJlbW92ZSBlbGVtZW50IGZyb20gcGFyZW50IG5vZGUuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byByZW1vdmUuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbVV0aWxcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbW92ZUVsZW1lbnQ7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgRXh0ZW5kIHRoZSB0YXJnZXQgb2JqZWN0IGZyb20gb3RoZXIgb2JqZWN0cy5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbW9kdWxlIG9iamVjdFxuICovXG5cbi8qKlxuICogRXh0ZW5kIHRoZSB0YXJnZXQgb2JqZWN0IGZyb20gb3RoZXIgb2JqZWN0cy5cbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBPYmplY3QgdGhhdCB3aWxsIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0gey4uLm9iamVjdH0gb2JqZWN0cyAtIE9iamVjdHMgYXMgc291cmNlc1xuICogQHJldHVybnMge29iamVjdH0gRXh0ZW5kZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9iamVjdFxuICovXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBvYmplY3RzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgc291cmNlLCBwcm9wLCBpLCBsZW47XG5cbiAgZm9yIChpID0gMSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAocHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwoc291cmNlLCBwcm9wKSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHRlbmQ7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgUmVxdWVzdCBpbWFnZSBwaW5nLlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm9yRWFjaE93blByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzJyk7XG5cbi8qKlxuICogQG1vZHVsZSByZXF1ZXN0XG4gKi9cblxuLyoqXG4gKiBSZXF1ZXN0IGltYWdlIHBpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIHVybCBmb3IgcGluZyByZXF1ZXN0XG4gKiBAcGFyYW0ge09iamVjdH0gdHJhY2tpbmdJbmZvIGluZm9zIGZvciBtYWtlIHF1ZXJ5IHN0cmluZ1xuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICogQG1lbWJlcm9mIG1vZHVsZTpyZXF1ZXN0XG4gKiBAZXhhbXBsZVxuICogdmFyIGltYWdlUGluZyA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvcmVxdWVzdC9pbWFnZVBpbmcnKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiBpbWFnZVBpbmcoJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2NvbGxlY3QnLCB7XG4gKiAgICAgdjogMSxcbiAqICAgICB0OiAnZXZlbnQnLFxuICogICAgIHRpZDogJ3RyYWNraW5naWQnLFxuICogICAgIGNpZDogJ2NpZCcsXG4gKiAgICAgZHA6ICdkcCcsXG4gKiAgICAgZGg6ICdkaCdcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBpbWFnZVBpbmcodXJsLCB0cmFja2luZ0luZm8pIHtcbiAgdmFyIHRyYWNraW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB2YXIgcXVlcnlTdHJpbmcgPSAnJztcbiAgZm9yRWFjaE93blByb3BlcnRpZXModHJhY2tpbmdJbmZvLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcXVlcnlTdHJpbmcgKz0gJyYnICsga2V5ICsgJz0nICsgdmFsdWU7XG4gIH0pO1xuICBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nLnN1YnN0cmluZygxKTtcblxuICB0cmFja2luZ0VsZW1lbnQuc3JjID0gdXJsICsgJz8nICsgcXVlcnlTdHJpbmc7XG5cbiAgdHJhY2tpbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodHJhY2tpbmdFbGVtZW50KTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0cmFja2luZ0VsZW1lbnQpO1xuXG4gIHJldHVybiB0cmFja2luZ0VsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW1hZ2VQaW5nO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFNlbmQgaG9zdG5hbWUgb24gRE9NQ29udGVudExvYWRlZC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vdHlwZS9pc1VuZGVmaW5lZCcpO1xudmFyIGltYWdlUGluZyA9IHJlcXVpcmUoJy4vaW1hZ2VQaW5nJyk7XG5cbnZhciBtczdkYXlzID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGRhdGUgaGFzIHBhc3NlZCA3IGRheXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXRlIC0gbWlsbGlzZWNvbmRzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRXhwaXJlZChkYXRlKSB7XG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICByZXR1cm4gbm93IC0gZGF0ZSA+IG1zN2RheXM7XG59XG5cbi8qKlxuICogU2VuZCBob3N0bmFtZSBvbiBET01Db250ZW50TG9hZGVkLlxuICogVG8gcHJldmVudCBob3N0bmFtZSBzZXQgdHVpLnVzYWdlU3RhdGlzdGljcyB0byBmYWxzZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBOYW1lIC0gYXBwbGljYXRpb24gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHRyYWNraW5nSWQgLSBHQSB0cmFja2luZyBJRFxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBzZW5kSG9zdG5hbWUoYXBwTmFtZSwgdHJhY2tpbmdJZCkge1xuICB2YXIgdXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2NvbGxlY3QnO1xuICB2YXIgaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgdmFyIGhpdFR5cGUgPSAnZXZlbnQnO1xuICB2YXIgZXZlbnRDYXRlZ29yeSA9ICd1c2UnO1xuICB2YXIgYXBwbGljYXRpb25LZXlGb3JTdG9yYWdlID0gJ1RPQVNUIFVJICcgKyBhcHBOYW1lICsgJyBmb3IgJyArIGhvc3RuYW1lICsgJzogU3RhdGlzdGljcyc7XG4gIHZhciBkYXRlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGFwcGxpY2F0aW9uS2V5Rm9yU3RvcmFnZSk7XG5cbiAgLy8gc2tpcCBpZiB0aGUgZmxhZyBpcyBkZWZpbmVkIGFuZCBpcyBzZXQgdG8gZmFsc2UgZXhwbGljaXRseVxuICBpZiAoIWlzVW5kZWZpbmVkKHdpbmRvdy50dWkpICYmIHdpbmRvdy50dWkudXNhZ2VTdGF0aXN0aWNzID09PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHNraXAgaWYgbm90IHBhc3Mgc2V2ZW4gZGF5cyBvbGRcbiAgaWYgKGRhdGUgJiYgIWlzRXhwaXJlZChkYXRlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShhcHBsaWNhdGlvbktleUZvclN0b3JhZ2UsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIGltYWdlUGluZyh1cmwsIHtcbiAgICAgICAgdjogMSxcbiAgICAgICAgdDogaGl0VHlwZSxcbiAgICAgICAgdGlkOiB0cmFja2luZ0lkLFxuICAgICAgICBjaWQ6IGhvc3RuYW1lLFxuICAgICAgICBkcDogaG9zdG5hbWUsXG4gICAgICAgIGRoOiBhcHBOYW1lLFxuICAgICAgICBlbDogYXBwTmFtZSxcbiAgICAgICAgZWM6IGV2ZW50Q2F0ZWdvcnlcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgMTAwMCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VuZEhvc3RuYW1lO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGFuIGluc3RhbmNlIG9mIEFycmF5IG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhbiBpbnN0YW5jZSBvZiBBcnJheSBvciBub3QuXG4gKiBJZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYW4gaW5zdGFuY2Ugb2YgQXJyYXksIHJldHVybiB0cnVlLlxuICogQHBhcmFtIHsqfSBvYmogLSBUYXJnZXQgZm9yIGNoZWNraW5nXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gSXMgYXJyYXkgaW5zdGFuY2U/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBzdHJpbmcgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgYm9vbGVhbiBvciBub3QuXG4gKiAgSWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgYm9vbGVhbiwgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBib29sZWFuP1xuICogQG1lbWJlcm9mIG1vZHVsZTp0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzQm9vbGVhbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdib29sZWFuJyB8fCBvYmogaW5zdGFuY2VvZiBCb29sZWFuO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQm9vbGVhbjtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBleGlzdGluZyBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJy4vaXNVbmRlZmluZWQnKTtcbnZhciBpc051bGwgPSByZXF1aXJlKCcuL2lzTnVsbCcpO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGV4aXN0aW5nIG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBub3QgbnVsbCBhbmQgbm90IHVuZGVmaW5lZCwgcmV0dXJucyB0cnVlLlxuICogQHBhcmFtIHsqfSBwYXJhbSAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBleGlzdHk/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqIEBleGFtcGxlXG4gKiB2YXIgaXNFeGlzdHkgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L3R5cGUvaXNFeGlzdHknKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiBpc0V4aXN0eSgnJyk7IC8vdHJ1ZVxuICogaXNFeGlzdHkoMCk7IC8vdHJ1ZVxuICogaXNFeGlzdHkoW10pOyAvL3RydWVcbiAqIGlzRXhpc3R5KHt9KTsgLy90cnVlXG4gKiBpc0V4aXN0eShudWxsKTsgLy9mYWxzZVxuICogaXNFeGlzdHkodW5kZWZpbmVkKTsgLy9mYWxzZVxuKi9cbmZ1bmN0aW9uIGlzRXhpc3R5KHBhcmFtKSB7XG4gIHJldHVybiAhaXNVbmRlZmluZWQocGFyYW0pICYmICFpc051bGwocGFyYW0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXhpc3R5O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgZnVuY3Rpb24gb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgZnVuY3Rpb24gb3Igbm90LlxuICogSWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgZnVuY3Rpb24sIHJldHVybiB0cnVlLlxuICogQHBhcmFtIHsqfSBvYmogLSBUYXJnZXQgZm9yIGNoZWNraW5nXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gSXMgZnVuY3Rpb24/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBpbnN0YW5jZSBvZiBIVE1MTm9kZSBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBpbnN0YW5jZSBvZiBIVE1MTm9kZSBvciBub3QuXG4gKiBJZiB0aGUgZ2l2ZW4gdmFyaWFibGVzIGlzIGEgaW5zdGFuY2Ugb2YgSFRNTE5vZGUsIHJldHVybiB0cnVlLlxuICogQHBhcmFtIHsqfSBodG1sIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIEhUTUxOb2RlID9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc0hUTUxOb2RlKGh0bWwpIHtcbiAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gKGh0bWwgJiYgKGh0bWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCAhIWh0bWwubm9kZVR5cGUpKTtcbiAgfVxuXG4gIHJldHVybiAhIShodG1sICYmIGh0bWwubm9kZVR5cGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSFRNTE5vZGU7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgbnVsbCBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgbnVsbCBvciBub3QuXG4gKiBJZiB0aGUgZ2l2ZW4gdmFyaWFibGUoYXJndW1lbnRzWzBdKSBpcyBudWxsLCByZXR1cm5zIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBudWxsP1xuICogQG1lbWJlcm9mIG1vZHVsZTp0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc051bGw7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBudW1iZXIgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgbnVtYmVyIG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIG51bWJlciwgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBudW1iZXI/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJyB8fCBvYmogaW5zdGFuY2VvZiBOdW1iZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOdW1iZXI7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYW4gb2JqZWN0IG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhbiBvYmplY3Qgb3Igbm90LlxuICogSWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGFuIG9iamVjdCwgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBvYmplY3Q/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgc3RyaW5nIG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIHN0cmluZyBvciBub3QuXG4gKiBJZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBzdHJpbmcsIHJldHVybiB0cnVlLlxuICogQHBhcmFtIHsqfSBvYmogLSBUYXJnZXQgZm9yIGNoZWNraW5nXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gSXMgc3RyaW5nP1xuICogQG1lbWJlcm9mIG1vZHVsZTp0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgfHwgb2JqIGluc3RhbmNlb2YgU3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIHVuZGVmaW5lZCBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgdW5kZWZpbmVkIG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyB1bmRlZmluZWQsIHJldHVybnMgdHJ1ZS5cbiAqIEBwYXJhbSB7Kn0gb2JqIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIHVuZGVmaW5lZD9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmaW5lZFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVW5kZWZpbmVkO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoZSBzdGF0aWMgdmFsdWVzXG4gKiBAYXV0aG9yIE5ITi4gRkUgZGV2IHRlYW0uPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgZm9yRWFjaE93blByb3BlcnRpZXMgZnJvbSAndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzJztcblxuY29uc3QgQ1NTX1BSRUZJWCA9ICd0dWktc2VsZWN0LWJveCc7XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSB7XG4gIFNFTEVDVF9CT1g6ICcnLFxuICBJVEVNOiAnaXRlbScsXG4gIElURU1fR1JPVVA6ICdpdGVtLWdyb3VwJyxcbiAgSVRFTV9HUk9VUF9MQUJFTDogJ2l0ZW0tZ3JvdXAtbGFiZWwnLFxuICBEUk9QRE9XTjogJ2Ryb3Bkb3duJyxcbiAgSU5QVVQ6ICdpbnB1dCcsXG4gIFBMQUNFSE9MREVSOiAncGxhY2Vob2xkZXInLFxuICBJQ09OOiAnaWNvbicsXG4gIE9QRU46ICdvcGVuJyxcbiAgSElEREVOOiAnaGlkZGVuJyxcbiAgRElTQUJMRUQ6ICdkaXNhYmxlZCcsXG4gIFNFTEVDVEVEOiAnc2VsZWN0ZWQnLFxuICBISUdITElHSFQ6ICdoaWdobGlnaHQnXG59O1xuXG5leHBvcnQgY29uc3QgY2xzID0gKGZ1bmN0aW9uKCkge1xuICBmb3JFYWNoT3duUHJvcGVydGllcyhjbGFzc05hbWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY2xhc3NOYW1lc1trZXldID0gYCR7Q1NTX1BSRUZJWH0tJHt2YWx1ZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc05hbWVzW2tleV0gPSBDU1NfUFJFRklYO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNsYXNzTmFtZXM7XG59KSgpO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IERyb3Bkb3duXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgZm9yRWFjaEFycmF5IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvY29sbGVjdGlvbi9mb3JFYWNoQXJyYXknO1xuaW1wb3J0IGlzRXhpc3R5IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc0V4aXN0eSc7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzTnVtYmVyJztcbmltcG9ydCBhZGRDbGFzcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlRWxlbWVudCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgSXRlbUdyb3VwIGZyb20gJy4vaXRlbUdyb3VwJztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnNcbiAqICAgQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBsYWNlaG9sZGVyXSAtIHBsYWNlaG9sZGVyIGZvciBhbiBpbnB1dFxuICogICBAcGFyYW0ge2FycmF5PGl0ZW1EYXRhfGl0ZW1Hcm91cERhdGE+fSBvcHRpb25zLmRhdGEgLSBkYXRhIGZvciBJdGVtR3JvdXBzIGFuZCBJdGVtc1xuICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRpc2FibGVkPWZhbHNlXSAtIHdoZXRoZXIgYSBkcm9wZG93biBzaG91bGQgYmUgZGlzYWJsZWQgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoeyBwbGFjZWhvbGRlciwgZGF0YSwgZGlzYWJsZWQgPSBmYWxzZSB9KSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5lbCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgJycsIHsgY2xhc3NOYW1lOiBgJHtjbHMuRFJPUERPV059ICR7Y2xzLkhJRERFTn1gIH0pO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5uYXRpdmVFbCA9IGNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsICcnLCB7IGNsYXNzTmFtZTogY2xzLkhJRERFTiwgdGFiSW5kZXg6IC0xIH0pO1xuXG4gICAgLyoqXG4gICAgICogSXRlbXMgYW5kIEl0ZW1Hcm91cHNcbiAgICAgKiBAdHlwZSB7QXJyYXkuPEl0ZW18SXRlbUdyb3VwPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIHRoZSBudW1iZXIgb2YgSXRlbVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLml0ZW1MZW5ndGggPSAwO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0l0ZW19XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SXRlbX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gbnVsbDtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZShkYXRhLCBkaXNhYmxlZCwgcGxhY2Vob2xkZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBJdGVtcyBhbmQgSXRlbUdyb3VwcyBhbmQgY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgSXRlbXNcbiAgICogQHJldHVybiB7YXJyYXk8SXRlbXxJdGVtR3JvdXA+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZUl0ZW1zKGRhdGEpIHtcbiAgICBsZXQgaXRlbTtcbiAgICBsZXQgaXRlbUluZGV4ID0gMDtcbiAgICBsZXQgaXRlbUdyb3VwSW5kZXggPSAwO1xuICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICBpZiAoZGF0dW0uZGF0YSkge1xuICAgICAgICBpdGVtID0gbmV3IEl0ZW1Hcm91cCh7IGluZGV4OiBpdGVtSW5kZXgsIGl0ZW1Hcm91cEluZGV4LCAuLi5kYXR1bSB9KTtcbiAgICAgICAgaXRlbUluZGV4ICs9IGRhdHVtLmRhdGEubGVuZ3RoIC0gMTtcbiAgICAgICAgaXRlbUdyb3VwSW5kZXggKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0gPSBuZXcgSXRlbSh7IGluZGV4OiBpdGVtSW5kZXgsIC4uLmRhdHVtIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICBpdGVtLmFwcGVuZFRvQ29udGFpbmVyKHRoaXMuZWwsIHRoaXMubmF0aXZlRWwpO1xuICAgICAgaXRlbUluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICB0aGlzLml0ZW1MZW5ndGggPSBpdGVtSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZShkYXRhLCBkaXNhYmxlZCwgcGxhY2Vob2xkZXIpIHtcbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsICcnLCB7IGxhYmVsOiBwbGFjZWhvbGRlciwgdmFsdWU6ICcnIH0sIHRoaXMubmF0aXZlRWwpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbGl6ZUl0ZW1zKGRhdGEpO1xuXG4gICAgdGhpcy5pdGVyYXRlSXRlbXMoaXRlbSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtICYmIGl0ZW0uaXNTZWxlY3RlZCgpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEl0ZW0gJiYgaXRlbS5pc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgaXRlbS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZSBhIGZ1bmN0aW9uIHdoaWxlIGl0ZXJhdGluZyBpdGVtc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIGV4ZWN1dGVcbiAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzIC0gYXJndW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpdGVyYXRlSXRlbXMoY2FsbGJhY2ssIC4uLmFyZ3MpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZm9yRWFjaEFycmF5KHRoaXMuaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEl0ZW1Hcm91cCkge1xuICAgICAgICBmb3JFYWNoQXJyYXkoaXRlbS5nZXRJdGVtcygpLCBpdGVtSW5Hcm91cCA9PiB7XG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2suYXBwbHkodGhpcywgW2l0ZW1Jbkdyb3VwLCBpbmRleCwgLi4uYXJnc10pIHx8IGZhbHNlO1xuICAgICAgICAgIGluZGV4ICs9IDE7XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjay5hcHBseSh0aGlzLCBbaXRlbSwgaW5kZXgsIC4uLmFyZ3NdKTtcbiAgICAgIGluZGV4ICs9IDE7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBhIGRyb3Bkb3duIGxpc3RcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLkhJRERFTik7XG4gICAgY29uc3QgaGlnaGxpZ2h0ZWRJdGVtID1cbiAgICAgICF0aGlzLnNlbGVjdGVkSXRlbSB8fCB0aGlzLnNlbGVjdGVkSXRlbS5pc0Rpc2FibGVkKClcbiAgICAgICAgPyB0aGlzLmdldEl0ZW1zKGl0ZW0gPT4gIWl0ZW0uaXNEaXNhYmxlZCgpKVswXVxuICAgICAgICA6IHRoaXMuc2VsZWN0ZWRJdGVtO1xuICAgIHRoaXMuaGlnaGxpZ2h0KGhpZ2hsaWdodGVkSXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgYSBkcm9wZG93biBsaXN0XG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBhZGRDbGFzcyh0aGlzLmVsLCBjbHMuSElEREVOKTtcbiAgICB0aGlzLmRlaGlnaGxpZ2h0KCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBhbiBkcm9wZG93blxuICAgKi9cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLm5hdGl2ZUVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBhZGRDbGFzcyh0aGlzLmVsLCBjbHMuRElTQUJMRUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhbiBkcm9wZG93blxuICAgKi9cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMubmF0aXZlRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBjbHMuRElTQUJMRUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhbiBJdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxJdGVtfSB2YWx1ZSAtIGlmIHN0cmluZywgZmluZCBhbiBJdGVtIGJ5IGl0cyB2YWx1ZS4gaWYgbnVtYmVyLCBmaW5kIGFuIEl0ZW0gYnkgaXRzIGluZGV4LlxuICAgKiBAcmV0dXJuIHtJdGVtfSByZXN1bHQgb2Ygc2VsZWN0aW9uXG4gICAqL1xuICBzZWxlY3QodmFsdWUpIHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB2YWx1ZSBpbnN0YW5jZW9mIEl0ZW0gPyB2YWx1ZSA6IHRoaXMuZ2V0SXRlbSh2YWx1ZSk7XG4gICAgdGhpcy5kZXNlbGVjdCgpO1xuXG4gICAgaWYgKCFzZWxlY3RlZEl0ZW0gfHwgKHNlbGVjdGVkSXRlbSAmJiBzZWxlY3RlZEl0ZW0uaXNEaXNhYmxlZCgpKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRJdGVtLnNlbGVjdCgpO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gc2VsZWN0ZWRJdGVtO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkSXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlbGVjdCBhbiBJdGVtXG4gICAqL1xuICBkZXNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmRlc2VsZWN0KCk7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZ2hsaWdodCBhbiBJdGVtXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xJdGVtfSB2YWx1ZSAtIGlmIHN0cmluZywgZmluZCBhbiBJdGVtIGJ5IGl0cyB2YWx1ZS4gaWYgbnVtYmVyLCBmaW5kIGFuIEl0ZW0gYnkgaXRzIGluZGV4LlxuICAgKi9cbiAgaGlnaGxpZ2h0KHZhbHVlKSB7XG4gICAgbGV0IGhpZ2hsaWdodGVkSXRlbTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJdGVtKSB7XG4gICAgICBoaWdobGlnaHRlZEl0ZW0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKGlzRXhpc3R5KHZhbHVlKSkge1xuICAgICAgaGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5nZXRJdGVtKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoaGlnaGxpZ2h0ZWRJdGVtICYmIGhpZ2hsaWdodGVkSXRlbSAhPT0gdGhpcy5oaWdobGlnaHRlZEl0ZW0pIHtcbiAgICAgIHRoaXMuZGVoaWdobGlnaHQoKTtcbiAgICAgIGhpZ2hsaWdodGVkSXRlbS5oaWdobGlnaHQoKTtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gaGlnaGxpZ2h0ZWRJdGVtO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWhpZ2hsaWdodCBhbiBJdGVtXG4gICAqL1xuICBkZWhpZ2hsaWdodCgpIHtcbiAgICBpZiAodGhpcy5oaWdobGlnaHRlZEl0ZW0pIHtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtLmRlaGlnaGxpZ2h0KCk7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgYSBoaWdobGlnaHRlZCBJdGVtXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaXJlY3Rpb24gLSBkaXJlY3Rpb24gdG8gbW92ZVxuICAgKi9cbiAgbW92ZUhpZ2hsaWdodGVkSXRlbShkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBoaWdobGlnaHRlZEl0ZW0gPSB0aGlzLmdldEhpZ2hsaWdodGVkSXRlbSgpO1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBpdGVtcztcblxuICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoaGlnaGxpZ2h0ZWRJdGVtKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChpbmRleCwgbGVuZ3RoLCBkaXJlY3Rpb24pO1xuXG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKCFpdGVtc1tpbmRleF0uaXNEaXNhYmxlZCgpKSB7XG4gICAgICAgICAgdGhpcy5oaWdobGlnaHQoaXRlbXNbaW5kZXhdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgoaW5kZXgsIGxlbmd0aCwgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRJdGVtSW5kZXgoaW5kZXgsIGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgcmV0dXJuIChpbmRleCArIGRpcmVjdGlvbiArIGxlbmd0aCkgJSBsZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBJdGVtcyB0aGF0IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gICAqIElmIGZpbHRlciBmdW5jdGlvbiBpcyBub3QgcGFzc2VkLCBpdCByZXR1cm5zIGFsbCBJdGVtc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGZpbHRlciBpdGVtc1xuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gdGhlIG51bWJlciBvZiBpdGVtcyB0byBmaW5kLiAtMSBtZWFucyBhbGwgaXRlbXMuXG4gICAqIEByZXR1cm4ge2FycmF5PEl0ZW0+fVxuICAgKi9cbiAgZ2V0SXRlbXMoY2FsbGJhY2sgPSAoKSA9PiB0cnVlLCBudW1iZXIgPSAtMSkge1xuICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgdGhpcy5pdGVyYXRlSXRlbXMoaXRlbSA9PiB7XG4gICAgICBpZiAoY2FsbGJhY2soaXRlbSkpIHtcbiAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgbnVtYmVyIC09IDE7XG5cbiAgICAgICAgcmV0dXJuIG51bWJlciAhPT0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIEl0ZW0gYnkgaXRzIGluZGV4IG9yIHZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdmFsdWUgLSBpZiBzdHJpbmcsIHRoZSBJdGVtJ3MgdmFsdWUuIGlmIG51bWJlciwgdGhlIEl0ZW0ncyBpbmRleC5cbiAgICogQHJldHVybiB7SXRlbX1cbiAgICovXG4gIGdldEl0ZW0odmFsdWUpIHtcbiAgICBjb25zdCBpc1ZhbGlkSXRlbSA9IGlzTnVtYmVyKHZhbHVlKVxuICAgICAgPyBjb21wYXJlZEl0ZW0gPT4gY29tcGFyZWRJdGVtLmdldEluZGV4KCkgPT09IHZhbHVlXG4gICAgICA6IGNvbXBhcmVkSXRlbSA9PiBjb21wYXJlZEl0ZW0uZ2V0VmFsdWUoKSA9PT0gdmFsdWU7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRJdGVtcyhpc1ZhbGlkSXRlbSwgMSlbMF07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBJdGVtR3JvdXBzIHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAgICogSWYgZmlsdGVyIGZ1bmN0aW9uIGlzIG5vdCBwYXNzZWQsIGl0IHJldHVybnMgYWxsIEl0ZW1Hcm91cHNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBmaWx0ZXIgaXRlbSBncm91cHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIHRoZSBudW1iZXIgb2YgaXRlbSBncm91cHMgdG8gZmluZC4gLTEgbWVhbnMgYWxsIGl0ZW0gZ3JvdXBzLlxuICAgKiBAcmV0dXJuIHthcnJheTxJdGVtR3JvdXA+fVxuICAgKi9cbiAgZ2V0SXRlbUdyb3VwcyhjYWxsYmFjayA9ICgpID0+IHRydWUsIG51bWJlciA9IC0xKSB7XG4gICAgY29uc3QgaXRlbUdyb3VwcyA9IFtdO1xuICAgIGZvckVhY2hBcnJheSh0aGlzLml0ZW1zLCBpdGVtR3JvdXAgPT4ge1xuICAgICAgaWYgKGl0ZW1Hcm91cCBpbnN0YW5jZW9mIEl0ZW1Hcm91cCAmJiBjYWxsYmFjayhpdGVtR3JvdXApKSB7XG4gICAgICAgIGl0ZW1Hcm91cHMucHVzaChpdGVtR3JvdXApO1xuICAgICAgICBudW1iZXIgLT0gMTtcblxuICAgICAgICByZXR1cm4gbnVtYmVyICE9PSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpdGVtR3JvdXBzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBJdGVtR3JvdXAgYnkgaXRzIGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIGdyb3VwSW5kZXggb2YgdGhlIEl0ZW1Hcm91cFxuICAgKiBAcmV0dXJuIHtJdGVtR3JvdXB9XG4gICAqL1xuICBnZXRJdGVtR3JvdXAoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJdGVtR3JvdXBzKGl0ZW1Hcm91cCA9PiBpdGVtR3JvdXAuZ2V0SW5kZXgoKSA9PT0gaW5kZXgsIDEpWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbnVtYmVyIG9mIEl0ZW1zXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEl0ZW1MZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbUxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHNlbGVjdGVkIEl0ZW1cbiAgICogQHJldHVybiB7SXRlbX1cbiAgICovXG4gIGdldFNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBoaWdobGlnaHRlZCBJdGVtXG4gICAqIEByZXR1cm4ge0l0ZW19XG4gICAqL1xuICBnZXRIaWdobGlnaHRlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgZWxlbWVudCBhbmQgbmF0aXZlIGVsZW1lbnQgdG8gdGhlIGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBjb250YWluZXIgZWxlbWVudFxuICAgKi9cbiAgYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm5hdGl2ZUVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IGEgZHJvcGRvd25cbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kZXN0cm95KCkpO1xuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgcmVtb3ZlRWxlbWVudCh0aGlzLm5hdGl2ZUVsKTtcbiAgICB0aGlzLmVsID0gdGhpcy5uYXRpdmVFbCA9IHRoaXMuaXRlbXMgPSB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gbnVsbDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gJy4vc2VsZWN0Qm94JztcbmltcG9ydCAnLi4vY3NzL3NlbGVjdEJveC5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RCb3g7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgSW5wdXRcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbmltcG9ydCBhZGRDbGFzcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlRWxlbWVudCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnNcbiAqICAgQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBsYWNlaG9sZGVyXSAtIHBsYWNlaG9sZGVyIGZvciBhIHNlbGVjdCBib3hcbiAqICAgQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmRpc2FibGVkXSAtIHdoZXRoZXIgYW4gaW5wdXQgc2hvdWxkIGJlIGRpc2FibGVkIG9yIG5vdFxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNob3dJY29uXSAtIHdoZXRoZXIgYW4gYXJyb3cgaWNvbiBpbiB0aGUgaW5wdXQgc2hvdWxkIGJlIHNob3duXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcbiAgY29uc3RydWN0b3IoeyBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIHNob3dJY29uIH0pIHtcbiAgICAvKipcbiAgICAgKiB0ZXh0IGZvciBhIHBsYWNlaG9sZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGxhY2Vob2xkZXJUZXh0ID0gcGxhY2Vob2xkZXI7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsIHsgY2xhc3NOYW1lOiBjbHMuSU5QVVQsIHRhYkluZGV4OiAwIH0pO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wbGFjZWhvbGRlckVsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJUZXh0LFxuICAgICAgeyBjbGFzc05hbWU6IGNscy5QTEFDRUhPTERFUiB9LFxuICAgICAgdGhpcy5lbFxuICAgICk7XG5cbiAgICB0aGlzLmluaXRpYWxpemUoZGlzYWJsZWQsIHNob3dJY29uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0aWFsaXplKGRpc2FibGVkLCBzaG93SWNvbikge1xuICAgIGlmIChzaG93SWNvbikge1xuICAgICAgY3JlYXRlRWxlbWVudCgnc3BhbicsICdzZWxlY3QnLCB7IGNsYXNzTmFtZTogY2xzLklDT04gfSwgdGhpcy5lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJFbC53aWR0aCA9ICcxMDAlJztcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFuIGlucHV0XG4gICAqL1xuICBkaXNhYmxlKCkge1xuICAgIGFkZENsYXNzKHRoaXMuZWwsIGNscy5ESVNBQkxFRCk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGFuIGlucHV0XG4gICAqL1xuICBlbmFibGUoKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLkRJU0FCTEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGFuIGlucHV0XG4gICAqL1xuICBvcGVuKCkge1xuICAgIGFkZENsYXNzKHRoaXMuZWwsIGNscy5PUEVOKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhbiBpbnB1dFxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLk9QRU4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzXG4gICAqL1xuICBmb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSB0ZXh0IGluIHRoZSBwbGFjZWhvbGRlclxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gLSBzZWxlY3RlZCBJdGVtXG4gICAqL1xuICBjaGFuZ2VUZXh0KGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlckVsLnRleHRDb250ZW50ID0gaXRlbS5nZXRMYWJlbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyRWwudGV4dENvbnRlbnQgPSB0aGlzLnBsYWNlaG9sZGVyVGV4dDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBlbGVtZW50IHRvIHRoZSBjb250YWluZXJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gY29udGFpbmVyIGVsZW1lbnRcbiAgICovXG4gIGFwcGVuZFRvQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGFuIGlucHV0XG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgdGhpcy5lbCA9IHRoaXMucGxhY2Vob2xkZXJFbCA9IG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBJdGVtXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgYWRkQ2xhc3MgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL2FkZENsYXNzJztcbmltcG9ydCByZW1vdmVDbGFzcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZUVsZW1lbnQgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL3JlbW92ZUVsZW1lbnQnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgY2xzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQGRlc2NyaXB0aW9uXG4gKiBBbiBpdGVtLlxuICogWW91IGNhbiBnZXQgSXRlbSBieSB7QGxpbmsgU2VsZWN0Qm94I2dldEl0ZW0gU2VsZWN0Qm94LmdldEl0ZW0oKX0gYW5kIHtAbGluayBTZWxlY3RCb3gjZ2V0SXRlbXMgU2VsZWN0Qm94LmdldEl0ZW1zKCl9LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcbiAgLyoqXG4gICAqIEBoaWRlY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zXG4gICAqICAgQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxhYmVsXSAtIGxhYmVsIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgZHJvcC1kb3duIGxpc3RcbiAgICogICBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy52YWx1ZSAtIHZhbHVlIG9mIGFuIGl0ZW1cbiAgICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRpc2FibGVkPWZhbHNlXSAtIHdoZXRoZXIgYW4gSXRlbSBzaG91bGQgYmUgZGlzYWJsZWQgb3Igbm90XG4gICAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5zZWxlY3RlZD1mYWxzZV0gLSB3aGV0aGVyIGFuIEl0ZW0gc2hvdWxkIGJlIHByZS1zZWxlY3RlZCBvciBub3RcbiAgICogICBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5pbmRleCAtIEl0ZW0ncyBpbmRleFxuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2YWx1ZSwgbGFiZWwsIGRpc2FibGVkLCBzZWxlY3RlZCwgaW5kZXggfSkge1xuICAgIC8qKlxuICAgICAqIHZhbHVlIG9mIGFuIGl0ZW1cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy52YWx1ZSA9IGAke3ZhbHVlfWA7XG5cbiAgICAvKipcbiAgICAgKiBsYWJlbCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRyb3AtZG93biBsaXN0XG4gICAgICogaWYgbGFiZWwgaXMgYW4gZW1wdHkgc3RyaW5nLCBpdCBzaG91bGQgYmUgc2FtZSBhcyBpdHMgdmFsdWVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsIHx8IHRoaXMudmFsdWU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuXG4gICAgLyoqXG4gICAgICogd2hldGhlciBhbiBJdGVtR3JvdXAgb2YgdGhlIEl0ZW0gaXMgZGlzYWJsZWQgb3Igbm90XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLml0ZW1Hcm91cERpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiB3aGV0aGVyIGFuIEl0ZW0gaXMgZGlzYWJsZWQgb3Igbm90XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLml0ZW1EaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiA8bGk+IGVsZW1lbnQgZm9yIGEgY3VzdG9tIGRyb3Bkb3duIGl0ZW1cbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmVsID0gY3JlYXRlRWxlbWVudCgnbGknLCB0aGlzLmxhYmVsLCB7XG4gICAgICBjbGFzc05hbWU6IGNscy5JVEVNLFxuICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgJ2RhdGEtdmFsdWUnOiB0aGlzLnZhbHVlLFxuICAgICAgJ2RhdGEtaW5kZXgnOiB0aGlzLmluZGV4XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiA8b3B0aW9uPiBlbGVtZW50IGZvciBhIHNlbGVjdCBlbGVtZW50XG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5uYXRpdmVFbCA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsICcnLCB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsXG4gICAgfSk7XG5cbiAgICB0aGlzLmluaXRpYWxpemUoZGlzYWJsZWQsIHNlbGVjdGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0aWFsaXplKGRpc2FibGVkLCBzZWxlY3RlZCkge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIEl0ZW0gZGlzYWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgbWFrZURpc2FibGUoKSB7XG4gICAgdGhpcy5uYXRpdmVFbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgYWRkQ2xhc3ModGhpcy5lbCwgY2xzLkRJU0FCTEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIEl0ZW0gZW5hYmxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBtYWtlRW5hYmxlKCkge1xuICAgIHRoaXMubmF0aXZlRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBjbHMuRElTQUJMRUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYW4gSXRlbSBkdWUgdG8gYW4gSXRlbUdyb3VwXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRpc2FibGVJdGVtR3JvdXAoKSB7XG4gICAgdGhpcy5pdGVtR3JvdXBEaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5tYWtlRGlzYWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhbiBJdGVtIGR1ZSB0byBhbiBJdGVtR3JvdXBcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZW5hYmxlSXRlbUdyb3VwKCkge1xuICAgIHRoaXMuaXRlbUdyb3VwRGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCgpKSB7XG4gICAgICB0aGlzLm1ha2VFbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBhbiBJdGVtXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5pdGVtRGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubWFrZURpc2FibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYW4gSXRlbVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBlbmFibGUoKSB7XG4gICAgdGhpcy5pdGVtRGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCgpKSB7XG4gICAgICB0aGlzLm1ha2VFbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGFuIEl0ZW1cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc2VsZWN0KCkge1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm5hdGl2ZUVsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWwsIGNscy5TRUxFQ1RFRCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc2VsZWN0IGFuIEl0ZW1cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMubmF0aXZlRWwuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBjbHMuU0VMRUNURUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZ2hsaWdodCBhbiBJdGVtXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGhpZ2hsaWdodCgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCgpKSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsLCBjbHMuSElHSExJR0hUKTtcbiAgICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgaGlnaGxpZ2h0IGZyb20gYW4gSXRlbVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBkZWhpZ2hsaWdodCgpIHtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBjbHMuSElHSExJR0hUKTtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gaXRlbSdzIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gaXRlbSdzIGxhYmVsLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gaXRlbSdzIGluZGV4LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciBhbiBpdGVtIGlzIHNlbGVjdGVkIG9yIG5vdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgYW4gaXRlbSBpcyBkaXNhYmxlZCBvciBub3QuXG4gICAqIFRoZSByZXN1bHQgaXMgdHJ1ZSBpZiBhbnkgb2YgdGhlIGl0ZW1zIGFuZCBpdGVtIGdyb3VwcyBhcmUgZGlzYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1EaXNhYmxlZCB8fCB0aGlzLml0ZW1Hcm91cERpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgZWxlbWVudCBhbmQgbmF0aXZlIGVsZW1lbnQgdG8gdGhlIGNvbnRhaW5lcnNcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gY29udGFpbmVyIGVsZW1lbnRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbmF0aXZlQ29udGFpbmVyIC0gbmF0aXZlIGNvbnRhaW5lciBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGFwcGVuZFRvQ29udGFpbmVyKGNvbnRhaW5lciwgbmF0aXZlQ29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIG5hdGl2ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm5hdGl2ZUVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGFuIEl0ZW1cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICByZW1vdmVFbGVtZW50KHRoaXMuZWwpO1xuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5uYXRpdmVFbCk7XG4gICAgdGhpcy5lbCA9IHRoaXMubmF0aXZlRWwgPSBudWxsO1xuICB9XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgSXRlbUdyb3VwXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgYWRkQ2xhc3MgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL2FkZENsYXNzJztcbmltcG9ydCByZW1vdmVDbGFzcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZUVsZW1lbnQgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL3JlbW92ZUVsZW1lbnQnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgY2xzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9pdGVtJztcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBkZXNjcmlwdGlvblxuICogQSBncm91cCBvZiBpdGVtcy5cbiAqIFlvdSBjYW4gZ2V0IEl0ZW1Hcm91cCBieSB7QGxpbmsgU2VsZWN0Qm94I2dldEl0ZW1Hcm91cCBTZWxlY3RCb3guZ2V0SXRlbUdyb3VwKCl9IGFuZCB7QGxpbmsgU2VsZWN0Qm94I2dldEl0ZW1Hcm91cHMgU2VsZWN0Qm94LmdldEl0ZW1Hcm91cHMoKX0uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1Hcm91cCB7XG4gIC8qKlxuICAgKiBAaGlkZWNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gb3B0aW9uc1xuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sYWJlbF0gLSBsYWJlbCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRyb3Bkb3duIGxpc3RcbiAgICogICBAcGFyYW0ge2FycmF5PGl0ZW1EYXRhPn0gb3B0aW9ucy5kYXRhIC0gZGF0YSBmb3IgSXRlbXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIEl0ZW1Hcm91cFxuICAgKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGlzYWJsZWQ9ZmFsc2VdIC0gd2hldGhlciBhbiBJdGVtR3JvdXAgc2hvdWxkIGJlIGRpc2FibGVkIG9yIG5vdFxuICAgKiAgIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmluZGV4IC0gaW5kZXggb2YgdGhlIGZpcnN0IEl0ZW0gaW4gdGhlIEl0ZW1Hcm91cFxuICAgKiAgIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLml0ZW1Hcm91cEluZGV4IC0gaW5kZXggb2YgdGhlIEl0ZW1Hcm91cFxuICAgKi9cbiAgY29uc3RydWN0b3IoeyBsYWJlbCA9ICcnLCBkYXRhLCBkaXNhYmxlZCA9IGZhbHNlLCBpbmRleCwgaXRlbUdyb3VwSW5kZXggfSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZWwgPSBjcmVhdGVFbGVtZW50KCdsaScsICcnLCB7ICdkYXRhLWdyb3VwLWluZGV4JzogaXRlbUdyb3VwSW5kZXggfSk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsRWwgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgbGFiZWwsIHsgY2xhc3NOYW1lOiBjbHMuSVRFTV9HUk9VUF9MQUJFTCB9LCB0aGlzLmVsKTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXRlbUNvbnRhaW5lckVsID0gY3JlYXRlRWxlbWVudCgndWwnLCAnJywgeyBjbGFzc05hbWU6IGNscy5JVEVNX0dST1VQIH0sIHRoaXMuZWwpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5uYXRpdmVFbCA9IGNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJywgbGFiZWwpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2FycmF5PEl0ZW0+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuY3JlYXRlSXRlbXMoZGF0YSwgaW5kZXgpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW5kZXggPSBpdGVtR3JvdXBJbmRleDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG5cbiAgICAvKipcbiAgICAgKiB3aGV0aGVyIGFuIEl0ZW1Hcm91cCBpcyBkaXNhYmxlZCBvciBub3RcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZShkaXNhYmxlZCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIEl0ZW1zIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBJdGVtR3JvdXBcbiAgICogQHJldHVybiB7YXJyYXk8SXRlbT59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVJdGVtcyhkYXRhLCBpbmRleCkge1xuICAgIHJldHVybiBkYXRhLm1hcCgoZGF0dW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtKHsgaW5kZXg6IGluZGV4ICsgaXRlbUluZGV4LCAuLi5kYXR1bSB9KTtcbiAgICAgIGl0ZW0uYXBwZW5kVG9Db250YWluZXIodGhpcy5pdGVtQ29udGFpbmVyRWwsIHRoaXMubmF0aXZlRWwpO1xuXG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0aWFsaXplKGRpc2FibGVkKSB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBhbiBJdGVtR3JvdXBcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5uYXRpdmVFbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgYWRkQ2xhc3ModGhpcy5sYWJlbEVsLCBjbHMuRElTQUJMRUQpO1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uZGlzYWJsZUl0ZW1Hcm91cCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYW4gSXRlbUdyb3VwXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5uYXRpdmVFbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHJlbW92ZUNsYXNzKHRoaXMubGFiZWxFbCwgY2xzLkRJU0FCTEVEKTtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmVuYWJsZUl0ZW1Hcm91cCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQge0BsaW5rIEl0ZW0gaXRlbXN9IGluIHRoZSBpdGVtIGdyb3VwLlxuICAgKiBAcmV0dXJuIHthcnJheTxJdGVtPn1cbiAgICogQGV4YW1wbGVcbiAgICogY29uc3QgaXRlbXMgPSBpdGVtR3JvdXAuZ2V0SXRlbXMoKTtcbiAgICogY29uc29sZS5sb2coaXRlbXNbMF0pOyAvLyBmaXJzdCBpdGVtIGluIHRoZSBpdGVtIGdyb3VwXG4gICAqIGNvbnNvbGUubG9nKGl0ZW1zLmxlbmd0aCk7IC8vIHRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGl0ZW0gZ3JvdXBcbiAgICovXG4gIGdldEl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBpdGVtIGdyb3VwJ3MgaW5kZXguXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBpdGVtIGdyb3VwJ3MgbGFiZWwuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIGFuIEl0ZW1Hcm91cCBpcyBkaXNhYmxlZCBvciBub3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgZWxlbWVudCBhbmQgbmF0aXZlIGVsZW1lbnQgdG8gdGhlIGNvbnRhaW5lcnNcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gY29udGFpbmVyIGVsZW1lbnRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbmF0aXZlQ29udGFpbmVyIC0gbmF0aXZlIGNvbnRhaW5lciBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGFwcGVuZFRvQ29udGFpbmVyKGNvbnRhaW5lciwgbmF0aXZlQ29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIG5hdGl2ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm5hdGl2ZUVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IGFuIEl0ZW1Hcm91cFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uZGVzdHJveSgpKTtcbiAgICByZW1vdmVFbGVtZW50KHRoaXMuZWwpO1xuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5uYXRpdmVFbCk7XG4gICAgdGhpcy5lbCA9IHRoaXMubGFiZWxFbCA9IHRoaXMuaXRlbUNvbnRhaW5lckVsID0gdGhpcy5uYXRpdmVFbCA9IHRoaXMuaXRlbXMgPSBudWxsO1xuICB9XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVXRpbGl0eSBmdW5jdGlvbnMgcmVsYXRlZCB0byBrZXkgZXZlbnRzXG4gKiBAYXV0aG9yIE5ITi4gRkUgZGV2IHRlYW0uPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5jb25zdCBrZXlDb2RlTWFwID0ge1xuICAzODogJ2Fycm93VXAnLFxuICA0MDogJ2Fycm93RG93bicsXG4gIDMyOiAnc3BhY2UnLFxuICAxMzogJ2VudGVyJyxcbiAgMjc6ICdlc2NhcGUnLFxuICA2MTogJ3RhYidcbn07XG5cbmNvbnN0IGtleU1hcCA9IHtcbiAgQXJyb3dVcDogJ2Fycm93VXAnLFxuICBVcDogJ2Fycm93VXAnLFxuICBBcnJvd0Rvd246ICdhcnJvd0Rvd24nLFxuICBEb3duOiAnYXJyb3dEb3duJyxcbiAgJyAnOiAnc3BhY2UnLFxuICBTcGFjZWJhcjogJ3NwYWNlJyxcbiAgRW50ZXI6ICdlbnRlcicsXG4gIEVzY2FwZTogJ2VzY2FwZScsXG4gIEVzYzogJ2VzY2FwZScsXG4gIFRhYjogJ3RhYidcbn07XG5cbi8qKlxuICogSWRlbnRpZnkgdGhlIGtleSAocG9seWZpbGwgZm9yIElFKVxuICogQHBhcmFtIHtzdHJpbmd9IGV2IC0ga2V5Ym9hcmQgZXZlbnRcbiAqIEByZXR1cm4ge3N0cmluZ30gLSBrZXlcbiAqL1xuZXhwb3J0IGNvbnN0IGlkZW50aWZ5S2V5ID0gZXYgPT4ge1xuICBjb25zdCB7IGtleSwga2V5Q29kZSB9ID0gZXY7XG5cbiAgaWYgKGtleSkge1xuICAgIHJldHVybiBrZXlNYXBba2V5XSB8fCBrZXk7XG4gIH1cblxuICByZXR1cm4ga2V5Q29kZU1hcFtrZXlDb2RlXSB8fCBrZXlDb2RlO1xufTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBTZWxlY3RCb3hcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbmltcG9ydCBDdXN0b21FdmVudHMgZnJvbSAndHVpLWNvZGUtc25pcHBldC9jdXN0b21FdmVudHMvY3VzdG9tRXZlbnRzJztcbmltcG9ydCBvbiBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L29uJztcbmltcG9ydCBvZmYgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21FdmVudC9vZmYnO1xuaW1wb3J0IHByZXZlbnREZWZhdWx0IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvcHJldmVudERlZmF1bHQnO1xuaW1wb3J0IGdldFRhcmdldCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L2dldFRhcmdldCc7XG5pbXBvcnQgY2xvc2VzdCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvY2xvc2VzdCc7XG5pbXBvcnQgcmVtb3ZlRWxlbWVudCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudCc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzT2JqZWN0JztcbmltcG9ydCBpc0V4aXN0eSBmcm9tICd0dWktY29kZS1zbmlwcGV0L3R5cGUvaXNFeGlzdHknO1xuaW1wb3J0IGlzSFRNTE5vZGUgZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzSFRNTE5vZGUnO1xuaW1wb3J0IHNlbmRIb3N0bmFtZSBmcm9tICd0dWktY29kZS1zbmlwcGV0L3JlcXVlc3Qvc2VuZEhvc3RuYW1lJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGlkZW50aWZ5S2V5IH0gZnJvbSAnLi9rZXlFdmVudFV0aWxzJztcbmltcG9ydCB7IGNscyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2Ryb3Bkb3duJztcbmltcG9ydCBJdGVtR3JvdXAgZnJvbSAnLi9pdGVtR3JvdXAnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9pdGVtJztcbmltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJztcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBjb250YWluZXIgLSBjb250YWluZXIgZWxlbWVudCBvciBzZWxlY3RvclxuICogQG1peGVzIEN1c3RvbUV2ZW50c1xuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqICAgQHBhcmFtIHthcnJheTxpdGVtRGF0YXxpdGVtR3JvdXBEYXRhPn0gb3B0aW9ucy5kYXRhIC0gYXJyYXkgb2Yge0BsaW5rIGl0ZW1EYXRhfSBhbmQge0BsaW5rIGl0ZW1Hcm91cERhdGF9XG4gKiAgIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wbGFjZWhvbGRlcl0gLSBwbGFjZWhvbGRlciBmb3IgYW4gaW5wdXRcbiAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kaXNhYmxlZF0gLSB3aGV0aGVyIGFuIEl0ZW0gc2hvdWxkIGJlIGRpc2FibGVkIG9yIG5vdFxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9mb2N1c10gLSB3aGV0aGVyIGEgc2VsZWN0Ym94IHNob3VsZCBnZXQgZm9jdXMgd2hlbiB0aGUgc2VsZWN0IGJveCBhcHBlbmRzIHRvIHRoZSBjb250YWluZXJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvY2xvc2VdIC0gd2hldGhlciBhIHNlbGVjdGJveCBzaG91bGQgY2xvc2UgYWZ0ZXIgc2VsZWN0aW9uXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuc2hvd0ljb25dIC0gd2hldGhlciBhbiBhcnJvdyBpY29uIGluIHRoZSBpbnB1dCBzaG91bGQgYmUgc2hvd25cbiAqICAgQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLnRoZW1lXSAtIHtAbGluayB0aGVtZUNvbmZpZ30gZm9yIGN1c3RvbSBzdHlsZVxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnVzYWdlU3RhdGlzdGljc10gLSB3aGV0aGVyIHNlbmQgaG9zdG5hbWUgdG8gZ29vZ2xlIGFuYWx5dGljcy4gSWYgeW91IGRvbid0IHdhbnQgdG8gc2VuZCB0aGUgaG9zdG5hbWUsIHBsZWFzZSBzZXQgdG8gZmFsc2UuXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IFNlbGVjdEJveCBmcm9tICdAdG9hc3QtdWkvc2VsZWN0LWJveCc7XG4gKiAvLyBvciBjb25zdCBTZWxlY3RCb3ggPSByZXF1aXJlKCdAdG9hc3QtdWkvc2VsZWN0LWJveCcpO1xuICogLy8gb3IgY29uc3QgU2VsZWN0Qm94ID0gdHVpLlNlbGVjdEJveDtcbiAqXG4gKiBjb25zdCBzZWxlY3RCb3ggPSBuZXcgU2VsZWN0Qm94KCcjc2VsZWN0LWJveCcsIHtcbiAqICAgcGxhY2Vob2xkZXI6ICdQbGVhc2Ugc2VsZWN0IGFuIG9wdGlvbi4nLFxuICogICBkYXRhOiBbXG4gKiAgICAge1xuICogICAgICAgbGFiZWw6ICdGcnVpdHMnLFxuICogICAgICAgZGF0YTogWyB7IGxhYmVsOiAnQXBwbGUnLCB2YWx1ZTogJ2FwcGxlJyB9LCB7IGxhYmVsOiAnQmFuYW5hJywgdmFsdWU6ICdiYW5hbmEnIH0gXVxuICogICAgIH0sXG4gKiAgICAgeyBsYWJlbDogJ1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cuJywgdmFsdWU6ICdub25lJyB9LFxuICogICAgIHtcbiAqICAgICAgIGxhYmVsOiAnQ29sb3JzJyxcbiAqICAgICAgIGRhdGE6IFtcbiAqICAgICAgICAgeyBsYWJlbDogJ1JlZCcsIHZhbHVlOiAncmVkJyB9LFxuICogICAgICAgICB7IGxhYmVsOiAnWWVsbG93JywgdmFsdWU6ICd5ZWxsb3cnIH0sXG4gKiAgICAgICAgIHsgbGFiZWw6ICdHcmVlbicsIHZhbHVlOiAnZ3JlZW4nLCBkaXNhYmxlZDogdHJ1ZSB9LFxuICogICAgICAgICB7IGxhYmVsOiAnQmx1ZScsIHZhbHVlOiAnYmx1ZScsIGRpc2FibGVkOiB0cnVlIH0sXG4gKiAgICAgICAgIHsgbGFiZWw6ICdQdXJwbGUnLCB2YWx1ZTogJ3B1cnBsZScgfVxuICogICAgICAgXVxuICogICAgIH1cbiAqICAgXSxcbiAqICAgYXV0b2ZvY3VzOiB0cnVlLFxuICogICBzaG93SWNvbjogZmFsc2UsXG4gKiAgIHRoZW1lOiB7XG4gKiAgICAgJ2NvbW1vbi5ib3JkZXInOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAqICAgICAnY29tbW9uLmNvbG9yJzogJ2JsYWNrJyxcbiAqICAgICAnaXRlbS5oaWdobGlnaHRlZC5iYWNrZ3JvdW5kJzogJ3llbGxvdydcbiAqICAgfVxuICogfSk7XG4gKi9cblxuLyoqXG4gKiBTZWxlY3RCb3ggcHJvdmlkZXMgc29tZSBjdXN0b20gZXZlbnRzOiAoe0BsaW5rIFNlbGVjdEJveCNldmVudC1vcGVuIG9wZW59LCB7QGxpbmsgU2VsZWN0Qm94I2V2ZW50LWNsb3NlIGNsb3NlfSwge0BsaW5rIFNlbGVjdEJveCNldmVudC1kaXNhYmxlIGRpc2FibGV9LCB7QGxpbmsgU2VsZWN0Qm94I2V2ZW50LWVuYWJsZSBlbmFibGV9LCB7QGxpbmsgU2VsZWN0Qm94I2V2ZW50LWNoYW5nZSBjaGFuZ2V9KS5cbiAqIFlvdSBjYW4gYmluZCBldmVudCBoYW5kbGVycyBieSB7QGxpbmsgaHR0cHM6Ly9uaG4uZ2l0aHViLmlvL3R1aS5jb2RlLXNuaXBwZXQvbGF0ZXN0L0N1c3RvbUV2ZW50cyNvbiBzZWxlY3RCb3gub24oZXZlbnROYW1lLCBoYW5kbGVyKX0gYW5kIHVuYmluZCBieSB7QGxpbmsgaHR0cHM6Ly9uaG4uZ2l0aHViLmlvL3R1aS5jb2RlLXNuaXBwZXQvbGF0ZXN0L0N1c3RvbUV2ZW50cyNvZmYgc2VsZWN0Qm94Lm9mZihldmVudE5hbWUsIGhhbmRsZXIpfS5cbiAqIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9uaG4uZ2l0aHViLmlvL3R1aS5jb2RlLXNuaXBwZXQvbGF0ZXN0L0N1c3RvbUV2ZW50cyBDdXN0b21FdmVudHN9IGRvY3VtZW50IGF0IHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbmhuL3R1aS5jb2RlLXNuaXBwZXQgdHVpLWNvZGUtc25pcHBldH0gdG8ga25vdyBob3cgdG8gYmluZCwgYW5kIHVuYmluZCBjdXN0b20gZXZlbnRzLlxuICogVGhlIGV4YW1wbGUgdXNpbmcgY3VzdG9tIGV2ZW50cyBjYW4gYmUgZm91bmQge0BsaW5rIHR1dG9yaWFsLWV4YW1wbGUwMy1jdXN0b20tZXZlbnRzIGhlcmV9LlxuICogQHR5cGVkZWYge2NsYXNzfSBDdXN0b21FdmVudHNcbiAqIEBleGFtcGxlXG4gKiAvLyBiaW5kICdjaGFuZ2UnIGV2ZW50XG4gKiBzZWxlY3RCb3gub24oJ2NoYW5nZScsIGV2ID0+IHtcbiAqICAgY29uc29sZS5sb2coYHNlbGVjdGVkIGl0ZW0gaXMgY2hhbmdlZCBmcm9tICR7ZXYucHJldi5nZXRMYWJlbCgpfSB0byAke2V2LmN1cnIuZ2V0TGFiZWwoKX0uYCk7XG4gKiB9KTtcbiAqXG4gKiAvLyBiaW5kICdkaXNhYmxlJyBhbmQgZW5hYmxlIGV2ZW50XG4gKiBjb25zdCBwcmludCA9IGV2ID0+IHtcbiAqICAgbGV0IHRhcmdldCA9ICcnO1xuICogICBpZiAoZXYudGFyZ2V0IGluc3RhbmNlb2YgU2VsZWN0Qm94KSB7XG4gKiAgICAgdGFyZ2V0ID0gJ1NlbGVjdCBib3gnO1xuICogICB9IGVsc2Uge1xuICogICAgIHRhcmdldCA9IGV2LnRhcmdldC5nZXRMYWJlbCgpO1xuICogICB9XG4gKiAgIGNvbnNvbGUubG9nKGAke3RhcmdldH0gaXMgJHtldi50eXBlfS5gKTtcbiAqIH1cbiAqIHNlbGVjdEJveC5vbih7XG4gKiAgIGRpc2FibGU6IHByaW50LFxuICogICBlbmFibGU6IHByaW50XG4gKiB9KTtcbiAqXG4gKiAvLyB1bmJpbmQgY2hhbmdlIGV2ZW50XG4gKiBzZWxlY3RCb3gub2ZmKCdjaGFuZ2UnKTtcbiAqXG4gKiAvLyB1bmJpbmQgZGlzYWJsZSBldmVudFxuICogc2VsZWN0Qm94Lm9mZihkaXNhYmxlLCBwcmludCk7XG4gKlxuICogLy8gdW5iaW5kIGFsbCBldmVudHNcbiAqIHNlbGVjdEJveC5vZmYoKTtcbiAqL1xuXG4vKipcbiAqIERhdGEgb2YgYW4ge0BsaW5rIEl0ZW0gaXRlbX0uXG4gKiBJdCBpcyB1c2VkIGZvciBjcmVhdGluZyBhIHtAbGluayBTZWxlY3RCb3h9LlxuICogQHR5cGVkZWYge29iamVjdH0gaXRlbURhdGEgLSBkYXRhIGZvciB7QGxpbmsgSXRlbSBpdGVtfVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIC0gbGFiZWwgdG8gYmUgZGlzcGxheWVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdmFsdWUgLSB2YWx1ZSBvZiBhbiBpdGVtXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtkaXNhYmxlZD1mYWxzZV0gLSB3aGV0aGVyIGFuIGl0ZW0gc2hvdWxkIGJlIGRpc2FibGVkIG9yIG5vdFxuICogQHByb3BlcnR5IHtib29sZWFufSBbc2VsZWN0ZWQ9ZmFsc2VdIC0gd2hldGhlciBhbiBpdGVtIHNob3VsZCBiZSBwcmUtc2VsZWN0ZWQgb3Igbm90XG4gKiBAZXhhbXBsZVxuICogY29uc3QgaXRlbURhdGEgPSB7XG4gKiAgIGxhYmVsOiAnZGlzYWJsZWQgaXRlbScsXG4gKiAgIHZhbHVlOiAnMCcsXG4gKiAgIGRpc2FibGVkOiB0cnVlLFxuICogICBzZWxlY3RlZDogZmFsc2VcbiAqIH07XG4gKi9cblxuLyoqXG4gKiBEYXRhIG9mIGFuIHtAbGluayBJdGVtR3JvdXAgaXRlbSBncm91cH0uXG4gKiBJdCBpcyB1c2VkIGZvciBjcmVhdGluZyBhIHtAbGluayBTZWxlY3RCb3h9LlxuICogSXRlbUdyb3VwIHN1cHBvcnRzIG9ubHkgMSBsZXZlbCBjaG9pY2VzLCBzbyBpdCBkb2VzIG5vdCB3b3JrIHRvIGFkZCBpdGVtIGdyb3VwcyBpbiB0aGUgaXRlbSBncm91cC5cbiAqIFRoZSBleGFtcGxlIHVzaW5nIGl0ZW0gZ3JvdXBzIGNhbiBiZSBmb3VuZCB7QGxpbmsgdHV0b3JpYWwtZXhhbXBsZTAxLWJhc2ljIGhlcmV9LlxuICogQHR5cGVkZWYge29iamVjdH0gaXRlbUdyb3VwRGF0YSAtIGRhdGEgZm9yIHtAbGluayBJdGVtR3JvdXAgaXRlbSBncm91cH1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCAtIGxhYmVsIHRvIGJlIGRpc3BsYXllZFxuICogQHByb3BlcnR5IHthcnJheX0gZGF0YSAtIHtAbGluayBpdGVtRGF0YSBkYXRhIGZvciBpdGVtfVxuICogQHByb3BlcnR5IHtib29sZWFufSBbZGlzYWJsZWQ9ZmFsc2VdIC0gd2hldGhlciBhbiBpdGVtIGdyb3VwIHNob3VsZCBiZSBkaXNhYmxlZCBvciBub3RcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBpdGVtR3JvdXBEYXRhID0ge1xuICogICBsYWJlbDogJ2Rpc2FibGVkIGl0ZW1zJyxcbiAqICAgZGF0YTogW1xuICogICAgIHsgbGFiZWw6ICdkaXNhYmxlJywgdmFsdWU6ICdkaXNhYmxlJyB9LFxuICogICAgIHsgbGFiZWw6ICdub25lJywgdmFsdWU6ICcwJyB9XG4gKiAgIF0sXG4gKiAgIGRpc2FibGVkOiB0cnVlXG4gKiB9O1xuICovXG5jbGFzcyBTZWxlY3RCb3gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb250YWluZXIsXG4gICAge1xuICAgICAgZGF0YSxcbiAgICAgIHBsYWNlaG9sZGVyID0gJycsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgYXV0b2ZvY3VzID0gZmFsc2UsXG4gICAgICBhdXRvY2xvc2UgPSB0cnVlLFxuICAgICAgc2hvd0ljb24gPSB0cnVlLFxuICAgICAgdGhlbWUsXG4gICAgICB1c2FnZVN0YXRpc3RpY3MgPSB0cnVlXG4gICAgfVxuICApIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsIHsgY2xhc3NOYW1lOiBjbHMuU0VMRUNUX0JPWCB9KTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtJbnB1dH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQoeyBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIHNob3dJY29uIH0pO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Ryb3Bkb3dufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kcm9wZG93biA9IG5ldyBEcm9wZG93bih7IHBsYWNlaG9sZGVyLCBkaXNhYmxlZCwgZGF0YSB9KTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kaWFibGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9jbG9zZSA9IGF1dG9jbG9zZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBpc09iamVjdCh0aGVtZSkgPyBuZXcgVGhlbWUodGhlbWUsIGNvbnRhaW5lcikgOiBudWxsO1xuXG4gICAgdGhpcy5pbml0aWFsaXplKHsgcGxhY2Vob2xkZXIsIGRpc2FibGVkIH0pO1xuICAgIHRoaXMuYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyKTtcblxuICAgIGlmIChhdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAodXNhZ2VTdGF0aXN0aWNzKSB7XG4gICAgICBzZW5kSG9zdG5hbWUoJ3NlbGVjdC1ib3gnLCAnVUEtMTI5OTg3NDYyLTEnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBzZWxlY3QgYm94IGVsZW1lbnQgdG8gdGhlIGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fHN0cmluZ30gY29udGFpbmVyIC0gY29udGFpbmVyIGVsZW1lbnQgb3Igc2VsZWN0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFwcGVuZFRvQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGNvbnRhaW5lckVsID0gaXNIVE1MTm9kZShjb250YWluZXIpID8gY29udGFpbmVyIDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuICAgIGNvbnRhaW5lckVsLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLmdldFNlbGVjdGVkSXRlbSgpO1xuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHRoaXMuaW5wdXQuY2hhbmdlVGV4dChzZWxlY3RlZEl0ZW0pO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMucGxhY2Vob2xkZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0KDApO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgIHRoaXMuaW5wdXQuYXBwZW5kVG9Db250YWluZXIodGhpcy5lbCk7XG4gICAgdGhpcy5kcm9wZG93bi5hcHBlbmRUb0NvbnRhaW5lcih0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYmluZEV2ZW50cygpIHtcbiAgICBvbihcbiAgICAgIGRvY3VtZW50LFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIGV2ID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGV2KTtcbiAgICAgICAgaWYgKCFjbG9zZXN0KHRhcmdldCwgYC4ke2Nscy5TRUxFQ1RfQk9YfWApICYmIHRoaXMub3BlbmVkKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgb24odGhpcy5lbCwgJ2NsaWNrJywgZXYgPT4gdGhpcy5oYW5kbGVDbGljayhldiwgY2xzKSk7XG4gICAgb24odGhpcy5lbCwgJ21vdXNlb3ZlcicsIGV2ID0+IHRoaXMuaGFuZGxlTW91c2VvdmVyKGV2LCBjbHMpKTtcbiAgICBvbih0aGlzLmVsLCAna2V5ZG93bicsIGV2ID0+IHRoaXMuaGFuZGxlS2V5ZG93bihldiwgY2xzKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGV2ZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdW5iaW5kRXZlbnRzKCkge1xuICAgIG9mZihkb2N1bWVudCwgJ2NsaWNrJyk7XG4gICAgb2ZmKHRoaXMuZWwsICdjbGljayBtb3VzZW92ZXIga2V5ZG93bicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBjbGljayBldmVudHNcbiAgICogQHBhcmFtIHtFdmVudH0gZXYgLSBhbiBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gY2xzIC0gY2xzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYW5kbGVDbGljayhldiwgeyBJTlBVVCwgSVRFTSB9KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGV2KTtcbiAgICBjb25zdCBpdGVtRWwgPSBjbG9zZXN0KHRhcmdldCwgYC4ke0lURU19YCk7XG5cbiAgICBpZiAoaXRlbUVsKSB7XG4gICAgICB0aGlzLnNlbGVjdChpdGVtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpO1xuICAgIH0gZWxzZSBpZiAoY2xvc2VzdCh0YXJnZXQsIGAuJHtJTlBVVH1gKSkge1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG4gICAgdGhpcy5mb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBtb3VzZW92ZXIgZXZlbnRzXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IGNscyAtIGNsc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlTW91c2VvdmVyKGV2LCB7IElURU0gfSkge1xuICAgIGlmICh0aGlzLmNoZWNrTW91c2Vtb3ZlKGV2LmNsaWVudFgsIGV2LmNsaWVudFkpKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQoZXYpO1xuICAgICAgY29uc3QgaXRlbUVsID0gY2xvc2VzdCh0YXJnZXQsIGAuJHtJVEVNfWApO1xuXG4gICAgICBpZiAoaXRlbUVsKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uaGlnaGxpZ2h0KGl0ZW1FbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgcG9pbnRlciBpcyBtb3ZlZFxuICAgKiBAcGFyYW0ge251bWJlcn0geCAtIG1vdXNlRXZlbnQuY2xpZW50WFxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIG1vdXNlRXZlbnQuY2xpZW50WVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tNb3VzZW1vdmUoeCwgeSkge1xuICAgIGlmICh0aGlzLnByZXZYICE9PSB4IHx8IHRoaXMucHJldlkgIT09IHkpIHtcbiAgICAgIHRoaXMucHJldlggPSB4O1xuICAgICAgdGhpcy5wcmV2WSA9IHk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUga2V5ZG93biBldmVudHNcbiAgICogQHBhcmFtIHtFdmVudH0gZXYgLSBhbiBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gY2xhc3NOYW1lcyAtIGNsc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlS2V5ZG93bihldiwgY2xhc3NOYW1lcykge1xuICAgIGNvbnN0IGtleSA9IGlkZW50aWZ5S2V5KGV2KTtcbiAgICBjb25zdCBjbG9zZUtleXMgPSBbJ3RhYicsICdlc2NhcGUnXTtcbiAgICBjb25zdCBhY3RpdmVLZXlzID0gWydhcnJvd1VwJywgJ2Fycm93RG93bicsICdzcGFjZScsICdlbnRlciddO1xuXG4gICAgaWYgKGNsb3NlS2V5cy5pbmRleE9mKGtleSkgPiAtMSAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgaWYgKGtleSA9PT0gJ2VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWN0aXZlS2V5cy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgcHJldmVudERlZmF1bHQoZXYpO1xuICAgICAgdGhpcy5hY3RpdmF0ZUtleWRvd24oZXYsIGtleSwgY2xhc3NOYW1lcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlIGtleWRvd24gZXZlbnRzXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIGtleSBwcmVzc2VkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjbGFzc05hbWVzIC0gY2xzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY3RpdmF0ZUtleWRvd24oZXYsIGtleSwgeyBJVEVNLCBJTlBVVCB9KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGV2KTtcbiAgICBjb25zdCBpdGVtRWwgPSBjbG9zZXN0KHRhcmdldCwgYC4ke0lURU19YCk7XG5cbiAgICBpZiAoa2V5ID09PSAnZXNjYXBlJyAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoaXRlbUVsKSB7XG4gICAgICB0aGlzLnByZXNzS2V5T25JdGVtKGtleSwgaXRlbUVsKTtcbiAgICB9IGVsc2UgaWYgKGNsb3Nlc3QodGFyZ2V0LCBgLiR7SU5QVVR9YCkpIHtcbiAgICAgIHRoaXMucHJlc3NLZXlPbklucHV0KGtleSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBrZXlkb3duIGV2ZW50cyB3aGVuIGl0IG9jY3VycyBvbiB0aGUgSW5wdXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIGtleVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJlc3NLZXlPbklucHV0KGtleSkge1xuICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnYXJyb3dVcCcgfHwga2V5ID09PSAnYXJyb3dEb3duJykge1xuICAgICAgdGhpcy5kcm9wZG93bi5tb3ZlSGlnaGxpZ2h0ZWRJdGVtKGtleSA9PT0gJ2Fycm93VXAnID8gLTEgOiAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGtleWRvd24gZXZlbnRzIHdoZW4gaXQgb2NjdXJzIG9uIHRoZSBJdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBrZXlcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbUVsIC0gSXRlbS5lbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJlc3NLZXlPbkl0ZW0oa2V5LCBpdGVtRWwpIHtcbiAgICBpZiAoa2V5ID09PSAnZW50ZXInIHx8IGtleSA9PT0gJ3NwYWNlJykge1xuICAgICAgdGhpcy5zZWxlY3RCeUtleWRvd24oaXRlbUVsKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2Fycm93VXAnIHx8IGtleSA9PT0gJ2Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuZHJvcGRvd24ubW92ZUhpZ2hsaWdodGVkSXRlbShrZXkgPT09ICdhcnJvd1VwJyA/IC0xIDogMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhbiBJdGVtIGJ5IHNwYWNlIG9yIGVudGVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW1FbCAtIEl0ZW0uZWxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNlbGVjdEJ5S2V5ZG93bihpdGVtRWwpIHtcbiAgICB0aGlzLnNlbGVjdChpdGVtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBhIHNlbGVjdCBib3gsIHtAbGluayBJdGVtR3JvdXAgaXRlbSBncm91cH0gb3Ige0BsaW5rIEl0ZW0gaXRlbX0uXG4gICAqIElmIGl0IHRha2VzIG5vIGFyZ3VtZW50cywgYSBzZWxlY3QgYm94IGlzIGRpc2FibGVkLlxuICAgKiBJZiBpdCB0YWtlcyBzdHJpbmcsIGFuIGl0ZW0gd2l0aCB0aGUgc2FtZSB2YWx1ZSBhcyB0aGUgYXJndW1lbnQgaXMgZGlzYWJsZWQuXG4gICAqIElmIGl0IHRha2VzIG51bWJlciwgYW4gaXRlbSB3aXRoIHRoZSBzYW1lIGluZGV4IGFzIHRoZSBhcmd1bWVudCBpcyBkaXNhYmxlZC5cbiAgICogSWYgaXQgdGFrZXMgSXRlbSBvciBJdGVtR3JvdXAsIGFuIGFyZ3VtZW50IGl0c2VsZiBpcyBkaXNhYmxlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfEl0ZW18SXRlbUdyb3VwfSB2YWx1ZSAtIGlmIHN0cmluZywgZmluZCBhbiBJdGVtIGJ5IGl0cyB2YWx1ZS4gaWYgbnVtYmVyLCBmaW5kIGFuIEl0ZW0gYnkgaXRzIGluZGV4LlxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZGlzYWJsZSgpOyAvLyBzZWxlY3QgYm94IGlzIGRpc2FibGVkLlxuICAgKiBzZWxlY3RCb3guZGlzYWJsZSgxKTsgLy8gc2Vjb25kIGl0ZW0gaXMgZGlzYWJsZWQuXG4gICAqIHNlbGVjdEJveC5kaXNhYmxlKCd2YWx1ZScpIC8vIGl0ZW0gd2hpY2ggb2YgdmFsdWUgaXMgJ3ZhbHVlJyBpcyBkaXNhYmxlZC5cbiAgICogc2VsZWN0Qm94LmRpc2FibGUoc2VsZWN0Qm94LmdldFNlbGVjdGVkSXRlbSgpKTsgLy8gc2VsZWN0ZWQgaXRlbSBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGUodmFsdWUpIHtcbiAgICBpZiAoIWlzRXhpc3R5KHZhbHVlKSkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmlucHV0LmRpc2FibGUoKTtcbiAgICAgIHRoaXMuZHJvcGRvd24uZGlzYWJsZSgpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9jY3VycyB3aGVuIGEgc2VsZWN0IGJveCwge0BsaW5rIEl0ZW1Hcm91cCBpdGVtIGdyb3VwfSBvciB7QGxpbmsgSXRlbSBpdGVtfSBpcyBkaXNhYmxlZC5cbiAgICAgICAqIEBldmVudCBTZWxlY3RCb3gjZGlzYWJsZVxuICAgICAgICogQHR5cGUge29iamVjdH0gZXZcbiAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgbmFtZSAoJ2Rpc2FibGUnKVxuICAgICAgICogQHByb3BlcnR5IHtTZWxlY3RCb3h8SXRlbUdyb3VwfEl0ZW19IHRhcmdldCAtIGRpc2FibGVkIHRhcmdldFxuICAgICAgICogQGV4YW1wbGVcbiAgICAgICAqIHNlbGVjdEJveC5vbignZGlzYWJsZScsIGV2ID0+IHtcbiAgICAgICAqICAgY29uc29sZS5sb2coZXYudGFyZ2V0KTtcbiAgICAgICAqIH0pO1xuICAgICAgICovXG4gICAgICB0aGlzLmZpcmUoJ2Rpc2FibGUnLCB7IHR5cGU6ICdkaXNhYmxlJywgdGFyZ2V0OiB0aGlzIH0pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBJdGVtIHx8IHZhbHVlIGluc3RhbmNlb2YgSXRlbUdyb3VwKSB7XG4gICAgICB2YWx1ZS5kaXNhYmxlKCk7XG4gICAgICB0aGlzLmZpcmUoJ2Rpc2FibGUnLCB7IHR5cGU6ICdkaXNhYmxlJywgdGFyZ2V0OiB2YWx1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlzYWJsZWRJdGVtID0gdGhpcy5kcm9wZG93bi5nZXRJdGVtKHZhbHVlKTtcbiAgICAgIGlmIChkaXNhYmxlZEl0ZW0pIHtcbiAgICAgICAgZGlzYWJsZWRJdGVtLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5maXJlKCdkaXNhYmxlJywgeyB0eXBlOiAnZGlzYWJsZScsIHRhcmdldDogZGlzYWJsZWRJdGVtIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYSBzZWxlY3QgYm94LCB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXB9IG9yIHtAbGluayBJdGVtIGl0ZW19LlxuICAgKiBJZiBpdCB0YWtlcyBubyBhcmd1bWVudHMsIGEgc2VsZWN0IGJveCBpcyBlbmFibGVkLlxuICAgKiBJZiBpdCB0YWtlcyBzdHJpbmcsIGFuIGl0ZW0gd2l0aCB0aGUgc2FtZSB2YWx1ZSBhcyB0aGUgYXJndW1lbnQgaXMgZW5hYmxlZC5cbiAgICogSWYgaXQgdGFrZXMgbnVtYmVyLCBhbiBpdGVtIHdpdGggdGhlIHNhbWUgaW5kZXggYXMgdGhlIGFyZ3VtZW50IGlzIGVuYWJsZWQuXG4gICAqIElmIGl0IHRha2VzIEl0ZW0gb3IgSXRlbUdyb3VwLCBhbiBhcmd1bWVudCBpdHNlbGYgaXMgZW5hYmxlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfEl0ZW18SXRlbUdyb3VwfSB2YWx1ZSAtIGlmIHN0cmluZywgZmluZCBhbiBJdGVtIGJ5IGl0cyB2YWx1ZS4gaWYgbnVtYmVyLCBmaW5kIGFuIEl0ZW0gYnkgaXRzIGluZGV4LlxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZW5hYmxlKCk7IC8vIHNlbGVjdCBib3ggaXMgZW5hYmxlZC5cbiAgICogc2VsZWN0Qm94LmVuYWJsZSgxKTsgLy8gc2Vjb25kIGl0ZW0gaXMgZW5hYmxlZC5cbiAgICogc2VsZWN0Qm94LmVuYWJsZSgndmFsdWUnKSAvLyBpdGVtIHdoaWNoIG9mIHZhbHVlIGlzICd2YWx1ZScgaXMgZW5hYmxlZC5cbiAgICogc2VsZWN0Qm94LmVuYWJsZShzZWxlY3RCb3guZ2V0U2VsZWN0ZWRJdGVtKCkpOyAvLyBzZWxlY3RlZCBpdGVtIGlzIGVuYWJsZWQuXG4gICAqL1xuICBlbmFibGUodmFsdWUpIHtcbiAgICBpZiAoIWlzRXhpc3R5KHZhbHVlKSkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbnB1dC5lbmFibGUoKTtcbiAgICAgIHRoaXMuZHJvcGRvd24uZW5hYmxlKCk7XG5cbiAgICAgIC8qKlxuICAgICAgICogT2NjdXJzIHdoZW4gYSBzZWxlY3QgYm94LCB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXB9IG9yIHtAbGluayBJdGVtIGl0ZW19IGlzIGVuYWJsZWQuXG4gICAgICAgKiBAZXZlbnQgU2VsZWN0Qm94I2VuYWJsZVxuICAgICAgICogQHR5cGUge29iamVjdH0gZXZcbiAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgbmFtZSAoJ2VuYWJsZScpXG4gICAgICAgKiBAcHJvcGVydHkge1NlbGVjdEJveHxJdGVtR3JvdXB8SXRlbX0gdGFyZ2V0IC0gZW5hYmxlIHRhcmdldFxuICAgICAgICogQGV4YW1wbGVcbiAgICAgICAqIHNlbGVjdEJveC5vbignZW5hYmxlJywgZXYgPT4ge1xuICAgICAgICogICBjb25zb2xlLmxvZyhldi50YXJnZXQpO1xuICAgICAgICogfSk7XG4gICAgICAgKi9cbiAgICAgIHRoaXMuZmlyZSgnZW5hYmxlJywgeyB0eXBlOiAnZW5hYmxlJywgdGFyZ2V0OiB0aGlzIH0pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBJdGVtIHx8IHZhbHVlIGluc3RhbmNlb2YgSXRlbUdyb3VwKSB7XG4gICAgICB2YWx1ZS5lbmFibGUoKTtcbiAgICAgIHRoaXMuZmlyZSgnZW5hYmxlJywgeyB0eXBlOiAnZW5hYmxlJywgdGFyZ2V0OiB2YWx1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlzYWJsZWRJdGVtID0gdGhpcy5kcm9wZG93bi5nZXRJdGVtKHZhbHVlKTtcbiAgICAgIGlmIChkaXNhYmxlZEl0ZW0pIHtcbiAgICAgICAgZGlzYWJsZWRJdGVtLmVuYWJsZSgpO1xuICAgICAgICB0aGlzLmZpcmUoJ2VuYWJsZScsIHsgdHlwZTogJ2VuYWJsZScsIHRhcmdldDogZGlzYWJsZWRJdGVtIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGEgZHJvcGRvd24gbGlzdC5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94Lm9wZW4oKTtcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICB0aGlzLmRyb3Bkb3duLm9wZW4oKTtcbiAgICAgIHRoaXMuaW5wdXQub3BlbigpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9jY3VycyB3aGVuIGEgc2VsZWN0IGJveCBvcGVucy5cbiAgICAgICAqIEBldmVudCBTZWxlY3RCb3gjb3BlblxuICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBldmVudCBuYW1lICgnb3BlbicpXG4gICAgICAgKiBAZXhhbXBsZVxuICAgICAgICogc2VsZWN0Qm94Lm9uKCdvcGVuJywgZXYgPT4ge1xuICAgICAgICogICBjb25zb2xlLmxvZygnb3BlbicpO1xuICAgICAgICogfSk7XG4gICAgICAgKi9cbiAgICAgIHRoaXMuZmlyZSgnb3BlbicsIHsgdHlwZTogJ29wZW4nIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhIGRyb3Bkb3duIGxpc3QuXG4gICAqIEBleGFtcGxlXG4gICAqIHNlbGVjdEJveC5jbG9zZSgpO1xuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyb3Bkb3duLmNsb3NlKCk7XG4gICAgdGhpcy5pbnB1dC5jbG9zZSgpO1xuXG4gICAgLyoqXG4gICAgICogT2NjdXJzIHdoZW4gYSBzZWxlY3QgYm94IGNsb3Nlcy5cbiAgICAgKiBAZXZlbnQgU2VsZWN0Qm94I2Nsb3NlXG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBldmVudCBuYW1lICgnY2xvc2UnKVxuICAgICAqIEBleGFtcGxlXG4gICAgICogc2VsZWN0Qm94Lm9uKCdjbG9zZScsIGV2ID0+IHtcbiAgICAgKiAgIGNvbnNvbGUubG9nKCdjbG9zZScpO1xuICAgICAqIH0pO1xuICAgICAqL1xuICAgIHRoaXMuZmlyZSgnY2xvc2UnLCB7IHR5cGU6ICdjbG9zZScgfSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGEgZHJvcGRvd24gbGlzdC5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LnRvZ2dsZSgpO1xuICAgKi9cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9jdXMgdG8gc2VsZWN0IGJveC5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmZvY3VzKCk7XG4gICAqL1xuICBmb2N1cygpIHtcbiAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGFuIHtAbGluayBJdGVtIGl0ZW19LlxuICAgKiBJZiBpdCB0YWtlcyBzdHJpbmcsIGFuIGl0ZW0gd2l0aCB0aGUgc2FtZSB2YWx1ZSBhcyB0aGUgYXJndW1lbnQgaXMgc2VsZWN0ZWQuXG4gICAqIElmIGl0IHRha2VzIG51bWJlciwgYW4gaXRlbSB3aXRoIHRoZSBzYW1lIGluZGV4IGFzIHRoZSBhcmd1bWVudCBpcyBzZWxlY3RlZC5cbiAgICogSWYgaXQgdGFrZXMgSXRlbSwgYW4gYXJndW1lbnQgaXRzZWxmIGlzIHNlbGVjdGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8SXRlbX0gdmFsdWUgLSBpZiBzdHJpbmcsIGZpbmQgYW4gSXRlbSBieSBpdHMgdmFsdWUuIGlmIG51bWJlciwgZmluZCBhbiBJdGVtIGJ5IGl0cyBpbmRleC5cbiAgICogQHJldHVybiB7SXRlbX0gLSBzZWxlY3RlZCBJdGVtLlxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guc2VsZWN0KDEpOyAvLyBzZWNvbmQgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICogc2VsZWN0Qm94LnNlbGVjdCgndmFsdWUnKSAvLyBpdGVtIHdoaWNoIG9mIHZhbHVlIGlzICd2YWx1ZScgaXMgc2VsZWN0ZWQuXG4gICAqL1xuICBzZWxlY3QodmFsdWUpIHtcbiAgICBsZXQgc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICBjb25zdCBwcmV2U2VsZWN0ZWRJdGVtID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW0oKTtcblxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcy5kcm9wZG93bi5zZWxlY3QodmFsdWUpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuY2hhbmdlVGV4dChzZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPY2N1cnMgd2hlbiBhbiB7QGxpbmsgSXRlbSBpdGVtfSBpcyBzZWxlY3RlZC5cbiAgICAgICAgICogQGV2ZW50IFNlbGVjdEJveCNzZWxlY3RcbiAgICAgICAgICogQHR5cGUge29iamVjdH0gZXZcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBldmVudCBuYW1lICgnc2VsZWN0JylcbiAgICAgICAgICogQHByb3BlcnR5IHtJdGVtfSB0YXJnZXQgLSBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAqIEBpZ25vcmVcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogc2VsZWN0Qm94Lm9uKCdzZWxlY3QnLCBldiA9PiB7XG4gICAgICAgICAqICAgY29uc29sZS5sb2coYCR7ZXYudGFyZ2V0LmdldExhYmVsKCl9IGlzIHNlbGVjdGVkLmApO1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZmlyZSgnc2VsZWN0JywgeyB0eXBlOiAnc2VsZWN0JywgdGFyZ2V0OiBzZWxlY3RlZEl0ZW0gfSk7XG5cbiAgICAgICAgaWYgKHByZXZTZWxlY3RlZEl0ZW0gIT09IHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE9jY3VycyB3aGVuIGEgc2VsZWN0ZWQge0BsaW5rIEl0ZW0gaXRlbX0gaXMgY2hhbmdlZC5cbiAgICAgICAgICAgKiBAZXZlbnQgU2VsZWN0Qm94I2NoYW5nZVxuICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IGV2XG4gICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBldmVudCBuYW1lICgnY2hhbmdlJylcbiAgICAgICAgICAgKiBAcHJvcGVydHkge0l0ZW19IHByZXYgLSBwcmV2aW91cyBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAgICogQHByb3BlcnR5IHtJdGVtfSBjdXJyIC0gY3VycmVudCBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICAgKiBzZWxlY3RCb3gub24oJ2NoYW5nZScsIGV2ID0+IHtcbiAgICAgICAgICAgKiAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCBpdGVtIGlzIGNoYW5nZWQgZnJvbSAke2V2LnByZXYuZ2V0TGFiZWwoKX0gdG8gJHtldi5jdXJyLmdldExhYmVsKCl9LmApO1xuICAgICAgICAgICAqIH0pO1xuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgdHlwZTogJ2NoYW5nZScsXG4gICAgICAgICAgICBwcmV2OiBwcmV2U2VsZWN0ZWRJdGVtLFxuICAgICAgICAgICAgY3Vycjogc2VsZWN0ZWRJdGVtXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hdXRvY2xvc2UgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRJdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VsZWN0IGFuIGl0ZW0uXG4gICAqIElmIHNlbGVjdEJveCBoYXMgYSBwbGFjZWhvbGRlciwgdGhlIGlucHV0J3MgdGV4dCBpcyBhIHBsYWNlaG9sZGVyLlxuICAgKiBJZiBubyBwbGFjZWhvbGRlciwgdGhzIGlucHV0IGlzIGVtcHR5LlxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZGVzZWxlY3QoKTtcbiAgICovXG4gIGRlc2VsZWN0KCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5kcm9wZG93bi5kZXNlbGVjdCgpO1xuICAgICAgdGhpcy5pbnB1dC5jaGFuZ2VUZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgc2VsZWN0ZWQge0BsaW5rIEl0ZW0gaXRlbX0uXG4gICAqIEByZXR1cm4ge0l0ZW19XG4gICAqL1xuICBnZXRTZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24uZ2V0U2VsZWN0ZWRJdGVtKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB7QGxpbmsgSXRlbSBpdGVtc30gdGhhdCBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi5cbiAgICogSWYgZmlsdGVyIGZ1bmN0aW9uIGlzIG5vdCBwYXNzZWQsIGl0IHJldHVybnMgYWxsIGl0ZW1zLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGZpbHRlciBpdGVtc1xuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gdGhlIG51bWJlciBvZiBpdGVtcyB0byBmaW5kLiBJZiBpdCBpcyBub3QgcGFzc2VkLCBpdGVyYXRlIGFsbCBpdGVtcy5cbiAgICogQHJldHVybiB7YXJyYXk8SXRlbT59XG4gICAqIEBleGFtcGxlXG4gICAqIHNlbGVjdEJveC5nZXRJdGVtcygpOyAvLyBhbGwgaXRlbXNcbiAgICogc2VsZWN0Qm94LmdldEl0ZW1zKGl0ZW0gPT4ge1xuICAgKiAgcmV0dXJuICFpdGVtLmlzRGlzYWJsZWQoKTtcbiAgICogfSk7IC8vIGFsbCBlbmFibGVkIGl0ZW1zXG4gICAqL1xuICBnZXRJdGVtcyhjYWxsYmFjaywgbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24uZ2V0SXRlbXMoY2FsbGJhY2ssIG51bWJlcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIHtAbGluayBJdGVtIGl0ZW19IGJ5IGl0cyBpbmRleCBvciB2YWx1ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZSAtIGlmIHN0cmluZywgdGhlIEl0ZW0ncyB2YWx1ZS4gaWYgbnVtYmVyLCB0aGUgSXRlbSdzIGluZGV4LlxuICAgKiBAcmV0dXJuIHtJdGVtfVxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZ2V0SXRlbSgwKTsgLy8gZmlyc3QgaXRlbVxuICAgKiBzZWxlY3RCb3guZ2V0SXRlbSgndmFsdWUnKSAvLyBpdGVtIHdoaWNoIG9mIHZhbHVlIGlzICd2YWx1ZSdcbiAgICovXG4gIGdldEl0ZW0odmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5nZXRJdGVtKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHtAbGluayBJdGVtR3JvdXAgaXRlbSBncm91cHN9IHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gICAqIElmIGZpbHRlciBmdW5jdGlvbiBpcyBub3QgcGFzc2VkLCBpdCByZXR1cm5zIGFsbCBpdGVtIGdyb3Vwcy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBmaWx0ZXIgaXRlbSBncm91cHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gZmluZC4gSWYgaXQgaXMgbm90IHBhc3NlZCwgaXRlcmF0ZSBhbGwgaXRlbSBncm91cHMuXG4gICAqIEByZXR1cm4ge2FycmF5PEl0ZW1Hcm91cD59XG4gICAqIEBleGFtcGxlXG4gICAqIHNlbGVjdEJveC5nZXRJdGVtR3JvdXBzKCk7IC8vIGFsbCBpdGVtIGdyb3Vwc1xuICAgKiBzZWxlY3RCb3guZ2V0SXRlbUdyb3VwcyhpdGVtR3JvdXAgPT4ge1xuICAgKiAgcmV0dXJuICFpdGVtR3JvdXAuaXNEaXNhYmxlZCgpO1xuICAgKiB9KTsgLy8gYWxsIGVuYWJsZWQgaXRlbSBncm91cHNcbiAgICovXG4gIGdldEl0ZW1Hcm91cHMoY2FsbGJhY2ssIG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLmdldEl0ZW1Hcm91cHMoY2FsbGJhY2ssIG51bWJlcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIHtAbGluayBJdGVtR3JvdXAgaXRlbSBncm91cH0gYnkgaXRzIGluZGV4LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBncm91cEluZGV4IG9mIHRoZSBJdGVtR3JvdXBcbiAgICogQHJldHVybiB7SXRlbUdyb3VwfVxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZ2V0SXRlbUdyb3VwKDApOyAvLyBmaXJzdCBpdGVtIGdyb3VwXG4gICAqL1xuICBnZXRJdGVtR3JvdXAoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5nZXRJdGVtR3JvdXAoaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3RvcnkgYSBzZWxlY3QgYm94LlxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZGVzdHJveSgpO1xuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgdGhpcy5pbnB1dC5kZXN0cm95KCk7XG4gICAgdGhpcy5kcm9wZG93bi5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMudGhlbWUpIHtcbiAgICAgIHRoaXMudGhlbWUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmVsID0gdGhpcy5pbnB1dCA9IHRoaXMuZHJvcGRvd24gPSB0aGlzLnRoZW1lID0gbnVsbDtcbiAgfVxufVxuXG5DdXN0b21FdmVudHMubWl4aW4oU2VsZWN0Qm94KTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Qm94O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoZW1lXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgZm9yRWFjaE93blByb3BlcnRpZXMgZnJvbSAndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzJztcbmltcG9ydCByZW1vdmVFbGVtZW50IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVFbGVtZW50JztcbmltcG9ydCBpc0FycmF5IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc0FycmF5JztcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzQm9vbGVhbic7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzU3RyaW5nJztcbmltcG9ydCB7IHRyYW5zZm9ybSwgZ2V0U2VsZWN0b3IgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNscyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBiYXNlVGhlbWUgZnJvbSAnLi90aGVtZUNvbmZpZyc7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge29iamVjdH0gY3VzdG9tVGhlbWUgLSB0aGVtZSBvYmplY3QgZm9yIGN1c3RvbSBzdHlsZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IGNvbnRhaW5lciAtIGNvbnRhaW5lciBlbGVtZW50IG9yIHNlbGVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZW1lIHtcbiAgY29uc3RydWN0b3IoY3VzdG9tVGhlbWUsIGNvbnRhaW5lcikge1xuICAgIHRoaXMuY29udGFpbmVyU2VsZWN0b3IgPSBnZXRTZWxlY3Rvcihjb250YWluZXIpO1xuICAgIHRoaXMuY3NzU3RyaW5nID0gdGhpcy5idWlsZEFsbCh0cmFuc2Zvcm0oY3VzdG9tVGhlbWUpKTtcbiAgICB0aGlzLnN0eWxlRWwgPSB0aGlzLmNyZWF0ZVN0eWxlRWxlbWVudCgpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZCh0aGlzLnN0eWxlRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHN0eWxlIGVsZW1lbnRcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XG4gICAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGVFbC50eXBlID0gJ3RleHQvY3NzJztcblxuICAgIGlmIChzdHlsZUVsLnN0eWxlU2hlZXQpIHtcbiAgICAgIHN0eWxlRWwuc3R5bGVTaGVldC5jc3NUZXh0ID0gdGhpcy5jc3NTdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5jc3NTdHJpbmcpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVFbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBjc3Mgc3RyaW5ncyBmb3IgSW5wdXQsIERyb3Bkb3duLCBJdGVtR3JvdXAsIGFuZCBJdGVtLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdGhlbWUgLSB0aGVtZSBvYmplY3RcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGRBbGwodGhlbWUpIHtcbiAgICBjb25zdCBleGNsdWRlID0geyBib3JkZXI6ICcnLCBiYWNrZ3JvdW5kOiAnJyB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYnVpbGRJbnB1dCh7IC4uLnRoZW1lLmNvbW1vbiwgLi4udGhlbWUuaW5wdXQgfSkgK1xuICAgICAgdGhpcy5idWlsZERyb3Bkb3duKHsgLi4udGhlbWUuY29tbW9uLCBib3JkZXJUb3A6ICcwJywgLi4udGhlbWUuZHJvcGRvd24sIGhlaWdodDogJycgfSkgK1xuICAgICAgdGhpcy5idWlsZEl0ZW1Hcm91cChcbiAgICAgICAgdGhlbWUuaXRlbUdyb3VwXG4gICAgICAgICAgPyB7IC4uLnRoZW1lLmNvbW1vbiwgLi4uZXhjbHVkZSwgLi4udGhlbWUuaXRlbUdyb3VwLmxhYmVsIH1cbiAgICAgICAgICA6IHsgLi4udGhlbWUuY29tbW9uLCAuLi5leGNsdWRlIH1cbiAgICAgICkgK1xuICAgICAgdGhpcy5idWlsZEl0ZW0oXG4gICAgICAgIHRoZW1lLml0ZW1Hcm91cFxuICAgICAgICAgID8geyAuLi50aGVtZS5jb21tb24sIC4uLmV4Y2x1ZGUsIC4uLnRoZW1lLml0ZW0sIGluSXRlbUdyb3VwOiB0aGVtZS5pdGVtR3JvdXAuaXRlbXMgfVxuICAgICAgICAgIDogeyAuLi50aGVtZS5jb21tb24sIC4uLmV4Y2x1ZGUsIC4uLnRoZW1lLml0ZW0gfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgY3NzIHN0cmluZ3MgZm9yIElucHV0XG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0aGVtZSAtIHRoZW1lIG9iamVjdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZElucHV0KHRoZW1lKSB7XG4gICAgdGhlbWUucGxhY2Vob2xkZXIgPSB7fTtcbiAgICBpZiAodGhlbWUuaGVpZ2h0KSB7XG4gICAgICB0aGVtZS5wbGFjZWhvbGRlci5saW5lSGVpZ2h0ID0gdGhlbWUuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAoaXNCb29sZWFuKHRoZW1lLnNob3dJY29uKSAmJiAhdGhlbWUuc2hvd0ljb24pIHtcbiAgICAgIHRoZW1lLmljb24gPSB7IGRpc3BsYXk6ICdub25lJyB9O1xuICAgICAgdGhlbWUucGxhY2Vob2xkZXIud2lkdGggPSAnMTAwJSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoY2xzLklOUFVULCB0aGVtZSkgK1xuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhbY2xzLklOUFVULCBjbHMuT1BFTl0sIHRoZW1lLm9wZW4pICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoW2Nscy5JTlBVVCwgY2xzLkRJU0FCTEVEXSwgdGhlbWUuZGlzYWJsZWQpICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoY2xzLlBMQUNFSE9MREVSLCB0aGVtZS5wbGFjZWhvbGRlcikgK1xuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhjbHMuSUNPTiwgdGhlbWUuaWNvbilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNzcyBzdHJpbmdzIGZvciBEcm9wZG93blxuICAgKiBAcGFyYW0ge29iamVjdH0gdGhlbWUgLSB0aGVtZSBvYmplY3RcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGREcm9wZG93bih0aGVtZSkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkQ3NzU3RyaW5nKGNscy5EUk9QRE9XTiwgdGhlbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNzcyBzdHJpbmdzIGZvciBJdGVtR3JvdXBcbiAgICogQHBhcmFtIHtvYmplY3R9IHRoZW1lIC0gdGhlbWUgb2JqZWN0XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkSXRlbUdyb3VwKHRoZW1lKSB7XG4gICAgaWYgKHRoZW1lLmhlaWdodCkge1xuICAgICAgdGhlbWUubGluZUhlaWdodCA9IHRoZW1lLmhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhjbHMuSVRFTV9HUk9VUF9MQUJFTCwgdGhlbWUpICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoW2Nscy5JVEVNX0dST1VQX0xBQkVMLCBjbHMuRElTQUJMRURdLCB0aGVtZS5kaXNhYmxlZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNzcyBzdHJpbmdzIGZvciBJdGVtXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0aGVtZSAtIHRoZW1lIG9iamVjdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZEl0ZW0odGhlbWUpIHtcbiAgICBpZiAodGhlbWUuaGVpZ2h0KSB7XG4gICAgICB0aGVtZS5saW5lSGVpZ2h0ID0gdGhlbWUuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhlbWUuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IGJhc2UgPSB0cmFuc2Zvcm0oYmFzZVRoZW1lKTtcblxuICAgICAgdGhlbWUuc2VsZWN0ZWQgPSB7IC4uLmJhc2UuaXRlbS5zZWxlY3RlZCwgLi4udGhlbWUuc2VsZWN0ZWQgfTtcbiAgICAgIHRoZW1lLmRpc2FibGVkID0geyAuLi5iYXNlLml0ZW0uZGlzYWJsZWQsIC4uLnRoZW1lLmRpc2FibGVkIH07XG4gICAgICB0aGVtZS5oaWdobGlnaHRlZCA9IHsgLi4uYmFzZS5pdGVtLmhpZ2hsaWdodGVkLCAuLi50aGVtZS5oaWdobGlnaHRlZCB9O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKGNscy5JVEVNLCB0aGVtZSkgK1xuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhbY2xzLklURU0sIGNscy5TRUxFQ1RFRF0sIHRoZW1lLnNlbGVjdGVkKSArXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKFtjbHMuSVRFTSwgY2xzLkRJU0FCTEVEXSwgdGhlbWUuZGlzYWJsZWQpICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoW2Nscy5JVEVNLCBjbHMuSElHSExJR0hUXSwgdGhlbWUuaGlnaGxpZ2h0ZWQpICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoYCR7Y2xzLklURU1fR1JPVVB9Pi4ke2Nscy5JVEVNfWAsIHRoZW1lLmluSXRlbUdyb3VwKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgY3NzIHN0cmluZ3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIGNsYXNzTmFtZVxuICAgKiBAcGFyYW0ge29iamVjdH0gdGhlbWUgLSB0aGVtZSBvYmplY3RcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGRDc3NTdHJpbmcoY2xhc3NOYW1lLCB0aGVtZSkge1xuICAgIGlmIChpc0FycmF5KGNsYXNzTmFtZSkpIHtcbiAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5qb2luKCcuJyk7XG4gICAgfVxuICAgIGNsYXNzTmFtZSA9IGAuJHtjbGFzc05hbWV9YDtcblxuICAgIGxldCBjc3NTdHJpbmcgPSAnJztcbiAgICBmb3JFYWNoT3duUHJvcGVydGllcyh0aGVtZSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgdmFsdWUpIHtcbiAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNzc1N0cmluZyArPSBgJHtrZXl9OiR7dmFsdWV9O2A7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3NzU3RyaW5nID8gYCR7dGhpcy5jb250YWluZXJTZWxlY3Rvcn0gJHtjbGFzc05hbWV9eyR7Y3NzU3RyaW5nfX1gIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzdG9yeSBhIHRoZW1lXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5zdHlsZUVsKTtcbiAgICB0aGlzLnN0eWxlRWwgPSBudWxsO1xuICB9XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlbWUgY29uZmlndXJhdGlvblxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuLyoqXG4gKiBUaGVtZSBjb25maWd1cmF0aW9uLlxuICogXCJjb21tb25cIiBwcmVmaXggaXMgZm9yIHRoZSBlbnRpcmUgc2VsZWN0IGJveC4gSXRzIHByb3BlcnRpZXMgYXJlIG92ZXJyaWRlbiBieSBcImlucHV0XCIsIFwiZHJvcGRvd25cIiwgXCJpdGVtR3JvdXBcIiwgYW5kIFwiaXRlbVwiLlxuICogVGhlIGV4YW1wbGUgdXNpbmcgdGhlbWUgY2FuIGJlIGZvdW5kIHtAbGluayB0dXRvcmlhbC1leGFtcGxlMDItdGhlbWUgaGVyZX0uXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSB0aGVtZUNvbmZpZ1xuICogQGV4YW1wbGVcbiAqIGNvbnN0IHRoZW1lQ29uZmlnID0ge1xuICogICAnY29tbW9uLmJvcmRlcic6ICcxcHggc29saWQgI2RkZCcsIC8vIGJvcmRlciBmb3IgaW5wdXQgYW5kIGRyb3Bkb3duIChub3QgaXRlbUdyb3VwIGFuZCBpdGVtKVxuICogICAnY29tbW9uLmJhY2tncm91bmQnOiAnI2ZmZicsXG4gKiAgICdjb21tb24uY29sb3InOiAnIzMzMycsXG4gKiAgICdjb21tb24ud2lkdGgnOiAnMTAwJScsXG4gKiAgICdjb21tb24uaGVpZ2h0JzogJzI5cHgnLCAvLyBoZWlnaHQgZm9yIGl0ZW0gYW5kIGl0ZW1Hcm91cCBsYWJlbCAobm90IGVudGlyZSBzZWxlY3QgYm94KVxuICpcbiAqICAgJ2NvbW1vbi5kaXNhYmxlZC5iYWNrZ3JvdW5kJzogJyNmOWY5ZjknLFxuICogICAnY29tbW9uLmRpc2FibGVkLmNvbG9yJzogJ2M4YzhjOCcsXG4gKlxuICogICAvLyBJbnB1dFxuICogICAnaW5wdXQuYm9yZGVyJzogJzFweCBzb2xpZCAjZGRkJyxcbiAqICAgJ2lucHV0LmJvcmRlckJvdHRvbSc6ICcnLFxuICogICAnaW5wdXQuYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2lucHV0LmNvbG9yJzogJyMzMzMnLFxuICogICAnaW5wdXQud2lkdGgnOiAnMTAwJScsXG4gKiAgICdpbnB1dC5oZWlnaHQnOiAnMjlweCcsXG4gKlxuICogICAvLyBJbnB1dCB3aGVuIGRyb3Bkb3duIGlzIG9wZW5cbiAqICAgJ2lucHV0Lm9wZW4uYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAqICAgJ2lucHV0Lm9wZW4uYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2lucHV0Lm9wZW4uY29sb3InOiAnIzMzMycsXG4gKlxuICogICAvLyBJbnB1dCB3aGVuIHNlbGVjdGJveCBpcyBkaXNhYmxlZFxuICogICAnaW5wdXQuZGlzYWJsZWQuYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAqICAgJ2lucHV0LmRpc2FibGVkLmJhY2tncm91bmQnOiAnI2Y5ZjlmOScsXG4gKiAgICdpbnB1dC5kaXNhYmxlZC5jb2xvcic6ICcjYzhjOGM4JyxcbiAqXG4gKiAgIC8vIERyb3Bkb3duXG4gKiAgICdkcm9wZG93bi5ib3JkZXInOiAnMXB4IHNvbGlkICNhYWEnLFxuICogICAnZHJvcGRvd24uYm9yZGVyVG9wJzogJzAnLFxuICogICAnZHJvcGRvd24uYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2Ryb3Bkb3duLndpZHRoJzogJzEwMCUnLFxuICogICAnZHJvcGRvd24ubWF4SGVpZ2h0JzogJycsXG4gKlxuICogICAvLyBJdGVtR3JvdXAncyBpdGVtc1xuICogICAvLyBpZiB5b3Ugd2FudCB0byBzZXQgdGhlIHNhbWUgcGFkZGluZyB2YWx1ZSBhcyB0aGUgaXRlbUdyb3VwLmxhYmVsLCBzZXQgdG8gJzhweCcuXG4gKiAgICdpdGVtR3JvdXAuaXRlbXMucGFkZGluZ0xlZnQnOiAnMjBweCcsXG4gKlxuICogICAvLyBJdGVtR3JvdXAncyBsYWJlbFxuICogICAnaXRlbUdyb3VwLmxhYmVsLmJvcmRlcic6ICcwJyxcbiAqICAgJ2l0ZW1Hcm91cC5sYWJlbC5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICogICAnaXRlbUdyb3VwLmxhYmVsLmNvbG9yJzogJyMzMzMnLFxuICogICAnaXRlbUdyb3VwLmxhYmVsLmZvbnRXZWlnaHQnOiAnYm9sZCcsXG4gKiAgICdpdGVtR3JvdXAubGFiZWwuaGVpZ2h0JzogJzI5cHgnLFxuICpcbiAqICAgLy8gZGlzYWJsZWQgSXRlbUdyb3VwJ3MgbGFiZWxcbiAqICAgJ2l0ZW1Hcm91cC5sYWJlbC5kaXNhYmxlZC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtR3JvdXAubGFiZWwuZGlzYWJsZWQuYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2l0ZW1Hcm91cC5sYWJlbC5kaXNhYmxlZC5jb2xvcic6ICcjMzMzJyxcbiAqXG4gKiAgIC8vIEl0ZW1cbiAqICAgJ2l0ZW0uYm9yZGVyJzogJzAnLFxuICogICAnaXRlbS5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICogICAnaXRlbS5jb2xvcic6ICcjMzMzJyxcbiAqICAgJ2l0ZW0uaGVpZ2h0JzogJzI5cHgnLFxuICpcbiAqICAgLy8gc2VsZWN0ZWQgSXRlbVxuICogICAnaXRlbS5zZWxlY3RlZC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtLnNlbGVjdGVkLmJhY2tncm91bmQnOiAnI2Y0ZjRmNCcsXG4gKiAgICdpdGVtLnNlbGVjdGVkLmNvbG9yJzogJyMzMzMnLFxuICpcbiAqICAgLy8gZGlzYWJsZWQgSXRlbVxuICogICAnaXRlbS5kaXNhYmxlZC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtLmRpc2FibGVkLmJhY2tncm91bmQnOiAnI2Y5ZjlmOScsXG4gKiAgICdpdGVtLmRpc2FibGVkLmNvbG9yJzogJyNjOGM4YzgnLFxuICpcbiAqICAgLy8gaGlnaGxpZ2h0ZWQgSXRlbVxuICogICAnaXRlbS5oaWdobGlnaHRlZC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtLmhpZ2hsaWdodGVkLmJhY2tncm91bmQnOiAnI2U1ZjZmZicsXG4gKiAgICdpdGVtLmhpZ2hsaWdodGVkLmNvbG9yJzogJyMzMzMnXG4gKiB9O1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICdjb21tb24uYm9yZGVyJzogJzFweCBzb2xpZCAjZGRkJywgLy8gYm9yZGVyIGZvciBpbnB1dCBhbmQgZHJvcGRvd24gKG5vdCBpdGVtR3JvdXAgYW5kIGl0ZW0pXG4gICdjb21tb24uYmFja2dyb3VuZCc6ICcjZmZmJyxcbiAgJ2NvbW1vbi5jb2xvcic6ICcjMzMzJyxcbiAgJ2NvbW1vbi53aWR0aCc6ICcxMDAlJyxcbiAgJ2NvbW1vbi5oZWlnaHQnOiAnMjlweCcsIC8vIGhlaWdodCBmb3IgaXRlbSBhbmQgaXRlbUdyb3VwIGxhYmVsIChub3QgZW50aXJlIHNlbGVjdCBib3gpXG5cbiAgJ2NvbW1vbi5kaXNhYmxlZC5iYWNrZ3JvdW5kJzogJyNmOWY5ZjknLFxuICAnY29tbW9uLmRpc2FibGVkLmNvbG9yJzogJ2M4YzhjOCcsXG5cbiAgLy8gSW5wdXRcbiAgJ2lucHV0LmJvcmRlcic6ICcxcHggc29saWQgI2RkZCcsXG4gICdpbnB1dC5ib3JkZXJCb3R0b20nOiAnJyxcbiAgJ2lucHV0LmJhY2tncm91bmQnOiAnaW5oZXJpdCcsXG4gICdpbnB1dC5jb2xvcic6ICcjMzMzJyxcbiAgJ2lucHV0LndpZHRoJzogJzEwMCUnLFxuICAnaW5wdXQuaGVpZ2h0JzogJzI5cHgnLFxuXG4gIC8vIElucHV0IHdoZW4gZHJvcGRvd24gaXMgb3BlblxuICAnaW5wdXQub3Blbi5ib3JkZXInOiAnMXB4IHNvbGlkICNhYWEnLFxuICAnaW5wdXQub3Blbi5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICAnaW5wdXQub3Blbi5jb2xvcic6ICcjMzMzJyxcblxuICAvLyBJbnB1dCB3aGVuIHNlbGVjdGJveCBpcyBkaXNhYmxlZFxuICAnaW5wdXQuZGlzYWJsZWQuYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAgJ2lucHV0LmRpc2FibGVkLmJhY2tncm91bmQnOiAnI2Y5ZjlmOScsXG4gICdpbnB1dC5kaXNhYmxlZC5jb2xvcic6ICcjYzhjOGM4JyxcblxuICAvLyBEcm9wZG93blxuICAnZHJvcGRvd24uYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAgJ2Ryb3Bkb3duLmJvcmRlclRvcCc6ICcwJyxcbiAgJ2Ryb3Bkb3duLmJhY2tncm91bmQnOiAnaW5oZXJpdCcsXG4gICdkcm9wZG93bi53aWR0aCc6ICcxMDAlJyxcbiAgJ2Ryb3Bkb3duLm1heEhlaWdodCc6ICcnLFxuXG4gIC8vIEl0ZW1Hcm91cCdzIGl0ZW1zXG4gICdpdGVtR3JvdXAuaXRlbXMucGFkZGluZ0xlZnQnOiAnMjBweCcsXG5cbiAgLy8gSXRlbUdyb3VwJ3MgbGFiZWxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5ib3JkZXInOiAnMCcsXG4gICdpdGVtR3JvdXAubGFiZWwuYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5jb2xvcic6ICcjMzMzJyxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5mb250V2VpZ2h0JzogJ2JvbGQnLFxuICAnaXRlbUdyb3VwLmxhYmVsLmhlaWdodCc6ICcyOXB4JyxcblxuICAvLyBkaXNhYmxlZCBJdGVtR3JvdXAncyBsYWJlbFxuICAnaXRlbUdyb3VwLmxhYmVsLmRpc2FibGVkLmJvcmRlcic6ICcwJyxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5kaXNhYmxlZC5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICAnaXRlbUdyb3VwLmxhYmVsLmRpc2FibGVkLmNvbG9yJzogJyMzMzMnLFxuXG4gIC8vIEl0ZW1cbiAgJ2l0ZW0uYm9yZGVyJzogJzAnLFxuICAnaXRlbS5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICAnaXRlbS5jb2xvcic6ICcjMzMzJyxcbiAgJ2l0ZW0uaGVpZ2h0JzogJzI5cHgnLFxuXG4gIC8vIHNlbGVjdGVkIEl0ZW1cbiAgJ2l0ZW0uc2VsZWN0ZWQuYm9yZGVyJzogJzAnLFxuICAnaXRlbS5zZWxlY3RlZC5iYWNrZ3JvdW5kJzogJyNmNGY0ZjQnLFxuICAnaXRlbS5zZWxlY3RlZC5jb2xvcic6ICcjMzMzJyxcblxuICAvLyBkaXNhYmxlZCBJdGVtXG4gICdpdGVtLmRpc2FibGVkLmJvcmRlcic6ICcwJyxcbiAgJ2l0ZW0uZGlzYWJsZWQuYmFja2dyb3VuZCc6ICcjZjlmOWY5JyxcbiAgJ2l0ZW0uZGlzYWJsZWQuY29sb3InOiAnI2M4YzhjOCcsXG5cbiAgLy8gaGlnaGxpZ2h0ZWQgSXRlbVxuICAnaXRlbS5oaWdobGlnaHRlZC5ib3JkZXInOiAnMCcsXG4gICdpdGVtLmhpZ2hsaWdodGVkLmJhY2tncm91bmQnOiAnI2U1ZjZmZicsXG4gICdpdGVtLmhpZ2hsaWdodGVkLmNvbG9yJzogJyMzMzMnXG59O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFV0aWxpdHkgZnVuY3Rpb25zXG4gKiBAYXV0aG9yIE5ITi4gRkUgZGV2IHRlYW0uPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgZm9yRWFjaE93blByb3BlcnRpZXMgZnJvbSAndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICd0dWktY29kZS1zbmlwcGV0L3R5cGUvaXNTdHJpbmcnO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBvYmplY3QgdXNpbmcgZG90IG5vdGF0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gb2JqZWN0IHRvIHRyYW5zZm9ybVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtID0gb2JqID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgZm9yRWFjaE93blByb3BlcnRpZXMob2JqLCAodmFsdWUsIHByb3ApID0+IHtcbiAgICBjb25zdCBrZXlzID0gcHJvcC5zcGxpdCgnLicpO1xuICAgIGxldCBjdXJyID0gcmVzdWx0O1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBjdXJyW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoIWN1cnJba2V5XSkge1xuICAgICAgICBjdXJyW2tleV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGN1cnIgPSBjdXJyW2tleV07XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgLSB0YWcgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSBjb250ZW50IGluIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIG90aGVyIHByb3BlcnRpZXMgZm9yIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBwYXJlbnQgZWxlbWVudCBmb3IgdGhlIGVsZW1lbnRcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWdOYW1lLCBjb250ZW50LCBvcHRpb25zLCBjb250YWluZXIpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIGlmIChjb250ZW50KSB7XG4gICAgZWwudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZm9yRWFjaE93blByb3BlcnRpZXMob3B0aW9ucywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAoa2V5LmluZGV4T2YoJ2RhdGEtJykgPiAtMSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbFtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcbiAgfVxuXG4gIHJldHVybiBlbDtcbn07XG5cbi8qKlxuICogR2V0IHNlbGVjdG9ycyBmb3IgYW4gZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgLSBlbGVtZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RvciA9IGVsID0+IHtcbiAgaWYgKGlzU3RyaW5nKGVsKSkge1xuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGlmIChlbC5pZCkge1xuICAgIHJldHVybiBgIyR7ZWwuaWR9YDtcbiAgfVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IGAuJHtlbC5jbGFzc05hbWUucmVwbGFjZSgvXFxzKy9nLCAnLicpfWA7XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKTtcblxuICAgIGlmIChlbGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGFnTmFtZSA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4gYCR7dGFnTmFtZX0ke2NsYXNzTmFtZX1gO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=