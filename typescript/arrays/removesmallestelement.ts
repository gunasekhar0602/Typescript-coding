// Remove smallest element

// Create a function removesmallestelement with paramter as array and number as datatype
// and number as return
function removesmallestnumber(arr1:number[]):number[]
{
// if length of array is 0, return array
    if(arr1.length===0)
    {
        return arr1
    }

// create a variable minvalue and assign value as first element in the array
    let minvalue=arr1[0]

// create a variable minindex and assign value as first element index in the array
    let minindex=0

// create a loop and initilize i value as 0 and condition of until i less than lenght of the array
// increment value by 1
    for(let i=0;i<arr1.length;i++)
    {
// Write a condition if first value is greater than minvalue
        if(arr1[i]<minvalue)
        {
// then assign first index value to max value
            minvalue=arr1[i]
// then assign first index as max index
            minindex=i
        }

    }
// remove / splice(minindex value ) from array
    arr1.splice(minindex,1)

    return arr1

}
// create number array
const numberss=[1,2,3,4,-5]

// call the function with the required arguments
console.log(removesmallestnumber(numberss))