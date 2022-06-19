import { SUCC_DEPENDENT_REG_DATA } from "@/store/storeconstants";

export default{
    [SUCC_DEPENDENT_REG_DATA](state,payload){

        state.dependent_id = payload.id;

    }
}