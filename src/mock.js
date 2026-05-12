// Mock data for portfolio

export const personalInfo = {
  name: "Mohit Khandelwal",
  title: "Technical Lead & Full Stack Developer",
  location: "New Delhi, India",
  phone: "+91-9953440143",
  email: "er.mk@outlook.com",
  github: "https://github.com/MOHIT143K",
  linkedin: "https://www.linkedin.com/in/m143k/",
  bio: "Passionate Technical Lead with 10+ years of experience leading high-performing teams and delivering enterprise-scale solutions. Specialized in React, Angular, and full-stack development with a proven track record of increasing client satisfaction and team productivity."
};

export const skills = {
  frontend: [
    { name: "Next JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
  ],
  backend: [
    { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" }
  ],
  testing: [
    { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    { name: "React Testing Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Enzyme", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Mocha", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" }
  ],
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
  ],
  cicd: [
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
  ],
  databases: [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
  ]
};

export const experiences = [
  {
    id: 1,
    company: "Wipro Limited",
    position: "Technical Lead",
    location: "Gurugram, Haryana",
    period: "May 2022 – Present",
    highlights: [
      "Led two teams of 15, leveraging Agile methodologies",
      "Defined best practices for architecture and development",
      "35% increase in client sales & regained client confidence",
      "Managed end-to-end product development",
      "Mentored junior developers and conducted code reviews"
    ],
    projects: [
      {
        name: "MTO (dvi-ui)",
        client: "Ministry of Transportation of Ontario",
        tech: ["Next JS", "React", "Redux", "TypeScript", "HTML", "Jest", "React Testing Library", "Azure"]
      },
      {
        name: "Telstra Reward Store",
        client: "Telstra",
        tech: ["Angular 16", "JavaScript", "HTML", "Storybook", "GitLab", "Salesforce Integration", "SSO Login"]
      },
      {
        name: "Telstra E-SIM Order Management",
        client: "Telstra",
        tech: ["React", "Redux", "TypeScript", "HTML", "Jest", "Storybook", "GitLab", "SSO Login"]
      }
    ]
  },
  {
    id: 2,
    company: "Xebia IT Architects India Pvt. Ltd.",
    position: "Senior Technical Consultant",
    location: "Gurgaon, Haryana",
    period: "December 2020 – May 2022",
    highlights: [
      "Led development of price and reporting dashboard",
      "Implemented survey dashboard for McKinsey",
      "Developed advanced analytics suite for PetroSea"
    ],
    projects: [
      {
        name: "Price and Reporting Dashboard",
        client: "Dunnhumby",
        tech: ["React", "Redux", "JavaScript", "Jest", "HTML", "Storybook", "GitLab"]
      },
      {
        name: "Survey Dashboard",
        client: "McKinsey",
        tech: ["React", "Redux", "JavaScript", "Jest", "HTML", "GitHub", "Material-UI"]
      }
    ]
  },
  {
    id: 3,
    company: "Publicis Sapient",
    position: "Senior Associate Experience Technology L1",
    location: "Gurgaon, Haryana",
    period: "July 2017 – December 2020",
    highlights: [
      "Developed retirement platform for Empower",
      "Created report administrator for Fidelity International",
      "Led front-end development initiatives"
    ],
    projects: [
      {
        name: "Empower Retirement",
        client: "Empower, Go West IT",
        tech: ["React JS", "Redux", "JavaScript", "HTML", "CSS", "Bootstrap", "Mocha JS", "Git"]
      },
      {
        name: "Report Management System",
        client: "Fidelity International",
        tech: ["React JS", "Redux", "Typescript", "JavaScript", "HTML", "CSS", "Bootstrap", "Jest", "Git"]
      }
    ]
  },
  {
    id: 4,
    company: "Agile Parking Solutions Pvt. Ltd. (Get My Parking)",
    position: "Software Developer",
    location: "Saket, Delhi",
    period: "June 2016 – June 2017",
    highlights: [
      "Developed admin dashboard using React JS for parking management and revenue management",
      "Built responsive web application for parking booking",
      "Implemented real-time parking spot tracking application"
    ],
    projects: [
      {
        name: "Get My Parking Admin Dashboard",
        client: "Internal Product",
        tech: ["React JS", "Redux", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Jest", "Bitbucket"]
      },
      {
        name: "Parking Booking Application",
        client: "Internal Product",
        tech: ["Angular JS", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Bitbucket"]
      }
    ]
  },
  {
    id: 5,
    company: "Ecstasy E-Ordering Pvt. Ltd. (Bite Club)",
    position: "Front End Developer",
    location: "Gurgaon, Haryana",
    period: "January 2015 – May 2016",
    highlights: [
      "Built e-ordering application using AngularJS",
      "Developed chef dashboard for order & menu management",
      "Implemented real-time order tracking application"
    ],
    projects: [
      {
        name: "Bite Club E-Ordering App",
        client: "Public Product",
        tech: ["AngularJS", "JavaScript", "HTML", "CSS", "Bitbucket", "AWS"]
      },
      {
        name: "Bite Club Chef and Menu Dashboard",
        client: "Internal Product",
        tech: ["AngularJS", "JavaScript", "HTML", "CSS", "Bitbucket", "AWS"]
      }
    ]
  },
  {
    id: 6,
    company: "StrongMoments Technologies Pvt. Ltd.",
    position: "Software Developer",
    location: "Faridabad, Haryana",
    period: "May 2013 – January 2015",
    highlights: [
      "Developed transport management system",
      "Created school management ERP",
      "Implemented tracking system using Java"
    ],
    projects: [
      {
        name: "EFmFm (Employee Transport Management System)",
        client: "Newt Global India Pvt. Ltd.",
        tech: ["jQuery", "JavaScript", "HTML", "CSS", "Bootstrap"]
      },
      {
        name: "FmFm (Online Tracking System)",
        client: "ATS Grid Pvt. Ltd.",
        tech: ["Java", "Spring", "Hibernate", "Spring Security", "Android"]
      }
    ]
  }
];

export const projects = [
  {
    id: 1,
    name: "MTO (dvi-ui)",
    client: "Ministry of Transportation of Ontario",
    description: "Enterprise-level digital vehicle inspection system for Ontario's Ministry of Transportation",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    tech: ["Next JS", "React", "Redux", "TypeScript", "Azure"],
    company: "Wipro Limited"
  },
  {
    id: 2,
    name: "Telstra Reward Store",
    client: "Telstra",
    description: "Customer rewards and loyalty platform with Salesforce integration",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tech: ["Angular 16", "Salesforce", "SSO", "Storybook"],
    company: "Wipro Limited"
  },
  {
    id: 3,
    name: "Telstra E-SIM Order Management",
    client: "Telstra",
    description: "Modern E-SIM ordering and management platform",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
    tech: ["React", "Redux", "TypeScript", "Jest"],
    company: "Wipro Limited"
  },
  {
    id: 4,
    name: "Price and Reporting Dashboard",
    client: "Dunnhumby",
    description: "Advanced analytics dashboard for price monitoring and business intelligence",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    tech: ["React", "Redux", "Storybook", "Jest"],
    company: "Xebia IT Architects"
  },
  {
    id: 5,
    name: "Survey Dashboard",
    client: "McKinsey",
    description: "Interactive survey platform with data visualization and analytics",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80",
    tech: ["React", "Redux", "Material-UI", "Jest"],
    company: "Xebia IT Architects"
  },
  {
    id: 6,
    name: "Empower Retirement",
    client: "Empower, Go West IT",
    description: "Comprehensive retirement planning and management platform",
    image: "https://plus.unsplash.com/premium_photo-1661277697952-0cacde72c755?auto=format&fit=crop&q=80",
    tech: ["React JS", "Redux", "Bootstrap", "Mocha"],
    company: "Publicis Sapient"
  },
  {
    id: 7,
    name: "Report Management System",
    client: "Fidelity International",
    description: "Enterprise report generation and management system",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&q=80",
    tech: ["React JS", "Redux", "TypeScript", "Jest"],
    company: "Publicis Sapient"
  },
  {
    id: 8,
    name: "Get My Parking Admin Dashboard",
    client: "Internal Product",
    description: "Comprehensive parking management and revenue tracking system",
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&q=80",
    tech: ["React JS", "Redux", "Bootstrap", "Jest"],
    company: "Get My Parking"
  },
  {
    id: 9,
    name: "Parking Booking Application",
    client: "Internal Product",
    description: "Real-time parking spot booking and tracking application",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80",
    tech: ["Angular JS", "jQuery", "Bootstrap"],
    company: "Get My Parking"
  },
  {
    id: 10,
    name: "Bite Club E-Ordering App",
    client: "Public Product",
    description: "Online food ordering platform with real-time order tracking",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80",
    tech: ["AngularJS", "AWS", "JavaScript"],
    company: "Bite Club"
  },
  {
    id: 11,
    name: "Bite Club Chef Dashboard",
    client: "Internal Product",
    description: "Restaurant management dashboard for orders and menu management",
    image: "https://images.unsplash.com/photo-1709837167719-1ff90bdbbac5?auto=format&fit=crop&q=80",
    tech: ["AngularJS", "AWS", "JavaScript"],
    company: "Bite Club"
  },
  {
    id: 12,
    name: "EFmFm Transport Management",
    client: "Newt Global India Pvt. Ltd.",
    description: "Employee transport management and tracking system",
    image: "https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&q=80",
    tech: ["jQuery", "Bootstrap", "JavaScript"],
    company: "StrongMoments Technologies"
  },
  {
    id: 13,
    name: "FmFm Tracking System",
    client: "ATS Grid Pvt. Ltd.",
    description: "Real-time GPS tracking system for fleet management",
    image: "https://images.unsplash.com/photo-1625217527288-93919c99650a?auto=format&fit=crop&q=80",
    tech: ["Java", "Spring", "Hibernate", "Android"],
    company: "StrongMoments Technologies"
  }
];

export const education = [
  {
    id: 1,
    institution: "Rajasthan Technical University (RTU)",
    degree: "Bachelor of Technology (B.Tech.), Computer Science",
    location: "Kota, Rajasthan",
    period: "2009 - 2013",
    image: "https://rajasthanlink.com/Banner_Images/08092020011427-media-copy.jpg"
  },
  {
    id: 2,
    institution: "Vidya Mandir Public School",
    degree: "10+2 (Senior Secondary with Non-Medical)",
    location: "Faridabad, Haryana",
    period: "2007 - 2009",
    image: "https://i.ibb.co/PsL5r89z/School-Building-Pic-Final-1-scaled-e1728929748644-2048x580.jpg"
  },
  {
    id: 3,
    institution: "Vidya Mandir Public School",
    degree: "10 (Secondary)",
    location: "Faridabad, Haryana",
    period: "2005 - 2007",
    image: "https://i.ibb.co/PsL5r89z/School-Building-Pic-Final-1-scaled-e1728929748644-2048x580.jpg"
  }
];
