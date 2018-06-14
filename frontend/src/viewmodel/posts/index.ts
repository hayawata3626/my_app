import { Vue, Component } from "vue-property-decorator";
import axios from 'axios';
import Post from '../../component/Post.vue';

@Component({
  components: {
    "post-component": Post
  },
})

class Posts extends Vue {
  public posts = [];

  mounted() {
    axios.defaults.baseURL = 'http://localhost:3000/posts/';
    axios.get(axios.defaults.baseURL)
      .then((response) => {
        this.posts = response.data
      })
  }
}

new Posts({
  el: "#vuePosts"
})
