<template>
  <div id="main-content">
    <PageHeader />
    <div id="container-overview">
      <div class="post" id="automation-reborn">
        <p>Automation Reborn</p>
        <a
          href="https://github.com/SRGTxTwinkie/Automation-Reborn"
          target="_blank"
          class="postlink"
          >Github Link</a
        >
        <img src="../images/AutomationRebornImg.png" alt="picture of code" />
        <p class="description">
          <ul>
            <li>
              This is a tool that adds abstraction to help with the automation of
              windows based tasks.
            </li>
            <li>This library is meant to help automate things that cannot be controlled with pywinauto <br> I.E. Remote applications that do not report controls to windows</li>
            <br>
            <li>There are some helper libraries in there and quite a few QOL things to make automation easier</li>
            <li>Everything is a module, choose what you want to use and what you don't</li>
            <li>Helpful abstractions for windows controls and state managment</li>
          </ul>
        </p>
      </div>
      <div class="post" id="reisbig-io">
        <p>Reisbig.io</p>
        <a href="https://github.com/SRGTxTwinkie/ReisbigWebsite" class="postlink">GitHub Link</a>
        <img src="../images/ReisbigIO.png" alt="another picture of code">
        <p class="description">
          <ul>
            <li>It's this website!</li>
            <li>If you want to see how I did something, check it out!</li>
          </ul>
        </p>
      </div>

      <div class="post" id="punchit-app">
        <p>punchIt.app</p>
        <a href="https://github.com/SRGTxTwinkie/punchIt.app" class="postlink">GitHub Link</a>
        <img src="../images/Punchit.png" alt="believe it or not another picture of code">
        <p class="description">
          <ul>
            <li>For calculating how much time you have left in the week for work</li>
            <li>A useful tool for managing your time</li>
          </ul>
        </p>
      </div>

      <div class="post" id="YAFE">
        <p>YAFE (Yet Another File Explorer)</p>
        <a href="https://github.com/SRGTxTwinkie/YAFE" class="postlink">GitHub Link</a>
        <img src="../images/YAFEMain.png" alt="A GUI showing file names and paths">
        <p class="description">
          <ul>
            <li>Use it to move files around quickly</li>
            <li>Use it for modding!</li>
            <li>Use it for pictures!</li>
          </ul>
        </p>
      </div>

      <p>Thats all for now!</p>
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
:target {
  outline: yellow solid 5px !important;
}

#container-overview {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

#container-overview {
  color: white;
  font-size: 3em;
}

#main-content {
  background-color: #141414;
}

.post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1em;
}

.post a {
  font-size: 0.7em;
  color: rgba(140, 140, 253, 0.415);
}

.post {
  font-size: 0.8em;
}

.description {
  font-size: 0.4em;
}

@media only screen and (max-width: 800px) {
  #container-overview {
    font-size: 1.7em;
  }

  img {
    transform: scale(0.7);
  }

  pre {
    font-size: 0.7em;
  }
}
</style>
