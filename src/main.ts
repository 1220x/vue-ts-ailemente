import { createApp } from 'vue'
import App from './App.vue'
import Container from './components/container/Container.vue';
import Header from './components/container/Header.vue';

import './styles/index.scss';

createApp(App)
    .component('el-container', Container)
    .component('el-header', Header)
    .mount('#app')
