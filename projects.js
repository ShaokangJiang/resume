const fs = require('fs');

let source = [
  {
    "title": "Pullscription websites",
    "technologies": ["Vue", "Vitepress", "Auth0"],
    "level": "normal",
    "include": ["Research", "Job"],
    "year": 2024,
    "description": [
      "Designed a modern comic book shopping and blog site.",
      "Integrated Stripe payment solution."
    ]
  },
  {
    "title": "Pullscription blog websites",
    "technologies": ["Vue", "Vitepress", "Auth0"],
    "level": "sub",
    "include": ["Job"],
    "year": 2024,
    "description": [
      "Designed a modern comic book shopping and blog site.",
      "Integrated Stripe payment solution."
    ]
  },
  {
    "title": "Video matching and Leaning rating system",
    "technologies": ["Cloudflare Worker", "HTML", "JS"],
    "level": "normal",
    "include": ["Research", "Job"],
    "year": 2024,
    "description": [
      "An anonymous rating system for people to compare two matched videos and provide human feedback.",
      "Designed puretext based algorithm to match two videos, outperform any existing video matching algorithm in internal tests."
    ]
  },
  {
    "title": "Workshop Manager",
    "technologies": ["Electron", "React"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2024,
    "description": [
      "Designed and built a 4-component workshop manager for real-time user engagement.",
      "Utilized Worker, GPTs, Socket, HTTPS, and DDNS."
    ]
  },
  {
    "title": "Cross platform Markdown app",
    "technologies": ["Electron", "JavaScript"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2024,
    "description": ["Built two VSCode extension to help my own experiment.", ""]
  },
  {
    "title": "Cue Hub",
    "technologies": ["React", "Firebase", "Flask"],
    "include": ["Research", "Job"],
    "level": "sub",
    "year": 2024,
    "description": [
      "Worked on and deployed an online meeting platform with support for user communication and ideation."
    ]
  },
  {
    "title": "HealthCare Chatbot",
    "technologies": ["Expo", "Worker", "GitHub", "Jest", "Vitest"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2024,
    "description": [
      "Led a group of five people to create a ChatBot with CI/CD pipelines.",
      "Integrated design principles, Jest testing, and Agile methodologies."
    ]
  },
  {
    "title": "Online interactive shell",
    "technologies": ["JSP", "Servlets", "Java"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2023,
    "description": ["Built two VSCode extension to help my own experiment.", ""]
  },
  {
    "title": "Java code style checker on gradescope",
    "technologies": ["Shell", "Java", "Docker"],
    "include": ["Research", "Job"],
    "level": "sub",
    "year": 2023,
    "description": ["Built two VSCode extension to help my own experiment.", ""]
  },
  {
    "title": "Eyetracker Monitoring Platform",
    "technologies": ["C\\#", "JS", "Tampermonkey", "Chrome extension"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": [2023, 2024],
    "description": [
      "Developed a universe monitoring platform for tracking VSCode development process.",
      "Integrated Tobii eye tracker 5."
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
    "technologies": ["Typescript"],
    "include": ["Research"],
    "level": "normal",
    "year": [2022, 2024],
    "description": ["Built two VSCode extension to help my own experiment.", ""]
  },
  {
    "title": "An economical computer",
    "technologies": ["Node.js", "GAMS", "puppeteer"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2022,
    "description": [
      "Automatically scrape computer components' performance data weekly by simulating user behaviour and use optimization to find the best configuration."
    ]
  },
  {
    "title": "Wise grader",
    "technologies": ["JavaScript", "TensorFlow", "Tampermonkey"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2021,
    "description": [
      "Developed a program to aid quicker grading by suggesting scores based on length, N-gram analysis, and topic relevance for dictation questions."
    ]
  },
  {
    "title": "Covid data report",
    "technologies": ["Node.js", "puppeteer"],
    "include": ["Research", "Job"],
    "level": "sub",
    "year": 2021,
    "description": [
      "Automatically scraped COVID data from various official sites by simulating user behaviour.",
      "Pushed filtered results to subscribed users."
    ]
  },
  {
    "title": "Energy Simulator",
    "technologies": ["HTML", "WebGL", "JS", "Java", "JavaFX"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2020,
    "description": [
      "Enabled decision-making by solving linear problems and simulating energy usage.",
      "Developed a website/Java GUI with 3D representation."
    ]
  },
  {
    "title": "Financial Organization App",
    "technologies": ["Expo", "NLP.js"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2020,
    "description": [
      "Developed an app to organize expenses and income with voice interaction using locally hosted NLU for Capital One."
    ]
  },
  {
    "title": "Financial Tutoring website",
    "technologies": ["HTML", "ejs", "Worker"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2020,
    "description": [
      "Led a team to create a financial education website with tools like a yearly budgeting tool for Capital One.",
      "Followed Agile methodologies."
    ]
  },
  {
    "title": "A JavaFx program",
    "technologies": ["Java"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2020,
    "description": [
      "Developed a Java GUI program to manage and look up data among different farms."
    ]
  },
  {
    "title": "AutoCommenter",
    "technologies": ["Java"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2019,
    "description": [
      "Automatically analyzed Java code and added comments based on preset rules."
    ]
  },
  {
    "title": "Seat Arrangement Problem",
    "technologies": ["GAMS", "Cplex"],
    "include": [],
    "level": "sub",
    "year": 2019,
    "description": [
      "Decision-making script that solves a problem about how to arrange seats in an imaginary library"
    ]
  },
  {
    "title": "HateFate Website",
    "technologies": ["HTML", "JSP", "SQL"],
    "include": ["Research", "Job"],
    "level": "normal",
    "year": 2017,
    "description": [
      "Led a four-person team to develop a website with core features.",
      "Implemented login, signup with email verification, and user pairing."
    ]
  }
]

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
