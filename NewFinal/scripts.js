document.write("Here is Today's Date")
var todayDate = new Date();
var month = todayDate.getMonth();
var year = todayDate.getFullYear();
var date = todayDate.getDate();
document.write("<br />" + month + "/" + date + "/" + year);


function Time()
{
	var date=new Date();
	var hours=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
	minutes=addZero(minutes);
	seconds=addZero(seconds);
	document.getElementById('clock').innerHTML=hours+":"+minutes+":"+seconds;
	clock=setTimeout(function(){Time()},10);
}

function addZero(digit)
{
	if (digit<=9)
	  {
		digit="0" + digit;
	  }
	return digit;
}

var firstNumber;
var secondNumber;
var result;

function add(){
  firstNumber	= document.getElementById("firstNumber").value;
	secondNumber	= document.getElementById("secondNumber").value;

	firstNumber = getValue(firstNumber);
	secondNumber = getValue(secondNumber);

	result = firstNumber + secondNumber;

	document.getElementById("result").innerHTML = result;
}


function minus(){
  firstNumber	= document.getElementById("firstNumber").value;
	secondNumber	= document.getElementById("secondNumber").value;

	firstNumber = getValue(firstNumber);
	secondNumber = getValue(secondNumber);

	result = firstNumber - secondNumber;

	document.getElementById("result").innerHTML = result;
}

function divide(){
  firstNumber	= document.getElementById("firstNumber").value;
	secondNumber	= document.getElementById("secondNumber").value;

	firstNumber = getValue(firstNumber);
	secondNumber = getValue(secondNumber);

	result = firstNumber / secondNumber;

	document.getElementById("result").innerHTML = result;
}

function multiply(){
  firstNumber	= document.getElementById("firstNumber").value;
	secondNumber	= document.getElementById("secondNumber").value;

	firstNumber = getValue(firstNumber);
	secondNumber = getValue(secondNumber);

	result = firstNumber * secondNumber;

	document.getElementById("result").innerHTML = result;
}

function getValue(resolve){

	if(resolve =="one"){resolve = 1;}
	else if(resolve == "two"){resolve = 2;}
	else if(resolve == "three"){resolve = 3;}
	else if(resolve == "four"){resolve = 4;}
	else if(resolve == "five"){resolve = 5;}
  else if(resolve == "six"){resolve = 6;}
  else if(resolve == "seven"){resolve = 7;}
  else if(resolve == "eight"){resolve = 8;}
  else if(resolve == "nine"){resolve = 9;}
  else if(resolve == "ten"){resolve = 10;}
	else{resolve = "Not a Number";}

	return resolve;
}
