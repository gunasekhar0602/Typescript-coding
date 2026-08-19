// Getting character count in a string

// Create a function getcharcount which takes string as parameter 
// Mention key value pair as the outstup structure
function geteachcharcount(str:string):{[key:string]:number}
{
// create a empty object frequency it will store the each character as string
// and occurrence count value as number
    const frequency:{[key:string]:number}={}

// create a for loop starting index as 0 and running until the i<str.length
// This will allows us to inspect each and every charcter in the string one by one
    for(let i=0;i<str.length;i++)
    {

// Extract each character using str[i] and store it in char variable
        const char=str[i].toLowerCase()  // .toLowerCase() - for case convertion (optional)

//if it exist means increment value count by one
        if(frequency[char])
        {
            frequency[char]++
        }

// if is not exist means we add character to object and initialize its count to one
        else
        {
            frequency[char]=1
        }
    }

// return object
    return frequency
}

// create a string and assign value
const mystring="pPlaywright"

// Call the function by providing the required arguments.
console.log(geteachcharcount(mystring))