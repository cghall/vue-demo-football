<template>

	<div>
		<h1> {{competition.caption}} </h1>

		<div id="tab-selector">
			<a href="#">Fixtures</a>
			<a href="#">Table</a>
		</div>

		<div v-for="date in dates">
			<h3>{{date}}</h3>
			<FixtureList :fixtures="fixturesByDate[date]"/>
		</div>
	</div>

</template>

<script>

import FixtureList from './FixtureList.vue'

import axios from 'axios'
import lodash from 'lodash';

export default {
	components: {
		FixtureList
	},
	data (){
		return {
			id: '',
			fixtures: [ ],
			leagueTable: { },
			competition: { },
			dates: [ ],
			fixturesByDate: { }
		}
	},
	created () { 
		this.id = this.$route.params.id
		axios.get('https://api.football-data.org/v1/competitions/' + this.id, {headers: {'X-Auth-Token': 'b2a53e861bfc49bc9523cf86ced68c0a' }}).then(response => {
	      		this.competition = response.data
    	})
		axios.get('https://api.football-data.org/v1/competitions/' + this.id + '/fixtures', {headers: {'X-Auth-Token': 'b2a53e861bfc49bc9523cf86ced68c0a' }}).then(response => {
	      		this.fixtures = response.data.fixtures
	      		this.fixturesByDate = _.groupBy(this.fixtures, function(fix){
	      			return fix.date.substring(0,10);
	      		})
	      		this.dates = _.keys(this.fixturesByDate)
    	})
    	axios.get('https://api.football-data.org/v1/competitions/' + this.id + '/leagueTable', {headers: {'X-Auth-Token': 'b2a53e861bfc49bc9523cf86ced68c0a' }}).then(response => {
	      		this.leagueTable = response.data
    	})
    	
    	
	}
}

</script>

