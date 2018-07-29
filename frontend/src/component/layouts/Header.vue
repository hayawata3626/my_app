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
.header {
  width: 100%;
  top: 0;
  padding: 10px 0;
  background: #323232;
}
.header_menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_menu_inner {
  display: flex;
  align-items: center;
}
.user_info {
  display: flex;
  align-items: center;
}
.login_menu {
  display: flex;
  justify-content: space-between;
}

.login_menu > li {
  padding: 0 7px
}

.login_menu > li > a {
  text-decoration: none;
  color: #fff;
  font-weight: lighter;
  font-size: 14px;
}
.user_img {
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  background: #fff;
}

.user_img > img {
  width: 100%;
}

.searchForm_content {
  position: relative;
}
.searchForm_content input[type="text"] {
  padding: 10px;
  border-radius: 15px;
  border: none;
  padding-left: 40px;
  font-weight: lighter;
  font-size: 12px;
}
.searchForm_content input[type="submit"] {
   visibility: hidden;
}

.searchIcon {
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
 }
</style>

