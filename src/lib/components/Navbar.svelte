<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const links = [
		{ href: `${base}/`, label: 'Home' },
		{ href: `${base}/prodotti/`, label: 'Collezione' },
		{ href: `${base}/chi-siamo/`, label: 'Chi siamo' }
	];

	let menuOpen = $state(false);

	function isActive(href: string, pathname: string): boolean {
		const home = `${base}/`;
		if (href === home) return pathname === home || pathname === base;
		return pathname.startsWith(href.replace(/\/$/, ''));
	}
</script>

<header class="navbar">
	<div class="container navbar-inner">
		<a href="{base}/" class="logo">
			<span class="logo-mark">HAIR</span>
		</a>

		<nav class="nav-links" class:open={menuOpen}>
			{#each links as link}
				<a
					href={link.href}
					class="nav-link"
					class:active={isActive(link.href, $page.url.pathname)}
					onclick={() => (menuOpen = false)}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<button
			class="menu-toggle"
			aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="bar" class:open={menuOpen}></span>
			<span class="bar" class:open={menuOpen}></span>
		</button>
	</div>
</header>

<style>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 100;
		height: var(--nav-height);
		background: rgba(250, 248, 245, 0.92);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--color-border);
	}

	.navbar-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
	}

	.logo {
		display: flex;
		flex-direction: column;
		line-height: 1;
	}

	.logo-mark {
		font-family: var(--font-display);
		font-size: 1.5rem;
		font-weight: 500;
		letter-spacing: 0.15em;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2.5rem;
	}

	.nav-link {
		font-size: 0.75rem;
		font-weight: 400;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-text-muted);
		transition: color var(--transition);
		position: relative;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 1px;
		background: var(--color-accent);
		transition: width var(--transition);
	}

	.nav-link:hover,
	.nav-link.active {
		color: var(--color-text);
	}

	.nav-link.active::after {
		width: 100%;
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 6px;
		width: 32px;
		height: 32px;
		padding: 4px;
	}

	.bar {
		display: block;
		width: 100%;
		height: 1px;
		background: var(--color-text);
		transition: transform var(--transition), opacity var(--transition);
	}

	.bar:first-child.open {
		transform: translateY(3.5px) rotate(45deg);
	}

	.bar:last-child.open {
		transform: translateY(-3.5px) rotate(-45deg);
	}

	@media (max-width: 640px) {
		.menu-toggle {
			display: flex;
		}

		.nav-links {
			position: fixed;
			top: var(--nav-height);
			left: 0;
			right: 0;
			flex-direction: column;
			gap: 0;
			background: var(--color-bg);
			border-bottom: 1px solid var(--color-border);
			padding: 1rem 0;
			transform: translateY(-110%);
			opacity: 0;
			pointer-events: none;
			transition: all var(--transition);
		}

		.nav-links.open {
			transform: translateY(0);
			opacity: 1;
			pointer-events: auto;
		}

		.nav-link {
			padding: 1rem 1.5rem;
			width: 100%;
		}
	}
</style>
