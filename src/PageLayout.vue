<template>
	<div class="wrapper">
		<nav class="nav">
			<div class="site-name">
				<a href="/">Football Octopus</a>
			</div>

			
		</nav>
		<div class="content">
			<slot></slot>
		</div>
		<div class="sidebar">
			<strong><p>Featured Competitions</p></strong>
			<router-link to="/competition/467/">World Cup 2018</router-link>
		</div>
		<div class="footer">
			<p>&copy; Chris Hall 2018</p>
		</div>
	</div>
</template>

<style scoped>
.nav {
	grid-area: nav;
	background-color: #36B1BF;
	color: white;
}

.content {
	grid-area: main;
}

.sidebar {
	grid-area: sidebar;
}


.wrapper {
	display: grid;
	grid-gap: 20px;
	grid-template-areas: 
		"nav"
		"main"
		"sidebar";
}

@media (min-width: 500px) {
	.wrapper{
		grid-template-columns: 1fr 4fr;
    	grid-template-areas: 
	      "nav     nav"
	      "sidebar main"
	      "footer footer"
  	}
  	.nav {
  		height: 80px;
  	}
  	.nav ul{
  		display: flex;
  		justify-content: space-between;
  	}
}

.site-name {
	font-weight: 750;
	text-align: left;
	font-size: 40px;
	margin-top: 15px;
	margin-left: 20px;
}

.site-name a {
	color: white;
	text-decoration: none;
}

</style>

