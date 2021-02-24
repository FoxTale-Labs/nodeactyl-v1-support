const req = require('../ApplicationRequest.js');

function GetAllAllocations(node) {
	const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
	return Req.getRequest('GetAllAllocations', node);
}

module.exports = GetAllAllocations;