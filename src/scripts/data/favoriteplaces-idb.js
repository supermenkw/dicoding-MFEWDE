import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
});

const FavoritePlaceIDB = {
    async getPlace(id) {
        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },
    async getAllPlaces() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
    async putPlace(restaurant) {
        return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    },
    async deletePlace(id) {
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
};

export default FavoritePlaceIDB;
