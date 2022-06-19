import { AUTH_FORGOT, AUTH_LOGIN, AUTH_OTP, AUTH_RESET, AUTH_VERIFY, SIGNUP_ACTION, SUCC_AUTH_LOGIN, SUCC_AUTH_OTP, SUCC_AUTH_VERIFY } from "@/store/storeconstants";
import axios from 'axios';

export default{
    [SIGNUP_ACTION](){},

    async [AUTH_VERIFY](context,payload){

        let response = await axios.post('verify',payload);
        //  console.log(response);
          let mess = response.data.message;
          let dataa = response.data;
         
          if(mess === 'success'){
           const data = {
              is_verified : true,
              username: dataa.username

           }
              context.commit(SUCC_AUTH_VERIFY,data);
          }

    },


   async [AUTH_FORGOT](context,payload){


        let response = await axios.post('forgot',payload);
        //  console.log(response);
          let mess = response.data.message;
          let dataa = response.data.message;
         
          if(mess === 'success'){
   
              context.commit(SUCC_AUTH_VERIFY,dataa);
          }

    },


    async [AUTH_RESET](_,payload){


        let response = await axios.post('reset',payload);
        //  console.log(response);
          return response.data.message;
     
    },


    async [AUTH_LOGIN](context,payload){


        let response = await axios.post('login',payload);
        //  console.log(response);
          let mess = response.data.message;
        
         
          if(mess === 'success'){
            let data = response.data;
   
              context.commit(SUCC_AUTH_LOGIN,data);
          }

    },




    async [AUTH_OTP](context,payload){


      let response = await axios.post('verify_otp',payload);
      //  console.log(response);
        let mess = response.data.message;
      
       
        if(mess === 'success'){
          let data = response.data;
 
            context.commit(SUCC_AUTH_OTP,data);
        }

  },
};


