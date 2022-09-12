import React from "react";
import Typewriter from "typewriter-effect";

const HeroTypewriter = () => {
  const phrases = [
    "is a Web Developer \n",
    "does Full Stack \n",
    "does Next.js\n",
    "believes in you \n",
    "does React",
    "needs some coffee",
    "is colorblind",
    "does Node.js",
    "loves cookies",
    "does Wordpress",
  ];
  return (
    <div className="max-w-xs rowdies text-3xl h-10 mb-16 lg:text-5xl lg:max-w-lg">
      <Typewriter
        className="max-w-sm"
        options={{
          strings: phrases,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default HeroTypewriter;
