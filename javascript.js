/**
 * Created by ahaeflinger15 on 2/17/16.
 */

var myVar = setInterval(changeColor, 1);
var isColor1 = false;
var isColor2 = false;

window.setTimeout(annoyingPopup1, 10);

// Onload functionality for page inputs
window.onload = function() {
    document.getElementById("quoteButton").onclick = annoyingPopup2;
    document.getElementById("coolButton").onclick = annoyingPopup3;
    document.getElementById("quotePic").onmouseover = myfunction;
    document.getElementById("quotePic").onmouseout = out;
};

var x= document.getElementById("quotePic");
x.addEventListener(onmouseover(),myfunction);
var y = document.getElementById("quotePic");
y.addEventListener(mouseout(),out);

function myfunction(){
    alert("mouseon mouseon mouseon mouseon mouseon mouseon mouseon mouseon mouseon ");

}
function out(){
    alert(" mouseout  mouseout mouseout mouseout mouseout mouseout mouseout mouseout");
}

function annoyingPopup1()
{
    alert("HEYYYYYYYYYYYYY HOW'S IT GOING?")
}

function annoyingPopup2()
{
    window.confirm("Do you want to leave this page?");
    annoyingPopup2();
}

function annoyingPopup3()
{
    var quote = document.getElementById("quote");
    var enteredText = window.prompt("You should write something in that box down there","Write stuff here");
    quote.innerHTML = enteredText;
}

function changeColor() {
    var body = document.getElementById("body");
    var color1 = "purple";
    var color2 = "green";

    if(isColor1 == false)
    {
        body.className = "color1";
        isColor1 = true;
        isColor2 = false;
    }
    else
    {
        body.className = "color2";
        isColor1 = false;
        isColor2 = true;
    }
}