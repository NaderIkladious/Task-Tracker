import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyD5jGI3uCWIE_VrUucAXD7YowxHTQsHT70',
  authDomain: 'coformatique-timer.firebaseapp.com/',
  databaseURL: 'https://coformatique-timer.firebaseio.com/',
  projectId: 'coformatique-timer',
  storageBucket: 'coformatique-timer.appspot.com',
  messagingSenderId: '780592844332'
};
const Fire = firebase.initializeApp(config);
export default Fire;