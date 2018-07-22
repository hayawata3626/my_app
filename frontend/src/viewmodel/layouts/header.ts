import { Vue, Component } from 'vue-property-decorator';
import HeaderNav from "../../component/layouts/Header.vue";

@Component({
  components: {
    "header-component": HeaderNav
  }
})
export default class Header extends Vue {

}

(<any>window).Header = Header;