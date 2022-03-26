import { createApp } from 'vue'
import App from './App.vue'
import ElContainer from './components/container/index.ts';
import ElButton from './components/button/index.ts';

const app = createApp(App);

// 配置全局变量 app.config.globalProperties
app.config.globalProperties.$AILEMENTE = {
    size: 'large'
}

app.use(ElContainer)
    .use(ElButton)
    .mount('#app')
