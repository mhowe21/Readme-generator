// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

class markdown{
  constructor(data){
    this.data = JSON.stringify(data);
  }

  print(){
    return(this.data)
  }
  renderLicenseBadge(license) {

  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink(license) {

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
generateMarkdown(data) {
  return `# ${data.title}

`;
}
}


module.exports = markdown;
