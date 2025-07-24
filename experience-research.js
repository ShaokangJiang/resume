const fs = require('fs');
const { source, source_combined } = require('./experience-source');

// === configuration
const job = ["Research-combined", "TA-combined", "Work"];
const research = ["Research-all", "TA", "Work"];

// add an additional field to only include certain text in certain settings
function filterAndCombine(source, config, startTime) {
    let combined = [];
    for (let i of config) {
        if (i.includes("-combined")) {
            combined = combined.concat(source_combined[i.split("-")[0]]);
        } else if (i.includes("-all")) {
            i = i.split("-")[0];
            combined = combined.concat(source.filter(entry => entry.type === i));
        } else {
            combined = combined.concat(source.filter(entry => entry.type === i && new Date(entry.start_date) >= startTime));
        }
    }
    return combined;
}

function convertToLatex(source, types) {
    // Sort the source by start_date
    source.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
    // for anything have the same start date, sort by end_date, now is the latest
    source.sort((a, b) => {
        if (new Date(a.start_date).getTime() === new Date(b.start_date).getTime()) {
            let endA = a.end_date;
            let endB = b.end_date;
            if (endA === "now") {
                endA = new Date().toISOString();
            }
            if (endB === "now") {
                endB = new Date().toISOString();
            }
            return new Date(endB).getTime() - new Date(endA).getTime();
        }
        return 0;
    });

    let latexContent = `\\section{${types} Experience}\n  \\resumeSubHeadingListStart\n`;
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

fs.writeFileSync('Experience_Other.tex', convertToLatex(filterAndCombine(source, research.slice(1), new Date("January 2021")), "Other"));

fs.writeFileSync('Experience_Research.tex', convertToLatex(filterAndCombine(source, ["Research", "Research-class"], new Date("January 2021")), "Research"));


fs.writeFileSync('Experience_TA.tex', convertToLatex(filterAndCombine(source, ["Research-combined", "TA"], new Date("January 2020")), ""));