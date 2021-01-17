class markdown {
  constructor(data) {
    this.data = data;
    this.licenseInfo = ``;
    this.licenseBadge = ``;
    this.license = data.License;
    this.Usage = ``;
    this.Install = ``;
    this.Credits = ``;
    this.Description = ``;
    this.Title = ``;
    this.Questions = ``;
    this.TOCdata = ``;
  }

  print() {
    return JSON.stringify(this.data);
  }

  renderBody() {
    const { Title, Description, Install, Usage, Credits, Email, Github } = this.data;
    if (Title) {
      this.Title = `# ${Title}`;
    }
    if (Description) {
      this.Description = `## Description\r\n${Description}`;
    }
    if (Install) {
      this.Install = `## Install\r\n${Install}`;
    }
    if (Usage) {
      this.Usage = `## Usage\r\n${Usage}`;
    }
    if (Credits) {
      this.Credits = `## Credits\r\n${Credits}`;
    }
    if (Email || Credits) {
      this.Questions = `## Questions\r\nIf you have questions about this project you can reach me at <${Email}>.\r\nYou can also view other projects at <${Github}>.`;
    }
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
    } else {
      this.licenseBadge = "";
    }
  }

  renderLicenseLink() {
    let licenseLink = ``;
    if (this.license == "BSD") {
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
      licenseLink = false;
    }
    if (licenseLink == false) {
      this.licenseInfo = ``;
      return this.licenseInfo;
    } else {
      this.licenseInfo = `## License\r\n${licenseLink} infomation`;
      return this.licenseInfo;
    }
  }
  renderTOC(){

    let tocHeaders = [];
    if(this.data.TOC == "Yes"){
      this.TOCdata = `## Table of Contents\r\n`
      for(const [key,value] of Object.entries(this.data)){
        if(value && key!="TOC"){
          
          this.TOCdata = this.TOCdata + (`* [${key}](#${key})\r\n`)
          
        }

      }
    }
    return (this.TOCdata)
  }

  generateMarkdown() {
    return `
  ${this.Title} ${this.licenseBadge}\r\n
  ${this.Description}
  ${this.TOCdata}
  ${this.Install}
  ${this.Usage}
  ${this.licenseInfo}
  ${this.Credits}
  ${this.Questions}
  
  

`;
  }
}

module.exports = markdown;
