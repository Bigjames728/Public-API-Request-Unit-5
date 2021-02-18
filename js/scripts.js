const gallery = document.querySelector('.gallery');

fetch('https://randomuser.me/api/?inc=picture,name,email,location/?page=3&results=12&seed=abc')
    .then(response => response.json())
    .then(data => console.log(data));



function generatePerson(data) {
    const html = `
    <img src='${data}' alt>
    `;
    gallery.insertAdjacentHTML('beforeend', html)

};



