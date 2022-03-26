import { App } from 'vue';

import ElButton from './button.vue';

export default {
    install(app:App) {
        app.component(ElButton.name, ElButton)
    }
}