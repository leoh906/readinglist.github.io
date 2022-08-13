window.addEventListener('load', () => {

listofItems = JSON.parse(localStorage.getItem('URL')) || [];
const userInput = document.querySelector('#user_name');
const newForm = document.querySelector('#creation_form')
const userName = localStorage.getItem('userName') || '';
const listItem = localStorage.getItem('URL') || '';

userInput.value = userName;

userInput.addEventListener('change', (e) => {
    localStorage.setItem('userName', e.target.value);
}) // ends the userInput event listener

// Create an event listener that reads when something is inputted via the form
newForm.addEventListener('submit', e => {
    // Use the prevent default method to stop refreshing the page after every submission
    e.preventDefault();

    const item = {
        linkName: e.target.elements.link_name.value,
        // Line 23 Breakdown: target = form we submitted, elements = an element in the statement (name),
        // linkName = the name "link_name", value = gets the actual value
        linkURL: e.target.elements.links.value,
        createdAt: new Date().getTime()
    }
    listofItems.push(item);

    localStorage.setItem('URL',JSON.stringify(listofItems));
    e.target.reset();

    DisplayList()

}) // ends the new form event listener

DisplayList()

}) // Ends the window.addEventListener thing

// Create a function that show the reading list
function DisplayList () {
    const wholeList = document.querySelector('#thingsinList')
    wholeList.innerHTML = '';

    // Display the list
    listofItems.forEach(thing => {
        const newItem = document.createElement('div');
        newItem.classList.add('new-item');
       
        // Create a const that makes the creates an <a> tag
        const newLink = document.createElement('a')
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = '<span class="material-symbols-outlined">delete</span>'
        newLink.href = thing.linkURL;                          
    // Ensure that the new target leads to a blank page
        newLink.target = '_blank';
        newLink.innerHTML = thing.linkName;

        wholeList.appendChild(newLink)
        wholeList.appendChild(deleteButton)

       
        deleteButton.addEventListener('click', e => {
            listofItems = listofItems.filter(t => t != thing);
            localStorage.removeItem('URL', JSON.stringify(listofItems))
            DisplayList()
        })  // End of the deleteButton event Listener  
        
    })
} // End of DisplayList function
















