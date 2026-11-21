<template>
  <article class="post">
    <header class="postHeader">
      <img :src="post.authorAvatar" alt="User" class="userIcon" />
      <time :datetime="post.Date" class="post-date">{{ post.Date }}</time>
    </header>

    <div v-if="post.ImagePath" class="post-media">
      <img :src="post.ImagePath" alt="Post image" class="post-image" />
    </div>

    <div class="post-body">
      <p class="post-text">{{ post.Text }}</p>
    </div>

    <footer class="post-footer">
      <button
        type="button"
        class="like-btn"
        aria-label="Like post"
        @click="likePost"
      >
        <img src="res/images/Facebook_like_thumb.png" alt="Like icon" />
      </button>
      <span class="likes-count">{{ post.likes }}</span>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    likePost() {
      this.$store.commit('incrementLikes', this.index);
    }
  }
};
</script>