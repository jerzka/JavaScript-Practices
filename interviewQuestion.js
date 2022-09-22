/*
PROBLEM:
Numbers from 1-100
where if number divisible by 2 then show foo
where if number divisible by 3 then show baz
where if number divisible by 2 and divisible by 3 then show fooBaz
where other then show number
*/

const firstDivider = 2;
const secondDivider = 3;

const firstDividerText = "foo";
const secondDividerText = "baz";
const bothDividersText = "fooBaz";

const n = 100;

const dividedByLogs = (counter, firstDivider, firstDividerText, secondDivider, secondDividerText, bothDividersText) => {
    if(counter % firstDivider == 0 && counter % secondDivider == 0){
        console.log(bothDividersText);
    } else if (counter % firstDivider == 0){
        console.log(firstDividerText);
    }else if(counter % secondDivider == 0){
        console.log(secondDividerText);
    }else{
        console.log(counter);
    }
}

//Arrow function
const whileExecutionTime = (limit = 30) => {
    console.warn("while");
    const t0 = performance.now();
    let i=1;
    while(i<=limit){
        dividedByLogs(i, firstDivider, firstDividerText, secondDivider, secondDividerText, bothDividersText);
        i++;
    }
    const t1 = performance.now();
    return t1-t0;
}

//function with parameter with default value
const doWhileExecutionTime = (limit= 30) => {
    console.warn("do-while");
    let i=0;
    const t0 = performance.now();
    do{
        i++;
        dividedByLogs(i, firstDivider, firstDividerText, secondDivider, secondDividerText, bothDividersText);
    } while(i<limit);
        const t1 = performance.now();
        return t1-t0;
}

const forExecutionTime = (limit = 30) => {
    console.warn("for loop");
    const t0 = performance.now();
    for(let i=1; i<=limit; i++){
        dividedByLogs(i, firstDivider, firstDividerText, secondDivider, secondDividerText, bothDividersText);
    }
    const t1 = performance.now();
    return t1-t0;
}

let whileExecutionTimeCall = whileExecutionTime(n);
let doWhileExecutionTimeCall = doWhileExecutionTime(n);
let forExecutionTimeCall = forExecutionTime(n);

console.error('Execution time for "while" loop is: ' + whileExecutionTime(n).toFixed(2) + ' milliseconds.');
console.error('Execution time for "do-while" loop is: ' + doWhileExecutionTimeCall.toFixed(2) + ' milliseconds.');
console.error('Execution time for "for" loop is: ' + forExecutionTimeCall.toFixed(2) + ' milliseconds.');

