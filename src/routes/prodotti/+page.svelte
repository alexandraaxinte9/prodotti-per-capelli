<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/products';
</script>

<svelte:head>
	<title>Collezione — SÈVE Capelli</title>
</svelte:head>

<section class="page-header">
	<div class="container">
		<p class="section-label">Catalogo</p>
		<h1 class="section-title">La nostra collezione</h1>
		<p class="subtitle">
			Sei prodotti, sei rituali di cura. Ogni formula è pensata per un bisogno specifico, con
			ingredienti di origine naturale.
		</p>
	</div>
</section>

<section class="catalog">
	<div class="container">
		<div class="grid">
			{#each products as product}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>

<style>
	.page-header {
		padding: 4rem 0 2rem;
		text-align: center;
	}

	.subtitle {
		margin-top: 1rem;
		font-size: 1rem;
		color: var(--color-text-muted);
		max-width: 520px;
		margin-inline: auto;
		line-height: 1.7;
	}

	.catalog {
		padding: 2rem 0 5rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2.5rem 2rem;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 580px) {
		.grid {
			grid-template-columns: 1fr;
			max-width: 400px;
			margin: 0 auto;
		}
	}
</style>
