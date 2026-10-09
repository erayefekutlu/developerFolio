/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// An explicit choice takes precedence; otherwise, use the browser language.
const getPortfolioLanguage = () => {
  if (typeof window === "undefined") {
    return "en";
  }

  let savedLanguage = null;
  try {
    savedLanguage = window.localStorage.getItem("portfolioLanguage");
  } catch (error) {
    // Browser-language detection still works when storage is unavailable.
  }
  if (savedLanguage === "tr" || savedLanguage === "en") {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language || "en";
  return browserLanguage.toLowerCase().startsWith("tr") ? "tr" : "en";
};

const language = getPortfolioLanguage();
const translate = (turkish, english) => (language === "tr" ? turkish : english);

// Shared interface labels used outside the content sections below.
const uiText = {
  language,
  navigation: {
    skills: translate("Yetenekler", "Skills"),
    workExperience: translate("Deneyimler", "Work Experience"),
    projects: translate("Projeler", "Projects"),
    achievements: translate("Başarılar", "Achievements"),
    blogs: translate("Bloglar", "Blogs"),
    talks: translate("Konuşmalar", "Talks"),
    resume: translate("Özgeçmiş", "Resume"),
    contact: translate("İletişim", "Contact Me")
  },
  greeting: {
    contact: translate("İletişime Geç", "Contact Me"),
    downloadResume: translate("Özgeçmişimi İndir", "Download My Resume")
  },
  languageSelector: {
    label: translate("Dil seçimi", "Language selector")
  },
  headings: {
    proficiency: translate("Yetkinlikler", "Proficiency"),
    education: translate("Eğitim", "Education"),
    experiences: translate("Deneyimler", "Experiences"),
    openSourceProjects: translate(
      "Açık Kaynak Projeler",
      "Open Source Projects"
    ),
    reachOut: translate("İletişime Geçin", "Reach Out to Me!")
  },
  actions: {
    moreProjects: translate("Daha Fazla Proje", "More Projects"),
    goToTop: translate("Sayfanın başına dön", "Go to Top")
  },
  footer: {
    madeWith: translate(
      "DeveloperFolio Ekibi tarafından ❤️ ile hazırlandı",
      "Made with ❤️ by DeveloperFolio Team"
    ),
    themeBy: translate("Tema:", "Theme by")
  },
  twitter: {
    unavailable: translate(
      "Yüklenemedi. Gizlilik koruması ayarlarınızı kontrol edin.",
      "Can't load? Check privacy protection settings."
    )
  },
  profile: {
    openForOpportunities: translate(
      "Yeni fırsatlara açık",
      "Open for opportunities"
    ),
    yes: translate("Evet", "Yes"),
    no: translate("Hayır", "No")
  },
  seo: {
    title: translate(
      "Eray Efe Kutlu | Backend Geliştirici ve Yazılım Mühendisi",
      "Eray Efe Kutlu | Backend Developer & Software Engineer"
    ),
    description: translate(
      "PHP, Python ve Java alanlarında uzmanlaşan backend geliştirici. Web scraping, veri işleme, MySQL veritabanı tasarımı ve sunucu yönetimi deneyimi.",
      "Backend developer specializing in PHP, Python, and Java. Experienced in web scraping, data processing, MySQL database design, and server administration."
    )
  }
};

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
  title: translate("Merhaba, ben Eray", "Hi, I'm Eray"),
  subTitle: emoji(
    translate(
      "TÜBİTAK ve TEKNOFEST deneyimine sahip, BTK Akademi Hackathon 2026 finalisti; backend ve veri odaklı bir Yazılım Mühendisliği öğrencisiyim. PHP, Java ve Python ile servisler geliştiriyor; MySQL ile veritabanı tasarımı ve optimizasyonu yapıyorum. Web scraping ile ham verileri ölçeklenebilir JSON yapılarına dönüştürüyor, farklı alanlardaki projelerimi uçtan uca sanal sunucularda canlıya alıyorum.",
      "I am a backend- and data-focused Software Engineering student with experience at TÜBİTAK and TEKNOFEST, and a finalist in the BTK Akademi Hackathon 2026. I build services with PHP, Java, and Python; design and optimize MySQL databases; turn raw data into scalable JSON structures through web scraping; and deploy my end-to-end projects to virtual servers."
    )
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
  title: translate("Neler Yapıyorum", "What I Do"),
  subTitle: translate(
    "WEB SCRAPING, API VE LINUX SUNUCU DENEYİMİNE SAHİP BACKEND ODAKLI GELİŞTİRİCİ",
    "BACKEND-FOCUSED DEVELOPER WITH SCRAPING, API & LINUX SERVER EXPERIENCE"
  ),
  skills: [
    emoji(
      translate(
        "⚡ Herkese açık/özel REST API'ler geliştiriyor ve yayımlıyor; scraping ile elde edilen verileri servislere ve botlara entegre ediyorum.",
        "⚡ Build and publish public/private REST APIs, and integrate scraped data into services and bots."
      )
    ),
    emoji(
      translate(
        "⚡ MySQL ile şema tasarlıyor, sorgular yazıyor ve sık filtrelenen sütunları indekslerle optimize ediyorum.",
        "⚡ Work with MySQL: design schemas, write queries, and optimize frequently filtered columns with indexes."
      )
    ),
    emoji(
      translate(
        "⚡ PHP (cURL + Simple HTML DOM) ile web scraping yapıyor; Python araçlarıyla da (aiohttp, Playwright, Selenium, BeautifulSoup) çalışıyorum.",
        "⚡ Perform web scraping with PHP (cURL + Simple HTML DOM) and work with Python tools including aiohttp, Playwright, Selenium, and BeautifulSoup."
      )
    ),
    emoji(
      translate(
        "⚡ Esnek ve büyük veri yapılarını JSON olarak saklıyor; API yanıtlarını JSON formatında sunuyorum.",
        "⚡ Process data in JSON: store flexible, large structures as JSON and serve API responses in JSON."
      )
    ),
    emoji(
      translate(
        "⚡ Web sitelerini CloudPanel üzerinden Ubuntu'ya (WordPress dahil) yayımlıyor; portlar, hız limitleri ve Fail2ban ile temel güvenlik sıkılaştırması yapıyorum.",
        "⚡ Deploy websites on Ubuntu through CloudPanel, including WordPress, and apply basic security hardening with ports, rate limits, and Fail2ban."
      )
    ),
    emoji(
      translate(
        "⚡ Linux sistemlerini izliyor ve koruyorum: kaynak kullanımını htop/nload ile takip ediyor, Cloudflare odaklı erişim kurallarıyla Katman 7 saldırılarını azaltıyorum.",
        "⚡ Monitor and protect Linux systems: track resource usage with htop/nload and mitigate Layer-7 attacks with Cloudflare-focused access rules."
      )
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
      logo: require("./assets/images/abuLogo.webp"), // logo ekleyince bu satır çalışır
      subHeader: translate(
        "Yazılım Mühendisliği Lisans Programı (İngilizce)",
        "BSc in Software Engineering (English)"
      ),
      duration: translate("2024 - 2029 (Beklenen)", "2024 - 2029 (Expected)"),
      desc: translate(
        "Backend geliştirmeye odaklanan bir Yazılım Mühendisliği öğrencisiyim. Bölüm müfredatı kapsamında özellikle Python, Java ve C++ ile ilgileniyorum.",
        "Software Engineering student focused on backend development, with a particular interest in Python, Java, and C++ through the department curriculum."
      ),
      descBullets: [
        translate(
          "Backend odaklı öğrenme yolu: API'ler, veritabanları ve veri işleme",
          "Backend-focused learning path: APIs, databases, and data processing"
        ),
        translate(
          "Derslerin yanında Python, Java ve C++ ile uygulamalı projelere güçlü ilgi",
          "Strong interest in Python, Java, and C++ and practical projects alongside coursework"
        )
      ]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: translate(
        "Web Scraping ve Veri İşleme",
        "Web Scraping & Data Processing"
      ),
      progressPercentage: "85%"
    },
    {
      Stack: translate(
        "Backend Geliştirme (API'ler)",
        "Backend Development (APIs)"
      ),
      progressPercentage: "80%"
    },
    {
      Stack: translate(
        "Veritabanları (MySQL / SQL)",
        "Databases (MySQL / SQL)"
      ),
      progressPercentage: "75%"
    },
    {
      Stack: translate(
        "Linux / Sunucu ve Yayınlama",
        "Linux / Server & Deployment"
      ),
      progressPercentage: "70%"
    },
    {
      Stack: translate(
        "Frontend (Bootstrap tabanlı)",
        "Frontend (Bootstrap-based)"
      ),
      progressPercentage: "50%"
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
  display: true // Set false to hide this section, defaults to true (used for header menu)
};

// Some big projects you have worked on
const bigProjects = {
  title: translate("Projeler", "Projects"),
  subtitle: translate(
    "Veri işleme ve gerçek dünya entegrasyonlarıyla geliştirdiğim web uygulamalarından bazıları",
    "Some of my web applications built with data processing and real-world integrations"
  ),
  projects: [
    {
      image: require("./assets/images/projectPharmacy.webp"),
      projectName: translate(
        "Nöbetçi Eczane API'si (Türkiye)",
        "On-duty Pharmacy API (Turkey)"
      ),
      projectDesc: translate(
        "Nöbetçi eczane verilerini herkese açık bir API üzerinden ücretsiz sunuyorum. Veriler scraping süreçleriyle toplanıp işleniyor ve JSON olarak servis ediliyor. Proje; güvenilirlik, önbellekleme ve sade API yanıtlarına odaklanıyor.",
        "I provide free on-duty pharmacy data through a public API. The data is collected and processed through scraping pipelines, then served as JSON, with a focus on reliability, caching, and clean responses."
      ),
      footerLink: [
        {
          name: translate("API Uç Noktası", "API Endpoint"),
          url: "https://api.erayefekutlu.com/eczane/<plateNumber>"
        }
      ]
    },
    {
      image: require("./assets/images/projectPharmacy.webp"),
      projectName: translate(
        "Platformlar Arası Nöbetçi Eczane Uygulaması (Flutter)",
        "Cross-platform On-duty Pharmacy App (Flutter)"
      ),
      projectDesc: translate(
        "Nöbetçi eczaneleri bulmaya yönelik Flutter tabanlı, platformlar arası bir uygulama. Yapay zekâ desteğiyle geliştirildi; uygulama yapısı, veri entegrasyonu ve genel geliştirme akışını ben yönettim. Henüz yayımlanmadı.",
        "A cross-platform Flutter app for finding on-duty pharmacies. Built with AI assistance; I handled the app structure, data integration, and overall implementation flow. It has not been published yet."
      ),
      footerLink: [
        {
          name: translate("Kaynak Kod (GitHub)", "Source Code (GitHub)"),
          url: "https://github.com/erayefekutlu/flutter-pharmacy-app"
        }
      ]
    },
    {
      image: require("./assets/images/earthquake.webp"),
      projectName: translate(
        "Son Depremler – Türkiye Anlık Deprem Verisi",
        "Recent Earthquakes – Real-time Turkey Earthquake Data"
      ),
      projectDesc: translate(
        "AFAD ve Kandilli verilerini kullanan gerçek zamanlı deprem bilgi uygulaması. Sismik verileri dinamik olarak çekip sunarak kullanıcıların Türkiye'deki son depremleri takip etmesini sağlıyor.",
        "A real-time earthquake information web app using AFAD and Kandilli data. It dynamically fetches and presents seismic data so users can track recent earthquakes across Turkey."
      ),
      footerLink: [
        {
          name: translate("Canlı Site", "Live Site"),
          url: "https://sondepremler.pages.dev/"
        },
        {
          name: translate("GitHub Deposu", "GitHub Repository"),
          url: "https://github.com/erayefekutlu/son-depremler"
        }
      ]
    },
    {
      image: require("./assets/images/superlig.webp"),
      projectName: translate(
        "Süper Lig Şampiyonluk Hesaplayıcı",
        "Süper Lig Championship Calculator"
      ),
      projectDesc: translate(
        "Türkiye Süper Lig puan tablosunu takip etmeyi ve takım sıralamaları ile istatistiklerine göre şampiyonluk senaryolarını incelemeyi sağlayan etkileşimli web uygulaması.",
        "An interactive web app for tracking the Turkish Süper Lig table and exploring championship scenarios based on team standings and statistics."
      ),
      footerLink: [
        {
          name: translate("Canlı Site", "Live Site"),
          url: "https://superlig.demosoftware.com.tr/"
        }
      ]
    }
  ],
  display: true
};

// Achievement & Certification Section

const achievementSection = {
  title: emoji(
    translate(
      "Başarılar ve Sertifikalar 🏆",
      "Achievements & Certifications 🏆"
    )
  ),
  subtitle: translate(
    "Yazılım geliştirme, güvenlik ve teknoloji odaklı doğrulanabilir sertifika ve eğitimler",
    "Verified certifications and trainings focused on software development, security, and technology"
  ),

  achievementsCards: [
    {
      title: translate(
        "BTK Akademi Hackathon 2026",
        "BTK Akademi Hackathon 2026"
      ),
      subtitle: translate(
        "BTK Akademi Hackathon 2026'da yapay zeka destekli fon fiyat tahmin projesiyle finale kaldım. Proje, finansal verileri işleyip tahminler üreten bir web uygulaması olarak tasarlandı.",
        "BTK Akademi Hackathon 2026 finalist with an AI-powered fund price prediction project. The project was designed as a web application that processes financial data and generates predictions."
      ),
      image: require("./assets/images/hackathon.webp"),
      imageAlt: "BTK Akademi Hackathon 2026",
      footerLink: [
        {
          name: translate("Sertifikayı Görüntüle", "View Certificate"),
          url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=2O4bhJw8VD1"
        },
        {
          name: translate("Linkedin'de görüntüle", "View on LinkedIn"),
          url: "https://www.linkedin.com/posts/erayefekutlu_btkakademi-hackathon-fintech-ugcPost-7468762991488884738-Sy8e/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7468763151652577280&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAFOuNxIBfRI9L5TxbWOMvO28htu_n25gujs"
        }
      ]
    },
    {
      title: translate(
        "BTK Akademi –  Teknoloji Eğitimleri",
        "BTK Akademi – Software & Technology Trainings"
      ),
      subtitle: translate(
        "BTK Akademi'nin yazılım geliştirme ve teknik temelleri kapsayan birden fazla sertifikalı eğitimini tamamladım.",
        "Completed multiple certified BTK Akademi trainings covering software development and technical foundations."
      ),
      image: require("./assets/images/btk.webp"),
      imageAlt: "BTK Akademi",
      footerLink: [
        {
          name: translate(
            "HTML5 ile Web Geliştirme",
            "Web Development with HTML5"
          ),
          url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=dx1hA7DOpE"
        },
        {
          name: translate(
            "Veritabanı Saldırıları ve Veritabanı Güvenliği",
            "Database Attacks and Database Security"
          ),
          url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=qKrhmAnGM8"
        },
        {
          name: "PHP",
          url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=qKrhmg1ZDD"
        },
        {
          name: "JAVA ile Programlamaya Giriş",
          url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=qKrheo2oKm"
        }
      ]
    },
    {
      title: translate("Vodafone Yaz Kampüsü", "Vodafone Summer Campus"),
      subtitle: translate(
        "Vodafone & Anbean iş birliğiyle düzenlenen yaz kampüsünde yazılım geliştirme, büyük veri ve yapay zekâ konularında eğitim aldım.",
        "Vodafone Türkiye • Skills: Software Development, Big Data & Artificial Intelligence"
      ),
      image: require("./assets/images/vodafone.webp"),
      imageAlt: "Vodafone",
      footerLink: [
        {
          name: translate("Sertifikayı Görüntüle", "View Certificate"),
          url: "https://anbeankampus.co/sertifika/aa753c1e-ef1e-41c9"
        },
        {
          name: translate("Linkedin'de görüntüle", "View on LinkedIn"),
          url: "https://www.linkedin.com/posts/erayefekutlu_eray-efe-kutlu-vodafone-yaz-kamp%C3%BCs%C3%BC-ugcPost-7476363839136256000-ok7P/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7476363840511741952&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAFOuNxIBfRI9L5TxbWOMvO28htu_n25gujs"
        }
      ]
    },
    {
      title: translate(
        "Yazılım Teknolojileri ve Yapay Zekâ",
        "Software Technologies and Artificial Intelligence"
      ),
      subtitle: translate(
        "GEN Academy • Yetenekler: Yazılım Geliştirme, Yapay Zekâ",
        "GEN Academy • Skills: Software Development, Artificial Intelligence"
      ),
      image: require("./assets/images/genacademy.webp"),
      imageAlt: "GEN Academy",
      footerLink: [
        {
          name: translate("Sertifikayı Görüntüle", "View Certificate"),
          url: "https://globallycheck.com/CertificateRepo/GEND7222724.jpg"
        }
      ]
    },

    {
      title: translate(
        "Yazılım Teknolojileri ve Yapay Zekâ",
        "Software Technologies and Artificial Intelligence"
      ),
      subtitle: translate(
        "GEN Academy • Yetenekler: Yazılım Geliştirme, Yapay Zekâ",
        "GEN Academy • Skills: Software Development, Artificial Intelligence"
      ),
      image: require("./assets/images/genacademy.webp"),
      imageAlt: "GEN Academy",
      footerLink: [
        {
          name: translate("Sertifikayı Görüntüle", "View Certificate"),
          url: "https://globallycheck.com/CertificateRepo/GENDDC63ED8.jpg"
        }
      ]
    },
    {
      title: translate(
        "Staj Fırsatları Zirvesi",
        "Internship Opportunity Summit"
      ),
      subtitle: translate(
        "Öğrenci Kariyeri • Yetenekler: Dijital Pazarlama",
        "Öğrenci Kariyeri • Skills: Digital Marketing"
      ),
      image: require("./assets/images/ogrenciKariyeri.webp"),
      imageAlt: "Öğrenci Kariyeri",
      footerLink: [
        {
          name: translate("Sertifikayı Görüntüle", "View Certificate"),
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
          name: translate("Sertifikayı Görüntüle", "View Certificate"),
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
  title: translate("Özgeçmiş", "Resume"),
  subtitle: translate(
    "Özgeçmişimi indirebilirsiniz",
    "Feel free to download my resume"
  ),
  display: false
};

const contactInfo = {
  title: emoji(translate("İletişime Geçin ☎️", "Contact Me ☎️")),
  subtitle: translate(
    "Bir proje hakkında konuşmak ya da sadece merhaba demek mi istiyorsunuz? E-posta kutum herkese açık.",
    "Would you like to discuss a project or just say hi? My inbox is open to everyone."
  ),
  email_address: "my@erayefekutlu.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  uiText,
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
