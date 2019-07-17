import Vue from 'vue';
import Vuex from 'vuex';
import api from './api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sessionId: '',
    // All songs suggested in a given session
    sessionSongs: [],
    // The currently signed in user ID
    userId: '',
  },
  getters: {
    allSongs: state => state.sessionSongs,
    playedSongs: state => state.sessionSongs.filter(song => song.state === 'played'),
    skippedSongs: state => state.sessionSongs.filter(song => song.state === 'skipped'),
    isAdmin: (state) => {
      const id = state.userId;
      // TODO: Actually check with backend
      return id === 'hahahnope';
    },
  },
  mutations: {
    addSong(state, song) {
      state.sessionSongs.push(song);
      console.log('done.');
      console.log(state.sessionSongs);
    },
    removeSong(state, songId) {
      state.sessionSongs.map(song => song.id)
        .forEach((id, index) => {
          if (id === songId) {
            return state.sessionSongs.splice(index, 1);
          }
          return null;
        });
    },
    startUpvote(state, songId) {
      state.sessionSongs.forEach((song, index) => {
        if (song.id === songId) {
          state.sessionSongs[index].upvotes += 1;
        }
      });
    },
    joinSession(store, session) {
      // TODO: Check if user is signed in
    },
  },
  actions: {
    async upvote({ commit, state }, songId) {
      try {
        await api.upvoteSong(songId, state.userId);
        const { sessionId } = state;
        commit('startUpvote', {
          songId,
          sessionId,
        });
      } catch (error) {
        console.error(error);
      }
    },
    /**
     * Add a song based on its title or URL
     */
    async addSong({ commit, state }, suggestion) {
      try {
        console.log(suggestion);
        if (state.sessionSongs.findIndex(sessionSong => sessionSong.id === suggestion) !== -1) {
          return;
        }
        await api.addSong(suggestion);
        commit('addSong', suggestion);
      } catch (error) {
        console.error(error);
      }
    },
    async removeSong({ commit, state }, songId) {
      try {
        await api.removeSong(songId, state.sessionId, state.userId);
        commit('removeSong', songId);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
