<template>
  <v-card flat tile class="text-center footer">
    <v-card-text>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
    </v-card-text>

    <div class="banner-contact">
      <a href="https://www.instagram.com/motleybrew.coffee/" target="_blank">
        <InstragramIcon class="banner-icon" />
      </a>
      <a>
        <EmailIcon @click="openMail" class="banner-icon" />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <FacebookIcon class="banner-icon" />
      </a>
    </div>

    <v-card-text class="white--text pt-0">
      Motley Brew Coffee
      <address>894 State Route 28, Milford, OH 45150</address>
      <a href="tel:513-235-6005">(513) 235-6005</a><br />
      © {{ new Date().getFullYear() }} Motley Brew Coffee
    </v-card-text>

    <!-- <v-card-text class="white--text">© {{ new Date().getFullYear() }} Motley Brew Coffee</v-card-text> -->
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GitHubIcon from "@/assets/images/github.svg?inline";
import InstragramIcon from "@/assets/images/instagram.svg?inline";
import EmailIcon from "@/assets/images/email.svg?inline";
import FacebookIcon from "@/assets/images/facebook.svg?inline";

@Component({
  components: {
    GitHubIcon,
    EmailIcon,
    InstragramIcon,
    FacebookIcon,
  },
})
export default class Footer extends Vue {
  private openMail(): void {
    window.open(`mailto:motley.brew.coffee@gmail.com`, "_blank");
  }
}
</script>

<style lang="stylus">
.footer
  width: 100%;

.banner-icon
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  vertical-align: align-self auto;

.banner-icon path
  stroke: white;
  fill: white;
</style>
