<template>
    <ContentCard>
        <div class="hello" v-if="account">
            <span>You are logged in as </span>
            <BitSharesAccount :name="account.name" :id="account.id"/>
            <span> from blockchain {{ account.chain.name }}</span>
        </div>
    </ContentCard>
</template>

<script>
    // @ is an alias to /src

    import beeet from "@/beet";
    import ContentCard from "../components/ContentCard";
    import BitSharesAccount from "../components/BitSharesAccount";

    export default {
        name: "hello",
        components: {
            BitSharesAccount,
            ContentCard
        },
        data() {
            return {
                beet: beeet,
                //
                account: null
            }
        },
        mounted() {
            console.log(this.$route);
            if (this.beet.getCurrentConnection()) {
                this.account = this.beet.getCurrentConnection().getAccount();
            }
            if (!this.account) {
                this.$router.push({name: "login", params: {next: "hello"}});
            } else if (!this.$route.params.accountname) {
                this.$router.push({name: "hello", params: {hello: this.account.name}});
            }

        }
    };
</script>
