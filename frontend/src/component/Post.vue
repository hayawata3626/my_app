<template>
  <div class='post'>
    <div class='post_userWrapper'>
      <ul class="post_userInfo">
        <!-- <li class="post_userInfo_name">ほげほげ</li> -->
        <li class="post_userInfo_date">{{date}}</li>
      </ul>
    </div>
    <div>
      <p class="post_thumbnail"><img :src="'/images/' + post.image_name" alt=''></p>
      <p class="post_userImage"><img src='/images/user_images/22.jpg' alt=''></p>
    </div>
    <a :href="'posts/' + post.id" class="postDetail_link">
      <div class='post_title'>{{post.title}}</div>
    </a>
    <div class='tag_area'>
      <template v-if="post.tags.length" v-for="(tag, index) in post.tags">
        <span :key="index" class="tag">{{tag.name}}</span>
      </template>
    </div>
    <template v-if="isSignIn">
      <div class='post_operate'>
        <p class="post_operate_detail">
          <a :href="'/posts/' + post.id">
            <i class="fas fa-info-circle"></i>
          </a>
        </p>
        <p class="post_operate_edit">
          <a :href="'posts/' + post.id+ '/edit'">
            <i class="fas fa-pencil-alt f303"></i>
          </a>
        </p>
        <p class="post_operate_delete">
          <a @click="deletePost">
            <i class="far fa-trash-alt"></i>
          </a>
        </p>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import * as moment from "moment";
import axios from "axios";

@Component
export default class Post extends Vue {
  @Prop() public post;

  @Prop() public users;

  @Prop() public isSignIn: boolean;

  private date: string = null;

  created() {
    this.shapeDateFormat(this.post.created_at);
  }

  private deletePost() {
    axios.defaults.headers["X-CSRF-TOKEN"] = document.getElementsByTagName(
      "meta"
    )[1].content;
    // const url = `posts/${this.post.id}/destroy`;
    axios
      .post(`posts/${this.post.id}/destroy`, {
        id: this.post.id
      })
      .then(function(response) {
        // window.location.href=`posts/${this.post.id}/destroy`;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  private shapeDateFormat(postDate) {
    const nonformatDate = moment(postDate);
    this.date = nonformatDate.format("YYYY/MM/DD HH:mm");
  }
}
</script>

<style scoped>
.post_userWrapper {
  display: flex;
}

.postDetail_link {
  text-decoration: none;
  color: #000;
}

.post {
  font-weight: lighter;
  width: 48%;
}

.post_title {
  font-weight: bolder;
  font-size: 22px;
}
.post_userInfo {
}

.post_userInfo_name {
  font-weight: bold;
  font-size: 14px;
}

.post_userInfo_date {
  font-size: 13px;
}

.post_thumbnail {
  max-height: 100px;
  overflow: hidden;
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.post_userImage {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 3px solid #fff;
  overflow: hidden;
  position: relative;
  top: -20px;
}

.post_operate {
  display: flex;
}

.post_operate a {
  font-size: 18px;
  color: #249f80;
}

.post_operate_edit {
  margin: 0 10px;
}

.post_content {
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tag {
  background: #4ab3f4;
  color: #fff;
  border-radius: 16px;
  padding: 6px 15px;
  display: inline-block;
  font-size: 10px;
  margin: 10px 0 10px 5px;
}

span.tag:first-child {
  margin-left: 0;
}
</style>
