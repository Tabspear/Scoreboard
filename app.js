
/*const title = React.createElement(
    'h1',
    {id: "main-title",  title: "this is a title."},
    'My First React ELement!'

);

const description = React.createElement(
    'p',
    null,
    'I just learned how to create a react node and render it into the DOM.'
)

const header = React.createElement(
    'header',
    null, 
    title,
    description
)
console.log(title)


ReactDOM.render(
    header,
    document.getElementById('root')
) 
*/

// JSX

const title = "My First React ELement"
const myTitle = 'main-title';
const name = ""

const description = "I just learned how to create a react node and render it into the DOM"
   

const header = (
    <header>
        <h1 id ={myTitle}>{title}</h1>
        <p>{description}</p>
        {/* <input/> */}
    </header>
)
console.log(title)


ReactDOM.render(
    header,
    document.getElementById('root')
)