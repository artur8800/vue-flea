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
        await firebase
          .storage()
          .ref()
          .child(`/${uid}/user_img/profile/${photo.name}`)
          .put(photo);
        const imgSrc = await firebase
          .storage()
          .ref()
          .child(`/${uid}/user_img/profile/${photo.name}`)
          .getDownloadURL();
        commit("setImage", imgSrc);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      console.log(user);
      return user ? user.uid : null;
    },
    async fetchUserInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");
        const userData = (await firebase
          .database()
          .ref(`users/${uid}/user_info`)
          .once("value")).val();
        commit("setUserData", userData);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async fetchImage({ dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");

        const userImage = await firebase
          .storage()
          .ref()
          .child(`/${uid}/user_img/profile/`);

        console.log(userImage);
      } catch (e) {
        throw e;
      }
    }
  }
};
