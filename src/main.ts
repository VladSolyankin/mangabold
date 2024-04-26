import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import './globals.css'
import { router } from './router'
import Button from 'primevue/button'
import ProggressSpinner from 'primevue/progressspinner'
import Image from 'primevue/image'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.component('Button', Button)
app.component('Image', Image)
app.component('ProgressSpinner', ProggressSpinner)
app.mount('#app')
