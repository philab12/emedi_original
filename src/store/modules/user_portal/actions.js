import { SUCC_USER_PORTAL_REG_DATA, USER_PORTAL_REG } from '@/store/storeconstants';
import axios from 'axios';
export default{

    async [USER_PORTAL_REG](context,payload){

        let response = await axios.post('user_portals',payload);
        //  console.log(response);
          let mess = response.data.message;
         
          if(mess === 'success'){
           let data = response.data.data;
              context.commit(SUCC_USER_PORTAL_REG_DATA,data);
          }

    }

}