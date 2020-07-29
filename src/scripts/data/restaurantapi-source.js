import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAPISource {
    static async getRestaurantList() {
        const response = await fetch(API_ENDPOINT.GET_RESTAURANT_LIST);
        const responseJson = await response.json();

        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.GET_RESTAURANT_DETAIL(id));
        const responseJson = await response.json();

        return responseJson.restaurant;
    }

    static async postReview(reviewData) {
        const response = await fetch(API_ENDPOINT.POST_REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'X-Auth-Token' : '12345'
            },
            body : JSON.stringify(reviewData)
        });

        return response.json();
    }
}

export default RestaurantAPISource;