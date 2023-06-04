import { App } from "vue";
import SButton from "./src/Button";

export { SButton };

export const install = (app: App) => {
  app.component(SButton.name, SButton);
};
