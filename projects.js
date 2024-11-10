const fs = require('fs');

let source = [
  {
    "title": "Pullscription websites",
    "technologies": ["Nuxt", "Vue", "Typescript", "Vitest", "Auth0", "Docker", "Nginx", "Matomo", "Stripe", "Blogger"],
    "level": "normal",
    "include": ["Research", "Job"],
    "loc": {
      "pss-images-and-config": {
        "Contributes": {
          "loc": 35,
        },
        "Shell Script": 334,
        "SQL": 49,
        "Markdown": 55,
        "Properties": 87,
        "HTML": 15
      },
      "web": {
        "Contributes": {
          "loc": 300,
        },
        "vue": 1340,
        "TypeScript": 217,
        "CSS": 174,
        "YAML": 103,
        "Markdown": 76,
        "JavaScript": 26
      },
      "training": {
        "HTML": 1525,
        "JavaScript": 152,
        "vue": 1480,
        "TypeScript": 131,
        "JSON": 98,
        "Markdown": 46,
        "JSON with Comments": 15,
        "XML": 2
      },
      "blog": {
        "Contributes": {
          "loc": 30,
        },
        "Blogger template language": 4713
      }
    },
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
    "loc": {
      "ci-main": {
        "JavaScript": 499,
        "JavaScript JSX": 247,
        "HTML": 11,
        "CSS": 8
      },
      "ci-phone": {
        "JavaScript": 348,
        "CSS": 53,
        "Markdown": 71,
        "HTML": 44,
        "YAML": 21,
        "XML": 1
      },
      "ciinfo": {
        "JavaScript": 380,
      }
    },
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
    "loc": {
      "electron": {
        "JavaScript": 470,
        "JavaScript JSX": 223,
        "CSS": 13,
        "HTML": 14,
        "Markdown": 1
      }
    },
    "year": 2024,
    "description": ["An Electron-based markdown editor designed with basic operations like reading from and writing to disk, and a floating menu for easy access to titles and editing them, packaged for multiple platforms.",
      "Frontend developed with React, featuring a custom-built lexer and parser for markdown; backend implemented in JavaScript to handle file reading and writing from local storage."]
  },
  {
    "title": "Cue Hub",
    "technologies": ["React", "Firebase", "Python", "Flask", "Daily.js", "GPTs"],
    "include": ["Research", "Job"],
    "level": "sub",
    "loc": {
      "client": {
        "JavaScript JSX": 4126,
        "CSS": 221,
        "HTML": 106,
        "TypeScript JSX": 134,
        "Python": 45,
        "JavaScript": 36,
        "YAML": 32,
        "Markdown": 11
      },
      "server": {
        "Python": 45,
        "JavaScript": 100
      }
    },
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
    "loc": {
      "final-pairing": {
        "JavaScript": 798,
        "Markdown": 43,
        "Python": 47
      },
      "final-source-fetch": {
        "JavaScript": 205,
        "Python": 73,
        "Batch": 13
      },
      "published": {
        "JavaScript": 100,
        "HTML": 300,
      }
    },
    "year": 2024,
    "description": [
      "Developed a text-based algorithm in Node.js to identify matched pairs between any two videos, paired with a concurrent pool management tool to fully leverage a multicore cloud server, surpassing any existing video matching algorithms in internal tests.",
      "Created an anonymous rating system with a front end built using pure HTML and JS, and a RESTful API backend deployed on Cloudflare Workers as an intermediary server for data recording. With the rating system, users can manually compare two randomly selected matched videos from a pool, manually label any bias for analysis."
    ]
  },
  {
    "title": "HealthCare Chatbot",
    "technologies": ["Expo", "Worker", "GitHub", "Jest", "Vitest", "Figma"],
    "include": ["Research", "Job", "Web"],
    "level": "normal",
    "year": 2024,
    "loc": {
      "chatServer": {
        "JavaScript": 506,
        "Markdown": 121,
        "YAML": 62,
        "JSON": 43
      },
      "HealthBot": {
        "JavaScript": 2106,
        "JSON": 169,
        "YAML": 178,
        "Markdown": 34,
        "Properties": 3
      },
      "azure-server": {
        "Contributes": {
          "loc": 10,
        },
        "JavaScript": 65,
        "Markdown": 25,
      }
    },
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
    "include": ["Research", "Job", "Java"],
    "level": "normal",
    "loc": {
      "src": {
        "Java": 1161,
        "JSP": 86,
        "XML": 57
      }
    },
    "year": 2023,
    "description": [
      "Developed an interactive shell using JSP and Servlets deployed on Azure, enabling students to run Java source code online without accessing the source code, while supporting over 30 users simultaneously. The backend featured a custom connection session management utility to optimize resource usage and ensure seamless session handling."
    ]
  },
  {
    "title": "Java code style checker on gradescope",
    "technologies": ["Shell", "Java", "Docker"],
    "include": ["Research"],
    "level": "sub",
    "loc": {
      "Dockerfile": {
        "Shell Script": 30
      },
      "plugin": {
        "Java": 3142,
        "YAML": 285,
        "Properties": 90,
        "Batch": 92,
        "Markdown": 48
      }
    },
    "year": 2023,
    "description": ["Modified the CS61B version of the code style checker for IntelliJ.",
      "Used a process to run a super Java program that captures and analyzes the output."]
  },
  {
    "title": "Eyetracker Monitoring Platform",
    "technologies": ["C\\#", "JS", "Tampermonkey", "Chrome", "WebSockets", "VSCode"],
    "include": ["Research", "Job"],
    "level": "normal",
    "loc": {
      "2024-back": {
        "C\\#": 1705,
        "XML": 108
      },
      "2024-front": {
        "JavaScript": 543,
        "Markdown": 280
      },
      "2023-back": {
        "C\\#": 1649,
        "XML": 169
      },
      "2023-extension": {
        "JavaScript": 837,
        "HTML": 78
      },
      "vscode": {
        "Contributes": {
          "loc": 100,
        },
        "TypeScript": 1294353,
        "JavaScript": 43506,
        "CSS": 27261,
        "Rust": 17151,
        "HTML": 7541,
        "YAML": 6509,
        "XML": 2626,
        "Code Snippets": 1661,
        "Shell Script": 2000,
        "Markdown": 2156,
        "Batch": 616,
        "SCSS": 356,
        "PowerShell": 303,
        "CUDA C++": 150,
        "Groovy": 220,
        "Python": 98,
        "C++": 92,
        "Makefile": 96,
        "Diff": 59,
        "Perl": 77,
        "reStructuredText": 99,
        "Less": 64,
        "Handlebars": 54,
        "PHP": 60,
        "TypeScript JSX": 44,
        "Clojure": 52,
        "Razor": 46,
        "Objective-C++": 53,
        "Objective-C": 53,
        "CoffeeScript": 44,
        "Pug": 30,
        "C": 30,
        "C#": 32,
        "Ruby": 46,
        "JavaScript JSX": 35,
        "Java": 43,
        "Julia": 27,
        "Go": 26,
        "Docker": 30,
        "Raku": 28,
        "TeX": 20,
        "LaTeX": 20,
        "Visual Basic": 25,
        "BibTeX": 23,
        "Dart": 19,
        "ShaderLab": 15,
        "Swift": 14,
        "F#": 18,
        "R": 25,
        "HLSL": 13,
        "Lua": 12,
        "Log": 9,
        "Git Rebase Message": 16,
        "Ini": 10,
        "SQL": 6,
        "Git Commit Message": 13
      },
      "Chromium": {
        "Contributes": {
          "loc": 100,
        },
        "Chromium": 33027478
      }
    },
    "year": [2023, 2024],
    "description": [
      "Developed a universal user interaction tracking platform that includes eye movement tracking during coding in VSCode. Integrated the Tobii Eye Tracker 5 to link eye movement data with in-editor events while ensuring compliance with legal requirements.",

      "The 2023 edition tracks specific window appearances and user interactions in the web-based version of VSCode. The frontend is built with JavaScript and deployed as a Chrome extension, while the backend is developed in C\\#. Reduced the latency of communication between eye tracker and VSCode to one tenth compared with existed solution, tested over 80 hours with 33 users.",

      "The 2024 edition tracks the entire window arrangement and user interactions in VSCode, with the ability to define and track additional events as needed. The frontend is built with JavaScript and deployed as a script in VSCode, while the backend is developed in C\\#. Both ends communicate using WebSockets."
    ]
  },
  {
    "title": "Interactive Haskell Game",
    "technologies": ["Haskell"],
    "include": ["Research"],
    "loc": {
      "src": {
        "Haskell": 652
      }
    },
    "level": "normal",
    "year": 2023,
    "description": [
      "Used the Brick library in Haskell to design and build a simple game for Conway's Game of Life."
    ]
  },
  {
    "title": "Shopping store",
    "technologies": ["Next, React"],
    "include": ["Research", "Job"],
    "loc": {
      "src": {
        "Contributes": {
          "loc": 720,
        },
        "TypeScript JSX": 5808,
        "TypeScript": 2287,
        "Markdown": 354,
        "JSON": 70,
        "CSS": 83,
        "JavaScript": 65,
        "JSON with Comments": 32,
        "XML": 2
      }
    },
    "level": "normal",
    "year": 2023,
    "description": [
      "A multi page application built with react and Next framework."
    ]
  },
  {
    "title": "VSCode Experiment helper",
    "technologies": ["Typescript", "Fiddler"],
    "include": ["Research", "Job"],
    "level": "normal",
    "loc": {
      "checking-correctness": {
        "TypeScript": 284,
        "Markdown": 60,
        "JavaScript": 48,
        "JSON with Comments": 17
      },
      "browser-plugin": {
        "Contributes": {
          "loc": 30,
        },
        "TypeScript": 955,
        "JSON": 189,
        "CSS": 187,
        "Markdown": 192,
        "JavaScript": 119,
        "JSON with Comments": 47
      }
    },
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
    "loc": {
      "checking-correctness": {
        "JavaScript": 151,
        "YAML": 40,
        "GAMS": 143,
      },
      "python-version": {
        "Contributes": {
          "loc": 3,
        },
        "Python": 220,
      }
    },
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
    "loc": {
      "Javascript": {
        "JavaScript": 220,
      }
    },
    "description": [
      "Developed and deployed a Tampermonkey script to expedite grading by suggesting scores based on length, N-gram analysis, and topic relevance for dictation questions, using the TensorFlow. The entire system operates locally."
    ]
  },
  {
    "title": "Screen Reader",
    "technologies": ["JavaScript", "Tampermonkey"],
    "include": ["Research"],
    "level": "normal",
    "loc": {
      "Javascript": {
        "JavaScript": 180,
      }
    },
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
    "loc": {
      "email-covid-forward": {
        "JavaScript": 515,
      },
      "Daily-report": {
        "JavaScript": 742,
      }
    },
    "year": 2021,
    "description": [
      "Automatically scraped COVID data from various official sites, analyzed each site to extract relevant data, and delivered filtered results to subscribed users daily. This process was automated using Node.js with Puppeteer on a server, simulating user behavior when visiting websites, with the help of GitHub Actions and a cron scheduler."
    ]
  },
  {
    "title": "Financial Organization App",
    "technologies": ["Expo", "NLP.js"],
    "include": [],
    "level": "normal",
    "year": 2020,
    "loc": {
      "App": {
        "JavaScript": 1991,
        "YAML": 22,
        "Markdown": 19
      }
    },
    "description": [
      "Developed an app to help individuals organize expenses and income using voice interaction and simple chat, utilizing a local natural language understanding engine for Capital One.",
      "Built with Expo, packaged, and tested for both Android and iOS, the app enables users to sync data between devices via JSON import/export, with all data stored locally for privacy."
    ]
  },
  {
    "title": "Financial Tutoring website and app",
    "technologies": ["HTML", "Ejs", "Worker", "JavaScript", "echarts", "Expo", "NLP"],
    "include": ["Research", "Job", "Web", "Java"],
    "level": "normal",
    "loc": {
      "pointing-system": {
        "JavaScript": 494
      },
      "Quiz": {
        "JavaScript": 1376
      },
      "Main": {
        "Contributes": {
          "loc": 4600,
        },
        "JavaScript": 16,
        "HTML": 5231,
        "XML": 73
      },
      "App": {
        "JavaScript": 1991,
        "YAML": 22,
        "Markdown": 19
      },
      "Wiki": {
        "Contributes": {
          "loc": 300,
        },
        "JavaScript": 15655,
        "Less": 8435,
        "HTML": 2032,
        "Markdown": 903,
        "YAML": 800,
        "CSS": 671,
        "XML": 414,
        "Shell Script": 4
      },
      "Passage": {
        "Contributes": {
          "loc": 300,
        },
        "JavaScript": 15655,
        "Less": 8435,
        "HTML": 2011,
        "Markdown": 1207,
        "YAML": 821,
        "CSS": 671, "XML": 414, "Shell Script": 20
      }

    },
    "year": 2020,
    "description": [
      "Designed and led a team to develop a static financial education website for Capital One. The site includes interactive learning tools, such as quizzes and a self-built, stateless learning progress tracking system. It also has various utilities, including a personal expense management app.",
      "Created detailed implementation guidance for group members and a user manual for the website and learning content. Build CI/CD pipelines and deployed them with GitHub Actions.",
      "Built front end using embedded JavaScript for the main site and HTML with JavaScript for utility tools. Developed backend with JavaScript and deployed on Cloudflare Workers to handle requests, including the encryption and decryption of learning stage information using AES and crypto and a dynamically rendered quiz system. Users can download their encrypted learning progress and upload it to decode and resume learning, or use the same browser to continue learning. No data is stored on the server considering privacy and budget.",
      "Developed a cross-platform personal finance app for Capital One that enables users to manage expenses and income via voice and chat interfaces using a local NLU engine, built with Expo for Android and iOS, tested and packaged for both platforms; Designed with JSON import/export for secure, local-only data storage and syncing.",
      "Followed Agile methodologies, discussed with mentors and communicated with stakeholders to understand their needs and software development stages."
    ]
  },
  {
    "title": "Energy Simulator",
    "technologies": ["HTML", "WebGL", "JS", "Java", "JavaFX", "Three.js", "echarts"],
    "include": ["Research", "Job", "Java"],
    "loc": {
      "energy": {
        "HTML": 8139
      },
      "energy-java": {
        "Java": 1861,
        "XML": 373,
        "Markdown": 4
      }
    },
    "level": "normal",
    "year": 2020,
    "description": [
      "Designed and developed a web-based energy simulation tool utilizing jsLPSolver to optimize energy sources based on historical data and project future trends via linear regression.", "Presented results on a static website built with HTML and JavaScript, featuring a 3D energy system simulation using A-Frame and Three.js, with AR functionalities via QR codes, dynamic data visualization, and lightweight localization. Ensured full support for modern browsers and partial support for IE 11.",
      "Reimplemented most functionalities in JavaFX without 3D representation."
    ]
  },
  {
    "title": "A JavaFx program",
    "technologies": ["Java", "JavaFX"],
    "include": [],
    "level": "normal",
    "loc": {
      "Main": {
        "Java": 5439
      },
    },
    "year": 2020,
    "description": [
      "Developed a Java GUI program to manage and look up data among different hypothetical farms by reading CSVs."
    ]
  },
  {
    "title": "Small course projects",
    "technologies": [],
    "include": [],
    "level": "normal",
    "loc": {
      "react_native2_beta": {
        "JavaScript": 2464
      },
      "react1-beta-ShaokangJiang": {
        "JavaScript": 832,
        "HTML": 39
      },
      "js-beta": {
        "JavaScript": 15,
        "HTML": 375
      },
      "react2-beta": {
        "JavaScript": 1590,
        "HTML": 39
      },
      "react2-beta": {
        "JavaScript": 397,
      },
      "CS115Activity2-master": {
        "Java": 3073
      },
      "CS115Activity3-master": {
        "Java": 126
      },
      "CS115Competition2-master": {
        "Java": 960
      },
      "cs351": {
        "C": 4066,
        "Makefile": 221,
        "Perl": 221,
        "C++": 273,
        "Shell Script": 102,
        "Python": 139,
      },
      "2011": {
        "Turbo Pascal": 370,
      },
      "2016": {
        "vb6.0": 180,
        "Quick Basic": 450,
      }
    },
    "year": 2020,
    "description": [
      "Still exclude any assignment."
    ]
  },
  {
    "title": "AutoCommenter",
    "technologies": ["Java", "JFrame"],
    "include": ["Research", "Job", "Java"],
    "level": "normal",
    "year": 2019,
    "loc": {
      "Main": {
        "Java": 1263
      },
    },
    "description": [
      "Designed and developed a local utility program in Java with JFrame to analyze Java code on preset rules and semi-automatically add comments by integrating user input through typing or voice, with voice recognition powered by the iFlyTek API and translation supported by the Baidu Translation API."
    ]
  },
  {
    "title": "Seat Arrangement Problem",
    "technologies": ["GAMS", "Cplex"],
    "include": ["Research"],
    "level": "sub",
    "loc": {
      "Main": {
        "GAMS": 200,
        "Python": 100
      }
    },
    "year": 2019,
    "description": [
      "Decision-making script that solves a problem about how to arrange seats in an imaginary library",
      "Process data and perform optimization using GAMS, and use Cplex to solve the problem. Demostrate teh result using Python and Mathplotlib."
    ]
  },
  {
    "title": "HateFate Website",
    "technologies": ["HTML", "Java Server Page", "SQL", "Java", "Servlets"],
    "include": ["Research", "Job", "Java", "Web"],
    "level": "normal",
    "year": 2017,
    "loc": {
      "Main": {
        "JSP": 4495,
        "Java": 2068,
        "Markdown": 37,
        "XML": 13
      }
    },
    "description": [
      "Led a four-person team in developing a social networking website that connects users based on shared dislikes, with features including login, email-verified signup, and user pairing. Utilized Material design to create the interface.",
      "Developed the frontend using HTML and JavaServer Pages (JSP) and built the backend with JSP and SQL for data storage. Deployed on the Azure cloud with an Azure SQL database.",
      "Developed multiple login methods and utilized cookies to store user information, enabling automatic session recovery. Designed and integrated a custom mail system to handle email verification, password resets, and new match notifications using SMTP.",
      "Secured the website with SSL encryption and employed a combination of MD5, public/private key encryption, and AES for data security during page forwarding and email verification.",
    ]
  },
  {
    "title": "CS 425 Website",
    "technologies": ["HTML", "Java Server Page", "SQL", "Java"],
    "include": [],
    "level": "normal",
    "year": 2018,
    "loc": {
      "Main": {
        "JSP": 9432,
        "Java": 119,
        "Markdown": 95,
        "XML": 2
      }
    },
    "description": [
      "Led a four-person team in developing a social "
    ]
  },
  {
    "title": "Eye tracker analysis",
    "technologies": ["HTML", "Java Server Page", "SQL", "Java"],
    "include": [],
    "level": "normal",
    "year": 2023,
    "loc": {
      "Main": {
        "JavaScript": 1587,
        "Java": 505,
        "Markdown": 61,
      }
    },
    "description": [
      "Led a four-person team in developing a social "
    ]
  }, {
    "title": "Bitcoin Research",
    "technologies": [],
    "include": [],
    "level": "normal",
    "year": 2018,
    "loc": {
      "Main": {
        "Contributes": {
          "loc": 300,
        },
        "C": 237691,
        "C++": 178062,
        "XML": 14471,
        "C#": 14352,
        "PHP": 3638,
        "Makefile": 2685,
        "Log": 1084,
        "Python": 1168,
        "Shell Script": 990,
        "YAML": 509,
        "HTML": 276,
        "Perl": 298,
        "Markdown": 234,
        "CSS": 191,
        "BibTeX": 58,
        "Properties": 54,
        "Ruby": 39,
        "Ini": 27,
        "Docker": 23,
        "JSON": 14
      }
    },
    "description": [
      "Integrate bitcoin into a customized minichain "
    ]
  }
]

// list all technology used
// let technologies = source.reduce((acc, project) => {
//   return project.technologies.forEach(tech => acc.add(tech)), acc;
// }, new Set());

// console.log(technologies);

// For all entries, sum up the code wrote based on programming language, if an entry contains "Contribute", ignore its content but count as a special pl
let totalLOC = source.reduce((acc, project) => {
  if (project.loc) {
    let mylines = 0;
    for (let key of Object.keys(project.loc)) {
      if (Object.keys(project.loc[key]).includes("Contributes")) {
        let open = project.loc[key];
        let loc = Object.keys(open).filter(a => a !== "Contributes").reduce((acc, key) => acc + open[key], 0);
        acc["Special"].push({
          "title": project.title + "-" + key,
          "loc": loc,
          "Contributed": open["Contributes"].loc
        });
        mylines += open["Contributes"].loc;
        acc["Total"] += open["Contributes"].loc;
      } else {
        for (let lang in project.loc[key]) {
          if (acc[lang]) {
            acc[lang] += project.loc[key][lang];
          } else {
            acc[lang] = project.loc[key][lang];
          }
          mylines += project.loc[key][lang];
          acc["Total"] += project.loc[key][lang];
        }
      }
    }
    acc["All"].push({
      "title": project.title,
      "loc": mylines
    });
  }
  return acc;
}, { "Special": [], "Total": 0, "All": [] });
// sort totalloc by the value
//sort totalLOC["Special"] object by its .loc
totalLOC["Special"] = totalLOC["Special"].sort((a, b) => b.loc - a.loc);
totalLOC["All"] = totalLOC["All"].sort((a, b) => b.loc - a.loc);
totalLOC = Object.entries(totalLOC).sort((a, b) => b[1] - a[1]);
// sort totalloc special by loc
// Write the result to a file
fs.writeFile('./LOC.json', JSON.stringify(totalLOC, null, 2), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('LOC.json file has been created!');
});

// list the projext that I contributed to 



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


fs.writeFile('./Projects_webOrSystem.tex', convertToLatex(filter(source, ["normal", "sub"], "Web", false)), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Projects.tex file has been created!');
});

fs.writeFile('./Projects_JavaOr.tex', convertToLatex(filter(source, ["normal", "sub"], "Java", false)), (err) => {
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
