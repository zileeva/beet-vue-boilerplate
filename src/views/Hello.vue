<template>
    <ContentCard>
        <div class="hello" v-if="account">
            <span>You are logged in as </span>
            <BitSharesAccount :name="account.name" :id="account.id"/>
            <span> from blockchain {{ account.chain.name }}</span>
        </div>
        <div class="students" v-if="account">
            <span class="md-display-2">Students</span>
            <md-list id="students">
                <md-list-item v-for="student in students" v-bind:key="student.id">
                    <Student :name="student.name" :grade="student.grade"/>
                </md-list-item>
            </md-list>
        </div>
    </ContentCard>
</template>

<script>
    // @ is an alias to /src

    import beeet from "@/beet";
    import ContentCard from "../components/ContentCard";
    import BitSharesAccount from "../components/BitSharesAccount";
    import Student from '../components/Student';


    export default {
        name: "hello",
        components: {
            BitSharesAccount,
            ContentCard,
            Student
        },
        data() {
            return {
                beet: beeet,
                //
                account: null,
                students: [{
                    id: 1,
                    name: 'Noah',
                    grade: 'A'
                }, {
                    id: 2,
                    name: 'Olivia',
                    grade: 'A'
                }, {
                    id: 3,
                    name: 'Liam',
                    grade: 'B'
                }]
            }
        },
        mounted() {
            console.log(this.$route);
            console.log(this.students)
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
