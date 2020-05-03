<template>
  <nav class="deep-purple darken-4">
    <div class="nav-wrapper">
      <a id="sideTrigger" href="#" data-target="slide-out" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>

      <div class="nav-user valign-wrapper right">
        <span class="user_name white-text">{{name}}</span>

        <img :src="this.photo" class="user_photo circle" />

        <a href="#" class="white-text" @click.prevent="logout">
          <i class="material-icons">assignment_return</i>
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
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    }
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