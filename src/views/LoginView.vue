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
                            <h4>{{ portal }} - Login </h4>
                            <form @submit.prevent="handleSubmit()">
                                <div v-if="!is_verified && email">
                                    Please Verify Your Account Before You Login.
                                    <br/>Click link on the mail sent to you
                                    
                                </div>
                                <div class="form-group">
                                    <label>Email address / Contact</label>
                                    <input type="text" v-model="email" class="form-control" placeholder="Email/Contact">
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" v-model="password" class="form-control" placeholder="Password">
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox"> Remember Me
                                    </label>
                                    <label class="float-end">
                                        <router-link to="/forgot-password">Forgotten Password?</router-link>
                                    </label>

                                </div>
                                <button type="submit" class="btn btn-primary btn-flat m-b-30 m-t-30">Sign in</button>
                                <!-- <div class="social-login-content">
                                    <div class="social-button">
                                        <button type="button" class="btn btn-primary bg-google-plus btn-flat btn-addon m-b-10"><i class="ti-google"></i>Register with google</button>
                                        <button type="button" class="btn btn-primary bg-facebook btn-flat btn-addon m-t-10"><i class="ti-facebook"></i>Register with facebook</button>
                                        <button type="button" class="btn btn-primary bg-linkedin btn-flat btn-addon m-t-10"><i class="ti-linkedin"></i>Register with linkedin</button>
                                        <button type="button" class="btn btn-primary bg-twitter btn-flat btn-addon m-t-10"><i class="ti-twitter"></i>Register with twitter</button>
                                    </div>
                                </div> -->
                                <div class="register-link m-t-15 text-center" v-if="!page">
                                    <p>Don't have account ? <router-link to="/register"> Register Here</router-link></p>
                                    <p>Go To  <router-link to="/"> Portal</router-link></p>
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
import { mapActions, mapMutations, mapState } from 'vuex';
import notificationBox from '@/services/notificationBox';
import { AUTH_LOGIN, LOADING } from '@/store/storeconstants';
//import { mapState } from 'vuex';
export default {    
  name: "LoginView",
  components: {

  },
  created(){


         if(this.$route.name == "em_login")
        {
            this.portal =   localStorage.setItem('Portall',"Gerdd")
            localStorage.setItem('page',true)
            this.page = true;
         }else{
                       localStorage.setItem('page',false)
                    this.page = false;
                }
            this.portal =  localStorage.getItem('Portall')
            this.email =  localStorage.getItem("login_email")
          //  localStorage.removeItem("login_email")
          if(this.verified){
          //  this.is_verified = this.verified
            localStorage.setItem("verified",this.verified);
            this.is_verified = localStorage.getItem("verified");
          }
          else{
              localStorage.setItem("verified",false);
            this.is_verified = localStorage.getItem("verified");
          }

            if(this.verified_username){
           // this.email = this.verified_username
            localStorage.setItem("login_email",this.verified_username);
            this.email = localStorage.getItem("login_email");
          }
          else{
             this.email =  localStorage.getItem("login_email")
          }


          //...mapState('auth',['is_verified','verified_username']),
            
  },


  data: function(){
      return {
          portal:"",
          is_verified: false,
          clear:false,
          email:"",
          password:"",
          errorServers:[],
          page:""

          
      }
  },



  computed:{
    ...mapState('auth',['verified','verified_username'])
  },


  methods:{

    ...mapActions({
          loginAct: 'auth/'+AUTH_LOGIN,
    }),

    
     
    ...mapMutations({
       showLoading:LOADING,
   }),


    async handleSubmit(){
   
        const formData = {
            email: this.email,
            password: this.password,
            portal:this.portal
         }


        // console.log(formData);
      


            await this.loginAct(formData).catch(error => {
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
            notificationBox.succNotifications("Login Successful");
            this.$router.push("/login_otp");

           }
  },


     clear_all(){
      this.clear = true;
      this.errorServers = [];
      this.password = "";
      this.email = "";
      this.clear = false;
        },


  }
}
</script>