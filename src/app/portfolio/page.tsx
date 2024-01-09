import Image from "next/image";
import Link from "next/link";
import data from "@app/database/portfolio";
import PageTransition from "@app/components/pageTrans/PageTransistion";
import { Metadata } from "next";
import ScrollingIcons from "@app/components/scrollableTechs/ScrollingIcons";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects lists",
};

const Portfolio = () => {
  return (
    <PageTransition className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Have a look on my Apps...</h1>
      <ScrollingIcons />
      {/* <h1 className="text-4xl font-bold">Gallery</h1> */}
      <div className="flex flex-row gap-10 mt-10 flex-wrap justify-center">
        {data.map(({ href, title, image, alt }, idx: number) => {
          return (
            <>
              <div className="flex flex-col gap-2 flex-wrap justify-center">
                <Link
                  key={idx}
                  href={href}
                  style={{
                    width: "240px",
                    height: "420px",
                  }}
                  className="hover:text-orange-600 rounded-lg relative"
                >
                  <Image src={image}
                    fill={true}
                    alt={alt}
                    className="bg-cover object-contain"
                  />
                </Link>
                <Link
                  key={idx}
                  href={href}
                  style={{
                    width: "240px",
                    height: "40px",
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className="hover:text-orange-600 rounded-lg relative"
                >
                  {/* <span className="text-center text-2xl">
                    {title}
                  </span> */}
                  <p key={idx} className="text-center text-3xl">{title}</p>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </PageTransition>
  );
};

export default Portfolio;
