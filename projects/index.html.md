# Shaokang Jiang: Projects

### Monitoring Extension

2026 · JavaScript · Rust · Chrome Extension · Apps Script · Express.js · Multimodal LLM

- Designed and developed a Chrome extension to monitor real-time user interactions, utilizing a JavaScript frontend bundled with rollup, a Rust-based multi-threads native host for cross-platform communication and high-fidelity image/data logging, and an Express.js backend bundled with SEA for asynchronous, streaming data processing.
- Designed and implemented a privacy-first LLM automation pipeline using Gemini to passively detect and automate recurring user patterns through action abstraction, pattern mining, and program generation. Developed a stateless architecture utilizing local-only contextual memory and user-controlled telemetry to ensure full data sovereignty.
- Optimized multimodal AI performance with reasoning (chain-of-thought, self-reflection, programming-as-reasoning, planning, and cross-verification) to analyze inputs from network events, user interactions, and screenshots.

### Youtube Recommendation Analysis

2025 · JavaScript · Selenium · Node.js · Torch · Transformers

- Developed a data pipeline to sample, pair, and harvest 50K YouTube recommendations using sock-puppet accounts.
- Developed a git-diff-inspired text algorithm to identify matching video pairs, achieving 97% accuracy (0.95 precision, 0.96 recall), and trained a custom BERT model to classify the political leaning of content.

### Pullscription websites

2024 · Nuxt · Vue · Typescript · Vitest · Auth0 · Docker · Nginx · Matomo · Stripe · Blogger

- Architected and implemented various components of a modern comic book shopping site, including the shopper and supplier interfaces, and a blog. Configured CI/CD pipelines using GitHub Actions and a cloud server with Nginx.
- Discussed and determined the system architecture, selected dependencies, and aimed to build a maintainable, easily migratable codebase.
- Integrated Stripe payment solutions and Auth0, and deployed and integrated Matomo tracking for analytics. Collaborated with the design team to develop the blog using Blogger's template language and embedded its content into both the website and iOS app. Built tests using Vitest and updated Docker for the entire system.

### Workshop Manager

2024 · Electron · React · Socket.io · HTTPS · DDNS · GPTs · Worker · MailJet

- Designed and developed a 4-component workshop management system for real-time user engagement to foster idea generation and improve communication during meetings, capable of hosting at least 50 concurrent participants.
- Pre-conference component: Created a registration system utilizing a RESTful API backend with Worker for user verification and sending invitation emails via Mailjet. The frontend was developed using a simple HTML page.
- In-conference Management Component: Uses DDNS to dynamically assign a subdomain. Developed with Electron as the main platform, with React for the frontend and a JavaScript backend running an HTTPS WebSocket server. The management system will communicate with and broadcast guidance to all participants with the help of GPT services for hint generation, while also updating the main screen with large-screen guidance.
- In-conference Client-side Ideation and Discussion Components: Both components allow participants to submit ideas in real-time during small group discussions and facilitate large group discussions on the submitted ideas in a subsequent phase. They were developed using React and Socket Client for real-time communication.

### Cross platform Markdown app

2024 · Electron · JavaScript

- An Electron-based markdown editor designed with basic operations like reading from and writing to disk, and a floating menu for easy access to titles and editing them, packaged for multiple platforms.
- Frontend developed with React, featuring a custom-built lexer and parser for markdown; backend implemented in JavaScript to handle file reading and writing from local storage.

### Video matching and leaning rating system

2024 · HTML · JS · Node.js · Oracle cloud · Worker

- Developed a text-based algorithm in Node.js to identify matched pairs between any two videos, paired with a concurrent pool management tool to fully leverage a multicore cloud server, surpassing any existing video matching algorithms in internal tests.
- Created an anonymous rating system with a front end built using pure HTML and JS, and a RESTful API backend deployed on Cloudflare Workers as an intermediary server for data recording. With the rating system, users can manually compare two randomly selected matched videos from a pool, manually label any bias for analysis.

### HealthCare Chatbot

2024 · Expo · Worker · GitHub · Jest · Vitest · Figma

- Led a team of five to create a chatbot with CI/CD pipelines using Agile methodologies. Self-delegate leadership roles when necessary. Consulted with experts in health care to understand their needs and requirements.
- Developed a chatbot using Expo to provide healthcare information and answer questions via a fine-turned GPT service. Backend services were built with JavaScript and deployed on Cloudflare Workers to handle user information management, session storage, authentication and token management, using salted hashes for password storage.
- Learned methods for managing disputes and mediation conflicts within a team, including documenting divergence points and finding common ground. Realized the importance of communication in a team.
- Integrated Material Design principles and conducted unit tests using Jest for the Expo app and Vitest for the middleware server. Utilized GitHub Actions for the CI/CD pipeline.

### Eyetracker Monitoring Platform

2023,2024 · C# · JS · Tampermonkey · Chrome · WebSockets · VSCode

- Developed a universal user interaction tracking platform that includes eye movement tracking during coding in VSCode. Integrated the Tobii Eye Tracker 5 to link eye movement data with in-editor events while ensuring compliance with legal requirements.
- The 2023 edition tracks specific window appearances and user interactions in the web-based version of VSCode. The frontend is built with JavaScript and deployed as a Chrome extension, while the backend is developed in C#. Reduced the latency of communication between eye tracker and VSCode to one tenth compared with existed solution, tested over 80 hours with 33 users.
- The 2024 edition tracks the entire window arrangement and user interactions in VSCode, with the ability to define and track additional events as needed. The frontend is built with JavaScript and deployed as a script in VSCode, while the backend is developed in C#. Both ends communicate using WebSockets.

### VSCode Experiment helper

2022,2024 · Typescript · Fiddler

- Designed and developed two VSCode extensions to monitor user interactions, upload collected data, and enhance the development experience using pure VSCode without requiring viewing any outside window.
- The 2022 edition introduced a CodeLens feature above each method signature in Java, enabling users to run provided test cases with a click and debug programs. 33 real users tested it, and there were no bugs or complaints.
- The 2024 edition modified the existed browser plugin on VSCode to support navigating between pages. Integrated Fiddler to intercept and modify requests, making it possible to browse websites within VSCode while coding.

### Online interactive shell

2023 · Java Server Page · Servlets · Java · Azure

- Developed an interactive shell using JSP and Servlets deployed on Azure, enabling students to run Java source code online without accessing the source code, while supporting over 30 users simultaneously. The backend featured a custom connection session management utility to optimize resource usage and ensure seamless session handling.

### Interactive Haskell Game

2023 · Haskell

- Used the Brick library in Haskell to design and build a simple game for Conway's Game of Life.

### Shopping store

2023 · Next, React

- A multi page application built with react and Next framework.

### Eye tracker analysis

2023 · HTML · Java Server Page · SQL · Java

- Led a four-person team in developing a social

### An economical computer

2022 · Node.js · GAMS · Puppeteer

- Automatically scraped computer components' performance data weekly using Puppeteer, with GitHub Actions and a cron scheduler, by simulating user behavior.
- Used optimization with preset LP problem-solving to find the best configuration.

### Wise grader

2021 · JavaScript · TensorFlow · Tampermonkey

- Developed and deployed a Tampermonkey script to expedite grading by suggesting scores based on length, N-gram analysis, and topic relevance for dictation questions, using the TensorFlow. The entire system operates locally.

### Financial Organization App

2020 · Expo · NLP.js

- Developed an app to help individuals organize expenses and income using voice interaction and simple chat, utilizing a local natural language understanding engine for Capital One.
- Built with Expo, packaged, and tested for both Android and iOS, the app enables users to sync data between devices via JSON import/export, with all data stored locally for privacy.

### Financial Tutoring website and app

2020 · HTML · Ejs · Worker · JavaScript · echarts · Expo · NLP

- Designed and led a team to develop a static financial education website for Capital One. The site includes interactive learning tools, such as quizzes and a self-built, stateless learning progress tracking system. It also has various utilities, including a personal expense management app.
- Created detailed implementation guidance for group members and a user manual for the website and learning content. Build CI/CD pipelines and deployed them with GitHub Actions.
- Built front end using embedded JavaScript for the main site and HTML with JavaScript for utility tools. Developed backend with JavaScript and deployed on Cloudflare Workers to handle requests, including the encryption and decryption of learning stage information using AES and crypto and a dynamically rendered quiz system. Users can download their encrypted learning progress and upload it to decode and resume learning, or use the same browser to continue learning. No data is stored on the server considering privacy and budget.
- Developed a cross-platform personal finance app for Capital One that enables users to manage expenses and income via voice and chat interfaces using a local NLU engine, built with Expo for Android and iOS, tested and packaged for both platforms; Designed with JSON import/export for secure, local-only data storage and syncing.
- Followed Agile methodologies, discussed with mentors and communicated with stakeholders to understand their needs and software development stages.

### Energy Simulator

2020 · HTML · WebGL · JS · Java · JavaFX · Three.js · echarts

- Designed and developed a web-based energy simulation tool utilizing jsLPSolver to optimize energy sources based on historical data and project future trends via linear regression.
- Presented results on a static website built with HTML and JavaScript, featuring a 3D energy system simulation using A-Frame and Three.js, with AR functionalities via QR codes, dynamic data visualization, and lightweight localization. Ensured full support for modern browsers and partial support for IE 11.
- Reimplemented most functionalities in JavaFX without 3D representation.

### A JavaFx program

2020 · Java · JavaFX

- Developed a Java GUI program to manage and look up data among different hypothetical farms by reading CSVs.

### Small course projects

2020

- Still exclude any assignment.

### Screen Reader

2019 · JavaScript · Tampermonkey

- Designed and developed an interface using the Web Speech API to read screen content based on user-defined rules, and deployed it on Tampermonkey.

### AutoCommenter

2019 · Java · JFrame

- Designed and developed a local utility program in Java with JFrame to analyze Java code on preset rules and semi-automatically add comments by integrating user input through typing or voice, with voice recognition powered by the iFlyTek API and translation supported by the Baidu Translation API.

### CS 425 Website

2018 · HTML · Java Server Page · SQL · Java

- Led a four-person team in developing a social

### Bitcoin Research

2018

- Integrate bitcoin into a customized minichain

### HateFate Website

2017 · HTML · Java Server Page · SQL · Java · Servlets

- Led a four-person team in developing a social networking website that connects users based on shared dislikes, with features including login, email-verified signup, and user pairing. Utilized Material design to create the interface.
- Developed the frontend using HTML and JavaServer Pages (JSP) and built the backend with JSP and SQL for data storage. Deployed on the Azure cloud with an Azure SQL database.
- Developed multiple login methods and utilized cookies to store user information, enabling automatic session recovery. Designed and integrated a custom mail system to handle email verification, password resets, and new match notifications using SMTP.
- Secured the website with SSL encryption and employed a combination of MD5, public/private key encryption, and AES for data security during page forwarding and email verification.

## Technical skills

- **Languages:** Java, Python, Rust, C, C++, C#, HTML/CSS/JavaScript, TypeScript, Matlab, LaTeX, GAMS, Markdown, Haskell, SQL, Embedded JavaScript, Blogger Template Language, Shell
- **Frameworks:** React, Node.js, Vue, Jest, Vitest, JSP, Flask, Expo (React Native), JUnit, Svelte, VitePress, Hexo, Electron, Chrome Extensions, VSCode Extensions, Puppeteer, Selenium, Tampermonkey, JavaFX, Servlets
- **Platforms/Tools:** Autogen, vllm, ollama, Git, Docker, GitHub, Google Cloud, Azure, Cloudflare (Workers and KV), Firebase, Oracle Cloud, VS Code, Visual Studio, IntelliJ, Eclipse, Nginx
- **Libraries/Services:** Auth0, Stripe, Matomo, MailJet, Daily.js, Socket.io, TensorFlow, WebGL, NLP.js, echarts, Matplotlib, echarts, PyQt, Pyramid, CherryPy, Three.js, and much more
- **Other Platforms:** Windows, Linux, MAC, JIRA, Trello, DevOps, Agile, JMP, Figma, Photoshop, Qualcoder, Taguette, Premiere, Audition, Blender, Excel, Word, PowerPoint

---

[About](https://resume.shaokang.me/index.html.md) · [Publications](https://resume.shaokang.me/publications/index.html.md) · [Experience](https://resume.shaokang.me/experience/index.html.md) · [Projects](https://resume.shaokang.me/projects/index.html.md) · [CV (PDF)](https://resume.shaokang.me/final/research/Shaokang_Jiang_Resume.pdf)

Web version: https://resume.shaokang.me/projects/
