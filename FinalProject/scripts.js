document.write ("I love monkeys");

function changeText() {
	document.getElementById("para").innerHTML=Date();
}

var number1 = [(4+5)*(2+8)] / [ (23-18) * 2];
document.write("<br />"+number1+"<br />");

var todayDate = new Date();
var month = todayDate.getMonth();
var year = todayDate.getFullYear();
var date = todayDate.getDate();

document.write(month + date + year);
document.write("<br />" + month + "/" + date + "/" + year);

function addWords(){
    var words = document.getElementById("stuff").value;
	document.write(words);
}