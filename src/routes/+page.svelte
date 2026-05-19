<script lang="ts">
	import { base } from '$app/paths';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/products';

	const featured = products.slice(0, 3);
</script>

<section class="hero">
	<div class="container hero-inner">
		<div class="hero-content">
			<p class="section-label">Collezione 2026</p>
			<h1 class="hero-title">
				La bellezza<br />
				<span class="italic">inizia dai capelli</span>
			</h1>
			<p class="hero-text">
				Formule botaniche di alta qualità, create per nutrire, proteggere e valorizzare ogni tipo di
				capello con eleganza e cura.
			</p>
			<div class="hero-actions">
				<a href="{base}/prodotti/" class="btn btn-primary">Scopri la collezione</a>
				<a href="{base}/chi-siamo/" class="btn btn-outline">La nostra storia</a>
			</div>
		</div>
		<div class="hero-visual">
			<img
				src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&h=900&fit=crop&q=80"
				alt="Capelli luminosi e curati"
			/>
			<div class="hero-accent"></div>
		</div>
	</div>
</section>

<section class="featured">
	<div class="container">
		<div class="section-header">
			<p class="section-label">In evidenza</p>
			<h2 class="section-title">I nostri bestseller</h2>
		</div>
		<div class="grid">
			{#each featured as product}
				<ProductCard {product} />
			{/each}
		</div>
		<div class="featured-cta">
			<a href="{base}/prodotti/" class="btn btn-outline">Vedi tutti i prodotti</a>
		</div>
	</div>
</section>

<section class="values">
	<div class="container values-grid">
		<div class="value">
			<span class="value-num">01</span>
			<h3>Ingredienti pregiati</h3>
			<p>Oli botanici, estratti naturali e peptidi selezionati con cura artigianale.</p>
		</div>
		<div class="value">
			<span class="value-num">02</span>
			<h3>Formule clean</h3>
			<p>Senza parabeni, siliconi e solfati aggressivi. Solo ciò che i capelli meritano.</p>
		</div>
		<div class="value">
			<span class="value-num">03</span>
			<h3>Sostenibilità</h3>
			<p>Packaging riciclabile e produzione responsabile, nel rispetto del pianeta.</p>
		</div>
	</div>
</section>

<style>
	.hero {
		padding: 4rem 0 6rem;
	}

	.hero-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.hero-title {
		font-family: var(--font-display);
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		font-weight: 400;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	.italic {
		font-style: italic;
		color: var(--color-accent);
	}

	.hero-text {
		font-size: 1.05rem;
		color: var(--color-text-muted);
		max-width: 420px;
		line-height: 1.8;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 0.5rem;
	}

	.hero-visual {
		position: relative;
	}

	.hero-visual img {
		width: 100%;
		aspect-ratio: 3 / 4;
		object-fit: cover;
	}

	.hero-accent {
		position: absolute;
		bottom: -1.5rem;
		right: -1.5rem;
		width: 60%;
		height: 60%;
		border: 1px solid var(--color-accent-light);
		z-index: -1;
	}

	.featured {
		padding: 5rem 0;
		background: var(--color-surface);
	}

	.section-header {
		text-align: center;
		margin-bottom: 3.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.featured-cta {
		text-align: center;
		margin-top: 3rem;
	}

	.values {
		padding: 6rem 0;
	}

	.values-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 3rem;
	}

	.value {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border);
	}

	.value-num {
		font-family: var(--font-display);
		font-size: 2rem;
		color: var(--color-accent-light);
		line-height: 1;
	}

	.value h3 {
		font-family: var(--font-display);
		font-size: 1.4rem;
		font-weight: 500;
	}

	.value p {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		line-height: 1.7;
	}

	@media (max-width: 900px) {
		.hero-inner {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.hero-visual {
			max-width: 480px;
			margin: 0 auto;
		}

		.grid,
		.values-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 580px) {
		.grid,
		.values-grid {
			grid-template-columns: 1fr;
		}

		.hero {
			padding: 2.5rem 0 4rem;
		}
	}
</style>
