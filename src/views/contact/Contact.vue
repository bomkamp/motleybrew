<template>
  <v-container class="home-container" fill-height>
    <v-row align="center" justify="center">
      <v-col class="py-0" cols="12">
        <v-row class="py-0" justify="center" align="center">
          <v-img
            class="contact-logo"
            src="@/assets/images/portafilter-logo.png"
          />
        </v-row>
        <v-row class="py-0" justify="center" align="center">
          <div class="contact-info">
            <div class="description">
              Motley Brew Coffee is an independent coffee shop located within
              Mosaic Church in Milford, Ohio. We strive to be the favorites for
              high quality local coffee and tea. Our goal is to serve and
              feature the great local companies in Cincinnati, Ohio.
            </div>
            <div>
              Hours:
              <table class="hours">
                <tr>
                  <td>Mon-Sat</td>
                  <td>: 10am - 4pm</td>
                </tr>
                <tr>
                  <td>Sun:</td>
                  <td>8am - 1pm</td>
                </tr>
              </table>
            </div>
            <div>
              Email us:
              <br />
              <a href="mailto:motley.brew.coffee@gmail.com"
                >motley.brew.coffee@gmail.com</a
              >
            </div>
            <div>
              Call or text:
              <br />
              <a href="tel:513-235-6005">(513) 235-6005</a>
            </div>
            <div>
              Directions:
              <br />
              <a
                href="https://www.google.com/maps/dir//Mosaic+Cincinnati,+894+OH-28,+Milford,+OH+45150/@39.1921846,-84.2558828,20.17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x884101d60d651961:0x6da607b772eecc2b!2m2!1d-84.2559341!2d39.1921997!3e0"
                >Google Maps</a
              >
            </div>
            <v-row
              class="design-info py-0 text-xs-center"
              justify="center"
              align="end"
            >
              <a
                class="mx-auto my-auto"
                href="https://github.com/bomkamp/motleybrew"
                target="_blank"
              >
                <GitHubIcon class="github-icon" />
                <br />Design by Greg Bomkamp
              </a>
            </v-row>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GitHubIcon from "@/assets/images/github.svg?inline";

@Component({
  components: {
    GitHubIcon,
  },
})
export default class Home extends Vue {}
</script>

<style lang="stylus">
.contact-info > div
  text-align: center;
  margin-top: 20px;

.hours
  margin: auto;
  text-align: right !important;

.contact-logo
  margin-bottom: 20px;

  @media (min-width: 1px) and (max-width: 800px)
    max-width: 90% !important;
    max-height: 90% !important;

  @media (min-width: 800px)
    max-width: 600px !important;
    max-height: 500px !important;

.design-info
  margin-top: 100px !important;
  color: white !important;

  a
    text-decoration: none;
    color: white !important;

.github-icon
  width: 25px;
  height: 25px;
  vertical-align: align-self auto !important;

.github-icon path
  stroke: white;
  fill: white;

.description
  max-width: 400px;
  margin: auto;
</style>
