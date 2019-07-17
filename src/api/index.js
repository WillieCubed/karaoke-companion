import firebase from 'firebase';
import initFirebase from '../firebase-init';

initFirebase();
const db = firebase.database();

const songsRef = db.ref('/songs');

function isUrl(input) {
  // Thanks https://stackoverflow.com/a/5717133/5742625
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
    + '(\\#[-a-z\\d_]*)?$',
    'i', // fragment locator
  );
  return !!pattern.test(input);
}

function generateSongId(title) {
  // TODO: Return a hash of the song's lowercase title
}

function fetchSongUrl(title) {

}

/**
 * 
 * @param {string} url A YouTube URL
 */
function fetchSongTitle(url) {
  return 'Nope.'
}

/**
 * 
 * @param {string} id An interal ID for this song
 */
async function observeSongs(id) {
  songsRef.on('value', (snap) => {

  });
}


function upvoteSong(songId, user) {
  songsRef.child(`/${songId}`)
    .transaction((update) => {
      // If user has already upvoted the song, don't allow it
    });
}


/**
 * 
 * @param {string} title
 * @returns {object} A payload containing song data.
 */
async function fetchSongData(title) {
  const snapshot = await songsRef.once('value');
  const data = snapshot.val();
  return new Promise((resolve) => {

  });
}

async function addSong(suggestion, sessionId, suggester) {
  if (isUrl(suggestion)) {
    const url = suggestion;
    const title = fetchSongTitle(url);
    const payload = {
      title,
      url,
      suggester,
    };
    const newRef = songsRef.push();
    try {
      await newRef.set(payload);
    } catch (error) {
      console.error(error);
      // TODO: Use custom errors? (Okay, now we're pushing it.)
      throw Error('Firebase error');
    }
  } else {
    // TODO: Lookup actual URL
  }
  throw Error('Could not add song.');
}

async function removeSong(songId, sessionId, user) {
  try {
    await songsRef.child(`/${songId}`).remove();
  } catch (error) {
    console.log(error);
  }
}

export default {
  addSong,
  removeSong,
  observeSongs,
};
