<template>
  <div class='user'>
    <div class='user_nam'>{{user.name}}</div>
    <div class='user_email'>{{user.email}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

export default class User extends Vue {
  @Prop()
  public user: any;
}

</script>

<style>

</style>

