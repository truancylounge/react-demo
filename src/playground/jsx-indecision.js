// JSX - Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'This is more info',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form submit')
    const option = e.target.elements.option.value
    if(option) {
        app.options.push(option)
    }
    e.target.elements.option.value = ''
    renderFormApp()
}

const onMakeDecision = () => {
    console.log('OnMake decision!')
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option)
}

const onRemoveAllOptions = () => {
    app.options = []
    renderFormApp()
}

const renderFormApp = () => {
    const template = (
        <div>
            <h2>{app.title}</h2>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={onRemoveAllOptions}>Remove All</button>
            <ol>
                { app.options.map(option => <li key={option}>{option}</li>)  }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        </div>
    )

    ReactDOM.render(template, document.getElementById('app'));
}

renderFormApp()


const username = 'Lalith MANNUR';
const age = 20;
let userLocation;

function getLocation(userLocation) {
    if(userLocation) {
        return userLocation
    } else {
        return 'Unknown';
    }
}
var template2 = (
    <div>
        <h2> {username.toUpperCase()} </h2>
        {age > 18 && <p> Age: {age}</p>}
        <p> Location: {getLocation(userLocation)}</p>

    </div>
);

ReactDOM.render(template2, document.getElementById('app2') );




