<template>
  <div class='post'>
    <div class='post_title'>{{post.title}}</div>
    <div class='post_content'>{{post.content}}</div>
    <p><a :href="'/posts/' + post.id">詳細</a></p>
    <p><a :href="'posts/' + post.id+ 'edit'">編集</a></p>
    <p><a :href="'posts/' + post.id + 'destroy'">削除</a></p>
    <p>ユーザー名：{}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Post extends Vue {
  @Prop()
    public post;
}
</script>

<style scoped>
</style>
