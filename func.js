function first(){
    const getFirst = document.getElementById("bill");
    const getSecond = document.getElementById("people");
    const firstValue = getFirst.value;
    const secondValue = getSecond.value;
    let bill = parseInt(firstValue,10);
    let percent =  0.05;
    let getPercentage = bill * percent;
    let theValue = bill;
    let addUP =( getPercentage) + (theValue);
    let equalTip = addUP / secondValue;
    let total = equalTip;
    let result = (total) * (percent);
    if(firstValue == "" || secondValue == ""){
        document.getElementById("alert").innerHTML = "Both input must be filled ";
        document.getElementById("notify").innerHTML = "Both input must be filled ";
        document.getElementById("total").innerHTML = "$ 0.00";
        document.getElementById("result").innerHTML = "$ 0.00";
       } else{
        document.getElementById("total").innerHTML = "$" + " " +total.toFixed(2);
        document.getElementById("result").innerHTML = "$" + " " + result.toFixed(2);
        document.getElementById("alert").innerHTML = " ";
        document.getElementById("notify").innerHTML = " ";
       }
} 
function second(){
    const getFirst = document.getElementById("bill");
    const getSecond = document.getElementById("people");
    const firstValue = getFirst.value;
    const secondValue = getSecond.value;
    let bill = parseInt(firstValue,10);
    let percent =  0.1;
    let getPercentage = bill * percent;
    let theValue = bill;
    let addUP =( getPercentage) + (theValue);
    let equalTip = addUP / secondValue;
    let total = equalTip;
    let result = (total) * (percent);
    if(firstValue == "" || secondValue == ""){
        document.getElementById("alert").innerHTML = "Both input must be filled ";
        document.getElementById("notify").innerHTML = "Both input must be filled ";
        document.getElementById("total").innerHTML = "$ 0.00";
        document.getElementById("result").innerHTML = "$ 0.00";
       } else{
        document.getElementById("total").innerHTML = "$" + " " +total.toFixed(2);
        document.getElementById("result").innerHTML = "$" + " " + result.toFixed(2);
        document.getElementById("alert").innerHTML = " ";
        document.getElementById("notify").innerHTML = " ";
       }
}

function third(){
    const getFirst = document.getElementById("bill");
    const getSecond = document.getElementById("people");
    const firstValue = getFirst.value;
    const secondValue = getSecond.value;
    let bill = parseInt(firstValue,10);
    let percent =  0.15;
    let getPercentage = bill * percent;
    let theValue = bill;
    let addUP =( getPercentage) + (theValue);
    let equalTip = addUP / secondValue;
    let total = equalTip;
    let result = (total) * (percent);
    if(firstValue == "" || secondValue == ""){
        document.getElementById("alert").innerHTML = "Both input must be filled ";
        document.getElementById("notify").innerHTML = "Both input must be filled ";
        document.getElementById("total").innerHTML = "$ 0.00";
        document.getElementById("result").innerHTML = "$ 0.00";
       } else{
        document.getElementById("total").innerHTML = "$" + " " +total.toFixed(2);
        document.getElementById("result").innerHTML = "$" + " " + result.toFixed(2);
        document.getElementById("alert").innerHTML = " ";
        document.getElementById("notify").innerHTML = " ";
       }
}

function fourth(){
    const getFirst = document.getElementById("bill");
    const getSecond = document.getElementById("people");
    const firstValue = getFirst.value;
    const secondValue = getSecond.value;
    let bill = parseInt(firstValue,10);
    let percent =  0.2;
    let getPercentage = bill * percent;
    let theValue = bill;
    let addUP =( getPercentage) + (theValue);
    let equalTip = addUP / secondValue;
    let total = equalTip;
    let result = (total) * (percent);
    if(firstValue == "" || secondValue == ""){
        document.getElementById("alert").innerHTML = "Both input must be filled ";
        document.getElementById("notify").innerHTML = "Both input must be filled ";
        document.getElementById("total").innerHTML = "$ 0.00";
        document.getElementById("result").innerHTML = "$ 0.00";
       } else{
        document.getElementById("total").innerHTML = "$" + " " +total.toFixed(2);
        document.getElementById("result").innerHTML = "$" + " " + result.toFixed(2);
        document.getElementById("alert").innerHTML = " ";
        document.getElementById("notify").innerHTML = " ";
       }
}

function fifth(){
    const getFirst = document.getElementById("bill");
    const getSecond = document.getElementById("people");
    const firstValue = getFirst.value;
    const secondValue = getSecond.value;
    let bill = parseInt(firstValue,10);
    let percent =  0.25;
    let getPercentage = bill * percent;
    let theValue = bill;
    let addUP =( getPercentage) + (theValue);
    let equalTip = addUP / secondValue;
    let total = equalTip;
    let result = (total) * (percent);
    if(firstValue == "" || secondValue == ""){
        document.getElementById("alert").innerHTML = "Both input must be filled ";
        document.getElementById("notify").innerHTML = "Both input must be filled ";
        document.getElementById("total").innerHTML = "$ 0.00";
        document.getElementById("result").innerHTML = "$ 0.00";
       } else{
        document.getElementById("total").innerHTML = "$" + " " +total.toFixed(2);
        document.getElementById("result").innerHTML = "$" + " " + result.toFixed(2);
        document.getElementById("alert").innerHTML = " ";
        document.getElementById("notify").innerHTML = " ";
       }
}


function sixth(){
    const getFirst = document.getElementById("bill");
    const getSecond = document.getElementById("people");
    const custom = document.getElementById("custom").value;
    const firstValue = getFirst.value;
    const secondValue = getSecond.value;
    let bill = parseInt(firstValue,10);
    let percent =  custom / 100;
    let getPercentage = bill * percent;
    let theValue = bill;
    let addUP =( getPercentage) + (theValue);
    let equalTip = addUP / secondValue;
    let total = equalTip;
    let result = (total) * (percent);
    if(firstValue == "" || secondValue == ""){
        document.getElementById("alert").innerHTML = "Both input must be filled ";
        document.getElementById("notify").innerHTML = "Both input must be filled ";
        document.getElementById("total").innerHTML = "$ 0.00";
        document.getElementById("result").innerHTML = "$ 0.00";
       } else{
        document.getElementById("total").innerHTML = "$" + " " +total.toFixed(2);
        document.getElementById("result").innerHTML = "$" + " " + result.toFixed(2);
        document.getElementById("alert").innerHTML = " ";
        document.getElementById("notify").innerHTML = " ";
       }
}
 
function reset(){
    const getFirst = document.getElementById("bill");
    const getSecond = document.getElementById("people");
    document.getElementById("total").innerHTML = "$ 0.00";
    document.getElementById("result").innerHTML = "$ 0.00";
    getFirst.value = "";
    getSecond.value = "";
    document.getElementById("alert").innerHTML = " ";
    document.getElementById("notify").innerHTML = " ";
 }
