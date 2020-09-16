<template>
  <v-row justify="center" align="center" no-gutters>
    <!-- <v-img
        class=""
        src="@/assets/images/kettle-logo.png"
        max-height="25"
      ></v-img> -->
    <!-- <v-spacer></v-spacer> -->
    <v-btn to="/" text small class="mr-4 ml-16">Home</v-btn>
    <v-btn to="/panda" text small class="mr-4 ml-4">Store</v-btn>
    <v-btn to="/Contact" text small class="mr-4 ml-4">Contact us</v-btn>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Header extends Vue {}
</script>

<style lang="stylus"></style>
