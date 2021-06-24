import { createApp } from "vue";
import App from "./App.vue";
import VueAgile from 'vue-agile'
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome';
import PollComponent from "./components/models/Poll.vue";
import FooterComponent from "./components/models/Footer.vue";
import CarouselComponent from "./components/models/Carousel.vue";

createApp(App)
  .use(router)
  .use(store)
  .use(VueAgile)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("poll-section", PollComponent)
  .component("footer-section", FooterComponent)
  .component("carousel-section", CarouselComponent)
  .mount("#app");
