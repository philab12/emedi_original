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
                            <h4>OTP</h4>
                            <form @submit.prevent="handleSubmit()"> 
                                <div class="form-group">
                                    <label>Verify Otp Code</label>
                                     <input
                            type="otp"
                            class="form-control"
                            :class="{ form_error: otpErr || 'otp' in errorServers }"
                            placeholder="Otp"
                            v-model.trim.lazy="otp"
                          />
                          <div
                            :class="{ text_error: otpErr || 'otp' in errorServers }"
                            v-if="otpErr || 'otp' in errorServers"
                          >
                            {{ otpErr }} <span v-if="'otp' in errorServers">{{ errorServers.otp[0] }}</span>
                          </div>
                                </div>


                         <div class="form-group" v-if="provider_data">
                          <label>Provider</label>
                          <select
                            class="form-control"
                            :class="{ form_error: providerErr }"
                            v-model.trim.lazy="provider">
                            <option value="">--Select Option--</option>
                            <option v-for="cot in provider_data" :key="cot.provider_id" :value="cot.provider_id">
                              {{ cot.provider }}
                            </option>
                          </select>
                           <div
                            :class="{ text_error: providerErr}"
                            v-if="providerErr"
                          >
                            {{ preoviderErr }} 
                          </div>
                          </div>
                                <!-- <router-link to="/reset-password" class="btn btn-primary btn-flat m-b-15">Submit</router-link> -->
                                <button type="submit" class="btn btn-primary btn-flat m-b-15">Submit</button>
                                <div class="register-link text-center">
                                    <p>Back to <router-link to="/login"> Login Page</router-link></p>
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
import { AUTH_OTP, LOADING } from '@/store/storeconstants';
export default {    
  name: "ForgotPasswordView",
  components: {

  },

  created(){
     this.portal = localStorage.getItem("Portall");
     this.provider_data = localStorage.getItem("provider_data");
     const user_data = JSON.parse(localStorage.getItem("users"));
    // console.log(user_data);
     this.user_id = user_data.id;
  },

  data(){
    return{
        otp:"",
        otpErr:"",
        portal:"",
        provider:"",
        user_id:"",
        providerErr:"",
        provider_data:[],
        clear:false,
        errorServers:[],
        errorClient:[]
    }
  },


  methods:{

    ...mapActions({
        otpAct: 'auth/'+AUTH_OTP,
        
    }),

       ...mapMutations({
       showLoading:LOADING,
   }),

    async handleSubmit(){

        this.showLoading(true);
        this.otpVal(this.otp);
        this.providerVal(this.provider);


        if(this.errorClient.length > 0){
            this.showLoading(false);
          notificationBox.errorNotifications("Some Errors Exist");
            
        }
        else{

            const formData = {
              otp:this.otp,
              user_id:this.user_id,
              provider_id:this.provider,
              portal:this.portal
            };

        

            await this.otpAct(formData).catch(error => {
           this.errorServers.push(error.response.data.errors);
           console.log(error);
           this.showLoading(false);
           notificationBox.errorNotifications(error.response.data.message);

        });

           if(this.errorServers.length < 1){

           

             this.showLoading(false);
        this.clear_all();
       // notificationBox.successAlert("Email Successful","An Email Has Been Sent To You. Please Click On The Link In Your Mail, To Take You To Reset Password Page")
        this.$router.push("/dashboard");
           }

    }
    },

        clear_all(){
      this.clear = true;
      this.otp = "";
      this.clear = false;
        },
     
         otpVal(value){


                 let field = "OTP"
                 let max = 7;

                

         if(!this.clear && FieldValidateService.reqMaxNumVal(value, field, max))
     {
       this.otpErr = FieldValidateService.reqMaxNumVal(value,field,max);
        this.errorClient.push(this.otpErr);
     }else{

           this.otpErr =""; 
          this.errorClient.pop(this.otpErr);

     }


    },




        providerVal(value){

             let field = "Provider";

      if(this.provider_data.length > 0  && FieldValidateService.reqVal(value,field)){
        this.countryErr = FieldValidateService.reqVal(value,field);
        this.errorClient.push(this.providerErr);
      }else{
        this.providerErr =""; 
          this.errorClient.pop(this.providerErr);
      }

    },

  },





  watch:{

     otp(curValue){
        this.otpVal(curValue);
     },

       provider(curValue){
        this.providerVal(curValue);
     }

  }


}
</script>