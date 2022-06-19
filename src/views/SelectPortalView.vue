<template>
    <div class="unix-login">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="login-content">
                        <div class="login-logo">
                            <img src="@/assets/eMedipay-logo-small.png" alt="" style="height: 55px;"/>
                        </div>
                        <div class="card">
                            <h3 class="text-center mb-5">Select  Portal</h3>
                            <span>

                                                                    <div class="row mb-5">
                                        <div class="col">
                                            <div class="card m-1 p-5">
                                                <div class="btn bg-emedipay text-white btn-light shadow" @click="setPortal('Provider')">
                                                    <i class="fa-solid fa-hospital fa-4x mb-3"></i><br/>
                                                    Provider
                                             </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card m-1 p-5">
                                                <div class="btn bg-emedipay text-white btn-light shadow" @click="setPortal('Support')">
                                                    <i class="fa-solid fa-user fa-4x mb-3"></i><br/>
                                                    Support
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card m-1 p-5">
                                                <div class="btn bg-emedipay text-white btn-light shadow" @click="setPortal('Dependent')">
                                                    <i class="fa-solid fa-users fa-4x mb-3"></i><br/>
                                                    Dependent
                                                </div>
                                            </div>
                                        </div>


                                       <div class="col">
                                            <div class="card m-1 p-5">
                                                <div class="btn bg-emedipay text-white btn-light shadow" @click="setPortal('Telemedicine')">
                                                    <i class="fa-solid fa-book-medical fa-4x mb-3"></i><br/>
                                                    Telemedicine
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                             
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {    
  name: "SelectPortalView",
  data:  function() {
    return {

       portall:"",

    };
  },
  methods: {

     setPortal(portal){
         localStorage.setItem('Portall',portal)
         this.$router.push('/login');
     }

  },
  components: {

  }
}
</script>