

// Create custom styled divs for the navbar buttons
const homeDiv = createStyledDiv('Home', nbStyle );
const aboutDiv = createStyledDiv('About', nbStyle );
const contactDiv = createStyledDiv('Contact', nbStyle );

// Set ids for the navbar buttons
homeDiv.setAttribute('id', 'home-div');
aboutDiv.setAttribute('id', 'about-div');
contactDiv.setAttribute('id', 'contact-div');

// Container for the navbar buttons
const container = document.createElement('div');
container.setAttribute('style', containerStyle);

// Append the navbar buttons to the container
[homeDiv, aboutDiv, contactDiv].forEach(div => container.appendChild(div));

// Create content div for the app
const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content-div');


// Append container & content to the app
const app = document.getElementById('app');
app.appendChild(container);
app.appendChild(contentDiv);


// Create templates
const homeTemplate = createTemplate('Home', 'Welcome to the home page.', templateCSS);
const aboutTemplate = createTemplate('About', 'Learn more about us.', templateCSS);
const contactTemplate = createTemplate('Contact', 'Feel free to reach out to us.', templateCSS);


// Create custom components using templates
const components = [
    { component: 'home-component', template: homeTemplate },
    { component: 'about-component', template: aboutTemplate },
    { component: 'contact-component', template: contactTemplate }
];

// Define custom elements
components.forEach(({ component, template }) => {
    customElements.define(component, class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }

        connectedCallback() {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

    });
});

// Create sections array
const sections = [
    { id: 'home-div', component: 'home-component' },
    { id: 'about-div', component: 'about-component' },
    { id: 'contact-div', component: 'contact-component' }
];

// Add event listeners
sections.forEach(section => {
    document.getElementById(section.id).addEventListener('click', () => {
        
        contentDiv.innerHTML = `<${section.component}></${section.component}>`;

    });
});

// Functions

// Creates template for the custom components
function createTemplate(title, content, styleSheet) {
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            ${styleSheet}
        </style>
        <div class="content">
            <h1>${title}</h1>
            <p>${content}</p>
        </div>
    `;
    return template;
}

//Styled Div
function createStyledDiv(content, style) {
    let div = document.createElement('div');
    div.innerHTML = content;
    div.setAttribute('style', style);
    return div;
}

// Navbar Styling
const nbStyle = `border: 4px solid tomato;
                border-radius: 10px;
                padding: 5px;
                width: 100%;
                text-align: center;
                font-size: 2rem; 
                box-shadow: 5px 5px 5px grey; 
                background-color: aliceblue; 
                margin:10px 20px 10px 20px; 
                display: inline-block;
`;

const containerStyle = `
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

// Template Styling
const templateCSS = `.content {  
                                width: auto;
                                background-color: aliceblue;
                                border: 3px solid pink;
                                box-shadow: 5px 5px 5px grey;
                                display: inline-block;
                                margin: 10px 20px 50px 20px;
                                border-radius: 10px; 
                    }
                    .content h1 { 
                                color: darkblue;
                                margin: 0;
                                padding:  0 20px ;
                                font-size: 5rem; 
                    }
                    .content p { 
                                color: darkgreen;
                                margin: 0;
                                padding: 20px;
                                font-size: 2rem;
                    }
`;
