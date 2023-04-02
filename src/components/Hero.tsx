import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as HeroIllustration } from "../assets/hero.svg";
import { ReactComponent as Illustration } from "../assets/hero_illustration.svg";
import { HeroProps } from "../types/types";
import logoJB from "../assets/logo.png";
import { HERO_IMAGE } from "../data/data";

const Hero: React.FC<HeroProps> = ({
  greetingText,
  greetingDescription,
  buttonText,
}) => {
  return (
    <div
      className="relative min-h-screen pt-0 mt-0 antialiased hero bg-gradient-to-br from-primary to-secondary text-primary-content"
      id="home"
    >
      <div className="fill-current custom-shape-divider-bottom-1628871186">
        <HeroIllustration />
      </div>

      <div className="text-justify hero-content text-neutral-content div_overview">
        <div
          style={{
            backgroundColor: "black",
            borderRadius: "50%",
            aspectRatio: "1",
            width: "200px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img src={logoJB} alt="logoJB" />
        </div>
        <div className="rounded-full" style={{ width: "200px" }}>
          <img src={HERO_IMAGE} className="rounded-full" />
        </div>
        {/* <Illustration
          className="hidden fill-current lg:flex "
          style={{ width: "450px" }}
        /> */}
        <div className="max-w-md ml-10">
          <motion.div
            animate={{ scale: [0.5, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-5 text-5xl font-bold text-left overviewtitle">
              {greetingText}
            </h1>
            <p className="mb-5 overviewdes">{greetingDescription}</p>
            <Link
              to={"estetica"}
              spy={true}
              smooth={true}
              duration={500}
              className="transition rounded-full cursor-pointer btn btn-primary"
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
