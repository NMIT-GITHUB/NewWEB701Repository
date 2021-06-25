<template>
  <div v-if="loggedIn" class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}'s</strong> Profile
      </h3>
    </header>
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
    <p>
      <strong>User Type:</strong>
      {{currentUser.userType}}
    </p>
    <div v-if="charity">
      <p>
      <strong>Number of items donated:</strong>
      {{currentUser.items.length}}
    </p>
      <p>
      <strong>Number of tokens available for voting:</strong>
      {{currentUser.tokens}}
    </p>
      <strong>List of donated Objects:</strong>
      <ul>
        <li v-for="item in currentUser.items" :key="item">{{item}}</li>
      </ul>
    </div>
    <div v-if="!charity">
      <strong>Number of people that have voted for you! </strong>
      {{currentUser.tokens}}
    </div>
    <br>
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
    itemList() {
      return JSON.stringify(this.currentUser.items[0]);
    },
    charity() {
      if (this.$store.state.auth.user)
      {
        if (this.$store.state.auth.user.userType == "Charity")
        {
          return true;
        }
        else{
          return false;
        }
      }
      else{
        return false;
      }
    }
  },
  mounted() {
    //if user isnt logged in, push to login view
    if (!this.currentUser) {
      this.$router.push('/login');
    }
    
  },
};
</script>