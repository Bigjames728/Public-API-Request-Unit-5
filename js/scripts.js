

const parseResponseToJson = (res) => res.json();
const generatePersonOnPage = (data) => generatePerson(data);



function fetchData(url) {
    return fetch(url)
            .then(parseResponseToJson)
            .then(generatePersonOnPage)
}

function generatePerson(data) {
    const gallery = document.querySelector('.gallery');
    let html = '';
    data.results.forEach((emp) =>
        html += `
        <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${emp.picture.large}" alt="profile picture">
                </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${emp.name.first} ${emp.name.last}</h3>
                <p class="card-text">${emp.email}</p>
                <p class="card-text cap">${emp.location.city}, ${emp.location.state}</p>
            </div>
        </div>
        `);
    gallery.insertAdjacentHTML('beforeend', html);
};




fetchData('https://randomuser.me/api/?results=12&inc=name,location,email,picture')



// Modal Code



function generateModal(id) {
    let el = document.getElementById(id);
    let body = document.querySelector("body");
    let bg = document.createElement("div");
    bg.className = "modal-container";

    body.appendChild(bg);

    let close = document.createElement("span");
    close.className = "modal-close-btn";
    close.insertAdjacentHTML('beforeend', 'x');
    close.addEventListener('click', function () {
        let overlay = body.querySelector(".modal-container");
        let closebtn = parent.querySelector(".modal-close-btn");

        body.removeChild(overlay);

        el.removeChild(closebtn);
    });


}

generateModal();

// document.querySelector('.card').addEventListener('click', (e) => {
//     console.log(e);
// })



/* <div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div> */