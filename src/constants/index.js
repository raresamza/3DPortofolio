import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    logonobg,
    java,
    springboot,
    raton,
    empSys,
    portofolio,
    leetik
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "SpringBoot",
      icon: springboot,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "Filesystem",
      icon: raton,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Improved UI and added new elements for better application flow.",
        "Changed existing pages to get a more personalized experience while using the application.",
        "Collaborated in a team in order to achieve deadlines.",
        "Been part of an Agile environment.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Leetik",
      description:
        "Web-based platform based off Stepik and Leetcode, that allows users to enroll into and complete courses on various programming topics, with the end goal of increasing their skill as a developer.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "orange-text-gradient",
        },
      ],
      image: leetik,
      source_code_link: "https://github.com/raresamza/Licenta",
    },
    {
      name: "Employee Management System",
      description:
        "Web application that enables users to manage the time that the employees have worked, it also has the ability to generate a pdf containing a report about the employees.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "orange-text-gradient",
        },
      ],
      image: empSys,
      source_code_link: "https://github.com/raresamza/Employee-Management-Backend",
    },
    {
      name: "Source Code for this website",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: portofolio,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };