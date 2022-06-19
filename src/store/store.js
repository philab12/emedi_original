import { createStore } from "vuex";
import auth from './modules/auth/index';
import user from './modules/user/index';
import support from './modules/support/index';
import dependent from './modules/dependent/index';
import provider from './modules/provider/index';
import user_portal from './modules/user_portal/index';
import validations from './modules/validations/index';
import { LOADING } from "./storeconstants";

const store = createStore({
  modules:{
    auth,
    validations,
    user,
    support,
    dependent,
    provider,
    user_portal
  },
  state(){
    return{
       isLoading:false,
    }
  },
  mutations:{
    [LOADING](state,payload){
      state.isLoading = payload;
    }
  }

})

export default store;

// import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });
