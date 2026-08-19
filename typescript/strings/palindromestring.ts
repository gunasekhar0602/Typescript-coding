// Palindrome

// create a function ispalindrome with string datatype as parameter and return type is boolean
function ispalindrome(str:string):boolean
{
// create variable left and assign value as 0
    let left=0;

// create variable right and assign value as lenght of string -1
    let right =str.length-1;

// write a while loop left is lessthan right
    while(left<right)
    {

// write a if condition
// Compare the values of the left and right of the string
        if(str[left].toLowerCase()!==str[right].toLowerCase())
        {
// if it is not equal it is not palindrome
            return false
        }
// if the string left character is equal to string right character 
// then increase left and decrease right

        left++
        right--
    }

// after completion of character and it equal means return true
    return true
}

// call the function by providing required argument
console.log(`Level ${ispalindrome('Level')?'is palindrome':'is not palindrome'}`)