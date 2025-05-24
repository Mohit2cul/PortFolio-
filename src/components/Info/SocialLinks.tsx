import React from "react";

export function SocialLinks() {
  return (
    <div className="py-4">
      <div className="flex space-x-3 md:space-x-7">
        {[
          {
            link: "https://github.com/Mohit2cul",
            name: "github",
          },
          {
            link: "https://www.linkedin.com/in/kshitij-varshney-34908a326/",
            name: "linkedin",
          },
          {
            link: "https://x.com/Var45678Kshitij",
            name: "x",
          },
          {
            link: "https://www.instagram.com/kshitij_v_/",
            name: "instagram",
          }
        ].map((social) => (
          <a
            key={social.link}
            target="_blank"
            className="group underline md:text-xl text-base font-semibold hover:text-indigo-500 text-indigo-50 transition-colors duration-300"
            rel="noreferrer"
            href={social.link}
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
}
