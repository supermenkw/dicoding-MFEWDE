import RestaurantAPISource from '../../data/restaurantapi-source';
import { createRestaurantListTempate, createFailedToFetchMessage } from '../templates/template-creator';

const HomePage = {
    async render() {
        return `
        <section>
            <div class="hero">
                <div class="hero__inner">
                    <h1 class="hero__title">Let's Hangout here, there and everywhere.</h1>
                    <p class="hero__tagline">Find a perfect place to spend time with your friends, families and the loved ones.</p>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <h2 tabindex="0" class="text-center h2" id="content-title">Explore Places</h2>
                <div class="loader"></div>
                <div class="grid-wrapper" id="content">
                    
                </div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const restaurantListContainer = document.querySelector('#content');

        try {
            const restaurantList = await RestaurantAPISource.getRestaurantList();
            restaurantList.slice(1, 10).forEach((restaurant) => {
                restaurantListContainer.innerHTML += createRestaurantListTempate(restaurant);
            });

            await document.querySelector('.loader').remove();
        } catch (error) {
            restaurantListContainer.innerHTML += createFailedToFetchMessage(error);
            const refresh = await document.querySelector('#refresh');

            // eslint-disable-next-line no-restricted-globals
            refresh.addEventListener('click', () => location.reload());
            document.querySelector('.loader').remove();
        }
    },
};

export default HomePage;
