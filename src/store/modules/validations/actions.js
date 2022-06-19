import ValidateService from "@/services/ValidateService";

export default {
    onlyRequiredVal(context,payload){
              // console.log(curValue);
      if (ValidateService.isEmpty(payload)) {
        let mess = "Is Existing User Is Required";
          context.commit('existing_userErr',mess)
          context.commit('add_client_err',payload)
      } else {
        context.commit('existing_userErr','')
        context.commit('remove_ind_client_err',payload)
      }
    },

    // searchVal(context,payload)
}