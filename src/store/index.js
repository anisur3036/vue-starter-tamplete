import { createStore } from "vuex";
import axios from "axios";
// Helpers
const helpers = {
  getWindowWidth() {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  },
  getCurrentYear() {
    return new Date().getFullYear();
  },
};

export default createStore({
  state() {
    return {
      app: {
        name: "Job Search",
        version: "1.0.0",
        copyright: "anisur3036@yahoo.com",
      },
    };
  },

  getters: {
    // Get App name
    appName: (state) => {
      return state.app.name;
    },
    // Get App version
    appVersion: (state) => {
      return state.app.version;
    },
    // Get App copyright year
    appCopyright: (state) => {
      return state.app.copyright;
    },
  },

  mutations: {
    //
  },

  actions: {
    //
  },
});
