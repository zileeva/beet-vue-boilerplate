<template>
    <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric>{{ id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ name }}</md-table-cell>
        <md-table-cell md-label="Grade">
            <md-avatar class="md-avatar-icon" v-bind:class="['grade-background-' + grade]">{{ grade }}</md-avatar>
        </md-table-cell>
        <md-table-cell md-label="Donor">
            <md-field>
                <label for="donor">Donor</label>
                <md-select v-model="donor" name="donor" id="donor">
                    <md-option value="donor1">Donor 1</md-option>
                    <md-option value="donor2">Donor 2</md-option>
                    <md-option value="donor3">Donor 3</md-option>
                </md-select>
            </md-field>
        </md-table-cell>
        <md-table-cell md-label="Amount">
            <md-field>
                <md-input type="number" placeholder="Amount" v-model="amount"></md-input>
            </md-field>
        </md-table-cell>
        <md-table-cell>
            <md-button class="md-raised" @click.prevent="onSubmit" :disabled="(!donor && !amount)">Transfer</md-button>
        </md-table-cell>
        <md-snackbar :md-position="position" :md-duration="duration" :md-active.sync="showSnackbar" md-persistent>
            <span>Successfully transfered {{ amount }} to {{ name }}!</span>
        </md-snackbar>
    </md-table-row>
</template>
<script>
    import beeet from "@/beet";

    export default {
        name: "Student",
        props: {
            name: String,
            grade: String,
            id: Number
        },
        data: () => ({
            donor: null,
            amount: null,
            showSnackbar: false,
            position: 'center',
            duration: 4000
        }),
        methods: {
            onSubmit() {
                console.log(this.donor, this.amount);
                this.showSnackbar = true;
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .transfer-form {
        width: 100%
    }

    .grade-background-A {
        background-color: #4caf50 !important;
    }

    .grade-background-B {
        background-color: #ffee58 !important;
    }

    .grade-background-C {
        background-color: #d50000 !important;
    }
</style>