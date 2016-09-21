var elevatorUp=true;
var elevatorBroke=true;
var elevatorDown=true;
var elevatorStop= true;
var elevatorOpen= true;
var elevatorEnd= true;

if (elevatorUp===true){
	console.log("Going up");
} else {
	console.log("The elevator is either broken or going down")
} 

if (elevatorBroke===true){
	console.log("This elevator is out of service");
} else {
	console.log("The elevator is working condition")
}
if (elevatorDown===true){
	console.log("Going down");
} else {
	console.log("The elevator is either broken or going up")
}
if (elevatorStop===true){
	console.log("You have reached your destination");
} else {
	console.log("The elevator is either broken, going down, or going up")
}
if (elevatorUp === true && elevatorBroke === false){
	console.log("The elevator is on it's way")
} else {
	console.log("The elevator is temporarily out of sevice")
}
if (elevatorUp === true && elevatorDown ===false && elevatorEnd ==true){
	console.log("")
}