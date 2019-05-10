<template>
    <div class="login container">
        <p v-if="$route.params.next">
            You need to be logged in to use this.
        </p>
        <button class="button" @click="connectToBeet">
            <BeetLogo/>
            <h1 class="title">Login</h1>
            <div class="sub-title">
                with Beet
            </div>
        </button>
        <div>
        <b-button variant="light outline-primary" class="m-3" @click="showBeetExplanation"><span class="font-italic">"I don't know what Beet is"</span></b-button>
        <div v-if="explainBeet">
            <h4>Beet - Your Blockchain Compagnion</h4>
            <p>
                Beet is a stand-alone key and identity manager and signing app for blockchains -- originally evolved from the BitShares Blockchain. Beet is installed locally on your computer and allows separate account management while being in full control of what data to expose to third parties. Private keys are locally stored and encrypted, protected by a wallet master password. All transactions suggested by third parties must be confirmed before being broadcast.
            </p>
            <b-button @click="goToBeet">Install Beet now</b-button>
        </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import BeetLogo from "./logos/BeetLogo";
    import beeet from "@/beet";

    import { mapState, mapActions } from 'vuex'

    export default {
        name: "home",
        components: {
            BeetLogo
        },
        data() {
            return {
                beet: beeet,
                explainBeet: false
            }
        },
        mounted() {
        },
        methods: {
            showBeetExplanation() {
                this.explainBeet = !this.explainBeet;
            },
            goToBeet() {
                window.open('https://github.com/bitshares/beet','_blank');
            },
            async connectToBeet() {
                let beetApp = await this.beet.connect();
                this.login(beetApp.getAccount().name);
                this.$router.push({name: "hello", params: {hello: beetApp.getAccount().name}});
            },
            ...mapActions("accounts", {
                login: "login"
            })
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

    .popover {
        max-width: 800px !important;
        width: 800px !important;
    }

    .title {
        margin-bottom: 0.25rem;
        margin-top: 0.25rem;
    }

    .sub-title {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.2em;
        color: rgba(0,0,0,.6);
    }

    .button {
        background: transparent none;
        font-weight: 400;
        border-radius: .28571429rem;
        text-transform: none;
        text-shadow: none!important;
        -webkit-box-shadow: 0 0 0 1px rgba(34,36,38,.15) inset;
        box-shadow: 0 0 0 1px rgba(34,36,38,.15) inset;
        cursor: pointer;
        border: none;
        padding: 1rem;
    }

    .button:hover {
        box-shadow: 0 0 0 1px rgb(0, 0, 0) inset;
    }

    .button:active {
        background: rgba(0,0,0,.05);
    }

    .button:focus {
        outline: none !important;
    }

</style>
