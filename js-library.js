// Calculation for Math using Bodmas Role.
function result_bodmas(inputId){
    let inputField = document.getElementById(inputId);
    let expression = inputField.value;

    try {
        let result = eval(expression);
        inputField.value = result;
    } catch(e){
        inputField.value = "Error!";
    }
}

// Find out inputed year is leap year or not.
function leapYear_alert(inputId) {
    let id = document.getElementById(inputId);
    let value = parseInt(id.value);
    if(isNaN(value)){
        alert("Input valid year");
        return;
    }
    try{
        if(value % 4 === 00 && value % 100 !== 0 || value % 400 === 0){
            alert(value + " is a Leap Year");
        } else {
            alert(value + " isn't a Leap Year");
        }
        
    } catch (e){
        alert("Error!")
    }
}

// Find out factorial value
function factorial(inputId) {
    let id = document.getElementById(inputId);
    let value = parseInt(id.value);
    if (isNaN(value) || value < 0) {
        alert("Please enter a valid non-negative number!");
        return;
        
    }
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
        
    }
    id.value = result;
}

// Reusable html file run into a html file without using iframe. 
//issue - direct call will not accept, so in html you have to use after tag with id and documention is (<script> addHtml("simple.html", "id"))
async function addHtml(html, id) {
    const res = await fetch(html);
    const data = await res.text();
    document.getElementById(id).innerHTML = data;
}