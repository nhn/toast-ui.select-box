/*!
 * TOAST UI Select Box
 * @version 1.0.0 | Thu Oct 24 2019
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
/******/ 	var hotCurrentHash = "fbd02ae0ea88b9f7e886";
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
      var index = items.indexOf(highlightedItem);

      if (index > -1) {
        index += direction;

        for (; index < items.length && index >= 0; index += direction) {
          if (!items[index].isDisabled()) {
            this.highlight(items[index]);
            break;
          }
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9hcnJheS9pbkFycmF5LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2guanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vZm9yRWFjaEFycmF5LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL3RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2N1c3RvbUV2ZW50cy9jdXN0b21FdmVudHMuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L19zYWZlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvb2ZmLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9kb21FdmVudC9vbi5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvcHJldmVudERlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvX3NldENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9jbG9zZXN0LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9kb21VdGlsL2dldENsYXNzLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC9kb21VdGlsL21hdGNoZXMuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvb2JqZWN0L2V4dGVuZC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvcmVxdWVzdC9pbWFnZVBpbmcuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3JlcXVlc3Qvc2VuZEhvc3RuYW1lLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC90eXBlL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNCb29sZWFuLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC90eXBlL2lzRXhpc3R5LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9ub2RlX21vZHVsZXMvdHVpLWNvZGUtc25pcHBldC90eXBlL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNIVE1MTm9kZS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vbm9kZV9tb2R1bGVzL3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc051bGwuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL25vZGVfbW9kdWxlcy90dWktY29kZS1zbmlwcGV0L3R5cGUvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9jc3Mvc2VsZWN0Qm94LmNzcz83ZWJkIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL2lucHV0LmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvaXRlbS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL2l0ZW1Hcm91cC5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL2tleUV2ZW50VXRpbHMuanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9qcy9zZWxlY3RCb3guanMiLCJ3ZWJwYWNrOi8vdHVpLlNlbGVjdEJveC8uL3NyYy9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly90dWkuU2VsZWN0Qm94Ly4vc3JjL2pzL3RoZW1lQ29uZmlnLmpzIiwid2VicGFjazovL3R1aS5TZWxlY3RCb3gvLi9zcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOlsiQ1NTX1BSRUZJWCIsImNsYXNzTmFtZXMiLCJTRUxFQ1RfQk9YIiwiSVRFTSIsIklURU1fR1JPVVAiLCJJVEVNX0dST1VQX0xBQkVMIiwiRFJPUERPV04iLCJJTlBVVCIsIlBMQUNFSE9MREVSIiwiSUNPTiIsIk9QRU4iLCJISURERU4iLCJESVNBQkxFRCIsIlNFTEVDVEVEIiwiSElHSExJR0hUIiwiY2xzIiwidmFsdWUiLCJrZXkiLCJEcm9wZG93biIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImRpc2FibGVkIiwiZWwiLCJjbGFzc05hbWUiLCJuYXRpdmVFbCIsInRhYkluZGV4IiwiaXRlbXMiLCJpdGVtTGVuZ3RoIiwic2VsZWN0ZWRJdGVtIiwiaGlnaGxpZ2h0ZWRJdGVtIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVJdGVtcyIsIml0ZW0iLCJpdGVtSW5kZXgiLCJpdGVtR3JvdXBJbmRleCIsImZvckVhY2giLCJkYXR1bSIsIkl0ZW1Hcm91cCIsImluZGV4IiwibGVuZ3RoIiwiSXRlbSIsInB1c2giLCJhcHBlbmRUb0NvbnRhaW5lciIsImxhYmVsIiwiaXRlcmF0ZUl0ZW1zIiwiaXNTZWxlY3RlZCIsImRlc2VsZWN0IiwiZGlzYWJsZSIsImNhbGxiYWNrIiwiYXJncyIsInJlc3VsdCIsImdldEl0ZW1zIiwiaXRlbUluR3JvdXAiLCJhcHBseSIsIm9wZW4iLCJpc0Rpc2FibGVkIiwiaGlnaGxpZ2h0IiwiY2xvc2UiLCJkZWhpZ2hsaWdodCIsImVuYWJsZSIsInNlbGVjdCIsImdldEl0ZW0iLCJtb3ZlSGlnaGxpZ2h0ZWRJdGVtIiwiZGlyZWN0aW9uIiwiZ2V0SGlnaGxpZ2h0ZWRJdGVtIiwiaW5kZXhPZiIsIm51bWJlciIsImlzVmFsaWRJdGVtIiwiY29tcGFyZWRJdGVtIiwiZ2V0SW5kZXgiLCJnZXRWYWx1ZSIsImdldEl0ZW1Hcm91cHMiLCJpdGVtR3JvdXBzIiwiaXRlbUdyb3VwIiwiZ2V0SXRlbUdyb3VwIiwiZ2V0SXRlbUxlbmd0aCIsImdldFNlbGVjdGVkSXRlbSIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiZGVzdHJveSIsIlNlbGVjdEJveCIsIklucHV0Iiwic2hvd0ljb24iLCJwbGFjZWhvbGRlclRleHQiLCJwbGFjZWhvbGRlckVsIiwid2lkdGgiLCJmb2N1cyIsImNoYW5nZVRleHQiLCJpbm5lclRleHQiLCJnZXRMYWJlbCIsInNlbGVjdGVkIiwiaXRlbUdyb3VwRGlzYWJsZWQiLCJpdGVtRGlzYWJsZWQiLCJtYWtlRGlzYWJsZSIsIm1ha2VFbmFibGUiLCJkaXNhYmxlSXRlbUdyb3VwIiwiZW5hYmxlSXRlbUdyb3VwIiwiYmx1ciIsIm5hdGl2ZUNvbnRhaW5lciIsImxhYmVsRWwiLCJpdGVtQ29udGFpbmVyRWwiLCJjcmVhdGVJdGVtcyIsIm1hcCIsImtleUNvZGVNYXAiLCJrZXlNYXAiLCJBcnJvd1VwIiwiVXAiLCJBcnJvd0Rvd24iLCJEb3duIiwiU3BhY2ViYXIiLCJFbnRlciIsIkVzY2FwZSIsIkVzYyIsIlRhYiIsImlkZW50aWZ5S2V5IiwiZXYiLCJrZXlDb2RlIiwiYXV0b2ZvY3VzIiwiYXV0b2Nsb3NlIiwidGhlbWUiLCJ1c2FnZVN0YXRpc3RpY3MiLCJpbnB1dCIsImRyb3Bkb3duIiwib3BlbmVkIiwiZGlhYmxlZCIsIlRoZW1lIiwiY29udGFpbmVyRWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcHRpb25zIiwiYmluZEV2ZW50cyIsInRhcmdldCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlTW91c2VvdmVyIiwiaGFuZGxlS2V5ZG93biIsInVuYmluZEV2ZW50cyIsIml0ZW1FbCIsImdldEF0dHJpYnV0ZSIsInRvZ2dsZSIsImNoZWNrTW91c2Vtb3ZlIiwiY2xpZW50WCIsImNsaWVudFkiLCJ4IiwieSIsInByZXZYIiwicHJldlkiLCJjbG9zZUtleXMiLCJhY3RpdmVLZXlzIiwiYWN0aXZhdGVLZXlkb3duIiwicHJlc3NLZXlPbkl0ZW0iLCJwcmVzc0tleU9uSW5wdXQiLCJzZWxlY3RCeUtleWRvd24iLCJmaXJlIiwidHlwZSIsImRpc2FibGVkSXRlbSIsInByZXZTZWxlY3RlZEl0ZW0iLCJwcmV2IiwiY3VyciIsIkN1c3RvbUV2ZW50cyIsIm1peGluIiwiY3VzdG9tVGhlbWUiLCJjb250YWluZXJTZWxlY3RvciIsImNzc1N0cmluZyIsImJ1aWxkQWxsIiwic3R5bGVFbCIsImNyZWF0ZVN0eWxlRWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJleGNsdWRlIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImJ1aWxkSW5wdXQiLCJjb21tb24iLCJidWlsZERyb3Bkb3duIiwiYm9yZGVyVG9wIiwiaGVpZ2h0IiwiYnVpbGRJdGVtR3JvdXAiLCJidWlsZEl0ZW0iLCJpbkl0ZW1Hcm91cCIsImxpbmVIZWlnaHQiLCJpY29uIiwiZGlzcGxheSIsImJ1aWxkQ3NzU3RyaW5nIiwiYmFzZSIsImJhc2VUaGVtZSIsImhpZ2hsaWdodGVkIiwiam9pbiIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInRyYW5zZm9ybSIsIm9iaiIsInByb3AiLCJrZXlzIiwic3BsaXQiLCJ0YWdOYW1lIiwiY29udGVudCIsInNldEF0dHJpYnV0ZSIsImdldFNlbGVjdG9yIiwiaWQiLCJlbGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsQ0FBQztBQUNELE87UUNWQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsR0FBRzs7UUFFSDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QjtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGtCQUFrQiw4QkFBOEI7UUFDaEQ7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esb0JBQW9CLDJCQUEyQjtRQUMvQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxtQkFBbUIsY0FBYztRQUNqQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLEtBQUs7UUFDckI7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsWUFBWTtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFPQSxFQUFQO0FBQ0QsR0FwQk07QUFzQlA7Ozs7Ozs7OztBQUtPLE1BQU1rTCxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBbEwsRUFBRSxFQUFJO0FBQy9CLFFBQUksMEJBQVNBLEVBQVQsQ0FBSixFQUFrQjtBQUNoQixhQUFPQSxFQUFQO0FBQ0Q7O0FBRUQsUUFBSUEsRUFBRSxDQUFDbUwsRUFBUCxFQUFXO0FBQ1QsbUJBQVduTCxFQUFFLENBQUNtTCxFQUFkO0FBQ0Q7O0FBRUQsUUFBTWxMLFNBQVMsU0FBT0QsRUFBRSxDQUFDQyxTQUFILENBQWF1SyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCLEdBQTdCLENBQXRCOztBQUNBLFFBQUl2SyxTQUFKLEVBQWU7QUFDYixVQUFNbUwsS0FBSyxHQUFHM0UsUUFBUSxDQUFDNEUsZ0JBQVQsQ0FBMEJwTCxTQUExQixDQUFkOztBQUVBLFVBQUltTCxLQUFLLENBQUNuSyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGVBQU9oQixTQUFQO0FBQ0Q7QUFDRjs7QUFFRCxRQUFNOEssT0FBTyxHQUFHL0ssRUFBRSxDQUFDK0ssT0FBSCxDQUFXTixXQUFYLEVBQWhCO0FBRUEsZ0JBQVVNLE9BQVYsR0FBb0I5SyxTQUFwQjtBQUNELEdBckJNIiwiZmlsZSI6InRvYXN0dWktc2VsZWN0LWJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlNlbGVjdEJveFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0dWlcIl0gPSByb290W1widHVpXCJdIHx8IHt9LCByb290W1widHVpXCJdW1wiU2VsZWN0Qm94XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCJmYmQwMmFlMGVhODhiOWY3ZTg4NlwiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gXCJtYWluXCI7XG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZGlzdFwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3NyYy9qcy9pbmRleC5qc1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFJldHVybnMgdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgZ2l2ZW4gZWxlbWVudCBjYW4gYmUgZm91bmQgaW4gdGhlIGFycmF5LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL3R5cGUvaXNBcnJheScpO1xuXG4vKipcbiAqIEBtb2R1bGUgYXJyYXlcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgZ2l2ZW4gZWxlbWVudCBjYW4gYmUgZm91bmQgaW4gdGhlIGFycmF5XG4gKiBmcm9tIHN0YXJ0IGluZGV4KGRlZmF1bHQgMCksIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50LlxuICogSXQgY29tcGFyZXMgc2VhcmNoRWxlbWVudCB0byBlbGVtZW50cyBvZiB0aGUgQXJyYXkgdXNpbmcgc3RyaWN0IGVxdWFsaXR5XG4gKiAodGhlIHNhbWUgbWV0aG9kIHVzZWQgYnkgdGhlID09PSwgb3IgdHJpcGxlLWVxdWFscywgb3BlcmF0b3IpLlxuICogQHBhcmFtIHsqfSBzZWFyY2hFbGVtZW50IEVsZW1lbnQgdG8gbG9jYXRlIGluIHRoZSBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgdGhhdCB3aWxsIGJlIHRyYXZlcnNlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydEluZGV4IFN0YXJ0IGluZGV4IGluIGFycmF5IGZvciBzZWFyY2hpbmcgKGRlZmF1bHQgMClcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBGaXJzdCBpbmRleCBhdCB3aGljaCBhIGdpdmVuIGVsZW1lbnQsIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmFycmF5XG4gKiBAZXhhbXBsZVxuICogdmFyIGluQXJyYXkgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2FycmF5L2luQXJyYXknKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiB2YXIgYXJyID0gWydvbmUnLCAndHdvJywgJ3RocmVlJywgJ2ZvdXInXTtcbiAqIHZhciBpZHgxID0gaW5BcnJheSgnb25lJywgYXJyLCAzKTsgLy8gLTFcbiAqIHZhciBpZHgyID0gaW5BcnJheSgnb25lJywgYXJyKTsgLy8gMFxuICovXG5mdW5jdGlvbiBpbkFycmF5KHNlYXJjaEVsZW1lbnQsIGFycmF5LCBzdGFydEluZGV4KSB7XG4gICAgdmFyIGk7XG4gICAgdmFyIGxlbmd0aDtcbiAgICBzdGFydEluZGV4ID0gc3RhcnRJbmRleCB8fCAwO1xuXG4gICAgaWYgKCFpc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFycmF5LCBzZWFyY2hFbGVtZW50LCBzdGFydEluZGV4KTtcbiAgICB9XG5cbiAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgZm9yIChpID0gc3RhcnRJbmRleDsgc3RhcnRJbmRleCA+PSAwICYmIGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYXJyYXlbaV0gPT09IHNlYXJjaEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluQXJyYXk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgRXhlY3V0ZSB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgb25jZSBmb3IgZWFjaCBwcm9wZXJ0eSBvZiBvYmplY3Qob3IgZWxlbWVudCBvZiBhcnJheSkgd2hpY2ggYWN0dWFsbHkgZXhpc3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vdHlwZS9pc0FycmF5Jyk7XG52YXIgZm9yRWFjaEFycmF5ID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoQXJyYXknKTtcbnZhciBmb3JFYWNoT3duUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb24vZm9yRWFjaE93blByb3BlcnRpZXMnKTtcblxuLyoqXG4gKiBAbW9kdWxlIGNvbGxlY3Rpb25cbiAqL1xuXG4vKipcbiAqIEV4ZWN1dGUgdGhlIHByb3ZpZGVkIGNhbGxiYWNrIG9uY2UgZm9yIGVhY2ggcHJvcGVydHkgb2Ygb2JqZWN0KG9yIGVsZW1lbnQgb2YgYXJyYXkpIHdoaWNoIGFjdHVhbGx5IGV4aXN0LlxuICogSWYgdGhlIG9iamVjdCBpcyBBcnJheS1saWtlIG9iamVjdChleC1hcmd1bWVudHMgb2JqZWN0KSwgSXQgbmVlZHMgdG8gdHJhbnNmb3JtIHRvIEFycmF5LihzZWUgJ2V4Micgb2YgZXhhbXBsZSkuXG4gKiBJZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSwgdGhlIGxvb3Agd2lsbCBiZSBzdG9wcGVkLlxuICogQ2FsbGJhY2sgZnVuY3Rpb24oaXRlcmF0ZWUpIGlzIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gKiAgLSBUaGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5KG9yIFRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudClcbiAqICAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eShvciBUaGUgaW5kZXggb2YgdGhlIGVsZW1lbnQpXG4gKiAgLSBUaGUgb2JqZWN0IGJlaW5nIHRyYXZlcnNlZFxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRoYXQgd2lsbCBiZSB0cmF2ZXJzZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGl0ZXJhdGVlIENhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIENvbnRleHQodGhpcykgb2YgY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqIHZhciBmb3JFYWNoID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2gnKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiB2YXIgc3VtID0gMDtcbiAqXG4gKiBmb3JFYWNoKFsxLDIsM10sIGZ1bmN0aW9uKHZhbHVlKXtcbiAqICAgICBzdW0gKz0gdmFsdWU7XG4gKiB9KTtcbiAqIGFsZXJ0KHN1bSk7IC8vIDZcbiAqXG4gKiAvLyBJbiBjYXNlIG9mIEFycmF5LWxpa2Ugb2JqZWN0XG4gKiB2YXIgYXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UpOyAvLyBjaGFuZ2UgdG8gYXJyYXlcbiAqIGZvckVhY2goYXJyYXksIGZ1bmN0aW9uKHZhbHVlKXtcbiAqICAgICBzdW0gKz0gdmFsdWU7XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3JFYWNoQXJyYXkob2JqLCBpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yRWFjaE93blByb3BlcnRpZXMob2JqLCBpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2g7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgRXhlY3V0ZSB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5KG9yIEFycmF5LWxpa2Ugb2JqZWN0KSBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRXhlY3V0ZSB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnRcbiAqIGluIHRoZSBhcnJheShvciBBcnJheS1saWtlIG9iamVjdCkgaW4gYXNjZW5kaW5nIG9yZGVyLlxuICogSWYgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgZmFsc2UsIHRoZSBsb29wIHdpbGwgYmUgc3RvcHBlZC5cbiAqIENhbGxiYWNrIGZ1bmN0aW9uKGl0ZXJhdGVlKSBpcyBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICogIC0gVGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50XG4gKiAgLSBUaGUgaW5kZXggb2YgdGhlIGVsZW1lbnRcbiAqICAtIFRoZSBhcnJheShvciBBcnJheS1saWtlIG9iamVjdCkgYmVpbmcgdHJhdmVyc2VkXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIgVGhlIGFycmF5KG9yIEFycmF5LWxpa2Ugb2JqZWN0KSB0aGF0IHdpbGwgYmUgdHJhdmVyc2VkXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBpdGVyYXRlZSBDYWxsYmFjayBmdW5jdGlvblxuICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XSBDb250ZXh0KHRoaXMpIG9mIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbGxlY3Rpb25cbiAqIEBleGFtcGxlXG4gKiB2YXIgZm9yRWFjaEFycmF5ID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hBcnJheScpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIHZhciBzdW0gPSAwO1xuICpcbiAqIGZvckVhY2hBcnJheShbMSwyLDNdLCBmdW5jdGlvbih2YWx1ZSl7XG4gKiAgICAgc3VtICs9IHZhbHVlO1xuICogfSk7XG4gKiBhbGVydChzdW0pOyAvLyA2XG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnIsIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcblxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IG51bGw7XG5cbiAgICBmb3IgKDsgaW5kZXggPCBsZW47IGluZGV4ICs9IDEpIHtcbiAgICAgICAgaWYgKGl0ZXJhdGVlLmNhbGwoY29udGV4dCwgYXJyW2luZGV4XSwgaW5kZXgsIGFycikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoQXJyYXk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgRXhlY3V0ZSB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgb25jZSBmb3IgZWFjaCBwcm9wZXJ0eSBvZiBvYmplY3Qgd2hpY2ggYWN0dWFsbHkgZXhpc3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRXhlY3V0ZSB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgb25jZSBmb3IgZWFjaCBwcm9wZXJ0eSBvZiBvYmplY3Qgd2hpY2ggYWN0dWFsbHkgZXhpc3QuXG4gKiBJZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSwgdGhlIGxvb3Agd2lsbCBiZSBzdG9wcGVkLlxuICogQ2FsbGJhY2sgZnVuY3Rpb24oaXRlcmF0ZWUpIGlzIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gKiAgLSBUaGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiAgLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqICAtIFRoZSBvYmplY3QgYmVpbmcgdHJhdmVyc2VkXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHRyYXZlcnNlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaXRlcmF0ZWUgIENhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIENvbnRleHQodGhpcykgb2YgY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqIHZhciBmb3JFYWNoT3duUHJvcGVydGllcyA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvY29sbGVjdGlvbi9mb3JFYWNoT3duUHJvcGVydGllcycpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIHZhciBzdW0gPSAwO1xuICpcbiAqIGZvckVhY2hPd25Qcm9wZXJ0aWVzKHthOjEsYjoyLGM6M30sIGZ1bmN0aW9uKHZhbHVlKXtcbiAqICAgICBzdW0gKz0gdmFsdWU7XG4gKiB9KTtcbiAqIGFsZXJ0KHN1bSk7IC8vIDZcbiAqL1xuZnVuY3Rpb24gZm9yRWFjaE93blByb3BlcnRpZXMob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciBrZXk7XG5cbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBudWxsO1xuXG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdGVlLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoT3duUHJvcGVydGllcztcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUcmFuc2Zvcm0gdGhlIEFycmF5LWxpa2Ugb2JqZWN0IHRvIEFycmF5LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm9yRWFjaEFycmF5ID0gcmVxdWlyZSgnLi9mb3JFYWNoQXJyYXknKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIEFycmF5LWxpa2Ugb2JqZWN0IHRvIEFycmF5LlxuICogSW4gbG93IElFIChiZWxvdyA4KSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwgaXMgbm90IHBlcmZlY3QuIFNvLCB0cnktY2F0Y2ggc3RhdGVtZW50IGlzIHVzZWQuXG4gKiBAcGFyYW0geyp9IGFycmF5TGlrZSBBcnJheS1saWtlIG9iamVjdFxuICogQHJldHVybnMge0FycmF5fSBBcnJheVxuICogQG1lbWJlcm9mIG1vZHVsZTpjb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogdmFyIHRvQXJyYXkgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2NvbGxlY3Rpb24vdG9BcnJheScpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIHZhciBhcnJheUxpa2UgPSB7XG4gKiAgICAgMDogJ29uZScsXG4gKiAgICAgMTogJ3R3bycsXG4gKiAgICAgMjogJ3RocmVlJyxcbiAqICAgICAzOiAnZm91cicsXG4gKiAgICAgbGVuZ3RoOiA0XG4gKiB9O1xuICogdmFyIHJlc3VsdCA9IHRvQXJyYXkoYXJyYXlMaWtlKTtcbiAqXG4gKiBhbGVydChyZXN1bHQgaW5zdGFuY2VvZiBBcnJheSk7IC8vIHRydWVcbiAqIGFsZXJ0KHJlc3VsdCk7IC8vIG9uZSx0d28sdGhyZWUsZm91clxuICovXG5mdW5jdGlvbiB0b0FycmF5KGFycmF5TGlrZSkge1xuICAgIHZhciBhcnI7XG4gICAgdHJ5IHtcbiAgICAgICAgYXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlMaWtlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGFyciA9IFtdO1xuICAgICAgICBmb3JFYWNoQXJyYXkoYXJyYXlMaWtlLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgYXJyLnB1c2godmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvQXJyYXk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBtb2R1bGUgcHJvdmlkZXMgc29tZSBmdW5jdGlvbnMgZm9yIGN1c3RvbSBldmVudHMuIEFuZCBpdCBpcyBpbXBsZW1lbnRlZCBpbiB0aGUgb2JzZXJ2ZXIgZGVzaWduIHBhdHRlcm4uXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleHRlbmQgPSByZXF1aXJlKCcuLi9vYmplY3QvZXh0ZW5kJyk7XG52YXIgaXNFeGlzdHkgPSByZXF1aXJlKCcuLi90eXBlL2lzRXhpc3R5Jyk7XG52YXIgaXNTdHJpbmcgPSByZXF1aXJlKCcuLi90eXBlL2lzU3RyaW5nJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi90eXBlL2lzT2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL3R5cGUvaXNBcnJheScpO1xudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuLi90eXBlL2lzRnVuY3Rpb24nKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoJyk7XG5cbnZhciBSX0VWRU5UTkFNRV9TUExJVCA9IC9cXHMrL2c7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAZXhhbXBsZVxuICogLy8gbm9kZSwgY29tbW9uanNcbiAqIHZhciBDdXN0b21FdmVudHMgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2N1c3RvbUV2ZW50cy9jdXN0b21FdmVudHMnKTtcbiAqL1xuZnVuY3Rpb24gQ3VzdG9tRXZlbnRzKCkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtIYW5kbGVySXRlbVtdfVxuICAgICAqL1xuICAgIHRoaXMuZXZlbnRzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIG9ubHkgZm9yIGNoZWNraW5nIHNwZWNpZmljIGNvbnRleHQgZXZlbnQgd2FzIGJpbmRlZFxuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKi9cbiAgICB0aGlzLmNvbnRleHRzID0gbnVsbDtcbn1cblxuLyoqXG4gKiBNaXhpbiBjdXN0b20gZXZlbnRzIGZlYXR1cmUgdG8gc3BlY2lmaWMgY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgLSBjb25zdHJ1Y3RvclxuICogQGV4YW1wbGVcbiAqIHZhciBDdXN0b21FdmVudHMgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2N1c3RvbUV2ZW50cy9jdXN0b21FdmVudHMnKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiB2YXIgbW9kZWw7XG4gKiBmdW5jdGlvbiBNb2RlbCgpIHtcbiAqICAgICB0aGlzLm5hbWUgPSAnJztcbiAqIH1cbiAqIEN1c3RvbUV2ZW50cy5taXhpbihNb2RlbCk7XG4gKlxuICogbW9kZWwgPSBuZXcgTW9kZWwoKTtcbiAqIG1vZGVsLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgdGhpcy5uYW1lID0gJ21vZGVsJzsgfSwgdGhpcyk7XG4gKiBtb2RlbC5maXJlKCdjaGFuZ2UnKTtcbiAqIGFsZXJ0KG1vZGVsLm5hbWUpOyAvLyAnbW9kZWwnO1xuICovXG5DdXN0b21FdmVudHMubWl4aW4gPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgZXh0ZW5kKGZ1bmMucHJvdG90eXBlLCBDdXN0b21FdmVudHMucHJvdG90eXBlKTtcbn07XG5cbi8qKlxuICogR2V0IEhhbmRsZXJJdGVtIG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF0gLSBjb250ZXh0IGZvciBoYW5kbGVyXG4gKiBAcmV0dXJucyB7SGFuZGxlckl0ZW19IEhhbmRsZXJJdGVtIG9iamVjdFxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fZ2V0SGFuZGxlckl0ZW0gPSBmdW5jdGlvbihoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIGl0ZW0gPSB7aGFuZGxlcjogaGFuZGxlcn07XG5cbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgICBpdGVtLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtO1xufTtcblxuLyoqXG4gKiBHZXQgZXZlbnQgb2JqZWN0IHNhZmVseVxuICogQHBhcmFtIHtzdHJpbmd9IFtldmVudE5hbWVdIC0gY3JlYXRlIHN1YiBldmVudCBtYXAgaWYgbm90IGV4aXN0LlxuICogQHJldHVybnMgeyhvYmplY3R8YXJyYXkpfSBldmVudCBvYmplY3QuIGlmIHlvdSBzdXBwbGllZCBgZXZlbnROYW1lYFxuICogIHBhcmFtZXRlciB0aGVuIG1ha2UgbmV3IGFycmF5IGFuZCByZXR1cm4gaXRcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX3NhZmVFdmVudCA9IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgIHZhciBldmVudHMgPSB0aGlzLmV2ZW50cztcbiAgICB2YXIgYnlOYW1lO1xuXG4gICAgaWYgKCFldmVudHMpIHtcbiAgICAgICAgZXZlbnRzID0gdGhpcy5ldmVudHMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnROYW1lKSB7XG4gICAgICAgIGJ5TmFtZSA9IGV2ZW50c1tldmVudE5hbWVdO1xuXG4gICAgICAgIGlmICghYnlOYW1lKSB7XG4gICAgICAgICAgICBieU5hbWUgPSBbXTtcbiAgICAgICAgICAgIGV2ZW50c1tldmVudE5hbWVdID0gYnlOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRzID0gYnlOYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBldmVudHM7XG59O1xuXG4vKipcbiAqIEdldCBjb250ZXh0IGFycmF5IHNhZmVseVxuICogQHJldHVybnMge2FycmF5fSBjb250ZXh0IGFycmF5XG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9zYWZlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0cztcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xufTtcblxuLyoqXG4gKiBHZXQgaW5kZXggb2YgY29udGV4dFxuICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIGNvbnRleHQgdGhhdCB1c2VkIGZvciBiaW5kIGN1c3RvbSBldmVudFxuICogQHJldHVybnMge251bWJlcn0gaW5kZXggb2YgY29udGV4dFxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5faW5kZXhPZkNvbnRleHQgPSBmdW5jdGlvbihjdHgpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuX3NhZmVDb250ZXh0KCk7XG4gICAgdmFyIGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChjb250ZXh0W2luZGV4XSkge1xuICAgICAgICBpZiAoY3R4ID09PSBjb250ZXh0W2luZGV4XVswXSkge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG59O1xuXG4vKipcbiAqIE1lbW9yaXplIHN1cHBsaWVkIGNvbnRleHQgZm9yIHJlY29nbml6ZSBzdXBwbGllZCBvYmplY3QgaXMgY29udGV4dCBvclxuICogIG5hbWU6IGhhbmRsZXIgcGFpciBvYmplY3Qgd2hlbiBvZmYoKVxuICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIGNvbnRleHQgb2JqZWN0IHRvIG1lbW9yaXplXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9tZW1vcml6ZUNvbnRleHQgPSBmdW5jdGlvbihjdHgpIHtcbiAgICB2YXIgY29udGV4dCwgaW5kZXg7XG5cbiAgICBpZiAoIWlzRXhpc3R5KGN0eCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQgPSB0aGlzLl9zYWZlQ29udGV4dCgpO1xuICAgIGluZGV4ID0gdGhpcy5faW5kZXhPZkNvbnRleHQoY3R4KTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbnRleHRbaW5kZXhdWzFdICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5wdXNoKFtjdHgsIDFdKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEZvcmdldCBzdXBwbGllZCBjb250ZXh0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIGNvbnRleHQgb2JqZWN0IHRvIGZvcmdldFxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fZm9yZ2V0Q29udGV4dCA9IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBjb250ZXh0LCBjb250ZXh0SW5kZXg7XG5cbiAgICBpZiAoIWlzRXhpc3R5KGN0eCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQgPSB0aGlzLl9zYWZlQ29udGV4dCgpO1xuICAgIGNvbnRleHRJbmRleCA9IHRoaXMuX2luZGV4T2ZDb250ZXh0KGN0eCk7XG5cbiAgICBpZiAoY29udGV4dEluZGV4ID4gLTEpIHtcbiAgICAgICAgY29udGV4dFtjb250ZXh0SW5kZXhdWzFdIC09IDE7XG5cbiAgICAgICAgaWYgKGNvbnRleHRbY29udGV4dEluZGV4XVsxXSA8PSAwKSB7XG4gICAgICAgICAgICBjb250ZXh0LnNwbGljZShjb250ZXh0SW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBCaW5kIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7KHN0cmluZ3x7bmFtZTpzdHJpbmcsIGhhbmRsZXI6ZnVuY3Rpb259KX0gZXZlbnROYW1lIC0gY3VzdG9tXG4gKiAgZXZlbnQgbmFtZSBvciBhbiBvYmplY3Qge2V2ZW50TmFtZTogaGFuZGxlcn1cbiAqIEBwYXJhbSB7KGZ1bmN0aW9ufG9iamVjdCl9IFtoYW5kbGVyXSAtIGhhbmRsZXIgZnVuY3Rpb24gb3IgY29udGV4dFxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XSAtIGNvbnRleHQgZm9yIGJpbmRpbmdcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX2JpbmRFdmVudCA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICAgIHZhciBldmVudHMgPSB0aGlzLl9zYWZlRXZlbnQoZXZlbnROYW1lKTtcbiAgICB0aGlzLl9tZW1vcml6ZUNvbnRleHQoY29udGV4dCk7XG4gICAgZXZlbnRzLnB1c2godGhpcy5fZ2V0SGFuZGxlckl0ZW0oaGFuZGxlciwgY29udGV4dCkpO1xufTtcblxuLyoqXG4gKiBCaW5kIGV2ZW50IGhhbmRsZXJzXG4gKiBAcGFyYW0geyhzdHJpbmd8e25hbWU6c3RyaW5nLCBoYW5kbGVyOmZ1bmN0aW9ufSl9IGV2ZW50TmFtZSAtIGN1c3RvbVxuICogIGV2ZW50IG5hbWUgb3IgYW4gb2JqZWN0IHtldmVudE5hbWU6IGhhbmRsZXJ9XG4gKiBAcGFyYW0geyhmdW5jdGlvbnxvYmplY3QpfSBbaGFuZGxlcl0gLSBoYW5kbGVyIGZ1bmN0aW9uIG9yIGNvbnRleHRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF0gLSBjb250ZXh0IGZvciBiaW5kaW5nXG4gKiAvLy0tICMxLiBHZXQgTW9kdWxlIC0tLy9cbiAqIHZhciBDdXN0b21FdmVudHMgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L2N1c3RvbUV2ZW50cy9jdXN0b21FdmVudHMnKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiAvLy0tICMyLiBVc2UgbWV0aG9kIC0tLy9cbiAqIC8vICMgMi4xIEJhc2ljIFVzYWdlXG4gKiBDdXN0b21FdmVudHMub24oJ29ubG9hZCcsIGhhbmRsZXIpO1xuICpcbiAqIC8vICMgMi4yIFdpdGggY29udGV4dFxuICogQ3VzdG9tRXZlbnRzLm9uKCdvbmxvYWQnLCBoYW5kbGVyLCBteU9iaik7XG4gKlxuICogLy8gIyAyLjMgQmluZCBieSBvYmplY3QgdGhhdCBuYW1lLCBoYW5kbGVyIHBhaXJzXG4gKiBDdXN0b21FdmVudHMub24oe1xuICogICAgICdwbGF5JzogaGFuZGxlcixcbiAqICAgICAncGF1c2UnOiBoYW5kbGVyMlxuICogfSk7XG4gKlxuICogLy8gIyAyLjQgQmluZCBieSBvYmplY3QgdGhhdCBuYW1lLCBoYW5kbGVyIHBhaXJzIHdpdGggY29udGV4dCBvYmplY3RcbiAqIEN1c3RvbUV2ZW50cy5vbih7XG4gKiAgICAgJ3BsYXknOiBoYW5kbGVyXG4gKiB9LCBteU9iaik7XG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoaXNTdHJpbmcoZXZlbnROYW1lKSkge1xuICAgICAgICAvLyBbc3ludGF4IDEsIDJdXG4gICAgICAgIGV2ZW50TmFtZSA9IGV2ZW50TmFtZS5zcGxpdChSX0VWRU5UTkFNRV9TUExJVCk7XG4gICAgICAgIGZvckVhY2goZXZlbnROYW1lLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICBzZWxmLl9iaW5kRXZlbnQobmFtZSwgaGFuZGxlciwgY29udGV4dCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoZXZlbnROYW1lKSkge1xuICAgICAgICAvLyBbc3ludGF4IDMsIDRdXG4gICAgICAgIGNvbnRleHQgPSBoYW5kbGVyO1xuICAgICAgICBmb3JFYWNoKGV2ZW50TmFtZSwgZnVuY3Rpb24oZnVuYywgbmFtZSkge1xuICAgICAgICAgICAgc2VsZi5vbihuYW1lLCBmdW5jLCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBCaW5kIG9uZS1zaG90IGV2ZW50IGhhbmRsZXJzXG4gKiBAcGFyYW0geyhzdHJpbmd8e25hbWU6c3RyaW5nLGhhbmRsZXI6ZnVuY3Rpb259KX0gZXZlbnROYW1lIC0gY3VzdG9tXG4gKiAgZXZlbnQgbmFtZSBvciBhbiBvYmplY3Qge2V2ZW50TmFtZTogaGFuZGxlcn1cbiAqIEBwYXJhbSB7ZnVuY3Rpb258b2JqZWN0fSBbaGFuZGxlcl0gLSBoYW5kbGVyIGZ1bmN0aW9uIG9yIGNvbnRleHRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF0gLSBjb250ZXh0IGZvciBiaW5kaW5nXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmIChpc09iamVjdChldmVudE5hbWUpKSB7XG4gICAgICAgIGNvbnRleHQgPSBoYW5kbGVyO1xuICAgICAgICBmb3JFYWNoKGV2ZW50TmFtZSwgZnVuY3Rpb24oZnVuYywgbmFtZSkge1xuICAgICAgICAgICAgc2VsZi5vbmNlKG5hbWUsIGZ1bmMsIGNvbnRleHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25jZUhhbmRsZXIoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVxdWlyZS1qc2RvY1xuICAgICAgICBoYW5kbGVyLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgICAgIHNlbGYub2ZmKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHRoaXMub24oZXZlbnROYW1lLCBvbmNlSGFuZGxlciwgY29udGV4dCk7XG59O1xuXG4vKipcbiAqIFNwbGljZSBzdXBwbGllZCBhcnJheSBieSBjYWxsYmFjayByZXN1bHRcbiAqIEBwYXJhbSB7YXJyYXl9IGFyciAtIGFycmF5IHRvIHNwbGljZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gcHJlZGljYXRlIC0gZnVuY3Rpb24gcmV0dXJuIGJvb2xlYW5cbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX3NwbGljZU1hdGNoZXMgPSBmdW5jdGlvbihhcnIsIHByZWRpY2F0ZSkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuO1xuXG4gICAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoYXJyW2ldKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGxlbiAtPSAxO1xuICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBHZXQgbWF0Y2hlciBmb3IgdW5iaW5kIHNwZWNpZmljIGhhbmRsZXIgZXZlbnRzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gaGFuZGxlciBmdW5jdGlvblxuICogQHJldHVybnMge2Z1bmN0aW9ufSBoYW5kbGVyIG1hdGNoZXJcbiAqIEBwcml2YXRlXG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuX21hdGNoSGFuZGxlciA9IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgbmVlZFJlbW92ZSA9IGhhbmRsZXIgPT09IGl0ZW0uaGFuZGxlcjtcblxuICAgICAgICBpZiAobmVlZFJlbW92ZSkge1xuICAgICAgICAgICAgc2VsZi5fZm9yZ2V0Q29udGV4dChpdGVtLmNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5lZWRSZW1vdmU7XG4gICAgfTtcbn07XG5cbi8qKlxuICogR2V0IG1hdGNoZXIgZm9yIHVuYmluZCBzcGVjaWZpYyBjb250ZXh0IGV2ZW50c1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBjb250ZXh0XG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IG9iamVjdCBtYXRjaGVyXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9tYXRjaENvbnRleHQgPSBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIG5lZWRSZW1vdmUgPSBjb250ZXh0ID09PSBpdGVtLmNvbnRleHQ7XG5cbiAgICAgICAgaWYgKG5lZWRSZW1vdmUpIHtcbiAgICAgICAgICAgIHNlbGYuX2ZvcmdldENvbnRleHQoaXRlbS5jb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZWVkUmVtb3ZlO1xuICAgIH07XG59O1xuXG4vKipcbiAqIEdldCBtYXRjaGVyIGZvciB1bmJpbmQgc3BlY2lmaWMgaGFuZGVyLCBjb250ZXh0IHBhaXIgZXZlbnRzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gaGFuZGxlciBmdW5jdGlvblxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBjb250ZXh0XG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IGhhbmRsZXIsIGNvbnRleHQgbWF0Y2hlclxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fbWF0Y2hIYW5kbGVyQW5kQ29udGV4dCA9IGZ1bmN0aW9uKGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgbWF0Y2hIYW5kbGVyID0gKGhhbmRsZXIgPT09IGl0ZW0uaGFuZGxlcik7XG4gICAgICAgIHZhciBtYXRjaENvbnRleHQgPSAoY29udGV4dCA9PT0gaXRlbS5jb250ZXh0KTtcbiAgICAgICAgdmFyIG5lZWRSZW1vdmUgPSAobWF0Y2hIYW5kbGVyICYmIG1hdGNoQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKG5lZWRSZW1vdmUpIHtcbiAgICAgICAgICAgIHNlbGYuX2ZvcmdldENvbnRleHQoaXRlbS5jb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZWVkUmVtb3ZlO1xuICAgIH07XG59O1xuXG4vKipcbiAqIFVuYmluZCBldmVudCBieSBldmVudCBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gY3VzdG9tIGV2ZW50IG5hbWUgdG8gdW5iaW5kXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlcl0gLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9vZmZCeUV2ZW50TmFtZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYW5kQnlIYW5kbGVyID0gaXNGdW5jdGlvbihoYW5kbGVyKTtcbiAgICB2YXIgbWF0Y2hIYW5kbGVyID0gc2VsZi5fbWF0Y2hIYW5kbGVyKGhhbmRsZXIpO1xuXG4gICAgZXZlbnROYW1lID0gZXZlbnROYW1lLnNwbGl0KFJfRVZFTlROQU1FX1NQTElUKTtcblxuICAgIGZvckVhY2goZXZlbnROYW1lLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHZhciBoYW5kbGVySXRlbXMgPSBzZWxmLl9zYWZlRXZlbnQobmFtZSk7XG5cbiAgICAgICAgaWYgKGFuZEJ5SGFuZGxlcikge1xuICAgICAgICAgICAgc2VsZi5fc3BsaWNlTWF0Y2hlcyhoYW5kbGVySXRlbXMsIG1hdGNoSGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JFYWNoKGhhbmRsZXJJdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2ZvcmdldENvbnRleHQoaXRlbS5jb250ZXh0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZWxmLmV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFVuYmluZCBldmVudCBieSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gaGFuZGxlciBmdW5jdGlvblxuICogQHByaXZhdGVcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5fb2ZmQnlIYW5kbGVyID0gZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbWF0Y2hIYW5kbGVyID0gdGhpcy5fbWF0Y2hIYW5kbGVyKGhhbmRsZXIpO1xuXG4gICAgZm9yRWFjaCh0aGlzLl9zYWZlRXZlbnQoKSwgZnVuY3Rpb24oaGFuZGxlckl0ZW1zKSB7XG4gICAgICAgIHNlbGYuX3NwbGljZU1hdGNoZXMoaGFuZGxlckl0ZW1zLCBtYXRjaEhhbmRsZXIpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBVbmJpbmQgZXZlbnQgYnkgb2JqZWN0KG5hbWU6IGhhbmRsZXIgcGFpciBvYmplY3Qgb3IgY29udGV4dCBvYmplY3QpXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gY29udGV4dCBvciB7bmFtZTogaGFuZGxlcn0gcGFpciBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLl9vZmZCeU9iamVjdCA9IGZ1bmN0aW9uKG9iaiwgaGFuZGxlcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbWF0Y2hGdW5jO1xuXG4gICAgaWYgKHRoaXMuX2luZGV4T2ZDb250ZXh0KG9iaikgPCAwKSB7XG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbihmdW5jLCBuYW1lKSB7XG4gICAgICAgICAgICBzZWxmLm9mZihuYW1lLCBmdW5jKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhoYW5kbGVyKSkge1xuICAgICAgICBtYXRjaEZ1bmMgPSB0aGlzLl9tYXRjaENvbnRleHQob2JqKTtcblxuICAgICAgICBzZWxmLl9zcGxpY2VNYXRjaGVzKHRoaXMuX3NhZmVFdmVudChoYW5kbGVyKSwgbWF0Y2hGdW5jKTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICAgICAgbWF0Y2hGdW5jID0gdGhpcy5fbWF0Y2hIYW5kbGVyQW5kQ29udGV4dChoYW5kbGVyLCBvYmopO1xuXG4gICAgICAgIGZvckVhY2godGhpcy5fc2FmZUV2ZW50KCksIGZ1bmN0aW9uKGhhbmRsZXJJdGVtcykge1xuICAgICAgICAgICAgc2VsZi5fc3BsaWNlTWF0Y2hlcyhoYW5kbGVySXRlbXMsIG1hdGNoRnVuYyk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGNoRnVuYyA9IHRoaXMuX21hdGNoQ29udGV4dChvYmopO1xuXG4gICAgICAgIGZvckVhY2godGhpcy5fc2FmZUV2ZW50KCksIGZ1bmN0aW9uKGhhbmRsZXJJdGVtcykge1xuICAgICAgICAgICAgc2VsZi5fc3BsaWNlTWF0Y2hlcyhoYW5kbGVySXRlbXMsIG1hdGNoRnVuYyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8qKlxuICogVW5iaW5kIGN1c3RvbSBldmVudHNcbiAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3R8ZnVuY3Rpb24pfSBldmVudE5hbWUgLSBldmVudCBuYW1lIG9yIGNvbnRleHQgb3JcbiAqICB7bmFtZTogaGFuZGxlcn0gcGFpciBvYmplY3Qgb3IgaGFuZGxlciBmdW5jdGlvblxuICogQHBhcmFtIHsoZnVuY3Rpb24pfSBoYW5kbGVyIC0gaGFuZGxlciBmdW5jdGlvblxuICogQGV4YW1wbGVcbiAqIC8vLS0gIzEuIEdldCBNb2R1bGUgLS0vL1xuICogdmFyIEN1c3RvbUV2ZW50cyA9IHJlcXVpcmUoJ3R1aS1jb2RlLXNuaXBwZXQvY3VzdG9tRXZlbnRzL2N1c3RvbUV2ZW50cycpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIC8vLS0gIzIuIFVzZSBtZXRob2QgLS0vL1xuICogLy8gIyAyLjEgb2ZmIGJ5IGV2ZW50IG5hbWVcbiAqIEN1c3RvbUV2ZW50cy5vZmYoJ29ubG9hZCcpO1xuICpcbiAqIC8vICMgMi4yIG9mZiBieSBldmVudCBuYW1lIGFuZCBoYW5kbGVyXG4gKiBDdXN0b21FdmVudHMub2ZmKCdwbGF5JywgaGFuZGxlcik7XG4gKlxuICogLy8gIyAyLjMgb2ZmIGJ5IGhhbmRsZXJcbiAqIEN1c3RvbUV2ZW50cy5vZmYoaGFuZGxlcik7XG4gKlxuICogLy8gIyAyLjQgb2ZmIGJ5IGNvbnRleHRcbiAqIEN1c3RvbUV2ZW50cy5vZmYobXlPYmopO1xuICpcbiAqIC8vICMgMi41IG9mZiBieSBjb250ZXh0IGFuZCBoYW5kbGVyXG4gKiBDdXN0b21FdmVudHMub2ZmKG15T2JqLCBoYW5kbGVyKTtcbiAqXG4gKiAvLyAjIDIuNiBvZmYgYnkgY29udGV4dCBhbmQgZXZlbnQgbmFtZVxuICogQ3VzdG9tRXZlbnRzLm9mZihteU9iaiwgJ29ubG9hZCcpO1xuICpcbiAqIC8vICMgMi43IG9mZiBieSBhbiBPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+IHRoYXQgaXMge2V2ZW50TmFtZTogaGFuZGxlcn1cbiAqIEN1c3RvbUV2ZW50cy5vZmYoe1xuICogICAncGxheSc6IGhhbmRsZXIsXG4gKiAgICdwYXVzZSc6IGhhbmRsZXIyXG4gKiB9KTtcbiAqXG4gKiAvLyAjIDIuOCBvZmYgdGhlIGFsbCBldmVudHNcbiAqIEN1c3RvbUV2ZW50cy5vZmYoKTtcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoaXNTdHJpbmcoZXZlbnROYW1lKSkge1xuICAgICAgICAvLyBbc3ludGF4IDEsIDJdXG4gICAgICAgIHRoaXMuX29mZkJ5RXZlbnROYW1lKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgfSBlbHNlIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAvLyBbc3ludGF4IDhdXG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oZXZlbnROYW1lKSkge1xuICAgICAgICAvLyBbc3ludGF4IDNdXG4gICAgICAgIHRoaXMuX29mZkJ5SGFuZGxlcihldmVudE5hbWUpO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoZXZlbnROYW1lKSkge1xuICAgICAgICAvLyBbc3ludGF4IDQsIDUsIDZdXG4gICAgICAgIHRoaXMuX29mZkJ5T2JqZWN0KGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgfVxufTtcblxuLyoqXG4gKiBGaXJlIGN1c3RvbSBldmVudFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIG5hbWUgb2YgY3VzdG9tIGV2ZW50XG4gKi9cbkN1c3RvbUV2ZW50cy5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSkgeyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHRoaXMuaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEZpcmUgYSBldmVudCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIG9wZXJhdGlvbiAnYm9vbGVhbiBBTkQnIHdpdGggYWxsXG4gKiAgbGlzdGVuZXIncyByZXN1bHRzLlxuICpcbiAqIFNvLCBJdCBpcyBkaWZmZXJlbnQgZnJvbSB7QGxpbmsgQ3VzdG9tRXZlbnRzI2ZpcmV9LlxuICpcbiAqIEluIHNlcnZpY2UgY29kZSwgdXNlIHRoaXMgYXMgYSBiZWZvcmUgZXZlbnQgaW4gY29tcG9uZW50IGxldmVsIHVzdWFsbHlcbiAqICBmb3Igbm90aWZ5aW5nIHRoYXQgdGhlIGV2ZW50IGlzIGNhbmNlbGFibGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gQ3VzdG9tIGV2ZW50IG5hbWVcbiAqIEBwYXJhbSB7Li4uKn0gZGF0YSAtIERhdGEgZm9yIGV2ZW50XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVGhlIHJlc3VsdCBvZiBvcGVyYXRpb24gJ2Jvb2xlYW4gQU5EJ1xuICogQGV4YW1wbGVcbiAqIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gKiBtYXAub24oe1xuICogICAgICdiZWZvcmVab29tJzogZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgIC8vIEl0IHNob3VsZCBjYW5jZWwgdGhlICd6b29tJyBldmVudCBieSBzb21lIGNvbmRpdGlvbnMuXG4gKiAgICAgICAgIGlmICh0aGF0LmRpc2FibGVkICYmIHRoaXMuZ2V0U3RhdGUoKSkge1xuICogICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICogICAgICAgICB9XG4gKiAgICAgICAgIHJldHVybiB0cnVlO1xuICogICAgIH1cbiAqIH0pO1xuICpcbiAqIGlmICh0aGlzLmludm9rZSgnYmVmb3JlWm9vbScpKSB7ICAgIC8vIGNoZWNrIHRoZSByZXN1bHQgb2YgJ2JlZm9yZVpvb20nXG4gKiAgICAgLy8gaWYgdHJ1ZSxcbiAqICAgICAvLyBkb1NvbWV0aGluZ1xuICogfVxuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgIHZhciBldmVudHMsIGFyZ3MsIGluZGV4LCBpdGVtO1xuXG4gICAgaWYgKCF0aGlzLmhhc0xpc3RlbmVyKGV2ZW50TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZXZlbnRzID0gdGhpcy5fc2FmZUV2ZW50KGV2ZW50TmFtZSk7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGV2ZW50c1tpbmRleF0pIHtcbiAgICAgICAgaXRlbSA9IGV2ZW50c1tpbmRleF07XG5cbiAgICAgICAgaWYgKGl0ZW0uaGFuZGxlci5hcHBseShpdGVtLmNvbnRleHQsIGFyZ3MpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHdoZXRoZXIgYXQgbGVhc3Qgb25lIG9mIHRoZSBoYW5kbGVycyBpcyByZWdpc3RlcmVkIGluIHRoZSBnaXZlblxuICogIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gQ3VzdG9tIGV2ZW50IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyB0aGVyZSBhdCBsZWFzdCBvbmUgaGFuZGxlciBpbiBldmVudCBuYW1lP1xuICovXG5DdXN0b21FdmVudHMucHJvdG90eXBlLmhhc0xpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdGVuZXJMZW5ndGgoZXZlbnROYW1lKSA+IDA7XG59O1xuXG4vKipcbiAqIFJldHVybiBhIGNvdW50IG9mIGV2ZW50cyByZWdpc3RlcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIEN1c3RvbSBldmVudCBuYW1lXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBudW1iZXIgb2YgZXZlbnRcbiAqL1xuQ3VzdG9tRXZlbnRzLnByb3RvdHlwZS5nZXRMaXN0ZW5lckxlbmd0aCA9IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgIHZhciBldmVudHMgPSB0aGlzLl9zYWZlRXZlbnQoZXZlbnROYW1lKTtcblxuICAgIHJldHVybiBldmVudHMubGVuZ3RoO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21FdmVudHM7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgR2V0IGV2ZW50IGNvbGxlY3Rpb24gZm9yIHNwZWNpZmljIEhUTUwgZWxlbWVudFxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVZFTlRfS0VZID0gJ19mZUV2ZW50S2V5JztcblxuLyoqXG4gKiBHZXQgZXZlbnQgY29sbGVjdGlvbiBmb3Igc3BlY2lmaWMgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIGV2ZW50IHR5cGVcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhZmVFdmVudChlbGVtZW50LCB0eXBlKSB7XG4gICAgdmFyIGV2ZW50cyA9IGVsZW1lbnRbRVZFTlRfS0VZXTtcbiAgICB2YXIgaGFuZGxlcnM7XG5cbiAgICBpZiAoIWV2ZW50cykge1xuICAgICAgICBldmVudHMgPSBlbGVtZW50W0VWRU5UX0tFWV0gPSB7fTtcbiAgICB9XG5cbiAgICBoYW5kbGVycyA9IGV2ZW50c1t0eXBlXTtcbiAgICBpZiAoIWhhbmRsZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZXZlbnRzW3R5cGVdID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhbmRsZXJzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNhZmVFdmVudDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBHZXQgYSB0YXJnZXQgZWxlbWVudCBmcm9tIGFuIGV2ZW50IG9iamVjdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBHZXQgYSB0YXJnZXQgZWxlbWVudCBmcm9tIGFuIGV2ZW50IG9iamVjdC5cbiAqIEBwYXJhbSB7RXZlbnR9IGUgLSBldmVudCBvYmplY3RcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSB0YXJnZXQgZWxlbWVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpkb21FdmVudFxuICovXG5mdW5jdGlvbiBnZXRUYXJnZXQoZSkge1xuICAgIHJldHVybiBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFVuYmluZCBET00gZXZlbnRzXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1N0cmluZyA9IHJlcXVpcmUoJy4uL3R5cGUvaXNTdHJpbmcnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoJyk7XG5cbnZhciBzYWZlRXZlbnQgPSByZXF1aXJlKCcuL19zYWZlRXZlbnQnKTtcblxuLyoqXG4gKiBVbmJpbmQgRE9NIGV2ZW50c1xuICogSWYgYSBoYW5kbGVyIGZ1bmN0aW9uIGlzIG5vdCBwYXNzZWQsIHJlbW92ZSBhbGwgZXZlbnRzIG9mIHRoYXQgdHlwZS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IHRvIHVuYmluZGJpbmQgZXZlbnRzXG4gKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gdHlwZXMgLSBTcGFjZSBzcGxpdHRlZCBldmVudHMgbmFtZXMgb3JcbiAqICBldmVudE5hbWU6aGFuZGxlciBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyXSAtIGhhbmRsZXIgZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZG9tRXZlbnRcbiAqL1xuZnVuY3Rpb24gb2ZmKGVsZW1lbnQsIHR5cGVzLCBoYW5kbGVyKSB7XG4gICAgaWYgKGlzU3RyaW5nKHR5cGVzKSkge1xuICAgICAgICBmb3JFYWNoKHR5cGVzLnNwbGl0KC9cXHMrL2cpLCBmdW5jdGlvbih0eXBlKSB7XG4gICAgICAgICAgICB1bmJpbmRFdmVudChlbGVtZW50LCB0eXBlLCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvckVhY2godHlwZXMsIGZ1bmN0aW9uKGZ1bmMsIHR5cGUpIHtcbiAgICAgICAgdW5iaW5kRXZlbnQoZWxlbWVudCwgdHlwZSwgZnVuYyk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogVW5iaW5kIERPTSBldmVudHNcbiAqIElmIGEgaGFuZGxlciBmdW5jdGlvbiBpcyBub3QgcGFzc2VkLCByZW1vdmUgYWxsIGV2ZW50cyBvZiB0aGF0IHR5cGUuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byB1bmJpbmQgZXZlbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIGV2ZW50cyBuYW1lXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlcl0gLSBoYW5kbGVyIGZ1bmN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB1bmJpbmRFdmVudChlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgdmFyIGV2ZW50cyA9IHNhZmVFdmVudChlbGVtZW50LCB0eXBlKTtcbiAgICB2YXIgaW5kZXg7XG5cbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgZm9yRWFjaChldmVudHMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaXRlbS53cmFwcGVkSGFuZGxlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudHMuc3BsaWNlKDAsIGV2ZW50cy5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbihpdGVtLCBpZHgpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyID09PSBpdGVtLmhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIHR5cGUsIGl0ZW0ud3JhcHBlZEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaWR4O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEFuIGVsZW1lbnQgdG8gcmVtb3ZlIGFuIGV2ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIGV2ZW50IHR5cGVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBldmVudCBoYW5kbGVyXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICBpZiAoJ3JlbW92ZUV2ZW50TGlzdGVuZXInIGluIGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpO1xuICAgIH0gZWxzZSBpZiAoJ2RldGFjaEV2ZW50JyBpbiBlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuZGV0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGhhbmRsZXIpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvZmY7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQmluZCBET00gZXZlbnRzXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1N0cmluZyA9IHJlcXVpcmUoJy4uL3R5cGUvaXNTdHJpbmcnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoJyk7XG5cbnZhciBzYWZlRXZlbnQgPSByZXF1aXJlKCcuL19zYWZlRXZlbnQnKTtcblxuLyoqXG4gKiBCaW5kIERPTSBldmVudHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IHRvIGJpbmQgZXZlbnRzXG4gKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gdHlwZXMgLSBTcGFjZSBzcGxpdHRlZCBldmVudHMgbmFtZXMgb3JcbiAqICBldmVudE5hbWU6aGFuZGxlciBvYmplY3RcbiAqIEBwYXJhbSB7KGZ1bmN0aW9ufG9iamVjdCl9IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uIG9yIGNvbnRleHQgZm9yIGhhbmRsZXJcbiAqICBtZXRob2RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF0gY29udGV4dCAtIGNvbnRleHQgZm9yIGhhbmRsZXIgbWV0aG9kLlxuICogQG1lbWJlcm9mIG1vZHVsZTpkb21FdmVudFxuICovXG5mdW5jdGlvbiBvbihlbGVtZW50LCB0eXBlcywgaGFuZGxlciwgY29udGV4dCkge1xuICAgIGlmIChpc1N0cmluZyh0eXBlcykpIHtcbiAgICAgICAgZm9yRWFjaCh0eXBlcy5zcGxpdCgvXFxzKy9nKSwgZnVuY3Rpb24odHlwZSkge1xuICAgICAgICAgICAgYmluZEV2ZW50KGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIGNvbnRleHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yRWFjaCh0eXBlcywgZnVuY3Rpb24oZnVuYywgdHlwZSkge1xuICAgICAgICBiaW5kRXZlbnQoZWxlbWVudCwgdHlwZSwgZnVuYywgaGFuZGxlcik7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQmluZCBET00gZXZlbnRzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kIGV2ZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBldmVudHMgbmFtZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIGhhbmRsZXIgZnVuY3Rpb24gb3IgY29udGV4dCBmb3IgaGFuZGxlclxuICogIG1ldGhvZFxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XSBjb250ZXh0IC0gY29udGV4dCBmb3IgaGFuZGxlciBtZXRob2QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBiaW5kRXZlbnQoZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgY29udGV4dCkge1xuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gZXZlbnRIYW5kbGVyKGUpIHtcbiAgICAgICAgaGFuZGxlci5jYWxsKGNvbnRleHQgfHwgZWxlbWVudCwgZSB8fCB3aW5kb3cuZXZlbnQpO1xuICAgIH1cblxuICAgIGlmICgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZXZlbnRIYW5kbGVyKTtcbiAgICB9IGVsc2UgaWYgKCdhdHRhY2hFdmVudCcgaW4gZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KCdvbicgKyB0eXBlLCBldmVudEhhbmRsZXIpO1xuICAgIH1cbiAgICBtZW1vcml6ZUhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgZXZlbnRIYW5kbGVyKTtcbn1cblxuLyoqXG4gKiBNZW1vcml6ZSBET00gZXZlbnQgaGFuZGxlciBmb3IgdW5iaW5kaW5nLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZCBldmVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gZXZlbnRzIG5hbWVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBoYW5kbGVyIGZ1bmN0aW9uIHRoYXQgdXNlciBwYXNzZWQgYXQgb24oKSB1c2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZWRIYW5kbGVyIC0gaGFuZGxlciBmdW5jdGlvbiB0aGF0IHdyYXBwZWQgYnkgZG9tZXZlbnQgZm9yIGltcGxlbWVudGluZyBzb21lIGZlYXR1cmVzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtZW1vcml6ZUhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgd3JhcHBlZEhhbmRsZXIpIHtcbiAgICB2YXIgZXZlbnRzID0gc2FmZUV2ZW50KGVsZW1lbnQsIHR5cGUpO1xuICAgIHZhciBleGlzdEluRXZlbnRzID0gZmFsc2U7XG5cbiAgICBmb3JFYWNoKGV2ZW50cywgZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFuZGxlciA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgZXhpc3RJbkV2ZW50cyA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgaWYgKCFleGlzdEluRXZlbnRzKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgICAgICB3cmFwcGVkSGFuZGxlcjogd3JhcHBlZEhhbmRsZXJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9uO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFByZXZlbnQgZGVmYXVsdCBhY3Rpb25cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBQcmV2ZW50IGRlZmF1bHQgYWN0aW9uXG4gKiBAcGFyYW0ge0V2ZW50fSBlIC0gZXZlbnQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbUV2ZW50XG4gKi9cbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcmV2ZW50RGVmYXVsdDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBTZXQgY2xhc3NOYW1lIHZhbHVlXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vdHlwZS9pc0FycmF5Jyk7XG52YXIgaXNVbmRlZmluZWQgPSByZXF1aXJlKCcuLi90eXBlL2lzVW5kZWZpbmVkJyk7XG5cbi8qKlxuICogU2V0IGNsYXNzTmFtZSB2YWx1ZVxuICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8U1ZHRWxlbWVudCl9IGVsZW1lbnQgLSB0YXJnZXQgZWxlbWVudFxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY3NzQ2xhc3MgLSBjbGFzcyBuYW1lc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0Q2xhc3NOYW1lKGVsZW1lbnQsIGNzc0NsYXNzKSB7XG4gICAgY3NzQ2xhc3MgPSBpc0FycmF5KGNzc0NsYXNzKSA/IGNzc0NsYXNzLmpvaW4oJyAnKSA6IGNzc0NsYXNzO1xuXG4gICAgY3NzQ2xhc3MgPSBjc3NDbGFzcy5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xuXG4gICAgaWYgKGlzVW5kZWZpbmVkKGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ2xhc3M7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgPSBjc3NDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDbGFzc05hbWU7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQWRkIGNzcyBjbGFzcyB0byBlbGVtZW50XG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vY29sbGVjdGlvbi9mb3JFYWNoJyk7XG52YXIgaW5BcnJheSA9IHJlcXVpcmUoJy4uL2FycmF5L2luQXJyYXknKTtcbnZhciBnZXRDbGFzcyA9IHJlcXVpcmUoJy4vZ2V0Q2xhc3MnKTtcbnZhciBzZXRDbGFzc05hbWUgPSByZXF1aXJlKCcuL19zZXRDbGFzc05hbWUnKTtcblxuLyoqXG4gKiBkb21VdGlsIG1vZHVsZVxuICogQG1vZHVsZSBkb21VdGlsXG4gKi9cblxuLyoqXG4gKiBBZGQgY3NzIGNsYXNzIHRvIGVsZW1lbnRcbiAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fFNWR0VsZW1lbnQpfSBlbGVtZW50IC0gdGFyZ2V0IGVsZW1lbnRcbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBjc3NDbGFzcyAtIGNzcyBjbGFzc2VzIHRvIGFkZFxuICogQG1lbWJlcm9mIG1vZHVsZTpkb21VdGlsXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQpIHtcbiAgICB2YXIgY3NzQ2xhc3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgICB2YXIgbmV3Q2xhc3MgPSBbXTtcbiAgICB2YXIgb3JpZ2luO1xuXG4gICAgaWYgKGNsYXNzTGlzdCkge1xuICAgICAgICBmb3JFYWNoKGNzc0NsYXNzLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvcmlnaW4gPSBnZXRDbGFzcyhlbGVtZW50KTtcblxuICAgIGlmIChvcmlnaW4pIHtcbiAgICAgICAgY3NzQ2xhc3MgPSBbXS5jb25jYXQob3JpZ2luLnNwbGl0KC9cXHMrLyksIGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBmb3JFYWNoKGNzc0NsYXNzLCBmdW5jdGlvbihjbHMpIHtcbiAgICAgICAgaWYgKGluQXJyYXkoY2xzLCBuZXdDbGFzcykgPCAwKSB7XG4gICAgICAgICAgICBuZXdDbGFzcy5wdXNoKGNscyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHNldENsYXNzTmFtZShlbGVtZW50LCBuZXdDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkQ2xhc3M7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgRmluZCBwYXJlbnQgZWxlbWVudCByZWN1cnNpdmVseVxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWF0Y2hlcyA9IHJlcXVpcmUoJy4vbWF0Y2hlcycpO1xuXG4vKipcbiAqIEZpbmQgcGFyZW50IGVsZW1lbnQgcmVjdXJzaXZlbHlcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBiYXNlIGVsZW1lbnQgdG8gc3RhcnQgZmluZFxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gc2VsZWN0b3Igc3RyaW5nIGZvciBmaW5kXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gZWxlbWVudCBmaW5kZWQgb3IgbnVsbFxuICogQG1lbWJlcm9mIG1vZHVsZTpkb21VdGlsXG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9PSBkb2N1bWVudCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhwYXJlbnQsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb3Nlc3Q7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgR2V0IEhUTUwgZWxlbWVudCdzIGRlc2lnbiBjbGFzc2VzLlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNVbmRlZmluZWQgPSByZXF1aXJlKCcuLi90eXBlL2lzVW5kZWZpbmVkJyk7XG5cbi8qKlxuICogR2V0IEhUTUwgZWxlbWVudCdzIGRlc2lnbiBjbGFzc2VzLlxuICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8U1ZHRWxlbWVudCl9IGVsZW1lbnQgdGFyZ2V0IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGVsZW1lbnQgY3NzIGNsYXNzIG5hbWVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZG9tVXRpbFxuICovXG5mdW5jdGlvbiBnZXRDbGFzcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LmNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKGlzVW5kZWZpbmVkKGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRDbGFzcztcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayBlbGVtZW50IG1hdGNoIHNlbGVjdG9yXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpbkFycmF5ID0gcmVxdWlyZSgnLi4vYXJyYXkvaW5BcnJheScpO1xudmFyIHRvQXJyYXkgPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL3RvQXJyYXknKTtcblxudmFyIGVsUHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcbnZhciBtYXRjaFNlbGVjdG9yID0gZWxQcm90by5tYXRjaGVzIHx8XG4gICAgZWxQcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBlbFByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIGVsUHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgICB2YXIgZG9jID0gdGhpcy5kb2N1bWVudCB8fCB0aGlzLm93bmVyRG9jdW1lbnQ7XG5cbiAgICAgICAgcmV0dXJuIGluQXJyYXkodGhpcywgdG9BcnJheShkb2MucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKSA+IC0xO1xuICAgIH07XG5cbi8qKlxuICogQ2hlY2sgZWxlbWVudCBtYXRjaCBzZWxlY3RvclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgdG8gY2hlY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIHNlbGVjdG9yIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXMgc2VsZWN0b3IgbWF0Y2hlZCB0byBlbGVtZW50P1xuICogQG1lbWJlcm9mIG1vZHVsZTpkb21VdGlsXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbWF0Y2hTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFJlbW92ZSBjc3MgY2xhc3MgZnJvbSBlbGVtZW50XG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoQXJyYXkgPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9uL2ZvckVhY2hBcnJheScpO1xudmFyIGluQXJyYXkgPSByZXF1aXJlKCcuLi9hcnJheS9pbkFycmF5Jyk7XG52YXIgZ2V0Q2xhc3MgPSByZXF1aXJlKCcuL2dldENsYXNzJyk7XG52YXIgc2V0Q2xhc3NOYW1lID0gcmVxdWlyZSgnLi9fc2V0Q2xhc3NOYW1lJyk7XG5cbi8qKlxuICogUmVtb3ZlIGNzcyBjbGFzcyBmcm9tIGVsZW1lbnRcbiAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fFNWR0VsZW1lbnQpfSBlbGVtZW50IC0gdGFyZ2V0IGVsZW1lbnRcbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBjc3NDbGFzcyAtIGNzcyBjbGFzc2VzIHRvIHJlbW92ZVxuICogQG1lbWJlcm9mIG1vZHVsZTpkb21VdGlsXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQpIHtcbiAgICB2YXIgY3NzQ2xhc3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgICB2YXIgb3JpZ2luLCBuZXdDbGFzcztcblxuICAgIGlmIChjbGFzc0xpc3QpIHtcbiAgICAgICAgZm9yRWFjaEFycmF5KGNzc0NsYXNzLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3JpZ2luID0gZ2V0Q2xhc3MoZWxlbWVudCkuc3BsaXQoL1xccysvKTtcbiAgICBuZXdDbGFzcyA9IFtdO1xuICAgIGZvckVhY2hBcnJheShvcmlnaW4sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgaWYgKGluQXJyYXkobmFtZSwgY3NzQ2xhc3MpIDwgMCkge1xuICAgICAgICAgICAgbmV3Q2xhc3MucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2V0Q2xhc3NOYW1lKGVsZW1lbnQsIG5ld0NsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZW1vdmVDbGFzcztcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBSZW1vdmUgZWxlbWVudCBmcm9tIHBhcmVudCBub2RlLlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFJlbW92ZSBlbGVtZW50IGZyb20gcGFyZW50IG5vZGUuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byByZW1vdmUuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmRvbVV0aWxcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVtb3ZlRWxlbWVudDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBFeHRlbmQgdGhlIHRhcmdldCBvYmplY3QgZnJvbSBvdGhlciBvYmplY3RzLlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBtb2R1bGUgb2JqZWN0XG4gKi9cblxuLyoqXG4gKiBFeHRlbmQgdGhlIHRhcmdldCBvYmplY3QgZnJvbSBvdGhlciBvYmplY3RzLlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIE9iamVjdCB0aGF0IHdpbGwgYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7Li4ub2JqZWN0fSBvYmplY3RzIC0gT2JqZWN0cyBhcyBzb3VyY2VzXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBFeHRlbmRlZCBvYmplY3RcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIG9iamVjdHMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBoYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgICB2YXIgc291cmNlLCBwcm9wLCBpLCBsZW47XG5cbiAgICBmb3IgKGkgPSAxLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKHNvdXJjZSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4dGVuZDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBSZXF1ZXN0IGltYWdlIHBpbmcuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoT3duUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb24vZm9yRWFjaE93blByb3BlcnRpZXMnKTtcblxuLyoqXG4gKiBAbW9kdWxlIHJlcXVlc3RcbiAqL1xuXG4vKipcbiAqIFJlcXVlc3QgaW1hZ2UgcGluZy5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgdXJsIGZvciBwaW5nIHJlcXVlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSB0cmFja2luZ0luZm8gaW5mb3MgZm9yIG1ha2UgcXVlcnkgc3RyaW5nXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnJlcXVlc3RcbiAqIEBleGFtcGxlXG4gKiB2YXIgaW1hZ2VQaW5nID0gcmVxdWlyZSgndHVpLWNvZGUtc25pcHBldC9yZXF1ZXN0L2ltYWdlUGluZycpOyAvLyBub2RlLCBjb21tb25qc1xuICpcbiAqIGltYWdlUGluZygnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vY29sbGVjdCcsIHtcbiAqICAgICB2OiAxLFxuICogICAgIHQ6ICdldmVudCcsXG4gKiAgICAgdGlkOiAndHJhY2tpbmdpZCcsXG4gKiAgICAgY2lkOiAnY2lkJyxcbiAqICAgICBkcDogJ2RwJyxcbiAqICAgICBkaDogJ2RoJ1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGltYWdlUGluZyh1cmwsIHRyYWNraW5nSW5mbykge1xuICAgIHZhciB0cmFja2luZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB2YXIgcXVlcnlTdHJpbmcgPSAnJztcbiAgICBmb3JFYWNoT3duUHJvcGVydGllcyh0cmFja2luZ0luZm8sIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcXVlcnlTdHJpbmcgKz0gJyYnICsga2V5ICsgJz0nICsgdmFsdWU7XG4gICAgfSk7XG4gICAgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZy5zdWJzdHJpbmcoMSk7XG5cbiAgICB0cmFja2luZ0VsZW1lbnQuc3JjID0gdXJsICsgJz8nICsgcXVlcnlTdHJpbmc7XG5cbiAgICB0cmFja2luZ0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRyYWNraW5nRWxlbWVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0cmFja2luZ0VsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHRyYWNraW5nRWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbWFnZVBpbmc7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgU2VuZCBob3N0bmFtZSBvbiBET01Db250ZW50TG9hZGVkLlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNVbmRlZmluZWQgPSByZXF1aXJlKCcuLi90eXBlL2lzVW5kZWZpbmVkJyk7XG52YXIgaW1hZ2VQaW5nID0gcmVxdWlyZSgnLi9pbWFnZVBpbmcnKTtcblxudmFyIG1zN2RheXMgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZGF0ZSBoYXMgcGFzc2VkIDcgZGF5c1xuICogQHBhcmFtIHtudW1iZXJ9IGRhdGUgLSBtaWxsaXNlY29uZHNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNFeHBpcmVkKGRhdGUpIHtcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICByZXR1cm4gbm93IC0gZGF0ZSA+IG1zN2RheXM7XG59XG5cbi8qKlxuICogU2VuZCBob3N0bmFtZSBvbiBET01Db250ZW50TG9hZGVkLlxuICogVG8gcHJldmVudCBob3N0bmFtZSBzZXQgdHVpLnVzYWdlU3RhdGlzdGljcyB0byBmYWxzZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBOYW1lIC0gYXBwbGljYXRpb24gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHRyYWNraW5nSWQgLSBHQSB0cmFja2luZyBJRFxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBzZW5kSG9zdG5hbWUoYXBwTmFtZSwgdHJhY2tpbmdJZCkge1xuICAgIHZhciB1cmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vY29sbGVjdCc7XG4gICAgdmFyIGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWU7XG4gICAgdmFyIGhpdFR5cGUgPSAnZXZlbnQnO1xuICAgIHZhciBldmVudENhdGVnb3J5ID0gJ3VzZSc7XG4gICAgdmFyIGFwcGxpY2F0aW9uS2V5Rm9yU3RvcmFnZSA9ICdUT0FTVCBVSSAnICsgYXBwTmFtZSArICcgZm9yICcgKyBob3N0bmFtZSArICc6IFN0YXRpc3RpY3MnO1xuICAgIHZhciBkYXRlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGFwcGxpY2F0aW9uS2V5Rm9yU3RvcmFnZSk7XG5cbiAgICAvLyBza2lwIGlmIHRoZSBmbGFnIGlzIGRlZmluZWQgYW5kIGlzIHNldCB0byBmYWxzZSBleHBsaWNpdGx5XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh3aW5kb3cudHVpKSAmJiB3aW5kb3cudHVpLnVzYWdlU3RhdGlzdGljcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNraXAgaWYgbm90IHBhc3Mgc2V2ZW4gZGF5cyBvbGRcbiAgICBpZiAoZGF0ZSAmJiAhaXNFeHBpcmVkKGRhdGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYXBwbGljYXRpb25LZXlGb3JTdG9yYWdlLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICBpbWFnZVBpbmcodXJsLCB7XG4gICAgICAgICAgICAgICAgdjogMSxcbiAgICAgICAgICAgICAgICB0OiBoaXRUeXBlLFxuICAgICAgICAgICAgICAgIHRpZDogdHJhY2tpbmdJZCxcbiAgICAgICAgICAgICAgICBjaWQ6IGhvc3RuYW1lLFxuICAgICAgICAgICAgICAgIGRwOiBob3N0bmFtZSxcbiAgICAgICAgICAgICAgICBkaDogYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBlbDogYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBlYzogZXZlbnRDYXRlZ29yeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCAxMDAwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZW5kSG9zdG5hbWU7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYW4gaW5zdGFuY2Ugb2YgQXJyYXkgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGFuIGluc3RhbmNlIG9mIEFycmF5IG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhbiBpbnN0YW5jZSBvZiBBcnJheSwgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBhcnJheSBpbnN0YW5jZT9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgc3RyaW5nIG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGJvb2xlYW4gb3Igbm90LlxuICogIElmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGJvb2xlYW4sIHJldHVybiB0cnVlLlxuICogQHBhcmFtIHsqfSBvYmogLSBUYXJnZXQgZm9yIGNoZWNraW5nXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gSXMgYm9vbGVhbj9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdib29sZWFuJyB8fCBvYmogaW5zdGFuY2VvZiBCb29sZWFuO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQm9vbGVhbjtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBleGlzdGluZyBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJy4vaXNVbmRlZmluZWQnKTtcbnZhciBpc051bGwgPSByZXF1aXJlKCcuL2lzTnVsbCcpO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGV4aXN0aW5nIG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBub3QgbnVsbCBhbmQgbm90IHVuZGVmaW5lZCwgcmV0dXJucyB0cnVlLlxuICogQHBhcmFtIHsqfSBwYXJhbSAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBleGlzdHk/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqIEBleGFtcGxlXG4gKiB2YXIgaXNFeGlzdHkgPSByZXF1aXJlKCd0dWktY29kZS1zbmlwcGV0L3R5cGUvaXNFeGlzdHknKTsgLy8gbm9kZSwgY29tbW9uanNcbiAqXG4gKiBpc0V4aXN0eSgnJyk7IC8vdHJ1ZVxuICogaXNFeGlzdHkoMCk7IC8vdHJ1ZVxuICogaXNFeGlzdHkoW10pOyAvL3RydWVcbiAqIGlzRXhpc3R5KHt9KTsgLy90cnVlXG4gKiBpc0V4aXN0eShudWxsKTsgLy9mYWxzZVxuICogaXNFeGlzdHkodW5kZWZpbmVkKTsgLy9mYWxzZVxuKi9cbmZ1bmN0aW9uIGlzRXhpc3R5KHBhcmFtKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZChwYXJhbSkgJiYgIWlzTnVsbChwYXJhbSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFeGlzdHk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBmdW5jdGlvbiBvciBub3QuXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBmdW5jdGlvbiBvciBub3QuXG4gKiBJZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBmdW5jdGlvbiwgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBmdW5jdGlvbj9cbiAqIEBtZW1iZXJvZiBtb2R1bGU6dHlwZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBGdW5jdGlvbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgaW5zdGFuY2Ugb2YgSFRNTE5vZGUgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgaW5zdGFuY2Ugb2YgSFRNTE5vZGUgb3Igbm90LlxuICogSWYgdGhlIGdpdmVuIHZhcmlhYmxlcyBpcyBhIGluc3RhbmNlIG9mIEhUTUxOb2RlLCByZXR1cm4gdHJ1ZS5cbiAqIEBwYXJhbSB7Kn0gaHRtbCAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBIVE1MTm9kZSA/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNIVE1MTm9kZShodG1sKSB7XG4gICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIChodG1sICYmIChodG1sIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgISFodG1sLm5vZGVUeXBlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKGh0bWwgJiYgaHRtbC5ub2RlVHlwZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNIVE1MTm9kZTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBudWxsIG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBudWxsIG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZShhcmd1bWVudHNbMF0pIGlzIG51bGwsIHJldHVybnMgdHJ1ZS5cbiAqIEBwYXJhbSB7Kn0gb2JqIC0gVGFyZ2V0IGZvciBjaGVja2luZ1xuICogQHJldHVybnMge2Jvb2xlYW59IElzIG51bGw/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOdWxsO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgbnVtYmVyIG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIG51bWJlciBvciBub3QuXG4gKiBJZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBudW1iZXIsIHJldHVybiB0cnVlLlxuICogQHBhcmFtIHsqfSBvYmogLSBUYXJnZXQgZm9yIGNoZWNraW5nXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gSXMgbnVtYmVyP1xuICogQG1lbWJlcm9mIG1vZHVsZTp0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJyB8fCBvYmogaW5zdGFuY2VvZiBOdW1iZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOdW1iZXI7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYW4gb2JqZWN0IG9yIG5vdC5cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhbiBvYmplY3Qgb3Igbm90LlxuICogSWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGFuIG9iamVjdCwgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBvYmplY3Q/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBzdHJpbmcgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgc3RyaW5nIG9yIG5vdC5cbiAqIElmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIHN0cmluZywgcmV0dXJuIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBzdHJpbmc/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnIHx8IG9iaiBpbnN0YW5jZW9mIFN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmluZztcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyB1bmRlZmluZWQgb3Igbm90LlxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIHVuZGVmaW5lZCBvciBub3QuXG4gKiBJZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgdW5kZWZpbmVkLCByZXR1cm5zIHRydWUuXG4gKiBAcGFyYW0geyp9IG9iaiAtIFRhcmdldCBmb3IgY2hlY2tpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyB1bmRlZmluZWQ/XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnR5cGVcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmaW5lZFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVW5kZWZpbmVkO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoZSBzdGF0aWMgdmFsdWVzXG4gKiBAYXV0aG9yIE5ITi4gRkUgZGV2IHRlYW0uPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgZm9yRWFjaE93blByb3BlcnRpZXMgZnJvbSAndHVpLWNvZGUtc25pcHBldC9jb2xsZWN0aW9uL2ZvckVhY2hPd25Qcm9wZXJ0aWVzJztcblxuY29uc3QgQ1NTX1BSRUZJWCA9ICd0dWktc2VsZWN0LWJveCc7XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSB7XG4gIFNFTEVDVF9CT1g6ICcnLFxuICBJVEVNOiAnaXRlbScsXG4gIElURU1fR1JPVVA6ICdpdGVtLWdyb3VwJyxcbiAgSVRFTV9HUk9VUF9MQUJFTDogJ2l0ZW0tZ3JvdXAtbGFiZWwnLFxuICBEUk9QRE9XTjogJ2Ryb3Bkb3duJyxcbiAgSU5QVVQ6ICdpbnB1dCcsXG4gIFBMQUNFSE9MREVSOiAncGxhY2Vob2xkZXInLFxuICBJQ09OOiAnaWNvbicsXG4gIE9QRU46ICdvcGVuJyxcbiAgSElEREVOOiAnaGlkZGVuJyxcbiAgRElTQUJMRUQ6ICdkaXNhYmxlZCcsXG4gIFNFTEVDVEVEOiAnc2VsZWN0ZWQnLFxuICBISUdITElHSFQ6ICdoaWdobGlnaHQnXG59O1xuXG5leHBvcnQgY29uc3QgY2xzID0gKGZ1bmN0aW9uKCkge1xuICBmb3JFYWNoT3duUHJvcGVydGllcyhjbGFzc05hbWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY2xhc3NOYW1lc1trZXldID0gYCR7Q1NTX1BSRUZJWH0tJHt2YWx1ZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc05hbWVzW2tleV0gPSBDU1NfUFJFRklYO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNsYXNzTmFtZXM7XG59KSgpO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IERyb3Bkb3duXG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgZm9yRWFjaEFycmF5IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvY29sbGVjdGlvbi9mb3JFYWNoQXJyYXknO1xuaW1wb3J0IGlzRXhpc3R5IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc0V4aXN0eSc7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzTnVtYmVyJztcbmltcG9ydCBhZGRDbGFzcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlRWxlbWVudCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgSXRlbUdyb3VwIGZyb20gJy4vaXRlbUdyb3VwJztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnNcbiAqICAgQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBsYWNlaG9sZGVyXSAtIHBsYWNlaG9sZGVyIGZvciBhbiBpbnB1dFxuICogICBAcGFyYW0ge2FycmF5PGl0ZW1EYXRhfGl0ZW1Hcm91cERhdGE+fSBvcHRpb25zLmRhdGEgLSBkYXRhIGZvciBJdGVtR3JvdXBzIGFuZCBJdGVtc1xuICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRpc2FibGVkPWZhbHNlXSAtIHdoZXRoZXIgYSBkcm9wZG93biBzaG91bGQgYmUgZGlzYWJsZWQgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoeyBwbGFjZWhvbGRlciwgZGF0YSwgZGlzYWJsZWQgPSBmYWxzZSB9KSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5lbCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgJycsIHsgY2xhc3NOYW1lOiBgJHtjbHMuRFJPUERPV059ICR7Y2xzLkhJRERFTn1gIH0pO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5uYXRpdmVFbCA9IGNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsICcnLCB7IGNsYXNzTmFtZTogY2xzLkhJRERFTiwgdGFiSW5kZXg6IC0xIH0pO1xuXG4gICAgLyoqXG4gICAgICogSXRlbXMgYW5kIEl0ZW1Hcm91cHNcbiAgICAgKiBAdHlwZSB7QXJyYXkuPEl0ZW18SXRlbUdyb3VwPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIHRoZSBudW1iZXIgb2YgSXRlbVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLml0ZW1MZW5ndGggPSAwO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0l0ZW19XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SXRlbX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gbnVsbDtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZShkYXRhLCBkaXNhYmxlZCwgcGxhY2Vob2xkZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBJdGVtcyBhbmQgSXRlbUdyb3VwcyBhbmQgY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgSXRlbXNcbiAgICogQHJldHVybiB7YXJyYXk8SXRlbXxJdGVtR3JvdXA+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZUl0ZW1zKGRhdGEpIHtcbiAgICBsZXQgaXRlbTtcbiAgICBsZXQgaXRlbUluZGV4ID0gMDtcbiAgICBsZXQgaXRlbUdyb3VwSW5kZXggPSAwO1xuICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICBpZiAoZGF0dW0uZGF0YSkge1xuICAgICAgICBpdGVtID0gbmV3IEl0ZW1Hcm91cCh7IGluZGV4OiBpdGVtSW5kZXgsIGl0ZW1Hcm91cEluZGV4LCAuLi5kYXR1bSB9KTtcbiAgICAgICAgaXRlbUluZGV4ICs9IGRhdHVtLmRhdGEubGVuZ3RoIC0gMTtcbiAgICAgICAgaXRlbUdyb3VwSW5kZXggKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0gPSBuZXcgSXRlbSh7IGluZGV4OiBpdGVtSW5kZXgsIC4uLmRhdHVtIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICBpdGVtLmFwcGVuZFRvQ29udGFpbmVyKHRoaXMuZWwsIHRoaXMubmF0aXZlRWwpO1xuICAgICAgaXRlbUluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICB0aGlzLml0ZW1MZW5ndGggPSBpdGVtSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZShkYXRhLCBkaXNhYmxlZCwgcGxhY2Vob2xkZXIpIHtcbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsICcnLCB7IGxhYmVsOiBwbGFjZWhvbGRlciwgdmFsdWU6ICcnIH0sIHRoaXMubmF0aXZlRWwpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbGl6ZUl0ZW1zKGRhdGEpO1xuXG4gICAgdGhpcy5pdGVyYXRlSXRlbXMoaXRlbSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtICYmIGl0ZW0uaXNTZWxlY3RlZCgpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEl0ZW0gJiYgaXRlbS5pc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgaXRlbS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZSBhIGZ1bmN0aW9uIHdoaWxlIGl0ZXJhdGluZyBpdGVtc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIGV4ZWN1dGVcbiAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzIC0gYXJndW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpdGVyYXRlSXRlbXMoY2FsbGJhY2ssIC4uLmFyZ3MpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZm9yRWFjaEFycmF5KHRoaXMuaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEl0ZW1Hcm91cCkge1xuICAgICAgICBmb3JFYWNoQXJyYXkoaXRlbS5nZXRJdGVtcygpLCBpdGVtSW5Hcm91cCA9PiB7XG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2suYXBwbHkodGhpcywgW2l0ZW1Jbkdyb3VwLCBpbmRleCwgLi4uYXJnc10pIHx8IGZhbHNlO1xuICAgICAgICAgIGluZGV4ICs9IDE7XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjay5hcHBseSh0aGlzLCBbaXRlbSwgaW5kZXgsIC4uLmFyZ3NdKTtcbiAgICAgIGluZGV4ICs9IDE7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBhIGRyb3Bkb3duIGxpc3RcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLkhJRERFTik7XG4gICAgY29uc3QgaGlnaGxpZ2h0ZWRJdGVtID1cbiAgICAgICF0aGlzLnNlbGVjdGVkSXRlbSB8fCB0aGlzLnNlbGVjdGVkSXRlbS5pc0Rpc2FibGVkKClcbiAgICAgICAgPyB0aGlzLmdldEl0ZW1zKGl0ZW0gPT4gIWl0ZW0uaXNEaXNhYmxlZCgpKVswXVxuICAgICAgICA6IHRoaXMuc2VsZWN0ZWRJdGVtO1xuICAgIHRoaXMuaGlnaGxpZ2h0KGhpZ2hsaWdodGVkSXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgYSBkcm9wZG93biBsaXN0XG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBhZGRDbGFzcyh0aGlzLmVsLCBjbHMuSElEREVOKTtcbiAgICB0aGlzLmRlaGlnaGxpZ2h0KCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBhbiBkcm9wZG93blxuICAgKi9cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLm5hdGl2ZUVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBhZGRDbGFzcyh0aGlzLmVsLCBjbHMuRElTQUJMRUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhbiBkcm9wZG93blxuICAgKi9cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMubmF0aXZlRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBjbHMuRElTQUJMRUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhbiBJdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxJdGVtfSB2YWx1ZSAtIGlmIHN0cmluZywgZmluZCBhbiBJdGVtIGJ5IGl0cyB2YWx1ZS4gaWYgbnVtYmVyLCBmaW5kIGFuIEl0ZW0gYnkgaXRzIGluZGV4LlxuICAgKiBAcmV0dXJuIHtJdGVtfSByZXN1bHQgb2Ygc2VsZWN0aW9uXG4gICAqL1xuICBzZWxlY3QodmFsdWUpIHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB2YWx1ZSBpbnN0YW5jZW9mIEl0ZW0gPyB2YWx1ZSA6IHRoaXMuZ2V0SXRlbSh2YWx1ZSk7XG4gICAgdGhpcy5kZXNlbGVjdCgpO1xuXG4gICAgaWYgKCFzZWxlY3RlZEl0ZW0gfHwgKHNlbGVjdGVkSXRlbSAmJiBzZWxlY3RlZEl0ZW0uaXNEaXNhYmxlZCgpKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRJdGVtLnNlbGVjdCgpO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gc2VsZWN0ZWRJdGVtO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkSXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlbGVjdCBhbiBJdGVtXG4gICAqL1xuICBkZXNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmRlc2VsZWN0KCk7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZ2hsaWdodCBhbiBJdGVtXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xJdGVtfSB2YWx1ZSAtIGlmIHN0cmluZywgZmluZCBhbiBJdGVtIGJ5IGl0cyB2YWx1ZS4gaWYgbnVtYmVyLCBmaW5kIGFuIEl0ZW0gYnkgaXRzIGluZGV4LlxuICAgKi9cbiAgaGlnaGxpZ2h0KHZhbHVlKSB7XG4gICAgbGV0IGhpZ2hsaWdodGVkSXRlbTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJdGVtKSB7XG4gICAgICBoaWdobGlnaHRlZEl0ZW0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKGlzRXhpc3R5KHZhbHVlKSkge1xuICAgICAgaGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5nZXRJdGVtKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoaGlnaGxpZ2h0ZWRJdGVtICYmIGhpZ2hsaWdodGVkSXRlbSAhPT0gdGhpcy5oaWdobGlnaHRlZEl0ZW0pIHtcbiAgICAgIHRoaXMuZGVoaWdobGlnaHQoKTtcbiAgICAgIGhpZ2hsaWdodGVkSXRlbS5oaWdobGlnaHQoKTtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gaGlnaGxpZ2h0ZWRJdGVtO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWhpZ2hsaWdodCBhbiBJdGVtXG4gICAqL1xuICBkZWhpZ2hsaWdodCgpIHtcbiAgICBpZiAodGhpcy5oaWdobGlnaHRlZEl0ZW0pIHtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtLmRlaGlnaGxpZ2h0KCk7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgYSBoaWdobGlnaHRlZCBJdGVtXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaXJlY3Rpb24gLSBkaXJlY3Rpb24gdG8gbW92ZVxuICAgKi9cbiAgbW92ZUhpZ2hsaWdodGVkSXRlbShkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBoaWdobGlnaHRlZEl0ZW0gPSB0aGlzLmdldEhpZ2hsaWdodGVkSXRlbSgpO1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuXG4gICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihoaWdobGlnaHRlZEl0ZW0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBpbmRleCArPSBkaXJlY3Rpb247XG4gICAgICBmb3IgKDsgaW5kZXggPCBpdGVtcy5sZW5ndGggJiYgaW5kZXggPj0gMDsgaW5kZXggKz0gZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICghaXRlbXNbaW5kZXhdLmlzRGlzYWJsZWQoKSkge1xuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KGl0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBJdGVtcyB0aGF0IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gICAqIElmIGZpbHRlciBmdW5jdGlvbiBpcyBub3QgcGFzc2VkLCBpdCByZXR1cm5zIGFsbCBJdGVtc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGZpbHRlciBpdGVtc1xuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gdGhlIG51bWJlciBvZiBpdGVtcyB0byBmaW5kLiAtMSBtZWFucyBhbGwgaXRlbXMuXG4gICAqIEByZXR1cm4ge2FycmF5PEl0ZW0+fVxuICAgKi9cbiAgZ2V0SXRlbXMoY2FsbGJhY2sgPSAoKSA9PiB0cnVlLCBudW1iZXIgPSAtMSkge1xuICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgdGhpcy5pdGVyYXRlSXRlbXMoaXRlbSA9PiB7XG4gICAgICBpZiAoY2FsbGJhY2soaXRlbSkpIHtcbiAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgbnVtYmVyIC09IDE7XG5cbiAgICAgICAgcmV0dXJuIG51bWJlciAhPT0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIEl0ZW0gYnkgaXRzIGluZGV4IG9yIHZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdmFsdWUgLSBpZiBzdHJpbmcsIHRoZSBJdGVtJ3MgdmFsdWUuIGlmIG51bWJlciwgdGhlIEl0ZW0ncyBpbmRleC5cbiAgICogQHJldHVybiB7SXRlbX1cbiAgICovXG4gIGdldEl0ZW0odmFsdWUpIHtcbiAgICBjb25zdCBpc1ZhbGlkSXRlbSA9IGlzTnVtYmVyKHZhbHVlKVxuICAgICAgPyBjb21wYXJlZEl0ZW0gPT4gY29tcGFyZWRJdGVtLmdldEluZGV4KCkgPT09IHZhbHVlXG4gICAgICA6IGNvbXBhcmVkSXRlbSA9PiBjb21wYXJlZEl0ZW0uZ2V0VmFsdWUoKSA9PT0gdmFsdWU7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRJdGVtcyhpc1ZhbGlkSXRlbSwgMSlbMF07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBJdGVtR3JvdXBzIHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAgICogSWYgZmlsdGVyIGZ1bmN0aW9uIGlzIG5vdCBwYXNzZWQsIGl0IHJldHVybnMgYWxsIEl0ZW1Hcm91cHNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBmaWx0ZXIgaXRlbSBncm91cHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIHRoZSBudW1iZXIgb2YgaXRlbSBncm91cHMgdG8gZmluZC4gLTEgbWVhbnMgYWxsIGl0ZW0gZ3JvdXBzLlxuICAgKiBAcmV0dXJuIHthcnJheTxJdGVtR3JvdXA+fVxuICAgKi9cbiAgZ2V0SXRlbUdyb3VwcyhjYWxsYmFjayA9ICgpID0+IHRydWUsIG51bWJlciA9IC0xKSB7XG4gICAgY29uc3QgaXRlbUdyb3VwcyA9IFtdO1xuICAgIGZvckVhY2hBcnJheSh0aGlzLml0ZW1zLCBpdGVtR3JvdXAgPT4ge1xuICAgICAgaWYgKGl0ZW1Hcm91cCBpbnN0YW5jZW9mIEl0ZW1Hcm91cCAmJiBjYWxsYmFjayhpdGVtR3JvdXApKSB7XG4gICAgICAgIGl0ZW1Hcm91cHMucHVzaChpdGVtR3JvdXApO1xuICAgICAgICBudW1iZXIgLT0gMTtcblxuICAgICAgICByZXR1cm4gbnVtYmVyICE9PSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpdGVtR3JvdXBzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBJdGVtR3JvdXAgYnkgaXRzIGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIGdyb3VwSW5kZXggb2YgdGhlIEl0ZW1Hcm91cFxuICAgKiBAcmV0dXJuIHtJdGVtR3JvdXB9XG4gICAqL1xuICBnZXRJdGVtR3JvdXAoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJdGVtR3JvdXBzKGl0ZW1Hcm91cCA9PiBpdGVtR3JvdXAuZ2V0SW5kZXgoKSA9PT0gaW5kZXgsIDEpWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbnVtYmVyIG9mIEl0ZW1zXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEl0ZW1MZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbUxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHNlbGVjdGVkIEl0ZW1cbiAgICogQHJldHVybiB7SXRlbX1cbiAgICovXG4gIGdldFNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBoaWdobGlnaHRlZCBJdGVtXG4gICAqIEByZXR1cm4ge0l0ZW19XG4gICAqL1xuICBnZXRIaWdobGlnaHRlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgZWxlbWVudCBhbmQgbmF0aXZlIGVsZW1lbnQgdG8gdGhlIGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBjb250YWluZXIgZWxlbWVudFxuICAgKi9cbiAgYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm5hdGl2ZUVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IGEgZHJvcGRvd25cbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kZXN0cm95KCkpO1xuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgcmVtb3ZlRWxlbWVudCh0aGlzLm5hdGl2ZUVsKTtcbiAgICB0aGlzLmVsID0gdGhpcy5uYXRpdmVFbCA9IHRoaXMuaXRlbXMgPSB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gbnVsbDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAYXV0aG9yIE5ITiBGRSBEZXZlbG9wbWVudCBMYWIgPGRsX2phdmFzY3JpcHRAbmhuLmNvbT5cbiAqL1xuXG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gJy4vc2VsZWN0Qm94JztcbmltcG9ydCAnLi4vY3NzL3NlbGVjdEJveC5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RCb3g7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgSW5wdXRcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbmltcG9ydCBhZGRDbGFzcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlRWxlbWVudCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnNcbiAqICAgQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBsYWNlaG9sZGVyXSAtIHBsYWNlaG9sZGVyIGZvciBhIHNlbGVjdCBib3hcbiAqICAgQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmRpc2FibGVkXSAtIHdoZXRoZXIgYW4gaW5wdXQgc2hvdWxkIGJlIGRpc2FibGVkIG9yIG5vdFxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNob3dJY29uXSAtIHdoZXRoZXIgYW4gYXJyb3cgaWNvbiBpbiB0aGUgaW5wdXQgc2hvdWxkIGJlIHNob3duXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcbiAgY29uc3RydWN0b3IoeyBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIHNob3dJY29uIH0pIHtcbiAgICAvKipcbiAgICAgKiB0ZXh0IGZvciBhIHBsYWNlaG9sZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGxhY2Vob2xkZXJUZXh0ID0gcGxhY2Vob2xkZXI7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsIHsgY2xhc3NOYW1lOiBjbHMuSU5QVVQsIHRhYkluZGV4OiAwIH0pO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wbGFjZWhvbGRlckVsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJUZXh0LFxuICAgICAgeyBjbGFzc05hbWU6IGNscy5QTEFDRUhPTERFUiB9LFxuICAgICAgdGhpcy5lbFxuICAgICk7XG5cbiAgICB0aGlzLmluaXRpYWxpemUoZGlzYWJsZWQsIHNob3dJY29uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0aWFsaXplKGRpc2FibGVkLCBzaG93SWNvbikge1xuICAgIGlmIChzaG93SWNvbikge1xuICAgICAgY3JlYXRlRWxlbWVudCgnc3BhbicsICdzZWxlY3QnLCB7IGNsYXNzTmFtZTogY2xzLklDT04gfSwgdGhpcy5lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJFbC53aWR0aCA9ICcxMDAlJztcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFuIGlucHV0XG4gICAqL1xuICBkaXNhYmxlKCkge1xuICAgIGFkZENsYXNzKHRoaXMuZWwsIGNscy5ESVNBQkxFRCk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGFuIGlucHV0XG4gICAqL1xuICBlbmFibGUoKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLkRJU0FCTEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGFuIGlucHV0XG4gICAqL1xuICBvcGVuKCkge1xuICAgIGFkZENsYXNzKHRoaXMuZWwsIGNscy5PUEVOKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhbiBpbnB1dFxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgY2xzLk9QRU4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzXG4gICAqL1xuICBmb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSB0ZXh0IGluIHRoZSBwbGFjZWhvbGRlclxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gLSBzZWxlY3RlZCBJdGVtXG4gICAqL1xuICBjaGFuZ2VUZXh0KGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlckVsLmlubmVyVGV4dCA9IGl0ZW0uZ2V0TGFiZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlckVsLmlubmVyVGV4dCA9IHRoaXMucGxhY2Vob2xkZXJUZXh0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmQgdGhlIGVsZW1lbnQgdG8gdGhlIGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBjb250YWluZXIgZWxlbWVudFxuICAgKi9cbiAgYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYW4gaW5wdXRcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgcmVtb3ZlRWxlbWVudCh0aGlzLmVsKTtcbiAgICB0aGlzLmVsID0gdGhpcy5wbGFjZWhvbGRlckVsID0gbnVsbDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEl0ZW1cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbmltcG9ydCBhZGRDbGFzcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlRWxlbWVudCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFuIGl0ZW0uXG4gKiBZb3UgY2FuIGdldCBJdGVtIGJ5IHtAbGluayBTZWxlY3RCb3gjZ2V0SXRlbSBTZWxlY3RCb3guZ2V0SXRlbSgpfSBhbmQge0BsaW5rIFNlbGVjdEJveCNnZXRJdGVtcyBTZWxlY3RCb3guZ2V0SXRlbXMoKX0uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xuICAvKipcbiAgICogQGhpZGVjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnNcbiAgICogICBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubGFiZWxdIC0gbGFiZWwgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkcm9wLWRvd24gbGlzdFxuICAgKiAgIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnZhbHVlIC0gdmFsdWUgb2YgYW4gaXRlbVxuICAgKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGlzYWJsZWQ9ZmFsc2VdIC0gd2hldGhlciBhbiBJdGVtIHNob3VsZCBiZSBkaXNhYmxlZCBvciBub3RcbiAgICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNlbGVjdGVkPWZhbHNlXSAtIHdoZXRoZXIgYW4gSXRlbSBzaG91bGQgYmUgcHJlLXNlbGVjdGVkIG9yIG5vdFxuICAgKiAgIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmluZGV4IC0gSXRlbSdzIGluZGV4XG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZhbHVlLCBsYWJlbCwgZGlzYWJsZWQsIHNlbGVjdGVkLCBpbmRleCB9KSB7XG4gICAgLyoqXG4gICAgICogdmFsdWUgb2YgYW4gaXRlbVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gYCR7dmFsdWV9YDtcblxuICAgIC8qKlxuICAgICAqIGxhYmVsIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgZHJvcC1kb3duIGxpc3RcbiAgICAgKiBpZiBsYWJlbCBpcyBhbiBlbXB0eSBzdHJpbmcsIGl0IHNob3VsZCBiZSBzYW1lIGFzIGl0cyB2YWx1ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gbGFiZWwgfHwgdGhpcy52YWx1ZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG5cbiAgICAvKipcbiAgICAgKiB3aGV0aGVyIGFuIEl0ZW1Hcm91cCBvZiB0aGUgSXRlbSBpcyBkaXNhYmxlZCBvciBub3RcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXRlbUdyb3VwRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIHdoZXRoZXIgYW4gSXRlbSBpcyBkaXNhYmxlZCBvciBub3RcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXRlbURpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIDxsaT4gZWxlbWVudCBmb3IgYSBjdXN0b20gZHJvcGRvd24gaXRlbVxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZWwgPSBjcmVhdGVFbGVtZW50KCdsaScsIHRoaXMubGFiZWwsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xzLklURU0sXG4gICAgICB0YWJJbmRleDogLTEsXG4gICAgICAnZGF0YS12YWx1ZSc6IHRoaXMudmFsdWUsXG4gICAgICAnZGF0YS1pbmRleCc6IHRoaXMuaW5kZXhcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIDxvcHRpb24+IGVsZW1lbnQgZm9yIGEgc2VsZWN0IGVsZW1lbnRcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm5hdGl2ZUVsID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgJycsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWxcbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZShkaXNhYmxlZCwgc2VsZWN0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXRpYWxpemUoZGlzYWJsZWQsIHNlbGVjdGVkKSB7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdCgpO1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gSXRlbSBkaXNhYmxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBtYWtlRGlzYWJsZSgpIHtcbiAgICB0aGlzLm5hdGl2ZUVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBhZGRDbGFzcyh0aGlzLmVsLCBjbHMuRElTQUJMRUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gSXRlbSBlbmFibGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG1ha2VFbmFibGUoKSB7XG4gICAgdGhpcy5uYXRpdmVFbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIGNscy5ESVNBQkxFRCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBhbiBJdGVtIGR1ZSB0byBhbiBJdGVtR3JvdXBcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZGlzYWJsZUl0ZW1Hcm91cCgpIHtcbiAgICB0aGlzLml0ZW1Hcm91cERpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLm1ha2VEaXNhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGFuIEl0ZW0gZHVlIHRvIGFuIEl0ZW1Hcm91cFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBlbmFibGVJdGVtR3JvdXAoKSB7XG4gICAgdGhpcy5pdGVtR3JvdXBEaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKCkpIHtcbiAgICAgIHRoaXMubWFrZUVuYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFuIEl0ZW1cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLml0ZW1EaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5tYWtlRGlzYWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhbiBJdGVtXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLml0ZW1EaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKCkpIHtcbiAgICAgIHRoaXMubWFrZUVuYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgYW4gSXRlbVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZWxlY3QoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMubmF0aXZlRWwuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgY2xzLlNFTEVDVEVEKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzZWxlY3QgYW4gSXRlbVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5uYXRpdmVFbC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIGNscy5TRUxFQ1RFRCk7XG4gIH1cblxuICAvKipcbiAgICogSGlnaGxpZ2h0IGFuIEl0ZW1cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgaGlnaGxpZ2h0KCkge1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKCkpIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWwsIGNscy5ISUdITElHSFQpO1xuICAgICAgdGhpcy5lbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBoaWdobGlnaHQgZnJvbSBhbiBJdGVtXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRlaGlnaGxpZ2h0KCkge1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIGNscy5ISUdITElHSFQpO1xuICAgIHRoaXMuZWwuYmx1cigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBpdGVtJ3MgdmFsdWUuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBpdGVtJ3MgbGFiZWwuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBpdGVtJ3MgaW5kZXguXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIGFuIGl0ZW0gaXMgc2VsZWN0ZWQgb3Igbm90LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciBhbiBpdGVtIGlzIGRpc2FibGVkIG9yIG5vdC5cbiAgICogVGhlIHJlc3VsdCBpcyB0cnVlIGlmIGFueSBvZiB0aGUgaXRlbXMgYW5kIGl0ZW0gZ3JvdXBzIGFyZSBkaXNhYmxlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbURpc2FibGVkIHx8IHRoaXMuaXRlbUdyb3VwRGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBlbGVtZW50IGFuZCBuYXRpdmUgZWxlbWVudCB0byB0aGUgY29udGFpbmVyc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBjb250YWluZXIgZWxlbWVudFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBuYXRpdmVDb250YWluZXIgLSBuYXRpdmUgY29udGFpbmVyIGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyLCBuYXRpdmVDb250YWluZXIpIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgbmF0aXZlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubmF0aXZlRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYW4gSXRlbVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgcmVtb3ZlRWxlbWVudCh0aGlzLm5hdGl2ZUVsKTtcbiAgICB0aGlzLmVsID0gdGhpcy5uYXRpdmVFbCA9IG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBJdGVtR3JvdXBcbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbmltcG9ydCBhZGRDbGFzcyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlRWxlbWVudCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL2l0ZW0nO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQGRlc2NyaXB0aW9uXG4gKiBBIGdyb3VwIG9mIGl0ZW1zLlxuICogWW91IGNhbiBnZXQgSXRlbUdyb3VwIGJ5IHtAbGluayBTZWxlY3RCb3gjZ2V0SXRlbUdyb3VwIFNlbGVjdEJveC5nZXRJdGVtR3JvdXAoKX0gYW5kIHtAbGluayBTZWxlY3RCb3gjZ2V0SXRlbUdyb3VwcyBTZWxlY3RCb3guZ2V0SXRlbUdyb3VwcygpfS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUdyb3VwIHtcbiAgLyoqXG4gICAqIEBoaWRlY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zXG4gICAqICAgQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxhYmVsXSAtIGxhYmVsIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgZHJvcGRvd24gbGlzdFxuICAgKiAgIEBwYXJhbSB7YXJyYXk8aXRlbURhdGE+fSBvcHRpb25zLmRhdGEgLSBkYXRhIGZvciBJdGVtcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgSXRlbUdyb3VwXG4gICAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kaXNhYmxlZD1mYWxzZV0gLSB3aGV0aGVyIGFuIEl0ZW1Hcm91cCBzaG91bGQgYmUgZGlzYWJsZWQgb3Igbm90XG4gICAqICAgQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuaW5kZXggLSBpbmRleCBvZiB0aGUgZmlyc3QgSXRlbSBpbiB0aGUgSXRlbUdyb3VwXG4gICAqICAgQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuaXRlbUdyb3VwSW5kZXggLSBpbmRleCBvZiB0aGUgSXRlbUdyb3VwXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IGxhYmVsID0gJycsIGRhdGEsIGRpc2FibGVkID0gZmFsc2UsIGluZGV4LCBpdGVtR3JvdXBJbmRleCB9KSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5lbCA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJycsIHsgJ2RhdGEtZ3JvdXAtaW5kZXgnOiBpdGVtR3JvdXBJbmRleCB9KTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubGFiZWxFbCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBsYWJlbCwgeyBjbGFzc05hbWU6IGNscy5JVEVNX0dST1VQX0xBQkVMIH0sIHRoaXMuZWwpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pdGVtQ29udGFpbmVyRWwgPSBjcmVhdGVFbGVtZW50KCd1bCcsICcnLCB7IGNsYXNzTmFtZTogY2xzLklURU1fR1JPVVAgfSwgdGhpcy5lbCk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm5hdGl2ZUVsID0gY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnLCBsYWJlbCk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7YXJyYXk8SXRlbT59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLml0ZW1zID0gdGhpcy5jcmVhdGVJdGVtcyhkYXRhLCBpbmRleCk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbmRleCA9IGl0ZW1Hcm91cEluZGV4O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcblxuICAgIC8qKlxuICAgICAqIHdoZXRoZXIgYW4gSXRlbUdyb3VwIGlzIGRpc2FibGVkIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5pbml0aWFsaXplKGRpc2FibGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgSXRlbXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIEl0ZW1Hcm91cFxuICAgKiBAcmV0dXJuIHthcnJheTxJdGVtPn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZUl0ZW1zKGRhdGEsIGluZGV4KSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKChkYXR1bSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW0oeyBpbmRleDogaW5kZXggKyBpdGVtSW5kZXgsIC4uLmRhdHVtIH0pO1xuICAgICAgaXRlbS5hcHBlbmRUb0NvbnRhaW5lcih0aGlzLml0ZW1Db250YWluZXJFbCwgdGhpcy5uYXRpdmVFbCk7XG5cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXRpYWxpemUoZGlzYWJsZWQpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFuIEl0ZW1Hcm91cFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLm5hdGl2ZUVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBhZGRDbGFzcyh0aGlzLmxhYmVsRWwsIGNscy5ESVNBQkxFRCk7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kaXNhYmxlSXRlbUdyb3VwKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhbiBJdGVtR3JvdXBcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLm5hdGl2ZUVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5sYWJlbEVsLCBjbHMuRElTQUJMRUQpO1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uZW5hYmxlSXRlbUdyb3VwKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB7QGxpbmsgSXRlbSBpdGVtc30gaW4gdGhlIGl0ZW0gZ3JvdXAuXG4gICAqIEByZXR1cm4ge2FycmF5PEl0ZW0+fVxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBpdGVtcyA9IGl0ZW1Hcm91cC5nZXRJdGVtcygpO1xuICAgKiBjb25zb2xlLmxvZyhpdGVtc1swXSk7IC8vIGZpcnN0IGl0ZW0gaW4gdGhlIGl0ZW0gZ3JvdXBcbiAgICogY29uc29sZS5sb2coaXRlbXMubGVuZ3RoKTsgLy8gdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgaXRlbSBncm91cFxuICAgKi9cbiAgZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGl0ZW0gZ3JvdXAncyBpbmRleC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGl0ZW0gZ3JvdXAncyBsYWJlbC5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgYW4gSXRlbUdyb3VwIGlzIGRpc2FibGVkIG9yIG5vdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBlbGVtZW50IGFuZCBuYXRpdmUgZWxlbWVudCB0byB0aGUgY29udGFpbmVyc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBjb250YWluZXIgZWxlbWVudFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBuYXRpdmVDb250YWluZXIgLSBuYXRpdmUgY29udGFpbmVyIGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyLCBuYXRpdmVDb250YWluZXIpIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgbmF0aXZlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubmF0aXZlRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3RvcnkgYW4gSXRlbUdyb3VwXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kZXN0cm95KCkpO1xuICAgIHJlbW92ZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgcmVtb3ZlRWxlbWVudCh0aGlzLm5hdGl2ZUVsKTtcbiAgICB0aGlzLmVsID0gdGhpcy5sYWJlbEVsID0gdGhpcy5pdGVtQ29udGFpbmVyRWwgPSB0aGlzLm5hdGl2ZUVsID0gdGhpcy5pdGVtcyA9IG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBVdGlsaXR5IGZ1bmN0aW9ucyByZWxhdGVkIHRvIGtleSBldmVudHNcbiAqIEBhdXRob3IgTkhOLiBGRSBkZXYgdGVhbS48ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbmNvbnN0IGtleUNvZGVNYXAgPSB7XG4gIDM4OiAnYXJyb3dVcCcsXG4gIDQwOiAnYXJyb3dEb3duJyxcbiAgMzI6ICdzcGFjZScsXG4gIDEzOiAnZW50ZXInLFxuICAyNzogJ2VzY2FwZScsXG4gIDYxOiAndGFiJ1xufTtcblxuY29uc3Qga2V5TWFwID0ge1xuICBBcnJvd1VwOiAnYXJyb3dVcCcsXG4gIFVwOiAnYXJyb3dVcCcsXG4gIEFycm93RG93bjogJ2Fycm93RG93bicsXG4gIERvd246ICdhcnJvd0Rvd24nLFxuICAnICc6ICdzcGFjZScsXG4gIFNwYWNlYmFyOiAnc3BhY2UnLFxuICBFbnRlcjogJ2VudGVyJyxcbiAgRXNjYXBlOiAnZXNjYXBlJyxcbiAgRXNjOiAnZXNjYXBlJyxcbiAgVGFiOiAndGFiJ1xufTtcblxuLyoqXG4gKiBJZGVudGlmeSB0aGUga2V5IChwb2x5ZmlsbCBmb3IgSUUpXG4gKiBAcGFyYW0ge3N0cmluZ30gZXYgLSBrZXlib2FyZCBldmVudFxuICogQHJldHVybiB7c3RyaW5nfSAtIGtleVxuICovXG5leHBvcnQgY29uc3QgaWRlbnRpZnlLZXkgPSBldiA9PiB7XG4gIGNvbnN0IHsga2V5LCBrZXlDb2RlIH0gPSBldjtcblxuICBpZiAoa2V5KSB7XG4gICAgcmV0dXJuIGtleU1hcFtrZXldIHx8IGtleTtcbiAgfVxuXG4gIHJldHVybiBrZXlDb2RlTWFwW2tleUNvZGVdIHx8IGtleUNvZGU7XG59O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFNlbGVjdEJveFxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuaW1wb3J0IEN1c3RvbUV2ZW50cyBmcm9tICd0dWktY29kZS1zbmlwcGV0L2N1c3RvbUV2ZW50cy9jdXN0b21FdmVudHMnO1xuaW1wb3J0IG9uIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvb24nO1xuaW1wb3J0IG9mZiBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbUV2ZW50L29mZic7XG5pbXBvcnQgcHJldmVudERlZmF1bHQgZnJvbSAndHVpLWNvZGUtc25pcHBldC9kb21FdmVudC9wcmV2ZW50RGVmYXVsdCc7XG5pbXBvcnQgZ2V0VGFyZ2V0IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tRXZlbnQvZ2V0VGFyZ2V0JztcbmltcG9ydCBjbG9zZXN0IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9jbG9zZXN0JztcbmltcG9ydCByZW1vdmVFbGVtZW50IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvZG9tVXRpbC9yZW1vdmVFbGVtZW50JztcbmltcG9ydCBpc09iamVjdCBmcm9tICd0dWktY29kZS1zbmlwcGV0L3R5cGUvaXNPYmplY3QnO1xuaW1wb3J0IGlzRXhpc3R5IGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc0V4aXN0eSc7XG5pbXBvcnQgaXNIVE1MTm9kZSBmcm9tICd0dWktY29kZS1zbmlwcGV0L3R5cGUvaXNIVE1MTm9kZSc7XG5pbXBvcnQgc2VuZEhvc3RuYW1lIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvcmVxdWVzdC9zZW5kSG9zdG5hbWUnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgaWRlbnRpZnlLZXkgfSBmcm9tICcuL2tleUV2ZW50VXRpbHMnO1xuaW1wb3J0IHsgY2xzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IEl0ZW1Hcm91cCBmcm9tICcuL2l0ZW1Hcm91cCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL2l0ZW0nO1xuaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IGNvbnRhaW5lciAtIGNvbnRhaW5lciBlbGVtZW50IG9yIHNlbGVjdG9yXG4gKiBAbWl4ZXMgQ3VzdG9tRXZlbnRzXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogICBAcGFyYW0ge2FycmF5PGl0ZW1EYXRhfGl0ZW1Hcm91cERhdGE+fSBvcHRpb25zLmRhdGEgLSBhcnJheSBvZiB7QGxpbmsgaXRlbURhdGF9IGFuZCB7QGxpbmsgaXRlbUdyb3VwRGF0YX1cbiAqICAgQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBsYWNlaG9sZGVyXSAtIHBsYWNlaG9sZGVyIGZvciBhbiBpbnB1dFxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRpc2FibGVkXSAtIHdoZXRoZXIgYW4gSXRlbSBzaG91bGQgYmUgZGlzYWJsZWQgb3Igbm90XG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b2ZvY3VzXSAtIHdoZXRoZXIgYSBzZWxlY3Rib3ggc2hvdWxkIGdldCBmb2N1cyB3aGVuIHRoZSBzZWxlY3QgYm94IGFwcGVuZHMgdG8gdGhlIGNvbnRhaW5lclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9jbG9zZV0gLSB3aGV0aGVyIGEgc2VsZWN0Ym94IHNob3VsZCBjbG9zZSBhZnRlciBzZWxlY3Rpb25cbiAqICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5zaG93SWNvbl0gLSB3aGV0aGVyIGFuIGFycm93IGljb24gaW4gdGhlIGlucHV0IHNob3VsZCBiZSBzaG93blxuICogICBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMudGhlbWVdIC0ge0BsaW5rIHRoZW1lQ29uZmlnfSBmb3IgY3VzdG9tIHN0eWxlXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudXNhZ2VTdGF0aXN0aWNzXSAtIHdoZXRoZXIgc2VuZCBob3N0bmFtZSB0byBnb29nbGUgYW5hbHl0aWNzLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzZW5kIHRoZSBob3N0bmFtZSwgcGxlYXNlIHNldCB0byBmYWxzZS5cbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgU2VsZWN0Qm94IGZyb20gJ0B0b2FzdC11aS9zZWxlY3QtYm94JztcbiAqIC8vIG9yIGNvbnN0IFNlbGVjdEJveCA9IHJlcXVpcmUoJ0B0b2FzdC11aS9zZWxlY3QtYm94Jyk7XG4gKiAvLyBvciBjb25zdCBTZWxlY3RCb3ggPSB0dWkuU2VsZWN0Qm94O1xuICpcbiAqIGNvbnN0IHNlbGVjdEJveCA9IG5ldyBTZWxlY3RCb3goJyNzZWxlY3QtYm94Jywge1xuICogICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBzZWxlY3QgYW4gb3B0aW9uLicsXG4gKiAgIGRhdGE6IFtcbiAqICAgICB7XG4gKiAgICAgICBsYWJlbDogJ0ZydWl0cycsXG4gKiAgICAgICBkYXRhOiBbIHsgbGFiZWw6ICdBcHBsZScsIHZhbHVlOiAnYXBwbGUnIH0sIHsgbGFiZWw6ICdCYW5hbmEnLCB2YWx1ZTogJ2JhbmFuYScgfSBdXG4gKiAgICAgfSxcbiAqICAgICB7IGxhYmVsOiAnVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4nLCB2YWx1ZTogJ25vbmUnIH0sXG4gKiAgICAge1xuICogICAgICAgbGFiZWw6ICdDb2xvcnMnLFxuICogICAgICAgZGF0YTogW1xuICogICAgICAgICB7IGxhYmVsOiAnUmVkJywgdmFsdWU6ICdyZWQnIH0sXG4gKiAgICAgICAgIHsgbGFiZWw6ICdZZWxsb3cnLCB2YWx1ZTogJ3llbGxvdycgfSxcbiAqICAgICAgICAgeyBsYWJlbDogJ0dyZWVuJywgdmFsdWU6ICdncmVlbicsIGRpc2FibGVkOiB0cnVlIH0sXG4gKiAgICAgICAgIHsgbGFiZWw6ICdCbHVlJywgdmFsdWU6ICdibHVlJywgZGlzYWJsZWQ6IHRydWUgfSxcbiAqICAgICAgICAgeyBsYWJlbDogJ1B1cnBsZScsIHZhbHVlOiAncHVycGxlJyB9XG4gKiAgICAgICBdXG4gKiAgICAgfVxuICogICBdLFxuICogICBhdXRvZm9jdXM6IHRydWUsXG4gKiAgIHNob3dJY29uOiBmYWxzZSxcbiAqICAgdGhlbWU6IHtcbiAqICAgICAnY29tbW9uLmJvcmRlcic6ICcxcHggc29saWQgYmxhY2snLFxuICogICAgICdjb21tb24uY29sb3InOiAnYmxhY2snLFxuICogICAgICdpdGVtLmhpZ2hsaWdodGVkLmJhY2tncm91bmQnOiAneWVsbG93J1xuICogICB9XG4gKiB9KTtcbiAqL1xuXG4vKipcbiAqIFNlbGVjdEJveCBwcm92aWRlcyBzb21lIGN1c3RvbSBldmVudHM6ICh7QGxpbmsgU2VsZWN0Qm94I2V2ZW50LW9wZW4gb3Blbn0sIHtAbGluayBTZWxlY3RCb3gjZXZlbnQtY2xvc2UgY2xvc2V9LCB7QGxpbmsgU2VsZWN0Qm94I2V2ZW50LWRpc2FibGUgZGlzYWJsZX0sIHtAbGluayBTZWxlY3RCb3gjZXZlbnQtZW5hYmxlIGVuYWJsZX0sIHtAbGluayBTZWxlY3RCb3gjZXZlbnQtY2hhbmdlIGNoYW5nZX0pLlxuICogWW91IGNhbiBiaW5kIGV2ZW50IGhhbmRsZXJzIGJ5IHtAbGluayBodHRwczovL25obi5naXRodWIuaW8vdHVpLmNvZGUtc25pcHBldC9sYXRlc3QvQ3VzdG9tRXZlbnRzI29uIHNlbGVjdEJveC5vbihldmVudE5hbWUsIGhhbmRsZXIpfSBhbmQgdW5iaW5kIGJ5IHtAbGluayBodHRwczovL25obi5naXRodWIuaW8vdHVpLmNvZGUtc25pcHBldC9sYXRlc3QvQ3VzdG9tRXZlbnRzI29mZiBzZWxlY3RCb3gub2ZmKGV2ZW50TmFtZSwgaGFuZGxlcil9LlxuICogUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL25obi5naXRodWIuaW8vdHVpLmNvZGUtc25pcHBldC9sYXRlc3QvQ3VzdG9tRXZlbnRzIEN1c3RvbUV2ZW50c30gZG9jdW1lbnQgYXQge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9uaG4vdHVpLmNvZGUtc25pcHBldCB0dWktY29kZS1zbmlwcGV0fSB0byBrbm93IGhvdyB0byBiaW5kLCBhbmQgdW5iaW5kIGN1c3RvbSBldmVudHMuXG4gKiBUaGUgZXhhbXBsZSB1c2luZyBjdXN0b20gZXZlbnRzIGNhbiBiZSBmb3VuZCB7QGxpbmsgdHV0b3JpYWwtZXhhbXBsZTAzLWN1c3RvbS1ldmVudHMgaGVyZX0uXG4gKiBAdHlwZWRlZiB7Y2xhc3N9IEN1c3RvbUV2ZW50c1xuICogQGV4YW1wbGVcbiAqIC8vIGJpbmQgJ2NoYW5nZScgZXZlbnRcbiAqIHNlbGVjdEJveC5vbignY2hhbmdlJywgZXYgPT4ge1xuICogICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgaXRlbSBpcyBjaGFuZ2VkIGZyb20gJHtldi5wcmV2LmdldExhYmVsKCl9IHRvICR7ZXYuY3Vyci5nZXRMYWJlbCgpfS5gKTtcbiAqIH0pO1xuICpcbiAqIC8vIGJpbmQgJ2Rpc2FibGUnIGFuZCBlbmFibGUgZXZlbnRcbiAqIGNvbnN0IHByaW50ID0gZXYgPT4ge1xuICogICBsZXQgdGFyZ2V0ID0gJyc7XG4gKiAgIGlmIChldi50YXJnZXQgaW5zdGFuY2VvZiBTZWxlY3RCb3gpIHtcbiAqICAgICB0YXJnZXQgPSAnU2VsZWN0IGJveCc7XG4gKiAgIH0gZWxzZSB7XG4gKiAgICAgdGFyZ2V0ID0gZXYudGFyZ2V0LmdldExhYmVsKCk7XG4gKiAgIH1cbiAqICAgY29uc29sZS5sb2coYCR7dGFyZ2V0fSBpcyAke2V2LnR5cGV9LmApO1xuICogfVxuICogc2VsZWN0Qm94Lm9uKHtcbiAqICAgZGlzYWJsZTogcHJpbnQsXG4gKiAgIGVuYWJsZTogcHJpbnRcbiAqIH0pO1xuICpcbiAqIC8vIHVuYmluZCBjaGFuZ2UgZXZlbnRcbiAqIHNlbGVjdEJveC5vZmYoJ2NoYW5nZScpO1xuICpcbiAqIC8vIHVuYmluZCBkaXNhYmxlIGV2ZW50XG4gKiBzZWxlY3RCb3gub2ZmKGRpc2FibGUsIHByaW50KTtcbiAqXG4gKiAvLyB1bmJpbmQgYWxsIGV2ZW50c1xuICogc2VsZWN0Qm94Lm9mZigpO1xuICovXG5cbi8qKlxuICogRGF0YSBvZiBhbiB7QGxpbmsgSXRlbSBpdGVtfS5cbiAqIEl0IGlzIHVzZWQgZm9yIGNyZWF0aW5nIGEge0BsaW5rIFNlbGVjdEJveH0uXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBpdGVtRGF0YSAtIGRhdGEgZm9yIHtAbGluayBJdGVtIGl0ZW19XG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgLSBsYWJlbCB0byBiZSBkaXNwbGF5ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB2YWx1ZSAtIHZhbHVlIG9mIGFuIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2Rpc2FibGVkPWZhbHNlXSAtIHdoZXRoZXIgYW4gaXRlbSBzaG91bGQgYmUgZGlzYWJsZWQgb3Igbm90XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtzZWxlY3RlZD1mYWxzZV0gLSB3aGV0aGVyIGFuIGl0ZW0gc2hvdWxkIGJlIHByZS1zZWxlY3RlZCBvciBub3RcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBpdGVtRGF0YSA9IHtcbiAqICAgbGFiZWw6ICdkaXNhYmxlZCBpdGVtJyxcbiAqICAgdmFsdWU6ICcwJyxcbiAqICAgZGlzYWJsZWQ6IHRydWUsXG4gKiAgIHNlbGVjdGVkOiBmYWxzZVxuICogfTtcbiAqL1xuXG4vKipcbiAqIERhdGEgb2YgYW4ge0BsaW5rIEl0ZW1Hcm91cCBpdGVtIGdyb3VwfS5cbiAqIEl0IGlzIHVzZWQgZm9yIGNyZWF0aW5nIGEge0BsaW5rIFNlbGVjdEJveH0uXG4gKiBJdGVtR3JvdXAgc3VwcG9ydHMgb25seSAxIGxldmVsIGNob2ljZXMsIHNvIGl0IGRvZXMgbm90IHdvcmsgdG8gYWRkIGl0ZW0gZ3JvdXBzIGluIHRoZSBpdGVtIGdyb3VwLlxuICogVGhlIGV4YW1wbGUgdXNpbmcgaXRlbSBncm91cHMgY2FuIGJlIGZvdW5kIHtAbGluayB0dXRvcmlhbC1leGFtcGxlMDEtYmFzaWMgaGVyZX0uXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBpdGVtR3JvdXBEYXRhIC0gZGF0YSBmb3Ige0BsaW5rIEl0ZW1Hcm91cCBpdGVtIGdyb3VwfVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIC0gbGFiZWwgdG8gYmUgZGlzcGxheWVkXG4gKiBAcHJvcGVydHkge2FycmF5fSBkYXRhIC0ge0BsaW5rIGl0ZW1EYXRhIGRhdGEgZm9yIGl0ZW19XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtkaXNhYmxlZD1mYWxzZV0gLSB3aGV0aGVyIGFuIGl0ZW0gZ3JvdXAgc2hvdWxkIGJlIGRpc2FibGVkIG9yIG5vdFxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGl0ZW1Hcm91cERhdGEgPSB7XG4gKiAgIGxhYmVsOiAnZGlzYWJsZWQgaXRlbXMnLFxuICogICBkYXRhOiBbXG4gKiAgICAgeyBsYWJlbDogJ2Rpc2FibGUnLCB2YWx1ZTogJ2Rpc2FibGUnIH0sXG4gKiAgICAgeyBsYWJlbDogJ25vbmUnLCB2YWx1ZTogJzAnIH1cbiAqICAgXSxcbiAqICAgZGlzYWJsZWQ6IHRydWVcbiAqIH07XG4gKi9cbmNsYXNzIFNlbGVjdEJveCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbnRhaW5lcixcbiAgICB7XG4gICAgICBkYXRhLFxuICAgICAgcGxhY2Vob2xkZXIgPSAnJyxcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICBhdXRvZm9jdXMgPSBmYWxzZSxcbiAgICAgIGF1dG9jbG9zZSA9IHRydWUsXG4gICAgICBzaG93SWNvbiA9IHRydWUsXG4gICAgICB0aGVtZSxcbiAgICAgIHVzYWdlU3RhdGlzdGljcyA9IHRydWVcbiAgICB9XG4gICkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgeyBjbGFzc05hbWU6IGNscy5TRUxFQ1RfQk9YIH0pO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0lucHV0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dCh7IHBsYWNlaG9sZGVyLCBkaXNhYmxlZCwgc2hvd0ljb24gfSk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RHJvcGRvd259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmRyb3Bkb3duID0gbmV3IERyb3Bkb3duKHsgcGxhY2Vob2xkZXIsIGRpc2FibGVkLCBkYXRhIH0pO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmRpYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYXV0b2Nsb3NlID0gYXV0b2Nsb3NlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1RoZW1lfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50aGVtZSA9IGlzT2JqZWN0KHRoZW1lKSA/IG5ldyBUaGVtZSh0aGVtZSwgY29udGFpbmVyKSA6IG51bGw7XG5cbiAgICB0aGlzLmluaXRpYWxpemUoeyBwbGFjZWhvbGRlciwgZGlzYWJsZWQgfSk7XG4gICAgdGhpcy5hcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIpO1xuXG4gICAgaWYgKGF1dG9mb2N1cykge1xuICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh1c2FnZVN0YXRpc3RpY3MpIHtcbiAgICAgIHNlbmRIb3N0bmFtZSgnc2VsZWN0LWJveCcsICdVQS0xMjk5ODc0NjItMScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmQgdGhlIHNlbGVjdCBib3ggZWxlbWVudCB0byB0aGUgY29udGFpbmVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBjb250YWluZXIgLSBjb250YWluZXIgZWxlbWVudCBvciBzZWxlY3RvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyKSB7XG4gICAgY29uc3QgY29udGFpbmVyRWwgPSBpc0hUTUxOb2RlKGNvbnRhaW5lcikgPyBjb250YWluZXIgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyRWwuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXRpYWxpemUob3B0aW9ucykge1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtKCk7XG4gICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgdGhpcy5pbnB1dC5jaGFuZ2VUZXh0KHNlbGVjdGVkSXRlbSk7XG4gICAgfSBlbHNlIGlmICghb3B0aW9ucy5wbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5zZWxlY3QoMCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgdGhpcy5pbnB1dC5hcHBlbmRUb0NvbnRhaW5lcih0aGlzLmVsKTtcbiAgICB0aGlzLmRyb3Bkb3duLmFwcGVuZFRvQ29udGFpbmVyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBiaW5kRXZlbnRzKCkge1xuICAgIG9uKFxuICAgICAgZG9jdW1lbnQsXG4gICAgICAnY2xpY2snLFxuICAgICAgZXYgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQoZXYpO1xuICAgICAgICBpZiAoIWNsb3Nlc3QodGFyZ2V0LCBgLiR7Y2xzLlNFTEVDVF9CT1h9YCkgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICBvbih0aGlzLmVsLCAnY2xpY2snLCBldiA9PiB0aGlzLmhhbmRsZUNsaWNrKGV2LCBjbHMpKTtcbiAgICBvbih0aGlzLmVsLCAnbW91c2VvdmVyJywgZXYgPT4gdGhpcy5oYW5kbGVNb3VzZW92ZXIoZXYsIGNscykpO1xuICAgIG9uKHRoaXMuZWwsICdrZXlkb3duJywgZXYgPT4gdGhpcy5oYW5kbGVLZXlkb3duKGV2LCBjbHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgZXZlbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1bmJpbmRFdmVudHMoKSB7XG4gICAgb2ZmKGRvY3VtZW50LCAnY2xpY2snKTtcbiAgICBvZmYodGhpcy5lbCwgJ2NsaWNrIG1vdXNlb3ZlciBrZXlkb3duJyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGNsaWNrIGV2ZW50c1xuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjbHMgLSBjbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZUNsaWNrKGV2LCB7IElOUFVULCBJVEVNIH0pIHtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQoZXYpO1xuICAgIGNvbnN0IGl0ZW1FbCA9IGNsb3Nlc3QodGFyZ2V0LCBgLiR7SVRFTX1gKTtcblxuICAgIGlmIChpdGVtRWwpIHtcbiAgICAgIHRoaXMuc2VsZWN0KGl0ZW1FbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XG4gICAgfSBlbHNlIGlmIChjbG9zZXN0KHRhcmdldCwgYC4ke0lOUFVUfWApKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgbW91c2VvdmVyIGV2ZW50c1xuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjbHMgLSBjbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZU1vdXNlb3ZlcihldiwgeyBJVEVNIH0pIHtcbiAgICBpZiAodGhpcy5jaGVja01vdXNlbW92ZShldi5jbGllbnRYLCBldi5jbGllbnRZKSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGV2KTtcbiAgICAgIGNvbnN0IGl0ZW1FbCA9IGNsb3Nlc3QodGFyZ2V0LCBgLiR7SVRFTX1gKTtcblxuICAgICAgaWYgKGl0ZW1FbCkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZ2hsaWdodChpdGVtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHBvaW50ZXIgaXMgbW92ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBtb3VzZUV2ZW50LmNsaWVudFhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBtb3VzZUV2ZW50LmNsaWVudFlcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNoZWNrTW91c2Vtb3ZlKHgsIHkpIHtcbiAgICBpZiAodGhpcy5wcmV2WCAhPT0geCB8fCB0aGlzLnByZXZZICE9PSB5KSB7XG4gICAgICB0aGlzLnByZXZYID0geDtcbiAgICAgIHRoaXMucHJldlkgPSB5O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGtleWRvd24gZXZlbnRzXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IGNsYXNzTmFtZXMgLSBjbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZUtleWRvd24oZXYsIGNsYXNzTmFtZXMpIHtcbiAgICBjb25zdCBrZXkgPSBpZGVudGlmeUtleShldik7XG4gICAgY29uc3QgY2xvc2VLZXlzID0gWyd0YWInLCAnZXNjYXBlJ107XG4gICAgY29uc3QgYWN0aXZlS2V5cyA9IFsnYXJyb3dVcCcsICdhcnJvd0Rvd24nLCAnc3BhY2UnLCAnZW50ZXInXTtcblxuICAgIGlmIChjbG9zZUtleXMuaW5kZXhPZihrZXkpID4gLTEgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIGlmIChrZXkgPT09ICdlc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjdGl2ZUtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgIHByZXZlbnREZWZhdWx0KGV2KTtcbiAgICAgIHRoaXMuYWN0aXZhdGVLZXlkb3duKGV2LCBrZXksIGNsYXNzTmFtZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSBrZXlkb3duIGV2ZW50c1xuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBrZXkgcHJlc3NlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gY2xhc3NOYW1lcyAtIGNsc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWN0aXZhdGVLZXlkb3duKGV2LCBrZXksIHsgSVRFTSwgSU5QVVQgfSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldChldik7XG4gICAgY29uc3QgaXRlbUVsID0gY2xvc2VzdCh0YXJnZXQsIGAuJHtJVEVNfWApO1xuXG4gICAgaWYgKGtleSA9PT0gJ2VzY2FwZScgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW1FbCkge1xuICAgICAgdGhpcy5wcmVzc0tleU9uSXRlbShrZXksIGl0ZW1FbCk7XG4gICAgfSBlbHNlIGlmIChjbG9zZXN0KHRhcmdldCwgYC4ke0lOUFVUfWApKSB7XG4gICAgICB0aGlzLnByZXNzS2V5T25JbnB1dChrZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUga2V5ZG93biBldmVudHMgd2hlbiBpdCBvY2N1cnMgb24gdGhlIElucHV0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBrZXlcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByZXNzS2V5T25JbnB1dChrZXkpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2Fycm93VXAnIHx8IGtleSA9PT0gJ2Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuZHJvcGRvd24ubW92ZUhpZ2hsaWdodGVkSXRlbShrZXkgPT09ICdhcnJvd1VwJyA/IC0xIDogMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBrZXlkb3duIGV2ZW50cyB3aGVuIGl0IG9jY3VycyBvbiB0aGUgSXRlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0ga2V5XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW1FbCAtIEl0ZW0uZWxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByZXNzS2V5T25JdGVtKGtleSwgaXRlbUVsKSB7XG4gICAgaWYgKGtleSA9PT0gJ2VudGVyJyB8fCBrZXkgPT09ICdzcGFjZScpIHtcbiAgICAgIHRoaXMuc2VsZWN0QnlLZXlkb3duKGl0ZW1FbCk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdhcnJvd1VwJyB8fCBrZXkgPT09ICdhcnJvd0Rvd24nKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLm1vdmVIaWdobGlnaHRlZEl0ZW0oa2V5ID09PSAnYXJyb3dVcCcgPyAtMSA6IDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgYW4gSXRlbSBieSBzcGFjZSBvciBlbnRlclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtRWwgLSBJdGVtLmVsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZWxlY3RCeUtleWRvd24oaXRlbUVsKSB7XG4gICAgdGhpcy5zZWxlY3QoaXRlbUVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYSBzZWxlY3QgYm94LCB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXB9IG9yIHtAbGluayBJdGVtIGl0ZW19LlxuICAgKiBJZiBpdCB0YWtlcyBubyBhcmd1bWVudHMsIGEgc2VsZWN0IGJveCBpcyBkaXNhYmxlZC5cbiAgICogSWYgaXQgdGFrZXMgc3RyaW5nLCBhbiBpdGVtIHdpdGggdGhlIHNhbWUgdmFsdWUgYXMgdGhlIGFyZ3VtZW50IGlzIGRpc2FibGVkLlxuICAgKiBJZiBpdCB0YWtlcyBudW1iZXIsIGFuIGl0ZW0gd2l0aCB0aGUgc2FtZSBpbmRleCBhcyB0aGUgYXJndW1lbnQgaXMgZGlzYWJsZWQuXG4gICAqIElmIGl0IHRha2VzIEl0ZW0gb3IgSXRlbUdyb3VwLCBhbiBhcmd1bWVudCBpdHNlbGYgaXMgZGlzYWJsZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxJdGVtfEl0ZW1Hcm91cH0gdmFsdWUgLSBpZiBzdHJpbmcsIGZpbmQgYW4gSXRlbSBieSBpdHMgdmFsdWUuIGlmIG51bWJlciwgZmluZCBhbiBJdGVtIGJ5IGl0cyBpbmRleC5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmRpc2FibGUoKTsgLy8gc2VsZWN0IGJveCBpcyBkaXNhYmxlZC5cbiAgICogc2VsZWN0Qm94LmRpc2FibGUoMSk7IC8vIHNlY29uZCBpdGVtIGlzIGRpc2FibGVkLlxuICAgKiBzZWxlY3RCb3guZGlzYWJsZSgndmFsdWUnKSAvLyBpdGVtIHdoaWNoIG9mIHZhbHVlIGlzICd2YWx1ZScgaXMgZGlzYWJsZWQuXG4gICAqIHNlbGVjdEJveC5kaXNhYmxlKHNlbGVjdEJveC5nZXRTZWxlY3RlZEl0ZW0oKSk7IC8vIHNlbGVjdGVkIGl0ZW0gaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlKHZhbHVlKSB7XG4gICAgaWYgKCFpc0V4aXN0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbnB1dC5kaXNhYmxlKCk7XG4gICAgICB0aGlzLmRyb3Bkb3duLmRpc2FibGUoKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPY2N1cnMgd2hlbiBhIHNlbGVjdCBib3gsIHtAbGluayBJdGVtR3JvdXAgaXRlbSBncm91cH0gb3Ige0BsaW5rIEl0ZW0gaXRlbX0gaXMgZGlzYWJsZWQuXG4gICAgICAgKiBAZXZlbnQgU2VsZWN0Qm94I2Rpc2FibGVcbiAgICAgICAqIEB0eXBlIHtvYmplY3R9IGV2XG4gICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSAtIGV2ZW50IG5hbWUgKCdkaXNhYmxlJylcbiAgICAgICAqIEBwcm9wZXJ0eSB7U2VsZWN0Qm94fEl0ZW1Hcm91cHxJdGVtfSB0YXJnZXQgLSBkaXNhYmxlZCB0YXJnZXRcbiAgICAgICAqIEBleGFtcGxlXG4gICAgICAgKiBzZWxlY3RCb3gub24oJ2Rpc2FibGUnLCBldiA9PiB7XG4gICAgICAgKiAgIGNvbnNvbGUubG9nKGV2LnRhcmdldCk7XG4gICAgICAgKiB9KTtcbiAgICAgICAqL1xuICAgICAgdGhpcy5maXJlKCdkaXNhYmxlJywgeyB0eXBlOiAnZGlzYWJsZScsIHRhcmdldDogdGhpcyB9KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgSXRlbSB8fCB2YWx1ZSBpbnN0YW5jZW9mIEl0ZW1Hcm91cCkge1xuICAgICAgdmFsdWUuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5maXJlKCdkaXNhYmxlJywgeyB0eXBlOiAnZGlzYWJsZScsIHRhcmdldDogdmFsdWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkSXRlbSA9IHRoaXMuZHJvcGRvd24uZ2V0SXRlbSh2YWx1ZSk7XG4gICAgICBpZiAoZGlzYWJsZWRJdGVtKSB7XG4gICAgICAgIGRpc2FibGVkSXRlbS5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMuZmlyZSgnZGlzYWJsZScsIHsgdHlwZTogJ2Rpc2FibGUnLCB0YXJnZXQ6IGRpc2FibGVkSXRlbSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGEgc2VsZWN0IGJveCwge0BsaW5rIEl0ZW1Hcm91cCBpdGVtIGdyb3VwfSBvciB7QGxpbmsgSXRlbSBpdGVtfS5cbiAgICogSWYgaXQgdGFrZXMgbm8gYXJndW1lbnRzLCBhIHNlbGVjdCBib3ggaXMgZW5hYmxlZC5cbiAgICogSWYgaXQgdGFrZXMgc3RyaW5nLCBhbiBpdGVtIHdpdGggdGhlIHNhbWUgdmFsdWUgYXMgdGhlIGFyZ3VtZW50IGlzIGVuYWJsZWQuXG4gICAqIElmIGl0IHRha2VzIG51bWJlciwgYW4gaXRlbSB3aXRoIHRoZSBzYW1lIGluZGV4IGFzIHRoZSBhcmd1bWVudCBpcyBlbmFibGVkLlxuICAgKiBJZiBpdCB0YWtlcyBJdGVtIG9yIEl0ZW1Hcm91cCwgYW4gYXJndW1lbnQgaXRzZWxmIGlzIGVuYWJsZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxJdGVtfEl0ZW1Hcm91cH0gdmFsdWUgLSBpZiBzdHJpbmcsIGZpbmQgYW4gSXRlbSBieSBpdHMgdmFsdWUuIGlmIG51bWJlciwgZmluZCBhbiBJdGVtIGJ5IGl0cyBpbmRleC5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmVuYWJsZSgpOyAvLyBzZWxlY3QgYm94IGlzIGVuYWJsZWQuXG4gICAqIHNlbGVjdEJveC5lbmFibGUoMSk7IC8vIHNlY29uZCBpdGVtIGlzIGVuYWJsZWQuXG4gICAqIHNlbGVjdEJveC5lbmFibGUoJ3ZhbHVlJykgLy8gaXRlbSB3aGljaCBvZiB2YWx1ZSBpcyAndmFsdWUnIGlzIGVuYWJsZWQuXG4gICAqIHNlbGVjdEJveC5lbmFibGUoc2VsZWN0Qm94LmdldFNlbGVjdGVkSXRlbSgpKTsgLy8gc2VsZWN0ZWQgaXRlbSBpcyBlbmFibGVkLlxuICAgKi9cbiAgZW5hYmxlKHZhbHVlKSB7XG4gICAgaWYgKCFpc0V4aXN0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5wdXQuZW5hYmxlKCk7XG4gICAgICB0aGlzLmRyb3Bkb3duLmVuYWJsZSgpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9jY3VycyB3aGVuIGEgc2VsZWN0IGJveCwge0BsaW5rIEl0ZW1Hcm91cCBpdGVtIGdyb3VwfSBvciB7QGxpbmsgSXRlbSBpdGVtfSBpcyBlbmFibGVkLlxuICAgICAgICogQGV2ZW50IFNlbGVjdEJveCNlbmFibGVcbiAgICAgICAqIEB0eXBlIHtvYmplY3R9IGV2XG4gICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSAtIGV2ZW50IG5hbWUgKCdlbmFibGUnKVxuICAgICAgICogQHByb3BlcnR5IHtTZWxlY3RCb3h8SXRlbUdyb3VwfEl0ZW19IHRhcmdldCAtIGVuYWJsZSB0YXJnZXRcbiAgICAgICAqIEBleGFtcGxlXG4gICAgICAgKiBzZWxlY3RCb3gub24oJ2VuYWJsZScsIGV2ID0+IHtcbiAgICAgICAqICAgY29uc29sZS5sb2coZXYudGFyZ2V0KTtcbiAgICAgICAqIH0pO1xuICAgICAgICovXG4gICAgICB0aGlzLmZpcmUoJ2VuYWJsZScsIHsgdHlwZTogJ2VuYWJsZScsIHRhcmdldDogdGhpcyB9KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgSXRlbSB8fCB2YWx1ZSBpbnN0YW5jZW9mIEl0ZW1Hcm91cCkge1xuICAgICAgdmFsdWUuZW5hYmxlKCk7XG4gICAgICB0aGlzLmZpcmUoJ2VuYWJsZScsIHsgdHlwZTogJ2VuYWJsZScsIHRhcmdldDogdmFsdWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkSXRlbSA9IHRoaXMuZHJvcGRvd24uZ2V0SXRlbSh2YWx1ZSk7XG4gICAgICBpZiAoZGlzYWJsZWRJdGVtKSB7XG4gICAgICAgIGRpc2FibGVkSXRlbS5lbmFibGUoKTtcbiAgICAgICAgdGhpcy5maXJlKCdlbmFibGUnLCB7IHR5cGU6ICdlbmFibGUnLCB0YXJnZXQ6IGRpc2FibGVkSXRlbSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBhIGRyb3Bkb3duIGxpc3QuXG4gICAqIEBleGFtcGxlXG4gICAqIHNlbGVjdEJveC5vcGVuKCk7XG4gICAqL1xuICBvcGVuKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgdGhpcy5kcm9wZG93bi5vcGVuKCk7XG4gICAgICB0aGlzLmlucHV0Lm9wZW4oKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPY2N1cnMgd2hlbiBhIHNlbGVjdCBib3ggb3BlbnMuXG4gICAgICAgKiBAZXZlbnQgU2VsZWN0Qm94I29wZW5cbiAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgbmFtZSAoJ29wZW4nKVxuICAgICAgICogQGV4YW1wbGVcbiAgICAgICAqIHNlbGVjdEJveC5vbignb3BlbicsIGV2ID0+IHtcbiAgICAgICAqICAgY29uc29sZS5sb2coJ29wZW4nKTtcbiAgICAgICAqIH0pO1xuICAgICAgICovXG4gICAgICB0aGlzLmZpcmUoJ29wZW4nLCB7IHR5cGU6ICdvcGVuJyB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgYSBkcm9wZG93biBsaXN0LlxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guY2xvc2UoKTtcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5kcm9wZG93bi5jbG9zZSgpO1xuICAgIHRoaXMuaW5wdXQuY2xvc2UoKTtcblxuICAgIC8qKlxuICAgICAqIE9jY3VycyB3aGVuIGEgc2VsZWN0IGJveCBjbG9zZXMuXG4gICAgICogQGV2ZW50IFNlbGVjdEJveCNjbG9zZVxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgbmFtZSAoJ2Nsb3NlJylcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHNlbGVjdEJveC5vbignY2xvc2UnLCBldiA9PiB7XG4gICAgICogICBjb25zb2xlLmxvZygnY2xvc2UnKTtcbiAgICAgKiB9KTtcbiAgICAgKi9cbiAgICB0aGlzLmZpcmUoJ2Nsb3NlJywgeyB0eXBlOiAnY2xvc2UnIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBhIGRyb3Bkb3duIGxpc3QuXG4gICAqIEBleGFtcGxlXG4gICAqIHNlbGVjdEJveC50b2dnbGUoKTtcbiAgICovXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhbiB7QGxpbmsgSXRlbSBpdGVtfS5cbiAgICogSWYgaXQgdGFrZXMgc3RyaW5nLCBhbiBpdGVtIHdpdGggdGhlIHNhbWUgdmFsdWUgYXMgdGhlIGFyZ3VtZW50IGlzIHNlbGVjdGVkLlxuICAgKiBJZiBpdCB0YWtlcyBudW1iZXIsIGFuIGl0ZW0gd2l0aCB0aGUgc2FtZSBpbmRleCBhcyB0aGUgYXJndW1lbnQgaXMgc2VsZWN0ZWQuXG4gICAqIElmIGl0IHRha2VzIEl0ZW0sIGFuIGFyZ3VtZW50IGl0c2VsZiBpcyBzZWxlY3RlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfEl0ZW19IHZhbHVlIC0gaWYgc3RyaW5nLCBmaW5kIGFuIEl0ZW0gYnkgaXRzIHZhbHVlLiBpZiBudW1iZXIsIGZpbmQgYW4gSXRlbSBieSBpdHMgaW5kZXguXG4gICAqIEByZXR1cm4ge0l0ZW19IC0gc2VsZWN0ZWQgSXRlbS5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LnNlbGVjdCgxKTsgLy8gc2Vjb25kIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAqIHNlbGVjdEJveC5zZWxlY3QoJ3ZhbHVlJykgLy8gaXRlbSB3aGljaCBvZiB2YWx1ZSBpcyAndmFsdWUnIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgc2VsZWN0KHZhbHVlKSB7XG4gICAgbGV0IHNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgY29uc3QgcHJldlNlbGVjdGVkSXRlbSA9IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtKCk7XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHNlbGVjdGVkSXRlbSA9IHRoaXMuZHJvcGRvd24uc2VsZWN0KHZhbHVlKTtcblxuICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICB0aGlzLmlucHV0LmNoYW5nZVRleHQoc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2NjdXJzIHdoZW4gYW4ge0BsaW5rIEl0ZW0gaXRlbX0gaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqIEBldmVudCBTZWxlY3RCb3gjc2VsZWN0XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9IGV2XG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgbmFtZSAoJ3NlbGVjdCcpXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7SXRlbX0gdGFyZ2V0IC0gc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgKiBAaWdub3JlXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHNlbGVjdEJveC5vbignc2VsZWN0JywgZXYgPT4ge1xuICAgICAgICAgKiAgIGNvbnNvbGUubG9nKGAke2V2LnRhcmdldC5nZXRMYWJlbCgpfSBpcyBzZWxlY3RlZC5gKTtcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZpcmUoJ3NlbGVjdCcsIHsgdHlwZTogJ3NlbGVjdCcsIHRhcmdldDogc2VsZWN0ZWRJdGVtIH0pO1xuXG4gICAgICAgIGlmIChwcmV2U2VsZWN0ZWRJdGVtICE9PSBzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBPY2N1cnMgd2hlbiBhIHNlbGVjdGVkIHtAbGluayBJdGVtIGl0ZW19IGlzIGNoYW5nZWQuXG4gICAgICAgICAgICogQGV2ZW50IFNlbGVjdEJveCNjaGFuZ2VcbiAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBldlxuICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gZXZlbnQgbmFtZSAoJ2NoYW5nZScpXG4gICAgICAgICAgICogQHByb3BlcnR5IHtJdGVtfSBwcmV2IC0gcHJldmlvdXMgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgICAqIEBwcm9wZXJ0eSB7SXRlbX0gY3VyciAtIGN1cnJlbnQgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAgICogc2VsZWN0Qm94Lm9uKCdjaGFuZ2UnLCBldiA9PiB7XG4gICAgICAgICAgICogICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgaXRlbSBpcyBjaGFuZ2VkIGZyb20gJHtldi5wcmV2LmdldExhYmVsKCl9IHRvICR7ZXYuY3Vyci5nZXRMYWJlbCgpfS5gKTtcbiAgICAgICAgICAgKiB9KTtcbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0aGlzLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjaGFuZ2UnLFxuICAgICAgICAgICAgcHJldjogcHJldlNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgIGN1cnI6IHNlbGVjdGVkSXRlbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b2Nsb3NlICYmIHRoaXMub3BlbmVkKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkSXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlbGVjdCBhbiBpdGVtLlxuICAgKiBJZiBzZWxlY3RCb3ggaGFzIGEgcGxhY2Vob2xkZXIsIHRoZSBpbnB1dCdzIHRleHQgaXMgYSBwbGFjZWhvbGRlci5cbiAgICogSWYgbm8gcGxhY2Vob2xkZXIsIHRocyBpbnB1dCBpcyBlbXB0eS5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmRlc2VsZWN0KCk7XG4gICAqL1xuICBkZXNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZHJvcGRvd24uZGVzZWxlY3QoKTtcbiAgICAgIHRoaXMuaW5wdXQuY2hhbmdlVGV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHNlbGVjdGVkIHtAbGluayBJdGVtIGl0ZW19LlxuICAgKiBAcmV0dXJuIHtJdGVtfVxuICAgKi9cbiAgZ2V0U2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLmdldFNlbGVjdGVkSXRlbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwge0BsaW5rIEl0ZW0gaXRlbXN9IHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gICAqIElmIGZpbHRlciBmdW5jdGlvbiBpcyBub3QgcGFzc2VkLCBpdCByZXR1cm5zIGFsbCBpdGVtcy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBmaWx0ZXIgaXRlbXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gZmluZC4gSWYgaXQgaXMgbm90IHBhc3NlZCwgaXRlcmF0ZSBhbGwgaXRlbXMuXG4gICAqIEByZXR1cm4ge2FycmF5PEl0ZW0+fVxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZ2V0SXRlbXMoKTsgLy8gYWxsIGl0ZW1zXG4gICAqIHNlbGVjdEJveC5nZXRJdGVtcyhpdGVtID0+IHtcbiAgICogIHJldHVybiAhaXRlbS5pc0Rpc2FibGVkKCk7XG4gICAqIH0pOyAvLyBhbGwgZW5hYmxlZCBpdGVtc1xuICAgKi9cbiAgZ2V0SXRlbXMoY2FsbGJhY2ssIG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLmdldEl0ZW1zKGNhbGxiYWNrLCBudW1iZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiB7QGxpbmsgSXRlbSBpdGVtfSBieSBpdHMgaW5kZXggb3IgdmFsdWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdmFsdWUgLSBpZiBzdHJpbmcsIHRoZSBJdGVtJ3MgdmFsdWUuIGlmIG51bWJlciwgdGhlIEl0ZW0ncyBpbmRleC5cbiAgICogQHJldHVybiB7SXRlbX1cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmdldEl0ZW0oMCk7IC8vIGZpcnN0IGl0ZW1cbiAgICogc2VsZWN0Qm94LmdldEl0ZW0oJ3ZhbHVlJykgLy8gaXRlbSB3aGljaCBvZiB2YWx1ZSBpcyAndmFsdWUnXG4gICAqL1xuICBnZXRJdGVtKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24uZ2V0SXRlbSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXBzfSB0aGF0IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICAgKiBJZiBmaWx0ZXIgZnVuY3Rpb24gaXMgbm90IHBhc3NlZCwgaXQgcmV0dXJucyBhbGwgaXRlbSBncm91cHMuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZmlsdGVyIGl0ZW0gZ3JvdXBzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIGZpbmQuIElmIGl0IGlzIG5vdCBwYXNzZWQsIGl0ZXJhdGUgYWxsIGl0ZW0gZ3JvdXBzLlxuICAgKiBAcmV0dXJuIHthcnJheTxJdGVtR3JvdXA+fVxuICAgKiBAZXhhbXBsZVxuICAgKiBzZWxlY3RCb3guZ2V0SXRlbUdyb3VwcygpOyAvLyBhbGwgaXRlbSBncm91cHNcbiAgICogc2VsZWN0Qm94LmdldEl0ZW1Hcm91cHMoaXRlbUdyb3VwID0+IHtcbiAgICogIHJldHVybiAhaXRlbUdyb3VwLmlzRGlzYWJsZWQoKTtcbiAgICogfSk7IC8vIGFsbCBlbmFibGVkIGl0ZW0gZ3JvdXBzXG4gICAqL1xuICBnZXRJdGVtR3JvdXBzKGNhbGxiYWNrLCBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5nZXRJdGVtR3JvdXBzKGNhbGxiYWNrLCBudW1iZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiB7QGxpbmsgSXRlbUdyb3VwIGl0ZW0gZ3JvdXB9IGJ5IGl0cyBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gZ3JvdXBJbmRleCBvZiB0aGUgSXRlbUdyb3VwXG4gICAqIEByZXR1cm4ge0l0ZW1Hcm91cH1cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmdldEl0ZW1Hcm91cCgwKTsgLy8gZmlyc3QgaXRlbSBncm91cFxuICAgKi9cbiAgZ2V0SXRlbUdyb3VwKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24uZ2V0SXRlbUdyb3VwKGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IGEgc2VsZWN0IGJveC5cbiAgICogQGV4YW1wbGVcbiAgICogc2VsZWN0Qm94LmRlc3Ryb3koKTtcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgIHRoaXMuaW5wdXQuZGVzdHJveSgpO1xuICAgIHRoaXMuZHJvcGRvd24uZGVzdHJveSgpO1xuICAgIGlmICh0aGlzLnRoZW1lKSB7XG4gICAgICB0aGlzLnRoZW1lLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICByZW1vdmVFbGVtZW50KHRoaXMuZWwpO1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5lbCA9IHRoaXMuaW5wdXQgPSB0aGlzLmRyb3Bkb3duID0gdGhpcy50aGVtZSA9IG51bGw7XG4gIH1cbn1cblxuQ3VzdG9tRXZlbnRzLm1peGluKFNlbGVjdEJveCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEJveDtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGVtZVxuICogQGF1dGhvciBOSE4gRkUgRGV2ZWxvcG1lbnQgTGFiIDxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuaW1wb3J0IGZvckVhY2hPd25Qcm9wZXJ0aWVzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvY29sbGVjdGlvbi9mb3JFYWNoT3duUHJvcGVydGllcyc7XG5pbXBvcnQgcmVtb3ZlRWxlbWVudCBmcm9tICd0dWktY29kZS1zbmlwcGV0L2RvbVV0aWwvcmVtb3ZlRWxlbWVudCc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICd0dWktY29kZS1zbmlwcGV0L3R5cGUvaXNBcnJheSc7XG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc0Jvb2xlYW4nO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvdHlwZS9pc1N0cmluZyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm0sIGdldFNlbGVjdG9yIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjbHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgYmFzZVRoZW1lIGZyb20gJy4vdGhlbWVDb25maWcnO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQGlnbm9yZVxuICogQHBhcmFtIHtvYmplY3R9IGN1c3RvbVRoZW1lIC0gdGhlbWUgb2JqZWN0IGZvciBjdXN0b20gc3R5bGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBjb250YWluZXIgLSBjb250YWluZXIgZWxlbWVudCBvciBzZWxlY3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVtZSB7XG4gIGNvbnN0cnVjdG9yKGN1c3RvbVRoZW1lLCBjb250YWluZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lclNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoY29udGFpbmVyKTtcbiAgICB0aGlzLmNzc1N0cmluZyA9IHRoaXMuYnVpbGRBbGwodHJhbnNmb3JtKGN1c3RvbVRoZW1lKSk7XG4gICAgdGhpcy5zdHlsZUVsID0gdGhpcy5jcmVhdGVTdHlsZUVsZW1lbnQoKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQodGhpcy5zdHlsZUVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdHlsZSBlbGVtZW50XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlU3R5bGVFbGVtZW50KCkge1xuICAgIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgICBpZiAoc3R5bGVFbC5zdHlsZVNoZWV0KSB7XG4gICAgICBzdHlsZUVsLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHRoaXMuY3NzU3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuY3NzU3RyaW5nKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlRWw7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgY3NzIHN0cmluZ3MgZm9yIElucHV0LCBEcm9wZG93biwgSXRlbUdyb3VwLCBhbmQgSXRlbS5cbiAgICogQHBhcmFtIHtvYmplY3R9IHRoZW1lIC0gdGhlbWUgb2JqZWN0XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkQWxsKHRoZW1lKSB7XG4gICAgY29uc3QgZXhjbHVkZSA9IHsgYm9yZGVyOiAnJywgYmFja2dyb3VuZDogJycgfTtcblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJ1aWxkSW5wdXQoeyAuLi50aGVtZS5jb21tb24sIC4uLnRoZW1lLmlucHV0IH0pICtcbiAgICAgIHRoaXMuYnVpbGREcm9wZG93bih7IC4uLnRoZW1lLmNvbW1vbiwgYm9yZGVyVG9wOiAnMCcsIC4uLnRoZW1lLmRyb3Bkb3duLCBoZWlnaHQ6ICcnIH0pICtcbiAgICAgIHRoaXMuYnVpbGRJdGVtR3JvdXAoXG4gICAgICAgIHRoZW1lLml0ZW1Hcm91cFxuICAgICAgICAgID8geyAuLi50aGVtZS5jb21tb24sIC4uLmV4Y2x1ZGUsIC4uLnRoZW1lLml0ZW1Hcm91cC5sYWJlbCB9XG4gICAgICAgICAgOiB7IC4uLnRoZW1lLmNvbW1vbiwgLi4uZXhjbHVkZSB9XG4gICAgICApICtcbiAgICAgIHRoaXMuYnVpbGRJdGVtKFxuICAgICAgICB0aGVtZS5pdGVtR3JvdXBcbiAgICAgICAgICA/IHsgLi4udGhlbWUuY29tbW9uLCAuLi5leGNsdWRlLCAuLi50aGVtZS5pdGVtLCBpbkl0ZW1Hcm91cDogdGhlbWUuaXRlbUdyb3VwLml0ZW1zIH1cbiAgICAgICAgICA6IHsgLi4udGhlbWUuY29tbW9uLCAuLi5leGNsdWRlLCAuLi50aGVtZS5pdGVtIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNzcyBzdHJpbmdzIGZvciBJbnB1dFxuICAgKiBAcGFyYW0ge29iamVjdH0gdGhlbWUgLSB0aGVtZSBvYmplY3RcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGRJbnB1dCh0aGVtZSkge1xuICAgIHRoZW1lLnBsYWNlaG9sZGVyID0ge307XG4gICAgaWYgKHRoZW1lLmhlaWdodCkge1xuICAgICAgdGhlbWUucGxhY2Vob2xkZXIubGluZUhlaWdodCA9IHRoZW1lLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKGlzQm9vbGVhbih0aGVtZS5zaG93SWNvbikgJiYgIXRoZW1lLnNob3dJY29uKSB7XG4gICAgICB0aGVtZS5pY29uID0geyBkaXNwbGF5OiAnbm9uZScgfTtcbiAgICAgIHRoZW1lLnBsYWNlaG9sZGVyLndpZHRoID0gJzEwMCUnO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKGNscy5JTlBVVCwgdGhlbWUpICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoW2Nscy5JTlBVVCwgY2xzLk9QRU5dLCB0aGVtZS5vcGVuKSArXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKFtjbHMuSU5QVVQsIGNscy5ESVNBQkxFRF0sIHRoZW1lLmRpc2FibGVkKSArXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKGNscy5QTEFDRUhPTERFUiwgdGhlbWUucGxhY2Vob2xkZXIpICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoY2xzLklDT04sIHRoZW1lLmljb24pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBjc3Mgc3RyaW5ncyBmb3IgRHJvcGRvd25cbiAgICogQHBhcmFtIHtvYmplY3R9IHRoZW1lIC0gdGhlbWUgb2JqZWN0XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkRHJvcGRvd24odGhlbWUpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZENzc1N0cmluZyhjbHMuRFJPUERPV04sIHRoZW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBjc3Mgc3RyaW5ncyBmb3IgSXRlbUdyb3VwXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0aGVtZSAtIHRoZW1lIG9iamVjdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZEl0ZW1Hcm91cCh0aGVtZSkge1xuICAgIGlmICh0aGVtZS5oZWlnaHQpIHtcbiAgICAgIHRoZW1lLmxpbmVIZWlnaHQgPSB0aGVtZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoY2xzLklURU1fR1JPVVBfTEFCRUwsIHRoZW1lKSArXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKFtjbHMuSVRFTV9HUk9VUF9MQUJFTCwgY2xzLkRJU0FCTEVEXSwgdGhlbWUuZGlzYWJsZWQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBjc3Mgc3RyaW5ncyBmb3IgSXRlbVxuICAgKiBAcGFyYW0ge29iamVjdH0gdGhlbWUgLSB0aGVtZSBvYmplY3RcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGRJdGVtKHRoZW1lKSB7XG4gICAgaWYgKHRoZW1lLmhlaWdodCkge1xuICAgICAgdGhlbWUubGluZUhlaWdodCA9IHRoZW1lLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKHRoZW1lLnNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBiYXNlID0gdHJhbnNmb3JtKGJhc2VUaGVtZSk7XG5cbiAgICAgIHRoZW1lLnNlbGVjdGVkID0geyAuLi5iYXNlLml0ZW0uc2VsZWN0ZWQsIC4uLnRoZW1lLnNlbGVjdGVkIH07XG4gICAgICB0aGVtZS5kaXNhYmxlZCA9IHsgLi4uYmFzZS5pdGVtLmRpc2FibGVkLCAuLi50aGVtZS5kaXNhYmxlZCB9O1xuICAgICAgdGhlbWUuaGlnaGxpZ2h0ZWQgPSB7IC4uLmJhc2UuaXRlbS5oaWdobGlnaHRlZCwgLi4udGhlbWUuaGlnaGxpZ2h0ZWQgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhjbHMuSVRFTSwgdGhlbWUpICtcbiAgICAgIHRoaXMuYnVpbGRDc3NTdHJpbmcoW2Nscy5JVEVNLCBjbHMuU0VMRUNURURdLCB0aGVtZS5zZWxlY3RlZCkgK1xuICAgICAgdGhpcy5idWlsZENzc1N0cmluZyhbY2xzLklURU0sIGNscy5ESVNBQkxFRF0sIHRoZW1lLmRpc2FibGVkKSArXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKFtjbHMuSVRFTSwgY2xzLkhJR0hMSUdIVF0sIHRoZW1lLmhpZ2hsaWdodGVkKSArXG4gICAgICB0aGlzLmJ1aWxkQ3NzU3RyaW5nKGAke2Nscy5JVEVNX0dST1VQfT4uJHtjbHMuSVRFTX1gLCB0aGVtZS5pbkl0ZW1Hcm91cClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNzcyBzdHJpbmdzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBjbGFzc05hbWVcbiAgICogQHBhcmFtIHtvYmplY3R9IHRoZW1lIC0gdGhlbWUgb2JqZWN0XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkQ3NzU3RyaW5nKGNsYXNzTmFtZSwgdGhlbWUpIHtcbiAgICBpZiAoaXNBcnJheShjbGFzc05hbWUpKSB7XG4gICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuam9pbignLicpO1xuICAgIH1cbiAgICBjbGFzc05hbWUgPSBgLiR7Y2xhc3NOYW1lfWA7XG5cbiAgICBsZXQgY3NzU3RyaW5nID0gJyc7XG4gICAgZm9yRWFjaE93blByb3BlcnRpZXModGhlbWUsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjc3NTdHJpbmcgKz0gYCR7a2V5fToke3ZhbHVlfTtgO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNzc1N0cmluZyA/IGAke3RoaXMuY29udGFpbmVyU2VsZWN0b3J9ICR7Y2xhc3NOYW1lfXske2Nzc1N0cmluZ319YCA6ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3RvcnkgYSB0aGVtZVxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICByZW1vdmVFbGVtZW50KHRoaXMuc3R5bGVFbCk7XG4gICAgdGhpcy5zdHlsZUVsID0gbnVsbDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoZW1lIGNvbmZpZ3VyYXRpb25cbiAqIEBhdXRob3IgTkhOIEZFIERldmVsb3BtZW50IExhYiA8ZGxfamF2YXNjcmlwdEBuaG4uY29tPlxuICovXG5cbi8qKlxuICogVGhlbWUgY29uZmlndXJhdGlvbi5cbiAqIFwiY29tbW9uXCIgcHJlZml4IGlzIGZvciB0aGUgZW50aXJlIHNlbGVjdCBib3guIEl0cyBwcm9wZXJ0aWVzIGFyZSBvdmVycmlkZW4gYnkgXCJpbnB1dFwiLCBcImRyb3Bkb3duXCIsIFwiaXRlbUdyb3VwXCIsIGFuZCBcIml0ZW1cIi5cbiAqIFRoZSBleGFtcGxlIHVzaW5nIHRoZW1lIGNhbiBiZSBmb3VuZCB7QGxpbmsgdHV0b3JpYWwtZXhhbXBsZTAyLXRoZW1lIGhlcmV9LlxuICogQHR5cGVkZWYge29iamVjdH0gdGhlbWVDb25maWdcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB0aGVtZUNvbmZpZyA9IHtcbiAqICAgJ2NvbW1vbi5ib3JkZXInOiAnMXB4IHNvbGlkICNkZGQnLCAvLyBib3JkZXIgZm9yIGlucHV0IGFuZCBkcm9wZG93biAobm90IGl0ZW1Hcm91cCBhbmQgaXRlbSlcbiAqICAgJ2NvbW1vbi5iYWNrZ3JvdW5kJzogJyNmZmYnLFxuICogICAnY29tbW9uLmNvbG9yJzogJyMzMzMnLFxuICogICAnY29tbW9uLndpZHRoJzogJzEwMCUnLFxuICogICAnY29tbW9uLmhlaWdodCc6ICcyOXB4JywgLy8gaGVpZ2h0IGZvciBpdGVtIGFuZCBpdGVtR3JvdXAgbGFiZWwgKG5vdCBlbnRpcmUgc2VsZWN0IGJveClcbiAqXG4gKiAgICdjb21tb24uZGlzYWJsZWQuYmFja2dyb3VuZCc6ICcjZjlmOWY5JyxcbiAqICAgJ2NvbW1vbi5kaXNhYmxlZC5jb2xvcic6ICdjOGM4YzgnLFxuICpcbiAqICAgLy8gSW5wdXRcbiAqICAgJ2lucHV0LmJvcmRlcic6ICcxcHggc29saWQgI2RkZCcsXG4gKiAgICdpbnB1dC5ib3JkZXJCb3R0b20nOiAnJyxcbiAqICAgJ2lucHV0LmJhY2tncm91bmQnOiAnaW5oZXJpdCcsXG4gKiAgICdpbnB1dC5jb2xvcic6ICcjMzMzJyxcbiAqICAgJ2lucHV0LndpZHRoJzogJzEwMCUnLFxuICogICAnaW5wdXQuaGVpZ2h0JzogJzI5cHgnLFxuICpcbiAqICAgLy8gSW5wdXQgd2hlbiBkcm9wZG93biBpcyBvcGVuXG4gKiAgICdpbnB1dC5vcGVuLmJvcmRlcic6ICcxcHggc29saWQgI2FhYScsXG4gKiAgICdpbnB1dC5vcGVuLmJhY2tncm91bmQnOiAnaW5oZXJpdCcsXG4gKiAgICdpbnB1dC5vcGVuLmNvbG9yJzogJyMzMzMnLFxuICpcbiAqICAgLy8gSW5wdXQgd2hlbiBzZWxlY3Rib3ggaXMgZGlzYWJsZWRcbiAqICAgJ2lucHV0LmRpc2FibGVkLmJvcmRlcic6ICcxcHggc29saWQgI2FhYScsXG4gKiAgICdpbnB1dC5kaXNhYmxlZC5iYWNrZ3JvdW5kJzogJyNmOWY5ZjknLFxuICogICAnaW5wdXQuZGlzYWJsZWQuY29sb3InOiAnI2M4YzhjOCcsXG4gKlxuICogICAvLyBEcm9wZG93blxuICogICAnZHJvcGRvd24uYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAqICAgJ2Ryb3Bkb3duLmJvcmRlclRvcCc6ICcwJyxcbiAqICAgJ2Ryb3Bkb3duLmJhY2tncm91bmQnOiAnaW5oZXJpdCcsXG4gKiAgICdkcm9wZG93bi53aWR0aCc6ICcxMDAlJyxcbiAqICAgJ2Ryb3Bkb3duLm1heEhlaWdodCc6ICcnLFxuICpcbiAqICAgLy8gSXRlbUdyb3VwJ3MgaXRlbXNcbiAqICAgLy8gaWYgeW91IHdhbnQgdG8gc2V0IHRoZSBzYW1lIHBhZGRpbmcgdmFsdWUgYXMgdGhlIGl0ZW1Hcm91cC5sYWJlbCwgc2V0IHRvICc4cHgnLlxuICogICAnaXRlbUdyb3VwLml0ZW1zLnBhZGRpbmdMZWZ0JzogJzIwcHgnLFxuICpcbiAqICAgLy8gSXRlbUdyb3VwJ3MgbGFiZWxcbiAqICAgJ2l0ZW1Hcm91cC5sYWJlbC5ib3JkZXInOiAnMCcsXG4gKiAgICdpdGVtR3JvdXAubGFiZWwuYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2l0ZW1Hcm91cC5sYWJlbC5jb2xvcic6ICcjMzMzJyxcbiAqICAgJ2l0ZW1Hcm91cC5sYWJlbC5mb250V2VpZ2h0JzogJ2JvbGQnLFxuICogICAnaXRlbUdyb3VwLmxhYmVsLmhlaWdodCc6ICcyOXB4JyxcbiAqXG4gKiAgIC8vIGRpc2FibGVkIEl0ZW1Hcm91cCdzIGxhYmVsXG4gKiAgICdpdGVtR3JvdXAubGFiZWwuZGlzYWJsZWQuYm9yZGVyJzogJzAnLFxuICogICAnaXRlbUdyb3VwLmxhYmVsLmRpc2FibGVkLmJhY2tncm91bmQnOiAnaW5oZXJpdCcsXG4gKiAgICdpdGVtR3JvdXAubGFiZWwuZGlzYWJsZWQuY29sb3InOiAnIzMzMycsXG4gKlxuICogICAvLyBJdGVtXG4gKiAgICdpdGVtLmJvcmRlcic6ICcwJyxcbiAqICAgJ2l0ZW0uYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAqICAgJ2l0ZW0uY29sb3InOiAnIzMzMycsXG4gKiAgICdpdGVtLmhlaWdodCc6ICcyOXB4JyxcbiAqXG4gKiAgIC8vIHNlbGVjdGVkIEl0ZW1cbiAqICAgJ2l0ZW0uc2VsZWN0ZWQuYm9yZGVyJzogJzAnLFxuICogICAnaXRlbS5zZWxlY3RlZC5iYWNrZ3JvdW5kJzogJyNmNGY0ZjQnLFxuICogICAnaXRlbS5zZWxlY3RlZC5jb2xvcic6ICcjMzMzJyxcbiAqXG4gKiAgIC8vIGRpc2FibGVkIEl0ZW1cbiAqICAgJ2l0ZW0uZGlzYWJsZWQuYm9yZGVyJzogJzAnLFxuICogICAnaXRlbS5kaXNhYmxlZC5iYWNrZ3JvdW5kJzogJyNmOWY5ZjknLFxuICogICAnaXRlbS5kaXNhYmxlZC5jb2xvcic6ICcjYzhjOGM4JyxcbiAqXG4gKiAgIC8vIGhpZ2hsaWdodGVkIEl0ZW1cbiAqICAgJ2l0ZW0uaGlnaGxpZ2h0ZWQuYm9yZGVyJzogJzAnLFxuICogICAnaXRlbS5oaWdobGlnaHRlZC5iYWNrZ3JvdW5kJzogJyNlNWY2ZmYnLFxuICogICAnaXRlbS5oaWdobGlnaHRlZC5jb2xvcic6ICcjMzMzJ1xuICogfTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAnY29tbW9uLmJvcmRlcic6ICcxcHggc29saWQgI2RkZCcsIC8vIGJvcmRlciBmb3IgaW5wdXQgYW5kIGRyb3Bkb3duIChub3QgaXRlbUdyb3VwIGFuZCBpdGVtKVxuICAnY29tbW9uLmJhY2tncm91bmQnOiAnI2ZmZicsXG4gICdjb21tb24uY29sb3InOiAnIzMzMycsXG4gICdjb21tb24ud2lkdGgnOiAnMTAwJScsXG4gICdjb21tb24uaGVpZ2h0JzogJzI5cHgnLCAvLyBoZWlnaHQgZm9yIGl0ZW0gYW5kIGl0ZW1Hcm91cCBsYWJlbCAobm90IGVudGlyZSBzZWxlY3QgYm94KVxuXG4gICdjb21tb24uZGlzYWJsZWQuYmFja2dyb3VuZCc6ICcjZjlmOWY5JyxcbiAgJ2NvbW1vbi5kaXNhYmxlZC5jb2xvcic6ICdjOGM4YzgnLFxuXG4gIC8vIElucHV0XG4gICdpbnB1dC5ib3JkZXInOiAnMXB4IHNvbGlkICNkZGQnLFxuICAnaW5wdXQuYm9yZGVyQm90dG9tJzogJycsXG4gICdpbnB1dC5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICAnaW5wdXQuY29sb3InOiAnIzMzMycsXG4gICdpbnB1dC53aWR0aCc6ICcxMDAlJyxcbiAgJ2lucHV0LmhlaWdodCc6ICcyOXB4JyxcblxuICAvLyBJbnB1dCB3aGVuIGRyb3Bkb3duIGlzIG9wZW5cbiAgJ2lucHV0Lm9wZW4uYm9yZGVyJzogJzFweCBzb2xpZCAjYWFhJyxcbiAgJ2lucHV0Lm9wZW4uYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAgJ2lucHV0Lm9wZW4uY29sb3InOiAnIzMzMycsXG5cbiAgLy8gSW5wdXQgd2hlbiBzZWxlY3Rib3ggaXMgZGlzYWJsZWRcbiAgJ2lucHV0LmRpc2FibGVkLmJvcmRlcic6ICcxcHggc29saWQgI2FhYScsXG4gICdpbnB1dC5kaXNhYmxlZC5iYWNrZ3JvdW5kJzogJyNmOWY5ZjknLFxuICAnaW5wdXQuZGlzYWJsZWQuY29sb3InOiAnI2M4YzhjOCcsXG5cbiAgLy8gRHJvcGRvd25cbiAgJ2Ryb3Bkb3duLmJvcmRlcic6ICcxcHggc29saWQgI2FhYScsXG4gICdkcm9wZG93bi5ib3JkZXJUb3AnOiAnMCcsXG4gICdkcm9wZG93bi5iYWNrZ3JvdW5kJzogJ2luaGVyaXQnLFxuICAnZHJvcGRvd24ud2lkdGgnOiAnMTAwJScsXG4gICdkcm9wZG93bi5tYXhIZWlnaHQnOiAnJyxcblxuICAvLyBJdGVtR3JvdXAncyBpdGVtc1xuICAnaXRlbUdyb3VwLml0ZW1zLnBhZGRpbmdMZWZ0JzogJzIwcHgnLFxuXG4gIC8vIEl0ZW1Hcm91cCdzIGxhYmVsXG4gICdpdGVtR3JvdXAubGFiZWwuYm9yZGVyJzogJzAnLFxuICAnaXRlbUdyb3VwLmxhYmVsLmJhY2tncm91bmQnOiAnaW5oZXJpdCcsXG4gICdpdGVtR3JvdXAubGFiZWwuY29sb3InOiAnIzMzMycsXG4gICdpdGVtR3JvdXAubGFiZWwuZm9udFdlaWdodCc6ICdib2xkJyxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5oZWlnaHQnOiAnMjlweCcsXG5cbiAgLy8gZGlzYWJsZWQgSXRlbUdyb3VwJ3MgbGFiZWxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5kaXNhYmxlZC5ib3JkZXInOiAnMCcsXG4gICdpdGVtR3JvdXAubGFiZWwuZGlzYWJsZWQuYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAgJ2l0ZW1Hcm91cC5sYWJlbC5kaXNhYmxlZC5jb2xvcic6ICcjMzMzJyxcblxuICAvLyBJdGVtXG4gICdpdGVtLmJvcmRlcic6ICcwJyxcbiAgJ2l0ZW0uYmFja2dyb3VuZCc6ICdpbmhlcml0JyxcbiAgJ2l0ZW0uY29sb3InOiAnIzMzMycsXG4gICdpdGVtLmhlaWdodCc6ICcyOXB4JyxcblxuICAvLyBzZWxlY3RlZCBJdGVtXG4gICdpdGVtLnNlbGVjdGVkLmJvcmRlcic6ICcwJyxcbiAgJ2l0ZW0uc2VsZWN0ZWQuYmFja2dyb3VuZCc6ICcjZjRmNGY0JyxcbiAgJ2l0ZW0uc2VsZWN0ZWQuY29sb3InOiAnIzMzMycsXG5cbiAgLy8gZGlzYWJsZWQgSXRlbVxuICAnaXRlbS5kaXNhYmxlZC5ib3JkZXInOiAnMCcsXG4gICdpdGVtLmRpc2FibGVkLmJhY2tncm91bmQnOiAnI2Y5ZjlmOScsXG4gICdpdGVtLmRpc2FibGVkLmNvbG9yJzogJyNjOGM4YzgnLFxuXG4gIC8vIGhpZ2hsaWdodGVkIEl0ZW1cbiAgJ2l0ZW0uaGlnaGxpZ2h0ZWQuYm9yZGVyJzogJzAnLFxuICAnaXRlbS5oaWdobGlnaHRlZC5iYWNrZ3JvdW5kJzogJyNlNWY2ZmYnLFxuICAnaXRlbS5oaWdobGlnaHRlZC5jb2xvcic6ICcjMzMzJ1xufTtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBVdGlsaXR5IGZ1bmN0aW9uc1xuICogQGF1dGhvciBOSE4uIEZFIGRldiB0ZWFtLjxkbF9qYXZhc2NyaXB0QG5obi5jb20+XG4gKi9cblxuaW1wb3J0IGZvckVhY2hPd25Qcm9wZXJ0aWVzIGZyb20gJ3R1aS1jb2RlLXNuaXBwZXQvY29sbGVjdGlvbi9mb3JFYWNoT3duUHJvcGVydGllcyc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAndHVpLWNvZGUtc25pcHBldC90eXBlL2lzU3RyaW5nJztcblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gb2JqZWN0IHVzaW5nIGRvdCBub3RhdGlvblxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIG9iamVjdCB0byB0cmFuc2Zvcm1cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybSA9IG9iaiA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIGZvckVhY2hPd25Qcm9wZXJ0aWVzKG9iaiwgKHZhbHVlLCBwcm9wKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IHByb3Auc3BsaXQoJy4nKTtcbiAgICBsZXQgY3VyciA9IHJlc3VsdDtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY3VycltrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKCFjdXJyW2tleV0pIHtcbiAgICAgICAgY3VycltrZXldID0ge307XG4gICAgICB9XG4gICAgICBjdXJyID0gY3VycltrZXldO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIC0gdGFnIG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gY29udGVudCBpbiB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBvdGhlciBwcm9wZXJ0aWVzIGZvciB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gcGFyZW50IGVsZW1lbnQgZm9yIHRoZSBlbGVtZW50XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnTmFtZSwgY29udGVudCwgb3B0aW9ucywgY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBpZiAoY29udGVudCkge1xuICAgIGVsLmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gIH1cblxuICBmb3JFYWNoT3duUHJvcGVydGllcyhvcHRpb25zLCAodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmIChrZXkuaW5kZXhPZignZGF0YS0nKSA+IC0xKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG5cbiAgcmV0dXJuIGVsO1xufTtcblxuLyoqXG4gKiBHZXQgc2VsZWN0b3JzIGZvciBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCAtIGVsZW1lbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlbGVjdG9yID0gZWwgPT4ge1xuICBpZiAoaXNTdHJpbmcoZWwpKSB7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgaWYgKGVsLmlkKSB7XG4gICAgcmV0dXJuIGAjJHtlbC5pZH1gO1xuICB9XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gYC4ke2VsLmNsYXNzTmFtZS5yZXBsYWNlKC9cXHMrL2csICcuJyl9YDtcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xuXG4gICAgaWYgKGVsZW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0YWdOYW1lID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIHJldHVybiBgJHt0YWdOYW1lfSR7Y2xhc3NOYW1lfWA7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==