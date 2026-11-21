<template>
  <main class="indexLayout">
    <aside class="sidebarLeft"></aside>

    <section class="feed">
      <Post
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
        :index="index"
      />
      <button class="Reset-Likes" @click="resetLikes">Reset Likes</button>
    </section>

    <aside class="sidebarRight"></aside>
  </main>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
  name: 'HomeView',
  components: {
    Post
  },
  computed: {
    posts() {
      return this.$store.getters.allPosts;
    }
  },
  methods:{
    resetLikes(){
      this.$store.dispatch('resetLikes');
    }
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
  }
};
</script>