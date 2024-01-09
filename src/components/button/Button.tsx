"use client";

import Link from "next/link";

const Button = ({ text, url, style }: { text: string; url?: string; style: string }) => {
  if (!url) {
    url = "/contact";
  }

  return (
    <Link href={url}>
      <button type="submit" className={style}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
