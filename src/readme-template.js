 module.exports = generatePage;
const generatePage = (title, github) => {
    return `
      # ${title}
  
      # Description
      - ${descriptionInput}
  
      # Installation
      - ${installInput}
  
      # Technologies Used
      - ${languages}
  
      # Link to Repository
      ##<a href="https://github.com/${github}">Github</a>
  
      # License
      ### ${license}
  
    `;
  };
  
  
  fs.writeFile('README.md', generatePage(title, github), err => {
    if (err) throw new Error(err);
  
    console.log('README created!');
  });


 