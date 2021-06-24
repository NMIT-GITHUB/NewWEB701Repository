<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{ content }}</h3>
    </header>
    <carousel-section />
    <poll-section :key="reRenderKey"></poll-section>
  </div>
</template>

<script>
import UserService from "../../services/user.service";

export default {
  name: "Home",
  data() {
    return {
      content: "",
      reRenderKey: 0,
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
