<template>

    <div class="unix-login">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="login-content">
                        <div class="login-logo">
                            <img src="@/assets/eMedipay-logo-small.png" alt="" style="height: 55px;"/>
                        </div>
                        <div class="card login-form">
                            <h4>Forgot Password</h4>
                            <form @submit.prevent="handleSubmit()"> 
                                <div class="form-group">
                                    <label>Email address</label>
                                     <input
                            type="email"
                            class="form-control"
                            :class="{ form_error: emailErr || 'email' in errorServers }"
                            placeholder="Email"
                            v-model.trim.lazy="email"
                          />
                          <div
                            :class="{ text_error: emailErr || 'email' in errorServers }"
                            v-if="emailErr || 'email' in errorServers"
                          >
                            {{ emailErr }} <span v-if="'email' in errorServers">{{ errorServers.email[0] }}</span>
                          </div>
                                </div>
                                <!-- <router-link to="/reset-password" class="btn btn-primary btn-flat m-b-15">Submit</router-link> -->
                                <button type="submit" class="btn btn-primary btn-flat m-b-15">Submit</button>
                                <div class="register-link text-center" >
                                    <p v-if="!page">Back to <router-link to="/"> Home</router-link></p>
                                    <p v-else>Back to <router-link to="/em_login"> Login Page</router-link></p>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FieldValidateService from '@/services/FieldValidateService';
import notificationBox from '@/services/notificationBox';
import { mapActions, mapMutations } from 'vuex';
import { AUTH_FORGOT, LOADING } from '@/store/storeconstants';
export default {    
  name: "ForgotPasswordView",
  components: {

  },


 created(){

  this.page = localStorage.getItem("page");

 },
 

  data(){
    return{
        email:"",
        emailErr:"",
        portal:"",
        page:"",
        clear:false,
        errorServers:[],
        errorClient:[]
    }
  },


  methods:{

    ...mapActions({
        forgotAct: 'auth/'+AUTH_FORGOT,
        
    }),

       ...mapMutations({
       showLoading:LOADING,
   }),

    async handleSubmit(){

        this.showLoading(true);
        this.emailVal(this.email);


        if(this.errorClient.length > 0){
            this.showLoading(false);
          notificationBox.errorNotifications("Some Errors Exist");
            
        }
        else{

            const formData = {
                email:this.email
            };

        

            await this.forgotAct(formData).catch(error => {
           this.errorServers.push(error.response.data.errors);
           console.log(error);
           this.showLoading(false);
           notificationBox.errorNotifications(error.response.data.message);

        });

           if(this.errorServers.length < 1){

           

             this.showLoading(false);
        this.clear_all();
        notificationBox.successAlert("Email Successful","An Email Has Been Sent To You. Please Click On The Link In Your Mail, To Take You To Reset Password Page")

           }

    }
    },

        clear_all(){
      this.clear = true;
      this.email = "";
      this.clear = false;
        },
     
         emailVal(value){


                 let field = "Email"

         if(!this.clear && FieldValidateService.reqValEmail(value, field))
     {
       this.emailErr = FieldValidateService.reqValEmail(value,field);
        this.errorClient.push(this.emailErr);
     }else{

           this.emailErr =""; 
          this.errorClient.pop(this.emailErr);

     }


    },

  },





  watch:{

     email(curValue){
        this.emailVal(curValue);
     }

  }


}
</script>