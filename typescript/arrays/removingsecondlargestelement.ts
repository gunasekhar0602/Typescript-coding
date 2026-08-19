// create a function with removeSecondLargest as the name and parameter as the array with number and array as the return type
function removeSecondLargest(arr: number[]): number[] 
{
// If the array has fewer than 2 elements, we cannot find a second largest
    if (arr.length < 2) 
    {
        return arr;
    }

// create a variable largest and assign value as -Infinity
    let largest = -Infinity;

// create a variable secondlargest and assign value as -Infinity
    let secondLargest = -Infinity;

// create a variable secondLargetIndex and assign value as -1
    let secondLargestIndex = -1;


    // array - [10,20,30,40]
// crerate a for Loop once to find the second largest value and its index
    for (let i = 0; i < arr.length; i++)
    {
// create a variable current it should verify the values present in array one by one
        const current = arr[i];

// write a if condition
        if (current > largest) 
        {
// Update second largest before replacing the largest
            secondLargest = largest;
            largest = current;
        } 
        else if (current > secondLargest && current < largest) 
        {
            // Update second largest if it's smaller than max but larger than current second max
            secondLargest = current;
        }
    }

    // Step 2: Loop again to precisely pinpoint the index of the second largest value
    // (This ensures we find the exact index even if there were value shifts during initialization)
    secondLargestIndex = arr.indexOf(secondLargest);

    // Step 3: Remove the item at the found index using splice
    if (secondLargestIndex !== -1) {
        arr.splice(secondLargestIndex, 1);
    }

    return arr;
}