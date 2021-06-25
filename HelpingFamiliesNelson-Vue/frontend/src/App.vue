<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand">Helping Families Nelson</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <div class="p-2">
              <div class="text-center">
                <font-awesome-icon icon="home" />
              </div>
              <div class="text-center">
                <div>Home<br>Kaainga</div>
              </div>
            </div>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">
            <div class="p-2">
              <div class="text-center">
                <font-awesome-icon icon="question-circle" />
              </div>
              <div class="text-center">
                <div>About<br>Mō</div>
              </div>
            </div>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">
            <div class="p-2">
              <div class="text-center">
                <font-awesome-icon icon="phone" />
              </div>
              <div class="text-center">
                <div>Contact<br>Whakapaa</div>
              </div>
            </div>
          </router-link>
        </li>
         <li class="nav-item">
          <router-link to="/donate" class="nav-link">
            <div class="p-2">
              <div class="text-center">
                <font-awesome-icon icon="cloud-upload-alt" />
              </div>
              <div class="text-center">
                <div>Donate<br>Takoha</div>
              </div>
            </div>
          </router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
           <li class="nav-item">
              <div class="p-2">
                <div class="text-center">
                  <font-awesome-icon icon="user-plus" />
                </div>
                <div class="text-center">
                  <div>Sign Up<br>hainatanga</div>
                </div>
              </div>
            </li>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
          <div class="p-2">
                <div class="text-center">
                  <font-awesome-icon icon="sign-in-alt" />
                </div>
                <div class="text-center">
                  <div>Login<br>Takiuru</div>
                </div>
              </div>
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <div class="p-2">
              <div class="text-center">
                <font-awesome-icon icon="user" />
              </div>
              <div class="text-center">
                <div>{{ currentUser.username }} Profile<br>Kōtaha</div>
              </div>
            </div>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <div class="p-2">
              <div class="text-center">
                <font-awesome-icon icon="sign-out-alt" />
              </div>
              <div class="text-center">
                <div>LogOut<br>Putaara</div>
              </div>
            </div>
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>

      <footer-section />

  </div>
</template>

<script>

export default {
  mounted() {
    window.scrollTo(0,0);
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>