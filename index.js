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
const html = document.documentElement;
var isLight = true;
var isContextOpen = false;

svg1.setAttribute("width", "350");
svg1.setAttribute("height", "80");
svg1.setAttribute("viewBox", "0 0 350 80");

if(smallM.matches){
    headerNavBar.style.width = "400px";
    biggest.style.width = "400px";
    biggest.style.clipPath = "url(#Mother-clip-box2)";
    svg1.setAttribute("width", "400");
    svg1.setAttribute("viewBox", "0 0 400 80");
    
    borderStroke.setAttribute('d', 'M 40,0 A 40,40 0 0 0 0,40 40,40 0 0 0 40,80 H 170 A 30,30 0 0 1 200,50 30,30 0 0 1 230,80 H 400 V 40 A 20,20 0 0 1 380,60 20,20 0 0 1 360,40 20,20 0 0 1 380,20 20,20 0 0 1 400,40 V 0 Z')
}else if(tablet.mathes){

}

 function sch() {
isLight = !isLight;
console.log(isLight);
if(isLight){
initTheme('light', "grey");
bulb.style.display = "none";
moon.style.display = "block";
//centerContext.style.background = "rgba(255, 255, 255, 0.8)";
}else{
initTheme('dark', "#00ff88");
bulb.style.display = "block";
moon.style.display = "none";
//centerContext.style.background = "rgba(0, 0, 0, 0.8)";
}
//console.log(isLight);
};
function initTheme(theme, c){
html.setAttribute('data-theme', theme);
console.log(c)
borderStroke.setAttribute("stroke", c)
}
initTheme('light', "grey");

centerContext.addEventListener('onClick', ()=>{
    console.log('i have been clicked')
})