<section class="about">
	<div class="container">
		<div class="about-grid">
			<div class="about-content">
				<p class="section-label">Chi siamo</p>
				<h1 class="section-title">Nati dalla passione per la cura autentica</h1>
				<div class="text">
					<p>
						HAIR nasce a Milano nel 2020 da un'idea semplice: creare prodotti per capelli che
						uniscano efficacia scientifica e purezza botanica, senza compromessi.
					</p>
					<p>
						Ogni formula è sviluppata in laboratorio con ingredienti tracciati e selezionati, poi
						testata per garantire risultati visibili fin dalla prima applicazione.
					</p>
					<p>
						Crediamo che i capelli sani siano il riflesso di un equilibrio interiore. Per questo
						ogni prodotto HAIR è pensato come un rituale di cura — un momento per sé, lento e
						consapevole.
					</p>
				</div>
			</div>
			<div class="about-image">
				<img
					src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&h=900&fit=crop&q=80"
					alt="Laboratorio HAIR"
				/>
			</div>
		</div>
	</div>
</section>

<section class="philosophy">
	<div class="container philosophy-inner">
		<h2 class="section-title">La nostra filosofia</h2>
		<div class="pillars">
			<div class="pillar">
				<h3>Ricerca</h3>
				<p>Anni di studio sulle proprietà degli oli essenziali e dei peptidi riparativi.</p>
			</div>
			<div class="pillar">
				<h3>Trasparenza</h3>
				<p>Etichette chiare, ingredienti elencati per concentrazione decrescente.</p>
			</div>
			<div class="pillar">
				<h3>Artigianalità</h3>
				<p>Produzione in piccoli lotti per garantire freschezza e qualità costante.</p>
			</div>
		</div>
	</div>
</section>

<svelte:head>
	<title>Chi siamo — HAIR</title>
</svelte:head>

<style>
	.about {
		padding: 4rem 0 5rem;
	}

	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.about-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.text p {
		font-size: 0.95rem;
		color: var(--color-text-muted);
		line-height: 1.8;
	}

	.about-image img {
		width: 100%;
		aspect-ratio: 3 / 4;
		object-fit: cover;
	}

	.philosophy {
		padding: 5rem 0;
		background: var(--color-surface);
	}

	.philosophy-inner {
		text-align: center;
	}

	.philosophy-inner .section-title {
		margin-bottom: 3rem;
	}

	.pillars {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2.5rem;
	}

	.pillar {
		padding: 2rem 1.5rem;
		border: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.pillar h3 {
		font-family: var(--font-display);
		font-size: 1.5rem;
		font-weight: 500;
	}

	.pillar p {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		line-height: 1.7;
	}

	@media (max-width: 768px) {
		.about-grid {
			grid-template-columns: 1fr;
		}

		.pillars {
			grid-template-columns: 1fr;
		}
	}
</style>
