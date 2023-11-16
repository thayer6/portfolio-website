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
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Casey Thayer",
  title: "Casey Thayer",
  subTitle: emoji(
    "Lead Engineer - Zelus Analytics"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1sRDcxCKhA7jfGqF72_IqXje28fdcDVvx/view?usp=drive_link", // TODO: enter google drive link
  // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thayer6",
  linkedin: "https://www.linkedin.com/in/casey-thayer/",
  gmail: "casey.thayer6@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "",
  skills: [
    emoji(
      "⚡ I build, automate, and deploy quantitative models to help NBA teams compete and win championships"
    ),
    emoji("⚡ I'm a co-organizer of the Women in Sports Data Symposium, a game-changing initiative to amplify women's voices in sports analytics across the technical spectrum "),
    emoji(
      "⚡ When I'm not tapping away on my keyboard you can find me on the ski slopes, running with my dog, playing sports or watching my favorite teams play:"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "r",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "c#",
      fontAwesomeClassname: "fas fa-hashtag"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "google cloud platform",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "apache airflow",
      fontAwesomeClassname: "fas fa-fan"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
  ],
  favoriteSports: [
    {
      team: "Arsenal FC",
      fontAwesomeClassname: "fas fa-futbol"
    },
    {
      team: "Denver Nuggets",
      fontAwesomeClassname: "fas fa-basketball-ball"
    },
    {
      team: "USWNT",
      fontAwesomeClassname: "fas fa-futbol"
    },
    {
      team: "Seattle Storm",
      fontAwesomeClassname: "fas fa-basketball-ball"
    },
    {
      team: "Denver Broncos",
      fontAwesomeClassname: "fas fa-football-ball"
    },
    {
      team: "Colorado Buffaloes",
      fontAwesomeClassname: "fas fa-football-ball"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Washington",
      logo: require("./assets/images/uw-logo-white.png"),
      subHeader: "Data Science Certificate",
      duration: "September 2018 - June 2019",
    },
    {
      schoolName: "University of Puget Sound",
      logo: require("./assets/images/ups-logo.jpeg"),
      subHeader: "BSc: Molecular & Cellular Biology | Minor: Mathematics",
      duration: "August 2010 - May 2014",
    }
  ]
};

// Accomplishments Section

const accomplishmentInfo = {
  display: false, // Set false to hide this section, defaults to true
  category: [
    {
      name: "Technical",
      logo: require("./assets/images/code.avif"),
      descBullets: [
        "bullet 1",
        "",
        "",
        "",
      ]
    },
    {
      name: "Leadership",
      logo: require("./assets/images/leadership.jpeg"),
      descBullets: [
        "bullet 1",
        "",
        "",
        "",
      ]
    }
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer",
      company: "Zelus Analytics",
      companylogo: require("./assets/images/zelus-logo.jpeg"),
      date: "Oct 2021 – Aug 2023",
      desc: "Built sports intelligence platforms by creating, automating, and deploying quantitative models to help professional sports teams compete and win championships"
    },
    {
      role: "Data Engineer / Scientist",
      company: "Bristol Myers Squibb",
      companylogo: require("./assets/images/bms-hand-logo.png"),
      date: "Mar 2020 – Oct 2021",
      desc: "Established and implemented custom software to optimize data pipelines for teams developing & commercializing CAR-T cell therapies"
    },
    {
      role: "Senior Research Associate",
      company: "Juno Therapeutics",
      companylogo: require("./assets/images/juno-little-logo.jpeg"),
      date: "Apr 2017 – Mar 2020",
      desc: "Designed and executed lab experiments to create manufacturing processes for CAR-T cell therapy products"
    },
    {
      role: "Research Technician I-II",
      company: "Fred Hutch Cancer Research Center",
      companylogo: require("./assets/images/fred-hutch-logo.png"),
      date: "Jan 2015 – Apr 2017",
      desc: "Contributed to a cutting-edge flow cytometry laboratory in supporting global vaccine trials and innovating novel methods to drive HIV vaccine research"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// current role
const currentRoles = {
  display: true, // Set it to true to show currentRoles Section
  roles: [
    {
      role: "Engineering Lead",
      company: "Zelus Analytics",
      companylogo: require("./assets/images/zelus-logo.jpeg"),
      date: "August 2023 – Present",
      desc: "",
      descBullets: [
        "Lead the system design, technical development, and product delivery of the NBA intelligence platform",
        "Design and implement company-wide engineering architecture, driving improvements across multiple sport intelligence platforms",
        "Collaborate with product and data science teams to define and manage implementation, validation, and deployment of quantitative models",
        "Work closely with partner teams to refine our platform and provide the optimal value for their needs",
      ]
    },
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Community Impact",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/women-in-sports-data.png"),
      projectName: "Women in Sports Data",
      projectDesc: "Co-Organizer",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://womeninsportsdata.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sia-logo.jpeg"),
      projectName: "Social Impact Analytics Institute",
      projectDesc: "[Former] Non-Profit Founder, Senior Data Scientist",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Professional Contributions",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "🗣️ The Power of Data in Player Performance",
      subtitle: "Moderator - Women in Sports Data 2023",
      url: "",
    },
    {
      title: "🎙️ World Cup Quarterfinals (with Arielle Dror)",
      subtitle: "Guest - The Double Pivot",
      url: "https://open.spotify.com/episode/52r1dKhCgBUi1QNHrxdzAv?si=aEIswF0FQ_2dyEgsTImydw",
    },
    {
      title: "🗣️ Agile Infrastructure Used To Deploy ML Models For NBA Teams",
      subtitle: "Technical Talk - WiDS NYC @ Buzzer",
      url: "https://www.youtube.com/watch?v=ETnbTTQyTH8&t=7431s",
    },
    {
      title: "📝 Publication in Journal of Clinical Investigation Insights",
      subtitle: "3rd Author, 2022",
      url: "https://pubmed.ncbi.nlm.nih.gov/35803696/",
    },
    {
      title: "🗣️ Software Engineering for Sports Analytics",
      subtitle: "Panelist - Women in Sports Data 2022",
      url: "",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "",
  email_address: "casey.thayer6@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "casey_thayer_", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
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
  currentRoles,
  bigProjects,
  accomplishmentInfo,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
