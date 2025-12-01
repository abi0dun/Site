var headerNavBar = document.getElementById("headerNavBar");
var hambuger = document.getElementById("centerContext");
var switchCircle = document.getElementById("switchCircle");
var borderStroke = document.getElementById("borderStroke");
var bulb = document.getElementById("light-bulb");
var moon = document.getElementById("dark-moon");
var svg1 = document.getElementById("svg1");
var biggest = document.getElementById("biggest");
var small = window.matchMedia("(min-width: 200px) and (max-width: 399px)");
var smallM = window.matchMedia("(min-width: 400px) and (max-width: 599px)");
var desktop = window.matchMedia("(min-width: 800px) and (max-width: 1199px)");
var tablet = window.matchMedia("(min-width: 600px) and (max-width: 799px)");
var contextBox = document.getElementById("context-grid");
var close = document.getElementById('cancel')
var imageHolder = document.querySelector('.svg-image-holder')
var nameHolder = document.querySelector('.threeD-name-holder')
var svg2 = document.getElementById('svg2')
var image = document.getElementById('image')
var ellipseClip = document.getElementById('ellipse-clip')
var borderClip = document.getElementById('border-clip')
const html = document.documentElement;
var isLight = true;
var isContextOpen = false;

function main(){



    // Header Bar
function headerBar(){
const breakpoints = {
    small: small,
    smallM: smallM,
    desktop: desktop,
    tablet: tablet
}
if(smallM.matches){
    headerNavBar.style.width = "400px";
    biggest.style.width = "400px";
    biggest.style.clipPath = "url(#Mother-clip-box2)";
    svg1.setAttribute("width", "400");
    svg1.setAttribute("viewBox", "0 0 400 80");
    borderStroke.setAttribute('d', 'M 40,0 A 40,40 0 0 0 0,40 40,40 0 0 0 40,80 H 170 A 30,30 0 0 1 200,50 30,30 0 0 1 230,80 H 400 V 40 A 20,20 0 0 1 380,60 20,20 0 0 1 360,40 20,20 0 0 1 380,20 20,20 0 0 1 400,40 V 0 Z')
}else if(tablet.macthes){

}else if(desktop.matches){
    
}else if (small.matches){
svg1.setAttribute("width", "350");
svg1.setAttribute("height", "80");
svg1.setAttribute("viewBox", "0 0 350 80");
}

for(const [name, Q] of Object.entries(breakpoints)){
    Q.addEventListener("change", ()=>{
        console.log("we are in", name)
        headerBar();
        var i =imageName();
        i.S_G();
    })
}
}
headerBar()
//header Bar End


function themeS(){
switchCircle.addEventListener("click", ()=>{
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
});

function initTheme(theme, c){
html.setAttribute('data-theme', theme);
console.log(c)
borderStroke.setAttribute("stroke", c)
}
initTheme('light', "grey");
}
themeS()




function Ham(){
hambuger.addEventListener("click", ()=>{
    //e.stopPropagation();
    if(!isContextOpen){
        contextBox.style.display = "flex";
        isContextOpen = true;
        console.log(isContextOpen)
    }
})

close.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log("clicked")
    if(isContextOpen){
        contextBox.style.display = "none";
        isContextOpen = false;
    }
})
}
Ham()

function imageName(){
function ClockwiseCalc(cx, cy, rx, ry){

}
function S_G(){

    console.log("Hi S_G")

    if(small.matches){
    image.style.width = "190px"
    image.style.height = "260px"
    image.setAttribute("x", "20")
    image.setAttribute("y", "20")
    svg2.style.width = "230px";
    svg2.style.height = "300px";
    imageHolder.style.width = "230px";
    imageHolder.style.height = "300px";
    nameHolder.style.width = "calc(100% - 240px)";
    ellipseClip.setAttribute("cy", "150")
    ellipseClip.setAttribute("cx", "115")
    ellipseClip.setAttribute("ry", "115")
    ellipseClip.setAttribute("rx", "95")
    borderClip.setAttribute("cy", "150")
    borderClip.setAttribute("cx", "115")
    borderClip.setAttribute("ry", "115")
    borderClip.setAttribute("rx", "95")
        ClockwiseCalc();
    }
     if(smallM.matches){
        console.log("smaillM")
    image.style.width = "260px"
    image.style.height = "310px"
    image.setAttribute("x", "15")
    image.setAttribute("y", "20")
    svg2.style.width = "290px";
    svg2.style.height = "350px";
    svg2.style.background = "blue";
    imageHolder.style.width = "290px";
    imageHolder.style.height = "350px";
    nameHolder.style.width = "calc(100% - 300px)";
    ellipseClip.setAttribute("cy", "175")
    ellipseClip.setAttribute("cx", "145")
    ellipseClip.setAttribute("ry", "140")
    ellipseClip.setAttribute("rx", "110")
    borderClip.setAttribute("cy", "175")
    borderClip.setAttribute("cx", "145")
    borderClip.setAttribute("ry", "140")
    borderClip.setAttribute("rx", "110")
    ClockwiseCalc();
}

if(tablet.matches){

}
if(desktop.matches){

}

}
S_G()


    // expose S_G so callers can do: var i = imageName(); i.S_G();
    return { S_G: S_G };

}

imageName()

}
document.addEventListener("DOMContentLoaded", main)

