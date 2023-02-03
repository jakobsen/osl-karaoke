<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<ul>
	{#each data.songs as song}
		<li>
			<a href="/{song.slug}">{song.title}</a>
		</li>
	{/each}
</ul>
