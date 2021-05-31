<template>
    <div id="poll" class="container-fluid">
        <div class="text-center">
            <h2>Poll</h2>
            <h4>You can spend you tokens by voting for the next group we aim to support! <br> The group with the most votes is who we will aim to help out next!</h4>
        </div>
        <div class="row">
            <div class="col-sm-4 col-xs-12">
                <div class="d-flex panel panel-default text-center flex-column">
                    <div class="panel-heading">
                        <h1>First<br>Option</h1>
                    </div>
                    <div class="panel-body">
                        <br>
                        <p><strong>Oldies in Need</strong></p>
                        <p>
                            There are people in our community that have done their part and now it is our turn to help them! The pension isn't that much and some can find it hard to get new clothes!
                            <br>
                            In supporting this charity we support our elders.
                        </p>
                    </div>
                    <div class="panel-footer mt-auto">
                        <br>
                        <h3>1</h3>
                        <h4>Token</h4>
                        <button @Click="handleClick('First')" class="btn btn-lg">VOTE</button>
                    </div>
                </div>      
            </div>     
            <div class="col-sm-4 col-xs-12">
                <div class="d-flex panel panel-default text-center flex-column">
                    <div class="panel-heading">
                        <h1>Second<br>Option</h1>
                    </div>
                    <div class="panel-body">
                        <br>
                        <p><strong>Victory Square Familes</strong></p>
                        <p>Victory Square is a place that many people in Nelson call their home. It is also the only place some poeple can afford to live and this attracts many refugees and other financially struggling members of our community.</p>
                        <p>This charity helps support these people by hosting events and preparing food. Another avenue that we would like to support them in is donating clothes to these people as well!</p>
                    </div>
                    <div class="panel-footer mt-auto">
                        <br>
                        <h3>1</h3>
                        <h4>Token</h4>
                        <button @Click="handleClick('Second')" class="btn btn-lg">VOTE</button>
                    </div>
                </div>      
            </div>       
                <div class="col-sm-4 col-xs-12">
                    <div class="d-flex panel panel-default text-center flex-column">
                        <div class="panel-heading">
                            <h1>Third<br>Option</h1>
                        </div>
                        <div class="panel-body">
                            <br>
                            <p><strong>Tuakana Teina</strong><br>(Big Brother Big Sister)</p>
                            <p></p>
                            <p>These guys provide mentors for young tamariki (children) in need. Supporting them with clothes can help increase the effectiveness of their mission!</p>
                        </div>
                        <div class="panel-footer mt-auto">
                            <br>
                            <h3>1</h3>
                            <h4>Token</h4>
                            <button @Click="handleClick('Third')" class="btn btn-lg">VOTE</button>
                        </div>      
                    </div>   
                </div> 
                <div v-if="loggedIn" class="row" style="width: 100%;">
                    <div class= "d-flex justify-content-center" style="margin: 0 auto; margin-top: 50px;">
                        <br>
                        <h3 :key="reRenderKey"><strong>{{ currentUser.username }}'s Tokens:</strong> {{tokens}}</h3>
                    </div>
                </div> 
        </div>
    </div>
</template>

<script>
export default {
  name: "poll",
  data() {
    return {
      reRenderKey: 0,
      tokens: 0,
    }
  },
  computed: {
    // returns the current users data
    currentUser() {
      return this.$store.state.auth.user;
    },
    // returns whether a user is logged in
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    // function sends form data to store
    handleClick(value) {
      this.message = value;
      this.successful = false;
      
      //sends upload data to store at "auth/redeem"
      this.$store.dispatch("auth/redeem", this.currentUser).then(
        (data) => {
          this.message = data;
          this.tokens -= 1;
          console.log(data);
          this.successful = true;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
      //supposed to update the component. Doesn't really work...
      this.$forceUpdate();
      this.reRenderKey +=1;
      this.$forceUpdate();
    }
    
  },
  mounted() {
    // ensures tokens  matches current user
    if (this.currentUser) {
      this.tokens = this.currentUser.tokens;
      this.$forceUpdate();
    }
  },
}
</script>

<style scoped>
body {
    font: 400 15px Lato, sans-serif;
    line-height: 1.8;
    color: #818181;
  }
  h2 {
    font-size: 24px;
    text-transform: uppercase;
    color: #303030;
    font-weight: 600;
    margin-bottom: 30px;
  }
  h4 {
    font-size: 19px;
    line-height: 1.375em;
    color: #303030;
    font-weight: 400;
    margin-bottom: 30px;
  }  
  .jumbotron {
    background-color: #f4511e;
    color: #fff;
    padding: 100px 25px;
    font-family: Montserrat, sans-serif;
  }
  .container-fluid {
    padding: 60px 50px;
  }
  .bg-grey {
    background-color: #f6f6f6;
  }
  .logo-small {
    color: #f4511e;
    font-size: 50px;
  }
  .logo {
    color: #f4511e;
    font-size: 200px;
  }
  .thumbnail {
    padding: 0 0 15px 0;
    border: none;
    border-radius: 0;
  }
  .thumbnail img {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }
  .item h4 {
    font-size: 19px;
    line-height: 1.375em;
    font-weight: 400;
    font-style: italic;
    margin: 70px 0;
  }
  .item span {
    font-style: normal;
  }
  .panel {
    border: 1px solid #f4511e; 
    border-radius:0 !important;
    transition: box-shadow 0.5s;
    height: 100%;
  }
  .panel:hover {
    box-shadow: 5px 0px 40px rgba(0,0,0, .2);
  }
  .panel-footer .btn:hover {
    border: 1px solid #f4511e;
    background-color: #fff !important;
    color: #f4511e;
  }
  .panel-heading {
    color: #fff !important;
    background-color: #f4511e !important;
    padding: 25px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .panel-footer {
    background-color: white !important;
  }
  .panel-footer h3 {
    font-size: 32px;
  }
  .panel-footer h4 {
    color: #aaa;
    font-size: 14px;
  }
  .panel-footer .btn {
    margin: 15px 0;
    background-color: #f4511e;
    color: #fff;
  }
  .token {
      text-align: center;
      width: 100%;
      justify-content: center;
  }
  .slideanim {visibility:hidden;}
  .slide {
    animation-name: slide;
    -webkit-animation-name: slide;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    visibility: visible;
  }
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-webkit-keyframes slide {
    0% {
      opacity: 0;
      -webkit-transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
    }
  }
  @media screen and (max-width: 768px) {
    .col-sm-4 {
      text-align: center;
      margin: 25px 0;
    }
    .btn-lg {
      width: 100%;
      margin-bottom: 35px;
    }
  }
  @media screen and (max-width: 480px) {
    .logo {
      font-size: 150px;
    }
  }
</style>
