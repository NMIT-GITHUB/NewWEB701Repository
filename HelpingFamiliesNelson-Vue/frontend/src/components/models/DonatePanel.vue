<template>
<div>
    <div class="card">
        <img src="https://www.performancehealth.com/media/amasty/blog/how-to-teach-your-child-with-special-needs-to-dress-independently.jpg" alt="Photo of a child with new clothes">
        <div class="card-img-overlay middle opaque">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <h5  class="header"><strong>Donate</strong></h5>
            <p class="card-text"> We here at Helping Families Nelson are heavily reliant on your support through donating any unwanted clothing you may have. If you have some clothes that you don't fit or simply do not wear, we would love it if you were able to bring it in so that we can give it to someone who really needs it!</p>
        </div>
    </div>
    <router-link class="nav-link btn btn-danger middle" to="/donate" role="button">Donate Now</router-link>
</div>
</template>
<script>
export default ({
    setup() {
        
    },
})
</script>
<style scoped>
.donation-panel {
    margin: auto;
    width: 100%;
    background: red;
    overflow: hidden;
  }
  
  .header {
      opacity: 1;
      font-size: 50px;
  }
p {
    font-size: 30px;
}
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 80%;
  }
    .card-text {
        opacity: 1;
    }
  .middle {
    text-align: center;
    margin: auto;
    width: 100%;
  }

  .opaque {
    background: rgba(179, 32, 32, 0.82);
    opacity: 0.8;
    color: white;
    overflow: hidden;
    height: 100%;
    z-index: 2;
  }

  .button {
    background-color: #ffffff;
    border: none;
    color: rgb(61, 58, 58);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    position: absolute;
    margin: auto;
  }

  .button:hover {
    background-color: #4CAF50; /* Green */
    color: rgb(73, 73, 73);
  }

  img {
    object-fit: cover;
    opacity: 0.6;
  }

</style>