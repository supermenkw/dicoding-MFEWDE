import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
    init(url) {
        const webSocket = new WebSocket(url);
        webSocket.onmessage = this._onMessageHandler;
    },

    _onMessageHandler(message) {
        const movie = JSON.parse(message.data);
        NotificationHelper.sendNotification({
            title: `${movie.title} is on cinema!`,
            options: {
                body: movie.overview,
                image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            },
        });
    },
};

export default WebSocketInitiator;