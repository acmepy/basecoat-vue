import { createApp } from 'vue';
import UiLoading from '../components/ui-preloader.vue';

let instance;

function init() {
  if (!instance) {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const loadingApp = createApp(UiLoading);
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
        const loadingApp = createApp(UiLoading);
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
