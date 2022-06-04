let currentValue;
const body = document.body;
const display = body.querySelector(".display");

const sum = (number) => {
   currentValue += number;
   display.textContent = currentValue;
}

const minus = (number) =>{
    currentValue -= number;
    display.textContent = currentValue;
}

const registerClick = (e) => {
    if (e.target.classList.contains("num-button")){
        let currentText = display.textContent;
        let numClicked = e.target.textContent;

        display.textContent = currentText + numClicked;
    }
    else{

    }
}


const allButtons = body.querySelectorAll(".calc-button")
allButtons.forEach(button => {
    button.addEventListener("click", registerClick)
})