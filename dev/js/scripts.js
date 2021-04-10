import { gsap } from "gsap";
// import $ from jquery;

// let shapeTl = gsap.timeline({paused:true})
let shapeTl = gsap.timeline();

shapeTl.from("#circle", {duration: 3, y:-800, scaleY:.4, ease: "bounce.out"}, "start")
        .to("#circle", {duration: 1.5, rotate: 360, x:300, delay: 1})
        .to("#circle", {duration: 1, rotate: -360, x:0})
        .to("#square-up", {duration: 3, rotate: 360, repeat: -1, ease: "fast (0.1, 0.1, false" }, "start")
        .to("#circle", {duration: 1, })







// $(".click").on("click",function(){
//     shapeTl.play();
// })



