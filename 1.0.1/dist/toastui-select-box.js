/*!
 * TOAST UI Select Box
 * @version 1.0.1 | Fri May 21 2021
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
/******/ 	var hotCurrentHash = "834074beb9ecec874d30";
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
/******/ 	var hotUpdate, hotUpdateNewHash;
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
/******/ 				hotSetStatus("idle");
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
/******/ 				/*globals chunkId */
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
/******/ 				if (!module || module.hot._selfAccepted) continue;
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
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
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
/******/ 		hotCurrentHash = hotUpdateNewHash;
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
/******/ 			hotCurrentParents = [moduleId];
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
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
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
 *  - The value of the property(or The value of the element)
 *  - The name of the property(or The index of the element)
 *  - The object being traversed
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
 *  - The value of the element
 *  - The index of the element
 *  - The array(or Array-like object) being traversed
 * @param {Array} arr The array(or Array-like object) that will be traversed
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
 *  - The value of the property
 *  - The name of the property
 *  - The object being traversed
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
 * @param {HTMLElement} element - element to unbindbind events
 * @param {(string|object)} types - Space splitted events names or
 *  eventName:handler object
 * @param {function} [handler] - handler function
 * @memberof module:domEvent
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
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {(string|object)} types - Space splitted events names or
 *  eventName:handler object
 * @param {(function|object)} handler - handler function or context for handler
 *  method
 * @param {object} [context] context - context for handler method.
 * @memberof module:domEvent
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
 * @param {function} handler - handler function or context for handler
 *  method
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
})(this, function (_exports, _forEachOwnProperties) {
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
})(this, function (_exports, _forEachArray, _isExisty, _isNumber, _addClass, _removeClass, _removeElement, _utils, _constants, _itemGroup, _item) {
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

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  /**
   * @class
   * @ignore
   * @param {object} options - options
   *   @param {string} [options.placeholder] - placeholder for an input
   *   @param {array<itemData|itemGroupData>} options.data - data for ItemGroups and Items
   *   @param {boolean} [options.disabled=false] - whether a dropdown should be disabled or not
   */
  var Dropdown =
  /*#__PURE__*/
  function () {
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
})(this, function (_exports, _selectBox, _selectBox2) {
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
})(this, function (_exports, _addClass, _removeClass, _removeElement, _utils, _constants) {
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
  var Input =
  /*#__PURE__*/
  function () {
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
        this.placeholderEl.innerText = item.getLabel();
      } else {
        this.placeholderEl.innerText = this.placeholderText;
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
})(this, function (_exports, _addClass, _removeClass, _removeElement, _utils, _constants) {
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
  var Item =
  /*#__PURE__*/
  function () {
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
})(this, function (_exports, _addClass, _removeClass, _removeElement, _utils, _constants, _item) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _addClass = _interopRequireDefault(_addClass);
  _removeClass = _interopRequireDefault(_removeClass);
  _removeElement = _interopRequireDefault(_removeElement);
  _item = _interopRequireDefault(_item);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  /**
   * @class
   * @description
   * A group of items.
   * You can get ItemGroup by {@link SelectBox#getItemGroup SelectBox.getItemGroup()} and {@link SelectBox#getItemGroups SelectBox.getItemGroups()}.
   */
  var ItemGroup =
  /*#__PURE__*/
  function () {
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
})(this, function (_exports) {
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
})(this, function (_exports, _customEvents, _on, _off, _preventDefault, _getTarget, _closest, _removeElement, _isObject, _isExisty, _isHTMLNode, _sendHostname, _utils, _keyEventUtils, _constants, _input, _dropdown, _itemGroup, _item, _theme) {
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
  var SelectBox =
  /*#__PURE__*/
  function () {
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
        this.input.focus();
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
          this.input.focus();
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
        this.input.focus();
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
      this.input.focus();
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
})(this, function (_exports, _forEachOwnProperties, _removeElement, _isArray, _isBoolean, _isString, _utils, _constants, _themeConfig) {
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

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  /**
   * @class
   * @ignore
   * @param {object} customTheme - theme object for custom style
   * @param {HTMLElement|string} container - container element or selector
   */
  var Theme =
  /*#__PURE__*/
  function () {
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
      return this.buildInput(_objectSpread({}, theme.common, {}, theme.input)) + this.buildDropdown(_objectSpread({}, theme.common, {
        borderTop: '0'
      }, theme.dropdown, {
        height: ''
      })) + this.buildItemGroup(theme.itemGroup ? _objectSpread({}, theme.common, {}, exclude, {}, theme.itemGroup.label) : _objectSpread({}, theme.common, {}, exclude)) + this.buildItem(theme.itemGroup ? _objectSpread({}, theme.common, {}, exclude, {}, theme.item, {
        inItemGroup: theme.itemGroup.items
      }) : _objectSpread({}, theme.common, {}, exclude, {}, theme.item));
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
        theme.selected = _objectSpread({}, base.item.selected, {}, theme.selected);
        theme.disabled = _objectSpread({}, base.item.disabled, {}, theme.disabled);
        theme.highlighted = _objectSpread({}, base.item.highlighted, {}, theme.highlighted);
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
})(this, function (_exports) {
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
})(this, function (_exports, _forEachOwnProperties, _isString) {
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
      el.innerText = content;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9hcnJheS9pbkFycmF5LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2guanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vZm9yRWFjaEFycmF5LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL3RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2N1c3RvbUV2ZW50cy9jdXN0b21FdmVudHMuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L19zYWZlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvb2ZmLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9kb21FdmVudC9vbi5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvcHJldmVudERlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvX3NldENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9jbG9zZXN0LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9kb21VdGlsL2dldENsYXNzLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9kb21VdGlsL21hdGNoZXMuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvb2JqZWN0L2V4dGVuZC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvcmVxdWVzdC9pbWFnZVBpbmcuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3JlcXVlc3Qvc2VuZEhvc3RuYW1lLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC90eXBlL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNCb29sZWFuLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC90eXBlL2lzRXhpc3R5LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC90eXBlL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNIVE1MTm9kZS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc051bGwuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9jc3Mvc2VsZWN0Qm94LmNzcz83ZWJkIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL2lucHV0LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvaXRlbS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL2l0ZW1Hcm91cC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL2tleUV2ZW50VXRpbHMuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9qcy9zZWxlY3RCb3guanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL3RoZW1lQ29uZmlnLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOlsiQ1NTX1BSRUZJWCIsImNsYXNzTmFtZXMiLCJTRUxFQ1RfQk9YIiwiSVRFTSIsIklURU1fR1JPVVAiLCJJVEVNX0dST1VQX0xBQkVMIiwiRFJPUERPV04iLCJJTlBVVCIsIlBMQUNFSE9MREVSIiwiSUNPTiIsIk9QRU4iLCJISURERU4iLCJESVNBQkxFRCIsIlNFTEVDVEVEIiwiSElHSExJR0hUIiwiY2xzIiwidmFsdWUiLCJrZXkiLCJEcm9wZG93biIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImRpc2FibGVkIiwiZWwiLCJjbGFzc05hbWUiLCJuYXRpdmVFbCIsInRhYkluZGV4IiwiaXRlbXMiLCJpdGVtTGVuZ3RoIiwic2VsZWN0ZWRJdGVtIiwiaGlnaGxpZ2h0ZWRJdGVtIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVJdGVtcyIsIml0ZW0iLCJpdGVtSW5kZXgiLCJpdGVtR3JvdXBJbmRleCIsImZvckVhY2giLCJkYXR1bSIsIkl0ZW1Hcm91cCIsImluZGV4IiwibGVuZ3RoIiwiSXRlbSIsInB1c2giLCJhcHBlbmRUb0NvbnRhaW5lciIsImxhYmVsIiwiaXRlcmF0ZUl0ZW1zIiwiaXNTZWxlY3RlZCIsImRlc2VsZWN0IiwiZGlzYWJsZSIsImNhbGxiYWNrIiwiYXJncyIsInJlc3VsdCIsImdldEl0ZW1zIiwiaXRlbUluR3JvdXAiLCJhcHBseSIsIm9wZW4iLCJpc0Rpc2FibGVkIiwiaGlnaGxpZ2h0IiwiY2xvc2UiLCJkZWhpZ2hsaWdodCIsImVuYWJsZSIsInNlbGVjdCIsImdldEl0ZW0iLCJtb3ZlSGlnaGxpZ2h0ZWRJdGVtIiwiZGlyZWN0aW9uIiwiZ2V0SGlnaGxpZ2h0ZWRJdGVtIiwiaW5kZXhPZiIsImdldEl0ZW1JbmRleCIsIm51bWJlciIsImlzVmFsaWRJdGVtIiwiY29tcGFyZWRJdGVtIiwiZ2V0SW5kZXgiLCJnZXRWYWx1ZSIsImdldEl0ZW1Hcm91cHMiLCJpdGVtR3JvdXBzIiwiaXRlbUdyb3VwIiwiZ2V0SXRlbUdyb3VwIiwiZ2V0SXRlbUxlbmd0aCIsImdldFNlbGVjdGVkSXRlbSIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiZGVzdHJveSIsIlNlbGVjdEJveCIsIklucHV0Iiwic2hvd0ljb24iLCJwbGFjZWhvbGRlclRleHQiLCJwbGFjZWhvbGRlckVsIiwid2lkdGgiLCJmb2N1cyIsImNoYW5nZVRleHQiLCJpbm5lclRleHQiLCJnZXRMYWJlbCIsInNlbGVjdGVkIiwiaXRlbUdyb3VwRGlzYWJsZWQiLCJpdGVtRGlzYWJsZWQiLCJtYWtlRGlzYWJsZSIsIm1ha2VFbmFibGUiLCJkaXNhYmxlSXRlbUdyb3VwIiwiZW5hYmxlSXRlbUdyb3VwIiwiYmx1ciIsIm5hdGl2ZUNvbnRhaW5lciIsImxhYmVsRWwiLCJpdGVtQ29udGFpbmVyRWwiLCJjcmVhdGVJdGVtcyIsIm1hcCIsImtleUNvZGVNYXAiLCJrZXlNYXAiLCJBcnJvd1VwIiwiVXAiLCJBcnJvd0Rvd24iLCJEb3duIiwiU3BhY2ViYXIiLCJFbnRlciIsIkVzY2FwZSIsIkVzYyIsIlRhYiIsImlkZW50aWZ5S2V5IiwiZXYiLCJrZXlDb2RlIiwiYXV0b2ZvY3VzIiwiYXV0b2Nsb3NlIiwidGhlbWUiLCJ1c2FnZVN0YXRpc3RpY3MiLCJpbnB1dCIsImRyb3Bkb3duIiwib3BlbmVkIiwiZGlhYmxlZCIsIlRoZW1lIiwiY29udGFpbmVyRWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcHRpb25zIiwiYmluZEV2ZW50cyIsInRhcmdldCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlTW91c2VvdmVyIiwiaGFuZGxlS2V5ZG93biIsInVuYmluZEV2ZW50cyIsIml0ZW1FbCIsImdldEF0dHJpYnV0ZSIsInRvZ2dsZSIsImNoZWNrTW91c2Vtb3ZlIiwiY2xpZW50WCIsImNsaWVudFkiLCJ4IiwieSIsInByZXZYIiwicHJldlkiLCJjbG9zZUtleXMiLCJhY3RpdmVLZXlzIiwiYWN0aXZhdGVLZXlkb3duIiwicHJlc3NLZXlPbkl0ZW0iLCJwcmVzc0tleU9uSW5wdXQiLCJzZWxlY3RCeUtleWRvd24iLCJmaXJlIiwidHlwZSIsImRpc2FibGVkSXRlbSIsInByZXZTZWxlY3RlZEl0ZW0iLCJwcmV2IiwiY3VyciIsIkN1c3RvbUV2ZW50cyIsIm1peGluIiwiY3VzdG9tVGhlbWUiLCJjb250YWluZXJTZWxlY3RvciIsImNzc1N0cmluZyIsImJ1aWxkQWxsIiwic3R5bGVFbCIsImNyZWF0ZVN0eWxlRWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJleGNsdWRlIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImJ1aWxkSW5wdXQiLCJjb21tb24iLCJidWlsZERyb3Bkb3duIiwiYm9yZGVyVG9wIiwiaGVpZ2h0IiwiYnVpbGRJdGVtR3JvdXAiLCJidWlsZEl0ZW0iLCJpbkl0ZW1Hcm91cCIsImxpbmVIZWlnaHQiLCJpY29uIiwiZGlzcGxheSIsImJ1aWxkQ3NzU3RyaW5nIiwiYmFzZSIsImJhc2VUaGVtZSIsImhpZ2hsaWdodGVkIiwiam9pbiIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInRyYW5zZm9ybSIsIm9iaiIsInByb3AiLCJrZXlzIiwic3BsaXQiLCJ0YWdOYW1lIiwiY29udGVudCIsInNldEF0dHJpYnV0ZSIsImdldFNlbGVjdG9yIiwiaWQiLCJlbGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsQ0FBQztBQUNELE87UUNWQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsR0FBRzs7UUFFSDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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O0FBQzVDLFVBQUlBLEdBQUcsQ0FBQ2dELE9BQUosQ0FBWSxPQUFaLElBQXVCLENBQUMsQ0FBNUIsRUFBK0I7QUFDN0IzQyxVQUFFLENBQUNrTCxZQUFILENBQWdCdkwsR0FBaEIsRUFBcUJELEtBQXJCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xNLFVBQUUsQ0FBQ0wsR0FBRCxDQUFGLEdBQVVELEtBQVY7QUFDRDtBQUNGLEtBTkQ7O0FBUUEsUUFBSThELFNBQUosRUFBZTtBQUNiQSxlQUFTLENBQUNDLFdBQVYsQ0FBc0J6RCxFQUF0QjtBQUNEOztBQUVELFdBQU9BLEVBQVA7QUFDRCxHQXBCTTtBQXNCUDs7Ozs7Ozs7O0FBS08sTUFBTW1MLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFuTCxFQUFFLEVBQUk7QUFDL0IsUUFBSSwwQkFBU0EsRUFBVCxDQUFKLEVBQWtCO0FBQ2hCLGFBQU9BLEVBQVA7QUFDRDs7QUFFRCxRQUFJQSxFQUFFLENBQUNvTCxFQUFQLEVBQVc7QUFDVCxtQkFBV3BMLEVBQUUsQ0FBQ29MLEVBQWQ7QUFDRDs7QUFFRCxRQUFNbkwsU0FBUyxTQUFPRCxFQUFFLENBQUNDLFNBQUgsQ0FBYXdLLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkIsR0FBN0IsQ0FBdEI7O0FBQ0EsUUFBSXhLLFNBQUosRUFBZTtBQUNiLFVBQU1vTCxLQUFLLEdBQUczRSxRQUFRLENBQUM0RSxnQkFBVCxDQUEwQnJMLFNBQTFCLENBQWQ7O0FBRUEsVUFBSW9MLEtBQUssQ0FBQ3BLLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsZUFBT2hCLFNBQVA7QUFDRDtBQUNGOztBQUVELFFBQU0rSyxPQUFPLEdBQUdoTCxFQUFFLENBQUNnTCxPQUFILENBQVdOLFdBQVgsRUFBaEI7QUFFQSxnQkFBVU0sT0FBVixHQUFvQi9LLFNBQXBCO0FBQ0QsR0FyQk0iLCJmaWxlIjoidG9hc3R1aS1zZWxlY3QtYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU2VsZWN0Qm94XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInR1aVwiXSA9IHJvb3RbXCJ0dWlcIl0gfHwge30sIHJvb3RbXCJ0dWlcIl1bXCJTZWxlY3RCb3hcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjgzNDA3NGJlYjllY2VjODc0ZDMwXCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0dmFyIGNodW5rSWQgPSBcIm1haW5cIjtcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4gXHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0XCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vc3JjL2pzL2luZGV4LmpzXCIpKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgUmV0dXJucyB0aGUgZmlyc3QgaW5kZXggYXQgd2hpY2ggYSBnaXZlbiBlbGVtZW50IGNhbiBiZSBmb3VuZCBpbiB0aGUgYXJyYXkuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vdHlwZS9pc0FycmF5Jyk7XG5cbi8qKlxuICogQG1vZHVsZSBhcnJheVxuICovXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgaW5kZXggYXQgd2hpY2ggYSBnaXZlbiBlbGVtZW50IGNhbiBiZSBmb3VuZCBpbiB0aGUgYXJyYXlcbiAqIGZyb20gc3RhcnQgaW5kZXgoZGVmYXVsdCAwKSwgb3IgLTEgaWYgaXQgaXMgbm90IHByZXNlbnQuXG4gKiBJdCBjb21wYXJlcyBzZWFyY2hFbGVtZW50IHRvIGVsZW1lbnRzIG9mIHRoZSBBcnJheSB1c2luZyBzdHJpY3QgZXF1YWxpdHlcbiAqICh0aGUgc2FtZSBtZXRob2QgdXNlZCBieSB0aGUgPT09LCBvciB0cmlwbGUtZXF1YWxzLCBvcGVyYXRvcikuXG4gKiBAcGFyYW0geyp9IHNlYXJjaEVsZW1lbnQgRWxlbWVudCB0byBsb2NhdGUgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB0aGF0IHdpbGwgYmUgdHJhdmVyc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0SW5kZXggU3RhcnQgaW5kZXggaW4gYXJyYXkgZm9yIHNlYXJjaGluZyAoZGVmYXVsdCAwKVxuICogQHJldHVybnMge251bWJlcn0gdGhlIEZpcnN0IGluZGV4IGF0IHdoaWNoIGEgZ2l2ZW4gZWxlbWVudCwgb3IgLTEgaWYgaXQgaXMgbm90IHByZXNlbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6YXJyYXlcbiAqIEBleGFtcGxlXG4gKiB2YXIgaW5BcnJheSA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvYXJyYXkvaW5BcnJheScpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIHZhciBhcnIgPSBbJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91ciddO1xuICogdmFyIGlkeDEgPSBpbkFycmF5KCdvbmUnLCBhcnIsIDMpOyAvLyAtMVxuICogdmFyIGlkeDIgPSBpbkFycmF5KCdvbmUnLCBhcnIpOyAvLyAwXG4gKi9cbmZ1bmN0aW9uIGluQXJyYXkoc2VhcmNoRWxlbWVudCwgYXJyYXksIHN0YXJ0SW5kZXgpIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgbGVuZ3RoO1xuICAgIHN0YXJ0SW5kZXggPSBzdGFydEluZGV4IHx8IDA7XG5cbiAgICBpZiAoIWlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYXJyYXksIHNlYXJjaEVsZW1lbnQsIHN0YXJ0SW5kZXgpO1xuICAgIH1cblxuICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSBzdGFydEluZGV4OyBzdGFydEluZGV4ID49IDAgJiYgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChhcnJheVtpXSA9PT0gc2VhcmNoRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5BcnJheTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBFeGVjdXRlIHRoZSBwcm92aWRlZCBjYWxsYmFjayBvbmNlIGZvciBlYWNoIHByb3BlcnR5IG9mIG9iamVjdChvciBlbGVtZW50IG9mIGFycmF5KSB3aGljaCBhY3R1YWxseSBleGlzdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi90eXBlL2lzQXJyYXknKTtcbnZhciBmb3JFYWNoQXJyYXkgPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL2ZvckVhY2hBcnJheScpO1xudmFyIGZvckVhY2hPd25Qcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoT3duUHJvcGVydGllcycpO1xuXG4vKipcbiAqIEBtb2R1bGUgY29sbGVjdGlvblxuICovXG5cbi8qKlxuICogRXhlY3V0ZSB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgb25jZSBmb3IgZWFjaCBwcm9wZXJ0eSBvZiBvYmplY3Qob3IgZWxlbWVudCBvZiBhcnJheSkgd2hpY2ggYWN0dWFsbHkgZXhpc3QuXG4gKiBJZiB0aGUgb2JqZWN0IGlzIEFycmF5LWxpa2Ugb2JqZWN0KGV4LWFyZ3VtZW50cyBvYmplY3QpLCBJdCBuZWVkcyB0byB0cmFuc2Zvcm0gdG8gQXJyYXkuKHNlZSAnZXgyJyBvZiBleGFtcGxlKS5cbiAqIElmIHRoZSBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGZhbHNlLCB0aGUgbG9vcCB3aWxsIGJlIHN0b3BwZWQuXG4gKiBDYWxsYmFjayBmdW5jdGlvbihpdGVyYXRlZSkgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAqICAtIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkob3IgVGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50KVxuICogIC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5KG9yIFRoZSBpbmRleCBvZiB0aGUgZWxlbWVudClcbiAqICAtIFRoZSBvYmplY3QgYmVpbmcgdHJhdmVyc2VkXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHRyYXZlcnNlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaXRlcmF0ZWUgQ2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gQ29udGV4dCh0aGlzKSBvZiBjYWxsYmFjayBmdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogdmFyIGZvckVhY2ggPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vZm9yRWFjaCcpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIHZhciBzdW0gPSAwO1xuICpcbiAqIGZvckVhY2goWzEsMiwzXSwgZnVuY3Rpb24odmFsdWUpe1xuICogICAgIHN1bSArPSB2YWx1ZTtcbiAqIH0pO1xuICogYWxlcnQoc3VtKTsgLy8gNlxuICpcbiAqIC8vIEluIGNhc2Ugb2YgQXJyYXktbGlrZSBvYmplY3RcbiAqIHZhciBhcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5TGlrZSk7IC8vIGNoYW5nZSB0byBhcnJheVxuICogZm9yRWFjaChhcnJheSwgZnVuY3Rpb24odmFsdWUpe1xuICogICAgIHN1bSArPSB2YWx1ZTtcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvckVhY2hBcnJheShvYmosIGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JFYWNoT3duUHJvcGVydGllcyhvYmosIGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBFeGVjdXRlIHRoZSBwcm92aWRlZCBjYWxsYmFjayBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkob3IgQXJyYXktbGlrZSBvYmplY3QpIGluIGFzY2VuZGluZyBvcmRlci5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBFeGVjdXRlIHRoZSBwcm92aWRlZCBjYWxsYmFjayBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudFxuICogaW4gdGhlIGFycmF5KG9yIEFycmF5LWxpa2Ugb2JqZWN0KSBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gKiBJZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSwgdGhlIGxvb3Agd2lsbCBiZSBzdG9wcGVkLlxuICogQ2FsbGJhY2sgZnVuY3Rpb24oaXRlcmF0ZWUpIGlzIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gKiAgLSBUaGUgdmFsdWUgb2YgdGhlIGVsZW1lbnRcbiAqICAtIFRoZSBpbmRleCBvZiB0aGUgZWxlbWVudFxuICogIC0gVGhlIGFycmF5KG9yIEFycmF5LWxpa2Ugb2JqZWN0KSBiZWluZyB0cmF2ZXJzZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGFyciBUaGUgYXJyYXkob3IgQXJyYXktbGlrZSBvYmplY3QpIHRoYXQgd2lsbCBiZSB0cmF2ZXJzZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGl0ZXJhdGVlIENhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIENvbnRleHQodGhpcykgb2YgY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqIHZhciBmb3JFYWNoQXJyYXkgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vZm9yRWFjaEFycmF5Jyk7IC8vIG5vZGUsIGNvbW1vbmpzXG4gKlxuICogdmFyIHN1bSA9IDA7XG4gKlxuICogZm9yRWFjaEFycmF5KFsxLDIsM10sIGZ1bmN0aW9uKHZhbHVlKXtcbiAqICAgICBzdW0gKz0gdmFsdWU7XG4gKiB9KTtcbiAqIGFsZXJ0KHN1bSk7IC8vIDZcbiAqL1xuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFyciwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgbnVsbDtcblxuICAgIGZvciAoOyBpbmRleCA8IGxlbjsgaW5kZXggKz0gMSkge1xuICAgICAgICBpZiAoaXRlcmF0ZWUuY2FsbChjb250ZXh0LCBhcnJbaW5kZXhdLCBpbmRleCwgYXJyKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hBcnJheTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBFeGVjdXRlIHRoZSBwcm92aWRlZCBjYWxsYmFjayBvbmNlIGZvciBlYWNoIHByb3BlcnR5IG9mIG9iamVjdCB3aGljaCBhY3R1YWxseSBleGlzdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBFeGVjdXRlIHRoZSBwcm92aWRlZCBjYWxsYmFjayBvbmNlIGZvciBlYWNoIHByb3BlcnR5IG9mIG9iamVjdCB3aGljaCBhY3R1YWxseSBleGlzdC5cbiAqIElmIHRoZSBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGZhbHNlLCB0aGUgbG9vcCB3aWxsIGJlIHN0b3BwZWQuXG4gKiBDYWxsYmFjayBmdW5jdGlvbihpdGVyYXRlZSkgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAqICAtIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqICAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogIC0gVGhlIG9iamVjdCBiZWluZyB0cmF2ZXJzZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHJhdmVyc2VkXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBpdGVyYXRlZSAgQ2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gQ29udGV4dCh0aGlzKSBvZiBjYWxsYmFjayBmdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogdmFyIGZvckVhY2hPd25Qcm9wZXJ0aWVzID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzJyk7IC8vIG5vZGUsIGNvbW1vbmpzXG4gKlxuICogdmFyIHN1bSA9IDA7XG4gKlxuICogZm9yRWFjaE93blByb3BlcnRpZXMoe2E6MSxiOjIsYzozfSwgZnVuY3Rpb24odmFsdWUpe1xuICogICAgIHN1bSArPSB2YWx1ZTtcbiAqIH0pO1xuICogYWxlcnQoc3VtKTsgLy8gNlxuICovXG5mdW5jdGlvbiBmb3JFYWNoT3duUHJvcGVydGllcyhvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGtleTtcblxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IG51bGw7XG5cbiAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoaXRlcmF0ZWUuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hPd25Qcm9wZXJ0aWVzO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRyYW5zZm9ybSB0aGUgQXJyYXktbGlrZSBvYmplY3QgdG8gQXJyYXkuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoQXJyYXkgPSByZXF1aXJlKCcuL2ZvckVhY2hBcnJheScpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgQXJyYXktbGlrZSBvYmplY3QgdG8gQXJyYXkuXG4gKiBJbiBsb3cgSUUgKGJlbG93IDgpLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCBpcyBub3QgcGVyZmVjdC4gU28sIHRyeS1jYXRjaCBzdGF0ZW1lbnQgaXMgdXNlZC5cbiAqIEBwYXJhbSB7Kn0gYXJyYXlMaWtlIEFycmF5LWxpa2Ugb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IEFycmF5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbGxlY3Rpb25cbiAqIEBleGFtcGxlXG4gKiB2YXIgdG9BcnJheSA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvY29sbGVjdGlvbi90b0FycmF5Jyk7IC8vIG5vZGUsIGNvbW1vbmpzXG4gKlxuICogdmFyIGFycmF5TGlrZSA9IHtcbiAqICAgICAwOiAnb25lJyxcbiAqICAgICAxOiAndHdvJyxcbiAqICAgICAyOiAndGhyZWUnLFxuICogICAgIDM6ICdmb3VyJyxcbiAqICAgICBsZW5ndGg6IDRcbiAqIH07XG4gKiB2YXIgcmVzdWx0ID0gdG9BcnJheShhcnJheUxpa2UpO1xuICpcbiAqIGFsZXJ0KHJlc3VsdCBpbnN0YW5jZW9mIEFycmF5KTsgLy8gdHJ1ZVxuICogYWxlcnQocmVzdWx0KTsgLy8gb25lLHR3byx0aHJlZSxmb3VyXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoYXJyYXlMaWtlKSB7XG4gICAgdmFyIGFycjtcbiAgICB0cnkge1xuICAgICAgICBhcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgYXJyID0gW107XG4gICAgICAgIGZvckVhY2hBcnJheShhcnJheUxpa2UsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBhcnIucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9BcnJheTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGlzIG1vZHVsZSBwcm92aWRlcyBzb21lIGZ1bmN0aW9ucyBmb3IgY3VzdG9tIGV2ZW50cy4gQW5kIGl0IGlzIGltcGxlbWVudGVkIGluIHRoZSBvYnNlcnZlciBkZXNpZ24gcGF0dGVybi5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4dGVuZCA9IHJlcXVpcmUoJy4uL29iamVjdC9leHRlbmQnKTtcbnZhciBpc0V4aXN0eSA9IHJlcXVpcmUoJy4uL3R5cGUvaXNFeGlzdHknKTtcbnZhciBpc1N0cmluZyA9IHJlcXVpcmUoJy4uL3R5cGUvaXNTdHJpbmcnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL3R5cGUvaXNPYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vdHlwZS9pc0FycmF5Jyk7XG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL3R5cGUvaXNGdW5jdGlvbicpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL2ZvckVhY2gnKTtcblxudmFyIFJfRVZFTlROQU1FX1NQTElUID0gL1xccysvZztcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBleGFtcGxlXG4gKiAvLyBub2RlLCBjb21tb25qc1xuICogdmFyIEN1c3RvbUV2ZW50cyA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvY3VzdG9tRXZlbnRzL2N1c3RvbUV2ZW50cycpO1xuICovXG5mdW5jdGlvbiBDdXN0b21FdmVudHMoKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0hhbmRsZXJJdGVtW119XG4gICAgICovXG4gICAgdGhpcy5ldmVudHMgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogb25seSBmb3IgY2hlY2tpbmcgc3BlY2lmaWMgY29udGV4dCBldmVudCB3YXMgYmluZGVkXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqL1xuICAgIHRoaXMuY29udGV4dHMgPSBudWxsO1xufVxuXG4vKipcbiAqIE1peGluIGN1c3RvbSBldmVudHMgZmVhdHVyZSB0byBzcGVjaWZpYyBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyAtIGNvbnN0cnVjdG9yXG4gKiBAZXhhbXBsZVxuICogdmFyIEN1c3RvbUV2ZW50cyA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvY3VzdG9tRXZlbnRzL2N1c3RvbUV2ZW50cycpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIHZhciBtb2RlbDtcbiAqIGZ1bmN0aW9uIE1vZGVsKCkge1xuICogICAgIHRoaXMubmFtZSA9ICcnO1xuICogfVxuICogQ3VzdG9tRXZlbnRzLm1peGluKE1vZGVsKTtcbiAqXG4gKiBtb2RlbCA9IG5ldyBNb2RlbCgpO1xuICogbW9kZWwub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyB0aGlzLm5hbWUgPSAnbW9kZWwnOyB9LCB0aGlzKTtcbiAqIG1vZGVsLmZpcmUoJ2NoYW5nZScpO1xuICogYWxlcnQobW9kZWwubmFtZSk7IC8vICdtb2RlbCc7XG4gKi9cbkN1c3RvbUV2ZW50cy5taXhpbiA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICBleHRlbmQoZnVuYy5wcm90b3R5cGUsIEN1c3RvbUV2ZW50cy5wcm90b3R5cGUpO1xufTtcblxuLyoqXG4gKiBHZXQgSGFuZGxlckl0ZW0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gaGFuZGxlciBmdW5jdGlvblxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XSAtIGNvbnRleHQgZm9yIGhhbmRsZXJcbiAqIEByZXR1cm5zIHtIYW5kbGVySXRlbX0gSGFuZGxlckl0ZW0gb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9nZXRIYW5kbGVySXRlbSA9IGZ1bmN0aW9uKGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICB2YXIgaXRlbSA9IHtoYW5kbGVyOiBoYW5kbGVyfTtcblxuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgIGl0ZW0uY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW07XG59O1xuXG4vKipcbiAqIEdldCBldmVudCBvYmplY3Qgc2FmZWx5XG4gKiBAcGFyYW0ge3N0cmluZ30gW2V2ZW50TmFtZV0gLSBjcmVhdGUgc3ViIGV2ZW50IG1hcCBpZiBub3QgZXhpc3QuXG4gKiBAcmV0dXJucyB7KG9iamVjdHxhcnJheSl9IGV2ZW50IG9iamVjdC4gaWYgeW91IHN1cHBsaWVkIGBldmVudE5hbWVgXG4gKiAgcGFyYW1ldGVyIHRoZW4gbWFrZSBuZXcgYXJyYXkgYW5kIHJldHVybiBpdFxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fc2FmZUV2ZW50ID0gZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgdmFyIGV2ZW50cyA9IHRoaXMuZXZlbnRzO1xuICAgIHZhciBieU5hbWU7XG5cbiAgICBpZiAoIWV2ZW50cykge1xuICAgICAgICBldmVudHMgPSB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChldmVudE5hbWUpIHtcbiAgICAgICAgYnlOYW1lID0gZXZlbnRzW2V2ZW50TmFtZV07XG5cbiAgICAgICAgaWYgKCFieU5hbWUpIHtcbiAgICAgICAgICAgIGJ5TmFtZSA9IFtdO1xuICAgICAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0gPSBieU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudHMgPSBieU5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50cztcbn07XG5cbi8qKlxuICogR2V0IGNvbnRleHQgYXJyYXkgc2FmZWx5XG4gKiBAcmV0dXJucyB7YXJyYXl9IGNvbnRleHQgYXJyYXlcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX3NhZmVDb250ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHRzO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG4vKipcbiAqIEdldCBpbmRleCBvZiBjb250ZXh0XG4gKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gY29udGV4dCB0aGF0IHVzZWQgZm9yIGJpbmQgY3VzdG9tIGV2ZW50XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBpbmRleCBvZiBjb250ZXh0XG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9pbmRleE9mQ29udGV4dCA9IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5fc2FmZUNvbnRleHQoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGNvbnRleHRbaW5kZXhdKSB7XG4gICAgICAgIGlmIChjdHggPT09IGNvbnRleHRbaW5kZXhdWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiAtMTtcbn07XG5cbi8qKlxuICogTWVtb3JpemUgc3VwcGxpZWQgY29udGV4dCBmb3IgcmVjb2duaXplIHN1cHBsaWVkIG9iamVjdCBpcyBjb250ZXh0IG9yXG4gKiAgbmFtZTogaGFuZGxlciBwYWlyIG9iamVjdCB3aGVuIG9mZigpXG4gKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gY29udGV4dCBvYmplY3QgdG8gbWVtb3JpemVcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX21lbW9yaXplQ29udGV4dCA9IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBjb250ZXh0LCBpbmRleDtcblxuICAgIGlmICghaXNFeGlzdHkoY3R4KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dCA9IHRoaXMuX3NhZmVDb250ZXh0KCk7XG4gICAgaW5kZXggPSB0aGlzLl9pbmRleE9mQ29udGV4dChjdHgpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY29udGV4dFtpbmRleF1bMV0gKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LnB1c2goW2N0eCwgMV0pO1xuICAgIH1cbn07XG5cbi8qKlxuICogRm9yZ2V0IHN1cHBsaWVkIGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gY29udGV4dCBvYmplY3QgdG8gZm9yZ2V0XG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9mb3JnZXRDb250ZXh0ID0gZnVuY3Rpb24oY3R4KSB7XG4gICAgdmFyIGNvbnRleHQsIGNvbnRleHRJbmRleDtcblxuICAgIGlmICghaXNFeGlzdHkoY3R4KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dCA9IHRoaXMuX3NhZmVDb250ZXh0KCk7XG4gICAgY29udGV4dEluZGV4ID0gdGhpcy5faW5kZXhPZkNvbnRleHQoY3R4KTtcblxuICAgIGlmIChjb250ZXh0SW5kZXggPiAtMSkge1xuICAgICAgICBjb250ZXh0W2NvbnRleHRJbmRleF1bMV0gLT0gMTtcblxuICAgICAgICBpZiAoY29udGV4dFtjb250ZXh0SW5kZXhdWzFdIDw9IDApIHtcbiAgICAgICAgICAgIGNvbnRleHQuc3BsaWNlKGNvbnRleHRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIEJpbmQgZXZlbnQgaGFuZGxlclxuICogQHBhcmFtIHsoc3RyaW5nfHtuYW1lOnN0cmluZywgaGFuZGxlcjpmdW5jdGlvbn0pfSBldmVudE5hbWUgLSBjdXN0b21cbiAqICBldmVudCBuYW1lIG9yIGFuIG9iamVjdCB7ZXZlbnROYW1lOiBoYW5kbGVyfVxuICogQHBhcmFtIHsoZnVuY3Rpb258b2JqZWN0KX0gW2hhbmRsZXJdIC0gaGFuZGxlciBmdW5jdGlvbiBvciBjb250ZXh0XG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdIC0gY29udGV4dCBmb3IgYmluZGluZ1xuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fYmluZEV2ZW50ID0gZnVuY3Rpb24oZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIGV2ZW50cyA9IHRoaXMuX3NhZmVFdmVudChldmVudE5hbWUpO1xuICAgIHRoaXMuX21lbW9yaXplQ29udGV4dChjb250ZXh0KTtcbiAgICBldmVudHMucHVzaCh0aGlzLl9nZXRIYW5kbGVySXRlbShoYW5kbGVyLCBjb250ZXh0KSk7XG59O1xuXG4vKipcbiAqIEJpbmQgZXZlbnQgaGFuZGxlcnNcbiAqIEBwYXJhbSB7KHN0cmluZ3x7bmFtZTpzdHJpbmcsIGhhbmRsZXI6ZnVuY3Rpb259KX0gZXZlbnROYW1lIC0gY3VzdG9tXG4gKiAgZXZlbnQgbmFtZSBvciBhbiBvYmplY3Qge2V2ZW50TmFtZTogaGFuZGxlcn1cbiAqIEBwYXJhbSB7KGZ1bmN0aW9ufG9iamVjdCl9IFtoYW5kbGVyXSAtIGhhbmRsZXIgZnVuY3Rpb24gb3IgY29udGV4dFxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XSAtIGNvbnRleHQgZm9yIGJpbmRpbmdcbiAqIC8vLS0gIzEuIEdldCBNb2R1bGUgLS0vL1xuICogdmFyIEN1c3RvbUV2ZW50cyA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvY3VzdG9tRXZlbnRzL2N1c3RvbUV2ZW50cycpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIC8vLS0gIzIuIFVzZSBtZXRob2QgLS0vL1xuICogLy8gIyAyLjEgQmFzaWMgVXNhZ2VcbiAqIEN1c3RvbUV2ZW50cy5vbignb25sb2FkJywgaGFuZGxlcik7XG4gKlxuICogLy8gIyAyLjIgV2l0aCBjb250ZXh0XG4gKiBDdXN0b21FdmVudHMub24oJ29ubG9hZCcsIGhhbmRsZXIsIG15T2JqKTtcbiAqXG4gKiAvLyAjIDIuMyBCaW5kIGJ5IG9iamVjdCB0aGF0IG5hbWUsIGhhbmRsZXIgcGFpcnNcbiAqIEN1c3RvbUV2ZW50cy5vbih7XG4gKiAgICAgJ3BsYXknOiBoYW5kbGVyLFxuICogICAgICdwYXVzZSc6IGhhbmRsZXIyXG4gKiB9KTtcbiAqXG4gKiAvLyAjIDIuNCBCaW5kIGJ5IG9iamVjdCB0aGF0IG5hbWUsIGhhbmRsZXIgcGFpcnMgd2l0aCBjb250ZXh0IG9iamVjdFxuICogQ3VzdG9tRXZlbnRzLm9uKHtcbiAqICAgICAncGxheSc6IGhhbmRsZXJcbiAqIH0sIG15T2JqKTtcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmIChpc1N0cmluZyhldmVudE5hbWUpKSB7XG4gICAgICAgIC8vIFtzeW50YXggMSwgMl1cbiAgICAgICAgZXZlbnROYW1lID0gZXZlbnROYW1lLnNwbGl0KFJfRVZFTlROQU1FX1NQTElUKTtcbiAgICAgICAgZm9yRWFjaChldmVudE5hbWUsIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHNlbGYuX2JpbmRFdmVudChuYW1lLCBoYW5kbGVyLCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChldmVudE5hbWUpKSB7XG4gICAgICAgIC8vIFtzeW50YXggMywgNF1cbiAgICAgICAgY29udGV4dCA9IGhhbmRsZXI7XG4gICAgICAgIGZvckVhY2goZXZlbnROYW1lLCBmdW5jdGlvbihmdW5jLCBuYW1lKSB7XG4gICAgICAgICAgICBzZWxmLm9uKG5hbWUsIGZ1bmMsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEJpbmQgb25lLXNob3QgZXZlbnQgaGFuZGxlcnNcbiAqIEBwYXJhbSB7KHN0cmluZ3x7bmFtZTpzdHJpbmcsaGFuZGxlcjpmdW5jdGlvbn0pfSBldmVudE5hbWUgLSBjdXN0b21cbiAqICBldmVudCBuYW1lIG9yIGFuIG9iamVjdCB7ZXZlbnROYW1lOiBoYW5kbGVyfVxuICogQHBhcmFtIHtmdW5jdGlvbnxvYmplY3R9IFtoYW5kbGVyXSAtIGhhbmRsZXIgZnVuY3Rpb24gb3IgY29udGV4dFxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XSAtIGNvbnRleHQgZm9yIGJpbmRpbmdcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKGlzT2JqZWN0KGV2ZW50TmFtZSkpIHtcbiAgICAgICAgY29udGV4dCA9IGhhbmRsZXI7XG4gICAgICAgIGZvckVhY2goZXZlbnROYW1lLCBmdW5jdGlvbihmdW5jLCBuYW1lKSB7XG4gICAgICAgICAgICBzZWxmLm9uY2UobmFtZSwgZnVuYywgY29udGV4dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbmNlSGFuZGxlcigpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZXF1aXJlLWpzZG9jXG4gICAgICAgIGhhbmRsZXIuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgICAgc2VsZi5vZmYoZXZlbnROYW1lLCBvbmNlSGFuZGxlciwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgdGhpcy5vbihldmVudE5hbWUsIG9uY2VIYW5kbGVyLCBjb250ZXh0KTtcbn07XG5cbi8qKlxuICogU3BsaWNlIHN1cHBsaWVkIGFycmF5IGJ5IGNhbGxiYWNrIHJlc3VsdFxuICogQHBhcmFtIHthcnJheX0gYXJyIC0gYXJyYXkgdG8gc3BsaWNlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcmVkaWNhdGUgLSBmdW5jdGlvbiByZXR1cm4gYm9vbGVhblxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fc3BsaWNlTWF0Y2hlcyA9IGZ1bmN0aW9uKGFyciwgcHJlZGljYXRlKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW47XG5cbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShhcnJbaV0pID09PSB0cnVlKSB7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgbGVuIC09IDE7XG4gICAgICAgICAgICBpIC09IDE7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIEdldCBtYXRjaGVyIGZvciB1bmJpbmQgc3BlY2lmaWMgaGFuZGxlciBldmVudHNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IGhhbmRsZXIgbWF0Y2hlclxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fbWF0Y2hIYW5kbGVyID0gZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBuZWVkUmVtb3ZlID0gaGFuZGxlciA9PT0gaXRlbS5oYW5kbGVyO1xuXG4gICAgICAgIGlmIChuZWVkUmVtb3ZlKSB7XG4gICAgICAgICAgICBzZWxmLl9mb3JnZXRDb250ZXh0KGl0ZW0uY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmVlZFJlbW92ZTtcbiAgICB9O1xufTtcblxuLyoqXG4gKiBHZXQgbWF0Y2hlciBmb3IgdW5iaW5kIHNwZWNpZmljIGNvbnRleHQgZXZlbnRzXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIGNvbnRleHRcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gb2JqZWN0IG1hdGNoZXJcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX21hdGNoQ29udGV4dCA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgbmVlZFJlbW92ZSA9IGNvbnRleHQgPT09IGl0ZW0uY29udGV4dDtcblxuICAgICAgICBpZiAobmVlZFJlbW92ZSkge1xuICAgICAgICAgICAgc2VsZi5fZm9yZ2V0Q29udGV4dChpdGVtLmNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5lZWRSZW1vdmU7XG4gICAgfTtcbn07XG5cbi8qKlxuICogR2V0IG1hdGNoZXIgZm9yIHVuYmluZCBzcGVjaWZpYyBoYW5kZXIsIGNvbnRleHQgcGFpciBldmVudHNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIGNvbnRleHRcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gaGFuZGxlciwgY29udGV4dCBtYXRjaGVyXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9tYXRjaEhhbmRsZXJBbmRDb250ZXh0ID0gZnVuY3Rpb24oaGFuZGxlciwgY29udGV4dCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBtYXRjaEhhbmRsZXIgPSAoaGFuZGxlciA9PT0gaXRlbS5oYW5kbGVyKTtcbiAgICAgICAgdmFyIG1hdGNoQ29udGV4dCA9IChjb250ZXh0ID09PSBpdGVtLmNvbnRleHQpO1xuICAgICAgICB2YXIgbmVlZFJlbW92ZSA9IChtYXRjaEhhbmRsZXIgJiYgbWF0Y2hDb250ZXh0KTtcblxuICAgICAgICBpZiAobmVlZFJlbW92ZSkge1xuICAgICAgICAgICAgc2VsZi5fZm9yZ2V0Q29udGV4dChpdGVtLmNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5lZWRSZW1vdmU7XG4gICAgfTtcbn07XG5cbi8qKlxuICogVW5iaW5kIGV2ZW50IGJ5IGV2ZW50IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBjdXN0b20gZXZlbnQgbmFtZSB0byB1bmJpbmRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyXSAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX29mZkJ5RXZlbnROYW1lID0gZnVuY3Rpb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBhbmRCeUhhbmRsZXIgPSBpc0Z1bmN0aW9uKGhhbmRsZXIpO1xuICAgIHZhciBtYXRjaEhhbmRsZXIgPSBzZWxmLl9tYXRjaEhhbmRsZXIoaGFuZGxlcik7XG5cbiAgICBldmVudE5hbWUgPSBldmVudE5hbWUuc3BsaXQoUl9FVkVOVE5BTUVfU1BMSVQpO1xuXG4gICAgZm9yRWFjaChldmVudE5hbWUsIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJJdGVtcyA9IHNlbGYuX3NhZmVFdmVudChuYW1lKTtcblxuICAgICAgICBpZiAoYW5kQnlIYW5kbGVyKSB7XG4gICAgICAgICAgICBzZWxmLl9zcGxpY2VNYXRjaGVzKGhhbmRsZXJJdGVtcywgbWF0Y2hIYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvckVhY2goaGFuZGxlckl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fZm9yZ2V0Q29udGV4dChpdGVtLmNvbnRleHQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNlbGYuZXZlbnRzW25hbWVdID0gW107XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8qKlxuICogVW5iaW5kIGV2ZW50IGJ5IGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9vZmZCeUhhbmRsZXIgPSBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBtYXRjaEhhbmRsZXIgPSB0aGlzLl9tYXRjaEhhbmRsZXIoaGFuZGxlcik7XG5cbiAgICBmb3JFYWNoKHRoaXMuX3NhZmVFdmVudCgpLCBmdW5jdGlvbihoYW5kbGVySXRlbXMpIHtcbiAgICAgICAgc2VsZi5fc3BsaWNlTWF0Y2hlcyhoYW5kbGVySXRlbXMsIG1hdGNoSGFuZGxlcik7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFVuYmluZCBldmVudCBieSBvYmplY3QobmFtZTogaGFuZGxlciBwYWlyIG9iamVjdCBvciBjb250ZXh0IG9iamVjdClcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBjb250ZXh0IG9yIHtuYW1lOiBoYW5kbGVyfSBwYWlyIG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX29mZkJ5T2JqZWN0ID0gZnVuY3Rpb24ob2JqLCBoYW5kbGVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBtYXRjaEZ1bmM7XG5cbiAgICBpZiAodGhpcy5faW5kZXhPZkNvbnRleHQob2JqKSA8IDApIHtcbiAgICAgICAgZm9yRWFjaChvYmosIGZ1bmN0aW9uKGZ1bmMsIG5hbWUpIHtcbiAgICAgICAgICAgIHNlbGYub2ZmKG5hbWUsIGZ1bmMpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGhhbmRsZXIpKSB7XG4gICAgICAgIG1hdGNoRnVuYyA9IHRoaXMuX21hdGNoQ29udGV4dChvYmopO1xuXG4gICAgICAgIHNlbGYuX3NwbGljZU1hdGNoZXModGhpcy5fc2FmZUV2ZW50KGhhbmRsZXIpLCBtYXRjaEZ1bmMpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgICBtYXRjaEZ1bmMgPSB0aGlzLl9tYXRjaEhhbmRsZXJBbmRDb250ZXh0KGhhbmRsZXIsIG9iaik7XG5cbiAgICAgICAgZm9yRWFjaCh0aGlzLl9zYWZlRXZlbnQoKSwgZnVuY3Rpb24oaGFuZGxlckl0ZW1zKSB7XG4gICAgICAgICAgICBzZWxmLl9zcGxpY2VNYXRjaGVzKGhhbmRsZXJJdGVtcywgbWF0Y2hGdW5jKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWF0Y2hGdW5jID0gdGhpcy5fbWF0Y2hDb250ZXh0KG9iaik7XG5cbiAgICAgICAgZm9yRWFjaCh0aGlzLl9zYWZlRXZlbnQoKSwgZnVuY3Rpb24oaGFuZGxlckl0ZW1zKSB7XG4gICAgICAgICAgICBzZWxmLl9zcGxpY2VNYXRjaGVzKGhhbmRsZXJJdGVtcywgbWF0Y2hGdW5jKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBVbmJpbmQgY3VzdG9tIGV2ZW50c1xuICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdHxmdW5jdGlvbil9IGV2ZW50TmFtZSAtIGV2ZW50IG5hbWUgb3IgY29udGV4dCBvclxuICogIHtuYW1lOiBoYW5kbGVyfSBwYWlyIG9iamVjdCBvciBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcGFyYW0geyhmdW5jdGlvbil9IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAZXhhbXBsZVxuICogLy8tLSAjMS4gR2V0IE1vZHVsZSAtLS8vXG4gKiB2YXIgQ3VzdG9tRXZlbnRzID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9jdXN0b21FdmVudHMvY3VzdG9tRXZlbnRzJyk7IC8vIG5vZGUsIGNvbW1vbmpzXG4gKlxuICogLy8tLSAjMi4gVXNlIG1ldGhvZCAtLS8vXG4gKiAvLyAjIDIuMSBvZmYgYnkgZXZlbnQgbmFtZVxuICogQ3VzdG9tRXZlbnRzLm9mZignb25sb2FkJyk7XG4gKlxuICogLy8gIyAyLjIgb2ZmIGJ5IGV2ZW50IG5hbWUgYW5kIGhhbmRsZXJcbiAqIEN1c3RvbUV2ZW50cy5vZmYoJ3BsYXknLCBoYW5kbGVyKTtcbiAqXG4gKiAvLyAjIDIuMyBvZmYgYnkgaGFuZGxlclxuICogQ3VzdG9tRXZlbnRzLm9mZihoYW5kbGVyKTtcbiAqXG4gKiAvLyAjIDIuNCBvZmYgYnkgY29udGV4dFxuICogQ3VzdG9tRXZlbnRzLm9mZihteU9iaik7XG4gKlxuICogLy8gIyAyLjUgb2ZmIGJ5IGNvbnRleHQgYW5kIGhhbmRsZXJcbiAqIEN1c3RvbUV2ZW50cy5vZmYobXlPYmosIGhhbmRsZXIpO1xuICpcbiAqIC8vICMgMi42IG9mZiBieSBjb250ZXh0IGFuZCBldmVudCBuYW1lXG4gKiBDdXN0b21FdmVudHMub2ZmKG15T2JqLCAnb25sb2FkJyk7XG4gKlxuICogLy8gIyAyLjcgb2ZmIGJ5IGFuIE9iamVjdC48c3RyaW5nLCBmdW5jdGlvbj4gdGhhdCBpcyB7ZXZlbnROYW1lOiBoYW5kbGVyfVxuICogQ3VzdG9tRXZlbnRzLm9mZih7XG4gKiAgICdwbGF5JzogaGFuZGxlcixcbiAqICAgJ3BhdXNlJzogaGFuZGxlcjJcbiAqIH0pO1xuICpcbiAqIC8vICMgMi44IG9mZiB0aGUgYWxsIGV2ZW50c1xuICogQ3VzdG9tRXZlbnRzLm9mZigpO1xuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIGlmIChpc1N0cmluZyhldmVudE5hbWUpKSB7XG4gICAgICAgIC8vIFtzeW50YXggMSwgMl1cbiAgICAgICAgdGhpcy5fb2ZmQnlFdmVudE5hbWUoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9IGVsc2UgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIFtzeW50YXggOF1cbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihldmVudE5hbWUpKSB7XG4gICAgICAgIC8vIFtzeW50YXggM11cbiAgICAgICAgdGhpcy5fb2ZmQnlIYW5kbGVyKGV2ZW50TmFtZSk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChldmVudE5hbWUpKSB7XG4gICAgICAgIC8vIFtzeW50YXggNCwgNSwgNl1cbiAgICAgICAgdGhpcy5fb2ZmQnlPYmplY3QoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEZpcmUgY3VzdG9tIGV2ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gbmFtZSBvZiBjdXN0b20gZXZlbnRcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24oZXZlbnROYW1lKSB7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgdGhpcy5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogRmlyZSBhIGV2ZW50IGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2Ygb3BlcmF0aW9uICdib29sZWFuIEFORCcgd2l0aCBhbGxcbiAqICBsaXN0ZW5lcidzIHJlc3VsdHMuXG4gKlxuICogU28sIEl0IGlzIGRpZmZlcmVudCBmcm9tIHtAbGluayBDdXN0b21FdmVudHMjZmlyZX0uXG4gKlxuICogSW4gc2VydmljZSBjb2RlLCB1c2UgdGhpcyBhcyBhIGJlZm9yZSBldmVudCBpbiBjb21wb25lbnQgbGV2ZWwgdXN1YWxseVxuICogIGZvciBub3RpZnlpbmcgdGhhdCB0aGUgZXZlbnQgaXMgY2FuY2VsYWJsZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBDdXN0b20gZXZlbnQgbmFtZVxuICogQHBhcmFtIHsuLi4qfSBkYXRhIC0gRGF0YSBmb3IgZXZlbnRcbiAqIEByZXR1cm5zIHtib29sZWFufSBUaGUgcmVzdWx0IG9mIG9wZXJhdGlvbiAnYm9vbGVhbiBBTkQnXG4gKiBAZXhhbXBsZVxuICogdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAqIG1hcC5vbih7XG4gKiAgICAgJ2JlZm9yZVpvb20nOiBmdW5jdGlvbigpIHtcbiAqICAgICAgICAgLy8gSXQgc2hvdWxkIGNhbmNlbCB0aGUgJ3pvb20nIGV2ZW50IGJ5IHNvbWUgY29uZGl0aW9ucy5cbiAqICAgICAgICAgaWYgKHRoYXQuZGlzYWJsZWQgJiYgdGhpcy5nZXRTdGF0ZSgpKSB7XG4gKiAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gKiAgICAgICAgIH1cbiAqICAgICAgICAgcmV0dXJuIHRydWU7XG4gKiAgICAgfVxuICogfSk7XG4gKlxuICogaWYgKHRoaXMuaW52b2tlKCdiZWZvcmVab29tJykpIHsgICAgLy8gY2hlY2sgdGhlIHJlc3VsdCBvZiAnYmVmb3JlWm9vbSdcbiAqICAgICAvLyBpZiB0cnVlLFxuICogICAgIC8vIGRvU29tZXRoaW5nXG4gKiB9XG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgdmFyIGV2ZW50cywgYXJncywgaW5kZXgsIGl0ZW07XG5cbiAgICBpZiAoIXRoaXMuaGFzTGlzdGVuZXIoZXZlbnROYW1lKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBldmVudHMgPSB0aGlzLl9zYWZlRXZlbnQoZXZlbnROYW1lKTtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoZXZlbnRzW2luZGV4XSkge1xuICAgICAgICBpdGVtID0gZXZlbnRzW2luZGV4XTtcblxuICAgICAgICBpZiAoaXRlbS5oYW5kbGVyLmFwcGx5KGl0ZW0uY29udGV4dCwgYXJncykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gd2hldGhlciBhdCBsZWFzdCBvbmUgb2YgdGhlIGhhbmRsZXJzIGlzIHJlZ2lzdGVyZWQgaW4gdGhlIGdpdmVuXG4gKiAgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBDdXN0b20gZXZlbnQgbmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59IElzIHRoZXJlIGF0IGxlYXN0IG9uZSBoYW5kbGVyIGluIGV2ZW50IG5hbWU/XG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuaGFzTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0ZW5lckxlbmd0aChldmVudE5hbWUpID4gMDtcbn07XG5cbi8qKlxuICogUmV0dXJuIGEgY291bnQgb2YgZXZlbnRzIHJlZ2lzdGVyZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gQ3VzdG9tIGV2ZW50IG5hbWVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IG51bWJlciBvZiBldmVudFxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLmdldExpc3RlbmVyTGVuZ3RoID0gZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgdmFyIGV2ZW50cyA9IHRoaXMuX3NhZmVFdmVudChldmVudE5hbWUpO1xuXG4gICAgcmV0dXJuIGV2ZW50cy5sZW5ndGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUV2ZW50cztcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBHZXQgZXZlbnQgY29sbGVjdGlvbiBmb3Igc3BlY2lmaWMgSFRNTCBlbGVtZW50XG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFVkVOVF9LRVkgPSAnX2ZlRXZlbnRLZXknO1xuXG4vKipcbiAqIEdldCBldmVudCBjb2xsZWN0aW9uIGZvciBzcGVjaWZpYyBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgdHlwZVxuICogQHJldHVybnMge2FycmF5fVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2FmZUV2ZW50KGVsZW1lbnQsIHR5cGUpIHtcbiAgICB2YXIgZXZlbnRzID0gZWxlbWVudFtFVkVOVF9LRVldO1xuICAgIHZhciBoYW5kbGVycztcblxuICAgIGlmICghZXZlbnRzKSB7XG4gICAgICAgIGV2ZW50cyA9IGVsZW1lbnRbRVZFTlRfS0VZXSA9IHt9O1xuICAgIH1cblxuICAgIGhhbmRsZXJzID0gZXZlbnRzW3R5cGVdO1xuICAgIGlmICghaGFuZGxlcnMpIHtcbiAgICAgICAgaGFuZGxlcnMgPSBldmVudHNbdHlwZV0gPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlcnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2FmZUV2ZW50O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEdldCBhIHRhcmdldCBlbGVtZW50IGZyb20gYW4gZXZlbnQgb2JqZWN0LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEdldCBhIHRhcmdldCBlbGVtZW50IGZyb20gYW4gZXZlbnQgb2JqZWN0LlxuICogQHBhcmFtIHtFdmVudH0gZSAtIGV2ZW50IG9iamVjdFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIHRhcmdldCBlbGVtZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbUV2ZW50XG4gKi9cbmZ1bmN0aW9uIGdldFRhcmdldChlKSB7XG4gICAgcmV0dXJuIGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVW5iaW5kIERPTSBldmVudHNcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3RyaW5nID0gcmVxdWlyZSgnLi4vdHlwZS9pc1N0cmluZycpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL2ZvckVhY2gnKTtcblxudmFyIHNhZmVFdmVudCA9IHJlcXVpcmUoJy4vX3NhZmVFdmVudCcpO1xuXG4vKipcbiAqIFVuYmluZCBET00gZXZlbnRzXG4gKiBJZiBhIGhhbmRsZXIgZnVuY3Rpb24gaXMgbm90IHBhc3NlZCwgcmVtb3ZlIGFsbCBldmVudHMgb2YgdGhhdCB0eXBlLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgdG8gdW5iaW5kYmluZCBldmVudHNcbiAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3QpfSB0eXBlcyAtIFNwYWNlIHNwbGl0dGVkIGV2ZW50cyBuYW1lcyBvclxuICogIGV2ZW50TmFtZTpoYW5kbGVyIG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXJdIC0gaGFuZGxlciBmdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpkb21FdmVudFxuICovXG5mdW5jdGlvbiBvZmYoZWxlbWVudCwgdHlwZXMsIGhhbmRsZXIpIHtcbiAgICBpZiAoaXNTdHJpbmcodHlwZXMpKSB7XG4gICAgICAgIGZvckVhY2godHlwZXMuc3BsaXQoL1xccysvZyksIGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgICAgICAgIHVuYmluZEV2ZW50KGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yRWFjaCh0eXBlcywgZnVuY3Rpb24oZnVuYywgdHlwZSkge1xuICAgICAgICB1bmJpbmRFdmVudChlbGVtZW50LCB0eXBlLCBmdW5jKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBVbmJpbmQgRE9NIGV2ZW50c1xuICogSWYgYSBoYW5kbGVyIGZ1bmN0aW9uIGlzIG5vdCBwYXNzZWQsIHJlbW92ZSBhbGwgZXZlbnRzIG9mIHRoYXQgdHlwZS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IHRvIHVuYmluZCBldmVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gZXZlbnRzIG5hbWVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyXSAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHVuYmluZEV2ZW50KGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgZXZlbnRzID0gc2FmZUV2ZW50KGVsZW1lbnQsIHR5cGUpO1xuICAgIHZhciBpbmRleDtcblxuICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICBmb3JFYWNoKGV2ZW50cywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCB0eXBlLCBpdGVtLndyYXBwZWRIYW5kbGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50cy5zcGxpY2UoMCwgZXZlbnRzLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yRWFjaChldmVudHMsIGZ1bmN0aW9uKGl0ZW0sIGlkeCkge1xuICAgICAgICAgICAgaWYgKGhhbmRsZXIgPT09IGl0ZW0uaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaXRlbS53cmFwcGVkSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpZHg7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gQW4gZWxlbWVudCB0byByZW1vdmUgYW4gZXZlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgdHlwZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIGV2ZW50IGhhbmRsZXJcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xuICAgIGlmICgncmVtb3ZlRXZlbnRMaXN0ZW5lcicgaW4gZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcik7XG4gICAgfSBlbHNlIGlmICgnZGV0YWNoRXZlbnQnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5kZXRhY2hFdmVudCgnb24nICsgdHlwZSwgaGFuZGxlcik7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9mZjtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBCaW5kIERPTSBldmVudHNcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3RyaW5nID0gcmVxdWlyZSgnLi4vdHlwZS9pc1N0cmluZycpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL2ZvckVhY2gnKTtcblxudmFyIHNhZmVFdmVudCA9IHJlcXVpcmUoJy4vX3NhZmVFdmVudCcpO1xuXG4vKipcbiAqIEJpbmQgRE9NIGV2ZW50c1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZCBldmVudHNcbiAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3QpfSB0eXBlcyAtIFNwYWNlIHNwbGl0dGVkIGV2ZW50cyBuYW1lcyBvclxuICogIGV2ZW50TmFtZTpoYW5kbGVyIG9iamVjdFxuICogQHBhcmFtIHsoZnVuY3Rpb258b2JqZWN0KX0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb24gb3IgY29udGV4dCBmb3IgaGFuZGxlclxuICogIG1ldGhvZFxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XSBjb250ZXh0IC0gY29udGV4dCBmb3IgaGFuZGxlciBtZXRob2QuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbUV2ZW50XG4gKi9cbmZ1bmN0aW9uIG9uKGVsZW1lbnQsIHR5cGVzLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgaWYgKGlzU3RyaW5nKHR5cGVzKSkge1xuICAgICAgICBmb3JFYWNoKHR5cGVzLnNwbGl0KC9cXHMrL2cpLCBmdW5jdGlvbih0eXBlKSB7XG4gICAgICAgICAgICBiaW5kRXZlbnQoZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgY29udGV4dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3JFYWNoKHR5cGVzLCBmdW5jdGlvbihmdW5jLCB0eXBlKSB7XG4gICAgICAgIGJpbmRFdmVudChlbGVtZW50LCB0eXBlLCBmdW5jLCBoYW5kbGVyKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBCaW5kIERPTSBldmVudHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IHRvIGJpbmQgZXZlbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIGV2ZW50cyBuYW1lXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gaGFuZGxlciBmdW5jdGlvbiBvciBjb250ZXh0IGZvciBoYW5kbGVyXG4gKiAgbWV0aG9kXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdIGNvbnRleHQgLSBjb250ZXh0IGZvciBoYW5kbGVyIG1ldGhvZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGJpbmRFdmVudChlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBldmVudCBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBldmVudEhhbmRsZXIoZSkge1xuICAgICAgICBoYW5kbGVyLmNhbGwoY29udGV4dCB8fCBlbGVtZW50LCBlIHx8IHdpbmRvdy5ldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKCdhZGRFdmVudExpc3RlbmVyJyBpbiBlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBldmVudEhhbmRsZXIpO1xuICAgIH0gZWxzZSBpZiAoJ2F0dGFjaEV2ZW50JyBpbiBlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuICAgIG1lbW9yaXplSGFuZGxlcihlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBldmVudEhhbmRsZXIpO1xufVxuXG4vKipcbiAqIE1lbW9yaXplIERPTSBldmVudCBoYW5kbGVyIGZvciB1bmJpbmRpbmcuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kIGV2ZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBldmVudHMgbmFtZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb24gdGhhdCB1c2VyIHBhc3NlZCBhdCBvbigpIHVzZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlZEhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uIHRoYXQgd3JhcHBlZCBieSBkb21ldmVudCBmb3IgaW1wbGVtZW50aW5nIHNvbWUgZmVhdHVyZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1lbW9yaXplSGFuZGxlcihlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCB3cmFwcGVkSGFuZGxlcikge1xuICAgIHZhciBldmVudHMgPSBzYWZlRXZlbnQoZWxlbWVudCwgdHlwZSk7XG4gICAgdmFyIGV4aXN0SW5FdmVudHMgPSBmYWxzZTtcblxuICAgIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYW5kbGVyID09PSBoYW5kbGVyKSB7XG4gICAgICAgICAgICBleGlzdEluRXZlbnRzID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICBpZiAoIWV4aXN0SW5FdmVudHMpIHtcbiAgICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgICAgIHdyYXBwZWRIYW5kbGVyOiB3cmFwcGVkSGFuZGxlclxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb247XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgUHJldmVudCBkZWZhdWx0IGFjdGlvblxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFByZXZlbnQgZGVmYXVsdCBhY3Rpb25cbiAqIEBwYXJhbSB7RXZlbnR9IGUgLSBldmVudCBvYmplY3RcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZG9tRXZlbnRcbiAqL1xuZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByZXZlbnREZWZhdWx0O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFNldCBjbGFzc05hbWUgdmFsdWVcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi90eXBlL2lzQXJyYXknKTtcbnZhciBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL3R5cGUvaXNVbmRlZmluZWQnKTtcblxuLyoqXG4gKiBTZXQgY2xhc3NOYW1lIHZhbHVlXG4gKiBAcGFyYW0geyhIVE1MRWxlbWVudHxTVkdFbGVtZW50KX0gZWxlbWVudCAtIHRhcmdldCBlbGVtZW50XG4gKiBAcGFyYW0geyhzdHJpbmd8c3RyaW5nW10pfSBjc3NDbGFzcyAtIGNsYXNzIG5hbWVzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXRDbGFzc05hbWUoZWxlbWVudCwgY3NzQ2xhc3MpIHtcbiAgICBjc3NDbGFzcyA9IGlzQXJyYXkoY3NzQ2xhc3MpID8gY3NzQ2xhc3Muam9pbignICcpIDogY3NzQ2xhc3M7XG5cbiAgICBjc3NDbGFzcyA9IGNzc0NsYXNzLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG5cbiAgICBpZiAoaXNVbmRlZmluZWQoZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjc3NDbGFzcztcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCA9IGNzc0NsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENsYXNzTmFtZTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBBZGQgY3NzIGNsYXNzIHRvIGVsZW1lbnRcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL2ZvckVhY2gnKTtcbnZhciBpbkFycmF5ID0gcmVxdWlyZSgnLi4vYXJyYXkvaW5BcnJheScpO1xudmFyIGdldENsYXNzID0gcmVxdWlyZSgnLi9nZXRDbGFzcycpO1xudmFyIHNldENsYXNzTmFtZSA9IHJlcXVpcmUoJy4vX3NldENsYXNzTmFtZScpO1xuXG4vKipcbiAqIGRvbVV0aWwgbW9kdWxlXG4gKiBAbW9kdWxlIGRvbVV0aWxcbiAqL1xuXG4vKipcbiAqIEFkZCBjc3MgY2xhc3MgdG8gZWxlbWVudFxuICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8U1ZHRWxlbWVudCl9IGVsZW1lbnQgLSB0YXJnZXQgZWxlbWVudFxuICogQHBhcmFtIHsuLi5zdHJpbmd9IGNzc0NsYXNzIC0gY3NzIGNsYXNzZXMgdG8gYWRkXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbVV0aWxcbiAqL1xuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCkge1xuICAgIHZhciBjc3NDbGFzcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIHZhciBuZXdDbGFzcyA9IFtdO1xuICAgIHZhciBvcmlnaW47XG5cbiAgICBpZiAoY2xhc3NMaXN0KSB7XG4gICAgICAgIGZvckVhY2goY3NzQ2xhc3MsIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9yaWdpbiA9IGdldENsYXNzKGVsZW1lbnQpO1xuXG4gICAgaWYgKG9yaWdpbikge1xuICAgICAgICBjc3NDbGFzcyA9IFtdLmNvbmNhdChvcmlnaW4uc3BsaXQoL1xccysvKSwgY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGZvckVhY2goY3NzQ2xhc3MsIGZ1bmN0aW9uKGNscykge1xuICAgICAgICBpZiAoaW5BcnJheShjbHMsIG5ld0NsYXNzKSA8IDApIHtcbiAgICAgICAgICAgIG5ld0NsYXNzLnB1c2goY2xzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2V0Q2xhc3NOYW1lKGVsZW1lbnQsIG5ld0NsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRDbGFzcztcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBGaW5kIHBhcmVudCBlbGVtZW50IHJlY3Vyc2l2ZWx5XG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBtYXRjaGVzID0gcmVxdWlyZSgnLi9tYXRjaGVzJyk7XG5cbi8qKlxuICogRmluZCBwYXJlbnQgZWxlbWVudCByZWN1cnNpdmVseVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGJhc2UgZWxlbWVudCB0byBzdGFydCBmaW5kXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBzZWxlY3RvciBzdHJpbmcgZm9yIGZpbmRcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSBlbGVtZW50IGZpbmRlZCBvciBudWxsXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbVV0aWxcbiAqL1xuZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICBpZiAobWF0Y2hlcyhlbGVtZW50LCBzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgIGlmIChtYXRjaGVzKHBhcmVudCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBHZXQgSFRNTCBlbGVtZW50J3MgZGVzaWduIGNsYXNzZXMuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL3R5cGUvaXNVbmRlZmluZWQnKTtcblxuLyoqXG4gKiBHZXQgSFRNTCBlbGVtZW50J3MgZGVzaWduIGNsYXNzZXMuXG4gKiBAcGFyYW0geyhIVE1MRWxlbWVudHxTVkdFbGVtZW50KX0gZWxlbWVudCB0YXJnZXQgZWxlbWVudFxuICogQHJldHVybnMge3N0cmluZ30gZWxlbWVudCBjc3MgY2xhc3MgbmFtZVxuICogQG1lbWJlcm9mIG1vZHVsZTpkb21VdGlsXG4gKi9cbmZ1bmN0aW9uIGdldENsYXNzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQuY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAoaXNVbmRlZmluZWQoZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCkpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldENsYXNzO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoZWNrIGVsZW1lbnQgbWF0Y2ggc2VsZWN0b3JcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGluQXJyYXkgPSByZXF1aXJlKCcuLi9hcnJheS9pbkFycmF5Jyk7XG52YXIgdG9BcnJheSA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb24vdG9BcnJheScpO1xuXG52YXIgZWxQcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xudmFyIG1hdGNoU2VsZWN0b3IgPSBlbFByb3RvLm1hdGNoZXMgfHxcbiAgICBlbFByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgIGVsUHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgZWxQcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBkb2MgPSB0aGlzLmRvY3VtZW50IHx8IHRoaXMub3duZXJEb2N1bWVudDtcblxuICAgICAgICByZXR1cm4gaW5BcnJheSh0aGlzLCB0b0FycmF5KGRvYy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpID4gLTE7XG4gICAgfTtcblxuLyoqXG4gKiBDaGVjayBlbGVtZW50IG1hdGNoIHNlbGVjdG9yXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byBjaGVja1xuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gc2VsZWN0b3IgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSBpcyBzZWxlY3RvciBtYXRjaGVkIHRvIGVsZW1lbnQ/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbVV0aWxcbiAqL1xuZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBtYXRjaFNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGNoZXM7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgUmVtb3ZlIGNzcyBjbGFzcyBmcm9tIGVsZW1lbnRcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGZvckVhY2hBcnJheSA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb24vZm9yRWFjaEFycmF5Jyk7XG52YXIgaW5BcnJheSA9IHJlcXVpcmUoJy4uL2FycmF5L2luQXJyYXknKTtcbnZhciBnZXRDbGFzcyA9IHJlcXVpcmUoJy4vZ2V0Q2xhc3MnKTtcbnZhciBzZXRDbGFzc05hbWUgPSByZXF1aXJlKCcuL19zZXRDbGFzc05hbWUnKTtcblxuLyoqXG4gKiBSZW1vdmUgY3NzIGNsYXNzIGZyb20gZWxlbWVudFxuICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8U1ZHRWxlbWVudCl9IGVsZW1lbnQgLSB0YXJnZXQgZWxlbWVudFxuICogQHBhcmFtIHsuLi5zdHJpbmd9IGNzc0NsYXNzIC0gY3NzIGNsYXNzZXMgdG8gcmVtb3ZlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbVV0aWxcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCkge1xuICAgIHZhciBjc3NDbGFzcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIHZhciBvcmlnaW4sIG5ld0NsYXNzO1xuXG4gICAgaWYgKGNsYXNzTGlzdCkge1xuICAgICAgICBmb3JFYWNoQXJyYXkoY3NzQ2xhc3MsIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvcmlnaW4gPSBnZXRDbGFzcyhlbGVtZW50KS5zcGxpdCgvXFxzKy8pO1xuICAgIG5ld0NsYXNzID0gW107XG4gICAgZm9yRWFjaEFycmF5KG9yaWdpbiwgZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBpZiAoaW5BcnJheShuYW1lLCBjc3NDbGFzcykgPCAwKSB7XG4gICAgICAgICAgICBuZXdDbGFzcy5wdXNoKG5hbWUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBzZXRDbGFzc05hbWUoZWxlbWVudCwgbmV3Q2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbW92ZUNsYXNzO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFJlbW92ZSBlbGVtZW50IGZyb20gcGFyZW50IG5vZGUuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmVtb3ZlIGVsZW1lbnQgZnJvbSBwYXJlbnQgbm9kZS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IHRvIHJlbW92ZS5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZG9tVXRpbFxuICovXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZW1vdmVFbGVtZW50O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEV4dGVuZCB0aGUgdGFyZ2V0IG9iamVjdCBmcm9tIG90aGVyIG9iamVjdHMuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQG1vZHVsZSBvYmplY3RcbiAqL1xuXG4vKipcbiAqIEV4dGVuZCB0aGUgdGFyZ2V0IG9iamVjdCBmcm9tIG90aGVyIG9iamVjdHMuXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gT2JqZWN0IHRoYXQgd2lsbCBiZSBleHRlbmRlZFxuICogQHBhcmFtIHsuLi5vYmplY3R9IG9iamVjdHMgLSBPYmplY3RzIGFzIHNvdXJjZXNcbiAqIEByZXR1cm5zIHtvYmplY3R9IEV4dGVuZGVkIG9iamVjdFxuICogQG1lbWJlcm9mIG1vZHVsZTpvYmplY3RcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgb2JqZWN0cykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgIHZhciBzb3VyY2UsIHByb3AsIGksIGxlbjtcblxuICAgIGZvciAoaSA9IDEsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAocHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwoc291cmNlLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFJlcXVlc3QgaW1hZ2UgcGluZy5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGZvckVhY2hPd25Qcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoT3duUHJvcGVydGllcycpO1xuXG4vKipcbiAqIEBtb2R1bGUgcmVxdWVzdFxuICovXG5cbi8qKlxuICogUmVxdWVzdCBpbWFnZSBwaW5nLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCB1cmwgZm9yIHBpbmcgcmVxdWVzdFxuICogQHBhcmFtIHtPYmplY3R9IHRyYWNraW5nSW5mbyBpbmZvcyBmb3IgbWFrZSBxdWVyeSBzdHJpbmdcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6cmVxdWVzdFxuICogQGV4YW1wbGVcbiAqIHZhciBpbWFnZVBpbmcgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L3JlcXVlc3QvaW1hZ2VQaW5nJyk7IC8vIG5vZGUsIGNvbW1vbmpzXG4gKlxuICogaW1hZ2VQaW5nKCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9jb2xsZWN0Jywge1xuICogICAgIHY6IDEsXG4gKiAgICAgdDogJ2V2ZW50JyxcbiAqICAgICB0aWQ6ICd0cmFja2luZ2lkJyxcbiAqICAgICBjaWQ6ICdjaWQnLFxuICogICAgIGRwOiAnZHAnLFxuICogICAgIGRoOiAnZGgnXG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gaW1hZ2VQaW5nKHVybCwgdHJhY2tpbmdJbmZvKSB7XG4gICAgdmFyIHRyYWNraW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHZhciBxdWVyeVN0cmluZyA9ICcnO1xuICAgIGZvckVhY2hPd25Qcm9wZXJ0aWVzKHRyYWNraW5nSW5mbywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICBxdWVyeVN0cmluZyArPSAnJicgKyBrZXkgKyAnPScgKyB2YWx1ZTtcbiAgICB9KTtcbiAgICBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nLnN1YnN0cmluZygxKTtcblxuICAgIHRyYWNraW5nRWxlbWVudC5zcmMgPSB1cmwgKyAnPycgKyBxdWVyeVN0cmluZztcblxuICAgIHRyYWNraW5nRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodHJhY2tpbmdFbGVtZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRyYWNraW5nRWxlbWVudCk7XG5cbiAgICByZXR1cm4gdHJhY2tpbmdFbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGltYWdlUGluZztcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBTZW5kIGhvc3RuYW1lIG9uIERPTUNvbnRlbnRMb2FkZWQuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL3R5cGUvaXNVbmRlZmluZWQnKTtcbnZhciBpbWFnZVBpbmcgPSByZXF1aXJlKCcuL2ltYWdlUGluZycpO1xuXG52YXIgbXM3ZGF5cyA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBkYXRlIGhhcyBwYXNzZWQgNyBkYXlzXG4gKiBAcGFyYW0ge251bWJlcn0gZGF0ZSAtIG1pbGxpc2Vjb25kc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0V4cGlyZWQoZGF0ZSkge1xuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIHJldHVybiBub3cgLSBkYXRlID4gbXM3ZGF5cztcbn1cblxuLyoqXG4gKiBTZW5kIGhvc3RuYW1lIG9uIERPTUNvbnRlbnRMb2FkZWQuXG4gKiBUbyBwcmV2ZW50IGhvc3RuYW1lIHNldCB0dWkudXNhZ2VTdGF0aXN0aWNzIHRvIGZhbHNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcE5hbWUgLSBhcHBsaWNhdGlvbiBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gdHJhY2tpbmdJZCAtIEdBIHRyYWNraW5nIElEXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIHNlbmRIb3N0bmFtZShhcHBOYW1lLCB0cmFja2luZ0lkKSB7XG4gICAgdmFyIHVybCA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9jb2xsZWN0JztcbiAgICB2YXIgaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICB2YXIgaGl0VHlwZSA9ICdldmVudCc7XG4gICAgdmFyIGV2ZW50Q2F0ZWdvcnkgPSAndXNlJztcbiAgICB2YXIgYXBwbGljYXRpb25LZXlGb3JTdG9yYWdlID0gJ1RPQVNUIFVJICcgKyBhcHBOYW1lICsgJyBmb3IgJyArIGhvc3RuYW1lICsgJzogU3RhdGlzdGljcyc7XG4gICAgdmFyIGRhdGUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYXBwbGljYXRpb25LZXlGb3JTdG9yYWdlKTtcblxuICAgIC8vIHNraXAgaWYgdGhlIGZsYWcgaXMgZGVmaW5lZCBhbmQgaXMgc2V0IHRvIGZhbHNlIGV4cGxpY2l0bHlcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHdpbmRvdy50dWkpICYmIHdpbmRvdy50dWkudXNhZ2VTdGF0aXN0aWNzID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc2tpcCBpZiBub3QgcGFzcyBzZXZlbiBkYXlzIG9sZFxuICAgIGlmIChkYXRlICYmICFpc0V4cGlyZWQoZGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShhcHBsaWNhdGlvbktleUZvclN0b3JhZ2UsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgIGltYWdlUGluZyh1cmwsIHtcbiAgICAgICAgICAgICAgICB2OiAxLFxuICAgICAgICAgICAgICAgIHQ6IGhpdFR5cGUsXG4gICAgICAgICAgICAgICAgdGlkOiB0cmFja2luZ0lkLFxuICAgICAgICAgICAgICAgIGNpZDogaG9zdG5hbWUsXG4gICAgICAgICAgICAgICAgZHA6IGhvc3RuYW1lLFxuICAgICAgICAgICAgICAgIGRoOiBhcHBOYW1lLFxuICAgICAgICAgICAgICAgIGVsOiBhcHBOYW1lLFxuICAgICAgICAgICAgICAgIGVjOiBldmVudENhdGVnb3J5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIDEwMDApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbmRIb3N0bmFtZTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhbiBpbnN0YW5jZSBvZiBBcnJheSBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYW4gaW5zdGFuY2Ugb2YgQXJyYXkgb3Igbm90LlxuICogSWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGFuIGluc3RhbmNlIG9mIEFycmF5LCByZXR1cm4gdHJ1ZS5cbiAqIEBwYXJhbSB7Kn0gb2JqIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIGFycmF5IGluc3RhbmNlP1xuICogQG1lbWJlcm9mIG1vZHVsZTp0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBzdHJpbmcgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgYm9vbGVhbiBvciBub3QuXG4gKiAgSWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgYm9vbGVhbiwgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBib29sZWFuP1xuICogQG1lbWJlcm9mIG1vZHVsZTp0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzQm9vbGVhbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nIHx8IG9iaiBpbnN0YW5jZW9mIEJvb2xlYW47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCb29sZWFuO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGV4aXN0aW5nIG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnLi9pc1VuZGVmaW5lZCcpO1xudmFyIGlzTnVsbCA9IHJlcXVpcmUoJy4vaXNOdWxsJyk7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgZXhpc3Rpbmcgb3Igbm90LlxuICogSWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIG5vdCBudWxsIGFuZCBub3QgdW5kZWZpbmVkLCByZXR1cm5zIHRydWUuXG4gKiBAcGFyYW0geyp9IHBhcmFtIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIGV4aXN0eT9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICogQGV4YW1wbGVcbiAqIHZhciBpc0V4aXN0eSA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc0V4aXN0eScpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIGlzRXhpc3R5KCcnKTsgLy90cnVlXG4gKiBpc0V4aXN0eSgwKTsgLy90cnVlXG4gKiBpc0V4aXN0eShbXSk7IC8vdHJ1ZVxuICogaXNFeGlzdHkoe30pOyAvL3RydWVcbiAqIGlzRXhpc3R5KG51bGwpOyAvL2ZhbHNlXG4gKiBpc0V4aXN0eSh1bmRlZmluZWQpOyAvL2ZhbHNlXG4qL1xuZnVuY3Rpb24gaXNFeGlzdHkocGFyYW0pIHtcbiAgICByZXR1cm4gIWlzVW5kZWZpbmVkKHBhcmFtKSAmJiAhaXNOdWxsKHBhcmFtKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0V4aXN0eTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uIG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uIG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uLCByZXR1cm4gdHJ1ZS5cbiAqIEBwYXJhbSB7Kn0gb2JqIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIGZ1bmN0aW9uP1xuICogQG1lbWJlcm9mIG1vZHVsZTp0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBpbnN0YW5jZSBvZiBIVE1MTm9kZSBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBpbnN0YW5jZSBvZiBIVE1MTm9kZSBvciBub3QuXG4gKiBJZiB0aGUgZ2l2ZW4gdmFyaWFibGVzIGlzIGEgaW5zdGFuY2Ugb2YgSFRNTE5vZGUsIHJldHVybiB0cnVlLlxuICogQHBhcmFtIHsqfSBodG1sIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIEhUTUxOb2RlID9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc0hUTUxOb2RlKGh0bWwpIHtcbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gKGh0bWwgJiYgKGh0bWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCAhIWh0bWwubm9kZVR5cGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gISEoaHRtbCAmJiBodG1sLm5vZGVUeXBlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0hUTUxOb2RlO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIG51bGwgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIG51bGwgb3Igbm90LlxuICogSWYgdGhlIGdpdmVuIHZhcmlhYmxlKGFyZ3VtZW50c1swXSkgaXMgbnVsbCwgcmV0dXJucyB0cnVlLlxuICogQHBhcmFtIHsqfSBvYmogLSBUYXJnZXQgZm9yIGNoZWNraW5nXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gSXMgbnVsbD9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc051bGwob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc051bGw7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBudW1iZXIgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgbnVtYmVyIG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIG51bWJlciwgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBudW1iZXI/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdudW1iZXInIHx8IG9iaiBpbnN0YW5jZW9mIE51bWJlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc051bWJlcjtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhbiBvYmplY3Qgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGFuIG9iamVjdCBvciBub3QuXG4gKiBJZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYW4gb2JqZWN0LCByZXR1cm4gdHJ1ZS5cbiAqIEBwYXJhbSB7Kn0gb2JqIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIG9iamVjdD9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIHN0cmluZyBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBzdHJpbmcgb3Igbm90LlxuICogSWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgc3RyaW5nLCByZXR1cm4gdHJ1ZS5cbiAqIEBwYXJhbSB7Kn0gb2JqIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIHN0cmluZz9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgfHwgb2JqIGluc3RhbmNlb2YgU3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIHVuZGVmaW5lZCBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgdW5kZWZpbmVkIG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyB1bmRlZmluZWQsIHJldHVybnMgdHJ1ZS5cbiAqIEBwYXJhbSB7Kn0gb2JqIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIHVuZGVmaW5lZD9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZpbmVkXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNVbmRlZmluZWQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlIHN0YXRpYyB2YWx1ZXNcbiAqIEBhdXRob3IgTkhOLiBGRSBkZXYgdGVhbS48ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbmltcG9ydCBmb3JFYWNoT3duUHJvcGVydGllcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vZm9yRWFjaE93blByb3BlcnRpZXMnO1xuXG5jb25zdCBDU1NfUFJFRklYID0gJ3R1aS1zZWxlY3QtYm94JztcblxuY29uc3QgY2xhc3NOYW1lcyA9IHtcbiAgU0VMRUNUX0JPWDogJycsXG4gIElURU06ICdpdGVtJyxcbiAgSVRFTV9HUk9VUDogJ2l0ZW0tZ3JvdXAnLFxuICBJVEVNX0dST1VQX0xBQkVMOiAnaXRlbS1ncm91cC1sYWJlbCcsXG4gIERST1BET1dOOiAnZHJvcGRvd24nLFxuICBJTlBVVDogJ2lucHV0JyxcbiAgUExBQ0VIT0xERVI6ICdwbGFjZWhvbGRlcicsXG4gIElDT046ICdpY29uJyxcbiAgT1BFTjogJ29wZW4nLFxuICBISURERU46ICdoaWRkZW4nLFxuICBESVNBQkxFRDogJ2Rpc2FibGVkJyxcbiAgU0VMRUNURUQ6ICdzZWxlY3RlZCcsXG4gIEhJR0hMSUdIVDogJ2hpZ2hsaWdodCdcbn07XG5cbmV4cG9ydCBjb25zdCBjbHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZvckVhY2hPd25Qcm9wZXJ0aWVzKGNsYXNzTmFtZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjbGFzc05hbWVzW2tleV0gPSBgJHtDU1NfUFJFRklYfS0ke3ZhbHVlfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzTmFtZXNba2V5XSA9IENTU19QUkVGSVg7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2xhc3NOYW1lcztcbn0pKCk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgRHJvcGRvd25cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbmltcG9ydCBmb3JFYWNoQXJyYXkgZnJvbSAndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hBcnJheSc7XG5pbXBvcnQgaXNFeGlzdHkgZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzRXhpc3R5JztcbmltcG9ydCBpc051bWJlciBmcm9tICd0dWktY29kZS1zbmlwcGV0L3R5cGUvaXNOdW1iZXInO1xuaW1wb3J0IGFkZENsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9hZGRDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlQ2xhc3MgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL3JlbW92ZUNsYXNzJztcbmltcG9ydCByZW1vdmVFbGVtZW50IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVFbGVtZW50JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNscyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBJdGVtR3JvdXAgZnJvbSAnLi9pdGVtR3JvdXAnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9pdGVtJztcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gb3B0aW9uc1xuICogICBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucGxhY2Vob2xkZXJdIC0gcGxhY2Vob2xkZXIgZm9yIGFuIGlucHV0XG4gKiAgIEBwYXJhbSB7YXJyYXk8aXRlbURhdGF8aXRlbUdyb3VwRGF0YT59IG9wdGlvbnMuZGF0YSAtIGRhdGEgZm9yIEl0ZW1Hcm91cHMgYW5kIEl0ZW1zXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGlzYWJsZWQ9ZmFsc2VdIC0gd2hldGhlciBhIGRyb3Bkb3duIHNob3VsZCBiZSBkaXNhYmxlZCBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3Rvcih7IHBsYWNlaG9sZGVyLCBkYXRhLCBkaXNhYmxlZCA9IGZhbHNlIH0pIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmVsID0gY3JlYXRlRWxlbWVudCgndWwnLCAnJywgeyBjbGFzc05hbWU6IGAke2Nscy5EUk9QRE9XTn0gJHtjbHMuSElEREVOfWAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm5hdGl2ZUVsID0gY3JlYXRlRWxlbWVudCgnc2VsZWN0JywgJycsIHsgY2xhc3NOYW1lOiBjbHMuSElEREVOLCB0YWJJbmRleDogLTEgfSk7XG5cbiAgICAvKipcbiAgICAgKiBJdGVtcyBhbmQgSXRlbUdyb3Vwc1xuICAgICAqIEB0eXBlIHtBcnJheS48SXRlbXxJdGVtR3JvdXA+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogdGhlIG51bWJlciBvZiBJdGVtXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXRlbUxlbmd0aCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SXRlbX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtJdGVtfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5oaWdobGlnaHRlZEl0ZW0gPSBudWxsO1xuXG4gICAgdGhpcy5pbml0aWFsaXplKGRhdGEsIGRpc2FibGVkLCBwbGFjZWhvbGRlcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIEl0ZW1zIGFuZCBJdGVtR3JvdXBzIGFuZCBjYWxjdWxhdGUgdGhlIG51bWJlciBvZiBJdGVtc1xuICAgKiBAcmV0dXJuIHthcnJheTxJdGVtfEl0ZW1Hcm91cD59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0aWFsaXplSXRlbXMoZGF0YSkge1xuICAgIGxldCBpdGVtO1xuICAgIGxldCBpdGVtSW5kZXggPSAwO1xuICAgIGxldCBpdGVtR3JvdXBJbmRleCA9IDA7XG4gICAgZGF0YS5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgIGlmIChkYXR1bS5kYXRhKSB7XG4gICAgICAgIGl0ZW0gPSBuZXcgSXRlbUdyb3VwKHsgaW5kZXg6IGl0ZW1JbmRleCwgaXRlbUdyb3VwSW5kZXgsIC4uLmRhdHVtIH0pO1xuICAgICAgICBpdGVtSW5kZXggKz0gZGF0dW0uZGF0YS5sZW5ndGggLSAxO1xuICAgICAgICBpdGVtR3JvdXBJbmRleCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbSA9IG5ldyBJdGVtKHsgaW5kZXg6IGl0ZW1JbmRleCwgLi4uZGF0dW0gfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgIGl0ZW0uYXBwZW5kVG9Db250YWluZXIodGhpcy5lbCwgdGhpcy5uYXRpdmVFbCk7XG4gICAgICBpdGVtSW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXRlbUxlbmd0aCA9IGl0ZW1JbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0aWFsaXplKGRhdGEsIGRpc2FibGVkLCBwbGFjZWhvbGRlcikge1xuICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgJycsIHsgbGFiZWw6IHBsYWNlaG9sZGVyLCB2YWx1ZTogJycgfSwgdGhpcy5uYXRpdmVFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsaXplSXRlbXMoZGF0YSk7XG5cbiAgICB0aGlzLml0ZXJhdGVJdGVtcyhpdGVtID0+IHtcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW0gJiYgaXRlbS5pc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAmJiBpdGVtLmlzU2VsZWN0ZWQoKSkge1xuICAgICAgICBpdGVtLmRlc2VsZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIGEgZnVuY3Rpb24gd2hpbGUgaXRlcmF0aW5nIGl0ZW1zXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gZnVuY3Rpb24gdG8gZXhlY3V0ZVxuICAgKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3MgLSBhcmd1bWVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGl0ZXJhdGVJdGVtcyhjYWxsYmFjaywgLi4uYXJncykge1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBmb3JFYWNoQXJyYXkodGhpcy5pdGVtcywgaXRlbSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgSXRlbUdyb3VwKSB7XG4gICAgICAgIGZvckVhY2hBcnJheShpdGVtLmdldEl0ZW1zKCksIGl0ZW1Jbkdyb3VwID0+IHtcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjay5hcHBseSh0aGlzLCBbaXRlbUluR3JvdXAsIGluZGV4LCAuLi5hcmdzXSkgfHwgZmFsc2U7XG4gICAgICAgICAgaW5kZXggKz0gMTtcblxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KHRoaXMsIFtpdGVtLCBpbmRleCwgLi4uYXJnc10pO1xuICAgICAgaW5kZXggKz0gMTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGEgZHJvcGRvd24gbGlzdFxuICAgKi9cbiAgb3BlbigpIHtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBjbHMuSElEREVOKTtcbiAgICBjb25zdCBoaWdobGlnaHRlZEl0ZW0gPVxuICAgICAgIXRoaXMuc2VsZWN0ZWRJdGVtIHx8IHRoaXMuc2VsZWN0ZWRJdGVtLmlzRGlzYWJsZWQoKVxuICAgICAgICA/IHRoaXMuZ2V0SXRlbXMoaXRlbSA9PiAhaXRlbS5pc0Rpc2FibGVkKCkpWzBdXG4gICAgICAgIDogdGhpcy5zZWxlY3RlZEl0ZW07XG4gICAgdGhpcy5oaWdobGlnaHQoaGlnaGxpZ2h0ZWRJdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhIGRyb3Bkb3duIGxpc3RcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGFkZENsYXNzKHRoaXMuZWwsIGNscy5ISURERU4pO1xuICAgIHRoaXMuZGVoaWdobGlnaHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFuIGRyb3Bkb3duXG4gICAqL1xuICBkaXNhYmxlKCkge1xuICAgIHRoaXMubmF0aXZlRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGFkZENsYXNzKHRoaXMuZWwsIGNscy5ESVNBQkxFRCk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGFuIGRyb3Bkb3duXG4gICAqL1xuICBlbmFibGUoKSB7XG4gICAgdGhpcy5uYXRpdmVFbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIGNscy5ESVNBQkxFRCk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGFuIEl0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfEl0ZW19IHZhbHVlIC0gaWYgc3RyaW5nLCBmaW5kIGFuIEl0ZW0gYnkgaXRzIHZhbHVlLiBpZiBudW1iZXIsIGZpbmQgYW4gSXRlbSBieSBpdHMgaW5kZXguXG4gICAqIEByZXR1cm4ge0l0ZW19IHJlc3VsdCBvZiBzZWxlY3Rpb25cbiAgICovXG4gIHNlbGVjdCh2YWx1ZSkge1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHZhbHVlIGluc3RhbmNlb2YgSXRlbSA/IHZhbHVlIDogdGhpcy5nZXRJdGVtKHZhbHVlKTtcbiAgICB0aGlzLmRlc2VsZWN0KCk7XG5cbiAgICBpZiAoIXNlbGVjdGVkSXRlbSB8fCAoc2VsZWN0ZWRJdGVtICYmIHNlbGVjdGVkSXRlbS5pc0Rpc2FibGVkKCkpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzZWxlY3RlZEl0ZW0uc2VsZWN0KCk7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBzZWxlY3RlZEl0ZW07XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRJdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VsZWN0IGFuIEl0ZW1cbiAgICovXG4gIGRlc2VsZWN0KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uZGVzZWxlY3QoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlnaGxpZ2h0IGFuIEl0ZW1cbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfEl0ZW19IHZhbHVlIC0gaWYgc3RyaW5nLCBmaW5kIGFuIEl0ZW0gYnkgaXRzIHZhbHVlLiBpZiBudW1iZXIsIGZpbmQgYW4gSXRlbSBieSBpdHMgaW5kZXguXG4gICAqL1xuICBoaWdobGlnaHQodmFsdWUpIHtcbiAgICBsZXQgaGlnaGxpZ2h0ZWRJdGVtO1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEl0ZW0pIHtcbiAgICAgIGhpZ2hsaWdodGVkSXRlbSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoaXNFeGlzdHkodmFsdWUpKSB7XG4gICAgICBoaWdobGlnaHRlZEl0ZW0gPSB0aGlzLmdldEl0ZW0odmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChoaWdobGlnaHRlZEl0ZW0gJiYgaGlnaGxpZ2h0ZWRJdGVtICE9PSB0aGlzLmhpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgdGhpcy5kZWhpZ2hsaWdodCgpO1xuICAgICAgaGlnaGxpZ2h0ZWRJdGVtLmhpZ2hsaWdodCgpO1xuICAgICAgdGhpcy5oaWdobGlnaHRlZEl0ZW0gPSBoaWdobGlnaHRlZEl0ZW07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlaGlnaGxpZ2h0IGFuIEl0ZW1cbiAgICovXG4gIGRlaGlnaGxpZ2h0KCkge1xuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgdGhpcy5oaWdobGlnaHRlZEl0ZW0uZGVoaWdobGlnaHQoKTtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBhIGhpZ2hsaWdodGVkIEl0ZW1cbiAgICogQHBhcmFtIHtudW1iZXJ9IGRpcmVjdGlvbiAtIGRpcmVjdGlvbiB0byBtb3ZlXG4gICAqL1xuICBtb3ZlSGlnaGxpZ2h0ZWRJdGVtKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IGhpZ2hsaWdodGVkSXRlbSA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJdGVtKCk7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IGl0ZW1zO1xuXG4gICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihoaWdobGlnaHRlZEl0ZW0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KGluZGV4LCBsZW5ndGgsIGRpcmVjdGlvbik7XG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBpZiAoIWl0ZW1zW2luZGV4XS5pc0Rpc2FibGVkKCkpIHtcbiAgICAgICAgICB0aGlzLmhpZ2hsaWdodChpdGVtc1tpbmRleF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChpbmRleCwgbGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEl0ZW1JbmRleChpbmRleCwgbGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICByZXR1cm4gKGluZGV4ICsgZGlyZWN0aW9uICsgbGVuZ3RoKSAlIGxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIEl0ZW1zIHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAgICogSWYgZmlsdGVyIGZ1bmN0aW9uIGlzIG5vdCBwYXNzZWQsIGl0IHJldHVybnMgYWxsIEl0ZW1zXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZmlsdGVyIGl0ZW1zXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIGZpbmQuIC0xIG1lYW5zIGFsbCBpdGVtcy5cbiAgICogQHJldHVybiB7YXJyYXk8SXRlbT59XG4gICAqL1xuICBnZXRJdGVtcyhjYWxsYmFjayA9ICgpID0+IHRydWUsIG51bWJlciA9IC0xKSB7XG4gICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICB0aGlzLml0ZXJhdGVJdGVtcyhpdGVtID0+IHtcbiAgICAgIGlmIChjYWxsYmFjayhpdGVtKSkge1xuICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICBudW1iZXIgLT0gMTtcblxuICAgICAgICByZXR1cm4gbnVtYmVyICE9PSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gSXRlbSBieSBpdHMgaW5kZXggb3IgdmFsdWVcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZSAtIGlmIHN0cmluZywgdGhlIEl0ZW0ncyB2YWx1ZS4gaWYgbnVtYmVyLCB0aGUgSXRlbSdzIGluZGV4LlxuICAgKiBAcmV0dXJuIHtJdGVtfVxuICAgKi9cbiAgZ2V0SXRlbSh2YWx1ZSkge1xuICAgIGNvbnN0IGlzVmFsaWRJdGVtID0gaXNOdW1iZXIodmFsdWUpXG4gICAgICA/IGNvbXBhcmVkSXRlbSA9PiBjb21wYXJlZEl0ZW0uZ2V0SW5kZXgoKSA9PT0gdmFsdWVcbiAgICAgIDogY29tcGFyZWRJdGVtID0+IGNvbXBhcmVkSXRlbS5nZXRWYWx1ZSgpID09PSB2YWx1ZTtcblxuICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKGlzVmFsaWRJdGVtLCAxKVswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIEl0ZW1Hcm91cHMgdGhhdCBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICAgKiBJZiBmaWx0ZXIgZnVuY3Rpb24gaXMgbm90IHBhc3NlZCwgaXQgcmV0dXJucyBhbGwgSXRlbUdyb3Vwc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGZpbHRlciBpdGVtIGdyb3Vwc1xuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gdGhlIG51bWJlciBvZiBpdGVtIGdyb3VwcyB0byBmaW5kLiAtMSBtZWFucyBhbGwgaXRlbSBncm91cHMuXG4gICAqIEByZXR1cm4ge2FycmF5PEl0ZW1Hcm91cD59XG4gICAqL1xuICBnZXRJdGVtR3JvdXBzKGNhbGxiYWNrID0gKCkgPT4gdHJ1ZSwgbnVtYmVyID0gLTEpIHtcbiAgICBjb25zdCBpdGVtR3JvdXBzID0gW107XG4gICAgZm9yRWFjaEFycmF5KHRoaXMuaXRlbXMsIGl0ZW1Hcm91cCA9PiB7XG4gICAgICBpZiAoaXRlbUdyb3VwIGluc3RhbmNlb2YgSXRlbUdyb3VwICYmIGNhbGxiYWNrKGl0ZW1Hcm91cCkpIHtcbiAgICAgICAgaXRlbUdyb3Vwcy5wdXNoKGl0ZW1Hcm91cCk7XG4gICAgICAgIG51bWJlciAtPSAxO1xuXG4gICAgICAgIHJldHVybiBudW1iZXIgIT09IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGl0ZW1Hcm91cHM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIEl0ZW1Hcm91cCBieSBpdHMgaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gZ3JvdXBJbmRleCBvZiB0aGUgSXRlbUdyb3VwXG4gICAqIEByZXR1cm4ge0l0ZW1Hcm91cH1cbiAgICovXG4gIGdldEl0ZW1Hcm91cChpbmRleCkge1xuICAgIHJldHVybiB0aGlzLmdldEl0ZW1Hcm91cHMoaXRlbUdyb3VwID0+IGl0ZW1Hcm91cC5nZXRJbmRleCgpID09PSBpbmRleCwgMSlbMF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBudW1iZXIgb2YgSXRlbXNcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0SXRlbUxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtTGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgc2VsZWN0ZWQgSXRlbVxuICAgKiBAcmV0dXJuIHtJdGVtfVxuICAgKi9cbiAgZ2V0U2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGhpZ2hsaWdodGVkIEl0ZW1cbiAgICogQHJldHVybiB7SXRlbX1cbiAgICovXG4gIGdldEhpZ2hsaWdodGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRlZEl0ZW07XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBlbGVtZW50IGFuZCBuYXRpdmUgZWxlbWVudCB0byB0aGUgY29udGFpbmVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIGNvbnRhaW5lciBlbGVtZW50XG4gICAqL1xuICBhcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubmF0aXZlRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3RvcnkgYSBkcm9wZG93blxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmRlc3Ryb3koKSk7XG4gICAgcmVtb3ZlRWxlbWVudCh0aGlzLmVsKTtcbiAgICByZW1vdmVFbGVtZW50KHRoaXMubmF0aXZlRWwpO1xuICAgIHRoaXMuZWwgPSB0aGlzLm5hdGl2ZUVsID0gdGhpcy5pdGVtcyA9IHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5oaWdobGlnaHRlZEl0ZW0gPSBudWxsO1xuICB9XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbmltcG9ydCBTZWxlY3RCb3ggZnJvbSAnLi9zZWxlY3RCb3gnO1xuaW1wb3J0ICcuLi9jc3Mvc2VsZWN0Qm94LmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEJveDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBJbnB1dFxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuaW1wb3J0IGFkZENsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9hZGRDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlQ2xhc3MgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL3JlbW92ZUNsYXNzJztcbmltcG9ydCByZW1vdmVFbGVtZW50IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVFbGVtZW50JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNscyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gb3B0aW9uc1xuICogICBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucGxhY2Vob2xkZXJdIC0gcGxhY2Vob2xkZXIgZm9yIGEgc2VsZWN0IGJveFxuICogICBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGlzYWJsZWRdIC0gd2hldGhlciBhbiBpbnB1dCBzaG91bGQgYmUgZGlzYWJsZWQgb3Igbm90XG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuc2hvd0ljb25dIC0gd2hldGhlciBhbiBhcnJvdyBpY29uIGluIHRoZSBpbnB1dCBzaG91bGQgYmUgc2hvd25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xuICBjb25zdHJ1Y3Rvcih7IHBsYWNlaG9sZGVyLCBkaXNhYmxlZCwgc2hvd0ljb24gfSkge1xuICAgIC8qKlxuICAgICAqIHRleHQgZm9yIGEgcGxhY2Vob2xkZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wbGFjZWhvbGRlclRleHQgPSBwbGFjZWhvbGRlcjtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgeyBjbGFzc05hbWU6IGNscy5JTlBVVCwgdGFiSW5kZXg6IDAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBsYWNlaG9sZGVyRWwgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAgdGhpcy5wbGFjZWhvbGRlclRleHQsXG4gICAgICB7IGNsYXNzTmFtZTogY2xzLlBMQUNFSE9MREVSIH0sXG4gICAgICB0aGlzLmVsXG4gICAgKTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZShkaXNhYmxlZCwgc2hvd0ljb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXRpYWxpemUoZGlzYWJsZWQsIHNob3dJY29uKSB7XG4gICAgaWYgKHNob3dJY29uKSB7XG4gICAgICBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ3NlbGVjdCcsIHsgY2xhc3NOYW1lOiBjbHMuSUNPTiB9LCB0aGlzLmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlckVsLndpZHRoID0gJzEwMCUnO1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYW4gaW5wdXRcbiAgICovXG4gIGRpc2FibGUoKSB7XG4gICAgYWRkQ2xhc3ModGhpcy5lbCwgY2xzLkRJU0FCTEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYW4gaW5wdXRcbiAgICovXG4gIGVuYWJsZSgpIHtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBjbHMuRElTQUJMRUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gYW4gaW5wdXRcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgYWRkQ2xhc3ModGhpcy5lbCwgY2xzLk9QRU4pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIGFuIGlucHV0XG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBjbHMuT1BFTik7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNcbiAgICovXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIHRleHQgaW4gdGhlIHBsYWNlaG9sZGVyXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbSAtIHNlbGVjdGVkIEl0ZW1cbiAgICovXG4gIGNoYW5nZVRleHQoaXRlbSkge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyRWwuaW5uZXJUZXh0ID0gaXRlbS5nZXRMYWJlbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyRWwuaW5uZXJUZXh0ID0gdGhpcy5wbGFjZWhvbGRlclRleHQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgZWxlbWVudCB0byB0aGUgY29udGFpbmVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIGNvbnRhaW5lciBlbGVtZW50XG4gICAqL1xuICBhcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSBhbiBpbnB1dFxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICByZW1vdmVFbGVtZW50KHRoaXMuZWwpO1xuICAgIHRoaXMuZWwgPSB0aGlzLnBsYWNlaG9sZGVyRWwgPSBudWxsO1xuICB9XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgSXRlbVxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuaW1wb3J0IGFkZENsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9hZGRDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlQ2xhc3MgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL3JlbW92ZUNsYXNzJztcbmltcG9ydCByZW1vdmVFbGVtZW50IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVFbGVtZW50JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNscyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBkZXNjcmlwdGlvblxuICogQW4gaXRlbS5cbiAqIFlvdSBjYW4gZ2V0IEl0ZW0gYnkge0BsaW5rIFNlbGVjdEJveCNnZXRJdGVtIFNlbGVjdEJveC5nZXRJdGVtKCl9IGFuZCB7QGxpbmsgU2VsZWN0Qm94I2dldEl0ZW1zIFNlbGVjdEJveC5nZXRJdGVtcygpfS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XG4gIC8qKlxuICAgKiBAaGlkZWNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gb3B0aW9uc1xuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sYWJlbF0gLSBsYWJlbCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRyb3AtZG93biBsaXN0XG4gICAqICAgQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudmFsdWUgLSB2YWx1ZSBvZiBhbiBpdGVtXG4gICAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kaXNhYmxlZD1mYWxzZV0gLSB3aGV0aGVyIGFuIEl0ZW0gc2hvdWxkIGJlIGRpc2FibGVkIG9yIG5vdFxuICAgKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuc2VsZWN0ZWQ9ZmFsc2VdIC0gd2hldGhlciBhbiBJdGVtIHNob3VsZCBiZSBwcmUtc2VsZWN0ZWQgb3Igbm90XG4gICAqICAgQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuaW5kZXggLSBJdGVtJ3MgaW5kZXhcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmFsdWUsIGxhYmVsLCBkaXNhYmxlZCwgc2VsZWN0ZWQsIGluZGV4IH0pIHtcbiAgICAvKipcbiAgICAgKiB2YWx1ZSBvZiBhbiBpdGVtXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsdWUgPSBgJHt2YWx1ZX1gO1xuXG4gICAgLyoqXG4gICAgICogbGFiZWwgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkcm9wLWRvd24gbGlzdFxuICAgICAqIGlmIGxhYmVsIGlzIGFuIGVtcHR5IHN0cmluZywgaXQgc2hvdWxkIGJlIHNhbWUgYXMgaXRzIHZhbHVlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbCB8fCB0aGlzLnZhbHVlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcblxuICAgIC8qKlxuICAgICAqIHdoZXRoZXIgYW4gSXRlbUdyb3VwIG9mIHRoZSBJdGVtIGlzIGRpc2FibGVkIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pdGVtR3JvdXBEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogd2hldGhlciBhbiBJdGVtIGlzIGRpc2FibGVkIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pdGVtRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogPGxpPiBlbGVtZW50IGZvciBhIGN1c3RvbSBkcm9wZG93biBpdGVtXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5lbCA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgdGhpcy5sYWJlbCwge1xuICAgICAgY2xhc3NOYW1lOiBjbHMuSVRFTSxcbiAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICdkYXRhLXZhbHVlJzogdGhpcy52YWx1ZSxcbiAgICAgICdkYXRhLWluZGV4JzogdGhpcy5pbmRleFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogPG9wdGlvbj4gZWxlbWVudCBmb3IgYSBzZWxlY3QgZWxlbWVudFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubmF0aXZlRWwgPSBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCAnJywge1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbFxuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0aWFsaXplKGRpc2FibGVkLCBzZWxlY3RlZCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZShkaXNhYmxlZCwgc2VsZWN0ZWQpIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBJdGVtIGRpc2FibGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG1ha2VEaXNhYmxlKCkge1xuICAgIHRoaXMubmF0aXZlRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGFkZENsYXNzKHRoaXMuZWwsIGNscy5ESVNBQkxFRCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBJdGVtIGVuYWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgbWFrZUVuYWJsZSgpIHtcbiAgICB0aGlzLm5hdGl2ZUVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLkRJU0FCTEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFuIEl0ZW0gZHVlIHRvIGFuIEl0ZW1Hcm91cFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBkaXNhYmxlSXRlbUdyb3VwKCkge1xuICAgIHRoaXMuaXRlbUdyb3VwRGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubWFrZURpc2FibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYW4gSXRlbSBkdWUgdG8gYW4gSXRlbUdyb3VwXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGVuYWJsZUl0ZW1Hcm91cCgpIHtcbiAgICB0aGlzLml0ZW1Hcm91cERpc2FibGVkID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgdGhpcy5tYWtlRW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYW4gSXRlbVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuaXRlbURpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLm1ha2VEaXNhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGFuIEl0ZW1cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuaXRlbURpc2FibGVkID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgdGhpcy5tYWtlRW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhbiBJdGVtXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCgpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5uYXRpdmVFbC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsLCBjbHMuU0VMRUNURUQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlbGVjdCBhbiBJdGVtXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm5hdGl2ZUVsLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLlNFTEVDVEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWdobGlnaHQgYW4gSXRlbVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBoaWdobGlnaHQoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgY2xzLkhJR0hMSUdIVCk7XG4gICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGhpZ2hsaWdodCBmcm9tIGFuIEl0ZW1cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZGVoaWdobGlnaHQoKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLkhJR0hMSUdIVCk7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGl0ZW0ncyB2YWx1ZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGl0ZW0ncyBsYWJlbC5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGl0ZW0ncyBpbmRleC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgYW4gaXRlbSBpcyBzZWxlY3RlZCBvciBub3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc1NlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIGFuIGl0ZW0gaXMgZGlzYWJsZWQgb3Igbm90LlxuICAgKiBUaGUgcmVzdWx0IGlzIHRydWUgaWYgYW55IG9mIHRoZSBpdGVtcyBhbmQgaXRlbSBncm91cHMgYXJlIGRpc2FibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtRGlzYWJsZWQgfHwgdGhpcy5pdGVtR3JvdXBEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmQgdGhlIGVsZW1lbnQgYW5kIG5hdGl2ZSBlbGVtZW50IHRvIHRoZSBjb250YWluZXJzXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIGNvbnRhaW5lciBlbGVtZW50XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5hdGl2ZUNvbnRhaW5lciAtIG5hdGl2ZSBjb250YWluZXIgZWxlbWVudFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBhcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIsIG5hdGl2ZUNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICBuYXRpdmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5uYXRpdmVFbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSBhbiBJdGVtXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgcmVtb3ZlRWxlbWVudCh0aGlzLmVsKTtcbiAgICByZW1vdmVFbGVtZW50KHRoaXMubmF0aXZlRWwpO1xuICAgIHRoaXMuZWwgPSB0aGlzLm5hdGl2ZUVsID0gbnVsbDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEl0ZW1Hcm91cFxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuaW1wb3J0IGFkZENsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9hZGRDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlQ2xhc3MgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL3JlbW92ZUNsYXNzJztcbmltcG9ydCByZW1vdmVFbGVtZW50IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVFbGVtZW50JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNscyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgZ3JvdXAgb2YgaXRlbXMuXG4gKiBZb3UgY2FuIGdldCBJdGVtR3JvdXAgYnkge0BsaW5rIFNlbGVjdEJveCNnZXRJdGVtR3JvdXAgU2VsZWN0Qm94LmdldEl0ZW1Hcm91cCgpfSBhbmQge0BsaW5rIFNlbGVjdEJveCNnZXRJdGVtR3JvdXBzIFNlbGVjdEJveC5nZXRJdGVtR3JvdXBzKCl9LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtR3JvdXAge1xuICAvKipcbiAgICogQGhpZGVjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnNcbiAgICogICBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubGFiZWxdIC0gbGFiZWwgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkcm9wZG93biBsaXN0XG4gICAqICAgQHBhcmFtIHthcnJheTxpdGVtRGF0YT59IG9wdGlvbnMuZGF0YSAtIGRhdGEgZm9yIEl0ZW1zIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBJdGVtR3JvdXBcbiAgICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRpc2FibGVkPWZhbHNlXSAtIHdoZXRoZXIgYW4gSXRlbUdyb3VwIHNob3VsZCBiZSBkaXNhYmxlZCBvciBub3RcbiAgICogICBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5pbmRleCAtIGluZGV4IG9mIHRoZSBmaXJzdCBJdGVtIGluIHRoZSBJdGVtR3JvdXBcbiAgICogICBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5pdGVtR3JvdXBJbmRleCAtIGluZGV4IG9mIHRoZSBJdGVtR3JvdXBcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgbGFiZWwgPSAnJywgZGF0YSwgZGlzYWJsZWQgPSBmYWxzZSwgaW5kZXgsIGl0ZW1Hcm91cEluZGV4IH0pIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmVsID0gY3JlYXRlRWxlbWVudCgnbGknLCAnJywgeyAnZGF0YS1ncm91cC1pbmRleCc6IGl0ZW1Hcm91cEluZGV4IH0pO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5sYWJlbEVsID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIGxhYmVsLCB7IGNsYXNzTmFtZTogY2xzLklURU1fR1JPVVBfTEFCRUwgfSwgdGhpcy5lbCk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLml0ZW1Db250YWluZXJFbCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgJycsIHsgY2xhc3NOYW1lOiBjbHMuSVRFTV9HUk9VUCB9LCB0aGlzLmVsKTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubmF0aXZlRWwgPSBjcmVhdGVFbGVtZW50KCdvcHRncm91cCcsIGxhYmVsKTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHthcnJheTxJdGVtPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLmNyZWF0ZUl0ZW1zKGRhdGEsIGluZGV4KTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluZGV4ID0gaXRlbUdyb3VwSW5kZXg7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuXG4gICAgLyoqXG4gICAgICogd2hldGhlciBhbiBJdGVtR3JvdXAgaXMgZGlzYWJsZWQgb3Igbm90XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmluaXRpYWxpemUoZGlzYWJsZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBJdGVtcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgSXRlbUdyb3VwXG4gICAqIEByZXR1cm4ge2FycmF5PEl0ZW0+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlSXRlbXMoZGF0YSwgaW5kZXgpIHtcbiAgICByZXR1cm4gZGF0YS5tYXAoKGRhdHVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbSh7IGluZGV4OiBpbmRleCArIGl0ZW1JbmRleCwgLi4uZGF0dW0gfSk7XG4gICAgICBpdGVtLmFwcGVuZFRvQ29udGFpbmVyKHRoaXMuaXRlbUNvbnRhaW5lckVsLCB0aGlzLm5hdGl2ZUVsKTtcblxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZShkaXNhYmxlZCkge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYW4gSXRlbUdyb3VwXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMubmF0aXZlRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGFkZENsYXNzKHRoaXMubGFiZWxFbCwgY2xzLkRJU0FCTEVEKTtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmRpc2FibGVJdGVtR3JvdXAoKSk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGFuIEl0ZW1Hcm91cFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBlbmFibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMubmF0aXZlRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmxhYmVsRWwsIGNscy5ESVNBQkxFRCk7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5lbmFibGVJdGVtR3JvdXAoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHtAbGluayBJdGVtIGl0ZW1zfSBpbiB0aGUgaXRlbSBncm91cC5cbiAgICogQHJldHVybiB7YXJyYXk8SXRlbT59XG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IGl0ZW1zID0gaXRlbUdyb3VwLmdldEl0ZW1zKCk7XG4gICAqIGNvbnNvbGUubG9nKGl0ZW1zWzBdKTsgLy8gZmlyc3QgaXRlbSBpbiB0aGUgaXRlbSBncm91cFxuICAgKiBjb25zb2xlLmxvZyhpdGVtcy5sZW5ndGgpOyAvLyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBpdGVtIGdyb3VwXG4gICAqL1xuICBnZXRJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gaXRlbSBncm91cCdzIGluZGV4LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gaXRlbSBncm91cCdzIGxhYmVsLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciBhbiBJdGVtR3JvdXAgaXMgZGlzYWJsZWQgb3Igbm90LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmQgdGhlIGVsZW1lbnQgYW5kIG5hdGl2ZSBlbGVtZW50IHRvIHRoZSBjb250YWluZXJzXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIGNvbnRhaW5lciBlbGVtZW50XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5hdGl2ZUNvbnRhaW5lciAtIG5hdGl2ZSBjb250YWluZXIgZWxlbWVudFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBhcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIsIG5hdGl2ZUNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICBuYXRpdmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5uYXRpdmVFbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdG9yeSBhbiBJdGVtR3JvdXBcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmRlc3Ryb3koKSk7XG4gICAgcmVtb3ZlRWxlbWVudCh0aGlzLmVsKTtcbiAgICByZW1vdmVFbGVtZW50KHRoaXMubmF0aXZlRWwpO1xuICAgIHRoaXMuZWwgPSB0aGlzLmxhYmVsRWwgPSB0aGlzLml0ZW1Db250YWluZXJFbCA9IHRoaXMubmF0aXZlRWwgPSB0aGlzLml0ZW1zID0gbnVsbDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFV0aWxpdHkgZnVuY3Rpb25zIHJlbGF0ZWQgdG8ga2V5IGV2ZW50c1xuICogQGF1dGhvciBOSE4uIEZFIGRldiB0ZWFtLjxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuY29uc3Qga2V5Q29kZU1hcCA9IHtcbiAgMzg6ICdhcnJvd1VwJyxcbiAgNDA6ICdhcnJvd0Rvd24nLFxuICAzMjogJ3NwYWNlJyxcbiAgMTM6ICdlbnRlcicsXG4gIDI3OiAnZXNjYXBlJyxcbiAgNjE6ICd0YWInXG59O1xuXG5jb25zdCBrZXlNYXAgPSB7XG4gIEFycm93VXA6ICdhcnJvd1VwJyxcbiAgVXA6ICdhcnJvd1VwJyxcbiAgQXJyb3dEb3duOiAnYXJyb3dEb3duJyxcbiAgRG93bjogJ2Fycm93RG93bicsXG4gICcgJzogJ3NwYWNlJyxcbiAgU3BhY2ViYXI6ICdzcGFjZScsXG4gIEVudGVyOiAnZW50ZXInLFxuICBFc2NhcGU6ICdlc2NhcGUnLFxuICBFc2M6ICdlc2NhcGUnLFxuICBUYWI6ICd0YWInXG59O1xuXG4vKipcbiAqIElkZW50aWZ5IHRoZSBrZXkgKHBvbHlmaWxsIGZvciBJRSlcbiAqIEBwYXJhbSB7c3RyaW5nfSBldiAtIGtleWJvYXJkIGV2ZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0ga2V5XG4gKi9cbmV4cG9ydCBjb25zdCBpZGVudGlmeUtleSA9IGV2ID0+IHtcbiAgY29uc3QgeyBrZXksIGtleUNvZGUgfSA9IGV2O1xuXG4gIGlmIChrZXkpIHtcbiAgICByZXR1cm4ga2V5TWFwW2tleV0gfHwga2V5O1xuICB9XG5cbiAgcmV0dXJuIGtleUNvZGVNYXBba2V5Q29kZV0gfHwga2V5Q29kZTtcbn07XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgU2VsZWN0Qm94XG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgQ3VzdG9tRXZlbnRzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvY3VzdG9tRXZlbnRzL2N1c3RvbUV2ZW50cyc7XG5pbXBvcnQgb24gZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21FdmVudC9vbic7XG5pbXBvcnQgb2ZmIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvb2ZmJztcbmltcG9ydCBwcmV2ZW50RGVmYXVsdCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L3ByZXZlbnREZWZhdWx0JztcbmltcG9ydCBnZXRUYXJnZXQgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21FdmVudC9nZXRUYXJnZXQnO1xuaW1wb3J0IGNsb3Nlc3QgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL2Nsb3Nlc3QnO1xuaW1wb3J0IHJlbW92ZUVsZW1lbnQgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21VdGlsL3JlbW92ZUVsZW1lbnQnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc09iamVjdCc7XG5pbXBvcnQgaXNFeGlzdHkgZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzRXhpc3R5JztcbmltcG9ydCBpc0hUTUxOb2RlIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc0hUTUxOb2RlJztcbmltcG9ydCBzZW5kSG9zdG5hbWUgZnJvbSAndHVpLWNvZGUtc25pcHBldC9yZXF1ZXN0L3NlbmRIb3N0bmFtZSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBpZGVudGlmeUtleSB9IGZyb20gJy4va2V5RXZlbnRVdGlscyc7XG5pbXBvcnQgeyBjbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bic7XG5pbXBvcnQgSXRlbUdyb3VwIGZyb20gJy4vaXRlbUdyb3VwJztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSc7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fHN0cmluZ30gY29udGFpbmVyIC0gY29udGFpbmVyIGVsZW1lbnQgb3Igc2VsZWN0b3JcbiAqIEBtaXhlcyBDdXN0b21FdmVudHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiAgIEBwYXJhbSB7YXJyYXk8aXRlbURhdGF8aXRlbUdyb3VwRGF0YT59IG9wdGlvbnMuZGF0YSAtIGFycmF5IG9mIHtAbGluayBpdGVtRGF0YX0gYW5kIHtAbGluayBpdGVtR3JvdXBEYXRhfVxuICogICBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucGxhY2Vob2xkZXJdIC0gcGxhY2Vob2xkZXIgZm9yIGFuIGlucHV0XG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGlzYWJsZWRdIC0gd2hldGhlciBhbiBJdGVtIHNob3VsZCBiZSBkaXNhYmxlZCBvciBub3RcbiAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvZm9jdXNdIC0gd2hldGhlciBhIHNlbGVjdGJveCBzaG91bGQgZ2V0IGZvY3VzIHdoZW4gdGhlIHNlbGVjdCBib3ggYXBwZW5kcyB0byB0aGUgY29udGFpbmVyXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b2Nsb3NlXSAtIHdoZXRoZXIgYSBzZWxlY3Rib3ggc2hvdWxkIGNsb3NlIGFmdGVyIHNlbGVjdGlvblxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNob3dJY29uXSAtIHdoZXRoZXIgYW4gYXJyb3cgaWNvbiBpbiB0aGUgaW5wdXQgc2hvdWxkIGJlIHNob3duXG4gKiAgIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy50aGVtZV0gLSB7QGxpbmsgdGhlbWVDb25maWd9IGZvciBjdXN0b20gc3R5bGVcbiAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy51c2FnZVN0YXRpc3RpY3NdIC0gd2hldGhlciBzZW5kIGhvc3RuYW1lIHRvIGdvb2dsZSBhbmFseXRpY3MuIElmIHlvdSBkb24ndCB3YW50IHRvIHNlbmQgdGhlIGhvc3RuYW1lLCBwbGVhc2Ugc2V0IHRvIGZhbHNlLlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCBTZWxlY3RCb3ggZnJvbSAnQHRvYXN0LXVpL3NlbGVjdC1ib3gnO1xuICogLy8gb3IgY29uc3QgU2VsZWN0Qm94ID0gcmVxdWlyZSgnQHRvYXN0LXVpL3NlbGVjdC1ib3gnKTtcbiAqIC8vIG9yIGNvbnN0IFNlbGVjdEJveCA9IHR1aS5TZWxlY3RCb3g7XG4gKlxuICogY29uc3Qgc2VsZWN0Qm94ID0gbmV3IFNlbGVjdEJveCgnI3NlbGVjdC1ib3gnLCB7XG4gKiAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIHNlbGVjdCBhbiBvcHRpb24uJyxcbiAqICAgZGF0YTogW1xuICogICAgIHtcbiAqICAgICAgIGxhYmVsOiAnRnJ1aXRzJyxcbiAqICAgICAgIGRhdGE6IFsgeyBsYWJlbDogJ0FwcGxlJywgdmFsdWU6ICdhcHBsZScgfSwgeyBsYWJlbDogJ0JhbmFuYScsIHZhbHVlOiAnYmFuYW5hJyB9IF1cbiAqICAgICB9LFxuICogICAgIHsgbGFiZWw6ICdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nLicsIHZhbHVlOiAnbm9uZScgfSxcbiAqICAgICB7XG4gKiAgICAgICBsYWJlbDogJ0NvbG9ycycsXG4gKiAgICAgICBkYXRhOiBbXG4gKiAgICAgICAgIHsgbGFiZWw6ICdSZWQnLCB2YWx1ZTogJ3JlZCcgfSxcbiAqICAgICAgICAgeyBsYWJlbDogJ1llbGxvdycsIHZhbHVlOiAneWVsbG93JyB9LFxuICogICAgICAgICB7IGxhYmVsOiAnR3JlZW4nLCB2YWx1ZTogJ2dyZWVuJywgZGlzYWJsZWQ6IHRydWUgfSxcbiAqICAgICAgICAgeyBsYWJlbDogJ0JsdWUnLCB2YWx1ZTogJ2JsdWUnLCBkaXNhYmxlZDogdHJ1ZSB9LFxuICogICAgICAgICB7IGxhYmVsOiAnUHVycGxlJywgdmFsdWU6ICdwdXJwbGUnIH1cbiAqICAgICAgIF1cbiAqICAgICB9XG4gKiAgIF0sXG4gKiAgIGF1dG9mb2N1czogdHJ1ZSxcbiAqICAgc2hvd0ljb246IGZhbHNlLFxuICogICB0aGVtZToge1xuICogICAgICdjb21tb24uYm9yZGVyJzogJzFweCBzb2xpZCBibGFjaycsXG4gKiAgICAgJ2NvbW1vbi5jb2xvcic6ICdibGFjaycsXG4gKiAgICAgJ2l0ZW0uaGlnaGxpZ2h0ZWQuYmFja2dyb3VuZCc6ICd5ZWxsb3cnXG4gKiAgIH1cbiAqIH0pO1xuICovXG5cbi8qKlxuICogU2VsZWN0Qm94IHByb3ZpZGVzIHNvbWUgY3VzdG9tIGV2ZW50czogKHtAbGluayBTZWxlY3RCb3gjZXZlbnQtb3BlbiBvcGVufSwge0BsaW5rIFNlbGVjdEJveCNldmVudC1jbG9zZSBjbG9zZX0sIHtAbGluayBTZWxlY3RCb3gjZXZlbnQtZGlzYWJsZSBkaXNhYmxlfSwge0BsaW5rIFNlbGVjdEJveCNldmVudC1lbmFibGUgZW5hYmxlfSwge0BsaW5rIFNlbGVjdEJveCNldmVudC1jaGFuZ2UgY2hhbmdlfSkuXG4gKiBZb3UgY2FuIGJpbmQgZXZlbnQgaGFuZGxlcnMgYnkge0BsaW5rIGh0dHBzOi8vbmhuLmdpdGh1Yi5pby90dWkuY29kZS1zbmlwcGV0L2xhdGVzdC9DdXN0b21FdmVudHMjb24gc2VsZWN0Qm94Lm9uKGV2ZW50TmFtZSwgaGFuZGxlcil9IGFuZCB1bmJpbmQgYnkge0BsaW5rIGh0dHBzOi8vbmhuLmdpdGh1Yi5pby90dWkuY29kZS1zbmlwcGV0L2xhdGVzdC9DdXN0b21FdmVudHMjb2ZmIHNlbGVjdEJveC5vZmYoZXZlbnROYW1lLCBoYW5kbGVyKX0uXG4gKiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vbmhuLmdpdGh1Yi5pby90dWkuY29kZS1zbmlwcGV0L2xhdGVzdC9DdXN0b21FdmVudHMgQ3VzdG9tRXZlbnRzfSBkb2N1bWVudCBhdCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL25obi90dWkuY29kZS1zbmlwcGV0IHR1aS1jb2RlLXNuaXBwZXR9IHRvIGtub3cgaG93IHRvIGJpbmQsIGFuZCB1bmJpbmQgY3VzdG9tIGV2ZW50cy5cbiAqIFRoZSBleGFtcGxlIHVzaW5nIGN1c3RvbSBldmVudHMgY2FuIGJlIGZvdW5kIHtAbGluayB0dXRvcmlhbC1leGFtcGxlMDMtY3VzdG9tLWV2ZW50cyBoZXJlfS5cbiAqIEB0eXBlZGVmIHtjbGFzc30gQ3VzdG9tRXZlbnRzXG4gKiBAZXhhbXBsZVxuICogLy8gYmluZCAnY2hhbmdlJyBldmVudFxuICogc2VsZWN0Qm94Lm9uKCdjaGFuZ2UnLCBldiA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCBpdGVtIGlzIGNoYW5nZWQgZnJvbSAke2V2LnByZXYuZ2V0TGFiZWwoKX0gdG8gJHtldi5jdXJyLmdldExhYmVsKCl9LmApO1xuICogfSk7XG4gKlxuICogLy8gYmluZCAnZGlzYWJsZScgYW5kIGVuYWJsZSBldmVudFxuICogY29uc3QgcHJpbnQgPSBldiA9PiB7XG4gKiAgIGxldCB0YXJnZXQgPSAnJztcbiAqICAgaWYgKGV2LnRhcmdldCBpbnN0YW5jZW9mIFNlbGVjdEJveCkge1xuICogICAgIHRhcmdldCA9ICdTZWxlY3QgYm94JztcbiAqICAgfSBlbHNlIHtcbiAqICAgICB0YXJnZXQgPSBldi50YXJnZXQuZ2V0TGFiZWwoKTtcbiAqICAgfVxuICogICBjb25zb2xlLmxvZyhgJHt0YXJnZXR9IGlzICR7ZXYudHlwZX0uYCk7XG4gKiB9XG4gKiBzZWxlY3RCb3gub24oe1xuICogICBkaXNhYmxlOiBwcmludCxcbiAqICAgZW5hYmxlOiBwcmludFxuICogfSk7XG4gKlxuICogLy8gdW5iaW5kIGNoYW5nZSBldmVudFxuICogc2VsZWN0Qm94Lm9mZignY2hhbmdlJyk7XG4gKlxuICogLy8gdW5iaW5kIGRpc2FibGUgZXZlbnRcbiAqIHNlbGVjdEJveC5vZmYoZGlzYWJsZSwgcHJpbnQpO1xuICpcbiAqIC8vIHVuYmluZCBhbGwgZXZlbnRzXG4gKiBzZWxlY3RCb3gub2ZmKCk7XG4gKi9cblxuLyoqXG4gKiBEYXRhIG9mIGFuIHtAbGluayBJdGVtIGl0ZW19LlxuICogSXQgaXMgdXNlZCBmb3IgY3JlYXRpbmcgYSB7QGxpbmsgU2VsZWN0Qm94fS5cbiAqIEB0eXBlZGVmIHtvYmplY3R9IGl0ZW1EYXRhIC0gZGF0YSBmb3Ige0BsaW5rIEl0ZW0gaXRlbX1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCAtIGxhYmVsIHRvIGJlIGRpc3BsYXllZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHZhbHVlIC0gdmFsdWUgb2YgYW4gaXRlbVxuICogQHByb3BlcnR5IHtib29sZWFufSBbZGlzYWJsZWQ9ZmFsc2VdIC0gd2hldGhlciBhbiBpdGVtIHNob3VsZCBiZSBkaXNhYmxlZCBvciBub3RcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3NlbGVjdGVkPWZhbHNlXSAtIHdoZXRoZXIgYW4gaXRlbSBzaG91bGQgYmUgcHJlLXNlbGVjdGVkIG9yIG5vdFxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGl0ZW1EYXRhID0ge1xuICogICBsYWJlbDogJ2Rpc2FibGVkIGl0ZW0nLFxuICogICB2YWx1ZTogJzAnLFxuICogICBkaXNhYmxlZDogdHJ1ZSxcbiAqICAgc2VsZWN0ZWQ6IGZhbHNlXG4gKiB9O1xuICovXG5cbi8qKlxuICogRGF0YSBvZiBhbiB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXB9LlxuICogSXQgaXMgdXNlZCBmb3IgY3JlYXRpbmcgYSB7QGxpbmsgU2VsZWN0Qm94fS5cbiAqIEl0ZW1Hcm91cCBzdXBwb3J0cyBvbmx5IDEgbGV2ZWwgY2hvaWNlcywgc28gaXQgZG9lcyBub3Qgd29yayB0byBhZGQgaXRlbSBncm91cHMgaW4gdGhlIGl0ZW0gZ3JvdXAuXG4gKiBUaGUgZXhhbXBsZSB1c2luZyBpdGVtIGdyb3VwcyBjYW4gYmUgZm91bmQge0BsaW5rIHR1dG9yaWFsLWV4YW1wbGUwMS1iYXNpYyBoZXJlfS5cbiAqIEB0eXBlZGVmIHtvYmplY3R9IGl0ZW1Hcm91cERhdGEgLSBkYXRhIGZvciB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXB9XG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgLSBsYWJlbCB0byBiZSBkaXNwbGF5ZWRcbiAqIEBwcm9wZXJ0eSB7YXJyYXl9IGRhdGEgLSB7QGxpbmsgaXRlbURhdGEgZGF0YSBmb3IgaXRlbX1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2Rpc2FibGVkPWZhbHNlXSAtIHdoZXRoZXIgYW4gaXRlbSBncm91cCBzaG91bGQgYmUgZGlzYWJsZWQgb3Igbm90XG4gKiBAZXhhbXBsZVxuICogY29uc3QgaXRlbUdyb3VwRGF0YSA9IHtcbiAqICAgbGFiZWw6ICdkaXNhYmxlZCBpdGVtcycsXG4gKiAgIGRhdGE6IFtcbiAqICAgICB7IGxhYmVsOiAnZGlzYWJsZScsIHZhbHVlOiAnZGlzYWJsZScgfSxcbiAqICAgICB7IGxhYmVsOiAnbm9uZScsIHZhbHVlOiAnMCcgfVxuICogICBdLFxuICogICBkaXNhYmxlZDogdHJ1ZVxuICogfTtcbiAqL1xuY2xhc3MgU2VsZWN0Qm94IHtcbiAgY29uc3RydWN0b3IoXG4gICAgY29udGFpbmVyLFxuICAgIHtcbiAgICAgIGRhdGEsXG4gICAgICBwbGFjZWhvbGRlciA9ICcnLFxuICAgICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgIGF1dG9mb2N1cyA9IGZhbHNlLFxuICAgICAgYXV0b2Nsb3NlID0gdHJ1ZSxcbiAgICAgIHNob3dJY29uID0gdHJ1ZSxcbiAgICAgIHRoZW1lLFxuICAgICAgdXNhZ2VTdGF0aXN0aWNzID0gdHJ1ZVxuICAgIH1cbiAgKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5lbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCB7IGNsYXNzTmFtZTogY2xzLlNFTEVDVF9CT1ggfSk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SW5wdXR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0KHsgcGxhY2Vob2xkZXIsIGRpc2FibGVkLCBzaG93SWNvbiB9KTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtEcm9wZG93bn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZHJvcGRvd24gPSBuZXcgRHJvcGRvd24oeyBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIGRhdGEgfSk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZGlhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvY2xvc2UgPSBhdXRvY2xvc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7VGhlbWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRoZW1lID0gaXNPYmplY3QodGhlbWUpID8gbmV3IFRoZW1lKHRoZW1lLCBjb250YWluZXIpIDogbnVsbDtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZSh7IHBsYWNlaG9sZGVyLCBkaXNhYmxlZCB9KTtcbiAgICB0aGlzLmFwcGVuZFRvQ29udGFpbmVyKGNvbnRhaW5lcik7XG5cbiAgICBpZiAoYXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKHVzYWdlU3RhdGlzdGljcykge1xuICAgICAgc2VuZEhvc3RuYW1lKCdzZWxlY3QtYm94JywgJ1VBLTEyOTk4NzQ2Mi0xJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgc2VsZWN0IGJveCBlbGVtZW50IHRvIHRoZSBjb250YWluZXJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IGNvbnRhaW5lciAtIGNvbnRhaW5lciBlbGVtZW50IG9yIHNlbGVjdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICBjb25zdCBjb250YWluZXJFbCA9IGlzSFRNTE5vZGUoY29udGFpbmVyKSA/IGNvbnRhaW5lciA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKTtcbiAgICBjb250YWluZXJFbC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZShvcHRpb25zKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW0oKTtcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB0aGlzLmlucHV0LmNoYW5nZVRleHQoc2VsZWN0ZWRJdGVtKTtcbiAgICB9IGVsc2UgaWYgKCFvcHRpb25zLnBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLnNlbGVjdCgwKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICB0aGlzLmlucHV0LmFwcGVuZFRvQ29udGFpbmVyKHRoaXMuZWwpO1xuICAgIHRoaXMuZHJvcGRvd24uYXBwZW5kVG9Db250YWluZXIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBldmVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgb24oXG4gICAgICBkb2N1bWVudCxcbiAgICAgICdjbGljaycsXG4gICAgICBldiA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldChldik7XG4gICAgICAgIGlmICghY2xvc2VzdCh0YXJnZXQsIGAuJHtjbHMuU0VMRUNUX0JPWH1gKSAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIG9uKHRoaXMuZWwsICdjbGljaycsIGV2ID0+IHRoaXMuaGFuZGxlQ2xpY2soZXYsIGNscykpO1xuICAgIG9uKHRoaXMuZWwsICdtb3VzZW92ZXInLCBldiA9PiB0aGlzLmhhbmRsZU1vdXNlb3ZlcihldiwgY2xzKSk7XG4gICAgb24odGhpcy5lbCwgJ2tleWRvd24nLCBldiA9PiB0aGlzLmhhbmRsZUtleWRvd24oZXYsIGNscykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBldmVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVuYmluZEV2ZW50cygpIHtcbiAgICBvZmYoZG9jdW1lbnQsICdjbGljaycpO1xuICAgIG9mZih0aGlzLmVsLCAnY2xpY2sgbW91c2VvdmVyIGtleWRvd24nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2xpY2sgZXZlbnRzXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IGNscyAtIGNsc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlQ2xpY2soZXYsIHsgSU5QVVQsIElURU0gfSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldChldik7XG4gICAgY29uc3QgaXRlbUVsID0gY2xvc2VzdCh0YXJnZXQsIGAuJHtJVEVNfWApO1xuXG4gICAgaWYgKGl0ZW1FbCkge1xuICAgICAgdGhpcy5zZWxlY3QoaXRlbUVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcbiAgICB9IGVsc2UgaWYgKGNsb3Nlc3QodGFyZ2V0LCBgLiR7SU5QVVR9YCkpIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBtb3VzZW92ZXIgZXZlbnRzXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IGNscyAtIGNsc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlTW91c2VvdmVyKGV2LCB7IElURU0gfSkge1xuICAgIGlmICh0aGlzLmNoZWNrTW91c2Vtb3ZlKGV2LmNsaWVudFgsIGV2LmNsaWVudFkpKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQoZXYpO1xuICAgICAgY29uc3QgaXRlbUVsID0gY2xvc2VzdCh0YXJnZXQsIGAuJHtJVEVNfWApO1xuXG4gICAgICBpZiAoaXRlbUVsKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uaGlnaGxpZ2h0KGl0ZW1FbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgcG9pbnRlciBpcyBtb3ZlZFxuICAgKiBAcGFyYW0ge251bWJlcn0geCAtIG1vdXNlRXZlbnQuY2xpZW50WFxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIG1vdXNlRXZlbnQuY2xpZW50WVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tNb3VzZW1vdmUoeCwgeSkge1xuICAgIGlmICh0aGlzLnByZXZYICE9PSB4IHx8IHRoaXMucHJldlkgIT09IHkpIHtcbiAgICAgIHRoaXMucHJldlggPSB4O1xuICAgICAgdGhpcy5wcmV2WSA9IHk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUga2V5ZG93biBldmVudHNcbiAgICogQHBhcmFtIHtFdmVudH0gZXYgLSBhbiBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gY2xhc3NOYW1lcyAtIGNsc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlS2V5ZG93bihldiwgY2xhc3NOYW1lcykge1xuICAgIGNvbnN0IGtleSA9IGlkZW50aWZ5S2V5KGV2KTtcbiAgICBjb25zdCBjbG9zZUtleXMgPSBbJ3RhYicsICdlc2NhcGUnXTtcbiAgICBjb25zdCBhY3RpdmVLZXlzID0gWydhcnJvd1VwJywgJ2Fycm93RG93bicsICdzcGFjZScsICdlbnRlciddO1xuXG4gICAgaWYgKGNsb3NlS2V5cy5pbmRleE9mKGtleSkgPiAtMSAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgaWYgKGtleSA9PT0gJ2VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWN0aXZlS2V5cy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgcHJldmVudERlZmF1bHQoZXYpO1xuICAgICAgdGhpcy5hY3RpdmF0ZUtleWRvd24oZXYsIGtleSwgY2xhc3NOYW1lcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlIGtleWRvd24gZXZlbnRzXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIGtleSBwcmVzc2VkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjbGFzc05hbWVzIC0gY2xzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY3RpdmF0ZUtleWRvd24oZXYsIGtleSwgeyBJVEVNLCBJTlBVVCB9KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGV2KTtcbiAgICBjb25zdCBpdGVtRWwgPSBjbG9zZXN0KHRhcmdldCwgYC4ke0lURU19YCk7XG5cbiAgICBpZiAoa2V5ID09PSAnZXNjYXBlJyAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoaXRlbUVsKSB7XG4gICAgICB0aGlzLnByZXNzS2V5T25JdGVtKGtleSwgaXRlbUVsKTtcbiAgICB9IGVsc2UgaWYgKGNsb3Nlc3QodGFyZ2V0LCBgLiR7SU5QVVR9YCkpIHtcbiAgICAgIHRoaXMucHJlc3NLZXlPbklucHV0KGtleSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBrZXlkb3duIGV2ZW50cyB3aGVuIGl0IG9jY3VycyBvbiB0aGUgSW5wdXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIGtleVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJlc3NLZXlPbklucHV0KGtleSkge1xuICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnYXJyb3dVcCcgfHwga2V5ID09PSAnYXJyb3dEb3duJykge1xuICAgICAgdGhpcy5kcm9wZG93bi5tb3ZlSGlnaGxpZ2h0ZWRJdGVtKGtleSA9PT0gJ2Fycm93VXAnID8gLTEgOiAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGtleWRvd24gZXZlbnRzIHdoZW4gaXQgb2NjdXJzIG9uIHRoZSBJdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBrZXlcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbUVsIC0gSXRlbS5lbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJlc3NLZXlPbkl0ZW0oa2V5LCBpdGVtRWwpIHtcbiAgICBpZiAoa2V5ID09PSAnZW50ZXInIHx8IGtleSA9PT0gJ3NwYWNlJykge1xuICAgICAgdGhpcy5zZWxlY3RCeUtleWRvd24oaXRlbUVsKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2Fycm93VXAnIHx8IGtleSA9PT0gJ2Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuZHJvcGRvd24ubW92ZUhpZ2hsaWdodGVkSXRlbShrZXkgPT09ICdhcnJvd1VwJyA/IC0xIDogMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhbiBJdGVtIGJ5IHNwYWNlIG9yIGVudGVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW1FbCAtIEl0ZW0uZWxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNlbGVjdEJ5S2V5ZG93bihpdGVtRWwpIHtcbiAgICB0aGlzLnNlbGVjdChpdGVtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBhIHNlbGVjdCBib3gsIHtAbGluayBJdGVtR3JvdXAgaXRlbSBncm91cH0gb3Ige0BsaW5rIEl0ZW0gaXRlbX0uXG4gICAqIElmIGl0IHRha2VzIG5vIGFyZ3VtZW50cywgYSBzZWxlY3QgYm94IGlzIGRpc2FibGVkLlxuICAgKiBJZiBpdCB0YWtlcyBzdHJpbmcsIGFuIGl0ZW0gd2l0aCB0aGUgc2FtZSB2YWx1ZSBhcyB0aGUgYXJndW1lbnQgaXMgZGlzYWJsZWQuXG4gICAqIElmIGl0IHRha2VzIG51bWJlciwgYW4gaXRlbSB3aXRoIHRoZSBzYW1lIGluZGV4IGFzIHRoZSBhcmd1bWVudCBpcyBkaXNhYmxlZC5cbiAgICogSWYgaXQgdGFrZXMgSXRlbSBvciBJdGVtR3JvdXAsIGFuIGFyZ3VtZW50IGl0c2VsZiBpcyBkaXNhYmxlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfEl0ZW18SXRlbUdyb3VwfSB2YWx1ZSAtIGlmIHN0cmluZywgZmluZCBhbiBJdGVtIGJ5IGl0cyB2YWx1ZS4gaWYgbnVtYmVyLCBmaW5kIGFuIEl0ZW0gYnkgaXRzIGluZGV4LlxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZGlzYWJsZSgpOyAvLyBzZWxlY3QgYm94IGlzIGRpc2FibGVkLlxuICAgKiBzZWxlY3RCb3guZGlzYWJsZSgxKTsgLy8gc2Vjb25kIGl0ZW0gaXMgZGlzYWJsZWQuXG4gICAqIHNlbGVjdEJveC5kaXNhYmxlKCd2YWx1ZScpIC8vIGl0ZW0gd2hpY2ggb2YgdmFsdWUgaXMgJ3ZhbHVlJyBpcyBkaXNhYmxlZC5cbiAgICogc2VsZWN0Qm94LmRpc2FibGUoc2VsZWN0Qm94LmdldFNlbGVjdGVkSXRlbSgpKTsgLy8gc2VsZWN0ZWQgaXRlbSBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGUodmFsdWUpIHtcbiAgICBpZiAoIWlzRXhpc3R5KHZhbHVlKSkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmlucHV0LmRpc2FibGUoKTtcbiAgICAgIHRoaXMuZHJvcGRvd24uZGlzYWJsZSgpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9jY3VycyB3aGVuIGEgc2VsZWN0IGJveCwge0BsaW5rIEl0ZW1Hcm91cCBpdGVtIGdyb3VwfSBvciB7QGxpbmsgSXRlbSBpdGVtfSBpcyBkaXNhYmxlZC5cbiAgICAgICAqIEBldmVudCBTZWxlY3RCb3gjZGlzYWJsZVxuICAgICAgICogQHR5cGUge29iamVjdH0gZXZcbiAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgbmFtZSAoJ2Rpc2FibGUnKVxuICAgICAgICogQHByb3BlcnR5IHtTZWxlY3RCb3h8SXRlbUdyb3VwfEl0ZW19IHRhcmdldCAtIGRpc2FibGVkIHRhcmdldFxuICAgICAgICogQGV4YW1wbGVcbiAgICAgICAqIHNlbGVjdEJveC5vbignZGlzYWJsZScsIGV2ID0+IHtcbiAgICAgICAqICAgY29uc29sZS5sb2coZXYudGFyZ2V0KTtcbiAgICAgICAqIH0pO1xuICAgICAgICovXG4gICAgICB0aGlzLmZpcmUoJ2Rpc2FibGUnLCB7IHR5cGU6ICdkaXNhYmxlJywgdGFyZ2V0OiB0aGlzIH0pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBJdGVtIHx8IHZhbHVlIGluc3RhbmNlb2YgSXRlbUdyb3VwKSB7XG4gICAgICB2YWx1ZS5kaXNhYmxlKCk7XG4gICAgICB0aGlzLmZpcmUoJ2Rpc2FibGUnLCB7IHR5cGU6ICdkaXNhYmxlJywgdGFyZ2V0OiB2YWx1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlzYWJsZWRJdGVtID0gdGhpcy5kcm9wZG93bi5nZXRJdGVtKHZhbHVlKTtcbiAgICAgIGlmIChkaXNhYmxlZEl0ZW0pIHtcbiAgICAgICAgZGlzYWJsZWRJdGVtLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5maXJlKCdkaXNhYmxlJywgeyB0eXBlOiAnZGlzYWJsZScsIHRhcmdldDogZGlzYWJsZWRJdGVtIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYSBzZWxlY3QgYm94LCB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXB9IG9yIHtAbGluayBJdGVtIGl0ZW19LlxuICAgKiBJZiBpdCB0YWtlcyBubyBhcmd1bWVudHMsIGEgc2VsZWN0IGJveCBpcyBlbmFibGVkLlxuICAgKiBJZiBpdCB0YWtlcyBzdHJpbmcsIGFuIGl0ZW0gd2l0aCB0aGUgc2FtZSB2YWx1ZSBhcyB0aGUgYXJndW1lbnQgaXMgZW5hYmxlZC5cbiAgICogSWYgaXQgdGFrZXMgbnVtYmVyLCBhbiBpdGVtIHdpdGggdGhlIHNhbWUgaW5kZXggYXMgdGhlIGFyZ3VtZW50IGlzIGVuYWJsZWQuXG4gICAqIElmIGl0IHRha2VzIEl0ZW0gb3IgSXRlbUdyb3VwLCBhbiBhcmd1bWVudCBpdHNlbGYgaXMgZW5hYmxlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfEl0ZW18SXRlbUdyb3VwfSB2YWx1ZSAtIGlmIHN0cmluZywgZmluZCBhbiBJdGVtIGJ5IGl0cyB2YWx1ZS4gaWYgbnVtYmVyLCBmaW5kIGFuIEl0ZW0gYnkgaXRzIGluZGV4LlxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZW5hYmxlKCk7IC8vIHNlbGVjdCBib3ggaXMgZW5hYmxlZC5cbiAgICogc2VsZWN0Qm94LmVuYWJsZSgxKTsgLy8gc2Vjb25kIGl0ZW0gaXMgZW5hYmxlZC5cbiAgICogc2VsZWN0Qm94LmVuYWJsZSgndmFsdWUnKSAvLyBpdGVtIHdoaWNoIG9mIHZhbHVlIGlzICd2YWx1ZScgaXMgZW5hYmxlZC5cbiAgICogc2VsZWN0Qm94LmVuYWJsZShzZWxlY3RCb3guZ2V0U2VsZWN0ZWRJdGVtKCkpOyAvLyBzZWxlY3RlZCBpdGVtIGlzIGVuYWJsZWQuXG4gICAqL1xuICBlbmFibGUodmFsdWUpIHtcbiAgICBpZiAoIWlzRXhpc3R5KHZhbHVlKSkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbnB1dC5lbmFibGUoKTtcbiAgICAgIHRoaXMuZHJvcGRvd24uZW5hYmxlKCk7XG5cbiAgICAgIC8qKlxuICAgICAgICogT2NjdXJzIHdoZW4gYSBzZWxlY3QgYm94LCB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXB9IG9yIHtAbGluayBJdGVtIGl0ZW19IGlzIGVuYWJsZWQuXG4gICAgICAgKiBAZXZlbnQgU2VsZWN0Qm94I2VuYWJsZVxuICAgICAgICogQHR5cGUge29iamVjdH0gZXZcbiAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgbmFtZSAoJ2VuYWJsZScpXG4gICAgICAgKiBAcHJvcGVydHkge1NlbGVjdEJveHxJdGVtR3JvdXB8SXRlbX0gdGFyZ2V0IC0gZW5hYmxlIHRhcmdldFxuICAgICAgICogQGV4YW1wbGVcbiAgICAgICAqIHNlbGVjdEJveC5vbignZW5hYmxlJywgZXYgPT4ge1xuICAgICAgICogICBjb25zb2xlLmxvZyhldi50YXJnZXQpO1xuICAgICAgICogfSk7XG4gICAgICAgKi9cbiAgICAgIHRoaXMuZmlyZSgnZW5hYmxlJywgeyB0eXBlOiAnZW5hYmxlJywgdGFyZ2V0OiB0aGlzIH0pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBJdGVtIHx8IHZhbHVlIGluc3RhbmNlb2YgSXRlbUdyb3VwKSB7XG4gICAgICB2YWx1ZS5lbmFibGUoKTtcbiAgICAgIHRoaXMuZmlyZSgnZW5hYmxlJywgeyB0eXBlOiAnZW5hYmxlJywgdGFyZ2V0OiB2YWx1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlzYWJsZWRJdGVtID0gdGhpcy5kcm9wZG93bi5nZXRJdGVtKHZhbHVlKTtcbiAgICAgIGlmIChkaXNhYmxlZEl0ZW0pIHtcbiAgICAgICAgZGlzYWJsZWRJdGVtLmVuYWJsZSgpO1xuICAgICAgICB0aGlzLmZpcmUoJ2VuYWJsZScsIHsgdHlwZTogJ2VuYWJsZScsIHRhcmdldDogZGlzYWJsZWRJdGVtIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGEgZHJvcGRvd24gbGlzdC5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94Lm9wZW4oKTtcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICB0aGlzLmRyb3Bkb3duLm9wZW4oKTtcbiAgICAgIHRoaXMuaW5wdXQub3BlbigpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9jY3VycyB3aGVuIGEgc2VsZWN0IGJveCBvcGVucy5cbiAgICAgICAqIEBldmVudCBTZWxlY3RCb3gjb3BlblxuICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBldmVudCBuYW1lICgnb3BlbicpXG4gICAgICAgKiBAZXhhbXBsZVxuICAgICAgICogc2VsZWN0Qm94Lm9uKCdvcGVuJywgZXYgPT4ge1xuICAgICAgICogICBjb25zb2xlLmxvZygnb3BlbicpO1xuICAgICAgICogfSk7XG4gICAgICAgKi9cbiAgICAgIHRoaXMuZmlyZSgnb3BlbicsIHsgdHlwZTogJ29wZW4nIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhIGRyb3Bkb3duIGxpc3QuXG4gICAqIEBleGFtcGxlXG4gICAqIHNlbGVjdEJveC5jbG9zZSgpO1xuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyb3Bkb3duLmNsb3NlKCk7XG4gICAgdGhpcy5pbnB1dC5jbG9zZSgpO1xuXG4gICAgLyoqXG4gICAgICogT2NjdXJzIHdoZW4gYSBzZWxlY3QgYm94IGNsb3Nlcy5cbiAgICAgKiBAZXZlbnQgU2VsZWN0Qm94I2Nsb3NlXG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBldmVudCBuYW1lICgnY2xvc2UnKVxuICAgICAqIEBleGFtcGxlXG4gICAgICogc2VsZWN0Qm94Lm9uKCdjbG9zZScsIGV2ID0+IHtcbiAgICAgKiAgIGNvbnNvbGUubG9nKCdjbG9zZScpO1xuICAgICAqIH0pO1xuICAgICAqL1xuICAgIHRoaXMuZmlyZSgnY2xvc2UnLCB7IHR5cGU6ICdjbG9zZScgfSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGEgZHJvcGRvd24gbGlzdC5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LnRvZ2dsZSgpO1xuICAgKi9cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGFuIHtAbGluayBJdGVtIGl0ZW19LlxuICAgKiBJZiBpdCB0YWtlcyBzdHJpbmcsIGFuIGl0ZW0gd2l0aCB0aGUgc2FtZSB2YWx1ZSBhcyB0aGUgYXJndW1lbnQgaXMgc2VsZWN0ZWQuXG4gICAqIElmIGl0IHRha2VzIG51bWJlciwgYW4gaXRlbSB3aXRoIHRoZSBzYW1lIGluZGV4IGFzIHRoZSBhcmd1bWVudCBpcyBzZWxlY3RlZC5cbiAgICogSWYgaXQgdGFrZXMgSXRlbSwgYW4gYXJndW1lbnQgaXRzZWxmIGlzIHNlbGVjdGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8SXRlbX0gdmFsdWUgLSBpZiBzdHJpbmcsIGZpbmQgYW4gSXRlbSBieSBpdHMgdmFsdWUuIGlmIG51bWJlciwgZmluZCBhbiBJdGVtIGJ5IGl0cyBpbmRleC5cbiAgICogQHJldHVybiB7SXRlbX0gLSBzZWxlY3RlZCBJdGVtLlxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guc2VsZWN0KDEpOyAvLyBzZWNvbmQgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICogc2VsZWN0Qm94LnNlbGVjdCgndmFsdWUnKSAvLyBpdGVtIHdoaWNoIG9mIHZhbHVlIGlzICd2YWx1ZScgaXMgc2VsZWN0ZWQuXG4gICAqL1xuICBzZWxlY3QodmFsdWUpIHtcbiAgICBsZXQgc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICBjb25zdCBwcmV2U2VsZWN0ZWRJdGVtID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW0oKTtcblxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcy5kcm9wZG93bi5zZWxlY3QodmFsdWUpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuY2hhbmdlVGV4dChzZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPY2N1cnMgd2hlbiBhbiB7QGxpbmsgSXRlbSBpdGVtfSBpcyBzZWxlY3RlZC5cbiAgICAgICAgICogQGV2ZW50IFNlbGVjdEJveCNzZWxlY3RcbiAgICAgICAgICogQHR5cGUge29iamVjdH0gZXZcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBldmVudCBuYW1lICgnc2VsZWN0JylcbiAgICAgICAgICogQHByb3BlcnR5IHtJdGVtfSB0YXJnZXQgLSBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAqIEBpZ25vcmVcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogc2VsZWN0Qm94Lm9uKCdzZWxlY3QnLCBldiA9PiB7XG4gICAgICAgICAqICAgY29uc29sZS5sb2coYCR7ZXYudGFyZ2V0LmdldExhYmVsKCl9IGlzIHNlbGVjdGVkLmApO1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZmlyZSgnc2VsZWN0JywgeyB0eXBlOiAnc2VsZWN0JywgdGFyZ2V0OiBzZWxlY3RlZEl0ZW0gfSk7XG5cbiAgICAgICAgaWYgKHByZXZTZWxlY3RlZEl0ZW0gIT09IHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE9jY3VycyB3aGVuIGEgc2VsZWN0ZWQge0BsaW5rIEl0ZW0gaXRlbX0gaXMgY2hhbmdlZC5cbiAgICAgICAgICAgKiBAZXZlbnQgU2VsZWN0Qm94I2NoYW5nZVxuICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IGV2XG4gICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBldmVudCBuYW1lICgnY2hhbmdlJylcbiAgICAgICAgICAgKiBAcHJvcGVydHkge0l0ZW19IHByZXYgLSBwcmV2aW91cyBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAgICogQHByb3BlcnR5IHtJdGVtfSBjdXJyIC0gY3VycmVudCBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICAgKiBzZWxlY3RCb3gub24oJ2NoYW5nZScsIGV2ID0+IHtcbiAgICAgICAgICAgKiAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCBpdGVtIGlzIGNoYW5nZWQgZnJvbSAke2V2LnByZXYuZ2V0TGFiZWwoKX0gdG8gJHtldi5jdXJyLmdldExhYmVsKCl9LmApO1xuICAgICAgICAgICAqIH0pO1xuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgdHlwZTogJ2NoYW5nZScsXG4gICAgICAgICAgICBwcmV2OiBwcmV2U2VsZWN0ZWRJdGVtLFxuICAgICAgICAgICAgY3Vycjogc2VsZWN0ZWRJdGVtXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hdXRvY2xvc2UgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRJdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VsZWN0IGFuIGl0ZW0uXG4gICAqIElmIHNlbGVjdEJveCBoYXMgYSBwbGFjZWhvbGRlciwgdGhlIGlucHV0J3MgdGV4dCBpcyBhIHBsYWNlaG9sZGVyLlxuICAgKiBJZiBubyBwbGFjZWhvbGRlciwgdGhzIGlucHV0IGlzIGVtcHR5LlxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZGVzZWxlY3QoKTtcbiAgICovXG4gIGRlc2VsZWN0KCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5kcm9wZG93bi5kZXNlbGVjdCgpO1xuICAgICAgdGhpcy5pbnB1dC5jaGFuZ2VUZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgc2VsZWN0ZWQge0BsaW5rIEl0ZW0gaXRlbX0uXG4gICAqIEByZXR1cm4ge0l0ZW19XG4gICAqL1xuICBnZXRTZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24uZ2V0U2VsZWN0ZWRJdGVtKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB7QGxpbmsgSXRlbSBpdGVtc30gdGhhdCBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi5cbiAgICogSWYgZmlsdGVyIGZ1bmN0aW9uIGlzIG5vdCBwYXNzZWQsIGl0IHJldHVybnMgYWxsIGl0ZW1zLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGZpbHRlciBpdGVtc1xuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gdGhlIG51bWJlciBvZiBpdGVtcyB0byBmaW5kLiBJZiBpdCBpcyBub3QgcGFzc2VkLCBpdGVyYXRlIGFsbCBpdGVtcy5cbiAgICogQHJldHVybiB7YXJyYXk8SXRlbT59XG4gICAqIEBleGFtcGxlXG4gICAqIHNlbGVjdEJveC5nZXRJdGVtcygpOyAvLyBhbGwgaXRlbXNcbiAgICogc2VsZWN0Qm94LmdldEl0ZW1zKGl0ZW0gPT4ge1xuICAgKiAgcmV0dXJuICFpdGVtLmlzRGlzYWJsZWQoKTtcbiAgICogfSk7IC8vIGFsbCBlbmFibGVkIGl0ZW1zXG4gICAqL1xuICBnZXRJdGVtcyhjYWxsYmFjaywgbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24uZ2V0SXRlbXMoY2FsbGJhY2ssIG51bWJlcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIHtAbGluayBJdGVtIGl0ZW19IGJ5IGl0cyBpbmRleCBvciB2YWx1ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZSAtIGlmIHN0cmluZywgdGhlIEl0ZW0ncyB2YWx1ZS4gaWYgbnVtYmVyLCB0aGUgSXRlbSdzIGluZGV4LlxuICAgKiBAcmV0dXJuIHtJdGVtfVxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZ2V0SXRlbSgwKTsgLy8gZmlyc3QgaXRlbVxuICAgKiBzZWxlY3RCb3guZ2V0SXRlbSgndmFsdWUnKSAvLyBpdGVtIHdoaWNoIG9mIHZhbHVlIGlzICd2YWx1ZSdcbiAgICovXG4gIGdldEl0ZW0odmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5nZXRJdGVtKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHtAbGluayBJdGVtR3JvdXAgaXRlbSBncm91cHN9IHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gICAqIElmIGZpbHRlciBmdW5jdGlvbiBpcyBub3QgcGFzc2VkLCBpdCByZXR1cm5zIGFsbCBpdGVtIGdyb3Vwcy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBmaWx0ZXIgaXRlbSBncm91cHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gZmluZC4gSWYgaXQgaXMgbm90IHBhc3NlZCwgaXRlcmF0ZSBhbGwgaXRlbSBncm91cHMuXG4gICAqIEByZXR1cm4ge2FycmF5PEl0ZW1Hcm91cD59XG4gICAqIEBleGFtcGxlXG4gICAqIHNlbGVjdEJveC5nZXRJdGVtR3JvdXBzKCk7IC8vIGFsbCBpdGVtIGdyb3Vwc1xuICAgKiBzZWxlY3RCb3guZ2V0SXRlbUdyb3VwcyhpdGVtR3JvdXAgPT4ge1xuICAgKiAgcmV0dXJuICFpdGVtR3JvdXAuaXNEaXNhYmxlZCgpO1xuICAgKiB9KTsgLy8gYWxsIGVuYWJsZWQgaXRlbSBncm91cHNcbiAgICovXG4gIGdldEl0ZW1Hcm91cHMoY2FsbGJhY2ssIG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLmdldEl0ZW1Hcm91cHMoY2FsbGJhY2ssIG51bWJlcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIHtAbGluayBJdGVtR3JvdXAgaXRlbSBncm91cH0gYnkgaXRzIGluZGV4LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBncm91cEluZGV4IG9mIHRoZSBJdGVtR3JvdXBcbiAgICogQHJldHVybiB7SXRlbUdyb3VwfVxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZ2V0SXRlbUdyb3VwKDApOyAvLyBmaXJzdCBpdGVtIGdyb3VwXG4gICAqL1xuICBnZXRJdGVtR3JvdXAoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5nZXRJdGVtR3JvdXAoaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3RvcnkgYSBzZWxlY3QgYm94LlxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZGVzdHJveSgpO1xuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgdGhpcy5pbnB1dC5kZXN0cm95KCk7XG4gICAgdGhpcy5kcm9wZG93bi5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMudGhlbWUpIHtcbiAgICAgIHRoaXMudGhlbWUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmVsID0gdGhpcy5pbnB1dCA9IHRoaXMuZHJvcGRvd24gPSB0aGlzLnRoZW1lID0gbnVsbDtcbiAgfVxufVxuXG5DdXN0b21FdmVudHMubWl4aW4oU2VsZWN0Qm94KTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Qm94O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoZW1lXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgZm9yRWFjaE93blByb3BlcnRpZXMgZnJvbSAndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzJztcbmltcG9ydCByZW1vdmVFbGVtZW50IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVFbGVtZW50JztcbmltcG9ydCBpc0FycmF5IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc0FycmF5JztcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzQm9vbGVhbic7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzU3RyaW5nJztcbmltcG9ydCB7IHRyYW5zZm9ybSwgZ2V0U2VsZWN0b3IgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNscyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBiYXNlVGhlbWUgZnJvbSAnLi90aGVtZUNvbmZpZyc7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge29iamVjdH0gY3VzdG9tVGhlbWUgLSB0aGVtZSBvYmplY3QgZm9yIGN1c3RvbSBzdHlsZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IGNvbnRhaW5lciAtIGNvbnRhaW5lciBlbGVtZW50IG9yIHNlbGVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZW1lIHtcbiAgY29uc3RydWN0b3IoY3VzdG9tVGhlbWUsIGNvbnRhaW5lcikge1xuICAgIHRoaXMuY29udGFpbmVyU2VsZWN0b3IgPSBnZXRTZWxlY3Rvcihjb250YWluZXIpO1xuICAgIHRoaXMuY3NzU3RyaW5nID0gdGhpcy5idWlsZEFsbCh0cmFuc2Zvcm0oY3VzdG9tVGhlbWUpKTtcbiAgICB0aGlzLnN0eWxlRWwgPSB0aGlzLmNyZWF0ZVN0eWxlRWxlbWVudCgpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZCh0aGlzLnN0eWxlRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHN0eWxlIGVsZW1lbnRcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XG4gICAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGVFbC50eXBlID0gJ3RleHQvY3NzJztcblxuICAgIGlmIChzdHlsZUVsLnN0eWxlU2hlZXQpIHtcbiAgICAgIHN0eWxlRWwuc3R5bGVTaGVldC5jc3NUZXh0ID0gdGhpcy5jc3NTdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5jc3NTdHJpbmcpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVFbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBjc3Mgc3RyaW5ncyBmb3IgSW5wdXQsIERyb3Bkb3duLCBJdGVtR3JvdXAsIGFuZCBJdGVtLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdGhlbWUgLSB0aGVtZSBvYmplY3RcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGRBbGwodGhlbWUpIHtcbiAgICBjb25zdCBleGNsdWRlID0geyBib3JkZXI6ICcnLCBiYWNrZ3JvdW5kOiAnJyB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYnVpbGRJbnB1dCh7IC4uLnRoZW1lLmNvbW1vbiwgLi4udGhlbWUuaW5wdXQgfSkgK1xuICAgICAgdGhpcy5idWlsZERyb3Bkb3duKHsgLi4udGhlbWUuY29tbW9uLCBib3JkZXJUb3A6ICcwJywgLi4udGhlbWUuZHJvcGRvd24sIGhlaWdodDogJycgfSkgK1xuICAgICAgdGhpcy5idWlsZEl0ZW1Hcm91cChcbiAgICAgICAgdGhlbWUuaXRlbUdyb3VwXG4gICAgICAgICAgPyB7IC4uLnRoZW1lLmNvbW1vbiwgLi4uZXhjbHVkZSwgLi4udGhlbWUuaXRlbUdyb3VwLmxhYmVsIH1cbiAgICAgICAgICA6IHsgLi4udGhlbWUuY29tbW9uLCAuLi5leGNsdWRlIH1cbiAgICAgICkgK1xuICAgICAgdGhpcy5idWlsZEl0ZW0oXG4gICAgICAgIHRoZW1lLml0ZW1Hcm91cFxuICAgICAgICAgID8geyAuLi50aGVtZS5jb21tb24sIC4uLmV4Y2x1ZGUsIC4uLnRoZW1lLml0ZW0sIGluSXRlbUdyb3VwOiB0aGVtZS5pdGVtR3JvdXAuaXRlbXMgfVxuICAgICAgICAgIDogeyAuLi50aGVtZS5jb21tb24sIC4uLmV4Y2x1ZGUsIC4uLnRoZW1lLml0ZW0gfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgY3NzIHN0cmluZ3MgZm9yIElucHV0XG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0aGVtZSAtIHRoZW1lIG9iamVjdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZElucHV0KHRoZW1lKSB7XG4gICAgdGhlbWUucGxhY2Vob2xkZXIgPSB7fTtcbiAgICBpZiAodGhlbWUuaGVpZ2h0KSB7XG4gICAgICB0aGVtZS5wbGFjZWhvbGRlci5saW5lSGVpZ2h0ID0gdGhlbWUuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAoaXNCb29sZWFuKHRoZW1lLnNob3dJY29uKSAmJiAhdGhlbWUuc2hvd0ljb24pIHtcbiAgICAgIHRoZW1lLmljb24gPSB7IGRpc3BsYXk6ICdub25lJyB9O1xuICAgICAgdGhlbWUucGxhY2Vob2xkZXIud2lkdGggPSAnMTAwJSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoY2xzLklOUFVULCB0aGVtZSkgK1xuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhbY2xzLklOUFVULCBjbHMuT1BFTl0sIHRoZW1lLm9wZW4pICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoW2Nscy5JTlBVVCwgY2xzLkRJU0FCTEVEXSwgdGhlbWUuZGlzYWJsZWQpICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoY2xzLlBMQUNFSE9MREVSLCB0aGVtZS5wbGFjZWhvbGRlcikgK1xuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhjbHMuSUNPTiwgdGhlbWUuaWNvbilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNzcyBzdHJpbmdzIGZvciBEcm9wZG93blxuICAgKiBAcGFyYW0ge29iamVjdH0gdGhlbWUgLSB0aGVtZSBvYmplY3RcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGREcm9wZG93bih0aGVtZSkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkQ3NzU3RyaW5nKGNscy5EUk9QRE9XTiwgdGhlbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNzcyBzdHJpbmdzIGZvciBJdGVtR3JvdXBcbiAgICogQHBhcmFtIHtvYmplY3R9IHRoZW1lIC0gdGhlbWUgb2JqZWN0XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkSXRlbUdyb3VwKHRoZW1lKSB7XG4gICAgaWYgKHRoZW1lLmhlaWdodCkge1xuICAgICAgdGhlbWUubGluZUhlaWdodCA9IHRoZW1lLmhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhjbHMuSVRFTV9HUk9VUF9MQUJFTCwgdGhlbWUpICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoW2Nscy5JVEVNX0dST1VQX0xBQkVMLCBjbHMuRElTQUJMRURdLCB0aGVtZS5kaXNhYmxlZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNzcyBzdHJpbmdzIGZvciBJdGVtXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0aGVtZSAtIHRoZW1lIG9iamVjdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZEl0ZW0odGhlbWUpIHtcbiAgICBpZiAodGhlbWUuaGVpZ2h0KSB7XG4gICAgICB0aGVtZS5saW5lSGVpZ2h0ID0gdGhlbWUuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhlbWUuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IGJhc2UgPSB0cmFuc2Zvcm0oYmFzZVRoZW1lKTtcblxuICAgICAgdGhlbWUuc2VsZWN0ZWQgPSB7IC4uLmJhc2UuaXRlbS5zZWxlY3RlZCwgLi4udGhlbWUuc2VsZWN0ZWQgfTtcbiAgICAgIHRoZW1lLmRpc2FibGVkID0geyAuLi5iYXNlLml0ZW0uZGlzYWJsZWQsIC4uLnRoZW1lLmRpc2FibGVkIH07XG4gICAgICB0aGVtZS5oaWdobGlnaHRlZCA9IHsgLi4uYmFzZS5pdGVtLmhpZ2hsaWdodGVkLCAuLi50aGVtZS5oaWdobGlnaHRlZCB9O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKGNscy5JVEVNLCB0aGVtZSkgK1xuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhbY2xzLklURU0sIGNscy5TRUxFQ1RFRF0sIHRoZW1lLnNlbGVjdGVkKSArXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKFtjbHMuSVRFTSwgY2xzLkRJU0FCTEVEXSwgdGhlbWUuZGlzYWJsZWQpICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoW2Nscy5JVEVNLCBjbHMuSElHSExJR0hUXSwgdGhlbWUuaGlnaGxpZ2h0ZWQpICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoYCR7Y2xzLklURU1fR1JPVVB9Pi4ke2Nscy5JVEVNfWAsIHRoZW1lLmluSXRlbUdyb3VwKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgY3NzIHN0cmluZ3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIGNsYXNzTmFtZVxuICAgKiBAcGFyYW0ge29iamVjdH0gdGhlbWUgLSB0aGVtZSBvYmplY3RcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGRDc3NTdHJpbmcoY2xhc3NOYW1lLCB0aGVtZSkge1xuICAgIGlmIChpc0FycmF5KGNsYXNzTmFtZSkpIHtcbiAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5qb2luKCcuJyk7XG4gICAgfVxuICAgIGNsYXNzTmFtZSA9IGAuJHtjbGFzc05hbWV9YDtcblxuICAgIGxldCBjc3NTdHJpbmcgPSAnJztcbiAgICBmb3JFYWNoT3duUHJvcGVydGllcyh0aGVtZSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgdmFsdWUpIHtcbiAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNzc1N0cmluZyArPSBgJHtrZXl9OiR7dmFsdWV9O2A7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3NzU3RyaW5nID8gYCR7dGhpcy5jb250YWluZXJTZWxlY3Rvcn0gJHtjbGFzc05hbWV9eyR7Y3NzU3RyaW5nfX1gIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzdG9yeSBhIHRoZW1lXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5zdHlsZUVsKTtcbiAgICB0aGlzLnN0eWxlRWwgPSBudWxsO1xuICB9XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlbWUgY29uZmlndXJhdGlvblxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuLyoqXG4gKiBUaGVtZSBjb25maWd1cmF0aW9uLlxuICogXCJjb21tb25cIiBwcmVmaXggaXMgZm9yIHRoZSBlbnRpcmUgc2VsZWN0IGJveC4gSXRzIHByb3BlcnRpZXMgYXJlIG92ZXJyaWRlbiBieSBcImlucHV0XCIsIFwiZHJvcGRvd25cIiwgXCJpdGVtR3JvdXBcIiwgYW5kIFwiaXRlbVwiLlxuICogVGhlIGV4YW1wbGUgdXNpbmcgdGhlbWUgY2FuIGJlIGZvdW5kIHtAbGluayB0dXRvcmlhbC1leGFtcGxlMDItdGhlbWUgaGVyZX0uXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSB0aGVtZUNvbmZpZ1xuICogQGV4YW1wbGVcbiAqIGNvbnN0IHRoZW1lQ29uZmlnID0ge1xuICogICAnY29tbW9uLmJvcmRlcic6ICcxcHggc29saWQgI2RkZCcsIC8vIGJvcmRlciBmb3IgaW5wdXQgYW5kIGRyb3Bkb3duIChub3QgaXRlbUdyb3VwIGFuZCBpdGVtKVxuICogICAnY29tbW9uLmJhY2tncm91bmQnOiAnI2ZmZicsXG4gKiAgICdjb21tb24uY29sb3InOiAnIzMzMycsXG4gKiAgICdjb21tb24ud2lkdGgnOiAnMTAwJScsXG4gKiAgICdjb21tb24uaGVpZ2h0JzogJzI5cHgnLCAvLyBoZWlnaHQgZm9yIGl0ZW0gYW5kIGl0ZW1Hcm91cCBsYWJlbCAobm90IGVudGlyZSBzZWxlY3QgYm94KVxuICpcbiAqICAgJ2NvbW1vbi5kaXNhYmxlZC5iYWNrZ3JvdW5kJzogJyNmOWY5ZjknLFxuICogICAnY29tbW9uLmRpc2FibGVkLmNvbG9yJzogJ2M4YzhjOCcsXG4gKlxuICogICAvLyBJbnB1dFxuICogICAnaW5wdXQuYm9yZGVyJzogJzFweCBzb2xpZCAjZGRkJyxcbiAqICAgJ2lucHV0LmJvcmRlckJvdHRvbSc6ICcnLFxuICogICAnaW5wdXQuYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2lucHV0LmNvbG9yJzogJyMzMzMnLFxuICogICAnaW5wdXQud2lkdGgnOiAnMTAwJScsXG4gKiAgICdpbnB1dC5oZWlnaHQnOiAnMjlweCcsXG4gKlxuICogICAvLyBJbnB1dCB3aGVuIGRyb3Bkb3duIGlzIG9wZW5cbiAqICAgJ2lucHV0Lm9wZW4uYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAqICAgJ2lucHV0Lm9wZW4uYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2lucHV0Lm9wZW4uY29sb3InOiAnIzMzMycsXG4gKlxuICogICAvLyBJbnB1dCB3aGVuIHNlbGVjdGJveCBpcyBkaXNhYmxlZFxuICogICAnaW5wdXQuZGlzYWJsZWQuYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAqICAgJ2lucHV0LmRpc2FibGVkLmJhY2tncm91bmQnOiAnI2Y5ZjlmOScsXG4gKiAgICdpbnB1dC5kaXNhYmxlZC5jb2xvcic6ICcjYzhjOGM4JyxcbiAqXG4gKiAgIC8vIERyb3Bkb3duXG4gKiAgICdkcm9wZG93bi5ib3JkZXInOiAnMXB4IHNvbGlkICNhYWEnLFxuICogICAnZHJvcGRvd24uYm9yZGVyVG9wJzogJzAnLFxuICogICAnZHJvcGRvd24uYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2Ryb3Bkb3duLndpZHRoJzogJzEwMCUnLFxuICogICAnZHJvcGRvd24ubWF4SGVpZ2h0JzogJycsXG4gKlxuICogICAvLyBJdGVtR3JvdXAncyBpdGVtc1xuICogICAvLyBpZiB5b3Ugd2FudCB0byBzZXQgdGhlIHNhbWUgcGFkZGluZyB2YWx1ZSBhcyB0aGUgaXRlbUdyb3VwLmxhYmVsLCBzZXQgdG8gJzhweCcuXG4gKiAgICdpdGVtR3JvdXAuaXRlbXMucGFkZGluZ0xlZnQnOiAnMjBweCcsXG4gKlxuICogICAvLyBJdGVtR3JvdXAncyBsYWJlbFxuICogICAnaXRlbUdyb3VwLmxhYmVsLmJvcmRlcic6ICcwJyxcbiAqICAgJ2l0ZW1Hcm91cC5sYWJlbC5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICogICAnaXRlbUdyb3VwLmxhYmVsLmNvbG9yJzogJyMzMzMnLFxuICogICAnaXRlbUdyb3VwLmxhYmVsLmZvbnRXZWlnaHQnOiAnYm9sZCcsXG4gKiAgICdpdGVtR3JvdXAubGFiZWwuaGVpZ2h0JzogJzI5cHgnLFxuICpcbiAqICAgLy8gZGlzYWJsZWQgSXRlbUdyb3VwJ3MgbGFiZWxcbiAqICAgJ2l0ZW1Hcm91cC5sYWJlbC5kaXNhYmxlZC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtR3JvdXAubGFiZWwuZGlzYWJsZWQuYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2l0ZW1Hcm91cC5sYWJlbC5kaXNhYmxlZC5jb2xvcic6ICcjMzMzJyxcbiAqXG4gKiAgIC8vIEl0ZW1cbiAqICAgJ2l0ZW0uYm9yZGVyJzogJzAnLFxuICogICAnaXRlbS5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICogICAnaXRlbS5jb2xvcic6ICcjMzMzJyxcbiAqICAgJ2l0ZW0uaGVpZ2h0JzogJzI5cHgnLFxuICpcbiAqICAgLy8gc2VsZWN0ZWQgSXRlbVxuICogICAnaXRlbS5zZWxlY3RlZC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtLnNlbGVjdGVkLmJhY2tncm91bmQnOiAnI2Y0ZjRmNCcsXG4gKiAgICdpdGVtLnNlbGVjdGVkLmNvbG9yJzogJyMzMzMnLFxuICpcbiAqICAgLy8gZGlzYWJsZWQgSXRlbVxuICogICAnaXRlbS5kaXNhYmxlZC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtLmRpc2FibGVkLmJhY2tncm91bmQnOiAnI2Y5ZjlmOScsXG4gKiAgICdpdGVtLmRpc2FibGVkLmNvbG9yJzogJyNjOGM4YzgnLFxuICpcbiAqICAgLy8gaGlnaGxpZ2h0ZWQgSXRlbVxuICogICAnaXRlbS5oaWdobGlnaHRlZC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtLmhpZ2hsaWdodGVkLmJhY2tncm91bmQnOiAnI2U1ZjZmZicsXG4gKiAgICdpdGVtLmhpZ2hsaWdodGVkLmNvbG9yJzogJyMzMzMnXG4gKiB9O1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICdjb21tb24uYm9yZGVyJzogJzFweCBzb2xpZCAjZGRkJywgLy8gYm9yZGVyIGZvciBpbnB1dCBhbmQgZHJvcGRvd24gKG5vdCBpdGVtR3JvdXAgYW5kIGl0ZW0pXG4gICdjb21tb24uYmFja2dyb3VuZCc6ICcjZmZmJyxcbiAgJ2NvbW1vbi5jb2xvcic6ICcjMzMzJyxcbiAgJ2NvbW1vbi53aWR0aCc6ICcxMDAlJyxcbiAgJ2NvbW1vbi5oZWlnaHQnOiAnMjlweCcsIC8vIGhlaWdodCBmb3IgaXRlbSBhbmQgaXRlbUdyb3VwIGxhYmVsIChub3QgZW50aXJlIHNlbGVjdCBib3gpXG5cbiAgJ2NvbW1vbi5kaXNhYmxlZC5iYWNrZ3JvdW5kJzogJyNmOWY5ZjknLFxuICAnY29tbW9uLmRpc2FibGVkLmNvbG9yJzogJ2M4YzhjOCcsXG5cbiAgLy8gSW5wdXRcbiAgJ2lucHV0LmJvcmRlcic6ICcxcHggc29saWQgI2RkZCcsXG4gICdpbnB1dC5ib3JkZXJCb3R0b20nOiAnJyxcbiAgJ2lucHV0LmJhY2tncm91bmQnOiAnaW5oZXJpdCcsXG4gICdpbnB1dC5jb2xvcic6ICcjMzMzJyxcbiAgJ2lucHV0LndpZHRoJzogJzEwMCUnLFxuICAnaW5wdXQuaGVpZ2h0JzogJzI5cHgnLFxuXG4gIC8vIElucHV0IHdoZW4gZHJvcGRvd24gaXMgb3BlblxuICAnaW5wdXQub3Blbi5ib3JkZXInOiAnMXB4IHNvbGlkICNhYWEnLFxuICAnaW5wdXQub3Blbi5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICAnaW5wdXQub3Blbi5jb2xvcic6ICcjMzMzJyxcblxuICAvLyBJbnB1dCB3aGVuIHNlbGVjdGJveCBpcyBkaXNhYmxlZFxuICAnaW5wdXQuZGlzYWJsZWQuYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAgJ2lucHV0LmRpc2FibGVkLmJhY2tncm91bmQnOiAnI2Y5ZjlmOScsXG4gICdpbnB1dC5kaXNhYmxlZC5jb2xvcic6ICcjYzhjOGM4JyxcblxuICAvLyBEcm9wZG93blxuICAnZHJvcGRvd24uYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAgJ2Ryb3Bkb3duLmJvcmRlclRvcCc6ICcwJyxcbiAgJ2Ryb3Bkb3duLmJhY2tncm91bmQnOiAnaW5oZXJpdCcsXG4gICdkcm9wZG93bi53aWR0aCc6ICcxMDAlJyxcbiAgJ2Ryb3Bkb3duLm1heEhlaWdodCc6ICcnLFxuXG4gIC8vIEl0ZW1Hcm91cCdzIGl0ZW1zXG4gICdpdGVtR3JvdXAuaXRlbXMucGFkZGluZ0xlZnQnOiAnMjBweCcsXG5cbiAgLy8gSXRlbUdyb3VwJ3MgbGFiZWxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5ib3JkZXInOiAnMCcsXG4gICdpdGVtR3JvdXAubGFiZWwuYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5jb2xvcic6ICcjMzMzJyxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5mb250V2VpZ2h0JzogJ2JvbGQnLFxuICAnaXRlbUdyb3VwLmxhYmVsLmhlaWdodCc6ICcyOXB4JyxcblxuICAvLyBkaXNhYmxlZCBJdGVtR3JvdXAncyBsYWJlbFxuICAnaXRlbUdyb3VwLmxhYmVsLmRpc2FibGVkLmJvcmRlcic6ICcwJyxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5kaXNhYmxlZC5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICAnaXRlbUdyb3VwLmxhYmVsLmRpc2FibGVkLmNvbG9yJzogJyMzMzMnLFxuXG4gIC8vIEl0ZW1cbiAgJ2l0ZW0uYm9yZGVyJzogJzAnLFxuICAnaXRlbS5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICAnaXRlbS5jb2xvcic6ICcjMzMzJyxcbiAgJ2l0ZW0uaGVpZ2h0JzogJzI5cHgnLFxuXG4gIC8vIHNlbGVjdGVkIEl0ZW1cbiAgJ2l0ZW0uc2VsZWN0ZWQuYm9yZGVyJzogJzAnLFxuICAnaXRlbS5zZWxlY3RlZC5iYWNrZ3JvdW5kJzogJyNmNGY0ZjQnLFxuICAnaXRlbS5zZWxlY3RlZC5jb2xvcic6ICcjMzMzJyxcblxuICAvLyBkaXNhYmxlZCBJdGVtXG4gICdpdGVtLmRpc2FibGVkLmJvcmRlcic6ICcwJyxcbiAgJ2l0ZW0uZGlzYWJsZWQuYmFja2dyb3VuZCc6ICcjZjlmOWY5JyxcbiAgJ2l0ZW0uZGlzYWJsZWQuY29sb3InOiAnI2M4YzhjOCcsXG5cbiAgLy8gaGlnaGxpZ2h0ZWQgSXRlbVxuICAnaXRlbS5oaWdobGlnaHRlZC5ib3JkZXInOiAnMCcsXG4gICdpdGVtLmhpZ2hsaWdodGVkLmJhY2tncm91bmQnOiAnI2U1ZjZmZicsXG4gICdpdGVtLmhpZ2hsaWdodGVkLmNvbG9yJzogJyMzMzMnXG59O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFV0aWxpdHkgZnVuY3Rpb25zXG4gKiBAYXV0aG9yIE5ITi4gRkUgZGV2IHRlYW0uPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgZm9yRWFjaE93blByb3BlcnRpZXMgZnJvbSAndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICd0dWktY29kZS1zbmlwcGV0L3R5cGUvaXNTdHJpbmcnO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBvYmplY3QgdXNpbmcgZG90IG5vdGF0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gb2JqZWN0IHRvIHRyYW5zZm9ybVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtID0gb2JqID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgZm9yRWFjaE93blByb3BlcnRpZXMob2JqLCAodmFsdWUsIHByb3ApID0+IHtcbiAgICBjb25zdCBrZXlzID0gcHJvcC5zcGxpdCgnLicpO1xuICAgIGxldCBjdXJyID0gcmVzdWx0O1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBjdXJyW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoIWN1cnJba2V5XSkge1xuICAgICAgICBjdXJyW2tleV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGN1cnIgPSBjdXJyW2tleV07XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgLSB0YWcgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSBjb250ZW50IGluIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIG90aGVyIHByb3BlcnRpZXMgZm9yIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBwYXJlbnQgZWxlbWVudCBmb3IgdGhlIGVsZW1lbnRcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWdOYW1lLCBjb250ZW50LCBvcHRpb25zLCBjb250YWluZXIpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIGlmIChjb250ZW50KSB7XG4gICAgZWwuaW5uZXJUZXh0ID0gY29udGVudDtcbiAgfVxuXG4gIGZvckVhY2hPd25Qcm9wZXJ0aWVzKG9wdGlvbnMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKGtleS5pbmRleE9mKCdkYXRhLScpID4gLTEpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG4gIH1cblxuICByZXR1cm4gZWw7XG59O1xuXG4vKipcbiAqIEdldCBzZWxlY3RvcnMgZm9yIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIC0gZWxlbWVudFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0b3IgPSBlbCA9PiB7XG4gIGlmIChpc1N0cmluZyhlbCkpIHtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBpZiAoZWwuaWQpIHtcbiAgICByZXR1cm4gYCMke2VsLmlkfWA7XG4gIH1cblxuICBjb25zdCBjbGFzc05hbWUgPSBgLiR7ZWwuY2xhc3NOYW1lLnJlcGxhY2UoL1xccysvZywgJy4nKX1gO1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XG5cbiAgICBpZiAoZWxlbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRhZ05hbWUgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIGAke3RhZ05hbWV9JHtjbGFzc05hbWV9YDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9