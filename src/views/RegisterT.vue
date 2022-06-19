<template>
  <div class="unix-login">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="login-content">
            <div class="login-logo">
              <img
                src="@/assets/eMedipay-logo-small.png"
                alt=""
                style="height: 55px"
              />
            </div>
            <div class="card login-form">
              <h4>Register - {{ app_portal }}</h4>

              <form class="register-form" @submit.prevent="reg()">
                <!-- <div id="cover-spin" v-if="loading"></div> -->

                
              
               <fieldset class="border p-2" v-if="app_portal === 'Provider'">
                  <legend class="float-none w-auto p-1">Provider Info</legend>
                  <span>
                    <div class="row">

                      <div class="col">
                        <div class="form-group">
                          <label>Provider</label>

                          <input
                            type="text"
                            class="form-control"
                            :class="{ form_error: providerErr }"
                            placeholder="Provider"
                            v-model.trim.lazy="provider"
                          />
                          <div
                            :class="{ text_error: providerErr }"
                            v-if="providerErr"
                          >
                            {{ providerErr }}
                          </div>
                        </div>
                      </div>




                      
                           <div class="col">
                        <div class="form-group">
                          <label>Provider's country</label>
                          <select
                            class="form-control"
                            :class="{ form_error: provider_countryErr }"
                            v-model.trim.lazy="provider_country_id">
                            <option value="">--Select Provider's Country--</option>
                            <option v-for="cot in getCountries" :key="cot.id" :value="cot.id">
                              {{ cot.country }}
                            </option>
                          </select>
                          </div>
                          
                          <div
                            :class="{ text_error: provider_countryErr }"
                            v-if="provider_countryErr"
                          >
                            {{ provider_countryErr }}
                          </div>
                        </div>
                      
                          

                         <div class="col">
                        <div class="form-group">
                          <label>address</label>
                          <input
                            type="text"
                            class="form-control"
                            :class="{ form_error: provider_addressErr }"
                            placeholder="Address"
                            v-model.trim.lazy="provider_address"
                          />
                          <div
                            :class="{ text_error: provider_addressErr }"
                            v-if="provider_addressErr"
                          >
                            {{ provider_addressErr }}
                          </div>
                        </div>
                      </div>

                

                      <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>state</label>
                          <input
                            type="text"
                            class="form-control"
                            :class="{ form_error: provider_stateErr }"
                            placeholder="State"
                            v-model.trim.lazy="provider_state"
                          />
                          <div
                            :class="{ text_error: provider_stateErr }"
                            v-if="provider_stateErr"
                          >
                            {{ provider_stateErr }}
                          </div>
                        </div>
                      </div>
                   
                   
                      <div class="col">
                        <div class="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            class="form-control"
                            :class="{ form_error: provider_cityErr }"
                            placeholder="City"
                            v-model.trim.lazy="provider_city"
                          />
                          <div :class="{ text_error: provider_cityErr }" v-if="provider_cityErr">
                            {{ provider_cityErr }}
                          </div>
                        </div>
                      </div>



                             <div class="col">
                        <div class="form-group">
                          <label>Zip</label>
                          <input 
                            type="number"
                            class="form-control"
                            :class="{ form_error: provider_zipErr }"
                            placeholder="Zip"
                            v-model.trim.lazy="provider_zip"
                          />
                          <div
                            :class="{ text_error: provider_zipErr }"
                            v-if="provider_zipErr"
                          >
                            {{ provider_zipErr }}
                          </div>
                        </div>
                      </div>
 </div>



                      </div>

                       <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Contact</label>
                          <input
                            type="number"
                            class="form-control"
                            :class="{ form_error: provider_contactErr }"
                            placeholder="Contact"
                            v-model.trim.lazy="provider_contact"
                          />
                          <div
                            :class="{ text_error: provider_contactErr }"
                            v-if="provider_contactErr"
                          >
                            {{ provider_contactErr }}
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            class="form-control"
                            :class="{ form_error: provider_emailErr }"
                            placeholder="Email"
                            v-model.trim.lazy="provider_email"
                          />
                          <div
                            :class="{ text_error: provider_emailErr }"
                            v-if="provider_emailErr"
                          >
                            {{ provider_emailErr }}
                          </div>
                        </div>
                      </div>



                                                <div class="col">
                        <div class="form-group">
                          <label>Healthcare</label>
                          <select
                            class="form-control"
                            :class="{ form_error: health_careErr }"
                            v-model.trim.lazy="health_care_id">
                            <option value="">--Select Health Care--</option>
                            <option v-for="health in getHealthCares" :key="health.id" :value="health.id">
                              {{ health.health_care }}
                            </option>
                          </select>
                          </div>
                          
                          <div
                            :class="{ text_error: health_careErr }"
                            v-if="health_careErr"
                          >
                            {{ health_careErr }}
                          </div>
                        </div>



                    </div>
                  </span>
                </fieldset>





                <fieldset class="border p-1">
                  <legend class="float-none w-auto p-1" v-if="app_portal === 'Provider'">Health Professional Personal Info</legend>
                  <legend class="float-none w-auto p-1" v-else>Personal Info</legend>
                  <span>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label
                            >Are You An Existing User To Any Of The
                            Portal</label
                          >
                          <select
                            class="form-control"
                            :class="{ form_error: existing_userErr }"
                            v-model.trim.lazy="existing_user"
                          >
                            <option value="">--Choose An Option--</option>
                            <option value="NO">NO</option>
                            <option value="YES">YES</option>
                          </select>
                          <div
                            :class="{ text_error: existing_userErr }"
                            v-if="existing_userErr"
                          >
                            {{ existing_userErr }}
                          </div>
                        </div>
                      </div>

                      <input
                        type="hidden"
                        class="form-control"
                        placeholder="portal"
                        v-model="formData.portal"
                      />

                      <div class="col" v-if="is_existing_user">
                        <div class="form-group">
                          <label>Search By Email/Contact</label>
                          <input
                            type="text"
                            class="form-control"
                            :class="{ form_error: searchErr || SearcherrorServers }"
                            placeholder="Search By Email/Contact"
                            v-model.trim.lazy="search"
                          />
                          <div
                            :class="{ text_error: searchErr || SearcherrorServers }"
                            v-if="searchErr || SearcherrorServers"
                          >
                            {{ searchErr }} {{ SearcherrorServers }}
                          </div>
                        </div>
                      
                      </div>
                    
                    </div>

                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>first name</label>

                          <input
                            type="text"
                            class="form-control"
                            :class="{ form_error: fnameErr}"
                            :readonly="is_existing_user"
                            placeholder="First Name"
                            v-model.trim.lazy="formData.fname"
                          />
                          <div
                            :class="{ text_error: fnameErr  }"
                           v-if="fnameErr">
                          {{ fnameErr }} 
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label>last name</label>
                          <input
                            type="text"
                            class="form-control"
                            :class="{ form_error: lnameErr }"
                            :readonly="is_existing_user"
                            placeholder="Last Name"
                            v-model.trim.lazy="formData.lname"
                          />
                          <div
                            :class="{ text_error: lnameErr }"
                            v-if="lnameErr"
                          >
                            {{ lnameErr }}
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label>other names</label>
                          <input
                            type="text"
                            class="form-control"
                            :class="{ form_error: onameErr }"
                            :readonly="is_existing_user"
                            placeholder="Other Names"
                            v-model.trim.lazy="formData.oname"
                          />
                          <div
                            :class="{ text_error: onameErr }"
                            v-if="onameErr"
                          >
                            {{ onameErr }} 
                          </div>
                        </div>
                      </div>
                            <div class="col">
                        <div class="form-group">
                          <label>Gender</label>
                          <div v-if="!is_existing_user">
                          <select
                            class="form-control"
                            :class="{ form_error: genderErr}"
                            v-model.trim="formData.gender">
                            <option value="">--Choose An Option--</option>
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                          </select>
                          </div>
                            <div v-else>


                                   <input
                            type="text"
                            :readonly="is_existing_user"
                            class="form-control"
                            placeholder="Gender"
                            v-model.trim="formData.gender"
                          />

                          </div>
                          <div
                            :class="{ text_error: genderErr}"
                            v-if="genderErr"
                          >
                            {{ genderErr }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>country</label>
                          <div v-if="!is_existing_user">
                          <select
                            class="form-control"
                            :class="{ form_error: countryErr }"
                            v-model.trim.lazy="formData.country_id">
                            <option value="">--Choose a Country--</option>
                            <option v-for="cot in getCountries" :key="cot.id" :value="cot.id">
                              {{ cot.country }}
                            </option>
                          </select>
                          </div>
                          <div v-else>


                                   <input
                            type="text"
                            :readonly="is_existing_user"
                            class="form-control"
                            placeholder="Country"
                            v-model.trim.lazy="country_name"
                          />

                          </div>
                          <div
                            :class="{ text_error: countryErr}"
                            v-if="countryErr"
                          >
                            {{ countryErr }}
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="form-group">
                          <label>address</label>
                          <input
                            type="text"
                            :readonly="is_existing_user"
                            class="form-control"
                            :class="{ form_error: addressErr}"
                            placeholder="Address"
                            v-model.trim.lazy="formData.address"
                          />
                          <div
                            :class="{ text_error: addressErr}"
                            v-if="addressErr ||  'address' in errorServers"
                          >
                            {{ addressErr }}
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label>state</label>
                          <input
                            type="text"
                            :readonly="is_existing_user"
                            class="form-control"
                            :class="{ form_error: stateErr}"
                            placeholder="State"
                            v-model.trim.lazy="formData.state"
                          />
                          <div
                            :class="{ text_error: stateErr }"
                            v-if="stateErr ||  'state' in errorServers"
                          >
                            {{ stateErr }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>city</label>
                          <input
                            type="text"
                            :readonly="is_existing_user"
                            class="form-control"
                            :class="{ form_error: cityErr }"
                            placeholder="City"
                            v-model.trim.lazy="formData.city"
                          />
                          <div :class="{ text_error: cityErr }" v-if="cityErr">
                            {{ cityErr }} 
                          </div>
                        </div>
                      </div>

                       <div class="col">
                        <div class="form-group">
                          <label>Zip</label>
                          <input
                            type="text"
                            :readonly="is_existing_user"
                            class="form-control"
                            :class="{ form_error: zipErr}"
                            placeholder="Contact"
                            v-model.trim.lazy="formData.zip"
                          />
                          <div
                            :class="{ text_error: zipErr  }"
                            v-if="zipErr"
                          >
                            {{ zipErr }} 
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="form-group">
                          <label>contact</label>
                          <input
                            type="text"
                            :readonly="is_existing_user"
                            class="form-control"
                            :class="{ form_error: contactErr || 'contact' in errorServers }"
                            placeholder="Contact"
                            v-model.trim.lazy="formData.contact"
                          />
                          <div
                            :class="{ text_error: contactErr || 'contact' in errorServers}"
                            v-if="contactErr || 'contact' in errorServers"
                          >
                            {{ contactErr }} <span v-if="'contact' in errorServers">{{ errorServers.contact[0] }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label>email</label>
                          <input
                            type="email"
                            :readonly="is_existing_user"
                            class="form-control"
                            :class="{ form_error: emailErr || 'email' in errorServers }"
                            placeholder="Email"
                            v-model.trim.lazy="formData.email"
                          />
                          <div
                            :class="{ text_error: emailErr || 'email' in errorServers }"
                            v-if="emailErr || 'email' in errorServers"
                          >
                            {{ emailErr }} <span v-if="'email' in errorServers">{{ errorServers.email[0] }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </fieldset>

                <fieldset class="border p-2">
                  <legend class="float-none w-auto p-1">Login Info</legend>
                  <span>
                    <div class="row">
                            <div class="col">
                        <div class="form-group">
                          <label>User Level </label>
                          <div v-if="app_portal === 'Provider'">
                          <select
                            class="form-control"
                            :class="{ form_error: user_levelErr || 'user_level' in errorServers }"
                            v-model.trim="userPortData.user_level">
                            
                            <option value="" selected>--Choose An Option--</option>
                            <option value="ACCOUNTANT">ACCOUNTANT</option>
                            <option value="HEALTH PROFESSIONAL">HEALTH PROFESSIONAL</option>
             
                          </select>
                          </div>

                             <div v-else-if="app_portal == 'Support'">
                                  <input
                            type="text"
                            class="form-control"
                            readonly
                            :class="{ form_error: user_levelErr || 'user_level' in errorServers }"
                            placeholder="USER LEVEL"
                            v-model.trim.lazy="userPortData.user_level"
                          />
                            </div>


                            <div v-else-if="app_portal === 'Dependent'">
                                  <input
                            type="text"
                            class="form-control"
                            readonly
                            :class="{ form_error: user_levelErr || 'user_level' in errorServers }"
                            placeholder="USER LEVEL"
                            v-model.trim.lazy="userPortData.user_level"
                          />
                            </div>


                            <div v-else-if="app_portal === 'Telemedicine'">
                                  <input
                            type="text"
                            class="form-control"
                            readonly
                            :class="{ form_error: user_levelErr || 'user_level' in errorServers }"
                            placeholder="USER LEVEL"
                            v-model.trim.lazy="userPortData.user_level"
                          />
                            </div>



                              <div v-if="app_portal === 'Gerdds'">
                          <select
                            class="form-control"
                            :class="{ form_error: user_levelErr || 'user_level' in errorServers }"
                            v-model.trim="userPortData.user_level">
                            
                            <option value="" selected>--Choose An Option--</option>
                            <option value="GLOBAL">GLOBAL</option>
                            <option value="COUNTRY">COUNTRY</option>
                            <option value="LOCAL">LOCAL</option>
                            
                            <!-- <div v-else-if="app_portal === 'SUPPORT'">
                            <option value="SUPPORT" selected>SUPPORT</option>
                            </div>
                               <div v-else-if="app_portal == 'DEPENDENT'">
                            <option value="DEPENDENT" selected>DEPENDENT</option>
                            </div>
                                 <div v-else-if="app_portal == 'TELEMEDICINE'">
                            <option value="TELEMEDICINE" selected>TELEMEDICINE</option>
                            </div> -->
                          </select>
                          </div>

                          {{ user_levelErr }}
                          
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label>password</label>
                          <input
                            type="password"
                            :readonly="is_existing_user"
                            class="form-control"
                            :class="{ form_error: passwordErr }"
                            placeholder="Password"
                            v-model.trim.lazy="formData.password"
                          />
                          <div
                            :class="{ text_error: passwordErr}"
                            v-if="passwordErr"
                          >
                            {{ passwordErr }}
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label>confirm password</label>
                          <input
                            type="password"
                            :readonly="is_existing_user"
                            class="form-control"
                            :class="{ form_error: password_confirmationErr  }"
                            placeholder="Confirm Password"
                            v-model.trim.lazy="formData.password_confirmation"
                          />
                          <div
                            :class="{ text_error: password_confirmationErr }"
                            v-if="password_confirmationErr"
                          >
                            {{ password_confirmationErr }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <!-- <div class="col">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox"> Agree the terms and policy 
                                                </label>
                                            </div>
                                        </div> -->
                    </div>
                  </span>
                </fieldset>

                <span class="buttons show-buttons">
                  <button
                    type="submit"
                    class="btn btn-primary btn-flat m-b-30 m-t-30"
                  >
                    Register
                  </button>
                  <!-- <div class="social-login-content">
                                        <div class="social-button">
                                            <button type="button" class="btn btn-primary bg-google-plus btn-flat btn-addon m-b-10"><i class="ti-google"></i>Register with google</button>
                                            <button type="button" class="btn btn-primary bg-facebook btn-flat btn-addon m-t-10"><i class="ti-facebook"></i>Register with facebook</button>
                                            <button type="button" class="btn btn-primary bg-linkedin btn-flat btn-addon m-t-10"><i class="ti-linkedin"></i>Register with linkedin</button>
                                            <button type="button" class="btn btn-primary bg-twitter btn-flat btn-addon m-t-10"><i class="ti-twitter"></i>Register with twitter</button>
                                        </div>
                                    </div> -->
                  <div class="register-link m-t-15 text-center">
                    <p>
                      Already have account ?
                      <router-link to="/login"> Login</router-link>
                    </p>
                    <p>Go To ? <router-link to="/"> Portal</router-link></p>
                  </div>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FieldValidateService from "@/services/FieldValidateService";
import notificationBox from "@/services/notificationBox";
import { mapActions, mapMutations, mapState } from 'vuex';
import { DEPENDENT_REG, GET_SEARCH_USER, LOADING, PROVIDER_REG, SEARCH_USER, SUPPORT_REG, USER_PORTAL_REG, USER_REG } from '@/store/storeconstants';

export default {
  name: "RegisterT",

  async created() {
    // this.portal =  localStorage.getItem('Portall')
    this.app_portal = localStorage.getItem("Portall");
    this.userPortData.portal = localStorage.getItem("Portall");



    switch(this.app_portal) {
  case 'Dependent':
    this.userPortData.user_level = "DEPENDENT";
    break;
  case 'Support':
    this.userPortData.user_level = "SUPPORT";
    break;
  case 'Telemedicine':
    this.userPortData.user_level = "TELEMEDICINE";
    break;
  default:
    this.userPortData.user_level = "";
}

    

//     const configHeaders = {
//   "content-type": "application/json",
//   "Accept": "application/json"
// };

    try{
       let response = await axios.get("getCountries");
      // console.log(response.data.data);
         
        this.getCountries =  JSON.parse(JSON.stringify(response.data.data));
        //console.log(this.getCountries);
       
       
       
      
    }catch(error){
        console.log(error);
    }



  if(this.app_portal === 'Provider')
  {
        try{
       let response = await axios.get("getHealthCares");
      // console.log(response.data.data);
         
        this.getHealthCares =  JSON.parse(JSON.stringify(response.data.data));
        //console.log(this.getCountries);
       
       
       
      
    }catch(error){
        console.log(error);
    }
  }
  
  },

  data: function () {
    return {
      is_existing_user: false,
      existing_user: "",
      existing_userErr: "",
      app_portal: "",
      search: "",
      searchErr: "",
      loading:false,
      getHealthCares:[],
      getCountries:[],
      country_name:"",
      errorMess: "",
      succMess:"",
      SearcherrorServers:"",
      clear_user: true,
      clear_all: true,
      errorClient:[],
      errorServers:[],

      formData: {
        provider_id:"",
        fname: "",
        lname: "",
        oname: "",
        gender: "",
        country_id: "",
        address: "",
        state: "",
        city: "",
        zip: "",
        contact: "",
        email: "",
        password: "",
        password_confirmation: "",
      },


      //Provider
      provider:"",
      provider_country_id:"",
      provider_address:"",
      provider_state:"",
      provider_city:"",
      provider_zip:"",
      provider_contact:"",
      provider_email:"",
      health_care_id:"",
    

      userPortData:{
       // user_id:this.user_idd,
        user_level:"",
        portal:"",
        is_logged_in:"NO",
        status:"PENDING",
        provider_id:"",
        otp_code:"",
      },

    //Errors  
      fnameErr: "",
      lnameErr: "",
      onameErr: "",
      genderErr: "",
      countryErr: "",
      addressErr: "",
      stateErr: "",
      cityErr: "",
      zipErr: "",
      contactErr: "",
      emailErr: "",
      passwordErr: "",
      password_confirmationErr: "",
      user_levelErr:"",

      //Providers Err
      providerErr:"",
      provider_countryErr:"",
      provider_addressErr:"",
      provider_stateErr:"",
      provider_cityErr:"",
      provider_zipErr:"",
      provider_contactErr:"",
      provider_emailErr:"",
      health_careErr:"",






    };
  },
  methods: {

   ...mapActions({
        userReg: 'user/'+USER_REG,
        search_user: 'user/'+SEARCH_USER,
        supportReg: 'support/'+SUPPORT_REG,
        dependentReg: 'dependent/'+DEPENDENT_REG,
        providerReg: 'provider/'+PROVIDER_REG,
        user_portalReg: 'user_portal/'+USER_PORTAL_REG,
   }),

   ...mapMutations({
       reset_user_id: 'user/'+GET_SEARCH_USER,
       showLoading:LOADING,
     //  verified_username:'auth/'+SUCC_AUTH_VERIFY,
   }),


  

   

    async reg(){
      //notificationBox.successAlert("Registration Successful","An Email Has Been Sent To You. Please Click On The Link To Verify Your Account")
      
       //console.log(this.formData);
       // console.log(this.errorClient);
       this.errorClient = [];
       this.showLoading(true);
      //  this.existing_userVal(this.existing_user);
        this.searchVal(this.search);
        this.fnameVal(this.formData.fname);
        this.lnameVal(this.formData.lname);
        this.onameVal(this.formData.oname);
        this.genderVal(this.formData.gender);
        this.countryVal(this.formData.country_id);
        this.addressVal(this.formData.address);
        this.stateVal(this.formData.state);
        this.cityVal(this.formData.city);
        this.zipVal(this.formData.contact);
        this.contactVal(this.formData.contact);
        this.emailVal(this.formData.email);
        this.passwordVal(this.formData.password);
        this.password_confirmationVal(this.formData.password_confirmation);
        this.user_levelVal(this.userPortData.user_level);

        if(this.app_portal === 'Provider'){

           this.providerVal(this.provider);
           this.provider_countryVal(this.provider_country_id);
           this.provider_addressVal(this.provider_address);
           this.provider_stateVal(this.provider_state);
           this.provider_cityVal(this.provider_city);
           this.provider_zipVal(this.provider_zip);
           this.provider_contactVal(this.provider_contact);
           this.provider_emailVal(this.provider_email);
           this.health_careVal(this.health_care_id);

        }

             if(this.errorClient.length > 0)
       {
         this.showLoading(false);
          notificationBox.errorNotifications("Some Errors Exist");
          
          return true;
       }

        this.errorServers = [];

      if(!this.is_existing_user){
        this.reset_user_id({});
           //User Process
          await this.userReg(this.formData).catch(error => {
           this.errorServers.push(error.response.data.errors);
           console.log(error);
           this.showLoading(false);
           notificationBox.errorNotifications(error.response.data.message);
           
       });

        if(this.errorServers.length > 0)
       {
       console.log(this.errorServers.length);
       return true;
       }
      }



       //Support Process If Support
       if(this.app_portal === "Support")
       {
         const formSupportData = {
           user_support_id:this.user_idd,
           user_id:this.user_idd,
           user1_id:null,
           status:'PENDING'
         };

         await this.supportReg(formSupportData).catch(error => {
           //this.errorServers = error.response.data.errors;
            this.errorServers.push(error.response.data.errors);
           console.log(error);
           this.showLoading(false);
           notificationBox.errorNotifications(error.response.data.errors.message);
          
       });

         if(this.errorServers.length > 0)
         {
         return true;
         }

       }


       else if(this.app_portal === 'Dependent')
       {

            const formDependentData = {
           user_dependent_id:this.user_idd,
           is_active:'NO',
           user_id:this.user_idd
         };

         await this.dependentReg(formDependentData).catch(error => {
           //this.errorServers = error.response.data.errors;
            this.errorServers.push(error.response.data.errors);
           console.log(error);
           this.showLoading(false);
           notificationBox.errorNotifications(error.response.data.errors.message);
          
       });

             if(this.errorServers.length > 0)
         {
         return true;
         }


       }





          else if(this.app_portal === 'Provider')
       {

            const formProviderData = {
      provider:this.provider,
      country_id:this.provider_country_id,
      address:this.provider_address,
      state:this.provider_state,
      city:this.provider_city,
      zip:this.provider_zip,
      contact:this.provider_contact,
      email:this.provider_email,
      health_prof_id:this.user_idd,
      health_care_id:this.health_care_id,
      status:"PENDING",
      user_id:this.user_idd,
      user1_id:null,
         };

         await this.providerReg(formProviderData).catch(error => {
           //this.errorServers = error.response.data.errors;
            this.errorServers.push(error.response.data.errors);
           console.log(error);
           this.showLoading(false);
           notificationBox.errorNotifications(error.response.data.errors.message);
          // return true
       });

               if(this.errorServers.length > 0)
         {
         return true;
         }

      this.provider_id = this.provider_idd;


       }


     //this.userPortData.user

  const FormUserPortData={
        user_id:this.user_idd,
        user_level:this.userPortData.user_level,
        portal:this.userPortData.portal,
        is_logged_in:this.userPortData.is_logged_in,
        status:this.userPortData.status,
        provider_id:this.provider_idd,
        otp_code:this.userPortData.otp_code,
      };

          await this.user_portalReg(FormUserPortData).catch(error => {
           this.errorServers.push(error.response.data.errors);
           console.log(error);
           this.showLoading(false);
           notificationBox.errorNotifications(error.response.data.message);
           
       });






        if(this.errorServers.length > 0)
       {
       console.log(this.errorServers.length);
       return true;
       }




      else{
       
       this.errorServers = [];

     //This Get The Email And Sends It As State And Put It In Login
      // const authRegData = {
      //   is_verified: false,
      //   username: this.email
      //  };

       console.log(this.formData.email);
       localStorage.setItem("login_email",this.formData.email)
    //   this.verified_username(authRegData);

      //notificationBox.succNotifications("User Registration Sucessful");
      this.showLoading(false);
        this.reset_user_id({});
        this.clear_all_user();
        notificationBox.successAlert("Registration Successful","An Email Has Been Sent To You. Please Click On The Link To Verify Your Account")
       // this.$router.push('/reg-info');
       // console.log("Greaaaaaaaaaaaat");
       }
       
    
    },




    clear_main_user(){
        this.errorServers = [];
      this.clear_user = false;
      this.formData.fname = "";
      this.formData.lname = "";
      this.formData.oname = "";
      this.formData.gender = "";
      this.country_name = "";
      this.formData.address = "";
      this.formData.country_id = "";
        this.country_name = "",
      this.formData.state = "";
      this.formData.city = "";
        this.formData.zip = "";
      this.formData.contact = "";
      this.formData.email = "";
      this.formData.password = "";
      this.formData.password_confirmation = "";
      this.reset_user_id({});
      this.clear_user = true;
    },


    clear_all_user(){
      this.clear_main_user();
      this.clear_all = false;
      this.provider = "";
      this.provider_country_id = "";
      this.provider_address = "";
      this.provider_state = "";
      this.provider_city = "";
      this.provider_zip = "";
      this.provider_contact = "";
      this.provider_email = "";
      this.user_idd = "";
      this.health_care_id = "";
      this.existing_user = "";
      this.status = "PENDING";
      this.user_id = this.user_idd;

        if(this.app_portal === 'Provider')
        {
        this.userPortData.user_level = "";
        this.provider_id = this.provider_idd;
        }
        else
        {
           this.provider_id = "";
        }
        this.userPortData.is_logged_in = "";
        this.userPortData.otp_code = "";
        this.clear_all = true;
    },




    existing_userVal(value) {

       let field = "Existing User";

      if(!this.clear_all && FieldValidateService.reqVal(value,field)){
        this.existing_userErr = FieldValidateService.reqVal(value,field);
        this.errorClient.push(this.existing_userErr);
      }else{
        this.existing_userErr =""; 
          this.errorClient.pop(this.existing_userErr);
      }
    },

    searchVal(value) {

      let field = "Search";
     
     if(!this.clear_user && this.is_existing_user && FieldValidateService.reqValSearch(value, field))
     {
       this.searchErr = FieldValidateService.reqValSearch(value,field);
        this.errorClient.push(this.searchErr);
     }else{

           this.searchErr =""; 
          this.errorClient.pop(this.searchErr);

     }
    },

    fnameVal(value){

      let max = 249;
      let field = "First Name"

         if(!this.clear_user && !this.is_existing_user && FieldValidateService.reqMaxStringVal(value, field,max))
     {
       this.fnameErr = FieldValidateService.reqMaxStringVal(value,field,max);
        this.errorClient.push(this.fnameErr);
     }else{

           this.fnameErr =""; 
          this.errorClient.pop(this.fnameErr);

     }


    },


    lnameVal(value){
             let max = 249;
      let field = "Last Name"

         if(!this.clear_user && !this.is_existing_user && FieldValidateService.reqMaxStringVal(value, field,max))
     {
       this.lnameErr = FieldValidateService.reqMaxStringVal(value,field,max);
        this.errorClient.push(this.lnameErr);
     }else{

           this.lnameErr =""; 
          this.errorClient.pop(this.lnameErr);

     }

    },



    onameVal(value){

      let max = 249;
      let field = "Other Name"

         if(!this.clear_user && !this.is_existing_user && FieldValidateService.onlyMaxStringVal(value, field,max))
     {
       this.onameErr = FieldValidateService.onlyMaxStringVal(value,field,max);
        this.errorClient.push(this.onameErr);
     }else{

           this.onameErr =""; 
          this.errorClient.pop(this.onameErr);

     }

    
    },



      genderVal(value) {

      let max = 100;
      let field = "Gender";
     
     if(!this.clear_user && !this.is_existing_user && FieldValidateService.reqMaxStringVal(value,field,max))
     {
       this.genderErr = FieldValidateService.reqMaxStringVal(value,field,max);
        this.errorClient.push(this.genderErr);
     }else{

           this.genderErr =""; 
          this.errorClient.pop(this.genderErr);

     }
    },


    countryVal(value){

             let field = "Country";

      if(!this.clear_user && !this.is_existing_user && FieldValidateService.reqVal(value,field)){
        this.countryErr = FieldValidateService.reqVal(value,field);
        this.errorClient.push(this.countryErr);
      }else{
        this.countryErr =""; 
          this.errorClient.pop(this.countryErr);
      }

    },

    addressVal(value){
               let field = "Address";

      if(!this.clear_user && !this.is_existing_user && FieldValidateService.onlyString(value,field)){
        this.addressErr = FieldValidateService.onlyString(value,field);
        this.errorClient.push(this.addressErr);
      }else{
        this.addressErr =""; 
          this.errorClient.pop(this.addressErr);
      }
    },




    stateVal(value){

      let max = 250;
      let field = "State"

         if(!this.clear_user && !this.is_existing_user && FieldValidateService.reqMaxStringVal(value, field,max))
     {
       this.stateErr = FieldValidateService.reqMaxStringVal(value,field,max);
        this.errorClient.push(this.stateErr);
     }else{

           this.stateErr =""; 
          this.errorClient.pop(this.stateErr);

     }



    },

    cityVal(value){

           let max = 250;
           let field = "City"

         if(!this.clear_user && !this.is_existing_user && FieldValidateService.reqMaxStringVal(value, field,max))
     {
       this.cityErr = FieldValidateService.reqMaxStringVal(value,field,max);
        this.errorClient.push(this.cityErr);
     }else{

           this.cityErr =""; 
          this.errorClient.pop(this.cityErr);

     }


    },



        zipVal(value) {

       let field = "Zip";
       let max = 19;
      

      if(!this.clear_user && !this.is_existing_user && FieldValidateService.reqMaxNumVal(value,field,max)){
        this.zipErr = FieldValidateService.reqMaxNumVal(value,field,max);
        this.errorClient.push(this.zipErr);
      }else{
        this.zipErr =""; 
          this.errorClient.pop(this.zipErr);
      }
    },


    contactVal(value){

           let field = "Contact"

         if(!this.clear_user && !this.is_existing_user && FieldValidateService.reqValNum(value, field))
     {
       this.contactErr = FieldValidateService.reqValNum(value,field);
        this.errorClient.push(this.contactErr);
     }else{

           this.contactErr =""; 
          this.errorClient.pop(this.contactErr);

     }

    },


    emailVal(value){


                 let field = "Email"

         if(!this.clear_user && !this.is_existing_user && FieldValidateService.onlyEmail(value, field))
     {
       this.emailErr = FieldValidateService.onlyEmail(value,field);
        this.errorClient.push(this.emailErr);
     }else{

           this.emailErr =""; 
          this.errorClient.pop(this.emailErr);

     }


    },


    passwordVal(value){

      let field = "Password"

         if(!this.clear_user && !this.is_existing_user && FieldValidateService.reqValPassword(value, field))
     {
       this.passwordErr = FieldValidateService.reqValPassword(value,field);
        this.errorClient.push(this.passwordErr);
     }else{

           this.passwordErr =""; 
          this.errorClient.pop(this.passwordErr);

     }


    },


    password_confirmationVal(value){

           
          

      if(!this.clear_user && !this.is_existing_user && FieldValidateService.valPasswordConfirm(value, this.formData.password))
     {
       this.password_confirmationErr = FieldValidateService.valPasswordConfirm(value,this.formData.password);
        this.errorClient.push(this.password_confirmationErr);
     }else{

           this.password_confirmationErr =""; 
          this.errorClient.pop(this.password_confirmationErr);

     }


   },





      user_levelVal(value) {

       let field = "User Level";

      if(!this.clear_all && FieldValidateService.reqVal(value,field)){
        this.user_levelErr = FieldValidateService.reqVal(value,field);
        this.errorClient.push(this.user_levelErr);
      }else{
        this.user_levelErr =""; 
          this.errorClient.pop(this.user_levelErr);
      }
    },





       providerVal(value) {

       let field = "Provider";
       let max = 499;

      if(!this.clear_all && this.app_portal === 'Provider' && FieldValidateService.reqMaxStringVal(value,field,max)){
        this.providerErr = FieldValidateService.reqMaxStringVal(value,field,max);
        this.errorClient.push(this.providerErr);
      }else{
        this.providerErr =""; 
          this.errorClient.pop(this.providerErr);
      }
    },





        provider_countryVal(value) {

       let field = "Country";
      

      if(!this.clear_all && this.app_portal === 'Provider' && FieldValidateService.reqVal(value,field)){
        this.provider_countryErr = FieldValidateService.reqVal(value,field);
        this.errorClient.push(this.provider_countryErr);
      }else{
        this.provider_countryErr =""; 
          this.errorClient.pop(this.provider_countryErr);
      }
    },





    
        provider_addressVal(value) {

       let field = "Address";
      

      if(!this.clear_all && this.app_portal === 'Provider' && FieldValidateService.onlyString(value,field)){
        this.provider_addressErr = FieldValidateService.onlyString(value,field);
        this.errorClient.push(this.provider_addressErr);
      }else{
        this.provider_addressErr =""; 
          this.errorClient.pop(this.provider_addressErr);
      }
    },




            provider_stateVal(value) {

       let field = "State";
       let max = 250;
      

      if(!this.clear_all && this.app_portal === 'Provider' && FieldValidateService.reqMaxStringVal(value,field,max)){
        this.provider_stateErr = FieldValidateService.reqMaxStringVal(value,field,max);
        this.errorClient.push(this.provider_stateErr);
      }else{
        this.provider_stateErr =""; 
          this.errorClient.pop(this.provider_stateErr);
      }
    },




      provider_cityVal(value) {

       let field = "City";
       let max = 199;
      

      if(!this.clear_all && this.app_portal === 'Provider' && FieldValidateService.reqMaxStringVal(value,field,max)){
        this.provider_cityErr = FieldValidateService.reqMaxStringVal(value,field,max);
        this.errorClient.push(this.provider_cityErr);
      }else{
        this.provider_cityErr =""; 
          this.errorClient.pop(this.provider_cityErr);
      }
    },



         provider_zipVal(value) {

       let field = "Zip";
       let max = 19;
      

      if(!this.clear_all && this.app_portal === 'Provider' && FieldValidateService.reqMaxNumVal(value,field,max)){
        this.provider_zipErr = FieldValidateService.reqMaxNumVal(value,field,max);
        this.errorClient.push(this.provider_zipErr);
      }else{
        this.provider_zipErr =""; 
          this.errorClient.pop(this.provider_zipErr);
      }
    },






      provider_contactVal(value) {

       let field = "Contact";
       let max = 15;
      

      if(!this.clear_all && this.app_portal === 'Provider' && FieldValidateService.reqMaxNumVal(value,field,max)){
        this.provider_contactErr = FieldValidateService.reqMaxNumVal(value,field,max);
        this.errorClient.push(this.provider_contactErr);
      }else{
        this.provider_contactErr =""; 
          this.errorClient.pop(this.provider_contactErr);
      }
    },





   provider_emailVal(value){


                 let field = "Email"

         if(!this.clear_all && this.app_portal === 'Provider' && FieldValidateService.reqValEmail(value, field))
     {
       this.provider_emailErr = FieldValidateService.reqValEmail(value,field);
        this.errorClient.push(this.provider_emailErr);
     }else{

           this.provider_emailErr =""; 
          this.errorClient.pop(this.provider_emailErr);

     }


    },



      health_careVal(value) {

       let field = "Health Care";
      

      if(!this.clear_all && this.app_portal === 'Provider' && FieldValidateService.reqVal(value,field)){
        this.health_careErr = FieldValidateService.reqVal(value,field);
        this.errorClient.push(this.haelth_careErr);
      }else{
        this.health_careErr =""; 
          this.errorClient.pop(this.health_careErr);
      }
    },
        
        



  },


  computed:{
    ...mapState('user',['search_user_result','user_idd']),
    ...mapState('provider', ['provider_idd']) 
  },  


  components: {},

  watch: {
    existing_user(curValue) {
 

    //  this.existing_userVal(curValue);

      //Check iF vAL iS True Or False
      if (curValue === "YES") {
        this.is_existing_user = true;
         this.search = "";
         this.errorServers = [];
              this.fnameErr= "",
      this.lnameErr= "",
      this.onameErr= "",
      this.genderErr= "",
      this.countryErr= "",
      this.addressErr= "",
      this.stateErr= "",
      this.cityErr= "",
      this.zipErr= "",
      this.contactErr= "",
      this.emailErr= "",
      this.passwordErr= "",
      this.password_confirmationErr= ""
      } else {
        this.is_existing_user = false;
        this.search = "";
      this.errorServers = [];
      this.clear_main_user();
 

      }
    },

    async search(curValue) {
      this.searchVal(curValue);

   
 if(this.is_existing_user){
    

            let data = {
              search: curValue,
      };

       this.showLoading(true);
      await this.search_user(data).catch(error => {
           this.SearcherrorServers = error.response.data.error;
           console.log(error);
           this.showLoading(false);
           this.reset_user_id({});
           notificationBox.errorNotifications(error.response.data.error);

       });

        if(this.user_idd)
       {
         this.SearcherrorServers=false;
      //  let response = await axios.post("getUser",data);
      // console.log(response.data.data);
      this.showLoading(false);
      this.formData.fname = this.search_user_result.fname;
      this.formData.lname = this.search_user_result.lname;
      this.formData.gender = this.search_user_result.gender;
      this.country_name = this.search_user_result.country;
      this.formData.address = this.search_user_result.address;
      this.formData.country_id = this.search_user_result.country_id;
      this.formData.state = this.search_user_result.state;
      this.formData.city = this.search_user_result.city;
      this.formData.zip = this.search_user_result.zip;
      this.formData.contact = this.search_user_result.contact;
      this.formData.email = this.search_user_result.email;
      this.formData.password = this.search_user_result.password;
      this.formData.password_confirmation = this.search_user_result.password;
       }
       else{


          this.showLoading(false);
    //  this.user_id = this.search_user_result.id
      // this.formData.fname = "";
      // this.formData.lname = "";
      // this.formData.gender = "";
      // this.country_name = "";
      // this.formData.address = "";
      // this.formData.country_id = "";
      // this.formData.state = "";
      // this.formData.city = "";
      // this.formData.zip = "";
      // this.formData.contact = "";
      // this.formData.email = "";
      // this.formData.password = "";
      // this.formData.password_confirmation = "";

      this.clear_main_user();

       }
   
 }
    },

    "formData.fname"(curValue) {
        this.fnameVal(curValue)
    },

    "formData.lname"(curValue) {
         this.lnameVal(curValue)
    },

    "formData.oname"(curValue) {
         this.onameVal(curValue)
    },

        "formData.gender"(curValue) {
         this.genderVal(curValue)
    },


    "formData.country_id"(curValue) {
       this.countryVal(curValue);
    },

    "formData.address"(curValue) {
        this.addressVal(curValue);
    },

    "formData.state"(curValue) {
      this.stateVal(curValue);
    },

    "formData.city"(curValue) {
         this.cityVal(curValue);
    },

        "formData.zip"(curValue) {
       this.zipVal(curValue);
    },

    "formData.contact"(curValue) {
       this.contactVal(curValue);
    },

    "formData.email"(curValue) {
        this.emailVal(curValue);
    },

    "formData.password"(curValue) {
       this.passwordVal(curValue);
    },

    "formData.password_confirmation"(curValue) {
        this.password_confirmationVal(curValue);      
    },

    
    "userPortData.user_level"(curValue) 
    {
       this.user_levelVal(curValue);
    },


  //Provider
    "provider"(curValue) {
       this.providerVal(curValue);
    },

    "provider_country_id"(curValue) {
       this.provider_countryVal(curValue);
    },


    "provider_address"(curValue) {
       this.provider_addressVal(curValue);
    },

    "provider_state"(curValue) {
       this.provider_stateVal(curValue);
    },


    "provider_city"(curValue) {
       this.provider_cityVal(curValue);
    },


    "provider_zip"(curValue) {
       this.provider_zipVal(curValue);
    },

    "provider_contact"(curValue) {
       this.provider_contactVal(curValue);
    },


    "provider_email"(curValue) {
       this.provider_emailVal(curValue);
    },


    "health_care_id"(curValue) {
       this.health_careVal(curValue);
    },

  },
};
</script>
