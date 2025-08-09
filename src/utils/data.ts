import ProfileImg from '../assets/cropped.png'
import resume from '../assets/resume/SHIKHIL_K_S_RESUME.pdf'
import DevConnectImg from '../assets/project/devConnect.png'
import idealImg from '../assets/project/ideal.png'
import urlShortner from '../assets/project/urlShortner.png';
import aadharOcr from '../assets/project/aadharOcr.png'

export const user = {
  name:"Shikhil K S",
  designation:"Full Stack Developer",
  summery:"passionate Full Stack MERN Developer with 1+ years of experience building fast, scalable, and user-friendly web applications. Skilled in MongoDB, Express.js, React.js, Node.js, and cloud deployments (AWS, GCP), I love crafting solutions that blend performance, functionality, and great design. Always eager to learn and innovate, I turn ideas into impactful digital experiences.",
  profileImg:ProfileImg,
  resume:resume,
  contact: {
    phone: "+91 9447190058",
    email: "shikhilks369@gmail.com",
    linkedin: "https://www.linkedin.com/in/shikhil-k-s-870392215/",
    github: "https://github.com/SHIKHIL8137"
  },
  professionalSummary:
    "Skilled Full Stack MERN Developer with 1+ years of hands-on experience in building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Proficient in JavaScript, TypeScript, RESTful APIs, and modern web development practices. Experienced in microservices architecture, cloud deployment (AWS, GCP), and agile development methodologies. Strong problem-solving abilities with expertise in data structures, algorithms, and software engineering best practices.",
  technicalSkills: {
    frontend: [
      "React.js", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3",
      "Bootstrap", "Tailwind CSS"
    ],
    backend: [
      "Node.js", "Express.js","Nest.js"
    ],
    database: [
      "MongoDB", "MySQL"
    ],
    programming: ["JavaScript", "TypeScript"],
    versionControl: ["Git", "GitHub"],
    cloudDevOps: ["AWS", "GCP", "EC2","Nginx", "Docker"],
    testing: ["Postman"],
    architecture: [
      "Microservices", "MVC Pattern", "Clean Architecture",
      "Repository Pattern", "SOLID Principles"
    ],
    realtime: ["WebRTC", "Socket.io"],
    paymentIntegration: ["Razorpay"],
    additional: ["Firebase", "Redux", "Context API", "npm"],
    csFundamentals: ["Data Structures and Algorithms", "OOP"]
  },professionalProjects: [
    {
      name: "Custom URL Shortener",
      tech: ["React.js", "Tailwind CSS", "NestJS", "MongoDB", "JWT", "Axios"],
      date: "February 2025",
      description: [
        "Built a full-stack URL Shortener that converts long URLs into short, shareable links.",
        "Implemented user authentication using JWT with access & refresh tokens.",
        "Added click tracking analytics to monitor link performance.",
        "Used Axios interceptors for automatic token refresh handling.",
        "Implemented protected routes with role-based access control.",
        "Configured proper CORS handling for secure cross-origin requests.",
        "Deployed frontend on Vercel and backend on Render."
      ],
      links: {
        live: "https://url-shorttt.vercel.app/",
        frontendRepo: "https://github.com/SHIKHIL8137/URL-SHORTENER-FRONTEND",
        backendRepo: "https://github.com/SHIKHIL8137/URL-SHORTENER-BACKEND"
      },
      image:urlShortner
    },
    {
      name: "Aadhaar OCR Web App",
      tech: ["React.js", "Vite", "Node.js", "Express.js", "Tesseract.js", "Docker"],
      date: "January 2025",
      description: [
        "Developed a full-stack application to extract Aadhaar card details using OCR.",
        "Supported English, Hindi, and Malayalam text recognition via Tesseract.js.",
        "Enabled uploading of front & back Aadhaar images with instant extraction of Name, DOB, Gender, Aadhaar Number, Address, and Mobile Number.",
        "Containerized backend using Docker for easier deployment.",
        "Handled form-data uploads and cross-origin communication.",
        "Deployed backend and frontend on Render."
      ],
      links: {
        live: "https://aadhar-ocr-front-end.onrender.com/",
        frontendRepo: "https://github.com/SHIKHIL8137/Aadhar_OCR_Front-End",
        backendRepo: "https://github.com/SHIKHIL8137/-Aadhar_OCR_Back-End"
      },
      image:aadharOcr
    },
    {
      name: "DevConnect - Freelancer Collaboration Platform",
      tech: ["MERN Stack", "Microservices", "WebRTC", "GCP"],
      date: "April 2025",
      description: [
        "Developed a freelance collaboration platform with real-time features for 100+ users.",
        "Implemented Clean Architecture and Repository Pattern improving maintainability by 40%.",
        "Built real-time messaging and video/audio calling with WebRTC & Socket.io.",
        "Deployed on GCP with Nginx reverse proxy achieving 99.9% uptime.",
        "Integrated Razorpay with automated invoicing.",
        "Designed responsive React.js frontend with modern UI/UX.",
        "Utilized MongoDB with RESTful APIs for seamless communication."
      ],
      links: {
        live: "https://kalarikkal.shop/",
        frontendRepo: "https://github.com/SHIKHIL8137/DevConnect_FrondEnd.git",
        backendRepo: "https://github.com/SHIKHIL8137/DevConnect_BackEnd.git"
      },
      image:DevConnectImg
    },
    {
      name: "IDeal - E-commerce Platform",
      tech: ["Node.js", "Express.js", "EJS", "AWS"],
      date: "January 2025",
      description: [
        "Built an e-commerce platform for second-hand iPhones using server-side rendering.",
        "Implemented secure authentication and session management with bcrypt.",
        "Integrated Razorpay with retry mechanism improving payment success rate by 30%.",
        "Deployed on AWS EC2 with Nginx and custom domain configuration.",
        "Developed admin dashboard with Chart.js for analytics.",
        "Implemented PDF invoicing and location-based delivery charges.",
        "Optimized MongoDB queries and caching to reduce load times by 25%."
      ],
      links: {
        live: "https://ideal.kalarikkal.shop/",
        github: "https://github.com/SHIKHIL8137/iDeal"
      },
      image:idealImg
    }
],
  education: [
    {
      institution: "APJ Abdul Kalam Technological University",
      degree: "B.Tech in Electronics and Communication Engineering",
      duration: "Aug 2020 – May 2024",
      location: "Thrissur, Kerala",
      details: [
        "Relevant coursework: Data Structures, OOP, Database Management Systems."
      ]
    },
    {
      institution: "Government Model Boys Higher Secondary School",
      degree: "Higher Secondary - Computer Science and IT",
      duration: "June 2018 – May 2020",
      location: "Thrissur, Kerala"
    }
  ],
  achievements: [
    "Deployed and maintained production apps with 99.9% uptime.",
    "Improved app performance by 30% via optimization.",
    "Contributed to open-source with clean, documented code.",
    "Experienced in agile development and team collaboration."
  ],
  languages: [
    { language: "English", proficiency: "Professional" },
    { language: "Malayalam", proficiency: "Native" }
  ],
  experiance: {
      institution: "Brototype - MERN Stack Full Stack Development",
      duration: "Aug 2024 – July 2025",
      location: "Kochi, Kerala",
      details: [
        "Training in MongoDB, Express.js, React.js, Node.js, modern web practices.",
        "Hands-on real-world projects, agile methodology, and best practices."
      ]
    },
}