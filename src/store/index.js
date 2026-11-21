import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
  },
  getters: {
    allPosts(state){
      return state.posts
    }
  },
  mutations: {
    setPosts(state, posts){
      state.posts = posts.map(post => ({
        ...post,
        likes:post.likes || 0
      }))
    },
    incrementLikes(state, index) {
    if (state.posts[index]) {
      state.posts[index].likes += 1;
      }
    },
    resetLikes(state) {
    state.posts = state.posts.map(post => ({
      ...post,
      likes: 0
    }));
    }
  },
  actions: {
    async fetchPosts( {commit} ){
      try{
        let response = await fetch('/Posts.json');
        let data = await response.json();
        commit('setPosts', data);

      }
      catch (error){
        console.log("Error", error);
      }
    },
    async resetLikes( {commit} ){
      commit('resetLikes');
    }
  }
})
