import Button from "@app/components/button/Button";
import PageTransition from "@app/components/pageTrans/PageTransistion";
import Image from "next/image";
import HeroImage from "public/hero-image/user-interface.gif";

export default function Home() {
  return (
    <>
      <PageTransition className="flex flex-row items-center gap-28 sm:flex-col-reverse sm:gap-2">
        <div className="flex flex-col gap-12">
          <h1 className="text-5xl bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
            Better software for your dream bussiness.
          </h1>
          <p className="text-2xl">
            Turning your idea into reality. We bring together the teams from the global tech industry.
          </p>
          <Button
            style="bg-transparent hover:bg-orange-500 text-white hover:text-black p-2 border hover:border-transparent rounded w-max"
            text="See My Apps"
            url="/portfolio"
          />
        </div>
        <div className="flex flex-col">
          <Image
            className="object-cover"
            style={{ width: "1200px", height: "400px" }}
            src={HeroImage}
            alt="hero-image"
          />
        </div>
      </PageTransition>
    </>
  );
}
