<template>
  <div id="main-content">
    <Header />
    <div id="container-overview">

      <h1>Coming Soon to a Page near you!</h1>
      <div id="home-button">
          <NuxtLink to="/">
              <span id="home-button-span-1">{{"&lt;Back Home&gt;"}}</span>
          </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'IndexPage',
    methods: {},
  })
</script>

<style scoped>
#container-overview {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

#container-overview{
  color: white;
  font-size: 3em;
}

#main-content {
  background-color: #141414;
}

@media only screen and (max-width: 800px) {
  #container-overview {
    font-size: 1.7em;
  }
}
</style>