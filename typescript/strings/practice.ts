// Inheritance

class Car
{
    carname:string;
    carcolor:string;
    carnumber:number;


    constructor(cname:string,ccolor:string,cnumber:number)
    {
        this.carname=cname;
        this.carcolor=ccolor;
        this.carnumber=cnumber
    }

    start()
    {
        console.log("Car start")
    }

    carstop()
    {
        console.log("Car stop")
    }

    cardetails()
    {
        console.log(`car name is ${this.carname}, Car color is ${this.carcolor}, car number is ${this.carnumber}`)
    }
}


class TATA extends Car
{
    carorigin:string

    constructor(cname:string,ccolor:string, cnumber:number,corigin:string)
    {
        super(cname,ccolor,cnumber)
        this.carorigin=corigin
    }

    
    start()
    {   
        console.log("Tata car start")
    }

    // For calling the paraent class by using th child object
    callparentclass()
    {
        super.start()
    }


}

let tata=new TATA("Tata","Black",1,"India")

console.log(tata.start()) // Child class

console.log(tata.callparentclass())   // parent class







// Method Overloading



class Calulator
{
    constructor()
    {

    }

    add(a:number,b:number):number;
    add(a:number,b:number,c:number);

    add(a:number,b:number,c?:number):number
    {
        if(c!==undefined)
        {
            return(a+b+c)
        }
        else
        {
            return(a+b)
        }
    }
}

let cal1=new Calulator()

console.log(cal1.add(1,3))















// method Overriding

class Animal
{
    makesound()
    {
        console.log("Make some generic sound")
    }
}

class Dog extends Animal
{
    override makesound()
    {
        console.log("Woof!, Woof!")
    }
}

let dog=new Dog()

dog.makesound()










/* 


function removinglargestelement(arr:number[]):number[]

{
if(arr.length<2)
{
return arr
}


let maxvalue=arr[0]
let maxindex=0


for(let i=0;i<=arr.length;i++)
{
    if(arr[i]>maxvalue)
    {
        maxvalue=arr[i]
        maxindex=i
    }
}
return arr.splice(maxindex,1)
return arr


}

const arr=[1,2,3,4,63,3,5]

console.log(removinglargestelement(arr))


 */






abstract class Playerscoreaverage
{
    constructor(public name:string)
    {

    }

    displayplayerscoreaverage():void
    {
        console.log(`Player Name is ${this.name} | and aveage is ${this.getscore()} `)
    }

    abstract getscore():number
}

class Score extends Playerscoreaverage
{
    constructor(public runs:number, public numberofmatch:number)
    {
        super("Dhoni")
    }

    getscore():number
    {
        return (this.runs/this.numberofmatch)
    }
}

const score=new Score(7000,123)

score.displayplayerscoreaverage()