// create a function and assign parameter datatype as number array and return type as number
function largestnumber(num:number[]):number
{

// create a variable and name it as maxvalue and assign value as 0
    var maxvalue=0

// create a for loop with initializer i=0
// condition should be until i less than lenght of the arr
// i value should increment by 1 until i length of the array
    for(let i=0; i<num.length;i++)
    {

// write a if condition
// if number in the array is greater than maxvalue
        if(num[i]>maxvalue)
        {

            // the maxvalue=number
            maxvalue=num[i]
        }
    }

// retrun the maxvalue
    return maxvalue
}

// create a array
const num=[1,2,3,4,5,4,3,2,4,66,4,3,634,3,23,333,44,4,4]

console.log(`largest number in the array is ${largestnumber(num)}`)