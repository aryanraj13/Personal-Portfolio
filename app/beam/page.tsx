import { FaLocationArrow } from "react-icons/fa6";
import { BackgroundBeams } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import { FlipWords } from "@/components/ui/Flip-Words";
import { socialMedia } from "@/data";
import Link from "next/link";
import Image from "next/image";

const page = () => {

  return (
    <>
    <div className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl mt-32">
            Hi! I&apos;m <FlipWords className="text-9xl italic" duration={1200} words={["Aryan","आरयन"]} /> <br/><span className="text-sm "> a Next.js Developer based in India.</span>
          </div>
      <div className="flex justify-around mt-20">
        {/* Designer Section */}
        <div className="text-left">
          <div className="ml-9 font-semibold text-[40px] md:text-5xl lg:text-5xl">
            designer
          </div>
          <p className="text-center tracking-wider text-sm md:text-lg lg:text-base mt-4 pr-56">
            UI/UX Designer with a passion for <br /> designing beautiful and functional <br /> user experiences. Minimalist who <br /> believes that less is more.
          </p>
        </div>
        
        {/* Coder Section */}
        <div className="text-right">
          <div className="mr-11 font-semibold text-[40px] md:text-5xl lg:text-5xl">
            &lt;coder&gt;
          </div>
          <p className="text-center tracking-wider text-sm md:text-lg lg:text-base mt-4">
            Front End Developer who focuses <br /> on writing clean, elegant and <br /> efficient code. Love HTML, CSS, <br /> WordPress and a touch of jQuery.
          </p>
        </div>
      </div>
      
      <div className='pt-9 justify-center flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-black-300 z-10'>
                      <Link href={profile.src}> 
                        <Image src={profile.img} alt={profile.img}
                        width={20} height={20} />
                        </Link>
                        </div>
                ))}
            </div>

      <div className="text-center z-10">
      <a href="#about">
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
      </div>

      <BackgroundBeams />
    </>
  );
};

export default page;
