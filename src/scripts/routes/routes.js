import HomePage from '../views/pages/home';
import FavoritePage from '../views/pages/favorite-place';
import AboutPage from '../views/pages/about-me';
import RestaurantDetailPage from '../views/pages/restaurant-detail';

const routes = {
    '/': HomePage, // default page
    '/home': HomePage,
    '/favorite': FavoritePage,
    '/about': AboutPage,
    '/detail/:id': RestaurantDetailPage,
};

export default routes;
