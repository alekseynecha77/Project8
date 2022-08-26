const card = document.querySelector('.card');
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`


fetch(urlAPI)
.then(response => response.json())
.then(data => generateImage(data.message))

function generateImage(data){
    const html = `
    <img src ='${data} 'alt>
    <p>llllll<p>
    
    `;
    card.innerHTML = html;

}