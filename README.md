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
----------------------------------------------------------------------------------------------------
- Added v1 support of pterodactyl panel to nodeactyl
- You can access Disk size and Ram size seperatly from usage
- 2 new functions added:
  GetServerName
  GetNummericIP
- Fixed some Bugs
----------------------------------------------------------------------------------------------------

How to use?
----------------------------------------------------------------------------------------------------
node.login('HOST', "APIKEY", (logged_in, msg) => {
	console.log('Log in status: ' + logged_in); // return a Boolean (true/false) if logged in.
})

and with

node.FUNCTIONNAME('server_id').then((response) => {
	// and now functions with response for example "consle.log(response)" or what you want
})

NOTE: You can use every function from original nodeactyl: https://docs.nodeactyl.xyz/
---------------------------------------------------------------------------------------------------

How our Version numbers work:
---------------------------------------------------------------------------------------------------
- The first number means the release number.
- The second number means function release
- The third number means Bug fix version code
Example:
1.2.2 = Release one, function update two, bug fix update two
--------------------------------------------------------------------------------------------------

Disclaimer
--------------------------------------------------------------------------------------------------
I am not responsible for any damages that you cause to your servers/nodes by using this API.

Remember: This API can potentially be dangerous with the ability to Delete Servers/Nodes at an instant 
is extremely easy!

It is not our fault if your API key is revealed to the public. When asking for help please do not 
send the full stack error. This will reveal your ENTIRE Host/Application API key in the request, 
if someone asks you to show them the error it should only be trusted sources! (Such as the 
Pterodactyl Team and I). You should also have your API key changed every 1-3 days to 
prevent issues like this.
--------------------------------------------------------------------------------------------------
