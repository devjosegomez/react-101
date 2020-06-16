console.log ( 'Basics of JS 101' )
const name = 'José'
let jobPosition = 'MERN Developer'
let appContainer = document.querySelector ( '#app' )

//Concatenate old way
console.log ( 'Name: ' + name + ', Position: ' +  jobPosition )

//Concatenate with Template String ${} / String literals
console.log ( `Name: ${ name }, Position: ${ jobPosition }` )

//Old way
let htmlOld = '<ul>' +
                '<li> Nombre: ' + name + '</li>' +
                '<li> Position: ' + jobPosition  + '</li>' +
            '</ul>'
appContainer.innerHTML = htmlOld

//New way using Template string ${} / / String literals
let htmlNew = `
                <ol>
                    <li> Nombre: ${ name } </li>
                    <li> Position: ${ jobPosition } </li>
                </ol>
              `
appContainer.innerHTML = htmlNew