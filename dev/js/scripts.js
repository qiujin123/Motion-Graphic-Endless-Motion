import { gsap } from "gsap";


let shapeTl = gsap.timeline({paused:true})

shapeTl.from("#circle", {duration: 1, x:10})





$(".click").on("click",function(){
    shapeTl.play();
})