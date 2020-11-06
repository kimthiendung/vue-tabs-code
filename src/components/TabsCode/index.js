import Vue from "vue";
import VueHighlightJS from "vue-highlight.js";

// Highlight.js languages (Only required languages)
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import vue from "vue-highlight.js/lib/languages/vue";

/*
 * Import Highlight.js theme
 * Find more: https://highlightjs.org/static/demo/
 */
import "highlight.js/styles/default.css";
Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    css,
    javascript,
    vue
  }
});
import Main from "./Main";

export default Main;
