import firebase from "firebase/app";
import "firebase/storage";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("sendin");
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async register({ dispatch, commit }, { name, email, password, photo }) {
      const timestamp = Number(new Date());

      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        await firebase.database().ref(`/users/${uid}/user_info`).set({
          name,
          email
        });
        firebase
          .storage()
          .ref()
          .child(`/users/${uid}/user_info/${photo.name}`)
          .put(photo);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      console.log(user);
      return user ? user.uid : null;
    }
  }
};
