import Image from "../assets/social.jpg";
import gvcImage from "../assets/gvconboarding.png";
import guukImage  from "../assets/guuk.png";
import pammImage  from "../assets/pamm.png";
import smartmeImg from "../assets/smartme.png";
import espeImg from "../assets/mct.jpg";
import myappImg from "../assets/myapp.png";
import eda from "../assets/eda.jpg";
import loan from "../assets/loan.jpeg";
import customerpred from "../assets/customerpred.jpg";
import {
  ImageType,
  MenuProps,
  ProjectCardProps,
  SkillsProps,
  TimelineProps,
} from "../types/types";
export const URL = "https://awesome-portfolio.piyushmehta.com";
export const NAME = "John Barcia - Developer & Data";

export const SECTIONS = ["Home", "Experience","Skills", "Web Development Projects","Data Analytics Projects"];
export const HERO_IMAGE = "https://picsum.photos/id/1005/1600/1400";
export const CTA_TEXT = "Know More";
export const MENU: MenuProps[] = [
  { key: 1, route: "home", name: SECTIONS[0] },
  { key: 2, route: "experience", name: SECTIONS[1] },
  { key: 3, route: "Web development projects", name: SECTIONS[2] },
  { key: 3, route: "Data analytics projects", name: SECTIONS[3] },
  { key: 4, route: "skills", name: SECTIONS[4] },
  { key: 5, route: "Education", name: SECTIONS[5] },
];

export const GREETING_TEXT = "Software Developer & Data Scientist based in Quito, Ecuador";
export const GREETING_DESCRIPTION =
   "I'm sSR advanced Front end developer with expertise in React JS/TS  and React Native with  3+ years of experience."+
   "I've worked succesfully with multidisciplinary teams under SCRUM methodolgy in several web and mobile projects."+
   "I have studied an Applied Data Science program on the MIT Professional education because data and its processing is essential for decision-making in any business and it is a plus for a developer."+
   "And I'm learning every day, working hard to improve my hard and soft skills"

export const EXPERIENCE: TimelineProps[] = [
  {
    key: 1,
    company: "Telandweb",
    position: "Software developer - entry level",
    logo: "http://www.telandweb.net/images/cssimg/logoGreen2.gif",
    start: "2020-02-01",
    end: "2020-11-01",
    description: "- I worked on mobile applications (Extraredes), Servinarium, Confesiones, informative football apps, with flutter,node js,mysql and on landing pages using wordpress",
  },
  {
    key: 2,
    company: "Initiumsoft - Stratus Quito",
    position: "Jr Web Developer",
    logo: "https://initiumsoft.com/var/site/storage/images/9/1/2/0/219-20-esl-ES/Initium%20Logo_150.png",
    start: "2020-11-01",
    end: "now",
    description: "I worked on several projects, withs frameworks as symphony, angular, and react, mainly as frontend developer",
  },
  {
    key: 3,
    company: "Taimec",
    position: "Proyects Engineer",
    logo: "https://static.wixstatic.com/media/387423_8710cb69f94942ac9533a3a9e110b7de~mv2.png/v1/fill/w_284,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Isologo%20Taimec.png",
    start: "2021-10-01",
    end: "2022-02-25",
    description: "I worked on some mechatronics projects, including data science, using python ",
  },
  {
    key: 4,
    company: "Personal",
    position: "Personal projects",
    logo: "https://miro.medium.com/max/300/1*aGnLvSUPsxgvvai8lxbpBA.jpeg",
    start: "",
    end: "",
    description: "Developing full stack App with react and python, and business administration app",
  },
];
export const KEYWORDS = [
  "Developer",
  "Data Science",
  "Data Analytics",
  "front end developer based in Ecuador",
  "John Barcia",
  "E Portfolio",
];
export const IMAGE: ImageType = {
  src: Image,
  height: "600",
  width: "314",
};

export const projects: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "Servinarium",
    projectDescription:
      "Servinarium is a tool for companies that provide services, aimed at monitoring day-to-day operations in order to keep control in an orderly, fast and secure manner. I developed the front and back with a partner.",
    projectImageLogo: `https://www.servinarium.com/wp-content/uploads/2021/12/control-de-talleres-servinarium.png`,
    link: "https://www.servinarium.com/",
    buttonText: "View Project",
    tech: ["Javascript","React Native", "TailwindCSS", "SCSS", "NodeJs","MySQL"],
  },
  {
    id: 2,
    projectName: "GVC Onboarding",
    projectDescription:
      "Online onboarding webpage serving GVC GAESCO España with dynamics forms and validations, microservices, angular material, pdf generation. I Developed and implemented an onboarding page for a new user registration process, including fields for personal information and account setup, data validation and error handling.",
    projectImageLogo: gvcImage,
    link: "https://onboarding.gvcgaesco.es/?hs_step=bienvenida/es",
    buttonText: "View Project",
    tech: ["Typescript", "Angular","SCSS","AWS"],
  },
  {
    id: 3,
    projectName: "Guuk FrontOffice/BackOffice",
    projectDescription:
      "A complete onboarding and  dashboard built for the branch Offices and vendors from Guuk(España) to generate orders and contracts for new and older clients. I developed developed a full-featured software solution that included both an attractive user interface for the front-office and an administrative task management system for the back-office.",
    projectImageLogo: guukImage,
    link: "https://guuk.initiumsoft.com/web/",
    buttonText: "View Project",
    tech: ["Typescript", "React/ReactNative","SCSS", "MaterialUI","NodeJs","MySQL","AWS"],
  },
  {
    id: 4,
    projectName: "SmartmeAnalytics Dashboard",
    projectDescription:
      "A complete Comprehensive dashboard built for the administrators of Smartme App. Used to track their growth, their reach, and trends in their products and services, I worked in front and back, in a team of 3 developers.",
    projectImageLogo: smartmeImg,
    link: "http://pre.admin.smartmeapp.com/login",
    buttonText: "View Project",
    tech: ["Javascript" ,"React","SCSS","MYSQL", "AWS"],
  },
  {
    id: 5,
    projectName: "Health care portal Mercantil-PAMM",
    projectDescription:
      "I Developed and implemented a medical services platform for providers, patients, doctors, a user-friendly interface for scheduling medical appointments, accessing patient medical history.",
    projectImageLogo: pammImage,
    link: "https://www.mercantilseguros.com/index.html",
    buttonText: "View Project",
    tech: ["Typescript","React", "SCSS", "Material UI","NodeJs","MYSQL"],
  },
  {
    id: 6,
    projectName: "MyBusisnessApp (onGoing)",
    projectDescription:
      "A complete Comprehensive dashboard built for the influencers. Used to track their growth and reach.",
    projectImageLogo: myappImg,
    link: "",
    buttonText: "View Project",
    tech: ["ReactcNative", "FastAPI","MongoDB"],
  },
];

export const projectsData: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "Bank Loan Default Prediction",
    projectDescription:
      "The project focuses in identify defaulters to reduce losses allowing Bad customers to get loans, it this a classfication problem with labeled data",
    projectImageLogo: loan,
    link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: ["Logistic Regression", "Decision Trees", "Random Forest","Hyperparameter Tuning"],
  },
  {
    id: 2,
    projectName: "Predicting the conversion of leads to customer",
    projectDescription:
      "This project involves identifying which leads are more likely to convert to paid customers based on attributes of leads and their interaction details",
    projectImageLogo: customerpred,
    link: "https://jebarcia77.github.io/Potential-Customers-Prediction/",
    buttonText: "View Project",
    tech: ["Decision Trees", "Random Forest","Python","EDA"],
  },
  {
    id: 3,
    projectName: "Analyzing marketing campaigns to help the CMO devise the next best marketing strategy.",
    projectDescription:
      "This project aims to analyze marketing campaign and sales data to address important business questions related to customer demographics, product preferences, channel performances, etc",
    projectImageLogo: eda,
    link: "https://jebarcia77.github.io/Marketing-Campaign-Analysis/",
    buttonText: "View Project",
    tech: ["Python", "Data analysis & Visualization"],
  },
];

/**
 *  @type {SkillsProps}
 * skills
 * Kept level as random but you can hard code it if you want
 */
export const skills: SkillsProps[] = [
  {
    id: 1,
    skill: "Javascript",
    level: Math.floor(0.80 * 100) + 1,
  },
  {
    id: 2,
    skill: "Python",
    level: Math.floor(0.70 * 100) + 1,
  },
  {
    id: 3,
    skill: "HTML/CSS",
    level: Math.floor(0.90 * 100) + 1,
  },
  {
    id: 4,
    skill: "React",
    level: Math.floor(0.70 * 100) + 1,
  },
  {
    id: 5,
    skill: "Symphony",
    level: Math.floor(0.50 * 100) + 1,
  },
  {
    id: 6,
    skill: "Angular",
    level: Math.floor(0.70 * 100) + 1,
  },
  {
    id: 7,
    skill: "Flutter",
    level: Math.floor(0.55 * 100) + 1,
  },
  {
    id: 8,
    skill: "Node js - Express",
    level: Math.floor(0.60 * 100) + 1,
  },
  {
    id: 9,
    skill: "FastApi",
    level: Math.floor(0.75 * 100) + 1,
  },
  {
    id: 10,
    skill: "PHP",
    level: Math.floor(0.50 * 100) + 1,
  },
  {
    id: 11,
    skill: "MYSQL",
    level: Math.floor(0.70 * 100) + 1,
  },
  {
    id: 12,
    skill: "MongoDB",
    level: Math.floor(0.70 * 100) + 1,
  },
];


export const education: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "ESPE- INGENIERIA MECATRONICA",
    projectDescription:"Mechatronics engineering studies the synergic integration of knowledge of mechanical engineering, electronics and control, to create, design, implement and operate machines and equipment in order to technify the production processes of the industrial sector, business and society's requirements, increasing the added value.",
    projectImageLogo: espeImg,
    link: "https://mecatronica.espe.edu.ec/#",
    buttonText: "View Information",
    tech: [],
  },
  {
    id: 2,
    projectName: "Applied Data Science",
    projectDescription:
      "Data Analysis & Visualization, Data exploration, Networks, Clustering, Machine Learning , Regression, Classification, Logistics & kNN, Practical Data Science, Decision Trees & Random Forest, Time Series, Deeplearning – Neural Networks, CNN, GNN, Recommendation Systems",
    projectImageLogo: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/57173128",
    link: "https://www.credential.net/da0b7af3-44d1-462f-aaaf-e37e146b9c70#gs.fz130v",
    buttonText: "View Certification",
    tech: [],
  },
];