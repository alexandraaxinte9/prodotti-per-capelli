export type Product = {
	id: string;
	slug: string;
	name: string;
	tagline: string;
	description: string;
	price: number;
	category: string;
	image: string;
	features: string[];
};

export const products: Product[] = [
	{
		id: '1',
		slug: 'siero-rigenerante',
		name: 'Siero Rigenerante',
		tagline: 'Ripristina lucentezza e forza',
		description:
			'Un concentrato di oli botanici e peptidi che penetra in profondità per riparare, proteggere e donare una luminosità setosa ai capelli spenti e danneggiati.',
		price: 48,
		category: 'Trattamento',
		image:
			'https://images.unsplash.com/photo-1608245449231-9f284c9f0c8c?w=800&h=1000&fit=crop&q=80',
		features: ['Olio di argan biologico', 'Peptidi riparativi', 'Senza siliconi']
	},
	{
		id: '2',
		slug: 'shampoo-detox',
		name: 'Shampoo Detox',
		tagline: 'Purifica senza aggressività',
		description:
			'Formula delicata a base di carbone attivo e estratti marini che elimina impurità e residui, lasciando i capelli leggeri, puliti e pronti ad assorbire i trattamenti.',
		price: 32,
		category: 'Detergenza',
		image:
			'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=1000&fit=crop&q=80',
		features: ['Carbone attivo', 'Estratti marini', 'pH bilanciato']
	},
	{
		id: '3',
		slug: 'balsamo-seta',
		name: 'Balsamo Seta',
		tagline: 'Morbidezza che dura',
		description:
			'Texture cremosa arricchita con burro di karité e proteine della seta. Districa istantaneamente, sigilla le cuticole e dona una sensazione vellutata al tatto.',
		price: 36,
		category: 'Detergenza',
		image:
			'https://images.unsplash.com/photo-1631729371254-42dca9b8e5a8?w=800&h=1000&fit=crop&q=80',
		features: ['Burro di karité', 'Proteine della seta', 'Districante immediato']
	},
	{
		id: '4',
		slug: 'maschera-nutriente',
		name: 'Maschera Nutriente',
		tagline: 'Rituale settimanale di cura',
		description:
			'Trattamento intensivo con olio di cocco e miele biologico. Nutre in profondità capelli secchi e crespi, restituendo elasticità e volume naturale.',
		price: 42,
		category: 'Trattamento',
		image:
			'https://images.unsplash.com/photo-1570172619644-dfd0edf5f0a7?w=800&h=1000&fit=crop&q=80',
		features: ['Olio di cocco vergine', 'Miele biologico', 'Azione ristrutturante']
	},
	{
		id: '5',
		slug: 'olio-luminoso',
		name: 'Olio Luminoso',
		tagline: 'Brillantezza senza peso',
		description:
			'Elixir leggero a base di jojoba e camelia che sigilla le punte, doma l\'effetto crespo e regala un finish luminoso senza appesantire.',
		price: 38,
		category: 'Styling',
		image:
			'https://images.unsplash.com/photo-1595476108800-f9b3f0f8a6b8?w=800&h=1000&fit=crop&q=80',
		features: ['Olio di jojoba', 'Estratto di camelia', 'Finish anti-crespo']
	},
	{
		id: '6',
		slug: 'crema-definizione',
		name: 'Crema Definizione',
		tagline: 'Movimento e controllo',
		description:
			'Crema modellante con texture setosa che definisce i ricci e aggiunge struttura ai capelli lisci, mantenendo naturalezza e tenuta flessibile.',
		price: 34,
		category: 'Styling',
		image:
			'https://images.unsplash.com/photo-1620916567369-9c2d6a8f8f0e?w=800&h=1000&fit=crop&q=80',
		features: ['Tenuta flessibile', 'Anti-umidità', 'Effetto naturale']
	}
];

export function getProductBySlug(slug: string): Product | undefined {
	return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
	return new Intl.NumberFormat('it-IT', {
		style: 'currency',
		currency: 'EUR'
	}).format(price);
}
