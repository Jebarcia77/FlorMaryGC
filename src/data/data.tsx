import Image from "../assets/social.jpg";
import gvcImage from "../assets/gvconboarding.png";
import guukImage from "../assets/guuk.png";
import pammImage from "../assets/pamm.png";
import smartmeImg from "../assets/smartme.png";
import espeImg from "../assets/mct.jpg";
import myappImg from "../assets/myapp.png";
import eda from "../assets/eda.jpg";
import loan from "../assets/loan.jpeg";
import customerpred from "../assets/customerpred.jpg";

import profilePhoto from "../assets/profilePhoto.jpeg";

import cos1 from "../assets/cos8.jpeg";
import cos2 from "../assets/cos6.png";
import cos3 from "../assets/cos3.jpeg";
import cos4 from "../assets/cos6.jpeg";
import cos5 from "../assets/cos1.jpeg";
import cos6 from "../assets/cos4.jpeg";

import fisio1 from "../assets/fisio1.png";
import fisio2 from "../assets/fisio2.jpeg";
import fisio3 from "../assets/fisio4.jpeg";
import fisio4 from "../assets/fisio3.jpeg";

import cert1 from "../assets/cert5.png";
import cert2 from "../assets/cert10.png";
import cert3 from "../assets/cert1.jpeg";
import cert4 from "../assets/cert3.png";
import cert5 from "../assets/cert4.png";
import cert6 from "../assets/cert8.png";
import cert7 from "../assets/cert6.png";
import cert8 from "../assets/cert7.png";
import cert9 from "../assets/cert1.png";
import cert10 from "../assets/cert9.png";
import cert11 from "../assets/cert14.png";
import cert12 from "../assets/cert13.png";

import enf1 from "../assets/enf1.png";

import lab1 from "../assets/lab1.jpeg";
import lab2 from "../assets/lab2.jpeg";

import {
  ImageType,
  MenuProps,
  ProjectCardProps,
  SkillsProps,
  TimelineProps,
} from "../types/types";
export const URL = "https://awesome-portfolio.piyushmehta.com";
export const NAME = "Flor María - Esteticista ";

export const SECTIONS = [
  "Inicio",
  "Experiencia",
  "Habilidades Y competencias",
  "Estética y Cosmeatría",
  "Fisioterapia y Rehabilitación Física",
  "Auxiliar de Enfermería y Laboratorio",
  "Académico",
];
export const HERO_IMAGE = profilePhoto;
export const CTA_TEXT = "Conoce más";
export const MENU: MenuProps[] = [
  { key: 1, route: "home", name: SECTIONS[0] },
  { key: 2, route: "estetica", name: SECTIONS[3] },
  { key: 3, route: "fisio", name: SECTIONS[4] },
  { key: 4, route: "lab", name: SECTIONS[5] },
  { key: 5, route: "acad", name: SECTIONS[6] },
];

export const GREETING_TEXT =
  "Esteticista Cosmeatra, Auxiliar de Enfermería fisioterapia y reahabilitación física & Laboratorio Clínico";
export const GREETING_DESCRIPTION =
  "Soy una esteticista cosmiatria competente, capacitada y experimentada, además de tener certificaciones y experiencia como auxiliar en enfermería y fisioterapia. He trabajado con pacientes de todas las edades y con diversas condiciones de salud. Mi objetivo es ayudar a mis pacientes a mejorar su bienestar físico y emocional a través de la aplicación de técnicas estéticas, cosmetológicas y terapéuticas.";

export const EXPERIENCE: TimelineProps[] = [
  {
    key: 1,
    company: "Telandweb",
    position: "Software developer - entry level",
    logo: "http://www.telandweb.net/images/cssimg/logoGreen2.gif",
    start: "2020-02-01",
    end: "2020-11-01",
    description:
      "- I worked on mobile applications (Extraredes), Servinarium, Confesiones, informative football apps, with flutter,node js,mysql and on landing pages using wordpress",
  },
  {
    key: 2,
    company: "Initiumsoft - Stratus Quito",
    position: "Jr Web Developer",
    logo: "https://initiumsoft.com/var/site/storage/images/9/1/2/0/219-20-esl-ES/Initium%20Logo_150.png",
    start: "2020-11-01",
    end: "now",
    description:
      "I worked on several projects, withs frameworks as symphony, angular, and react, mainly as frontend developer",
  },
  {
    key: 3,
    company: "Taimec",
    position: "Proyects Engineer",
    logo: "https://static.wixstatic.com/media/387423_8710cb69f94942ac9533a3a9e110b7de~mv2.png/v1/fill/w_284,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Isologo%20Taimec.png",
    start: "2021-10-01",
    end: "2022-02-25",
    description:
      "I worked on some mechatronics projects, including data science, using python ",
  },
  {
    key: 4,
    company: "Personal",
    position: "Personal projects",
    logo: "https://miro.medium.com/max/300/1*aGnLvSUPsxgvvai8lxbpBA.jpeg",
    start: "",
    end: "",
    description:
      "Developing full stack App with react and python, and business administration app",
  },
];
export const KEYWORDS = [
  "Esteticista",
  "Cosmeatra",
  "Belleza",
  "Estetica",
  "Enfermeria",
  "E Portfolio",
];
export const IMAGE: ImageType = {
  src: Image,
  height: "600",
  width: "314",
};

export const cosmeatriaData: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "Limpiezas faciales profundas",
    projectDescription:
      "La imagen ilustra una limpieza facial profunda en un centro estético, donde se aplica un exfoliante para eliminar impurezas y mejorar la apariencia de la piel, logrando un rostro fresco y rejuvenecido.",
    projectImageLogo: cos1,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [
      "Exfoliación",
      "Hidratación",
      "Mascarillas",
      "Extracción comedones",
      "Microdermoabrasión",
    ],
  },
  {
    id: 2,
    projectName: "Aplicacion capilar de plasma",
    projectDescription:
      "Se inyecta plasma rico en plaquetas en el cuero cabelludo para estimular el crecimiento del cabello y fortalecer los folículos, mejorando así la salud capilar.",
    projectImageLogo: cos2,
    //link: "https://jebarcia77.github.io/Potential-Customers-Prediction/",
    buttonText: "View Project",
    tech: [
      "Plasma rio en plaquetas",
      "Anticaída",
      "Crecuimiento cabello",
      "Biostimulación capilar",
      "Fortalecimiento de foliculos",
    ],
  },
  {
    id: 3,
    projectName: "Tratamientos de verrugas",
    projectDescription:
      "Procedimiento de electrocirugía para eliminar verrugas, en el cual se emplea una corriente eléctrica controlada para extirpar las verrugas de manera precisa y eficaz, logrando una piel más uniforme y saludable.",
    projectImageLogo: cos3,
    //link: "https://jebarcia77.github.io/Marketing-Campaign-Analysis/",
    buttonText: "View Project",
    tech: [
      "Electrocirugía",
      "Crioterapia",
      "Tópicos",
      "Eliminación de verrugas",
    ],
  },
  {
    id: 4,
    projectName: "Tratamientos de Fototerapia",
    projectDescription:
      "se utiliza luz de diferentes longitudes de onda para tratar diversos problemas cutáneos, como envejecimiento, acné o inflamación, mejorando la apariencia y salud de la piel de forma no invasiva.",
    projectImageLogo: cos4,
    //link: "https://jebarcia77.github.io/Marketing-Campaign-Analysis/",
    buttonText: "View Project",
    tech: [
      "Terapia LED Facial",
      "Fototerapia Antiacne",
      "Estimulacion de colágeno con luz",
    ],
  },
  {
    id: 5,
    projectName: "Tratamiento Facial",
    projectDescription: "",
    projectImageLogo: cos5,
    //link: "https://jebarcia77.github.io/Marketing-Campaign-Analysis/",
    buttonText: "View Project",
    tech: ["Rejuvenecimiento", "Antiacne", "Hidratación", "Cuidado Facial"],
  },
  {
    id: 6,
    projectName: "Tratamiento Facial",
    projectDescription: "",
    projectImageLogo: cos6,
    //link: "https://jebarcia77.github.io/Marketing-Campaign-Analysis/",
    buttonText: "View Project",
    tech: ["Rejuvenecimiento", "Antiacne", "Hidratación", "Cuidado Facial"],
  },
];

export const labData: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "Auxiliar de Enfermería",
    projectDescription: "",
    projectImageLogo: enf1,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [
      "Inyectología",
      "Primeros Auxilios / medios/ avanzados",
      "Sutura",
      "Enfermería",
    ],
  },
  {
    id: 2,
    projectName: "Auxiliar de Laboratorio Clínico",
    projectDescription: "",
    projectImageLogo: lab1,
    //link: "https://jebarcia77.github.io/Potential-Customers-Prediction/",
    buttonText: "View Project",
    tech: ["Recepción de Muestras", "Análisis", "Aparatología", "Limpieza"],
  },
  {
    id: 3,
    projectName: "Auxiliar de Laboratorio Clínico",
    projectDescription: "",
    projectImageLogo: lab2,
    //link: "https://jebarcia77.github.io/Marketing-Campaign-Analysis/",
    buttonText: "View Project",
    tech: ["Recepción de Muestras", "Análisis", "Aparatología", "Limpieza"],
  },
];
export const eduData: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "",
    projectDescription: "",
    projectImageLogo: cert1,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [],
  },
  {
    id: 2,
    projectName: "",
    projectDescription: "",
    projectImageLogo: cert2,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [],
  },
  {
    id: 3,
    projectName: "",
    projectDescription: "",
    projectImageLogo: cert3,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [],
  },
  {
    id: 4,
    projectName: "",
    projectDescription: "",
    projectImageLogo: cert4,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [],
  },
  {
    id: 5,
    projectName: "",
    projectDescription: "",
    projectImageLogo: cert5,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [],
  },
  {
    id: 6,
    projectName: "",
    projectDescription: "",
    projectImageLogo: cert6,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [],
  },
  {
    id: 7,
    projectName: "",
    projectDescription: "",
    projectImageLogo: cert7,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [],
  },
  {
    id: 8,
    projectName: "",
    projectDescription: "",
    projectImageLogo: cert8,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [],
  },
  {
    id: 9,
    projectName: "",
    projectDescription: "",
    projectImageLogo: cert9,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [],
  },
  {
    id: 10,
    projectName: "",
    projectDescription: "",
    projectImageLogo: cert10,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [],
  },
  {
    id: 11,
    projectName: "",
    projectDescription: "",
    projectImageLogo: cert11,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [],
  },
  {
    id: 12,
    projectName: "",
    projectDescription: "",
    projectImageLogo: cert12,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [],
  },
];

export const fisioData: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "Terapia y relajación lumbar",
    projectDescription:
      "sesión de terapia y relajación lumbar, en la que se aplican técnicas de masaje, estiramientos y ejercicios específicos para aliviar el dolor y la tensión en la región lumbar, promoviendo el bienestar y la movilidad.",
    projectImageLogo: fisio1,
    //link: "https://jebarcia77.github.io/Loan-Default-Prediction/",
    buttonText: "View Project",
    tech: [
      "Masajes terpéuticos",
      "Relajación muscular",
      "Terapia de calor y frío",
      "Piedras calientes",
      "Piedras calientes",
    ],
  },
  {
    id: 2,
    projectName: "Cuidado y rehabilitacion de adultos mayores",
    projectDescription:
      "Cuidado y rehabilitación de adultos mayores en un centro especializado, donde se brinda apoyo en ejercicios terapéuticos y actividades de la vida diaria, promoviendo la independencia, movilidad y calidad de vida de los ancianos.",
    projectImageLogo: fisio2,
    //link: "https://jebarcia77.github.io/Potential-Customers-Prediction/",
    buttonText: "View Project",
    tech: [
      "Terapia Ocupacional",
      "Fisioterpia geriátrica",
      "Rehabilitación post cirugía",
      "Estimulación",
    ],
  },
  {
    id: 3,
    projectName: "Masajes y terapias musculares",
    projectDescription:
      "Sesión de masajes y terapias musculares, donde se aplican técnicas de masaje y estiramientos para aliviar tensiones, mejorar la circulación y favorecer la recuperación y flexibilidad de músculos y tejidos conectivos.",
    projectImageLogo: fisio3,
    //link: "https://jebarcia77.github.io/Marketing-Campaign-Analysis/",
    buttonText: "View Project",
    tech: ["Masaje Deportivo", "Drenajes Linfáticos", "Quiromasajes"],
  },
  {
    id: 4,
    projectName: "Masajes de relación",
    projectDescription:
      "Se emplea suaves técnicas de masaje y aromaterapia para liberar tensiones, reducir el estrés y promover la tranquilidad y el equilibrio físico y mental del cliente.",
    projectImageLogo: fisio4,
    //link: "https://jebarcia77.github.io/Marketing-Campaign-Analysis/",
    buttonText: "View Project",
    tech: [
      "Masaje Sueco",
      "Aromaterapia",
      "Espalda - hombros",
      "Reductores",
      "tailandes",
      "lumbar",
    ],
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
    level: Math.floor(0.8 * 100) + 1,
  },
  {
    id: 2,
    skill: "Python",
    level: Math.floor(0.7 * 100) + 1,
  },
  {
    id: 3,
    skill: "HTML/CSS",
    level: Math.floor(0.9 * 100) + 1,
  },
  {
    id: 4,
    skill: "React",
    level: Math.floor(0.7 * 100) + 1,
  },
  {
    id: 5,
    skill: "Symphony",
    level: Math.floor(0.5 * 100) + 1,
  },
  {
    id: 6,
    skill: "Angular",
    level: Math.floor(0.7 * 100) + 1,
  },
  {
    id: 7,
    skill: "Flutter",
    level: Math.floor(0.55 * 100) + 1,
  },
  {
    id: 8,
    skill: "Node js - Express",
    level: Math.floor(0.6 * 100) + 1,
  },
  {
    id: 9,
    skill: "FastApi",
    level: Math.floor(0.75 * 100) + 1,
  },
  {
    id: 10,
    skill: "PHP",
    level: Math.floor(0.5 * 100) + 1,
  },
  {
    id: 11,
    skill: "MYSQL",
    level: Math.floor(0.7 * 100) + 1,
  },
  {
    id: 12,
    skill: "MongoDB",
    level: Math.floor(0.7 * 100) + 1,
  },
];
