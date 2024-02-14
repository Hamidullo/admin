// Plugins
import { registerPlugins } from '@/plugins';
import { createPinia } from 'pinia'

// Components
import App from './App.vue';
const pinia = createPinia()

// Composables
import { createApp } from 'vue';

const app = createApp(App);

registerPlugins(app)

app.use(pinia).mount('#app')
