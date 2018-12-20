<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Montserrat');
	* {
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
		color: #222;
	}
	html, body { max-width: 100%; margin: 0; padding: 0; }
	#app {
		width: 100%;
		padding: 0 30px;
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
