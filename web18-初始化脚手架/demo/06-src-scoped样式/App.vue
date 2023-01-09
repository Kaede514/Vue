<template>
    <div>
        <Student></Student>
        <Pet></Pet>
    </div>
</template>

<script>
    import Student from "./components/Student";
    import Pet from "./components/Pet";
    
    export default {
        name: "App",
        components: {
            Student,
            Pet
        }
    }
</script>

<style>
    .red {
        color: red;
    }
</style>
