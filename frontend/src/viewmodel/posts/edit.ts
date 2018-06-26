import { Vue, Component } from 'vue-property-decorator';
import Edit from "../../component/post/Edit.vue";

@Component({
  components: {
    "edit-component": Edit
  }
})
export default class PostEdit extends Vue {

}

(<any>window).PostEdit = PostEdit;