import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import Mask2 from "./Masks/Mask2";
import Mask1 from "./Masks/Mask1";
import Mask3 from "./Masks/Mask3";

const Image10 = "https://ik.imagekit.io/j9omozvmgf/DND%20M30.jpg"
const Image11 = "https://ik.imagekit.io/j9omozvmgf/DND%20M32.jpg"
const Image12 = "https://ik.imagekit.io/j9omozvmgf/DND%20M36.jpg"
const Image13 = "https://ik.imagekit.io/j9omozvmgf/DND%20M41.jpg"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

const Details4 = () => {


  // useGSAP(() => {
  //   gsap.set(".Details4Paragraph", {opacity: 1});

  //   document.fonts.ready.then(() => {
  //     let containers = gsap.utils.toArray(".Details4ParagraphContainer");

  //     containers.forEach((container : any) => {
  //       let text = container.querySelector(".Details4Paragraph");

  //       SplitText.create(text, {
  //         type: "words, lines",
  //         mask: "lines",
  //         linesClass: "line",
  //         autoSplit: true,
  //         onSplit: (instance) => {
  //           return gsap.from(instance.lines, {
  //             yPercent: 120,
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
    document.fonts.ready.then(() => {

      ScrollTrigger.matchMedia({

        // 💻 Desktop
        "(min-width: 1024px)": () => {
          paragraphAnim(120, "top 85%", "80% 30%");
        },

        // 📲 Tablet
        "(min-width: 768px) and (max-width: 1023px)": () => {
          paragraphAnim(100, "top 90%", "75% 45%");
        },

        // 📱 Mobile
        "(max-width: 767px)": () => {
          paragraphAnim(70, "top 95%", "top 65%");
        }

      });

      ScrollTrigger.refresh();
    });

    function paragraphAnim(yPercent: any, start: any, end: any) {
      gsap.set(".Details4Paragraph", { opacity: 1 });

      gsap.utils.toArray(".Details4ParagraphContainer").forEach((container: any) => {
        const text = container.querySelector(".Details4Paragraph");
        if (!text) return;

        SplitText.create(text, {
          type: "words,lines",
          mask: "lines",
          linesClass: "line",
          autoSplit: true,
          onSplit: (instance) => {
            gsap.from(instance.lines, {
              yPercent,
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
    <section className="w-full h-[850px] md:h-[1550px] lg:h-[1500px] overflow-hidden">
      <div dir="rtl" className="mt-5 mx-[2%]">
        <div className=" w-full h-auto flex flex-row justify-between text-[#2b1609]">

          <div className="w-1/2 lg:w-1/3 Details4ParagraphContainer">
            <h1 className="Details4Paragraph font-[Guesswhat] text-[35px] md:text-[70px] lg:text-[90px]">لِ تجربة متكاملة</h1>
          </div>

          <div className="w-1/2 lg:w-1/3 Details4ParagraphContainer flex justify-center">
            <h1 className="Details4Paragraph font-[Guesswhat] text-[35px] md:text-[70px] lg:text-[90px]">٢٠٢٥</h1>
          </div>

          <div className="w-1/3 Details4ParagraphContainer hidden lg:block">
            <p className="Details4Paragraph font-[TraditionalArabic] text-[28px]">نوفّر مساحة جامعة للتلاقي والتواصل، تجمع المصممين، وروّاد الأعمال، والمبدعين، والمؤسسات الثقافية والإبداعية، بهدف بناء شراكات جديدة، وتبادل الخبرات، وتعزيز حضور الإبداع العربي وتوسيع آفاقه خارج الحدود.</p>
          </div>
        </div>
        <div className="w-full Details4ParagraphContainer block lg:hidden">
          <p className="Details4Paragraph font-[TraditionalArabic] text-[14px] md:text-[28px]">نوفّر مساحة جامعة للتلاقي والتواصل، تجمع المصممين، وروّاد الأعمال، والمبدعين، والمؤسسات الثقافية والإبداعية، بهدف بناء شراكات جديدة، وتبادل الخبرات، وتعزيز حضور الإبداع العربي وتوسيع آفاقه خارج الحدود.</p>
        </div>

        <div className="w-full flex flex-row mt-[5%] text-[#2b1609]">
            <div className="w-[30%] md:w-1/3  flex items-end">
              <h1 className="font-[TraditionalArabicBold] text-[30px] md:text-[50px] lg:text-[60px]">الباقات</h1>
            </div>
            <div className="font-[TraditionalArabic] w-[70%] md:w-2/3 flex flex-col text-[15px] md:text-[25px] lg:text-[30px]">
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[10%]">الباقة الأولى</h4>
                <h4 className="w-[30%]">ورش عمل + الأمسية الختامية</h4>
                <h4 className="w-[60%]">إمكانية حضور ورشتي عمل مختلفتين، بالإضافة إلى الدخول إلى الأمسية الختامية الفنية.</h4>
              </div>
              <hr className="border border-black"/>
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[10%]">الباقة الثانية</h4>
                <h4 className="w-[30%]">ورشة عمل + ندوة رقمية + الأمسية الختامية</h4>
                <h4 className="w-[60%]">حضور ورشة عمل حضورية واحدة، مع ندوة رقمية عبر الإنترنت، بالإضافة إلى الأمسية الختامية.</h4>
              </div>
              <hr className="border border-black"/>
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[10%]">الباقة الثالثة</h4>
                <h4 className="w-[30%]">ورشة عمل + حقيبة تذكارية</h4>
                <h4 className="w-[60%]">التسجيل في ورشة عمل واحدة، مع الحصول على حقيبة قماشية (Tote Bag) ومجموعة هدايا تذكارية حصرية تحمل هوية المعرض.</h4>
              </div>
            </div>
          </div>
          <hr className="border border-black" />

          <div className="w-full mt-[5%] flex flex-col gap-5">

          <div className="w-full flex flex-row gap-5">
            <div className="w-1/2 lg:w-1/4">
              <div className="image-wrap relative overflow-hidden group cursor-pointer">
                <img
                  src={Image10}
                  className="Details1Media w-full h-[200px] md:h-[400px] object-cover"
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
                  src={Image11}
                  className="Details1Media w-full h-[200px] md:h-[400px] object-cover"
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
                  src={Image13}
                  className="Details1Media w-full h-[200px] md:h-[400px] object-cover"
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
                  src={Image12}
                  className="Details1Media w-full h-[200px] md:h-[400px] object-cover"
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

export default Details4;
