<template>
    <div class="container" id="about">
        <div id="story">
            <br>
                <h1 class="text-center">Our Story</h1>
                <br>
            <div class="row">
                <div class="col-md-5 align-middle">
                    <br><br><br><br>
                    <h5>After seeing a real need for clothing for children uplifted from their homes and placed into care with nothing, we had the idea for Helping Families.</h5>
                    <p>Helping Families is a way to support local families with some of the essentials required to raise children, so they can thrive and reach their full potential. However it’s not just children who need assistance, so we aim to help anyone who needs it. We believe no family should struggle alone.</p>
                    <p>In the Nelson/Tasman region we’re fortunate to have a community that is willing to help others in need. We tap into that community spirit by accepting donations of clothing which we can then distribute to those who need it.</p>
                    <p>We work directly with people in need, as well as community organisations and other charities.</p>
                </div>
                <div class="col-md-7">
                    <img src="/images/cropped-HFN-Clothes.jpg" class="w-100 rounded">
                </div>
            </div>
            <br>
        </div>
        <hr>
        <div id="profilepanel">
            <br>
            <profile-panel></profile-panel>
            <br>
        </div>
        <hr>
        <div id="community">
            <br>
                <h1 class="text-center">Community</h1>
                <br>
                <div class="row">
                    <div class="col-md-5">
                        <img src="/images/cropped-help-car-company.jpg" class="w-100 rounded">
                    </div>
                    <div class="col-md-7 align-middle">
                        <br><br><br>
                        <h3>Car Company</h3>
                        <p>Helping Families’ Mel Harnetty and Katrina Allred were on hand to accept their $4500 grant, with the novelty cheque striking a particular chord with Harnetty.</p>
                        <p>“I’ve always seen these on Ellen and thought ‘I want one of these’.”</p>
                        <a class="btn btn-outline-primary container-fluid" href="https://www.stuff.co.nz/nelson-mail/nelson-top-stories/112064253/car-company-charity-drive-rewards-worthy-nelson-community-organisations" target="_blank" role="button" >Visit</a>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-7 align-middle">
                        <br><br><br><br>
                        <h3>Plunket</h3>
                        <p>Plunket is the largest provider of free support services for the development, health and wellbeing of children under five in New Zealand.</p>
                        <a class="btn btn-outline-primary container-fluid" href="https://www.plunket.org.nz/" target="_blank" role="button" >Visit</a>
                    </div>
                    <div class="col-md-5">
                        <img src="/images/plunket-logo-social.jpg" class="w-100 rounded">
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-5">
                        <img src="/images/cropped-help-car-company.jpg" class="w-100 rounded">
                    </div>
                    <div class="col-md-7 align-middle">
                        <br><br><br>
                        <h3>Good in the Hood</h3>
                        <p>Thank you to everyone who voted for us and to Z Energy for their funding of this award.</p>
                        <a class="btn btn-outline-primary container-fluid" href="https://why.z.co.nz/whats-good-in-your-hood/" target="_blank" role="button" >Visit</a>
                    </div>
                </div>
            <br>
            <hr>
            <br>
            <donate-panel-section />
            <br>
            <br>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import ProfilePanel from '../models/ProfilePanel.vue'

export default defineComponent({
  components: { ProfilePanel },
    setup() {
        
    },
})
</script>
<style scoped>
    .middle {
        margin-left: auto;
        margin-right: auto;
    }
</style>
