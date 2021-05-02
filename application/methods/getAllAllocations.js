const req = require('../ApplicationRequest.js');

function getAllAllocations(location) {
	const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
	return Req.getRequest('GetAllAllocations', location);
}

module.exports = getAllAllocations;