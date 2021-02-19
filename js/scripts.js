

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



