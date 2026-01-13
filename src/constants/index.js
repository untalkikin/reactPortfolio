import project1 from "../assets/projects/cost.png";
import project2 from "../assets/projects/cripto.png";
import project3 from "../assets/projects/pizza.png";
import project4 from "../assets/projects/vet.png";
import project5 from "../assets/projects/lastport.png";
import project6 from "../assets/projects/flask.jpg";
import project7 from "../assets/projects/django.jpg";
import project8 from "../assets/projects/reactsuper.jpg";
import project9 from "../assets/projects/palsa.png";
import nexus from "../assets/projects/nexus.png";
import conexion from "../assets/projects/conexion.png";
import filex from "../assets/projects/filex.png";
import sise from "../assets/projects/sise.png";

export const HERO_CONTENT = `Software Engineer with over 6 years of experience in backend and frontend development, currently pursuing a Master’s in Software Engineering, and holder of a Master’s in Business Administration (MBA). Proven track record of successfully developing and enhancing over 20 digital products across various industries. Experienced in leading cross-functional teams to deliver scalable solutions that significantly improve user experience and system performance. Passionate about continuous learning and eager to contribute my technical expertise and strategic perspective to innovative and impact-driven projects.`;

export const ABOUT_TEXT = `I am passionate about building, problem-solving, and delivering well-structured solutions through technology. My portfolio showcases a selection of projects that reflect my hands-on experience and technical versatility. I specialize in Python (Django and Flask) and the MERN stack (MongoDB, Express.js, React, and Node.js), and have successfully developed projects of varying complexity, always aiming to deliver scalable and efficient results tailored to user needs.`;

export const EXPERIENCES = [
  {
    year: "2025 - 2026",
    role: "Full Stack Software Engineer",
    company: "SEDUZAC Library System",
    description: ` Developed a comprehensive library management system using Django and React, focused on book cataloging, loans, and user management. Implemented REST APIs, authentication and role-based access control, QR code generation for item identification, and relational database management. Improved efficiency in lending, returns, and bibliographic administration workflows.`,
    technologies: ["TypeScript", "React", "Django", "PostgreSQL", "Django Rest Framework", "TailwindCss", "Vercel", "Railway"],
  },  
  {
    year: "2025 - 2025",
    role: "Full Stack Software Engineer",
    company: "Clarisse Bakery",
    description: ` •Developed a full ERP and e-commerce system using Django, Django REST Framework, React, and TypeScript. Implemented REST APIs, JWT-based authentication, role-based access control, online payments, and relational database management. Deployed and maintained the application in cloud environments, focusing on scalable architecture, security, and user experience.`,
    technologies: ["TypeScript", "React", "Django", "PostgreSQL", "Django Rest Framework", "TailwindCss", "Vercel", "Railway"],
  },
  {
    year: "2024 - 2025",
    role: "Software Engineer",
    company: "Technova SAPI",
    description: ` •Full-stack and front-end projects continued for the consulting firm with specific requirements.
     •Improvements are planned for final product delivery.`,
    technologies: ["Javascript", "React.js", "Odoo", "PostgreSQL", "HTML", "TypeScript", "Bootstrap"],
  },
  {
    year: "2023 - Present",
    role: "Software Engineer",
    company: "Freelance",
    description: `• Developed and maintained full stack web applications using React, Node.js, Express, and
    MongoDB. •Improved company processes by 60% and increased global visibility by 50% through system optimizations.
     •Integrated REST APIs to connect front-end interfaces with back-end databases.`,
    technologies: ["Javascript", "React.js", "Django", "Flask", "mongoDB", "NodeJS", "TypeScript"],
  },
  {
    year: "2019 - 2022",
    role: "Project Manager / Backend Developer",
    company: " National Pedagogic University 321",
    description: ` •Built backend services using Python Flask, creating multiple endpoints for real-time student
    records. •Enabled 1,900 students to check grades and enroll remotely through the new system.
     •Integrated MySQL databases and improved query performance, reducing response times by 25%.`,
    technologies: ["Trello", "Flask", "mongoDB", "Project Manager"],
  },
  {
    year: "2018 - 2019",
    role: "Web Developer",
    company: "Zacatecas Autonomus Univeristy",
    description: `• Developed and deployed official web pages using HTML, CSS, and JavaScript.
     • Increased the academic unit's visibility by 70%, contributing to a 20% rise in enrollments.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2018 - 2018",
    role: "Tech Leader Intern/Project Manager Intern",
    company: "Zacatecas Council of Science and Technology",
    description: `•Led a team of 6 programmers to develop a management system for government support to farmers. 
    •Successfully automated processes more efficiently and equitably for program beneficiaries, resulting in a 30% increase in applications and a 20% improvement in response time.`,
    technologies: ["RUP Methodology"],
  },
  {
    year: "2017 - 2017",
    role: "Web Developer Intern",
    company: "Beer Factory Grupo Modelo",
    description: `•Developed a system to verify medical examinations in the production area of a brewery. 
    •The implementation of this system improved the control of medical verifications by 45%.`,
    technologies: ["PHP", "HTML", "CSS"],
  },
  {
    year: "2016 - 2017",
    role: "Web Developer and IT Assistant",
    company: "ADENAL Private Security",
    description: `•Developed the company's website and provided technical support for computers. 
    •The implementation of this website increased sales and contracts for the company by 25%. 
    •Providing technical support for computer systems improved the company's efficiency by 30%.`,
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
  {
    title: "Nexus Technology Web Page",
    image: nexus,
    description:
      "A website was developed for a technology startup.",
    technologies:["HTML", "CSS", "Bootstrap"],
    link:"https://software.nexustechstudio.com/",
  },
  {
    title: "Conexion 812 web page",
    image: conexion,
    description:
      "A website was developed for a news facebook page.",
    technologies:["HTML", "CSS", "Bootstrap"],
    link:"https://conexion812.com/",
  },
  {
    title: "SISE UPN321",
    image: sise,
    description:
      "Comprehensive university school administration system, developed for the National Pedagogic University 321.",
    technologies:["Flask", "Bulma CSS", "Vue JS", "MongoDB", "GitLab"],
    link:"https://test.admonupn321zac.com/",
  },
  {
    title: "Filex Sign System",
    image: filex,
    description:
      "A web application was developed for a company that provides digital signature services.",
    technologies:["React", "Next", "TypeScript", "Laravel", "PostgreSQL", "Bootstrap", "AWS", "Docker"],
    link:"https://filex.com.mx/",
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
  {
    degree: "Master in Software Engineering",
    years: "In progress",
    school: "Research Math Center",
  },
  {
    degree: "Certification in Web Development",
    years: "2023",
    school: "Coderhouse",
  },
  {
    degree: "Certification in JavaScript",
    years: "2023",
    school: "Coderhouse",
  },
  {
    degree: "Certification in Web ReactJS",
    years: "2023",
    school: "Coderhouse",
  },
  {
    degree: "Practical Django Certificate",
    years: "2020",
    school: "Udemy",
  },
  {
    degree: "Certificate in practical SCRUM for software projects",
    years: "2020",
    school: "Udemy",
  },
  {
    degree: "Certificate in purchasing system with Django 2.2",
    years: "2020",
    school: "Udemy",
  },
];

export const CONTACT = {
  address: "Zacatecas, Mexico",
  phoneNo: "+52 492 169 9031",
  email: "kikedlt27@gmail.com",
};
