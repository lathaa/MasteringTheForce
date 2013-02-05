var speedOfServer = function(server){
	if(connect(server)){
	return get_speed(server);
	}
	return "Server " + server + " is not available.";
};

var highestSpeed = function(arr){
var fastest = 0;
var position;
for(var i = 0; i < arr.length; i ++){
if(arr[i] > fastest){
fastest = arr[i];
position = i;
}
}
return position;
};

var main = function(){
var workingServers = ["A","B","C","D"];
workingServers.push(speedOfServer(A));
workingServers.push(speedOfServer(B));
workingServers.push(speedOfServer(C));
workingServers.push(speedOfServer(D));
var finalPosition = highestSpeed(workingServers);
return "Server " + workingServers[finalPosition-4] + " is working at the speed of " + workingServers[finalPosition] + " kbps";
};

console.log(main());
