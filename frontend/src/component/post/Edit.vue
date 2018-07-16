<template>
  <div class='wrapper postEdit'>
    <form action='/posts' method="post" enctype="multipart/form-data">
     <input
      name="authenticity_token"
      type="hidden"
      :value="token">
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
        <div class='vue-markdown-wrapper' id="markdownPreview">
          <vue-markdown :source="source" :emoji="true" :html="true" :typographer="true"></vue-markdown>
        </div>
      </div>
      <p class="tag">
        <input
          type='text'
          class="tag_input"
          placeholder="タグを入力してください"
          name="tag_name"
          v-model="post.tags.name"
         >
       </p>
       <p><input type="file" name="post[image_name]"></p>
      <button class="releaseBtn">公開する</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import VueMarkdown from "vue-markdown";
import * as hljs from "highlight.js";

@Component({
  components: {
    "vue-markdown": VueMarkdown
  }
})
export default class Edit extends Vue {
  @Prop() public post: any;

  @Prop() public token: string;

  public source: any = this.post.content;

  public insertText(text: string) {
    this.post.content = text;
  }

  created() {
    hljs.initHighlightingOnLoad();
  }

  updated() {
    this.applyCodeHilight();
  }

  public applyCodeHilight() {
    const pres = document.getElementsByTagName("pre");
    this.getTagNames(pres);
  }

  public getTagNames(tags) {
    for (let i = 0; i < tags.length; i++) {
      hljs.highlightBlock(tags[i]);
    }
  }
}
</script>
<style>
.container {
  padding: 0;
}

.postEdit .markdownArea {
  width: 100%;
}

code {
  font-size: 90%;
  margin: 0 2px;
  padding: 0 5px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: rgba(131, 109, 109, 0.03);
  border-radius: 3px;
}

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
  height: 64vh;
}

.vue-markdown-wrapper,
.markdownEditor {
  width: 48vw;
  font-size: 16px;
  padding: 10px;
  overflow: scroll;
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

.vue-markdown-wrapper h1 {
  border-bottom: 1px solid gainsboro;
}

.tag {
  margin-top: 20px;
}

.tag_input {
  padding: 10px;
}
</style>
