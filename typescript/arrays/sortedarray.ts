function sortedArray(arr: number[]): number[]
{
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // Change '>' to '<' for descending order
            if (arr[i] > arr[j])
            { 
                const temp = arr[i]; //[4,5,3,8]
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const arr = [9, 3, 5, 2];
console.log(sortedArray(arr));