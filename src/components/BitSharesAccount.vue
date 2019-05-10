<template>
    <a :href="'https://open-explorer.io/#/accounts/' + name">{{name}}{{id && "(" + id + ")"}}</a>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: "BitSharesAccount",
        props: {
            name: String,
            id: String,
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
