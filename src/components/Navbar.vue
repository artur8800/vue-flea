<template>
  <nav class="deep-purple darken-4">
    <div class="nav-wrapper">
      <a id="sideTrigger" href="#" data-target="slide-out" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>

      <div class="nav-user valign-wrapper right">
        <span class="user_name white-text">Username</span>

        <img src="img/technik.jpg" alt class="user_photo circle" />
        <!-- notice the "circle" class -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>