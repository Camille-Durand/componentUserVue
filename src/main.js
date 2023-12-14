import { createApp } from 'vue';
import App from './App.vue';
import activeUser from './components/activeUser.vue';
import userData from './components/userData.vue';
const app = createApp(App);
app.component('active-user',activeUser);
app.component('user-data',userData);
app.mount('#app');