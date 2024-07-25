import { Cinema } from "@/components/ui/Cinemacards";
import { cinemaposters } from "@/data";

const page = () => {
  return (
    <div className=" flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <Cinema
        items={cinemaposters}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default page;

