
function MARIO()
{
    console.log("MARIO!!");
}


function BWAHAHA()
{
    console.log ("BWAHAHA!!!");
}

let d = 10;
let f = 12;
function getalResultaat()
{
    
}

function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;
}
let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());



let x = 9;
let a =3;
let b =3;
let c =89;

let y =(a*(x*x) )+ (b*x) +c;
console.log(y);

function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x) )+ (b*x) +c;
    return y;
}


let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);

function Wiskunde()
{   
    let u = 9;
    let h = 8;
    let l = 15;
    let logY = Math.log(l) + h + Math.pow(u,2);
    console.log(logY);
    console.log(Wiskunde);
 }

    let o = 91.70005020110221;
    let p = 10602.465735902799;
    let m = 135.79175946922805;
    let logO = Math.log(o) + p + Math.pow(m,2);
    console.log(logO)


function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log(shoutout);

}
argumentsAreHandy("Super Shout out");
argumentsAreHandy("Hou het netjes!");
argumentsAreHandy("Doe je best!");

function superMooieGlobalFunction()
{
    console.log("ik ben global");
    console.log("dus je mag mij iveral aanroepen");

}
superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();

function aanroepVoorbeeld()
{

}

aanroepVoorbeeld();







class App
{
    runApplication()
    {
        console.log("hello world!");
    }

    newClassFUnction()
    {
        console.log("hello world in de nieuwClassFunction");

    }

    anotherFunctionWithArguments(aArgument)
    {
        console.log("kom maar met je argument");
        console.log("hier:");
        console.log(aArgument);

    }
}
let app = new App();
app.runApplication();
app.newClassFUnction();
app.anotherFunctionWithArguments("mijn argument is iets...");
superMooieGlobalFunction();
MARIO();
BWAHAHA();