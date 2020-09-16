<template>
  <v-container class="home-container" fill-height>
    <v-row align="center" justify="center">
      <v-col>
        <div class="contact-info">
          <img class="contact-logo" src="@/assets/images/title-logo.png" />
          <div class="description">
            Motley Brew Coffee is an independent coffee shop located within
            Mosaic Church in Milford, Ohio. We strive to be the favorites for
            high quality local coffee and tea. Our goal is to serve and feature
            the great local companies in Cincinnati, Ohio.
          </div>
          <div class="contact-info">
            Email us:
            <a href="mailto:motley.brew.coffee@gmail.com"
              >motley.brew.coffee@gmail.com</a
            >
            <br />Call or text:
            <a href="tel:513-235-6005">(513) 235-6005</a>
            <br />
            <a
              href="https://www.google.com/maps/dir//Mosaic+Cincinnati,+894+OH-28,+Milford,+OH+45150/@39.1921846,-84.2558828,20.17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x884101d60d651961:0x6da607b772eecc2b!2m2!1d-84.2559341!2d39.1921997!3e0"
              >Google Maps</a
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="stylus">
.contact-info
  text-align: center;
  margin-top: 25px;

.contact-logo
  margin-bottom: 50px;

.description
  max-width: 400px;
  margin: auto;
</style>
