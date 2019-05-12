<template>
    <div class="m-3 content-card mx-auto">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ContentCard"
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.content-card {
		width: 1080px;
		text-align: left;
	}
</style>
