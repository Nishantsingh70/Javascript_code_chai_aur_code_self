// javascript works on single thread & everything inside it works as a process.
// Global execution contect, function execution context & eval execution context.

// Memory creation phase => Allocate the memory for declared variable, function, array etc..
// Execution phase => 

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(6, 3)

/*

Step1) Global Execution => It will create always
      this

Step2) Memory Creation Phase/ Memory Phase => Allocate the memory for declared variable, function, array etc..
    val1 => undefined
    val2 => undefined
    addNum => undefined
    result1 => undefined
    result2 => undefined

Step3) Execution Phase => 
    val1 => 10
    val2 => 5
    addNum => new variable environment + execution thread => Memory Phase       +     Execution Phase  => after compleing ths process this execution thread will delete.
                                                            val1 => undefined         num1 => 10
                                                            val2 => undefined         num2 => 5
                                                            total => undefined        total => 15
    result1 => 15
    result2 => 9
*/

