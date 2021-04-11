import { gsap } from "gsap";
import $ from "jquery";

let shapeTl = gsap.timeline({paused:true});

$(".click").on("click",function(){
    shapeTl.play();
})



/* =============
    Shape
============= */

shapeTl.from("#circle", {duration: 2, y:-350, scaleY:.40, ease: "bounce.out"}, "s1")
        .to("#circle", {duration: 2, x:"+=250" },"s1")

        .to("#square-up", {duration: 3, rotate: 360, repeat: -1, ease: "fast (0.1, 0.1, false" }, "s1")
        .to("#heavy-up", {duration: 3, rotate: 360, repeat: -1, ease: "fast (0.1, 0.1, false" }, "s1")
        .to("#end", {duration: 3, alpha:1 }, "s1")

        .to("#circle", {duration: 1, rotate: 360, x:300, delay: 1},"s2")
        .to("#circle", {duration: 3, rotate: -360, x:0, delay: 1},"s3")
        .to("#circle", {duration: 1, rotate: 360, x:460 },"s4")

        .to("#square-up", {scale:.5, alpha: 0},"s5")
        .to("#circle", {duration: 1, borderRadius:"0%", backgroundColor:"#4682B4" },"s5")
        .to("#circle", {duration: 1, y:10, scaleY:.9, delay:1 },"s6")
        .to("#circle", {duration: .2, y:-30  },"s7")
        .to("#circle", {duration: .5, y:0, scaleY:1 },"s8")

        .to(".mouth", {duration: .1, borderRadius: "20%", height: "45px", width:"80px", delay:1},"s9")
        .to("#circle", {duration: 1, y:10, scaleY:0.7, scaleX:1.1, delay:1},"s10")
        .to("#circle", {duration: .2, y:-50, scaleX:.9},"s11")
        .to("#circle", {duration: .5, y:0, scaleY:1, scaleX:1 },"s12")

        .to(".mouth", {duration: .8, borderRadius: "90px 90px 0 0", height: "45px", width:"80px", delay:1},"s13")
        .to("#circle", {duration: 3, y:10, scaleX:1.3, scaleY:0.7},"s14")
        .to(".eyes-l", {duration: 3, backgroundColor:"#FF0000"},"s14")
        .to(".eyes-r", {duration: 3, backgroundColor:"#FF0000"},"s14")
        .to("#circle", {duration: .5, y:-800, scaleX:.2, scaleY:2},"s15")

        .to("#circle", {duration: 4,rotate: -720, y:-150, x:800, scaleX:1, scaleY:1},"s16")
        .to("#heavy-up", {scale:.5, alpha: 0},"s17")
        .to("#circle", {duration: .8, borderRadius:"100%", backgroundColor:"#5d6269"  },"s17")
        .to(".eyes-l", {duration: .8, backgroundColor:"#000"},"s17")
        .to(".eyes-r", {duration: .8, backgroundColor:"#000"},"s17")
        .to(".mouth", {duration: .3, borderRadius: "0 0 90px 90px", height: "45px", width:"80px"},"s17")

        .to("#circle", {duration: .1, y:0, x:800, scaleX:1, scaleY:1, delay: .5},"s18")
        .to("#grass", {duration: .1, x:"+=30", yoyo: true, repeat:9 }, "s19")
        .to(".click", {duration: .1, rotate: 10 }, "s20")

        .to(".click", {duration: .1, y: 100, delay: 1 }, "s21")
        
/* =============
    Shadow
============= */

        .to("#shadow", {duration: 1.5, alpha:0.3 },"s1")    
        .to("#shadow", {duration: 1, x:105, delay: 0.7},"s1")
        .to("#shadow", {duration: 0.7, scaleX:1.4, yoyo:true, repeat:2},"s1")

        .to("#shadow", {duration: 1, x:150, delay:1},"s2")
        .to("#shadow", {duration: 3, x:-145, delay:1},"s3")
        .to("#shadow", {duration: 1, x:315},"s4")
        .to("#shadow", {duration: 1, borderRadius:"0%", scaleX: 1.5},"s5")
        .to("#shadow", {duration: 1, scaleX: 1.7, scaleY: 1.7, delay: 1},"s6")
        .to("#shadow", {duration: .2, scaleX: 1.5, scaleY: 1.5},"s7")

        .to("#shadow", {duration: 1, scaleX: 1.9, scaleY: 1.9, delay: 1},"s10")
        .to("#shadow", {duration: .2, scaleX: 1.5, scaleY: 1.5},"s11")

        .to("#shadow", {duration: 3, scaleX: 2.1, scaleY: 2.1},"s14")
        .to("#shadow", {duration: .5, scaleX: 1.5, scaleY: 1.5, alpha: 0},"s15")

        .to("#shadow", {duration: 4, x:655, alpha: 0.1, scaleX: 0.9, scaleY: 0.9},"s16")
        .to("#shadow", {duration: .8, alpha: 0.3, scaleX: 1.2, scaleY: 1.2, borderRadius:"100%"},"s17")
        .to("#shadow", {duration: .1, alpha: 0.3, scaleX: 1.5, scaleY: 1.5, delay: .5},"s18")

   






