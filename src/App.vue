<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <Header />
      </v-app-bar>
      <v-content>
        <v-container fluid fill-height>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer dark padless>
        <Footer />
      </v-footer>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

@Component({
  components: {
    Footer,
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
@import '~@/assets/styles/theme.styl';

html, body
  height: 100%;
  width: 100%;

#app
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(13,13,13,1) 35%, rgba(25,25,25,0.9724264705882353) 100%);
  box-shadow: inset 0 0 0 1000000px rgba(0,0,0,.2);
</style>
