<template>
    <div id="header-container">
        <div id="logo">
            <NuxtLink to="/">
                <span id="logo-span-1">Reisbig</span><span @mousedown="changeSuffix()" id="logo-span-2">.io</span>
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
            <div id="header-projects"
                class="menu-item no-fade"
            >
            Projects<span id="project-v"> v</span> </div>
            <div
                id="header-projects-dropdown"
            >
                <div 
                    class="menu-item"
                    v-for="item in drop_items" 
                    :key="item[2]" 
                > 
                    <NuxtLink :to="item[1]"> > {{ item[0] }}</NuxtLink>
                </div>

            </div>
        </div>
    </div> 
</template>

<script>
    export default {
        data(){
            return {
                previous_suffix: '',
                drop_items :[
                    ["Project 1", "Project1", 1],
                    ["Project 2", "Project2", 2],
                    ["Project 3", "Project3", 3],
                ],
            };
        },

        methods: {
            toggleDrop() {
                const dropdown = document.getElementById('header-projects-dropdown')
                const projects_label = document.getElementById('header-projects').childNodes[1]
                const dropdown_styles = window.getComputedStyle(dropdown)
                if (dropdown_styles.display === 'none') {
                    dropdown.style.display = 'block'
                    setTimeout(() => {dropdown.style.opacity = '1'}, 50);
                    projects_label.style.display = 'inline-block';
                    projects_label.style.transform = 'rotate(180deg)';
                } else {
                    setTimeout(() => {dropdown.style.display = 'none'}, 500);
                    projects_label.style.display = 'inline-block';
                    projects_label.style.transform = 'rotate(0deg)';
                    dropdown.style.opacity = '0';
                }

                projects_label.style.marginLeft = '4px'
            },

            changeSuffix(){
                const suffixes = [".io", ".com", ".org", ".net", ".edu", ".gov", ".xyz"]
                var suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
                while (suffix === this.previous_suffix) {
                    suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
                }
                const new_color = this.getRandomColor()
                const logo_span_2 = document.getElementById('logo-span-2')

                logo_span_2.style.opacity = '0'
                setTimeout(() => {logo_span_2.innerText = suffix}, 500);
                setTimeout(() => {logo_span_2.style.opacity = '1'}, 1000);
                logo_span_2.style.color = new_color
                this.previous_suffix = suffix

            },

            getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            
        }

    }
</script>
<style>
    :root {
        --logo-size-lg: 1em;
        --text-color: #EEEEEE;
        --header-bg-color: #222831;
        --lighter-bg-color: #393e46;
        --accent-color: #00ADB5;
    }

    #header-container {
        font-size: 1.2em;
        position: sticky;
        top: 0;
        display: flex;
        word-break: break-all;
        justify-content: space-around;
        backdrop-filter: blur(5px);
        opacity: 0.9;
        background-color: var(--header-bg-color);
    }

    #logo {
        min-width: max-content;
        display: block;
        font-size: var(--logo-size-lg);
        padding: 10px 0px 0px 10px;
        width: 200px;
    }

    #logo-span-1 {
        color: rgb(167, 167, 167);
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
        color: rgba(141, 141, 141, 0.251);
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        padding: 0;
        transition: all 0.5s ease-in-out;
    }
    
    #logo-span-2:hover:after {
        content: "?";
    }

    .no-fade:hover {
        color: var(--text-color) !important;

    }
    
    .menu-item {
        min-width: max-content;
        color: var(--text-color);
        padding: 10px 30px;
        cursor: pointer;
        margin: 10px 10px 0px;
        align-self: flex-start;
        transition: all 0.2s ease-in-out;
        resize: none;
    }

    .menu-item:hover {
        color: rgba(20, 20, 20, 0.905);
    }

    .menu-item:active{
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
        background-color: var(--header-bg-color);
        transform: translateX(20px);
        border-bottom-left-radius:  10px;
        border-bottom-right-radius: 10px;
        transition: all 0.1s ease-in-out;
    }

    #header-projects-dropdown div {
        padding: 2px;
        margin-top: 1px;
        text-align: center;
    } 

    #header-projects-dropdown div:nth-last-child(1) {
        margin-bottom: 10px;
    }
    
    @media only screen and (max-width: 800px) {
        .menu-item{
            font-size: 0.9em;
            margin: 2px;
            padding: 10px 5px;
        }

        #header-projects-dropdown {
            transform: translateX(-20px);
        }

        #header-container {
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
        }

        #logo {
            display: none;
        }

    }
</style>