// create  a function called charcount and mention paramter as string and retrun type as number
function charcount(str1:string):number
{

// write a if condition if the length of the array is 0, we should return 0
    if(str1.length===0)
    {
        return 0
    }
// create a variable with count as name and assign value as 0
    var count=0

    // for(const char of str1)

    for(const letter of str1)
    {
        if(letter !==' ')
        {
            count++
        }
    }

// at last return teh count
    return count

}

// Call the function by mentioning the string
console.log(charcount("apple  aaa"))