import project1 from "../assets/projects/cost.png";
import project2 from "../assets/projects/cripto.png";
import project3 from "../assets/projects/pizza.png";
import project4 from "../assets/projects/vet.png";
import project5 from "../assets/projects/lastport.png";
import project6 from "../assets/projects/flask.jpg";
import project7 from "../assets/projects/django.jpg";
import project8 from "../assets/projects/reactsuper.jpg";
import project9 from "../assets/projects/palsa.png";

export const HERO_CONTENT = `Software engineer with over 6 years of experience in backend and frontend development, and a master's degree in business administration, successfully created and enhanced more than 10 products. Led teams to deliver projects that have significantly improved user experience and system efficiency. Eager to leverage my expertise and technical skills to drive further success.`;

export const ABOUT_TEXT = `I am passionate about creating, developing, solving problems and managing solutions. My experience is reflected on my website, where you can explore some my projects. My tech stack includes Python (Django and Flask) and MERN (MongoDB, Express.js, React and Node.js). I develop projects of various scales to provide adequate solutions."`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Engineer",
    company: "None Freelance",
    description: `Developed and maintained web applications using technologies such as HTML, React, Node.js and Django MongoDB. Implemented multiple systems and websites that streamlined company processes by 60% and increased global visibility by 50%.`,
    technologies: ["Javascript", "React.js", "Django", "Flask", "mongoDB", "NodeJS", "TypeScript"],
  },
  {
    year: "2019 - 2022",
    role: "Project Manager / Backend Developer",
    company: " National Pedagogic University 321",
    description: `Collaborated on developing a backend software using Python Flask, creating multiple endpoints that greatly improved communication with the frontend. The implementation improved the university, enabling 1,900 students to check their grades and enroll remotely.`,
    technologies: ["Trello", "Flask", "mongoDB", "Project Manager"],
  },
  {
    year: "2018 - 2019",
    role: "Web Developer",
    company: "Zacatecas Autonomus Univeristy",
    description: `Developed the official web pages for the Humanities Academic Unit. This implementation enhanced the academic unit's visibility by 70%, leading to a 20% increase in enrollments.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2018 - 2018",
    role: "Tech Leader Intern/Project Manager Intern",
    company: "Zacatecas Council of Science and Technology",
    description: `Led a team of 6 programmers to develop a management system for government support to farmers. Successfully automated processes more efficiently and equitably for program beneficiaries, resulting in a 30% increase in applications and a 20% improvement in response time. `,
    technologies: ["RUP Methodology"],
  },
  {
    year: "2017 - 2017",
    role: "Web Developer Intern",
    company: "Beer Factory Grupo Modelo",
    description: `Developed a system to verify medical examinations in the production area of a brewery. The implementation of this system improved the control of medical verifications by 45%.`,
    technologies: ["PHP", "HTML", "CSS"],
  },
  {
    year: "2016 - 2017",
    role: "Web Developer and IT Assistant",
    company: "ADENAL Private Security",
    description: `Developed the company's website and provided technical support for computers. The implementation of this website increased sales and contracts for the company by 25%. Providing technical support for computer systems improved the company's efficiency by 30%.`,
    technologies: ["HTML", "CSS", "JQuery"],
  },
];

export const PROJECTS = [
  {
    title: "Expense Contrtol App",
    image: project1,
    description:
      "Application to control expenses, in it you can add your expenses and it returns the percentage of your salary that you have spent.",
    technologies: ["React", "CSS"],
    link:"https://jocular-phoenix-4457d5.netlify.app/",
  },
  {
    title: "Cryptocurrency quote",
    image: project2,
    description:
      "Application that consumes real-time data on how much the most popular cryptocurrencies cost.",
    technologies: ["React", "Tailwind CSS"],
    link:"https://clever-pithivier-e611db.netlify.app/",
  },
  {
    title: "Pizza Boungiorno",
    image: project3,
    description:
      "Website of a pizzeria, it is for informational purposes only.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link:"https://untalkikin.github.io/coder-desarrolloweb.github.io/",
  },
  {
    title: "Veterinary Appointments",
    image: project4,
    description:
      "Veterinary appointment application, in which you can fill out the fields to schedule the appointment, is stored locally.",
    technologies: ["React", "Tailwind CSS"],
    link:"https://venerable-choux-f93895.netlify.app/",
  },
  {
    title: "My last Portfolio",
    image: project5,
    description:
      "I decided to update my portfolio for more practice and this is the previous one.",
    technologies: ["React", "Tailwind CSS"],
    link:"https://neon-meerkat-d4d531.netlify.app/",
  },
  {
    title: "Super Heroes API",
    image: project6,
    description:
      "To practice, he decided to make an api with python flask in which he would show me the superheroes stored in the database.",
    technologies: ["Flask", "Sqlite3"],
    link:"https://enriquedelatorre.pythonanywhere.com/superheroes",
  },
  {
    title: "Django Rest Framework",
    image: project7,
    description:
      "To improve my knowledge of django, Python decided to make an api with the django Rest Framework in which it made me the crud of the superheroes stored in the database.",
    technologies: ["Django", "Sqlite3", "Django Rest Framework"],
    link:"https://joseenriquedev.pythonanywhere.com/api/v1/heroes/",
  },
  {
    title: "Frontend of Super Heroes ",
    image: project8,
    description:
      "To consume the data that is in the backend of django reste framework, create this react application that brings the data.",
    technologies: ["React", "MUI"],
    link:"https://superheroeshenry.netlify.app/",
  },
  {
    title: "Website for a company that sells aluminum",
    image: project9,
    description:
      "I developed this page for a client who sells aluminum",
    technologies:["HTML", "CSS", "Bootstrap"],
    link:"https://palsa.mx/",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor Computer Egineer",
    years: "2012-2018",
    school: "Zacatecas Technological Institute",
  },
  {
    degree: "Master in Bussines and Administration",
    years: "2018-2023",
    school: "Zacatecas Technological Institute",
  },
];

export const CONTACT = {
  address: "Spring TX, USA",
  phoneNo: "+1 (281) 360-25-44",
  email: "kikedlt27@gmail.com",
};
