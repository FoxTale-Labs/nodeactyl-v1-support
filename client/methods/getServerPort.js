const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to get
 */
function getServerPort(ServerID) {
	const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
	return Req.getRequest('GetServerPort', ServerID);
}

module.exports = getServerPort;