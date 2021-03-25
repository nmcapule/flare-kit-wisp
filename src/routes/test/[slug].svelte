<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { page } from '$app/stores';

	export let message = 'This is the default value';
</script>

<pre>
    <div>Message from $load: <code>{message}</code></div>
    <div>$page from $app/stores: {JSON.stringify($page, null, 2)}</div>
</pre>
