function largestnumber(num:number[]):number
{
    var maxvalue=num[0]

    for(let i=0; i<num.length;i++)
    {
        if(num[i]>maxvalue)
        {
            maxvalue=num[i]
        }
    }
    return maxvalue
}

const num=[1,2,3,4,5,4,3,2,4,66,4,3,634,3,23,333,44,4,4]

console.log(`largest number in the array is ${largestnumber(num)}`)