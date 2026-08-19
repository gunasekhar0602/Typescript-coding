// Prime number

// create a function with name isprime and mention arguments with number datatype 
// and it should return a boolean
function isprime(num:number):boolean
{
// write a if condition if number is lessthan OR equal to 1 it is not a prime
    if(num<=1)
    {
        return false
    }

// write a if condition if number is equal to 2 it is prime
    if(num===2)
    {
        return true
    }

// create a const variable called square and capture the square of the number
    const square=Math.sqrt(num)

// Write a for loop with intializer i as 2
// loop should run until the condition should satisfy, until i less than square of number
// i value should increment by 1 until i less than square of number
    for(let i=2;i<=square;i++)
    {
// if num is divided by i equal to zero, then it is not a prime
        if(num%i===0)
        {
            return false
        }
    }
// if num is divided by i is not equal to zero, then it is prime
    return true
}

// call the function by passing parameters
console.log(`7 ${isprime(7)?'is prime number':'is not prime number'}`)