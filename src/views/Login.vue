<template>
    <ContentCard>
        <BeetLogin />
    </ContentCard>
</template>

<script>
    // @ is an alias to /src
    import BeetLogin from "../components/BeetLogin";
    import ContentCard from "../components/ContentCard";

    export default {
        name: "login",
        components: {
            ContentCard,
            BeetLogin
        }
    };
</script>

<style scoped lang="less">
</style>
