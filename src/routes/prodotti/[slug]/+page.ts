import { products, getProductBySlug } from '$lib/data/products';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const product = getProductBySlug(params.slug);
	if (!product) error(404, 'Prodotto non trovato');
	return { product };
};

export function entries() {
	return products.map((p) => ({ slug: p.slug }));
}
