import firebase from "firebase/app";
import "firebase/storage";

export default {
  async fetchUserInfo({ dispatch, commit }) {
    try {
      const uid = await dispatch("getUid");
      const userName = await firebase.database().ref(`users/${uid}/user_info`);
      console.log(userName.name);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
};
