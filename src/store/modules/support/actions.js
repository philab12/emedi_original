import { SUCC_SUPPORT_REG_DATA, SUPPORT_REG } from '@/store/storeconstants';
import axios from 'axios';
export default{

    async [SUPPORT_REG](context,payload){

        let response = await axios.post('supports',payload);
        //  console.log(response);
          let mess = response.data.message;
         
          if(mess === 'success'){
           let data = response.data.data;
              context.commit(SUCC_SUPPORT_REG_DATA,data);
          }

    }

}