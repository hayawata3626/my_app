import { Vue, Component } from 'vue-property-decorator';
import Show from '../../component/post/Show.vue';

@Component({
  components: {
    "show-component": Show
  }
})
export default class PostShow extends Vue {

}

(<any>window).PostShow = PostShow;

