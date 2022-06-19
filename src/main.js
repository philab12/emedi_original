import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import './axios';



/*
Font Awesome CSS
*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/*
Bootstrap CSS, JS
*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';




import "@/style2.css";



const app = createApp(App);
app.use(VueSweetalert2);
app.use(store);
app.use(router);
app.mount("#app");