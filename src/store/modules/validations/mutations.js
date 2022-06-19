export default {
    add_client_err(state,payload){
        state.errorClient.push(payload);
    },

    remove_ind_client_err(state,payload){
        state.errorClient.pop(payload);
    },

    remove_all_client_err(state){
         state.errorClient = [];
    },

    messErr(state,payload){
        state.messErr.fieldMess = payload.messErr;
    }
}