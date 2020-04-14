<template>
  <div class="main-layout">
    <header>
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
      <ul id="slide-out" class="sidenav">
        <li>
          <div class="user-view">
            <div class="background"></div>
          </div>
        </li>
        <li>
          <a href="#!">
            <i class="material-icons">cloud</i>First Link With Icon
          </a>
        </li>
        <li>
          <a href="#!">Second Link</a>
        </li>
        <li>
          <div class="divider"></div>
        </li>
        <li>
          <a class="subheader">Subheader</a>
        </li>
        <li>
          <a class="waves-effect" href="#!">Third Link With Waves</a>
        </li>
      </ul>
    </header>

    <main class="main-app">
      <h4 class="center-align">Welcone to dashboard User User</h4>

      <router-view />
    </main>

    <footer class="page-footer deep-purple darken-4">
      <div class="footer-copyright">
        <div class="container">
          © 2014 Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  </div>
</template>