var gcm = require('node-gcm'); 
var gcmConnection = new gcm.Sender(process.env.GCM_API_KEY || 'xxx');

module.exports = function(){
	function sendInviteNotification(tokens){
		var message = new gcm.Message({
    		collapseKey: 'inviteNotification',
    		dryRun: false,
    		data: {
       			message: 'You have a new invitation!'
    		}
		});
		sendNotification(message, tokens);
	}

	function sendNotification(message, tokens){
		gcmConnection.send(message, { registrationTokens: tokens }, function (err, response) {
			console.log(err);
			console.log(response);
    		if(err){
    			console.log(err);
    		} else{
    			console.log(response);
    		}
		});
	}
	return {
		sendInviteNotification: sendInviteNotification
	}
}()