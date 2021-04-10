import { gsap } from "gsap";
// import $ from jquery;

// let shapeTl = gsap.timeline({paused:true})
let shapeTl = gsap.timeline();


shapeTl.from("#circle", {duration: 3, y:-800, scaleY:.35, ease: "bounce.out"}, "s1")
        .to("#square-up", {duration: 3, rotate: 360, repeat: -1, ease: "fast (0.1, 0.1, false" }, "s1")

        .to("#circle", {duration: 1.5, rotate: 360, x:300, delay: 1},"s2")
        .to("#circle", {duration: 1, rotate: -360, x:0},"s3")
        .to("#circle", {duration: 1, rotate: 360, x:460},"s4")
        .to("#square-up", {scale:.5, alpha: 0},"s5")
        .to("#circle", {duration: 1, borderRadius:"0%", backgroundColor:"#4682B4" },"s5")
        .to("#circle", {duration: 1, y:10, scaleY:.9, delay:1 },"s6")
        .to("#circle", {duration: .2, y:-30  },"s7")
        .to("#circle", {duration: .5, y:0, scaleY:1 },"s8")

        .to(".mouth", {duration: .8, borderRadius: "20%", height: "45px", width:"80px", delay:1},"s9")
        .to("#circle", {duration: 1, y:10, scaleY:0.7, scaleX:1.1, delay:1},"s10")
        .to("#circle", {duration: .2, y:-50, scaleX:.9},"s11")
        .to("#circle", {duration: .5, y:0, scaleY:1, scaleX:1 },"s12")

        .to(".mouth", {duration: .8, borderRadius: "90px 90px 0 0", height: "45px", width:"80px", delay:1},"s13")
        .to("#circle", {duration: 3, y:10, scaleX:1.3, scaleY:0.7},"s14")
        .to(".eyes-l", {duration: 3, backgroundColor:"#FF0000"},"s14")
        .to(".eyes-r", {duration: 3, backgroundColor:"#FF0000"},"s14")
        .to("#circle", {duration: .8, y:-800, scaleX:.2, scaleY:2},"s15")

        .to("#circle", {duration: 3,rotate: -720, y:0, x:300, scaleX:1, scaleY:1},"s16")






// $(".click").on("click",function(){
//     shapeTl.play();
// })



