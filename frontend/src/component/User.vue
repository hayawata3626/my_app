<template>
  <div class='user'>
    <div class='user_info'>
      <div class='user_name'>{{user.name}}</div>
      <div class='user_email'>{{user.email}}</div>
    </div>
    <p class="user_img">
      <img :src="'/images/user_images/'+user.image_name" alt=''>
    </p>
    <a :href="/users/+user.id">詳細</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

// class UserModel {
//   created_at: string = null;
//   email: string = null;
//   id: number = null;
//   image_name: string = null;
//   name: string = null;
//   password_digest = null;
//   updated_at: string = null;
// }


@Component
export default class User extends Vue {
  @Prop()
    public user;
}
</script>

<style scoped>
  .user .user_img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    border:2px solid #3232;
  }
</style>
