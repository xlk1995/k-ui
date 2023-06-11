import { App } from "vue";
import SButton from "./src/button";

export { SButton };

export const install = (app: App) => {
  app.component(SButton.name, SButton);
};
