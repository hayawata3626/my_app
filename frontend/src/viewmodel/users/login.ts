import {Vue, Component, Prop} from "vue-property-decorator";
import LoginForm  from "../../component/users/Login.vue";

@Component({
  components: {
    "login-component": LoginForm
  },
})

export default class Login extends Vue {
}

(<any>window).Login = Login;