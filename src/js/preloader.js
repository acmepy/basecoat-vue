import { createApp } from "vue";
import BcLoading from "../components/bc-preloader.vue";

  let instance;

  function init() {
    if (!instance) {
      const container = document.createElement("div");
      document.body.appendChild(container);
      const loadingApp = createApp(BcLoading);
      instance = loadingApp.mount(container);
    }
    return instance;
  }

  window.preloader = {
    open() {
      init().open();
    },
    close() {
      init().close();
    },
  };


    /*export default {
  install(app) {
    let instance;

    function init() {
      if (!instance) {
        const container = document.createElement("div");
        document.body.appendChild(container);
        const loadingApp = createApp(BcLoading);
        instance = loadingApp.mount(container);
      }
      return instance;
    }

    //app.config.globalProperties.preloader = {
    window.preloader = {
      open() {
        init().open();
      },
      close() {
        init().close();
      },
    };
  },
};*/