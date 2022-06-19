import { SUCC_PROVIDER_REG_DATA } from "@/store/storeconstants";

export default{
    [SUCC_PROVIDER_REG_DATA](state,payload){

        state.provider_idd = payload.id;

    }
}