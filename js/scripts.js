

fetch('https://randomuser.me/api/?results=12&inc=name,location,email,picture')
    .then(response => response.json())
    .then(data => generatePerson(data));



function generatePerson(data) {
    const gallery = document.querySelector('.gallery');
    const html = `<img src='${data}' alt>`;






    //     const html = `
//     <div class="card">
//     <div class="card-img-container">
//         <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
//     </div>
//     <div class="card-info-container">
//         <h3 id="name" class="card-name cap">first last</h3>
//         <p class="card-text">email</p>
//         <p class="card-text cap">city, state</p>
//     </div>
// </div>
// `
gallery.insertAdjacentHTML('beforeend', html)
};



