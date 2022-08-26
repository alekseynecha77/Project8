const card = document.querySelector('.card');
// const gridContainer = document.querySelector(".grid-container");

// const urlAPI = `http://randomuser.me/api/?results=12&inc=name, picture,
// email, location, phone, dob &noinfo &nat=US`

// let employees = [];




fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data => generateImage(data.message))

function generateImage(data){
    const html = `
    <img src ='${data}' alt>
    
    `;
    card.innerHTML = html;

}