/*
PROBLEM:
Numbers from 1-100
where if number divisible by 3 then show foo
where if number divisible by 5 then show baz
where if number divisible by 3 and divisible by 5 then show foobar
where other then show number
*/

const divBy3 = "foo";
const divBy5 = "baz";
const divBy3and5 = "foobaz";

const n = 100;
let doWhileExecutionTime;

//Arrow function
const whileExecutionTime = () =>{
    console.warn("while");
    const t0 = performance.now();
    let i=1;
    while(i<=100){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(divBy3and5);
        } else if (i % 3 == 0){
            console.log(divBy3);
        }else if(i % 5 == 0){
            console.log(divBy5);
        }else{
            console.log(i);
        }
        i++;
    }
    const t1 = performance.now();
    return t1-t0;
}

//Function without parameters
// function doWhileLoop(){
//     console.warn("do-while");
//     let i=0;
//     const t0 = performance.now();
//     do{
//         i++;
//         if(i % 3 == 0 && i % 5 == 0){
//             console.log(divBy3and5);
//         } else if (i % 3 == 0){
//             console.log(divBy3);
//         }else if(i % 5 == 0){
//             console.log(divBy5);
//         }else{
//             console.log(i);
//         }
//     } while(i<n);
//         const t1 = performance.now();
//         doWhileExecutionTime =  t1-t0;
// }

//function with parameter with default value
function doWhileLoop(limit){
    console.warn("do-while");
    let i=0;
    const t0 = performance.now();
    do{
        i++;
        if(i % 3 == 0 && i % 5 == 0){
            console.log(divBy3and5);
        } else if (i % 3 == 0){
            console.log(divBy3);
        }else if(i % 5 == 0){
            console.log(divBy5);
        }else{
            console.log(i);
        }
    } while(i<limit);
        const t1 = performance.now();
        return t1-t0;
}

function forExecutionTime(limit=30){
    console.warn("for loop");
    const t0 = performance.now();
    for(let i=1; i<=limit; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(divBy3and5);
        } else if (i % 3 == 0){
            console.log(divBy3);
        }else if(i % 5 == 0){
            console.log(divBy5);
        }else{
            console.log(i);
        }
    }
    const t1 = performance.now();
    return t1-t0;
}

const whileExecutionTimeCall = whileExecutionTime.call();
//doWhileLoop();
doWhileExecutionTime = doWhileLoop(n);
console.error('Execution time for "for" loop is: ' + forExecutionTime(n) + ' milliseconds.');
console.error('Execution time for "while" loop is: ' + whileExecutionTimeCall + ' milliseconds.');
console.error('Execution time for "do-while" loop is: ' + doWhileExecutionTime + ' milliseconds.');