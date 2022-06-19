import { GET_SEARCH_USER, SEARCH_USER, SUCC_USER_REG_DATA, USER_REG } from "@/store/storeconstants";
import axios from 'axios';

export default{

   async [USER_REG](context,payload){


    let response = await axios.post('users',payload);
  //  console.log(response);
    let mess = response.data.message;
   
    if(mess === 'success'){
     let data = response.data.data;
        context.commit(SUCC_USER_REG_DATA,data);
    }


    },


    async [SEARCH_USER](context,payload){
        let response = await axios.post("getUser",payload);
        let data = response.data.data;
       // console.log(data);
        context.commit(GET_SEARCH_USER,data);
    }
}