import mutations from "./mutations";
import actions from './actions';
import getters from './getters';

export default {
    namespaced:true,
    state(){
        return {
            portal : "COMPANY",
            verified: false,//If It Is Verified And Username Does Not Show No Message, If It Is Not Verified And Email Shows, show Message
            verified_username: "",
            forgot_mess:"",
            provider_data:[],
            users:{}
        };
    },

    mutations,
    getters,
    actions,

}