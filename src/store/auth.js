import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import db from "../main";
import firebaseUtil from "../utils/firebase.util";

export default {
  actions: {
    async login({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("sendin");
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async register({ dispatch, commit }, { name, email, password, photo }) {
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
        await db.collection(`/${uid}/user/info`).add({
          name,
          email,
          url: photo.name,
          dowloadUrl: await firebaseUtil.childImageRef(firebase, uid, photo)
        });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    // async fetchUserInfo({ dispatch, commit }) {
    //   try {
    //     const uid = await dispatch("getUid");
    //     const userData = (await firebase
    //       .database()
    //       .ref(`users/${uid}/user_info`)
    //       .once("value")).val();
    //     commit("setUserData", userData);
    //   } catch (e) {
    //     console.log(e);
    //     throw e;
    //   }
    // },
    async fetchImage({ dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");
        console.log();
        let storageRef = await firebaseUtil.profileImageRef(firebase, uid);
        let refList = await storageRef.listAll();
        let fullpath = refList.items[0].getDownloadURL();
        commit("setImage", fullpath);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async fetchFromCloud({ dispatch, commit }) {
      const uid = await dispatch("getUid");
      await db.collection(`${uid}/user/info`).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          commit("setUserData", `${doc.data().name}`);
        });
      });
    }
  }
};
