const fs = require('fs');

let source = [
  {
    "title": "Pullscription websites",
    "technologies": ["Nuxt", "Vue", "Typescript", "Vitest", "Auth0", "Docker", "Nginx", "Matomo", "Stripe", "Blogger"],
    "level": "normal",
    "include": ["Research", "Job"],
    "year": 2024,
    "description": [
      "Architected and implemented various components of a modern comic book shopping site, including the shopper and supplier interfaces, and a blog. Configured CI/CD pipelines using GitHub Actions and a cloud server with Nginx.",
      "Discussed and determined the system architecture, selected dependencies, and aimed to build a maintainable, easily migratable codebase.",
      "Integrated Stripe payment solutions and Auth0, and deployed and integrated Matomo tracking for analytics. Collaborated with the design team to develop the blog using Blogger's template language and embedded its content into both the website and iOS app. Built tests using Vitest and updated Docker for the entire system.",
    ]
  },
  {
    "title": "Workshop Manager",
    "technologies": ["Electron", "React", "Socket.io", "HTTPS", "DDNS", "GPTs", "Worker", "MailJet"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2024,
    "description": [
      "Designed and developed a 4-component workshop management system for real-time user engagement to foster idea generation and improve communication during meetings, capable of hosting at least 50 concurrent participants.",
      "Entire build To be used as a component in the Collective Intelligence-2025 conference.",
      "Pre-conference component: Created a registration system utilizing a RESTful API backend with Worker for user verification and sending invitation emails via Mailjet. The frontend was developed using a simple HTML page.",
      "In-conference Management Component: Uses DDNS to dynamically bind to a subdomain of shaokang.me. Developed with Electron as the main platform, with React for the frontend and a JavaScript backend running an HTTPS WebSocket server. The management system will communicate with and broadcast guidance to all participants with the help of GPT services for hint generation, while also updating the main screen with large-screen guidance.",
      "In-conference Client-side Ideation and Discussion Components: Both components allow participants to submit ideas in real-time during small group discussions and facilitate large group discussions on the submitted ideas in a subsequent phase. They were developed using React and Socket Client for real-time communication..",
    ]
  },
  {
    "title": "Cross platform Markdown app",
    "technologies": ["Electron", "JavaScript"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2024,
    "description": ["An Electron-based markdown editor designed with basic operations like reading from and writing to disk, and a floating menu for easy access to titles and editing them, packaged for multiple platforms.",
      "Frontend developed with React, featuring a custom-built lexer and parser for markdown; backend implemented in JavaScript to handle file reading and writing from local storage."]
  },
  {
    "title": "Cue Hub",
    "technologies": ["React", "Firebase", "Python", "Flask", "Daily.js", "GPTs"],
    "include": ["Research", "Job"],
    "level": "sub",
    "year": 2024,
    "description": [
      "Updated, redesigned, and deployed an online meeting platform with support for user communication and ideation. Provided separate interfaces for facilitators (monitors) and participants (ideators), using React for the frontend.",
      "Integrated Firebase Realtime Database for data storage, real-time cue publishing from facilitators end and message syncing between ideators. Used Daily.js for real-time meetings and transcription, and utilized prompt-engineered GPTs to provide real-time cues.",
      "Built and deployed both serverless and server-based backend services using Python with Flask and Javascript to handle audio creation as needed by the frontend.",
      "Fixed several critical bugs left by previous development teams that could exceed Firebase quota limits, improved the overall user experience, and enhanced the robustness of the entire program.",
      "Successfully conducted 60 meetings on the platform without any errors."
    ]
  },
  {
    "title": "Video matching and leaning rating system",
    "technologies": ["HTML", "JS", "Node.js", "Oracle cloud", "Worker"],
    "level": "normal",
    "include": ["Research", "Job"],
    "year": 2024,
    "description": [
      "Developed a text-based algorithm in Node.js to identify matched pairs between any two videos, paired with a concurrent pool management tool to fully leverage a multicore cloud server, surpassing any existing video matching algorithms in internal tests.",
      "Created an anonymous rating system with a front end built using pure HTML and JS, and a RESTful API backend deployed on Cloudflare Workers as an intermediary server for data recording. With the rating system, users can manually compare two randomly selected matched videos from a pool, manually label any bias for analysis."
    ]
  },
  {
    "title": "HealthCare Chatbot",
    "technologies": ["Expo", "Worker", "GitHub", "Jest", "Vitest", "Figma"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2024,
    "description": [
      "Led a team of five to create a chatbot with CI/CD pipelines using Agile methodologies. Self-delegate leadership roles when necessary. Consulted with experts in health care to understand their needs and requirements.",

      "Developed a chatbot using Expo to provide healthcare information and answer questions via a fine-turned GPT service. Backend services were built with JavaScript and deployed on Cloudflare Workers to handle user information management, session storage,  authentication and token management, using salted hashes for password storage.",

      "Learned methods for managing disputes and mediation conflicts within a team, including documenting divergence points and finding common ground. Realized the importance of communication in a team.",

      "Integrated Material Design principles and conducted unit tests using Jest for the Expo app and Vitest for the middleware server. Utilized GitHub Actions for the CI/CD pipeline."
    ]
  },
  {
    "title": "Online interactive shell",
    "technologies": ["Java Server Page", "Servlets", "Java", "Azure"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2023,
    "description": [
      "Developed an interactive shell that allows users to run Java source code online in a fully Java environment without accessing the actual source code, ideal for demonstrating command-line Java programs.",

      "The frontend was built using Java Server Page and Servlets, while the backend was developed in Java, featuring a custom-built pool management utility to manage connections, preserving resources by terminate connection at the right time. This allows multiple users to interact with the system at the same time.",

      "The entire tool was deployed on Azure under a free plan, successfully supported 30  users simultaneously."
    ]
  },
  {
    "title": "Java code style checker on gradescope",
    "technologies": ["Shell", "Java", "Docker"],
    "include": ["Research"],
    "level": "sub",
    "year": 2023,
    "description": ["Modified the CS61B version of the code style checker for IntelliJ.",
      "Used a process to run a super Java program that captures and analyzes the output."]
  },
  {
    "title": "Eyetracker Monitoring Platform",
    "technologies": ["C\\#", "JS", "Tampermonkey", "Chrome extension", "WebSockets"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": [2023, 2024],
    "description": [
      "Developed a universal user interaction tracking platform that includes eye movement tracking during coding in VSCode. Integrated the Tobii Eye Tracker 5 to link eye movement data with in-editor events while ensuring compliance with legal requirements.",

      "The 2023 edition tracks specific window appearances and user interactions in the web-based version of VSCode. The frontend is built with JavaScript and deployed as a Chrome extension, while the backend is developed in C\\#. Both ends communicate using Chrome native messaging. The system successfully ran for 80 hours of user testing with 33 different users without any issues.",

      "The 2024 edition tracks the entire window arrangement and user interactions in VSCode, with the ability to define and track additional events as needed. The frontend is built with JavaScript and deployed as a script in VSCode, while the backend is developed in C\\#. Both ends communicate using WebSockets."
    ]
  },
  {
    "title": "Interactive Haskell Game",
    "technologies": ["Haskell"],
    "include": ["Research"],
    "level": "normal",
    "year": 2023,
    "description": [
      "Used the Brick library in Haskell to design and build a simple game for Conway's Game of Life."
    ]
  },
  {
    "title": "VSCode Experiment helper",
    "technologies": ["Typescript", "Fiddler"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": [2022, 2024],
    "description": [
      "Designed and developed two VSCode extensions to monitor user interactions, upload collected data, and enhance the development experience using pure VSCode without requiring viewing any outside window.",

      "The 2022 edition introduced a CodeLens feature above each method signature in Java, enabling users to run provided test cases with a click and debug programs. 33 real users tested it, and there were no bugs or complaints.",

      "The 2024 edition modified the existed browser plugin on VSCode to support navigating between pages. Integrated Fiddler to intercept and modify requests, making it possible to browse websites within VSCode while coding."
    ]
  },
  {
    "title": "An economical computer",
    "technologies": ["Node.js", "GAMS", "Puppeteer"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2022,
    "description": [
      "Automatically scraped computer components' performance data weekly using Puppeteer, with GitHub Actions and a cron scheduler, by simulating user behavior.",

      "Used optimization with preset LP problem-solving to find the best configuration."
    ]
  },
  {
    "title": "Wise grader",
    "technologies": ["JavaScript", "TensorFlow", "Tampermonkey"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2021,
    "description": [
      "Developed and deployed a Tampermonkey script to expedite grading by suggesting scores based on length, N-gram analysis, and topic relevance for dictation questions, using the TensorFlow. The entire system operates locally."
    ]
  },
  {
    "title": "Screen Reader",
    "technologies": ["JavaScript", "Tampermonkey"],
    "include": ["Research"],
    "level": "normal",
    "year": 2019,
    "description": [
      "Designed and developed an interface using the Web Speech API to read screen content based on user-defined rules, and deployed it on Tampermonkey."
    ]
  },
  {
    "title": "Covid data report",
    "technologies": ["Node.js", "Puppeteer"],
    "include": ["Research", "Job"],
    "level": "sub",
    "year": 2021,
    "description": [
      "Automatically scraped COVID data from various official sites, analyzed each site to extract relevant data, and delivered filtered results to subscribed users daily. This process was automated using Node.js with Puppeteer on a server, simulating user behavior when visiting websites, with the help of GitHub Actions and a cron scheduler."
    ]
  },
  {
    "title": "Financial Organization App",
    "technologies": ["Expo", "NLP.js"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2020,
    "description": [
      "Developed an app to help individuals organize expenses and income using voice interaction and simple chat, utilizing a local natural language understanding engine for Capital One.",
      "Built with Expo, packaged, and tested for both Android and iOS, the app enables users to sync data between devices via JSON import/export, with all data stored locally for privacy."
    ]
  },
  {
    "title": "Financial Tutoring website",
    "technologies": ["HTML", "Embedded JavaScript", "Worker", "JavaScript", "echarts"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2020,
    "description": [
      "Designed and led a team to develop a static financial education website for Capital One. The site includes interactive learning tools, such as quizzes and a self-built, stateless learning progress tracking system. It also has various utilities, including a yearly budgeting tool.",

      "Built front end using embedded JavaScript for the main site and HTML with JavaScript for utility tools. Developed backend with JavaScript and deployed on Cloudflare Workers to handle requests, including the encryption and decryption of learning stage information using AES and crypto and a dynamically rendered quiz system. Users can download their encrypted learning progress and upload it to decode and resume learning, or use the same browser to continue learning. No data is stored on the server.",

      "Created detailed implementation guidance for group members and a user manual for the website and learning content. Integrated everything to automatically build and deploy using GitHub Actions.",

      "Followed Agile methodologies and communicated with stakeholders to understand their needs.",

      "Interacted with mentors from Capital One to discuss and understand the software development stages."
    ]
  },
  {
    "title": "Energy Simulator",
    "technologies": ["HTML", "WebGL", "JS", "Java", "JavaFX", "Three.js", "echarts"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2020,
    "description": [
      "Designed and developed a web-based energy simulation tool using jsLPSolver to optimize energy sources based on historical data and project future trends using linear regression. Demonstrated the results with a pure static website built with HTML and JavaScript, showcasing the energy usage of a hypothetical energy system in a 3D environment using WebGL and JavaScript, with full support for modern browsers and partial support for IE 11.",
      "Supports interactive 3D models using A-Frame with Three.js, AR functionalities via QR codes, dynamic data visualization, and lightweight localization.",
      "Reimplemented most functionalities in JavaFX without 3D representation."
    ]
  },
  {
    "title": "A JavaFx program",
    "technologies": ["Java", "JavaFX"],
    "include": [],
    "level": "normal",
    "year": 2020,
    "description": [
      "Developed a Java GUI program to manage and look up data among different hypothetical farms by reading CSVs."
    ]
  },
  {
    "title": "AutoCommenter",
    "technologies": ["Java", "JFrame"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2019,
    "description": [
      "Designed and developed a local utility program in Java with JFrame to analyze Java code based on preset rules and semi-automatically add comments.",
      "Integrates user input through typing or voice commands when necessary, with voice recognition powered by the iFlyTek API and translation supported by the Baidu Translation API."
    ]
  },
  {
    "title": "Seat Arrangement Problem",
    "technologies": ["GAMS", "Cplex"],
    "include": ["Research"],
    "level": "sub",
    "year": 2019,
    "description": [
      "Decision-making script that solves a problem about how to arrange seats in an imaginary library",
      "Process data and perform optimization using GAMS, and use Cplex to solve the problem. Demostrate teh result using Python and Mathplotlib."
    ]
  },
  {
    "title": "HateFate Website",
    "technologies": ["HTML", "Java Server Page", "SQL", "Java"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2017,
    "description": [
      "Led a four-person team in developing a social networking website that connects users based on shared dislikes, with features including login, email-verified signup, and user pairing. Utilized Material design to create the interface.",
      "Developed the frontend using HTML and JavaServer Pages (JSP) and built the backend with JSP and SQL for data storage. Deployed on the Azure cloud with an Azure SQL database.",
      "Developed multiple login methods and utilized cookies to store user information, enabling automatic session recovery. Designed and integrated a custom mail system to handle email verification, password resets, and new match notifications using SMTP.",
      "Secured the website with SSL encryption and employed a combination of MD5, public/private key encryption, and AES for data security during page forwarding and email verification.",
      "Achieved first place in the class project demo."
    ]
  }
]

// list all technology used
// let technologies = source.reduce((acc, project) => {
//   return project.technologies.forEach(tech => acc.add(tech)), acc;
// }, new Set());

// console.log(technologies);


/**
 * @param {Array} source
 * @param {Array} levelinfo ["normal", "sub"] 
 * @param {String} includes Job or Research
 */
function filter(source, levelinfo, includes, all = false) {
  if (all) return source;
  return source.filter(project => {
    return levelinfo.includes(project.level) && project.include.includes(includes);
  });
}

function convertToLatex(source) {

  // sort source by year
  source = source.sort((a, b) => {
    a = Array.isArray(a.year) ? a.year[0] : a.year;
    b = Array.isArray(b.year) ? b.year[0] : b.year;
    return b - a;
  });

  let formattedProjects = source.map(project => {
    let technologies = project.technologies.join(", ");
    let include = project.include.join(", ");
    let description = project.description.map(d => `\\resumeItem{${d}}`).join("\n");
    let year = Array.isArray(project.year) ? project.year.join(", ") : project.year;

    return `\\resumeProjectHeading
    {\\textbf{${project.title}} $|$ \\emph{${technologies}}}{${year}}
    \\resumeItemListStart
      ${description}
    \\resumeItemListEnd`;
  });

  let resumeContent = `\\resumeSubHeadingListStart
  ${formattedProjects.join("\n\n")}
\\resumeSubHeadingListEnd`;

  return resumeContent;
}


fs.writeFile('./Projects.tex', convertToLatex(filter(source, ["normal", "sub"], "Job", false)), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Projects.tex file has been created!');
});


fs.writeFile('./Projects_.tex', convertToLatex(filter(source, ["normal", "sub"], "Research", false)), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Projects_.tex file has been created!');
});
