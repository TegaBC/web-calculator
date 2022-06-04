let currentValue;
let tempValue;
let currentOperator;

const body = document.body;
const display = body.querySelector(".display");

const sum = () => {
    currentValue += tempValue;
    display.textContent = currentValue;
    currentValue = undefined;
}

const minus = () => {
    currentValue -= tempValue;
    display.textContent = currentValue;
    currentValue = undefined;
}

const divide = () => {
    currentValue /= tempValue;
    display.textContent = currentValue;
    currentValue = undefined;
}

const multi = () => {
    currentValue *= tempValue;
    display.textContent = currentValue;
    currentValue = undefined;
}

const reset = () =>{
    display.textContent = "";
    currentValue = undefined;
    tempValue = undefined;
    currentOperator = undefined;
}

const completeOperation = () =>{
    switch(currentOperator){
        case "+":
            sum();
            break;
        case "-":
            minus();
            break;
        case "÷":
            divide();
            break;
        case "X":
            multi()
            break;
        case ".":
            //display.textContent = currentText + ".";
            break;
    }
}


const registerClick = (e) => {
    let currentText = display.textContent;        

    if (e.target.classList.contains("num-button")){
        let currentText = display.textContent;
        let numClicked = e.target.textContent;
        let totalNum = currentText + numClicked; 
        display.textContent = totalNum

    }
    else if (e.target.textContent === "="){
        if(currentOperator && currentValue){
            tempValue = parseFloat(display.textContent);
            console.log("Outputing Data");
            completeOperation();
        }
    }
    else if (e.target.textContent != "."){
        currentValue = parseInt(display.textContent);
        currentOperator = e.target.textContent;
        display.textContent = "";
    }
    /*else if (e.target.textContent === "."){
        let currentText = display.textContent;
        currentText += ".";
        display.textContent = currentText;
        console.log(currentText)
    }*/
    else{
        reset();
    }
}


const allButtons = body.querySelectorAll(".calc-button")
allButtons.forEach(button => {
    button.addEventListener("click", registerClick)
})