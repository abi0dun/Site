var headerNavBar = document.getElementById("headerNavBar");
var centerContext = document.getElementById("centerContext");
var switchCircle = document.getElementById("switchCircle");
var borderStroke = document.getElementById("borderStroke");
var bulb = document.getElementById("light-bulb");
var moon = document.getElementById("dark-moon");
var svg1 = document.getElementById("svg1");
var biggest = document.getElementById("biggest");
var smallM = window.matchMedia("(min-width: 400px)");
var desktop = window.matchMedia("(min-width: 800px)");
var tablet = window.matchMedia("(min-width: 600px)");
var isLight = true;

svg1.setAttribute("width", "350");
svg1.setAttribute("height", "80");
svg1.setAttribute("viewBox", "0 0 350 80");

if(smallM.matches){
    headerNavBar.style.width = "400px";
    biggest.style.width = "400px";
    biggest.style.clipPath = "url(#Mother-clip-box2)";
    svg1.setAttribute("width", "400");
    svg1.setAttribute("viewBox", "0 0 400 80");
    borderStroke.setAttribute('d', 'M 39.914162,0 A 39.914162,39.687377 0 0 0 0,39.687377 39.914162,39.687377 0 0 0 39.898571,79.374754 H 39.914162 179.66738 A 19.957082,19.84369 0 0 1 199.62447,59.531067 19.957082,19.84369 0 0 1 219.58155,79.374754 H 399.24892 V 39.687377 A 17.462445,17.363227 0 0 1 381.78647,57.050607 17.462445,17.363227 0 0 1 364.32403,39.687377 17.462445,17.363227 0 0 1 381.78647,22.32415 17.462445,17.363227 0 0 1 399.24892,39.687377 V 0 Z')
}else if(tablet.mathes){

}

 function sch() {
isLight = !isLight;
console.log(isLight);
if(isLight){
bulb.style.display = "none";
moon.style.display = "block";
//centerContext.style.background = "rgba(255, 255, 255, 0.8)";
}else{
bulb.style.display = "block";
moon.style.display = "none";
//centerContext.style.background = "rgba(0, 0, 0, 0.8)";
}
//console.log(isLight);
};