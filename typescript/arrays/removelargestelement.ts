// Remove largest element in an array

// Create a function removelargestelement with paramter as array and number as datatype
// and number array as return type
function removelargestelement(arr:number[]):number[]
{
// if length of array is 0, return array
    if(arr.length===0)
    {
        return arr
    }
// create a variable maxvalue and assign value as first element in the array
    let maxvalue=arr[0];
// create a variable max index and assign value as first element index in the array
    let maxindex=0

// create a loop and initilize i value as 0 and condition of until i less than lenght of the array
// increment value by 1
    for(let i=0; i<arr.length;i++)
    {
// Write a if condition if first value is greater than maxvalue
        if(arr[i]>maxvalue)
        {
// then assign first index value to max value
            maxvalue=arr[i]
// then assign first index as max index
            maxindex=i
        }
    }
// remove / splice(maxindex value) from array
    arr.splice(maxindex,1)
    
// return array
    return arr
}

// create number array
const numbers=[1,2,3,35,3,5]

// call the function with the required arguments
console.log(removelargestelement(numbers))