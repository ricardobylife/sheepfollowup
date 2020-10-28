<template>
<v-app>
  <main-navigation></main-navigation>

  <main-bar></main-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>

  <main-footer></main-footer>
</v-app>
</template>

<script>
import MainNavigation from '@/components/MainNavigation';
import MainBar from '@/components/MainBar';
import MainFooter from '@/components/MainFooter';

export default {
  name: 'App',
  components: { MainNavigation, MainBar, MainFooter },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
