import Vue from "vue";
import axios from "axios";
import applyConverters from "axios-case-converter";

const config = {
  baseURL: "http://localhost:3000/",
  headers: {
    Accept: "application/json"
  }
};
/* eslint-disable */
const _axios = applyConverters(axios.create(config));
_axios.interceptors.response.use(response => response.data);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};
/* eslint-enable */
Vue.use(Plugin);
export default Plugin;
