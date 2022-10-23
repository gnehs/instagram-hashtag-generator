import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import { useRegisterSW } from 'virtual:pwa-register/vue';
useRegisterSW({ immediate: true });
createApp(App).mount('#app')
