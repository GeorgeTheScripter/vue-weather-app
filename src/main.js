import { createPinia } from "pinia";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import components from "./components";

const app = createApp(App);
app.use(createPinia());
components.forEach((component) => {
  app.component(component.name, component);
});
app.mount("#app");
