import { SUCC_SUPPORT_REG_DATA } from "@/store/storeconstants";

export default{
    [SUCC_SUPPORT_REG_DATA](state,payload){

        state.support_id = payload.id;

    }
}