
  const createManager = (manager) => {
    return `<article class="singleCards">
    <div class="header">
    <h2> Name: ${manager.name}</h2>
    </div>
    <div class="body">
    <h3> Team role: ${manager.getRole()}</h3>
    <ul>
    <li> Email: ${manager.email}</li>
    <li> id: ${manager.id}</li>
    <li>Office Number: ${manager.officeNumber}</li>
    </ul>
    </div>
    </article>`
    };
    
const createEngineer = (engineer) => {
        return `<article class="singleCards">
        <div class="header">
        <h2> Name: ${engineer.name}</h2>
        </div>
        <div class="body">
        <h3> Team role: ${engineer.getRole()}</h3>
        <ul>
        <li> Email: ${engineer.email}</li>
        <li> id: ${engineer.id}</li>
        <a href ="https://github.com/${engineer.github}" target="_blank"><li>Github: ${engineer.github}
        </li></a>
        </ul>
        </div>
        </article>`
        };

        const createIntern = (intern) => {
            return `<article class="singleCards">
            <div class="header">
            <h2> Name: ${intern.name}</h2>
            </div>
            <div class="body">
            <h3> Team role: ${intern.getRole()}</h3>
            <ul>
            <li> Email: ${intern.email}</li>
            <li> id: ${intern.id}</li>
            <li>Office Number: ${intern.school}</li>
            </ul>
            </div>
            </article>`
            };

function generateHTML(employee){
  
    let mangerHTMLTemplate = ""
    let engineerHTMLTemplate = ""
    let internHTMLTemplate = ""
    for(let i=0;i<employee.length;i++){
        if(employee[i].getRole() =="Manager"){
            mangerHTMLTemplate += createManager(employee[i])

        }else if(employee[i].getRole()== "Engineer"){
            engineerHTMLTemplate += createEngineer(employee[i])
        }else {
            internHTMLTemplate += createIntern(employee[i])
        }
    }
    console.log(mangerHTMLTemplate,engineerHTMLTemplate,internHTMLTemplate,"---template-----")
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>My team</title>
    </head>
    <body>
        <nav class="navbar" id="navbar">
            <div class="container-fluid" id="navbar-container">
              <span class="navbar-text" id="nav-text">
                My team
              </span>
            </div>
          </nav>
          <section>
          <main>
          ${mangerHTMLTemplate}
          <section>
          ${engineerHTMLTemplate}
          ${internHTMLTemplate}
          </section>
          </main>
          </body>
          </html>`
}


module.exports = generateHTML;