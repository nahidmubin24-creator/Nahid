/* ======================================
   Premium Cinematic Effects
   Nahid ❤️ Maskura Mim
====================================== */

/* 🎆 Fireworks */

function firework(){

    const fw=document.createElement("div");

    fw.style.position="fixed";
    fw.style.left=Math.random()*100+"vw";
    fw.style.top=Math.random()*70+"vh";

    fw.style.width="12px";
    fw.style.height="12px";
    fw.style.borderRadius="50%";

    fw.style.background=
    `hsl(${Math.random()*360},100%,60%)`;

    fw.style.boxShadow=
    `0 0 40px hsl(${Math.random()*360},100%,60%)`;

    fw.style.zIndex="999";

    fw.animate([

        {transform:"scale(.2)",opacity:1},

        {transform:"scale(12)",opacity:0}

    ],{

        duration:1200

    });

    document.body.appendChild(fw);

    setTimeout(()=>fw.remove(),1200);

}

setInterval(firework,1800);


/* 🎈 Floating Balloons */

function balloon(){

const b=document.createElement("div");

b.innerHTML="🎈";

b.style.position="fixed";

b.style.left=Math.random()*100+"vw";

b.style.bottom="-60px";

b.style.fontSize="45px";

b.style.zIndex="999";

b.animate([

{transform:"translateY(0)"},

{transform:"translateY(-120vh)"}

],{

duration:9000

});

document.body.appendChild(b);

setTimeout(()=>b.remove(),9000);

}

setInterval(balloon,2500);


/* ✨ Fireflies */

function firefly(){

const dot=document.createElement("div");

dot.style.position="fixed";

dot.style.left=Math.random()*100+"vw";

dot.style.top=Math.random()*100+"vh";

dot.style.width="6px";

dot.style.height="6px";

dot.style.borderRadius="50%";

dot.style.background="white";

dot.style.boxShadow="0 0 20px white";

dot.style.opacity=Math.random();

dot.animate([

{opacity:.1},

{opacity:1},

{opacity:.1}

],{

duration:1500,

iterations:Infinity

});

document.body.appendChild(dot);

setTimeout(()=>dot.remove(),15000);

}

setInterval(firefly,300);


/* ❤️ Surprise Popup */

setTimeout(()=>{

alert(`🎂 Happy Birthday Maskura Mim ❤️

তুমি আমার জীবনের সবচেয়ে সুন্দর উপহার।

I Love You Forever ❤️

— Nahid`);

},12000);


/* 🎵 Music Button */

const music=document.getElementById("music");

const btn=document.createElement("button");

btn.innerHTML="🎵";

btn.style.position="fixed";

btn.style.right="20px";

btn.style.bottom="20px";

btn.style.width="65px";

btn.style.height="65px";

btn.style.borderRadius="50%";

btn.style.border="none";

btn.style.fontSize="28px";

btn.style.cursor="pointer";

btn.style.zIndex="9999";

btn.style.background="#ff4d6d";

btn.style.color="#fff";

btn.style.boxShadow="0 0 25px hotpink";

document.body.appendChild(btn);

let play=true;

btn.onclick=()=>{

if(play){

music.pause();

btn.innerHTML="🔇";

}else{

music.play();

btn.innerHTML="🎵";

}

play=!play;

};


/* 📸 Gallery Lightbox */

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=()=>{

const bg=document.createElement("div");

bg.style.position="fixed";

bg.style.left="0";

bg.style.top="0";

bg.style.width="100%";

bg.style.height="100%";

bg.style.background="rgba(0,0,0,.9)";

bg.style.display="flex";

bg.style.justifyContent="center";

bg.style.alignItems="center";

bg.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

image.style.boxShadow="0 0 40px hotpink";

bg.appendChild(image);

bg.onclick=()=>bg.remove();

document.body.appendChild(bg);

};

});


console.log("❤️ Premium Effects Loaded Successfully ❤️");