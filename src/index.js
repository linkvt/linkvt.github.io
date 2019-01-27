import Vue from "vue";
import App from "./App.vue";
import "normalize.css";
import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXing
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope
} from "@fortawesome/free-regular-svg-icons";

library.add(faGithub, faLinkedin, faXing, faEnvelope);

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);

new Vue({
  el: "#app",
  render: h => h(App)
});
