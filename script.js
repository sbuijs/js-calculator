console.log(`Look mom, The JS works!`);
// https://www.youtube.com/watch?v=j59qQ7YWLxw&t=240s


class Calculator {
    constructor(currentOperandTextElement, previousOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement
        this.previousOperandTextElement = previousOperandTextElement
        //call the clear function because we want to clear all of the inputs as soon as we create a new calcualtor
        this.clear()
    }
    //what actions it can perform

    // clear different variables
    clear() {
        //when the press clear the currentNumberElement will get set to an empty strying
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    //when delelte button is clicked remove the last number
    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1)
        this.updateDisplay()
    }
    //when number is clicked add it to the screen
    appendNumber(number) {
        //if the number is a . and the string already contains a dot, don't add another one by returning
        if (number === '.' && this.currentOperand.includes('.')) return
        //when a number is clicked we set the passed in number to this.currentOperand
        //we want to have a string because this way we can easily apend something to the end using +.
        //we want our numbers to be appended like 1+1 = 11, not added like 1+1=2
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }
    //when user clicks on one of the operation buttons it sets the operation
    choosOperation(operation) {
        //if the field does not conatain a number, thus is empty: return
        if (this.currentOperand === '') return
        //if the currentOperand (which was checked in the line above) and the previous operand are not empty, we want to compute it instantly
        if (this.previousOperand !== '') {
            this.compute()
        }

        //if the previousOperand is empty then we execute the code below
        this.operation = operation
        //we are done typing the current number so we recylcle it to the previousOperant and we awnat to clear out the new operant
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
        //we append the operation to the previousoperand string
        this.previousOperand = this.previousOperand
    }
    //calc the result
    compute() {
        console.log('compute');
        let computation
        const previous = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        //if the user didn't click a number,we don't have a previous value OR a current value then we want to return and cancel this function
        if (isNaN(previous) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = previous + current
                break
            case '-':
                computation = previous - current
                break
            case '*':
                computation = previous * current
                break
            case '÷':
                computation = previous / current
                break
            //when none of the cases are true:
            default: return
        }
        //result will get visible in the currentOperand
        this.currentOperand = computation
        //operation is set to undefined
        this.operation = undefined
        //clear the previousOperand
        this.previousOperand = '';
    }

    //add commas and dots to the result number
    getDisplayNumber(number) {
        //convert it to a number
        const floatNumber = parseFloat(number)
        if (isNaN(floatNumber)) return ''
        return floatNumber.toLocaleString('en')
    }

    //update display
    updateDisplay() {
        //the inner text of the currentOperandTextElement will get set to the currentOperand that is set in appendNumber()
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }
    }
}



//select data attribute
const numberButtons = document.querySelectorAll('[data-number]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const operationButtons = document.querySelectorAll('[data-operation]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')



// pass the values in the calculator
const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement);




deleteButton.addEventListener('click', () => {
    calculator.delete()
});

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
});


numberButtons.forEach(button => {
    //for each button create an event listener
    button.addEventListener('click', () => {
        //appends the number that is in the html element and pass it to the calculator appendnumber function
        calculator.appendNumber(button.innerText)
        //every time a button is clicked the display will get updated
        calculator.updateDisplay()
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.choosOperation(button.innerText)
        calculator.updateDisplay()
    });
});

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
});




//how are we going to store all the information that is in the previous and current number?

