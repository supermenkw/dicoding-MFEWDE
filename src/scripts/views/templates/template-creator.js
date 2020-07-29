import CONFIG from '../../globals/config';
import truncateText from '../../utils/truncated-text';

const createRestaurantListTempate = (restaurant) => 
    `<div class="card">
        <span class="location" tabindex="0" aria-label="lokasi ada di ${restaurant.city}">${restaurant.city}</span>
        <img src="${restaurant.pictureId ? 
            CONFIG.BASE_IMAGE_URL + CONFIG.LOW_RESOLUTION + restaurant.pictureId
            : null }" alt="${restaurant.name} photo" tabindex="0" crossorigin="anonymous">
        <div class="card-content">
            <span class="rating" tabindex="0">Rating ${restaurant.rating} / 5</span>
            <h3 class="title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3> 
            <p class="description" tabindex="0">${truncateText(restaurant.description, 98)}</p> 
        </div>
    </div>`;

const createRestaurantDetailTempate = (restaurantDetail) =>
    `
    <div class="box-content">
        <h3 class="detail-title">
            ${restaurantDetail.name}
        </h3>
        <div class="detail-information">
        <span>Rating <i class="fa fa-star" aria-hidden="true" style="color: #efe826;"></i> ${restaurantDetail.rating} / 5</span>
            <span style="display: block; margin-top:10px; font-size:medium;">${restaurantDetail.address}, Kota ${restaurantDetail.city}.</span>
        </div>
        <p class="detail-description">${restaurantDetail.description}</p>
    </div>
    <img src="${restaurantDetail.pictureId ? 
        CONFIG.BASE_IMAGE_URL + CONFIG.NORMAL_RESOLUTION + restaurantDetail.pictureId
        : null}" class="box-image" crossorigin="anonymous">
    `;

const createMenuListTemplate = (menu) => 
        `
        <li>${menu.name}</li>
        `;

const createReviewList = (review) =>
        `
        <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
        <div class="reviewer">
            <span>${review.date}</span>
            <h5 style="color: #cc6600">${review.name}</h5>
            <p>${review.review}</p>
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

export {
    createRestaurantListTempate, 
    createRestaurantDetailTempate,
    createMenuListTemplate,
    createReviewList,
    createFavoriteButtonTemplate,
    createFavoritedButtonTemplate,
    createFailedToFetchMessage
};