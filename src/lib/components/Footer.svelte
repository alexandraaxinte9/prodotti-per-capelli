<footer class="footer">
	<div class="container footer-inner">
		<div class="brand">
			<span class="logo-mark">SÈVE</span>
			<p class="tagline">Cura capillare di lusso, formulata con ingredienti selezionati.</p>
		</div>

		<div class="links">
			<div class="col">
				<h4>Navigazione</h4>
				<a href="/">Home</a>
				<a href="/prodotti">Collezione</a>
				<a href="/chi-siamo">Chi siamo</a>
			</div>
			<div class="col">
				<h4>Contatti</h4>
				<span>info@seve-capelli.it</span>
				<span>+39 02 1234 5678</span>
				<span>Milano, Italia</span>
			</div>
		</div>
	</div>

	<div class="container copyright">
		<p>&copy; {new Date().getFullYear()} SÈVE Capelli. Tutti i diritti riservati.</p>
	</div>
</footer>

<style>
	.footer {
		margin-top: auto;
		background: var(--color-text);
		color: var(--color-bg);
		padding: 4rem 0 0;
	}

	.footer-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		padding-bottom: 3rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.logo-mark {
		font-family: var(--font-display);
		font-size: 1.75rem;
		font-weight: 500;
		letter-spacing: 0.15em;
		display: block;
		margin-bottom: 1rem;
	}

	.brand .tagline {
		font-size: 0.9rem;
		color: rgba(250, 248, 245, 0.6);
		max-width: 280px;
		line-height: 1.7;
	}

	.links {
		display: flex;
		gap: 4rem;
		justify-content: flex-end;
	}

	.col {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.col h4 {
		font-size: 0.65rem;
		font-weight: 500;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-accent-light);
		margin-bottom: 0.5rem;
	}

	.col a,
	.col span {
		font-size: 0.85rem;
		color: rgba(250, 248, 245, 0.7);
		transition: color var(--transition);
	}

	.col a:hover {
		color: var(--color-bg);
	}

	.copyright {
		padding: 1.5rem 0;
	}

	.copyright p {
		font-size: 0.75rem;
		color: rgba(250, 248, 245, 0.4);
		letter-spacing: 0.05em;
	}

	@media (max-width: 640px) {
		.footer-inner {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.links {
			justify-content: flex-start;
			gap: 2.5rem;
		}
	}
</style>
