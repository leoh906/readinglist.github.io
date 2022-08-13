window.addEventListener('load', () => {

listofItems = JSON.parse(localStorage.getItem('listofItems')) || [];
const userInput = document.querySelector('#user_name');
const newForm = document.querySelector('#creation_form')
const linkInput = document.querySelector('#my_link');
const linkName = document.querySelector('#link_name');

const userName = localStorage.getItem('username') || ' ';

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
    localStorage.setItem('URL',JSON.stringify(item))
    e.target.reset();

    DisplayList()

}) // ends the new form event listener

DisplayList()

}) // Ends the window.addEventListener thing

// Create a function that show the reading list
function DisplayList () {
    const wholeList = document.getElementById('thingsinList')
    // Display the list
    listofItems.forEach(item => {
        const newItem = document.createElement('div')
        newItem.classList.add('new-Item')
        // Create a const that makes the creates an <a> tag
        const newLink = document.createElement('a')
        const deleteButton = document.createElement('button')
        newLink.href = item.linkURL;                          
 // Use encode URI to convert the String to a URL
    // Ensure that the new target leads to a blank page
        newLink.target = '_blank';
        newLink.innerHTML = item.linkName;

        wholeList.appendChild(newLink)

    });

   
}













