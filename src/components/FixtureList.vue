<template>
	<div id="fixture-list">
  		<Fixture v-for="fixture in fixtures" :fixture="fixture"/>
  	</div>
</template>

<script>

import Fixture from './Fixture.vue'

export default {
	components: {
		Fixture
	},
	props: {
		fixtures: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>

#fixture-list {
	display: grid;
  	grid-template-columns: 1fr 1fr 1fr 1fr;
  	grid-gap: 1rem;
}

</style>