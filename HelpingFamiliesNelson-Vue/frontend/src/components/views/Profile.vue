<template>
  <div v-if="loggedIn" class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}'s</strong> Profile
      </h3>
    </header>
    <!-- <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p> -->
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <p>
      <strong>Phone Number:</strong>
      {{currentUser.phone}}
    </p>
    <p>
      <strong>Address:</strong>
      {{currentUser.address}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul>
    <p>
      <strong>Number of items donated:</strong>
      {{currentUser.items.length}}
    </p>
    <p>
      <strong>Number of tokens available:</strong>
      {{currentUser.tokens}}
    </p>
    <strong>List of donated ObjectId's:</strong>
    <ul>
      <li v-for="item in currentUser.items" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    //returns current user data
    currentUser() {
      return this.$store.state.auth.user;
    },
    //returns item array
    test() {
      return this.$store.state.auth.user.items
    },
    // returns login status
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    //if user isnt logged in, push to login view
    if (!this.currentUser) {
      this.$router.push('/login');
    }
    // else {
    //   this.message = "";
    //   this.gotItems = false;

    //   this.$store.dispatch("auth/getItems", this.currentUser).then(
    //     (data) => {
    //       this.message = data.message;
    //       console.log(data);
    //       this.successful = true;
    //       this.loading = false;
    //     },
    //     (error) => {
    //       this.message =
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString();
    //       this.successful = false;
    //       this.loading = false;
    //     }
    //   );
    // }

  },
};
</script>