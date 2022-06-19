import { GET_SEARCH_USER, SUCC_USER_REG_DATA } from "@/store/storeconstants";

export default{
    [SUCC_USER_REG_DATA](state,payload){

        state.user_idd = payload.id;

    },


    [GET_SEARCH_USER](state,payload){
        
        state.search_user_result = payload;
        state.user_idd = payload.id;
    
    }
}