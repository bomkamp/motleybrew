<template>
  <v-container class="home-container py-0" fill-height>
    <v-row class="py-0" align="center" justify="center">
      <v-col class="py-0" cols="12">
        <v-row class="py-0" justify="center" align="center">
          <v-img class="home-logo" src="@/assets/images/diamond-logo.png" />
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
export default class Home extends Vue {}
</script>

<style lang="stylus">
.home-logo
  @media (min-width:1px) and (max-width:800px)
    max-width: 80% !important;
    max-height: 80% !important;
  @media (min-width:800px)
    max-width: 500px !important;
    max-height: 800px !important;
</style>
