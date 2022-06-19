import actions from "./actions";
import mutations from "./mutations";
export default {
    namespaced:true,
    state(){
        return{
            user_idd:"",
            search_user_result:{}
        }
    },

    mutations,
    actions,
}