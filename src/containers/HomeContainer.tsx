import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import {
  CTA_TEXT,
  eduData,
  fisioData,
  GREETING_DESCRIPTION,
  GREETING_TEXT,
  HERO_IMAGE,
} from "../data/data";
import ProjectsDataContainer from "./ProjectsDataContainer";
import { cosmeatriaData, SECTIONS, labData } from "../data/data";

const HomeContainer: React.FC = () => {
  return (
    <div className="antialiased bg-primary-content text-primary">
      <Hero
        image={HERO_IMAGE}
        greetingText={GREETING_TEXT}
        greetingDescription={GREETING_DESCRIPTION}
        buttonText={CTA_TEXT}
      />
      <div className="px-12 divider" />

      <ProjectsDataContainer
        id={"estetica"}
        data={cosmeatriaData}
        header={SECTIONS[3]}
      />
      <div className="px-12 divider" />

      <ProjectsDataContainer
        id={"fisio"}
        data={fisioData}
        header={SECTIONS[4]}
      />
      <div className="px-12 divider" />

      <ProjectsDataContainer id={"lab"} data={labData} header={SECTIONS[5]} />
      <div className="px-12 divider" />

      <ProjectsDataContainer id={"acad"} data={eduData} header={SECTIONS[6]} />
      <div className="px-12 divider" />
      <Footer />
    </div>
  );
};

export default HomeContainer;
