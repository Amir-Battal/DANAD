import { useGSAP } from "@gsap/react";
import CirclePattern from "./Circles/CirclePattern";
import DanadEin from "./Pattern1/DanadEin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CirclePatterns = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".PatternMove", // غيّرها حسب قسمك
        start: "-10% center",
        end: "60% center",
        scrub: true,
      }
    });
    // الوسط يتحرك حركة خفيفة (الدَفش)
    tl.fromTo(".pattern-center", {
      xPercent: -65,
      ease: "none"
    }, {
      xPercent: -75,
      ease: "none"
    }).fromTo(".pattern-center", {
      xPercent: -75,
      ease: "none"
    },{
      xPercent: -65,
      ease: "none"
    });

  });

  return (
    <section>
      <div className="w-full h-[120px] md:h-[300px] lg:h-[500px] flex flex-row jusbet">

        <div className="w-[25%] bg-[#eeff7c] overflow-hidden flex justify-center items-center">
          <div className="absolute w-full h-full flex items-center justify-center overflow-hidden ml-[50%] md:ml-[15%] lg:mr-[25%] z-99">
            <DanadEin className="size-[40%] md:size-[70%] lg:size-[150%]" />
          </div>
          <div className="PatternMove relative w-full h-full overflow-hidden">
            <div className="pattern pattern-center w-[210%] absolute inset-0 flex justify-center ml-[-120%]">
              <CirclePattern fillColor="#ff6d3a" />
            </div>
          </div>
        </div>

        <div className="w-[25%] bg-[#eeff7c] overflow-hidden flex justify-center items-center">
          <div className="absolute w-full h-full flex items-center justify-center overflow-hidden ml-[50%] md:ml-[15%] lg:mr-[25%] z-99">
            <DanadEin className="size-[40%] md:size-[70%] lg:size-[150%]" />
          </div>
          <div className="PatternMove relative w-full h-full overflow-hidden">
            <div className="pattern pattern-center w-[210%] absolute inset-0 flex justify-center ml-[-120%]">
              <CirclePattern fillColor="#9e8d16"  />
            </div>
          </div>
        </div>

        <div className="w-[25%] bg-[#eeff7c] overflow-hidden flex justify-center items-center">
          <div className="absolute w-full h-full flex items-center justify-center overflow-hidden ml-[50%] md:ml-[15%] lg:mr-[25%] z-99">
            <DanadEin className="size-[40%] md:size-[70%] lg:size-[150%]" />
          </div>
          <div className="PatternMove relative w-full h-full overflow-hidden">
            <div className="pattern pattern-center w-[210%] absolute inset-0 flex justify-center ml-[-120%]">
              <CirclePattern fillColor="#a6a2fe" />
            </div>
          </div>
        </div>

        <div className="w-[25%] bg-[#eeff7c] overflow-hidden flex justify-center items-center">
          <div className="absolute w-full h-full flex items-center justify-center overflow-hidden ml-[50%] md:ml-[15%] lg:mr-[25%] z-99">
            <DanadEin className="size-[40%] md:size-[70%] lg:size-[150%]"  />
          </div>
          <div className="PatternMove relative w-full h-full overflow-hidden">
            <div className="pattern pattern-center w-[210%] absolute inset-0 flex justify-center ml-[-120%]">
              <CirclePattern fillColor="#2b1609" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CirclePatterns;
