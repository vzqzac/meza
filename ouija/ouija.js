const inquirer = require('inquirer')
const jdude = require('./something.json')
const fs = require('fs')

inquirer.prompt([
  {
    type: 'input',
    name: 'salutation',
    message: ' '
  }
]).then(function (answers) {
  answers.salutation.toLowerCase() === 'ouija answer me' ? console.log("I'm watching you, what do you want?") : console.log('Your words are useless human')
})
