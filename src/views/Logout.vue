<template>
</template>

<script>
    // @ is an alias to /src
    import beeet from "@/beet";

    import { mapState, mapActions } from 'vuex'

    export default {
        name: "logout",
        data() {
            return {
                beet: beeet
            }
        },
        created() {
            this.beet.disconnect();
            this.logout();
            this.$router.push({name: "home"});
        },
        methods: {
            ...mapActions("accounts", {
                logout: "logout"
            })
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
