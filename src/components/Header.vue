<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row justify="center" align="center" no-gutters>
          <!-- <v-img
                class=""
                src="@/assets/images/kettle-logo.png"
                max-height="25"
              ></v-img> -->
          <!-- <v-spacer></v-spacer> -->
          <v-btn to="/" text small class="ml-4">Home</v-btn>
          <v-btn to="/store" text small class="">Store</v-btn>
          <v-btn to="/contact" text small class="">Contact</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Header extends Vue {}
</script>

<style lang="stylus"></style>
