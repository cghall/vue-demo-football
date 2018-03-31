<template>

	<div id="fixture">

    	<h5>{{fixture.homeTeamName}} vs {{fixture.awayTeamName}}</h5>
    	<p>{{fixture.date | moment}}</p>

	</div>

</template>

<script>

import moment from 'moment'

export default{
	props: {
		fixture: {
			type: Object,
			required: true
		}
	},
	filters: {
		moment (date){
			return moment(date).format('h:mm a')
		} 
	}
}

</script>

<style scoped>
	
	#fixture {
		margin-top: 8px;
		border: 1px solid #2c3e50;
		border-radius: 15px;
		padding: 10px;
	}

</style>