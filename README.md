[![GitHub](https://img.shields.io/github/license/EiskalterFreund/nodeactyl-v1-support)](https://github.com/EiskalterFreund/nodeactyl-v1-support/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/nodeactyl-v1-support)](https://www.npmjs.com/package/nodeactyl-v1-support)
[![GitHub issues](https://img.shields.io/github/issues/EiskalterFreund/nodeactyl-v1-support)](https://github.com/EiskalterFreund/nodeactyl-v1-support/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/EiskalterFreund/nodeactyl-v1-support)](https://github.com/EiskalterFreund/nodeactyl-v1-support/pulls)

THIS PACKAGE HAS BEEN DEPRECATED, USE `pteroly`

I added pterodactyl v1 support to nodeactyl <br/>
Promo to Linux123123 for making readme in concept with EiskalterFreund
Credits to BearTS

How to install?
----------------------------------------------------------------------------------------------------
Install using `npm`:
```
npm install nodeactyl-v1-support
```
Then paste this inside your `YOURAPP.js`:
```javascript
const node = require('nodeactyl-v1-support');
const client = node.Client
const admin = node.Admin
```

And now you are ready to go!
----------------------------------------------------------------------------------------------------

How to use?
----------------------------------------------------------------------------------------------------
To login to your Pterodactyl panel use:
```javascript
client.login('YOUR HOST', 'YOUR CLIENT API KEY', (logged_in, msg) => 
{
    console.log('Log in status CLIENT: ' + logged_in) // return a Boolean (true/false) if logged in.
    if (!logged_in) {
        console.log(msg.split("(Application)")[0] + "(CLIENT)") // logs the error
    }
})

// This only if you have an admin api key
admin.login("YOUR HOST", "YOUR ADMIN API KEY", (logged_in, msg) => {
    console.log("Log in statu ADMIN: " + logged_in) // return a Boolean (true/false) if logged in.
    if (!logged_in) {
        console.log(msg.split("(Application)")[0] + "(ADMIN)") // logs the error
    }
})
```
And then you can use any funtion you want:
```javascript
client.FUNCTIONNAME(<NEEDED VALUES>).then((response) => {
	// and now functions with response for example "consle.log(response)" or what you want
})

admin.FUNCTIONNAME(<NEEDED VALUES>).then((response) => {
	
})
```

NOTE: You can use every function from original nodeactyl: https://docs.nodeactyl.xyz/
---------------------------------------------------------------------------------------------------

How our Version numbers work:
---------------------------------------------------------------------------------------------------
- The first number means the release number.
- The second number means function release.
- The third number means Bug fix version code.
<p>Example: 1.5.1 = Release one, function update two, bug fix update two.</p>
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
