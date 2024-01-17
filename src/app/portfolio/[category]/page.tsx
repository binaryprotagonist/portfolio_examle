"use client";

import PageTransition from "@app/components/pageTrans/PageTransistion";
import { cleanAndCapitalize } from "@app/utils/cleanAndCapitalize";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { VercelRequest, VercelResponse } from '@vercel/node';

import {
  SiRedux,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiSequelize,
  SiAmazonaws,
  SiPostman,
  SiSpotify,
  SiNpm,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiNginx,
  SiInsomnia,
  SiLaravel,
  SiPhp,
  SiGraphql,
  SiApollographql,
  SiGoogleanalytics,
} from "react-icons/si";
import { CiTimer } from "react-icons/ci";
import { IconType } from "react-icons";

const icons: { [key: string]: React.ElementType } = {
  SiRedux,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiSequelize,
  SiAmazonaws,
  SiPostman,
  SiSpotify,
  SiNpm,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiNginx,
  SiInsomnia,
  SiLaravel,
  SiPhp,
  SiGraphql,
  SiApollographql,
  CiTimer,
  SiGoogleanalytics,
};

interface PData {
  id: string;
  title: string;
  description: string;
  // techstack: any;
  techstack: React.ElementType<IconType>[] | string[];
  role: string;
  responsibilities: string[];
  url: string;
}

const Category = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  // request: VercelRequest,
  // response: VercelResponse,
  const [portfolioData, setPortfolioData] = useState<PData[]>([]);

  useEffect(() => {
    fetch("/api/portfolios")
      .then(async (res) => {
        const { data } = await res.json();
        setPortfolioData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);





  const manipulatedCategoryName = cleanAndCapitalize(category);
  // const manipulatedCategoryName = category;
  console.log(manipulatedCategoryName, 'manipulatedCategoryName')

  const dataFound = portfolioData?.filter(({ title }) => title.toLowerCase().includes(category.toLowerCase()));

  const url = dataFound[0]?.url || "";
  return (
    <PageTransition className="flex flex-col gap-6">
      <h1 className="text-6xl font-bold">{manipulatedCategoryName}</h1>

      <Link className="text-orange-400 text-2xl" href={url} target="_blank">
        Live App
      </Link>
      <section className="flex flex-col gap-7 flex-wrap justify-center">
        {dataFound?.map(({ techstack, description, responsibilities, role, id }) => (
          <main className="flex flex-col gap-7 flex-wrap justify-center" key={id}>
            <h1 className="text-xl text-center">{role}</h1>
            <ul className="flex flex-row gap-6 justify-center text-orange-400" key={id}>
              {techstack.map((icon, idx: number) => {
                const IconComponent = icons[icon as string];
                return (
                  <li key={idx}>
                    <IconComponent className="sm:w-10/12" size={40} />
                  </li>
                );
              })}
            </ul>
            <p className="text-justify whitespace-normal">{description}</p>
            <ul key={id} className="list-disc">
              {responsibilities.map((val, idx: number) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </main>
        ))}
      </section>
    </PageTransition>
  );
};

export default Category;
