

const parseResponseToJson = (res) => res.json();
const generatePersonOnPage = (data) => generatePerson(data);



function fetchData(url) {
    return fetch(url)
            .then(parseResponseToJson)
            .then( data => {
                generatePersonOnPage(data);
                generateModal(data);
                addClickHandler(data);
            })
            
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



function generateModal(emp) {
    console.log(emp);
    let modal = `
        <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            </div>
            <div class="modal-info-container">       
            </div>
        </div>
        `;

    gallery.insertAdjacentHTML('afterend', modal)
    document.querySelector(".modal-container").style.display = "none"; 

    document.getElementById('modal-close-btn').addEventListener('click', (e) => {
        document.querySelector(".modal-container").style.display = "none";
        console.log(e);
    })
}



function updateModal(emp) {
    console.log(emp);
    
    let modalInfo = document.querySelector('.modal-info-container');
    let modal = document.querySelector('.modal');
    modalInfo.innerHTML = '';
    
    modalInfo += `
            <img class="modal-img" src="${emp.results[0].picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${emp.results[0].name.first} ${emp.results[0].name.last}</h3>
                <p class="modal-text">${emp.results[0].email}</p>
                <p class="modal-text cap">${emp.results[0].location.city}</p>
                <hr>
                <p class="modal-text">${emp.results[0].cell}</p>
                <p class="modal-text">${emp.results[0].location.street.number} ${emp.results[0].location.street.name}, ${emp.results[0].location.city}, ${emp.results[0].location.state} ${emp.results[0].location.postcode}</p>
                <p class="modal-text">Birthday: ${emp.results[0].dob.date}</p>
            `;

    
    modal.insertAdjacentHTML('afterbegin', modalInfo);
    console.log(modalInfo);

}



function addClickHandler(myData) {
    console.log(myData);
    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {
            document.querySelector(".modal-container").style.display = "block";
            updateModal(myData);
        })
        
    })
}


