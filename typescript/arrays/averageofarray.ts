// create of function and it as averageofarray and pass parameter as number array and return type as number
function averageofarray(arr:number[]):number
{

// write a if statement, if length of array is zero then return zero
    if(arr.length===0)
    {
        return 0
    }

// create a variable with var keyword and name it as sum and assign value as 0
    var sum=0;

// write a for loop in which we can take all numbers values from the array and add them all one by one
for(const num of arr)
{
    sum=sum+num
}

// return the average of the number values (sum of all numbers/length of the array)
return sum/arr.length
}

const arr=[1,2,3,4,5,6,7,8,9]

console.log(`average of array is ${(averageofarray(arr))}`)