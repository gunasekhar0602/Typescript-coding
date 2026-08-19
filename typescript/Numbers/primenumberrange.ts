// Prime number

// create a function with name isprimenumber and mention parameter with number datatype 
// and it should return a boolean
function isprimenumber(num:number):boolean
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
    for(let i=2; i<=square;i++)
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

// create function with name primenumberrange with arguments as start and end with number datatype
function primenumberrange(start:number,end:number)
{
// Write a for loop with intializer i as start
// loop should run until the condition should satisfy, until start less than or equal to end
// start value should increment by 1 until i less than or equal to end
    for(let i=start;i<=end;i++)
    {
// write a if condition and mention the isprimenumber function
// if the i is satifying the isprimenumber function
        if(isprimenumber(i))
        {
// print the i number, if the i is satifying the isprimenumber function
            console.log(i)
        }
    }
}

// call the function 
primenumberrange(1,77)