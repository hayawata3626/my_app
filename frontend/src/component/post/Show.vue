<template>
  <div class='postShow'>
    <h1 class="post_title">{{post.title}}</h1>
    <vue-markdown :source="post.content" :emoji="true" :html="true" :typographer="true"></vue-markdown>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import VueMarkdown from 'vue-markdown';

@Component({
  components: {
    "vue-markdown": VueMarkdown,
  }
})

export default class Show extends Vue {
  @Prop()
  public post: any;

  public source: any = "";
}
</script>

<style>
/* .language-javascript {
  background: #3F3F3F;
  color:#fff;
  padding: 10px;
} */

.postShow .post_title {
  border-bottom: 1px solid gray;
}

.post {
  border:none;
}
</style>

