

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



function generateModal() {
    let modal = `
        <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            
                <div class="modal-info-container">
                </div>       
            </div>
        </div>
        `;

    gallery.insertAdjacentHTML('afterend', modal)
    document.querySelector(".modal-container").style.display = "none"; 

    document.getElementById('modal-close-btn').addEventListener('click', (e) => {
        document.querySelector(".modal-container").style.display = "none";
    })
}



function updateModal(emp) {
    //The below code is to get the DOB data and structure it like mm/dd/yyyy on the modal
    const date = new Date (`${emp.dob.date}`);
    const month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear();
    const mmddyy = `${month}/${day}/${year}`;
    //The below code selects the modal-info-container and sets the innerHTML to empty. Then, I set the innerHTML to the employee that is clicked.
    let modalInfo = document.querySelector('.modal-info-container');
    modalInfo.innerHTML = '';
    modalInfo.innerHTML = `
        <img class="modal-img" src="${emp.picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${emp.name.first} ${emp.name.last}</h3>
            <p class="modal-text">${emp.email}</p>
            <p class="modal-text cap">${emp.location.city}</p>
            <hr>
            <p class="modal-text">${emp.cell}</p>
            <p class="modal-text">${emp.location.street.number} ${emp.location.street.name}, ${emp.location.city}, ${emp.location.state} ${emp.location.postcode}</p>
            <p class="modal-text">Birthday: ${mmddyy}</p>
        `;
}



function addClickHandler(myData) {
    
    document.querySelectorAll('.card').forEach((card, i) => {
        card.addEventListener('click', () => {
            document.querySelector(".modal-container").style.display = "block";
            
            updateModal(myData.results[i]);
        })
        
    })
}


