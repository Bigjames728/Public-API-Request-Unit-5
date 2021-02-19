

const parseResponseToJson = (res) => res.json();
const generatePersonOnPage = (data) => generatePerson(data);



function fetchData(url) {
    return fetch(url)
            .then(parseResponseToJson)
            .then(generatePersonOnPage)
}

function generatePerson(data) {
    const gallery = document.querySelector('.gallery');
    const html = `
    <div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${data.results[0].picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${data.results[0].name.first} ${data.results[0].name.last}</h3>
            <p class="card-text">${data.results[0].email}</p>
            <p class="card-text cap">${data.results[0].location.city}, ${data.results[0].location.state}</p>
        </div>
    </div>
    `;
    gallery.insertAdjacentHTML('beforeend', html);
    console.log(data.results);
};



fetchData('https://randomuser.me/api/?results=12&inc=name,location,email,picture')

// parseResponseToJson.forEach(generatePerson(data.results))

