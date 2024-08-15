const fs = require('fs');

let source = [
    // === Research
    {
        "position": "Graduate Student Researcher",
        "type": "Research",
        "institution": "University of California San Diego",
        "start_date": "April 2024",
        "end_date": "now",
        "details": [
            "Worked with Michael Coblenz on the usability analysis of Copilot.",
            "Designed an experiment using an eye tracker to evaluate the costs and benefits of Copilot for programmers who are new to React. And executing it now.",
            "Designed and implemented an universe eyetracking platform for native based VSCode to collect data, and analyzed data using JMP.",
        ]
    },
    {
        "position": "Graduate Student Researcher",
        "institution": "University of California San Diego",
        "type": "Research",
        "start_date": "April 2024",
        "end_date": "now",
        "details": [
            "Worked with Kristen Vaccaro and Deepak Kumar, and collaborated with two other group members to assess political bias in YouTube's recommendation system.",
            "Developed a novel matching algorithm to pair long and short videos, outperforming all known approaches for our planned analysis. Designed a mixed-method approach to measure, collect, and evaluate outcome variables.",
            "Assessed methods for measuring the political leanings of media houses, utilizing AllSides and other existing models."
        ]
    },
    {
        "position": "Graduate Student Researcher",
        "institution": "University of California San Diego",
        "type": "Research",
        "start_date": "April 2024",
        "end_date": "now",
        "details": [
            "Worked with Jude Abishek Rayan under the guidance of Steven Dow on improving workshop communication protocols for projects CueHub and workshop management.",
            "For the CueHub project, I built, redesigned and tested a customized online meeting platform with automatic cue support and integrated monitoring tools based on the discussion results. Utilized GPTs to provide cues during meetings to improve communication. Wrote design decisions and implementation sections in the paper, and assisted in designing, engaging in discussions throughout the entire research workflow, and data analysis.",
            "For workshop management project, I designed and developed a 4-component workshop management system for real-time user engagement using prompt-engineered GPTs to foster better and more diversified idea generation via cues and discussed ways to improve communication for all groups during meetings."
        ]
    },
    {
        "position": "Researcher",
        "institution": "Independent",
        "type": "Research",
        "start_date": "April 2024",
        "end_date": "now",
        "details": [
            "Worked with Jimmy Koppel on comparing and analyzing the advantages and disadvatanges of using tutorials over the Cody system.",
            "Discuss, design, and implement an analysis plan to examine the data and write a paper right now."
        ]
    },
    {
        "position": "Graduate Student Researcher",
        "institution": "University of California San Diego",
        "type": "Research",
        "start_date": "January 2023",
        "end_date": "September 2023",
        "details": [
            "Worked with Michael Coblenz on the usability analysis of autocomplete.",
            "Designed and executed an experiment with 32 participants using an eye tracker to evaluate the costs and benefits of IDE-based autocomplete features for programmers using an unfamiliar API, analyzed data using JMP, performed thementic analysis, and published a paper on the Foundations of Software Engineering.",
            "Found that participants who used autocomplete learned more while spending less time reading documentation, although autocomplete did not significantly reduce the number of keystrokes required to complete tasks.",
            "Designed and implemented a consumer-level eye-tracking platform for web based VSCode, a Chrome extension, and a VSCode extension to collect data."
        ]
    },
    {
        "position": "Usability of PL Course Project",
        "institution": "University of California San Diego",
        "type": "Research-class",
        "start_date": "September 2022",
        "end_date": "December 2022",
        "details": [
            "Investigated whether Python Type Hints are helpful for competitive programmers.",
            "Designed and executed an experiment with 4 participants.",
            "Found that Python type hints were not significantly more useful for competitive programming in terms of task completion time and debugging time.",
            "Thematic analysis of survey results indicated that programmers disliked type hints and autocomplete suggestions because they found them annoying."
        ]
    },
    {
        "position": "HCI Research Course Project",
        "institution": "University of California San Diego",
        "type": "Research-class",
        "start_date": "September 2023",
        "end_date": "December 2023",
        "details": [
            "Investigated whether an avatar appearing in the ChatGPT interface would help create a better communication environment between humans and machines, particularly in terms of alleviating loneliness."
        ]
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
        "institution": "University of California San Diego",
        "start_date": "January 2024",
        "type": "TA",
        "end_date": "June 2024",
        "details": [
            "Sole TA for Compilers (CSE 131) with Yufei Ding for one quarter, and Introduction to Data Visualization (DSC 106) with Sam Lau for another quarter.",
            "Worked on designing course components, creating assignments, building grading scripts, making and grading exams, homework, and projects. Provided suggestions for course content and collected student feedback.",
            "Managed infrastructure and logistics, discussed course content, designed, refined, and graded homework, held office hours and discussion sections, and engaged students in discussions.",
            "Received an 'Excellent' rating from the instructor for both courses, and over 90\\% of the students gave a 'recommendation' rating in the course evaluations."
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
            "Discussed course content with the professor, graded assignments, led discussions during lectures on specific course content, and provided personalized advice to students.",
            "Guided group projects on various topics related to the usability of programming languages or software engineering. Conducted office hours to assist students and gain insights through discussions.",
            "Received a 100\\% 'recommendation' rating from students in the course evaluations, while the professor rating was not applicable."
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
            "Proposed, designed, and developed new and innovative assignments and projects for the course, in collaboration with the professor. Graded students' assignments and collaborated with team members to discuss and refine course content.",
            "Held office hours and conducted all discussion sections to assist students in gaining a deeper understanding of course topics. Taught additional, non-required concepts during discussion sections.",
            "Received a 90\\% 'recommendation' rating from students in the course evaluations, while the professor rating was not applicable."
        ]
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
        "end_date": "now",
        "details": [
            "Worked closely with Jago, the founder and CEO, to discuss, suggest, design, and implement the system structure for the organization's blog and shopping website, including both the customer and supplier end. The aim was to create an easy-to-maintain structure that is fast for users to access and optimized for SEO.",
            "Utilized Nginx and Docker to deploy the system on a server with CI/CD pipeline spported by GitHub Actions.",
            "Deployed and integrated the Matomo tracking system with a focus on privacy concerns and wrote unit tests.",
            "Collaborated closely with the team and provided guidance in implementing the website.",
            "Integrated Stripe for payment processing and Auth0 with JWT for authentication into the website, and wrote tests.",
            "Worked with the design team to create and implement the blog site, embedding the abstract content into the main website and iOS app. Wrote unit tests for them."
        ]
    }
]

let source_combined = {
    "Research": [
        {
            "position": "Researcher",
            "institution": "Independent",
            "type": "Research",
            "start_date": "April 2024",
            "end_date": "now",
            "details": [
                "Worked with Jimmy Koppel on comparing and analyzing the advantages and disadvatanges of using tutorials over the Cody system.",
                "Discuss, design, and implement an analysis plan to examine the data and write a paper right now."
            ]
        },
        {
            "position": "Graduate Student Researcher",
            "institution": "University of California San Diego",
            "type": "Research",
            "start_date": "January 2023",
            "end_date": "now",
            "details": [
                "Worked with Michael Coblenz on the usability analysis of autocomplete, designed, executed an experiment with 32 participants and published on the Foundations of Software Engineering.",
                "Worked with Michael Coblenz on the usability analysis of Copilot. Designed an experiment and executing it now.",
                "Designed and implemented a consumer-level universe eye-tracking platform for both web and native based VSCode, a Chrome extension and a VSCode extension to collect data.",
                "Worked with Kristen Vaccaro and Deepak Kumar, and collaborated with two other group members to assess political bias in YouTube's recommendation system.",
                "Developed a method to match long and short items using a newly developed matching algorithm, and devised a mixed design to measure, collect, and evaluate outcome variables.",
                "Worked with Jude Abishek Rayan under the guidance of Steven Dow on improving conference communication protocols for projects CueHub and conference management.",
                "Designed, implemented, tested, and deployed software using React, Firebase, Flask, GitHub Actions, Cloudflare, and Oracle Cloud, based on the weekly discussion results. Improved the product in a rapid process and assisted in designing the entire research workflow."
            ]
        }
    ],
    "TA": [
        {
            "position": "Teaching Assistant",
            "institution": "University of California San Diego",
            "type": "TA",
            "start_date": "January 2023",
            "end_date": "now",
            "details": [
                "Major TA for Java and Data Structure courses (DSC30) with Soohyun Liao for two quarters.",
                "Sole TA for the Usability of Programming Languages course (CSE291) with Michael Coblenz for one quarter and TA for the same course for another quarter.",
                "Sole TA for Compilers (CSE 131) with Yufei Ding for one quarter, and Introduction to Data Visualization (DSC 106) with Sam Lau for another quarter.",
                "Guided group projects on programming languages and software engineering topics, and proposed, designed, and developed innovative course assignments.", "Managed course logistics, graded assignments, and collaborated with the professor and team members to refine course content. Conducted office hours and discussion sections to assist students and deepen their understanding.",
                "Received an 'Excellent' rating from the instructor, and over 90\\% of the students gave a 'recommendation' rating in the course evaluations."
            ]
        }
    ]
}

// === configuration
const job = ["Research-combined", "TA-combined", "Work"];
const research = ["Research", "TA-combined", "Work"];


function filterAndCombine(source, config, startTime) {
    let combined = [];
    for (let i of config) {
        if (i.includes("-combined")) {
            combined = combined.concat(source_combined[i.split("-")[0]]);
        } else {
            combined = combined.concat(source.filter(entry => entry.type === i && new Date(entry.start_date) >= startTime));
        }
    }
    return combined;
}

function convertToLatex(source) {
    // Sort the source by start_date
    source.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));

    let latexContent = "\\section{Experience}\n  \\resumeSubHeadingListStart\n";
    source.forEach(entry => {
        latexContent += `\n    \\resumeSubheading\n      {${entry.position}}{${entry.start_date} -- ${entry.end_date}}\n      {${entry.institution}}{}\n      \\resumeItemListStart\n`;
        entry.details.forEach(task => {
            latexContent += `        \\resumeItem{${task}}\n`;
        });
        latexContent += "      \\resumeItemListEnd\n";
    });
    latexContent += "  \\resumeSubHeadingListEnd\n";
    return latexContent;
}

const latexContent = convertToLatex(filterAndCombine(source, research, new Date("January 2021")));

fs.writeFileSync('Experience_.tex', latexContent);