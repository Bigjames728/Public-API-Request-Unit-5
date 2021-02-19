

const parseResponseToJson = (res) => res.json();
const generatePersonOnPage = (data) => generatePerson(data);



function fetchData(url) {
    return fetch(url)
            .then(parseResponseToJson)
            .then(generatePersonOnPage)
}

function generatePerson(data) {
    const gallery = document.querySelector('.gallery');
    let person = data.results;
    let html = '';
    data.results.forEach((emp) =>
        html += `
        <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${person[0].picture.large}" alt="profile picture">
                </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${person[0].name.first} ${person[0].name.last}</h3>
                <p class="card-text">${person[0].email}</p>
                <p class="card-text cap">${person[0].location.city}, ${person[0].location.state}</p>
            </div>
        </div>
        `);
    gallery.insertAdjacentHTML('beforeend', html);
    // person.forEach(generatePerson);
    
};




fetchData('https://randomuser.me/api/?results=12&inc=name,location,email,picture')



