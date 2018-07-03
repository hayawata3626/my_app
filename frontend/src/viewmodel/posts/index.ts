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
}

(<any>window).Posts = Posts;




