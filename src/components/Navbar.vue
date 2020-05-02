<template>
  <nav class="deep-purple darken-4">
    <div class="nav-wrapper">
      <a id="sideTrigger" href="#" data-target="slide-out" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>

      <div class="nav-user valign-wrapper right">
        <span class="user_name white-text">{{name}}</span>

        <img :src="this.photo" alt class="user_photo circle" />

        <a href="#" class="black-text" @click.prevent="logout">
          <i class="material-icons">assignment_return</i>Выйти
        </a>
        <!-- notice the "circle" class -->
      </div>
    </div>
  </nav>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  data: () => ({
    name: "",
    photo: null
  }),
  computed: {
    ...mapGetters(["userData", "userImage"])
  },
  async mounted() {
    await this.$store.dispatch("fetchImage");
    await this.$store.dispatch("fetchFromCloud");
    this.name = await this.userData;
    this.photo = await this.userImage;
  }
};
</script>

<style>
</style>  