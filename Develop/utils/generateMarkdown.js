// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

class markdown{
  constructor(data){
    this.data = data;
    this.licenseInfo; 
  }

  print(){
    return(JSON.stringify(this.data))
  }
  renderLicenseBadge(license) {
    
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink() {
  let license = this.data.License;
  let licenseLink = ``
  if(license == "BSD"){
    licenseLink = `[BSD License](https://opensource.org/licenses/BSD-3-Clause)`
  }else if(license == "Apache"){
    licenseLink = `[Apache License](https://www.apache.org/licenses/LICENSE-2.0)`
  }else if(license == "GNU"){
    licenseLink = `[GNU License](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  }else if(licenseLink == "MIT"){
    licenseLink = `[MIT](https://opensource.org/licenses/MIT)`
  }else if(licenseLink == "Other"){
    licenseLink = "Other"
  }else{
    licenseLink = "None"
  }
  this.licenseInfo = `license /n${licenseLink}`
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
generateMarkdown() {
  const{title,Disc,Install,Usage,Credits} = this.data
  return `
  # ${title}<br>
  ## Discription <br>
  ${Disc}<br>
  ## Install Instructions <br>
  ${Install}
  ## Usage
  ${Usage}<br>
  ## License<br>
  ${this.licenseInfo}<br>



`;
}
}


module.exports = markdown;
