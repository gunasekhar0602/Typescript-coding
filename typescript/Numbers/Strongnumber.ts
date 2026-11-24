function factorial(n:number)
{
  if(n===1)
  {
    return 1
  }

  let result=1
  for(let i=2; i<=n; i++)
  {
    result=result*i
  }
  return result
}

  function strongnumber(num:number):boolean
  {
    if(num<=0)
    {
      return false
    }

    let sum=0
    let temp=num

    while(temp>0)
    {
      const digit=temp%10
      sum+=factorial(digit)
      temp=Math.floor(temp%10)
    }
    return sum=num
  }
console.log(strongnumber(1))
