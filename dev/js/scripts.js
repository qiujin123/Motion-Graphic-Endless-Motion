import { gsap } from "gsap";
// import $ from jquery;

// let shapeTl = gsap.timeline({paused:true})
let shapeTl = gsap.timeline();

shapeTl.from("#circle", {duration: 1})
        .to("#circle", {duration: 1, rotate: 360, x:100})





// $(".click").on("click",function(){
//     shapeTl.play();
// })