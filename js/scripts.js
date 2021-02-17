const gallery = document.querySelector('.gallery');

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => generatePerson(data));



function generatePerson(data) {
    const html = `
    <img src='${data}' alt>
    `;
    gallery.insertAdjacentHTML('beforeend', html)

};



