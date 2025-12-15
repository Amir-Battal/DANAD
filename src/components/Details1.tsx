import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText)

const Details1 = () => {

  // useGSAP(() => {
  //   document.fonts.ready.then(() => {
  //     const text = document.querySelector(".Details1Title");
  //     const container = document.querySelector(".Details1TitleContainer");

  //     if (!text || !container) return;

  //     const split = new SplitText(text, {
  //       type: "words",
  //       wordsClass: "word"
  //     });

  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container,
  //         start: "top 80%",
  //         end: "top 20%",
  //         scrub: true,
  //       }
  //     })
  //     .from(split.words, {
  //       y: 80,
  //       opacity: 0,
  //       ease: "power3.out",
  //       stagger: {
  //         each: 0.08,
  //         from: "start" // RTL
  //       }
  //     });

  //     return () => split.revert();
  //   });
  // });


  // useGSAP(() => {
  //   gsap.set(".Details1Paragraph1", {opacity: 1});

  //   document.fonts.ready.then(() => {
  //     let containers = gsap.utils.toArray(".Details1Paragraph1Container");

  //     containers.forEach((container : any) => {
  //       let text = container.querySelector(".Details1Paragraph1");

  //       SplitText.create(text, {
  //         type: "words, lines",
  //         mask: "lines",
  //         linesClass: "line",
  //         autoSplit: true,
  //         onSplit: (instance) => {
  //           return gsap.from(instance.lines, {
  //             yPercent: 120,
  //             stagger: 0.1,
  //             scrollTrigger: {
  //               trigger: container,
  //               scrub: true,
  //               start: "clamp(-20% 40%)",
  //               end: "clamp(top center)",
  //             }
  //           })
  //         }
  //       })
  //     })
  //   })
  // });

  useGSAP(() => {
  document.fonts.ready.then(() => {

    ScrollTrigger.matchMedia({

      // 💻 Laptop
      "(min-width: 1024px)": () => {
        titleAnimation(80, "top 80%", "top 20%");
        paragraphsAnimation(120, "clamp(-20% 40%)", "clamp(top center)");
      },

      // 📲 iPad
      "(min-width: 768px) and (max-width: 1023px)": () => {
        titleAnimation(60, "top 85%", "top 35%");
        paragraphsAnimation(100, "top 85%", "top 60%");
      },

      // 📱 Mobile
      "(max-width: 767px)": () => {
        titleAnimation(40, "80% 90%", "top 55%");
        paragraphsAnimation(70, "top 85%", "top 60%");
      }

    });

    ScrollTrigger.refresh();
  });

  /* ---------- Helpers ---------- */

  function titleAnimation(y, start, end) {
    const text = document.querySelector(".Details1Title");
    const container = document.querySelector(".Details1TitleContainer");
    if (!text || !container) return;

    const split = new SplitText(text, {
      type: "words",
      wordsClass: "word",
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start,
        end,
        scrub: true,
        // invalidateOnRefresh: true,
      }
    }).from(split.words, {
      y,
      opacity: 0,
      stagger: { each: 0.06, from: "start" }, // RTL
      ease: "power3.out",
    });

    return () => split.revert();
  }

  function paragraphsAnimation(yPercent, start, end) {
    gsap.utils.toArray(".Details1Paragraph1Container").forEach((container) => {

      const text = container.querySelector(".Details1Paragraph1");
      if (!text) return;

      SplitText.create(text, {
        type: "words,lines",
        mask: "lines",
        linesClass: "line",
        autoSplit: true,
        onSplit: (instance) => {
          gsap.from(instance.lines, {
            yPercent,
            stagger: 0.1,
            scrollTrigger: {
              trigger: container,
              start,
              end,
              scrub: true,
            }
          });
        }
      });

    });
  }

});


  return (
    <section id="danad" className="Details1">
      <div dir="rtl" className="Details1TitleContainer w-full bg-[#f1f1f1] mt-[5%] ">
        <h1 className="Details1Title text-[30px] md:text-[60px] lg:text-[90px] font-[Guesswhat] text-[#2b1609] mx-[2%]">ندعوكـم إلى لحظــةٍ يُـعاد فيـها تقديـم الفـن العربــي… بـ صـوتٍ جديــد.</h1>
      </div>

      <div dir="rtl" className="w-full h-auto lg:h-[750px] flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row-reverse text-[14px] mt-[5%] md:text-[20px] md:mt-[10%] lg:text-[28px] lg:mt-0 font-[TraditionalArabic] text-[#2b1609]">
        <div className="w-full flex flex-row items-end h-[200px] md:h-[400px] lg:hidden">
          <img className="w-1/3 h-[90%] bg-black" alt="" />
          <img className="w-1/3 h-[80%] bg-black" alt="" />
          <img className="w-1/3 h-full bg-black" alt="" />
        </div>
        <div className="Details1Paragraph1Container w-[90%] lg:w-1/3 flex flex-col mx-[2%] lg:mx-0">
          <p className="Details1Paragraph1">معرضٌ عربي
            يبدأ حيث ينتهي الوقت، حيث يتجلّى التراث…
            وتولد الرؤية دعوة لاكتشاف
            العروبة بعيونٍ معاصرة، هنا يبدأ الحوار
            بين الماضي والحاضر.
          </p>
          <img className="w-full h-full bg-black mt-[10%] hidden lg:block"  alt="" />
        </div>
        <div className="Details1Paragraph1Container w-full lg:w-1/3 flex flex-col mx-[2%] lg:mx-0">
          <p className="Details1Paragraph1">
            مجد الثقافات العربية… في رؤية معاصرة
          </p>
          <img className="w-full h-full bg-black mt-[40%] hidden lg:block"  alt="" />
        </div>
        <div className="w-1/3 flex flex-col lg:block">
          <p>
            .
          </p>
          <img className="w-full h-full bg-black mt-[30%] hidden lg:block"  alt="" />
        </div>
      </div>
    </section>
  );
};

export default Details1;
