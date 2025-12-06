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
var hour = document.getElementById("hour")
var min = document.getElementById("min")
var sec = document.getElementById("sec")
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
ClockwiseCalc()
function ClockwiseCalc(x,y,rx,ry){

    var D = new Date();
//console.log(D.toISOString())
let H = D.getHours()
let M = D.getMinutes()
let S = D.getSeconds()

    var hourMatriX = [
        [1,13,60],
        [2,14,30],
        [3,15,0/360],
        [4,16,330],
        [5,17,300],
        [6,18,270],
        [7,19,240],
        [8,20,210],
        [9,21,180],
        [10,22,150],
        [11,23,120],
        [12,0,90]
    ]
for(const hm in hourMatriX){
    for(const hms of hourMatriX[hm]){
       // console.log(hm, hms)
       var twelve = hourMatriX[hm][0]
        var ang = hourMatriX[hm][2]
        if(H > 12){
            if(H == hms){
                absH(twelve, ang, x, y,rx,ry)
                //console.log("I am the one ", ang, twelve, H, hms)
            }
            //console.log(twelve)
        }else{
          //  console.log(H)
            if(H == hms){
                absH(twelve, ang, x, y,rx,ry)
                //console.log("I am the one ", ang, twelve, H, hms)
            }
           // absH(H, ang, x, y,rx,ry)
        }
    }
}
MinuteCalc(x, y, rx, ry);
SecondCalc(x, y, rx, ry);
function absH(H,angle,x,y,rx,ry){
//console.log(rx,ry,x,y)
var h =  -angle
//console.log(h)
var angle = h * 2 * Math.PI / 360
//console.log(angle)
var X = x + rx * Math.cos(angle)
var Y = y + ry * Math.sin(angle)
hour.setAttribute("cx", X)
hour.setAttribute("cy", Y)
//console.log(x,y)
}

function MinuteCalc(x, y, rx, ry) {
var D = new Date();
    let M = D.getMinutes();
   // console.log(M)
    
    var minuteMatrix = [
    [0,   90],
    [1,   84],
    [2,   78],
    [3,   72],
    [4,   66],
    [5,   60],
    [6,   54],
    [7,   48],
    [8,   42],
    [9,   36],
    [10,  30],
    [11,  24],
    [12,  18],
    [13,  12],
    [14,   6],
    [15,   0],
    [16, 354],
    [17, 348],
    [18, 342],
    [19, 336],
    [20, 330],
    [21, 324],
    [22, 318],
    [23, 312],
    [24, 306],
    [25, 300],
    [26, 294],
    [27, 288],
    [28, 282],
    [29, 276],
    [30, 270],
    [31, 264],
    [32, 258],
    [33, 252],
    [34, 246],
    [35, 240],
    [36, 234],
    [37, 228],
    [38, 222],
    [39, 216],
    [40, 210],
    [41, 204],
    [42, 198],
    [43, 192],
    [44, 186],
    [45, 180],
    [46, 174],
    [47, 168],
    [48, 162],
    [49, 156],
    [50, 150],
    [51, 144],
    [52, 138],
    [53, 132],
    [54, 126],
    [55, 120],
    [56, 114],
    [57, 108],
    [58, 102],
    [59,  96]
];
for (const mm of minuteMatrix) {
        if (mm[0] === M) {
            absM(M, mm[1], x, y, rx, ry);
            break;
        }
    }

}

function absM(M, angle, x, y, rx, ry) {
    var m = -angle;

    var rad = m * Math.PI / 180;

    var X = x + rx * Math.cos(rad);
    var Y = y + ry * Math.sin(rad);

    min.setAttribute("cx", X);
    min.setAttribute("cy", Y);
}

function SecondCalc(x, y, rx, ry) {
    var D = new Date();
    let S = D.getSeconds();

    var secondMatrix = [
    [0,   90],
    [1,   84],
    [2,   78],
    [3,   72],
    [4,   66],
    [5,   60],
    [6,   54],
    [7,   48],
    [8,   42],
    [9,   36],
    [10,  30],
    [11,  24],
    [12,  18],
    [13,  12],
    [14,   6],
    [15,   0],
    [16, 354],
    [17, 348],
    [18, 342],
    [19, 336],
    [20, 330],
    [21, 324],
    [22, 318],
    [23, 312],
    [24, 306],
    [25, 300],
    [26, 294],
    [27, 288],
    [28, 282],
    [29, 276],
    [30, 270],
    [31, 264],
    [32, 258],
    [33, 252],
    [34, 246],
    [35, 240],
    [36, 234],
    [37, 228],
    [38, 222],
    [39, 216],
    [40, 210],
    [41, 204],
    [42, 198],
    [43, 192],
    [44, 186],
    [45, 180],
    [46, 174],
    [47, 168],
    [48, 162],
    [49, 156],
    [50, 150],
    [51, 144],
    [52, 138],
    [53, 132],
    [54, 126],
    [55, 120],
    [56, 114],
    [57, 108],
    [58, 102],
    [59,  96]
];

 for (const ss of secondMatrix) {
        if (ss[0] === S) {
            absS(S, ss[1], x, y, rx, ry);
            break;
        }
    }
}

function absS(S,angle,x,y,rx,ry){
   var s = -angle;
   // console.log(s);

    var rad = s * Math.PI / 180;

    var X = x + rx * Math.cos(rad);
    var Y = y + ry * Math.sin(rad);

    sec.setAttribute("cx", X);
    sec.setAttribute("cy", Y);
    
}



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
    svg2.style.background = "transparent";
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
    setInterval(()=>{
    ClockwiseCalc(115,150,102.5,122.5);
    },1000)
        //ClockwiseCalc(115,150,102.5,122.5);
    }
     if(smallM.matches){
        console.log("smaillM")
    image.style.width = "260px"
    image.style.height = "310px"
    image.setAttribute("x", "15")
    image.setAttribute("y", "20")
    svg2.style.width = "290px";
    svg2.style.height = "350px";
    svg2.style.background = "transparent";
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
    setInterval(()=>{
        ClockwiseCalc(145,175,117.5,147.5 );
    },1000)
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

