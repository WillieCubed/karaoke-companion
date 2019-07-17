<template>
  <main class="container">
    <song-list :songs="songs" v-on:trigger-upvote="upvoteSong"></song-list>
    <div class="dialog-container">
      <song-suggest-dialog v-on:suggest-song="onSuggestSong"></song-suggest-dialog>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import SongList from '../components/song-list.vue';
import SongSuggestDialog from '../components/song-suggest-dialog.vue';

export default {
  name: 'home',
  components: {
    'song-list': SongList,
    'song-suggest-dialog': SongSuggestDialog
  },
  data() {
    return {
      suggestedSong: '',
    };
  },
  computed: {
    ...mapGetters({
      songs: 'allSongs',
    }),
  },
  methods: {
    onSuggestSong({ suggestion }) {
      if (suggestion === '') {
        // Don't do anything.
        return;
      }
      console.log(suggestion);
      this.$store.dispatch('addSong', {
        suggestion,
      });
    },
    upvoteSong(songId) {},
    startObserving() {}
  },
  created() {
    this.startObserving();
  }
};
</script>

<style lang="scss" scoped>
main {
  padding: 16px;
}

.dialog-container {
  justify-content: center;
  display: flex;
}
</style>
