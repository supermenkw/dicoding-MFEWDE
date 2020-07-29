import { 
    createRestaurantDetailTempate, 
    createMenuListTemplate,
    createReviewList,
    createFavoriteButtonTemplate
} from './template-creator';

const foodArrayToContainer = (array, container) => {
    array.menus.foods.forEach(menu => {
        document.querySelector(container).innerHTML += createMenuListTemplate(menu);
    });
}

const beverageArrayToContainer = (array, container) => {
    array.menus.drinks.forEach(menu => {
        document.querySelector(container).innerHTML += createMenuListTemplate(menu);
    });
}

const reviewsArrayToContainer = (array, container) => {
    array.consumerReviews.forEach(review => {
        document.querySelector(container).innerHTML += createReviewList(review);
    });
}

export {
    foodArrayToContainer,
    beverageArrayToContainer,
    reviewsArrayToContainer
};