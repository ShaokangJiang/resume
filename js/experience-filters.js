(function () {
  'use strict';
  window.initExperienceFilters = function (container, render) {
    const heading = document.getElementById('experience-title');
    const lowercaseHeading = heading.textContent === heading.textContent.toLowerCase();
    const groups = [
      ['All', [...new Set(source.map(entry => entry.type))], 'Experience'],
      ['Research', ['Research', 'Research-class'], 'Research Experience'],
      ['TA & Work', ['TA', 'Work'], 'Teaching & Work Experience']
    ];
    const buttons = groups.map(([label, types, title]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = label;
      button.setAttribute('aria-controls', container.dataset.experienceFilters);
      button.addEventListener('click', () => select(button, types, title));
      if (container.childNodes.length && document.body.classList.contains('pure')) container.append(' ');
      container.append(button);
      return button;
    });
    function select(selected, types, title) {
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button === selected)));
      render(types);
      heading.textContent = lowercaseHeading ? title.toLowerCase() : title;
    }
    select(buttons[1], groups[1][1], groups[1][2]);
  };
})();
