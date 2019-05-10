<template>
    <ContentCard>
        <div class="home">
            <h1>A boilerplate to kickstart your Blockchain application</h1>
            proudly presented by the <b-link to="/about">BitShares Blockchain</b-link> & <b-link to="/about">Beet</b-link>
            <br/><br/>
            <h1>What is this?</h1>
            <p>Easy to re-use boilerplate to start implementing your favorite feature of your favorite blockchain in VueJS,
                already preloaded vuex, vue-router and Beet login / logout. The UI framework built-in is bootstrap.</p>

            <h1>How does it work?</h1>
            <p>If you are trying this out online and want to implement your own app, please visit </p>
            <b-link href="https://github.com/beetapp/beet-vue-boilerplate">https://github.com/beetapp/beet-vue-boilerplate</b-link>
        </div>
    </ContentCard>
</template>

<script>
    // @ is an alias to /src
    import ContentCard from "../components/ContentCard";
    export default {
        name: "home",
        components: {
            ContentCard

        },
        data() {
            return {
            }
        },
        mounted() {
        }
    };
</script>
