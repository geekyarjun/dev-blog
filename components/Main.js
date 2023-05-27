import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { marked } from "marked";
import hljs from "highlight.js";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
const myDp =
  "/geekyarjun.jpg" ||
  "/New Project.png" ||
  "/Arjun shrivastava - GeekyArjun-itsarjunshrivastava-geekyarjun.com.jpeg";

const markdown = `// Life
function main() {
  while (self.isAlive()) {
    self.consume(🍛, 🥛);
    self.develop();
    self.blog(new Blog());
    self.sleep(8);
  }
}

`;

const SocialMedia = () => {
  return (
    <>
      <div>
        <FaGithub size={"2em"} color="#333333" />
      </div>
      <div>
        <FaTwitter size={"2em"} color="#333333" />
      </div>
      <div>
        <FaLinkedin size={"2em"} color="#333333" />
      </div>
      <div>
        <FaYoutube size={"2em"} color="#333333" />
      </div>
    </>
  );
};

const Git = () => {
  return (
    <div
      className="rounded-2xl py-[20px] flex flex-col items-center bg-white gap-[20px]"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.035) 0px 0.60323px 0.60323px -1.25px, rgba(0, 0, 0, 0.03) 0px 2.29021px 2.29021px -2.5px, rgba(0, 0, 0, 0.01) 0px 10px 10px -3.75px, rgba(0, 0, 0, 0.07) 0px 0.60323px 0.60323px -1.25px, rgba(0, 0, 0, 0.063) 0px 2.29021px 2.29021px -2.5px, rgba(0, 0, 0, 0.024) 0px 10px 10px -3.75px",
      }}
    >
      <div className="w-[75px] h-[75px]">
        <Image
          src={myDp}
          width={75}
          height={75}
          alt={"BLOG.title"}
          className="rounded-full border-[3px] border-[#55ccff] animate-gitDpShow"
          // onError={() => setFavicon(true)}
        />
      </div>
      <div className="text-center">
        <p className="font-black text-3xl text-lightBlack">Arjun Shrivastava</p>
        <p className="font-semibold text-sm text-lightGray mt-2">
          Software Developer
        </p>
      </div>
      <div className="flex flex-1 w-full gap-[20px] justify-center mb-4">
        <SocialMedia />
      </div>
    </div>
  );
};

const Code = () => {
  // useEffect(() => {
  //   hljs.highlightAll();
  // });

  const codeRef = useRef();
  useEffect(() => {
    if (codeRef && codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, []);

  return (
    <div className="flex-1 tokyo-night-dark">
      <pre className="h-full">
        <code className={`language-typescript h-full`} ref={codeRef}>
          {markdown}
        </code>
      </pre>
      {/* <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div> */}
    </div>
  );
};

const PostChip = () => (
  <div
    className="bg-[#85f] rounded-md px-[10px] py-[5px]"
    style={{
      boxShadow:
        "rgba(0, 0, 0, 0.18) 0px 0.60323px 0.60323px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.29021px 2.29021px -2.5px, rgba(0, 0, 0, 0.063) 0px 10px 10px -3.75px",
    }}
  >
    <p className="text-sm font-bold text-white uppercase">Design</p>
  </div>
);

const Main = () => {
  return (
    <div className="flex flex-col gap-[60px] mt-[60px] min-[769px]:w-4/5 w-full mx-auto min-[769px]:max-w-[1200px] max-[768px]:px-8 px-0">
      <div className="grid grid-cols-2 grid-rows-1 gap-x-[30px] max-[768px]:grid-cols-1 max-[768px]:gap-y-[30px]">
        <Git />
        <Code />
      </div>
      <h1 className="text-6xl font-black text-center text-[#333333]">
        Dev Blog
      </h1>
      <div>
        <div className="post p-5 bg-white rounded-2xl gap-3 grid grid-cols-2 auto-rows-[fit-content(1em)]">
          <div className="flex-1 flex flex-col gap-[10px] items-start justify-center p-5 h-min">
            <PostChip />
            <h2 className="text-[28px] font-bold leading-10 text-[#333333]">
              How Can Designers Prepare For The Future?
            </h2>
            <p className="font-medium opacity-40 -tracking-[0.2px]">
              May 2, 2022
            </p>
          </div>
          <div className="rounded-2xl h-full min-h-min">
            <img
              src="https://framerusercontent.com/images/AuR49xw5lxYxriSpY6iZnz8ewV8.jpg?scale-down-to=4096"
              srcset="https://framerusercontent.com/images/AuR49xw5lxYxriSpY6iZnz8ewV8.jpg?scale-down-to=512 512w, https://framerusercontent.com/images/AuR49xw5lxYxriSpY6iZnz8ewV8.jpg?scale-down-to=1024 1024w, https://framerusercontent.com/images/AuR49xw5lxYxriSpY6iZnz8ewV8.jpg?scale-down-to=2048 2048w, https://framerusercontent.com/images/AuR49xw5lxYxriSpY6iZnz8ewV8.jpg?scale-down-to=4096 4096w, https://framerusercontent.com/images/AuR49xw5lxYxriSpY6iZnz8ewV8.jpg 5472w"
              alt="post image"
              sizes="calc((min(max(80vw, 200px), 1200px) - 40px) / 2)"
              style={{
                pointerEvents: "none",
                userSelect: "none",
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center center",
                objectFit: "cover",
                imageRendering: "auto",
              }}
            />
          </div>
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
};

export default Main;
