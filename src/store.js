import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slider: [230, 430]
  },
  mutations: {
    change(state, slider){
      state.slider = slider;
    }
  },

    getters:{
      slider:state => state.slider
    }

});
