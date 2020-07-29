import UrlParser from '../../routes/url-parser';
import RestaurantAPISource from '../../data/restaurantapi-source';
import { 
    createRestaurantDetailTempate, 
    createMenuListTemplate,
    createReviewList,
    createFavoriteButtonTemplate
} from '../templates/template-creator';
import formToJSON from '../../utils/formToJSON-helper';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const RestaurantDetailPage = {
    async render() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurantDetail = await RestaurantAPISource.detailRestaurant(url.id);

        return `
        <section>
            <div class="container">
                <h2 tabindex="0" class="breadcrumb" id="content-title">
                    <a href="/">Home</a> &nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;<span style="color: #01a4cd;">Place Details</span>
                </h2>
                <div class="detail-grid" id="content">
                    
                </div>
                <div class="box-menu">
                    <h4 class="text-center">Menu</h4>
                    <div class="box-menu-item">
                        <div class="foods">
                            <h5 class="menu-type text-center">Foods</h5>
                            <ul id="list-food">
            
                            </ul>
                        </div>
                        <div class="beverages">   
                            <h5 class="menu-type text-center">Beverages</h5>
                            <ul id="list-beverage">
            
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="box-review">
                    <div class="box-input-review">
                        <h4>Post Review</h4>
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
                        <h4>Reviews (${restaurantDetail.consumerReviews.length})</h4>
                        <div id="review-list">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div id="likeButtonContainer"></div>
        </section>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurantDetail = await RestaurantAPISource.detailRestaurant(url.id);
        

        const restaurantDetailContainer = document.querySelector('#content');
        restaurantDetailContainer.innerHTML = createRestaurantDetailTempate(restaurantDetail);


        const restaurantFoodContainer = document.querySelector('#list-food');
        restaurantDetail.menus.foods.forEach(menu => {
            restaurantFoodContainer.innerHTML += createMenuListTemplate(menu);
        });
        

        const restaurantBeverageContainer = document.querySelector('#list-beverage');
        restaurantDetail.menus.drinks.forEach(menu => {
            restaurantBeverageContainer.innerHTML += createMenuListTemplate(menu);
        });


        const restaurantReviewContainer = document.querySelector('#review-list');
        restaurantDetail.consumerReviews.forEach(review => {
            restaurantReviewContainer.innerHTML += createReviewList(review);
        });


        FavoriteButtonInitiator.init({
            favoriteButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: restaurantDetail
        });


        const form = document.getElementsByClassName('form-review')[0];
        const handleFormSubmit = event => {
            event.preventDefault();
            const data = formToJSON(form.elements);
    
            RestaurantAPISource.postReview(data);
        };

        form.addEventListener('submit', handleFormSubmit);
    }
}

export default RestaurantDetailPage;