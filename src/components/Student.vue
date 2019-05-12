<template>
	<form class="transfer-form">
		<div class="md-layout md-gutter md-alignment-center-space-between">
			<div class="md-layout-item md-size-5">
		    	<md-avatar class="md-avatar-icon" v-bind:class="['grade-background-' + grade]">{{ grade }}</md-avatar>
			</div>
		    <div class="md-layout-item md-size-15">
		    	<span class="md-heading">{{ name }}</span>
		    </div>
		    <div class="md-layout-item">
		    	<md-field>
		          	<label for="donor">Donor</label>
		          	<md-select v-model="donor" name="donor" id="donor">
			            <md-option value="donor1">Donor 1</md-option>
			            <md-option value="donor2">Donor 2</md-option>
			            <md-option value="donor3">Donor 3</md-option>
		          	</md-select>
		        </md-field>
		    </div>
		    <div class="md-layout-item">
		    	<md-field>
		    		<md-input type="number" placeholder="Amount" v-model="amount"></md-input>
		    	</md-field>
		    </div>
		    <div class="md-layout-item text-right">
		    	<md-button class="md-raised" @click.prevent="onSubmit">Transfer</md-button>
		   	</div>
		</div>
	</form>
</template>
<script>
    import beeet from "@/beet";

	export default {
        name: "Student",
        props: {
            name: String,
            grade: String
        },
        data: () => ({
        	donor: null,
        	amount: null,
        }),
        methods: {
        	onSubmit() {
        		console.log(this.donor, this.amount);
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