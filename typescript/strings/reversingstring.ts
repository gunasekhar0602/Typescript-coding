function reversingstring(str11:string):string
{
    if(str11.length<=1)
    {
        return str11
    }

    var rev= ' '
    for(let i=str11.length-1;i>=0;i--)
    {
        rev+=str11[i].toLowerCase()
    }

    return rev
}

const rev='Apple'
console.log(reversingstring(rev))