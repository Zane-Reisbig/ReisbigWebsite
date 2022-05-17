<template>
  <div id="main-content">
    <Header />
    <div id="container-about">
      <h1>About <span>Me</span></h1>
      <p>Zane <span>Reisbig</span></p>
    </div>
    <div id="body-content">
      <p>
        I am a software engineer with a passion for creating beautiful,
        intuitive, and functional user interfaces. I am currently working at
        <Link to="https://www.priorityhealth.com/">Priority Health</Link>
        as a claims analyst.
      </p>
      <p>
        I am a self taught developer with a background in Javascript, HTML, CSS,
        and React. I am currently learning Vue with the
        <Link to="https://nuxtjs.org/">nuxt.js</Link> framework.
      </p>
      <p>
        I have a lot of experience in Java, Javascript, Python, C#.
        I mostly focus on JS/TS, but I am fluent in Python and C# as well.
      </p>
      <p>
        I use Python at my every day job to automate and analyze large
        quantities of data.
      </p>
      <p>
        I have a lot of experience with many libraries, built-in and external. I
        am also the author of the
        <Link to="https://www.github.com/SRGTxTwinkie/Automation-Reborn">Automation Reborn</Link>
        library, the <i>coolest</i> thing I have ever made.
      </p>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  methods: {},
})
</script>
<style scoped>
body {
  cursor: default;
  overflow: scroll !important;
}

#drop-menu-parent {
  cursor: pointer;
}

#drop-menu {
  display: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

#drop-menu-parent:hover #drop-menu {
  display: block;
}

#drop-menu:hover {
  display: block;
}

#main-content {
  height: 100vh;
  background-color: #141414;
}

#container-about {
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#container-about h1 {
  color: #a7a7a7;
}

#container-about h1 span {
  color: #b6b6b640;
}

#container-about p {
  display: inline-block;
  color: #bdbcbc40;
  padding-bottom: 10px;
  border-bottom: dashed #393e46 2px;
  font-size: 0.9em;
}

#container-about p span {
  color: #a7a7a7;
}

#body-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 40px;
  font-size: 1.3em;
  background-color: #141414;
}

#body-content p {
  max-width: 50%;
  text-align: start;
  margin-bottom: 10px;
}

@media only screen and (max-width: 800px) {
  html,
  body {
    margin: 0;
  }

  #body-content {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
  }

  #body-content p {
    max-width: 100%;
    text-align: start;
    margin-bottom: 10px;
  }

  #main-content {
    height: 100%;
    background-color: #141414;
  }
}
</style>