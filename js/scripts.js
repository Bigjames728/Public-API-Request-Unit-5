fetch('https://randomuser.me/api/?inc=name,location,email,picture')
    .then(response => response.json())
    .then(data => console.log(data))