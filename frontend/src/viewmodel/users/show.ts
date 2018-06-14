import { Vue, Component, Prop } from 'vue-property-decorator';
import User from "../../component/users/User.vue";

@Component({
  components: {
    "user-profile-component": User
  }
})

class UserProfile extends Vue {

}

(<any>window).UserProfile = UserProfile;




