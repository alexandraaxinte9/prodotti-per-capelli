<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>HAIR — Cura capillare di lusso</title>
	<meta
		name="description"
		content="Scopri la collezione HAIR: prodotti per capelli formulati con ingredienti pregiati per una cura capillare di lusso."
	/>
</svelte:head>

<div class="app">
	<Navbar />
	<main>{@render children()}</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}
</style>
