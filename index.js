window.addEventListener('load', () => {

list = JSON.parse(localStorage.getItem('listItems')) || [];
const userInput = document.querySelector('.user_name');
const newForm = document.querySelector('.creation_form')
const linkInput = document.querySelector('.my_link');
const linkName = document.querySelector('.link_name');

const userName = localStorage.getItem('username') || ' ';

userInput.value = userName;

userInput.addEventListener('change', (e) => {
    localStorage.setItem('userName',e.target.value);
})

newForm.addEventListener('change', (e) => {
e.preventDefault();

const todo = {
    content: e.target.elements.content.value,
	category: e.target.elements.category.value,
	done: false,
	createdAt: new Date().getTime()
}

listItems.push(todo);
localStorage.setItem('listItems',JSON.stringify(todos));

e.target.removeEventListener();
DisplayList()


})

// Create a function that show the reading list
function DisplayList () {
    const thingsinList = document.querySelector('.thingsinList')
    thingsinList.innerHTML = "";

    listItems.forEach(listItems => {
        const formOutline = document.createElement('div');
        formOutline.classList.add('list-item');

        // Things to create:
        // Create an element that holds the link, the a tag
        const content = document.createElement('div')
        const link = document.createElement('a')
        const deleteButton = document.createElement('button')
        // Create the href value 
        link.href = linkInput;
        link.target = '_blank';
        // Create the Name of the Link
        link.innerHTML = linkName;

    })
}













}) // Ends the window.addEventListener thing