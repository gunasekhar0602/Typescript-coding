// create a function with fabinocie
function fabinocie(num:number):number
{
    if(num<1)
    {
        return 0
    }

    if(num===1)
    {
        return 1
    }
    let pre=0;
    let current=1;

    for(let i=2;i<=num;i++ )
    {
        const next=pre+current

        pre=current
        current=next
    }
    return current
}

console.log(fabinocie(2))