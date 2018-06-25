<template>
  <div class="loginform">
    <div class='container'>
      <h1 class="pageTitle">ログイン</h1>
      <form action='/login' method="post">
        <input
          type='text'
          name="email"
          :value="email"
          class="mailField"
          placeholder="Sign in"
          >
        <input
          type='password'
          name="password"
          :value="password"
          class="passowordField"
          placeholder="Password">
        <input
          type='submit'
          value='Login'
          class="submitBtn">
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


<style scoped>
.pageTitle {
  border-bottom: 2px solid #3232;
  font-weight: 300;
}

.mailField, .passowordField {
  border: none;
  background: #3232;
  border-left: 5px solid lightskyblue;
  padding: 14px 10px;
  width: 100%;
  font-size: 15px;
}

.passowordField {
  margin-top: 20px;
}

.submitBtn {
  border: none;
  padding: 15px;
  width: 130px;
  background: beige;
  font-size: 16px;
  margin-top: 30px;
  border-radius: 5px;
  border-bottom: 5px solid lightskyblue;
  cursor: pointer;
}
</style>
