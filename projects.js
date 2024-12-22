const fs = require('fs');
const { projects_all } = require('./project-source');

let source = projects_all;

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
