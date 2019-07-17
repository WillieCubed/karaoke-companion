<template>
  <div class="song-list-container">
    <div v-for="song in songs" :key="song.id">
      <song-item :song="song"></song-item>
    </div>
  </div>
</template>

<script>
import SongItem from './song-item.vue';

export default {
  name: 'song-list',
  components: {
    'song-item': SongItem,
  },
  props: {
    songs: Array,
  },
};
</script>

<style lang="scss" scoped>
.song-list-container {
  display: block;
  width: 100%;
  max-width: 368px;
}
</style>
