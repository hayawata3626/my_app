import { Vue, Component } from 'vue-property-decorator';
import VueMarkdown from 'vue-markdown';
import New from "../../component/post/new.vue";

@Component({
  components: {
    "new-component": New
  }
})
export default class PostNew extends Vue {

}

(<any>window).PostNew = PostNew;