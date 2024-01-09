"use client";

// import Button from "@app/components/button/Button";
import PageTransition from "@app/components/pageTrans/PageTransistion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ConatactImage from "public/contact/choose-your-colors.gif";
import React, { useEffect, useRef, useState } from "react";
// import useSWR from "swr";

interface IContact {
  name: string;
  email: string;
  message: string;
}

/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  const router = useRouter();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState(false);

  const [contact, setContact] = useState<IContact>({ email: "", message: "", name: "" });

  let userData: IContact;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    let name = nameRef.current?.value || "";
    let email = emailRef.current?.value || "";
    let message = messageRef.current?.value || "";

    if (!name.length || !email.length || !message.length) {
      alert("Please fill the all fields properly!");
      return;
    }

    userData = {
      email,
      message,
      name,
    };

    // Reset the input values after submission
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";

    setContact(userData);

    alert("Your form is submitted");
  };

  useEffect(() => {
    if (contact.email.length) {
      try {
        setLoading(true);

        fetch(`/api/contact-me`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        }).then(async (res) => {
          if (res.ok) {
            setLoading(false);
            router.push("/");
          }
        });
      } catch (error) {
        console.error("Error sending post request:", error);
      }
    }
  }, [contact, router]);

  return (
    <PageTransition className="flex flex-col gap-8">
      {loading && <p>Loading .....</p>}
      {!loading && (
        <>
          <h1 className="text-5xl font-bold text-center">Let's Keep in touch</h1>

          <div className="flex flex-row justify-center align-middle gap-8">
            <div className="sm:hidden">
              <Image
                src={ConatactImage}
                style={{ width: "500px", height: "400px" }}
                alt="contact"
                className="object-cover"
              />
            </div>

            <form className="flex flex-col gap-4" style={{ width: "500px" }} onSubmit={submitHandler}>
              <input
                className="p-2 rounded-sm border-none outline-none text-black"
                type="text"
                placeholder="Your Name"
                name="name"
                ref={nameRef}
                required
              />
              <input
                className="p-2 rounded-sm border-none outline-none text-black"
                type="email"
                placeholder="Your Email"
                name="email"
                ref={emailRef}
                required
              />
              <textarea
                className="p-2 rounded-sm border-none outline-none text-black"
                cols={30}
                rows={8}
                placeholder="Your message"
                name="message"
                ref={messageRef}
                required
              ></textarea>
              <button
                className="bg-transparent hover:bg-orange-500 text-white hover:text-black p-2 border hover:border-transparent rounded w-max"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </PageTransition>
  );
};

export default Contact;
