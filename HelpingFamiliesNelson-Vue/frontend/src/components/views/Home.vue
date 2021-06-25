<template>
  <div class="container">
    <br>
    <carousel-section />
    <br>
    <hr>
    <br>
    <donate-panel-section />
    <br>
    <hr>
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
