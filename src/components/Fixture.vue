<template>

	<div id="fixture">

    	<h5>{{fixture.homeTeamName}} vs {{fixture.awayTeamName}}</h5>
    	<p>{{fixture.date}}</p>

	</div>

</template>

<script>

export default{
	props: {
		fixture: {
			type: Object,
			required: true
		}
	}
}

</script>

<style scoped>
	
	#fixture {
		margin-top: 8px;
		border: 2px solid #73AD21;
		border-radius: 15px;
		padding: 10px;
	}

</style>