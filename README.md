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