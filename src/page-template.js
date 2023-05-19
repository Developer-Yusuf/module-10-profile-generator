// Manager card template
const manager = managerData => {
  return `
  <div id="${managerData.getRole()}-card" class="box card">
    <div class="box name-role manager-name">
      <h2>${managerData.getName()}</h2>
      <h3>Role: ${managerData.getRole()}</h3>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${managerData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
`
}
// Engineer card template
const engineer = engineerData => {
  return `
  <div id="${engineerData.getRole()}-card" class="box card">
    <div class="box name-role engineer-name">
      <h2>${engineerData.getName()}</h2>
      <h3>Role: ${engineerData.getRole()}</h3>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineerData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
        
        <li class="list-group-item">Github:
        <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
        </li>
      </ul>
    </div>
  </div>
`
}
// Intern card template
const intern = internData => {
  return `
  <div id="${internData.getRole()}-card" class="box card">
    <div class="box name-role intern-name">
      <h2>${internData.getName()}</h2>
      <h3>Role: ${internData.getRole()}</h3>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${internData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
        <li class="list-group-item">School: ${internData.getSchool()}</li>
      </ul>
    </div>
  </div>
`
}
// iterates through answers array, creates cards for each team member, then combines all cards together
const employeesDiv = employeesArr => {
  let employeeHtml = ''

  for ( i = 0; i < employeesArr.length; i++ ) {
    if (employeesArr[i].getRole() === "Manager"){
      employeeHtml = employeeHtml + manager(employeesArr[i])
    }
    if (employeesArr[i].getRole() === "Engineer"){
      employeeHtml = employeeHtml + engineer(employeesArr[i])
    }
    if (employeesArr[i].getRole() === "Intern"){
      employeeHtml = employeeHtml + intern(employeesArr[i])
    }
  } return employeeHtml
}
// html page template
const template = data => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Team Profile 💪</title>
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
      <link rel="stylesheet" href="./style.css"><source src="../page-template.js" type="page-template">
    </head>
    <body>
      <header class = "container">
        <div class = "flex box justify-center my-team">
          <h1> My Team </h1>
        </div>
      </header>
      <main class = "container">
      ${employeesDiv(data)}
      </main>
    </body>
  </html>
`
}

module.exports = template;
