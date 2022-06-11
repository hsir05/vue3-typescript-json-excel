import { createApp } from 'vue'
import App from './App.vue'
import vue3JsonExcel from "vue3-json-excel"


const app = createApp(App)
app.use(vue3JsonExcel).mount('#app')
