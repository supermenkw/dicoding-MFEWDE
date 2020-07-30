import UrlParser from '../../routes/url-parser';
import RestaurantAPISource from '../../data/restaurantapi-source';
import {
    createRestaurantDetailTempate,
    createReviewList,
} from '../templates/template-creator';
import formToJSON from '../../utils/formToJSON-helper';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import {
    foodArrayToContainer,
    beverageArrayToContainer,
    reviewsArrayToContainer,
    categoryArrayToContainer,
} from '../templates/statment-creator';

const RestaurantDetailPage = {
    async render() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurantDetail = await RestaurantAPISource.detailRestaurant(url.id);

        return `
        <section>
            <div class="container">
                <h2 tabindex="-1" class="breadcrumb" id="content-title">
                    <a href="/" tabindex="-1">Home</a> &nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;<span style="color: #01a4cd;">Place Details</span>
                </h2>
                <div class="detail-grid" id="content">
                    <div class="loader"></div>
                </div>
                <div id="categories">
                    <span tabindex="0">Categories : </span>
                </div>
                <div class="box-menu">
                    <h4 class="text-center" tabindex="0">Menu</h4>
                    <div class="box-menu-item">
                        <div class="foods">
                            <h5 class="menu-type text-center" tabindex="0">Foods</h5>
                            <ul id="list-food">
            
                            </ul>
                        </div>
                        <div class="beverages">   
                            <h5 class="menu-type text-center" tabindex="0">Beverages</h5>
                            <ul id="list-beverage">
            
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="likeButtonContainer"></div>
                <div class="box-review">
                    <div class="box-input-review">
                        <h4 tabindex="0">Post Review</h4>
                        <form class="form-review">
                            <input name="id" type="hidden" value="${url.id}">
                            <ul class="flex-outer">
                                <li>
                                    <label for="name">Name </label>
                                    <input type="text" id="name" name="name">
                                </li>
                                <li>
                                    <label for="review">Review </label>
                                    <textarea id="review" name="review" rows="5"></textarea>
                                </li>
                                <li>
                                    <button type="submit" id="post-review">Submit</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div>
                        <h4 tabindex="0">Reviews (<span id="total-review">${restaurantDetail.consumerReviews.length}</span>)</h4>
                        <div id="review-list">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurantDetail = await RestaurantAPISource.detailRestaurant(url.id);

        const restaurantDetailContainer = document.querySelector('#content');
        restaurantDetailContainer.innerHTML = createRestaurantDetailTempate(restaurantDetail);

        foodArrayToContainer(restaurantDetail, '#list-food');
        beverageArrayToContainer(restaurantDetail, '#list-beverage');
        reviewsArrayToContainer(restaurantDetail, '#review-list');
        categoryArrayToContainer(restaurantDetail, '#categories');

        FavoriteButtonInitiator.init({
            favoriteButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: restaurantDetail,
        });

        const form = document.getElementsByClassName('form-review')[0];
        const handleFormSubmit = (event) => {
            event.preventDefault();
            const data = formToJSON(form.elements);

            console.log(data);

            RestaurantAPISource.postReview(data).then((newData) => {
                const newReview = newData.customerReviews.slice(-1)[0];
                form.reset();

                document.querySelector('#total-review').innerHTML = newData.customerReviews.length;
                document.querySelector('#review-list').innerHTML += createReviewList(newReview);
            });
        };

        form.addEventListener('submit', handleFormSubmit);
    },
};

export default RestaurantDetailPage;
