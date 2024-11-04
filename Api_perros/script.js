document.getElementById('fetch-dog').addEventListener('click', fetchDog);

function fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImageUrl = data.message;
            displayDogImage(dogImageUrl);
        })
        .catch(error => console.error('Error fetching the dog image:', error));
}

function displayDogImage(url) {
    const dogContainer = document.getElementById('dog-container');
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Un perro';
    img.style.width = '300px'; 
    img.style.borderRadius = '10px'; 
    dogContainer.innerHTML = ''; 
    dogContainer.appendChild(img);
}