import './assets/bootstrap.min.css'
import './assets/bootstrap-icons.css'
import './assets/owl.carousel.min.css'
import './assets/owl.theme.default.min.css'
import './assets/owl.theme.default.min.css'
import './assets/templatemo-medic-care.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
