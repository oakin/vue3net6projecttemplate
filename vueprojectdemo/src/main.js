import { createApp } from 'vue'
import App from './App.vue'
import * as routeConfig from './router/appRouter.js'


createApp(App)
    .use(routeConfig.router)
    .mount('#app')

