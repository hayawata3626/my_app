import { Vue, Component } from 'vue-property-decorator';
import SearchForm from "../../component/SearchForm.vue";

@Component({
  components: {
    "searchform-component": SearchForm
  }
})
export default class Header extends Vue {

}

(<any>window).Header = Header;