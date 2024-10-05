
const container = document.createElement('div');

let div1 = createStyledDiv('Home');
let div2 = createStyledDiv('About');
let div3 = createStyledDiv('Contact');

let elementTemplate = document.createElement('template');
let elementTemplate1 = createTemplate('Home');
let elementTemplate2 = document.createElement('template');
let elementTemplate3 = document.createElement('template');

container.append(div1);
container.append(div2);
container.append(div3);

container.setAttribute('style', 
    'display: flex; justify-content: space-between;');

elementTemplate.innerHTML = `
    <style>
        .lesson {
            border: 5px solid pink;
            width: auto;
            height: var(--lesson-height, auto);
            box-shadow: 5px 5px 5px grey;
            background-color: aliceblue;
            text-align: center;
            padding: 10px;
            margin: 100px;
        }
    </style>
    <div class="lesson">
        <h1>Test</h1>
        <p>Test Template</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
`;  

elementTemplate1 = createTemplate(`
    <h1>Home</h1>
    <p>Home Template</p>
    <p>Welcome to the home page.</p>
`);

elementTemplate2 = createTemplate(`
    <h1>About</h1>
    <p>About Template</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
`);

elementTemplate3 = createTemplate(`
    <h1>Contact</h1>
    <p>Contact Template</p>
    <p>Feel free to reach out to us.</p>
`);
function createStyledDiv(content) {
    let div = document.createElement('div');
    div.innerHTML = content;
    div.setAttribute('style', 
        `border: 5px solid pink; 
        width: auto; 
        height: auto; 
        box-shadow: 5px 5px 5px grey; 
        background-color: aliceblue; 
        text-align: center; 
        padding: 10px; 
        margin: 100px;`);
    return div;
}

function createTemplate(content) {
    let template = document.createElement('template');
    template.innerHTML = `
        <style>
            .lesson {
                border: 5px solid pink;
                width: auto;
                height: var(--lesson-height, auto);
                box-shadow: 5px 5px 5px grey;
                background-color: aliceblue;
                text-align: center;
                padding: 10px;
                margin: 100px;
            }
        </style>
        <div class="lesson">
            ${content}
        </div>
    `;
    return template;
}

class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.append(container);
    }
}
customElements.define('my-custom-component', MyCustomElement);

const templates = [elementTemplate1, elementTemplate2, elementTemplate3];
const divs = [div1, div2, div3];

divs.forEach((div, index) => {
    div.addEventListener('click', () => {
        const shadow = document.querySelector('my-custom-component').shadowRoot;
        shadow.innerHTML = ''; // Clear previous content
        shadow.append(container); // Re-append the container
        shadow.append(templates[index].content.cloneNode(true)); // Append the selected template
    });
});
