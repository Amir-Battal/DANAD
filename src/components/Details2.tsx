import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


import Mask1 from "./Masks/Mask1";
import Mask2 from "./Masks/Mask2";
import Mask3 from "./Masks/Mask3";

const Image3 = "https://res.cloudinary.com/dqe36doqn/image/upload/v1765864222/DND_M40_copy_snrxxm.jpg"
const Image4 = "https://res.cloudinary.com/dqe36doqn/image/upload/v1765864220/DND_M24_copy_hq3yo2.jpg"
const Image5 = "https://res.cloudinary.com/dqe36doqn/image/upload/v1765864223/DND_M26_copy_mo7duo.jpg"
const Image6 = "https://res.cloudinary.com/dqe36doqn/image/upload/v1765864222/DND_M23B_copy_2_yx0t3b.jpg"

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

    function paragraphsAnimation(yPercent: any, start: any, end: any, stagger: any) {
      gsap.utils.toArray(".Details2ParagraphContainer").forEach((container: any) => {
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


  useGSAP(() => {
    gsap.utils.toArray(".image-wrap").forEach((wrap: any) => {
      const mask = wrap.querySelector(".mask");

      gsap.set(mask, {
        opacity: 0,
        rotate: 90,
        scale: 0.8,
        transformOrigin: "50% 50%",
      });

      wrap.addEventListener("mouseenter", () => {
        gsap.to(mask, {
          opacity: 1,
          rotate: 0,
          scale: 2.2,
          duration: 0.6,
          ease: "power3.out",
        });
      });

      wrap.addEventListener("mouseleave", () => {
        gsap.from(mask, {
          opacity: 0,
          rotate: -90,
          scale: 2,
          // duration: 0.5,
          ease: "power3.in",
        });
      });
    });
  });



  return (
    <section id="team" className="w-screen  md:h-[1100px] z-5 overflow-hidden">
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
              <div className="image-wrap relative overflow-hidden group cursor-pointer">
                <img
                  src={Image3}
                  className="w-full h-[200px] md:h-[400px] object-cover"
                />

                {/* Mask */}
                <div className="mask absolute inset-0 pointer-events-none">
                  <Mask2 className="w-full h-full flex justify-center items-center fill-[#a6a2fe]" />
                </div>
              </div>
            </div>

            <div className="w-1/2 lg:w-1/4">
              <div className="image-wrap relative overflow-hidden group cursor-pointer">
                <img
                  src={Image4}
                  className="w-full h-[200px] md:h-[400px] object-cover"
                />

                {/* Mask */}
                <div className="mask absolute inset-0 pointer-events-none">
                  <Mask1 className="w-full h-full flex justify-center items-center fill-[#ff6d3a]" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-end gap-5">
            <div className="w-1/2 lg:w-[47%]">
              
              <div className="image-wrap relative overflow-hidden group cursor-pointer">
                <img
                  src={Image5}
                  className="w-full h-[200px] md:h-[400px] object-cover"
                />

                {/* Mask */}
                <div className="mask absolute inset-0 pointer-events-none">
                  <Mask2 className="w-full h-full flex justify-center items-center fill-[#eeff7c]" />
                </div>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/4">
              <div className="image-wrap relative overflow-hidden group cursor-pointer">
                <img
                  src={Image6}
                  className="w-full h-[200px] md:h-[400px] object-cover"
                />

                {/* Mask */}
                <div className="mask absolute inset-0 pointer-events-none">
                  <Mask3 className="w-full h-full flex justify-center items-center fill-[#9e8d16]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Details2;
