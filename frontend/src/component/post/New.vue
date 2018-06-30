<template>
  <div class='wrapper'>
    <form action='/posts' method="post">
    <input name="authenticity_token" type="hidden" :value="authenticationToken">
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
          <vue-markdown :source="source" :emoji="true" :html="true" :typographer="true"></vue-markdown>
        </div>
      </div>
      <button class="releaseBtn">公開する</button>
    </form>
   </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VueMarkdown from "vue-markdown";
import * as hljs from "highlight.js";

@Component({
  components: {
    "vue-markdown": VueMarkdown
  }
})
export default class New extends Vue {
  @Prop() public post: any;

  @Prop() public authenticationToken: string;

  public source: any = "";

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

  public getTagNames(tags){
    for(let i = 0; i < tags.length; i++) {
      hljs.highlightBlock(tags[i]);
    }
  }
}
</script>


<style>
code {
  font-size: 90%;
  margin: 0 2px;
  padding: 0 5px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: rgba(131, 109, 109, 0.03);
  border-radius: 3px;
}

.wrapper {
  padding: 10px 30px;
}

.postTitleField {
  width: 100%;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
}

.markdownArea {
  width: 100%;
  justify-content: space-between;
  display: flex;
  height: 63vh;
}

.vue-markdown-wrapper,
.markdownEditor {
  width: 48%;
  font-size: 16px;
  padding: 10px;
  height: 100%;
  overflow:scroll;
}

.vue-markdown-wrapper, {
  padding: 0;
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

pre {
  margin: 0;
}

</style>
