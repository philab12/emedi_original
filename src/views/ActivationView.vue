<template>

<div>
    <div v-if="mess" class="text_error">{{messs}}</div>
    <div v-else>Successfully Verified</div>
</div>
    
</template>


<script>
import { AUTH_VERIFY } from '@/store/storeconstants'
import { mapActions} from 'vuex'
//import notificationBox from '@/services/notificationBox'
export default {
    name:'ActivationView',
    created(){

        this.page = localStorage.getItem("page");
        this.activate();
      //  localStorage.setItem("login_email",this.verified_username)
      //  localStorage.setItem("login_verified",this.is_verified)

    },
    data(){
        return{
          page:"",
          errorServers:[],
          mess:""
        }
    },

    methods:{

    ...mapActions({
        'verify':'auth/'+AUTH_VERIFY,
    }),

        async activate(){

            const formData = {
                code: this.$route.params.code
            };

                 await this.verify(formData).catch(error => {
           this.errorServers.push(error.response.data.errors);
          // console.log(error);
          // this.showLoading(false);
          // notificationBox.errorNotifications(error.response.data.message);
           this.mess = error.response.data.message;
           
       });

       if(this.errorServers.length < 1){
        if(!this.page){
         this.$router.push('/login');
        }
        else
        {
             this.$router.push('/em_login');
        }
       }




        }
    },

 
 
}
</script>