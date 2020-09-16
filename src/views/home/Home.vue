<template>
  <v-container class="home-container" fill-height>
    <v-row align="center" justify="center">
      <v-col>
        <div class="title-banner">
          <img src="@/assets/images/diamond-logo.png" />
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
.title-banner
  text-align: center;
  margin-bottom: 40px;
</style>
