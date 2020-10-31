I added pterodactyl v1 support to nodeactyl

How to install?
----------------------------------------------------------------------------------------------------
Type "npm install nodeactyl-v1-support"

Then paste inside your "YOURAPP.js":
"const nodeactyl = require('nodeactyl-v1-support')"
"const node = nodeactyl.Client".

And now you are ready to go!
----------------------------------------------------------------------------------------------------

NEW FEATURES:
---------------------------------------------------------------------------------------------------
- Added v1 support of pterodactyl panel to nodeactyl
- You can access Disk size and Ram size seperatly from usage
---------------------------------------------------------------------------------------------------

How to use?
---------------------------------------------------------------------------------------------------
node.login('HOSTNAME', "APIKEY", (logged_in, msg) => {
	console.log('Log in status: ' + logged_in); // return a Boolean (true/false) if logged in.
})

and with

node.FUNCTIONNAME('server_id').then((response) => {
	// and now functions with response for example "consle.log(response)" or what you want
})

NOTE: You can use every function from original nodeactyl: https://docs.nodeactyl.xyz/
--------------------------------------------------------------------------------------------------
