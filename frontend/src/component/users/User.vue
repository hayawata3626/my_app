<template>
  <div class='user'>
    <div class='user_name'>{{user.name}}</div>
    <div class='user_email'>{{user.email}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import UserData from "../../data/user";


export default class User extends Vue {
  @Prop()
  public user: UserData;
}

</script>

<style>

</style>

