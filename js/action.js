/*
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    
    console.log(navigator.notification);
    alert("hola mundo");
    navigator.notification.beep(2);

    navigator.notification.alert(
    'You are the winner!',  // message
    null,         // callback
    'Game Over',            // title
    'Done'      
}
*/
var fn={
	ready:function(){
	document.addEventListener("deviceready",fn.init, false);
	},
	init:function(){
		alert("hola mundo");
		navigator.notification.beep(2);

	navigator.notification.alert(
    'You are the winner!',  // message
    null,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);
	}

}

$(fn.ready);