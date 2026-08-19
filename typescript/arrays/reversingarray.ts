function reversingarray(arr1:number[]):number[]
{
    if(arr1.length<=1)
    {
        return arr1
    }

    var left=0;
    var right=arr1.length-1

    while(left<right)
    {
        [arr1[left],arr1[right]] = [arr1[right], arr1[left]]

        left++
        right--
    }
    return arr1
}
var arr1=[1,2,3,4,5,6]

console.log(reversingarray(arr1))