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
hour.setAttribute("cx", Number(X))
hour.setAttribute("cy", Number(Y))
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

    min.setAttribute("cx", Number(X));
    min.setAttribute("cy", Number(Y));
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

    sec.setAttribute("cx", Number(X));
    sec.setAttribute("cy", Number(Y));
    
}


}

function N_M(){
    console.log("Hi N_M")
    const canvas = document.getElementById('threeD-name-holder');
    
    const Scene = new THREE.Scene();

    const Camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    Camera.position.z = 100;
    
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Set background to transparent

    //lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    Scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    Scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x667eea, 2, 100);
    pointLight1.position.set(-15, 10, 10);
    Scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x764ba2, 2, 100);
    pointLight2.position.set(15, -10, 10);
    Scene.add(pointLight2);

    const G = new THREE.Group();
    Scene.add(G);
    //G.rotation.y = Math.PI / 2;
    //Font

    const Loader = new THREE.FontLoader();
    const fontUrl = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json';

    fetch(fontUrl)
    .then(response => response.json())
    .then(fontData =>{
        const font = Loader.parse(fontData)
        const textGeometry = new THREE.TextGeometry('ABIODUN',
            {
                font: font,
                size: 1.0,
                height: 0.5,
                curveSegments: 24,
                bevelEnabled: true,
                bevelThickness: 0.15,
                bevelSize: 0.1,
                bevelOffset: 0,
                bevelSegments: 10
            }
        );
        textGeometry.center();

        const vertexCount = textGeometry.attributes.position.count;
        const colors = new Float32Array(vertexCount * 3)
        for(let i = 0; i < vertexCount; i++){
            const LTRX = textGeometry.attributes.position.getX(i);
            const NormalizedX = (LTRX + 8)/16;
            const color = new THREE.Color()
            color.setHSL(0.65 + NormalizedX * 0.15, 0.7, 0.5);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b
        }
        textGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const textMaterial = new THREE.MeshStandardMaterial({
            vertexColors: true,
            metalness: 0.6,
            roughness: 0.2,
            emissive: new THREE.Color(0x667eea),
            emissiveIntensity: 0.2
        })

        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        G.rotation.y = Math.PI;
        G.add(textMesh)
    })
    .catch(error =>{
        console.error('Error Loading Font:', error)
    });
gsap.to(Camera.position, {
    z:10,
    duration: 5,
    ease: "ease",
    value: 6
})
gsap.to(G.rotation, {
    y: Math.PI * 2,
    duration: 15,
    ease: "ease",
    
    delay: 4,
})


const particleCount = 500;
const particlesGeometry = new THREE.BufferGeometry();
const particlesPosition = new Float32Array(particleCount * 3);
for(let i =0; i < particleCount; i++){
    particlesPosition[i * 3] = (Math.random() - 0.5) * 20;
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 20;
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 20;
}


particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPosition, 3));
const rootStyles = getComputedStyle(document.documentElement);
const bgPrimary = rootStyles.getPropertyValue('--particles-bg').trim();

const particlesMaterial = new THREE.PointsMaterial({
    color: new THREE.Color(bgPrimary),
    sizeAttenuation: true,
    size: 0.05
});
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
Scene.add(particles);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(Scene, Camera);
}
animate();

}
N_M()

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
    nameHolder.style.width = "calc(100% - 230px)";
    ellipseClip.setAttribute("cy", 150)
    ellipseClip.setAttribute("cx", 115)
    ellipseClip.setAttribute("ry", 115)
    ellipseClip.setAttribute("rx", 95)
    borderClip.setAttribute("cy", 150)
    borderClip.setAttribute("cx", 115)
    borderClip.setAttribute("ry", 115)
    borderClip.setAttribute("rx", 95)
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
    nameHolder.style.width = "calc(100% - 290px)";
    ellipseClip.setAttribute("cy", 175)
    ellipseClip.setAttribute("cx", 145)
    ellipseClip.setAttribute("ry", 140)
    ellipseClip.setAttribute("rx", 110)
    borderClip.setAttribute("cy", 175)
    borderClip.setAttribute("cx", 145)
    borderClip.setAttribute("ry", 140)
    borderClip.setAttribute("rx", 110)
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

