import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

//assetsUtils
import assetsUtils from './assets/assetsUtils.js'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Validate
import {setupValidate} from './assets/setupValidate.js'

//Datepicker
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

//loading
import loading from "@/components/loading/index.vue";

//modal
import modal from "@/components/modal/index.vue";

//modalAlert
import modalAlert from "@/components/modalAlert/index.vue";


//table
import table from "@/components/table/index.vue";

//pagination
import pagination from "@/components/table/pagination.vue";

//input
import input from "@/components/input/index.vue";

//inputTags
import inputTags from "@/components/inputTags/index.vue";

//select
import select from "@/components/select/index.vue";

//autoComplete
import autoComplete from "@/components/autoComplete/index.vue";

//textArea
import textArea from "@/components/textArea/index.vue";

//checkbox
import checkbox from "@/components/checkbox/index.vue";

//radio
import radio from "@/components/radio/index.vue";

//date
import date from "@/components/date/index.vue";

//dateRange
import dateRange from "@/components/date/dateRange.vue";

//time
import time from "@/components/time/index.vue";

//toggleSwitch
import toggleSwitch from "@/components/toggleSwitch/index.vue";

//sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

const baseURL = import.meta.env.VITE_BASE_URL_BACKEND;

//routes
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';
const router = createRouter({
  history: createWebHistory(),
  routes: routes.routes
});
router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const checkLogin = !(localStorage.getItem('login') == 'true')
  if (authRequired && checkLogin) {
      return '/login';
  }
});
const app = createApp(App)

axios.defaults.baseURL = baseURL;

setupValidate(app) // Validate
app.config.globalProperties.assetsUtils = assetsUtils //assetsUtils
app.config.globalProperties.backendport = baseURL //backendport
app.component('Datepicker', Datepicker); //Datepicker
app.component('cpnLoading', loading); //loading
app.component('cpnModal', modal); //modal
app.component('cpnModalAlert', modalAlert); //modal
app.component('cpnTable', table); //table
app.component('cpnPagination', pagination); //pagination
app.component('cpnInput', input); //input
app.component('cpnInputTags', inputTags); //inputTags
app.component('cpnSelect', select); //select
app.component('cpnAutoComplete', autoComplete); //autoComplete
app.component('cpnTextArea', textArea); //textArea
app.component('cpnCheckbox', checkbox); //checkbox
app.component('cpnRadio', radio); //radio
app.component('cpnDatepicker', date); //date
app.component('cpnDatepickerRange', dateRange); //dateRange
app.component('cpnTime', time); //time
app.component('cpnToggleSwitch', toggleSwitch); //toggleSwitch


app.use(VueAxios, axios) //axios
app.use(router) //router
app.use(VueSweetalert2); //VueSweetalert2

app.mount('#app')