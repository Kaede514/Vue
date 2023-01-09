<template>
    <div>
        <Anime></Anime>
        <AnimeLib></AnimeLib>
    </div>
</template>

<script>
    import Anime from "./components/Anime";
    import AnimeLib from "./components/AnimeLib";
    
    export default {
        name: "App",
        components: {
            Anime, AnimeLib
        }
    }
</script>
