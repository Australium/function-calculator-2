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

        for (let x = 0; x <= (amountOfNumbers - 1); x++) {

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
        let calcResult = givenNumbers[0];
        let alertResult = `${givenNumbers[0]}`;
        

        function calcCaseResult (getCaseOperator) {
            let caseOperator = getCaseOperator;

            if (caseOperator === '+') {
                for (let i = 1; i < (givenNumbers.length); i++ ) {
                    calcResult += givenNumbers[i];
                    alertResult += ` ${givenOperator} ` + givenNumbers[i];
                }
            } else if (caseOperator === '-') {
                for (let i = 1; i < (givenNumbers.length); i++ ) {
                    calcResult -= givenNumbers[i];
                    alertResult += ` ${givenOperator} ` + givenNumbers[i];
                }
            } else if (caseOperator === '/') {
                for (let i = 1; i < (givenNumbers.length); i++ ) {
                    calcResult /= givenNumbers[i];
                    alertResult += ` ${givenOperator} ` + givenNumbers[i];
                };
            } else if (caseOperator === '*') {
                for (let i = 1; i < (givenNumbers.length); i++ ) {
                    calcResult *= givenNumbers[i];
                    alertResult += ` ${givenOperator} ` + givenNumbers[i];
                };
            }
        }

        switch (givenOperator) {
            case '+':   
                calcCaseResult('+');
                break;
            case '-':
                calcCaseResult('-');
                break;
            case '/':
                calcCaseResult('/');
                break;
            case '*': 
                calcCaseResult('*');
                break;
        }

        let wholeResult = `${alertResult} = ${calcResult}`;

        if (Number.isNaN(calcResult)) {
            return 'Ошибка! 0 на 0 делить нельзя!'
        } 

        return wholeResult;
    }
}

calculator();