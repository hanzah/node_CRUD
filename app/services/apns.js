var apn = require('apn');
var apnConnection = new apn.Provider({
	//cert: process.env.APNS_CERT || '../config/certificates/sandbox/cert.pem',
	//key: process.env.APNS_KEY || '../config/certificates/sandbox/key.pem',
	production: process.env.APNS_ENV == 'production'
});

apnConnection.on("transmitted", function(notification, device) {
    console.log("Notification transmitted to:" + device.token.toString("hex"));
});

apnConnection.on("transmissionError", function(errCode, notification, device) {
    console.error("Notification caused error: " + errCode + " for device ", device, notification);
    if (errCode === 8) {
        console.log("A error code of 8 indicates that the device token is invalid. This could be for a number of reasons - are you using the correct environment? i.e. Production vs. Sandbox");
    }
});

module.exports = function(){
	function sendInviteNotification(tokens){
    	var note = new apn.notification();
    	note.alert("You have a new invitation!");
    	note.badge = 1;
    	note.payload = {'messageType': 'Invitation'};

    	apnConnection.send(note, tokens).then(function(result){
            console.log(result);
        });
	}

	return {
		sendShareNotification: sendShareNotification,
        sendJoinMeetingNotification: sendJoinMeetingNotification,
        sendLeftMeetingNotification: sendLeftMeetingNotification
	}
}()