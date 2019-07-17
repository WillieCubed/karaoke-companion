<template>
  <div class="song-suggest-dialog" :open="isVisible">
    <div class="title">Suggest a song</div>
    <input type="text" placeholder="Song title or URL" v-model="suggestion">
    <button class="song-submit-button" v-on:click="suggestSong" :disabled="!suggestionIsValid">Suggest song</button>
  </div>
</template>

<script>
export default {
  name: 'song-suggest-dialog',
  data() {
    return {
      isVisible: false,
      suggestion: '', // Either URL or title
    };
  },
  methods: {
    suggestSong() {
      const payload = {
        suggestion: this.suggestion
      };
      this.$emit('suggest-song', payload);
    },
  },
  computed: {
    suggestionIsValid() {
      return this.suggestion !== '';
    },
  },
};
</script>

<style lang="scss" scoped>
.song-suggest-dialog {
  padding: 8px;
  height: 240px;
  width: 320px;
}

.title {

}

.song-submit-button {

}
</style>
