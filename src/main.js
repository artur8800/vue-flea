import Vue from "vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import Vuelidate from "vuelidate";

import tooltipDirective from "@/directives/tooltip.derective";

import "materialize-css/dist/css/materialize.min.css";

import "materialize-css/dist/js/materialize";
import "@/assets/style.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import messagePlugin from "@/utils/message.plugin";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.directive("tooltip", tooltipDirective);

firebase.initializeApp({
  apiKey: "AIzaSyCgiG4e_DPlCFltvRhxCB4Rxu0VjbXXpXI",
  authDomain: "flea-market-30037.firebaseapp.com",
  databaseURL: "https://flea-market-30037.firebaseio.com",
  projectId: "flea-market-30037",
  storageBucket: "flea-market-30037.appspot.com",
  messagingSenderId: "15287987154",
  appId: "1:15287987154:web:44ae54be30387f5e09f60b"
});

let db = firebase.firestore();

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({ router, store, render: h => h(App) }).$mount("#app");
  }
});

export default db;
