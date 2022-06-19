
<template>
	<div class="unix-login">
		<div class="container-fluid">
			<div class="row justify-content-center">
				<div class="col-lg-4">
					<div class="login-content">
						<div class="login-logo">
							<img
								src="@/assets/eMedipay-logo-small.png"
								alt=""
								style="height: 55px"
							/>
						</div>
						<div class="card login-form">
							<h4>Reset Password</h4>
							<form @submit.prevent="handleSubmit()">
                                <div class="row">
                                <div class="col">
								<div class="form-group">
									<label>New Password</label>
									<input
										type="password"
										class="form-control"
										:class="{ form_error: passwordErr || 'password' in errorServers }"
										v-model.trim.lazy="password"
										placeholder="New Password"
									/>
									<div :class="{ text_error: passwordErr || 'password' in errorServers }" v-if="passwordErr">
										{{ passwordErr }} <span v-if="'password' in errorServers">{{ errorServers.password[0] }}</span>
									</div>
								</div>

                                </div>
                                </div>

                                <div class="row">
                                <div class="col">
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                     <input
                            type="password"
                            class="form-control"
                            :class="{ form_error: password_confirmationErr || 'password_confirmation' in errorServers }"
                            placeholder="Confirm Password"
                            v-model.trim.lazy="password_confirmation"
                          />
                          <div :class="{ text_error: password_confirmationErr || 'password_confirmation' in errorServers }" v-if="password_confirmationErr">
                            {{ password_confirmationErr }} <span v-if="'password_confirmation' in errorServers">{{ errorServers.password_confirmation[0] }}</span>
                          </div>
                                </div>
                                </div>

                                </div>


                           

                                


								<button type="submit" class="btn btn-primary btn-flat m-b-15">
									Submit
								</button>
								<div class="register-link text-center">
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
import { AUTH_RESET, LOADING } from '@/store/storeconstants';
import { mapActions, mapMutations } from 'vuex';
export default {
	name: "ResetPasswordView",
	components: {},

   created(){

  this.page = localStorage.getItem("page");

 },

    data(){
        return {

            clear:false,
            page:"",
            password:"",
            password_confirmation:"",
            passwordErr:"",
            password_confirmationErr:"",
            errorClient:[],
            errorServers:[]

        }
    },


    methods:{

     ...mapActions({
        resetAct: 'auth/'+AUTH_RESET,
        
    }),

    ...mapMutations({
       showLoading:LOADING,
   }),

        async handleSubmit(){

        this.showLoading(true);
        this.passwordVal(this.password);
        this.password_confirmationVal(this.password_confirmation);



        if(this.errorClient.length > 0){
            this.showLoading(false);
          notificationBox.errorNotifications("Some Errors Exist");
            
        }
        else{

              const formData = {
                token:this.$route.params.code,
                password:this.password,
                password_confirmation:this.password_confirmation
            };


            await this.resetAct(formData).catch(error => {
           this.errorServers.push(error.response.data.errors);
           console.log(error);
           this.showLoading(false);
           notificationBox.errorNotifications(error.response.data.message);

        });


                 if(this.errorServers.length < 1){

             this.showLoading(false);
             this.errorServers = [];
             this.errorClient = [];
            this.clear_all();
            notificationBox.succNotifications("Password Reseted Successfully");
            this.$router.replace("/login");

           }


        }

        },


        passwordVal(value){

      let field = "Password"

         if(!this.clear && FieldValidateService.reqValPassword(value, field))
     {
       this.passwordErr = FieldValidateService.reqValPassword(value,field);
        this.errorClient.push(this.passwordErr);
     }else{

           this.passwordErr =""; 
          this.errorClient.pop(this.passwordErr);

     }


    },


    password_confirmationVal(value){
          
      if(!this.clear  && FieldValidateService.valPasswordConfirm(value, this.password))
     {
       this.password_confirmationErr = FieldValidateService.valPasswordConfirm(value,this.password);
        this.errorClient.push(this.password_confirmationErr);
     }else{

           this.password_confirmationErr =""; 
          this.errorClient.pop(this.password_confirmationErr);

     }


   },



    clear_all(){
      this.clear = true;
      this.password = "";
      this.password_confirmation = "";
      this.clear = false;
        },


    },



       watch:{

     password(curValue){
        this.passwordVal(curValue);
     },


     password_confirmation(curValue){
        this.password_confirmationVal(curValue);
     }

  }


};
</script>