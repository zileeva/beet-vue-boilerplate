<template>
	<form class="transfer-form">
		<div class="md-layout md-gutter md-alignment-center-space-between">
		    <div class="md-layout-item md-size-15">
		    	<span class="md-display-1">{{ name }}</span>
		    </div>
		    <div class="md-layout-item">
		    	<md-field>
		    		<md-input type="text" placeholder="Donor" v-model="donor"></md-input>
		    	</md-field>
		    </div>
		    <div class="md-layout-item">
		    	<md-field>
		    		<md-input type="number" placeholder="Amount" v-model="amount"></md-input>
		    	</md-field>
		    </div>
		    <div class="md-layout-item">
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
        },
        data: () => ({
        	donor: null,
        	amount: null,
        }),
        methods: {
        	onSubmit() {
        		console.log(this.donor, this.amount);
        	}
        	        // onSubmit() {
            // console.log(this.donor, this.amount)
          // if(this.name && this.review && this.rating) {
          //   let productReview = {
          //     name: this.name,
          //     review: this.review,
          //     rating: this.rating
          //   }
          //   this.$emit('review-submitted', productReview)
          //   this.name = null
          //   this.review = null
          //   this.rating = null
          // } else {
          //   if(!this.name) this.errors.push("Name required.")
          //   if(!this.review) this.errors.push("Review required.")
          //   if(!this.rating) this.errors.push("Rating required.")
          // }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.transfer-form {
		width: 100%
	}
</style>