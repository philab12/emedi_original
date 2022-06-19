import actions from "./actions";
import mutations from "./mutations";
export default {
    namespaced:true,
    state(){
        return{
            dependent_id:"",
        }
    },

    mutations,
    actions,
}