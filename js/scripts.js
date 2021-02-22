

const parseResponseToJson = (res) => res.json();
const generatePersonOnPage = (data) => generatePerson(data);
let arrayOfPeople;


function fetchData(url) {
    return fetch(url)
            .then(parseResponseToJson)
            .then(generatePersonOnPage)
            .then(generateModal)
            
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




fetchData('https://randomuser.me/api/?results=12&inc=name,gender,location,email,picture,cell,dob,nat&nat=au,br,ca,us')



// Modal Code



function generateModal() {
    let html = `
    <div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            
        </div>
    </div>
    `;

    gallery.insertAdjacentHTML('afterend', html)
    document.querySelector(".modal-container").style.display = "block"; // I did this for now so that the modal shows up on refresh of page. Trying to get correct info to show up in modal.

    document.getElementById('modal-close-btn').addEventListener('click', () => {
        document.querySelector(".modal-container").style.display = "none";
        console.log("Modal should be closed now");
    })
}

function updateModal(emp) {
    document.querySelector('.modal-info-container').innerHTML = '';
    

    document.querySelector('.modal-info-container') += `
            <img class="modal-img" src="${emp.picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${emp.name.first} ${emp.name.last}</h3>
                <p class="modal-text">${emp.email}</p>
                <p class="modal-text cap">${emp.location.city}</p>
                <hr>
                <p class="modal-text">${emp.cell}</p>
                <p class="modal-text">${emp.location.street.number} ${emp.location.stree.name}, ${emp.location.city}, ${emp.location.state} ${emp.location.postcode}</p>
                <p class="modal-text">Birthday: ${emp.dob.date}</p>
            `;
            document.querySelector('.modal-info-container').insertAdjacentHTML('afterbegin', modalInfoContainer);

}

function addClickabilityToCards(data) {
    document.querySelectorAll('.card').forEach((card) => {
        addEventListener('click', () => {
            document.querySelector(".modal-container").style.display = "block";
            updateModal(i);
        })

    })
}






// below code is all the information that will change for every modal pop up inside of the modal-info-container div
/* <img class="modal-img" src="${emp.picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${emp.name.first} ${emp.name.last}</h3>
            <p class="modal-text">${emp.email}</p>
            <p class="modal-text cap">${emp.location.city}</p>
        <hr>
            <p class="modal-text">${emp.cell}</p>
            <p class="modal-text">${emp.location.street.number} ${emp.location.stree.name}, ${emp.location.city}, ${emp.location.state} ${emp.location.postcode}</p>
            <p class="modal-text">Birthday: ${emp.dob.date}</p> */