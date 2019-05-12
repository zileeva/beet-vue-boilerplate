<template>
    <div id="login-page" class="mx-auto">
        <Background />
        <div class="login-wrapper md-layout md-alignment-center-left">
            <div class="md-layout-item md-size-100">
                <div class="md-layout-item md-size-100">
                    <span class="md-display-3 bold">Hey, School!</span>
                </div>
                <div class="md-layout-item md-size-100">
                    <md-button class="md-raised md-accent login-button" @click="connectToBeet">
                        Login with Beet
                    </md-button>
                </div>
            </div>
            <div class="md-layout-item md-size-100">
                <span class="md-subheading accent">Grades 4 Bits</span>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import BeetLogo from "./logos/BeetLogo";
    import Background from "./logos/Background";
    import beeet from "@/beet";

    import { mapState, mapActions } from 'vuex'

    export default {
        name: "home",
        components: {
            BeetLogo,
            Background
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
    .md-display-3.bold {
        font-weight: 700;
    }

    .md-subheading.accent {
        color: var(--md-theme-default-accent-on-background, #ff5252)
    }

    #login-page {
        min-height: 100vh;
        width: 1080px;
    }

    .login-wrapper {
        text-align: left;
        min-height: 100vh;
    }

    .login-button {
        margin: 30px 0;
    }

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
