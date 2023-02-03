<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<svelte:head>
  <title>Vokalisten er syk</title>
</svelte:head>

<h1 class="heading">Vokalisten er syk</h1>
<ul class="song-list">
  {#each data.songs as song (song.slug)}
    <li class="song-list-item">
      <a href="/{song.slug}">{song.title}</a>
    </li>
  {/each}
</ul>

<style>
  .song-list {
    list-style: none;
    padding: 0;
  }

  .song-list-item {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  a,
  a:visited {
    color: inherit;
  }
</style>
