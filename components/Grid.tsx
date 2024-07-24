import { gridItems, techstacklogos } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { LampDemo } from "./ui/Lamp";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { spectral } from "@/utils/fonts";

const Grid = () => {
  return (
    <section id="about">
      <LampDemo/>
      <BentoGrid className="w-full pb-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      <div className="h-[15rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className=" rounded-md flex z-20 flex-col antialiased items-center justify-center relative overflow-hidden">
      <p className={`text-2xl font-bold opacity-90 ${spectral} text-shadow text-shadow-white text-shadow-x-1 text-shadow-y-1 text-shadow-blur-5`}>
        My Tech Stack
      </p>
      <InfiniteMovingCards
        items={techstacklogos}
        direction="right"
        speed="normal"
      />
    </div>
    </div>
    </section>
  );
};

export default Grid;