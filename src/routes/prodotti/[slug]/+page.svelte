<script lang="ts">
	import { base } from '$app/paths';
	import { formatPrice } from '$lib/data/products';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.product.name} — SÈVE Capelli</title>
	<meta name="description" content={data.product.description} />
</svelte:head>

<article class="product-page">
	<div class="container product-inner">
		<div class="gallery">
			<img src={data.product.image} alt={data.product.name} />
		</div>

		<div class="details">
			<a href="{base}/prodotti/" class="back-link">&larr; Torna alla collezione</a>

			<p class="section-label">{data.product.category}</p>
			<h1 class="product-name">{data.product.name}</h1>
			<p class="tagline">{data.product.tagline}</p>
			<p class="price">{formatPrice(data.product.price)}</p>

			<p class="description">{data.product.description}</p>

			<ul class="features">
				{#each data.product.features as feature}
					<li>{feature}</li>
				{/each}
			</ul>

			<button class="btn btn-primary add-btn">Aggiungi al carrello</button>

			<div class="meta">
				<div class="meta-item">
					<span class="meta-label">Spedizione</span>
					<span>Gratuita sopra i 50€</span>
				</div>
				<div class="meta-item">
					<span class="meta-label">Formato</span>
					<span>250 ml</span>
				</div>
			</div>
		</div>
	</div>
</article>

<style>
	.product-page {
		padding: 3rem 0 5rem;
	}

	.product-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.gallery {
		position: sticky;
		top: calc(var(--nav-height) + 2rem);
		background: var(--color-bg-alt);
		overflow: hidden;
	}

	.gallery img {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 1rem;
	}

	.back-link {
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-muted);
		margin-bottom: 1rem;
		transition: color var(--transition);
	}

	.back-link:hover {
		color: var(--color-text);
	}

	.product-name {
		font-family: var(--font-display);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 400;
		line-height: 1.15;
	}

	.tagline {
		font-family: var(--font-display);
		font-size: 1.2rem;
		font-style: italic;
		color: var(--color-accent);
	}

	.price {
		font-size: 1.1rem;
		font-weight: 500;
		letter-spacing: 0.05em;
		margin: 0.5rem 0;
	}

	.description {
		font-size: 0.95rem;
		color: var(--color-text-muted);
		line-height: 1.8;
		margin: 1rem 0;
	}

	.features {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		margin: 1rem 0 1.5rem;
		padding: 1.5rem 0;
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}

	.features li {
		font-size: 0.85rem;
		color: var(--color-text-muted);
		padding-left: 1.25rem;
		position: relative;
	}

	.features li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.55em;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--color-accent-light);
	}

	.add-btn {
		width: 100%;
		max-width: 320px;
	}

	.meta {
		display: flex;
		gap: 3rem;
		margin-top: 2rem;
	}

	.meta-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.meta-label {
		font-size: 0.65rem;
		font-weight: 500;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--color-accent);
	}

	.meta-item span:last-child {
		font-size: 0.85rem;
		color: var(--color-text-muted);
	}

	@media (max-width: 768px) {
		.product-inner {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.gallery {
			position: static;
		}
	}
</style>
