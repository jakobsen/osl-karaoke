<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<ul>
	{#each data.songs as song}
		<li>{song.data.title}</li>
	{/each}
</ul>
