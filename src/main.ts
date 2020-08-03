import { createApp } from 'vue';


import './assets/styles/main.css';

import App from './App.vue';


import { AnimationItem } from './components/animation/index';


// Create Vue instance
const app = createApp(App);

// Register AnimationItem component globally
app.component('AnimationItem', AnimationItem);

app.mount('#root');
