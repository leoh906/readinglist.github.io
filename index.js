window.addEventListener('load', () => {
    listofItems = JSON.parse(localStorage.getItem('userName'))
    const userInput = document.querySelector('#user_name')
    const newForm = document.querySelector('#creation_form')
    const userName = localStorage.getItem('userName') || '';

    userInput.value = userName;

    userInput.addEventListener('change', (e) => {
        localStorage.getItem('userName',e.target.value)
        
    })

   

}) // Ends the window.addEventListener

