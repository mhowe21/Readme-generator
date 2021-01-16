// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

class markdown {
  constructor(data) {
    this.data = data;
    this.licenseInfo = ``;
    this.licenseBadge = ``;
    this.license = data.License;
  }

  print() {
    return JSON.stringify(this.data);
  }
  renderLicenseBadge() {
    if (this.license == "BSD") {
      this.licenseBadge = `![BSD License](https://img.shields.io/badge/license-BSD-green)`;
    } else if (this.license == "Apache") {
      this.licenseBadge = `![Apache License](https://img.shields.io/badge/license-Apache-green)`;
    } else if (this.license == "GNU") {
      this.licenseBadge = `![GNU License](https://img.shields.io/badge/license-GNU-green)`;
    } else if (this.license == "MIT") {
      this.licenseBadge = `![MIT](https://img.shields.io/badge/license-MIT-green)`;
    } else if (this.license == "Other") {
      this.licenseBadge = "Other";
    }else{
      this.licenseBadge = "";
    }
  }

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  renderLicenseLink() {
    let licenseLink = ``;
    if (this.licenseInfo == "BSD") {
      licenseLink = `[BSD License](https://opensource.org/licenses/BSD-3-Clause)`;
    } else if (this.license == "Apache") {
      licenseLink = `[Apache License](https://www.apache.org/licenses/LICENSE-2.0)`;
    } else if (this.license == "GNU") {
      licenseLink = `[GNU License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
    } else if (this.license == "MIT") {
      licenseLink = `[MIT](https://opensource.org/licenses/MIT)`;
    } else if (this.license == "Other") {
      licenseLink = "Other";
    } else {
      licenseLink = "";
    }
    this.licenseInfo = `license ${licenseLink}`;
  }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  renderLicenseSection() {}

  // TODO: Create a function to generate markdown for README
  generateMarkdown() {
    const { title, Disc, Install, Usage, Credits } = this.data;
    return `
  # ${title}<br>
  ## Discription    ${this.licenseBadge}<br>
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
