import { createAboutTemplate } from '../templates/template-creator';

const AboutPage = {
    async render() {
        return `
        <section>
            <div class="container">
                <h2 tabindex="0" class="text-center h2" id="content-title">About Me</h2>
                <div class="grid-wrapper" id="content">
                    
                </div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const container = document.querySelector('#content');

        container.innerHTML = createAboutTemplate();
    },
};

export default AboutPage;
