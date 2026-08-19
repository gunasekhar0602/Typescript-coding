function secondlargestinarray(arr:number[]):void
{
    if(arr.length<2)
    {
        console.log("Array should contain two elements")
    }
    
    let largest:number=-Infinity;
    let secondlargest:number=-Infinity;

    for(const num of arr)
    {
        if(num>largest)
        {
            secondlargest=largest
            largest=num
        }
        else(num>secondlargest && num <largest)
        {
            secondlargest=num
        }
    }

    if(secondlargest===-Infinity)
    {
        console.log("There is no second large element all elements are identical")
    }
    else{
        console.log(`second largest element ${secondlargest}`)
    }
}

const arr:number[]=[1,23,4,4]
secondlargestinarray(arr)
