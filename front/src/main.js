import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/main.css";
import { createPinia } from 'pinia'
import { useToast } from "./composables/useToast";
import ToastContainer from "./components/ToastContainer.vue";
import router from "./router/index.js";

const app = createApp(App);
const toast = useToast();
app.provide("toast", toast);
app.component('ToastContainer', ToastContainer);
app.use(router);
app.use(createPinia())
app.mount("#app");
