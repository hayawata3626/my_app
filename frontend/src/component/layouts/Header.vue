<template>
<div class="header_menu">
  <template v-if="!isSignIn">
    <div class="header_menu_inner">
      <ul class="login_menu">
        <li><a href='posts/new'>新規登録</a></li>
        <li><a href=''>投稿一覧</a></li>
        <li><a href='managers/sign_out'>ログアウト</a></li>
      </ul>
    </div>
    <form action="/" accept-charset="UTF-8" method="get" class="searchForm">
      <input name="utf8" type="hidden" value="✓">
      <div class="searchForm_content">
        <input type="text" name="search" id="search">
        <input type="submit" name="commit" value="Search" data-disable-with="Search">
        <i class="fas fa-search searchIcon"></i>
      </div>
    </form>
  </template>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() public isSignIn: boolean;
}
</script>

<style>

</style>

