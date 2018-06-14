<template>
  <div class='wrapper'>
    <p class="postTitle">
      <input type='text' placeholder="タイトル" class="postTitleField">
    </p>
    <div class="markdownArea">
      <textarea class="markdownEditor" v-model="source"></textarea>
      <div class='vue-markdown-wrapper'>
        <vue-markdown :source="source"></vue-markdown>
      </div>
    </div>
    <button class="releaseBtn">公開する</button>
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
  public source: any = "";

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
