// create two variables 
// create function add, minus, multiply, divide.
// create an operater variable
// create a way to show the number in the display
// store the number when clicking on an operater button
// 

const numBtn = document.querySelectorAll(".cal-btn")
const opBtn = document.querySelectorAll(".op-btn")
const display = document.querySelector("#cal-display")
let opFlag = false;
let totalFlag = false;
let currentNum = "";
let totalNum = "";
let storageNum = "";
let operator = "";

function numbers(){
    numBtn.forEach((i)=>{
        i.addEventListener("click", ()=>{
            if(!opFlag){
                currentNum = parseFloat(currentNum+= i.value)
                totalNum = currentNum
                display.innerText =currentNum;
            }
            else {
                currentNum = parseFloat(currentNum+= i.value)
                storageNum = currentNum;
                display.innerText = currentNum
                totalFlag = true
            }
        })
    })
}


function operatorFunct () {
    opBtn.forEach((symbol)=>{
        symbol.addEventListener("click",()=>{
            opFlag = true
            currentNum = ""
            if (!totalFlag){
                operator = symbol.value;
                display.innerText = operator
            }
            
            else{
                currentNum = ""
                if(storageNum === 0 && operator === "/"){
                    display.innerText = "cannot divide by zero"
                    operator = "+"
                }
               else {
                console.log(totalNum)
                display.innerText = totalNum;
                operator = symbol.value;
               }
               totalNum = operate(totalNum,storageNum,operator)
               
            }

        })
    })
}

numbers()
operatorFunct()


function adding (pastNum ,currentNum){
    return pastNum + currentNum
}

function subtracting (pastNum,currentNum){
    return pastNum - currentNum
}

function multipling (pastNum,currentNum){
    return pastNum * currentNum
}

function dividing (pastNum,currentNum){
    return pastNum / currentNum
}


function operate (num1, num2, currentOperator){
    if (currentOperator === "+"){
        return adding(num1,num2)
    }
     if (currentOperator === "-"){
        return subtracting(num1,num2)
    }
     if (currentOperator === "*"){
        return multipling(num1,num2)
    }
     if (currentOperator === "/"){
        return dividing(num1,num2)
    }
}


