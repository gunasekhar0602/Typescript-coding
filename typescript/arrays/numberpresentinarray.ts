function numberpresentORnot(arr:number[]):boolean

{
    let findnum:number=3;

    for(const num of arr)
    {
        if(findnum===num)
        {
            return true
        }
    }

    return false
    
     
    
}
const arr=[1,2,3,4,5]

console.log(`the element 3 ${numberpresentORnot(arr)? "is there":"is not there"}`)