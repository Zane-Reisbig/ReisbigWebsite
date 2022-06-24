<template>
  <div id="header-container">
    <div id="logo">
      <NuxtLink to="/">
        <span id="logo-span-1">Reisbig</span
        ><span id="logo-span-2" @mousedown="changeSuffix()">.io</span>
      </NuxtLink>
    </div>
    <div class="menu-item">
      <NuxtLink to="/">Home</NuxtLink>
    </div>
    <div class="menu-item">
      <NuxtLink to="/about">About</NuxtLink>
    </div>
    <div
      @mouseenter="toggleDrop()"
      @mouseleave="toggleDrop()"
      @click="toggleDrop()"
    >
      <div id="header-projects" class="menu-item no-fade">
        Projects<span id="project-v"> v</span>
      </div>
      <div id="header-projects-dropdown">
        <div v-for="item in drop_items" :key="item[2]" class="menu-item">
          <NuxtLink :to="item[1]"> > {{ item[0] }}</NuxtLink>
        </div>
      </div>
    </div>
    <div class="menu-item">
      <NuxtLink id="project-overview" to="/project-overview"></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previous_suffix: '',
      drop_items: [
        ['Automation Reborn', '/project-overview#automation-reborn', 1],
        ['Reisbig.io', '/project-overview#reisbig-io', 2],
        ['punchit.app', '/project-overview#punchit-app', 3],
      ],
    }
  },

  methods: {
    toggleDrop() {
      const dropdown = document.getElementById('header-projects-dropdown')
      const projects_label =
        document.getElementById('header-projects').childNodes[1]
      const dropdown_styles = window.getComputedStyle(dropdown)
      if (dropdown_styles.display === 'none') {
        dropdown.style.display = 'block'
        setTimeout(() => {
          dropdown.style.opacity = '1'
        }, 50)
        projects_label.style.display = 'inline-block'
        projects_label.style.transform = 'rotate(180deg)'
      } else {
        setTimeout(() => {
          dropdown.style.display = 'none'
        }, 500)
        projects_label.style.display = 'inline-block'
        projects_label.style.transform = 'rotate(0deg)'
        dropdown.style.opacity = '0'
      }

      projects_label.style.marginLeft = '4px'
    },

    changeSuffix() {
      const suffixes = ['.io', '.com', '.org', '.net', '.edu', '.gov', '.xyz']
      let suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
      while (suffix === this.previous_suffix) {
        suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
      }
      const new_color = this.getRandomColor()
      const logo_span_2 = document.getElementById('logo-span-2')

      logo_span_2.style.opacity = '0'
      setTimeout(() => {
        logo_span_2.innerText = suffix
      }, 500)
      setTimeout(() => {
        logo_span_2.style.opacity = '1'
      }, 1000)
      logo_span_2.style.color = new_color
      this.previous_suffix = suffix
    },

    getRandomColor() {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },
  },
}
</script>
<style scoped>
:root {
  --logo-size-lg: 1em;
  --header-bg-color: #222831d3;
  --lighter-bg-color: #393e46;
  --accent-color: #00adb5;
}

#project-overview:before {
  content: 'Project Overview';
}

#header-container {
  position: sticky;
  top: 0;
  display: flex;
  word-break: break-all;
  justify-content: space-around;
  backdrop-filter: blur(5px);
  opacity: 0.9;
  background-color: var(--header-bg-color);
  color: white;
  font-size: 1.6em;
}

#logo {
  min-width: max-content;
  display: block;
  font-size: var(--logo-size-lg);
  padding: 10px 0px 0px 10px;
  width: 200px;
}

#logo-span-1 {
  color: #a7a7a7;
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  padding: 0;
  transition: all 0.2s ease-in-out;
}

#logo-span-1:hover {
  color: var(--accent-color);
}

#logo-span-1:active {
  display: inline-block;
  transform: scale(1.1);
}

#logo-span-2 {
  min-width: max-content;
  color: #8d8d8d40;
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  padding: 0;
  transition: all 0.5s ease-in-out;
}

#logo-span-2:after {
  content: '?';
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

#logo-span-2:hover:after {
  content: '?';
  opacity: 1;
}

.no-fade:hover {
  color: var(--text-color) !important;
}

.menu-item {
  min-width: max-content;
  padding: 10px 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  resize: none;
  text-align: left;
}

.menu-item a {
  text-align: left;
}

.menu-item:hover {
  color: rgb(135, 135, 135);
}

.menu-item:active {
  color: var(--accent-color);
  transform: scale(1.1);
}

#project-v {
  transition: transform 0.2s ease-in-out;
  transform: rotate(0);
}

#header-projects-dropdown {
  display: none;
  opacity: 0;
  position: absolute;
  float: left;
  transform: translateX(20px);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 0.1s ease-in-out;

  /* Why won't this work :( */
  /* TODO: fix this lmao */
  background-color: var(--header-bg-color);
  backdrop-filter: blur(5px);
}

#header-projects-dropdown div {
  padding: 2px;
  margin-top: 1px;
}

#header-projects-dropdown div:nth-last-child(1) {
  margin-bottom: 10px;
}

@media only screen and (max-width: 1000px) {
  .menu-item {
    font-size: 0.9em;
    margin: 2px;
    padding: 10px 5px;
  }

  #project-overview:before {
    content: 'More';
  }

  #header-projects-dropdown {
    transform: translateX(-50px);
  }

  #header-container {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.5em;
  }

  #logo {
    display: none;
  }
}
</style>