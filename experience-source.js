
const source = [
    // === Research
    {
        "position": "Graduate Student Researcher",
        "type": "Research",
        "institution": "University of California, Irvine (supervised by Daye Nam)",
        "start_date": "August 2025",
        "end_date": "now",
        "details": [
            "Analyzed human-AI collaboration using Cursor rules as a proxy, identifying four primary categories (Project, Convention, Guideline, LLM Directive) and revealing that developers adapt context types by programming language while applying traditional human-to-human documentation strategies to instruct AI. Published at \\textbf{MSR 2026}.",
            "Designed and implemented a pipeline to collect and analyze Cursor rules from 401 GitHub repositories, leveraging prompted LLMs to scale up the qualitative coding process.",
            "Developed an ambient automation discovery system utilizing LLMs to passively observe web behavior and generate personalized programs, validated via an 8-person empirical study, revealing users inherently fail to recognize over 94\\% of their own automatable actions. Submitted to \\textbf{UIST 2026}.",
            "Designed and implemented an asynchronous, natively cross-platform multimodal discovery agent (Rust, JavaScript, Chrome APIs) utilizing contextual memory and different LLM reasoning (e.g.,chain-of-thought, self-reflection, programming-as-reasoning, planning, and cross-verification) to mine web interactions into patterns. The system designs and generates scripts following human feedback, showing a 93\\% usefulness rating for all viewed patterns."
        ],
        "link": [
            { description: "MSR26 Presentation Video", link: "https://youtu.be/xuvGhq15Da4" }, 
            { description: "MSR26 Paper", link: "https://doi.org/10.1145/3793302.3793367" },
            { description: "MSR26 Artifact", link: "https://doi.org/10.5281/zenodo.18313203" },
        ]
    },
    {
        "position": "Graduate Student Researcher",
        "type": "Research",
        "institution": "University of California San Diego (supervised by Michael Coblenz)",
        "start_date": "April 2024",
        "end_date": "May 2025",
        "details": [
            "Found Copilot helps users focus on learning while increasing productivity; revealed developers prefer analyzing generated code over explanations, yet still rely on search engines for conceptual questions. Submitted to \\textbf{TOSEM}.",
            "Designed an eye-tracking experiment to evaluate the costs and benefits of Copilot for novice programmers, developing a universal eye-tracking platform for native VSCode to capture user interaction data across in-editor events.",
            // "Developed VSCode extensions utilizing prompt-engineered GPTs that integrates static security analysis, user background, and project structure as inputs, producing two visual interfaces to assist novice programmers in detecting and understanding OWASP risks in code. The extension is undergoing iterative internal design.",
        ]
    },
    {
        "position": "Graduate Student Researcher",
        "institution": "University of California San Diego (supervised by Steven Dow)",
        "type": "Research",
        "start_date": "April 2024",
        "end_date": "October 2024",
        "details": [
            "Found LLM-driven conversational cues significantly increased the topical diversity of generated ideas and conversations. Published at \\textbf{CI 2025}.",
            "Designed and deployed a meeting platform with prompt-engineered GPT conversational cues, Firebase and Daily.js.",
            "Led quantitative analysis evaluating the impact of AI-generated cues in a 172-participant 2x2 experiment, authoring the design, implementation, and data analysis sections for publication.",
        ]
    },
    {
        "position": "Graduate Student Researcher",
        "institution": "University of California San Diego (supervised by Kristen Vaccaro and Deepak Kumar)",
        "type": "Research",
        "start_date": "April 2024",
        "end_date": "May 2025",
        "details": [
            "Audited YouTube's recommendation strategies for short and long-form content; discovered that long-form algorithms reinforce partisan echo chambers by aligning with seed videos, while short-form algorithms prioritize engagement by exposing users to more right-leaning content. Published at \\textbf{WWW 2026}.",
            "Designed and implemented a pipeline of seeds collecting, matching, recommendation collecting, and political assessing, leveraging Selenium to harvest recommendations, git-diff for video matching, and prompt-engineered GPTs and BERT for political labeling.",
        ],
        "link": [
            { description: "Early stage metadata visualization", link: "https://information.1442334619.workers.dev/" }, 
            {
                description: "Manually labelling system", link: "https://yt.shaokang.me/"
            },
            {
                description: "Sample matched pairs", link: "https://yt.shaokang.me/0612"
            }
        ]
    },
    {
        "position": "Researcher",
        "institution": "Independent (supervised by Jimmy Koppel and Michael Coblenz)",
        "type": "Research",
        "start_date": "April 2024",
        "end_date": "December 2024",
        "details": [
            "Evaluated the impact of AI assistance on code comprehension among 15 experienced engineers, finding that LLM chatbots increased user confusion, while traditional tutorials improved high-level structural understanding but lacked low-level coding support. Published at \\textbf{Plateau 2025}.",
            // "A between-subjects study with 15 experienced software engineers that compared the effectiveness of tutorials and LLM chatbots in helping users learn an unfamiliar codebase.",
            // "Restructured the study, discussed, designed, and implemented an analysis plan with both qualitative and quantitative components, transcribed, coded, and utilized NLP to analyze the recordings, and wrote and submitted ."
        ],
        "link": [{ description: "Accepted paper", link: "https://resume.shaokang.me/papers/chatbotvstutorial.pdf" }]
    },
    {
        "position": "Graduate Student Researcher",
        "institution": "University of California San Diego (supervised by Michael Coblenz)",
        "type": "Research",
        "start_date": "January 2023",
        "end_date": "September 2023",
        "details": [
            "Found that autocomplete speeds up information acquisition but may not increase productivity with 32 programmers working with an unfamiliar API. Published and presented the paper at \\textbf{FSE 2024}.",
            "Found that participants who used autocomplete learned more while spending less time reading documentation.",
            "Developed a web-based VSCode interaction and eye-tracking platform (JS/C\\#, Tobii Eye Tracker 5) to capture in-editor events, achieving a 90\\% latency reduction than previous solutions.",
            // "Designed and implemented a VSCode extension for running experiment."
        ],
        "link": [{
            description: "Blog post - paper",
            link: "https://shaokang.me/2023/Usability-analysis-of-autocomplete/"
        }, {
            description: "Blog post - fixation algorithm",
            link: "https://shaokang.me/2023/Eye-tracking-fixation-algorithm/"
        }, {
            description: "Blog post - VSCode extension",
            link: "https://shaokang.me/2022/Build-VSCode-extension/"
        }, {
            description: "Published paper",
            link: "https://dl.acm.org/doi/abs/10.1145/3660765"
        }, {
            description: "Published artifact",
            link: "https://dl.acm.org/do/10.1145/3580435/full/"
        }, {
            description: "Poster",
            link: "https://resume.shaokang.me/papers/autocomplete-poster.pdf"
        }]
    },
    {
        "position": "Usability of PL Course Project",
        "institution": "University of California San Diego",
        "type": "Research-class",
        "start_date": "September 2022",
        "end_date": "December 2022",
        "details": [
            "Investigated whether Python Type Hints are helpful for competitive programmers.",
            "Designed and executed an experiment, containing tasks and interview, with 4 participants.",
            "Found that Python type hints were not significantly more useful for competitive programmers in terms of task completion time and debugging time. Open coded of interview results and transcripts indicated programmers feel adding type hints and the popped out autocomplete suggestions to be annoying."
        ],
        "link": [
            { description: "Blog post", link: "https://shaokang.me/2022/Whether-Python-Type-Hints-are-helpful-for-competitive-programmers-CP/" }
        ]
    },
    {
        "position": "HCI Research Course Project",
        "institution": "University of California San Diego",
        "type": "Research-class",
        "start_date": "September 2023",
        "end_date": "December 2023",
        "details": [
            "Investigated whether an avatar appearing in the ChatGPT interface would help create a better communication environment between humans and machines, particularly in terms of alleviating loneliness. Added an avatar to the ChatGPT interface and found no significant difference in a 10 people pilot study. ",
        ],
        "link": [{ description: "Blog post", link: "https://shaokang.me/2023/Fighting-loneliness-using-generative-AI-with-avatar/" }]
    },
    {
        "position": "Research Assistant",
        "institution": "Illinois Institute of Technology",
        "type": "Research",
        "start_date": "January 2019",
        "end_date": "May 2019",
        "details": [
            "Modified POW (Bitcoin) and POS (EOSIO) blockchain source code for execution on a blockchain emulator, facilitating performance measurement for researchers."
        ]
    },
    // === TA
    {
        "position": "Teaching Assistant",
        "institution": "University of California, Irvine",
        "start_date": "March 2026",
        "type": "TA",
        "end_date": "now",
        "details": [
            "TA for information visualization (INF 143) with Alberto Krone-Martins.",
            "Discussed course content, graded exams, homework, and projects. Provided suggestions for course content, held office hours, and hosted discussion sections. Managed course logistics."
        ]
    },
    {
        "position": "Teaching Assistant",
        "institution": "University of California, Irvine",
        "start_date": "September 2025",
        "type": "TA",
        "end_date": "March 2026",
        "details": [
            "TA for programming in Java (ICS 45J) with Emily Navarro.",
            "Designed course components, created assignments, built grading scripts, made and graded exams, homework, and projects. Provided suggestions for course content and hold office hours. Managed course logistics."
        ]
    },
    {
        "position": "Teaching Assistant",
        "institution": "University of California San Diego",
        "start_date": "January 2024",
        "type": "TA",
        "end_date": "June 2024",
        "details": [
            "Sole TA for Compilers (CSE 131) with Yufei Ding for one quarter, and Introduction to Data Visualization (DSC 106) with Sam Lau for another quarter.",
            "Designed course components, created assignments, built grading scripts, made and graded exams, homework, and projects. Provided suggestions for course content and collected student feedback. Managed course logistics.",
            "Received an 'Excellent' rating from the instructor for both courses, and a 90\\%+ student recommendation rate."
        ]
    },
    {
        "position": "Teaching Assistant",
        "institution": "University of California San Diego",
        "start_date": "September 2024",
        "type": "TA",
        "end_date": "March 2025",
        "details": [
            "TA for the Usability of Programming Languages course (CSE291) with Michael Coblenz for one quarter. And TA for the Antisocial Computing (CSE 291) with Kristen Vaccaro for one quarter.",
            "Lead class, discussions and office hours, graded assignments, and provided personalized advice to students.",
        ]
    },
    {
        "position": "Teaching Assistant",
        "institution": "University of California San Diego",
        "start_date": "September 2023",
        "type": "TA",
        "end_date": "December 2023",
        "details": [
            "Sole TA for the Usability of Programming Languages course (CSE291) with Michael Coblenz for one quarter.",
            "Discussed course content with the professor, graded assignments, led discussions during lectures on specific course content, and provided personalized advice to students.", "Guided group projects on various topics related to the usability of programming languages or software engineering and gain insights through discussions. Conducted office hours to assist students.",
            "A 100\\% student recommendation rate, while the professor rating was not applicable."
        ]
    },
    {
        "position": "Teaching Assistant",
        "institution": "University of California San Diego",
        "type": "TA",
        "start_date": "January 2023",
        "end_date": "June 2023",
        "details": [
            "Major TA for Java and Data Structure courses (DSC30) with Soohyun Liao for two quarters.",
            "Proposed, and developed new and innovative assignments and projects for the course, in collaboration with the professor. Graded students' assignments, held office hours and conducted all discussion sections. Taught additional, non-required concepts during discussion sections.",
            "A 90\\%+ student recommendation rate, while the professor rating was not applicable.", 
            "Designed and developed an interactive shell with session management using JSP and Servlets deployed on Azure, allowing students to try solutions online without exposing the source code. Successfully supported 30+ users simultaneously."
        ],
        "link": [{ description: "Interactive shell", link: "https://shaokang.me/2023/JSP-java-emulator/" }]
    },
    {
        "position": "Volunteer Tutor",
        "institution": "University of Wisconsin-Madison",
        "type": "TA",
        "start_date": "January 2021",
        "end_date": "May 2021",
        "details": [
            "Helped students with their coursework related to computer science at the Computer Science Learning Center."
        ]
    },
    {
        "position": "Teaching Assistant",
        "institution": "Illinois Institute of Technology",
        "type": "TA",
        "start_date": "August 2018",
        "end_date": "May 2019",
        "details": [
            "Instructed students in lab sessions of Java courses and held office hours to help students best understand class content.",
            "Regularly checked their homework, had discussions with the professor, and collaborated with team members on ways to improve the course and address major student challenges."
        ]
    },
    {
        "position": "Student Assistant",
        "institution": "Illinois Institute of Technology",
        "type": "TA",
        "start_date": "January 2019",
        "end_date": "May 2019",
        "details": [
            "Tutored students in their computer science coursework at the university's academic resource center.",
            "Helped the organization advertise its services and events, and assisted in organizing and running events."
        ]
    },
    // work
    {
        "position": "Software Engineer",
        "institution": "Pullscription",
        "type": "Work",
        "start_date": "June 2024",
        "end_date": "September 2024",
        "details": [
            "Worked closely with Jago, the founder and CEO, to discuss, suggest, design, and implement the system structure for the organization's blog and shopping website, including both the customer and supplier end. The aim was to create an easy-to-maintain structure that is fast for users to access and optimized for SEO.",
            "Utilized Nginx and Docker to deploy the system on a server with CI/CD pipeline spported by GitHub Actions.",
            "Deployed and integrated the Matomo tracking system with a focus on privacy concerns and wrote unit tests.",
            "Collaborated closely with the team and provided guidance in implementing the website.",
            "Integrated Stripe for payment processing and Auth0 with JWT for authentication into the website, and wrote tests.",
            "Worked with the design team to create and implement a blog site using Nuxt with TypeScript and a shopping site for publishing and managing comic books, embedding abstract content of weekly news into the main website."
        ]
    }
]

const source_combined = {
    "Research": [
        {
            "position": "Graduate Student Researcher",
            "institution": "University of California San Diego",
            "type": "Research",
            "start_date": "January 2023",
            "end_date": "May 2025",
            "details": [
                "Worked with Michael Coblenz on the usability analysis of autocomplete, designed, executed an experiment with 32 participants and published on the Foundations of Software Engineering.",
                "Worked with Michael Coblenz on the usability analysis of Copilot. Designed an experiment and executing it now.",
                "Designed and implemented a consumer-level universe eye-tracking platform for both web and native based VSCode, a Chrome extension and a VSCode extension to collect data.",
                "Worked with Kristen Vaccaro and Deepak Kumar, and collaborated with two other group members to assess bias in YouTube's recommendation system.",
                "Developed a method to match long and short items using a novel matching algorithm, and devised a mixed design to measure, collect, and evaluate outcome variables, such as the video leaning.",
                "Worked with Jude Abishek Rayan under the guidance of Steven Dow on improving conference communication protocols for projects CueHub and a conference management system.",
                "Designed, implemented, tested, and deployed software using React, Firebase, Flask, GitHub Actions, Cloudflare, and Oracle Cloud, based on the weekly discussion results. Improved the product in a rapid process and assisted in designing the entire research workflow."
            ],
            "work_details": [
                "Worked with professors and researchers on projects. Published paper at FSE 2024. Submitted to CI 2025.",
                "Developed an universal user interaction tracking platform for VSCode, integrating Tobii Eye Tracker 5 to capture eye movement and user interactions across in-editor events, with a JavaScript frontend and C\\# backend; reduced frontend-backend communication latency to one-tenth of the existing solution, tested over 80 hours with 33 users.",
                "Developed a high-accuracy algorithm in JavaScript and Python (using Hugging Face) to detect whether a video is a clip of another, outperforming existing solutions, and implemented a concurrent pool management tool to fully utilize a multicore cloud server.",
                "Worked on and deployed an online meeting platform left by a previous team, adding separate interfaces for facilitators and participants, Firebase for real-time communication, Daily.js for meetings, Assembly AI for transcription and data analysis, and GPT-based cues, resolving critical bugs and enabling 86 meetings.",
                "Developed a workshop management system for real-time user engagement with socket.io, electron, DDNS, MailJet, reverse proxy, and prompt-engineered GPTs to foster a better conversation."
            ]
        }
    ],
    "TA": [
        {
            "position": "Teaching Assistant",
            "institution": "University of California, Irvine",
            "type": "TA",
            "start_date": "September 2025",
            "end_date": "now",
            "details": [
                "TA for programming in Java (ICS 45J) with Emily Navarro.",
                "TA for information visualization (INF 143) with Alberto Krone-Martins.",
                "Led discussions, graded assignments, and co-designed course content and logistics with faculty."
            ],
            "work_details": [
                "Served as the sole or lead TA for several courses, including Java and Data Structures, Usability of Programming Languages, and Compilers. Received 'Excellent' ratings from instructors and a 90\\%+ student recommendation rate.",
                "Developed several assignment and unit tests using JUnit on Docker, created templates with GitHub Actions, and helped students with the code merge process.",
                "Developed an interactive shell with session management using JSP and Servlets deployed on Azure, allowing students to try solutions online without exposing the source code. Successfully supported 30+ users simultaneously.",
            ]
        },
        {
            "position": "Teaching Assistant",
            "institution": "University of California San Diego",
            "type": "TA",
            "start_date": "January 2023",
            "end_date": "March 2025",
            "details": [
                "Major TA for Java and Data Structure courses (DSC30) with Soohyun Liao for two quarters.", 
                "Sole TA for the Antisocial Computing (CSE 291) with Kristen Vaccaro for one quarter.",
                "Sole TA for the Usability of Programming Languages course (CSE291) with Michael Coblenz for one quarter and TA for the same course for another quarter.",
                "Sole TA for Compilers (CSE 131) with Yufei Ding for one quarter, and Introduction to Data Visualization (DSC 106) with Sam Lau for another quarter.",
                "Designed and implemented course assignments and mentored students through group projects.", "Facilitated weekly discussion sections and office hours, collaborating with the lead instructor to refine course content, manage logistics, and evaluate student performance.",
                "Received 'Excellent' ratings from instructors and a 90\\%+ student recommendation rate in course evaluations."
            ],
            "work_details": [
                "Served as the sole or lead TA for several courses, including Java and Data Structures, Usability of Programming Languages, and Compilers. Received 'Excellent' ratings from instructors and a 90\\%+ student recommendation rate.",
                "Developed several assignment and unit tests using JUnit on Docker, created templates with GitHub Actions, and helped students with the code merge process.",
                "Developed an interactive shell with session management using JSP and Servlets deployed on Azure, allowing students to try solutions online without exposing the source code. Successfully supported 30+ users simultaneously.",
            ]
        }
    ]
}

module.exports = { source, source_combined };