import { SUCC_DEPENDENT_REG_DATA, DEPENDENT_REG } from '@/store/storeconstants';
import axios from 'axios';
export default{

    async [DEPENDENT_REG](context,payload){

        let response = await axios.post('dependents',payload);
        //  console.log(response);
          let mess = response.data.message;
         
          if(mess === 'success'){
           let data = response.data.data;
              context.commit(SUCC_DEPENDENT_REG_DATA,data);
          }

    }

}