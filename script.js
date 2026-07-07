/* ===========================
   Nahid ❤️ Maskura Mim
   Premium Birthday Website
=========================== */

// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3500);
});


// ❤️ Love Counter
const startDate = new Date("May 13, 2026 00:00:00");

function updateLoveCounter(){

    const now = new Date();

    const diff = now - startDate;

    if(diff < 0){
        document.getElementById("loveCounter").innerHTML =
        "Forever Starts on 13 May 2026 ❤️";
        return;
    }

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff/(1000*60*60))%24);
    const minutes = Math.floor((diff/(1000*60))%60);
    const seconds = Math.floor((diff/1000)%60);

    document.getElementById("loveCounter").innerHTML =
    `${days} Days 💖 ${hours} Hours 💕 ${minutes} Minutes ❤️ ${seconds} Seconds`;
}

setInterval(updateLoveCounter,1000);
updateLoveCounter();


// 💌 Typewriter Love Letter

const text = `

শুভ জন্মদিন আমার জান Maskura Mim ❤️

তুমি আমার জীবনের সবচেয়ে সুন্দর উপহার।

তোমারে ছাড়া আমার জীবন অসম্পূর্ণ।

আল্লাহ যেন সব সময় তুমারে সুখে রাখেন।

আমি সারাজীবন তুমারে ভালোবাসুম।

Happy Birthday My Queen 👑❤️

`;

let i=0;

function typing(){

    if(i<text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,45);

    }

}

typing();


// ❤️ Floating Hearts

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-20px";
heart.style.fontSize=(20+Math.random()*30)+"px";
heart.style.opacity=Math.random();

heart.style.animation="fall 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,300);



// 🌹 Falling Rose Emoji

function createRose(){

const rose=document.createElement("div");

rose.innerHTML="🌹";

rose.style.position="fixed";
rose.style.left=Math.random()*100+"vw";
rose.style.top="-20px";
rose.style.fontSize="25px";

rose.style.animation="fall 8s linear";

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},8000);

}

setInterval(createRose,800);




// Smooth Scroll Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});




// CSS Animation Inject

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-50px) rotate(0deg);

}

100%{

transform:translateY(110vh) rotate(360deg);

}

}

section{

opacity:0;

transform:translateY(100px);

transition:1s;

}

section.show{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(style);