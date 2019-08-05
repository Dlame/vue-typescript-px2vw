import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const debug: boolean = process.env.NODE_ENV !== "production";

export default new Vuex.Store({});
