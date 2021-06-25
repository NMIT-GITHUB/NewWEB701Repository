<template>
    <div class="container">
        <h1 class="text-center">Staff</h1>
        <br>
        <h2 class="text-center">Our Founding Member</h2>
        <br>
        <div class="span3 well">
            <center>
            <a href="#aboutModal1" data-toggle="modal" data-target="#myModal1"><img src="/resized/kristy-profile-square.jpg" name="aboutme" width="140" height="140" class="rounded-circle"></a>
            <h3>Kristy Rowe</h3>
            <em>click my face for more!</em>
            </center>
        </div>
        <br>
        <h2 class="text-center">The Rest Of The Gang</h2>
        <br>
        <div class="span3 well">
            <center>
            <a href="#aboutModal2" data-toggle="modal" data-target="#myModal2"><img src="/resized/katrina-profile-square.jpg" name="aboutme" width="140" height="140" class="rounded-circle"></a>
            <h3>Katrina Allred

            </h3>
            <em>click my face for more!</em>
            </center>
        </div>


        <!-- Modal -->
        <div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title" id="myModalLabel">More About Kristy</h4>
                        </div>
                    <div class="modal-body">
                        <center>
                        <img src="/resized/kristy-profile-square.jpg" name="aboutme" width="140" height="140" border="0" class="rounded-circle"/>
                        <h3 class="media-heading">Kristy Rowe</h3>
                        <hr>
                        </center>
                        <center>
                        <p class="text-center"><strong>Bio: </strong><br>
                            I'm a mum that's seen people in need. Hi I'm Kristy and I'm the founder of Helping Families Nelson. I saw a desperate need in our community for clothes and acted upon it. everyone has excess clothes, why don't we all donate to the poor I though. That's where this began!</p>
                        <br>
                        </center>
                    </div>
                    <div class="modal-footer">
                        <center>
                        <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title" id="myModalLabel">More About Katrina</h4>
                        </div>
                    <div class="modal-body">
                        <center>
                        <img src="/resized/katrina-profile-square.jpg" name="aboutme" width="140" height="140" border="0" class="rounded-circle"/>
                        <h3 class="media-heading">Katrina Allred</h3>
                        <hr>
                        </center>
                        <center>
                        <p class="text-center"><strong>Bio: </strong><br>
                            I saw the heart in this charity outreach and was blown away. Once I saw what they were doing and that they really needed help I had no choice but to join!
                        </p>
                        <br>
                        </center>
                    </div>
                    <div class="modal-footer">
                        <center>
                        <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
<style scoped>

</style>
