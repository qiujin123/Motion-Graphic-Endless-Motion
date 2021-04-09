import { gsap } from "gsap";
// import $ from jquery;

// let shapeTl = gsap.timeline({paused:true})
let shapeTl = gsap.timeline();

shapeTl.from("#circle", {duration: 2, alpha:0})
        .to("#circle", {duration: 1.5, rotate: 360, x:300})
        .to("#circle", {duration: 1, rotate: -360, x:0})
        
        .to("#circle", {duration: 2, y:10, scaleY:.8})
        .to("#circle", {duration: .5, y:-200, scaleY:1})
        .to("#circle", {duration: .8, y:0})





// $(".click").on("click",function(){
//     shapeTl.play();
// })



