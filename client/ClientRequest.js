const axios = require('axios');

function bytesToSize(bytes) {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
	if (bytes === 0) return 'n/a'

	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1012)), 10)
	if (i === 0) return `${bytes} ${sizes[i]})`
	return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
  }

class Request {
	constructor(host, key) {
		this.host = host;
		this.key = key;
	}

	getRequest(request, data) {
		const URL = getUrl(request, this.host, data); // data is nullable

		var splittedURL = URL.split('/')
		var splitted = '';
		var i = 0;
		for (i = 0; i < splittedURL.length; i++)
		{
			if (splittedURL[i] == 'resources') { }
			else
			{
				if (splittedURL[i] == 'https:')
					splitted += splittedURL[i];
				else
					splitted += '/' + splittedURL[i];
			}
		}

		if (request == 'GetServerStatus' || request == 'GetCPUUsage' || request == 'GetDiskUsage' || request == 'GetRamUsage')
		{
			return axios.default.get(splitted + '/resources', {
				maxRedirects: 5,
				headers: {
					'Authorization': 'Bearer ' + this.key,
					'Content-Type': 'application/json',
					'Accept': 'Application/vnd.pterodactyl.v1+json',
				},
			}).then(response => {
				if (request == 'GetServerStatus'){
					return response.data.attributes.current_state;
				}
				else if (request == 'GetCPUUsage') {
					return response.data.attributes.resources.cpu_absolute + '%';
				}
				else if (request == 'GetRamUsage') {
					return bytesToSize(response.data.attributes.resources.memory_bytes);
				}
				else if (request == 'GetDiskUsage') {
					return bytesToSize(response.data.attributes.resources.disk_bytes);
				}
			})
			.catch(error => {
				const err = createError(request, error);
				if (err) throw err;
			});
		}
		else
		{
			return axios.default.get(splitted, {
				maxRedirects: 5,
				headers: {
					'Authorization': 'Bearer ' + this.key,
					'Content-Type': 'application/json',
					'Accept': 'Application/vnd.pterodactyl.v1+json',
				},
			}).then(response => {
				if (request == 'GetAllServers') {
					return response.data.data;
				}
				else if(request == 'GetServerInfo') {
					return response.data;
				}
				else if (request == 'IsOwner') {
					return response.data.attributes.server_owner;
				}
				else if (request == 'GetCPUCores') {
					return response.data.attributes.limits.cpu + '%';
				}
				else if (request == 'GetRam') {
					return bytesToSize(response.data.attributes.limits.memory + '000000');
				}
				else if (request == 'GetDisk') {
					return bytesToSize(response.data.attributes.limits.disk + '000000');
				}
			}).catch(error => {
				const err = createError(request, error);
				if (err) throw err;
			});
		}
	}

	postRequest(request, data, data_) { // data_ is normally the serverID
		const URL = getUrl(request, this.host, data_);
		return axios({
			url: URL,
			method: 'POST',
			followRedirect: true,
			maxRedirects: 5,
			headers: {
				'Authorization': 'Bearer ' + this.key,
				'Content-Type': 'application/json',
				'Accept': 'Application/vnd.pterodactyl.v1+json',
			},
			data: data,
		}).then(response => {
			if (request == 'StartServer') {
				return 'Server started successfully';
			}
			else if (request == 'StopServer') {
				return 'Server stopped successfully';
			}
			else if (request == 'KillServer') {
				return 'Server killed successfully';
			}
			else if (request == 'RestartServer') {
				return 'Server restarted successfully';
			}
			else if (request == 'SendCommand') {
				return 'Command send successfully';
			}
		}).catch(error => {
			const err = createError(request, error);
			if (err) throw err;
		});
	}
}

const utilization = ['GetCPUCores', 'GetRam', 'GetDisk'];
const status = ['GetServerStatus', 'GetCPUUsage', 'GetRamUsage', 'GetDiskUsage']
const info = ['GetServerInfo', 'IsOwner'];
const powerAction = ['StartServer', 'StopServer', 'KillServer', 'RestartServer'];
function getUrl(request, host, data) {
	if (request == 'GetAllServers') {
		return host + '/api/client';
	}
	else if (info.indexOf(request) > -1) {
		return host + '/api/client/servers/' + data;
	}
	else if (utilization.indexOf(request) > -1) {
		return host + '/api/client/servers/' + data + '/';
	}
	else if (status.indexOf(request) > -1) {
		return host + '/api/client/servers/' + data + '/resources';
	}
	else if (powerAction.indexOf(request) > -1) {
		return host + '/api/client/servers/' + data + '/power';
	}
	else if (request == 'SendCommand') {
		return host + '/api/client/servers/' + data + '/command';
	}
}

function createError(request, err) {
	return err;
	// will work on this later
}

module.exports = Request;
