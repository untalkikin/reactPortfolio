import project1 from "../assets/projects/cost.png";
import project2 from "../assets/projects/cripto.png";
import project3 from "../assets/projects/pizza.png";
import project4 from "../assets/projects/vet.png";
import project5 from "../assets/projects/lastport.png";
import project6 from "../assets/projects/flask.jpg";
import project7 from "../assets/projects/django.jpg";
import project8 from "../assets/projects/reactsuper.jpg";
import project9 from "../assets/projects/palsa.png";

export const HERO_CONTENT = `I am a passionate informatic enginier and full stack developer with a knack for creating robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies such as React, HTML and CSS as well as back-end technologies such as Python, with Django, Flask Node.js, MySQL, PostgreSQL and MongoDB. My goal is to leverage my experience to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Django, Flask, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "None Freelance",
    description: `Currently, I am a full-stack freelance programmer in continuous practice. I develop custom software, web applications, and websites. With a few clients, I can practice and learn more.`,
    technologies: ["Javascript", "React.js", "Django", "Flask", "mongoDB"],
  },
  {
    year: "2019 - 2022",
    role: "Project Manager/Backend Developer",
    company: "National Pedagogic University 321",
    description: `In this project, I served as the Project Manager and backend developer. We developed a system for the university's student services department using Vue.js and Python Flask, with a MongoDB database. The development consisted of multiple phases or sprints. We built an API in Flask and a frontend application in Vue.js to consume all the data. I worked with five other developers who were a great team. We used the SCRUM methodology, which was challenging as I did not have prior experience working as a SCRUM Master.`,
    technologies: ["Trello", "Flask", "mongoDB"],
  },
  {
    year: "2018 - 2019",
    role: "Web Developer",
    company: "Zacatecas Autonomus Univeristy",
    description: `PresentWeb pages were developed for the academic unit ofhumanities for its researchers in the National ResearchersSystem (SNI). It was developed without any framework.Technical support was provided to the teams of thatacademic unit.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2018 - 2018",
    role: "Project Manager Intern",
    company: "Zacatecas Council of Science and Technology",
    description: `To conclude my informatic engineering, I was assigned a project by the Science and Technology Council of the state of Zacatecas. I worked at the secretary of agriculture of the state of Zacatecas, where I served as the project leader in the sub-scretary of agriculture. The project was developed using the Rational Unified Process (RUP) methodology. I collaborated with 6 developers and 2 database experts.The project was the new automation of the selection process of the beneficiaries of the agriculture programs of the secretary, currently the system works correctly. `,
    technologies: ["RUP Methodology"],
  },
  {
    year: "2017 - 2017",
    role: "Web Developer Intern",
    company: "Beer Factory Grupo Modeloy",
    description: `I was internally assigned for my social service to support ABInBev in the production department for the SMED (ContinuousImprovement) team. I independently developed a systemwithout any framework for the verification of medical exams for all production personal. `,
    technologies: ["PHP", "HTML", "CSS"],
  },
  {
    year: "2016 - 2017",
    role: "Administrative and IT Assistant",
    company: "ADENAL Private Security",
    description: `Provided technical support for employees work computers.Created web pages using WIXand HTML. Produced employee reports which included work assignments and attendance. `,
    technologies: ["WIX"],
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

export const CONTACT = {
  address: "4239 Fawn Meadows Circle, Clermont Florida 34711",
  phoneNo: "+52 4921669031 ",
  email: "kikedlt27@gmail.com",
};
