const time = new Date();
let day = time.getDate();
let month = time.getMonth();
let year = time.getFullYear();



let dateContainer = document.getElementById('header__paragraph1');

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let currentDate = `${day} ${monthNames[month]} ${year}`;

dateContainer.innerHTML = currentDate;


let timeContainer = document.getElementById('header__paragraph2');

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeContainer.innerText = clockStr;
}

updateTime();
let timeOutput = setInterval(updateTime,1000);
