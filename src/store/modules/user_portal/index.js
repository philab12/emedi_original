import actions from "./actions";
import mutations from "./mutations";
export default {
    namespaced:true,
    state(){
        return{
            user_portal_id:"",
        }
    },

    mutations,
    actions,
}