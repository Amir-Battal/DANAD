import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText)

const Details2 = () => {

  // useGSAP(() => {
  //   gsap.set(".Details2Paragraph", {opacity: 1});

  //   document.fonts.ready.then(() => {
  //     let containers = gsap.utils.toArray(".Details2ParagraphContainer");

  //     containers.forEach((container : any) => {
  //       let text = container.querySelector(".Details2Paragraph");

  //       SplitText.create(text, {
  //         type: "words, lines",
  //         mask: "lines",
  //         linesClass: "line",
  //         autoSplit: true,
  //         onSplit: (instance) => {
  //           return gsap.from(instance.lines, {
  //             yPercent: 120,
  //             stagger: 1,
  //             scrollTrigger: {
  //               trigger: container,
  //               scrub: true,
  //               start: "top 85%",
  //               end: "80% 30%",
  //             }
  //           })
  //         }
  //       })
  //     })
  //   })
  // });

  useGSAP(() => {
    gsap.set(".Details2Paragraph", { opacity: 0 });

    document.fonts.ready.then(() => {

      ScrollTrigger.matchMedia({

        // 💻 Laptop
        "(min-width: 1024px)": () => {
          paragraphsAnimation(120, "top 85%", "80% 30%", 0.12);
        },

        // 📲 Tablet
        "(min-width: 768px) and (max-width: 1023px)": () => {
          paragraphsAnimation(100, "top 90%", "80% 40%", 0.1);
        },

        // 📱 Mobile
        "(max-width: 767px)": () => {
          paragraphsAnimation(70, "top 95%", "top 60%", 0.08);
        }

      });

      ScrollTrigger.refresh();
    });

    /* ---------- Helper ---------- */

    function paragraphsAnimation(yPercent, start, end, stagger) {
      gsap.utils.toArray(".Details2ParagraphContainer").forEach((container) => {
        const text = container.querySelector(".Details2Paragraph");
        if (!text) return;

        gsap.to(text, {
          opacity: 1,
          scrollTrigger: {
            trigger: container,
            start,
            end,
            scrub: true,
          }
        });

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
    <section id="team" className="w-screen  md:h-[1200px]">
      <div dir="rtl" className="mt-5 mx-[2%]">
        <div className="mx-[2%] w-full flex flex-row justify-between text-[#2b1609]">

          <div className="w-1/3 Details2ParagraphContainer">
            <h1 className="Details2Paragraph font-[Guesswhat] text-[45px] md:text-[90px]">دنــــــد</h1>
          </div>

          <div className="w-1/3 Details2ParagraphContainer">
            <h1 className="Details2Paragraph font-[Guesswhat] text-[45px] md:text-[90px]">٢٠٢٥</h1>
          </div>

          <div className="w-1/3 Details2ParagraphContainer hidden lg:block">
            <p className="Details2Paragraph font-[TraditionalArabic] text-[28px]">تراثٌ يُعاد اكتشافه، و من قلب الجزيرة… تنبع الحكاية حيث تستخلص من الجذور العميقة، رؤيةٌ عربية متجددة مستوحاةٌ من التراث ... ومصممة للمستقبل</p>
          </div>
        </div>
        <div className="w-full Details2ParagraphContainer block lg:hidden">
          <p className="Details2Paragraph font-[TraditionalArabic] text-[14px] md:text-[28px]">تراثٌ يُعاد اكتشافه، و من قلب الجزيرة… تنبع الحكاية حيث تستخلص من الجذور العميقة، رؤيةٌ عربية متجددة مستوحاةٌ من التراث ... ومصممة للمستقبل</p>
        </div>

        <div className="w-full mt-[5%] flex flex-col gap-5 text-[#2b1609]">

          <div className="w-full flex flex-row gap-5">
            <div className="w-1/2 lg:w-1/4">
              <img className="w-full h-[200px] md:h-[400px] bg-gray-400" alt="" />
              <h4 className="font-[TraditionalArabic] text-[28px]">أمجد بطال</h4>
            </div>
            <div className="w-1/2 lg:w-1/4">
              <img className="w-full h-[200px] md:h-[400px] bg-gray-400" alt="" />
              <h4 className="font-[TraditionalArabic] text-[28px]">محمد علي بابنسي</h4>
            </div>
          </div>

          <div className="flex flex-row justify-end gap-5">
            <div className="w-1/2 lg:w-[47%]">
              <img className="w-full h-[200px] md:h-[400px] bg-gray-400" alt="" />
              <h4 className="font-[TraditionalArabic] text-[28px]">فريق عمل مختص</h4>
            </div>
            <div className="w-1/2 lg:w-1/4">
              <img className="w-full h-[200px] md:h-[400px] bg-gray-400" alt="" />
              <h4 className="font-[TraditionalArabic] text-[28px]">أمير بطال</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Details2;
