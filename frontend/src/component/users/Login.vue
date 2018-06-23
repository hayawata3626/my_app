<template>
  <div class="loginform">
    <div class='container'>
      <h1>ログイン</h1>
      <form action='/login' method="post">
        <p>メールアドレス</p>
        <input type='text' name="email" :value="email">
        <p>パスワード</p>
        <input type='password' name="password" :value="password">
        <input type='submit' value="ログイン">
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
export default class LoginForm extends Vue {
  @Prop()
  public email: string;

  @Prop()
  public password: string;
}
</script>
