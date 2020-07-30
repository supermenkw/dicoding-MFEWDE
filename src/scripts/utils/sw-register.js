import { Workbox } from 'workbox-window';

const swRegister = async () => {
    if ('serviceWorker' in navigator) {
        const wb = new Workbox('../sw.js');
        wb.register();
        console.log('berhasil daftar');
    }
};

export default swRegister;
