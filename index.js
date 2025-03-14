import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:',
    },
  ])
  .then((answers) => {
    const readmeContent = `# ${answers.title}

## Description
${answers.description}
`;

    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md has been generated!');
  })
  .catch((error) => console.error(error));
