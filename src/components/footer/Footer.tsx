import data from "@app/database/socialIcons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="h-14 flex flex-row items-center justify-between pt-20 sm:flex-col sm:p-6 sm:h-32 sm:m-6">
        <p className="sm sm:text-xs">@2024 All right reserved.</p>
        <div className="flex flex-row items-center justify-between w-44">
          {data.map(({ alt, href, image: icon }, idx: number) => {
            return (
              <Link key={idx} href={href} target="_blank">
                <Image key={idx} src={icon} alt={alt} width={30} height={30} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
