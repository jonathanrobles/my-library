// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
// Layout (Header, Footer)
import header from './components/layout/Header.vue'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(bootstrap)
app.component('Header', header)

app.mount('#app')
