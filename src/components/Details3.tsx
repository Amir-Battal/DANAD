import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const Image7 = "https://res.cloudinary.com/dqe36doqn/image/upload/v1765864283/065c92b85b776dbc322bdce60c09c848_rdreu1.jpg"
const Image8 = "https://res.cloudinary.com/dqe36doqn/image/upload/v1765864284/andrei-r-popescu--wxTHHFpB1E-unsplash_copy_af1nec.jpg"
const Image9 = "https://res.cloudinary.com/dqe36doqn/image/upload/v1765864282/the-cleveland-museum-of-art-fhqiVI9ot2U-unsplash_copy_sfngfw.jpg"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

const Details3 = () => {

  // useGSAP(() => {
  //   document.fonts.ready.then(() => {
  //     const text = document.querySelector(".Details3Title");
  //     const container = document.querySelector(".Details3TitleContainer");

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
  //   gsap.set(".Details3Paragraph", {opacity: 1});

  //   document.fonts.ready.then(() => {
  //     let containers = gsap.utils.toArray(".Details3ParagraphContainer");

  //     containers.forEach((container : any) => {
  //       let text = container.querySelector(".Details3Paragraph");

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
  //               start: "-100% center",
  //               end: "top center",
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

        // 💻 Desktop
        "(min-width: 1024px)": () => {
          titleAnimation(80, "top 80%", "top 20%", 0.08);
          paragraphAnimation(120, "-100% center", "top center", 0.1);
        },

        // 📲 Tablet
        "(min-width: 768px) and (max-width: 1023px)": () => {
          titleAnimation(60, "top 85%", "top 30%", 0.06);
          paragraphAnimation(100, "-80% center", "70% 55%", 0.08);
        },

        // 📱 Mobile
        "(max-width: 767px)": () => {
          titleAnimation(40, "top 90%", "top 45%", 0.05);
          paragraphAnimation(70, "top 95%", "70% 65%", 0.06);
        }

      });

      ScrollTrigger.refresh();
    });

    /* ---------- Title ---------- */
    function titleAnimation(y: any, start: any, end: any, stagger: any) {
      const text = document.querySelector(".Details3Title");
      const container = document.querySelector(".Details3TitleContainer");
      if (!text || !container) return;

      const split = new SplitText(text, {
        type: "words",
        wordsClass: "word"
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start,
          end,
          scrub: true,
        }
      })
      .from(split.words, {
        y,
        opacity: 0,
        ease: "power3.out",
        stagger: { each: stagger, from: "start" }
      });

      return () => split.revert();
    }

    /* ---------- Paragraphs ---------- */
    function paragraphAnimation(yPercent: any, start: any, end: any, stagger: any) {
      gsap.set(".Details3Paragraph", { opacity: 1 });

      gsap.utils.toArray(".Details3ParagraphContainer").forEach((container: any) => {
        const text = container.querySelector(".Details3Paragraph");
        if (!text) return;

        SplitText.create(text, {
          type: "words,lines",
          mask: "lines",
          linesClass: "line",
          autoSplit: true,
          onSplit: (instance) => {
            gsap.from(instance.lines, {
              yPercent,
              stagger,
              scrollTrigger: {
                trigger: container,
                scrub: true,
                start,
                end,
              }
            });
          }
        });
      });
    }
  });


  return (
    <section className="w-screen h-auto lg:h-[1350px] overflow-hidden">
      <div dir="rtl" className="mt-5 text-[#2b1609] mx-[2%]">
        <div className="Details3TitleContainer font-[GuessWhat] text-[30px] md:text-[60px] lg:text-[90px]">
          <h1 className="Details3Title">مساحات وهوية: التصميم في المشهد الحضري ملامح المدينة… رؤى تُصمَّم</h1>
        </div>

        <div className="w-full h-auto font-[TraditionalArabic] text-[20px] md:text-[25px] flex flex-col lg:items-end mt-[5%] gap-3 lg:gap-5">
          <div className="w-full lg:w-1/2 Details3ParagraphContainer">
            <p className="Details3Paragraph">
              سيواكب البرنامجَ معرضٌ ثقافي خاص يُقام في متحف الهجرة، حيث يُفتتح ويُقدَّم للجمهور يوم السبت ١٨ أكتوبر، ليشكّل مساحة تفاعلية تستعرض تقاطعات الثقافة، التصميم، والهوية.
            </p>
          </div>
          <div className="w-full lg:w-1/2 Details3ParagraphContainer">
            <p className="Details3Paragraph">
              في الساعة ٥:٠٠ مساءً، يشارك خوسيه لويس إنفانثون رؤيته وتأملاته حول التصميم والمدينة، مستندًا إلى خبرته الواسعة في تنفيذ تدخلات حضرية متعددة داخل مدينة مدريد، ومسلطًا الضوء على دور التصميم في تشكيل الفضاءات العامة والتجربة الإنسانية.
            </p>
          </div>
        </div>

        <div className="w-full h-[250px] md:h-[500px] lg:h-[700px] flex flex-row justify-between items-end mt-[5%]">
          <div className="w-1/3 h-full">
            <img className="Details1Media w-full h-full bg-gray-400 object-cover" src={Image7} alt="" />
          </div>
          <div className="w-1/3 h-[85%]">
            <img className="Details1Media w-full h-full bg-gray-400 object-cover" src={Image8} alt="" />
          </div>
          <div className="w-1/3 h-[93%]">
            <img className="Details1Media w-full h-full bg-gray-400 object-cover" src={Image9} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details3;
