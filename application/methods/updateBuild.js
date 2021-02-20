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
function updateBuild(id, RAM, Disk, IO, CPU,
	AmountOfDatabases, AmountOfAllocations, Backups) {
	const data = makeData(id, RAM, Disk, IO, CPU,
		AmountOfDatabases, AmountOfAllocations, Backups);
	const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
	return Req.patchRequest('UpdateBuild', data, null);
}

function makeData(id, RAM, Disk, IO, CPU,
	AmountOfDatabases, AmountOfAllocations, Backups) {
	return {
		"id": id,
		"allocation": "1",
		'memory': RAM,
		'swap': "0",
		'disk': Disk,
		'io': IO,
		'cpu': CPU,
		"threads": null,
		'feature_limits': {
			'databases': AmountOfDatabases,
			'allocations': AmountOfAllocations,
			"backups": Backups
		}
	};
}
module.exports = updateBuild;
