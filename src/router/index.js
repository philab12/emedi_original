import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import LoginOtp from "@/views/LoginOtp.vue";
import DashboardView from "@/views/DashboardView.vue";
//import RegisterView from "@/views/RegisterView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import ResetPasswordView from "@/views/ResetPasswordView.vue";
import RegistrationInfoPage from "@/views/RegistrationInfoPage.vue";
import ActivationView from "@/views/ActivationView.vue";
import SelectPortalView from "@/views/SelectPortalView.vue";
import ProvidersView from "@/views/ProvidersView.vue";
import SupportMembersView from "@/views/SupportMembersView.vue";
import DependantsView from "@/views/DependantsView.vue";
import AllUsersView from "@/views/AllUsersView.vue";
import LinkUsersToProvidersView from "@/views/LinkUsersToProvidersView.vue";
import RegisterT from "@/views/RegisterT.vue";

const routes = [{
    path: "/",
    name: "SelectPortalView",
    component: SelectPortalView,
},
    {
        path: "/register",
        name: "RegisterT",
        component: RegisterT,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
    {
        path: "/em_login",
        name: "em_login",
        component: LoginView,
    },
    {
        path: "/login_otp",
        name: "login_otp",
        component: LoginOtp,
    },
    {
        path: "/dashboard",
        name: "DashboardView",
        component: DashboardView,
    },

    {
        path: "/forgot-password",
        name: "ForgotPasswordView",
        component: ForgotPasswordView,
    },
    {
        path: "/reset/:code",
        name: "ResetPasswordView",
        component: ResetPasswordView,
    },

    {
        path: "/reg-info",
        name: "RegistrationInfoPage",
        component: RegistrationInfoPage,
    },


    

    {
        path: "/activation/:code",
        name: "ActivationView",
        component: ActivationView,
    },

    
   
    {
        path: "/providers",
        name: "ProvidersView",
        component: ProvidersView,
    },
    {
        path: "/support-members",
        name: "SupportMembersView",
        component: SupportMembersView,
    },
    {
        path: "/dependants",
        name: "DependantsView",
        component: DependantsView,
    },
    {
        path: "/users",
        name: "AllUsersView",
        component: AllUsersView,
    },
    {
        path: "/link-users-to-providers",
        name: "LinkUsersToProvidersView",
        component: LinkUsersToProvidersView,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;