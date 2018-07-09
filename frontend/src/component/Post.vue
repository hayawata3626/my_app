<template>
  <div class='post'>
    <div class='post_userWrapper'>
      <p class="post_userImage"><img src='/images/user_images/default_user.png' alt=''></p>
      <ul class="post_userInfo">
        <li class="post_userInfo_name">ほげほげ</li>
        <li class="post_userInfo_date">{{date}}</li>
      </ul>
    </div>
    <a :href="'posts/' + post.id" class="postDetail_link">
      <div class='post_title'>{{post.title}}</div>
      <div class='post_content'>{{post.content}}</div>
    </a>
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
          <a :href="'posts/' + post.id + '/destroy'">
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

@Component
export default class Post extends Vue {
  @Prop() public post;

  @Prop() public users;

  @Prop() public isSignIn: boolean;

  private date: string = null;

  created() {
    this.shapeDateFormat(this.post.created_at);
  }

  public shapeDateFormat(postDate) {
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
}

.post_title {
  font-weight: bolder;
  font-size: 22px;
  margin-top: 10px;
}
.post_userInfo {
  margin-left: 10px;
}

.post_userInfo_name {
  font-weight: bold;
  font-size: 14px;
}

.post_userInfo_date {
  font-size: 13px;
}

.post_userImage {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #249f80;
  overflow: hidden;
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
</style>
