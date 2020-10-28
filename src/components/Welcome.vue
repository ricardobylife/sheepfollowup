<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Um App pra te ajudar a cuidar do rebanho</h2>
  </div>
</template>

<script>

export default {
  name: 'Welcome',
  data() {
    return {
      msg: 'Seja bem-vindo ao Sheep Foloow-up!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
