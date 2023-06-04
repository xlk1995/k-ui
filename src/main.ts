import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./index.scss";
import { install } from "./button";

const app = createApp(App);
install(app);
app.mount("#app");
