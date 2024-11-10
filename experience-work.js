const fs = require('fs');
const { source, source_combined } = require('./experience-source');

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
        // if an experience has a work_details field, use that instead
        if (entry.work_details) {
            entry.work_details.forEach(task => {
                latexContent += `        \\resumeItem{${task}}\n`;
            });
        } else {
            entry.details.forEach(task => {
                latexContent += `        \\resumeItem{${task}}\n`;
            });
        }
        latexContent += "      \\resumeItemListEnd\n";
    });
    latexContent += "  \\resumeSubHeadingListEnd\n";
    return latexContent;
}

const latexContent = convertToLatex(filterAndCombine(source, job, new Date("January 2021")));

fs.writeFileSync('Experience_work.tex', latexContent);