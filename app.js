// issues
// shouldn't have mutiple decimals

const numBtn = document.querySelectorAll(".cal-btn")
const opBtn = document.querySelectorAll(".op-btn")
const display = document.querySelector("#cal-display")
const clearBtn = document.querySelector("#clear")
const equalBtn = document.querySelector("#equal")
const decimal = document.querySelector("#decimal")
let opFlag = false;
let totalFlag = false;
let currentNum = "";
let firstNum = "";
let secondNum = "";
let operator = "";
let pastOperator = ""
let decimalNum = 0;



function charCount (str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

function numbers ()  {
    numBtn.forEach((i)=>{
        i.addEventListener("click", ()=>{
            if(!opFlag){
                currentNum = currentNum+= i.value
                firstNum = parseFloat(currentNum)
                display.innerText =currentNum;
                decimalNum =  charCount(currentNum, ".")
                if (decimalNum >=1 && i.value === "."){
                    decimal.value = ""
                }
            }
            else {
                currentNum = currentNum+= i.value
                secondNum = parseFloat(currentNum);
                display.innerText = currentNum
                decimalNum =  charCount(currentNum, ".")
                totalFlag = true
                  if (decimalNum >=1 && i.value === "."){
                    decimal.value = ""
                }
            }

        })
    })
}

function equal () {
   equalBtn.addEventListener("click", ()=>{
    console.log(firstNum)
    console.log(secondNum)
    firstNum = operate(firstNum,secondNum,operator) 
    console.log(firstNum) 
    display.innerText = firstNum;
    totalFlag = false
   })
}
    
function operatorFunct () {
    opBtn.forEach((symbol)=>{
        symbol.addEventListener("click",()=>{
            decimal.value = "."
            opFlag = true
            currentNum = ""
            pastOperator = operator
            operator = symbol.value; 
            display.innerText = operator
            
            
            if (totalFlag){
                currentNum = ""
                if(secondNum === 0 && operator === "/"){
                    display.innerText = "cannot divide by zero"
                    operator = ""
                }
                else {
                    firstNum = operate(firstNum,secondNum,pastOperator)  
                    display.innerText = firstNum;
                    totalFlag = false
                }    
            }
        })
    })
}

function clear (){
    clearBtn.addEventListener("click", ()=>{
        operator = ""
        firstNum = ""
        currentNum = ""
        secondNum = ""
        opFlag = false;
        totalFlag = false;
        display.innerText = 0
    })
}

function calculator () {
    numbers()
    operatorFunct()
    clear()
    equal()
}

calculator()


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


