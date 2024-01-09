"use client";
/* eslint-disable react/no-unescaped-entities */
import Button from "@app/components/button/Button";
import PageTransition from "@app/components/pageTrans/PageTransistion";
import Image from "next/image";

const About = () => {
  return (
    <PageTransition className="">
      <div className="w-full h-80 relative">
        <Image
          src={require('../../../public/hero-image/aboutbg.jpg')}
          fill={true}
          alt="about"
          className="object-cover"
        />
        <div className="absolute bottom-5 left-5 bg-orange-500 p-2 text-white">
          <h1 className="text-2xl font-bold">Transforming Ideas into Reality</h1>
          <h3>Turning Dreams into Fully Functional Applications</h3>
        </div>
      </div>
      <div className="flex flex-row h-auto text-justify gap-10">
        <div className="flex flex-col justify-start p-4 gap-4">
          <h1 className="text-2xl font-bold">Who Am I?</h1>
          <p>
            Greetings! I am a seasoned Software Developer with around four years of hands-on experience specializing in building robust and scalable applications. My expertise lies in crafting seamless user experiences using cutting-edge technologies, with a focus on React Native, React.js, and Next.js.
            I am passionate about staying at the forefront of technological advancements. I actively contribute to the developer community, share my insights through blog posts, and continuously explore new tools and frameworks to enhance my skill set.
            <br />
            <br />
            I excel in creating cross-platform mobile applications using React Native. My proficiency extends from designing intuitive user interfaces to implementing complex functionality, ensuring optimal performance on both iOS and Android platforms.
            <br />
            <br />
            With a deep understanding of React.js, I have developed interactive and dynamic web applications. I leverage the power of React to build modular components, enhance performance, and create engaging user interfaces.
            <br />
            <br />
            I have a strong command of Next.js, utilizing it to develop server-side rendered and statically generated web applications. This enables me to deliver high-performance websites with improved SEO and a seamless user experience.
            <br />
            <br />
            Throughout my journey as a software developer, my passion for problem-solving and dedication to
            delivering exceptional solutions have remained constant. I approach challenges with a positive
            mindset, seeing them as opportunities to grow and innovate. My communication skills make me an
            invaluable team player, as I collaborate effectively with various stakeholders to ensure project
            success.
            <br />
            <br />
            With my skills, expertise, and forward-looking mindset, I see myself as a driving force in the tech
            industry. My impactful solutions leave a lasting impression on users worldwide, and my continuous
            pursuit of innovation keeps me at the forefront of the ever-evolving world of software development. I
            am committed to making a difference through my work, pushing the boundaries of what's possible, and
            contributing to the future of technology.
            <br />
            <br />
            Let's Collaborate:
            If you are looking for a dedicated and innovative Software Developer with a proven track record in React Native, React.js, and Next.js, I am eager to discuss how I can contribute to your projects. Let's connect and explore the possibilities!
          </p>
          <Button
            style="bg-transparent hover:bg-orange-500 text-white hover:text-black p-2 border hover:border-transparent rounded w-max"
            text="Contact"
            url="/contact"
          />
        </div>

        {/* <div className="flex flex-col justify-start p-4 gap-4">
          <h1 className="text-2xl font-bold">What we do?</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div> */}
      </div>
    </PageTransition>
  );
};

export default About;
