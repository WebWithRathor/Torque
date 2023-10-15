gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.from(".starting img",{
    scale:3,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#home",
        start:"top 0%",
        pin:true,
        scrub:2
    }
})

// cursor

var c=document.querySelector("#cursor")
window.addEventListener("mousemove",function(dets){
    gsap.to(c,{
        x:dets.x - c.clientWidth/2,
        y:dets.y -c.clientHeight/2
    })
})
document.querySelectorAll("h1").forEach(function(e){
  e.addEventListener("mouseenter",function(){
    gsap.to(c,{
      scale:3
      
    })
  })
  e.addEventListener("mouseleave",function(){
    gsap.to(c,{
      scale:1
    })
  })
})
document.querySelectorAll(".swiper-slide").forEach(function(e){
  e.addEventListener("mouseenter",function(){
    c.textContent="DRAG";
    c.style.width="5vw"
    
    
  })
  e.addEventListener("mouseleave",function(){
    c.textContent=""
    c.style.width="2vw"
  })

})

gsap.from(".ques",{
  x:"120%",
  opacity:0,
  stagger:.5,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#faqs",
    start:"90% 0%",
     pin:true
  }
})

var menu = document.querySelector("#menu")
var flag =0
document.querySelector(".menu").addEventListener("click",function(){
  if(flag ==0){
    gsap.to(menu,{
      top:0
    })
    flag=1
  }else{
    gsap.to(menu,{
      top:"-150%"
    })
    flag=0
  }
})

var tl = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#our-work",
    start:"top 0%",
    end:"top -100%",
    pin:true,
    scrub:1,
  }
})
tl
.to(".work-container",{
  top:"0%"
})

var swiper = new Swiper(".mySwiper", {

    loop:true,
    grabCursor:true,
    centeredSlides: true,
    speed:1000,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    effect: "flip",

    grabCursor:true,
    speed:700,
    loop:true,
    grabCursor:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  });

  gsap.to(".cl1 .im",{
    x:"-100%",
    repeat:-1,
    ease:"linear",
    duration:10
  })
  gsap.to(".cl2 .im",{
    x:"100%",
    repeat:-1,
    ease:"linear",
    duration:10
  })