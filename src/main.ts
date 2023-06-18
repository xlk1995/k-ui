import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./index.scss";

import KUi from "../build/k-ui";

const app = createApp(App);
app.use(KUi);
app.mount("#app");
