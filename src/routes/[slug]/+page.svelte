<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: song = data.song;
</script>

<svelte:head>
	<title>{song.title} | Vokalisten er syk</title>
</svelte:head>

<h1>{song.title}</h1>
<div>{@html song.content}</div>
<a href="/">Tilbake til oversikten</a>
