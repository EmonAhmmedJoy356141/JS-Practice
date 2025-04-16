function showDate(){
    document.getElementById("st").
    innerHTML = Date();
}
// change the Text
function showText(){
    document.getElementById("show_text").
    innerHTML = "Welcome to Java";
}
// sum
function sum(){
    document.getElementById("sum").
    innerHTML = (5+6);
}
// Statements part let variable 
function stal(){
    let x, y, z, w;
    x=10;
    y=20;
    w=30;
    z=(x*w)+w;
    document.getElementById("sta_sum").
    innerHTML = "The value of z " +z+ ".";
}

// Statements part var variable 
function stav(){
    var x, y, z, w;
    x=10;
    y=20;
    w=10;
    z=(x*w)+w;
    document.getElementById("var_sum").
    innerHTML = "The value of z " +z+ ".";
}
// Incrementing
function increment(){
    let a=15;
    a++; //if need increment please use (++) and if need decriment please use (--)
    let b=a;
    document.getElementById("increment").
    innerHTML ="The operator "+ a;
}
// 1 er odik incremet or decriment darkar hole 
function incrementOver(){ // funciton er pore HTML er onlcik evnt  part er attribute bose
    let r=50;
    r+=10;
    document.getElementById("incrementover"). //document.getElementById er pore HTML er ID bosbe 
    innerHTML = "The r is increment " + r;
}

// squre part
function squreMath(){
    let c=9;
    document.getElementById("squre").innerHTML = "The c square is " +c**2;
}
// right shift assignemnt operator
function rightAssOp(){
    let x=10;
    x>>=3;
    document.getElementById("right_ass_op").
    innerHTML = "The right assignment operator value is "+x;
}
// left shift assignment operator
function leftAssOp(){
    let x=10;
    x<<=10;
    document.getElementById("left_ass_op").
    innerHTML = "The left assignment operator value is "+x;
}