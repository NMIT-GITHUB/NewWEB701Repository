<template>

  <!-- Footer -->
	<section id="footer">
		<div class="container">
        <div class="row text-center text-xs-center text-sm-left text-md-left">
            <div class="col-xs-12 col-sm-4 col-md-4">
                <h5>Quick links</h5>
                <ul class="list-unstyled quick-links" routerLinkActive="active">
                    <li><router-link to="/home"><i class="fa fa-angle-double-right"></i>Home</router-link></li>
                    <li><router-link to="/about"><i class="fa fa-angle-double-right"></i>About</router-link></li>
                    <li><router-link to="/contact"><i class="fa fa-angle-double-right"></i>Contact</router-link></li>
                    <li><router-link to="/donate"><i class="fa fa-angle-double-right"></i>Donate</router-link></li>
                    <li><router-link to="/profile"><i class="fa fa-angle-double-right"></i>Profile</router-link></li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4">
                <!-- <h5>Quick links</h5>
                <ul class="list-unstyled quick-links">
                    <li><a href=""><i class="fa fa-angle-double-right"></i>Home</a></li>
                    <li><a href=""><i class="fa fa-angle-double-right"></i>About</a></li>
                    <li><a href=""><i class="fa fa-angle-double-right"></i>FAQ</a></li>
                    <li><a href=""><i class="fa fa-angle-double-right"></i>Get Started</a></li>
                    <li><a href=""><i class="fa fa-angle-double-right"></i>Videos</a></li>
                </ul> -->
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4" style="text-align: right;">
                <h5 style="border-left: 0px; border-right: 3px solid #eeeeee; padding-right: 10px;">Quick links  </h5>
                <ul class="list-unstyled quick-links" routerLinkActive="active">
                    <li><router-link to="/home">Home <i class="fa fa-angle-double-left"></i></router-link></li>
                    <li><router-link to="/about">About <i class="fa fa-angle-double-left"></i></router-link></li>
                    <li><router-link to="/contact">Contact <i class="fa fa-angle-double-left"></i></router-link></li>
                    <li><router-link to="/donate">Donate <i class="fa fa-angle-double-left"></i></router-link></li>
                    <li><router-link to="/profile">Profile <i class="fa fa-angle-double-left"></i></router-link></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul class="list-unstyled list-inline social text-center">
                    <li class="list-inline-item"><a href="https://www.facebook.com/helpingfamiliesnelson"><i class="fa fa-facebook"></i></a></li>
                    <li class="list-inline-item"><a href=""><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href=""><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href=""><i class="fa fa-google-plus"></i></a></li>
                    <li class="list-inline-item"><a href="" target="_blank"><i class="fa fa-envelope"></i></a></li>
                </ul>
            </div>
            <hr>
        </div>	
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p class="h6">©  2021 Helping Families Nelson</p>
            </div>
            <hr>
        </div>	
    </div>
	</section>
	<!-- ./Footer -->
</template>

<script>
  export default {
      name: "footer",
      data: () => ({

      }),
      mounted() {
          
      }
  }
</script>

<style scoped>
/* Footer */
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
section {
    padding: 60px;
    
}

section .section-title {
    text-align: center;
    color: #007b5e;
    margin-bottom: 50px;
    text-transform: uppercase;
}
#footer {
    background: #007b5e !important;
    
}
#footer h5{
	padding-left: 10px;
    border-left: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#ffffff;
    margin-right: 20%;
    margin-left: 20%;
}
#footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    margin-right: 20%;
    margin-left: 20%;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:30px;
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
	color:#ffffff;
}
#footer ul.social li a:hover{
	color:#eeeeee;
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}

@media (max-width:767px){
	#footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
}
}


</style>