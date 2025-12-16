import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


const Video2 = "https://res.cloudinary.com/dqe36doqn/video/upload/v1765864098/DND_Train_V02_db88yw.mp4"

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText)

const Agenda = () => {

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
          agendaTextAnimation(120, "top 85%", "80% 30%", 0.12);
        },

        // 📲 Tablet
        "(min-width: 768px) and (max-width: 1023px)": () => {
          agendaTextAnimation(100, "top 90%", "80% 40%", 0.1);
        },

        // 📱 Mobile
        "(max-width: 767px)": () => {
          agendaTextAnimation(70, "top 95%", "top 65%", 0.08);
        }

      });

      ScrollTrigger.refresh();
    });

    /* ---------- Helper ---------- */
    function agendaTextAnimation(yPercent: any, start: any, end: any, stagger: any) {
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
    gsap.fromTo(
      ".agenda-video",
      {
        scale: 1,
      },
      {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".agenda-video",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  });



  return (
    <section id="agenda" className="w-screen h-auto bg-[#a6a2fe] overflow-hidden">
      <div dir="rtl" className="mt-5 pt-5">
        <div className="mx-[2%] w-full flex flex-row justify-between text-[#f1f1f1]">

          <div className="md:1/2 lg:w-1/3 Details2ParagraphContainer">
            <h1 className="Details2Paragraph font-[Guesswhat] text-[40px] lg:text-[90px]">الأجنــدة</h1>
          </div>

          <div className="w-1/3 Details2ParagraphContainer">
            <h1 className="Details2Paragraph font-[Guesswhat] text-[40px] md:text-[90px]">٢٠٢٥</h1>
          </div>

          <div className="w-1/3 Details2ParagraphContainer hidden lg:block">
            <p className="Details2Paragraph font-[TraditionalArabic] text-[28px]">أجندةٌ ثقافية تحتفي بالموروث، وتفتح آفاق المستقبل، حيث يلتقي الأصالة بالابتكار، وتُروى قصص الماضي بلغة الحاضر، لتصاغ ملامح الغد.</p>
          </div>
        </div>
        <div className="w-full Details2ParagraphContainer block lg:hidden text-[#f1f1f1]">
          <p className="Details2Paragraph font-[TraditionalArabic] text-[14px] md:text-[28px]">أجندةٌ ثقافية تحتفي بالموروث، وتفتح آفاق المستقبل، حيث يلتقي الأصالة بالابتكار، وتُروى قصص الماضي بلغة الحاضر، لتصاغ ملامح الغد.</p>
        </div>

        <div className="text-[#f1f1f1] mt-[5%] mx-[2%]">
          <div className="w-full flex flex-row">
            <div className="w-[30%] md:w-1/3 flex items-end">
              <h1 className="font-[TraditionalArabicBold] text-[30px] md:text-[50px] lg:text-[60px]">٢٢ - ١٠</h1>
            </div>
            <div className="font-[TraditionalArabic] w-[70%] md:w-2/3 flex flex-col text-[15px] md:text-[25px] lg:text-[30px]">
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[35%]">مقدمة </h4>
                <h4 className="w-[15%]">٤:٠٠</h4>
                <h4 className="w-[25%]">الرعاة</h4>
                <h4 className="w-[25%]">قاعةالشرق</h4>
              </div>
              <hr />
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[35%]">التعريف بالمعرض</h4>
                <h4 className="w-[15%]">٥:٠٠</h4>
                <h4 className="w-[25%]">فريق العمل</h4>
                <h4 className="w-[25%]">قاعةالشرق</h4>
              </div>
            </div>
          </div>

          <hr className="border" />

          <div className="w-full flex flex-row mt-[5%]">
            <div className="w-[30%] md:w-1/3 flex items-end">
              <h1 className="font-[TraditionalArabicBold] text-[30px] md:text-[50px] lg:text-[60px]">٢٣ - ١٠</h1>
            </div>
            <div className="font-[TraditionalArabic] w-[70%] md:w-2/3 flex flex-col text-[15px] md:text-[25px] lg:text-[30px]">
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[35%]">التراث والهوية العربية</h4>
                <h4 className="w-[15%]">٤:٠٠</h4>
                <h4 className="w-[25%]">متحدثون ثقافيون</h4>
                <h4 className="w-[25%]">قاعةالشرق</h4>
              </div>
              <hr />
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[35%]">الفنون التقليدية بين الماضي والحاضر</h4>
                <h4 className="w-[15%]">٥:٤٥</h4>
                <h4 className="w-[25%]">فنانون وباحثون</h4>
                <h4 className="w-[25%]">قاعةالشرق</h4>
              </div>
              <hr />
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[35%]">الحِرف التراثية</h4>
                <h4 className="w-[15%]">٦:٠٠</h4>
                <h4 className="w-[25%]">حِرفيون</h4>
                <h4 className="w-[25%]">منطقة العروض</h4>
              </div>
              <hr />
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[35%]">اللغة العربية كجسر ثقافي</h4>
                <h4 className="w-[15%]">٧:١٥</h4>
                <h4 className="w-[25%]">مختصون في اللغة</h4>
                <h4 className="w-[25%]">قاعةالشرق</h4>
              </div>
              <hr />
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[35%]">أمسية ثقافية فنية</h4>
                <h4 className="w-[15%]">٨:٠٠</h4>
                <h4 className="w-[25%]">فرق فنية</h4>
                <h4 className="w-[25%]">المسرح الرئيسي</h4>
              </div>
            </div>
          </div>

          <hr className="border" />

          <div className="w-full flex flex-row mt-[5%]">
            <div className="w-[30%] md:w-1/3 flex items-end">
              <h1 className="font-[TraditionalArabicBold] text-[30px] md:text-[50px] lg:text-[60px]">٢٤ - ١٠</h1>
            </div>
            <div className="font-[TraditionalArabic] w-[70%] md:w-2/3 flex flex-col text-[15px] md:text-[25px] lg:text-[30px]">
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[35%]">التراث العربي في العصر الرقمي</h4>
                <h4 className="w-[15%]">٤:٠٠</h4>
                <h4 className="w-[25%]">خبراء وإعلاميون</h4>
                <h4 className="w-[25%]">قاعة الشرق</h4>
              </div>
              <hr />
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[35%]">العمارة العربية والهوية البصرية</h4>
                <h4 className="w-[15%]">٥:٠٠</h4>
                <h4 className="w-[25%]">معماريون وباحثون</h4>
                <h4 className="w-[25%]">قاعة الشرق</h4>
              </div>
              <hr />
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[35%]">حكايات من الذاكرة العربية</h4>
                <h4 className="w-[15%]">٦:١٥</h4>
                <h4 className="w-[25%]">فريق الإخراج</h4>
                <h4 className="w-[25%]">قاعة العروض</h4>
              </div>
              <hr />
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[35%]">الإبداع العربي وصناعة المستقبل</h4>
                <h4 className="w-[15%]">٧:١٥</h4>
                <h4 className="w-[25%]">مبدعون ورواد ثقافة</h4>
                <h4 className="w-[25%]">قاعة الشرق</h4>
              </div>
              <hr />
              <div className="w-full flex flex-row justify-between">
                <h4 className="w-[35%]">الجلسة الختامية وتكريم المشاركين</h4>
                <h4 className="w-[15%]">٨:٠٠</h4>
                <h4 className="w-[25%]">إدارة المعرض</h4>
                <h4 className="w-[25%]">قاعة الشرق</h4>
              </div>
            </div>
          </div>

        </div>
        
        <video className="agenda-video w-screen bg-gray-400 h-[250px] md:h-[500px] lg:h-[750px] mt-[5%] object-cover" src={Video2} autoPlay loop muted playsInline />
      </div>
    </section>
  );
};

export default Agenda;
