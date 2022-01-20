//create html Elements, setting attributes and content to the elements
let div1 = document.createElement("div");
div1.setAttribute("id", "button-container");
document.body.appendChild(div1);
let div2 = document.createElement("div");
div2.setAttribute("id", "res");
// div2.innerHTML = "0";
document.getElementById("button-container").appendChild(div2);
// document.getElementById("res").style.color="lightgreen";
let div3 = document.createElement("div");
div3.setAttribute("class", "buttonContainer");
div3.setAttribute("id", "btns");
document.getElementById("button-container").appendChild(div3);
let buttonClr = document.createElement("button");
buttonClr.innerHTML = "C";
buttonClr.setAttribute("id", "btnClr");
document.getElementById("btns").appendChild(buttonClr);
let buttonCE = document.createElement("button");
buttonCE.innerHTML = "CE";
buttonCE.setAttribute("id", "btnCE");
document.getElementById("btns").appendChild(buttonCE);
let buttonMod = document.createElement("button");
buttonMod.innerHTML = "%";
buttonMod.setAttribute("id", "btnMod");
document.getElementById("btns").appendChild(buttonMod);
let buttonMul = document.createElement("button");
buttonMul.innerHTML = "x";
buttonMul.setAttribute("id", "btnMul");
document.getElementById("btns").appendChild(buttonMul);
let button7 = document.createElement("button");
button7.innerHTML = "7";
button7.setAttribute("id", "btn7");
document.getElementById("btns").appendChild(button7);
let button8 = document.createElement("button");
button8.innerHTML = "8";
button8.setAttribute("id", "btn8");
document.getElementById("btns").appendChild(button8);
let button9 = document.createElement("button");
button9.innerHTML = "9";
button9.setAttribute("id", "btn9");
document.getElementById("btns").appendChild(button9);
let buttonDiv = document.createElement("button");
buttonDiv.innerHTML = "/";
buttonDiv.setAttribute("id", "btnDiv");
document.getElementById("btns").appendChild(buttonDiv);
let button4 = document.createElement("button");
button4.innerHTML = "4";
button4.setAttribute("id", "btn4");
document.getElementById("btns").appendChild(button4);
let button5 = document.createElement("button");
button5.innerHTML = "5";
button5.setAttribute("id", "btn5");
document.getElementById("btns").appendChild(button5);
let button6 = document.createElement("button");
button6.innerHTML = "6";
button6.setAttribute("id", "btn6");
document.getElementById("btns").appendChild(button6);
let buttonSub = document.createElement("button");
buttonSub.innerHTML = "-";
buttonSub.setAttribute("id", "btnSub");
document.getElementById("btns").appendChild(buttonSub);
let button1 = document.createElement("button");
button1.innerHTML = "1";
button1.setAttribute("id", "btn1");
document.getElementById("btns").appendChild(button1);
let button2 = document.createElement("button");
button2.innerHTML = "2";
button2.setAttribute("id", "btn2");
document.getElementById("btns").appendChild(button2);
let button3 = document.createElement("button");
button3.innerHTML = "3";
button3.setAttribute("id", "btn3");
document.getElementById("btns").appendChild(button3);
let buttonSum = document.createElement("button");
buttonSum.innerHTML = "+";
buttonSum.setAttribute("id", "btnSum");
document.getElementById("btns").appendChild(buttonSum);
let button0 = document.createElement("button");
button0.innerHTML = "0";
button0.setAttribute("id", "btn0");
document.getElementById("btns").appendChild(button0);
let button00 = document.createElement("button");
button00.innerHTML = "00";
button00.setAttribute("id", "btn00");
document.getElementById("btns").appendChild(button00);
let buttonDot = document.createElement("button");
buttonDot.innerHTML = ".";
buttonDot.setAttribute("id", "btnDot");
document.getElementById("btns").appendChild(buttonDot);
let buttonEql = document.createElement("button");
buttonEql.innerHTML = "=";
buttonEql.setAttribute("id", "btnEql");
document.getElementById("btns").appendChild(buttonEql);
//ckecking operators logic
function checkOperator() {
  if (
    display.innerHTML.endsWith("+") ||
    display.innerHTML.endsWith("-") ||
    display.innerHTML.endsWith("*") ||
    display.innerHTML.endsWith("/") ||
    display.innerHTML.endsWith("%")
  ) {
    return true;
  }
}

let display = document.getElementById("res");
//creating key events to the numbers

document.addEventListener("keypress", (event) => {
  const keyName = event.key;
if(keyName ==='0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9') {  
    display.innerHTML += keyName;
}else {
  alert("Only numbers are allowed");
}
// if (keyName === "1") {
  // display.innerHTML += "1";
  // } else if (keyName === "2") {
  //   display.innerHTML += "2";
  // } else if (keyName === "3") {
  //   display.innerHTML += "3";
  // } else if (keyName === "4") {
  //   display.innerHTML += "4";
  // } else if (keyName === "5") {
  //   display.innerHTML += "5";
  // } else if (keyName === "6") {
  //   display.innerHTML += "6";
  // } else if (keyName === "7") {
  //   display.innerHTML += "7";
  // } else if (keyName === "8") {
  //   display.innerHTML += "8";
  // } else if (keyName === "9") {
  //   display.innerHTML += "9";
  // } else if (keyName === "0") {
  //   display.innerHTML += "0";
  // } 
  
});

//creating click events to the numbers

let btn0 = document.getElementById("btn0");
btn0.addEventListener("click", function () {
  display.innerHTML += "0";
});
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
  display.innerHTML += "1";
});
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  display.innerHTML += "2";
});
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
  display.innerHTML += "3";
});
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function () {
  display.innerHTML += "4";
});
let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function () {
  display.innerHTML += "5";
});
let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function () {
  display.innerHTML += "6";
});
let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", function () {
  display.innerHTML += "7";
});
let btn8 = document.getElementById("btn8");
btn8.addEventListener("click", function () {
  display.innerHTML += "8";
});
let btn9 = document.getElementById("btn9");
btn9.addEventListener("click", function () {
  display.innerHTML += "9";
});
let btn00 = document.getElementById("btn00");
btn00.addEventListener("click", function () {
  display.innerHTML += "00";
});
let btnDot = document.getElementById("btnDot");
btnDot.addEventListener("click", function () {
  display.innerHTML += ".";
});
//  logic to crear the screen
let btnClr = document.getElementById("btnClr");
btnClr.addEventListener("click", function () {
  display.innerHTML = "";
});

//creating click events to the operators

let btnSum = document.getElementById("btnSum");
btnSum.addEventListener("click", function () {
  display.innerHTML += "+";
});
let btnSub = document.getElementById("btnSub");
btnSub.addEventListener("click", function () {
  display.innerHTML += "-";
});
let btnMul = document.getElementById("btnMul");
btnMul.addEventListener("click", function () {
  display.innerHTML += "*";
});
let btnDiv = document.getElementById("btnDiv");
btnDiv.addEventListener("click", function () {
  display.innerHTML += "/";
});
let btnMod = document.getElementById("btnMod");
btnMod.addEventListener("click", function () {
  display.innerHTML += "%";
});
// logic for implementing operations upon clicking equal to button

let btnEql = document.getElementById("btnEql");
btnEql.addEventListener("click", function () {
  if (!checkOperator()) {
    //using regex to check numbers
    let re = /\d+/g;
    // let re=/[0-9]\.[0-9]/g;
    //using regex to check operators
    let re2 = /[\+\-\*\%/]+/g;
    console.log(re2);
    //assigning operands into the numbers in the form of array
    let numbers = display.innerHTML.match(re);
    // console.log(numbers);
    //assigning operators into the operations variable
    let operations = display.innerHTML.match(re2);
    console.log(operations);
    while (operations.length > 0) {
      if (operations.includes("*")) {
        let indexOfMul = operations.indexOf("*");
        let mul =
          indexOfMul != 0
            ? parseFloat(numbers[indexOfMul - 1])
            : parseFloat(numbers[indexOfMul]) * parseFloat(numbers[indexOfMul + 1]);
        numbers.splice(indexOfMul, 2);
        numbers.splice(indexOfMul, 0, mul.toFixed(4));
        operations.splice(indexOfMul, 1);
      } else if (operations.includes("/")) {
        let indexOfDiv = operations.indexOf("/");
        let division =
          indexOfDiv != 0
            ? parseInt(numbers[indexOfDiv - 1])
            : parseInt(numbers[indexOfDiv]) / parseInt(numbers[indexOfDiv + 1]);
        //    division=Math.round(division);
        numbers.splice(indexOfDiv, 2);
        numbers.splice(indexOfDiv, 0, division.toFixed(4));
        operations.splice(indexOfDiv, 1);
      } else if (operations.includes("+")) {
        let indexOfSum = operations.indexOf("+");
        console.log(numbers);
        let sum =
          indexOfSum != 0
            ? parseInt(numbers[indexOfSum - 1])
            : parseInt(numbers[indexOfSum]) + parseInt(numbers[indexOfSum + 1]);
        numbers.splice(indexOfSum, 2);
        numbers.splice(indexOfSum, 0, sum.toFixed(4));
        operations.splice(indexOfSum, 1);
        // console.log(indexOfSum);
        // console.log(parseInt(numbers[indexOfSum - 1], 2));
        // console.log(parseInt(numbers[indexOfSum], 2));
        // console.log(parseInt(numbers[indexOfSum + 1], 2));
      } else if (operations.includes("-")) {
        let indexOfSub = operations.indexOf("-");
        let sub =
          indexOfSub != 0
            ? parseInt(numbers[indexOfSub - 1])
            : parseInt(numbers[indexOfSub]) - parseInt(numbers[indexOfSub + 1]);
        numbers.splice(indexOfSub, 2);
        numbers.splice(indexOfSub, 0, sub.toFixed(4));
        operations.splice(indexOfSub, 1);
      } else if (operations.includes("%")) {
        let indexOfMod = operations.indexOf("-");
        let mod =
          indexOfMod != 0
            ? parseInt(numbers[indexOfMod - 1])
            : parseInt(numbers[indexOfMod]) % parseInt(numbers[indexOfMod + 1]);
        numbers.splice(indexOfMod, 2);
        numbers.splice(indexOfMod, 0, mod);
        operations.splice(indexOfMod, 1);
      }
    }
    display.innerHTML = numbers[0];
  } else {
    alert("Line must ends with a number");
  }
});
// Logic to clear the most recent entry 
let btnCE= document.getElementById("btnCE");
btnCE.addEventListener("click", function () {
display.innerHTML.value.toString.slice(0, -1);
});
console.log(display.innerHTML);
