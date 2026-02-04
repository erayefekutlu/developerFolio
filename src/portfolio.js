/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Eray Efe Kutlu",
  title: "Hi all, I'm Eray",
  subTitle: emoji(
    "I am a software developer specializing in backend development within the PHP, Python, and Java ecosystems. I have a solid grasp of the general structure of SQL and am particularly experienced in database design and querying, especially with MySQL. I work in web scraping and data processing, prioritizing the conversion of data into scalable and structured JSON formats. On the frontend side, I use HTML, CSS, JavaScript, and Bootstrap. I have experience with deployment and basic system administration on Ubuntu-based servers using tools like CloudPanel."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/erayefekutlu",
  linkedin: "https://www.linkedin.com/in/erayefekutlu/",
  mail: "my@erayefekutlu.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "BACKEND-FOCUSED DEVELOPER WITH SCRAPING, API & LINUX SERVER EXPERIENCE",
  skills: [
    emoji(
      "⚡ Build and publish REST APIs (public/private) and integrate scraped data into services & bots"
    ),
    emoji(
      "⚡ Work with MySQL: schema design, writing queries, and optimizing frequently filtered columns with indexes"
    ),
    emoji(
      "⚡ Web scraping with PHP (cURL + Simple HTML DOM); also experienced with Python tooling (aiohttp, Playwright, Selenium, BeautifulSoup) with AI assistance"
    ),
    emoji(
      "⚡ Data processing in JSON: store flexible/large structures as JSON and serve API responses in JSON"
    ),
    emoji(
      "⚡ Deploy websites on Ubuntu via CloudPanel (incl. WordPress), basic security hardening (ports, rate limits, Fail2ban)"
    ),
    emoji(
      "⚡ Linux monitoring & protection: track resource usage (htop/nload) and mitigate Layer-7 attacks using Cloudflare-focused access patterns"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "PHP", fontAwesomeClassname: "fab fa-php"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},

    {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},

    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Bootstrap", fontAwesomeClassname: "fab fa-bootstrap"},

    {skillName: "Linux/Ubuntu", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "Cloudflare", fontAwesomeClassname: "fab fa-cloudflare"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Ankara Bilim Üniversitesi",
      logo: require("./assets/images/abuLogo.png"), // logo ekleyince bu satır çalışır
      subHeader: "BSc in Software Engineering (English)",
      duration: "2024 - 2029 (Expected)",
      desc: "Software Engineering student focusing on backend development. Particularly interested in Java through the department curriculum.",
      descBullets: [
        "Backend-focused learning path (APIs, databases, data processing)",
        "Strong interest in Java and practical projects alongside coursework"
      ]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Web Scraping & Data Processing",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend Development (APIs)",
      progressPercentage: "80%"
    },
    {
      Stack: "Databases (MySQL / SQL)",
      progressPercentage: "75%"
    },
    {
      Stack: "Linux / Server & Deployment",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend (Bootstrap-based)",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: false,
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle:
    "Some of my web applications built with data processing and real-world integration",
  projects: [
    {
      image: require("./assets/images/projectPharmacy.webp"),
      projectName: "On-duty Pharmacy API (Turkey)",
      projectDesc:
        "I provide free on-duty pharmacy data via a public API. Data is collected and processed with scraping pipelines and served as JSON. Built with focus on reliability, caching, and clean responses.",
      footerLink: [
        {
          name: "API Endpoint",
          url: "https://api.erayefekutlu.com/eczane/<plateNumber>"
        }
      ]
    },
    {
      image: require("./assets/images/projectPharmacy.webp"),
      projectName: "Cross-platform On-duty Pharmacy App (Flutter)",
      projectDesc:
        "A Flutter cross-platform app for finding on-duty pharmacies. Developed with AI assistance; I handled app structure, data integration, and overall implementation flow. Not published yet.",
      footerLink: [
        {
          name: "Source Code (GitHub)",
          url: "https://github.com/erayefekutlu/flutter-pharmacy-app"
        }
      ]
    },
    {
      image: require("./assets/images/earthquake.webp"),
      projectName: "Son Depremler – Türkiye Anlık Deprem Verisi",
      projectDesc:
        "A real-time earthquake information web app using AFAD and Kandilli data. It fetches and presents seismic data dynamically, enabling users to track recent earthquakes across Turkey.",
      footerLink: [
        {
          name: "Live Site",
          url: "https://sondepremler.pages.dev/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/erayefekutlu/son-depremler"
        }
      ]
    },
    {
      image: require("./assets/images/superlig.webp"),
      projectName: "Süper Lig Şampiyonluk Hesaplayıcı",
      projectDesc:
        "An interactive web app for tracking the Turkish Süper Lig table and exploring championship scenarios based on team standings and statistics.",
      footerLink: [
        {
          name: "Live Site",
          url: "https://superlig.demosoftware.com.tr/"
        }
      ]
    }
  ],
  display: true
};

// Achievement & Certification Section

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Verified certifications and trainings focused on software development, security, and technology",

  achievementsCards: [
    {
      title: "BTK Akademi – Software & Technology Trainings",
      subtitle:
        "Completed multiple certified trainings provided by BTK Akademi, covering software development and technical foundations.",
      image: require("./assets/images/btk.webp"),
      imageAlt: "BTK Akademi",
      footerLink: [
        {
          name: "HTML5 ile Web Geliştirme",
          url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=dx1hA7DOpE"
        },
        {
          name: "Veritabanı Saldırıları ve Veritabanı Güvenliği",
          url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=qKrhmAnGM8"
        },
        {
          name: "PHP",
          url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=qKrhmg1ZDD"
        }
      ]
    },
    {
      title: "Software Technologies and Artificial Intelligence",
      subtitle:
        "GEN Academy • Skills: Software Development, Artificial Intelligence",
      image: require("./assets/images/genacademy.webp"),
      imageAlt: "GEN Academy",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://globallycheck.com/CertificateRepo/GEND7222724.jpg"
        }
      ]
    },

    {
      title: "Yazılım Teknolojileri ve Yapay Zeka",
      subtitle: "GEN Academy • Yetenekler: Yazılım Geliştirme, Yapay Zeka",
      image: require("./assets/images/genacademy.webp"),
      imageAlt: "GEN Academy",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://globallycheck.com/CertificateRepo/GENDDC63ED8.jpg"
        }
      ]
    },
    {
      title: "Internship Opportunity Summit",
      subtitle: "Öğrenci Kariyeri • Skills: Digital Marketing",
      image: require("./assets/images/ogrenciKariyeri.webp"),
      imageAlt: "Öğrenci Kariyeri",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://globallycheck.com/CertificateRepo/ISH2997A5C3.jpg"
        }
      ]
    },

    {
      title: "DevXperience",
      subtitle: "Talentcoders",
      image: require("./assets/images/talentcoders.webp"),
      imageAlt: "Talentcoders",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://globallycheck.com/CertificateRepo/DEV44478DB0.jpg"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  display: false
};

const talkSection = {display: false};
const podcastSection = {display: false};
const twitterDetails = {display: false};
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "my@erayefekutlu.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
