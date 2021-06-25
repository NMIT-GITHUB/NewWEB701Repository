<template>
    <div class="carousel">
        <MDBCarousel
            v-model="carousel1"
            :items="items1"
            :class="carousel"
            fade
            navColor="secondary"
        />
    </div>
</template>

<script>
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";

export default { 
    components: {
        MDBCarousel
    },
    setup() {
      const items1 = [
        {
          src: "/resized/simon-rae-jJYlr6H1ClM-unsplash-scaled.jpg",
          alt: "Our Motto",
          label: "Our Motto",
          caption: "Helping families with necessities to help children thrive and reach their potential",
        },
        {
          src: "/resized/HFN-Packs.jpeg",
          alt: "Our work",
          label: "Our work",
          caption: "We facilitate donations from the community and the distribution of donated items to anyone who needs it"
        },
        {
          src: "/resized/cropped-HFN-Fundraiser.jpeg",
          alt: "...",
          label: "Good in the Hood",
          caption:
            "Thank you to everyone who voted for us and to Z Energy for their funding of this award"
        }
      ];
      const carousel1 = ref(0);

      return {
        items1,
        carousel1
      };
    }
  };
</script>
<style scoped>
</style>