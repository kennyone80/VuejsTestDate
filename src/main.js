import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  methods: {
    callFunction: function() {
      var currentDate = new Date();
      var newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 3,
        1
      );
      console.log(currentDate);
      console.log(newDate);

      var currentDateWithFormat = newDate.toJSON().slice(0, 10);
      console.log(currentDateWithFormat);
    }
  },
  mounted() {
    this.callFunction();
  },
  render: h => h(App)
}).$mount("#app");
