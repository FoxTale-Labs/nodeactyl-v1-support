const { version } = require('discord.js');
const req = require('../ApplicationRequest.js');
/**
 * @param {String} Version Version of the server to use
 * @param {String} NameOfServer Name of server to create
 * @param {Integer} OwnerID User ID of who should own this server
 * @param {Integer} NestID ID of the nest to use when making a server
 * @param {Integer} EggID Egg ID to use when installing the server
 * @param {String} DockerImage The image to use from Docker
 * @param {String} StartupCmd The command to use when starting this server (AKA JVM Arguments)
 * @param {Integer} RAM The amount of RAM the server has
 * @param {Integer} Swap The amount of Swap the server has
 * @param {Integer} Disk The amount of Storage the server has
 * @param {Integer} IO Set this to 500 please. (Even if you know what it is leave it alone)
 * @param {Integer} CPU The amount of CPU Power the server can use (100 = 1 core);
 * @param {Integer} AmountOfDatabases The max amount of databases a server can use
 * @param {Integer} AmountOfAllocations The max amount of allocation(s) a server can us
 *
 * @yields Object (refer to docs for schema);
 */
function createServer(allocationID, Version, NameOfServer, Description, OwnerID, EggID, DockerImage,
	StartupCmd, RAM, Swap, Disk, IO, CPU,
	AmountOfDatabases, AmountOfAllocations, backups, node) {
	const data = makeData(allocationID, Version, NameOfServer, Description, OwnerID, EggID, DockerImage, StartupCmd, RAM, Swap, Disk, IO, CPU, AmountOfDatabases, AmountOfAllocations, backups, node);
	const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
	return Req.postRequest('CreateServer', data, null);
}

function makeData(allocationID, Version, NameOfServer, Description, OwnerID, EggID, DockerImage,
	StartupCmd, RAM, Swap, Disk, IO, CPU,
	AmountOfDatabases, AmountOfAllocations, backups, node) {
	return {
		'name': NameOfServer,
		'user': OwnerID,
		'description': Description,
		"node": node,
		'egg': EggID,
		'docker_image': DockerImage,
		'startup': StartupCmd,
		'limits': {
			'memory': RAM,
			'swap': Swap,
			'disk': Disk,
			'io': IO,
			'cpu': CPU,
		},
		'feature_limits': {
			'databases': AmountOfDatabases,
			'allocations': AmountOfAllocations,
			'backups': backups
		},
		'environment': {
			'DL_VERSION': Version,
			'SERVER_JARFILE': 'server.jar',
			'VANILLA_VERSION': Version,
			'BUNGEE_VERSION': Version,
			'PAPER_VERSION': Version,
			'MC_VERSION': Version,
			'BUILD_NUMBER': Version,
			'INSTALL_REPO': Version,
			"BOT_JS_FILE": "index.js",
			"AUTO_UPDATE": false,
			"USER_UPLOAD": true,
			"BOT_PY_FILE": "bot.py",
			"REQUIREMENTS_FILE": "python requirements.txt",
			"BEDROCK_VERSION": version,
			"LD_LIBRARY_PATH": ".",
			"SERVERNAME": NameOfServer,
			"GAMEMODE": "survival",
			"DIFFICULTY": "easy",
			"CHEATS": "false",
			"BUILD_TYPE": "recommended",
			"PGDATABASE": ".",
			"PGUSER": ".",
			"PGROOT": ".",
			"PGPASSWORD": ".",
			"MINECRAFT_VERSION": Version,
			"NUKKIT_VERSION": "latest",
			"JARFILE": "bot.jar",
			"VERSION": "latest",
			"QUERY_PORT": "10101",
			"FILE_PORT": "303030",
			"SERVER_MOTD": "TeaSpeak\n\rHosted on PureNodes!",
			"LD_LIBRARY_PATH": "./libs/",
			"LD_PRELOAD": "./libs/libjemalloc.so.2",
			"SERVER_JARFILE": "server.jar",
			"MATCH": "ts3-manager-linux-x64",
			"GITHUB_PACKAGE": "joni1802/ts3-manager",
			"SERVER_VERSION": "latest",
			"RELEASE_VERSION": "latest",
			"CHANNEL_NAME": ".",
			"CHANNEL_OWNER": ".",
			"BOT_OAUTH_TOKEN": ".",
			"USER_OAUTH_TOKEN": ".",
			"BOT_TWITCH_USERNAME": ".",
			"WEBPANEL_USERNAME": ".",
			"WEBPANEL_PASSWORD": ".",
			"YOUTUBE_API_KEY": ".",
			"DISCORD_BOT_TOKEN": ".",
			"PMMP_VERSION": "latest"
		},
		"allocation": {
			"default": allocationID
		},
		'start_on_completion': true,
		'skip_scripts': false,
		'oom_disabled': true,
	};
}
module.exports = createServer;
