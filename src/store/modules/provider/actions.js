import { SUCC_PROVIDER_REG_DATA, PROVIDER_REG } from '@/store/storeconstants';
import axios from 'axios';
export default{

    async [PROVIDER_REG](context,payload){

        let response = await axios.post('providers',payload);
        //  console.log(response);
          let mess = response.data.message;
         
          if(mess === 'success'){
           let data = response.data.data;
              context.commit(SUCC_PROVIDER_REG_DATA,data);
          }

    }

}