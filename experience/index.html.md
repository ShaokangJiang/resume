# Shaokang Jiang: Experience

## Research experience

### Graduate Student Researcher

University of California, Irvine (supervised by Daye Nam and Emerson Murphy-Hill) · Jun 2026 – Present

- Conducted a mixed-methods study of personal software, combining a large scale grey-literature review study and observation study of eight people building software for their own needs with AI coding agents.
- Developed LLM-assisted filtering and coding workflows, validated them against human labels, and finalized 17 themes across five topics through group discussions.
- Found that personal software is motivated by individual or community needs. 68% of functionality emerged during building, and intrinsic motivation can sustain its continued development.

### Graduate Student Researcher

University of California, Irvine (supervised by Daye Nam) · Aug 2025 – Present

- Analyzed human-AI collaboration using Cursor rules as a proxy, identifying four primary categories (Project, Convention, Guideline, LLM Directive) and revealing that developers adapt context types by programming language while applying traditional human-to-human documentation strategies to instruct AI. Published at MSR 2026.
- Designed and implemented a pipeline to collect and analyze Cursor rules from 401 GitHub repositories, leveraging prompted LLMs to scale up the qualitative coding process.
- Developed an ambient automation discovery system utilizing LLMs to passively observe web behavior and generate personalized programs, validated via an 8-person empirical study, revealing users inherently fail to recognize over 94% of their own automatable actions.
- Designed and implemented an asynchronous, natively cross-platform multimodal discovery agent (Rust, JavaScript, Chrome APIs) utilizing contextual memory and different LLM reasoning (e.g.,chain-of-thought, self-reflection, programming-as-reasoning, planning, and cross-verification) to mine web interactions into patterns. The system designs and generates scripts following human feedback, showing a 93% usefulness rating for all viewed patterns.

[MSR26 Presentation Video](https://youtu.be/xuvGhq15Da4) · [MSR26 Paper](https://doi.org/10.1145/3793302.3793367) · [MSR26 Artifact](https://doi.org/10.5281/zenodo.18313203)

### Graduate Student Researcher

University of California San Diego (supervised by Michael Coblenz) · Apr 2024 – May 2025

- Found Copilot helps users focus on learning while increasing productivity; revealed developers prefer analyzing generated code over explanations, yet still rely on search engines for conceptual questions. Submitted to EMSE.
- Designed an eye-tracking experiment to evaluate the costs and benefits of Copilot for novice programmers, developing a universal eye-tracking platform for native VSCode to capture user interaction data across in-editor events.

### Graduate Student Researcher

University of California San Diego (supervised by Kristen Vaccaro and Deepak Kumar) · Apr 2024 – May 2025

- Audited YouTube's recommendation strategies for short and long-form content; discovered that long-form algorithms reinforce partisan echo chambers by aligning with seed videos, while short-form algorithms prioritize engagement by exposing users to more right-leaning content. Published at WWW 2026.
- Designed and implemented a pipeline of seeds collecting, matching, recommendation collecting, and political assessing, leveraging Selenium to harvest recommendations, git-diff for video matching, and prompt-engineered GPTs and BERT for political labeling.

[Early stage metadata visualization](https://information.1442334619.workers.dev/)

### Researcher

Independent (supervised by Jimmy Koppel and Michael Coblenz) · Apr 2024 – Dec 2024

- Evaluated the impact of AI assistance on code comprehension among 15 experienced engineers, finding that LLM chatbots increased user confusion, while traditional tutorials improved high-level structural understanding but lacked low-level coding support. Published at Plateau 2025.

[Accepted paper](https://resume.shaokang.me/papers/chatbotvstutorial.pdf)

### HCI Research Course Project

University of California San Diego · Sep 2023 – Dec 2023

- Investigated whether an avatar appearing in the ChatGPT interface would help create a better communication environment between humans and machines, particularly in terms of alleviating loneliness. Added an avatar to the ChatGPT interface and found no significant difference in a 10 people pilot study.

[Blog post](https://shaokangjiang.github.io/2023/Fighting-loneliness-using-generative-AI-with-avatar/)

### Graduate Student Researcher

University of California San Diego (supervised by Michael Coblenz) · Jan 2023 – Sep 2023

- Found that autocomplete speeds up information acquisition but may not increase productivity with 32 programmers working with an unfamiliar API. Published and presented the paper at FSE 2024.
- Found that participants who used autocomplete learned more while spending less time reading documentation.
- Developed a web-based VSCode interaction and eye-tracking platform (JS/C#, Tobii Eye Tracker 5) to capture in-editor events, achieving a 90% latency reduction than previous solutions.

[Blog post - paper](https://shaokangjiang.github.io/2023/Usability-analysis-of-autocomplete/) · [Blog post - fixation algorithm](https://shaokangjiang.github.io/2023/Eye-tracking-fixation-algorithm/) · [Blog post - VSCode extension](https://shaokangjiang.github.io/2022/Build-VSCode-extension/) · [Published paper](https://dl.acm.org/doi/abs/10.1145/3660765) · [Published artifact](https://dl.acm.org/do/10.1145/3580435/full/) · [Poster](https://resume.shaokang.me/papers/autocomplete-poster.pdf)

### Usability of PL Course Project

University of California San Diego · Sep 2022 – Dec 2022

- Investigated whether Python Type Hints are helpful for competitive programmers.
- Designed and executed an experiment, containing tasks and interview, with 4 participants.
- Found that Python type hints were not significantly more useful for competitive programmers in terms of task completion time and debugging time. Open coded of interview results and transcripts indicated programmers feel adding type hints and the popped out autocomplete suggestions to be annoying.

[Blog post](https://shaokangjiang.github.io/2022/Whether-Python-Type-Hints-are-helpful-for-competitive-programmers-CP/)

### Research Assistant

Illinois Institute of Technology · Jan 2019 – May 2019

- Modified POW (Bitcoin) and POS (EOSIO) blockchain source code for execution on a blockchain emulator, facilitating performance measurement for researchers.

## Teaching & work experience

### Teaching Assistant

University of California, Irvine · Sep 2026 – Dec 2026

- TA for Data Structures (SWE 240P) and Network Programming (SWE 242P) with Mohammad Moshirpour.

### Teaching Assistant

University of California, Irvine · Mar 2026 – Present

- TA for information visualization (INF 143) with Alberto Krone-Martins.
- Discussed course content, graded exams, homework, and projects. Provided suggestions for course content, held office hours, and hosted discussion sections. Managed course logistics.

### Teaching Assistant

University of California, Irvine · Sep 2025 – Mar 2026

- TA for programming in Java (ICS 45J) with Emily Navarro.
- Designed course components, created assignments, built grading scripts, made and graded exams, homework, and projects. Provided suggestions for course content and hold office hours. Managed course logistics.

### Teaching Assistant

University of California San Diego · Sep 2024 – Mar 2025

- TA for the Usability of Programming Languages course (CSE291) with Michael Coblenz for one quarter. And TA for the Antisocial Computing (CSE 291) with Kristen Vaccaro for one quarter.
- Lead class, discussions and office hours, graded assignments, and provided personalized advice to students.

### Software Engineer

Pullscription · Jun 2024 – Sep 2024

- Worked closely with Jago, the founder and CEO, to discuss, suggest, design, and implement the system structure for the organization's blog and shopping website, including both the customer and supplier end. The aim was to create an easy-to-maintain structure that is fast for users to access and optimized for SEO.
- Utilized Nginx and Docker to deploy the system on a server with CI/CD pipeline spported by GitHub Actions.
- Deployed and integrated the Matomo tracking system with a focus on privacy concerns and wrote unit tests.
- Collaborated closely with the team and provided guidance in implementing the website.
- Integrated Stripe for payment processing and Auth0 with JWT for authentication into the website, and wrote tests.
- Worked with the design team to create and implement a blog site using Nuxt with TypeScript and a shopping site for publishing and managing comic books, embedding abstract content of weekly news into the main website.

### Teaching Assistant

University of California San Diego · Jan 2024 – Jun 2024

- Sole TA for Compilers (CSE 131) with Yufei Ding for one quarter, and Introduction to Data Visualization (DSC 106) with Sam Lau for another quarter.
- Designed course components, created assignments, built grading scripts, made and graded exams, homework, and projects. Provided suggestions for course content and collected student feedback. Managed course logistics.
- Received an 'Excellent' rating from the instructor for both courses, and a 90%+ student recommendation rate.

### Teaching Assistant

University of California San Diego · Sep 2023 – Dec 2023

- Sole TA for the Usability of Programming Languages course (CSE291) with Michael Coblenz for one quarter.
- Discussed course content with the professor, graded assignments, led discussions during lectures on specific course content, and provided personalized advice to students.
- Guided group projects on various topics related to the usability of programming languages or software engineering and gain insights through discussions. Conducted office hours to assist students.
- A 100% student recommendation rate, while the professor rating was not applicable.

### Teaching Assistant

University of California San Diego · Jan 2023 – Jun 2023

- Major TA for Java and Data Structure courses (DSC30) with Soohyun Liao for two quarters.
- Proposed, and developed new and innovative assignments and projects for the course, in collaboration with the professor. Graded students' assignments, held office hours and conducted all discussion sections. Taught additional, non-required concepts during discussion sections.
- A 90%+ student recommendation rate, while the professor rating was not applicable.
- Designed and developed an interactive shell with session management using JSP and Servlets deployed on Azure, allowing students to try solutions online without exposing the source code. Successfully supported 30+ users simultaneously.

[Interactive shell](https://shaokangjiang.github.io/2023/JSP-java-emulator/)

### Volunteer Tutor

University of Wisconsin-Madison · Jan 2021 – May 2021

- Helped students with their coursework related to computer science at the Computer Science Learning Center.

### Student Assistant

Illinois Institute of Technology · Jan 2019 – May 2019

- Tutored students in their computer science coursework at the university's academic resource center.
- Helped the organization advertise its services and events, and assisted in organizing and running events.

### Teaching Assistant

Illinois Institute of Technology · Aug 2018 – May 2019

- Instructed students in lab sessions of Java courses and held office hours to help students best understand class content.
- Regularly checked their homework, had discussions with the professor, and collaborated with team members on ways to improve the course and address major student challenges.

---

[About](https://resume.shaokang.me/index.html.md) · [Publications](https://resume.shaokang.me/publications/index.html.md) · [Experience](https://resume.shaokang.me/experience/index.html.md) · [Projects](https://resume.shaokang.me/projects/index.html.md) · [CV (PDF)](https://resume.shaokang.me/final/research/Shaokang_Jiang_Resume.pdf)

Web version: https://resume.shaokang.me/experience/
