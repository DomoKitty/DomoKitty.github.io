var aNumber = Math.max(10.2,4.5,15.6);

aNumber = Math.round(aNumber);

aNumber = Math.sqrt(aNumber);

document.write(aNumber);



var aRandomNumber;

aRandomNumber = Math.random();

console.log(aRandomNumber);

aRandomNumber*=10;

console.log(aRandomNumber);

aRandomNumber = Math.floor(aRandomNumber);

console.log(aRandomNumber);

aRandomNumber = (aRandomNumber)+1;

console.log(aRandomNumber);



var amazon = new Array();

amazon[0] = "Star Wars DVD";
amazon[1] = "Candle your mom won't use";
amazon[2] = "Hat";
amazon[3] = "one";
amazon[4] = 2;

document.write(amazon[3] + amazon[4]);

amazon.push("Cats");
amazon.unshift("The Front");

//amazon.pop();
//amazon.shift();

console.log(amazon);

for(count=0; count < 5; count++){

	 console.log("Hello World - "+count);

}



if(1 == 1){
	console.log("Hurrah!");
}

var left = 10;
var right = 5;

if(left == right){
	console.log("1");
}
if(left != right){
	console.log("2");
}
else{
	console.log("Else");
}



function aFace(){
	var aVariable = 10;
	aVariable+=10;
	aVariable-=5;

	return (aVariable);
}

var myVariable = aFace();

console.log(myVariable);

var todayDate = new Date();

var month = todayDate.getMonth();

var year = todayDate.getFullYear();

var day = todayDate.getDate();

document.getElementById("para").innerHTML= month + "/" + day + "/" + year;

var num = 4+3+"five";

document.getElementById("hi").innerHTML= num;

function theName(){

	var aName = document.getElementById("Name").value;
	console.log(aName);

}

function changeText(){

  document.getElementById("para").innerHTML="Ocra"

}

document.write("<p> I love ocra whales </p>");

var NumberOfWhale;

NumberOfWhale = 5;

NumberOfWhale = NumberOfWhale + 5;

NumberOfWhale = NumberOfWhale * 5;

NumberOfWhale = NumberOfWhale / 10;

NumberOfWhale = NumberOfWhale - 10;

document.write(NumberOfWhale);
