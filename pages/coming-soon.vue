<template>
    <div id="main-content">
        <Header />
        <div id="coming-soon">
            <h1>Coming Soon™</h1>
        </div>
        <div id="home-button">
            <NuxtLink to="/">
                <span id="home-button-span-1">{{"&lt;Back Home&gt;"}}</span>
            </NuxtLink>
        </div>
    </div>
</template>
<style scoped>
    #main-content {
        height: 100vh;
        background-color: #141414;
        color: white;
    }

    #home-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #home-button-span-1 {
        font-size: 50px;
        margin: 0px;
        padding: 0px;
        transition: all 0.2s ease-in-out;
    }

    #home-button-span-1:hover {
        display: inline-block;
        transition: all 0.2s ease-in-out;
        color: #638db8;
        transform: scale(1.1);
    }

    #home-button-span-1:active {
        display: inline-block;
        transition: all 0.2s ease-in-out;
        color: #697f95;
        transform: scale(1);
    }

    #coming-soon {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #coming-soon h1 {
        font-size: 50px;
        transition: all 0.2s ease-in-out;
    } 

    @media only screen and (max-width: 800px) {
        #coming-soon h1, #home-button-span-1 {
            font-size: 30px;
        }
    }
</style>