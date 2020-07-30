import FavoritePlaceIDB from '../../data/favoriteplaces-idb';
import { createRestaurantListTempate } from '../templates/template-creator';

const FavoritePage = {
    async render() {
        return `
        <section>
            <div class="container">
                <h2 tabindex="0" class="text-center h2" id="content-title">Favorite Places</h2>
                <div class="grid-wrapper" id="content">
                </div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const favoritedPlaces = await FavoritePlaceIDB.getAllPlaces();
        const favoritedPlacesContainer = document.querySelector('#content');

        if (favoritedPlaces.length === 0) {
            const message = document.createElement('h3');
            message.className = 'empty-message';
            message.innerHTML = 'No Entries';
            message.setAttribute('tabIndex', '0');

            favoritedPlacesContainer.appendChild(message);
        } else {
            favoritedPlaces.forEach((restaurant) => {
                favoritedPlacesContainer.innerHTML += createRestaurantListTempate(restaurant);
            });
        }
    },
};

export default FavoritePage;
