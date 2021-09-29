'use strict';

function calculator() {

    let operator = askForOperator('Введите оператор из доступных (+ - / *)');
    console.log(operator);
    let numberAmount = askForOperandAmount('Введите количество чисел для расчета. Допустимо от 2 до 4'); 
    console.log(numberAmount);
    let numbers = askForNumbers(numberAmount);
    let result = calcAndShowResult(operator, numbers);
    alert(result);

    function askForOperator (incomingOperator) {
        let checkOperator = incomingOperator;

        let operatorArray = ['+','-','/','*'];

        while (!operatorArray.includes(checkOperator)) {
            checkOperator = prompt('Введите оператор из доступных (+ - / *)');
            console.log(checkOperator);
        }
        
        return checkOperator;
    }

    function askForOperandAmount (operandAmount) {
        let amountOfOperands = 0;

        while (amountOfOperands < 2 || amountOfOperands > 4 || Number.isNaN(amountOfOperands)) {
            amountOfOperands = +prompt(operandAmount);
        }

        console.log(amountOfOperands);
        return amountOfOperands;       

    }
    
    function askForNumbers (amountOfNumbers) {
        let askedNumbers = [];

        for (let x = 0; x < amountOfNumbers; x++) {

            while (askedNumbers[x] === null || Number.isNaN(+askedNumbers[x])) {
                askedNumbers[x] = prompt(`Введите ${amountOfNumbers} числа для операции`);
                console.log(askedNumbers)

                if (askedNumbers[x] == '0') {
                    askedNumbers[x] = +askedNumbers[x];
                } else if (+askedNumbers[x] == '') {
                    askedNumbers[x] = undefined;
                } else if (askedNumbers[x] == Number(askedNumbers[x])) {
                    askedNumbers[x] = +askedNumbers[x];
                }
            }

            console.log(askedNumbers[x])
            console.log(askedNumbers)
        }
        return askedNumbers;
    }

    function calcAndShowResult (getOperator,getNumberArray) {
        let givenOperator = getOperator;
        let givenNumbers = getNumberArray;
        let calcResult = 0;
        if(givenOperator === '-' || givenOperator === '*' || givenOperator === '/' ) calcResult = givenNumbers[0];
        let alertResult = '';
        
        function calcCaseResult (getCaseOperator) {
            let caseOperator = getCaseOperator;

            givenNumbers.forEach((item,i,array) => {
                switch (caseOperator) {
                    case '+' : 
                        calcResult += item;
                        i === array.length - 1 ? alertResult += item : alertResult += item + ` ${caseOperator} `;
                        break;
                    case '-' :
                        if (i !== 0) calcResult -= item;
                        i === array.length - 1 ? alertResult += item : alertResult += item + ` ${caseOperator} `;
                        break;
                    case '*' : 
                        if (i !== 0) calcResult *= item;
                        i === array.length - 1 ? alertResult += item : alertResult += item + ` ${caseOperator} `;
                         break;
                    case '/' : 
                        if (i !== 0) calcResult /= item;
                        i === array.length - 1 ? alertResult += item : alertResult += item + ` ${caseOperator} `;
                        break;
                }
            });
        }
    
        calcCaseResult(givenOperator);

        let wholeResult = `${alertResult} = ${calcResult}`;

        if (Number.isNaN(calcResult)) {
            return 'Ошибка! 0 на 0 делить нельзя!'
        } 

        console.log(wholeResult);
        return wholeResult;
    }
}

calculator();