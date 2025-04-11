import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, viewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit{
  buyButton = {
    text: "Tovább",
    path: "product"
  }

  guides = [{
      id: 1,
      title: "1. lépés",
      text: "Nyisd meg a Lokátor-t és koppints a Tárgyak-ra.",
      img: "/assets/images/tutor1.png"
  },
  {
    id: 2,
    title: "2. lépés",
    text: "Nyomj a Tárgy Hozzáadása gombra.",
    img: "/assets/images/tutor2.png"
  },
  {
    id: 3,
    title: "3. lépés",
    text: "Tartsd lenyomva a SafeCard-on található gombot, amíg az hangjelzést nem ad.",
    img: "/assets/images/tutor3.png"
  },
  {
    id: 4,
    title: "4. lépés",
    text: "Nyomj az \"Egyéb támogatott tárgyak\"-ra és válaszd ki a SafeCardot.",
    img: "/assets/images/tutor4.png"
  },
  {
    id: 5,
    title: "5. lépés",
    text: "Sikeresen csatlakoztattad a SafeCardot.",
    img: "/assets/images/tutor5.png"
  }
]



  constructor(private router: Router, private elementRef: ElementRef, private scroller: ViewportScroller) { }
  
    ngAfterViewInit(): void {
      gsap.registerPlugin(ScrollTrigger);
    
      // Animáció a ".creditcard-card" elemre
      gsap.to(".pingcredit", {
        y: "-200", // Elmozdulás felfelé
        opacity: 1, // Áttűnés
        duration: 4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".small-trigger",
          start: "top 60%",
          end: "bottom 20%",
          scrub: 1,
          markers: false,
        },
      });
    
      // Animáció a ".safecard-card" elemre
      gsap.to(".pingtrack", {
        y: "200", 
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".small-trigger",
          start: "top 90%",
          end: "bottom 40%",
          scrub: 1,
          markers: false,
        },
      });

      






      const video: HTMLVideoElement = this.elementRef.nativeElement.querySelector('video');
      const videom: HTMLVideoElement = this.elementRef.nativeElement.querySelector('.video-container');

      ScrollTrigger.create({
        trigger: video, 
        start: 'top 90%', 
        end: 'bottom 10%', 
        onEnter: () => video.play(),
        onEnterBack: () => video.play(), 
        onLeaveBack: () => video.pause(), 
        markers: false
      });


  }
    
  ngOnInit() {
    AOS.init({
      once: true
    });
  }

  buyButtonClick() {
      window.location.href = this.buyButton.path;
    
  }



}
