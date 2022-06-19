import { SUCC_USER_PORTAL_REG_DATA } from "@/store/storeconstants";

export default{
    [SUCC_USER_PORTAL_REG_DATA](state,payload){

        state.user_portal_id = payload.id;

    }
}