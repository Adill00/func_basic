//Part 1

let arr1 = [12,13,14,15,16,17];

let sum = 0;

function calculateSum(arr){
    for (i of arr){
        sum +=i;
    }
    return sum;
}


console.log('the sum of numbers is: ', calculateSum(arr1));


//Part 2

let counter = 0;

while(counter<=5){
    console.log(counter);
    counter ++;    
}

console.log('---------')

//Part 3

let countDown = 5;

do{
    console.log(countDown); 
    countDown --;   
}while(countDown>=0)


//Part 4

function evaluateGrade(grade){
    if(grade > 60){
        return 'Pass';
    }else{
        return 'Fail';
    }

}

console.log('your result is: ', evaluateGrade(65) );
console.log('your result is: ', evaluateGrade(45) );
console.log('your result is: ', evaluateGrade(75) );
console.log('your result is: ', evaluateGrade(25) );
