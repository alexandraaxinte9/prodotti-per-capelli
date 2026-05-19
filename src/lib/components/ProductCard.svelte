<script lang="ts">
	import { base } from '$app/paths';
	import type { Product } from '$lib/data/products';
	import { formatPrice } from '$lib/data/products';

	let { product }: { product: Product } = $props();
</script>

<a href="{base}/prodotti/{product.slug}/" class="card">
	<div class="image-wrap">
		<img src={product.image} alt={product.name} loading="lazy" />
		<span class="category">{product.category}</span>
	</div>
	<div class="info">
		<h3 class="name">{product.name}</h3>
		<p class="tagline">{product.tagline}</p>
		<span class="price">{formatPrice(product.price)}</span>
	</div>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		transition: transform var(--transition);
	}

	.card:hover {
		transform: translateY(-4px);
	}

	.image-wrap {
		position: relative;
		aspect-ratio: 4 / 5;
		overflow: hidden;
		background: var(--color-bg-alt);
	}

	.image-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.card:hover .image-wrap img {
		transform: scale(1.05);
	}

	.category {
		position: absolute;
		top: 1rem;
		left: 1rem;
		font-size: 0.65rem;
		font-weight: 500;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		background: rgba(255, 255, 255, 0.9);
		padding: 0.35rem 0.75rem;
		color: var(--color-text-muted);
	}

	.info {
		padding: 1.25rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.name {
		font-family: var(--font-display);
		font-size: 1.35rem;
		font-weight: 500;
		letter-spacing: 0.02em;
	}

	.tagline {
		font-size: 0.85rem;
		color: var(--color-text-muted);
	}

	.price {
		margin-top: 0.5rem;
		font-size: 0.8rem;
		font-weight: 500;
		letter-spacing: 0.05em;
		color: var(--color-accent);
	}
</style>
