import { Workbox } from 'workbox-window'

const swRegister = async() => {
    if ("serviceWorker" in navigator) {
        const wb = new Workbox("/sw.js");
        wb.register();
    }
}

export default swRegister