import { useGSAP } from "@gsap/react";
import CirclePattern3 from "./Circles/CirclePattern3";
import CirclePattern4 from "./Circles/CirclePattern4";
import FullLogo from "./Logos/FullLogo";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import CirclePattern1 from "./Circles/CirclePattern1";
import CirclePattern2 from "./Circles/CirclePattern2";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import October from "./Draggable/October";
import Year from "./Draggable/Year";
import Date from "./Draggable/Date";


gsap.registerPlugin(useGSAP, Draggable, InertiaPlugin, ScrollTrigger);

const Footer = () => {
  
  // useGSAP(() => {
  //   const patterns = ["#pattern1", "#pattern2", "#pattern3", "#pattern4", "#october", "#year", "#date"];

  //   gsap.set(patterns, {
  //     y: -150,
  //     opacity: 0,
  //   });

  //   gsap.to(patterns, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power3.out",
  //     stagger: 0.15,
  //     scrollTrigger: {
  //       trigger: "#container",
  //       start: "top 80%",
  //       once: true,
  //     },
  //   });

  //   patterns.forEach((id) => {
  //     Draggable.create(id, {
  //       inertia: true,
  //       bounds: "#container",
  //       edgeResistance: 0.8,
  //     });
  //   });
  // });

  useGSAP(() => {
  const items = [
    "#pattern1",
    "#pattern2",
    "#pattern3",
    "#pattern4",
    "#october",
    "#year",
    "#date",
  ];

  const elements = items.map(id => document.querySelector(id));

  gsap.set(elements, {
    y: -window.innerHeight,
    rotation: () => gsap.utils.random(-20, 20),
  });

  gsap.to(elements, {
    y: 0,
    duration: 1.6,
    ease: "bounce.out",
    stagger: {
      each: 0.12,
      from: "random",
    },
    scrollTrigger: {
      trigger: "#container",
      start: "top 80%",
      once: true,
    },
    onComplete: enableDrag,
  });

  function enableDrag() {
    elements.forEach((el) => {
      Draggable.create(el, {
        type: "x,y",
        inertia: true,
        bounds: "#container",
        edgeResistance: 0.7,
        onDrag: () => handleCollisions(el),
        onThrowUpdate: () => handleCollisions(el),
      });
    });
  }

  function handleCollisions(activeEl) {
    const a = activeEl.getBoundingClientRect();

    elements.forEach((el) => {
      if (el === activeEl) return;

      const b = el.getBoundingClientRect();

      if (isColliding(a, b)) {
        const dx = (a.left + a.width / 2) - (b.left + b.width / 2);
        const dy = (a.top + a.height / 2) - (b.top + b.height / 2);

        gsap.to(el, {
          x: `+=${dx * -0.15}`,
          y: `+=${dy * -0.15}`,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    });
  }

  function isColliding(a, b) {
    return !(
      a.right < b.left ||
      a.left > b.right ||
      a.bottom < b.top ||
      a.top > b.bottom
    );
  }
});




  return (
    <footer
      id="container"
      className="relative w-full h-[700px] bg-[#2b1609] text-[#f1f1f1] pt-[5%] overflow-hidden"
    >
      <div dir="rtl" className="w-full flex flex-row lg:gap-20 px-5 lg:px-0">

        <div className="w-[30%] mr-[2%] hidden lg:block">
          <FullLogo />
        </div>

        <div className="w-1/2 lg:w-[20%] flex flex-col gap-10">
          <h1 className="font-[TraditionalArabicBold] text-[28px]">تواجدنا الرقمي</h1>
          <ul className="font-[Malaye] text-[20px] flex flex-col items-end gap-5 ml-[50%]">
            <li><a className="hover:text-[#8d4920]" href="#">Instagram</a></li>
            <li><a className="hover:text-[#8d4920]" href="#">Linkedin</a></li>
            <li><a className="hover:text-[#8d4920]" href="#">Facebook</a></li>
          </ul>
        </div>

        <div className="w-1/2 lg:w-[50%] flex flex-col gap-10">
          <h4 className="font-[TraditionalArabic] flex justify-center text-[20px] md:text-[28px]">لا تتردد في التواصل معنا لمشاركة مشروعك، أو لاستكشاف فرص التعاون</h4>
          <a href="#" className="font-[Malaye] flex justify-end md:justify-center text-[20px] hover:text-[#8d4920]">contact@danad.com</a>
        </div>
      </div>

      <div className="absolute w-full pointer-events-auto mt-[30%] md:mt-0">
        <div
          id="pattern1"
          className="absolute w-[10%]"
          style={{ left: "5%" }}
        >
          <CirclePattern1 />
        </div>

        <div
          id="pattern2"
          className="absolute w-[10%]"
          style={{ left: "25%" }}
        >
          <CirclePattern2 />
        </div>

        <div
          id="pattern3"
          className="absolute w-[10%] ml-[-10%] mt-[-10%]"
          style={{ left: "50%" }}
        >
          <CirclePattern3 />
        </div>

        <div
          id="pattern4"
          className="absolute w-[10%] ml-[-5%]"
          style={{ left: "70%" }}
        >
          <CirclePattern4 />
        </div>

        <div
          id="october"
          className="absolute w-[20%] mt-[15%]"
          style={{ left: "70%" }}
        >
          <October />
        </div>
        
        <div
          id="year"
          className="absolute w-[20%] ml-[-30%] mt-[15%]"
          style={{ left: "70%" }}
        >
          <Year />
        </div>
        
        <div
          id="date"
          className="absolute w-[20%] ml-[10%] mt-[10%]"
          style={{ left: "70%" }}
        >
          <Date />
        </div>

      </div>

    </footer>
  );
};

export default Footer;
