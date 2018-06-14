import {Vue, Component} from "vue-property-decorator";
import axios from 'axios';
import User from '../../component/User.vue';


@Component({
  components: {
    "user-list": User
  },
})


class Users extends Vue {
  public users = [];

  mounted() {
    axios.defaults.baseURL = 'http://localhost:3000/users/';
    axios.get(axios.defaults.baseURL)
      .then((response) => {
        this.users = response.data
      });
  }
}

new Users({
  el: "#main"
})
