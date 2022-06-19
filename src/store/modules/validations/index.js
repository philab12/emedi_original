import actions from "./actions";
import mutations from "./mutations";
export default {
    namespaced:true,
    state(){
        return{

            errorClient:[],
            messErr:{
                fieldName:"",
                fieldMess:""
            },
            existing_userErr:"",
            searchErr:"",
            fnameErr: "",
            lnameErr: "",
            onameErr: "",
            countryErr: "",
            addressErr: "",
            stateErr: "",
            cityErr: "",
            contactErr: "",
            emailErr: "",
            passwordErr: "",
            password_confirmationErr: "",

        }
    },

    mutations,
    actions,
}