![GitHub](https://img.shields.io/github/license/EiskalterFreund/nodeactyl-v1-support)
![npm](https://img.shields.io/npm/v/nodeactyl-v1-support)
![GitHub issues](https://img.shields.io/github/issues/EiskalterFreund/nodeactyl-v1-support)
![GitHub pull requests](https://img.shields.io/github/issues-pr/EiskalterFreund/nodeactyl-v1-support)

I added pterodactyl v1 support to nodeactyl <br/>
Promo to Linux123123 for making readme in concept with EiskalterFreund

How to install?
----------------------------------------------------------------------------------------------------
Install using `npm`:
```
npm install nodeactyl-v1-support
```
Then paste this inside your `YOURAPP.js`:
```javascript
"const nodeactyl = require('nodeactyl-v1-support')"
"const node = nodeactyl.Client".
```

And now you are ready to go!
----------------------------------------------------------------------------------------------------

How to use?
----------------------------------------------------------------------------------------------------
To login to your Pterodactyl panel use:
```javascript
node.login('HOST', "APIKEY", (logged_in, msg) => {
	console.log('Log in status: ' + logged_in); // return a Boolean (true/false) if logged in.
})

```
And then you can use any funtion you want:
```javascript
node.FUNCTIONNAME('server_id').then((response) => {
	// and now functions with response for example "consle.log(response)" or what you want
})
```

node.FUNCTIONNAME('server_id').then((response) => {
	// and now functions with response for example "consle.log(response)" or what you want
})

NOTE: You can use every function from original nodeactyl: https://docs.nodeactyl.xyz/
---------------------------------------------------------------------------------------------------

How our Version numbers work:
---------------------------------------------------------------------------------------------------
- The first number means the release number.
- The second number means function release.
- The third number means Bug fix version code.
<p>Example: 1.2.2 = Release one, function update two, bug fix update two.</p>
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
