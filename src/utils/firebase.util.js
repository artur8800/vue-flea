module.exports = {
  userInfoPath: "/user_img/profile/",
  profileImageRef: async function(service, uid) {
    return service.storage().ref(`/${uid}/${this.userInfoPath}`);
  },
  childImageRef: async function(service, uid, photo) {
    return await service
      .storage()
      .ref()
      .child(`/${uid}/${this.userInfoPath}/${photo.name}`)
      .getDownloadURL();
  }
};
