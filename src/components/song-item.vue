<template>
  <div class="song-container">
    <div class="upvote-container">
    <span class="upvotes-counter">{{score}}</span>
      <button class="upvote-button" v-on:click="triggerUpvote">+1</button>
    </div>
    <div class="song-title">{{title}}</div>
    <div class="byline">Suggested by {{suggester}}</div>
  </div>
</template>

<script>
export default {
  name: 'song-item',
  props: {
    score: Number,
    title: String,
    suggester: String,
  },
  methods: {
    triggerUpvote() {
      this.$emit('trigger-upvote');
    },
  },
};
</script>

<style lang="scss" scoped>
// TODO: Finish styles

.song-container {
  width: 100%;
  height: 72px;
}
.upvote-container {

}

.upvotes-counter {

}

.upvote-button {

}

.song-title {

}

.byline {

}
</style>
