<template>
  <div class='wrapper'>
    <form action='/posts' method="post">
      <p class="postTitle">
        <input
          type='text'
          placeholder="タイトル"
          class="postTitleField"
          v-model="post.title"
          name="post[title]"
          >
      </p>
      <div class="markdownArea">
        <textarea
          class="markdownEditor"
          v-model="source"
          @input="insertText($event.target.value)"
          name="post[content]"
          ></textarea>
        <div class='vue-markdown-wrapper'>
          <vue-markdown :source="source"></vue-markdown>
        </div>
      </div>
      <button class="releaseBtn">公開する</button>
    </form>
   </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VueMarkdown from 'vue-markdown';
@Component({
  components: {
    "vue-markdown":VueMarkdown
  }
})
export default class New extends Vue {
  @Prop()
  public post: any;

  public source: any = "";

  public insertText(text: string) {
    this.post.content = text;
  }

}

</script>


<style scoped>
.wrapper {
  padding: 30px;
}

.postTitleField {
  width: 100%;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
}

.markdownArea {
  width: 100vw;
  justify-content: space-between;
  display: flex;
}

.vue-markdown-wrapper, .markdownEditor {
  width: 48vw;
  font-size: 16px;
  padding: 10px;
  min-height: 72vh;
}

.releaseBtn {
  background: darkseagreen;
  color: #fff;
  width: 130px;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 15px;
  font-family: "Meiryo";
}
</style>
