import { createApp } from 'vue'
import App from './App.vue'
import ElContainer from './components/container';

import './styles/index.scss';

createApp(App)
    .use(ElContainer)
    .mount('#app')
