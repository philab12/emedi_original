import { SUCC_AUTH_FORGOT, SUCC_AUTH_LOGIN, SUCC_AUTH_OTP, SUCC_AUTH_VERIFY } from "@/store/storeconstants";

export default{
    [SUCC_AUTH_VERIFY](state,payload){

        state.verified = payload.is_verified;
        state.verified_username = payload.username;

    },


    [SUCC_AUTH_FORGOT](state,payload){

        state.forgot_mess = payload;
                  
    },

    [SUCC_AUTH_LOGIN](state,payload){
        localStorage.setItem("provider_data",payload.data);
        localStorage.setItem("users",JSON.stringify(payload.user));
        state.provider_data = payload.data
    },

    [SUCC_AUTH_OTP](_,payload){
        localStorage.setItem("users",JSON.stringify(payload.user));
        localStorage.setItem("token",payload.data.token);
       // state.provider_data = payload.data
    }
};