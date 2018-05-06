/**
*	@filename	OOG.js
*	@author		kolton, D3STROY3R, vita
*	@desc		handle out of game operations like creating characters/accounts, maintaining profile datafiles, d2bot# logging etc.
*				modded for vitabot
*/

var D2Bot = {
	handle: 0,

	init: function () {
		var handle = DataFile.getStats().handle;

		if (handle) {
			this.handle = handle;
		}

		return this.handle;
	},

	sendMessage: function (handle, mode, msg) {
		sendCopyData(null, handle, mode, msg);
	},

	printToConsole: function (msg, color, tooltip, trigger) {
		var printObj = {
				msg: msg,
				color: color || 0,
				tooltip: tooltip || "",
				trigger: trigger || ""
			},

			obj = {
				profile: me.profile,
				func: "printToConsole",
				args: [JSON.stringify(printObj)]
			};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	printToItemLog: function (itemObj) {
		var obj = {
				profile: me.profile,
				func: "printToItemLog",
				args: [JSON.stringify(itemObj)]
			};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	uploadItem: function (itemObj) {
		var obj = {
				profile: me.profile,
				func: "uploadItem",
				args: [JSON.stringify(itemObj)]
			};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	writeToFile: function (filename, msg) {
		var obj = {
			profile: me.profile,
			func: "writeToFile",
			args: [filename, msg]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	postToIRC: function (ircProfile, recepient, msg) {
		var obj = {
			profile: me.profile,
			func: "postToIRC",
			args: [ircProfile, recepient, msg]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	ircEvent: function (mode) {
		var obj = {
			profile: me.profile,
			func: "ircEvent",
			args: [mode ? "true" : "false"]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	notify: function (msg) {
		var obj = {
			profile: me.profile,
			func: "notify",
			args: [msg]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	saveItem: function (itemObj) {
		var obj = {
				profile: me.profile,
				func: "saveItem",
				args: [JSON.stringify(itemObj)]
			};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	updateStatus: function (msg) {
		var obj = {
			profile: me.profile,
			func: "updateStatus",
			args: [msg]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	updateRuns: function () {
		var obj = {
			profile: me.profile,
			func: "updateRuns",
			args: []
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	updateChickens: function () {
		var obj = {
			profile: me.profile,
			func: "updateChickens",
			args: []
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	updateDeaths: function () {
		var obj = {
			profile: me.profile,
			func: "updateDeaths",
			args: []
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	requestGameInfo: function () {
		var obj = {
			profile: me.profile,
			func: "requestGameInfo",
			args: []
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	getProfile: function () {
		var obj = {
			profile: me.profile,
			func: "getProfile",
			args: []
		};

        sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	setProfile: function(account, password, character, difficulty, realm, infotag) {
		var obj = {
			profile: me.profile,
			func: "setProfile",
			args: [account, password, character, difficulty, realm, infotag]
		};

        sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	restart: function (keySwap) {
		var obj = {
			profile: me.profile,
			func: "restartProfile",
			args: arguments.length > 0 ? [me.profile, keySwap] : [me.profile]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	CDKeyInUse: function () {
		var obj = {
			profile: me.profile,
			func: "CDKeyInUse",
			args: []
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	CDKeyDisabled: function () {
		var obj = {
			profile: me.profile,
			func: "CDKeyDisabled",
			args: []
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	CDKeyRD: function () {
		var obj = {
			profile: me.profile,
			func: "CDKeyRD",
			args: []
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	stop: function (profile, release) {
		if (!profile) {
			profile = me.profile;
		}

		if (release === undefined) {
			release = false;
		}

		var obj = {
			profile: me.profile,
			func: "stop",
			args: [profile, release]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	start: function (profile) {
		var obj = {
			profile: me.profile,
			func: "start",
			args: [profile]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	startSchedule: function (profile) {
		var obj = {
			profile: me.profile,
			func: "startSchedule",
			args: [profile]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	stopSchedule: function (profile) {
		var obj = {
			profile: me.profile,
			func: "stopSchedule",
			args: [profile]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	updateCount: function () {
		var obj = {
			profile: me.profile,
			func: "updateCount",
			args: ["1"]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	shoutGlobal: function (msg, mode) {
		var obj = {
			profile: me.profile,
			func: "shoutGlobal",
			args: [msg, mode]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	heartBeat: function () {
		var obj = {
			profile: me.profile,
			func: "heartBeat",
			args: []
		};

		//print("�c1Heart beat " + this.handle);
		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	sendWinMsg: function (wparam, lparam) {
		var obj = {
			profile: me.profile,
			func: "winmsg",
			args: [wparam, lparam]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	ingame: function () {
		this.sendWinMsg(0x0086, 0x0000);
		this.sendWinMsg(0x0006, 0x0002);
		this.sendWinMsg(0x001c, 0x0000);
	},

	// Profile to profile communication
	joinMe: function (profile, gameName, gameCount, gamePass, isUp) {
		var obj = {
			gameName: gameName + gameCount,
			gamePass: gamePass,
			inGame: isUp === "yes"
		};

		sendCopyData(null, profile, 1, JSON.stringify(obj));
	},

	requestGame: function (profile) {
		var obj = {
			profile: me.profile
		};

		sendCopyData(null, profile, 3, JSON.stringify(obj));
	},

	// Store info in d2bot# cache
	store: function (info) {
		this.remove();

		var obj = {
			profile: me.profile,
			func: "store",
			args: [me.profile, info]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	// Get info from d2bot# cache
	retrieve: function () {
		var obj = {
			profile: me.profile,
			func: "retrieve",
			args: [me.profile]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	},

	// Delete info from d2bot# cache
	remove: function () {
		var obj = {
			profile: me.profile,
			func: "delete",
			args: [me.profile]
		};

		sendCopyData(null, this.handle, 0, JSON.stringify(obj));
	}
};

var DataFile = {
	create: function () {
		var obj, string;

		obj = {
			runs: 1,
			experience: 0,
			deaths: 0,
			lastArea: "",
			gold: 0,
			level: 0,
			name: "",
			gameName: "",
			ingameTick: 0,
			handle: 0,
			nextGame: ""
		};

		string = JSON.stringify(obj);

		FileTools.writeText("data/" + me.profile + ".json", string);

		return obj;
	},

	getObj: function () {
		var obj, string;

		if (!FileTools.exists("data/" + me.profile + ".json")) {
			DataFile.create();
		}

		string = FileTools.readText("data/" + me.profile + ".json");

		try {
			obj = JSON.parse(string);
		} catch (e) {
			// If we failed, file might be corrupted, so create a new one
			obj = this.create();
		}

		if (obj) {
			return obj;
		}

		print("Error reading DataFile. Using null values.");

		return {runs: 0, experience: 0, lastArea: "", gold: 0, level: 0, name: "", gameName: "", ingameTick: 0, handle: 0, nextGame: ""};
	},

	getStats: function () {
		var obj = this.getObj();

		return utils.cloneObject(obj);
	},

	updateStats: function (arg, value) {
		while (me.ingame && !me.gameReady) {
			delay(100);
		}

		var i, obj, string,
			statArr = [];

		if (typeof arg === "object") {
			statArr = arg.slice();
		}

		if (typeof arg === "string") {
			statArr.push(arg);
		}

		obj = this.getObj();

		for (i = 0; i < statArr.length; i += 1) {
			switch (statArr[i]) {
			case "experience":
				obj.experience = me.getStat(13);
				obj.level = me.getStat(12);

				break;
			case "lastArea":
				break;
			case "gold":
				if (!me.gameReady) {
					break;
				}

				obj.gold = me.getStat(14) + me.getStat(15);

				break;
			case "name":
				obj.name = me.name;

				break;
			case "ingameTick":
				obj.ingameTick = getTickCount();

				break;
			case "deaths":
				obj.deaths = (obj.deaths || 0) + 1;

				break;
			default:
				obj[statArr[i]] = value;

				break;
			}
		}

		string = JSON.stringify(obj);

		FileTools.writeText("data/" + me.profile + ".json", string);
	}
};