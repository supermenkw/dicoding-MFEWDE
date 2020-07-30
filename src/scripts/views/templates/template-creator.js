import CONFIG from '../../globals/config';
import truncateText from '../../utils/truncated-text';

const createRestaurantListTempate = (restaurant) => `<div class="card">
        <span class="location" tabindex="0" aria-label="lokasi ada di ${restaurant.city}">${restaurant.city}</span>
        <img src="${restaurant.pictureId
        ? CONFIG.BASE_IMAGE_URL + CONFIG.LOW_RESOLUTION + restaurant.pictureId
        : null}" alt="${restaurant.name} photo" tabindex="0" crossorigin="anonymous">
        <div class="card-content">
            <span class="rating" tabindex="0">Rating ${restaurant.rating} / 5</span>
            <h3 class="title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3> 
            <p class="description" tabindex="0">${truncateText(restaurant.description, 98)}</p> 
        </div>
    </div>`;

const createRestaurantDetailTempate = (restaurantDetail) => `
    <div class="box-content">
        <h3 class="detail-title" tabindex="0">
            ${restaurantDetail.name}
        </h3>
        <div class="detail-information">
        <span tabindex="0">Rating <i class="fa fa-star" aria-hidden="true" style="color: #efe826;"></i> ${restaurantDetail.rating} / 5</span>
            <span style="display: block; margin-top:10px; font-size:medium;" tabindex="0">${restaurantDetail.address}, Kota ${restaurantDetail.city}.</span>
        </div>
        <p class="detail-description" tabindex="0">${restaurantDetail.description}</p>
    </div>
    <img tabindex="0" aria-label="${restaurantDetail.name} photo" src="${restaurantDetail.pictureId
    ? CONFIG.BASE_IMAGE_URL + CONFIG.NORMAL_RESOLUTION + restaurantDetail.pictureId
    : null}" class="box-image" crossorigin="anonymous">
    `;

const createMenuListTemplate = (menu) => `
        <li tabindex="0">${menu.name}</li>
        `;

const createReviewList = (review) => `
        <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
        <div class="reviewer" tabindex="0">
            <span>${review.date}</span>
            <h5 style="color: #cc6600" tabindex="0">${review.name}</h5>
            <p tabindex="0">${review.review}</p>
        </div>
        `;

const createFavoriteButtonTemplate = () => `
        <button aria-label="like this movie" id="likeButton" class="like">
            <i class="fa fa-star-o fa-3x" aria-hidden="true"></i>
        </button>
        `;

const createFavoritedButtonTemplate = () => `
        <button aria-label="unlike this movie" id="likeButton" class="like">
            <i class="fa fa-star fa-3x" aria-hidden="true"></i>
        </button>
        `;

const createFailedToFetchMessage = (error) => `
        <div class="error-message">
            <h3 align="center" class="text-center" tabindex="0">${error.message}</h3>
            <button style="margin: 0px 17.5%" id="refresh">REFRESH PAGE</button>
        </div>
        `;

const createCategoryTemplate = (category) => `
            <span class="category-item" tabindex="0">${category.name}</span>
        `;

const createAboutTemplate = () => `
        <img class="about-image" src="/images/profile.jpg">
        <h4 class="about-name" tabindex="0">Angga Muhamad Ginanjar</h4>
        <div class="about-desc">
            <p tabindex="0">Hi, I'm angga — a full-stack web developer. Interested to front-end development and UI/UX design. Currently a freelancer and looking for full-time jobs. If you interested to hire me, feel free to contact me via email or phone below. I'm a movie geek, manga reader and dota 2 player.</p>
            <label for="email">Email :</label>
            <a href="mailto:supermenkw@email.com" id="email">supermenkw@email.com</a><br>
            <label for="telp">Telp.&#160 :</label>
            <a href="tel:+6287891074447" id="telp">+6287891074447</a><br>
            <label for="website">Web&#160&#160 :</label>
            <a href="supermenkw.github.io" for="website">supermenkw.github.io</a><br>
        </div>
        `;

export {
    createRestaurantListTempate,
    createRestaurantDetailTempate,
    createMenuListTemplate,
    createReviewList,
    createFavoriteButtonTemplate,
    createFavoritedButtonTemplate,
    createFailedToFetchMessage,
    createCategoryTemplate,
    createAboutTemplate,
};
