
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
	else{resolve = "Not a Number";}

	return resolve;
}
