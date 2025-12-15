// import Navbar from "./components/Navbar";
import gsap from "gsap";
import Pattern1 from "./components/Pattern1/Pattern1";
import Pattern1_2 from "./components/Pattern1/Pattern1_2";
import Pattern1_3 from "./components/Pattern1/Pattern1_3";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import CirclePatterns from "./components/CirclePatterns";
import Details1 from "./components/Details1";
import Details2 from "./components/Details2";
import Agenda from "./components/Agenda";
import Details3 from "./components/Details3";
import Details4 from "./components/Details4";
import Footer from "./components/Footer";
import Logo from "./components/Logos/Logo";
import WordLogo from "./components/Logos/WordLogo";
import TextLogo from "./components/Logos/TextLogo";
import { ArrowLeft } from "lucide-react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import CirclePattern3 from "./components/Circles/CirclePattern3";
// import { GSDevTools } from "gsap/GSDevTools";


// gsap.registerPlugin(GSDevTools)

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP, SplitText, ScrollToPlugin);


// GSDevTools.create();


const App = () => {

  const element = useRef<HTMLDivElement | null>(null);
  const topContainer = useRef<HTMLDivElement | null>(null);
  const deadline = useRef<HTMLDivElement | null>(null);
  const logoWrapper = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const wordLogoRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const heroCardRef = useRef<HTMLButtonElement | null>(null);

  const menuLocked = useRef(false);



  const scrollToSection = (id: any) => {
    const smoother = ScrollSmoother.get();

    if (smoother) {
      smoother.scrollTo(id, true, "top top");
    } else {
      gsap.to(window, {
        duration: 1,
        scrollTo: id,
        ease: "power2.out",
      });
    }
  };




  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
    });

    const master = gsap.timeline({
      scrollTrigger: {
        trigger: topContainer.current,
        start: "top top",
        end: "+=400",
        scrub: true,
        pin: true,
        onEnter: () => {
          const registerEl = document.querySelector(".Register") as HTMLElement | null;
          if (registerEl) {
            registerEl.style.display = "none";
          }
        },
        onUpdate: () => {
          if (master.progress() > 0.3) {
            const wrapperEl = document.getElementById("smooth-wrapper") as HTMLElement | null;
            const contentEl = document.getElementById("smooth-content") as HTMLElement | null;

            if (wrapperEl && contentEl) {
              wrapperEl.style.backgroundColor = "#f1f1f1";
              contentEl.style.backgroundColor = "#f1f1f1";
            }

            const heroDetailsEl = document.querySelector(".HeroDetails") as HTMLElement | null;
            if (heroDetailsEl) {
              heroDetailsEl.style.opacity = "0";
            }
          }
          else {
            const wrapperEl = document.getElementById("smooth-wrapper") as HTMLElement | null;
            const contentEl = document.getElementById("smooth-content") as HTMLElement | null;

            if (wrapperEl && contentEl) {
              wrapperEl.style.backgroundColor = "#9e8d16";
              contentEl.style.backgroundColor = "#9e8d16";
            }
            const heroDetailsEl = document.querySelector(".HeroDetails") as HTMLElement | null;
            if (heroDetailsEl) {
              heroDetailsEl.style.opacity = "1";
            }
            
          }
        },
        onLeave: () => {
          menuLocked.current = true;

          gsap.to(menuRef.current, {
            autoAlpha: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          menuLocked.current = false;

          gsap.to(menuRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          const registerEl = document.querySelector(".Register") as HTMLElement | null;
          if (registerEl) {
            registerEl.style.display = "block";
          }
        }
      }
    });

    /* 🔹 العنصر الرئيسي */
    master.to(element.current, {
      scale: 8,
      opacity: 50,
      ease: "none",
    }, 0);

    master.to(
      "#smooth-wrapper",
      { backgroundColor: "#f1f1f1", ease: "none" },
      0.005
    );

    master.to(
      "#smooth-content",
      { backgroundColor: "#f1f1f1", ease: "none" },
      0.005
    );

    /* 🔹 الدوائر */
    master.from(".circ1", {
      rotate: 180,
      ease: "none"
    }, 0);

    master.from(".circ2", {
      rotate: -180,
      ease: "none"
    }, 0);

    /* 🔹 DEADLINE يظهر في المنتصف */
    master.to(deadline.current, {
      // autoAlpha: 2,
      opacity: 10,
      scale: 1,
      ease: "none"
    }, 0.01);


    master.fromTo(
      ".deadline-text",
      { yPercent: 50 },
      {
        yPercent: 0,
        ease: "power2.out",
        // stagger: 0.1
      },
      0.05
    );

    /* إخفاء القسم كامل */
    master.to(deadline.current, {
      yPercent: -120,
      ease: "none"
    }, 0.2);


    master.to(element.current, {
      autoAlpha: 0,
      ease: "power2.inOut"
    }, 0.005);
  });

  useGSAP(() => {
    gsap.set(wordLogoRef.current, {
      autoAlpha: 0,
      scale: 0.9,
      position: "absolute",
      top: 0,
      left: 0,
    });

    gsap.set(logoRef.current, {
      autoAlpha: 1,
      scale: 1,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: topContainer.current,
        start: "55% center", // عند انتهاء القسم الأول
        end: "+=150",
        scrub: true,
      }
    })
    .to(logoRef.current, {
      autoAlpha: 0,
      scale: 0.8,
      ease: "power2.out",
    }, 0)
    .to(wordLogoRef.current, {
      autoAlpha: 1,
      scale: 1,
      ease: "power2.out",
    }, 0)
    .to(menuRef.current, {
      color: "#2b1609",
      ease: "none",
    }, 0);;
  })

  useGSAP(() => {
    gsap.set(menuRef.current, {
      autoAlpha: 1,
      y: 0,
    });
  });

  useGSAP(() => {
    let lastDirection = 1;

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (self.direction !== lastDirection) {
          lastDirection = self.direction;

          if (self.direction === 1) {
            // ⬇️ Scroll Down → Hide menu
            gsap.to(menuRef.current, {
              autoAlpha: 0,
              y: -20,
              duration: 0.3,
              ease: "power2.out",
            });
          } else {
            // ⬆️ Scroll Up → Show menu
            gsap.to(menuRef.current, {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        }
      },
    });
  });


  useGSAP(() => {
    const card = heroCardRef.current;
    const bg = card?.querySelector(".hero-bg") || null;
    const text = card?.querySelectorAll(".hero-text") || null;
    const circle = card?.querySelector(".circle-rotate") || null;

    gsap.set(circle, {
      transformOrigin: "50% 50%",
      transformBox: "fill-box",
      rotate: 0,
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(bg, {
      scaleX: 1,
      duration: 0.4,
      ease: "power2.inOut",
    })
    .to(text, {
      color: "#ffffff",
      duration: 0.2,
      ease: "power2.out",
    }, 0.2)
    .to(circle, {
      rotate: 180,
      duration: 0.4,
      ease: "power2.inOut",
    }, 0);

    card?.addEventListener("mouseenter", () => tl.play());
    card?.addEventListener("mouseleave", () => tl.reverse());
  }, []);





  return (
    <div id="smooth-wrapper" className="bg-[#9e8d16] overflow-hidden">
      <div
        ref={headerRef}
        className="fixed w-full top-6 z-999 flex flex-row-reverse justify-between items-center gap-8"
      >
        {/* LOGO */}
        <div ref={logoWrapper} className="z-5">
          <div ref={logoRef} className="ml-[-145%] md:ml-[-20%]">
            <a href="#">
              <Logo fillColor="#f1f1f1"/>
            </a>
          </div>
          <div ref={wordLogoRef} className="ml-[5%] md:ml-[77%] lg:ml-[89%]">
            <a href="#">
              <Logo fillColor="#2b1609"/>
              <WordLogo />
            </a>
          </div>
        </div>

        {/* MENU */}
        <ul
          ref={menuRef}
          className="gap-8 text-[#f1f1f1] text-[28px] font-medium ml-[5%] font-[TraditionalArabic] z-5 hidden md:flex"
          dir="rtl"
        >

          <li>
            <button
              onClick={() => scrollToSection("#danad")}
              className="hover:text-[#ff6d3a] cursor-pointer"
            >
              دند
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("#team")}
              className="hover:text-[#ff6d3a] cursor-pointer"
            >
              فريق العمل
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("#agenda")}
              className="hover:text-[#ff6d3a] cursor-pointer"
            >
              الأجندة
            </button>
          </li>
          <li><a href="#" className="hover:text-[#ff6d3a] cursor-pointer">تواصل معنا</a></li> 

        </ul>

        <div className="Register absolute w-screen mt-[52%]">
          <button
            ref={heroCardRef}
            className="hero-card relative overflow-hidden w-[320px] h-[90px] bg-[#f1f1f1] mt-[300%] md:mt-[180%] xl:mt-[48%] ml-[2%] px-[0.5%] flex flex-row-reverse justify-between items-center cursor-pointer"
            onClick={() => window.open("https://www.google.com", "_blank", "noopener,noreferrer")}
          >
            {/* overlay */}
            <span className="hero-bg absolute inset-0 bg-[#2b1609] scale-x-0 origin-right z-0"></span>

            <div className="relative z-10 w-1/4 h-[80%] bg-[#a6a2fe] flex items-center justify-center">
              <div className="circle-rotate w-full h-full flex items-center justify-center">
                {/* <CirclePattern2 /> */}
                <CirclePattern3 />
              </div>
            </div>

            <h3 className="hero-text relative z-10 font-[TraditionalArabic] text-[25px] text-[#2b1609]">
              احجز مكانك من هنا
            </h3>

            <ArrowLeft className="hero-text relative z-10" strokeWidth={1.5} />
          </button>
        </div>
      </div>



      <div id="smooth-content" className="bg-[#9e8d16] w-screen min-h-[3000px]">

        <div className="HeroDetails absolute w-screen h-screen flex justify-end">
          <div className="mr-[2%] mt-[40%] md:mt-[20%] lg:mt-[50%]">
            <TextLogo />
          </div>
        </div>

        <div ref={topContainer} className="absolute w-screen h-screen mt-[1%]"></div>

        <div ref={element} id="element" className="circle w-screen h-screen mt-[1%]">
          <div className="absolute w-screen h-screen flex justify-center items-center">
            <div id="whiteCircle" className="absolute w-[40%] md:w-[40%] lg:w-[20%] h-[18%] md:h-[30%] lg:h-[34%] bg-[#f1f1f1] rounded-[100%] z-0"></div>
          </div>
          <div id="insideElement">
            <Pattern1 className="circ1" />
            <Pattern1_2 className="circ2" />
            <Pattern1_3 className="circ3" />
          </div>
          {/* <div className="w-screen h-screen bg-[#9e8d16]"></div> */}
        </div>

        <div ref={deadline} id="deadline" dir="rtl" className="absolute w-screen h-screen flex flex-row justify-around font-[Guesswhat] text-[50px] md:text-[80px] lg:text-[120px] opacity-0 pointer-events-none mt-[-100%] md:mt-[-60%] lg:mt-[-20%]">
          <div className="w-[150px] h-[80px] md:w-[300px] md:h-[120px] lg:w-[500px] lg:h-[150px] bg-[#eeff7c] flex justify-center items-center overflow-hidden">
            <h1 className="deadline-text text-[#ff6d3a]">٢٢ - ٢٤</h1>
          </div>

          <div dir="ltr" className="w-auto h-auto">
            <div className="w-[150px] h-[80px] md:w-[300px] md:h-[120px] lg:w-[450px] lg:h-[150px] bg-[#ff6d3a] flex justify-center items-center overflow-hidden">
              <h1 className="deadline-text text-[#eeff7c]">أكتوبـــر</h1>
            </div>
            <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] bg-[#eeff7c] flex justify-center items-center ml-[-32%] overflow-hidden">
              <h1 className="deadline-text text-[#ff6d3a]">٢٥</h1>
            </div>
          </div>

          <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] bg-[#ff6d3a] flex justify-center items-center overflow-hidden">
            <h1 className="deadline-text text-[#eeff7c]">٢٠</h1>
          </div>
        </div>

        
        <Details1 />
        <CirclePatterns />
        <Details2 />
        <Agenda />
        <Details3 />
        <Details4 />
        <Footer />

      </div>
    </div>



  );
};

export default App;