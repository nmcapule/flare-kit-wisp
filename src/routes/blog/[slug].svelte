<script context="module">
	export async function load({ page, fetch, session, context }) {
		return {
			props: {
				message: JSON.stringify(page, null, 2)
			}
		};
		// const url = `/blog/${page.params.slug}.json`;
		// const res = await fetch(url);

		// if (res.ok) {
		// 	return {
		// 		props: {
		// 			article: await res.json()
		// 		}
		// 	};
		// }

		// return {
		// 	status: res.status,
		// 	error: new Error(`Could not load ${url}`)
		// };
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';

	export let message = 'This is the default value';
</script>

<pre>
    <div>Message from $load: <code>{message}</code></div>
    <div>$page from $app/stores: {JSON.stringify($page, null, 2)}</div>
</pre>
