/* eslint-disable no-underscore-dangle */
import FavoritePlaceIDB from '../data/favoriteplaces-idb';
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
    async init({ favoriteButtonContainer, restaurant }) {
        this._favoriteButtonContainer = favoriteButtonContainer;
        this._restaurant = restaurant;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isPlaceExist(id)) {
            this._renderFavorited();
        } else {
            this._renderFavorite();
        }
    },

    async _isPlaceExist(id) {
        const place = await FavoritePlaceIDB.getPlace(id);
        return !!place;
    },

    _renderFavorite() {
        this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

        const favoriteButton = document.querySelector('#likeButton');
        favoriteButton.addEventListener('click', async () => {
            await FavoritePlaceIDB.putPlace(this._restaurant);
            this._renderButton();
        });
    },

    _renderFavorited() {
        this._favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate();

        const favoriteButton = document.querySelector('#likeButton');
        favoriteButton.addEventListener('click', async () => {
            await FavoritePlaceIDB.deletePlace(this._restaurant.id);
            this._renderButton();
        });
    },

};

export default FavoriteButtonInitiator;
