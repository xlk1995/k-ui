import { App } from "vue";
import SButton from "./src/button";

export { SButton };

export default (app: App) => {
  app.component(SButton.name, SButton);
};
