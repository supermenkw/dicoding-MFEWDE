function truncateText(selector, maxLength) {
    const element = document.querySelector(selector)
    let truncated = element.innerText;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0, maxLength) + '...';
    }
    return truncated;
}

const status = (response) => {
    if (response.status !== 200) {
        console.log(`Error : ${response.status}`);

        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
};

const json = (response) => {
    return response.json();
};

fetch("DATA.json").then(status).then(json).then((data) => {
    const wrapper = document.querySelector(".grid-wrapper");
    let html = "";
    data.restaurants.forEach(data => {
        html += `<div class="card">
                    <span class="location" tabindex="0" aria-label="lokasi ada di ${data.city}">${data.city}</span>
                    <img src="${data.pictureId}" alt="${data.name} photo" tabindex="0">
                    <div class="card-content">
                        <span class="rating" tabindex="0">Rating ${data.rating}</span>
                        <h3 class="title"><a href="#">${data.name}</a></h3> 
                        <p class="description" tabindex="0">${data.description}</p> 
                    </div>
                </div>`;
    });

    wrapper.innerHTML = html;
}).then(() => {
    const desc = document.querySelectorAll(".description");
    console.log(desc.length);
    for (i = 0; i < desc.length; i++) {
        desc[i].innerText = truncateText(".description", 120)
    }
});