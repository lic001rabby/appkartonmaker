import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slider: [230, 430],
    winecase: []
  },
  mutations: {
    change(state, slider){
      state.slider = slider;
    },
    kartonupdate(state, winecase){
      state.winecase = winecase;
    },
    wineupdate(state, wine){
      state.winecase.forEach(element =>{
        if(element.id == wine.id){
          element.count = wine.count;
        }
      });
    }
  },

    getters:{
      slider:state => state.slider,
      winecase:state => state.winecase,
      getCountById: (state) => (id) => {
        state.winecase.forEach(element=>{
          if(element.id === id) return element.count;
        });
      }

      
    }

});
